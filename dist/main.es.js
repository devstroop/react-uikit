import { jsx as s, jsxs as D, Fragment as Ne } from "react/jsx-runtime";
import { forwardRef as Fe, useId as qe, isValidElement as dt, cloneElement as ys, useState as X, useRef as ee, useCallback as B, useMemo as xe, useContext as nn, createContext as $n, useEffect as me, Fragment as bs, useLayoutEffect as fs, Children as Fn, useImperativeHandle as vs } from "react";
function wn(e) {
  return e == null || e === "default" || e === "medium" ? null : `shade-${e}`;
}
const xr = "_button_1anap_1", yr = "_filled_1anap_36", br = "_flat_1anap_55", vr = "_outlined_1anap_58", kr = "_text_1anap_63", wr = "_loading_1anap_504", $r = "_spinner_1anap_507", Or = "_xs_1anap_523", Nr = "_sm_1anap_529", Sr = "_md_1anap_535", Dr = "_lg_1anap_541", Mr = "_xl_1anap_547", Cr = "_iconOnly_1anap_553", zr = "_fullWidth_1anap_583", Bt = {
  button: xr,
  filled: yr,
  flat: br,
  outlined: vr,
  text: kr,
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
  loading: wr,
  spinner: $r,
  "dx-spin": "_dx-spin_1anap_1",
  xs: Or,
  sm: Nr,
  md: Sr,
  lg: Dr,
  xl: Mr,
  iconOnly: Cr,
  fullWidth: zr
};
function Er(e, t) {
  const n = t, r = e ?? "filled";
  return { variant: r === "filled" || r === "flat" || r === "outlined" || r === "text" ? r : "filled", style: n ?? "primary" };
}
const os = Fe(
  function(t, n) {
    const {
      variant: r = "filled",
      severity: i,
      shade: c = "default",
      size: d = "md",
      fullWidth: o = !1,
      iconOnly: l = !1,
      loading: a = !1,
      visible: u = !0,
      className: f,
      disabled: k,
      children: v,
      ...$
    } = t;
    if (u === !1) return null;
    const y = Er(r, i), _ = y.style === "light" || y.style === "dark" ? null : wn(c), p = [
      Bt.button,
      Bt[y.variant],
      Bt[`style-${y.style}`],
      _ ? Bt[_] : null,
      Bt[d],
      o ? Bt.fullWidth : null,
      l ? Bt.iconOnly : null,
      a ? Bt.loading : null,
      // Press feedback on every button (Radzen material parity).
      "dx-ripple",
      f
    ].filter(Boolean).join(" "), x = /* @__PURE__ */ D(Ne, { children: [
      a ? /* @__PURE__ */ s("span", { "aria-hidden": "true", className: Bt.spinner }) : null,
      v
    ] }), w = t.href;
    if (w != null) {
      const { onClick: b, ...N } = $, A = k || a;
      return /* @__PURE__ */ s(
        "a",
        {
          ref: n,
          href: w,
          className: p,
          "aria-disabled": A || void 0,
          "aria-busy": a || void 0,
          onClick: (M) => {
            if (A) {
              M.preventDefault();
              return;
            }
            b?.(M);
          },
          ...N,
          children: x
        }
      );
    }
    const { type: m = "button", ...C } = $;
    return /* @__PURE__ */ s(
      "button",
      {
        ref: n,
        type: m,
        className: p,
        disabled: k || a,
        "aria-busy": a || void 0,
        ...C,
        children: x
      }
    );
  }
), Ir = "_card_16nyh_1", Ar = "_elevated_16nyh_8", jr = "_filled_16nyh_13", Tr = "_outlined_16nyh_18", Lr = "_interactive_16nyh_22", Pr = "_text_16nyh_30", Rr = "_header_16nyh_46", Br = "_body_16nyh_53", qr = "_footer_16nyh_63", On = {
  card: Ir,
  elevated: Ar,
  filled: jr,
  outlined: Tr,
  interactive: Lr,
  text: Pr,
  header: Rr,
  body: Br,
  footer: qr
}, mv = Fe(function({
  variant: t = "elevated",
  header: n,
  footer: r,
  className: i,
  visible: c = !0,
  children: d,
  onKeyDown: o,
  ...l
}, a) {
  if (c === !1) return null;
  const u = t === "interactive";
  return (
    // Interactivity is conditional on variant="interactive" (role + tabIndex
    // travel together); static analysis cannot see that.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ D(
      "div",
      {
        ref: a,
        role: u ? "button" : void 0,
        tabIndex: u ? 0 : void 0,
        onKeyDown: (f) => {
          o?.(f), !(!u || f.key !== "Enter" && f.key !== " ") && (f.preventDefault(), f.currentTarget.click());
        },
        className: [On.card, On[t], i].filter(Boolean).join(" "),
        ...l,
        children: [
          n != null && /* @__PURE__ */ s("div", { className: On.header, children: n }),
          /* @__PURE__ */ s("div", { className: On.body, children: d }),
          r != null && /* @__PURE__ */ s("div", { className: On.footer, children: r })
        ]
      }
    )
  );
});
function ks(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const Fr = "_badge_154mm_1", Hr = "_xs_154mm_21", Kr = "_sm_154mm_26", Ur = "_md_154mm_31", Wr = "_lg_154mm_36", Xr = "_xl_154mm_41", Vr = "_neutral_154mm_47", Gr = "_primary_154mm_52", Yr = "_secondary_154mm_61", Zr = "_light_154mm_66", Jr = "_base_154mm_71", Qr = "_dark_154mm_76", eo = "_info_154mm_81", to = "_success_154mm_86", no = "_warning_154mm_95", so = "_danger_154mm_104", ro = "_filled_154mm_111", oo = "_outlined_154mm_161", lo = "_text_154mm_213", Nn = {
  badge: Fr,
  xs: Hr,
  sm: Kr,
  md: Ur,
  lg: Wr,
  xl: Xr,
  neutral: Vr,
  primary: Gr,
  secondary: Yr,
  light: Zr,
  base: Jr,
  dark: Qr,
  info: eo,
  success: to,
  warning: no,
  danger: so,
  filled: ro,
  outlined: oo,
  text: lo,
  "shade-lighter": "_shade-lighter_154mm_484",
  "shade-light": "_shade-light_154mm_484",
  "shade-dark": "_shade-dark_154mm_492",
  "shade-darker": "_shade-darker_154mm_495"
}, gv = Fe(function({
  severity: t = "primary",
  variant: n = "filled",
  shade: r,
  size: i = "md",
  className: c,
  visible: d = !0,
  children: o,
  ...l
}, a) {
  if (d === !1) return null;
  const u = t, f = ks(n, "filled"), k = wn(r);
  return /* @__PURE__ */ s(
    "span",
    {
      ref: a,
      className: [
        Nn.badge,
        Nn[i],
        Nn[u],
        Nn[f],
        k ? Nn[k] : null,
        c
      ].filter(Boolean).join(" "),
      ...l,
      children: o
    }
  );
}), ao = "_xs_2a6lm_2", io = "_sm_2a6lm_7", co = "_md_2a6lm_1", uo = "_lg_2a6lm_17", fo = "_xl_2a6lm_22", _o = {
  xs: ao,
  sm: io,
  md: co,
  lg: uo,
  xl: fo
}, xv = [
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
], po = {
  check: /* @__PURE__ */ s("path", { d: "M20 6L9 17l-5-5" }),
  close: /* @__PURE__ */ s("path", { d: "M18 6L6 18M6 6l12 12" }),
  "chevron-down": /* @__PURE__ */ s("path", { d: "M6 9l6 6 6-6" }),
  "chevron-left": /* @__PURE__ */ s("path", { d: "M15 18l-6-6 6-6" }),
  "chevron-right": /* @__PURE__ */ s("path", { d: "M9 18l6-6-6-6" }),
  "chevron-up": /* @__PURE__ */ s("path", { d: "M18 15l-6-6-6 6" }),
  search: /* @__PURE__ */ D(Ne, { children: [
    /* @__PURE__ */ s("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ s("path", { d: "M21 21l-4.3-4.3" })
  ] }),
  plus: /* @__PURE__ */ s("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ s("path", { d: "M5 12h14" }),
  alert: /* @__PURE__ */ D(Ne, { children: [
    /* @__PURE__ */ s("path", { d: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" }),
    /* @__PURE__ */ s("path", { d: "M12 9v4M12 17h.01" })
  ] }),
  info: /* @__PURE__ */ D(Ne, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ s("path", { d: "M12 16v-4M12 8h.01" })
  ] }),
  "arrow-right": /* @__PURE__ */ s("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  "arrow-left": /* @__PURE__ */ s("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  "external-link": /* @__PURE__ */ D(Ne, { children: [
    /* @__PURE__ */ s("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
    /* @__PURE__ */ s("path", { d: "M15 3h6v6M10 14L21 3" })
  ] }),
  copy: /* @__PURE__ */ D(Ne, { children: [
    /* @__PURE__ */ s("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ s("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] }),
  trash: /* @__PURE__ */ s(Ne, { children: /* @__PURE__ */ s("path", { d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" }) }),
  edit: /* @__PURE__ */ D(Ne, { children: [
    /* @__PURE__ */ s("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ s("path", { d: "M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  settings: /* @__PURE__ */ D(Ne, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ s("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] }),
  user: /* @__PURE__ */ D(Ne, { children: [
    /* @__PURE__ */ s("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ s("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ D(Ne, { children: [
    /* @__PURE__ */ s("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ s("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ s("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  download: /* @__PURE__ */ s("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  upload: /* @__PURE__ */ s("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  menu: /* @__PURE__ */ s("path", { d: "M3 12h18M3 6h18M3 18h18" }),
  "more-horizontal": /* @__PURE__ */ D(Ne, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ s("circle", { cx: "19", cy: "12", r: "1" }),
    /* @__PURE__ */ s("circle", { cx: "5", cy: "12", r: "1" })
  ] }),
  mail: /* @__PURE__ */ D(Ne, { children: [
    /* @__PURE__ */ s("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ s("path", { d: "M22 6l-10 7L2 6" })
  ] }),
  lock: /* @__PURE__ */ D(Ne, { children: [
    /* @__PURE__ */ s("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ s("path", { d: "M7 11V7a5 5 0 0110 0v4" })
  ] }),
  eye: /* @__PURE__ */ D(Ne, { children: [
    /* @__PURE__ */ s("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  "eye-off": /* @__PURE__ */ D(Ne, { children: [
    /* @__PURE__ */ s("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ s("path", { d: "M1 1l22 22" })
  ] }),
  refresh: /* @__PURE__ */ D(Ne, { children: [
    /* @__PURE__ */ s("path", { d: "M23 4v6h-6M1 20v-6h6" }),
    /* @__PURE__ */ s("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
  ] }),
  calendar: /* @__PURE__ */ D(Ne, { children: [
    /* @__PURE__ */ s("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ s("path", { d: "M16 2v4M8 2v4M3 10h18" })
  ] }),
  clock: /* @__PURE__ */ D(Ne, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ s("path", { d: "M12 6v6l4 2" })
  ] }),
  "check-circle": /* @__PURE__ */ D(Ne, { children: [
    /* @__PURE__ */ s("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ s("path", { d: "M22 4L12 14.01l-3-3" })
  ] }),
  "x-circle": /* @__PURE__ */ D(Ne, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ s("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] }),
  shield: /* @__PURE__ */ s(Ne, { children: /* @__PURE__ */ s("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  globe: /* @__PURE__ */ D(Ne, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ s("path", { d: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
  ] }),
  file: /* @__PURE__ */ D(Ne, { children: [
    /* @__PURE__ */ s("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
    /* @__PURE__ */ s("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
  ] }),
  folder: /* @__PURE__ */ s("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" }),
  home: /* @__PURE__ */ D(Ne, { children: [
    /* @__PURE__ */ s("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
    /* @__PURE__ */ s("path", { d: "M9 22V12h6v10" })
  ] }),
  key: /* @__PURE__ */ s(Ne, { children: /* @__PURE__ */ s("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) }),
  link: /* @__PURE__ */ D(Ne, { children: [
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
  ban: /* @__PURE__ */ D(Ne, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ s("path", { d: "M4.93 4.93l14.14 14.14" })
  ] })
}, Oe = Fe(function({ name: t, size: n = "md", strokeWidth: r = 2, className: i, ...c }, d) {
  const o = typeof n == "string";
  return /* @__PURE__ */ s(
    "svg",
    {
      ref: d,
      className: [o ? _o[n] : null, i].filter(Boolean).join(" "),
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
      ...c,
      children: po[t]
    }
  );
}), ho = "_stat_sjin9_1", mo = "_label_sjin9_8", go = "_row_sjin9_16", xo = "_value_sjin9_22", yo = "_delta_sjin9_28", bo = "_success_sjin9_33", vo = "_danger_sjin9_37", ko = "_neutral_sjin9_41", wo = "_hint_sjin9_45", rn = {
  stat: ho,
  label: mo,
  row: go,
  value: xo,
  delta: yo,
  success: bo,
  danger: vo,
  neutral: ko,
  hint: wo
}, yv = Fe(function({ label: t, value: n, delta: r, deltaTone: i = "neutral", hint: c, className: d, ...o }, l) {
  return /* @__PURE__ */ D(
    "div",
    {
      ref: l,
      className: [rn.stat, d].filter(Boolean).join(" "),
      ...o,
      children: [
        /* @__PURE__ */ s("div", { className: rn.label, children: t }),
        /* @__PURE__ */ D("div", { className: rn.row, children: [
          /* @__PURE__ */ s("div", { className: rn.value, children: n }),
          r != null && /* @__PURE__ */ s("div", { className: [rn.delta, rn[i]].join(" "), children: r })
        ] }),
        c != null && /* @__PURE__ */ s("div", { className: rn.hint, children: c })
      ]
    }
  );
}), $o = "_wrap_1nflq_1", Oo = "_table_1nflq_8", No = "_caption_1nflq_14", So = "_none_1nflq_51", Do = "_horizontal_1nflq_57", Mo = "_vertical_1nflq_67", Co = "_alternating_1nflq_85", zo = "_start_1nflq_89", Eo = "_center_1nflq_93", Io = "_end_1nflq_97", Ao = "_empty_1nflq_101", Yt = {
  wrap: $o,
  table: Oo,
  caption: No,
  none: So,
  horizontal: Do,
  vertical: Mo,
  alternating: Co,
  start: zo,
  center: Eo,
  end: Io,
  empty: Ao
};
function bv({
  columns: e,
  rows: t,
  rowKey: n,
  empty: r,
  caption: i,
  gridLines: c = "default",
  allowAlternatingRows: d = !0,
  className: o,
  visible: l = !0
}) {
  if (l === !1) return null;
  const a = c === "default" || c === "both" ? "" : Yt[c];
  return /* @__PURE__ */ D("div", { className: [Yt.wrap, o].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ D(
      "table",
      {
        className: [
          Yt.table,
          a,
          d ? Yt.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          i != null && /* @__PURE__ */ s("caption", { className: Yt.caption, children: i }),
          /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ s("tr", { children: e.map((u) => /* @__PURE__ */ s(
            "th",
            {
              className: u.align != null ? Yt[u.align] : void 0,
              scope: "col",
              children: u.header
            },
            u.key
          )) }) }),
          /* @__PURE__ */ s("tbody", { children: t.map((u) => /* @__PURE__ */ s("tr", { children: e.map((f) => /* @__PURE__ */ s(
            "td",
            {
              className: f.align != null ? Yt[f.align] : void 0,
              children: f.render != null ? f.render(u) : u[f.key]
            },
            f.key
          )) }, n(u))) })
        ]
      }
    ),
    t.length === 0 && r != null && /* @__PURE__ */ s("div", { className: Yt.empty, children: r })
  ] });
}
const jo = "_emptyState_1swxw_1", To = "_icon_1swxw_13", Lo = "_title_1swxw_18", Po = "_description_1swxw_24", Ro = "_action_1swxw_30", Sn = {
  emptyState: jo,
  icon: To,
  title: Lo,
  description: Po,
  action: Ro
};
function vv({
  icon: e,
  title: t,
  description: n,
  action: r,
  className: i,
  visible: c = !0
}) {
  return c === !1 ? null : /* @__PURE__ */ D("div", { className: [Sn.emptyState, i].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ s("div", { className: Sn.icon, children: e }),
    /* @__PURE__ */ s("div", { className: Sn.title, children: t }),
    n != null && /* @__PURE__ */ s("div", { className: Sn.description, children: n }),
    r != null && /* @__PURE__ */ s("div", { className: Sn.action, children: r })
  ] });
}
const Bo = "_field_149oz_1", qo = "_label_149oz_8", Fo = "_required_149oz_14", Ho = "_hint_149oz_19", Ko = "_error_149oz_24", Dn = {
  field: Bo,
  label: qo,
  required: Fo,
  hint: Ho,
  error: Ko
};
function kv({
  label: e,
  htmlFor: t,
  required: n,
  hint: r,
  supporting: i,
  error: c,
  children: d,
  className: o,
  visible: l = !0
}) {
  const a = r ?? i, u = qe(), f = qe(), k = qe();
  if (l === !1) return null;
  const v = c != null ? f : a != null ? k : null, $ = typeof d == "function" ? d({ inputId: u, hintId: k, errorId: f }) : d, y = dt($) && typeof $.props.id == "string" ? $.props.id : void 0, g = y ?? t ?? u, _ = dt($) && (v != null || y == null && typeof $.type == "string"), p = y != null || t != null || _, x = _ && dt($) ? ys($, {
    id: g,
    "aria-describedby": v != null ? [
      $.props["aria-describedby"],
      v
    ].filter((w) => typeof w == "string").join(" ") || void 0 : $.props["aria-describedby"],
    "aria-invalid": c != null ? !0 : $.props["aria-invalid"]
  }) : $;
  return /* @__PURE__ */ D("div", { className: [Dn.field, o].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ D(
      "label",
      {
        className: Dn.label,
        htmlFor: p ? g : void 0,
        children: [
          e,
          n === !0 && /* @__PURE__ */ s("span", { className: Dn.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    x,
    c != null ? /* @__PURE__ */ s("div", { id: f, className: Dn.error, "aria-live": "polite", children: c }) : a != null ? /* @__PURE__ */ s("div", { id: k, className: Dn.hint, children: a }) : null
  ] });
}
const Uo = "_formfield_1kmwl_1", Wo = "_content_1kmwl_8", Xo = "_floating_1kmwl_43", Vo = "_label_1kmwl_111", Go = "_start_1kmwl_132", Yo = "_required_1kmwl_169", Zo = "_end_1kmwl_175", Jo = "_filled_1kmwl_192", Qo = "_flat_1kmwl_199", el = "_helper_1kmwl_206", tl = "_invalid_1kmwl_211", Et = {
  formfield: Uo,
  content: Wo,
  floating: Xo,
  label: Vo,
  start: Go,
  required: Yo,
  end: Zo,
  filled: Jo,
  flat: Qo,
  helper: el,
  invalid: tl
};
function wv({
  text: e,
  start: t,
  end: n,
  helper: r,
  component: i,
  allowFloatingLabel: c = !0,
  variant: d = "outlined",
  invalid: o = !1,
  required: l = !1,
  children: a,
  className: u,
  visible: f = !0
}) {
  const k = qe(), v = qe();
  if (f === !1) return null;
  const $ = i ?? k, y = typeof a == "function" ? a({
    inputId: $
  }) : a, g = dt(y) ? y.type : null, _ = typeof g == "string", p = dt(y) && typeof g != "symbol", x = dt(y) ? y.props : null, w = typeof x?.id == "string" ? x.id : void 0, m = _ && dt(y) ? y.type.toLowerCase() : null, C = m != null && (m === "input" ? typeof x?.type != "string" || x.type.toLowerCase() !== "hidden" : m === "button" || m === "meter" || m === "output" || m === "progress" || m === "select" || m === "textarea"), b = p && (r != null || o || w == null && C), N = w != null || i != null || b, A = m === "input" && typeof x?.type == "string" ? x.type.toLowerCase() : null, M = m === "textarea" || m === "input" && (A == null || [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number"
  ].includes(A)), I = b && dt(y) ? ys(
    y,
    {
      id: w ?? $,
      ...c && M && x?.placeholder == null ? { placeholder: " " } : {},
      ...r != null ? {
        "aria-describedby": [
          x?.["aria-describedby"],
          v
        ].filter((h) => typeof h == "string").join(" ")
      } : {},
      ...o ? {
        "aria-invalid": !0
      } : {}
    }
  ) : y, O = e != null ? /* @__PURE__ */ D(
    "label",
    {
      className: Et.label,
      htmlFor: N ? w ?? $ : void 0,
      children: [
        e,
        l === !0 && /* @__PURE__ */ s("span", { className: Et.required, "aria-hidden": "true", children: "*" })
      ]
    }
  ) : null;
  return /* @__PURE__ */ D(
    "div",
    {
      className: [
        Et.formfield,
        Et[d],
        c ? Et.floating : null,
        o ? Et.invalid : null,
        u
      ].filter(Boolean).join(" "),
      children: [
        c ? null : O,
        /* @__PURE__ */ D("div", { className: Et.content, children: [
          t != null && /* @__PURE__ */ s("div", { className: Et.start, children: t }),
          I,
          c ? O : null,
          n != null && /* @__PURE__ */ s("div", { className: Et.end, children: n })
        ] }),
        r != null && /* @__PURE__ */ s("div", { id: v, className: Et.helper, children: r })
      ]
    }
  );
}
const nl = "_fieldset_18z6t_1", sl = "_legend_18z6t_11", rl = "_legendText_18z6t_20", ol = "_toggle_18z6t_24", ll = "_content_18z6t_45", al = "_summary_18z6t_49", on = {
  fieldset: nl,
  legend: sl,
  legendText: rl,
  toggle: ol,
  content: ll,
  summary: al
};
function $v({
  text: e,
  headerTemplate: t,
  icon: n,
  iconColor: r,
  allowCollapse: i = !1,
  collapsed: c,
  defaultCollapsed: d = !1,
  summary: o,
  expandTitle: l,
  collapseTitle: a,
  expandAriaLabel: u,
  collapseAriaLabel: f,
  onExpand: k,
  onCollapse: v,
  children: $,
  className: y,
  visible: g = !0
}) {
  const _ = qe(), [p, x] = X(d);
  if (g === !1) return null;
  const w = c ?? p, m = i ? `${_}-content` : void 0, C = () => {
    const O = !w;
    c === void 0 && x(O), O ? v?.() : k?.();
  }, b = i || e != null || n != null || t != null, N = i ? w : !1, A = i && w && o != null, M = N ? l ?? "Expand" : a ?? "Collapse", I = N ? u ?? "Expand" : f ?? "Collapse";
  return /* @__PURE__ */ D(
    "fieldset",
    {
      className: [on.fieldset, y].filter(Boolean).join(" "),
      children: [
        b ? /* @__PURE__ */ s("legend", { className: on.legend, children: i ? /* @__PURE__ */ D(Ne, { children: [
          /* @__PURE__ */ D(
            "button",
            {
              type: "button",
              className: on.toggle,
              title: M,
              "aria-label": e == null ? I : void 0,
              "aria-expanded": !N,
              "aria-controls": m,
              onClick: C,
              children: [
                /* @__PURE__ */ s(
                  Oe,
                  {
                    name: N ? "plus" : "minus",
                    size: 16,
                    "aria-hidden": "true"
                  }
                ),
                n != null && /* @__PURE__ */ s(
                  Oe,
                  {
                    name: n,
                    "aria-hidden": "true",
                    ...r != null ? { style: { color: r } } : {}
                  }
                ),
                e != null && /* @__PURE__ */ s("span", { className: on.legendText, children: e })
              ]
            }
          ),
          t
        ] }) : /* @__PURE__ */ D(Ne, { children: [
          n != null && /* @__PURE__ */ s(
            Oe,
            {
              name: n,
              "aria-hidden": "true",
              ...r != null ? { style: { color: r } } : {}
            }
          ),
          e != null && /* @__PURE__ */ s("span", { className: on.legendText, children: e }),
          t
        ] }) }) : null,
        /* @__PURE__ */ s(
          "div",
          {
            className: on.content,
            id: m,
            hidden: N,
            children: $
          }
        ),
        A ? /* @__PURE__ */ s("div", { className: on.summary, children: o }) : null
      ]
    }
  );
}
const il = "_form_19k3s_1", cl = {
  form: il
}, rr = $n(null);
function dl() {
  const e = nn(rr);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function Ov({
  model: e,
  onSubmit: t,
  onInvalidSubmit: n,
  action: r,
  method: i,
  children: c,
  className: d
}) {
  const [o, l] = X({}), [a, u] = X(0), f = ee(o);
  f.current = o;
  const k = B((x) => {
    l(
      (w) => w[x.name] === x ? w : { ...w, [x.name]: x }
    );
  }, []), v = B((x) => {
    l((w) => {
      if (!(x in w)) return w;
      const m = { ...w };
      return delete m[x], m;
    });
  }, []), $ = B(() => {
    const x = {};
    for (const w of Object.values(f.current)) {
      const m = w.validate();
      m.length > 0 && (x[w.name] = m);
    }
    return x;
  }, []), y = B(() => {
    const x = $();
    u((w) => w + 1), Object.keys(x).length === 0 ? t?.(e) : n?.(x);
  }, [$, e, t, n]), g = (x) => {
    r != null && i != null || (x.preventDefault(), y());
  }, _ = xe(
    () => ({ registerField: k, unregisterField: v, submit: y, submitCount: a }),
    [k, v, y, a]
  ), p = [cl.form, d].filter(Boolean).join(" ");
  return /* @__PURE__ */ s(rr.Provider, { value: _, children: /* @__PURE__ */ s(
    "form",
    {
      className: p,
      onSubmit: g,
      action: r,
      method: i,
      noValidate: !0,
      children: c
    }
  ) });
}
const fn = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", Nv = (e = "Required") => (t) => fn(t) ? e : null, Sv = (e = "Invalid email") => (t) => fn(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, Dv = (e, t = "Invalid format") => (n) => fn(n) || e.test(String(n)) ? null : t, Mv = (e, t = `Minimum ${e} characters`) => (n) => fn(n) || String(n).length >= e ? null : t, Cv = (e, t = `Maximum ${e} characters`) => (n) => fn(n) || String(n).length <= e ? null : t, zv = (e, t, n = `Between ${e} and ${t}`) => (r) => {
  if (fn(r)) return null;
  const i = Number(r);
  return !Number.isNaN(i) && i >= e && i <= t ? null : n;
}, Ev = (e, t = "Values do not match") => (n, r) => {
  if (fn(n)) return null;
  const i = typeof e == "function" ? e(r) : e;
  return n === i ? null : t;
}, Iv = (e = "Required") => (t) => t === !0 ? null : e, Av = (e) => (t, n) => e(t, n);
function ul(e, t, n) {
  return e.map((r) => r(t, n)).filter((r) => r != null);
}
function jv(e, t) {
  const { registerField: n, unregisterField: r, submitCount: i } = dl(), [c, d] = X(t?.initialValue), [o, l] = X(!1), [a, u] = X(!1), f = ee(() => []);
  f.current = () => ul(t?.validate ?? [], c), me(() => (n({ name: e, validate: () => f.current() }), () => r(e)), [e, n, r]), me(() => {
    i > 0 && (l(!0), u(!1));
  }, [i]);
  const k = o && !a ? f.current() : [];
  return { value: c, setValue: ($) => {
    d($), u(!0);
  }, errors: k };
}
const fl = "_select_1vjst_1", _l = "_invalid_1vjst_33", pl = "_xs_1vjst_40", hl = "_sm_1vjst_48", ml = "_md_1vjst_56", gl = "_lg_1vjst_62", xl = "_xl_1vjst_68", ls = {
  select: fl,
  invalid: _l,
  xs: pl,
  sm: hl,
  md: ml,
  lg: gl,
  xl
}, kn = Fe(
  function({ size: t = "md", invalid: n = !1, options: r, children: i, className: c, ...d }, o) {
    return /* @__PURE__ */ s(
      "select",
      {
        ref: o,
        "data-size": t,
        className: [
          ls.select,
          ls[t],
          n ? ls.invalid : null,
          c
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...d,
        children: r != null ? r.map((l) => /* @__PURE__ */ s(
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
), or = [
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
], Mn = {
  string: "Contains",
  number: "Equals",
  boolean: "Equals",
  date: "Equals",
  enum: "Equals"
}, yl = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
];
function bl(e) {
  return yl.includes(e);
}
function ts(e, t) {
  return t.split(".").reduce((n, r) => {
    if (n != null)
      return n[r];
  }, e);
}
function Ss(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function Bn(e, t) {
  const n = Ss(e), r = Ss(t);
  if (typeof n == "number" && typeof r == "number") return n - r;
  const i = String(n ?? ""), c = String(r ?? "");
  return i < c ? -1 : i > c ? 1 : 0;
}
function rs(e) {
  if (e.secondOperator == null) return !1;
  if (bl(e.secondOperator)) return !0;
  const t = e.secondValue;
  return t != null && t !== "";
}
function Ds(e, t, n) {
  const r = ts(t, e.property), i = Ms(
    r,
    e.value,
    e.operator,
    n
  );
  if (!rs(e)) return i;
  const c = Ms(
    r,
    e.secondValue,
    e.secondOperator,
    n
  );
  return (e.logicalOperator ?? "And") === "And" ? i && c : i || c;
}
function Ms(e, t, n, r) {
  const i = r === "CaseInsensitive", c = (l) => i && typeof l == "string" ? l.toLowerCase() : l, d = c(e), o = c(t);
  switch (n) {
    case "Equals":
      return d === o || Array.isArray(d) && d.some((l) => c(l) === o);
    case "NotEquals":
      return d !== o && !(Array.isArray(d) && d.some((l) => c(l) === o));
    case "LessThan":
      return Bn(d, o) < 0;
    case "LessThanOrEquals":
      return Bn(d, o) <= 0;
    case "GreaterThan":
      return Bn(d, o) > 0;
    case "GreaterThanOrEquals":
      return Bn(d, o) >= 0;
    case "Contains":
      return typeof d == "string" && typeof o == "string" && d.includes(o);
    case "StartsWith":
      return typeof d == "string" && typeof o == "string" && d.startsWith(o);
    case "EndsWith":
      return typeof d == "string" && typeof o == "string" && d.endsWith(o);
    case "DoesNotContain":
      return typeof d == "string" && typeof o == "string" && !d.includes(o);
    case "In":
      return Array.isArray(o) && o.some((l) => c(l) === d);
    case "NotIn":
      return Array.isArray(o) && !o.some((l) => c(l) === d);
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
function ws(e) {
  return "filters" in e;
}
function lr(e, t, n = {}) {
  const r = n.logicalOperator ?? "And", i = n.caseSensitivity ?? "CaseInsensitive";
  if (ws(t)) {
    if (t.filters.length === 0) return !0;
    const c = t.operator ?? r;
    return t.filters[c === "Or" ? "some" : "every"](
      (d) => lr(e, d, { logicalOperator: c, caseSensitivity: i })
    );
  }
  return t.operator === "Custom", Ds(t, e, i);
}
function ar(e, t, n = {}) {
  return e.filter((r) => lr(r, t, n));
}
function vl(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function xt(e) {
  return typeof e == "string" ? `"${vl(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(xt).join(", ")}]` : `"${String(e)}"`;
}
function kl(e) {
  const t = (i, c) => {
    switch (i) {
      case "Equals":
        return `${e.property}.Equals(${xt(c)})`;
      case "NotEquals":
        return `!${e.property}.Equals(${xt(c)})`;
      case "LessThan":
        return `${e.property}.LessThan(${xt(c)})`;
      case "LessThanOrEquals":
        return `${e.property}.LessThanOrEquals(${xt(c)})`;
      case "GreaterThan":
        return `${e.property}.GreaterThan(${xt(c)})`;
      case "GreaterThanOrEquals":
        return `${e.property}.GreaterThanOrEquals(${xt(c)})`;
      case "Contains":
        return `${e.property}.Contains(${xt(c)})`;
      case "StartsWith":
        return `${e.property}.StartsWith(${xt(c)})`;
      case "EndsWith":
        return `${e.property}.EndsWith(${xt(c)})`;
      case "DoesNotContain":
        return `!${e.property}.Contains(${xt(c)})`;
      case "In":
        return `${e.property}.In(${xt(c)})`;
      case "NotIn":
        return `!${e.property}.In(${xt(c)})`;
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
  if (!rs(e))
    return t(e.operator, e.value);
  const n = e.logicalOperator ?? "And", r = e.secondOperator;
  return `(${t(e.operator, e.value)} ${n} ${t(
    r,
    e.secondValue
  )})`;
}
function wl(e) {
  return ws(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(wl).filter(Boolean).join(` ${e.operator} `)})` : kl(e);
}
function $l(e) {
  return e.replace(/'/g, "''");
}
const Ol = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function Nl(e, t) {
  const n = e.property, r = t === "CaseInsensitive", i = (a) => r ? `tolower(${a})` : a, c = (a) => typeof a == "string" ? `'${$l(a)}'` : a instanceof Date ? `'${a.toISOString()}'` : String(a ?? ""), d = (a, u) => {
    const f = typeof u == "string", k = f && r ? i(n) : n;
    switch (a) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${k} ${Ol[a]} ${f && r ? i(c(u)) : c(u)}`;
      case "Contains":
        return `contains(${i(n)}, ${i(c(u))})`;
      case "StartsWith":
        return `startswith(${i(n)}, ${i(c(u))})`;
      case "EndsWith":
        return `endswith(${i(n)}, ${i(c(u))})`;
      case "DoesNotContain":
        return `not(contains(${i(n)}, ${i(c(u))}))`;
      case "In":
        return Array.isArray(u) ? `${k} in (${u.map((v) => c(v)).join(", ")})` : `${k} in (${c(u)})`;
      case "NotIn":
        return Array.isArray(u) ? `not(${k} in (${u.map((v) => c(v)).join(", ")}))` : `not(${k} in (${c(u)}))`;
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
  if (!rs(e))
    return d(e.operator, e.value);
  const o = (e.logicalOperator ?? "And") === "And" ? "and" : "or", l = e.secondOperator;
  return `(${d(e.operator, e.value)} ${o} ${d(
    l,
    e.secondValue
  )})`;
}
function Sl(e, t = {}) {
  const n = t.caseSensitivity ?? "CaseInsensitive";
  if (ws(e)) {
    if (e.filters.length === 0) return "";
    const r = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((i) => Sl(i, { caseSensitivity: n })).filter(Boolean).join(` ${r} `)})`;
  }
  return Nl(e, n);
}
function Dl(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((n, r) => {
    for (const i of t) {
      const c = i.sortOrder === "Ascending" ? 1 : -1, d = Bn(
        ts(n, i.property),
        ts(r, i.property)
      );
      if (d !== 0) return d * c;
    }
    return 0;
  });
}
const Ml = "_filter_1h8zc_1", Cl = "_rows_1h8zc_9", zl = "_row_1h8zc_9", El = "_join_1h8zc_21", Il = "_property_1h8zc_30", Al = "_operator_1h8zc_34", jl = "_value_1h8zc_38", Tl = "_remove_1h8zc_42", Ll = "_bar_1h8zc_58", Pl = "_add_1h8zc_64", Rl = "_custom_1h8zc_78", Bl = "_summary_1h8zc_82", ql = "_second_1h8zc_87", Fl = "_secondAdd_1h8zc_91", Hl = "_addSecond_1h8zc_95", Kl = "_joinSelect_1h8zc_109", Ye = {
  filter: Ml,
  rows: Cl,
  row: zl,
  join: El,
  property: Il,
  operator: Al,
  value: jl,
  remove: Tl,
  bar: Ll,
  add: Pl,
  custom: Rl,
  summary: Bl,
  second: ql,
  secondAdd: Fl,
  addSecond: Hl,
  joinSelect: Kl
}, Cn = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
], Cs = {
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
function zs({
  property: e,
  value: t,
  onChange: n
}) {
  if (e.editor != null)
    return /* @__PURE__ */ s(Ne, { children: e.editor({ value: t, onChange: n }) });
  const r = e.type ?? "string";
  if (r === "enum" && e.values != null)
    return /* @__PURE__ */ s(
      kn,
      {
        "aria-label": e.title ?? e.name,
        className: Ye.value,
        options: e.values,
        value: String(t ?? ""),
        onChange: (c) => n(c.target.value)
      }
    );
  if (r === "boolean")
    return /* @__PURE__ */ s(
      kn,
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
          c.target.value === "" ? n(void 0) : n(c.target.value === "true");
        }
      }
    );
  const i = r === "number" ? { type: "number" } : r === "date" ? { type: "date" } : { type: "text" };
  return /* @__PURE__ */ s(
    "input",
    {
      "aria-label": e.title ?? e.name,
      className: Ye.value,
      ...i,
      value: t == null ? "" : String(t),
      onChange: (c) => n(
        r === "number" && c.target.value !== "" ? Number(c.target.value) : c.target.value
      )
    }
  );
}
function Tv({
  properties: e,
  logicalOperator: t = "And",
  filterCaseSensitivity: n = "CaseInsensitive",
  initialRows: r,
  uniqueFilters: i = !1,
  className: c,
  viewChanged: d,
  items: o,
  children: l
}) {
  const [a, u] = X(
    () => r != null && r.length > 0 ? r.map((_, p) => ({ id: p, ..._ })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: Mn[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), f = (_, p) => {
    u(
      (x) => x.map((w) => w.id === _ ? { ...w, ...p } : w)
    );
  }, k = () => {
    const _ = a[a.length - 1], p = Math.max(0, ...a.map((w) => w.id)) + 1, x = e[0];
    u((w) => [
      ...w,
      {
        id: p,
        property: _?.property ?? x?.name ?? "",
        operator: Mn[e.find(
          (m) => m.name === (_?.property ?? x?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, v = (_) => {
    u(
      (p) => p.length > 1 ? p.filter((x) => x.id !== _) : p
    );
  }, $ = xe(() => {
    const _ = [];
    for (const p of a) {
      if (p.property === "" || (p.value == null || p.value === "") && !Cn.includes(p.operator)) continue;
      const w = {
        property: p.property,
        operator: p.operator,
        value: p.value
      }, { secondOperator: m } = p;
      m != null && rs(p) && (w.secondOperator = m, w.secondValue = p.secondValue, w.logicalOperator = p.logicalOperator ?? "And"), _.push(w);
    }
    return _;
  }, [a]), y = xe(() => o == null || $.length === 0 ? o : ar(o, {
    operator: t,
    filters: $
  }, {
    caseSensitivity: n
  }), [o, $, t, n]);
  me(() => {
    d != null && o != null && d(y ?? []);
  }, [y]);
  const g = (_) => e.find((p) => p.name === _) ?? { name: _, type: "string" };
  return /* @__PURE__ */ D("div", { className: [Ye.filter, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ s("div", { className: Ye.rows, role: "group", "aria-label": "Filter conditions", children: a.map((_, p) => {
      const x = g(_.property), w = i ? [Mn[x.type ?? "string"]] : or, m = !Cn.includes(_.operator), C = _.secondOperator != null;
      return /* @__PURE__ */ D(bs, { children: [
        /* @__PURE__ */ D("div", { className: Ye.row, children: [
          p > 0 ? /* @__PURE__ */ s("span", { className: Ye.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ s(
            kn,
            {
              "aria-label": `Condition ${p + 1} property`,
              className: Ye.property,
              value: _.property,
              onChange: (b) => {
                const N = e.find(
                  (A) => A.name === b.target.value
                );
                f(_.id, {
                  property: b.target.value,
                  operator: Mn[N?.type ?? "string"],
                  value: void 0,
                  secondOperator: void 0,
                  secondValue: void 0,
                  logicalOperator: void 0
                });
              },
              options: e.map((b) => ({
                value: b.name,
                label: b.title ?? b.name
              }))
            }
          ),
          /* @__PURE__ */ s(
            kn,
            {
              "aria-label": `Condition ${p + 1} operator`,
              className: Ye.operator,
              value: _.operator,
              onChange: (b) => {
                const N = b.target.value;
                f(
                  _.id,
                  Cn.includes(N) ? {
                    operator: N,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: N }
                );
              },
              options: w.map((b) => ({
                value: b,
                label: Cs[b]
              }))
            }
          ),
          m ? /* @__PURE__ */ s(
            zs,
            {
              property: x,
              value: _.value,
              onChange: (b) => f(_.id, { value: b })
            }
          ) : null,
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: Ye.remove,
              "aria-label": `Remove condition ${p + 1}`,
              onClick: () => v(_.id),
              children: /* @__PURE__ */ s(Oe, { name: "close", size: "sm" })
            }
          )
        ] }),
        m ? C ? /* @__PURE__ */ D(
          "div",
          {
            className: [Ye.row, Ye.second].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ s(
                kn,
                {
                  "aria-label": `Condition ${p + 1} second-operator logic`,
                  className: Ye.joinSelect,
                  value: _.logicalOperator ?? "And",
                  onChange: (b) => f(_.id, {
                    logicalOperator: b.target.value
                  }),
                  options: [
                    { value: "And", label: "And" },
                    { value: "Or", label: "Or" }
                  ]
                }
              ),
              /* @__PURE__ */ s(
                kn,
                {
                  "aria-label": `Condition ${p + 1} second operator`,
                  className: Ye.operator,
                  value: _.secondOperator,
                  onChange: (b) => {
                    const N = b.target.value;
                    f(
                      _.id,
                      Cn.includes(N) ? { secondOperator: N, secondValue: void 0 } : { secondOperator: N }
                    );
                  },
                  options: w.map((b) => ({
                    value: b,
                    label: Cs[b]
                  }))
                }
              ),
              _.secondOperator == null || !Cn.includes(_.secondOperator) ? /* @__PURE__ */ s(
                zs,
                {
                  property: x,
                  value: _.secondValue,
                  onChange: (b) => f(_.id, { secondValue: b })
                }
              ) : null,
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: Ye.remove,
                  "aria-label": `Remove second condition ${p + 1}`,
                  onClick: () => f(_.id, {
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  }),
                  children: /* @__PURE__ */ s(Oe, { name: "close", size: "sm" })
                }
              )
            ]
          }
        ) : /* @__PURE__ */ s("div", { className: Ye.secondAdd, children: /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: Ye.addSecond,
            onClick: () => f(_.id, {
              secondOperator: Mn[x.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, _.id);
    }) }),
    /* @__PURE__ */ D("div", { className: Ye.bar, children: [
      /* @__PURE__ */ s("button", { type: "button", className: Ye.add, onClick: k, children: "Add filter" }),
      l != null ? /* @__PURE__ */ s("div", { className: Ye.custom, children: l }) : null,
      o != null ? /* @__PURE__ */ D("span", { className: Ye.summary, "aria-live": "polite", children: [
        y?.length ?? 0,
        " of ",
        o.length
      ] }) : null
    ] })
  ] });
}
const Ul = "_pager_4cpp0_1", Wl = "_alignLeft_4cpp0_10", Xl = "_alignCenter_4cpp0_14", Vl = "_alignRight_4cpp0_18", Gl = "_alignJustify_4cpp0_22", Yl = "_summary_4cpp0_26", Zl = "_controls_4cpp0_31", Jl = "_button_4cpp0_37", Ql = "_active_4cpp0_73", ea = "_ellipsis_4cpp0_85", ta = "_size_4cpp0_91", it = {
  pager: Ul,
  alignLeft: Wl,
  alignCenter: Xl,
  alignRight: Vl,
  alignJustify: Gl,
  summary: Yl,
  controls: Zl,
  button: Jl,
  active: Ql,
  ellipsis: ea,
  size: ta
};
function na(e, t, n, r) {
  return e.replace("{0}", String(t)).replace("{1}", String(n)).replace("{2}", String(r));
}
function Es(e, t) {
  return e.replace("{0}", String(t));
}
function sa(e, t, n) {
  if (t <= n)
    return Array.from({ length: t }, (o, l) => l + 1);
  const r = Math.floor(n / 2);
  let i = Math.max(1, e - r);
  const c = Math.min(t, i + n - 1);
  i = Math.max(1, c - n + 1);
  const d = [];
  for (let o = i; o <= c; o++) d.push(o);
  return i > 2 && d.unshift("ellipsis"), i > 1 && d.unshift(1), c < t - 1 && d.push("ellipsis"), c < t && d.push(t), d;
}
function ra({
  count: e,
  pageSize: t,
  page: n,
  defaultPage: r = 1,
  pageSizeOptions: i,
  pageNumbersCount: c = 5,
  alwaysVisible: d = !1,
  horizontalAlign: o = "left",
  showPagingSummary: l,
  showPageSizeSelector: a = !0,
  pagingSummaryFormat: u = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: f,
  pageSizeText: k = "Items per page",
  firstPageTitle: v = "First page",
  prevPageTitle: $ = "Previous page",
  nextPageTitle: y = "Next page",
  lastPageTitle: g = "Last page",
  pageTitleFormat: _ = "Page {0}",
  pageAriaLabelFormat: p = "Page {0}",
  onPageChange: x,
  onPageSizeChange: w,
  ariaLabel: m = "Pagination",
  className: C,
  visible: b = !0
}) {
  const N = n ?? r, [A, M] = X(N), I = n !== void 0, O = I ? N : A, h = Math.max(1, Math.ceil(e / t)), S = Math.min(Math.max(1, O), h), L = l ?? !0, E = d || h > 1, j = sa(S, h, c), T = B(
    (U) => {
      const ne = Math.min(Math.max(1, U), h);
      I || M(ne);
      const le = (ne - 1) * t;
      x?.({
        page: ne,
        skip: le,
        top: t,
        pageCount: h,
        pageSize: t
      });
    },
    [I, x, h, t]
  ), F = o === "center" ? it.alignCenter : o === "right" ? it.alignRight : o === "justify" ? it.alignJustify : it.alignLeft, G = {
    count: e,
    pageNumber: S,
    pageSize: t,
    pageCount: h
  }, Y = (U) => {
    const ne = Array.from(
      U.currentTarget.querySelectorAll(
        "button[data-pager-page]"
      )
    ), le = ne.indexOf(document.activeElement);
    le !== -1 && (U.key === "ArrowRight" || U.key === "ArrowDown" ? (U.preventDefault(), (ne[le + 1] ?? ne[0])?.focus()) : U.key === "ArrowLeft" || U.key === "ArrowUp" ? (U.preventDefault(), (ne[le - 1] ?? ne[ne.length - 1])?.focus()) : U.key === "Home" ? (U.preventDefault(), ne[0]?.focus()) : U.key === "End" && (U.preventDefault(), ne[ne.length - 1]?.focus()));
  };
  return b === !1 || !E ? null : /* @__PURE__ */ D(
    "nav",
    {
      className: [it.pager, F, C].filter(Boolean).join(" "),
      "aria-label": m,
      children: [
        L && /* @__PURE__ */ s("span", { className: it.summary, "aria-live": "polite", children: f ? f(G) : na(u, S, h, e) }),
        /* @__PURE__ */ D(
          "div",
          {
            className: it.controls,
            role: "group",
            "aria-label": m,
            onKeyDown: Y,
            children: [
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: it.button,
                  disabled: S <= 1,
                  onClick: () => T(1),
                  "aria-label": v,
                  title: v,
                  children: "«"
                }
              ),
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: it.button,
                  disabled: S <= 1,
                  onClick: () => T(S - 1),
                  "aria-label": $,
                  title: $,
                  children: "‹"
                }
              ),
              j.map(
                (U, ne) => U === "ellipsis" ? /* @__PURE__ */ s("span", { className: it.ellipsis, "aria-hidden": "true", children: "…" }, `e${ne}`) : /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    "data-pager-page": U,
                    className: [it.button, U === S ? it.active : ""].filter(Boolean).join(" "),
                    "aria-current": U === S ? "page" : void 0,
                    "aria-label": Es(p, U),
                    title: Es(_, U),
                    onClick: () => T(U),
                    children: U
                  },
                  U
                )
              ),
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: it.button,
                  disabled: S >= h,
                  onClick: () => T(S + 1),
                  "aria-label": y,
                  title: y,
                  children: "›"
                }
              ),
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: it.button,
                  disabled: S >= h,
                  onClick: () => T(h),
                  "aria-label": g,
                  title: g,
                  children: "»"
                }
              )
            ]
          }
        ),
        a && i && i.length > 0 && /* @__PURE__ */ D("label", { className: it.size, children: [
          /* @__PURE__ */ s("span", { children: k }),
          /* @__PURE__ */ s(
            "select",
            {
              value: t,
              onChange: (U) => w?.(Number(U.target.value)),
              "aria-label": k,
              children: i.map((U) => /* @__PURE__ */ s("option", { value: U, children: U }, U))
            }
          )
        ] })
      ]
    }
  );
}
function _s(e) {
  const { pageNumber: t, onPageChange: n, summaryTemplate: r, showSummary: i, ...c } = e;
  return /* @__PURE__ */ s(
    ra,
    {
      page: t,
      showPagingSummary: i,
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
      ...c
    }
  );
}
function oa(e, t, n, r, i, c) {
  if (!t || !n) return e.map((l) => ({ type: "row", row: l }));
  const d = /* @__PURE__ */ new Map();
  e.forEach((l) => {
    const a = String(i(l, t) ?? ""), u = d.get(a);
    u ? u.push(l) : d.set(a, [l]);
  });
  const o = [];
  return d.forEach((l, a) => {
    const u = l[0], f = u != null ? i(u, t) : void 0;
    o.push({
      type: "group",
      group: {
        key: a,
        display: c(f),
        property: t,
        title: n.title ?? t,
        count: l.length
      }
    }), r.has(a) && l.forEach((k) => o.push({ type: "row", row: k }));
  }), o;
}
function Kn(e, t) {
  return e.property ?? `col-${t}`;
}
function la(e, t) {
  const n = {};
  let r = 0;
  return e.forEach(({ key: i, column: c }) => {
    if (!c.frozen) return;
    n[i] = r === 0 ? "0px" : `${r}px`;
    const d = t[i] ?? c.width ?? "8rem";
    r += parseFloat(d);
  }), n;
}
function aa(e, t) {
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
function zn(e, t) {
  if (t != null)
    return ts(e, t);
}
function Is(e, t) {
  if (t == null || t === "") return String(e ?? "");
  const n = /^N(\d+)$/i.exec(t);
  if (n && typeof e == "number") return e.toFixed(Number(n[1]));
  if (t === "d" || t === "D") {
    const r = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return r != null && !Number.isNaN(r.getTime()) ? r.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const As = [
  "Ascending",
  "Descending",
  null
];
function ia(e, t, n = {}) {
  const r = e.find((c) => c.property === t), i = As[(r ? As.indexOf(r.sortOrder) : -1) + 1] ?? null;
  return i == null ? e.filter((c) => c.property !== t) : n.multi ? [
    ...e.filter((c) => c.property !== t),
    { property: t, sortOrder: i }
  ] : [{ property: t, sortOrder: i }];
}
function ca(e, t) {
  return Dl(e, t);
}
function da(e, t, n) {
  const r = Math.max(1, Math.ceil(e.length / n)), i = Math.min(Math.max(1, t), r), c = (i - 1) * n;
  return {
    items: e.slice(c, c + n),
    pageCount: r,
    pageNumber: i,
    total: e.length
  };
}
function ua(e, t, n = {}) {
  const r = [...t.filters.entries()].filter(([, o]) => o.value !== "" && o.value !== void 0).map(
    ([o, l]) => ({
      property: o,
      operator: l.operator ?? "Contains",
      value: aa(
        l.value,
        n.types?.[o] ?? "string"
      )
    })
  ), i = r.length > 0 ? ar(
    e,
    { operator: n.logicalOperator ?? "And", filters: r },
    {
      logicalOperator: n.logicalOperator ?? "And",
      caseSensitivity: n.caseSensitivity ?? "CaseInsensitive"
    }
  ) : e, c = ca(i, t.sorts);
  return {
    ...da(c, t.pageNumber, t.pageSize),
    sorts: t.sorts,
    filters: t.filters,
    pageSize: t.pageSize
  };
}
function fa(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
const _a = "_grid_pe0o0_1", pa = "_toolbar_pe0o0_8", ha = "_picker_pe0o0_13", ma = "_pickerButton_pe0o0_17", ga = "_pickerPanel_pe0o0_31", xa = "_pickerItem_pe0o0_46", ya = "_groupPanel_pe0o0_55", ba = "_groupPanelActive_pe0o0_66", va = "_groupPanelText_pe0o0_70", ka = "_groupChip_pe0o0_74", wa = "_groupRemove_pe0o0_85", $a = "_groupRow_pe0o0_94", Oa = "_groupCell_pe0o0_98", Na = "_groupToggle_pe0o0_103", Sa = "_editRow_pe0o0_116", Da = "_editCell_pe0o0_120", Ma = "_editInput_pe0o0_125", Ca = "_commandCell_pe0o0_135", za = "_commandButton_pe0o0_141", Ea = "_data_pe0o0_156", Ia = "_table_pe0o0_163", Aa = "_header_pe0o0_169", ja = "_center_pe0o0_181", Ta = "_right_pe0o0_185", La = "_sortButton_pe0o0_189", Pa = "_sortIndicator_pe0o0_207", Ra = "_sortIndex_pe0o0_211", Ba = "_cell_pe0o0_222", qa = "_clickable_pe0o0_236", Fa = "_frozen_pe0o0_244", Ha = "_selected_pe0o0_250", Ka = "_resizeHandle_pe0o0_258", Ua = "_filterCell_pe0o0_276", Wa = "_filterSelect_pe0o0_284", Xa = "_filterInput_pe0o0_294", Va = "_empty_pe0o0_305", Ga = "_loading_pe0o0_311", Ya = "_visuallyHidden_pe0o0_325", ye = {
  grid: _a,
  toolbar: pa,
  picker: ha,
  pickerButton: ma,
  pickerPanel: ga,
  pickerItem: xa,
  groupPanel: ya,
  groupPanelActive: ba,
  groupPanelText: va,
  groupChip: ka,
  groupRemove: wa,
  groupRow: $a,
  groupCell: Oa,
  groupToggle: Na,
  editRow: Sa,
  editCell: Da,
  editInput: Ma,
  commandCell: Ca,
  commandButton: za,
  data: Ea,
  table: Ia,
  header: Aa,
  center: ja,
  right: Ta,
  sortButton: La,
  sortIndicator: Pa,
  sortIndex: Ra,
  cell: Ba,
  clickable: qa,
  frozen: Fa,
  selected: Ha,
  resizeHandle: Ka,
  filterCell: Ua,
  filterSelect: Wa,
  filterInput: Xa,
  empty: Va,
  loading: Ga,
  visuallyHidden: Ya
}, Za = {
  Ascending: "ascending",
  Descending: "descending"
};
function js(e, t) {
  return e.filterable ?? t;
}
function Ja(e, t) {
  return e.sortable ?? t;
}
function Qa(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function Lv({
  columns: e,
  rows: t,
  rowKey: n,
  allowSorting: r = !1,
  allowMultiColumnSorting: i = !1,
  showSortIndex: c = !1,
  allowFiltering: d = !1,
  filterCaseSensitivity: o = "CaseInsensitive",
  logicalOperator: l = "And",
  allowPaging: a = !1,
  pageSize: u = 10,
  pageSizeOptions: f,
  pageNumbersCount: k = 5,
  pagerPosition: v = "Bottom",
  showPagingSummary: $ = !0,
  showPageSizeSelector: y = !0,
  selectionMode: g = "None",
  selectedKeys: _,
  onSelectionChange: p,
  showColumnPicker: x = !1,
  columnPickerText: w = "Columns",
  allowColumnResize: m = !1,
  allowColumnReorder: C = !1,
  allowGrouping: b = !1,
  groupPanelText: N = "Drag a column header here to group",
  groupExpanded: A = !0,
  editMode: M = "None",
  allowRowCreate: I = !1,
  onRowUpdate: O,
  onRowCreate: h,
  onRowDelete: S,
  isLoading: L = !1,
  empty: E = "No records found",
  ariaLabel: j,
  className: T,
  onRowClick: F
}) {
  const [G, Y] = X([]), [U, ne] = X(
    /* @__PURE__ */ new Map()
  ), [le, te] = X(1), [q, ie] = X(u), [J, de] = X(
    () => e.map((P, R) => Kn(P, R))
  ), [ae, ve] = X(
    () => new Set(
      e.map((P, R) => P.visible !== !1 ? Kn(P, R) : "").filter(Boolean)
    )
  ), [$e, Re] = X({}), [we, Xe] = X(!1), [be, Ze] = X(null), [Ve, Le] = X(
    null
  ), [tt, Qe] = X(null), [et, V] = X({}), z = ee(null), K = ee(null), se = xe(() => {
    const P = /* @__PURE__ */ new Map();
    return e.forEach((R, ce) => P.set(Kn(R, ce), R)), P;
  }, [e]), fe = xe(
    () => J.filter((P) => ae.has(P)).map((P) => ({ key: P, column: se.get(P) })).filter(
      (P) => P.column != null
    ),
    [J, ae, se]
  ), re = xe(
    () => la(fe, $e),
    [fe, $e]
  ), ge = M !== "None" || S != null || I, Se = xe(
    () => ua(
      t,
      { sorts: G, filters: U, pageNumber: le, pageSize: q },
      {
        logicalOperator: l,
        caseSensitivity: o,
        types: Object.fromEntries(
          e.filter((P) => P.type != null && P.property != null).map((P) => [
            P.property,
            P.type
          ])
        )
      }
    ),
    [
      t,
      G,
      U,
      le,
      q,
      l,
      o,
      e
    ]
  ), Be = xe(
    () => be ? e.find((P) => P.property === be) : void 0,
    [be, e]
  ), Je = xe(
    () => Ve ?? new Set(
      A ? Se.items.map(
        (P) => String(zn(P, be ?? "") ?? "")
      ) : []
    ),
    [Ve, A, Se.items, be]
  ), ut = xe(
    () => oa(
      Se.items,
      be ?? void 0,
      Be,
      Je,
      zn,
      (P) => Is(P, Be?.format)
    ),
    [Se.items, be, Be, Je]
  ), vt = xe(
    () => be ? fe.filter((P) => P.column.property !== be) : fe,
    [fe, be]
  ), Q = (P) => {
    P !== "" && Y(ia(G, P, { multi: i }));
  }, Me = (P, R) => {
    ne((ce) => {
      const he = new Map(ce);
      return he.set(P, R), he;
    }), te(1);
  }, nt = (P) => {
    ie(P), te(1);
  }, Gt = (P) => {
    if (g === "None") return;
    const R = n(P), ce = _ ?? [];
    let he;
    g === "Single" ? he = ce.length === 1 && ce[0] === R ? [] : [R] : he = ce.includes(R) ? ce.filter((Ie) => Ie !== R) : [...ce, R], p?.(he);
  }, Nt = (P) => {
    F?.(P);
  }, Ce = (P, R, ce) => {
    z.current = { key: P, startX: R, startWidth: ce };
  }, Ge = (P) => {
    const R = z.current;
    if (!R) return;
    const ce = P - R.startX, he = Math.max(48, R.startWidth + ce);
    Re((Ie) => ({ ...Ie, [R.key]: `${he}px` }));
  }, kt = () => {
    z.current = null;
  }, Pt = (P) => {
    K.current = P;
  }, sn = (P) => {
    const R = K.current;
    K.current = null, !(!R || R === P) && de((ce) => {
      const he = [...ce], Ie = he.indexOf(R), Ae = he.indexOf(P);
      return Ie < 0 || Ae < 0 ? ce : (he.splice(Ie, 1), he.splice(Ae, 0, R), he);
    });
  }, W = (P) => {
    ve((R) => {
      const ce = new Set(R);
      return ce.has(P) ? ce.delete(P) : ce.add(P), ce;
    });
  }, ue = () => {
    const P = K.current;
    if (K.current = null, !P || !b) return;
    const ce = se.get(P)?.property;
    ce && (Ze(ce), Le(null));
  }, Pe = () => {
    Ze(null), Le(null);
  }, He = (P) => {
    Le((R) => {
      const ce = R ?? new Set(
        A ? Se.items.map(
          (Ie) => String(zn(Ie, be ?? "") ?? "")
        ) : []
      ), he = new Set(ce);
      return he.has(P) ? he.delete(P) : he.add(P), he;
    });
  }, Rt = (P) => {
    const R = {};
    e.forEach((ce) => {
      ce.property && (R[ce.property] = zn(P, ce.property));
    }), V(R), Qe(String(n(P)));
  }, St = () => {
    const P = {};
    e.forEach((R) => {
      R.property && R.type === "boolean" && (P[R.property] = !1);
    }), V(P), Qe("__new__");
  }, H = () => {
    Qe(null), V({});
  }, Z = (P) => {
    if (tt === "__new__") {
      const R = Object.fromEntries(
        e.filter((ce) => ce.property).map((ce) => [ce.property, et[ce.property]])
      );
      h?.(R);
    } else if (P != null) {
      const R = { ...P, ...et };
      O?.(P, R);
    }
    H();
  }, oe = a && (v === "Top" || v === "TopAndBottom"), pe = a && (v === "Bottom" || v === "TopAndBottom"), _e = d && e.some((P) => js(P, d)), ke = (P, R, ce) => P.render ? P.render(R, { index: 0 }) : Is(zn(R, P.property), P.format), je = (P) => {
    const R = [ye.cell];
    return P.align === "center" && R.push(ye.center), P.align === "right" && R.push(ye.right), P.frozen && R.push(ye.frozen), R.join(" ");
  };
  return /* @__PURE__ */ D("div", { className: [ye.grid, T].filter(Boolean).join(" "), children: [
    oe && /* @__PURE__ */ s(
      _s,
      {
        pageNumber: Se.pageNumber,
        pageSize: Se.pageSize,
        count: Se.total,
        pageSizeOptions: f,
        pageNumbersCount: k,
        showSummary: $,
        showPageSizeSelector: y,
        ariaLabel: pe ? "Pagination (top)" : "Pagination",
        onPageChange: te,
        onPageSizeChange: nt
      }
    ),
    (b || I || x) && /* @__PURE__ */ D("div", { className: ye.toolbar, children: [
      b && /* @__PURE__ */ s(
        "div",
        {
          className: [
            ye.groupPanel,
            be ? ye.groupPanelActive : ""
          ].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: b ? (P) => P.preventDefault() : void 0,
          onDrop: b ? ue : void 0,
          children: be ? /* @__PURE__ */ D("span", { className: ye.groupChip, children: [
            Be?.title ?? be,
            ":",
            " ",
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: ye.groupRemove,
                onClick: Pe,
                "aria-label": `Remove group by ${Be?.title ?? be}`,
                children: /* @__PURE__ */ s(Oe, { name: "close", size: "sm" })
              }
            )
          ] }) : /* @__PURE__ */ s("span", { className: ye.groupPanelText, children: N })
        }
      ),
      I && /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          className: ye.pickerButton,
          onClick: St,
          children: "Add row"
        }
      ),
      x && /* @__PURE__ */ D("div", { className: ye.picker, children: [
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: ye.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": we,
            onClick: () => Xe((P) => !P),
            children: w
          }
        ),
        we && /* @__PURE__ */ s(
          "div",
          {
            className: ye.pickerPanel,
            role: "menu",
            "aria-label": w,
            children: e.map((P, R) => {
              const ce = Kn(P, R);
              return /* @__PURE__ */ D("label", { className: ye.pickerItem, children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "checkbox",
                    checked: ae.has(ce),
                    onChange: () => W(ce)
                  }
                ),
                P.title ?? P.property
              ] }, ce);
            })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ D("div", { className: ye.data, children: [
      /* @__PURE__ */ D(
        "table",
        {
          className: ye.table,
          role: "grid",
          "aria-rowcount": Se.total + 1,
          "aria-label": j,
          "aria-busy": L || void 0,
          children: [
            /* @__PURE__ */ D("colgroup", { children: [
              vt.map(({ key: P, column: R }) => /* @__PURE__ */ s(
                "col",
                {
                  style: {
                    width: $e[P] ?? R.width,
                    minWidth: R.minWidth,
                    maxWidth: R.maxWidth
                  }
                },
                P
              )),
              ge && /* @__PURE__ */ s("col", { style: { width: "8rem" } })
            ] }),
            /* @__PURE__ */ D("thead", { children: [
              /* @__PURE__ */ D("tr", { children: [
                vt.map(({ key: P, column: R }) => {
                  const ce = Ja(R, r), he = G.find((ze) => ze.property === R.property), Ie = he ? G.indexOf(he) + 1 : 0, Ae = R.align ?? "left";
                  return /* @__PURE__ */ D(
                    "th",
                    {
                      "aria-sort": ce && he ? Za[he.sortOrder] : "none",
                      className: [
                        ye.header,
                        Ae === "center" ? ye.center : "",
                        Ae === "right" ? ye.right : "",
                        R.frozen ? ye.frozen : ""
                      ].filter(Boolean).join(" "),
                      style: R.frozen ? { left: re[P] } : void 0,
                      scope: "col",
                      draggable: C || b || void 0,
                      onDragStart: C || b ? (ze) => {
                        ze.dataTransfer && (ze.dataTransfer.effectAllowed = "move"), Pt(P);
                      } : void 0,
                      onDragOver: C ? (ze) => ze.preventDefault() : void 0,
                      onDrop: C ? () => sn(P) : void 0,
                      children: [
                        ce ? /* @__PURE__ */ D(
                          "button",
                          {
                            type: "button",
                            className: ye.sortButton,
                            onClick: () => R.property != null && Q(R.property),
                            "aria-label": he ? he.sortOrder === "Ascending" ? `Sort ${R.title ?? R.property} descending` : `Sort ${R.title ?? R.property} ascending` : `Sort ${R.title ?? R.property} ascending`,
                            children: [
                              R.title ?? R.property,
                              he && /* @__PURE__ */ s(
                                "span",
                                {
                                  className: ye.sortIndicator,
                                  "aria-hidden": "true",
                                  children: he.sortOrder === "Ascending" ? "▲" : "▼"
                                }
                              ),
                              Ie > 1 && c && /* @__PURE__ */ s("span", { className: ye.sortIndex, children: Ie })
                            ]
                          }
                        ) : R.title ?? R.property,
                        m && /* @__PURE__ */ s(
                          "span",
                          {
                            className: ye.resizeHandle,
                            "data-dx-grid-resize": !0,
                            role: "separator",
                            "aria-orientation": "vertical",
                            "aria-label": `Resize ${R.title ?? R.property}`,
                            onMouseDown: (ze) => {
                              ze.preventDefault(), ze.stopPropagation();
                              const at = $e[P] ?? R.width, Dt = at ? parseFloat(at) : 96;
                              Ce(
                                P,
                                ze.clientX,
                                Number.isFinite(Dt) ? Dt : 96
                              );
                            },
                            onMouseMove: (ze) => {
                              z.current?.key === P && Ge(ze.clientX);
                            },
                            onMouseUp: kt,
                            onMouseLeave: () => {
                              z.current?.key === P && kt();
                            }
                          }
                        )
                      ]
                    },
                    P
                  );
                }),
                ge && /* @__PURE__ */ s("th", { className: ye.header, scope: "col", children: "Actions" })
              ] }),
              _e && /* @__PURE__ */ s("tr", { children: vt.map(({ key: P, column: R }) => {
                if (!js(R, d))
                  return /* @__PURE__ */ s("td", { className: ye.filterCell }, P);
                const ce = U.get(R.property ?? "");
                return /* @__PURE__ */ D("td", { className: ye.filterCell, children: [
                  /* @__PURE__ */ D(
                    "label",
                    {
                      className: ye.visuallyHidden,
                      htmlFor: `df-${R.property}`,
                      children: [
                        "Filter ",
                        R.title ?? R.property
                      ]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "select",
                    {
                      id: `df-${R.property}`,
                      className: ye.filterSelect,
                      value: ce?.operator ?? fa(R.type ?? "string"),
                      onChange: (he) => Me(R.property ?? "", {
                        ...ce,
                        operator: he.target.value
                      }),
                      "aria-label": `${R.title ?? R.property} operator`,
                      children: or.filter((he) => he !== "Custom").map(
                        (he) => /* @__PURE__ */ s("option", { value: he, children: he }, he)
                      )
                    }
                  ),
                  /* @__PURE__ */ s(
                    "input",
                    {
                      className: ye.filterInput,
                      value: ce?.value ?? "",
                      onChange: (he) => Me(R.property ?? "", {
                        ...ce,
                        value: he.target.value
                      }),
                      placeholder: `Filter ${R.title ?? R.property}`,
                      "aria-label": `${R.title ?? R.property} value`
                    }
                  )
                ] }, P);
              }) })
            ] }),
            /* @__PURE__ */ D("tbody", { children: [
              tt === "__new__" && /* @__PURE__ */ D("tr", { className: ye.editRow, children: [
                vt.map(({ key: P, column: R }) => /* @__PURE__ */ s("td", { className: ye.editCell, children: R.property && /* @__PURE__ */ s(
                  "input",
                  {
                    className: ye.editInput,
                    type: R.type === "number" ? "number" : R.type === "boolean" ? "checkbox" : "text",
                    checked: R.type === "boolean" ? !!et[R.property] : void 0,
                    value: R.type === "boolean" ? void 0 : String(et[R.property] ?? ""),
                    onChange: (ce) => V((he) => ({
                      ...he,
                      [R.property]: R.type === "boolean" ? ce.target.checked : ce.target.value
                    })),
                    "aria-label": `${R.title ?? R.property} (new)`
                  }
                ) }, P)),
                ge && /* @__PURE__ */ D("td", { className: ye.editCell, children: [
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      className: ye.commandButton,
                      onClick: () => Z(),
                      children: "Save"
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      className: ye.commandButton,
                      onClick: H,
                      children: "Cancel"
                    }
                  )
                ] })
              ] }),
              ut.map((P) => {
                if (P.type === "group" && P.group) {
                  const Ae = Je.has(P.group.key);
                  return /* @__PURE__ */ s(
                    "tr",
                    {
                      className: ye.groupRow,
                      children: /* @__PURE__ */ s(
                        "td",
                        {
                          colSpan: vt.length + (ge ? 1 : 0),
                          className: ye.groupCell,
                          children: /* @__PURE__ */ D(
                            "button",
                            {
                              type: "button",
                              className: ye.groupToggle,
                              "aria-expanded": Ae,
                              onClick: () => He(P.group.key),
                              children: [
                                /* @__PURE__ */ s("span", { "aria-hidden": "true", children: Ae ? "▼" : "▶" }),
                                P.group.title,
                                ": ",
                                P.group.display,
                                " (",
                                P.group.count,
                                ")"
                              ]
                            }
                          )
                        }
                      )
                    },
                    `group-${P.group.key}`
                  );
                }
                const R = P.row, ce = n(R), he = (_ ?? []).includes(ce), Ie = tt != null && tt === String(ce);
                return /* @__PURE__ */ D(
                  "tr",
                  {
                    className: [
                      F || g !== "None" ? ye.clickable : "",
                      he ? ye.selected : "",
                      Ie ? ye.editRow : ""
                    ].filter(Boolean).join(" "),
                    "aria-selected": g !== "None" ? he : void 0,
                    onClick: F || g !== "None" ? (Ae) => {
                      Qa(Ae.target) || (Nt(R), Gt(R));
                    } : void 0,
                    children: [
                      vt.map(({ key: Ae, column: ze }) => /* @__PURE__ */ s(
                        "td",
                        {
                          className: je(ze),
                          style: ze.frozen ? { left: re[Ae] } : void 0,
                          children: Ie && ze.property ? /* @__PURE__ */ s(
                            "input",
                            {
                              className: ye.editInput,
                              type: ze.type === "number" ? "number" : ze.type === "boolean" ? "checkbox" : "text",
                              checked: ze.type === "boolean" ? !!et[ze.property] : void 0,
                              value: ze.type === "boolean" ? void 0 : String(et[ze.property] ?? ""),
                              onChange: (at) => V((Dt) => ({
                                ...Dt,
                                [ze.property]: ze.type === "boolean" ? at.target.checked : at.target.value
                              })),
                              "aria-label": `${ze.title ?? ze.property} (edit)`
                            }
                          ) : ke(ze, R)
                        },
                        Ae
                      )),
                      ge && /* @__PURE__ */ s("td", { className: ye.commandCell, children: Ie ? /* @__PURE__ */ D(Ne, { children: [
                        /* @__PURE__ */ s(
                          "button",
                          {
                            type: "button",
                            className: ye.commandButton,
                            onClick: () => Z(R),
                            children: "Save"
                          }
                        ),
                        /* @__PURE__ */ s(
                          "button",
                          {
                            type: "button",
                            className: ye.commandButton,
                            onClick: H,
                            children: "Cancel"
                          }
                        )
                      ] }) : /* @__PURE__ */ D(Ne, { children: [
                        M !== "None" && /* @__PURE__ */ s(
                          "button",
                          {
                            type: "button",
                            className: ye.commandButton,
                            onClick: () => Rt(R),
                            children: "Edit"
                          }
                        ),
                        S && /* @__PURE__ */ s(
                          "button",
                          {
                            type: "button",
                            className: ye.commandButton,
                            onClick: () => S(R),
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
      Se.items.length === 0 && !L && /* @__PURE__ */ s("div", { className: ye.empty, children: E }),
      L && /* @__PURE__ */ s("div", { className: ye.loading, role: "status", children: "Loading…" })
    ] }),
    pe && /* @__PURE__ */ s(
      _s,
      {
        pageNumber: Se.pageNumber,
        pageSize: Se.pageSize,
        count: Se.total,
        pageSizeOptions: f,
        pageNumbersCount: k,
        showSummary: $,
        showPageSizeSelector: y,
        ariaLabel: oe ? "Pagination (bottom)" : "Pagination",
        onPageChange: te,
        onPageSizeChange: nt
      }
    )
  ] });
}
const ei = "_wrap_1e4xo_1", ti = "_grid_1e4xo_7", ni = "_stacked_1e4xo_13", si = "_item_1e4xo_19", ri = "_empty_1e4xo_25", En = {
  wrap: ei,
  grid: ti,
  stacked: ni,
  item: si,
  empty: ri
};
function Pv({
  data: e,
  pageSize: t = 10,
  pageSizeOptions: n,
  wrapItems: r = !1,
  itemTemplate: i,
  emptyMessage: c = "No records found",
  emptyTemplate: d,
  loadingTemplate: o,
  isLoading: l = !1,
  showPageSizeSelector: a = !0,
  className: u,
  ariaLabel: f = "Data list"
}) {
  const [k, v] = X(1), [$, y] = X(t), g = e.length, _ = Math.max(1, Math.ceil(g / $)), p = Math.min(Math.max(1, k), _), x = xe(() => {
    const m = (p - 1) * $;
    return e.slice(m, m + $);
  }, [e, p, $]), w = r ? En.grid : En.stacked;
  return /* @__PURE__ */ D(
    "div",
    {
      className: [En.wrap, u].filter(Boolean).join(" "),
      "aria-label": f,
      children: [
        l && o != null ? o : g === 0 ? d ?? /* @__PURE__ */ s("div", { className: En.empty, children: c }) : /* @__PURE__ */ s("div", { className: w, children: x.map((m, C) => /* @__PURE__ */ s("div", { className: En.item, children: i ? i(m, C) : String(m) }, C)) }),
        /* @__PURE__ */ s(
          _s,
          {
            pageNumber: p,
            pageSize: $,
            count: g,
            pageSizeOptions: n,
            showPageSizeSelector: a,
            onPageChange: v,
            onPageSizeChange: (m) => {
              y(m), v(1);
            }
          }
        )
      ]
    }
  );
}
const oi = "_label_1qfpw_1", li = {
  label: oi
}, Rv = Fe(function({ className: t, children: n, ...r }, i) {
  return /* @__PURE__ */ s(
    "label",
    {
      ref: i,
      className: [li.label, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}), ai = "_textbox_1wq7t_1", ii = "_invalid_1wq7t_37", ci = "_xs_1wq7t_44", di = "_sm_1wq7t_50", ui = "_md_1wq7t_56", fi = "_lg_1wq7t_62", _i = "_xl_1wq7t_68", as = {
  textbox: ai,
  invalid: ii,
  xs: ci,
  sm: di,
  md: ui,
  lg: fi,
  xl: _i
}, pi = Fe(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    visible: i = !0,
    type: c = "text",
    ...d
  }, o) {
    return i === !1 ? null : /* @__PURE__ */ s(
      "input",
      {
        ref: o,
        type: c,
        "data-size": t,
        className: [
          as.textbox,
          as[t],
          n ? as.invalid : null,
          r
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...d
      }
    );
  }
), Bv = pi, hi = "_checkbox_e1een_1", mi = {
  checkbox: hi
}, qv = Fe(
  function({ className: t, indeterminate: n = !1, ...r }, i) {
    const c = ee(null);
    return me(() => {
      c.current && (c.current.indeterminate = n);
    }, [n]), /* @__PURE__ */ s(
      "input",
      {
        ref: (d) => {
          c.current = d, typeof i == "function" ? i(d) : i && (i.current = d);
        },
        type: "checkbox",
        className: [mi.checkbox, t].filter(Boolean).join(" "),
        ...r
      }
    );
  }
), gi = {
  switch: "_switch_1y0ld_1"
}, xi = Fe(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ s(
    "input",
    {
      ref: r,
      type: "checkbox",
      role: "switch",
      className: [gi.switch, t].filter(Boolean).join(" "),
      ...n
    }
  );
}), yi = "_trigger_18hdv_1", bi = "_tooltip_18hdv_7", vi = "_top_18hdv_34", ki = "_right_18hdv_40", wi = "_bottom_18hdv_46", $i = "_left_18hdv_52", Oi = "_arrow_18hdv_58", Ni = "_floating_18hdv_70", Zt = {
  trigger: yi,
  tooltip: bi,
  "se-tooltip-in": "_se-tooltip-in_18hdv_1",
  top: vi,
  right: ki,
  bottom: wi,
  left: $i,
  arrow: Oi,
  floating: Ni,
  "se-floating-tooltip-in": "_se-floating-tooltip-in_18hdv_1"
}, Un = 8;
function Si(e, t) {
  switch (t) {
    case "bottom":
      return {
        top: e.bottom + Un,
        left: e.left + e.width / 2,
        transform: "translate(-50%, 0)"
      };
    case "left":
      return {
        top: e.top + e.height / 2,
        left: e.left - Un,
        transform: "translate(-100%, -50%)"
      };
    case "right":
      return {
        top: e.top + e.height / 2,
        left: e.right + Un,
        transform: "translate(0, -50%)"
      };
    default:
      return {
        top: e.top - Un,
        left: e.left + e.width / 2,
        transform: "translate(-50%, -100%)"
      };
  }
}
function Fv({
  content: e,
  children: t,
  placement: n = "top",
  delayMs: r = 300,
  durationMs: i,
  targetSelector: c,
  className: d
}) {
  const o = qe(), l = ee(null), a = ee(null), u = ee(null), [f, k] = X(!1), [v, $] = X(null), y = () => {
    l.current !== null && (window.clearTimeout(l.current), l.current = null), a.current !== null && (window.clearTimeout(a.current), a.current = null);
  }, g = () => {
    l.current = window.setTimeout(() => {
      k(!0), i != null && (a.current = window.setTimeout(() => k(!1), i));
    }, r);
  }, _ = () => {
    y(), k(!1);
  };
  if (me(() => () => y(), []), me(() => {
    if (c || !f) return;
    const x = (w) => {
      w.key === "Escape" && _();
    };
    return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  }, [c, f]), me(() => {
    if (!c) return;
    let x = null, w = null, m = null;
    const C = () => {
      x !== null && (window.clearTimeout(x), x = null);
    }, b = () => {
      w !== null && (window.clearTimeout(w), w = null);
    }, N = () => {
      C(), b(), m = null, $(null);
    }, A = (L) => {
      C(), b(), m = L, x = window.setTimeout(() => {
        x = null, $(L), i != null && (w = window.setTimeout(N, i));
      }, r);
    }, M = (L) => L instanceof Element ? L.closest(c) : null, I = (L) => {
      const E = M(L.target);
      !E || E === m || A(E);
    }, O = (L) => {
      const E = M(L.target);
      if (!E || E !== m) return;
      const j = L.relatedTarget;
      j instanceof Element && E.contains(j) || N();
    }, h = (L) => {
      L.key === "Escape" && N();
    }, S = () => N();
    return document.addEventListener("mouseover", I), document.addEventListener("mouseout", O), document.addEventListener("focusin", I), document.addEventListener("focusout", O), document.addEventListener("keydown", h), document.addEventListener("scroll", S, !0), window.addEventListener("resize", S), () => {
      C(), b(), document.removeEventListener("mouseover", I), document.removeEventListener("mouseout", O), document.removeEventListener("focusin", I), document.removeEventListener("focusout", O), document.removeEventListener("keydown", h), document.removeEventListener("scroll", S, !0), window.removeEventListener("resize", S), m = null, $(null);
    };
  }, [c, r, i]), fs(() => {
    const x = v;
    if (!x) return;
    const w = x.getAttribute("aria-describedby");
    return x.setAttribute(
      "aria-describedby",
      [w, o].filter(Boolean).join(" ")
    ), () => {
      w == null ? x.removeAttribute("aria-describedby") : x.setAttribute("aria-describedby", w);
    };
  }, [v, o]), fs(() => {
    const x = u.current, w = v;
    !x || !w || Object.assign(
      x.style,
      Si(w.getBoundingClientRect(), n)
    );
  }, [v, n]), c)
    return v ? /* @__PURE__ */ D(
      "span",
      {
        ref: u,
        role: "tooltip",
        id: o,
        className: [
          Zt.tooltip,
          Zt[n],
          Zt.floating,
          d
        ].filter(Boolean).join(" "),
        children: [
          e,
          /* @__PURE__ */ s("span", { className: Zt.arrow, "aria-hidden": "true" })
        ]
      }
    ) : null;
  const p = dt(t) ? ys(t, {
    "aria-describedby": [
      t.props["aria-describedby"],
      f ? o : null
    ].filter((x) => typeof x == "string").join(" ") || void 0
  }) : t;
  return (
    // Presentational hit-area: hover/focus handlers here, semantics and
    // keyboard interaction live on the child trigger.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ D(
      "span",
      {
        className: [Zt.trigger, d].filter(Boolean).join(" "),
        onMouseEnter: g,
        onMouseLeave: _,
        onFocus: g,
        onBlur: _,
        children: [
          p,
          f && /* @__PURE__ */ D(
            "span",
            {
              role: "tooltip",
              id: o,
              className: [Zt.tooltip, Zt[n]].filter(Boolean).join(" "),
              children: [
                e,
                /* @__PURE__ */ s("span", { className: Zt.arrow, "aria-hidden": "true" })
              ]
            }
          )
        ]
      }
    )
  );
}
const Di = "_dialog_18an3_1", Mi = "_sm_18an3_72", Ci = "_resizable_18an3_78", zi = "_md_18an3_81", Ei = "_lg_18an3_85", Ii = "_header_18an3_89", Ai = "_title_18an3_100", ji = "_description_18an3_107", Ti = "_close_18an3_114", Li = "_body_18an3_144", Pi = "_footer_18an3_156", qt = {
  dialog: Di,
  "se-dialog-in": "_se-dialog-in_18an3_1",
  sm: Mi,
  resizable: Ci,
  md: zi,
  lg: Ei,
  header: Ii,
  title: Ai,
  description: ji,
  close: Ti,
  body: Li,
  footer: Pi
};
function Ri({
  open: e,
  onClose: t,
  title: n,
  description: r,
  children: i,
  footer: c,
  size: d = "md",
  width: o,
  height: l,
  closeOnOverlayClick: a = !0,
  closeOnEsc: u = !0,
  resizable: f = !1,
  canClose: k,
  className: v
}) {
  const $ = ee(null), y = qe(), g = qe(), _ = ee(t);
  me(() => {
    _.current = t;
  });
  const p = ee(k);
  me(() => {
    p.current = k;
  });
  const x = ee(u);
  me(() => {
    x.current = u;
  });
  const w = ee(!1), m = ee(!1), C = B(() => {
    if (w.current) return;
    const N = p.current?.();
    if (N instanceof Promise) {
      N.then((A) => {
        A && !w.current && (w.current = !0, _.current());
      });
      return;
    }
    N !== !1 && (w.current = !0, _.current());
  }, []), b = B(() => {
    if (m.current) {
      m.current = !1;
      return;
    }
    _.current();
  }, []);
  return me(() => {
    const N = $.current;
    if (N)
      if (e && !N.open) {
        const A = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        N.showModal(), (N.querySelector(
          'button[aria-label="Close dialog"]'
        ) ?? N.querySelector("button"))?.focus();
        const I = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const O = (h) => {
          h.preventDefault(), x.current && C();
        };
        return N.addEventListener("cancel", O), () => {
          N.removeEventListener("cancel", O), document.body.style.overflow = I, A?.focus({ preventScroll: !0 });
        };
      } else !e && N.open && (m.current = w.current, w.current = !1, N.close());
  }, [e, C]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button.
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ D(
    "dialog",
    {
      ref: $,
      className: [
        qt.dialog,
        qt[d],
        f ? qt.resizable : null,
        v
      ].filter(Boolean).join(" "),
      style: {
        width: o ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: o != null ? "none" : void 0,
        height: l ?? void 0
      },
      onClose: b,
      onClick: (N) => {
        N.target === $.current && a && C();
      },
      "aria-modal": "true",
      "aria-labelledby": n ? y : void 0,
      "aria-describedby": r ? g : void 0,
      children: [
        n && /* @__PURE__ */ D("header", { className: qt.header, children: [
          /* @__PURE__ */ D("div", { children: [
            /* @__PURE__ */ s("h2", { id: y, className: qt.title, children: n }),
            r && /* @__PURE__ */ s("p", { id: g, className: qt.description, children: r })
          ] }),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: qt.close,
              onClick: () => {
                C();
              },
              "aria-label": "Close dialog",
              children: /* @__PURE__ */ s(Oe, { name: "close", size: "sm" })
            }
          )
        ] }),
        i && /* @__PURE__ */ s("div", { className: qt.body, children: i }),
        c && /* @__PURE__ */ s("footer", { className: qt.footer, children: c })
      ]
    }
  );
}
const Bi = "_typography_1jy8x_1", qi = "_h1_1jy8x_39", Fi = "_h2_1jy8x_45", Hi = "_h3_1jy8x_51", Ki = "_h4_1jy8x_57", Ui = "_h5_1jy8x_63", Wi = "_h6_1jy8x_69", Xi = "_button_1jy8x_99", Vi = "_caption_1jy8x_106", Gi = "_overline_1jy8x_112", is = {
  typography: Bi,
  "display-1": "_display-1_1jy8x_8",
  "display-2": "_display-2_1jy8x_13",
  "display-3": "_display-3_1jy8x_18",
  "display-4": "_display-4_1jy8x_23",
  "display-5": "_display-5_1jy8x_28",
  "display-6": "_display-6_1jy8x_33",
  h1: qi,
  h2: Fi,
  h3: Hi,
  h4: Ki,
  h5: Ui,
  h6: Wi,
  "subtitle-1": "_subtitle-1_1jy8x_75",
  "subtitle-2": "_subtitle-2_1jy8x_81",
  "body-1": "_body-1_1jy8x_87",
  "body-2": "_body-2_1jy8x_92",
  button: Xi,
  caption: Vi,
  overline: Gi,
  "align-left": "_align-left_1jy8x_121",
  "align-center": "_align-center_1jy8x_125",
  "align-right": "_align-right_1jy8x_129",
  "align-justify": "_align-justify_1jy8x_133"
}, Yi = {
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
}, Zi = {
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
}, Ji = {
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
}, Qi = {
  Left: "align-left",
  Right: "align-right",
  Center: "align-center",
  Justify: "align-justify",
  Start: "align-left",
  End: "align-right",
  JustifyAll: "align-justify"
}, ec = Fe(function({
  textStyle: t = "Body1",
  tagName: n = "Auto",
  textAlign: r,
  text: i,
  visible: c = !0,
  className: d,
  children: o,
  ...l
}, a) {
  if (c === !1) return null;
  const u = n === "Auto" ? Yi[t] : Ji[n];
  return /* @__PURE__ */ s(
    u,
    {
      ref: a,
      className: [
        is.typography,
        is[Zi[t]],
        r ? is[Qi[r]] : null,
        d
      ].filter(Boolean).join(" "),
      ...l,
      children: i ?? o
    }
  );
}), ir = $n(null);
function Hv() {
  const e = nn(ir);
  if (!e)
    throw new Error("useDialog must be used within a <DialogProvider>");
  return e;
}
function Kv({ children: e }) {
  const [t, n] = X([]), r = ee(0), i = xe(
    () => ({
      confirm: (o = {}) => new Promise((l) => {
        r.current += 1;
        const a = r.current;
        n((u) => [...u, { seq: a, kind: "confirm", options: o, resolve: l }]);
      }),
      alert: (o = {}) => new Promise((l) => {
        r.current += 1;
        const a = r.current;
        n((u) => [...u, { seq: a, kind: "alert", options: o, resolve: l }]);
      })
    }),
    []
  ), c = t[0], d = (o) => {
    c && (c.kind === "confirm" ? c.resolve(o) : c.resolve(), n((l) => l.slice(1)));
  };
  return /* @__PURE__ */ D(ir.Provider, { value: i, children: [
    e,
    /* @__PURE__ */ s(
      Ri,
      {
        open: t.length > 0,
        onClose: () => d(!1),
        title: c?.options.title ?? (c?.kind === "confirm" ? "Confirm" : "Alert"),
        size: c?.options.size,
        footer: c?.kind === "confirm" ? /* @__PURE__ */ D(Ne, { children: [
          /* @__PURE__ */ s(os, { variant: "text", onClick: () => d(!1), children: c.options.cancelText ?? "Cancel" }),
          /* @__PURE__ */ s(
            os,
            {
              severity: c.options.tone ?? "primary",
              onClick: () => d(!0),
              children: c.options.confirmText ?? "Confirm"
            }
          )
        ] }) : /* @__PURE__ */ s(os, { onClick: () => d(!0), children: c?.kind === "alert" ? c.options.okText ?? "OK" : "OK" }),
        children: c?.options.message != null && /* @__PURE__ */ s(ec, { textStyle: "Body1", children: c.options.message })
      },
      c?.seq ?? 0
    )
  ] });
}
const tc = "_viewport_lo2x9_1", nc = "_topLeft_lo2x9_13", sc = "_topRight_lo2x9_20", rc = "_bottomLeft_lo2x9_25", oc = "_toast_lo2x9_30", lc = "_leaving_lo2x9_61", ac = "_info_lo2x9_77", ic = "_success_lo2x9_86", cc = "_warning_lo2x9_95", dc = "_danger_lo2x9_104", uc = "_content_lo2x9_113", fc = "_title_lo2x9_118", _c = "_description_lo2x9_141", pc = "_dismiss_lo2x9_148", hc = "_actions_lo2x9_169", mc = "_action_lo2x9_169", gc = "_cancel_lo2x9_177", xc = "_progress_lo2x9_215", mt = {
  viewport: tc,
  topLeft: nc,
  topRight: sc,
  bottomLeft: rc,
  toast: oc,
  "se-toast-in": "_se-toast-in_lo2x9_1",
  leaving: lc,
  "se-toast-out": "_se-toast-out_lo2x9_1",
  info: ac,
  success: ic,
  warning: cc,
  danger: dc,
  content: uc,
  title: fc,
  description: _c,
  dismiss: pc,
  actions: hc,
  action: mc,
  cancel: gc,
  progress: xc,
  "se-toast-progress": "_se-toast-progress_lo2x9_1"
}, cr = $n(null);
function Uv() {
  const e = nn(cr);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const yc = 200, bc = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function Wv({
  children: e,
  durationMs: t = 4e3,
  position: n = "bottom-right",
  pauseOnHover: r = !0,
  className: i
}) {
  const [c, d] = X([]), [o, l] = X(!1), a = ee([]), u = ee(/* @__PURE__ */ new Map()), f = ee(!1), k = ee(0), v = (O) => {
    f.current = O, l(O);
  }, $ = B((O) => {
    const h = u.current.get(O);
    h && (window.clearTimeout(h.timeoutId), h.remaining = Math.max(
      0,
      h.remaining - (Date.now() - h.startedAt)
    ));
  }, []), y = B((O) => {
    const h = u.current.get(O);
    h && (window.clearTimeout(h.timeoutId), u.current.delete(O));
  }, []), g = B(
    (O) => {
      y(O), d((h) => {
        const S = h.filter((L) => L.id !== O);
        return a.current = S, S;
      });
    },
    [y]
  ), _ = B(
    (O) => {
      const h = a.current.find((S) => S.id === O);
      !h || h.leaving || (h.onAutoClose?.(), g(O));
    },
    [g]
  ), p = B(
    (O) => {
      const h = u.current.get(O);
      !h || h.remaining <= 0 || (h.startedAt = Date.now(), h.timeoutId = window.setTimeout(() => _(O), h.remaining));
    },
    [_]
  ), x = B(() => {
    f.current || u.current.forEach((O, h) => $(h)), v(!0);
  }, [$]), w = B(() => {
    u.current.forEach((O, h) => p(h)), v(!1);
  }, [p]);
  me(() => {
    if (!r) return;
    const O = () => {
      document.hidden ? x() : w();
    };
    return document.addEventListener("visibilitychange", O), () => document.removeEventListener("visibilitychange", O);
  }, [r, x, w]);
  const m = B(
    (O) => {
      const h = a.current.find((S) => S.id === O);
      !h || h.leaving || (h.onDismiss?.(), d((S) => {
        const L = S.map(
          (E) => E.id === O ? { ...E, leaving: !0 } : E
        );
        return a.current = L, L;
      }), window.setTimeout(() => g(O), yc));
    },
    [g]
  ), C = B(
    (O) => {
      if (O.durationMs <= 0) return;
      const h = {
        remaining: O.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      u.current.set(O.id, h), f.current || p(O.id);
    },
    [p]
  ), b = B(
    (O) => {
      const h = a.current.find((L) => L.id === O.id), S = {
        id: O.id ?? ++k.current,
        title: O.title,
        description: O.description,
        severity: O.severity ?? "info",
        durationMs: O.durationMs ?? t,
        action: O.action,
        cancel: O.cancel,
        dismissible: O.dismissible ?? !0,
        closeOnClick: O.closeOnClick ?? !1,
        showProgress: O.showProgress ?? !1,
        position: O.position ?? n,
        onDismiss: O.onDismiss,
        onAutoClose: O.onAutoClose
      };
      d((L) => {
        const E = h ? L.map(
          (j) => j.id === S.id ? { ...S, leaving: !1 } : j
        ) : [...L, S];
        return a.current = E, E;
      }), h && y(S.id), C(S);
    },
    [t, n, C, y]
  ), N = xe(() => ({ toast: b }), [b]), A = xe(
    () => Array.from(/* @__PURE__ */ new Set([n, ...c.map((O) => O.position)])),
    [n, c]
  ), M = r ? x : void 0, I = r ? w : void 0;
  return /* @__PURE__ */ D(cr.Provider, { value: N, children: [
    e,
    A.map((O) => /* @__PURE__ */ s(
      "div",
      {
        className: [mt.viewport, mt[bc[O]], i].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: M,
        onMouseLeave: I,
        children: c.filter((h) => h.position === O).map((h) => /* @__PURE__ */ D(
          "div",
          {
            role: h.severity === "danger" ? "alert" : "status",
            "data-paused": o ? "true" : "false",
            "data-clickable": h.closeOnClick ? "true" : "false",
            className: [
              mt.toast,
              mt[h.severity],
              h.leaving ? mt.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: h.closeOnClick ? () => m(h.id) : void 0,
            children: [
              /* @__PURE__ */ D("div", { className: mt.content, children: [
                /* @__PURE__ */ s("div", { className: mt.title, children: h.title }),
                h.description && /* @__PURE__ */ s("div", { className: mt.description, children: h.description }),
                (h.action || h.cancel) && /* @__PURE__ */ D("div", { className: mt.actions, children: [
                  h.action && /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      className: mt.action,
                      onClick: () => {
                        h.action?.onClick?.(), m(h.id);
                      },
                      children: h.action.label
                    }
                  ),
                  h.cancel && /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      className: mt.cancel,
                      onClick: () => {
                        h.cancel?.onClick?.(), m(h.id);
                      },
                      children: h.cancel.label
                    }
                  )
                ] })
              ] }),
              h.dismissible && /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: mt.dismiss,
                  onClick: () => m(h.id),
                  "aria-label": "Dismiss notification",
                  children: /* @__PURE__ */ s(Oe, { name: "close", size: "sm" })
                }
              ),
              h.showProgress && h.durationMs > 0 && /* @__PURE__ */ s(
                "div",
                {
                  className: mt.progress,
                  style: { animationDuration: `${h.durationMs}ms` }
                }
              )
            ]
          },
          h.id
        ))
      },
      O
    ))
  ] });
}
const vc = "_alert_1ktjq_1", kc = "_xs_1ktjq_28", wc = "_sm_1ktjq_38", $c = "_lg_1ktjq_48", Oc = "_xl_1ktjq_58", Nc = "_primary_1ktjq_69", Sc = "_secondary_1ktjq_74", Dc = "_light_1ktjq_79", Mc = "_base_1ktjq_84", Cc = "_dark_1ktjq_89", zc = "_info_1ktjq_94", Ec = "_success_1ktjq_99", Ic = "_warning_1ktjq_104", Ac = "_danger_1ktjq_109", jc = "_flat_1ktjq_116", Tc = "_outlined_1ktjq_123", Lc = "_filled_1ktjq_132", Pc = "_text_1ktjq_139", Rc = "_icon_1ktjq_181", Bc = "_content_1ktjq_192", qc = "_title_1ktjq_197", Fc = "_body_1ktjq_203", Hc = "_dismiss_1ktjq_209", It = {
  alert: vc,
  xs: kc,
  sm: wc,
  lg: $c,
  xl: Oc,
  primary: Nc,
  secondary: Sc,
  light: Dc,
  base: Mc,
  dark: Cc,
  info: zc,
  success: Ec,
  warning: Ic,
  danger: Ac,
  flat: jc,
  outlined: Tc,
  filled: Lc,
  text: Pc,
  icon: Rc,
  content: Bc,
  title: qc,
  body: Fc,
  dismiss: Hc,
  "shade-lighter": "_shade-lighter_1ktjq_451",
  "shade-light": "_shade-light_1ktjq_451",
  "shade-dark": "_shade-dark_1ktjq_461",
  "shade-darker": "_shade-darker_1ktjq_465"
}, Kc = {
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
function Xv({
  // Intentional Radzen-parity breaking change (1.0): defaults were
  // severity="info" variant="flat" dismissible={false}; Radzen ships
  // AlertStyle.Base + Variant.Filled + AllowClose. Migrate by passing
  // the old values explicitly.
  severity: e = "base",
  variant: t = "filled",
  shade: n,
  size: r = "md",
  title: i,
  icon: c,
  showIcon: d = !0,
  children: o,
  dismissible: l = !0,
  onDismiss: a,
  visible: u,
  onVisibleChange: f,
  className: k,
  ...v
}) {
  const [$, y] = X(!1);
  if (u === !1 || u === void 0 && $)
    return null;
  const g = () => {
    u === void 0 && y(!0), a?.(), f?.(!1);
  }, _ = e, p = ks(t, "filled"), x = wn(n), w = c ?? (d ? /* @__PURE__ */ s(Oe, { name: Kc[e] }) : null);
  return /* @__PURE__ */ D(
    "div",
    {
      role: "alert",
      ...v,
      className: [
        It.alert,
        It[_],
        It[p],
        x ? It[x] : null,
        It[r],
        k
      ].filter(Boolean).join(" "),
      children: [
        w != null && /* @__PURE__ */ s("span", { className: It.icon, "aria-hidden": "true", children: w }),
        /* @__PURE__ */ D("div", { className: It.content, children: [
          i && /* @__PURE__ */ s("div", { className: It.title, children: i }),
          o && /* @__PURE__ */ s("div", { className: It.body, children: o })
        ] }),
        l && /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: It.dismiss,
            onClick: g,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ s(Oe, { name: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const Uc = "_skeleton_14cft_1", Wc = "_text_14cft_35", Xc = "_circle_14cft_40", Vc = "_rect_14cft_44", Ts = {
  skeleton: Uc,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_14cft_1",
  text: Wc,
  circle: Xc,
  rect: Vc
};
function Vv({
  variant: e = "text",
  width: t,
  height: n,
  className: r
}) {
  const i = {};
  return t !== void 0 && (i.width = typeof t == "number" ? `${t}px` : t), n !== void 0 && (i.height = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ s(
    "span",
    {
      "aria-hidden": "true",
      className: [Ts.skeleton, Ts[e], r].filter(Boolean).join(" "),
      style: i
    }
  );
}
const Gc = "_row_tkkv2_1", Yc = "_gapXs_tkkv2_12", Zc = "_gapSm_tkkv2_17", Jc = "_gapMd_tkkv2_22", Qc = "_gapLg_tkkv2_27", ed = "_gapXl_tkkv2_32", td = "_start_tkkv2_37", nd = "_center_tkkv2_41", sd = "_end_tkkv2_45", rd = "_stretch_tkkv2_49", od = "_baseline_tkkv2_53", ld = "_noWrap_tkkv2_109", ad = "_wrapReverse_tkkv2_113", id = "_gapRowXs_tkkv2_117", cd = "_gapRowSm_tkkv2_121", dd = "_gapRowMd_tkkv2_125", ud = "_gapRowLg_tkkv2_129", fd = "_gapRowXl_tkkv2_133", _n = {
  row: Gc,
  gapXs: Yc,
  gapSm: Zc,
  gapMd: Jc,
  gapLg: Qc,
  gapXl: ed,
  start: td,
  center: nd,
  end: sd,
  stretch: rd,
  baseline: od,
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
  noWrap: ld,
  wrapReverse: ad,
  gapRowXs: id,
  gapRowSm: cd,
  gapRowMd: dd,
  gapRowLg: ud,
  gapRowXl: fd
}, _d = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
}, pd = {
  xs: "gapRowXs",
  sm: "gapRowSm",
  md: "gapRowMd",
  lg: "gapRowLg",
  xl: "gapRowXl"
};
function hd(e) {
  return typeof e != "string" ? null : _d[e] ?? null;
}
function md(e) {
  return typeof e != "string" ? null : pd[e] ?? null;
}
function Ls(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function Gv({
  gap: e,
  rowGap: t,
  align: n = "stretch",
  justify: r = "start",
  wrap: i = !0,
  className: c,
  style: d,
  ...o
}) {
  const l = hd(e), a = md(t), u = e != null && !l ? typeof e == "number" ? `${e}px` : e : null, f = {
    // Keep --dx-col-gap in sync so Column grid math compensates for
    // arbitrary (non-tier) gaps exactly like it does for tier classes.
    ...u ? { gap: u, "--dx-col-gap": u } : {},
    ...t != null && !a ? { rowGap: typeof t == "number" ? `${t}px` : t } : {},
    ...d
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: [
        _n.row,
        _n[n],
        _n[`justify-${r}`],
        Ls(i) != null ? _n[Ls(i)] : null,
        l ? _n[l] : null,
        a ? _n[a] : null,
        c
      ].filter(Boolean).join(" "),
      style: f,
      ...o
    }
  );
}
const gd = "_column_sh0ss_1", xd = "_Size1_sh0ss_15", yd = "_Size2_sh0ss_24", bd = "_Size3_sh0ss_33", vd = "_Size4_sh0ss_42", kd = "_Size5_sh0ss_51", wd = "_Size6_sh0ss_60", $d = "_Size7_sh0ss_69", Od = "_Size8_sh0ss_78", Nd = "_Size9_sh0ss_87", Sd = "_Size10_sh0ss_96", Dd = "_Size11_sh0ss_105", Md = "_Size12_sh0ss_114", Cd = "_Offset0_sh0ss_119", zd = "_Offset1_sh0ss_122", Ed = "_Offset2_sh0ss_127", Id = "_Offset3_sh0ss_132", Ad = "_Offset4_sh0ss_137", jd = "_Offset5_sh0ss_142", Td = "_Offset6_sh0ss_147", Ld = "_Offset7_sh0ss_152", Pd = "_Offset8_sh0ss_157", Rd = "_Offset9_sh0ss_162", Bd = "_Offset10_sh0ss_167", qd = "_Offset11_sh0ss_172", Fd = "_Offset12_sh0ss_177", Hd = "_OrderFirst_sh0ss_182", Kd = "_OrderLast_sh0ss_185", Ud = "_Order0_sh0ss_188", Wd = "_Order1_sh0ss_191", Xd = "_Order2_sh0ss_194", Vd = "_Order3_sh0ss_197", Gd = "_Order4_sh0ss_200", Yd = "_Order5_sh0ss_203", Zd = "_Order6_sh0ss_206", Jd = "_Order7_sh0ss_209", Qd = "_Order8_sh0ss_212", eu = "_Order9_sh0ss_215", tu = "_Order10_sh0ss_218", nu = "_Order11_sh0ss_221", su = "_Order12_sh0ss_224", ru = "_xsSize1_sh0ss_229", ou = "_xsSize2_sh0ss_238", lu = "_xsSize3_sh0ss_247", au = "_xsSize4_sh0ss_256", iu = "_xsSize5_sh0ss_265", cu = "_xsSize6_sh0ss_274", du = "_xsSize7_sh0ss_283", uu = "_xsSize8_sh0ss_292", fu = "_xsSize9_sh0ss_301", _u = "_xsSize10_sh0ss_310", pu = "_xsSize11_sh0ss_321", hu = "_xsSize12_sh0ss_332", mu = "_xsOffset0_sh0ss_337", gu = "_xsOffset1_sh0ss_340", xu = "_xsOffset2_sh0ss_345", yu = "_xsOffset3_sh0ss_350", bu = "_xsOffset4_sh0ss_355", vu = "_xsOffset5_sh0ss_360", ku = "_xsOffset6_sh0ss_365", wu = "_xsOffset7_sh0ss_370", $u = "_xsOffset8_sh0ss_375", Ou = "_xsOffset9_sh0ss_380", Nu = "_xsOffset10_sh0ss_385", Su = "_xsOffset11_sh0ss_391", Du = "_xsOffset12_sh0ss_397", Mu = "_xsOrderFirst_sh0ss_403", Cu = "_xsOrderLast_sh0ss_406", zu = "_xsOrder0_sh0ss_409", Eu = "_xsOrder1_sh0ss_412", Iu = "_xsOrder2_sh0ss_415", Au = "_xsOrder3_sh0ss_418", ju = "_xsOrder4_sh0ss_421", Tu = "_xsOrder5_sh0ss_424", Lu = "_xsOrder6_sh0ss_427", Pu = "_xsOrder7_sh0ss_430", Ru = "_xsOrder8_sh0ss_433", Bu = "_xsOrder9_sh0ss_436", qu = "_xsOrder10_sh0ss_439", Fu = "_xsOrder11_sh0ss_442", Hu = "_xsOrder12_sh0ss_445", Ku = "_smSize1_sh0ss_451", Uu = "_smSize2_sh0ss_460", Wu = "_smSize3_sh0ss_469", Xu = "_smSize4_sh0ss_478", Vu = "_smSize5_sh0ss_487", Gu = "_smSize6_sh0ss_496", Yu = "_smSize7_sh0ss_505", Zu = "_smSize8_sh0ss_514", Ju = "_smSize9_sh0ss_523", Qu = "_smSize10_sh0ss_532", ef = "_smSize11_sh0ss_543", tf = "_smSize12_sh0ss_554", nf = "_smOffset0_sh0ss_559", sf = "_smOffset1_sh0ss_562", rf = "_smOffset2_sh0ss_567", of = "_smOffset3_sh0ss_572", lf = "_smOffset4_sh0ss_577", af = "_smOffset5_sh0ss_582", cf = "_smOffset6_sh0ss_587", df = "_smOffset7_sh0ss_592", uf = "_smOffset8_sh0ss_597", ff = "_smOffset9_sh0ss_602", _f = "_smOffset10_sh0ss_607", pf = "_smOffset11_sh0ss_613", hf = "_smOffset12_sh0ss_619", mf = "_smOrderFirst_sh0ss_625", gf = "_smOrderLast_sh0ss_628", xf = "_smOrder0_sh0ss_631", yf = "_smOrder1_sh0ss_634", bf = "_smOrder2_sh0ss_637", vf = "_smOrder3_sh0ss_640", kf = "_smOrder4_sh0ss_643", wf = "_smOrder5_sh0ss_646", $f = "_smOrder6_sh0ss_649", Of = "_smOrder7_sh0ss_652", Nf = "_smOrder8_sh0ss_655", Sf = "_smOrder9_sh0ss_658", Df = "_smOrder10_sh0ss_661", Mf = "_smOrder11_sh0ss_664", Cf = "_smOrder12_sh0ss_667", zf = "_mdSize1_sh0ss_673", Ef = "_mdSize2_sh0ss_682", If = "_mdSize3_sh0ss_691", Af = "_mdSize4_sh0ss_700", jf = "_mdSize5_sh0ss_709", Tf = "_mdSize6_sh0ss_718", Lf = "_mdSize7_sh0ss_727", Pf = "_mdSize8_sh0ss_736", Rf = "_mdSize9_sh0ss_745", Bf = "_mdSize10_sh0ss_754", qf = "_mdSize11_sh0ss_765", Ff = "_mdSize12_sh0ss_776", Hf = "_mdOffset0_sh0ss_781", Kf = "_mdOffset1_sh0ss_784", Uf = "_mdOffset2_sh0ss_789", Wf = "_mdOffset3_sh0ss_794", Xf = "_mdOffset4_sh0ss_799", Vf = "_mdOffset5_sh0ss_804", Gf = "_mdOffset6_sh0ss_809", Yf = "_mdOffset7_sh0ss_814", Zf = "_mdOffset8_sh0ss_819", Jf = "_mdOffset9_sh0ss_824", Qf = "_mdOffset10_sh0ss_829", e_ = "_mdOffset11_sh0ss_835", t_ = "_mdOffset12_sh0ss_841", n_ = "_mdOrderFirst_sh0ss_847", s_ = "_mdOrderLast_sh0ss_850", r_ = "_mdOrder0_sh0ss_853", o_ = "_mdOrder1_sh0ss_856", l_ = "_mdOrder2_sh0ss_859", a_ = "_mdOrder3_sh0ss_862", i_ = "_mdOrder4_sh0ss_865", c_ = "_mdOrder5_sh0ss_868", d_ = "_mdOrder6_sh0ss_871", u_ = "_mdOrder7_sh0ss_874", f_ = "_mdOrder8_sh0ss_877", __ = "_mdOrder9_sh0ss_880", p_ = "_mdOrder10_sh0ss_883", h_ = "_mdOrder11_sh0ss_886", m_ = "_mdOrder12_sh0ss_889", g_ = "_lgSize1_sh0ss_895", x_ = "_lgSize2_sh0ss_904", y_ = "_lgSize3_sh0ss_913", b_ = "_lgSize4_sh0ss_922", v_ = "_lgSize5_sh0ss_931", k_ = "_lgSize6_sh0ss_940", w_ = "_lgSize7_sh0ss_949", $_ = "_lgSize8_sh0ss_958", O_ = "_lgSize9_sh0ss_967", N_ = "_lgSize10_sh0ss_976", S_ = "_lgSize11_sh0ss_987", D_ = "_lgSize12_sh0ss_998", M_ = "_lgOffset0_sh0ss_1003", C_ = "_lgOffset1_sh0ss_1006", z_ = "_lgOffset2_sh0ss_1011", E_ = "_lgOffset3_sh0ss_1016", I_ = "_lgOffset4_sh0ss_1021", A_ = "_lgOffset5_sh0ss_1026", j_ = "_lgOffset6_sh0ss_1031", T_ = "_lgOffset7_sh0ss_1036", L_ = "_lgOffset8_sh0ss_1041", P_ = "_lgOffset9_sh0ss_1046", R_ = "_lgOffset10_sh0ss_1051", B_ = "_lgOffset11_sh0ss_1057", q_ = "_lgOffset12_sh0ss_1063", F_ = "_lgOrderFirst_sh0ss_1069", H_ = "_lgOrderLast_sh0ss_1072", K_ = "_lgOrder0_sh0ss_1075", U_ = "_lgOrder1_sh0ss_1078", W_ = "_lgOrder2_sh0ss_1081", X_ = "_lgOrder3_sh0ss_1084", V_ = "_lgOrder4_sh0ss_1087", G_ = "_lgOrder5_sh0ss_1090", Y_ = "_lgOrder6_sh0ss_1093", Z_ = "_lgOrder7_sh0ss_1096", J_ = "_lgOrder8_sh0ss_1099", Q_ = "_lgOrder9_sh0ss_1102", e1 = "_lgOrder10_sh0ss_1105", t1 = "_lgOrder11_sh0ss_1108", n1 = "_lgOrder12_sh0ss_1111", s1 = "_xlSize1_sh0ss_1117", r1 = "_xlSize2_sh0ss_1126", o1 = "_xlSize3_sh0ss_1135", l1 = "_xlSize4_sh0ss_1144", a1 = "_xlSize5_sh0ss_1153", i1 = "_xlSize6_sh0ss_1162", c1 = "_xlSize7_sh0ss_1171", d1 = "_xlSize8_sh0ss_1180", u1 = "_xlSize9_sh0ss_1189", f1 = "_xlSize10_sh0ss_1198", _1 = "_xlSize11_sh0ss_1209", p1 = "_xlSize12_sh0ss_1220", h1 = "_xlOffset0_sh0ss_1225", m1 = "_xlOffset1_sh0ss_1228", g1 = "_xlOffset2_sh0ss_1233", x1 = "_xlOffset3_sh0ss_1238", y1 = "_xlOffset4_sh0ss_1243", b1 = "_xlOffset5_sh0ss_1248", v1 = "_xlOffset6_sh0ss_1253", k1 = "_xlOffset7_sh0ss_1258", w1 = "_xlOffset8_sh0ss_1263", $1 = "_xlOffset9_sh0ss_1268", O1 = "_xlOffset10_sh0ss_1273", N1 = "_xlOffset11_sh0ss_1279", S1 = "_xlOffset12_sh0ss_1285", D1 = "_xlOrderFirst_sh0ss_1291", M1 = "_xlOrderLast_sh0ss_1294", C1 = "_xlOrder0_sh0ss_1297", z1 = "_xlOrder1_sh0ss_1300", E1 = "_xlOrder2_sh0ss_1303", I1 = "_xlOrder3_sh0ss_1306", A1 = "_xlOrder4_sh0ss_1309", j1 = "_xlOrder5_sh0ss_1312", T1 = "_xlOrder6_sh0ss_1315", L1 = "_xlOrder7_sh0ss_1318", P1 = "_xlOrder8_sh0ss_1321", R1 = "_xlOrder9_sh0ss_1324", B1 = "_xlOrder10_sh0ss_1327", q1 = "_xlOrder11_sh0ss_1330", F1 = "_xlOrder12_sh0ss_1333", H1 = "_xxSize1_sh0ss_1339", K1 = "_xxSize2_sh0ss_1348", U1 = "_xxSize3_sh0ss_1357", W1 = "_xxSize4_sh0ss_1366", X1 = "_xxSize5_sh0ss_1375", V1 = "_xxSize6_sh0ss_1384", G1 = "_xxSize7_sh0ss_1393", Y1 = "_xxSize8_sh0ss_1402", Z1 = "_xxSize9_sh0ss_1411", J1 = "_xxSize10_sh0ss_1420", Q1 = "_xxSize11_sh0ss_1431", ep = "_xxSize12_sh0ss_1442", tp = "_xxOffset0_sh0ss_1447", np = "_xxOffset1_sh0ss_1450", sp = "_xxOffset2_sh0ss_1455", rp = "_xxOffset3_sh0ss_1460", op = "_xxOffset4_sh0ss_1465", lp = "_xxOffset5_sh0ss_1470", ap = "_xxOffset6_sh0ss_1475", ip = "_xxOffset7_sh0ss_1480", cp = "_xxOffset8_sh0ss_1485", dp = "_xxOffset9_sh0ss_1490", up = "_xxOffset10_sh0ss_1495", fp = "_xxOffset11_sh0ss_1501", _p = "_xxOffset12_sh0ss_1507", pp = "_xxOrderFirst_sh0ss_1513", hp = "_xxOrderLast_sh0ss_1516", mp = "_xxOrder0_sh0ss_1519", gp = "_xxOrder1_sh0ss_1522", xp = "_xxOrder2_sh0ss_1525", yp = "_xxOrder3_sh0ss_1528", bp = "_xxOrder4_sh0ss_1531", vp = "_xxOrder5_sh0ss_1534", kp = "_xxOrder6_sh0ss_1537", wp = "_xxOrder7_sh0ss_1540", $p = "_xxOrder8_sh0ss_1543", Op = "_xxOrder9_sh0ss_1546", Np = "_xxOrder10_sh0ss_1549", Sp = "_xxOrder11_sh0ss_1552", Dp = "_xxOrder12_sh0ss_1555", Wn = {
  column: gd,
  Size1: xd,
  Size2: yd,
  Size3: bd,
  Size4: vd,
  Size5: kd,
  Size6: wd,
  Size7: $d,
  Size8: Od,
  Size9: Nd,
  Size10: Sd,
  Size11: Dd,
  Size12: Md,
  Offset0: Cd,
  Offset1: zd,
  Offset2: Ed,
  Offset3: Id,
  Offset4: Ad,
  Offset5: jd,
  Offset6: Td,
  Offset7: Ld,
  Offset8: Pd,
  Offset9: Rd,
  Offset10: Bd,
  Offset11: qd,
  Offset12: Fd,
  OrderFirst: Hd,
  OrderLast: Kd,
  Order0: Ud,
  Order1: Wd,
  Order2: Xd,
  Order3: Vd,
  Order4: Gd,
  Order5: Yd,
  Order6: Zd,
  Order7: Jd,
  Order8: Qd,
  Order9: eu,
  Order10: tu,
  Order11: nu,
  Order12: su,
  xsSize1: ru,
  xsSize2: ou,
  xsSize3: lu,
  xsSize4: au,
  xsSize5: iu,
  xsSize6: cu,
  xsSize7: du,
  xsSize8: uu,
  xsSize9: fu,
  xsSize10: _u,
  xsSize11: pu,
  xsSize12: hu,
  xsOffset0: mu,
  xsOffset1: gu,
  xsOffset2: xu,
  xsOffset3: yu,
  xsOffset4: bu,
  xsOffset5: vu,
  xsOffset6: ku,
  xsOffset7: wu,
  xsOffset8: $u,
  xsOffset9: Ou,
  xsOffset10: Nu,
  xsOffset11: Su,
  xsOffset12: Du,
  xsOrderFirst: Mu,
  xsOrderLast: Cu,
  xsOrder0: zu,
  xsOrder1: Eu,
  xsOrder2: Iu,
  xsOrder3: Au,
  xsOrder4: ju,
  xsOrder5: Tu,
  xsOrder6: Lu,
  xsOrder7: Pu,
  xsOrder8: Ru,
  xsOrder9: Bu,
  xsOrder10: qu,
  xsOrder11: Fu,
  xsOrder12: Hu,
  smSize1: Ku,
  smSize2: Uu,
  smSize3: Wu,
  smSize4: Xu,
  smSize5: Vu,
  smSize6: Gu,
  smSize7: Yu,
  smSize8: Zu,
  smSize9: Ju,
  smSize10: Qu,
  smSize11: ef,
  smSize12: tf,
  smOffset0: nf,
  smOffset1: sf,
  smOffset2: rf,
  smOffset3: of,
  smOffset4: lf,
  smOffset5: af,
  smOffset6: cf,
  smOffset7: df,
  smOffset8: uf,
  smOffset9: ff,
  smOffset10: _f,
  smOffset11: pf,
  smOffset12: hf,
  smOrderFirst: mf,
  smOrderLast: gf,
  smOrder0: xf,
  smOrder1: yf,
  smOrder2: bf,
  smOrder3: vf,
  smOrder4: kf,
  smOrder5: wf,
  smOrder6: $f,
  smOrder7: Of,
  smOrder8: Nf,
  smOrder9: Sf,
  smOrder10: Df,
  smOrder11: Mf,
  smOrder12: Cf,
  mdSize1: zf,
  mdSize2: Ef,
  mdSize3: If,
  mdSize4: Af,
  mdSize5: jf,
  mdSize6: Tf,
  mdSize7: Lf,
  mdSize8: Pf,
  mdSize9: Rf,
  mdSize10: Bf,
  mdSize11: qf,
  mdSize12: Ff,
  mdOffset0: Hf,
  mdOffset1: Kf,
  mdOffset2: Uf,
  mdOffset3: Wf,
  mdOffset4: Xf,
  mdOffset5: Vf,
  mdOffset6: Gf,
  mdOffset7: Yf,
  mdOffset8: Zf,
  mdOffset9: Jf,
  mdOffset10: Qf,
  mdOffset11: e_,
  mdOffset12: t_,
  mdOrderFirst: n_,
  mdOrderLast: s_,
  mdOrder0: r_,
  mdOrder1: o_,
  mdOrder2: l_,
  mdOrder3: a_,
  mdOrder4: i_,
  mdOrder5: c_,
  mdOrder6: d_,
  mdOrder7: u_,
  mdOrder8: f_,
  mdOrder9: __,
  mdOrder10: p_,
  mdOrder11: h_,
  mdOrder12: m_,
  lgSize1: g_,
  lgSize2: x_,
  lgSize3: y_,
  lgSize4: b_,
  lgSize5: v_,
  lgSize6: k_,
  lgSize7: w_,
  lgSize8: $_,
  lgSize9: O_,
  lgSize10: N_,
  lgSize11: S_,
  lgSize12: D_,
  lgOffset0: M_,
  lgOffset1: C_,
  lgOffset2: z_,
  lgOffset3: E_,
  lgOffset4: I_,
  lgOffset5: A_,
  lgOffset6: j_,
  lgOffset7: T_,
  lgOffset8: L_,
  lgOffset9: P_,
  lgOffset10: R_,
  lgOffset11: B_,
  lgOffset12: q_,
  lgOrderFirst: F_,
  lgOrderLast: H_,
  lgOrder0: K_,
  lgOrder1: U_,
  lgOrder2: W_,
  lgOrder3: X_,
  lgOrder4: V_,
  lgOrder5: G_,
  lgOrder6: Y_,
  lgOrder7: Z_,
  lgOrder8: J_,
  lgOrder9: Q_,
  lgOrder10: e1,
  lgOrder11: t1,
  lgOrder12: n1,
  xlSize1: s1,
  xlSize2: r1,
  xlSize3: o1,
  xlSize4: l1,
  xlSize5: a1,
  xlSize6: i1,
  xlSize7: c1,
  xlSize8: d1,
  xlSize9: u1,
  xlSize10: f1,
  xlSize11: _1,
  xlSize12: p1,
  xlOffset0: h1,
  xlOffset1: m1,
  xlOffset2: g1,
  xlOffset3: x1,
  xlOffset4: y1,
  xlOffset5: b1,
  xlOffset6: v1,
  xlOffset7: k1,
  xlOffset8: w1,
  xlOffset9: $1,
  xlOffset10: O1,
  xlOffset11: N1,
  xlOffset12: S1,
  xlOrderFirst: D1,
  xlOrderLast: M1,
  xlOrder0: C1,
  xlOrder1: z1,
  xlOrder2: E1,
  xlOrder3: I1,
  xlOrder4: A1,
  xlOrder5: j1,
  xlOrder6: T1,
  xlOrder7: L1,
  xlOrder8: P1,
  xlOrder9: R1,
  xlOrder10: B1,
  xlOrder11: q1,
  xlOrder12: F1,
  xxSize1: H1,
  xxSize2: K1,
  xxSize3: U1,
  xxSize4: W1,
  xxSize5: X1,
  xxSize6: V1,
  xxSize7: G1,
  xxSize8: Y1,
  xxSize9: Z1,
  xxSize10: J1,
  xxSize11: Q1,
  xxSize12: ep,
  xxOffset0: tp,
  xxOffset1: np,
  xxOffset2: sp,
  xxOffset3: rp,
  xxOffset4: op,
  xxOffset5: lp,
  xxOffset6: ap,
  xxOffset7: ip,
  xxOffset8: cp,
  xxOffset9: dp,
  xxOffset10: up,
  xxOffset11: fp,
  xxOffset12: _p,
  xxOrderFirst: pp,
  xxOrderLast: hp,
  xxOrder0: mp,
  xxOrder1: gp,
  xxOrder2: xp,
  xxOrder3: yp,
  xxOrder4: bp,
  xxOrder5: vp,
  xxOrder6: kp,
  xxOrder7: wp,
  xxOrder8: $p,
  xxOrder9: Op,
  xxOrder10: Np,
  xxOrder11: Sp,
  xxOrder12: Dp
}, Mp = [
  ["", "size", "offset", "order"],
  ["xs", "sizeXs", "offsetXs", "orderXs"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xx", "sizeXx", "offsetXx", "orderXx"]
];
function Cp(e, t) {
  if (!Number.isInteger(t) || t < 1 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 1 and 12.`
    );
}
function zp(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12.`
    );
}
function Ep(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12 or first/last.`
    );
}
function Ip(e, t, n) {
  return t === "first" ? `${e}OrderFirst` : t === "last" ? `${e}OrderLast` : (Ep(n, t), `${e}Order${t}`);
}
function Yv({ className: e, style: t, ...n }) {
  const r = [Wn.column], i = { ...t };
  for (const [I, O, h, S] of Mp) {
    const L = n[O], E = n[h], j = n[S];
    if (L != null) {
      Cp(O, L);
      const T = Wn[`${I}Size${L}`];
      T && r.push(T);
    }
    if (E != null) {
      zp(h, E);
      const T = Wn[`${I}Offset${E}`];
      T && r.push(T);
    }
    if (j != null) {
      const T = Wn[Ip(I, j, S)];
      T && r.push(T);
    }
  }
  const {
    size: c,
    offset: d,
    sizeXs: o,
    offsetXs: l,
    sizeSm: a,
    offsetSm: u,
    sizeMd: f,
    offsetMd: k,
    sizeLg: v,
    offsetLg: $,
    sizeXl: y,
    offsetXl: g,
    sizeXx: _,
    offsetXx: p,
    order: x,
    orderXs: w,
    orderSm: m,
    orderMd: C,
    orderLg: b,
    orderXl: N,
    orderXx: A,
    ...M
  } = n;
  return /* @__PURE__ */ s(
    "div",
    {
      className: [...r, e].filter(Boolean).join(" "),
      style: i,
      ...M
    }
  );
}
const Ap = "_stack_1yc1g_1", jp = "_gapXs_1yc1g_29", Tp = "_gapSm_1yc1g_33", Lp = "_gapMd_1yc1g_37", Pp = "_gapLg_1yc1g_41", Rp = "_gapXl_1yc1g_45", pn = {
  stack: Ap,
  "dir-row": "_dir-row_1yc1g_5",
  "dir-row-reverse": "_dir-row-reverse_1yc1g_9",
  "dir-column": "_dir-column_1yc1g_13",
  "dir-column-reverse": "_dir-column-reverse_1yc1g_17",
  "wrap-nowrap": "_wrap-nowrap_1yc1g_21",
  "wrap-wrap-reverse": "_wrap-wrap-reverse_1yc1g_25",
  gapXs: jp,
  gapSm: Tp,
  gapMd: Lp,
  gapLg: Pp,
  gapXl: Rp,
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
}, Bp = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function qp(e) {
  return typeof e != "string" ? null : Bp[e] ?? null;
}
function Ps(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function Zv({
  orientation: e = "vertical",
  reverse: t = !1,
  wrap: n = !0,
  gap: r = "sm",
  align: i,
  justify: c,
  className: d,
  style: o,
  ...l
}) {
  const a = qp(r), u = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", f = {
    ...r != null && !a ? { gap: typeof r == "number" ? `${r}px` : r } : {},
    ...o
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: [
        pn.stack,
        pn[`dir-${u}`],
        Ps(n) !== "wrap" ? pn[`wrap-${Ps(n)}`] : null,
        i != null ? pn[`align-${i}`] : null,
        c != null ? pn[`justify-${c}`] : null,
        a ? pn[a] : null,
        d
      ].filter(Boolean).join(" "),
      style: f,
      ...l
    }
  );
}
const Fp = "_autogrid_1fz7w_1", Hp = "_gapXs_1fz7w_10", Kp = "_gapSm_1fz7w_14", Up = "_gapMd_1fz7w_18", Wp = "_gapLg_1fz7w_22", Xp = "_gapXl_1fz7w_26", Rs = {
  autogrid: Fp,
  gapXs: Hp,
  gapSm: Kp,
  gapMd: Up,
  gapLg: Wp,
  gapXl: Xp
}, Vp = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function Gp(e) {
  return typeof e != "string" ? null : Vp[e] ?? null;
}
function Jv({
  min: e = 240,
  gap: t = "md",
  className: n,
  style: r,
  visible: i = !0,
  ...c
}) {
  if (i === !1) return null;
  const d = Gp(t), o = {
    // Keep --dx-autogrid-min in sync so the track math follows the prop.
    "--dx-autogrid-min": typeof e == "number" ? `${e}px` : e,
    ...t != null && !d ? { gap: typeof t == "number" ? `${t}px` : t } : {},
    ...r
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: [Rs.autogrid, d ? Rs[d] : null, n].filter(Boolean).join(" "),
      style: o,
      ...c
    }
  );
}
const Yp = "_layout_fxvw1_1", Zp = "_row_fxvw1_7", Jp = "_grid_fxvw1_21", Qp = "_gridRight_fxvw1_27", eh = "_gridHeader_fxvw1_31", th = "_gridFooter_fxvw1_36", nh = "_gridContents_fxvw1_41", sh = "_gridBody_fxvw1_45", Ft = {
  layout: Yp,
  row: Zp,
  grid: Jp,
  gridRight: Qp,
  gridHeader: eh,
  gridFooter: th,
  gridContents: nh,
  gridBody: sh
}, rh = "_footer_1thaw_1", oh = "_sticky_1thaw_9", Bs = {
  footer: rh,
  sticky: oh
};
function lh({
  sticky: e = !1,
  className: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ s(
    "footer",
    {
      className: [Bs.footer, e ? Bs.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const ah = "_header_wh9gi_1", ih = "_sticky_wh9gi_9", qs = {
  header: ah,
  sticky: ih
};
function ch({
  sticky: e = !1,
  className: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ s(
    "header",
    {
      className: [qs.header, e ? qs.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const dh = "_sidebar_1a2mp_1", uh = "_sticky_1a2mp_23", fh = "_left_1a2mp_41", _h = "_right_1a2mp_45", ph = "_start_1a2mp_50", hh = "_end_1a2mp_54", mh = "_fullHeight_1a2mp_60", gh = "_collapsed_1a2mp_64", xh = "_responsive_1a2mp_72", yh = "_overlay_1a2mp_80", bh = "_mask_1a2mp_108", Jt = {
  sidebar: dh,
  sticky: uh,
  left: fh,
  right: _h,
  start: ph,
  end: hh,
  fullHeight: mh,
  collapsed: gh,
  responsive: xh,
  overlay: yh,
  mask: bh
};
function vh({
  position: e = "left",
  expanded: t = !0,
  responsive: n = !1,
  overlay: r = !1,
  fullHeight: i = !1,
  sticky: c = !1,
  onClose: d,
  className: o,
  children: l,
  ...a
}) {
  return me(() => {
    if (!r || !t || d == null) return;
    const u = (f) => {
      f.key === "Escape" && d();
    };
    return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
  }, [r, t, d]), /* @__PURE__ */ D(Ne, { children: [
    r && t ? /* @__PURE__ */ s(
      "div",
      {
        className: `${Jt.mask} se-layout-mask`,
        "aria-hidden": "true",
        onClick: d
      }
    ) : null,
    /* @__PURE__ */ s(
      "aside",
      {
        className: [
          Jt.sidebar,
          Jt[e],
          t ? null : Jt.collapsed,
          n ? Jt.responsive : null,
          r ? [Jt.overlay, "se-sidebar--overlay"] : null,
          i ? Jt.fullHeight : null,
          c && !r && !i ? Jt.sticky : null,
          o
        ].flat().filter(Boolean).join(" "),
        ...a,
        children: l
      }
    )
  ] });
}
function Qv(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ s(Ne, { children: e.children });
  const { className: t, children: n, ...r } = e, i = [], c = [], d = [], o = [], l = [], a = [];
  Fn.forEach(n, (k) => {
    if (!dt(k)) {
      d.push(k);
      return;
    }
    if (k.type === ch)
      i.push(k);
    else if (k.type === lh)
      c.push(k);
    else if (k.type === vh) {
      const v = k, $ = v.props.position;
      a.push(v), ($ === "right" || $ === "end" ? l : o).push(v);
    } else
      d.push(k);
  });
  const u = a.length === 1 && a[0]?.props.fullHeight === !0 ? a[0] : null, f = u != null && (u.props.position === "right" || u.props.position === "end");
  if (u) {
    const k = f ? l : o;
    return /* @__PURE__ */ D(
      "div",
      {
        className: [
          Ft.layout,
          Ft.grid,
          f ? Ft.gridRight : null,
          t
        ].filter(Boolean).join(" "),
        ...r,
        children: [
          i.length > 0 && /* @__PURE__ */ s("div", { className: Ft.gridHeader, children: i }),
          /* @__PURE__ */ D("div", { className: Ft.gridContents, children: [
            k,
            /* @__PURE__ */ s("div", { className: Ft.gridBody, children: d })
          ] }),
          c.length > 0 && /* @__PURE__ */ s("div", { className: Ft.gridFooter, children: c })
        ]
      }
    );
  }
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Ft.layout, t].filter(Boolean).join(" "),
      ...r,
      children: [
        i,
        /* @__PURE__ */ D("div", { className: Ft.row, children: [
          o,
          d,
          l
        ] }),
        c
      ]
    }
  );
}
const kh = "_body_akga4_1", wh = "_bare_akga4_10", Fs = {
  body: kh,
  bare: wh
};
function ek({
  as: e = "main",
  padded: t = !0,
  className: n,
  children: r,
  ...i
}) {
  return /* @__PURE__ */ s(
    e,
    {
      className: [Fs.body, t ? null : Fs.bare, n].filter(Boolean).join(" "),
      ...i,
      children: r
    }
  );
}
const $h = "_toggle_lxnk5_1", Oh = {
  toggle: $h
};
function tk({
  icon: e = "menu",
  label: t = "Toggle sidebar",
  className: n,
  type: r = "button",
  children: i,
  ...c
}) {
  return /* @__PURE__ */ s(
    "button",
    {
      type: r,
      "aria-label": t,
      className: [Oh.toggle, n].filter(Boolean).join(" "),
      ...c,
      children: i ?? /* @__PURE__ */ s(Oe, { name: e, size: 20 })
    }
  );
}
const Nh = "_track_1itxd_1", Sh = "_bar_1itxd_31", Dh = "_primary_1itxd_39", Mh = "_success_1itxd_43", Ch = "_warning_1itxd_47", zh = "_danger_1itxd_51", Eh = "_indeterminate_1itxd_149", Ih = "_circular_1itxd_163", Ah = "_fill_1itxd_203", gt = {
  track: Nh,
  "linear-xs": "_linear-xs_1itxd_11",
  "linear-sm": "_linear-sm_1itxd_15",
  "linear-md": "_linear-md_1itxd_19",
  "linear-lg": "_linear-lg_1itxd_23",
  "linear-xl": "_linear-xl_1itxd_27",
  bar: Sh,
  primary: Dh,
  success: Mh,
  warning: Ch,
  danger: zh,
  "shade-lighter": "_shade-lighter_1itxd_133",
  "shade-light": "_shade-light_1itxd_133",
  "shade-dark": "_shade-dark_1itxd_141",
  "shade-darker": "_shade-darker_1itxd_145",
  indeterminate: Eh,
  "se-progress-slide": "_se-progress-slide_1itxd_1",
  circular: Ih,
  "circular-xs": "_circular-xs_1itxd_169",
  "circular-sm": "_circular-sm_1itxd_174",
  "circular-md": "_circular-md_1itxd_179",
  "circular-lg": "_circular-lg_1itxd_184",
  "circular-xl": "_circular-xl_1itxd_189",
  fill: Ah,
  "se-progress-spin": "_se-progress-spin_1itxd_1"
};
function nk({
  value: e = 0,
  max: t = 100,
  severity: n = "primary",
  shade: r,
  indeterminate: i = !1,
  variant: c = "linear",
  size: d = "md",
  className: o,
  visible: l = !0,
  ...a
}) {
  if (l === !1) return null;
  const u = t > 0 ? Math.min(t, Math.max(0, e)) : 0, f = t > 0 ? u / t * 100 : 0;
  if (c === "circular") {
    const v = typeof d == "string", $ = 2, y = 10.5, g = 2 * Math.PI * y, _ = g * (i ? 0.75 : 1), p = i ? 0 : g * (1 - f / 100), x = wn(r);
    return /* @__PURE__ */ D(
      "svg",
      {
        width: v ? void 0 : d,
        height: v ? void 0 : d,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": a["aria-label"],
        "aria-labelledby": a["aria-labelledby"],
        "aria-valuenow": i ? void 0 : Math.round(u),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        ...a,
        className: [
          gt.circular,
          gt[n],
          x ? gt[x] : null,
          v ? gt[`circular-${d}`] : null,
          i ? gt.indeterminate : null,
          o
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ s(
            "circle",
            {
              className: gt.track,
              cx: 12,
              cy: 12,
              r: y,
              strokeWidth: $
            }
          ),
          /* @__PURE__ */ s(
            "circle",
            {
              className: gt.fill,
              cx: 12,
              cy: 12,
              r: y,
              strokeWidth: $,
              strokeDasharray: `${_} ${g}`,
              strokeDashoffset: p
            }
          )
        ]
      }
    );
  }
  const k = wn(r);
  return /* @__PURE__ */ s(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": i ? void 0 : Math.round(u),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        gt.track,
        gt[n],
        k ? gt[k] : null,
        typeof d == "string" ? gt[`linear-${d}`] : null,
        i ? gt.indeterminate : null,
        o
      ].filter(Boolean).join(" "),
      ...a,
      children: /* @__PURE__ */ s(
        "div",
        {
          className: gt.bar,
          style: i ? void 0 : { width: `${f}%` }
        }
      )
    }
  );
}
function jh(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function dr(e) {
  const [t, n] = X(() => jh(e));
  return me(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const r = window.matchMedia(e);
    n(r.matches);
    const i = (c) => n(c.matches);
    return typeof r.addEventListener == "function" ? (r.addEventListener("change", i), () => r.removeEventListener("change", i)) : (r.addListener(i), () => r.removeListener(i));
  }, [e]), t;
}
const Th = "_wrapper_1qmsj_1", Lh = {
  wrapper: Th
}, ur = "dx-theme";
function Ph(e) {
  const t = e === void 0 ? ur : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const n = localStorage.getItem(t);
      return n === "light" || n === "dark" || n === "system" ? n : void 0;
    } catch {
      return;
    }
}
function Rh(e, t) {
  const n = e === void 0 ? ur : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function sk({
  value: e,
  defaultValue: t,
  storageKey: n,
  onChange: r,
  label: i = "Dark mode",
  className: c
}) {
  const d = dr("(prefers-color-scheme: dark)"), [o, l] = X(void 0), a = e ?? o ?? Ph(n) ?? t ?? "system", u = a === "system" ? d ? "dark" : "light" : a;
  me(() => {
    if (a === "system") {
      delete document.documentElement.dataset.theme;
      return;
    }
    document.documentElement.dataset.theme = a;
  }, [a]);
  const f = (k) => {
    const v = k.target.checked ? "dark" : "light";
    e === void 0 && l(v), Rh(n, v), r?.(v);
  };
  return /* @__PURE__ */ D("label", { className: [Lh.wrapper, c].filter(Boolean).join(" "), children: [
    i,
    /* @__PURE__ */ s(xi, { checked: u === "dark", onChange: f })
  ] });
}
function Bh(e) {
  const t = new TextEncoder().encode(e), n = t.length * 8, r = ((t.length + 8 >> 6) + 1) * 64, i = new Uint8Array(r);
  i.set(t), i[t.length] = 128;
  const c = new DataView(i.buffer);
  c.setUint32(r - 8, n >>> 0, !0), c.setUint32(r - 4, Math.floor(n / 4294967296), !0);
  const d = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21], o = Array.from(
    { length: 64 },
    (y, g) => Math.floor(Math.abs(Math.sin(g + 1)) * 4294967296)
  ), l = (y, g) => y + g | 0, a = (y, g) => y << g | y >>> 32 - g;
  let u = 1732584193, f = 4023233417, k = 2562383102, v = 271733878;
  for (let y = 0; y < r; y += 64) {
    const g = [];
    for (let m = 0; m < 16; m += 1)
      g.push(c.getUint32(y + m * 4, !0));
    let _ = u, p = f, x = k, w = v;
    for (let m = 0; m < 64; m += 1) {
      let C, b;
      m < 16 ? (C = p & x | ~p & w, b = m) : m < 32 ? (C = w & p | ~w & x, b = (5 * m + 1) % 16) : m < 48 ? (C = p ^ x ^ w, b = (3 * m + 5) % 16) : (C = x ^ (p | ~w), b = 7 * m % 16), C = l(l(l(C, _), o[m]), g[b]), _ = w, w = x, x = p, p = l(p, a(C, d[Math.floor(m / 16) * 4 + m % 4]));
    }
    u = l(u, _), f = l(f, p), k = l(k, x), v = l(v, w);
  }
  const $ = (y) => {
    let g = "";
    for (let _ = 0; _ < 4; _ += 1)
      g += `0${(y >>> _ * 8 & 255).toString(16)}`.slice(-2);
    return g;
  };
  return $(u) + $(f) + $(k) + $(v);
}
const qh = "_avatar_yj2hz_1", Fh = "_xs_yj2hz_12", Hh = "_sm_yj2hz_18", Kh = "_md_yj2hz_24", Uh = "_lg_yj2hz_30", Wh = "_xl_yj2hz_36", Xh = "_initials_yj2hz_42", Vh = "_image_yj2hz_57", Gh = "_status_yj2hz_64", Yh = "_online_yj2hz_84", Zh = "_offline_yj2hz_88", Jh = "_away_yj2hz_92", hn = {
  avatar: qh,
  xs: Fh,
  sm: Hh,
  md: Kh,
  lg: Uh,
  xl: Wh,
  initials: Xh,
  image: Vh,
  status: Gh,
  online: Yh,
  offline: Zh,
  away: Jh
}, Qh = {
  xs: 20,
  sm: 28,
  md: 36,
  lg: 44,
  xl: 52
}, es = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function em(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function tm(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = t * 31 + e.charCodeAt(n) >>> 0;
  return es[t % es.length] ?? es[0];
}
function rk({
  name: e,
  src: t,
  email: n,
  gravatarDefault: r = "retro",
  gravatarRating: i = "g",
  alt: c,
  size: d = "md",
  status: o,
  className: l
}) {
  const a = xe(() => e ? em(e) : "?", [e]), u = xe(() => e ? tm(e) : es[0], [e]), f = xe(() => {
    if (t != null || n == null) return;
    const w = n.trim().toLowerCase();
    return w === "" ? void 0 : `https://secure.gravatar.com/avatar/${Bh(w)}?d=${r}&s=${Qh[d]}&r=${i}`;
  }, [t, n, r, i, d]), k = t ?? f, [v, $] = X(null), y = k != null && v !== k, g = y && c === "", _ = c ?? e ?? "avatar", p = o ? `${_}, ${o}` : _, x = y ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ s(
      "img",
      {
        className: hn.image,
        src: k,
        alt: g ? "" : o ? p : _,
        onError: () => $(k ?? null)
      }
    )
  ) : /* @__PURE__ */ s(
    "span",
    {
      "aria-hidden": "true",
      className: hn.initials,
      style: { background: u },
      children: a
    }
  );
  return /* @__PURE__ */ D(
    "span",
    {
      className: [
        hn.avatar,
        hn[d],
        o ? hn[o] : null,
        l
      ].filter(Boolean).join(" "),
      role: y ? void 0 : "img",
      "aria-label": y ? void 0 : p,
      children: [
        x,
        o && /* @__PURE__ */ s("span", { className: hn.status, "aria-hidden": "true" })
      ]
    }
  );
}
const nm = "_root_iy2gv_1", sm = "_left_iy2gv_6", rm = "_right_iy2gv_7", om = "_panel_iy2gv_12", lm = "_bottom_iy2gv_20", am = "_tabList_iy2gv_24", im = "_underline_iy2gv_53", cm = "_pills_iy2gv_72", dm = "_tab_iy2gv_24", um = "_active_iy2gv_113", fm = "_disabled_iy2gv_139", Ht = {
  root: nm,
  left: sm,
  right: rm,
  panel: om,
  bottom: lm,
  tabList: am,
  underline: im,
  pills: cm,
  tab: dm,
  active: um,
  disabled: fm
};
function ok({
  items: e,
  value: t,
  defaultValue: n,
  onChange: r,
  variant: i = "underline",
  position: c = "top",
  className: d
}) {
  const o = qe(), l = ee(null), [a, u] = X(
    n ?? e[0]?.key ?? ""
  ), f = t ?? a, k = c === "left" || c === "right", v = (g) => {
    u(g), r?.(g);
  }, $ = (g) => {
    const _ = e.filter((w) => !w.disabled), p = _.findIndex((w) => w.key === f);
    let x = -1;
    g.key === "ArrowRight" || k && g.key === "ArrowDown" ? x = (p + 1) % _.length : g.key === "ArrowLeft" || k && g.key === "ArrowUp" ? x = (p - 1 + _.length) % _.length : g.key === "Home" ? x = 0 : g.key === "End" && (x = _.length - 1), x >= 0 && (g.preventDefault(), l.current?.querySelector(
      `[data-tab-key="${CSS.escape(_[x]?.key ?? "")}"]`
    )?.focus(), v(_[x]?.key ?? ""));
  }, y = e.find((g) => g.key === f);
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Ht.root, Ht[c], d].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ s(
          "div",
          {
            ref: l,
            role: "tablist",
            className: [Ht.tabList, Ht[i], Ht[c]].filter(Boolean).join(" "),
            onKeyDown: $,
            children: e.map((g) => {
              const _ = g.key === f;
              return /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  role: "tab",
                  id: `${o}-tab-${g.key}`,
                  "data-tab-key": g.key,
                  "aria-selected": _,
                  "aria-controls": `${o}-panel-${g.key}`,
                  tabIndex: _ ? 0 : -1,
                  disabled: g.disabled,
                  className: [
                    Ht.tab,
                    _ ? Ht.active : null,
                    g.disabled ? Ht.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => v(g.key),
                  children: g.label
                },
                g.key
              );
            })
          }
        ),
        y && /* @__PURE__ */ s(
          "div",
          {
            role: "tabpanel",
            id: `${o}-panel-${y.key}`,
            "aria-labelledby": `${o}-tab-${y.key}`,
            className: Ht.panel,
            children: y.content
          }
        )
      ]
    }
  );
}
const _m = "_root_1qkv8_1", pm = "_item_1qkv8_9", hm = "_heading_1qkv8_13", mm = "_trigger_1qkv8_17", gm = "_disabled_1qkv8_34", xm = "_title_1qkv8_48", ym = "_chevron_1qkv8_52", bm = "_open_1qkv8_59", vm = "_content_1qkv8_63", Kt = {
  root: _m,
  item: pm,
  heading: hm,
  trigger: mm,
  disabled: gm,
  title: xm,
  chevron: ym,
  open: bm,
  content: vm
};
function lk({
  items: e,
  multiple: t = !1,
  value: n,
  defaultValue: r,
  onChange: i,
  className: c
}) {
  const d = qe(), [o, l] = X(
    r ?? []
  ), a = n ?? o, u = (f) => {
    const k = a.includes(f) ? a.filter((v) => v !== f) : t ? [...a, f] : [f];
    l(k), i?.(k);
  };
  return /* @__PURE__ */ s("div", { className: [Kt.root, c].filter(Boolean).join(" "), children: e.map((f) => {
    const k = a.includes(f.key), v = `${d}-panel-${f.key}`, $ = `${d}-trigger-${f.key}`;
    return /* @__PURE__ */ D("div", { className: Kt.item, children: [
      /* @__PURE__ */ s("h3", { className: Kt.heading, children: /* @__PURE__ */ D(
        "button",
        {
          type: "button",
          id: $,
          "aria-expanded": k,
          "aria-controls": v,
          disabled: f.disabled,
          className: [
            Kt.trigger,
            f.disabled ? Kt.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => u(f.key),
          children: [
            /* @__PURE__ */ s("span", { className: Kt.title, children: f.title }),
            /* @__PURE__ */ s(
              "span",
              {
                className: [Kt.chevron, k ? Kt.open : null].filter(Boolean).join(" "),
                "aria-hidden": "true",
                children: /* @__PURE__ */ s(Oe, { name: "chevron-down", size: 12 })
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
          "aria-labelledby": $,
          hidden: !k,
          className: Kt.content,
          children: f.content
        }
      )
    ] }, f.key);
  }) });
}
const km = "_textarea_1uei3_1", wm = "_invalid_1uei3_27", $m = "_xs_1uei3_34", Om = "_sm_1uei3_39", Nm = "_md_1uei3_44", Sm = "_lg_1uei3_49", Dm = "_xl_1uei3_54", Xn = {
  textarea: km,
  invalid: wm,
  xs: $m,
  sm: Om,
  md: Nm,
  lg: Sm,
  xl: Dm,
  "resize-none": "_resize-none_1uei3_59",
  "resize-vertical": "_resize-vertical_1uei3_63",
  "resize-horizontal": "_resize-horizontal_1uei3_67",
  "resize-both": "_resize-both_1uei3_71"
}, ak = Fe(
  function({ size: t = "md", resize: n = "none", invalid: r = !1, className: i, ...c }, d) {
    return /* @__PURE__ */ s(
      "textarea",
      {
        ref: d,
        "data-size": t,
        className: [
          Xn.textarea,
          Xn[t],
          Xn[`resize-${n}`],
          r ? Xn.invalid : null,
          i
        ].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...c
      }
    );
  }
), Mm = "_root_jtes6_1", Cm = "_trigger_jtes6_9", zm = "_invalid_jtes6_40", Em = "_placeholder_jtes6_47", Im = "_label_jtes6_54", Am = "_chevron_jtes6_60", jm = "_chevronOpen_jtes6_70", Tm = "_menu_jtes6_74", Lm = "_option_jtes6_89", Pm = "_disabled_jtes6_100", Rm = "_active_jtes6_104", Bm = "_selected_jtes6_105", qm = "_header_jtes6_115", Fm = "_xs_jtes6_122", Hm = "_sm_jtes6_128", Km = "_md_jtes6_134", Um = "_lg_jtes6_140", Wm = "_xl_jtes6_146", ct = {
  root: Mm,
  trigger: Cm,
  invalid: zm,
  placeholder: Em,
  label: Im,
  chevron: Am,
  chevronOpen: jm,
  menu: Tm,
  option: Lm,
  disabled: Pm,
  active: Rm,
  selected: Bm,
  header: qm,
  xs: Fm,
  sm: Hm,
  md: Km,
  lg: Um,
  xl: Wm
}, Xm = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function ik({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: r,
  placeholder: i = "Select…",
  size: c = "md",
  invalid: d = !1,
  disabled: o = !1,
  className: l,
  ...a
}) {
  const u = qe(), f = `${u}-listbox`, k = ee(null), v = ee(null), [$, y] = X(
    n
  ), [g, _] = X(!1), p = t ?? $, x = e.map(
    (h, S) => h.label === "" || h.disabled ? -1 : S
  ).filter((h) => h >= 0), w = e.findIndex(
    (h) => h.value === p
  ), [m, C] = X(
    () => x.includes(0) ? 0 : x[0] ?? -1
  ), b = B(() => {
    if (o) return;
    const h = w >= 0 && x.includes(w) ? w : x[0];
    C(h ?? -1), _(!0);
  }, [o, w, x]), N = B(() => {
    _(!1), v.current?.focus();
  }, []);
  me(() => {
    if (!g) return;
    const h = (S) => {
      k.current && !k.current.contains(S.target) && _(!1);
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, [g]);
  const A = (h) => {
    y(h), r?.(h), _(!1), v.current?.focus();
  }, M = (h) => {
    if (x.length === 0) return;
    const S = x.includes(m) ? x.indexOf(m) : 0, L = x[(S + h + x.length) % x.length];
    L != null && C(L);
  }, I = (h) => {
    if (!g) {
      h.key === "ArrowDown" && (h.preventDefault(), b());
      return;
    }
    switch (h.key) {
      case "ArrowDown":
        h.preventDefault(), M(1);
        break;
      case "ArrowUp":
        h.preventDefault(), M(-1);
        break;
      case "Home":
        h.preventDefault(), x[0] != null && C(x[0]);
        break;
      case "End":
        h.preventDefault(), x[x.length - 1] != null && C(x[x.length - 1]);
        break;
      case "Enter":
      case " ":
        h.preventDefault(), m >= 0 && e[m] && x.includes(m) && A(e[m]?.value ?? "");
        break;
      case "Escape":
        h.preventDefault(), N();
        break;
      case "Tab":
        _(!1);
        break;
    }
  }, O = e.find(
    (h) => h.value === p
  );
  return /* @__PURE__ */ D(
    "div",
    {
      ref: k,
      className: [ct.root, l].filter(Boolean).join(" "),
      onKeyDown: I,
      children: [
        /* @__PURE__ */ D(
          "button",
          {
            ref: v,
            type: "button",
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-expanded": g,
            "aria-controls": f,
            "aria-invalid": d || void 0,
            disabled: o,
            className: [
              ct.trigger,
              ct[c],
              g ? ct.open : null,
              d ? ct.invalid : null
            ].filter(Boolean).join(" "),
            onClick: () => g ? _(!1) : b(),
            ...a,
            children: [
              /* @__PURE__ */ s("span", { className: O ? ct.label : ct.placeholder, children: O ? O.label : i }),
              /* @__PURE__ */ s(
                "span",
                {
                  className: [ct.chevron, g ? ct.chevronOpen : null].filter(Boolean).join(" "),
                  style: { backgroundImage: Xm },
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ),
        g && /* @__PURE__ */ s(
          "div",
          {
            id: f,
            role: "listbox",
            "aria-activedescendant": m >= 0 ? `${u}-option-${m}` : void 0,
            className: ct.menu,
            children: e.map(
              (h, S) => h.label === "" ? /* @__PURE__ */ s(
                "div",
                {
                  className: ct.header,
                  role: "presentation",
                  children: h.value
                },
                h.value
              ) : /* @__PURE__ */ s(
                "div",
                {
                  id: `${u}-option-${S}`,
                  role: "option",
                  "aria-selected": h.value === p,
                  "aria-disabled": h.disabled || void 0,
                  className: [
                    ct.option,
                    S === m ? ct.active : null,
                    h.value === p ? ct.selected : null,
                    h.disabled ? ct.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    h.disabled || A(h.value);
                  },
                  onMouseEnter: () => {
                    !h.disabled && h.label !== "" && C(S);
                  },
                  children: h.label
                },
                h.value
              )
            )
          }
        )
      ]
    }
  );
}
const Vm = "_root_5j58f_1", Gm = "_wrap_5j58f_9", Ym = "_input_5j58f_26", Zm = "_invalid_5j58f_31", Jm = "_clear_5j58f_58", Qm = "_menu_5j58f_83", eg = "_option_5j58f_98", tg = "_disabled_5j58f_109", ng = "_active_5j58f_113", sg = "_empty_5j58f_123", rg = "_xs_5j58f_129", og = "_sm_5j58f_136", lg = "_md_5j58f_143", ag = "_lg_5j58f_150", ig = "_xl_5j58f_157", Mt = {
  root: Vm,
  wrap: Gm,
  input: Ym,
  invalid: Zm,
  clear: Jm,
  menu: Qm,
  option: eg,
  disabled: tg,
  active: ng,
  empty: sg,
  xs: rg,
  sm: og,
  md: lg,
  lg: ag,
  xl: ig
}, cg = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function ck({
  options: e = [],
  value: t,
  defaultValue: n = "",
  onChange: r,
  onSelect: i,
  placeholder: c = "",
  size: d = "md",
  invalid: o = !1,
  disabled: l = !1,
  filter: a = cg,
  className: u,
  ...f
}) {
  const k = qe(), v = `${k}-listbox`, $ = ee(null), y = ee(null), [g, _] = X(n), [p, x] = X(!1), w = t ?? g, m = xe(
    () => w.trim() === "" ? [...e] : e.filter((j) => a(j, w)),
    [e, w, a]
  ), C = m.map((j, T) => j.disabled ? -1 : T).filter((j) => j >= 0), [b, N] = X(-1), A = (j) => {
    _(j), r?.(j);
  }, M = (j) => {
    A(j.label), i?.(j.value, j), x(!1);
  }, I = (j) => {
    if (C.length === 0) return;
    const T = C.includes(b) ? C.indexOf(b) : j === 1 ? -1 : 0, F = C[(T + j + C.length) % C.length];
    F != null && N(F);
  }, O = (j) => {
    l || (A(j.target.value), x(!0), N(-1));
  }, h = () => {
    l || w !== "" && x(!0);
  }, S = (j) => {
    $.current && !$.current.contains(j.relatedTarget) && x(!1);
  }, L = (j) => {
    if (!l)
      switch (j.key) {
        case "ArrowDown":
          j.preventDefault(), p ? I(1) : (x(!0), N(C[0] ?? -1));
          break;
        case "ArrowUp":
          j.preventDefault(), p && I(-1);
          break;
        case "Enter":
          j.preventDefault(), p && b >= 0 && m[b] && M(m[b]);
          break;
        case "Escape":
          j.preventDefault(), x(!1);
          break;
        case "Tab":
          p && b >= 0 && m[b] && M(m[b]), x(!1);
          break;
      }
  }, E = () => {
    A(""), N(-1), x(!0), y.current?.focus();
  };
  return /* @__PURE__ */ D(
    "div",
    {
      ref: $,
      className: [Mt.root, u].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ D(
          "div",
          {
            className: [Mt.wrap, Mt[d], o ? Mt.invalid : null].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ s(
                "input",
                {
                  ref: y,
                  type: "text",
                  role: "combobox",
                  "aria-expanded": p,
                  "aria-controls": v,
                  "aria-autocomplete": "list",
                  "aria-activedescendant": p && b >= 0 ? `${k}-option-${b}` : void 0,
                  "aria-invalid": o || void 0,
                  disabled: l,
                  value: w,
                  placeholder: c,
                  className: Mt.input,
                  onChange: O,
                  onFocus: h,
                  onBlur: S,
                  onKeyDown: L,
                  ...f
                }
              ),
              w !== "" && !l && /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: Mt.clear,
                  "aria-label": "Clear",
                  onClick: E,
                  children: /* @__PURE__ */ s(Oe, { name: "close", size: "sm" })
                }
              )
            ]
          }
        ),
        p && /* @__PURE__ */ s("div", { id: v, role: "listbox", className: Mt.menu, children: m.length === 0 ? /* @__PURE__ */ s("div", { className: Mt.empty, children: "No matches" }) : m.map((j, T) => /* @__PURE__ */ s(
          "div",
          {
            id: `${k}-option-${T}`,
            role: "option",
            "aria-selected": !1,
            "aria-disabled": j.disabled || void 0,
            className: [
              Mt.option,
              T === b ? Mt.active : null,
              j.disabled ? Mt.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => {
              j.disabled || M(j);
            },
            onMouseDown: (F) => {
              F.preventDefault(), j.disabled || M(j);
            },
            onMouseEnter: () => {
              j.disabled || N(T);
            },
            children: j.label
          },
          j.value
        )) })
      ]
    }
  );
}
const dg = "_box_txdu6_1", ug = "_option_txdu6_12", fg = "_disabled_txdu6_23", _g = "_selected_txdu6_27", pg = "_active_txdu6_33", In = {
  box: dg,
  option: ug,
  disabled: fg,
  selected: _g,
  active: pg
};
function dk({
  options: e = [],
  value: t,
  defaultValue: n,
  multiple: r = !1,
  onChange: i,
  className: c,
  style: d,
  ...o
}) {
  const l = qe(), [a, u] = X(() => {
    const m = n;
    return m == null ? [] : Array.isArray(m) ? [...m] : [m];
  }), f = t == null ? a : Array.isArray(t) ? t : [t], k = e.findIndex((m) => !m.disabled), [v, $] = X(
    () => k >= 0 ? k : 0
  ), y = ee(""), g = ee(null), _ = (m) => {
    u(m), i?.(r ? m : m[0] ?? "");
  }, p = e.map((m, C) => m.disabled ? -1 : C).filter((m) => m >= 0), x = (m) => {
    const C = e[m];
    if (!(!C || C.disabled))
      if ($(m), r) {
        const b = f.includes(C.value) ? f.filter((N) => N !== C.value) : [...f, C.value];
        _(b);
      } else
        _([C.value]);
  }, w = (m) => {
    if (p.length === 0) return;
    const C = p.includes(v) ? v : p[0];
    let b = -1;
    if (m.key === "ArrowDown")
      b = p[(p.indexOf(C) + 1) % p.length];
    else if (m.key === "ArrowUp")
      b = p[(p.indexOf(C) - 1 + p.length) % p.length];
    else if (m.key === "Home")
      b = p[0];
    else if (m.key === "End")
      b = p[p.length - 1];
    else if (m.key === "Enter" || m.key === " ") {
      m.preventDefault(), x(C);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(m.key)) {
      m.preventDefault();
      const N = (y.current + m.key).toLowerCase();
      y.current = N, g.current && clearTimeout(g.current), g.current = setTimeout(() => {
        y.current = "";
      }, 500);
      const A = [...p, ...p], M = p.indexOf(C) + 1, I = A.slice(M).find((O) => e[O]?.label.toLowerCase().startsWith(N));
      I != null && $(I);
      return;
    }
    b >= 0 && (m.preventDefault(), $(b), r || _([e[b]?.value ?? ""]));
  };
  return /* @__PURE__ */ s(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": r || void 0,
      "aria-activedescendant": e[v] ? `${l}-option-${v}` : void 0,
      style: d,
      className: [In.box, c].filter(Boolean).join(" "),
      onKeyDown: w,
      ...o,
      children: e.map((m, C) => {
        const b = f.includes(m.value), N = C === v;
        return /* @__PURE__ */ s(
          "div",
          {
            id: `${l}-option-${C}`,
            role: "option",
            "aria-selected": b,
            "aria-disabled": m.disabled || void 0,
            className: [
              In.option,
              b ? In.selected : null,
              N ? In.active : null,
              m.disabled ? In.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => x(C),
            children: m.label
          },
          m.value
        );
      })
    }
  );
}
const hg = "_group_1gpkr_1", mg = "_legend_1gpkr_8", gg = "_list_1gpkr_16", xg = "_item_1gpkr_25", yg = "_disabled_1gpkr_32", bg = "_label_1gpkr_37", vg = "_checkbox_1gpkr_48", ln = {
  group: hg,
  legend: mg,
  list: gg,
  item: xg,
  disabled: yg,
  label: bg,
  checkbox: vg
};
function uk({
  options: e = [],
  value: t,
  defaultValue: n = [],
  onChange: r,
  legend: i,
  name: c,
  className: d
}) {
  const [o, l] = X(() => [
    ...n
  ]), a = t ?? o, u = (f, k) => {
    const v = k ? [...a, f] : a.filter(($) => $ !== f);
    l(v), r?.(v);
  };
  return /* @__PURE__ */ D("fieldset", { className: [ln.group, d].filter(Boolean).join(" "), children: [
    i != null && /* @__PURE__ */ s("legend", { className: ln.legend, children: i }),
    /* @__PURE__ */ s("ul", { className: ln.list, children: e.map((f) => {
      const k = a.includes(f.value);
      return /* @__PURE__ */ s(
        "li",
        {
          className: [ln.item, f.disabled ? ln.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ D("label", { className: ln.label, children: [
            /* @__PURE__ */ s(
              "input",
              {
                type: "checkbox",
                className: ln.checkbox,
                name: c,
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
const kg = "_group_wb5fo_1", wg = "_legend_wb5fo_8", $g = "_list_wb5fo_16", Og = "_item_wb5fo_25", Ng = "_disabled_wb5fo_32", Sg = "_label_wb5fo_37", Dg = "_radio_wb5fo_48", an = {
  group: kg,
  legend: wg,
  list: $g,
  item: Og,
  disabled: Ng,
  label: Sg,
  radio: Dg
};
function fk({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: r,
  legend: i,
  name: c,
  className: d
}) {
  const [o, l] = X(
    n
  ), a = t ?? o, u = (f) => {
    l(f), r?.(f);
  };
  return /* @__PURE__ */ D("fieldset", { className: [an.group, d].filter(Boolean).join(" "), children: [
    i != null && /* @__PURE__ */ s("legend", { className: an.legend, children: i }),
    /* @__PURE__ */ s("ul", { className: an.list, children: e.map((f) => {
      const k = f.value === a;
      return /* @__PURE__ */ s(
        "li",
        {
          className: [an.item, f.disabled ? an.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ D("label", { className: an.label, children: [
            /* @__PURE__ */ s(
              "input",
              {
                type: "radio",
                className: an.radio,
                name: c,
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
const Mg = "_bar_44vcf_1", Cg = "_vertical_44vcf_12", zg = "_option_44vcf_17", Eg = "_selected_44vcf_40", Ig = "_sm_44vcf_56", Ag = "_md_44vcf_62", jg = "_lg_44vcf_68", mn = {
  bar: Mg,
  vertical: Cg,
  option: zg,
  selected: Eg,
  sm: Ig,
  md: Ag,
  lg: jg
};
function Hs(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function _k(e) {
  const {
    options: t = [],
    value: n,
    defaultValue: r,
    multiple: i,
    orientation: c = "horizontal",
    onChange: d,
    size: o = "md",
    className: l,
    ...a
  } = e, u = i ?? !1, [f, k] = X(r ?? (u ? [] : t[0]?.value)), v = n ?? f, $ = i === !0 || i === void 0 && Array.isArray(v), y = (_) => {
    if (!$) {
      k(_), d?.(_);
      return;
    }
    const p = Hs(v), x = p.includes(_) ? p.filter((w) => w !== _) : [...p, _];
    k(x), d?.(x);
  }, g = (_) => $ ? Hs(v).includes(_) : v === _;
  return /* @__PURE__ */ s(
    "div",
    {
      role: "group",
      className: [
        mn.bar,
        mn[o],
        c === "vertical" ? mn.vertical : null,
        l
      ].filter(Boolean).join(" "),
      ...a,
      children: t.map((_) => {
        const p = g(_.value);
        return /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            "aria-pressed": p,
            disabled: _.disabled,
            className: [
              mn.option,
              p ? mn.selected : null,
              _.disabled ? mn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => y(_.value),
            children: _.label
          },
          _.value
        );
      })
    }
  );
}
const Tg = "_toggle_bc517_1", Lg = "_pressed_bc517_29", Pg = "_sm_bc517_41", Rg = "_md_bc517_47", Bg = "_lg_bc517_53", qg = "_fullWidth_bc517_59", Vn = {
  toggle: Tg,
  pressed: Lg,
  sm: Pg,
  md: Rg,
  lg: Bg,
  fullWidth: qg
}, pk = Fe(
  function({
    pressed: t,
    defaultPressed: n = !1,
    onChange: r,
    size: i = "md",
    fullWidth: c = !1,
    className: d,
    type: o = "button",
    ...l
  }, a) {
    const [u, f] = X(n), k = t ?? u, v = () => {
      const $ = !k;
      f($), r?.($);
    };
    return /* @__PURE__ */ s(
      "button",
      {
        ref: a,
        type: o,
        "aria-pressed": k,
        className: [
          Vn.toggle,
          Vn[i],
          k ? Vn.pressed : null,
          c ? Vn.fullWidth : null,
          d
        ].filter(Boolean).join(" "),
        onClick: v,
        ...l
      }
    );
  }
), Fg = "_root_pn7s6_1", Hg = "_action_pn7s6_285", Kg = "_filled_pn7s6_305", Ug = "_caret_pn7s6_309", Wg = "_flat_pn7s6_331", Xg = "_outlined_pn7s6_343", Vg = "_text_pn7s6_352", Gg = "_sm_pn7s6_451", Yg = "_md_pn7s6_463", Zg = "_lg_pn7s6_475", Jg = "_menu_pn7s6_487", Qg = "_item_pn7s6_500", e0 = "_disabled_pn7s6_521", t0 = "_active_pn7s6_525", n0 = "_danger_pn7s6_534", wt = {
  root: Fg,
  "style-primary": "_style-primary_pn7s6_10",
  "style-secondary": "_style-secondary_pn7s6_18",
  "style-base": "_style-base_pn7s6_26",
  "style-light": "_style-light_pn7s6_34",
  "style-dark": "_style-dark_pn7s6_42",
  "style-info": "_style-info_pn7s6_50",
  "style-success": "_style-success_pn7s6_58",
  "style-warning": "_style-warning_pn7s6_66",
  "style-danger": "_style-danger_pn7s6_74",
  action: Hg,
  filled: Kg,
  caret: Ug,
  flat: Wg,
  outlined: Xg,
  text: Vg,
  "shade-lighter": "_shade-lighter_pn7s6_370",
  "shade-light": "_shade-light_pn7s6_370",
  "shade-dark": "_shade-dark_pn7s6_380",
  "shade-darker": "_shade-darker_pn7s6_384",
  sm: Gg,
  md: Yg,
  lg: Zg,
  menu: Jg,
  item: Qg,
  disabled: e0,
  active: t0,
  danger: n0
};
function hk({
  label: e,
  onClick: t,
  items: n = [],
  severity: r = "primary",
  variant: i = "filled",
  shade: c = "default",
  size: d = "md",
  disabled: o = !1,
  className: l,
  ...a
}) {
  const f = `${qe()}-menu`, k = ee(null), v = ee(null), $ = ee([]), [y, g] = X(!1), [_, p] = X(-1), x = xe(
    () => n.map((O, h) => O.disabled ? -1 : h).filter((O) => O >= 0),
    [n]
  ), w = B(() => {
    o || (p(x[0] ?? -1), g(!0));
  }, [o, x]), m = B(() => {
    g(!1), v.current?.focus();
  }, []);
  me(() => {
    if (!y) return;
    const O = (h) => {
      k.current && !k.current.contains(h.target) && g(!1);
    };
    return document.addEventListener("mousedown", O), () => document.removeEventListener("mousedown", O);
  }, [y]);
  const C = ee(y);
  me(() => {
    const O = C.current;
    if (C.current = y, !y || O) return;
    const h = x.includes(_) ? _ : x[0] ?? -1;
    h >= 0 && $.current[h]?.focus();
  }, [y, _, x]);
  const b = (O) => {
    const h = n[O];
    !h || h.disabled || (h.onClick?.(), g(!1), v.current?.focus());
  }, N = (O) => {
    if (x.length === 0) return;
    const h = x.includes(_) ? x.indexOf(_) : O === 1 ? -1 : 0, S = x[(h + O + x.length) % x.length];
    S != null && (p(S), $.current[S]?.focus());
  }, A = (O) => {
    const h = O === "first" ? x[0] : x[x.length - 1];
    h != null && (p(h), $.current[h]?.focus());
  }, M = (O) => {
    switch (O.key) {
      case "ArrowDown":
        O.preventDefault(), N(1);
        break;
      case "ArrowUp":
        O.preventDefault(), N(-1);
        break;
      case "Home":
        O.preventDefault(), A("first");
        break;
      case "End":
        O.preventDefault(), A("last");
        break;
      case "Escape":
        O.preventDefault(), m();
        break;
      case "Tab":
        g(!1);
        break;
    }
  }, I = wn(c);
  return /* @__PURE__ */ D(
    "div",
    {
      ref: k,
      className: [
        wt.root,
        wt[d],
        wt[`style-${r}`],
        wt[ks(i, "filled")],
        I ? wt[I] : null,
        l
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: wt.action,
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
            className: wt.caret,
            "aria-haspopup": "menu",
            "aria-expanded": y,
            "aria-controls": f,
            "aria-label": "More actions",
            disabled: o,
            onClick: () => y ? g(!1) : w(),
            onKeyDown: (O) => {
              !y && O.key === "ArrowDown" && (O.preventDefault(), w());
            },
            children: /* @__PURE__ */ s(Oe, { name: "chevron-down" })
          }
        ),
        y && /* @__PURE__ */ s(
          "div",
          {
            id: f,
            role: "menu",
            tabIndex: -1,
            className: wt.menu,
            onKeyDown: M,
            ...a,
            children: n.map((O, h) => /* @__PURE__ */ s(
              "button",
              {
                ref: (S) => {
                  $.current[h] = S;
                },
                type: "button",
                role: "menuitem",
                tabIndex: h === _ ? 0 : -1,
                disabled: O.disabled,
                className: [
                  wt.item,
                  h === _ ? wt.active : null,
                  O.danger ? wt.danger : null,
                  O.disabled ? wt.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => b(h),
                onMouseEnter: () => {
                  O.disabled || p(h);
                },
                children: O.label
              },
              O.key
            ))
          }
        )
      ]
    }
  );
}
const s0 = "_wrapper_eg26m_1", r0 = "_input_eg26m_8", o0 = "_invalid_eg26m_38", l0 = "_toggle_eg26m_45", a0 = "_xs_eg26m_80", i0 = "_sm_eg26m_86", c0 = "_md_eg26m_92", d0 = "_lg_eg26m_98", u0 = "_xl_eg26m_104", An = {
  wrapper: s0,
  input: r0,
  invalid: o0,
  toggle: l0,
  xs: a0,
  sm: i0,
  md: c0,
  lg: d0,
  xl: u0
}, mk = Fe(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    disabled: i,
    showLabel: c = "Show password",
    hideLabel: d = "Hide password",
    ...o
  }, l) {
    const [a, u] = X(!1);
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ D("div", { className: An.wrapper, "data-size": t, children: [
        /* @__PURE__ */ s(
          "input",
          {
            ref: l,
            type: a ? "text" : "password",
            disabled: i,
            className: [
              An.input,
              An[t],
              n ? An.invalid : null,
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
            className: An.toggle,
            "aria-pressed": a,
            "aria-label": a ? d : c,
            disabled: i,
            onClick: () => u((f) => !f),
            children: /* @__PURE__ */ s(Oe, { name: a ? "eye-off" : "eye", size: 16 })
          }
        )
      ] })
    );
  }
), f0 = "_mask_1pv7j_1", _0 = "_invalid_1pv7j_31", p0 = "_xs_1pv7j_38", h0 = "_sm_1pv7j_44", m0 = "_md_1pv7j_50", g0 = "_lg_1pv7j_56", x0 = "_xl_1pv7j_62", cs = {
  mask: f0,
  invalid: _0,
  xs: p0,
  sm: h0,
  md: m0,
  lg: g0,
  xl: x0
};
function Ks(e, t) {
  let n = e.replace(/\D/g, ""), r = "";
  for (const i of t)
    if (i === "#") {
      if (n.length === 0) break;
      r += n[0] ?? "", n = n.slice(1);
    } else if (n.length > 0)
      r += i;
    else
      break;
  return r;
}
const gk = Fe(function({
  size: t = "md",
  invalid: n = !1,
  mask: r,
  value: i,
  defaultValue: c = "",
  onChange: d,
  className: o,
  onKeyDown: l,
  ...a
}, u) {
  const [f, k] = X(c ?? ""), v = i !== void 0, $ = v ? i ?? "" : f, y = (p) => {
    const x = Ks(p, r);
    return v || k(x), d?.(x), x;
  };
  return /* @__PURE__ */ s(
    "input",
    {
      ref: u,
      type: "text",
      "data-size": t,
      value: $,
      onChange: (p) => {
        y(p.target.value);
      },
      onKeyDown: (p) => {
        if (p.key === "Backspace") {
          const x = p.currentTarget.selectionStart ?? $.length, w = $[x - 1];
          if (w !== void 0 && !/\d/.test(w)) {
            p.preventDefault();
            const m = $.replace(/\D/g, "");
            y(Ks(m.slice(0, -1), r));
          }
        }
        l?.(p);
      },
      className: [
        cs.mask,
        cs[t],
        n ? cs.invalid : null,
        o
      ].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...a
    }
  );
}), y0 = "_wrapper_b3q45_1", b0 = "_input_b3q45_8", v0 = "_invalid_b3q45_38", k0 = "_button_b3q45_45", w0 = "_up_b3q45_77", $0 = "_down_b3q45_82", O0 = "_xs_b3q45_87", N0 = "_sm_b3q45_93", S0 = "_md_b3q45_99", D0 = "_lg_b3q45_105", M0 = "_xl_b3q45_111", Qt = {
  wrapper: y0,
  input: b0,
  invalid: v0,
  button: k0,
  up: w0,
  down: $0,
  xs: O0,
  sm: N0,
  md: S0,
  lg: D0,
  xl: M0
};
function ps(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function C0(e) {
  let t = "", n = !1;
  for (const r of e)
    r >= "0" && r <= "9" ? t += r : r === "." && !n ? (n = !0, t += r) : r === "-" && t.length === 0 && (t += r);
  return t;
}
function fr(e, t, n) {
  return Math.min(n ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function z0(e, t, n) {
  return t === void 0 ? e : t + Math.round((e - t) / n) * n;
}
function E0(e, t, n, r, i) {
  const d = ps(e) ?? n ?? 0;
  let o;
  return n === void 0 ? o = d + t * i : t > 0 ? o = n + Math.ceil((d - n + 1e-9) / i) * i : o = n + Math.floor((d - n - 1e-9) / i) * i, fr(o, n, r);
}
const xk = Fe(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    disabled: i,
    value: c,
    defaultValue: d,
    onChange: o,
    min: l,
    max: a,
    step: u = 1,
    incrementLabel: f = "Increment",
    decrementLabel: k = "Decrement",
    onBlur: v,
    onKeyDown: $,
    ...y
  }, g) {
    const [_, p] = X(
      d != null ? String(d) : ""
    ), x = c !== void 0, w = x ? c == null ? "" : String(c) : _, m = (I) => {
      x || p(I), o?.(ps(I));
    }, C = (I) => {
      x || p(String(I)), o?.(I);
    }, b = (I) => {
      i || C(E0(w, I, l, a, u));
    }, N = (I) => {
      m(C0(I.target.value));
    }, A = (I) => {
      I.key === "ArrowUp" ? (I.preventDefault(), b(1)) : I.key === "ArrowDown" && (I.preventDefault(), b(-1)), $?.(I);
    }, M = (I) => {
      const O = ps(w);
      O === null ? (x || p(""), o?.(null)) : C(fr(z0(O, l, u), l, a)), v?.(I);
    };
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ D("div", { className: Qt.wrapper, "data-size": t, children: [
        /* @__PURE__ */ s(
          "input",
          {
            ref: g,
            type: "text",
            inputMode: "decimal",
            autoComplete: "off",
            value: w,
            disabled: i,
            onChange: N,
            onKeyDown: A,
            onBlur: M,
            className: [
              Qt.input,
              Qt[t],
              n ? Qt.invalid : null,
              r
            ].filter(Boolean).join(" "),
            "aria-invalid": n || void 0,
            ...y
          }
        ),
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: [Qt.button, Qt.up].join(" "),
            "aria-label": f,
            disabled: i,
            onClick: () => b(1),
            children: /* @__PURE__ */ s(Oe, { name: "chevron-up", size: 14 })
          }
        ),
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: [Qt.button, Qt.down].join(" "),
            "aria-label": k,
            disabled: i,
            onClick: () => b(-1),
            children: /* @__PURE__ */ s(Oe, { name: "chevron-down", size: 14 })
          }
        )
      ] })
    );
  }
), De = {
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
}, I0 = [
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
function yt(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function hs(e) {
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
function A0({ r: e, g: t, b: n }) {
  const r = (i) => Math.round(i).toString(16).padStart(2, "0");
  return `#${r(e)}${r(t)}${r(n)}`;
}
function j0({ r: e, g: t, b: n }) {
  const r = e / 255, i = t / 255, c = n / 255, d = Math.max(r, i, c), o = Math.min(r, i, c), l = d - o;
  let a = 0;
  return l !== 0 && (d === r ? a = (i - c) / l % 6 : d === i ? a = (c - r) / l + 2 : a = (r - i) / l + 4, a *= 60, a < 0 && (a += 360)), {
    h: a,
    s: d === 0 ? 0 : l / d,
    v: d
  };
}
function gn({ h: e, s: t, v: n }) {
  const r = n * t, i = e / 60, c = r * (1 - Math.abs(i % 2 - 1));
  let d = 0, o = 0, l = 0;
  i < 1 ? (d = r, o = c) : i < 2 ? (d = c, o = r) : i < 3 ? (o = r, l = c) : i < 4 ? (o = c, l = r) : i < 5 ? (d = c, l = r) : (d = r, l = c);
  const a = n - r;
  return {
    r: Math.round((d + a) * 255),
    g: Math.round((o + a) * 255),
    b: Math.round((l + a) * 255),
    a: 1
  };
}
function T0(e) {
  const t = hs(e);
  if (t) return t;
  const n = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*([\d.]+))?\s*\)$/i.exec(
    e.trim()
  );
  return n ? {
    r: yt(Number(n[1]), 0, 255),
    g: yt(Number(n[2]), 0, 255),
    b: yt(Number(n[3]), 0, 255),
    a: n[4] != null ? yt(Number(n[4]), 0, 1) : 1
  } : null;
}
function Us({ r: e, g: t, b: n, a: r }) {
  return r >= 1 ? `rgb(${e}, ${t}, ${n})` : `rgba(${e}, ${t}, ${n}, ${Math.round(r * 100) / 100})`;
}
const yk = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: n = !0,
  showPalette: r = !0,
  palette: i = I0,
  showButton: c = !1,
  showArrow: d = !0,
  disabled: o = !1,
  invalid: l = !1,
  placeholder: a = "",
  size: u = "md",
  tabIndex: f = 0,
  className: k,
  onChange: v,
  onValueChange: $,
  onOpen: y,
  onClose: g
}) => {
  const _ = ee(null), p = ee(null), x = ee(null), w = ee(null), m = ee(null), C = qe(), b = ee(null), N = xe(
    () => T0(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [A, M] = X(!1), [I, O] = X(null), h = I ?? N, S = xe(() => j0(h), [h]), L = B(
    (V) => {
      const z = Us(V);
      v?.(z), $?.(z);
    },
    [v, $]
  ), E = B(
    (V, z) => {
      O(V), z && !c && L(V);
    },
    [c, L]
  ), j = B(() => {
    M(!1), O(null), g?.(), p.current?.focus();
  }, [g]), T = B(() => {
    o || (O(N), M(!0), y?.());
  }, [o, N, y]), F = B(() => {
    A ? j() : T();
  }, [A, j, T]), G = B(
    (V, z) => {
      const K = x.current;
      if (!K) return S;
      const se = K.getBoundingClientRect(), fe = yt((V - se.left) / se.width, 0, 1), re = yt(1 - (z - se.top) / se.height, 0, 1);
      return { h: S.h, s: fe, v: re };
    },
    [S]
  ), Y = B(
    (V, z) => {
      if (!z) return 0;
      const K = z.getBoundingClientRect();
      return yt((V - K.left) / K.width, 0, 1);
    },
    []
  ), U = (V) => {
    if (o) return;
    V.preventDefault(), V.currentTarget.setPointerCapture(V.pointerId), b.current = "sat";
    const z = G(V.clientX, V.clientY);
    E({ ...gn(z), a: h.a }, !0);
  }, ne = (V) => {
    if (b.current !== "sat") return;
    V.preventDefault();
    const z = G(V.clientX, V.clientY);
    E({ ...gn(z), a: h.a }, !0);
  }, le = (V) => {
    if (o) return;
    V.preventDefault(), V.currentTarget.setPointerCapture(V.pointerId), b.current = "hue";
    const z = Y(V.clientX, w.current);
    E(
      { ...gn({ ...S, h: z * 360 }), a: h.a },
      !0
    );
  }, te = (V) => {
    if (b.current !== "hue") return;
    V.preventDefault();
    const z = Y(V.clientX, w.current);
    E(
      { ...gn({ ...S, h: z * 360 }), a: h.a },
      !0
    );
  }, q = (V) => {
    if (o) return;
    V.preventDefault(), V.currentTarget.setPointerCapture(V.pointerId), b.current = "alpha";
    const z = Y(V.clientX, m.current);
    E({ ...h, a: z }, !0);
  }, ie = (V) => {
    if (b.current !== "alpha") return;
    V.preventDefault();
    const z = Y(V.clientX, m.current);
    E({ ...h, a: z }, !0);
  }, J = () => {
    b.current = null;
  }, de = B(
    (V, z) => {
      const K = {
        h: S.h,
        s: yt(S.s + V, 0, 1),
        v: yt(S.v + z, 0, 1)
      };
      E({ ...gn(K), a: h.a }, !0);
    },
    [S, h.a, E]
  ), ae = B(
    (V) => {
      const z = (S.h + V + 360) % 360;
      E({ ...gn({ ...S, h: z }), a: h.a }, !0);
    },
    [S, h.a, E]
  ), ve = B(
    (V) => {
      E({ ...h, a: yt(h.a + V, 0, 1) }, !0);
    },
    [h, E]
  ), $e = (V) => {
    switch (V.key) {
      case "ArrowLeft":
        V.preventDefault(), de(-0.05, 0);
        break;
      case "ArrowRight":
        V.preventDefault(), de(0.05, 0);
        break;
      case "ArrowUp":
        V.preventDefault(), de(0, 0.05);
        break;
      case "ArrowDown":
        V.preventDefault(), de(0, -0.05);
        break;
      case "Escape":
        V.preventDefault(), j();
        break;
    }
  }, Re = (V, z) => {
    switch (V.key) {
      case "ArrowLeft":
        V.preventDefault(), z === "hue" ? ae(-6) : ve(-0.05);
        break;
      case "ArrowRight":
        V.preventDefault(), z === "hue" ? ae(6) : ve(0.05);
        break;
      case "Escape":
        V.preventDefault(), j();
        break;
    }
  }, we = (V, z) => {
    if (V === "hex") {
      const re = hs(z);
      re && E({ ...re, a: h.a }, !0);
      return;
    }
    const K = z.replace(/[^\d.]/g, ""), se = Number.parseFloat(K);
    if (Number.isNaN(se)) return;
    if (V === "a") {
      const re = K.includes(".") ? yt(se, 0, 1) : yt(se / 100, 0, 1);
      E({ ...h, a: re }, !0);
      return;
    }
    const fe = { r: 255, g: 255, b: 255 };
    E(
      { ...h, [V]: yt(se, 0, fe[V]) },
      !0
    );
  }, Xe = () => {
    I && (L(I), O(null), M(!1), g?.(), p.current?.focus());
  };
  me(() => {
    if (!A) return;
    const V = (z) => {
      _.current && !_.current.contains(z.target) && j();
    };
    return document.addEventListener("mousedown", V), () => document.removeEventListener("mousedown", V);
  }, [A, j]), me(() => {
    if (!A) return;
    const V = (z) => {
      z.key === "Escape" && j();
    };
    return document.addEventListener("keydown", V), () => document.removeEventListener("keydown", V);
  }, [A, j]);
  const be = u === "xs" ? De["dx-colorpicker-trigger-xs"] : u === "sm" ? De["dx-colorpicker-trigger-sm"] : u === "lg" ? De["dx-colorpicker-trigger-lg"] : u === "xl" ? De["dx-colorpicker-trigger-xl"] : De["dx-colorpicker-trigger"], Ze = Us(h), Ve = A0(h), Le = { x: S.s * 100, y: (1 - S.v) * 100 }, tt = S.h / 360 * 100, Qe = h.a * 100, et = /* @__PURE__ */ D("div", { className: De["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ s(
      "div",
      {
        ref: x,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(S.s * 100),
        "aria-valuetext": `Saturation ${Math.round(S.s * 100)}%, value ${Math.round(S.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : f,
        className: De["dx-saturation-picker"],
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${S.h}, 100%, 50%)`
        },
        onKeyDown: $e,
        onPointerDown: U,
        onPointerMove: ne,
        onPointerUp: J,
        children: /* @__PURE__ */ s(
          "span",
          {
            className: De["dx-saturation-indicator"],
            style: { left: `${Le.x}%`, top: `${Le.y}%` },
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
        "aria-valuenow": Math.round(S.h),
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : f,
        className: De["dx-hue-picker"],
        onKeyDown: (V) => Re(V, "hue"),
        onPointerDown: le,
        onPointerMove: te,
        onPointerUp: J,
        children: /* @__PURE__ */ s(
          "span",
          {
            className: De["dx-hue-indicator"],
            style: { left: `${tt}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    t && /* @__PURE__ */ s(
      "div",
      {
        ref: m,
        role: "slider",
        "aria-label": "Alpha",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(Qe),
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : f,
        className: De["dx-alpha-picker"],
        style: {
          background: `repeating-conic-gradient(var(--dx-border-color) 0% 25%, var(--dx-surface-color) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${S.h}, 100%, 50%))`
        },
        onKeyDown: (V) => Re(V, "alpha"),
        onPointerDown: q,
        onPointerMove: ie,
        onPointerUp: J,
        children: /* @__PURE__ */ s(
          "span",
          {
            className: De["dx-alpha-indicator"],
            style: { left: `${Qe}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    n && /* @__PURE__ */ D("div", { className: De["dx-colorpicker-rgba"], children: [
      /* @__PURE__ */ D("label", { className: De["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ s("span", { className: De["dx-colorpicker-rgba-label"], children: "Hex" }),
        /* @__PURE__ */ s(
          "input",
          {
            type: "text",
            maxLength: 7,
            className: De["dx-colorpicker-rgba-input"],
            "aria-label": "Hex",
            value: Ve,
            onChange: (V) => we("hex", V.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ D("label", { className: De["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ s("span", { className: De["dx-colorpicker-rgba-label"], children: "R" }),
        /* @__PURE__ */ s(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: De["dx-colorpicker-rgba-input"],
            "aria-label": "Red",
            value: h.r,
            onChange: (V) => we("r", V.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ D("label", { className: De["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ s("span", { className: De["dx-colorpicker-rgba-label"], children: "G" }),
        /* @__PURE__ */ s(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: De["dx-colorpicker-rgba-input"],
            "aria-label": "Green",
            value: h.g,
            onChange: (V) => we("g", V.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ D("label", { className: De["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ s("span", { className: De["dx-colorpicker-rgba-label"], children: "B" }),
        /* @__PURE__ */ s(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: De["dx-colorpicker-rgba-input"],
            "aria-label": "Blue",
            value: h.b,
            onChange: (V) => we("b", V.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ D("label", { className: De["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ s("span", { className: De["dx-colorpicker-rgba-label"], children: "A" }),
        /* @__PURE__ */ s(
          "input",
          {
            type: "text",
            inputMode: "decimal",
            maxLength: 4,
            className: De["dx-colorpicker-rgba-input"],
            "aria-label": "Alpha",
            value: Math.round(h.a * 100),
            onChange: (V) => we("a", V.target.value)
          }
        )
      ] })
    ] }),
    r && /* @__PURE__ */ s("div", { className: De["dx-colorpicker-palette"], children: i.map((V) => /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        className: De["dx-colorpicker-swatch"],
        "aria-label": V,
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : f,
        style: { backgroundColor: V },
        onClick: () => {
          const z = hs(V);
          c ? E({ ...z, a: h.a }, !1) : (O(null), L({ ...z, a: h.a }), M(!1), g?.(), p.current?.focus());
        }
      },
      V
    )) }),
    c && /* @__PURE__ */ s("div", { className: De["dx-colorpicker-footer"], children: /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        className: De["dx-colorpicker-ok"],
        onClick: Xe,
        children: "OK"
      }
    ) })
  ] });
  return /* @__PURE__ */ D(
    "div",
    {
      ref: _,
      className: [
        De["dx-colorpicker"],
        A ? De["dx-colorpicker-open"] : null,
        l ? De["dx-colorpicker-invalid"] : null,
        k
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ D(
          "button",
          {
            ref: p,
            type: "button",
            className: [De["dx-colorpicker-trigger"], be].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": A,
            "aria-controls": C,
            "aria-label": "Pick a color",
            "aria-disabled": o || void 0,
            disabled: o,
            tabIndex: f,
            onClick: F,
            onKeyDown: (V) => {
              V.key === "Escape" && A && (V.preventDefault(), j());
            },
            children: [
              /* @__PURE__ */ s(
                "span",
                {
                  className: De["dx-colorpicker-value"],
                  style: { backgroundColor: Ze },
                  "aria-hidden": "true"
                }
              ),
              a && /* @__PURE__ */ s("span", { className: De["dx-colorpicker-text"], children: a }),
              d && /* @__PURE__ */ s("span", { className: De["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ s(Oe, { name: "chevron-down", size: 14 }) })
            ]
          }
        ),
        A && /* @__PURE__ */ s(
          "div",
          {
            id: C,
            role: "dialog",
            "aria-label": "Choose color",
            className: De["dx-colorpicker-popup"],
            children: et
          }
        )
      ]
    }
  );
}, Ee = {
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
}, L0 = 42;
function bt(e) {
  return String(e).padStart(2, "0");
}
function ht(e) {
  return `${e.year}-${bt(e.month)}-${bt(e.day)}`;
}
function P0(e, t) {
  const n = ht(e);
  return t ? `${n} ${bt(e.hour)}:${bt(e.minute)}:${bt(e.second)}` : n;
}
function ms(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!t) return null;
  const n = Number(t[1]), r = Number(t[2]), i = Number(t[3]), c = t[4] != null ? Number(t[4]) : 0, d = t[5] != null ? Number(t[5]) : 0, o = t[6] != null ? Number(t[6]) : 0;
  if (r < 1 || r > 12 || i < 1 || i > 31) return null;
  const l = new Date(n, r - 1, i, c, d, o);
  return l.getFullYear() !== n || l.getMonth() !== r - 1 || l.getDate() !== i ? null : { year: n, month: r, day: i, hour: c, minute: d, second: o };
}
function en() {
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
function Gn(e, t) {
  const n = new Date(e.year, e.month - 1 + t, 1), r = n.getFullYear(), i = n.getMonth() + 1, c = new Date(r, i, 0).getDate();
  return {
    year: r,
    month: i,
    day: Math.min(e.day, c),
    hour: e.hour,
    minute: e.minute,
    second: e.second
  };
}
function Ws(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const Xs = {
  yyyy: (e) => String(e.year).padStart(4, "0"),
  yy: (e) => bt(e.year % 100),
  MM: (e) => bt(e.month),
  M: (e) => String(e.month),
  dd: (e) => bt(e.day),
  d: (e) => String(e.day),
  HH: (e) => bt(e.hour),
  H: (e) => String(e.hour),
  mm: (e) => bt(e.minute),
  m: (e) => String(e.minute),
  ss: (e) => bt(e.second),
  s: (e) => String(e.second),
  tt: (e, t, n) => new Intl.DateTimeFormat(n, {
    hour: "numeric",
    hour12: !0
  }).formatToParts(t).find((i) => i.type === "dayPeriod")?.value ?? ""
}, R0 = [
  "yyyy",
  "yy",
  "MM",
  "dd",
  "HH",
  "mm",
  "ss",
  "tt"
], B0 = ["y", "M", "d", "H", "m", "s"];
function Yn(e, t, n) {
  const r = new Date(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second
  );
  let i = "", c = 0;
  for (; c < t.length; ) {
    let d = !1;
    for (const l of R0)
      if (t.startsWith(l, c)) {
        i += Xs[l](e, r, n), c += l.length, d = !0;
        break;
      }
    if (d) continue;
    const o = t[c];
    if (B0.includes(o)) {
      i += Xs[o](e, r, n), c += 1;
      continue;
    }
    i += o, c += 1;
  }
  return i;
}
const q0 = [
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
function F0(e, t) {
  const n = {};
  let r = 0, i = 0;
  for (; i < t.length; ) {
    let o = null;
    for (const l of q0)
      if (t.startsWith(l, i)) {
        o = l;
        break;
      }
    if (o) {
      const l = e.slice(r, r + o.length);
      if (!/^\d+$/.test(l)) return null;
      const a = Number(l);
      switch (o) {
        case "yyyy":
          n.year = a;
          break;
        case "yy":
        case "y":
          n.year = 2e3 + a;
          break;
        case "MM":
        case "M":
          n.month = a;
          break;
        case "dd":
        case "d":
          n.day = a;
          break;
        case "HH":
        case "H":
          n.hour = a;
          break;
        case "mm":
        case "m":
          n.minute = a;
          break;
        case "ss":
        case "s":
          n.second = a;
          break;
      }
      r += o.length, i += o.length;
      continue;
    }
    if (e[r] !== t[i]) return null;
    r += 1, i += 1;
  }
  const c = {
    year: n.year ?? (/* @__PURE__ */ new Date()).getFullYear(),
    month: n.month ?? 1,
    day: n.day ?? 1,
    hour: n.hour ?? 0,
    minute: n.minute ?? 0,
    second: n.second ?? 0
  };
  if (c.month < 1 || c.month > 12 || c.day < 1 || c.day > 31)
    return null;
  const d = new Date(
    c.year,
    c.month - 1,
    c.day,
    c.hour,
    c.minute,
    c.second
  );
  return d.getFullYear() !== c.year || d.getMonth() !== c.month - 1 || d.getDate() !== c.day ? null : c;
}
function jn(e, t) {
  const n = ms(e);
  return n || F0(e, t);
}
function H0(e, t, n) {
  return t && ht(e) < ht(t) ? t : n && ht(e) > ht(n) ? n : e;
}
const K0 = ["hour", "minute", "second"];
function Zn(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const bk = Fe(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: i,
    format: c = "yyyy-MM-dd",
    min: d,
    max: o,
    showTime: l = !1,
    showButton: a = !0,
    allowClear: u = !1,
    inline: f = !1,
    disabledDates: k,
    locale: v = "en-US",
    onChange: $,
    onValueChange: y,
    onOpen: g,
    onClose: _,
    disabled: p,
    readOnly: x,
    placeholder: w,
    ariaLabel: m,
    triggerLabel: C,
    clearLabel: b,
    tabIndex: N,
    className: A,
    onBlur: M,
    onKeyDown: I,
    ...O
  }, h) {
    const S = ee(null), L = ee(null), E = ee(null), j = ee(null), T = qe(), F = r !== void 0, [G, Y] = X(
      () => i != null ? Yn(
        jn(i, c) ?? en(),
        c,
        v
      ) : ""
    ), [U, ne] = X(!1), [le, te] = X(null), [q, ie] = X(() => {
      const W = r !== void 0 ? r ?? "" : i ?? "";
      if (W) {
        const ue = jn(W, c);
        if (ue) return ue;
      }
      return en();
    }), J = xe(() => d ? ms(d) : null, [d]), de = xe(() => o ? ms(o) : null, [o]), ae = xe(
      () => new Set(k ?? []),
      [k]
    ), ve = xe(() => {
      const W = F ? r ?? "" : G;
      return W ? jn(W, c) : null;
    }, [r, G, F, c]), $e = B(
      (W) => {
        const ue = ht(W);
        return !!(ae.has(ue) || J && ue < ht(J) || de && ue > ht(de));
      },
      [ae, J, de]
    ), Re = B(
      (W) => {
        if (!$e(W)) return W;
        for (let ue = 1; ue <= 366; ue += 1) {
          const Pe = Ut(W, ue);
          if (!$e(Pe)) return Pe;
          const He = Ut(W, -ue);
          if (!$e(He)) return He;
        }
        return W;
      },
      [$e]
    ), we = B(
      (W) => {
        F || Y(W ? Yn(W, c, v) : "");
        const ue = W ? P0(W, l) : "";
        $?.(ue), y?.(ue);
      },
      [F, c, v, l, $, y]
    ), Xe = B(
      (W) => {
        L.current = W, typeof h == "function" ? h(W) : h && (h.current = W);
      },
      [h]
    ), be = B(() => {
      ne(!1), te(null), _?.(), f || E.current?.focus();
    }, [f, _]), Ze = B(() => {
      if (p) return;
      const W = ve ?? en();
      te(W), ie(Re(W)), ne(!0), g?.();
    }, [p, ve, Re, g]), Ve = B(() => {
      U ? be() : Ze();
    }, [U, be, Ze]), Le = B((W) => {
      j.current?.querySelector(
        `[data-date="${ht(W)}"]`
      )?.focus();
    }, []), tt = B(
      (W) => {
        if ($e(W)) return;
        const ue = le ?? ve, He = {
          ...l ? {
            hour: ue?.hour ?? 0,
            minute: ue?.minute ?? 0,
            second: ue?.second ?? 0
          } : { hour: 0, minute: 0, second: 0 },
          year: W.year,
          month: W.month,
          day: W.day
        };
        te(He), l || (we(He), be());
      },
      [$e, le, ve, l, we, be]
    ), Qe = B(
      (W, ue) => {
        te((Pe) => {
          const He = Pe ?? ve ?? en(), St = Math.min(W === "hour" ? 23 : 59, Math.max(0, He[W] + ue));
          return { ...He, [W]: St };
        });
      },
      [ve]
    ), et = B(
      (W, ue) => {
        const Pe = ue.replace(/\D/g, ""), He = Pe === "" ? 0 : Number(Pe), Rt = W === "hour" ? 23 : 59;
        te((St) => ({ ...St ?? ve ?? en(), [W]: Math.min(Rt, He) }));
      },
      [ve]
    ), V = B(() => {
      le && (we(le), be());
    }, [le, we, be]), z = B(() => {
      if (U) return;
      const W = jn(G, c);
      we(W ? H0(W, J, de) : null);
    }, [U, G, c, J, de, we]), K = (W) => {
      const ue = W.target.value;
      F || Y(ue), U && te(null);
    }, se = (W) => {
      W.key === "Enter" ? (W.preventDefault(), U ? le && (we(le), be()) : z()) : W.key === "Escape" ? U && (W.preventDefault(), be()) : W.key === "ArrowDown" && !U ? (W.preventDefault(), Ze()) : W.key === "Tab" && U && ne(!1), I?.(W);
    }, fe = (W) => {
      z(), M?.(W);
    }, re = (W) => {
      let ue = null;
      switch (W.key) {
        case "ArrowLeft":
          ue = Ut(q, -1), W.preventDefault();
          break;
        case "ArrowRight":
          ue = Ut(q, 1), W.preventDefault();
          break;
        case "ArrowUp":
          ue = Ut(q, -7), W.preventDefault();
          break;
        case "ArrowDown":
          ue = Ut(q, 7), W.preventDefault();
          break;
        case "Home":
          ue = Ut(q, -Ws(q)), W.preventDefault();
          break;
        case "End":
          ue = Ut(q, 6 - Ws(q)), W.preventDefault();
          break;
        case "PageUp":
          ue = Gn(q, W.shiftKey ? -12 : -1), W.preventDefault();
          break;
        case "PageDown":
          ue = Gn(q, W.shiftKey ? 12 : 1), W.preventDefault();
          break;
        case "Enter":
        case " ":
          W.preventDefault(), tt(q);
          break;
        case "Escape":
          W.preventDefault(), be();
          break;
        case "Tab":
          ne(!1);
          break;
      }
      if (ue) {
        const Pe = Re(ue);
        ie(Pe), setTimeout(() => Le(Pe), 0);
      }
    };
    me(() => {
      if (!U) return;
      const W = (ue) => {
        S.current && !S.current.contains(ue.target) && be();
      };
      return document.addEventListener("mousedown", W), () => document.removeEventListener("mousedown", W);
    }, [U, be]), me(() => {
      if (!U) return;
      const W = (ue) => {
        ue.key === "Escape" && be();
      };
      return document.addEventListener("keydown", W), () => document.removeEventListener("keydown", W);
    }, [U, be]);
    const ge = () => {
      F || Y(""), $?.(""), y?.(""), L.current?.focus();
    }, Se = U && le ? Yn(le, c, v) : F ? r ? Yn(
      jn(r, c) ?? en(),
      c,
      v
    ) : "" : G, Be = F ? !!r : G.length > 0, Je = f || U, ut = { year: q.year, month: q.month }, vt = new Date(ut.year, ut.month - 1, 1).getDay(), Q = {
      year: ut.year,
      month: ut.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, Me = [];
    for (let W = 0; W < L0; W += 1)
      Me.push(Ut(Q, W - vt));
    const nt = le ? ht(le) : ve ? ht(ve) : null, Gt = ht(en()), Nt = `${ut.year}-${bt(ut.month)}`, Ce = xe(
      () => new Intl.DateTimeFormat(v, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      [v]
    ), Ge = new Intl.DateTimeFormat(v, {
      month: "long",
      year: "numeric"
    }).format(new Date(ut.year, ut.month - 1, 1)), kt = Array.from(
      { length: 7 },
      (W, ue) => new Intl.DateTimeFormat(v, { weekday: "short" }).format(
        new Date(2021, 0, 3 + ue)
      )
    ), Pt = t === "xs" ? Ee["dx-datepicker-input--xs"] : t === "sm" ? Ee["dx-datepicker-input--sm"] : t === "lg" ? Ee["dx-datepicker-input--lg"] : t === "xl" ? Ee["dx-datepicker-input--xl"] : Ee["dx-datepicker-input--md"], sn = /* @__PURE__ */ D(
      "div",
      {
        className: Ee["dx-datepicker-calendar"],
        "aria-label": m ?? "Date picker",
        children: [
          /* @__PURE__ */ D("div", { className: Ee["dx-datepicker-header"], children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: Ee["dx-datepicker-nav"],
                "aria-label": "Previous month",
                onClick: () => {
                  const W = Re(Gn(q, -1));
                  ie(W), setTimeout(() => Le(W), 0);
                },
                children: /* @__PURE__ */ s(Oe, { name: "chevron-left", size: 16 })
              }
            ),
            /* @__PURE__ */ s("span", { className: Ee["dx-datepicker-title"], children: Ge }),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: Ee["dx-datepicker-nav"],
                "aria-label": "Next month",
                onClick: () => {
                  const W = Re(Gn(q, 1));
                  ie(W), setTimeout(() => Le(W), 0);
                },
                children: /* @__PURE__ */ s(Oe, { name: "chevron-right", size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ D(
            "div",
            {
              ref: j,
              role: "grid",
              className: Ee["dx-datepicker-grid"],
              onKeyDown: re,
              children: [
                /* @__PURE__ */ s("div", { role: "row", className: Ee["dx-datepicker-week-row"], children: kt.map((W) => /* @__PURE__ */ s(
                  "div",
                  {
                    role: "columnheader",
                    className: Ee["dx-datepicker-weekday"],
                    children: W
                  },
                  W
                )) }),
                Array.from({ length: 6 }, (W, ue) => /* @__PURE__ */ s(
                  "div",
                  {
                    role: "row",
                    className: Ee["dx-datepicker-row"],
                    children: Me.slice(ue * 7, ue * 7 + 7).map((Pe) => {
                      const He = ht(Pe), Rt = $e(Pe), St = He.startsWith(Nt);
                      return /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          role: "gridcell",
                          "data-date": He,
                          tabIndex: He === ht(q) ? 0 : -1,
                          "aria-selected": He === nt || void 0,
                          "aria-disabled": Rt || void 0,
                          "aria-label": Ce.format(
                            new Date(Pe.year, Pe.month - 1, Pe.day)
                          ),
                          className: [
                            Ee["dx-datepicker-day"],
                            St ? null : Ee["dx-datepicker-day--outside"],
                            He === Gt ? Ee["dx-datepicker-day--today"] : null,
                            He === nt ? Ee["dx-datepicker-day--selected"] : null,
                            Rt ? Ee["dx-datepicker-day--disabled"] : null
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
          l && /* @__PURE__ */ D("div", { className: Ee["dx-datepicker-time"], children: [
            K0.map((W) => /* @__PURE__ */ D("label", { className: Ee["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ s("span", { className: Ee["dx-datepicker-time-label"], children: Zn(W) }),
              /* @__PURE__ */ D("div", { className: Ee["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    className: Ee["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": Zn(W),
                    value: bt(
                      (le ?? ve ?? en())[W]
                    ),
                    onChange: (ue) => et(W, ue.target.value),
                    onKeyDown: (ue) => {
                      ue.key === "ArrowUp" ? (ue.preventDefault(), Qe(W, 1)) : ue.key === "ArrowDown" ? (ue.preventDefault(), Qe(W, -1)) : ue.key === "Enter" && (ue.preventDefault(), V());
                    }
                  }
                ),
                /* @__PURE__ */ D("span", { className: Ee["dx-datepicker-time-buttons"], children: [
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Increase ${Zn(W).toLowerCase()}`,
                      onClick: () => Qe(W, 1),
                      children: /* @__PURE__ */ s(Oe, { name: "chevron-up", size: 11 })
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Decrease ${Zn(W).toLowerCase()}`,
                      onClick: () => Qe(W, -1),
                      children: /* @__PURE__ */ s(Oe, { name: "chevron-down", size: 11 })
                    }
                  )
                ] })
              ] })
            ] }, W)),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: Ee["dx-datepicker-ok"],
                onClick: V,
                children: "OK"
              }
            )
          ] })
        ]
      }
    );
    return /* @__PURE__ */ D(
      "div",
      {
        ref: S,
        className: [
          Ee["dx-datepicker"],
          f ? Ee["dx-datepicker-inline"] : null,
          A
        ].filter(Boolean).join(" "),
        children: [
          !f && /* @__PURE__ */ D(Ne, { children: [
            /* @__PURE__ */ s(
              "input",
              {
                ref: Xe,
                type: "text",
                autoComplete: "off",
                value: Se,
                disabled: p,
                readOnly: x,
                placeholder: w,
                tabIndex: N,
                role: a ? void 0 : "combobox",
                "aria-label": m ?? "Date",
                "aria-haspopup": a ? void 0 : "dialog",
                "aria-expanded": a ? void 0 : Je,
                "aria-controls": a ? void 0 : T,
                "aria-invalid": n || void 0,
                className: [
                  Ee["dx-datepicker-input"],
                  Pt,
                  n ? Ee["dx-datepicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: K,
                onKeyDown: se,
                onBlur: fe,
                onClick: () => {
                  a || Ve();
                },
                ...O
              }
            ),
            u && !p && Be && /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: [
                  Ee["dx-datepicker-clear"],
                  a ? Ee["dx-datepicker-clear--inset"] : null
                ].filter(Boolean).join(" "),
                "aria-label": b ?? "Clear",
                onClick: ge,
                children: /* @__PURE__ */ s(Oe, { name: "close", size: 14 })
              }
            ),
            a && /* @__PURE__ */ s(
              "button",
              {
                ref: E,
                type: "button",
                className: [Ee["dx-datepicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": C ?? "Open calendar",
                "aria-haspopup": "dialog",
                "aria-expanded": U,
                "aria-controls": T,
                disabled: p,
                onClick: Ve,
                children: /* @__PURE__ */ s(Oe, { name: "calendar", size: 16 })
              }
            )
          ] }),
          Je && /* @__PURE__ */ s(
            "div",
            {
              id: T,
              role: f ? void 0 : "dialog",
              className: f ? void 0 : Ee["dx-datepicker-popup"],
              children: sn
            }
          )
        ]
      }
    );
  }
), tn = {
  "dx-rating": "_dx-rating_yg52p_1",
  "dx-rating-item": "_dx-rating-item_yg52p_8",
  "dx-rating-item-filled": "_dx-rating-item-filled_yg52p_28",
  "dx-rating-icon-filled": "_dx-rating-icon-filled_yg52p_43",
  "dx-rating-icon-empty": "_dx-rating-icon-empty_yg52p_51",
  "dx-rating-clear": "_dx-rating-clear_yg52p_55",
  "dx-rating-readonly": "_dx-rating-readonly_yg52p_87",
  "dx-rating-disabled": "_dx-rating-disabled_yg52p_96"
}, vk = ({
  value: e = 0,
  stars: t = 5,
  readOnly: n = !1,
  disabled: r = !1,
  ariaLabel: i = "Rating",
  clearLabel: c = "Clear",
  rateLabel: d = "Rate",
  tabIndex: o = 0,
  className: l,
  onChange: a,
  onValueChange: u
}) => {
  const [f, k] = X(e), v = B(
    (p) => Math.min(t, Math.max(1, p)),
    [t]
  ), $ = B(
    (p) => {
      a?.(p), u?.(p);
    },
    [a, u]
  ), y = B(
    (p) => {
      n || r || ($(p), k(p));
    },
    [n, r, $]
  ), g = (p) => {
    if (n || r) return;
    const x = f > 0 ? f : 1;
    switch (p.key) {
      case "ArrowRight":
      case "ArrowUp":
        p.preventDefault(), y(v(x + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        p.preventDefault(), y(v(x - 1));
        break;
      case "Home":
        p.preventDefault(), y(1);
        break;
      case "End":
        p.preventDefault(), y(t);
        break;
    }
  }, _ = Array.from({ length: t }, (p, x) => x + 1);
  return /* @__PURE__ */ D(
    "div",
    {
      role: "radiogroup",
      "aria-label": i,
      "aria-readonly": n || void 0,
      className: [
        tn["dx-rating"],
        n ? tn["dx-rating-readonly"] : null,
        r ? tn["dx-rating-disabled"] : null,
        l
      ].filter(Boolean).join(" "),
      onKeyDown: g,
      children: [
        !n && !r && /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: tn["dx-rating-clear"],
            "aria-label": c,
            tabIndex: e === 0 ? o : -1,
            disabled: r,
            onClick: () => y(0),
            children: /* @__PURE__ */ s(Oe, { name: "ban", size: 16 })
          }
        ),
        _.map((p) => {
          const x = p <= e, w = p === (e > 0 ? e : f);
          return /* @__PURE__ */ D(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": x,
              "aria-posinset": p,
              "aria-setsize": t,
              "aria-label": `${d} ${p}`,
              tabIndex: w ? o : -1,
              "aria-disabled": r || n || void 0,
              disabled: r || n,
              className: [
                tn["dx-rating-item"],
                x ? tn["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => y(p),
              onFocus: () => k(p),
              children: [
                /* @__PURE__ */ s(
                  "span",
                  {
                    className: tn["dx-rating-icon-filled"],
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ s(Oe, { name: "star", size: 20 })
                  }
                ),
                /* @__PURE__ */ s("span", { className: tn["dx-rating-icon-empty"], "aria-hidden": "true", children: /* @__PURE__ */ s(Oe, { name: "star-outline", size: 20 }) })
              ]
            },
            p
          );
        })
      ]
    }
  );
}, cn = {
  "dx-slider": "_dx-slider_x6ptv_1",
  "dx-slider-track": "_dx-slider-track_x6ptv_9",
  "dx-slider-range": "_dx-slider-range_x6ptv_17",
  "dx-slider-handle": "_dx-slider-handle_x6ptv_26",
  "dx-slider-vertical": "_dx-slider-vertical_x6ptv_58",
  "dx-slider-disabled": "_dx-slider-disabled_x6ptv_84"
};
function At(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const kk = ({
  value: e = 0,
  valueMin: t = 0,
  valueMax: n = 100,
  min: r = 0,
  max: i = 100,
  step: c = 1,
  range: d = !1,
  orientation: o = "horizontal",
  disabled: l = !1,
  label: a = "Value",
  minLabel: u = "Min",
  maxLabel: f = "Max",
  tabIndex: k = 0,
  className: v,
  onChange: $,
  onInput: y,
  onValueChange: g,
  onInputChange: _
}) => {
  const p = ee(null), x = ee(
    null
  ), [w, m] = X(null), C = w ?? e, b = xe(
    () => At(C, r, i),
    [C, r, i]
  ), N = xe(
    () => At(d ? t : b, r, i),
    [d, t, b, r, i]
  ), A = xe(
    () => At(d ? Math.max(n, N) : b, r, i),
    [d, n, N, b, r, i]
  ), M = B(
    (q) => {
      const ie = i - r;
      return ie <= 0 ? 0 : (At(q, r, i) - r) / ie * 100;
    },
    [r, i]
  ), I = B(
    (q, ie) => {
      const J = p.current;
      if (!J) return r;
      const de = J.getBoundingClientRect();
      let ae;
      o === "vertical" ? ae = 1 - (ie - de.top) / de.height : ae = (q - de.left) / de.width;
      const ve = r + At(ae, 0, 1) * (i - r);
      return c > 0 ? At(Math.round(ve / c) * c, r, i) : At(ve, r, i);
    },
    [r, i, c, o]
  ), O = B(
    (q) => {
      typeof q == "number" && m(q), $?.(q), g?.(q);
    },
    [$, g]
  ), h = B(
    (q) => {
      typeof q == "number" && m(q), y?.(q), _?.(q);
    },
    [y, _]
  ), S = B(
    (q, ie, J) => {
      const de = I(ie, J);
      let ae;
      d ? q === "min" ? ae = { min: Math.min(de, A), max: A } : ae = { min: N, max: Math.max(de, N) } : ae = de, h(ae), x.current === null && O(ae);
    },
    [d, I, N, A, h, O]
  ), L = B(
    (q, ie) => {
      const J = (c > 0 ? c : 1) * ie;
      let de;
      d ? q === "min" ? de = {
        min: At(N + J, r, A),
        max: A
      } : de = {
        min: N,
        max: At(A + J, N, i)
      } : de = At(b + J, r, i), O(de);
    },
    [d, c, r, i, N, A, b, O]
  ), E = (q, ie) => {
    if (!l)
      switch (ie.key) {
        case "ArrowLeft":
        case "ArrowDown":
          ie.preventDefault(), L(q, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          ie.preventDefault(), L(q, 1);
          break;
        case "Home":
          ie.preventDefault(), O(d ? q === "min" ? { min: r, max: A } : { min: N, max: N } : r);
          break;
        case "End":
          ie.preventDefault(), O(d ? q === "min" ? { min: A, max: A } : { min: N, max: i } : i);
          break;
      }
  }, j = (q, ie) => {
    l || (ie.preventDefault(), ie.currentTarget.focus(), typeof ie.currentTarget.setPointerCapture == "function" && ie.currentTarget.setPointerCapture(ie.pointerId), x.current = { key: q, pointerId: ie.pointerId }, S(q, ie.clientX, ie.clientY));
  }, T = (q) => {
    !x.current || x.current.pointerId !== q.pointerId || (q.preventDefault(), S(x.current.key, q.clientX, q.clientY));
  }, F = (q) => {
    !x.current || x.current.pointerId !== q.pointerId || (x.current = null, q.preventDefault(), O(d ? { min: N, max: A } : b));
  }, [G, Y] = X(null), U = M(N), ne = M(A), le = d ? U : 0, te = ne;
  return /* @__PURE__ */ s(
    "div",
    {
      className: [
        cn["dx-slider"],
        o === "vertical" ? cn["dx-slider-vertical"] : null,
        l ? cn["dx-slider-disabled"] : null,
        v
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ D("div", { ref: p, className: cn["dx-slider-track"], children: [
        /* @__PURE__ */ s(
          "div",
          {
            className: cn["dx-slider-range"],
            style: o === "vertical" ? { bottom: `${le}%`, height: `${te - le}%` } : { left: `${le}%`, width: `${te - le}%` }
          }
        ),
        /* @__PURE__ */ s(
          "div",
          {
            role: "slider",
            "aria-valuemin": r,
            "aria-valuemax": i,
            "aria-valuenow": Math.round(N),
            "aria-orientation": o,
            "aria-label": d ? u : a,
            "aria-disabled": l || void 0,
            tabIndex: l || d && G === "max" ? -1 : k,
            className: cn["dx-slider-handle"],
            style: o === "vertical" ? { bottom: `calc(${U}% - 8px)` } : { left: `calc(${U}% - 8px)` },
            onKeyDown: (q) => E("min", q),
            onPointerDown: (q) => j("min", q),
            onPointerMove: T,
            onPointerUp: F,
            onFocus: () => Y("min")
          }
        ),
        d && /* @__PURE__ */ s(
          "div",
          {
            role: "slider",
            "aria-valuemin": r,
            "aria-valuemax": i,
            "aria-valuenow": Math.round(A),
            "aria-orientation": o,
            "aria-label": f,
            "aria-disabled": l || void 0,
            tabIndex: l || G === "min" ? -1 : k,
            className: cn["dx-slider-handle"],
            style: o === "vertical" ? { bottom: `calc(${ne}% - 8px)` } : { left: `calc(${ne}% - 8px)` },
            onKeyDown: (q) => E("max", q),
            onPointerDown: (q) => j("max", q),
            onPointerMove: T,
            onPointerUp: F,
            onFocus: () => Y("max")
          }
        )
      ] })
    }
  );
}, Ke = {
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
}, U0 = "-10675199.02:48:05.4775808", W0 = "10675199.02:48:05.4775808", Xt = 86400, Vt = 3600, Ct = 60, ds = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, Vs = {
  days: Xt,
  hours: Vt,
  minutes: Ct,
  seconds: 1
}, X0 = {
  day: Xt,
  hour: Vt,
  minute: Ct,
  second: 1
};
function xn(e) {
  return String(e).padStart(2, "0");
}
function qn(e) {
  const t = e.trim();
  if (!t) return null;
  let n = 1, r = t;
  r.startsWith("-") ? (n = -1, r = r.slice(1)) : r.startsWith("+") && (r = r.slice(1));
  const i = /^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(
    r
  );
  if (i) {
    if (!i.slice(1).some((f) => f != null)) return null;
    const o = i[1] != null ? Number(i[1]) : 0, l = i[2] != null ? Number(i[2]) : 0, a = i[3] != null ? Number(i[3]) : 0, u = i[4] != null ? Number(i[4]) : 0;
    return n * (o * Xt + l * Vt + a * Ct + u);
  }
  const c = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(
    r
  );
  if (c) {
    const d = c[1] != null ? Number(c[1]) : 0, o = Number(c[2]), l = Number(c[3]), a = c[4] != null ? Number(c[4]) : 0, u = c[5] != null ? +`0.${c[5]}` : 0;
    return o > 23 || l > 59 || a > 59 ? null : n * (d * Xt + o * Vt + l * Ct + a + u);
  }
  return null;
}
function V0(e) {
  return e.days * Xt + e.hours * Vt + e.minutes * Ct + e.seconds;
}
function Gs(e) {
  let t = Math.abs(e);
  const n = Math.floor(t / Xt);
  t %= Xt;
  const r = Math.floor(t / Vt);
  t %= Vt;
  const i = Math.floor(t / Ct), c = Math.round(t % Ct * 1e9) / 1e9;
  return { days: n, hours: r, minutes: i, seconds: c };
}
function gs(e, t) {
  const n = e < 0;
  let r = Math.abs(e);
  t === "minute" ? r = Math.round(r / Ct) * Ct : t === "hour" ? r = Math.round(r / Vt) * Vt : t === "day" && (r = Math.round(r / Xt) * Xt);
  let i = Math.round(r % Ct);
  const c = i === 60 ? 1 : 0;
  i = i === 60 ? 0 : i;
  const d = Math.floor(r / Ct) + c, o = d % 60, l = Math.floor(d / 60), a = l % 24, u = Math.floor(l / 24), f = n ? "-" : "", k = u > 0 ? `${u}.` : "";
  switch (t) {
    case "day":
      return `${f}${u} day${u === 1 ? "" : "s"}`;
    case "hour":
      return `${f}${k}${xn(a)}`;
    case "minute":
      return `${f}${k}${xn(a)}:${xn(o)}`;
    default:
      return `${f}${k}${xn(a)}:${xn(o)}:${xn(i)}`;
  }
}
function Ys(e, t = "second") {
  const n = qn(e);
  return n === null ? "" : gs(n, t);
}
function us(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const wk = Fe(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: i,
    min: c = U0,
    max: d = W0,
    step: o = "1",
    precision: l = "second",
    showDays: a = !0,
    showHours: u = !0,
    showMinutes: f = !0,
    showSeconds: k = !0,
    allowClear: v = !1,
    inline: $ = !1,
    onChange: y,
    onValueChange: g,
    onOpen: _,
    onClose: p,
    disabled: x,
    placeholder: w,
    ariaLabel: m,
    triggerLabel: C,
    clearLabel: b,
    tabIndex: N,
    className: A,
    onBlur: M,
    onKeyDown: I,
    ...O
  }, h) {
    const S = ee(null), L = ee(null), E = ee(null), j = qe(), T = r !== void 0, [F, G] = X(
      () => i != null ? Ys(i, l) : ""
    ), [Y, U] = X(!1), [ne, le] = X(null), [te, q] = X(null), ie = xe(
      () => qn(c) ?? -Number.MAX_SAFE_INTEGER,
      [c]
    ), J = xe(
      () => qn(d) ?? Number.MAX_SAFE_INTEGER,
      [d]
    ), de = xe(() => {
      const Q = Number.parseFloat(o);
      return Number.isNaN(Q) || Q <= 0 ? 1 : Q;
    }, [o]), ae = xe(() => {
      const Q = T ? r ?? "" : F;
      return Q ? qn(Q) : null;
    }, [r, F, T]), ve = B(
      (Q) => {
        const Me = Q === null ? "" : gs(Q, l);
        T || G(Me), y?.(Me), g?.(Me);
      },
      [T, l, y, g]
    ), $e = B(
      (Q) => {
        Q && ne !== null && ve(ne), U(!1), le(null), q(null), p?.(), $ || E.current?.focus();
      },
      [$, ne, ve, p]
    ), Re = B(() => {
      x || (le(ae ?? 0), U(!0), _?.());
    }, [x, ae, _]), we = B(() => {
      Y ? $e(!1) : Re();
    }, [Y, $e, Re]), Xe = B(
      (Q, Me) => {
        le((nt) => {
          const Nt = (nt ?? ae ?? 0) + Me * de * Vs[Q];
          return us(Nt, ie, J);
        });
      },
      [ae, de, ie, J]
    ), be = B(
      (Q) => {
        const Me = te?.[Q];
        if (Me == null) return;
        const nt = Number.parseFloat(Me), Gt = Number.isNaN(nt) ? 0 : nt;
        le((Nt) => {
          const Ce = Nt ?? ae ?? 0, Ge = Gs(Ce);
          Ge[Q] = Gt;
          const Pt = (Ce < 0 ? -1 : 1) * V0(Ge);
          return us(Pt, ie, J);
        }), q(null);
      },
      [te, ae, ie, J]
    ), Ze = (Q, Me) => {
      q((nt) => ({ ...nt ?? {}, [Q]: Me }));
    }, Ve = (Q, Me) => {
      switch (Me.key) {
        case "ArrowUp":
          Me.preventDefault(), be(Q), Xe(Q, 1);
          break;
        case "ArrowDown":
          Me.preventDefault(), be(Q), Xe(Q, -1);
          break;
        case "Home":
          Me.preventDefault(), be(Q), le(ie);
          break;
        case "End":
          Me.preventDefault(), be(Q), le(J);
          break;
        case "Enter":
          Me.preventDefault(), be(Q), $e(!0);
          break;
      }
    }, Le = B(() => {
      if (Y) return;
      const Q = qn(F);
      ve(Q !== null ? us(Q, ie, J) : null);
    }, [Y, F, ie, J, ve]), tt = (Q) => {
      T || G(Q.target.value);
    }, Qe = (Q) => {
      Q.key === "Enter" ? (Q.preventDefault(), Y ? $e(!0) : Le()) : Q.key === "Escape" && Y ? (Q.preventDefault(), $e(!1)) : Q.key === "ArrowDown" && !Y ? (Q.preventDefault(), Re()) : Q.key === "Tab" && Y && U(!1), I?.(Q);
    }, et = (Q) => {
      Le(), M?.(Q);
    }, V = () => {
      T || G(""), y?.(""), g?.(""), L.current?.focus();
    };
    me(() => {
      if (!Y) return;
      const Q = (Me) => {
        S.current && !S.current.contains(Me.target) && $e(!1);
      };
      return document.addEventListener("mousedown", Q), () => document.removeEventListener("mousedown", Q);
    }, [Y, $e]), me(() => {
      if (!Y) return;
      const Q = (Me) => {
        Me.key === "Escape" && $e(!1);
      };
      return document.addEventListener("keydown", Q), () => document.removeEventListener("keydown", Q);
    }, [Y, $e]), me(() => {
      if ($ && ne !== null) {
        const Q = ae;
        (Q === null || Math.abs(ne - Q) > 1e-9) && ve(ne);
      }
    }, [$, ne, ae, ve]);
    const z = B(
      (Q) => {
        L.current = Q, typeof h == "function" ? h(Q) : h && (h.current = Q);
      },
      [h]
    ), K = T ? r ? Ys(r, l) : "" : F, se = T ? !!r : F.length > 0, fe = $ || Y, re = ne ?? ae ?? 0, ge = Gs(re), Se = X0[l], Je = ["days", "hours", "minutes", "seconds"].filter(
      (Q) => Vs[Q] >= Se && (Q === "days" ? a : Q === "hours" ? u : Q === "minutes" ? f : k)
    ), ut = t === "xs" ? Ke["dx-timespanpicker-input--xs"] : t === "sm" ? Ke["dx-timespanpicker-input--sm"] : t === "lg" ? Ke["dx-timespanpicker-input--lg"] : t === "xl" ? Ke["dx-timespanpicker-input--xl"] : Ke["dx-timespanpicker-input--md"], vt = /* @__PURE__ */ D("div", { className: Ke["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ s("div", { className: Ke["dx-timespanpicker-preview"], "aria-live": "polite", children: gs(re, l) }),
      /* @__PURE__ */ s("div", { className: Ke["dx-timespanpicker-units"], children: Je.map((Q) => /* @__PURE__ */ D("label", { className: Ke["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ s("span", { className: Ke["dx-timespanpicker-unit-label"], children: ds[Q] }),
        /* @__PURE__ */ D("span", { className: Ke["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ s(
            "input",
            {
              className: Ke["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: te?.[Q] ?? String(ge[Q]),
              onChange: (Me) => Ze(Q, Me.target.value),
              onKeyDown: (Me) => Ve(Q, Me),
              onBlur: () => be(Q)
            }
          ),
          /* @__PURE__ */ D("span", { className: Ke["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${ds[Q].toLowerCase()}`,
                onClick: () => {
                  be(Q), Xe(Q, 1);
                },
                children: /* @__PURE__ */ s(Oe, { name: "chevron-up", size: 11 })
              }
            ),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${ds[Q].toLowerCase()}`,
                onClick: () => {
                  be(Q), Xe(Q, -1);
                },
                children: /* @__PURE__ */ s(Oe, { name: "chevron-down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, Q)) }),
      /* @__PURE__ */ s("div", { className: Ke["dx-timespanpicker-footer"], children: /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          className: Ke["dx-timespanpicker-ok"],
          onClick: () => $e(!0),
          children: "OK"
        }
      ) })
    ] });
    return /* @__PURE__ */ D(
      "div",
      {
        ref: S,
        className: [
          Ke["dx-timespanpicker"],
          $ ? Ke["dx-timespanpicker-inline"] : null,
          A
        ].filter(Boolean).join(" "),
        children: [
          !$ && /* @__PURE__ */ D(Ne, { children: [
            /* @__PURE__ */ s(
              "input",
              {
                ref: z,
                type: "text",
                autoComplete: "off",
                value: K,
                disabled: x,
                placeholder: w,
                tabIndex: N,
                role: "combobox",
                "aria-label": m ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": Y,
                "aria-controls": j,
                "aria-invalid": n || void 0,
                className: [
                  Ke["dx-timespanpicker-input"],
                  ut,
                  n ? Ke["dx-timespanpicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: tt,
                onKeyDown: Qe,
                onBlur: et,
                ...O
              }
            ),
            v && !x && se && /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: Ke["dx-timespanpicker-clear"],
                "aria-label": b ?? "Clear",
                onClick: V,
                children: /* @__PURE__ */ s(Oe, { name: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ s(
              "button",
              {
                ref: E,
                type: "button",
                className: [Ke["dx-timespanpicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": C ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": Y,
                "aria-controls": j,
                disabled: x,
                onClick: we,
                children: /* @__PURE__ */ s(Oe, { name: "clock", size: 16 })
              }
            )
          ] }),
          fe && /* @__PURE__ */ s(
            "div",
            {
              id: j,
              role: $ ? void 0 : "dialog",
              "aria-label": m ?? "Time span picker",
              className: $ ? void 0 : Ke["dx-timespanpicker-popup"],
              children: vt
            }
          )
        ]
      }
    );
  }
), G0 = "_wrapper_1rhh5_1", Y0 = "_cells_1rhh5_8", Z0 = "_cell_1rhh5_8", J0 = "_invalid_1rhh5_63", Q0 = "_live_1rhh5_73", dn = {
  wrapper: G0,
  cells: Y0,
  cell: Z0,
  "cell-sm": "_cell-sm_1rhh5_45",
  "cell-md": "_cell-md_1rhh5_51",
  "cell-lg": "_cell-lg_1rhh5_57",
  invalid: J0,
  live: Q0
};
function Zs(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const $k = Fe(
  function({
    length: t = 6,
    value: n,
    defaultValue: r,
    onChange: i,
    invalid: c = !1,
    size: d = "md",
    autoFocus: o = !1,
    disabled: l = !1,
    label: a = "Security code",
    liveAnnounce: u = !0,
    className: f,
    "aria-label": k
  }, v) {
    const $ = qe(), y = n !== void 0, [g, _] = X(Zs(r).join("")), p = y ? Zs(n).join("") : g, x = Array.from({ length: t }, (O, h) => p[h] ?? ""), w = ee([]), [m, C] = X(""), b = (O) => {
      y || _(O), i?.(O);
    }, N = (O) => {
      const h = w.current[O];
      h && !h.disabled && (h.focus(), h.select());
    }, A = (O, h) => {
      const S = h.replace(/\D/g, "").slice(-1), L = p.split("");
      if (S) {
        L[O] = S;
        const E = L.join("").slice(0, t);
        b(E), E.length < t ? N(O + 1) : u && C("Code complete");
      }
    }, M = (O, h) => {
      if (h.key === "Backspace") {
        if (h.preventDefault(), p[O]) {
          const S = p.split("");
          S[O] = "", b(S.join(""));
        } else if (O > 0) {
          const S = p.split("");
          S[O - 1] = "", b(S.join("")), N(O - 1);
        }
      } else h.key === "ArrowLeft" && O > 0 ? (h.preventDefault(), N(O - 1)) : h.key === "ArrowRight" && O < t - 1 ? (h.preventDefault(), N(O + 1)) : h.key === "Home" ? (h.preventDefault(), N(0)) : h.key === "End" && (h.preventDefault(), N(t - 1));
    }, I = (O, h) => {
      h.preventDefault();
      const S = h.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!S) return;
      const L = p.split("");
      let E = 0;
      for (let T = 0; T < S.length && O + T < t; T++)
        L[O + T] = S[T] ?? "", E++;
      const j = L.join("");
      b(j), j.length >= t ? u && C("Code complete") : N(O + E);
    };
    return /* @__PURE__ */ D(
      "div",
      {
        className: [dn.wrapper, f].filter(Boolean).join(" "),
        role: "group",
        "aria-label": k ?? a,
        "data-invalid": c || void 0,
        children: [
          /* @__PURE__ */ s("div", { className: [dn.cells, dn[d]].join(" "), children: x.map((O, h) => /* @__PURE__ */ s(
            "input",
            {
              ref: (S) => {
                w.current[h] = S, h === 0 && v && (typeof v == "function" ? v(S) : v.current = S);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: O,
              disabled: l,
              "aria-label": `Digit ${h + 1} of ${t}`,
              "aria-invalid": c && O !== "" ? !0 : void 0,
              autoFocus: o && h === 0,
              className: [
                dn.cell,
                dn[`cell-${d}`],
                c ? dn.invalid : null
              ].filter(Boolean).join(" "),
              onChange: (S) => A(h, S.target.value),
              onKeyDown: (S) => M(h, S),
              onPaste: (S) => I(h, S),
              onFocus: (S) => S.target.select(),
              onBlur: () => {
                u && C("");
              }
            },
            h
          )) }),
          u && /* @__PURE__ */ s(
            "span",
            {
              id: `${$}-live`,
              role: "status",
              "aria-live": "polite",
              className: dn.live,
              children: m
            }
          )
        ]
      }
    );
  }
), ex = "_wrapper_1p09k_1", tx = "_header_1p09k_7", nx = "_label_1p09k_15", sx = "_clear_1p09k_22", rx = "_canvas_1p09k_53", ox = "_disabled_1p09k_69", yn = {
  wrapper: ex,
  header: tx,
  label: nx,
  clear: sx,
  canvas: rx,
  disabled: ox
}, Ok = Fe(
  function({
    value: t,
    defaultValue: n,
    onChange: r,
    penColor: i = "#1c1c1c",
    penWidth: c = 2.5,
    clearLabel: d = "Clear",
    ariaLabel: o = "Signature",
    width: l,
    height: a = 140,
    disabled: u = !1,
    className: f
  }, k) {
    const v = ee(null), $ = ee(!1), y = ee(!1), g = ee({ x: 0, y: 0 });
    me(() => {
      const b = v.current;
      if (!b) return;
      const N = window.devicePixelRatio || 1, A = Math.round((l ?? b.clientWidth) * N), M = Math.round(a * N);
      (b.width !== A || b.height !== M) && (b.width = A, b.height = M);
      const I = b.getContext("2d");
      if (!I) return;
      I.setTransform(N, 0, 0, N, 0, 0), I.lineWidth = c, I.strokeStyle = i, I.lineCap = "round", I.lineJoin = "round";
      const O = t ?? n;
      if (O) {
        const h = new Image();
        h.onload = () => {
          I.drawImage(h, 0, 0, b.clientWidth, a);
        }, h.src = O;
      }
    }, [t, n, i, c, l, a]);
    const _ = () => {
      const b = v.current;
      if (!b) return;
      const N = b.toDataURL("image/png");
      r?.(N);
    }, p = () => {
      const b = v.current;
      if (!b) return;
      const N = b.getContext("2d");
      N && N.clearRect(0, 0, b.width, b.height), r?.("");
    };
    vs(k, () => ({
      clear: p,
      toDataURL: (b = "image/png", N) => v.current?.toDataURL(b, N) ?? ""
    }));
    const x = (b) => {
      const N = b.currentTarget.getBoundingClientRect();
      return { x: b.clientX - N.left, y: b.clientY - N.top };
    }, w = (b) => {
      u || (b.preventDefault(), typeof b.currentTarget.setPointerCapture == "function" && b.currentTarget.setPointerCapture(b.pointerId), $.current = !0, y.current = !1, g.current = x(b));
    }, m = (b) => {
      if (!$.current) return;
      b.preventDefault();
      const N = b.currentTarget.getContext("2d");
      if (!N) return;
      const A = x(b);
      N.beginPath(), N.moveTo(g.current.x, g.current.y), N.lineTo(A.x, A.y), N.stroke(), g.current = A, y.current = !0;
    }, C = (b) => {
      $.current && (b.preventDefault(), $.current = !1, y.current && _());
    };
    return /* @__PURE__ */ D(
      "div",
      {
        className: [
          yn.wrapper,
          f,
          u ? yn.disabled : null
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ D("div", { className: yn.header, children: [
            /* @__PURE__ */ s("span", { className: yn.label, children: o }),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: yn.clear,
                onClick: p,
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
                width: l ? `${l}px` : void 0,
                height: `${a}px`
              },
              className: yn.canvas,
              onPointerDown: w,
              onPointerMove: m,
              onPointerUp: C,
              onPointerCancel: C
            }
          )
        ]
      }
    );
  }
), lx = "_wrapper_cdx3b_1", ax = "_trigger_cdx3b_7", ix = "_list_cdx3b_35", cx = "_row_cdx3b_44", dx = "_name_cdx3b_59", ux = "_size_cdx3b_68", fx = "_progress_cdx3b_74", _x = "_fill_cdx3b_82", px = "_status_cdx3b_99", hx = "_remove_cdx3b_106", jt = {
  wrapper: lx,
  trigger: ax,
  list: ix,
  row: cx,
  name: dx,
  size: ux,
  progress: fx,
  fill: _x,
  status: px,
  remove: hx
};
function Js(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const Nk = Fe(function({
  url: t,
  multiple: n = !1,
  parameterName: r = "files",
  auto: i = !0,
  headers: c,
  accept: d,
  maxFileCount: o = Number.POSITIVE_INFINITY,
  maxFileSize: l,
  chooseText: a = "Upload",
  children: u,
  onProgress: f,
  onComplete: k,
  onError: v
}, $) {
  const y = ee(null), [g, _] = X([]), p = ee(/* @__PURE__ */ new Map()), x = (N, A) => {
    _(
      (M) => M.map((I) => I.file.name === N ? { ...I, ...A } : I)
    );
  }, w = (N) => {
    if (!t) return;
    const A = new XMLHttpRequest();
    p.current.set(N.file.name, A);
    const M = new FormData();
    if (M.append(r, N.file), A.upload.addEventListener("progress", (I) => {
      if (!I.lengthComputable) return;
      const O = Math.round(I.loaded / I.total * 100);
      x(N.file.name, { state: "uploading", progress: O }), f?.(N.file.name, O);
    }), A.addEventListener("load", () => {
      A.status >= 200 && A.status < 300 ? (x(N.file.name, { state: "complete", progress: 100 }), k?.(N.file.name)) : (x(N.file.name, {
        state: "error",
        message: `HTTP ${A.status}`
      }), v?.(N.file.name, `HTTP ${A.status}`));
    }), A.addEventListener("error", () => {
      x(N.file.name, { state: "error", message: "Network error" }), v?.(N.file.name, "Network error");
    }), c)
      for (const [I, O] of Object.entries(c))
        A.setRequestHeader(I, O);
    A.open("POST", t), A.send(M), x(N.file.name, { state: "uploading", progress: 0 });
  }, m = (N) => {
    if (!N) return;
    const A = [...N], M = [];
    let I = Math.max(0, o - g.length);
    for (const h of A) {
      if (l != null && h.size > l) {
        v?.(
          h.name,
          `File too large (maximum ${Js(l)})`
        );
        continue;
      }
      if (I <= 0) {
        v?.(h.name, `Too many files (maximum ${o})`);
        continue;
      }
      I -= 1, M.push(h);
    }
    const O = M.map((h) => ({
      file: h,
      state: "pending",
      progress: 0
    }));
    _((h) => [...h, ...O]), y.current && (y.current.value = ""), i && O.forEach(w);
  }, C = (N) => {
    p.current.get(N)?.abort(), p.current.delete(N), _((M) => M.filter((I) => I.file.name !== N));
  }, b = u ?? /* @__PURE__ */ D(
    "button",
    {
      type: "button",
      className: jt.trigger,
      onClick: () => y.current?.click(),
      children: [
        /* @__PURE__ */ s(Oe, { name: "upload", size: 14 }),
        a
      ]
    }
  );
  return vs($, () => ({
    open: () => y.current?.click(),
    upload: () => g.forEach((N) => N.state === "pending" ? w(N) : null)
  })), /* @__PURE__ */ D("div", { className: jt.wrapper, children: [
    b,
    /* @__PURE__ */ s(
      "input",
      {
        ref: y,
        type: "file",
        hidden: !0,
        multiple: n,
        accept: d,
        "data-testid": "upload-input",
        onChange: (N) => m(N.target.files)
      }
    ),
    !u && g.length > 0 && /* @__PURE__ */ s("ul", { className: jt.list, children: g.map(({ file: N, state: A, progress: M, message: I }) => /* @__PURE__ */ D(
      "li",
      {
        className: jt.row,
        "data-state": A,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ s("span", { className: jt.name, children: N.name }),
          /* @__PURE__ */ s("span", { className: jt.size, children: Js(N.size) }),
          /* @__PURE__ */ s(
            "span",
            {
              className: jt.progress,
              role: "progressbar",
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": M,
              children: /* @__PURE__ */ s(
                "span",
                {
                  className: jt.fill,
                  style: { width: `${M}%` }
                }
              )
            }
          ),
          /* @__PURE__ */ s("span", { className: jt.status, role: "status", children: A === "uploading" ? "Uploading" : A === "complete" ? "Complete" : A === "error" ? I ?? "Failed" : "Pending" }),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: jt.remove,
              "aria-label": `Remove ${N.name}`,
              onClick: () => C(N.name),
              children: /* @__PURE__ */ s(Oe, { name: "close", size: 14 })
            }
          )
        ]
      },
      N.name
    )) })
  ] });
}), mx = "_zone_e481w_1", gx = "_dragging_e481w_23", xx = "_caption_e481w_28", yx = "_browse_e481w_40", bx = "_disabled_e481w_67", Tn = {
  zone: mx,
  dragging: gx,
  caption: xx,
  browse: yx,
  disabled: bx
};
function vx(e, t) {
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
const Sk = Fe(
  function({
    accept: t,
    multiple: n = !1,
    onDrop: r,
    label: i = "Drop files here or browse",
    dragLabel: c = "Drop to attach",
    browseText: d = "Browse",
    disabled: o = !1,
    className: l
  }, a) {
    const u = ee(null), [f, k] = X(!1), v = (p) => {
      if (!p || p.length === 0) return;
      const x = [...p].filter((w) => vx(w, t ?? ""));
      x.length !== 0 && r?.(x);
    }, $ = (p) => {
      o || (p.preventDefault(), k(!0));
    }, y = (p) => {
      o || (p.preventDefault(), p.dataTransfer.dropEffect = "copy", k(!0));
    }, g = (p) => {
      o || p.currentTarget.contains(p.relatedTarget) || k(!1);
    }, _ = (p) => {
      o || (p.preventDefault(), k(!1), v(p.dataTransfer.files));
    };
    return vs(a, () => ({
      open: () => u.current?.click()
    })), /* @__PURE__ */ D(
      "div",
      {
        role: "region",
        "aria-label": i,
        className: [
          Tn.zone,
          f ? Tn.dragging : null,
          o ? Tn.disabled : null,
          l
        ].filter(Boolean).join(" "),
        onDragEnter: $,
        onDragOver: y,
        onDragLeave: g,
        onDrop: _,
        children: [
          /* @__PURE__ */ s("p", { className: Tn.caption, children: f ? c : i }),
          !o && /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: Tn.browse,
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
              onChange: (p) => {
                v(p.target.files), p.target.value = "";
              }
            }
          )
        ]
      }
    );
  }
), kx = "_root_mq6fh_1", wx = "_menubar_mq6fh_5", $x = "_horizontal_mq6fh_15", Ox = "_vertical_mq6fh_20", Nx = "_itemWrapper_mq6fh_25", Sx = "_item_mq6fh_25", Dx = "_disabled_mq6fh_61", Mx = "_icon_mq6fh_68", Cx = "_text_mq6fh_75", zx = "_caret_mq6fh_79", Ex = "_hasChildren_mq6fh_85", Ix = "_submenu_mq6fh_94", Ax = "_submenuItem_mq6fh_118", jx = "_flyout_mq6fh_155", Tx = "_hamburger_mq6fh_175", Lx = "_responsive_mq6fh_198", Px = "_mobileOpen_mq6fh_207", We = {
  root: kx,
  menubar: wx,
  horizontal: $x,
  vertical: Ox,
  itemWrapper: Nx,
  item: Sx,
  disabled: Dx,
  icon: Mx,
  text: Cx,
  caret: zx,
  hasChildren: Ex,
  submenu: Ix,
  submenuItem: Ax,
  flyout: jx,
  hamburger: Tx,
  responsive: Lx,
  mobileOpen: Px
}, ns = $n(null);
function Rx(e, t) {
  if (!e || typeof window > "u") return !1;
  const n = window.location.hash.replace(/^#\/?/, ""), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : n === r || n.startsWith(`${r}/`) : n === r;
}
function Bx(e, t, n, r, i) {
  const [c, d] = X(n), o = e ? t ?? !1 : c, l = B(
    (a) => {
      e || d(a), r?.(a);
    },
    [e, r]
  );
  return me(() => {
    i > 0 && l(!1);
  }, [i]), [o, l];
}
function qx({
  icon: e,
  iconColor: t,
  image: n,
  imageAlt: r
}) {
  return n ? /* @__PURE__ */ s("span", { className: We.icon, "aria-hidden": "true", children: /* @__PURE__ */ s("img", { src: n, alt: r ?? "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ s(
    "span",
    {
      className: We.icon,
      "aria-hidden": "true",
      style: t ? { color: t } : void 0,
      children: /* @__PURE__ */ s(Oe, { name: e, size: 16 })
    }
  ) : null;
}
function _r(e) {
  return dt(e) && e.type === pr;
}
function $s({
  itemKey: e,
  props: t
}) {
  const n = nn(ns);
  if (!n) throw new Error("MenuItem must be used inside <Menu>");
  const { text: r, value: i, path: c, disabled: d, template: o } = t, l = xe(
    () => Fn.toArray(t.children).filter(dt),
    [t.children]
  ), a = l.length > 0, u = !!d, f = t.open !== void 0, [k, v] = Bx(
    f,
    t.open,
    t.defaultOpen ?? !1,
    t.onOpenChange,
    n.closeSignal
  ), $ = n.level === 0, y = ee(0), _ = ($ && !f ? n.openKey === e : null) ?? k, p = B(
    (E) => {
      $ && !f ? n.setOpenKey(E ? e : null) : (v(E), $ && n.setOpenKey(null));
    },
    [$, f, n, e, v]
  ), [, x] = X(0);
  me(() => {
    if (!c) return;
    const E = () => x((j) => j + 1);
    return window.addEventListener("hashchange", E), () => window.removeEventListener("hashchange", E);
  }, [c]);
  const w = c && !a ? Rx(c, t.match) : !1, m = B(
    (E) => {
      if (u) {
        E.preventDefault();
        return;
      }
      const j = { text: r, value: i, path: c };
      [n.emit(j), t.onClick?.(j)].includes(!1) && E.preventDefault(), n.closeAll();
    },
    [u, r, i, c, n, t]
  ), C = B(() => {
    if (!u) {
      if (_ && (Date.now() - y.current < 600 || !n.clickToOpen)) {
        y.current = 0;
        return;
      }
      p(!_);
    }
  }, [u, _, p, n.clickToOpen]), b = B(() => {
    !a || u || n.clickToOpen || (y.current = Date.now(), p(!0));
  }, [a, u, n.clickToOpen, p]), N = B(() => {
    n.clickToOpen || p(!1);
  }, [n.clickToOpen, p]), A = `${n.baseId}-submenu-${e}`, [M, I] = X(null);
  me(() => {
    n.closeSignal > 0 && I(null);
  }, [n.closeSignal]);
  const O = xe(
    () => ({
      baseId: n.baseId,
      flyout: n.flyout,
      clickToOpen: n.clickToOpen,
      level: n.level + 1,
      closeSignal: n.closeSignal,
      emit: n.emit,
      closeAll: n.closeAll,
      openKey: M,
      setOpenKey: I
    }),
    [n, M]
  ), h = a ? /* @__PURE__ */ s("span", { className: We.caret, "aria-hidden": "true", children: /* @__PURE__ */ s(
    Oe,
    {
      name: n.flyout && !$ ? "chevron-right" : "chevron-down",
      size: 10
    }
  ) }) : null, S = o ?? /* @__PURE__ */ D(Ne, { children: [
    /* @__PURE__ */ s(
      qx,
      {
        icon: t.icon,
        iconColor: t.iconColor,
        image: t.image,
        imageAlt: t.imageAlt
      }
    ),
    /* @__PURE__ */ s("span", { className: We.text, children: r }),
    h
  ] });
  if (a) {
    let E = function(j) {
      const T = Array.from(j.currentTarget.children).map((Y) => Y.querySelector('[role="menuitem"]')).filter(
        (Y) => Y != null && Y.getAttribute("aria-disabled") !== "true" && !Y.hasAttribute("disabled")
      ), F = document.activeElement, G = F ? T.indexOf(F) : -1;
      j.key === "ArrowDown" ? (j.preventDefault(), j.stopPropagation(), (G === -1 ? T[0] : T[(G + 1) % T.length])?.focus()) : j.key === "ArrowUp" ? (j.preventDefault(), j.stopPropagation(), (G === -1 ? T[T.length - 1] : T[(G - 1 + T.length) % T.length])?.focus()) : j.key === "ArrowRight" ? F?.getAttribute("aria-haspopup") === "menu" && (j.preventDefault(), j.stopPropagation(), F.getAttribute("aria-expanded") !== "true" && F.click(), document.getElementById(
        F.getAttribute("aria-controls") ?? ""
      )?.querySelector('[role="menuitem"]')?.focus()) : (j.key === "ArrowLeft" || j.key === "Escape") && (j.preventDefault(), j.stopPropagation(), p(!1));
    };
    return /* @__PURE__ */ D(
      "div",
      {
        className: We.itemWrapper,
        onMouseEnter: n.clickToOpen ? void 0 : b,
        onMouseLeave: n.clickToOpen ? void 0 : N,
        "data-dx-menu-item": "",
        children: [
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              role: "menuitem",
              "data-top": $ ? "true" : void 0,
              "data-index": e,
              "data-dx-menu-item": "",
              "aria-disabled": u || void 0,
              "aria-haspopup": "menu",
              "aria-expanded": _,
              "aria-controls": A,
              tabIndex: u ? -1 : 0,
              disabled: u,
              className: [
                We.item,
                u ? We.disabled : null,
                We.hasChildren
              ].filter(Boolean).join(" "),
              onClick: C,
              children: S
            }
          ),
          _ ? /* @__PURE__ */ s(
            "div",
            {
              id: A,
              role: "menu",
              "aria-label": r,
              className: [
                We.submenu,
                n.flyout && !$ ? We.flyout : null
              ].filter(Boolean).join(" "),
              "data-dx-menu-submenu": "",
              onKeyDown: E,
              children: /* @__PURE__ */ s(ns.Provider, { value: O, children: l.map(
                (j, T) => _r(j) ? /* @__PURE__ */ s(
                  $s,
                  {
                    itemKey: `${e}-${T}`,
                    props: j.props
                  },
                  `${e}-${T}`
                ) : (
                  // Separators / custom content (Radzen `<hr />` parity) render verbatim.
                  /* @__PURE__ */ s(bs, { children: j }, `${e}-custom-${T}`)
                )
              ) })
            }
          ) : null
        ]
      }
    );
  }
  const L = {
    role: "menuitem",
    "aria-disabled": u || void 0,
    "aria-current": w ? "page" : void 0,
    tabIndex: u ? -1 : 0,
    "data-dx-menu-item": "",
    className: [We.submenuItem, u ? We.disabled : null].filter(Boolean).join(" "),
    onClick: m
  };
  return c && !u ? /* @__PURE__ */ s("div", { className: We.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ s("a", { href: c, target: t.target, ...L, children: S }) }) : /* @__PURE__ */ s("div", { className: We.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ s("button", { type: "button", disabled: u, ...L, children: S }) });
}
function pr(e) {
  if (!nn(ns)) throw new Error("MenuItem must be used inside <Menu>");
  return /* @__PURE__ */ s($s, { itemKey: e.text, props: e });
}
function Fx({
  children: e,
  clickToOpen: t = !0,
  flyout: n = !1,
  responsive: r = !0,
  isContextMenu: i = !1,
  onClick: c,
  onClose: d,
  ariaLabel: o = "Menu",
  toggleAriaLabel: l = "Toggle menu",
  className: a,
  ...u
}) {
  const f = qe(), k = ee(null), v = ee(null), [$, y] = X(null), [g, _] = X(0), [p, x] = X(!1), w = ee(null), m = B(
    (M) => c?.(M),
    [c]
  ), C = B(() => {
    y(null), _((M) => M + 1);
  }, []);
  me(() => {
    if ($ == null) return;
    const M = (I) => {
      k.current && !k.current.contains(I.target) && C();
    };
    return document.addEventListener("mousedown", M), () => document.removeEventListener("mousedown", M);
  }, [$, C]), me(() => {
    w.current != null && $ === w.current && (document.getElementById(`${f}-submenu-${$}`)?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus(), w.current = null);
  }, [$, f]);
  const b = xe(
    () => ({
      baseId: f,
      flyout: n,
      clickToOpen: t,
      level: 0,
      closeSignal: g,
      emit: m,
      closeAll: C,
      openKey: $,
      setOpenKey: y
    }),
    [f, n, t, g, m, C, $]
  ), N = xe(
    () => Fn.toArray(e).filter(dt),
    [e]
  ), A = (M) => {
    const I = v.current;
    if (!I) return;
    const O = Array.from(I.children).map((L) => L.querySelector('[role="menuitem"]')).filter(
      (L) => L != null && !L.hasAttribute("disabled") && L.getAttribute("aria-disabled") !== "true"
    );
    if ($ != null) {
      const L = document.getElementById(`${f}-submenu-${$}`);
      if (L) {
        const E = Array.from(
          L.querySelectorAll('[role="menuitem"]')
        ).filter(
          (F) => F.getAttribute("aria-disabled") !== "true" && !F.hasAttribute("disabled")
        ), j = document.activeElement, T = j ? E.indexOf(j) : -1;
        if (M.key === "ArrowDown") {
          M.preventDefault(), (T === -1 ? E[0] : E[(T + 1) % E.length])?.focus();
          return;
        }
        if (M.key === "ArrowUp") {
          M.preventDefault(), (T === -1 ? E[E.length - 1] : E[(T - 1 + E.length) % E.length])?.focus();
          return;
        }
        if (M.key === "Escape") {
          M.preventDefault(), C(), d?.(), I.querySelector(`[data-index="${$}"]`)?.focus();
          return;
        }
        if (M.key === "Enter" || M.key === " ") return;
      }
      if (M.key === "Escape") {
        M.preventDefault(), C(), d?.();
        return;
      }
    }
    const h = document.activeElement, S = h ? O.indexOf(h) : -1;
    if (M.key === "ArrowRight") {
      if (M.preventDefault(), O.length === 0) return;
      O[S === -1 ? 0 : (S + 1) % O.length]?.focus();
      return;
    }
    if (M.key === "ArrowLeft") {
      if (M.preventDefault(), O.length === 0) return;
      O[S === -1 ? O.length - 1 : (S - 1 + O.length) % O.length]?.focus();
      return;
    }
    if (M.key === "ArrowDown") {
      if (S >= 0) {
        const L = h?.getAttribute("data-index");
        if (L == null) return;
        I.querySelector(
          `[data-index="${L}"]`
        )?.getAttribute("aria-haspopup") === "menu" && (M.preventDefault(), w.current = L, y(L));
      }
      return;
    }
    if (M.key === "Home") {
      M.preventDefault(), O[0]?.focus();
      return;
    }
    if (M.key === "End") {
      M.preventDefault(), O[O.length - 1]?.focus();
      return;
    }
    if (M.key.length === 1 && !M.ctrlKey && !M.metaKey) {
      const L = O.map((j) => j.textContent ?? ""), E = S === -1 ? 0 : (S + 1) % O.length;
      for (let j = 0; j < O.length; j++) {
        const T = (E + j) % O.length;
        if (L[T]?.toLowerCase().startsWith(M.key.toLowerCase())) {
          M.preventDefault(), O[T]?.focus();
          break;
        }
      }
    }
  };
  return /* @__PURE__ */ D(
    "nav",
    {
      ref: k,
      "aria-label": o,
      className: [
        We.root,
        i ? We.vertical : We.horizontal,
        r ? We.responsive : null,
        r && p ? We.mobileOpen : null,
        n ? We.flyoutRoot : null,
        a
      ].filter(Boolean).join(" "),
      ...u,
      children: [
        r ? /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            "aria-label": l,
            "aria-expanded": p,
            className: We.hamburger,
            onClick: () => x((M) => !M),
            children: /* @__PURE__ */ s(Oe, { name: "menu", size: 20 })
          }
        ) : null,
        /* @__PURE__ */ s(
          "div",
          {
            ref: v,
            role: i ? "menu" : "menubar",
            "aria-label": o,
            className: We.menubar,
            onKeyDown: A,
            children: /* @__PURE__ */ s(ns.Provider, { value: b, children: N.map(
              (M, I) => _r(M) ? /* @__PURE__ */ s(
                $s,
                {
                  itemKey: String(I),
                  props: M.props
                },
                `top-${I}`
              ) : /* @__PURE__ */ s(bs, { children: M }, `top-custom-${I}`)
            ) })
          }
        )
      ]
    }
  );
}
const Hx = "_popup_y9hdw_1", Kx = "_menu_y9hdw_22", xs = {
  popup: Hx,
  menu: Kx
}, hr = $n(null);
function Dk() {
  const e = nn(hr);
  if (!e)
    throw new Error("useContextMenu must be used inside <ContextMenuProvider>");
  return e;
}
function mr(e) {
  return e.map((t, n) => {
    const { children: r, ...i } = t;
    return /* @__PURE__ */ s(pr, { ...i, children: r ? mr(r) : void 0 }, `${t.text}-${n}`);
  });
}
function Ux({ state: e, onClose: t }) {
  const n = ee(null), [r, i] = X({ left: e.x, top: e.y });
  fs(() => {
    const d = n.current;
    if (!d) return;
    const o = d.getBoundingClientRect();
    i({
      left: Math.max(0, Math.min(e.x, window.innerWidth - o.width)),
      top: Math.max(0, Math.min(e.y, window.innerHeight - o.height))
    });
  }, [e.x, e.y, e.options]), me(() => {
    n.current?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus();
  }, []);
  const c = B(
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
      className: xs.popup,
      style: { left: r.left, top: r.top },
      children: /* @__PURE__ */ s("div", { className: xs.menu, children: e.options.content ?? /* @__PURE__ */ s(
        Fx,
        {
          isContextMenu: !0,
          responsive: !1,
          ariaLabel: e.options.ariaLabel ?? "Context menu",
          onClick: c,
          onClose: t,
          children: mr(e.options.items ?? [])
        }
      ) })
    }
  );
}
function Mk({ children: e }) {
  const [t, n] = X(null), r = B(() => {
    n((d) => (d?.invoker && document.body.contains(d.invoker) && d.invoker.focus({ preventScroll: !0 }), null));
  }, []), i = B(
    (d, o) => {
      d.preventDefault();
      const l = d.currentTarget ?? d.target;
      n({ x: d.clientX, y: d.clientY, invoker: l, options: o });
    },
    []
  );
  me(() => {
    if (!t) return;
    const d = (u) => {
      const f = document.querySelector(`.${xs.popup}`);
      f && !f.contains(u.target) && r();
    }, o = (u) => {
      u.key === "Escape" && (u.preventDefault(), r());
    }, l = () => r(), a = () => r();
    return document.addEventListener("pointerdown", d, !0), document.addEventListener("keydown", o, !0), window.addEventListener("resize", l), window.addEventListener("hashchange", a), () => {
      document.removeEventListener("pointerdown", d, !0), document.removeEventListener("keydown", o, !0), window.removeEventListener("resize", l), window.removeEventListener("hashchange", a);
    };
  }, [t, r]);
  const c = xe(
    () => ({ open: i, close: r, isOpen: t != null }),
    [i, r, t]
  );
  return /* @__PURE__ */ D(hr.Provider, { value: c, children: [
    e,
    t ? /* @__PURE__ */ s(Ux, { state: t, onClose: r }) : null
  ] });
}
const Wx = "_root_1ezv8_1", Xx = "_list_1ezv8_9", Vx = "_item_1ezv8_14", Gx = "_trigger_1ezv8_18", Yx = "_disabled_1ezv8_45", Zx = "_expanded_1ezv8_52", Jx = "_selected_1ezv8_56", Qx = "_icon_1ezv8_61", ey = "_text_1ezv8_72", ty = "_caret_1ezv8_79", ny = "_open_1ezv8_86", sy = "_submenu_1ezv8_90", ry = "_iconOnly_1ezv8_172", oy = "_stacked_1ezv8_201", lt = {
  root: Wx,
  list: Xx,
  item: Vx,
  trigger: Gx,
  disabled: Yx,
  expanded: Zx,
  selected: Jx,
  icon: Qx,
  text: ey,
  caret: ty,
  open: ny,
  submenu: sy,
  iconOnly: ry,
  stacked: oy
}, ss = $n(null);
function ly() {
  return typeof window > "u" ? "" : window.location.hash.replace(/^#\/?/, "");
}
function ay(e, t) {
  const n = ly(), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : r === "/" ? n === "" || n === "/" : n === r || n.startsWith(`${r}/`) : n === r;
}
function iy({
  icon: e,
  iconColor: t,
  image: n
}) {
  return n ? /* @__PURE__ */ s("span", { className: lt.icon, "aria-hidden": "true", children: /* @__PURE__ */ s("img", { src: n, alt: "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ s(
    "span",
    {
      className: lt.icon,
      "aria-hidden": "true",
      style: t ? { color: t } : void 0,
      children: /* @__PURE__ */ s(Oe, { name: e, size: 16 })
    }
  ) : null;
}
function Os({
  itemKey: e,
  ancestors: t,
  props: n
}) {
  const r = nn(ss);
  if (!r) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  const { text: i, value: c, path: d, disabled: o } = n, l = xe(
    () => Fn.toArray(n.children).filter(dt),
    [n.children]
  ), a = l.length > 0, u = !!o, f = n.match ?? r.match, k = n.expanded !== void 0, [v, $] = X(
    n.defaultExpanded ?? !1
  ), y = k ? n.expanded ?? !1 : v, g = B(
    (T) => {
      k || $(T), n.onExpandedChange?.(T);
    },
    [k, n]
  );
  me(() => {
    r.collapseSignal > 0 && !r.collapseSkipRef.current.has(e) && g(!1);
  }, [r.collapseSignal]);
  const _ = n.onSelectedChange !== void 0 || n.selected !== void 0, [p, x] = X(
    n.defaultSelected ?? !1
  ), w = !_ && d ? ay(d, f) : !1, m = n.selected ?? (_ ? p : w || p), [, C] = X(0);
  me(() => {
    if (!d) return;
    const T = () => C((F) => F + 1);
    return window.addEventListener("hashchange", T), () => window.removeEventListener("hashchange", T);
  }, [d]);
  const b = xe(
    () => ({
      ...r,
      level: r.level + 1,
      openAncestors: () => {
        g(!0), r.openAncestors();
      }
    }),
    [r, g]
  );
  me(() => {
    w && t.length > 0 && b.openAncestors();
  }, []);
  const N = B(
    (T) => {
      if (u) {
        T.preventDefault();
        return;
      }
      const F = { text: i, value: c, path: d };
      [r.emit(F), n.onClick?.(F)].includes(!1) && T.preventDefault(), _ || x(!0), n.onSelectedChange?.(!0);
    },
    [u, i, c, d, r, n, _]
  ), A = B(() => {
    u || (y || r.notifyOpened(e, t), g(!y));
  }, [u, y, r, e, t, g]), M = B(
    (T) => {
      T.key === "Enter" || T.key === " " ? (T.preventDefault(), a ? A() : T.target.click()) : T.key === "Escape" && y ? (T.preventDefault(), g(!1)) : T.key === "ArrowRight" && a && !y ? (T.preventDefault(), r.notifyOpened(e, t), g(!0)) : T.key === "ArrowLeft" && y && (T.preventDefault(), g(!1));
    },
    [a, A, y, g, r, e, t]
  ), I = a && r.showArrow ? /* @__PURE__ */ s(
    "span",
    {
      className: [lt.caret, y ? lt.open : null].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: /* @__PURE__ */ s(Oe, { name: "chevron-down", size: 10 })
    }
  ) : null, O = n.template ?? /* @__PURE__ */ D(Ne, { children: [
    /* @__PURE__ */ s(
      iy,
      {
        icon: n.icon,
        iconColor: n.iconColor,
        image: n.image,
        imageAlt: n.imageAlt
      }
    ),
    r.displayStyle === "icon" ? /* @__PURE__ */ s("span", { className: lt.text, "aria-label": i, children: n.icon || n.image ? null : i.slice(0, 1) }) : /* @__PURE__ */ s("span", { className: lt.text, children: i }),
    I
  ] }), h = `${r.baseId}-panel-${e}`, S = `${r.baseId}-trigger-${e}`, L = [
    lt.trigger,
    u ? lt.disabled : null,
    y ? lt.expanded : null,
    m ? lt.selected : null
  ].filter(Boolean).join(" "), E = a ? /* @__PURE__ */ s(
    "button",
    {
      type: "button",
      id: S,
      "aria-expanded": y,
      "aria-controls": h,
      "aria-disabled": u || void 0,
      disabled: u,
      tabIndex: u ? -1 : 0,
      className: L,
      onClick: A,
      onKeyDown: M,
      children: O
    }
  ) : d && !u ? /* @__PURE__ */ s(
    "a",
    {
      id: S,
      href: d,
      target: n.target,
      "aria-disabled": void 0,
      "aria-current": m ? "page" : void 0,
      tabIndex: 0,
      className: L,
      onClick: N,
      onKeyDown: M,
      children: O
    }
  ) : /* @__PURE__ */ s(
    "button",
    {
      type: "button",
      id: S,
      "aria-current": m ? "page" : void 0,
      "aria-disabled": u || void 0,
      disabled: u,
      tabIndex: u ? -1 : 0,
      className: L,
      onClick: N,
      onKeyDown: M,
      children: O
    }
  ), j = a ? r.renderMode === "server" && !y ? null : /* @__PURE__ */ s(
    "div",
    {
      id: h,
      role: "menu",
      "aria-labelledby": S,
      className: lt.submenu,
      hidden: r.renderMode === "client" && !y ? !0 : void 0,
      children: /* @__PURE__ */ s(ss.Provider, { value: b, children: l.map((T, F) => /* @__PURE__ */ s(
        Os,
        {
          itemKey: `${e}-${F}`,
          ancestors: [...t, e],
          props: T.props
        },
        `${e}-${F}`
      )) })
    }
  ) : null;
  return /* @__PURE__ */ D(
    "div",
    {
      className: lt.item,
      style: { "--dx-panelmenu-level": r.level },
      "data-dx-panelmenu-item": "",
      "data-level": r.level,
      children: [
        E,
        j
      ]
    }
  );
}
function Ck(e) {
  if (!nn(ss)) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  return /* @__PURE__ */ s(Os, { itemKey: e.text, ancestors: [], props: e });
}
function zk({
  children: e,
  multiple: t = !0,
  displayStyle: n = "iconAndText",
  showArrow: r = !0,
  match: i = "prefix",
  renderMode: c = "client",
  onClick: d,
  ariaLabel: o = "Panel menu",
  className: l,
  ...a
}) {
  const u = qe(), [f, k] = X(0), v = ee(/* @__PURE__ */ new Set()), $ = B(
    (w) => d?.(w),
    [d]
  ), y = B(
    (w, m) => {
      t || (v.current = /* @__PURE__ */ new Set([w, ...m]), k((C) => C + 1));
    },
    [t]
  ), g = (w) => Array.from(
    w.querySelectorAll('button, a[href], [role="menuitem"]')
  ).filter(
    (m) => !m.hasAttribute("disabled") && m.getAttribute("aria-disabled") !== "true" && m.closest("[hidden]") == null
  ), _ = (w) => {
    if (!(w.key === "Enter" || w.key === " ")) {
      if (w.key === "ArrowDown" || w.key === "ArrowUp") {
        const m = w.target, C = g(w.currentTarget), b = C.indexOf(m);
        if (b === -1) return;
        w.preventDefault();
        const N = w.key === "ArrowDown" ? 1 : -1;
        C[(b + N + C.length) % C.length]?.focus();
      } else if (w.key === "Home" || w.key === "End") {
        const m = g(w.currentTarget);
        w.preventDefault(), (w.key === "Home" ? m[0] : m[m.length - 1])?.focus();
      }
    }
  }, p = xe(
    () => ({
      baseId: u,
      multiple: t,
      displayStyle: n,
      showArrow: r,
      renderMode: c,
      match: i,
      level: 0,
      collapseSignal: f,
      collapseSkipRef: v,
      emit: $,
      notifyOpened: y,
      openAncestors: () => {
      }
    }),
    [
      u,
      t,
      n,
      r,
      c,
      i,
      f,
      $,
      y
    ]
  ), x = xe(
    () => Fn.toArray(e).filter(dt),
    [e]
  );
  return /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": o,
      className: [
        lt.root,
        n === "icon" ? lt.iconOnly : null,
        n === "stacked" ? lt.stacked : null,
        l
      ].filter(Boolean).join(" "),
      onKeyDown: _,
      ...a,
      children: /* @__PURE__ */ s("div", { className: lt.list, role: "presentation", children: /* @__PURE__ */ s(ss.Provider, { value: p, children: x.map((w, m) => /* @__PURE__ */ s(
        Os,
        {
          itemKey: String(m),
          ancestors: [],
          props: w.props
        },
        `top-${m}`
      )) }) })
    }
  );
}
const cy = "_root_1bbxp_1", dy = "_trigger_1bbxp_7", uy = "_defaultTrigger_1bbxp_40", fy = "_avatar_1bbxp_46", _y = "_menu_1bbxp_58", py = "_item_1bbxp_74", hy = "_disabled_1bbxp_88", my = "_active_1bbxp_97", gy = "_icon_1bbxp_107", xy = "_text_1bbxp_114", Tt = {
  root: cy,
  trigger: dy,
  defaultTrigger: uy,
  avatar: fy,
  menu: _y,
  item: py,
  disabled: hy,
  active: my,
  icon: gy,
  text: xy
};
function Ek({
  items: e,
  trigger: t,
  onClick: n,
  ariaLabel: r = "Profile menu",
  className: i
}) {
  const c = qe(), d = `${c}-menu`, o = ee(null), l = ee(null), [a, u] = X(!1), [f, k] = X(-1), v = t, $ = e.map((m, C) => m.disabled ? -1 : C).filter((m) => m >= 0), y = B(
    (m) => {
      if (m.disabled) return;
      const C = {
        text: m.text,
        path: m.path
      };
      n?.(C), u(!1), l.current?.focus();
    },
    [n]
  ), g = B(() => {
    k($[0] ?? -1), u(!0);
  }, [$]), _ = B(() => {
    u(!1), k(-1), l.current?.focus();
  }, []);
  me(() => {
    if (!a) return;
    const m = (C) => {
      o.current && !o.current.contains(C.target) && (u(!1), k(-1));
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [a]), me(() => {
    if (!a) return;
    const m = (C) => {
      C.key === "Escape" && (C.preventDefault(), _());
    };
    return document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m);
  }, [a, _]);
  const p = (m) => {
    if ($.length === 0) return;
    const C = $.indexOf(f), b = C === -1 ? 0 : (C + m + $.length) % $.length, N = $[b];
    N != null && k(N);
  }, x = (m) => {
    if (!a) {
      (m.key === "ArrowDown" || m.key === "Enter" || m.key === " ") && (m.preventDefault(), g());
      return;
    }
    switch (m.key) {
      case "Escape":
        m.preventDefault(), _();
        break;
      case "ArrowDown":
        m.preventDefault(), p(1);
        break;
      case "ArrowUp":
        m.preventDefault(), p(-1);
        break;
      case "Home":
        m.preventDefault(), $[0] != null && k($[0]);
        break;
      case "End":
        m.preventDefault(), $[$.length - 1] != null && k($[$.length - 1]);
        break;
      case "Enter":
      case " ":
        if (m.preventDefault(), f >= 0) {
          const C = e[f];
          C && !C.disabled && y(C);
        }
        break;
      case "Tab":
        u(!1), k(-1);
        break;
    }
  }, w = (m) => {
    switch (m.key) {
      case "ArrowDown":
        m.preventDefault(), p(1);
        break;
      case "ArrowUp":
        m.preventDefault(), p(-1);
        break;
      case "Home":
        m.preventDefault(), $[0] != null && k($[0]);
        break;
      case "End":
        m.preventDefault(), $[$.length - 1] != null && k($[$.length - 1]);
        break;
      case "Enter":
      case " ":
        if (m.preventDefault(), f >= 0) {
          const C = e[f];
          C && !C.disabled && y(C);
        }
        break;
      case "Escape":
        m.preventDefault(), _();
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
      className: [Tt.root, i].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ D("nav", { "aria-label": r, children: [
        /* @__PURE__ */ s(
          "button",
          {
            ref: l,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": a,
            "aria-controls": d,
            "aria-label": r,
            className: Tt.trigger,
            onClick: () => a ? _() : g(),
            onKeyDown: x,
            children: v ?? /* @__PURE__ */ D("span", { className: Tt.defaultTrigger, children: [
              /* @__PURE__ */ s("span", { className: Tt.avatar, "aria-hidden": "true", children: "●" }),
              /* @__PURE__ */ s("span", { children: "Profile" })
            ] })
          }
        ),
        a ? /* @__PURE__ */ s(
          "div",
          {
            id: d,
            role: "menu",
            "aria-label": r,
            "aria-activedescendant": f >= 0 ? `${c}-item-${f}` : void 0,
            className: Tt.menu,
            onKeyDown: w,
            tabIndex: -1,
            children: e.map((m, C) => {
              const b = !!m.disabled, N = C === f;
              return /* @__PURE__ */ D(
                "div",
                {
                  id: `${c}-item-${C}`,
                  role: "menuitem",
                  "aria-disabled": b || void 0,
                  tabIndex: b ? -1 : 0,
                  className: [
                    Tt.item,
                    N ? Tt.active : null,
                    b ? Tt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    b || y(m);
                  },
                  onMouseEnter: () => {
                    b || k(C);
                  },
                  children: [
                    m.icon ? /* @__PURE__ */ s("span", { className: Tt.icon, "aria-hidden": "true", children: m.icon }) : null,
                    /* @__PURE__ */ s("span", { className: Tt.text, children: m.text })
                  ]
                },
                `${m.text}-${C}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const yy = "_root_1dgrt_1", by = "_bottomRight_1dgrt_11", vy = "_bottomLeft_1dgrt_16", ky = "_topRight_1dgrt_21", wy = "_topLeft_1dgrt_26", $y = "_menu_1dgrt_31", Oy = "_itemWrapper_1dgrt_48", Ny = "_tooltip_1dgrt_54", Sy = "_main_1dgrt_76", Dy = "_mainIcon_1dgrt_104", My = "_mainOpen_1dgrt_109", Cy = "_item_1dgrt_48", zy = "_disabled_1dgrt_141", Ey = "_itemIcon_1dgrt_148", ft = {
  root: yy,
  bottomRight: by,
  bottomLeft: vy,
  topRight: ky,
  topLeft: wy,
  menu: $y,
  itemWrapper: Oy,
  tooltip: Ny,
  main: Sy,
  mainIcon: Dy,
  mainOpen: My,
  item: Cy,
  disabled: zy,
  itemIcon: Ey
};
function Ik({
  items: e,
  position: t,
  icon: n = "+",
  onClick: r,
  ariaLabel: i = "Open menu",
  className: c
}) {
  const d = t ?? "bottom-right", l = `${qe()}-menu`, a = ee(null), u = ee(null), [f, k] = X(!1), v = B(
    (_) => {
      if (_.disabled) return;
      const p = { text: _.text, value: _.value };
      r?.(p), k(!1), u.current?.focus();
    },
    [r]
  );
  me(() => {
    if (!f) return;
    const _ = (p) => {
      a.current && !a.current.contains(p.target) && k(!1);
    };
    return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
  }, [f]), me(() => {
    if (!f) return;
    const _ = (p) => {
      p.key === "Escape" && (k(!1), u.current?.focus());
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [f]);
  const $ = d === "bottom-right" ? ft.bottomRight : d === "bottom-left" ? ft.bottomLeft : d === "top-right" ? ft.topRight : ft.topLeft, y = (_) => {
    !f && (_.key === "Enter" || _.key === " " || _.key === "ArrowDown" || _.key === "ArrowUp") ? (_.preventDefault(), k(!0)) : f && _.key === "Escape" && (_.preventDefault(), k(!1));
  }, g = (_) => {
    _.key === "Escape" && (_.preventDefault(), k(!1), u.current?.focus());
  };
  return /* @__PURE__ */ D(
    "div",
    {
      ref: a,
      className: [ft.root, $, c].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        f ? /* @__PURE__ */ s(
          "div",
          {
            id: l,
            role: "menu",
            "aria-label": i,
            className: ft.menu,
            onKeyDown: g,
            children: e.map((_, p) => {
              const x = !!_.disabled;
              return /* @__PURE__ */ D("div", { className: ft.itemWrapper, children: [
                /* @__PURE__ */ s("span", { className: ft.tooltip, "aria-hidden": "true", children: _.text }),
                /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": _.text,
                    "aria-disabled": x || void 0,
                    title: _.text,
                    disabled: x,
                    tabIndex: x ? -1 : 0,
                    className: [ft.item, x ? ft.disabled : null].filter(Boolean).join(" "),
                    onClick: () => v(_),
                    children: /* @__PURE__ */ s("span", { className: ft.itemIcon, "aria-hidden": "true", children: _.icon ?? "•" })
                  }
                )
              ] }, `${_.text}-${p}`);
            })
          }
        ) : null,
        /* @__PURE__ */ s(
          "button",
          {
            ref: u,
            type: "button",
            className: ft.main,
            "aria-haspopup": "menu",
            "aria-expanded": f,
            "aria-controls": l,
            "aria-label": i,
            onClick: () => k((_) => !_),
            onKeyDown: y,
            children: /* @__PURE__ */ s(
              "span",
              {
                "aria-hidden": "true",
                className: [ft.mainIcon, f ? ft.mainOpen : null].filter(Boolean).join(" "),
                children: n
              }
            )
          }
        )
      ]
    }
  );
}
const Iy = "_root_1nu0o_1", Ay = "_list_1nu0o_5", jy = "_item_1nu0o_15", Ty = "_link_1nu0o_22", Ly = "_linkButton_1nu0o_23", Py = "_current_1nu0o_24", Ry = "_disabled_1nu0o_68", By = "_icon_1nu0o_74", qy = "_text_1nu0o_81", Fy = "_separator_1nu0o_85", Ue = {
  root: Iy,
  list: Ay,
  item: jy,
  link: Ty,
  linkButton: Ly,
  current: Py,
  disabled: Ry,
  icon: By,
  text: qy,
  separator: Fy
};
function Ak({
  items: e,
  onClick: t,
  ariaLabel: n = "Breadcrumb",
  className: r
}) {
  const i = t, c = (d) => {
    d.disabled || i?.({ text: d.text, path: d.path });
  };
  return /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": n,
      className: [Ue.root, r].filter(Boolean).join(" "),
      children: /* @__PURE__ */ s("ol", { className: Ue.list, children: e.map((d, o) => {
        const l = o === e.length - 1, a = !!d.disabled;
        return /* @__PURE__ */ D("li", { className: Ue.item, children: [
          l ? a ? /* @__PURE__ */ D(
            "span",
            {
              className: [Ue.current, Ue.disabled].filter(Boolean).join(" "),
              "aria-current": "page",
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: Ue.icon, "aria-hidden": "true", children: d.icon }) : null,
                d.text
              ]
            }
          ) : d.path ? /* @__PURE__ */ D(
            "a",
            {
              href: d.path,
              className: Ue.link,
              "aria-current": "page",
              onClick: (u) => {
                u.preventDefault(), c(d);
              },
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: Ue.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ s("span", { className: Ue.text, children: d.text })
              ]
            }
          ) : /* @__PURE__ */ D(
            "span",
            {
              className: Ue.current,
              "aria-current": "page",
              tabIndex: 0,
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: Ue.icon, "aria-hidden": "true", children: d.icon }) : null,
                d.text
              ]
            }
          ) : a ? /* @__PURE__ */ D(
            "span",
            {
              className: [Ue.link, Ue.disabled].filter(Boolean).join(" "),
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: Ue.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ s("span", { className: Ue.text, children: d.text })
              ]
            }
          ) : d.path ? /* @__PURE__ */ D(
            "a",
            {
              href: d.path,
              className: Ue.link,
              onClick: (u) => {
                u.preventDefault(), c(d);
              },
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: Ue.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ s("span", { className: Ue.text, children: d.text })
              ]
            }
          ) : /* @__PURE__ */ D(
            "button",
            {
              type: "button",
              className: Ue.linkButton,
              tabIndex: 0,
              onClick: () => c(d),
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: Ue.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ s("span", { className: Ue.text, children: d.text })
              ]
            }
          ),
          l ? null : /* @__PURE__ */ s("span", { className: Ue.separator, "aria-hidden": "true", children: "/" })
        ] }, `${d.text}-${o}`);
      }) })
    }
  );
}
const Hy = "_link_6vrgp_1", Ky = {
  link: Hy
}, jk = Fe(function({ children: t, icon: n, visible: r = !0, className: i, ...c }, d) {
  if (r === !1) return null;
  const o = /* @__PURE__ */ D(Ne, { children: [
    n != null && /* @__PURE__ */ s(Oe, { name: n, "aria-hidden": "true" }),
    t
  ] }), l = [Ky.link, i].filter(Boolean).join(" ");
  if (c.href != null) {
    const { href: u, ...f } = c;
    return /* @__PURE__ */ s(
      "a",
      {
        ref: d,
        className: l,
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
      className: l,
      ...c,
      children: o
    }
  );
}), Uy = "_root_1w5vx_1", Wy = "_list_1w5vx_5", Xy = "_item_1w5vx_15", Vy = "_connector_1w5vx_21", Gy = "_connectorCompleted_1w5vx_30", Yy = "_step_1w5vx_34", Zy = "_active_1w5vx_69", Jy = "_completed_1w5vx_75", Qy = "_circle_1w5vx_79", eb = "_check_1w5vx_109", tb = "_icon_1w5vx_114", nb = "_number_1w5vx_119", sb = "_text_1w5vx_124", _t = {
  root: Uy,
  list: Wy,
  item: Xy,
  connector: Vy,
  connectorCompleted: Gy,
  step: Yy,
  active: Zy,
  completed: Jy,
  circle: Qy,
  check: eb,
  icon: tb,
  number: nb,
  text: sb
};
function Tk({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: r = 0,
  linear: i,
  Linear: c,
  onChange: d,
  Change: o,
  onSelectedIndexChange: l,
  ariaLabel: a = "Steps",
  className: u
}) {
  const f = i ?? c ?? !1, k = t ?? n, v = k !== void 0, [$, y] = X(() => Math.min(Math.max(0, k ?? r), Math.max(0, e.length - 1))), _ = Math.min(
    Math.max(0, v ? k : $),
    Math.max(0, e.length - 1)
  ), p = ee(null), x = B(
    (C) => {
      const b = Math.min(
        Math.max(0, C),
        Math.max(0, e.length - 1)
      );
      v || y(b), (d ?? o ?? l)?.(b);
    },
    [v, d, o, l, e.length]
  ), w = B(
    (C, b) => !!(b.disabled || f && C > _ + 1),
    [f, _]
  ), m = (C) => {
    const b = Array.from(
      C.currentTarget.querySelectorAll("button[data-step]")
    ).filter((M) => M.getAttribute("aria-disabled") !== "true" && !M.disabled), N = document.activeElement, A = N ? b.indexOf(N) : -1;
    if (C.key === "ArrowRight" || C.key === "ArrowDown") {
      if (C.preventDefault(), b.length === 0) return;
      const M = A === -1 ? 0 : (A + 1) % b.length, I = b[M];
      I && I.focus();
    } else if (C.key === "ArrowLeft" || C.key === "ArrowUp") {
      if (C.preventDefault(), b.length === 0) return;
      const M = A === -1 ? b.length - 1 : (A - 1 + b.length) % b.length, I = b[M];
      I && I.focus();
    } else C.key === "Home" ? (C.preventDefault(), b[0]?.focus()) : C.key === "End" && (C.preventDefault(), b[b.length - 1]?.focus());
  };
  return /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": a,
      className: [_t.root, u].filter(Boolean).join(" "),
      onKeyDown: m,
      children: /* @__PURE__ */ s("ol", { ref: p, role: "list", className: _t.list, children: e.map((C, b) => {
        const N = b === _, A = b < _, M = w(b, C);
        return /* @__PURE__ */ D(
          "li",
          {
            role: "listitem",
            className: _t.item,
            children: [
              b > 0 ? /* @__PURE__ */ s(
                "span",
                {
                  className: [
                    _t.connector,
                    A ? _t.connectorCompleted : null
                  ].filter(Boolean).join(" "),
                  "aria-hidden": "true"
                }
              ) : null,
              /* @__PURE__ */ D(
                "button",
                {
                  type: "button",
                  "data-step": b,
                  "aria-current": N ? "step" : void 0,
                  "aria-disabled": M ? "true" : void 0,
                  disabled: M,
                  tabIndex: M ? -1 : 0,
                  className: [
                    _t.step,
                    N ? _t.active : null,
                    A ? _t.completed : null,
                    M ? _t.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    M || x(b);
                  },
                  children: [
                    /* @__PURE__ */ s("span", { className: _t.circle, "aria-hidden": "true", children: A ? /* @__PURE__ */ s("span", { className: _t.check, "aria-hidden": "true", children: /* @__PURE__ */ s(Oe, { name: "check", size: "sm" }) }) : C.icon ? /* @__PURE__ */ s("span", { className: _t.icon, children: C.icon }) : /* @__PURE__ */ s("span", { className: _t.number, children: b + 1 }) }),
                    /* @__PURE__ */ s("span", { className: _t.text, children: C.text })
                  ]
                }
              )
            ]
          },
          `${C.text}-${b}`
        );
      }) })
    }
  );
}
const rb = "_root_1np74_1", ob = "_horizontal_1np74_13", lb = "_vertical_1np74_17", ab = "_pane_1np74_21", ib = "_handle_1np74_31", cb = "_handleHorizontal_1np74_51", db = "_handleVertical_1np74_57", ub = "_handleGrip_1np74_63", fb = "_handleCollapseHint_1np74_75", _b = "_collapseBtn_1np74_79", pb = "_collapseBtnCollapsed_1np74_109", $t = {
  root: rb,
  horizontal: ob,
  vertical: lb,
  pane: ab,
  handle: ib,
  handleHorizontal: cb,
  handleVertical: db,
  handleGrip: ub,
  handleCollapseHint: fb,
  collapseBtn: _b,
  collapseBtnCollapsed: pb
};
function Ln(e, t) {
  if (!e) return t;
  const n = e.trim();
  if (n.endsWith("%")) {
    const i = parseFloat(n.slice(0, -1));
    return Number.isNaN(i) ? t : i;
  }
  if (n.endsWith("px")) {
    const i = parseFloat(n.slice(0, -2));
    return Number.isNaN(i) ? t : i;
  }
  const r = parseFloat(n);
  return Number.isNaN(r) ? t : r;
}
function Wt(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function Lk({
  orientation: e,
  Orientation: t,
  panes: n,
  onResize: r,
  Resize: i,
  onCollapse: c,
  Collapse: d,
  ariaLabel: o = "Splitter",
  className: l
}) {
  const a = e ?? t ?? "horizontal", u = a === "horizontal", f = ee(null), k = B(() => {
    const h = n.length;
    if (h === 0) return [];
    const S = n.map((E) => E.size ? Ln(E.size, 100 / h) : 100 / h), L = S.reduce((E, j) => E + j, 0);
    return Math.abs(L - 100) > 0.01 && L > 0 ? S.map((E) => E / L * 100) : S;
  }, [n]), [v, $] = X(() => k()), [y, g] = X(
    () => n.map((h) => !!h.collapsed)
  ), _ = ee(v);
  me(() => {
    g(n.map((h) => !!h.collapsed));
  }, [n]);
  const p = B(
    () => n.map((h) => Ln(h.min, 0)),
    [n]
  ), x = B(
    () => n.map((h) => Ln(h.max, 100)),
    [n]
  ), w = B(
    (h, S) => {
      const L = { paneIndex: h, newSize: S, cancel: !1 };
      return (r ?? i)?.(L), !L.cancel;
    },
    [r, i]
  ), m = B(
    (h, S) => {
      const L = { paneIndex: h, collapse: S, cancel: !1 };
      return (c ?? d)?.(L), !L.cancel;
    },
    [c, d]
  ), C = B(
    (h) => {
      const S = !y[h];
      m(h, S) && (S ? (_.current = [...v], g((L) => {
        const E = [...L];
        return E[h] !== void 0 && (E[h] = !0), E;
      }), $((L) => {
        const E = [...L], j = E[h] ?? 0, T = h < E.length - 1 ? h + 1 : h - 1;
        if (T >= 0 && T < E.length) {
          const F = E[T] ?? 0;
          E[T] = F + j, E[h] = 0;
        } else
          E[h] = 0;
        return E;
      })) : (g((L) => {
        const E = [...L];
        return E[h] !== void 0 && (E[h] = !1), E;
      }), $(() => {
        const L = [..._.current];
        return L.length !== n.length ? n.map(() => 100 / n.length) : L;
      })));
    },
    [y, v, n.length, m]
  ), b = ee(
    null
  ), N = B(
    (h, S, L) => {
      const E = f.current;
      if (!E) return null;
      const j = E.getBoundingClientRect();
      let T;
      if (u) {
        if (j.width === 0) return null;
        T = (S - j.left) / j.width * 100;
      } else {
        if (j.height === 0) return null;
        T = (L - j.top) / j.height * 100;
      }
      let F = 0;
      for (let Y = 0; Y < h; Y++) {
        const U = v[Y];
        U !== void 0 && (F += U);
      }
      return T - F;
    },
    [u, v]
  ), A = (h, S) => {
    S.preventDefault();
    const L = S.currentTarget;
    L.focus(), typeof L.setPointerCapture == "function" && L.setPointerCapture(S.pointerId), b.current = { handleIndex: h, pointerId: S.pointerId };
  }, M = (h) => {
    if (!b.current || b.current.pointerId !== h.pointerId)
      return;
    h.preventDefault();
    const S = b.current.handleIndex, L = N(S, h.clientX, h.clientY);
    if (L == null) return;
    const E = p(), j = x(), T = E[S] ?? 0, F = j[S] ?? 100, G = S + 1, Y = E[G] ?? 0, U = j[G] ?? 100, ne = v[S] ?? 0, le = v[G] ?? 0, te = ne + le;
    if (te <= 0) return;
    let q = Wt(L, T, F), ie = te - q;
    if (ie < Y) {
      if (ie = Y, q = te - ie, q < T || q > F) return;
    } else if (ie > U && (ie = U, q = te - ie, q < T || q > F))
      return;
    q = Wt(q, T, F), ie = te - q, w(S, q) && $((J) => {
      const de = [...J];
      return de[S] = q, de[G] = ie, de;
    });
  }, I = (h) => {
    !b.current || b.current.pointerId !== h.pointerId || (b.current = null);
  }, O = (h, S) => {
    const L = p(), E = x(), j = h, T = h + 1, F = v[j] ?? 0, G = v[T] ?? 0, Y = F + G;
    let U = 0;
    const ne = !!n[j]?.collapsible, le = !!n[T]?.collapsible;
    if (u ? S.key === "ArrowLeft" ? U = -5 : S.key === "ArrowRight" && (U = 5) : S.key === "ArrowUp" ? U = -5 : S.key === "ArrowDown" && (U = 5), S.key === "Home") {
      S.preventDefault();
      let te = L[j] ?? 0, q = Y - te;
      if (q = Wt(
        q,
        L[T] ?? 0,
        E[T] ?? 100
      ), te = Y - q, te = Wt(te, L[j] ?? 0, E[j] ?? 100), !w(j, te)) return;
      $((ie) => {
        const J = [...ie];
        return J[j] = te, J[T] = q, J;
      });
      return;
    }
    if (S.key === "End") {
      S.preventDefault();
      let te = E[j] ?? 100;
      te = Math.min(te, Y - (L[T] ?? 0));
      let q = Y - te;
      if (q = Wt(
        q,
        L[T] ?? 0,
        E[T] ?? 100
      ), te = Y - q, te = Wt(te, L[j] ?? 0, E[j] ?? 100), !w(j, te)) return;
      $((ie) => {
        const J = [...ie];
        return J[j] = te, J[T] = q, J;
      });
      return;
    }
    if ((S.key === "Enter" || S.key === " ") && (ne || le)) {
      S.preventDefault(), C(ne ? j : T);
      return;
    }
    if (U !== 0) {
      S.preventDefault();
      let te = F + U, q = Y - te;
      const ie = L[j] ?? 0, J = E[j] ?? 100, de = L[T] ?? 0, ae = E[T] ?? 100;
      if (te = Wt(te, ie, J), q = Y - te, (q < de || q > ae) && (q = Wt(q, de, ae), te = Y - q, te = Wt(te, ie, J), q = Y - te), !w(j, te)) return;
      $((ve) => {
        const $e = [...ve];
        return $e[j] = te, $e[T] = q, $e;
      });
    }
  };
  return /* @__PURE__ */ s(
    "div",
    {
      ref: f,
      className: [
        $t.root,
        u ? $t.horizontal : $t.vertical,
        l
      ].filter(Boolean).join(" "),
      "aria-label": o,
      children: n.map((h, S) => {
        const L = !!y[S], E = L ? 0 : v[S] ?? 100 / n.length, j = L ? { display: "none" } : u ? {
          flexBasis: `${E}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        } : {
          flexBasis: `${E}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        }, T = Ln(h.min, 0), F = Ln(h.max, 100), G = S < n.length - 1, Y = !!n[S + 1]?.collapsible;
        return /* @__PURE__ */ D("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ D(
            "div",
            {
              role: "group",
              "aria-label": h.label ?? `Pane ${S + 1}`,
              className: $t.pane,
              style: j,
              "data-collapsed": L ? "true" : void 0,
              children: [
                L ? null : h.children,
                h.collapsible && !L ? /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    className: $t.collapseBtn,
                    "aria-label": `Collapse pane ${S + 1}`,
                    "aria-expanded": !L,
                    onClick: () => C(S),
                    children: u ? "◀" : "▲"
                  }
                ) : null,
                h.collapsible && L ? /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    className: $t.collapseBtn,
                    "aria-label": `Expand pane ${S + 1}`,
                    "aria-expanded": !L,
                    onClick: () => C(S),
                    children: u ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          L && h.collapsible ? (
            // when collapsed we already rendered expand button inside pane, but pane is display none, so render expand button outside?
            // Actually we hide pane with display none, need visible expand button
            // So render alternative expand button adjacent
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: $t.collapseBtnCollapsed,
                "aria-label": `Expand pane ${S + 1}`,
                "aria-expanded": "false",
                onClick: () => C(S),
                children: u ? "▶" : "▼"
              }
            )
          ) : null,
          G ? /* @__PURE__ */ D(
            "div",
            {
              role: "separator",
              "aria-orientation": a,
              "aria-valuemin": T,
              "aria-valuemax": F,
              "aria-valuenow": Math.round(E),
              "aria-label": `Resize handle ${S + 1}`,
              tabIndex: L || y[S + 1] ? -1 : 0,
              className: [
                $t.handle,
                u ? $t.handleHorizontal : $t.handleVertical
              ].filter(Boolean).join(" "),
              onPointerDown: (U) => A(S, U),
              onPointerMove: M,
              onPointerUp: I,
              onKeyDown: (U) => O(S, U),
              children: [
                /* @__PURE__ */ s("span", { className: $t.handleGrip, "aria-hidden": "true" }),
                (h.collapsible || Y) && /* @__PURE__ */ s(
                  "span",
                  {
                    className: $t.handleCollapseHint,
                    "aria-hidden": "true"
                  }
                )
              ]
            }
          ) : null
        ] }, S);
      })
    }
  );
}
const hb = "_root_wurjl_1", mb = "_list_wurjl_5", gb = "_vertical_wurjl_14", xb = "_horizontal_wurjl_20", yb = "_item_wurjl_28", bb = "_link_wurjl_32", vb = "_active_wurjl_57", bn = {
  root: hb,
  list: mb,
  vertical: gb,
  horizontal: xb,
  item: yb,
  link: bb,
  active: vb
};
function Pk({
  items: e,
  selector: t,
  Selector: n,
  orientation: r,
  Orientation: i,
  onClick: c,
  Click: d,
  ariaLabel: o = "Table of contents",
  className: l
}) {
  const a = t ?? n, u = r ?? i ?? "vertical", [f, k] = X(
    () => e[0]?.selector ?? null
  ), v = ee(f);
  v.current = f;
  const $ = B(
    (y, g) => {
      if (k(y.selector), (c ?? d)?.({ text: y.text, selector: y.selector }), g) {
        try {
          g.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        } catch {
          g.scrollIntoView();
        }
        const p = g;
        p.getAttribute("tabindex") == null && p.tabIndex === -1 || p.tabIndex < 0 ? (p.getAttribute("tabindex"), p.setAttribute("tabindex", "-1"), p.focus({ preventScroll: !0 })) : p.focus({ preventScroll: !0 });
      }
    },
    [c, d]
  );
  return me(() => {
    if (e.length === 0) return;
    const g = (() => {
      if (a) {
        const m = document.querySelector(a);
        if (m) return m;
      }
      return window;
    })();
    let _ = null;
    const p = /* @__PURE__ */ new Map(), x = () => {
      let m = null, C = null;
      for (const N of e) {
        const A = document.querySelector(N.selector);
        if (!A) continue;
        p.set(N.selector, A);
        const M = A.getBoundingClientRect();
        let I = M.top;
        if (g !== window) {
          const O = g.getBoundingClientRect();
          I = M.top - O.top;
        }
        I <= 80 ? (!C || I > C.el.getBoundingClientRect().top - (g !== window ? g.getBoundingClientRect().top : 0)) && (C = { sel: N.selector, el: A }) : (!m || I < m.top) && (m = { sel: N.selector, top: I });
      }
      const b = C?.sel ?? m?.sel ?? e[0]?.selector ?? null;
      b && b !== v.current && k(b);
    }, w = () => {
      x();
    };
    if (typeof IntersectionObserver < "u") {
      const m = g === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
        root: g,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      };
      _ = new IntersectionObserver((C) => {
        const b = C.filter((N) => N.isIntersecting).sort((N, A) => N.boundingClientRect.top - A.boundingClientRect.top);
        if (b[0]) {
          const N = b[0].target;
          for (const A of e) {
            if (document.querySelector(A.selector) === N) {
              k(A.selector);
              break;
            }
            if (A.selector.startsWith("#") && N.id === A.selector.slice(1)) {
              k(A.selector);
              break;
            }
          }
        } else
          x();
      }, m);
      for (const C of e) {
        const b = document.querySelector(C.selector);
        b && (_.observe(b), p.set(C.selector, b));
      }
    }
    return g === window ? (window.addEventListener("scroll", w, { passive: !0 }), x(), () => {
      window.removeEventListener("scroll", w), _?.disconnect();
    }) : (g.addEventListener("scroll", w, {
      passive: !0
    }), x(), () => {
      g.removeEventListener("scroll", w), _?.disconnect();
    });
  }, [e, a]), /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": o,
      className: [bn.root, bn[u], l].filter(Boolean).join(" "),
      children: /* @__PURE__ */ s("ol", { className: bn.list, children: e.map((y) => {
        const g = y.selector === f;
        return /* @__PURE__ */ s("li", { className: bn.item, children: /* @__PURE__ */ s(
          "a",
          {
            href: y.selector.startsWith("#") || y.selector.startsWith(".") ? y.selector : `#${y.selector}`,
            className: [bn.link, g ? bn.active : null].filter(Boolean).join(" "),
            "aria-current": g ? "location" : void 0,
            onClick: (_) => {
              _.preventDefault();
              const p = document.querySelector(y.selector);
              $(y, p);
            },
            children: y.text
          }
        ) }, `${y.text}-${y.selector}`);
      }) })
    }
  );
}
const kb = "_root_u1med_1", wb = "_viewport_u1med_17", $b = "_slide_u1med_24", Ob = "_active_u1med_33", Nb = "_arrow_u1med_37", Sb = "_prev_u1med_71", Db = "_next_u1med_75", Mb = "_pauseBtn_u1med_79", Cb = "_indicators_u1med_110", zb = "_indicator_u1med_110", Eb = "_indicatorActive_u1med_145", Ot = {
  root: kb,
  viewport: wb,
  slide: $b,
  active: Ob,
  arrow: Nb,
  prev: Sb,
  next: Db,
  pauseBtn: Mb,
  indicators: Cb,
  indicator: zb,
  indicatorActive: Eb
};
function Rk({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: r = 0,
  auto: i,
  Auto: c,
  interval: d,
  Interval: o,
  pauseOnHover: l,
  PauseOnHover: a,
  showArrows: u,
  ShowArrows: f,
  showIndicators: k,
  ShowIndicators: v,
  onChange: $,
  Change: y,
  ariaLabel: g = "Carousel",
  className: _
}) {
  const p = t ?? n, x = p !== void 0, [w, m] = X(() => Math.min(Math.max(0, p ?? r), Math.max(0, e.length - 1))), C = x ? p : w, b = e.length === 0 ? 0 : Math.min(Math.max(0, C), e.length - 1), N = i ?? c ?? !1, A = d ?? o ?? 3e3, M = l ?? a ?? !0, I = u ?? f ?? !0, O = k ?? v ?? !0, [h, S] = X(!1), [L, E] = X(!1), j = h || L, T = ee(null), F = qe(), G = B(
    (de) => {
      const ae = e.length === 0 ? 0 : (de % e.length + e.length) % e.length;
      x || m(ae), ($ ?? y)?.(ae);
    },
    [x, $, y, e.length]
  ), Y = B(() => {
    G(b - 1);
  }, [G, b]), U = B(() => {
    G(b + 1);
  }, [G, b]), ne = B(
    (de) => {
      G(de);
    },
    [G]
  );
  me(() => {
    if (!N || j || e.length <= 1) return;
    const de = setInterval(() => {
      G(b + 1);
    }, A);
    return () => clearInterval(de);
  }, [N, j, A, b, G, e.length]);
  const le = (de) => {
    e.length !== 0 && (de.key === "ArrowLeft" ? (de.preventDefault(), Y()) : de.key === "ArrowRight" ? (de.preventDefault(), U()) : de.key === "Home" ? (de.preventDefault(), ne(0)) : de.key === "End" && (de.preventDefault(), ne(e.length - 1)));
  }, te = () => {
    M && N && E(!0);
  }, q = () => {
    M && N && E(!1);
  }, ie = () => {
    M && N && E(!0);
  }, J = () => {
    M && N && E(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ D(
    "div",
    {
      ref: T,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": g,
      tabIndex: 0,
      className: [Ot.root, _].filter(Boolean).join(" "),
      onKeyDown: le,
      onMouseEnter: te,
      onMouseLeave: q,
      onFocusCapture: ie,
      onBlurCapture: J,
      children: [
        /* @__PURE__ */ s("div", { id: F, className: Ot.viewport, children: e.map((de, ae) => {
          const ve = ae === b;
          return /* @__PURE__ */ s(
            "div",
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `Slide ${ae + 1} of ${e.length}`,
              "aria-hidden": ve ? void 0 : !0,
              hidden: !ve,
              className: [Ot.slide, ve ? Ot.active : null].filter(Boolean).join(" "),
              children: de
            },
            ae
          );
        }) }),
        I && e.length > 1 ? /* @__PURE__ */ D(Ne, { children: [
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: [Ot.arrow, Ot.prev].filter(Boolean).join(" "),
              "aria-label": "Previous slide",
              "aria-controls": F,
              onClick: Y,
              children: "‹"
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: [Ot.arrow, Ot.next].filter(Boolean).join(" "),
              "aria-label": "Next slide",
              "aria-controls": F,
              onClick: U,
              children: "›"
            }
          )
        ] }) : null,
        N ? /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: Ot.pauseBtn,
            "aria-label": h ? "Resume" : "Pause",
            "aria-pressed": h,
            onClick: () => S((de) => !de),
            children: h ? "▶" : "⏸"
          }
        ) : null,
        O && e.length > 1 ? /* @__PURE__ */ s(
          "div",
          {
            className: Ot.indicators,
            role: "group",
            "aria-label": "Slide indicators",
            children: e.map((de, ae) => {
              const ve = ae === b;
              return /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: [
                    Ot.indicator,
                    ve ? Ot.indicatorActive : null
                  ].filter(Boolean).join(" "),
                  "aria-label": `Go to slide ${ae + 1}`,
                  "aria-current": ve ? "true" : void 0,
                  "aria-controls": F,
                  onClick: () => ne(ae)
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
const Ib = "_root_xvqqt_1", Ab = "_group_xvqqt_20", jb = "_itemWrapper_xvqqt_30", Tb = "_treeitem_xvqqt_34", Lb = "_disabled_xvqqt_50", Pb = "_selected_xvqqt_60", Rb = "_caret_xvqqt_66", Bb = "_caretIcon_xvqqt_113", qb = "_caretOpen_xvqqt_120", Fb = "_caretPlaceholder_xvqqt_124", Hb = "_label_xvqqt_130", Kb = "_loading_xvqqt_137", Ub = "_loadingRow_xvqqt_143", Wb = "_empty_xvqqt_149", Xb = "_checkbox_xvqqt_155", st = {
  root: Ib,
  group: Ab,
  itemWrapper: jb,
  treeitem: Tb,
  disabled: Lb,
  selected: Pb,
  caret: Rb,
  caretIcon: Bb,
  caretOpen: qb,
  caretPlaceholder: Fb,
  label: Hb,
  loading: Kb,
  loadingRow: Ub,
  empty: Wb,
  checkbox: Xb
};
function Vb({
  indeterminate: e,
  ...t
}) {
  const n = ee(null);
  return me(() => {
    n.current && (n.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ s("input", { ref: n, type: "checkbox", ...t });
}
function Bk({
  data: e,
  Data: t,
  children: n,
  Children: r,
  textProperty: i,
  TextProperty: c,
  keyProperty: d,
  KeyProperty: o,
  selectionMode: l,
  SelectionMode: a,
  selectedItem: u,
  SelectedItem: f,
  selectedItems: k,
  SelectedItems: v,
  defaultSelectedItem: $,
  defaultSelectedItems: y,
  onChange: g,
  Change: _,
  onExpand: p,
  Expand: x,
  onCollapse: w,
  Collapse: m,
  loadChildData: C,
  LoadChildData: b,
  template: N,
  Template: A,
  itemTemplate: M,
  ItemTemplate: I,
  ariaLabel: O,
  AriaLabel: h,
  allowCheckBoxes: S = !1,
  checkedKeys: L,
  defaultCheckedKeys: E,
  onCheckedChange: j,
  allowCheckChildren: T = !0,
  className: F
}) {
  const G = e ?? t ?? [], Y = n ?? r, U = i ?? c ?? "text", ne = d ?? o ?? "id", le = l ?? a ?? "single", te = O ?? h ?? "Tree", q = C ?? b, ie = N ?? A ?? M ?? I, J = B(
    (H) => {
      const Z = H[ne];
      return Z != null ? String(Z) : String(H.id ?? "");
    },
    [ne]
  ), de = B(
    (H) => {
      const Z = H[U];
      if (Z != null) return String(Z);
      const oe = H.text;
      return oe != null ? String(oe) : "";
    },
    [U]
  ), ae = B(
    (H) => {
      if (Y) {
        const oe = Y(H);
        if (oe !== void 0) return oe;
      }
      const Z = H.children;
      if (Array.isArray(Z)) return Z;
    },
    [Y]
  ), ve = B(
    (H) => {
      const Z = /* @__PURE__ */ new Set(), oe = (pe) => {
        for (const _e of pe) {
          const ke = J(_e);
          _e.expanded && Z.add(ke);
          const je = ae(_e);
          je && je.length > 0 && oe(je);
        }
      };
      return oe(H), Z;
    },
    [J, ae]
  ), [$e, Re] = X(
    () => ve(G)
  ), [we, Xe] = X(
    () => /* @__PURE__ */ new Map()
  ), [be, Ze] = X(() => /* @__PURE__ */ new Set()), Ve = u ?? f, Le = k ?? v, et = le === "multiple" ? Le !== void 0 : Ve !== void 0, V = B(() => {
    if (le === "multiple") {
      if (y && y.length > 0)
        return new Set(y.map((oe) => J(oe)));
      const H = /* @__PURE__ */ new Set(), Z = (oe) => {
        for (const pe of oe) {
          pe.selected && H.add(J(pe));
          const _e = ae(pe);
          _e && Z(_e);
        }
      };
      return Z(G), H;
    } else {
      if ($) return /* @__PURE__ */ new Set([J($)]);
      let H = null;
      const Z = (oe) => {
        for (const pe of oe) {
          if (pe.selected)
            return H = J(pe), !0;
          const _e = ae(pe);
          if (_e && Z(_e)) return !0;
        }
        return !1;
      };
      return Z(G), H ? /* @__PURE__ */ new Set([H]) : /* @__PURE__ */ new Set();
    }
  }, [
    le,
    $,
    y,
    J,
    ae,
    G
  ]), [z, K] = X(
    () => V()
  ), se = xe(() => {
    if (le === "multiple") {
      if (Le !== void 0) {
        const H = Le;
        return H ? new Set(H.map((Z) => J(Z))) : /* @__PURE__ */ new Set();
      }
      return z;
    } else {
      if (Ve !== void 0) {
        const H = Ve;
        return H ? /* @__PURE__ */ new Set([J(H)]) : /* @__PURE__ */ new Set();
      }
      return z;
    }
  }, [
    le,
    Le,
    Ve,
    z,
    J
  ]), fe = B(
    (H) => {
      let Z;
      const oe = (pe) => {
        for (const _e of pe) {
          if (J(_e) === H)
            return Z = _e, !0;
          const je = we.get(J(_e)) ?? ae(_e);
          if (je && oe(je)) return !0;
        }
        return !1;
      };
      if (oe(G), !Z) {
        for (const pe of we.values())
          if (oe(pe)) break;
      }
      return Z;
    },
    [G, we, J, ae]
  ), re = B(() => {
    const H = /* @__PURE__ */ new Map(), Z = (oe) => {
      for (const pe of oe) {
        const _e = J(pe);
        H.set(_e, pe);
        const je = we.get(_e) ?? ae(pe);
        je && Z(je);
      }
    };
    return Z(G), H;
  }, [G, we, J, ae]), ge = B(
    (H) => {
      const Z = J(H);
      if (!H.disabled)
        if (le === "multiple") {
          const pe = new Set(se);
          pe.has(Z) ? pe.delete(Z) : pe.add(Z), et || K(pe);
          const _e = g ?? _;
          if (_e) {
            const ke = re(), je = [];
            for (const P of pe) {
              const R = ke.get(P) ?? fe(P);
              R && je.push(R);
            }
            _e({ item: H, selectedItems: je });
          }
        } else if (!se.has(Z) || se.size !== 1 || !se.has(Z)) {
          et || K(/* @__PURE__ */ new Set([Z]));
          const _e = g ?? _;
          _e && _e({ item: H, selectedItem: H });
        } else {
          const _e = g ?? _;
          _e && _e({ item: H, selectedItem: H });
        }
    },
    [
      J,
      le,
      se,
      et,
      g,
      _,
      re,
      fe
    ]
  ), Se = B(
    async (H) => {
      const Z = J(H);
      if (!!H.disabled) return;
      const pe = $e.has(Z), _e = p ?? x, ke = w ?? m, je = ae(H), R = we.get(Z) ?? je, he = !(R !== void 0 && R.length > 0) && q != null;
      if (pe) {
        Re((Ie) => {
          const Ae = new Set(Ie);
          return Ae.delete(Z), Ae;
        }), ke?.({ item: H });
        return;
      }
      if (he) {
        if (be.has(Z)) return;
        Ze((Ie) => {
          const Ae = new Set(Ie);
          return Ae.add(Z), Ae;
        });
        try {
          const Ae = await q(H);
          Xe((ze) => {
            const at = new Map(ze);
            return at.set(Z, Ae), at;
          }), Re((ze) => {
            const at = new Set(ze);
            return at.add(Z), at;
          }), _e?.({ item: H });
        } catch {
        } finally {
          Ze((Ie) => {
            const Ae = new Set(Ie);
            return Ae.delete(Z), Ae;
          });
        }
        return;
      }
      Re((Ie) => {
        const Ae = new Set(Ie);
        return Ae.add(Z), Ae;
      }), _e?.({ item: H });
    },
    [
      J,
      $e,
      ae,
      we,
      q,
      be,
      p,
      x,
      w,
      m
    ]
  ), Be = xe(() => {
    const H = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Set(), pe = (_e, ke) => {
      for (const je of _e) {
        const P = J(je);
        H.has(P) || H.set(P, []), Z.set(P, ke), je.disabled && oe.add(P);
        const ce = we.get(P) ?? ae(je);
        ce && ce.length > 0 && (H.set(
          P,
          ce.map((he) => J(he))
        ), pe(ce, P));
      }
    };
    return pe(G, null), { childrenOf: H, parentOf: Z, disabledKeys: oe };
  }, [G, we, J, ae]), Je = B(
    (H) => {
      const Z = [], oe = [...Be.childrenOf.get(H) ?? []];
      for (; oe.length > 0; ) {
        const pe = oe.pop();
        Z.push(pe), oe.push(...Be.childrenOf.get(pe) ?? []);
      }
      return Z;
    },
    [Be]
  ), [ut, vt] = X(
    () => new Set(E ?? [])
  ), Q = L !== void 0 ? new Set(L) : ut, Me = B(
    (H) => {
      const Z = Be.disabledKeys;
      return Je(H).filter((oe) => !Z.has(oe));
    },
    [Je, Be]
  ), nt = B(
    (H) => {
      if (Q.has(H)) return !0;
      if (!S || !T) return !1;
      const Z = Me(H);
      return Z.length > 0 && Z.every((oe) => Q.has(oe));
    },
    [Q, S, T, Me]
  ), Gt = B(
    (H) => {
      if (!S || !T || Q.has(H))
        return !1;
      const Z = Me(H);
      if (Z.length === 0) return !1;
      const oe = Z.filter((pe) => Q.has(pe)).length;
      return oe > 0 && oe < Z.length;
    },
    [Q, S, T, Me]
  ), Nt = B(
    (H) => {
      if (!S || H.disabled) return;
      const Z = J(H), oe = new Set(Q);
      if (oe.has(Z) || nt(Z)) {
        if (oe.delete(Z), T)
          for (const pe of Me(Z)) oe.delete(pe);
      } else if (oe.add(Z), T)
        for (const pe of Me(Z)) oe.add(pe);
      L === void 0 && vt(oe), j?.([...oe]);
    },
    [
      S,
      T,
      L,
      Q,
      Me,
      J,
      nt,
      j
    ]
  ), Ce = xe(() => {
    const H = [], Z = (oe, pe, _e) => {
      oe.forEach((ke, je) => {
        const P = J(ke), R = de(ke), ce = we.get(P) ?? ae(ke);
        let he;
        we.has(P) ? he = we.get(P).length > 0 : ce !== void 0 ? he = ce.length > 0 : q ? he = !0 : he = !1;
        const Ie = $e.has(P), Ae = !!ke.disabled, ze = oe.length, at = je + 1;
        if (H.push({
          item: ke,
          key: P,
          text: R,
          level: pe,
          posInSet: at,
          setSize: ze,
          hasChildren: he,
          expanded: Ie,
          parentKey: _e,
          disabled: Ae
        }), he && Ie) {
          const Dt = we.get(P) ?? ce;
          Dt && Dt.length > 0 && Z(Dt, pe + 1, P);
        }
      });
    };
    return Z(G, 1, null), H;
  }, [
    G,
    J,
    de,
    ae,
    we,
    $e,
    q,
    be
  ]), [Ge, kt] = X(
    () => Ce[0]?.key ?? null
  ), Pt = ee(""), sn = ee(null), W = ee(null);
  me(() => {
    if (!Ge && Ce.length > 0) {
      const H = Ce[0];
      H && kt(H.key);
    } else if (Ge && !Ce.some((H) => H.key === Ge)) {
      const H = Ce[0];
      kt(H ? H.key : null);
    }
  }, [Ce, Ge]), me(() => {
    if (Ge) {
      const H = W.current?.querySelector(
        `[data-key="${CSS.escape(Ge)}"]`
      );
      let Z = null;
      H || (Z = W.current?.querySelector(
        `[data-key="${Ge}"]`
      ) ?? null);
      const oe = H ?? Z;
      oe && document.activeElement !== oe && W.current?.contains(document.activeElement) && oe.focus();
    }
  }, [Ge]);
  const ue = B((H) => {
    kt(H), requestAnimationFrame(() => {
      const Z = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(H) : H;
      let oe = W.current?.querySelector(
        `[data-key="${Z}"]`
      );
      oe || (oe = W.current?.querySelector(`[data-key="${H}"]`) ?? null), oe?.focus();
    });
  }, []), Pe = B(
    (H) => Ce.find((oe) => oe.key === H)?.parentKey ?? null,
    [Ce]
  ), He = B(
    (H) => {
      if (Ce.length === 0) return;
      const Z = Ge ? Ce.findIndex((_e) => _e.key === Ge) : -1, oe = Z >= 0 ? Ce[Z] : void 0;
      let pe = null;
      if (H.key === "ArrowDown") {
        if (H.preventDefault(), Z === -1)
          pe = Ce[0]?.key ?? null;
        else {
          const _e = (Z + 1) % Ce.length, ke = Ce[_e];
          ke && (pe = ke.key);
        }
        pe && ue(pe);
        return;
      }
      if (H.key === "ArrowUp") {
        if (H.preventDefault(), Z === -1) {
          const _e = Ce[Ce.length - 1];
          _e && (pe = _e.key);
        } else {
          const _e = (Z - 1 + Ce.length) % Ce.length, ke = Ce[_e];
          ke && (pe = ke.key);
        }
        pe && ue(pe);
        return;
      }
      if (H.key === "ArrowRight") {
        if (H.preventDefault(), !oe) return;
        if (oe.hasChildren && !oe.expanded)
          Se(oe.item);
        else if (oe.hasChildren && oe.expanded) {
          const _e = Z + 1, ke = Ce[_e];
          ke && ke.parentKey === oe.key && ue(ke.key);
        }
        return;
      }
      if (H.key === "ArrowLeft") {
        if (H.preventDefault(), !oe) return;
        if (oe.hasChildren && oe.expanded)
          Se(oe.item);
        else {
          const _e = Pe(oe.key);
          _e && ue(_e);
        }
        return;
      }
      if (H.key === "Home") {
        H.preventDefault();
        const _e = Ce[0];
        _e && ue(_e.key);
        return;
      }
      if (H.key === "End") {
        H.preventDefault();
        const _e = Ce[Ce.length - 1];
        _e && ue(_e.key);
        return;
      }
      if (H.key === "Enter" || H.key === " ") {
        if (H.key === " " && H.target?.tagName === "INPUT" || (H.preventDefault(), !oe)) return;
        if (H.key === " " && S) {
          const _e = fe(oe.key);
          _e && Nt(_e);
          return;
        }
        ge(oe.item);
        return;
      }
      if (H.key.length === 1 && /^[a-zA-Z0-9]$/.test(H.key)) {
        H.preventDefault();
        const _e = (Pt.current + H.key).toLowerCase();
        Pt.current = _e, sn.current && clearTimeout(sn.current), sn.current = setTimeout(() => {
          Pt.current = "";
        }, 500);
        const ke = Z >= 0 ? Z + 1 : 0, R = [...Ce, ...Ce].slice(ke, ke + Ce.length).find((ce) => ce.text.toLowerCase().startsWith(_e));
        R && ue(R.key);
        return;
      }
    },
    [
      Ce,
      Ge,
      ue,
      Se,
      ge,
      Pe,
      S,
      Nt
    ]
  ), Rt = B(() => {
    if (!Ge && Ce.length > 0) {
      const H = Ce[0];
      H && kt(H.key);
    }
  }, [Ge, Ce]), St = (H, Z, oe) => /* @__PURE__ */ s("ul", { role: "group", className: st.group, children: H.map((pe, _e) => {
    const ke = J(pe), je = de(pe), P = we.get(ke) ?? ae(pe);
    let R;
    we.has(ke) ? R = we.get(ke).length > 0 : P !== void 0 ? R = P.length > 0 : q ? R = !0 : R = !1;
    const ce = $e.has(ke), he = se.has(ke), Ie = !!pe.disabled, Ae = be.has(ke), ze = Ge === ke, at = H.length, Dt = _e + 1, gr = ie ? ie(pe) : je, Ns = S ? {
      checked: nt(ke),
      indeterminate: Gt(ke)
    } : null;
    return /* @__PURE__ */ D("li", { role: "none", className: st.itemWrapper, children: [
      /* @__PURE__ */ D(
        "div",
        {
          role: "treeitem",
          "data-key": ke,
          tabIndex: ze ? 0 : -1,
          "aria-expanded": R ? ce : void 0,
          "aria-selected": he,
          "aria-level": Z,
          "aria-setsize": at,
          "aria-posinset": Dt,
          "aria-disabled": Ie || void 0,
          "aria-busy": Ae || void 0,
          className: [
            st.treeitem,
            he ? st.selected : null,
            Ie ? st.disabled : null,
            ze ? st.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            ue(ke), Ie || ge(pe);
          },
          onFocus: () => kt(ke),
          children: [
            S ? /* @__PURE__ */ s(
              Vb,
              {
                className: st.checkbox,
                checked: Ns?.checked ?? !1,
                indeterminate: Ns?.indeterminate ?? !1,
                disabled: Ie,
                "aria-label": `Select ${je}`,
                onClick: (Hn) => Hn.stopPropagation(),
                onChange: () => Nt(pe)
              }
            ) : null,
            R ? /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: st.caret,
                "aria-label": `${ce ? "Collapse" : "Expand"} ${je}`,
                "aria-expanded": ce,
                tabIndex: -1,
                disabled: Ie,
                onClick: (Hn) => {
                  Hn.stopPropagation(), ue(ke), Se(pe);
                },
                children: /* @__PURE__ */ s(
                  "span",
                  {
                    "aria-hidden": "true",
                    className: [
                      st.caretIcon,
                      ce ? st.caretOpen : null
                    ].filter(Boolean).join(" "),
                    children: /* @__PURE__ */ s(Oe, { name: "chevron-right", size: 10 })
                  }
                )
              }
            ) : /* @__PURE__ */ s(
              "span",
              {
                className: st.caretPlaceholder,
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ s("span", { className: st.label, children: gr }),
            Ae ? /* @__PURE__ */ s("span", { className: st.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      R && ce ? Ae ? /* @__PURE__ */ s("div", { className: st.loadingRow, "aria-busy": "true", children: "Loading…" }) : P && P.length > 0 ? St(P, Z + 1) : we.has(ke) && we.get(ke).length > 0 ? St(
        we.get(ke),
        Z + 1
      ) : (P && P.length === 0, null) : null
    ] }, ke);
  }) });
  return /* @__PURE__ */ s(
    "div",
    {
      ref: W,
      role: "tree",
      "aria-label": te,
      "aria-multiselectable": le === "multiple" || void 0,
      tabIndex: 0,
      className: [st.root, F].filter(Boolean).join(" "),
      onKeyDown: He,
      onFocus: Rt,
      children: G.length === 0 ? /* @__PURE__ */ s("div", { className: st.empty, children: "No items" }) : St(G, 1)
    }
  );
}
const Gb = "_root_1plfv_1", Yb = "_panel_1plfv_8", Zb = "_header_1plfv_19", Jb = "_listbox_1plfv_28", Qb = "_option_1plfv_42", e2 = "_disabled_1plfv_57", t2 = "_active_1plfv_66", n2 = "_selected_1plfv_70", s2 = "_empty_1plfv_86", r2 = "_controls_1plfv_93", o2 = "_reorder_1plfv_102", l2 = "_btn_1plfv_110", Te = {
  root: Gb,
  panel: Yb,
  header: Zb,
  listbox: Jb,
  option: Qb,
  disabled: e2,
  active: t2,
  selected: n2,
  empty: s2,
  controls: r2,
  reorder: o2,
  btn: l2
};
function rt(e, t) {
  const n = e[t];
  return n != null ? String(n) : String(e.id ?? "");
}
function Jn(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function qk({
  source: e,
  Source: t,
  target: n,
  Target: r,
  value: i,
  Value: c,
  targetValue: d,
  TargetValue: o,
  data: l,
  Data: a,
  onSourceChange: u,
  SourceChange: f,
  onTargetChange: k,
  TargetChange: v,
  keyProperty: $,
  KeyProperty: y,
  onMove: g,
  Move: _,
  ariaLabel: p,
  AriaLabel: x,
  className: w
}) {
  const m = $ ?? y ?? "id", C = p ?? x ?? "PickList", b = e ?? t ?? i ?? c ?? l ?? a ?? [], N = n ?? r ?? d ?? o ?? [], [A, M] = X(() => [
    ...b
  ]), [I, O] = X(() => [
    ...N
  ]);
  me(() => {
    const z = e ?? t ?? i ?? c ?? l ?? a;
    z !== void 0 && M([...z]);
  }, [e, t, i, c, l, a]), me(() => {
    const z = n ?? r ?? d ?? o;
    z !== void 0 && O([...z]);
  }, [n, r, d, o]);
  const [h, S] = X(
    () => /* @__PURE__ */ new Set()
  ), [L, E] = X(
    () => /* @__PURE__ */ new Set()
  ), [j, T] = X(() => {
    const z = b.findIndex((K) => !K.disabled);
    return z >= 0 ? z : 0;
  }), [F, G] = X(() => {
    const z = N.findIndex((K) => !K.disabled);
    return z >= 0 ? z : 0;
  }), Y = xe(
    () => A.map((z, K) => z.disabled ? -1 : K).filter((z) => z >= 0),
    [A]
  ), U = xe(
    () => I.map((z, K) => z.disabled ? -1 : K).filter((z) => z >= 0),
    [I]
  );
  me(() => {
    if (j >= A.length) {
      const z = Y[Y.length - 1];
      T(z ?? 0);
    } else if (A.length > 0 && Y.length > 0 && !Y.includes(j)) {
      const z = Y[0];
      z !== void 0 && T(z);
    }
  }, [j, A.length, Y]), me(() => {
    if (F >= I.length) {
      const z = U[U.length - 1];
      G(z ?? 0);
    } else if (I.length > 0 && U.length > 0 && !U.includes(F)) {
      const z = U[0];
      z !== void 0 && G(z);
    }
  }, [F, I.length, U]), me(() => {
    S((z) => {
      const K = /* @__PURE__ */ new Set();
      for (const se of z)
        A.some(
          (re) => rt(re, m) === se && !re.disabled
        ) && K.add(se);
      return K;
    });
  }, [A, m]), me(() => {
    E((z) => {
      const K = /* @__PURE__ */ new Set();
      for (const se of z)
        I.some(
          (re) => rt(re, m) === se && !re.disabled
        ) && K.add(se);
      return K;
    });
  }, [I, m]);
  const ne = B(
    (z) => {
      (u ?? f)?.(z);
    },
    [u, f]
  ), le = B(
    (z) => {
      (k ?? v)?.(z);
    },
    [k, v]
  ), te = B(
    (z) => {
      (g ?? _)?.(z);
    },
    [g, _]
  ), q = B(
    (z) => {
      const K = A[z];
      if (!K || K.disabled) return;
      const se = rt(K, m);
      S((fe) => {
        const re = new Set(fe);
        return re.has(se) ? re.delete(se) : re.add(se), re;
      }), T(z);
    },
    [A, m]
  ), ie = B(
    (z) => {
      const K = I[z];
      if (!K || K.disabled) return;
      const se = rt(K, m);
      E((fe) => {
        const re = new Set(fe);
        return re.has(se) ? re.delete(se) : re.add(se), re;
      }), G(z);
    },
    [I, m]
  ), J = B(() => {
    const z = [], K = [];
    for (const ge of A) {
      const Se = rt(ge, m);
      h.has(Se) && !ge.disabled ? z.push(ge) : K.push(ge);
    }
    if (z.length === 0) return;
    const se = K, fe = [...I, ...z];
    M(se), O(fe), S(/* @__PURE__ */ new Set());
    const re = new Set(z.map((ge) => rt(ge, m)));
    E(re), ne(se), le(fe), te({
      source: se,
      target: fe,
      moved: z,
      direction: "toTarget"
    });
  }, [
    A,
    I,
    h,
    m,
    ne,
    le,
    te
  ]), de = B(() => {
    const z = [], K = [];
    for (const ge of I) {
      const Se = rt(ge, m);
      L.has(Se) && !ge.disabled ? z.push(ge) : K.push(ge);
    }
    if (z.length === 0) return;
    const se = K, fe = [...A, ...z];
    O(se), M(fe), E(/* @__PURE__ */ new Set());
    const re = new Set(z.map((ge) => rt(ge, m)));
    S(re), ne(fe), le(se), te({
      source: fe,
      target: se,
      moved: z,
      direction: "toSource"
    });
  }, [
    A,
    I,
    L,
    m,
    ne,
    le,
    te
  ]), ae = B(() => {
    const z = A.filter((fe) => !fe.disabled);
    if (z.length === 0) return;
    const K = A.filter((fe) => !!fe.disabled), se = [...I, ...z];
    M(K), O(se), S(/* @__PURE__ */ new Set()), ne(K), le(se), te({
      source: K,
      target: se,
      moved: z,
      direction: "allToTarget"
    });
  }, [
    A,
    I,
    m,
    ne,
    le,
    te
  ]), ve = B(() => {
    const z = I.filter((fe) => !fe.disabled);
    if (z.length === 0) return;
    const K = I.filter((fe) => !!fe.disabled), se = [...A, ...z];
    O(K), M(se), E(/* @__PURE__ */ new Set()), ne(se), le(K), te({
      source: se,
      target: K,
      moved: z,
      direction: "allToSource"
    });
  }, [A, I, ne, le, te]), $e = B(() => {
    if (L.size === 0) return;
    const z = [...I], K = L, se = [];
    for (let re = 1; re < z.length; re++) {
      const ge = z[re], Se = z[re - 1];
      if (!ge || !Se) continue;
      const Be = rt(ge, m), Je = rt(Se, m);
      K.has(Be) && !K.has(Je) && !ge.disabled && !Se.disabled && (z[re - 1] = ge, z[re] = Se, se.push(ge));
    }
    if (se.length === 0) return;
    O(z), le(z), te({ source: A, target: z, moved: se, direction: "up" });
    const fe = Array.from(K)[0];
    if (fe) {
      const re = z.findIndex(
        (ge) => rt(ge, m) === fe
      );
      re >= 0 && G(re);
    }
  }, [
    I,
    L,
    m,
    A,
    le,
    te
  ]), Re = B(() => {
    if (L.size === 0) return;
    const z = [...I], K = L, se = [];
    for (let re = z.length - 2; re >= 0; re--) {
      const ge = z[re], Se = z[re + 1];
      if (!ge || !Se) continue;
      const Be = rt(ge, m), Je = rt(Se, m);
      K.has(Be) && !K.has(Je) && !ge.disabled && !Se.disabled && (z[re] = Se, z[re + 1] = ge, se.push(ge));
    }
    if (se.length === 0) return;
    O(z), le(z), te({ source: A, target: z, moved: se, direction: "down" });
    const fe = Array.from(K)[0];
    if (fe) {
      const re = z.findIndex(
        (ge) => rt(ge, m) === fe
      );
      re >= 0 && G(re);
    }
  }, [
    I,
    L,
    m,
    A,
    le,
    te
  ]), we = h.size > 0, Xe = L.size > 0, be = ee(""), Ze = ee(
    null
  ), Ve = ee(""), Le = ee(
    null
  ), tt = B(
    (z) => {
      if (A.length === 0) return;
      const K = Y;
      if (K.length === 0) return;
      const se = K.includes(j) ? j : K[0] ?? 0;
      let fe = -1;
      if (z.key === "ArrowDown") {
        z.preventDefault();
        const re = K.indexOf(se);
        fe = K[(re + 1) % K.length] ?? K[0] ?? 0;
      } else if (z.key === "ArrowUp") {
        z.preventDefault();
        const re = K.indexOf(se);
        fe = K[(re - 1 + K.length) % K.length] ?? K[0] ?? 0;
      } else if (z.key === "Home")
        z.preventDefault(), fe = K[0] ?? 0;
      else if (z.key === "End")
        z.preventDefault(), fe = K[K.length - 1] ?? 0;
      else if (z.key === "Enter" || z.key === " ") {
        z.preventDefault(), q(se);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(z.key)) {
        z.preventDefault();
        const re = (be.current + z.key).toLowerCase();
        be.current = re, Ze.current && clearTimeout(Ze.current), Ze.current = setTimeout(() => {
          be.current = "";
        }, 500);
        const ge = [...K, ...K], Se = K.indexOf(se) + 1, Be = ge.slice(Se).find(
          (Je) => Jn(A[Je]).toLowerCase().startsWith(re)
        );
        Be != null && T(Be);
        return;
      }
      fe >= 0 && T(fe);
    },
    [A, Y, j, q]
  ), Qe = B(
    (z) => {
      if (I.length === 0) return;
      const K = U;
      if (K.length === 0) return;
      const se = K.includes(F) ? F : K[0] ?? 0;
      let fe = -1;
      if (z.key === "ArrowDown") {
        z.preventDefault();
        const re = K.indexOf(se);
        fe = K[(re + 1) % K.length] ?? K[0] ?? 0;
      } else if (z.key === "ArrowUp") {
        z.preventDefault();
        const re = K.indexOf(se);
        fe = K[(re - 1 + K.length) % K.length] ?? K[0] ?? 0;
      } else if (z.key === "Home")
        z.preventDefault(), fe = K[0] ?? 0;
      else if (z.key === "End")
        z.preventDefault(), fe = K[K.length - 1] ?? 0;
      else if (z.key === "Enter" || z.key === " ") {
        z.preventDefault(), ie(se);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(z.key)) {
        z.preventDefault();
        const re = (Ve.current + z.key).toLowerCase();
        Ve.current = re, Le.current && clearTimeout(Le.current), Le.current = setTimeout(() => {
          Ve.current = "";
        }, 500);
        const ge = [...K, ...K], Se = K.indexOf(se) + 1, Be = ge.slice(Se).find(
          (Je) => Jn(I[Je]).toLowerCase().startsWith(re)
        );
        Be != null && G(Be);
        return;
      }
      fe >= 0 && G(fe);
    },
    [I, U, F, ie]
  ), et = ee(null), V = ee(null);
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Te.root, w].filter(Boolean).join(" "),
      "aria-label": C,
      children: [
        /* @__PURE__ */ D("div", { className: Te.panel, children: [
          /* @__PURE__ */ s("div", { className: Te.header, children: "Source" }),
          /* @__PURE__ */ s(
            "div",
            {
              ref: et,
              role: "listbox",
              "aria-label": "Source",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: Te.listbox,
              onKeyDown: tt,
              children: A.length === 0 ? /* @__PURE__ */ s("div", { className: Te.empty, children: "No items" }) : A.map((z, K) => {
                const se = rt(z, m), fe = h.has(se), re = K === j, ge = !!z.disabled;
                return /* @__PURE__ */ s(
                  "div",
                  {
                    role: "option",
                    "aria-selected": fe,
                    "aria-disabled": ge || void 0,
                    tabIndex: -1,
                    "data-active": re || void 0,
                    className: [
                      Te.option,
                      fe ? Te.selected : null,
                      re ? Te.active : null,
                      ge ? Te.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => q(K),
                    children: Jn(z)
                  },
                  se
                );
              })
            }
          )
        ] }),
        /* @__PURE__ */ D("div", { className: Te.controls, children: [
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: Te.btn,
              "aria-label": "Move selected to target",
              "aria-disabled": !we || void 0,
              disabled: !we,
              onClick: J,
              children: "›"
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: Te.btn,
              "aria-label": "Move all to target",
              "aria-disabled": A.filter((z) => !z.disabled).length === 0 || void 0,
              disabled: A.filter((z) => !z.disabled).length === 0,
              onClick: ae,
              children: "»"
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: Te.btn,
              "aria-label": "Move all",
              "aria-disabled": A.filter((z) => !z.disabled).length === 0 || void 0,
              disabled: A.filter((z) => !z.disabled).length === 0,
              onClick: ae,
              children: "»"
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: Te.btn,
              "aria-label": "Move selected to source",
              "aria-disabled": !Xe || void 0,
              disabled: !Xe,
              onClick: de,
              children: "‹"
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: Te.btn,
              "aria-label": "Move all to source",
              "aria-disabled": I.filter((z) => !z.disabled).length === 0 || void 0,
              disabled: I.filter((z) => !z.disabled).length === 0,
              onClick: ve,
              children: "«"
            }
          )
        ] }),
        /* @__PURE__ */ D("div", { className: Te.panel, children: [
          /* @__PURE__ */ s("div", { className: Te.header, children: "Target" }),
          /* @__PURE__ */ s(
            "div",
            {
              ref: V,
              role: "listbox",
              "aria-label": "Target",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: Te.listbox,
              onKeyDown: Qe,
              children: I.length === 0 ? /* @__PURE__ */ s("div", { className: Te.empty, children: "No items" }) : I.map((z, K) => {
                const se = rt(z, m), fe = L.has(se), re = K === F, ge = !!z.disabled;
                return /* @__PURE__ */ s(
                  "div",
                  {
                    role: "option",
                    "aria-selected": fe,
                    "aria-disabled": ge || void 0,
                    tabIndex: -1,
                    "data-active": re || void 0,
                    className: [
                      Te.option,
                      fe ? Te.selected : null,
                      re ? Te.active : null,
                      ge ? Te.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => ie(K),
                    children: Jn(z)
                  },
                  se
                );
              })
            }
          ),
          /* @__PURE__ */ D("div", { className: Te.reorder, children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: Te.btn,
                "aria-label": "Move up",
                "aria-disabled": !Xe || void 0,
                disabled: !Xe,
                onClick: $e,
                children: /* @__PURE__ */ s(Oe, { name: "chevron-up", size: "sm" })
              }
            ),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: Te.btn,
                "aria-label": "Move down",
                "aria-disabled": !Xe || void 0,
                disabled: !Xe,
                onClick: Re,
                children: /* @__PURE__ */ s(Oe, { name: "chevron-down", size: "sm" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const a2 = "_root_16u8q_1", i2 = "_header_16u8q_8", c2 = "_title_16u8q_15", d2 = "_navBtn_16u8q_20", u2 = "_resources_16u8q_39", f2 = "_resource_16u8q_39", _2 = "_grid_16u8q_50", p2 = "_timeCol_16u8q_55", h2 = "_timeCell_16u8q_61", m2 = "_dayCol_16u8q_66", g2 = "_dayHeader_16u8q_73", x2 = "_slot_16u8q_81", y2 = "_event_16u8q_91", pt = {
  root: a2,
  header: i2,
  title: c2,
  navBtn: d2,
  resources: u2,
  resource: f2,
  grid: _2,
  timeCol: p2,
  timeCell: h2,
  dayCol: m2,
  dayHeader: g2,
  slot: x2,
  event: y2
};
function Qs(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function Fk({
  data: e,
  view: t = "week",
  date: n,
  onDateChange: r,
  resources: i,
  onEventClick: c,
  onSlotClick: d,
  ariaLabel: o = "Scheduler",
  className: l
}) {
  const [a, u] = X(
    n ?? /* @__PURE__ */ new Date()
  ), f = n ?? a, k = (y) => {
    n || u(y), r?.(y);
  }, v = t === "day" ? [f] : t === "week" ? Array.from({ length: 7 }, (y, g) => {
    const _ = new Date(f);
    return _.setDate(f.getDate() - f.getDay() + g), _;
  }) : Array.from({ length: 30 }, (y, g) => {
    const _ = new Date(f);
    return _.setDate(1 + g), _;
  }), $ = Array.from({ length: 12 }, (y, g) => 8 + g);
  return /* @__PURE__ */ D(
    "div",
    {
      className: [pt.root, l].filter(Boolean).join(" "),
      role: "group",
      "aria-label": o,
      children: [
        /* @__PURE__ */ D("div", { className: pt.header, children: [
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: pt.navBtn,
              "aria-label": "Previous",
              onClick: () => {
                const y = new Date(f);
                y.setDate(y.getDate() - 7), k(y);
              },
              children: "‹"
            }
          ),
          /* @__PURE__ */ s("span", { className: pt.title, children: f.toLocaleDateString() }),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: pt.navBtn,
              "aria-label": "Next",
              onClick: () => {
                const y = new Date(f);
                y.setDate(y.getDate() + 7), k(y);
              },
              children: "›"
            }
          )
        ] }),
        i && /* @__PURE__ */ s("div", { className: pt.resources, children: i.map((y) => /* @__PURE__ */ s(
          "div",
          {
            className: pt.resource,
            role: "presentation",
            "aria-label": y.name,
            children: y.name
          },
          y.id
        )) }),
        /* @__PURE__ */ D("div", { className: pt.grid, role: "presentation", children: [
          /* @__PURE__ */ s("div", { className: pt.timeCol, role: "presentation", children: $.map((y) => /* @__PURE__ */ D("div", { className: pt.timeCell, children: [
            y,
            ":00"
          ] }, y)) }),
          v.map((y) => /* @__PURE__ */ D(
            "div",
            {
              className: pt.dayCol,
              role: "presentation",
              title: y.toLocaleDateString(),
              onClick: () => d?.({ date: y }),
              tabIndex: 0,
              "aria-label": y.toLocaleDateString(),
              children: [
                /* @__PURE__ */ s("div", { className: pt.dayHeader, children: y.toLocaleDateString(void 0, {
                  weekday: "short",
                  month: "short",
                  day: "numeric"
                }) }),
                $.map((g) => /* @__PURE__ */ s(
                  "div",
                  {
                    className: pt.slot,
                    tabIndex: -1,
                    onClick: () => {
                      const _ = new Date(y);
                      _.setHours(g), d?.({ date: _ });
                    }
                  },
                  g
                )),
                e.filter((g) => g.start.toDateString() === y.toDateString()).map((g) => /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    className: pt.event,
                    "aria-label": `${g.title} ${Qs(g.start)} - ${Qs(g.end)}`,
                    "aria-pressed": !1,
                    onClick: () => c?.({ event: g }),
                    children: g.title
                  },
                  g.id
                ))
              ]
            },
            y.toISOString()
          ))
        ] })
      ]
    }
  );
}
const b2 = "_root_caexi_1", v2 = "_header_caexi_8", k2 = "_headerCell_caexi_15", w2 = "_timeline_caexi_21", $2 = "_row_caexi_26", O2 = "_taskName_caexi_32", N2 = "_timelineCell_caexi_37", S2 = "_bar_caexi_43", D2 = "_progress_caexi_56", M2 = "_dep_caexi_61", Lt = {
  root: b2,
  header: v2,
  headerCell: k2,
  timeline: w2,
  row: $2,
  taskName: O2,
  timelineCell: N2,
  bar: S2,
  progress: D2,
  dep: M2
};
function Hk({
  tasks: e,
  view: t = "week",
  onTaskClick: n,
  ariaLabel: r = "Gantt",
  className: i
}) {
  const [c, d] = X(null);
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Lt.root, i].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": r,
      "aria-rowcount": e.length,
      children: [
        /* @__PURE__ */ D("div", { className: Lt.header, role: "row", children: [
          /* @__PURE__ */ s("div", { className: Lt.headerCell, role: "columnheader", children: "Task" }),
          /* @__PURE__ */ D("div", { className: Lt.timeline, role: "columnheader", children: [
            "Timeline (",
            t,
            ")"
          ] })
        ] }),
        e.map((o) => /* @__PURE__ */ D(
          "div",
          {
            className: Lt.row,
            role: "row",
            "aria-selected": c === o.id,
            children: [
              /* @__PURE__ */ s("div", { className: Lt.taskName, role: "gridcell", children: o.name }),
              /* @__PURE__ */ D("div", { className: Lt.timelineCell, role: "gridcell", children: [
                /* @__PURE__ */ s(
                  "div",
                  {
                    className: Lt.bar,
                    role: "button",
                    "aria-label": `${o.name} ${o.start.toLocaleDateString()} - ${o.end.toLocaleDateString()}${o.progress !== void 0 ? `, ${o.progress}% complete` : ""}`,
                    "aria-pressed": c === o.id,
                    tabIndex: 0,
                    onClick: () => {
                      d(o.id), n?.({ task: o });
                    },
                    onKeyDown: (l) => {
                      (l.key === "Enter" || l.key === " ") && (l.preventDefault(), d(o.id), n?.({ task: o }));
                    },
                    children: /* @__PURE__ */ s(
                      "div",
                      {
                        className: Lt.progress,
                        style: { width: `${o.progress ?? 0}%` }
                      }
                    )
                  }
                ),
                o.dependencies?.map((l) => /* @__PURE__ */ s("svg", { className: Lt.dep, "aria-hidden": "true", children: /* @__PURE__ */ s(
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
          o.id
        ))
      ]
    }
  );
}
const C2 = "_root_reqz6_1", z2 = "_fields_reqz6_6", E2 = "_chip_reqz6_13", I2 = "_table_reqz6_35", A2 = "_totalRow_reqz6_55", j2 = "_total_reqz6_55", vn = {
  root: C2,
  fields: z2,
  chip: E2,
  table: I2,
  totalRow: A2,
  total: j2
}, Qn = {
  Sum: (e) => e.reduce((t, n) => t + n, 0),
  Average: (e) => e.length ? e.reduce((t, n) => t + n, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function Pn(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function Kk({
  data: e,
  rowFields: t = [],
  columnFields: n = [],
  aggregateFields: r = [],
  onFieldsChange: i,
  ariaLabel: c = "Pivot table",
  className: d
}) {
  const o = t, l = n, a = r, u = (g, _, p) => {
    const x = g === "row" ? o.filter((C) => C.property !== _) : o, w = g === "col" ? l.filter((C) => C.property !== _) : l, m = g === "agg" ? a.filter((C) => !(C.property === _ && C.aggregate === p)) : a;
    i?.({
      rowFields: x,
      columnFields: w,
      aggregateFields: m
    });
  }, f = (g, _) => _.map((p) => String(g[p.property])).join(""), k = [
    ...new Set(o.length ? e.map((g) => f(g, o)) : [""])
  ].sort(), v = [
    ...new Set(l.length ? e.map((g) => f(g, l)) : [""])
  ].sort(), $ = (g, _, p) => {
    const x = e.filter(
      (m) => f(m, o) === g && f(m, l) === _
    ), w = x.map((m) => Number(m[p.property])).filter((m) => !Number.isNaN(m));
    return !w.length && p.aggregate !== "Count" ? 0 : Qn[p.aggregate](
      p.aggregate === "Count" ? x.map(() => 1) : w
    );
  }, y = (g, _, p, x) => /* @__PURE__ */ D(
    "button",
    {
      type: "button",
      className: vn.chip,
      "aria-label": `Remove ${g} field ${p}`,
      onClick: () => u(g, _, x),
      children: [
        p,
        x ? ` (${x})` : ""
      ]
    },
    `${g}-${p}-${x ?? ""}`
  );
  return /* @__PURE__ */ D("div", { className: [vn.root, d].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ D("div", { className: vn.fields, children: [
      o.map((g) => y("row", g.property, g.title ?? g.property)),
      l.map((g) => y("col", g.property, g.title ?? g.property)),
      a.map(
        (g) => y("agg", g.property, g.title ?? g.property, g.aggregate)
      )
    ] }),
    /* @__PURE__ */ D("table", { className: vn.table, role: "grid", "aria-label": c, children: [
      /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ D("tr", { children: [
        /* @__PURE__ */ s("th", { scope: "col", children: o.map((g) => g.title ?? g.property).join(" / ") || "Total" }),
        v.map((g) => /* @__PURE__ */ s("th", { scope: "col", children: g || "—" }, g)),
        /* @__PURE__ */ s("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ D("tbody", { children: [
        k.map((g) => /* @__PURE__ */ D("tr", { children: [
          /* @__PURE__ */ s("th", { scope: "row", children: g || "—" }),
          v.map((_) => /* @__PURE__ */ s(
            "td",
            {
              title: Pn(
                $(
                  g,
                  _,
                  a[0] ?? { property: "", aggregate: "Count" }
                )
              ),
              children: a.length ? Pn($(g, _, a[0])) : ""
            },
            _
          )),
          /* @__PURE__ */ s("td", { className: vn.total, children: a.length ? Pn(
            Qn[a[0].aggregate](
              v.flatMap(
                (_) => e.filter(
                  (p) => f(p, o) === g && f(p, l) === _
                ).map((p) => Number(p[a[0].property]))
              ).filter((_) => !Number.isNaN(_))
            )
          ) : "" })
        ] }, g)),
        /* @__PURE__ */ D("tr", { className: vn.totalRow, children: [
          /* @__PURE__ */ s("th", { scope: "row", children: "Total" }),
          v.map((g) => /* @__PURE__ */ s("td", { children: a.length ? Pn(
            Qn[a[0].aggregate](
              e.filter((_) => f(_, l) === g).map((_) => Number(_[a[0].property])).filter((_) => !Number.isNaN(_))
            )
          ) : "" }, g)),
          /* @__PURE__ */ s("td", { children: a.length ? Pn(
            Qn[a[0].aggregate](
              e.map((g) => Number(g[a[0].property])).filter((g) => !Number.isNaN(g))
            )
          ) : "" })
        ] })
      ] })
    ] })
  ] });
}
const T2 = "_root_48ysw_1", L2 = "_reverse_48ysw_10", P2 = "_item_48ysw_14", R2 = "_marker_48ysw_35", B2 = "_body_48ysw_46", q2 = "_label_48ysw_50", F2 = "_content_48ysw_56", un = {
  root: T2,
  reverse: L2,
  item: P2,
  marker: R2,
  body: B2,
  label: q2,
  content: F2
};
function Uk({
  items: e,
  reverse: t = !1,
  ariaLabel: n = "Timeline",
  className: r
}) {
  const i = t ? [...e].reverse() : e;
  return /* @__PURE__ */ s(
    "ol",
    {
      className: [un.root, t ? un.reverse : "", r].filter(Boolean).join(" "),
      role: "list",
      "aria-label": n,
      children: i.map((c, d) => /* @__PURE__ */ D("li", { className: un.item, children: [
        /* @__PURE__ */ s("span", { className: un.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ D("div", { className: un.body, children: [
          /* @__PURE__ */ s("div", { className: un.label, children: c.label }),
          c.content !== void 0 && /* @__PURE__ */ s("div", { className: un.content, children: c.content })
        ] })
      ] }, d))
    }
  );
}
const H2 = "_root_4ls7q_1", K2 = "_header_4ls7q_13", U2 = "_headCell_4ls7q_22", W2 = "_row_4ls7q_32", X2 = "_cell_4ls7q_37", Rn = {
  root: H2,
  header: K2,
  headCell: U2,
  row: W2,
  cell: X2
};
function Wk({
  count: e,
  rowHeight: t = 40,
  height: n = 320,
  loadData: r,
  columns: i = [],
  ariaLabel: c = "Virtual grid",
  className: d
}) {
  const [o, l] = X(
    /* @__PURE__ */ new Map()
  ), [a, u] = X(0), f = ee(/* @__PURE__ */ new Set()), k = Math.ceil(n / t), v = Math.max(0, Math.floor(a / t) - 3), $ = Math.min(e, v + k + 6), y = B(
    (_, p) => {
      let x = !1;
      for (let w = _; w < p; w++)
        !o.has(w) && !f.current.has(w) && (x = !0);
      if (x) {
        for (let w = _; w < p; w++) f.current.add(w);
        r({ skip: _, top: p }).then((w) => {
          l((m) => {
            const C = new Map(m);
            return w.forEach((b, N) => C.set(_ + N, b)), C;
          });
          for (let m = _; m < p; m++) f.current.delete(m);
        });
      }
    },
    [o, r]
  );
  me(() => {
    y(v, $);
  }, [v, $]);
  const g = [];
  for (let _ = v; _ < $; _++) {
    const p = o.get(_) ?? {};
    g.push(
      /* @__PURE__ */ s(
        "div",
        {
          className: Rn.row,
          role: "row",
          style: { height: t },
          children: i.map((x) => /* @__PURE__ */ s(
            "div",
            {
              role: "gridcell",
              className: Rn.cell,
              style: x.width ? { width: x.width } : void 0,
              children: String(p[x.property] ?? "")
            },
            x.property
          ))
        },
        _
      )
    );
  }
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Rn.root, d].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": c,
      "aria-rowcount": e,
      tabIndex: 0,
      style: { height: n },
      onScroll: (_) => u(_.target.scrollTop),
      onKeyDown: (_) => {
        const p = _.currentTarget;
        _.key === "ArrowDown" ? (_.preventDefault(), p.scrollTop += t) : _.key === "ArrowUp" ? (_.preventDefault(), p.scrollTop -= t) : _.key === "PageDown" ? (_.preventDefault(), p.scrollTop += n) : _.key === "PageUp" && (_.preventDefault(), p.scrollTop -= n);
      },
      children: [
        /* @__PURE__ */ s("div", { style: { height: v * t }, "aria-hidden": "true" }),
        /* @__PURE__ */ s("div", { className: Rn.header, role: "row", children: i.map((_) => /* @__PURE__ */ s(
          "div",
          {
            role: "columnheader",
            className: Rn.headCell,
            style: {
              height: t,
              ..._.width ? { width: _.width } : {}
            },
            children: _.title ?? _.property
          },
          _.property
        )) }),
        g,
        /* @__PURE__ */ s(
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
var zt;
((e) => {
  class t {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(o, l, a, u) {
      if (this.version = o, this.errorCorrectionLevel = l, o < t.MIN_VERSION || o > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (u < -1 || u > 7) throw new RangeError("Mask value out of range");
      this.size = o * 4 + 17;
      let f = [];
      for (let v = 0; v < this.size; v++) f.push(!1);
      for (let v = 0; v < this.size; v++)
        this.modules.push(f.slice()), this.isFunction.push(f.slice());
      this.drawFunctionPatterns();
      const k = this.addEccAndInterleave(a);
      if (this.drawCodewords(k), u == -1) {
        let v = 1e9;
        for (let $ = 0; $ < 8; $++) {
          this.applyMask($), this.drawFormatBits($);
          const y = this.getPenaltyScore();
          y < v && (u = $, v = y), this.applyMask($);
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
    static encodeText(o, l) {
      const a = e.QrSegment.makeSegments(o);
      return t.encodeSegments(a, l);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(o, l) {
      const a = e.QrSegment.makeBytes(o);
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
    static encodeSegments(o, l, a = 1, u = 40, f = -1, k = !0) {
      if (!(t.MIN_VERSION <= a && a <= u && u <= t.MAX_VERSION) || f < -1 || f > 7)
        throw new RangeError("Invalid value");
      let v, $;
      for (v = a; ; v++) {
        const p = t.getNumDataCodewords(v, l) * 8, x = c.getTotalBits(o, v);
        if (x <= p) {
          $ = x;
          break;
        }
        if (v >= u)
          throw new RangeError("Data too long");
      }
      for (const p of [
        t.Ecc.MEDIUM,
        t.Ecc.QUARTILE,
        t.Ecc.HIGH
      ])
        k && $ <= t.getNumDataCodewords(v, p) * 8 && (l = p);
      let y = [];
      for (const p of o) {
        n(p.mode.modeBits, 4, y), n(p.numChars, p.mode.numCharCountBits(v), y);
        for (const x of p.getData()) y.push(x);
      }
      i(y.length == $);
      const g = t.getNumDataCodewords(v, l) * 8;
      i(y.length <= g), n(0, Math.min(4, g - y.length), y), n(0, (8 - y.length % 8) % 8, y), i(y.length % 8 == 0);
      for (let p = 236; y.length < g; p ^= 253)
        n(p, 8, y);
      let _ = [];
      for (; _.length * 8 < y.length; ) _.push(0);
      return y.forEach(
        (p, x) => _[x >>> 3] |= p << 7 - (x & 7)
      ), new t(v, l, _, f);
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
    getModule(o, l) {
      return 0 <= o && o < this.size && 0 <= l && l < this.size && this.modules[l][o];
    }
    /*-- Private helper methods for constructor: Drawing function modules --*/
    // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
      for (let a = 0; a < this.size; a++)
        this.setFunctionModule(6, a, a % 2 == 0), this.setFunctionModule(a, 6, a % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const o = this.getAlignmentPatternPositions(), l = o.length;
      for (let a = 0; a < l; a++)
        for (let u = 0; u < l; u++)
          a == 0 && u == 0 || a == 0 && u == l - 1 || a == l - 1 && u == 0 || this.drawAlignmentPattern(o[a], o[u]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(o) {
      const l = this.errorCorrectionLevel.formatBits << 3 | o;
      let a = l;
      for (let f = 0; f < 10; f++) a = a << 1 ^ (a >>> 9) * 1335;
      const u = (l << 10 | a) ^ 21522;
      i(u >>> 15 == 0);
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
      for (let a = 0; a < 12; a++) o = o << 1 ^ (o >>> 11) * 7973;
      const l = this.version << 12 | o;
      i(l >>> 18 == 0);
      for (let a = 0; a < 18; a++) {
        const u = r(l, a), f = this.size - 11 + a % 3, k = Math.floor(a / 3);
        this.setFunctionModule(f, k, u), this.setFunctionModule(k, f, u);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(o, l) {
      for (let a = -4; a <= 4; a++)
        for (let u = -4; u <= 4; u++) {
          const f = Math.max(Math.abs(u), Math.abs(a)), k = o + u, v = l + a;
          0 <= k && k < this.size && 0 <= v && v < this.size && this.setFunctionModule(k, v, f != 2 && f != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(o, l) {
      for (let a = -2; a <= 2; a++)
        for (let u = -2; u <= 2; u++)
          this.setFunctionModule(
            o + u,
            l + a,
            Math.max(Math.abs(u), Math.abs(a)) != 1
          );
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(o, l, a) {
      this.modules[l][o] = a, this.isFunction[l][o] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(o) {
      const l = this.version, a = this.errorCorrectionLevel;
      if (o.length != t.getNumDataCodewords(l, a))
        throw new RangeError("Invalid argument");
      const u = t.NUM_ERROR_CORRECTION_BLOCKS[a.ordinal][l], f = t.ECC_CODEWORDS_PER_BLOCK[a.ordinal][l], k = Math.floor(
        t.getNumRawDataModules(l) / 8
      ), v = u - k % u, $ = Math.floor(k / u);
      let y = [];
      const g = t.reedSolomonComputeDivisor(f);
      for (let p = 0, x = 0; p < u; p++) {
        let w = o.slice(
          x,
          x + $ - f + (p < v ? 0 : 1)
        );
        x += w.length;
        const m = t.reedSolomonComputeRemainder(w, g);
        p < v && w.push(0), y.push(w.concat(m));
      }
      let _ = [];
      for (let p = 0; p < y[0].length; p++)
        y.forEach((x, w) => {
          (p != $ - f || w >= v) && _.push(x[p]);
        });
      return i(_.length == k), _;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(o) {
      if (o.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let l = 0;
      for (let a = this.size - 1; a >= 1; a -= 2) {
        a == 6 && (a = 5);
        for (let u = 0; u < this.size; u++)
          for (let f = 0; f < 2; f++) {
            const k = a - f, $ = (a + 1 & 2) == 0 ? this.size - 1 - u : u;
            !this.isFunction[$][k] && l < o.length * 8 && (this.modules[$][k] = r(o[l >>> 3], 7 - (l & 7)), l++);
          }
      }
      i(l == o.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(o) {
      if (o < 0 || o > 7) throw new RangeError("Mask value out of range");
      for (let l = 0; l < this.size; l++)
        for (let a = 0; a < this.size; a++) {
          let u;
          switch (o) {
            case 0:
              u = (a + l) % 2 == 0;
              break;
            case 1:
              u = l % 2 == 0;
              break;
            case 2:
              u = a % 3 == 0;
              break;
            case 3:
              u = (a + l) % 3 == 0;
              break;
            case 4:
              u = (Math.floor(a / 3) + Math.floor(l / 2)) % 2 == 0;
              break;
            case 5:
              u = a * l % 2 + a * l % 3 == 0;
              break;
            case 6:
              u = (a * l % 2 + a * l % 3) % 2 == 0;
              break;
            case 7:
              u = ((a + l) % 2 + a * l % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[l][a] && u && (this.modules[l][a] = !this.modules[l][a]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let o = 0;
      for (let f = 0; f < this.size; f++) {
        let k = !1, v = 0, $ = [0, 0, 0, 0, 0, 0, 0];
        for (let y = 0; y < this.size; y++)
          this.modules[f][y] == k ? (v++, v == 5 ? o += t.PENALTY_N1 : v > 5 && o++) : (this.finderPenaltyAddHistory(v, $), k || (o += this.finderPenaltyCountPatterns($) * t.PENALTY_N3), k = this.modules[f][y], v = 1);
        o += this.finderPenaltyTerminateAndCount(k, v, $) * t.PENALTY_N3;
      }
      for (let f = 0; f < this.size; f++) {
        let k = !1, v = 0, $ = [0, 0, 0, 0, 0, 0, 0];
        for (let y = 0; y < this.size; y++)
          this.modules[y][f] == k ? (v++, v == 5 ? o += t.PENALTY_N1 : v > 5 && o++) : (this.finderPenaltyAddHistory(v, $), k || (o += this.finderPenaltyCountPatterns($) * t.PENALTY_N3), k = this.modules[y][f], v = 1);
        o += this.finderPenaltyTerminateAndCount(k, v, $) * t.PENALTY_N3;
      }
      for (let f = 0; f < this.size - 1; f++)
        for (let k = 0; k < this.size - 1; k++) {
          const v = this.modules[f][k];
          v == this.modules[f][k + 1] && v == this.modules[f + 1][k] && v == this.modules[f + 1][k + 1] && (o += t.PENALTY_N2);
        }
      let l = 0;
      for (const f of this.modules)
        l = f.reduce((k, v) => k + (v ? 1 : 0), l);
      const a = this.size * this.size, u = Math.ceil(Math.abs(l * 20 - a * 10) / a) - 1;
      return i(0 <= u && u <= 9), o += u * t.PENALTY_N4, i(0 <= o && o <= 2568888), o;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1) return [];
      {
        const o = Math.floor(this.version / 7) + 2, l = Math.floor(
          (this.version * 8 + o * 3 + 5) / (o * 4 - 4)
        ) * 2;
        let a = [6];
        for (let u = this.size - 7; a.length < o; u -= l)
          a.splice(1, 0, u);
        return a;
      }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(o) {
      if (o < t.MIN_VERSION || o > t.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let l = (16 * o + 128) * o + 64;
      if (o >= 2) {
        const a = Math.floor(o / 7) + 2;
        l -= (25 * a - 10) * a - 55, o >= 7 && (l -= 36);
      }
      return i(208 <= l && l <= 29648), l;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(o, l) {
      return Math.floor(t.getNumRawDataModules(o) / 8) - t.ECC_CODEWORDS_PER_BLOCK[l.ordinal][o] * t.NUM_ERROR_CORRECTION_BLOCKS[l.ordinal][o];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(o) {
      if (o < 1 || o > 255)
        throw new RangeError("Degree out of range");
      let l = [];
      for (let u = 0; u < o - 1; u++) l.push(0);
      l.push(1);
      let a = 1;
      for (let u = 0; u < o; u++) {
        for (let f = 0; f < l.length; f++)
          l[f] = t.reedSolomonMultiply(l[f], a), f + 1 < l.length && (l[f] ^= l[f + 1]);
        a = t.reedSolomonMultiply(a, 2);
      }
      return l;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(o, l) {
      let a = l.map((u) => 0);
      for (const u of o) {
        const f = u ^ a.shift();
        a.push(0), l.forEach(
          (k, v) => a[v] ^= t.reedSolomonMultiply(k, f)
        );
      }
      return a;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(o, l) {
      if (o >>> 8 || l >>> 8)
        throw new RangeError("Byte out of range");
      let a = 0;
      for (let u = 7; u >= 0; u--)
        a = a << 1 ^ (a >>> 7) * 285, a ^= (l >>> u & 1) * o;
      return i(a >>> 8 == 0), a;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(o) {
      const l = o[1];
      i(l <= this.size * 3);
      const a = l > 0 && o[2] == l && o[3] == l * 3 && o[4] == l && o[5] == l;
      return (a && o[0] >= l * 4 && o[6] >= l ? 1 : 0) + (a && o[6] >= l * 4 && o[0] >= l ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(o, l, a) {
      return o && (this.finderPenaltyAddHistory(l, a), l = 0), l += this.size, this.finderPenaltyAddHistory(l, a), this.finderPenaltyCountPatterns(a);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(o, l) {
      l[0] == 0 && (o += this.size), l.pop(), l.unshift(o);
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
  function n(d, o, l) {
    if (o < 0 || o > 31 || d >>> o)
      throw new RangeError("Value out of range");
    for (let a = o - 1; a >= 0; a--)
      l.push(d >>> a & 1);
  }
  function r(d, o) {
    return (d >>> o & 1) != 0;
  }
  function i(d) {
    if (!d) throw new Error("Assertion error");
  }
  class c {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(o, l, a) {
      if (this.mode = o, this.numChars = l, this.bitData = a, l < 0) throw new RangeError("Invalid argument");
      this.bitData = a.slice();
    }
    mode;
    numChars;
    bitData;
    /*-- Static factory functions (mid level) --*/
    // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(o) {
      let l = [];
      for (const a of o) n(a, 8, l);
      return new c(c.Mode.BYTE, o.length, l);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(o) {
      if (!c.isNumeric(o))
        throw new RangeError("String contains non-numeric characters");
      let l = [];
      for (let a = 0; a < o.length; ) {
        const u = Math.min(o.length - a, 3);
        n(parseInt(o.substring(a, a + u), 10), u * 3 + 1, l), a += u;
      }
      return new c(c.Mode.NUMERIC, o.length, l);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(o) {
      if (!c.isAlphanumeric(o))
        throw new RangeError(
          "String contains unencodable characters in alphanumeric mode"
        );
      let l = [], a;
      for (a = 0; a + 2 <= o.length; a += 2) {
        let u = c.ALPHANUMERIC_CHARSET.indexOf(o.charAt(a)) * 45;
        u += c.ALPHANUMERIC_CHARSET.indexOf(o.charAt(a + 1)), n(u, 11, l);
      }
      return a < o.length && n(
        c.ALPHANUMERIC_CHARSET.indexOf(o.charAt(a)),
        6,
        l
      ), new c(c.Mode.ALPHANUMERIC, o.length, l);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(o) {
      return o == "" ? [] : c.isNumeric(o) ? [c.makeNumeric(o)] : c.isAlphanumeric(o) ? [c.makeAlphanumeric(o)] : [c.makeBytes(c.toUtf8ByteArray(o))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(o) {
      let l = [];
      if (o < 0)
        throw new RangeError("ECI assignment value out of range");
      if (o < 128) n(o, 8, l);
      else if (o < 16384)
        n(2, 2, l), n(o, 14, l);
      else if (o < 1e6)
        n(6, 3, l), n(o, 21, l);
      else throw new RangeError("ECI assignment value out of range");
      return new c(c.Mode.ECI, 0, l);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(o) {
      return c.NUMERIC_REGEX.test(o);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(o) {
      return c.ALPHANUMERIC_REGEX.test(o);
    }
    /*-- Methods --*/
    // Returns a new copy of the data bits of this segment.
    getData() {
      return this.bitData.slice();
    }
    // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
    // the given version. The result is infinity if a segment has too many characters to fit its length field.
    static getTotalBits(o, l) {
      let a = 0;
      for (const u of o) {
        const f = u.mode.numCharCountBits(l);
        if (u.numChars >= 1 << f) return 1 / 0;
        a += 4 + f + u.bitData.length;
      }
      return a;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(o) {
      o = encodeURI(o);
      let l = [];
      for (let a = 0; a < o.length; a++)
        o.charAt(a) != "%" ? l.push(o.charCodeAt(a)) : (l.push(parseInt(o.substring(a + 1, a + 3), 16)), a += 2);
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
})(zt || (zt = {}));
((e) => {
  ((t) => {
    class n {
      // The QR Code can tolerate about 30% erroneous codewords
      /*-- Constructor and fields --*/
      constructor(i, c) {
        this.ordinal = i, this.formatBits = c;
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
})(zt || (zt = {}));
((e) => {
  ((t) => {
    class n {
      /*-- Constructor and fields --*/
      constructor(i, c) {
        this.modeBits = i, this.numBitsCharCount = c;
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
      numCharCountBits(i) {
        return this.numBitsCharCount[Math.floor((i + 7) / 17)];
      }
    }
    t.Mode = n;
  })(e.QrSegment || (e.QrSegment = {}));
})(zt || (zt = {}));
const V2 = "_root_1leml_1", G2 = {
  root: V2
}, Y2 = {
  low: zt.QrCode.Ecc.LOW,
  medium: zt.QrCode.Ecc.MEDIUM,
  quartile: zt.QrCode.Ecc.QUARTILE,
  high: zt.QrCode.Ecc.HIGH
};
function Xk({
  value: e,
  size: t = 128,
  render: n = "svg",
  errorCorrection: r = "medium",
  margin: i = 4,
  ariaLabel: c,
  className: d,
  onError: o
}) {
  const l = c ?? `QR code for ${e}`, a = ee(null), u = dr("(prefers-color-scheme: dark)"), [f, k] = X(null);
  me(() => {
    const w = document.documentElement;
    k(w.dataset.theme ?? null);
    const m = new MutationObserver(() => {
      k(w.dataset.theme ?? null);
    });
    return m.observe(w, {
      attributes: !0,
      attributeFilter: ["data-theme"]
    }), () => m.disconnect();
  }, []);
  const v = xe(() => {
    try {
      return zt.QrCode.encodeText(e, Y2[r]);
    } catch {
      return null;
    }
  }, [e, r]), $ = ee(null);
  me(() => {
    if (v !== null) {
      $.current = null;
      return;
    }
    const w = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error(w), ($.current?.value !== e || $.current?.onError !== o) && ($.current = { value: e, onError: o }, o?.(w));
  }, [v, e, o]);
  const y = Math.max(0, Math.floor(i)), g = [G2.root, d].filter(Boolean).join(" ");
  if (me(() => {
    if (n !== "canvas" || v === null) return;
    const w = a.current, m = w?.getContext("2d");
    if (!w || !m) return;
    const C = getComputedStyle(w), b = C.getPropertyValue("--dx-text-color").trim() || "#000", N = C.getPropertyValue("--dx-surface-color").trim() || "#fff";
    Z2(m, v, t, y, b, N);
  }, [n, v, t, y, u, f]), v === null)
    return /* @__PURE__ */ s("div", { className: g, role: "img", "aria-label": l, "data-qr-error": "true" });
  const _ = v.size + y * 2, p = t / _;
  if (n === "canvas")
    return /* @__PURE__ */ s(
      "canvas",
      {
        ref: a,
        className: g,
        width: t,
        height: t,
        role: "img",
        "aria-label": l,
        "data-value": e
      }
    );
  const x = [];
  for (let w = 0; w < v.size; w++)
    for (let m = 0; m < v.size; m++)
      v.getModule(m, w) && x.push(
        /* @__PURE__ */ s(
          "rect",
          {
            x: (m + y) * p,
            y: (w + y) * p,
            width: p + 0.5,
            height: p + 0.5
          },
          `${m}-${w}`
        )
      );
  return /* @__PURE__ */ D(
    "svg",
    {
      className: g,
      width: t,
      height: t,
      viewBox: `0 0 ${t} ${t}`,
      role: "img",
      "aria-label": l,
      "data-value": e,
      children: [
        /* @__PURE__ */ s("rect", { width: t, height: t, fill: "var(--dx-surface-color)" }),
        /* @__PURE__ */ s("g", { fill: "var(--dx-text-color)", children: x })
      ]
    }
  );
}
function Z2(e, t, n, r, i, c) {
  const d = n / (t.size + r * 2);
  e.fillStyle = c, e.fillRect(0, 0, n, n), e.fillStyle = i;
  for (let o = 0; o < t.size; o++)
    for (let l = 0; l < t.size; l++)
      t.getModule(l, o) && e.fillRect((l + r) * d, (o + r) * d, d + 0.5, d + 0.5);
}
const J2 = "_root_1v9la_1", Q2 = "_value_1v9la_9", er = {
  root: J2,
  value: Q2
}, tr = [
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
], nr = 104, ev = 106;
function tv(e) {
  const t = [nr];
  for (let r = 0; r < e.length; r++) {
    const i = e.charCodeAt(r);
    t.push(i >= 32 && i <= 126 ? i - 32 : 0);
  }
  let n = nr;
  for (let r = 1; r < t.length; r++) n += r * t[r];
  return t.push(n % 103, ev), t;
}
function Vk({
  value: e,
  format: t = "Code128",
  height: n = 60,
  showValue: r = !1,
  ariaLabel: i,
  className: c
}) {
  const d = i ?? `Barcode ${e}`, o = xe(() => {
    const l = [];
    let a = 0;
    for (const u of tv(e)) {
      const f = tr[u] ?? tr[0];
      for (let k = 0; k < f.length; k++) {
        const v = Number(f[k]);
        k % 2 === 0 && l.push({ x: a, w: v }), a += v;
      }
    }
    return { modules: l, total: a };
  }, [e]);
  return /* @__PURE__ */ D("span", { className: [er.root, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ D(
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
          o.modules.map((l, a) => /* @__PURE__ */ s(
            "rect",
            {
              x: l.x,
              y: 0,
              width: l.w,
              height: n,
              fill: "var(--dx-text-color)"
            },
            a
          ))
        ]
      }
    ),
    r && /* @__PURE__ */ s("span", { className: er.value, children: e })
  ] });
}
const nv = "_root_1bgqt_1", sv = "_svg_1bgqt_10", rv = "_gridline_1bgqt_15", ov = "_tickLabel_1bgqt_21", lv = "_axisTitle_1bgqt_27", av = "_dataLabel_1bgqt_34", iv = "_legend_1bgqt_40", cv = "_legendItem_1bgqt_48", dv = "_swatch_1bgqt_56", uv = "_tooltip_1bgqt_63", fv = "_visuallyHidden_1bgqt_77", ot = {
  root: nv,
  svg: sv,
  gridline: rv,
  tickLabel: ov,
  axisTitle: lv,
  dataLabel: av,
  legend: iv,
  legendItem: cv,
  swatch: dv,
  tooltip: uv,
  visuallyHidden: fv
}, sr = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function _v(e, t, n) {
  const r = t - e || 1, i = n ?? Math.pow(10, Math.floor(Math.log10(r / 4))), c = Math.floor(e / i) * i, d = Math.ceil(t / i) * i, o = [];
  for (let l = c; l <= d + 1e-9; l += i)
    o.push(Number(l.toFixed(6)));
  return { min: c, max: d, step: i, ticks: o };
}
function Gk({
  series: e,
  width: t = 600,
  height: n = 400,
  valueAxis: r,
  categoryAxis: i,
  showLegend: c = !0,
  tooltipVisible: d = !0,
  onSeriesClick: o,
  ariaLabel: l = "Chart",
  className: a
}) {
  const [u, f] = X(
    null
  ), k = xe(() => {
    const b = /* @__PURE__ */ new Set();
    for (const N of e)
      for (const A of N.data) b.add(String(A[N.categoryProperty] ?? ""));
    return [...b];
  }, [e]), v = xe(
    () => e.flatMap((b) => b.data.map((N) => Number(N[b.valueProperty]))).filter((b) => !Number.isNaN(b)),
    [e]
  ), $ = r?.min ?? (v.length ? Math.min(0, ...v) : 0), y = r?.max ?? (v.length ? Math.max(...v) : 10), g = xe(
    () => _v($, y, r?.step),
    [$, y, r?.step]
  ), _ = { t: 16, r: 16, b: 40, l: 56 }, p = t - _.l - _.r, x = n - _.t - _.b, w = (b) => _.l + b / Math.max(1, k.length - 1) * p, m = (b) => _.t + (1 - (b - g.min) / (g.max - g.min || 1)) * x, C = (b, N) => N.color ?? sr[b % sr.length];
  return /* @__PURE__ */ D(
    "figure",
    {
      className: [ot.root, a].filter(Boolean).join(" "),
      role: "img",
      "aria-label": l,
      "aria-describedby": `${l.replace(/\s+/g, "-")}-table`,
      children: [
        /* @__PURE__ */ D(
          "svg",
          {
            width: t,
            height: n,
            className: ot.svg,
            role: "presentation",
            children: [
              r?.gridlines !== !1 && g.ticks.map((b) => /* @__PURE__ */ s(
                "line",
                {
                  x1: _.l,
                  x2: _.l + p,
                  y1: m(b),
                  y2: m(b),
                  className: ot.gridline
                },
                b
              )),
              i?.gridlines && k.map((b, N) => /* @__PURE__ */ s(
                "line",
                {
                  x1: w(N),
                  x2: w(N),
                  y1: _.t,
                  y2: _.t + x,
                  className: ot.gridline
                },
                N
              )),
              g.ticks.map((b) => /* @__PURE__ */ s(
                "text",
                {
                  x: _.l - 8,
                  y: m(b) + 4,
                  textAnchor: "end",
                  className: ot.tickLabel,
                  children: b
                },
                b
              )),
              k.map((b, N) => /* @__PURE__ */ s(
                "text",
                {
                  x: w(N),
                  y: _.t + x + 16,
                  textAnchor: "middle",
                  className: ot.tickLabel,
                  children: b
                },
                b
              )),
              r?.title && /* @__PURE__ */ s(
                "text",
                {
                  x: 12,
                  y: _.t + x / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90,12,${_.t + x / 2})`,
                  className: ot.axisTitle,
                  children: r.title
                }
              ),
              i?.title && /* @__PURE__ */ s(
                "text",
                {
                  x: _.l + p / 2,
                  y: n - 4,
                  textAnchor: "middle",
                  className: ot.axisTitle,
                  children: i.title
                }
              ),
              (() => {
                const b = /* @__PURE__ */ new Map();
                for (const M of e)
                  if (M.stack)
                    for (const I of M.data) {
                      const O = String(I[M.categoryProperty] ?? ""), h = Number(I[M.valueProperty]);
                      if (Number.isNaN(h)) continue;
                      b.has(M.stack) || b.set(M.stack, /* @__PURE__ */ new Map());
                      const S = b.get(M.stack);
                      S.set(O, (S.get(O) ?? 0) + h);
                    }
                const N = e.filter(
                  (M) => M.type === "pie" || M.type === "donut"
                ), A = /* @__PURE__ */ new Map();
                for (const M of N) {
                  const I = M.data.reduce(
                    (O, h) => O + (Number(h[M.valueProperty]) || 0),
                    0
                  );
                  A.set(M, I);
                }
                return e.map((M, I) => {
                  const O = M.data.map((E) => ({
                    cat: String(E[M.categoryProperty] ?? ""),
                    val: Number(E[M.valueProperty]),
                    size: M.sizeProperty ? Number(E[M.sizeProperty]) : void 0,
                    item: E
                  })), h = new Map(k.map((E, j) => [E, j])), S = C(I, M);
                  if (M.type === "pie" || M.type === "donut") {
                    const E = _.l + p / 2, j = _.t + x / 2, T = Math.min(p, x) / 3, F = M.type === "donut" ? M.innerRadius ?? T * 0.5 : 0, G = A.get(M) ?? O.reduce((U, ne) => U + ne.val, 0);
                    let Y = -90;
                    return /* @__PURE__ */ D(
                      "g",
                      {
                        role: "list",
                        "aria-label": M.title ?? `Series ${I + 1}`,
                        children: [
                          /* @__PURE__ */ s("title", { children: M.title ?? `Series ${I + 1}` }),
                          O.map((U, ne) => {
                            const le = G ? U.val / G * 360 : 0, te = Y, q = Y + le;
                            Y = q;
                            const ie = le > 180 ? 1 : 0, J = (Qe) => Qe * Math.PI / 180, de = E + T * Math.cos(J(te)), ae = j + T * Math.sin(J(te)), ve = E + T * Math.cos(J(q)), $e = j + T * Math.sin(J(q)), Re = E + F * Math.cos(J(q)), we = j + F * Math.sin(J(q)), Xe = E + F * Math.cos(J(te)), be = j + F * Math.sin(J(te)), Ze = F ? `M ${de} ${ae} A ${T} ${T} 0 ${ie} 1 ${ve} ${$e} L ${Re} ${we} A ${F} ${F} 0 ${ie} 0 ${Xe} ${be} Z` : `M ${E} ${j} L ${de} ${ae} A ${T} ${T} 0 ${ie} 1 ${ve} ${$e} Z`, Ve = (te + q) / 2, Le = E + (T + 12) * Math.cos(J(Ve)), tt = j + (T + 12) * Math.sin(J(Ve));
                            return /* @__PURE__ */ D("g", { role: "listitem", children: [
                              /* @__PURE__ */ s(
                                "path",
                                {
                                  d: Ze,
                                  fill: S,
                                  stroke: "var(--dx-surface-color)",
                                  strokeWidth: 1,
                                  onMouseEnter: () => d && f({
                                    x: Le,
                                    y: tt,
                                    text: `${M.title ?? U.cat}: ${U.val}`
                                  }),
                                  onMouseLeave: () => f(null),
                                  onClick: () => o?.({
                                    seriesTitle: M.title ?? "",
                                    category: U.cat,
                                    value: U.val,
                                    item: U.item
                                  }),
                                  style: { cursor: "pointer" }
                                }
                              ),
                              M.labels?.visible && /* @__PURE__ */ s(
                                "text",
                                {
                                  x: Le,
                                  y: tt,
                                  textAnchor: "middle",
                                  className: ot.dataLabel,
                                  children: U.val
                                }
                              )
                            ] }, ne);
                          })
                        ]
                      },
                      I
                    );
                  }
                  if (M.type === "scatter" || M.type === "bubble")
                    return /* @__PURE__ */ D(
                      "g",
                      {
                        role: "list",
                        "aria-label": M.title ?? `Series ${I + 1}`,
                        children: [
                          /* @__PURE__ */ s("title", { children: M.title ?? `Series ${I + 1}` }),
                          O.map((E, j) => {
                            const T = h.get(E.cat) ?? 0, F = Number(O[j].cat), G = Number.isNaN(F) ? w(T) : _.l + (F - g.min) / (g.max - g.min || 1) * p, Y = m(E.val), U = M.type === "bubble" && E.size !== void 0 ? Math.max(4, Math.min(12, E.size / 10)) : 4;
                            return /* @__PURE__ */ D("g", { role: "listitem", children: [
                              /* @__PURE__ */ s(
                                "circle",
                                {
                                  cx: G,
                                  cy: Y,
                                  r: U,
                                  fill: S,
                                  stroke: "var(--dx-surface-color)",
                                  strokeWidth: 1.5
                                }
                              ),
                              /* @__PURE__ */ s(
                                "circle",
                                {
                                  cx: G,
                                  cy: Y,
                                  r: 12,
                                  fill: "transparent",
                                  onMouseEnter: () => d && f({
                                    x: G,
                                    y: Y,
                                    text: `${M.title ?? E.cat}: ${E.val}`
                                  }),
                                  onMouseLeave: () => f(null),
                                  onClick: () => o?.({
                                    seriesTitle: M.title ?? "",
                                    category: E.cat,
                                    value: E.val,
                                    item: E.item
                                  }),
                                  style: { cursor: "pointer" }
                                }
                              )
                            ] }, j);
                          })
                        ]
                      },
                      I
                    );
                  if (M.type === "line" || M.type === "area") {
                    const E = (F) => {
                      if (!M.stack) return g.min;
                      let G = 0;
                      for (let Y = 0; Y < I; Y++) {
                        const U = e[Y];
                        if (U?.stack !== M.stack) continue;
                        const ne = U.data.find(
                          (le) => String(le[U.categoryProperty] ?? "") === F
                        );
                        ne && (G += Number(ne[U.valueProperty]) || 0);
                      }
                      return G;
                    }, j = O.map((F) => {
                      const G = h.get(F.cat) ?? 0, Y = E(F.cat);
                      return `${G === 0 ? "M" : "L"} ${w(G)} ${m(Y + F.val)}`;
                    }).join(" "), T = O.map((F) => {
                      const G = h.get(F.cat) ?? 0, Y = E(F.cat);
                      return `${G === 0 ? "M" : "L"} ${w(G)} ${m(Y)}`;
                    }).join(" ");
                    return /* @__PURE__ */ D(
                      "g",
                      {
                        role: "list",
                        "aria-label": M.title ?? `Series ${I + 1}`,
                        children: [
                          /* @__PURE__ */ s("title", { children: M.title ?? `Series ${I + 1}` }),
                          M.type === "area" && /* @__PURE__ */ s(
                            "path",
                            {
                              d: `${j} L ${w(O.length - 1)} ${m(E(O[O.length - 1].cat))} L ${w(0)} ${m(E(O[0].cat))} Z`,
                              fill: S,
                              fillOpacity: 0.25,
                              stroke: "none"
                            }
                          ),
                          /* @__PURE__ */ s("path", { d: j, fill: "none", stroke: S, strokeWidth: 2 }),
                          M.stack && /* @__PURE__ */ s("path", { d: T, fill: "none", stroke: "transparent" }),
                          O.map((F, G) => {
                            const Y = h.get(F.cat) ?? 0, U = E(F.cat), ne = w(Y), le = m(U + F.val);
                            return /* @__PURE__ */ D("g", { role: "listitem", children: [
                              /* @__PURE__ */ s(
                                "circle",
                                {
                                  cx: ne,
                                  cy: le,
                                  r: 4,
                                  fill: S,
                                  stroke: "var(--dx-surface-color)",
                                  strokeWidth: 1.5
                                }
                              ),
                              /* @__PURE__ */ s(
                                "rect",
                                {
                                  x: ne - 12,
                                  y: le - 12,
                                  width: 24,
                                  height: 24,
                                  fill: "transparent",
                                  onMouseEnter: () => d && f({
                                    x: ne,
                                    y: le,
                                    text: `${M.title ?? F.cat}: ${F.val}`
                                  }),
                                  onMouseLeave: () => f(null),
                                  onFocus: () => d && f({
                                    x: ne,
                                    y: le,
                                    text: `${M.title ?? F.cat}: ${F.val}`
                                  }),
                                  onBlur: () => f(null),
                                  onClick: () => o?.({
                                    seriesTitle: M.title ?? "",
                                    category: F.cat,
                                    value: F.val,
                                    item: F.item
                                  }),
                                  style: { cursor: "pointer" }
                                }
                              ),
                              M.labels?.visible && /* @__PURE__ */ s(
                                "text",
                                {
                                  x: ne,
                                  y: le - 8,
                                  textAnchor: "middle",
                                  className: ot.dataLabel,
                                  children: F.val
                                }
                              )
                            ] }, G);
                          })
                        ]
                      },
                      I
                    );
                  }
                  const L = M.type === "bar";
                  return /* @__PURE__ */ D(
                    "g",
                    {
                      role: "list",
                      "aria-label": M.title ?? `Series ${I + 1}`,
                      children: [
                        /* @__PURE__ */ s("title", { children: M.title ?? `Series ${I + 1}` }),
                        O.map((E, j) => {
                          const T = h.get(E.cat) ?? 0;
                          let F = 0;
                          if (M.stack)
                            for (let ae = 0; ae < I; ae++) {
                              const ve = e[ae];
                              if (ve?.stack !== M.stack) continue;
                              const $e = ve.data.find(
                                (Re) => String(Re[ve.categoryProperty] ?? "") === E.cat
                              );
                              $e && (F += Number($e[ve.valueProperty]) || 0);
                            }
                          const G = F + E.val, Y = e.filter(
                            (ae) => !ae.stack || ae.stack === M.stack
                          ).length, U = p / k.length, ne = L ? 18 : Math.max(
                            12,
                            U / (M.stack ? 1 : e.length) - 4
                          ), le = L ? _.l + F / (g.max - g.min || 1) * p : w(T) - ne / 2 + (M.stack ? 0 : I % Y * ne), te = L ? _.t + T * x / k.length + 4 : m(G), q = L ? E.val / (g.max - g.min || 1) * p : ne - 4, ie = L ? 16 : m(F) - m(G), J = L ? _.l + F / (g.max - g.min || 1) * p : le, de = L ? _.t + T * x / k.length + 4 : te;
                          return /* @__PURE__ */ D("g", { role: "listitem", children: [
                            /* @__PURE__ */ s(
                              "rect",
                              {
                                x: J,
                                y: de,
                                width: L ? q : ne - 4,
                                height: ie,
                                fill: S,
                                rx: 2,
                                onMouseEnter: () => d && f({
                                  x: J + (L ? q : ne) / 2,
                                  y: de,
                                  text: `${M.title ?? E.cat}: ${E.val}`
                                }),
                                onMouseLeave: () => f(null),
                                onClick: () => o?.({
                                  seriesTitle: M.title ?? "",
                                  category: E.cat,
                                  value: E.val,
                                  item: E.item
                                }),
                                style: { cursor: "pointer" }
                              }
                            ),
                            M.labels?.visible && /* @__PURE__ */ s(
                              "text",
                              {
                                x: J + (L ? q : ne) / 2,
                                y: de - 4,
                                textAnchor: "middle",
                                className: ot.dataLabel,
                                children: E.val
                              }
                            )
                          ] }, j);
                        })
                      ]
                    },
                    I
                  );
                });
              })()
            ]
          }
        ),
        u && /* @__PURE__ */ s(
          "div",
          {
            className: ot.tooltip,
            style: { left: u.x, top: u.y - 28 },
            children: u.text
          }
        ),
        c && /* @__PURE__ */ s("div", { className: ot.legend, children: e.map((b, N) => /* @__PURE__ */ D("span", { className: ot.legendItem, children: [
          /* @__PURE__ */ s(
            "span",
            {
              className: ot.swatch,
              style: { backgroundColor: C(N, b) },
              "aria-hidden": "true"
            }
          ),
          b.title ?? `Series ${N + 1}`
        ] }, N)) }),
        /* @__PURE__ */ D(
          "table",
          {
            className: ot.visuallyHidden,
            id: `${l.replace(/\s+/g, "-")}-table`,
            children: [
              /* @__PURE__ */ s("caption", { children: l }),
              /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ D("tr", { children: [
                /* @__PURE__ */ s("th", { children: "Series" }),
                /* @__PURE__ */ s("th", { children: "Category" }),
                /* @__PURE__ */ s("th", { children: "Value" })
              ] }) }),
              /* @__PURE__ */ s("tbody", { children: e.map(
                (b) => b.data.map((N, A) => /* @__PURE__ */ D("tr", { children: [
                  /* @__PURE__ */ s("td", { children: b.title ?? "" }),
                  /* @__PURE__ */ s("td", { children: String(N[b.categoryProperty] ?? "") }),
                  /* @__PURE__ */ s("td", { children: String(N[b.valueProperty] ?? "") })
                ] }, `${b.title}-${A}`))
              ) })
            ]
          }
        )
      ]
    }
  );
}
export {
  Kc as ALERT_ICON,
  lk as Accordion,
  Xv as Alert,
  Jv as AutoGrid,
  ck as Autocomplete,
  rk as Avatar,
  gv as Badge,
  Vk as Barcode,
  ek as Body,
  Ak as Breadcrumb,
  os as Button,
  mv as Card,
  Rk as Carousel,
  Gk as Chart,
  qv as Checkbox,
  uk as Checkboxlist,
  yk as Colorpicker,
  Yv as Column,
  Mk as ContextMenuProvider,
  Mn as DEFAULT_OPERATOR_BY_TYPE,
  I0 as DEFAULT_PALETTE,
  Tv as DataFilter,
  Lv as DataGrid,
  Pv as DataList,
  bk as Datepicker,
  Ri as Dialog,
  Kv as DialogProvider,
  Sk as DropZone,
  ik as Dropdown,
  vv as EmptyState,
  or as FILTER_OPERATORS,
  Ik as FabMenu,
  kv as Field,
  $v as Fieldset,
  lh as Footer,
  Ov as Form,
  wv as FormField,
  Hk as Gantt,
  ch as Header,
  Oe as Icon,
  Bv as Input,
  Rv as Label,
  Qv as Layout,
  jk as Link,
  dk as Listbox,
  gk as Mask,
  Fx as Menu,
  pr as MenuItem,
  xk as Numeric,
  ra as Pager,
  zk as PanelMenu,
  Ck as PanelMenuItem,
  mk as Password,
  qk as PickList,
  Kk as Pivot,
  Ek as ProfileMenu,
  nk as Progress,
  Xk as QRCode,
  fk as Radiobuttonlist,
  vk as Rating,
  Gv as Row,
  Fk as Scheduler,
  $k as SecurityCode,
  kn as Select,
  _k as Selectbar,
  vh as Sidebar,
  tk as SidebarToggle,
  Ok as SignaturePad,
  Vv as Skeleton,
  kk as Slider,
  hk as Splitbutton,
  Lk as Splitter,
  Zv as Stack,
  yv as Stat,
  Tk as Steps,
  xi as Switch,
  bv as Table,
  ok as Tabs,
  ec as Text,
  ak as Textarea,
  pi as Textbox,
  sk as ThemeSwitcher,
  Uk as Timeline,
  wk as Timespanpicker,
  Wv as ToastProvider,
  Pk as Toc,
  pk as Togglebutton,
  Fv as Tooltip,
  Bk as Tree,
  Nk as Upload,
  Wk as VirtualGrid,
  ar as applyFilters,
  ua as applyGridState,
  zn as columnValue,
  Ev as compare,
  Av as custom,
  ia as cycleSort,
  fa as defaultOperatorForType,
  Sv as email,
  Ks as formatMasked,
  Is as formatValue,
  ts as getByPath,
  xv as iconNames,
  lr as matchesFilters,
  Cv as maxLength,
  Mv as minLength,
  da as paginate,
  Dv as pattern,
  zv as range,
  Nv as required,
  Iv as requiredTrue,
  ks as resolveVariant,
  ul as runValidators,
  wn as shadeClass,
  Dl as sortItems,
  ca as sortedItems,
  wl as toFilterString,
  Sl as toODataFilterString,
  Dk as useContextMenu,
  Hv as useDialog,
  dl as useFormContext,
  jv as useFormField,
  dr as useMediaQuery,
  Uv as useToast
};
