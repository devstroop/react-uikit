import { jsx as s, jsxs as M, Fragment as ke } from "react/jsx-runtime";
import { forwardRef as Fe, useId as Re, isValidElement as gt, cloneElement as Ls, useState as W, useRef as Y, useCallback as R, useMemo as xe, useContext as _n, createContext as Bn, useEffect as ge, Fragment as Ps, useLayoutEffect as Ds, Children as rs, useImperativeHandle as Rs } from "react";
function Rn(e) {
  return e == null || e === "default" || e === "medium" ? null : `shade-${e}`;
}
const Wr = "_button_1anap_1", Ur = "_filled_1anap_36", Vr = "_flat_1anap_55", Xr = "_outlined_1anap_58", Gr = "_text_1anap_63", Yr = "_loading_1anap_504", Zr = "_spinner_1anap_507", Jr = "_xs_1anap_523", Qr = "_sm_1anap_529", eo = "_md_1anap_535", to = "_lg_1anap_541", no = "_xl_1anap_547", so = "_iconOnly_1anap_553", ro = "_fullWidth_1anap_583", Zt = {
  button: Wr,
  filled: Ur,
  flat: Vr,
  outlined: Xr,
  text: Gr,
  "style-primary": "_style-primary_1anap_82",
  "style-secondary": "_style-secondary_1anap_101",
  "style-base": "_style-base_1anap_119",
  "style-light": "_style-light_1anap_139",
  "style-dark": "_style-dark_1anap_157",
  "style-danger": "_style-danger_1anap_176",
  "style-success": "_style-success_1anap_195",
  "style-warning": "_style-warning_1anap_214",
  "style-info": "_style-info_1anap_233",
  "shade-lighter": "_shade-lighter_1anap_416",
  "shade-light": "_shade-light_1anap_416",
  "shade-dark": "_shade-dark_1anap_426",
  "shade-darker": "_shade-darker_1anap_430",
  loading: Yr,
  spinner: Zr,
  "dx-spin": "_dx-spin_1anap_1",
  xs: Jr,
  sm: Qr,
  md: eo,
  lg: to,
  xl: no,
  iconOnly: so,
  fullWidth: ro
};
function oo(e, t) {
  const n = t, r = e ?? "filled";
  return { variant: r === "filled" || r === "flat" || r === "outlined" || r === "text" ? r : "filled", style: n ?? "primary" };
}
const ws = Fe(
  function(t, n) {
    const {
      variant: r = "filled",
      severity: l,
      shade: i = "default",
      size: d = "md",
      fullWidth: o = !1,
      iconOnly: a = !1,
      loading: c = !1,
      visible: u = !0,
      className: f,
      disabled: k,
      children: v,
      ...b
    } = t;
    if (u === !1) return null;
    const p = oo(r, l), _ = p.style === "light" || p.style === "dark" ? null : Rn(i), h = [
      Zt.button,
      Zt[p.variant],
      Zt[`style-${p.style}`],
      _ ? Zt[_] : null,
      Zt[d],
      o ? Zt.fullWidth : null,
      a ? Zt.iconOnly : null,
      c ? Zt.loading : null,
      // Press feedback on every button (Radzen material parity).
      "dx-ripple",
      f
    ].filter(Boolean).join(" "), g = /* @__PURE__ */ M(ke, { children: [
      c ? /* @__PURE__ */ s("span", { "aria-hidden": "true", className: Zt.spinner }) : null,
      v
    ] }), w = t.href;
    if (w != null) {
      const { onClick: $, ...O } = b, E = k || c;
      return /* @__PURE__ */ s(
        "a",
        {
          ref: n,
          href: w,
          className: h,
          "aria-disabled": E || void 0,
          "aria-busy": c || void 0,
          onClick: (D) => {
            if (E) {
              D.preventDefault();
              return;
            }
            $?.(D);
          },
          ...O,
          children: g
        }
      );
    }
    const { type: x = "button", ...S } = b;
    return /* @__PURE__ */ s(
      "button",
      {
        ref: n,
        type: x,
        className: h,
        disabled: k || c,
        "aria-busy": c || void 0,
        ...S,
        children: g
      }
    );
  }
), lo = "_card_16nyh_1", ao = "_elevated_16nyh_8", io = "_filled_16nyh_13", co = "_outlined_16nyh_18", uo = "_interactive_16nyh_22", fo = "_text_16nyh_30", _o = "_header_16nyh_46", ho = "_body_16nyh_53", po = "_footer_16nyh_63", Fn = {
  card: lo,
  elevated: ao,
  filled: io,
  outlined: co,
  interactive: uo,
  text: fo,
  header: _o,
  body: ho,
  footer: po
}, ik = Fe(function({
  variant: t = "elevated",
  header: n,
  footer: r,
  className: l,
  visible: i = !0,
  children: d,
  onKeyDown: o,
  ...a
}, c) {
  if (i === !1) return null;
  const u = t === "interactive";
  return (
    // Interactivity is conditional on variant="interactive" (role + tabIndex
    // travel together); static analysis cannot see that.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ M(
      "div",
      {
        ref: c,
        role: u ? "button" : void 0,
        tabIndex: u ? 0 : void 0,
        onKeyDown: (f) => {
          o?.(f), !(!u || f.key !== "Enter" && f.key !== " ") && (f.preventDefault(), f.currentTarget.click());
        },
        className: [Fn.card, Fn[t], l].filter(Boolean).join(" "),
        ...a,
        children: [
          n != null && /* @__PURE__ */ s("div", { className: Fn.header, children: n }),
          /* @__PURE__ */ s("div", { className: Fn.body, children: d }),
          r != null && /* @__PURE__ */ s("div", { className: Fn.footer, children: r })
        ]
      }
    )
  );
});
function Bs(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const mo = "_badge_154mm_1", go = "_xs_154mm_21", xo = "_sm_154mm_26", yo = "_md_154mm_31", bo = "_lg_154mm_36", vo = "_xl_154mm_41", ko = "_neutral_154mm_47", wo = "_primary_154mm_52", $o = "_secondary_154mm_61", No = "_light_154mm_66", Oo = "_base_154mm_71", So = "_dark_154mm_76", Mo = "_info_154mm_81", Co = "_success_154mm_86", Do = "_warning_154mm_95", zo = "_danger_154mm_104", Eo = "_filled_154mm_111", Io = "_outlined_154mm_161", Ao = "_text_154mm_213", Hn = {
  badge: mo,
  xs: go,
  sm: xo,
  md: yo,
  lg: bo,
  xl: vo,
  neutral: ko,
  primary: wo,
  secondary: $o,
  light: No,
  base: Oo,
  dark: So,
  info: Mo,
  success: Co,
  warning: Do,
  danger: zo,
  filled: Eo,
  outlined: Io,
  text: Ao,
  "shade-lighter": "_shade-lighter_154mm_484",
  "shade-light": "_shade-light_154mm_484",
  "shade-dark": "_shade-dark_154mm_492",
  "shade-darker": "_shade-darker_154mm_495"
}, ck = Fe(function({
  severity: t = "primary",
  variant: n = "filled",
  shade: r,
  size: l = "md",
  className: i,
  visible: d = !0,
  children: o,
  ...a
}, c) {
  if (d === !1) return null;
  const u = t, f = Bs(n, "filled"), k = Rn(r);
  return /* @__PURE__ */ s(
    "span",
    {
      ref: c,
      className: [
        Hn.badge,
        Hn[l],
        Hn[u],
        Hn[f],
        k ? Hn[k] : null,
        i
      ].filter(Boolean).join(" "),
      ...a,
      children: o
    }
  );
}), To = "_xs_2a6lm_2", jo = "_sm_2a6lm_7", Lo = "_md_2a6lm_1", Po = "_lg_2a6lm_17", Ro = "_xl_2a6lm_22", Bo = {
  xs: To,
  sm: jo,
  md: Lo,
  lg: Po,
  xl: Ro
}, dk = [
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
], qo = {
  check: /* @__PURE__ */ s("path", { d: "M20 6L9 17l-5-5" }),
  close: /* @__PURE__ */ s("path", { d: "M18 6L6 18M6 6l12 12" }),
  "chevron-down": /* @__PURE__ */ s("path", { d: "M6 9l6 6 6-6" }),
  "chevron-left": /* @__PURE__ */ s("path", { d: "M15 18l-6-6 6-6" }),
  "chevron-right": /* @__PURE__ */ s("path", { d: "M9 18l6-6-6-6" }),
  "chevron-up": /* @__PURE__ */ s("path", { d: "M18 15l-6-6-6 6" }),
  search: /* @__PURE__ */ M(ke, { children: [
    /* @__PURE__ */ s("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ s("path", { d: "M21 21l-4.3-4.3" })
  ] }),
  plus: /* @__PURE__ */ s("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ s("path", { d: "M5 12h14" }),
  alert: /* @__PURE__ */ M(ke, { children: [
    /* @__PURE__ */ s("path", { d: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" }),
    /* @__PURE__ */ s("path", { d: "M12 9v4M12 17h.01" })
  ] }),
  info: /* @__PURE__ */ M(ke, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ s("path", { d: "M12 16v-4M12 8h.01" })
  ] }),
  "arrow-right": /* @__PURE__ */ s("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  "arrow-left": /* @__PURE__ */ s("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  "external-link": /* @__PURE__ */ M(ke, { children: [
    /* @__PURE__ */ s("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
    /* @__PURE__ */ s("path", { d: "M15 3h6v6M10 14L21 3" })
  ] }),
  copy: /* @__PURE__ */ M(ke, { children: [
    /* @__PURE__ */ s("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ s("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] }),
  trash: /* @__PURE__ */ s(ke, { children: /* @__PURE__ */ s("path", { d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" }) }),
  edit: /* @__PURE__ */ M(ke, { children: [
    /* @__PURE__ */ s("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ s("path", { d: "M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  settings: /* @__PURE__ */ M(ke, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ s("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] }),
  user: /* @__PURE__ */ M(ke, { children: [
    /* @__PURE__ */ s("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ s("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ M(ke, { children: [
    /* @__PURE__ */ s("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ s("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ s("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  download: /* @__PURE__ */ s("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  upload: /* @__PURE__ */ s("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  menu: /* @__PURE__ */ s("path", { d: "M3 12h18M3 6h18M3 18h18" }),
  "more-horizontal": /* @__PURE__ */ M(ke, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ s("circle", { cx: "19", cy: "12", r: "1" }),
    /* @__PURE__ */ s("circle", { cx: "5", cy: "12", r: "1" })
  ] }),
  mail: /* @__PURE__ */ M(ke, { children: [
    /* @__PURE__ */ s("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ s("path", { d: "M22 6l-10 7L2 6" })
  ] }),
  lock: /* @__PURE__ */ M(ke, { children: [
    /* @__PURE__ */ s("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ s("path", { d: "M7 11V7a5 5 0 0110 0v4" })
  ] }),
  eye: /* @__PURE__ */ M(ke, { children: [
    /* @__PURE__ */ s("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  "eye-off": /* @__PURE__ */ M(ke, { children: [
    /* @__PURE__ */ s("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ s("path", { d: "M1 1l22 22" })
  ] }),
  refresh: /* @__PURE__ */ M(ke, { children: [
    /* @__PURE__ */ s("path", { d: "M23 4v6h-6M1 20v-6h6" }),
    /* @__PURE__ */ s("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
  ] }),
  calendar: /* @__PURE__ */ M(ke, { children: [
    /* @__PURE__ */ s("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ s("path", { d: "M16 2v4M8 2v4M3 10h18" })
  ] }),
  clock: /* @__PURE__ */ M(ke, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ s("path", { d: "M12 6v6l4 2" })
  ] }),
  "check-circle": /* @__PURE__ */ M(ke, { children: [
    /* @__PURE__ */ s("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ s("path", { d: "M22 4L12 14.01l-3-3" })
  ] }),
  "x-circle": /* @__PURE__ */ M(ke, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ s("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] }),
  shield: /* @__PURE__ */ s(ke, { children: /* @__PURE__ */ s("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  globe: /* @__PURE__ */ M(ke, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ s("path", { d: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
  ] }),
  file: /* @__PURE__ */ M(ke, { children: [
    /* @__PURE__ */ s("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
    /* @__PURE__ */ s("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
  ] }),
  folder: /* @__PURE__ */ s("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" }),
  home: /* @__PURE__ */ M(ke, { children: [
    /* @__PURE__ */ s("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
    /* @__PURE__ */ s("path", { d: "M9 22V12h6v10" })
  ] }),
  key: /* @__PURE__ */ s(ke, { children: /* @__PURE__ */ s("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) }),
  link: /* @__PURE__ */ M(ke, { children: [
    /* @__PURE__ */ s("path", { d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" }),
    /* @__PURE__ */ s("path", { d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" })
  ] }),
  star: /* @__PURE__ */ s(
    "path",
    {
      fill: "currentColor",
      stroke: "none",
      d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
    }
  ),
  "star-outline": /* @__PURE__ */ s("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" }),
  ban: /* @__PURE__ */ M(ke, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ s("path", { d: "M4.93 4.93l14.14 14.14" })
  ] })
}, $e = Fe(function({ name: t, size: n = "md", strokeWidth: r = 2, className: l, ...i }, d) {
  const o = typeof n == "string";
  return /* @__PURE__ */ s(
    "svg",
    {
      ref: d,
      className: [o ? Bo[n] : null, l].filter(Boolean).join(" "),
      width: o ? void 0 : n,
      height: o ? void 0 : n,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: r,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      ...i,
      children: qo[t]
    }
  );
}), Fo = "_stat_sjin9_1", Ho = "_label_sjin9_8", Ko = "_row_sjin9_16", Wo = "_value_sjin9_22", Uo = "_delta_sjin9_28", Vo = "_success_sjin9_33", Xo = "_danger_sjin9_37", Go = "_neutral_sjin9_41", Yo = "_hint_sjin9_45", xn = {
  stat: Fo,
  label: Ho,
  row: Ko,
  value: Wo,
  delta: Uo,
  success: Vo,
  danger: Xo,
  neutral: Go,
  hint: Yo
}, uk = Fe(function({ label: t, value: n, delta: r, deltaTone: l = "neutral", hint: i, className: d, ...o }, a) {
  return /* @__PURE__ */ M(
    "div",
    {
      ref: a,
      className: [xn.stat, d].filter(Boolean).join(" "),
      ...o,
      children: [
        /* @__PURE__ */ s("div", { className: xn.label, children: t }),
        /* @__PURE__ */ M("div", { className: xn.row, children: [
          /* @__PURE__ */ s("div", { className: xn.value, children: n }),
          r != null && /* @__PURE__ */ s("div", { className: [xn.delta, xn[l]].join(" "), children: r })
        ] }),
        i != null && /* @__PURE__ */ s("div", { className: xn.hint, children: i })
      ]
    }
  );
}), Zo = "_wrap_1nflq_1", Jo = "_table_1nflq_8", Qo = "_caption_1nflq_14", el = "_none_1nflq_51", tl = "_horizontal_1nflq_57", nl = "_vertical_1nflq_67", sl = "_alternating_1nflq_85", rl = "_start_1nflq_89", ol = "_center_1nflq_93", ll = "_end_1nflq_97", al = "_empty_1nflq_101", ln = {
  wrap: Zo,
  table: Jo,
  caption: Qo,
  none: el,
  horizontal: tl,
  vertical: nl,
  alternating: sl,
  start: rl,
  center: ol,
  end: ll,
  empty: al
};
function fk({
  columns: e,
  rows: t,
  rowKey: n,
  empty: r,
  caption: l,
  gridLines: i = "default",
  allowAlternatingRows: d = !0,
  className: o,
  visible: a = !0
}) {
  if (a === !1) return null;
  const c = i === "default" || i === "both" ? "" : ln[i];
  return /* @__PURE__ */ M("div", { className: [ln.wrap, o].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ M(
      "table",
      {
        className: [
          ln.table,
          c,
          d ? ln.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          l != null && /* @__PURE__ */ s("caption", { className: ln.caption, children: l }),
          /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ s("tr", { children: e.map((u) => /* @__PURE__ */ s(
            "th",
            {
              className: u.align != null ? ln[u.align] : void 0,
              scope: "col",
              children: u.header
            },
            u.key
          )) }) }),
          /* @__PURE__ */ s("tbody", { children: t.map((u) => /* @__PURE__ */ s("tr", { children: e.map((f) => /* @__PURE__ */ s(
            "td",
            {
              className: f.align != null ? ln[f.align] : void 0,
              children: f.render != null ? f.render(u) : u[f.key]
            },
            f.key
          )) }, n(u))) })
        ]
      }
    ),
    t.length === 0 && r != null && /* @__PURE__ */ s("div", { className: ln.empty, children: r })
  ] });
}
const il = "_emptyState_1swxw_1", cl = "_icon_1swxw_13", dl = "_title_1swxw_18", ul = "_description_1swxw_24", fl = "_action_1swxw_30", Kn = {
  emptyState: il,
  icon: cl,
  title: dl,
  description: ul,
  action: fl
};
function _k({
  icon: e,
  title: t,
  description: n,
  action: r,
  className: l,
  visible: i = !0
}) {
  return i === !1 ? null : /* @__PURE__ */ M("div", { className: [Kn.emptyState, l].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ s("div", { className: Kn.icon, children: e }),
    /* @__PURE__ */ s("div", { className: Kn.title, children: t }),
    n != null && /* @__PURE__ */ s("div", { className: Kn.description, children: n }),
    r != null && /* @__PURE__ */ s("div", { className: Kn.action, children: r })
  ] });
}
const _l = "_field_149oz_1", hl = "_label_149oz_8", pl = "_required_149oz_14", ml = "_hint_149oz_19", gl = "_error_149oz_24", Wn = {
  field: _l,
  label: hl,
  required: pl,
  hint: ml,
  error: gl
};
function hk({
  label: e,
  htmlFor: t,
  required: n,
  hint: r,
  supporting: l,
  error: i,
  children: d,
  className: o,
  visible: a = !0
}) {
  const c = r ?? l, u = Re(), f = Re(), k = Re();
  if (a === !1) return null;
  const v = i != null ? f : c != null ? k : null, b = typeof d == "function" ? d({ inputId: u, hintId: k, errorId: f }) : d, p = gt(b) && typeof b.props.id == "string" ? b.props.id : void 0, y = p ?? t ?? u, _ = gt(b) && (v != null || p == null && typeof b.type == "string"), h = p != null || t != null || _, g = _ && gt(b) ? Ls(b, {
    id: y,
    "aria-describedby": v != null ? [
      b.props["aria-describedby"],
      v
    ].filter((w) => typeof w == "string").join(" ") || void 0 : b.props["aria-describedby"],
    "aria-invalid": i != null ? !0 : b.props["aria-invalid"]
  }) : b;
  return /* @__PURE__ */ M("div", { className: [Wn.field, o].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ M(
      "label",
      {
        className: Wn.label,
        htmlFor: h ? y : void 0,
        children: [
          e,
          n === !0 && /* @__PURE__ */ s("span", { className: Wn.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    g,
    i != null ? /* @__PURE__ */ s("div", { id: f, className: Wn.error, "aria-live": "polite", children: i }) : c != null ? /* @__PURE__ */ s("div", { id: k, className: Wn.hint, children: c }) : null
  ] });
}
const xl = "_formfield_1kmwl_1", yl = "_content_1kmwl_8", bl = "_floating_1kmwl_43", vl = "_label_1kmwl_111", kl = "_start_1kmwl_132", wl = "_required_1kmwl_169", $l = "_end_1kmwl_175", Nl = "_filled_1kmwl_192", Ol = "_flat_1kmwl_199", Sl = "_helper_1kmwl_206", Ml = "_invalid_1kmwl_211", Kt = {
  formfield: xl,
  content: yl,
  floating: bl,
  label: vl,
  start: kl,
  required: wl,
  end: $l,
  filled: Nl,
  flat: Ol,
  helper: Sl,
  invalid: Ml
};
function pk({
  text: e,
  start: t,
  end: n,
  helper: r,
  component: l,
  allowFloatingLabel: i = !0,
  variant: d = "outlined",
  invalid: o = !1,
  required: a = !1,
  children: c,
  className: u,
  visible: f = !0
}) {
  const k = Re(), v = Re();
  if (f === !1) return null;
  const b = l ?? k, p = typeof c == "function" ? c({
    inputId: b
  }) : c, y = gt(p) ? p.type : null, _ = typeof y == "string", h = gt(p) && typeof y != "symbol", g = gt(p) ? p.props : null, w = typeof g?.id == "string" ? g.id : void 0, x = _ && gt(p) ? p.type.toLowerCase() : null, S = x != null && (x === "input" ? typeof g?.type != "string" || g.type.toLowerCase() !== "hidden" : x === "button" || x === "meter" || x === "output" || x === "progress" || x === "select" || x === "textarea"), $ = h && (r != null || o || w == null && S), O = w != null || l != null || $, E = x === "input" && typeof g?.type == "string" ? g.type.toLowerCase() : null, D = x === "textarea" || x === "input" && (E == null || [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number"
  ].includes(E)), z = $ && gt(p) ? Ls(
    p,
    {
      id: w ?? b,
      ...i && D && g?.placeholder == null ? { placeholder: " " } : {},
      ...r != null ? {
        "aria-describedby": [
          g?.["aria-describedby"],
          v
        ].filter((m) => typeof m == "string").join(" ")
      } : {},
      ...o ? {
        "aria-invalid": !0
      } : {}
    }
  ) : p, N = e != null ? /* @__PURE__ */ M(
    "label",
    {
      className: Kt.label,
      htmlFor: O ? w ?? b : void 0,
      children: [
        e,
        a === !0 && /* @__PURE__ */ s("span", { className: Kt.required, "aria-hidden": "true", children: "*" })
      ]
    }
  ) : null;
  return /* @__PURE__ */ M(
    "div",
    {
      className: [
        Kt.formfield,
        Kt[d],
        i ? Kt.floating : null,
        o ? Kt.invalid : null,
        u
      ].filter(Boolean).join(" "),
      children: [
        i ? null : N,
        /* @__PURE__ */ M("div", { className: Kt.content, children: [
          t != null && /* @__PURE__ */ s("div", { className: Kt.start, children: t }),
          z,
          i ? N : null,
          n != null && /* @__PURE__ */ s("div", { className: Kt.end, children: n })
        ] }),
        r != null && /* @__PURE__ */ s("div", { id: v, className: Kt.helper, children: r })
      ]
    }
  );
}
const Cl = "_fieldset_18z6t_1", Dl = "_legend_18z6t_11", zl = "_legendText_18z6t_20", El = "_toggle_18z6t_24", Il = "_content_18z6t_45", Al = "_summary_18z6t_49", yn = {
  fieldset: Cl,
  legend: Dl,
  legendText: zl,
  toggle: El,
  content: Il,
  summary: Al
};
function mk({
  text: e,
  headerTemplate: t,
  icon: n,
  iconColor: r,
  allowCollapse: l = !1,
  collapsed: i,
  defaultCollapsed: d = !1,
  summary: o,
  expandTitle: a,
  collapseTitle: c,
  expandAriaLabel: u,
  collapseAriaLabel: f,
  onExpand: k,
  onCollapse: v,
  children: b,
  className: p,
  visible: y = !0
}) {
  const _ = Re(), [h, g] = W(d);
  if (y === !1) return null;
  const w = i ?? h, x = l ? `${_}-content` : void 0, S = () => {
    const N = !w;
    i === void 0 && g(N), N ? v?.() : k?.();
  }, $ = l || e != null || n != null || t != null, O = l ? w : !1, E = l && w && o != null, D = O ? a ?? "Expand" : c ?? "Collapse", z = O ? u ?? "Expand" : f ?? "Collapse";
  return /* @__PURE__ */ M(
    "fieldset",
    {
      className: [yn.fieldset, p].filter(Boolean).join(" "),
      children: [
        $ ? /* @__PURE__ */ s("legend", { className: yn.legend, children: l ? /* @__PURE__ */ M(ke, { children: [
          /* @__PURE__ */ M(
            "button",
            {
              type: "button",
              className: yn.toggle,
              title: D,
              "aria-label": e == null ? z : void 0,
              "aria-expanded": !O,
              "aria-controls": x,
              onClick: S,
              children: [
                /* @__PURE__ */ s(
                  $e,
                  {
                    name: O ? "plus" : "minus",
                    size: 16,
                    "aria-hidden": "true"
                  }
                ),
                n != null && /* @__PURE__ */ s(
                  $e,
                  {
                    name: n,
                    "aria-hidden": "true",
                    ...r != null ? { style: { color: r } } : {}
                  }
                ),
                e != null && /* @__PURE__ */ s("span", { className: yn.legendText, children: e })
              ]
            }
          ),
          t
        ] }) : /* @__PURE__ */ M(ke, { children: [
          n != null && /* @__PURE__ */ s(
            $e,
            {
              name: n,
              "aria-hidden": "true",
              ...r != null ? { style: { color: r } } : {}
            }
          ),
          e != null && /* @__PURE__ */ s("span", { className: yn.legendText, children: e }),
          t
        ] }) }) : null,
        /* @__PURE__ */ s(
          "div",
          {
            className: yn.content,
            id: x,
            hidden: O,
            children: b
          }
        ),
        E ? /* @__PURE__ */ s("div", { className: yn.summary, children: o }) : null
      ]
    }
  );
}
const Tl = "_form_19k3s_1", jl = {
  form: Tl
}, $r = Bn(null);
function Ll() {
  const e = _n($r);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function gk({
  model: e,
  onSubmit: t,
  onInvalidSubmit: n,
  action: r,
  method: l,
  children: i,
  className: d
}) {
  const [o, a] = W({}), [c, u] = W(0), f = Y(o);
  f.current = o;
  const k = R((g) => {
    a(
      (w) => w[g.name] === g ? w : { ...w, [g.name]: g }
    );
  }, []), v = R((g) => {
    a((w) => {
      if (!(g in w)) return w;
      const x = { ...w };
      return delete x[g], x;
    });
  }, []), b = R(() => {
    const g = {};
    for (const w of Object.values(f.current)) {
      const x = w.validate();
      x.length > 0 && (g[w.name] = x);
    }
    return g;
  }, []), p = R(() => {
    const g = b();
    u((w) => w + 1), Object.keys(g).length === 0 ? t?.(e) : n?.(g);
  }, [b, e, t, n]), y = (g) => {
    r != null && l != null || (g.preventDefault(), p());
  }, _ = xe(
    () => ({ registerField: k, unregisterField: v, submit: p, submitCount: c }),
    [k, v, p, c]
  ), h = [jl.form, d].filter(Boolean).join(" ");
  return /* @__PURE__ */ s($r.Provider, { value: _, children: /* @__PURE__ */ s(
    "form",
    {
      className: h,
      onSubmit: y,
      action: r,
      method: l,
      noValidate: !0,
      children: i
    }
  ) });
}
const On = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", xk = (e = "Required") => (t) => On(t) ? e : null, yk = (e = "Invalid email") => (t) => On(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, bk = (e, t = "Invalid format") => (n) => On(n) || e.test(String(n)) ? null : t, vk = (e, t = `Minimum ${e} characters`) => (n) => On(n) || String(n).length >= e ? null : t, kk = (e, t = `Maximum ${e} characters`) => (n) => On(n) || String(n).length <= e ? null : t, wk = (e, t, n = `Between ${e} and ${t}`) => (r) => {
  if (On(r)) return null;
  const l = Number(r);
  return !Number.isNaN(l) && l >= e && l <= t ? null : n;
}, $k = (e, t = "Values do not match") => (n, r) => {
  if (On(n)) return null;
  const l = typeof e == "function" ? e(r) : e;
  return n === l ? null : t;
}, Nk = (e = "Required") => (t) => t === !0 ? null : e, Ok = (e) => (t, n) => e(t, n);
function Pl(e, t, n) {
  return e.map((r) => r(t, n)).filter((r) => r != null);
}
function Sk(e, t) {
  const { registerField: n, unregisterField: r, submitCount: l } = Ll(), [i, d] = W(t?.initialValue), [o, a] = W(!1), [c, u] = W(!1), f = Y(() => []);
  f.current = () => Pl(t?.validate ?? [], i), ge(() => (n({ name: e, validate: () => f.current() }), () => r(e)), [e, n, r]), ge(() => {
    l > 0 && (a(!0), u(!1));
  }, [l]);
  const k = o && !c ? f.current() : [];
  return { value: i, setValue: (b) => {
    d(b), u(!0);
  }, errors: k };
}
const Rl = "_select_1vjst_1", Bl = "_invalid_1vjst_33", ql = "_xs_1vjst_40", Fl = "_sm_1vjst_48", Hl = "_md_1vjst_56", Kl = "_lg_1vjst_62", Wl = "_xl_1vjst_68", $s = {
  select: Rl,
  invalid: Bl,
  xs: ql,
  sm: Fl,
  md: Hl,
  lg: Kl,
  xl: Wl
}, Pn = Fe(
  function({ size: t = "md", invalid: n = !1, options: r, children: l, className: i, ...d }, o) {
    return /* @__PURE__ */ s(
      "select",
      {
        ref: o,
        "data-size": t,
        className: [
          $s.select,
          $s[t],
          n ? $s.invalid : null,
          i
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...d,
        children: r != null ? r.map((a) => /* @__PURE__ */ s(
          "option",
          {
            value: a.value,
            disabled: a.disabled,
            children: a.label
          },
          a.value
        )) : l
      }
    );
  }
), Nr = [
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
], Un = {
  string: "Contains",
  number: "Equals",
  boolean: "Equals",
  date: "Equals",
  enum: "Equals"
}, Ul = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
];
function Vl(e) {
  return Ul.includes(e);
}
function gs(e, t) {
  return t.split(".").reduce((n, r) => {
    if (n != null)
      return n[r];
  }, e);
}
function Us(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function ns(e, t) {
  const n = Us(e), r = Us(t);
  if (typeof n == "number" && typeof r == "number") return n - r;
  const l = String(n ?? ""), i = String(r ?? "");
  return l < i ? -1 : l > i ? 1 : 0;
}
function vs(e) {
  if (e.secondOperator == null) return !1;
  if (Vl(e.secondOperator)) return !0;
  const t = e.secondValue;
  return t != null && t !== "";
}
function Vs(e, t, n) {
  const r = gs(t, e.property), l = Xs(
    r,
    e.value,
    e.operator,
    n
  );
  if (!vs(e)) return l;
  const i = Xs(
    r,
    e.secondValue,
    e.secondOperator,
    n
  );
  return (e.logicalOperator ?? "And") === "And" ? l && i : l || i;
}
function Xs(e, t, n, r) {
  const l = r === "CaseInsensitive", i = (a) => l && typeof a == "string" ? a.toLowerCase() : a, d = i(e), o = i(t);
  switch (n) {
    case "Equals":
      return d === o || Array.isArray(d) && d.some((a) => i(a) === o);
    case "NotEquals":
      return d !== o && !(Array.isArray(d) && d.some((a) => i(a) === o));
    case "LessThan":
      return ns(d, o) < 0;
    case "LessThanOrEquals":
      return ns(d, o) <= 0;
    case "GreaterThan":
      return ns(d, o) > 0;
    case "GreaterThanOrEquals":
      return ns(d, o) >= 0;
    case "Contains":
      return typeof d == "string" && typeof o == "string" && d.includes(o);
    case "StartsWith":
      return typeof d == "string" && typeof o == "string" && d.startsWith(o);
    case "EndsWith":
      return typeof d == "string" && typeof o == "string" && d.endsWith(o);
    case "DoesNotContain":
      return typeof d == "string" && typeof o == "string" && !d.includes(o);
    case "In":
      return Array.isArray(o) && o.some((a) => i(a) === d);
    case "NotIn":
      return Array.isArray(o) && !o.some((a) => i(a) === d);
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
function qs(e) {
  return "filters" in e;
}
function Or(e, t, n = {}) {
  const r = n.logicalOperator ?? "And", l = n.caseSensitivity ?? "CaseInsensitive";
  if (qs(t)) {
    if (t.filters.length === 0) return !0;
    const i = t.operator ?? r;
    return t.filters[i === "Or" ? "some" : "every"](
      (d) => Or(e, d, { logicalOperator: i, caseSensitivity: l })
    );
  }
  return t.operator === "Custom", Vs(t, e, l);
}
function Sr(e, t, n = {}) {
  return e.filter((r) => Or(r, t, n));
}
function Xl(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function St(e) {
  return typeof e == "string" ? `"${Xl(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(St).join(", ")}]` : `"${String(e)}"`;
}
function Gl(e) {
  const t = (l, i) => {
    switch (l) {
      case "Equals":
        return `${e.property}.Equals(${St(i)})`;
      case "NotEquals":
        return `!${e.property}.Equals(${St(i)})`;
      case "LessThan":
        return `${e.property}.LessThan(${St(i)})`;
      case "LessThanOrEquals":
        return `${e.property}.LessThanOrEquals(${St(i)})`;
      case "GreaterThan":
        return `${e.property}.GreaterThan(${St(i)})`;
      case "GreaterThanOrEquals":
        return `${e.property}.GreaterThanOrEquals(${St(i)})`;
      case "Contains":
        return `${e.property}.Contains(${St(i)})`;
      case "StartsWith":
        return `${e.property}.StartsWith(${St(i)})`;
      case "EndsWith":
        return `${e.property}.EndsWith(${St(i)})`;
      case "DoesNotContain":
        return `!${e.property}.Contains(${St(i)})`;
      case "In":
        return `${e.property}.In(${St(i)})`;
      case "NotIn":
        return `!${e.property}.In(${St(i)})`;
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
  if (!vs(e))
    return t(e.operator, e.value);
  const n = e.logicalOperator ?? "And", r = e.secondOperator;
  return `(${t(e.operator, e.value)} ${n} ${t(
    r,
    e.secondValue
  )})`;
}
function Yl(e) {
  return qs(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(Yl).filter(Boolean).join(` ${e.operator} `)})` : Gl(e);
}
function Zl(e) {
  return e.replace(/'/g, "''");
}
const Jl = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function Ql(e, t) {
  const n = e.property, r = t === "CaseInsensitive", l = (c) => r ? `tolower(${c})` : c, i = (c) => typeof c == "string" ? `'${Zl(c)}'` : c instanceof Date ? `'${c.toISOString()}'` : String(c ?? ""), d = (c, u) => {
    const f = typeof u == "string", k = f && r ? l(n) : n;
    switch (c) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${k} ${Jl[c]} ${f && r ? l(i(u)) : i(u)}`;
      case "Contains":
        return `contains(${l(n)}, ${l(i(u))})`;
      case "StartsWith":
        return `startswith(${l(n)}, ${l(i(u))})`;
      case "EndsWith":
        return `endswith(${l(n)}, ${l(i(u))})`;
      case "DoesNotContain":
        return `not(contains(${l(n)}, ${l(i(u))}))`;
      case "In":
        return Array.isArray(u) ? `${k} in (${u.map((v) => i(v)).join(", ")})` : `${k} in (${i(u)})`;
      case "NotIn":
        return Array.isArray(u) ? `not(${k} in (${u.map((v) => i(v)).join(", ")}))` : `not(${k} in (${i(u)}))`;
      case "IsNull":
        return `${n} eq null`;
      case "IsNotNull":
        return `${n} ne null`;
      case "IsEmpty":
        return `${n} eq ''`;
      case "IsNotEmpty":
        return `${n} ne ''`;
      case "Custom":
        return `${n} custom`;
      default:
        return "";
    }
  };
  if (!vs(e))
    return d(e.operator, e.value);
  const o = (e.logicalOperator ?? "And") === "And" ? "and" : "or", a = e.secondOperator;
  return `(${d(e.operator, e.value)} ${o} ${d(
    a,
    e.secondValue
  )})`;
}
function ea(e, t = {}) {
  const n = t.caseSensitivity ?? "CaseInsensitive";
  if (qs(e)) {
    if (e.filters.length === 0) return "";
    const r = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((l) => ea(l, { caseSensitivity: n })).filter(Boolean).join(` ${r} `)})`;
  }
  return Ql(e, n);
}
function ta(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((n, r) => {
    for (const l of t) {
      const i = l.sortOrder === "Ascending" ? 1 : -1, d = ns(
        gs(n, l.property),
        gs(r, l.property)
      );
      if (d !== 0) return d * i;
    }
    return 0;
  });
}
const na = "_filter_1h8zc_1", sa = "_rows_1h8zc_9", ra = "_row_1h8zc_9", oa = "_join_1h8zc_21", la = "_property_1h8zc_30", aa = "_operator_1h8zc_34", ia = "_value_1h8zc_38", ca = "_remove_1h8zc_42", da = "_bar_1h8zc_58", ua = "_add_1h8zc_64", fa = "_custom_1h8zc_78", _a = "_summary_1h8zc_82", ha = "_second_1h8zc_87", pa = "_secondAdd_1h8zc_91", ma = "_addSecond_1h8zc_95", ga = "_joinSelect_1h8zc_109", Qe = {
  filter: na,
  rows: sa,
  row: ra,
  join: oa,
  property: la,
  operator: aa,
  value: ia,
  remove: ca,
  bar: da,
  add: ua,
  custom: fa,
  summary: _a,
  second: ha,
  secondAdd: pa,
  addSecond: ma,
  joinSelect: ga
}, Vn = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
], Gs = {
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
function Ys({
  property: e,
  value: t,
  onChange: n
}) {
  if (e.editor != null)
    return /* @__PURE__ */ s(ke, { children: e.editor({ value: t, onChange: n }) });
  const r = e.type ?? "string";
  if (r === "enum" && e.values != null)
    return /* @__PURE__ */ s(
      Pn,
      {
        "aria-label": e.title ?? e.name,
        className: Qe.value,
        options: e.values,
        value: String(t ?? ""),
        onChange: (i) => n(i.target.value)
      }
    );
  if (r === "boolean")
    return /* @__PURE__ */ s(
      Pn,
      {
        "aria-label": e.title ?? e.name,
        className: Qe.value,
        options: [
          { value: "", label: "" },
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        value: t == null ? "" : String(t),
        onChange: (i) => {
          i.target.value === "" ? n(void 0) : n(i.target.value === "true");
        }
      }
    );
  const l = r === "number" ? { type: "number" } : r === "date" ? { type: "date" } : { type: "text" };
  return /* @__PURE__ */ s(
    "input",
    {
      "aria-label": e.title ?? e.name,
      className: Qe.value,
      ...l,
      value: t == null ? "" : String(t),
      onChange: (i) => n(
        r === "number" && i.target.value !== "" ? Number(i.target.value) : i.target.value
      )
    }
  );
}
function Mk({
  properties: e,
  logicalOperator: t = "And",
  filterCaseSensitivity: n = "CaseInsensitive",
  initialRows: r,
  uniqueFilters: l = !1,
  className: i,
  viewChanged: d,
  items: o,
  children: a
}) {
  const [c, u] = W(
    () => r != null && r.length > 0 ? r.map((_, h) => ({ id: h, ..._ })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: Un[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), f = (_, h) => {
    u(
      (g) => g.map((w) => w.id === _ ? { ...w, ...h } : w)
    );
  }, k = () => {
    const _ = c[c.length - 1], h = Math.max(0, ...c.map((w) => w.id)) + 1, g = e[0];
    u((w) => [
      ...w,
      {
        id: h,
        property: _?.property ?? g?.name ?? "",
        operator: Un[e.find(
          (x) => x.name === (_?.property ?? g?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, v = (_) => {
    u(
      (h) => h.length > 1 ? h.filter((g) => g.id !== _) : h
    );
  }, b = xe(() => {
    const _ = [];
    for (const h of c) {
      if (h.property === "" || (h.value == null || h.value === "") && !Vn.includes(h.operator)) continue;
      const w = {
        property: h.property,
        operator: h.operator,
        value: h.value
      }, { secondOperator: x } = h;
      x != null && vs(h) && (w.secondOperator = x, w.secondValue = h.secondValue, w.logicalOperator = h.logicalOperator ?? "And"), _.push(w);
    }
    return _;
  }, [c]), p = xe(() => o == null || b.length === 0 ? o : Sr(o, {
    operator: t,
    filters: b
  }, {
    caseSensitivity: n
  }), [o, b, t, n]);
  ge(() => {
    d != null && o != null && d(p ?? []);
  }, [p]);
  const y = (_) => e.find((h) => h.name === _) ?? { name: _, type: "string" };
  return /* @__PURE__ */ M("div", { className: [Qe.filter, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ s("div", { className: Qe.rows, role: "group", "aria-label": "Filter conditions", children: c.map((_, h) => {
      const g = y(_.property), w = l ? [Un[g.type ?? "string"]] : Nr, x = !Vn.includes(_.operator), S = _.secondOperator != null;
      return /* @__PURE__ */ M(Ps, { children: [
        /* @__PURE__ */ M("div", { className: Qe.row, children: [
          h > 0 ? /* @__PURE__ */ s("span", { className: Qe.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ s(
            Pn,
            {
              "aria-label": `Condition ${h + 1} property`,
              className: Qe.property,
              value: _.property,
              onChange: ($) => {
                const O = e.find(
                  (E) => E.name === $.target.value
                );
                f(_.id, {
                  property: $.target.value,
                  operator: Un[O?.type ?? "string"],
                  value: void 0,
                  secondOperator: void 0,
                  secondValue: void 0,
                  logicalOperator: void 0
                });
              },
              options: e.map(($) => ({
                value: $.name,
                label: $.title ?? $.name
              }))
            }
          ),
          /* @__PURE__ */ s(
            Pn,
            {
              "aria-label": `Condition ${h + 1} operator`,
              className: Qe.operator,
              value: _.operator,
              onChange: ($) => {
                const O = $.target.value;
                f(
                  _.id,
                  Vn.includes(O) ? {
                    operator: O,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: O }
                );
              },
              options: w.map(($) => ({
                value: $,
                label: Gs[$]
              }))
            }
          ),
          x ? /* @__PURE__ */ s(
            Ys,
            {
              property: g,
              value: _.value,
              onChange: ($) => f(_.id, { value: $ })
            }
          ) : null,
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: Qe.remove,
              "aria-label": `Remove condition ${h + 1}`,
              onClick: () => v(_.id),
              children: /* @__PURE__ */ s($e, { name: "close", size: "sm" })
            }
          )
        ] }),
        x ? S ? /* @__PURE__ */ M(
          "div",
          {
            className: [Qe.row, Qe.second].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ s(
                Pn,
                {
                  "aria-label": `Condition ${h + 1} second-operator logic`,
                  className: Qe.joinSelect,
                  value: _.logicalOperator ?? "And",
                  onChange: ($) => f(_.id, {
                    logicalOperator: $.target.value
                  }),
                  options: [
                    { value: "And", label: "And" },
                    { value: "Or", label: "Or" }
                  ]
                }
              ),
              /* @__PURE__ */ s(
                Pn,
                {
                  "aria-label": `Condition ${h + 1} second operator`,
                  className: Qe.operator,
                  value: _.secondOperator,
                  onChange: ($) => {
                    const O = $.target.value;
                    f(
                      _.id,
                      Vn.includes(O) ? { secondOperator: O, secondValue: void 0 } : { secondOperator: O }
                    );
                  },
                  options: w.map(($) => ({
                    value: $,
                    label: Gs[$]
                  }))
                }
              ),
              _.secondOperator == null || !Vn.includes(_.secondOperator) ? /* @__PURE__ */ s(
                Ys,
                {
                  property: g,
                  value: _.secondValue,
                  onChange: ($) => f(_.id, { secondValue: $ })
                }
              ) : null,
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: Qe.remove,
                  "aria-label": `Remove second condition ${h + 1}`,
                  onClick: () => f(_.id, {
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  }),
                  children: /* @__PURE__ */ s($e, { name: "close", size: "sm" })
                }
              )
            ]
          }
        ) : /* @__PURE__ */ s("div", { className: Qe.secondAdd, children: /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: Qe.addSecond,
            onClick: () => f(_.id, {
              secondOperator: Un[g.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, _.id);
    }) }),
    /* @__PURE__ */ M("div", { className: Qe.bar, children: [
      /* @__PURE__ */ s("button", { type: "button", className: Qe.add, onClick: k, children: "Add filter" }),
      a != null ? /* @__PURE__ */ s("div", { className: Qe.custom, children: a }) : null,
      o != null ? /* @__PURE__ */ M("span", { className: Qe.summary, "aria-live": "polite", children: [
        p?.length ?? 0,
        " of ",
        o.length
      ] }) : null
    ] })
  ] });
}
const xa = "_pager_4cpp0_1", ya = "_alignLeft_4cpp0_10", ba = "_alignCenter_4cpp0_14", va = "_alignRight_4cpp0_18", ka = "_alignJustify_4cpp0_22", wa = "_summary_4cpp0_26", $a = "_controls_4cpp0_31", Na = "_button_4cpp0_37", Oa = "_active_4cpp0_73", Sa = "_ellipsis_4cpp0_85", Ma = "_size_4cpp0_91", ht = {
  pager: xa,
  alignLeft: ya,
  alignCenter: ba,
  alignRight: va,
  alignJustify: ka,
  summary: wa,
  controls: $a,
  button: Na,
  active: Oa,
  ellipsis: Sa,
  size: Ma
};
function Ca(e, t, n, r) {
  return e.replace("{0}", String(t)).replace("{1}", String(n)).replace("{2}", String(r));
}
function Zs(e, t) {
  return e.replace("{0}", String(t));
}
function Da(e, t, n) {
  if (t <= n)
    return Array.from({ length: t }, (o, a) => a + 1);
  const r = Math.floor(n / 2);
  let l = Math.max(1, e - r);
  const i = Math.min(t, l + n - 1);
  l = Math.max(1, i - n + 1);
  const d = [];
  for (let o = l; o <= i; o++) d.push(o);
  return l > 2 && d.unshift("ellipsis"), l > 1 && d.unshift(1), i < t - 1 && d.push("ellipsis"), i < t && d.push(t), d;
}
function za({
  count: e,
  pageSize: t,
  page: n,
  defaultPage: r = 1,
  pageSizeOptions: l,
  pageNumbersCount: i = 5,
  alwaysVisible: d = !1,
  horizontalAlign: o = "left",
  showPagingSummary: a,
  showPageSizeSelector: c = !0,
  pagingSummaryFormat: u = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: f,
  pageSizeText: k = "Items per page",
  firstPageTitle: v = "First page",
  prevPageTitle: b = "Previous page",
  nextPageTitle: p = "Next page",
  lastPageTitle: y = "Last page",
  pageTitleFormat: _ = "Page {0}",
  pageAriaLabelFormat: h = "Page {0}",
  onPageChange: g,
  onPageSizeChange: w,
  ariaLabel: x = "Pagination",
  className: S,
  visible: $ = !0
}) {
  const O = n ?? r, [E, D] = W(O), z = n !== void 0, N = z ? O : E, m = Math.max(1, Math.ceil(e / t)), C = Math.min(Math.max(1, N), m), T = a ?? !0, j = d || m > 1, A = Da(C, m, i), L = R(
    (X) => {
      const pe = Math.min(Math.max(1, X), m);
      z || D(pe);
      const de = (pe - 1) * t;
      g?.({
        page: pe,
        skip: de,
        top: t,
        pageCount: m,
        pageSize: t
      });
    },
    [z, g, m, t]
  ), Z = o === "center" ? ht.alignCenter : o === "right" ? ht.alignRight : o === "justify" ? ht.alignJustify : ht.alignLeft, se = {
    count: e,
    pageNumber: C,
    pageSize: t,
    pageCount: m
  }, ne = (X) => {
    const pe = Array.from(
      X.currentTarget.querySelectorAll(
        "button[data-pager-page]"
      )
    ), de = pe.indexOf(document.activeElement);
    de !== -1 && (X.key === "ArrowRight" || X.key === "ArrowDown" ? (X.preventDefault(), (pe[de + 1] ?? pe[0])?.focus()) : X.key === "ArrowLeft" || X.key === "ArrowUp" ? (X.preventDefault(), (pe[de - 1] ?? pe[pe.length - 1])?.focus()) : X.key === "Home" ? (X.preventDefault(), pe[0]?.focus()) : X.key === "End" && (X.preventDefault(), pe[pe.length - 1]?.focus()));
  };
  return $ === !1 || !j ? null : /* @__PURE__ */ M(
    "nav",
    {
      className: [ht.pager, Z, S].filter(Boolean).join(" "),
      "aria-label": x,
      children: [
        T && /* @__PURE__ */ s("span", { className: ht.summary, "aria-live": "polite", children: f ? f(se) : Ca(u, C, m, e) }),
        /* @__PURE__ */ M(
          "div",
          {
            className: ht.controls,
            role: "group",
            "aria-label": x,
            onKeyDown: ne,
            children: [
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: ht.button,
                  disabled: C <= 1,
                  onClick: () => L(1),
                  "aria-label": v,
                  title: v,
                  children: "«"
                }
              ),
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: ht.button,
                  disabled: C <= 1,
                  onClick: () => L(C - 1),
                  "aria-label": b,
                  title: b,
                  children: "‹"
                }
              ),
              A.map(
                (X, pe) => X === "ellipsis" ? /* @__PURE__ */ s("span", { className: ht.ellipsis, "aria-hidden": "true", children: "…" }, `e${pe}`) : /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    "data-pager-page": X,
                    className: [ht.button, X === C ? ht.active : ""].filter(Boolean).join(" "),
                    "aria-current": X === C ? "page" : void 0,
                    "aria-label": Zs(h, X),
                    title: Zs(_, X),
                    onClick: () => L(X),
                    children: X
                  },
                  X
                )
              ),
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: ht.button,
                  disabled: C >= m,
                  onClick: () => L(C + 1),
                  "aria-label": p,
                  title: p,
                  children: "›"
                }
              ),
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: ht.button,
                  disabled: C >= m,
                  onClick: () => L(m),
                  "aria-label": y,
                  title: y,
                  children: "»"
                }
              )
            ]
          }
        ),
        c && l && l.length > 0 && /* @__PURE__ */ M("label", { className: ht.size, children: [
          /* @__PURE__ */ s("span", { children: k }),
          /* @__PURE__ */ s(
            "select",
            {
              value: t,
              onChange: (X) => w?.(Number(X.target.value)),
              "aria-label": k,
              children: l.map((X) => /* @__PURE__ */ s("option", { value: X, children: X }, X))
            }
          )
        ] })
      ]
    }
  );
}
function zs(e) {
  const { pageNumber: t, onPageChange: n, summaryTemplate: r, showSummary: l, ...i } = e;
  return /* @__PURE__ */ s(
    za,
    {
      page: t,
      showPagingSummary: l,
      pagingSummaryFormat: "Page {0} of {1}",
      pageAriaLabelFormat: "{0}",
      pageTitleFormat: "{0}",
      alwaysVisible: !0,
      pagingSummaryTemplate: r ? (o) => r({
        count: o.count,
        pageNumber: o.pageNumber,
        pageSize: o.pageSize
      }) : void 0,
      onPageChange: n ? (o) => n(o.page) : void 0,
      ...i
    }
  );
}
const Mr = "";
function Ea(e, t, n, r, l) {
  if (t.length === 0) return e.map((o) => ({ type: "row", row: o }));
  const i = (o) => n.find((a) => a.property === o), d = (o, a, c) => {
    const u = t[a];
    if (u === void 0)
      return o.map((p) => ({ type: "row", row: p }));
    const f = i(u), k = /* @__PURE__ */ new Map(), v = [];
    o.forEach((p) => {
      const y = String(l(p, u) ?? ""), _ = k.get(y);
      _ ? _.push(p) : (k.set(y, [p]), v.push(y));
    });
    const b = [];
    return v.forEach((p) => {
      const y = k.get(p), _ = [...c, p].join(Mr), h = y[0], g = h !== void 0 ? l(h, u) : void 0;
      b.push({
        type: "group",
        group: {
          key: _,
          display: xs(g, f?.format),
          property: u,
          title: f?.title ?? u,
          count: y.length,
          level: a
        }
      }), r.has(_) && b.push(...d(y, a + 1, [...c, p]));
    }), b;
  };
  return d(e, 0, []);
}
function Js(e, t, n) {
  const r = /* @__PURE__ */ new Set(), l = (i, d, o) => {
    const a = t[d];
    if (a === void 0 || i.length === 0) return;
    const c = /* @__PURE__ */ new Map(), u = [];
    i.forEach((f) => {
      const k = String(n(f, a) ?? ""), v = c.get(k);
      v ? v.push(f) : (c.set(k, [f]), u.push(k));
    }), u.forEach((f) => {
      const k = [...o, f].join(Mr);
      r.add(k), l(c.get(f), d + 1, [...o, f]);
    });
  };
  return l(e, 0, []), r;
}
function ls(e, t) {
  return e.property ?? `col-${t}`;
}
function Ia(e, t) {
  const n = {};
  let r = 0;
  return e.forEach(({ key: l, column: i }) => {
    if (!i.frozen) return;
    n[l] = r === 0 ? "0px" : `${r}px`;
    const d = t[l] ?? i.width ?? "8rem";
    r += parseFloat(d);
  }), n;
}
function Aa(e, t) {
  if (e !== void 0)
    switch (t) {
      case "number": {
        const n = Number(e);
        return Number.isNaN(n) ? e : n;
      }
      case "date": {
        const n = new Date(e);
        return Number.isNaN(n.getTime()) ? e : n;
      }
      case "boolean":
        return e === "true" ? !0 : e === "false" ? !1 : e;
      default:
        return e;
    }
}
function Nn(e, t) {
  if (t != null)
    return gs(e, t);
}
function xs(e, t) {
  if (t == null || t === "") return String(e ?? "");
  const n = /^N(\d+)$/i.exec(t);
  if (n && typeof e == "number") return e.toFixed(Number(n[1]));
  if (t === "d" || t === "D") {
    const r = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return r != null && !Number.isNaN(r.getTime()) ? r.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const Qs = [
  "Ascending",
  "Descending",
  null
];
function Ta(e, t, n = {}) {
  const r = e.find((i) => i.property === t), l = Qs[(r ? Qs.indexOf(r.sortOrder) : -1) + 1] ?? null;
  return l == null ? e.filter((i) => i.property !== t) : n.multi ? [
    ...e.filter((i) => i.property !== t),
    { property: t, sortOrder: l }
  ] : [{ property: t, sortOrder: l }];
}
function ja(e, t) {
  return ta(e, t);
}
function La(e, t, n) {
  const r = Math.max(1, Math.ceil(e.length / n)), l = Math.min(Math.max(1, t), r), i = (l - 1) * n;
  return {
    items: e.slice(i, i + n),
    pageCount: r,
    pageNumber: l,
    total: e.length
  };
}
function Pa(e, t, n = {}) {
  const r = [...t.filters.entries()].filter(([, o]) => o.value !== "" && o.value !== void 0).map(
    ([o, a]) => ({
      property: o,
      operator: a.operator ?? "Contains",
      value: Aa(
        a.value,
        n.types?.[o] ?? "string"
      )
    })
  ), l = r.length > 0 ? Sr(
    e,
    { operator: n.logicalOperator ?? "And", filters: r },
    {
      logicalOperator: n.logicalOperator ?? "And",
      caseSensitivity: n.caseSensitivity ?? "CaseInsensitive"
    }
  ) : e, i = ja(l, t.sorts);
  return {
    ...La(i, t.pageNumber, t.pageSize),
    filtered: i,
    sorts: t.sorts,
    filters: t.filters,
    pageSize: t.pageSize
  };
}
function er(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
function Ra(e, t, n) {
  if (t.type === "custom") return t.compute?.(e);
  if (t.type === "count") return e.length;
  const r = [];
  switch (e.forEach((l) => {
    const i = n(l, t.property);
    if (i == null || i === "") return;
    const d = Number(i);
    Number.isFinite(d) && r.push(d);
  }), t.type) {
    case "sum":
      return r.length > 0 ? r.reduce((l, i) => l + i, 0) : void 0;
    case "avg":
      return r.length > 0 ? r.reduce((l, i) => l + i, 0) / r.length : void 0;
    case "min":
      return r.length > 0 ? Math.min(...r) : void 0;
    case "max":
      return r.length > 0 ? Math.max(...r) : void 0;
    default:
      return;
  }
}
function Ba(e, t, n = Nn) {
  const r = (i) => /["\r\n,]/.test(i) ? `"${i.replace(/"/g, '""')}"` : i, l = [
    t.map((i) => r(i.title ?? i.property ?? "")).join(",")
  ];
  return e.forEach((i) => {
    l.push(
      t.map((d) => r(xs(n(i, d.property), d.format))).join(",")
    );
  }), `${l.join(`\r
`)}\r
`;
}
const qa = "_grid_gf8ma_1", Fa = "_toolbar_gf8ma_8", Ha = "_picker_gf8ma_13", Ka = "_pickerButton_gf8ma_17", Wa = "_pickerPanel_gf8ma_31", Ua = "_pickerItem_gf8ma_46", Va = "_groupPanel_gf8ma_55", Xa = "_groupPanelActive_gf8ma_66", Ga = "_groupPanelText_gf8ma_70", Ya = "_groupChip_gf8ma_74", Za = "_groupRemove_gf8ma_85", Ja = "_groupRow_gf8ma_94", Qa = "_groupCell_gf8ma_98", ei = "_groupToggle_gf8ma_103", ti = "_editRow_gf8ma_116", ni = "_editCell_gf8ma_120", si = "_editInput_gf8ma_125", ri = "_commandCell_gf8ma_135", oi = "_commandButton_gf8ma_141", li = "_data_gf8ma_156", ai = "_table_gf8ma_163", ii = "_header_gf8ma_169", ci = "_center_gf8ma_181", di = "_right_gf8ma_185", ui = "_sortButton_gf8ma_189", fi = "_sortIndicator_gf8ma_207", _i = "_sortIndex_gf8ma_211", hi = "_cell_gf8ma_222", pi = "_clickable_gf8ma_236", mi = "_frozen_gf8ma_244", gi = "_selected_gf8ma_250", xi = "_resizeHandle_gf8ma_258", yi = "_filterCell_gf8ma_276", bi = "_filterSelect_gf8ma_284", vi = "_filterInput_gf8ma_294", ki = "_empty_gf8ma_305", wi = "_loading_gf8ma_311", $i = "_visuallyHidden_gf8ma_325", Ni = "_virtualScroller_gf8ma_334", Oi = "_spacerRow_gf8ma_339", Si = "_footerRow_gf8ma_344", Mi = "_footerCell_gf8ma_348", Ci = "_footerValue_gf8ma_355", he = {
  grid: qa,
  toolbar: Fa,
  picker: Ha,
  pickerButton: Ka,
  pickerPanel: Wa,
  pickerItem: Ua,
  groupPanel: Va,
  groupPanelActive: Xa,
  groupPanelText: Ga,
  groupChip: Ya,
  groupRemove: Za,
  groupRow: Ja,
  groupCell: Qa,
  groupToggle: ei,
  editRow: ti,
  editCell: ni,
  editInput: si,
  commandCell: ri,
  commandButton: oi,
  data: li,
  table: ai,
  header: ii,
  center: ci,
  right: di,
  sortButton: ui,
  sortIndicator: fi,
  sortIndex: _i,
  cell: hi,
  clickable: pi,
  frozen: mi,
  selected: gi,
  resizeHandle: xi,
  filterCell: yi,
  filterSelect: bi,
  filterInput: vi,
  empty: ki,
  loading: wi,
  visuallyHidden: $i,
  virtualScroller: Ni,
  spacerRow: Oi,
  footerRow: Si,
  footerCell: Mi,
  footerValue: Ci
}, Di = {
  Ascending: "ascending",
  Descending: "descending"
};
function tr(e, t) {
  return e.filterable ?? t;
}
function zi(e, t) {
  return e.sortable ?? t;
}
function Ei(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function Ck({
  columns: e,
  rows: t,
  rowKey: n,
  allowSorting: r = !1,
  allowMultiColumnSorting: l = !1,
  showSortIndex: i = !1,
  allowFiltering: d = !1,
  filterCaseSensitivity: o = "CaseInsensitive",
  logicalOperator: a = "And",
  allowPaging: c = !1,
  pageSize: u = 10,
  pageSizeOptions: f,
  pageNumbersCount: k = 5,
  pagerPosition: v = "Bottom",
  showPagingSummary: b = !0,
  showPageSizeSelector: p = !0,
  selectionMode: y = "None",
  selectedKeys: _,
  onSelectionChange: h,
  showColumnPicker: g = !1,
  columnPickerText: w = "Columns",
  allowColumnResize: x = !1,
  allowColumnReorder: S = !1,
  allowGrouping: $ = !1,
  groupPanelText: O = "Drag a column header here to group",
  groupExpanded: E = !0,
  aggregates: D,
  showExportButton: z = !1,
  exportFileName: N = "grid-data",
  serverMode: m = !1,
  totalCount: C,
  onRangeChange: T,
  virtualize: j = !1,
  virtualRowHeight: A = 40,
  virtualHeight: L = 480,
  editMode: Z = "None",
  allowRowCreate: se = !1,
  onRowUpdate: ne,
  onRowCreate: X,
  onRowDelete: pe,
  isLoading: de = !1,
  empty: re = "No records found",
  ariaLabel: K,
  className: ie,
  onRowClick: te
}) {
  const [oe, _e] = W([]), [ve, Ce] = W(
    /* @__PURE__ */ new Map()
  ), [Le, we] = W(1), [Te, Me] = W(u), [st, rt] = W(
    () => e.map((P, B) => ls(P, B))
  ), [He, At] = W(
    () => new Set(
      e.map((P, B) => P.visible !== !1 ? ls(P, B) : "").filter(Boolean)
    )
  ), [ot, wt] = W({}), [U, I] = W(!1), [q, Q] = W([]), [ue, J] = W(
    null
  ), [ye, ze] = W(null), [Pe, Ye] = W({}), [ut, pn] = W(0), [G, Se] = W(L), et = Y(null), Dt = Y(null), $t = xe(() => {
    const P = /* @__PURE__ */ new Map();
    return e.forEach((B, ae) => P.set(ls(B, ae), B)), P;
  }, [e]), Ne = xe(
    () => st.filter((P) => He.has(P)).map((P) => ({ key: P, column: $t.get(P) })).filter(
      (P) => P.column != null
    ),
    [st, He, $t]
  ), Ke = xe(
    () => Ia(Ne, ot),
    [Ne, ot]
  ), lt = Z !== "None" || pe != null || se, We = xe(() => {
    if (m) {
      const P = C ?? t.length, B = Math.max(1, Math.ceil(P / Te));
      return {
        items: [...t],
        filtered: [...t],
        total: P,
        pageCount: B,
        pageNumber: Le,
        pageSize: Te,
        sorts: oe,
        filters: ve
      };
    }
    return Pa(
      t,
      {
        sorts: oe,
        filters: ve,
        pageNumber: Le,
        // Without a pager the grid shows every row (Radzen parity); the
        // internal slice only applies when paging UI is on.
        pageSize: c ? Te : Number.MAX_SAFE_INTEGER
      },
      {
        logicalOperator: a,
        caseSensitivity: o,
        types: Object.fromEntries(
          e.filter((P) => P.type != null && P.property != null).map((P) => [
            P.property,
            P.type
          ])
        )
      }
    );
  }, [
    t,
    oe,
    ve,
    Le,
    Te,
    a,
    o,
    e,
    m,
    C,
    c
  ]), Yt = Y(T);
  ge(() => {
    Yt.current = T;
  });
  const H = xe(
    () => [...ve.entries()].filter(([, P]) => P.value !== "" && P.value !== void 0).map(([P, B]) => ({
      property: P,
      operator: B.operator ?? er(
        e.find((ae) => ae.property === P)?.type ?? "string"
      ),
      value: B.value ?? ""
    })),
    [ve, e]
  );
  ge(() => {
    !m || Yt.current == null || Yt.current({
      start: (Le - 1) * Te,
      count: Te,
      pageNumber: Le,
      pageSize: Te,
      sorts: oe,
      filters: H,
      logicalOperator: a
    });
  }, [
    m,
    Le,
    Te,
    oe,
    H,
    a
  ]);
  const le = xe(() => new Set(q), [q]), Ae = xe(() => ue || (E ? Js(We.items, q, Nn) : /* @__PURE__ */ new Set()), [ue, E, We.items, q]), Be = xe(
    () => Ea(We.items, q, e, Ae, Nn),
    [We.items, q, e, Ae]
  ), at = xe(
    () => q.length > 0 ? Ne.filter(
      (P) => P.column.property == null || !le.has(P.column.property)
    ) : Ne,
    [Ne, q, le]
  ), Tt = (P) => {
    P !== "" && _e(Ta(oe, P, { multi: l }));
  }, F = (P, B) => {
    Ce((ae) => {
      const ce = new Map(ae);
      return ce.set(P, B), ce;
    }), we(1);
  }, V = (P) => {
    Me(P), we(1);
  }, ee = (P) => {
    if (y === "None") return;
    const B = n(P), ae = _ ?? [];
    let ce;
    y === "Single" ? ce = ae.length === 1 && ae[0] === B ? [] : [B] : ce = ae.includes(B) ? ae.filter((qe) => qe !== B) : [...ae, B], h?.(ce);
  }, me = (P) => {
    te?.(P);
  }, fe = (P, B, ae) => {
    et.current = { key: P, startX: B, startWidth: ae };
  }, be = (P) => {
    const B = et.current;
    if (!B) return;
    const ae = P - B.startX, ce = Math.max(48, B.startWidth + ae);
    wt((qe) => ({ ...qe, [B.key]: `${ce}px` }));
  }, Ie = () => {
    et.current = null;
  }, Ee = (P) => {
    Dt.current = P;
  }, Ze = (P) => {
    const B = Dt.current;
    Dt.current = null, !(!B || B === P) && rt((ae) => {
      const ce = [...ae], qe = ce.indexOf(B), Lt = ce.indexOf(P);
      return qe < 0 || Lt < 0 ? ae : (ce.splice(qe, 1), ce.splice(Lt, 0, B), ce);
    });
  }, tt = (P) => {
    At((B) => {
      const ae = new Set(B);
      return ae.has(P) ? ae.delete(P) : ae.add(P), ae;
    });
  }, ft = () => {
    const P = Dt.current;
    if (Dt.current = null, !P || !$) return;
    const ae = $t.get(P)?.property;
    ae && (Q(
      (ce) => ce.includes(ae) ? ce : [...ce, ae]
    ), J(null));
  }, nt = (P) => {
    Q((B) => B.filter((ae) => ae !== P)), J(null);
  }, Je = (P) => {
    J((B) => {
      const ae = B ?? (E ? Js(We.items, q, Nn) : /* @__PURE__ */ new Set()), ce = new Set(ae);
      return ce.has(P) ? ce.delete(P) : ce.add(P), ce;
    });
  }, qt = (P) => {
    const B = {};
    e.forEach((ae) => {
      ae.property && (B[ae.property] = Nn(P, ae.property));
    }), Ye(B), ze(String(n(P)));
  }, jt = () => {
    const P = {};
    e.forEach((B) => {
      B.property && B.type === "boolean" && (P[B.property] = !1);
    }), Ye(P), ze("__new__");
  }, Ft = () => {
    ze(null), Ye({});
  }, os = (P) => {
    if (ye === "__new__") {
      const B = Object.fromEntries(
        e.filter((ae) => ae.property).map((ae) => [ae.property, Pe[ae.property]])
      );
      X?.(B);
    } else if (P != null) {
      const B = { ...P, ...Pe };
      ne?.(P, B);
    }
    Ft();
  }, qn = c && (v === "Top" || v === "TopAndBottom"), mn = c && (v === "Bottom" || v === "TopAndBottom"), Br = d && e.some((P) => tr(P, d)), qr = (P, B, ae) => P.render ? P.render(B, { index: 0 }) : xs(Nn(B, P.property), P.format), Fr = (P) => {
    const B = [he.cell];
    return P.align === "center" && B.push(he.center), P.align === "right" && B.push(he.right), P.frozen && B.push(he.frozen), B.join(" ");
  }, Ks = m ? t : We.filtered, Hr = () => {
    const P = Ba(
      Ks,
      at.map((qe) => qe.column)
    ), B = new Blob([`\uFEFF${P}`], {
      type: "text/csv;charset=utf-8"
    }), ae = URL.createObjectURL(B), ce = document.createElement("a");
    ce.href = ae, ce.download = `${N}.csv`, document.body.appendChild(ce), ce.click(), ce.remove(), URL.revokeObjectURL(ae);
  }, Sn = Be.length, gn = xe(() => {
    if (!j || Sn === 0)
      return { start: 0, end: Sn, top: 0, bottom: 0 };
    const P = 5, B = Math.max(
      0,
      Math.floor(ut / A) - P
    ), ae = Math.ceil(G / A) + P * 2, ce = Math.min(Sn, B + ae), qe = B * A, Lt = Math.max(0, (Sn - ce) * A);
    return { start: B, end: ce, top: qe, bottom: Lt };
  }, [j, Sn, ut, A, G]), ks = at.length + (lt ? 1 : 0);
  return /* @__PURE__ */ M("div", { className: [he.grid, ie].filter(Boolean).join(" "), children: [
    qn && /* @__PURE__ */ s(
      zs,
      {
        pageNumber: We.pageNumber,
        pageSize: We.pageSize,
        count: We.total,
        pageSizeOptions: f,
        pageNumbersCount: k,
        showSummary: b,
        showPageSizeSelector: p,
        ariaLabel: mn ? "Pagination (top)" : "Pagination",
        onPageChange: we,
        onPageSizeChange: V
      }
    ),
    ($ || se || g || z) && /* @__PURE__ */ M("div", { className: he.toolbar, children: [
      $ && /* @__PURE__ */ s(
        "div",
        {
          className: [
            he.groupPanel,
            q.length > 0 ? he.groupPanelActive : ""
          ].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: $ ? (P) => P.preventDefault() : void 0,
          onDrop: $ ? ft : void 0,
          children: q.length > 0 ? q.map((P) => {
            const B = e.find((ae) => ae.property === P)?.title ?? P;
            return /* @__PURE__ */ M("span", { className: he.groupChip, children: [
              B,
              ":",
              " ",
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: he.groupRemove,
                  onClick: () => nt(P),
                  "aria-label": `Remove group by ${B}`,
                  children: /* @__PURE__ */ s($e, { name: "close", size: "sm" })
                }
              )
            ] }, P);
          }) : /* @__PURE__ */ s("span", { className: he.groupPanelText, children: O })
        }
      ),
      se && /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          className: he.pickerButton,
          onClick: jt,
          children: "Add row"
        }
      ),
      g && /* @__PURE__ */ M("div", { className: he.picker, children: [
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: he.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": U,
            onClick: () => I((P) => !P),
            children: w
          }
        ),
        U && /* @__PURE__ */ s(
          "div",
          {
            className: he.pickerPanel,
            role: "menu",
            "aria-label": w,
            children: e.map((P, B) => {
              const ae = ls(P, B);
              return /* @__PURE__ */ M("label", { className: he.pickerItem, children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "checkbox",
                    checked: He.has(ae),
                    onChange: () => tt(ae)
                  }
                ),
                P.title ?? P.property
              ] }, ae);
            })
          }
        )
      ] }),
      z && /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          className: he.pickerButton,
          onClick: Hr,
          children: "Export CSV"
        }
      )
    ] }),
    /* @__PURE__ */ M(
      "div",
      {
        className: [he.data, j ? he.virtualScroller : ""].filter(Boolean).join(" "),
        style: j ? { maxHeight: L } : void 0,
        onScroll: j ? (P) => {
          pn(P.currentTarget.scrollTop), Se(P.currentTarget.clientHeight);
        } : void 0,
        children: [
          /* @__PURE__ */ M(
            "table",
            {
              className: he.table,
              role: "grid",
              "aria-rowcount": (j ? Sn : We.total) + 1,
              "aria-label": K,
              "aria-busy": de || void 0,
              children: [
                /* @__PURE__ */ M("colgroup", { children: [
                  at.map(({ key: P, column: B }) => /* @__PURE__ */ s(
                    "col",
                    {
                      style: {
                        width: ot[P] ?? B.width,
                        minWidth: B.minWidth,
                        maxWidth: B.maxWidth
                      }
                    },
                    P
                  )),
                  lt && /* @__PURE__ */ s("col", { style: { width: "8rem" } })
                ] }),
                /* @__PURE__ */ M("thead", { children: [
                  /* @__PURE__ */ M("tr", { children: [
                    at.map(({ key: P, column: B }) => {
                      const ae = zi(B, r), ce = oe.find((_t) => _t.property === B.property), qe = ce ? oe.indexOf(ce) + 1 : 0, Lt = B.align ?? "left";
                      return /* @__PURE__ */ M(
                        "th",
                        {
                          "aria-sort": ae && ce ? Di[ce.sortOrder] : "none",
                          className: [
                            he.header,
                            Lt === "center" ? he.center : "",
                            Lt === "right" ? he.right : "",
                            B.frozen ? he.frozen : ""
                          ].filter(Boolean).join(" "),
                          style: B.frozen ? { left: Ke[P] } : void 0,
                          scope: "col",
                          draggable: S || $ || void 0,
                          onDragStart: S || $ ? (_t) => {
                            _t.dataTransfer && (_t.dataTransfer.effectAllowed = "move"), Ee(P);
                          } : void 0,
                          onDragOver: S ? (_t) => _t.preventDefault() : void 0,
                          onDrop: S ? () => Ze(P) : void 0,
                          children: [
                            ae ? /* @__PURE__ */ M(
                              "button",
                              {
                                type: "button",
                                className: he.sortButton,
                                onClick: () => B.property != null && Tt(B.property),
                                "aria-label": ce ? ce.sortOrder === "Ascending" ? `Sort ${B.title ?? B.property} descending` : `Sort ${B.title ?? B.property} ascending` : `Sort ${B.title ?? B.property} ascending`,
                                children: [
                                  B.title ?? B.property,
                                  ce && /* @__PURE__ */ s(
                                    "span",
                                    {
                                      className: he.sortIndicator,
                                      "aria-hidden": "true",
                                      children: ce.sortOrder === "Ascending" ? "▲" : "▼"
                                    }
                                  ),
                                  qe > 1 && i && /* @__PURE__ */ s("span", { className: he.sortIndex, children: qe })
                                ]
                              }
                            ) : B.title ?? B.property,
                            x && /* @__PURE__ */ s(
                              "span",
                              {
                                className: he.resizeHandle,
                                "data-dx-grid-resize": !0,
                                role: "separator",
                                "aria-orientation": "vertical",
                                "aria-label": `Resize ${B.title ?? B.property}`,
                                onMouseDown: (_t) => {
                                  _t.preventDefault(), _t.stopPropagation();
                                  const Mn = ot[P] ?? B.width, Ht = Mn ? parseFloat(Mn) : 96;
                                  fe(
                                    P,
                                    _t.clientX,
                                    Number.isFinite(Ht) ? Ht : 96
                                  );
                                },
                                onMouseMove: (_t) => {
                                  et.current?.key === P && be(_t.clientX);
                                },
                                onMouseUp: Ie,
                                onMouseLeave: () => {
                                  et.current?.key === P && Ie();
                                }
                              }
                            )
                          ]
                        },
                        P
                      );
                    }),
                    lt && /* @__PURE__ */ s("th", { className: he.header, scope: "col", children: "Actions" })
                  ] }),
                  Br && /* @__PURE__ */ s("tr", { children: at.map(({ key: P, column: B }) => {
                    if (!tr(B, d))
                      return /* @__PURE__ */ s("td", { className: he.filterCell }, P);
                    const ae = ve.get(B.property ?? "");
                    return /* @__PURE__ */ M("td", { className: he.filterCell, children: [
                      /* @__PURE__ */ M(
                        "label",
                        {
                          className: he.visuallyHidden,
                          htmlFor: `df-${B.property}`,
                          children: [
                            "Filter ",
                            B.title ?? B.property
                          ]
                        }
                      ),
                      /* @__PURE__ */ s(
                        "select",
                        {
                          id: `df-${B.property}`,
                          className: he.filterSelect,
                          value: ae?.operator ?? er(B.type ?? "string"),
                          onChange: (ce) => F(B.property ?? "", {
                            ...ae,
                            operator: ce.target.value
                          }),
                          "aria-label": `${B.title ?? B.property} operator`,
                          children: Nr.filter((ce) => ce !== "Custom").map(
                            (ce) => /* @__PURE__ */ s("option", { value: ce, children: ce }, ce)
                          )
                        }
                      ),
                      /* @__PURE__ */ s(
                        "input",
                        {
                          className: he.filterInput,
                          value: ae?.value ?? "",
                          onChange: (ce) => F(B.property ?? "", {
                            ...ae,
                            value: ce.target.value
                          }),
                          placeholder: `Filter ${B.title ?? B.property}`,
                          "aria-label": `${B.title ?? B.property} value`
                        }
                      )
                    ] }, P);
                  }) })
                ] }),
                /* @__PURE__ */ M("tbody", { children: [
                  ye === "__new__" && /* @__PURE__ */ M("tr", { className: he.editRow, children: [
                    at.map(({ key: P, column: B }) => /* @__PURE__ */ s("td", { className: he.editCell, children: B.property && /* @__PURE__ */ s(
                      "input",
                      {
                        className: he.editInput,
                        type: B.type === "number" ? "number" : B.type === "boolean" ? "checkbox" : "text",
                        checked: B.type === "boolean" ? !!Pe[B.property] : void 0,
                        value: B.type === "boolean" ? void 0 : String(Pe[B.property] ?? ""),
                        onChange: (ae) => Ye((ce) => ({
                          ...ce,
                          [B.property]: B.type === "boolean" ? ae.target.checked : ae.target.value
                        })),
                        "aria-label": `${B.title ?? B.property} (new)`
                      }
                    ) }, P)),
                    lt && /* @__PURE__ */ M("td", { className: he.editCell, children: [
                      /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          className: he.commandButton,
                          onClick: () => os(),
                          children: "Save"
                        }
                      ),
                      /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          className: he.commandButton,
                          onClick: Ft,
                          children: "Cancel"
                        }
                      )
                    ] })
                  ] }),
                  gn.top > 0 && /* @__PURE__ */ s("tr", { className: he.spacerRow, "aria-hidden": "true", children: /* @__PURE__ */ s(
                    "td",
                    {
                      colSpan: ks,
                      style: { height: gn.top }
                    }
                  ) }),
                  Be.slice(gn.start, gn.end).map((P, B) => {
                    const ae = gn.start + B, ce = j ? ae + 2 : void 0;
                    if (P.type === "group" && P.group) {
                      const Ht = Ae.has(P.group.key);
                      return /* @__PURE__ */ s(
                        "tr",
                        {
                          className: he.groupRow,
                          "aria-rowindex": ce,
                          children: /* @__PURE__ */ s("td", { colSpan: ks, className: he.groupCell, children: /* @__PURE__ */ M(
                            "button",
                            {
                              type: "button",
                              className: he.groupToggle,
                              "aria-expanded": Ht,
                              style: {
                                paddingInlineStart: `${P.group.level * 16}px`
                              },
                              onClick: () => Je(P.group.key),
                              children: [
                                /* @__PURE__ */ s("span", { "aria-hidden": "true", children: Ht ? "▼" : "▶" }),
                                P.group.title,
                                ": ",
                                P.group.display,
                                " (",
                                P.group.count,
                                ")"
                              ]
                            }
                          ) })
                        },
                        `group-${P.group.key}`
                      );
                    }
                    const qe = P.row, Lt = n(qe), _t = (_ ?? []).includes(Lt), Mn = ye != null && ye === String(Lt);
                    return /* @__PURE__ */ M(
                      "tr",
                      {
                        "aria-rowindex": ce,
                        className: [
                          te || y !== "None" ? he.clickable : "",
                          _t ? he.selected : "",
                          Mn ? he.editRow : ""
                        ].filter(Boolean).join(" "),
                        "aria-selected": y !== "None" ? _t : void 0,
                        onClick: te || y !== "None" ? (Ht) => {
                          Ei(Ht.target) || (me(qe), ee(qe));
                        } : void 0,
                        children: [
                          at.map(({ key: Ht, column: xt }) => /* @__PURE__ */ s(
                            "td",
                            {
                              className: Fr(xt),
                              style: xt.frozen ? { left: Ke[Ht] } : void 0,
                              children: Mn && xt.property ? /* @__PURE__ */ s(
                                "input",
                                {
                                  className: he.editInput,
                                  type: xt.type === "number" ? "number" : xt.type === "boolean" ? "checkbox" : "text",
                                  checked: xt.type === "boolean" ? !!Pe[xt.property] : void 0,
                                  value: xt.type === "boolean" ? void 0 : String(Pe[xt.property] ?? ""),
                                  onChange: (Ws) => Ye((Kr) => ({
                                    ...Kr,
                                    [xt.property]: xt.type === "boolean" ? Ws.target.checked : Ws.target.value
                                  })),
                                  "aria-label": `${xt.title ?? xt.property} (edit)`
                                }
                              ) : qr(xt, qe)
                            },
                            Ht
                          )),
                          lt && /* @__PURE__ */ s("td", { className: he.commandCell, children: Mn ? /* @__PURE__ */ M(ke, { children: [
                            /* @__PURE__ */ s(
                              "button",
                              {
                                type: "button",
                                className: he.commandButton,
                                onClick: () => os(qe),
                                children: "Save"
                              }
                            ),
                            /* @__PURE__ */ s(
                              "button",
                              {
                                type: "button",
                                className: he.commandButton,
                                onClick: Ft,
                                children: "Cancel"
                              }
                            )
                          ] }) : /* @__PURE__ */ M(ke, { children: [
                            Z !== "None" && /* @__PURE__ */ s(
                              "button",
                              {
                                type: "button",
                                className: he.commandButton,
                                onClick: () => qt(qe),
                                children: "Edit"
                              }
                            ),
                            pe && /* @__PURE__ */ s(
                              "button",
                              {
                                type: "button",
                                className: he.commandButton,
                                onClick: () => pe(qe),
                                children: "Delete"
                              }
                            )
                          ] }) })
                        ]
                      },
                      Lt
                    );
                  }),
                  gn.bottom > 0 && /* @__PURE__ */ s("tr", { className: he.spacerRow, "aria-hidden": "true", children: /* @__PURE__ */ s(
                    "td",
                    {
                      colSpan: ks,
                      style: { height: gn.bottom }
                    }
                  ) })
                ] }),
                D && D.length > 0 && /* @__PURE__ */ s("tfoot", { children: /* @__PURE__ */ M("tr", { className: he.footerRow, children: [
                  at.map(({ key: P, column: B }) => {
                    const ae = D.filter(
                      (ce) => ce.property === B.property
                    );
                    return /* @__PURE__ */ s(
                      "td",
                      {
                        className: [
                          he.footerCell,
                          B.align === "right" ? he.right : "",
                          B.align === "center" ? he.center : ""
                        ].filter(Boolean).join(" "),
                        children: ae.map((ce, qe) => /* @__PURE__ */ M(
                          "div",
                          {
                            className: he.footerValue,
                            children: [
                              ce.title ? `${ce.title}: ` : "",
                              xs(
                                Ra(Ks, ce, Nn),
                                ce.format
                              )
                            ]
                          },
                          `${ce.property}-${ce.type}-${qe}`
                        ))
                      },
                      P
                    );
                  }),
                  lt && /* @__PURE__ */ s("td", { className: he.footerCell })
                ] }) })
              ]
            }
          ),
          We.items.length === 0 && !de && /* @__PURE__ */ s("div", { className: he.empty, children: re }),
          de && /* @__PURE__ */ s("div", { className: he.loading, role: "status", children: "Loading…" })
        ]
      }
    ),
    mn && /* @__PURE__ */ s(
      zs,
      {
        pageNumber: We.pageNumber,
        pageSize: We.pageSize,
        count: We.total,
        pageSizeOptions: f,
        pageNumbersCount: k,
        showSummary: b,
        showPageSizeSelector: p,
        ariaLabel: qn ? "Pagination (bottom)" : "Pagination",
        onPageChange: we,
        onPageSizeChange: V
      }
    )
  ] });
}
const Ii = "_wrap_1e4xo_1", Ai = "_grid_1e4xo_7", Ti = "_stacked_1e4xo_13", ji = "_item_1e4xo_19", Li = "_empty_1e4xo_25", Xn = {
  wrap: Ii,
  grid: Ai,
  stacked: Ti,
  item: ji,
  empty: Li
};
function Dk({
  data: e,
  pageSize: t = 10,
  pageSizeOptions: n,
  wrapItems: r = !1,
  itemTemplate: l,
  emptyMessage: i = "No records found",
  emptyTemplate: d,
  loadingTemplate: o,
  isLoading: a = !1,
  showPageSizeSelector: c = !0,
  className: u,
  ariaLabel: f = "Data list"
}) {
  const [k, v] = W(1), [b, p] = W(t), y = e.length, _ = Math.max(1, Math.ceil(y / b)), h = Math.min(Math.max(1, k), _), g = xe(() => {
    const x = (h - 1) * b;
    return e.slice(x, x + b);
  }, [e, h, b]), w = r ? Xn.grid : Xn.stacked;
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Xn.wrap, u].filter(Boolean).join(" "),
      "aria-label": f,
      children: [
        a && o != null ? o : y === 0 ? d ?? /* @__PURE__ */ s("div", { className: Xn.empty, children: i }) : /* @__PURE__ */ s("div", { className: w, children: g.map((x, S) => /* @__PURE__ */ s("div", { className: Xn.item, children: l ? l(x, S) : String(x) }, S)) }),
        /* @__PURE__ */ s(
          zs,
          {
            pageNumber: h,
            pageSize: b,
            count: y,
            pageSizeOptions: n,
            showPageSizeSelector: c,
            onPageChange: v,
            onPageSizeChange: (x) => {
              p(x), v(1);
            }
          }
        )
      ]
    }
  );
}
const Pi = "_label_1qfpw_1", Ri = {
  label: Pi
}, zk = Fe(function({ className: t, children: n, ...r }, l) {
  return /* @__PURE__ */ s(
    "label",
    {
      ref: l,
      className: [Ri.label, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}), Bi = "_textbox_1wq7t_1", qi = "_invalid_1wq7t_37", Fi = "_xs_1wq7t_44", Hi = "_sm_1wq7t_50", Ki = "_md_1wq7t_56", Wi = "_lg_1wq7t_62", Ui = "_xl_1wq7t_68", Ns = {
  textbox: Bi,
  invalid: qi,
  xs: Fi,
  sm: Hi,
  md: Ki,
  lg: Wi,
  xl: Ui
}, Vi = Fe(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    visible: l = !0,
    type: i = "text",
    ...d
  }, o) {
    return l === !1 ? null : /* @__PURE__ */ s(
      "input",
      {
        ref: o,
        type: i,
        "data-size": t,
        className: [
          Ns.textbox,
          Ns[t],
          n ? Ns.invalid : null,
          r
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...d
      }
    );
  }
), Ek = Vi, Xi = "_checkbox_e1een_1", Gi = {
  checkbox: Xi
}, Ik = Fe(
  function({ className: t, indeterminate: n = !1, ...r }, l) {
    const i = Y(null);
    return ge(() => {
      i.current && (i.current.indeterminate = n);
    }, [n]), /* @__PURE__ */ s(
      "input",
      {
        ref: (d) => {
          i.current = d, typeof l == "function" ? l(d) : l && (l.current = d);
        },
        type: "checkbox",
        className: [Gi.checkbox, t].filter(Boolean).join(" "),
        ...r
      }
    );
  }
), Yi = {
  switch: "_switch_1y0ld_1"
}, Zi = Fe(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ s(
    "input",
    {
      ref: r,
      type: "checkbox",
      role: "switch",
      className: [Yi.switch, t].filter(Boolean).join(" "),
      ...n
    }
  );
}), Ji = "_trigger_18hdv_1", Qi = "_tooltip_18hdv_7", ec = "_top_18hdv_34", tc = "_right_18hdv_40", nc = "_bottom_18hdv_46", sc = "_left_18hdv_52", rc = "_arrow_18hdv_58", oc = "_floating_18hdv_70", an = {
  trigger: Ji,
  tooltip: Qi,
  "se-tooltip-in": "_se-tooltip-in_18hdv_1",
  top: ec,
  right: tc,
  bottom: nc,
  left: sc,
  arrow: rc,
  floating: oc,
  "se-floating-tooltip-in": "_se-floating-tooltip-in_18hdv_1"
}, as = 8;
function lc(e, t) {
  switch (t) {
    case "bottom":
      return {
        top: e.bottom + as,
        left: e.left + e.width / 2,
        transform: "translate(-50%, 0)"
      };
    case "left":
      return {
        top: e.top + e.height / 2,
        left: e.left - as,
        transform: "translate(-100%, -50%)"
      };
    case "right":
      return {
        top: e.top + e.height / 2,
        left: e.right + as,
        transform: "translate(0, -50%)"
      };
    default:
      return {
        top: e.top - as,
        left: e.left + e.width / 2,
        transform: "translate(-50%, -100%)"
      };
  }
}
function Ak({
  content: e,
  children: t,
  placement: n = "top",
  delayMs: r = 300,
  durationMs: l,
  targetSelector: i,
  className: d
}) {
  const o = Re(), a = Y(null), c = Y(null), u = Y(null), [f, k] = W(!1), [v, b] = W(null), p = () => {
    a.current !== null && (window.clearTimeout(a.current), a.current = null), c.current !== null && (window.clearTimeout(c.current), c.current = null);
  }, y = () => {
    a.current = window.setTimeout(() => {
      k(!0), l != null && (c.current = window.setTimeout(() => k(!1), l));
    }, r);
  }, _ = () => {
    p(), k(!1);
  };
  if (ge(() => () => p(), []), ge(() => {
    if (i || !f) return;
    const g = (w) => {
      w.key === "Escape" && _();
    };
    return window.addEventListener("keydown", g), () => window.removeEventListener("keydown", g);
  }, [i, f]), ge(() => {
    if (!i) return;
    let g = null, w = null, x = null;
    const S = () => {
      g !== null && (window.clearTimeout(g), g = null);
    }, $ = () => {
      w !== null && (window.clearTimeout(w), w = null);
    }, O = () => {
      S(), $(), x = null, b(null);
    }, E = (T) => {
      S(), $(), x = T, g = window.setTimeout(() => {
        g = null, b(T), l != null && (w = window.setTimeout(O, l));
      }, r);
    }, D = (T) => T instanceof Element ? T.closest(i) : null, z = (T) => {
      const j = D(T.target);
      !j || j === x || E(j);
    }, N = (T) => {
      const j = D(T.target);
      if (!j || j !== x) return;
      const A = T.relatedTarget;
      A instanceof Element && j.contains(A) || O();
    }, m = (T) => {
      T.key === "Escape" && O();
    }, C = () => O();
    return document.addEventListener("mouseover", z), document.addEventListener("mouseout", N), document.addEventListener("focusin", z), document.addEventListener("focusout", N), document.addEventListener("keydown", m), document.addEventListener("scroll", C, !0), window.addEventListener("resize", C), () => {
      S(), $(), document.removeEventListener("mouseover", z), document.removeEventListener("mouseout", N), document.removeEventListener("focusin", z), document.removeEventListener("focusout", N), document.removeEventListener("keydown", m), document.removeEventListener("scroll", C, !0), window.removeEventListener("resize", C), x = null, b(null);
    };
  }, [i, r, l]), Ds(() => {
    const g = v;
    if (!g) return;
    const w = g.getAttribute("aria-describedby");
    return g.setAttribute(
      "aria-describedby",
      [w, o].filter(Boolean).join(" ")
    ), () => {
      w == null ? g.removeAttribute("aria-describedby") : g.setAttribute("aria-describedby", w);
    };
  }, [v, o]), Ds(() => {
    const g = u.current, w = v;
    !g || !w || Object.assign(
      g.style,
      lc(w.getBoundingClientRect(), n)
    );
  }, [v, n]), i)
    return v ? /* @__PURE__ */ M(
      "span",
      {
        ref: u,
        role: "tooltip",
        id: o,
        className: [
          an.tooltip,
          an[n],
          an.floating,
          d
        ].filter(Boolean).join(" "),
        children: [
          e,
          /* @__PURE__ */ s("span", { className: an.arrow, "aria-hidden": "true" })
        ]
      }
    ) : null;
  const h = gt(t) ? Ls(t, {
    "aria-describedby": [
      t.props["aria-describedby"],
      f ? o : null
    ].filter((g) => typeof g == "string").join(" ") || void 0
  }) : t;
  return (
    // Presentational hit-area: hover/focus handlers here, semantics and
    // keyboard interaction live on the child trigger.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ M(
      "span",
      {
        className: [an.trigger, d].filter(Boolean).join(" "),
        onMouseEnter: y,
        onMouseLeave: _,
        onFocus: y,
        onBlur: _,
        children: [
          h,
          f && /* @__PURE__ */ M(
            "span",
            {
              role: "tooltip",
              id: o,
              className: [an.tooltip, an[n]].filter(Boolean).join(" "),
              children: [
                e,
                /* @__PURE__ */ s("span", { className: an.arrow, "aria-hidden": "true" })
              ]
            }
          )
        ]
      }
    )
  );
}
const ac = "_dialog_18an3_1", ic = "_sm_18an3_72", cc = "_resizable_18an3_78", dc = "_md_18an3_81", uc = "_lg_18an3_85", fc = "_header_18an3_89", _c = "_title_18an3_100", hc = "_description_18an3_107", pc = "_close_18an3_114", mc = "_body_18an3_144", gc = "_footer_18an3_156", Jt = {
  dialog: ac,
  "se-dialog-in": "_se-dialog-in_18an3_1",
  sm: ic,
  resizable: cc,
  md: dc,
  lg: uc,
  header: fc,
  title: _c,
  description: hc,
  close: pc,
  body: mc,
  footer: gc
};
function xc({
  open: e,
  onClose: t,
  title: n,
  description: r,
  children: l,
  footer: i,
  size: d = "md",
  width: o,
  height: a,
  closeOnOverlayClick: c = !0,
  closeOnEsc: u = !0,
  resizable: f = !1,
  canClose: k,
  className: v
}) {
  const b = Y(null), p = Re(), y = Re(), _ = Y(t);
  ge(() => {
    _.current = t;
  });
  const h = Y(k);
  ge(() => {
    h.current = k;
  });
  const g = Y(u);
  ge(() => {
    g.current = u;
  });
  const w = Y(!1), x = Y(!1), S = R(() => {
    if (w.current) return;
    const O = h.current?.();
    if (O instanceof Promise) {
      O.then((E) => {
        E && !w.current && (w.current = !0, _.current());
      });
      return;
    }
    O !== !1 && (w.current = !0, _.current());
  }, []), $ = R(() => {
    if (x.current) {
      x.current = !1;
      return;
    }
    _.current();
  }, []);
  return ge(() => {
    const O = b.current;
    if (O)
      if (e && !O.open) {
        const E = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        O.showModal(), (O.querySelector(
          'button[aria-label="Close dialog"]'
        ) ?? O.querySelector("button"))?.focus();
        const z = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const N = (m) => {
          m.preventDefault(), g.current && S();
        };
        return O.addEventListener("cancel", N), () => {
          O.removeEventListener("cancel", N), document.body.style.overflow = z, E?.focus({ preventScroll: !0 });
        };
      } else !e && O.open && (x.current = w.current, w.current = !1, O.close());
  }, [e, S]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button.
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ M(
    "dialog",
    {
      ref: b,
      className: [
        Jt.dialog,
        Jt[d],
        f ? Jt.resizable : null,
        v
      ].filter(Boolean).join(" "),
      style: {
        width: o ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: o != null ? "none" : void 0,
        height: a ?? void 0
      },
      onClose: $,
      onClick: (O) => {
        O.target === b.current && c && S();
      },
      "aria-modal": "true",
      "aria-labelledby": n ? p : void 0,
      "aria-describedby": r ? y : void 0,
      children: [
        n && /* @__PURE__ */ M("header", { className: Jt.header, children: [
          /* @__PURE__ */ M("div", { children: [
            /* @__PURE__ */ s("h2", { id: p, className: Jt.title, children: n }),
            r && /* @__PURE__ */ s("p", { id: y, className: Jt.description, children: r })
          ] }),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: Jt.close,
              onClick: () => {
                S();
              },
              "aria-label": "Close dialog",
              children: /* @__PURE__ */ s($e, { name: "close", size: "sm" })
            }
          )
        ] }),
        l && /* @__PURE__ */ s("div", { className: Jt.body, children: l }),
        i && /* @__PURE__ */ s("footer", { className: Jt.footer, children: i })
      ]
    }
  );
}
const yc = "_typography_1jy8x_1", bc = "_h1_1jy8x_39", vc = "_h2_1jy8x_45", kc = "_h3_1jy8x_51", wc = "_h4_1jy8x_57", $c = "_h5_1jy8x_63", Nc = "_h6_1jy8x_69", Oc = "_button_1jy8x_99", Sc = "_caption_1jy8x_106", Mc = "_overline_1jy8x_112", Os = {
  typography: yc,
  "display-1": "_display-1_1jy8x_8",
  "display-2": "_display-2_1jy8x_13",
  "display-3": "_display-3_1jy8x_18",
  "display-4": "_display-4_1jy8x_23",
  "display-5": "_display-5_1jy8x_28",
  "display-6": "_display-6_1jy8x_33",
  h1: bc,
  h2: vc,
  h3: kc,
  h4: wc,
  h5: $c,
  h6: Nc,
  "subtitle-1": "_subtitle-1_1jy8x_75",
  "subtitle-2": "_subtitle-2_1jy8x_81",
  "body-1": "_body-1_1jy8x_87",
  "body-2": "_body-2_1jy8x_92",
  button: Oc,
  caption: Sc,
  overline: Mc,
  "align-left": "_align-left_1jy8x_121",
  "align-center": "_align-center_1jy8x_125",
  "align-right": "_align-right_1jy8x_129",
  "align-justify": "_align-justify_1jy8x_133"
}, Cc = {
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
}, Dc = {
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
}, zc = {
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
}, Ec = {
  Left: "align-left",
  Right: "align-right",
  Center: "align-center",
  Justify: "align-justify",
  Start: "align-left",
  End: "align-right",
  JustifyAll: "align-justify"
}, Ic = Fe(function({
  textStyle: t = "Body1",
  tagName: n = "Auto",
  textAlign: r,
  text: l,
  visible: i = !0,
  className: d,
  children: o,
  ...a
}, c) {
  if (i === !1) return null;
  const u = n === "Auto" ? Cc[t] : zc[n];
  return /* @__PURE__ */ s(
    u,
    {
      ref: c,
      className: [
        Os.typography,
        Os[Dc[t]],
        r ? Os[Ec[r]] : null,
        d
      ].filter(Boolean).join(" "),
      ...a,
      children: l ?? o
    }
  );
}), Cr = Bn(null);
function Tk() {
  const e = _n(Cr);
  if (!e)
    throw new Error("useDialog must be used within a <DialogProvider>");
  return e;
}
function jk({ children: e }) {
  const [t, n] = W([]), r = Y(0), l = xe(
    () => ({
      confirm: (o = {}) => new Promise((a) => {
        r.current += 1;
        const c = r.current;
        n((u) => [...u, { seq: c, kind: "confirm", options: o, resolve: a }]);
      }),
      alert: (o = {}) => new Promise((a) => {
        r.current += 1;
        const c = r.current;
        n((u) => [...u, { seq: c, kind: "alert", options: o, resolve: a }]);
      })
    }),
    []
  ), i = t[0], d = (o) => {
    i && (i.kind === "confirm" ? i.resolve(o) : i.resolve(), n((a) => a.slice(1)));
  };
  return /* @__PURE__ */ M(Cr.Provider, { value: l, children: [
    e,
    /* @__PURE__ */ s(
      xc,
      {
        open: t.length > 0,
        onClose: () => d(!1),
        title: i?.options.title ?? (i?.kind === "confirm" ? "Confirm" : "Alert"),
        size: i?.options.size,
        footer: i?.kind === "confirm" ? /* @__PURE__ */ M(ke, { children: [
          /* @__PURE__ */ s(ws, { variant: "text", onClick: () => d(!1), children: i.options.cancelText ?? "Cancel" }),
          /* @__PURE__ */ s(
            ws,
            {
              severity: i.options.tone ?? "primary",
              onClick: () => d(!0),
              children: i.options.confirmText ?? "Confirm"
            }
          )
        ] }) : /* @__PURE__ */ s(ws, { onClick: () => d(!0), children: i?.kind === "alert" ? i.options.okText ?? "OK" : "OK" }),
        children: i?.options.message != null && /* @__PURE__ */ s(Ic, { textStyle: "Body1", children: i.options.message })
      },
      i?.seq ?? 0
    )
  ] });
}
const Ac = "_viewport_lo2x9_1", Tc = "_topLeft_lo2x9_13", jc = "_topRight_lo2x9_20", Lc = "_bottomLeft_lo2x9_25", Pc = "_toast_lo2x9_30", Rc = "_leaving_lo2x9_61", Bc = "_info_lo2x9_77", qc = "_success_lo2x9_86", Fc = "_warning_lo2x9_95", Hc = "_danger_lo2x9_104", Kc = "_content_lo2x9_113", Wc = "_title_lo2x9_118", Uc = "_description_lo2x9_141", Vc = "_dismiss_lo2x9_148", Xc = "_actions_lo2x9_169", Gc = "_action_lo2x9_169", Yc = "_cancel_lo2x9_177", Zc = "_progress_lo2x9_215", Nt = {
  viewport: Ac,
  topLeft: Tc,
  topRight: jc,
  bottomLeft: Lc,
  toast: Pc,
  "se-toast-in": "_se-toast-in_lo2x9_1",
  leaving: Rc,
  "se-toast-out": "_se-toast-out_lo2x9_1",
  info: Bc,
  success: qc,
  warning: Fc,
  danger: Hc,
  content: Kc,
  title: Wc,
  description: Uc,
  dismiss: Vc,
  actions: Xc,
  action: Gc,
  cancel: Yc,
  progress: Zc,
  "se-toast-progress": "_se-toast-progress_lo2x9_1"
}, Dr = Bn(null);
function Lk() {
  const e = _n(Dr);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const Jc = 200, Qc = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function Pk({
  children: e,
  durationMs: t = 4e3,
  position: n = "bottom-right",
  pauseOnHover: r = !0,
  className: l
}) {
  const [i, d] = W([]), [o, a] = W(!1), c = Y([]), u = Y(/* @__PURE__ */ new Map()), f = Y(!1), k = Y(0), v = (N) => {
    f.current = N, a(N);
  }, b = R((N) => {
    const m = u.current.get(N);
    m && (window.clearTimeout(m.timeoutId), m.remaining = Math.max(
      0,
      m.remaining - (Date.now() - m.startedAt)
    ));
  }, []), p = R((N) => {
    const m = u.current.get(N);
    m && (window.clearTimeout(m.timeoutId), u.current.delete(N));
  }, []), y = R(
    (N) => {
      p(N), d((m) => {
        const C = m.filter((T) => T.id !== N);
        return c.current = C, C;
      });
    },
    [p]
  ), _ = R(
    (N) => {
      const m = c.current.find((C) => C.id === N);
      !m || m.leaving || (m.onAutoClose?.(), y(N));
    },
    [y]
  ), h = R(
    (N) => {
      const m = u.current.get(N);
      !m || m.remaining <= 0 || (m.startedAt = Date.now(), m.timeoutId = window.setTimeout(() => _(N), m.remaining));
    },
    [_]
  ), g = R(() => {
    f.current || u.current.forEach((N, m) => b(m)), v(!0);
  }, [b]), w = R(() => {
    u.current.forEach((N, m) => h(m)), v(!1);
  }, [h]);
  ge(() => {
    if (!r) return;
    const N = () => {
      document.hidden ? g() : w();
    };
    return document.addEventListener("visibilitychange", N), () => document.removeEventListener("visibilitychange", N);
  }, [r, g, w]);
  const x = R(
    (N) => {
      const m = c.current.find((C) => C.id === N);
      !m || m.leaving || (m.onDismiss?.(), d((C) => {
        const T = C.map(
          (j) => j.id === N ? { ...j, leaving: !0 } : j
        );
        return c.current = T, T;
      }), window.setTimeout(() => y(N), Jc));
    },
    [y]
  ), S = R(
    (N) => {
      if (N.durationMs <= 0) return;
      const m = {
        remaining: N.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      u.current.set(N.id, m), f.current || h(N.id);
    },
    [h]
  ), $ = R(
    (N) => {
      const m = c.current.find((T) => T.id === N.id), C = {
        id: N.id ?? ++k.current,
        title: N.title,
        description: N.description,
        severity: N.severity ?? "info",
        durationMs: N.durationMs ?? t,
        action: N.action,
        cancel: N.cancel,
        dismissible: N.dismissible ?? !0,
        closeOnClick: N.closeOnClick ?? !1,
        showProgress: N.showProgress ?? !1,
        position: N.position ?? n,
        onDismiss: N.onDismiss,
        onAutoClose: N.onAutoClose
      };
      d((T) => {
        const j = m ? T.map(
          (A) => A.id === C.id ? { ...C, leaving: !1 } : A
        ) : [...T, C];
        return c.current = j, j;
      }), m && p(C.id), S(C);
    },
    [t, n, S, p]
  ), O = xe(() => ({ toast: $ }), [$]), E = xe(
    () => Array.from(/* @__PURE__ */ new Set([n, ...i.map((N) => N.position)])),
    [n, i]
  ), D = r ? g : void 0, z = r ? w : void 0;
  return /* @__PURE__ */ M(Dr.Provider, { value: O, children: [
    e,
    E.map((N) => /* @__PURE__ */ s(
      "div",
      {
        className: [Nt.viewport, Nt[Qc[N]], l].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: D,
        onMouseLeave: z,
        children: i.filter((m) => m.position === N).map((m) => /* @__PURE__ */ M(
          "div",
          {
            role: m.severity === "danger" ? "alert" : "status",
            "data-paused": o ? "true" : "false",
            "data-clickable": m.closeOnClick ? "true" : "false",
            className: [
              Nt.toast,
              Nt[m.severity],
              m.leaving ? Nt.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: m.closeOnClick ? () => x(m.id) : void 0,
            children: [
              /* @__PURE__ */ M("div", { className: Nt.content, children: [
                /* @__PURE__ */ s("div", { className: Nt.title, children: m.title }),
                m.description && /* @__PURE__ */ s("div", { className: Nt.description, children: m.description }),
                (m.action || m.cancel) && /* @__PURE__ */ M("div", { className: Nt.actions, children: [
                  m.action && /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      className: Nt.action,
                      onClick: () => {
                        m.action?.onClick?.(), x(m.id);
                      },
                      children: m.action.label
                    }
                  ),
                  m.cancel && /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      className: Nt.cancel,
                      onClick: () => {
                        m.cancel?.onClick?.(), x(m.id);
                      },
                      children: m.cancel.label
                    }
                  )
                ] })
              ] }),
              m.dismissible && /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: Nt.dismiss,
                  onClick: () => x(m.id),
                  "aria-label": "Dismiss notification",
                  children: /* @__PURE__ */ s($e, { name: "close", size: "sm" })
                }
              ),
              m.showProgress && m.durationMs > 0 && /* @__PURE__ */ s(
                "div",
                {
                  className: Nt.progress,
                  style: { animationDuration: `${m.durationMs}ms` }
                }
              )
            ]
          },
          m.id
        ))
      },
      N
    ))
  ] });
}
const ed = "_alert_1ktjq_1", td = "_xs_1ktjq_28", nd = "_sm_1ktjq_38", sd = "_lg_1ktjq_48", rd = "_xl_1ktjq_58", od = "_primary_1ktjq_69", ld = "_secondary_1ktjq_74", ad = "_light_1ktjq_79", id = "_base_1ktjq_84", cd = "_dark_1ktjq_89", dd = "_info_1ktjq_94", ud = "_success_1ktjq_99", fd = "_warning_1ktjq_104", _d = "_danger_1ktjq_109", hd = "_flat_1ktjq_116", pd = "_outlined_1ktjq_123", md = "_filled_1ktjq_132", gd = "_text_1ktjq_139", xd = "_icon_1ktjq_181", yd = "_content_1ktjq_192", bd = "_title_1ktjq_197", vd = "_body_1ktjq_203", kd = "_dismiss_1ktjq_209", Wt = {
  alert: ed,
  xs: td,
  sm: nd,
  lg: sd,
  xl: rd,
  primary: od,
  secondary: ld,
  light: ad,
  base: id,
  dark: cd,
  info: dd,
  success: ud,
  warning: fd,
  danger: _d,
  flat: hd,
  outlined: pd,
  filled: md,
  text: gd,
  icon: xd,
  content: yd,
  title: bd,
  body: vd,
  dismiss: kd,
  "shade-lighter": "_shade-lighter_1ktjq_451",
  "shade-light": "_shade-light_1ktjq_451",
  "shade-dark": "_shade-dark_1ktjq_461",
  "shade-darker": "_shade-darker_1ktjq_465"
}, wd = {
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
function Rk({
  // Intentional Radzen-parity breaking change (1.0): defaults were
  // severity="info" variant="flat" dismissible={false}; Radzen ships
  // AlertStyle.Base + Variant.Filled + AllowClose. Migrate by passing
  // the old values explicitly.
  severity: e = "base",
  variant: t = "filled",
  shade: n,
  size: r = "md",
  title: l,
  icon: i,
  showIcon: d = !0,
  children: o,
  dismissible: a = !0,
  onDismiss: c,
  visible: u,
  onVisibleChange: f,
  className: k,
  ...v
}) {
  const [b, p] = W(!1);
  if (u === !1 || u === void 0 && b)
    return null;
  const y = () => {
    u === void 0 && p(!0), c?.(), f?.(!1);
  }, _ = e, h = Bs(t, "filled"), g = Rn(n), w = i ?? (d ? /* @__PURE__ */ s($e, { name: wd[e] }) : null);
  return /* @__PURE__ */ M(
    "div",
    {
      role: "alert",
      ...v,
      className: [
        Wt.alert,
        Wt[_],
        Wt[h],
        g ? Wt[g] : null,
        Wt[r],
        k
      ].filter(Boolean).join(" "),
      children: [
        w != null && /* @__PURE__ */ s("span", { className: Wt.icon, "aria-hidden": "true", children: w }),
        /* @__PURE__ */ M("div", { className: Wt.content, children: [
          l && /* @__PURE__ */ s("div", { className: Wt.title, children: l }),
          o && /* @__PURE__ */ s("div", { className: Wt.body, children: o })
        ] }),
        a && /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: Wt.dismiss,
            onClick: y,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ s($e, { name: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const $d = "_skeleton_14cft_1", Nd = "_text_14cft_35", Od = "_circle_14cft_40", Sd = "_rect_14cft_44", nr = {
  skeleton: $d,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_14cft_1",
  text: Nd,
  circle: Od,
  rect: Sd
};
function Bk({
  variant: e = "text",
  width: t,
  height: n,
  className: r
}) {
  const l = {};
  return t !== void 0 && (l.width = typeof t == "number" ? `${t}px` : t), n !== void 0 && (l.height = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ s(
    "span",
    {
      "aria-hidden": "true",
      className: [nr.skeleton, nr[e], r].filter(Boolean).join(" "),
      style: l
    }
  );
}
const Md = "_row_tkkv2_1", Cd = "_gapXs_tkkv2_12", Dd = "_gapSm_tkkv2_17", zd = "_gapMd_tkkv2_22", Ed = "_gapLg_tkkv2_27", Id = "_gapXl_tkkv2_32", Ad = "_start_tkkv2_37", Td = "_center_tkkv2_41", jd = "_end_tkkv2_45", Ld = "_stretch_tkkv2_49", Pd = "_baseline_tkkv2_53", Rd = "_noWrap_tkkv2_109", Bd = "_wrapReverse_tkkv2_113", qd = "_gapRowXs_tkkv2_117", Fd = "_gapRowSm_tkkv2_121", Hd = "_gapRowMd_tkkv2_125", Kd = "_gapRowLg_tkkv2_129", Wd = "_gapRowXl_tkkv2_133", Cn = {
  row: Md,
  gapXs: Cd,
  gapSm: Dd,
  gapMd: zd,
  gapLg: Ed,
  gapXl: Id,
  start: Ad,
  center: Td,
  end: jd,
  stretch: Ld,
  baseline: Pd,
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
  noWrap: Rd,
  wrapReverse: Bd,
  gapRowXs: qd,
  gapRowSm: Fd,
  gapRowMd: Hd,
  gapRowLg: Kd,
  gapRowXl: Wd
}, Ud = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
}, Vd = {
  xs: "gapRowXs",
  sm: "gapRowSm",
  md: "gapRowMd",
  lg: "gapRowLg",
  xl: "gapRowXl"
};
function Xd(e) {
  return typeof e != "string" ? null : Ud[e] ?? null;
}
function Gd(e) {
  return typeof e != "string" ? null : Vd[e] ?? null;
}
function sr(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function qk({
  gap: e,
  rowGap: t,
  align: n = "stretch",
  justify: r = "start",
  wrap: l = !0,
  className: i,
  style: d,
  ...o
}) {
  const a = Xd(e), c = Gd(t), u = e != null && !a ? typeof e == "number" ? `${e}px` : e : null, f = {
    // Keep --dx-col-gap in sync so Column grid math compensates for
    // arbitrary (non-tier) gaps exactly like it does for tier classes.
    ...u ? { gap: u, "--dx-col-gap": u } : {},
    ...t != null && !c ? { rowGap: typeof t == "number" ? `${t}px` : t } : {},
    ...d
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: [
        Cn.row,
        Cn[n],
        Cn[`justify-${r}`],
        sr(l) != null ? Cn[sr(l)] : null,
        a ? Cn[a] : null,
        c ? Cn[c] : null,
        i
      ].filter(Boolean).join(" "),
      style: f,
      ...o
    }
  );
}
const Yd = "_column_sh0ss_1", Zd = "_Size1_sh0ss_15", Jd = "_Size2_sh0ss_24", Qd = "_Size3_sh0ss_33", eu = "_Size4_sh0ss_42", tu = "_Size5_sh0ss_51", nu = "_Size6_sh0ss_60", su = "_Size7_sh0ss_69", ru = "_Size8_sh0ss_78", ou = "_Size9_sh0ss_87", lu = "_Size10_sh0ss_96", au = "_Size11_sh0ss_105", iu = "_Size12_sh0ss_114", cu = "_Offset0_sh0ss_119", du = "_Offset1_sh0ss_122", uu = "_Offset2_sh0ss_127", fu = "_Offset3_sh0ss_132", _u = "_Offset4_sh0ss_137", hu = "_Offset5_sh0ss_142", pu = "_Offset6_sh0ss_147", mu = "_Offset7_sh0ss_152", gu = "_Offset8_sh0ss_157", xu = "_Offset9_sh0ss_162", yu = "_Offset10_sh0ss_167", bu = "_Offset11_sh0ss_172", vu = "_Offset12_sh0ss_177", ku = "_OrderFirst_sh0ss_182", wu = "_OrderLast_sh0ss_185", $u = "_Order0_sh0ss_188", Nu = "_Order1_sh0ss_191", Ou = "_Order2_sh0ss_194", Su = "_Order3_sh0ss_197", Mu = "_Order4_sh0ss_200", Cu = "_Order5_sh0ss_203", Du = "_Order6_sh0ss_206", zu = "_Order7_sh0ss_209", Eu = "_Order8_sh0ss_212", Iu = "_Order9_sh0ss_215", Au = "_Order10_sh0ss_218", Tu = "_Order11_sh0ss_221", ju = "_Order12_sh0ss_224", Lu = "_xsSize1_sh0ss_229", Pu = "_xsSize2_sh0ss_238", Ru = "_xsSize3_sh0ss_247", Bu = "_xsSize4_sh0ss_256", qu = "_xsSize5_sh0ss_265", Fu = "_xsSize6_sh0ss_274", Hu = "_xsSize7_sh0ss_283", Ku = "_xsSize8_sh0ss_292", Wu = "_xsSize9_sh0ss_301", Uu = "_xsSize10_sh0ss_310", Vu = "_xsSize11_sh0ss_321", Xu = "_xsSize12_sh0ss_332", Gu = "_xsOffset0_sh0ss_337", Yu = "_xsOffset1_sh0ss_340", Zu = "_xsOffset2_sh0ss_345", Ju = "_xsOffset3_sh0ss_350", Qu = "_xsOffset4_sh0ss_355", ef = "_xsOffset5_sh0ss_360", tf = "_xsOffset6_sh0ss_365", nf = "_xsOffset7_sh0ss_370", sf = "_xsOffset8_sh0ss_375", rf = "_xsOffset9_sh0ss_380", of = "_xsOffset10_sh0ss_385", lf = "_xsOffset11_sh0ss_391", af = "_xsOffset12_sh0ss_397", cf = "_xsOrderFirst_sh0ss_403", df = "_xsOrderLast_sh0ss_406", uf = "_xsOrder0_sh0ss_409", ff = "_xsOrder1_sh0ss_412", _f = "_xsOrder2_sh0ss_415", hf = "_xsOrder3_sh0ss_418", pf = "_xsOrder4_sh0ss_421", mf = "_xsOrder5_sh0ss_424", gf = "_xsOrder6_sh0ss_427", xf = "_xsOrder7_sh0ss_430", yf = "_xsOrder8_sh0ss_433", bf = "_xsOrder9_sh0ss_436", vf = "_xsOrder10_sh0ss_439", kf = "_xsOrder11_sh0ss_442", wf = "_xsOrder12_sh0ss_445", $f = "_smSize1_sh0ss_451", Nf = "_smSize2_sh0ss_460", Of = "_smSize3_sh0ss_469", Sf = "_smSize4_sh0ss_478", Mf = "_smSize5_sh0ss_487", Cf = "_smSize6_sh0ss_496", Df = "_smSize7_sh0ss_505", zf = "_smSize8_sh0ss_514", Ef = "_smSize9_sh0ss_523", If = "_smSize10_sh0ss_532", Af = "_smSize11_sh0ss_543", Tf = "_smSize12_sh0ss_554", jf = "_smOffset0_sh0ss_559", Lf = "_smOffset1_sh0ss_562", Pf = "_smOffset2_sh0ss_567", Rf = "_smOffset3_sh0ss_572", Bf = "_smOffset4_sh0ss_577", qf = "_smOffset5_sh0ss_582", Ff = "_smOffset6_sh0ss_587", Hf = "_smOffset7_sh0ss_592", Kf = "_smOffset8_sh0ss_597", Wf = "_smOffset9_sh0ss_602", Uf = "_smOffset10_sh0ss_607", Vf = "_smOffset11_sh0ss_613", Xf = "_smOffset12_sh0ss_619", Gf = "_smOrderFirst_sh0ss_625", Yf = "_smOrderLast_sh0ss_628", Zf = "_smOrder0_sh0ss_631", Jf = "_smOrder1_sh0ss_634", Qf = "_smOrder2_sh0ss_637", e_ = "_smOrder3_sh0ss_640", t_ = "_smOrder4_sh0ss_643", n_ = "_smOrder5_sh0ss_646", s_ = "_smOrder6_sh0ss_649", r_ = "_smOrder7_sh0ss_652", o_ = "_smOrder8_sh0ss_655", l_ = "_smOrder9_sh0ss_658", a_ = "_smOrder10_sh0ss_661", i_ = "_smOrder11_sh0ss_664", c_ = "_smOrder12_sh0ss_667", d_ = "_mdSize1_sh0ss_673", u_ = "_mdSize2_sh0ss_682", f_ = "_mdSize3_sh0ss_691", __ = "_mdSize4_sh0ss_700", h_ = "_mdSize5_sh0ss_709", p_ = "_mdSize6_sh0ss_718", m_ = "_mdSize7_sh0ss_727", g_ = "_mdSize8_sh0ss_736", x_ = "_mdSize9_sh0ss_745", y_ = "_mdSize10_sh0ss_754", b_ = "_mdSize11_sh0ss_765", v_ = "_mdSize12_sh0ss_776", k_ = "_mdOffset0_sh0ss_781", w_ = "_mdOffset1_sh0ss_784", $_ = "_mdOffset2_sh0ss_789", N_ = "_mdOffset3_sh0ss_794", O_ = "_mdOffset4_sh0ss_799", S_ = "_mdOffset5_sh0ss_804", M_ = "_mdOffset6_sh0ss_809", C_ = "_mdOffset7_sh0ss_814", D_ = "_mdOffset8_sh0ss_819", z_ = "_mdOffset9_sh0ss_824", E_ = "_mdOffset10_sh0ss_829", I_ = "_mdOffset11_sh0ss_835", A_ = "_mdOffset12_sh0ss_841", T_ = "_mdOrderFirst_sh0ss_847", j_ = "_mdOrderLast_sh0ss_850", L_ = "_mdOrder0_sh0ss_853", P_ = "_mdOrder1_sh0ss_856", R_ = "_mdOrder2_sh0ss_859", B_ = "_mdOrder3_sh0ss_862", q_ = "_mdOrder4_sh0ss_865", F_ = "_mdOrder5_sh0ss_868", H_ = "_mdOrder6_sh0ss_871", K_ = "_mdOrder7_sh0ss_874", W_ = "_mdOrder8_sh0ss_877", U_ = "_mdOrder9_sh0ss_880", V_ = "_mdOrder10_sh0ss_883", X_ = "_mdOrder11_sh0ss_886", G_ = "_mdOrder12_sh0ss_889", Y_ = "_lgSize1_sh0ss_895", Z_ = "_lgSize2_sh0ss_904", J_ = "_lgSize3_sh0ss_913", Q_ = "_lgSize4_sh0ss_922", eh = "_lgSize5_sh0ss_931", th = "_lgSize6_sh0ss_940", nh = "_lgSize7_sh0ss_949", sh = "_lgSize8_sh0ss_958", rh = "_lgSize9_sh0ss_967", oh = "_lgSize10_sh0ss_976", lh = "_lgSize11_sh0ss_987", ah = "_lgSize12_sh0ss_998", ih = "_lgOffset0_sh0ss_1003", ch = "_lgOffset1_sh0ss_1006", dh = "_lgOffset2_sh0ss_1011", uh = "_lgOffset3_sh0ss_1016", fh = "_lgOffset4_sh0ss_1021", _h = "_lgOffset5_sh0ss_1026", hh = "_lgOffset6_sh0ss_1031", ph = "_lgOffset7_sh0ss_1036", mh = "_lgOffset8_sh0ss_1041", gh = "_lgOffset9_sh0ss_1046", xh = "_lgOffset10_sh0ss_1051", yh = "_lgOffset11_sh0ss_1057", bh = "_lgOffset12_sh0ss_1063", vh = "_lgOrderFirst_sh0ss_1069", kh = "_lgOrderLast_sh0ss_1072", wh = "_lgOrder0_sh0ss_1075", $h = "_lgOrder1_sh0ss_1078", Nh = "_lgOrder2_sh0ss_1081", Oh = "_lgOrder3_sh0ss_1084", Sh = "_lgOrder4_sh0ss_1087", Mh = "_lgOrder5_sh0ss_1090", Ch = "_lgOrder6_sh0ss_1093", Dh = "_lgOrder7_sh0ss_1096", zh = "_lgOrder8_sh0ss_1099", Eh = "_lgOrder9_sh0ss_1102", Ih = "_lgOrder10_sh0ss_1105", Ah = "_lgOrder11_sh0ss_1108", Th = "_lgOrder12_sh0ss_1111", jh = "_xlSize1_sh0ss_1117", Lh = "_xlSize2_sh0ss_1126", Ph = "_xlSize3_sh0ss_1135", Rh = "_xlSize4_sh0ss_1144", Bh = "_xlSize5_sh0ss_1153", qh = "_xlSize6_sh0ss_1162", Fh = "_xlSize7_sh0ss_1171", Hh = "_xlSize8_sh0ss_1180", Kh = "_xlSize9_sh0ss_1189", Wh = "_xlSize10_sh0ss_1198", Uh = "_xlSize11_sh0ss_1209", Vh = "_xlSize12_sh0ss_1220", Xh = "_xlOffset0_sh0ss_1225", Gh = "_xlOffset1_sh0ss_1228", Yh = "_xlOffset2_sh0ss_1233", Zh = "_xlOffset3_sh0ss_1238", Jh = "_xlOffset4_sh0ss_1243", Qh = "_xlOffset5_sh0ss_1248", e1 = "_xlOffset6_sh0ss_1253", t1 = "_xlOffset7_sh0ss_1258", n1 = "_xlOffset8_sh0ss_1263", s1 = "_xlOffset9_sh0ss_1268", r1 = "_xlOffset10_sh0ss_1273", o1 = "_xlOffset11_sh0ss_1279", l1 = "_xlOffset12_sh0ss_1285", a1 = "_xlOrderFirst_sh0ss_1291", i1 = "_xlOrderLast_sh0ss_1294", c1 = "_xlOrder0_sh0ss_1297", d1 = "_xlOrder1_sh0ss_1300", u1 = "_xlOrder2_sh0ss_1303", f1 = "_xlOrder3_sh0ss_1306", _1 = "_xlOrder4_sh0ss_1309", h1 = "_xlOrder5_sh0ss_1312", p1 = "_xlOrder6_sh0ss_1315", m1 = "_xlOrder7_sh0ss_1318", g1 = "_xlOrder8_sh0ss_1321", x1 = "_xlOrder9_sh0ss_1324", y1 = "_xlOrder10_sh0ss_1327", b1 = "_xlOrder11_sh0ss_1330", v1 = "_xlOrder12_sh0ss_1333", k1 = "_xxSize1_sh0ss_1339", w1 = "_xxSize2_sh0ss_1348", $1 = "_xxSize3_sh0ss_1357", N1 = "_xxSize4_sh0ss_1366", O1 = "_xxSize5_sh0ss_1375", S1 = "_xxSize6_sh0ss_1384", M1 = "_xxSize7_sh0ss_1393", C1 = "_xxSize8_sh0ss_1402", D1 = "_xxSize9_sh0ss_1411", z1 = "_xxSize10_sh0ss_1420", E1 = "_xxSize11_sh0ss_1431", I1 = "_xxSize12_sh0ss_1442", A1 = "_xxOffset0_sh0ss_1447", T1 = "_xxOffset1_sh0ss_1450", j1 = "_xxOffset2_sh0ss_1455", L1 = "_xxOffset3_sh0ss_1460", P1 = "_xxOffset4_sh0ss_1465", R1 = "_xxOffset5_sh0ss_1470", B1 = "_xxOffset6_sh0ss_1475", q1 = "_xxOffset7_sh0ss_1480", F1 = "_xxOffset8_sh0ss_1485", H1 = "_xxOffset9_sh0ss_1490", K1 = "_xxOffset10_sh0ss_1495", W1 = "_xxOffset11_sh0ss_1501", U1 = "_xxOffset12_sh0ss_1507", V1 = "_xxOrderFirst_sh0ss_1513", X1 = "_xxOrderLast_sh0ss_1516", G1 = "_xxOrder0_sh0ss_1519", Y1 = "_xxOrder1_sh0ss_1522", Z1 = "_xxOrder2_sh0ss_1525", J1 = "_xxOrder3_sh0ss_1528", Q1 = "_xxOrder4_sh0ss_1531", ep = "_xxOrder5_sh0ss_1534", tp = "_xxOrder6_sh0ss_1537", np = "_xxOrder7_sh0ss_1540", sp = "_xxOrder8_sh0ss_1543", rp = "_xxOrder9_sh0ss_1546", op = "_xxOrder10_sh0ss_1549", lp = "_xxOrder11_sh0ss_1552", ap = "_xxOrder12_sh0ss_1555", is = {
  column: Yd,
  Size1: Zd,
  Size2: Jd,
  Size3: Qd,
  Size4: eu,
  Size5: tu,
  Size6: nu,
  Size7: su,
  Size8: ru,
  Size9: ou,
  Size10: lu,
  Size11: au,
  Size12: iu,
  Offset0: cu,
  Offset1: du,
  Offset2: uu,
  Offset3: fu,
  Offset4: _u,
  Offset5: hu,
  Offset6: pu,
  Offset7: mu,
  Offset8: gu,
  Offset9: xu,
  Offset10: yu,
  Offset11: bu,
  Offset12: vu,
  OrderFirst: ku,
  OrderLast: wu,
  Order0: $u,
  Order1: Nu,
  Order2: Ou,
  Order3: Su,
  Order4: Mu,
  Order5: Cu,
  Order6: Du,
  Order7: zu,
  Order8: Eu,
  Order9: Iu,
  Order10: Au,
  Order11: Tu,
  Order12: ju,
  xsSize1: Lu,
  xsSize2: Pu,
  xsSize3: Ru,
  xsSize4: Bu,
  xsSize5: qu,
  xsSize6: Fu,
  xsSize7: Hu,
  xsSize8: Ku,
  xsSize9: Wu,
  xsSize10: Uu,
  xsSize11: Vu,
  xsSize12: Xu,
  xsOffset0: Gu,
  xsOffset1: Yu,
  xsOffset2: Zu,
  xsOffset3: Ju,
  xsOffset4: Qu,
  xsOffset5: ef,
  xsOffset6: tf,
  xsOffset7: nf,
  xsOffset8: sf,
  xsOffset9: rf,
  xsOffset10: of,
  xsOffset11: lf,
  xsOffset12: af,
  xsOrderFirst: cf,
  xsOrderLast: df,
  xsOrder0: uf,
  xsOrder1: ff,
  xsOrder2: _f,
  xsOrder3: hf,
  xsOrder4: pf,
  xsOrder5: mf,
  xsOrder6: gf,
  xsOrder7: xf,
  xsOrder8: yf,
  xsOrder9: bf,
  xsOrder10: vf,
  xsOrder11: kf,
  xsOrder12: wf,
  smSize1: $f,
  smSize2: Nf,
  smSize3: Of,
  smSize4: Sf,
  smSize5: Mf,
  smSize6: Cf,
  smSize7: Df,
  smSize8: zf,
  smSize9: Ef,
  smSize10: If,
  smSize11: Af,
  smSize12: Tf,
  smOffset0: jf,
  smOffset1: Lf,
  smOffset2: Pf,
  smOffset3: Rf,
  smOffset4: Bf,
  smOffset5: qf,
  smOffset6: Ff,
  smOffset7: Hf,
  smOffset8: Kf,
  smOffset9: Wf,
  smOffset10: Uf,
  smOffset11: Vf,
  smOffset12: Xf,
  smOrderFirst: Gf,
  smOrderLast: Yf,
  smOrder0: Zf,
  smOrder1: Jf,
  smOrder2: Qf,
  smOrder3: e_,
  smOrder4: t_,
  smOrder5: n_,
  smOrder6: s_,
  smOrder7: r_,
  smOrder8: o_,
  smOrder9: l_,
  smOrder10: a_,
  smOrder11: i_,
  smOrder12: c_,
  mdSize1: d_,
  mdSize2: u_,
  mdSize3: f_,
  mdSize4: __,
  mdSize5: h_,
  mdSize6: p_,
  mdSize7: m_,
  mdSize8: g_,
  mdSize9: x_,
  mdSize10: y_,
  mdSize11: b_,
  mdSize12: v_,
  mdOffset0: k_,
  mdOffset1: w_,
  mdOffset2: $_,
  mdOffset3: N_,
  mdOffset4: O_,
  mdOffset5: S_,
  mdOffset6: M_,
  mdOffset7: C_,
  mdOffset8: D_,
  mdOffset9: z_,
  mdOffset10: E_,
  mdOffset11: I_,
  mdOffset12: A_,
  mdOrderFirst: T_,
  mdOrderLast: j_,
  mdOrder0: L_,
  mdOrder1: P_,
  mdOrder2: R_,
  mdOrder3: B_,
  mdOrder4: q_,
  mdOrder5: F_,
  mdOrder6: H_,
  mdOrder7: K_,
  mdOrder8: W_,
  mdOrder9: U_,
  mdOrder10: V_,
  mdOrder11: X_,
  mdOrder12: G_,
  lgSize1: Y_,
  lgSize2: Z_,
  lgSize3: J_,
  lgSize4: Q_,
  lgSize5: eh,
  lgSize6: th,
  lgSize7: nh,
  lgSize8: sh,
  lgSize9: rh,
  lgSize10: oh,
  lgSize11: lh,
  lgSize12: ah,
  lgOffset0: ih,
  lgOffset1: ch,
  lgOffset2: dh,
  lgOffset3: uh,
  lgOffset4: fh,
  lgOffset5: _h,
  lgOffset6: hh,
  lgOffset7: ph,
  lgOffset8: mh,
  lgOffset9: gh,
  lgOffset10: xh,
  lgOffset11: yh,
  lgOffset12: bh,
  lgOrderFirst: vh,
  lgOrderLast: kh,
  lgOrder0: wh,
  lgOrder1: $h,
  lgOrder2: Nh,
  lgOrder3: Oh,
  lgOrder4: Sh,
  lgOrder5: Mh,
  lgOrder6: Ch,
  lgOrder7: Dh,
  lgOrder8: zh,
  lgOrder9: Eh,
  lgOrder10: Ih,
  lgOrder11: Ah,
  lgOrder12: Th,
  xlSize1: jh,
  xlSize2: Lh,
  xlSize3: Ph,
  xlSize4: Rh,
  xlSize5: Bh,
  xlSize6: qh,
  xlSize7: Fh,
  xlSize8: Hh,
  xlSize9: Kh,
  xlSize10: Wh,
  xlSize11: Uh,
  xlSize12: Vh,
  xlOffset0: Xh,
  xlOffset1: Gh,
  xlOffset2: Yh,
  xlOffset3: Zh,
  xlOffset4: Jh,
  xlOffset5: Qh,
  xlOffset6: e1,
  xlOffset7: t1,
  xlOffset8: n1,
  xlOffset9: s1,
  xlOffset10: r1,
  xlOffset11: o1,
  xlOffset12: l1,
  xlOrderFirst: a1,
  xlOrderLast: i1,
  xlOrder0: c1,
  xlOrder1: d1,
  xlOrder2: u1,
  xlOrder3: f1,
  xlOrder4: _1,
  xlOrder5: h1,
  xlOrder6: p1,
  xlOrder7: m1,
  xlOrder8: g1,
  xlOrder9: x1,
  xlOrder10: y1,
  xlOrder11: b1,
  xlOrder12: v1,
  xxSize1: k1,
  xxSize2: w1,
  xxSize3: $1,
  xxSize4: N1,
  xxSize5: O1,
  xxSize6: S1,
  xxSize7: M1,
  xxSize8: C1,
  xxSize9: D1,
  xxSize10: z1,
  xxSize11: E1,
  xxSize12: I1,
  xxOffset0: A1,
  xxOffset1: T1,
  xxOffset2: j1,
  xxOffset3: L1,
  xxOffset4: P1,
  xxOffset5: R1,
  xxOffset6: B1,
  xxOffset7: q1,
  xxOffset8: F1,
  xxOffset9: H1,
  xxOffset10: K1,
  xxOffset11: W1,
  xxOffset12: U1,
  xxOrderFirst: V1,
  xxOrderLast: X1,
  xxOrder0: G1,
  xxOrder1: Y1,
  xxOrder2: Z1,
  xxOrder3: J1,
  xxOrder4: Q1,
  xxOrder5: ep,
  xxOrder6: tp,
  xxOrder7: np,
  xxOrder8: sp,
  xxOrder9: rp,
  xxOrder10: op,
  xxOrder11: lp,
  xxOrder12: ap
}, ip = [
  ["", "size", "offset", "order"],
  ["xs", "sizeXs", "offsetXs", "orderXs"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xx", "sizeXx", "offsetXx", "orderXx"]
];
function cp(e, t) {
  if (!Number.isInteger(t) || t < 1 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 1 and 12.`
    );
}
function dp(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12.`
    );
}
function up(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12 or first/last.`
    );
}
function fp(e, t, n) {
  return t === "first" ? `${e}OrderFirst` : t === "last" ? `${e}OrderLast` : (up(n, t), `${e}Order${t}`);
}
function Fk({ className: e, style: t, ...n }) {
  const r = [is.column], l = { ...t };
  for (const [z, N, m, C] of ip) {
    const T = n[N], j = n[m], A = n[C];
    if (T != null) {
      cp(N, T);
      const L = is[`${z}Size${T}`];
      L && r.push(L);
    }
    if (j != null) {
      dp(m, j);
      const L = is[`${z}Offset${j}`];
      L && r.push(L);
    }
    if (A != null) {
      const L = is[fp(z, A, C)];
      L && r.push(L);
    }
  }
  const {
    size: i,
    offset: d,
    sizeXs: o,
    offsetXs: a,
    sizeSm: c,
    offsetSm: u,
    sizeMd: f,
    offsetMd: k,
    sizeLg: v,
    offsetLg: b,
    sizeXl: p,
    offsetXl: y,
    sizeXx: _,
    offsetXx: h,
    order: g,
    orderXs: w,
    orderSm: x,
    orderMd: S,
    orderLg: $,
    orderXl: O,
    orderXx: E,
    ...D
  } = n;
  return /* @__PURE__ */ s(
    "div",
    {
      className: [...r, e].filter(Boolean).join(" "),
      style: l,
      ...D
    }
  );
}
const _p = "_stack_1yc1g_1", hp = "_gapXs_1yc1g_29", pp = "_gapSm_1yc1g_33", mp = "_gapMd_1yc1g_37", gp = "_gapLg_1yc1g_41", xp = "_gapXl_1yc1g_45", Dn = {
  stack: _p,
  "dir-row": "_dir-row_1yc1g_5",
  "dir-row-reverse": "_dir-row-reverse_1yc1g_9",
  "dir-column": "_dir-column_1yc1g_13",
  "dir-column-reverse": "_dir-column-reverse_1yc1g_17",
  "wrap-nowrap": "_wrap-nowrap_1yc1g_21",
  "wrap-wrap-reverse": "_wrap-wrap-reverse_1yc1g_25",
  gapXs: hp,
  gapSm: pp,
  gapMd: mp,
  gapLg: gp,
  gapXl: xp,
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
}, yp = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function bp(e) {
  return typeof e != "string" ? null : yp[e] ?? null;
}
function rr(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function Hk({
  orientation: e = "vertical",
  reverse: t = !1,
  wrap: n = !0,
  gap: r = "sm",
  align: l,
  justify: i,
  className: d,
  style: o,
  ...a
}) {
  const c = bp(r), u = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", f = {
    ...r != null && !c ? { gap: typeof r == "number" ? `${r}px` : r } : {},
    ...o
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: [
        Dn.stack,
        Dn[`dir-${u}`],
        rr(n) !== "wrap" ? Dn[`wrap-${rr(n)}`] : null,
        l != null ? Dn[`align-${l}`] : null,
        i != null ? Dn[`justify-${i}`] : null,
        c ? Dn[c] : null,
        d
      ].filter(Boolean).join(" "),
      style: f,
      ...a
    }
  );
}
const vp = "_autogrid_1fz7w_1", kp = "_gapXs_1fz7w_10", wp = "_gapSm_1fz7w_14", $p = "_gapMd_1fz7w_18", Np = "_gapLg_1fz7w_22", Op = "_gapXl_1fz7w_26", or = {
  autogrid: vp,
  gapXs: kp,
  gapSm: wp,
  gapMd: $p,
  gapLg: Np,
  gapXl: Op
}, Sp = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function Mp(e) {
  return typeof e != "string" ? null : Sp[e] ?? null;
}
function Kk({
  min: e = 240,
  gap: t = "md",
  className: n,
  style: r,
  visible: l = !0,
  ...i
}) {
  if (l === !1) return null;
  const d = Mp(t), o = {
    // Keep --dx-autogrid-min in sync so the track math follows the prop.
    "--dx-autogrid-min": typeof e == "number" ? `${e}px` : e,
    ...t != null && !d ? { gap: typeof t == "number" ? `${t}px` : t } : {},
    ...r
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: [or.autogrid, d ? or[d] : null, n].filter(Boolean).join(" "),
      style: o,
      ...i
    }
  );
}
const Cp = "_layout_fxvw1_1", Dp = "_row_fxvw1_7", zp = "_grid_fxvw1_21", Ep = "_gridRight_fxvw1_27", Ip = "_gridHeader_fxvw1_31", Ap = "_gridFooter_fxvw1_36", Tp = "_gridContents_fxvw1_41", jp = "_gridBody_fxvw1_45", Qt = {
  layout: Cp,
  row: Dp,
  grid: zp,
  gridRight: Ep,
  gridHeader: Ip,
  gridFooter: Ap,
  gridContents: Tp,
  gridBody: jp
}, Lp = "_footer_1thaw_1", Pp = "_sticky_1thaw_9", lr = {
  footer: Lp,
  sticky: Pp
};
function Rp({
  sticky: e = !1,
  className: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ s(
    "footer",
    {
      className: [lr.footer, e ? lr.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const Bp = "_header_wh9gi_1", qp = "_sticky_wh9gi_9", ar = {
  header: Bp,
  sticky: qp
};
function Fp({
  sticky: e = !1,
  className: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ s(
    "header",
    {
      className: [ar.header, e ? ar.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const Hp = "_sidebar_1a2mp_1", Kp = "_sticky_1a2mp_23", Wp = "_left_1a2mp_41", Up = "_right_1a2mp_45", Vp = "_start_1a2mp_50", Xp = "_end_1a2mp_54", Gp = "_fullHeight_1a2mp_60", Yp = "_collapsed_1a2mp_64", Zp = "_responsive_1a2mp_72", Jp = "_overlay_1a2mp_80", Qp = "_mask_1a2mp_108", cn = {
  sidebar: Hp,
  sticky: Kp,
  left: Wp,
  right: Up,
  start: Vp,
  end: Xp,
  fullHeight: Gp,
  collapsed: Yp,
  responsive: Zp,
  overlay: Jp,
  mask: Qp
};
function em({
  position: e = "left",
  expanded: t = !0,
  responsive: n = !1,
  overlay: r = !1,
  fullHeight: l = !1,
  sticky: i = !1,
  onClose: d,
  className: o,
  children: a,
  ...c
}) {
  return ge(() => {
    if (!r || !t || d == null) return;
    const u = (f) => {
      f.key === "Escape" && d();
    };
    return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
  }, [r, t, d]), /* @__PURE__ */ M(ke, { children: [
    r && t ? /* @__PURE__ */ s(
      "div",
      {
        className: `${cn.mask} se-layout-mask`,
        "aria-hidden": "true",
        onClick: d
      }
    ) : null,
    /* @__PURE__ */ s(
      "aside",
      {
        className: [
          cn.sidebar,
          cn[e],
          t ? null : cn.collapsed,
          n ? cn.responsive : null,
          r ? [cn.overlay, "se-sidebar--overlay"] : null,
          l ? cn.fullHeight : null,
          i && !r && !l ? cn.sticky : null,
          o
        ].flat().filter(Boolean).join(" "),
        ...c,
        children: a
      }
    )
  ] });
}
function Wk(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ s(ke, { children: e.children });
  const { className: t, children: n, ...r } = e, l = [], i = [], d = [], o = [], a = [], c = [];
  rs.forEach(n, (k) => {
    if (!gt(k)) {
      d.push(k);
      return;
    }
    if (k.type === Fp)
      l.push(k);
    else if (k.type === Rp)
      i.push(k);
    else if (k.type === em) {
      const v = k, b = v.props.position;
      c.push(v), (b === "right" || b === "end" ? a : o).push(v);
    } else
      d.push(k);
  });
  const u = c.length === 1 && c[0]?.props.fullHeight === !0 ? c[0] : null, f = u != null && (u.props.position === "right" || u.props.position === "end");
  if (u) {
    const k = f ? a : o;
    return /* @__PURE__ */ M(
      "div",
      {
        className: [
          Qt.layout,
          Qt.grid,
          f ? Qt.gridRight : null,
          t
        ].filter(Boolean).join(" "),
        ...r,
        children: [
          l.length > 0 && /* @__PURE__ */ s("div", { className: Qt.gridHeader, children: l }),
          /* @__PURE__ */ M("div", { className: Qt.gridContents, children: [
            k,
            /* @__PURE__ */ s("div", { className: Qt.gridBody, children: d })
          ] }),
          i.length > 0 && /* @__PURE__ */ s("div", { className: Qt.gridFooter, children: i })
        ]
      }
    );
  }
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Qt.layout, t].filter(Boolean).join(" "),
      ...r,
      children: [
        l,
        /* @__PURE__ */ M("div", { className: Qt.row, children: [
          o,
          d,
          a
        ] }),
        i
      ]
    }
  );
}
const tm = "_body_akga4_1", nm = "_bare_akga4_10", ir = {
  body: tm,
  bare: nm
};
function Uk({
  as: e = "main",
  padded: t = !0,
  className: n,
  children: r,
  ...l
}) {
  return /* @__PURE__ */ s(
    e,
    {
      className: [ir.body, t ? null : ir.bare, n].filter(Boolean).join(" "),
      ...l,
      children: r
    }
  );
}
const sm = "_toggle_lxnk5_1", rm = {
  toggle: sm
};
function Vk({
  icon: e = "menu",
  label: t = "Toggle sidebar",
  className: n,
  type: r = "button",
  children: l,
  ...i
}) {
  return /* @__PURE__ */ s(
    "button",
    {
      type: r,
      "aria-label": t,
      className: [rm.toggle, n].filter(Boolean).join(" "),
      ...i,
      children: l ?? /* @__PURE__ */ s($e, { name: e, size: 20 })
    }
  );
}
const om = "_track_1itxd_1", lm = "_bar_1itxd_31", am = "_primary_1itxd_39", im = "_success_1itxd_43", cm = "_warning_1itxd_47", dm = "_danger_1itxd_51", um = "_indeterminate_1itxd_149", fm = "_circular_1itxd_163", _m = "_fill_1itxd_203", Ot = {
  track: om,
  "linear-xs": "_linear-xs_1itxd_11",
  "linear-sm": "_linear-sm_1itxd_15",
  "linear-md": "_linear-md_1itxd_19",
  "linear-lg": "_linear-lg_1itxd_23",
  "linear-xl": "_linear-xl_1itxd_27",
  bar: lm,
  primary: am,
  success: im,
  warning: cm,
  danger: dm,
  "shade-lighter": "_shade-lighter_1itxd_133",
  "shade-light": "_shade-light_1itxd_133",
  "shade-dark": "_shade-dark_1itxd_141",
  "shade-darker": "_shade-darker_1itxd_145",
  indeterminate: um,
  "se-progress-slide": "_se-progress-slide_1itxd_1",
  circular: fm,
  "circular-xs": "_circular-xs_1itxd_169",
  "circular-sm": "_circular-sm_1itxd_174",
  "circular-md": "_circular-md_1itxd_179",
  "circular-lg": "_circular-lg_1itxd_184",
  "circular-xl": "_circular-xl_1itxd_189",
  fill: _m,
  "se-progress-spin": "_se-progress-spin_1itxd_1"
};
function Xk({
  value: e = 0,
  max: t = 100,
  severity: n = "primary",
  shade: r,
  indeterminate: l = !1,
  variant: i = "linear",
  size: d = "md",
  className: o,
  visible: a = !0,
  ...c
}) {
  if (a === !1) return null;
  const u = t > 0 ? Math.min(t, Math.max(0, e)) : 0, f = t > 0 ? u / t * 100 : 0;
  if (i === "circular") {
    const v = typeof d == "string", b = 2, p = 10.5, y = 2 * Math.PI * p, _ = y * (l ? 0.75 : 1), h = l ? 0 : y * (1 - f / 100), g = Rn(r);
    return /* @__PURE__ */ M(
      "svg",
      {
        width: v ? void 0 : d,
        height: v ? void 0 : d,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": c["aria-label"],
        "aria-labelledby": c["aria-labelledby"],
        "aria-valuenow": l ? void 0 : Math.round(u),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        ...c,
        className: [
          Ot.circular,
          Ot[n],
          g ? Ot[g] : null,
          v ? Ot[`circular-${d}`] : null,
          l ? Ot.indeterminate : null,
          o
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ s(
            "circle",
            {
              className: Ot.track,
              cx: 12,
              cy: 12,
              r: p,
              strokeWidth: b
            }
          ),
          /* @__PURE__ */ s(
            "circle",
            {
              className: Ot.fill,
              cx: 12,
              cy: 12,
              r: p,
              strokeWidth: b,
              strokeDasharray: `${_} ${y}`,
              strokeDashoffset: h
            }
          )
        ]
      }
    );
  }
  const k = Rn(r);
  return /* @__PURE__ */ s(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": l ? void 0 : Math.round(u),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        Ot.track,
        Ot[n],
        k ? Ot[k] : null,
        typeof d == "string" ? Ot[`linear-${d}`] : null,
        l ? Ot.indeterminate : null,
        o
      ].filter(Boolean).join(" "),
      ...c,
      children: /* @__PURE__ */ s(
        "div",
        {
          className: Ot.bar,
          style: l ? void 0 : { width: `${f}%` }
        }
      )
    }
  );
}
function hm(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function zr(e) {
  const [t, n] = W(() => hm(e));
  return ge(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const r = window.matchMedia(e);
    n(r.matches);
    const l = (i) => n(i.matches);
    return typeof r.addEventListener == "function" ? (r.addEventListener("change", l), () => r.removeEventListener("change", l)) : (r.addListener(l), () => r.removeListener(l));
  }, [e]), t;
}
const pm = "_wrapper_1qmsj_1", mm = {
  wrapper: pm
}, Er = "dx-theme";
function gm(e) {
  const t = e === void 0 ? Er : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const n = localStorage.getItem(t);
      return n === "light" || n === "dark" || n === "system" ? n : void 0;
    } catch {
      return;
    }
}
function xm(e, t) {
  const n = e === void 0 ? Er : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function Gk({
  value: e,
  defaultValue: t,
  storageKey: n,
  onChange: r,
  label: l = "Dark mode",
  className: i
}) {
  const d = zr("(prefers-color-scheme: dark)"), [o, a] = W(void 0), c = e ?? o ?? gm(n) ?? t ?? "system", u = c === "system" ? d ? "dark" : "light" : c;
  ge(() => {
    if (c === "system") {
      delete document.documentElement.dataset.theme;
      return;
    }
    document.documentElement.dataset.theme = c;
  }, [c]);
  const f = (k) => {
    const v = k.target.checked ? "dark" : "light";
    e === void 0 && a(v), xm(n, v), r?.(v);
  };
  return /* @__PURE__ */ M("label", { className: [mm.wrapper, i].filter(Boolean).join(" "), children: [
    l,
    /* @__PURE__ */ s(Zi, { checked: u === "dark", onChange: f })
  ] });
}
function ym(e) {
  const t = new TextEncoder().encode(e), n = t.length * 8, r = ((t.length + 8 >> 6) + 1) * 64, l = new Uint8Array(r);
  l.set(t), l[t.length] = 128;
  const i = new DataView(l.buffer);
  i.setUint32(r - 8, n >>> 0, !0), i.setUint32(r - 4, Math.floor(n / 4294967296), !0);
  const d = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21], o = Array.from(
    { length: 64 },
    (p, y) => Math.floor(Math.abs(Math.sin(y + 1)) * 4294967296)
  ), a = (p, y) => p + y | 0, c = (p, y) => p << y | p >>> 32 - y;
  let u = 1732584193, f = 4023233417, k = 2562383102, v = 271733878;
  for (let p = 0; p < r; p += 64) {
    const y = [];
    for (let x = 0; x < 16; x += 1)
      y.push(i.getUint32(p + x * 4, !0));
    let _ = u, h = f, g = k, w = v;
    for (let x = 0; x < 64; x += 1) {
      let S, $;
      x < 16 ? (S = h & g | ~h & w, $ = x) : x < 32 ? (S = w & h | ~w & g, $ = (5 * x + 1) % 16) : x < 48 ? (S = h ^ g ^ w, $ = (3 * x + 5) % 16) : (S = g ^ (h | ~w), $ = 7 * x % 16), S = a(a(a(S, _), o[x]), y[$]), _ = w, w = g, g = h, h = a(h, c(S, d[Math.floor(x / 16) * 4 + x % 4]));
    }
    u = a(u, _), f = a(f, h), k = a(k, g), v = a(v, w);
  }
  const b = (p) => {
    let y = "";
    for (let _ = 0; _ < 4; _ += 1)
      y += `0${(p >>> _ * 8 & 255).toString(16)}`.slice(-2);
    return y;
  };
  return b(u) + b(f) + b(k) + b(v);
}
const bm = "_avatar_yj2hz_1", vm = "_xs_yj2hz_12", km = "_sm_yj2hz_18", wm = "_md_yj2hz_24", $m = "_lg_yj2hz_30", Nm = "_xl_yj2hz_36", Om = "_initials_yj2hz_42", Sm = "_image_yj2hz_57", Mm = "_status_yj2hz_64", Cm = "_online_yj2hz_84", Dm = "_offline_yj2hz_88", zm = "_away_yj2hz_92", zn = {
  avatar: bm,
  xs: vm,
  sm: km,
  md: wm,
  lg: $m,
  xl: Nm,
  initials: Om,
  image: Sm,
  status: Mm,
  online: Cm,
  offline: Dm,
  away: zm
}, Em = {
  xs: 20,
  sm: 28,
  md: 36,
  lg: 44,
  xl: 52
}, ms = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function Im(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function Am(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = t * 31 + e.charCodeAt(n) >>> 0;
  return ms[t % ms.length] ?? ms[0];
}
function Yk({
  name: e,
  src: t,
  email: n,
  gravatarDefault: r = "retro",
  gravatarRating: l = "g",
  alt: i,
  size: d = "md",
  status: o,
  className: a
}) {
  const c = xe(() => e ? Im(e) : "?", [e]), u = xe(() => e ? Am(e) : ms[0], [e]), f = xe(() => {
    if (t != null || n == null) return;
    const w = n.trim().toLowerCase();
    return w === "" ? void 0 : `https://secure.gravatar.com/avatar/${ym(w)}?d=${r}&s=${Em[d]}&r=${l}`;
  }, [t, n, r, l, d]), k = t ?? f, [v, b] = W(null), p = k != null && v !== k, y = p && i === "", _ = i ?? e ?? "avatar", h = o ? `${_}, ${o}` : _, g = p ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ s(
      "img",
      {
        className: zn.image,
        src: k,
        alt: y ? "" : o ? h : _,
        onError: () => b(k ?? null)
      }
    )
  ) : /* @__PURE__ */ s(
    "span",
    {
      "aria-hidden": "true",
      className: zn.initials,
      style: { background: u },
      children: c
    }
  );
  return /* @__PURE__ */ M(
    "span",
    {
      className: [
        zn.avatar,
        zn[d],
        o ? zn[o] : null,
        a
      ].filter(Boolean).join(" "),
      role: p ? void 0 : "img",
      "aria-label": p ? void 0 : h,
      children: [
        g,
        o && /* @__PURE__ */ s("span", { className: zn.status, "aria-hidden": "true" })
      ]
    }
  );
}
const Tm = "_root_iy2gv_1", jm = "_left_iy2gv_6", Lm = "_right_iy2gv_7", Pm = "_panel_iy2gv_12", Rm = "_bottom_iy2gv_20", Bm = "_tabList_iy2gv_24", qm = "_underline_iy2gv_53", Fm = "_pills_iy2gv_72", Hm = "_tab_iy2gv_24", Km = "_active_iy2gv_113", Wm = "_disabled_iy2gv_139", en = {
  root: Tm,
  left: jm,
  right: Lm,
  panel: Pm,
  bottom: Rm,
  tabList: Bm,
  underline: qm,
  pills: Fm,
  tab: Hm,
  active: Km,
  disabled: Wm
};
function Zk({
  items: e,
  value: t,
  defaultValue: n,
  onChange: r,
  variant: l = "underline",
  position: i = "top",
  className: d
}) {
  const o = Re(), a = Y(null), [c, u] = W(
    n ?? e[0]?.key ?? ""
  ), f = t ?? c, k = i === "left" || i === "right", v = (y) => {
    u(y), r?.(y);
  }, b = (y) => {
    const _ = e.filter((w) => !w.disabled), h = _.findIndex((w) => w.key === f);
    let g = -1;
    y.key === "ArrowRight" || k && y.key === "ArrowDown" ? g = (h + 1) % _.length : y.key === "ArrowLeft" || k && y.key === "ArrowUp" ? g = (h - 1 + _.length) % _.length : y.key === "Home" ? g = 0 : y.key === "End" && (g = _.length - 1), g >= 0 && (y.preventDefault(), a.current?.querySelector(
      `[data-tab-key="${CSS.escape(_[g]?.key ?? "")}"]`
    )?.focus(), v(_[g]?.key ?? ""));
  }, p = e.find((y) => y.key === f);
  return /* @__PURE__ */ M(
    "div",
    {
      className: [en.root, en[i], d].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ s(
          "div",
          {
            ref: a,
            role: "tablist",
            className: [en.tabList, en[l], en[i]].filter(Boolean).join(" "),
            onKeyDown: b,
            children: e.map((y) => {
              const _ = y.key === f;
              return /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  role: "tab",
                  id: `${o}-tab-${y.key}`,
                  "data-tab-key": y.key,
                  "aria-selected": _,
                  "aria-controls": `${o}-panel-${y.key}`,
                  tabIndex: _ ? 0 : -1,
                  disabled: y.disabled,
                  className: [
                    en.tab,
                    _ ? en.active : null,
                    y.disabled ? en.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => v(y.key),
                  children: y.label
                },
                y.key
              );
            })
          }
        ),
        p && /* @__PURE__ */ s(
          "div",
          {
            role: "tabpanel",
            id: `${o}-panel-${p.key}`,
            "aria-labelledby": `${o}-tab-${p.key}`,
            className: en.panel,
            children: p.content
          }
        )
      ]
    }
  );
}
const Um = "_root_1qkv8_1", Vm = "_item_1qkv8_9", Xm = "_heading_1qkv8_13", Gm = "_trigger_1qkv8_17", Ym = "_disabled_1qkv8_34", Zm = "_title_1qkv8_48", Jm = "_chevron_1qkv8_52", Qm = "_open_1qkv8_59", eg = "_content_1qkv8_63", tn = {
  root: Um,
  item: Vm,
  heading: Xm,
  trigger: Gm,
  disabled: Ym,
  title: Zm,
  chevron: Jm,
  open: Qm,
  content: eg
};
function Jk({
  items: e,
  multiple: t = !1,
  value: n,
  defaultValue: r,
  onChange: l,
  className: i
}) {
  const d = Re(), [o, a] = W(
    r ?? []
  ), c = n ?? o, u = (f) => {
    const k = c.includes(f) ? c.filter((v) => v !== f) : t ? [...c, f] : [f];
    a(k), l?.(k);
  };
  return /* @__PURE__ */ s("div", { className: [tn.root, i].filter(Boolean).join(" "), children: e.map((f) => {
    const k = c.includes(f.key), v = `${d}-panel-${f.key}`, b = `${d}-trigger-${f.key}`;
    return /* @__PURE__ */ M("div", { className: tn.item, children: [
      /* @__PURE__ */ s("h3", { className: tn.heading, children: /* @__PURE__ */ M(
        "button",
        {
          type: "button",
          id: b,
          "aria-expanded": k,
          "aria-controls": v,
          disabled: f.disabled,
          className: [
            tn.trigger,
            f.disabled ? tn.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => u(f.key),
          children: [
            /* @__PURE__ */ s("span", { className: tn.title, children: f.title }),
            /* @__PURE__ */ s(
              "span",
              {
                className: [tn.chevron, k ? tn.open : null].filter(Boolean).join(" "),
                "aria-hidden": "true",
                children: /* @__PURE__ */ s($e, { name: "chevron-down", size: 12 })
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ s(
        "div",
        {
          id: v,
          role: "region",
          "aria-labelledby": b,
          hidden: !k,
          className: tn.content,
          children: f.content
        }
      )
    ] }, f.key);
  }) });
}
const tg = "_textarea_1uei3_1", ng = "_invalid_1uei3_27", sg = "_xs_1uei3_34", rg = "_sm_1uei3_39", og = "_md_1uei3_44", lg = "_lg_1uei3_49", ag = "_xl_1uei3_54", cs = {
  textarea: tg,
  invalid: ng,
  xs: sg,
  sm: rg,
  md: og,
  lg,
  xl: ag,
  "resize-none": "_resize-none_1uei3_59",
  "resize-vertical": "_resize-vertical_1uei3_63",
  "resize-horizontal": "_resize-horizontal_1uei3_67",
  "resize-both": "_resize-both_1uei3_71"
}, Qk = Fe(
  function({ size: t = "md", resize: n = "none", invalid: r = !1, className: l, ...i }, d) {
    return /* @__PURE__ */ s(
      "textarea",
      {
        ref: d,
        "data-size": t,
        className: [
          cs.textarea,
          cs[t],
          cs[`resize-${n}`],
          r ? cs.invalid : null,
          l
        ].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...i
      }
    );
  }
), ig = "_root_jtes6_1", cg = "_trigger_jtes6_9", dg = "_invalid_jtes6_40", ug = "_placeholder_jtes6_47", fg = "_label_jtes6_54", _g = "_chevron_jtes6_60", hg = "_chevronOpen_jtes6_70", pg = "_menu_jtes6_74", mg = "_option_jtes6_89", gg = "_disabled_jtes6_100", xg = "_active_jtes6_104", yg = "_selected_jtes6_105", bg = "_header_jtes6_115", vg = "_xs_jtes6_122", kg = "_sm_jtes6_128", wg = "_md_jtes6_134", $g = "_lg_jtes6_140", Ng = "_xl_jtes6_146", pt = {
  root: ig,
  trigger: cg,
  invalid: dg,
  placeholder: ug,
  label: fg,
  chevron: _g,
  chevronOpen: hg,
  menu: pg,
  option: mg,
  disabled: gg,
  active: xg,
  selected: yg,
  header: bg,
  xs: vg,
  sm: kg,
  md: wg,
  lg: $g,
  xl: Ng
}, Og = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function ew({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: r,
  placeholder: l = "Select…",
  size: i = "md",
  invalid: d = !1,
  disabled: o = !1,
  className: a,
  ...c
}) {
  const u = Re(), f = `${u}-listbox`, k = Y(null), v = Y(null), [b, p] = W(
    n
  ), [y, _] = W(!1), h = t ?? b, g = e.map(
    (m, C) => m.label === "" || m.disabled ? -1 : C
  ).filter((m) => m >= 0), w = e.findIndex(
    (m) => m.value === h
  ), [x, S] = W(
    () => g.includes(0) ? 0 : g[0] ?? -1
  ), $ = R(() => {
    if (o) return;
    const m = w >= 0 && g.includes(w) ? w : g[0];
    S(m ?? -1), _(!0);
  }, [o, w, g]), O = R(() => {
    _(!1), v.current?.focus();
  }, []);
  ge(() => {
    if (!y) return;
    const m = (C) => {
      k.current && !k.current.contains(C.target) && _(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [y]);
  const E = (m) => {
    p(m), r?.(m), _(!1), v.current?.focus();
  }, D = (m) => {
    if (g.length === 0) return;
    const C = g.includes(x) ? g.indexOf(x) : 0, T = g[(C + m + g.length) % g.length];
    T != null && S(T);
  }, z = (m) => {
    if (!y) {
      m.key === "ArrowDown" && (m.preventDefault(), $());
      return;
    }
    switch (m.key) {
      case "ArrowDown":
        m.preventDefault(), D(1);
        break;
      case "ArrowUp":
        m.preventDefault(), D(-1);
        break;
      case "Home":
        m.preventDefault(), g[0] != null && S(g[0]);
        break;
      case "End":
        m.preventDefault(), g[g.length - 1] != null && S(g[g.length - 1]);
        break;
      case "Enter":
      case " ":
        m.preventDefault(), x >= 0 && e[x] && g.includes(x) && E(e[x]?.value ?? "");
        break;
      case "Escape":
        m.preventDefault(), O();
        break;
      case "Tab":
        _(!1);
        break;
    }
  }, N = e.find(
    (m) => m.value === h
  );
  return /* @__PURE__ */ M(
    "div",
    {
      ref: k,
      className: [pt.root, a].filter(Boolean).join(" "),
      onKeyDown: z,
      children: [
        /* @__PURE__ */ M(
          "button",
          {
            ref: v,
            type: "button",
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-expanded": y,
            "aria-controls": f,
            "aria-invalid": d || void 0,
            disabled: o,
            className: [
              pt.trigger,
              pt[i],
              y ? pt.open : null,
              d ? pt.invalid : null
            ].filter(Boolean).join(" "),
            onClick: () => y ? _(!1) : $(),
            ...c,
            children: [
              /* @__PURE__ */ s("span", { className: N ? pt.label : pt.placeholder, children: N ? N.label : l }),
              /* @__PURE__ */ s(
                "span",
                {
                  className: [pt.chevron, y ? pt.chevronOpen : null].filter(Boolean).join(" "),
                  style: { backgroundImage: Og },
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ),
        y && /* @__PURE__ */ s(
          "div",
          {
            id: f,
            role: "listbox",
            "aria-activedescendant": x >= 0 ? `${u}-option-${x}` : void 0,
            className: pt.menu,
            children: e.map(
              (m, C) => m.label === "" ? /* @__PURE__ */ s(
                "div",
                {
                  className: pt.header,
                  role: "presentation",
                  children: m.value
                },
                m.value
              ) : /* @__PURE__ */ s(
                "div",
                {
                  id: `${u}-option-${C}`,
                  role: "option",
                  "aria-selected": m.value === h,
                  "aria-disabled": m.disabled || void 0,
                  className: [
                    pt.option,
                    C === x ? pt.active : null,
                    m.value === h ? pt.selected : null,
                    m.disabled ? pt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    m.disabled || E(m.value);
                  },
                  onMouseEnter: () => {
                    !m.disabled && m.label !== "" && S(C);
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
const Sg = "_root_5j58f_1", Mg = "_wrap_5j58f_9", Cg = "_input_5j58f_26", Dg = "_invalid_5j58f_31", zg = "_clear_5j58f_58", Eg = "_menu_5j58f_83", Ig = "_option_5j58f_98", Ag = "_disabled_5j58f_109", Tg = "_active_5j58f_113", jg = "_empty_5j58f_123", Lg = "_xs_5j58f_129", Pg = "_sm_5j58f_136", Rg = "_md_5j58f_143", Bg = "_lg_5j58f_150", qg = "_xl_5j58f_157", Pt = {
  root: Sg,
  wrap: Mg,
  input: Cg,
  invalid: Dg,
  clear: zg,
  menu: Eg,
  option: Ig,
  disabled: Ag,
  active: Tg,
  empty: jg,
  xs: Lg,
  sm: Pg,
  md: Rg,
  lg: Bg,
  xl: qg
}, Fg = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function tw({
  options: e = [],
  value: t,
  defaultValue: n = "",
  onChange: r,
  onSelect: l,
  placeholder: i = "",
  size: d = "md",
  invalid: o = !1,
  disabled: a = !1,
  filter: c = Fg,
  className: u,
  ...f
}) {
  const k = Re(), v = `${k}-listbox`, b = Y(null), p = Y(null), [y, _] = W(n), [h, g] = W(!1), w = t ?? y, x = xe(
    () => w.trim() === "" ? [...e] : e.filter((A) => c(A, w)),
    [e, w, c]
  ), S = x.map((A, L) => A.disabled ? -1 : L).filter((A) => A >= 0), [$, O] = W(-1), E = (A) => {
    _(A), r?.(A);
  }, D = (A) => {
    E(A.label), l?.(A.value, A), g(!1);
  }, z = (A) => {
    if (S.length === 0) return;
    const L = S.includes($) ? S.indexOf($) : A === 1 ? -1 : 0, Z = S[(L + A + S.length) % S.length];
    Z != null && O(Z);
  }, N = (A) => {
    a || (E(A.target.value), g(!0), O(-1));
  }, m = () => {
    a || w !== "" && g(!0);
  }, C = (A) => {
    b.current && !b.current.contains(A.relatedTarget) && g(!1);
  }, T = (A) => {
    if (!a)
      switch (A.key) {
        case "ArrowDown":
          A.preventDefault(), h ? z(1) : (g(!0), O(S[0] ?? -1));
          break;
        case "ArrowUp":
          A.preventDefault(), h && z(-1);
          break;
        case "Enter":
          A.preventDefault(), h && $ >= 0 && x[$] && D(x[$]);
          break;
        case "Escape":
          A.preventDefault(), g(!1);
          break;
        case "Tab":
          h && $ >= 0 && x[$] && D(x[$]), g(!1);
          break;
      }
  }, j = () => {
    E(""), O(-1), g(!0), p.current?.focus();
  };
  return /* @__PURE__ */ M(
    "div",
    {
      ref: b,
      className: [Pt.root, u].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ M(
          "div",
          {
            className: [Pt.wrap, Pt[d], o ? Pt.invalid : null].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ s(
                "input",
                {
                  ref: p,
                  type: "text",
                  role: "combobox",
                  "aria-expanded": h,
                  "aria-controls": v,
                  "aria-autocomplete": "list",
                  "aria-activedescendant": h && $ >= 0 ? `${k}-option-${$}` : void 0,
                  "aria-invalid": o || void 0,
                  disabled: a,
                  value: w,
                  placeholder: i,
                  className: Pt.input,
                  onChange: N,
                  onFocus: m,
                  onBlur: C,
                  onKeyDown: T,
                  ...f
                }
              ),
              w !== "" && !a && /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: Pt.clear,
                  "aria-label": "Clear",
                  onClick: j,
                  children: /* @__PURE__ */ s($e, { name: "close", size: "sm" })
                }
              )
            ]
          }
        ),
        h && /* @__PURE__ */ s("div", { id: v, role: "listbox", className: Pt.menu, children: x.length === 0 ? /* @__PURE__ */ s("div", { className: Pt.empty, children: "No matches" }) : x.map((A, L) => /* @__PURE__ */ s(
          "div",
          {
            id: `${k}-option-${L}`,
            role: "option",
            "aria-selected": !1,
            "aria-disabled": A.disabled || void 0,
            className: [
              Pt.option,
              L === $ ? Pt.active : null,
              A.disabled ? Pt.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => {
              A.disabled || D(A);
            },
            onMouseDown: (Z) => {
              Z.preventDefault(), A.disabled || D(A);
            },
            onMouseEnter: () => {
              A.disabled || O(L);
            },
            children: A.label
          },
          A.value
        )) })
      ]
    }
  );
}
const Hg = "_box_txdu6_1", Kg = "_option_txdu6_12", Wg = "_disabled_txdu6_23", Ug = "_selected_txdu6_27", Vg = "_active_txdu6_33", Gn = {
  box: Hg,
  option: Kg,
  disabled: Wg,
  selected: Ug,
  active: Vg
};
function nw({
  options: e = [],
  value: t,
  defaultValue: n,
  multiple: r = !1,
  onChange: l,
  className: i,
  style: d,
  ...o
}) {
  const a = Re(), [c, u] = W(() => {
    const x = n;
    return x == null ? [] : Array.isArray(x) ? [...x] : [x];
  }), f = t == null ? c : Array.isArray(t) ? t : [t], k = e.findIndex((x) => !x.disabled), [v, b] = W(
    () => k >= 0 ? k : 0
  ), p = Y(""), y = Y(null), _ = (x) => {
    u(x), l?.(r ? x : x[0] ?? "");
  }, h = e.map((x, S) => x.disabled ? -1 : S).filter((x) => x >= 0), g = (x) => {
    const S = e[x];
    if (!(!S || S.disabled))
      if (b(x), r) {
        const $ = f.includes(S.value) ? f.filter((O) => O !== S.value) : [...f, S.value];
        _($);
      } else
        _([S.value]);
  }, w = (x) => {
    if (h.length === 0) return;
    const S = h.includes(v) ? v : h[0];
    let $ = -1;
    if (x.key === "ArrowDown")
      $ = h[(h.indexOf(S) + 1) % h.length];
    else if (x.key === "ArrowUp")
      $ = h[(h.indexOf(S) - 1 + h.length) % h.length];
    else if (x.key === "Home")
      $ = h[0];
    else if (x.key === "End")
      $ = h[h.length - 1];
    else if (x.key === "Enter" || x.key === " ") {
      x.preventDefault(), g(S);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(x.key)) {
      x.preventDefault();
      const O = (p.current + x.key).toLowerCase();
      p.current = O, y.current && clearTimeout(y.current), y.current = setTimeout(() => {
        p.current = "";
      }, 500);
      const E = [...h, ...h], D = h.indexOf(S) + 1, z = E.slice(D).find((N) => e[N]?.label.toLowerCase().startsWith(O));
      z != null && b(z);
      return;
    }
    $ >= 0 && (x.preventDefault(), b($), r || _([e[$]?.value ?? ""]));
  };
  return /* @__PURE__ */ s(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": r || void 0,
      "aria-activedescendant": e[v] ? `${a}-option-${v}` : void 0,
      style: d,
      className: [Gn.box, i].filter(Boolean).join(" "),
      onKeyDown: w,
      ...o,
      children: e.map((x, S) => {
        const $ = f.includes(x.value), O = S === v;
        return /* @__PURE__ */ s(
          "div",
          {
            id: `${a}-option-${S}`,
            role: "option",
            "aria-selected": $,
            "aria-disabled": x.disabled || void 0,
            className: [
              Gn.option,
              $ ? Gn.selected : null,
              O ? Gn.active : null,
              x.disabled ? Gn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => g(S),
            children: x.label
          },
          x.value
        );
      })
    }
  );
}
const Xg = "_group_1gpkr_1", Gg = "_legend_1gpkr_8", Yg = "_list_1gpkr_16", Zg = "_item_1gpkr_25", Jg = "_disabled_1gpkr_32", Qg = "_label_1gpkr_37", e0 = "_checkbox_1gpkr_48", bn = {
  group: Xg,
  legend: Gg,
  list: Yg,
  item: Zg,
  disabled: Jg,
  label: Qg,
  checkbox: e0
};
function sw({
  options: e = [],
  value: t,
  defaultValue: n = [],
  onChange: r,
  legend: l,
  name: i,
  className: d
}) {
  const [o, a] = W(() => [
    ...n
  ]), c = t ?? o, u = (f, k) => {
    const v = k ? [...c, f] : c.filter((b) => b !== f);
    a(v), r?.(v);
  };
  return /* @__PURE__ */ M("fieldset", { className: [bn.group, d].filter(Boolean).join(" "), children: [
    l != null && /* @__PURE__ */ s("legend", { className: bn.legend, children: l }),
    /* @__PURE__ */ s("ul", { className: bn.list, children: e.map((f) => {
      const k = c.includes(f.value);
      return /* @__PURE__ */ s(
        "li",
        {
          className: [bn.item, f.disabled ? bn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ M("label", { className: bn.label, children: [
            /* @__PURE__ */ s(
              "input",
              {
                type: "checkbox",
                className: bn.checkbox,
                name: i,
                value: f.value,
                checked: k,
                disabled: f.disabled,
                onChange: (v) => u(f.value, v.target.checked)
              }
            ),
            /* @__PURE__ */ s("span", { children: f.label })
          ] })
        },
        f.value
      );
    }) })
  ] });
}
const t0 = "_group_wb5fo_1", n0 = "_legend_wb5fo_8", s0 = "_list_wb5fo_16", r0 = "_item_wb5fo_25", o0 = "_disabled_wb5fo_32", l0 = "_label_wb5fo_37", a0 = "_radio_wb5fo_48", vn = {
  group: t0,
  legend: n0,
  list: s0,
  item: r0,
  disabled: o0,
  label: l0,
  radio: a0
};
function rw({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: r,
  legend: l,
  name: i,
  className: d
}) {
  const [o, a] = W(
    n
  ), c = t ?? o, u = (f) => {
    a(f), r?.(f);
  };
  return /* @__PURE__ */ M("fieldset", { className: [vn.group, d].filter(Boolean).join(" "), children: [
    l != null && /* @__PURE__ */ s("legend", { className: vn.legend, children: l }),
    /* @__PURE__ */ s("ul", { className: vn.list, children: e.map((f) => {
      const k = f.value === c;
      return /* @__PURE__ */ s(
        "li",
        {
          className: [vn.item, f.disabled ? vn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ M("label", { className: vn.label, children: [
            /* @__PURE__ */ s(
              "input",
              {
                type: "radio",
                className: vn.radio,
                name: i,
                value: f.value,
                checked: k,
                disabled: f.disabled,
                onChange: (v) => u(v.target.value)
              }
            ),
            /* @__PURE__ */ s("span", { children: f.label })
          ] })
        },
        f.value
      );
    }) })
  ] });
}
const i0 = "_bar_44vcf_1", c0 = "_vertical_44vcf_12", d0 = "_option_44vcf_17", u0 = "_selected_44vcf_40", f0 = "_sm_44vcf_56", _0 = "_md_44vcf_62", h0 = "_lg_44vcf_68", En = {
  bar: i0,
  vertical: c0,
  option: d0,
  selected: u0,
  sm: f0,
  md: _0,
  lg: h0
};
function cr(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function ow(e) {
  const {
    options: t = [],
    value: n,
    defaultValue: r,
    multiple: l,
    orientation: i = "horizontal",
    onChange: d,
    size: o = "md",
    className: a,
    ...c
  } = e, u = l ?? !1, [f, k] = W(r ?? (u ? [] : t[0]?.value)), v = n ?? f, b = l === !0 || l === void 0 && Array.isArray(v), p = (_) => {
    if (!b) {
      k(_), d?.(_);
      return;
    }
    const h = cr(v), g = h.includes(_) ? h.filter((w) => w !== _) : [...h, _];
    k(g), d?.(g);
  }, y = (_) => b ? cr(v).includes(_) : v === _;
  return /* @__PURE__ */ s(
    "div",
    {
      role: "group",
      className: [
        En.bar,
        En[o],
        i === "vertical" ? En.vertical : null,
        a
      ].filter(Boolean).join(" "),
      ...c,
      children: t.map((_) => {
        const h = y(_.value);
        return /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            "aria-pressed": h,
            disabled: _.disabled,
            className: [
              En.option,
              h ? En.selected : null,
              _.disabled ? En.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => p(_.value),
            children: _.label
          },
          _.value
        );
      })
    }
  );
}
const p0 = "_toggle_bc517_1", m0 = "_pressed_bc517_29", g0 = "_sm_bc517_41", x0 = "_md_bc517_47", y0 = "_lg_bc517_53", b0 = "_fullWidth_bc517_59", ds = {
  toggle: p0,
  pressed: m0,
  sm: g0,
  md: x0,
  lg: y0,
  fullWidth: b0
}, lw = Fe(
  function({
    pressed: t,
    defaultPressed: n = !1,
    onChange: r,
    size: l = "md",
    fullWidth: i = !1,
    className: d,
    type: o = "button",
    ...a
  }, c) {
    const [u, f] = W(n), k = t ?? u, v = () => {
      const b = !k;
      f(b), r?.(b);
    };
    return /* @__PURE__ */ s(
      "button",
      {
        ref: c,
        type: o,
        "aria-pressed": k,
        className: [
          ds.toggle,
          ds[l],
          k ? ds.pressed : null,
          i ? ds.fullWidth : null,
          d
        ].filter(Boolean).join(" "),
        onClick: v,
        ...a
      }
    );
  }
), v0 = "_root_pn7s6_1", k0 = "_action_pn7s6_285", w0 = "_filled_pn7s6_305", $0 = "_caret_pn7s6_309", N0 = "_flat_pn7s6_331", O0 = "_outlined_pn7s6_343", S0 = "_text_pn7s6_352", M0 = "_sm_pn7s6_451", C0 = "_md_pn7s6_463", D0 = "_lg_pn7s6_475", z0 = "_menu_pn7s6_487", E0 = "_item_pn7s6_500", I0 = "_disabled_pn7s6_521", A0 = "_active_pn7s6_525", T0 = "_danger_pn7s6_534", zt = {
  root: v0,
  "style-primary": "_style-primary_pn7s6_10",
  "style-secondary": "_style-secondary_pn7s6_18",
  "style-base": "_style-base_pn7s6_26",
  "style-light": "_style-light_pn7s6_34",
  "style-dark": "_style-dark_pn7s6_42",
  "style-info": "_style-info_pn7s6_50",
  "style-success": "_style-success_pn7s6_58",
  "style-warning": "_style-warning_pn7s6_66",
  "style-danger": "_style-danger_pn7s6_74",
  action: k0,
  filled: w0,
  caret: $0,
  flat: N0,
  outlined: O0,
  text: S0,
  "shade-lighter": "_shade-lighter_pn7s6_370",
  "shade-light": "_shade-light_pn7s6_370",
  "shade-dark": "_shade-dark_pn7s6_380",
  "shade-darker": "_shade-darker_pn7s6_384",
  sm: M0,
  md: C0,
  lg: D0,
  menu: z0,
  item: E0,
  disabled: I0,
  active: A0,
  danger: T0
};
function aw({
  label: e,
  onClick: t,
  items: n = [],
  severity: r = "primary",
  variant: l = "filled",
  shade: i = "default",
  size: d = "md",
  disabled: o = !1,
  className: a,
  ...c
}) {
  const f = `${Re()}-menu`, k = Y(null), v = Y(null), b = Y([]), [p, y] = W(!1), [_, h] = W(-1), g = xe(
    () => n.map((N, m) => N.disabled ? -1 : m).filter((N) => N >= 0),
    [n]
  ), w = R(() => {
    o || (h(g[0] ?? -1), y(!0));
  }, [o, g]), x = R(() => {
    y(!1), v.current?.focus();
  }, []);
  ge(() => {
    if (!p) return;
    const N = (m) => {
      k.current && !k.current.contains(m.target) && y(!1);
    };
    return document.addEventListener("mousedown", N), () => document.removeEventListener("mousedown", N);
  }, [p]);
  const S = Y(p);
  ge(() => {
    const N = S.current;
    if (S.current = p, !p || N) return;
    const m = g.includes(_) ? _ : g[0] ?? -1;
    m >= 0 && b.current[m]?.focus();
  }, [p, _, g]);
  const $ = (N) => {
    const m = n[N];
    !m || m.disabled || (m.onClick?.(), y(!1), v.current?.focus());
  }, O = (N) => {
    if (g.length === 0) return;
    const m = g.includes(_) ? g.indexOf(_) : N === 1 ? -1 : 0, C = g[(m + N + g.length) % g.length];
    C != null && (h(C), b.current[C]?.focus());
  }, E = (N) => {
    const m = N === "first" ? g[0] : g[g.length - 1];
    m != null && (h(m), b.current[m]?.focus());
  }, D = (N) => {
    switch (N.key) {
      case "ArrowDown":
        N.preventDefault(), O(1);
        break;
      case "ArrowUp":
        N.preventDefault(), O(-1);
        break;
      case "Home":
        N.preventDefault(), E("first");
        break;
      case "End":
        N.preventDefault(), E("last");
        break;
      case "Escape":
        N.preventDefault(), x();
        break;
      case "Tab":
        y(!1);
        break;
    }
  }, z = Rn(i);
  return /* @__PURE__ */ M(
    "div",
    {
      ref: k,
      className: [
        zt.root,
        zt[d],
        zt[`style-${r}`],
        zt[Bs(l, "filled")],
        z ? zt[z] : null,
        a
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: zt.action,
            disabled: o,
            onClick: t,
            children: e
          }
        ),
        /* @__PURE__ */ s(
          "button",
          {
            ref: v,
            type: "button",
            className: zt.caret,
            "aria-haspopup": "menu",
            "aria-expanded": p,
            "aria-controls": f,
            "aria-label": "More actions",
            disabled: o,
            onClick: () => p ? y(!1) : w(),
            onKeyDown: (N) => {
              !p && N.key === "ArrowDown" && (N.preventDefault(), w());
            },
            children: /* @__PURE__ */ s($e, { name: "chevron-down" })
          }
        ),
        p && /* @__PURE__ */ s(
          "div",
          {
            id: f,
            role: "menu",
            tabIndex: -1,
            className: zt.menu,
            onKeyDown: D,
            ...c,
            children: n.map((N, m) => /* @__PURE__ */ s(
              "button",
              {
                ref: (C) => {
                  b.current[m] = C;
                },
                type: "button",
                role: "menuitem",
                tabIndex: m === _ ? 0 : -1,
                disabled: N.disabled,
                className: [
                  zt.item,
                  m === _ ? zt.active : null,
                  N.danger ? zt.danger : null,
                  N.disabled ? zt.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => $(m),
                onMouseEnter: () => {
                  N.disabled || h(m);
                },
                children: N.label
              },
              N.key
            ))
          }
        )
      ]
    }
  );
}
const j0 = "_wrapper_eg26m_1", L0 = "_input_eg26m_8", P0 = "_invalid_eg26m_38", R0 = "_toggle_eg26m_45", B0 = "_xs_eg26m_80", q0 = "_sm_eg26m_86", F0 = "_md_eg26m_92", H0 = "_lg_eg26m_98", K0 = "_xl_eg26m_104", Yn = {
  wrapper: j0,
  input: L0,
  invalid: P0,
  toggle: R0,
  xs: B0,
  sm: q0,
  md: F0,
  lg: H0,
  xl: K0
}, iw = Fe(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    disabled: l,
    showLabel: i = "Show password",
    hideLabel: d = "Hide password",
    ...o
  }, a) {
    const [c, u] = W(!1);
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ M("div", { className: Yn.wrapper, "data-size": t, children: [
        /* @__PURE__ */ s(
          "input",
          {
            ref: a,
            type: c ? "text" : "password",
            disabled: l,
            className: [
              Yn.input,
              Yn[t],
              n ? Yn.invalid : null,
              r
            ].filter(Boolean).join(" "),
            "aria-invalid": n || void 0,
            ...o
          }
        ),
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: Yn.toggle,
            "aria-pressed": c,
            "aria-label": c ? d : i,
            disabled: l,
            onClick: () => u((f) => !f),
            children: /* @__PURE__ */ s($e, { name: c ? "eye-off" : "eye", size: 16 })
          }
        )
      ] })
    );
  }
), W0 = "_mask_1pv7j_1", U0 = "_invalid_1pv7j_31", V0 = "_xs_1pv7j_38", X0 = "_sm_1pv7j_44", G0 = "_md_1pv7j_50", Y0 = "_lg_1pv7j_56", Z0 = "_xl_1pv7j_62", Ss = {
  mask: W0,
  invalid: U0,
  xs: V0,
  sm: X0,
  md: G0,
  lg: Y0,
  xl: Z0
};
function dr(e, t) {
  let n = e.replace(/\D/g, ""), r = "";
  for (const l of t)
    if (l === "#") {
      if (n.length === 0) break;
      r += n[0] ?? "", n = n.slice(1);
    } else if (n.length > 0)
      r += l;
    else
      break;
  return r;
}
const cw = Fe(function({
  size: t = "md",
  invalid: n = !1,
  mask: r,
  value: l,
  defaultValue: i = "",
  onChange: d,
  className: o,
  onKeyDown: a,
  ...c
}, u) {
  const [f, k] = W(i ?? ""), v = l !== void 0, b = v ? l ?? "" : f, p = (h) => {
    const g = dr(h, r);
    return v || k(g), d?.(g), g;
  };
  return /* @__PURE__ */ s(
    "input",
    {
      ref: u,
      type: "text",
      "data-size": t,
      value: b,
      onChange: (h) => {
        p(h.target.value);
      },
      onKeyDown: (h) => {
        if (h.key === "Backspace") {
          const g = h.currentTarget.selectionStart ?? b.length, w = b[g - 1];
          if (w !== void 0 && !/\d/.test(w)) {
            h.preventDefault();
            const x = b.replace(/\D/g, "");
            p(dr(x.slice(0, -1), r));
          }
        }
        a?.(h);
      },
      className: [
        Ss.mask,
        Ss[t],
        n ? Ss.invalid : null,
        o
      ].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...c
    }
  );
}), J0 = "_wrapper_b3q45_1", Q0 = "_input_b3q45_8", ex = "_invalid_b3q45_38", tx = "_button_b3q45_45", nx = "_up_b3q45_77", sx = "_down_b3q45_82", rx = "_xs_b3q45_87", ox = "_sm_b3q45_93", lx = "_md_b3q45_99", ax = "_lg_b3q45_105", ix = "_xl_b3q45_111", dn = {
  wrapper: J0,
  input: Q0,
  invalid: ex,
  button: tx,
  up: nx,
  down: sx,
  xs: rx,
  sm: ox,
  md: lx,
  lg: ax,
  xl: ix
};
function Es(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function cx(e) {
  let t = "", n = !1;
  for (const r of e)
    r >= "0" && r <= "9" ? t += r : r === "." && !n ? (n = !0, t += r) : r === "-" && t.length === 0 && (t += r);
  return t;
}
function Ir(e, t, n) {
  return Math.min(n ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function dx(e, t, n) {
  return t === void 0 ? e : t + Math.round((e - t) / n) * n;
}
function ux(e, t, n, r, l) {
  const d = Es(e) ?? n ?? 0;
  let o;
  return n === void 0 ? o = d + t * l : t > 0 ? o = n + Math.ceil((d - n + 1e-9) / l) * l : o = n + Math.floor((d - n - 1e-9) / l) * l, Ir(o, n, r);
}
const dw = Fe(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    disabled: l,
    value: i,
    defaultValue: d,
    onChange: o,
    min: a,
    max: c,
    step: u = 1,
    incrementLabel: f = "Increment",
    decrementLabel: k = "Decrement",
    onBlur: v,
    onKeyDown: b,
    ...p
  }, y) {
    const [_, h] = W(
      d != null ? String(d) : ""
    ), g = i !== void 0, w = g ? i == null ? "" : String(i) : _, x = (z) => {
      g || h(z), o?.(Es(z));
    }, S = (z) => {
      g || h(String(z)), o?.(z);
    }, $ = (z) => {
      l || S(ux(w, z, a, c, u));
    }, O = (z) => {
      x(cx(z.target.value));
    }, E = (z) => {
      z.key === "ArrowUp" ? (z.preventDefault(), $(1)) : z.key === "ArrowDown" && (z.preventDefault(), $(-1)), b?.(z);
    }, D = (z) => {
      const N = Es(w);
      N === null ? (g || h(""), o?.(null)) : S(Ir(dx(N, a, u), a, c)), v?.(z);
    };
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ M("div", { className: dn.wrapper, "data-size": t, children: [
        /* @__PURE__ */ s(
          "input",
          {
            ref: y,
            type: "text",
            inputMode: "decimal",
            autoComplete: "off",
            value: w,
            disabled: l,
            onChange: O,
            onKeyDown: E,
            onBlur: D,
            className: [
              dn.input,
              dn[t],
              n ? dn.invalid : null,
              r
            ].filter(Boolean).join(" "),
            "aria-invalid": n || void 0,
            ...p
          }
        ),
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: [dn.button, dn.up].join(" "),
            "aria-label": f,
            disabled: l,
            onClick: () => $(1),
            children: /* @__PURE__ */ s($e, { name: "chevron-up", size: 14 })
          }
        ),
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: [dn.button, dn.down].join(" "),
            "aria-label": k,
            disabled: l,
            onClick: () => $(-1),
            children: /* @__PURE__ */ s($e, { name: "chevron-down", size: 14 })
          }
        )
      ] })
    );
  }
), Oe = {
  "dx-colorpicker": "_dx-colorpicker_23q7s_1",
  "dx-colorpicker-invalid": "_dx-colorpicker-invalid_23q7s_8",
  "dx-colorpicker-trigger": "_dx-colorpicker-trigger_23q7s_8",
  "dx-colorpicker-trigger-xs": "_dx-colorpicker-trigger-xs_23q7s_41",
  "dx-colorpicker-trigger-sm": "_dx-colorpicker-trigger-sm_23q7s_47",
  "dx-colorpicker-trigger-lg": "_dx-colorpicker-trigger-lg_23q7s_53",
  "dx-colorpicker-trigger-xl": "_dx-colorpicker-trigger-xl_23q7s_59",
  "dx-colorpicker-value": "_dx-colorpicker-value_23q7s_65",
  "dx-colorpicker-text": "_dx-colorpicker-text_23q7s_96",
  "dx-colorpicker-chevron": "_dx-colorpicker-chevron_23q7s_106",
  "dx-colorpicker-open": "_dx-colorpicker-open_23q7s_115",
  "dx-colorpicker-popup": "_dx-colorpicker-popup_23q7s_119",
  "dx-colorpicker-panel": "_dx-colorpicker-panel_23q7s_133",
  "dx-saturation-picker": "_dx-saturation-picker_23q7s_138",
  "dx-hue-picker": "_dx-hue-picker_23q7s_149",
  "dx-alpha-picker": "_dx-alpha-picker_23q7s_150",
  "dx-saturation-indicator": "_dx-saturation-indicator_23q7s_155",
  "dx-hue-indicator": "_dx-hue-indicator_23q7s_180",
  "dx-alpha-indicator": "_dx-alpha-indicator_23q7s_204",
  "dx-colorpicker-rgba": "_dx-colorpicker-rgba_23q7s_217",
  "dx-colorpicker-rgba-field": "_dx-colorpicker-rgba-field_23q7s_224",
  "dx-colorpicker-rgba-label": "_dx-colorpicker-rgba-label_23q7s_231",
  "dx-colorpicker-rgba-input": "_dx-colorpicker-rgba-input_23q7s_236",
  "dx-colorpicker-palette": "_dx-colorpicker-palette_23q7s_256",
  "dx-colorpicker-swatch": "_dx-colorpicker-swatch_23q7s_263",
  "dx-colorpicker-footer": "_dx-colorpicker-footer_23q7s_291",
  "dx-colorpicker-ok": "_dx-colorpicker-ok_23q7s_300"
}, fx = [
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
function Mt(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function Is(e) {
  const t = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(e.trim());
  if (!t) return null;
  let n = t[1];
  return n.length === 3 && (n = n.split("").map((r) => r + r).join("")), {
    r: Number.parseInt(n.slice(0, 2), 16),
    g: Number.parseInt(n.slice(2, 4), 16),
    b: Number.parseInt(n.slice(4, 6), 16),
    a: 1
  };
}
function _x({ r: e, g: t, b: n }) {
  const r = (l) => Math.round(l).toString(16).padStart(2, "0");
  return `#${r(e)}${r(t)}${r(n)}`;
}
function hx({ r: e, g: t, b: n }) {
  const r = e / 255, l = t / 255, i = n / 255, d = Math.max(r, l, i), o = Math.min(r, l, i), a = d - o;
  let c = 0;
  return a !== 0 && (d === r ? c = (l - i) / a % 6 : d === l ? c = (i - r) / a + 2 : c = (r - l) / a + 4, c *= 60, c < 0 && (c += 360)), {
    h: c,
    s: d === 0 ? 0 : a / d,
    v: d
  };
}
function In({ h: e, s: t, v: n }) {
  const r = n * t, l = e / 60, i = r * (1 - Math.abs(l % 2 - 1));
  let d = 0, o = 0, a = 0;
  l < 1 ? (d = r, o = i) : l < 2 ? (d = i, o = r) : l < 3 ? (o = r, a = i) : l < 4 ? (o = i, a = r) : l < 5 ? (d = i, a = r) : (d = r, a = i);
  const c = n - r;
  return {
    r: Math.round((d + c) * 255),
    g: Math.round((o + c) * 255),
    b: Math.round((a + c) * 255),
    a: 1
  };
}
function px(e) {
  const t = Is(e);
  if (t) return t;
  const n = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*([\d.]+))?\s*\)$/i.exec(
    e.trim()
  );
  return n ? {
    r: Mt(Number(n[1]), 0, 255),
    g: Mt(Number(n[2]), 0, 255),
    b: Mt(Number(n[3]), 0, 255),
    a: n[4] != null ? Mt(Number(n[4]), 0, 1) : 1
  } : null;
}
function ur({ r: e, g: t, b: n, a: r }) {
  return r >= 1 ? `rgb(${e}, ${t}, ${n})` : `rgba(${e}, ${t}, ${n}, ${Math.round(r * 100) / 100})`;
}
const uw = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: n = !0,
  showPalette: r = !0,
  palette: l = fx,
  showButton: i = !1,
  showArrow: d = !0,
  disabled: o = !1,
  invalid: a = !1,
  placeholder: c = "",
  size: u = "md",
  tabIndex: f = 0,
  className: k,
  onChange: v,
  onValueChange: b,
  onOpen: p,
  onClose: y
}) => {
  const _ = Y(null), h = Y(null), g = Y(null), w = Y(null), x = Y(null), S = Re(), $ = Y(null), O = xe(
    () => px(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [E, D] = W(!1), [z, N] = W(null), m = z ?? O, C = xe(() => hx(m), [m]), T = R(
    (U) => {
      const I = ur(U);
      v?.(I), b?.(I);
    },
    [v, b]
  ), j = R(
    (U, I) => {
      N(U), I && !i && T(U);
    },
    [i, T]
  ), A = R(() => {
    D(!1), N(null), y?.(), h.current?.focus();
  }, [y]), L = R(() => {
    o || (N(O), D(!0), p?.());
  }, [o, O, p]), Z = R(() => {
    E ? A() : L();
  }, [E, A, L]), se = R(
    (U, I) => {
      const q = g.current;
      if (!q) return C;
      const Q = q.getBoundingClientRect(), ue = Mt((U - Q.left) / Q.width, 0, 1), J = Mt(1 - (I - Q.top) / Q.height, 0, 1);
      return { h: C.h, s: ue, v: J };
    },
    [C]
  ), ne = R(
    (U, I) => {
      if (!I) return 0;
      const q = I.getBoundingClientRect();
      return Mt((U - q.left) / q.width, 0, 1);
    },
    []
  ), X = (U) => {
    if (o) return;
    U.preventDefault(), U.currentTarget.setPointerCapture(U.pointerId), $.current = "sat";
    const I = se(U.clientX, U.clientY);
    j({ ...In(I), a: m.a }, !0);
  }, pe = (U) => {
    if ($.current !== "sat") return;
    U.preventDefault();
    const I = se(U.clientX, U.clientY);
    j({ ...In(I), a: m.a }, !0);
  }, de = (U) => {
    if (o) return;
    U.preventDefault(), U.currentTarget.setPointerCapture(U.pointerId), $.current = "hue";
    const I = ne(U.clientX, w.current);
    j(
      { ...In({ ...C, h: I * 360 }), a: m.a },
      !0
    );
  }, re = (U) => {
    if ($.current !== "hue") return;
    U.preventDefault();
    const I = ne(U.clientX, w.current);
    j(
      { ...In({ ...C, h: I * 360 }), a: m.a },
      !0
    );
  }, K = (U) => {
    if (o) return;
    U.preventDefault(), U.currentTarget.setPointerCapture(U.pointerId), $.current = "alpha";
    const I = ne(U.clientX, x.current);
    j({ ...m, a: I }, !0);
  }, ie = (U) => {
    if ($.current !== "alpha") return;
    U.preventDefault();
    const I = ne(U.clientX, x.current);
    j({ ...m, a: I }, !0);
  }, te = () => {
    $.current = null;
  }, oe = R(
    (U, I) => {
      const q = {
        h: C.h,
        s: Mt(C.s + U, 0, 1),
        v: Mt(C.v + I, 0, 1)
      };
      j({ ...In(q), a: m.a }, !0);
    },
    [C, m.a, j]
  ), _e = R(
    (U) => {
      const I = (C.h + U + 360) % 360;
      j({ ...In({ ...C, h: I }), a: m.a }, !0);
    },
    [C, m.a, j]
  ), ve = R(
    (U) => {
      j({ ...m, a: Mt(m.a + U, 0, 1) }, !0);
    },
    [m, j]
  ), Ce = (U) => {
    switch (U.key) {
      case "ArrowLeft":
        U.preventDefault(), oe(-0.05, 0);
        break;
      case "ArrowRight":
        U.preventDefault(), oe(0.05, 0);
        break;
      case "ArrowUp":
        U.preventDefault(), oe(0, 0.05);
        break;
      case "ArrowDown":
        U.preventDefault(), oe(0, -0.05);
        break;
      case "Escape":
        U.preventDefault(), A();
        break;
    }
  }, Le = (U, I) => {
    switch (U.key) {
      case "ArrowLeft":
        U.preventDefault(), I === "hue" ? _e(-6) : ve(-0.05);
        break;
      case "ArrowRight":
        U.preventDefault(), I === "hue" ? _e(6) : ve(0.05);
        break;
      case "Escape":
        U.preventDefault(), A();
        break;
    }
  }, we = (U, I) => {
    if (U === "hex") {
      const J = Is(I);
      J && j({ ...J, a: m.a }, !0);
      return;
    }
    const q = I.replace(/[^\d.]/g, ""), Q = Number.parseFloat(q);
    if (Number.isNaN(Q)) return;
    if (U === "a") {
      const J = q.includes(".") ? Mt(Q, 0, 1) : Mt(Q / 100, 0, 1);
      j({ ...m, a: J }, !0);
      return;
    }
    const ue = { r: 255, g: 255, b: 255 };
    j(
      { ...m, [U]: Mt(Q, 0, ue[U]) },
      !0
    );
  }, Te = () => {
    z && (T(z), N(null), D(!1), y?.(), h.current?.focus());
  };
  ge(() => {
    if (!E) return;
    const U = (I) => {
      _.current && !_.current.contains(I.target) && A();
    };
    return document.addEventListener("mousedown", U), () => document.removeEventListener("mousedown", U);
  }, [E, A]), ge(() => {
    if (!E) return;
    const U = (I) => {
      I.key === "Escape" && A();
    };
    return document.addEventListener("keydown", U), () => document.removeEventListener("keydown", U);
  }, [E, A]);
  const Me = u === "xs" ? Oe["dx-colorpicker-trigger-xs"] : u === "sm" ? Oe["dx-colorpicker-trigger-sm"] : u === "lg" ? Oe["dx-colorpicker-trigger-lg"] : u === "xl" ? Oe["dx-colorpicker-trigger-xl"] : Oe["dx-colorpicker-trigger"], st = ur(m), rt = _x(m), He = { x: C.s * 100, y: (1 - C.v) * 100 }, At = C.h / 360 * 100, ot = m.a * 100, wt = /* @__PURE__ */ M("div", { className: Oe["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ s(
      "div",
      {
        ref: g,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(C.s * 100),
        "aria-valuetext": `Saturation ${Math.round(C.s * 100)}%, value ${Math.round(C.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : f,
        className: Oe["dx-saturation-picker"],
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${C.h}, 100%, 50%)`
        },
        onKeyDown: Ce,
        onPointerDown: X,
        onPointerMove: pe,
        onPointerUp: te,
        children: /* @__PURE__ */ s(
          "span",
          {
            className: Oe["dx-saturation-indicator"],
            style: { left: `${He.x}%`, top: `${He.y}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    t && /* @__PURE__ */ s(
      "div",
      {
        ref: w,
        role: "slider",
        "aria-label": "Hue",
        "aria-valuemin": 0,
        "aria-valuemax": 360,
        "aria-valuenow": Math.round(C.h),
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : f,
        className: Oe["dx-hue-picker"],
        onKeyDown: (U) => Le(U, "hue"),
        onPointerDown: de,
        onPointerMove: re,
        onPointerUp: te,
        children: /* @__PURE__ */ s(
          "span",
          {
            className: Oe["dx-hue-indicator"],
            style: { left: `${At}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    t && /* @__PURE__ */ s(
      "div",
      {
        ref: x,
        role: "slider",
        "aria-label": "Alpha",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(ot),
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : f,
        className: Oe["dx-alpha-picker"],
        style: {
          background: `repeating-conic-gradient(var(--dx-border-color) 0% 25%, var(--dx-surface-color) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${C.h}, 100%, 50%))`
        },
        onKeyDown: (U) => Le(U, "alpha"),
        onPointerDown: K,
        onPointerMove: ie,
        onPointerUp: te,
        children: /* @__PURE__ */ s(
          "span",
          {
            className: Oe["dx-alpha-indicator"],
            style: { left: `${ot}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    n && /* @__PURE__ */ M("div", { className: Oe["dx-colorpicker-rgba"], children: [
      /* @__PURE__ */ M("label", { className: Oe["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ s("span", { className: Oe["dx-colorpicker-rgba-label"], children: "Hex" }),
        /* @__PURE__ */ s(
          "input",
          {
            type: "text",
            maxLength: 7,
            className: Oe["dx-colorpicker-rgba-input"],
            "aria-label": "Hex",
            value: rt,
            onChange: (U) => we("hex", U.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ M("label", { className: Oe["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ s("span", { className: Oe["dx-colorpicker-rgba-label"], children: "R" }),
        /* @__PURE__ */ s(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Oe["dx-colorpicker-rgba-input"],
            "aria-label": "Red",
            value: m.r,
            onChange: (U) => we("r", U.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ M("label", { className: Oe["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ s("span", { className: Oe["dx-colorpicker-rgba-label"], children: "G" }),
        /* @__PURE__ */ s(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Oe["dx-colorpicker-rgba-input"],
            "aria-label": "Green",
            value: m.g,
            onChange: (U) => we("g", U.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ M("label", { className: Oe["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ s("span", { className: Oe["dx-colorpicker-rgba-label"], children: "B" }),
        /* @__PURE__ */ s(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Oe["dx-colorpicker-rgba-input"],
            "aria-label": "Blue",
            value: m.b,
            onChange: (U) => we("b", U.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ M("label", { className: Oe["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ s("span", { className: Oe["dx-colorpicker-rgba-label"], children: "A" }),
        /* @__PURE__ */ s(
          "input",
          {
            type: "text",
            inputMode: "decimal",
            maxLength: 4,
            className: Oe["dx-colorpicker-rgba-input"],
            "aria-label": "Alpha",
            value: Math.round(m.a * 100),
            onChange: (U) => we("a", U.target.value)
          }
        )
      ] })
    ] }),
    r && /* @__PURE__ */ s("div", { className: Oe["dx-colorpicker-palette"], children: l.map((U) => /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        className: Oe["dx-colorpicker-swatch"],
        "aria-label": U,
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : f,
        style: { backgroundColor: U },
        onClick: () => {
          const I = Is(U);
          i ? j({ ...I, a: m.a }, !1) : (N(null), T({ ...I, a: m.a }), D(!1), y?.(), h.current?.focus());
        }
      },
      U
    )) }),
    i && /* @__PURE__ */ s("div", { className: Oe["dx-colorpicker-footer"], children: /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        className: Oe["dx-colorpicker-ok"],
        onClick: Te,
        children: "OK"
      }
    ) })
  ] });
  return /* @__PURE__ */ M(
    "div",
    {
      ref: _,
      className: [
        Oe["dx-colorpicker"],
        E ? Oe["dx-colorpicker-open"] : null,
        a ? Oe["dx-colorpicker-invalid"] : null,
        k
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ M(
          "button",
          {
            ref: h,
            type: "button",
            className: [Oe["dx-colorpicker-trigger"], Me].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": E,
            "aria-controls": S,
            "aria-label": "Pick a color",
            "aria-disabled": o || void 0,
            disabled: o,
            tabIndex: f,
            onClick: Z,
            onKeyDown: (U) => {
              U.key === "Escape" && E && (U.preventDefault(), A());
            },
            children: [
              /* @__PURE__ */ s(
                "span",
                {
                  className: Oe["dx-colorpicker-value"],
                  style: { backgroundColor: st },
                  "aria-hidden": "true"
                }
              ),
              c && /* @__PURE__ */ s("span", { className: Oe["dx-colorpicker-text"], children: c }),
              d && /* @__PURE__ */ s("span", { className: Oe["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ s($e, { name: "chevron-down", size: 14 }) })
            ]
          }
        ),
        E && /* @__PURE__ */ s(
          "div",
          {
            id: S,
            role: "dialog",
            "aria-label": "Choose color",
            className: Oe["dx-colorpicker-popup"],
            children: wt
          }
        )
      ]
    }
  );
}, De = {
  "dx-datepicker": "_dx-datepicker_1ateg_1",
  "dx-datepicker-inline": "_dx-datepicker-inline_1ateg_9",
  "dx-datepicker-input": "_dx-datepicker-input_1ateg_13",
  "dx-datepicker-input-invalid": "_dx-datepicker-input-invalid_1ateg_43",
  "dx-datepicker-input--xs": "_dx-datepicker-input--xs_1ateg_50",
  "dx-datepicker-input--sm": "_dx-datepicker-input--sm_1ateg_56",
  "dx-datepicker-input--md": "_dx-datepicker-input--md_1ateg_62",
  "dx-datepicker-input--lg": "_dx-datepicker-input--lg_1ateg_68",
  "dx-datepicker-input--xl": "_dx-datepicker-input--xl_1ateg_74",
  "dx-datepicker-trigger": "_dx-datepicker-trigger_1ateg_80",
  "dx-datepicker-clear": "_dx-datepicker-clear_1ateg_115",
  "dx-datepicker-clear--inset": "_dx-datepicker-clear--inset_1ateg_145",
  "dx-datepicker-popup": "_dx-datepicker-popup_1ateg_149",
  "dx-datepicker-calendar": "_dx-datepicker-calendar_1ateg_161",
  "dx-datepicker-header": "_dx-datepicker-header_1ateg_167",
  "dx-datepicker-nav": "_dx-datepicker-nav_1ateg_175",
  "dx-datepicker-title": "_dx-datepicker-title_1ateg_201",
  "dx-datepicker-grid": "_dx-datepicker-grid_1ateg_209",
  "dx-datepicker-week-row": "_dx-datepicker-week-row_1ateg_214",
  "dx-datepicker-row": "_dx-datepicker-row_1ateg_215",
  "dx-datepicker-weekday": "_dx-datepicker-weekday_1ateg_220",
  "dx-datepicker-day": "_dx-datepicker-day_1ateg_230",
  "dx-datepicker-day--today": "_dx-datepicker-day--today_1ateg_258",
  "dx-datepicker-day--selected": "_dx-datepicker-day--selected_1ateg_262",
  "dx-datepicker-day--outside": "_dx-datepicker-day--outside_1ateg_272",
  "dx-datepicker-day--disabled": "_dx-datepicker-day--disabled_1ateg_277",
  "dx-datepicker-time": "_dx-datepicker-time_1ateg_283",
  "dx-datepicker-time-field": "_dx-datepicker-time-field_1ateg_292",
  "dx-datepicker-time-label": "_dx-datepicker-time-label_1ateg_298",
  "dx-datepicker-time-control": "_dx-datepicker-time-control_1ateg_303",
  "dx-datepicker-time-input": "_dx-datepicker-time-input_1ateg_307",
  "dx-datepicker-time-buttons": "_dx-datepicker-time-buttons_1ateg_327",
  "dx-datepicker-ok": "_dx-datepicker-ok_1ateg_355"
}, mx = 42;
function Ct(e) {
  return String(e).padStart(2, "0");
}
function kt(e) {
  return `${e.year}-${Ct(e.month)}-${Ct(e.day)}`;
}
function gx(e, t) {
  const n = kt(e);
  return t ? `${n} ${Ct(e.hour)}:${Ct(e.minute)}:${Ct(e.second)}` : n;
}
function As(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!t) return null;
  const n = Number(t[1]), r = Number(t[2]), l = Number(t[3]), i = t[4] != null ? Number(t[4]) : 0, d = t[5] != null ? Number(t[5]) : 0, o = t[6] != null ? Number(t[6]) : 0;
  if (r < 1 || r > 12 || l < 1 || l > 31) return null;
  const a = new Date(n, r - 1, l, i, d, o);
  return a.getFullYear() !== n || a.getMonth() !== r - 1 || a.getDate() !== l ? null : { year: n, month: r, day: l, hour: i, minute: d, second: o };
}
function un() {
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
function nn(e, t) {
  const n = new Date(
    e.year,
    e.month - 1,
    e.day + t,
    e.hour,
    e.minute,
    e.second
  );
  return {
    year: n.getFullYear(),
    month: n.getMonth() + 1,
    day: n.getDate(),
    hour: e.hour,
    minute: e.minute,
    second: e.second
  };
}
function us(e, t) {
  const n = new Date(e.year, e.month - 1 + t, 1), r = n.getFullYear(), l = n.getMonth() + 1, i = new Date(r, l, 0).getDate();
  return {
    year: r,
    month: l,
    day: Math.min(e.day, i),
    hour: e.hour,
    minute: e.minute,
    second: e.second
  };
}
function fr(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const _r = {
  yyyy: (e) => String(e.year).padStart(4, "0"),
  yy: (e) => Ct(e.year % 100),
  MM: (e) => Ct(e.month),
  M: (e) => String(e.month),
  dd: (e) => Ct(e.day),
  d: (e) => String(e.day),
  HH: (e) => Ct(e.hour),
  H: (e) => String(e.hour),
  mm: (e) => Ct(e.minute),
  m: (e) => String(e.minute),
  ss: (e) => Ct(e.second),
  s: (e) => String(e.second),
  tt: (e, t, n) => new Intl.DateTimeFormat(n, {
    hour: "numeric",
    hour12: !0
  }).formatToParts(t).find((l) => l.type === "dayPeriod")?.value ?? ""
}, xx = [
  "yyyy",
  "yy",
  "MM",
  "dd",
  "HH",
  "mm",
  "ss",
  "tt"
], yx = ["y", "M", "d", "H", "m", "s"];
function fs(e, t, n) {
  const r = new Date(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second
  );
  let l = "", i = 0;
  for (; i < t.length; ) {
    let d = !1;
    for (const a of xx)
      if (t.startsWith(a, i)) {
        l += _r[a](e, r, n), i += a.length, d = !0;
        break;
      }
    if (d) continue;
    const o = t[i];
    if (yx.includes(o)) {
      l += _r[o](e, r, n), i += 1;
      continue;
    }
    l += o, i += 1;
  }
  return l;
}
const bx = [
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
function vx(e, t) {
  const n = {};
  let r = 0, l = 0;
  for (; l < t.length; ) {
    let o = null;
    for (const a of bx)
      if (t.startsWith(a, l)) {
        o = a;
        break;
      }
    if (o) {
      const a = e.slice(r, r + o.length);
      if (!/^\d+$/.test(a)) return null;
      const c = Number(a);
      switch (o) {
        case "yyyy":
          n.year = c;
          break;
        case "yy":
        case "y":
          n.year = 2e3 + c;
          break;
        case "MM":
        case "M":
          n.month = c;
          break;
        case "dd":
        case "d":
          n.day = c;
          break;
        case "HH":
        case "H":
          n.hour = c;
          break;
        case "mm":
        case "m":
          n.minute = c;
          break;
        case "ss":
        case "s":
          n.second = c;
          break;
      }
      r += o.length, l += o.length;
      continue;
    }
    if (e[r] !== t[l]) return null;
    r += 1, l += 1;
  }
  const i = {
    year: n.year ?? (/* @__PURE__ */ new Date()).getFullYear(),
    month: n.month ?? 1,
    day: n.day ?? 1,
    hour: n.hour ?? 0,
    minute: n.minute ?? 0,
    second: n.second ?? 0
  };
  if (i.month < 1 || i.month > 12 || i.day < 1 || i.day > 31)
    return null;
  const d = new Date(
    i.year,
    i.month - 1,
    i.day,
    i.hour,
    i.minute,
    i.second
  );
  return d.getFullYear() !== i.year || d.getMonth() !== i.month - 1 || d.getDate() !== i.day ? null : i;
}
function Zn(e, t) {
  const n = As(e);
  return n || vx(e, t);
}
function kx(e, t, n) {
  return t && kt(e) < kt(t) ? t : n && kt(e) > kt(n) ? n : e;
}
const wx = ["hour", "minute", "second"];
function _s(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const fw = Fe(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: l,
    format: i = "yyyy-MM-dd",
    min: d,
    max: o,
    showTime: a = !1,
    showButton: c = !0,
    allowClear: u = !1,
    inline: f = !1,
    disabledDates: k,
    locale: v = "en-US",
    onChange: b,
    onValueChange: p,
    onOpen: y,
    onClose: _,
    disabled: h,
    readOnly: g,
    placeholder: w,
    ariaLabel: x,
    triggerLabel: S,
    clearLabel: $,
    tabIndex: O,
    className: E,
    onBlur: D,
    onKeyDown: z,
    ...N
  }, m) {
    const C = Y(null), T = Y(null), j = Y(null), A = Y(null), L = Re(), Z = r !== void 0, [se, ne] = W(
      () => l != null ? fs(
        Zn(l, i) ?? un(),
        i,
        v
      ) : ""
    ), [X, pe] = W(!1), [de, re] = W(null), [K, ie] = W(() => {
      const H = r !== void 0 ? r ?? "" : l ?? "";
      if (H) {
        const le = Zn(H, i);
        if (le) return le;
      }
      return un();
    }), te = xe(() => d ? As(d) : null, [d]), oe = xe(() => o ? As(o) : null, [o]), _e = xe(
      () => new Set(k ?? []),
      [k]
    ), ve = xe(() => {
      const H = Z ? r ?? "" : se;
      return H ? Zn(H, i) : null;
    }, [r, se, Z, i]), Ce = R(
      (H) => {
        const le = kt(H);
        return !!(_e.has(le) || te && le < kt(te) || oe && le > kt(oe));
      },
      [_e, te, oe]
    ), Le = R(
      (H) => {
        if (!Ce(H)) return H;
        for (let le = 1; le <= 366; le += 1) {
          const Ae = nn(H, le);
          if (!Ce(Ae)) return Ae;
          const Be = nn(H, -le);
          if (!Ce(Be)) return Be;
        }
        return H;
      },
      [Ce]
    ), we = R(
      (H) => {
        Z || ne(H ? fs(H, i, v) : "");
        const le = H ? gx(H, a) : "";
        b?.(le), p?.(le);
      },
      [Z, i, v, a, b, p]
    ), Te = R(
      (H) => {
        T.current = H, typeof m == "function" ? m(H) : m && (m.current = H);
      },
      [m]
    ), Me = R(() => {
      pe(!1), re(null), _?.(), f || j.current?.focus();
    }, [f, _]), st = R(() => {
      if (h) return;
      const H = ve ?? un();
      re(H), ie(Le(H)), pe(!0), y?.();
    }, [h, ve, Le, y]), rt = R(() => {
      X ? Me() : st();
    }, [X, Me, st]), He = R((H) => {
      A.current?.querySelector(
        `[data-date="${kt(H)}"]`
      )?.focus();
    }, []), At = R(
      (H) => {
        if (Ce(H)) return;
        const le = de ?? ve, Be = {
          ...a ? {
            hour: le?.hour ?? 0,
            minute: le?.minute ?? 0,
            second: le?.second ?? 0
          } : { hour: 0, minute: 0, second: 0 },
          year: H.year,
          month: H.month,
          day: H.day
        };
        re(Be), a || (we(Be), Me());
      },
      [Ce, de, ve, a, we, Me]
    ), ot = R(
      (H, le) => {
        re((Ae) => {
          const Be = Ae ?? ve ?? un(), Tt = Math.min(H === "hour" ? 23 : 59, Math.max(0, Be[H] + le));
          return { ...Be, [H]: Tt };
        });
      },
      [ve]
    ), wt = R(
      (H, le) => {
        const Ae = le.replace(/\D/g, ""), Be = Ae === "" ? 0 : Number(Ae), at = H === "hour" ? 23 : 59;
        re((Tt) => ({ ...Tt ?? ve ?? un(), [H]: Math.min(at, Be) }));
      },
      [ve]
    ), U = R(() => {
      de && (we(de), Me());
    }, [de, we, Me]), I = R(() => {
      if (X) return;
      const H = Zn(se, i);
      we(H ? kx(H, te, oe) : null);
    }, [X, se, i, te, oe, we]), q = (H) => {
      const le = H.target.value;
      Z || ne(le), X && re(null);
    }, Q = (H) => {
      H.key === "Enter" ? (H.preventDefault(), X ? de && (we(de), Me()) : I()) : H.key === "Escape" ? X && (H.preventDefault(), Me()) : H.key === "ArrowDown" && !X ? (H.preventDefault(), st()) : H.key === "Tab" && X && pe(!1), z?.(H);
    }, ue = (H) => {
      I(), D?.(H);
    }, J = (H) => {
      let le = null;
      switch (H.key) {
        case "ArrowLeft":
          le = nn(K, -1), H.preventDefault();
          break;
        case "ArrowRight":
          le = nn(K, 1), H.preventDefault();
          break;
        case "ArrowUp":
          le = nn(K, -7), H.preventDefault();
          break;
        case "ArrowDown":
          le = nn(K, 7), H.preventDefault();
          break;
        case "Home":
          le = nn(K, -fr(K)), H.preventDefault();
          break;
        case "End":
          le = nn(K, 6 - fr(K)), H.preventDefault();
          break;
        case "PageUp":
          le = us(K, H.shiftKey ? -12 : -1), H.preventDefault();
          break;
        case "PageDown":
          le = us(K, H.shiftKey ? 12 : 1), H.preventDefault();
          break;
        case "Enter":
        case " ":
          H.preventDefault(), At(K);
          break;
        case "Escape":
          H.preventDefault(), Me();
          break;
        case "Tab":
          pe(!1);
          break;
      }
      if (le) {
        const Ae = Le(le);
        ie(Ae), setTimeout(() => He(Ae), 0);
      }
    };
    ge(() => {
      if (!X) return;
      const H = (le) => {
        C.current && !C.current.contains(le.target) && Me();
      };
      return document.addEventListener("mousedown", H), () => document.removeEventListener("mousedown", H);
    }, [X, Me]), ge(() => {
      if (!X) return;
      const H = (le) => {
        le.key === "Escape" && Me();
      };
      return document.addEventListener("keydown", H), () => document.removeEventListener("keydown", H);
    }, [X, Me]);
    const ye = () => {
      Z || ne(""), b?.(""), p?.(""), T.current?.focus();
    }, ze = X && de ? fs(de, i, v) : Z ? r ? fs(
      Zn(r, i) ?? un(),
      i,
      v
    ) : "" : se, Pe = Z ? !!r : se.length > 0, Ye = f || X, ut = { year: K.year, month: K.month }, pn = new Date(ut.year, ut.month - 1, 1).getDay(), G = {
      year: ut.year,
      month: ut.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, Se = [];
    for (let H = 0; H < mx; H += 1)
      Se.push(nn(G, H - pn));
    const et = de ? kt(de) : ve ? kt(ve) : null, Dt = kt(un()), $t = `${ut.year}-${Ct(ut.month)}`, Ne = xe(
      () => new Intl.DateTimeFormat(v, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      [v]
    ), Ke = new Intl.DateTimeFormat(v, {
      month: "long",
      year: "numeric"
    }).format(new Date(ut.year, ut.month - 1, 1)), lt = Array.from(
      { length: 7 },
      (H, le) => new Intl.DateTimeFormat(v, { weekday: "short" }).format(
        new Date(2021, 0, 3 + le)
      )
    ), We = t === "xs" ? De["dx-datepicker-input--xs"] : t === "sm" ? De["dx-datepicker-input--sm"] : t === "lg" ? De["dx-datepicker-input--lg"] : t === "xl" ? De["dx-datepicker-input--xl"] : De["dx-datepicker-input--md"], Yt = /* @__PURE__ */ M(
      "div",
      {
        className: De["dx-datepicker-calendar"],
        "aria-label": x ?? "Date picker",
        children: [
          /* @__PURE__ */ M("div", { className: De["dx-datepicker-header"], children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: De["dx-datepicker-nav"],
                "aria-label": "Previous month",
                onClick: () => {
                  const H = Le(us(K, -1));
                  ie(H), setTimeout(() => He(H), 0);
                },
                children: /* @__PURE__ */ s($e, { name: "chevron-left", size: 16 })
              }
            ),
            /* @__PURE__ */ s("span", { className: De["dx-datepicker-title"], children: Ke }),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: De["dx-datepicker-nav"],
                "aria-label": "Next month",
                onClick: () => {
                  const H = Le(us(K, 1));
                  ie(H), setTimeout(() => He(H), 0);
                },
                children: /* @__PURE__ */ s($e, { name: "chevron-right", size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ M(
            "div",
            {
              ref: A,
              role: "grid",
              className: De["dx-datepicker-grid"],
              onKeyDown: J,
              children: [
                /* @__PURE__ */ s("div", { role: "row", className: De["dx-datepicker-week-row"], children: lt.map((H) => /* @__PURE__ */ s(
                  "div",
                  {
                    role: "columnheader",
                    className: De["dx-datepicker-weekday"],
                    children: H
                  },
                  H
                )) }),
                Array.from({ length: 6 }, (H, le) => /* @__PURE__ */ s(
                  "div",
                  {
                    role: "row",
                    className: De["dx-datepicker-row"],
                    children: Se.slice(le * 7, le * 7 + 7).map((Ae) => {
                      const Be = kt(Ae), at = Ce(Ae), Tt = Be.startsWith($t);
                      return /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          role: "gridcell",
                          "data-date": Be,
                          tabIndex: Be === kt(K) ? 0 : -1,
                          "aria-selected": Be === et || void 0,
                          "aria-disabled": at || void 0,
                          "aria-label": Ne.format(
                            new Date(Ae.year, Ae.month - 1, Ae.day)
                          ),
                          className: [
                            De["dx-datepicker-day"],
                            Tt ? null : De["dx-datepicker-day--outside"],
                            Be === Dt ? De["dx-datepicker-day--today"] : null,
                            Be === et ? De["dx-datepicker-day--selected"] : null,
                            at ? De["dx-datepicker-day--disabled"] : null
                          ].filter(Boolean).join(" "),
                          onClick: () => At(Ae),
                          onFocus: () => ie(Ae),
                          children: Ae.day
                        },
                        Be
                      );
                    })
                  },
                  le
                ))
              ]
            }
          ),
          a && /* @__PURE__ */ M("div", { className: De["dx-datepicker-time"], children: [
            wx.map((H) => /* @__PURE__ */ M("label", { className: De["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ s("span", { className: De["dx-datepicker-time-label"], children: _s(H) }),
              /* @__PURE__ */ M("div", { className: De["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    className: De["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": _s(H),
                    value: Ct(
                      (de ?? ve ?? un())[H]
                    ),
                    onChange: (le) => wt(H, le.target.value),
                    onKeyDown: (le) => {
                      le.key === "ArrowUp" ? (le.preventDefault(), ot(H, 1)) : le.key === "ArrowDown" ? (le.preventDefault(), ot(H, -1)) : le.key === "Enter" && (le.preventDefault(), U());
                    }
                  }
                ),
                /* @__PURE__ */ M("span", { className: De["dx-datepicker-time-buttons"], children: [
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Increase ${_s(H).toLowerCase()}`,
                      onClick: () => ot(H, 1),
                      children: /* @__PURE__ */ s($e, { name: "chevron-up", size: 11 })
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Decrease ${_s(H).toLowerCase()}`,
                      onClick: () => ot(H, -1),
                      children: /* @__PURE__ */ s($e, { name: "chevron-down", size: 11 })
                    }
                  )
                ] })
              ] })
            ] }, H)),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: De["dx-datepicker-ok"],
                onClick: U,
                children: "OK"
              }
            )
          ] })
        ]
      }
    );
    return /* @__PURE__ */ M(
      "div",
      {
        ref: C,
        className: [
          De["dx-datepicker"],
          f ? De["dx-datepicker-inline"] : null,
          E
        ].filter(Boolean).join(" "),
        children: [
          !f && /* @__PURE__ */ M(ke, { children: [
            /* @__PURE__ */ s(
              "input",
              {
                ref: Te,
                type: "text",
                autoComplete: "off",
                value: ze,
                disabled: h,
                readOnly: g,
                placeholder: w,
                tabIndex: O,
                role: c ? void 0 : "combobox",
                "aria-label": x ?? "Date",
                "aria-haspopup": c ? void 0 : "dialog",
                "aria-expanded": c ? void 0 : Ye,
                "aria-controls": c ? void 0 : L,
                "aria-invalid": n || void 0,
                className: [
                  De["dx-datepicker-input"],
                  We,
                  n ? De["dx-datepicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: q,
                onKeyDown: Q,
                onBlur: ue,
                onClick: () => {
                  c || rt();
                },
                ...N
              }
            ),
            u && !h && Pe && /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: [
                  De["dx-datepicker-clear"],
                  c ? De["dx-datepicker-clear--inset"] : null
                ].filter(Boolean).join(" "),
                "aria-label": $ ?? "Clear",
                onClick: ye,
                children: /* @__PURE__ */ s($e, { name: "close", size: 14 })
              }
            ),
            c && /* @__PURE__ */ s(
              "button",
              {
                ref: j,
                type: "button",
                className: [De["dx-datepicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": S ?? "Open calendar",
                "aria-haspopup": "dialog",
                "aria-expanded": X,
                "aria-controls": L,
                disabled: h,
                onClick: rt,
                children: /* @__PURE__ */ s($e, { name: "calendar", size: 16 })
              }
            )
          ] }),
          Ye && /* @__PURE__ */ s(
            "div",
            {
              id: L,
              role: f ? void 0 : "dialog",
              className: f ? void 0 : De["dx-datepicker-popup"],
              children: Yt
            }
          )
        ]
      }
    );
  }
), fn = {
  "dx-rating": "_dx-rating_yg52p_1",
  "dx-rating-item": "_dx-rating-item_yg52p_8",
  "dx-rating-item-filled": "_dx-rating-item-filled_yg52p_28",
  "dx-rating-icon-filled": "_dx-rating-icon-filled_yg52p_43",
  "dx-rating-icon-empty": "_dx-rating-icon-empty_yg52p_51",
  "dx-rating-clear": "_dx-rating-clear_yg52p_55",
  "dx-rating-readonly": "_dx-rating-readonly_yg52p_87",
  "dx-rating-disabled": "_dx-rating-disabled_yg52p_96"
}, _w = ({
  value: e = 0,
  stars: t = 5,
  readOnly: n = !1,
  disabled: r = !1,
  ariaLabel: l = "Rating",
  clearLabel: i = "Clear",
  rateLabel: d = "Rate",
  tabIndex: o = 0,
  className: a,
  onChange: c,
  onValueChange: u
}) => {
  const [f, k] = W(e), v = R(
    (h) => Math.min(t, Math.max(1, h)),
    [t]
  ), b = R(
    (h) => {
      c?.(h), u?.(h);
    },
    [c, u]
  ), p = R(
    (h) => {
      n || r || (b(h), k(h));
    },
    [n, r, b]
  ), y = (h) => {
    if (n || r) return;
    const g = f > 0 ? f : 1;
    switch (h.key) {
      case "ArrowRight":
      case "ArrowUp":
        h.preventDefault(), p(v(g + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        h.preventDefault(), p(v(g - 1));
        break;
      case "Home":
        h.preventDefault(), p(1);
        break;
      case "End":
        h.preventDefault(), p(t);
        break;
    }
  }, _ = Array.from({ length: t }, (h, g) => g + 1);
  return /* @__PURE__ */ M(
    "div",
    {
      role: "radiogroup",
      "aria-label": l,
      "aria-readonly": n || void 0,
      className: [
        fn["dx-rating"],
        n ? fn["dx-rating-readonly"] : null,
        r ? fn["dx-rating-disabled"] : null,
        a
      ].filter(Boolean).join(" "),
      onKeyDown: y,
      children: [
        !n && !r && /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: fn["dx-rating-clear"],
            "aria-label": i,
            tabIndex: e === 0 ? o : -1,
            disabled: r,
            onClick: () => p(0),
            children: /* @__PURE__ */ s($e, { name: "ban", size: 16 })
          }
        ),
        _.map((h) => {
          const g = h <= e, w = h === (e > 0 ? e : f);
          return /* @__PURE__ */ M(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": g,
              "aria-posinset": h,
              "aria-setsize": t,
              "aria-label": `${d} ${h}`,
              tabIndex: w ? o : -1,
              "aria-disabled": r || n || void 0,
              disabled: r || n,
              className: [
                fn["dx-rating-item"],
                g ? fn["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => p(h),
              onFocus: () => k(h),
              children: [
                /* @__PURE__ */ s(
                  "span",
                  {
                    className: fn["dx-rating-icon-filled"],
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ s($e, { name: "star", size: 20 })
                  }
                ),
                /* @__PURE__ */ s("span", { className: fn["dx-rating-icon-empty"], "aria-hidden": "true", children: /* @__PURE__ */ s($e, { name: "star-outline", size: 20 }) })
              ]
            },
            h
          );
        })
      ]
    }
  );
}, kn = {
  "dx-slider": "_dx-slider_x6ptv_1",
  "dx-slider-track": "_dx-slider-track_x6ptv_9",
  "dx-slider-range": "_dx-slider-range_x6ptv_17",
  "dx-slider-handle": "_dx-slider-handle_x6ptv_26",
  "dx-slider-vertical": "_dx-slider-vertical_x6ptv_58",
  "dx-slider-disabled": "_dx-slider-disabled_x6ptv_84"
};
function Ut(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const hw = ({
  value: e = 0,
  valueMin: t = 0,
  valueMax: n = 100,
  min: r = 0,
  max: l = 100,
  step: i = 1,
  range: d = !1,
  orientation: o = "horizontal",
  disabled: a = !1,
  label: c = "Value",
  minLabel: u = "Min",
  maxLabel: f = "Max",
  tabIndex: k = 0,
  className: v,
  onChange: b,
  onInput: p,
  onValueChange: y,
  onInputChange: _
}) => {
  const h = Y(null), g = Y(
    null
  ), [w, x] = W(null), S = w ?? e, $ = xe(
    () => Ut(S, r, l),
    [S, r, l]
  ), O = xe(
    () => Ut(d ? t : $, r, l),
    [d, t, $, r, l]
  ), E = xe(
    () => Ut(d ? Math.max(n, O) : $, r, l),
    [d, n, O, $, r, l]
  ), D = R(
    (K) => {
      const ie = l - r;
      return ie <= 0 ? 0 : (Ut(K, r, l) - r) / ie * 100;
    },
    [r, l]
  ), z = R(
    (K, ie) => {
      const te = h.current;
      if (!te) return r;
      const oe = te.getBoundingClientRect();
      let _e;
      o === "vertical" ? _e = 1 - (ie - oe.top) / oe.height : _e = (K - oe.left) / oe.width;
      const ve = r + Ut(_e, 0, 1) * (l - r);
      return i > 0 ? Ut(Math.round(ve / i) * i, r, l) : Ut(ve, r, l);
    },
    [r, l, i, o]
  ), N = R(
    (K) => {
      typeof K == "number" && x(K), b?.(K), y?.(K);
    },
    [b, y]
  ), m = R(
    (K) => {
      typeof K == "number" && x(K), p?.(K), _?.(K);
    },
    [p, _]
  ), C = R(
    (K, ie, te) => {
      const oe = z(ie, te);
      let _e;
      d ? K === "min" ? _e = { min: Math.min(oe, E), max: E } : _e = { min: O, max: Math.max(oe, O) } : _e = oe, m(_e), g.current === null && N(_e);
    },
    [d, z, O, E, m, N]
  ), T = R(
    (K, ie) => {
      const te = (i > 0 ? i : 1) * ie;
      let oe;
      d ? K === "min" ? oe = {
        min: Ut(O + te, r, E),
        max: E
      } : oe = {
        min: O,
        max: Ut(E + te, O, l)
      } : oe = Ut($ + te, r, l), N(oe);
    },
    [d, i, r, l, O, E, $, N]
  ), j = (K, ie) => {
    if (!a)
      switch (ie.key) {
        case "ArrowLeft":
        case "ArrowDown":
          ie.preventDefault(), T(K, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          ie.preventDefault(), T(K, 1);
          break;
        case "Home":
          ie.preventDefault(), N(d ? K === "min" ? { min: r, max: E } : { min: O, max: O } : r);
          break;
        case "End":
          ie.preventDefault(), N(d ? K === "min" ? { min: E, max: E } : { min: O, max: l } : l);
          break;
      }
  }, A = (K, ie) => {
    a || (ie.preventDefault(), ie.currentTarget.focus(), typeof ie.currentTarget.setPointerCapture == "function" && ie.currentTarget.setPointerCapture(ie.pointerId), g.current = { key: K, pointerId: ie.pointerId }, C(K, ie.clientX, ie.clientY));
  }, L = (K) => {
    !g.current || g.current.pointerId !== K.pointerId || (K.preventDefault(), C(g.current.key, K.clientX, K.clientY));
  }, Z = (K) => {
    !g.current || g.current.pointerId !== K.pointerId || (g.current = null, K.preventDefault(), N(d ? { min: O, max: E } : $));
  }, [se, ne] = W(null), X = D(O), pe = D(E), de = d ? X : 0, re = pe;
  return /* @__PURE__ */ s(
    "div",
    {
      className: [
        kn["dx-slider"],
        o === "vertical" ? kn["dx-slider-vertical"] : null,
        a ? kn["dx-slider-disabled"] : null,
        v
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ M("div", { ref: h, className: kn["dx-slider-track"], children: [
        /* @__PURE__ */ s(
          "div",
          {
            className: kn["dx-slider-range"],
            style: o === "vertical" ? { bottom: `${de}%`, height: `${re - de}%` } : { left: `${de}%`, width: `${re - de}%` }
          }
        ),
        /* @__PURE__ */ s(
          "div",
          {
            role: "slider",
            "aria-valuemin": r,
            "aria-valuemax": l,
            "aria-valuenow": Math.round(O),
            "aria-orientation": o,
            "aria-label": d ? u : c,
            "aria-disabled": a || void 0,
            tabIndex: a || d && se === "max" ? -1 : k,
            className: kn["dx-slider-handle"],
            style: o === "vertical" ? { bottom: `calc(${X}% - 8px)` } : { left: `calc(${X}% - 8px)` },
            onKeyDown: (K) => j("min", K),
            onPointerDown: (K) => A("min", K),
            onPointerMove: L,
            onPointerUp: Z,
            onFocus: () => ne("min")
          }
        ),
        d && /* @__PURE__ */ s(
          "div",
          {
            role: "slider",
            "aria-valuemin": r,
            "aria-valuemax": l,
            "aria-valuenow": Math.round(E),
            "aria-orientation": o,
            "aria-label": f,
            "aria-disabled": a || void 0,
            tabIndex: a || se === "min" ? -1 : k,
            className: kn["dx-slider-handle"],
            style: o === "vertical" ? { bottom: `calc(${pe}% - 8px)` } : { left: `calc(${pe}% - 8px)` },
            onKeyDown: (K) => j("max", K),
            onPointerDown: (K) => A("max", K),
            onPointerMove: L,
            onPointerUp: Z,
            onFocus: () => ne("max")
          }
        )
      ] })
    }
  );
}, Ue = {
  "dx-timespanpicker": "_dx-timespanpicker_155vn_1",
  "dx-timespanpicker-inline": "_dx-timespanpicker-inline_155vn_9",
  "dx-timespanpicker-input": "_dx-timespanpicker-input_155vn_13",
  "dx-timespanpicker-input-invalid": "_dx-timespanpicker-input-invalid_155vn_43",
  "dx-timespanpicker-input--xs": "_dx-timespanpicker-input--xs_155vn_50",
  "dx-timespanpicker-input--sm": "_dx-timespanpicker-input--sm_155vn_56",
  "dx-timespanpicker-input--md": "_dx-timespanpicker-input--md_155vn_62",
  "dx-timespanpicker-input--lg": "_dx-timespanpicker-input--lg_155vn_68",
  "dx-timespanpicker-input--xl": "_dx-timespanpicker-input--xl_155vn_74",
  "dx-timespanpicker-trigger": "_dx-timespanpicker-trigger_155vn_80",
  "dx-timespanpicker-clear": "_dx-timespanpicker-clear_155vn_115",
  "dx-timespanpicker-popup": "_dx-timespanpicker-popup_155vn_145",
  "dx-timespanpicker-panel": "_dx-timespanpicker-panel_155vn_157",
  "dx-timespanpicker-preview": "_dx-timespanpicker-preview_155vn_164",
  "dx-timespanpicker-units": "_dx-timespanpicker-units_155vn_173",
  "dx-timespanpicker-unit": "_dx-timespanpicker-unit_155vn_173",
  "dx-timespanpicker-unit-label": "_dx-timespanpicker-unit-label_155vn_185",
  "dx-timespanpicker-unit-control": "_dx-timespanpicker-unit-control_155vn_190",
  "dx-timespanpicker-unit-input": "_dx-timespanpicker-unit-input_155vn_194",
  "dx-timespanpicker-unit-buttons": "_dx-timespanpicker-unit-buttons_155vn_214",
  "dx-timespanpicker-footer": "_dx-timespanpicker-footer_155vn_242",
  "dx-timespanpicker-ok": "_dx-timespanpicker-ok_155vn_250"
}, $x = "-10675199.02:48:05.4775808", Nx = "10675199.02:48:05.4775808", rn = 86400, on = 3600, Rt = 60, Ms = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, hr = {
  days: rn,
  hours: on,
  minutes: Rt,
  seconds: 1
}, Ox = {
  day: rn,
  hour: on,
  minute: Rt,
  second: 1
};
function An(e) {
  return String(e).padStart(2, "0");
}
function ss(e) {
  const t = e.trim();
  if (!t) return null;
  let n = 1, r = t;
  r.startsWith("-") ? (n = -1, r = r.slice(1)) : r.startsWith("+") && (r = r.slice(1));
  const l = /^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(
    r
  );
  if (l) {
    if (!l.slice(1).some((f) => f != null)) return null;
    const o = l[1] != null ? Number(l[1]) : 0, a = l[2] != null ? Number(l[2]) : 0, c = l[3] != null ? Number(l[3]) : 0, u = l[4] != null ? Number(l[4]) : 0;
    return n * (o * rn + a * on + c * Rt + u);
  }
  const i = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(
    r
  );
  if (i) {
    const d = i[1] != null ? Number(i[1]) : 0, o = Number(i[2]), a = Number(i[3]), c = i[4] != null ? Number(i[4]) : 0, u = i[5] != null ? +`0.${i[5]}` : 0;
    return o > 23 || a > 59 || c > 59 ? null : n * (d * rn + o * on + a * Rt + c + u);
  }
  return null;
}
function Sx(e) {
  return e.days * rn + e.hours * on + e.minutes * Rt + e.seconds;
}
function pr(e) {
  let t = Math.abs(e);
  const n = Math.floor(t / rn);
  t %= rn;
  const r = Math.floor(t / on);
  t %= on;
  const l = Math.floor(t / Rt), i = Math.round(t % Rt * 1e9) / 1e9;
  return { days: n, hours: r, minutes: l, seconds: i };
}
function Ts(e, t) {
  const n = e < 0;
  let r = Math.abs(e);
  t === "minute" ? r = Math.round(r / Rt) * Rt : t === "hour" ? r = Math.round(r / on) * on : t === "day" && (r = Math.round(r / rn) * rn);
  let l = Math.round(r % Rt);
  const i = l === 60 ? 1 : 0;
  l = l === 60 ? 0 : l;
  const d = Math.floor(r / Rt) + i, o = d % 60, a = Math.floor(d / 60), c = a % 24, u = Math.floor(a / 24), f = n ? "-" : "", k = u > 0 ? `${u}.` : "";
  switch (t) {
    case "day":
      return `${f}${u} day${u === 1 ? "" : "s"}`;
    case "hour":
      return `${f}${k}${An(c)}`;
    case "minute":
      return `${f}${k}${An(c)}:${An(o)}`;
    default:
      return `${f}${k}${An(c)}:${An(o)}:${An(l)}`;
  }
}
function mr(e, t = "second") {
  const n = ss(e);
  return n === null ? "" : Ts(n, t);
}
function Cs(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const pw = Fe(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: l,
    min: i = $x,
    max: d = Nx,
    step: o = "1",
    precision: a = "second",
    showDays: c = !0,
    showHours: u = !0,
    showMinutes: f = !0,
    showSeconds: k = !0,
    allowClear: v = !1,
    inline: b = !1,
    onChange: p,
    onValueChange: y,
    onOpen: _,
    onClose: h,
    disabled: g,
    placeholder: w,
    ariaLabel: x,
    triggerLabel: S,
    clearLabel: $,
    tabIndex: O,
    className: E,
    onBlur: D,
    onKeyDown: z,
    ...N
  }, m) {
    const C = Y(null), T = Y(null), j = Y(null), A = Re(), L = r !== void 0, [Z, se] = W(
      () => l != null ? mr(l, a) : ""
    ), [ne, X] = W(!1), [pe, de] = W(null), [re, K] = W(null), ie = xe(
      () => ss(i) ?? -Number.MAX_SAFE_INTEGER,
      [i]
    ), te = xe(
      () => ss(d) ?? Number.MAX_SAFE_INTEGER,
      [d]
    ), oe = xe(() => {
      const G = Number.parseFloat(o);
      return Number.isNaN(G) || G <= 0 ? 1 : G;
    }, [o]), _e = xe(() => {
      const G = L ? r ?? "" : Z;
      return G ? ss(G) : null;
    }, [r, Z, L]), ve = R(
      (G) => {
        const Se = G === null ? "" : Ts(G, a);
        L || se(Se), p?.(Se), y?.(Se);
      },
      [L, a, p, y]
    ), Ce = R(
      (G) => {
        G && pe !== null && ve(pe), X(!1), de(null), K(null), h?.(), b || j.current?.focus();
      },
      [b, pe, ve, h]
    ), Le = R(() => {
      g || (de(_e ?? 0), X(!0), _?.());
    }, [g, _e, _]), we = R(() => {
      ne ? Ce(!1) : Le();
    }, [ne, Ce, Le]), Te = R(
      (G, Se) => {
        de((et) => {
          const $t = (et ?? _e ?? 0) + Se * oe * hr[G];
          return Cs($t, ie, te);
        });
      },
      [_e, oe, ie, te]
    ), Me = R(
      (G) => {
        const Se = re?.[G];
        if (Se == null) return;
        const et = Number.parseFloat(Se), Dt = Number.isNaN(et) ? 0 : et;
        de(($t) => {
          const Ne = $t ?? _e ?? 0, Ke = pr(Ne);
          Ke[G] = Dt;
          const We = (Ne < 0 ? -1 : 1) * Sx(Ke);
          return Cs(We, ie, te);
        }), K(null);
      },
      [re, _e, ie, te]
    ), st = (G, Se) => {
      K((et) => ({ ...et ?? {}, [G]: Se }));
    }, rt = (G, Se) => {
      switch (Se.key) {
        case "ArrowUp":
          Se.preventDefault(), Me(G), Te(G, 1);
          break;
        case "ArrowDown":
          Se.preventDefault(), Me(G), Te(G, -1);
          break;
        case "Home":
          Se.preventDefault(), Me(G), de(ie);
          break;
        case "End":
          Se.preventDefault(), Me(G), de(te);
          break;
        case "Enter":
          Se.preventDefault(), Me(G), Ce(!0);
          break;
      }
    }, He = R(() => {
      if (ne) return;
      const G = ss(Z);
      ve(G !== null ? Cs(G, ie, te) : null);
    }, [ne, Z, ie, te, ve]), At = (G) => {
      L || se(G.target.value);
    }, ot = (G) => {
      G.key === "Enter" ? (G.preventDefault(), ne ? Ce(!0) : He()) : G.key === "Escape" && ne ? (G.preventDefault(), Ce(!1)) : G.key === "ArrowDown" && !ne ? (G.preventDefault(), Le()) : G.key === "Tab" && ne && X(!1), z?.(G);
    }, wt = (G) => {
      He(), D?.(G);
    }, U = () => {
      L || se(""), p?.(""), y?.(""), T.current?.focus();
    };
    ge(() => {
      if (!ne) return;
      const G = (Se) => {
        C.current && !C.current.contains(Se.target) && Ce(!1);
      };
      return document.addEventListener("mousedown", G), () => document.removeEventListener("mousedown", G);
    }, [ne, Ce]), ge(() => {
      if (!ne) return;
      const G = (Se) => {
        Se.key === "Escape" && Ce(!1);
      };
      return document.addEventListener("keydown", G), () => document.removeEventListener("keydown", G);
    }, [ne, Ce]), ge(() => {
      if (b && pe !== null) {
        const G = _e;
        (G === null || Math.abs(pe - G) > 1e-9) && ve(pe);
      }
    }, [b, pe, _e, ve]);
    const I = R(
      (G) => {
        T.current = G, typeof m == "function" ? m(G) : m && (m.current = G);
      },
      [m]
    ), q = L ? r ? mr(r, a) : "" : Z, Q = L ? !!r : Z.length > 0, ue = b || ne, J = pe ?? _e ?? 0, ye = pr(J), ze = Ox[a], Ye = ["days", "hours", "minutes", "seconds"].filter(
      (G) => hr[G] >= ze && (G === "days" ? c : G === "hours" ? u : G === "minutes" ? f : k)
    ), ut = t === "xs" ? Ue["dx-timespanpicker-input--xs"] : t === "sm" ? Ue["dx-timespanpicker-input--sm"] : t === "lg" ? Ue["dx-timespanpicker-input--lg"] : t === "xl" ? Ue["dx-timespanpicker-input--xl"] : Ue["dx-timespanpicker-input--md"], pn = /* @__PURE__ */ M("div", { className: Ue["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ s("div", { className: Ue["dx-timespanpicker-preview"], "aria-live": "polite", children: Ts(J, a) }),
      /* @__PURE__ */ s("div", { className: Ue["dx-timespanpicker-units"], children: Ye.map((G) => /* @__PURE__ */ M("label", { className: Ue["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ s("span", { className: Ue["dx-timespanpicker-unit-label"], children: Ms[G] }),
        /* @__PURE__ */ M("span", { className: Ue["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ s(
            "input",
            {
              className: Ue["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: re?.[G] ?? String(ye[G]),
              onChange: (Se) => st(G, Se.target.value),
              onKeyDown: (Se) => rt(G, Se),
              onBlur: () => Me(G)
            }
          ),
          /* @__PURE__ */ M("span", { className: Ue["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${Ms[G].toLowerCase()}`,
                onClick: () => {
                  Me(G), Te(G, 1);
                },
                children: /* @__PURE__ */ s($e, { name: "chevron-up", size: 11 })
              }
            ),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${Ms[G].toLowerCase()}`,
                onClick: () => {
                  Me(G), Te(G, -1);
                },
                children: /* @__PURE__ */ s($e, { name: "chevron-down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, G)) }),
      /* @__PURE__ */ s("div", { className: Ue["dx-timespanpicker-footer"], children: /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          className: Ue["dx-timespanpicker-ok"],
          onClick: () => Ce(!0),
          children: "OK"
        }
      ) })
    ] });
    return /* @__PURE__ */ M(
      "div",
      {
        ref: C,
        className: [
          Ue["dx-timespanpicker"],
          b ? Ue["dx-timespanpicker-inline"] : null,
          E
        ].filter(Boolean).join(" "),
        children: [
          !b && /* @__PURE__ */ M(ke, { children: [
            /* @__PURE__ */ s(
              "input",
              {
                ref: I,
                type: "text",
                autoComplete: "off",
                value: q,
                disabled: g,
                placeholder: w,
                tabIndex: O,
                role: "combobox",
                "aria-label": x ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": ne,
                "aria-controls": A,
                "aria-invalid": n || void 0,
                className: [
                  Ue["dx-timespanpicker-input"],
                  ut,
                  n ? Ue["dx-timespanpicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: At,
                onKeyDown: ot,
                onBlur: wt,
                ...N
              }
            ),
            v && !g && Q && /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: Ue["dx-timespanpicker-clear"],
                "aria-label": $ ?? "Clear",
                onClick: U,
                children: /* @__PURE__ */ s($e, { name: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ s(
              "button",
              {
                ref: j,
                type: "button",
                className: [Ue["dx-timespanpicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": S ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": ne,
                "aria-controls": A,
                disabled: g,
                onClick: we,
                children: /* @__PURE__ */ s($e, { name: "clock", size: 16 })
              }
            )
          ] }),
          ue && /* @__PURE__ */ s(
            "div",
            {
              id: A,
              role: b ? void 0 : "dialog",
              "aria-label": x ?? "Time span picker",
              className: b ? void 0 : Ue["dx-timespanpicker-popup"],
              children: pn
            }
          )
        ]
      }
    );
  }
), Mx = "_wrapper_1rhh5_1", Cx = "_cells_1rhh5_8", Dx = "_cell_1rhh5_8", zx = "_invalid_1rhh5_63", Ex = "_live_1rhh5_73", wn = {
  wrapper: Mx,
  cells: Cx,
  cell: Dx,
  "cell-sm": "_cell-sm_1rhh5_45",
  "cell-md": "_cell-md_1rhh5_51",
  "cell-lg": "_cell-lg_1rhh5_57",
  invalid: zx,
  live: Ex
};
function gr(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const mw = Fe(
  function({
    length: t = 6,
    value: n,
    defaultValue: r,
    onChange: l,
    invalid: i = !1,
    size: d = "md",
    autoFocus: o = !1,
    disabled: a = !1,
    label: c = "Security code",
    liveAnnounce: u = !0,
    className: f,
    "aria-label": k
  }, v) {
    const b = Re(), p = n !== void 0, [y, _] = W(gr(r).join("")), h = p ? gr(n).join("") : y, g = Array.from({ length: t }, (N, m) => h[m] ?? ""), w = Y([]), [x, S] = W(""), $ = (N) => {
      p || _(N), l?.(N);
    }, O = (N) => {
      const m = w.current[N];
      m && !m.disabled && (m.focus(), m.select());
    }, E = (N, m) => {
      const C = m.replace(/\D/g, "").slice(-1), T = h.split("");
      if (C) {
        T[N] = C;
        const j = T.join("").slice(0, t);
        $(j), j.length < t ? O(N + 1) : u && S("Code complete");
      }
    }, D = (N, m) => {
      if (m.key === "Backspace") {
        if (m.preventDefault(), h[N]) {
          const C = h.split("");
          C[N] = "", $(C.join(""));
        } else if (N > 0) {
          const C = h.split("");
          C[N - 1] = "", $(C.join("")), O(N - 1);
        }
      } else m.key === "ArrowLeft" && N > 0 ? (m.preventDefault(), O(N - 1)) : m.key === "ArrowRight" && N < t - 1 ? (m.preventDefault(), O(N + 1)) : m.key === "Home" ? (m.preventDefault(), O(0)) : m.key === "End" && (m.preventDefault(), O(t - 1));
    }, z = (N, m) => {
      m.preventDefault();
      const C = m.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!C) return;
      const T = h.split("");
      let j = 0;
      for (let L = 0; L < C.length && N + L < t; L++)
        T[N + L] = C[L] ?? "", j++;
      const A = T.join("");
      $(A), A.length >= t ? u && S("Code complete") : O(N + j);
    };
    return /* @__PURE__ */ M(
      "div",
      {
        className: [wn.wrapper, f].filter(Boolean).join(" "),
        role: "group",
        "aria-label": k ?? c,
        "data-invalid": i || void 0,
        children: [
          /* @__PURE__ */ s("div", { className: [wn.cells, wn[d]].join(" "), children: g.map((N, m) => /* @__PURE__ */ s(
            "input",
            {
              ref: (C) => {
                w.current[m] = C, m === 0 && v && (typeof v == "function" ? v(C) : v.current = C);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: N,
              disabled: a,
              "aria-label": `Digit ${m + 1} of ${t}`,
              "aria-invalid": i && N !== "" ? !0 : void 0,
              autoFocus: o && m === 0,
              className: [
                wn.cell,
                wn[`cell-${d}`],
                i ? wn.invalid : null
              ].filter(Boolean).join(" "),
              onChange: (C) => E(m, C.target.value),
              onKeyDown: (C) => D(m, C),
              onPaste: (C) => z(m, C),
              onFocus: (C) => C.target.select(),
              onBlur: () => {
                u && S("");
              }
            },
            m
          )) }),
          u && /* @__PURE__ */ s(
            "span",
            {
              id: `${b}-live`,
              role: "status",
              "aria-live": "polite",
              className: wn.live,
              children: x
            }
          )
        ]
      }
    );
  }
), Ix = "_wrapper_1p09k_1", Ax = "_header_1p09k_7", Tx = "_label_1p09k_15", jx = "_clear_1p09k_22", Lx = "_canvas_1p09k_53", Px = "_disabled_1p09k_69", Tn = {
  wrapper: Ix,
  header: Ax,
  label: Tx,
  clear: jx,
  canvas: Lx,
  disabled: Px
}, gw = Fe(
  function({
    value: t,
    defaultValue: n,
    onChange: r,
    penColor: l = "#1c1c1c",
    penWidth: i = 2.5,
    clearLabel: d = "Clear",
    ariaLabel: o = "Signature",
    width: a,
    height: c = 140,
    disabled: u = !1,
    className: f
  }, k) {
    const v = Y(null), b = Y(!1), p = Y(!1), y = Y({ x: 0, y: 0 });
    ge(() => {
      const $ = v.current;
      if (!$) return;
      const O = window.devicePixelRatio || 1, E = Math.round((a ?? $.clientWidth) * O), D = Math.round(c * O);
      ($.width !== E || $.height !== D) && ($.width = E, $.height = D);
      const z = $.getContext("2d");
      if (!z) return;
      z.setTransform(O, 0, 0, O, 0, 0), z.lineWidth = i, z.strokeStyle = l, z.lineCap = "round", z.lineJoin = "round";
      const N = t ?? n;
      if (N) {
        const m = new Image();
        m.onload = () => {
          z.drawImage(m, 0, 0, $.clientWidth, c);
        }, m.src = N;
      }
    }, [t, n, l, i, a, c]);
    const _ = () => {
      const $ = v.current;
      if (!$) return;
      const O = $.toDataURL("image/png");
      r?.(O);
    }, h = () => {
      const $ = v.current;
      if (!$) return;
      const O = $.getContext("2d");
      O && O.clearRect(0, 0, $.width, $.height), r?.("");
    };
    Rs(k, () => ({
      clear: h,
      toDataURL: ($ = "image/png", O) => v.current?.toDataURL($, O) ?? ""
    }));
    const g = ($) => {
      const O = $.currentTarget.getBoundingClientRect();
      return { x: $.clientX - O.left, y: $.clientY - O.top };
    }, w = ($) => {
      u || ($.preventDefault(), typeof $.currentTarget.setPointerCapture == "function" && $.currentTarget.setPointerCapture($.pointerId), b.current = !0, p.current = !1, y.current = g($));
    }, x = ($) => {
      if (!b.current) return;
      $.preventDefault();
      const O = $.currentTarget.getContext("2d");
      if (!O) return;
      const E = g($);
      O.beginPath(), O.moveTo(y.current.x, y.current.y), O.lineTo(E.x, E.y), O.stroke(), y.current = E, p.current = !0;
    }, S = ($) => {
      b.current && ($.preventDefault(), b.current = !1, p.current && _());
    };
    return /* @__PURE__ */ M(
      "div",
      {
        className: [
          Tn.wrapper,
          f,
          u ? Tn.disabled : null
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ M("div", { className: Tn.header, children: [
            /* @__PURE__ */ s("span", { className: Tn.label, children: o }),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: Tn.clear,
                onClick: h,
                disabled: u,
                children: d
              }
            )
          ] }),
          /* @__PURE__ */ s(
            "canvas",
            {
              ref: v,
              role: "img",
              "aria-label": o,
              "aria-disabled": u || void 0,
              style: {
                width: a ? `${a}px` : void 0,
                height: `${c}px`
              },
              className: Tn.canvas,
              onPointerDown: w,
              onPointerMove: x,
              onPointerUp: S,
              onPointerCancel: S
            }
          )
        ]
      }
    );
  }
), Rx = "_wrapper_cdx3b_1", Bx = "_trigger_cdx3b_7", qx = "_list_cdx3b_35", Fx = "_row_cdx3b_44", Hx = "_name_cdx3b_59", Kx = "_size_cdx3b_68", Wx = "_progress_cdx3b_74", Ux = "_fill_cdx3b_82", Vx = "_status_cdx3b_99", Xx = "_remove_cdx3b_106", Vt = {
  wrapper: Rx,
  trigger: Bx,
  list: qx,
  row: Fx,
  name: Hx,
  size: Kx,
  progress: Wx,
  fill: Ux,
  status: Vx,
  remove: Xx
};
function xr(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const xw = Fe(function({
  url: t,
  multiple: n = !1,
  parameterName: r = "files",
  auto: l = !0,
  headers: i,
  accept: d,
  maxFileCount: o = Number.POSITIVE_INFINITY,
  maxFileSize: a,
  chooseText: c = "Upload",
  children: u,
  onProgress: f,
  onComplete: k,
  onError: v
}, b) {
  const p = Y(null), [y, _] = W([]), h = Y(/* @__PURE__ */ new Map()), g = (O, E) => {
    _(
      (D) => D.map((z) => z.file.name === O ? { ...z, ...E } : z)
    );
  }, w = (O) => {
    if (!t) return;
    const E = new XMLHttpRequest();
    h.current.set(O.file.name, E);
    const D = new FormData();
    if (D.append(r, O.file), E.upload.addEventListener("progress", (z) => {
      if (!z.lengthComputable) return;
      const N = Math.round(z.loaded / z.total * 100);
      g(O.file.name, { state: "uploading", progress: N }), f?.(O.file.name, N);
    }), E.addEventListener("load", () => {
      E.status >= 200 && E.status < 300 ? (g(O.file.name, { state: "complete", progress: 100 }), k?.(O.file.name)) : (g(O.file.name, {
        state: "error",
        message: `HTTP ${E.status}`
      }), v?.(O.file.name, `HTTP ${E.status}`));
    }), E.addEventListener("error", () => {
      g(O.file.name, { state: "error", message: "Network error" }), v?.(O.file.name, "Network error");
    }), i)
      for (const [z, N] of Object.entries(i))
        E.setRequestHeader(z, N);
    E.open("POST", t), E.send(D), g(O.file.name, { state: "uploading", progress: 0 });
  }, x = (O) => {
    if (!O) return;
    const E = [...O], D = [];
    let z = Math.max(0, o - y.length);
    for (const m of E) {
      if (a != null && m.size > a) {
        v?.(
          m.name,
          `File too large (maximum ${xr(a)})`
        );
        continue;
      }
      if (z <= 0) {
        v?.(m.name, `Too many files (maximum ${o})`);
        continue;
      }
      z -= 1, D.push(m);
    }
    const N = D.map((m) => ({
      file: m,
      state: "pending",
      progress: 0
    }));
    _((m) => [...m, ...N]), p.current && (p.current.value = ""), l && N.forEach(w);
  }, S = (O) => {
    h.current.get(O)?.abort(), h.current.delete(O), _((D) => D.filter((z) => z.file.name !== O));
  }, $ = u ?? /* @__PURE__ */ M(
    "button",
    {
      type: "button",
      className: Vt.trigger,
      onClick: () => p.current?.click(),
      children: [
        /* @__PURE__ */ s($e, { name: "upload", size: 14 }),
        c
      ]
    }
  );
  return Rs(b, () => ({
    open: () => p.current?.click(),
    upload: () => y.forEach((O) => O.state === "pending" ? w(O) : null)
  })), /* @__PURE__ */ M("div", { className: Vt.wrapper, children: [
    $,
    /* @__PURE__ */ s(
      "input",
      {
        ref: p,
        type: "file",
        hidden: !0,
        multiple: n,
        accept: d,
        "data-testid": "upload-input",
        onChange: (O) => x(O.target.files)
      }
    ),
    !u && y.length > 0 && /* @__PURE__ */ s("ul", { className: Vt.list, children: y.map(({ file: O, state: E, progress: D, message: z }) => /* @__PURE__ */ M(
      "li",
      {
        className: Vt.row,
        "data-state": E,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ s("span", { className: Vt.name, children: O.name }),
          /* @__PURE__ */ s("span", { className: Vt.size, children: xr(O.size) }),
          /* @__PURE__ */ s(
            "span",
            {
              className: Vt.progress,
              role: "progressbar",
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": D,
              children: /* @__PURE__ */ s(
                "span",
                {
                  className: Vt.fill,
                  style: { width: `${D}%` }
                }
              )
            }
          ),
          /* @__PURE__ */ s("span", { className: Vt.status, role: "status", children: E === "uploading" ? "Uploading" : E === "complete" ? "Complete" : E === "error" ? z ?? "Failed" : "Pending" }),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: Vt.remove,
              "aria-label": `Remove ${O.name}`,
              onClick: () => S(O.name),
              children: /* @__PURE__ */ s($e, { name: "close", size: 14 })
            }
          )
        ]
      },
      O.name
    )) })
  ] });
}), Gx = "_zone_e481w_1", Yx = "_dragging_e481w_23", Zx = "_caption_e481w_28", Jx = "_browse_e481w_40", Qx = "_disabled_e481w_67", Jn = {
  zone: Gx,
  dragging: Yx,
  caption: Zx,
  browse: Jx,
  disabled: Qx
};
function ey(e, t) {
  return t ? t.split(",").some((n) => {
    if (n = n.trim(), !n) return !1;
    if (n.startsWith("."))
      return e.name.toLowerCase().endsWith(n.toLowerCase());
    if (n.endsWith("/*")) {
      const r = n.slice(0, -1);
      return e.type.startsWith(r);
    }
    return e.type === n;
  }) : !0;
}
const yw = Fe(
  function({
    accept: t,
    multiple: n = !1,
    onDrop: r,
    label: l = "Drop files here or browse",
    dragLabel: i = "Drop to attach",
    browseText: d = "Browse",
    disabled: o = !1,
    className: a
  }, c) {
    const u = Y(null), [f, k] = W(!1), v = (h) => {
      if (!h || h.length === 0) return;
      const g = [...h].filter((w) => ey(w, t ?? ""));
      g.length !== 0 && r?.(g);
    }, b = (h) => {
      o || (h.preventDefault(), k(!0));
    }, p = (h) => {
      o || (h.preventDefault(), h.dataTransfer.dropEffect = "copy", k(!0));
    }, y = (h) => {
      o || h.currentTarget.contains(h.relatedTarget) || k(!1);
    }, _ = (h) => {
      o || (h.preventDefault(), k(!1), v(h.dataTransfer.files));
    };
    return Rs(c, () => ({
      open: () => u.current?.click()
    })), /* @__PURE__ */ M(
      "div",
      {
        role: "region",
        "aria-label": l,
        className: [
          Jn.zone,
          f ? Jn.dragging : null,
          o ? Jn.disabled : null,
          a
        ].filter(Boolean).join(" "),
        onDragEnter: b,
        onDragOver: p,
        onDragLeave: y,
        onDrop: _,
        children: [
          /* @__PURE__ */ s("p", { className: Jn.caption, children: f ? i : l }),
          !o && /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: Jn.browse,
              onClick: () => u.current?.click(),
              children: d
            }
          ),
          /* @__PURE__ */ s(
            "input",
            {
              ref: u,
              type: "file",
              hidden: !0,
              multiple: n,
              accept: t,
              "data-testid": "dropzone-input",
              onChange: (h) => {
                v(h.target.files), h.target.value = "";
              }
            }
          )
        ]
      }
    );
  }
), ty = "_root_mq6fh_1", ny = "_menubar_mq6fh_5", sy = "_horizontal_mq6fh_15", ry = "_vertical_mq6fh_20", oy = "_itemWrapper_mq6fh_25", ly = "_item_mq6fh_25", ay = "_disabled_mq6fh_61", iy = "_icon_mq6fh_68", cy = "_text_mq6fh_75", dy = "_caret_mq6fh_79", uy = "_hasChildren_mq6fh_85", fy = "_submenu_mq6fh_94", _y = "_submenuItem_mq6fh_118", hy = "_flyout_mq6fh_155", py = "_hamburger_mq6fh_175", my = "_responsive_mq6fh_198", gy = "_mobileOpen_mq6fh_207", Ge = {
  root: ty,
  menubar: ny,
  horizontal: sy,
  vertical: ry,
  itemWrapper: oy,
  item: ly,
  disabled: ay,
  icon: iy,
  text: cy,
  caret: dy,
  hasChildren: uy,
  submenu: fy,
  submenuItem: _y,
  flyout: hy,
  hamburger: py,
  responsive: my,
  mobileOpen: gy
}, ys = Bn(null);
function xy(e, t) {
  if (!e || typeof window > "u") return !1;
  const n = window.location.hash.replace(/^#\/?/, ""), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : n === r || n.startsWith(`${r}/`) : n === r;
}
function yy(e, t, n, r, l) {
  const [i, d] = W(n), o = e ? t ?? !1 : i, a = R(
    (c) => {
      e || d(c), r?.(c);
    },
    [e, r]
  );
  return ge(() => {
    l > 0 && a(!1);
  }, [l]), [o, a];
}
function by({
  icon: e,
  iconColor: t,
  image: n,
  imageAlt: r
}) {
  return n ? /* @__PURE__ */ s("span", { className: Ge.icon, "aria-hidden": "true", children: /* @__PURE__ */ s("img", { src: n, alt: r ?? "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ s(
    "span",
    {
      className: Ge.icon,
      "aria-hidden": "true",
      style: t ? { color: t } : void 0,
      children: /* @__PURE__ */ s($e, { name: e, size: 16 })
    }
  ) : null;
}
function Ar(e) {
  return gt(e) && e.type === Tr;
}
function Fs({
  itemKey: e,
  props: t
}) {
  const n = _n(ys);
  if (!n) throw new Error("MenuItem must be used inside <Menu>");
  const { text: r, value: l, path: i, disabled: d, template: o } = t, a = xe(
    () => rs.toArray(t.children).filter(gt),
    [t.children]
  ), c = a.length > 0, u = !!d, f = t.open !== void 0, [k, v] = yy(
    f,
    t.open,
    t.defaultOpen ?? !1,
    t.onOpenChange,
    n.closeSignal
  ), b = n.level === 0, p = Y(0), _ = (b && !f ? n.openKey === e : null) ?? k, h = R(
    (j) => {
      b && !f ? n.setOpenKey(j ? e : null) : (v(j), b && n.setOpenKey(null));
    },
    [b, f, n, e, v]
  ), [, g] = W(0);
  ge(() => {
    if (!i) return;
    const j = () => g((A) => A + 1);
    return window.addEventListener("hashchange", j), () => window.removeEventListener("hashchange", j);
  }, [i]);
  const w = i && !c ? xy(i, t.match) : !1, x = R(
    (j) => {
      if (u) {
        j.preventDefault();
        return;
      }
      const A = { text: r, value: l, path: i };
      [n.emit(A), t.onClick?.(A)].includes(!1) && j.preventDefault(), n.closeAll();
    },
    [u, r, l, i, n, t]
  ), S = R(() => {
    if (!u) {
      if (_ && (Date.now() - p.current < 600 || !n.clickToOpen)) {
        p.current = 0;
        return;
      }
      h(!_);
    }
  }, [u, _, h, n.clickToOpen]), $ = R(() => {
    !c || u || n.clickToOpen || (p.current = Date.now(), h(!0));
  }, [c, u, n.clickToOpen, h]), O = R(() => {
    n.clickToOpen || h(!1);
  }, [n.clickToOpen, h]), E = `${n.baseId}-submenu-${e}`, [D, z] = W(null);
  ge(() => {
    n.closeSignal > 0 && z(null);
  }, [n.closeSignal]);
  const N = xe(
    () => ({
      baseId: n.baseId,
      flyout: n.flyout,
      clickToOpen: n.clickToOpen,
      level: n.level + 1,
      closeSignal: n.closeSignal,
      emit: n.emit,
      closeAll: n.closeAll,
      openKey: D,
      setOpenKey: z
    }),
    [n, D]
  ), m = c ? /* @__PURE__ */ s("span", { className: Ge.caret, "aria-hidden": "true", children: /* @__PURE__ */ s(
    $e,
    {
      name: n.flyout && !b ? "chevron-right" : "chevron-down",
      size: 10
    }
  ) }) : null, C = o ?? /* @__PURE__ */ M(ke, { children: [
    /* @__PURE__ */ s(
      by,
      {
        icon: t.icon,
        iconColor: t.iconColor,
        image: t.image,
        imageAlt: t.imageAlt
      }
    ),
    /* @__PURE__ */ s("span", { className: Ge.text, children: r }),
    m
  ] });
  if (c) {
    let j = function(A) {
      const L = Array.from(A.currentTarget.children).map((ne) => ne.querySelector('[role="menuitem"]')).filter(
        (ne) => ne != null && ne.getAttribute("aria-disabled") !== "true" && !ne.hasAttribute("disabled")
      ), Z = document.activeElement, se = Z ? L.indexOf(Z) : -1;
      A.key === "ArrowDown" ? (A.preventDefault(), A.stopPropagation(), (se === -1 ? L[0] : L[(se + 1) % L.length])?.focus()) : A.key === "ArrowUp" ? (A.preventDefault(), A.stopPropagation(), (se === -1 ? L[L.length - 1] : L[(se - 1 + L.length) % L.length])?.focus()) : A.key === "ArrowRight" ? Z?.getAttribute("aria-haspopup") === "menu" && (A.preventDefault(), A.stopPropagation(), Z.getAttribute("aria-expanded") !== "true" && Z.click(), document.getElementById(
        Z.getAttribute("aria-controls") ?? ""
      )?.querySelector('[role="menuitem"]')?.focus()) : (A.key === "ArrowLeft" || A.key === "Escape") && (A.preventDefault(), A.stopPropagation(), h(!1));
    };
    return /* @__PURE__ */ M(
      "div",
      {
        className: Ge.itemWrapper,
        onMouseEnter: n.clickToOpen ? void 0 : $,
        onMouseLeave: n.clickToOpen ? void 0 : O,
        "data-dx-menu-item": "",
        children: [
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              role: "menuitem",
              "data-top": b ? "true" : void 0,
              "data-index": e,
              "data-dx-menu-item": "",
              "aria-disabled": u || void 0,
              "aria-haspopup": "menu",
              "aria-expanded": _,
              "aria-controls": E,
              tabIndex: u ? -1 : 0,
              disabled: u,
              className: [
                Ge.item,
                u ? Ge.disabled : null,
                Ge.hasChildren
              ].filter(Boolean).join(" "),
              onClick: S,
              children: C
            }
          ),
          _ ? /* @__PURE__ */ s(
            "div",
            {
              id: E,
              role: "menu",
              "aria-label": r,
              className: [
                Ge.submenu,
                n.flyout && !b ? Ge.flyout : null
              ].filter(Boolean).join(" "),
              "data-dx-menu-submenu": "",
              onKeyDown: j,
              children: /* @__PURE__ */ s(ys.Provider, { value: N, children: a.map(
                (A, L) => Ar(A) ? /* @__PURE__ */ s(
                  Fs,
                  {
                    itemKey: `${e}-${L}`,
                    props: A.props
                  },
                  `${e}-${L}`
                ) : (
                  // Separators / custom content (Radzen `<hr />` parity) render verbatim.
                  /* @__PURE__ */ s(Ps, { children: A }, `${e}-custom-${L}`)
                )
              ) })
            }
          ) : null
        ]
      }
    );
  }
  const T = {
    role: "menuitem",
    "aria-disabled": u || void 0,
    "aria-current": w ? "page" : void 0,
    tabIndex: u ? -1 : 0,
    "data-dx-menu-item": "",
    className: [Ge.submenuItem, u ? Ge.disabled : null].filter(Boolean).join(" "),
    onClick: x
  };
  return i && !u ? /* @__PURE__ */ s("div", { className: Ge.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ s("a", { href: i, target: t.target, ...T, children: C }) }) : /* @__PURE__ */ s("div", { className: Ge.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ s("button", { type: "button", disabled: u, ...T, children: C }) });
}
function Tr(e) {
  if (!_n(ys)) throw new Error("MenuItem must be used inside <Menu>");
  return /* @__PURE__ */ s(Fs, { itemKey: e.text, props: e });
}
function vy({
  children: e,
  clickToOpen: t = !0,
  flyout: n = !1,
  responsive: r = !0,
  isContextMenu: l = !1,
  onClick: i,
  onClose: d,
  ariaLabel: o = "Menu",
  toggleAriaLabel: a = "Toggle menu",
  className: c,
  ...u
}) {
  const f = Re(), k = Y(null), v = Y(null), [b, p] = W(null), [y, _] = W(0), [h, g] = W(!1), w = Y(null), x = R(
    (D) => i?.(D),
    [i]
  ), S = R(() => {
    p(null), _((D) => D + 1);
  }, []);
  ge(() => {
    if (b == null) return;
    const D = (z) => {
      k.current && !k.current.contains(z.target) && S();
    };
    return document.addEventListener("mousedown", D), () => document.removeEventListener("mousedown", D);
  }, [b, S]), ge(() => {
    w.current != null && b === w.current && (document.getElementById(`${f}-submenu-${b}`)?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus(), w.current = null);
  }, [b, f]);
  const $ = xe(
    () => ({
      baseId: f,
      flyout: n,
      clickToOpen: t,
      level: 0,
      closeSignal: y,
      emit: x,
      closeAll: S,
      openKey: b,
      setOpenKey: p
    }),
    [f, n, t, y, x, S, b]
  ), O = xe(
    () => rs.toArray(e).filter(gt),
    [e]
  ), E = (D) => {
    const z = v.current;
    if (!z) return;
    const N = Array.from(z.children).map((T) => T.querySelector('[role="menuitem"]')).filter(
      (T) => T != null && !T.hasAttribute("disabled") && T.getAttribute("aria-disabled") !== "true"
    );
    if (b != null) {
      const T = document.getElementById(`${f}-submenu-${b}`);
      if (T) {
        const j = Array.from(
          T.querySelectorAll('[role="menuitem"]')
        ).filter(
          (Z) => Z.getAttribute("aria-disabled") !== "true" && !Z.hasAttribute("disabled")
        ), A = document.activeElement, L = A ? j.indexOf(A) : -1;
        if (D.key === "ArrowDown") {
          D.preventDefault(), (L === -1 ? j[0] : j[(L + 1) % j.length])?.focus();
          return;
        }
        if (D.key === "ArrowUp") {
          D.preventDefault(), (L === -1 ? j[j.length - 1] : j[(L - 1 + j.length) % j.length])?.focus();
          return;
        }
        if (D.key === "Escape") {
          D.preventDefault(), S(), d?.(), z.querySelector(`[data-index="${b}"]`)?.focus();
          return;
        }
        if (D.key === "Enter" || D.key === " ") return;
      }
      if (D.key === "Escape") {
        D.preventDefault(), S(), d?.();
        return;
      }
    }
    const m = document.activeElement, C = m ? N.indexOf(m) : -1;
    if (D.key === "ArrowRight") {
      if (D.preventDefault(), N.length === 0) return;
      N[C === -1 ? 0 : (C + 1) % N.length]?.focus();
      return;
    }
    if (D.key === "ArrowLeft") {
      if (D.preventDefault(), N.length === 0) return;
      N[C === -1 ? N.length - 1 : (C - 1 + N.length) % N.length]?.focus();
      return;
    }
    if (D.key === "ArrowDown") {
      if (C >= 0) {
        const T = m?.getAttribute("data-index");
        if (T == null) return;
        z.querySelector(
          `[data-index="${T}"]`
        )?.getAttribute("aria-haspopup") === "menu" && (D.preventDefault(), w.current = T, p(T));
      }
      return;
    }
    if (D.key === "Home") {
      D.preventDefault(), N[0]?.focus();
      return;
    }
    if (D.key === "End") {
      D.preventDefault(), N[N.length - 1]?.focus();
      return;
    }
    if (D.key.length === 1 && !D.ctrlKey && !D.metaKey) {
      const T = N.map((A) => A.textContent ?? ""), j = C === -1 ? 0 : (C + 1) % N.length;
      for (let A = 0; A < N.length; A++) {
        const L = (j + A) % N.length;
        if (T[L]?.toLowerCase().startsWith(D.key.toLowerCase())) {
          D.preventDefault(), N[L]?.focus();
          break;
        }
      }
    }
  };
  return /* @__PURE__ */ M(
    "nav",
    {
      ref: k,
      "aria-label": o,
      className: [
        Ge.root,
        l ? Ge.vertical : Ge.horizontal,
        r ? Ge.responsive : null,
        r && h ? Ge.mobileOpen : null,
        n ? Ge.flyoutRoot : null,
        c
      ].filter(Boolean).join(" "),
      ...u,
      children: [
        r ? /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            "aria-label": a,
            "aria-expanded": h,
            className: Ge.hamburger,
            onClick: () => g((D) => !D),
            children: /* @__PURE__ */ s($e, { name: "menu", size: 20 })
          }
        ) : null,
        /* @__PURE__ */ s(
          "div",
          {
            ref: v,
            role: l ? "menu" : "menubar",
            "aria-label": o,
            className: Ge.menubar,
            onKeyDown: E,
            children: /* @__PURE__ */ s(ys.Provider, { value: $, children: O.map(
              (D, z) => Ar(D) ? /* @__PURE__ */ s(
                Fs,
                {
                  itemKey: String(z),
                  props: D.props
                },
                `top-${z}`
              ) : /* @__PURE__ */ s(Ps, { children: D }, `top-custom-${z}`)
            ) })
          }
        )
      ]
    }
  );
}
const ky = "_popup_y9hdw_1", wy = "_menu_y9hdw_22", js = {
  popup: ky,
  menu: wy
}, jr = Bn(null);
function bw() {
  const e = _n(jr);
  if (!e)
    throw new Error("useContextMenu must be used inside <ContextMenuProvider>");
  return e;
}
function Lr(e) {
  return e.map((t, n) => {
    const { children: r, ...l } = t;
    return /* @__PURE__ */ s(Tr, { ...l, children: r ? Lr(r) : void 0 }, `${t.text}-${n}`);
  });
}
function $y({ state: e, onClose: t }) {
  const n = Y(null), [r, l] = W({ left: e.x, top: e.y });
  Ds(() => {
    const d = n.current;
    if (!d) return;
    const o = d.getBoundingClientRect();
    l({
      left: Math.max(0, Math.min(e.x, window.innerWidth - o.width)),
      top: Math.max(0, Math.min(e.y, window.innerHeight - o.height))
    });
  }, [e.x, e.y, e.options]), ge(() => {
    n.current?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus();
  }, []);
  const i = R(
    (d) => {
      e.options.onClick?.(d);
    },
    [e.options]
  );
  return /* @__PURE__ */ s(
    "div",
    {
      ref: n,
      role: "presentation",
      "data-dx-contextmenu-popup": "",
      className: js.popup,
      style: { left: r.left, top: r.top },
      children: /* @__PURE__ */ s("div", { className: js.menu, children: e.options.content ?? /* @__PURE__ */ s(
        vy,
        {
          isContextMenu: !0,
          responsive: !1,
          ariaLabel: e.options.ariaLabel ?? "Context menu",
          onClick: i,
          onClose: t,
          children: Lr(e.options.items ?? [])
        }
      ) })
    }
  );
}
function vw({ children: e }) {
  const [t, n] = W(null), r = R(() => {
    n((d) => (d?.invoker && document.body.contains(d.invoker) && d.invoker.focus({ preventScroll: !0 }), null));
  }, []), l = R(
    (d, o) => {
      d.preventDefault();
      const a = d.currentTarget ?? d.target;
      n({ x: d.clientX, y: d.clientY, invoker: a, options: o });
    },
    []
  );
  ge(() => {
    if (!t) return;
    const d = (u) => {
      const f = document.querySelector(`.${js.popup}`);
      f && !f.contains(u.target) && r();
    }, o = (u) => {
      u.key === "Escape" && (u.preventDefault(), r());
    }, a = () => r(), c = () => r();
    return document.addEventListener("pointerdown", d, !0), document.addEventListener("keydown", o, !0), window.addEventListener("resize", a), window.addEventListener("hashchange", c), () => {
      document.removeEventListener("pointerdown", d, !0), document.removeEventListener("keydown", o, !0), window.removeEventListener("resize", a), window.removeEventListener("hashchange", c);
    };
  }, [t, r]);
  const i = xe(
    () => ({ open: l, close: r, isOpen: t != null }),
    [l, r, t]
  );
  return /* @__PURE__ */ M(jr.Provider, { value: i, children: [
    e,
    t ? /* @__PURE__ */ s($y, { state: t, onClose: r }) : null
  ] });
}
const Ny = "_root_1ezv8_1", Oy = "_list_1ezv8_9", Sy = "_item_1ezv8_14", My = "_trigger_1ezv8_18", Cy = "_disabled_1ezv8_45", Dy = "_expanded_1ezv8_52", zy = "_selected_1ezv8_56", Ey = "_icon_1ezv8_61", Iy = "_text_1ezv8_72", Ay = "_caret_1ezv8_79", Ty = "_open_1ezv8_86", jy = "_submenu_1ezv8_90", Ly = "_iconOnly_1ezv8_172", Py = "_stacked_1ezv8_201", dt = {
  root: Ny,
  list: Oy,
  item: Sy,
  trigger: My,
  disabled: Cy,
  expanded: Dy,
  selected: zy,
  icon: Ey,
  text: Iy,
  caret: Ay,
  open: Ty,
  submenu: jy,
  iconOnly: Ly,
  stacked: Py
}, bs = Bn(null);
function Ry() {
  return typeof window > "u" ? "" : window.location.hash.replace(/^#\/?/, "");
}
function By(e, t) {
  const n = Ry(), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : r === "/" ? n === "" || n === "/" : n === r || n.startsWith(`${r}/`) : n === r;
}
function qy({
  icon: e,
  iconColor: t,
  image: n
}) {
  return n ? /* @__PURE__ */ s("span", { className: dt.icon, "aria-hidden": "true", children: /* @__PURE__ */ s("img", { src: n, alt: "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ s(
    "span",
    {
      className: dt.icon,
      "aria-hidden": "true",
      style: t ? { color: t } : void 0,
      children: /* @__PURE__ */ s($e, { name: e, size: 16 })
    }
  ) : null;
}
function Hs({
  itemKey: e,
  ancestors: t,
  props: n
}) {
  const r = _n(bs);
  if (!r) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  const { text: l, value: i, path: d, disabled: o } = n, a = xe(
    () => rs.toArray(n.children).filter(gt),
    [n.children]
  ), c = a.length > 0, u = !!o, f = n.match ?? r.match, k = n.expanded !== void 0, [v, b] = W(
    n.defaultExpanded ?? !1
  ), p = k ? n.expanded ?? !1 : v, y = R(
    (L) => {
      k || b(L), n.onExpandedChange?.(L);
    },
    [k, n]
  );
  ge(() => {
    r.collapseSignal > 0 && !r.collapseSkipRef.current.has(e) && y(!1);
  }, [r.collapseSignal]);
  const _ = n.onSelectedChange !== void 0 || n.selected !== void 0, [h, g] = W(
    n.defaultSelected ?? !1
  ), w = !_ && d ? By(d, f) : !1, x = n.selected ?? (_ ? h : w || h), [, S] = W(0);
  ge(() => {
    if (!d) return;
    const L = () => S((Z) => Z + 1);
    return window.addEventListener("hashchange", L), () => window.removeEventListener("hashchange", L);
  }, [d]);
  const $ = xe(
    () => ({
      ...r,
      level: r.level + 1,
      openAncestors: () => {
        y(!0), r.openAncestors();
      }
    }),
    [r, y]
  );
  ge(() => {
    w && t.length > 0 && $.openAncestors();
  }, []);
  const O = R(
    (L) => {
      if (u) {
        L.preventDefault();
        return;
      }
      const Z = { text: l, value: i, path: d };
      [r.emit(Z), n.onClick?.(Z)].includes(!1) && L.preventDefault(), _ || g(!0), n.onSelectedChange?.(!0);
    },
    [u, l, i, d, r, n, _]
  ), E = R(() => {
    u || (p || r.notifyOpened(e, t), y(!p));
  }, [u, p, r, e, t, y]), D = R(
    (L) => {
      L.key === "Enter" || L.key === " " ? (L.preventDefault(), c ? E() : L.target.click()) : L.key === "Escape" && p ? (L.preventDefault(), y(!1)) : L.key === "ArrowRight" && c && !p ? (L.preventDefault(), r.notifyOpened(e, t), y(!0)) : L.key === "ArrowLeft" && p && (L.preventDefault(), y(!1));
    },
    [c, E, p, y, r, e, t]
  ), z = c && r.showArrow ? /* @__PURE__ */ s(
    "span",
    {
      className: [dt.caret, p ? dt.open : null].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: /* @__PURE__ */ s($e, { name: "chevron-down", size: 10 })
    }
  ) : null, N = n.template ?? /* @__PURE__ */ M(ke, { children: [
    /* @__PURE__ */ s(
      qy,
      {
        icon: n.icon,
        iconColor: n.iconColor,
        image: n.image,
        imageAlt: n.imageAlt
      }
    ),
    r.displayStyle === "icon" ? /* @__PURE__ */ s("span", { className: dt.text, "aria-label": l, children: n.icon || n.image ? null : l.slice(0, 1) }) : /* @__PURE__ */ s("span", { className: dt.text, children: l }),
    z
  ] }), m = `${r.baseId}-panel-${e}`, C = `${r.baseId}-trigger-${e}`, T = [
    dt.trigger,
    u ? dt.disabled : null,
    p ? dt.expanded : null,
    x ? dt.selected : null
  ].filter(Boolean).join(" "), j = c ? /* @__PURE__ */ s(
    "button",
    {
      type: "button",
      id: C,
      "aria-expanded": p,
      "aria-controls": m,
      "aria-disabled": u || void 0,
      disabled: u,
      tabIndex: u ? -1 : 0,
      className: T,
      onClick: E,
      onKeyDown: D,
      children: N
    }
  ) : d && !u ? /* @__PURE__ */ s(
    "a",
    {
      id: C,
      href: d,
      target: n.target,
      "aria-disabled": void 0,
      "aria-current": x ? "page" : void 0,
      tabIndex: 0,
      className: T,
      onClick: O,
      onKeyDown: D,
      children: N
    }
  ) : /* @__PURE__ */ s(
    "button",
    {
      type: "button",
      id: C,
      "aria-current": x ? "page" : void 0,
      "aria-disabled": u || void 0,
      disabled: u,
      tabIndex: u ? -1 : 0,
      className: T,
      onClick: O,
      onKeyDown: D,
      children: N
    }
  ), A = c ? r.renderMode === "server" && !p ? null : /* @__PURE__ */ s(
    "div",
    {
      id: m,
      role: "menu",
      "aria-labelledby": C,
      className: dt.submenu,
      hidden: r.renderMode === "client" && !p ? !0 : void 0,
      children: /* @__PURE__ */ s(bs.Provider, { value: $, children: a.map((L, Z) => /* @__PURE__ */ s(
        Hs,
        {
          itemKey: `${e}-${Z}`,
          ancestors: [...t, e],
          props: L.props
        },
        `${e}-${Z}`
      )) })
    }
  ) : null;
  return /* @__PURE__ */ M(
    "div",
    {
      className: dt.item,
      style: { "--dx-panelmenu-level": r.level },
      "data-dx-panelmenu-item": "",
      "data-level": r.level,
      children: [
        j,
        A
      ]
    }
  );
}
function kw(e) {
  if (!_n(bs)) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  return /* @__PURE__ */ s(Hs, { itemKey: e.text, ancestors: [], props: e });
}
function ww({
  children: e,
  multiple: t = !0,
  displayStyle: n = "iconAndText",
  showArrow: r = !0,
  match: l = "prefix",
  renderMode: i = "client",
  onClick: d,
  ariaLabel: o = "Panel menu",
  className: a,
  ...c
}) {
  const u = Re(), [f, k] = W(0), v = Y(/* @__PURE__ */ new Set()), b = R(
    (w) => d?.(w),
    [d]
  ), p = R(
    (w, x) => {
      t || (v.current = /* @__PURE__ */ new Set([w, ...x]), k((S) => S + 1));
    },
    [t]
  ), y = (w) => Array.from(
    w.querySelectorAll('button, a[href], [role="menuitem"]')
  ).filter(
    (x) => !x.hasAttribute("disabled") && x.getAttribute("aria-disabled") !== "true" && x.closest("[hidden]") == null
  ), _ = (w) => {
    if (!(w.key === "Enter" || w.key === " ")) {
      if (w.key === "ArrowDown" || w.key === "ArrowUp") {
        const x = w.target, S = y(w.currentTarget), $ = S.indexOf(x);
        if ($ === -1) return;
        w.preventDefault();
        const O = w.key === "ArrowDown" ? 1 : -1;
        S[($ + O + S.length) % S.length]?.focus();
      } else if (w.key === "Home" || w.key === "End") {
        const x = y(w.currentTarget);
        w.preventDefault(), (w.key === "Home" ? x[0] : x[x.length - 1])?.focus();
      }
    }
  }, h = xe(
    () => ({
      baseId: u,
      multiple: t,
      displayStyle: n,
      showArrow: r,
      renderMode: i,
      match: l,
      level: 0,
      collapseSignal: f,
      collapseSkipRef: v,
      emit: b,
      notifyOpened: p,
      openAncestors: () => {
      }
    }),
    [
      u,
      t,
      n,
      r,
      i,
      l,
      f,
      b,
      p
    ]
  ), g = xe(
    () => rs.toArray(e).filter(gt),
    [e]
  );
  return /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": o,
      className: [
        dt.root,
        n === "icon" ? dt.iconOnly : null,
        n === "stacked" ? dt.stacked : null,
        a
      ].filter(Boolean).join(" "),
      onKeyDown: _,
      ...c,
      children: /* @__PURE__ */ s("div", { className: dt.list, role: "presentation", children: /* @__PURE__ */ s(bs.Provider, { value: h, children: g.map((w, x) => /* @__PURE__ */ s(
        Hs,
        {
          itemKey: String(x),
          ancestors: [],
          props: w.props
        },
        `top-${x}`
      )) }) })
    }
  );
}
const Fy = "_root_1bbxp_1", Hy = "_trigger_1bbxp_7", Ky = "_defaultTrigger_1bbxp_40", Wy = "_avatar_1bbxp_46", Uy = "_menu_1bbxp_58", Vy = "_item_1bbxp_74", Xy = "_disabled_1bbxp_88", Gy = "_active_1bbxp_97", Yy = "_icon_1bbxp_107", Zy = "_text_1bbxp_114", Xt = {
  root: Fy,
  trigger: Hy,
  defaultTrigger: Ky,
  avatar: Wy,
  menu: Uy,
  item: Vy,
  disabled: Xy,
  active: Gy,
  icon: Yy,
  text: Zy
};
function $w({
  items: e,
  trigger: t,
  onClick: n,
  ariaLabel: r = "Profile menu",
  className: l
}) {
  const i = Re(), d = `${i}-menu`, o = Y(null), a = Y(null), [c, u] = W(!1), [f, k] = W(-1), v = t, b = e.map((x, S) => x.disabled ? -1 : S).filter((x) => x >= 0), p = R(
    (x) => {
      if (x.disabled) return;
      const S = {
        text: x.text,
        path: x.path
      };
      n?.(S), u(!1), a.current?.focus();
    },
    [n]
  ), y = R(() => {
    k(b[0] ?? -1), u(!0);
  }, [b]), _ = R(() => {
    u(!1), k(-1), a.current?.focus();
  }, []);
  ge(() => {
    if (!c) return;
    const x = (S) => {
      o.current && !o.current.contains(S.target) && (u(!1), k(-1));
    };
    return document.addEventListener("mousedown", x), () => document.removeEventListener("mousedown", x);
  }, [c]), ge(() => {
    if (!c) return;
    const x = (S) => {
      S.key === "Escape" && (S.preventDefault(), _());
    };
    return document.addEventListener("keydown", x), () => document.removeEventListener("keydown", x);
  }, [c, _]);
  const h = (x) => {
    if (b.length === 0) return;
    const S = b.indexOf(f), $ = S === -1 ? 0 : (S + x + b.length) % b.length, O = b[$];
    O != null && k(O);
  }, g = (x) => {
    if (!c) {
      (x.key === "ArrowDown" || x.key === "Enter" || x.key === " ") && (x.preventDefault(), y());
      return;
    }
    switch (x.key) {
      case "Escape":
        x.preventDefault(), _();
        break;
      case "ArrowDown":
        x.preventDefault(), h(1);
        break;
      case "ArrowUp":
        x.preventDefault(), h(-1);
        break;
      case "Home":
        x.preventDefault(), b[0] != null && k(b[0]);
        break;
      case "End":
        x.preventDefault(), b[b.length - 1] != null && k(b[b.length - 1]);
        break;
      case "Enter":
      case " ":
        if (x.preventDefault(), f >= 0) {
          const S = e[f];
          S && !S.disabled && p(S);
        }
        break;
      case "Tab":
        u(!1), k(-1);
        break;
    }
  }, w = (x) => {
    switch (x.key) {
      case "ArrowDown":
        x.preventDefault(), h(1);
        break;
      case "ArrowUp":
        x.preventDefault(), h(-1);
        break;
      case "Home":
        x.preventDefault(), b[0] != null && k(b[0]);
        break;
      case "End":
        x.preventDefault(), b[b.length - 1] != null && k(b[b.length - 1]);
        break;
      case "Enter":
      case " ":
        if (x.preventDefault(), f >= 0) {
          const S = e[f];
          S && !S.disabled && p(S);
        }
        break;
      case "Escape":
        x.preventDefault(), _();
        break;
      case "Tab":
        u(!1), k(-1);
        break;
    }
  };
  return /* @__PURE__ */ s(
    "div",
    {
      ref: o,
      className: [Xt.root, l].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ M("nav", { "aria-label": r, children: [
        /* @__PURE__ */ s(
          "button",
          {
            ref: a,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": c,
            "aria-controls": d,
            "aria-label": r,
            className: Xt.trigger,
            onClick: () => c ? _() : y(),
            onKeyDown: g,
            children: v ?? /* @__PURE__ */ M("span", { className: Xt.defaultTrigger, children: [
              /* @__PURE__ */ s("span", { className: Xt.avatar, "aria-hidden": "true", children: "●" }),
              /* @__PURE__ */ s("span", { children: "Profile" })
            ] })
          }
        ),
        c ? /* @__PURE__ */ s(
          "div",
          {
            id: d,
            role: "menu",
            "aria-label": r,
            "aria-activedescendant": f >= 0 ? `${i}-item-${f}` : void 0,
            className: Xt.menu,
            onKeyDown: w,
            tabIndex: -1,
            children: e.map((x, S) => {
              const $ = !!x.disabled, O = S === f;
              return /* @__PURE__ */ M(
                "div",
                {
                  id: `${i}-item-${S}`,
                  role: "menuitem",
                  "aria-disabled": $ || void 0,
                  tabIndex: $ ? -1 : 0,
                  className: [
                    Xt.item,
                    O ? Xt.active : null,
                    $ ? Xt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    $ || p(x);
                  },
                  onMouseEnter: () => {
                    $ || k(S);
                  },
                  children: [
                    x.icon ? /* @__PURE__ */ s("span", { className: Xt.icon, "aria-hidden": "true", children: x.icon }) : null,
                    /* @__PURE__ */ s("span", { className: Xt.text, children: x.text })
                  ]
                },
                `${x.text}-${S}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const Jy = "_root_1dgrt_1", Qy = "_bottomRight_1dgrt_11", eb = "_bottomLeft_1dgrt_16", tb = "_topRight_1dgrt_21", nb = "_topLeft_1dgrt_26", sb = "_menu_1dgrt_31", rb = "_itemWrapper_1dgrt_48", ob = "_tooltip_1dgrt_54", lb = "_main_1dgrt_76", ab = "_mainIcon_1dgrt_104", ib = "_mainOpen_1dgrt_109", cb = "_item_1dgrt_48", db = "_disabled_1dgrt_141", ub = "_itemIcon_1dgrt_148", yt = {
  root: Jy,
  bottomRight: Qy,
  bottomLeft: eb,
  topRight: tb,
  topLeft: nb,
  menu: sb,
  itemWrapper: rb,
  tooltip: ob,
  main: lb,
  mainIcon: ab,
  mainOpen: ib,
  item: cb,
  disabled: db,
  itemIcon: ub
};
function Nw({
  items: e,
  position: t,
  icon: n = "+",
  onClick: r,
  ariaLabel: l = "Open menu",
  className: i
}) {
  const d = t ?? "bottom-right", a = `${Re()}-menu`, c = Y(null), u = Y(null), [f, k] = W(!1), v = R(
    (_) => {
      if (_.disabled) return;
      const h = { text: _.text, value: _.value };
      r?.(h), k(!1), u.current?.focus();
    },
    [r]
  );
  ge(() => {
    if (!f) return;
    const _ = (h) => {
      c.current && !c.current.contains(h.target) && k(!1);
    };
    return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
  }, [f]), ge(() => {
    if (!f) return;
    const _ = (h) => {
      h.key === "Escape" && (k(!1), u.current?.focus());
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [f]);
  const b = d === "bottom-right" ? yt.bottomRight : d === "bottom-left" ? yt.bottomLeft : d === "top-right" ? yt.topRight : yt.topLeft, p = (_) => {
    !f && (_.key === "Enter" || _.key === " " || _.key === "ArrowDown" || _.key === "ArrowUp") ? (_.preventDefault(), k(!0)) : f && _.key === "Escape" && (_.preventDefault(), k(!1));
  }, y = (_) => {
    _.key === "Escape" && (_.preventDefault(), k(!1), u.current?.focus());
  };
  return /* @__PURE__ */ M(
    "div",
    {
      ref: c,
      className: [yt.root, b, i].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        f ? /* @__PURE__ */ s(
          "div",
          {
            id: a,
            role: "menu",
            "aria-label": l,
            className: yt.menu,
            onKeyDown: y,
            children: e.map((_, h) => {
              const g = !!_.disabled;
              return /* @__PURE__ */ M("div", { className: yt.itemWrapper, children: [
                /* @__PURE__ */ s("span", { className: yt.tooltip, "aria-hidden": "true", children: _.text }),
                /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": _.text,
                    "aria-disabled": g || void 0,
                    title: _.text,
                    disabled: g,
                    tabIndex: g ? -1 : 0,
                    className: [yt.item, g ? yt.disabled : null].filter(Boolean).join(" "),
                    onClick: () => v(_),
                    children: /* @__PURE__ */ s("span", { className: yt.itemIcon, "aria-hidden": "true", children: _.icon ?? "•" })
                  }
                )
              ] }, `${_.text}-${h}`);
            })
          }
        ) : null,
        /* @__PURE__ */ s(
          "button",
          {
            ref: u,
            type: "button",
            className: yt.main,
            "aria-haspopup": "menu",
            "aria-expanded": f,
            "aria-controls": a,
            "aria-label": l,
            onClick: () => k((_) => !_),
            onKeyDown: p,
            children: /* @__PURE__ */ s(
              "span",
              {
                "aria-hidden": "true",
                className: [yt.mainIcon, f ? yt.mainOpen : null].filter(Boolean).join(" "),
                children: n
              }
            )
          }
        )
      ]
    }
  );
}
const fb = "_root_1nu0o_1", _b = "_list_1nu0o_5", hb = "_item_1nu0o_15", pb = "_link_1nu0o_22", mb = "_linkButton_1nu0o_23", gb = "_current_1nu0o_24", xb = "_disabled_1nu0o_68", yb = "_icon_1nu0o_74", bb = "_text_1nu0o_81", vb = "_separator_1nu0o_85", Ve = {
  root: fb,
  list: _b,
  item: hb,
  link: pb,
  linkButton: mb,
  current: gb,
  disabled: xb,
  icon: yb,
  text: bb,
  separator: vb
};
function Ow({
  items: e,
  onClick: t,
  ariaLabel: n = "Breadcrumb",
  className: r
}) {
  const l = t, i = (d) => {
    d.disabled || l?.({ text: d.text, path: d.path });
  };
  return /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": n,
      className: [Ve.root, r].filter(Boolean).join(" "),
      children: /* @__PURE__ */ s("ol", { className: Ve.list, children: e.map((d, o) => {
        const a = o === e.length - 1, c = !!d.disabled;
        return /* @__PURE__ */ M("li", { className: Ve.item, children: [
          a ? c ? /* @__PURE__ */ M(
            "span",
            {
              className: [Ve.current, Ve.disabled].filter(Boolean).join(" "),
              "aria-current": "page",
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: Ve.icon, "aria-hidden": "true", children: d.icon }) : null,
                d.text
              ]
            }
          ) : d.path ? /* @__PURE__ */ M(
            "a",
            {
              href: d.path,
              className: Ve.link,
              "aria-current": "page",
              onClick: (u) => {
                u.preventDefault(), i(d);
              },
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: Ve.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ s("span", { className: Ve.text, children: d.text })
              ]
            }
          ) : /* @__PURE__ */ M(
            "span",
            {
              className: Ve.current,
              "aria-current": "page",
              tabIndex: 0,
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: Ve.icon, "aria-hidden": "true", children: d.icon }) : null,
                d.text
              ]
            }
          ) : c ? /* @__PURE__ */ M(
            "span",
            {
              className: [Ve.link, Ve.disabled].filter(Boolean).join(" "),
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: Ve.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ s("span", { className: Ve.text, children: d.text })
              ]
            }
          ) : d.path ? /* @__PURE__ */ M(
            "a",
            {
              href: d.path,
              className: Ve.link,
              onClick: (u) => {
                u.preventDefault(), i(d);
              },
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: Ve.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ s("span", { className: Ve.text, children: d.text })
              ]
            }
          ) : /* @__PURE__ */ M(
            "button",
            {
              type: "button",
              className: Ve.linkButton,
              tabIndex: 0,
              onClick: () => i(d),
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: Ve.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ s("span", { className: Ve.text, children: d.text })
              ]
            }
          ),
          a ? null : /* @__PURE__ */ s("span", { className: Ve.separator, "aria-hidden": "true", children: "/" })
        ] }, `${d.text}-${o}`);
      }) })
    }
  );
}
const kb = "_link_6vrgp_1", wb = {
  link: kb
}, Sw = Fe(function({ children: t, icon: n, visible: r = !0, className: l, ...i }, d) {
  if (r === !1) return null;
  const o = /* @__PURE__ */ M(ke, { children: [
    n != null && /* @__PURE__ */ s($e, { name: n, "aria-hidden": "true" }),
    t
  ] }), a = [wb.link, l].filter(Boolean).join(" ");
  if (i.href != null) {
    const { href: u, ...f } = i;
    return /* @__PURE__ */ s(
      "a",
      {
        ref: d,
        className: a,
        href: u,
        ...f,
        children: o
      }
    );
  }
  return /* @__PURE__ */ s(
    "button",
    {
      ref: d,
      type: "button",
      className: a,
      ...i,
      children: o
    }
  );
}), $b = "_root_1w5vx_1", Nb = "_list_1w5vx_5", Ob = "_item_1w5vx_15", Sb = "_connector_1w5vx_21", Mb = "_connectorCompleted_1w5vx_30", Cb = "_step_1w5vx_34", Db = "_active_1w5vx_69", zb = "_completed_1w5vx_75", Eb = "_circle_1w5vx_79", Ib = "_check_1w5vx_109", Ab = "_icon_1w5vx_114", Tb = "_number_1w5vx_119", jb = "_text_1w5vx_124", bt = {
  root: $b,
  list: Nb,
  item: Ob,
  connector: Sb,
  connectorCompleted: Mb,
  step: Cb,
  active: Db,
  completed: zb,
  circle: Eb,
  check: Ib,
  icon: Ab,
  number: Tb,
  text: jb
};
function Mw({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: r = 0,
  linear: l,
  Linear: i,
  onChange: d,
  Change: o,
  onSelectedIndexChange: a,
  ariaLabel: c = "Steps",
  className: u
}) {
  const f = l ?? i ?? !1, k = t ?? n, v = k !== void 0, [b, p] = W(() => Math.min(Math.max(0, k ?? r), Math.max(0, e.length - 1))), _ = Math.min(
    Math.max(0, v ? k : b),
    Math.max(0, e.length - 1)
  ), h = Y(null), g = R(
    (S) => {
      const $ = Math.min(
        Math.max(0, S),
        Math.max(0, e.length - 1)
      );
      v || p($), (d ?? o ?? a)?.($);
    },
    [v, d, o, a, e.length]
  ), w = R(
    (S, $) => !!($.disabled || f && S > _ + 1),
    [f, _]
  ), x = (S) => {
    const $ = Array.from(
      S.currentTarget.querySelectorAll("button[data-step]")
    ).filter((D) => D.getAttribute("aria-disabled") !== "true" && !D.disabled), O = document.activeElement, E = O ? $.indexOf(O) : -1;
    if (S.key === "ArrowRight" || S.key === "ArrowDown") {
      if (S.preventDefault(), $.length === 0) return;
      const D = E === -1 ? 0 : (E + 1) % $.length, z = $[D];
      z && z.focus();
    } else if (S.key === "ArrowLeft" || S.key === "ArrowUp") {
      if (S.preventDefault(), $.length === 0) return;
      const D = E === -1 ? $.length - 1 : (E - 1 + $.length) % $.length, z = $[D];
      z && z.focus();
    } else S.key === "Home" ? (S.preventDefault(), $[0]?.focus()) : S.key === "End" && (S.preventDefault(), $[$.length - 1]?.focus());
  };
  return /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": c,
      className: [bt.root, u].filter(Boolean).join(" "),
      onKeyDown: x,
      children: /* @__PURE__ */ s("ol", { ref: h, role: "list", className: bt.list, children: e.map((S, $) => {
        const O = $ === _, E = $ < _, D = w($, S);
        return /* @__PURE__ */ M(
          "li",
          {
            role: "listitem",
            className: bt.item,
            children: [
              $ > 0 ? /* @__PURE__ */ s(
                "span",
                {
                  className: [
                    bt.connector,
                    E ? bt.connectorCompleted : null
                  ].filter(Boolean).join(" "),
                  "aria-hidden": "true"
                }
              ) : null,
              /* @__PURE__ */ M(
                "button",
                {
                  type: "button",
                  "data-step": $,
                  "aria-current": O ? "step" : void 0,
                  "aria-disabled": D ? "true" : void 0,
                  disabled: D,
                  tabIndex: D ? -1 : 0,
                  className: [
                    bt.step,
                    O ? bt.active : null,
                    E ? bt.completed : null,
                    D ? bt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    D || g($);
                  },
                  children: [
                    /* @__PURE__ */ s("span", { className: bt.circle, "aria-hidden": "true", children: E ? /* @__PURE__ */ s("span", { className: bt.check, "aria-hidden": "true", children: /* @__PURE__ */ s($e, { name: "check", size: "sm" }) }) : S.icon ? /* @__PURE__ */ s("span", { className: bt.icon, children: S.icon }) : /* @__PURE__ */ s("span", { className: bt.number, children: $ + 1 }) }),
                    /* @__PURE__ */ s("span", { className: bt.text, children: S.text })
                  ]
                }
              )
            ]
          },
          `${S.text}-${$}`
        );
      }) })
    }
  );
}
const Lb = "_root_1np74_1", Pb = "_horizontal_1np74_13", Rb = "_vertical_1np74_17", Bb = "_pane_1np74_21", qb = "_handle_1np74_31", Fb = "_handleHorizontal_1np74_51", Hb = "_handleVertical_1np74_57", Kb = "_handleGrip_1np74_63", Wb = "_handleCollapseHint_1np74_75", Ub = "_collapseBtn_1np74_79", Vb = "_collapseBtnCollapsed_1np74_109", Et = {
  root: Lb,
  horizontal: Pb,
  vertical: Rb,
  pane: Bb,
  handle: qb,
  handleHorizontal: Fb,
  handleVertical: Hb,
  handleGrip: Kb,
  handleCollapseHint: Wb,
  collapseBtn: Ub,
  collapseBtnCollapsed: Vb
};
function Qn(e, t) {
  if (!e) return t;
  const n = e.trim();
  if (n.endsWith("%")) {
    const l = parseFloat(n.slice(0, -1));
    return Number.isNaN(l) ? t : l;
  }
  if (n.endsWith("px")) {
    const l = parseFloat(n.slice(0, -2));
    return Number.isNaN(l) ? t : l;
  }
  const r = parseFloat(n);
  return Number.isNaN(r) ? t : r;
}
function sn(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function Cw({
  orientation: e,
  Orientation: t,
  panes: n,
  onResize: r,
  Resize: l,
  onCollapse: i,
  Collapse: d,
  ariaLabel: o = "Splitter",
  className: a
}) {
  const c = e ?? t ?? "horizontal", u = c === "horizontal", f = Y(null), k = R(() => {
    const m = n.length;
    if (m === 0) return [];
    const C = n.map((j) => j.size ? Qn(j.size, 100 / m) : 100 / m), T = C.reduce((j, A) => j + A, 0);
    return Math.abs(T - 100) > 0.01 && T > 0 ? C.map((j) => j / T * 100) : C;
  }, [n]), [v, b] = W(() => k()), [p, y] = W(
    () => n.map((m) => !!m.collapsed)
  ), _ = Y(v);
  ge(() => {
    y(n.map((m) => !!m.collapsed));
  }, [n]);
  const h = R(
    () => n.map((m) => Qn(m.min, 0)),
    [n]
  ), g = R(
    () => n.map((m) => Qn(m.max, 100)),
    [n]
  ), w = R(
    (m, C) => {
      const T = { paneIndex: m, newSize: C, cancel: !1 };
      return (r ?? l)?.(T), !T.cancel;
    },
    [r, l]
  ), x = R(
    (m, C) => {
      const T = { paneIndex: m, collapse: C, cancel: !1 };
      return (i ?? d)?.(T), !T.cancel;
    },
    [i, d]
  ), S = R(
    (m) => {
      const C = !p[m];
      x(m, C) && (C ? (_.current = [...v], y((T) => {
        const j = [...T];
        return j[m] !== void 0 && (j[m] = !0), j;
      }), b((T) => {
        const j = [...T], A = j[m] ?? 0, L = m < j.length - 1 ? m + 1 : m - 1;
        if (L >= 0 && L < j.length) {
          const Z = j[L] ?? 0;
          j[L] = Z + A, j[m] = 0;
        } else
          j[m] = 0;
        return j;
      })) : (y((T) => {
        const j = [...T];
        return j[m] !== void 0 && (j[m] = !1), j;
      }), b(() => {
        const T = [..._.current];
        return T.length !== n.length ? n.map(() => 100 / n.length) : T;
      })));
    },
    [p, v, n.length, x]
  ), $ = Y(
    null
  ), O = R(
    (m, C, T) => {
      const j = f.current;
      if (!j) return null;
      const A = j.getBoundingClientRect();
      let L;
      if (u) {
        if (A.width === 0) return null;
        L = (C - A.left) / A.width * 100;
      } else {
        if (A.height === 0) return null;
        L = (T - A.top) / A.height * 100;
      }
      let Z = 0;
      for (let ne = 0; ne < m; ne++) {
        const X = v[ne];
        X !== void 0 && (Z += X);
      }
      return L - Z;
    },
    [u, v]
  ), E = (m, C) => {
    C.preventDefault();
    const T = C.currentTarget;
    T.focus(), typeof T.setPointerCapture == "function" && T.setPointerCapture(C.pointerId), $.current = { handleIndex: m, pointerId: C.pointerId };
  }, D = (m) => {
    if (!$.current || $.current.pointerId !== m.pointerId)
      return;
    m.preventDefault();
    const C = $.current.handleIndex, T = O(C, m.clientX, m.clientY);
    if (T == null) return;
    const j = h(), A = g(), L = j[C] ?? 0, Z = A[C] ?? 100, se = C + 1, ne = j[se] ?? 0, X = A[se] ?? 100, pe = v[C] ?? 0, de = v[se] ?? 0, re = pe + de;
    if (re <= 0) return;
    let K = sn(T, L, Z), ie = re - K;
    if (ie < ne) {
      if (ie = ne, K = re - ie, K < L || K > Z) return;
    } else if (ie > X && (ie = X, K = re - ie, K < L || K > Z))
      return;
    K = sn(K, L, Z), ie = re - K, w(C, K) && b((te) => {
      const oe = [...te];
      return oe[C] = K, oe[se] = ie, oe;
    });
  }, z = (m) => {
    !$.current || $.current.pointerId !== m.pointerId || ($.current = null);
  }, N = (m, C) => {
    const T = h(), j = g(), A = m, L = m + 1, Z = v[A] ?? 0, se = v[L] ?? 0, ne = Z + se;
    let X = 0;
    const pe = !!n[A]?.collapsible, de = !!n[L]?.collapsible;
    if (u ? C.key === "ArrowLeft" ? X = -5 : C.key === "ArrowRight" && (X = 5) : C.key === "ArrowUp" ? X = -5 : C.key === "ArrowDown" && (X = 5), C.key === "Home") {
      C.preventDefault();
      let re = T[A] ?? 0, K = ne - re;
      if (K = sn(
        K,
        T[L] ?? 0,
        j[L] ?? 100
      ), re = ne - K, re = sn(re, T[A] ?? 0, j[A] ?? 100), !w(A, re)) return;
      b((ie) => {
        const te = [...ie];
        return te[A] = re, te[L] = K, te;
      });
      return;
    }
    if (C.key === "End") {
      C.preventDefault();
      let re = j[A] ?? 100;
      re = Math.min(re, ne - (T[L] ?? 0));
      let K = ne - re;
      if (K = sn(
        K,
        T[L] ?? 0,
        j[L] ?? 100
      ), re = ne - K, re = sn(re, T[A] ?? 0, j[A] ?? 100), !w(A, re)) return;
      b((ie) => {
        const te = [...ie];
        return te[A] = re, te[L] = K, te;
      });
      return;
    }
    if ((C.key === "Enter" || C.key === " ") && (pe || de)) {
      C.preventDefault(), S(pe ? A : L);
      return;
    }
    if (X !== 0) {
      C.preventDefault();
      let re = Z + X, K = ne - re;
      const ie = T[A] ?? 0, te = j[A] ?? 100, oe = T[L] ?? 0, _e = j[L] ?? 100;
      if (re = sn(re, ie, te), K = ne - re, (K < oe || K > _e) && (K = sn(K, oe, _e), re = ne - K, re = sn(re, ie, te), K = ne - re), !w(A, re)) return;
      b((ve) => {
        const Ce = [...ve];
        return Ce[A] = re, Ce[L] = K, Ce;
      });
    }
  };
  return /* @__PURE__ */ s(
    "div",
    {
      ref: f,
      className: [
        Et.root,
        u ? Et.horizontal : Et.vertical,
        a
      ].filter(Boolean).join(" "),
      "aria-label": o,
      children: n.map((m, C) => {
        const T = !!p[C], j = T ? 0 : v[C] ?? 100 / n.length, A = T ? { display: "none" } : u ? {
          flexBasis: `${j}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        } : {
          flexBasis: `${j}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        }, L = Qn(m.min, 0), Z = Qn(m.max, 100), se = C < n.length - 1, ne = !!n[C + 1]?.collapsible;
        return /* @__PURE__ */ M("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ M(
            "div",
            {
              role: "group",
              "aria-label": m.label ?? `Pane ${C + 1}`,
              className: Et.pane,
              style: A,
              "data-collapsed": T ? "true" : void 0,
              children: [
                T ? null : m.children,
                m.collapsible && !T ? /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    className: Et.collapseBtn,
                    "aria-label": `Collapse pane ${C + 1}`,
                    "aria-expanded": !T,
                    onClick: () => S(C),
                    children: u ? "◀" : "▲"
                  }
                ) : null,
                m.collapsible && T ? /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    className: Et.collapseBtn,
                    "aria-label": `Expand pane ${C + 1}`,
                    "aria-expanded": !T,
                    onClick: () => S(C),
                    children: u ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          T && m.collapsible ? (
            // when collapsed we already rendered expand button inside pane, but pane is display none, so render expand button outside?
            // Actually we hide pane with display none, need visible expand button
            // So render alternative expand button adjacent
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: Et.collapseBtnCollapsed,
                "aria-label": `Expand pane ${C + 1}`,
                "aria-expanded": "false",
                onClick: () => S(C),
                children: u ? "▶" : "▼"
              }
            )
          ) : null,
          se ? /* @__PURE__ */ M(
            "div",
            {
              role: "separator",
              "aria-orientation": c,
              "aria-valuemin": L,
              "aria-valuemax": Z,
              "aria-valuenow": Math.round(j),
              "aria-label": `Resize handle ${C + 1}`,
              tabIndex: T || p[C + 1] ? -1 : 0,
              className: [
                Et.handle,
                u ? Et.handleHorizontal : Et.handleVertical
              ].filter(Boolean).join(" "),
              onPointerDown: (X) => E(C, X),
              onPointerMove: D,
              onPointerUp: z,
              onKeyDown: (X) => N(C, X),
              children: [
                /* @__PURE__ */ s("span", { className: Et.handleGrip, "aria-hidden": "true" }),
                (m.collapsible || ne) && /* @__PURE__ */ s(
                  "span",
                  {
                    className: Et.handleCollapseHint,
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
const Xb = "_root_wurjl_1", Gb = "_list_wurjl_5", Yb = "_vertical_wurjl_14", Zb = "_horizontal_wurjl_20", Jb = "_item_wurjl_28", Qb = "_link_wurjl_32", e2 = "_active_wurjl_57", jn = {
  root: Xb,
  list: Gb,
  vertical: Yb,
  horizontal: Zb,
  item: Jb,
  link: Qb,
  active: e2
};
function Dw({
  items: e,
  selector: t,
  Selector: n,
  orientation: r,
  Orientation: l,
  onClick: i,
  Click: d,
  ariaLabel: o = "Table of contents",
  className: a
}) {
  const c = t ?? n, u = r ?? l ?? "vertical", [f, k] = W(
    () => e[0]?.selector ?? null
  ), v = Y(f);
  v.current = f;
  const b = R(
    (p, y) => {
      if (k(p.selector), (i ?? d)?.({ text: p.text, selector: p.selector }), y) {
        try {
          y.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        } catch {
          y.scrollIntoView();
        }
        const h = y;
        h.getAttribute("tabindex") == null && h.tabIndex === -1 || h.tabIndex < 0 ? (h.getAttribute("tabindex"), h.setAttribute("tabindex", "-1"), h.focus({ preventScroll: !0 })) : h.focus({ preventScroll: !0 });
      }
    },
    [i, d]
  );
  return ge(() => {
    if (e.length === 0) return;
    const y = (() => {
      if (c) {
        const x = document.querySelector(c);
        if (x) return x;
      }
      return window;
    })();
    let _ = null;
    const h = /* @__PURE__ */ new Map(), g = () => {
      let x = null, S = null;
      for (const O of e) {
        const E = document.querySelector(O.selector);
        if (!E) continue;
        h.set(O.selector, E);
        const D = E.getBoundingClientRect();
        let z = D.top;
        if (y !== window) {
          const N = y.getBoundingClientRect();
          z = D.top - N.top;
        }
        z <= 80 ? (!S || z > S.el.getBoundingClientRect().top - (y !== window ? y.getBoundingClientRect().top : 0)) && (S = { sel: O.selector, el: E }) : (!x || z < x.top) && (x = { sel: O.selector, top: z });
      }
      const $ = S?.sel ?? x?.sel ?? e[0]?.selector ?? null;
      $ && $ !== v.current && k($);
    }, w = () => {
      g();
    };
    if (typeof IntersectionObserver < "u") {
      const x = y === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
        root: y,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      };
      _ = new IntersectionObserver((S) => {
        const $ = S.filter((O) => O.isIntersecting).sort((O, E) => O.boundingClientRect.top - E.boundingClientRect.top);
        if ($[0]) {
          const O = $[0].target;
          for (const E of e) {
            if (document.querySelector(E.selector) === O) {
              k(E.selector);
              break;
            }
            if (E.selector.startsWith("#") && O.id === E.selector.slice(1)) {
              k(E.selector);
              break;
            }
          }
        } else
          g();
      }, x);
      for (const S of e) {
        const $ = document.querySelector(S.selector);
        $ && (_.observe($), h.set(S.selector, $));
      }
    }
    return y === window ? (window.addEventListener("scroll", w, { passive: !0 }), g(), () => {
      window.removeEventListener("scroll", w), _?.disconnect();
    }) : (y.addEventListener("scroll", w, {
      passive: !0
    }), g(), () => {
      y.removeEventListener("scroll", w), _?.disconnect();
    });
  }, [e, c]), /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": o,
      className: [jn.root, jn[u], a].filter(Boolean).join(" "),
      children: /* @__PURE__ */ s("ol", { className: jn.list, children: e.map((p) => {
        const y = p.selector === f;
        return /* @__PURE__ */ s("li", { className: jn.item, children: /* @__PURE__ */ s(
          "a",
          {
            href: p.selector.startsWith("#") || p.selector.startsWith(".") ? p.selector : `#${p.selector}`,
            className: [jn.link, y ? jn.active : null].filter(Boolean).join(" "),
            "aria-current": y ? "location" : void 0,
            onClick: (_) => {
              _.preventDefault();
              const h = document.querySelector(p.selector);
              b(p, h);
            },
            children: p.text
          }
        ) }, `${p.text}-${p.selector}`);
      }) })
    }
  );
}
const t2 = "_root_u1med_1", n2 = "_viewport_u1med_17", s2 = "_slide_u1med_24", r2 = "_active_u1med_33", o2 = "_arrow_u1med_37", l2 = "_prev_u1med_71", a2 = "_next_u1med_75", i2 = "_pauseBtn_u1med_79", c2 = "_indicators_u1med_110", d2 = "_indicator_u1med_110", u2 = "_indicatorActive_u1med_145", It = {
  root: t2,
  viewport: n2,
  slide: s2,
  active: r2,
  arrow: o2,
  prev: l2,
  next: a2,
  pauseBtn: i2,
  indicators: c2,
  indicator: d2,
  indicatorActive: u2
};
function zw({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: r = 0,
  auto: l,
  Auto: i,
  interval: d,
  Interval: o,
  pauseOnHover: a,
  PauseOnHover: c,
  showArrows: u,
  ShowArrows: f,
  showIndicators: k,
  ShowIndicators: v,
  onChange: b,
  Change: p,
  ariaLabel: y = "Carousel",
  className: _
}) {
  const h = t ?? n, g = h !== void 0, [w, x] = W(() => Math.min(Math.max(0, h ?? r), Math.max(0, e.length - 1))), S = g ? h : w, $ = e.length === 0 ? 0 : Math.min(Math.max(0, S), e.length - 1), O = l ?? i ?? !1, E = d ?? o ?? 3e3, D = a ?? c ?? !0, z = u ?? f ?? !0, N = k ?? v ?? !0, [m, C] = W(!1), [T, j] = W(!1), A = m || T, L = Y(null), Z = Re(), se = R(
    (oe) => {
      const _e = e.length === 0 ? 0 : (oe % e.length + e.length) % e.length;
      g || x(_e), (b ?? p)?.(_e);
    },
    [g, b, p, e.length]
  ), ne = R(() => {
    se($ - 1);
  }, [se, $]), X = R(() => {
    se($ + 1);
  }, [se, $]), pe = R(
    (oe) => {
      se(oe);
    },
    [se]
  );
  ge(() => {
    if (!O || A || e.length <= 1) return;
    const oe = setInterval(() => {
      se($ + 1);
    }, E);
    return () => clearInterval(oe);
  }, [O, A, E, $, se, e.length]);
  const de = (oe) => {
    e.length !== 0 && (oe.key === "ArrowLeft" ? (oe.preventDefault(), ne()) : oe.key === "ArrowRight" ? (oe.preventDefault(), X()) : oe.key === "Home" ? (oe.preventDefault(), pe(0)) : oe.key === "End" && (oe.preventDefault(), pe(e.length - 1)));
  }, re = () => {
    D && O && j(!0);
  }, K = () => {
    D && O && j(!1);
  }, ie = () => {
    D && O && j(!0);
  }, te = () => {
    D && O && j(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ M(
    "div",
    {
      ref: L,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": y,
      tabIndex: 0,
      className: [It.root, _].filter(Boolean).join(" "),
      onKeyDown: de,
      onMouseEnter: re,
      onMouseLeave: K,
      onFocusCapture: ie,
      onBlurCapture: te,
      children: [
        /* @__PURE__ */ s("div", { id: Z, className: It.viewport, children: e.map((oe, _e) => {
          const ve = _e === $;
          return /* @__PURE__ */ s(
            "div",
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `Slide ${_e + 1} of ${e.length}`,
              "aria-hidden": ve ? void 0 : !0,
              hidden: !ve,
              className: [It.slide, ve ? It.active : null].filter(Boolean).join(" "),
              children: oe
            },
            _e
          );
        }) }),
        z && e.length > 1 ? /* @__PURE__ */ M(ke, { children: [
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: [It.arrow, It.prev].filter(Boolean).join(" "),
              "aria-label": "Previous slide",
              "aria-controls": Z,
              onClick: ne,
              children: "‹"
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: [It.arrow, It.next].filter(Boolean).join(" "),
              "aria-label": "Next slide",
              "aria-controls": Z,
              onClick: X,
              children: "›"
            }
          )
        ] }) : null,
        O ? /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: It.pauseBtn,
            "aria-label": m ? "Resume" : "Pause",
            "aria-pressed": m,
            onClick: () => C((oe) => !oe),
            children: m ? "▶" : "⏸"
          }
        ) : null,
        N && e.length > 1 ? /* @__PURE__ */ s(
          "div",
          {
            className: It.indicators,
            role: "group",
            "aria-label": "Slide indicators",
            children: e.map((oe, _e) => {
              const ve = _e === $;
              return /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: [
                    It.indicator,
                    ve ? It.indicatorActive : null
                  ].filter(Boolean).join(" "),
                  "aria-label": `Go to slide ${_e + 1}`,
                  "aria-current": ve ? "true" : void 0,
                  "aria-controls": Z,
                  onClick: () => pe(_e)
                },
                _e
              );
            })
          }
        ) : null
      ]
    }
  );
}
const f2 = "_root_xvqqt_1", _2 = "_group_xvqqt_20", h2 = "_itemWrapper_xvqqt_30", p2 = "_treeitem_xvqqt_34", m2 = "_disabled_xvqqt_50", g2 = "_selected_xvqqt_60", x2 = "_caret_xvqqt_66", y2 = "_caretIcon_xvqqt_113", b2 = "_caretOpen_xvqqt_120", v2 = "_caretPlaceholder_xvqqt_124", k2 = "_label_xvqqt_130", w2 = "_loading_xvqqt_137", $2 = "_loadingRow_xvqqt_143", N2 = "_empty_xvqqt_149", O2 = "_checkbox_xvqqt_155", it = {
  root: f2,
  group: _2,
  itemWrapper: h2,
  treeitem: p2,
  disabled: m2,
  selected: g2,
  caret: x2,
  caretIcon: y2,
  caretOpen: b2,
  caretPlaceholder: v2,
  label: k2,
  loading: w2,
  loadingRow: $2,
  empty: N2,
  checkbox: O2
};
function S2({
  indeterminate: e,
  ...t
}) {
  const n = Y(null);
  return ge(() => {
    n.current && (n.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ s("input", { ref: n, type: "checkbox", ...t });
}
function Ew({
  data: e,
  Data: t,
  children: n,
  Children: r,
  textProperty: l,
  TextProperty: i,
  keyProperty: d,
  KeyProperty: o,
  selectionMode: a,
  SelectionMode: c,
  selectedItem: u,
  SelectedItem: f,
  selectedItems: k,
  SelectedItems: v,
  defaultSelectedItem: b,
  defaultSelectedItems: p,
  onChange: y,
  Change: _,
  onExpand: h,
  Expand: g,
  onCollapse: w,
  Collapse: x,
  loadChildData: S,
  LoadChildData: $,
  template: O,
  Template: E,
  itemTemplate: D,
  ItemTemplate: z,
  ariaLabel: N,
  AriaLabel: m,
  allowCheckBoxes: C = !1,
  checkedKeys: T,
  defaultCheckedKeys: j,
  onCheckedChange: A,
  allowCheckChildren: L = !0,
  className: Z
}) {
  const se = e ?? t ?? [], ne = n ?? r, X = l ?? i ?? "text", pe = d ?? o ?? "id", de = a ?? c ?? "single", re = N ?? m ?? "Tree", K = S ?? $, ie = O ?? E ?? D ?? z, te = R(
    (F) => {
      const V = F[pe];
      return V != null ? String(V) : String(F.id ?? "");
    },
    [pe]
  ), oe = R(
    (F) => {
      const V = F[X];
      if (V != null) return String(V);
      const ee = F.text;
      return ee != null ? String(ee) : "";
    },
    [X]
  ), _e = R(
    (F) => {
      if (ne) {
        const ee = ne(F);
        if (ee !== void 0) return ee;
      }
      const V = F.children;
      if (Array.isArray(V)) return V;
    },
    [ne]
  ), ve = R(
    (F) => {
      const V = /* @__PURE__ */ new Set(), ee = (me) => {
        for (const fe of me) {
          const be = te(fe);
          fe.expanded && V.add(be);
          const Ie = _e(fe);
          Ie && Ie.length > 0 && ee(Ie);
        }
      };
      return ee(F), V;
    },
    [te, _e]
  ), [Ce, Le] = W(
    () => ve(se)
  ), [we, Te] = W(
    () => /* @__PURE__ */ new Map()
  ), [Me, st] = W(() => /* @__PURE__ */ new Set()), rt = u ?? f, He = k ?? v, wt = de === "multiple" ? He !== void 0 : rt !== void 0, U = R(() => {
    if (de === "multiple") {
      if (p && p.length > 0)
        return new Set(p.map((ee) => te(ee)));
      const F = /* @__PURE__ */ new Set(), V = (ee) => {
        for (const me of ee) {
          me.selected && F.add(te(me));
          const fe = _e(me);
          fe && V(fe);
        }
      };
      return V(se), F;
    } else {
      if (b) return /* @__PURE__ */ new Set([te(b)]);
      let F = null;
      const V = (ee) => {
        for (const me of ee) {
          if (me.selected)
            return F = te(me), !0;
          const fe = _e(me);
          if (fe && V(fe)) return !0;
        }
        return !1;
      };
      return V(se), F ? /* @__PURE__ */ new Set([F]) : /* @__PURE__ */ new Set();
    }
  }, [
    de,
    b,
    p,
    te,
    _e,
    se
  ]), [I, q] = W(
    () => U()
  ), Q = xe(() => {
    if (de === "multiple") {
      if (He !== void 0) {
        const F = He;
        return F ? new Set(F.map((V) => te(V))) : /* @__PURE__ */ new Set();
      }
      return I;
    } else {
      if (rt !== void 0) {
        const F = rt;
        return F ? /* @__PURE__ */ new Set([te(F)]) : /* @__PURE__ */ new Set();
      }
      return I;
    }
  }, [
    de,
    He,
    rt,
    I,
    te
  ]), ue = R(
    (F) => {
      let V;
      const ee = (me) => {
        for (const fe of me) {
          if (te(fe) === F)
            return V = fe, !0;
          const Ie = we.get(te(fe)) ?? _e(fe);
          if (Ie && ee(Ie)) return !0;
        }
        return !1;
      };
      if (ee(se), !V) {
        for (const me of we.values())
          if (ee(me)) break;
      }
      return V;
    },
    [se, we, te, _e]
  ), J = R(() => {
    const F = /* @__PURE__ */ new Map(), V = (ee) => {
      for (const me of ee) {
        const fe = te(me);
        F.set(fe, me);
        const Ie = we.get(fe) ?? _e(me);
        Ie && V(Ie);
      }
    };
    return V(se), F;
  }, [se, we, te, _e]), ye = R(
    (F) => {
      const V = te(F);
      if (!F.disabled)
        if (de === "multiple") {
          const me = new Set(Q);
          me.has(V) ? me.delete(V) : me.add(V), wt || q(me);
          const fe = y ?? _;
          if (fe) {
            const be = J(), Ie = [];
            for (const Ee of me) {
              const Ze = be.get(Ee) ?? ue(Ee);
              Ze && Ie.push(Ze);
            }
            fe({ item: F, selectedItems: Ie });
          }
        } else if (!Q.has(V) || Q.size !== 1 || !Q.has(V)) {
          wt || q(/* @__PURE__ */ new Set([V]));
          const fe = y ?? _;
          fe && fe({ item: F, selectedItem: F });
        } else {
          const fe = y ?? _;
          fe && fe({ item: F, selectedItem: F });
        }
    },
    [
      te,
      de,
      Q,
      wt,
      y,
      _,
      J,
      ue
    ]
  ), ze = R(
    async (F) => {
      const V = te(F);
      if (!!F.disabled) return;
      const me = Ce.has(V), fe = h ?? g, be = w ?? x, Ie = _e(F), Ze = we.get(V) ?? Ie, ft = !(Ze !== void 0 && Ze.length > 0) && K != null;
      if (me) {
        Le((nt) => {
          const Je = new Set(nt);
          return Je.delete(V), Je;
        }), be?.({ item: F });
        return;
      }
      if (ft) {
        if (Me.has(V)) return;
        st((nt) => {
          const Je = new Set(nt);
          return Je.add(V), Je;
        });
        try {
          const Je = await K(F);
          Te((qt) => {
            const jt = new Map(qt);
            return jt.set(V, Je), jt;
          }), Le((qt) => {
            const jt = new Set(qt);
            return jt.add(V), jt;
          }), fe?.({ item: F });
        } catch {
        } finally {
          st((nt) => {
            const Je = new Set(nt);
            return Je.delete(V), Je;
          });
        }
        return;
      }
      Le((nt) => {
        const Je = new Set(nt);
        return Je.add(V), Je;
      }), fe?.({ item: F });
    },
    [
      te,
      Ce,
      _e,
      we,
      K,
      Me,
      h,
      g,
      w,
      x
    ]
  ), Pe = xe(() => {
    const F = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Set(), me = (fe, be) => {
      for (const Ie of fe) {
        const Ee = te(Ie);
        F.has(Ee) || F.set(Ee, []), V.set(Ee, be), Ie.disabled && ee.add(Ee);
        const tt = we.get(Ee) ?? _e(Ie);
        tt && tt.length > 0 && (F.set(
          Ee,
          tt.map((ft) => te(ft))
        ), me(tt, Ee));
      }
    };
    return me(se, null), { childrenOf: F, parentOf: V, disabledKeys: ee };
  }, [se, we, te, _e]), Ye = R(
    (F) => {
      const V = [], ee = [...Pe.childrenOf.get(F) ?? []];
      for (; ee.length > 0; ) {
        const me = ee.pop();
        V.push(me), ee.push(...Pe.childrenOf.get(me) ?? []);
      }
      return V;
    },
    [Pe]
  ), [ut, pn] = W(
    () => new Set(j ?? [])
  ), G = T !== void 0 ? new Set(T) : ut, Se = R(
    (F) => {
      const V = Pe.disabledKeys;
      return Ye(F).filter((ee) => !V.has(ee));
    },
    [Ye, Pe]
  ), et = R(
    (F) => {
      if (G.has(F)) return !0;
      if (!C || !L) return !1;
      const V = Se(F);
      return V.length > 0 && V.every((ee) => G.has(ee));
    },
    [G, C, L, Se]
  ), Dt = R(
    (F) => {
      if (!C || !L || G.has(F))
        return !1;
      const V = Se(F);
      if (V.length === 0) return !1;
      const ee = V.filter((me) => G.has(me)).length;
      return ee > 0 && ee < V.length;
    },
    [G, C, L, Se]
  ), $t = R(
    (F) => {
      if (!C || F.disabled) return;
      const V = te(F), ee = new Set(G);
      if (ee.has(V) || et(V)) {
        if (ee.delete(V), L)
          for (const me of Se(V)) ee.delete(me);
      } else if (ee.add(V), L)
        for (const me of Se(V)) ee.add(me);
      T === void 0 && pn(ee), A?.([...ee]);
    },
    [
      C,
      L,
      T,
      G,
      Se,
      te,
      et,
      A
    ]
  ), Ne = xe(() => {
    const F = [], V = (ee, me, fe) => {
      ee.forEach((be, Ie) => {
        const Ee = te(be), Ze = oe(be), tt = we.get(Ee) ?? _e(be);
        let ft;
        we.has(Ee) ? ft = we.get(Ee).length > 0 : tt !== void 0 ? ft = tt.length > 0 : K ? ft = !0 : ft = !1;
        const nt = Ce.has(Ee), Je = !!be.disabled, qt = ee.length, jt = Ie + 1;
        if (F.push({
          item: be,
          key: Ee,
          text: Ze,
          level: me,
          posInSet: jt,
          setSize: qt,
          hasChildren: ft,
          expanded: nt,
          parentKey: fe,
          disabled: Je
        }), ft && nt) {
          const Ft = we.get(Ee) ?? tt;
          Ft && Ft.length > 0 && V(Ft, me + 1, Ee);
        }
      });
    };
    return V(se, 1, null), F;
  }, [
    se,
    te,
    oe,
    _e,
    we,
    Ce,
    K,
    Me
  ]), [Ke, lt] = W(
    () => Ne[0]?.key ?? null
  ), We = Y(""), Yt = Y(null), H = Y(null);
  ge(() => {
    if (!Ke && Ne.length > 0) {
      const F = Ne[0];
      F && lt(F.key);
    } else if (Ke && !Ne.some((F) => F.key === Ke)) {
      const F = Ne[0];
      lt(F ? F.key : null);
    }
  }, [Ne, Ke]), ge(() => {
    if (Ke) {
      const F = H.current?.querySelector(
        `[data-key="${CSS.escape(Ke)}"]`
      );
      let V = null;
      F || (V = H.current?.querySelector(
        `[data-key="${Ke}"]`
      ) ?? null);
      const ee = F ?? V;
      ee && document.activeElement !== ee && H.current?.contains(document.activeElement) && ee.focus();
    }
  }, [Ke]);
  const le = R((F) => {
    lt(F), requestAnimationFrame(() => {
      const V = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(F) : F;
      let ee = H.current?.querySelector(
        `[data-key="${V}"]`
      );
      ee || (ee = H.current?.querySelector(`[data-key="${F}"]`) ?? null), ee?.focus();
    });
  }, []), Ae = R(
    (F) => Ne.find((ee) => ee.key === F)?.parentKey ?? null,
    [Ne]
  ), Be = R(
    (F) => {
      if (Ne.length === 0) return;
      const V = Ke ? Ne.findIndex((fe) => fe.key === Ke) : -1, ee = V >= 0 ? Ne[V] : void 0;
      let me = null;
      if (F.key === "ArrowDown") {
        if (F.preventDefault(), V === -1)
          me = Ne[0]?.key ?? null;
        else {
          const fe = (V + 1) % Ne.length, be = Ne[fe];
          be && (me = be.key);
        }
        me && le(me);
        return;
      }
      if (F.key === "ArrowUp") {
        if (F.preventDefault(), V === -1) {
          const fe = Ne[Ne.length - 1];
          fe && (me = fe.key);
        } else {
          const fe = (V - 1 + Ne.length) % Ne.length, be = Ne[fe];
          be && (me = be.key);
        }
        me && le(me);
        return;
      }
      if (F.key === "ArrowRight") {
        if (F.preventDefault(), !ee) return;
        if (ee.hasChildren && !ee.expanded)
          ze(ee.item);
        else if (ee.hasChildren && ee.expanded) {
          const fe = V + 1, be = Ne[fe];
          be && be.parentKey === ee.key && le(be.key);
        }
        return;
      }
      if (F.key === "ArrowLeft") {
        if (F.preventDefault(), !ee) return;
        if (ee.hasChildren && ee.expanded)
          ze(ee.item);
        else {
          const fe = Ae(ee.key);
          fe && le(fe);
        }
        return;
      }
      if (F.key === "Home") {
        F.preventDefault();
        const fe = Ne[0];
        fe && le(fe.key);
        return;
      }
      if (F.key === "End") {
        F.preventDefault();
        const fe = Ne[Ne.length - 1];
        fe && le(fe.key);
        return;
      }
      if (F.key === "Enter" || F.key === " ") {
        if (F.key === " " && F.target?.tagName === "INPUT" || (F.preventDefault(), !ee)) return;
        if (F.key === " " && C) {
          const fe = ue(ee.key);
          fe && $t(fe);
          return;
        }
        ye(ee.item);
        return;
      }
      if (F.key.length === 1 && /^[a-zA-Z0-9]$/.test(F.key)) {
        F.preventDefault();
        const fe = (We.current + F.key).toLowerCase();
        We.current = fe, Yt.current && clearTimeout(Yt.current), Yt.current = setTimeout(() => {
          We.current = "";
        }, 500);
        const be = V >= 0 ? V + 1 : 0, Ze = [...Ne, ...Ne].slice(be, be + Ne.length).find((tt) => tt.text.toLowerCase().startsWith(fe));
        Ze && le(Ze.key);
        return;
      }
    },
    [
      Ne,
      Ke,
      le,
      ze,
      ye,
      Ae,
      C,
      $t
    ]
  ), at = R(() => {
    if (!Ke && Ne.length > 0) {
      const F = Ne[0];
      F && lt(F.key);
    }
  }, [Ke, Ne]), Tt = (F, V, ee) => /* @__PURE__ */ s("ul", { role: "group", className: it.group, children: F.map((me, fe) => {
    const be = te(me), Ie = oe(me), Ee = we.get(be) ?? _e(me);
    let Ze;
    we.has(be) ? Ze = we.get(be).length > 0 : Ee !== void 0 ? Ze = Ee.length > 0 : K ? Ze = !0 : Ze = !1;
    const tt = Ce.has(be), ft = Q.has(be), nt = !!me.disabled, Je = Me.has(be), qt = Ke === be, jt = F.length, Ft = fe + 1, os = ie ? ie(me) : Ie, qn = C ? {
      checked: et(be),
      indeterminate: Dt(be)
    } : null;
    return /* @__PURE__ */ M("li", { role: "none", className: it.itemWrapper, children: [
      /* @__PURE__ */ M(
        "div",
        {
          role: "treeitem",
          "data-key": be,
          tabIndex: qt ? 0 : -1,
          "aria-expanded": Ze ? tt : void 0,
          "aria-selected": ft,
          "aria-level": V,
          "aria-setsize": jt,
          "aria-posinset": Ft,
          "aria-disabled": nt || void 0,
          "aria-busy": Je || void 0,
          className: [
            it.treeitem,
            ft ? it.selected : null,
            nt ? it.disabled : null,
            qt ? it.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            le(be), nt || ye(me);
          },
          onFocus: () => lt(be),
          children: [
            C ? /* @__PURE__ */ s(
              S2,
              {
                className: it.checkbox,
                checked: qn?.checked ?? !1,
                indeterminate: qn?.indeterminate ?? !1,
                disabled: nt,
                "aria-label": `Select ${Ie}`,
                onClick: (mn) => mn.stopPropagation(),
                onChange: () => $t(me)
              }
            ) : null,
            Ze ? /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: it.caret,
                "aria-label": `${tt ? "Collapse" : "Expand"} ${Ie}`,
                "aria-expanded": tt,
                tabIndex: -1,
                disabled: nt,
                onClick: (mn) => {
                  mn.stopPropagation(), le(be), ze(me);
                },
                children: /* @__PURE__ */ s(
                  "span",
                  {
                    "aria-hidden": "true",
                    className: [
                      it.caretIcon,
                      tt ? it.caretOpen : null
                    ].filter(Boolean).join(" "),
                    children: /* @__PURE__ */ s($e, { name: "chevron-right", size: 10 })
                  }
                )
              }
            ) : /* @__PURE__ */ s(
              "span",
              {
                className: it.caretPlaceholder,
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ s("span", { className: it.label, children: os }),
            Je ? /* @__PURE__ */ s("span", { className: it.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      Ze && tt ? Je ? /* @__PURE__ */ s("div", { className: it.loadingRow, "aria-busy": "true", children: "Loading…" }) : Ee && Ee.length > 0 ? Tt(Ee, V + 1) : we.has(be) && we.get(be).length > 0 ? Tt(
        we.get(be),
        V + 1
      ) : (Ee && Ee.length === 0, null) : null
    ] }, be);
  }) });
  return /* @__PURE__ */ s(
    "div",
    {
      ref: H,
      role: "tree",
      "aria-label": re,
      "aria-multiselectable": de === "multiple" || void 0,
      tabIndex: 0,
      className: [it.root, Z].filter(Boolean).join(" "),
      onKeyDown: Be,
      onFocus: at,
      children: se.length === 0 ? /* @__PURE__ */ s("div", { className: it.empty, children: "No items" }) : Tt(se, 1)
    }
  );
}
const M2 = "_root_1plfv_1", C2 = "_panel_1plfv_8", D2 = "_header_1plfv_19", z2 = "_listbox_1plfv_28", E2 = "_option_1plfv_42", I2 = "_disabled_1plfv_57", A2 = "_active_1plfv_66", T2 = "_selected_1plfv_70", j2 = "_empty_1plfv_86", L2 = "_controls_1plfv_93", P2 = "_reorder_1plfv_102", R2 = "_btn_1plfv_110", je = {
  root: M2,
  panel: C2,
  header: D2,
  listbox: z2,
  option: E2,
  disabled: I2,
  active: A2,
  selected: T2,
  empty: j2,
  controls: L2,
  reorder: P2,
  btn: R2
};
function ct(e, t) {
  const n = e[t];
  return n != null ? String(n) : String(e.id ?? "");
}
function hs(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function Iw({
  source: e,
  Source: t,
  target: n,
  Target: r,
  value: l,
  Value: i,
  targetValue: d,
  TargetValue: o,
  data: a,
  Data: c,
  onSourceChange: u,
  SourceChange: f,
  onTargetChange: k,
  TargetChange: v,
  keyProperty: b,
  KeyProperty: p,
  onMove: y,
  Move: _,
  ariaLabel: h,
  AriaLabel: g,
  className: w
}) {
  const x = b ?? p ?? "id", S = h ?? g ?? "PickList", $ = e ?? t ?? l ?? i ?? a ?? c ?? [], O = n ?? r ?? d ?? o ?? [], [E, D] = W(() => [
    ...$
  ]), [z, N] = W(() => [
    ...O
  ]);
  ge(() => {
    const I = e ?? t ?? l ?? i ?? a ?? c;
    I !== void 0 && D([...I]);
  }, [e, t, l, i, a, c]), ge(() => {
    const I = n ?? r ?? d ?? o;
    I !== void 0 && N([...I]);
  }, [n, r, d, o]);
  const [m, C] = W(
    () => /* @__PURE__ */ new Set()
  ), [T, j] = W(
    () => /* @__PURE__ */ new Set()
  ), [A, L] = W(() => {
    const I = $.findIndex((q) => !q.disabled);
    return I >= 0 ? I : 0;
  }), [Z, se] = W(() => {
    const I = O.findIndex((q) => !q.disabled);
    return I >= 0 ? I : 0;
  }), ne = xe(
    () => E.map((I, q) => I.disabled ? -1 : q).filter((I) => I >= 0),
    [E]
  ), X = xe(
    () => z.map((I, q) => I.disabled ? -1 : q).filter((I) => I >= 0),
    [z]
  );
  ge(() => {
    if (A >= E.length) {
      const I = ne[ne.length - 1];
      L(I ?? 0);
    } else if (E.length > 0 && ne.length > 0 && !ne.includes(A)) {
      const I = ne[0];
      I !== void 0 && L(I);
    }
  }, [A, E.length, ne]), ge(() => {
    if (Z >= z.length) {
      const I = X[X.length - 1];
      se(I ?? 0);
    } else if (z.length > 0 && X.length > 0 && !X.includes(Z)) {
      const I = X[0];
      I !== void 0 && se(I);
    }
  }, [Z, z.length, X]), ge(() => {
    C((I) => {
      const q = /* @__PURE__ */ new Set();
      for (const Q of I)
        E.some(
          (J) => ct(J, x) === Q && !J.disabled
        ) && q.add(Q);
      return q;
    });
  }, [E, x]), ge(() => {
    j((I) => {
      const q = /* @__PURE__ */ new Set();
      for (const Q of I)
        z.some(
          (J) => ct(J, x) === Q && !J.disabled
        ) && q.add(Q);
      return q;
    });
  }, [z, x]);
  const pe = R(
    (I) => {
      (u ?? f)?.(I);
    },
    [u, f]
  ), de = R(
    (I) => {
      (k ?? v)?.(I);
    },
    [k, v]
  ), re = R(
    (I) => {
      (y ?? _)?.(I);
    },
    [y, _]
  ), K = R(
    (I) => {
      const q = E[I];
      if (!q || q.disabled) return;
      const Q = ct(q, x);
      C((ue) => {
        const J = new Set(ue);
        return J.has(Q) ? J.delete(Q) : J.add(Q), J;
      }), L(I);
    },
    [E, x]
  ), ie = R(
    (I) => {
      const q = z[I];
      if (!q || q.disabled) return;
      const Q = ct(q, x);
      j((ue) => {
        const J = new Set(ue);
        return J.has(Q) ? J.delete(Q) : J.add(Q), J;
      }), se(I);
    },
    [z, x]
  ), te = R(() => {
    const I = [], q = [];
    for (const ye of E) {
      const ze = ct(ye, x);
      m.has(ze) && !ye.disabled ? I.push(ye) : q.push(ye);
    }
    if (I.length === 0) return;
    const Q = q, ue = [...z, ...I];
    D(Q), N(ue), C(/* @__PURE__ */ new Set());
    const J = new Set(I.map((ye) => ct(ye, x)));
    j(J), pe(Q), de(ue), re({
      source: Q,
      target: ue,
      moved: I,
      direction: "toTarget"
    });
  }, [
    E,
    z,
    m,
    x,
    pe,
    de,
    re
  ]), oe = R(() => {
    const I = [], q = [];
    for (const ye of z) {
      const ze = ct(ye, x);
      T.has(ze) && !ye.disabled ? I.push(ye) : q.push(ye);
    }
    if (I.length === 0) return;
    const Q = q, ue = [...E, ...I];
    N(Q), D(ue), j(/* @__PURE__ */ new Set());
    const J = new Set(I.map((ye) => ct(ye, x)));
    C(J), pe(ue), de(Q), re({
      source: ue,
      target: Q,
      moved: I,
      direction: "toSource"
    });
  }, [
    E,
    z,
    T,
    x,
    pe,
    de,
    re
  ]), _e = R(() => {
    const I = E.filter((ue) => !ue.disabled);
    if (I.length === 0) return;
    const q = E.filter((ue) => !!ue.disabled), Q = [...z, ...I];
    D(q), N(Q), C(/* @__PURE__ */ new Set()), pe(q), de(Q), re({
      source: q,
      target: Q,
      moved: I,
      direction: "allToTarget"
    });
  }, [
    E,
    z,
    x,
    pe,
    de,
    re
  ]), ve = R(() => {
    const I = z.filter((ue) => !ue.disabled);
    if (I.length === 0) return;
    const q = z.filter((ue) => !!ue.disabled), Q = [...E, ...I];
    N(q), D(Q), j(/* @__PURE__ */ new Set()), pe(Q), de(q), re({
      source: Q,
      target: q,
      moved: I,
      direction: "allToSource"
    });
  }, [E, z, pe, de, re]), Ce = R(() => {
    if (T.size === 0) return;
    const I = [...z], q = T, Q = [];
    for (let J = 1; J < I.length; J++) {
      const ye = I[J], ze = I[J - 1];
      if (!ye || !ze) continue;
      const Pe = ct(ye, x), Ye = ct(ze, x);
      q.has(Pe) && !q.has(Ye) && !ye.disabled && !ze.disabled && (I[J - 1] = ye, I[J] = ze, Q.push(ye));
    }
    if (Q.length === 0) return;
    N(I), de(I), re({ source: E, target: I, moved: Q, direction: "up" });
    const ue = Array.from(q)[0];
    if (ue) {
      const J = I.findIndex(
        (ye) => ct(ye, x) === ue
      );
      J >= 0 && se(J);
    }
  }, [
    z,
    T,
    x,
    E,
    de,
    re
  ]), Le = R(() => {
    if (T.size === 0) return;
    const I = [...z], q = T, Q = [];
    for (let J = I.length - 2; J >= 0; J--) {
      const ye = I[J], ze = I[J + 1];
      if (!ye || !ze) continue;
      const Pe = ct(ye, x), Ye = ct(ze, x);
      q.has(Pe) && !q.has(Ye) && !ye.disabled && !ze.disabled && (I[J] = ze, I[J + 1] = ye, Q.push(ye));
    }
    if (Q.length === 0) return;
    N(I), de(I), re({ source: E, target: I, moved: Q, direction: "down" });
    const ue = Array.from(q)[0];
    if (ue) {
      const J = I.findIndex(
        (ye) => ct(ye, x) === ue
      );
      J >= 0 && se(J);
    }
  }, [
    z,
    T,
    x,
    E,
    de,
    re
  ]), we = m.size > 0, Te = T.size > 0, Me = Y(""), st = Y(
    null
  ), rt = Y(""), He = Y(
    null
  ), At = R(
    (I) => {
      if (E.length === 0) return;
      const q = ne;
      if (q.length === 0) return;
      const Q = q.includes(A) ? A : q[0] ?? 0;
      let ue = -1;
      if (I.key === "ArrowDown") {
        I.preventDefault();
        const J = q.indexOf(Q);
        ue = q[(J + 1) % q.length] ?? q[0] ?? 0;
      } else if (I.key === "ArrowUp") {
        I.preventDefault();
        const J = q.indexOf(Q);
        ue = q[(J - 1 + q.length) % q.length] ?? q[0] ?? 0;
      } else if (I.key === "Home")
        I.preventDefault(), ue = q[0] ?? 0;
      else if (I.key === "End")
        I.preventDefault(), ue = q[q.length - 1] ?? 0;
      else if (I.key === "Enter" || I.key === " ") {
        I.preventDefault(), K(Q);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(I.key)) {
        I.preventDefault();
        const J = (Me.current + I.key).toLowerCase();
        Me.current = J, st.current && clearTimeout(st.current), st.current = setTimeout(() => {
          Me.current = "";
        }, 500);
        const ye = [...q, ...q], ze = q.indexOf(Q) + 1, Pe = ye.slice(ze).find(
          (Ye) => hs(E[Ye]).toLowerCase().startsWith(J)
        );
        Pe != null && L(Pe);
        return;
      }
      ue >= 0 && L(ue);
    },
    [E, ne, A, K]
  ), ot = R(
    (I) => {
      if (z.length === 0) return;
      const q = X;
      if (q.length === 0) return;
      const Q = q.includes(Z) ? Z : q[0] ?? 0;
      let ue = -1;
      if (I.key === "ArrowDown") {
        I.preventDefault();
        const J = q.indexOf(Q);
        ue = q[(J + 1) % q.length] ?? q[0] ?? 0;
      } else if (I.key === "ArrowUp") {
        I.preventDefault();
        const J = q.indexOf(Q);
        ue = q[(J - 1 + q.length) % q.length] ?? q[0] ?? 0;
      } else if (I.key === "Home")
        I.preventDefault(), ue = q[0] ?? 0;
      else if (I.key === "End")
        I.preventDefault(), ue = q[q.length - 1] ?? 0;
      else if (I.key === "Enter" || I.key === " ") {
        I.preventDefault(), ie(Q);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(I.key)) {
        I.preventDefault();
        const J = (rt.current + I.key).toLowerCase();
        rt.current = J, He.current && clearTimeout(He.current), He.current = setTimeout(() => {
          rt.current = "";
        }, 500);
        const ye = [...q, ...q], ze = q.indexOf(Q) + 1, Pe = ye.slice(ze).find(
          (Ye) => hs(z[Ye]).toLowerCase().startsWith(J)
        );
        Pe != null && se(Pe);
        return;
      }
      ue >= 0 && se(ue);
    },
    [z, X, Z, ie]
  ), wt = Y(null), U = Y(null);
  return /* @__PURE__ */ M(
    "div",
    {
      className: [je.root, w].filter(Boolean).join(" "),
      "aria-label": S,
      children: [
        /* @__PURE__ */ M("div", { className: je.panel, children: [
          /* @__PURE__ */ s("div", { className: je.header, children: "Source" }),
          /* @__PURE__ */ s(
            "div",
            {
              ref: wt,
              role: "listbox",
              "aria-label": "Source",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: je.listbox,
              onKeyDown: At,
              children: E.length === 0 ? /* @__PURE__ */ s("div", { className: je.empty, children: "No items" }) : E.map((I, q) => {
                const Q = ct(I, x), ue = m.has(Q), J = q === A, ye = !!I.disabled;
                return /* @__PURE__ */ s(
                  "div",
                  {
                    role: "option",
                    "aria-selected": ue,
                    "aria-disabled": ye || void 0,
                    tabIndex: -1,
                    "data-active": J || void 0,
                    className: [
                      je.option,
                      ue ? je.selected : null,
                      J ? je.active : null,
                      ye ? je.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => K(q),
                    children: hs(I)
                  },
                  Q
                );
              })
            }
          )
        ] }),
        /* @__PURE__ */ M("div", { className: je.controls, children: [
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: je.btn,
              "aria-label": "Move selected to target",
              "aria-disabled": !we || void 0,
              disabled: !we,
              onClick: te,
              children: "›"
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: je.btn,
              "aria-label": "Move all to target",
              "aria-disabled": E.filter((I) => !I.disabled).length === 0 || void 0,
              disabled: E.filter((I) => !I.disabled).length === 0,
              onClick: _e,
              children: "»"
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: je.btn,
              "aria-label": "Move all",
              "aria-disabled": E.filter((I) => !I.disabled).length === 0 || void 0,
              disabled: E.filter((I) => !I.disabled).length === 0,
              onClick: _e,
              children: "»"
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: je.btn,
              "aria-label": "Move selected to source",
              "aria-disabled": !Te || void 0,
              disabled: !Te,
              onClick: oe,
              children: "‹"
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: je.btn,
              "aria-label": "Move all to source",
              "aria-disabled": z.filter((I) => !I.disabled).length === 0 || void 0,
              disabled: z.filter((I) => !I.disabled).length === 0,
              onClick: ve,
              children: "«"
            }
          )
        ] }),
        /* @__PURE__ */ M("div", { className: je.panel, children: [
          /* @__PURE__ */ s("div", { className: je.header, children: "Target" }),
          /* @__PURE__ */ s(
            "div",
            {
              ref: U,
              role: "listbox",
              "aria-label": "Target",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: je.listbox,
              onKeyDown: ot,
              children: z.length === 0 ? /* @__PURE__ */ s("div", { className: je.empty, children: "No items" }) : z.map((I, q) => {
                const Q = ct(I, x), ue = T.has(Q), J = q === Z, ye = !!I.disabled;
                return /* @__PURE__ */ s(
                  "div",
                  {
                    role: "option",
                    "aria-selected": ue,
                    "aria-disabled": ye || void 0,
                    tabIndex: -1,
                    "data-active": J || void 0,
                    className: [
                      je.option,
                      ue ? je.selected : null,
                      J ? je.active : null,
                      ye ? je.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => ie(q),
                    children: hs(I)
                  },
                  Q
                );
              })
            }
          ),
          /* @__PURE__ */ M("div", { className: je.reorder, children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: je.btn,
                "aria-label": "Move up",
                "aria-disabled": !Te || void 0,
                disabled: !Te,
                onClick: Ce,
                children: /* @__PURE__ */ s($e, { name: "chevron-up", size: "sm" })
              }
            ),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: je.btn,
                "aria-label": "Move down",
                "aria-disabled": !Te || void 0,
                disabled: !Te,
                onClick: Le,
                children: /* @__PURE__ */ s($e, { name: "chevron-down", size: "sm" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const B2 = "_root_16u8q_1", q2 = "_header_16u8q_8", F2 = "_title_16u8q_15", H2 = "_navBtn_16u8q_20", K2 = "_resources_16u8q_39", W2 = "_resource_16u8q_39", U2 = "_grid_16u8q_50", V2 = "_timeCol_16u8q_55", X2 = "_timeCell_16u8q_61", G2 = "_dayCol_16u8q_66", Y2 = "_dayHeader_16u8q_73", Z2 = "_slot_16u8q_81", J2 = "_event_16u8q_91", vt = {
  root: B2,
  header: q2,
  title: F2,
  navBtn: H2,
  resources: K2,
  resource: W2,
  grid: U2,
  timeCol: V2,
  timeCell: X2,
  dayCol: G2,
  dayHeader: Y2,
  slot: Z2,
  event: J2
};
function yr(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function Aw({
  data: e,
  view: t = "week",
  date: n,
  onDateChange: r,
  resources: l,
  onEventClick: i,
  onSlotClick: d,
  ariaLabel: o = "Scheduler",
  className: a
}) {
  const [c, u] = W(
    n ?? /* @__PURE__ */ new Date()
  ), f = n ?? c, k = (p) => {
    n || u(p), r?.(p);
  }, v = t === "day" ? [f] : t === "week" ? Array.from({ length: 7 }, (p, y) => {
    const _ = new Date(f);
    return _.setDate(f.getDate() - f.getDay() + y), _;
  }) : Array.from({ length: 30 }, (p, y) => {
    const _ = new Date(f);
    return _.setDate(1 + y), _;
  }), b = Array.from({ length: 12 }, (p, y) => 8 + y);
  return /* @__PURE__ */ M(
    "div",
    {
      className: [vt.root, a].filter(Boolean).join(" "),
      role: "group",
      "aria-label": o,
      children: [
        /* @__PURE__ */ M("div", { className: vt.header, children: [
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: vt.navBtn,
              "aria-label": "Previous",
              onClick: () => {
                const p = new Date(f);
                p.setDate(p.getDate() - 7), k(p);
              },
              children: "‹"
            }
          ),
          /* @__PURE__ */ s("span", { className: vt.title, children: f.toLocaleDateString() }),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: vt.navBtn,
              "aria-label": "Next",
              onClick: () => {
                const p = new Date(f);
                p.setDate(p.getDate() + 7), k(p);
              },
              children: "›"
            }
          )
        ] }),
        l && /* @__PURE__ */ s("div", { className: vt.resources, children: l.map((p) => /* @__PURE__ */ s(
          "div",
          {
            className: vt.resource,
            role: "presentation",
            "aria-label": p.name,
            children: p.name
          },
          p.id
        )) }),
        /* @__PURE__ */ M("div", { className: vt.grid, role: "presentation", children: [
          /* @__PURE__ */ s("div", { className: vt.timeCol, role: "presentation", children: b.map((p) => /* @__PURE__ */ M("div", { className: vt.timeCell, children: [
            p,
            ":00"
          ] }, p)) }),
          v.map((p) => /* @__PURE__ */ M(
            "div",
            {
              className: vt.dayCol,
              role: "presentation",
              title: p.toLocaleDateString(),
              onClick: () => d?.({ date: p }),
              tabIndex: 0,
              "aria-label": p.toLocaleDateString(),
              children: [
                /* @__PURE__ */ s("div", { className: vt.dayHeader, children: p.toLocaleDateString(void 0, {
                  weekday: "short",
                  month: "short",
                  day: "numeric"
                }) }),
                b.map((y) => /* @__PURE__ */ s(
                  "div",
                  {
                    className: vt.slot,
                    tabIndex: -1,
                    onClick: () => {
                      const _ = new Date(p);
                      _.setHours(y), d?.({ date: _ });
                    }
                  },
                  y
                )),
                e.filter((y) => y.start.toDateString() === p.toDateString()).map((y) => /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    className: vt.event,
                    "aria-label": `${y.title} ${yr(y.start)} - ${yr(y.end)}`,
                    "aria-pressed": !1,
                    onClick: () => i?.({ event: y }),
                    children: y.title
                  },
                  y.id
                ))
              ]
            },
            p.toISOString()
          ))
        ] })
      ]
    }
  );
}
const Q2 = "_root_caexi_1", ev = "_header_caexi_8", tv = "_headerCell_caexi_15", nv = "_timeline_caexi_21", sv = "_row_caexi_26", rv = "_taskName_caexi_32", ov = "_timelineCell_caexi_37", lv = "_bar_caexi_43", av = "_progress_caexi_56", iv = "_dep_caexi_61", Gt = {
  root: Q2,
  header: ev,
  headerCell: tv,
  timeline: nv,
  row: sv,
  taskName: rv,
  timelineCell: ov,
  bar: lv,
  progress: av,
  dep: iv
};
function Tw({
  tasks: e,
  view: t = "week",
  onTaskClick: n,
  ariaLabel: r = "Gantt",
  className: l
}) {
  const [i, d] = W(null);
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Gt.root, l].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": r,
      "aria-rowcount": e.length,
      children: [
        /* @__PURE__ */ M("div", { className: Gt.header, role: "row", children: [
          /* @__PURE__ */ s("div", { className: Gt.headerCell, role: "columnheader", children: "Task" }),
          /* @__PURE__ */ M("div", { className: Gt.timeline, role: "columnheader", children: [
            "Timeline (",
            t,
            ")"
          ] })
        ] }),
        e.map((o) => /* @__PURE__ */ M(
          "div",
          {
            className: Gt.row,
            role: "row",
            "aria-selected": i === o.id,
            children: [
              /* @__PURE__ */ s("div", { className: Gt.taskName, role: "gridcell", children: o.name }),
              /* @__PURE__ */ M("div", { className: Gt.timelineCell, role: "gridcell", children: [
                /* @__PURE__ */ s(
                  "div",
                  {
                    className: Gt.bar,
                    role: "button",
                    "aria-label": `${o.name} ${o.start.toLocaleDateString()} - ${o.end.toLocaleDateString()}${o.progress !== void 0 ? `, ${o.progress}% complete` : ""}`,
                    "aria-pressed": i === o.id,
                    tabIndex: 0,
                    onClick: () => {
                      d(o.id), n?.({ task: o });
                    },
                    onKeyDown: (a) => {
                      (a.key === "Enter" || a.key === " ") && (a.preventDefault(), d(o.id), n?.({ task: o }));
                    },
                    children: /* @__PURE__ */ s(
                      "div",
                      {
                        className: Gt.progress,
                        style: { width: `${o.progress ?? 0}%` }
                      }
                    )
                  }
                ),
                o.dependencies?.map((a) => /* @__PURE__ */ s("svg", { className: Gt.dep, "aria-hidden": "true", children: /* @__PURE__ */ s(
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
          o.id
        ))
      ]
    }
  );
}
const cv = "_root_reqz6_1", dv = "_fields_reqz6_6", uv = "_chip_reqz6_13", fv = "_table_reqz6_35", _v = "_totalRow_reqz6_55", hv = "_total_reqz6_55", Ln = {
  root: cv,
  fields: dv,
  chip: uv,
  table: fv,
  totalRow: _v,
  total: hv
}, ps = {
  Sum: (e) => e.reduce((t, n) => t + n, 0),
  Average: (e) => e.length ? e.reduce((t, n) => t + n, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function es(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function jw({
  data: e,
  rowFields: t = [],
  columnFields: n = [],
  aggregateFields: r = [],
  onFieldsChange: l,
  ariaLabel: i = "Pivot table",
  className: d
}) {
  const o = t, a = n, c = r, u = (y, _, h) => {
    const g = y === "row" ? o.filter((S) => S.property !== _) : o, w = y === "col" ? a.filter((S) => S.property !== _) : a, x = y === "agg" ? c.filter((S) => !(S.property === _ && S.aggregate === h)) : c;
    l?.({
      rowFields: g,
      columnFields: w,
      aggregateFields: x
    });
  }, f = (y, _) => _.map((h) => String(y[h.property])).join(""), k = [
    ...new Set(o.length ? e.map((y) => f(y, o)) : [""])
  ].sort(), v = [
    ...new Set(a.length ? e.map((y) => f(y, a)) : [""])
  ].sort(), b = (y, _, h) => {
    const g = e.filter(
      (x) => f(x, o) === y && f(x, a) === _
    ), w = g.map((x) => Number(x[h.property])).filter((x) => !Number.isNaN(x));
    return !w.length && h.aggregate !== "Count" ? 0 : ps[h.aggregate](
      h.aggregate === "Count" ? g.map(() => 1) : w
    );
  }, p = (y, _, h, g) => /* @__PURE__ */ M(
    "button",
    {
      type: "button",
      className: Ln.chip,
      "aria-label": `Remove ${y} field ${h}`,
      onClick: () => u(y, _, g),
      children: [
        h,
        g ? ` (${g})` : ""
      ]
    },
    `${y}-${h}-${g ?? ""}`
  );
  return /* @__PURE__ */ M("div", { className: [Ln.root, d].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ M("div", { className: Ln.fields, children: [
      o.map((y) => p("row", y.property, y.title ?? y.property)),
      a.map((y) => p("col", y.property, y.title ?? y.property)),
      c.map(
        (y) => p("agg", y.property, y.title ?? y.property, y.aggregate)
      )
    ] }),
    /* @__PURE__ */ M("table", { className: Ln.table, role: "grid", "aria-label": i, children: [
      /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ M("tr", { children: [
        /* @__PURE__ */ s("th", { scope: "col", children: o.map((y) => y.title ?? y.property).join(" / ") || "Total" }),
        v.map((y) => /* @__PURE__ */ s("th", { scope: "col", children: y || "—" }, y)),
        /* @__PURE__ */ s("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ M("tbody", { children: [
        k.map((y) => /* @__PURE__ */ M("tr", { children: [
          /* @__PURE__ */ s("th", { scope: "row", children: y || "—" }),
          v.map((_) => /* @__PURE__ */ s(
            "td",
            {
              title: es(
                b(
                  y,
                  _,
                  c[0] ?? { property: "", aggregate: "Count" }
                )
              ),
              children: c.length ? es(b(y, _, c[0])) : ""
            },
            _
          )),
          /* @__PURE__ */ s("td", { className: Ln.total, children: c.length ? es(
            ps[c[0].aggregate](
              v.flatMap(
                (_) => e.filter(
                  (h) => f(h, o) === y && f(h, a) === _
                ).map((h) => Number(h[c[0].property]))
              ).filter((_) => !Number.isNaN(_))
            )
          ) : "" })
        ] }, y)),
        /* @__PURE__ */ M("tr", { className: Ln.totalRow, children: [
          /* @__PURE__ */ s("th", { scope: "row", children: "Total" }),
          v.map((y) => /* @__PURE__ */ s("td", { children: c.length ? es(
            ps[c[0].aggregate](
              e.filter((_) => f(_, a) === y).map((_) => Number(_[c[0].property])).filter((_) => !Number.isNaN(_))
            )
          ) : "" }, y)),
          /* @__PURE__ */ s("td", { children: c.length ? es(
            ps[c[0].aggregate](
              e.map((y) => Number(y[c[0].property])).filter((y) => !Number.isNaN(y))
            )
          ) : "" })
        ] })
      ] })
    ] })
  ] });
}
const pv = "_root_48ysw_1", mv = "_reverse_48ysw_10", gv = "_item_48ysw_14", xv = "_marker_48ysw_35", yv = "_body_48ysw_46", bv = "_label_48ysw_50", vv = "_content_48ysw_56", $n = {
  root: pv,
  reverse: mv,
  item: gv,
  marker: xv,
  body: yv,
  label: bv,
  content: vv
};
function Lw({
  items: e,
  reverse: t = !1,
  ariaLabel: n = "Timeline",
  className: r
}) {
  const l = t ? [...e].reverse() : e;
  return /* @__PURE__ */ s(
    "ol",
    {
      className: [$n.root, t ? $n.reverse : "", r].filter(Boolean).join(" "),
      role: "list",
      "aria-label": n,
      children: l.map((i, d) => /* @__PURE__ */ M("li", { className: $n.item, children: [
        /* @__PURE__ */ s("span", { className: $n.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ M("div", { className: $n.body, children: [
          /* @__PURE__ */ s("div", { className: $n.label, children: i.label }),
          i.content !== void 0 && /* @__PURE__ */ s("div", { className: $n.content, children: i.content })
        ] })
      ] }, d))
    }
  );
}
const kv = "_root_4ls7q_1", wv = "_header_4ls7q_13", $v = "_headCell_4ls7q_22", Nv = "_row_4ls7q_32", Ov = "_cell_4ls7q_37", ts = {
  root: kv,
  header: wv,
  headCell: $v,
  row: Nv,
  cell: Ov
};
function Pw({
  count: e,
  rowHeight: t = 40,
  height: n = 320,
  loadData: r,
  columns: l = [],
  ariaLabel: i = "Virtual grid",
  className: d
}) {
  const [o, a] = W(
    /* @__PURE__ */ new Map()
  ), [c, u] = W(0), f = Y(/* @__PURE__ */ new Set()), k = Math.ceil(n / t), v = Math.max(0, Math.floor(c / t) - 3), b = Math.min(e, v + k + 6), p = R(
    (_, h) => {
      let g = !1;
      for (let w = _; w < h; w++)
        !o.has(w) && !f.current.has(w) && (g = !0);
      if (g) {
        for (let w = _; w < h; w++) f.current.add(w);
        r({ skip: _, top: h }).then((w) => {
          a((x) => {
            const S = new Map(x);
            return w.forEach(($, O) => S.set(_ + O, $)), S;
          });
          for (let x = _; x < h; x++) f.current.delete(x);
        });
      }
    },
    [o, r]
  );
  ge(() => {
    p(v, b);
  }, [v, b]);
  const y = [];
  for (let _ = v; _ < b; _++) {
    const h = o.get(_) ?? {};
    y.push(
      /* @__PURE__ */ s(
        "div",
        {
          className: ts.row,
          role: "row",
          style: { height: t },
          children: l.map((g) => /* @__PURE__ */ s(
            "div",
            {
              role: "gridcell",
              className: ts.cell,
              style: g.width ? { width: g.width } : void 0,
              children: String(h[g.property] ?? "")
            },
            g.property
          ))
        },
        _
      )
    );
  }
  return /* @__PURE__ */ M(
    "div",
    {
      className: [ts.root, d].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": i,
      "aria-rowcount": e,
      tabIndex: 0,
      style: { height: n },
      onScroll: (_) => u(_.target.scrollTop),
      onKeyDown: (_) => {
        const h = _.currentTarget;
        _.key === "ArrowDown" ? (_.preventDefault(), h.scrollTop += t) : _.key === "ArrowUp" ? (_.preventDefault(), h.scrollTop -= t) : _.key === "PageDown" ? (_.preventDefault(), h.scrollTop += n) : _.key === "PageUp" && (_.preventDefault(), h.scrollTop -= n);
      },
      children: [
        /* @__PURE__ */ s("div", { style: { height: v * t }, "aria-hidden": "true" }),
        /* @__PURE__ */ s("div", { className: ts.header, role: "row", children: l.map((_) => /* @__PURE__ */ s(
          "div",
          {
            role: "columnheader",
            className: ts.headCell,
            style: {
              height: t,
              ..._.width ? { width: _.width } : {}
            },
            children: _.title ?? _.property
          },
          _.property
        )) }),
        y,
        /* @__PURE__ */ s(
          "div",
          {
            style: { height: Math.max(0, (e - b) * t) },
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
var Bt;
((e) => {
  class t {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(o, a, c, u) {
      if (this.version = o, this.errorCorrectionLevel = a, o < t.MIN_VERSION || o > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (u < -1 || u > 7) throw new RangeError("Mask value out of range");
      this.size = o * 4 + 17;
      let f = [];
      for (let v = 0; v < this.size; v++) f.push(!1);
      for (let v = 0; v < this.size; v++)
        this.modules.push(f.slice()), this.isFunction.push(f.slice());
      this.drawFunctionPatterns();
      const k = this.addEccAndInterleave(c);
      if (this.drawCodewords(k), u == -1) {
        let v = 1e9;
        for (let b = 0; b < 8; b++) {
          this.applyMask(b), this.drawFormatBits(b);
          const p = this.getPenaltyScore();
          p < v && (u = b, v = p), this.applyMask(b);
        }
      }
      l(0 <= u && u <= 7), this.mask = u, this.applyMask(u), this.drawFormatBits(u), this.isFunction = [];
    }
    version;
    errorCorrectionLevel;
    /*-- Static factory functions (high level) --*/
    // Returns a QR Code representing the given Unicode text string at the given error correction level.
    // As a conservative upper bound, this function is guaranteed to succeed for strings that have 738 or fewer
    // Unicode code points (not UTF-16 code units) if the low error correction level is used. The smallest possible
    // QR Code version is automatically chosen for the output. The ECC level of the result may be higher than the
    // ecl argument if it can be done without increasing the version.
    static encodeText(o, a) {
      const c = e.QrSegment.makeSegments(o);
      return t.encodeSegments(c, a);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(o, a) {
      const c = e.QrSegment.makeBytes(o);
      return t.encodeSegments([c], a);
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
    static encodeSegments(o, a, c = 1, u = 40, f = -1, k = !0) {
      if (!(t.MIN_VERSION <= c && c <= u && u <= t.MAX_VERSION) || f < -1 || f > 7)
        throw new RangeError("Invalid value");
      let v, b;
      for (v = c; ; v++) {
        const h = t.getNumDataCodewords(v, a) * 8, g = i.getTotalBits(o, v);
        if (g <= h) {
          b = g;
          break;
        }
        if (v >= u)
          throw new RangeError("Data too long");
      }
      for (const h of [
        t.Ecc.MEDIUM,
        t.Ecc.QUARTILE,
        t.Ecc.HIGH
      ])
        k && b <= t.getNumDataCodewords(v, h) * 8 && (a = h);
      let p = [];
      for (const h of o) {
        n(h.mode.modeBits, 4, p), n(h.numChars, h.mode.numCharCountBits(v), p);
        for (const g of h.getData()) p.push(g);
      }
      l(p.length == b);
      const y = t.getNumDataCodewords(v, a) * 8;
      l(p.length <= y), n(0, Math.min(4, y - p.length), p), n(0, (8 - p.length % 8) % 8, p), l(p.length % 8 == 0);
      for (let h = 236; p.length < y; h ^= 253)
        n(h, 8, p);
      let _ = [];
      for (; _.length * 8 < p.length; ) _.push(0);
      return p.forEach(
        (h, g) => _[g >>> 3] |= h << 7 - (g & 7)
      ), new t(v, a, _, f);
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
    getModule(o, a) {
      return 0 <= o && o < this.size && 0 <= a && a < this.size && this.modules[a][o];
    }
    /*-- Private helper methods for constructor: Drawing function modules --*/
    // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
      for (let c = 0; c < this.size; c++)
        this.setFunctionModule(6, c, c % 2 == 0), this.setFunctionModule(c, 6, c % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const o = this.getAlignmentPatternPositions(), a = o.length;
      for (let c = 0; c < a; c++)
        for (let u = 0; u < a; u++)
          c == 0 && u == 0 || c == 0 && u == a - 1 || c == a - 1 && u == 0 || this.drawAlignmentPattern(o[c], o[u]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(o) {
      const a = this.errorCorrectionLevel.formatBits << 3 | o;
      let c = a;
      for (let f = 0; f < 10; f++) c = c << 1 ^ (c >>> 9) * 1335;
      const u = (a << 10 | c) ^ 21522;
      l(u >>> 15 == 0);
      for (let f = 0; f <= 5; f++)
        this.setFunctionModule(8, f, r(u, f));
      this.setFunctionModule(8, 7, r(u, 6)), this.setFunctionModule(8, 8, r(u, 7)), this.setFunctionModule(7, 8, r(u, 8));
      for (let f = 9; f < 15; f++)
        this.setFunctionModule(14 - f, 8, r(u, f));
      for (let f = 0; f < 8; f++)
        this.setFunctionModule(this.size - 1 - f, 8, r(u, f));
      for (let f = 8; f < 15; f++)
        this.setFunctionModule(8, this.size - 15 + f, r(u, f));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    // Draws two copies of the version bits (with its own error correction code),
    // based on this object's version field, iff 7 <= version <= 40.
    drawVersion() {
      if (this.version < 7) return;
      let o = this.version;
      for (let c = 0; c < 12; c++) o = o << 1 ^ (o >>> 11) * 7973;
      const a = this.version << 12 | o;
      l(a >>> 18 == 0);
      for (let c = 0; c < 18; c++) {
        const u = r(a, c), f = this.size - 11 + c % 3, k = Math.floor(c / 3);
        this.setFunctionModule(f, k, u), this.setFunctionModule(k, f, u);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(o, a) {
      for (let c = -4; c <= 4; c++)
        for (let u = -4; u <= 4; u++) {
          const f = Math.max(Math.abs(u), Math.abs(c)), k = o + u, v = a + c;
          0 <= k && k < this.size && 0 <= v && v < this.size && this.setFunctionModule(k, v, f != 2 && f != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(o, a) {
      for (let c = -2; c <= 2; c++)
        for (let u = -2; u <= 2; u++)
          this.setFunctionModule(
            o + u,
            a + c,
            Math.max(Math.abs(u), Math.abs(c)) != 1
          );
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(o, a, c) {
      this.modules[a][o] = c, this.isFunction[a][o] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(o) {
      const a = this.version, c = this.errorCorrectionLevel;
      if (o.length != t.getNumDataCodewords(a, c))
        throw new RangeError("Invalid argument");
      const u = t.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][a], f = t.ECC_CODEWORDS_PER_BLOCK[c.ordinal][a], k = Math.floor(
        t.getNumRawDataModules(a) / 8
      ), v = u - k % u, b = Math.floor(k / u);
      let p = [];
      const y = t.reedSolomonComputeDivisor(f);
      for (let h = 0, g = 0; h < u; h++) {
        let w = o.slice(
          g,
          g + b - f + (h < v ? 0 : 1)
        );
        g += w.length;
        const x = t.reedSolomonComputeRemainder(w, y);
        h < v && w.push(0), p.push(w.concat(x));
      }
      let _ = [];
      for (let h = 0; h < p[0].length; h++)
        p.forEach((g, w) => {
          (h != b - f || w >= v) && _.push(g[h]);
        });
      return l(_.length == k), _;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(o) {
      if (o.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let a = 0;
      for (let c = this.size - 1; c >= 1; c -= 2) {
        c == 6 && (c = 5);
        for (let u = 0; u < this.size; u++)
          for (let f = 0; f < 2; f++) {
            const k = c - f, b = (c + 1 & 2) == 0 ? this.size - 1 - u : u;
            !this.isFunction[b][k] && a < o.length * 8 && (this.modules[b][k] = r(o[a >>> 3], 7 - (a & 7)), a++);
          }
      }
      l(a == o.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(o) {
      if (o < 0 || o > 7) throw new RangeError("Mask value out of range");
      for (let a = 0; a < this.size; a++)
        for (let c = 0; c < this.size; c++) {
          let u;
          switch (o) {
            case 0:
              u = (c + a) % 2 == 0;
              break;
            case 1:
              u = a % 2 == 0;
              break;
            case 2:
              u = c % 3 == 0;
              break;
            case 3:
              u = (c + a) % 3 == 0;
              break;
            case 4:
              u = (Math.floor(c / 3) + Math.floor(a / 2)) % 2 == 0;
              break;
            case 5:
              u = c * a % 2 + c * a % 3 == 0;
              break;
            case 6:
              u = (c * a % 2 + c * a % 3) % 2 == 0;
              break;
            case 7:
              u = ((c + a) % 2 + c * a % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[a][c] && u && (this.modules[a][c] = !this.modules[a][c]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let o = 0;
      for (let f = 0; f < this.size; f++) {
        let k = !1, v = 0, b = [0, 0, 0, 0, 0, 0, 0];
        for (let p = 0; p < this.size; p++)
          this.modules[f][p] == k ? (v++, v == 5 ? o += t.PENALTY_N1 : v > 5 && o++) : (this.finderPenaltyAddHistory(v, b), k || (o += this.finderPenaltyCountPatterns(b) * t.PENALTY_N3), k = this.modules[f][p], v = 1);
        o += this.finderPenaltyTerminateAndCount(k, v, b) * t.PENALTY_N3;
      }
      for (let f = 0; f < this.size; f++) {
        let k = !1, v = 0, b = [0, 0, 0, 0, 0, 0, 0];
        for (let p = 0; p < this.size; p++)
          this.modules[p][f] == k ? (v++, v == 5 ? o += t.PENALTY_N1 : v > 5 && o++) : (this.finderPenaltyAddHistory(v, b), k || (o += this.finderPenaltyCountPatterns(b) * t.PENALTY_N3), k = this.modules[p][f], v = 1);
        o += this.finderPenaltyTerminateAndCount(k, v, b) * t.PENALTY_N3;
      }
      for (let f = 0; f < this.size - 1; f++)
        for (let k = 0; k < this.size - 1; k++) {
          const v = this.modules[f][k];
          v == this.modules[f][k + 1] && v == this.modules[f + 1][k] && v == this.modules[f + 1][k + 1] && (o += t.PENALTY_N2);
        }
      let a = 0;
      for (const f of this.modules)
        a = f.reduce((k, v) => k + (v ? 1 : 0), a);
      const c = this.size * this.size, u = Math.ceil(Math.abs(a * 20 - c * 10) / c) - 1;
      return l(0 <= u && u <= 9), o += u * t.PENALTY_N4, l(0 <= o && o <= 2568888), o;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1) return [];
      {
        const o = Math.floor(this.version / 7) + 2, a = Math.floor(
          (this.version * 8 + o * 3 + 5) / (o * 4 - 4)
        ) * 2;
        let c = [6];
        for (let u = this.size - 7; c.length < o; u -= a)
          c.splice(1, 0, u);
        return c;
      }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(o) {
      if (o < t.MIN_VERSION || o > t.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let a = (16 * o + 128) * o + 64;
      if (o >= 2) {
        const c = Math.floor(o / 7) + 2;
        a -= (25 * c - 10) * c - 55, o >= 7 && (a -= 36);
      }
      return l(208 <= a && a <= 29648), a;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(o, a) {
      return Math.floor(t.getNumRawDataModules(o) / 8) - t.ECC_CODEWORDS_PER_BLOCK[a.ordinal][o] * t.NUM_ERROR_CORRECTION_BLOCKS[a.ordinal][o];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(o) {
      if (o < 1 || o > 255)
        throw new RangeError("Degree out of range");
      let a = [];
      for (let u = 0; u < o - 1; u++) a.push(0);
      a.push(1);
      let c = 1;
      for (let u = 0; u < o; u++) {
        for (let f = 0; f < a.length; f++)
          a[f] = t.reedSolomonMultiply(a[f], c), f + 1 < a.length && (a[f] ^= a[f + 1]);
        c = t.reedSolomonMultiply(c, 2);
      }
      return a;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(o, a) {
      let c = a.map((u) => 0);
      for (const u of o) {
        const f = u ^ c.shift();
        c.push(0), a.forEach(
          (k, v) => c[v] ^= t.reedSolomonMultiply(k, f)
        );
      }
      return c;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(o, a) {
      if (o >>> 8 || a >>> 8)
        throw new RangeError("Byte out of range");
      let c = 0;
      for (let u = 7; u >= 0; u--)
        c = c << 1 ^ (c >>> 7) * 285, c ^= (a >>> u & 1) * o;
      return l(c >>> 8 == 0), c;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(o) {
      const a = o[1];
      l(a <= this.size * 3);
      const c = a > 0 && o[2] == a && o[3] == a * 3 && o[4] == a && o[5] == a;
      return (c && o[0] >= a * 4 && o[6] >= a ? 1 : 0) + (c && o[6] >= a * 4 && o[0] >= a ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(o, a, c) {
      return o && (this.finderPenaltyAddHistory(a, c), a = 0), a += this.size, this.finderPenaltyAddHistory(a, c), this.finderPenaltyCountPatterns(c);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(o, a) {
      a[0] == 0 && (o += this.size), a.pop(), a.unshift(o);
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
  function n(d, o, a) {
    if (o < 0 || o > 31 || d >>> o)
      throw new RangeError("Value out of range");
    for (let c = o - 1; c >= 0; c--)
      a.push(d >>> c & 1);
  }
  function r(d, o) {
    return (d >>> o & 1) != 0;
  }
  function l(d) {
    if (!d) throw new Error("Assertion error");
  }
  class i {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(o, a, c) {
      if (this.mode = o, this.numChars = a, this.bitData = c, a < 0) throw new RangeError("Invalid argument");
      this.bitData = c.slice();
    }
    mode;
    numChars;
    bitData;
    /*-- Static factory functions (mid level) --*/
    // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(o) {
      let a = [];
      for (const c of o) n(c, 8, a);
      return new i(i.Mode.BYTE, o.length, a);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(o) {
      if (!i.isNumeric(o))
        throw new RangeError("String contains non-numeric characters");
      let a = [];
      for (let c = 0; c < o.length; ) {
        const u = Math.min(o.length - c, 3);
        n(parseInt(o.substring(c, c + u), 10), u * 3 + 1, a), c += u;
      }
      return new i(i.Mode.NUMERIC, o.length, a);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(o) {
      if (!i.isAlphanumeric(o))
        throw new RangeError(
          "String contains unencodable characters in alphanumeric mode"
        );
      let a = [], c;
      for (c = 0; c + 2 <= o.length; c += 2) {
        let u = i.ALPHANUMERIC_CHARSET.indexOf(o.charAt(c)) * 45;
        u += i.ALPHANUMERIC_CHARSET.indexOf(o.charAt(c + 1)), n(u, 11, a);
      }
      return c < o.length && n(
        i.ALPHANUMERIC_CHARSET.indexOf(o.charAt(c)),
        6,
        a
      ), new i(i.Mode.ALPHANUMERIC, o.length, a);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(o) {
      return o == "" ? [] : i.isNumeric(o) ? [i.makeNumeric(o)] : i.isAlphanumeric(o) ? [i.makeAlphanumeric(o)] : [i.makeBytes(i.toUtf8ByteArray(o))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(o) {
      let a = [];
      if (o < 0)
        throw new RangeError("ECI assignment value out of range");
      if (o < 128) n(o, 8, a);
      else if (o < 16384)
        n(2, 2, a), n(o, 14, a);
      else if (o < 1e6)
        n(6, 3, a), n(o, 21, a);
      else throw new RangeError("ECI assignment value out of range");
      return new i(i.Mode.ECI, 0, a);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(o) {
      return i.NUMERIC_REGEX.test(o);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(o) {
      return i.ALPHANUMERIC_REGEX.test(o);
    }
    /*-- Methods --*/
    // Returns a new copy of the data bits of this segment.
    getData() {
      return this.bitData.slice();
    }
    // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
    // the given version. The result is infinity if a segment has too many characters to fit its length field.
    static getTotalBits(o, a) {
      let c = 0;
      for (const u of o) {
        const f = u.mode.numCharCountBits(a);
        if (u.numChars >= 1 << f) return 1 / 0;
        c += 4 + f + u.bitData.length;
      }
      return c;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(o) {
      o = encodeURI(o);
      let a = [];
      for (let c = 0; c < o.length; c++)
        o.charAt(c) != "%" ? a.push(o.charCodeAt(c)) : (a.push(parseInt(o.substring(c + 1, c + 3), 16)), c += 2);
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
  e.QrSegment = i;
})(Bt || (Bt = {}));
((e) => {
  ((t) => {
    class n {
      // The QR Code can tolerate about 30% erroneous codewords
      /*-- Constructor and fields --*/
      constructor(l, i) {
        this.ordinal = l, this.formatBits = i;
      }
      ordinal;
      formatBits;
      /*-- Constants --*/
      static LOW = new n(0, 1);
      // The QR Code can tolerate about  7% erroneous codewords
      static MEDIUM = new n(1, 0);
      // The QR Code can tolerate about 15% erroneous codewords
      static QUARTILE = new n(2, 3);
      // The QR Code can tolerate about 25% erroneous codewords
      static HIGH = new n(3, 2);
    }
    t.Ecc = n;
  })(e.QrCode || (e.QrCode = {}));
})(Bt || (Bt = {}));
((e) => {
  ((t) => {
    class n {
      /*-- Constructor and fields --*/
      constructor(l, i) {
        this.modeBits = l, this.numBitsCharCount = i;
      }
      modeBits;
      numBitsCharCount;
      /*-- Constants --*/
      static NUMERIC = new n(1, [10, 12, 14]);
      static ALPHANUMERIC = new n(2, [9, 11, 13]);
      static BYTE = new n(4, [8, 16, 16]);
      static KANJI = new n(8, [8, 10, 12]);
      static ECI = new n(7, [0, 0, 0]);
      /*-- Method --*/
      // (Package-private) Returns the bit width of the character count field for a segment in
      // this mode in a QR Code at the given version number. The result is in the range [0, 16].
      numCharCountBits(l) {
        return this.numBitsCharCount[Math.floor((l + 7) / 17)];
      }
    }
    t.Mode = n;
  })(e.QrSegment || (e.QrSegment = {}));
})(Bt || (Bt = {}));
const Sv = "_root_1leml_1", Mv = {
  root: Sv
}, Cv = {
  low: Bt.QrCode.Ecc.LOW,
  medium: Bt.QrCode.Ecc.MEDIUM,
  quartile: Bt.QrCode.Ecc.QUARTILE,
  high: Bt.QrCode.Ecc.HIGH
};
function Rw({
  value: e,
  size: t = 128,
  render: n = "svg",
  errorCorrection: r = "medium",
  margin: l = 4,
  ariaLabel: i,
  className: d,
  onError: o
}) {
  const a = i ?? `QR code for ${e}`, c = Y(null), u = zr("(prefers-color-scheme: dark)"), [f, k] = W(null);
  ge(() => {
    const w = document.documentElement;
    k(w.dataset.theme ?? null);
    const x = new MutationObserver(() => {
      k(w.dataset.theme ?? null);
    });
    return x.observe(w, {
      attributes: !0,
      attributeFilter: ["data-theme"]
    }), () => x.disconnect();
  }, []);
  const v = xe(() => {
    try {
      return Bt.QrCode.encodeText(e, Cv[r]);
    } catch {
      return null;
    }
  }, [e, r]), b = Y(null);
  ge(() => {
    if (v !== null) {
      b.current = null;
      return;
    }
    const w = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error(w), (b.current?.value !== e || b.current?.onError !== o) && (b.current = { value: e, onError: o }, o?.(w));
  }, [v, e, o]);
  const p = Math.max(0, Math.floor(l)), y = [Mv.root, d].filter(Boolean).join(" ");
  if (ge(() => {
    if (n !== "canvas" || v === null) return;
    const w = c.current, x = w?.getContext("2d");
    if (!w || !x) return;
    const S = getComputedStyle(w), $ = S.getPropertyValue("--dx-text-color").trim() || "#000", O = S.getPropertyValue("--dx-surface-color").trim() || "#fff";
    Dv(x, v, t, p, $, O);
  }, [n, v, t, p, u, f]), v === null)
    return /* @__PURE__ */ s("div", { className: y, role: "img", "aria-label": a, "data-qr-error": "true" });
  const _ = v.size + p * 2, h = t / _;
  if (n === "canvas")
    return /* @__PURE__ */ s(
      "canvas",
      {
        ref: c,
        className: y,
        width: t,
        height: t,
        role: "img",
        "aria-label": a,
        "data-value": e
      }
    );
  const g = [];
  for (let w = 0; w < v.size; w++)
    for (let x = 0; x < v.size; x++)
      v.getModule(x, w) && g.push(
        /* @__PURE__ */ s(
          "rect",
          {
            x: (x + p) * h,
            y: (w + p) * h,
            width: h + 0.5,
            height: h + 0.5
          },
          `${x}-${w}`
        )
      );
  return /* @__PURE__ */ M(
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
        /* @__PURE__ */ s("rect", { width: t, height: t, fill: "var(--dx-surface-color)" }),
        /* @__PURE__ */ s("g", { fill: "var(--dx-text-color)", children: g })
      ]
    }
  );
}
function Dv(e, t, n, r, l, i) {
  const d = n / (t.size + r * 2);
  e.fillStyle = i, e.fillRect(0, 0, n, n), e.fillStyle = l;
  for (let o = 0; o < t.size; o++)
    for (let a = 0; a < t.size; a++)
      t.getModule(a, o) && e.fillRect((a + r) * d, (o + r) * d, d + 0.5, d + 0.5);
}
const zv = "_root_1v9la_1", Ev = "_value_1v9la_9", br = {
  root: zv,
  value: Ev
}, vr = [
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
], kr = 104, Iv = 106;
function Av(e) {
  const t = [kr];
  for (let r = 0; r < e.length; r++) {
    const l = e.charCodeAt(r);
    t.push(l >= 32 && l <= 126 ? l - 32 : 0);
  }
  let n = kr;
  for (let r = 1; r < t.length; r++) n += r * t[r];
  return t.push(n % 103, Iv), t;
}
function Bw({
  value: e,
  format: t = "Code128",
  height: n = 60,
  showValue: r = !1,
  ariaLabel: l,
  className: i
}) {
  const d = l ?? `Barcode ${e}`, o = xe(() => {
    const a = [];
    let c = 0;
    for (const u of Av(e)) {
      const f = vr[u] ?? vr[0];
      for (let k = 0; k < f.length; k++) {
        const v = Number(f[k]);
        k % 2 === 0 && a.push({ x: c, w: v }), c += v;
      }
    }
    return { modules: a, total: c };
  }, [e]);
  return /* @__PURE__ */ M("span", { className: [br.root, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ M(
      "svg",
      {
        width: "100%",
        height: n,
        viewBox: `0 0 ${o.total} ${n}`,
        preserveAspectRatio: "none",
        role: "img",
        "aria-label": d,
        "data-value": e,
        children: [
          /* @__PURE__ */ s(
            "rect",
            {
              width: o.total,
              height: n,
              fill: "var(--dx-surface-color)"
            }
          ),
          o.modules.map((a, c) => /* @__PURE__ */ s(
            "rect",
            {
              x: a.x,
              y: 0,
              width: a.w,
              height: n,
              fill: "var(--dx-text-color)"
            },
            c
          ))
        ]
      }
    ),
    r && /* @__PURE__ */ s("span", { className: br.value, children: e })
  ] });
}
const Tv = "_root_1o41a_1", jv = "_svg_1o41a_10", Lv = "_gridline_1o41a_15", Pv = "_tickLabel_1o41a_21", Rv = "_axisTitle_1o41a_27", Bv = "_dataLabel_1o41a_34", qv = "_gaugeValue_1o41a_40", Fv = "_legend_1o41a_47", Hv = "_legendItem_1o41a_55", Kv = "_swatch_1o41a_63", Wv = "_tooltip_1o41a_70", Uv = "_visuallyHidden_1o41a_84", Xe = {
  root: Tv,
  svg: jv,
  gridline: Lv,
  tickLabel: Pv,
  axisTitle: Rv,
  dataLabel: Bv,
  gaugeValue: qv,
  legend: Fv,
  legendItem: Hv,
  swatch: Kv,
  tooltip: Wv,
  visuallyHidden: Uv
}, wr = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
], Pr = /* @__PURE__ */ new Set([
  "line",
  "area",
  "bar",
  "column",
  "scatter",
  "bubble"
]), Vv = /* @__PURE__ */ new Set([...Pr, "heatmap"]);
function Xv(e, t, n) {
  const r = t - e || 1, l = n ?? Math.pow(10, Math.floor(Math.log10(r / 4))), i = Math.floor(e / l) * l, d = Math.ceil(t / l) * l, o = [];
  for (let a = i; a <= d + 1e-9; a += l)
    o.push(Number(a.toFixed(6)));
  return { min: i, max: d, step: l, ticks: o };
}
function Gv(e) {
  return e.data.map((t) => ({
    cat: String(t[e.categoryProperty] ?? ""),
    val: Number(t[e.valueProperty]),
    size: e.sizeProperty ? Number(t[e.sizeProperty]) : void 0,
    item: t
  }));
}
function hn(e, t, n) {
  return /* @__PURE__ */ M(
    "g",
    {
      "data-chart-type": t.type,
      role: "list",
      "aria-label": t.title ?? `Series ${e + 1}`,
      children: [
        /* @__PURE__ */ s("title", { children: t.title ?? `Series ${e + 1}` }),
        n
      ]
    },
    e
  );
}
const mt = (e) => e * Math.PI / 180;
function Yv(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: o } = e, a = i.l + d / 2, c = i.t + o / 2, u = Math.min(d, o) / 3, f = t.type === "donut" ? t.innerRadius ?? u * 0.5 : 0, k = r.reduce((b, p) => b + (Number(p.val) || 0), 0);
  let v = -90;
  return hn(
    n,
    t,
    r.map((b, p) => {
      const y = k ? b.val / k * 360 : 0, _ = v, h = v + y;
      v = h;
      const g = y > 180 ? 1 : 0, w = a + u * Math.cos(mt(_)), x = c + u * Math.sin(mt(_)), S = a + u * Math.cos(mt(h)), $ = c + u * Math.sin(mt(h)), O = a + f * Math.cos(mt(h)), E = c + f * Math.sin(mt(h)), D = a + f * Math.cos(mt(_)), z = c + f * Math.sin(mt(_)), N = f ? `M ${w} ${x} A ${u} ${u} 0 ${g} 1 ${S} ${$} L ${O} ${E} A ${f} ${f} 0 ${g} 0 ${D} ${z} Z` : `M ${a} ${c} L ${w} ${x} A ${u} ${u} 0 ${g} 1 ${S} ${$} Z`, m = (_ + h) / 2, C = a + (u + 12) * Math.cos(mt(m)), T = c + (u + 12) * Math.sin(mt(m));
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ s(
          "path",
          {
            d: N,
            fill: l,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => e.tooltipVisible && e.showTip(C, T, `${t.title ?? b.cat}: ${b.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, b.cat, b.val, b.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ s(
          "text",
          {
            x: C,
            y: T,
            textAnchor: "middle",
            className: Xe.dataLabel,
            children: b.val
          }
        )
      ] }, p);
    })
  );
}
function Zv(e, t, n, r, l) {
  const { pad: i, plotW: d, scale: o, xFor: a, yFor: c, categories: u } = e, f = new Map(u.map((k, v) => [k, v]));
  return hn(
    n,
    t,
    r.map((k, v) => {
      const b = f.get(k.cat) ?? 0, p = Number(r[v].cat), y = Number.isNaN(p) ? a(b) : i.l + (p - o.min) / (o.max - o.min || 1) * d, _ = c(k.val), h = t.type === "bubble" && k.size !== void 0 ? Math.max(4, Math.min(12, k.size / 10)) : 4;
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ s(
          "circle",
          {
            cx: y,
            cy: _,
            r: h,
            fill: l,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ s(
          "circle",
          {
            cx: y,
            cy: _,
            r: 12,
            fill: "transparent",
            onMouseEnter: () => e.tooltipVisible && e.showTip(y, _, `${t.title ?? k.cat}: ${k.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, k.cat, k.val, k.item),
            style: { cursor: "pointer" }
          }
        )
      ] }, v);
    })
  );
}
function Jv(e, t, n, r, l) {
  const { scale: i, xFor: d, yFor: o, categories: a, series: c } = e, u = new Map(a.map((b, p) => [b, p])), f = (b) => {
    if (!t.stack) return i.min;
    let p = 0;
    for (let y = 0; y < n; y++) {
      const _ = c[y];
      if (_?.stack !== t.stack) continue;
      const h = _.data.find(
        (g) => String(g[_.categoryProperty] ?? "") === b
      );
      h && (p += Number(h[_.valueProperty]) || 0);
    }
    return p;
  }, k = r.map((b) => {
    const p = u.get(b.cat) ?? 0, y = f(b.cat);
    return `${p === 0 ? "M" : "L"} ${d(p)} ${o(y + b.val)}`;
  }).join(" "), v = r.map((b) => {
    const p = u.get(b.cat) ?? 0, y = f(b.cat);
    return `${p === 0 ? "M" : "L"} ${d(p)} ${o(y)}`;
  }).join(" ");
  return hn(
    n,
    t,
    /* @__PURE__ */ M(ke, { children: [
      t.type === "area" && /* @__PURE__ */ s(
        "path",
        {
          d: `${k} L ${d(r.length - 1)} ${o(f(r[r.length - 1].cat))} L ${d(0)} ${o(f(r[0].cat))} Z`,
          fill: l,
          fillOpacity: 0.25,
          stroke: "none"
        }
      ),
      /* @__PURE__ */ s("path", { d: k, fill: "none", stroke: l, strokeWidth: 2 }),
      t.stack && /* @__PURE__ */ s("path", { d: v, fill: "none", stroke: "transparent" }),
      r.map((b, p) => {
        const y = u.get(b.cat) ?? 0, _ = f(b.cat), h = d(y), g = o(_ + b.val);
        return /* @__PURE__ */ M("g", { role: "listitem", children: [
          /* @__PURE__ */ s(
            "circle",
            {
              cx: h,
              cy: g,
              r: 4,
              fill: l,
              stroke: "var(--dx-surface-color)",
              strokeWidth: 1.5
            }
          ),
          /* @__PURE__ */ s(
            "rect",
            {
              x: h - 12,
              y: g - 12,
              width: 24,
              height: 24,
              fill: "transparent",
              onMouseEnter: () => e.tooltipVisible && e.showTip(h, g, `${t.title ?? b.cat}: ${b.val}`),
              onMouseLeave: () => e.hideTip(),
              onClick: () => e.handleClick(t, b.cat, b.val, b.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ s(
            "text",
            {
              x: h,
              y: g - 8,
              textAnchor: "middle",
              className: Xe.dataLabel,
              children: b.val
            }
          )
        ] }, p);
      })
    ] })
  );
}
function Qv(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: o, scale: a, xFor: c, yFor: u, categories: f, series: k } = e, v = new Map(f.map((p, y) => [p, y])), b = t.type === "bar";
  return hn(
    n,
    t,
    r.map((p, y) => {
      const _ = v.get(p.cat) ?? 0;
      let h = 0;
      if (t.stack)
        for (let m = 0; m < n; m++) {
          const C = k[m];
          if (C?.stack !== t.stack) continue;
          const T = C.data.find(
            (j) => String(j[C.categoryProperty] ?? "") === p.cat
          );
          T && (h += Number(T[C.valueProperty]) || 0);
        }
      const g = h + p.val, w = k.filter(
        (m) => !m.stack || m.stack === t.stack
      ).length, x = d / Math.max(1, f.length), S = b ? 18 : Math.max(12, x / (t.stack ? 1 : k.length) - 4), $ = b ? i.l + h / (a.max - a.min || 1) * d : c(_) - S / 2 + (t.stack ? 0 : n % w * S), O = b ? i.t + _ * o / Math.max(1, f.length) + 4 : u(g), E = b ? p.val / (a.max - a.min || 1) * d : S - 4, D = b ? 16 : u(h) - u(g), z = b ? i.l + h / (a.max - a.min || 1) * d : $, N = b ? i.t + _ * o / Math.max(1, f.length) + 4 : O;
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ s(
          "rect",
          {
            x: z,
            y: N,
            width: b ? E : S - 4,
            height: D,
            fill: l,
            rx: 2,
            onMouseEnter: () => e.tooltipVisible && e.showTip(
              z + (b ? E : S) / 2,
              N,
              `${t.title ?? p.cat}: ${p.val}`
            ),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, p.cat, p.val, p.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ s(
          "text",
          {
            x: z + (b ? E : S) / 2,
            y: N - 4,
            textAnchor: "middle",
            className: Xe.dataLabel,
            children: p.val
          }
        )
      ] }, y);
    })
  );
}
function ek(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: o, scale: a, tooltipVisible: c, showTip: u, hideTip: f } = e, k = i.l + d / 2, v = i.t + o * 0.78, b = Math.min(d, o) * 0.36, p = 135, y = 270, _ = r.reduce((S, $) => S + (Number($.val) || 0), 0), h = a.max - a.min || 1, g = Math.min(1, Math.max(0, (_ - a.min) / h)), w = (S, $) => {
    const [O, E] = [
      k + b * Math.cos(mt(S)),
      v + b * Math.sin(mt(S))
    ], [D, z] = [
      k + b * Math.cos(mt($)),
      v + b * Math.sin(mt($))
    ], N = $ - S > 180 ? 1 : 0;
    return `M ${O} ${E} A ${b} ${b} 0 ${N} 1 ${D} ${z}`;
  }, x = Number(_.toFixed(2));
  return hn(
    n,
    t,
    /* @__PURE__ */ M(ke, { children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: w(p, p + y),
          fill: "none",
          stroke: "var(--dx-border-color)",
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      g > 0 && /* @__PURE__ */ s(
        "path",
        {
          d: w(p, p + y * g),
          fill: "none",
          stroke: l,
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s("text", { x: k, y: v - 4, textAnchor: "middle", className: Xe.gaugeValue, children: x }),
      /* @__PURE__ */ s(
        "path",
        {
          d: w(p, p + y),
          fill: "none",
          stroke: "transparent",
          strokeWidth: 22,
          onMouseEnter: () => c && u(k, v - b, `${t.title ?? "Value"}: ${x}`),
          onMouseLeave: () => f(),
          onClick: () => e.handleClick(t, r[0]?.cat ?? "", _, r[0]?.item ?? {}),
          style: { cursor: "pointer" }
        }
      ),
      t.labels?.visible && /* @__PURE__ */ s(
        "text",
        {
          x: k,
          y: v + b + 18,
          textAnchor: "middle",
          className: Xe.dataLabel,
          children: t.title ?? ""
        }
      )
    ] })
  );
}
function Rr(e) {
  const { pad: t, plotW: n, plotH: r, categories: l } = e, i = t.l + n / 2, d = t.t + r / 2, o = Math.min(n, r) / 2 - 24, a = Math.max(3, l.length), c = (f) => mt(-90 + 360 * f / a);
  return { cx: i, cy: d, radius: o, angleFor: c, vertexFor: (f, k) => {
    const v = c(f);
    return [
      i + o * k * Math.cos(v),
      d + o * k * Math.sin(v)
    ];
  } };
}
function tk(e) {
  const { categories: t } = e, { cx: n, cy: r, vertexFor: l } = Rr(e);
  return /* @__PURE__ */ M("g", { "data-chart-type": "radar-grid", "aria-hidden": "true", children: [
    [0.25, 0.5, 0.75, 1].map((d) => /* @__PURE__ */ s(
      "polygon",
      {
        points: t.map((o, a) => l(a, d).join(",")).join(" "),
        fill: "none",
        stroke: "var(--dx-border-color)",
        strokeWidth: 1
      },
      d
    )),
    t.map((d, o) => {
      const [a, c] = l(o, 1);
      return /* @__PURE__ */ s(
        "line",
        {
          x1: n,
          y1: r,
          x2: a,
          y2: c,
          stroke: "var(--dx-border-color)",
          strokeWidth: 1
        },
        d
      );
    })
  ] });
}
function nk(e, t, n, r, l) {
  const { categories: i, tooltipVisible: d, showTip: o, hideTip: a } = e, { cx: c, cy: u, radius: f, angleFor: k, vertexFor: v } = Rr(e), b = e.scale.max || 1, p = (_) => r.find((h) => h.cat === _)?.val ?? 0, y = i.map((_, h) => {
    const g = Math.min(1, Math.max(0, p(_) / b)), [w, x] = v(h, g);
    return `${w},${x}`;
  }).join(" ");
  return hn(
    n,
    t,
    /* @__PURE__ */ M(ke, { children: [
      /* @__PURE__ */ s(
        "polygon",
        {
          points: y,
          fill: l,
          fillOpacity: 0.25,
          stroke: l,
          strokeWidth: 2
        }
      ),
      i.map((_, h) => {
        const g = Math.min(1, Math.max(0, p(_) / b)), [w, x] = v(h, g), [S, $] = v(h, 1);
        return /* @__PURE__ */ M("g", { role: "listitem", children: [
          /* @__PURE__ */ s(
            "circle",
            {
              cx: w,
              cy: x,
              r: 3.5,
              fill: l,
              stroke: "var(--dx-surface-color)",
              strokeWidth: 1
            }
          ),
          /* @__PURE__ */ s(
            "circle",
            {
              cx: w,
              cy: x,
              r: 12,
              fill: "transparent",
              onMouseEnter: () => d && o(S, $, `${t.title ?? _}: ${p(_)}`),
              onMouseLeave: () => a(),
              onClick: () => {
                const O = r.find((E) => E.cat === _);
                O && e.handleClick(t, O.cat, O.val, O.item);
              },
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ s(
            "text",
            {
              x: c + (f + 14) * Math.cos(k(h)),
              y: u + (f + 14) * Math.sin(k(h)) + 4,
              textAnchor: "middle",
              className: Xe.tickLabel,
              children: _
            }
          )
        ] }, _);
      })
    ] })
  );
}
function sk(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: o, tooltipVisible: a, showTip: c, hideTip: u } = e, f = r, k = Math.max(1, ...f.map((p) => Number(p.val) || 0)), v = o / Math.max(1, f.length), b = i.l + d / 2;
  return hn(
    n,
    t,
    f.map((p, y) => {
      const h = Math.max(0, Number(p.val) || 0) / k * d, g = f[y + 1], w = g ? Math.max(0, Number(g.val) || 0) / k * d : h * 0.7, x = i.t + y * v + 2, S = Math.max(4, v - 6), $ = 1 - y * (0.45 / Math.max(1, f.length));
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ s(
          "path",
          {
            d: `M ${b - h / 2} ${x} L ${b + h / 2} ${x} L ${b + w / 2} ${x + S} L ${b - w / 2} ${x + S} Z`,
            fill: l,
            fillOpacity: $,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => a && c(b, x, `${t.title ?? p.cat}: ${p.val}`),
            onMouseLeave: () => u(),
            onClick: () => e.handleClick(t, p.cat, p.val, p.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ M(
          "text",
          {
            x: b,
            y: x + S / 2 + 4,
            textAnchor: "middle",
            className: Xe.dataLabel,
            children: [
              p.cat,
              " · ",
              p.val
            ]
          }
        )
      ] }, y);
    })
  );
}
function rk(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: o, categories: a, tooltipVisible: c, showTip: u, hideTip: f } = e, k = [];
  t.data.forEach((g) => {
    const w = t.rowProperty ? String(g[t.rowProperty] ?? "") : "All";
    k.includes(w) || k.push(w);
  });
  const v = r.map((g) => g.val).filter((g) => Number.isFinite(g)), b = v.length ? Math.min(...v) : 0, p = v.length ? Math.max(...v) : 1, y = d / Math.max(1, a.length), _ = o / Math.max(1, k.length), h = (g) => p === b ? 0.6 : 0.15 + 0.85 * ((g - b) / (p - b));
  return hn(
    n,
    t,
    /* @__PURE__ */ M(ke, { children: [
      k.map((g, w) => /* @__PURE__ */ s(
        "text",
        {
          x: i.l - 8,
          y: i.t + w * _ + _ / 2 + 4,
          textAnchor: "end",
          className: Xe.tickLabel,
          children: g
        },
        g
      )),
      r.map((g, w) => {
        const x = t.data[w], S = a.indexOf(g.cat), $ = k.indexOf(
          t.rowProperty && x ? String(x[t.rowProperty] ?? "") : "All"
        );
        if (S < 0 || $ < 0) return null;
        const O = i.l + S * y, E = i.t + $ * _;
        return /* @__PURE__ */ M("g", { role: "listitem", children: [
          /* @__PURE__ */ s(
            "rect",
            {
              x: O + 1,
              y: E + 1,
              width: Math.max(1, y - 2),
              height: Math.max(1, _ - 2),
              fill: l,
              fillOpacity: h(g.val),
              onMouseEnter: () => c && u(O + y / 2, E, `${t.title ?? g.cat}: ${g.val}`),
              onMouseLeave: () => f(),
              onClick: () => e.handleClick(t, g.cat, g.val, g.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ s(
            "text",
            {
              x: O + y / 2,
              y: E + _ / 2 + 4,
              textAnchor: "middle",
              className: Xe.dataLabel,
              children: g.val
            }
          )
        ] }, w);
      })
    ] })
  );
}
function ok(e, t, n) {
  const r = Gv(t), l = e.colorFor(n, t);
  switch (t.type) {
    case "pie":
    case "donut":
      return Yv(e, t, n, r, l);
    case "scatter":
    case "bubble":
      return Zv(e, t, n, r, l);
    case "line":
    case "area":
      return Jv(e, t, n, r, l);
    case "gauge":
      return ek(e, t, n, r, l);
    case "radar":
      return nk(e, t, n, r, l);
    case "funnel":
      return sk(e, t, n, r, l);
    case "heatmap":
      return rk(e, t, n, r, l);
    default:
      return Qv(e, t, n, r, l);
  }
}
function qw({
  series: e,
  width: t = 600,
  height: n = 400,
  valueAxis: r,
  categoryAxis: l,
  showLegend: i = !0,
  tooltipVisible: d = !0,
  onSeriesClick: o,
  ariaLabel: a = "Chart",
  className: c
}) {
  const [u, f] = W(
    null
  ), k = xe(() => {
    const D = /* @__PURE__ */ new Set();
    for (const z of e)
      for (const N of z.data) D.add(String(N[z.categoryProperty] ?? ""));
    return [...D];
  }, [e]), v = xe(() => {
    const D = e.flatMap((N) => N.data.map((m) => Number(m[N.valueProperty]))).filter((N) => !Number.isNaN(N)), z = /* @__PURE__ */ new Map();
    for (const N of e) {
      if (!N.stack) continue;
      let m = z.get(N.stack);
      m || z.set(N.stack, m = /* @__PURE__ */ new Map());
      for (const C of N.data) {
        const T = String(C[N.categoryProperty] ?? ""), j = Number(C[N.valueProperty]);
        Number.isNaN(j) || m.set(T, (m.get(T) ?? 0) + j);
      }
    }
    for (const N of z.values()) D.push(...N.values());
    return D;
  }, [e]), b = r?.min ?? (v.length ? Math.min(0, ...v) : 0), p = r?.max ?? (v.length ? Math.max(...v) : 10), y = xe(
    () => Xv(b, p, r?.step),
    [b, p, r?.step]
  ), _ = { t: 16, r: 16, b: 40, l: 56 }, h = t - _.l - _.r, g = n - _.t - _.b, w = (D) => _.l + D / Math.max(1, k.length - 1) * h, x = (D) => _.t + (1 - (D - y.min) / (y.max - y.min || 1)) * g, S = (D, z) => z.color ?? wr[D % wr.length], $ = e.some((D) => Pr.has(D.type)), O = e.some((D) => Vv.has(D.type)), E = {
    categories: k,
    scale: y,
    pad: _,
    plotW: h,
    plotH: g,
    xFor: w,
    yFor: x,
    colorFor: S,
    tooltipVisible: d,
    showTip: (D, z, N) => f({ x: D, y: z, text: N }),
    hideTip: () => f(null),
    handleClick: (D, z, N, m) => o?.({
      seriesTitle: D.title ?? "",
      category: z,
      value: N,
      item: m
    }),
    series: e
  };
  return /* @__PURE__ */ M(
    "figure",
    {
      className: [Xe.root, c].filter(Boolean).join(" "),
      role: "img",
      "aria-label": a,
      "aria-describedby": `${a.replace(/\s+/g, "-")}-table`,
      children: [
        /* @__PURE__ */ M(
          "svg",
          {
            width: t,
            height: n,
            className: Xe.svg,
            role: "presentation",
            children: [
              $ && r?.gridlines !== !1 && y.ticks.map((D) => /* @__PURE__ */ s(
                "line",
                {
                  x1: _.l,
                  x2: _.l + h,
                  y1: x(D),
                  y2: x(D),
                  className: Xe.gridline
                },
                D
              )),
              O && l?.gridlines && k.map((D, z) => /* @__PURE__ */ s(
                "line",
                {
                  x1: w(z),
                  x2: w(z),
                  y1: _.t,
                  y2: _.t + g,
                  className: Xe.gridline
                },
                z
              )),
              $ && y.ticks.map((D) => /* @__PURE__ */ s(
                "text",
                {
                  x: _.l - 8,
                  y: x(D) + 4,
                  textAnchor: "end",
                  className: Xe.tickLabel,
                  children: D
                },
                D
              )),
              O && k.map((D, z) => /* @__PURE__ */ s(
                "text",
                {
                  x: w(z),
                  y: _.t + g + 16,
                  textAnchor: "middle",
                  className: Xe.tickLabel,
                  children: D
                },
                D
              )),
              $ && r?.title && /* @__PURE__ */ s(
                "text",
                {
                  x: 12,
                  y: _.t + g / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90,12,${_.t + g / 2})`,
                  className: Xe.axisTitle,
                  children: r.title
                }
              ),
              O && l?.title && /* @__PURE__ */ s(
                "text",
                {
                  x: _.l + h / 2,
                  y: n - 4,
                  textAnchor: "middle",
                  className: Xe.axisTitle,
                  children: l.title
                }
              ),
              e.some((D) => D.type === "radar") && tk(E),
              e.map((D, z) => ok(E, D, z))
            ]
          }
        ),
        u && /* @__PURE__ */ s(
          "div",
          {
            className: Xe.tooltip,
            style: { left: u.x, top: u.y - 28 },
            children: u.text
          }
        ),
        i && /* @__PURE__ */ s("div", { className: Xe.legend, children: e.map((D, z) => /* @__PURE__ */ M("span", { className: Xe.legendItem, children: [
          /* @__PURE__ */ s(
            "span",
            {
              className: Xe.swatch,
              style: { backgroundColor: S(z, D) },
              "aria-hidden": "true"
            }
          ),
          D.title ?? `Series ${z + 1}`
        ] }, z)) }),
        /* @__PURE__ */ M(
          "table",
          {
            className: Xe.visuallyHidden,
            id: `${a.replace(/\s+/g, "-")}-table`,
            children: [
              /* @__PURE__ */ s("caption", { children: a }),
              /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ M("tr", { children: [
                /* @__PURE__ */ s("th", { children: "Series" }),
                /* @__PURE__ */ s("th", { children: "Category" }),
                /* @__PURE__ */ s("th", { children: "Value" })
              ] }) }),
              /* @__PURE__ */ s("tbody", { children: e.map(
                (D) => D.data.map((z, N) => /* @__PURE__ */ M("tr", { children: [
                  /* @__PURE__ */ s("td", { children: D.title ?? "" }),
                  /* @__PURE__ */ s("td", { children: D.rowProperty ? `${String(z[D.rowProperty] ?? "")} / ${String(z[D.categoryProperty] ?? "")}` : String(z[D.categoryProperty] ?? "") }),
                  /* @__PURE__ */ s("td", { children: String(z[D.valueProperty] ?? "") })
                ] }, `${D.title}-${N}`))
              ) })
            ]
          }
        )
      ]
    }
  );
}
export {
  wd as ALERT_ICON,
  Jk as Accordion,
  Rk as Alert,
  Kk as AutoGrid,
  tw as Autocomplete,
  Yk as Avatar,
  ck as Badge,
  Bw as Barcode,
  Uk as Body,
  Ow as Breadcrumb,
  ws as Button,
  ik as Card,
  zw as Carousel,
  qw as Chart,
  Ik as Checkbox,
  sw as Checkboxlist,
  uw as Colorpicker,
  Fk as Column,
  vw as ContextMenuProvider,
  Un as DEFAULT_OPERATOR_BY_TYPE,
  fx as DEFAULT_PALETTE,
  Mk as DataFilter,
  Ck as DataGrid,
  Dk as DataList,
  fw as Datepicker,
  xc as Dialog,
  jk as DialogProvider,
  yw as DropZone,
  ew as Dropdown,
  _k as EmptyState,
  Nr as FILTER_OPERATORS,
  Nw as FabMenu,
  hk as Field,
  mk as Fieldset,
  Rp as Footer,
  gk as Form,
  pk as FormField,
  Tw as Gantt,
  Fp as Header,
  $e as Icon,
  Ek as Input,
  zk as Label,
  Wk as Layout,
  Sw as Link,
  nw as Listbox,
  cw as Mask,
  vy as Menu,
  Tr as MenuItem,
  dw as Numeric,
  za as Pager,
  ww as PanelMenu,
  kw as PanelMenuItem,
  iw as Password,
  Iw as PickList,
  jw as Pivot,
  $w as ProfileMenu,
  Xk as Progress,
  Rw as QRCode,
  rw as Radiobuttonlist,
  _w as Rating,
  qk as Row,
  Aw as Scheduler,
  mw as SecurityCode,
  Pn as Select,
  ow as Selectbar,
  em as Sidebar,
  Vk as SidebarToggle,
  gw as SignaturePad,
  Bk as Skeleton,
  hw as Slider,
  aw as Splitbutton,
  Cw as Splitter,
  Hk as Stack,
  uk as Stat,
  Mw as Steps,
  Zi as Switch,
  fk as Table,
  Zk as Tabs,
  Ic as Text,
  Qk as Textarea,
  Vi as Textbox,
  Gk as ThemeSwitcher,
  Lw as Timeline,
  pw as Timespanpicker,
  Pk as ToastProvider,
  Dw as Toc,
  lw as Togglebutton,
  Ak as Tooltip,
  Ew as Tree,
  xw as Upload,
  Pw as VirtualGrid,
  Ra as aggregateValue,
  Sr as applyFilters,
  Pa as applyGridState,
  Js as collectGroupKeys,
  Nn as columnValue,
  $k as compare,
  Ok as custom,
  Ta as cycleSort,
  er as defaultOperatorForType,
  yk as email,
  dr as formatMasked,
  xs as formatValue,
  gs as getByPath,
  Ea as groupItems,
  dk as iconNames,
  Or as matchesFilters,
  kk as maxLength,
  vk as minLength,
  La as paginate,
  bk as pattern,
  wk as range,
  xk as required,
  Nk as requiredTrue,
  Bs as resolveVariant,
  Pl as runValidators,
  Rn as shadeClass,
  ta as sortItems,
  ja as sortedItems,
  Ba as toCsv,
  Yl as toFilterString,
  ea as toODataFilterString,
  bw as useContextMenu,
  Tk as useDialog,
  Ll as useFormContext,
  Sk as useFormField,
  zr as useMediaQuery,
  Lk as useToast
};
