import { jsx as n, jsxs as O, Fragment as De } from "react/jsx-runtime";
import { forwardRef as He, useId as qe, isValidElement as Rt, cloneElement as ds, useState as V, useRef as le, useCallback as H, useMemo as $e, useContext as Ws, createContext as Xs, useEffect as ke, Fragment as sr, Children as rr, useImperativeHandle as us } from "react";
const or = "_button_mpzch_1", lr = "_filled_mpzch_36", ar = "_flat_mpzch_39", ir = "_outlined_mpzch_42", cr = "_text_mpzch_47", dr = "_loading_mpzch_538", ur = "_spinner_mpzch_541", _r = "_xs_mpzch_557", fr = "_sm_mpzch_563", hr = "_md_mpzch_569", pr = "_lg_mpzch_575", mr = "_xl_mpzch_581", gr = "_iconOnly_mpzch_587", yr = "_fullWidth_mpzch_617", Ct = {
  button: or,
  filled: lr,
  flat: ar,
  outlined: ir,
  text: cr,
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
  loading: dr,
  spinner: ur,
  "dx-spin": "_dx-spin_mpzch_1",
  xs: _r,
  sm: fr,
  md: hr,
  lg: pr,
  xl: mr,
  iconOnly: gr,
  fullWidth: yr
};
function xr(e, t) {
  const s = t, o = e ?? "filled";
  return { variant: o === "filled" || o === "flat" || o === "outlined" || o === "text" ? o : "filled", style: s ?? "primary" };
}
const Fb = He(
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
      ...w
    } = t;
    if (p === !1) return null;
    const k = xr(o, i), f = !(k.style === "light" || k.style === "dark") && c !== "default" ? `shade-${c}` : null, u = [
      Ct.button,
      Ct[k.variant],
      Ct[`style-${k.style}`],
      // backwards-compat: tone-* still emitted
      Ct[`tone-${k.style}`],
      f ? Ct[f] : null,
      Ct[h],
      r ? Ct.fullWidth : null,
      l ? Ct.iconOnly : null,
      a ? Ct.loading : null,
      // Press feedback on every button (Radzen material parity).
      "dx-ripple",
      d
    ].filter(Boolean).join(" "), y = /* @__PURE__ */ O(De, { children: [
      a ? /* @__PURE__ */ n("span", { "aria-hidden": "true", className: Ct.spinner }) : null,
      b
    ] }), $ = t.href;
    if ($ != null) {
      const { onClick: x, ...N } = w, E = v || a;
      return /* @__PURE__ */ n(
        "a",
        {
          ref: s,
          href: $,
          className: u,
          "aria-disabled": E || void 0,
          "aria-busy": a || void 0,
          onClick: (I) => {
            if (E) {
              I.preventDefault();
              return;
            }
            x?.(I);
          },
          ...N,
          children: y
        }
      );
    }
    const { type: m = "button", ...S } = w;
    return /* @__PURE__ */ n(
      "button",
      {
        ref: s,
        type: m,
        className: u,
        disabled: v || a,
        "aria-busy": a || void 0,
        ...S,
        children: y
      }
    );
  }
), br = "_card_1ozlz_1", vr = "_elevated_1ozlz_8", kr = "_filled_1ozlz_13", wr = "_outlined_1ozlz_18", $r = "_interactive_1ozlz_22", Nr = "_text_1ozlz_30", Or = "_header_1ozlz_46", Sr = "_body_1ozlz_53", zr = "_footer_1ozlz_63", vn = {
  card: br,
  elevated: vr,
  filled: kr,
  outlined: wr,
  interactive: $r,
  text: Nr,
  header: Or,
  body: Sr,
  footer: zr
}, qb = He(function({
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
const Dr = "_badge_1dt9s_1", Mr = "_xs_1dt9s_21", Cr = "_sm_1dt9s_26", Er = "_md_1dt9s_31", Ir = "_lg_1dt9s_36", jr = "_xl_1dt9s_41", Ar = "_neutral_1dt9s_47", Tr = "_primary_1dt9s_52", Lr = "_secondary_1dt9s_61", Rr = "_light_1dt9s_66", Pr = "_base_1dt9s_71", Br = "_dark_1dt9s_76", Fr = "_info_1dt9s_81", qr = "_success_1dt9s_86", Hr = "_warning_1dt9s_95", Kr = "_danger_1dt9s_104", Ur = "_filled_1dt9s_111", Wr = "_outlined_1dt9s_161", Xr = "_text_1dt9s_213", kn = {
  badge: Dr,
  xs: Mr,
  sm: Cr,
  md: Er,
  lg: Ir,
  xl: jr,
  neutral: Ar,
  primary: Tr,
  secondary: Lr,
  light: Rr,
  base: Pr,
  dark: Br,
  info: Fr,
  success: qr,
  warning: Hr,
  danger: Kr,
  filled: Ur,
  outlined: Wr,
  text: Xr,
  "shade-lighter": "_shade-lighter_1dt9s_484",
  "shade-light": "_shade-light_1dt9s_484",
  "shade-dark": "_shade-dark_1dt9s_492",
  "shade-darker": "_shade-darker_1dt9s_495"
}, Hb = He(function({
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
}), Vr = "_xs_2a6lm_2", Gr = "_sm_2a6lm_7", Yr = "_md_2a6lm_1", Zr = "_lg_2a6lm_17", Jr = "_xl_2a6lm_22", Qr = {
  xs: Vr,
  sm: Gr,
  md: Yr,
  lg: Zr,
  xl: Jr
}, Kb = [
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
], eo = {
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
}, Ne = He(function({ name: t, size: s = "md", strokeWidth: o = 2, className: i, ...c }, h) {
  const r = typeof s == "string";
  return /* @__PURE__ */ n(
    "svg",
    {
      ref: h,
      className: [r ? Qr[s] : null, i].filter(Boolean).join(" "),
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
      children: eo[t]
    }
  );
}), to = "_stat_sjin9_1", no = "_label_sjin9_8", so = "_row_sjin9_16", ro = "_value_sjin9_22", oo = "_delta_sjin9_28", lo = "_success_sjin9_33", ao = "_danger_sjin9_37", io = "_neutral_sjin9_41", co = "_hint_sjin9_45", tn = {
  stat: to,
  label: no,
  row: so,
  value: ro,
  delta: oo,
  success: lo,
  danger: ao,
  neutral: io,
  hint: co
}, Ub = He(function({ label: t, value: s, delta: o, deltaTone: i = "neutral", hint: c, className: h, ...r }, l) {
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
}), uo = "_wrap_1jc7y_1", _o = "_table_1jc7y_8", fo = "_caption_1jc7y_14", ho = "_none_1jc7y_51", po = "_horizontal_1jc7y_57", mo = "_vertical_1jc7y_67", go = "_alternating_1jc7y_85", yo = "_start_1jc7y_89", xo = "_center_1jc7y_93", bo = "_end_1jc7y_97", vo = "_empty_1jc7y_101", Yt = {
  wrap: uo,
  table: _o,
  caption: fo,
  none: ho,
  horizontal: po,
  vertical: mo,
  alternating: go,
  start: yo,
  center: xo,
  end: bo,
  empty: vo
};
function Wb({
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
const ko = "_emptyState_1swxw_1", wo = "_icon_1swxw_13", $o = "_title_1swxw_18", No = "_description_1swxw_24", Oo = "_action_1swxw_30", wn = {
  emptyState: ko,
  icon: wo,
  title: $o,
  description: No,
  action: Oo
};
function Xb({
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
const So = "_field_149oz_1", zo = "_label_149oz_8", Do = "_required_149oz_14", Mo = "_hint_149oz_19", Co = "_error_149oz_24", $n = {
  field: So,
  label: zo,
  required: Do,
  hint: Mo,
  error: Co
};
function Vb({
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
  const b = c != null ? d : a != null ? v : null, w = typeof h == "function" ? h({ inputId: p, hintId: v, errorId: d }) : h, k = Rt(w) && typeof w.props.id == "string" ? w.props.id : void 0, _ = k ?? t ?? p, f = Rt(w) && (b != null || k == null && typeof w.type == "string"), u = k != null || t != null || f, y = f && Rt(w) ? ds(w, {
    id: _,
    "aria-describedby": b != null ? [
      w.props["aria-describedby"],
      b
    ].filter(($) => typeof $ == "string").join(" ") || void 0 : w.props["aria-describedby"],
    "aria-invalid": c != null ? !0 : w.props["aria-invalid"]
  }) : w;
  return /* @__PURE__ */ O("div", { className: [$n.field, r].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ O(
      "label",
      {
        className: $n.label,
        htmlFor: u ? _ : void 0,
        children: [
          e,
          s === !0 && /* @__PURE__ */ n("span", { className: $n.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    y,
    c != null ? /* @__PURE__ */ n("div", { id: d, className: $n.error, "aria-live": "polite", children: c }) : a != null ? /* @__PURE__ */ n("div", { id: v, className: $n.hint, children: a }) : null
  ] });
}
const Eo = "_formfield_tmzwu_1", Io = "_content_tmzwu_8", jo = "_floating_tmzwu_43", Ao = "_label_tmzwu_111", To = "_start_tmzwu_132", Lo = "_required_tmzwu_169", Ro = "_end_tmzwu_175", Po = "_filled_tmzwu_192", Bo = "_flat_tmzwu_199", Fo = "_helper_tmzwu_206", qo = "_invalid_tmzwu_211", Et = {
  formfield: Eo,
  content: Io,
  floating: jo,
  label: Ao,
  start: To,
  required: Lo,
  end: Ro,
  filled: Po,
  flat: Bo,
  helper: Fo,
  invalid: qo
};
function Gb({
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
  const w = i ?? v, k = typeof a == "function" ? a({
    inputId: w
  }) : a, _ = Rt(k) ? k.type : null, f = typeof _ == "string", u = Rt(k) && typeof _ != "symbol", y = Rt(k) ? k.props : null, $ = typeof y?.id == "string" ? y.id : void 0, m = f && Rt(k) ? k.type.toLowerCase() : null, S = m != null && (m === "input" ? typeof y?.type != "string" || y.type.toLowerCase() !== "hidden" : m === "button" || m === "meter" || m === "output" || m === "progress" || m === "select" || m === "textarea"), x = u && (o != null || r || $ == null && S), N = $ != null || i != null || x, E = m === "input" && typeof y?.type == "string" ? y.type.toLowerCase() : null, I = m === "textarea" || m === "input" && (E == null || [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number"
  ].includes(E)), C = x && Rt(k) ? ds(
    k,
    {
      id: $ ?? w,
      ...c && I && y?.placeholder == null ? { placeholder: " " } : {},
      ...o != null ? {
        "aria-describedby": [
          y?.["aria-describedby"],
          b
        ].filter((g) => typeof g == "string").join(" ")
      } : {},
      ...r ? {
        "aria-invalid": !0
      } : {}
    }
  ) : k, z = e != null ? /* @__PURE__ */ O(
    "label",
    {
      className: Et.label,
      htmlFor: N ? $ ?? w : void 0,
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
        c ? null : z,
        /* @__PURE__ */ O("div", { className: Et.content, children: [
          t != null && /* @__PURE__ */ n("div", { className: Et.start, children: t }),
          C,
          c ? z : null,
          s != null && /* @__PURE__ */ n("div", { className: Et.end, children: s })
        ] }),
        o != null && /* @__PURE__ */ n("div", { id: b, className: Et.helper, children: o })
      ]
    }
  );
}
const Ho = "_fieldset_1ionk_1", Ko = "_legend_1ionk_11", Uo = "_legendText_1ionk_20", Wo = "_toggle_1ionk_24", Xo = "_content_1ionk_45", Vo = "_summary_1ionk_49", nn = {
  fieldset: Ho,
  legend: Ko,
  legendText: Uo,
  toggle: Wo,
  content: Xo,
  summary: Vo
};
function Yb({
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
  children: w,
  className: k,
  visible: _ = !0
}) {
  const f = qe(), [u, y] = V(h);
  if (_ === !1) return null;
  const $ = c ?? u, m = i ? `${f}-content` : void 0, S = () => {
    const z = !$;
    c === void 0 && y(z), z ? b?.() : v?.();
  }, x = i || e != null || s != null || t != null, N = i ? $ : !1, E = i && $ && r != null, I = N ? l ?? "Expand" : a ?? "Collapse", C = N ? p ?? "Expand" : d ?? "Collapse";
  return /* @__PURE__ */ O(
    "fieldset",
    {
      className: [nn.fieldset, k].filter(Boolean).join(" "),
      children: [
        x ? /* @__PURE__ */ n("legend", { className: nn.legend, children: i ? /* @__PURE__ */ O(De, { children: [
          /* @__PURE__ */ O(
            "button",
            {
              type: "button",
              className: nn.toggle,
              title: I,
              "aria-label": e == null ? C : void 0,
              "aria-expanded": !N,
              "aria-controls": m,
              onClick: S,
              children: [
                /* @__PURE__ */ n(
                  Ne,
                  {
                    name: N ? "plus" : "minus",
                    size: 16,
                    "aria-hidden": "true"
                  }
                ),
                s != null && /* @__PURE__ */ n(
                  Ne,
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
            Ne,
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
            id: m,
            hidden: N,
            children: w
          }
        ),
        E ? /* @__PURE__ */ n("div", { className: nn.summary, children: r }) : null
      ]
    }
  );
}
const Go = "_form_19k3s_1", Yo = {
  form: Go
}, Vs = Xs(null);
function Zo() {
  const e = Ws(Vs);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function Zb({
  model: e,
  onSubmit: t,
  onInvalidSubmit: s,
  action: o,
  method: i,
  children: c,
  className: h
}) {
  const [r, l] = V({}), [a, p] = V(0), d = le(r);
  d.current = r;
  const v = H((y) => {
    l(
      ($) => $[y.name] === y ? $ : { ...$, [y.name]: y }
    );
  }, []), b = H((y) => {
    l(($) => {
      if (!(y in $)) return $;
      const m = { ...$ };
      return delete m[y], m;
    });
  }, []), w = H(() => {
    const y = {};
    for (const $ of Object.values(d.current)) {
      const m = $.validate();
      m.length > 0 && (y[$.name] = m);
    }
    return y;
  }, []), k = H(() => {
    const y = w();
    p(($) => $ + 1), Object.keys(y).length === 0 ? t?.(e) : s?.(y);
  }, [w, e, t, s]), _ = (y) => {
    o != null && i != null || (y.preventDefault(), k());
  }, f = $e(
    () => ({ registerField: v, unregisterField: b, submit: k, submitCount: a }),
    [v, b, k, a]
  ), u = [Yo.form, h].filter(Boolean).join(" ");
  return /* @__PURE__ */ n(Vs.Provider, { value: f, children: /* @__PURE__ */ n(
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
const dn = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", Jb = (e = "Required") => (t) => dn(t) ? e : null, Qb = (e = "Invalid email") => (t) => dn(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, ev = (e, t = "Invalid format") => (s) => dn(s) || e.test(String(s)) ? null : t, tv = (e, t = `Minimum ${e} characters`) => (s) => dn(s) || String(s).length >= e ? null : t, nv = (e, t = `Maximum ${e} characters`) => (s) => dn(s) || String(s).length <= e ? null : t, sv = (e, t, s = `Between ${e} and ${t}`) => (o) => {
  if (dn(o)) return null;
  const i = Number(o);
  return !Number.isNaN(i) && i >= e && i <= t ? null : s;
}, rv = (e, t = "Values do not match") => (s, o) => {
  if (dn(s)) return null;
  const i = typeof e == "function" ? e(o) : e;
  return s === i ? null : t;
}, ov = (e = "Required") => (t) => t === !0 ? null : e, lv = (e) => (t, s) => e(t, s);
function Jo(e, t, s) {
  return e.map((o) => o(t, s)).filter((o) => o != null);
}
function av(e, t) {
  const { registerField: s, unregisterField: o, submitCount: i } = Zo(), [c, h] = V(t?.initialValue), [r, l] = V(!1), [a, p] = V(!1), d = le(() => []);
  d.current = () => Jo(t?.validate ?? [], c), ke(() => (s({ name: e, validate: () => d.current() }), () => o(e)), [e, s, o]), ke(() => {
    i > 0 && (l(!0), p(!1));
  }, [i]);
  const v = r && !a ? d.current() : [];
  return { value: c, setValue: (w) => {
    h(w), p(!0);
  }, errors: v };
}
const Qo = "_select_1j4dh_1", el = "_invalid_1j4dh_33", tl = "_xs_1j4dh_40", nl = "_sm_1j4dh_48", sl = "_md_1j4dh_56", rl = "_lg_1j4dh_62", ol = "_xl_1j4dh_68", Qn = {
  select: Qo,
  invalid: el,
  xs: tl,
  sm: nl,
  md: sl,
  lg: rl,
  xl: ol
}, bn = He(
  function({ size: t = "md", invalid: s = !1, options: o, children: i, className: c, ...h }, r) {
    return /* @__PURE__ */ n(
      "select",
      {
        ref: r,
        "data-size": t,
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
), Gs = [
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
}, ll = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
];
function al(e) {
  return ll.includes(e);
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
function Ln(e, t) {
  const s = ps(e), o = ps(t);
  if (typeof s == "number" && typeof o == "number") return s - o;
  const i = String(s ?? ""), c = String(o ?? "");
  return i < c ? -1 : i > c ? 1 : 0;
}
function Jn(e) {
  if (e.secondOperator == null) return !1;
  if (al(e.secondOperator)) return !0;
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
      return Ln(h, r) < 0;
    case "LessThanOrEquals":
      return Ln(h, r) <= 0;
    case "GreaterThan":
      return Ln(h, r) > 0;
    case "GreaterThanOrEquals":
      return Ln(h, r) >= 0;
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
function Ys(e, t, s = {}) {
  const o = s.logicalOperator ?? "And", i = s.caseSensitivity ?? "CaseInsensitive";
  if (fs(t)) {
    if (t.filters.length === 0) return !0;
    const c = t.operator ?? o;
    return t.filters[c === "Or" ? "some" : "every"](
      (h) => Ys(e, h, { logicalOperator: c, caseSensitivity: i })
    );
  }
  return t.operator === "Custom", ms(t, e, i);
}
function Zs(e, t, s = {}) {
  return e.filter((o) => Ys(o, t, s));
}
function il(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function gt(e) {
  return typeof e == "string" ? `"${il(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(gt).join(", ")}]` : `"${String(e)}"`;
}
function cl(e) {
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
function dl(e) {
  return fs(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(dl).filter(Boolean).join(` ${e.operator} `)})` : cl(e);
}
function ul(e) {
  return e.replace(/'/g, "''");
}
const _l = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function fl(e, t) {
  const s = e.property, o = t === "CaseInsensitive", i = (a) => o ? `tolower(${a})` : a, c = (a) => typeof a == "string" ? `'${ul(a)}'` : a instanceof Date ? `'${a.toISOString()}'` : String(a ?? ""), h = (a, p) => {
    const d = typeof p == "string", v = d && o ? i(s) : s;
    switch (a) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${v} ${_l[a]} ${d && o ? i(c(p)) : c(p)}`;
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
function hl(e, t = {}) {
  const s = t.caseSensitivity ?? "CaseInsensitive";
  if (fs(e)) {
    if (e.filters.length === 0) return "";
    const o = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((i) => hl(i, { caseSensitivity: s })).filter(Boolean).join(` ${o} `)})`;
  }
  return fl(e, s);
}
function pl(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((s, o) => {
    for (const i of t) {
      const c = i.sortOrder === "Ascending" ? 1 : -1, h = Ln(
        Zn(s, i.property),
        Zn(o, i.property)
      );
      if (h !== 0) return h * c;
    }
    return 0;
  });
}
const ml = "_filter_los3f_1", gl = "_rows_los3f_9", yl = "_row_los3f_9", xl = "_join_los3f_21", bl = "_property_los3f_30", vl = "_operator_los3f_34", kl = "_value_los3f_38", wl = "_remove_los3f_42", $l = "_bar_los3f_58", Nl = "_add_los3f_64", Ol = "_custom_los3f_78", Sl = "_summary_los3f_82", zl = "_second_los3f_87", Dl = "_secondAdd_los3f_91", Ml = "_addSecond_los3f_95", Cl = "_joinSelect_los3f_109", Ye = {
  filter: ml,
  rows: gl,
  row: yl,
  join: xl,
  property: bl,
  operator: vl,
  value: kl,
  remove: wl,
  bar: $l,
  add: Nl,
  custom: Ol,
  summary: Sl,
  second: zl,
  secondAdd: Dl,
  addSecond: Ml,
  joinSelect: Cl
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
function iv({
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
  const [a, p] = V(
    () => o != null && o.length > 0 ? o.map((f, u) => ({ id: u, ...f })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: Nn[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), d = (f, u) => {
    p(
      (y) => y.map(($) => $.id === f ? { ...$, ...u } : $)
    );
  }, v = () => {
    const f = a[a.length - 1], u = Math.max(0, ...a.map(($) => $.id)) + 1, y = e[0];
    p(($) => [
      ...$,
      {
        id: u,
        property: f?.property ?? y?.name ?? "",
        operator: Nn[e.find(
          (m) => m.name === (f?.property ?? y?.name)
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
      if (u.property === "" || (u.value == null || u.value === "") && !On.includes(u.operator)) continue;
      const $ = {
        property: u.property,
        operator: u.operator,
        value: u.value
      }, { secondOperator: m } = u;
      m != null && Jn(u) && ($.secondOperator = m, $.secondValue = u.secondValue, $.logicalOperator = u.logicalOperator ?? "And"), f.push($);
    }
    return f;
  }, [a]), k = $e(() => r == null || w.length === 0 ? r : Zs(r, {
    operator: t,
    filters: w
  }, {
    caseSensitivity: s
  }), [r, w, t, s]);
  ke(() => {
    h != null && r != null && h(k ?? []);
  }, [k]);
  const _ = (f) => e.find((u) => u.name === f) ?? { name: f, type: "string" };
  return /* @__PURE__ */ O("div", { className: [Ye.filter, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ n("div", { className: Ye.rows, role: "group", "aria-label": "Filter conditions", children: a.map((f, u) => {
      const y = _(f.property), $ = i ? [Nn[y.type ?? "string"]] : Gs, m = !On.includes(f.operator), S = f.secondOperator != null;
      return /* @__PURE__ */ O(sr, { children: [
        /* @__PURE__ */ O("div", { className: Ye.row, children: [
          u > 0 ? /* @__PURE__ */ n("span", { className: Ye.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ n(
            bn,
            {
              "aria-label": `Condition ${u + 1} property`,
              className: Ye.property,
              value: f.property,
              onChange: (x) => {
                const N = e.find(
                  (E) => E.name === x.target.value
                );
                d(f.id, {
                  property: x.target.value,
                  operator: Nn[N?.type ?? "string"],
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
            bn,
            {
              "aria-label": `Condition ${u + 1} operator`,
              className: Ye.operator,
              value: f.operator,
              onChange: (x) => {
                const N = x.target.value;
                d(
                  f.id,
                  On.includes(N) ? {
                    operator: N,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: N }
                );
              },
              options: $.map((x) => ({
                value: x,
                label: ys[x]
              }))
            }
          ),
          m ? /* @__PURE__ */ n(
            xs,
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
              className: Ye.remove,
              "aria-label": `Remove condition ${u + 1}`,
              onClick: () => b(f.id),
              children: /* @__PURE__ */ n(Ne, { name: "close", size: "sm" })
            }
          )
        ] }),
        m ? S ? /* @__PURE__ */ O(
          "div",
          {
            className: [Ye.row, Ye.second].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ n(
                bn,
                {
                  "aria-label": `Condition ${u + 1} second-operator logic`,
                  className: Ye.joinSelect,
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
                bn,
                {
                  "aria-label": `Condition ${u + 1} second operator`,
                  className: Ye.operator,
                  value: f.secondOperator,
                  onChange: (x) => {
                    const N = x.target.value;
                    d(
                      f.id,
                      On.includes(N) ? { secondOperator: N, secondValue: void 0 } : { secondOperator: N }
                    );
                  },
                  options: $.map((x) => ({
                    value: x,
                    label: ys[x]
                  }))
                }
              ),
              f.secondOperator == null || !On.includes(f.secondOperator) ? /* @__PURE__ */ n(
                xs,
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
                  className: Ye.remove,
                  "aria-label": `Remove second condition ${u + 1}`,
                  onClick: () => d(f.id, {
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  }),
                  children: /* @__PURE__ */ n(Ne, { name: "close", size: "sm" })
                }
              )
            ]
          }
        ) : /* @__PURE__ */ n("div", { className: Ye.secondAdd, children: /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: Ye.addSecond,
            onClick: () => d(f.id, {
              secondOperator: Nn[y.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, f.id);
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
const El = "_pager_k78w3_1", Il = "_alignLeft_k78w3_10", jl = "_alignCenter_k78w3_14", Al = "_alignRight_k78w3_18", Tl = "_alignJustify_k78w3_22", Ll = "_summary_k78w3_26", Rl = "_controls_k78w3_31", Pl = "_button_k78w3_37", Bl = "_active_k78w3_73", Fl = "_ellipsis_k78w3_85", ql = "_size_k78w3_91", at = {
  pager: El,
  alignLeft: Il,
  alignCenter: jl,
  alignRight: Al,
  alignJustify: Tl,
  summary: Ll,
  controls: Rl,
  button: Pl,
  active: Bl,
  ellipsis: Fl,
  size: ql
};
function Hl(e, t, s, o) {
  return e.replace("{0}", String(t)).replace("{1}", String(s)).replace("{2}", String(o));
}
function bs(e, t) {
  return e.replace("{0}", String(t));
}
function Kl(e, t, s) {
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
function Ul({
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
  onPageSizeChange: $,
  ariaLabel: m = "Pagination",
  className: S,
  visible: x = !0
}) {
  const N = s ?? o, [E, I] = V(N), C = s !== void 0, z = C ? N : E, g = Math.max(1, Math.ceil(e / t)), M = Math.min(Math.max(1, z), g), P = l ?? !0, j = h || g > 1, T = Kl(M, g, c), F = H(
    (K) => {
      const te = Math.min(Math.max(1, K), g);
      C || I(te);
      const oe = (te - 1) * t;
      y?.({
        page: te,
        skip: oe,
        top: t,
        pageCount: g,
        pageSize: t
      });
    },
    [C, y, g, t]
  ), X = r === "center" ? at.alignCenter : r === "right" ? at.alignRight : r === "justify" ? at.alignJustify : at.alignLeft, Z = {
    count: e,
    pageNumber: M,
    pageSize: t,
    pageCount: g
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
      className: [at.pager, X, S].filter(Boolean).join(" "),
      "aria-label": m,
      children: [
        P && /* @__PURE__ */ n("span", { className: at.summary, "aria-live": "polite", children: d ? d(Z) : Hl(p, M, g, e) }),
        /* @__PURE__ */ O(
          "div",
          {
            className: at.controls,
            role: "group",
            "aria-label": m,
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
                    className: [at.button, K === M ? at.active : ""].filter(Boolean).join(" "),
                    "aria-current": K === M ? "page" : void 0,
                    "aria-label": bs(u, K),
                    title: bs(f, K),
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
                  disabled: M >= g,
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
                  disabled: M >= g,
                  onClick: () => F(g),
                  "aria-label": _,
                  title: _,
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
              onChange: (K) => $?.(Number(K.target.value)),
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
    Ul,
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
function Wl(e, t, s, o, i, c) {
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
function Xl(e, t) {
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
function Gl(e, t, s = {}) {
  const o = e.find((c) => c.property === t), i = ks[(o ? ks.indexOf(o.sortOrder) : -1) + 1] ?? null;
  return i == null ? e.filter((c) => c.property !== t) : s.multi ? [
    ...e.filter((c) => c.property !== t),
    { property: t, sortOrder: i }
  ] : [{ property: t, sortOrder: i }];
}
function Yl(e, t) {
  return pl(e, t);
}
function Zl(e, t, s) {
  const o = Math.max(1, Math.ceil(e.length / s)), i = Math.min(Math.max(1, t), o), c = (i - 1) * s;
  return {
    items: e.slice(c, c + s),
    pageCount: o,
    pageNumber: i,
    total: e.length
  };
}
function Jl(e, t, s = {}) {
  const o = [...t.filters.entries()].filter(([, r]) => r.value !== "" && r.value !== void 0).map(
    ([r, l]) => ({
      property: r,
      operator: l.operator ?? "Contains",
      value: Vl(
        l.value,
        s.types?.[r] ?? "string"
      )
    })
  ), i = o.length > 0 ? Zs(
    e,
    { operator: s.logicalOperator ?? "And", filters: o },
    {
      logicalOperator: s.logicalOperator ?? "And",
      caseSensitivity: s.caseSensitivity ?? "CaseInsensitive"
    }
  ) : e, c = Yl(i, t.sorts);
  return {
    ...Zl(c, t.pageNumber, t.pageSize),
    sorts: t.sorts,
    filters: t.filters,
    pageSize: t.pageSize
  };
}
function Ql(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
const ea = "_grid_a6ibk_1", ta = "_toolbar_a6ibk_8", na = "_picker_a6ibk_13", sa = "_pickerButton_a6ibk_17", ra = "_pickerPanel_a6ibk_31", oa = "_pickerItem_a6ibk_46", la = "_groupPanel_a6ibk_55", aa = "_groupPanelActive_a6ibk_66", ia = "_groupPanelText_a6ibk_70", ca = "_groupChip_a6ibk_74", da = "_groupRemove_a6ibk_85", ua = "_groupRow_a6ibk_94", _a = "_groupCell_a6ibk_98", fa = "_groupToggle_a6ibk_103", ha = "_editRow_a6ibk_116", pa = "_editCell_a6ibk_120", ma = "_editInput_a6ibk_125", ga = "_commandCell_a6ibk_135", ya = "_commandButton_a6ibk_141", xa = "_data_a6ibk_156", ba = "_table_a6ibk_163", va = "_header_a6ibk_169", ka = "_center_a6ibk_181", wa = "_right_a6ibk_185", $a = "_sortButton_a6ibk_189", Na = "_sortIndicator_a6ibk_207", Oa = "_sortIndex_a6ibk_211", Sa = "_cell_a6ibk_222", za = "_clickable_a6ibk_236", Da = "_frozen_a6ibk_244", Ma = "_selected_a6ibk_250", Ca = "_resizeHandle_a6ibk_258", Ea = "_filterCell_a6ibk_276", Ia = "_filterSelect_a6ibk_284", ja = "_filterInput_a6ibk_294", Aa = "_empty_a6ibk_305", Ta = "_loading_a6ibk_311", La = "_visuallyHidden_a6ibk_321", ge = {
  grid: ea,
  toolbar: ta,
  picker: na,
  pickerButton: sa,
  pickerPanel: ra,
  pickerItem: oa,
  groupPanel: la,
  groupPanelActive: aa,
  groupPanelText: ia,
  groupChip: ca,
  groupRemove: da,
  groupRow: ua,
  groupCell: _a,
  groupToggle: fa,
  editRow: ha,
  editCell: pa,
  editInput: ma,
  commandCell: ga,
  commandButton: ya,
  data: xa,
  table: ba,
  header: va,
  center: ka,
  right: wa,
  sortButton: $a,
  sortIndicator: Na,
  sortIndex: Oa,
  cell: Sa,
  clickable: za,
  frozen: Da,
  selected: Ma,
  resizeHandle: Ca,
  filterCell: Ea,
  filterSelect: Ia,
  filterInput: ja,
  empty: Aa,
  loading: Ta,
  visuallyHidden: La
}, Ra = {
  Ascending: "ascending",
  Descending: "descending"
};
function ws(e, t) {
  return e.filterable ?? t;
}
function Pa(e, t) {
  return e.sortable ?? t;
}
function Ba(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function cv({
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
  columnPickerText: $ = "Columns",
  allowColumnResize: m = !1,
  allowColumnReorder: S = !1,
  allowGrouping: x = !1,
  groupPanelText: N = "Drag a column header here to group",
  groupExpanded: E = !0,
  editMode: I = "None",
  allowRowCreate: C = !1,
  onRowUpdate: z,
  onRowCreate: g,
  onRowDelete: M,
  isLoading: P = !1,
  empty: j = "No records found",
  ariaLabel: T,
  className: F,
  onRowClick: X
}) {
  const [Z, Q] = V([]), [K, te] = V(
    /* @__PURE__ */ new Map()
  ), [oe, ee] = V(1), [R, ie] = V(p), [Y, de] = V(
    () => e.map((A, L) => Bn(A, L))
  ), [ae, xe] = V(
    () => new Set(
      e.map((A, L) => A.visible !== !1 ? Bn(A, L) : "").filter(Boolean)
    )
  ), [we, Be] = V({}), [ve, Xe] = V(!1), [ye, Ze] = V(null), [Ve, Re] = V(
    null
  ), [tt, Qe] = V(null), [et, W] = V({}), D = le(null), q = le(null), ne = $e(() => {
    const A = /* @__PURE__ */ new Map();
    return e.forEach((L, ce) => A.set(Bn(L, ce), L)), A;
  }, [e]), _e = $e(
    () => Y.filter((A) => ae.has(A)).map((A) => ({ key: A, column: ne.get(A) })).filter(
      (A) => A.column != null
    ),
    [Y, ae, ne]
  ), se = $e(
    () => Xl(_e, we),
    [_e, we]
  ), me = I !== "None" || M != null || C, Oe = $e(
    () => Jl(
      t,
      { sorts: Z, filters: K, pageNumber: oe, pageSize: R },
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
      R,
      l,
      r,
      e
    ]
  ), Fe = $e(
    () => ye ? e.find((A) => A.property === ye) : void 0,
    [ye, e]
  ), Je = $e(
    () => Ve ?? new Set(
      E ? Oe.items.map(
        (A) => String(Sn(A, ye ?? "") ?? "")
      ) : []
    ),
    [Ve, E, Oe.items, ye]
  ), dt = $e(
    () => Wl(
      Oe.items,
      ye ?? void 0,
      Fe,
      Je,
      Sn,
      (A) => vs(A, Fe?.format)
    ),
    [Oe.items, ye, Fe, Je]
  ), bt = $e(
    () => ye ? _e.filter((A) => A.column.property !== ye) : _e,
    [_e, ye]
  ), J = (A) => {
    A !== "" && Q(Gl(Z, A, { multi: i }));
  }, ze = (A, L) => {
    te((ce) => {
      const pe = new Map(ce);
      return pe.set(A, L), pe;
    }), ee(1);
  }, nt = (A) => {
    ie(A), ee(1);
  }, Gt = (A) => {
    if (_ === "None") return;
    const L = s(A), ce = f ?? [];
    let pe;
    _ === "Single" ? pe = ce.length === 1 && ce[0] === L ? [] : [L] : pe = ce.includes(L) ? ce.filter((Ie) => Ie !== L) : [...ce, L], u?.(pe);
  }, Nt = (A) => {
    X?.(A);
  }, Me = (A, L, ce) => {
    D.current = { key: A, startX: L, startWidth: ce };
  }, Ge = (A) => {
    const L = D.current;
    if (!L) return;
    const ce = A - L.startX, pe = Math.max(48, L.startWidth + ce);
    Be((Ie) => ({ ...Ie, [L.key]: `${pe}px` }));
  }, vt = () => {
    D.current = null;
  }, Pt = (A) => {
    q.current = A;
  }, en = (A) => {
    const L = q.current;
    q.current = null, !(!L || L === A) && de((ce) => {
      const pe = [...ce], Ie = pe.indexOf(L), je = pe.indexOf(A);
      return Ie < 0 || je < 0 ? ce : (pe.splice(Ie, 1), pe.splice(je, 0, L), pe);
    });
  }, U = (A) => {
    xe((L) => {
      const ce = new Set(L);
      return ce.has(A) ? ce.delete(A) : ce.add(A), ce;
    });
  }, ue = () => {
    const A = q.current;
    if (q.current = null, !A || !x) return;
    const ce = ne.get(A)?.property;
    ce && (Ze(ce), Re(null));
  }, Pe = () => {
    Ze(null), Re(null);
  }, Ke = (A) => {
    Re((L) => {
      const ce = L ?? new Set(
        E ? Oe.items.map(
          (Ie) => String(Sn(Ie, ye ?? "") ?? "")
        ) : []
      ), pe = new Set(ce);
      return pe.has(A) ? pe.delete(A) : pe.add(A), pe;
    });
  }, Bt = (A) => {
    const L = {};
    e.forEach((ce) => {
      ce.property && (L[ce.property] = Sn(A, ce.property));
    }), W(L), Qe(String(s(A)));
  }, Ot = () => {
    const A = {};
    e.forEach((L) => {
      L.property && L.type === "boolean" && (A[L.property] = !1);
    }), W(A), Qe("__new__");
  }, B = () => {
    Qe(null), W({});
  }, G = (A) => {
    if (tt === "__new__") {
      const L = Object.fromEntries(
        e.filter((ce) => ce.property).map((ce) => [ce.property, et[ce.property]])
      );
      g?.(L);
    } else if (A != null) {
      const L = { ...A, ...et };
      z?.(A, L);
    }
    B();
  }, re = a && (b === "Top" || b === "TopAndBottom"), he = a && (b === "Bottom" || b === "TopAndBottom"), fe = h && e.some((A) => ws(A, h)), be = (A, L, ce) => A.render ? A.render(L, { index: 0 }) : vs(Sn(L, A.property), A.format), Te = (A) => {
    const L = [ge.cell];
    return A.align === "center" && L.push(ge.center), A.align === "right" && L.push(ge.right), A.frozen && L.push(ge.frozen), L.join(" ");
  };
  return /* @__PURE__ */ O("div", { className: [ge.grid, F].filter(Boolean).join(" "), children: [
    re && /* @__PURE__ */ n(
      os,
      {
        pageNumber: Oe.pageNumber,
        pageSize: Oe.pageSize,
        count: Oe.total,
        pageSizeOptions: d,
        pageNumbersCount: v,
        showSummary: w,
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
            ye ? ge.groupPanelActive : ""
          ].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: x ? (A) => A.preventDefault() : void 0,
          onDrop: x ? ue : void 0,
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
                children: /* @__PURE__ */ n(Ne, { name: "close", size: "sm" })
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
      y && /* @__PURE__ */ O("div", { className: ge.picker, children: [
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: ge.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": ve,
            onClick: () => Xe((A) => !A),
            children: $
          }
        ),
        ve && /* @__PURE__ */ n(
          "div",
          {
            className: ge.pickerPanel,
            role: "menu",
            "aria-label": $,
            children: e.map((A, L) => {
              const ce = Bn(A, L);
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
          "aria-rowcount": Oe.total + 1,
          "aria-label": T,
          "aria-busy": P || void 0,
          children: [
            /* @__PURE__ */ O("colgroup", { children: [
              bt.map(({ key: A, column: L }) => /* @__PURE__ */ n(
                "col",
                {
                  style: {
                    width: we[A] ?? L.width,
                    minWidth: L.minWidth,
                    maxWidth: L.maxWidth
                  }
                },
                A
              )),
              me && /* @__PURE__ */ n("col", { style: { width: "8rem" } })
            ] }),
            /* @__PURE__ */ O("thead", { children: [
              /* @__PURE__ */ O("tr", { children: [
                bt.map(({ key: A, column: L }) => {
                  const ce = Pa(L, o), pe = Z.find((Ce) => Ce.property === L.property), Ie = pe ? Z.indexOf(pe) + 1 : 0, je = L.align ?? "left";
                  return /* @__PURE__ */ O(
                    "th",
                    {
                      "aria-sort": ce && pe ? Ra[pe.sortOrder] : "none",
                      className: [
                        ge.header,
                        je === "center" ? ge.center : "",
                        je === "right" ? ge.right : "",
                        L.frozen ? ge.frozen : ""
                      ].filter(Boolean).join(" "),
                      style: L.frozen ? { left: se[A] } : void 0,
                      scope: "col",
                      draggable: S || x || void 0,
                      onDragStart: S || x ? (Ce) => {
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
                            onClick: () => L.property != null && J(L.property),
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
                        m && /* @__PURE__ */ n(
                          "span",
                          {
                            className: ge.resizeHandle,
                            "data-dx-grid-resize": !0,
                            role: "separator",
                            "aria-orientation": "vertical",
                            "aria-label": `Resize ${L.title ?? L.property}`,
                            onMouseDown: (Ce) => {
                              Ce.preventDefault(), Ce.stopPropagation();
                              const lt = we[A] ?? L.width, St = lt ? parseFloat(lt) : 96;
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
              fe && /* @__PURE__ */ n("tr", { children: bt.map(({ key: A, column: L }) => {
                if (!ws(L, h))
                  return /* @__PURE__ */ n("td", { className: ge.filterCell }, A);
                const ce = K.get(L.property ?? "");
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
                      value: ce?.operator ?? Ql(L.type ?? "string"),
                      onChange: (pe) => ze(L.property ?? "", {
                        ...ce,
                        operator: pe.target.value
                      }),
                      "aria-label": `${L.title ?? L.property} operator`,
                      children: Gs.filter((pe) => pe !== "Custom").map(
                        (pe) => /* @__PURE__ */ n("option", { value: pe, children: pe }, pe)
                      )
                    }
                  ),
                  /* @__PURE__ */ n(
                    "input",
                    {
                      className: ge.filterInput,
                      value: ce?.value ?? "",
                      onChange: (pe) => ze(L.property ?? "", {
                        ...ce,
                        value: pe.target.value
                      }),
                      placeholder: `Filter ${L.title ?? L.property}`,
                      "aria-label": `${L.title ?? L.property} value`
                    }
                  )
                ] }, A);
              }) })
            ] }),
            /* @__PURE__ */ O("tbody", { children: [
              tt === "__new__" && /* @__PURE__ */ O("tr", { className: ge.editRow, children: [
                bt.map(({ key: A, column: L }) => /* @__PURE__ */ n("td", { className: ge.editCell, children: L.property && /* @__PURE__ */ n(
                  "input",
                  {
                    className: ge.editInput,
                    type: L.type === "number" ? "number" : L.type === "boolean" ? "checkbox" : "text",
                    checked: L.type === "boolean" ? !!et[L.property] : void 0,
                    value: L.type === "boolean" ? void 0 : String(et[L.property] ?? ""),
                    onChange: (ce) => W((pe) => ({
                      ...pe,
                      [L.property]: L.type === "boolean" ? ce.target.checked : ce.target.value
                    })),
                    "aria-label": `${L.title ?? L.property} (new)`
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
                              onClick: () => Ke(A.group.key),
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
                const L = A.row, ce = s(L), pe = (f ?? []).includes(ce), Ie = tt != null && tt === String(ce);
                return /* @__PURE__ */ O(
                  "tr",
                  {
                    className: [
                      X || _ !== "None" ? ge.clickable : "",
                      pe ? ge.selected : "",
                      Ie ? ge.editRow : ""
                    ].filter(Boolean).join(" "),
                    "aria-selected": _ !== "None" ? pe : void 0,
                    onClick: X || _ !== "None" ? (je) => {
                      Ba(je.target) || (Nt(L), Gt(L));
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
                          ) : be(Ce, L)
                        },
                        je
                      )),
                      me && /* @__PURE__ */ n("td", { className: ge.commandCell, children: Ie ? /* @__PURE__ */ O(De, { children: [
                        /* @__PURE__ */ n(
                          "button",
                          {
                            type: "button",
                            className: ge.commandButton,
                            onClick: () => G(L),
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
                            onClick: () => Bt(L),
                            children: "Edit"
                          }
                        ),
                        M && /* @__PURE__ */ n(
                          "button",
                          {
                            type: "button",
                            className: ge.commandButton,
                            onClick: () => M(L),
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
      Oe.items.length === 0 && !P && /* @__PURE__ */ n("div", { className: ge.empty, children: j }),
      P && /* @__PURE__ */ n("div", { className: ge.loading, role: "status", children: "Loading…" })
    ] }),
    he && /* @__PURE__ */ n(
      os,
      {
        pageNumber: Oe.pageNumber,
        pageSize: Oe.pageSize,
        count: Oe.total,
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
const Fa = "_wrap_1e4xo_1", qa = "_grid_1e4xo_7", Ha = "_stacked_1e4xo_13", Ka = "_item_1e4xo_19", Ua = "_empty_1e4xo_25", zn = {
  wrap: Fa,
  grid: qa,
  stacked: Ha,
  item: Ka,
  empty: Ua
};
function dv({
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
  const [v, b] = V(1), [w, k] = V(t), _ = e.length, f = Math.max(1, Math.ceil(_ / w)), u = Math.min(Math.max(1, v), f), y = $e(() => {
    const m = (u - 1) * w;
    return e.slice(m, m + w);
  }, [e, u, w]), $ = o ? zn.grid : zn.stacked;
  return /* @__PURE__ */ O(
    "div",
    {
      className: [zn.wrap, p].filter(Boolean).join(" "),
      "aria-label": d,
      children: [
        l && r != null ? r : _ === 0 ? h ?? /* @__PURE__ */ n("div", { className: zn.empty, children: c }) : /* @__PURE__ */ n("div", { className: $, children: y.map((m, S) => /* @__PURE__ */ n("div", { className: zn.item, children: i ? i(m, S) : String(m) }, S)) }),
        /* @__PURE__ */ n(
          os,
          {
            pageNumber: u,
            pageSize: w,
            count: _,
            pageSizeOptions: s,
            showPageSizeSelector: a,
            onPageChange: b,
            onPageSizeChange: (m) => {
              k(m), b(1);
            }
          }
        )
      ]
    }
  );
}
const Wa = "_label_1qfpw_1", Xa = {
  label: Wa
}, uv = He(function({ className: t, children: s, ...o }, i) {
  return /* @__PURE__ */ n(
    "label",
    {
      ref: i,
      className: [Xa.label, t].filter(Boolean).join(" "),
      ...o,
      children: s
    }
  );
}), Va = "_textbox_p4yvm_1", Ga = "_invalid_p4yvm_37", Ya = "_xs_p4yvm_44", Za = "_sm_p4yvm_50", Ja = "_md_p4yvm_56", Qa = "_lg_p4yvm_62", ei = "_xl_p4yvm_68", es = {
  textbox: Va,
  invalid: Ga,
  xs: Ya,
  sm: Za,
  md: Ja,
  lg: Qa,
  xl: ei
}, ti = He(
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
        "data-size": t,
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
), _v = ti, ni = "_checkbox_ppe6g_1", si = {
  checkbox: ni
}, fv = He(
  function({ className: t, ...s }, o) {
    return /* @__PURE__ */ n(
      "input",
      {
        ref: o,
        type: "checkbox",
        className: [si.checkbox, t].filter(Boolean).join(" "),
        ...s
      }
    );
  }
), ri = {
  switch: "_switch_luh7n_1"
}, oi = He(function({ className: t, ...s }, o) {
  return /* @__PURE__ */ n(
    "input",
    {
      ref: o,
      type: "checkbox",
      role: "switch",
      className: [ri.switch, t].filter(Boolean).join(" "),
      ...s
    }
  );
}), li = "_trigger_fnpn4_1", ai = "_tooltip_fnpn4_7", ii = "_top_fnpn4_34", ci = "_right_fnpn4_40", di = "_bottom_fnpn4_46", ui = "_left_fnpn4_52", _i = "_arrow_fnpn4_58", Fn = {
  trigger: li,
  tooltip: ai,
  "se-tooltip-in": "_se-tooltip-in_fnpn4_1",
  top: ii,
  right: ci,
  bottom: di,
  left: ui,
  arrow: _i
};
function hv({
  content: e,
  children: t,
  placement: s = "top",
  delayMs: o = 300,
  className: i
}) {
  const c = qe(), h = le(null), [r, l] = V(!1), a = () => {
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
  const d = Rt(t) ? ds(t, {
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
const fi = "_dialog_ox41c_1", hi = "_sm_ox41c_72", pi = "_resizable_ox41c_78", mi = "_md_ox41c_81", gi = "_lg_ox41c_85", yi = "_header_ox41c_89", xi = "_title_ox41c_99", bi = "_description_ox41c_106", vi = "_close_ox41c_113", ki = "_body_ox41c_143", wi = "_footer_ox41c_155", Ft = {
  dialog: fi,
  "se-dialog-in": "_se-dialog-in_ox41c_1",
  sm: hi,
  resizable: pi,
  md: mi,
  lg: gi,
  header: yi,
  title: xi,
  description: bi,
  close: vi,
  body: ki,
  footer: wi
};
function pv({
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
  const w = le(null), k = qe(), _ = qe(), f = le(t);
  ke(() => {
    f.current = t;
  });
  const u = le(v);
  ke(() => {
    u.current = v;
  });
  const y = le(p);
  ke(() => {
    y.current = p;
  });
  const $ = le(!1), m = le(!1), S = H(() => {
    if ($.current) return;
    const N = u.current?.();
    if (N instanceof Promise) {
      N.then((E) => {
        E && !$.current && ($.current = !0, f.current());
      });
      return;
    }
    N !== !1 && ($.current = !0, f.current());
  }, []), x = H(() => {
    if (m.current) {
      m.current = !1;
      return;
    }
    f.current();
  }, []);
  return ke(() => {
    const N = w.current;
    if (N)
      if (e && !N.open) {
        const E = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        N.showModal(), (N.querySelector(
          'button[aria-label="Close dialog"]'
        ) ?? N.querySelector("button"))?.focus();
        const C = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const z = (g) => {
          g.preventDefault(), y.current && S();
        };
        return N.addEventListener("cancel", z), () => {
          N.removeEventListener("cancel", z), document.body.style.overflow = C, E?.focus({ preventScroll: !0 });
        };
      } else !e && N.open && (m.current = $.current, $.current = !1, N.close());
  }, [e, S]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button.
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ O(
    "dialog",
    {
      ref: w,
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
      onClose: x,
      onClick: (N) => {
        N.target === w.current && a && S();
      },
      "aria-modal": "true",
      "aria-labelledby": s ? k : void 0,
      "aria-describedby": o ? _ : void 0,
      children: [
        s && /* @__PURE__ */ O("header", { className: Ft.header, children: [
          /* @__PURE__ */ O("div", { children: [
            /* @__PURE__ */ n("h2", { id: k, className: Ft.title, children: s }),
            o && /* @__PURE__ */ n("p", { id: _, className: Ft.description, children: o })
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
              children: /* @__PURE__ */ n(Ne, { name: "close", size: "sm" })
            }
          )
        ] }),
        i && /* @__PURE__ */ n("div", { className: Ft.body, children: i }),
        c && /* @__PURE__ */ n("footer", { className: Ft.footer, children: c })
      ]
    }
  );
}
const $i = "_viewport_o7kje_1", Ni = "_topLeft_o7kje_13", Oi = "_topRight_o7kje_20", Si = "_bottomLeft_o7kje_25", zi = "_toast_o7kje_30", Di = "_leaving_o7kje_61", Mi = "_info_o7kje_77", Ci = "_success_o7kje_86", Ei = "_warning_o7kje_95", Ii = "_danger_o7kje_104", ji = "_content_o7kje_113", Ai = "_title_o7kje_118", Ti = "_description_o7kje_141", Li = "_dismiss_o7kje_148", Ri = "_actions_o7kje_169", Pi = "_action_o7kje_169", Bi = "_cancel_o7kje_177", Fi = "_progress_o7kje_215", pt = {
  viewport: $i,
  topLeft: Ni,
  topRight: Oi,
  bottomLeft: Si,
  toast: zi,
  "se-toast-in": "_se-toast-in_o7kje_1",
  leaving: Di,
  "se-toast-out": "_se-toast-out_o7kje_1",
  info: Mi,
  success: Ci,
  warning: Ei,
  danger: Ii,
  content: ji,
  title: Ai,
  description: Ti,
  dismiss: Li,
  actions: Ri,
  action: Pi,
  cancel: Bi,
  progress: Fi,
  "se-toast-progress": "_se-toast-progress_o7kje_1"
}, Js = Xs(null);
function mv() {
  const e = Ws(Js);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const qi = 200, Hi = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function gv({
  children: e,
  durationMs: t = 4e3,
  position: s = "bottom-right",
  pauseOnHover: o = !0,
  className: i
}) {
  const [c, h] = V([]), [r, l] = V(!1), a = le([]), p = le(/* @__PURE__ */ new Map()), d = le(!1), v = le(0), b = (z) => {
    d.current = z, l(z);
  }, w = H((z) => {
    const g = p.current.get(z);
    g && (window.clearTimeout(g.timeoutId), g.remaining = Math.max(
      0,
      g.remaining - (Date.now() - g.startedAt)
    ));
  }, []), k = H((z) => {
    const g = p.current.get(z);
    g && (window.clearTimeout(g.timeoutId), p.current.delete(z));
  }, []), _ = H(
    (z) => {
      k(z), h((g) => {
        const M = g.filter((P) => P.id !== z);
        return a.current = M, M;
      });
    },
    [k]
  ), f = H(
    (z) => {
      const g = a.current.find((M) => M.id === z);
      !g || g.leaving || (g.onAutoClose?.(), _(z));
    },
    [_]
  ), u = H(
    (z) => {
      const g = p.current.get(z);
      !g || g.remaining <= 0 || (g.startedAt = Date.now(), g.timeoutId = window.setTimeout(() => f(z), g.remaining));
    },
    [f]
  ), y = H(() => {
    d.current || p.current.forEach((z, g) => w(g)), b(!0);
  }, [w]), $ = H(() => {
    p.current.forEach((z, g) => u(g)), b(!1);
  }, [u]);
  ke(() => {
    if (!o) return;
    const z = () => {
      document.hidden ? y() : $();
    };
    return document.addEventListener("visibilitychange", z), () => document.removeEventListener("visibilitychange", z);
  }, [o, y, $]);
  const m = H(
    (z) => {
      const g = a.current.find((M) => M.id === z);
      !g || g.leaving || (g.onDismiss?.(), h((M) => {
        const P = M.map(
          (j) => j.id === z ? { ...j, leaving: !0 } : j
        );
        return a.current = P, P;
      }), window.setTimeout(() => _(z), qi));
    },
    [_]
  ), S = H(
    (z) => {
      if (z.durationMs <= 0) return;
      const g = {
        remaining: z.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      p.current.set(z.id, g), d.current || u(z.id);
    },
    [u]
  ), x = H(
    (z) => {
      const g = a.current.find((P) => P.id === z.id), M = {
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
        const j = g ? P.map(
          (T) => T.id === M.id ? { ...M, leaving: !1 } : T
        ) : [...P, M];
        return a.current = j, j;
      }), g && k(M.id), S(M);
    },
    [t, s, S, k]
  ), N = $e(() => ({ toast: x }), [x]), E = $e(
    () => Array.from(/* @__PURE__ */ new Set([s, ...c.map((z) => z.position)])),
    [s, c]
  ), I = o ? y : void 0, C = o ? $ : void 0;
  return /* @__PURE__ */ O(Js.Provider, { value: N, children: [
    e,
    E.map((z) => /* @__PURE__ */ n(
      "div",
      {
        className: [pt.viewport, pt[Hi[z]], i].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: I,
        onMouseLeave: C,
        children: c.filter((g) => g.position === z).map((g) => /* @__PURE__ */ O(
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
            onClick: g.closeOnClick ? () => m(g.id) : void 0,
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
                        g.action?.onClick?.(), m(g.id);
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
                        g.cancel?.onClick?.(), m(g.id);
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
                  onClick: () => m(g.id),
                  "aria-label": "Dismiss notification",
                  children: /* @__PURE__ */ n(Ne, { name: "close", size: "sm" })
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
      z
    ))
  ] });
}
const Ki = "_alert_12gyw_1", Ui = "_xs_12gyw_28", Wi = "_sm_12gyw_38", Xi = "_lg_12gyw_48", Vi = "_xl_12gyw_58", Gi = "_primary_12gyw_69", Yi = "_secondary_12gyw_74", Zi = "_light_12gyw_79", Ji = "_base_12gyw_84", Qi = "_dark_12gyw_89", ec = "_info_12gyw_94", tc = "_success_12gyw_99", nc = "_warning_12gyw_104", sc = "_danger_12gyw_109", rc = "_flat_12gyw_116", oc = "_outlined_12gyw_123", lc = "_filled_12gyw_132", ac = "_text_12gyw_139", ic = "_icon_12gyw_181", cc = "_content_12gyw_192", dc = "_title_12gyw_197", uc = "_body_12gyw_203", _c = "_dismiss_12gyw_209", It = {
  alert: Ki,
  xs: Ui,
  sm: Wi,
  lg: Xi,
  xl: Vi,
  primary: Gi,
  secondary: Yi,
  light: Zi,
  base: Ji,
  dark: Qi,
  info: ec,
  success: tc,
  warning: nc,
  danger: sc,
  flat: rc,
  outlined: oc,
  filled: lc,
  text: ac,
  icon: ic,
  content: cc,
  title: dc,
  body: uc,
  dismiss: _c,
  "shade-lighter": "_shade-lighter_12gyw_451",
  "shade-light": "_shade-light_12gyw_451",
  "shade-dark": "_shade-dark_12gyw_461",
  "shade-darker": "_shade-darker_12gyw_465"
}, fc = {
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
function yv({
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
  const [w, k] = V(!1);
  if (p === !1 || p === void 0 && w)
    return null;
  const _ = () => {
    p === void 0 && k(!0), a?.(), d?.(!1);
  }, f = e, u = _s(t, "filled"), y = s && s !== "default" ? `shade-${s}` : null, $ = c ?? (h ? /* @__PURE__ */ n(Ne, { name: fc[e] }) : null);
  return /* @__PURE__ */ O(
    "div",
    {
      role: "alert",
      ...b,
      className: [
        It.alert,
        It[f],
        It[u],
        y ? It[y] : null,
        It[o],
        v
      ].filter(Boolean).join(" "),
      children: [
        $ != null && /* @__PURE__ */ n("span", { className: It.icon, "aria-hidden": "true", children: $ }),
        /* @__PURE__ */ O("div", { className: It.content, children: [
          i && /* @__PURE__ */ n("div", { className: It.title, children: i }),
          r && /* @__PURE__ */ n("div", { className: It.body, children: r })
        ] }),
        l && /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: It.dismiss,
            onClick: _,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ n(Ne, { name: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const hc = "_skeleton_7ssmn_1", pc = "_text_7ssmn_35", mc = "_circle_7ssmn_40", gc = "_rect_7ssmn_44", $s = {
  skeleton: hc,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_7ssmn_1",
  text: pc,
  circle: mc,
  rect: gc
};
function xv({
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
const yc = "_row_tkkv2_1", xc = "_gapXs_tkkv2_12", bc = "_gapSm_tkkv2_17", vc = "_gapMd_tkkv2_22", kc = "_gapLg_tkkv2_27", wc = "_gapXl_tkkv2_32", $c = "_start_tkkv2_37", Nc = "_center_tkkv2_41", Oc = "_end_tkkv2_45", Sc = "_stretch_tkkv2_49", zc = "_baseline_tkkv2_53", Dc = "_noWrap_tkkv2_109", Mc = "_wrapReverse_tkkv2_113", Cc = "_gapRowXs_tkkv2_117", Ec = "_gapRowSm_tkkv2_121", Ic = "_gapRowMd_tkkv2_125", jc = "_gapRowLg_tkkv2_129", Ac = "_gapRowXl_tkkv2_133", un = {
  row: yc,
  gapXs: xc,
  gapSm: bc,
  gapMd: vc,
  gapLg: kc,
  gapXl: wc,
  start: $c,
  center: Nc,
  end: Oc,
  stretch: Sc,
  baseline: zc,
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
  noWrap: Dc,
  wrapReverse: Mc,
  gapRowXs: Cc,
  gapRowSm: Ec,
  gapRowMd: Ic,
  gapRowLg: jc,
  gapRowXl: Ac
}, Tc = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
}, Lc = {
  xs: "gapRowXs",
  sm: "gapRowSm",
  md: "gapRowMd",
  lg: "gapRowLg",
  xl: "gapRowXl"
};
function Rc(e) {
  return typeof e != "string" ? null : Tc[e] ?? null;
}
function Pc(e) {
  return typeof e != "string" ? null : Lc[e] ?? null;
}
function Ns(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function bv({
  gap: e,
  rowGap: t,
  align: s = "stretch",
  justify: o = "start",
  wrap: i = !0,
  className: c,
  style: h,
  ...r
}) {
  const l = Rc(e), a = Pc(t), p = e != null && !l ? typeof e == "number" ? `${e}px` : e : null, d = {
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
const Bc = "_column_sh0ss_1", Fc = "_Size1_sh0ss_15", qc = "_Size2_sh0ss_24", Hc = "_Size3_sh0ss_33", Kc = "_Size4_sh0ss_42", Uc = "_Size5_sh0ss_51", Wc = "_Size6_sh0ss_60", Xc = "_Size7_sh0ss_69", Vc = "_Size8_sh0ss_78", Gc = "_Size9_sh0ss_87", Yc = "_Size10_sh0ss_96", Zc = "_Size11_sh0ss_105", Jc = "_Size12_sh0ss_114", Qc = "_Offset0_sh0ss_119", ed = "_Offset1_sh0ss_122", td = "_Offset2_sh0ss_127", nd = "_Offset3_sh0ss_132", sd = "_Offset4_sh0ss_137", rd = "_Offset5_sh0ss_142", od = "_Offset6_sh0ss_147", ld = "_Offset7_sh0ss_152", ad = "_Offset8_sh0ss_157", id = "_Offset9_sh0ss_162", cd = "_Offset10_sh0ss_167", dd = "_Offset11_sh0ss_172", ud = "_Offset12_sh0ss_177", _d = "_OrderFirst_sh0ss_182", fd = "_OrderLast_sh0ss_185", hd = "_Order0_sh0ss_188", pd = "_Order1_sh0ss_191", md = "_Order2_sh0ss_194", gd = "_Order3_sh0ss_197", yd = "_Order4_sh0ss_200", xd = "_Order5_sh0ss_203", bd = "_Order6_sh0ss_206", vd = "_Order7_sh0ss_209", kd = "_Order8_sh0ss_212", wd = "_Order9_sh0ss_215", $d = "_Order10_sh0ss_218", Nd = "_Order11_sh0ss_221", Od = "_Order12_sh0ss_224", Sd = "_xsSize1_sh0ss_229", zd = "_xsSize2_sh0ss_238", Dd = "_xsSize3_sh0ss_247", Md = "_xsSize4_sh0ss_256", Cd = "_xsSize5_sh0ss_265", Ed = "_xsSize6_sh0ss_274", Id = "_xsSize7_sh0ss_283", jd = "_xsSize8_sh0ss_292", Ad = "_xsSize9_sh0ss_301", Td = "_xsSize10_sh0ss_310", Ld = "_xsSize11_sh0ss_321", Rd = "_xsSize12_sh0ss_332", Pd = "_xsOffset0_sh0ss_337", Bd = "_xsOffset1_sh0ss_340", Fd = "_xsOffset2_sh0ss_345", qd = "_xsOffset3_sh0ss_350", Hd = "_xsOffset4_sh0ss_355", Kd = "_xsOffset5_sh0ss_360", Ud = "_xsOffset6_sh0ss_365", Wd = "_xsOffset7_sh0ss_370", Xd = "_xsOffset8_sh0ss_375", Vd = "_xsOffset9_sh0ss_380", Gd = "_xsOffset10_sh0ss_385", Yd = "_xsOffset11_sh0ss_391", Zd = "_xsOffset12_sh0ss_397", Jd = "_xsOrderFirst_sh0ss_403", Qd = "_xsOrderLast_sh0ss_406", eu = "_xsOrder0_sh0ss_409", tu = "_xsOrder1_sh0ss_412", nu = "_xsOrder2_sh0ss_415", su = "_xsOrder3_sh0ss_418", ru = "_xsOrder4_sh0ss_421", ou = "_xsOrder5_sh0ss_424", lu = "_xsOrder6_sh0ss_427", au = "_xsOrder7_sh0ss_430", iu = "_xsOrder8_sh0ss_433", cu = "_xsOrder9_sh0ss_436", du = "_xsOrder10_sh0ss_439", uu = "_xsOrder11_sh0ss_442", _u = "_xsOrder12_sh0ss_445", fu = "_smSize1_sh0ss_451", hu = "_smSize2_sh0ss_460", pu = "_smSize3_sh0ss_469", mu = "_smSize4_sh0ss_478", gu = "_smSize5_sh0ss_487", yu = "_smSize6_sh0ss_496", xu = "_smSize7_sh0ss_505", bu = "_smSize8_sh0ss_514", vu = "_smSize9_sh0ss_523", ku = "_smSize10_sh0ss_532", wu = "_smSize11_sh0ss_543", $u = "_smSize12_sh0ss_554", Nu = "_smOffset0_sh0ss_559", Ou = "_smOffset1_sh0ss_562", Su = "_smOffset2_sh0ss_567", zu = "_smOffset3_sh0ss_572", Du = "_smOffset4_sh0ss_577", Mu = "_smOffset5_sh0ss_582", Cu = "_smOffset6_sh0ss_587", Eu = "_smOffset7_sh0ss_592", Iu = "_smOffset8_sh0ss_597", ju = "_smOffset9_sh0ss_602", Au = "_smOffset10_sh0ss_607", Tu = "_smOffset11_sh0ss_613", Lu = "_smOffset12_sh0ss_619", Ru = "_smOrderFirst_sh0ss_625", Pu = "_smOrderLast_sh0ss_628", Bu = "_smOrder0_sh0ss_631", Fu = "_smOrder1_sh0ss_634", qu = "_smOrder2_sh0ss_637", Hu = "_smOrder3_sh0ss_640", Ku = "_smOrder4_sh0ss_643", Uu = "_smOrder5_sh0ss_646", Wu = "_smOrder6_sh0ss_649", Xu = "_smOrder7_sh0ss_652", Vu = "_smOrder8_sh0ss_655", Gu = "_smOrder9_sh0ss_658", Yu = "_smOrder10_sh0ss_661", Zu = "_smOrder11_sh0ss_664", Ju = "_smOrder12_sh0ss_667", Qu = "_mdSize1_sh0ss_673", e_ = "_mdSize2_sh0ss_682", t_ = "_mdSize3_sh0ss_691", n_ = "_mdSize4_sh0ss_700", s_ = "_mdSize5_sh0ss_709", r_ = "_mdSize6_sh0ss_718", o_ = "_mdSize7_sh0ss_727", l_ = "_mdSize8_sh0ss_736", a_ = "_mdSize9_sh0ss_745", i_ = "_mdSize10_sh0ss_754", c_ = "_mdSize11_sh0ss_765", d_ = "_mdSize12_sh0ss_776", u_ = "_mdOffset0_sh0ss_781", __ = "_mdOffset1_sh0ss_784", f_ = "_mdOffset2_sh0ss_789", h_ = "_mdOffset3_sh0ss_794", p_ = "_mdOffset4_sh0ss_799", m_ = "_mdOffset5_sh0ss_804", g_ = "_mdOffset6_sh0ss_809", y_ = "_mdOffset7_sh0ss_814", x_ = "_mdOffset8_sh0ss_819", b_ = "_mdOffset9_sh0ss_824", v_ = "_mdOffset10_sh0ss_829", k_ = "_mdOffset11_sh0ss_835", w_ = "_mdOffset12_sh0ss_841", $_ = "_mdOrderFirst_sh0ss_847", N_ = "_mdOrderLast_sh0ss_850", O_ = "_mdOrder0_sh0ss_853", S_ = "_mdOrder1_sh0ss_856", z_ = "_mdOrder2_sh0ss_859", D_ = "_mdOrder3_sh0ss_862", M_ = "_mdOrder4_sh0ss_865", C_ = "_mdOrder5_sh0ss_868", E_ = "_mdOrder6_sh0ss_871", I_ = "_mdOrder7_sh0ss_874", j_ = "_mdOrder8_sh0ss_877", A_ = "_mdOrder9_sh0ss_880", T_ = "_mdOrder10_sh0ss_883", L_ = "_mdOrder11_sh0ss_886", R_ = "_mdOrder12_sh0ss_889", P_ = "_lgSize1_sh0ss_895", B_ = "_lgSize2_sh0ss_904", F_ = "_lgSize3_sh0ss_913", q_ = "_lgSize4_sh0ss_922", H_ = "_lgSize5_sh0ss_931", K_ = "_lgSize6_sh0ss_940", U_ = "_lgSize7_sh0ss_949", W_ = "_lgSize8_sh0ss_958", X_ = "_lgSize9_sh0ss_967", V_ = "_lgSize10_sh0ss_976", G_ = "_lgSize11_sh0ss_987", Y_ = "_lgSize12_sh0ss_998", Z_ = "_lgOffset0_sh0ss_1003", J_ = "_lgOffset1_sh0ss_1006", Q_ = "_lgOffset2_sh0ss_1011", ef = "_lgOffset3_sh0ss_1016", tf = "_lgOffset4_sh0ss_1021", nf = "_lgOffset5_sh0ss_1026", sf = "_lgOffset6_sh0ss_1031", rf = "_lgOffset7_sh0ss_1036", of = "_lgOffset8_sh0ss_1041", lf = "_lgOffset9_sh0ss_1046", af = "_lgOffset10_sh0ss_1051", cf = "_lgOffset11_sh0ss_1057", df = "_lgOffset12_sh0ss_1063", uf = "_lgOrderFirst_sh0ss_1069", _f = "_lgOrderLast_sh0ss_1072", ff = "_lgOrder0_sh0ss_1075", hf = "_lgOrder1_sh0ss_1078", pf = "_lgOrder2_sh0ss_1081", mf = "_lgOrder3_sh0ss_1084", gf = "_lgOrder4_sh0ss_1087", yf = "_lgOrder5_sh0ss_1090", xf = "_lgOrder6_sh0ss_1093", bf = "_lgOrder7_sh0ss_1096", vf = "_lgOrder8_sh0ss_1099", kf = "_lgOrder9_sh0ss_1102", wf = "_lgOrder10_sh0ss_1105", $f = "_lgOrder11_sh0ss_1108", Nf = "_lgOrder12_sh0ss_1111", Of = "_xlSize1_sh0ss_1117", Sf = "_xlSize2_sh0ss_1126", zf = "_xlSize3_sh0ss_1135", Df = "_xlSize4_sh0ss_1144", Mf = "_xlSize5_sh0ss_1153", Cf = "_xlSize6_sh0ss_1162", Ef = "_xlSize7_sh0ss_1171", If = "_xlSize8_sh0ss_1180", jf = "_xlSize9_sh0ss_1189", Af = "_xlSize10_sh0ss_1198", Tf = "_xlSize11_sh0ss_1209", Lf = "_xlSize12_sh0ss_1220", Rf = "_xlOffset0_sh0ss_1225", Pf = "_xlOffset1_sh0ss_1228", Bf = "_xlOffset2_sh0ss_1233", Ff = "_xlOffset3_sh0ss_1238", qf = "_xlOffset4_sh0ss_1243", Hf = "_xlOffset5_sh0ss_1248", Kf = "_xlOffset6_sh0ss_1253", Uf = "_xlOffset7_sh0ss_1258", Wf = "_xlOffset8_sh0ss_1263", Xf = "_xlOffset9_sh0ss_1268", Vf = "_xlOffset10_sh0ss_1273", Gf = "_xlOffset11_sh0ss_1279", Yf = "_xlOffset12_sh0ss_1285", Zf = "_xlOrderFirst_sh0ss_1291", Jf = "_xlOrderLast_sh0ss_1294", Qf = "_xlOrder0_sh0ss_1297", e1 = "_xlOrder1_sh0ss_1300", t1 = "_xlOrder2_sh0ss_1303", n1 = "_xlOrder3_sh0ss_1306", s1 = "_xlOrder4_sh0ss_1309", r1 = "_xlOrder5_sh0ss_1312", o1 = "_xlOrder6_sh0ss_1315", l1 = "_xlOrder7_sh0ss_1318", a1 = "_xlOrder8_sh0ss_1321", i1 = "_xlOrder9_sh0ss_1324", c1 = "_xlOrder10_sh0ss_1327", d1 = "_xlOrder11_sh0ss_1330", u1 = "_xlOrder12_sh0ss_1333", _1 = "_xxSize1_sh0ss_1339", f1 = "_xxSize2_sh0ss_1348", h1 = "_xxSize3_sh0ss_1357", p1 = "_xxSize4_sh0ss_1366", m1 = "_xxSize5_sh0ss_1375", g1 = "_xxSize6_sh0ss_1384", y1 = "_xxSize7_sh0ss_1393", x1 = "_xxSize8_sh0ss_1402", b1 = "_xxSize9_sh0ss_1411", v1 = "_xxSize10_sh0ss_1420", k1 = "_xxSize11_sh0ss_1431", w1 = "_xxSize12_sh0ss_1442", $1 = "_xxOffset0_sh0ss_1447", N1 = "_xxOffset1_sh0ss_1450", O1 = "_xxOffset2_sh0ss_1455", S1 = "_xxOffset3_sh0ss_1460", z1 = "_xxOffset4_sh0ss_1465", D1 = "_xxOffset5_sh0ss_1470", M1 = "_xxOffset6_sh0ss_1475", C1 = "_xxOffset7_sh0ss_1480", E1 = "_xxOffset8_sh0ss_1485", I1 = "_xxOffset9_sh0ss_1490", j1 = "_xxOffset10_sh0ss_1495", A1 = "_xxOffset11_sh0ss_1501", T1 = "_xxOffset12_sh0ss_1507", L1 = "_xxOrderFirst_sh0ss_1513", R1 = "_xxOrderLast_sh0ss_1516", P1 = "_xxOrder0_sh0ss_1519", B1 = "_xxOrder1_sh0ss_1522", F1 = "_xxOrder2_sh0ss_1525", q1 = "_xxOrder3_sh0ss_1528", H1 = "_xxOrder4_sh0ss_1531", K1 = "_xxOrder5_sh0ss_1534", U1 = "_xxOrder6_sh0ss_1537", W1 = "_xxOrder7_sh0ss_1540", X1 = "_xxOrder8_sh0ss_1543", V1 = "_xxOrder9_sh0ss_1546", G1 = "_xxOrder10_sh0ss_1549", Y1 = "_xxOrder11_sh0ss_1552", Z1 = "_xxOrder12_sh0ss_1555", qn = {
  column: Bc,
  Size1: Fc,
  Size2: qc,
  Size3: Hc,
  Size4: Kc,
  Size5: Uc,
  Size6: Wc,
  Size7: Xc,
  Size8: Vc,
  Size9: Gc,
  Size10: Yc,
  Size11: Zc,
  Size12: Jc,
  Offset0: Qc,
  Offset1: ed,
  Offset2: td,
  Offset3: nd,
  Offset4: sd,
  Offset5: rd,
  Offset6: od,
  Offset7: ld,
  Offset8: ad,
  Offset9: id,
  Offset10: cd,
  Offset11: dd,
  Offset12: ud,
  OrderFirst: _d,
  OrderLast: fd,
  Order0: hd,
  Order1: pd,
  Order2: md,
  Order3: gd,
  Order4: yd,
  Order5: xd,
  Order6: bd,
  Order7: vd,
  Order8: kd,
  Order9: wd,
  Order10: $d,
  Order11: Nd,
  Order12: Od,
  xsSize1: Sd,
  xsSize2: zd,
  xsSize3: Dd,
  xsSize4: Md,
  xsSize5: Cd,
  xsSize6: Ed,
  xsSize7: Id,
  xsSize8: jd,
  xsSize9: Ad,
  xsSize10: Td,
  xsSize11: Ld,
  xsSize12: Rd,
  xsOffset0: Pd,
  xsOffset1: Bd,
  xsOffset2: Fd,
  xsOffset3: qd,
  xsOffset4: Hd,
  xsOffset5: Kd,
  xsOffset6: Ud,
  xsOffset7: Wd,
  xsOffset8: Xd,
  xsOffset9: Vd,
  xsOffset10: Gd,
  xsOffset11: Yd,
  xsOffset12: Zd,
  xsOrderFirst: Jd,
  xsOrderLast: Qd,
  xsOrder0: eu,
  xsOrder1: tu,
  xsOrder2: nu,
  xsOrder3: su,
  xsOrder4: ru,
  xsOrder5: ou,
  xsOrder6: lu,
  xsOrder7: au,
  xsOrder8: iu,
  xsOrder9: cu,
  xsOrder10: du,
  xsOrder11: uu,
  xsOrder12: _u,
  smSize1: fu,
  smSize2: hu,
  smSize3: pu,
  smSize4: mu,
  smSize5: gu,
  smSize6: yu,
  smSize7: xu,
  smSize8: bu,
  smSize9: vu,
  smSize10: ku,
  smSize11: wu,
  smSize12: $u,
  smOffset0: Nu,
  smOffset1: Ou,
  smOffset2: Su,
  smOffset3: zu,
  smOffset4: Du,
  smOffset5: Mu,
  smOffset6: Cu,
  smOffset7: Eu,
  smOffset8: Iu,
  smOffset9: ju,
  smOffset10: Au,
  smOffset11: Tu,
  smOffset12: Lu,
  smOrderFirst: Ru,
  smOrderLast: Pu,
  smOrder0: Bu,
  smOrder1: Fu,
  smOrder2: qu,
  smOrder3: Hu,
  smOrder4: Ku,
  smOrder5: Uu,
  smOrder6: Wu,
  smOrder7: Xu,
  smOrder8: Vu,
  smOrder9: Gu,
  smOrder10: Yu,
  smOrder11: Zu,
  smOrder12: Ju,
  mdSize1: Qu,
  mdSize2: e_,
  mdSize3: t_,
  mdSize4: n_,
  mdSize5: s_,
  mdSize6: r_,
  mdSize7: o_,
  mdSize8: l_,
  mdSize9: a_,
  mdSize10: i_,
  mdSize11: c_,
  mdSize12: d_,
  mdOffset0: u_,
  mdOffset1: __,
  mdOffset2: f_,
  mdOffset3: h_,
  mdOffset4: p_,
  mdOffset5: m_,
  mdOffset6: g_,
  mdOffset7: y_,
  mdOffset8: x_,
  mdOffset9: b_,
  mdOffset10: v_,
  mdOffset11: k_,
  mdOffset12: w_,
  mdOrderFirst: $_,
  mdOrderLast: N_,
  mdOrder0: O_,
  mdOrder1: S_,
  mdOrder2: z_,
  mdOrder3: D_,
  mdOrder4: M_,
  mdOrder5: C_,
  mdOrder6: E_,
  mdOrder7: I_,
  mdOrder8: j_,
  mdOrder9: A_,
  mdOrder10: T_,
  mdOrder11: L_,
  mdOrder12: R_,
  lgSize1: P_,
  lgSize2: B_,
  lgSize3: F_,
  lgSize4: q_,
  lgSize5: H_,
  lgSize6: K_,
  lgSize7: U_,
  lgSize8: W_,
  lgSize9: X_,
  lgSize10: V_,
  lgSize11: G_,
  lgSize12: Y_,
  lgOffset0: Z_,
  lgOffset1: J_,
  lgOffset2: Q_,
  lgOffset3: ef,
  lgOffset4: tf,
  lgOffset5: nf,
  lgOffset6: sf,
  lgOffset7: rf,
  lgOffset8: of,
  lgOffset9: lf,
  lgOffset10: af,
  lgOffset11: cf,
  lgOffset12: df,
  lgOrderFirst: uf,
  lgOrderLast: _f,
  lgOrder0: ff,
  lgOrder1: hf,
  lgOrder2: pf,
  lgOrder3: mf,
  lgOrder4: gf,
  lgOrder5: yf,
  lgOrder6: xf,
  lgOrder7: bf,
  lgOrder8: vf,
  lgOrder9: kf,
  lgOrder10: wf,
  lgOrder11: $f,
  lgOrder12: Nf,
  xlSize1: Of,
  xlSize2: Sf,
  xlSize3: zf,
  xlSize4: Df,
  xlSize5: Mf,
  xlSize6: Cf,
  xlSize7: Ef,
  xlSize8: If,
  xlSize9: jf,
  xlSize10: Af,
  xlSize11: Tf,
  xlSize12: Lf,
  xlOffset0: Rf,
  xlOffset1: Pf,
  xlOffset2: Bf,
  xlOffset3: Ff,
  xlOffset4: qf,
  xlOffset5: Hf,
  xlOffset6: Kf,
  xlOffset7: Uf,
  xlOffset8: Wf,
  xlOffset9: Xf,
  xlOffset10: Vf,
  xlOffset11: Gf,
  xlOffset12: Yf,
  xlOrderFirst: Zf,
  xlOrderLast: Jf,
  xlOrder0: Qf,
  xlOrder1: e1,
  xlOrder2: t1,
  xlOrder3: n1,
  xlOrder4: s1,
  xlOrder5: r1,
  xlOrder6: o1,
  xlOrder7: l1,
  xlOrder8: a1,
  xlOrder9: i1,
  xlOrder10: c1,
  xlOrder11: d1,
  xlOrder12: u1,
  xxSize1: _1,
  xxSize2: f1,
  xxSize3: h1,
  xxSize4: p1,
  xxSize5: m1,
  xxSize6: g1,
  xxSize7: y1,
  xxSize8: x1,
  xxSize9: b1,
  xxSize10: v1,
  xxSize11: k1,
  xxSize12: w1,
  xxOffset0: $1,
  xxOffset1: N1,
  xxOffset2: O1,
  xxOffset3: S1,
  xxOffset4: z1,
  xxOffset5: D1,
  xxOffset6: M1,
  xxOffset7: C1,
  xxOffset8: E1,
  xxOffset9: I1,
  xxOffset10: j1,
  xxOffset11: A1,
  xxOffset12: T1,
  xxOrderFirst: L1,
  xxOrderLast: R1,
  xxOrder0: P1,
  xxOrder1: B1,
  xxOrder2: F1,
  xxOrder3: q1,
  xxOrder4: H1,
  xxOrder5: K1,
  xxOrder6: U1,
  xxOrder7: W1,
  xxOrder8: X1,
  xxOrder9: V1,
  xxOrder10: G1,
  xxOrder11: Y1,
  xxOrder12: Z1
}, J1 = [
  ["", "size", "offset", "order"],
  ["xs", "sizeXs", "offsetXs", "orderXs"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xx", "sizeXx", "offsetXx", "orderXx"]
];
function Q1(e, t) {
  if (!Number.isInteger(t) || t < 1 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 1 and 12.`
    );
}
function eh(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12.`
    );
}
function th(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12 or first/last.`
    );
}
function nh(e, t, s) {
  return t === "first" ? `${e}OrderFirst` : t === "last" ? `${e}OrderLast` : (th(s, t), `${e}Order${t}`);
}
function vv({ className: e, style: t, ...s }) {
  const o = [qn.column], i = { ...t };
  for (const [C, z, g, M] of J1) {
    const P = s[z], j = s[g], T = s[M];
    if (P != null) {
      Q1(z, P);
      const F = qn[`${C}Size${P}`];
      F && o.push(F);
    }
    if (j != null) {
      eh(g, j);
      const F = qn[`${C}Offset${j}`];
      F && o.push(F);
    }
    if (T != null) {
      const F = qn[nh(C, T, M)];
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
    orderXs: $,
    orderSm: m,
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
const sh = "_stack_1yc1g_1", rh = "_gapXs_1yc1g_29", oh = "_gapSm_1yc1g_33", lh = "_gapMd_1yc1g_37", ah = "_gapLg_1yc1g_41", ih = "_gapXl_1yc1g_45", _n = {
  stack: sh,
  "dir-row": "_dir-row_1yc1g_5",
  "dir-row-reverse": "_dir-row-reverse_1yc1g_9",
  "dir-column": "_dir-column_1yc1g_13",
  "dir-column-reverse": "_dir-column-reverse_1yc1g_17",
  "wrap-nowrap": "_wrap-nowrap_1yc1g_21",
  "wrap-wrap-reverse": "_wrap-wrap-reverse_1yc1g_25",
  gapXs: rh,
  gapSm: oh,
  gapMd: lh,
  gapLg: ah,
  gapXl: ih,
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
}, ch = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function dh(e) {
  return typeof e != "string" ? null : ch[e] ?? null;
}
function Os(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function kv({
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
  const a = dh(o), p = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", d = {
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
const uh = "_autogrid_1fz7w_1", _h = "_gapXs_1fz7w_10", fh = "_gapSm_1fz7w_14", hh = "_gapMd_1fz7w_18", ph = "_gapLg_1fz7w_22", mh = "_gapXl_1fz7w_26", Ss = {
  autogrid: uh,
  gapXs: _h,
  gapSm: fh,
  gapMd: hh,
  gapLg: ph,
  gapXl: mh
}, gh = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function yh(e) {
  return typeof e != "string" ? null : gh[e] ?? null;
}
function wv({
  min: e = 240,
  gap: t = "md",
  className: s,
  style: o,
  visible: i = !0,
  ...c
}) {
  if (i === !1) return null;
  const h = yh(t), r = {
    // Keep --dx-autogrid-min in sync so the track math follows the prop.
    "--dx-autogrid-min": typeof e == "number" ? `${e}px` : e,
    ...t != null && !h ? { gap: typeof t == "number" ? `${t}px` : t } : {},
    ...o
  };
  return /* @__PURE__ */ n(
    "div",
    {
      className: [Ss.autogrid, h ? Ss[h] : null, s].filter(Boolean).join(" "),
      style: r,
      ...c
    }
  );
}
const xh = "_layout_fxvw1_1", bh = "_row_fxvw1_7", vh = "_grid_fxvw1_21", kh = "_gridRight_fxvw1_27", wh = "_gridHeader_fxvw1_31", $h = "_gridFooter_fxvw1_36", Nh = "_gridContents_fxvw1_41", Oh = "_gridBody_fxvw1_45", qt = {
  layout: xh,
  row: bh,
  grid: vh,
  gridRight: kh,
  gridHeader: wh,
  gridFooter: $h,
  gridContents: Nh,
  gridBody: Oh
}, Sh = "_footer_1thaw_1", zh = "_sticky_1thaw_9", zs = {
  footer: Sh,
  sticky: zh
};
function Dh({
  sticky: e = !1,
  className: t,
  children: s,
  ...o
}) {
  return /* @__PURE__ */ n(
    "footer",
    {
      className: [zs.footer, e ? zs.sticky : null, t].filter(Boolean).join(" "),
      ...o,
      children: s
    }
  );
}
const Mh = "_header_wh9gi_1", Ch = "_sticky_wh9gi_9", Ds = {
  header: Mh,
  sticky: Ch
};
function Eh({
  sticky: e = !1,
  className: t,
  children: s,
  ...o
}) {
  return /* @__PURE__ */ n(
    "header",
    {
      className: [Ds.header, e ? Ds.sticky : null, t].filter(Boolean).join(" "),
      ...o,
      children: s
    }
  );
}
const Ih = "_sidebar_12teb_1", jh = "_left_12teb_9", Ah = "_right_12teb_13", Th = "_start_12teb_18", Lh = "_end_12teb_22", Rh = "_fullHeight_12teb_28", Ph = "_collapsed_12teb_32", Bh = "_responsive_12teb_40", Fh = "_overlay_12teb_48", qh = "_mask_12teb_76", sn = {
  sidebar: Ih,
  left: jh,
  right: Ah,
  start: Th,
  end: Lh,
  fullHeight: Rh,
  collapsed: Ph,
  responsive: Bh,
  overlay: Fh,
  mask: qh
};
function Hh({
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
function $v(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ n(De, { children: e.children });
  const { className: t, children: s, ...o } = e, i = [], c = [], h = [], r = [], l = [], a = [];
  rr.forEach(s, (v) => {
    if (!Rt(v)) {
      h.push(v);
      return;
    }
    if (v.type === Eh)
      i.push(v);
    else if (v.type === Dh)
      c.push(v);
    else if (v.type === Hh) {
      const b = v, w = b.props.position;
      a.push(b), (w === "right" || w === "end" ? l : r).push(b);
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
const Kh = "_body_akga4_1", Uh = "_bare_akga4_10", Ms = {
  body: Kh,
  bare: Uh
};
function Nv({
  as: e = "main",
  padded: t = !0,
  className: s,
  children: o,
  ...i
}) {
  return /* @__PURE__ */ n(
    e,
    {
      className: [Ms.body, t ? null : Ms.bare, s].filter(Boolean).join(" "),
      ...i,
      children: o
    }
  );
}
const Wh = "_toggle_1qjb4_1", Xh = {
  toggle: Wh
};
function Ov({
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
      className: [Xh.toggle, s].filter(Boolean).join(" "),
      ...c,
      children: i ?? /* @__PURE__ */ n(Ne, { name: e, size: 20 })
    }
  );
}
const Vh = "_track_14127_1", Gh = "_bar_14127_31", Yh = "_primary_14127_39", Zh = "_success_14127_43", Jh = "_warning_14127_47", Qh = "_danger_14127_51", ep = "_indeterminate_14127_149", tp = "_circular_14127_163", np = "_fill_14127_203", mt = {
  track: Vh,
  "linear-xs": "_linear-xs_14127_11",
  "linear-sm": "_linear-sm_14127_15",
  "linear-md": "_linear-md_14127_19",
  "linear-lg": "_linear-lg_14127_23",
  "linear-xl": "_linear-xl_14127_27",
  bar: Gh,
  primary: Yh,
  success: Zh,
  warning: Jh,
  danger: Qh,
  "shade-lighter": "_shade-lighter_14127_133",
  "shade-light": "_shade-light_14127_133",
  "shade-dark": "_shade-dark_14127_141",
  "shade-darker": "_shade-darker_14127_145",
  indeterminate: ep,
  "se-progress-slide": "_se-progress-slide_14127_1",
  circular: tp,
  "circular-xs": "_circular-xs_14127_169",
  "circular-sm": "_circular-sm_14127_174",
  "circular-md": "_circular-md_14127_179",
  "circular-lg": "_circular-lg_14127_184",
  "circular-xl": "_circular-xl_14127_189",
  fill: np,
  "se-progress-spin": "_se-progress-spin_14127_1"
};
function Sv({
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
function zv(e) {
  return e == null || e === "default" ? null : `shade-${e}`;
}
function sp(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function Qs(e) {
  const [t, s] = V(() => sp(e));
  return ke(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const o = window.matchMedia(e);
    s(o.matches);
    const i = (c) => s(c.matches);
    return typeof o.addEventListener == "function" ? (o.addEventListener("change", i), () => o.removeEventListener("change", i)) : (o.addListener(i), () => o.removeListener(i));
  }, [e]), t;
}
const rp = "_wrapper_1qmsj_1", op = {
  wrapper: rp
}, er = "dx-theme";
function lp(e) {
  const t = e === void 0 ? er : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const s = localStorage.getItem(t);
      return s === "light" || s === "dark" || s === "system" ? s : void 0;
    } catch {
      return;
    }
}
function ap(e, t) {
  const s = e === void 0 ? er : e;
  if (!(s === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(s, t);
    } catch {
    }
}
function Dv({
  value: e,
  defaultValue: t,
  storageKey: s,
  onChange: o,
  label: i = "Dark mode",
  className: c
}) {
  const h = Qs("(prefers-color-scheme: dark)"), [r, l] = V(void 0), a = e ?? r ?? lp(s) ?? t ?? "system", p = a === "system" ? h ? "dark" : "light" : a;
  ke(() => {
    if (a === "system") {
      delete document.documentElement.dataset.theme;
      return;
    }
    document.documentElement.dataset.theme = a;
  }, [a]);
  const d = (v) => {
    const b = v.target.checked ? "dark" : "light";
    e === void 0 && l(b), ap(s, b), o?.(b);
  };
  return /* @__PURE__ */ O("label", { className: [op.wrapper, c].filter(Boolean).join(" "), children: [
    i,
    /* @__PURE__ */ n(oi, { checked: p === "dark", onChange: d })
  ] });
}
function ip(e) {
  const t = new TextEncoder().encode(e), s = t.length * 8, o = ((t.length + 8 >> 6) + 1) * 64, i = new Uint8Array(o);
  i.set(t), i[t.length] = 128;
  const c = new DataView(i.buffer);
  c.setUint32(o - 8, s >>> 0, !0), c.setUint32(o - 4, Math.floor(s / 4294967296), !0);
  const h = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21], r = Array.from(
    { length: 64 },
    (k, _) => Math.floor(Math.abs(Math.sin(_ + 1)) * 4294967296)
  ), l = (k, _) => k + _ | 0, a = (k, _) => k << _ | k >>> 32 - _;
  let p = 1732584193, d = 4023233417, v = 2562383102, b = 271733878;
  for (let k = 0; k < o; k += 64) {
    const _ = [];
    for (let m = 0; m < 16; m += 1)
      _.push(c.getUint32(k + m * 4, !0));
    let f = p, u = d, y = v, $ = b;
    for (let m = 0; m < 64; m += 1) {
      let S, x;
      m < 16 ? (S = u & y | ~u & $, x = m) : m < 32 ? (S = $ & u | ~$ & y, x = (5 * m + 1) % 16) : m < 48 ? (S = u ^ y ^ $, x = (3 * m + 5) % 16) : (S = y ^ (u | ~$), x = 7 * m % 16), S = l(l(l(S, f), r[m]), _[x]), f = $, $ = y, y = u, u = l(u, a(S, h[Math.floor(m / 16) * 4 + m % 4]));
    }
    p = l(p, f), d = l(d, u), v = l(v, y), b = l(b, $);
  }
  const w = (k) => {
    let _ = "";
    for (let f = 0; f < 4; f += 1)
      _ += `0${(k >>> f * 8 & 255).toString(16)}`.slice(-2);
    return _;
  };
  return w(p) + w(d) + w(v) + w(b);
}
const cp = "_avatar_yj2hz_1", dp = "_xs_yj2hz_12", up = "_sm_yj2hz_18", _p = "_md_yj2hz_24", fp = "_lg_yj2hz_30", hp = "_xl_yj2hz_36", pp = "_initials_yj2hz_42", mp = "_image_yj2hz_57", gp = "_status_yj2hz_64", yp = "_online_yj2hz_84", xp = "_offline_yj2hz_88", bp = "_away_yj2hz_92", fn = {
  avatar: cp,
  xs: dp,
  sm: up,
  md: _p,
  lg: fp,
  xl: hp,
  initials: pp,
  image: mp,
  status: gp,
  online: yp,
  offline: xp,
  away: bp
}, vp = {
  xs: 20,
  sm: 28,
  md: 36,
  lg: 44,
  xl: 52
}, Yn = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function kp(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function wp(e) {
  let t = 0;
  for (let s = 0; s < e.length; s += 1)
    t = t * 31 + e.charCodeAt(s) >>> 0;
  return Yn[t % Yn.length] ?? Yn[0];
}
function Mv({
  name: e,
  src: t,
  email: s,
  gravatarDefault: o = "retro",
  gravatarRating: i = "g",
  alt: c,
  size: h = "md",
  status: r,
  className: l
}) {
  const a = $e(() => e ? kp(e) : "?", [e]), p = $e(() => e ? wp(e) : Yn[0], [e]), d = $e(() => {
    if (t != null || s == null) return;
    const $ = s.trim().toLowerCase();
    return $ === "" ? void 0 : `https://secure.gravatar.com/avatar/${ip($)}?d=${o}&s=${vp[h]}&r=${i}`;
  }, [t, s, o, i, h]), v = t ?? d, [b, w] = V(null), k = v != null && b !== v, _ = k && c === "", f = c ?? e ?? "avatar", u = r ? `${f}, ${r}` : f, y = k ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ n(
      "img",
      {
        className: fn.image,
        src: v,
        alt: _ ? "" : r ? u : f,
        onError: () => w(v ?? null)
      }
    )
  ) : /* @__PURE__ */ n(
    "span",
    {
      "aria-hidden": "true",
      className: fn.initials,
      style: { background: p },
      children: a
    }
  );
  return /* @__PURE__ */ O(
    "span",
    {
      className: [
        fn.avatar,
        fn[h],
        r ? fn[r] : null,
        l
      ].filter(Boolean).join(" "),
      role: k ? void 0 : "img",
      "aria-label": k ? void 0 : u,
      children: [
        y,
        r && /* @__PURE__ */ n("span", { className: fn.status, "aria-hidden": "true" })
      ]
    }
  );
}
const $p = "_root_80088_1", Np = "_left_80088_6", Op = "_right_80088_7", Sp = "_panel_80088_12", zp = "_bottom_80088_20", Dp = "_tabList_80088_24", Mp = "_underline_80088_53", Cp = "_pills_80088_72", Ep = "_tab_80088_24", Ip = "_active_80088_113", jp = "_disabled_80088_139", Ht = {
  root: $p,
  left: Np,
  right: Op,
  panel: Sp,
  bottom: zp,
  tabList: Dp,
  underline: Mp,
  pills: Cp,
  tab: Ep,
  active: Ip,
  disabled: jp
};
function Cv({
  items: e,
  value: t,
  defaultValue: s,
  onChange: o,
  variant: i = "underline",
  position: c = "top",
  className: h
}) {
  const r = qe(), l = le(null), [a, p] = V(
    s ?? e[0]?.key ?? ""
  ), d = t ?? a, v = c === "left" || c === "right", b = (_) => {
    p(_), o?.(_);
  }, w = (_) => {
    const f = e.filter(($) => !$.disabled), u = f.findIndex(($) => $.key === d);
    let y = -1;
    _.key === "ArrowRight" || v && _.key === "ArrowDown" ? y = (u + 1) % f.length : _.key === "ArrowLeft" || v && _.key === "ArrowUp" ? y = (u - 1 + f.length) % f.length : _.key === "Home" ? y = 0 : _.key === "End" && (y = f.length - 1), y >= 0 && (_.preventDefault(), l.current?.querySelector(
      `[data-tab-key="${CSS.escape(f[y]?.key ?? "")}"]`
    )?.focus(), b(f[y]?.key ?? ""));
  }, k = e.find((_) => _.key === d);
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
                    Ht.tab,
                    f ? Ht.active : null,
                    _.disabled ? Ht.disabled : null
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
            className: Ht.panel,
            children: k.content
          }
        )
      ]
    }
  );
}
const Ap = "_root_18dnp_1", Tp = "_item_18dnp_9", Lp = "_heading_18dnp_13", Rp = "_trigger_18dnp_17", Pp = "_disabled_18dnp_34", Bp = "_title_18dnp_48", Fp = "_chevron_18dnp_52", qp = "_open_18dnp_59", Hp = "_content_18dnp_63", Kt = {
  root: Ap,
  item: Tp,
  heading: Lp,
  trigger: Rp,
  disabled: Pp,
  title: Bp,
  chevron: Fp,
  open: qp,
  content: Hp
};
function Ev({
  items: e,
  multiple: t = !1,
  value: s,
  defaultValue: o,
  onChange: i,
  className: c
}) {
  const h = qe(), [r, l] = V(
    o ?? []
  ), a = s ?? r, p = (d) => {
    const v = a.includes(d) ? a.filter((b) => b !== d) : t ? [...a, d] : [d];
    l(v), i?.(v);
  };
  return /* @__PURE__ */ n("div", { className: [Kt.root, c].filter(Boolean).join(" "), children: e.map((d) => {
    const v = a.includes(d.key), b = `${h}-panel-${d.key}`, w = `${h}-trigger-${d.key}`;
    return /* @__PURE__ */ O("div", { className: Kt.item, children: [
      /* @__PURE__ */ n("h3", { className: Kt.heading, children: /* @__PURE__ */ O(
        "button",
        {
          type: "button",
          id: w,
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
                children: /* @__PURE__ */ n(Ne, { name: "chevron-down", size: 12 })
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
          className: Kt.content,
          children: d.content
        }
      )
    ] }, d.key);
  }) });
}
const Kp = "_textarea_1mu8y_1", Up = "_invalid_1mu8y_27", Wp = "_xs_1mu8y_34", Xp = "_sm_1mu8y_39", Vp = "_md_1mu8y_44", Gp = "_lg_1mu8y_49", Yp = "_xl_1mu8y_54", Hn = {
  textarea: Kp,
  invalid: Up,
  xs: Wp,
  sm: Xp,
  md: Vp,
  lg: Gp,
  xl: Yp,
  "resize-none": "_resize-none_1mu8y_59",
  "resize-vertical": "_resize-vertical_1mu8y_63",
  "resize-horizontal": "_resize-horizontal_1mu8y_67",
  "resize-both": "_resize-both_1mu8y_71"
}, Iv = He(
  function({ size: t = "md", resize: s = "none", invalid: o = !1, className: i, ...c }, h) {
    return /* @__PURE__ */ n(
      "textarea",
      {
        ref: h,
        "data-size": t,
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
), Zp = "_typography_1jy8x_1", Jp = "_h1_1jy8x_39", Qp = "_h2_1jy8x_45", em = "_h3_1jy8x_51", tm = "_h4_1jy8x_57", nm = "_h5_1jy8x_63", sm = "_h6_1jy8x_69", rm = "_button_1jy8x_99", om = "_caption_1jy8x_106", lm = "_overline_1jy8x_112", ts = {
  typography: Zp,
  "display-1": "_display-1_1jy8x_8",
  "display-2": "_display-2_1jy8x_13",
  "display-3": "_display-3_1jy8x_18",
  "display-4": "_display-4_1jy8x_23",
  "display-5": "_display-5_1jy8x_28",
  "display-6": "_display-6_1jy8x_33",
  h1: Jp,
  h2: Qp,
  h3: em,
  h4: tm,
  h5: nm,
  h6: sm,
  "subtitle-1": "_subtitle-1_1jy8x_75",
  "subtitle-2": "_subtitle-2_1jy8x_81",
  "body-1": "_body-1_1jy8x_87",
  "body-2": "_body-2_1jy8x_92",
  button: rm,
  caption: om,
  overline: lm,
  "align-left": "_align-left_1jy8x_121",
  "align-center": "_align-center_1jy8x_125",
  "align-right": "_align-right_1jy8x_129",
  "align-justify": "_align-justify_1jy8x_133"
}, am = {
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
}, im = {
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
}, cm = {
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
}, dm = {
  Left: "align-left",
  Right: "align-right",
  Center: "align-center",
  Justify: "align-justify",
  Start: "align-left",
  End: "align-right",
  JustifyAll: "align-justify"
}, jv = He(function({
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
  const p = s === "Auto" ? am[t] : cm[s];
  return /* @__PURE__ */ n(
    p,
    {
      ref: a,
      className: [
        ts.typography,
        ts[im[t]],
        o ? ts[dm[o]] : null,
        h
      ].filter(Boolean).join(" "),
      ...l,
      children: i ?? r
    }
  );
}), um = "_root_rjoph_1", _m = "_trigger_rjoph_9", fm = "_invalid_rjoph_40", hm = "_placeholder_rjoph_47", pm = "_label_rjoph_54", mm = "_chevron_rjoph_60", gm = "_chevronOpen_rjoph_70", ym = "_menu_rjoph_74", xm = "_option_rjoph_89", bm = "_disabled_rjoph_100", vm = "_active_rjoph_104", km = "_selected_rjoph_105", wm = "_header_rjoph_115", $m = "_xs_rjoph_122", Nm = "_sm_rjoph_128", Om = "_md_rjoph_134", Sm = "_lg_rjoph_140", zm = "_xl_rjoph_146", it = {
  root: um,
  trigger: _m,
  invalid: fm,
  placeholder: hm,
  label: pm,
  chevron: mm,
  chevronOpen: gm,
  menu: ym,
  option: xm,
  disabled: bm,
  active: vm,
  selected: km,
  header: wm,
  xs: $m,
  sm: Nm,
  md: Om,
  lg: Sm,
  xl: zm
}, Dm = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function Av({
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
  const p = qe(), d = `${p}-listbox`, v = le(null), b = le(null), [w, k] = V(
    s
  ), [_, f] = V(!1), u = t ?? w, y = e.map(
    (g, M) => g.label === "" || g.disabled ? -1 : M
  ).filter((g) => g >= 0), $ = e.findIndex(
    (g) => g.value === u
  ), [m, S] = V(
    () => y.includes(0) ? 0 : y[0] ?? -1
  ), x = H(() => {
    if (r) return;
    const g = $ >= 0 && y.includes($) ? $ : y[0];
    S(g ?? -1), f(!0);
  }, [r, $, y]), N = H(() => {
    f(!1), b.current?.focus();
  }, []);
  ke(() => {
    if (!_) return;
    const g = (M) => {
      v.current && !v.current.contains(M.target) && f(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, [_]);
  const E = (g) => {
    k(g), o?.(g), f(!1), b.current?.focus();
  }, I = (g) => {
    if (y.length === 0) return;
    const M = y.includes(m) ? y.indexOf(m) : 0, P = y[(M + g + y.length) % y.length];
    P != null && S(P);
  }, C = (g) => {
    if (!_) {
      g.key === "ArrowDown" && (g.preventDefault(), x());
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
        g.preventDefault(), y[0] != null && S(y[0]);
        break;
      case "End":
        g.preventDefault(), y[y.length - 1] != null && S(y[y.length - 1]);
        break;
      case "Enter":
      case " ":
        g.preventDefault(), m >= 0 && e[m] && y.includes(m) && E(e[m]?.value ?? "");
        break;
      case "Escape":
        g.preventDefault(), N();
        break;
      case "Tab":
        f(!1);
        break;
    }
  }, z = e.find(
    (g) => g.value === u
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
              /* @__PURE__ */ n("span", { className: z ? it.label : it.placeholder, children: z ? z.label : i }),
              /* @__PURE__ */ n(
                "span",
                {
                  className: [it.chevron, _ ? it.chevronOpen : null].filter(Boolean).join(" "),
                  style: { backgroundImage: Dm },
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
            "aria-activedescendant": m >= 0 ? `${p}-option-${m}` : void 0,
            className: it.menu,
            children: e.map(
              (g, M) => g.label === "" ? /* @__PURE__ */ n(
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
                  id: `${p}-option-${M}`,
                  role: "option",
                  "aria-selected": g.value === u,
                  "aria-disabled": g.disabled || void 0,
                  className: [
                    it.option,
                    M === m ? it.active : null,
                    g.value === u ? it.selected : null,
                    g.disabled ? it.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    g.disabled || E(g.value);
                  },
                  onMouseEnter: () => {
                    !g.disabled && g.label !== "" && S(M);
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
const Mm = "_root_9y6ty_1", Cm = "_wrap_9y6ty_9", Em = "_input_9y6ty_26", Im = "_invalid_9y6ty_31", jm = "_clear_9y6ty_58", Am = "_menu_9y6ty_83", Tm = "_option_9y6ty_98", Lm = "_disabled_9y6ty_109", Rm = "_active_9y6ty_113", Pm = "_empty_9y6ty_123", Bm = "_xs_9y6ty_129", Fm = "_sm_9y6ty_136", qm = "_md_9y6ty_143", Hm = "_lg_9y6ty_150", Km = "_xl_9y6ty_157", zt = {
  root: Mm,
  wrap: Cm,
  input: Em,
  invalid: Im,
  clear: jm,
  menu: Am,
  option: Tm,
  disabled: Lm,
  active: Rm,
  empty: Pm,
  xs: Bm,
  sm: Fm,
  md: qm,
  lg: Hm,
  xl: Km
}, Um = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function Tv({
  options: e = [],
  value: t,
  defaultValue: s = "",
  onChange: o,
  onSelect: i,
  placeholder: c = "",
  size: h = "md",
  invalid: r = !1,
  disabled: l = !1,
  filter: a = Um,
  className: p,
  ...d
}) {
  const v = qe(), b = `${v}-listbox`, w = le(null), k = le(null), [_, f] = V(s), [u, y] = V(!1), $ = t ?? _, m = $e(
    () => $.trim() === "" ? [...e] : e.filter((T) => a(T, $)),
    [e, $, a]
  ), S = m.map((T, F) => T.disabled ? -1 : F).filter((T) => T >= 0), [x, N] = V(-1), E = (T) => {
    f(T), o?.(T);
  }, I = (T) => {
    E(T.label), i?.(T.value, T), y(!1);
  }, C = (T) => {
    if (S.length === 0) return;
    const F = S.includes(x) ? S.indexOf(x) : T === 1 ? -1 : 0, X = S[(F + T + S.length) % S.length];
    X != null && N(X);
  }, z = (T) => {
    l || (E(T.target.value), y(!0), N(-1));
  }, g = () => {
    l || $ !== "" && y(!0);
  }, M = (T) => {
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
          T.preventDefault(), u && x >= 0 && m[x] && I(m[x]);
          break;
        case "Escape":
          T.preventDefault(), y(!1);
          break;
        case "Tab":
          u && x >= 0 && m[x] && I(m[x]), y(!1);
          break;
      }
  }, j = () => {
    E(""), N(-1), y(!0), k.current?.focus();
  };
  return /* @__PURE__ */ O(
    "div",
    {
      ref: w,
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
                  disabled: l,
                  value: $,
                  placeholder: c,
                  className: zt.input,
                  onChange: z,
                  onFocus: g,
                  onBlur: M,
                  onKeyDown: P,
                  ...d
                }
              ),
              $ !== "" && !l && /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: zt.clear,
                  "aria-label": "Clear",
                  onClick: j,
                  children: /* @__PURE__ */ n(Ne, { name: "close", size: "sm" })
                }
              )
            ]
          }
        ),
        u && /* @__PURE__ */ n("div", { id: b, role: "listbox", className: zt.menu, children: m.length === 0 ? /* @__PURE__ */ n("div", { className: zt.empty, children: "No matches" }) : m.map((T, F) => /* @__PURE__ */ n(
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
            onMouseDown: (X) => {
              X.preventDefault(), T.disabled || I(T);
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
const Wm = "_box_julie_1", Xm = "_option_julie_12", Vm = "_disabled_julie_23", Gm = "_selected_julie_27", Ym = "_active_julie_33", Dn = {
  box: Wm,
  option: Xm,
  disabled: Vm,
  selected: Gm,
  active: Ym
};
function Lv({
  options: e = [],
  value: t,
  defaultValue: s,
  multiple: o = !1,
  onChange: i,
  className: c,
  style: h,
  ...r
}) {
  const l = qe(), [a, p] = V(() => {
    const m = s;
    return m == null ? [] : Array.isArray(m) ? [...m] : [m];
  }), d = t == null ? a : Array.isArray(t) ? t : [t], v = e.findIndex((m) => !m.disabled), [b, w] = V(
    () => v >= 0 ? v : 0
  ), k = le(""), _ = le(null), f = (m) => {
    p(m), i?.(o ? m : m[0] ?? "");
  }, u = e.map((m, S) => m.disabled ? -1 : S).filter((m) => m >= 0), y = (m) => {
    const S = e[m];
    if (!(!S || S.disabled))
      if (w(m), o) {
        const x = d.includes(S.value) ? d.filter((N) => N !== S.value) : [...d, S.value];
        f(x);
      } else
        f([S.value]);
  }, $ = (m) => {
    if (u.length === 0) return;
    const S = u.includes(b) ? b : u[0];
    let x = -1;
    if (m.key === "ArrowDown")
      x = u[(u.indexOf(S) + 1) % u.length];
    else if (m.key === "ArrowUp")
      x = u[(u.indexOf(S) - 1 + u.length) % u.length];
    else if (m.key === "Home")
      x = u[0];
    else if (m.key === "End")
      x = u[u.length - 1];
    else if (m.key === "Enter" || m.key === " ") {
      m.preventDefault(), y(S);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(m.key)) {
      m.preventDefault();
      const N = (k.current + m.key).toLowerCase();
      k.current = N, _.current && clearTimeout(_.current), _.current = setTimeout(() => {
        k.current = "";
      }, 500);
      const E = [...u, ...u], I = u.indexOf(S) + 1, C = E.slice(I).find((z) => e[z]?.label.toLowerCase().startsWith(N));
      C != null && w(C);
      return;
    }
    x >= 0 && (m.preventDefault(), w(x), o || f([e[x]?.value ?? ""]));
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
      onKeyDown: $,
      ...r,
      children: e.map((m, S) => {
        const x = d.includes(m.value), N = S === b;
        return /* @__PURE__ */ n(
          "div",
          {
            id: `${l}-option-${S}`,
            role: "option",
            "aria-selected": x,
            "aria-disabled": m.disabled || void 0,
            className: [
              Dn.option,
              x ? Dn.selected : null,
              N ? Dn.active : null,
              m.disabled ? Dn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => y(S),
            children: m.label
          },
          m.value
        );
      })
    }
  );
}
const Zm = "_group_6i3u3_1", Jm = "_legend_6i3u3_8", Qm = "_list_6i3u3_16", eg = "_item_6i3u3_25", tg = "_disabled_6i3u3_32", ng = "_label_6i3u3_37", sg = "_checkbox_6i3u3_48", rn = {
  group: Zm,
  legend: Jm,
  list: Qm,
  item: eg,
  disabled: tg,
  label: ng,
  checkbox: sg
};
function Rv({
  options: e = [],
  value: t,
  defaultValue: s = [],
  onChange: o,
  legend: i,
  name: c,
  className: h
}) {
  const [r, l] = V(() => [
    ...s
  ]), a = t ?? r, p = (d, v) => {
    const b = v ? [...a, d] : a.filter((w) => w !== d);
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
const rg = "_group_1mqxc_1", og = "_legend_1mqxc_8", lg = "_list_1mqxc_16", ag = "_item_1mqxc_25", ig = "_disabled_1mqxc_32", cg = "_label_1mqxc_37", dg = "_radio_1mqxc_48", on = {
  group: rg,
  legend: og,
  list: lg,
  item: ag,
  disabled: ig,
  label: cg,
  radio: dg
};
function Pv({
  options: e = [],
  value: t,
  defaultValue: s,
  onChange: o,
  legend: i,
  name: c,
  className: h
}) {
  const [r, l] = V(
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
const ug = "_bar_d59jw_1", _g = "_vertical_d59jw_12", fg = "_option_d59jw_17", hg = "_selected_d59jw_40", pg = "_sm_d59jw_56", mg = "_md_d59jw_62", gg = "_lg_d59jw_68", hn = {
  bar: ug,
  vertical: _g,
  option: fg,
  selected: hg,
  sm: pg,
  md: mg,
  lg: gg
};
function Cs(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Bv(e) {
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
  } = e, p = i ?? !1, [d, v] = V(o ?? (p ? [] : t[0]?.value)), b = s ?? d, w = i === !0 || i === void 0 && Array.isArray(b), k = (f) => {
    if (!w) {
      v(f), h?.(f);
      return;
    }
    const u = Cs(b), y = u.includes(f) ? u.filter(($) => $ !== f) : [...u, f];
    v(y), h?.(y);
  }, _ = (f) => w ? Cs(b).includes(f) : b === f;
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
      children: t.map((f) => {
        const u = _(f.value);
        return /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            "aria-pressed": u,
            disabled: f.disabled,
            className: [
              hn.option,
              u ? hn.selected : null,
              f.disabled ? hn.disabled : null
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
const yg = "_toggle_7nfjx_1", xg = "_pressed_7nfjx_29", bg = "_sm_7nfjx_41", vg = "_md_7nfjx_47", kg = "_lg_7nfjx_53", wg = "_fullWidth_7nfjx_59", Kn = {
  toggle: yg,
  pressed: xg,
  sm: bg,
  md: vg,
  lg: kg,
  fullWidth: wg
}, Fv = He(
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
    const [p, d] = V(s), v = t ?? p, b = () => {
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
), $g = "_root_fc1sj_1", Ng = "_action_fc1sj_328", Og = "_filled_fc1sj_348", Sg = "_caret_fc1sj_352", zg = "_flat_fc1sj_373", Dg = "_outlined_fc1sj_381", Mg = "_text_fc1sj_390", Cg = "_sm_fc1sj_496", Eg = "_md_fc1sj_508", Ig = "_lg_fc1sj_520", jg = "_menu_fc1sj_532", Ag = "_item_fc1sj_545", Tg = "_disabled_fc1sj_566", Lg = "_active_fc1sj_570", Rg = "_danger_fc1sj_579", kt = {
  root: $g,
  "style-primary": "_style-primary_fc1sj_11",
  "style-secondary": "_style-secondary_fc1sj_25",
  "style-base": "_style-base_fc1sj_35",
  "style-light": "_style-light_fc1sj_45",
  "style-dark": "_style-dark_fc1sj_55",
  "style-info": "_style-info_fc1sj_69",
  "style-success": "_style-success_fc1sj_83",
  "style-warning": "_style-warning_fc1sj_97",
  "style-danger": "_style-danger_fc1sj_111",
  action: Ng,
  filled: Og,
  caret: Sg,
  flat: zg,
  outlined: Dg,
  text: Mg,
  "shade-lighter": "_shade-lighter_fc1sj_407",
  "shade-light": "_shade-light_fc1sj_407",
  "shade-dark": "_shade-dark_fc1sj_417",
  "shade-darker": "_shade-darker_fc1sj_421",
  sm: Cg,
  md: Eg,
  lg: Ig,
  menu: jg,
  item: Ag,
  disabled: Tg,
  active: Lg,
  danger: Rg
};
function qv({
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
  const d = `${qe()}-menu`, v = le(null), b = le(null), w = le([]), [k, _] = V(!1), [f, u] = V(-1), y = $e(
    () => s.map((C, z) => C.disabled ? -1 : z).filter((C) => C >= 0),
    [s]
  ), $ = H(() => {
    r || (u(y[0] ?? -1), _(!0));
  }, [r, y]), m = H(() => {
    _(!1), b.current?.focus();
  }, []);
  ke(() => {
    if (!k) return;
    const C = (z) => {
      v.current && !v.current.contains(z.target) && _(!1);
    };
    return document.addEventListener("mousedown", C), () => document.removeEventListener("mousedown", C);
  }, [k]);
  const S = le(k);
  ke(() => {
    const C = S.current;
    if (S.current = k, !k || C) return;
    const z = y.includes(f) ? f : y[0] ?? -1;
    z >= 0 && w.current[z]?.focus();
  }, [k, f, y]);
  const x = (C) => {
    const z = s[C];
    !z || z.disabled || (z.onClick?.(), _(!1), b.current?.focus());
  }, N = (C) => {
    if (y.length === 0) return;
    const z = y.includes(f) ? y.indexOf(f) : C === 1 ? -1 : 0, g = y[(z + C + y.length) % y.length];
    g != null && (u(g), w.current[g]?.focus());
  }, E = (C) => {
    const z = C === "first" ? y[0] : y[y.length - 1];
    z != null && (u(z), w.current[z]?.focus());
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
        C.preventDefault(), m();
        break;
      case "Tab":
        _(!1);
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
            onClick: () => k ? _(!1) : $(),
            onKeyDown: (C) => {
              !k && C.key === "ArrowDown" && (C.preventDefault(), $());
            },
            children: /* @__PURE__ */ n(Ne, { name: "chevron-down" })
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
                ref: (g) => {
                  w.current[z] = g;
                },
                type: "button",
                role: "menuitem",
                tabIndex: z === f ? 0 : -1,
                disabled: C.disabled,
                className: [
                  kt.item,
                  z === f ? kt.active : null,
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
const Pg = "_wrapper_o4h13_1", Bg = "_input_o4h13_8", Fg = "_invalid_o4h13_38", qg = "_toggle_o4h13_45", Hg = "_xs_o4h13_80", Kg = "_sm_o4h13_86", Ug = "_md_o4h13_92", Wg = "_lg_o4h13_98", Xg = "_xl_o4h13_104", Mn = {
  wrapper: Pg,
  input: Bg,
  invalid: Fg,
  toggle: qg,
  xs: Hg,
  sm: Kg,
  md: Ug,
  lg: Wg,
  xl: Xg
}, Hv = He(
  function({
    size: t = "md",
    invalid: s = !1,
    className: o,
    disabled: i,
    showLabel: c = "Show password",
    hideLabel: h = "Hide password",
    ...r
  }, l) {
    const [a, p] = V(!1);
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ O("div", { className: Mn.wrapper, "data-size": t, children: [
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
            children: /* @__PURE__ */ n(Ne, { name: a ? "eye-off" : "eye", size: 16 })
          }
        )
      ] })
    );
  }
), Vg = "_mask_1tyy7_1", Gg = "_invalid_1tyy7_31", Yg = "_xs_1tyy7_38", Zg = "_sm_1tyy7_44", Jg = "_md_1tyy7_50", Qg = "_lg_1tyy7_56", e0 = "_xl_1tyy7_62", ns = {
  mask: Vg,
  invalid: Gg,
  xs: Yg,
  sm: Zg,
  md: Jg,
  lg: Qg,
  xl: e0
};
function Es(e, t) {
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
const Kv = He(function({
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
  const [d, v] = V(c ?? ""), b = i !== void 0, w = b ? i ?? "" : d, k = (u) => {
    const y = Es(u, o);
    return b || v(y), h?.(y), y;
  };
  return /* @__PURE__ */ n(
    "input",
    {
      ref: p,
      type: "text",
      "data-size": t,
      value: w,
      onChange: (u) => {
        k(u.target.value);
      },
      onKeyDown: (u) => {
        if (u.key === "Backspace") {
          const y = u.currentTarget.selectionStart ?? w.length, $ = w[y - 1];
          if ($ !== void 0 && !/\d/.test($)) {
            u.preventDefault();
            const m = w.replace(/\D/g, "");
            k(Es(m.slice(0, -1), o));
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
}), t0 = "_wrapper_1kqw7_1", n0 = "_input_1kqw7_8", s0 = "_invalid_1kqw7_38", r0 = "_button_1kqw7_45", o0 = "_up_1kqw7_77", l0 = "_down_1kqw7_82", a0 = "_xs_1kqw7_87", i0 = "_sm_1kqw7_93", c0 = "_md_1kqw7_99", d0 = "_lg_1kqw7_105", u0 = "_xl_1kqw7_111", Zt = {
  wrapper: t0,
  input: n0,
  invalid: s0,
  button: r0,
  up: o0,
  down: l0,
  xs: a0,
  sm: i0,
  md: c0,
  lg: d0,
  xl: u0
};
function ls(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function _0(e) {
  let t = "", s = !1;
  for (const o of e)
    o >= "0" && o <= "9" ? t += o : o === "." && !s ? (s = !0, t += o) : o === "-" && t.length === 0 && (t += o);
  return t;
}
function tr(e, t, s) {
  return Math.min(s ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function f0(e, t, s) {
  return t === void 0 ? e : t + Math.round((e - t) / s) * s;
}
function h0(e, t, s, o, i) {
  const h = ls(e) ?? s ?? 0;
  let r;
  return s === void 0 ? r = h + t * i : t > 0 ? r = s + Math.ceil((h - s + 1e-9) / i) * i : r = s + Math.floor((h - s - 1e-9) / i) * i, tr(r, s, o);
}
const Uv = He(
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
    const [f, u] = V(
      h != null ? String(h) : ""
    ), y = c !== void 0, $ = y ? c == null ? "" : String(c) : f, m = (C) => {
      y || u(C), r?.(ls(C));
    }, S = (C) => {
      y || u(String(C)), r?.(C);
    }, x = (C) => {
      i || S(h0($, C, l, a, p));
    }, N = (C) => {
      m(_0(C.target.value));
    }, E = (C) => {
      C.key === "ArrowUp" ? (C.preventDefault(), x(1)) : C.key === "ArrowDown" && (C.preventDefault(), x(-1)), w?.(C);
    }, I = (C) => {
      const z = ls($);
      z === null ? (y || u(""), r?.(null)) : S(tr(f0(z, l, p), l, a)), b?.(C);
    };
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ O("div", { className: Zt.wrapper, "data-size": t, children: [
        /* @__PURE__ */ n(
          "input",
          {
            ref: _,
            type: "text",
            inputMode: "decimal",
            autoComplete: "off",
            value: $,
            disabled: i,
            onChange: N,
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
            onClick: () => x(1),
            children: /* @__PURE__ */ n(Ne, { name: "chevron-up", size: 14 })
          }
        ),
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: [Zt.button, Zt.down].join(" "),
            "aria-label": v,
            disabled: i,
            onClick: () => x(-1),
            children: /* @__PURE__ */ n(Ne, { name: "chevron-down", size: 14 })
          }
        )
      ] })
    );
  }
), Se = {
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
}, p0 = [
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
function m0({ r: e, g: t, b: s }) {
  const o = (i) => Math.round(i).toString(16).padStart(2, "0");
  return `#${o(e)}${o(t)}${o(s)}`;
}
function g0({ r: e, g: t, b: s }) {
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
function y0(e) {
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
function Is({ r: e, g: t, b: s, a: o }) {
  return o >= 1 ? `rgb(${e}, ${t}, ${s})` : `rgba(${e}, ${t}, ${s}, ${Math.round(o * 100) / 100})`;
}
const Wv = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: s = !0,
  showPalette: o = !0,
  palette: i = p0,
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
  const f = le(null), u = le(null), y = le(null), $ = le(null), m = le(null), S = qe(), x = le(null), N = $e(
    () => y0(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [E, I] = V(!1), [C, z] = V(null), g = C ?? N, M = $e(() => g0(g), [g]), P = H(
    (W) => {
      const D = Is(W);
      b?.(D), w?.(D);
    },
    [b, w]
  ), j = H(
    (W, D) => {
      z(W), D && !c && P(W);
    },
    [c, P]
  ), T = H(() => {
    I(!1), z(null), _?.(), u.current?.focus();
  }, [_]), F = H(() => {
    r || (z(N), I(!0), k?.());
  }, [r, N, k]), X = H(() => {
    E ? T() : F();
  }, [E, T, F]), Z = H(
    (W, D) => {
      const q = y.current;
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
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), x.current = "sat";
    const D = Z(W.clientX, W.clientY);
    j({ ...pn(D), a: g.a }, !0);
  }, te = (W) => {
    if (x.current !== "sat") return;
    W.preventDefault();
    const D = Z(W.clientX, W.clientY);
    j({ ...pn(D), a: g.a }, !0);
  }, oe = (W) => {
    if (r) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), x.current = "hue";
    const D = Q(W.clientX, $.current);
    j(
      { ...pn({ ...M, h: D * 360 }), a: g.a },
      !0
    );
  }, ee = (W) => {
    if (x.current !== "hue") return;
    W.preventDefault();
    const D = Q(W.clientX, $.current);
    j(
      { ...pn({ ...M, h: D * 360 }), a: g.a },
      !0
    );
  }, R = (W) => {
    if (r) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), x.current = "alpha";
    const D = Q(W.clientX, m.current);
    j({ ...g, a: D }, !0);
  }, ie = (W) => {
    if (x.current !== "alpha") return;
    W.preventDefault();
    const D = Q(W.clientX, m.current);
    j({ ...g, a: D }, !0);
  }, Y = () => {
    x.current = null;
  }, de = H(
    (W, D) => {
      const q = {
        h: M.h,
        s: yt(M.s + W, 0, 1),
        v: yt(M.v + D, 0, 1)
      };
      j({ ...pn(q), a: g.a }, !0);
    },
    [M, g.a, j]
  ), ae = H(
    (W) => {
      const D = (M.h + W + 360) % 360;
      j({ ...pn({ ...M, h: D }), a: g.a }, !0);
    },
    [M, g.a, j]
  ), xe = H(
    (W) => {
      j({ ...g, a: yt(g.a + W, 0, 1) }, !0);
    },
    [g, j]
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
      se && j({ ...se, a: g.a }, !0);
      return;
    }
    const q = D.replace(/[^\d.]/g, ""), ne = Number.parseFloat(q);
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
  }, Xe = () => {
    C && (P(C), z(null), I(!1), _?.(), u.current?.focus());
  };
  ke(() => {
    if (!E) return;
    const W = (D) => {
      f.current && !f.current.contains(D.target) && T();
    };
    return document.addEventListener("mousedown", W), () => document.removeEventListener("mousedown", W);
  }, [E, T]), ke(() => {
    if (!E) return;
    const W = (D) => {
      D.key === "Escape" && T();
    };
    return document.addEventListener("keydown", W), () => document.removeEventListener("keydown", W);
  }, [E, T]);
  const ye = p === "xs" ? Se["dx-colorpicker-trigger-xs"] : p === "sm" ? Se["dx-colorpicker-trigger-sm"] : p === "lg" ? Se["dx-colorpicker-trigger-lg"] : p === "xl" ? Se["dx-colorpicker-trigger-xl"] : Se["dx-colorpicker-trigger"], Ze = Is(g), Ve = m0(g), Re = { x: M.s * 100, y: (1 - M.v) * 100 }, tt = M.h / 360 * 100, Qe = g.a * 100, et = /* @__PURE__ */ O("div", { className: Se["dx-colorpicker-panel"], children: [
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
        className: Se["dx-saturation-picker"],
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
            className: Se["dx-saturation-indicator"],
            style: { left: `${Re.x}%`, top: `${Re.y}%` },
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
        "aria-valuenow": Math.round(M.h),
        "aria-disabled": r || void 0,
        tabIndex: r ? -1 : d,
        className: Se["dx-hue-picker"],
        onKeyDown: (W) => Be(W, "hue"),
        onPointerDown: oe,
        onPointerMove: ee,
        onPointerUp: Y,
        children: /* @__PURE__ */ n(
          "span",
          {
            className: Se["dx-hue-indicator"],
            style: { left: `${tt}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    t && /* @__PURE__ */ n(
      "div",
      {
        ref: m,
        role: "slider",
        "aria-label": "Alpha",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(Qe),
        "aria-disabled": r || void 0,
        tabIndex: r ? -1 : d,
        className: Se["dx-alpha-picker"],
        style: {
          background: `repeating-conic-gradient(var(--dx-border-color) 0% 25%, var(--dx-surface-color) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${M.h}, 100%, 50%))`
        },
        onKeyDown: (W) => Be(W, "alpha"),
        onPointerDown: R,
        onPointerMove: ie,
        onPointerUp: Y,
        children: /* @__PURE__ */ n(
          "span",
          {
            className: Se["dx-alpha-indicator"],
            style: { left: `${Qe}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    s && /* @__PURE__ */ O("div", { className: Se["dx-colorpicker-rgba"], children: [
      /* @__PURE__ */ O("label", { className: Se["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ n("span", { className: Se["dx-colorpicker-rgba-label"], children: "Hex" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            maxLength: 7,
            className: Se["dx-colorpicker-rgba-input"],
            "aria-label": "Hex",
            value: Ve,
            onChange: (W) => ve("hex", W.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ O("label", { className: Se["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ n("span", { className: Se["dx-colorpicker-rgba-label"], children: "R" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Se["dx-colorpicker-rgba-input"],
            "aria-label": "Red",
            value: g.r,
            onChange: (W) => ve("r", W.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ O("label", { className: Se["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ n("span", { className: Se["dx-colorpicker-rgba-label"], children: "G" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Se["dx-colorpicker-rgba-input"],
            "aria-label": "Green",
            value: g.g,
            onChange: (W) => ve("g", W.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ O("label", { className: Se["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ n("span", { className: Se["dx-colorpicker-rgba-label"], children: "B" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Se["dx-colorpicker-rgba-input"],
            "aria-label": "Blue",
            value: g.b,
            onChange: (W) => ve("b", W.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ O("label", { className: Se["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ n("span", { className: Se["dx-colorpicker-rgba-label"], children: "A" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            inputMode: "decimal",
            maxLength: 4,
            className: Se["dx-colorpicker-rgba-input"],
            "aria-label": "Alpha",
            value: Math.round(g.a * 100),
            onChange: (W) => ve("a", W.target.value)
          }
        )
      ] })
    ] }),
    o && /* @__PURE__ */ n("div", { className: Se["dx-colorpicker-palette"], children: i.map((W) => /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: Se["dx-colorpicker-swatch"],
        "aria-label": W,
        "aria-disabled": r || void 0,
        tabIndex: r ? -1 : d,
        style: { backgroundColor: W },
        onClick: () => {
          const D = as(W);
          c ? j({ ...D, a: g.a }, !1) : (z(null), P({ ...D, a: g.a }), I(!1), _?.(), u.current?.focus());
        }
      },
      W
    )) }),
    c && /* @__PURE__ */ n("div", { className: Se["dx-colorpicker-footer"], children: /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: Se["dx-colorpicker-ok"],
        onClick: Xe,
        children: "OK"
      }
    ) })
  ] });
  return /* @__PURE__ */ O(
    "div",
    {
      ref: f,
      className: [
        Se["dx-colorpicker"],
        E ? Se["dx-colorpicker-open"] : null,
        l ? Se["dx-colorpicker-invalid"] : null,
        v
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ O(
          "button",
          {
            ref: u,
            type: "button",
            className: [Se["dx-colorpicker-trigger"], ye].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": E,
            "aria-controls": S,
            "aria-label": "Pick a color",
            "aria-disabled": r || void 0,
            disabled: r,
            tabIndex: d,
            onClick: X,
            onKeyDown: (W) => {
              W.key === "Escape" && E && (W.preventDefault(), T());
            },
            children: [
              /* @__PURE__ */ n(
                "span",
                {
                  className: Se["dx-colorpicker-value"],
                  style: { backgroundColor: Ze },
                  "aria-hidden": "true"
                }
              ),
              a && /* @__PURE__ */ n("span", { className: Se["dx-colorpicker-text"], children: a }),
              h && /* @__PURE__ */ n("span", { className: Se["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ n(Ne, { name: "chevron-down", size: 14 }) })
            ]
          }
        ),
        E && /* @__PURE__ */ n(
          "div",
          {
            id: S,
            role: "dialog",
            "aria-label": "Choose color",
            className: Se["dx-colorpicker-popup"],
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
}, x0 = 42;
function xt(e) {
  return String(e).padStart(2, "0");
}
function ht(e) {
  return `${e.year}-${xt(e.month)}-${xt(e.day)}`;
}
function b0(e, t) {
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
function js(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const As = {
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
}, v0 = [
  "yyyy",
  "yy",
  "MM",
  "dd",
  "HH",
  "mm",
  "ss",
  "tt"
], k0 = ["y", "M", "d", "H", "m", "s"];
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
    for (const l of v0)
      if (t.startsWith(l, c)) {
        i += As[l](e, o, s), c += l.length, h = !0;
        break;
      }
    if (h) continue;
    const r = t[c];
    if (k0.includes(r)) {
      i += As[r](e, o, s), c += 1;
      continue;
    }
    i += r, c += 1;
  }
  return i;
}
const w0 = [
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
function $0(e, t) {
  const s = {};
  let o = 0, i = 0;
  for (; i < t.length; ) {
    let r = null;
    for (const l of w0)
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
  return s || $0(e, t);
}
function N0(e, t, s) {
  return t && ht(e) < ht(t) ? t : s && ht(e) > ht(s) ? s : e;
}
const O0 = ["hour", "minute", "second"];
function Xn(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const Xv = He(
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
    placeholder: $,
    ariaLabel: m,
    triggerLabel: S,
    clearLabel: x,
    tabIndex: N,
    className: E,
    onBlur: I,
    onKeyDown: C,
    ...z
  }, g) {
    const M = le(null), P = le(null), j = le(null), T = le(null), F = qe(), X = o !== void 0, [Z, Q] = V(
      () => i != null ? Wn(
        Cn(i, c) ?? Jt(),
        c,
        b
      ) : ""
    ), [K, te] = V(!1), [oe, ee] = V(null), [R, ie] = V(() => {
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
      const U = X ? o ?? "" : Z;
      return U ? Cn(U, c) : null;
    }, [o, Z, X, c]), we = H(
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
          const Ke = Ut(U, -ue);
          if (!we(Ke)) return Ke;
        }
        return U;
      },
      [we]
    ), ve = H(
      (U) => {
        X || Q(U ? Wn(U, c, b) : "");
        const ue = U ? b0(U, l) : "";
        w?.(ue), k?.(ue);
      },
      [X, c, b, l, w, k]
    ), Xe = H(
      (U) => {
        P.current = U, typeof g == "function" ? g(U) : g && (g.current = U);
      },
      [g]
    ), ye = H(() => {
      te(!1), ee(null), f?.(), d || j.current?.focus();
    }, [d, f]), Ze = H(() => {
      if (u) return;
      const U = xe ?? Jt();
      ee(U), ie(Be(U)), te(!0), _?.();
    }, [u, xe, Be, _]), Ve = H(() => {
      K ? ye() : Ze();
    }, [K, ye, Ze]), Re = H((U) => {
      T.current?.querySelector(
        `[data-date="${ht(U)}"]`
      )?.focus();
    }, []), tt = H(
      (U) => {
        if (we(U)) return;
        const ue = oe ?? xe, Ke = {
          ...l ? {
            hour: ue?.hour ?? 0,
            minute: ue?.minute ?? 0,
            second: ue?.second ?? 0
          } : { hour: 0, minute: 0, second: 0 },
          year: U.year,
          month: U.month,
          day: U.day
        };
        ee(Ke), l || (ve(Ke), ye());
      },
      [we, oe, xe, l, ve, ye]
    ), Qe = H(
      (U, ue) => {
        ee((Pe) => {
          const Ke = Pe ?? xe ?? Jt(), Ot = Math.min(U === "hour" ? 23 : 59, Math.max(0, Ke[U] + ue));
          return { ...Ke, [U]: Ot };
        });
      },
      [xe]
    ), et = H(
      (U, ue) => {
        const Pe = ue.replace(/\D/g, ""), Ke = Pe === "" ? 0 : Number(Pe), Bt = U === "hour" ? 23 : 59;
        ee((Ot) => ({ ...Ot ?? xe ?? Jt(), [U]: Math.min(Bt, Ke) }));
      },
      [xe]
    ), W = H(() => {
      oe && (ve(oe), ye());
    }, [oe, ve, ye]), D = H(() => {
      if (K) return;
      const U = Cn(Z, c);
      ve(U ? N0(U, Y, de) : null);
    }, [K, Z, c, Y, de, ve]), q = (U) => {
      const ue = U.target.value;
      X || Q(ue), K && ee(null);
    }, ne = (U) => {
      U.key === "Enter" ? (U.preventDefault(), K ? oe && (ve(oe), ye()) : D()) : U.key === "Escape" ? K && (U.preventDefault(), ye()) : U.key === "ArrowDown" && !K ? (U.preventDefault(), Ze()) : U.key === "Tab" && K && te(!1), C?.(U);
    }, _e = (U) => {
      D(), I?.(U);
    }, se = (U) => {
      let ue = null;
      switch (U.key) {
        case "ArrowLeft":
          ue = Ut(R, -1), U.preventDefault();
          break;
        case "ArrowRight":
          ue = Ut(R, 1), U.preventDefault();
          break;
        case "ArrowUp":
          ue = Ut(R, -7), U.preventDefault();
          break;
        case "ArrowDown":
          ue = Ut(R, 7), U.preventDefault();
          break;
        case "Home":
          ue = Ut(R, -js(R)), U.preventDefault();
          break;
        case "End":
          ue = Ut(R, 6 - js(R)), U.preventDefault();
          break;
        case "PageUp":
          ue = Un(R, U.shiftKey ? -12 : -1), U.preventDefault();
          break;
        case "PageDown":
          ue = Un(R, U.shiftKey ? 12 : 1), U.preventDefault();
          break;
        case "Enter":
        case " ":
          U.preventDefault(), tt(R);
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
        ie(Pe), setTimeout(() => Re(Pe), 0);
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
      X || Q(""), w?.(""), k?.(""), P.current?.focus();
    }, Oe = K && oe ? Wn(oe, c, b) : X ? o ? Wn(
      Cn(o, c) ?? Jt(),
      c,
      b
    ) : "" : Z, Fe = X ? !!o : Z.length > 0, Je = d || K, dt = { year: R.year, month: R.month }, bt = new Date(dt.year, dt.month - 1, 1).getDay(), J = {
      year: dt.year,
      month: dt.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, ze = [];
    for (let U = 0; U < x0; U += 1)
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
        "aria-label": m ?? "Date picker",
        children: [
          /* @__PURE__ */ O("div", { className: Ee["dx-datepicker-header"], children: [
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: Ee["dx-datepicker-nav"],
                "aria-label": "Previous month",
                onClick: () => {
                  const U = Be(Un(R, -1));
                  ie(U), setTimeout(() => Re(U), 0);
                },
                children: /* @__PURE__ */ n(Ne, { name: "chevron-left", size: 16 })
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
                  const U = Be(Un(R, 1));
                  ie(U), setTimeout(() => Re(U), 0);
                },
                children: /* @__PURE__ */ n(Ne, { name: "chevron-right", size: 16 })
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
                      const Ke = ht(Pe), Bt = we(Pe), Ot = Ke.startsWith(Nt);
                      return /* @__PURE__ */ n(
                        "button",
                        {
                          type: "button",
                          role: "gridcell",
                          "data-date": Ke,
                          tabIndex: Ke === ht(R) ? 0 : -1,
                          "aria-selected": Ke === nt || void 0,
                          "aria-disabled": Bt || void 0,
                          "aria-label": Me.format(
                            new Date(Pe.year, Pe.month - 1, Pe.day)
                          ),
                          className: [
                            Ee["dx-datepicker-day"],
                            Ot ? null : Ee["dx-datepicker-day--outside"],
                            Ke === Gt ? Ee["dx-datepicker-day--today"] : null,
                            Ke === nt ? Ee["dx-datepicker-day--selected"] : null,
                            Bt ? Ee["dx-datepicker-day--disabled"] : null
                          ].filter(Boolean).join(" "),
                          onClick: () => tt(Pe),
                          onFocus: () => ie(Pe),
                          children: Pe.day
                        },
                        Ke
                      );
                    })
                  },
                  ue
                ))
              ]
            }
          ),
          l && /* @__PURE__ */ O("div", { className: Ee["dx-datepicker-time"], children: [
            O0.map((U) => /* @__PURE__ */ O("label", { className: Ee["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ n("span", { className: Ee["dx-datepicker-time-label"], children: Xn(U) }),
              /* @__PURE__ */ O("div", { className: Ee["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ n(
                  "input",
                  {
                    className: Ee["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": Xn(U),
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
                      "aria-label": `Increase ${Xn(U).toLowerCase()}`,
                      onClick: () => Qe(U, 1),
                      children: /* @__PURE__ */ n(Ne, { name: "chevron-up", size: 11 })
                    }
                  ),
                  /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Decrease ${Xn(U).toLowerCase()}`,
                      onClick: () => Qe(U, -1),
                      children: /* @__PURE__ */ n(Ne, { name: "chevron-down", size: 11 })
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
                ref: Xe,
                type: "text",
                autoComplete: "off",
                value: Oe,
                disabled: u,
                readOnly: y,
                placeholder: $,
                tabIndex: N,
                role: a ? void 0 : "combobox",
                "aria-label": m ?? "Date",
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
                  a || Ve();
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
                "aria-label": x ?? "Clear",
                onClick: me,
                children: /* @__PURE__ */ n(Ne, { name: "close", size: 14 })
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
                children: /* @__PURE__ */ n(Ne, { name: "calendar", size: 16 })
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
}, Vv = ({
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
  const [d, v] = V(e), b = H(
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
      onKeyDown: _,
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
            children: /* @__PURE__ */ n(Ne, { name: "ban", size: 16 })
          }
        ),
        f.map((u) => {
          const y = u <= e, $ = u === (e > 0 ? e : d);
          return /* @__PURE__ */ O(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": y,
              "aria-posinset": u,
              "aria-setsize": t,
              "aria-label": `${h} ${u}`,
              tabIndex: $ ? r : -1,
              "aria-disabled": o || s || void 0,
              disabled: o || s,
              className: [
                Qt["dx-rating-item"],
                y ? Qt["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => k(u),
              onFocus: () => v(u),
              children: [
                /* @__PURE__ */ n(
                  "span",
                  {
                    className: Qt["dx-rating-icon-filled"],
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ n(Ne, { name: "star", size: 20 })
                  }
                ),
                /* @__PURE__ */ n("span", { className: Qt["dx-rating-icon-empty"], "aria-hidden": "true", children: /* @__PURE__ */ n(Ne, { name: "star-outline", size: 20 }) })
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
const Gv = ({
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
  const u = le(null), y = le(
    null
  ), [$, m] = V(null), S = $ ?? e, x = $e(
    () => jt(S, o, i),
    [S, o, i]
  ), N = $e(
    () => jt(h ? t : x, o, i),
    [h, t, x, o, i]
  ), E = $e(
    () => jt(h ? Math.max(s, N) : x, o, i),
    [h, s, N, x, o, i]
  ), I = H(
    (R) => {
      const ie = i - o;
      return ie <= 0 ? 0 : (jt(R, o, i) - o) / ie * 100;
    },
    [o, i]
  ), C = H(
    (R, ie) => {
      const Y = u.current;
      if (!Y) return o;
      const de = Y.getBoundingClientRect();
      let ae;
      r === "vertical" ? ae = 1 - (ie - de.top) / de.height : ae = (R - de.left) / de.width;
      const xe = o + jt(ae, 0, 1) * (i - o);
      return c > 0 ? jt(Math.round(xe / c) * c, o, i) : jt(xe, o, i);
    },
    [o, i, c, r]
  ), z = H(
    (R) => {
      typeof R == "number" && m(R), w?.(R), _?.(R);
    },
    [w, _]
  ), g = H(
    (R) => {
      typeof R == "number" && m(R), k?.(R), f?.(R);
    },
    [k, f]
  ), M = H(
    (R, ie, Y) => {
      const de = C(ie, Y);
      let ae;
      h ? R === "min" ? ae = { min: Math.min(de, E), max: E } : ae = { min: N, max: Math.max(de, N) } : ae = de, g(ae), y.current === null && z(ae);
    },
    [h, C, N, E, g, z]
  ), P = H(
    (R, ie) => {
      const Y = (c > 0 ? c : 1) * ie;
      let de;
      h ? R === "min" ? de = {
        min: jt(N + Y, o, E),
        max: E
      } : de = {
        min: N,
        max: jt(E + Y, N, i)
      } : de = jt(x + Y, o, i), z(de);
    },
    [h, c, o, i, N, E, x, z]
  ), j = (R, ie) => {
    if (!l)
      switch (ie.key) {
        case "ArrowLeft":
        case "ArrowDown":
          ie.preventDefault(), P(R, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          ie.preventDefault(), P(R, 1);
          break;
        case "Home":
          ie.preventDefault(), z(h ? R === "min" ? { min: o, max: E } : { min: N, max: N } : o);
          break;
        case "End":
          ie.preventDefault(), z(h ? R === "min" ? { min: E, max: E } : { min: N, max: i } : i);
          break;
      }
  }, T = (R, ie) => {
    l || (ie.preventDefault(), ie.currentTarget.focus(), typeof ie.currentTarget.setPointerCapture == "function" && ie.currentTarget.setPointerCapture(ie.pointerId), y.current = { key: R, pointerId: ie.pointerId }, M(R, ie.clientX, ie.clientY));
  }, F = (R) => {
    !y.current || y.current.pointerId !== R.pointerId || (R.preventDefault(), M(y.current.key, R.clientX, R.clientY));
  }, X = (R) => {
    !y.current || y.current.pointerId !== R.pointerId || (y.current = null, R.preventDefault(), z(h ? { min: N, max: E } : x));
  }, [Z, Q] = V(null), K = I(N), te = I(E), oe = h ? K : 0, ee = te;
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
            "aria-valuenow": Math.round(N),
            "aria-orientation": r,
            "aria-label": h ? p : a,
            "aria-disabled": l || void 0,
            tabIndex: l || h && Z === "max" ? -1 : v,
            className: ln["dx-slider-handle"],
            style: r === "vertical" ? { bottom: `calc(${K}% - 8px)` } : { left: `calc(${K}% - 8px)` },
            onKeyDown: (R) => j("min", R),
            onPointerDown: (R) => T("min", R),
            onPointerMove: F,
            onPointerUp: X,
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
            onKeyDown: (R) => j("max", R),
            onPointerDown: (R) => T("max", R),
            onPointerMove: F,
            onPointerUp: X,
            onFocus: () => Q("max")
          }
        )
      ] })
    }
  );
}, Ue = {
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
}, S0 = "-10675199.02:48:05.4775808", z0 = "10675199.02:48:05.4775808", Xt = 86400, Vt = 3600, Dt = 60, ss = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, Ts = {
  days: Xt,
  hours: Vt,
  minutes: Dt,
  seconds: 1
}, D0 = {
  day: Xt,
  hour: Vt,
  minute: Dt,
  second: 1
};
function mn(e) {
  return String(e).padStart(2, "0");
}
function Rn(e) {
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
    return s * (r * Xt + l * Vt + a * Dt + p);
  }
  const c = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(
    o
  );
  if (c) {
    const h = c[1] != null ? Number(c[1]) : 0, r = Number(c[2]), l = Number(c[3]), a = c[4] != null ? Number(c[4]) : 0, p = c[5] != null ? +`0.${c[5]}` : 0;
    return r > 23 || l > 59 || a > 59 ? null : s * (h * Xt + r * Vt + l * Dt + a + p);
  }
  return null;
}
function M0(e) {
  return e.days * Xt + e.hours * Vt + e.minutes * Dt + e.seconds;
}
function Ls(e) {
  let t = Math.abs(e);
  const s = Math.floor(t / Xt);
  t %= Xt;
  const o = Math.floor(t / Vt);
  t %= Vt;
  const i = Math.floor(t / Dt), c = Math.round(t % Dt * 1e9) / 1e9;
  return { days: s, hours: o, minutes: i, seconds: c };
}
function cs(e, t) {
  const s = e < 0;
  let o = Math.abs(e);
  t === "minute" ? o = Math.round(o / Dt) * Dt : t === "hour" ? o = Math.round(o / Vt) * Vt : t === "day" && (o = Math.round(o / Xt) * Xt);
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
  const s = Rn(e);
  return s === null ? "" : cs(s, t);
}
function rs(e, t, s) {
  return Math.min(s, Math.max(t, e));
}
const Yv = He(
  function({
    size: t = "md",
    invalid: s = !1,
    value: o,
    defaultValue: i,
    min: c = S0,
    max: h = z0,
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
    placeholder: $,
    ariaLabel: m,
    triggerLabel: S,
    clearLabel: x,
    tabIndex: N,
    className: E,
    onBlur: I,
    onKeyDown: C,
    ...z
  }, g) {
    const M = le(null), P = le(null), j = le(null), T = qe(), F = o !== void 0, [X, Z] = V(
      () => i != null ? Rs(i, l) : ""
    ), [Q, K] = V(!1), [te, oe] = V(null), [ee, R] = V(null), ie = $e(
      () => Rn(c) ?? -Number.MAX_SAFE_INTEGER,
      [c]
    ), Y = $e(
      () => Rn(h) ?? Number.MAX_SAFE_INTEGER,
      [h]
    ), de = $e(() => {
      const J = Number.parseFloat(r);
      return Number.isNaN(J) || J <= 0 ? 1 : J;
    }, [r]), ae = $e(() => {
      const J = F ? o ?? "" : X;
      return J ? Rn(J) : null;
    }, [o, X, F]), xe = H(
      (J) => {
        const ze = J === null ? "" : cs(J, l);
        F || Z(ze), k?.(ze), _?.(ze);
      },
      [F, l, k, _]
    ), we = H(
      (J) => {
        J && te !== null && xe(te), K(!1), oe(null), R(null), u?.(), w || j.current?.focus();
      },
      [w, te, xe, u]
    ), Be = H(() => {
      y || (oe(ae ?? 0), K(!0), f?.());
    }, [y, ae, f]), ve = H(() => {
      Q ? we(!1) : Be();
    }, [Q, we, Be]), Xe = H(
      (J, ze) => {
        oe((nt) => {
          const Nt = (nt ?? ae ?? 0) + ze * de * Ts[J];
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
          const Me = Nt ?? ae ?? 0, Ge = Ls(Me);
          Ge[J] = Gt;
          const Pt = (Me < 0 ? -1 : 1) * M0(Ge);
          return rs(Pt, ie, Y);
        }), R(null);
      },
      [ee, ae, ie, Y]
    ), Ze = (J, ze) => {
      R((nt) => ({ ...nt ?? {}, [J]: ze }));
    }, Ve = (J, ze) => {
      switch (ze.key) {
        case "ArrowUp":
          ze.preventDefault(), ye(J), Xe(J, 1);
          break;
        case "ArrowDown":
          ze.preventDefault(), ye(J), Xe(J, -1);
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
    }, Re = H(() => {
      if (Q) return;
      const J = Rn(X);
      xe(J !== null ? rs(J, ie, Y) : null);
    }, [Q, X, ie, Y, xe]), tt = (J) => {
      F || Z(J.target.value);
    }, Qe = (J) => {
      J.key === "Enter" ? (J.preventDefault(), Q ? we(!0) : Re()) : J.key === "Escape" && Q ? (J.preventDefault(), we(!1)) : J.key === "ArrowDown" && !Q ? (J.preventDefault(), Be()) : J.key === "Tab" && Q && K(!1), C?.(J);
    }, et = (J) => {
      Re(), I?.(J);
    }, W = () => {
      F || Z(""), k?.(""), _?.(""), P.current?.focus();
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
      if (w && te !== null) {
        const J = ae;
        (J === null || Math.abs(te - J) > 1e-9) && xe(te);
      }
    }, [w, te, ae, xe]);
    const D = H(
      (J) => {
        P.current = J, typeof g == "function" ? g(J) : g && (g.current = J);
      },
      [g]
    ), q = F ? o ? Rs(o, l) : "" : X, ne = F ? !!o : X.length > 0, _e = w || Q, se = te ?? ae ?? 0, me = Ls(se), Oe = D0[l], Je = ["days", "hours", "minutes", "seconds"].filter(
      (J) => Ts[J] >= Oe && (J === "days" ? a : J === "hours" ? p : J === "minutes" ? d : v)
    ), dt = t === "xs" ? Ue["dx-timespanpicker-input--xs"] : t === "sm" ? Ue["dx-timespanpicker-input--sm"] : t === "lg" ? Ue["dx-timespanpicker-input--lg"] : t === "xl" ? Ue["dx-timespanpicker-input--xl"] : Ue["dx-timespanpicker-input--md"], bt = /* @__PURE__ */ O("div", { className: Ue["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ n("div", { className: Ue["dx-timespanpicker-preview"], "aria-live": "polite", children: cs(se, l) }),
      /* @__PURE__ */ n("div", { className: Ue["dx-timespanpicker-units"], children: Je.map((J) => /* @__PURE__ */ O("label", { className: Ue["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ n("span", { className: Ue["dx-timespanpicker-unit-label"], children: ss[J] }),
        /* @__PURE__ */ O("span", { className: Ue["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ n(
            "input",
            {
              className: Ue["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: ee?.[J] ?? String(me[J]),
              onChange: (ze) => Ze(J, ze.target.value),
              onKeyDown: (ze) => Ve(J, ze),
              onBlur: () => ye(J)
            }
          ),
          /* @__PURE__ */ O("span", { className: Ue["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${ss[J].toLowerCase()}`,
                onClick: () => {
                  ye(J), Xe(J, 1);
                },
                children: /* @__PURE__ */ n(Ne, { name: "chevron-up", size: 11 })
              }
            ),
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${ss[J].toLowerCase()}`,
                onClick: () => {
                  ye(J), Xe(J, -1);
                },
                children: /* @__PURE__ */ n(Ne, { name: "chevron-down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, J)) }),
      /* @__PURE__ */ n("div", { className: Ue["dx-timespanpicker-footer"], children: /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: Ue["dx-timespanpicker-ok"],
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
          Ue["dx-timespanpicker"],
          w ? Ue["dx-timespanpicker-inline"] : null,
          E
        ].filter(Boolean).join(" "),
        children: [
          !w && /* @__PURE__ */ O(De, { children: [
            /* @__PURE__ */ n(
              "input",
              {
                ref: D,
                type: "text",
                autoComplete: "off",
                value: q,
                disabled: y,
                placeholder: $,
                tabIndex: N,
                role: "combobox",
                "aria-label": m ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": Q,
                "aria-controls": T,
                "aria-invalid": s || void 0,
                className: [
                  Ue["dx-timespanpicker-input"],
                  dt,
                  s ? Ue["dx-timespanpicker-input-invalid"] : null
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
                className: Ue["dx-timespanpicker-clear"],
                "aria-label": x ?? "Clear",
                onClick: W,
                children: /* @__PURE__ */ n(Ne, { name: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ n(
              "button",
              {
                ref: j,
                type: "button",
                className: [Ue["dx-timespanpicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": S ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": Q,
                "aria-controls": T,
                disabled: y,
                onClick: ve,
                children: /* @__PURE__ */ n(Ne, { name: "clock", size: 16 })
              }
            )
          ] }),
          _e && /* @__PURE__ */ n(
            "div",
            {
              id: T,
              role: w ? void 0 : "dialog",
              "aria-label": m ?? "Time span picker",
              className: w ? void 0 : Ue["dx-timespanpicker-popup"],
              children: bt
            }
          )
        ]
      }
    );
  }
), C0 = "_wrapper_1c8sy_1", E0 = "_cells_1c8sy_8", I0 = "_cell_1c8sy_8", j0 = "_invalid_1c8sy_63", A0 = "_live_1c8sy_73", an = {
  wrapper: C0,
  cells: E0,
  cell: I0,
  "cell-sm": "_cell-sm_1c8sy_45",
  "cell-md": "_cell-md_1c8sy_51",
  "cell-lg": "_cell-lg_1c8sy_57",
  invalid: j0,
  live: A0
};
function Ps(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const Zv = He(
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
    const w = qe(), k = s !== void 0, [_, f] = V(Ps(o).join("")), u = k ? Ps(s).join("") : _, y = Array.from({ length: t }, (z, g) => u[g] ?? ""), $ = le([]), [m, S] = V(""), x = (z) => {
      k || f(z), i?.(z);
    }, N = (z) => {
      const g = $.current[z];
      g && !g.disabled && (g.focus(), g.select());
    }, E = (z, g) => {
      const M = g.replace(/\D/g, "").slice(-1), P = u.split("");
      if (M) {
        P[z] = M;
        const j = P.join("").slice(0, t);
        x(j), j.length < t ? N(z + 1) : p && S("Code complete");
      }
    }, I = (z, g) => {
      if (g.key === "Backspace") {
        if (g.preventDefault(), u[z]) {
          const M = u.split("");
          M[z] = "", x(M.join(""));
        } else if (z > 0) {
          const M = u.split("");
          M[z - 1] = "", x(M.join("")), N(z - 1);
        }
      } else g.key === "ArrowLeft" && z > 0 ? (g.preventDefault(), N(z - 1)) : g.key === "ArrowRight" && z < t - 1 ? (g.preventDefault(), N(z + 1)) : g.key === "Home" ? (g.preventDefault(), N(0)) : g.key === "End" && (g.preventDefault(), N(t - 1));
    }, C = (z, g) => {
      g.preventDefault();
      const M = g.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!M) return;
      const P = u.split("");
      let j = 0;
      for (let F = 0; F < M.length && z + F < t; F++)
        P[z + F] = M[F] ?? "", j++;
      const T = P.join("");
      x(T), T.length >= t ? p && S("Code complete") : N(z + j);
    };
    return /* @__PURE__ */ O(
      "div",
      {
        className: [an.wrapper, d].filter(Boolean).join(" "),
        role: "group",
        "aria-label": v ?? a,
        "data-invalid": c || void 0,
        children: [
          /* @__PURE__ */ n("div", { className: [an.cells, an[h]].join(" "), children: y.map((z, g) => /* @__PURE__ */ n(
            "input",
            {
              ref: (M) => {
                $.current[g] = M, g === 0 && b && (typeof b == "function" ? b(M) : b.current = M);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: z,
              disabled: l,
              "aria-label": `Digit ${g + 1} of ${t}`,
              "aria-invalid": c && z !== "" ? !0 : void 0,
              autoFocus: r && g === 0,
              className: [
                an.cell,
                an[`cell-${h}`],
                c ? an.invalid : null
              ].filter(Boolean).join(" "),
              onChange: (M) => E(g, M.target.value),
              onKeyDown: (M) => I(g, M),
              onPaste: (M) => C(g, M),
              onFocus: (M) => M.target.select(),
              onBlur: () => {
                p && S("");
              }
            },
            g
          )) }),
          p && /* @__PURE__ */ n(
            "span",
            {
              id: `${w}-live`,
              role: "status",
              "aria-live": "polite",
              className: an.live,
              children: m
            }
          )
        ]
      }
    );
  }
), T0 = "_wrapper_1mvcz_1", L0 = "_header_1mvcz_7", R0 = "_label_1mvcz_15", P0 = "_clear_1mvcz_22", B0 = "_canvas_1mvcz_53", F0 = "_disabled_1mvcz_69", gn = {
  wrapper: T0,
  header: L0,
  label: R0,
  clear: P0,
  canvas: B0,
  disabled: F0
}, Jv = He(
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
    const b = le(null), w = le(!1), k = le(!1), _ = le({ x: 0, y: 0 });
    ke(() => {
      const x = b.current;
      if (!x) return;
      const N = window.devicePixelRatio || 1, E = Math.round((l ?? x.clientWidth) * N), I = Math.round(a * N);
      (x.width !== E || x.height !== I) && (x.width = E, x.height = I);
      const C = x.getContext("2d");
      if (!C) return;
      C.setTransform(N, 0, 0, N, 0, 0), C.lineWidth = c, C.strokeStyle = i, C.lineCap = "round", C.lineJoin = "round";
      const z = t ?? s;
      if (z) {
        const g = new Image();
        g.onload = () => {
          C.drawImage(g, 0, 0, x.clientWidth, a);
        }, g.src = z;
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
    us(v, () => ({
      clear: u,
      toDataURL: (x = "image/png", N) => b.current?.toDataURL(x, N) ?? ""
    }));
    const y = (x) => {
      const N = x.currentTarget.getBoundingClientRect();
      return { x: x.clientX - N.left, y: x.clientY - N.top };
    }, $ = (x) => {
      p || (x.preventDefault(), typeof x.currentTarget.setPointerCapture == "function" && x.currentTarget.setPointerCapture(x.pointerId), w.current = !0, k.current = !1, _.current = y(x));
    }, m = (x) => {
      if (!w.current) return;
      x.preventDefault();
      const N = x.currentTarget.getContext("2d");
      if (!N) return;
      const E = y(x);
      N.beginPath(), N.moveTo(_.current.x, _.current.y), N.lineTo(E.x, E.y), N.stroke(), _.current = E, k.current = !0;
    }, S = (x) => {
      w.current && (x.preventDefault(), w.current = !1, k.current && f());
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
              onPointerDown: $,
              onPointerMove: m,
              onPointerUp: S,
              onPointerCancel: S
            }
          )
        ]
      }
    );
  }
), q0 = "_wrapper_17azb_1", H0 = "_trigger_17azb_7", K0 = "_list_17azb_35", U0 = "_row_17azb_44", W0 = "_name_17azb_59", X0 = "_size_17azb_68", V0 = "_progress_17azb_74", G0 = "_fill_17azb_82", Y0 = "_status_17azb_99", Z0 = "_remove_17azb_106", At = {
  wrapper: q0,
  trigger: H0,
  list: K0,
  row: U0,
  name: W0,
  size: X0,
  progress: V0,
  fill: G0,
  status: Y0,
  remove: Z0
};
function Bs(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const Qv = He(function({
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
  const k = le(null), [_, f] = V([]), u = le(/* @__PURE__ */ new Map()), y = (N, E) => {
    f(
      (I) => I.map((C) => C.file.name === N ? { ...C, ...E } : C)
    );
  }, $ = (N) => {
    if (!t) return;
    const E = new XMLHttpRequest();
    u.current.set(N.file.name, E);
    const I = new FormData();
    if (I.append(o, N.file), E.upload.addEventListener("progress", (C) => {
      if (!C.lengthComputable) return;
      const z = Math.round(C.loaded / C.total * 100);
      y(N.file.name, { state: "uploading", progress: z }), d?.(N.file.name, z);
    }), E.addEventListener("load", () => {
      E.status >= 200 && E.status < 300 ? (y(N.file.name, { state: "complete", progress: 100 }), v?.(N.file.name)) : (y(N.file.name, {
        state: "error",
        message: `HTTP ${E.status}`
      }), b?.(N.file.name, `HTTP ${E.status}`));
    }), E.addEventListener("error", () => {
      y(N.file.name, { state: "error", message: "Network error" }), b?.(N.file.name, "Network error");
    }), c)
      for (const [C, z] of Object.entries(c))
        E.setRequestHeader(C, z);
    E.open("POST", t), E.send(I), y(N.file.name, { state: "uploading", progress: 0 });
  }, m = (N) => {
    if (!N) return;
    const E = [...N], I = [];
    let C = Math.max(0, r - _.length);
    for (const g of E) {
      if (l != null && g.size > l) {
        b?.(
          g.name,
          `File too large (maximum ${Bs(l)})`
        );
        continue;
      }
      if (C <= 0) {
        b?.(g.name, `Too many files (maximum ${r})`);
        continue;
      }
      C -= 1, I.push(g);
    }
    const z = I.map((g) => ({
      file: g,
      state: "pending",
      progress: 0
    }));
    f((g) => [...g, ...z]), k.current && (k.current.value = ""), i && z.forEach($);
  }, S = (N) => {
    u.current.get(N)?.abort(), u.current.delete(N), f((I) => I.filter((C) => C.file.name !== N));
  }, x = p ?? /* @__PURE__ */ O(
    "button",
    {
      type: "button",
      className: At.trigger,
      onClick: () => k.current?.click(),
      children: [
        /* @__PURE__ */ n(Ne, { name: "upload", size: 14 }),
        a
      ]
    }
  );
  return us(w, () => ({
    open: () => k.current?.click(),
    upload: () => _.forEach((N) => N.state === "pending" ? $(N) : null)
  })), /* @__PURE__ */ O("div", { className: At.wrapper, children: [
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
        onChange: (N) => m(N.target.files)
      }
    ),
    !p && _.length > 0 && /* @__PURE__ */ n("ul", { className: At.list, children: _.map(({ file: N, state: E, progress: I, message: C }) => /* @__PURE__ */ O(
      "li",
      {
        className: At.row,
        "data-state": E,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ n("span", { className: At.name, children: N.name }),
          /* @__PURE__ */ n("span", { className: At.size, children: Bs(N.size) }),
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
              "aria-label": `Remove ${N.name}`,
              onClick: () => S(N.name),
              children: /* @__PURE__ */ n(Ne, { name: "close", size: 14 })
            }
          )
        ]
      },
      N.name
    )) })
  ] });
}), J0 = "_zone_1cstd_1", Q0 = "_dragging_1cstd_23", ey = "_caption_1cstd_28", ty = "_browse_1cstd_40", ny = "_disabled_1cstd_67", En = {
  zone: J0,
  dragging: Q0,
  caption: ey,
  browse: ty,
  disabled: ny
};
function sy(e, t) {
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
const ek = He(
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
    const p = le(null), [d, v] = V(!1), b = (u) => {
      if (!u || u.length === 0) return;
      const y = [...u].filter(($) => sy($, t ?? ""));
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
        onDragEnter: w,
        onDragOver: k,
        onDragLeave: _,
        onDrop: f,
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
), ry = "_root_2n1we_1", oy = "_menubar_2n1we_5", ly = "_horizontal_2n1we_15", ay = "_vertical_2n1we_20", iy = "_itemWrapper_2n1we_25", cy = "_item_2n1we_25", dy = "_disabled_2n1we_61", uy = "_icon_2n1we_68", _y = "_text_2n1we_75", fy = "_caret_2n1we_79", hy = "_hasChildren_2n1we_85", py = "_submenu_2n1we_94", my = "_submenuItem_2n1we_118", ct = {
  root: ry,
  menubar: oy,
  horizontal: ly,
  vertical: ay,
  itemWrapper: iy,
  item: cy,
  disabled: dy,
  icon: uy,
  text: _y,
  caret: fy,
  hasChildren: hy,
  submenu: py,
  submenuItem: my
};
function In(e) {
  return !!e.disabled;
}
function tk({
  items: e,
  orientation: t = "horizontal",
  onClick: s,
  ariaLabel: o = "Menu",
  className: i
}) {
  const c = qe(), h = le(null), r = le(null), [l, a] = V(null), p = le(0), d = le(null), v = H(
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
      if (!In(_)) {
        if (_.children && _.children.length > 0) {
          const u = l === f, y = Date.now() - p.current < 600;
          if (u && y) {
            p.current = 0;
            return;
          }
          a(($) => $ === f ? null : f);
          return;
        }
        v(_), a(null);
      }
    },
    [v, l]
  ), w = (_) => {
    In(_) || _.children && _.children.length > 0 || (v(_), a(null));
  };
  ke(() => {
    if (l == null) return;
    const _ = (f) => {
      h.current && !h.current.contains(f.target) && a(null);
    };
    return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
  }, [l]), ke(() => {
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
      (m) => !m.hasAttribute("disabled") && m.getAttribute("aria-disabled") !== "true"
    );
    if (l != null) {
      const m = `${c}-submenu-${l}`, S = document.getElementById(m);
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
    const y = document.activeElement, $ = y ? u.indexOf(y) : -1;
    if (_.key === "ArrowRight" || t === "vertical" && _.key === "ArrowDown") {
      if (_.preventDefault(), u.length === 0) return;
      const m = $ === -1 ? 0 : ($ + 1) % u.length;
      u[m]?.focus();
      return;
    }
    if (_.key === "ArrowLeft" || t === "vertical" && _.key === "ArrowUp") {
      if (_.preventDefault(), u.length === 0) return;
      const m = $ === -1 ? u.length - 1 : ($ - 1 + u.length) % u.length;
      u[m]?.focus();
      return;
    }
    if (_.key === "ArrowDown") {
      if ($ >= 0) {
        const m = y?.getAttribute("data-index"), S = m != null ? Number(m) : -1, x = S >= 0 ? e[S] : void 0;
        x?.children && x.children.length > 0 && !In(x) && (_.preventDefault(), d.current = S, a(S));
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
            const u = !!_.children && _.children.length > 0, y = l === f, $ = In(_), m = `${c}-submenu-${f}`;
            return /* @__PURE__ */ O(
              "div",
              {
                className: ct.itemWrapper,
                onMouseEnter: () => {
                  t === "horizontal" && u && !$ && (p.current = Date.now(), a(f));
                },
                onMouseLeave: () => {
                  t === "horizontal" && u && a((S) => S === f ? null : S);
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
                      "aria-disabled": $ || void 0,
                      "aria-haspopup": u ? "menu" : void 0,
                      "aria-expanded": u ? y : void 0,
                      "aria-controls": u ? m : void 0,
                      tabIndex: $ ? -1 : 0,
                      disabled: $,
                      className: [
                        ct.item,
                        $ ? ct.disabled : null,
                        u ? ct.hasChildren : null
                      ].filter(Boolean).join(" "),
                      onClick: () => b(_, f),
                      children: [
                        _.icon ? /* @__PURE__ */ n("span", { className: ct.icon, "aria-hidden": "true", children: _.icon }) : null,
                        /* @__PURE__ */ n("span", { className: ct.text, children: _.text }),
                        u ? /* @__PURE__ */ n("span", { className: ct.caret, "aria-hidden": "true", children: /* @__PURE__ */ n(Ne, { name: "chevron-down", size: 10 }) }) : null
                      ]
                    }
                  ),
                  u && y ? /* @__PURE__ */ n(
                    "div",
                    {
                      id: m,
                      role: "menu",
                      className: ct.submenu,
                      "data-dx-menu-submenu": "",
                      "aria-label": _.text,
                      children: _.children?.map((S, x) => {
                        const N = In(S), E = !!S.children && S.children.length > 0;
                        return /* @__PURE__ */ O(
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
const gy = "_root_12bqn_1", yy = "_list_12bqn_9", xy = "_item_12bqn_14", by = "_trigger_12bqn_18", vy = "_disabled_12bqn_44", ky = "_expanded_12bqn_51", wy = "_icon_12bqn_55", $y = "_text_12bqn_66", Ny = "_caret_12bqn_73", Oy = "_open_12bqn_80", Sy = "_submenu_12bqn_84", zy = "_submenuItem_12bqn_93", Dy = "_nestedWrapper_12bqn_122", My = "_nestedTrigger_12bqn_127", Cy = "_nestedMenu_12bqn_152", Ey = "_iconOnly_12bqn_160", Ae = {
  root: gy,
  list: yy,
  item: xy,
  trigger: by,
  disabled: vy,
  expanded: ky,
  icon: wy,
  text: $y,
  caret: Ny,
  open: Oy,
  submenu: Sy,
  submenuItem: zy,
  nestedWrapper: Dy,
  nestedTrigger: My,
  nestedMenu: Cy,
  iconOnly: Ey
};
function Iy({
  item: e,
  baseId: t,
  parentKey: s,
  onEmit: o
}) {
  const i = !!e.children && e.children.length > 0, [c, h] = V(!1), r = `${t}-nested-${s}`, l = !!e.disabled, a = () => {
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
              children: /* @__PURE__ */ n(Ne, { name: "chevron-down", size: 10 })
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
function nk({
  items: e,
  multiple: t,
  showArrow: s,
  displayStyle: o,
  onClick: i,
  ariaLabel: c = "Panel menu",
  className: h
}) {
  const r = qe(), l = t ?? !1, a = s ?? !0, p = o ?? "iconAndText", [d, v] = V([]), b = H(
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
        v((y) => y.includes(_) ? y.filter((m) => m !== _) : l ? [...y, _] : [_]);
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
            const $ = Number(y[1]);
            v((m) => m.filter((S) => S !== $));
          }
        } else {
          const y = f.closest('[role="menu"]');
          if (y) {
            const m = y.id.match(/-panel-(\d+)$/);
            if (m) {
              const S = Number(m[1]);
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
        const $ = _.key === "ArrowDown" ? 1 : -1;
        u[(y + $ + u.length) % u.length]?.focus();
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
        const u = !!_.children && _.children.length > 0, y = d.includes(f), $ = !!_.disabled, m = `${r}-panel-${f}`, S = `${r}-trigger-${f}`;
        return /* @__PURE__ */ O("div", { className: Ae.item, children: [
          /* @__PURE__ */ O(
            "button",
            {
              type: "button",
              id: S,
              "aria-expanded": u ? y : void 0,
              "aria-controls": u ? m : void 0,
              "aria-disabled": $ || void 0,
              disabled: $,
              tabIndex: $ ? -1 : 0,
              className: [
                Ae.trigger,
                $ ? Ae.disabled : null,
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
                    children: /* @__PURE__ */ n(Ne, { name: "chevron-down", size: 10 })
                  }
                ) : null
              ]
            }
          ),
          u && y ? /* @__PURE__ */ n(
            "div",
            {
              id: m,
              role: "menu",
              className: Ae.submenu,
              "aria-labelledby": S,
              children: _.children?.map((x, N) => /* @__PURE__ */ n(
                Iy,
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
const jy = "_root_wnctl_1", Ay = "_trigger_wnctl_7", Ty = "_defaultTrigger_wnctl_40", Ly = "_avatar_wnctl_46", Ry = "_menu_wnctl_58", Py = "_item_wnctl_74", By = "_disabled_wnctl_88", Fy = "_active_wnctl_97", qy = "_icon_wnctl_107", Hy = "_text_wnctl_114", Tt = {
  root: jy,
  trigger: Ay,
  defaultTrigger: Ty,
  avatar: Ly,
  menu: Ry,
  item: Py,
  disabled: By,
  active: Fy,
  icon: qy,
  text: Hy
};
function sk({
  items: e,
  trigger: t,
  onClick: s,
  ariaLabel: o = "Profile menu",
  className: i
}) {
  const c = qe(), h = `${c}-menu`, r = le(null), l = le(null), [a, p] = V(!1), [d, v] = V(-1), b = t, w = e.map((m, S) => m.disabled ? -1 : S).filter((m) => m >= 0), k = H(
    (m) => {
      if (m.disabled) return;
      const S = {
        text: m.text,
        path: m.path
      };
      s?.(S), p(!1), l.current?.focus();
    },
    [s]
  ), _ = H(() => {
    v(w[0] ?? -1), p(!0);
  }, [w]), f = H(() => {
    p(!1), v(-1), l.current?.focus();
  }, []);
  ke(() => {
    if (!a) return;
    const m = (S) => {
      r.current && !r.current.contains(S.target) && (p(!1), v(-1));
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [a]), ke(() => {
    if (!a) return;
    const m = (S) => {
      S.key === "Escape" && (S.preventDefault(), f());
    };
    return document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m);
  }, [a, f]);
  const u = (m) => {
    if (w.length === 0) return;
    const S = w.indexOf(d), x = S === -1 ? 0 : (S + m + w.length) % w.length, N = w[x];
    N != null && v(N);
  }, y = (m) => {
    if (!a) {
      (m.key === "ArrowDown" || m.key === "Enter" || m.key === " ") && (m.preventDefault(), _());
      return;
    }
    switch (m.key) {
      case "Escape":
        m.preventDefault(), f();
        break;
      case "ArrowDown":
        m.preventDefault(), u(1);
        break;
      case "ArrowUp":
        m.preventDefault(), u(-1);
        break;
      case "Home":
        m.preventDefault(), w[0] != null && v(w[0]);
        break;
      case "End":
        m.preventDefault(), w[w.length - 1] != null && v(w[w.length - 1]);
        break;
      case "Enter":
      case " ":
        if (m.preventDefault(), d >= 0) {
          const S = e[d];
          S && !S.disabled && k(S);
        }
        break;
      case "Tab":
        p(!1), v(-1);
        break;
    }
  }, $ = (m) => {
    switch (m.key) {
      case "ArrowDown":
        m.preventDefault(), u(1);
        break;
      case "ArrowUp":
        m.preventDefault(), u(-1);
        break;
      case "Home":
        m.preventDefault(), w[0] != null && v(w[0]);
        break;
      case "End":
        m.preventDefault(), w[w.length - 1] != null && v(w[w.length - 1]);
        break;
      case "Enter":
      case " ":
        if (m.preventDefault(), d >= 0) {
          const S = e[d];
          S && !S.disabled && k(S);
        }
        break;
      case "Escape":
        m.preventDefault(), f();
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
            onClick: () => a ? f() : _(),
            onKeyDown: y,
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
            onKeyDown: $,
            tabIndex: -1,
            children: e.map((m, S) => {
              const x = !!m.disabled, N = S === d;
              return /* @__PURE__ */ O(
                "div",
                {
                  id: `${c}-item-${S}`,
                  role: "menuitem",
                  "aria-disabled": x || void 0,
                  tabIndex: x ? -1 : 0,
                  className: [
                    Tt.item,
                    N ? Tt.active : null,
                    x ? Tt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    x || k(m);
                  },
                  onMouseEnter: () => {
                    x || v(S);
                  },
                  children: [
                    m.icon ? /* @__PURE__ */ n("span", { className: Tt.icon, "aria-hidden": "true", children: m.icon }) : null,
                    /* @__PURE__ */ n("span", { className: Tt.text, children: m.text })
                  ]
                },
                `${m.text}-${S}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const Ky = "_root_6bmhq_1", Uy = "_bottomRight_6bmhq_11", Wy = "_bottomLeft_6bmhq_16", Xy = "_topRight_6bmhq_21", Vy = "_topLeft_6bmhq_26", Gy = "_menu_6bmhq_31", Yy = "_itemWrapper_6bmhq_48", Zy = "_tooltip_6bmhq_54", Jy = "_main_6bmhq_76", Qy = "_mainIcon_6bmhq_104", e2 = "_mainOpen_6bmhq_109", t2 = "_item_6bmhq_48", n2 = "_disabled_6bmhq_141", s2 = "_itemIcon_6bmhq_148", ut = {
  root: Ky,
  bottomRight: Uy,
  bottomLeft: Wy,
  topRight: Xy,
  topLeft: Vy,
  menu: Gy,
  itemWrapper: Yy,
  tooltip: Zy,
  main: Jy,
  mainIcon: Qy,
  mainOpen: e2,
  item: t2,
  disabled: n2,
  itemIcon: s2
};
function rk({
  items: e,
  position: t,
  icon: s = "+",
  onClick: o,
  ariaLabel: i = "Open menu",
  className: c
}) {
  const h = t ?? "bottom-right", l = `${qe()}-menu`, a = le(null), p = le(null), [d, v] = V(!1), b = H(
    (f) => {
      if (f.disabled) return;
      const u = { text: f.text, value: f.value };
      o?.(u), v(!1), p.current?.focus();
    },
    [o]
  );
  ke(() => {
    if (!d) return;
    const f = (u) => {
      a.current && !a.current.contains(u.target) && v(!1);
    };
    return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, [d]), ke(() => {
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
  return /* @__PURE__ */ O(
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
              return /* @__PURE__ */ O("div", { className: ut.itemWrapper, children: [
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
const r2 = "_root_17721_1", o2 = "_list_17721_5", l2 = "_item_17721_15", a2 = "_link_17721_22", i2 = "_linkButton_17721_23", c2 = "_current_17721_24", d2 = "_disabled_17721_68", u2 = "_icon_17721_74", _2 = "_text_17721_81", f2 = "_separator_17721_85", We = {
  root: r2,
  list: o2,
  item: l2,
  link: a2,
  linkButton: i2,
  current: c2,
  disabled: d2,
  icon: u2,
  text: _2,
  separator: f2
};
function ok({
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
      className: [We.root, o].filter(Boolean).join(" "),
      children: /* @__PURE__ */ n("ol", { className: We.list, children: e.map((h, r) => {
        const l = r === e.length - 1, a = !!h.disabled;
        return /* @__PURE__ */ O("li", { className: We.item, children: [
          l ? a ? /* @__PURE__ */ O(
            "span",
            {
              className: [We.current, We.disabled].filter(Boolean).join(" "),
              "aria-current": "page",
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                h.icon ? /* @__PURE__ */ n("span", { className: We.icon, "aria-hidden": "true", children: h.icon }) : null,
                h.text
              ]
            }
          ) : h.path ? /* @__PURE__ */ O(
            "a",
            {
              href: h.path,
              className: We.link,
              "aria-current": "page",
              onClick: (p) => {
                p.preventDefault(), c(h);
              },
              children: [
                h.icon ? /* @__PURE__ */ n("span", { className: We.icon, "aria-hidden": "true", children: h.icon }) : null,
                /* @__PURE__ */ n("span", { className: We.text, children: h.text })
              ]
            }
          ) : /* @__PURE__ */ O(
            "span",
            {
              className: We.current,
              "aria-current": "page",
              tabIndex: 0,
              children: [
                h.icon ? /* @__PURE__ */ n("span", { className: We.icon, "aria-hidden": "true", children: h.icon }) : null,
                h.text
              ]
            }
          ) : a ? /* @__PURE__ */ O(
            "span",
            {
              className: [We.link, We.disabled].filter(Boolean).join(" "),
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                h.icon ? /* @__PURE__ */ n("span", { className: We.icon, "aria-hidden": "true", children: h.icon }) : null,
                /* @__PURE__ */ n("span", { className: We.text, children: h.text })
              ]
            }
          ) : h.path ? /* @__PURE__ */ O(
            "a",
            {
              href: h.path,
              className: We.link,
              onClick: (p) => {
                p.preventDefault(), c(h);
              },
              children: [
                h.icon ? /* @__PURE__ */ n("span", { className: We.icon, "aria-hidden": "true", children: h.icon }) : null,
                /* @__PURE__ */ n("span", { className: We.text, children: h.text })
              ]
            }
          ) : /* @__PURE__ */ O(
            "button",
            {
              type: "button",
              className: We.linkButton,
              tabIndex: 0,
              onClick: () => c(h),
              children: [
                h.icon ? /* @__PURE__ */ n("span", { className: We.icon, "aria-hidden": "true", children: h.icon }) : null,
                /* @__PURE__ */ n("span", { className: We.text, children: h.text })
              ]
            }
          ),
          l ? null : /* @__PURE__ */ n("span", { className: We.separator, "aria-hidden": "true", children: "/" })
        ] }, `${h.text}-${r}`);
      }) })
    }
  );
}
const h2 = "_link_1m8h1_1", p2 = {
  link: h2
}, lk = He(function({ children: t, icon: s, visible: o = !0, className: i, ...c }, h) {
  if (o === !1) return null;
  const r = /* @__PURE__ */ O(De, { children: [
    s != null && /* @__PURE__ */ n(Ne, { name: s, "aria-hidden": "true" }),
    t
  ] }), l = [p2.link, i].filter(Boolean).join(" ");
  if (c.href != null) {
    const { href: p, ...d } = c;
    return /* @__PURE__ */ n(
      "a",
      {
        ref: h,
        className: l,
        href: p,
        ...d,
        children: r
      }
    );
  }
  return /* @__PURE__ */ n(
    "button",
    {
      ref: h,
      type: "button",
      className: l,
      ...c,
      children: r
    }
  );
}), m2 = "_root_pfzz5_1", g2 = "_list_pfzz5_5", y2 = "_item_pfzz5_15", x2 = "_connector_pfzz5_21", b2 = "_connectorCompleted_pfzz5_30", v2 = "_step_pfzz5_34", k2 = "_active_pfzz5_69", w2 = "_completed_pfzz5_75", $2 = "_circle_pfzz5_79", N2 = "_check_pfzz5_109", O2 = "_icon_pfzz5_114", S2 = "_number_pfzz5_119", z2 = "_text_pfzz5_124", _t = {
  root: m2,
  list: g2,
  item: y2,
  connector: x2,
  connectorCompleted: b2,
  step: v2,
  active: k2,
  completed: w2,
  circle: $2,
  check: N2,
  icon: O2,
  number: S2,
  text: z2
};
function ak({
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
  const d = i ?? c ?? !1, v = t ?? s, b = v !== void 0, [w, k] = V(() => Math.min(Math.max(0, v ?? o), Math.max(0, e.length - 1))), f = Math.min(
    Math.max(0, b ? v : w),
    Math.max(0, e.length - 1)
  ), u = le(null), y = H(
    (S) => {
      const x = Math.min(
        Math.max(0, S),
        Math.max(0, e.length - 1)
      );
      b || k(x), (h ?? r ?? l)?.(x);
    },
    [b, h, r, l, e.length]
  ), $ = H(
    (S, x) => !!(x.disabled || d && S > f + 1),
    [d, f]
  ), m = (S) => {
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
      onKeyDown: m,
      children: /* @__PURE__ */ n("ol", { ref: u, role: "list", className: _t.list, children: e.map((S, x) => {
        const N = x === f, E = x < f, I = $(x, S);
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
                    /* @__PURE__ */ n("span", { className: _t.circle, "aria-hidden": "true", children: E ? /* @__PURE__ */ n("span", { className: _t.check, "aria-hidden": "true", children: /* @__PURE__ */ n(Ne, { name: "check", size: "sm" }) }) : S.icon ? /* @__PURE__ */ n("span", { className: _t.icon, children: S.icon }) : /* @__PURE__ */ n("span", { className: _t.number, children: x + 1 }) }),
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
const D2 = "_root_1axlw_1", M2 = "_horizontal_1axlw_13", C2 = "_vertical_1axlw_17", E2 = "_pane_1axlw_21", I2 = "_handle_1axlw_31", j2 = "_handleHorizontal_1axlw_51", A2 = "_handleVertical_1axlw_57", T2 = "_handleGrip_1axlw_63", L2 = "_handleCollapseHint_1axlw_75", R2 = "_collapseBtn_1axlw_79", P2 = "_collapseBtnCollapsed_1axlw_109", wt = {
  root: D2,
  horizontal: M2,
  vertical: C2,
  pane: E2,
  handle: I2,
  handleHorizontal: j2,
  handleVertical: A2,
  handleGrip: T2,
  handleCollapseHint: L2,
  collapseBtn: R2,
  collapseBtnCollapsed: P2
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
function ik({
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
    const g = s.length;
    if (g === 0) return [];
    const M = s.map((j) => j.size ? jn(j.size, 100 / g) : 100 / g), P = M.reduce((j, T) => j + T, 0);
    return Math.abs(P - 100) > 0.01 && P > 0 ? M.map((j) => j / P * 100) : M;
  }, [s]), [b, w] = V(() => v()), [k, _] = V(
    () => s.map((g) => !!g.collapsed)
  ), f = le(b);
  ke(() => {
    _(s.map((g) => !!g.collapsed));
  }, [s]);
  const u = H(
    () => s.map((g) => jn(g.min, 0)),
    [s]
  ), y = H(
    () => s.map((g) => jn(g.max, 100)),
    [s]
  ), $ = H(
    (g, M) => {
      const P = { paneIndex: g, newSize: M, cancel: !1 };
      return (o ?? i)?.(P), !P.cancel;
    },
    [o, i]
  ), m = H(
    (g, M) => {
      const P = { paneIndex: g, collapse: M, cancel: !1 };
      return (c ?? h)?.(P), !P.cancel;
    },
    [c, h]
  ), S = H(
    (g) => {
      const M = !k[g];
      m(g, M) && (M ? (f.current = [...b], _((P) => {
        const j = [...P];
        return j[g] !== void 0 && (j[g] = !0), j;
      }), w((P) => {
        const j = [...P], T = j[g] ?? 0, F = g < j.length - 1 ? g + 1 : g - 1;
        if (F >= 0 && F < j.length) {
          const X = j[F] ?? 0;
          j[F] = X + T, j[g] = 0;
        } else
          j[g] = 0;
        return j;
      })) : (_((P) => {
        const j = [...P];
        return j[g] !== void 0 && (j[g] = !1), j;
      }), w(() => {
        const P = [...f.current];
        return P.length !== s.length ? s.map(() => 100 / s.length) : P;
      })));
    },
    [k, b, s.length, m]
  ), x = le(
    null
  ), N = H(
    (g, M, P) => {
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
      let X = 0;
      for (let Q = 0; Q < g; Q++) {
        const K = b[Q];
        K !== void 0 && (X += K);
      }
      return F - X;
    },
    [p, b]
  ), E = (g, M) => {
    M.preventDefault();
    const P = M.currentTarget;
    P.focus(), typeof P.setPointerCapture == "function" && P.setPointerCapture(M.pointerId), x.current = { handleIndex: g, pointerId: M.pointerId };
  }, I = (g) => {
    if (!x.current || x.current.pointerId !== g.pointerId)
      return;
    g.preventDefault();
    const M = x.current.handleIndex, P = N(M, g.clientX, g.clientY);
    if (P == null) return;
    const j = u(), T = y(), F = j[M] ?? 0, X = T[M] ?? 100, Z = M + 1, Q = j[Z] ?? 0, K = T[Z] ?? 100, te = b[M] ?? 0, oe = b[Z] ?? 0, ee = te + oe;
    if (ee <= 0) return;
    let R = Wt(P, F, X), ie = ee - R;
    if (ie < Q) {
      if (ie = Q, R = ee - ie, R < F || R > X) return;
    } else if (ie > K && (ie = K, R = ee - ie, R < F || R > X))
      return;
    R = Wt(R, F, X), ie = ee - R, $(M, R) && w((Y) => {
      const de = [...Y];
      return de[M] = R, de[Z] = ie, de;
    });
  }, C = (g) => {
    !x.current || x.current.pointerId !== g.pointerId || (x.current = null);
  }, z = (g, M) => {
    const P = u(), j = y(), T = g, F = g + 1, X = b[T] ?? 0, Z = b[F] ?? 0, Q = X + Z;
    let K = 0;
    const te = !!s[T]?.collapsible, oe = !!s[F]?.collapsible;
    if (p ? M.key === "ArrowLeft" ? K = -5 : M.key === "ArrowRight" && (K = 5) : M.key === "ArrowUp" ? K = -5 : M.key === "ArrowDown" && (K = 5), M.key === "Home") {
      M.preventDefault();
      let ee = P[T] ?? 0, R = Q - ee;
      if (R = Wt(
        R,
        P[F] ?? 0,
        j[F] ?? 100
      ), ee = Q - R, ee = Wt(ee, P[T] ?? 0, j[T] ?? 100), !$(T, ee)) return;
      w((ie) => {
        const Y = [...ie];
        return Y[T] = ee, Y[F] = R, Y;
      });
      return;
    }
    if (M.key === "End") {
      M.preventDefault();
      let ee = j[T] ?? 100;
      ee = Math.min(ee, Q - (P[F] ?? 0));
      let R = Q - ee;
      if (R = Wt(
        R,
        P[F] ?? 0,
        j[F] ?? 100
      ), ee = Q - R, ee = Wt(ee, P[T] ?? 0, j[T] ?? 100), !$(T, ee)) return;
      w((ie) => {
        const Y = [...ie];
        return Y[T] = ee, Y[F] = R, Y;
      });
      return;
    }
    if ((M.key === "Enter" || M.key === " ") && (te || oe)) {
      M.preventDefault(), S(te ? T : F);
      return;
    }
    if (K !== 0) {
      M.preventDefault();
      let ee = X + K, R = Q - ee;
      const ie = P[T] ?? 0, Y = j[T] ?? 100, de = P[F] ?? 0, ae = j[F] ?? 100;
      if (ee = Wt(ee, ie, Y), R = Q - ee, (R < de || R > ae) && (R = Wt(R, de, ae), ee = Q - R, ee = Wt(ee, ie, Y), R = Q - ee), !$(T, ee)) return;
      w((xe) => {
        const we = [...xe];
        return we[T] = ee, we[F] = R, we;
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
      children: s.map((g, M) => {
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
        }, F = jn(g.min, 0), X = jn(g.max, 100), Z = M < s.length - 1, Q = !!s[M + 1]?.collapsible;
        return /* @__PURE__ */ O("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ O(
            "div",
            {
              role: "group",
              "aria-label": g.label ?? `Pane ${M + 1}`,
              className: wt.pane,
              style: T,
              "data-collapsed": P ? "true" : void 0,
              children: [
                P ? null : g.children,
                g.collapsible && !P ? /* @__PURE__ */ n(
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
                g.collapsible && P ? /* @__PURE__ */ n(
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
          P && g.collapsible ? (
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
              "aria-valuemax": X,
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
                (g.collapsible || Q) && /* @__PURE__ */ n(
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
const B2 = "_root_exk72_1", F2 = "_list_exk72_5", q2 = "_vertical_exk72_14", H2 = "_horizontal_exk72_20", K2 = "_item_exk72_28", U2 = "_link_exk72_32", W2 = "_active_exk72_57", yn = {
  root: B2,
  list: F2,
  vertical: q2,
  horizontal: H2,
  item: K2,
  link: U2,
  active: W2
};
function ck({
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
  const a = t ?? s, p = o ?? i ?? "vertical", [d, v] = V(
    () => e[0]?.selector ?? null
  ), b = le(d);
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
  return ke(() => {
    if (e.length === 0) return;
    const _ = (() => {
      if (a) {
        const m = document.querySelector(a);
        if (m) return m;
      }
      return window;
    })();
    let f = null;
    const u = /* @__PURE__ */ new Map(), y = () => {
      let m = null, S = null;
      for (const N of e) {
        const E = document.querySelector(N.selector);
        if (!E) continue;
        u.set(N.selector, E);
        const I = E.getBoundingClientRect();
        let C = I.top;
        if (_ !== window) {
          const z = _.getBoundingClientRect();
          C = I.top - z.top;
        }
        C <= 80 ? (!S || C > S.el.getBoundingClientRect().top - (_ !== window ? _.getBoundingClientRect().top : 0)) && (S = { sel: N.selector, el: E }) : (!m || C < m.top) && (m = { sel: N.selector, top: C });
      }
      const x = S?.sel ?? m?.sel ?? e[0]?.selector ?? null;
      x && x !== b.current && v(x);
    }, $ = () => {
      y();
    };
    if (typeof IntersectionObserver < "u") {
      const m = _ === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
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
      }, m);
      for (const S of e) {
        const x = document.querySelector(S.selector);
        x && (f.observe(x), u.set(S.selector, x));
      }
    }
    return _ === window ? (window.addEventListener("scroll", $, { passive: !0 }), y(), () => {
      window.removeEventListener("scroll", $), f?.disconnect();
    }) : (_.addEventListener("scroll", $, {
      passive: !0
    }), y(), () => {
      _.removeEventListener("scroll", $), f?.disconnect();
    });
  }, [e, a]), /* @__PURE__ */ n(
    "nav",
    {
      "aria-label": r,
      className: [yn.root, yn[p], l].filter(Boolean).join(" "),
      children: /* @__PURE__ */ n("ol", { className: yn.list, children: e.map((k) => {
        const _ = k.selector === d;
        return /* @__PURE__ */ n("li", { className: yn.item, children: /* @__PURE__ */ n(
          "a",
          {
            href: k.selector.startsWith("#") || k.selector.startsWith(".") ? k.selector : `#${k.selector}`,
            className: [yn.link, _ ? yn.active : null].filter(Boolean).join(" "),
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
const X2 = "_root_1i6qn_1", V2 = "_viewport_1i6qn_17", G2 = "_slide_1i6qn_24", Y2 = "_active_1i6qn_33", Z2 = "_arrow_1i6qn_37", J2 = "_prev_1i6qn_71", Q2 = "_next_1i6qn_75", ex = "_pauseBtn_1i6qn_79", tx = "_indicators_1i6qn_110", nx = "_indicator_1i6qn_110", sx = "_indicatorActive_1i6qn_145", $t = {
  root: X2,
  viewport: V2,
  slide: G2,
  active: Y2,
  arrow: Z2,
  prev: J2,
  next: Q2,
  pauseBtn: ex,
  indicators: tx,
  indicator: nx,
  indicatorActive: sx
};
function dk({
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
  const u = t ?? s, y = u !== void 0, [$, m] = V(() => Math.min(Math.max(0, u ?? o), Math.max(0, e.length - 1))), S = y ? u : $, x = e.length === 0 ? 0 : Math.min(Math.max(0, S), e.length - 1), N = i ?? c ?? !1, E = h ?? r ?? 3e3, I = l ?? a ?? !0, C = p ?? d ?? !0, z = v ?? b ?? !0, [g, M] = V(!1), [P, j] = V(!1), T = g || P, F = le(null), X = qe(), Z = H(
    (de) => {
      const ae = e.length === 0 ? 0 : (de % e.length + e.length) % e.length;
      y || m(ae), (w ?? k)?.(ae);
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
  ke(() => {
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
  }, R = () => {
    I && N && j(!1);
  }, ie = () => {
    I && N && j(!0);
  }, Y = () => {
    I && N && j(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ O(
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
      onMouseLeave: R,
      onFocusCapture: ie,
      onBlurCapture: Y,
      children: [
        /* @__PURE__ */ n("div", { id: X, className: $t.viewport, children: e.map((de, ae) => {
          const xe = ae === x;
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
              "aria-controls": X,
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
              "aria-controls": X,
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
            "aria-label": g ? "Resume" : "Pause",
            "aria-pressed": g,
            onClick: () => M((de) => !de),
            children: g ? "▶" : "⏸"
          }
        ) : null,
        z && e.length > 1 ? /* @__PURE__ */ n(
          "div",
          {
            className: $t.indicators,
            role: "group",
            "aria-label": "Slide indicators",
            children: e.map((de, ae) => {
              const xe = ae === x;
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
                  "aria-controls": X,
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
const rx = "_root_15u2v_1", ox = "_group_15u2v_20", lx = "_itemWrapper_15u2v_30", ax = "_treeitem_15u2v_34", ix = "_disabled_15u2v_50", cx = "_selected_15u2v_60", dx = "_caret_15u2v_66", ux = "_caretIcon_15u2v_113", _x = "_caretOpen_15u2v_120", fx = "_caretPlaceholder_15u2v_124", hx = "_label_15u2v_130", px = "_loading_15u2v_137", mx = "_loadingRow_15u2v_143", gx = "_empty_15u2v_149", yx = "_checkbox_15u2v_155", st = {
  root: rx,
  group: ox,
  itemWrapper: lx,
  treeitem: ax,
  disabled: ix,
  selected: cx,
  caret: dx,
  caretIcon: ux,
  caretOpen: _x,
  caretPlaceholder: fx,
  label: hx,
  loading: px,
  loadingRow: mx,
  empty: gx,
  checkbox: yx
};
function xx({
  indeterminate: e,
  ...t
}) {
  const s = le(null);
  return ke(() => {
    s.current && (s.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ n("input", { ref: s, type: "checkbox", ...t });
}
function uk({
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
  onCollapse: $,
  Collapse: m,
  loadChildData: S,
  LoadChildData: x,
  template: N,
  Template: E,
  itemTemplate: I,
  ItemTemplate: C,
  ariaLabel: z,
  AriaLabel: g,
  allowCheckBoxes: M = !1,
  checkedKeys: P,
  defaultCheckedKeys: j,
  onCheckedChange: T,
  allowCheckChildren: F = !0,
  className: X
}) {
  const Z = e ?? t ?? [], Q = s ?? o, K = i ?? c ?? "text", te = h ?? r ?? "id", oe = l ?? a ?? "single", ee = z ?? g ?? "Tree", R = S ?? x, ie = N ?? E ?? I ?? C, Y = H(
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
  ), [we, Be] = V(
    () => xe(Z)
  ), [ve, Xe] = V(
    () => /* @__PURE__ */ new Map()
  ), [ye, Ze] = V(() => /* @__PURE__ */ new Set()), Ve = p ?? d, Re = v ?? b, et = oe === "multiple" ? Re !== void 0 : Ve !== void 0, W = H(() => {
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
      if (w) return /* @__PURE__ */ new Set([Y(w)]);
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
    w,
    k,
    Y,
    ae,
    Z
  ]), [D, q] = V(
    () => W()
  ), ne = $e(() => {
    if (oe === "multiple") {
      if (Re !== void 0) {
        const B = Re;
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
    Re,
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
          const fe = _ ?? f;
          if (fe) {
            const be = se(), Te = [];
            for (const A of he) {
              const L = be.get(A) ?? _e(A);
              L && Te.push(L);
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
  ), Oe = H(
    async (B) => {
      const G = Y(B);
      if (!!B.disabled) return;
      const he = we.has(G), fe = u ?? y, be = $ ?? m, Te = ae(B), L = ve.get(G) ?? Te, pe = !(L !== void 0 && L.length > 0) && R != null;
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
          const je = await R(B);
          Xe((Ce) => {
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
      R,
      ye,
      u,
      y,
      $,
      m
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
  ), [dt, bt] = V(
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
        const A = Y(be), L = de(be), ce = ve.get(A) ?? ae(be);
        let pe;
        ve.has(A) ? pe = ve.get(A).length > 0 : ce !== void 0 ? pe = ce.length > 0 : R ? pe = !0 : pe = !1;
        const Ie = we.has(A), je = !!be.disabled, Ce = re.length, lt = Te + 1;
        if (B.push({
          item: be,
          key: A,
          text: L,
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
    R,
    ye
  ]), [Ge, vt] = V(
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
  ), Ke = H(
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
          Oe(re.item);
        else if (re.hasChildren && re.expanded) {
          const fe = G + 1, be = Me[fe];
          be && be.parentKey === re.key && ue(be.key);
        }
        return;
      }
      if (B.key === "ArrowLeft") {
        if (B.preventDefault(), !re) return;
        if (re.hasChildren && re.expanded)
          Oe(re.item);
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
        const be = G >= 0 ? G + 1 : 0, L = [...Me, ...Me].slice(be, be + Me.length).find((ce) => ce.text.toLowerCase().startsWith(fe));
        L && ue(L.key);
        return;
      }
    },
    [
      Me,
      Ge,
      ue,
      Oe,
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
    let L;
    ve.has(be) ? L = ve.get(be).length > 0 : A !== void 0 ? L = A.length > 0 : R ? L = !0 : L = !1;
    const ce = we.has(be), pe = ne.has(be), Ie = !!he.disabled, je = ye.has(be), Ce = Ge === be, lt = B.length, St = fe + 1, nr = ie ? ie(he) : Te, hs = M ? {
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
          "aria-expanded": L ? ce : void 0,
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
              xx,
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
            L ? /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: st.caret,
                "aria-label": `${ce ? "Collapse" : "Expand"} ${Te}`,
                "aria-expanded": ce,
                tabIndex: -1,
                disabled: Ie,
                onClick: (Pn) => {
                  Pn.stopPropagation(), ue(be), Oe(he);
                },
                children: /* @__PURE__ */ n(
                  "span",
                  {
                    "aria-hidden": "true",
                    className: [
                      st.caretIcon,
                      ce ? st.caretOpen : null
                    ].filter(Boolean).join(" "),
                    children: /* @__PURE__ */ n(Ne, { name: "chevron-right", size: 10 })
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
            /* @__PURE__ */ n("span", { className: st.label, children: nr }),
            je ? /* @__PURE__ */ n("span", { className: st.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      L && ce ? je ? /* @__PURE__ */ n("div", { className: st.loadingRow, "aria-busy": "true", children: "Loading…" }) : A && A.length > 0 ? Ot(A, G + 1) : ve.has(be) && ve.get(be).length > 0 ? Ot(
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
      className: [st.root, X].filter(Boolean).join(" "),
      onKeyDown: Ke,
      onFocus: Bt,
      children: Z.length === 0 ? /* @__PURE__ */ n("div", { className: st.empty, children: "No items" }) : Ot(Z, 1)
    }
  );
}
const bx = "_root_12sxo_1", vx = "_panel_12sxo_8", kx = "_header_12sxo_19", wx = "_listbox_12sxo_28", $x = "_option_12sxo_42", Nx = "_disabled_12sxo_57", Ox = "_active_12sxo_66", Sx = "_selected_12sxo_70", zx = "_empty_12sxo_86", Dx = "_controls_12sxo_93", Mx = "_reorder_12sxo_102", Cx = "_btn_12sxo_110", Le = {
  root: bx,
  panel: vx,
  header: kx,
  listbox: wx,
  option: $x,
  disabled: Nx,
  active: Ox,
  selected: Sx,
  empty: zx,
  controls: Dx,
  reorder: Mx,
  btn: Cx
};
function rt(e, t) {
  const s = e[t];
  return s != null ? String(s) : String(e.id ?? "");
}
function Vn(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function _k({
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
  className: $
}) {
  const m = w ?? k ?? "id", S = u ?? y ?? "PickList", x = e ?? t ?? i ?? c ?? l ?? a ?? [], N = s ?? o ?? h ?? r ?? [], [E, I] = V(() => [
    ...x
  ]), [C, z] = V(() => [
    ...N
  ]);
  ke(() => {
    const D = e ?? t ?? i ?? c ?? l ?? a;
    D !== void 0 && I([...D]);
  }, [e, t, i, c, l, a]), ke(() => {
    const D = s ?? o ?? h ?? r;
    D !== void 0 && z([...D]);
  }, [s, o, h, r]);
  const [g, M] = V(
    () => /* @__PURE__ */ new Set()
  ), [P, j] = V(
    () => /* @__PURE__ */ new Set()
  ), [T, F] = V(() => {
    const D = x.findIndex((q) => !q.disabled);
    return D >= 0 ? D : 0;
  }), [X, Z] = V(() => {
    const D = N.findIndex((q) => !q.disabled);
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
    if (X >= C.length) {
      const D = K[K.length - 1];
      Z(D ?? 0);
    } else if (C.length > 0 && K.length > 0 && !K.includes(X)) {
      const D = K[0];
      D !== void 0 && Z(D);
    }
  }, [X, C.length, K]), ke(() => {
    M((D) => {
      const q = /* @__PURE__ */ new Set();
      for (const ne of D)
        E.some(
          (se) => rt(se, m) === ne && !se.disabled
        ) && q.add(ne);
      return q;
    });
  }, [E, m]), ke(() => {
    j((D) => {
      const q = /* @__PURE__ */ new Set();
      for (const ne of D)
        C.some(
          (se) => rt(se, m) === ne && !se.disabled
        ) && q.add(ne);
      return q;
    });
  }, [C, m]);
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
      (_ ?? f)?.(D);
    },
    [_, f]
  ), R = H(
    (D) => {
      const q = E[D];
      if (!q || q.disabled) return;
      const ne = rt(q, m);
      M((_e) => {
        const se = new Set(_e);
        return se.has(ne) ? se.delete(ne) : se.add(ne), se;
      }), F(D);
    },
    [E, m]
  ), ie = H(
    (D) => {
      const q = C[D];
      if (!q || q.disabled) return;
      const ne = rt(q, m);
      j((_e) => {
        const se = new Set(_e);
        return se.has(ne) ? se.delete(ne) : se.add(ne), se;
      }), Z(D);
    },
    [C, m]
  ), Y = H(() => {
    const D = [], q = [];
    for (const me of E) {
      const Oe = rt(me, m);
      g.has(Oe) && !me.disabled ? D.push(me) : q.push(me);
    }
    if (D.length === 0) return;
    const ne = q, _e = [...C, ...D];
    I(ne), z(_e), M(/* @__PURE__ */ new Set());
    const se = new Set(D.map((me) => rt(me, m)));
    j(se), te(ne), oe(_e), ee({
      source: ne,
      target: _e,
      moved: D,
      direction: "toTarget"
    });
  }, [
    E,
    C,
    g,
    m,
    te,
    oe,
    ee
  ]), de = H(() => {
    const D = [], q = [];
    for (const me of C) {
      const Oe = rt(me, m);
      P.has(Oe) && !me.disabled ? D.push(me) : q.push(me);
    }
    if (D.length === 0) return;
    const ne = q, _e = [...E, ...D];
    z(ne), I(_e), j(/* @__PURE__ */ new Set());
    const se = new Set(D.map((me) => rt(me, m)));
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
    m,
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
    m,
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
      const me = D[se], Oe = D[se - 1];
      if (!me || !Oe) continue;
      const Fe = rt(me, m), Je = rt(Oe, m);
      q.has(Fe) && !q.has(Je) && !me.disabled && !Oe.disabled && (D[se - 1] = me, D[se] = Oe, ne.push(me));
    }
    if (ne.length === 0) return;
    z(D), oe(D), ee({ source: E, target: D, moved: ne, direction: "up" });
    const _e = Array.from(q)[0];
    if (_e) {
      const se = D.findIndex(
        (me) => rt(me, m) === _e
      );
      se >= 0 && Z(se);
    }
  }, [
    C,
    P,
    m,
    E,
    oe,
    ee
  ]), Be = H(() => {
    if (P.size === 0) return;
    const D = [...C], q = P, ne = [];
    for (let se = D.length - 2; se >= 0; se--) {
      const me = D[se], Oe = D[se + 1];
      if (!me || !Oe) continue;
      const Fe = rt(me, m), Je = rt(Oe, m);
      q.has(Fe) && !q.has(Je) && !me.disabled && !Oe.disabled && (D[se] = Oe, D[se + 1] = me, ne.push(me));
    }
    if (ne.length === 0) return;
    z(D), oe(D), ee({ source: E, target: D, moved: ne, direction: "down" });
    const _e = Array.from(q)[0];
    if (_e) {
      const se = D.findIndex(
        (me) => rt(me, m) === _e
      );
      se >= 0 && Z(se);
    }
  }, [
    C,
    P,
    m,
    E,
    oe,
    ee
  ]), ve = g.size > 0, Xe = P.size > 0, ye = le(""), Ze = le(
    null
  ), Ve = le(""), Re = le(
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
        D.preventDefault(), R(ne);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(D.key)) {
        D.preventDefault();
        const se = (ye.current + D.key).toLowerCase();
        ye.current = se, Ze.current && clearTimeout(Ze.current), Ze.current = setTimeout(() => {
          ye.current = "";
        }, 500);
        const me = [...q, ...q], Oe = q.indexOf(ne) + 1, Fe = me.slice(Oe).find(
          (Je) => Vn(E[Je]).toLowerCase().startsWith(se)
        );
        Fe != null && F(Fe);
        return;
      }
      _e >= 0 && F(_e);
    },
    [E, Q, T, R]
  ), Qe = H(
    (D) => {
      if (C.length === 0) return;
      const q = K;
      if (q.length === 0) return;
      const ne = q.includes(X) ? X : q[0] ?? 0;
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
        Ve.current = se, Re.current && clearTimeout(Re.current), Re.current = setTimeout(() => {
          Ve.current = "";
        }, 500);
        const me = [...q, ...q], Oe = q.indexOf(ne) + 1, Fe = me.slice(Oe).find(
          (Je) => Vn(C[Je]).toLowerCase().startsWith(se)
        );
        Fe != null && Z(Fe);
        return;
      }
      _e >= 0 && Z(_e);
    },
    [C, K, X, ie]
  ), et = le(null), W = le(null);
  return /* @__PURE__ */ O(
    "div",
    {
      className: [Le.root, $].filter(Boolean).join(" "),
      "aria-label": S,
      children: [
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
              children: E.length === 0 ? /* @__PURE__ */ n("div", { className: Le.empty, children: "No items" }) : E.map((D, q) => {
                const ne = rt(D, m), _e = g.has(ne), se = q === T, me = !!D.disabled;
                return /* @__PURE__ */ n(
                  "div",
                  {
                    role: "option",
                    "aria-selected": _e,
                    "aria-disabled": me || void 0,
                    tabIndex: -1,
                    "data-active": se || void 0,
                    className: [
                      Le.option,
                      _e ? Le.selected : null,
                      se ? Le.active : null,
                      me ? Le.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => R(q),
                    children: Vn(D)
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
              className: Le.btn,
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
              className: Le.btn,
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
              className: Le.btn,
              "aria-label": "Move selected to source",
              "aria-disabled": !Xe || void 0,
              disabled: !Xe,
              onClick: de,
              children: "‹"
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Le.btn,
              "aria-label": "Move all to source",
              "aria-disabled": C.filter((D) => !D.disabled).length === 0 || void 0,
              disabled: C.filter((D) => !D.disabled).length === 0,
              onClick: xe,
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
              children: C.length === 0 ? /* @__PURE__ */ n("div", { className: Le.empty, children: "No items" }) : C.map((D, q) => {
                const ne = rt(D, m), _e = P.has(ne), se = q === X, me = !!D.disabled;
                return /* @__PURE__ */ n(
                  "div",
                  {
                    role: "option",
                    "aria-selected": _e,
                    "aria-disabled": me || void 0,
                    tabIndex: -1,
                    "data-active": se || void 0,
                    className: [
                      Le.option,
                      _e ? Le.selected : null,
                      se ? Le.active : null,
                      me ? Le.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => ie(q),
                    children: Vn(D)
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
                "aria-disabled": !Xe || void 0,
                disabled: !Xe,
                onClick: we,
                children: /* @__PURE__ */ n(Ne, { name: "chevron-up", size: "sm" })
              }
            ),
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: Le.btn,
                "aria-label": "Move down",
                "aria-disabled": !Xe || void 0,
                disabled: !Xe,
                onClick: Be,
                children: /* @__PURE__ */ n(Ne, { name: "chevron-down", size: "sm" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const Ex = "_root_drtn7_1", Ix = "_header_drtn7_8", jx = "_title_drtn7_15", Ax = "_navBtn_drtn7_20", Tx = "_resources_drtn7_39", Lx = "_resource_drtn7_39", Rx = "_grid_drtn7_50", Px = "_timeCol_drtn7_55", Bx = "_timeCell_drtn7_61", Fx = "_dayCol_drtn7_66", qx = "_dayHeader_drtn7_73", Hx = "_slot_drtn7_81", Kx = "_event_drtn7_91", ft = {
  root: Ex,
  header: Ix,
  title: jx,
  navBtn: Ax,
  resources: Tx,
  resource: Lx,
  grid: Rx,
  timeCol: Px,
  timeCell: Bx,
  dayCol: Fx,
  dayHeader: qx,
  slot: Hx,
  event: Kx
};
function Fs(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function fk({
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
  const [a, p] = V(
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
          /* @__PURE__ */ n("div", { className: ft.timeCol, role: "presentation", children: w.map((k) => /* @__PURE__ */ O("div", { className: ft.timeCell, children: [
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
                    "aria-label": `${_.title} ${Fs(_.start)} - ${Fs(_.end)}`,
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
const Ux = "_root_1n0oq_1", Wx = "_header_1n0oq_8", Xx = "_headerCell_1n0oq_15", Vx = "_timeline_1n0oq_21", Gx = "_row_1n0oq_26", Yx = "_taskName_1n0oq_32", Zx = "_timelineCell_1n0oq_37", Jx = "_bar_1n0oq_43", Qx = "_progress_1n0oq_56", eb = "_dep_1n0oq_61", Lt = {
  root: Ux,
  header: Wx,
  headerCell: Xx,
  timeline: Vx,
  row: Gx,
  taskName: Yx,
  timelineCell: Zx,
  bar: Jx,
  progress: Qx,
  dep: eb
};
function hk({
  tasks: e,
  view: t = "week",
  onTaskClick: s,
  ariaLabel: o = "Gantt",
  className: i
}) {
  const [c, h] = V(null);
  return /* @__PURE__ */ O(
    "div",
    {
      className: [Lt.root, i].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": o,
      "aria-rowcount": e.length,
      children: [
        /* @__PURE__ */ O("div", { className: Lt.header, role: "row", children: [
          /* @__PURE__ */ n("div", { className: Lt.headerCell, role: "columnheader", children: "Task" }),
          /* @__PURE__ */ O("div", { className: Lt.timeline, role: "columnheader", children: [
            "Timeline (",
            t,
            ")"
          ] })
        ] }),
        e.map((r) => /* @__PURE__ */ O(
          "div",
          {
            className: Lt.row,
            role: "row",
            "aria-selected": c === r.id,
            children: [
              /* @__PURE__ */ n("div", { className: Lt.taskName, role: "gridcell", children: r.name }),
              /* @__PURE__ */ O("div", { className: Lt.timelineCell, role: "gridcell", children: [
                /* @__PURE__ */ n(
                  "div",
                  {
                    className: Lt.bar,
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
                        className: Lt.progress,
                        style: { width: `${r.progress ?? 0}%` }
                      }
                    )
                  }
                ),
                r.dependencies?.map((l) => /* @__PURE__ */ n("svg", { className: Lt.dep, "aria-hidden": "true", children: /* @__PURE__ */ n(
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
const tb = "_root_1p46p_1", nb = "_fields_1p46p_6", sb = "_chip_1p46p_13", rb = "_table_1p46p_35", ob = "_totalRow_1p46p_55", lb = "_total_1p46p_55", xn = {
  root: tb,
  fields: nb,
  chip: sb,
  table: rb,
  totalRow: ob,
  total: lb
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
function pk({
  data: e,
  rowFields: t = [],
  columnFields: s = [],
  aggregateFields: o = [],
  onFieldsChange: i,
  ariaLabel: c = "Pivot table",
  className: h
}) {
  const r = t, l = s, a = o, p = (_, f, u) => {
    const y = _ === "row" ? r.filter((S) => S.property !== f) : r, $ = _ === "col" ? l.filter((S) => S.property !== f) : l, m = _ === "agg" ? a.filter((S) => !(S.property === f && S.aggregate === u)) : a;
    i?.({
      rowFields: y,
      columnFields: $,
      aggregateFields: m
    });
  }, d = (_, f) => f.map((u) => String(_[u.property])).join(""), v = [
    ...new Set(r.length ? e.map((_) => d(_, r)) : [""])
  ].sort(), b = [
    ...new Set(l.length ? e.map((_) => d(_, l)) : [""])
  ].sort(), w = (_, f, u) => {
    const y = e.filter(
      (m) => d(m, r) === _ && d(m, l) === f
    ), $ = y.map((m) => Number(m[u.property])).filter((m) => !Number.isNaN(m));
    return !$.length && u.aggregate !== "Count" ? 0 : Gn[u.aggregate](
      u.aggregate === "Count" ? y.map(() => 1) : $
    );
  }, k = (_, f, u, y) => /* @__PURE__ */ O(
    "button",
    {
      type: "button",
      className: xn.chip,
      "aria-label": `Remove ${_} field ${u}`,
      onClick: () => p(_, f, y),
      children: [
        u,
        y ? ` (${y})` : ""
      ]
    },
    `${_}-${u}-${y ?? ""}`
  );
  return /* @__PURE__ */ O("div", { className: [xn.root, h].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ O("div", { className: xn.fields, children: [
      r.map((_) => k("row", _.property, _.title ?? _.property)),
      l.map((_) => k("col", _.property, _.title ?? _.property)),
      a.map(
        (_) => k("agg", _.property, _.title ?? _.property, _.aggregate)
      )
    ] }),
    /* @__PURE__ */ O("table", { className: xn.table, role: "grid", "aria-label": c, children: [
      /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ O("tr", { children: [
        /* @__PURE__ */ n("th", { scope: "col", children: r.map((_) => _.title ?? _.property).join(" / ") || "Total" }),
        b.map((_) => /* @__PURE__ */ n("th", { scope: "col", children: _ || "—" }, _)),
        /* @__PURE__ */ n("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ O("tbody", { children: [
        v.map((_) => /* @__PURE__ */ O("tr", { children: [
          /* @__PURE__ */ n("th", { scope: "row", children: _ || "—" }),
          b.map((f) => /* @__PURE__ */ n(
            "td",
            {
              title: An(
                w(
                  _,
                  f,
                  a[0] ?? { property: "", aggregate: "Count" }
                )
              ),
              children: a.length ? An(w(_, f, a[0])) : ""
            },
            f
          )),
          /* @__PURE__ */ n("td", { className: xn.total, children: a.length ? An(
            Gn[a[0].aggregate](
              b.flatMap(
                (f) => e.filter(
                  (u) => d(u, r) === _ && d(u, l) === f
                ).map((u) => Number(u[a[0].property]))
              ).filter((f) => !Number.isNaN(f))
            )
          ) : "" })
        ] }, _)),
        /* @__PURE__ */ O("tr", { className: xn.totalRow, children: [
          /* @__PURE__ */ n("th", { scope: "row", children: "Total" }),
          b.map((_) => /* @__PURE__ */ n("td", { children: a.length ? An(
            Gn[a[0].aggregate](
              e.filter((f) => d(f, l) === _).map((f) => Number(f[a[0].property])).filter((f) => !Number.isNaN(f))
            )
          ) : "" }, _)),
          /* @__PURE__ */ n("td", { children: a.length ? An(
            Gn[a[0].aggregate](
              e.map((_) => Number(_[a[0].property])).filter((_) => !Number.isNaN(_))
            )
          ) : "" })
        ] })
      ] })
    ] })
  ] });
}
const ab = "_root_13gvl_1", ib = "_reverse_13gvl_10", cb = "_item_13gvl_14", db = "_marker_13gvl_35", ub = "_body_13gvl_46", _b = "_label_13gvl_50", fb = "_content_13gvl_56", cn = {
  root: ab,
  reverse: ib,
  item: cb,
  marker: db,
  body: ub,
  label: _b,
  content: fb
};
function mk({
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
const hb = "_root_4ls7q_1", pb = "_header_4ls7q_13", mb = "_headCell_4ls7q_22", gb = "_row_4ls7q_32", yb = "_cell_4ls7q_37", Tn = {
  root: hb,
  header: pb,
  headCell: mb,
  row: gb,
  cell: yb
};
function gk({
  count: e,
  rowHeight: t = 40,
  height: s = 320,
  loadData: o,
  columns: i = [],
  ariaLabel: c = "Virtual grid",
  className: h
}) {
  const [r, l] = V(
    /* @__PURE__ */ new Map()
  ), [a, p] = V(0), d = le(/* @__PURE__ */ new Set()), v = Math.ceil(s / t), b = Math.max(0, Math.floor(a / t) - 3), w = Math.min(e, b + v + 6), k = H(
    (f, u) => {
      let y = !1;
      for (let $ = f; $ < u; $++)
        !r.has($) && !d.current.has($) && (y = !0);
      if (y) {
        for (let $ = f; $ < u; $++) d.current.add($);
        o({ skip: f, top: u }).then(($) => {
          l((m) => {
            const S = new Map(m);
            return $.forEach((x, N) => S.set(f + N, x)), S;
          });
          for (let m = f; m < u; m++) d.current.delete(m);
        });
      }
    },
    [r, o]
  );
  ke(() => {
    k(b, w);
  }, [b, w]);
  const _ = [];
  for (let f = b; f < w; f++) {
    const u = r.get(f) ?? {};
    _.push(
      /* @__PURE__ */ n(
        "div",
        {
          className: Tn.row,
          role: "row",
          style: { height: t },
          children: i.map((y) => /* @__PURE__ */ n(
            "div",
            {
              role: "gridcell",
              className: Tn.cell,
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
  return /* @__PURE__ */ O(
    "div",
    {
      className: [Tn.root, h].filter(Boolean).join(" "),
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
        /* @__PURE__ */ n("div", { className: Tn.header, role: "row", children: i.map((f) => /* @__PURE__ */ n(
          "div",
          {
            role: "columnheader",
            className: Tn.headCell,
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
        let $ = r.slice(
          y,
          y + w - d + (u < b ? 0 : 1)
        );
        y += $.length;
        const m = t.reedSolomonComputeRemainder($, _);
        u < b && $.push(0), k.push($.concat(m));
      }
      let f = [];
      for (let u = 0; u < k[0].length; u++)
        k.forEach((y, $) => {
          (u != w - d || $ >= b) && f.push(y[u]);
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
const xb = "_root_1leml_1", bb = {
  root: xb
}, vb = {
  low: Mt.QrCode.Ecc.LOW,
  medium: Mt.QrCode.Ecc.MEDIUM,
  quartile: Mt.QrCode.Ecc.QUARTILE,
  high: Mt.QrCode.Ecc.HIGH
};
function yk({
  value: e,
  size: t = 128,
  render: s = "svg",
  errorCorrection: o = "medium",
  margin: i = 4,
  ariaLabel: c,
  className: h,
  onError: r
}) {
  const l = c ?? `QR code for ${e}`, a = le(null), p = Qs("(prefers-color-scheme: dark)"), [d, v] = V(null);
  ke(() => {
    const $ = document.documentElement;
    v($.dataset.theme ?? null);
    const m = new MutationObserver(() => {
      v($.dataset.theme ?? null);
    });
    return m.observe($, {
      attributes: !0,
      attributeFilter: ["data-theme"]
    }), () => m.disconnect();
  }, []);
  const b = $e(() => {
    try {
      return Mt.QrCode.encodeText(e, vb[o]);
    } catch {
      return null;
    }
  }, [e, o]), w = le(null);
  ke(() => {
    if (b !== null) {
      w.current = null;
      return;
    }
    const $ = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error($), (w.current?.value !== e || w.current?.onError !== r) && (w.current = { value: e, onError: r }, r?.($));
  }, [b, e, r]);
  const k = Math.max(0, Math.floor(i)), _ = [bb.root, h].filter(Boolean).join(" ");
  if (ke(() => {
    if (s !== "canvas" || b === null) return;
    const $ = a.current, m = $?.getContext("2d");
    if (!$ || !m) return;
    const S = getComputedStyle($), x = S.getPropertyValue("--dx-text-color").trim() || "#000", N = S.getPropertyValue("--dx-surface-color").trim() || "#fff";
    kb(m, b, t, k, x, N);
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
  for (let $ = 0; $ < b.size; $++)
    for (let m = 0; m < b.size; m++)
      b.getModule(m, $) && y.push(
        /* @__PURE__ */ n(
          "rect",
          {
            x: (m + k) * u,
            y: ($ + k) * u,
            width: u + 0.5,
            height: u + 0.5
          },
          `${m}-${$}`
        )
      );
  return /* @__PURE__ */ O(
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
function kb(e, t, s, o, i, c) {
  const h = s / (t.size + o * 2);
  e.fillStyle = c, e.fillRect(0, 0, s, s), e.fillStyle = i;
  for (let r = 0; r < t.size; r++)
    for (let l = 0; l < t.size; l++)
      t.getModule(l, r) && e.fillRect((l + o) * h, (r + o) * h, h + 0.5, h + 0.5);
}
const wb = "_root_1v9la_1", $b = "_value_1v9la_9", qs = {
  root: wb,
  value: $b
}, Hs = [
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
], Ks = 104, Nb = 106;
function Ob(e) {
  const t = [Ks];
  for (let o = 0; o < e.length; o++) {
    const i = e.charCodeAt(o);
    t.push(i >= 32 && i <= 126 ? i - 32 : 0);
  }
  let s = Ks;
  for (let o = 1; o < t.length; o++) s += o * t[o];
  return t.push(s % 103, Nb), t;
}
function xk({
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
    for (const p of Ob(e)) {
      const d = Hs[p] ?? Hs[0];
      for (let v = 0; v < d.length; v++) {
        const b = Number(d[v]);
        v % 2 === 0 && l.push({ x: a, w: b }), a += b;
      }
    }
    return { modules: l, total: a };
  }, [e]);
  return /* @__PURE__ */ O("span", { className: [qs.root, c].filter(Boolean).join(" "), children: [
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
    o && /* @__PURE__ */ n("span", { className: qs.value, children: e })
  ] });
}
const Sb = "_root_gfdmk_1", zb = "_svg_gfdmk_10", Db = "_gridline_gfdmk_15", Mb = "_tickLabel_gfdmk_21", Cb = "_axisTitle_gfdmk_27", Eb = "_dataLabel_gfdmk_34", Ib = "_legend_gfdmk_40", jb = "_legendItem_gfdmk_48", Ab = "_swatch_gfdmk_56", Tb = "_tooltip_gfdmk_63", Lb = "_visuallyHidden_gfdmk_77", ot = {
  root: Sb,
  svg: zb,
  gridline: Db,
  tickLabel: Mb,
  axisTitle: Cb,
  dataLabel: Eb,
  legend: Ib,
  legendItem: jb,
  swatch: Ab,
  tooltip: Tb,
  visuallyHidden: Lb
}, Us = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function Rb(e, t, s) {
  const o = t - e || 1, i = s ?? Math.pow(10, Math.floor(Math.log10(o / 4))), c = Math.floor(e / i) * i, h = Math.ceil(t / i) * i, r = [];
  for (let l = c; l <= h + 1e-9; l += i)
    r.push(Number(l.toFixed(6)));
  return { min: c, max: h, step: i, ticks: r };
}
function bk({
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
  const [p, d] = V(
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
    () => Rb(w, k, o?.step),
    [w, k, o?.step]
  ), f = { t: 16, r: 16, b: 40, l: 56 }, u = t - f.l - f.r, y = s - f.t - f.b, $ = (x) => f.l + x / Math.max(1, v.length - 1) * u, m = (x) => f.t + (1 - (x - _.min) / (_.max - _.min || 1)) * y, S = (x, N) => N.color ?? Us[x % Us.length];
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
              o?.gridlines !== !1 && _.ticks.map((x) => /* @__PURE__ */ n(
                "line",
                {
                  x1: f.l,
                  x2: f.l + u,
                  y1: m(x),
                  y2: m(x),
                  className: ot.gridline
                },
                x
              )),
              i?.gridlines && v.map((x, N) => /* @__PURE__ */ n(
                "line",
                {
                  x1: $(N),
                  x2: $(N),
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
                  y: m(x) + 4,
                  textAnchor: "end",
                  className: ot.tickLabel,
                  children: x
                },
                x
              )),
              v.map((x, N) => /* @__PURE__ */ n(
                "text",
                {
                  x: $(N),
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
                      const z = String(C[I.categoryProperty] ?? ""), g = Number(C[I.valueProperty]);
                      if (Number.isNaN(g)) continue;
                      x.has(I.stack) || x.set(I.stack, /* @__PURE__ */ new Map());
                      const M = x.get(I.stack);
                      M.set(z, (M.get(z) ?? 0) + g);
                    }
                const N = e.filter(
                  (I) => I.type === "pie" || I.type === "donut"
                ), E = /* @__PURE__ */ new Map();
                for (const I of N) {
                  const C = I.data.reduce(
                    (z, g) => z + (Number(g[I.valueProperty]) || 0),
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
                  })), g = new Map(v.map((j, T) => [j, T])), M = S(C, I);
                  if (I.type === "pie" || I.type === "donut") {
                    const j = f.l + u / 2, T = f.t + y / 2, F = Math.min(u, y) / 3, X = I.type === "donut" ? I.innerRadius ?? F * 0.5 : 0, Z = E.get(I) ?? z.reduce((K, te) => K + te.val, 0);
                    let Q = -90;
                    return /* @__PURE__ */ O(
                      "g",
                      {
                        role: "list",
                        "aria-label": I.title ?? `Series ${C + 1}`,
                        children: [
                          /* @__PURE__ */ n("title", { children: I.title ?? `Series ${C + 1}` }),
                          z.map((K, te) => {
                            const oe = Z ? K.val / Z * 360 : 0, ee = Q, R = Q + oe;
                            Q = R;
                            const ie = oe > 180 ? 1 : 0, Y = (Qe) => Qe * Math.PI / 180, de = j + F * Math.cos(Y(ee)), ae = T + F * Math.sin(Y(ee)), xe = j + F * Math.cos(Y(R)), we = T + F * Math.sin(Y(R)), Be = j + X * Math.cos(Y(R)), ve = T + X * Math.sin(Y(R)), Xe = j + X * Math.cos(Y(ee)), ye = T + X * Math.sin(Y(ee)), Ze = X ? `M ${de} ${ae} A ${F} ${F} 0 ${ie} 1 ${xe} ${we} L ${Be} ${ve} A ${X} ${X} 0 ${ie} 0 ${Xe} ${ye} Z` : `M ${j} ${T} L ${de} ${ae} A ${F} ${F} 0 ${ie} 1 ${xe} ${we} Z`, Ve = (ee + R) / 2, Re = j + (F + 12) * Math.cos(Y(Ve)), tt = T + (F + 12) * Math.sin(Y(Ve));
                            return /* @__PURE__ */ O("g", { role: "listitem", children: [
                              /* @__PURE__ */ n(
                                "path",
                                {
                                  d: Ze,
                                  fill: M,
                                  stroke: "var(--dx-surface-color)",
                                  strokeWidth: 1,
                                  onMouseEnter: () => h && d({
                                    x: Re,
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
                                  x: Re,
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
                            const F = g.get(j.cat) ?? 0, X = Number(z[T].cat), Z = Number.isNaN(X) ? $(F) : f.l + (X - _.min) / (_.max - _.min || 1) * u, Q = m(j.val), K = I.type === "bubble" && j.size !== void 0 ? Math.max(4, Math.min(12, j.size / 10)) : 4;
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
                    const j = (X) => {
                      if (!I.stack) return _.min;
                      let Z = 0;
                      for (let Q = 0; Q < C; Q++) {
                        const K = e[Q];
                        if (K?.stack !== I.stack) continue;
                        const te = K.data.find(
                          (oe) => String(oe[K.categoryProperty] ?? "") === X
                        );
                        te && (Z += Number(te[K.valueProperty]) || 0);
                      }
                      return Z;
                    }, T = z.map((X) => {
                      const Z = g.get(X.cat) ?? 0, Q = j(X.cat);
                      return `${Z === 0 ? "M" : "L"} ${$(Z)} ${m(Q + X.val)}`;
                    }).join(" "), F = z.map((X) => {
                      const Z = g.get(X.cat) ?? 0, Q = j(X.cat);
                      return `${Z === 0 ? "M" : "L"} ${$(Z)} ${m(Q)}`;
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
                              d: `${T} L ${$(z.length - 1)} ${m(j(z[z.length - 1].cat))} L ${$(0)} ${m(j(z[0].cat))} Z`,
                              fill: M,
                              fillOpacity: 0.25,
                              stroke: "none"
                            }
                          ),
                          /* @__PURE__ */ n("path", { d: T, fill: "none", stroke: M, strokeWidth: 2 }),
                          I.stack && /* @__PURE__ */ n("path", { d: F, fill: "none", stroke: "transparent" }),
                          z.map((X, Z) => {
                            const Q = g.get(X.cat) ?? 0, K = j(X.cat), te = $(Q), oe = m(K + X.val);
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
                                    text: `${I.title ?? X.cat}: ${X.val}`
                                  }),
                                  onMouseLeave: () => d(null),
                                  onFocus: () => h && d({
                                    x: te,
                                    y: oe,
                                    text: `${I.title ?? X.cat}: ${X.val}`
                                  }),
                                  onBlur: () => d(null),
                                  onClick: () => r?.({
                                    seriesTitle: I.title ?? "",
                                    category: X.cat,
                                    value: X.val,
                                    item: X.item
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
                                  children: X.val
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
                          const F = g.get(j.cat) ?? 0;
                          let X = 0;
                          if (I.stack)
                            for (let ae = 0; ae < C; ae++) {
                              const xe = e[ae];
                              if (xe?.stack !== I.stack) continue;
                              const we = xe.data.find(
                                (Be) => String(Be[xe.categoryProperty] ?? "") === j.cat
                              );
                              we && (X += Number(we[xe.valueProperty]) || 0);
                            }
                          const Z = X + j.val, Q = e.filter(
                            (ae) => !ae.stack || ae.stack === I.stack
                          ).length, K = u / v.length, te = P ? 18 : Math.max(
                            12,
                            K / (I.stack ? 1 : e.length) - 4
                          ), oe = P ? f.l + X / (_.max - _.min || 1) * u : $(F) - te / 2 + (I.stack ? 0 : C % Q * te), ee = P ? f.t + F * y / v.length + 4 : m(Z), R = P ? j.val / (_.max - _.min || 1) * u : te - 4, ie = P ? 16 : m(X) - m(Z), Y = P ? f.l + X / (_.max - _.min || 1) * u : oe, de = P ? f.t + F * y / v.length + 4 : ee;
                          return /* @__PURE__ */ O("g", { role: "listitem", children: [
                            /* @__PURE__ */ n(
                              "rect",
                              {
                                x: Y,
                                y: de,
                                width: P ? R : te - 4,
                                height: ie,
                                fill: M,
                                rx: 2,
                                onMouseEnter: () => h && d({
                                  x: Y + (P ? R : te) / 2,
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
                                x: Y + (P ? R : te) / 2,
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
        c && /* @__PURE__ */ n("div", { className: ot.legend, children: e.map((x, N) => /* @__PURE__ */ O("span", { className: ot.legendItem, children: [
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
                (x) => x.data.map((N, E) => /* @__PURE__ */ O("tr", { children: [
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
  fc as ALERT_ICON,
  Ev as Accordion,
  yv as Alert,
  wv as AutoGrid,
  Tv as Autocomplete,
  Mv as Avatar,
  Hb as Badge,
  xk as Barcode,
  Nv as Body,
  ok as Breadcrumb,
  Fb as Button,
  qb as Card,
  dk as Carousel,
  bk as Chart,
  fv as Checkbox,
  Rv as Checkboxlist,
  Wv as Colorpicker,
  vv as Column,
  Nn as DEFAULT_OPERATOR_BY_TYPE,
  p0 as DEFAULT_PALETTE,
  iv as DataFilter,
  cv as DataGrid,
  dv as DataList,
  Xv as Datepicker,
  pv as Dialog,
  ek as DropZone,
  Av as Dropdown,
  Xb as EmptyState,
  Gs as FILTER_OPERATORS,
  rk as FabMenu,
  Vb as Field,
  Yb as Fieldset,
  Dh as Footer,
  Zb as Form,
  Gb as FormField,
  hk as Gantt,
  Eh as Header,
  Ne as Icon,
  _v as Input,
  uv as Label,
  $v as Layout,
  lk as Link,
  Lv as Listbox,
  Kv as Mask,
  tk as Menu,
  Uv as Numeric,
  Ul as Pager,
  nk as PanelMenu,
  Hv as Password,
  _k as PickList,
  pk as Pivot,
  sk as ProfileMenu,
  Sv as Progress,
  yk as QRCode,
  Pv as Radiobuttonlist,
  Vv as Rating,
  bv as Row,
  fk as Scheduler,
  Zv as SecurityCode,
  bn as Select,
  Bv as Selectbar,
  Hh as Sidebar,
  Ov as SidebarToggle,
  Jv as SignaturePad,
  xv as Skeleton,
  Gv as Slider,
  qv as Splitbutton,
  ik as Splitter,
  kv as Stack,
  Ub as Stat,
  ak as Steps,
  oi as Switch,
  Wb as Table,
  Cv as Tabs,
  jv as Text,
  Iv as Textarea,
  ti as Textbox,
  Dv as ThemeSwitcher,
  mk as Timeline,
  Yv as Timespanpicker,
  gv as ToastProvider,
  ck as Toc,
  Fv as Togglebutton,
  hv as Tooltip,
  uk as Tree,
  Qv as Upload,
  gk as VirtualGrid,
  Zs as applyFilters,
  Jl as applyGridState,
  Sn as columnValue,
  rv as compare,
  lv as custom,
  Gl as cycleSort,
  Ql as defaultOperatorForType,
  Qb as email,
  Es as formatMasked,
  vs as formatValue,
  Zn as getByPath,
  Kb as iconNames,
  Ys as matchesFilters,
  nv as maxLength,
  tv as minLength,
  Zl as paginate,
  ev as pattern,
  sv as range,
  Jb as required,
  ov as requiredTrue,
  _s as resolveVariant,
  Jo as runValidators,
  zv as shadeClass,
  pl as sortItems,
  Yl as sortedItems,
  dl as toFilterString,
  hl as toODataFilterString,
  Zo as useFormContext,
  av as useFormField,
  Qs as useMediaQuery,
  mv as useToast
};
