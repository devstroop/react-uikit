import { jsx as r, jsxs as L, Fragment as b1 } from "react/jsx-runtime";
import { forwardRef as q1, useId as E1, isValidElement as ve, cloneElement as T0, useState as W, useRef as Q, useCallback as q, useMemo as g1, useContext as ft, createContext as qt, useEffect as v1, Fragment as V0, useLayoutEffect as $0, Children as o0, useImperativeHandle as D0 } from "react";
function l0(e) {
  return e == null || e === "default" || e === "medium" ? null : `shade-${e}`;
}
const W2 = "_button_6me6w_1", Z2 = "_filled_6me6w_36", U2 = "_flat_6me6w_55", X2 = "_outlined_6me6w_58", G2 = "_text_6me6w_63", Y2 = "_loading_6me6w_506", J2 = "_spinner_6me6w_509", Q2 = "_xs_6me6w_525", en = "_sm_6me6w_531", tn = "_md_6me6w_537", nn = "_lg_6me6w_543", rn = "_xl_6me6w_549", ln = "_iconOnly_6me6w_555", on = "_fullWidth_6me6w_585", Ge = {
  button: W2,
  filled: Z2,
  flat: U2,
  outlined: X2,
  text: G2,
  "style-primary": "_style-primary_6me6w_82",
  "style-secondary": "_style-secondary_6me6w_101",
  "style-base": "_style-base_6me6w_119",
  "style-light": "_style-light_6me6w_139",
  "style-dark": "_style-dark_6me6w_157",
  "style-danger": "_style-danger_6me6w_176",
  "style-success": "_style-success_6me6w_195",
  "style-warning": "_style-warning_6me6w_214",
  "style-info": "_style-info_6me6w_233",
  "shade-lighter": "_shade-lighter_6me6w_418",
  "shade-light": "_shade-light_6me6w_418",
  "shade-dark": "_shade-dark_6me6w_428",
  "shade-darker": "_shade-darker_6me6w_432",
  loading: Y2,
  spinner: J2,
  "dx-spin": "_dx-spin_6me6w_1",
  xs: Q2,
  sm: en,
  md: tn,
  lg: nn,
  xl: rn,
  iconOnly: ln,
  fullWidth: on
};
function an(e, t) {
  const n = t, l = e ?? "filled";
  return { variant: l === "filled" || l === "flat" || l === "outlined" || l === "text" ? l : "filled", style: n ?? "primary" };
}
const Et = q1(
  function(t, n) {
    const {
      variant: l = "filled",
      severity: s,
      shade: c = "default",
      size: d = "md",
      fullWidth: o = !1,
      iconOnly: a = !1,
      loading: i = !1,
      visible: h = !0,
      className: u,
      disabled: b,
      children: y,
      ...k
    } = t;
    if (h === !1) return null;
    const m = an(l, s), p = m.style === "light" || m.style === "dark" ? null : l0(c), f = [
      Ge.button,
      Ge[m.variant],
      Ge[`style-${m.style}`],
      p ? Ge[p] : null,
      Ge[d],
      o ? Ge.fullWidth : null,
      a ? Ge.iconOnly : null,
      i ? Ge.loading : null,
      // Press feedback on every button (Radzen material parity).
      "dx-ripple",
      u
    ].filter(Boolean).join(" "), v = /* @__PURE__ */ L(b1, { children: [
      i ? /* @__PURE__ */ r("span", { "aria-hidden": "true", className: Ge.spinner }) : null,
      y
    ] }), M = t.href;
    if (M != null) {
      const { onClick: C, ...z } = k, A = b || i;
      return /* @__PURE__ */ r(
        "a",
        {
          ref: n,
          href: M,
          className: f,
          "aria-disabled": A || void 0,
          "aria-busy": i || void 0,
          onClick: (O) => {
            if (A) {
              O.preventDefault();
              return;
            }
            C?.(O);
          },
          ...z,
          children: v
        }
      );
    }
    const { type: _ = "button", ...w } = k;
    return /* @__PURE__ */ r(
      "button",
      {
        ref: n,
        type: _,
        className: f,
        disabled: b || i,
        "aria-busy": i || void 0,
        ...w,
        children: v
      }
    );
  }
), sn = "_card_16nyh_1", cn = "_elevated_16nyh_8", dn = "_filled_16nyh_13", un = "_outlined_16nyh_18", hn = "_interactive_16nyh_22", fn = "_text_16nyh_30", pn = "_header_16nyh_46", mn = "_body_16nyh_53", _n = "_footer_16nyh_63", Rt = {
  card: sn,
  elevated: cn,
  filled: dn,
  outlined: un,
  interactive: hn,
  text: fn,
  header: pn,
  body: mn,
  footer: _n
}, Lm = q1(function({
  variant: t = "elevated",
  header: n,
  footer: l,
  className: s,
  visible: c = !0,
  children: d,
  onKeyDown: o,
  ...a
}, i) {
  if (c === !1) return null;
  const h = t === "interactive";
  return (
    // Interactivity is conditional on variant="interactive" (role + tabIndex
    // travel together); static analysis cannot see that.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ L(
      "div",
      {
        ref: i,
        role: h ? "button" : void 0,
        tabIndex: h ? 0 : void 0,
        onKeyDown: (u) => {
          o?.(u), !(!h || u.key !== "Enter" && u.key !== " ") && (u.preventDefault(), u.currentTarget.click());
        },
        className: [Rt.card, Rt[t], s].filter(Boolean).join(" "),
        ...a,
        children: [
          n != null && /* @__PURE__ */ r("div", { className: Rt.header, children: n }),
          /* @__PURE__ */ r("div", { className: Rt.body, children: d }),
          l != null && /* @__PURE__ */ r("div", { className: Rt.footer, children: l })
        ]
      }
    )
  );
});
function b2(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const vn = "_badge_1a6q1_1", gn = "_xs_1a6q1_21", kn = "_sm_1a6q1_26", xn = "_md_1a6q1_31", yn = "_lg_1a6q1_36", bn = "_xl_1a6q1_41", Mn = "_neutral_1a6q1_47", Cn = "_primary_1a6q1_52", wn = "_secondary_1a6q1_61", zn = "_light_1a6q1_66", Ln = "_base_1a6q1_71", $n = "_dark_1a6q1_76", Nn = "_info_1a6q1_81", Sn = "_success_1a6q1_86", On = "_warning_1a6q1_95", An = "_danger_1a6q1_104", Hn = "_filled_1a6q1_111", jn = "_outlined_1a6q1_161", Tn = "_text_1a6q1_213", Bt = {
  badge: vn,
  xs: gn,
  sm: kn,
  md: xn,
  lg: yn,
  xl: bn,
  neutral: Mn,
  primary: Cn,
  secondary: wn,
  light: zn,
  base: Ln,
  dark: $n,
  info: Nn,
  success: Sn,
  warning: On,
  danger: An,
  filled: Hn,
  outlined: jn,
  text: Tn,
  "shade-lighter": "_shade-lighter_1a6q1_486",
  "shade-light": "_shade-light_1a6q1_486",
  "shade-dark": "_shade-dark_1a6q1_494",
  "shade-darker": "_shade-darker_1a6q1_497"
}, $m = q1(function({
  severity: t = "primary",
  variant: n = "filled",
  shade: l,
  size: s = "md",
  className: c,
  visible: d = !0,
  children: o,
  ...a
}, i) {
  if (d === !1) return null;
  const h = t, u = b2(n, "filled"), b = l0(l);
  return /* @__PURE__ */ r(
    "span",
    {
      ref: i,
      className: [
        Bt.badge,
        Bt[s],
        Bt[h],
        Bt[u],
        b ? Bt[b] : null,
        c
      ].filter(Boolean).join(" "),
      ...a,
      children: o
    }
  );
}), Vn = {
  style: "stroke",
  strokeWidth: 2,
  viewBox: "0 0 24 24",
  icons: {
    check: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 6L9 17l-5-5"/>',
    close: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"/>',
    "chevron-down": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9l6 6l6-6"/>',
    "chevron-left": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 18l-6-6l6-6"/>',
    "chevron-right": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 18l6-6l-6-6"/>',
    "chevron-up": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18 15l-6-6l-6 6"/>',
    search: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21l-4.35-4.35"/></g>',
    plus: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m-7-7h14"/>',
    minus: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"/>',
    alert: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0M12 9v4m0 4h.01"/>',
    info: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4m0-4h.01"/></g>',
    "arrow-right": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l7 7l-7 7"/>',
    "arrow-left": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m7 7l-7-7l7-7"/>',
    "external-link": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3"/>',
    copy: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="13" height="13" x="9" y="9" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></g>',
    trash: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
    edit: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1l1-4z"/></g>',
    settings: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83a2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33a1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0a2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2a2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83a2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0a2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1"/></g>',
    user: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></g>',
    users: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75"/></g>',
    download: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m4-5l5 5l5-5m-5 5V3"/>',
    upload: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m14-7l-5-5l-5 5m5-5v12"/>',
    menu: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h18M3 6h18M3 18h18"/>',
    "more-horizontal": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></g>',
    mail: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2"/><path d="m22 6l-10 7L2 6"/></g>',
    lock: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></g>',
    eye: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M1 12s4-8 11-8s11 8 11 8s-4 8-11 8s-11-8-11-8"/><circle cx="12" cy="12" r="3"/></g>',
    "eye-off": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9 9 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22"/>',
    refresh: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></g>',
    calendar: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><path d="M16 2v4M8 2v4m-5 4h18"/></g>',
    clock: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></g>',
    "check-circle": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></g>',
    "x-circle": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m15 9l-6 6m0-6l6 6"/></g>',
    shield: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22s8-4 8-10V5l-8-3l-8 3v7c0 6 8 10 8 10"/>',
    globe: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10a15.3 15.3 0 0 1-4 10a15.3 15.3 0 0 1-4-10a15.3 15.3 0 0 1 4-10"/></g>',
    file: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M13 2v7h7"/></g>',
    folder: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
    home: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m3 9l9-7l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></g>',
    key: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778a5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>',
    link: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></g>',
    star: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01z"/>',
    "star-outline": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01z"/>',
    ban: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93l14.14 14.14"/></g>'
  }
}, Dn = {
  style: "stroke",
  strokeWidth: 2,
  viewBox: "0 0 24 24",
  icons: {
    check: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 6L9 17l-5-5"/>',
    close: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"/>',
    "chevron-down": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9l6 6l6-6"/>',
    "chevron-left": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 18l-6-6l6-6"/>',
    "chevron-right": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 18l6-6l-6-6"/>',
    "chevron-up": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18 15l-6-6l-6 6"/>',
    search: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m21 21l-4.34-4.34"/><circle cx="11" cy="11" r="8"/></g>',
    plus: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7v14"/>',
    minus: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"/>',
    alert: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01"/>',
    info: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4m0-4h.01"/></g>',
    "arrow-right": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l7 7l-7 7"/>',
    "arrow-left": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 19l-7-7l7-7m7 7H5"/>',
    "external-link": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    copy: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></g>',
    trash: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11v6m4-6v6m5-11v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
    edit: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></g>',
    settings: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0a2.34 2.34 0 0 0 3.319 1.915a2.34 2.34 0 0 1 2.33 4.033a2.34 2.34 0 0 0 0 3.831a2.34 2.34 0 0 1-2.33 4.033a2.34 2.34 0 0 0-3.319 1.915a2.34 2.34 0 0 1-4.659 0a2.34 2.34 0 0 0-3.32-1.915a2.34 2.34 0 0 1-2.33-4.033a2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/></g>',
    user: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></g>',
    users: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></g>',
    download: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10l5 5l5-5"/></g>',
    upload: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v12m5-7l-5-5l-5 5m14 7v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>',
    menu: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5h16M4 12h16M4 19h16"/>',
    "more-horizontal": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></g>',
    mail: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect width="20" height="16" x="2" y="4" rx="2"/></g>',
    lock: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></g>',
    eye: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></g>',
    "eye-off": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575a1 1 0 0 1 0 .696a10.8 10.8 0 0 1-1.444 2.49m-6.41-.679a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 4.446-5.143M2 2l20 20"/></g>',
    refresh: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></g>',
    calendar: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M8 2v3m8-3v3"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/></g>',
    clock: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></g>',
    "check-circle": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m16 9l-5.5 5.5L8 12"/></g>',
    "x-circle": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m15 9l-6 6m0-6l6 6"/></g>',
    shield: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
    globe: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"/></g>',
    file: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/></g>',
    folder: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
    home: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></g>',
    key: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m2 21l9.6-9.6m-4.1 4.1l2.3 2.3a1 1 0 0 1 0 1.4l-2.1 2.1a1 1 0 0 1-1.4 0L4 19"/><circle cx="15.5" cy="7.5" r="5.5"/></g>',
    link: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></g>',
    star: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"/>',
    "star-outline": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"/>',
    ban: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M4.929 4.929L19.07 19.071"/></g>'
  }
}, En = {
  style: "stroke",
  strokeWidth: 2,
  viewBox: "0 0 24 24",
  icons: {
    check: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 12l5 5L20 7"/>',
    close: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"/>',
    "chevron-down": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9l6 6l6-6"/>',
    "chevron-left": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 6l-6 6l6 6"/>',
    "chevron-right": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 6l6 6l-6 6"/>',
    "chevron-up": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 15l6-6l6 6"/>',
    search: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"/>',
    plus: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m-7-7h14"/>',
    minus: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"/>',
    alert: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v4m-1.637-9.409L2.257 17.125a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636-2.87L13.637 3.59a1.914 1.914 0 0 0-3.274 0M12 16h.01"/>',
    info: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9-3h.01"/><path d="M11 12h1v4h1"/></g>',
    "arrow-right": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6 6l6-6m-6-6l6 6"/>',
    "arrow-left": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l6 6m-6-6l6-6"/>',
    "external-link": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5"/>',
    copy: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M7 9.667A2.667 2.667 0 0 1 9.667 7h8.666A2.667 2.667 0 0 1 21 9.667v8.666A2.667 2.667 0 0 1 18.333 21H9.667A2.667 2.667 0 0 1 7 18.333z"/><path d="M4.012 16.737A2 2 0 0 1 3 15V5c0-1.1.9-2 2-2h10c.75 0 1.158.385 1.5 1"/></g>',
    trash: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/>',
    edit: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1"/><path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3zM16 5l3 3"/></g>',
    settings: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0"/></g>',
    user: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>',
    users: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2m1-17.87a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.85"/>',
    download: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5l5-5m-5-7v12"/>',
    upload: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 9l5-5l5 5m-5-5v12"/>',
    menu: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"/>',
    "more-horizontal": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0"/>',
    mail: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="m3 7l9 6l9-6"/></g>',
    lock: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 13a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"/><path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-3-5V7a4 4 0 1 1 8 0v4"/></g>',
    eye: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"/><path d="M21 12q-3.6 6-9 6t-9-6q3.6-6 9-6t9 6"/></g>',
    "eye-off": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"/><path d="M16.681 16.673A8.7 8.7 0 0 1 12 18q-5.4 0-9-6q1.908-3.18 4.32-4.674m2.86-1.146A9 9 0 0 1 12 6q5.4 0 9 6q-1 1.665-2.138 2.87M3 3l18 18"/></g>',
    refresh: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4m-4 4a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/>',
    calendar: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm12-4v4M8 3v4m-4 4h16m-9 4h1m0 0v3"/>',
    clock: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0"/><path d="M12 7v5l3 3"/></g>',
    "check-circle": '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"/><path d="m9 12l2 2l4-4"/></g>',
    "x-circle": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m7-2l4 4m0-4l-4 4"/>',
    shield: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3a12 12 0 0 0 8.5 3A12 12 0 0 1 12 21A12 12 0 0 1 3.5 6A12 12 0 0 0 12 3"/>',
    globe: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M7 9a4 4 0 1 0 8 0a4 4 0 0 0-8 0"/><path d="M5.75 15A8.015 8.015 0 1 0 15 2m-4 15v4m-4 0h8"/></g>',
    file: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2"/></g>',
    folder: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"/>',
    home: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 12H3l9-9l9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/><path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6"/></g>',
    key: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1-4.069 0l-.301-.301l-6.558 6.558a2 2 0 0 1-1.239.578L5.172 21H4a1 1 0 0 1-.993-.883L3 20v-1.172a2 2 0 0 1 .467-1.284l.119-.13L4 17h2v-2h2v-2l2.144-2.144l-.301-.301a2.877 2.877 0 0 1 0-4.069l2.643-2.643a2.877 2.877 0 0 1 4.069 0M15 9h.01"/>',
    link: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 15l6-6m-4-3l.463-.536a5 5 0 0 1 7.071 7.072L18 13m-5 5l-.397.534a5.07 5.07 0 0 1-7.127 0a4.97 4.97 0 0 1 0-7.071L6 11"/>',
    star: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 17.75l-6.172 3.245l1.179-6.873l-5-4.867l6.9-1l3.086-6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"/>',
    "star-outline": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 17.75l-6.172 3.245l1.179-6.873l-5-4.867l6.9-1l3.086-6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"/>',
    ban: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m2.7-6.3l12.6 12.6"/>'
  }
}, qn = {
  style: "stroke",
  strokeWidth: 1.5,
  viewBox: "0 0 24 24",
  icons: {
    check: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4.5 12.75l6 6l9-13.5"/>',
    close: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>',
    "chevron-down": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 8.25l-7.5 7.5l-7.5-7.5"/>',
    "chevron-left": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 19.5L8.25 12l7.5-7.5"/>',
    "chevron-right": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.25 4.5l7.5 7.5l-7.5 7.5"/>',
    "chevron-up": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4.5 15.75l7.5-7.5l7.5 7.5"/>',
    search: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607"/>',
    plus: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.5v15m7.5-7.5h-15"/>',
    minus: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h14"/>',
    alert: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0zM12 15.75h.007v.008H12z"/>',
    info: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-9-3.75h.008v.008H12z"/>',
    "arrow-right": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>',
    "arrow-left": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>',
    "external-link": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>',
    copy: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192q.56-.045 1.124-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48 48 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.25 2.25 0 0 0 15 2.25h-1.5a2.25 2.25 0 0 0-2.15 1.586m5.8 0q.099.316.1.664v.75h-6V4.5q.001-.348.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9"/>',
    trash: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21q.512.078 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48 48 0 0 0-3.478-.397m-12 .562q.51-.088 1.022-.165m0 0a48 48 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a52 52 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a49 49 0 0 0-7.5 0"/>',
    edit: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"/>',
    settings: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87q.11.06.22.127c.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a8 8 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a7 7 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a7 7 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a7 7 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124q.108-.066.22-.128c.332-.183.582-.495.644-.869z"/><path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0"/></g>',
    user: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 6a3.75 3.75 0 1 1-7.5 0a3.75 3.75 0 0 1 7.5 0M4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.9 17.9 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632"/>',
    users: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19.128a9.4 9.4 0 0 0 2.625.372a9.3 9.3 0 0 0 4.121-.952q.004-.086.004-.173a4.125 4.125 0 0 0-7.536-2.32M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.3 12.3 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0a3.375 3.375 0 0 1 6.75 0m8.25 2.25a2.625 2.625 0 1 1-5.25 0a2.625 2.625 0 0 1 5.25 0"/>',
    download: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/>',
    upload: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"/>',
    menu: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>',
    "more-horizontal": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 12a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m6 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m6 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"/>',
    mail: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>',
    lock: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25"/>',
    eye: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M2.036 12.322a1 1 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178c.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178"/><path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0"/></g>',
    "eye-off": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.98 8.223A10.5 10.5 0 0 0 1.934 12c1.292 4.339 5.31 7.5 10.066 7.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.499a10.52 10.52 0 0 1-4.293 5.773M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"/>',
    refresh: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"/>',
    calendar: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12zM12 15h.008v.008H12zm0 2.25h.008v.008H12zM9.75 15h.008v.008H9.75zm0 2.25h.008v.008H9.75zM7.5 15h.008v.008H7.5zm0 2.25h.008v.008H7.5zm6.75-4.5h.008v.008h-.008zm0 2.25h.008v.008h-.008zm0 2.25h.008v.008h-.008zm2.25-4.5h.008v.008H16.5zm0 2.25h.008v.008H16.5z"/>',
    clock: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0"/>',
    "check-circle": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"/>',
    "x-circle": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"/>',
    shield: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12.75L11.25 15L15 9.75m-3-7.036A11.96 11.96 0 0 1 3.598 6A12 12 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623c5.176-1.332 9-6.03 9-11.622c0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285"/>',
    globe: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a9 9 0 0 1 7.843 4.582M12 3a9 9 0 0 0-7.843 4.582m15.686 0A11.95 11.95 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.96 8.96 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.9 17.9 0 0 1 12 16.5a17.9 17.9 0 0 1-8.716-2.247m0 0A9 9 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"/>',
    file: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9"/>',
    folder: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44"/>',
    home: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.25 12l8.955-8.955a1.124 1.124 0 0 1 1.59 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>',
    key: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25"/>',
    link: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"/>',
    star: '<path fill="currentColor" fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006l5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527l1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354L7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273l-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434z" clip-rule="evenodd"/>',
    "star-outline": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.56.56 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.56.56 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.56.56 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.56.56 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.56.56 0 0 0 .475-.345z"/>',
    ban: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"/>'
  }
}, In = {
  style: "fill",
  viewBox: "0 0 256 256",
  icons: {
    check: '<path fill="currentColor" d="m229.66 77.66l-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69L218.34 66.34a8 8 0 0 1 11.32 11.32"/>',
    close: '<path fill="currentColor" d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128L50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"/>',
    "chevron-down": '<path fill="currentColor" d="m213.66 101.66l-80 80a8 8 0 0 1-11.32 0l-80-80a8 8 0 0 1 11.32-11.32L128 164.69l74.34-74.35a8 8 0 0 1 11.32 11.32"/>',
    "chevron-left": '<path fill="currentColor" d="M165.66 202.34a8 8 0 0 1-11.32 11.32l-80-80a8 8 0 0 1 0-11.32l80-80a8 8 0 0 1 11.32 11.32L91.31 128Z"/>',
    "chevron-right": '<path fill="currentColor" d="m181.66 133.66l-80 80a8 8 0 0 1-11.32-11.32L164.69 128L90.34 53.66a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32"/>',
    "chevron-up": '<path fill="currentColor" d="M213.66 165.66a8 8 0 0 1-11.32 0L128 91.31l-74.34 74.35a8 8 0 0 1-11.32-11.32l80-80a8 8 0 0 1 11.32 0l80 80a8 8 0 0 1 0 11.32"/>',
    search: '<path fill="currentColor" d="m229.66 218.34l-50.07-50.06a88.11 88.11 0 1 0-11.31 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72"/>',
    plus: '<path fill="currentColor" d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8"/>',
    minus: '<path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8"/>',
    alert: '<path fill="currentColor" d="M236.8 188.09L149.35 36.22a24.76 24.76 0 0 0-42.7 0L19.2 188.09a23.51 23.51 0 0 0 0 23.72A24.35 24.35 0 0 0 40.55 224h174.9a24.35 24.35 0 0 0 21.33-12.19a23.51 23.51 0 0 0 .02-23.72m-13.87 15.71a8.5 8.5 0 0 1-7.48 4.2H40.55a8.5 8.5 0 0 1-7.48-4.2a7.59 7.59 0 0 1 0-7.72l87.45-151.87a8.75 8.75 0 0 1 15 0l87.45 151.87a7.59 7.59 0 0 1-.04 7.72M120 144v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0m20 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12"/>',
    info: '<path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m16-40a8 8 0 0 1-8 8a16 16 0 0 1-16-16v-40a8 8 0 0 1 0-16a16 16 0 0 1 16 16v40a8 8 0 0 1 8 8m-32-92a12 12 0 1 1 12 12a12 12 0 0 1-12-12"/>',
    "arrow-right": '<path fill="currentColor" d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32"/>',
    "arrow-left": '<path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H59.31l58.35 58.34a8 8 0 0 1-11.32 11.32l-72-72a8 8 0 0 1 0-11.32l72-72a8 8 0 0 1 11.32 11.32L59.31 120H216a8 8 0 0 1 8 8"/>',
    "external-link": '<path fill="currentColor" d="M224 104a8 8 0 0 1-16 0V59.32l-66.33 66.34a8 8 0 0 1-11.32-11.32L196.68 48H152a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8Zm-40 24a8 8 0 0 0-8 8v72H48V80h72a8 8 0 0 0 0-16H48a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-72a8 8 0 0 0-8-8"/>',
    copy: '<path fill="currentColor" d="M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8m-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z"/>',
    trash: '<path fill="currentColor" d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16M96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0"/>',
    edit: '<path fill="currentColor" d="m227.31 73.37l-44.68-44.69a16 16 0 0 0-22.63 0L36.69 152A15.86 15.86 0 0 0 32 163.31V208a16 16 0 0 0 16 16h44.69a15.86 15.86 0 0 0 11.31-4.69L227.31 96a16 16 0 0 0 0-22.63M51.31 160L136 75.31L152.69 92L68 176.68ZM48 179.31L76.69 208H48Zm48 25.38L79.31 188L164 103.31L180.69 120Zm96-96L147.31 64l24-24L216 84.68Z"/>',
    settings: '<path fill="currentColor" d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m88-29.84q.06-2.16 0-4.32l14.92-18.64a8 8 0 0 0 1.48-7.06a107.2 107.2 0 0 0-10.88-26.25a8 8 0 0 0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186 40.54a8 8 0 0 0-3.94-6a107.7 107.7 0 0 0-26.25-10.87a8 8 0 0 0-7.06 1.49L130.16 40h-4.32L107.2 25.11a8 8 0 0 0-7.06-1.48a107.6 107.6 0 0 0-26.25 10.88a8 8 0 0 0-3.93 6l-2.64 23.76q-1.56 1.49-3 3L40.54 70a8 8 0 0 0-6 3.94a107.7 107.7 0 0 0-10.87 26.25a8 8 0 0 0 1.49 7.06L40 125.84v4.32L25.11 148.8a8 8 0 0 0-1.48 7.06a107.2 107.2 0 0 0 10.88 26.25a8 8 0 0 0 6 3.93l23.72 2.64q1.49 1.56 3 3L70 215.46a8 8 0 0 0 3.94 6a107.7 107.7 0 0 0 26.25 10.87a8 8 0 0 0 7.06-1.49L125.84 216q2.16.06 4.32 0l18.64 14.92a8 8 0 0 0 7.06 1.48a107.2 107.2 0 0 0 26.25-10.88a8 8 0 0 0 3.93-6l2.64-23.72q1.56-1.48 3-3l23.78-2.8a8 8 0 0 0 6-3.94a107.7 107.7 0 0 0 10.87-26.25a8 8 0 0 0-1.49-7.06Zm-16.1-6.5a74 74 0 0 1 0 8.68a8 8 0 0 0 1.74 5.48l14.19 17.73a91.6 91.6 0 0 1-6.23 15l-22.6 2.56a8 8 0 0 0-5.1 2.64a74 74 0 0 1-6.14 6.14a8 8 0 0 0-2.64 5.1l-2.51 22.58a91.3 91.3 0 0 1-15 6.23l-17.74-14.19a8 8 0 0 0-5-1.75h-.48a74 74 0 0 1-8.68 0a8 8 0 0 0-5.48 1.74l-17.78 14.2a91.6 91.6 0 0 1-15-6.23L82.89 187a8 8 0 0 0-2.64-5.1a74 74 0 0 1-6.14-6.14a8 8 0 0 0-5.1-2.64l-22.58-2.52a91.3 91.3 0 0 1-6.23-15l14.19-17.74a8 8 0 0 0 1.74-5.48a74 74 0 0 1 0-8.68a8 8 0 0 0-1.74-5.48L40.2 100.45a91.6 91.6 0 0 1 6.23-15L69 82.89a8 8 0 0 0 5.1-2.64a74 74 0 0 1 6.14-6.14A8 8 0 0 0 82.89 69l2.51-22.57a91.3 91.3 0 0 1 15-6.23l17.74 14.19a8 8 0 0 0 5.48 1.74a74 74 0 0 1 8.68 0a8 8 0 0 0 5.48-1.74l17.77-14.19a91.6 91.6 0 0 1 15 6.23L173.11 69a8 8 0 0 0 2.64 5.1a74 74 0 0 1 6.14 6.14a8 8 0 0 0 5.1 2.64l22.58 2.51a91.3 91.3 0 0 1 6.23 15l-14.19 17.74a8 8 0 0 0-1.74 5.53Z"/>',
    user: '<path fill="currentColor" d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56"/>',
    users: '<path fill="currentColor" d="M117.25 157.92a60 60 0 1 0-66.5 0a95.83 95.83 0 0 0-47.22 37.71a8 8 0 1 0 13.4 8.74a80 80 0 0 1 134.14 0a8 8 0 0 0 13.4-8.74a95.83 95.83 0 0 0-47.22-37.71M40 108a44 44 0 1 1 44 44a44.05 44.05 0 0 1-44-44m210.14 98.7a8 8 0 0 1-11.07-2.33A79.83 79.83 0 0 0 172 168a8 8 0 0 1 0-16a44 44 0 1 0-16.34-84.87a8 8 0 1 1-5.94-14.85a60 60 0 0 1 55.53 105.64a95.83 95.83 0 0 1 47.22 37.71a8 8 0 0 1-2.33 11.07"/>',
    download: '<path fill="currentColor" d="M240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h40a8 8 0 0 1 0 16H32v64h192v-64h-40a8 8 0 0 1 0-16h40a16 16 0 0 1 16 16m-117.66-2.34a8 8 0 0 0 11.32 0l48-48a8 8 0 0 0-11.32-11.32L136 108.69V24a8 8 0 0 0-16 0v84.69L85.66 74.34a8 8 0 0 0-11.32 11.32ZM200 168a12 12 0 1 0-12 12a12 12 0 0 0 12-12"/>',
    upload: '<path fill="currentColor" d="M240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h48a8 8 0 0 1 0 16H32v64h192v-64h-48a8 8 0 0 1 0-16h48a16 16 0 0 1 16 16M85.66 77.66L120 43.31V128a8 8 0 0 0 16 0V43.31l34.34 34.35a8 8 0 0 0 11.32-11.32l-48-48a8 8 0 0 0-11.32 0l-48 48a8 8 0 0 0 11.32 11.32M200 168a12 12 0 1 0-12 12a12 12 0 0 0 12-12"/>',
    menu: '<path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M40 72h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m176 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16"/>',
    "more-horizontal": '<path fill="currentColor" d="M140 128a12 12 0 1 1-12-12a12 12 0 0 1 12 12m56-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m-136 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12"/>',
    mail: '<path fill="currentColor" d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8m-96 85.15L52.57 64h150.86ZM98.71 128L40 181.81V74.19Zm11.84 10.85l12 11.05a8 8 0 0 0 10.82 0l12-11.05l58 53.15H52.57ZM157.29 128L216 74.18v107.64Z"/>',
    lock: '<path fill="currentColor" d="M208 80h-32V56a48 48 0 0 0-96 0v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16M96 56a32 32 0 0 1 64 0v24H96Zm112 152H48V96h160zm-68-56a12 12 0 1 1-12-12a12 12 0 0 1 12 12"/>',
    eye: '<path fill="currentColor" d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.5 133.5 0 0 1 25 128a133.3 133.3 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.5 133.5 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64m0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32"/>',
    "eye-off": '<path fill="currentColor" d="M53.92 34.62a8 8 0 1 0-11.84 10.76l19.24 21.17C25 88.84 9.38 123.2 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208a127.1 127.1 0 0 0 52.07-10.83l22 24.21a8 8 0 1 0 11.84-10.76Zm47.33 75.84l41.67 45.85a32 32 0 0 1-41.67-45.85M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.2 133.2 0 0 1 25 128c4.69-8.79 19.66-33.39 47.35-49.38l18 19.75a48 48 0 0 0 63.66 70l14.73 16.2A112 112 0 0 1 128 192m6-95.43a8 8 0 0 1 3-15.72a48.16 48.16 0 0 1 38.77 42.64a8 8 0 0 1-7.22 8.71a6 6 0 0 1-.75 0a8 8 0 0 1-8-7.26A32.09 32.09 0 0 0 134 96.57m113.28 34.69c-.42.94-10.55 23.37-33.36 43.8a8 8 0 1 1-10.67-11.92a132.8 132.8 0 0 0 27.8-35.14a133.2 133.2 0 0 0-23.12-30.77C185.67 75.19 158.78 64 128 64a118.4 118.4 0 0 0-19.36 1.57A8 8 0 1 1 106 49.79A134 134 0 0 1 128 48c34.88 0 66.57 13.26 91.66 38.35c18.83 18.83 27.3 37.62 27.65 38.41a8 8 0 0 1 0 6.5Z"/>',
    refresh: '<path fill="currentColor" d="M240 56v48a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h27.4l-26.59-24.36l-.25-.24a80 80 0 1 0-1.67 114.78a8 8 0 0 1 11 11.63A95.44 95.44 0 0 1 128 224h-1.32a96 96 0 1 1 69.07-164L224 85.8V56a8 8 0 1 1 16 0"/>',
    calendar: '<path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160zm-96-88v64a8 8 0 0 1-16 0v-51.06l-4.42 2.22a8 8 0 0 1-7.16-14.32l16-8A8 8 0 0 1 112 120m59.16 30.45L152 176h16a8 8 0 0 1 0 16h-32a8 8 0 0 1-6.4-12.8l28.78-38.37a8 8 0 1 0-13.31-8.83a8 8 0 1 1-13.85-8A24 24 0 0 1 176 136a23.76 23.76 0 0 1-4.84 14.45"/>',
    clock: '<path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m64-88a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v48h48a8 8 0 0 1 8 8"/>',
    "check-circle": '<path fill="currentColor" d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0M232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88"/>',
    "x-circle": '<path fill="currentColor" d="M165.66 101.66L139.31 128l26.35 26.34a8 8 0 0 1-11.32 11.32L128 139.31l-26.34 26.35a8 8 0 0 1-11.32-11.32L116.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32L128 116.69l26.34-26.35a8 8 0 0 1 11.32 11.32M232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88"/>',
    shield: '<path fill="currentColor" d="M208 40H48a16 16 0 0 0-16 16v56c0 52.72 25.52 84.67 46.93 102.19c23.06 18.86 46 25.27 47 25.53a8 8 0 0 0 4.2 0c1-.26 23.91-6.67 47-25.53C198.48 196.67 224 164.72 224 112V56a16 16 0 0 0-16-16m0 72c0 37.07-13.66 67.16-40.6 89.42a129.3 129.3 0 0 1-39.4 22.2a128.3 128.3 0 0 1-38.92-21.81C61.82 179.51 48 149.3 48 112V56h160Z"/>',
    globe: '<path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.12 104.12 0 0 0 128 24m88 104a87.6 87.6 0 0 1-3.33 24h-38.51a157.4 157.4 0 0 0 0-48h38.51a87.6 87.6 0 0 1 3.33 24m-114 40h52a115.1 115.1 0 0 1-26 45a115.3 115.3 0 0 1-26-45m-3.9-16a140.8 140.8 0 0 1 0-48h59.88a140.8 140.8 0 0 1 0 48ZM40 128a87.6 87.6 0 0 1 3.33-24h38.51a157.4 157.4 0 0 0 0 48H43.33A87.6 87.6 0 0 1 40 128m114-40h-52a115.1 115.1 0 0 1 26-45a115.3 115.3 0 0 1 26 45m52.33 0h-35.62a135.3 135.3 0 0 0-22.3-45.6A88.29 88.29 0 0 1 206.37 88Zm-98.74-45.6A135.3 135.3 0 0 0 85.29 88H49.63a88.29 88.29 0 0 1 57.96-45.6M49.63 168h35.66a135.3 135.3 0 0 0 22.3 45.6A88.29 88.29 0 0 1 49.63 168m98.78 45.6a135.3 135.3 0 0 0 22.3-45.6h35.66a88.29 88.29 0 0 1-57.96 45.6"/>',
    file: '<path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48z"/>',
    folder: '<path fill="currentColor" d="M216 72h-84.69L104 44.69A15.86 15.86 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.4 15.4 0 0 0 39.38 216h177.51A15.13 15.13 0 0 0 232 200.89V88a16 16 0 0 0-16-16M40 56h52.69l16 16H40Zm176 144H40V88h176Z"/>',
    home: '<path fill="currentColor" d="m219.31 108.68l-80-80a16 16 0 0 0-22.62 0l-80 80A15.87 15.87 0 0 0 32 120v96a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-56h32v56a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-96a15.87 15.87 0 0 0-4.69-11.32M208 208h-48v-56a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v56H48v-88l80-80l80 80Z"/>',
    key: '<path fill="currentColor" d="M216.57 39.43a80 80 0 0 0-132.66 81.35L28.69 176A15.86 15.86 0 0 0 24 187.31V216a16 16 0 0 0 16 16h32a8 8 0 0 0 8-8v-16h16a8 8 0 0 0 8-8v-16h16a8 8 0 0 0 5.66-2.34l9.56-9.57A79.7 79.7 0 0 0 160 176h.1a80 80 0 0 0 56.47-136.57M224 98.1c-1.09 34.09-29.75 61.86-63.89 61.9H160a63.7 63.7 0 0 1-23.65-4.51a8 8 0 0 0-8.84 1.68L116.69 168H96a8 8 0 0 0-8 8v16H72a8 8 0 0 0-8 8v16H40v-28.69l58.83-58.82a8 8 0 0 0 1.68-8.84A63.7 63.7 0 0 1 96 95.92c0-34.14 27.81-62.8 61.9-63.89A64 64 0 0 1 224 98.1M192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12"/>',
    link: '<path fill="currentColor" d="M240 88.23a54.43 54.43 0 0 1-16 37L189.25 160a54.27 54.27 0 0 1-38.63 16h-.05A54.63 54.63 0 0 1 96 119.84a8 8 0 0 1 16 .45A38.62 38.62 0 0 0 150.58 160a38.4 38.4 0 0 0 27.31-11.31l34.75-34.75a38.63 38.63 0 0 0-54.63-54.63l-11 11A8 8 0 0 1 135.7 59l11-11a54.65 54.65 0 0 1 77.3 0a54.86 54.86 0 0 1 16 40.23m-131 97.43l-11 11A38.4 38.4 0 0 1 70.6 208a38.63 38.63 0 0 1-27.29-65.94L78 107.31a38.63 38.63 0 0 1 66 28.4a8 8 0 0 0 16 .45A54.86 54.86 0 0 0 144 96a54.65 54.65 0 0 0-77.27 0L32 130.75A54.62 54.62 0 0 0 70.56 224a54.28 54.28 0 0 0 38.64-16l11-11a8 8 0 0 0-11.2-11.34"/>',
    star: '<path fill="currentColor" d="m234.29 114.85l-45 38.83L203 211.75a16.4 16.4 0 0 1-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07l-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76l22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08l59 4.76a16.46 16.46 0 0 1 9.37 28.86Z"/>',
    "star-outline": '<path fill="currentColor" d="M239.18 97.26A16.38 16.38 0 0 0 224.92 86l-59-4.76l-22.78-55.09a16.36 16.36 0 0 0-30.27 0L90.11 81.23L31.08 86a16.46 16.46 0 0 0-9.37 28.86l45 38.83L53 211.75a16.38 16.38 0 0 0 24.5 17.82l50.5-31.08l50.53 31.08A16.4 16.4 0 0 0 203 211.75l-13.76-58.07l45-38.83a16.43 16.43 0 0 0 4.94-17.59m-15.34 5.47l-48.7 42a8 8 0 0 0-2.56 7.91l14.88 62.8a.37.37 0 0 1-.17.48c-.18.14-.23.11-.38 0l-54.72-33.65a8 8 0 0 0-8.38 0l-54.72 33.67c-.15.09-.19.12-.38 0a.37.37 0 0 1-.17-.48l14.88-62.8a8 8 0 0 0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16a8 8 0 0 0 6.72-4.94l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153 91.86a8 8 0 0 0 6.75 4.92l63.92 5.16c.15 0 .24 0 .33.29s0 .4-.16.5"/>',
    ban: '<path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m88 104a87.56 87.56 0 0 1-20.41 56.28L71.72 60.4A88 88 0 0 1 216 128m-176 0a87.56 87.56 0 0 1 20.41-56.28L184.28 195.6A88 88 0 0 1 40 128"/>'
  }
}, Pn = {
  style: "fill",
  viewBox: "0 0 24 24",
  icons: {
    check: '<path fill="currentColor" d="m10 15.17l9.192-9.191l1.414 1.414L10 17.999l-6.364-6.364l1.414-1.414z"/>',
    close: '<path fill="currentColor" d="m12 10.587l4.95-4.95l1.414 1.414l-4.95 4.95l4.95 4.95l-1.415 1.414l-4.95-4.95l-4.949 4.95l-1.414-1.415l4.95-4.95l-4.95-4.95L7.05 5.638z"/>',
    "chevron-down": '<path fill="currentColor" d="m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222z"/>',
    "chevron-left": '<path fill="currentColor" d="m10.828 12l4.95 4.95l-1.414 1.415L8 12l6.364-6.364l1.414 1.414z"/>',
    "chevron-right": '<path fill="currentColor" d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z"/>',
    "chevron-up": '<path fill="currentColor" d="m12 10.828l-4.95 4.95l-1.414-1.414L12 8l6.364 6.364l-1.414 1.414z"/>',
    search: '<path fill="currentColor" d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.98 6.98 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.98 6.98 0 0 0 4.875-1.975z"/>',
    plus: '<path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/>',
    minus: '<path fill="currentColor" d="M5 11v2h14v-2z"/>',
    alert: '<path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-1-5h2v2h-2zm0-8h2v6h-2z"/>',
    info: '<path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16M11 7h2v2h-2zm0 4h2v6h-2z"/>',
    "arrow-right": '<path fill="currentColor" d="m16.172 11l-5.364-5.364l1.414-1.414L20 12l-7.778 7.778l-1.414-1.414L16.172 13H4v-2z"/>',
    "arrow-left": '<path fill="currentColor" d="M7.828 11H20v2H7.828l5.364 5.364l-1.414 1.414L4 12l7.778-7.778l1.414 1.414z"/>',
    "external-link": '<path fill="currentColor" d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3z"/>',
    copy: '<path fill="currentColor" d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1 1 0 0 1 3 21l.003-14c0-.552.45-1 1.006-1zM5.002 8L5 20h10V8zM9 6h8v10h2V4H9z"/>',
    trash: '<path fill="currentColor" d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zm1 2H6v12h12zm-9 3h2v6H9zm4 0h2v6h-2zM9 4v2h6V4z"/>',
    edit: '<path fill="currentColor" d="M6.414 15.89L16.556 5.748l-1.414-1.414L5 14.476v1.414zm.829 2H3v-4.243L14.435 2.212a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414zM3 19.89h18v2H3z"/>',
    settings: '<path fill="currentColor" d="m12 1l9.5 5.5v11L12 23l-9.5-5.5v-11zm0 2.311L4.5 7.653v8.694l7.5 4.342l7.5-4.342V7.653zM12 16a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4"/>',
    user: '<path fill="currentColor" d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 0 0-12 0zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4"/>',
    users: '<path fill="currentColor" d="M2 22a8 8 0 1 1 16 0h-2a6 6 0 0 0-12 0zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m8.284 3.703A8 8 0 0 1 23 22h-2a6 6 0 0 0-3.537-5.473zm-.688-11.29A5.5 5.5 0 0 1 21 8.5a5.5 5.5 0 0 1-5 5.478v-2.013a3.5 3.5 0 0 0 1.041-6.609z"/>',
    download: '<path fill="currentColor" d="M3 19h18v2H3zm10-5.828L19.071 7.1l1.414 1.414L12 17L3.515 8.515L4.929 7.1L11 13.173V2h2z"/>',
    upload: '<path fill="currentColor" d="M3 19h18v2H3zM13 5.828V17h-2V5.828L4.929 11.9l-1.414-1.414L12 2l8.485 8.485l-1.414 1.415z"/>',
    menu: '<path fill="currentColor" d="M3 4h18v2H3zm0 7h18v2H3zm0 7h18v2H3z"/>',
    "more-horizontal": '<path fill="currentColor" d="M4.5 10.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5S6 12.825 6 12s-.675-1.5-1.5-1.5m15 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5S21 12.825 21 12s-.675-1.5-1.5-1.5m-7.5 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5s1.5-.675 1.5-1.5s-.675-1.5-1.5-1.5"/>',
    mail: '<path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m17 4.238l-7.928 7.1L4 7.216V19h16zM4.511 5l7.55 6.662L19.502 5z"/>',
    lock: '<path fill="currentColor" d="M19 10h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 0 1 14 0zM5 12v8h14v-8zm6 2h2v4h-2zm6-4V9A5 5 0 0 0 7 9v1z"/>',
    eye: '<path fill="currentColor" d="M12 3c5.392 0 9.878 3.88 10.819 9c-.94 5.12-5.427 9-10.819 9s-9.878-3.88-10.818-9C2.122 6.88 6.608 3 12 3m0 16a9.005 9.005 0 0 0 8.778-7a9.005 9.005 0 0 0-17.555 0A9.005 9.005 0 0 0 12 19m0-2.5a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m0-2a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"/>',
    "eye-off": '<path fill="currentColor" d="M17.883 19.297A10.95 10.95 0 0 1 12 21c-5.392 0-9.878-3.88-10.818-9A11 11 0 0 1 4.52 5.935L1.394 2.808l1.414-1.414l19.799 19.798l-1.414 1.415zM5.936 7.35A8.97 8.97 0 0 0 3.223 12a9.005 9.005 0 0 0 13.201 5.838l-2.028-2.028A4.5 4.5 0 0 1 8.19 9.604zm6.978 6.978l-3.242-3.241a2.5 2.5 0 0 0 3.241 3.241m7.893 2.265l-1.431-1.431A8.9 8.9 0 0 0 20.778 12A9.005 9.005 0 0 0 9.552 5.338L7.974 3.76C9.221 3.27 10.58 3 12 3c5.392 0 9.878 3.88 10.819 9a10.95 10.95 0 0 1-2.012 4.593m-9.084-9.084Q11.86 7.5 12 7.5a4.5 4.5 0 0 1 4.492 4.778z"/>',
    refresh: '<path fill="currentColor" d="M5.463 4.433A9.96 9.96 0 0 1 12 2c5.523 0 10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 0 0 6.46 6.228zm13.074 15.134A9.96 9.96 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0 0 13.54 5.772z"/>',
    calendar: '<path fill="currentColor" d="M9 1v2h6V1h2v2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1zm11 10H4v8h16zM7 5H4v4h16V5h-3v2h-2V5H9v2H7z"/>',
    clock: '<path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m1-8h4v2h-6V7h2z"/>',
    "check-circle": '<path fill="currentColor" d="M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0m8-10C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m5.457 7.457l-1.414-1.414L11 13.086l-2.793-2.793l-1.414 1.414L11 15.914z"/>',
    "x-circle": '<path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-9.414l2.828-2.829l1.415 1.415L13.414 12l2.829 2.828l-1.415 1.415L12 13.414l-2.828 2.829l-1.415-1.415L10.586 12L7.757 9.172l1.415-1.415z"/>',
    shield: '<path fill="currentColor" d="M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976M5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05z"/>',
    globe: '<path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.01 8.01 0 0 0 5.648 6.667M10.03 13c.151 2.439.848 4.73 1.97 6.752A15.9 15.9 0 0 0 13.97 13zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.01 8.01 0 0 0 19.938 13M4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333A8.01 8.01 0 0 0 4.062 11m5.969 0h3.938A15.9 15.9 0 0 0 12 4.248A15.9 15.9 0 0 0 10.03 11m4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.01 8.01 0 0 0-5.648-6.667"/>',
    file: '<path fill="currentColor" d="M9 2.003V2h10.998C20.55 2 21 2.455 21 2.992v18.016a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993V8zM5.83 8H9V4.83zM11 4v5a1 1 0 0 1-1 1H5v10h14V4z"/>',
    folder: '<path fill="currentColor" d="M4 5v14h16V7h-8.414l-2-2zm8.414 0H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414z"/>',
    home: '<path fill="currentColor" d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.223a1 1 0 0 1 1.228 0l8 6.223a1 1 0 0 1 .386.79zm-2-1V9.978l-7-5.444l-7 5.444V19z"/>',
    key: '<path fill="currentColor" d="m10.758 11.828l7.849-7.849l1.414 1.414l-1.414 1.415l2.474 2.474l-1.414 1.415l-2.475-2.475l-1.414 1.414l2.121 2.121l-1.414 1.415l-2.121-2.122l-2.192 2.192a5.002 5.002 0 0 1-7.708 6.293a5 5 0 0 1 6.294-7.707m-.637 6.293A3 3 0 1 0 5.88 13.88a3 3 0 0 0 4.242 4.242"/>',
    link: '<path fill="currentColor" d="M18.364 15.536L16.95 14.12l1.414-1.414a5 5 0 0 0-7.071-7.071L9.878 7.05L8.464 5.636l1.414-1.414a7 7 0 0 1 9.9 9.9zm-2.829 2.828l-1.414 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 0 0 7.07 7.071l1.415-1.414zm-.707-10.607l1.415 1.415l-7.072 7.07l-1.414-1.414z"/>',
    star: '<path fill="currentColor" d="m12 18.26l-7.053 3.948l1.575-7.928L.588 8.792l8.027-.952L12 .5l3.385 7.34l8.027.952l-5.934 5.488l1.575 7.928z"/>',
    "star-outline": '<path fill="currentColor" d="m12 18.26l-7.053 3.948l1.575-7.928L.588 8.792l8.027-.952L12 .5l3.385 7.34l8.027.952l-5.934 5.488l1.575 7.928zm0-2.292l4.247 2.377l-.948-4.773l3.573-3.305l-4.833-.573l-2.038-4.419l-2.039 4.42l-4.833.572l3.573 3.305l-.948 4.773z"/>',
    ban: '<path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16M8.523 7.109l8.368 8.368a6 6 0 0 1-1.414 1.414L7.109 8.523A6 6 0 0 1 8.523 7.11"/>'
  }
}, Rn = {
  style: "fill",
  viewBox: "0 0 32 32",
  icons: {
    check: '<path fill="currentColor" d="m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9z"/>',
    close: '<path fill="currentColor" d="M17.414 16L24 9.414L22.586 8L16 14.586L9.414 8L8 9.414L14.586 16L8 22.586L9.414 24L16 17.414L22.586 24L24 22.586z"/>',
    "chevron-down": '<path fill="currentColor" d="M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z"/>',
    "chevron-left": '<path fill="currentColor" d="M10 16L20 6l1.4 1.4l-8.6 8.6l8.6 8.6L20 26z"/>',
    "chevron-right": '<path fill="currentColor" d="M22 16L12 26l-1.4-1.4l8.6-8.6l-8.6-8.6L12 6z"/>',
    "chevron-up": '<path fill="currentColor" d="m16 10l10 10l-1.4 1.4l-8.6-8.6l-8.6 8.6L6 20z"/>',
    search: '<path fill="currentColor" d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9"/>',
    plus: '<path fill="currentColor" d="M17 15V8h-2v7H8v2h7v7h2v-7h7v-2z"/>',
    minus: '<path fill="currentColor" d="M8 15h16v2H8z"/>',
    alert: '<path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12"/><path fill="currentColor" d="M15 8h2v11h-2zm1 14a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 22"/>',
    info: '<path fill="currentColor" d="M17 22v-8h-4v2h2v6h-3v2h8v-2zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8"/><path fill="currentColor" d="M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4"/>',
    "arrow-right": '<path fill="currentColor" d="m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z"/>',
    "arrow-left": '<path fill="currentColor" d="m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16z"/>',
    "external-link": '<path fill="currentColor" d="M26 28H6a2.003 2.003 0 0 1-2-2V6a2.003 2.003 0 0 1 2-2h10v2H6v20h20V16h2v10a2.003 2.003 0 0 1-2 2"/><path fill="currentColor" d="M20 2v2h6.586L18 12.586L19.414 14L28 5.414V12h2V2z"/>',
    copy: '<path fill="currentColor" d="M28 10v18H10V10zm0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2"/><path fill="currentColor" d="M4 18H2V4a2 2 0 0 1 2-2h14v2H4Z"/>',
    trash: '<path fill="currentColor" d="M12 12h2v12h-2zm6 0h2v12h-2z"/><path fill="currentColor" d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6Zm4 22V8h16v20Zm4-26h8v2h-8z"/>',
    edit: '<path fill="currentColor" d="M2 26h28v2H2zM25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4zm-5-5L24 7.6l-3 3L17.4 7zM6 22v-3.6l10-10l3.6 3.6l-10 10z"/>',
    settings: '<path fill="currentColor" d="M27 16.76v-1.53l1.92-1.68A2 2 0 0 0 29.3 11l-2.36-4a2 2 0 0 0-1.73-1a2 2 0 0 0-.64.1l-2.43.82a11 11 0 0 0-1.31-.75l-.51-2.52a2 2 0 0 0-2-1.61h-4.68a2 2 0 0 0-2 1.61l-.51 2.52a11.5 11.5 0 0 0-1.32.75l-2.38-.86A2 2 0 0 0 6.79 6a2 2 0 0 0-1.73 1L2.7 11a2 2 0 0 0 .41 2.51L5 15.24v1.53l-1.89 1.68A2 2 0 0 0 2.7 21l2.36 4a2 2 0 0 0 1.73 1a2 2 0 0 0 .64-.1l2.43-.82a11 11 0 0 0 1.31.75l.51 2.52a2 2 0 0 0 2 1.61h4.72a2 2 0 0 0 2-1.61l.51-2.52a11.5 11.5 0 0 0 1.32-.75l2.42.82a2 2 0 0 0 .64.1a2 2 0 0 0 1.73-1l2.28-4a2 2 0 0 0-.41-2.51ZM25.21 24l-3.43-1.16a8.9 8.9 0 0 1-2.71 1.57L18.36 28h-4.72l-.71-3.55a9.4 9.4 0 0 1-2.7-1.57L6.79 24l-2.36-4l2.72-2.4a8.9 8.9 0 0 1 0-3.13L4.43 12l2.36-4l3.43 1.16a8.9 8.9 0 0 1 2.71-1.57L13.64 4h4.72l.71 3.55a9.4 9.4 0 0 1 2.7 1.57L25.21 8l2.36 4l-2.72 2.4a8.9 8.9 0 0 1 0 3.13L27.57 20Z"/><path fill="currentColor" d="M16 22a6 6 0 1 1 6-6a5.94 5.94 0 0 1-6 6m0-10a3.91 3.91 0 0 0-4 4a3.91 3.91 0 0 0 4 4a3.91 3.91 0 0 0 4-4a3.91 3.91 0 0 0-4-4"/>',
    user: '<path fill="currentColor" d="M16 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7m10 28h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5H6v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7Z"/>',
    users: '<path fill="currentColor" d="M30 30h-2v-5a5.006 5.006 0 0 0-5-5v-2a7.01 7.01 0 0 1 7 7Zm-8 0h-2v-5a5.006 5.006 0 0 0-5-5H9a5.006 5.006 0 0 0-5 5v5H2v-5a7.01 7.01 0 0 1 7-7h6a7.01 7.01 0 0 1 7 7ZM20 2v2a5 5 0 0 1 0 10v2a7 7 0 0 0 0-14m-8 2a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7"/>',
    download: '<path fill="currentColor" d="M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4Zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10z"/>',
    upload: '<path fill="currentColor" d="m6 18l1.41 1.41L15 11.83V30h2V11.83l7.59 7.58L26 18L16 8zM6 8V4h20v4h2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4Z"/>',
    menu: '<path fill="currentColor" d="M4 6h24v2H4zm0 18h24v2H4zm0-12h24v2H4zm0 6h24v2H4z"/>',
    "more-horizontal": '<circle cx="8" cy="16" r="2" fill="currentColor"/><circle cx="16" cy="16" r="2" fill="currentColor"/><circle cx="24" cy="16" r="2" fill="currentColor"/>',
    mail: '<path fill="currentColor" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z"/>',
    lock: '<path fill="currentColor" d="M24 14h-2V8a6 6 0 0 0-12 0v6H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2M12 8a4 4 0 0 1 8 0v6h-8Zm12 20H8V16h16Z"/>',
    eye: '<path fill="currentColor" d="M30.94 15.66A16.69 16.69 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68M16 25c-5.3 0-10.9-3.93-12.93-9C5.1 10.93 10.7 7 16 7s10.9 3.93 12.93 9C26.9 21.07 21.3 25 16 25"/><path fill="currentColor" d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6m0 10a4 4 0 1 1 4-4a4 4 0 0 1-4 4"/>',
    "eye-off": '<path fill="currentColor" d="m5.24 22.51l1.43-1.42A14.06 14.06 0 0 1 3.07 16C5.1 10.93 10.7 7 16 7a12.4 12.4 0 0 1 4 .72l1.55-1.56A14.7 14.7 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68a16 16 0 0 0 4.18 6.17"/><path fill="currentColor" d="M12 15.73a4 4 0 0 1 3.7-3.7l1.81-1.82a6 6 0 0 0-7.33 7.33Zm18.94-.07a16.4 16.4 0 0 0-5.74-7.44L30 3.41L28.59 2L2 28.59L3.41 30l5.1-5.1A15.3 15.3 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68M20 16a4 4 0 0 1-6 3.44L19.44 14a4 4 0 0 1 .56 2m-4 9a13.05 13.05 0 0 1-6-1.58l2.54-2.54a6 6 0 0 0 8.35-8.35l2.87-2.87A14.54 14.54 0 0 1 28.93 16C26.9 21.07 21.3 25 16 25"/>',
    refresh: '<path fill="currentColor" d="M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8Zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8Z"/>',
    calendar: '<path fill="currentColor" d="M26 4h-4V2h-2v2h-8V2h-2v2H6c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 22H6V12h20zm0-16H6V6h4v2h2V6h8v2h2V6h4z"/>',
    clock: '<path fill="currentColor" d="M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4"/><path fill="currentColor" d="M20.59 22L15 16.41V7h2v8.58l5 5.01z"/>',
    "check-circle": '<path fill="currentColor" d="m14 21.414l-5-5.001L10.413 15L14 18.586L21.585 11L23 12.415z"/><path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12"/>',
    "x-circle": '<path fill="currentColor" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12"/><path fill="currentColor" d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"/>',
    shield: '<path fill="currentColor" d="M14 16.59L11.41 14L10 15.41l4 4l8-8L20.59 10z"/><path fill="currentColor" d="m16 30l-6.176-3.293A10.98 10.98 0 0 1 4 17V4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v13a10.98 10.98 0 0 1-5.824 9.707ZM6 4v13a8.99 8.99 0 0 0 4.766 7.942L16 27.733l5.234-2.79A8.99 8.99 0 0 0 26 17V4Z"/>',
    globe: '<path fill="currentColor" d="M14 4a7 7 0 1 1-7 7a7 7 0 0 1 7-7m0-2a9 9 0 1 0 9 9a9 9 0 0 0-9-9"/><path fill="currentColor" d="M28 11a13.96 13.96 0 0 0-4.105-9.895L22.48 2.52a11.994 11.994 0 0 1-16.924 17l-.038-.038l-1.414 1.414A13.96 13.96 0 0 0 14 25v3h-4v2h10v-2h-4v-3.16A14.01 14.01 0 0 0 28 11"/>',
    file: '<path fill="currentColor" d="m25.7 9.3l-7-7c-.2-.2-.4-.3-.7-.3H8c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-.3-.1-.5-.3-.7M18 4.4l5.6 5.6H18zM24 28H8V4h8v6c0 1.1.9 2 2 2h6z"/><path fill="currentColor" d="M10 22h12v2H10zm0-6h12v2H10z"/>',
    folder: '<path fill="currentColor" d="m11.17 6l3.42 3.41l.58.59H28v16H4V6zm0-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H16l-3.41-3.41A2 2 0 0 0 11.17 4"/>',
    home: '<path fill="currentColor" d="M16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621V26a2.004 2.004 0 0 0 2 2h20a2.004 2.004 0 0 0 2-2V13.63L29.757 15L31 13.428ZM18 26h-4v-8h4Zm2 0v-8a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v8H6V12.062l10-7.79l10 7.8V26Z"/>',
    key: '<path fill="currentColor" d="M30 9h-2l-2 7l-2-7h-2l3 9v5h2v-5zm-9 2V9h-8v14h8v-2h-6v-4h5v-2h-5v-4zM11 9H8.894L5 15.553V9H3v14h2v-4.294l.928-1.485L8.894 23H11l-3.89-7.57z"/>',
    link: '<path fill="currentColor" d="M29.25 6.76a6 6 0 0 0-8.5 0l1.42 1.42a4 4 0 1 1 5.67 5.67l-8 8a4 4 0 1 1-5.67-5.66l1.41-1.42l-1.41-1.42l-1.42 1.42a6 6 0 0 0 0 8.5A6 6 0 0 0 17 25a6 6 0 0 0 4.27-1.76l8-8a6 6 0 0 0-.02-8.48"/><path fill="currentColor" d="M4.19 24.82a4 4 0 0 1 0-5.67l8-8a4 4 0 0 1 5.67 0A3.94 3.94 0 0 1 19 14a4 4 0 0 1-1.17 2.85L15.71 19l1.42 1.42l2.12-2.12a6 6 0 0 0-8.51-8.51l-8 8a6 6 0 0 0 0 8.51A6 6 0 0 0 7 28a6.07 6.07 0 0 0 4.28-1.76l-1.42-1.42a4 4 0 0 1-5.67 0"/>',
    star: '<path fill="currentColor" d="m16 2l-4.55 9.22l-10.17 1.47l7.36 7.18L6.9 30l9.1-4.78L25.1 30l-1.74-10.13l7.36-7.17l-10.17-1.48Z"/>',
    "star-outline": '<path fill="currentColor" d="m16 6.52l2.76 5.58l.46 1l1 .15l6.16.89l-4.38 4.3l-.75.73l.18 1l1.05 6.13l-5.51-2.89L16 23l-.93.49l-5.51 2.85l1-6.13l.18-1l-.74-.77l-4.42-4.35l6.16-.89l1-.15l.46-1zM16 2l-4.55 9.22l-10.17 1.47l7.36 7.18L6.9 30l9.1-4.78L25.1 30l-1.74-10.13l7.36-7.17l-10.17-1.48Z"/>',
    ban: '<path fill="currentColor" d="M26 28H6c-1.103 0-2-.897-2-2V6c0-1.103.897-2 2-2h20c1.103 0 2 .897 2 2v20c0 1.103-.897 2-2 2M6 6v20h20.002L26 6zm6.868 17.496l-1.736-.992l8-14l1.736.992z"/>'
  }
}, Bn = {
  style: "stroke",
  viewBox: "0 0 512 512",
  icons: {
    check: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 128L192 384l-96-96"/>',
    close: '<path fill="currentColor" d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z"/>',
    "chevron-down": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="m112 184l144 144l144-144"/>',
    "chevron-left": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112L184 256l144 144"/>',
    "chevron-right": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="m184 112l144 144l-144 144"/>',
    "chevron-up": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="m112 328l144-144l144 144"/>',
    search: '<path fill="currentColor" d="M456.69 421.39L362.6 327.3a173.8 173.8 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.8 173.8 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3M97.92 222.72a124.8 124.8 0 1 1 124.8 124.8a124.95 124.95 0 0 1-124.8-124.8"/>',
    plus: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288m144-144H112"/>',
    minus: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M400 256H112"/>',
    alert: '<path fill="currentColor" d="M449.07 399.08L278.64 82.58c-12.08-22.44-44.26-22.44-56.35 0L51.87 399.08A32 32 0 0 0 80 446.25h340.89a32 32 0 0 0 28.18-47.17m-198.6-1.83a20 20 0 1 1 20-20a20 20 0 0 1-20 20m21.72-201.15l-5.74 122a16 16 0 0 1-32 0l-5.74-121.95a21.73 21.73 0 0 1 21.5-22.69h.21a21.74 21.74 0 0 1 21.73 22.7Z"/>',
    info: '<path fill="currentColor" d="M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200s200-89.72 200-200S366.28 56 256 56m0 82a26 26 0 1 1-26 26a26 26 0 0 1 26-26m48 226h-88a16 16 0 0 1 0-32h28v-88h-16a16 16 0 0 1 0-32h32a16 16 0 0 1 16 16v104h28a16 16 0 0 1 0 32"/>',
    "arrow-right": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="m268 112l144 144l-144 144m124-144H100"/>',
    "arrow-left": '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M244 400L100 256l144-144M120 256h292"/>',
    "external-link": '<path fill="currentColor" d="M224 304a16 16 0 0 1-11.31-27.31l157.94-157.94A55.7 55.7 0 0 0 344 112H104a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h240a56.06 56.06 0 0 0 56-56V168a55.7 55.7 0 0 0-6.75-26.63L235.31 299.31A15.92 15.92 0 0 1 224 304"/><path fill="currentColor" d="M448 48H336a16 16 0 0 0 0 32h73.37l-38.74 38.75a56.35 56.35 0 0 1 22.62 22.62L432 102.63V176a16 16 0 0 0 32 0V64a16 16 0 0 0-16-16"/>',
    copy: '<path fill="currentColor" d="M408 480H184a72 72 0 0 1-72-72V184a72 72 0 0 1 72-72h224a72 72 0 0 1 72 72v224a72 72 0 0 1-72 72"/><path fill="currentColor" d="M160 80h235.88A72.12 72.12 0 0 0 328 32H104a72 72 0 0 0-72 72v224a72.12 72.12 0 0 0 48 67.88V160a80 80 0 0 1 80-80"/>',
    trash: '<path fill="none" d="M296 64h-80a7.91 7.91 0 0 0-8 8v24h96V72a7.91 7.91 0 0 0-8-8"/><path fill="currentColor" d="M432 96h-96V72a40 40 0 0 0-40-40h-80a40 40 0 0 0-40 40v24H80a16 16 0 0 0 0 32h17l19 304.92c1.42 26.85 22 47.08 48 47.08h184c26.13 0 46.3-19.78 48-47l19-305h17a16 16 0 0 0 0-32M192.57 416H192a16 16 0 0 1-16-15.43l-8-224a16 16 0 1 1 32-1.14l8 224A16 16 0 0 1 192.57 416M272 400a16 16 0 0 1-32 0V176a16 16 0 0 1 32 0Zm32-304h-96V72a7.91 7.91 0 0 1 8-8h80a7.91 7.91 0 0 1 8 8Zm32 304.57A16 16 0 0 1 320 416h-.58A16 16 0 0 1 304 399.43l8-224a16 16 0 1 1 32 1.14Z"/>',
    edit: '<path fill="currentColor" d="M459.94 53.25a16.06 16.06 0 0 0-23.22-.56L424.35 65a8 8 0 0 0 0 11.31l11.34 11.32a8 8 0 0 0 11.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38M399.34 90L218.82 270.2a9 9 0 0 0-2.31 3.93L208.16 299a3.91 3.91 0 0 0 4.86 4.86l24.85-8.35a9 9 0 0 0 3.93-2.31L422 112.66a9 9 0 0 0 0-12.66l-9.95-10a9 9 0 0 0-12.71 0"/><path fill="currentColor" d="M386.34 193.66L264.45 315.79A41.1 41.1 0 0 1 247.58 326l-25.9 8.67a35.92 35.92 0 0 1-44.33-44.33l8.67-25.9a41.1 41.1 0 0 1 10.19-16.87l122.13-121.91a8 8 0 0 0-5.65-13.66H104a56 56 0 0 0-56 56v240a56 56 0 0 0 56 56h240a56 56 0 0 0 56-56V199.31a8 8 0 0 0-13.66-5.65"/>',
    settings: '<circle cx="256" cy="256" r="48" fill="currentColor"/><path fill="currentColor" d="m470.39 300l-.47-.38l-31.56-24.75a16.11 16.11 0 0 1-6.1-13.33v-11.56a16 16 0 0 1 6.11-13.22L469.92 212l.47-.38a26.68 26.68 0 0 0 5.9-34.06l-42.71-73.9a1.6 1.6 0 0 1-.13-.22A26.86 26.86 0 0 0 401 92.14l-.35.13l-37.1 14.93a15.94 15.94 0 0 1-14.47-1.29q-4.92-3.1-10-5.86a15.94 15.94 0 0 1-8.19-11.82l-5.59-39.59l-.12-.72A27.22 27.22 0 0 0 298.76 26h-85.52a26.92 26.92 0 0 0-26.45 22.39l-.09.56l-5.57 39.67a16 16 0 0 1-8.13 11.82a175 175 0 0 0-10 5.82a15.92 15.92 0 0 1-14.43 1.27l-37.13-15l-.35-.14a26.87 26.87 0 0 0-32.48 11.34l-.13.22l-42.77 73.95a26.71 26.71 0 0 0 5.9 34.1l.47.38l31.56 24.75a16.11 16.11 0 0 1 6.1 13.33v11.56a16 16 0 0 1-6.11 13.22L42.08 300l-.47.38a26.68 26.68 0 0 0-5.9 34.06l42.71 73.9a1.6 1.6 0 0 1 .13.22a26.86 26.86 0 0 0 32.45 11.3l.35-.13l37.07-14.93a15.94 15.94 0 0 1 14.47 1.29q4.92 3.11 10 5.86a15.94 15.94 0 0 1 8.19 11.82l5.56 39.59l.12.72A27.22 27.22 0 0 0 213.24 486h85.52a26.92 26.92 0 0 0 26.45-22.39l.09-.56l5.57-39.67a16 16 0 0 1 8.18-11.82c3.42-1.84 6.76-3.79 10-5.82a15.92 15.92 0 0 1 14.43-1.27l37.13 14.95l.35.14a26.85 26.85 0 0 0 32.48-11.34a3 3 0 0 1 .13-.22l42.71-73.89a26.7 26.7 0 0 0-5.89-34.11m-134.48-40.24a80 80 0 1 1-83.66-83.67a80.21 80.21 0 0 1 83.66 83.67"/>',
    user: '<path fill="currentColor" d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38c-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6M432 480H80a31 31 0 0 1-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75c1.94 10.73-.68 21.34-7.18 29.11A31 31 0 0 1 432 480"/>',
    users: '<path fill="currentColor" d="M336 256c-20.56 0-40.44-9.18-56-25.84c-15.13-16.25-24.37-37.92-26-61c-1.74-24.62 5.77-47.26 21.14-63.76S312 80 336 80c23.83 0 45.38 9.06 60.7 25.52c15.47 16.62 23 39.22 21.26 63.63c-1.67 23.11-10.9 44.77-26 61C376.44 246.82 356.57 256 336 256m131.83 176H204.18a27.71 27.71 0 0 1-22-10.67a30.22 30.22 0 0 1-5.26-25.79c8.42-33.81 29.28-61.85 60.32-81.08C264.79 297.4 299.86 288 336 288c36.85 0 71 9 98.71 26.05c31.11 19.13 52 47.33 60.38 81.55a30.27 30.27 0 0 1-5.32 25.78A27.68 27.68 0 0 1 467.83 432M147 260c-35.19 0-66.13-32.72-69-72.93c-1.42-20.6 5-39.65 18-53.62c12.86-13.83 31-21.45 51-21.45s38 7.66 50.93 21.57c13.1 14.08 19.5 33.09 18 53.52c-2.87 40.2-33.8 72.91-68.93 72.91m65.66 31.45c-17.59-8.6-40.42-12.9-65.65-12.9c-29.46 0-58.07 7.68-80.57 21.62c-25.51 15.83-42.67 38.88-49.6 66.71a27.39 27.39 0 0 0 4.79 23.36A25.32 25.32 0 0 0 41.72 400h111a8 8 0 0 0 7.87-6.57c.11-.63.25-1.26.41-1.88c8.48-34.06 28.35-62.84 57.71-83.82a8 8 0 0 0-.63-13.39c-1.57-.92-3.37-1.89-5.42-2.89"/>',
    download: '<path fill="currentColor" d="M376 160H272v153.37l52.69-52.68a16 16 0 0 1 22.62 22.62l-80 80a16 16 0 0 1-22.62 0l-80-80a16 16 0 0 1 22.62-22.62L240 313.37V160H136a56.06 56.06 0 0 0-56 56v208a56.06 56.06 0 0 0 56 56h240a56.06 56.06 0 0 0 56-56V216a56.06 56.06 0 0 0-56-56M272 48a16 16 0 0 0-32 0v112h32Z"/>',
    upload: '<path d="M398.1 233.2c0-1.2.2-2.4.2-3.6 0-65-51.8-117.6-115.7-117.6-46.1 0-85.7 27.4-104.3 67-8.1-4.1-17.2-6.5-26.8-6.5-29.5 0-54.1 21.9-58.8 50.5C57.3 235.2 32 269.1 32 309c0 50.2 40.1 91 89.5 91H224v-80h-48.2l80.2-83.7 80.2 83.6H288v80h110.3c45.2 0 81.7-37.5 81.7-83.4 0-45.9-36.7-83.2-81.9-83.3z" fill="currentColor"/>',
    menu: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="48" d="M88 152h336M88 256h336M88 360h336"/>',
    "more-horizontal": '<circle cx="256" cy="256" r="48" fill="currentColor"/><circle cx="416" cy="256" r="48" fill="currentColor"/><circle cx="96" cy="256" r="48" fill="currentColor"/>',
    mail: '<path fill="currentColor" d="M424 80H88a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h336a56.06 56.06 0 0 0 56-56V136a56.06 56.06 0 0 0-56-56m-14.18 92.63l-144 112a16 16 0 0 1-19.64 0l-144-112a16 16 0 1 1 19.64-25.26L256 251.73l134.18-104.36a16 16 0 0 1 19.64 25.26"/>',
    lock: '<path fill="currentColor" d="M368 192h-16v-80a96 96 0 1 0-192 0v80h-16a64.07 64.07 0 0 0-64 64v176a64.07 64.07 0 0 0 64 64h224a64.07 64.07 0 0 0 64-64V256a64.07 64.07 0 0 0-64-64m-48 0H192v-80a64 64 0 1 1 128 0Z"/>',
    eye: '<circle cx="256" cy="256" r="64" fill="currentColor"/><path fill="currentColor" d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11c-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72c38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 0 0-.1-34.76M256 352a96 96 0 1 1 96-96a96.11 96.11 0 0 1-96 96"/>',
    "eye-off": '<path fill="currentColor" d="M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448M248 315.85l-51.79-51.79a2 2 0 0 0-3.39 1.69a64.11 64.11 0 0 0 53.49 53.49a2 2 0 0 0 1.69-3.39m16-119.7L315.87 248a2 2 0 0 0 3.4-1.69a64.13 64.13 0 0 0-53.55-53.55a2 2 0 0 0-1.72 3.39"/><path fill="currentColor" d="M491 273.36a32.2 32.2 0 0 0-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.5 226.5 0 0 0-71.82 11.79a4 4 0 0 0-1.56 6.63l47.24 47.24a4 4 0 0 0 3.82 1.05a96 96 0 0 1 116 116a4 4 0 0 0 1.05 3.81l67.95 68a4 4 0 0 0 5.4.24a343.8 343.8 0 0 0 67.24-77.4M256 352a96 96 0 0 1-93.3-118.63a4 4 0 0 0-1.05-3.81l-66.84-66.87a4 4 0 0 0-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.2 238.2 0 0 0 72.64-11.55a4 4 0 0 0 1.61-6.64l-47.47-47.46a4 4 0 0 0-3.81-1.05A96 96 0 0 1 256 352"/>',
    refresh: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M320 146s24.36-12-64-12a160 160 0 1 0 160 160"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m256 58l80 80l-80 80"/>',
    calendar: '<path fill="currentColor" d="M480 128a64 64 0 0 0-64-64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 48v16H96a64 64 0 0 0-64 64v12a4 4 0 0 0 4 4h440a4 4 0 0 0 4-4ZM32 416a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V179a3 3 0 0 0-3-3H35a3 3 0 0 0-3 3Zm344-208a24 24 0 1 1-24 24a24 24 0 0 1 24-24m0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m-80-80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m-80-80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m-80-80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24"/>',
    clock: '<path fill="currentColor" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48m96 240h-96a16 16 0 0 1-16-16V128a16 16 0 0 1 32 0v128h80a16 16 0 0 1 0 32"/>',
    "check-circle": '<path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m108.25 138.29l-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32l122.59-145.91a16 16 0 0 1 24.5 20.58"/>',
    "x-circle": '<path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m75.31 260.69a16 16 0 1 1-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 0 1-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0 1 22.62-22.62L256 233.37l52.69-52.68a16 16 0 0 1 22.62 22.62L278.63 256Z"/>',
    shield: '<path fill="currentColor" d="M479.07 111.35a16 16 0 0 0-13.15-14.75C379.89 81.18 343.69 69.12 266 34.16c-7.76-2.89-12.57-2.84-20 0c-77.69 35-113.89 47-199.92 62.44a16 16 0 0 0-13.15 14.75c-3.85 61.1 4.34 118 24.36 169.15a348.9 348.9 0 0 0 71.43 112.41c44.67 47.43 94.2 75.12 119.74 85.6a20 20 0 0 0 15.11 0c27-10.92 74.69-37.82 119.71-85.62a348.9 348.9 0 0 0 71.43-112.39c20.02-51.14 28.21-108.05 24.36-169.15"/>',
    globe: '<path fill="currentColor" d="M340.75 344.49c5.91-20.7 9.82-44.75 11.31-67.84a4.41 4.41 0 0 0-4.46-4.65h-71.06a4.43 4.43 0 0 0-4.47 4.39v55.3a4.44 4.44 0 0 0 4.14 4.38a273.5 273.5 0 0 1 59 11.39a4.45 4.45 0 0 0 5.54-2.97m-17.17 32.82a260 260 0 0 0-46.6-9.09a4.42 4.42 0 0 0-4.91 4.29v65.24a4.47 4.47 0 0 0 6.76 3.7c15.9-9.27 29-24.84 40.84-45.43c1.94-3.36 4.89-9.15 6.67-12.69a4.29 4.29 0 0 0-2.76-6.02m-88.29-8.91a257 257 0 0 0-46.56 8.82c-2.64.76-3.75 4.4-2.55 6.79c1.79 3.56 4 8.11 5.89 11.51c13 23 26.84 37.5 41.24 45.93a4.47 4.47 0 0 0 6.76-3.7v-65.27a4.16 4.16 0 0 0-4.78-4.08m.31-96.4h-71.06a4.41 4.41 0 0 0-4.46 4.64c1.48 23.06 5.37 47.16 11.26 67.84a4.46 4.46 0 0 0 5.59 3a272.2 272.2 0 0 1 59-11.36a4.44 4.44 0 0 0 4.15-4.38V276.4a4.43 4.43 0 0 0-4.48-4.4M277 143.78a235.8 235.8 0 0 0 46.5-9.14a4.3 4.3 0 0 0 2.76-6c-1.79-3.57-4.27-8.68-6.17-12.09c-12.29-22-26.14-37.35-41.24-46a4.48 4.48 0 0 0-6.76 3.7v65.23a4.43 4.43 0 0 0 4.91 4.3m-.46 96.22h71.06a4.39 4.39 0 0 0 4.46-4.58c-1.48-22.77-5.27-47.8-11.16-68.22a4.46 4.46 0 0 0-5.59-2.95c-19 5.74-38.79 10.43-59.09 12a4.4 4.4 0 0 0-4.15 4.32v55.11a4.4 4.4 0 0 0 4.47 4.32M233.31 70.56c-15.42 8.57-29.17 24.43-41.47 46.37c-1.91 3.41-4.19 8.11-6 11.67a4.31 4.31 0 0 0 2.76 6a225.4 225.4 0 0 0 46.54 9.17a4.43 4.43 0 0 0 4.91-4.29V74.26a4.49 4.49 0 0 0-6.74-3.7m2.61 105.7c-20.3-1.55-40.11-6.24-59.09-12a4.46 4.46 0 0 0-5.59 2.95c-5.89 20.42-9.68 45.45-11.16 68.22a4.39 4.39 0 0 0 4.46 4.58h71.06a4.4 4.4 0 0 0 4.47-4.34v-55.09a4.4 4.4 0 0 0-4.15-4.32"/><path fill="currentColor" d="M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61M176.6 430.85a219 219 0 0 1-12.48-19.66c-2-3.69-4.84-9.26-6.73-13.13a7.29 7.29 0 0 0-10.31-3.16c-4.3 2.41-10 5.72-14.13 8.43a147.3 147.3 0 0 1-23.57-22.43a249 249 0 0 1 30.41-18.36c1.86-1 2.77-2.14 2.18-4.18a374.8 374.8 0 0 1-14.09-82.17a4.36 4.36 0 0 0-4.3-4.17H66.84a2 2 0 0 1-2-1.7A98 98 0 0 1 64 256a96 96 0 0 1 .86-14.29a2 2 0 0 1 2-1.7h56.74c2.29 0 4.17-1.32 4.29-3.63a372.7 372.7 0 0 1 14-81.83a4.36 4.36 0 0 0-2.19-5.11a261 261 0 0 1-29.84-17.9a170 170 0 0 1 23.14-22.8c4.08 2.68 9.4 5.71 13.66 8.11a7.89 7.89 0 0 0 11-3.42c1.88-3.87 4-8.18 6.06-11.88a222 222 0 0 1 12.54-19.91A185 185 0 0 1 256 64c28.94 0 55.9 7 80.53 18.46a202 202 0 0 1 12 19c2.59 4.66 5.34 10.37 7.66 15.32a4.29 4.29 0 0 0 5.92 1.94c5.38-2.91 11.21-6.26 16.34-9.63a171.4 171.4 0 0 1 23.2 23a245 245 0 0 1-29.06 17.31a4.35 4.35 0 0 0-2.18 5.12a348.7 348.7 0 0 1 13.85 81.4a4.33 4.33 0 0 0 4.3 4.12l56.62-.07a2 2 0 0 1 2 1.7a117.5 117.5 0 0 1 0 28.62a2 2 0 0 1-2 1.72h-56.67a4.35 4.35 0 0 0-4.3 4.17a367.4 367.4 0 0 1-13.87 81.3a4.45 4.45 0 0 0 2.19 5.19c5 2.59 10.57 5.48 15.37 8.42s9.55 6.08 14.13 9.34a172.7 172.7 0 0 1-23 22.93c-2.44-1.61-5.34-3.44-7.84-4.94c-1.72-1-4.89-2.77-6.65-3.76c-3.82-2.14-7.88-.54-9.79 3.4s-4.83 9.59-6.87 13.25a212 212 0 0 1-12.35 19.53C310.91 442.37 284.94 448 256 448s-54.77-5.63-79.4-17.15"/>',
    file: '<path fill="currentColor" d="M428 224H288a48 48 0 0 1-48-48V36a4 4 0 0 0-4-4h-92a64 64 0 0 0-64 64v320a64 64 0 0 0 64 64h224a64 64 0 0 0 64-64V228a4 4 0 0 0-4-4"/><path fill="currentColor" d="M419.22 188.59L275.41 44.78a2 2 0 0 0-3.41 1.41V176a16 16 0 0 0 16 16h129.81a2 2 0 0 0 1.41-3.41"/>',
    folder: '<path fill="currentColor" d="M496 152a56 56 0 0 0-56-56H220.11a23.9 23.9 0 0 1-13.31-4L179 73.41A55.77 55.77 0 0 0 147.89 64H72a56 56 0 0 0-56 56v48a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8ZM16 392a56 56 0 0 0 56 56h368a56 56 0 0 0 56-56V216a8 8 0 0 0-8-8H24a8 8 0 0 0-8 8Z"/>',
    home: '<path fill="currentColor" d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79Z"/><path fill="currentColor" d="m490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97"/>',
    key: '<path fill="currentColor" d="M218.1 167.17c0 13 0 25.6 4.1 37.4c-43.1 50.6-156.9 184.3-167.5 194.5a20.17 20.17 0 0 0-6.7 15c0 8.5 5.2 16.7 9.6 21.3c6.6 6.9 34.8 33 40 28c15.4-15 18.5-19 24.8-25.2c9.5-9.3-1-28.3 2.3-36s6.8-9.2 12.5-10.4s15.8 2.9 23.7 3c8.3.1 12.8-3.4 19-9.2c5-4.6 8.6-8.9 8.7-15.6c.2-9-12.8-20.9-3.1-30.4s23.7 6.2 34 5s22.8-15.5 24.1-21.6s-11.7-21.8-9.7-30.7c.7-3 6.8-10 11.4-11s25 6.9 29.6 5.9c5.6-1.2 12.1-7.1 17.4-10.4c15.5 6.7 29.6 9.4 47.7 9.4c68.5 0 124-53.4 124-119.2S408.5 48 340 48s-121.9 53.37-121.9 119.17M400 144a32 32 0 1 1-32-32a32 32 0 0 1 32 32"/>',
    link: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M200.66 352H144a96 96 0 0 1 0-192h55.41m113.18 0H368a96 96 0 0 1 0 192h-56.66m-142.27-96h175.86"/>',
    star: '<path fill="currentColor" d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"/>',
    "star-outline": '<path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M480 208H308L256 48l-52 160H32l140 96l-54 160l138-100l138 100l-54-160Z"/>',
    ban: '<circle cx="256" cy="256" r="200" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="48"/><path fill="currentColor" stroke="currentColor" stroke-miterlimit="10" stroke-width="48" d="m114.58 114.58l282.84 282.84"/>'
  }
}, Fn = {
  style: "fill",
  viewBox: "0 0 16 16",
  icons: {
    check: '<path fill-rule="evenodd" d="M12 5l-8 8l-4-4l1.5-1.5L4 10l6.5-6.5L12 5z" fill="currentColor"/>',
    close: '<path fill-rule="evenodd" d="M7.48 8l3.75 3.75l-1.48 1.48L6 9.48l-3.75 3.75l-1.48-1.48L4.52 8L.77 4.25l1.48-1.48L6 6.52l3.75-3.75l1.48 1.48L7.48 8z" fill="currentColor"/>',
    "chevron-down": '<path fill-rule="evenodd" d="M5 11L0 6l1.5-1.5L5 8.25L8.5 4.5L10 6l-5 5z" fill="currentColor"/>',
    "chevron-left": '<path fill-rule="evenodd" d="M5.5 3L7 4.5L3.25 8L7 11.5L5.5 13l-5-5l5-5z" fill="currentColor"/>',
    "chevron-right": '<path fill-rule="evenodd" d="M7.5 8l-5 5L1 11.5L4.75 8L1 4.5L2.5 3l5 5z" fill="currentColor"/>',
    "chevron-up": '<path fill-rule="evenodd" d="M10 10l-1.5 1.5L5 7.75L1.5 11.5L0 10l5-5l5 5z" fill="currentColor"/>',
    search: '<path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3c.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7c0-2.59 2.11-4.7 4.7-4.7c2.59 0 4.7 2.11 4.7 4.7c0 2.59-2.11 4.7-4.7 4.7z" fill="currentColor"/>',
    plus: '<path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z" fill="currentColor"/>',
    minus: '<path fill-rule="evenodd" d="M0 7v2h8V7H0z" fill="currentColor"/>',
    alert: '<path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z" fill="currentColor"/>',
    info: '<path fill-rule="evenodd" d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7c.19-.18.42-.28.7-.28c.28 0 .52.09.7.28c.18.19.28.42.28.7c0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69c-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31c-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69c.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31c.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68c0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7s-7-3.12-7-7s3.14-7 7-7z" fill="currentColor"/>',
    "arrow-right": '<path fill-rule="evenodd" d="M10 8L4 3v3H0v4h4v3l6-5z" fill="currentColor"/>',
    "arrow-left": '<path fill-rule="evenodd" d="M6 3L0 8l6 5v-3h4V6H6V3z" fill="currentColor"/>',
    "external-link": '<path fill-rule="evenodd" d="M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5L6.5 9l3.25-3.25L12 8V2H6z" fill="currentColor"/>',
    trash: '<path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z" fill="currentColor"/>',
    edit: '<path fill-rule="evenodd" d="M0 12v3h3l8-8l-3-3l-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6L9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z" fill="currentColor"/>',
    settings: '<path fill-rule="evenodd" d="M14 8.77v-1.6l-1.94-.64l-.45-1.09l.88-1.84l-1.13-1.13l-1.81.91l-1.09-.45l-.69-1.92h-1.6l-.63 1.94l-1.11.45l-1.84-.88l-1.13 1.13l.91 1.81l-.45 1.09L0 7.23v1.59l1.94.64l.45 1.09l-.88 1.84l1.13 1.13l1.81-.91l1.09.45l.69 1.92h1.59l.63-1.94l1.11-.45l1.84.88l1.13-1.13l-.92-1.81l.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3z" fill="currentColor"/>',
    user: '<path fill-rule="evenodd" d="M12 14.002a.998.998 0 0 1-.998.998H1.001A1 1 0 0 1 0 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4c.173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4c-.229.59 0 1 0 1s4 1.367 4 4v1.002z" fill="currentColor"/>',
    menu: '<path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1c0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1c0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1c0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z" fill="currentColor"/>',
    "more-horizontal": '<path fill-rule="evenodd" d="M11 5H1c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM4 9H2V7h2v2zm3 0H5V7h2v2zm3 0H8V7h2v2z" fill="currentColor"/>',
    mail: '<path fill-rule="evenodd" d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9L1 4h12zM1 5.5l4 3l-4 3v-6zM2 12l3.5-3L7 10.5L8.5 9l3.5 3H2zm11-.5l-4-3l4-3v6z" fill="currentColor"/>',
    lock: '<path fill-rule="evenodd" d="M4 13H3v-1h1v1zm8-6v7c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h1V4c0-2.2 1.8-4 4-4s4 1.8 4 4v2h1c.55 0 1 .45 1 1zM3.8 6h4.41V4c0-1.22-.98-2.2-2.2-2.2c-1.22 0-2.2.98-2.2 2.2v2H3.8zM11 7H2v7h9V7zM4 8H3v1h1V8zm0 2H3v1h1v-1z" fill="currentColor"/>',
    eye: '<path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4c0-2.2 1.8-4 4-4c2.22 0 4 1.8 4 4c0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2c-1.11 0-2-.89-2-2c0-1.11.89-2 2-2c1.11 0 2 .89 2 2z" fill="currentColor"/>',
    "eye-off": '<path fill-rule="evenodd" d="M14.822.854a.5.5 0 1 0-.707-.708l-2.11 2.11C10.89 1.483 9.565.926 8.06.926c-5.06 0-8.06 6-8.06 6s1.162 2.323 3.258 4.078l-2.064 2.065a.5.5 0 1 0 .707.707L14.822.854zM4.86 9.403L6.292 7.97A1.999 1.999 0 0 1 6 6.925c0-1.11.89-2 2-2c.384 0 .741.106 1.045.292l1.433-1.433A3.98 3.98 0 0 0 8 2.925c-2.2 0-4 1.8-4 4c0 .938.321 1.798.859 2.478zm7.005-3.514l1.993-1.992A14.873 14.873 0 0 1 16 6.925s-3 6-7.94 6a6.609 6.609 0 0 1-2.661-.57l1.565-1.566c.33.089.678.136 1.036.136c2.22 0 4-1.78 4-4c0-.358-.047-.705-.136-1.036zM9.338 8.415l.152-.151a1.996 1.996 0 0 1-.152.151z" fill="currentColor"/>',
    refresh: '<path fill-rule="evenodd" d="M10.24 7.4a4.15 4.15 0 0 1-1.2 3.6a4.346 4.346 0 0 1-5.41.54L4.8 10.4L.5 9.8l.6 4.2l1.31-1.26c2.36 1.74 5.7 1.57 7.84-.54a5.876 5.876 0 0 0 1.74-4.46l-1.75-.34zM2.96 5a4.346 4.346 0 0 1 5.41-.54L7.2 5.6l4.3.6l-.6-4.2l-1.31 1.26c-2.36-1.74-5.7-1.57-7.85.54C.5 5.03-.06 6.65.01 8.26l1.75.35A4.17 4.17 0 0 1 2.96 5z" fill="currentColor"/>',
    calendar: '<path fill-rule="evenodd" d="M13 2h-1v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H6v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H2V5h11v9zM5 3H4V1h1v2zm6 0h-1V1h1v2zM6 7H5V6h1v1zm2 0H7V6h1v1zm2 0H9V6h1v1zm2 0h-1V6h1v1zM4 9H3V8h1v1zm2 0H5V8h1v1zm2 0H7V8h1v1zm2 0H9V8h1v1zm2 0h-1V8h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1zm2 0h-1v-1h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1z" fill="currentColor"/>',
    clock: '<path fill-rule="evenodd" d="M8 8h3v2H7c-.55 0-1-.45-1-1V4h2v4zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7s7-3.14 7-7s-3.14-7-7-7z" fill="currentColor"/>',
    "check-circle": '<path fill-rule="evenodd" d="M7 10h2v2H7v-2zm2-6H7v5h2V4zm1.5 1.5l-1 1L12 9l4-4.5l-1-1L12 7l-1.5-1.5zM8 13.7A5.71 5.71 0 0 1 2.3 8c0-3.14 2.56-5.7 5.7-5.7c1.83 0 3.45.88 4.5 2.2l.92-.92A6.947 6.947 0 0 0 8 1C4.14 1 1 4.14 1 8s3.14 7 7 7s7-3.14 7-7l-1.52 1.52c-.66 2.41-2.86 4.19-5.48 4.19v-.01z" fill="currentColor"/>',
    shield: '<path fill-rule="evenodd" d="M7 0L0 2v6.02C0 12.69 5.31 16 7 16c1.69 0 7-3.31 7-7.98V2L7 0zM5 11l1.14-2.8a.568.568 0 0 0-.25-.59C5.33 7.25 5 6.66 5 6c0-1.09.89-2 1.98-2C8.06 4 9 4.91 9 6c0 .66-.33 1.25-.89 1.61c-.19.13-.3.36-.25.59L9 11H5z" fill="currentColor"/>',
    globe: '<path fill-rule="evenodd" d="M7 1C3.14 1 0 4.14 0 8s3.14 7 7 7c.48 0 .94-.05 1.38-.14c-.17-.08-.2-.73-.02-1.09c.19-.41.81-1.45.2-1.8c-.61-.35-.44-.5-.81-.91c-.37-.41-.22-.47-.25-.58c-.08-.34.36-.89.39-.94c.02-.06.02-.27 0-.33c0-.08-.27-.22-.34-.23c-.06 0-.11.11-.2.13c-.09.02-.5-.25-.59-.33c-.09-.08-.14-.23-.27-.34c-.13-.13-.14-.03-.33-.11s-.8-.31-1.28-.48c-.48-.19-.52-.47-.52-.66c-.02-.2-.3-.47-.42-.67c-.14-.2-.16-.47-.2-.41c-.04.06.25.78.2.81c-.05.02-.16-.2-.3-.38c-.14-.19.14-.09-.3-.95s.14-1.3.17-1.75c.03-.45.38.17.19-.13c-.19-.3 0-.89-.14-1.11c-.13-.22-.88.25-.88.25c.02-.22.69-.58 1.16-.92c.47-.34.78-.06 1.16.05c.39.13.41.09.28-.05c-.13-.13.06-.17.36-.13c.28.05.38.41.83.36c.47-.03.05.09.11.22s-.06.11-.38.3c-.3.2.02.22.55.61s.38-.25.31-.55c-.07-.3.39-.06.39-.06c.33.22.27.02.5.08c.23.06.91.64.91.64c-.83.44-.31.48-.17.59c.14.11-.28.3-.28.3c-.17-.17-.19.02-.3.08c-.11.06-.02.22-.02.22c-.56.09-.44.69-.42.83c0 .14-.38.36-.47.58c-.09.2.25.64.06.66c-.19.03-.34-.66-1.31-.41c-.3.08-.94.41-.59 1.08c.36.69.92-.19 1.11-.09c.19.1-.06.53-.02.55c.04.02.53.02.56.61c.03.59.77.53.92.55c.17 0 .7-.44.77-.45c.06-.03.38-.28 1.03.09c.66.36.98.31 1.2.47c.22.16.08.47.28.58c.2.11 1.06-.03 1.28.31c.22.34-.88 2.09-1.22 2.28c-.34.19-.48.64-.84.92s-.81.64-1.27.91c-.41.23-.47.66-.66.8c3.14-.7 5.48-3.5 5.48-6.84c0-3.86-3.14-7-7-7L7 1zm1.64 6.56c-.09.03-.28.22-.78-.08c-.48-.3-.81-.23-.86-.28c0 0-.05-.11.17-.14c.44-.05.98.41 1.11.41c.13 0 .19-.13.41-.05c.22.08.05.13-.05.14zM6.34 1.7c-.05-.03.03-.08.09-.14c.03-.03.02-.11.05-.14c.11-.11.61-.25.52.03c-.11.27-.58.3-.66.25zm1.23.89c-.19-.02-.58-.05-.52-.14c.3-.28-.09-.38-.34-.38c-.25-.02-.34-.16-.22-.19c.12-.03.61.02.7.08c.08.06.52.25.55.38c.02.13 0 .25-.17.25zm1.47-.05c-.14.09-.83-.41-.95-.52c-.56-.48-.89-.31-1-.41c-.11-.1-.08-.19.11-.34c.19-.15.69.06 1 .09c.3.03.66.27.66.55c.02.25.33.5.19.63h-.01z" fill="currentColor"/>',
    file: '<path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z" fill="currentColor"/>',
    folder: '<path fill-rule="evenodd" d="M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z" fill="currentColor"/>',
    home: '<path fill-rule="evenodd" d="M16 9l-3-3V2h-2v2L8 1L0 9h2l1 5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1l1-5h2zm-4 5H9v-4H7v4H4L2.81 7.69L8 2.5l5.19 5.19L12 14z" fill="currentColor"/>',
    key: '<path fill-rule="evenodd" d="M12.83 2.17C12.08 1.42 11.14 1.03 10 1c-1.13.03-2.08.42-2.83 1.17S6.04 3.86 6.01 5c0 .3.03.59.09.89L0 12v1l1 1h2l1-1v-1h1v-1h1v-1h2l1.09-1.11c.3.08.59.11.91.11c1.14-.03 2.08-.42 2.83-1.17S13.97 6.14 14 5c-.03-1.14-.42-2.08-1.17-2.83zM11 5.38c-.77 0-1.38-.61-1.38-1.38c0-.77.61-1.38 1.38-1.38c.77 0 1.38.61 1.38 1.38c0 .77-.61 1.38-1.38 1.38z" fill="currentColor"/>',
    link: '<path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5c0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5c0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor"/>',
    star: '<path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1L4.9 5.36L0 6l3.6 3.26L2.67 14L7 11.67L11.33 14l-.93-4.74L14 6z" fill="currentColor"/>',
    "star-outline": '<path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1L4.9 5.36L0 6l3.6 3.26L2.67 14L7 11.67L11.33 14l-.93-4.74L14 6z" fill="currentColor"/>',
    ban: '<path fill-rule="evenodd" d="M7 1C3.14 1 0 4.14 0 8s3.14 7 7 7s7-3.14 7-7s-3.14-7-7-7zm0 1.3c1.3 0 2.5.44 3.47 1.17l-8 8A5.755 5.755 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zm0 11.41c-1.3 0-2.5-.44-3.47-1.17l8-8c.73.97 1.17 2.17 1.17 3.47c0 3.14-2.56 5.7-5.7 5.7z" fill="currentColor"/>'
  },
  viewBoxBy: {
    check: "0 0 12 16",
    close: "0 0 12 16",
    "chevron-down": "0 0 10 16",
    "chevron-left": "0 0 8 16",
    "chevron-right": "0 0 8 16",
    "chevron-up": "0 0 10 16",
    plus: "0 0 12 16",
    minus: "0 0 8 16",
    info: "0 0 14 16",
    "arrow-right": "0 0 10 16",
    "arrow-left": "0 0 10 16",
    "external-link": "0 0 12 16",
    trash: "0 0 12 16",
    edit: "0 0 14 16",
    settings: "0 0 14 16",
    user: "0 0 12 16",
    menu: "0 0 12 16",
    "more-horizontal": "0 0 12 16",
    mail: "0 0 14 16",
    lock: "0 0 12 16",
    "eye-off": "0 0 16 14",
    refresh: "0 0 12 16",
    calendar: "0 0 14 16",
    clock: "0 0 14 16",
    shield: "0 0 14 16",
    globe: "0 0 14 16",
    file: "0 0 12 16",
    folder: "0 0 14 16",
    key: "0 0 14 16",
    star: "0 0 14 16",
    "star-outline": "0 0 14 16",
    ban: "0 0 14 16"
  }
}, Kn = {
  style: "fill",
  viewBox: "0 0 24 24",
  icons: {
    check: '<path fill="currentColor" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"/>',
    close: '<path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"/>',
    "chevron-down": '<path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"/>',
    "chevron-left": '<path fill="currentColor" d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6z"/>',
    "chevron-right": '<path fill="currentColor" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>',
    "chevron-up": '<path fill="currentColor" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z"/>',
    search: '<path fill="currentColor" d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.52 6.52 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5"/>',
    plus: '<path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"/>',
    minus: '<path fill="currentColor" d="M19 13H5v-2h14z"/>',
    alert: '<path fill="currentColor" d="M13 14h-2V9h2m0 9h-2v-2h2M1 21h22L12 2z"/>',
    info: '<path fill="currentColor" d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/>',
    "arrow-right": '<path fill="currentColor" d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z"/>',
    "arrow-left": '<path fill="currentColor" d="M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11z"/>',
    "external-link": '<path fill="currentColor" d="M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z"/>',
    copy: '<path fill="currentColor" d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12z"/>',
    trash: '<path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/>',
    edit: '<path fill="currentColor" d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z"/>',
    settings: '<path fill="currentColor" d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64z"/>',
    user: '<path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/>',
    users: '<path fill="currentColor" d="M16 17v2H2v-2s0-4 7-4s7 4 7 4m-3.5-9.5A3.5 3.5 0 1 0 9 11a3.5 3.5 0 0 0 3.5-3.5m3.44 5.5A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4M15 4a3.4 3.4 0 0 0-1.93.59a5 5 0 0 1 0 5.82A3.4 3.4 0 0 0 15 11a3.5 3.5 0 0 0 0-7"/>',
    download: '<path fill="currentColor" d="M5 20h14v-2H5m14-9h-4V3H9v6H5l7 7z"/>',
    upload: '<path fill="currentColor" d="M9 16v-6H5l7-7l7 7h-4v6zm-4 4v-2h14v2z"/>',
    menu: '<path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/>',
    "more-horizontal": '<path fill="currentColor" d="M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2"/>',
    mail: '<path fill="currentColor" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"/>',
    lock: '<path fill="currentColor" d="M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3"/>',
    eye: '<path fill="currentColor" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"/>',
    "eye-off": '<path fill="currentColor" d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7"/>',
    refresh: '<path fill="currentColor" d="M17.65 6.35A7.96 7.96 0 0 0 12 4a8 8 0 0 0-8 8a8 8 0 0 0 8 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18a6 6 0 0 1-6-6a6 6 0 0 1 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"/>',
    calendar: '<path fill="currentColor" d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1m-1 11h-5v5h5z"/>',
    clock: '<path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m4.2 14.2L11 13V7h1.5v5.2l4.5 2.7z"/>',
    "check-circle": '<path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"/>',
    "x-circle": '<path fill="currentColor" d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41z"/>',
    shield: '<path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5z"/>',
    globe: '<path fill="currentColor" d="M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41a7.984 7.984 0 0 1 2.9 12.8M11 19.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.22.21-1.79L9 15v1a2 2 0 0 0 2 2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/>',
    file: '<path fill="currentColor" d="M13 9V3.5L18.5 9M6 2c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>',
    folder: '<path fill="currentColor" d="M10 4H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8z"/>',
    home: '<path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"/>',
    key: '<path fill="currentColor" d="M7 14c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m5.6-4c-.8-2.3-3-4-5.6-4c-3.3 0-6 2.7-6 6s2.7 6 6 6c2.6 0 4.8-1.7 5.6-4H16v4h4v-4h3v-4z"/>',
    link: '<path fill="currentColor" d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7a5 5 0 0 0-5 5a5 5 0 0 0 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4a5 5 0 0 0 5-5a5 5 0 0 0-5-5"/>',
    star: '<path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z"/>',
    "star-outline": '<path fill="currentColor" d="m12 15.39l-3.76 2.27l.99-4.28l-3.32-2.88l4.38-.37L12 6.09l1.71 4.04l4.38.37l-3.32 2.88l.99 4.28M22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.45 4.73L5.82 21L12 17.27L18.18 21l-1.64-7.03z"/>',
    ban: '<path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m5 11H7v-2h10v2z" fill="currentColor"/>'
  }
}, Wn = {
  style: "fill",
  viewBox: "0 0 512 512",
  icons: {
    check: '<path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"/>',
    close: '<path fill="currentColor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7L86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256L41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256z"/>',
    "chevron-down": '<path fill="currentColor" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7L86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>',
    "chevron-left": '<path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256L246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>',
    "chevron-right": '<path fill="currentColor" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256L73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>',
    "chevron-up": '<path fill="currentColor" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3L86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/>',
    search: '<path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7l126.6 126.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208M208 352a144 144 0 1 0 0-288a144 144 0 1 0 0 288"/>',
    plus: '<path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v144H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v144c0 17.7 14.3 32 32 32s32-14.3 32-32V288h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H256z"/>',
    minus: '<path fill="currentColor" d="M432 256c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32s14.3-32 32-32h352c17.7 0 32 14.3 32 32"/>',
    alert: '<path fill="currentColor" d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7.2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8.2-40.1l216-368C228.7 39.5 241.8 32 256 32m0 128c-13.3 0-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24m32 224a32 32 0 1 0-64 0a32 32 0 1 0 64 0"/>',
    info: '<path fill="currentColor" d="M256 512a256 256 0 1 0 0-512a256 256 0 1 0 0 512m-40-176h24v-64h-24c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24m40-208a32 32 0 1 1 0 64a32 32 0 1 1 0-64"/>',
    "arrow-right": '<path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>',
    "arrow-left": '<path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.3l105.3-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>',
    "external-link": '<path fill="currentColor" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32zM80 32C35.8 32 0 67.8 0 112v320c0 44.2 35.8 80 80 80h320c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v112c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h112c17.7 0 32-14.3 32-32s-14.3-32-32-32z"/>',
    copy: '<path fill="currentColor" d="M208 0h124.1C344.8 0 357 5.1 366 14.1L433.9 82c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48M48 128h80v64H64v256h192v-32h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48"/>',
    trash: '<path fill="currentColor" d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0h120.4c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64s14.3-32 32-32h96zM32 128h384v320c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64zm96 64c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16m96 0c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16m96 0c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16"/>',
    edit: '<path fill="currentColor" d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0l-30.1 30l97.9 97.9l30.1-30.1c21.9-21.9 21.9-57.3 0-79.2zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5l167.3-167.4l-98-98zM96 64c-53 0-96 43-96 96v256c0 53 43 96 96 96h256c53 0 96-43 96-96v-96c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32z"/>',
    settings: '<path fill="currentColor" d="M495.9 166.6c3.2 8.7.5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4l-55.6 17.8c-8.8 2.8-18.6.3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4c-1.1-8.4-1.7-16.9-1.7-25.5s.6-17.1 1.7-25.4l-43.3-39.4c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160a80 80 0 1 0 0 160"/>',
    user: '<path fill="currentColor" d="M224 256a128 128 0 1 0 0-256a128 128 0 1 0 0 256m-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7c0-98.5-79.8-178.3-178.3-178.3z"/>',
    users: '<path fill="currentColor" d="M144 0a80 80 0 1 1 0 160a80 80 0 1 1 0-160m368 0a80 80 0 1 1 0 160a80 80 0 1 1 0-160M0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96H21.3C9.6 320 0 310.4 0 298.7M405.3 320h-.7c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7c58.9 0 106.7 47.8 106.7 106.7c0 11.8-9.6 21.3-21.3 21.3H405.4zM224 224a96 96 0 1 1 192 0a96 96 0 1 1-192 0m-96 261.3c0-73.6 59.7-133.3 133.3-133.3h117.3c73.7 0 133.4 59.7 133.4 133.3c0 14.7-11.9 26.7-26.7 26.7H154.6c-14.7 0-26.7-11.9-26.7-26.7z"/>',
    download: '<path fill="currentColor" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v242.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-32c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352zm368 56a24 24 0 1 1 0 48a24 24 0 1 1 0-48"/>',
    upload: '<path fill="currentColor" d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0zM64 352h128c0 35.3 28.7 64 64 64s64-28.7 64-64h128c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v-32c0-35.3 28.7-64 64-64m368 104a24 24 0 1 0 0-48a24 24 0 1 0 0 48"/>',
    menu: '<path fill="currentColor" d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32m0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32m448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32"/>',
    "more-horizontal": '<path fill="currentColor" d="M8 256a56 56 0 1 1 112 0a56 56 0 1 1-112 0m160 0a56 56 0 1 1 112 0a56 56 0 1 1-112 0m216-56a56 56 0 1 1 0 112a56 56 0 1 1 0-112"/>',
    mail: '<path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4l217.6 163.2c11.4 8.5 27 8.5 38.4 0l217.6-163.2c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48zM0 176v208c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V176L294.4 339.2a63.9 63.9 0 0 1-76.8 0z"/>',
    lock: '<path fill="currentColor" d="M144 144v48h160v-48c0-44.2-35.8-80-80-80s-80 35.8-80 80m-64 48v-48C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64z"/>',
    eye: '<path fill="currentColor" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32M144 256a144 144 0 1 1 288 0a144 144 0 1 1-288 0m144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3"/>',
    "eye-off": '<path fill="currentColor" d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2s-6.3 25.5 4.1 33.7l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-105.2-82.4c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8zm184.3 144.4c25.5-23.3 59.6-37.5 96.9-37.5c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9.5-13.6 1.4-20.2l-94.3-74.3c-22.8 29.7-39.1 59.3-48.6 82.2c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1c47 43.8 111.7 80.6 192.5 80.6c47.8 0 89.9-12.9 126.2-32.5z"/>',
    refresh: '<path fill="currentColor" d="M463.5 224h8.5c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2S461.9 48.1 455 55l-41.6 41.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2S334.3 224 344 224z"/>',
    calendar: '<path fill="currentColor" d="M96 32v32H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48h-48V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v32H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32m352 160H0v272c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48z"/>',
    clock: '<path fill="currentColor" d="M256 0a256 256 0 1 1 0 512a256 256 0 1 1 0-512m-24 120v136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24"/>',
    "check-circle": '<path fill="currentColor" d="M256 512a256 256 0 1 0 0-512a256 256 0 1 0 0 512m113-303L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>',
    "x-circle": '<path fill="currentColor" d="M256 512a256 256 0 1 0 0-512a256 256 0 1 0 0 512m-81-337c9.4-9.4 24.6-9.4 33.9 0l47 47l47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47l47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47l-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47l-47-47c-9.4-9.4-9.4-24.6 0-33.9"/>',
    shield: '<path fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9l188.3 79.9c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0"/>',
    globe: '<path fill="currentColor" d="M352 256c0 22.2-1.2 43.6-3.3 64H163.4c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64h185.3c2.2 20.4 3.3 41.8 3.3 64m28.8-64h123.1c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64m112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7m-209 0H18.6c30-74.1 93.6-130.9 172-151.6c-25.5 34.2-45.3 87.7-55.3 151.6M8.1 192h123.1c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64m186.6 254.6c-11.6-26-20.9-58.2-27-94.6h176.6c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5c-11.2 10.7-20.5 13.9-27.8 13.9s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6c-78.4-20.7-142-77.5-172-151.6zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6h116.7z"/>',
    file: '<path fill="currentColor" d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm384 64H256V0z"/>',
    folder: '<path fill="currentColor" d="M64 480h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8l-19.2-25.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64"/>',
    home: '<path fill="currentColor" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1v16.2c0 22.1-17.9 40-40 40h-16c-1.1 0-2.2 0-3.3-.1c-1.4.1-2.8.1-4.2.1L416 512h-24c-22.1 0-40-17.9-40-40v-88c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v88c0 22.1-17.9 40-40 40h-55.9c-1.5 0-3-.1-4.5-.2c-1.2.1-2.4.2-3.6.2h-16c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9.1-2.8v-69.7h-32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7l255.4 224.5c8 7 12 15 11 24"/>',
    key: '<path fill="currentColor" d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24v-40h40c13.3 0 24-10.7 24-24v-40h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3m40-256a40 40 0 1 1 0 80a40 40 0 1 1 0-80"/>',
    link: '<path fill="currentColor" d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5l112.2-112.3c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0z"/>',
    star: '<path fill="currentColor" d="M316.9 18c-5.3-11-16.5-18-28.8-18s-23.4 7-28.8 18L195 150.3L51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329l-24.6 145.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5l128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329l104.2-103.1c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7l-143.7-21.2z"/>',
    ban: '<path fill="currentColor" d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5m45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5zM0 256a256 256 0 1 1 512 0a256 256 0 1 1-512 0"/>'
  },
  viewBoxBy: {
    check: "0 0 448 512",
    close: "0 0 384 512",
    "chevron-left": "0 0 320 512",
    "chevron-right": "0 0 320 512",
    plus: "0 0 448 512",
    minus: "0 0 448 512",
    "arrow-right": "0 0 448 512",
    "arrow-left": "0 0 448 512",
    copy: "0 0 448 512",
    trash: "0 0 448 512",
    user: "0 0 448 512",
    users: "0 0 640 512",
    menu: "0 0 448 512",
    "more-horizontal": "0 0 448 512",
    lock: "0 0 448 512",
    eye: "0 0 576 512",
    "eye-off": "0 0 640 512",
    calendar: "0 0 448 512",
    file: "0 0 384 512",
    home: "0 0 576 512",
    link: "0 0 640 512",
    star: "0 0 576 512"
  }
}, Zn = {
  style: "fill",
  viewBox: "0 0 16 16",
  icons: {
    check: '<path fill="currentColor" d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093l3.473-4.425z"/>',
    close: '<path fill="currentColor" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8L4.646 5.354a.5.5 0 0 1 0-.708"/>',
    "chevron-down": '<path fill="currentColor" fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>',
    "chevron-left": '<path fill="currentColor" fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>',
    "chevron-right": '<path fill="currentColor" fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8L4.646 2.354a.5.5 0 0 1 0-.708"/>',
    "chevron-up": '<path fill="currentColor" fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>',
    search: '<path fill="currentColor" d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0"/>',
    plus: '<path fill="currentColor" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>',
    minus: '<path fill="currentColor" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>',
    alert: '<g fill="currentColor"><path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016a.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06a.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017a.2.2 0 0 1-.054-.06a.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z"/><path d="M7.002 12a1 1 0 1 1 2 0a1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/></g>',
    info: '<g fill="currentColor"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path d="m8.93 6.588l-2.29.287l-.082.38l.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319c.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246c-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/></g>',
    "arrow-right": '<path fill="currentColor" fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>',
    "arrow-left": '<path fill="currentColor" fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>',
    "external-link": '<g fill="currentColor" fill-rule="evenodd"><path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/><path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/></g>',
    copy: '<path fill="currentColor" fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>',
    trash: '<g fill="currentColor"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/></g>',
    edit: '<g fill="currentColor"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/></g>',
    settings: '<g fill="currentColor"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492a3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0a2.246 2.246 0 0 1-4.492 0"/><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/></g>',
    user: '<path fill="currentColor" d="M8 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1s1-4 6-4s6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>',
    users: '<path fill="currentColor" d="M15 14s1 0 1-1s-1-4-5-4s-5 3-5 4s1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276c.593.69.758 1.457.76 1.72l-.008.002l-.014.002zM11 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0a3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904c.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724c.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"/>',
    download: '<g fill="currentColor"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/></g>',
    upload: '<g fill="currentColor"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/><path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/></g>',
    menu: '<path fill="currentColor" fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>',
    "more-horizontal": '<path fill="currentColor" d="M3 9.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"/>',
    mail: '<path fill="currentColor" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2l7-4.2V4a1 1 0 0 0-1-1zm13 2.383l-4.708 2.825L15 11.105zm-.034 6.876l-5.64-3.471L8 9.583l-1.326-.795l-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>',
    lock: '<path fill="currentColor" fill-rule="evenodd" d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"/>',
    eye: '<g fill="currentColor"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0"/></g>',
    "eye-off": '<g fill="currentColor"><path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/><path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299l.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/><path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884l-12-12l.708-.708l12 12z"/></g>',
    refresh: '<g fill="currentColor"><path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914a.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/><path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/></g>',
    calendar: '<path fill="currentColor" d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>',
    clock: '<g fill="currentColor"><path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/></g>',
    "check-circle": '<g fill="currentColor"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path d="m10.97 4.97l-.02.022l-3.473 4.425l-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/></g>',
    "x-circle": '<g fill="currentColor"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8L4.646 5.354a.5.5 0 0 1 0-.708"/></g>',
    shield: '<path fill="currentColor" d="M5.338 1.59a61 61 0 0 0-2.837.856a.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025a1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453a7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625a11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43A63 63 0 0 1 5.072.56"/>',
    globe: '<path fill="currentColor" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539a7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539a7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>',
    file: '<path fill="currentColor" d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>',
    folder: '<path fill="currentColor" d="M.54 3.87L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z"/>',
    home: '<path fill="currentColor" d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>',
    key: '<g fill="currentColor"><path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647l.646-.647a.5.5 0 0 1 .708 0l.646.647l.646-.647a.5.5 0 0 1 .708 0l.646.647l.793-.793l-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5"/><path d="M4 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/></g>',
    link: '<g fill="currentColor"><path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9q-.13 0-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/><path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4 4 0 0 1-.82 1H12a3 3 0 1 0 0-6z"/></g>',
    star: '<path fill="currentColor" d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>',
    "star-outline": '<path fill="currentColor" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256l4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73l3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356l-.83 4.73zm4.905-2.767l-3.686 1.894l.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575l-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957l-3.686-1.894a.5.5 0 0 0-.461 0z"/>',
    ban: '<path fill="currentColor" d="M15 8a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0"/>'
  }
}, Un = {
  style: "fill",
  viewBox: "0 0 20 20",
  icons: {
    check: '<path fill="currentColor" d="M4.53 12.97a.75.75 0 0 0-1.06 1.06l4.5 4.5a.75.75 0 0 0 1.06 0l11-11a.75.75 0 0 0-1.06-1.06L8.5 16.94z"/>',
    close: '<path fill="currentColor" d="m4.397 4.554l.073-.084a.75.75 0 0 1 .976-.073l.084.073L12 10.939l6.47-6.47a.75.75 0 1 1 1.06 1.061L13.061 12l6.47 6.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-.976.073l-.084-.073L12 13.061l-6.47 6.47a.75.75 0 0 1-1.06-1.061L10.939 12l-6.47-6.47a.75.75 0 0 1-.072-.976l.073-.084z"/>',
    "chevron-down": '<path fill="currentColor" d="M4.22 8.47a.75.75 0 0 1 1.06 0L12 15.19l6.72-6.72a.75.75 0 1 1 1.06 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L4.22 9.53a.75.75 0 0 1 0-1.06"/>',
    "chevron-left": '<path fill="currentColor" d="M15.53 4.22a.75.75 0 0 1 0 1.06L8.81 12l6.72 6.72a.75.75 0 1 1-1.06 1.06l-7.25-7.25a.75.75 0 0 1 0-1.06l7.25-7.25a.75.75 0 0 1 1.06 0"/>',
    "chevron-right": '<path fill="currentColor" d="M8.47 4.22a.75.75 0 0 0 0 1.06L15.19 12l-6.72 6.72a.75.75 0 1 0 1.06 1.06l7.25-7.25a.75.75 0 0 0 0-1.06L9.53 4.22a.75.75 0 0 0-1.06 0"/>',
    "chevron-up": '<path fill="currentColor" d="M4.22 15.53a.75.75 0 0 0 1.06 0L12 8.81l6.72 6.72a.75.75 0 1 0 1.06-1.06l-7.25-7.25a.75.75 0 0 0-1.06 0l-7.25 7.25a.75.75 0 0 0 0 1.06"/>',
    search: '<path fill="currentColor" d="M16.102 17.162a8 8 0 1 1 1.06-1.06l4.618 4.618a.75.75 0 1 1-1.06 1.06zM17.5 11a6.5 6.5 0 1 0-13 0a6.5 6.5 0 0 0 13 0"/>',
    plus: '<path fill="currentColor" d="M12 3.25a.75.75 0 0 1 .75.75v7.25H20a.75.75 0 0 1 0 1.5h-7.25V20a.75.75 0 0 1-1.5 0v-7.25H4a.75.75 0 0 1 0-1.5h7.25V4a.75.75 0 0 1 .75-.75"/>',
    minus: '<path fill="currentColor" d="M3.754 12.5h16.492a.75.75 0 0 0 0-1.5H3.754a.75.75 0 0 0 0 1.5"/>',
    alert: '<path fill="currentColor" d="M9.138 3.707c1.228-2.276 4.494-2.276 5.721 0l6.743 12.502c1.168 2.165-.4 4.792-2.86 4.793H5.255c-2.46 0-4.028-2.628-2.86-4.793zm4.4.712c-.66-1.225-2.419-1.225-3.08 0L3.715 16.921a1.75 1.75 0 0 0 1.54 2.581h13.487a1.75 1.75 0 0 0 1.54-2.581zM12 15a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0-7.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 12 7.5"/>',
    info: '<path fill="currentColor" d="M12.002 1.999c5.523 0 10.001 4.478 10.001 10.002c0 5.523-4.478 10.001-10.001 10.001C6.478 22.002 2 17.524 2 12.001C2 6.477 6.478 1.999 12.002 1.999m0 1.5a8.502 8.502 0 1 0 0 17.003a8.502 8.502 0 0 0 0-17.003M12 10.5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75M12 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2"/>',
    "arrow-right": '<path fill="currentColor" d="M13.267 4.209a.75.75 0 0 0-1.034 1.086l6.251 5.955H3.75a.75.75 0 0 0 0 1.5h14.734l-6.251 5.954a.75.75 0 0 0 1.034 1.087l7.42-7.067a1 1 0 0 0 .3-.58a.8.8 0 0 0-.001-.29a1 1 0 0 0-.3-.578z"/>',
    "arrow-left": '<path fill="currentColor" d="M10.733 19.79a.75.75 0 0 0 1.034-1.086L5.516 12.75H20.25a.75.75 0 0 0 0-1.5H5.516l6.251-5.955a.75.75 0 0 0-1.034-1.086l-7.42 7.067a1 1 0 0 0-.3.58a.8.8 0 0 0 .001.289a1 1 0 0 0 .3.579z"/>',
    "external-link": '<path fill="currentColor" d="M6.25 4.5A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.783 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75v-4a.75.75 0 0 1 1.5 0v4A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h4a.75.75 0 0 1 0 1.5zM13 3.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0V5.56l-5.22 5.22a.75.75 0 0 1-1.06-1.06l5.22-5.22h-4.69a.75.75 0 0 1-.75-.75"/>',
    copy: '<path fill="currentColor" d="M8.5 8.5H6.25a1.75 1.75 0 0 0-1.75 1.75v7.5c0 .966.784 1.75 1.75 1.75h5c.882 0 1.61-.652 1.73-1.5h1.51a3.25 3.25 0 0 1-3.24 3h-5A3.25 3.25 0 0 1 3 17.75v-7.5A3.25 3.25 0 0 1 6.25 7H8.5zM17.75 3A3.25 3.25 0 0 1 21 6.25v7.5A3.25 3.25 0 0 1 17.75 17h-5a3.25 3.25 0 0 1-3.25-3.25v-7.5A3.25 3.25 0 0 1 12.75 3zm-5 1.5A1.75 1.75 0 0 0 11 6.25v7.5c0 .966.784 1.75 1.75 1.75h5a1.75 1.75 0 0 0 1.75-1.75v-7.5a1.75 1.75 0 0 0-1.75-1.75z"/>',
    trash: '<path fill="currentColor" d="M10 5h4a2 2 0 1 0-4 0M8.5 5a3.5 3.5 0 1 1 7 0h5.75a.75.75 0 0 1 0 1.5h-1.32l-1.17 12.111A3.75 3.75 0 0 1 15.026 22H8.974a3.75 3.75 0 0 1-3.733-3.389L4.07 6.5H2.75a.75.75 0 0 1 0-1.5zm2 4.75a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0zM14.25 9a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75m-7.516 9.467a2.25 2.25 0 0 0 2.24 2.033h6.052a2.25 2.25 0 0 0 2.24-2.033L18.424 6.5H5.576z"/>',
    edit: '<path fill="currentColor" d="M20.952 3.048a3.58 3.58 0 0 0-5.06 0L3.94 15a3.1 3.1 0 0 0-.825 1.476L2.02 21.078a.75.75 0 0 0 .904.903l4.601-1.096a3.1 3.1 0 0 0 1.477-.825l11.95-11.95a3.58 3.58 0 0 0 0-5.06m-4 1.06a2.078 2.078 0 1 1 2.94 2.94L19 7.939L16.06 5zM15 6.062L17.94 9l-10 10c-.21.21-.474.357-.763.426l-3.416.814l.813-3.416c.069-.29.217-.554.427-.764z"/>',
    settings: '<path fill="currentColor" d="M12.012 2.25c.734.008 1.465.093 2.182.253a.75.75 0 0 1 .582.649l.17 1.527a1.384 1.384 0 0 0 1.927 1.116l1.4-.615a.75.75 0 0 1 .85.174a9.8 9.8 0 0 1 2.205 3.792a.75.75 0 0 1-.272.825l-1.241.916a1.38 1.38 0 0 0 0 2.226l1.243.915a.75.75 0 0 1 .272.826a9.8 9.8 0 0 1-2.204 3.792a.75.75 0 0 1-.849.175l-1.406-.617a1.38 1.38 0 0 0-1.926 1.114l-.17 1.526a.75.75 0 0 1-.571.647a9.5 9.5 0 0 1-4.406 0a.75.75 0 0 1-.572-.647l-.169-1.524a1.382 1.382 0 0 0-1.925-1.11l-1.406.616a.75.75 0 0 1-.85-.175a9.8 9.8 0 0 1-2.203-3.796a.75.75 0 0 1 .272-.826l1.243-.916a1.38 1.38 0 0 0 0-2.226l-1.243-.914a.75.75 0 0 1-.272-.826a9.8 9.8 0 0 1 2.205-3.792a.75.75 0 0 1 .85-.174l1.4.615a1.387 1.387 0 0 0 1.93-1.118l.17-1.526a.75.75 0 0 1 .583-.65q1.074-.238 2.201-.252m0 1.5a9 9 0 0 0-1.354.117l-.11.977A2.886 2.886 0 0 1 6.526 7.17l-.899-.394A8.3 8.3 0 0 0 4.28 9.092l.797.587a2.88 2.88 0 0 1 .001 4.643l-.799.588c.32.842.776 1.626 1.348 2.322l.905-.397a2.882 2.882 0 0 1 4.017 2.318l.109.984c.89.15 1.799.15 2.688 0l.11-.984a2.88 2.88 0 0 1 4.018-2.322l.904.396a8.3 8.3 0 0 0 1.348-2.318l-.798-.588a2.88 2.88 0 0 1-.001-4.643l.797-.587a8.3 8.3 0 0 0-1.348-2.317l-.897.393a2.884 2.884 0 0 1-4.023-2.324l-.109-.976a9 9 0 0 0-1.334-.117M12 8.25a3.75 3.75 0 1 1 0 7.5a3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5"/>',
    user: '<path fill="currentColor" d="M17.755 14a2.25 2.25 0 0 1 2.248 2.25v.575c0 .894-.32 1.759-.9 2.438c-1.57 1.833-3.957 2.738-7.103 2.738s-5.532-.905-7.098-2.74a3.75 3.75 0 0 1-.898-2.434v-.578A2.25 2.25 0 0 1 6.253 14zm0 1.5H6.252a.75.75 0 0 0-.75.75v.577c0 .535.192 1.053.54 1.46c1.253 1.469 3.22 2.214 5.957 2.214c2.739 0 4.706-.745 5.963-2.213a2.25 2.25 0 0 0 .54-1.463v-.576a.75.75 0 0 0-.748-.749M12 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10m0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7"/>',
    users: '<path fill="currentColor" d="M5.5 8a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0M8 4a4 4 0 1 0 0 8a4 4 0 0 0 0-8m7.5 5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0M17 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-2.752 13.038c.703.285 1.604.462 2.753.462c2.282 0 3.586-.697 4.297-1.558c.345-.418.52-.84.61-1.163a2.7 2.7 0 0 0 .093-.573v-.027A2.18 2.18 0 0 0 19.822 14H14.18q-.042 0-.082.002c.394.41.68.925.816 1.498h4.908c.372 0 .674.299.679.669l-.003.032q-.006.058-.037.18a1.6 1.6 0 0 1-.32.605c-.35.426-1.172 1.014-3.14 1.014c-.98 0-1.676-.146-2.17-.345c-.108.4-.286.883-.583 1.383M4.25 14A2.25 2.25 0 0 0 2 16.25v.278a2 2 0 0 0 .014.208a4.5 4.5 0 0 0 .778 2.07C3.61 19.974 5.172 21 8 21s4.39-1.025 5.208-2.195a4.5 4.5 0 0 0 .778-2.07a3 3 0 0 0 .014-.207v-.278A2.25 2.25 0 0 0 11.75 14zm-.75 2.507v-.257a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 .75.75v.257l-.007.08a3 3 0 0 1-.514 1.358C11.486 18.65 10.422 19.5 8 19.5s-3.486-.85-3.98-1.555a3 3 0 0 1-.513-1.358z"/>',
    download: '<path fill="currentColor" d="M18.25 20.5a.75.75 0 1 1 0 1.5l-13 .005a.75.75 0 1 1 0-1.5zM11.648 2.014l.102-.007a.75.75 0 0 1 .743.648l.007.102l-.001 13.685l3.722-3.72a.75.75 0 0 1 .976-.073l.085.073a.75.75 0 0 1 .072.976l-.073.084l-4.997 4.997a.75.75 0 0 1-.976.073l-.085-.073l-5.003-4.996a.75.75 0 0 1 .976-1.134l.084.072l3.719 3.714L11 2.756a.75.75 0 0 1 .648-.743l.102-.007z"/>',
    upload: '<path fill="currentColor" d="M18.25 3.51a.75.75 0 1 0 0-1.5l-13-.004a.75.75 0 1 0 0 1.5zm-6.602 18.488l.102.007a.75.75 0 0 0 .743-.649l.007-.101l-.001-13.685l3.722 3.72a.75.75 0 0 0 .976.073l.085-.073a.75.75 0 0 0 .072-.977l-.073-.084l-4.997-4.996a.75.75 0 0 0-.976-.073l-.085.072L6.22 10.23a.75.75 0 0 0 .976 1.134l.084-.073l3.719-3.713L11 21.255c0 .38.282.693.648.743"/>',
    menu: '<path fill="currentColor" d="M2.753 18h18.5a.75.75 0 0 1 .101 1.493l-.101.007h-18.5a.75.75 0 0 1-.102-1.494zh18.5zm0-6.497h18.5a.75.75 0 0 1 .101 1.493l-.101.007h-18.5a.75.75 0 0 1-.102-1.494zh18.5zm-.001-6.5h18.5a.75.75 0 0 1 .102 1.493l-.102.007h-18.5A.75.75 0 0 1 2.65 5.01zh18.5z"/>',
    "more-horizontal": '<g fill="none"><path d="M8.667 12a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0z" fill="currentColor"/><path d="M14.668 12a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0z" fill="currentColor"/><path d="M18.918 13.75a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5z" fill="currentColor"/></g>',
    mail: '<path fill="currentColor" d="M5.25 4h13.5a3.25 3.25 0 0 1 3.245 3.066L22 7.25v9.5a3.25 3.25 0 0 1-3.066 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75v-9.5a3.25 3.25 0 0 1 3.066-3.245zh13.5zM20.5 9.373l-8.15 4.29a.75.75 0 0 1-.603.043l-.096-.042L3.5 9.374v7.376a1.75 1.75 0 0 0 1.606 1.744l.144.006h13.5a1.75 1.75 0 0 0 1.744-1.607l.006-.143zM18.75 5.5H5.25a1.75 1.75 0 0 0-1.744 1.606L3.5 7.25v.429l8.5 4.474l8.5-4.475V7.25a1.75 1.75 0 0 0-1.607-1.744z"/>',
    lock: '<path d="M12 2a4 4 0 0 1 4 4v2h1.75A2.25 2.25 0 0 1 20 10.25v9.5A2.25 2.25 0 0 1 17.75 22H6.25A2.25 2.25 0 0 1 4 19.75v-9.5A2.25 2.25 0 0 1 6.25 8H8V6a4 4 0 0 1 4-4zm5.75 7.5H6.25a.75.75 0 0 0-.75.75v9.5c0 .414.336.75.75.75h11.5a.75.75 0 0 0 .75-.75v-9.5a.75.75 0 0 0-.75-.75zm-5.75 4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3zm0-10A2.5 2.5 0 0 0 9.5 6v2h5V6A2.5 2.5 0 0 0 12 3.5z" fill="currentColor" fill-rule="nonzero"/>',
    eye: '<path fill="currentColor" d="M12 9.005a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 1.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M12 5.5c4.613 0 8.596 3.15 9.701 7.564a.75.75 0 1 1-1.455.365a8.504 8.504 0 0 0-16.493.004a.75.75 0 0 1-1.456-.363A10 10 0 0 1 12 5.5"/>',
    "eye-off": '<path fill="currentColor" d="M2.22 2.22a.75.75 0 0 0-.073.976l.073.084l4.034 4.035a10 10 0 0 0-3.955 5.75a.75.75 0 0 0 1.455.364a8.5 8.5 0 0 1 3.58-5.034l1.81 1.81A4 4 0 0 0 14.8 15.86l5.919 5.92a.75.75 0 0 0 1.133-.977l-.073-.084l-6.113-6.114l.001-.002l-1.2-1.198l-2.87-2.87h.002l-2.88-2.877l.001-.002l-1.133-1.13L3.28 2.22a.75.75 0 0 0-1.06 0m7.984 9.045l3.535 3.536a2.5 2.5 0 0 1-3.535-3.535M12 5.5c-1 0-1.97.148-2.889.425l1.237 1.236a8.503 8.503 0 0 1 9.899 6.272a.75.75 0 0 0 1.455-.363A10 10 0 0 0 12 5.5m.195 3.51l3.801 3.8a4.003 4.003 0 0 0-3.801-3.8"/>',
    refresh: '<path fill="currentColor" d="M16.25 5.18a.75.75 0 0 0 .142 1.051a7.251 7.251 0 0 1-3.599 12.976l.677-.677a.75.75 0 0 0-.977-1.133l-.084.073l-2 2a.75.75 0 0 0-.073.976l.073.084l2 2a.75.75 0 0 0 1.133-.976l-.072-.084l-.75-.75a8.75 8.75 0 0 0 4.581-15.68a.75.75 0 0 0-1.051.141m-5.72-3.71a.75.75 0 0 0 0 1.06l.75.75a8.75 8.75 0 0 0-4.85 15.47a.75.75 0 1 0 .956-1.157a7.251 7.251 0 0 1 3.82-12.8l-.676.677a.75.75 0 1 0 1.061 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 0 0-1.06 0"/>',
    calendar: '<path fill="currentColor" d="M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zm1.75 5.5h-15v9.25c0 .966.784 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75zm-11.75 6a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m4.25 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m-4.25-4a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m4.25 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m4.25 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m1.5-6H6.25A1.75 1.75 0 0 0 4.5 6.25V7h15v-.75a1.75 1.75 0 0 0-1.75-1.75"/>',
    clock: '<path fill="currentColor" d="M3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m-.007 4.648a.75.75 0 0 0-1.493.102v6l.007.102a.75.75 0 0 0 .743.648h4l.102-.007A.75.75 0 0 0 15.25 12H12V6.75z"/>',
    "check-circle": '<path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 1.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17m-1.25 9.94l4.47-4.47a.75.75 0 0 1 1.133.976l-.073.084l-5 5a.75.75 0 0 1-.976.073l-.084-.073l-2.5-2.5a.75.75 0 0 1 .976-1.133l.084.073zl4.47-4.47z"/>',
    "x-circle": '<path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 1.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17m3.446 4.897l.084.073a.75.75 0 0 1 .073.976l-.073.084L13.061 12l2.47 2.47a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-.976.073l-.084-.073L12 13.061l-2.47 2.47a.75.75 0 0 1-.976.072l-.084-.073a.75.75 0 0 1-.073-.976l.073-.084L10.939 12l-2.47-2.47a.75.75 0 0 1-.072-.976l.073-.084a.75.75 0 0 1 .976-.073l.084.073L12 10.939l2.47-2.47a.75.75 0 0 1 .976-.072"/>',
    shield: '<path fill="currentColor" d="M3 5.75A.75.75 0 0 1 3.75 5c2.663 0 5.258-.943 7.8-2.85a.75.75 0 0 1 .9 0C14.992 4.057 17.587 5 20.25 5a.75.75 0 0 1 .75.75V11c0 5.001-2.958 8.676-8.725 10.948a.75.75 0 0 1-.55 0C5.958 19.676 3 16 3 11zm1.5.728V11c0 4.256 2.453 7.379 7.5 9.442c5.047-2.063 7.5-5.186 7.5-9.442V6.478c-2.577-.152-5.08-1.09-7.5-2.8c-2.42 1.71-4.923 2.648-7.5 2.8"/>',
    globe: '<path fill="currentColor" d="M12 1.998c5.524 0 10.002 4.478 10.002 10.002c0 5.523-4.478 10-10.002 10S2 17.523 2 12C1.999 6.476 6.476 1.998 12 1.998M14.94 16.5H9.061c.652 2.415 1.786 4.002 2.94 4.002s2.286-1.588 2.938-4.002m-7.43 0H4.785a8.53 8.53 0 0 0 4.095 3.41c-.522-.82-.953-1.846-1.27-3.015zm11.705 0h-2.722c-.324 1.335-.792 2.5-1.373 3.411a8.53 8.53 0 0 0 3.91-3.127zM7.094 10H3.736l-.005.017A8.5 8.5 0 0 0 3.5 12a8.5 8.5 0 0 0 .544 3h3.173A20 20 0 0 1 7 12c0-.684.032-1.354.095-2.001m8.303 0H8.603a19 19 0 0 0 .135 5h6.524a19 19 0 0 0 .135-5m4.868 0h-3.358c.062.647.095 1.317.095 2a20 20 0 0 1-.218 3h3.173a8.5 8.5 0 0 0 .545-3c0-.689-.082-1.359-.237-2M8.88 4.088l-.023.008A8.53 8.53 0 0 0 4.25 8.5h3.048c.314-1.752.86-3.278 1.583-4.41m3.12-.591l-.117.005C10.62 3.62 9.397 5.621 8.83 8.5h6.342c-.566-2.87-1.783-4.869-3.045-4.995zm3.12.59l.106.175c.67 1.112 1.177 2.572 1.475 4.237h3.048a8.53 8.53 0 0 0-4.339-4.29z"/>',
    file: '<path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9.828a2 2 0 0 0-.586-1.414l-5.828-5.828A2 2 0 0 0 12.172 2zm-.5 2a.5.5 0 0 1 .5-.5h6V8a2 2 0 0 0 2 2h4.5v10a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5zm11.88 4.5H14a.5.5 0 0 1-.5-.5V4.62z"/>',
    folder: '<path fill="currentColor" d="M3.5 6.25V8h4.629a.75.75 0 0 0 .53-.22l1.53-1.53l-1.53-1.53a.75.75 0 0 0-.53-.22H5.25A1.75 1.75 0 0 0 3.5 6.25m-1.5 0A3.25 3.25 0 0 1 5.25 3h2.879a2.25 2.25 0 0 1 1.59.659L11.562 5.5h7.189A3.25 3.25 0 0 1 22 8.75v9A3.25 3.25 0 0 1 18.75 21H5.25A3.25 3.25 0 0 1 2 17.75zM3.5 9.5v8.25c0 .966.784 1.75 1.75 1.75h13.5a1.75 1.75 0 0 0 1.75-1.75v-9A1.75 1.75 0 0 0 18.75 7h-7.19L9.72 8.841a2.25 2.25 0 0 1-1.591.659z"/>',
    home: '<path fill="currentColor" d="M10.55 2.532a2.25 2.25 0 0 1 2.9 0l6.75 5.692c.507.428.8 1.057.8 1.72v9.31a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75v-5.007a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25v5.007a1.75 1.75 0 0 1-1.75 1.75h-3.5A1.75 1.75 0 0 1 3 19.254v-9.31c0-.663.293-1.292.8-1.72zm1.933 1.147a.75.75 0 0 0-.966 0L4.767 9.37a.75.75 0 0 0-.267.573v9.31c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-5.007c0-.967.784-1.75 1.75-1.75h3.5c.966 0 1.75.783 1.75 1.75v5.007c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-9.31a.75.75 0 0 0-.267-.573z"/>',
    key: '<path fill="currentColor" d="M18.25 7a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M15.5 2.05A6.554 6.554 0 0 0 8.95 8.6c0 .387.05.76.11 1.104a.28.28 0 0 1-.07.244l-6.235 6.236a2.75 2.75 0 0 0-.806 1.944V20.3c0 .966.784 1.75 1.75 1.75h2.5a1.75 1.75 0 0 0 1.75-1.75v-1.25H9.7c.69 0 1.25-.56 1.25-1.25v-1.75h1.75a1.25 1.25 0 0 0 1.25-1.204c.496.128 1.02.204 1.55.204a6.554 6.554 0 0 0 6.55-6.55c0-3.631-2.953-6.45-6.55-6.45M10.45 8.6a5.054 5.054 0 0 1 5.05-5.05c2.802 0 5.05 2.181 5.05 4.95a5.054 5.054 0 0 1-5.05 5.05c-.68 0-1.38-.171-2.005-.44a.75.75 0 0 0-1.046.69v.75H10.7c-.69 0-1.25.56-1.25 1.25v1.75H7.7c-.69 0-1.25.56-1.25 1.25v1.5a.25.25 0 0 1-.25.25H3.7a.25.25 0 0 1-.25-.25v-2.172c0-.331.132-.65.366-.884l6.236-6.235a1.77 1.77 0 0 0 .486-1.564a5 5 0 0 1-.088-.845"/>',
    link: '<path fill="currentColor" d="M9.25 7a.75.75 0 0 1 .11 1.492l-.11.008H7a3.5 3.5 0 0 0-.206 6.994L7 15.5h2.25a.75.75 0 0 1 .11 1.492L9.25 17H7a5 5 0 0 1-.25-9.994L7 7zM17 7a5 5 0 0 1 .25 9.994L17 17h-2.25a.75.75 0 0 1-.11-1.492l.11-.008H17a3.5 3.5 0 0 0 .206-6.994L17 8.5h-2.25a.75.75 0 0 1-.11-1.492L14.75 7zM7 11.25h10a.75.75 0 0 1 .102 1.493L17 12.75H7a.75.75 0 0 1-.102-1.493zh10z"/>',
    star: '<path fill="currentColor" d="M10.788 3.102c.495-1.003 1.926-1.003 2.421 0l2.358 4.778l5.273.766c1.107.16 1.549 1.522.748 2.303l-3.816 3.719l.901 5.25c.19 1.104-.968 1.945-1.959 1.424l-4.716-2.48l-4.715 2.48c-.99.52-2.148-.32-1.96-1.423l.901-5.251l-3.815-3.72c-.801-.78-.359-2.141.748-2.302L8.43 7.88z"/>',
    "star-outline": '<path fill="currentColor" d="M10.788 3.102c.495-1.003 1.926-1.003 2.421 0l2.358 4.778l5.273.766c1.107.16 1.549 1.522.748 2.303l-3.816 3.719l.901 5.25c.19 1.104-.968 1.945-1.959 1.424l-4.716-2.48l-4.715 2.48c-.99.52-2.148-.32-1.96-1.423l.901-5.251l-3.815-3.72c-.801-.78-.359-2.141.748-2.302L8.43 7.88zm1.21.937L9.74 8.614a1.35 1.35 0 0 1-1.016.739l-5.05.734l3.654 3.562c.318.31.463.757.388 1.195l-.862 5.029l4.516-2.375a1.35 1.35 0 0 1 1.257 0l4.516 2.375l-.862-5.03a1.35 1.35 0 0 1 .388-1.194l3.654-3.562l-5.05-.734a1.35 1.35 0 0 1-1.016-.739z"/>',
    ban: '<path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m6.517 4.543L6.543 18.517A8.5 8.5 0 0 0 18.517 6.543M12 3.5a8.5 8.5 0 0 0-6.517 13.957L17.457 5.483A8.47 8.47 0 0 0 12 3.5"/>'
  },
  viewBoxBy: {
    check: "0 0 24 24",
    close: "0 0 24 24",
    "chevron-down": "0 0 24 24",
    "chevron-left": "0 0 24 24",
    "chevron-right": "0 0 24 24",
    "chevron-up": "0 0 24 24",
    search: "0 0 24 24",
    plus: "0 0 24 24",
    minus: "0 0 24 24",
    alert: "0 0 24 24",
    info: "0 0 24 24",
    "arrow-right": "0 0 24 24",
    "arrow-left": "0 0 24 24",
    "external-link": "0 0 24 24",
    copy: "0 0 24 24",
    trash: "0 0 24 24",
    edit: "0 0 24 24",
    settings: "0 0 24 24",
    user: "0 0 24 24",
    users: "0 0 24 24",
    download: "0 0 24 24",
    upload: "0 0 24 24",
    menu: "0 0 24 24",
    "more-horizontal": "0 0 25 24",
    mail: "0 0 24 24",
    lock: "0 0 24 24",
    eye: "0 0 24 24",
    "eye-off": "0 0 24 24",
    refresh: "0 0 24 24",
    calendar: "0 0 24 24",
    clock: "0 0 24 24",
    "check-circle": "0 0 24 24",
    "x-circle": "0 0 24 24",
    shield: "0 0 24 24",
    globe: "0 0 24 24",
    file: "0 0 24 24",
    folder: "0 0 24 24",
    home: "0 0 24 24",
    key: "0 0 24 24",
    link: "0 0 24 24",
    star: "0 0 24 24",
    "star-outline": "0 0 24 24",
    ban: "0 0 24 24"
  }
}, Xn = {
  style: "fill",
  viewBox: "0 0 24 24",
  icons: {
    check: '<path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/>',
    close: '<path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/>',
    "chevron-down": '<path fill="currentColor" d="m12 15.375l-6-6l1.4-1.4l4.6 4.6l4.6-4.6l1.4 1.4z"/>',
    "chevron-left": '<path fill="currentColor" d="m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6z"/>',
    "chevron-right": '<path fill="currentColor" d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"/>',
    "chevron-up": '<path fill="currentColor" d="m7.4 15.375l-1.4-1.4l6-6l6 6l-1.4 1.4l-4.6-4.6z"/>',
    search: '<path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/>',
    plus: '<path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"/>',
    minus: '<path fill="currentColor" d="M5 13v-2h14v2z"/>',
    alert: '<path fill="currentColor" d="M1 21L12 2l11 19zm11.713-3.287Q13 17.425 13 17t-.288-.712T12 16t-.712.288T11 17t.288.713T12 18t.713-.288M11 15h2v-5h-2z"/>',
    info: '<path fill="currentColor" d="M11 17h2v-6h-2zm1.713-8.287Q13 8.425 13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9t.713-.288M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/>',
    "arrow-right": '<path fill="currentColor" d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8l-1.425-1.4z"/>',
    "arrow-left": '<path fill="currentColor" d="m7.825 13l5.6 5.6L12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2z"/>',
    "external-link": '<path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413T19 21zm4.7-5.3l-1.4-1.4L17.6 5H14V3h7v7h-2V6.4z"/>',
    copy: '<path fill="currentColor" d="M9 18q-.825 0-1.412-.587T7 16V4q0-.825.588-1.412T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.587 1.413T18 18zm-4 4q-.825 0-1.412-.587T3 20V6h2v14h11v2z"/>',
    trash: '<path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"/>',
    edit: '<path fill="currentColor" d="M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"/>',
    settings: '<path fill="currentColor" d="m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zm2.8-6.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5"/>',
    user: '<path fill="currentColor" d="M9.175 10.825Q8 9.65 8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12t-2.825-1.175M4 20v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"/>',
    users: '<path fill="currentColor" d="M1 20v-2.8q0-.85.438-1.562T2.6 14.55q1.55-.775 3.15-1.162T9 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T17 17.2V20zm18 0v-3q0-1.1-.612-2.113T16.65 13.15q1.275.15 2.4.513t2.1.887q.9.5 1.375 1.112T23 17v3zM6.175 10.825Q5 9.65 5 8t1.175-2.825T9 4t2.825 1.175T13 8t-1.175 2.825T9 12t-2.825-1.175m11.65 0Q16.65 12 15 12q-.275 0-.7-.062t-.7-.138q.675-.8 1.038-1.775T15 8t-.362-2.025T13.6 4.2q.35-.125.7-.163T15 4q1.65 0 2.825 1.175T19 8t-1.175 2.825"/>',
    download: '<path fill="currentColor" d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"/>',
    upload: '<path fill="currentColor" d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16zm-5 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"/>',
    menu: '<path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"/>',
    "more-horizontal": '<path fill="currentColor" d="M6 14q-.825 0-1.412-.587T4 12t.588-1.412T6 10t1.413.588T8 12t-.587 1.413T6 14m6 0q-.825 0-1.412-.587T10 12t.588-1.412T12 10t1.413.588T14 12t-.587 1.413T12 14m6 0q-.825 0-1.412-.587T16 12t.588-1.412T18 10t1.413.588T20 12t-.587 1.413T18 14"/>',
    mail: '<path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"/>',
    lock: '<path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm7.413-5.587Q14 15.825 14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17t1.413-.587M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6z"/>',
    eye: '<path fill="currentColor" d="M15.188 14.688Q16.5 13.375 16.5 11.5t-1.312-3.187T12 7T8.813 8.313T7.5 11.5t1.313 3.188T12 16t3.188-1.312m-5.1-1.276Q9.3 12.625 9.3 11.5t.788-1.912T12 8.8t1.913.788t.787 1.912t-.787 1.913T12 14.2t-1.912-.787m-4.738 3.55Q2.35 14.925 1 11.5q1.35-3.425 4.35-5.462T12 4t6.65 2.038T23 11.5q-1.35 3.425-4.35 5.463T12 19t-6.65-2.037"/>',
    "eye-off": '<path fill="currentColor" d="m19.8 22.6l-4.2-4.15q-.875.275-1.762.413T12 19q-3.775 0-6.725-2.087T1 11.5q.525-1.325 1.325-2.463T4.15 7L1.4 4.2l1.4-1.4l18.4 18.4zM12 16q.275 0 .513-.025t.512-.1l-5.4-5.4q-.075.275-.1.513T7.5 11.5q0 1.875 1.313 3.188T12 16m7.3.45l-3.175-3.15q.175-.425.275-.862t.1-.938q0-1.875-1.312-3.187T12 7q-.5 0-.937.1t-.863.3L7.65 4.85q1.025-.425 2.1-.637T12 4q3.775 0 6.725 2.088T23 11.5q-.575 1.475-1.513 2.738T19.3 16.45m-4.625-4.6l-3-3q.7-.125 1.288.113t1.012.687t.613 1.038t.087 1.162"/>',
    refresh: '<path fill="currentColor" d="M12 20q-3.35 0-5.675-2.325T4 12t2.325-5.675T12 4q1.725 0 3.3.712T18 6.75V4h2v7h-7V9h4.2q-.8-1.4-2.187-2.2T12 6Q9.5 6 7.75 7.75T6 12t1.75 4.25T12 18q1.925 0 3.475-1.1T17.65 14h2.1q-.7 2.65-2.85 4.325T12 20"/>',
    calendar: '<path fill="currentColor" d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5z"/>',
    clock: '<path fill="currentColor" d="m15.3 16.7l1.4-1.4l-3.7-3.7V7h-2v5.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/>',
    "check-circle": '<path fill="currentColor" d="m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/>',
    "x-circle": '<path fill="currentColor" d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/>',
    shield: '<path fill="currentColor" d="M12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.262 6.913T12 22"/>',
    globe: '<path fill="currentColor" d="M8.1 21.213q-1.825-.788-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22t-3.9-.788M11 19.95V18q-.825 0-1.412-.587T9 16v-1l-4.8-4.8q-.075.45-.137.9T4 12q0 3.025 1.988 5.3T11 19.95m6.9-2.55q1.025-1.125 1.563-2.512T20 12q0-2.45-1.362-4.475T15 4.6V5q0 .825-.587 1.413T13 7h-2v2q0 .425-.288.713T10 10H8v2h6q.425 0 .713.288T15 13v3h1q.65 0 1.175.388T17.9 17.4"/>',
    file: '<path fill="currentColor" d="M8 18h8v-2H8zm0-4h8v-2H8zm-2 8q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm7-13h5l-5-5z"/>',
    folder: '<path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20z"/>',
    home: '<path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z"/>',
    key: '<path fill="currentColor" d="M9.125 14.125Q10 13.25 10 12t-.875-2.125T7 9t-2.125.875T4 12t.875 2.125T7 15t2.125-.875M7 18q-2.5 0-4.25-1.75T1 12t1.75-4.25T7 6q2.025 0 3.538 1.15T12.65 10h8.375L23 11.975l-3.5 4L17 14l-2 2l-2-2h-.35q-.625 1.8-2.175 2.9T7 18"/>',
    link: '<path fill="currentColor" d="M11 17H7q-2.075 0-3.537-1.463T2 12t1.463-3.537T7 7h4v2H7q-1.25 0-2.125.875T4 12t.875 2.125T7 15h4zm-3-4v-2h8v2zm5 4v-2h4q1.25 0 2.125-.875T20 12t-.875-2.125T17 9h-4V7h4q2.075 0 3.538 1.463T22 12t-1.463 3.538T17 17z"/>',
    star: '<path fill="currentColor" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/>',
    "star-outline": '<path fill="currentColor" d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zM5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275zM12 12.25"/>',
    ban: '<path fill="currentColor" d="M8.1 21.213q-1.825-.788-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22t-3.9-.788m8.825-2.887q.4-.3.75-.65t.65-.75L7.075 5.675q-.4.3-.75.65t-.65.75z"/>'
  }
}, Gn = {
  style: "fill",
  viewBox: "0 0 24 24",
  icons: {
    github: '<path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>',
    gitlab: '<path fill="currentColor" d="m23.6 9.593l-.033-.086L20.3.98a.85.85 0 0 0-.336-.405a.875.875 0 0 0-1 .054a.9.9 0 0 0-.29.44L16.47 7.818H7.537L5.333 1.07a.86.86 0 0 0-.29-.441a.875.875 0 0 0-1-.054a.86.86 0 0 0-.336.405L.433 9.502l-.032.086a6.066 6.066 0 0 0 2.012 7.01l.01.009l.03.021l4.977 3.727l2.462 1.863l1.5 1.132a1.01 1.01 0 0 0 1.22 0l1.499-1.132l2.461-1.863l5.006-3.75l.013-.01a6.07 6.07 0 0 0 2.01-7.002"/>',
    figma: '<path fill="currentColor" d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491M12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539m-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019c1.705 0 3.093-1.376 3.093-3.068v-2.97zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49m-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019z"/>',
    slack: '<path fill="currentColor" d="M5.042 15.165a2.53 2.53 0 0 1-2.52 2.523A2.53 2.53 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52a2.527 2.527 0 0 1 2.521 2.52v6.313A2.53 2.53 0 0 1 8.834 24a2.53 2.53 0 0 1-2.521-2.522zM8.834 5.042a2.53 2.53 0 0 1-2.521-2.52A2.53 2.53 0 0 1 8.834 0a2.53 2.53 0 0 1 2.521 2.522v2.52zm0 1.271a2.53 2.53 0 0 1 2.521 2.521a2.53 2.53 0 0 1-2.521 2.521H2.522A2.53 2.53 0 0 1 0 8.834a2.53 2.53 0 0 1 2.522-2.521zm10.122 2.521a2.53 2.53 0 0 1 2.522-2.521A2.53 2.53 0 0 1 24 8.834a2.53 2.53 0 0 1-2.522 2.521h-2.522zm-1.268 0a2.53 2.53 0 0 1-2.523 2.521a2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.53 2.53 0 0 1 2.523 2.522zm-2.523 10.122a2.53 2.53 0 0 1 2.523 2.522A2.53 2.53 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522zm0-1.268a2.527 2.527 0 0 1-2.52-2.523a2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.53 2.53 0 0 1-2.522 2.523z"/>',
    stripe: '<path fill="currentColor" d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409c0-.831.683-1.305 1.901-1.305c2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0C9.667 0 7.589.654 6.104 1.872C4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219c2.585.92 3.445 1.574 3.445 2.583c0 .98-.84 1.545-2.354 1.545c-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813c1.664-1.305 2.525-3.236 2.525-5.732c0-4.128-2.524-5.851-6.594-7.305z"/>',
    docker: '<path fill="currentColor" d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51q-.508.001-1.01.087c-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199l-.226.327c-.284.438-.49.922-.612 1.43c-.23.97-.09 1.882.403 2.661c-.595.332-1.55.413-1.744.42H.751a.75.75 0 0 0-.75.748a11.4 11.4 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124c1.18.723 3.1 1.137 5.275 1.137a15.7 15.7 0 0 0 2.93-.266a12.3 12.3 0 0 0 3.823-1.389a10.5 10.5 0 0 0 2.61-2.136c1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009c.309-.293.55-.65.707-1.046l.098-.288Z"/>',
    google: '<path fill="currentColor" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133c-1.147 1.147-2.933 2.4-6.053 2.4c-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0C5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36c2.16-2.16 2.84-5.213 2.84-7.667c0-.76-.053-1.467-.173-2.053z"/>',
    microsoft: '<path fill="currentColor" d="M0 0v11.408h11.408V0zm12.594 0v11.408H24V0zM0 12.594V24h11.408V12.594zm12.594 0V24H24V12.594z"/>',
    apple: '<path fill="currentColor" d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04c-2.04.027-3.91 1.183-4.961 3.014c-2.117 3.675-.546 9.103 1.519 12.09c1.013 1.454 2.208 3.09 3.792 3.039c1.52-.065 2.09-.987 3.935-.987c1.831 0 2.35.987 3.96.948c1.637-.026 2.676-1.48 3.676-2.948c1.156-1.688 1.636-3.325 1.662-3.415c-.039-.013-3.182-1.221-3.22-4.857c-.026-3.04 2.48-4.494 2.597-4.559c-1.429-2.09-3.623-2.324-4.39-2.376c-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83c-1.207.052-2.662.805-3.532 1.818c-.78.896-1.454 2.338-1.273 3.714c1.338.104 2.715-.688 3.559-1.701"/>',
    react: '<path fill="currentColor" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236a2.236 2.236 0 0 1-2.236-2.236a2.236 2.236 0 0 1 2.235-2.236a2.236 2.236 0 0 1 2.236 2.236m2.648-10.69c-1.346 0-3.107.96-4.888 2.622c-1.78-1.653-3.542-2.602-4.887-2.602c-.41 0-.783.093-1.106.278c-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03c-.704 3.113-.39 5.588.988 6.38c.32.187.69.275 1.102.275c1.345 0 3.107-.96 4.888-2.624c1.78 1.654 3.542 2.603 4.887 2.603c.41 0 .783-.09 1.106-.275c1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032c.704-3.11.39-5.587-.988-6.38a2.17 2.17 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127c.666.382.955 1.835.73 3.704c-.054.46-.142.945-.25 1.44a23.5 23.5 0 0 0-3.107-.534A24 24 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28c-.686.72-1.37 1.537-2.02 2.442a23 23 0 0 0-3.113.538a15 15 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707c.19-.09.4-.127.563-.132zm4.882 3.05q.684.704 1.36 1.564c-.44-.02-.89-.034-1.345-.034q-.691-.001-1.36.034c.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093q.61.874 1.183 1.86q.557.961 1.018 1.946c-.308.655-.646 1.31-1.013 1.95c-.38.66-.773 1.288-1.18 1.87a25.6 25.6 0 0 1-4.412.005a27 27 0 0 1-1.183-1.86q-.557-.961-1.018-1.946a25 25 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25 25 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16q-.336.585-.635 1.174c-.265-.656-.49-1.31-.676-1.947c.64-.15 1.315-.283 2.015-.386zm7.26 0q1.044.153 2.006.387c-.18.632-.405 1.282-.66 1.933a26 26 0 0 0-1.345-2.32zm3.063.675q.727.226 1.375.498c1.732.74 2.852 1.708 2.852 2.476c-.005.768-1.125 1.74-2.857 2.475c-.42.18-.88.342-1.355.493a24 24 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23 23 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5c-1.732-.737-2.852-1.706-2.852-2.474s1.12-1.742 2.852-2.476c.42-.18.88-.342 1.356-.494m11.678 4.28c.265.657.49 1.312.676 1.948c-.64.157-1.316.29-2.016.39a26 26 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175q.345.586.705 1.143a22 22 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423c.23 1.868-.054 3.32-.714 3.708c-.147.09-.338.128-.563.128c-1.012 0-2.514-.807-4.11-2.28c.686-.72 1.37-1.536 2.02-2.44c1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532c.66.905 1.345 1.727 2.035 2.446c-1.595 1.483-3.092 2.295-4.11 2.295a1.2 1.2 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703c.054-.46.142-.944.25-1.438zm4.56.64q.661.032 1.345.034q.691.001 1.36-.034c-.44.572-.895 1.095-1.345 1.565q-.684-.706-1.36-1.565"/>',
    vuedotjs: '<path fill="currentColor" d="M24 1.61h-9.94L12 5.16L9.94 1.61H0l12 20.78ZM12 14.08L5.16 2.23h4.43L12 6.41l2.41-4.18h4.43Z"/>',
    npm: '<path fill="currentColor" d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019l-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"/>',
    nextdotjs: '<path fill="currentColor" d="M18.665 21.978A11.94 11.94 0 0 1 12 24C5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251zm-3.332-8.533l1.6 2.061V7.2h-1.6z"/>',
    nodedotjs: '<path fill="currentColor" d="M11.998 24c-.321 0-.641-.084-.922-.247L8.14 22.016c-.438-.245-.224-.332-.08-.383c.585-.203.703-.25 1.328-.604c.065-.037.151-.023.218.017l2.256 1.339a.29.29 0 0 0 .272 0l8.795-5.076a.28.28 0 0 0 .134-.238V6.921a.28.28 0 0 0-.137-.242l-8.791-5.072a.28.28 0 0 0-.271 0L3.075 6.68a.28.28 0 0 0-.139.241v10.15a.27.27 0 0 0 .139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745c-.508 0-.909 0-2.026-.551L2.28 18.675a1.86 1.86 0 0 1-.922-1.604V6.921c0-.659.353-1.275.922-1.603L11.075.236a1.93 1.93 0 0 1 1.848 0l8.794 5.082c.57.329.924.944.924 1.603v10.15a1.86 1.86 0 0 1-.924 1.604l-8.794 5.078c-.28.163-.599.247-.925.247m7.101-10.007c0-1.9-1.284-2.406-3.987-2.763c-2.731-.361-3.009-.548-3.009-1.187c0-.528.235-1.233 2.258-1.233c1.807 0 2.473.389 2.747 1.607a.254.254 0 0 0 .247.199h1.141a.26.26 0 0 0 .186-.081a.26.26 0 0 0 .067-.196c-.177-2.098-1.571-3.076-4.388-3.076c-2.508 0-4.004 1.058-4.004 2.833c0 1.925 1.488 2.457 3.895 2.695c2.88.282 3.103.703 3.103 1.269c0 .983-.789 1.402-2.642 1.402c-2.327 0-2.839-.584-3.011-1.742a.255.255 0 0 0-.253-.215h-1.137a.25.25 0 0 0-.254.253c0 1.482.806 3.248 4.655 3.248c2.788.001 4.386-1.096 4.386-3.013"/>',
    python: '<path fill="currentColor" d="m14.25.18l.9.2l.73.26l.59.3l.45.32l.34.34l.25.34l.16.33l.1.3l.04.26l.02.2l-.01.13V8.5l-.05.63l-.13.55l-.21.46l-.26.38l-.3.31l-.33.25l-.35.19l-.35.14l-.33.1l-.3.07l-.26.04l-.21.02H8.77l-.69.05l-.59.14l-.5.22l-.41.27l-.33.32l-.27.35l-.2.36l-.15.37l-.1.35l-.07.32l-.04.27l-.02.21v3.06H3.17l-.21-.03l-.28-.07l-.32-.12l-.35-.18l-.36-.26l-.36-.36l-.35-.46l-.32-.59l-.28-.73l-.21-.88l-.14-1.05l-.05-1.23l.06-1.22l.16-1.04l.24-.87l.32-.71l.36-.57l.4-.44l.42-.33l.42-.24l.4-.16l.36-.1l.32-.05l.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75l-.02-.37l.05-.34l.11-.31l.17-.28l.25-.26l.31-.23l.38-.2l.44-.18l.51-.15l.58-.12l.64-.1l.71-.06l.77-.04l.84-.02l1.27.05zm-6.3 1.98l-.23.33l-.08.41l.08.41l.23.34l.33.22l.41.09l.41-.09l.33-.22l.23-.34l.08-.41l-.08-.41l-.23-.33l-.33-.22l-.41-.09l-.41.09zm13.09 3.95l.28.06l.32.12l.35.18l.36.27l.36.35l.35.47l.32.59l.28.73l.21.88l.14 1.04l.05 1.23l-.06 1.23l-.16 1.04l-.24.86l-.32.71l-.36.57l-.4.45l-.42.33l-.42.24l-.4.16l-.36.09l-.32.05l-.24.02l-.16-.01h-8.22v.82h5.84l.01 2.76l.02.36l-.05.34l-.11.31l-.17.29l-.25.25l-.31.24l-.38.2l-.44.17l-.51.15l-.58.13l-.64.09l-.71.07l-.77.04l-.84.01l-1.27-.04l-1.07-.14l-.9-.2l-.73-.25l-.59-.3l-.45-.33l-.34-.34l-.25-.34l-.16-.33l-.1-.3l-.04-.25l-.02-.2l.01-.13v-5.34l.05-.64l.13-.54l.21-.46l.26-.38l.3-.32l.33-.24l.35-.2l.35-.14l.33-.1l.3-.06l.26-.04l.21-.02l.13-.01h5.84l.69-.05l.59-.14l.5-.21l.41-.28l.33-.32l.27-.35l.2-.36l.15-.36l.1-.35l.07-.32l.04-.28l.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33l-.08.41l.08.41l.23.33l.33.23l.41.08l.41-.08l.33-.23l.23-.33l.08-.41l-.08-.41l-.23-.33l-.33-.23l-.41-.08l-.41.08z"/>',
    openai: '<path fill="currentColor" d="M22.282 9.821a6 6 0 0 0-.516-4.91a6.05 6.05 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a6 6 0 0 0-3.998 2.9a6.05 6.05 0 0 0 .743 7.097a5.98 5.98 0 0 0 .51 4.911a6.05 6.05 0 0 0 6.515 2.9A6 6 0 0 0 13.26 24a6.06 6.06 0 0 0 5.772-4.206a6 6 0 0 0 3.997-2.9a6.06 6.06 0 0 0-.747-7.073M13.26 22.43a4.48 4.48 0 0 1-2.876-1.04l.141-.081l4.779-2.758a.8.8 0 0 0 .392-.681v-6.737l2.02 1.168a.07.07 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494M3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085l4.783 2.759a.77.77 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646M2.34 7.896a4.5 4.5 0 0 1 2.366-1.973V11.6a.77.77 0 0 0 .388.677l5.815 3.354l-2.02 1.168a.08.08 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.08.08 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667m2.01-3.023l-.141-.085l-4.774-2.782a.78.78 0 0 0-.785 0L9.409 9.23V6.897a.07.07 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.8.8 0 0 0-.393.681zm1.097-2.365l2.602-1.5l2.607 1.5v2.999l-2.597 1.5l-2.607-1.5Z"/>',
    discord: '<path fill="currentColor" d="M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.3 18.3 0 0 0-5.487 0a13 13 0 0 0-.617-1.25a.08.08 0 0 0-.079-.037A19.7 19.7 0 0 0 3.677 4.37a.1.1 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.08.08 0 0 0 .084-.028a14 14 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13 13 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10 10 0 0 0 .372-.292a.07.07 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.07.07 0 0 1 .078.01q.181.149.373.292a.077.077 0 0 1-.006.127a12.3 12.3 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.08.08 0 0 0 .084.028a19.8 19.8 0 0 0 6.002-3.03a.08.08 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03M8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418m7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418"/>',
    x: '<path fill="currentColor" d="M14.234 10.162L22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299l-.929-1.329L3.076 1.56h3.182l5.965 8.532l.929 1.329l7.754 11.09h-3.182z"/>',
    linkedin: '<path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>',
    youtube: '<path fill="currentColor" d="M23.498 6.186a3.02 3.02 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.02 3.02 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.02 3.02 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.02 3.02 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814M9.545 15.568V8.432L15.818 12z"/>',
    instagram: '<path fill="currentColor" d="M7.03.084c-1.277.06-2.149.264-2.91.563a5.9 5.9 0 0 0-2.124 1.388a5.9 5.9 0 0 0-1.38 2.127C.321 4.926.12 5.8.064 7.076s-.069 1.688-.063 4.947s.021 3.667.083 4.947c.061 1.277.264 2.149.563 2.911c.308.789.72 1.457 1.388 2.123a5.9 5.9 0 0 0 2.129 1.38c.763.295 1.636.496 2.913.552c1.278.056 1.689.069 4.947.063s3.668-.021 4.947-.082c1.28-.06 2.147-.265 2.91-.563a5.9 5.9 0 0 0 2.123-1.388a5.9 5.9 0 0 0 1.38-2.129c.295-.763.496-1.636.551-2.912c.056-1.28.07-1.69.063-4.948c-.006-3.258-.02-3.667-.081-4.947c-.06-1.28-.264-2.148-.564-2.911a5.9 5.9 0 0 0-1.387-2.123a5.9 5.9 0 0 0-2.128-1.38c-.764-.294-1.636-.496-2.914-.55C15.647.009 15.236-.006 11.977 0S8.31.021 7.03.084m.14 21.693c-1.17-.05-1.805-.245-2.228-.408a3.7 3.7 0 0 1-1.382-.895a3.7 3.7 0 0 1-.9-1.378c-.165-.423-.363-1.058-.417-2.228c-.06-1.264-.072-1.644-.08-4.848c-.006-3.204.006-3.583.061-4.848c.05-1.169.246-1.805.408-2.228c.216-.561.477-.96.895-1.382a3.7 3.7 0 0 1 1.379-.9c.423-.165 1.057-.361 2.227-.417c1.265-.06 1.644-.072 4.848-.08c3.203-.006 3.583.006 4.85.062c1.168.05 1.804.244 2.227.408c.56.216.96.475 1.382.895s.681.817.9 1.378c.165.422.362 1.056.417 2.227c.06 1.265.074 1.645.08 4.848c.005 3.203-.006 3.583-.061 4.848c-.051 1.17-.245 1.805-.408 2.23c-.216.56-.477.96-.896 1.38a3.7 3.7 0 0 1-1.378.9c-.422.165-1.058.362-2.226.418c-1.266.06-1.645.072-4.85.079s-3.582-.006-4.848-.06m9.783-16.192a1.44 1.44 0 1 0 1.437-1.442a1.44 1.44 0 0 0-1.437 1.442M5.839 12.012a6.161 6.161 0 1 0 12.323-.024a6.162 6.162 0 0 0-12.323.024M8 12.008A4 4 0 1 1 12.008 16A4 4 0 0 1 8 12.008"/>',
    facebook: '<path fill="currentColor" d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978c.401 0 .955.042 1.468.103a9 9 0 0 1 1.141.195v3.325a9 9 0 0 0-.653-.036a27 27 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.7 1.7 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103l-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647"/>',
    tiktok: '<path fill="currentColor" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07"/>',
    reddit: '<path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286A.72.72 0 0 0 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0m4.388 3.199a1.999 1.999 0 1 1-1.947 2.46v.002a2.37 2.37 0 0 0-2.032 2.341v.007c1.776.067 3.4.567 4.686 1.363a2.802 2.802 0 1 1 2.908 4.753c-.088 3.256-3.637 5.876-7.997 5.876c-4.361 0-7.905-2.617-7.998-5.87a2.8 2.8 0 0 1 1.189-5.34c.645 0 1.239.218 1.712.585c1.275-.79 2.881-1.291 4.64-1.365v-.01a3.23 3.23 0 0 1 2.88-3.207a2 2 0 0 1 1.959-1.595m-8.085 8.376c-.784 0-1.459.78-1.506 1.797s.64 1.429 1.426 1.429s1.371-.369 1.418-1.385s-.553-1.841-1.338-1.841m7.406 0c-.786 0-1.385.824-1.338 1.841s.634 1.385 1.418 1.385c.785 0 1.473-.413 1.426-1.429c-.046-1.017-.721-1.797-1.506-1.797m-3.703 4.013c-.974 0-1.907.048-2.77.135a.222.222 0 0 0-.183.305a3.2 3.2 0 0 0 2.953 1.964a3.2 3.2 0 0 0 2.953-1.964a.222.222 0 0 0-.184-.305a28 28 0 0 0-2.769-.135"/>',
    twitch: '<path fill="currentColor" d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>',
    spotify: '<path fill="currentColor" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12s12-5.4 12-12S18.66 0 12 0m5.521 17.34c-.24.359-.66.48-1.021.24c-2.82-1.74-6.36-2.101-10.561-1.141c-.418.122-.779-.179-.899-.539c-.12-.421.18-.78.54-.9c4.56-1.021 8.52-.6 11.64 1.32c.42.18.479.659.301 1.02m1.44-3.3c-.301.42-.841.6-1.262.3c-3.239-1.98-8.159-2.58-11.939-1.38c-.479.12-1.02-.12-1.14-.6s.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2m.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721c-.18-.601.18-1.2.72-1.381c4.26-1.26 11.28-1.02 15.721 1.621c.539.3.719 1.02.419 1.56c-.299.421-1.02.599-1.559.3"/>',
    dropbox: '<path fill="currentColor" d="M6 1.807L0 5.629l6 3.822l6.001-3.822zm12 0l-6 3.822l6 3.822l6-3.822zM0 13.274l6 3.822l6.001-3.822L6 9.452zm18-3.822l-6 3.822l6 3.822l6-3.822zM6 18.371l6.001 3.822l6-3.822l-6-3.822z"/>',
    salesforce: '<path fill="currentColor" d="M10.006 5.415a4.2 4.2 0 0 1 3.045-1.306c1.56 0 2.954.9 3.69 2.205c.63-.3 1.35-.45 2.1-.45c2.85 0 5.159 2.34 5.159 5.22s-2.31 5.22-5.176 5.22c-.345 0-.69-.044-1.02-.104a3.75 3.75 0 0 1-3.3 1.95c-.6 0-1.155-.15-1.65-.375A4.31 4.31 0 0 1 8.88 20.4a4.3 4.3 0 0 1-4.05-2.82c-.27.062-.54.076-.825.076c-2.204 0-4.005-1.8-4.005-4.05c0-1.5.811-2.805 2.01-3.51c-.255-.57-.39-1.2-.39-1.846c0-2.58 2.1-4.65 4.65-4.65c1.53 0 2.85.705 3.72 1.8"/>',
    shopify: '<path fill="currentColor" d="m15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136s-1.275-1.274-1.439-1.411a.4.4 0 0 0-.121-.074l-.914 21.104zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141c0 1.232 3.24 1.715 3.24 4.629c0 2.295-1.44 3.76-3.406 3.76c-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066a.944.944 0 0 0 .975-.932c0-1.619-2.654-1.694-2.654-4.359c-.034-2.237 1.571-4.416 4.827-4.416c1.257 0 1.875.361 1.875.361l-.945 2.715zM11.17.83c.136 0 .271.038.405.135c-.984.465-2.064 1.639-2.508 3.992a63 63 0 0 1-1.889.578C7.697 3.75 8.951.84 11.17.84zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736c.466-1.777 1.333-2.645 2.085-2.971c.193.501.309 1.176.309 2.1m.539-2.234c.694.074 1.141.867 1.429 1.755c-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0C8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674c-.675.213-.694.232-.772.87c-.075.462-1.83 14.063-1.83 14.063L15.009 24z"/>',
    wordpress: '<path fill="currentColor" d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175c0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864c0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105c.582-.075.514-.93-.067-.899c0 0-1.755.135-2.88.135c-1.064 0-2.85-.15-2.85-.15c-.585-.03-.661.855-.075.885c0 0 .54.061 1.125.09l1.68 4.605l-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1c.585-.075.516-.93-.065-.896c0 0-1.746.138-2.874.138c-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833c-.046-.003-.091-.009-.141-.009c-1.06 0-1.812.923-1.812 1.914c0 .89.513 1.643 1.06 2.531c.411.72.89 1.643.89 2.977c0 .915-.354 1.994-.821 3.479l-1.075 3.585l-3.9-11.61zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406l3.315 9.087q.036.078.078.149c-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709A10.79 10.79 0 0 1 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12s12-5.385 12-12S18.615 0 12 0"/>',
    linux: '<path fill="currentColor" d="M12.504 0q-.232 0-.48.021c-4.226.333-3.105 4.807-3.17 6.298c-.076 1.092-.3 1.953-1.05 3.02c-.885 1.051-2.127 2.75-2.716 4.521c-.278.832-.41 1.684-.287 2.489a.4.4 0 0 0-.11.135c-.26.268-.45.6-.663.839c-.199.199-.485.267-.797.4c-.313.136-.658.269-.864.68c-.09.189-.136.394-.132.602c0 .199.027.4.055.536c.058.399.116.728.04.97c-.249.68-.28 1.145-.106 1.484c.174.334.535.47.94.601c.81.2 1.91.135 2.774.6c.926.466 1.866.67 2.616.47c.526-.116.97-.464 1.208-.946c.587-.003 1.23-.269 2.26-.334c.699-.058 1.574.267 2.577.2c.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071s1.592-.536 2.257-1.306c.631-.765 1.683-1.084 2.378-1.503c.348-.199.629-.469.649-.853c.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926c-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.36.36 0 0 0-.19-.064c.431-1.278.264-2.55-.173-3.694c-.533-1.41-1.465-2.638-2.175-3.483c-.796-1.005-1.576-1.957-1.56-3.368c.026-2.152.236-6.133-3.544-6.139m.529 3.405h.013c.213 0 .396.062.584.198c.19.135.33.332.438.533c.105.259.158.459.166.724c0-.02.006-.04.006-.06v.105l-.004-.021l-.004-.024a1.8 1.8 0 0 1-.15.706a.95.95 0 0 1-.213.335a1 1 0 0 0-.088-.042c-.104-.045-.198-.064-.284-.133a1.3 1.3 0 0 0-.22-.066c.05-.06.146-.133.183-.198q.08-.193.088-.402v-.02a1.2 1.2 0 0 0-.061-.4c-.045-.134-.101-.2-.183-.333c-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 0 0-.205.334a1.2 1.2 0 0 0-.09.4v.019q.002.134.02.267c-.193-.067-.438-.135-.607-.202a2 2 0 0 1-.018-.2v-.02a1.8 1.8 0 0 1 .15-.768a1.08 1.08 0 0 1 .43-.533a1 1 0 0 1 .594-.2zm-2.962.059h.036c.142 0 .27.048.399.135c.146.129.264.288.344.465c.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024c-.152.055-.274.135-.393.2q.018-.136.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.6.6 0 0 0-.166-.267a.25.25 0 0 0-.183-.064h-.021c-.071.006-.13.04-.186.132a.55.55 0 0 0-.12.27a1 1 0 0 0-.023.33v.015c.012.135.037.2.08.334c.046.134.098.2.166.268q.014.014.034.024c-.07.057-.117.07-.176.136a.3.3 0 0 1-.131.068a2.6 2.6 0 0 1-.275-.402a1.8 1.8 0 0 1-.155-.667a1.8 1.8 0 0 1 .08-.668a1.4 1.4 0 0 1 .283-.535c.128-.133.26-.2.418-.2m1.37 1.706c.332 0 .733.065 1.216.399c.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.57.57 0 0 1 .016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465c-.276.135-.588.292-1.012.267a1.1 1.1 0 0 1-.448-.067a4 4 0 0 1-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71q-.104-.403.193-.6c.224-.135.38-.271.483-.336c.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601c.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473c.286.534.855 1.659 1.102 3.024c.156-.005.33.018.513.064c.646-1.671-.546-3.467-1.089-3.966c-.22-.2-.232-.335-.123-.335c.59.534 1.365 1.572 1.646 2.757c.13.535.16 1.104.021 1.67c.067.028.135.06.205.067c1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224c-.915-.4-1.646-.336-1.77.465c-.008.043-.013.066-.018.135c-.068.023-.139.053-.209.064c-.43.268-.662.669-.793 1.187c-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35c-1.5 1.072-3.58 1.538-5.348.334a2.7 2.7 0 0 0-.402-.533a1.5 1.5 0 0 0-.275-.333c.182 0 .338-.03.465-.067a.62.62 0 0 0 .314-.334c.108-.267 0-.697-.345-1.163s-.931-.995-1.788-1.521c-.63-.4-.986-.87-1.15-1.396c-.165-.534-.143-1.085-.015-1.645c.245-1.07.873-2.11 1.274-2.763c.107-.065.037.135-.408.974c-.396.751-1.14 2.497-.122 3.854a8.1 8.1 0 0 1 .647-2.876c.564-1.278 1.743-3.504 1.836-5.268c.048.036.217.135.289.202c.218.133.38.333.59.465c.21.201.477.335.876.335q.058.005.11.006c.412 0 .73-.134.997-.268c.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377c.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876c.085.4.154.78.409 1.066c.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595c-.63.401-1.746.712-2.457 1.57c-.618.737-1.37 1.14-2.036 1.191c-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69c.176-.668.428-1.344.463-1.897c.037-.714.076-1.335.195-1.814c.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01q.08 0 .157.014c.376.055.706.333 1.023.752l.91 1.664l.003.003c.243.533.754 1.064 1.189 1.637c.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294c-.645.135-1.52.002-2.395-.464c-.968-.536-2.118-.469-2.857-.602q-.553-.1-.723-.4c-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118c-.055-.401-.083-.71.043-.94c.16-.334.396-.4.69-.533c.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838c.19-.201.38-.336.663-.336m7.159-9.074c-.435.201-.945.535-1.488.535c-.542 0-.97-.267-1.28-.466c-.154-.134-.28-.268-.373-.335c-.164-.134-.144-.333-.074-.333c.109.016.129.134.199.2c.096.066.215.2.36.333c.292.2.68.467 1.167.467c.485 0 1.053-.267 1.398-.466c.195-.135.445-.334.648-.467c.156-.136.149-.267.279-.267c.128.016.034.134-.147.332a8 8 0 0 1-.69.468zm-1.082-1.583V5.64c-.006-.02.013-.042.029-.05c.074-.043.18-.027.26.004c.063 0 .16.067.15.135c-.006.049-.085.066-.135.066c-.055 0-.092-.043-.141-.068c-.052-.018-.146-.008-.163-.065m-.551 0c-.02.058-.113.049-.166.066c-.047.025-.086.068-.14.068c-.05 0-.13-.02-.136-.068c-.01-.066.088-.133.15-.133c.08-.031.184-.047.259-.005c.019.009.036.03.03.05v.02h.003z"/>',
    ubuntu: '<path fill="currentColor" d="M17.61.455a3.41 3.41 0 0 0-3.41 3.41a3.41 3.41 0 0 0 3.41 3.41a3.41 3.41 0 0 0 3.41-3.41a3.41 3.41 0 0 0-3.41-3.41M12.92.8C8.923.777 5.137 2.941 3.148 6.451a5 5 0 0 1 .26-.007a4.9 4.9 0 0 1 2.585.737A8.32 8.32 0 0 1 12.688 3.6A4.94 4.94 0 0 1 13.723.834A11 11 0 0 0 12.92.8m9.226 4.994a4.9 4.9 0 0 1-1.918 2.246a8.36 8.36 0 0 1-.273 8.303a4.9 4.9 0 0 1 1.632 2.54a11.16 11.16 0 0 0 .559-13.089M3.41 7.932A3.41 3.41 0 0 0 0 11.342a3.41 3.41 0 0 0 3.41 3.409a3.41 3.41 0 0 0 3.41-3.41a3.41 3.41 0 0 0-3.41-3.41zm2.027 7.866a4.9 4.9 0 0 1-2.915.358a11.1 11.1 0 0 0 7.991 6.698a11.2 11.2 0 0 0 2.422.249a4.88 4.88 0 0 1-.999-2.85a9 9 0 0 1-.836-.136a8.3 8.3 0 0 1-5.663-4.32zm11.405.928a3.41 3.41 0 0 0-3.41 3.41a3.41 3.41 0 0 0 3.41 3.41a3.41 3.41 0 0 0 3.41-3.41a3.41 3.41 0 0 0-3.41-3.41"/>',
    windows: '<path fill="currentColor" d="M0 0h11.377v11.372H0Zm12.623 0H24v11.372H12.623ZM0 12.623h11.377V24H0Zm12.623 0H24V24H12.623"/>',
    android: '<path fill="currentColor" d="M18.44 5.559q-1.015 1.748-2.028 3.498q-.055-.023-.111-.043a12.1 12.1 0 0 0-8.68.033C7.537 8.897 5.868 6.026 5.6 5.56a1 1 0 0 0-.141-.19a1.104 1.104 0 0 0-1.768 1.298c1.947 3.37-.096-.216 1.948 3.36c.017.03-.495.263-1.393 1.017C2.9 12.176.452 14.772 0 18.99h24a11.7 11.7 0 0 0-.746-3.068a12.1 12.1 0 0 0-2.74-4.184a12 12 0 0 0-2.131-1.687c.66-1.122 1.312-2.256 1.965-3.385a1.11 1.11 0 0 0-.008-1.12a1.1 1.1 0 0 0-.852-.532c-.522-.054-.939.313-1.049.545m-.04 8.46c.395.593.324 1.331-.156 1.65c-.48.32-1.188.1-1.582-.493s-.324-1.33.156-1.65c.473-.316 1.182-.11 1.582.494m-11.193-.492c.48.32.55 1.058.156 1.65c-.394.593-1.103.815-1.584.495c-.48-.32-.55-1.058-.156-1.65c.4-.603 1.109-.811 1.584-.495"/>',
    typescript: '<path fill="currentColor" d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75q.918 0 1.627.111a6.4 6.4 0 0 1 1.306.34v2.458a4 4 0 0 0-.643-.361a5 5 0 0 0-.717-.26a5.5 5.5 0 0 0-1.426-.2q-.45 0-.819.086a2.1 2.1 0 0 0-.623.242q-.254.156-.393.374a.9.9 0 0 0-.14.49q0 .294.156.529q.156.234.443.444c.287.21.423.276.696.41q.41.203.926.416q.705.296 1.266.628q.561.333.963.753q.402.418.614.957q.213.538.214 1.253q0 .986-.373 1.656a3 3 0 0 1-1.012 1.085a4.4 4.4 0 0 1-1.487.596q-.85.18-1.79.18a10 10 0 0 1-1.84-.164a5.5 5.5 0 0 1-1.512-.493v-2.63a5.03 5.03 0 0 0 3.237 1.2q.5 0 .872-.09q.373-.09.623-.25q.249-.162.373-.38a1.02 1.02 0 0 0-.074-1.089a2.1 2.1 0 0 0-.537-.5a5.6 5.6 0 0 0-.807-.444a28 28 0 0 0-1.007-.436q-1.377-.575-2.053-1.405t-.676-2.005q0-.92.369-1.582q.368-.662 1.004-1.089a4.5 4.5 0 0 1 1.47-.629a7.5 7.5 0 0 1 1.77-.201m-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>',
    javascript: '<path fill="currentColor" d="M0 0h24v24H0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873c-.736-.345-1.554-.585-1.797-1.14c-.091-.33-.105-.51-.046-.705c.15-.646.915-.84 1.515-.66c.39.12.75.42.976.9c1.034-.676 1.034-.676 1.755-1.125c-.27-.42-.404-.601-.586-.78c-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005c-1.14 1.291-.811 3.541.569 4.471c1.365 1.02 3.361 1.244 3.616 2.205c.24 1.17-.87 1.545-1.966 1.41c-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109c1.74 1.756 6.09 1.666 6.871-1.004c.029-.09.24-.705.074-1.65zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805c0 1.232.063 2.363-.138 2.711c-.33.689-1.18.601-1.566.48c-.396-.196-.597-.466-.83-.855c-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517c.855.51 2.004.675 3.207.405c.783-.226 1.458-.691 1.811-1.411c.51-.93.402-2.07.397-3.346c.012-2.054 0-4.109 0-6.179z"/>',
    visualstudiocode: '<path fill="currentColor" d="M23.15 2.587L18.21.21a1.49 1.49 0 0 0-1.705.29l-9.46 8.63l-4.12-3.128a1 1 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12L.326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a1 1 0 0 0 1.276.057l4.12-3.128l9.46 8.63a1.49 1.49 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352m-5.146 14.861L10.826 12l7.178-5.448z"/>',
    vercel: '<path fill="currentColor" d="m12 1.608l12 20.784H0Z"/>',
    netlify: '<path fill="currentColor" d="M6.49 19.04h-.23L5.13 17.9v-.23l1.73-1.71h1.2l.15.15v1.2L6.5 19.04ZM5.13 6.31V6.1l1.13-1.13h.23L8.2 6.68v1.2l-.15.15h-1.2zm9.96 9.09h-1.65l-.14-.13v-3.83c0-.68-.27-1.2-1.1-1.23c-.42 0-.9 0-1.43.02l-.07.08v4.96l-.14.14H8.9l-.13-.14V8.73l.13-.14h3.7a2.6 2.6 0 0 1 2.61 2.6v4.08l-.13.14Zm-8.37-2.44H.14L0 12.82v-1.64l.14-.14h6.58l.14.14v1.64zm17.14 0h-6.58l-.14-.14v-1.64l.14-.14h6.58l.14.14v1.64zM11.05 6.55V1.64l.14-.14h1.65l.14.14v4.9l-.14.14h-1.65zm0 15.81v-4.9l.14-.14h1.65l.14.13v4.91l-.14.14h-1.65z"/>',
    cloudflare: '<path fill="currentColor" d="M16.509 16.845c.147-.507.09-.971-.155-1.316c-.225-.316-.605-.499-1.062-.52l-8.66-.113a.16.16 0 0 1-.133-.07a.2.2 0 0 1-.02-.156a.24.24 0 0 1 .203-.156l8.736-.113c1.035-.049 2.16-.886 2.554-1.913l.499-1.302a.27.27 0 0 0 .014-.168a5.689 5.689 0 0 0-10.937-.584a2.58 2.58 0 0 0-1.794-.498a2.56 2.56 0 0 0-2.223 3.18A3.634 3.634 0 0 0 0 16.751q.002.264.035.527a.174.174 0 0 0 .17.148h15.98a.22.22 0 0 0 .204-.155zm2.757-5.564c-.077 0-.161 0-.239.011c-.056 0-.105.042-.127.098l-.337 1.174c-.148.507-.092.971.154 1.317c.225.316.605.498 1.062.52l1.844.113c.056 0 .105.026.133.07a.2.2 0 0 1 .021.156a.24.24 0 0 1-.204.156l-1.92.112c-1.042.049-2.159.887-2.553 1.914l-.141.358c-.028.072.021.142.099.142h6.597a.174.174 0 0 0 .17-.126a5 5 0 0 0 .175-1.28a4.74 4.74 0 0 0-4.734-4.727"/>',
    supabase: '<path fill="currentColor" d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z"/>',
    postman: '<path fill="currentColor" d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428c6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099m2.471 7.485a.86.86 0 0 0-.593.25l-4.453 4.453l-.307-.307l-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753m-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032a.06.06 0 0 1 .01-.073l.645-.645zm-2.803-.459l1.172-1.172l.879.878l-1.979.426a.074.074 0 0 1-.085-.039a.07.07 0 0 1 .013-.093m-3.646 6.058a.076.076 0 0 1-.069-.083a.1.1 0 0 1 .022-.046h.002l.946-.946l1.222 1.222zm2.425-1.256a.23.23 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934l-.294-.295l3.762-3.758l1.82-.393l.874.874c-1.255 1.102-2.971 2.201-5.1 3.268m5.279-3.428h-.002l-.839-.839l4.699-4.125a1 1 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091m3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.12.12 0 0 0 0 .169l1.247 1.247a1.82 1.82 0 0 1-2.093-.343m2.578 0a1.7 1.7 0 0 1-.271.218h-.001l-1.207-1.207l1.533-1.533c.661.72.637 1.832-.054 2.522m-.1-1.544a.14.14 0 0 0-.053.157a.42.42 0 0 1-.053.45a.14.14 0 0 0 .023.197a.14.14 0 0 0 .084.03a.14.14 0 0 0 .106-.05a.69.69 0 0 0 .087-.751a.14.14 0 0 0-.194-.033"/>',
    jira: '<path fill="currentColor" d="M11.571 11.513H0a5.22 5.22 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.22 5.22 0 0 0 5.215 5.214V6.758a1 1 0 0 0-1.001-1.001M23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1 1 0 0 0 23.013 0"/>',
    notion: '<path fill="currentColor" d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514c-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233l4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632"/>'
  }
}, Yn = {
  style: "fill",
  viewBox: "0 0 448 512",
  icons: {
    github: '<path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3.3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6m-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3m44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9M244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.7-.3 75.4-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252C496 113.3 383.5 8 244.8 8M97.2 352.9c-1.3 1-1 3.3.7 5.2c1.6 1.6 3.9 2.3 5.2 1c1.3-1 1-3.3-.7-5.2c-1.6-1.6-3.9-2.3-5.2-1m-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9c1.6 1 3.6.7 4.3-.7c.7-1.3-.3-2.9-2.3-3.9c-2-.6-3.6-.3-4.3.7m32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2c2.3 2.3 5.2 2.6 6.5 1c1.3-1.3.7-4.3-1.3-6.2c-2.2-2.3-5.2-2.6-6.5-1m-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2c-1.4-2.3-4-3.3-5.6-2"/>',
    gitlab: '<path fill="currentColor" d="m503.5 204.6l-.7-1.8l-69.7-181.78c-1.4-3.57-3.9-6.59-7.2-8.64c-2.4-1.55-5.1-2.515-8-2.81s-5.7.083-8.4 1.11c-2.7 1.02-5.1 2.66-7.1 4.78c-1.9 2.12-3.3 4.67-4.1 7.44l-47 144H160.8l-47.1-144c-.8-2.77-2.2-5.31-4.1-7.43c-2-2.12-4.4-3.75-7.1-4.77a18.1 18.1 0 0 0-8.38-1.113a18.4 18.4 0 0 0-8.04 2.793a18.1 18.1 0 0 0-7.16 8.64L9.267 202.8l-.724 1.8a129.57 129.57 0 0 0-3.52 82c7.747 26.9 24.047 50.7 46.447 67.6l.27.2l.59.4l105.97 79.5l52.6 39.7l32 24.2c3.7 1.9 8.3 4.3 13 4.3s9.3-2.4 13-4.3l32-24.2l52.6-39.7l106.7-79.9l.3-.3c22.4-16.9 38.7-40.6 45.6-67.5c8.6-27 7.4-55.8-2.6-82"/>',
    bitbucket: '<path fill="currentColor" d="M22.2 32A16 16 0 0 0 6 47.8a26 26 0 0 0 .2 2.8l67.9 412.1a21.77 21.77 0 0 0 21.3 18.2h325.7a16 16 0 0 0 16-13.4L505 50.7a16 16 0 0 0-13.2-18.3a25 25 0 0 0-2.8-.2zm285.9 297.8h-104l-28.1-147h157.3z"/>',
    google: '<path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504C110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6c98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4"/>',
    microsoft: '<path fill="currentColor" d="M0 32h214.6v214.6H0zm233.4 0H448v214.6H233.4zM0 265.4h214.6V480H0zm233.4 0H448V480H233.4z"/>',
    apple: '<path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8c-18.8-26.9-47.2-41.7-84.7-44.6c-35.5-2.8-74.3 20.7-88.5 20.7c-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2c25.2-.6 43-17.9 75.8-17.9c31.8 0 48.3 17.9 76.4 17.9c48.6-.7 90.4-82.5 102.6-119.3c-65.2-30.7-61.7-90-61.7-91.9m-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5c-24.1 1.4-52 16.4-67.9 34.9c-17.5 19.8-27.8 44.3-25.6 71.9c26.1 2 49.9-11.4 69.5-34.3"/>',
    linux: '<path fill="currentColor" d="M220.8 123.3c1 .5 1.8 1.7 3 1.7c1.1 0 2.8-.4 2.9-1.5c.2-1.4-1.9-2.3-3.2-2.9c-1.7-.7-3.9-1-5.5-.1c-.4.2-.8.7-.6 1.1c.3 1.3 2.3 1.1 3.4 1.7m-21.9 1.7c1.2 0 2-1.2 3-1.7c1.1-.6 3.1-.4 3.5-1.6c.2-.4-.2-.9-.6-1.1c-1.6-.9-3.8-.6-5.5.1c-1.3.6-3.4 1.5-3.2 2.9c.1 1 1.8 1.5 2.8 1.4M420 403.8c-3.6-4-5.3-11.6-7.2-19.7c-1.8-8.1-3.9-16.8-10.5-22.4c-1.3-1.1-2.6-2.1-4-2.9c-1.3-.8-2.7-1.5-4.1-2c9.2-27.3 5.6-54.5-3.7-79.1c-11.4-30.1-31.3-56.4-46.5-74.4c-17.1-21.5-33.7-41.9-33.4-72C311.1 85.4 315.7.1 234.8 0C132.4-.2 158 103.4 156.9 135.2c-1.7 23.4-6.4 41.8-22.5 64.7c-18.9 22.5-45.5 58.8-58.1 96.7c-6 17.9-8.8 36.1-6.2 53.3c-6.5 5.8-11.4 14.7-16.6 20.2c-4.2 4.3-10.3 5.9-17 8.3s-14 6-18.5 14.5c-2.1 3.9-2.8 8.1-2.8 12.4c0 3.9.6 7.9 1.2 11.8c1.2 8.1 2.5 15.7.8 20.8c-5.2 14.4-5.9 24.4-2.2 31.7c3.8 7.3 11.4 10.5 20.1 12.3c17.3 3.6 40.8 2.7 59.3 12.5c19.8 10.4 39.9 14.1 55.9 10.4c11.6-2.6 21.1-9.6 25.9-20.2c12.5-.1 26.3-5.4 48.3-6.6c14.9-1.2 33.6 5.3 55.1 4.1c.6 2.3 1.4 4.6 2.5 6.7v.1c8.3 16.7 23.8 24.3 40.3 23c16.6-1.3 34.1-11 48.3-27.9c13.6-16.4 36-23.2 50.9-32.2c7.4-4.5 13.4-10.1 13.9-18.3c.4-8.2-4.4-17.3-15.5-29.7M223.7 87.3c9.8-22.2 34.2-21.8 44-.4c6.5 14.2 3.6 30.9-4.3 40.4c-1.6-.8-5.9-2.6-12.6-4.9c1.1-1.2 3.1-2.7 3.9-4.6c4.8-11.8-.2-27-9.1-27.3c-7.3-.5-13.9 10.8-11.8 23c-4.1-2-9.4-3.5-13-4.4c-1-6.9-.3-14.6 2.9-21.8M183 75.8c10.1 0 20.8 14.2 19.1 33.5c-3.5 1-7.1 2.5-10.2 4.6c1.2-8.9-3.3-20.1-9.6-19.6c-8.4.7-9.8 21.2-1.8 28.1c1 .8 1.9-.2-5.9 5.5c-15.6-14.6-10.5-52.1 8.4-52.1m-13.6 60.7c6.2-4.6 13.6-10 14.1-10.5c4.7-4.4 13.5-14.2 27.9-14.2c7.1 0 15.6 2.3 25.9 8.9c6.3 4.1 11.3 4.4 22.6 9.3c8.4 3.5 13.7 9.7 10.5 18.2c-2.6 7.1-11 14.4-22.7 18.1c-11.1 3.6-19.8 16-38.2 14.9c-3.9-.2-7-1-9.6-2.1c-8-3.5-12.2-10.4-20-15c-8.6-4.8-13.2-10.4-14.7-15.3q-2.1-7.35 4.2-12.3m3.3 334c-2.7 35.1-43.9 34.4-75.3 18c-29.9-15.8-68.6-6.5-76.5-21.9c-2.4-4.7-2.4-12.7 2.6-26.4v-.2c2.4-7.6.6-16-.6-23.9c-1.2-7.8-1.8-15 .9-20c3.5-6.7 8.5-9.1 14.8-11.3c10.3-3.7 11.8-3.4 19.6-9.9c5.5-5.7 9.5-12.9 14.3-18c5.1-5.5 10-8.1 17.7-6.9c8.1 1.2 15.1 6.8 21.9 16l19.6 35.6c9.5 19.9 43.1 48.4 41 68.9m-1.4-25.9c-4.1-6.6-9.6-13.6-14.4-19.6c7.1 0 14.2-2.2 16.7-8.9c2.3-6.2 0-14.9-7.4-24.9c-13.5-18.2-38.3-32.5-38.3-32.5c-13.5-8.4-21.1-18.7-24.6-29.9s-3-23.3-.3-35.2c5.2-22.9 18.6-45.2 27.2-59.2c2.3-1.7.8 3.2-8.7 20.8c-8.5 16.1-24.4 53.3-2.6 82.4c.6-20.7 5.5-41.8 13.8-61.5c12-27.4 37.3-74.9 39.3-112.7c1.1.8 4.6 3.2 6.2 4.1c4.6 2.7 8.1 6.7 12.6 10.3c12.4 10 28.5 9.2 42.4 1.2c6.2-3.5 11.2-7.5 15.9-9c9.9-3.1 17.8-8.6 22.3-15c7.7 30.4 25.7 74.3 37.2 95.7c6.1 11.4 18.3 35.5 23.6 64.6c3.3-.1 7 .4 10.9 1.4c13.8-35.7-11.7-74.2-23.3-84.9c-4.7-4.6-4.9-6.6-2.6-6.5c12.6 11.2 29.2 33.7 35.2 59c2.8 11.6 3.3 23.7.4 35.7c16.4 6.8 35.9 17.9 30.7 34.8c-2.2-.1-3.2 0-4.2 0c3.2-10.1-3.9-17.6-22.8-26.1c-19.6-8.6-36-8.6-38.3 12.5c-12.1 4.2-18.3 14.7-21.4 27.3c-2.8 11.2-3.6 24.7-4.4 39.9c-.5 7.7-3.6 18-6.8 29c-32.1 22.9-76.7 32.9-114.3 7.2m257.4-11.5c-.9 16.8-41.2 19.9-63.2 46.5c-13.2 15.7-29.4 24.4-43.6 25.5s-26.5-4.8-33.7-19.3c-4.7-11.1-2.4-23.1 1.1-36.3c3.7-14.2 9.2-28.8 9.9-40.6c.8-15.2 1.7-28.5 4.2-38.7c2.6-10.3 6.6-17.2 13.7-21.1c.3-.2.7-.3 1-.5c.8 13.2 7.3 26.6 18.8 29.5c12.6 3.3 30.7-7.5 38.4-16.3c9-.3 15.7-.9 22.6 5.1c9.9 8.5 7.1 30.3 17.1 41.6c10.6 11.6 14 19.5 13.7 24.6M173.3 148.7c2 1.9 4.7 4.5 8 7.1c6.6 5.2 15.8 10.6 27.3 10.6c11.6 0 22.5-5.9 31.8-10.8c4.9-2.6 10.9-7 14.8-10.4s5.9-6.3 3.1-6.6s-2.6 2.6-6 5.1c-4.4 3.2-9.7 7.4-13.9 9.8c-7.4 4.2-19.5 10.2-29.9 10.2s-18.7-4.8-24.9-9.7c-3.1-2.5-5.7-5-7.7-6.9c-1.5-1.4-1.9-4.6-4.3-4.9c-1.4-.1-1.8 3.7 1.7 6.5"/>',
    ubuntu: '<path fill="currentColor" d="M469.2 75a75.6 75.6 0 1 0-151.3 0a75.6 75.6 0 1 0 151.2 0zm-315 165.7a75.6 75.6 0 1 0-151.2 0a75.6 75.6 0 1 0 151.2 0M57 346c18.6 46.9 51 87 93 115.1s91.5 42.6 142 41.7c-14.7-18.6-22.9-41.5-23.2-65.2c-6.8-.9-13.3-2.1-19.5-3.4c-26.8-5.7-51.9-17.3-73.6-34s-39.3-38.1-51.7-62.5c-20.9 9.9-44.5 12.8-67.1 8.2zm395.1 89.8a75.6 75.6 0 1 0-151.2 0a75.6 75.6 0 1 0 151.2 0m-8.1-84.2c18.5 14.8 31.6 35.2 37.2 58.2c33.3-41.3 52.6-92.2 54.8-145.2s-12.5-105.4-42.2-149.4c-8.6 21.5-24 39.6-43.8 51.6c15.4 28.6 22.9 60.8 21.9 93.2s-10.7 64-28 91.6zM101.1 135.4c12.4 2.7 24.3 7.5 35.1 14.3c16.6-24.2 38.9-44.1 64.8-58s54.8-21.3 84.2-21.7c.2-5.9.9-11.9 2-17.7C290.8 35.6 298.3 20 309 6.8c-47.7-3.8-95.4 6-137.6 28.5S94.3 91.7 70.8 133.4c2.7-.2 5.3-.3 8-.3c7.5 0 15 .8 22.4 2.3z"/>',
    docker: '<path fill="currentColor" d="M349.9 236.3h-66.1v-59.4h66.1zm0-204.3h-66.1v60.7h66.1zm78.2 144.8H362v59.4h66.1zm-156.3-72.1h-66.1v60.1h66.1zm78.1 0h-66.1v60.1h66.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4c-3.3-24-16.7-44.9-41.1-63.7l-14-9.3l-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8c-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1c37.1 43.9 92.7 66.2 165.4 66.2c157.4 0 273.9-72.5 328.4-204.2c21.4.4 67.6.1 91.3-45.2c1.5-2.5 6.6-13.2 8.5-17.1zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1zm78.1 0h-66.1v59.4h66.1zm-78.1-72.1h-66.1v60.1h66.1z"/>',
    react: '<path fill="currentColor" d="M418.2 177.2q-8.1-2.7-16.2-5.1c.9-3.7 1.7-7.4 2.5-11.1c12.3-59.6 4.2-107.5-23.1-123.3c-26.3-15.1-69.2.6-112.6 38.4c-4.3 3.7-8.5 7.6-12.5 11.5c-2.7-2.6-5.5-5.2-8.3-7.7c-45.5-40.4-91.1-57.4-118.4-41.5c-26.2 15.2-34 60.3-23 116.7c1.1 5.6 2.3 11.1 3.7 16.7c-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5c4.5 1.5 9 3 13.6 4.3c-1.5 6-2.8 11.9-4 18c-10.5 55.5-2.3 99.5 23.9 114.6c27 15.6 72.4-.4 116.6-39.1c3.5-3.1 7-6.3 10.5-9.7c4.4 4.3 9 8.4 13.6 12.4c42.8 36.8 85.1 51.7 111.2 36.6c27-15.6 35.8-62.9 24.4-120.5q-1.35-6.6-3-13.5c3.2-.9 6.3-1.9 9.4-2.9c57.7-19.1 99.5-50 99.5-81.7c0-30.3-39.4-59.7-93.8-78.4M282.9 92.3c37.2-32.4 71.9-45.1 87.7-36c16.9 9.7 23.4 48.9 12.8 100.4c-.7 3.4-1.4 6.7-2.3 10c-22.2-5-44.7-8.6-67.3-10.6c-13-18.6-27.2-36.4-42.6-53.1c3.9-3.7 7.7-7.2 11.7-10.7M167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9c-15.6-1.7-31.1-4.2-46.4-7.5c4.4-14.4 9.9-29.3 16.3-44.5c4.6 8.8 9.3 17.5 14.3 26.1m-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8c-5.3 8.3-10.5 16.8-15.4 25.4c-4.9 8.5-9.7 17.2-14.2 26c-6.3-14.9-11.6-29.5-16-43.6m27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7q12.75 18.9 24.3 38.7c11.55 19.8 14.9 26.7 21.7 40.4q-10.05 20.7-21.6 40.8c-7.6 13.3-15.7 26.2-24.2 39c-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4q-13.05-19.05-24.6-39c-11.55-19.95-14.8-26.8-21.5-40.6m180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7c6.4 14.5 12 29.2 16.9 44.3c-15.5 3.5-31.2 6.2-47 8c5.4-8.4 10.5-17 15.5-25.6m14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2q-7.35-12.75-15.3-25.2c16.1 2 31.5 4.7 45.9 8c-4.6 14.8-10 29.2-16.1 43.4M256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8c-19.8-.9-39.7-.9-59.5 0c9.8-12.9 19.9-24.9 29.9-35.8M140.2 57c16.8-9.8 54.1 4.2 93.4 39c2.5 2.2 5 4.6 7.6 7c-15.5 16.7-29.8 34.5-42.9 53.1c-22.6 2-45 5.5-67.2 10.4c-1.3-5.1-2.4-10.3-3.5-15.5c-9.4-48.4-3.2-84.9 12.6-94m-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9c-21.3-6.7-45.5-17.3-63-31.2c-10.1-7-16.9-17.8-18.8-29.9c0-18.3 31.6-41.7 77.2-57.6c5.7-2 11.5-3.8 17.3-5.5c6.8 21.7 15 43 24.5 63.6c-9.6 20.9-17.9 42.5-24.8 64.5m116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3c-11.1 5.3-23.9 5.8-35.3 1.3c-15.9-9.2-22.5-44.5-13.5-92c1.1-5.6 2.3-11.2 3.7-16.7c22.4 4.8 45 8.1 67.9 9.8c13.2 18.7 27.7 36.6 43.2 53.4c-3.2 3.1-6.4 6.1-9.6 8.9m24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3c9.6.4 19.5.6 29.5.6c10.3 0 20.4-.2 30.4-.7c-9.2 12.7-19.1 24.8-29.6 36.4m130.7 30c-.9 12.2-6.9 23.6-16.5 31.3c-15.9 9.2-49.8-2.8-86.4-34.2c-4.2-3.6-8.4-7.5-12.7-11.5c15.3-16.9 29.4-34.8 42.2-53.6c22.9-1.9 45.7-5.4 68.2-10.5c1 4.1 1.9 8.2 2.7 12.2c4.9 21.6 5.7 44.1 2.5 66.3m18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6c-7-21.8-15.6-43.1-25.5-63.8c9.6-20.4 17.7-41.4 24.5-62.9c5.2 1.5 10.2 3.1 15 4.7c46.6 16 79.3 39.8 79.3 58c0 19.6-34.9 44.9-84.8 61.4m-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8s-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8"/>',
    angular: '<path fill="currentColor" d="M185.7 268.1h76.2l-38.1-91.6zM223.8 32L16 106.4l31.8 275.7l176 97.9l176-97.9l31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"/>',
    vuejs: '<path fill="currentColor" d="M356.9 64.3H280l-56 88.6l-48-88.6H0L224 448L448 64.3zm-301.2 32h53.8L224 294.5L338.4 96.3h53.8L224 384.5z"/>',
    js: '<path fill="currentColor" d="M0 32v448h448V32zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5c-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6c13.8 0 22.6-5.4 22.6-26.5V237.7h42.1zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6c17.4 0 28.6-8.7 28.6-20.8c0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5c0-31.6 24.1-55.6 61.6-55.6c26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18c-12.3 0-20.1 7.8-20.1 18c0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2c0 37.8-29.8 58.6-69.7 58.6"/>',
    npm: '<path fill="currentColor" d="M288 288h-32v-64h32zm288-128v192H288v32H160v-32H0V160zm-416 32H32v128h64v-96h32v96h32zm160 0H192v160h64v-32h64zm224 0H352v128h64v-96h32v96h32v-96h32v96h32z"/>',
    wordpress: '<path fill="currentColor" d="m61.7 169.4l101.5 278C92.2 413 43.3 340.2 43.3 256c0-30.9 6.6-60.1 18.4-86.6m337.9 75.9c0-26.3-9.4-44.5-17.5-58.7c-10.8-17.5-20.9-32.4-20.9-49.9c0-19.6 14.8-37.8 35.7-37.8c.9 0 1.8.1 2.8.2c-37.9-34.7-88.3-55.9-143.7-55.9c-74.3 0-139.7 38.1-177.8 95.9c5 .2 9.7.3 13.7.3c22.2 0 56.7-2.7 56.7-2.7c11.5-.7 12.8 16.2 1.4 17.5c0 0-11.5 1.3-24.3 2l77.5 230.4L249.8 247l-33.1-90.8c-11.5-.7-22.3-2-22.3-2c-11.5-.7-10.1-18.2 1.3-17.5c0 0 35.1 2.7 56 2.7c22.2 0 56.7-2.7 56.7-2.7c11.5-.7 12.8 16.2 1.4 17.5c0 0-11.5 1.3-24.3 2l76.9 228.7l21.2-70.9c9-29.4 16-50.5 16-68.7m-139.9 29.3l-63.8 185.5c19.1 5.6 39.2 8.7 60.1 8.7c24.8 0 48.5-4.3 70.6-12.1c-.6-.9-1.1-1.9-1.5-2.9zm183-120.7c.9 6.8 1.4 14 1.4 21.9c0 21.6-4 45.8-16.2 76.2l-65 187.9C426.2 403 468.7 334.5 468.7 256c0-37-9.4-71.8-26-102.1M504 256c0 136.8-111.3 248-248 248C119.2 504 8 392.7 8 256C8 119.2 119.2 8 256 8c136.7 0 248 111.2 248 248m-11.4 0c0-130.5-106.2-236.6-236.6-236.6C125.5 19.4 19.4 125.5 19.4 256S125.6 492.6 256 492.6c130.5 0 236.6-106.1 236.6-236.6"/>',
    php: '<path fill="currentColor" d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256S496.7 87.7 320 87.7M218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3M97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1c26.1-24 32.9-66.7 14.3-88.1c-9.7-11.2-25.3-16.7-46.5-16.7h-70.7zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7c14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92c-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3M384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1c26.1-24 32.9-66.7 14.3-88.1c-9.7-11.2-25.3-16.7-46.5-16.7H417z"/>',
    python: '<path fill="currentColor" d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3c33.8 9.9 66.3 11.7 106.8 0c26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2c11.2-33.5 10.7-65.7 0-108.6M286.2 404c11.1 0 20.1 9.1 20.1 20.3c0 11.3-9 20.4-20.1 20.4c-11 0-20.1-9.2-20.1-20.4c.1-11.3 9.1-20.3 20.1-20.3M167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6c-35.8-5.9-74.7-5.6-106.8.1c-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2c-9.8 40.7-10.2 66.1 0 108.6c7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4m-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3c.1-11.3 9-20.4 20.1-20.4c11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3"/>',
    "x-twitter": '<path fill="currentColor" d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z"/>',
    facebook: '<path fill="currentColor" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256c0 120 82.7 220.8 194.2 248.5V334.2h-52.8V256h52.8v-33.7c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287v175.9C413.8 494.8 512 386.9 512 256"/>',
    instagram: '<path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141m0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7m146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8m76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8M398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1"/>',
    linkedin: '<path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3M135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5c0 21.3-17.2 38.5-38.5 38.5m282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7c-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5c67.2 0 79.7 44.3 79.7 101.9z"/>',
    youtube: '<path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305m-317.51 213.508V175.185l142.739 81.205z"/>',
    tiktok: '<path fill="currentColor" d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121 121 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"/>',
    reddit: '<path fill="currentColor" d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256s-114.6 256-256 256H37.1c-13.7 0-20.5-16.5-10.9-26.2L75 437C28.7 390.7 0 326.7 0 256m349.6-102.4c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7c-20.6 0-37.8 14.6-41.8 34c-34.5 3.7-61.4 33-61.4 68.4v.2c-37.5 1.6-71.8 12.3-99 29.1c-10.1-7.8-22.8-12.5-36.5-12.5c-33 0-59.8 26.8-59.8 59.8c0 24 14.1 44.6 34.4 54.1c2 69.4 77.6 125.2 170.6 125.2s168.7-55.9 170.6-125.3c20.2-9.6 34.1-30.2 34.1-54c0-33-26.8-59.8-59.8-59.8c-13.7 0-26.3 4.6-36.4 12.4c-27.4-17-62.1-27.7-100-29.1v-.2c0-25.4 18.9-46.5 43.4-49.9c4.4 18.8 21.3 32.8 41.5 32.8zm-172.5 93.3c16.7 0 29.5 17.6 28.5 39.3s-13.5 29.6-30.3 29.6s-31.4-8.8-30.4-30.5S160.3 247 177 247zm190.1 38.3c1 21.7-13.7 30.5-30.4 30.5s-29.3-7.9-30.3-29.6s11.8-39.3 28.5-39.3s31.2 16.6 32.1 38.3zm-48.1 56.7c-10.3 24.6-34.6 41.9-63 41.9s-52.7-17.3-63-41.9c-1.2-2.9.8-6.2 3.9-6.5c18.4-1.9 38.3-2.9 59.1-2.9s40.7 1 59.1 2.9c3.1.3 5.1 3.6 3.9 6.5"/>',
    twitch: '<path fill="currentColor" d="M391.17 103.47h-38.63v109.7h38.63ZM285 103h-38.63v109.75H285ZM120.83 0L24.31 91.42v329.16h115.83V512l96.53-91.42h77.25L487.69 256V0Zm328.24 237.75l-77.22 73.12h-77.24l-67.6 64v-64h-86.87V36.58h308.93Z"/>',
    spotify: '<path fill="currentColor" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248s248-111.1 248-248S384.9 8 248 8m100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6c-62.4-37.6-135-39.2-206.7-24.5c-3.9 1-9 2.6-11.9 2.6c-9.7 0-15.8-7.7-15.8-15.8c0-10.3 6.1-15.2 13.6-16.8c81.9-18.1 165.6-16.5 237 26.2c6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4m26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2c-62.5-37-155.7-51.9-238.6-29.4c-4.8 1.3-7.4 2.6-11.9 2.6c-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6c64.9 0 127.6 16.1 177 45.5c8.1 4.8 11.3 11 11.3 19.7c-.1 10.8-8.5 19.5-19.4 19.5m31-76.2c-5.2 0-8.4-1.3-12.9-3.9c-71.2-42.5-198.5-52.7-280.9-29.7c-3.6 1-8.1 2.6-12.9 2.6c-13.2 0-23.3-10.3-23.3-23.6c0-13.6 8.4-21.3 17.4-23.9c35.2-10.3 74.6-15.2 117.5-15.2c73 0 149.5 15.2 205.4 47.8c7.8 4.5 12.9 10.7 12.9 22.6c0 13.6-11 23.3-23.2 23.3"/>',
    figma: '<path fill="currentColor" d="M14 95.792C14 42.888 56.888 0 109.793 0h164.368c52.905 0 95.793 42.888 95.793 95.792c0 33.5-17.196 62.984-43.243 80.105c26.047 17.122 43.243 46.605 43.243 80.105c0 52.905-42.888 95.793-95.793 95.793h-2.08c-24.802 0-47.403-9.426-64.415-24.891v88.263c0 53.61-44.009 96.833-97.357 96.833C57.536 512 14 469.243 14 416.207c0-33.498 17.195-62.98 43.24-80.102C31.194 318.983 14 289.5 14 256.002c0-33.5 17.196-62.983 43.243-80.105C31.196 158.776 14 129.292 14 95.792m162.288 95.795h-66.495c-35.576 0-64.415 28.84-64.415 64.415c0 35.438 28.617 64.192 64.003 64.414l.412-.001h66.495zm31.378 64.415c0 35.575 28.839 64.415 64.415 64.415h2.08c35.576 0 64.415-28.84 64.415-64.415s-28.839-64.415-64.415-64.415h-2.08c-35.576 0-64.415 28.84-64.415 64.415m-97.873 95.793l-.412-.001c-35.386.221-64.003 28.975-64.003 64.413c0 35.445 29.225 64.415 64.931 64.415c36.282 0 65.979-29.436 65.979-65.455v-63.372zm0-320.417c-35.576 0-64.415 28.84-64.415 64.414c0 35.576 28.84 64.415 64.415 64.415h66.495V31.377zm97.873 128.829h66.495c35.576 0 64.415-28.839 64.415-64.415c0-35.575-28.839-64.414-64.415-64.414h-66.495z"/>',
    slack: '<path fill="currentColor" d="M94.12 315.1c0 25.9-21.16 47.06-47.06 47.06S0 341 0 315.1s21.16-47.06 47.06-47.06h47.06zm23.72 0c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06v117.84c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06zm47.06-188.98c-25.9 0-47.06-21.16-47.06-47.06S139 32 164.9 32s47.06 21.16 47.06 47.06v47.06zm0 23.72c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06H47.06C21.16 243.96 0 222.8 0 196.9s21.16-47.06 47.06-47.06zm188.98 47.06c0-25.9 21.16-47.06 47.06-47.06S448 171 448 196.9s-21.16 47.06-47.06 47.06h-47.06zm-23.72 0c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06V79.06c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06zM283.1 385.88c25.9 0 47.06 21.16 47.06 47.06S309 480 283.1 480s-47.06-21.16-47.06-47.06v-47.06zm0-23.72c-25.9 0-47.06-21.16-47.06-47.06s21.16-47.06 47.06-47.06h117.84c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06z"/>',
    dropbox: '<path fill="currentColor" d="m264.4 116.3l-132 84.3l132 84.3l-132 84.3L0 284.1l132.3-84.3L0 116.3L132.3 32zM131.6 395.7l132-84.3l132 84.3l-132 84.3zm132.8-111.6l132-84.3l-132-83.6L395.7 32L528 116.3l-132.3 84.3L528 284.8l-132.3 84.3z"/>',
    "node-js": '<path fill="currentColor" d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8c12.3-4.3 14.8-5.2 27.9-12.7c1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6c-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2m149.1-210.1c0-39.9-27-50.5-83.7-58c-57.4-7.6-63.2-11.5-63.2-24.9c0-11.1 4.9-25.9 47.4-25.9c37.9 0 51.9 8.2 57.7 33.8c.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6c-52.7 0-84.1 22.2-84.1 59.5c0 40.4 31.3 51.6 81.8 56.6c60.5 5.9 65.2 14.8 65.2 26.7c0 20.6-16.6 29.4-55.5 29.4c-48.9 0-59.6-12.3-63.2-36.6c-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3c0 31.1 16.9 68.2 97.8 68.2c58.4-.1 92-23.2 92-63.4"/>',
    android: '<path fill="currentColor" d="M420.55 301.93a24 24 0 1 1 24-24a24 24 0 0 1-24 24m-265.1 0a24 24 0 1 1 24-24a24 24 0 0 1-24 24m273.7-144.48l47.94-83a10 10 0 1 0-17.27-10l-48.54 84.07a301.25 301.25 0 0 0-246.56 0l-48.54-84.07a10 10 0 1 0-17.27 10l47.94 83C64.53 202.22 8.24 285.55 0 384h576c-8.24-98.45-64.54-181.78-146.85-226.55"/>',
    windows: '<path fill="currentColor" d="m0 93.7l183.6-25.3v177.4H0zm0 324.6l183.6 25.3V268.4H0zm203.8 28L448 480V268.4H203.8zm0-380.6v180.1H448V32z"/>',
    java: '<path fill="currentColor" d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3c-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1m-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6c-23.9 35.9 11.7 74.4 60.2 118.2m114.6-176.2c.1 0-175.2 43.8-91.5 140.2c24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3m-6.1 270.5a12.2 12.2 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3a70.5 70.5 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4M348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7c-18.3-7.9 16-19 26.8-21.3c11.2-2.4 17.7-2 17.7-2c-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4M124.44 396c-78.7 22 47.9 67.4 148.1 24.5a186 186 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5c-33.5-3.8-13.9-15.2-13.9-15.2m179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6c0-.1 11.8 9.7 72.4 13.6c92.2 5.9 233.8-3.3 237.1-46.9c0 0-6.4 16.5-76.2 29.7M260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6c-33.5-3.5-11.6-19.7-11.6-19.7c-86.8 28.8 48.2 61.4 169.5 25.9a60.4 60.4 0 0 1-21.1-12.8"/>',
    rust: '<path fill="currentColor" d="m508.52 249.75l-21.82-13.51c-.17-2-.34-3.93-.55-5.88l18.72-17.5a7.35 7.35 0 0 0-2.44-12.25l-24-9c-.54-1.88-1.08-3.78-1.67-5.64l15-20.83a7.35 7.35 0 0 0-4.79-11.54l-25.42-4.15c-.9-1.73-1.79-3.45-2.73-5.15l10.68-23.42a7.35 7.35 0 0 0-6.95-10.39l-25.82.91q-1.79-2.22-3.61-4.4L439 81.84a7.36 7.36 0 0 0-8.84-8.84L405 78.93q-2.17-1.83-4.4-3.61l.91-25.82a7.35 7.35 0 0 0-10.39-7L367.7 53.23c-1.7-.94-3.43-1.84-5.15-2.73l-4.15-25.42a7.35 7.35 0 0 0-11.54-4.79L326 35.26c-1.86-.59-3.75-1.13-5.64-1.67l-9-24a7.35 7.35 0 0 0-12.25-2.44l-17.5 18.72c-1.95-.21-3.91-.38-5.88-.55L262.25 3.48a7.35 7.35 0 0 0-12.5 0L236.24 25.3c-2 .17-3.93.34-5.88.55l-17.5-18.72a7.35 7.35 0 0 0-12.25 2.44l-9 24c-1.89.55-3.79 1.08-5.66 1.68l-20.82-15a7.35 7.35 0 0 0-11.54 4.79l-4.15 25.41c-1.73.9-3.45 1.79-5.16 2.73l-23.4-10.63a7.35 7.35 0 0 0-10.39 7l.92 25.81c-1.49 1.19-3 2.39-4.42 3.61L81.84 73A7.36 7.36 0 0 0 73 81.84L78.93 107c-1.23 1.45-2.43 2.93-3.62 4.41l-25.81-.91a7.42 7.42 0 0 0-6.37 3.26a7.35 7.35 0 0 0-.57 7.13l10.66 23.41c-.94 1.7-1.83 3.43-2.73 5.16l-25.41 4.14a7.35 7.35 0 0 0-4.79 11.54l15 20.82c-.59 1.87-1.13 3.77-1.68 5.66l-24 9a7.35 7.35 0 0 0-2.44 12.25l18.72 17.5c-.21 1.95-.38 3.91-.55 5.88l-21.86 13.5a7.35 7.35 0 0 0 0 12.5l21.82 13.51c.17 2 .34 3.92.55 5.87l-18.72 17.5a7.35 7.35 0 0 0 2.44 12.25l24 9c.55 1.89 1.08 3.78 1.68 5.65l-15 20.83a7.35 7.35 0 0 0 4.79 11.54l25.42 4.15c.9 1.72 1.79 3.45 2.73 5.14l-10.63 23.43a7.35 7.35 0 0 0 .57 7.13a7.13 7.13 0 0 0 6.37 3.26l25.83-.91q1.77 2.22 3.6 4.4L73 430.16a7.36 7.36 0 0 0 8.84 8.84l25.16-5.93q2.18 1.83 4.41 3.61l-.92 25.82a7.35 7.35 0 0 0 10.39 6.95l23.43-10.68c1.69.94 3.42 1.83 5.14 2.73l4.15 25.42a7.34 7.34 0 0 0 11.54 4.78l20.83-15c1.86.6 3.76 1.13 5.65 1.68l9 24a7.36 7.36 0 0 0 12.25 2.44l17.5-18.72c1.95.21 3.92.38 5.88.55l13.51 21.82a7.35 7.35 0 0 0 12.5 0l13.51-21.82c2-.17 3.93-.34 5.88-.56l17.5 18.73a7.36 7.36 0 0 0 12.25-2.44l9-24c1.89-.55 3.78-1.08 5.65-1.68l20.82 15a7.34 7.34 0 0 0 11.54-4.78l4.15-25.42c1.72-.9 3.45-1.79 5.15-2.73l23.42 10.68a7.35 7.35 0 0 0 10.39-6.95l-.91-25.82q2.22-1.79 4.4-3.61l25.15 5.93a7.36 7.36 0 0 0 8.84-8.84L433.07 405q1.83-2.17 3.61-4.4l25.82.91a7.23 7.23 0 0 0 6.37-3.26a7.35 7.35 0 0 0 .58-7.13l-10.68-23.42c.94-1.7 1.83-3.43 2.73-5.15l25.42-4.15a7.35 7.35 0 0 0 4.79-11.54l-15-20.83c.59-1.87 1.13-3.76 1.67-5.65l24-9a7.35 7.35 0 0 0 2.44-12.25l-18.72-17.5c.21-1.95.38-3.91.55-5.87l21.82-13.51a7.35 7.35 0 0 0 0-12.5Zm-151 129.08A13.91 13.91 0 0 0 341 389.51l-7.64 35.67a187.51 187.51 0 0 1-156.36-.74l-7.64-35.66a13.87 13.87 0 0 0-16.46-10.68l-31.51 6.76a187 187 0 0 1-16.26-19.21H258.3c1.72 0 2.89-.29 2.89-1.91v-54.19c0-1.57-1.17-1.91-2.89-1.91h-44.83l.05-34.35H262c4.41 0 23.66 1.28 29.79 25.87c1.91 7.55 6.17 32.14 9.06 40c2.89 8.82 14.6 26.46 27.1 26.46H407a187 187 0 0 1-17.34 20.09Zm25.77 34.49A15.24 15.24 0 1 1 368 398.08h.44a15.23 15.23 0 0 1 14.8 15.24Zm-225.62-.68a15.24 15.24 0 1 1-15.25-15.25h.45a15.25 15.25 0 0 1 14.75 15.25Zm-88.1-178.49l32.83-14.6a13.88 13.88 0 0 0 7.06-18.33L102.69 186h26.56v119.73h-53.6a187.7 187.7 0 0 1-6.08-71.58m-11.26-36.06a15.24 15.24 0 0 1 15.23-15.25H74a15.24 15.24 0 1 1-15.67 15.24Zm155.16 24.49l.05-35.32h63.26c3.28 0 23.07 3.77 23.07 18.62c0 12.29-15.19 16.7-27.68 16.7ZM399 306.71c-9.8 1.13-20.63-4.12-22-10.09c-5.78-32.49-15.39-39.4-30.57-51.4c18.86-11.95 38.46-29.64 38.46-53.26c0-25.52-17.49-41.59-29.4-49.48c-16.76-11-35.28-13.23-40.27-13.23h-198.9a187.5 187.5 0 0 1 104.89-59.19l23.47 24.6a13.82 13.82 0 0 0 19.6.44l26.26-25a187.51 187.51 0 0 1 128.37 91.43l-18 40.57a14 14 0 0 0 7.09 18.33l34.59 15.33a187 187 0 0 1 .4 32.54h-19.28c-1.91 0-2.69 1.27-2.69 3.13v8.82C421 301 409.31 305.58 399 306.71M240 60.21A15.24 15.24 0 0 1 255.21 45h.45A15.24 15.24 0 1 1 240 60.21M436.84 214a15.24 15.24 0 1 1 0-30.48h.44a15.24 15.24 0 0 1-.44 30.48"/>'
  },
  viewBoxBy: {
    github: "0 0 496 512",
    gitlab: "0 0 512 512",
    bitbucket: "0 0 512 512",
    google: "0 0 488 512",
    apple: "0 0 384 512",
    ubuntu: "0 0 576 512",
    docker: "0 0 640 512",
    react: "0 0 512 512",
    npm: "0 0 576 512",
    wordpress: "0 0 512 512",
    php: "0 0 640 512",
    "x-twitter": "0 0 512 512",
    facebook: "0 0 512 512",
    youtube: "0 0 576 512",
    reddit: "0 0 512 512",
    twitch: "0 0 512 512",
    spotify: "0 0 496 512",
    figma: "0 0 384 512",
    dropbox: "0 0 528 512",
    android: "0 0 576 512",
    java: "0 0 384 512",
    rust: "0 0 512 512"
  }
}, M2 = {
  feather: Vn,
  lucide: Dn,
  tabler: En,
  heroicons: qn,
  ph: In,
  ri: Pn,
  carbon: Rn,
  ion: Bn,
  octicon: Fn,
  mdi: Kn,
  "fa6-solid": Wn,
  bi: Zn,
  fluent: Un,
  "material-symbols": Xn,
  "simple-icons": Gn,
  "fa6-brands": Yn
}, Nm = Object.keys(M2), Jn = "_xs_2a6lm_2", Qn = "_sm_2a6lm_7", er = "_md_2a6lm_1", tr = "_lg_2a6lm_17", nr = "_xl_2a6lm_22", rr = {
  xs: Jn,
  sm: Qn,
  md: er,
  lg: tr,
  xl: nr
}, Sm = [
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
], lr = {
  check: /* @__PURE__ */ r("path", { d: "M20 6L9 17l-5-5" }),
  close: /* @__PURE__ */ r("path", { d: "M18 6L6 18M6 6l12 12" }),
  "chevron-down": /* @__PURE__ */ r("path", { d: "M6 9l6 6 6-6" }),
  "chevron-left": /* @__PURE__ */ r("path", { d: "M15 18l-6-6 6-6" }),
  "chevron-right": /* @__PURE__ */ r("path", { d: "M9 18l6-6-6-6" }),
  "chevron-up": /* @__PURE__ */ r("path", { d: "M18 15l-6-6-6 6" }),
  search: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ r("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ r("path", { d: "M21 21l-4.3-4.3" })
  ] }),
  plus: /* @__PURE__ */ r("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ r("path", { d: "M5 12h14" }),
  alert: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ r("path", { d: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" }),
    /* @__PURE__ */ r("path", { d: "M12 9v4M12 17h.01" })
  ] }),
  info: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ r("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ r("path", { d: "M12 16v-4M12 8h.01" })
  ] }),
  "arrow-right": /* @__PURE__ */ r("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  "arrow-left": /* @__PURE__ */ r("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  "external-link": /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ r("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
    /* @__PURE__ */ r("path", { d: "M15 3h6v6M10 14L21 3" })
  ] }),
  copy: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ r("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ r("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] }),
  trash: /* @__PURE__ */ r(b1, { children: /* @__PURE__ */ r("path", { d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" }) }),
  edit: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ r("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ r("path", { d: "M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  settings: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ r("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ r("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] }),
  user: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ r("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ r("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ r("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ r("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ r("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  download: /* @__PURE__ */ r("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  upload: /* @__PURE__ */ r("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  menu: /* @__PURE__ */ r("path", { d: "M3 12h18M3 6h18M3 18h18" }),
  "more-horizontal": /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ r("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ r("circle", { cx: "19", cy: "12", r: "1" }),
    /* @__PURE__ */ r("circle", { cx: "5", cy: "12", r: "1" })
  ] }),
  mail: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ r("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ r("path", { d: "M22 6l-10 7L2 6" })
  ] }),
  lock: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ r("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ r("path", { d: "M7 11V7a5 5 0 0110 0v4" })
  ] }),
  eye: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ r("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ r("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  "eye-off": /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ r("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ r("path", { d: "M1 1l22 22" })
  ] }),
  refresh: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ r("path", { d: "M23 4v6h-6M1 20v-6h6" }),
    /* @__PURE__ */ r("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
  ] }),
  calendar: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ r("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ r("path", { d: "M16 2v4M8 2v4M3 10h18" })
  ] }),
  clock: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ r("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ r("path", { d: "M12 6v6l4 2" })
  ] }),
  "check-circle": /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ r("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ r("path", { d: "M22 4L12 14.01l-3-3" })
  ] }),
  "x-circle": /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ r("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ r("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] }),
  shield: /* @__PURE__ */ r(b1, { children: /* @__PURE__ */ r("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  globe: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ r("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ r("path", { d: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
  ] }),
  file: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ r("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
    /* @__PURE__ */ r("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
  ] }),
  folder: /* @__PURE__ */ r("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" }),
  home: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ r("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
    /* @__PURE__ */ r("path", { d: "M9 22V12h6v10" })
  ] }),
  key: /* @__PURE__ */ r(b1, { children: /* @__PURE__ */ r("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) }),
  link: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ r("path", { d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" }),
    /* @__PURE__ */ r("path", { d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" })
  ] }),
  star: /* @__PURE__ */ r(
    "path",
    {
      fill: "currentColor",
      stroke: "none",
      d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
    }
  ),
  "star-outline": /* @__PURE__ */ r("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" }),
  ban: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ r("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ r("path", { d: "M4.93 4.93l14.14 14.14" })
  ] })
}, M1 = q1(function({ name: t, size: n = "md", strokeWidth: l, className: s, ...c }, d) {
  const o = typeof n == "string", a = t.indexOf(":"), i = a >= 0 ? M2[t.slice(0, a)] : void 0, h = a >= 0 ? t.slice(a + 1) : "", u = i?.style === "fill", b = i !== void 0 ? { dangerouslySetInnerHTML: { __html: i.icons[h] ?? "" } } : {};
  return /* @__PURE__ */ r(
    "svg",
    {
      ref: d,
      className: [o ? rr[n] : null, s].filter(Boolean).join(" "),
      width: o ? void 0 : n,
      height: o ? void 0 : n,
      viewBox: i !== void 0 ? i.viewBoxBy?.[h] ?? i.viewBox : "0 0 24 24",
      fill: u ? "currentColor" : "none",
      stroke: u ? "none" : "currentColor",
      strokeWidth: l ?? i?.strokeWidth ?? 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      ...c,
      ...b,
      children: i !== void 0 ? null : lr[t]
    }
  );
}), or = "_stat_sjin9_1", ar = "_label_sjin9_8", sr = "_row_sjin9_16", cr = "_value_sjin9_22", ir = "_delta_sjin9_28", dr = "_success_sjin9_33", ur = "_danger_sjin9_37", hr = "_neutral_sjin9_41", fr = "_hint_sjin9_45", vt = {
  stat: or,
  label: ar,
  row: sr,
  value: cr,
  delta: ir,
  success: dr,
  danger: ur,
  neutral: hr,
  hint: fr
}, Om = q1(function({ label: t, value: n, delta: l, deltaTone: s = "neutral", hint: c, className: d, ...o }, a) {
  return /* @__PURE__ */ L(
    "div",
    {
      ref: a,
      className: [vt.stat, d].filter(Boolean).join(" "),
      ...o,
      children: [
        /* @__PURE__ */ r("div", { className: vt.label, children: t }),
        /* @__PURE__ */ L("div", { className: vt.row, children: [
          /* @__PURE__ */ r("div", { className: vt.value, children: n }),
          l != null && /* @__PURE__ */ r("div", { className: [vt.delta, vt[s]].join(" "), children: l })
        ] }),
        c != null && /* @__PURE__ */ r("div", { className: vt.hint, children: c })
      ]
    }
  );
}), pr = "_wrap_1nflq_1", mr = "_table_1nflq_8", _r = "_caption_1nflq_14", vr = "_none_1nflq_51", gr = "_horizontal_1nflq_57", kr = "_vertical_1nflq_67", xr = "_alternating_1nflq_85", yr = "_start_1nflq_89", br = "_center_1nflq_93", Mr = "_end_1nflq_97", Cr = "_empty_1nflq_101", st = {
  wrap: pr,
  table: mr,
  caption: _r,
  none: vr,
  horizontal: gr,
  vertical: kr,
  alternating: xr,
  start: yr,
  center: br,
  end: Mr,
  empty: Cr
};
function Am({
  columns: e,
  rows: t,
  rowKey: n,
  empty: l,
  caption: s,
  gridLines: c = "default",
  allowAlternatingRows: d = !0,
  className: o,
  visible: a = !0
}) {
  if (a === !1) return null;
  const i = c === "default" || c === "both" ? "" : st[c];
  return /* @__PURE__ */ L("div", { className: [st.wrap, o].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ L(
      "table",
      {
        className: [
          st.table,
          i,
          d ? st.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          s != null && /* @__PURE__ */ r("caption", { className: st.caption, children: s }),
          /* @__PURE__ */ r("thead", { children: /* @__PURE__ */ r("tr", { children: e.map((h) => /* @__PURE__ */ r(
            "th",
            {
              className: h.align != null ? st[h.align] : void 0,
              scope: "col",
              children: h.header
            },
            h.key
          )) }) }),
          /* @__PURE__ */ r("tbody", { children: t.map((h) => /* @__PURE__ */ r("tr", { children: e.map((u) => /* @__PURE__ */ r(
            "td",
            {
              className: u.align != null ? st[u.align] : void 0,
              children: u.render != null ? u.render(h) : h[u.key]
            },
            u.key
          )) }, n(h))) })
        ]
      }
    ),
    t.length === 0 && l != null && /* @__PURE__ */ r("div", { className: st.empty, children: l })
  ] });
}
const wr = "_emptyState_1swxw_1", zr = "_icon_1swxw_13", Lr = "_title_1swxw_18", $r = "_description_1swxw_24", Nr = "_action_1swxw_30", Ft = {
  emptyState: wr,
  icon: zr,
  title: Lr,
  description: $r,
  action: Nr
};
function Hm({
  icon: e,
  title: t,
  description: n,
  action: l,
  className: s,
  visible: c = !0
}) {
  return c === !1 ? null : /* @__PURE__ */ L("div", { className: [Ft.emptyState, s].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ r("div", { className: Ft.icon, children: e }),
    /* @__PURE__ */ r("div", { className: Ft.title, children: t }),
    n != null && /* @__PURE__ */ r("div", { className: Ft.description, children: n }),
    l != null && /* @__PURE__ */ r("div", { className: Ft.action, children: l })
  ] });
}
const Sr = "_field_149oz_1", Or = "_label_149oz_8", Ar = "_required_149oz_14", Hr = "_hint_149oz_19", jr = "_error_149oz_24", Kt = {
  field: Sr,
  label: Or,
  required: Ar,
  hint: Hr,
  error: jr
};
function jm({
  label: e,
  htmlFor: t,
  required: n,
  hint: l,
  supporting: s,
  error: c,
  children: d,
  className: o,
  visible: a = !0
}) {
  const i = l ?? s, h = E1(), u = E1(), b = E1();
  if (a === !1) return null;
  const y = c != null ? u : i != null ? b : null, k = typeof d == "function" ? d({ inputId: h, hintId: b, errorId: u }) : d, m = ve(k) && typeof k.props.id == "string" ? k.props.id : void 0, g = m ?? t ?? h, p = ve(k) && (y != null || m == null && typeof k.type == "string"), f = m != null || t != null || p, v = p && ve(k) ? T0(k, {
    id: g,
    "aria-describedby": y != null ? [
      k.props["aria-describedby"],
      y
    ].filter((M) => typeof M == "string").join(" ") || void 0 : k.props["aria-describedby"],
    "aria-invalid": c != null ? !0 : k.props["aria-invalid"]
  }) : k;
  return /* @__PURE__ */ L("div", { className: [Kt.field, o].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ L(
      "label",
      {
        className: Kt.label,
        htmlFor: f ? g : void 0,
        children: [
          e,
          n === !0 && /* @__PURE__ */ r("span", { className: Kt.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    v,
    c != null ? /* @__PURE__ */ r("div", { id: u, className: Kt.error, "aria-live": "polite", children: c }) : i != null ? /* @__PURE__ */ r("div", { id: b, className: Kt.hint, children: i }) : null
  ] });
}
const Tr = "_formfield_1kmwl_1", Vr = "_content_1kmwl_8", Dr = "_floating_1kmwl_43", Er = "_label_1kmwl_111", qr = "_start_1kmwl_132", Ir = "_required_1kmwl_169", Pr = "_end_1kmwl_175", Rr = "_filled_1kmwl_192", Br = "_flat_1kmwl_199", Fr = "_helper_1kmwl_206", Kr = "_invalid_1kmwl_211", Fe = {
  formfield: Tr,
  content: Vr,
  floating: Dr,
  label: Er,
  start: qr,
  required: Ir,
  end: Pr,
  filled: Rr,
  flat: Br,
  helper: Fr,
  invalid: Kr
};
function Tm({
  text: e,
  start: t,
  end: n,
  helper: l,
  component: s,
  allowFloatingLabel: c = !0,
  variant: d = "outlined",
  invalid: o = !1,
  required: a = !1,
  children: i,
  className: h,
  visible: u = !0
}) {
  const b = E1(), y = E1();
  if (u === !1) return null;
  const k = s ?? b, m = typeof i == "function" ? i({
    inputId: k
  }) : i, g = ve(m) ? m.type : null, p = typeof g == "string", f = ve(m) && typeof g != "symbol", v = ve(m) ? m.props : null, M = typeof v?.id == "string" ? v.id : void 0, _ = p && ve(m) ? m.type.toLowerCase() : null, w = _ != null && (_ === "input" ? typeof v?.type != "string" || v.type.toLowerCase() !== "hidden" : _ === "button" || _ === "meter" || _ === "output" || _ === "progress" || _ === "select" || _ === "textarea"), C = f && (l != null || o || M == null && w), z = M != null || s != null || C, A = _ === "input" && typeof v?.type == "string" ? v.type.toLowerCase() : null, O = _ === "textarea" || _ === "input" && (A == null || [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number"
  ].includes(A)), S = C && ve(m) ? T0(
    m,
    {
      id: M ?? k,
      ...c && O && v?.placeholder == null ? { placeholder: " " } : {},
      ...l != null ? {
        "aria-describedby": [
          v?.["aria-describedby"],
          y
        ].filter((x) => typeof x == "string").join(" ")
      } : {},
      ...o ? {
        "aria-invalid": !0
      } : {}
    }
  ) : m, $ = e != null ? /* @__PURE__ */ L(
    "label",
    {
      className: Fe.label,
      htmlFor: z ? M ?? k : void 0,
      children: [
        e,
        a === !0 && /* @__PURE__ */ r("span", { className: Fe.required, "aria-hidden": "true", children: "*" })
      ]
    }
  ) : null;
  return /* @__PURE__ */ L(
    "div",
    {
      className: [
        Fe.formfield,
        Fe[d],
        c ? Fe.floating : null,
        o ? Fe.invalid : null,
        h
      ].filter(Boolean).join(" "),
      children: [
        c ? null : $,
        /* @__PURE__ */ L("div", { className: Fe.content, children: [
          t != null && /* @__PURE__ */ r("div", { className: Fe.start, children: t }),
          S,
          c ? $ : null,
          n != null && /* @__PURE__ */ r("div", { className: Fe.end, children: n })
        ] }),
        l != null && /* @__PURE__ */ r("div", { id: y, className: Fe.helper, children: l })
      ]
    }
  );
}
const Wr = "_fieldset_18z6t_1", Zr = "_legend_18z6t_11", Ur = "_legendText_18z6t_20", Xr = "_toggle_18z6t_24", Gr = "_content_18z6t_45", Yr = "_summary_18z6t_49", gt = {
  fieldset: Wr,
  legend: Zr,
  legendText: Ur,
  toggle: Xr,
  content: Gr,
  summary: Yr
};
function Vm({
  text: e,
  headerTemplate: t,
  icon: n,
  iconColor: l,
  allowCollapse: s = !1,
  collapsed: c,
  defaultCollapsed: d = !1,
  summary: o,
  expandTitle: a,
  collapseTitle: i,
  expandAriaLabel: h,
  collapseAriaLabel: u,
  onExpand: b,
  onCollapse: y,
  children: k,
  className: m,
  visible: g = !0
}) {
  const p = E1(), [f, v] = W(d);
  if (g === !1) return null;
  const M = c ?? f, _ = s ? `${p}-content` : void 0, w = () => {
    const $ = !M;
    c === void 0 && v($), $ ? y?.() : b?.();
  }, C = s || e != null || n != null || t != null, z = s ? M : !1, A = s && M && o != null, O = z ? a ?? "Expand" : i ?? "Collapse", S = z ? h ?? "Expand" : u ?? "Collapse";
  return /* @__PURE__ */ L(
    "fieldset",
    {
      className: [gt.fieldset, m].filter(Boolean).join(" "),
      children: [
        C ? /* @__PURE__ */ r("legend", { className: gt.legend, children: s ? /* @__PURE__ */ L(b1, { children: [
          /* @__PURE__ */ L(
            "button",
            {
              type: "button",
              className: gt.toggle,
              title: O,
              "aria-label": e == null ? S : void 0,
              "aria-expanded": !z,
              "aria-controls": _,
              onClick: w,
              children: [
                /* @__PURE__ */ r(
                  M1,
                  {
                    name: z ? "plus" : "minus",
                    size: 16,
                    "aria-hidden": "true"
                  }
                ),
                n != null && /* @__PURE__ */ r(
                  M1,
                  {
                    name: n,
                    "aria-hidden": "true",
                    ...l != null ? { style: { color: l } } : {}
                  }
                ),
                e != null && /* @__PURE__ */ r("span", { className: gt.legendText, children: e })
              ]
            }
          ),
          t
        ] }) : /* @__PURE__ */ L(b1, { children: [
          n != null && /* @__PURE__ */ r(
            M1,
            {
              name: n,
              "aria-hidden": "true",
              ...l != null ? { style: { color: l } } : {}
            }
          ),
          e != null && /* @__PURE__ */ r("span", { className: gt.legendText, children: e }),
          t
        ] }) }) : null,
        /* @__PURE__ */ r(
          "div",
          {
            className: gt.content,
            id: _,
            hidden: z,
            children: k
          }
        ),
        A ? /* @__PURE__ */ r("div", { className: gt.summary, children: o }) : null
      ]
    }
  );
}
const Jr = "_form_19k3s_1", Qr = {
  form: Jr
}, C2 = qt(null);
function el() {
  const e = ft(C2);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function Dm({
  model: e,
  onSubmit: t,
  onInvalidSubmit: n,
  action: l,
  method: s,
  children: c,
  className: d
}) {
  const [o, a] = W({}), [i, h] = W(0), u = Q(o);
  u.current = o;
  const b = q((v) => {
    a(
      (M) => M[v.name] === v ? M : { ...M, [v.name]: v }
    );
  }, []), y = q((v) => {
    a((M) => {
      if (!(v in M)) return M;
      const _ = { ...M };
      return delete _[v], _;
    });
  }, []), k = q(() => {
    const v = {};
    for (const M of Object.values(u.current)) {
      const _ = M.validate();
      _.length > 0 && (v[M.name] = _);
    }
    return v;
  }, []), m = q(() => {
    const v = k();
    h((M) => M + 1), Object.keys(v).length === 0 ? t?.(e) : n?.(v);
  }, [k, e, t, n]), g = (v) => {
    l != null && s != null || (v.preventDefault(), m());
  }, p = g1(
    () => ({ registerField: b, unregisterField: y, submit: m, submitCount: i }),
    [b, y, m, i]
  ), f = [Qr.form, d].filter(Boolean).join(" ");
  return /* @__PURE__ */ r(C2.Provider, { value: p, children: /* @__PURE__ */ r(
    "form",
    {
      className: f,
      onSubmit: g,
      action: l,
      method: s,
      noValidate: !0,
      children: c
    }
  ) });
}
const zt = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", Em = (e = "Required") => (t) => zt(t) ? e : null, qm = (e = "Invalid email") => (t) => zt(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, Im = (e, t = "Invalid format") => (n) => zt(n) || e.test(String(n)) ? null : t, Pm = (e, t = `Minimum ${e} characters`) => (n) => zt(n) || String(n).length >= e ? null : t, Rm = (e, t = `Maximum ${e} characters`) => (n) => zt(n) || String(n).length <= e ? null : t, Bm = (e, t, n = `Between ${e} and ${t}`) => (l) => {
  if (zt(l)) return null;
  const s = Number(l);
  return !Number.isNaN(s) && s >= e && s <= t ? null : n;
}, Fm = (e, t = "Values do not match") => (n, l) => {
  if (zt(n)) return null;
  const s = typeof e == "function" ? e(l) : e;
  return n === s ? null : t;
}, Km = (e = "Required") => (t) => t === !0 ? null : e, Wm = (e) => (t, n) => e(t, n);
function tl(e, t, n) {
  return e.map((l) => l(t, n)).filter((l) => l != null);
}
function Zm(e, t) {
  const { registerField: n, unregisterField: l, submitCount: s } = el(), [c, d] = W(t?.initialValue), [o, a] = W(!1), [i, h] = W(!1), u = Q(() => []);
  u.current = () => tl(t?.validate ?? [], c), v1(() => (n({ name: e, validate: () => u.current() }), () => l(e)), [e, n, l]), v1(() => {
    s > 0 && (a(!0), h(!1));
  }, [s]);
  const b = o && !i ? u.current() : [];
  return { value: c, setValue: (k) => {
    d(k), h(!0);
  }, errors: b };
}
const nl = "_select_1vjst_1", rl = "_invalid_1vjst_33", ll = "_xs_1vjst_40", ol = "_sm_1vjst_48", al = "_md_1vjst_56", sl = "_lg_1vjst_62", cl = "_xl_1vjst_68", b0 = {
  select: nl,
  invalid: rl,
  xs: ll,
  sm: ol,
  md: al,
  lg: sl,
  xl: cl
}, wt = q1(
  function({ size: t = "md", invalid: n = !1, options: l, children: s, className: c, ...d }, o) {
    return /* @__PURE__ */ r(
      "select",
      {
        ref: o,
        "data-size": t,
        className: [
          b0.select,
          b0[t],
          n ? b0.invalid : null,
          c
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...d,
        children: l != null ? l.map((a) => /* @__PURE__ */ r(
          "option",
          {
            value: a.value,
            disabled: a.disabled,
            children: a.label
          },
          a.value
        )) : s
      }
    );
  }
), w2 = [
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
], Wt = {
  string: "Contains",
  number: "Equals",
  boolean: "Equals",
  date: "Equals",
  enum: "Equals"
}, il = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
];
function dl(e) {
  return il.includes(e);
}
function _0(e, t) {
  return t.split(".").reduce((n, l) => {
    if (n != null)
      return n[l];
  }, e);
}
function F0(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function n0(e, t) {
  const n = F0(e), l = F0(t);
  if (typeof n == "number" && typeof l == "number") return n - l;
  const s = String(n ?? ""), c = String(l ?? "");
  return s < c ? -1 : s > c ? 1 : 0;
}
function x0(e) {
  if (e.secondOperator == null) return !1;
  if (dl(e.secondOperator)) return !0;
  const t = e.secondValue;
  return t != null && t !== "";
}
function K0(e, t, n) {
  const l = _0(t, e.property), s = W0(
    l,
    e.value,
    e.operator,
    n
  );
  if (!x0(e)) return s;
  const c = W0(
    l,
    e.secondValue,
    e.secondOperator,
    n
  );
  return (e.logicalOperator ?? "And") === "And" ? s && c : s || c;
}
function W0(e, t, n, l) {
  const s = l === "CaseInsensitive", c = (a) => s && typeof a == "string" ? a.toLowerCase() : a, d = c(e), o = c(t);
  switch (n) {
    case "Equals":
      return d === o || Array.isArray(d) && d.some((a) => c(a) === o);
    case "NotEquals":
      return d !== o && !(Array.isArray(d) && d.some((a) => c(a) === o));
    case "LessThan":
      return n0(d, o) < 0;
    case "LessThanOrEquals":
      return n0(d, o) <= 0;
    case "GreaterThan":
      return n0(d, o) > 0;
    case "GreaterThanOrEquals":
      return n0(d, o) >= 0;
    case "Contains":
      return typeof d == "string" && typeof o == "string" && d.includes(o);
    case "StartsWith":
      return typeof d == "string" && typeof o == "string" && d.startsWith(o);
    case "EndsWith":
      return typeof d == "string" && typeof o == "string" && d.endsWith(o);
    case "DoesNotContain":
      return typeof d == "string" && typeof o == "string" && !d.includes(o);
    case "In":
      return Array.isArray(o) && o.some((a) => c(a) === d);
    case "NotIn":
      return Array.isArray(o) && !o.some((a) => c(a) === d);
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
function E0(e) {
  return "filters" in e;
}
function z2(e, t, n = {}) {
  const l = n.logicalOperator ?? "And", s = n.caseSensitivity ?? "CaseInsensitive";
  if (E0(t)) {
    if (t.filters.length === 0) return !0;
    const c = t.operator ?? l;
    return t.filters[c === "Or" ? "some" : "every"](
      (d) => z2(e, d, { logicalOperator: c, caseSensitivity: s })
    );
  }
  return t.operator === "Custom", K0(t, e, s);
}
function L2(e, t, n = {}) {
  return e.filter((l) => z2(l, t, n));
}
function ul(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function $e(e) {
  return typeof e == "string" ? `"${ul(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map($e).join(", ")}]` : `"${String(e)}"`;
}
function hl(e) {
  const t = (s, c) => {
    switch (s) {
      case "Equals":
        return `${e.property}.Equals(${$e(c)})`;
      case "NotEquals":
        return `!${e.property}.Equals(${$e(c)})`;
      case "LessThan":
        return `${e.property}.LessThan(${$e(c)})`;
      case "LessThanOrEquals":
        return `${e.property}.LessThanOrEquals(${$e(c)})`;
      case "GreaterThan":
        return `${e.property}.GreaterThan(${$e(c)})`;
      case "GreaterThanOrEquals":
        return `${e.property}.GreaterThanOrEquals(${$e(c)})`;
      case "Contains":
        return `${e.property}.Contains(${$e(c)})`;
      case "StartsWith":
        return `${e.property}.StartsWith(${$e(c)})`;
      case "EndsWith":
        return `${e.property}.EndsWith(${$e(c)})`;
      case "DoesNotContain":
        return `!${e.property}.Contains(${$e(c)})`;
      case "In":
        return `${e.property}.In(${$e(c)})`;
      case "NotIn":
        return `!${e.property}.In(${$e(c)})`;
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
  if (!x0(e))
    return t(e.operator, e.value);
  const n = e.logicalOperator ?? "And", l = e.secondOperator;
  return `(${t(e.operator, e.value)} ${n} ${t(
    l,
    e.secondValue
  )})`;
}
function fl(e) {
  return E0(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(fl).filter(Boolean).join(` ${e.operator} `)})` : hl(e);
}
function pl(e) {
  return e.replace(/'/g, "''");
}
const ml = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function _l(e, t) {
  const n = e.property, l = t === "CaseInsensitive", s = (i) => l ? `tolower(${i})` : i, c = (i) => typeof i == "string" ? `'${pl(i)}'` : i instanceof Date ? `'${i.toISOString()}'` : String(i ?? ""), d = (i, h) => {
    const u = typeof h == "string", b = u && l ? s(n) : n;
    switch (i) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${b} ${ml[i]} ${u && l ? s(c(h)) : c(h)}`;
      case "Contains":
        return `contains(${s(n)}, ${s(c(h))})`;
      case "StartsWith":
        return `startswith(${s(n)}, ${s(c(h))})`;
      case "EndsWith":
        return `endswith(${s(n)}, ${s(c(h))})`;
      case "DoesNotContain":
        return `not(contains(${s(n)}, ${s(c(h))}))`;
      case "In":
        return Array.isArray(h) ? `${b} in (${h.map((y) => c(y)).join(", ")})` : `${b} in (${c(h)})`;
      case "NotIn":
        return Array.isArray(h) ? `not(${b} in (${h.map((y) => c(y)).join(", ")}))` : `not(${b} in (${c(h)}))`;
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
  if (!x0(e))
    return d(e.operator, e.value);
  const o = (e.logicalOperator ?? "And") === "And" ? "and" : "or", a = e.secondOperator;
  return `(${d(e.operator, e.value)} ${o} ${d(
    a,
    e.secondValue
  )})`;
}
function vl(e, t = {}) {
  const n = t.caseSensitivity ?? "CaseInsensitive";
  if (E0(e)) {
    if (e.filters.length === 0) return "";
    const l = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((s) => vl(s, { caseSensitivity: n })).filter(Boolean).join(` ${l} `)})`;
  }
  return _l(e, n);
}
function gl(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((n, l) => {
    for (const s of t) {
      const c = s.sortOrder === "Ascending" ? 1 : -1, d = n0(
        _0(n, s.property),
        _0(l, s.property)
      );
      if (d !== 0) return d * c;
    }
    return 0;
  });
}
const kl = "_filter_1h8zc_1", xl = "_rows_1h8zc_9", yl = "_row_1h8zc_9", bl = "_join_1h8zc_21", Ml = "_property_1h8zc_30", Cl = "_operator_1h8zc_34", wl = "_value_1h8zc_38", zl = "_remove_1h8zc_42", Ll = "_bar_1h8zc_58", $l = "_add_1h8zc_64", Nl = "_custom_1h8zc_78", Sl = "_summary_1h8zc_82", Ol = "_second_1h8zc_87", Al = "_secondAdd_1h8zc_91", Hl = "_addSecond_1h8zc_95", jl = "_joinSelect_1h8zc_109", G1 = {
  filter: kl,
  rows: xl,
  row: yl,
  join: bl,
  property: Ml,
  operator: Cl,
  value: wl,
  remove: zl,
  bar: Ll,
  add: $l,
  custom: Nl,
  summary: Sl,
  second: Ol,
  secondAdd: Al,
  addSecond: Hl,
  joinSelect: jl
}, Zt = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
], Z0 = {
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
function U0({
  property: e,
  value: t,
  onChange: n
}) {
  if (e.editor != null)
    return /* @__PURE__ */ r(b1, { children: e.editor({ value: t, onChange: n }) });
  const l = e.type ?? "string";
  if (l === "enum" && e.values != null)
    return /* @__PURE__ */ r(
      wt,
      {
        "aria-label": e.title ?? e.name,
        className: G1.value,
        options: e.values,
        value: String(t ?? ""),
        onChange: (c) => n(c.target.value)
      }
    );
  if (l === "boolean")
    return /* @__PURE__ */ r(
      wt,
      {
        "aria-label": e.title ?? e.name,
        className: G1.value,
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
  const s = l === "number" ? { type: "number" } : l === "date" ? { type: "date" } : { type: "text" };
  return /* @__PURE__ */ r(
    "input",
    {
      "aria-label": e.title ?? e.name,
      className: G1.value,
      ...s,
      value: t == null ? "" : String(t),
      onChange: (c) => n(
        l === "number" && c.target.value !== "" ? Number(c.target.value) : c.target.value
      )
    }
  );
}
function Um({
  properties: e,
  logicalOperator: t = "And",
  filterCaseSensitivity: n = "CaseInsensitive",
  initialRows: l,
  uniqueFilters: s = !1,
  className: c,
  viewChanged: d,
  items: o,
  children: a
}) {
  const [i, h] = W(
    () => l != null && l.length > 0 ? l.map((p, f) => ({ id: f, ...p })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: Wt[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), u = (p, f) => {
    h(
      (v) => v.map((M) => M.id === p ? { ...M, ...f } : M)
    );
  }, b = () => {
    const p = i[i.length - 1], f = Math.max(0, ...i.map((M) => M.id)) + 1, v = e[0];
    h((M) => [
      ...M,
      {
        id: f,
        property: p?.property ?? v?.name ?? "",
        operator: Wt[e.find(
          (_) => _.name === (p?.property ?? v?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, y = (p) => {
    h(
      (f) => f.length > 1 ? f.filter((v) => v.id !== p) : f
    );
  }, k = g1(() => {
    const p = [];
    for (const f of i) {
      if (f.property === "" || (f.value == null || f.value === "") && !Zt.includes(f.operator)) continue;
      const M = {
        property: f.property,
        operator: f.operator,
        value: f.value
      }, { secondOperator: _ } = f;
      _ != null && x0(f) && (M.secondOperator = _, M.secondValue = f.secondValue, M.logicalOperator = f.logicalOperator ?? "And"), p.push(M);
    }
    return p;
  }, [i]), m = g1(() => o == null || k.length === 0 ? o : L2(o, {
    operator: t,
    filters: k
  }, {
    caseSensitivity: n
  }), [o, k, t, n]);
  v1(() => {
    d != null && o != null && d(m ?? []);
  }, [m]);
  const g = (p) => e.find((f) => f.name === p) ?? { name: p, type: "string" };
  return /* @__PURE__ */ L("div", { className: [G1.filter, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ r("div", { className: G1.rows, role: "group", "aria-label": "Filter conditions", children: i.map((p, f) => {
      const v = g(p.property), M = s ? [Wt[v.type ?? "string"]] : w2, _ = !Zt.includes(p.operator), w = p.secondOperator != null;
      return /* @__PURE__ */ L(V0, { children: [
        /* @__PURE__ */ L("div", { className: G1.row, children: [
          f > 0 ? /* @__PURE__ */ r("span", { className: G1.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ r(
            wt,
            {
              "aria-label": `Condition ${f + 1} property`,
              className: G1.property,
              value: p.property,
              onChange: (C) => {
                const z = e.find(
                  (A) => A.name === C.target.value
                );
                u(p.id, {
                  property: C.target.value,
                  operator: Wt[z?.type ?? "string"],
                  value: void 0,
                  secondOperator: void 0,
                  secondValue: void 0,
                  logicalOperator: void 0
                });
              },
              options: e.map((C) => ({
                value: C.name,
                label: C.title ?? C.name
              }))
            }
          ),
          /* @__PURE__ */ r(
            wt,
            {
              "aria-label": `Condition ${f + 1} operator`,
              className: G1.operator,
              value: p.operator,
              onChange: (C) => {
                const z = C.target.value;
                u(
                  p.id,
                  Zt.includes(z) ? {
                    operator: z,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: z }
                );
              },
              options: M.map((C) => ({
                value: C,
                label: Z0[C]
              }))
            }
          ),
          _ ? /* @__PURE__ */ r(
            U0,
            {
              property: v,
              value: p.value,
              onChange: (C) => u(p.id, { value: C })
            }
          ) : null,
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: G1.remove,
              "aria-label": `Remove condition ${f + 1}`,
              onClick: () => y(p.id),
              children: /* @__PURE__ */ r(M1, { name: "close", size: "sm" })
            }
          )
        ] }),
        _ ? w ? /* @__PURE__ */ L(
          "div",
          {
            className: [G1.row, G1.second].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ r(
                wt,
                {
                  "aria-label": `Condition ${f + 1} second-operator logic`,
                  className: G1.joinSelect,
                  value: p.logicalOperator ?? "And",
                  onChange: (C) => u(p.id, {
                    logicalOperator: C.target.value
                  }),
                  options: [
                    { value: "And", label: "And" },
                    { value: "Or", label: "Or" }
                  ]
                }
              ),
              /* @__PURE__ */ r(
                wt,
                {
                  "aria-label": `Condition ${f + 1} second operator`,
                  className: G1.operator,
                  value: p.secondOperator,
                  onChange: (C) => {
                    const z = C.target.value;
                    u(
                      p.id,
                      Zt.includes(z) ? { secondOperator: z, secondValue: void 0 } : { secondOperator: z }
                    );
                  },
                  options: M.map((C) => ({
                    value: C,
                    label: Z0[C]
                  }))
                }
              ),
              p.secondOperator == null || !Zt.includes(p.secondOperator) ? /* @__PURE__ */ r(
                U0,
                {
                  property: v,
                  value: p.secondValue,
                  onChange: (C) => u(p.id, { secondValue: C })
                }
              ) : null,
              /* @__PURE__ */ r(
                "button",
                {
                  type: "button",
                  className: G1.remove,
                  "aria-label": `Remove second condition ${f + 1}`,
                  onClick: () => u(p.id, {
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  }),
                  children: /* @__PURE__ */ r(M1, { name: "close", size: "sm" })
                }
              )
            ]
          }
        ) : /* @__PURE__ */ r("div", { className: G1.secondAdd, children: /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: G1.addSecond,
            onClick: () => u(p.id, {
              secondOperator: Wt[v.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, p.id);
    }) }),
    /* @__PURE__ */ L("div", { className: G1.bar, children: [
      /* @__PURE__ */ r("button", { type: "button", className: G1.add, onClick: b, children: "Add filter" }),
      a != null ? /* @__PURE__ */ r("div", { className: G1.custom, children: a }) : null,
      o != null ? /* @__PURE__ */ L("span", { className: G1.summary, "aria-live": "polite", children: [
        m?.length ?? 0,
        " of ",
        o.length
      ] }) : null
    ] })
  ] });
}
const Tl = "_pager_4cpp0_1", Vl = "_alignLeft_4cpp0_10", Dl = "_alignCenter_4cpp0_14", El = "_alignRight_4cpp0_18", ql = "_alignJustify_4cpp0_22", Il = "_summary_4cpp0_26", Pl = "_controls_4cpp0_31", Rl = "_button_4cpp0_37", Bl = "_active_4cpp0_73", Fl = "_ellipsis_4cpp0_85", Kl = "_size_4cpp0_91", pe = {
  pager: Tl,
  alignLeft: Vl,
  alignCenter: Dl,
  alignRight: El,
  alignJustify: ql,
  summary: Il,
  controls: Pl,
  button: Rl,
  active: Bl,
  ellipsis: Fl,
  size: Kl
};
function Wl(e, t, n, l) {
  return e.replace("{0}", String(t)).replace("{1}", String(n)).replace("{2}", String(l));
}
function X0(e, t) {
  return e.replace("{0}", String(t));
}
function Zl(e, t, n) {
  if (t <= n)
    return Array.from({ length: t }, (o, a) => a + 1);
  const l = Math.floor(n / 2);
  let s = Math.max(1, e - l);
  const c = Math.min(t, s + n - 1);
  s = Math.max(1, c - n + 1);
  const d = [];
  for (let o = s; o <= c; o++) d.push(o);
  return s > 2 && d.unshift("ellipsis"), s > 1 && d.unshift(1), c < t - 1 && d.push("ellipsis"), c < t && d.push(t), d;
}
function Ul({
  count: e,
  pageSize: t,
  page: n,
  defaultPage: l = 1,
  pageSizeOptions: s,
  pageNumbersCount: c = 5,
  alwaysVisible: d = !1,
  horizontalAlign: o = "left",
  showPagingSummary: a,
  showPageSizeSelector: i = !0,
  pagingSummaryFormat: h = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: u,
  pageSizeText: b = "Items per page",
  firstPageTitle: y = "First page",
  prevPageTitle: k = "Previous page",
  nextPageTitle: m = "Next page",
  lastPageTitle: g = "Last page",
  pageTitleFormat: p = "Page {0}",
  pageAriaLabelFormat: f = "Page {0}",
  onPageChange: v,
  onPageSizeChange: M,
  ariaLabel: _ = "Pagination",
  className: w,
  visible: C = !0
}) {
  const z = n ?? l, [A, O] = W(z), S = n !== void 0, $ = S ? z : A, x = Math.max(1, Math.ceil(e / t)), N = Math.min(Math.max(1, $), x), T = a ?? !0, V = d || x > 1, j = Zl(N, x, c), D = q(
    (G) => {
      const m1 = Math.min(Math.max(1, G), x);
      S || O(m1);
      const d1 = (m1 - 1) * t;
      v?.({
        page: m1,
        skip: d1,
        top: t,
        pageCount: x,
        pageSize: t
      });
    },
    [S, v, x, t]
  ), P = o === "center" ? pe.alignCenter : o === "right" ? pe.alignRight : o === "justify" ? pe.alignJustify : pe.alignLeft, U = {
    count: e,
    pageNumber: N,
    pageSize: t,
    pageCount: x
  }, e1 = (G) => {
    const m1 = Array.from(
      G.currentTarget.querySelectorAll(
        "button[data-pager-page]"
      )
    ), d1 = m1.indexOf(document.activeElement);
    d1 !== -1 && (G.key === "ArrowRight" || G.key === "ArrowDown" ? (G.preventDefault(), (m1[d1 + 1] ?? m1[0])?.focus()) : G.key === "ArrowLeft" || G.key === "ArrowUp" ? (G.preventDefault(), (m1[d1 - 1] ?? m1[m1.length - 1])?.focus()) : G.key === "Home" ? (G.preventDefault(), m1[0]?.focus()) : G.key === "End" && (G.preventDefault(), m1[m1.length - 1]?.focus()));
  };
  return C === !1 || !V ? null : /* @__PURE__ */ L(
    "nav",
    {
      className: [pe.pager, P, w].filter(Boolean).join(" "),
      "aria-label": _,
      children: [
        T && /* @__PURE__ */ r("span", { className: pe.summary, "aria-live": "polite", children: u ? u(U) : Wl(h, N, x, e) }),
        /* @__PURE__ */ L(
          "div",
          {
            className: pe.controls,
            role: "group",
            "aria-label": _,
            onKeyDown: e1,
            children: [
              /* @__PURE__ */ r(
                "button",
                {
                  type: "button",
                  className: pe.button,
                  disabled: N <= 1,
                  onClick: () => D(1),
                  "aria-label": y,
                  title: y,
                  children: "«"
                }
              ),
              /* @__PURE__ */ r(
                "button",
                {
                  type: "button",
                  className: pe.button,
                  disabled: N <= 1,
                  onClick: () => D(N - 1),
                  "aria-label": k,
                  title: k,
                  children: "‹"
                }
              ),
              j.map(
                (G, m1) => G === "ellipsis" ? /* @__PURE__ */ r("span", { className: pe.ellipsis, "aria-hidden": "true", children: "…" }, `e${m1}`) : /* @__PURE__ */ r(
                  "button",
                  {
                    type: "button",
                    "data-pager-page": G,
                    className: [pe.button, G === N ? pe.active : ""].filter(Boolean).join(" "),
                    "aria-current": G === N ? "page" : void 0,
                    "aria-label": X0(f, G),
                    title: X0(p, G),
                    onClick: () => D(G),
                    children: G
                  },
                  G
                )
              ),
              /* @__PURE__ */ r(
                "button",
                {
                  type: "button",
                  className: pe.button,
                  disabled: N >= x,
                  onClick: () => D(N + 1),
                  "aria-label": m,
                  title: m,
                  children: "›"
                }
              ),
              /* @__PURE__ */ r(
                "button",
                {
                  type: "button",
                  className: pe.button,
                  disabled: N >= x,
                  onClick: () => D(x),
                  "aria-label": g,
                  title: g,
                  children: "»"
                }
              )
            ]
          }
        ),
        i && s && s.length > 0 && /* @__PURE__ */ L("label", { className: pe.size, children: [
          /* @__PURE__ */ r("span", { children: b }),
          /* @__PURE__ */ r(
            "select",
            {
              value: t,
              onChange: (G) => M?.(Number(G.target.value)),
              "aria-label": b,
              children: s.map((G) => /* @__PURE__ */ r("option", { value: G, children: G }, G))
            }
          )
        ] })
      ]
    }
  );
}
function N0(e) {
  const { pageNumber: t, onPageChange: n, summaryTemplate: l, showSummary: s, ...c } = e;
  return /* @__PURE__ */ r(
    Ul,
    {
      page: t,
      showPagingSummary: s,
      pagingSummaryFormat: "Page {0} of {1}",
      pageAriaLabelFormat: "{0}",
      pageTitleFormat: "{0}",
      alwaysVisible: !0,
      pagingSummaryTemplate: l ? (o) => l({
        count: o.count,
        pageNumber: o.pageNumber,
        pageSize: o.pageSize
      }) : void 0,
      onPageChange: n ? (o) => n(o.page) : void 0,
      ...c
    }
  );
}
const $2 = "";
function Xl(e, t, n, l, s) {
  if (t.length === 0) return e.map((o) => ({ type: "row", row: o }));
  const c = (o) => n.find((a) => a.property === o), d = (o, a, i) => {
    const h = t[a];
    if (h === void 0)
      return o.map((m) => ({ type: "row", row: m }));
    const u = c(h), b = /* @__PURE__ */ new Map(), y = [];
    o.forEach((m) => {
      const g = String(s(m, h) ?? ""), p = b.get(g);
      p ? p.push(m) : (b.set(g, [m]), y.push(g));
    });
    const k = [];
    return y.forEach((m) => {
      const g = b.get(m), p = [...i, m].join($2), f = g[0], v = f !== void 0 ? s(f, h) : void 0;
      k.push({
        type: "group",
        group: {
          key: p,
          display: v0(v, u?.format),
          property: h,
          title: u?.title ?? h,
          count: g.length,
          level: a
        }
      }), l.has(p) && k.push(...d(g, a + 1, [...i, m]));
    }), k;
  };
  return d(e, 0, []);
}
function G0(e, t, n) {
  const l = /* @__PURE__ */ new Set(), s = (c, d, o) => {
    const a = t[d];
    if (a === void 0 || c.length === 0) return;
    const i = /* @__PURE__ */ new Map(), h = [];
    c.forEach((u) => {
      const b = String(n(u, a) ?? ""), y = i.get(b);
      y ? y.push(u) : (i.set(b, [u]), h.push(b));
    }), h.forEach((u) => {
      const b = [...o, u].join($2);
      l.add(b), s(i.get(u), d + 1, [...o, u]);
    });
  };
  return s(e, 0, []), l;
}
function a0(e, t) {
  return e.property ?? `col-${t}`;
}
function Gl(e, t) {
  const n = {};
  let l = 0;
  return e.forEach(({ key: s, column: c }) => {
    if (!c.frozen) return;
    n[s] = l === 0 ? "0px" : `${l}px`;
    const d = t[s] ?? c.width ?? "8rem";
    l += parseFloat(d);
  }), n;
}
function Yl(e, t) {
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
function Ct(e, t) {
  if (t != null)
    return _0(e, t);
}
function v0(e, t) {
  if (t == null || t === "") return String(e ?? "");
  const n = /^N(\d+)$/i.exec(t);
  if (n && typeof e == "number") return e.toFixed(Number(n[1]));
  if (t === "d" || t === "D") {
    const l = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return l != null && !Number.isNaN(l.getTime()) ? l.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const Y0 = [
  "Ascending",
  "Descending",
  null
];
function Jl(e, t, n = {}) {
  const l = e.find((c) => c.property === t), s = Y0[(l ? Y0.indexOf(l.sortOrder) : -1) + 1] ?? null;
  return s == null ? e.filter((c) => c.property !== t) : n.multi ? [
    ...e.filter((c) => c.property !== t),
    { property: t, sortOrder: s }
  ] : [{ property: t, sortOrder: s }];
}
function Ql(e, t) {
  return gl(e, t);
}
function eo(e, t, n) {
  const l = Math.max(1, Math.ceil(e.length / n)), s = Math.min(Math.max(1, t), l), c = (s - 1) * n;
  return {
    items: e.slice(c, c + n),
    pageCount: l,
    pageNumber: s,
    total: e.length
  };
}
function to(e, t, n = {}) {
  const l = [...t.filters.entries()].filter(([, o]) => o.value !== "" && o.value !== void 0).map(
    ([o, a]) => ({
      property: o,
      operator: a.operator ?? "Contains",
      value: Yl(
        a.value,
        n.types?.[o] ?? "string"
      )
    })
  ), s = l.length > 0 ? L2(
    e,
    { operator: n.logicalOperator ?? "And", filters: l },
    {
      logicalOperator: n.logicalOperator ?? "And",
      caseSensitivity: n.caseSensitivity ?? "CaseInsensitive"
    }
  ) : e, c = Ql(s, t.sorts);
  return {
    ...eo(c, t.pageNumber, t.pageSize),
    filtered: c,
    sorts: t.sorts,
    filters: t.filters,
    pageSize: t.pageSize
  };
}
function J0(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
function no(e, t, n) {
  if (t.type === "custom") return t.compute?.(e);
  if (t.type === "count") return e.length;
  const l = [];
  switch (e.forEach((s) => {
    const c = n(s, t.property);
    if (c == null || c === "") return;
    const d = Number(c);
    Number.isFinite(d) && l.push(d);
  }), t.type) {
    case "sum":
      return l.length > 0 ? l.reduce((s, c) => s + c, 0) : void 0;
    case "avg":
      return l.length > 0 ? l.reduce((s, c) => s + c, 0) / l.length : void 0;
    case "min":
      return l.length > 0 ? Math.min(...l) : void 0;
    case "max":
      return l.length > 0 ? Math.max(...l) : void 0;
    default:
      return;
  }
}
function ro(e, t, n = Ct) {
  const l = (c) => /["\r\n,]/.test(c) ? `"${c.replace(/"/g, '""')}"` : c, s = [
    t.map((c) => l(c.title ?? c.property ?? "")).join(",")
  ];
  return e.forEach((c) => {
    s.push(
      t.map((d) => l(v0(n(c, d.property), d.format))).join(",")
    );
  }), `${s.join(`\r
`)}\r
`;
}
const lo = "_grid_gf8ma_1", oo = "_toolbar_gf8ma_8", ao = "_picker_gf8ma_13", so = "_pickerButton_gf8ma_17", co = "_pickerPanel_gf8ma_31", io = "_pickerItem_gf8ma_46", uo = "_groupPanel_gf8ma_55", ho = "_groupPanelActive_gf8ma_66", fo = "_groupPanelText_gf8ma_70", po = "_groupChip_gf8ma_74", mo = "_groupRemove_gf8ma_85", _o = "_groupRow_gf8ma_94", vo = "_groupCell_gf8ma_98", go = "_groupToggle_gf8ma_103", ko = "_editRow_gf8ma_116", xo = "_editCell_gf8ma_120", yo = "_editInput_gf8ma_125", bo = "_commandCell_gf8ma_135", Mo = "_commandButton_gf8ma_141", Co = "_data_gf8ma_156", wo = "_table_gf8ma_163", zo = "_header_gf8ma_169", Lo = "_center_gf8ma_181", $o = "_right_gf8ma_185", No = "_sortButton_gf8ma_189", So = "_sortIndicator_gf8ma_207", Oo = "_sortIndex_gf8ma_211", Ao = "_cell_gf8ma_222", Ho = "_clickable_gf8ma_236", jo = "_frozen_gf8ma_244", To = "_selected_gf8ma_250", Vo = "_resizeHandle_gf8ma_258", Do = "_filterCell_gf8ma_276", Eo = "_filterSelect_gf8ma_284", qo = "_filterInput_gf8ma_294", Io = "_empty_gf8ma_305", Po = "_loading_gf8ma_311", Ro = "_visuallyHidden_gf8ma_325", Bo = "_virtualScroller_gf8ma_334", Fo = "_spacerRow_gf8ma_339", Ko = "_footerRow_gf8ma_344", Wo = "_footerCell_gf8ma_348", Zo = "_footerValue_gf8ma_355", p1 = {
  grid: lo,
  toolbar: oo,
  picker: ao,
  pickerButton: so,
  pickerPanel: co,
  pickerItem: io,
  groupPanel: uo,
  groupPanelActive: ho,
  groupPanelText: fo,
  groupChip: po,
  groupRemove: mo,
  groupRow: _o,
  groupCell: vo,
  groupToggle: go,
  editRow: ko,
  editCell: xo,
  editInput: yo,
  commandCell: bo,
  commandButton: Mo,
  data: Co,
  table: wo,
  header: zo,
  center: Lo,
  right: $o,
  sortButton: No,
  sortIndicator: So,
  sortIndex: Oo,
  cell: Ao,
  clickable: Ho,
  frozen: jo,
  selected: To,
  resizeHandle: Vo,
  filterCell: Do,
  filterSelect: Eo,
  filterInput: qo,
  empty: Io,
  loading: Po,
  visuallyHidden: Ro,
  virtualScroller: Bo,
  spacerRow: Fo,
  footerRow: Ko,
  footerCell: Wo,
  footerValue: Zo
}, Uo = {
  Ascending: "ascending",
  Descending: "descending"
};
function Q0(e, t) {
  return e.filterable ?? t;
}
function Xo(e, t) {
  return e.sortable ?? t;
}
function Go(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function Xm({
  columns: e,
  rows: t,
  rowKey: n,
  allowSorting: l = !1,
  allowMultiColumnSorting: s = !1,
  showSortIndex: c = !1,
  allowFiltering: d = !1,
  filterCaseSensitivity: o = "CaseInsensitive",
  logicalOperator: a = "And",
  allowPaging: i = !1,
  pageSize: h = 10,
  pageSizeOptions: u,
  pageNumbersCount: b = 5,
  pagerPosition: y = "Bottom",
  showPagingSummary: k = !0,
  showPageSizeSelector: m = !0,
  selectionMode: g = "None",
  selectedKeys: p,
  onSelectionChange: f,
  showColumnPicker: v = !1,
  columnPickerText: M = "Columns",
  allowColumnResize: _ = !1,
  allowColumnReorder: w = !1,
  allowGrouping: C = !1,
  groupPanelText: z = "Drag a column header here to group",
  groupExpanded: A = !0,
  aggregates: O,
  showExportButton: S = !1,
  exportFileName: $ = "grid-data",
  serverMode: x = !1,
  totalCount: N,
  onRangeChange: T,
  virtualize: V = !1,
  virtualRowHeight: j = 40,
  virtualHeight: D = 480,
  editMode: P = "None",
  allowRowCreate: U = !1,
  onRowUpdate: e1,
  onRowCreate: G,
  onRowDelete: m1,
  isLoading: d1 = !1,
  empty: l1 = "No records found",
  ariaLabel: B,
  className: c1,
  onRowClick: r1
}) {
  const u1 = B != null ? `${B} ` : "", [o1, w1] = W([]), [L1, Y1] = W(
    /* @__PURE__ */ new Map()
  ), [y1, P1] = W(1), [C1, oe] = W(h), [ne, J1] = W(
    () => e.map((E, I) => a0(E, I))
  ), [we, ge] = W(
    () => new Set(
      e.map((E, I) => E.visible !== !1 ? a0(E, I) : "").filter(Boolean)
    )
  ), [ae, Z] = W({}), [H, K] = W(!1), [Y, f1] = W([]), [t1, k1] = W(
    null
  ), [O1, R1] = W(null), [B1, re] = W({}), [ot, J] = W(0), [$1, de] = W(D), Oe = Q(null), ue = Q(null), N1 = g1(() => {
    const E = /* @__PURE__ */ new Map();
    return e.forEach((I, s1) => E.set(a0(I, s1), I)), E;
  }, [e]), V1 = g1(
    () => ne.filter((E) => we.has(E)).map((E) => ({ key: E, column: N1.get(E) })).filter(
      (E) => E.column != null
    ),
    [ne, we, N1]
  ), Ae = g1(
    () => Gl(V1, ae),
    [V1, ae]
  ), ke = P !== "None" || m1 != null || U, Q1 = g1(() => {
    if (x) {
      const E = N ?? t.length, I = Math.max(1, Math.ceil(E / C1));
      return {
        items: [...t],
        filtered: [...t],
        total: E,
        pageCount: I,
        pageNumber: y1,
        pageSize: C1,
        sorts: o1,
        filters: L1
      };
    }
    return to(
      t,
      {
        sorts: o1,
        filters: L1,
        pageNumber: y1,
        // Without a pager the grid shows every row (Radzen parity); the
        // internal slice only applies when paging UI is on.
        pageSize: i ? C1 : Number.MAX_SAFE_INTEGER
      },
      {
        logicalOperator: a,
        caseSensitivity: o,
        types: Object.fromEntries(
          e.filter((E) => E.type != null && E.property != null).map((E) => [
            E.property,
            E.type
          ])
        )
      }
    );
  }, [
    t,
    o1,
    L1,
    y1,
    C1,
    a,
    o,
    e,
    x,
    N,
    i
  ]), F = Q(T);
  v1(() => {
    F.current = T;
  });
  const a1 = g1(
    () => [...L1.entries()].filter(([, E]) => E.value !== "" && E.value !== void 0).map(([E, I]) => ({
      property: E,
      operator: I.operator ?? J0(
        e.find((s1) => s1.property === E)?.type ?? "string"
      ),
      value: I.value ?? ""
    })),
    [L1, e]
  );
  v1(() => {
    !x || F.current == null || F.current({
      start: (y1 - 1) * C1,
      count: C1,
      pageNumber: y1,
      pageSize: C1,
      sorts: o1,
      filters: a1,
      logicalOperator: a
    });
  }, [
    x,
    y1,
    C1,
    o1,
    a1,
    a
  ]);
  const j1 = g1(() => new Set(Y), [Y]), D1 = g1(() => t1 || (A ? G0(Q1.items, Y, Ct) : /* @__PURE__ */ new Set()), [t1, A, Q1.items, Y]), Pe = g1(
    () => Xl(Q1.items, Y, e, D1, Ct),
    [Q1.items, Y, e, D1]
  ), le = g1(
    () => Y.length > 0 ? V1.filter(
      (E) => E.column.property == null || !j1.has(E.column.property)
    ) : V1,
    [V1, Y, j1]
  ), R = (E) => {
    E !== "" && w1(Jl(o1, E, { multi: s }));
  }, X = (E, I) => {
    Y1((s1) => {
      const i1 = new Map(s1);
      return i1.set(E, I), i1;
    }), P1(1);
  }, n1 = (E) => {
    oe(E), P1(1);
  }, _1 = (E) => {
    if (g === "None") return;
    const I = n(E), s1 = p ?? [];
    let i1;
    g === "Single" ? i1 = s1.length === 1 && s1[0] === I ? [] : [I] : i1 = s1.includes(I) ? s1.filter((I1) => I1 !== I) : [...s1, I], f?.(i1);
  }, h1 = (E) => {
    r1?.(E);
  }, x1 = (E, I, s1) => {
    Oe.current = { key: E, startX: I, startWidth: s1 };
  }, H1 = (E) => {
    const I = Oe.current;
    if (!I) return;
    const s1 = E - I.startX, i1 = Math.max(48, I.startWidth + s1);
    Z((I1) => ({ ...I1, [I.key]: `${i1}px` }));
  }, A1 = () => {
    Oe.current = null;
  }, U1 = (E) => {
    ue.current = E;
  }, ee = (E) => {
    const I = ue.current;
    ue.current = null, !(!I || I === E) && J1((s1) => {
      const i1 = [...s1], I1 = i1.indexOf(I), De = i1.indexOf(E);
      return I1 < 0 || De < 0 ? s1 : (i1.splice(I1, 1), i1.splice(De, 0, I), i1);
    });
  }, he = (E) => {
    ge((I) => {
      const s1 = new Set(I);
      return s1.has(E) ? s1.delete(E) : s1.add(E), s1;
    });
  }, te = () => {
    const E = ue.current;
    if (ue.current = null, !E || !C) return;
    const s1 = N1.get(E)?.property;
    s1 && (f1(
      (i1) => i1.includes(s1) ? i1 : [...i1, s1]
    ), k1(null));
  }, X1 = (E) => {
    f1((I) => I.filter((s1) => s1 !== E)), k1(null);
  }, Re = (E) => {
    k1((I) => {
      const s1 = I ?? (A ? G0(Q1.items, Y, Ct) : /* @__PURE__ */ new Set()), i1 = new Set(s1);
      return i1.has(E) ? i1.delete(E) : i1.add(E), i1;
    });
  }, Ve = (E) => {
    const I = {};
    e.forEach((s1) => {
      s1.property && (I[s1.property] = Ct(E, s1.property));
    }), re(I), R1(String(n(E)));
  }, at = () => {
    const E = {};
    e.forEach((I) => {
      I.property && I.type === "boolean" && (E[I.property] = !1);
    }), re(E), R1("__new__");
  }, It = () => {
    R1(null), re({});
  }, Pt = (E) => {
    if (O1 === "__new__") {
      const I = Object.fromEntries(
        e.filter((s1) => s1.property).map((s1) => [s1.property, B1[s1.property]])
      );
      G?.(I);
    } else if (E != null) {
      const I = { ...E, ...B1 };
      e1?.(E, I);
    }
    It();
  }, mt = i && (y === "Top" || y === "TopAndBottom"), P0 = i && (y === "Bottom" || y === "TopAndBottom"), P2 = d && e.some((E) => Q0(E, d)), R2 = (E, I, s1) => E.render ? E.render(I, { index: 0 }) : v0(Ct(I, E.property), E.format), B2 = (E) => {
    const I = [p1.cell];
    return E.align === "center" && I.push(p1.center), E.align === "right" && I.push(p1.right), E.frozen && I.push(p1.frozen), I.join(" ");
  }, R0 = x ? t : Q1.filtered, F2 = () => {
    const E = ro(
      R0,
      le.map((I1) => I1.column)
    ), I = new Blob([`\uFEFF${E}`], {
      type: "text/csv;charset=utf-8"
    }), s1 = URL.createObjectURL(I), i1 = document.createElement("a");
    i1.href = s1, i1.download = `${$}.csv`, document.body.appendChild(i1), i1.click(), i1.remove(), URL.revokeObjectURL(s1);
  }, Lt = Pe.length, _t = g1(() => {
    if (!V || Lt === 0)
      return { start: 0, end: Lt, top: 0, bottom: 0 };
    const E = 5, I = Math.max(
      0,
      Math.floor(ot / j) - E
    ), s1 = Math.ceil($1 / j) + E * 2, i1 = Math.min(Lt, I + s1), I1 = I * j, De = Math.max(0, (Lt - i1) * j);
    return { start: I, end: i1, top: I1, bottom: De };
  }, [V, Lt, ot, j, $1]), y0 = le.length + (ke ? 1 : 0);
  return /* @__PURE__ */ L("div", { className: [p1.grid, c1].filter(Boolean).join(" "), children: [
    mt && /* @__PURE__ */ r(
      N0,
      {
        pageNumber: Q1.pageNumber,
        pageSize: Q1.pageSize,
        count: Q1.total,
        pageSizeOptions: u,
        pageNumbersCount: b,
        showSummary: k,
        showPageSizeSelector: m,
        ariaLabel: `${u1}${P0 ? "Pagination (top)" : "Pagination"}`,
        onPageChange: P1,
        onPageSizeChange: n1
      }
    ),
    (C || U || v || S) && /* @__PURE__ */ L("div", { className: p1.toolbar, children: [
      C && /* @__PURE__ */ r(
        "div",
        {
          className: [
            p1.groupPanel,
            Y.length > 0 ? p1.groupPanelActive : ""
          ].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: C ? (E) => E.preventDefault() : void 0,
          onDrop: C ? te : void 0,
          children: Y.length > 0 ? Y.map((E) => {
            const I = e.find((s1) => s1.property === E)?.title ?? E;
            return /* @__PURE__ */ L("span", { className: p1.groupChip, children: [
              I,
              ":",
              " ",
              /* @__PURE__ */ r(
                "button",
                {
                  type: "button",
                  className: p1.groupRemove,
                  onClick: () => X1(E),
                  "aria-label": `Remove group by ${I}`,
                  children: /* @__PURE__ */ r(M1, { name: "close", size: "sm" })
                }
              )
            ] }, E);
          }) : /* @__PURE__ */ r("span", { className: p1.groupPanelText, children: z })
        }
      ),
      U && /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          className: p1.pickerButton,
          onClick: at,
          children: "Add row"
        }
      ),
      v && /* @__PURE__ */ L("div", { className: p1.picker, children: [
        /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: p1.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": H,
            onClick: () => K((E) => !E),
            children: M
          }
        ),
        H && /* @__PURE__ */ r(
          "div",
          {
            className: p1.pickerPanel,
            role: "menu",
            "aria-label": M,
            children: e.map((E, I) => {
              const s1 = a0(E, I);
              return /* @__PURE__ */ L("label", { className: p1.pickerItem, children: [
                /* @__PURE__ */ r(
                  "input",
                  {
                    type: "checkbox",
                    checked: we.has(s1),
                    onChange: () => he(s1)
                  }
                ),
                E.title ?? E.property
              ] }, s1);
            })
          }
        )
      ] }),
      S && /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          className: p1.pickerButton,
          onClick: F2,
          children: "Export CSV"
        }
      )
    ] }),
    /* @__PURE__ */ L(
      "div",
      {
        className: [p1.data, V ? p1.virtualScroller : ""].filter(Boolean).join(" "),
        style: V ? { maxHeight: D } : void 0,
        onScroll: V ? (E) => {
          J(E.currentTarget.scrollTop), de(E.currentTarget.clientHeight);
        } : void 0,
        children: [
          /* @__PURE__ */ L(
            "table",
            {
              className: p1.table,
              role: "grid",
              "aria-rowcount": (V ? Lt : Q1.total) + 1,
              "aria-label": B,
              "aria-busy": d1 || void 0,
              children: [
                /* @__PURE__ */ L("colgroup", { children: [
                  le.map(({ key: E, column: I }) => /* @__PURE__ */ r(
                    "col",
                    {
                      style: {
                        width: ae[E] ?? I.width,
                        minWidth: I.minWidth,
                        maxWidth: I.maxWidth
                      }
                    },
                    E
                  )),
                  ke && /* @__PURE__ */ r("col", { style: { width: "8rem" } })
                ] }),
                /* @__PURE__ */ L("thead", { children: [
                  /* @__PURE__ */ L("tr", { children: [
                    le.map(({ key: E, column: I }) => {
                      const s1 = Xo(I, l), i1 = o1.find((fe) => fe.property === I.property), I1 = i1 ? o1.indexOf(i1) + 1 : 0, De = I.align ?? "left";
                      return /* @__PURE__ */ L(
                        "th",
                        {
                          "aria-sort": s1 && i1 ? Uo[i1.sortOrder] : "none",
                          className: [
                            p1.header,
                            De === "center" ? p1.center : "",
                            De === "right" ? p1.right : "",
                            I.frozen ? p1.frozen : ""
                          ].filter(Boolean).join(" "),
                          style: I.frozen ? { left: Ae[E] } : void 0,
                          scope: "col",
                          draggable: w || C || void 0,
                          onDragStart: w || C ? (fe) => {
                            fe.dataTransfer && (fe.dataTransfer.effectAllowed = "move"), U1(E);
                          } : void 0,
                          onDragOver: w ? (fe) => fe.preventDefault() : void 0,
                          onDrop: w ? () => ee(E) : void 0,
                          children: [
                            s1 ? /* @__PURE__ */ L(
                              "button",
                              {
                                type: "button",
                                className: p1.sortButton,
                                onClick: () => I.property != null && R(I.property),
                                "aria-label": i1 ? i1.sortOrder === "Ascending" ? `Sort ${I.title ?? I.property} descending` : `Sort ${I.title ?? I.property} ascending` : `Sort ${I.title ?? I.property} ascending`,
                                children: [
                                  I.title ?? I.property,
                                  i1 && /* @__PURE__ */ r(
                                    "span",
                                    {
                                      className: p1.sortIndicator,
                                      "aria-hidden": "true",
                                      children: i1.sortOrder === "Ascending" ? "▲" : "▼"
                                    }
                                  ),
                                  I1 > 1 && c && /* @__PURE__ */ r("span", { className: p1.sortIndex, children: I1 })
                                ]
                              }
                            ) : I.title ?? I.property,
                            _ && /* @__PURE__ */ r(
                              "span",
                              {
                                className: p1.resizeHandle,
                                "data-dx-grid-resize": !0,
                                role: "separator",
                                "aria-orientation": "vertical",
                                "aria-label": `Resize ${I.title ?? I.property}`,
                                onMouseDown: (fe) => {
                                  fe.preventDefault(), fe.stopPropagation();
                                  const $t = ae[E] ?? I.width, Be = $t ? parseFloat($t) : 96;
                                  x1(
                                    E,
                                    fe.clientX,
                                    Number.isFinite(Be) ? Be : 96
                                  );
                                },
                                onMouseMove: (fe) => {
                                  Oe.current?.key === E && H1(fe.clientX);
                                },
                                onMouseUp: A1,
                                onMouseLeave: () => {
                                  Oe.current?.key === E && A1();
                                }
                              }
                            )
                          ]
                        },
                        E
                      );
                    }),
                    ke && /* @__PURE__ */ r("th", { className: p1.header, scope: "col", children: "Actions" })
                  ] }),
                  P2 && /* @__PURE__ */ r("tr", { children: le.map(({ key: E, column: I }) => {
                    if (!Q0(I, d))
                      return /* @__PURE__ */ r("td", { className: p1.filterCell }, E);
                    const s1 = L1.get(I.property ?? "");
                    return /* @__PURE__ */ L("td", { className: p1.filterCell, children: [
                      /* @__PURE__ */ L(
                        "label",
                        {
                          className: p1.visuallyHidden,
                          htmlFor: `df-${I.property}`,
                          children: [
                            "Filter ",
                            I.title ?? I.property
                          ]
                        }
                      ),
                      /* @__PURE__ */ r(
                        "select",
                        {
                          id: `df-${I.property}`,
                          className: p1.filterSelect,
                          value: s1?.operator ?? J0(I.type ?? "string"),
                          onChange: (i1) => X(I.property ?? "", {
                            ...s1,
                            operator: i1.target.value
                          }),
                          "aria-label": `${I.title ?? I.property} operator`,
                          children: w2.filter((i1) => i1 !== "Custom").map(
                            (i1) => /* @__PURE__ */ r("option", { value: i1, children: i1 }, i1)
                          )
                        }
                      ),
                      /* @__PURE__ */ r(
                        "input",
                        {
                          className: p1.filterInput,
                          value: s1?.value ?? "",
                          onChange: (i1) => X(I.property ?? "", {
                            ...s1,
                            value: i1.target.value
                          }),
                          placeholder: `Filter ${I.title ?? I.property}`,
                          "aria-label": `${I.title ?? I.property} value`
                        }
                      )
                    ] }, E);
                  }) })
                ] }),
                /* @__PURE__ */ L("tbody", { children: [
                  O1 === "__new__" && /* @__PURE__ */ L("tr", { className: p1.editRow, children: [
                    le.map(({ key: E, column: I }) => /* @__PURE__ */ r("td", { className: p1.editCell, children: I.property && /* @__PURE__ */ r(
                      "input",
                      {
                        className: p1.editInput,
                        type: I.type === "number" ? "number" : I.type === "boolean" ? "checkbox" : "text",
                        checked: I.type === "boolean" ? !!B1[I.property] : void 0,
                        value: I.type === "boolean" ? void 0 : String(B1[I.property] ?? ""),
                        onChange: (s1) => re((i1) => ({
                          ...i1,
                          [I.property]: I.type === "boolean" ? s1.target.checked : s1.target.value
                        })),
                        "aria-label": `${I.title ?? I.property} (new)`
                      }
                    ) }, E)),
                    ke && /* @__PURE__ */ L("td", { className: p1.editCell, children: [
                      /* @__PURE__ */ r(
                        "button",
                        {
                          type: "button",
                          className: p1.commandButton,
                          onClick: () => Pt(),
                          children: "Save"
                        }
                      ),
                      /* @__PURE__ */ r(
                        "button",
                        {
                          type: "button",
                          className: p1.commandButton,
                          onClick: It,
                          children: "Cancel"
                        }
                      )
                    ] })
                  ] }),
                  _t.top > 0 && /* @__PURE__ */ r("tr", { className: p1.spacerRow, "aria-hidden": "true", children: /* @__PURE__ */ r(
                    "td",
                    {
                      colSpan: y0,
                      style: { height: _t.top }
                    }
                  ) }),
                  Pe.slice(_t.start, _t.end).map((E, I) => {
                    const s1 = _t.start + I, i1 = V ? s1 + 2 : void 0;
                    if (E.type === "group" && E.group) {
                      const Be = D1.has(E.group.key);
                      return /* @__PURE__ */ r(
                        "tr",
                        {
                          className: p1.groupRow,
                          "aria-rowindex": i1,
                          children: /* @__PURE__ */ r("td", { colSpan: y0, className: p1.groupCell, children: /* @__PURE__ */ L(
                            "button",
                            {
                              type: "button",
                              className: p1.groupToggle,
                              "aria-expanded": Be,
                              style: {
                                paddingInlineStart: `${E.group.level * 16}px`
                              },
                              onClick: () => Re(E.group.key),
                              children: [
                                /* @__PURE__ */ r("span", { "aria-hidden": "true", children: Be ? "▼" : "▶" }),
                                E.group.title,
                                ": ",
                                E.group.display,
                                " (",
                                E.group.count,
                                ")"
                              ]
                            }
                          ) })
                        },
                        `group-${E.group.key}`
                      );
                    }
                    const I1 = E.row, De = n(I1), fe = (p ?? []).includes(De), $t = O1 != null && O1 === String(De);
                    return /* @__PURE__ */ L(
                      "tr",
                      {
                        "aria-rowindex": i1,
                        className: [
                          r1 || g !== "None" ? p1.clickable : "",
                          fe ? p1.selected : "",
                          $t ? p1.editRow : ""
                        ].filter(Boolean).join(" "),
                        "aria-selected": g !== "None" ? fe : void 0,
                        onClick: r1 || g !== "None" ? (Be) => {
                          Go(Be.target) || (h1(I1), _1(I1));
                        } : void 0,
                        children: [
                          le.map(({ key: Be, column: xe }) => /* @__PURE__ */ r(
                            "td",
                            {
                              className: B2(xe),
                              style: xe.frozen ? { left: Ae[Be] } : void 0,
                              children: $t && xe.property ? /* @__PURE__ */ r(
                                "input",
                                {
                                  className: p1.editInput,
                                  type: xe.type === "number" ? "number" : xe.type === "boolean" ? "checkbox" : "text",
                                  checked: xe.type === "boolean" ? !!B1[xe.property] : void 0,
                                  value: xe.type === "boolean" ? void 0 : String(B1[xe.property] ?? ""),
                                  onChange: (B0) => re((K2) => ({
                                    ...K2,
                                    [xe.property]: xe.type === "boolean" ? B0.target.checked : B0.target.value
                                  })),
                                  "aria-label": `${xe.title ?? xe.property} (edit)`
                                }
                              ) : R2(xe, I1)
                            },
                            Be
                          )),
                          ke && /* @__PURE__ */ r("td", { className: p1.commandCell, children: $t ? /* @__PURE__ */ L(b1, { children: [
                            /* @__PURE__ */ r(
                              "button",
                              {
                                type: "button",
                                className: p1.commandButton,
                                onClick: () => Pt(I1),
                                children: "Save"
                              }
                            ),
                            /* @__PURE__ */ r(
                              "button",
                              {
                                type: "button",
                                className: p1.commandButton,
                                onClick: It,
                                children: "Cancel"
                              }
                            )
                          ] }) : /* @__PURE__ */ L(b1, { children: [
                            P !== "None" && /* @__PURE__ */ r(
                              "button",
                              {
                                type: "button",
                                className: p1.commandButton,
                                onClick: () => Ve(I1),
                                children: "Edit"
                              }
                            ),
                            m1 && /* @__PURE__ */ r(
                              "button",
                              {
                                type: "button",
                                className: p1.commandButton,
                                onClick: () => m1(I1),
                                children: "Delete"
                              }
                            )
                          ] }) })
                        ]
                      },
                      De
                    );
                  }),
                  _t.bottom > 0 && /* @__PURE__ */ r("tr", { className: p1.spacerRow, "aria-hidden": "true", children: /* @__PURE__ */ r(
                    "td",
                    {
                      colSpan: y0,
                      style: { height: _t.bottom }
                    }
                  ) })
                ] }),
                O && O.length > 0 && /* @__PURE__ */ r("tfoot", { children: /* @__PURE__ */ L("tr", { className: p1.footerRow, children: [
                  le.map(({ key: E, column: I }) => {
                    const s1 = O.filter(
                      (i1) => i1.property === I.property
                    );
                    return /* @__PURE__ */ r(
                      "td",
                      {
                        className: [
                          p1.footerCell,
                          I.align === "right" ? p1.right : "",
                          I.align === "center" ? p1.center : ""
                        ].filter(Boolean).join(" "),
                        children: s1.map((i1, I1) => /* @__PURE__ */ L(
                          "div",
                          {
                            className: p1.footerValue,
                            children: [
                              i1.title ? `${i1.title}: ` : "",
                              v0(
                                no(R0, i1, Ct),
                                i1.format
                              )
                            ]
                          },
                          `${i1.property}-${i1.type}-${I1}`
                        ))
                      },
                      E
                    );
                  }),
                  ke && /* @__PURE__ */ r("td", { className: p1.footerCell })
                ] }) })
              ]
            }
          ),
          Q1.items.length === 0 && !d1 && /* @__PURE__ */ r("div", { className: p1.empty, children: l1 }),
          d1 && /* @__PURE__ */ r("div", { className: p1.loading, role: "status", children: "Loading…" })
        ]
      }
    ),
    P0 && /* @__PURE__ */ r(
      N0,
      {
        pageNumber: Q1.pageNumber,
        pageSize: Q1.pageSize,
        count: Q1.total,
        pageSizeOptions: u,
        pageNumbersCount: b,
        showSummary: k,
        showPageSizeSelector: m,
        ariaLabel: `${u1}${mt ? "Pagination (bottom)" : "Pagination"}`,
        onPageChange: P1,
        onPageSizeChange: n1
      }
    )
  ] });
}
const Yo = "_wrap_1e4xo_1", Jo = "_grid_1e4xo_7", Qo = "_stacked_1e4xo_13", ea = "_item_1e4xo_19", ta = "_empty_1e4xo_25", Ut = {
  wrap: Yo,
  grid: Jo,
  stacked: Qo,
  item: ea,
  empty: ta
};
function Gm({
  data: e,
  pageSize: t = 10,
  pageSizeOptions: n,
  wrapItems: l = !1,
  itemTemplate: s,
  emptyMessage: c = "No records found",
  emptyTemplate: d,
  loadingTemplate: o,
  isLoading: a = !1,
  showPageSizeSelector: i = !0,
  className: h,
  ariaLabel: u = "Data list"
}) {
  const [b, y] = W(1), [k, m] = W(t), g = e.length, p = Math.max(1, Math.ceil(g / k)), f = Math.min(Math.max(1, b), p), v = g1(() => {
    const _ = (f - 1) * k;
    return e.slice(_, _ + k);
  }, [e, f, k]), M = l ? Ut.grid : Ut.stacked;
  return /* @__PURE__ */ L(
    "div",
    {
      className: [Ut.wrap, h].filter(Boolean).join(" "),
      "aria-label": u,
      children: [
        a && o != null ? o : g === 0 ? d ?? /* @__PURE__ */ r("div", { className: Ut.empty, children: c }) : /* @__PURE__ */ r("div", { className: M, children: v.map((_, w) => /* @__PURE__ */ r("div", { className: Ut.item, children: s ? s(_, w) : String(_) }, w)) }),
        /* @__PURE__ */ r(
          N0,
          {
            ariaLabel: `${u} Pagination`,
            pageNumber: f,
            pageSize: k,
            count: g,
            pageSizeOptions: n,
            showPageSizeSelector: i,
            onPageChange: y,
            onPageSizeChange: (_) => {
              m(_), y(1);
            }
          }
        )
      ]
    }
  );
}
const na = "_label_1qfpw_1", ra = {
  label: na
}, Ym = q1(function({ className: t, children: n, ...l }, s) {
  return /* @__PURE__ */ r(
    "label",
    {
      ref: s,
      className: [ra.label, t].filter(Boolean).join(" "),
      ...l,
      children: n
    }
  );
}), la = "_textbox_1wq7t_1", oa = "_invalid_1wq7t_37", aa = "_xs_1wq7t_44", sa = "_sm_1wq7t_50", ca = "_md_1wq7t_56", ia = "_lg_1wq7t_62", da = "_xl_1wq7t_68", M0 = {
  textbox: la,
  invalid: oa,
  xs: aa,
  sm: sa,
  md: ca,
  lg: ia,
  xl: da
}, ua = q1(
  function({
    size: t = "md",
    invalid: n = !1,
    className: l,
    visible: s = !0,
    type: c = "text",
    ...d
  }, o) {
    return s === !1 ? null : /* @__PURE__ */ r(
      "input",
      {
        ref: o,
        type: c,
        "data-size": t,
        className: [
          M0.textbox,
          M0[t],
          n ? M0.invalid : null,
          l
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...d
      }
    );
  }
), Jm = ua, ha = "_checkbox_e1een_1", fa = {
  checkbox: ha
}, Qm = q1(
  function({ className: t, indeterminate: n = !1, ...l }, s) {
    const c = Q(null);
    return v1(() => {
      c.current && (c.current.indeterminate = n);
    }, [n]), /* @__PURE__ */ r(
      "input",
      {
        ref: (d) => {
          c.current = d, typeof s == "function" ? s(d) : s && (s.current = d);
        },
        type: "checkbox",
        className: [fa.checkbox, t].filter(Boolean).join(" "),
        ...l
      }
    );
  }
), pa = {
  switch: "_switch_1y0ld_1"
}, ma = q1(function({ className: t, ...n }, l) {
  return /* @__PURE__ */ r(
    "input",
    {
      ref: l,
      type: "checkbox",
      role: "switch",
      className: [pa.switch, t].filter(Boolean).join(" "),
      ...n
    }
  );
}), _a = "_trigger_18hdv_1", va = "_tooltip_18hdv_7", ga = "_top_18hdv_34", ka = "_right_18hdv_40", xa = "_bottom_18hdv_46", ya = "_left_18hdv_52", ba = "_arrow_18hdv_58", Ma = "_floating_18hdv_70", ct = {
  trigger: _a,
  tooltip: va,
  "se-tooltip-in": "_se-tooltip-in_18hdv_1",
  top: ga,
  right: ka,
  bottom: xa,
  left: ya,
  arrow: ba,
  floating: Ma,
  "se-floating-tooltip-in": "_se-floating-tooltip-in_18hdv_1"
}, s0 = 8;
function Ca(e, t) {
  switch (t) {
    case "bottom":
      return {
        top: e.bottom + s0,
        left: e.left + e.width / 2,
        transform: "translate(-50%, 0)"
      };
    case "left":
      return {
        top: e.top + e.height / 2,
        left: e.left - s0,
        transform: "translate(-100%, -50%)"
      };
    case "right":
      return {
        top: e.top + e.height / 2,
        left: e.right + s0,
        transform: "translate(0, -50%)"
      };
    default:
      return {
        top: e.top - s0,
        left: e.left + e.width / 2,
        transform: "translate(-50%, -100%)"
      };
  }
}
function e_({
  content: e,
  children: t,
  placement: n = "top",
  delayMs: l = 300,
  durationMs: s,
  targetSelector: c,
  className: d
}) {
  const o = E1(), a = Q(null), i = Q(null), h = Q(null), [u, b] = W(!1), [y, k] = W(null), m = () => {
    a.current !== null && (window.clearTimeout(a.current), a.current = null), i.current !== null && (window.clearTimeout(i.current), i.current = null);
  }, g = () => {
    a.current = window.setTimeout(() => {
      b(!0), s != null && (i.current = window.setTimeout(() => b(!1), s));
    }, l);
  }, p = () => {
    m(), b(!1);
  };
  if (v1(() => () => m(), []), v1(() => {
    if (c || !u) return;
    const v = (M) => {
      M.key === "Escape" && p();
    };
    return window.addEventListener("keydown", v), () => window.removeEventListener("keydown", v);
  }, [c, u]), v1(() => {
    if (!c) return;
    let v = null, M = null, _ = null;
    const w = () => {
      v !== null && (window.clearTimeout(v), v = null);
    }, C = () => {
      M !== null && (window.clearTimeout(M), M = null);
    }, z = () => {
      w(), C(), _ = null, k(null);
    }, A = (T) => {
      w(), C(), _ = T, v = window.setTimeout(() => {
        v = null, k(T), s != null && (M = window.setTimeout(z, s));
      }, l);
    }, O = (T) => T instanceof Element ? T.closest(c) : null, S = (T) => {
      const V = O(T.target);
      !V || V === _ || A(V);
    }, $ = (T) => {
      const V = O(T.target);
      if (!V || V !== _) return;
      const j = T.relatedTarget;
      j instanceof Element && V.contains(j) || z();
    }, x = (T) => {
      T.key === "Escape" && z();
    }, N = () => z();
    return document.addEventListener("mouseover", S), document.addEventListener("mouseout", $), document.addEventListener("focusin", S), document.addEventListener("focusout", $), document.addEventListener("keydown", x), document.addEventListener("scroll", N, !0), window.addEventListener("resize", N), () => {
      w(), C(), document.removeEventListener("mouseover", S), document.removeEventListener("mouseout", $), document.removeEventListener("focusin", S), document.removeEventListener("focusout", $), document.removeEventListener("keydown", x), document.removeEventListener("scroll", N, !0), window.removeEventListener("resize", N), _ = null, k(null);
    };
  }, [c, l, s]), $0(() => {
    const v = y;
    if (!v) return;
    const M = v.getAttribute("aria-describedby");
    return v.setAttribute(
      "aria-describedby",
      [M, o].filter(Boolean).join(" ")
    ), () => {
      M == null ? v.removeAttribute("aria-describedby") : v.setAttribute("aria-describedby", M);
    };
  }, [y, o]), $0(() => {
    const v = h.current, M = y;
    !v || !M || Object.assign(
      v.style,
      Ca(M.getBoundingClientRect(), n)
    );
  }, [y, n]), c)
    return y ? /* @__PURE__ */ L(
      "span",
      {
        ref: h,
        role: "tooltip",
        id: o,
        className: [
          ct.tooltip,
          ct[n],
          ct.floating,
          d
        ].filter(Boolean).join(" "),
        children: [
          e,
          /* @__PURE__ */ r("span", { className: ct.arrow, "aria-hidden": "true" })
        ]
      }
    ) : null;
  const f = ve(t) ? T0(t, {
    "aria-describedby": [
      t.props["aria-describedby"],
      u ? o : null
    ].filter((v) => typeof v == "string").join(" ") || void 0
  }) : t;
  return (
    // Presentational hit-area: hover/focus handlers here, semantics and
    // keyboard interaction live on the child trigger.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ L(
      "span",
      {
        className: [ct.trigger, d].filter(Boolean).join(" "),
        onMouseEnter: g,
        onMouseLeave: p,
        onFocus: g,
        onBlur: p,
        children: [
          f,
          u && /* @__PURE__ */ L(
            "span",
            {
              role: "tooltip",
              id: o,
              className: [ct.tooltip, ct[n]].filter(Boolean).join(" "),
              children: [
                e,
                /* @__PURE__ */ r("span", { className: ct.arrow, "aria-hidden": "true" })
              ]
            }
          )
        ]
      }
    )
  );
}
const wa = "_dialog_18an3_1", za = "_sm_18an3_72", La = "_resizable_18an3_78", $a = "_md_18an3_81", Na = "_lg_18an3_85", Sa = "_header_18an3_89", Oa = "_title_18an3_100", Aa = "_description_18an3_107", Ha = "_close_18an3_114", ja = "_body_18an3_144", Ta = "_footer_18an3_156", Ye = {
  dialog: wa,
  "se-dialog-in": "_se-dialog-in_18an3_1",
  sm: za,
  resizable: La,
  md: $a,
  lg: Na,
  header: Sa,
  title: Oa,
  description: Aa,
  close: Ha,
  body: ja,
  footer: Ta
};
function Va({
  open: e,
  onClose: t,
  title: n,
  description: l,
  children: s,
  footer: c,
  size: d = "md",
  width: o,
  height: a,
  closeOnOverlayClick: i = !0,
  closeOnEsc: h = !0,
  resizable: u = !1,
  canClose: b,
  className: y
}) {
  const k = Q(null), m = E1(), g = E1(), p = Q(t);
  v1(() => {
    p.current = t;
  });
  const f = Q(b);
  v1(() => {
    f.current = b;
  });
  const v = Q(h);
  v1(() => {
    v.current = h;
  });
  const M = Q(!1), _ = Q(!1), w = q(() => {
    if (M.current) return;
    const z = f.current?.();
    if (z instanceof Promise) {
      z.then((A) => {
        A && !M.current && (M.current = !0, p.current());
      });
      return;
    }
    z !== !1 && (M.current = !0, p.current());
  }, []), C = q(() => {
    if (_.current) {
      _.current = !1;
      return;
    }
    p.current();
  }, []);
  return v1(() => {
    const z = k.current;
    if (z)
      if (e && !z.open) {
        const A = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        z.showModal(), (z.querySelector(
          'button[aria-label="Close dialog"]'
        ) ?? z.querySelector("button"))?.focus();
        const S = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const $ = (x) => {
          x.preventDefault(), v.current && w();
        };
        return z.addEventListener("cancel", $), () => {
          z.removeEventListener("cancel", $), document.body.style.overflow = S, A?.focus({ preventScroll: !0 });
        };
      } else !e && z.open && (_.current = M.current, M.current = !1, z.close());
  }, [e, w]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button.
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ L(
    "dialog",
    {
      ref: k,
      className: [
        Ye.dialog,
        Ye[d],
        u ? Ye.resizable : null,
        y
      ].filter(Boolean).join(" "),
      style: {
        width: o ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: o != null ? "none" : void 0,
        height: a ?? void 0
      },
      onClose: C,
      onClick: (z) => {
        z.target === k.current && i && w();
      },
      "aria-modal": "true",
      "aria-labelledby": n ? m : void 0,
      "aria-describedby": l ? g : void 0,
      children: [
        n && /* @__PURE__ */ L("header", { className: Ye.header, children: [
          /* @__PURE__ */ L("div", { children: [
            /* @__PURE__ */ r("h2", { id: m, className: Ye.title, children: n }),
            l && /* @__PURE__ */ r("p", { id: g, className: Ye.description, children: l })
          ] }),
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: Ye.close,
              onClick: () => {
                w();
              },
              "aria-label": "Close dialog",
              children: /* @__PURE__ */ r(M1, { name: "close", size: "sm" })
            }
          )
        ] }),
        s && /* @__PURE__ */ r("div", { className: Ye.body, children: s }),
        c && /* @__PURE__ */ r("footer", { className: Ye.footer, children: c })
      ]
    }
  );
}
const Da = "_typography_1jy8x_1", Ea = "_h1_1jy8x_39", qa = "_h2_1jy8x_45", Ia = "_h3_1jy8x_51", Pa = "_h4_1jy8x_57", Ra = "_h5_1jy8x_63", Ba = "_h6_1jy8x_69", Fa = "_button_1jy8x_99", Ka = "_caption_1jy8x_106", Wa = "_overline_1jy8x_112", C0 = {
  typography: Da,
  "display-1": "_display-1_1jy8x_8",
  "display-2": "_display-2_1jy8x_13",
  "display-3": "_display-3_1jy8x_18",
  "display-4": "_display-4_1jy8x_23",
  "display-5": "_display-5_1jy8x_28",
  "display-6": "_display-6_1jy8x_33",
  h1: Ea,
  h2: qa,
  h3: Ia,
  h4: Pa,
  h5: Ra,
  h6: Ba,
  "subtitle-1": "_subtitle-1_1jy8x_75",
  "subtitle-2": "_subtitle-2_1jy8x_81",
  "body-1": "_body-1_1jy8x_87",
  "body-2": "_body-2_1jy8x_92",
  button: Fa,
  caption: Ka,
  overline: Wa,
  "align-left": "_align-left_1jy8x_121",
  "align-center": "_align-center_1jy8x_125",
  "align-right": "_align-right_1jy8x_129",
  "align-justify": "_align-justify_1jy8x_133"
}, Za = {
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
}, Ua = {
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
}, Xa = {
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
}, Ga = {
  Left: "align-left",
  Right: "align-right",
  Center: "align-center",
  Justify: "align-justify",
  Start: "align-left",
  End: "align-right",
  JustifyAll: "align-justify"
}, Ya = q1(function({
  textStyle: t = "Body1",
  tagName: n = "Auto",
  textAlign: l,
  text: s,
  visible: c = !0,
  className: d,
  children: o,
  ...a
}, i) {
  if (c === !1) return null;
  const h = n === "Auto" ? Za[t] : Xa[n];
  return /* @__PURE__ */ r(
    h,
    {
      ref: i,
      className: [
        C0.typography,
        C0[Ua[t]],
        l ? C0[Ga[l]] : null,
        d
      ].filter(Boolean).join(" "),
      ...a,
      children: s ?? o
    }
  );
}), N2 = qt(null);
function t_() {
  const e = ft(N2);
  if (!e)
    throw new Error("useDialog must be used within a <DialogProvider>");
  return e;
}
function n_({ children: e }) {
  const [t, n] = W([]), l = Q(0), s = g1(
    () => ({
      confirm: (o = {}) => new Promise((a) => {
        l.current += 1;
        const i = l.current;
        n((h) => [...h, { seq: i, kind: "confirm", options: o, resolve: a }]);
      }),
      alert: (o = {}) => new Promise((a) => {
        l.current += 1;
        const i = l.current;
        n((h) => [...h, { seq: i, kind: "alert", options: o, resolve: a }]);
      })
    }),
    []
  ), c = t[0], d = (o) => {
    c && (c.kind === "confirm" ? c.resolve(o) : c.resolve(), n((a) => a.slice(1)));
  };
  return /* @__PURE__ */ L(N2.Provider, { value: s, children: [
    e,
    /* @__PURE__ */ r(
      Va,
      {
        open: t.length > 0,
        onClose: () => d(!1),
        title: c?.options.title ?? (c?.kind === "confirm" ? "Confirm" : "Alert"),
        size: c?.options.size,
        footer: c?.kind === "confirm" ? /* @__PURE__ */ L(b1, { children: [
          /* @__PURE__ */ r(Et, { variant: "text", onClick: () => d(!1), children: c.options.cancelText ?? "Cancel" }),
          /* @__PURE__ */ r(
            Et,
            {
              severity: c.options.tone ?? "primary",
              onClick: () => d(!0),
              children: c.options.confirmText ?? "Confirm"
            }
          )
        ] }) : /* @__PURE__ */ r(Et, { onClick: () => d(!0), children: c?.kind === "alert" ? c.options.okText ?? "OK" : "OK" }),
        children: c?.options.message != null && /* @__PURE__ */ r(Ya, { textStyle: "Body1", children: c.options.message })
      },
      c?.seq ?? 0
    )
  ] });
}
const Ja = "_viewport_lo2x9_1", Qa = "_topLeft_lo2x9_13", es = "_topRight_lo2x9_20", ts = "_bottomLeft_lo2x9_25", ns = "_toast_lo2x9_30", rs = "_leaving_lo2x9_61", ls = "_info_lo2x9_77", os = "_success_lo2x9_86", as = "_warning_lo2x9_95", ss = "_danger_lo2x9_104", cs = "_content_lo2x9_113", is = "_title_lo2x9_118", ds = "_description_lo2x9_141", us = "_dismiss_lo2x9_148", hs = "_actions_lo2x9_169", fs = "_action_lo2x9_169", ps = "_cancel_lo2x9_177", ms = "_progress_lo2x9_215", ze = {
  viewport: Ja,
  topLeft: Qa,
  topRight: es,
  bottomLeft: ts,
  toast: ns,
  "se-toast-in": "_se-toast-in_lo2x9_1",
  leaving: rs,
  "se-toast-out": "_se-toast-out_lo2x9_1",
  info: ls,
  success: os,
  warning: as,
  danger: ss,
  content: cs,
  title: is,
  description: ds,
  dismiss: us,
  actions: hs,
  action: fs,
  cancel: ps,
  progress: ms,
  "se-toast-progress": "_se-toast-progress_lo2x9_1"
}, S2 = qt(null);
function r_() {
  const e = ft(S2);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const _s = 200, vs = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function l_({
  children: e,
  durationMs: t = 4e3,
  position: n = "bottom-right",
  pauseOnHover: l = !0,
  className: s
}) {
  const [c, d] = W([]), [o, a] = W(!1), i = Q([]), h = Q(/* @__PURE__ */ new Map()), u = Q(!1), b = Q(0), y = ($) => {
    u.current = $, a($);
  }, k = q(($) => {
    const x = h.current.get($);
    x && (window.clearTimeout(x.timeoutId), x.remaining = Math.max(
      0,
      x.remaining - (Date.now() - x.startedAt)
    ));
  }, []), m = q(($) => {
    const x = h.current.get($);
    x && (window.clearTimeout(x.timeoutId), h.current.delete($));
  }, []), g = q(
    ($) => {
      m($), d((x) => {
        const N = x.filter((T) => T.id !== $);
        return i.current = N, N;
      });
    },
    [m]
  ), p = q(
    ($) => {
      const x = i.current.find((N) => N.id === $);
      !x || x.leaving || (x.onAutoClose?.(), g($));
    },
    [g]
  ), f = q(
    ($) => {
      const x = h.current.get($);
      !x || x.remaining <= 0 || (x.startedAt = Date.now(), x.timeoutId = window.setTimeout(() => p($), x.remaining));
    },
    [p]
  ), v = q(() => {
    u.current || h.current.forEach(($, x) => k(x)), y(!0);
  }, [k]), M = q(() => {
    h.current.forEach(($, x) => f(x)), y(!1);
  }, [f]);
  v1(() => {
    if (!l) return;
    const $ = () => {
      document.hidden ? v() : M();
    };
    return document.addEventListener("visibilitychange", $), () => document.removeEventListener("visibilitychange", $);
  }, [l, v, M]);
  const _ = q(
    ($) => {
      const x = i.current.find((N) => N.id === $);
      !x || x.leaving || (x.onDismiss?.(), d((N) => {
        const T = N.map(
          (V) => V.id === $ ? { ...V, leaving: !0 } : V
        );
        return i.current = T, T;
      }), window.setTimeout(() => g($), _s));
    },
    [g]
  ), w = q(
    ($) => {
      if ($.durationMs <= 0) return;
      const x = {
        remaining: $.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      h.current.set($.id, x), u.current || f($.id);
    },
    [f]
  ), C = q(
    ($) => {
      const x = i.current.find((T) => T.id === $.id), N = {
        id: $.id ?? ++b.current,
        title: $.title,
        description: $.description,
        severity: $.severity ?? "info",
        durationMs: $.durationMs ?? t,
        action: $.action,
        cancel: $.cancel,
        dismissible: $.dismissible ?? !0,
        closeOnClick: $.closeOnClick ?? !1,
        showProgress: $.showProgress ?? !1,
        position: $.position ?? n,
        onDismiss: $.onDismiss,
        onAutoClose: $.onAutoClose
      };
      d((T) => {
        const V = x ? T.map(
          (j) => j.id === N.id ? { ...N, leaving: !1 } : j
        ) : [...T, N];
        return i.current = V, V;
      }), x && m(N.id), w(N);
    },
    [t, n, w, m]
  ), z = g1(() => ({ toast: C }), [C]), A = g1(
    () => Array.from(/* @__PURE__ */ new Set([n, ...c.map(($) => $.position)])),
    [n, c]
  ), O = l ? v : void 0, S = l ? M : void 0;
  return /* @__PURE__ */ L(S2.Provider, { value: z, children: [
    e,
    A.map(($) => /* @__PURE__ */ r(
      "div",
      {
        className: [ze.viewport, ze[vs[$]], s].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: O,
        onMouseLeave: S,
        children: c.filter((x) => x.position === $).map((x) => /* @__PURE__ */ L(
          "div",
          {
            role: x.severity === "danger" ? "alert" : "status",
            "data-paused": o ? "true" : "false",
            "data-clickable": x.closeOnClick ? "true" : "false",
            className: [
              ze.toast,
              ze[x.severity],
              x.leaving ? ze.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: x.closeOnClick ? () => _(x.id) : void 0,
            children: [
              /* @__PURE__ */ L("div", { className: ze.content, children: [
                /* @__PURE__ */ r("div", { className: ze.title, children: x.title }),
                x.description && /* @__PURE__ */ r("div", { className: ze.description, children: x.description }),
                (x.action || x.cancel) && /* @__PURE__ */ L("div", { className: ze.actions, children: [
                  x.action && /* @__PURE__ */ r(
                    "button",
                    {
                      type: "button",
                      className: ze.action,
                      onClick: () => {
                        x.action?.onClick?.(), _(x.id);
                      },
                      children: x.action.label
                    }
                  ),
                  x.cancel && /* @__PURE__ */ r(
                    "button",
                    {
                      type: "button",
                      className: ze.cancel,
                      onClick: () => {
                        x.cancel?.onClick?.(), _(x.id);
                      },
                      children: x.cancel.label
                    }
                  )
                ] })
              ] }),
              x.dismissible && /* @__PURE__ */ r(
                "button",
                {
                  type: "button",
                  className: ze.dismiss,
                  onClick: () => _(x.id),
                  "aria-label": "Dismiss notification",
                  children: /* @__PURE__ */ r(M1, { name: "close", size: "sm" })
                }
              ),
              x.showProgress && x.durationMs > 0 && /* @__PURE__ */ r(
                "div",
                {
                  className: ze.progress,
                  style: { animationDuration: `${x.durationMs}ms` }
                }
              )
            ]
          },
          x.id
        ))
      },
      $
    ))
  ] });
}
const gs = "_alert_1i2a2_1", ks = "_xs_1i2a2_28", xs = "_sm_1i2a2_38", ys = "_lg_1i2a2_48", bs = "_xl_1i2a2_58", Ms = "_primary_1i2a2_69", Cs = "_secondary_1i2a2_74", ws = "_light_1i2a2_79", zs = "_base_1i2a2_84", Ls = "_dark_1i2a2_89", $s = "_info_1i2a2_94", Ns = "_success_1i2a2_99", Ss = "_warning_1i2a2_104", Os = "_danger_1i2a2_109", As = "_flat_1i2a2_116", Hs = "_outlined_1i2a2_123", js = "_filled_1i2a2_132", Ts = "_text_1i2a2_139", Vs = "_icon_1i2a2_181", Ds = "_content_1i2a2_192", Es = "_title_1i2a2_197", qs = "_body_1i2a2_203", Is = "_dismiss_1i2a2_209", Ke = {
  alert: gs,
  xs: ks,
  sm: xs,
  lg: ys,
  xl: bs,
  primary: Ms,
  secondary: Cs,
  light: ws,
  base: zs,
  dark: Ls,
  info: $s,
  success: Ns,
  warning: Ss,
  danger: Os,
  flat: As,
  outlined: Hs,
  filled: js,
  text: Ts,
  icon: Vs,
  content: Ds,
  title: Es,
  body: qs,
  dismiss: Is,
  "shade-lighter": "_shade-lighter_1i2a2_453",
  "shade-light": "_shade-light_1i2a2_453",
  "shade-dark": "_shade-dark_1i2a2_463",
  "shade-darker": "_shade-darker_1i2a2_467"
}, Ps = {
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
function o_({
  // Intentional Radzen-parity breaking change (1.0): defaults were
  // severity="info" variant="flat" dismissible={false}; Radzen ships
  // AlertStyle.Base + Variant.Filled + AllowClose. Migrate by passing
  // the old values explicitly.
  severity: e = "base",
  variant: t = "filled",
  shade: n,
  size: l = "md",
  title: s,
  icon: c,
  showIcon: d = !0,
  children: o,
  dismissible: a = !0,
  onDismiss: i,
  visible: h,
  onVisibleChange: u,
  className: b,
  ...y
}) {
  const [k, m] = W(!1);
  if (h === !1 || h === void 0 && k)
    return null;
  const g = () => {
    h === void 0 && m(!0), i?.(), u?.(!1);
  }, p = e, f = b2(t, "filled"), v = l0(n), M = c ?? (d ? /* @__PURE__ */ r(M1, { name: Ps[e] }) : null);
  return /* @__PURE__ */ L(
    "div",
    {
      role: "alert",
      ...y,
      className: [
        Ke.alert,
        Ke[p],
        Ke[f],
        v ? Ke[v] : null,
        Ke[l],
        b
      ].filter(Boolean).join(" "),
      children: [
        M != null && /* @__PURE__ */ r("span", { className: Ke.icon, "aria-hidden": "true", children: M }),
        /* @__PURE__ */ L("div", { className: Ke.content, children: [
          s && /* @__PURE__ */ r("div", { className: Ke.title, children: s }),
          o && /* @__PURE__ */ r("div", { className: Ke.body, children: o })
        ] }),
        a && /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: Ke.dismiss,
            onClick: g,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ r(M1, { name: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const Rs = "_skeleton_14cft_1", Bs = "_text_14cft_35", Fs = "_circle_14cft_40", Ks = "_rect_14cft_44", e2 = {
  skeleton: Rs,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_14cft_1",
  text: Bs,
  circle: Fs,
  rect: Ks
};
function a_({
  variant: e = "text",
  width: t,
  height: n,
  className: l
}) {
  const s = {};
  return t !== void 0 && (s.width = typeof t == "number" ? `${t}px` : t), n !== void 0 && (s.height = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ r(
    "span",
    {
      "aria-hidden": "true",
      className: [e2.skeleton, e2[e], l].filter(Boolean).join(" "),
      style: s
    }
  );
}
const Ws = "_row_ijmf6_1", Zs = "_gapXs_ijmf6_16", Us = "_gapSm_ijmf6_20", Xs = "_gapMd_ijmf6_24", Gs = "_gapLg_ijmf6_28", Ys = "_gapXl_ijmf6_32", Js = "_start_ijmf6_36", Qs = "_center_ijmf6_40", e5 = "_end_ijmf6_44", t5 = "_stretch_ijmf6_48", n5 = "_baseline_ijmf6_52", r5 = "_normal_ijmf6_56", l5 = "_noWrap_ijmf6_112", o5 = "_wrapReverse_ijmf6_116", a5 = "_gapRowXs_ijmf6_120", s5 = "_gapRowSm_ijmf6_124", c5 = "_gapRowMd_ijmf6_128", i5 = "_gapRowLg_ijmf6_132", d5 = "_gapRowXl_ijmf6_136", Nt = {
  row: Ws,
  gapXs: Zs,
  gapSm: Us,
  gapMd: Xs,
  gapLg: Gs,
  gapXl: Ys,
  start: Js,
  center: Qs,
  end: e5,
  stretch: t5,
  baseline: n5,
  normal: r5,
  "justify-start": "_justify-start_ijmf6_60",
  "justify-center": "_justify-center_ijmf6_64",
  "justify-end": "_justify-end_ijmf6_68",
  "justify-between": "_justify-between_ijmf6_72",
  "justify-around": "_justify-around_ijmf6_76",
  "justify-evenly": "_justify-evenly_ijmf6_80",
  "justify-normal": "_justify-normal_ijmf6_84",
  "justify-left": "_justify-left_ijmf6_88",
  "justify-right": "_justify-right_ijmf6_92",
  "justify-stretch": "_justify-stretch_ijmf6_96",
  "justify-space-between": "_justify-space-between_ijmf6_100",
  "justify-space-around": "_justify-space-around_ijmf6_104",
  "justify-space-evenly": "_justify-space-evenly_ijmf6_108",
  noWrap: l5,
  wrapReverse: o5,
  gapRowXs: a5,
  gapRowSm: s5,
  gapRowMd: c5,
  gapRowLg: i5,
  gapRowXl: d5
}, u5 = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
}, h5 = {
  xs: "gapRowXs",
  sm: "gapRowSm",
  md: "gapRowMd",
  lg: "gapRowLg",
  xl: "gapRowXl"
};
function f5(e) {
  return typeof e != "string" ? null : u5[e] ?? null;
}
function p5(e) {
  return typeof e != "string" ? null : h5[e] ?? null;
}
function t2(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function s_({
  gap: e,
  rowGap: t,
  align: n = "stretch",
  justify: l = "start",
  wrap: s = !0,
  className: c,
  style: d,
  ...o
}) {
  const a = f5(e), i = p5(t), h = e != null && !a ? typeof e == "number" ? `${e}px` : e : null, u = {
    // Keep --dx-col-gap in sync so Column grid math compensates for
    // arbitrary (non-tier) gaps exactly like it does for tier classes.
    // Set columnGap (not the gap shorthand): an inline `gap` would also
    // fix row-gap inline and clobber a tier rowGap class like gapRowXl.
    ...h ? {
      columnGap: h,
      "--dx-col-gap": h
    } : {},
    ...t != null && !i ? { rowGap: typeof t == "number" ? `${t}px` : t } : {},
    ...d
  };
  return /* @__PURE__ */ r(
    "div",
    {
      className: [
        Nt.row,
        Nt[n],
        Nt[`justify-${l}`],
        t2(s) != null ? Nt[t2(s)] : null,
        a ? Nt[a] : null,
        i ? Nt[i] : null,
        c
      ].filter(Boolean).join(" "),
      style: u,
      ...o
    }
  );
}
const m5 = "_column_sh0ss_1", _5 = "_Size1_sh0ss_15", v5 = "_Size2_sh0ss_24", g5 = "_Size3_sh0ss_33", k5 = "_Size4_sh0ss_42", x5 = "_Size5_sh0ss_51", y5 = "_Size6_sh0ss_60", b5 = "_Size7_sh0ss_69", M5 = "_Size8_sh0ss_78", C5 = "_Size9_sh0ss_87", w5 = "_Size10_sh0ss_96", z5 = "_Size11_sh0ss_105", L5 = "_Size12_sh0ss_114", $5 = "_Offset0_sh0ss_119", N5 = "_Offset1_sh0ss_122", S5 = "_Offset2_sh0ss_127", O5 = "_Offset3_sh0ss_132", A5 = "_Offset4_sh0ss_137", H5 = "_Offset5_sh0ss_142", j5 = "_Offset6_sh0ss_147", T5 = "_Offset7_sh0ss_152", V5 = "_Offset8_sh0ss_157", D5 = "_Offset9_sh0ss_162", E5 = "_Offset10_sh0ss_167", q5 = "_Offset11_sh0ss_172", I5 = "_Offset12_sh0ss_177", P5 = "_OrderFirst_sh0ss_182", R5 = "_OrderLast_sh0ss_185", B5 = "_Order0_sh0ss_188", F5 = "_Order1_sh0ss_191", K5 = "_Order2_sh0ss_194", W5 = "_Order3_sh0ss_197", Z5 = "_Order4_sh0ss_200", U5 = "_Order5_sh0ss_203", X5 = "_Order6_sh0ss_206", G5 = "_Order7_sh0ss_209", Y5 = "_Order8_sh0ss_212", J5 = "_Order9_sh0ss_215", Q5 = "_Order10_sh0ss_218", ec = "_Order11_sh0ss_221", tc = "_Order12_sh0ss_224", nc = "_xsSize1_sh0ss_229", rc = "_xsSize2_sh0ss_238", lc = "_xsSize3_sh0ss_247", oc = "_xsSize4_sh0ss_256", ac = "_xsSize5_sh0ss_265", sc = "_xsSize6_sh0ss_274", cc = "_xsSize7_sh0ss_283", ic = "_xsSize8_sh0ss_292", dc = "_xsSize9_sh0ss_301", uc = "_xsSize10_sh0ss_310", hc = "_xsSize11_sh0ss_321", fc = "_xsSize12_sh0ss_332", pc = "_xsOffset0_sh0ss_337", mc = "_xsOffset1_sh0ss_340", _c = "_xsOffset2_sh0ss_345", vc = "_xsOffset3_sh0ss_350", gc = "_xsOffset4_sh0ss_355", kc = "_xsOffset5_sh0ss_360", xc = "_xsOffset6_sh0ss_365", yc = "_xsOffset7_sh0ss_370", bc = "_xsOffset8_sh0ss_375", Mc = "_xsOffset9_sh0ss_380", Cc = "_xsOffset10_sh0ss_385", wc = "_xsOffset11_sh0ss_391", zc = "_xsOffset12_sh0ss_397", Lc = "_xsOrderFirst_sh0ss_403", $c = "_xsOrderLast_sh0ss_406", Nc = "_xsOrder0_sh0ss_409", Sc = "_xsOrder1_sh0ss_412", Oc = "_xsOrder2_sh0ss_415", Ac = "_xsOrder3_sh0ss_418", Hc = "_xsOrder4_sh0ss_421", jc = "_xsOrder5_sh0ss_424", Tc = "_xsOrder6_sh0ss_427", Vc = "_xsOrder7_sh0ss_430", Dc = "_xsOrder8_sh0ss_433", Ec = "_xsOrder9_sh0ss_436", qc = "_xsOrder10_sh0ss_439", Ic = "_xsOrder11_sh0ss_442", Pc = "_xsOrder12_sh0ss_445", Rc = "_smSize1_sh0ss_451", Bc = "_smSize2_sh0ss_460", Fc = "_smSize3_sh0ss_469", Kc = "_smSize4_sh0ss_478", Wc = "_smSize5_sh0ss_487", Zc = "_smSize6_sh0ss_496", Uc = "_smSize7_sh0ss_505", Xc = "_smSize8_sh0ss_514", Gc = "_smSize9_sh0ss_523", Yc = "_smSize10_sh0ss_532", Jc = "_smSize11_sh0ss_543", Qc = "_smSize12_sh0ss_554", e4 = "_smOffset0_sh0ss_559", t4 = "_smOffset1_sh0ss_562", n4 = "_smOffset2_sh0ss_567", r4 = "_smOffset3_sh0ss_572", l4 = "_smOffset4_sh0ss_577", o4 = "_smOffset5_sh0ss_582", a4 = "_smOffset6_sh0ss_587", s4 = "_smOffset7_sh0ss_592", c4 = "_smOffset8_sh0ss_597", i4 = "_smOffset9_sh0ss_602", d4 = "_smOffset10_sh0ss_607", u4 = "_smOffset11_sh0ss_613", h4 = "_smOffset12_sh0ss_619", f4 = "_smOrderFirst_sh0ss_625", p4 = "_smOrderLast_sh0ss_628", m4 = "_smOrder0_sh0ss_631", _4 = "_smOrder1_sh0ss_634", v4 = "_smOrder2_sh0ss_637", g4 = "_smOrder3_sh0ss_640", k4 = "_smOrder4_sh0ss_643", x4 = "_smOrder5_sh0ss_646", y4 = "_smOrder6_sh0ss_649", b4 = "_smOrder7_sh0ss_652", M4 = "_smOrder8_sh0ss_655", C4 = "_smOrder9_sh0ss_658", w4 = "_smOrder10_sh0ss_661", z4 = "_smOrder11_sh0ss_664", L4 = "_smOrder12_sh0ss_667", $4 = "_mdSize1_sh0ss_673", N4 = "_mdSize2_sh0ss_682", S4 = "_mdSize3_sh0ss_691", O4 = "_mdSize4_sh0ss_700", A4 = "_mdSize5_sh0ss_709", H4 = "_mdSize6_sh0ss_718", j4 = "_mdSize7_sh0ss_727", T4 = "_mdSize8_sh0ss_736", V4 = "_mdSize9_sh0ss_745", D4 = "_mdSize10_sh0ss_754", E4 = "_mdSize11_sh0ss_765", q4 = "_mdSize12_sh0ss_776", I4 = "_mdOffset0_sh0ss_781", P4 = "_mdOffset1_sh0ss_784", R4 = "_mdOffset2_sh0ss_789", B4 = "_mdOffset3_sh0ss_794", F4 = "_mdOffset4_sh0ss_799", K4 = "_mdOffset5_sh0ss_804", W4 = "_mdOffset6_sh0ss_809", Z4 = "_mdOffset7_sh0ss_814", U4 = "_mdOffset8_sh0ss_819", X4 = "_mdOffset9_sh0ss_824", G4 = "_mdOffset10_sh0ss_829", Y4 = "_mdOffset11_sh0ss_835", J4 = "_mdOffset12_sh0ss_841", Q4 = "_mdOrderFirst_sh0ss_847", e3 = "_mdOrderLast_sh0ss_850", t3 = "_mdOrder0_sh0ss_853", n3 = "_mdOrder1_sh0ss_856", r3 = "_mdOrder2_sh0ss_859", l3 = "_mdOrder3_sh0ss_862", o3 = "_mdOrder4_sh0ss_865", a3 = "_mdOrder5_sh0ss_868", s3 = "_mdOrder6_sh0ss_871", c3 = "_mdOrder7_sh0ss_874", i3 = "_mdOrder8_sh0ss_877", d3 = "_mdOrder9_sh0ss_880", u3 = "_mdOrder10_sh0ss_883", h3 = "_mdOrder11_sh0ss_886", f3 = "_mdOrder12_sh0ss_889", p3 = "_lgSize1_sh0ss_895", m3 = "_lgSize2_sh0ss_904", _3 = "_lgSize3_sh0ss_913", v3 = "_lgSize4_sh0ss_922", g3 = "_lgSize5_sh0ss_931", k3 = "_lgSize6_sh0ss_940", x3 = "_lgSize7_sh0ss_949", y3 = "_lgSize8_sh0ss_958", b3 = "_lgSize9_sh0ss_967", M3 = "_lgSize10_sh0ss_976", C3 = "_lgSize11_sh0ss_987", w3 = "_lgSize12_sh0ss_998", z3 = "_lgOffset0_sh0ss_1003", L3 = "_lgOffset1_sh0ss_1006", $3 = "_lgOffset2_sh0ss_1011", N3 = "_lgOffset3_sh0ss_1016", S3 = "_lgOffset4_sh0ss_1021", O3 = "_lgOffset5_sh0ss_1026", A3 = "_lgOffset6_sh0ss_1031", H3 = "_lgOffset7_sh0ss_1036", j3 = "_lgOffset8_sh0ss_1041", T3 = "_lgOffset9_sh0ss_1046", V3 = "_lgOffset10_sh0ss_1051", D3 = "_lgOffset11_sh0ss_1057", E3 = "_lgOffset12_sh0ss_1063", q3 = "_lgOrderFirst_sh0ss_1069", I3 = "_lgOrderLast_sh0ss_1072", P3 = "_lgOrder0_sh0ss_1075", R3 = "_lgOrder1_sh0ss_1078", B3 = "_lgOrder2_sh0ss_1081", F3 = "_lgOrder3_sh0ss_1084", K3 = "_lgOrder4_sh0ss_1087", W3 = "_lgOrder5_sh0ss_1090", Z3 = "_lgOrder6_sh0ss_1093", U3 = "_lgOrder7_sh0ss_1096", X3 = "_lgOrder8_sh0ss_1099", G3 = "_lgOrder9_sh0ss_1102", Y3 = "_lgOrder10_sh0ss_1105", J3 = "_lgOrder11_sh0ss_1108", Q3 = "_lgOrder12_sh0ss_1111", ei = "_xlSize1_sh0ss_1117", ti = "_xlSize2_sh0ss_1126", ni = "_xlSize3_sh0ss_1135", ri = "_xlSize4_sh0ss_1144", li = "_xlSize5_sh0ss_1153", oi = "_xlSize6_sh0ss_1162", ai = "_xlSize7_sh0ss_1171", si = "_xlSize8_sh0ss_1180", ci = "_xlSize9_sh0ss_1189", ii = "_xlSize10_sh0ss_1198", di = "_xlSize11_sh0ss_1209", ui = "_xlSize12_sh0ss_1220", hi = "_xlOffset0_sh0ss_1225", fi = "_xlOffset1_sh0ss_1228", pi = "_xlOffset2_sh0ss_1233", mi = "_xlOffset3_sh0ss_1238", _i = "_xlOffset4_sh0ss_1243", vi = "_xlOffset5_sh0ss_1248", gi = "_xlOffset6_sh0ss_1253", ki = "_xlOffset7_sh0ss_1258", xi = "_xlOffset8_sh0ss_1263", yi = "_xlOffset9_sh0ss_1268", bi = "_xlOffset10_sh0ss_1273", Mi = "_xlOffset11_sh0ss_1279", Ci = "_xlOffset12_sh0ss_1285", wi = "_xlOrderFirst_sh0ss_1291", zi = "_xlOrderLast_sh0ss_1294", Li = "_xlOrder0_sh0ss_1297", $i = "_xlOrder1_sh0ss_1300", Ni = "_xlOrder2_sh0ss_1303", Si = "_xlOrder3_sh0ss_1306", Oi = "_xlOrder4_sh0ss_1309", Ai = "_xlOrder5_sh0ss_1312", Hi = "_xlOrder6_sh0ss_1315", ji = "_xlOrder7_sh0ss_1318", Ti = "_xlOrder8_sh0ss_1321", Vi = "_xlOrder9_sh0ss_1324", Di = "_xlOrder10_sh0ss_1327", Ei = "_xlOrder11_sh0ss_1330", qi = "_xlOrder12_sh0ss_1333", Ii = "_xxSize1_sh0ss_1339", Pi = "_xxSize2_sh0ss_1348", Ri = "_xxSize3_sh0ss_1357", Bi = "_xxSize4_sh0ss_1366", Fi = "_xxSize5_sh0ss_1375", Ki = "_xxSize6_sh0ss_1384", Wi = "_xxSize7_sh0ss_1393", Zi = "_xxSize8_sh0ss_1402", Ui = "_xxSize9_sh0ss_1411", Xi = "_xxSize10_sh0ss_1420", Gi = "_xxSize11_sh0ss_1431", Yi = "_xxSize12_sh0ss_1442", Ji = "_xxOffset0_sh0ss_1447", Qi = "_xxOffset1_sh0ss_1450", e6 = "_xxOffset2_sh0ss_1455", t6 = "_xxOffset3_sh0ss_1460", n6 = "_xxOffset4_sh0ss_1465", r6 = "_xxOffset5_sh0ss_1470", l6 = "_xxOffset6_sh0ss_1475", o6 = "_xxOffset7_sh0ss_1480", a6 = "_xxOffset8_sh0ss_1485", s6 = "_xxOffset9_sh0ss_1490", c6 = "_xxOffset10_sh0ss_1495", i6 = "_xxOffset11_sh0ss_1501", d6 = "_xxOffset12_sh0ss_1507", u6 = "_xxOrderFirst_sh0ss_1513", h6 = "_xxOrderLast_sh0ss_1516", f6 = "_xxOrder0_sh0ss_1519", p6 = "_xxOrder1_sh0ss_1522", m6 = "_xxOrder2_sh0ss_1525", _6 = "_xxOrder3_sh0ss_1528", v6 = "_xxOrder4_sh0ss_1531", g6 = "_xxOrder5_sh0ss_1534", k6 = "_xxOrder6_sh0ss_1537", x6 = "_xxOrder7_sh0ss_1540", y6 = "_xxOrder8_sh0ss_1543", b6 = "_xxOrder9_sh0ss_1546", M6 = "_xxOrder10_sh0ss_1549", C6 = "_xxOrder11_sh0ss_1552", w6 = "_xxOrder12_sh0ss_1555", c0 = {
  column: m5,
  Size1: _5,
  Size2: v5,
  Size3: g5,
  Size4: k5,
  Size5: x5,
  Size6: y5,
  Size7: b5,
  Size8: M5,
  Size9: C5,
  Size10: w5,
  Size11: z5,
  Size12: L5,
  Offset0: $5,
  Offset1: N5,
  Offset2: S5,
  Offset3: O5,
  Offset4: A5,
  Offset5: H5,
  Offset6: j5,
  Offset7: T5,
  Offset8: V5,
  Offset9: D5,
  Offset10: E5,
  Offset11: q5,
  Offset12: I5,
  OrderFirst: P5,
  OrderLast: R5,
  Order0: B5,
  Order1: F5,
  Order2: K5,
  Order3: W5,
  Order4: Z5,
  Order5: U5,
  Order6: X5,
  Order7: G5,
  Order8: Y5,
  Order9: J5,
  Order10: Q5,
  Order11: ec,
  Order12: tc,
  xsSize1: nc,
  xsSize2: rc,
  xsSize3: lc,
  xsSize4: oc,
  xsSize5: ac,
  xsSize6: sc,
  xsSize7: cc,
  xsSize8: ic,
  xsSize9: dc,
  xsSize10: uc,
  xsSize11: hc,
  xsSize12: fc,
  xsOffset0: pc,
  xsOffset1: mc,
  xsOffset2: _c,
  xsOffset3: vc,
  xsOffset4: gc,
  xsOffset5: kc,
  xsOffset6: xc,
  xsOffset7: yc,
  xsOffset8: bc,
  xsOffset9: Mc,
  xsOffset10: Cc,
  xsOffset11: wc,
  xsOffset12: zc,
  xsOrderFirst: Lc,
  xsOrderLast: $c,
  xsOrder0: Nc,
  xsOrder1: Sc,
  xsOrder2: Oc,
  xsOrder3: Ac,
  xsOrder4: Hc,
  xsOrder5: jc,
  xsOrder6: Tc,
  xsOrder7: Vc,
  xsOrder8: Dc,
  xsOrder9: Ec,
  xsOrder10: qc,
  xsOrder11: Ic,
  xsOrder12: Pc,
  smSize1: Rc,
  smSize2: Bc,
  smSize3: Fc,
  smSize4: Kc,
  smSize5: Wc,
  smSize6: Zc,
  smSize7: Uc,
  smSize8: Xc,
  smSize9: Gc,
  smSize10: Yc,
  smSize11: Jc,
  smSize12: Qc,
  smOffset0: e4,
  smOffset1: t4,
  smOffset2: n4,
  smOffset3: r4,
  smOffset4: l4,
  smOffset5: o4,
  smOffset6: a4,
  smOffset7: s4,
  smOffset8: c4,
  smOffset9: i4,
  smOffset10: d4,
  smOffset11: u4,
  smOffset12: h4,
  smOrderFirst: f4,
  smOrderLast: p4,
  smOrder0: m4,
  smOrder1: _4,
  smOrder2: v4,
  smOrder3: g4,
  smOrder4: k4,
  smOrder5: x4,
  smOrder6: y4,
  smOrder7: b4,
  smOrder8: M4,
  smOrder9: C4,
  smOrder10: w4,
  smOrder11: z4,
  smOrder12: L4,
  mdSize1: $4,
  mdSize2: N4,
  mdSize3: S4,
  mdSize4: O4,
  mdSize5: A4,
  mdSize6: H4,
  mdSize7: j4,
  mdSize8: T4,
  mdSize9: V4,
  mdSize10: D4,
  mdSize11: E4,
  mdSize12: q4,
  mdOffset0: I4,
  mdOffset1: P4,
  mdOffset2: R4,
  mdOffset3: B4,
  mdOffset4: F4,
  mdOffset5: K4,
  mdOffset6: W4,
  mdOffset7: Z4,
  mdOffset8: U4,
  mdOffset9: X4,
  mdOffset10: G4,
  mdOffset11: Y4,
  mdOffset12: J4,
  mdOrderFirst: Q4,
  mdOrderLast: e3,
  mdOrder0: t3,
  mdOrder1: n3,
  mdOrder2: r3,
  mdOrder3: l3,
  mdOrder4: o3,
  mdOrder5: a3,
  mdOrder6: s3,
  mdOrder7: c3,
  mdOrder8: i3,
  mdOrder9: d3,
  mdOrder10: u3,
  mdOrder11: h3,
  mdOrder12: f3,
  lgSize1: p3,
  lgSize2: m3,
  lgSize3: _3,
  lgSize4: v3,
  lgSize5: g3,
  lgSize6: k3,
  lgSize7: x3,
  lgSize8: y3,
  lgSize9: b3,
  lgSize10: M3,
  lgSize11: C3,
  lgSize12: w3,
  lgOffset0: z3,
  lgOffset1: L3,
  lgOffset2: $3,
  lgOffset3: N3,
  lgOffset4: S3,
  lgOffset5: O3,
  lgOffset6: A3,
  lgOffset7: H3,
  lgOffset8: j3,
  lgOffset9: T3,
  lgOffset10: V3,
  lgOffset11: D3,
  lgOffset12: E3,
  lgOrderFirst: q3,
  lgOrderLast: I3,
  lgOrder0: P3,
  lgOrder1: R3,
  lgOrder2: B3,
  lgOrder3: F3,
  lgOrder4: K3,
  lgOrder5: W3,
  lgOrder6: Z3,
  lgOrder7: U3,
  lgOrder8: X3,
  lgOrder9: G3,
  lgOrder10: Y3,
  lgOrder11: J3,
  lgOrder12: Q3,
  xlSize1: ei,
  xlSize2: ti,
  xlSize3: ni,
  xlSize4: ri,
  xlSize5: li,
  xlSize6: oi,
  xlSize7: ai,
  xlSize8: si,
  xlSize9: ci,
  xlSize10: ii,
  xlSize11: di,
  xlSize12: ui,
  xlOffset0: hi,
  xlOffset1: fi,
  xlOffset2: pi,
  xlOffset3: mi,
  xlOffset4: _i,
  xlOffset5: vi,
  xlOffset6: gi,
  xlOffset7: ki,
  xlOffset8: xi,
  xlOffset9: yi,
  xlOffset10: bi,
  xlOffset11: Mi,
  xlOffset12: Ci,
  xlOrderFirst: wi,
  xlOrderLast: zi,
  xlOrder0: Li,
  xlOrder1: $i,
  xlOrder2: Ni,
  xlOrder3: Si,
  xlOrder4: Oi,
  xlOrder5: Ai,
  xlOrder6: Hi,
  xlOrder7: ji,
  xlOrder8: Ti,
  xlOrder9: Vi,
  xlOrder10: Di,
  xlOrder11: Ei,
  xlOrder12: qi,
  xxSize1: Ii,
  xxSize2: Pi,
  xxSize3: Ri,
  xxSize4: Bi,
  xxSize5: Fi,
  xxSize6: Ki,
  xxSize7: Wi,
  xxSize8: Zi,
  xxSize9: Ui,
  xxSize10: Xi,
  xxSize11: Gi,
  xxSize12: Yi,
  xxOffset0: Ji,
  xxOffset1: Qi,
  xxOffset2: e6,
  xxOffset3: t6,
  xxOffset4: n6,
  xxOffset5: r6,
  xxOffset6: l6,
  xxOffset7: o6,
  xxOffset8: a6,
  xxOffset9: s6,
  xxOffset10: c6,
  xxOffset11: i6,
  xxOffset12: d6,
  xxOrderFirst: u6,
  xxOrderLast: h6,
  xxOrder0: f6,
  xxOrder1: p6,
  xxOrder2: m6,
  xxOrder3: _6,
  xxOrder4: v6,
  xxOrder5: g6,
  xxOrder6: k6,
  xxOrder7: x6,
  xxOrder8: y6,
  xxOrder9: b6,
  xxOrder10: M6,
  xxOrder11: C6,
  xxOrder12: w6
}, z6 = [
  ["", "size", "offset", "order"],
  ["xs", "sizeXs", "offsetXs", "orderXs"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xx", "sizeXx", "offsetXx", "orderXx"]
];
function L6(e, t) {
  if (!Number.isInteger(t) || t < 1 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 1 and 12.`
    );
}
function $6(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12.`
    );
}
function N6(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12 or first/last.`
    );
}
function S6(e, t, n) {
  return t === "first" ? `${e}OrderFirst` : t === "last" ? `${e}OrderLast` : (N6(n, t), `${e}Order${t}`);
}
function c_({ className: e, style: t, ...n }) {
  const l = [c0.column], s = { ...t };
  for (const [S, $, x, N] of z6) {
    const T = n[$], V = n[x], j = n[N];
    if (T != null) {
      L6($, T);
      const D = c0[`${S}Size${T}`];
      D && l.push(D);
    }
    if (V != null) {
      $6(x, V);
      const D = c0[`${S}Offset${V}`];
      D && l.push(D);
    }
    if (j != null) {
      const D = c0[S6(S, j, N)];
      D && l.push(D);
    }
  }
  const {
    size: c,
    offset: d,
    sizeXs: o,
    offsetXs: a,
    sizeSm: i,
    offsetSm: h,
    sizeMd: u,
    offsetMd: b,
    sizeLg: y,
    offsetLg: k,
    sizeXl: m,
    offsetXl: g,
    sizeXx: p,
    offsetXx: f,
    order: v,
    orderXs: M,
    orderSm: _,
    orderMd: w,
    orderLg: C,
    orderXl: z,
    orderXx: A,
    ...O
  } = n;
  return /* @__PURE__ */ r(
    "div",
    {
      className: [...l, e].filter(Boolean).join(" "),
      style: s,
      ...O
    }
  );
}
const O6 = "_stack_1yc1g_1", A6 = "_gapXs_1yc1g_29", H6 = "_gapSm_1yc1g_33", j6 = "_gapMd_1yc1g_37", T6 = "_gapLg_1yc1g_41", V6 = "_gapXl_1yc1g_45", St = {
  stack: O6,
  "dir-row": "_dir-row_1yc1g_5",
  "dir-row-reverse": "_dir-row-reverse_1yc1g_9",
  "dir-column": "_dir-column_1yc1g_13",
  "dir-column-reverse": "_dir-column-reverse_1yc1g_17",
  "wrap-nowrap": "_wrap-nowrap_1yc1g_21",
  "wrap-wrap-reverse": "_wrap-wrap-reverse_1yc1g_25",
  gapXs: A6,
  gapSm: H6,
  gapMd: j6,
  gapLg: T6,
  gapXl: V6,
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
}, D6 = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function E6(e) {
  return typeof e != "string" ? null : D6[e] ?? null;
}
function n2(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function i_({
  orientation: e = "vertical",
  reverse: t = !1,
  wrap: n = !0,
  gap: l = "sm",
  align: s,
  justify: c,
  className: d,
  style: o,
  ...a
}) {
  const i = E6(l), h = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", u = {
    ...l != null && !i ? { gap: typeof l == "number" ? `${l}px` : l } : {},
    ...o
  };
  return /* @__PURE__ */ r(
    "div",
    {
      className: [
        St.stack,
        St[`dir-${h}`],
        n2(n) !== "wrap" ? St[`wrap-${n2(n)}`] : null,
        s != null ? St[`align-${s}`] : null,
        c != null ? St[`justify-${c}`] : null,
        i ? St[i] : null,
        d
      ].filter(Boolean).join(" "),
      style: u,
      ...a
    }
  );
}
const q6 = "_autogrid_1fz7w_1", I6 = "_gapXs_1fz7w_10", P6 = "_gapSm_1fz7w_14", R6 = "_gapMd_1fz7w_18", B6 = "_gapLg_1fz7w_22", F6 = "_gapXl_1fz7w_26", r2 = {
  autogrid: q6,
  gapXs: I6,
  gapSm: P6,
  gapMd: R6,
  gapLg: B6,
  gapXl: F6
}, K6 = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function W6(e) {
  return typeof e != "string" ? null : K6[e] ?? null;
}
function d_({
  min: e = 240,
  gap: t = "md",
  className: n,
  style: l,
  visible: s = !0,
  ...c
}) {
  if (s === !1) return null;
  const d = W6(t), o = {
    // Keep --dx-autogrid-min in sync so the track math follows the prop.
    "--dx-autogrid-min": typeof e == "number" ? `${e}px` : e,
    ...t != null && !d ? { gap: typeof t == "number" ? `${t}px` : t } : {},
    ...l
  };
  return /* @__PURE__ */ r(
    "div",
    {
      className: [r2.autogrid, d ? r2[d] : null, n].filter(Boolean).join(" "),
      style: o,
      ...c
    }
  );
}
const Z6 = "_layout_fxvw1_1", U6 = "_row_fxvw1_7", X6 = "_grid_fxvw1_21", G6 = "_gridRight_fxvw1_27", Y6 = "_gridHeader_fxvw1_31", J6 = "_gridFooter_fxvw1_36", Q6 = "_gridContents_fxvw1_41", e8 = "_gridBody_fxvw1_45", Je = {
  layout: Z6,
  row: U6,
  grid: X6,
  gridRight: G6,
  gridHeader: Y6,
  gridFooter: J6,
  gridContents: Q6,
  gridBody: e8
}, t8 = "_footer_1thaw_1", n8 = "_sticky_1thaw_9", l2 = {
  footer: t8,
  sticky: n8
};
function r8({
  sticky: e = !1,
  className: t,
  children: n,
  ...l
}) {
  return /* @__PURE__ */ r(
    "footer",
    {
      className: [l2.footer, e ? l2.sticky : null, t].filter(Boolean).join(" "),
      ...l,
      children: n
    }
  );
}
const l8 = "_header_wh9gi_1", o8 = "_sticky_wh9gi_9", o2 = {
  header: l8,
  sticky: o8
};
function a8({
  sticky: e = !1,
  className: t,
  children: n,
  ...l
}) {
  return /* @__PURE__ */ r(
    "header",
    {
      className: [o2.header, e ? o2.sticky : null, t].filter(Boolean).join(" "),
      ...l,
      children: n
    }
  );
}
const s8 = "_sidebar_1a2mp_1", c8 = "_sticky_1a2mp_23", i8 = "_left_1a2mp_41", d8 = "_right_1a2mp_45", u8 = "_start_1a2mp_50", h8 = "_end_1a2mp_54", f8 = "_fullHeight_1a2mp_60", p8 = "_collapsed_1a2mp_64", m8 = "_responsive_1a2mp_72", _8 = "_overlay_1a2mp_80", v8 = "_mask_1a2mp_108", it = {
  sidebar: s8,
  sticky: c8,
  left: i8,
  right: d8,
  start: u8,
  end: h8,
  fullHeight: f8,
  collapsed: p8,
  responsive: m8,
  overlay: _8,
  mask: v8
};
function g8({
  position: e = "left",
  expanded: t = !0,
  responsive: n = !1,
  overlay: l = !1,
  fullHeight: s = !1,
  sticky: c = !1,
  onClose: d,
  className: o,
  children: a,
  ...i
}) {
  return v1(() => {
    if (!l || !t || d == null) return;
    const h = (u) => {
      u.key === "Escape" && d();
    };
    return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h);
  }, [l, t, d]), /* @__PURE__ */ L(b1, { children: [
    l && t ? /* @__PURE__ */ r(
      "div",
      {
        className: `${it.mask} se-layout-mask`,
        "aria-hidden": "true",
        onClick: d
      }
    ) : null,
    /* @__PURE__ */ r(
      "aside",
      {
        className: [
          it.sidebar,
          it[e],
          t ? null : it.collapsed,
          n ? it.responsive : null,
          l ? [it.overlay, "se-sidebar--overlay"] : null,
          s ? it.fullHeight : null,
          c && !l && !s ? it.sticky : null,
          o
        ].flat().filter(Boolean).join(" "),
        ...i,
        children: a
      }
    )
  ] });
}
function u_(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ r(b1, { children: e.children });
  const { className: t, children: n, ...l } = e, s = [], c = [], d = [], o = [], a = [], i = [];
  o0.forEach(n, (b) => {
    if (!ve(b)) {
      d.push(b);
      return;
    }
    if (b.type === a8)
      s.push(b);
    else if (b.type === r8)
      c.push(b);
    else if (b.type === g8) {
      const y = b, k = y.props.position;
      i.push(y), (k === "right" || k === "end" ? a : o).push(y);
    } else
      d.push(b);
  });
  const h = i.length === 1 && i[0]?.props.fullHeight === !0 ? i[0] : null, u = h != null && (h.props.position === "right" || h.props.position === "end");
  if (h) {
    const b = u ? a : o;
    return /* @__PURE__ */ L(
      "div",
      {
        className: [
          Je.layout,
          Je.grid,
          u ? Je.gridRight : null,
          t
        ].filter(Boolean).join(" "),
        ...l,
        children: [
          s.length > 0 && /* @__PURE__ */ r("div", { className: Je.gridHeader, children: s }),
          /* @__PURE__ */ L("div", { className: Je.gridContents, children: [
            b,
            /* @__PURE__ */ r("div", { className: Je.gridBody, children: d })
          ] }),
          c.length > 0 && /* @__PURE__ */ r("div", { className: Je.gridFooter, children: c })
        ]
      }
    );
  }
  return /* @__PURE__ */ L(
    "div",
    {
      className: [Je.layout, t].filter(Boolean).join(" "),
      ...l,
      children: [
        s,
        /* @__PURE__ */ L("div", { className: Je.row, children: [
          o,
          d,
          a
        ] }),
        c
      ]
    }
  );
}
const k8 = "_body_akga4_1", x8 = "_bare_akga4_10", a2 = {
  body: k8,
  bare: x8
};
function h_({
  as: e = "main",
  padded: t = !0,
  className: n,
  children: l,
  ...s
}) {
  return /* @__PURE__ */ r(
    e,
    {
      className: [a2.body, t ? null : a2.bare, n].filter(Boolean).join(" "),
      ...s,
      children: l
    }
  );
}
const y8 = "_toggle_lxnk5_1", b8 = {
  toggle: y8
};
function f_({
  icon: e = "menu",
  label: t = "Toggle sidebar",
  className: n,
  type: l = "button",
  children: s,
  ...c
}) {
  return /* @__PURE__ */ r(
    "button",
    {
      type: l,
      "aria-label": t,
      className: [b8.toggle, n].filter(Boolean).join(" "),
      ...c,
      children: s ?? /* @__PURE__ */ r(M1, { name: e, size: 20 })
    }
  );
}
const M8 = "_track_1itxd_1", C8 = "_bar_1itxd_31", w8 = "_primary_1itxd_39", z8 = "_success_1itxd_43", L8 = "_warning_1itxd_47", $8 = "_danger_1itxd_51", N8 = "_indeterminate_1itxd_149", S8 = "_circular_1itxd_163", O8 = "_fill_1itxd_203", Le = {
  track: M8,
  "linear-xs": "_linear-xs_1itxd_11",
  "linear-sm": "_linear-sm_1itxd_15",
  "linear-md": "_linear-md_1itxd_19",
  "linear-lg": "_linear-lg_1itxd_23",
  "linear-xl": "_linear-xl_1itxd_27",
  bar: C8,
  primary: w8,
  success: z8,
  warning: L8,
  danger: $8,
  "shade-lighter": "_shade-lighter_1itxd_133",
  "shade-light": "_shade-light_1itxd_133",
  "shade-dark": "_shade-dark_1itxd_141",
  "shade-darker": "_shade-darker_1itxd_145",
  indeterminate: N8,
  "se-progress-slide": "_se-progress-slide_1itxd_1",
  circular: S8,
  "circular-xs": "_circular-xs_1itxd_169",
  "circular-sm": "_circular-sm_1itxd_174",
  "circular-md": "_circular-md_1itxd_179",
  "circular-lg": "_circular-lg_1itxd_184",
  "circular-xl": "_circular-xl_1itxd_189",
  fill: O8,
  "se-progress-spin": "_se-progress-spin_1itxd_1"
};
function p_({
  value: e = 0,
  max: t = 100,
  severity: n = "primary",
  shade: l,
  indeterminate: s = !1,
  variant: c = "linear",
  size: d = "md",
  className: o,
  visible: a = !0,
  ...i
}) {
  if (a === !1) return null;
  const h = t > 0 ? Math.min(t, Math.max(0, e)) : 0, u = t > 0 ? h / t * 100 : 0;
  if (c === "circular") {
    const y = typeof d == "string", k = 2, m = 10.5, g = 2 * Math.PI * m, p = g * (s ? 0.75 : 1), f = s ? 0 : g * (1 - u / 100), v = l0(l);
    return /* @__PURE__ */ L(
      "svg",
      {
        width: y ? void 0 : d,
        height: y ? void 0 : d,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": i["aria-label"],
        "aria-labelledby": i["aria-labelledby"],
        "aria-valuenow": s ? void 0 : Math.round(h),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        ...i,
        className: [
          Le.circular,
          Le[n],
          v ? Le[v] : null,
          y ? Le[`circular-${d}`] : null,
          s ? Le.indeterminate : null,
          o
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ r(
            "circle",
            {
              className: Le.track,
              cx: 12,
              cy: 12,
              r: m,
              strokeWidth: k
            }
          ),
          /* @__PURE__ */ r(
            "circle",
            {
              className: Le.fill,
              cx: 12,
              cy: 12,
              r: m,
              strokeWidth: k,
              strokeDasharray: `${p} ${g}`,
              strokeDashoffset: f
            }
          )
        ]
      }
    );
  }
  const b = l0(l);
  return /* @__PURE__ */ r(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": s ? void 0 : Math.round(h),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        Le.track,
        Le[n],
        b ? Le[b] : null,
        typeof d == "string" ? Le[`linear-${d}`] : null,
        s ? Le.indeterminate : null,
        o
      ].filter(Boolean).join(" "),
      ...i,
      children: /* @__PURE__ */ r(
        "div",
        {
          className: Le.bar,
          style: s ? void 0 : { width: `${u}%` }
        }
      )
    }
  );
}
const A8 = "_wrapper_tk30z_1", H8 = {
  wrapper: A8
}, j8 = [
  "default",
  "fluent",
  "github",
  "material",
  "material-3",
  "shadcn"
], O2 = "dx-palette", T8 = "data-palette";
function V8(e, t) {
  const n = e === void 0 ? O2 : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      const l = localStorage.getItem(n);
      return l != null && t.includes(l) ? l : void 0;
    } catch {
      return;
    }
}
function D8(e, t) {
  const n = e === void 0 ? O2 : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function m_({
  themes: e = j8,
  value: t,
  defaultValue: n,
  storageKey: l,
  attribute: s = T8,
  onChange: c,
  label: d = "Theme",
  placeholder: o = "Theme…",
  id: a,
  size: i = "md",
  className: h
}) {
  const [u, b] = W(void 0), y = t !== void 0, k = t ?? u ?? V8(l, e) ?? n, m = k ?? "", g = Q(void 0);
  v1(() => {
    if (y) return;
    const f = document.documentElement;
    if (k === void 0) {
      g.current !== void 0 && f.getAttribute(s) === g.current && (f.removeAttribute(s), g.current = void 0);
      return;
    }
    f.setAttribute(s, k), g.current = k;
  }, [k, s, y]);
  const p = (f) => {
    const v = f.target.value;
    y || (b(v), D8(l, v)), c?.(v);
  };
  return /* @__PURE__ */ L("label", { className: [H8.wrapper, h].filter(Boolean).join(" "), children: [
    d,
    /* @__PURE__ */ L(wt, { id: a, size: i, value: m, onChange: p, children: [
      k === void 0 && /* @__PURE__ */ r("option", { value: "", disabled: !0, children: o }),
      k !== void 0 && !e.includes(k) && /* @__PURE__ */ r("option", { value: k, children: k }),
      e.map((f) => /* @__PURE__ */ r("option", { value: f, children: f }, f))
    ] })
  ] });
}
function E8(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function A2(e) {
  const [t, n] = W(() => E8(e));
  return v1(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const l = window.matchMedia(e);
    n(l.matches);
    const s = (c) => n(c.matches);
    return typeof l.addEventListener == "function" ? (l.addEventListener("change", s), () => l.removeEventListener("change", s)) : (l.addListener(s), () => l.removeListener(s));
  }, [e]), t;
}
const q8 = "_wrapper_1qmsj_1", I8 = {
  wrapper: q8
}, H2 = "dx-theme";
function P8(e) {
  const t = e === void 0 ? H2 : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const n = localStorage.getItem(t);
      return n === "light" || n === "dark" || n === "system" ? n : void 0;
    } catch {
      return;
    }
}
function R8(e, t) {
  const n = e === void 0 ? H2 : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function __({
  value: e,
  defaultValue: t,
  storageKey: n,
  onChange: l,
  label: s = "Dark mode",
  id: c,
  className: d
}) {
  const o = A2("(prefers-color-scheme: dark)"), [a, i] = W(void 0), h = e !== void 0, u = e ?? a ?? P8(n) ?? t ?? "system", b = u === "system" ? o ? "dark" : "light" : u;
  v1(() => {
    if (!h) {
      if (u === "system") {
        delete document.documentElement.dataset.theme;
        return;
      }
      document.documentElement.dataset.theme = u;
    }
  }, [u, h]);
  const y = (k) => {
    const m = k.target.checked ? "dark" : "light";
    h || (i(m), R8(n, m)), l?.(m);
  };
  return /* @__PURE__ */ L("label", { className: [I8.wrapper, d].filter(Boolean).join(" "), children: [
    s,
    /* @__PURE__ */ r(ma, { id: c, checked: b === "dark", onChange: y })
  ] });
}
function B8(e) {
  const t = new TextEncoder().encode(e), n = t.length * 8, l = ((t.length + 8 >> 6) + 1) * 64, s = new Uint8Array(l);
  s.set(t), s[t.length] = 128;
  const c = new DataView(s.buffer);
  c.setUint32(l - 8, n >>> 0, !0), c.setUint32(l - 4, Math.floor(n / 4294967296), !0);
  const d = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21], o = Array.from(
    { length: 64 },
    (m, g) => Math.floor(Math.abs(Math.sin(g + 1)) * 4294967296)
  ), a = (m, g) => m + g | 0, i = (m, g) => m << g | m >>> 32 - g;
  let h = 1732584193, u = 4023233417, b = 2562383102, y = 271733878;
  for (let m = 0; m < l; m += 64) {
    const g = [];
    for (let _ = 0; _ < 16; _ += 1)
      g.push(c.getUint32(m + _ * 4, !0));
    let p = h, f = u, v = b, M = y;
    for (let _ = 0; _ < 64; _ += 1) {
      let w, C;
      _ < 16 ? (w = f & v | ~f & M, C = _) : _ < 32 ? (w = M & f | ~M & v, C = (5 * _ + 1) % 16) : _ < 48 ? (w = f ^ v ^ M, C = (3 * _ + 5) % 16) : (w = v ^ (f | ~M), C = 7 * _ % 16), w = a(a(a(w, p), o[_]), g[C]), p = M, M = v, v = f, f = a(f, i(w, d[Math.floor(_ / 16) * 4 + _ % 4]));
    }
    h = a(h, p), u = a(u, f), b = a(b, v), y = a(y, M);
  }
  const k = (m) => {
    let g = "";
    for (let p = 0; p < 4; p += 1)
      g += `0${(m >>> p * 8 & 255).toString(16)}`.slice(-2);
    return g;
  };
  return k(h) + k(u) + k(b) + k(y);
}
const F8 = "_avatar_yj2hz_1", K8 = "_xs_yj2hz_12", W8 = "_sm_yj2hz_18", Z8 = "_md_yj2hz_24", U8 = "_lg_yj2hz_30", X8 = "_xl_yj2hz_36", G8 = "_initials_yj2hz_42", Y8 = "_image_yj2hz_57", J8 = "_status_yj2hz_64", Q8 = "_online_yj2hz_84", e7 = "_offline_yj2hz_88", t7 = "_away_yj2hz_92", Ot = {
  avatar: F8,
  xs: K8,
  sm: W8,
  md: Z8,
  lg: U8,
  xl: X8,
  initials: G8,
  image: Y8,
  status: J8,
  online: Q8,
  offline: e7,
  away: t7
}, n7 = {
  xs: 20,
  sm: 28,
  md: 36,
  lg: 44,
  xl: 52
}, m0 = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function r7(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function l7(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = t * 31 + e.charCodeAt(n) >>> 0;
  return m0[t % m0.length] ?? m0[0];
}
function v_({
  name: e,
  src: t,
  email: n,
  gravatarDefault: l = "retro",
  gravatarRating: s = "g",
  alt: c,
  size: d = "md",
  status: o,
  className: a
}) {
  const i = g1(() => e ? r7(e) : "?", [e]), h = g1(() => e ? l7(e) : m0[0], [e]), u = g1(() => {
    if (t != null || n == null) return;
    const M = n.trim().toLowerCase();
    return M === "" ? void 0 : `https://secure.gravatar.com/avatar/${B8(M)}?d=${l}&s=${n7[d]}&r=${s}`;
  }, [t, n, l, s, d]), b = t ?? u, [y, k] = W(null), m = b != null && y !== b, g = m && c === "", p = c ?? e ?? "avatar", f = o ? `${p}, ${o}` : p, v = m ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ r(
      "img",
      {
        className: Ot.image,
        src: b,
        alt: g ? "" : o ? f : p,
        onError: () => k(b ?? null)
      }
    )
  ) : /* @__PURE__ */ r(
    "span",
    {
      "aria-hidden": "true",
      className: Ot.initials,
      style: { background: h },
      children: i
    }
  );
  return /* @__PURE__ */ L(
    "span",
    {
      className: [
        Ot.avatar,
        Ot[d],
        o ? Ot[o] : null,
        a
      ].filter(Boolean).join(" "),
      role: m ? void 0 : "img",
      "aria-label": m ? void 0 : f,
      children: [
        v,
        o && /* @__PURE__ */ r("span", { className: Ot.status, "aria-hidden": "true" })
      ]
    }
  );
}
const o7 = "_root_iy2gv_1", a7 = "_left_iy2gv_6", s7 = "_right_iy2gv_7", c7 = "_panel_iy2gv_12", i7 = "_bottom_iy2gv_20", d7 = "_tabList_iy2gv_24", u7 = "_underline_iy2gv_53", h7 = "_pills_iy2gv_72", f7 = "_tab_iy2gv_24", p7 = "_active_iy2gv_113", m7 = "_disabled_iy2gv_139", Qe = {
  root: o7,
  left: a7,
  right: s7,
  panel: c7,
  bottom: i7,
  tabList: d7,
  underline: u7,
  pills: h7,
  tab: f7,
  active: p7,
  disabled: m7
};
function g_({
  items: e,
  value: t,
  defaultValue: n,
  onChange: l,
  variant: s = "underline",
  position: c = "top",
  className: d
}) {
  const o = E1(), a = Q(null), [i, h] = W(
    n ?? e[0]?.key ?? ""
  ), u = t ?? i, b = c === "left" || c === "right", y = (g) => {
    h(g), l?.(g);
  }, k = (g) => {
    const p = e.filter((M) => !M.disabled), f = p.findIndex((M) => M.key === u);
    let v = -1;
    g.key === "ArrowRight" || b && g.key === "ArrowDown" ? v = (f + 1) % p.length : g.key === "ArrowLeft" || b && g.key === "ArrowUp" ? v = (f - 1 + p.length) % p.length : g.key === "Home" ? v = 0 : g.key === "End" && (v = p.length - 1), v >= 0 && (g.preventDefault(), a.current?.querySelector(
      `[data-tab-key="${CSS.escape(p[v]?.key ?? "")}"]`
    )?.focus(), y(p[v]?.key ?? ""));
  }, m = e.find((g) => g.key === u);
  return /* @__PURE__ */ L(
    "div",
    {
      className: [Qe.root, Qe[c], d].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ r(
          "div",
          {
            ref: a,
            role: "tablist",
            className: [Qe.tabList, Qe[s], Qe[c]].filter(Boolean).join(" "),
            onKeyDown: k,
            children: e.map((g) => {
              const p = g.key === u;
              return /* @__PURE__ */ r(
                "button",
                {
                  type: "button",
                  role: "tab",
                  id: `${o}-tab-${g.key}`,
                  "data-tab-key": g.key,
                  "aria-selected": p,
                  "aria-controls": `${o}-panel-${g.key}`,
                  tabIndex: p ? 0 : -1,
                  disabled: g.disabled,
                  className: [
                    Qe.tab,
                    p ? Qe.active : null,
                    g.disabled ? Qe.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => y(g.key),
                  children: g.label
                },
                g.key
              );
            })
          }
        ),
        m && /* @__PURE__ */ r(
          "div",
          {
            role: "tabpanel",
            id: `${o}-panel-${m.key}`,
            "aria-labelledby": `${o}-tab-${m.key}`,
            className: Qe.panel,
            children: m.content
          }
        )
      ]
    }
  );
}
const _7 = "_root_1qkv8_1", v7 = "_item_1qkv8_9", g7 = "_heading_1qkv8_13", k7 = "_trigger_1qkv8_17", x7 = "_disabled_1qkv8_34", y7 = "_title_1qkv8_48", b7 = "_chevron_1qkv8_52", M7 = "_open_1qkv8_59", C7 = "_content_1qkv8_63", et = {
  root: _7,
  item: v7,
  heading: g7,
  trigger: k7,
  disabled: x7,
  title: y7,
  chevron: b7,
  open: M7,
  content: C7
};
function k_({
  items: e,
  multiple: t = !1,
  value: n,
  defaultValue: l,
  onChange: s,
  className: c
}) {
  const d = E1(), [o, a] = W(
    l ?? []
  ), i = n ?? o, h = (u) => {
    const b = i.includes(u) ? i.filter((y) => y !== u) : t ? [...i, u] : [u];
    a(b), s?.(b);
  };
  return /* @__PURE__ */ r("div", { className: [et.root, c].filter(Boolean).join(" "), children: e.map((u) => {
    const b = i.includes(u.key), y = `${d}-panel-${u.key}`, k = `${d}-trigger-${u.key}`;
    return /* @__PURE__ */ L("div", { className: et.item, children: [
      /* @__PURE__ */ r("h3", { className: et.heading, children: /* @__PURE__ */ L(
        "button",
        {
          type: "button",
          id: k,
          "aria-expanded": b,
          "aria-controls": y,
          disabled: u.disabled,
          className: [
            et.trigger,
            u.disabled ? et.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => h(u.key),
          children: [
            /* @__PURE__ */ r("span", { className: et.title, children: u.title }),
            /* @__PURE__ */ r(
              "span",
              {
                className: [et.chevron, b ? et.open : null].filter(Boolean).join(" "),
                "aria-hidden": "true",
                children: /* @__PURE__ */ r(M1, { name: "chevron-down", size: 12 })
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ r(
        "div",
        {
          id: y,
          role: "region",
          "aria-labelledby": k,
          hidden: !b,
          className: et.content,
          children: u.content
        }
      )
    ] }, u.key);
  }) });
}
const w7 = "_textarea_1uei3_1", z7 = "_invalid_1uei3_27", L7 = "_xs_1uei3_34", $7 = "_sm_1uei3_39", N7 = "_md_1uei3_44", S7 = "_lg_1uei3_49", O7 = "_xl_1uei3_54", i0 = {
  textarea: w7,
  invalid: z7,
  xs: L7,
  sm: $7,
  md: N7,
  lg: S7,
  xl: O7,
  "resize-none": "_resize-none_1uei3_59",
  "resize-vertical": "_resize-vertical_1uei3_63",
  "resize-horizontal": "_resize-horizontal_1uei3_67",
  "resize-both": "_resize-both_1uei3_71"
}, x_ = q1(
  function({ size: t = "md", resize: n = "none", invalid: l = !1, className: s, ...c }, d) {
    return /* @__PURE__ */ r(
      "textarea",
      {
        ref: d,
        "data-size": t,
        className: [
          i0.textarea,
          i0[t],
          i0[`resize-${n}`],
          l ? i0.invalid : null,
          s
        ].filter(Boolean).join(" "),
        "aria-invalid": l || void 0,
        ...c
      }
    );
  }
), A7 = "_root_jtes6_1", H7 = "_trigger_jtes6_9", j7 = "_invalid_jtes6_40", T7 = "_placeholder_jtes6_47", V7 = "_label_jtes6_54", D7 = "_chevron_jtes6_60", E7 = "_chevronOpen_jtes6_70", q7 = "_menu_jtes6_74", I7 = "_option_jtes6_89", P7 = "_disabled_jtes6_100", R7 = "_active_jtes6_104", B7 = "_selected_jtes6_105", F7 = "_header_jtes6_115", K7 = "_xs_jtes6_122", W7 = "_sm_jtes6_128", Z7 = "_md_jtes6_134", U7 = "_lg_jtes6_140", X7 = "_xl_jtes6_146", me = {
  root: A7,
  trigger: H7,
  invalid: j7,
  placeholder: T7,
  label: V7,
  chevron: D7,
  chevronOpen: E7,
  menu: q7,
  option: I7,
  disabled: P7,
  active: R7,
  selected: B7,
  header: F7,
  xs: K7,
  sm: W7,
  md: Z7,
  lg: U7,
  xl: X7
}, G7 = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function y_({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: l,
  placeholder: s = "Select…",
  size: c = "md",
  invalid: d = !1,
  disabled: o = !1,
  className: a,
  ...i
}) {
  const h = E1(), u = `${h}-listbox`, b = Q(null), y = Q(null), [k, m] = W(
    n
  ), [g, p] = W(!1), f = t ?? k, v = e.map(
    (x, N) => x.label === "" || x.disabled ? -1 : N
  ).filter((x) => x >= 0), M = e.findIndex(
    (x) => x.value === f
  ), [_, w] = W(
    () => v.includes(0) ? 0 : v[0] ?? -1
  ), C = q(() => {
    if (o) return;
    const x = M >= 0 && v.includes(M) ? M : v[0];
    w(x ?? -1), p(!0);
  }, [o, M, v]), z = q(() => {
    p(!1), y.current?.focus();
  }, []);
  v1(() => {
    if (!g) return;
    const x = (N) => {
      b.current && !b.current.contains(N.target) && p(!1);
    };
    return document.addEventListener("mousedown", x), () => document.removeEventListener("mousedown", x);
  }, [g]);
  const A = (x) => {
    m(x), l?.(x), p(!1), y.current?.focus();
  }, O = (x) => {
    if (v.length === 0) return;
    const N = v.includes(_) ? v.indexOf(_) : 0, T = v[(N + x + v.length) % v.length];
    T != null && w(T);
  }, S = (x) => {
    if (!g) {
      x.key === "ArrowDown" && (x.preventDefault(), C());
      return;
    }
    switch (x.key) {
      case "ArrowDown":
        x.preventDefault(), O(1);
        break;
      case "ArrowUp":
        x.preventDefault(), O(-1);
        break;
      case "Home":
        x.preventDefault(), v[0] != null && w(v[0]);
        break;
      case "End":
        x.preventDefault(), v[v.length - 1] != null && w(v[v.length - 1]);
        break;
      case "Enter":
      case " ":
        x.preventDefault(), _ >= 0 && e[_] && v.includes(_) && A(e[_]?.value ?? "");
        break;
      case "Escape":
        x.preventDefault(), z();
        break;
      case "Tab":
        p(!1);
        break;
    }
  }, $ = e.find(
    (x) => x.value === f
  );
  return /* @__PURE__ */ L(
    "div",
    {
      ref: b,
      className: [me.root, a].filter(Boolean).join(" "),
      onKeyDown: S,
      children: [
        /* @__PURE__ */ L(
          "button",
          {
            ref: y,
            type: "button",
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-expanded": g,
            "aria-controls": u,
            "aria-invalid": d || void 0,
            disabled: o,
            className: [
              me.trigger,
              me[c],
              g ? me.open : null,
              d ? me.invalid : null
            ].filter(Boolean).join(" "),
            onClick: () => g ? p(!1) : C(),
            ...i,
            children: [
              /* @__PURE__ */ r("span", { className: $ ? me.label : me.placeholder, children: $ ? $.label : s }),
              /* @__PURE__ */ r(
                "span",
                {
                  className: [me.chevron, g ? me.chevronOpen : null].filter(Boolean).join(" "),
                  style: { backgroundImage: G7 },
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ),
        g && /* @__PURE__ */ r(
          "div",
          {
            id: u,
            role: "listbox",
            "aria-activedescendant": _ >= 0 ? `${h}-option-${_}` : void 0,
            className: me.menu,
            children: e.map(
              (x, N) => x.label === "" ? /* @__PURE__ */ r(
                "div",
                {
                  className: me.header,
                  role: "presentation",
                  children: x.value
                },
                x.value
              ) : /* @__PURE__ */ r(
                "div",
                {
                  id: `${h}-option-${N}`,
                  role: "option",
                  "aria-selected": x.value === f,
                  "aria-disabled": x.disabled || void 0,
                  className: [
                    me.option,
                    N === _ ? me.active : null,
                    x.value === f ? me.selected : null,
                    x.disabled ? me.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    x.disabled || A(x.value);
                  },
                  onMouseEnter: () => {
                    !x.disabled && x.label !== "" && w(N);
                  },
                  children: x.label
                },
                x.value
              )
            )
          }
        )
      ]
    }
  );
}
const Y7 = "_root_5j58f_1", J7 = "_wrap_5j58f_9", Q7 = "_input_5j58f_26", ed = "_invalid_5j58f_31", td = "_clear_5j58f_58", nd = "_menu_5j58f_83", rd = "_option_5j58f_98", ld = "_disabled_5j58f_109", od = "_active_5j58f_113", ad = "_empty_5j58f_123", sd = "_xs_5j58f_129", cd = "_sm_5j58f_136", id = "_md_5j58f_143", dd = "_lg_5j58f_150", ud = "_xl_5j58f_157", He = {
  root: Y7,
  wrap: J7,
  input: Q7,
  invalid: ed,
  clear: td,
  menu: nd,
  option: rd,
  disabled: ld,
  active: od,
  empty: ad,
  xs: sd,
  sm: cd,
  md: id,
  lg: dd,
  xl: ud
}, hd = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function b_({
  options: e = [],
  value: t,
  defaultValue: n = "",
  onChange: l,
  onSelect: s,
  placeholder: c = "",
  size: d = "md",
  invalid: o = !1,
  disabled: a = !1,
  filter: i = hd,
  className: h,
  ...u
}) {
  const b = E1(), y = `${b}-listbox`, k = Q(null), m = Q(null), [g, p] = W(n), [f, v] = W(!1), M = t ?? g, _ = g1(
    () => M.trim() === "" ? [...e] : e.filter((j) => i(j, M)),
    [e, M, i]
  ), w = _.map((j, D) => j.disabled ? -1 : D).filter((j) => j >= 0), [C, z] = W(-1), A = (j) => {
    p(j), l?.(j);
  }, O = (j) => {
    A(j.label), s?.(j.value, j), v(!1);
  }, S = (j) => {
    if (w.length === 0) return;
    const D = w.includes(C) ? w.indexOf(C) : j === 1 ? -1 : 0, P = w[(D + j + w.length) % w.length];
    P != null && z(P);
  }, $ = (j) => {
    a || (A(j.target.value), v(!0), z(-1));
  }, x = () => {
    a || M !== "" && v(!0);
  }, N = (j) => {
    k.current && !k.current.contains(j.relatedTarget) && v(!1);
  }, T = (j) => {
    if (!a)
      switch (j.key) {
        case "ArrowDown":
          j.preventDefault(), f ? S(1) : (v(!0), z(w[0] ?? -1));
          break;
        case "ArrowUp":
          j.preventDefault(), f && S(-1);
          break;
        case "Enter":
          j.preventDefault(), f && C >= 0 && _[C] && O(_[C]);
          break;
        case "Escape":
          j.preventDefault(), v(!1);
          break;
        case "Tab":
          f && C >= 0 && _[C] && O(_[C]), v(!1);
          break;
      }
  }, V = () => {
    A(""), z(-1), v(!0), m.current?.focus();
  };
  return /* @__PURE__ */ L(
    "div",
    {
      ref: k,
      className: [He.root, h].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ L(
          "div",
          {
            className: [He.wrap, He[d], o ? He.invalid : null].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ r(
                "input",
                {
                  ref: m,
                  type: "text",
                  role: "combobox",
                  "aria-expanded": f,
                  "aria-controls": y,
                  "aria-autocomplete": "list",
                  "aria-activedescendant": f && C >= 0 ? `${b}-option-${C}` : void 0,
                  "aria-invalid": o || void 0,
                  disabled: a,
                  value: M,
                  placeholder: c,
                  className: He.input,
                  onChange: $,
                  onFocus: x,
                  onBlur: N,
                  onKeyDown: T,
                  ...u
                }
              ),
              M !== "" && !a && /* @__PURE__ */ r(
                "button",
                {
                  type: "button",
                  className: He.clear,
                  "aria-label": "Clear",
                  onClick: V,
                  children: /* @__PURE__ */ r(M1, { name: "close", size: "sm" })
                }
              )
            ]
          }
        ),
        f && (_.length === 0 ? (
          // No options → no listbox: an empty role="listbox" fails axe
          // aria-required-children either way (bare text child or no
          // children at all), so the empty state renders without the role.
          /* @__PURE__ */ r("div", { id: y, className: He.menu, children: /* @__PURE__ */ r("div", { className: He.empty, children: "No matches" }) })
        ) : /* @__PURE__ */ r("div", { id: y, role: "listbox", className: He.menu, children: _.map((j, D) => /* @__PURE__ */ r(
          "div",
          {
            id: `${b}-option-${D}`,
            role: "option",
            "aria-selected": !1,
            "aria-disabled": j.disabled || void 0,
            className: [
              He.option,
              D === C ? He.active : null,
              j.disabled ? He.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => {
              j.disabled || O(j);
            },
            onMouseDown: (P) => {
              P.preventDefault(), j.disabled || O(j);
            },
            onMouseEnter: () => {
              j.disabled || z(D);
            },
            children: j.label
          },
          j.value
        )) }))
      ]
    }
  );
}
const fd = "_box_txdu6_1", pd = "_option_txdu6_12", md = "_disabled_txdu6_23", _d = "_selected_txdu6_27", vd = "_active_txdu6_33", Xt = {
  box: fd,
  option: pd,
  disabled: md,
  selected: _d,
  active: vd
};
function M_({
  options: e = [],
  value: t,
  defaultValue: n,
  multiple: l = !1,
  onChange: s,
  className: c,
  style: d,
  ...o
}) {
  const a = E1(), [i, h] = W(() => {
    const _ = n;
    return _ == null ? [] : Array.isArray(_) ? [..._] : [_];
  }), u = t == null ? i : Array.isArray(t) ? t : [t], b = e.findIndex((_) => !_.disabled), [y, k] = W(
    () => b >= 0 ? b : 0
  ), m = Q(""), g = Q(null), p = (_) => {
    h(_), s?.(l ? _ : _[0] ?? "");
  }, f = e.map((_, w) => _.disabled ? -1 : w).filter((_) => _ >= 0), v = (_) => {
    const w = e[_];
    if (!(!w || w.disabled))
      if (k(_), l) {
        const C = u.includes(w.value) ? u.filter((z) => z !== w.value) : [...u, w.value];
        p(C);
      } else
        p([w.value]);
  }, M = (_) => {
    if (f.length === 0) return;
    const w = f.includes(y) ? y : f[0];
    let C = -1;
    if (_.key === "ArrowDown")
      C = f[(f.indexOf(w) + 1) % f.length];
    else if (_.key === "ArrowUp")
      C = f[(f.indexOf(w) - 1 + f.length) % f.length];
    else if (_.key === "Home")
      C = f[0];
    else if (_.key === "End")
      C = f[f.length - 1];
    else if (_.key === "Enter" || _.key === " ") {
      _.preventDefault(), v(w);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(_.key)) {
      _.preventDefault();
      const z = (m.current + _.key).toLowerCase();
      m.current = z, g.current && clearTimeout(g.current), g.current = setTimeout(() => {
        m.current = "";
      }, 500);
      const A = [...f, ...f], O = f.indexOf(w) + 1, S = A.slice(O).find(($) => e[$]?.label.toLowerCase().startsWith(z));
      S != null && k(S);
      return;
    }
    C >= 0 && (_.preventDefault(), k(C), l || p([e[C]?.value ?? ""]));
  };
  return /* @__PURE__ */ r(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": l || void 0,
      "aria-activedescendant": e[y] ? `${a}-option-${y}` : void 0,
      style: d,
      className: [Xt.box, c].filter(Boolean).join(" "),
      onKeyDown: M,
      ...o,
      children: e.map((_, w) => {
        const C = u.includes(_.value), z = w === y;
        return /* @__PURE__ */ r(
          "div",
          {
            id: `${a}-option-${w}`,
            role: "option",
            "aria-selected": C,
            "aria-disabled": _.disabled || void 0,
            className: [
              Xt.option,
              C ? Xt.selected : null,
              z ? Xt.active : null,
              _.disabled ? Xt.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => v(w),
            children: _.label
          },
          _.value
        );
      })
    }
  );
}
const gd = "_group_1gpkr_1", kd = "_legend_1gpkr_8", xd = "_list_1gpkr_16", yd = "_item_1gpkr_25", bd = "_disabled_1gpkr_32", Md = "_label_1gpkr_37", Cd = "_checkbox_1gpkr_48", kt = {
  group: gd,
  legend: kd,
  list: xd,
  item: yd,
  disabled: bd,
  label: Md,
  checkbox: Cd
};
function C_({
  options: e = [],
  value: t,
  defaultValue: n = [],
  onChange: l,
  legend: s,
  name: c,
  className: d
}) {
  const [o, a] = W(() => [
    ...n
  ]), i = t ?? o, h = (u, b) => {
    const y = b ? [...i, u] : i.filter((k) => k !== u);
    a(y), l?.(y);
  };
  return /* @__PURE__ */ L("fieldset", { className: [kt.group, d].filter(Boolean).join(" "), children: [
    s != null && /* @__PURE__ */ r("legend", { className: kt.legend, children: s }),
    /* @__PURE__ */ r("ul", { className: kt.list, children: e.map((u) => {
      const b = i.includes(u.value);
      return /* @__PURE__ */ r(
        "li",
        {
          className: [kt.item, u.disabled ? kt.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ L("label", { className: kt.label, children: [
            /* @__PURE__ */ r(
              "input",
              {
                type: "checkbox",
                className: kt.checkbox,
                name: c,
                value: u.value,
                checked: b,
                disabled: u.disabled,
                onChange: (y) => h(u.value, y.target.checked)
              }
            ),
            /* @__PURE__ */ r("span", { children: u.label })
          ] })
        },
        u.value
      );
    }) })
  ] });
}
const wd = "_group_wb5fo_1", zd = "_legend_wb5fo_8", Ld = "_list_wb5fo_16", $d = "_item_wb5fo_25", Nd = "_disabled_wb5fo_32", Sd = "_label_wb5fo_37", Od = "_radio_wb5fo_48", xt = {
  group: wd,
  legend: zd,
  list: Ld,
  item: $d,
  disabled: Nd,
  label: Sd,
  radio: Od
};
function w_({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: l,
  legend: s,
  name: c,
  className: d
}) {
  const [o, a] = W(
    n
  ), i = t ?? o, h = (u) => {
    a(u), l?.(u);
  };
  return /* @__PURE__ */ L("fieldset", { className: [xt.group, d].filter(Boolean).join(" "), children: [
    s != null && /* @__PURE__ */ r("legend", { className: xt.legend, children: s }),
    /* @__PURE__ */ r("ul", { className: xt.list, children: e.map((u) => {
      const b = u.value === i;
      return /* @__PURE__ */ r(
        "li",
        {
          className: [xt.item, u.disabled ? xt.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ L("label", { className: xt.label, children: [
            /* @__PURE__ */ r(
              "input",
              {
                type: "radio",
                className: xt.radio,
                name: c,
                value: u.value,
                checked: b,
                disabled: u.disabled,
                onChange: (y) => h(y.target.value)
              }
            ),
            /* @__PURE__ */ r("span", { children: u.label })
          ] })
        },
        u.value
      );
    }) })
  ] });
}
const Ad = "_bar_44vcf_1", Hd = "_vertical_44vcf_12", jd = "_option_44vcf_17", Td = "_selected_44vcf_40", Vd = "_sm_44vcf_56", Dd = "_md_44vcf_62", Ed = "_lg_44vcf_68", At = {
  bar: Ad,
  vertical: Hd,
  option: jd,
  selected: Td,
  sm: Vd,
  md: Dd,
  lg: Ed
};
function s2(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function z_(e) {
  const {
    options: t = [],
    value: n,
    defaultValue: l,
    multiple: s,
    orientation: c = "horizontal",
    onChange: d,
    size: o = "md",
    className: a,
    ...i
  } = e, h = s ?? !1, [u, b] = W(l ?? (h ? [] : t[0]?.value)), y = n ?? u, k = s === !0 || s === void 0 && Array.isArray(y), m = (p) => {
    if (!k) {
      b(p), d?.(p);
      return;
    }
    const f = s2(y), v = f.includes(p) ? f.filter((M) => M !== p) : [...f, p];
    b(v), d?.(v);
  }, g = (p) => k ? s2(y).includes(p) : y === p;
  return /* @__PURE__ */ r(
    "div",
    {
      role: "group",
      className: [
        At.bar,
        At[o],
        c === "vertical" ? At.vertical : null,
        a
      ].filter(Boolean).join(" "),
      ...i,
      children: t.map((p) => {
        const f = g(p.value);
        return /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            "aria-pressed": f,
            disabled: p.disabled,
            className: [
              At.option,
              f ? At.selected : null,
              p.disabled ? At.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => m(p.value),
            children: p.label
          },
          p.value
        );
      })
    }
  );
}
const qd = "_pressed_12x15_8", Id = {
  pressed: qd
}, L_ = q1(
  function({
    pressed: t,
    defaultPressed: n = !1,
    onChange: l,
    toggleVariant: s,
    toggleSeverity: c = "primary",
    toggleShade: d = "darker",
    toggleContent: o,
    size: a = "md",
    className: i,
    onClick: h,
    children: u,
    variant: b,
    severity: y,
    shade: k,
    ...m
  }, g) {
    const [p, f] = W(n), v = t ?? p, M = (_) => {
      const w = !v;
      t === void 0 && f(w), l?.(w), h?.(_);
    };
    return /* @__PURE__ */ r(
      Et,
      {
        ...m,
        ref: g,
        variant: v && s ? s : b,
        severity: v ? c : y,
        shade: v ? d : k,
        size: a,
        "aria-pressed": v,
        className: [v ? Id.pressed : null, i].filter(Boolean).join(" "),
        onClick: M,
        children: v && o !== void 0 ? o : u
      }
    );
  }
), Pd = "_root_bkdz5_1", Rd = "_action_bkdz5_10", Bd = "_caret_bkdz5_15", Fd = "_sm_bkdz5_49", Kd = "_md_bkdz5_53", Wd = "_lg_bkdz5_57", Zd = "_fullWidth_bkdz5_62", Ud = "_menu_bkdz5_70", Xd = "_item_bkdz5_83", Gd = "_itemIcon_bkdz5_105", Yd = "_disabled_bkdz5_110", Jd = "_active_bkdz5_114", Qd = "_danger_bkdz5_123", Ee = {
  root: Pd,
  action: Rd,
  caret: Bd,
  sm: Fd,
  md: Kd,
  lg: Wd,
  fullWidth: Zd,
  menu: Ud,
  item: Xd,
  itemIcon: Gd,
  disabled: Yd,
  active: Jd,
  danger: Qd
}, $_ = q1(
  function({
    label: t,
    onClick: n,
    items: l = [],
    severity: s = "primary",
    variant: c = "filled",
    shade: d = "default",
    size: o = "md",
    loading: a = !1,
    visible: i = !0,
    fullWidth: h = !1,
    disabled: u = !1,
    className: b,
    "aria-label": y,
    openAriaLabel: k = "More actions",
    ...m
  }, g) {
    const f = `${E1()}-menu`, v = Q(null), M = Q(null), _ = Q([]), [w, C] = W(!1), [z, A] = W(-1), O = u || a, S = g1(
      () => l.map((P, U) => P.disabled ? -1 : U).filter((P) => P >= 0),
      [l]
    ), $ = q(() => {
      O || (A(S[0] ?? -1), C(!0));
    }, [O, S]), x = q(() => {
      C(!1), M.current?.focus();
    }, []);
    v1(() => {
      if (!w) return;
      const P = (U) => {
        v.current && !v.current.contains(U.target) && C(!1);
      };
      return document.addEventListener("mousedown", P), () => document.removeEventListener("mousedown", P);
    }, [w]), v1(() => {
      w && (O || !i) && C(!1);
    }, [w, O, i]);
    const N = Q(w);
    if (v1(() => {
      const P = N.current;
      if (N.current = w, !w || P) return;
      const U = S.includes(z) ? z : S[0] ?? -1;
      U >= 0 && _.current[U]?.focus();
    }, [w, z, S]), i === !1) return null;
    const T = (P) => {
      const U = l[P];
      !U || U.disabled || (U.onClick?.(), C(!1), M.current?.focus());
    }, V = (P) => {
      if (S.length === 0) return;
      const U = S.includes(z) ? S.indexOf(z) : P === 1 ? -1 : 0, e1 = S[(U + P + S.length) % S.length];
      e1 != null && (A(e1), _.current[e1]?.focus());
    }, j = (P) => {
      const U = P === "first" ? S[0] : S[S.length - 1];
      U != null && (A(U), _.current[U]?.focus());
    }, D = (P) => {
      switch (P.key) {
        case "ArrowDown":
          P.preventDefault(), V(1);
          break;
        case "ArrowUp":
          P.preventDefault(), V(-1);
          break;
        case "Home":
          P.preventDefault(), j("first");
          break;
        case "End":
          P.preventDefault(), j("last");
          break;
        case "Escape":
          P.preventDefault(), x();
          break;
        case "Tab":
          C(!1);
          break;
      }
    };
    return /* @__PURE__ */ L(
      "div",
      {
        ref: (P) => {
          v.current = P, typeof g == "function" ? g(P) : g && (g.current = P);
        },
        className: [
          Ee.root,
          Ee[o],
          h ? Ee.fullWidth : null,
          b
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ r(
            Et,
            {
              className: Ee.action,
              variant: c,
              severity: s,
              shade: d,
              size: o,
              loading: a,
              disabled: u,
              "aria-label": y,
              onClick: () => {
                w && C(!1), n?.();
              },
              children: t
            }
          ),
          /* @__PURE__ */ r(
            Et,
            {
              ref: M,
              className: Ee.caret,
              variant: c,
              severity: s,
              shade: d,
              size: o,
              disabled: O,
              "aria-haspopup": "menu",
              "aria-expanded": w,
              "aria-controls": f,
              "aria-label": k,
              onClick: () => w ? C(!1) : $(),
              onKeyDown: (P) => {
                !w && (P.key === "ArrowDown" || P.key === "ArrowUp") && (P.preventDefault(), $());
              },
              children: /* @__PURE__ */ r(M1, { name: "chevron-down", "aria-hidden": "true" })
            }
          ),
          w && /* @__PURE__ */ r(
            "div",
            {
              id: f,
              role: "menu",
              tabIndex: -1,
              "aria-label": k,
              className: Ee.menu,
              onKeyDown: D,
              ...m,
              children: l.map((P, U) => /* @__PURE__ */ L(
                "button",
                {
                  ref: (e1) => {
                    _.current[U] = e1;
                  },
                  type: "button",
                  role: "menuitem",
                  tabIndex: U === z ? 0 : -1,
                  disabled: P.disabled,
                  className: [
                    Ee.item,
                    U === z ? Ee.active : null,
                    P.danger ? Ee.danger : null,
                    P.disabled ? Ee.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => T(U),
                  onMouseEnter: () => {
                    P.disabled || A(U);
                  },
                  children: [
                    P.icon ? /* @__PURE__ */ r("span", { className: Ee.itemIcon, "aria-hidden": "true", children: /* @__PURE__ */ r(M1, { name: P.icon, size: 16 }) }) : null,
                    P.label
                  ]
                },
                P.key
              ))
            }
          )
        ]
      }
    );
  }
), e9 = "_wrapper_eg26m_1", t9 = "_input_eg26m_8", n9 = "_invalid_eg26m_38", r9 = "_toggle_eg26m_45", l9 = "_xs_eg26m_80", o9 = "_sm_eg26m_86", a9 = "_md_eg26m_92", s9 = "_lg_eg26m_98", c9 = "_xl_eg26m_104", Gt = {
  wrapper: e9,
  input: t9,
  invalid: n9,
  toggle: r9,
  xs: l9,
  sm: o9,
  md: a9,
  lg: s9,
  xl: c9
}, N_ = q1(
  function({
    size: t = "md",
    invalid: n = !1,
    className: l,
    disabled: s,
    showLabel: c = "Show password",
    hideLabel: d = "Hide password",
    ...o
  }, a) {
    const [i, h] = W(!1);
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ L("div", { className: Gt.wrapper, "data-size": t, children: [
        /* @__PURE__ */ r(
          "input",
          {
            ref: a,
            type: i ? "text" : "password",
            disabled: s,
            className: [
              Gt.input,
              Gt[t],
              n ? Gt.invalid : null,
              l
            ].filter(Boolean).join(" "),
            "aria-invalid": n || void 0,
            ...o
          }
        ),
        /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: Gt.toggle,
            "aria-pressed": i,
            "aria-label": i ? d : c,
            disabled: s,
            onClick: () => h((u) => !u),
            children: /* @__PURE__ */ r(M1, { name: i ? "eye-off" : "eye", size: 16 })
          }
        )
      ] })
    );
  }
), i9 = "_mask_1pv7j_1", d9 = "_invalid_1pv7j_31", u9 = "_xs_1pv7j_38", h9 = "_sm_1pv7j_44", f9 = "_md_1pv7j_50", p9 = "_lg_1pv7j_56", m9 = "_xl_1pv7j_62", w0 = {
  mask: i9,
  invalid: d9,
  xs: u9,
  sm: h9,
  md: f9,
  lg: p9,
  xl: m9
};
function c2(e, t) {
  let n = e.replace(/\D/g, ""), l = "";
  for (const s of t)
    if (s === "#") {
      if (n.length === 0) break;
      l += n[0] ?? "", n = n.slice(1);
    } else if (n.length > 0)
      l += s;
    else
      break;
  return l;
}
const S_ = q1(function({
  size: t = "md",
  invalid: n = !1,
  mask: l,
  value: s,
  defaultValue: c = "",
  onChange: d,
  className: o,
  onKeyDown: a,
  ...i
}, h) {
  const [u, b] = W(c ?? ""), y = s !== void 0, k = y ? s ?? "" : u, m = (f) => {
    const v = c2(f, l);
    return y || b(v), d?.(v), v;
  };
  return /* @__PURE__ */ r(
    "input",
    {
      ref: h,
      type: "text",
      "data-size": t,
      value: k,
      onChange: (f) => {
        m(f.target.value);
      },
      onKeyDown: (f) => {
        if (f.key === "Backspace") {
          const v = f.currentTarget.selectionStart ?? k.length, M = k[v - 1];
          if (M !== void 0 && !/\d/.test(M)) {
            f.preventDefault();
            const _ = k.replace(/\D/g, "");
            m(c2(_.slice(0, -1), l));
          }
        }
        a?.(f);
      },
      className: [
        w0.mask,
        w0[t],
        n ? w0.invalid : null,
        o
      ].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...i
    }
  );
}), _9 = "_wrapper_b3q45_1", v9 = "_input_b3q45_8", g9 = "_invalid_b3q45_38", k9 = "_button_b3q45_45", x9 = "_up_b3q45_77", y9 = "_down_b3q45_82", b9 = "_xs_b3q45_87", M9 = "_sm_b3q45_93", C9 = "_md_b3q45_99", w9 = "_lg_b3q45_105", z9 = "_xl_b3q45_111", dt = {
  wrapper: _9,
  input: v9,
  invalid: g9,
  button: k9,
  up: x9,
  down: y9,
  xs: b9,
  sm: M9,
  md: C9,
  lg: w9,
  xl: z9
};
function S0(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function L9(e) {
  let t = "", n = !1;
  for (const l of e)
    l >= "0" && l <= "9" ? t += l : l === "." && !n ? (n = !0, t += l) : l === "-" && t.length === 0 && (t += l);
  return t;
}
function j2(e, t, n) {
  return Math.min(n ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function $9(e, t, n) {
  return t === void 0 ? e : t + Math.round((e - t) / n) * n;
}
function N9(e, t, n, l, s) {
  const d = S0(e) ?? n ?? 0;
  let o;
  return n === void 0 ? o = d + t * s : t > 0 ? o = n + Math.ceil((d - n + 1e-9) / s) * s : o = n + Math.floor((d - n - 1e-9) / s) * s, j2(o, n, l);
}
const O_ = q1(
  function({
    size: t = "md",
    invalid: n = !1,
    className: l,
    disabled: s,
    value: c,
    defaultValue: d,
    onChange: o,
    min: a,
    max: i,
    step: h = 1,
    incrementLabel: u = "Increment",
    decrementLabel: b = "Decrement",
    onBlur: y,
    onKeyDown: k,
    ...m
  }, g) {
    const [p, f] = W(
      d != null ? String(d) : ""
    ), v = c !== void 0, M = v ? c == null ? "" : String(c) : p, _ = (S) => {
      v || f(S), o?.(S0(S));
    }, w = (S) => {
      v || f(String(S)), o?.(S);
    }, C = (S) => {
      s || w(N9(M, S, a, i, h));
    }, z = (S) => {
      _(L9(S.target.value));
    }, A = (S) => {
      S.key === "ArrowUp" ? (S.preventDefault(), C(1)) : S.key === "ArrowDown" && (S.preventDefault(), C(-1)), k?.(S);
    }, O = (S) => {
      const $ = S0(M);
      $ === null ? (v || f(""), o?.(null)) : w(j2($9($, a, h), a, i)), y?.(S);
    };
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ L("div", { className: dt.wrapper, "data-size": t, children: [
        /* @__PURE__ */ r(
          "input",
          {
            ref: g,
            type: "text",
            inputMode: "decimal",
            autoComplete: "off",
            value: M,
            disabled: s,
            onChange: z,
            onKeyDown: A,
            onBlur: O,
            className: [
              dt.input,
              dt[t],
              n ? dt.invalid : null,
              l
            ].filter(Boolean).join(" "),
            "aria-invalid": n || void 0,
            ...m
          }
        ),
        /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: [dt.button, dt.up].join(" "),
            "aria-label": u,
            disabled: s,
            onClick: () => C(1),
            children: /* @__PURE__ */ r(M1, { name: "chevron-up", size: 14 })
          }
        ),
        /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: [dt.button, dt.down].join(" "),
            "aria-label": b,
            disabled: s,
            onClick: () => C(-1),
            children: /* @__PURE__ */ r(M1, { name: "chevron-down", size: 14 })
          }
        )
      ] })
    );
  }
), z1 = {
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
}, S9 = [
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
function Ne(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function O0(e) {
  const t = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(e.trim());
  if (!t) return null;
  let n = t[1];
  return n.length === 3 && (n = n.split("").map((l) => l + l).join("")), {
    r: Number.parseInt(n.slice(0, 2), 16),
    g: Number.parseInt(n.slice(2, 4), 16),
    b: Number.parseInt(n.slice(4, 6), 16),
    a: 1
  };
}
function O9({ r: e, g: t, b: n }) {
  const l = (s) => Math.round(s).toString(16).padStart(2, "0");
  return `#${l(e)}${l(t)}${l(n)}`;
}
function A9({ r: e, g: t, b: n }) {
  const l = e / 255, s = t / 255, c = n / 255, d = Math.max(l, s, c), o = Math.min(l, s, c), a = d - o;
  let i = 0;
  return a !== 0 && (d === l ? i = (s - c) / a % 6 : d === s ? i = (c - l) / a + 2 : i = (l - s) / a + 4, i *= 60, i < 0 && (i += 360)), {
    h: i,
    s: d === 0 ? 0 : a / d,
    v: d
  };
}
function Ht({ h: e, s: t, v: n }) {
  const l = n * t, s = e / 60, c = l * (1 - Math.abs(s % 2 - 1));
  let d = 0, o = 0, a = 0;
  s < 1 ? (d = l, o = c) : s < 2 ? (d = c, o = l) : s < 3 ? (o = l, a = c) : s < 4 ? (o = c, a = l) : s < 5 ? (d = c, a = l) : (d = l, a = c);
  const i = n - l;
  return {
    r: Math.round((d + i) * 255),
    g: Math.round((o + i) * 255),
    b: Math.round((a + i) * 255),
    a: 1
  };
}
function H9(e) {
  const t = O0(e);
  if (t) return t;
  const n = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*([\d.]+))?\s*\)$/i.exec(
    e.trim()
  );
  return n ? {
    r: Ne(Number(n[1]), 0, 255),
    g: Ne(Number(n[2]), 0, 255),
    b: Ne(Number(n[3]), 0, 255),
    a: n[4] != null ? Ne(Number(n[4]), 0, 1) : 1
  } : null;
}
function i2({ r: e, g: t, b: n, a: l }) {
  return l >= 1 ? `rgb(${e}, ${t}, ${n})` : `rgba(${e}, ${t}, ${n}, ${Math.round(l * 100) / 100})`;
}
const A_ = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: n = !0,
  showPalette: l = !0,
  palette: s = S9,
  showButton: c = !1,
  showArrow: d = !0,
  disabled: o = !1,
  invalid: a = !1,
  placeholder: i = "",
  size: h = "md",
  tabIndex: u = 0,
  className: b,
  onChange: y,
  onValueChange: k,
  onOpen: m,
  onClose: g
}) => {
  const p = Q(null), f = Q(null), v = Q(null), M = Q(null), _ = Q(null), w = E1(), C = Q(null), z = g1(
    () => H9(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [A, O] = W(!1), [S, $] = W(null), x = S ?? z, N = g1(() => A9(x), [x]), T = q(
    (Z) => {
      const H = i2(Z);
      y?.(H), k?.(H);
    },
    [y, k]
  ), V = q(
    (Z, H) => {
      $(Z), H && !c && T(Z);
    },
    [c, T]
  ), j = q(() => {
    O(!1), $(null), g?.(), f.current?.focus();
  }, [g]), D = q(() => {
    o || ($(z), O(!0), m?.());
  }, [o, z, m]), P = q(() => {
    A ? j() : D();
  }, [A, j, D]), U = q(
    (Z, H) => {
      const K = v.current;
      if (!K) return N;
      const Y = K.getBoundingClientRect(), f1 = Ne((Z - Y.left) / Y.width, 0, 1), t1 = Ne(1 - (H - Y.top) / Y.height, 0, 1);
      return { h: N.h, s: f1, v: t1 };
    },
    [N]
  ), e1 = q(
    (Z, H) => {
      if (!H) return 0;
      const K = H.getBoundingClientRect();
      return Ne((Z - K.left) / K.width, 0, 1);
    },
    []
  ), G = (Z) => {
    if (o) return;
    Z.preventDefault(), Z.currentTarget.setPointerCapture(Z.pointerId), C.current = "sat";
    const H = U(Z.clientX, Z.clientY);
    V({ ...Ht(H), a: x.a }, !0);
  }, m1 = (Z) => {
    if (C.current !== "sat") return;
    Z.preventDefault();
    const H = U(Z.clientX, Z.clientY);
    V({ ...Ht(H), a: x.a }, !0);
  }, d1 = (Z) => {
    if (o) return;
    Z.preventDefault(), Z.currentTarget.setPointerCapture(Z.pointerId), C.current = "hue";
    const H = e1(Z.clientX, M.current);
    V(
      { ...Ht({ ...N, h: H * 360 }), a: x.a },
      !0
    );
  }, l1 = (Z) => {
    if (C.current !== "hue") return;
    Z.preventDefault();
    const H = e1(Z.clientX, M.current);
    V(
      { ...Ht({ ...N, h: H * 360 }), a: x.a },
      !0
    );
  }, B = (Z) => {
    if (o) return;
    Z.preventDefault(), Z.currentTarget.setPointerCapture(Z.pointerId), C.current = "alpha";
    const H = e1(Z.clientX, _.current);
    V({ ...x, a: H }, !0);
  }, c1 = (Z) => {
    if (C.current !== "alpha") return;
    Z.preventDefault();
    const H = e1(Z.clientX, _.current);
    V({ ...x, a: H }, !0);
  }, r1 = () => {
    C.current = null;
  }, u1 = q(
    (Z, H) => {
      const K = {
        h: N.h,
        s: Ne(N.s + Z, 0, 1),
        v: Ne(N.v + H, 0, 1)
      };
      V({ ...Ht(K), a: x.a }, !0);
    },
    [N, x.a, V]
  ), o1 = q(
    (Z) => {
      const H = (N.h + Z + 360) % 360;
      V({ ...Ht({ ...N, h: H }), a: x.a }, !0);
    },
    [N, x.a, V]
  ), w1 = q(
    (Z) => {
      V({ ...x, a: Ne(x.a + Z, 0, 1) }, !0);
    },
    [x, V]
  ), L1 = (Z) => {
    switch (Z.key) {
      case "ArrowLeft":
        Z.preventDefault(), u1(-0.05, 0);
        break;
      case "ArrowRight":
        Z.preventDefault(), u1(0.05, 0);
        break;
      case "ArrowUp":
        Z.preventDefault(), u1(0, 0.05);
        break;
      case "ArrowDown":
        Z.preventDefault(), u1(0, -0.05);
        break;
      case "Escape":
        Z.preventDefault(), j();
        break;
    }
  }, Y1 = (Z, H) => {
    switch (Z.key) {
      case "ArrowLeft":
        Z.preventDefault(), H === "hue" ? o1(-6) : w1(-0.05);
        break;
      case "ArrowRight":
        Z.preventDefault(), H === "hue" ? o1(6) : w1(0.05);
        break;
      case "Escape":
        Z.preventDefault(), j();
        break;
    }
  }, y1 = (Z, H) => {
    if (Z === "hex") {
      const t1 = O0(H);
      t1 && V({ ...t1, a: x.a }, !0);
      return;
    }
    const K = H.replace(/[^\d.]/g, ""), Y = Number.parseFloat(K);
    if (Number.isNaN(Y)) return;
    if (Z === "a") {
      const t1 = K.includes(".") ? Ne(Y, 0, 1) : Ne(Y / 100, 0, 1);
      V({ ...x, a: t1 }, !0);
      return;
    }
    const f1 = { r: 255, g: 255, b: 255 };
    V(
      { ...x, [Z]: Ne(Y, 0, f1[Z]) },
      !0
    );
  }, P1 = () => {
    S && (T(S), $(null), O(!1), g?.(), f.current?.focus());
  };
  v1(() => {
    if (!A) return;
    const Z = (H) => {
      p.current && !p.current.contains(H.target) && j();
    };
    return document.addEventListener("mousedown", Z), () => document.removeEventListener("mousedown", Z);
  }, [A, j]), v1(() => {
    if (!A) return;
    const Z = (H) => {
      H.key === "Escape" && j();
    };
    return document.addEventListener("keydown", Z), () => document.removeEventListener("keydown", Z);
  }, [A, j]);
  const C1 = h === "xs" ? z1["dx-colorpicker-trigger-xs"] : h === "sm" ? z1["dx-colorpicker-trigger-sm"] : h === "lg" ? z1["dx-colorpicker-trigger-lg"] : h === "xl" ? z1["dx-colorpicker-trigger-xl"] : z1["dx-colorpicker-trigger"], oe = i2(x), ne = O9(x), J1 = { x: N.s * 100, y: (1 - N.v) * 100 }, we = N.h / 360 * 100, ge = x.a * 100, ae = /* @__PURE__ */ L("div", { className: z1["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ r(
      "div",
      {
        ref: v,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(N.s * 100),
        "aria-valuetext": `Saturation ${Math.round(N.s * 100)}%, value ${Math.round(N.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : u,
        className: z1["dx-saturation-picker"],
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${N.h}, 100%, 50%)`
        },
        onKeyDown: L1,
        onPointerDown: G,
        onPointerMove: m1,
        onPointerUp: r1,
        children: /* @__PURE__ */ r(
          "span",
          {
            className: z1["dx-saturation-indicator"],
            style: { left: `${J1.x}%`, top: `${J1.y}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    t && /* @__PURE__ */ r(
      "div",
      {
        ref: M,
        role: "slider",
        "aria-label": "Hue",
        "aria-valuemin": 0,
        "aria-valuemax": 360,
        "aria-valuenow": Math.round(N.h),
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : u,
        className: z1["dx-hue-picker"],
        onKeyDown: (Z) => Y1(Z, "hue"),
        onPointerDown: d1,
        onPointerMove: l1,
        onPointerUp: r1,
        children: /* @__PURE__ */ r(
          "span",
          {
            className: z1["dx-hue-indicator"],
            style: { left: `${we}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    t && /* @__PURE__ */ r(
      "div",
      {
        ref: _,
        role: "slider",
        "aria-label": "Alpha",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(ge),
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : u,
        className: z1["dx-alpha-picker"],
        style: {
          background: `repeating-conic-gradient(var(--dx-border-color) 0% 25%, var(--dx-surface-color) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${N.h}, 100%, 50%))`
        },
        onKeyDown: (Z) => Y1(Z, "alpha"),
        onPointerDown: B,
        onPointerMove: c1,
        onPointerUp: r1,
        children: /* @__PURE__ */ r(
          "span",
          {
            className: z1["dx-alpha-indicator"],
            style: { left: `${ge}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    n && /* @__PURE__ */ L("div", { className: z1["dx-colorpicker-rgba"], children: [
      /* @__PURE__ */ L("label", { className: z1["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ r("span", { className: z1["dx-colorpicker-rgba-label"], children: "Hex" }),
        /* @__PURE__ */ r(
          "input",
          {
            type: "text",
            maxLength: 7,
            className: z1["dx-colorpicker-rgba-input"],
            "aria-label": "Hex",
            value: ne,
            onChange: (Z) => y1("hex", Z.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ L("label", { className: z1["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ r("span", { className: z1["dx-colorpicker-rgba-label"], children: "R" }),
        /* @__PURE__ */ r(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: z1["dx-colorpicker-rgba-input"],
            "aria-label": "Red",
            value: x.r,
            onChange: (Z) => y1("r", Z.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ L("label", { className: z1["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ r("span", { className: z1["dx-colorpicker-rgba-label"], children: "G" }),
        /* @__PURE__ */ r(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: z1["dx-colorpicker-rgba-input"],
            "aria-label": "Green",
            value: x.g,
            onChange: (Z) => y1("g", Z.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ L("label", { className: z1["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ r("span", { className: z1["dx-colorpicker-rgba-label"], children: "B" }),
        /* @__PURE__ */ r(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: z1["dx-colorpicker-rgba-input"],
            "aria-label": "Blue",
            value: x.b,
            onChange: (Z) => y1("b", Z.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ L("label", { className: z1["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ r("span", { className: z1["dx-colorpicker-rgba-label"], children: "A" }),
        /* @__PURE__ */ r(
          "input",
          {
            type: "text",
            inputMode: "decimal",
            maxLength: 4,
            className: z1["dx-colorpicker-rgba-input"],
            "aria-label": "Alpha",
            value: Math.round(x.a * 100),
            onChange: (Z) => y1("a", Z.target.value)
          }
        )
      ] })
    ] }),
    l && /* @__PURE__ */ r("div", { className: z1["dx-colorpicker-palette"], children: s.map((Z) => /* @__PURE__ */ r(
      "button",
      {
        type: "button",
        className: z1["dx-colorpicker-swatch"],
        "aria-label": Z,
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : u,
        style: { backgroundColor: Z },
        onClick: () => {
          const H = O0(Z);
          c ? V({ ...H, a: x.a }, !1) : ($(null), T({ ...H, a: x.a }), O(!1), g?.(), f.current?.focus());
        }
      },
      Z
    )) }),
    c && /* @__PURE__ */ r("div", { className: z1["dx-colorpicker-footer"], children: /* @__PURE__ */ r(
      "button",
      {
        type: "button",
        className: z1["dx-colorpicker-ok"],
        onClick: P1,
        children: "OK"
      }
    ) })
  ] });
  return /* @__PURE__ */ L(
    "div",
    {
      ref: p,
      className: [
        z1["dx-colorpicker"],
        A ? z1["dx-colorpicker-open"] : null,
        a ? z1["dx-colorpicker-invalid"] : null,
        b
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ L(
          "button",
          {
            ref: f,
            type: "button",
            className: [z1["dx-colorpicker-trigger"], C1].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": A,
            "aria-controls": w,
            "aria-label": "Pick a color",
            "aria-disabled": o || void 0,
            disabled: o,
            tabIndex: u,
            onClick: P,
            onKeyDown: (Z) => {
              Z.key === "Escape" && A && (Z.preventDefault(), j());
            },
            children: [
              /* @__PURE__ */ r(
                "span",
                {
                  className: z1["dx-colorpicker-value"],
                  style: { backgroundColor: oe },
                  "aria-hidden": "true"
                }
              ),
              i && /* @__PURE__ */ r("span", { className: z1["dx-colorpicker-text"], children: i }),
              d && /* @__PURE__ */ r("span", { className: z1["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ r(M1, { name: "chevron-down", size: 14 }) })
            ]
          }
        ),
        A && /* @__PURE__ */ r(
          "div",
          {
            id: w,
            role: "dialog",
            "aria-label": "Choose color",
            className: z1["dx-colorpicker-popup"],
            children: ae
          }
        )
      ]
    }
  );
}, S1 = {
  "dx-datepicker": "_dx-datepicker_njqb0_1",
  "dx-datepicker-inline": "_dx-datepicker-inline_njqb0_9",
  "dx-datepicker-input": "_dx-datepicker-input_njqb0_13",
  "dx-datepicker-input-invalid": "_dx-datepicker-input-invalid_njqb0_43",
  "dx-datepicker-input--xs": "_dx-datepicker-input--xs_njqb0_50",
  "dx-datepicker-input--sm": "_dx-datepicker-input--sm_njqb0_56",
  "dx-datepicker-input--md": "_dx-datepicker-input--md_njqb0_62",
  "dx-datepicker-input--lg": "_dx-datepicker-input--lg_njqb0_68",
  "dx-datepicker-input--xl": "_dx-datepicker-input--xl_njqb0_74",
  "dx-datepicker-trigger": "_dx-datepicker-trigger_njqb0_80",
  "dx-datepicker-clear": "_dx-datepicker-clear_njqb0_115",
  "dx-datepicker-clear--inset": "_dx-datepicker-clear--inset_njqb0_145",
  "dx-datepicker-popup": "_dx-datepicker-popup_njqb0_149",
  "dx-datepicker-calendar": "_dx-datepicker-calendar_njqb0_161",
  "dx-datepicker-header": "_dx-datepicker-header_njqb0_167",
  "dx-datepicker-nav": "_dx-datepicker-nav_njqb0_175",
  "dx-datepicker-title": "_dx-datepicker-title_njqb0_201",
  "dx-datepicker-grid": "_dx-datepicker-grid_njqb0_209",
  "dx-datepicker-week-row": "_dx-datepicker-week-row_njqb0_214",
  "dx-datepicker-row": "_dx-datepicker-row_njqb0_215",
  "dx-datepicker-weekday": "_dx-datepicker-weekday_njqb0_220",
  "dx-datepicker-day": "_dx-datepicker-day_njqb0_230",
  "dx-datepicker-day--today": "_dx-datepicker-day--today_njqb0_258",
  "dx-datepicker-day--selected": "_dx-datepicker-day--selected_njqb0_262",
  "dx-datepicker-day--outside": "_dx-datepicker-day--outside_njqb0_272",
  "dx-datepicker-day--disabled": "_dx-datepicker-day--disabled_njqb0_276",
  "dx-datepicker-time": "_dx-datepicker-time_njqb0_282",
  "dx-datepicker-time-field": "_dx-datepicker-time-field_njqb0_291",
  "dx-datepicker-time-label": "_dx-datepicker-time-label_njqb0_297",
  "dx-datepicker-time-control": "_dx-datepicker-time-control_njqb0_302",
  "dx-datepicker-time-input": "_dx-datepicker-time-input_njqb0_306",
  "dx-datepicker-time-buttons": "_dx-datepicker-time-buttons_njqb0_326",
  "dx-datepicker-ok": "_dx-datepicker-ok_njqb0_354"
}, j9 = 42;
function Se(e) {
  return String(e).padStart(2, "0");
}
function Ce(e) {
  return `${e.year}-${Se(e.month)}-${Se(e.day)}`;
}
function T9(e, t) {
  const n = Ce(e);
  return t ? `${n} ${Se(e.hour)}:${Se(e.minute)}:${Se(e.second)}` : n;
}
function A0(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!t) return null;
  const n = Number(t[1]), l = Number(t[2]), s = Number(t[3]), c = t[4] != null ? Number(t[4]) : 0, d = t[5] != null ? Number(t[5]) : 0, o = t[6] != null ? Number(t[6]) : 0;
  if (l < 1 || l > 12 || s < 1 || s > 31) return null;
  const a = new Date(n, l - 1, s, c, d, o);
  return a.getFullYear() !== n || a.getMonth() !== l - 1 || a.getDate() !== s ? null : { year: n, month: l, day: s, hour: c, minute: d, second: o };
}
function ut() {
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
function tt(e, t) {
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
function d0(e, t) {
  const n = new Date(e.year, e.month - 1 + t, 1), l = n.getFullYear(), s = n.getMonth() + 1, c = new Date(l, s, 0).getDate();
  return {
    year: l,
    month: s,
    day: Math.min(e.day, c),
    hour: e.hour,
    minute: e.minute,
    second: e.second
  };
}
function d2(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const u2 = {
  yyyy: (e) => String(e.year).padStart(4, "0"),
  yy: (e) => Se(e.year % 100),
  MM: (e) => Se(e.month),
  M: (e) => String(e.month),
  dd: (e) => Se(e.day),
  d: (e) => String(e.day),
  HH: (e) => Se(e.hour),
  H: (e) => String(e.hour),
  mm: (e) => Se(e.minute),
  m: (e) => String(e.minute),
  ss: (e) => Se(e.second),
  s: (e) => String(e.second),
  tt: (e, t, n) => new Intl.DateTimeFormat(n, {
    hour: "numeric",
    hour12: !0
  }).formatToParts(t).find((s) => s.type === "dayPeriod")?.value ?? ""
}, V9 = [
  "yyyy",
  "yy",
  "MM",
  "dd",
  "HH",
  "mm",
  "ss",
  "tt"
], D9 = ["y", "M", "d", "H", "m", "s"];
function u0(e, t, n) {
  const l = new Date(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second
  );
  let s = "", c = 0;
  for (; c < t.length; ) {
    let d = !1;
    for (const a of V9)
      if (t.startsWith(a, c)) {
        s += u2[a](e, l, n), c += a.length, d = !0;
        break;
      }
    if (d) continue;
    const o = t[c];
    if (D9.includes(o)) {
      s += u2[o](e, l, n), c += 1;
      continue;
    }
    s += o, c += 1;
  }
  return s;
}
const E9 = [
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
function q9(e, t) {
  const n = {};
  let l = 0, s = 0;
  for (; s < t.length; ) {
    let o = null;
    for (const a of E9)
      if (t.startsWith(a, s)) {
        o = a;
        break;
      }
    if (o) {
      const a = e.slice(l, l + o.length);
      if (!/^\d+$/.test(a)) return null;
      const i = Number(a);
      switch (o) {
        case "yyyy":
          n.year = i;
          break;
        case "yy":
        case "y":
          n.year = 2e3 + i;
          break;
        case "MM":
        case "M":
          n.month = i;
          break;
        case "dd":
        case "d":
          n.day = i;
          break;
        case "HH":
        case "H":
          n.hour = i;
          break;
        case "mm":
        case "m":
          n.minute = i;
          break;
        case "ss":
        case "s":
          n.second = i;
          break;
      }
      l += o.length, s += o.length;
      continue;
    }
    if (e[l] !== t[s]) return null;
    l += 1, s += 1;
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
function Yt(e, t) {
  const n = A0(e);
  return n || q9(e, t);
}
function I9(e, t, n) {
  return t && Ce(e) < Ce(t) ? t : n && Ce(e) > Ce(n) ? n : e;
}
const P9 = ["hour", "minute", "second"];
function h0(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const H_ = q1(
  function({
    size: t = "md",
    invalid: n = !1,
    value: l,
    defaultValue: s,
    format: c = "yyyy-MM-dd",
    min: d,
    max: o,
    showTime: a = !1,
    showButton: i = !0,
    allowClear: h = !1,
    inline: u = !1,
    disabledDates: b,
    locale: y = "en-US",
    onChange: k,
    onValueChange: m,
    onOpen: g,
    onClose: p,
    disabled: f,
    readOnly: v,
    placeholder: M,
    ariaLabel: _,
    triggerLabel: w,
    clearLabel: C,
    tabIndex: z,
    className: A,
    onBlur: O,
    onKeyDown: S,
    ...$
  }, x) {
    const N = Q(null), T = Q(null), V = Q(null), j = Q(null), D = E1(), P = l !== void 0, [U, e1] = W(
      () => s != null ? u0(
        Yt(s, c) ?? ut(),
        c,
        y
      ) : ""
    ), [G, m1] = W(!1), [d1, l1] = W(null), [B, c1] = W(() => {
      const F = l !== void 0 ? l ?? "" : s ?? "";
      if (F) {
        const a1 = Yt(F, c);
        if (a1) return a1;
      }
      return ut();
    }), r1 = g1(() => d ? A0(d) : null, [d]), u1 = g1(() => o ? A0(o) : null, [o]), o1 = g1(
      () => new Set(b ?? []),
      [b]
    ), w1 = g1(() => {
      const F = P ? l ?? "" : U;
      return F ? Yt(F, c) : null;
    }, [l, U, P, c]), L1 = q(
      (F) => {
        const a1 = Ce(F);
        return !!(o1.has(a1) || r1 && a1 < Ce(r1) || u1 && a1 > Ce(u1));
      },
      [o1, r1, u1]
    ), Y1 = q(
      (F) => {
        if (!L1(F)) return F;
        for (let a1 = 1; a1 <= 366; a1 += 1) {
          const j1 = tt(F, a1);
          if (!L1(j1)) return j1;
          const D1 = tt(F, -a1);
          if (!L1(D1)) return D1;
        }
        return F;
      },
      [L1]
    ), y1 = q(
      (F) => {
        P || e1(F ? u0(F, c, y) : "");
        const a1 = F ? T9(F, a) : "";
        k?.(a1), m?.(a1);
      },
      [P, c, y, a, k, m]
    ), P1 = q(
      (F) => {
        T.current = F, typeof x == "function" ? x(F) : x && (x.current = F);
      },
      [x]
    ), C1 = q(() => {
      m1(!1), l1(null), p?.(), u || V.current?.focus();
    }, [u, p]), oe = q(() => {
      if (f) return;
      const F = w1 ?? ut();
      l1(F), c1(Y1(F)), m1(!0), g?.();
    }, [f, w1, Y1, g]), ne = q(() => {
      G ? C1() : oe();
    }, [G, C1, oe]), J1 = q((F) => {
      j.current?.querySelector(
        `[data-date="${Ce(F)}"]`
      )?.focus();
    }, []), we = q(
      (F) => {
        if (L1(F)) return;
        const a1 = d1 ?? w1, D1 = {
          ...a ? {
            hour: a1?.hour ?? 0,
            minute: a1?.minute ?? 0,
            second: a1?.second ?? 0
          } : { hour: 0, minute: 0, second: 0 },
          year: F.year,
          month: F.month,
          day: F.day
        };
        l1(D1), a || (y1(D1), C1());
      },
      [L1, d1, w1, a, y1, C1]
    ), ge = q(
      (F, a1) => {
        l1((j1) => {
          const D1 = j1 ?? w1 ?? ut(), le = Math.min(F === "hour" ? 23 : 59, Math.max(0, D1[F] + a1));
          return { ...D1, [F]: le };
        });
      },
      [w1]
    ), ae = q(
      (F, a1) => {
        const j1 = a1.replace(/\D/g, ""), D1 = j1 === "" ? 0 : Number(j1), Pe = F === "hour" ? 23 : 59;
        l1((le) => ({ ...le ?? w1 ?? ut(), [F]: Math.min(Pe, D1) }));
      },
      [w1]
    ), Z = q(() => {
      d1 && (y1(d1), C1());
    }, [d1, y1, C1]), H = q(() => {
      if (G) return;
      const F = Yt(U, c);
      y1(F ? I9(F, r1, u1) : null);
    }, [G, U, c, r1, u1, y1]), K = (F) => {
      const a1 = F.target.value;
      P || e1(a1), G && l1(null);
    }, Y = (F) => {
      F.key === "Enter" ? (F.preventDefault(), G ? d1 && (y1(d1), C1()) : H()) : F.key === "Escape" ? G && (F.preventDefault(), C1()) : F.key === "ArrowDown" && !G ? (F.preventDefault(), oe()) : F.key === "Tab" && G && m1(!1), S?.(F);
    }, f1 = (F) => {
      H(), O?.(F);
    }, t1 = (F) => {
      let a1 = null;
      switch (F.key) {
        case "ArrowLeft":
          a1 = tt(B, -1), F.preventDefault();
          break;
        case "ArrowRight":
          a1 = tt(B, 1), F.preventDefault();
          break;
        case "ArrowUp":
          a1 = tt(B, -7), F.preventDefault();
          break;
        case "ArrowDown":
          a1 = tt(B, 7), F.preventDefault();
          break;
        case "Home":
          a1 = tt(B, -d2(B)), F.preventDefault();
          break;
        case "End":
          a1 = tt(B, 6 - d2(B)), F.preventDefault();
          break;
        case "PageUp":
          a1 = d0(B, F.shiftKey ? -12 : -1), F.preventDefault();
          break;
        case "PageDown":
          a1 = d0(B, F.shiftKey ? 12 : 1), F.preventDefault();
          break;
        case "Enter":
        case " ":
          F.preventDefault(), we(B);
          break;
        case "Escape":
          F.preventDefault(), C1();
          break;
        case "Tab":
          m1(!1);
          break;
      }
      if (a1) {
        const j1 = Y1(a1);
        c1(j1), setTimeout(() => J1(j1), 0);
      }
    };
    v1(() => {
      if (!G) return;
      const F = (a1) => {
        N.current && !N.current.contains(a1.target) && C1();
      };
      return document.addEventListener("mousedown", F), () => document.removeEventListener("mousedown", F);
    }, [G, C1]), v1(() => {
      if (!G) return;
      const F = (a1) => {
        a1.key === "Escape" && C1();
      };
      return document.addEventListener("keydown", F), () => document.removeEventListener("keydown", F);
    }, [G, C1]);
    const k1 = () => {
      P || e1(""), k?.(""), m?.(""), T.current?.focus();
    }, O1 = G && d1 ? u0(d1, c, y) : P ? l ? u0(
      Yt(l, c) ?? ut(),
      c,
      y
    ) : "" : U, R1 = P ? !!l : U.length > 0, B1 = u || G, re = { year: B.year, month: B.month }, ot = new Date(re.year, re.month - 1, 1).getDay(), J = {
      year: re.year,
      month: re.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, $1 = [];
    for (let F = 0; F < j9; F += 1)
      $1.push(tt(J, F - ot));
    const de = d1 ? Ce(d1) : w1 ? Ce(w1) : null, Oe = Ce(ut()), ue = `${re.year}-${Se(re.month)}`, N1 = g1(
      () => new Intl.DateTimeFormat(y, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      [y]
    ), V1 = new Intl.DateTimeFormat(y, {
      month: "long",
      year: "numeric"
    }).format(new Date(re.year, re.month - 1, 1)), Ae = Array.from(
      { length: 7 },
      (F, a1) => new Intl.DateTimeFormat(y, { weekday: "short" }).format(
        new Date(2021, 0, 3 + a1)
      )
    ), ke = t === "xs" ? S1["dx-datepicker-input--xs"] : t === "sm" ? S1["dx-datepicker-input--sm"] : t === "lg" ? S1["dx-datepicker-input--lg"] : t === "xl" ? S1["dx-datepicker-input--xl"] : S1["dx-datepicker-input--md"], Q1 = /* @__PURE__ */ L(
      "div",
      {
        className: S1["dx-datepicker-calendar"],
        "aria-label": _ ?? "Date picker",
        children: [
          /* @__PURE__ */ L("div", { className: S1["dx-datepicker-header"], children: [
            /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                className: S1["dx-datepicker-nav"],
                "aria-label": "Previous month",
                onClick: () => {
                  const F = Y1(d0(B, -1));
                  c1(F), setTimeout(() => J1(F), 0);
                },
                children: /* @__PURE__ */ r(M1, { name: "chevron-left", size: 16 })
              }
            ),
            /* @__PURE__ */ r("span", { className: S1["dx-datepicker-title"], children: V1 }),
            /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                className: S1["dx-datepicker-nav"],
                "aria-label": "Next month",
                onClick: () => {
                  const F = Y1(d0(B, 1));
                  c1(F), setTimeout(() => J1(F), 0);
                },
                children: /* @__PURE__ */ r(M1, { name: "chevron-right", size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ L(
            "div",
            {
              ref: j,
              role: "grid",
              className: S1["dx-datepicker-grid"],
              onKeyDown: t1,
              children: [
                /* @__PURE__ */ r("div", { role: "row", className: S1["dx-datepicker-week-row"], children: Ae.map((F) => /* @__PURE__ */ r(
                  "div",
                  {
                    role: "columnheader",
                    className: S1["dx-datepicker-weekday"],
                    children: F
                  },
                  F
                )) }),
                Array.from({ length: 6 }, (F, a1) => /* @__PURE__ */ r(
                  "div",
                  {
                    role: "row",
                    className: S1["dx-datepicker-row"],
                    children: $1.slice(a1 * 7, a1 * 7 + 7).map((j1) => {
                      const D1 = Ce(j1), Pe = L1(j1), le = D1.startsWith(ue);
                      return /* @__PURE__ */ r(
                        "button",
                        {
                          type: "button",
                          role: "gridcell",
                          "data-date": D1,
                          tabIndex: D1 === Ce(B) ? 0 : -1,
                          "aria-selected": D1 === de || void 0,
                          "aria-disabled": Pe || void 0,
                          "aria-label": N1.format(
                            new Date(j1.year, j1.month - 1, j1.day)
                          ),
                          className: [
                            S1["dx-datepicker-day"],
                            le ? null : S1["dx-datepicker-day--outside"],
                            D1 === Oe ? S1["dx-datepicker-day--today"] : null,
                            D1 === de ? S1["dx-datepicker-day--selected"] : null,
                            Pe ? S1["dx-datepicker-day--disabled"] : null
                          ].filter(Boolean).join(" "),
                          onClick: () => we(j1),
                          onFocus: () => c1(j1),
                          children: j1.day
                        },
                        D1
                      );
                    })
                  },
                  a1
                ))
              ]
            }
          ),
          a && /* @__PURE__ */ L("div", { className: S1["dx-datepicker-time"], children: [
            P9.map((F) => /* @__PURE__ */ L("label", { className: S1["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ r("span", { className: S1["dx-datepicker-time-label"], children: h0(F) }),
              /* @__PURE__ */ L("div", { className: S1["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ r(
                  "input",
                  {
                    className: S1["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": h0(F),
                    value: Se(
                      (d1 ?? w1 ?? ut())[F]
                    ),
                    onChange: (a1) => ae(F, a1.target.value),
                    onKeyDown: (a1) => {
                      a1.key === "ArrowUp" ? (a1.preventDefault(), ge(F, 1)) : a1.key === "ArrowDown" ? (a1.preventDefault(), ge(F, -1)) : a1.key === "Enter" && (a1.preventDefault(), Z());
                    }
                  }
                ),
                /* @__PURE__ */ L("span", { className: S1["dx-datepicker-time-buttons"], children: [
                  /* @__PURE__ */ r(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Increase ${h0(F).toLowerCase()}`,
                      onClick: () => ge(F, 1),
                      children: /* @__PURE__ */ r(M1, { name: "chevron-up", size: 11 })
                    }
                  ),
                  /* @__PURE__ */ r(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Decrease ${h0(F).toLowerCase()}`,
                      onClick: () => ge(F, -1),
                      children: /* @__PURE__ */ r(M1, { name: "chevron-down", size: 11 })
                    }
                  )
                ] })
              ] })
            ] }, F)),
            /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                className: S1["dx-datepicker-ok"],
                onClick: Z,
                children: "OK"
              }
            )
          ] })
        ]
      }
    );
    return /* @__PURE__ */ L(
      "div",
      {
        ref: N,
        className: [
          S1["dx-datepicker"],
          u ? S1["dx-datepicker-inline"] : null,
          A
        ].filter(Boolean).join(" "),
        children: [
          !u && /* @__PURE__ */ L(b1, { children: [
            /* @__PURE__ */ r(
              "input",
              {
                ref: P1,
                type: "text",
                autoComplete: "off",
                value: O1,
                disabled: f,
                readOnly: v,
                placeholder: M,
                tabIndex: z,
                role: i ? void 0 : "combobox",
                "aria-label": _ ?? "Date",
                "aria-haspopup": i ? void 0 : "dialog",
                "aria-expanded": i ? void 0 : B1,
                "aria-controls": i ? void 0 : D,
                "aria-invalid": n || void 0,
                className: [
                  S1["dx-datepicker-input"],
                  ke,
                  n ? S1["dx-datepicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: K,
                onKeyDown: Y,
                onBlur: f1,
                onClick: () => {
                  i || ne();
                },
                ...$
              }
            ),
            h && !f && R1 && /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                className: [
                  S1["dx-datepicker-clear"],
                  i ? S1["dx-datepicker-clear--inset"] : null
                ].filter(Boolean).join(" "),
                "aria-label": C ?? "Clear",
                onClick: k1,
                children: /* @__PURE__ */ r(M1, { name: "close", size: 14 })
              }
            ),
            i && /* @__PURE__ */ r(
              "button",
              {
                ref: V,
                type: "button",
                className: [S1["dx-datepicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": w ?? "Open calendar",
                "aria-haspopup": "dialog",
                "aria-expanded": G,
                "aria-controls": D,
                disabled: f,
                onClick: ne,
                children: /* @__PURE__ */ r(M1, { name: "calendar", size: 16 })
              }
            )
          ] }),
          B1 && /* @__PURE__ */ r(
            "div",
            {
              id: D,
              role: u ? void 0 : "dialog",
              "aria-label": u ? void 0 : _ ?? "Date picker",
              className: u ? void 0 : S1["dx-datepicker-popup"],
              children: Q1
            }
          )
        ]
      }
    );
  }
), ht = {
  "dx-rating": "_dx-rating_yg52p_1",
  "dx-rating-item": "_dx-rating-item_yg52p_8",
  "dx-rating-item-filled": "_dx-rating-item-filled_yg52p_28",
  "dx-rating-icon-filled": "_dx-rating-icon-filled_yg52p_43",
  "dx-rating-icon-empty": "_dx-rating-icon-empty_yg52p_51",
  "dx-rating-clear": "_dx-rating-clear_yg52p_55",
  "dx-rating-readonly": "_dx-rating-readonly_yg52p_87",
  "dx-rating-disabled": "_dx-rating-disabled_yg52p_96"
}, j_ = ({
  value: e = 0,
  stars: t = 5,
  readOnly: n = !1,
  disabled: l = !1,
  ariaLabel: s = "Rating",
  clearLabel: c = "Clear",
  rateLabel: d = "Rate",
  tabIndex: o = 0,
  className: a,
  onChange: i,
  onValueChange: h
}) => {
  const [u, b] = W(e), y = q(
    (f) => Math.min(t, Math.max(1, f)),
    [t]
  ), k = q(
    (f) => {
      i?.(f), h?.(f);
    },
    [i, h]
  ), m = q(
    (f) => {
      n || l || (k(f), b(f));
    },
    [n, l, k]
  ), g = (f) => {
    if (n || l) return;
    const v = u > 0 ? u : 1;
    switch (f.key) {
      case "ArrowRight":
      case "ArrowUp":
        f.preventDefault(), m(y(v + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        f.preventDefault(), m(y(v - 1));
        break;
      case "Home":
        f.preventDefault(), m(1);
        break;
      case "End":
        f.preventDefault(), m(t);
        break;
    }
  }, p = Array.from({ length: t }, (f, v) => v + 1);
  return /* @__PURE__ */ L(
    "div",
    {
      role: "radiogroup",
      "aria-label": s,
      "aria-readonly": n || void 0,
      className: [
        ht["dx-rating"],
        n ? ht["dx-rating-readonly"] : null,
        l ? ht["dx-rating-disabled"] : null,
        a
      ].filter(Boolean).join(" "),
      onKeyDown: g,
      children: [
        !n && !l && /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: ht["dx-rating-clear"],
            "aria-label": c,
            tabIndex: e === 0 ? o : -1,
            disabled: l,
            onClick: () => m(0),
            children: /* @__PURE__ */ r(M1, { name: "ban", size: 16 })
          }
        ),
        p.map((f) => {
          const v = f <= e, M = f === (e > 0 ? e : u);
          return /* @__PURE__ */ L(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": v,
              "aria-posinset": f,
              "aria-setsize": t,
              "aria-label": `${d} ${f}`,
              tabIndex: M ? o : -1,
              "aria-disabled": l || n || void 0,
              disabled: l || n,
              className: [
                ht["dx-rating-item"],
                v ? ht["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => m(f),
              onFocus: () => b(f),
              children: [
                /* @__PURE__ */ r(
                  "span",
                  {
                    className: ht["dx-rating-icon-filled"],
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ r(M1, { name: "star", size: 20 })
                  }
                ),
                /* @__PURE__ */ r("span", { className: ht["dx-rating-icon-empty"], "aria-hidden": "true", children: /* @__PURE__ */ r(M1, { name: "star-outline", size: 20 }) })
              ]
            },
            f
          );
        })
      ]
    }
  );
}, yt = {
  "dx-slider": "_dx-slider_x6ptv_1",
  "dx-slider-track": "_dx-slider-track_x6ptv_9",
  "dx-slider-range": "_dx-slider-range_x6ptv_17",
  "dx-slider-handle": "_dx-slider-handle_x6ptv_26",
  "dx-slider-vertical": "_dx-slider-vertical_x6ptv_58",
  "dx-slider-disabled": "_dx-slider-disabled_x6ptv_84"
};
function We(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const T_ = ({
  value: e = 0,
  valueMin: t = 0,
  valueMax: n = 100,
  min: l = 0,
  max: s = 100,
  step: c = 1,
  range: d = !1,
  orientation: o = "horizontal",
  disabled: a = !1,
  label: i = "Value",
  minLabel: h = "Min",
  maxLabel: u = "Max",
  tabIndex: b = 0,
  className: y,
  onChange: k,
  onInput: m,
  onValueChange: g,
  onInputChange: p
}) => {
  const f = Q(null), v = Q(
    null
  ), [M, _] = W(null), w = M ?? e, C = g1(
    () => We(w, l, s),
    [w, l, s]
  ), z = g1(
    () => We(d ? t : C, l, s),
    [d, t, C, l, s]
  ), A = g1(
    () => We(d ? Math.max(n, z) : C, l, s),
    [d, n, z, C, l, s]
  ), O = q(
    (B) => {
      const c1 = s - l;
      return c1 <= 0 ? 0 : (We(B, l, s) - l) / c1 * 100;
    },
    [l, s]
  ), S = q(
    (B, c1) => {
      const r1 = f.current;
      if (!r1) return l;
      const u1 = r1.getBoundingClientRect();
      let o1;
      o === "vertical" ? o1 = 1 - (c1 - u1.top) / u1.height : o1 = (B - u1.left) / u1.width;
      const w1 = l + We(o1, 0, 1) * (s - l);
      return c > 0 ? We(Math.round(w1 / c) * c, l, s) : We(w1, l, s);
    },
    [l, s, c, o]
  ), $ = q(
    (B) => {
      typeof B == "number" && _(B), k?.(B), g?.(B);
    },
    [k, g]
  ), x = q(
    (B) => {
      typeof B == "number" && _(B), m?.(B), p?.(B);
    },
    [m, p]
  ), N = q(
    (B, c1, r1) => {
      const u1 = S(c1, r1);
      let o1;
      d ? B === "min" ? o1 = { min: Math.min(u1, A), max: A } : o1 = { min: z, max: Math.max(u1, z) } : o1 = u1, x(o1), v.current === null && $(o1);
    },
    [d, S, z, A, x, $]
  ), T = q(
    (B, c1) => {
      const r1 = (c > 0 ? c : 1) * c1;
      let u1;
      d ? B === "min" ? u1 = {
        min: We(z + r1, l, A),
        max: A
      } : u1 = {
        min: z,
        max: We(A + r1, z, s)
      } : u1 = We(C + r1, l, s), $(u1);
    },
    [d, c, l, s, z, A, C, $]
  ), V = (B, c1) => {
    if (!a)
      switch (c1.key) {
        case "ArrowLeft":
        case "ArrowDown":
          c1.preventDefault(), T(B, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          c1.preventDefault(), T(B, 1);
          break;
        case "Home":
          c1.preventDefault(), $(d ? B === "min" ? { min: l, max: A } : { min: z, max: z } : l);
          break;
        case "End":
          c1.preventDefault(), $(d ? B === "min" ? { min: A, max: A } : { min: z, max: s } : s);
          break;
      }
  }, j = (B, c1) => {
    a || (c1.preventDefault(), c1.currentTarget.focus(), typeof c1.currentTarget.setPointerCapture == "function" && c1.currentTarget.setPointerCapture(c1.pointerId), v.current = { key: B, pointerId: c1.pointerId }, N(B, c1.clientX, c1.clientY));
  }, D = (B) => {
    !v.current || v.current.pointerId !== B.pointerId || (B.preventDefault(), N(v.current.key, B.clientX, B.clientY));
  }, P = (B) => {
    !v.current || v.current.pointerId !== B.pointerId || (v.current = null, B.preventDefault(), $(d ? { min: z, max: A } : C));
  }, [U, e1] = W(null), G = O(z), m1 = O(A), d1 = d ? G : 0, l1 = m1;
  return /* @__PURE__ */ r(
    "div",
    {
      className: [
        yt["dx-slider"],
        o === "vertical" ? yt["dx-slider-vertical"] : null,
        a ? yt["dx-slider-disabled"] : null,
        y
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ L("div", { ref: f, className: yt["dx-slider-track"], children: [
        /* @__PURE__ */ r(
          "div",
          {
            className: yt["dx-slider-range"],
            style: o === "vertical" ? { bottom: `${d1}%`, height: `${l1 - d1}%` } : { left: `${d1}%`, width: `${l1 - d1}%` }
          }
        ),
        /* @__PURE__ */ r(
          "div",
          {
            role: "slider",
            "aria-valuemin": l,
            "aria-valuemax": s,
            "aria-valuenow": Math.round(z),
            "aria-orientation": o,
            "aria-label": d ? h : i,
            "aria-disabled": a || void 0,
            tabIndex: a || d && U === "max" ? -1 : b,
            className: yt["dx-slider-handle"],
            style: o === "vertical" ? { bottom: `calc(${G}% - 8px)` } : { left: `calc(${G}% - 8px)` },
            onKeyDown: (B) => V("min", B),
            onPointerDown: (B) => j("min", B),
            onPointerMove: D,
            onPointerUp: P,
            onFocus: () => e1("min")
          }
        ),
        d && /* @__PURE__ */ r(
          "div",
          {
            role: "slider",
            "aria-valuemin": l,
            "aria-valuemax": s,
            "aria-valuenow": Math.round(A),
            "aria-orientation": o,
            "aria-label": u,
            "aria-disabled": a || void 0,
            tabIndex: a || U === "min" ? -1 : b,
            className: yt["dx-slider-handle"],
            style: o === "vertical" ? { bottom: `calc(${m1}% - 8px)` } : { left: `calc(${m1}% - 8px)` },
            onKeyDown: (B) => V("max", B),
            onPointerDown: (B) => j("max", B),
            onPointerMove: D,
            onPointerUp: P,
            onFocus: () => e1("max")
          }
        )
      ] })
    }
  );
}, F1 = {
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
}, R9 = "-10675199.02:48:05.4775808", B9 = "10675199.02:48:05.4775808", rt = 86400, lt = 3600, qe = 60, z0 = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, h2 = {
  days: rt,
  hours: lt,
  minutes: qe,
  seconds: 1
}, F9 = {
  day: rt,
  hour: lt,
  minute: qe,
  second: 1
};
function jt(e) {
  return String(e).padStart(2, "0");
}
function r0(e) {
  const t = e.trim();
  if (!t) return null;
  let n = 1, l = t;
  l.startsWith("-") ? (n = -1, l = l.slice(1)) : l.startsWith("+") && (l = l.slice(1));
  const s = /^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(
    l
  );
  if (s) {
    if (!s.slice(1).some((u) => u != null)) return null;
    const o = s[1] != null ? Number(s[1]) : 0, a = s[2] != null ? Number(s[2]) : 0, i = s[3] != null ? Number(s[3]) : 0, h = s[4] != null ? Number(s[4]) : 0;
    return n * (o * rt + a * lt + i * qe + h);
  }
  const c = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(
    l
  );
  if (c) {
    const d = c[1] != null ? Number(c[1]) : 0, o = Number(c[2]), a = Number(c[3]), i = c[4] != null ? Number(c[4]) : 0, h = c[5] != null ? +`0.${c[5]}` : 0;
    return o > 23 || a > 59 || i > 59 ? null : n * (d * rt + o * lt + a * qe + i + h);
  }
  return null;
}
function K9(e) {
  return e.days * rt + e.hours * lt + e.minutes * qe + e.seconds;
}
function f2(e) {
  let t = Math.abs(e);
  const n = Math.floor(t / rt);
  t %= rt;
  const l = Math.floor(t / lt);
  t %= lt;
  const s = Math.floor(t / qe), c = Math.round(t % qe * 1e9) / 1e9;
  return { days: n, hours: l, minutes: s, seconds: c };
}
function H0(e, t) {
  const n = e < 0;
  let l = Math.abs(e);
  t === "minute" ? l = Math.round(l / qe) * qe : t === "hour" ? l = Math.round(l / lt) * lt : t === "day" && (l = Math.round(l / rt) * rt);
  let s = Math.round(l % qe);
  const c = s === 60 ? 1 : 0;
  s = s === 60 ? 0 : s;
  const d = Math.floor(l / qe) + c, o = d % 60, a = Math.floor(d / 60), i = a % 24, h = Math.floor(a / 24), u = n ? "-" : "", b = h > 0 ? `${h}.` : "";
  switch (t) {
    case "day":
      return `${u}${h} day${h === 1 ? "" : "s"}`;
    case "hour":
      return `${u}${b}${jt(i)}`;
    case "minute":
      return `${u}${b}${jt(i)}:${jt(o)}`;
    default:
      return `${u}${b}${jt(i)}:${jt(o)}:${jt(s)}`;
  }
}
function p2(e, t = "second") {
  const n = r0(e);
  return n === null ? "" : H0(n, t);
}
function L0(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const V_ = q1(
  function({
    size: t = "md",
    invalid: n = !1,
    value: l,
    defaultValue: s,
    min: c = R9,
    max: d = B9,
    step: o = "1",
    precision: a = "second",
    showDays: i = !0,
    showHours: h = !0,
    showMinutes: u = !0,
    showSeconds: b = !0,
    allowClear: y = !1,
    inline: k = !1,
    onChange: m,
    onValueChange: g,
    onOpen: p,
    onClose: f,
    disabled: v,
    placeholder: M,
    ariaLabel: _,
    triggerLabel: w,
    clearLabel: C,
    tabIndex: z,
    className: A,
    onBlur: O,
    onKeyDown: S,
    ...$
  }, x) {
    const N = Q(null), T = Q(null), V = Q(null), j = E1(), D = l !== void 0, [P, U] = W(
      () => s != null ? p2(s, a) : ""
    ), [e1, G] = W(!1), [m1, d1] = W(null), [l1, B] = W(null), c1 = g1(
      () => r0(c) ?? -Number.MAX_SAFE_INTEGER,
      [c]
    ), r1 = g1(
      () => r0(d) ?? Number.MAX_SAFE_INTEGER,
      [d]
    ), u1 = g1(() => {
      const J = Number.parseFloat(o);
      return Number.isNaN(J) || J <= 0 ? 1 : J;
    }, [o]), o1 = g1(() => {
      const J = D ? l ?? "" : P;
      return J ? r0(J) : null;
    }, [l, P, D]), w1 = q(
      (J) => {
        const $1 = J === null ? "" : H0(J, a);
        D || U($1), m?.($1), g?.($1);
      },
      [D, a, m, g]
    ), L1 = q(
      (J) => {
        J && m1 !== null && w1(m1), G(!1), d1(null), B(null), f?.(), k || V.current?.focus();
      },
      [k, m1, w1, f]
    ), Y1 = q(() => {
      v || (d1(o1 ?? 0), G(!0), p?.());
    }, [v, o1, p]), y1 = q(() => {
      e1 ? L1(!1) : Y1();
    }, [e1, L1, Y1]), P1 = q(
      (J, $1) => {
        d1((de) => {
          const ue = (de ?? o1 ?? 0) + $1 * u1 * h2[J];
          return L0(ue, c1, r1);
        });
      },
      [o1, u1, c1, r1]
    ), C1 = q(
      (J) => {
        const $1 = l1?.[J];
        if ($1 == null) return;
        const de = Number.parseFloat($1), Oe = Number.isNaN(de) ? 0 : de;
        d1((ue) => {
          const N1 = ue ?? o1 ?? 0, V1 = f2(N1);
          V1[J] = Oe;
          const ke = (N1 < 0 ? -1 : 1) * K9(V1);
          return L0(ke, c1, r1);
        }), B(null);
      },
      [l1, o1, c1, r1]
    ), oe = (J, $1) => {
      B((de) => ({ ...de ?? {}, [J]: $1 }));
    }, ne = (J, $1) => {
      switch ($1.key) {
        case "ArrowUp":
          $1.preventDefault(), C1(J), P1(J, 1);
          break;
        case "ArrowDown":
          $1.preventDefault(), C1(J), P1(J, -1);
          break;
        case "Home":
          $1.preventDefault(), C1(J), d1(c1);
          break;
        case "End":
          $1.preventDefault(), C1(J), d1(r1);
          break;
        case "Enter":
          $1.preventDefault(), C1(J), L1(!0);
          break;
      }
    }, J1 = q(() => {
      if (e1) return;
      const J = r0(P);
      w1(J !== null ? L0(J, c1, r1) : null);
    }, [e1, P, c1, r1, w1]), we = (J) => {
      D || U(J.target.value);
    }, ge = (J) => {
      J.key === "Enter" ? (J.preventDefault(), e1 ? L1(!0) : J1()) : J.key === "Escape" && e1 ? (J.preventDefault(), L1(!1)) : J.key === "ArrowDown" && !e1 ? (J.preventDefault(), Y1()) : J.key === "Tab" && e1 && G(!1), S?.(J);
    }, ae = (J) => {
      J1(), O?.(J);
    }, Z = () => {
      D || U(""), m?.(""), g?.(""), T.current?.focus();
    };
    v1(() => {
      if (!e1) return;
      const J = ($1) => {
        N.current && !N.current.contains($1.target) && L1(!1);
      };
      return document.addEventListener("mousedown", J), () => document.removeEventListener("mousedown", J);
    }, [e1, L1]), v1(() => {
      if (!e1) return;
      const J = ($1) => {
        $1.key === "Escape" && L1(!1);
      };
      return document.addEventListener("keydown", J), () => document.removeEventListener("keydown", J);
    }, [e1, L1]), v1(() => {
      if (k && m1 !== null) {
        const J = o1;
        (J === null || Math.abs(m1 - J) > 1e-9) && w1(m1);
      }
    }, [k, m1, o1, w1]);
    const H = q(
      (J) => {
        T.current = J, typeof x == "function" ? x(J) : x && (x.current = J);
      },
      [x]
    ), K = D ? l ? p2(l, a) : "" : P, Y = D ? !!l : P.length > 0, f1 = k || e1, t1 = m1 ?? o1 ?? 0, k1 = f2(t1), O1 = F9[a], B1 = ["days", "hours", "minutes", "seconds"].filter(
      (J) => h2[J] >= O1 && (J === "days" ? i : J === "hours" ? h : J === "minutes" ? u : b)
    ), re = t === "xs" ? F1["dx-timespanpicker-input--xs"] : t === "sm" ? F1["dx-timespanpicker-input--sm"] : t === "lg" ? F1["dx-timespanpicker-input--lg"] : t === "xl" ? F1["dx-timespanpicker-input--xl"] : F1["dx-timespanpicker-input--md"], ot = /* @__PURE__ */ L("div", { className: F1["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ r("div", { className: F1["dx-timespanpicker-preview"], "aria-live": "polite", children: H0(t1, a) }),
      /* @__PURE__ */ r("div", { className: F1["dx-timespanpicker-units"], children: B1.map((J) => /* @__PURE__ */ L("label", { className: F1["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ r("span", { className: F1["dx-timespanpicker-unit-label"], children: z0[J] }),
        /* @__PURE__ */ L("span", { className: F1["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ r(
            "input",
            {
              className: F1["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: l1?.[J] ?? String(k1[J]),
              onChange: ($1) => oe(J, $1.target.value),
              onKeyDown: ($1) => ne(J, $1),
              onBlur: () => C1(J)
            }
          ),
          /* @__PURE__ */ L("span", { className: F1["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${z0[J].toLowerCase()}`,
                onClick: () => {
                  C1(J), P1(J, 1);
                },
                children: /* @__PURE__ */ r(M1, { name: "chevron-up", size: 11 })
              }
            ),
            /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${z0[J].toLowerCase()}`,
                onClick: () => {
                  C1(J), P1(J, -1);
                },
                children: /* @__PURE__ */ r(M1, { name: "chevron-down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, J)) }),
      /* @__PURE__ */ r("div", { className: F1["dx-timespanpicker-footer"], children: /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          className: F1["dx-timespanpicker-ok"],
          onClick: () => L1(!0),
          children: "OK"
        }
      ) })
    ] });
    return /* @__PURE__ */ L(
      "div",
      {
        ref: N,
        className: [
          F1["dx-timespanpicker"],
          k ? F1["dx-timespanpicker-inline"] : null,
          A
        ].filter(Boolean).join(" "),
        children: [
          !k && /* @__PURE__ */ L(b1, { children: [
            /* @__PURE__ */ r(
              "input",
              {
                ref: H,
                type: "text",
                autoComplete: "off",
                value: K,
                disabled: v,
                placeholder: M,
                tabIndex: z,
                role: "combobox",
                "aria-label": _ ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": e1,
                "aria-controls": j,
                "aria-invalid": n || void 0,
                className: [
                  F1["dx-timespanpicker-input"],
                  re,
                  n ? F1["dx-timespanpicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: we,
                onKeyDown: ge,
                onBlur: ae,
                ...$
              }
            ),
            y && !v && Y && /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                className: F1["dx-timespanpicker-clear"],
                "aria-label": C ?? "Clear",
                onClick: Z,
                children: /* @__PURE__ */ r(M1, { name: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ r(
              "button",
              {
                ref: V,
                type: "button",
                className: [F1["dx-timespanpicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": w ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": e1,
                "aria-controls": j,
                disabled: v,
                onClick: y1,
                children: /* @__PURE__ */ r(M1, { name: "clock", size: 16 })
              }
            )
          ] }),
          f1 && /* @__PURE__ */ r(
            "div",
            {
              id: j,
              role: k ? void 0 : "dialog",
              "aria-label": _ ?? "Time span picker",
              className: k ? void 0 : F1["dx-timespanpicker-popup"],
              children: ot
            }
          )
        ]
      }
    );
  }
), W9 = "_wrapper_1rhh5_1", Z9 = "_cells_1rhh5_8", U9 = "_cell_1rhh5_8", X9 = "_invalid_1rhh5_63", G9 = "_live_1rhh5_73", bt = {
  wrapper: W9,
  cells: Z9,
  cell: U9,
  "cell-sm": "_cell-sm_1rhh5_45",
  "cell-md": "_cell-md_1rhh5_51",
  "cell-lg": "_cell-lg_1rhh5_57",
  invalid: X9,
  live: G9
};
function m2(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const D_ = q1(
  function({
    length: t = 6,
    value: n,
    defaultValue: l,
    onChange: s,
    invalid: c = !1,
    size: d = "md",
    autoFocus: o = !1,
    disabled: a = !1,
    label: i = "Security code",
    liveAnnounce: h = !0,
    className: u,
    "aria-label": b
  }, y) {
    const k = E1(), m = n !== void 0, [g, p] = W(m2(l).join("")), f = m ? m2(n).join("") : g, v = Array.from({ length: t }, ($, x) => f[x] ?? ""), M = Q([]), [_, w] = W(""), C = ($) => {
      m || p($), s?.($);
    }, z = ($) => {
      const x = M.current[$];
      x && !x.disabled && (x.focus(), x.select());
    }, A = ($, x) => {
      const N = x.replace(/\D/g, "").slice(-1), T = f.split("");
      if (N) {
        T[$] = N;
        const V = T.join("").slice(0, t);
        C(V), V.length < t ? z($ + 1) : h && w("Code complete");
      }
    }, O = ($, x) => {
      if (x.key === "Backspace") {
        if (x.preventDefault(), f[$]) {
          const N = f.split("");
          N[$] = "", C(N.join(""));
        } else if ($ > 0) {
          const N = f.split("");
          N[$ - 1] = "", C(N.join("")), z($ - 1);
        }
      } else x.key === "ArrowLeft" && $ > 0 ? (x.preventDefault(), z($ - 1)) : x.key === "ArrowRight" && $ < t - 1 ? (x.preventDefault(), z($ + 1)) : x.key === "Home" ? (x.preventDefault(), z(0)) : x.key === "End" && (x.preventDefault(), z(t - 1));
    }, S = ($, x) => {
      x.preventDefault();
      const N = x.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!N) return;
      const T = f.split("");
      let V = 0;
      for (let D = 0; D < N.length && $ + D < t; D++)
        T[$ + D] = N[D] ?? "", V++;
      const j = T.join("");
      C(j), j.length >= t ? h && w("Code complete") : z($ + V);
    };
    return /* @__PURE__ */ L(
      "div",
      {
        className: [bt.wrapper, u].filter(Boolean).join(" "),
        role: "group",
        "aria-label": b ?? i,
        "data-invalid": c || void 0,
        children: [
          /* @__PURE__ */ r("div", { className: [bt.cells, bt[d]].join(" "), children: v.map(($, x) => /* @__PURE__ */ r(
            "input",
            {
              ref: (N) => {
                M.current[x] = N, x === 0 && y && (typeof y == "function" ? y(N) : y.current = N);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: $,
              disabled: a,
              "aria-label": `Digit ${x + 1} of ${t}`,
              "aria-invalid": c && $ !== "" ? !0 : void 0,
              autoFocus: o && x === 0,
              className: [
                bt.cell,
                bt[`cell-${d}`],
                c ? bt.invalid : null
              ].filter(Boolean).join(" "),
              onChange: (N) => A(x, N.target.value),
              onKeyDown: (N) => O(x, N),
              onPaste: (N) => S(x, N),
              onFocus: (N) => N.target.select(),
              onBlur: () => {
                h && w("");
              }
            },
            x
          )) }),
          h && /* @__PURE__ */ r(
            "span",
            {
              id: `${k}-live`,
              role: "status",
              "aria-live": "polite",
              className: bt.live,
              children: _
            }
          )
        ]
      }
    );
  }
), Y9 = "_wrapper_1p09k_1", J9 = "_header_1p09k_7", Q9 = "_label_1p09k_15", eu = "_clear_1p09k_22", tu = "_canvas_1p09k_53", nu = "_disabled_1p09k_69", Tt = {
  wrapper: Y9,
  header: J9,
  label: Q9,
  clear: eu,
  canvas: tu,
  disabled: nu
}, E_ = q1(
  function({
    value: t,
    defaultValue: n,
    onChange: l,
    penColor: s = "#1c1c1c",
    penWidth: c = 2.5,
    clearLabel: d = "Clear",
    ariaLabel: o = "Signature",
    width: a,
    height: i = 140,
    disabled: h = !1,
    className: u
  }, b) {
    const y = Q(null), k = Q(!1), m = Q(!1), g = Q({ x: 0, y: 0 });
    v1(() => {
      const C = y.current;
      if (!C) return;
      const z = window.devicePixelRatio || 1, A = Math.round((a ?? C.clientWidth) * z), O = Math.round(i * z);
      (C.width !== A || C.height !== O) && (C.width = A, C.height = O);
      const S = C.getContext("2d");
      if (!S) return;
      S.setTransform(z, 0, 0, z, 0, 0), S.lineWidth = c, S.strokeStyle = s, S.lineCap = "round", S.lineJoin = "round";
      const $ = t ?? n;
      if ($) {
        const x = new Image();
        x.onload = () => {
          S.drawImage(x, 0, 0, C.clientWidth, i);
        }, x.src = $;
      }
    }, [t, n, s, c, a, i]);
    const p = () => {
      const C = y.current;
      if (!C) return;
      const z = C.toDataURL("image/png");
      l?.(z);
    }, f = () => {
      const C = y.current;
      if (!C) return;
      const z = C.getContext("2d");
      z && z.clearRect(0, 0, C.width, C.height), l?.("");
    };
    D0(b, () => ({
      clear: f,
      toDataURL: (C = "image/png", z) => y.current?.toDataURL(C, z) ?? ""
    }));
    const v = (C) => {
      const z = C.currentTarget.getBoundingClientRect();
      return { x: C.clientX - z.left, y: C.clientY - z.top };
    }, M = (C) => {
      h || (C.preventDefault(), typeof C.currentTarget.setPointerCapture == "function" && C.currentTarget.setPointerCapture(C.pointerId), k.current = !0, m.current = !1, g.current = v(C));
    }, _ = (C) => {
      if (!k.current) return;
      C.preventDefault();
      const z = C.currentTarget.getContext("2d");
      if (!z) return;
      const A = v(C);
      z.beginPath(), z.moveTo(g.current.x, g.current.y), z.lineTo(A.x, A.y), z.stroke(), g.current = A, m.current = !0;
    }, w = (C) => {
      k.current && (C.preventDefault(), k.current = !1, m.current && p());
    };
    return /* @__PURE__ */ L(
      "div",
      {
        "aria-disabled": h || void 0,
        className: [
          Tt.wrapper,
          u,
          h ? Tt.disabled : null
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ L("div", { className: Tt.header, children: [
            /* @__PURE__ */ r("span", { className: Tt.label, children: o }),
            /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                className: Tt.clear,
                onClick: f,
                disabled: h,
                children: d
              }
            )
          ] }),
          /* @__PURE__ */ r(
            "canvas",
            {
              ref: y,
              role: "img",
              "aria-label": o,
              "aria-disabled": h || void 0,
              style: {
                width: a ? `${a}px` : void 0,
                height: `${i}px`
              },
              className: Tt.canvas,
              onPointerDown: M,
              onPointerMove: _,
              onPointerUp: w,
              onPointerCancel: w
            }
          )
        ]
      }
    );
  }
), ru = "_wrapper_cdx3b_1", lu = "_trigger_cdx3b_7", ou = "_list_cdx3b_35", au = "_row_cdx3b_44", su = "_name_cdx3b_59", cu = "_size_cdx3b_68", iu = "_progress_cdx3b_74", du = "_fill_cdx3b_82", uu = "_status_cdx3b_99", hu = "_remove_cdx3b_106", Ze = {
  wrapper: ru,
  trigger: lu,
  list: ou,
  row: au,
  name: su,
  size: cu,
  progress: iu,
  fill: du,
  status: uu,
  remove: hu
};
function _2(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const q_ = q1(function({
  url: t,
  multiple: n = !1,
  parameterName: l = "files",
  auto: s = !0,
  headers: c,
  accept: d,
  maxFileCount: o = Number.POSITIVE_INFINITY,
  maxFileSize: a,
  chooseText: i = "Upload",
  children: h,
  onProgress: u,
  onComplete: b,
  onError: y
}, k) {
  const m = Q(null), [g, p] = W([]), f = Q(/* @__PURE__ */ new Map()), v = (z, A) => {
    p(
      (O) => O.map((S) => S.file.name === z ? { ...S, ...A } : S)
    );
  }, M = (z) => {
    if (!t) return;
    const A = new XMLHttpRequest();
    f.current.set(z.file.name, A);
    const O = new FormData();
    if (O.append(l, z.file), A.upload.addEventListener("progress", (S) => {
      if (!S.lengthComputable) return;
      const $ = Math.round(S.loaded / S.total * 100);
      v(z.file.name, { state: "uploading", progress: $ }), u?.(z.file.name, $);
    }), A.addEventListener("load", () => {
      A.status >= 200 && A.status < 300 ? (v(z.file.name, { state: "complete", progress: 100 }), b?.(z.file.name)) : (v(z.file.name, {
        state: "error",
        message: `HTTP ${A.status}`
      }), y?.(z.file.name, `HTTP ${A.status}`));
    }), A.addEventListener("error", () => {
      v(z.file.name, { state: "error", message: "Network error" }), y?.(z.file.name, "Network error");
    }), c)
      for (const [S, $] of Object.entries(c))
        A.setRequestHeader(S, $);
    A.open("POST", t), A.send(O), v(z.file.name, { state: "uploading", progress: 0 });
  }, _ = (z) => {
    if (!z) return;
    const A = [...z], O = [];
    let S = Math.max(0, o - g.length);
    for (const x of A) {
      if (a != null && x.size > a) {
        y?.(
          x.name,
          `File too large (maximum ${_2(a)})`
        );
        continue;
      }
      if (S <= 0) {
        y?.(x.name, `Too many files (maximum ${o})`);
        continue;
      }
      S -= 1, O.push(x);
    }
    const $ = O.map((x) => ({
      file: x,
      state: "pending",
      progress: 0
    }));
    p((x) => [...x, ...$]), m.current && (m.current.value = ""), s && $.forEach(M);
  }, w = (z) => {
    f.current.get(z)?.abort(), f.current.delete(z), p((O) => O.filter((S) => S.file.name !== z));
  }, C = h ?? /* @__PURE__ */ L(
    "button",
    {
      type: "button",
      className: Ze.trigger,
      onClick: () => m.current?.click(),
      children: [
        /* @__PURE__ */ r(M1, { name: "upload", size: 14 }),
        i
      ]
    }
  );
  return D0(k, () => ({
    open: () => m.current?.click(),
    upload: () => g.forEach((z) => z.state === "pending" ? M(z) : null)
  })), /* @__PURE__ */ L("div", { className: Ze.wrapper, children: [
    C,
    /* @__PURE__ */ r(
      "input",
      {
        ref: m,
        type: "file",
        hidden: !0,
        multiple: n,
        accept: d,
        "data-testid": "upload-input",
        onChange: (z) => _(z.target.files)
      }
    ),
    !h && g.length > 0 && /* @__PURE__ */ r("ul", { className: Ze.list, children: g.map(({ file: z, state: A, progress: O, message: S }) => /* @__PURE__ */ L(
      "li",
      {
        className: Ze.row,
        "data-state": A,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ r("span", { className: Ze.name, children: z.name }),
          /* @__PURE__ */ r("span", { className: Ze.size, children: _2(z.size) }),
          /* @__PURE__ */ r(
            "span",
            {
              className: Ze.progress,
              role: "progressbar",
              "aria-label": `${z.name} upload progress`,
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": O,
              children: /* @__PURE__ */ r(
                "span",
                {
                  className: Ze.fill,
                  style: { width: `${O}%` }
                }
              )
            }
          ),
          /* @__PURE__ */ r("span", { className: Ze.status, role: "status", children: A === "uploading" ? "Uploading" : A === "complete" ? "Complete" : A === "error" ? S ?? "Failed" : "Pending" }),
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: Ze.remove,
              "aria-label": `Remove ${z.name}`,
              onClick: () => w(z.name),
              children: /* @__PURE__ */ r(M1, { name: "close", size: 14 })
            }
          )
        ]
      },
      z.name
    )) })
  ] });
}), fu = "_zone_e481w_1", pu = "_dragging_e481w_23", mu = "_caption_e481w_28", _u = "_browse_e481w_40", vu = "_disabled_e481w_67", Jt = {
  zone: fu,
  dragging: pu,
  caption: mu,
  browse: _u,
  disabled: vu
};
function gu(e, t) {
  return t ? t.split(",").some((n) => {
    if (n = n.trim(), !n) return !1;
    if (n.startsWith("."))
      return e.name.toLowerCase().endsWith(n.toLowerCase());
    if (n.endsWith("/*")) {
      const l = n.slice(0, -1);
      return e.type.startsWith(l);
    }
    return e.type === n;
  }) : !0;
}
const I_ = q1(
  function({
    accept: t,
    multiple: n = !1,
    onDrop: l,
    label: s = "Drop files here or browse",
    dragLabel: c = "Drop to attach",
    browseText: d = "Browse",
    disabled: o = !1,
    className: a
  }, i) {
    const h = Q(null), [u, b] = W(!1), y = (f) => {
      if (!f || f.length === 0) return;
      const v = [...f].filter((M) => gu(M, t ?? ""));
      v.length !== 0 && l?.(v);
    }, k = (f) => {
      o || (f.preventDefault(), b(!0));
    }, m = (f) => {
      o || (f.preventDefault(), f.dataTransfer.dropEffect = "copy", b(!0));
    }, g = (f) => {
      o || f.currentTarget.contains(f.relatedTarget) || b(!1);
    }, p = (f) => {
      o || (f.preventDefault(), b(!1), y(f.dataTransfer.files));
    };
    return D0(i, () => ({
      open: () => h.current?.click()
    })), /* @__PURE__ */ L(
      "div",
      {
        role: "region",
        "aria-label": s,
        "aria-disabled": o || void 0,
        className: [
          Jt.zone,
          u ? Jt.dragging : null,
          o ? Jt.disabled : null,
          a
        ].filter(Boolean).join(" "),
        onDragEnter: k,
        onDragOver: m,
        onDragLeave: g,
        onDrop: p,
        children: [
          /* @__PURE__ */ r("p", { className: Jt.caption, children: u ? c : s }),
          !o && /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: Jt.browse,
              onClick: () => h.current?.click(),
              children: d
            }
          ),
          /* @__PURE__ */ r(
            "input",
            {
              ref: h,
              type: "file",
              hidden: !0,
              multiple: n,
              accept: t,
              "data-testid": "dropzone-input",
              onChange: (f) => {
                y(f.target.files), f.target.value = "";
              }
            }
          )
        ]
      }
    );
  }
), ku = "_root_mq6fh_1", xu = "_menubar_mq6fh_5", yu = "_horizontal_mq6fh_15", bu = "_vertical_mq6fh_20", Mu = "_itemWrapper_mq6fh_25", Cu = "_item_mq6fh_25", wu = "_disabled_mq6fh_61", zu = "_icon_mq6fh_68", Lu = "_text_mq6fh_75", $u = "_caret_mq6fh_79", Nu = "_hasChildren_mq6fh_85", Su = "_submenu_mq6fh_94", Ou = "_submenuItem_mq6fh_118", Au = "_flyout_mq6fh_155", Hu = "_hamburger_mq6fh_175", ju = "_responsive_mq6fh_198", Tu = "_mobileOpen_mq6fh_207", Z1 = {
  root: ku,
  menubar: xu,
  horizontal: yu,
  vertical: bu,
  itemWrapper: Mu,
  item: Cu,
  disabled: wu,
  icon: zu,
  text: Lu,
  caret: $u,
  hasChildren: Nu,
  submenu: Su,
  submenuItem: Ou,
  flyout: Au,
  hamburger: Hu,
  responsive: ju,
  mobileOpen: Tu
}, g0 = qt(null);
function Vu(e, t) {
  if (!e || typeof window > "u") return !1;
  const n = window.location.hash.replace(/^#\/?/, ""), l = e.replace(/^#?\/?/, "");
  return t === "prefix" ? l === "" ? !1 : n === l || n.startsWith(`${l}/`) : n === l;
}
function Du(e, t, n, l, s) {
  const [c, d] = W(n), o = e ? t ?? !1 : c, a = q(
    (i) => {
      e || d(i), l?.(i);
    },
    [e, l]
  );
  return v1(() => {
    s > 0 && a(!1);
  }, [s]), [o, a];
}
function Eu({
  icon: e,
  iconColor: t,
  image: n,
  imageAlt: l
}) {
  return n ? /* @__PURE__ */ r("span", { className: Z1.icon, "aria-hidden": "true", children: /* @__PURE__ */ r("img", { src: n, alt: l ?? "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ r(
    "span",
    {
      className: Z1.icon,
      "aria-hidden": "true",
      style: t ? { color: t } : void 0,
      children: /* @__PURE__ */ r(M1, { name: e, size: 16 })
    }
  ) : null;
}
function T2(e) {
  return ve(e) && e.type === V2;
}
function q0({
  itemKey: e,
  props: t
}) {
  const n = ft(g0);
  if (!n) throw new Error("MenuItem must be used inside <Menu>");
  const { text: l, value: s, path: c, disabled: d, template: o } = t, a = g1(
    () => o0.toArray(t.children).filter(ve),
    [t.children]
  ), i = a.length > 0, h = !!d, u = t.open !== void 0, [b, y] = Du(
    u,
    t.open,
    t.defaultOpen ?? !1,
    t.onOpenChange,
    n.closeSignal
  ), k = n.level === 0, m = Q(0), p = (k && !u ? n.openKey === e : null) ?? b, f = q(
    (V) => {
      k && !u ? n.setOpenKey(V ? e : null) : (y(V), k && n.setOpenKey(null));
    },
    [k, u, n, e, y]
  ), [, v] = W(0);
  v1(() => {
    if (!c) return;
    const V = () => v((j) => j + 1);
    return window.addEventListener("hashchange", V), () => window.removeEventListener("hashchange", V);
  }, [c]);
  const M = c && !i ? Vu(c, t.match) : !1, _ = q(
    (V) => {
      if (h) {
        V.preventDefault();
        return;
      }
      const j = { text: l, value: s, path: c };
      [n.emit(j), t.onClick?.(j)].includes(!1) && V.preventDefault(), n.closeAll();
    },
    [h, l, s, c, n, t]
  ), w = q(() => {
    if (!h) {
      if (p && (Date.now() - m.current < 600 || !n.clickToOpen)) {
        m.current = 0;
        return;
      }
      f(!p);
    }
  }, [h, p, f, n.clickToOpen]), C = q(() => {
    !i || h || n.clickToOpen || (m.current = Date.now(), f(!0));
  }, [i, h, n.clickToOpen, f]), z = q(() => {
    n.clickToOpen || f(!1);
  }, [n.clickToOpen, f]), A = `${n.baseId}-submenu-${e}`, [O, S] = W(null);
  v1(() => {
    n.closeSignal > 0 && S(null);
  }, [n.closeSignal]);
  const $ = g1(
    () => ({
      baseId: n.baseId,
      flyout: n.flyout,
      clickToOpen: n.clickToOpen,
      level: n.level + 1,
      closeSignal: n.closeSignal,
      emit: n.emit,
      closeAll: n.closeAll,
      openKey: O,
      setOpenKey: S
    }),
    [n, O]
  ), x = i ? /* @__PURE__ */ r("span", { className: Z1.caret, "aria-hidden": "true", children: /* @__PURE__ */ r(
    M1,
    {
      name: n.flyout && !k ? "chevron-right" : "chevron-down",
      size: 10
    }
  ) }) : null, N = o ?? /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ r(
      Eu,
      {
        icon: t.icon,
        iconColor: t.iconColor,
        image: t.image,
        imageAlt: t.imageAlt
      }
    ),
    /* @__PURE__ */ r("span", { className: Z1.text, children: l }),
    x
  ] });
  if (i) {
    let V = function(j) {
      const D = Array.from(j.currentTarget.children).map((e1) => e1.querySelector('[role="menuitem"]')).filter(
        (e1) => e1 != null && e1.getAttribute("aria-disabled") !== "true" && !e1.hasAttribute("disabled")
      ), P = document.activeElement, U = P ? D.indexOf(P) : -1;
      j.key === "ArrowDown" ? (j.preventDefault(), j.stopPropagation(), (U === -1 ? D[0] : D[(U + 1) % D.length])?.focus()) : j.key === "ArrowUp" ? (j.preventDefault(), j.stopPropagation(), (U === -1 ? D[D.length - 1] : D[(U - 1 + D.length) % D.length])?.focus()) : j.key === "ArrowRight" ? P?.getAttribute("aria-haspopup") === "menu" && (j.preventDefault(), j.stopPropagation(), P.getAttribute("aria-expanded") !== "true" && P.click(), document.getElementById(
        P.getAttribute("aria-controls") ?? ""
      )?.querySelector('[role="menuitem"]')?.focus()) : (j.key === "ArrowLeft" || j.key === "Escape") && (j.preventDefault(), j.stopPropagation(), f(!1));
    };
    return /* @__PURE__ */ L(
      "div",
      {
        className: Z1.itemWrapper,
        onMouseEnter: n.clickToOpen ? void 0 : C,
        onMouseLeave: n.clickToOpen ? void 0 : z,
        "data-dx-menu-item": "",
        children: [
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              role: "menuitem",
              "data-top": k ? "true" : void 0,
              "data-index": e,
              "data-dx-menu-item": "",
              "aria-disabled": h || void 0,
              "aria-haspopup": "menu",
              "aria-expanded": p,
              "aria-controls": A,
              tabIndex: h ? -1 : 0,
              disabled: h,
              className: [
                Z1.item,
                h ? Z1.disabled : null,
                Z1.hasChildren
              ].filter(Boolean).join(" "),
              onClick: w,
              children: N
            }
          ),
          p ? /* @__PURE__ */ r(
            "div",
            {
              id: A,
              role: "menu",
              "aria-label": l,
              className: [
                Z1.submenu,
                n.flyout && !k ? Z1.flyout : null
              ].filter(Boolean).join(" "),
              "data-dx-menu-submenu": "",
              onKeyDown: V,
              children: /* @__PURE__ */ r(g0.Provider, { value: $, children: a.map(
                (j, D) => T2(j) ? /* @__PURE__ */ r(
                  q0,
                  {
                    itemKey: `${e}-${D}`,
                    props: j.props
                  },
                  `${e}-${D}`
                ) : (
                  // Separators / custom content (Radzen `<hr />` parity) render verbatim.
                  /* @__PURE__ */ r(V0, { children: j }, `${e}-custom-${D}`)
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
    "aria-disabled": h || void 0,
    "aria-current": M ? "page" : void 0,
    tabIndex: h ? -1 : 0,
    "data-dx-menu-item": "",
    className: [Z1.submenuItem, h ? Z1.disabled : null].filter(Boolean).join(" "),
    onClick: _
  };
  return c && !h ? /* @__PURE__ */ r("div", { className: Z1.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ r("a", { href: c, target: t.target, ...T, children: N }) }) : /* @__PURE__ */ r("div", { className: Z1.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ r("button", { type: "button", disabled: h, ...T, children: N }) });
}
function V2(e) {
  if (!ft(g0)) throw new Error("MenuItem must be used inside <Menu>");
  return /* @__PURE__ */ r(q0, { itemKey: e.text, props: e });
}
function qu({
  children: e,
  clickToOpen: t = !0,
  flyout: n = !1,
  responsive: l = !0,
  isContextMenu: s = !1,
  onClick: c,
  onClose: d,
  ariaLabel: o = "Menu",
  toggleAriaLabel: a = "Toggle menu",
  className: i,
  ...h
}) {
  const u = E1(), b = Q(null), y = Q(null), [k, m] = W(null), [g, p] = W(0), [f, v] = W(!1), M = Q(null), _ = q(
    (O) => c?.(O),
    [c]
  ), w = q(() => {
    m(null), p((O) => O + 1);
  }, []);
  v1(() => {
    if (k == null) return;
    const O = (S) => {
      b.current && !b.current.contains(S.target) && w();
    };
    return document.addEventListener("mousedown", O), () => document.removeEventListener("mousedown", O);
  }, [k, w]), v1(() => {
    M.current != null && k === M.current && (document.getElementById(`${u}-submenu-${k}`)?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus(), M.current = null);
  }, [k, u]);
  const C = g1(
    () => ({
      baseId: u,
      flyout: n,
      clickToOpen: t,
      level: 0,
      closeSignal: g,
      emit: _,
      closeAll: w,
      openKey: k,
      setOpenKey: m
    }),
    [u, n, t, g, _, w, k]
  ), z = g1(
    () => o0.toArray(e).filter(ve),
    [e]
  ), A = (O) => {
    const S = y.current;
    if (!S) return;
    const $ = Array.from(S.children).map((T) => T.querySelector('[role="menuitem"]')).filter(
      (T) => T != null && !T.hasAttribute("disabled") && T.getAttribute("aria-disabled") !== "true"
    );
    if (k != null) {
      const T = document.getElementById(`${u}-submenu-${k}`);
      if (T) {
        const V = Array.from(
          T.querySelectorAll('[role="menuitem"]')
        ).filter(
          (P) => P.getAttribute("aria-disabled") !== "true" && !P.hasAttribute("disabled")
        ), j = document.activeElement, D = j ? V.indexOf(j) : -1;
        if (O.key === "ArrowDown") {
          O.preventDefault(), (D === -1 ? V[0] : V[(D + 1) % V.length])?.focus();
          return;
        }
        if (O.key === "ArrowUp") {
          O.preventDefault(), (D === -1 ? V[V.length - 1] : V[(D - 1 + V.length) % V.length])?.focus();
          return;
        }
        if (O.key === "Escape") {
          O.preventDefault(), w(), d?.(), S.querySelector(`[data-index="${k}"]`)?.focus();
          return;
        }
        if (O.key === "Enter" || O.key === " ") return;
      }
      if (O.key === "Escape") {
        O.preventDefault(), w(), d?.();
        return;
      }
    }
    const x = document.activeElement, N = x ? $.indexOf(x) : -1;
    if (O.key === "ArrowRight") {
      if (O.preventDefault(), $.length === 0) return;
      $[N === -1 ? 0 : (N + 1) % $.length]?.focus();
      return;
    }
    if (O.key === "ArrowLeft") {
      if (O.preventDefault(), $.length === 0) return;
      $[N === -1 ? $.length - 1 : (N - 1 + $.length) % $.length]?.focus();
      return;
    }
    if (O.key === "ArrowDown") {
      if (N >= 0) {
        const T = x?.getAttribute("data-index");
        if (T == null) return;
        S.querySelector(
          `[data-index="${T}"]`
        )?.getAttribute("aria-haspopup") === "menu" && (O.preventDefault(), M.current = T, m(T));
      }
      return;
    }
    if (O.key === "Home") {
      O.preventDefault(), $[0]?.focus();
      return;
    }
    if (O.key === "End") {
      O.preventDefault(), $[$.length - 1]?.focus();
      return;
    }
    if (O.key.length === 1 && !O.ctrlKey && !O.metaKey) {
      const T = $.map((j) => j.textContent ?? ""), V = N === -1 ? 0 : (N + 1) % $.length;
      for (let j = 0; j < $.length; j++) {
        const D = (V + j) % $.length;
        if (T[D]?.toLowerCase().startsWith(O.key.toLowerCase())) {
          O.preventDefault(), $[D]?.focus();
          break;
        }
      }
    }
  };
  return /* @__PURE__ */ L(
    "nav",
    {
      ref: b,
      "aria-label": o,
      className: [
        Z1.root,
        s ? Z1.vertical : Z1.horizontal,
        l ? Z1.responsive : null,
        l && f ? Z1.mobileOpen : null,
        n ? Z1.flyoutRoot : null,
        i
      ].filter(Boolean).join(" "),
      ...h,
      children: [
        l ? /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            "aria-label": a,
            "aria-expanded": f,
            className: Z1.hamburger,
            onClick: () => v((O) => !O),
            children: /* @__PURE__ */ r(M1, { name: "menu", size: 20 })
          }
        ) : null,
        /* @__PURE__ */ r(
          "div",
          {
            ref: y,
            role: s ? "menu" : "menubar",
            "aria-label": o,
            className: Z1.menubar,
            onKeyDown: A,
            children: /* @__PURE__ */ r(g0.Provider, { value: C, children: z.map(
              (O, S) => T2(O) ? /* @__PURE__ */ r(
                q0,
                {
                  itemKey: String(S),
                  props: O.props
                },
                `top-${S}`
              ) : /* @__PURE__ */ r(V0, { children: O }, `top-custom-${S}`)
            ) })
          }
        )
      ]
    }
  );
}
const Iu = "_popup_y9hdw_1", Pu = "_menu_y9hdw_22", j0 = {
  popup: Iu,
  menu: Pu
}, D2 = qt(null);
function P_() {
  const e = ft(D2);
  if (!e)
    throw new Error("useContextMenu must be used inside <ContextMenuProvider>");
  return e;
}
function E2(e) {
  return e.map((t, n) => {
    const { children: l, ...s } = t;
    return /* @__PURE__ */ r(V2, { ...s, children: l ? E2(l) : void 0 }, `${t.text}-${n}`);
  });
}
function Ru({ state: e, onClose: t }) {
  const n = Q(null), [l, s] = W({ left: e.x, top: e.y });
  $0(() => {
    const d = n.current;
    if (!d) return;
    const o = d.getBoundingClientRect();
    s({
      left: Math.max(0, Math.min(e.x, window.innerWidth - o.width)),
      top: Math.max(0, Math.min(e.y, window.innerHeight - o.height))
    });
  }, [e.x, e.y, e.options]), v1(() => {
    n.current?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus();
  }, []);
  const c = q(
    (d) => {
      e.options.onClick?.(d);
    },
    [e.options]
  );
  return /* @__PURE__ */ r(
    "div",
    {
      ref: n,
      role: "presentation",
      "data-dx-contextmenu-popup": "",
      className: j0.popup,
      style: { left: l.left, top: l.top },
      children: /* @__PURE__ */ r("div", { className: j0.menu, children: e.options.content ?? /* @__PURE__ */ r(
        qu,
        {
          isContextMenu: !0,
          responsive: !1,
          ariaLabel: e.options.ariaLabel ?? "Context menu",
          onClick: c,
          onClose: t,
          children: E2(e.options.items ?? [])
        }
      ) })
    }
  );
}
function R_({ children: e }) {
  const [t, n] = W(null), l = q(() => {
    n((d) => (d?.invoker && document.body.contains(d.invoker) && d.invoker.focus({ preventScroll: !0 }), null));
  }, []), s = q(
    (d, o) => {
      d.preventDefault();
      const a = d.currentTarget ?? d.target;
      n({ x: d.clientX, y: d.clientY, invoker: a, options: o });
    },
    []
  );
  v1(() => {
    if (!t) return;
    const d = (h) => {
      const u = document.querySelector(`.${j0.popup}`);
      u && !u.contains(h.target) && l();
    }, o = (h) => {
      h.key === "Escape" && (h.preventDefault(), l());
    }, a = () => l(), i = () => l();
    return document.addEventListener("pointerdown", d, !0), document.addEventListener("keydown", o, !0), window.addEventListener("resize", a), window.addEventListener("hashchange", i), () => {
      document.removeEventListener("pointerdown", d, !0), document.removeEventListener("keydown", o, !0), window.removeEventListener("resize", a), window.removeEventListener("hashchange", i);
    };
  }, [t, l]);
  const c = g1(
    () => ({ open: s, close: l, isOpen: t != null }),
    [s, l, t]
  );
  return /* @__PURE__ */ L(D2.Provider, { value: c, children: [
    e,
    t ? /* @__PURE__ */ r(Ru, { state: t, onClose: l }) : null
  ] });
}
const Bu = "_root_1ezv8_1", Fu = "_list_1ezv8_9", Ku = "_item_1ezv8_14", Wu = "_trigger_1ezv8_18", Zu = "_disabled_1ezv8_45", Uu = "_expanded_1ezv8_52", Xu = "_selected_1ezv8_56", Gu = "_icon_1ezv8_61", Yu = "_text_1ezv8_72", Ju = "_caret_1ezv8_79", Qu = "_open_1ezv8_86", eh = "_submenu_1ezv8_90", th = "_iconOnly_1ezv8_172", nh = "_stacked_1ezv8_201", ie = {
  root: Bu,
  list: Fu,
  item: Ku,
  trigger: Wu,
  disabled: Zu,
  expanded: Uu,
  selected: Xu,
  icon: Gu,
  text: Yu,
  caret: Ju,
  open: Qu,
  submenu: eh,
  iconOnly: th,
  stacked: nh
}, k0 = qt(null);
function rh() {
  return typeof window > "u" ? "" : window.location.hash.replace(/^#\/?/, "");
}
function lh(e, t) {
  const n = rh(), l = e.replace(/^#?\/?/, "");
  return t === "prefix" ? l === "" ? !1 : l === "/" ? n === "" || n === "/" : n === l || n.startsWith(`${l}/`) : n === l;
}
function oh({
  icon: e,
  iconColor: t,
  image: n
}) {
  return n ? /* @__PURE__ */ r("span", { className: ie.icon, "aria-hidden": "true", children: /* @__PURE__ */ r("img", { src: n, alt: "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ r(
    "span",
    {
      className: ie.icon,
      "aria-hidden": "true",
      style: t ? { color: t } : void 0,
      children: /* @__PURE__ */ r(M1, { name: e, size: 16 })
    }
  ) : null;
}
function I0({
  itemKey: e,
  ancestors: t,
  props: n
}) {
  const l = ft(k0);
  if (!l) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  const { text: s, value: c, path: d, disabled: o } = n, a = g1(
    () => o0.toArray(n.children).filter(ve),
    [n.children]
  ), i = a.length > 0, h = !!o, u = n.match ?? l.match, b = n.expanded !== void 0, [y, k] = W(
    n.defaultExpanded ?? !1
  ), m = b ? n.expanded ?? !1 : y, g = q(
    (D) => {
      b || k(D), n.onExpandedChange?.(D);
    },
    [b, n]
  );
  v1(() => {
    l.collapseSignal > 0 && !l.collapseSkipRef.current.has(e) && g(!1);
  }, [l.collapseSignal]);
  const p = n.onSelectedChange !== void 0 || n.selected !== void 0, [f, v] = W(
    n.defaultSelected ?? !1
  ), M = !p && d ? lh(d, u) : !1, _ = n.selected ?? (p ? f : M || f), [, w] = W(0);
  v1(() => {
    if (!d) return;
    const D = () => w((P) => P + 1);
    return window.addEventListener("hashchange", D), () => window.removeEventListener("hashchange", D);
  }, [d]);
  const C = g1(
    () => ({
      ...l,
      level: l.level + 1,
      openAncestors: () => {
        g(!0), l.openAncestors();
      }
    }),
    [l, g]
  );
  v1(() => {
    M && t.length > 0 && C.openAncestors();
  }, []);
  const z = q(
    (D) => {
      if (h) {
        D.preventDefault();
        return;
      }
      const P = { text: s, value: c, path: d };
      [l.emit(P), n.onClick?.(P)].includes(!1) && D.preventDefault(), p || v(!0), n.onSelectedChange?.(!0);
    },
    [h, s, c, d, l, n, p]
  ), A = q(() => {
    h || (m || l.notifyOpened(e, t), g(!m));
  }, [h, m, l, e, t, g]), O = q(
    (D) => {
      D.key === "Enter" || D.key === " " ? (D.preventDefault(), i ? A() : D.target.click()) : D.key === "Escape" && m ? (D.preventDefault(), g(!1)) : D.key === "ArrowRight" && i && !m ? (D.preventDefault(), l.notifyOpened(e, t), g(!0)) : D.key === "ArrowLeft" && m && (D.preventDefault(), g(!1));
    },
    [i, A, m, g, l, e, t]
  ), S = i && l.showArrow ? /* @__PURE__ */ r(
    "span",
    {
      className: [ie.caret, m ? ie.open : null].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: /* @__PURE__ */ r(M1, { name: "chevron-down", size: 10 })
    }
  ) : null, $ = n.template ?? /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ r(
      oh,
      {
        icon: n.icon,
        iconColor: n.iconColor,
        image: n.image,
        imageAlt: n.imageAlt
      }
    ),
    l.displayStyle === "icon" ? /* @__PURE__ */ r("span", { className: ie.text, "aria-label": s, children: n.icon || n.image ? null : s.slice(0, 1) }) : /* @__PURE__ */ r("span", { className: ie.text, children: s }),
    S
  ] }), x = `${l.baseId}-panel-${e}`, N = `${l.baseId}-trigger-${e}`, T = [
    ie.trigger,
    h ? ie.disabled : null,
    m ? ie.expanded : null,
    _ ? ie.selected : null
  ].filter(Boolean).join(" "), V = i ? /* @__PURE__ */ r(
    "button",
    {
      type: "button",
      id: N,
      "aria-expanded": m,
      "aria-controls": x,
      "aria-disabled": h || void 0,
      disabled: h,
      tabIndex: h ? -1 : 0,
      className: T,
      onClick: A,
      onKeyDown: O,
      children: $
    }
  ) : d && !h ? /* @__PURE__ */ r(
    "a",
    {
      id: N,
      href: d,
      target: n.target,
      "aria-disabled": void 0,
      "aria-current": _ ? "page" : void 0,
      tabIndex: 0,
      className: T,
      onClick: z,
      onKeyDown: O,
      children: $
    }
  ) : /* @__PURE__ */ r(
    "button",
    {
      type: "button",
      id: N,
      "aria-current": _ ? "page" : void 0,
      "aria-disabled": h || void 0,
      disabled: h,
      tabIndex: h ? -1 : 0,
      className: T,
      onClick: z,
      onKeyDown: O,
      children: $
    }
  ), j = i ? l.renderMode === "server" && !m ? null : /* @__PURE__ */ r(
    "div",
    {
      id: x,
      role: "menu",
      "aria-labelledby": N,
      className: ie.submenu,
      hidden: l.renderMode === "client" && !m ? !0 : void 0,
      children: /* @__PURE__ */ r(k0.Provider, { value: C, children: a.map((D, P) => /* @__PURE__ */ r(
        I0,
        {
          itemKey: `${e}-${P}`,
          ancestors: [...t, e],
          props: D.props
        },
        `${e}-${P}`
      )) })
    }
  ) : null;
  return /* @__PURE__ */ L(
    "div",
    {
      className: ie.item,
      style: { "--dx-panelmenu-level": l.level },
      "data-dx-panelmenu-item": "",
      "data-level": l.level,
      children: [
        V,
        j
      ]
    }
  );
}
function B_(e) {
  if (!ft(k0)) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  return /* @__PURE__ */ r(I0, { itemKey: e.text, ancestors: [], props: e });
}
function F_({
  children: e,
  multiple: t = !0,
  displayStyle: n = "iconAndText",
  showArrow: l = !0,
  match: s = "prefix",
  renderMode: c = "client",
  onClick: d,
  ariaLabel: o = "Panel menu",
  className: a,
  ...i
}) {
  const h = E1(), [u, b] = W(0), y = Q(/* @__PURE__ */ new Set()), k = q(
    (M) => d?.(M),
    [d]
  ), m = q(
    (M, _) => {
      t || (y.current = /* @__PURE__ */ new Set([M, ..._]), b((w) => w + 1));
    },
    [t]
  ), g = (M) => Array.from(
    M.querySelectorAll('button, a[href], [role="menuitem"]')
  ).filter(
    (_) => !_.hasAttribute("disabled") && _.getAttribute("aria-disabled") !== "true" && _.closest("[hidden]") == null
  ), p = (M) => {
    if (!(M.key === "Enter" || M.key === " ")) {
      if (M.key === "ArrowDown" || M.key === "ArrowUp") {
        const _ = M.target, w = g(M.currentTarget), C = w.indexOf(_);
        if (C === -1) return;
        M.preventDefault();
        const z = M.key === "ArrowDown" ? 1 : -1;
        w[(C + z + w.length) % w.length]?.focus();
      } else if (M.key === "Home" || M.key === "End") {
        const _ = g(M.currentTarget);
        M.preventDefault(), (M.key === "Home" ? _[0] : _[_.length - 1])?.focus();
      }
    }
  }, f = g1(
    () => ({
      baseId: h,
      multiple: t,
      displayStyle: n,
      showArrow: l,
      renderMode: c,
      match: s,
      level: 0,
      collapseSignal: u,
      collapseSkipRef: y,
      emit: k,
      notifyOpened: m,
      openAncestors: () => {
      }
    }),
    [
      h,
      t,
      n,
      l,
      c,
      s,
      u,
      k,
      m
    ]
  ), v = g1(
    () => o0.toArray(e).filter(ve),
    [e]
  );
  return /* @__PURE__ */ r(
    "nav",
    {
      "aria-label": o,
      className: [
        ie.root,
        n === "icon" ? ie.iconOnly : null,
        n === "stacked" ? ie.stacked : null,
        a
      ].filter(Boolean).join(" "),
      onKeyDown: p,
      ...i,
      children: /* @__PURE__ */ r("div", { className: ie.list, role: "presentation", children: /* @__PURE__ */ r(k0.Provider, { value: f, children: v.map((M, _) => /* @__PURE__ */ r(
        I0,
        {
          itemKey: String(_),
          ancestors: [],
          props: M.props
        },
        `top-${_}`
      )) }) })
    }
  );
}
const ah = "_root_1bbxp_1", sh = "_trigger_1bbxp_7", ch = "_defaultTrigger_1bbxp_40", ih = "_avatar_1bbxp_46", dh = "_menu_1bbxp_58", uh = "_item_1bbxp_74", hh = "_disabled_1bbxp_88", fh = "_active_1bbxp_97", ph = "_icon_1bbxp_107", mh = "_text_1bbxp_114", Ue = {
  root: ah,
  trigger: sh,
  defaultTrigger: ch,
  avatar: ih,
  menu: dh,
  item: uh,
  disabled: hh,
  active: fh,
  icon: ph,
  text: mh
};
function K_({
  items: e,
  trigger: t,
  onClick: n,
  ariaLabel: l = "Profile menu",
  className: s
}) {
  const c = E1(), d = `${c}-menu`, o = Q(null), a = Q(null), [i, h] = W(!1), [u, b] = W(-1), y = t, k = e.map((_, w) => _.disabled ? -1 : w).filter((_) => _ >= 0), m = q(
    (_) => {
      if (_.disabled) return;
      const w = {
        text: _.text,
        path: _.path
      };
      n?.(w), h(!1), a.current?.focus();
    },
    [n]
  ), g = q(() => {
    b(k[0] ?? -1), h(!0);
  }, [k]), p = q(() => {
    h(!1), b(-1), a.current?.focus();
  }, []);
  v1(() => {
    if (!i) return;
    const _ = (w) => {
      o.current && !o.current.contains(w.target) && (h(!1), b(-1));
    };
    return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
  }, [i]), v1(() => {
    if (!i) return;
    const _ = (w) => {
      w.key === "Escape" && (w.preventDefault(), p());
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [i, p]);
  const f = (_) => {
    if (k.length === 0) return;
    const w = k.indexOf(u), C = w === -1 ? 0 : (w + _ + k.length) % k.length, z = k[C];
    z != null && b(z);
  }, v = (_) => {
    if (!i) {
      (_.key === "ArrowDown" || _.key === "Enter" || _.key === " ") && (_.preventDefault(), g());
      return;
    }
    switch (_.key) {
      case "Escape":
        _.preventDefault(), p();
        break;
      case "ArrowDown":
        _.preventDefault(), f(1);
        break;
      case "ArrowUp":
        _.preventDefault(), f(-1);
        break;
      case "Home":
        _.preventDefault(), k[0] != null && b(k[0]);
        break;
      case "End":
        _.preventDefault(), k[k.length - 1] != null && b(k[k.length - 1]);
        break;
      case "Enter":
      case " ":
        if (_.preventDefault(), u >= 0) {
          const w = e[u];
          w && !w.disabled && m(w);
        }
        break;
      case "Tab":
        h(!1), b(-1);
        break;
    }
  }, M = (_) => {
    switch (_.key) {
      case "ArrowDown":
        _.preventDefault(), f(1);
        break;
      case "ArrowUp":
        _.preventDefault(), f(-1);
        break;
      case "Home":
        _.preventDefault(), k[0] != null && b(k[0]);
        break;
      case "End":
        _.preventDefault(), k[k.length - 1] != null && b(k[k.length - 1]);
        break;
      case "Enter":
      case " ":
        if (_.preventDefault(), u >= 0) {
          const w = e[u];
          w && !w.disabled && m(w);
        }
        break;
      case "Escape":
        _.preventDefault(), p();
        break;
      case "Tab":
        h(!1), b(-1);
        break;
    }
  };
  return /* @__PURE__ */ r(
    "div",
    {
      ref: o,
      className: [Ue.root, s].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ L("nav", { "aria-label": l, children: [
        /* @__PURE__ */ r(
          "button",
          {
            ref: a,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": i,
            "aria-controls": d,
            "aria-label": l,
            className: Ue.trigger,
            onClick: () => i ? p() : g(),
            onKeyDown: v,
            children: y ?? /* @__PURE__ */ L("span", { className: Ue.defaultTrigger, children: [
              /* @__PURE__ */ r("span", { className: Ue.avatar, "aria-hidden": "true", children: "●" }),
              /* @__PURE__ */ r("span", { children: "Profile" })
            ] })
          }
        ),
        i ? /* @__PURE__ */ r(
          "div",
          {
            id: d,
            role: "menu",
            "aria-label": l,
            "aria-activedescendant": u >= 0 ? `${c}-item-${u}` : void 0,
            className: Ue.menu,
            onKeyDown: M,
            tabIndex: -1,
            children: e.map((_, w) => {
              const C = !!_.disabled, z = w === u;
              return /* @__PURE__ */ L(
                "div",
                {
                  id: `${c}-item-${w}`,
                  role: "menuitem",
                  "aria-disabled": C || void 0,
                  tabIndex: C ? -1 : 0,
                  className: [
                    Ue.item,
                    z ? Ue.active : null,
                    C ? Ue.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    C || m(_);
                  },
                  onMouseEnter: () => {
                    C || b(w);
                  },
                  children: [
                    _.icon ? /* @__PURE__ */ r("span", { className: Ue.icon, "aria-hidden": "true", children: _.icon }) : null,
                    /* @__PURE__ */ r("span", { className: Ue.text, children: _.text })
                  ]
                },
                `${_.text}-${w}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const _h = "_root_1dgrt_1", vh = "_bottomRight_1dgrt_11", gh = "_bottomLeft_1dgrt_16", kh = "_topRight_1dgrt_21", xh = "_topLeft_1dgrt_26", yh = "_menu_1dgrt_31", bh = "_itemWrapper_1dgrt_48", Mh = "_tooltip_1dgrt_54", Ch = "_main_1dgrt_76", wh = "_mainIcon_1dgrt_104", zh = "_mainOpen_1dgrt_109", Lh = "_item_1dgrt_48", $h = "_disabled_1dgrt_141", Nh = "_itemIcon_1dgrt_148", ye = {
  root: _h,
  bottomRight: vh,
  bottomLeft: gh,
  topRight: kh,
  topLeft: xh,
  menu: yh,
  itemWrapper: bh,
  tooltip: Mh,
  main: Ch,
  mainIcon: wh,
  mainOpen: zh,
  item: Lh,
  disabled: $h,
  itemIcon: Nh
};
function W_({
  items: e,
  position: t,
  icon: n = "+",
  onClick: l,
  ariaLabel: s = "Open menu",
  className: c
}) {
  const d = t ?? "bottom-right", a = `${E1()}-menu`, i = Q(null), h = Q(null), [u, b] = W(!1), y = q(
    (p) => {
      if (p.disabled) return;
      const f = { text: p.text, value: p.value };
      l?.(f), b(!1), h.current?.focus();
    },
    [l]
  );
  v1(() => {
    if (!u) return;
    const p = (f) => {
      i.current && !i.current.contains(f.target) && b(!1);
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, [u]), v1(() => {
    if (!u) return;
    const p = (f) => {
      f.key === "Escape" && (b(!1), h.current?.focus());
    };
    return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [u]);
  const k = d === "bottom-right" ? ye.bottomRight : d === "bottom-left" ? ye.bottomLeft : d === "top-right" ? ye.topRight : ye.topLeft, m = (p) => {
    !u && (p.key === "Enter" || p.key === " " || p.key === "ArrowDown" || p.key === "ArrowUp") ? (p.preventDefault(), b(!0)) : u && p.key === "Escape" && (p.preventDefault(), b(!1));
  }, g = (p) => {
    p.key === "Escape" && (p.preventDefault(), b(!1), h.current?.focus());
  };
  return /* @__PURE__ */ L(
    "div",
    {
      ref: i,
      className: [ye.root, k, c].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        u ? /* @__PURE__ */ r(
          "div",
          {
            id: a,
            role: "menu",
            "aria-label": s,
            className: ye.menu,
            onKeyDown: g,
            children: e.map((p, f) => {
              const v = !!p.disabled;
              return /* @__PURE__ */ L("div", { className: ye.itemWrapper, children: [
                /* @__PURE__ */ r("span", { className: ye.tooltip, "aria-hidden": "true", children: p.text }),
                /* @__PURE__ */ r(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": p.text,
                    "aria-disabled": v || void 0,
                    title: p.text,
                    disabled: v,
                    tabIndex: v ? -1 : 0,
                    className: [ye.item, v ? ye.disabled : null].filter(Boolean).join(" "),
                    onClick: () => y(p),
                    children: /* @__PURE__ */ r("span", { className: ye.itemIcon, "aria-hidden": "true", children: p.icon ?? "•" })
                  }
                )
              ] }, `${p.text}-${f}`);
            })
          }
        ) : null,
        /* @__PURE__ */ r(
          "button",
          {
            ref: h,
            type: "button",
            className: ye.main,
            "aria-haspopup": "menu",
            "aria-expanded": u,
            "aria-controls": a,
            "aria-label": s,
            onClick: () => b((p) => !p),
            onKeyDown: m,
            children: /* @__PURE__ */ r(
              "span",
              {
                "aria-hidden": "true",
                className: [ye.mainIcon, u ? ye.mainOpen : null].filter(Boolean).join(" "),
                children: n
              }
            )
          }
        )
      ]
    }
  );
}
const Sh = "_root_1nu0o_1", Oh = "_list_1nu0o_5", Ah = "_item_1nu0o_15", Hh = "_link_1nu0o_22", jh = "_linkButton_1nu0o_23", Th = "_current_1nu0o_24", Vh = "_disabled_1nu0o_68", Dh = "_icon_1nu0o_74", Eh = "_text_1nu0o_81", qh = "_separator_1nu0o_85", K1 = {
  root: Sh,
  list: Oh,
  item: Ah,
  link: Hh,
  linkButton: jh,
  current: Th,
  disabled: Vh,
  icon: Dh,
  text: Eh,
  separator: qh
};
function Z_({
  items: e,
  onClick: t,
  ariaLabel: n = "Breadcrumb",
  className: l
}) {
  const s = t, c = (d) => {
    d.disabled || s?.({ text: d.text, path: d.path });
  };
  return /* @__PURE__ */ r(
    "nav",
    {
      "aria-label": n,
      className: [K1.root, l].filter(Boolean).join(" "),
      children: /* @__PURE__ */ r("ol", { className: K1.list, children: e.map((d, o) => {
        const a = o === e.length - 1, i = !!d.disabled;
        return /* @__PURE__ */ L("li", { className: K1.item, children: [
          a ? i ? /* @__PURE__ */ L(
            "span",
            {
              className: [K1.current, K1.disabled].filter(Boolean).join(" "),
              "aria-current": "page",
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                d.icon ? /* @__PURE__ */ r("span", { className: K1.icon, "aria-hidden": "true", children: d.icon }) : null,
                d.text
              ]
            }
          ) : d.path ? /* @__PURE__ */ L(
            "a",
            {
              href: d.path,
              className: K1.link,
              "aria-current": "page",
              onClick: (h) => {
                h.preventDefault(), c(d);
              },
              children: [
                d.icon ? /* @__PURE__ */ r("span", { className: K1.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ r("span", { className: K1.text, children: d.text })
              ]
            }
          ) : /* @__PURE__ */ L(
            "span",
            {
              className: K1.current,
              "aria-current": "page",
              tabIndex: 0,
              children: [
                d.icon ? /* @__PURE__ */ r("span", { className: K1.icon, "aria-hidden": "true", children: d.icon }) : null,
                d.text
              ]
            }
          ) : i ? /* @__PURE__ */ L(
            "span",
            {
              className: [K1.link, K1.disabled].filter(Boolean).join(" "),
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                d.icon ? /* @__PURE__ */ r("span", { className: K1.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ r("span", { className: K1.text, children: d.text })
              ]
            }
          ) : d.path ? /* @__PURE__ */ L(
            "a",
            {
              href: d.path,
              className: K1.link,
              onClick: (h) => {
                h.preventDefault(), c(d);
              },
              children: [
                d.icon ? /* @__PURE__ */ r("span", { className: K1.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ r("span", { className: K1.text, children: d.text })
              ]
            }
          ) : /* @__PURE__ */ L(
            "button",
            {
              type: "button",
              className: K1.linkButton,
              tabIndex: 0,
              onClick: () => c(d),
              children: [
                d.icon ? /* @__PURE__ */ r("span", { className: K1.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ r("span", { className: K1.text, children: d.text })
              ]
            }
          ),
          a ? null : /* @__PURE__ */ r("span", { className: K1.separator, "aria-hidden": "true", children: "/" })
        ] }, `${d.text}-${o}`);
      }) })
    }
  );
}
const Ih = "_link_6vrgp_1", Ph = {
  link: Ih
}, U_ = q1(function({ children: t, icon: n, visible: l = !0, className: s, ...c }, d) {
  if (l === !1) return null;
  const o = /* @__PURE__ */ L(b1, { children: [
    n != null && /* @__PURE__ */ r(M1, { name: n, "aria-hidden": "true" }),
    t
  ] }), a = [Ph.link, s].filter(Boolean).join(" ");
  if (c.href != null) {
    const { href: h, ...u } = c;
    return /* @__PURE__ */ r(
      "a",
      {
        ref: d,
        className: a,
        href: h,
        ...u,
        children: o
      }
    );
  }
  return /* @__PURE__ */ r(
    "button",
    {
      ref: d,
      type: "button",
      className: a,
      ...c,
      children: o
    }
  );
}), Rh = "_root_1w5vx_1", Bh = "_list_1w5vx_5", Fh = "_item_1w5vx_15", Kh = "_connector_1w5vx_21", Wh = "_connectorCompleted_1w5vx_30", Zh = "_step_1w5vx_34", Uh = "_active_1w5vx_69", Xh = "_completed_1w5vx_75", Gh = "_circle_1w5vx_79", Yh = "_check_1w5vx_109", Jh = "_icon_1w5vx_114", Qh = "_number_1w5vx_119", ef = "_text_1w5vx_124", be = {
  root: Rh,
  list: Bh,
  item: Fh,
  connector: Kh,
  connectorCompleted: Wh,
  step: Zh,
  active: Uh,
  completed: Xh,
  circle: Gh,
  check: Yh,
  icon: Jh,
  number: Qh,
  text: ef
};
function X_({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: l = 0,
  linear: s,
  Linear: c,
  onChange: d,
  Change: o,
  onSelectedIndexChange: a,
  ariaLabel: i = "Steps",
  className: h
}) {
  const u = s ?? c ?? !1, b = t ?? n, y = b !== void 0, [k, m] = W(() => Math.min(Math.max(0, b ?? l), Math.max(0, e.length - 1))), p = Math.min(
    Math.max(0, y ? b : k),
    Math.max(0, e.length - 1)
  ), f = Q(null), v = q(
    (w) => {
      const C = Math.min(
        Math.max(0, w),
        Math.max(0, e.length - 1)
      );
      y || m(C), (d ?? o ?? a)?.(C);
    },
    [y, d, o, a, e.length]
  ), M = q(
    (w, C) => !!(C.disabled || u && w > p + 1),
    [u, p]
  ), _ = (w) => {
    const C = Array.from(
      w.currentTarget.querySelectorAll("button[data-step]")
    ).filter((O) => O.getAttribute("aria-disabled") !== "true" && !O.disabled), z = document.activeElement, A = z ? C.indexOf(z) : -1;
    if (w.key === "ArrowRight" || w.key === "ArrowDown") {
      if (w.preventDefault(), C.length === 0) return;
      const O = A === -1 ? 0 : (A + 1) % C.length, S = C[O];
      S && S.focus();
    } else if (w.key === "ArrowLeft" || w.key === "ArrowUp") {
      if (w.preventDefault(), C.length === 0) return;
      const O = A === -1 ? C.length - 1 : (A - 1 + C.length) % C.length, S = C[O];
      S && S.focus();
    } else w.key === "Home" ? (w.preventDefault(), C[0]?.focus()) : w.key === "End" && (w.preventDefault(), C[C.length - 1]?.focus());
  };
  return /* @__PURE__ */ r(
    "nav",
    {
      "aria-label": i,
      className: [be.root, h].filter(Boolean).join(" "),
      onKeyDown: _,
      children: /* @__PURE__ */ r("ol", { ref: f, role: "list", className: be.list, children: e.map((w, C) => {
        const z = C === p, A = C < p, O = M(C, w);
        return /* @__PURE__ */ L(
          "li",
          {
            role: "listitem",
            className: be.item,
            children: [
              C > 0 ? /* @__PURE__ */ r(
                "span",
                {
                  className: [
                    be.connector,
                    A ? be.connectorCompleted : null
                  ].filter(Boolean).join(" "),
                  "aria-hidden": "true"
                }
              ) : null,
              /* @__PURE__ */ L(
                "button",
                {
                  type: "button",
                  "data-step": C,
                  "aria-current": z ? "step" : void 0,
                  "aria-disabled": O ? "true" : void 0,
                  disabled: O,
                  tabIndex: O ? -1 : 0,
                  className: [
                    be.step,
                    z ? be.active : null,
                    A ? be.completed : null,
                    O ? be.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    O || v(C);
                  },
                  children: [
                    /* @__PURE__ */ r("span", { className: be.circle, "aria-hidden": "true", children: A ? /* @__PURE__ */ r("span", { className: be.check, "aria-hidden": "true", children: /* @__PURE__ */ r(M1, { name: "check", size: "sm" }) }) : w.icon ? /* @__PURE__ */ r("span", { className: be.icon, children: w.icon }) : /* @__PURE__ */ r("span", { className: be.number, children: C + 1 }) }),
                    /* @__PURE__ */ r("span", { className: be.text, children: w.text })
                  ]
                }
              )
            ]
          },
          `${w.text}-${C}`
        );
      }) })
    }
  );
}
const tf = "_root_1np74_1", nf = "_horizontal_1np74_13", rf = "_vertical_1np74_17", lf = "_pane_1np74_21", of = "_handle_1np74_31", af = "_handleHorizontal_1np74_51", sf = "_handleVertical_1np74_57", cf = "_handleGrip_1np74_63", df = "_handleCollapseHint_1np74_75", uf = "_collapseBtn_1np74_79", hf = "_collapseBtnCollapsed_1np74_109", je = {
  root: tf,
  horizontal: nf,
  vertical: rf,
  pane: lf,
  handle: of,
  handleHorizontal: af,
  handleVertical: sf,
  handleGrip: cf,
  handleCollapseHint: df,
  collapseBtn: uf,
  collapseBtnCollapsed: hf
};
function Qt(e, t) {
  if (!e) return t;
  const n = e.trim();
  if (n.endsWith("%")) {
    const s = parseFloat(n.slice(0, -1));
    return Number.isNaN(s) ? t : s;
  }
  if (n.endsWith("px")) {
    const s = parseFloat(n.slice(0, -2));
    return Number.isNaN(s) ? t : s;
  }
  const l = parseFloat(n);
  return Number.isNaN(l) ? t : l;
}
function nt(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function G_({
  orientation: e,
  Orientation: t,
  panes: n,
  onResize: l,
  Resize: s,
  onCollapse: c,
  Collapse: d,
  ariaLabel: o = "Splitter",
  className: a
}) {
  const i = e ?? t ?? "horizontal", h = i === "horizontal", u = Q(null), b = q(() => {
    const x = n.length;
    if (x === 0) return [];
    const N = n.map((V) => V.size ? Qt(V.size, 100 / x) : 100 / x), T = N.reduce((V, j) => V + j, 0);
    return Math.abs(T - 100) > 0.01 && T > 0 ? N.map((V) => V / T * 100) : N;
  }, [n]), [y, k] = W(() => b()), [m, g] = W(
    () => n.map((x) => !!x.collapsed)
  ), p = Q(y);
  v1(() => {
    g(n.map((x) => !!x.collapsed));
  }, [n]);
  const f = q(
    () => n.map((x) => Qt(x.min, 0)),
    [n]
  ), v = q(
    () => n.map((x) => Qt(x.max, 100)),
    [n]
  ), M = q(
    (x, N) => {
      const T = { paneIndex: x, newSize: N, cancel: !1 };
      return (l ?? s)?.(T), !T.cancel;
    },
    [l, s]
  ), _ = q(
    (x, N) => {
      const T = { paneIndex: x, collapse: N, cancel: !1 };
      return (c ?? d)?.(T), !T.cancel;
    },
    [c, d]
  ), w = q(
    (x) => {
      const N = !m[x];
      _(x, N) && (N ? (p.current = [...y], g((T) => {
        const V = [...T];
        return V[x] !== void 0 && (V[x] = !0), V;
      }), k((T) => {
        const V = [...T], j = V[x] ?? 0, D = x < V.length - 1 ? x + 1 : x - 1;
        if (D >= 0 && D < V.length) {
          const P = V[D] ?? 0;
          V[D] = P + j, V[x] = 0;
        } else
          V[x] = 0;
        return V;
      })) : (g((T) => {
        const V = [...T];
        return V[x] !== void 0 && (V[x] = !1), V;
      }), k(() => {
        const T = [...p.current];
        return T.length !== n.length ? n.map(() => 100 / n.length) : T;
      })));
    },
    [m, y, n.length, _]
  ), C = Q(
    null
  ), z = q(
    (x, N, T) => {
      const V = u.current;
      if (!V) return null;
      const j = V.getBoundingClientRect();
      let D;
      if (h) {
        if (j.width === 0) return null;
        D = (N - j.left) / j.width * 100;
      } else {
        if (j.height === 0) return null;
        D = (T - j.top) / j.height * 100;
      }
      let P = 0;
      for (let e1 = 0; e1 < x; e1++) {
        const G = y[e1];
        G !== void 0 && (P += G);
      }
      return D - P;
    },
    [h, y]
  ), A = (x, N) => {
    N.preventDefault();
    const T = N.currentTarget;
    T.focus(), typeof T.setPointerCapture == "function" && T.setPointerCapture(N.pointerId), C.current = { handleIndex: x, pointerId: N.pointerId };
  }, O = (x) => {
    if (!C.current || C.current.pointerId !== x.pointerId)
      return;
    x.preventDefault();
    const N = C.current.handleIndex, T = z(N, x.clientX, x.clientY);
    if (T == null) return;
    const V = f(), j = v(), D = V[N] ?? 0, P = j[N] ?? 100, U = N + 1, e1 = V[U] ?? 0, G = j[U] ?? 100, m1 = y[N] ?? 0, d1 = y[U] ?? 0, l1 = m1 + d1;
    if (l1 <= 0) return;
    let B = nt(T, D, P), c1 = l1 - B;
    if (c1 < e1) {
      if (c1 = e1, B = l1 - c1, B < D || B > P) return;
    } else if (c1 > G && (c1 = G, B = l1 - c1, B < D || B > P))
      return;
    B = nt(B, D, P), c1 = l1 - B, M(N, B) && k((r1) => {
      const u1 = [...r1];
      return u1[N] = B, u1[U] = c1, u1;
    });
  }, S = (x) => {
    !C.current || C.current.pointerId !== x.pointerId || (C.current = null);
  }, $ = (x, N) => {
    const T = f(), V = v(), j = x, D = x + 1, P = y[j] ?? 0, U = y[D] ?? 0, e1 = P + U;
    let G = 0;
    const m1 = !!n[j]?.collapsible, d1 = !!n[D]?.collapsible;
    if (h ? N.key === "ArrowLeft" ? G = -5 : N.key === "ArrowRight" && (G = 5) : N.key === "ArrowUp" ? G = -5 : N.key === "ArrowDown" && (G = 5), N.key === "Home") {
      N.preventDefault();
      let l1 = T[j] ?? 0, B = e1 - l1;
      if (B = nt(
        B,
        T[D] ?? 0,
        V[D] ?? 100
      ), l1 = e1 - B, l1 = nt(l1, T[j] ?? 0, V[j] ?? 100), !M(j, l1)) return;
      k((c1) => {
        const r1 = [...c1];
        return r1[j] = l1, r1[D] = B, r1;
      });
      return;
    }
    if (N.key === "End") {
      N.preventDefault();
      let l1 = V[j] ?? 100;
      l1 = Math.min(l1, e1 - (T[D] ?? 0));
      let B = e1 - l1;
      if (B = nt(
        B,
        T[D] ?? 0,
        V[D] ?? 100
      ), l1 = e1 - B, l1 = nt(l1, T[j] ?? 0, V[j] ?? 100), !M(j, l1)) return;
      k((c1) => {
        const r1 = [...c1];
        return r1[j] = l1, r1[D] = B, r1;
      });
      return;
    }
    if ((N.key === "Enter" || N.key === " ") && (m1 || d1)) {
      N.preventDefault(), w(m1 ? j : D);
      return;
    }
    if (G !== 0) {
      N.preventDefault();
      let l1 = P + G, B = e1 - l1;
      const c1 = T[j] ?? 0, r1 = V[j] ?? 100, u1 = T[D] ?? 0, o1 = V[D] ?? 100;
      if (l1 = nt(l1, c1, r1), B = e1 - l1, (B < u1 || B > o1) && (B = nt(B, u1, o1), l1 = e1 - B, l1 = nt(l1, c1, r1), B = e1 - l1), !M(j, l1)) return;
      k((w1) => {
        const L1 = [...w1];
        return L1[j] = l1, L1[D] = B, L1;
      });
    }
  };
  return /* @__PURE__ */ r(
    "div",
    {
      ref: u,
      className: [
        je.root,
        h ? je.horizontal : je.vertical,
        a
      ].filter(Boolean).join(" "),
      "aria-label": o,
      children: n.map((x, N) => {
        const T = !!m[N], V = T ? 0 : y[N] ?? 100 / n.length, j = T ? { display: "none" } : h ? {
          flexBasis: `${V}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        } : {
          flexBasis: `${V}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        }, D = Qt(x.min, 0), P = Qt(x.max, 100), U = N < n.length - 1, e1 = !!n[N + 1]?.collapsible;
        return /* @__PURE__ */ L("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ L(
            "div",
            {
              role: "group",
              "aria-label": x.label ?? `Pane ${N + 1}`,
              className: je.pane,
              style: j,
              "data-collapsed": T ? "true" : void 0,
              children: [
                T ? null : x.children,
                x.collapsible && !T ? /* @__PURE__ */ r(
                  "button",
                  {
                    type: "button",
                    className: je.collapseBtn,
                    "aria-label": `Collapse pane ${N + 1}`,
                    "aria-expanded": !T,
                    onClick: () => w(N),
                    children: h ? "◀" : "▲"
                  }
                ) : null,
                x.collapsible && T ? /* @__PURE__ */ r(
                  "button",
                  {
                    type: "button",
                    className: je.collapseBtn,
                    "aria-label": `Expand pane ${N + 1}`,
                    "aria-expanded": !T,
                    onClick: () => w(N),
                    children: h ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          T && x.collapsible ? (
            // when collapsed we already rendered expand button inside pane, but pane is display none, so render expand button outside?
            // Actually we hide pane with display none, need visible expand button
            // So render alternative expand button adjacent
            /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                className: je.collapseBtnCollapsed,
                "aria-label": `Expand pane ${N + 1}`,
                "aria-expanded": "false",
                onClick: () => w(N),
                children: h ? "▶" : "▼"
              }
            )
          ) : null,
          U ? /* @__PURE__ */ L(
            "div",
            {
              role: "separator",
              "aria-orientation": i,
              "aria-valuemin": D,
              "aria-valuemax": P,
              "aria-valuenow": Math.round(V),
              "aria-label": `Resize handle ${N + 1}`,
              tabIndex: T || m[N + 1] ? -1 : 0,
              className: [
                je.handle,
                h ? je.handleHorizontal : je.handleVertical
              ].filter(Boolean).join(" "),
              onPointerDown: (G) => A(N, G),
              onPointerMove: O,
              onPointerUp: S,
              onKeyDown: (G) => $(N, G),
              children: [
                /* @__PURE__ */ r("span", { className: je.handleGrip, "aria-hidden": "true" }),
                (x.collapsible || e1) && /* @__PURE__ */ r(
                  "span",
                  {
                    className: je.handleCollapseHint,
                    "aria-hidden": "true"
                  }
                )
              ]
            }
          ) : null
        ] }, N);
      })
    }
  );
}
const ff = "_root_wurjl_1", pf = "_list_wurjl_5", mf = "_vertical_wurjl_14", _f = "_horizontal_wurjl_20", vf = "_item_wurjl_28", gf = "_link_wurjl_32", kf = "_active_wurjl_57", Vt = {
  root: ff,
  list: pf,
  vertical: mf,
  horizontal: _f,
  item: vf,
  link: gf,
  active: kf
};
function Y_({
  items: e,
  selector: t,
  Selector: n,
  orientation: l,
  Orientation: s,
  onClick: c,
  Click: d,
  ariaLabel: o = "Table of contents",
  className: a
}) {
  const i = t ?? n, h = l ?? s ?? "vertical", [u, b] = W(
    () => e[0]?.selector ?? null
  ), y = Q(u);
  y.current = u;
  const k = q(
    (m, g) => {
      if (b(m.selector), (c ?? d)?.({ text: m.text, selector: m.selector }), g) {
        try {
          g.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        } catch {
          g.scrollIntoView();
        }
        const f = g;
        f.getAttribute("tabindex") == null && f.tabIndex === -1 || f.tabIndex < 0 ? (f.getAttribute("tabindex"), f.setAttribute("tabindex", "-1"), f.focus({ preventScroll: !0 })) : f.focus({ preventScroll: !0 });
      }
    },
    [c, d]
  );
  return v1(() => {
    if (e.length === 0) return;
    const g = (() => {
      if (i) {
        const _ = document.querySelector(i);
        if (_) return _;
      }
      return window;
    })();
    let p = null;
    const f = /* @__PURE__ */ new Map(), v = () => {
      let _ = null, w = null;
      for (const z of e) {
        const A = document.querySelector(z.selector);
        if (!A) continue;
        f.set(z.selector, A);
        const O = A.getBoundingClientRect();
        let S = O.top;
        if (g !== window) {
          const $ = g.getBoundingClientRect();
          S = O.top - $.top;
        }
        S <= 80 ? (!w || S > w.el.getBoundingClientRect().top - (g !== window ? g.getBoundingClientRect().top : 0)) && (w = { sel: z.selector, el: A }) : (!_ || S < _.top) && (_ = { sel: z.selector, top: S });
      }
      const C = w?.sel ?? _?.sel ?? e[0]?.selector ?? null;
      C && C !== y.current && b(C);
    }, M = () => {
      v();
    };
    if (typeof IntersectionObserver < "u") {
      const _ = g === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
        root: g,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      };
      p = new IntersectionObserver((w) => {
        const C = w.filter((z) => z.isIntersecting).sort((z, A) => z.boundingClientRect.top - A.boundingClientRect.top);
        if (C[0]) {
          const z = C[0].target;
          for (const A of e) {
            if (document.querySelector(A.selector) === z) {
              b(A.selector);
              break;
            }
            if (A.selector.startsWith("#") && z.id === A.selector.slice(1)) {
              b(A.selector);
              break;
            }
          }
        } else
          v();
      }, _);
      for (const w of e) {
        const C = document.querySelector(w.selector);
        C && (p.observe(C), f.set(w.selector, C));
      }
    }
    return g === window ? (window.addEventListener("scroll", M, { passive: !0 }), v(), () => {
      window.removeEventListener("scroll", M), p?.disconnect();
    }) : (g.addEventListener("scroll", M, {
      passive: !0
    }), v(), () => {
      g.removeEventListener("scroll", M), p?.disconnect();
    });
  }, [e, i]), /* @__PURE__ */ r(
    "nav",
    {
      "aria-label": o,
      className: [Vt.root, Vt[h], a].filter(Boolean).join(" "),
      children: /* @__PURE__ */ r("ol", { className: Vt.list, children: e.map((m) => {
        const g = m.selector === u;
        return /* @__PURE__ */ r("li", { className: Vt.item, children: /* @__PURE__ */ r(
          "a",
          {
            href: m.selector.startsWith("#") || m.selector.startsWith(".") ? m.selector : `#${m.selector}`,
            className: [Vt.link, g ? Vt.active : null].filter(Boolean).join(" "),
            "aria-current": g ? "location" : void 0,
            onClick: (p) => {
              p.preventDefault();
              const f = document.querySelector(m.selector);
              k(m, f);
            },
            children: m.text
          }
        ) }, `${m.text}-${m.selector}`);
      }) })
    }
  );
}
const xf = "_root_u1med_1", yf = "_viewport_u1med_17", bf = "_slide_u1med_24", Mf = "_active_u1med_33", Cf = "_arrow_u1med_37", wf = "_prev_u1med_71", zf = "_next_u1med_75", Lf = "_pauseBtn_u1med_79", $f = "_indicators_u1med_110", Nf = "_indicator_u1med_110", Sf = "_indicatorActive_u1med_145", Te = {
  root: xf,
  viewport: yf,
  slide: bf,
  active: Mf,
  arrow: Cf,
  prev: wf,
  next: zf,
  pauseBtn: Lf,
  indicators: $f,
  indicator: Nf,
  indicatorActive: Sf
};
function J_({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: l = 0,
  auto: s,
  Auto: c,
  interval: d,
  Interval: o,
  pauseOnHover: a,
  PauseOnHover: i,
  showArrows: h,
  ShowArrows: u,
  showIndicators: b,
  ShowIndicators: y,
  onChange: k,
  Change: m,
  ariaLabel: g = "Carousel",
  className: p
}) {
  const f = t ?? n, v = f !== void 0, [M, _] = W(() => Math.min(Math.max(0, f ?? l), Math.max(0, e.length - 1))), w = v ? f : M, C = e.length === 0 ? 0 : Math.min(Math.max(0, w), e.length - 1), z = s ?? c ?? !1, A = d ?? o ?? 3e3, O = a ?? i ?? !0, S = h ?? u ?? !0, $ = b ?? y ?? !0, [x, N] = W(!1), [T, V] = W(!1), j = x || T, D = Q(null), P = E1(), U = q(
    (u1) => {
      const o1 = e.length === 0 ? 0 : (u1 % e.length + e.length) % e.length;
      v || _(o1), (k ?? m)?.(o1);
    },
    [v, k, m, e.length]
  ), e1 = q(() => {
    U(C - 1);
  }, [U, C]), G = q(() => {
    U(C + 1);
  }, [U, C]), m1 = q(
    (u1) => {
      U(u1);
    },
    [U]
  );
  v1(() => {
    if (!z || j || e.length <= 1) return;
    const u1 = setInterval(() => {
      U(C + 1);
    }, A);
    return () => clearInterval(u1);
  }, [z, j, A, C, U, e.length]);
  const d1 = (u1) => {
    e.length !== 0 && (u1.key === "ArrowLeft" ? (u1.preventDefault(), e1()) : u1.key === "ArrowRight" ? (u1.preventDefault(), G()) : u1.key === "Home" ? (u1.preventDefault(), m1(0)) : u1.key === "End" && (u1.preventDefault(), m1(e.length - 1)));
  }, l1 = () => {
    O && z && V(!0);
  }, B = () => {
    O && z && V(!1);
  }, c1 = () => {
    O && z && V(!0);
  }, r1 = () => {
    O && z && V(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ L(
    "div",
    {
      ref: D,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": g,
      tabIndex: 0,
      className: [Te.root, p].filter(Boolean).join(" "),
      onKeyDown: d1,
      onMouseEnter: l1,
      onMouseLeave: B,
      onFocusCapture: c1,
      onBlurCapture: r1,
      children: [
        /* @__PURE__ */ r("div", { id: P, className: Te.viewport, children: e.map((u1, o1) => {
          const w1 = o1 === C;
          return /* @__PURE__ */ r(
            "div",
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `Slide ${o1 + 1} of ${e.length}`,
              "aria-hidden": w1 ? void 0 : !0,
              hidden: !w1,
              className: [Te.slide, w1 ? Te.active : null].filter(Boolean).join(" "),
              children: u1
            },
            o1
          );
        }) }),
        S && e.length > 1 ? /* @__PURE__ */ L(b1, { children: [
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: [Te.arrow, Te.prev].filter(Boolean).join(" "),
              "aria-label": "Previous slide",
              "aria-controls": P,
              onClick: e1,
              children: "‹"
            }
          ),
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: [Te.arrow, Te.next].filter(Boolean).join(" "),
              "aria-label": "Next slide",
              "aria-controls": P,
              onClick: G,
              children: "›"
            }
          )
        ] }) : null,
        z ? /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: Te.pauseBtn,
            "aria-label": x ? "Resume" : "Pause",
            "aria-pressed": x,
            onClick: () => N((u1) => !u1),
            children: x ? "▶" : "⏸"
          }
        ) : null,
        $ && e.length > 1 ? /* @__PURE__ */ r(
          "div",
          {
            className: Te.indicators,
            role: "group",
            "aria-label": "Slide indicators",
            children: e.map((u1, o1) => {
              const w1 = o1 === C;
              return /* @__PURE__ */ r(
                "button",
                {
                  type: "button",
                  className: [
                    Te.indicator,
                    w1 ? Te.indicatorActive : null
                  ].filter(Boolean).join(" "),
                  "aria-label": `Go to slide ${o1 + 1}`,
                  "aria-current": w1 ? "true" : void 0,
                  "aria-controls": P,
                  onClick: () => m1(o1)
                },
                o1
              );
            })
          }
        ) : null
      ]
    }
  );
}
const Of = "_root_xvqqt_1", Af = "_group_xvqqt_20", Hf = "_itemWrapper_xvqqt_30", jf = "_treeitem_xvqqt_34", Tf = "_disabled_xvqqt_50", Vf = "_selected_xvqqt_60", Df = "_caret_xvqqt_66", Ef = "_caretIcon_xvqqt_113", qf = "_caretOpen_xvqqt_120", If = "_caretPlaceholder_xvqqt_124", Pf = "_label_xvqqt_130", Rf = "_loading_xvqqt_137", Bf = "_loadingRow_xvqqt_143", Ff = "_empty_xvqqt_149", Kf = "_checkbox_xvqqt_155", se = {
  root: Of,
  group: Af,
  itemWrapper: Hf,
  treeitem: jf,
  disabled: Tf,
  selected: Vf,
  caret: Df,
  caretIcon: Ef,
  caretOpen: qf,
  caretPlaceholder: If,
  label: Pf,
  loading: Rf,
  loadingRow: Bf,
  empty: Ff,
  checkbox: Kf
};
function Wf({
  indeterminate: e,
  ...t
}) {
  const n = Q(null);
  return v1(() => {
    n.current && (n.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ r("input", { ref: n, type: "checkbox", ...t });
}
function Q_({
  data: e,
  Data: t,
  children: n,
  Children: l,
  textProperty: s,
  TextProperty: c,
  keyProperty: d,
  KeyProperty: o,
  selectionMode: a,
  SelectionMode: i,
  selectedItem: h,
  SelectedItem: u,
  selectedItems: b,
  SelectedItems: y,
  defaultSelectedItem: k,
  defaultSelectedItems: m,
  onChange: g,
  Change: p,
  onExpand: f,
  Expand: v,
  onCollapse: M,
  Collapse: _,
  loadChildData: w,
  LoadChildData: C,
  template: z,
  Template: A,
  itemTemplate: O,
  ItemTemplate: S,
  ariaLabel: $,
  AriaLabel: x,
  allowCheckBoxes: N = !1,
  checkedKeys: T,
  defaultCheckedKeys: V,
  onCheckedChange: j,
  allowCheckChildren: D = !0,
  className: P
}) {
  const U = e ?? t ?? [], e1 = n ?? l, G = s ?? c ?? "text", m1 = d ?? o ?? "id", d1 = a ?? i ?? "single", l1 = $ ?? x ?? "Tree", B = w ?? C, c1 = z ?? A ?? O ?? S, r1 = q(
    (R) => {
      const X = R[m1];
      return X != null ? String(X) : String(R.id ?? "");
    },
    [m1]
  ), u1 = q(
    (R) => {
      const X = R[G];
      if (X != null) return String(X);
      const n1 = R.text;
      return n1 != null ? String(n1) : "";
    },
    [G]
  ), o1 = q(
    (R) => {
      if (e1) {
        const n1 = e1(R);
        if (n1 !== void 0) return n1;
      }
      const X = R.children;
      if (Array.isArray(X)) return X;
    },
    [e1]
  ), w1 = q(
    (R) => {
      const X = /* @__PURE__ */ new Set(), n1 = (_1) => {
        for (const h1 of _1) {
          const x1 = r1(h1);
          h1.expanded && X.add(x1);
          const H1 = o1(h1);
          H1 && H1.length > 0 && n1(H1);
        }
      };
      return n1(R), X;
    },
    [r1, o1]
  ), [L1, Y1] = W(
    () => w1(U)
  ), [y1, P1] = W(
    () => /* @__PURE__ */ new Map()
  ), [C1, oe] = W(() => /* @__PURE__ */ new Set()), ne = h ?? u, J1 = b ?? y, ae = d1 === "multiple" ? J1 !== void 0 : ne !== void 0, Z = q(() => {
    if (d1 === "multiple") {
      if (m && m.length > 0)
        return new Set(m.map((n1) => r1(n1)));
      const R = /* @__PURE__ */ new Set(), X = (n1) => {
        for (const _1 of n1) {
          _1.selected && R.add(r1(_1));
          const h1 = o1(_1);
          h1 && X(h1);
        }
      };
      return X(U), R;
    } else {
      if (k) return /* @__PURE__ */ new Set([r1(k)]);
      let R = null;
      const X = (n1) => {
        for (const _1 of n1) {
          if (_1.selected)
            return R = r1(_1), !0;
          const h1 = o1(_1);
          if (h1 && X(h1)) return !0;
        }
        return !1;
      };
      return X(U), R ? /* @__PURE__ */ new Set([R]) : /* @__PURE__ */ new Set();
    }
  }, [
    d1,
    k,
    m,
    r1,
    o1,
    U
  ]), [H, K] = W(
    () => Z()
  ), Y = g1(() => {
    if (d1 === "multiple") {
      if (J1 !== void 0) {
        const R = J1;
        return R ? new Set(R.map((X) => r1(X))) : /* @__PURE__ */ new Set();
      }
      return H;
    } else {
      if (ne !== void 0) {
        const R = ne;
        return R ? /* @__PURE__ */ new Set([r1(R)]) : /* @__PURE__ */ new Set();
      }
      return H;
    }
  }, [
    d1,
    J1,
    ne,
    H,
    r1
  ]), f1 = q(
    (R) => {
      let X;
      const n1 = (_1) => {
        for (const h1 of _1) {
          if (r1(h1) === R)
            return X = h1, !0;
          const H1 = y1.get(r1(h1)) ?? o1(h1);
          if (H1 && n1(H1)) return !0;
        }
        return !1;
      };
      if (n1(U), !X) {
        for (const _1 of y1.values())
          if (n1(_1)) break;
      }
      return X;
    },
    [U, y1, r1, o1]
  ), t1 = q(() => {
    const R = /* @__PURE__ */ new Map(), X = (n1) => {
      for (const _1 of n1) {
        const h1 = r1(_1);
        R.set(h1, _1);
        const H1 = y1.get(h1) ?? o1(_1);
        H1 && X(H1);
      }
    };
    return X(U), R;
  }, [U, y1, r1, o1]), k1 = q(
    (R) => {
      const X = r1(R);
      if (!R.disabled)
        if (d1 === "multiple") {
          const _1 = new Set(Y);
          _1.has(X) ? _1.delete(X) : _1.add(X), ae || K(_1);
          const h1 = g ?? p;
          if (h1) {
            const x1 = t1(), H1 = [];
            for (const A1 of _1) {
              const U1 = x1.get(A1) ?? f1(A1);
              U1 && H1.push(U1);
            }
            h1({ item: R, selectedItems: H1 });
          }
        } else if (!Y.has(X) || Y.size !== 1 || !Y.has(X)) {
          ae || K(/* @__PURE__ */ new Set([X]));
          const h1 = g ?? p;
          h1 && h1({ item: R, selectedItem: R });
        } else {
          const h1 = g ?? p;
          h1 && h1({ item: R, selectedItem: R });
        }
    },
    [
      r1,
      d1,
      Y,
      ae,
      g,
      p,
      t1,
      f1
    ]
  ), O1 = q(
    async (R) => {
      const X = r1(R);
      if (!!R.disabled) return;
      const _1 = L1.has(X), h1 = f ?? v, x1 = M ?? _, H1 = o1(R), U1 = y1.get(X) ?? H1, he = !(U1 !== void 0 && U1.length > 0) && B != null;
      if (_1) {
        Y1((te) => {
          const X1 = new Set(te);
          return X1.delete(X), X1;
        }), x1?.({ item: R });
        return;
      }
      if (he) {
        if (C1.has(X)) return;
        oe((te) => {
          const X1 = new Set(te);
          return X1.add(X), X1;
        });
        try {
          const X1 = await B(R);
          P1((Re) => {
            const Ve = new Map(Re);
            return Ve.set(X, X1), Ve;
          }), Y1((Re) => {
            const Ve = new Set(Re);
            return Ve.add(X), Ve;
          }), h1?.({ item: R });
        } catch {
        } finally {
          oe((te) => {
            const X1 = new Set(te);
            return X1.delete(X), X1;
          });
        }
        return;
      }
      Y1((te) => {
        const X1 = new Set(te);
        return X1.add(X), X1;
      }), h1?.({ item: R });
    },
    [
      r1,
      L1,
      o1,
      y1,
      B,
      C1,
      f,
      v,
      M,
      _
    ]
  ), R1 = g1(() => {
    const R = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), n1 = /* @__PURE__ */ new Set(), _1 = (h1, x1) => {
      for (const H1 of h1) {
        const A1 = r1(H1);
        R.has(A1) || R.set(A1, []), X.set(A1, x1), H1.disabled && n1.add(A1);
        const ee = y1.get(A1) ?? o1(H1);
        ee && ee.length > 0 && (R.set(
          A1,
          ee.map((he) => r1(he))
        ), _1(ee, A1));
      }
    };
    return _1(U, null), { childrenOf: R, parentOf: X, disabledKeys: n1 };
  }, [U, y1, r1, o1]), B1 = q(
    (R) => {
      const X = [], n1 = [...R1.childrenOf.get(R) ?? []];
      for (; n1.length > 0; ) {
        const _1 = n1.pop();
        X.push(_1), n1.push(...R1.childrenOf.get(_1) ?? []);
      }
      return X;
    },
    [R1]
  ), [re, ot] = W(
    () => new Set(V ?? [])
  ), J = T !== void 0 ? new Set(T) : re, $1 = q(
    (R) => {
      const X = R1.disabledKeys;
      return B1(R).filter((n1) => !X.has(n1));
    },
    [B1, R1]
  ), de = q(
    (R) => {
      if (J.has(R)) return !0;
      if (!N || !D) return !1;
      const X = $1(R);
      return X.length > 0 && X.every((n1) => J.has(n1));
    },
    [J, N, D, $1]
  ), Oe = q(
    (R) => {
      if (!N || !D || J.has(R))
        return !1;
      const X = $1(R);
      if (X.length === 0) return !1;
      const n1 = X.filter((_1) => J.has(_1)).length;
      return n1 > 0 && n1 < X.length;
    },
    [J, N, D, $1]
  ), ue = q(
    (R) => {
      if (!N || R.disabled) return;
      const X = r1(R), n1 = new Set(J);
      if (n1.has(X) || de(X)) {
        if (n1.delete(X), D)
          for (const _1 of $1(X)) n1.delete(_1);
      } else if (n1.add(X), D)
        for (const _1 of $1(X)) n1.add(_1);
      T === void 0 && ot(n1), j?.([...n1]);
    },
    [
      N,
      D,
      T,
      J,
      $1,
      r1,
      de,
      j
    ]
  ), N1 = g1(() => {
    const R = [], X = (n1, _1, h1) => {
      n1.forEach((x1, H1) => {
        const A1 = r1(x1), U1 = u1(x1), ee = y1.get(A1) ?? o1(x1);
        let he;
        y1.has(A1) ? he = y1.get(A1).length > 0 : ee !== void 0 ? he = ee.length > 0 : B ? he = !0 : he = !1;
        const te = L1.has(A1), X1 = !!x1.disabled, Re = n1.length, Ve = H1 + 1;
        if (R.push({
          item: x1,
          key: A1,
          text: U1,
          level: _1,
          posInSet: Ve,
          setSize: Re,
          hasChildren: he,
          expanded: te,
          parentKey: h1,
          disabled: X1
        }), he && te) {
          const at = y1.get(A1) ?? ee;
          at && at.length > 0 && X(at, _1 + 1, A1);
        }
      });
    };
    return X(U, 1, null), R;
  }, [
    U,
    r1,
    u1,
    o1,
    y1,
    L1,
    B,
    C1
  ]), [V1, Ae] = W(
    () => N1[0]?.key ?? null
  ), ke = Q(""), Q1 = Q(null), F = Q(null);
  v1(() => {
    if (!V1 && N1.length > 0) {
      const R = N1[0];
      R && Ae(R.key);
    } else if (V1 && !N1.some((R) => R.key === V1)) {
      const R = N1[0];
      Ae(R ? R.key : null);
    }
  }, [N1, V1]), v1(() => {
    if (V1) {
      const R = F.current?.querySelector(
        `[data-key="${CSS.escape(V1)}"]`
      );
      let X = null;
      R || (X = F.current?.querySelector(
        `[data-key="${V1}"]`
      ) ?? null);
      const n1 = R ?? X;
      n1 && document.activeElement !== n1 && F.current?.contains(document.activeElement) && n1.focus();
    }
  }, [V1]);
  const a1 = q((R) => {
    Ae(R), requestAnimationFrame(() => {
      const X = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(R) : R;
      let n1 = F.current?.querySelector(
        `[data-key="${X}"]`
      );
      n1 || (n1 = F.current?.querySelector(`[data-key="${R}"]`) ?? null), n1?.focus();
    });
  }, []), j1 = q(
    (R) => N1.find((n1) => n1.key === R)?.parentKey ?? null,
    [N1]
  ), D1 = q(
    (R) => {
      if (N1.length === 0) return;
      const X = V1 ? N1.findIndex((h1) => h1.key === V1) : -1, n1 = X >= 0 ? N1[X] : void 0;
      let _1 = null;
      if (R.key === "ArrowDown") {
        if (R.preventDefault(), X === -1)
          _1 = N1[0]?.key ?? null;
        else {
          const h1 = (X + 1) % N1.length, x1 = N1[h1];
          x1 && (_1 = x1.key);
        }
        _1 && a1(_1);
        return;
      }
      if (R.key === "ArrowUp") {
        if (R.preventDefault(), X === -1) {
          const h1 = N1[N1.length - 1];
          h1 && (_1 = h1.key);
        } else {
          const h1 = (X - 1 + N1.length) % N1.length, x1 = N1[h1];
          x1 && (_1 = x1.key);
        }
        _1 && a1(_1);
        return;
      }
      if (R.key === "ArrowRight") {
        if (R.preventDefault(), !n1) return;
        if (n1.hasChildren && !n1.expanded)
          O1(n1.item);
        else if (n1.hasChildren && n1.expanded) {
          const h1 = X + 1, x1 = N1[h1];
          x1 && x1.parentKey === n1.key && a1(x1.key);
        }
        return;
      }
      if (R.key === "ArrowLeft") {
        if (R.preventDefault(), !n1) return;
        if (n1.hasChildren && n1.expanded)
          O1(n1.item);
        else {
          const h1 = j1(n1.key);
          h1 && a1(h1);
        }
        return;
      }
      if (R.key === "Home") {
        R.preventDefault();
        const h1 = N1[0];
        h1 && a1(h1.key);
        return;
      }
      if (R.key === "End") {
        R.preventDefault();
        const h1 = N1[N1.length - 1];
        h1 && a1(h1.key);
        return;
      }
      if (R.key === "Enter" || R.key === " ") {
        if (R.key === " " && R.target?.tagName === "INPUT" || (R.preventDefault(), !n1)) return;
        if (R.key === " " && N) {
          const h1 = f1(n1.key);
          h1 && ue(h1);
          return;
        }
        k1(n1.item);
        return;
      }
      if (R.key.length === 1 && /^[a-zA-Z0-9]$/.test(R.key)) {
        R.preventDefault();
        const h1 = (ke.current + R.key).toLowerCase();
        ke.current = h1, Q1.current && clearTimeout(Q1.current), Q1.current = setTimeout(() => {
          ke.current = "";
        }, 500);
        const x1 = X >= 0 ? X + 1 : 0, U1 = [...N1, ...N1].slice(x1, x1 + N1.length).find((ee) => ee.text.toLowerCase().startsWith(h1));
        U1 && a1(U1.key);
        return;
      }
    },
    [
      N1,
      V1,
      a1,
      O1,
      k1,
      j1,
      N,
      ue
    ]
  ), Pe = q(() => {
    if (!V1 && N1.length > 0) {
      const R = N1[0];
      R && Ae(R.key);
    }
  }, [V1, N1]), le = (R, X, n1) => /* @__PURE__ */ r("ul", { role: "group", className: se.group, children: R.map((_1, h1) => {
    const x1 = r1(_1), H1 = u1(_1), A1 = y1.get(x1) ?? o1(_1);
    let U1;
    y1.has(x1) ? U1 = y1.get(x1).length > 0 : A1 !== void 0 ? U1 = A1.length > 0 : B ? U1 = !0 : U1 = !1;
    const ee = L1.has(x1), he = Y.has(x1), te = !!_1.disabled, X1 = C1.has(x1), Re = V1 === x1, Ve = R.length, at = h1 + 1, It = c1 ? c1(_1) : H1, Pt = N ? {
      checked: de(x1),
      indeterminate: Oe(x1)
    } : null;
    return /* @__PURE__ */ L("li", { role: "none", className: se.itemWrapper, children: [
      /* @__PURE__ */ L(
        "div",
        {
          role: "treeitem",
          "data-key": x1,
          tabIndex: Re ? 0 : -1,
          "aria-expanded": U1 ? ee : void 0,
          "aria-selected": he,
          "aria-level": X,
          "aria-setsize": Ve,
          "aria-posinset": at,
          "aria-disabled": te || void 0,
          "aria-busy": X1 || void 0,
          className: [
            se.treeitem,
            he ? se.selected : null,
            te ? se.disabled : null,
            Re ? se.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            a1(x1), te || k1(_1);
          },
          onFocus: () => Ae(x1),
          children: [
            N ? /* @__PURE__ */ r(
              Wf,
              {
                className: se.checkbox,
                checked: Pt?.checked ?? !1,
                indeterminate: Pt?.indeterminate ?? !1,
                disabled: te,
                "aria-label": `Select ${H1}`,
                onClick: (mt) => mt.stopPropagation(),
                onChange: () => ue(_1)
              }
            ) : null,
            U1 ? /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                className: se.caret,
                "aria-label": `${ee ? "Collapse" : "Expand"} ${H1}`,
                "aria-expanded": ee,
                tabIndex: -1,
                disabled: te,
                onClick: (mt) => {
                  mt.stopPropagation(), a1(x1), O1(_1);
                },
                children: /* @__PURE__ */ r(
                  "span",
                  {
                    "aria-hidden": "true",
                    className: [
                      se.caretIcon,
                      ee ? se.caretOpen : null
                    ].filter(Boolean).join(" "),
                    children: /* @__PURE__ */ r(M1, { name: "chevron-right", size: 10 })
                  }
                )
              }
            ) : /* @__PURE__ */ r(
              "span",
              {
                className: se.caretPlaceholder,
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ r("span", { className: se.label, children: It }),
            X1 ? /* @__PURE__ */ r("span", { className: se.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      U1 && ee ? X1 ? /* @__PURE__ */ r("div", { className: se.loadingRow, "aria-busy": "true", children: "Loading…" }) : A1 && A1.length > 0 ? le(A1, X + 1) : y1.has(x1) && y1.get(x1).length > 0 ? le(
        y1.get(x1),
        X + 1
      ) : (A1 && A1.length === 0, null) : null
    ] }, x1);
  }) });
  return /* @__PURE__ */ r(
    "div",
    {
      ref: F,
      role: "tree",
      "aria-label": l1,
      "aria-multiselectable": d1 === "multiple" || void 0,
      tabIndex: 0,
      className: [se.root, P].filter(Boolean).join(" "),
      onKeyDown: D1,
      onFocus: Pe,
      children: U.length === 0 ? /* @__PURE__ */ r("div", { className: se.empty, children: "No items" }) : le(U, 1)
    }
  );
}
const Zf = "_root_1plfv_1", Uf = "_panel_1plfv_8", Xf = "_header_1plfv_19", Gf = "_listbox_1plfv_28", Yf = "_option_1plfv_42", Jf = "_disabled_1plfv_57", Qf = "_active_1plfv_66", ep = "_selected_1plfv_70", tp = "_empty_1plfv_86", np = "_controls_1plfv_93", rp = "_reorder_1plfv_102", lp = "_btn_1plfv_110", T1 = {
  root: Zf,
  panel: Uf,
  header: Xf,
  listbox: Gf,
  option: Yf,
  disabled: Jf,
  active: Qf,
  selected: ep,
  empty: tp,
  controls: np,
  reorder: rp,
  btn: lp
};
function ce(e, t) {
  const n = e[t];
  return n != null ? String(n) : String(e.id ?? "");
}
function f0(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function ev({
  source: e,
  Source: t,
  target: n,
  Target: l,
  value: s,
  Value: c,
  targetValue: d,
  TargetValue: o,
  data: a,
  Data: i,
  onSourceChange: h,
  SourceChange: u,
  onTargetChange: b,
  TargetChange: y,
  keyProperty: k,
  KeyProperty: m,
  onMove: g,
  Move: p,
  ariaLabel: f,
  AriaLabel: v,
  className: M
}) {
  const _ = k ?? m ?? "id", w = f ?? v ?? "PickList", C = e ?? t ?? s ?? c ?? a ?? i ?? [], z = n ?? l ?? d ?? o ?? [], [A, O] = W(() => [
    ...C
  ]), [S, $] = W(() => [
    ...z
  ]);
  v1(() => {
    const H = e ?? t ?? s ?? c ?? a ?? i;
    H !== void 0 && O([...H]);
  }, [e, t, s, c, a, i]), v1(() => {
    const H = n ?? l ?? d ?? o;
    H !== void 0 && $([...H]);
  }, [n, l, d, o]);
  const [x, N] = W(
    () => /* @__PURE__ */ new Set()
  ), [T, V] = W(
    () => /* @__PURE__ */ new Set()
  ), [j, D] = W(() => {
    const H = C.findIndex((K) => !K.disabled);
    return H >= 0 ? H : 0;
  }), [P, U] = W(() => {
    const H = z.findIndex((K) => !K.disabled);
    return H >= 0 ? H : 0;
  }), e1 = g1(
    () => A.map((H, K) => H.disabled ? -1 : K).filter((H) => H >= 0),
    [A]
  ), G = g1(
    () => S.map((H, K) => H.disabled ? -1 : K).filter((H) => H >= 0),
    [S]
  );
  v1(() => {
    if (j >= A.length) {
      const H = e1[e1.length - 1];
      D(H ?? 0);
    } else if (A.length > 0 && e1.length > 0 && !e1.includes(j)) {
      const H = e1[0];
      H !== void 0 && D(H);
    }
  }, [j, A.length, e1]), v1(() => {
    if (P >= S.length) {
      const H = G[G.length - 1];
      U(H ?? 0);
    } else if (S.length > 0 && G.length > 0 && !G.includes(P)) {
      const H = G[0];
      H !== void 0 && U(H);
    }
  }, [P, S.length, G]), v1(() => {
    N((H) => {
      const K = /* @__PURE__ */ new Set();
      for (const Y of H)
        A.some(
          (t1) => ce(t1, _) === Y && !t1.disabled
        ) && K.add(Y);
      return K;
    });
  }, [A, _]), v1(() => {
    V((H) => {
      const K = /* @__PURE__ */ new Set();
      for (const Y of H)
        S.some(
          (t1) => ce(t1, _) === Y && !t1.disabled
        ) && K.add(Y);
      return K;
    });
  }, [S, _]);
  const m1 = q(
    (H) => {
      (h ?? u)?.(H);
    },
    [h, u]
  ), d1 = q(
    (H) => {
      (b ?? y)?.(H);
    },
    [b, y]
  ), l1 = q(
    (H) => {
      (g ?? p)?.(H);
    },
    [g, p]
  ), B = q(
    (H) => {
      const K = A[H];
      if (!K || K.disabled) return;
      const Y = ce(K, _);
      N((f1) => {
        const t1 = new Set(f1);
        return t1.has(Y) ? t1.delete(Y) : t1.add(Y), t1;
      }), D(H);
    },
    [A, _]
  ), c1 = q(
    (H) => {
      const K = S[H];
      if (!K || K.disabled) return;
      const Y = ce(K, _);
      V((f1) => {
        const t1 = new Set(f1);
        return t1.has(Y) ? t1.delete(Y) : t1.add(Y), t1;
      }), U(H);
    },
    [S, _]
  ), r1 = q(() => {
    const H = [], K = [];
    for (const k1 of A) {
      const O1 = ce(k1, _);
      x.has(O1) && !k1.disabled ? H.push(k1) : K.push(k1);
    }
    if (H.length === 0) return;
    const Y = K, f1 = [...S, ...H];
    O(Y), $(f1), N(/* @__PURE__ */ new Set());
    const t1 = new Set(H.map((k1) => ce(k1, _)));
    V(t1), m1(Y), d1(f1), l1({
      source: Y,
      target: f1,
      moved: H,
      direction: "toTarget"
    });
  }, [
    A,
    S,
    x,
    _,
    m1,
    d1,
    l1
  ]), u1 = q(() => {
    const H = [], K = [];
    for (const k1 of S) {
      const O1 = ce(k1, _);
      T.has(O1) && !k1.disabled ? H.push(k1) : K.push(k1);
    }
    if (H.length === 0) return;
    const Y = K, f1 = [...A, ...H];
    $(Y), O(f1), V(/* @__PURE__ */ new Set());
    const t1 = new Set(H.map((k1) => ce(k1, _)));
    N(t1), m1(f1), d1(Y), l1({
      source: f1,
      target: Y,
      moved: H,
      direction: "toSource"
    });
  }, [
    A,
    S,
    T,
    _,
    m1,
    d1,
    l1
  ]), o1 = q(() => {
    const H = A.filter((f1) => !f1.disabled);
    if (H.length === 0) return;
    const K = A.filter((f1) => !!f1.disabled), Y = [...S, ...H];
    O(K), $(Y), N(/* @__PURE__ */ new Set()), m1(K), d1(Y), l1({
      source: K,
      target: Y,
      moved: H,
      direction: "allToTarget"
    });
  }, [
    A,
    S,
    _,
    m1,
    d1,
    l1
  ]), w1 = q(() => {
    const H = S.filter((f1) => !f1.disabled);
    if (H.length === 0) return;
    const K = S.filter((f1) => !!f1.disabled), Y = [...A, ...H];
    $(K), O(Y), V(/* @__PURE__ */ new Set()), m1(Y), d1(K), l1({
      source: Y,
      target: K,
      moved: H,
      direction: "allToSource"
    });
  }, [A, S, m1, d1, l1]), L1 = q(() => {
    if (T.size === 0) return;
    const H = [...S], K = T, Y = [];
    for (let t1 = 1; t1 < H.length; t1++) {
      const k1 = H[t1], O1 = H[t1 - 1];
      if (!k1 || !O1) continue;
      const R1 = ce(k1, _), B1 = ce(O1, _);
      K.has(R1) && !K.has(B1) && !k1.disabled && !O1.disabled && (H[t1 - 1] = k1, H[t1] = O1, Y.push(k1));
    }
    if (Y.length === 0) return;
    $(H), d1(H), l1({ source: A, target: H, moved: Y, direction: "up" });
    const f1 = Array.from(K)[0];
    if (f1) {
      const t1 = H.findIndex(
        (k1) => ce(k1, _) === f1
      );
      t1 >= 0 && U(t1);
    }
  }, [
    S,
    T,
    _,
    A,
    d1,
    l1
  ]), Y1 = q(() => {
    if (T.size === 0) return;
    const H = [...S], K = T, Y = [];
    for (let t1 = H.length - 2; t1 >= 0; t1--) {
      const k1 = H[t1], O1 = H[t1 + 1];
      if (!k1 || !O1) continue;
      const R1 = ce(k1, _), B1 = ce(O1, _);
      K.has(R1) && !K.has(B1) && !k1.disabled && !O1.disabled && (H[t1] = O1, H[t1 + 1] = k1, Y.push(k1));
    }
    if (Y.length === 0) return;
    $(H), d1(H), l1({ source: A, target: H, moved: Y, direction: "down" });
    const f1 = Array.from(K)[0];
    if (f1) {
      const t1 = H.findIndex(
        (k1) => ce(k1, _) === f1
      );
      t1 >= 0 && U(t1);
    }
  }, [
    S,
    T,
    _,
    A,
    d1,
    l1
  ]), y1 = x.size > 0, P1 = T.size > 0, C1 = Q(""), oe = Q(
    null
  ), ne = Q(""), J1 = Q(
    null
  ), we = q(
    (H) => {
      if (A.length === 0) return;
      const K = e1;
      if (K.length === 0) return;
      const Y = K.includes(j) ? j : K[0] ?? 0;
      let f1 = -1;
      if (H.key === "ArrowDown") {
        H.preventDefault();
        const t1 = K.indexOf(Y);
        f1 = K[(t1 + 1) % K.length] ?? K[0] ?? 0;
      } else if (H.key === "ArrowUp") {
        H.preventDefault();
        const t1 = K.indexOf(Y);
        f1 = K[(t1 - 1 + K.length) % K.length] ?? K[0] ?? 0;
      } else if (H.key === "Home")
        H.preventDefault(), f1 = K[0] ?? 0;
      else if (H.key === "End")
        H.preventDefault(), f1 = K[K.length - 1] ?? 0;
      else if (H.key === "Enter" || H.key === " ") {
        H.preventDefault(), B(Y);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(H.key)) {
        H.preventDefault();
        const t1 = (C1.current + H.key).toLowerCase();
        C1.current = t1, oe.current && clearTimeout(oe.current), oe.current = setTimeout(() => {
          C1.current = "";
        }, 500);
        const k1 = [...K, ...K], O1 = K.indexOf(Y) + 1, R1 = k1.slice(O1).find(
          (B1) => f0(A[B1]).toLowerCase().startsWith(t1)
        );
        R1 != null && D(R1);
        return;
      }
      f1 >= 0 && D(f1);
    },
    [A, e1, j, B]
  ), ge = q(
    (H) => {
      if (S.length === 0) return;
      const K = G;
      if (K.length === 0) return;
      const Y = K.includes(P) ? P : K[0] ?? 0;
      let f1 = -1;
      if (H.key === "ArrowDown") {
        H.preventDefault();
        const t1 = K.indexOf(Y);
        f1 = K[(t1 + 1) % K.length] ?? K[0] ?? 0;
      } else if (H.key === "ArrowUp") {
        H.preventDefault();
        const t1 = K.indexOf(Y);
        f1 = K[(t1 - 1 + K.length) % K.length] ?? K[0] ?? 0;
      } else if (H.key === "Home")
        H.preventDefault(), f1 = K[0] ?? 0;
      else if (H.key === "End")
        H.preventDefault(), f1 = K[K.length - 1] ?? 0;
      else if (H.key === "Enter" || H.key === " ") {
        H.preventDefault(), c1(Y);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(H.key)) {
        H.preventDefault();
        const t1 = (ne.current + H.key).toLowerCase();
        ne.current = t1, J1.current && clearTimeout(J1.current), J1.current = setTimeout(() => {
          ne.current = "";
        }, 500);
        const k1 = [...K, ...K], O1 = K.indexOf(Y) + 1, R1 = k1.slice(O1).find(
          (B1) => f0(S[B1]).toLowerCase().startsWith(t1)
        );
        R1 != null && U(R1);
        return;
      }
      f1 >= 0 && U(f1);
    },
    [S, G, P, c1]
  ), ae = Q(null), Z = Q(null);
  return /* @__PURE__ */ L(
    "div",
    {
      className: [T1.root, M].filter(Boolean).join(" "),
      "aria-label": w,
      children: [
        /* @__PURE__ */ L("div", { className: T1.panel, children: [
          /* @__PURE__ */ r("div", { className: T1.header, children: "Source" }),
          /* @__PURE__ */ r(
            "div",
            {
              ref: ae,
              role: "listbox",
              "aria-label": "Source",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: T1.listbox,
              onKeyDown: we,
              children: A.length === 0 ? (
                // Disabled option, not static text: a bare placeholder inside
                // role="listbox" fails aria-required-children, while hiding it
                // (aria-hidden) strands AT users without an empty-state hint.
                /* @__PURE__ */ r(
                  "div",
                  {
                    className: T1.empty,
                    role: "option",
                    "aria-selected": !1,
                    "aria-disabled": !0,
                    children: "No items"
                  }
                )
              ) : A.map((H, K) => {
                const Y = ce(H, _), f1 = x.has(Y), t1 = K === j, k1 = !!H.disabled;
                return /* @__PURE__ */ r(
                  "div",
                  {
                    role: "option",
                    "aria-selected": f1,
                    "aria-disabled": k1 || void 0,
                    tabIndex: -1,
                    "data-active": t1 || void 0,
                    className: [
                      T1.option,
                      f1 ? T1.selected : null,
                      t1 ? T1.active : null,
                      k1 ? T1.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => B(K),
                    children: f0(H)
                  },
                  Y
                );
              })
            }
          )
        ] }),
        /* @__PURE__ */ L("div", { className: T1.controls, children: [
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: T1.btn,
              "aria-label": "Move selected to target",
              "aria-disabled": !y1 || void 0,
              disabled: !y1,
              onClick: r1,
              children: "›"
            }
          ),
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: T1.btn,
              "aria-label": "Move all to target",
              "aria-disabled": A.filter((H) => !H.disabled).length === 0 || void 0,
              disabled: A.filter((H) => !H.disabled).length === 0,
              onClick: o1,
              children: "»"
            }
          ),
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: T1.btn,
              "aria-label": "Move all",
              "aria-disabled": A.filter((H) => !H.disabled).length === 0 || void 0,
              disabled: A.filter((H) => !H.disabled).length === 0,
              onClick: o1,
              children: "»"
            }
          ),
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: T1.btn,
              "aria-label": "Move selected to source",
              "aria-disabled": !P1 || void 0,
              disabled: !P1,
              onClick: u1,
              children: "‹"
            }
          ),
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: T1.btn,
              "aria-label": "Move all to source",
              "aria-disabled": S.filter((H) => !H.disabled).length === 0 || void 0,
              disabled: S.filter((H) => !H.disabled).length === 0,
              onClick: w1,
              children: "«"
            }
          )
        ] }),
        /* @__PURE__ */ L("div", { className: T1.panel, children: [
          /* @__PURE__ */ r("div", { className: T1.header, children: "Target" }),
          /* @__PURE__ */ r(
            "div",
            {
              ref: Z,
              role: "listbox",
              "aria-label": "Target",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: T1.listbox,
              onKeyDown: ge,
              children: S.length === 0 ? (
                // Disabled option, not static text: a bare placeholder inside
                // role="listbox" fails aria-required-children, while hiding it
                // (aria-hidden) strands AT users without an empty-state hint.
                /* @__PURE__ */ r(
                  "div",
                  {
                    className: T1.empty,
                    role: "option",
                    "aria-selected": !1,
                    "aria-disabled": !0,
                    children: "No items"
                  }
                )
              ) : S.map((H, K) => {
                const Y = ce(H, _), f1 = T.has(Y), t1 = K === P, k1 = !!H.disabled;
                return /* @__PURE__ */ r(
                  "div",
                  {
                    role: "option",
                    "aria-selected": f1,
                    "aria-disabled": k1 || void 0,
                    tabIndex: -1,
                    "data-active": t1 || void 0,
                    className: [
                      T1.option,
                      f1 ? T1.selected : null,
                      t1 ? T1.active : null,
                      k1 ? T1.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => c1(K),
                    children: f0(H)
                  },
                  Y
                );
              })
            }
          ),
          /* @__PURE__ */ L("div", { className: T1.reorder, children: [
            /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                className: T1.btn,
                "aria-label": "Move up",
                "aria-disabled": !P1 || void 0,
                disabled: !P1,
                onClick: L1,
                children: /* @__PURE__ */ r(M1, { name: "chevron-up", size: "sm" })
              }
            ),
            /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                className: T1.btn,
                "aria-label": "Move down",
                "aria-disabled": !P1 || void 0,
                disabled: !P1,
                onClick: Y1,
                children: /* @__PURE__ */ r(M1, { name: "chevron-down", size: "sm" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const op = "_root_16u8q_1", ap = "_header_16u8q_8", sp = "_title_16u8q_15", cp = "_navBtn_16u8q_20", ip = "_resources_16u8q_39", dp = "_resource_16u8q_39", up = "_grid_16u8q_50", hp = "_timeCol_16u8q_55", fp = "_timeCell_16u8q_61", pp = "_dayCol_16u8q_66", mp = "_dayHeader_16u8q_73", _p = "_slot_16u8q_81", vp = "_event_16u8q_91", Me = {
  root: op,
  header: ap,
  title: sp,
  navBtn: cp,
  resources: ip,
  resource: dp,
  grid: up,
  timeCol: hp,
  timeCell: fp,
  dayCol: pp,
  dayHeader: mp,
  slot: _p,
  event: vp
};
function v2(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function tv({
  data: e,
  view: t = "week",
  date: n,
  onDateChange: l,
  resources: s,
  onEventClick: c,
  onSlotClick: d,
  ariaLabel: o = "Scheduler",
  className: a
}) {
  const [i, h] = W(
    n ?? /* @__PURE__ */ new Date()
  ), u = n ?? i, b = (m) => {
    n || h(m), l?.(m);
  }, y = t === "day" ? [u] : t === "week" ? Array.from({ length: 7 }, (m, g) => {
    const p = new Date(u);
    return p.setDate(u.getDate() - u.getDay() + g), p;
  }) : Array.from({ length: 30 }, (m, g) => {
    const p = new Date(u);
    return p.setDate(1 + g), p;
  }), k = Array.from({ length: 12 }, (m, g) => 8 + g);
  return /* @__PURE__ */ L(
    "div",
    {
      className: [Me.root, a].filter(Boolean).join(" "),
      role: "group",
      "aria-label": o,
      children: [
        /* @__PURE__ */ L("div", { className: Me.header, children: [
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: Me.navBtn,
              "aria-label": "Previous",
              onClick: () => {
                const m = new Date(u);
                m.setDate(m.getDate() - 7), b(m);
              },
              children: "‹"
            }
          ),
          /* @__PURE__ */ r("span", { className: Me.title, children: u.toLocaleDateString() }),
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: Me.navBtn,
              "aria-label": "Next",
              onClick: () => {
                const m = new Date(u);
                m.setDate(m.getDate() + 7), b(m);
              },
              children: "›"
            }
          )
        ] }),
        s && /* @__PURE__ */ r("div", { className: Me.resources, children: s.map((m) => /* @__PURE__ */ r(
          "div",
          {
            className: Me.resource,
            role: "presentation",
            "aria-label": m.name,
            children: m.name
          },
          m.id
        )) }),
        /* @__PURE__ */ L("div", { className: Me.grid, role: "presentation", children: [
          /* @__PURE__ */ r("div", { className: Me.timeCol, role: "presentation", children: k.map((m) => /* @__PURE__ */ L("div", { className: Me.timeCell, children: [
            m,
            ":00"
          ] }, m)) }),
          y.map((m) => /* @__PURE__ */ L(
            "div",
            {
              className: Me.dayCol,
              role: "presentation",
              title: m.toLocaleDateString(),
              onClick: () => d?.({ date: m }),
              tabIndex: 0,
              "aria-label": m.toLocaleDateString(),
              children: [
                /* @__PURE__ */ r("div", { className: Me.dayHeader, children: m.toLocaleDateString(void 0, {
                  weekday: "short",
                  month: "short",
                  day: "numeric"
                }) }),
                k.map((g) => /* @__PURE__ */ r(
                  "div",
                  {
                    className: Me.slot,
                    tabIndex: -1,
                    onClick: () => {
                      const p = new Date(m);
                      p.setHours(g), d?.({ date: p });
                    }
                  },
                  g
                )),
                e.filter((g) => g.start.toDateString() === m.toDateString()).map((g) => /* @__PURE__ */ r(
                  "button",
                  {
                    type: "button",
                    className: Me.event,
                    "aria-label": `${g.title} ${v2(g.start)} - ${v2(g.end)}`,
                    "aria-pressed": !1,
                    onClick: () => c?.({ event: g }),
                    children: g.title
                  },
                  g.id
                ))
              ]
            },
            m.toISOString()
          ))
        ] })
      ]
    }
  );
}
const gp = "_root_caexi_1", kp = "_header_caexi_8", xp = "_headerCell_caexi_15", yp = "_timeline_caexi_21", bp = "_row_caexi_26", Mp = "_taskName_caexi_32", Cp = "_timelineCell_caexi_37", wp = "_bar_caexi_43", zp = "_progress_caexi_56", Lp = "_dep_caexi_61", Xe = {
  root: gp,
  header: kp,
  headerCell: xp,
  timeline: yp,
  row: bp,
  taskName: Mp,
  timelineCell: Cp,
  bar: wp,
  progress: zp,
  dep: Lp
};
function nv({
  tasks: e,
  view: t = "week",
  onTaskClick: n,
  ariaLabel: l = "Gantt",
  className: s
}) {
  const [c, d] = W(null);
  return /* @__PURE__ */ L(
    "div",
    {
      className: [Xe.root, s].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": l,
      "aria-rowcount": e.length,
      children: [
        /* @__PURE__ */ L("div", { className: Xe.header, role: "row", children: [
          /* @__PURE__ */ r("div", { className: Xe.headerCell, role: "columnheader", children: "Task" }),
          /* @__PURE__ */ L("div", { className: Xe.timeline, role: "columnheader", children: [
            "Timeline (",
            t,
            ")"
          ] })
        ] }),
        e.map((o) => /* @__PURE__ */ L(
          "div",
          {
            className: Xe.row,
            role: "row",
            "aria-selected": c === o.id,
            children: [
              /* @__PURE__ */ r("div", { className: Xe.taskName, role: "gridcell", children: o.name }),
              /* @__PURE__ */ L("div", { className: Xe.timelineCell, role: "gridcell", children: [
                /* @__PURE__ */ r(
                  "div",
                  {
                    className: Xe.bar,
                    role: "button",
                    "aria-label": `${o.name} ${o.start.toLocaleDateString()} - ${o.end.toLocaleDateString()}${o.progress !== void 0 ? `, ${o.progress}% complete` : ""}`,
                    "aria-pressed": c === o.id,
                    tabIndex: 0,
                    onClick: () => {
                      d(o.id), n?.({ task: o });
                    },
                    onKeyDown: (a) => {
                      (a.key === "Enter" || a.key === " ") && (a.preventDefault(), d(o.id), n?.({ task: o }));
                    },
                    children: /* @__PURE__ */ r(
                      "div",
                      {
                        className: Xe.progress,
                        style: { width: `${o.progress ?? 0}%` }
                      }
                    )
                  }
                ),
                o.dependencies?.map((a) => /* @__PURE__ */ r("svg", { className: Xe.dep, "aria-hidden": "true", children: /* @__PURE__ */ r(
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
const $p = "_root_reqz6_1", Np = "_fields_reqz6_6", Sp = "_chip_reqz6_13", Op = "_table_reqz6_35", Ap = "_totalRow_reqz6_55", Hp = "_total_reqz6_55", Dt = {
  root: $p,
  fields: Np,
  chip: Sp,
  table: Op,
  totalRow: Ap,
  total: Hp
}, p0 = {
  Sum: (e) => e.reduce((t, n) => t + n, 0),
  Average: (e) => e.length ? e.reduce((t, n) => t + n, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function e0(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function rv({
  data: e,
  rowFields: t = [],
  columnFields: n = [],
  aggregateFields: l = [],
  onFieldsChange: s,
  ariaLabel: c = "Pivot table",
  className: d
}) {
  const o = t, a = n, i = l, h = (g, p, f) => {
    const v = g === "row" ? o.filter((w) => w.property !== p) : o, M = g === "col" ? a.filter((w) => w.property !== p) : a, _ = g === "agg" ? i.filter((w) => !(w.property === p && w.aggregate === f)) : i;
    s?.({
      rowFields: v,
      columnFields: M,
      aggregateFields: _
    });
  }, u = (g, p) => p.map((f) => String(g[f.property])).join(""), b = [
    ...new Set(o.length ? e.map((g) => u(g, o)) : [""])
  ].sort(), y = [
    ...new Set(a.length ? e.map((g) => u(g, a)) : [""])
  ].sort(), k = (g, p, f) => {
    const v = e.filter(
      (_) => u(_, o) === g && u(_, a) === p
    ), M = v.map((_) => Number(_[f.property])).filter((_) => !Number.isNaN(_));
    return !M.length && f.aggregate !== "Count" ? 0 : p0[f.aggregate](
      f.aggregate === "Count" ? v.map(() => 1) : M
    );
  }, m = (g, p, f, v) => /* @__PURE__ */ L(
    "button",
    {
      type: "button",
      className: Dt.chip,
      "aria-label": `Remove ${g} field ${f}`,
      onClick: () => h(g, p, v),
      children: [
        f,
        v ? ` (${v})` : ""
      ]
    },
    `${g}-${f}-${v ?? ""}`
  );
  return /* @__PURE__ */ L("div", { className: [Dt.root, d].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ L("div", { className: Dt.fields, children: [
      o.map((g) => m("row", g.property, g.title ?? g.property)),
      a.map((g) => m("col", g.property, g.title ?? g.property)),
      i.map(
        (g) => m("agg", g.property, g.title ?? g.property, g.aggregate)
      )
    ] }),
    /* @__PURE__ */ L("table", { className: Dt.table, role: "grid", "aria-label": c, children: [
      /* @__PURE__ */ r("thead", { children: /* @__PURE__ */ L("tr", { children: [
        /* @__PURE__ */ r("th", { scope: "col", children: o.map((g) => g.title ?? g.property).join(" / ") || "Total" }),
        y.map((g) => /* @__PURE__ */ r("th", { scope: "col", children: g || "—" }, g)),
        /* @__PURE__ */ r("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ L("tbody", { children: [
        b.map((g) => /* @__PURE__ */ L("tr", { children: [
          /* @__PURE__ */ r("th", { scope: "row", children: g || "—" }),
          y.map((p) => /* @__PURE__ */ r(
            "td",
            {
              title: e0(
                k(
                  g,
                  p,
                  i[0] ?? { property: "", aggregate: "Count" }
                )
              ),
              children: i.length ? e0(k(g, p, i[0])) : ""
            },
            p
          )),
          /* @__PURE__ */ r("td", { className: Dt.total, children: i.length ? e0(
            p0[i[0].aggregate](
              y.flatMap(
                (p) => e.filter(
                  (f) => u(f, o) === g && u(f, a) === p
                ).map((f) => Number(f[i[0].property]))
              ).filter((p) => !Number.isNaN(p))
            )
          ) : "" })
        ] }, g)),
        /* @__PURE__ */ L("tr", { className: Dt.totalRow, children: [
          /* @__PURE__ */ r("th", { scope: "row", children: "Total" }),
          y.map((g) => /* @__PURE__ */ r("td", { children: i.length ? e0(
            p0[i[0].aggregate](
              e.filter((p) => u(p, a) === g).map((p) => Number(p[i[0].property])).filter((p) => !Number.isNaN(p))
            )
          ) : "" }, g)),
          /* @__PURE__ */ r("td", { children: i.length ? e0(
            p0[i[0].aggregate](
              e.map((g) => Number(g[i[0].property])).filter((g) => !Number.isNaN(g))
            )
          ) : "" })
        ] })
      ] })
    ] })
  ] });
}
const jp = "_root_48ysw_1", Tp = "_reverse_48ysw_10", Vp = "_item_48ysw_14", Dp = "_marker_48ysw_35", Ep = "_body_48ysw_46", qp = "_label_48ysw_50", Ip = "_content_48ysw_56", Mt = {
  root: jp,
  reverse: Tp,
  item: Vp,
  marker: Dp,
  body: Ep,
  label: qp,
  content: Ip
};
function lv({
  items: e,
  reverse: t = !1,
  ariaLabel: n = "Timeline",
  className: l
}) {
  const s = t ? [...e].reverse() : e;
  return /* @__PURE__ */ r(
    "ol",
    {
      className: [Mt.root, t ? Mt.reverse : "", l].filter(Boolean).join(" "),
      role: "list",
      "aria-label": n,
      children: s.map((c, d) => /* @__PURE__ */ L("li", { className: Mt.item, children: [
        /* @__PURE__ */ r("span", { className: Mt.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ L("div", { className: Mt.body, children: [
          /* @__PURE__ */ r("div", { className: Mt.label, children: c.label }),
          c.content !== void 0 && /* @__PURE__ */ r("div", { className: Mt.content, children: c.content })
        ] })
      ] }, d))
    }
  );
}
const Pp = "_root_4ls7q_1", Rp = "_header_4ls7q_13", Bp = "_headCell_4ls7q_22", Fp = "_row_4ls7q_32", Kp = "_cell_4ls7q_37", t0 = {
  root: Pp,
  header: Rp,
  headCell: Bp,
  row: Fp,
  cell: Kp
};
function ov({
  count: e,
  rowHeight: t = 40,
  height: n = 320,
  loadData: l,
  columns: s = [],
  ariaLabel: c = "Virtual grid",
  className: d
}) {
  const [o, a] = W(
    /* @__PURE__ */ new Map()
  ), [i, h] = W(0), u = Q(/* @__PURE__ */ new Set()), b = Math.ceil(n / t), y = Math.max(0, Math.floor(i / t) - 3), k = Math.min(e, y + b + 6), m = q(
    (p, f) => {
      let v = !1;
      for (let M = p; M < f; M++)
        !o.has(M) && !u.current.has(M) && (v = !0);
      if (v) {
        for (let M = p; M < f; M++) u.current.add(M);
        l({ skip: p, top: f }).then((M) => {
          a((_) => {
            const w = new Map(_);
            return M.forEach((C, z) => w.set(p + z, C)), w;
          });
          for (let _ = p; _ < f; _++) u.current.delete(_);
        });
      }
    },
    [o, l]
  );
  v1(() => {
    m(y, k);
  }, [y, k]);
  const g = [];
  for (let p = y; p < k; p++) {
    const f = o.get(p) ?? {};
    g.push(
      /* @__PURE__ */ r(
        "div",
        {
          className: t0.row,
          role: "row",
          style: { height: t },
          children: s.map((v) => /* @__PURE__ */ r(
            "div",
            {
              role: "gridcell",
              className: t0.cell,
              style: v.width ? { width: v.width } : void 0,
              children: String(f[v.property] ?? "")
            },
            v.property
          ))
        },
        p
      )
    );
  }
  return /* @__PURE__ */ L(
    "div",
    {
      className: [t0.root, d].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": c,
      "aria-rowcount": e,
      tabIndex: 0,
      style: { height: n },
      onScroll: (p) => h(p.target.scrollTop),
      onKeyDown: (p) => {
        const f = p.currentTarget;
        p.key === "ArrowDown" ? (p.preventDefault(), f.scrollTop += t) : p.key === "ArrowUp" ? (p.preventDefault(), f.scrollTop -= t) : p.key === "PageDown" ? (p.preventDefault(), f.scrollTop += n) : p.key === "PageUp" && (p.preventDefault(), f.scrollTop -= n);
      },
      children: [
        /* @__PURE__ */ r("div", { style: { height: y * t }, "aria-hidden": "true" }),
        /* @__PURE__ */ r("div", { className: t0.header, role: "row", children: s.map((p) => /* @__PURE__ */ r(
          "div",
          {
            role: "columnheader",
            className: t0.headCell,
            style: {
              height: t,
              ...p.width ? { width: p.width } : {}
            },
            children: p.title ?? p.property
          },
          p.property
        )) }),
        g,
        /* @__PURE__ */ r(
          "div",
          {
            style: { height: Math.max(0, (e - k) * t) },
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
var Ie;
((e) => {
  class t {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(o, a, i, h) {
      if (this.version = o, this.errorCorrectionLevel = a, o < t.MIN_VERSION || o > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (h < -1 || h > 7) throw new RangeError("Mask value out of range");
      this.size = o * 4 + 17;
      let u = [];
      for (let y = 0; y < this.size; y++) u.push(!1);
      for (let y = 0; y < this.size; y++)
        this.modules.push(u.slice()), this.isFunction.push(u.slice());
      this.drawFunctionPatterns();
      const b = this.addEccAndInterleave(i);
      if (this.drawCodewords(b), h == -1) {
        let y = 1e9;
        for (let k = 0; k < 8; k++) {
          this.applyMask(k), this.drawFormatBits(k);
          const m = this.getPenaltyScore();
          m < y && (h = k, y = m), this.applyMask(k);
        }
      }
      s(0 <= h && h <= 7), this.mask = h, this.applyMask(h), this.drawFormatBits(h), this.isFunction = [];
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
      const i = e.QrSegment.makeSegments(o);
      return t.encodeSegments(i, a);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(o, a) {
      const i = e.QrSegment.makeBytes(o);
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
    static encodeSegments(o, a, i = 1, h = 40, u = -1, b = !0) {
      if (!(t.MIN_VERSION <= i && i <= h && h <= t.MAX_VERSION) || u < -1 || u > 7)
        throw new RangeError("Invalid value");
      let y, k;
      for (y = i; ; y++) {
        const f = t.getNumDataCodewords(y, a) * 8, v = c.getTotalBits(o, y);
        if (v <= f) {
          k = v;
          break;
        }
        if (y >= h)
          throw new RangeError("Data too long");
      }
      for (const f of [
        t.Ecc.MEDIUM,
        t.Ecc.QUARTILE,
        t.Ecc.HIGH
      ])
        b && k <= t.getNumDataCodewords(y, f) * 8 && (a = f);
      let m = [];
      for (const f of o) {
        n(f.mode.modeBits, 4, m), n(f.numChars, f.mode.numCharCountBits(y), m);
        for (const v of f.getData()) m.push(v);
      }
      s(m.length == k);
      const g = t.getNumDataCodewords(y, a) * 8;
      s(m.length <= g), n(0, Math.min(4, g - m.length), m), n(0, (8 - m.length % 8) % 8, m), s(m.length % 8 == 0);
      for (let f = 236; m.length < g; f ^= 253)
        n(f, 8, m);
      let p = [];
      for (; p.length * 8 < m.length; ) p.push(0);
      return m.forEach(
        (f, v) => p[v >>> 3] |= f << 7 - (v & 7)
      ), new t(y, a, p, u);
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
      for (let i = 0; i < this.size; i++)
        this.setFunctionModule(6, i, i % 2 == 0), this.setFunctionModule(i, 6, i % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const o = this.getAlignmentPatternPositions(), a = o.length;
      for (let i = 0; i < a; i++)
        for (let h = 0; h < a; h++)
          i == 0 && h == 0 || i == 0 && h == a - 1 || i == a - 1 && h == 0 || this.drawAlignmentPattern(o[i], o[h]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(o) {
      const a = this.errorCorrectionLevel.formatBits << 3 | o;
      let i = a;
      for (let u = 0; u < 10; u++) i = i << 1 ^ (i >>> 9) * 1335;
      const h = (a << 10 | i) ^ 21522;
      s(h >>> 15 == 0);
      for (let u = 0; u <= 5; u++)
        this.setFunctionModule(8, u, l(h, u));
      this.setFunctionModule(8, 7, l(h, 6)), this.setFunctionModule(8, 8, l(h, 7)), this.setFunctionModule(7, 8, l(h, 8));
      for (let u = 9; u < 15; u++)
        this.setFunctionModule(14 - u, 8, l(h, u));
      for (let u = 0; u < 8; u++)
        this.setFunctionModule(this.size - 1 - u, 8, l(h, u));
      for (let u = 8; u < 15; u++)
        this.setFunctionModule(8, this.size - 15 + u, l(h, u));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    // Draws two copies of the version bits (with its own error correction code),
    // based on this object's version field, iff 7 <= version <= 40.
    drawVersion() {
      if (this.version < 7) return;
      let o = this.version;
      for (let i = 0; i < 12; i++) o = o << 1 ^ (o >>> 11) * 7973;
      const a = this.version << 12 | o;
      s(a >>> 18 == 0);
      for (let i = 0; i < 18; i++) {
        const h = l(a, i), u = this.size - 11 + i % 3, b = Math.floor(i / 3);
        this.setFunctionModule(u, b, h), this.setFunctionModule(b, u, h);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(o, a) {
      for (let i = -4; i <= 4; i++)
        for (let h = -4; h <= 4; h++) {
          const u = Math.max(Math.abs(h), Math.abs(i)), b = o + h, y = a + i;
          0 <= b && b < this.size && 0 <= y && y < this.size && this.setFunctionModule(b, y, u != 2 && u != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(o, a) {
      for (let i = -2; i <= 2; i++)
        for (let h = -2; h <= 2; h++)
          this.setFunctionModule(
            o + h,
            a + i,
            Math.max(Math.abs(h), Math.abs(i)) != 1
          );
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(o, a, i) {
      this.modules[a][o] = i, this.isFunction[a][o] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(o) {
      const a = this.version, i = this.errorCorrectionLevel;
      if (o.length != t.getNumDataCodewords(a, i))
        throw new RangeError("Invalid argument");
      const h = t.NUM_ERROR_CORRECTION_BLOCKS[i.ordinal][a], u = t.ECC_CODEWORDS_PER_BLOCK[i.ordinal][a], b = Math.floor(
        t.getNumRawDataModules(a) / 8
      ), y = h - b % h, k = Math.floor(b / h);
      let m = [];
      const g = t.reedSolomonComputeDivisor(u);
      for (let f = 0, v = 0; f < h; f++) {
        let M = o.slice(
          v,
          v + k - u + (f < y ? 0 : 1)
        );
        v += M.length;
        const _ = t.reedSolomonComputeRemainder(M, g);
        f < y && M.push(0), m.push(M.concat(_));
      }
      let p = [];
      for (let f = 0; f < m[0].length; f++)
        m.forEach((v, M) => {
          (f != k - u || M >= y) && p.push(v[f]);
        });
      return s(p.length == b), p;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(o) {
      if (o.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let a = 0;
      for (let i = this.size - 1; i >= 1; i -= 2) {
        i == 6 && (i = 5);
        for (let h = 0; h < this.size; h++)
          for (let u = 0; u < 2; u++) {
            const b = i - u, k = (i + 1 & 2) == 0 ? this.size - 1 - h : h;
            !this.isFunction[k][b] && a < o.length * 8 && (this.modules[k][b] = l(o[a >>> 3], 7 - (a & 7)), a++);
          }
      }
      s(a == o.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(o) {
      if (o < 0 || o > 7) throw new RangeError("Mask value out of range");
      for (let a = 0; a < this.size; a++)
        for (let i = 0; i < this.size; i++) {
          let h;
          switch (o) {
            case 0:
              h = (i + a) % 2 == 0;
              break;
            case 1:
              h = a % 2 == 0;
              break;
            case 2:
              h = i % 3 == 0;
              break;
            case 3:
              h = (i + a) % 3 == 0;
              break;
            case 4:
              h = (Math.floor(i / 3) + Math.floor(a / 2)) % 2 == 0;
              break;
            case 5:
              h = i * a % 2 + i * a % 3 == 0;
              break;
            case 6:
              h = (i * a % 2 + i * a % 3) % 2 == 0;
              break;
            case 7:
              h = ((i + a) % 2 + i * a % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[a][i] && h && (this.modules[a][i] = !this.modules[a][i]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let o = 0;
      for (let u = 0; u < this.size; u++) {
        let b = !1, y = 0, k = [0, 0, 0, 0, 0, 0, 0];
        for (let m = 0; m < this.size; m++)
          this.modules[u][m] == b ? (y++, y == 5 ? o += t.PENALTY_N1 : y > 5 && o++) : (this.finderPenaltyAddHistory(y, k), b || (o += this.finderPenaltyCountPatterns(k) * t.PENALTY_N3), b = this.modules[u][m], y = 1);
        o += this.finderPenaltyTerminateAndCount(b, y, k) * t.PENALTY_N3;
      }
      for (let u = 0; u < this.size; u++) {
        let b = !1, y = 0, k = [0, 0, 0, 0, 0, 0, 0];
        for (let m = 0; m < this.size; m++)
          this.modules[m][u] == b ? (y++, y == 5 ? o += t.PENALTY_N1 : y > 5 && o++) : (this.finderPenaltyAddHistory(y, k), b || (o += this.finderPenaltyCountPatterns(k) * t.PENALTY_N3), b = this.modules[m][u], y = 1);
        o += this.finderPenaltyTerminateAndCount(b, y, k) * t.PENALTY_N3;
      }
      for (let u = 0; u < this.size - 1; u++)
        for (let b = 0; b < this.size - 1; b++) {
          const y = this.modules[u][b];
          y == this.modules[u][b + 1] && y == this.modules[u + 1][b] && y == this.modules[u + 1][b + 1] && (o += t.PENALTY_N2);
        }
      let a = 0;
      for (const u of this.modules)
        a = u.reduce((b, y) => b + (y ? 1 : 0), a);
      const i = this.size * this.size, h = Math.ceil(Math.abs(a * 20 - i * 10) / i) - 1;
      return s(0 <= h && h <= 9), o += h * t.PENALTY_N4, s(0 <= o && o <= 2568888), o;
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
        let i = [6];
        for (let h = this.size - 7; i.length < o; h -= a)
          i.splice(1, 0, h);
        return i;
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
        const i = Math.floor(o / 7) + 2;
        a -= (25 * i - 10) * i - 55, o >= 7 && (a -= 36);
      }
      return s(208 <= a && a <= 29648), a;
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
      for (let h = 0; h < o - 1; h++) a.push(0);
      a.push(1);
      let i = 1;
      for (let h = 0; h < o; h++) {
        for (let u = 0; u < a.length; u++)
          a[u] = t.reedSolomonMultiply(a[u], i), u + 1 < a.length && (a[u] ^= a[u + 1]);
        i = t.reedSolomonMultiply(i, 2);
      }
      return a;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(o, a) {
      let i = a.map((h) => 0);
      for (const h of o) {
        const u = h ^ i.shift();
        i.push(0), a.forEach(
          (b, y) => i[y] ^= t.reedSolomonMultiply(b, u)
        );
      }
      return i;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(o, a) {
      if (o >>> 8 || a >>> 8)
        throw new RangeError("Byte out of range");
      let i = 0;
      for (let h = 7; h >= 0; h--)
        i = i << 1 ^ (i >>> 7) * 285, i ^= (a >>> h & 1) * o;
      return s(i >>> 8 == 0), i;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(o) {
      const a = o[1];
      s(a <= this.size * 3);
      const i = a > 0 && o[2] == a && o[3] == a * 3 && o[4] == a && o[5] == a;
      return (i && o[0] >= a * 4 && o[6] >= a ? 1 : 0) + (i && o[6] >= a * 4 && o[0] >= a ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(o, a, i) {
      return o && (this.finderPenaltyAddHistory(a, i), a = 0), a += this.size, this.finderPenaltyAddHistory(a, i), this.finderPenaltyCountPatterns(i);
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
    for (let i = o - 1; i >= 0; i--)
      a.push(d >>> i & 1);
  }
  function l(d, o) {
    return (d >>> o & 1) != 0;
  }
  function s(d) {
    if (!d) throw new Error("Assertion error");
  }
  class c {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(o, a, i) {
      if (this.mode = o, this.numChars = a, this.bitData = i, a < 0) throw new RangeError("Invalid argument");
      this.bitData = i.slice();
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
      for (const i of o) n(i, 8, a);
      return new c(c.Mode.BYTE, o.length, a);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(o) {
      if (!c.isNumeric(o))
        throw new RangeError("String contains non-numeric characters");
      let a = [];
      for (let i = 0; i < o.length; ) {
        const h = Math.min(o.length - i, 3);
        n(parseInt(o.substring(i, i + h), 10), h * 3 + 1, a), i += h;
      }
      return new c(c.Mode.NUMERIC, o.length, a);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(o) {
      if (!c.isAlphanumeric(o))
        throw new RangeError(
          "String contains unencodable characters in alphanumeric mode"
        );
      let a = [], i;
      for (i = 0; i + 2 <= o.length; i += 2) {
        let h = c.ALPHANUMERIC_CHARSET.indexOf(o.charAt(i)) * 45;
        h += c.ALPHANUMERIC_CHARSET.indexOf(o.charAt(i + 1)), n(h, 11, a);
      }
      return i < o.length && n(
        c.ALPHANUMERIC_CHARSET.indexOf(o.charAt(i)),
        6,
        a
      ), new c(c.Mode.ALPHANUMERIC, o.length, a);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(o) {
      return o == "" ? [] : c.isNumeric(o) ? [c.makeNumeric(o)] : c.isAlphanumeric(o) ? [c.makeAlphanumeric(o)] : [c.makeBytes(c.toUtf8ByteArray(o))];
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
      return new c(c.Mode.ECI, 0, a);
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
    static getTotalBits(o, a) {
      let i = 0;
      for (const h of o) {
        const u = h.mode.numCharCountBits(a);
        if (h.numChars >= 1 << u) return 1 / 0;
        i += 4 + u + h.bitData.length;
      }
      return i;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(o) {
      o = encodeURI(o);
      let a = [];
      for (let i = 0; i < o.length; i++)
        o.charAt(i) != "%" ? a.push(o.charCodeAt(i)) : (a.push(parseInt(o.substring(i + 1, i + 3), 16)), i += 2);
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
})(Ie || (Ie = {}));
((e) => {
  ((t) => {
    class n {
      // The QR Code can tolerate about 30% erroneous codewords
      /*-- Constructor and fields --*/
      constructor(s, c) {
        this.ordinal = s, this.formatBits = c;
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
})(Ie || (Ie = {}));
((e) => {
  ((t) => {
    class n {
      /*-- Constructor and fields --*/
      constructor(s, c) {
        this.modeBits = s, this.numBitsCharCount = c;
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
      numCharCountBits(s) {
        return this.numBitsCharCount[Math.floor((s + 7) / 17)];
      }
    }
    t.Mode = n;
  })(e.QrSegment || (e.QrSegment = {}));
})(Ie || (Ie = {}));
const Wp = "_root_1leml_1", Zp = {
  root: Wp
}, Up = {
  low: Ie.QrCode.Ecc.LOW,
  medium: Ie.QrCode.Ecc.MEDIUM,
  quartile: Ie.QrCode.Ecc.QUARTILE,
  high: Ie.QrCode.Ecc.HIGH
};
function av({
  value: e,
  size: t = 128,
  render: n = "svg",
  errorCorrection: l = "medium",
  margin: s = 4,
  ariaLabel: c,
  className: d,
  onError: o
}) {
  const a = c ?? `QR code for ${e}`, i = Q(null), h = A2("(prefers-color-scheme: dark)"), [u, b] = W(null);
  v1(() => {
    const M = document.documentElement;
    b(M.dataset.theme ?? null);
    const _ = new MutationObserver(() => {
      b(M.dataset.theme ?? null);
    });
    return _.observe(M, {
      attributes: !0,
      attributeFilter: ["data-theme"]
    }), () => _.disconnect();
  }, []);
  const y = g1(() => {
    try {
      return Ie.QrCode.encodeText(e, Up[l]);
    } catch {
      return null;
    }
  }, [e, l]), k = Q(null);
  v1(() => {
    if (y !== null) {
      k.current = null;
      return;
    }
    const M = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error(M), (k.current?.value !== e || k.current?.onError !== o) && (k.current = { value: e, onError: o }, o?.(M));
  }, [y, e, o]);
  const m = Math.max(0, Math.floor(s)), g = [Zp.root, d].filter(Boolean).join(" ");
  if (v1(() => {
    if (n !== "canvas" || y === null) return;
    const M = i.current, _ = M?.getContext("2d");
    if (!M || !_) return;
    const w = getComputedStyle(M), C = w.getPropertyValue("--dx-text-color").trim() || "#000", z = w.getPropertyValue("--dx-surface-color").trim() || "#fff";
    Xp(_, y, t, m, C, z);
  }, [n, y, t, m, h, u]), y === null)
    return /* @__PURE__ */ r("div", { className: g, role: "img", "aria-label": a, "data-qr-error": "true" });
  const p = y.size + m * 2, f = t / p;
  if (n === "canvas")
    return /* @__PURE__ */ r(
      "canvas",
      {
        ref: i,
        className: g,
        width: t,
        height: t,
        role: "img",
        "aria-label": a,
        "data-value": e
      }
    );
  const v = [];
  for (let M = 0; M < y.size; M++)
    for (let _ = 0; _ < y.size; _++)
      y.getModule(_, M) && v.push(
        /* @__PURE__ */ r(
          "rect",
          {
            x: (_ + m) * f,
            y: (M + m) * f,
            width: f + 0.5,
            height: f + 0.5
          },
          `${_}-${M}`
        )
      );
  return /* @__PURE__ */ L(
    "svg",
    {
      className: g,
      width: t,
      height: t,
      viewBox: `0 0 ${t} ${t}`,
      role: "img",
      "aria-label": a,
      "data-value": e,
      children: [
        /* @__PURE__ */ r("rect", { width: t, height: t, fill: "var(--dx-surface-color)" }),
        /* @__PURE__ */ r("g", { fill: "var(--dx-text-color)", children: v })
      ]
    }
  );
}
function Xp(e, t, n, l, s, c) {
  const d = n / (t.size + l * 2);
  e.fillStyle = c, e.fillRect(0, 0, n, n), e.fillStyle = s;
  for (let o = 0; o < t.size; o++)
    for (let a = 0; a < t.size; a++)
      t.getModule(a, o) && e.fillRect((a + l) * d, (o + l) * d, d + 0.5, d + 0.5);
}
const Gp = "_root_1v9la_1", Yp = "_value_1v9la_9", g2 = {
  root: Gp,
  value: Yp
}, k2 = [
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
], x2 = 104, Jp = 106;
function Qp(e) {
  const t = [x2];
  for (let l = 0; l < e.length; l++) {
    const s = e.charCodeAt(l);
    t.push(s >= 32 && s <= 126 ? s - 32 : 0);
  }
  let n = x2;
  for (let l = 1; l < t.length; l++) n += l * t[l];
  return t.push(n % 103, Jp), t;
}
function sv({
  value: e,
  format: t = "Code128",
  height: n = 60,
  showValue: l = !1,
  ariaLabel: s,
  className: c
}) {
  const d = s ?? `Barcode ${e}`, o = g1(() => {
    const a = [];
    let i = 0;
    for (const h of Qp(e)) {
      const u = k2[h] ?? k2[0];
      for (let b = 0; b < u.length; b++) {
        const y = Number(u[b]);
        b % 2 === 0 && a.push({ x: i, w: y }), i += y;
      }
    }
    return { modules: a, total: i };
  }, [e]);
  return /* @__PURE__ */ L("span", { className: [g2.root, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ L(
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
          /* @__PURE__ */ r(
            "rect",
            {
              width: o.total,
              height: n,
              fill: "var(--dx-surface-color)"
            }
          ),
          o.modules.map((a, i) => /* @__PURE__ */ r(
            "rect",
            {
              x: a.x,
              y: 0,
              width: a.w,
              height: n,
              fill: "var(--dx-text-color)"
            },
            i
          ))
        ]
      }
    ),
    l && /* @__PURE__ */ r("span", { className: g2.value, children: e })
  ] });
}
const em = "_root_1o41a_1", tm = "_svg_1o41a_10", nm = "_gridline_1o41a_15", rm = "_tickLabel_1o41a_21", lm = "_axisTitle_1o41a_27", om = "_dataLabel_1o41a_34", am = "_gaugeValue_1o41a_40", sm = "_legend_1o41a_47", cm = "_legendItem_1o41a_55", im = "_swatch_1o41a_63", dm = "_tooltip_1o41a_70", um = "_visuallyHidden_1o41a_84", W1 = {
  root: em,
  svg: tm,
  gridline: nm,
  tickLabel: rm,
  axisTitle: lm,
  dataLabel: om,
  gaugeValue: am,
  legend: sm,
  legendItem: cm,
  swatch: im,
  tooltip: dm,
  visuallyHidden: um
}, y2 = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
], q2 = /* @__PURE__ */ new Set([
  "line",
  "area",
  "bar",
  "column",
  "scatter",
  "bubble"
]), hm = /* @__PURE__ */ new Set([...q2, "heatmap"]);
function fm(e, t, n) {
  const l = t - e || 1, s = n ?? Math.pow(10, Math.floor(Math.log10(l / 4))), c = Math.floor(e / s) * s, d = Math.ceil(t / s) * s, o = [];
  for (let a = c; a <= d + 1e-9; a += s)
    o.push(Number(a.toFixed(6)));
  return { min: c, max: d, step: s, ticks: o };
}
function pm(e) {
  return e.data.map((t) => ({
    cat: String(t[e.categoryProperty] ?? ""),
    val: Number(t[e.valueProperty]),
    size: e.sizeProperty ? Number(t[e.sizeProperty]) : void 0,
    item: t
  }));
}
function pt(e, t, n) {
  return /* @__PURE__ */ L(
    "g",
    {
      "data-chart-type": t.type,
      role: "list",
      "aria-label": t.title ?? `Series ${e + 1}`,
      children: [
        /* @__PURE__ */ r("title", { children: t.title ?? `Series ${e + 1}` }),
        n
      ]
    },
    e
  );
}
const _e = (e) => e * Math.PI / 180;
function mm(e, t, n, l, s) {
  const { pad: c, plotW: d, plotH: o } = e, a = c.l + d / 2, i = c.t + o / 2, h = Math.min(d, o) / 3, u = t.type === "donut" ? t.innerRadius ?? h * 0.5 : 0, b = l.reduce((k, m) => k + (Number(m.val) || 0), 0);
  let y = -90;
  return pt(
    n,
    t,
    l.map((k, m) => {
      const g = b ? k.val / b * 360 : 0, p = y, f = y + g;
      y = f;
      const v = g > 180 ? 1 : 0, M = a + h * Math.cos(_e(p)), _ = i + h * Math.sin(_e(p)), w = a + h * Math.cos(_e(f)), C = i + h * Math.sin(_e(f)), z = a + u * Math.cos(_e(f)), A = i + u * Math.sin(_e(f)), O = a + u * Math.cos(_e(p)), S = i + u * Math.sin(_e(p)), $ = u ? `M ${M} ${_} A ${h} ${h} 0 ${v} 1 ${w} ${C} L ${z} ${A} A ${u} ${u} 0 ${v} 0 ${O} ${S} Z` : `M ${a} ${i} L ${M} ${_} A ${h} ${h} 0 ${v} 1 ${w} ${C} Z`, x = (p + f) / 2, N = a + (h + 12) * Math.cos(_e(x)), T = i + (h + 12) * Math.sin(_e(x));
      return /* @__PURE__ */ L("g", { role: "listitem", children: [
        /* @__PURE__ */ r(
          "path",
          {
            d: $,
            fill: s,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => e.tooltipVisible && e.showTip(N, T, `${t.title ?? k.cat}: ${k.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, k.cat, k.val, k.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ r(
          "text",
          {
            x: N,
            y: T,
            textAnchor: "middle",
            className: W1.dataLabel,
            children: k.val
          }
        )
      ] }, m);
    })
  );
}
function _m(e, t, n, l, s) {
  const { pad: c, plotW: d, scale: o, xFor: a, yFor: i, categories: h } = e, u = new Map(h.map((b, y) => [b, y]));
  return pt(
    n,
    t,
    l.map((b, y) => {
      const k = u.get(b.cat) ?? 0, m = Number(l[y].cat), g = Number.isNaN(m) ? a(k) : c.l + (m - o.min) / (o.max - o.min || 1) * d, p = i(b.val), f = t.type === "bubble" && b.size !== void 0 ? Math.max(4, Math.min(12, b.size / 10)) : 4;
      return /* @__PURE__ */ L("g", { role: "listitem", children: [
        /* @__PURE__ */ r(
          "circle",
          {
            cx: g,
            cy: p,
            r: f,
            fill: s,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ r(
          "circle",
          {
            cx: g,
            cy: p,
            r: 12,
            fill: "transparent",
            onMouseEnter: () => e.tooltipVisible && e.showTip(g, p, `${t.title ?? b.cat}: ${b.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, b.cat, b.val, b.item),
            style: { cursor: "pointer" }
          }
        )
      ] }, y);
    })
  );
}
function vm(e, t, n, l, s) {
  const { scale: c, xFor: d, yFor: o, categories: a, series: i } = e, h = new Map(a.map((k, m) => [k, m])), u = (k) => {
    if (!t.stack) return c.min;
    let m = 0;
    for (let g = 0; g < n; g++) {
      const p = i[g];
      if (p?.stack !== t.stack) continue;
      const f = p.data.find(
        (v) => String(v[p.categoryProperty] ?? "") === k
      );
      f && (m += Number(f[p.valueProperty]) || 0);
    }
    return m;
  }, b = l.map((k) => {
    const m = h.get(k.cat) ?? 0, g = u(k.cat);
    return `${m === 0 ? "M" : "L"} ${d(m)} ${o(g + k.val)}`;
  }).join(" "), y = l.map((k) => {
    const m = h.get(k.cat) ?? 0, g = u(k.cat);
    return `${m === 0 ? "M" : "L"} ${d(m)} ${o(g)}`;
  }).join(" ");
  return pt(
    n,
    t,
    /* @__PURE__ */ L(b1, { children: [
      t.type === "area" && /* @__PURE__ */ r(
        "path",
        {
          d: `${b} L ${d(l.length - 1)} ${o(u(l[l.length - 1].cat))} L ${d(0)} ${o(u(l[0].cat))} Z`,
          fill: s,
          fillOpacity: 0.25,
          stroke: "none"
        }
      ),
      /* @__PURE__ */ r("path", { d: b, fill: "none", stroke: s, strokeWidth: 2 }),
      t.stack && /* @__PURE__ */ r("path", { d: y, fill: "none", stroke: "transparent" }),
      l.map((k, m) => {
        const g = h.get(k.cat) ?? 0, p = u(k.cat), f = d(g), v = o(p + k.val);
        return /* @__PURE__ */ L("g", { role: "listitem", children: [
          /* @__PURE__ */ r(
            "circle",
            {
              cx: f,
              cy: v,
              r: 4,
              fill: s,
              stroke: "var(--dx-surface-color)",
              strokeWidth: 1.5
            }
          ),
          /* @__PURE__ */ r(
            "rect",
            {
              x: f - 12,
              y: v - 12,
              width: 24,
              height: 24,
              fill: "transparent",
              onMouseEnter: () => e.tooltipVisible && e.showTip(f, v, `${t.title ?? k.cat}: ${k.val}`),
              onMouseLeave: () => e.hideTip(),
              onClick: () => e.handleClick(t, k.cat, k.val, k.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ r(
            "text",
            {
              x: f,
              y: v - 8,
              textAnchor: "middle",
              className: W1.dataLabel,
              children: k.val
            }
          )
        ] }, m);
      })
    ] })
  );
}
function gm(e, t, n, l, s) {
  const { pad: c, plotW: d, plotH: o, scale: a, xFor: i, yFor: h, categories: u, series: b } = e, y = new Map(u.map((m, g) => [m, g])), k = t.type === "bar";
  return pt(
    n,
    t,
    l.map((m, g) => {
      const p = y.get(m.cat) ?? 0;
      let f = 0;
      if (t.stack)
        for (let x = 0; x < n; x++) {
          const N = b[x];
          if (N?.stack !== t.stack) continue;
          const T = N.data.find(
            (V) => String(V[N.categoryProperty] ?? "") === m.cat
          );
          T && (f += Number(T[N.valueProperty]) || 0);
        }
      const v = f + m.val, M = b.filter(
        (x) => !x.stack || x.stack === t.stack
      ).length, _ = d / Math.max(1, u.length), w = k ? 18 : Math.max(12, _ / (t.stack ? 1 : b.length) - 4), C = k ? c.l + f / (a.max - a.min || 1) * d : i(p) - w / 2 + (t.stack ? 0 : n % M * w), z = k ? c.t + p * o / Math.max(1, u.length) + 4 : h(v), A = k ? m.val / (a.max - a.min || 1) * d : w - 4, O = k ? 16 : h(f) - h(v), S = k ? c.l + f / (a.max - a.min || 1) * d : C, $ = k ? c.t + p * o / Math.max(1, u.length) + 4 : z;
      return /* @__PURE__ */ L("g", { role: "listitem", children: [
        /* @__PURE__ */ r(
          "rect",
          {
            x: S,
            y: $,
            width: k ? A : w - 4,
            height: O,
            fill: s,
            rx: 2,
            onMouseEnter: () => e.tooltipVisible && e.showTip(
              S + (k ? A : w) / 2,
              $,
              `${t.title ?? m.cat}: ${m.val}`
            ),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, m.cat, m.val, m.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ r(
          "text",
          {
            x: S + (k ? A : w) / 2,
            y: $ - 4,
            textAnchor: "middle",
            className: W1.dataLabel,
            children: m.val
          }
        )
      ] }, g);
    })
  );
}
function km(e, t, n, l, s) {
  const { pad: c, plotW: d, plotH: o, scale: a, tooltipVisible: i, showTip: h, hideTip: u } = e, b = c.l + d / 2, y = c.t + o * 0.78, k = Math.min(d, o) * 0.36, m = 135, g = 270, p = l.reduce((w, C) => w + (Number(C.val) || 0), 0), f = a.max - a.min || 1, v = Math.min(1, Math.max(0, (p - a.min) / f)), M = (w, C) => {
    const [z, A] = [
      b + k * Math.cos(_e(w)),
      y + k * Math.sin(_e(w))
    ], [O, S] = [
      b + k * Math.cos(_e(C)),
      y + k * Math.sin(_e(C))
    ], $ = C - w > 180 ? 1 : 0;
    return `M ${z} ${A} A ${k} ${k} 0 ${$} 1 ${O} ${S}`;
  }, _ = Number(p.toFixed(2));
  return pt(
    n,
    t,
    // One listitem per series value (parity with the point renderers):
    // the series <g role="list"> requires owned listitem children or
    // aria-required-children fails.
    /* @__PURE__ */ L("g", { role: "listitem", children: [
      /* @__PURE__ */ r(
        "path",
        {
          d: M(m, m + g),
          fill: "none",
          stroke: "var(--dx-border-color)",
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      v > 0 && /* @__PURE__ */ r(
        "path",
        {
          d: M(m, m + g * v),
          fill: "none",
          stroke: s,
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ r("text", { x: b, y: y - 4, textAnchor: "middle", className: W1.gaugeValue, children: _ }),
      /* @__PURE__ */ r(
        "path",
        {
          d: M(m, m + g),
          fill: "none",
          stroke: "transparent",
          strokeWidth: 22,
          onMouseEnter: () => i && h(b, y - k, `${t.title ?? "Value"}: ${_}`),
          onMouseLeave: () => u(),
          onClick: () => e.handleClick(t, l[0]?.cat ?? "", p, l[0]?.item ?? {}),
          style: { cursor: "pointer" }
        }
      ),
      t.labels?.visible && /* @__PURE__ */ r(
        "text",
        {
          x: b,
          y: y + k + 18,
          textAnchor: "middle",
          className: W1.dataLabel,
          children: t.title ?? ""
        }
      )
    ] })
  );
}
function I2(e) {
  const { pad: t, plotW: n, plotH: l, categories: s } = e, c = t.l + n / 2, d = t.t + l / 2, o = Math.min(n, l) / 2 - 24, a = Math.max(3, s.length), i = (u) => _e(-90 + 360 * u / a);
  return { cx: c, cy: d, radius: o, angleFor: i, vertexFor: (u, b) => {
    const y = i(u);
    return [
      c + o * b * Math.cos(y),
      d + o * b * Math.sin(y)
    ];
  } };
}
function xm(e) {
  const { categories: t } = e, { cx: n, cy: l, vertexFor: s } = I2(e);
  return /* @__PURE__ */ L("g", { "data-chart-type": "radar-grid", "aria-hidden": "true", children: [
    [0.25, 0.5, 0.75, 1].map((d) => /* @__PURE__ */ r(
      "polygon",
      {
        points: t.map((o, a) => s(a, d).join(",")).join(" "),
        fill: "none",
        stroke: "var(--dx-border-color)",
        strokeWidth: 1
      },
      d
    )),
    t.map((d, o) => {
      const [a, i] = s(o, 1);
      return /* @__PURE__ */ r(
        "line",
        {
          x1: n,
          y1: l,
          x2: a,
          y2: i,
          stroke: "var(--dx-border-color)",
          strokeWidth: 1
        },
        d
      );
    })
  ] });
}
function ym(e, t, n, l, s) {
  const { categories: c, tooltipVisible: d, showTip: o, hideTip: a } = e, { cx: i, cy: h, radius: u, angleFor: b, vertexFor: y } = I2(e), k = e.scale.max || 1, m = (p) => l.find((f) => f.cat === p)?.val ?? 0, g = c.map((p, f) => {
    const v = Math.min(1, Math.max(0, m(p) / k)), [M, _] = y(f, v);
    return `${M},${_}`;
  }).join(" ");
  return pt(
    n,
    t,
    /* @__PURE__ */ L(b1, { children: [
      /* @__PURE__ */ r(
        "polygon",
        {
          points: g,
          fill: s,
          fillOpacity: 0.25,
          stroke: s,
          strokeWidth: 2
        }
      ),
      c.map((p, f) => {
        const v = Math.min(1, Math.max(0, m(p) / k)), [M, _] = y(f, v), [w, C] = y(f, 1);
        return /* @__PURE__ */ L("g", { role: "listitem", children: [
          /* @__PURE__ */ r(
            "circle",
            {
              cx: M,
              cy: _,
              r: 3.5,
              fill: s,
              stroke: "var(--dx-surface-color)",
              strokeWidth: 1
            }
          ),
          /* @__PURE__ */ r(
            "circle",
            {
              cx: M,
              cy: _,
              r: 12,
              fill: "transparent",
              onMouseEnter: () => d && o(w, C, `${t.title ?? p}: ${m(p)}`),
              onMouseLeave: () => a(),
              onClick: () => {
                const z = l.find((A) => A.cat === p);
                z && e.handleClick(t, z.cat, z.val, z.item);
              },
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ r(
            "text",
            {
              x: i + (u + 14) * Math.cos(b(f)),
              y: h + (u + 14) * Math.sin(b(f)) + 4,
              textAnchor: "middle",
              className: W1.tickLabel,
              children: p
            }
          )
        ] }, p);
      })
    ] })
  );
}
function bm(e, t, n, l, s) {
  const { pad: c, plotW: d, plotH: o, tooltipVisible: a, showTip: i, hideTip: h } = e, u = l, b = Math.max(1, ...u.map((m) => Number(m.val) || 0)), y = o / Math.max(1, u.length), k = c.l + d / 2;
  return pt(
    n,
    t,
    u.map((m, g) => {
      const f = Math.max(0, Number(m.val) || 0) / b * d, v = u[g + 1], M = v ? Math.max(0, Number(v.val) || 0) / b * d : f * 0.7, _ = c.t + g * y + 2, w = Math.max(4, y - 6), C = 1 - g * (0.45 / Math.max(1, u.length));
      return /* @__PURE__ */ L("g", { role: "listitem", children: [
        /* @__PURE__ */ r(
          "path",
          {
            d: `M ${k - f / 2} ${_} L ${k + f / 2} ${_} L ${k + M / 2} ${_ + w} L ${k - M / 2} ${_ + w} Z`,
            fill: s,
            fillOpacity: C,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => a && i(k, _, `${t.title ?? m.cat}: ${m.val}`),
            onMouseLeave: () => h(),
            onClick: () => e.handleClick(t, m.cat, m.val, m.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ L(
          "text",
          {
            x: k,
            y: _ + w / 2 + 4,
            textAnchor: "middle",
            className: W1.dataLabel,
            children: [
              m.cat,
              " · ",
              m.val
            ]
          }
        )
      ] }, g);
    })
  );
}
function Mm(e, t, n, l, s) {
  const { pad: c, plotW: d, plotH: o, categories: a, tooltipVisible: i, showTip: h, hideTip: u } = e, b = [];
  t.data.forEach((v) => {
    const M = t.rowProperty ? String(v[t.rowProperty] ?? "") : "All";
    b.includes(M) || b.push(M);
  });
  const y = l.map((v) => v.val).filter((v) => Number.isFinite(v)), k = y.length ? Math.min(...y) : 0, m = y.length ? Math.max(...y) : 1, g = d / Math.max(1, a.length), p = o / Math.max(1, b.length), f = (v) => m === k ? 0.6 : 0.15 + 0.85 * ((v - k) / (m - k));
  return pt(
    n,
    t,
    /* @__PURE__ */ L(b1, { children: [
      b.map((v, M) => /* @__PURE__ */ r(
        "text",
        {
          x: c.l - 8,
          y: c.t + M * p + p / 2 + 4,
          textAnchor: "end",
          className: W1.tickLabel,
          children: v
        },
        v
      )),
      l.map((v, M) => {
        const _ = t.data[M], w = a.indexOf(v.cat), C = b.indexOf(
          t.rowProperty && _ ? String(_[t.rowProperty] ?? "") : "All"
        );
        if (w < 0 || C < 0) return null;
        const z = c.l + w * g, A = c.t + C * p;
        return /* @__PURE__ */ L("g", { role: "listitem", children: [
          /* @__PURE__ */ r(
            "rect",
            {
              x: z + 1,
              y: A + 1,
              width: Math.max(1, g - 2),
              height: Math.max(1, p - 2),
              fill: s,
              fillOpacity: f(v.val),
              onMouseEnter: () => i && h(z + g / 2, A, `${t.title ?? v.cat}: ${v.val}`),
              onMouseLeave: () => u(),
              onClick: () => e.handleClick(t, v.cat, v.val, v.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ r(
            "text",
            {
              x: z + g / 2,
              y: A + p / 2 + 4,
              textAnchor: "middle",
              className: W1.dataLabel,
              children: v.val
            }
          )
        ] }, M);
      })
    ] })
  );
}
function Cm(e, t, n) {
  const l = pm(t), s = e.colorFor(n, t);
  switch (t.type) {
    case "pie":
    case "donut":
      return mm(e, t, n, l, s);
    case "scatter":
    case "bubble":
      return _m(e, t, n, l, s);
    case "line":
    case "area":
      return vm(e, t, n, l, s);
    case "gauge":
      return km(e, t, n, l, s);
    case "radar":
      return ym(e, t, n, l, s);
    case "funnel":
      return bm(e, t, n, l, s);
    case "heatmap":
      return Mm(e, t, n, l, s);
    default:
      return gm(e, t, n, l, s);
  }
}
function cv({
  series: e,
  width: t = 600,
  height: n = 400,
  valueAxis: l,
  categoryAxis: s,
  showLegend: c = !0,
  tooltipVisible: d = !0,
  onSeriesClick: o,
  ariaLabel: a = "Chart",
  className: i
}) {
  const [h, u] = W(
    null
  ), b = g1(() => {
    const O = /* @__PURE__ */ new Set();
    for (const S of e)
      for (const $ of S.data) O.add(String($[S.categoryProperty] ?? ""));
    return [...O];
  }, [e]), y = g1(() => {
    const O = e.flatMap(($) => $.data.map((x) => Number(x[$.valueProperty]))).filter(($) => !Number.isNaN($)), S = /* @__PURE__ */ new Map();
    for (const $ of e) {
      if (!$.stack) continue;
      let x = S.get($.stack);
      x || S.set($.stack, x = /* @__PURE__ */ new Map());
      for (const N of $.data) {
        const T = String(N[$.categoryProperty] ?? ""), V = Number(N[$.valueProperty]);
        Number.isNaN(V) || x.set(T, (x.get(T) ?? 0) + V);
      }
    }
    for (const $ of S.values()) O.push(...$.values());
    return O;
  }, [e]), k = l?.min ?? (y.length ? Math.min(0, ...y) : 0), m = l?.max ?? (y.length ? Math.max(...y) : 10), g = g1(
    () => fm(k, m, l?.step),
    [k, m, l?.step]
  ), p = { t: 16, r: 16, b: 40, l: 56 }, f = t - p.l - p.r, v = n - p.t - p.b, M = (O) => p.l + O / Math.max(1, b.length - 1) * f, _ = (O) => p.t + (1 - (O - g.min) / (g.max - g.min || 1)) * v, w = (O, S) => S.color ?? y2[O % y2.length], C = e.some((O) => q2.has(O.type)), z = e.some((O) => hm.has(O.type)), A = {
    categories: b,
    scale: g,
    pad: p,
    plotW: f,
    plotH: v,
    xFor: M,
    yFor: _,
    colorFor: w,
    tooltipVisible: d,
    showTip: (O, S, $) => u({ x: O, y: S, text: $ }),
    hideTip: () => u(null),
    handleClick: (O, S, $, x) => o?.({
      seriesTitle: O.title ?? "",
      category: S,
      value: $,
      item: x
    }),
    series: e
  };
  return /* @__PURE__ */ L(
    "figure",
    {
      className: [W1.root, i].filter(Boolean).join(" "),
      role: "img",
      "aria-label": a,
      "aria-describedby": `${a.replace(/\s+/g, "-")}-table`,
      children: [
        /* @__PURE__ */ L(
          "svg",
          {
            width: t,
            height: n,
            className: W1.svg,
            role: "presentation",
            children: [
              C && l?.gridlines !== !1 && g.ticks.map((O) => /* @__PURE__ */ r(
                "line",
                {
                  x1: p.l,
                  x2: p.l + f,
                  y1: _(O),
                  y2: _(O),
                  className: W1.gridline
                },
                O
              )),
              z && s?.gridlines && b.map((O, S) => /* @__PURE__ */ r(
                "line",
                {
                  x1: M(S),
                  x2: M(S),
                  y1: p.t,
                  y2: p.t + v,
                  className: W1.gridline
                },
                S
              )),
              C && g.ticks.map((O) => /* @__PURE__ */ r(
                "text",
                {
                  x: p.l - 8,
                  y: _(O) + 4,
                  textAnchor: "end",
                  className: W1.tickLabel,
                  children: O
                },
                O
              )),
              z && b.map((O, S) => /* @__PURE__ */ r(
                "text",
                {
                  x: M(S),
                  y: p.t + v + 16,
                  textAnchor: "middle",
                  className: W1.tickLabel,
                  children: O
                },
                O
              )),
              C && l?.title && /* @__PURE__ */ r(
                "text",
                {
                  x: 12,
                  y: p.t + v / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90,12,${p.t + v / 2})`,
                  className: W1.axisTitle,
                  children: l.title
                }
              ),
              z && s?.title && /* @__PURE__ */ r(
                "text",
                {
                  x: p.l + f / 2,
                  y: n - 4,
                  textAnchor: "middle",
                  className: W1.axisTitle,
                  children: s.title
                }
              ),
              e.some((O) => O.type === "radar") && xm(A),
              e.map((O, S) => Cm(A, O, S))
            ]
          }
        ),
        h && /* @__PURE__ */ r(
          "div",
          {
            className: W1.tooltip,
            style: { left: h.x, top: h.y - 28 },
            children: h.text
          }
        ),
        c && /* @__PURE__ */ r("div", { className: W1.legend, children: e.map((O, S) => /* @__PURE__ */ L("span", { className: W1.legendItem, children: [
          /* @__PURE__ */ r(
            "span",
            {
              className: W1.swatch,
              style: { backgroundColor: w(S, O) },
              "aria-hidden": "true"
            }
          ),
          O.title ?? `Series ${S + 1}`
        ] }, S)) }),
        /* @__PURE__ */ L(
          "table",
          {
            className: W1.visuallyHidden,
            id: `${a.replace(/\s+/g, "-")}-table`,
            children: [
              /* @__PURE__ */ r("caption", { children: a }),
              /* @__PURE__ */ r("thead", { children: /* @__PURE__ */ L("tr", { children: [
                /* @__PURE__ */ r("th", { children: "Series" }),
                /* @__PURE__ */ r("th", { children: "Category" }),
                /* @__PURE__ */ r("th", { children: "Value" })
              ] }) }),
              /* @__PURE__ */ r("tbody", { children: e.map(
                (O) => O.data.map((S, $) => /* @__PURE__ */ L("tr", { children: [
                  /* @__PURE__ */ r("td", { children: O.title ?? "" }),
                  /* @__PURE__ */ r("td", { children: O.rowProperty ? `${String(S[O.rowProperty] ?? "")} / ${String(S[O.categoryProperty] ?? "")}` : String(S[O.categoryProperty] ?? "") }),
                  /* @__PURE__ */ r("td", { children: String(S[O.valueProperty] ?? "") })
                ] }, `${O.title}-${$}`))
              ) })
            ]
          }
        )
      ]
    }
  );
}
export {
  Ps as ALERT_ICON,
  k_ as Accordion,
  o_ as Alert,
  d_ as AutoGrid,
  b_ as Autocomplete,
  v_ as Avatar,
  $m as Badge,
  sv as Barcode,
  h_ as Body,
  Z_ as Breadcrumb,
  Et as Button,
  Lm as Card,
  J_ as Carousel,
  cv as Chart,
  Qm as Checkbox,
  C_ as Checkboxlist,
  A_ as Colorpicker,
  c_ as Column,
  R_ as ContextMenuProvider,
  Wt as DEFAULT_OPERATOR_BY_TYPE,
  S9 as DEFAULT_PALETTE,
  j8 as DEFAULT_THEMES,
  Um as DataFilter,
  Xm as DataGrid,
  Gm as DataList,
  H_ as Datepicker,
  Va as Dialog,
  n_ as DialogProvider,
  I_ as DropZone,
  y_ as Dropdown,
  Hm as EmptyState,
  w2 as FILTER_OPERATORS,
  W_ as FabMenu,
  jm as Field,
  Vm as Fieldset,
  r8 as Footer,
  Dm as Form,
  Tm as FormField,
  nv as Gantt,
  a8 as Header,
  M1 as Icon,
  Jm as Input,
  Ym as Label,
  u_ as Layout,
  U_ as Link,
  M_ as Listbox,
  S_ as Mask,
  qu as Menu,
  V2 as MenuItem,
  O_ as Numeric,
  Ul as Pager,
  F_ as PanelMenu,
  B_ as PanelMenuItem,
  N_ as Password,
  ev as PickList,
  rv as Pivot,
  K_ as ProfileMenu,
  p_ as Progress,
  av as QRCode,
  w_ as Radiobuttonlist,
  j_ as Rating,
  s_ as Row,
  tv as Scheduler,
  D_ as SecurityCode,
  wt as Select,
  z_ as Selectbar,
  g8 as Sidebar,
  f_ as SidebarToggle,
  E_ as SignaturePad,
  a_ as Skeleton,
  T_ as Slider,
  $_ as Splitbutton,
  G_ as Splitter,
  i_ as Stack,
  Om as Stat,
  X_ as Steps,
  ma as Switch,
  Am as Table,
  g_ as Tabs,
  Ya as Text,
  x_ as Textarea,
  ua as Textbox,
  m_ as ThemeSwitcher,
  __ as ThemeToggle,
  lv as Timeline,
  V_ as Timespanpicker,
  l_ as ToastProvider,
  Y_ as Toc,
  L_ as Togglebutton,
  e_ as Tooltip,
  Q_ as Tree,
  q_ as Upload,
  ov as VirtualGrid,
  no as aggregateValue,
  L2 as applyFilters,
  to as applyGridState,
  G0 as collectGroupKeys,
  Ct as columnValue,
  Fm as compare,
  Wm as custom,
  Jl as cycleSort,
  J0 as defaultOperatorForType,
  qm as email,
  c2 as formatMasked,
  v0 as formatValue,
  _0 as getByPath,
  Xl as groupItems,
  Sm as iconNames,
  Nm as iconSetNames,
  M2 as iconSets,
  z2 as matchesFilters,
  Rm as maxLength,
  Pm as minLength,
  eo as paginate,
  Im as pattern,
  Bm as range,
  Em as required,
  Km as requiredTrue,
  b2 as resolveVariant,
  tl as runValidators,
  l0 as shadeClass,
  gl as sortItems,
  Ql as sortedItems,
  ro as toCsv,
  fl as toFilterString,
  vl as toODataFilterString,
  P_ as useContextMenu,
  t_ as useDialog,
  el as useFormContext,
  Zm as useFormField,
  A2 as useMediaQuery,
  r_ as useToast
};
