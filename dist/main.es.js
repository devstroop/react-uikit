import { jsx as r, jsxs as $, Fragment as b1 } from "react/jsx-runtime";
import { forwardRef as R1, useId as q1, isValidElement as ge, cloneElement as T0, useState as K, useRef as G, useCallback as q, useMemo as v1, useContext as ht, createContext as qt, useEffect as g1, Fragment as D0, useLayoutEffect as N0, Children as r0, useImperativeHandle as E0 } from "react";
function Et(e) {
  return e == null || e === "default" || e === "medium" ? null : `shade-${e}`;
}
const K2 = "_button_1anap_1", W2 = "_filled_1anap_36", Z2 = "_flat_1anap_55", U2 = "_outlined_1anap_58", X2 = "_text_1anap_63", G2 = "_loading_1anap_504", Y2 = "_spinner_1anap_507", J2 = "_xs_1anap_523", Q2 = "_sm_1anap_529", en = "_md_1anap_535", tn = "_lg_1anap_541", nn = "_xl_1anap_547", rn = "_iconOnly_1anap_553", ln = "_fullWidth_1anap_583", Ye = {
  button: K2,
  filled: W2,
  flat: Z2,
  outlined: U2,
  text: X2,
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
  loading: G2,
  spinner: Y2,
  "dx-spin": "_dx-spin_1anap_1",
  xs: J2,
  sm: Q2,
  md: en,
  lg: tn,
  xl: nn,
  iconOnly: rn,
  fullWidth: ln
};
function on(e, t) {
  const n = t, l = e ?? "filled";
  return { variant: l === "filled" || l === "flat" || l === "outlined" || l === "text" ? l : "filled", style: n ?? "primary" };
}
const b0 = R1(
  function(t, n) {
    const {
      variant: l = "filled",
      severity: s,
      shade: c = "default",
      size: d = "md",
      fullWidth: o = !1,
      iconOnly: a = !1,
      loading: i = !1,
      visible: u = !0,
      className: h,
      disabled: b,
      children: y,
      ...x
    } = t;
    if (u === !1) return null;
    const m = on(l, s), f = m.style === "light" || m.style === "dark" ? null : Et(c), p = [
      Ye.button,
      Ye[m.variant],
      Ye[`style-${m.style}`],
      f ? Ye[f] : null,
      Ye[d],
      o ? Ye.fullWidth : null,
      a ? Ye.iconOnly : null,
      i ? Ye.loading : null,
      // Press feedback on every button (Radzen material parity).
      "dx-ripple",
      h
    ].filter(Boolean).join(" "), g = /* @__PURE__ */ $(b1, { children: [
      i ? /* @__PURE__ */ r("span", { "aria-hidden": "true", className: Ye.spinner }) : null,
      y
    ] }), M = t.href;
    if (M != null) {
      const { onClick: C, ...z } = x, A = b || i;
      return /* @__PURE__ */ r(
        "a",
        {
          ref: n,
          href: M,
          className: p,
          "aria-disabled": A || void 0,
          "aria-busy": i || void 0,
          onClick: (S) => {
            if (A) {
              S.preventDefault();
              return;
            }
            C?.(S);
          },
          ...z,
          children: g
        }
      );
    }
    const { type: v = "button", ...L } = x;
    return /* @__PURE__ */ r(
      "button",
      {
        ref: n,
        type: v,
        className: p,
        disabled: b || i,
        "aria-busy": i || void 0,
        ...L,
        children: g
      }
    );
  }
), an = "_card_16nyh_1", sn = "_elevated_16nyh_8", cn = "_filled_16nyh_13", dn = "_outlined_16nyh_18", un = "_interactive_16nyh_22", hn = "_text_16nyh_30", fn = "_header_16nyh_46", pn = "_body_16nyh_53", mn = "_footer_16nyh_63", Pt = {
  card: an,
  elevated: sn,
  filled: cn,
  outlined: dn,
  interactive: un,
  text: hn,
  header: fn,
  body: pn,
  footer: mn
}, zm = R1(function({
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
  const u = t === "interactive";
  return (
    // Interactivity is conditional on variant="interactive" (role + tabIndex
    // travel together); static analysis cannot see that.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ $(
      "div",
      {
        ref: i,
        role: u ? "button" : void 0,
        tabIndex: u ? 0 : void 0,
        onKeyDown: (h) => {
          o?.(h), !(!u || h.key !== "Enter" && h.key !== " ") && (h.preventDefault(), h.currentTarget.click());
        },
        className: [Pt.card, Pt[t], s].filter(Boolean).join(" "),
        ...a,
        children: [
          n != null && /* @__PURE__ */ r("div", { className: Pt.header, children: n }),
          /* @__PURE__ */ r("div", { className: Pt.body, children: d }),
          l != null && /* @__PURE__ */ r("div", { className: Pt.footer, children: l })
        ]
      }
    )
  );
});
function q0(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const _n = "_badge_154mm_1", gn = "_xs_154mm_21", vn = "_sm_154mm_26", kn = "_md_154mm_31", xn = "_lg_154mm_36", yn = "_xl_154mm_41", bn = "_neutral_154mm_47", Mn = "_primary_154mm_52", Cn = "_secondary_154mm_61", wn = "_light_154mm_66", zn = "_base_154mm_71", Ln = "_dark_154mm_76", $n = "_info_154mm_81", Nn = "_success_154mm_86", Sn = "_warning_154mm_95", On = "_danger_154mm_104", An = "_filled_154mm_111", Hn = "_outlined_154mm_161", jn = "_text_154mm_213", Rt = {
  badge: _n,
  xs: gn,
  sm: vn,
  md: kn,
  lg: xn,
  xl: yn,
  neutral: bn,
  primary: Mn,
  secondary: Cn,
  light: wn,
  base: zn,
  dark: Ln,
  info: $n,
  success: Nn,
  warning: Sn,
  danger: On,
  filled: An,
  outlined: Hn,
  text: jn,
  "shade-lighter": "_shade-lighter_154mm_484",
  "shade-light": "_shade-light_154mm_484",
  "shade-dark": "_shade-dark_154mm_492",
  "shade-darker": "_shade-darker_154mm_495"
}, Lm = R1(function({
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
  const u = t, h = q0(n, "filled"), b = Et(l);
  return /* @__PURE__ */ r(
    "span",
    {
      ref: i,
      className: [
        Rt.badge,
        Rt[s],
        Rt[u],
        Rt[h],
        b ? Rt[b] : null,
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
}, Tn = {
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
}, Dn = {
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
}, En = {
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
}, qn = {
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
}, In = {
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
}, Pn = {
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
}, Rn = {
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
}, Bn = {
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
}, Fn = {
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
}, Kn = {
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
}, Wn = {
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
}, Zn = {
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
}, Un = {
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
}, Xn = {
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
}, Gn = {
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
  lucide: Tn,
  tabler: Dn,
  heroicons: En,
  ph: qn,
  ri: In,
  carbon: Pn,
  ion: Rn,
  octicon: Bn,
  mdi: Fn,
  "fa6-solid": Kn,
  bi: Wn,
  fluent: Zn,
  "material-symbols": Un,
  "simple-icons": Xn,
  "fa6-brands": Gn
}, $m = Object.keys(M2), Yn = "_xs_2a6lm_2", Jn = "_sm_2a6lm_7", Qn = "_md_2a6lm_1", er = "_lg_2a6lm_17", tr = "_xl_2a6lm_22", nr = {
  xs: Yn,
  sm: Jn,
  md: Qn,
  lg: er,
  xl: tr
}, Nm = [
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
], rr = {
  check: /* @__PURE__ */ r("path", { d: "M20 6L9 17l-5-5" }),
  close: /* @__PURE__ */ r("path", { d: "M18 6L6 18M6 6l12 12" }),
  "chevron-down": /* @__PURE__ */ r("path", { d: "M6 9l6 6 6-6" }),
  "chevron-left": /* @__PURE__ */ r("path", { d: "M15 18l-6-6 6-6" }),
  "chevron-right": /* @__PURE__ */ r("path", { d: "M9 18l6-6-6-6" }),
  "chevron-up": /* @__PURE__ */ r("path", { d: "M18 15l-6-6-6 6" }),
  search: /* @__PURE__ */ $(b1, { children: [
    /* @__PURE__ */ r("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ r("path", { d: "M21 21l-4.3-4.3" })
  ] }),
  plus: /* @__PURE__ */ r("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ r("path", { d: "M5 12h14" }),
  alert: /* @__PURE__ */ $(b1, { children: [
    /* @__PURE__ */ r("path", { d: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" }),
    /* @__PURE__ */ r("path", { d: "M12 9v4M12 17h.01" })
  ] }),
  info: /* @__PURE__ */ $(b1, { children: [
    /* @__PURE__ */ r("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ r("path", { d: "M12 16v-4M12 8h.01" })
  ] }),
  "arrow-right": /* @__PURE__ */ r("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  "arrow-left": /* @__PURE__ */ r("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  "external-link": /* @__PURE__ */ $(b1, { children: [
    /* @__PURE__ */ r("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
    /* @__PURE__ */ r("path", { d: "M15 3h6v6M10 14L21 3" })
  ] }),
  copy: /* @__PURE__ */ $(b1, { children: [
    /* @__PURE__ */ r("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ r("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] }),
  trash: /* @__PURE__ */ r(b1, { children: /* @__PURE__ */ r("path", { d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" }) }),
  edit: /* @__PURE__ */ $(b1, { children: [
    /* @__PURE__ */ r("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ r("path", { d: "M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  settings: /* @__PURE__ */ $(b1, { children: [
    /* @__PURE__ */ r("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ r("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] }),
  user: /* @__PURE__ */ $(b1, { children: [
    /* @__PURE__ */ r("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ r("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ $(b1, { children: [
    /* @__PURE__ */ r("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ r("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ r("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  download: /* @__PURE__ */ r("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  upload: /* @__PURE__ */ r("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  menu: /* @__PURE__ */ r("path", { d: "M3 12h18M3 6h18M3 18h18" }),
  "more-horizontal": /* @__PURE__ */ $(b1, { children: [
    /* @__PURE__ */ r("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ r("circle", { cx: "19", cy: "12", r: "1" }),
    /* @__PURE__ */ r("circle", { cx: "5", cy: "12", r: "1" })
  ] }),
  mail: /* @__PURE__ */ $(b1, { children: [
    /* @__PURE__ */ r("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ r("path", { d: "M22 6l-10 7L2 6" })
  ] }),
  lock: /* @__PURE__ */ $(b1, { children: [
    /* @__PURE__ */ r("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ r("path", { d: "M7 11V7a5 5 0 0110 0v4" })
  ] }),
  eye: /* @__PURE__ */ $(b1, { children: [
    /* @__PURE__ */ r("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ r("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  "eye-off": /* @__PURE__ */ $(b1, { children: [
    /* @__PURE__ */ r("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ r("path", { d: "M1 1l22 22" })
  ] }),
  refresh: /* @__PURE__ */ $(b1, { children: [
    /* @__PURE__ */ r("path", { d: "M23 4v6h-6M1 20v-6h6" }),
    /* @__PURE__ */ r("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
  ] }),
  calendar: /* @__PURE__ */ $(b1, { children: [
    /* @__PURE__ */ r("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ r("path", { d: "M16 2v4M8 2v4M3 10h18" })
  ] }),
  clock: /* @__PURE__ */ $(b1, { children: [
    /* @__PURE__ */ r("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ r("path", { d: "M12 6v6l4 2" })
  ] }),
  "check-circle": /* @__PURE__ */ $(b1, { children: [
    /* @__PURE__ */ r("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ r("path", { d: "M22 4L12 14.01l-3-3" })
  ] }),
  "x-circle": /* @__PURE__ */ $(b1, { children: [
    /* @__PURE__ */ r("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ r("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] }),
  shield: /* @__PURE__ */ r(b1, { children: /* @__PURE__ */ r("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  globe: /* @__PURE__ */ $(b1, { children: [
    /* @__PURE__ */ r("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ r("path", { d: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
  ] }),
  file: /* @__PURE__ */ $(b1, { children: [
    /* @__PURE__ */ r("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
    /* @__PURE__ */ r("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
  ] }),
  folder: /* @__PURE__ */ r("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" }),
  home: /* @__PURE__ */ $(b1, { children: [
    /* @__PURE__ */ r("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
    /* @__PURE__ */ r("path", { d: "M9 22V12h6v10" })
  ] }),
  key: /* @__PURE__ */ r(b1, { children: /* @__PURE__ */ r("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) }),
  link: /* @__PURE__ */ $(b1, { children: [
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
  ban: /* @__PURE__ */ $(b1, { children: [
    /* @__PURE__ */ r("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ r("path", { d: "M4.93 4.93l14.14 14.14" })
  ] })
}, C1 = R1(function({ name: t, size: n = "md", strokeWidth: l, className: s, ...c }, d) {
  const o = typeof n == "string", a = t.indexOf(":"), i = a >= 0 ? M2[t.slice(0, a)] : void 0, u = a >= 0 ? t.slice(a + 1) : "", h = i?.style === "fill", b = i !== void 0 ? { dangerouslySetInnerHTML: { __html: i.icons[u] ?? "" } } : {};
  return /* @__PURE__ */ r(
    "svg",
    {
      ref: d,
      className: [o ? nr[n] : null, s].filter(Boolean).join(" "),
      width: o ? void 0 : n,
      height: o ? void 0 : n,
      viewBox: i !== void 0 ? i.viewBoxBy?.[u] ?? i.viewBox : "0 0 24 24",
      fill: h ? "currentColor" : "none",
      stroke: h ? "none" : "currentColor",
      strokeWidth: l ?? i?.strokeWidth ?? 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      ...c,
      ...b,
      children: i !== void 0 ? null : rr[t]
    }
  );
}), lr = "_stat_sjin9_1", or = "_label_sjin9_8", ar = "_row_sjin9_16", sr = "_value_sjin9_22", cr = "_delta_sjin9_28", ir = "_success_sjin9_33", dr = "_danger_sjin9_37", ur = "_neutral_sjin9_41", hr = "_hint_sjin9_45", gt = {
  stat: lr,
  label: or,
  row: ar,
  value: sr,
  delta: cr,
  success: ir,
  danger: dr,
  neutral: ur,
  hint: hr
}, Sm = R1(function({ label: t, value: n, delta: l, deltaTone: s = "neutral", hint: c, className: d, ...o }, a) {
  return /* @__PURE__ */ $(
    "div",
    {
      ref: a,
      className: [gt.stat, d].filter(Boolean).join(" "),
      ...o,
      children: [
        /* @__PURE__ */ r("div", { className: gt.label, children: t }),
        /* @__PURE__ */ $("div", { className: gt.row, children: [
          /* @__PURE__ */ r("div", { className: gt.value, children: n }),
          l != null && /* @__PURE__ */ r("div", { className: [gt.delta, gt[s]].join(" "), children: l })
        ] }),
        c != null && /* @__PURE__ */ r("div", { className: gt.hint, children: c })
      ]
    }
  );
}), fr = "_wrap_1nflq_1", pr = "_table_1nflq_8", mr = "_caption_1nflq_14", _r = "_none_1nflq_51", gr = "_horizontal_1nflq_57", vr = "_vertical_1nflq_67", kr = "_alternating_1nflq_85", xr = "_start_1nflq_89", yr = "_center_1nflq_93", br = "_end_1nflq_97", Mr = "_empty_1nflq_101", at = {
  wrap: fr,
  table: pr,
  caption: mr,
  none: _r,
  horizontal: gr,
  vertical: vr,
  alternating: kr,
  start: xr,
  center: yr,
  end: br,
  empty: Mr
};
function Om({
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
  const i = c === "default" || c === "both" ? "" : at[c];
  return /* @__PURE__ */ $("div", { className: [at.wrap, o].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ $(
      "table",
      {
        className: [
          at.table,
          i,
          d ? at.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          s != null && /* @__PURE__ */ r("caption", { className: at.caption, children: s }),
          /* @__PURE__ */ r("thead", { children: /* @__PURE__ */ r("tr", { children: e.map((u) => /* @__PURE__ */ r(
            "th",
            {
              className: u.align != null ? at[u.align] : void 0,
              scope: "col",
              children: u.header
            },
            u.key
          )) }) }),
          /* @__PURE__ */ r("tbody", { children: t.map((u) => /* @__PURE__ */ r("tr", { children: e.map((h) => /* @__PURE__ */ r(
            "td",
            {
              className: h.align != null ? at[h.align] : void 0,
              children: h.render != null ? h.render(u) : u[h.key]
            },
            h.key
          )) }, n(u))) })
        ]
      }
    ),
    t.length === 0 && l != null && /* @__PURE__ */ r("div", { className: at.empty, children: l })
  ] });
}
const Cr = "_emptyState_1swxw_1", wr = "_icon_1swxw_13", zr = "_title_1swxw_18", Lr = "_description_1swxw_24", $r = "_action_1swxw_30", Bt = {
  emptyState: Cr,
  icon: wr,
  title: zr,
  description: Lr,
  action: $r
};
function Am({
  icon: e,
  title: t,
  description: n,
  action: l,
  className: s,
  visible: c = !0
}) {
  return c === !1 ? null : /* @__PURE__ */ $("div", { className: [Bt.emptyState, s].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ r("div", { className: Bt.icon, children: e }),
    /* @__PURE__ */ r("div", { className: Bt.title, children: t }),
    n != null && /* @__PURE__ */ r("div", { className: Bt.description, children: n }),
    l != null && /* @__PURE__ */ r("div", { className: Bt.action, children: l })
  ] });
}
const Nr = "_field_149oz_1", Sr = "_label_149oz_8", Or = "_required_149oz_14", Ar = "_hint_149oz_19", Hr = "_error_149oz_24", Ft = {
  field: Nr,
  label: Sr,
  required: Or,
  hint: Ar,
  error: Hr
};
function Hm({
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
  const i = l ?? s, u = q1(), h = q1(), b = q1();
  if (a === !1) return null;
  const y = c != null ? h : i != null ? b : null, x = typeof d == "function" ? d({ inputId: u, hintId: b, errorId: h }) : d, m = ge(x) && typeof x.props.id == "string" ? x.props.id : void 0, k = m ?? t ?? u, f = ge(x) && (y != null || m == null && typeof x.type == "string"), p = m != null || t != null || f, g = f && ge(x) ? T0(x, {
    id: k,
    "aria-describedby": y != null ? [
      x.props["aria-describedby"],
      y
    ].filter((M) => typeof M == "string").join(" ") || void 0 : x.props["aria-describedby"],
    "aria-invalid": c != null ? !0 : x.props["aria-invalid"]
  }) : x;
  return /* @__PURE__ */ $("div", { className: [Ft.field, o].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ $(
      "label",
      {
        className: Ft.label,
        htmlFor: p ? k : void 0,
        children: [
          e,
          n === !0 && /* @__PURE__ */ r("span", { className: Ft.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    g,
    c != null ? /* @__PURE__ */ r("div", { id: h, className: Ft.error, "aria-live": "polite", children: c }) : i != null ? /* @__PURE__ */ r("div", { id: b, className: Ft.hint, children: i }) : null
  ] });
}
const jr = "_formfield_1kmwl_1", Vr = "_content_1kmwl_8", Tr = "_floating_1kmwl_43", Dr = "_label_1kmwl_111", Er = "_start_1kmwl_132", qr = "_required_1kmwl_169", Ir = "_end_1kmwl_175", Pr = "_filled_1kmwl_192", Rr = "_flat_1kmwl_199", Br = "_helper_1kmwl_206", Fr = "_invalid_1kmwl_211", Fe = {
  formfield: jr,
  content: Vr,
  floating: Tr,
  label: Dr,
  start: Er,
  required: qr,
  end: Ir,
  filled: Pr,
  flat: Rr,
  helper: Br,
  invalid: Fr
};
function jm({
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
  className: u,
  visible: h = !0
}) {
  const b = q1(), y = q1();
  if (h === !1) return null;
  const x = s ?? b, m = typeof i == "function" ? i({
    inputId: x
  }) : i, k = ge(m) ? m.type : null, f = typeof k == "string", p = ge(m) && typeof k != "symbol", g = ge(m) ? m.props : null, M = typeof g?.id == "string" ? g.id : void 0, v = f && ge(m) ? m.type.toLowerCase() : null, L = v != null && (v === "input" ? typeof g?.type != "string" || g.type.toLowerCase() !== "hidden" : v === "button" || v === "meter" || v === "output" || v === "progress" || v === "select" || v === "textarea"), C = p && (l != null || o || M == null && L), z = M != null || s != null || C, A = v === "input" && typeof g?.type == "string" ? g.type.toLowerCase() : null, S = v === "textarea" || v === "input" && (A == null || [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number"
  ].includes(A)), O = C && ge(m) ? T0(
    m,
    {
      id: M ?? x,
      ...c && S && g?.placeholder == null ? { placeholder: " " } : {},
      ...l != null ? {
        "aria-describedby": [
          g?.["aria-describedby"],
          y
        ].filter((_) => typeof _ == "string").join(" ")
      } : {},
      ...o ? {
        "aria-invalid": !0
      } : {}
    }
  ) : m, w = e != null ? /* @__PURE__ */ $(
    "label",
    {
      className: Fe.label,
      htmlFor: z ? M ?? x : void 0,
      children: [
        e,
        a === !0 && /* @__PURE__ */ r("span", { className: Fe.required, "aria-hidden": "true", children: "*" })
      ]
    }
  ) : null;
  return /* @__PURE__ */ $(
    "div",
    {
      className: [
        Fe.formfield,
        Fe[d],
        c ? Fe.floating : null,
        o ? Fe.invalid : null,
        u
      ].filter(Boolean).join(" "),
      children: [
        c ? null : w,
        /* @__PURE__ */ $("div", { className: Fe.content, children: [
          t != null && /* @__PURE__ */ r("div", { className: Fe.start, children: t }),
          O,
          c ? w : null,
          n != null && /* @__PURE__ */ r("div", { className: Fe.end, children: n })
        ] }),
        l != null && /* @__PURE__ */ r("div", { id: y, className: Fe.helper, children: l })
      ]
    }
  );
}
const Kr = "_fieldset_18z6t_1", Wr = "_legend_18z6t_11", Zr = "_legendText_18z6t_20", Ur = "_toggle_18z6t_24", Xr = "_content_18z6t_45", Gr = "_summary_18z6t_49", vt = {
  fieldset: Kr,
  legend: Wr,
  legendText: Zr,
  toggle: Ur,
  content: Xr,
  summary: Gr
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
  expandAriaLabel: u,
  collapseAriaLabel: h,
  onExpand: b,
  onCollapse: y,
  children: x,
  className: m,
  visible: k = !0
}) {
  const f = q1(), [p, g] = K(d);
  if (k === !1) return null;
  const M = c ?? p, v = s ? `${f}-content` : void 0, L = () => {
    const w = !M;
    c === void 0 && g(w), w ? y?.() : b?.();
  }, C = s || e != null || n != null || t != null, z = s ? M : !1, A = s && M && o != null, S = z ? a ?? "Expand" : i ?? "Collapse", O = z ? u ?? "Expand" : h ?? "Collapse";
  return /* @__PURE__ */ $(
    "fieldset",
    {
      className: [vt.fieldset, m].filter(Boolean).join(" "),
      children: [
        C ? /* @__PURE__ */ r("legend", { className: vt.legend, children: s ? /* @__PURE__ */ $(b1, { children: [
          /* @__PURE__ */ $(
            "button",
            {
              type: "button",
              className: vt.toggle,
              title: S,
              "aria-label": e == null ? O : void 0,
              "aria-expanded": !z,
              "aria-controls": v,
              onClick: L,
              children: [
                /* @__PURE__ */ r(
                  C1,
                  {
                    name: z ? "plus" : "minus",
                    size: 16,
                    "aria-hidden": "true"
                  }
                ),
                n != null && /* @__PURE__ */ r(
                  C1,
                  {
                    name: n,
                    "aria-hidden": "true",
                    ...l != null ? { style: { color: l } } : {}
                  }
                ),
                e != null && /* @__PURE__ */ r("span", { className: vt.legendText, children: e })
              ]
            }
          ),
          t
        ] }) : /* @__PURE__ */ $(b1, { children: [
          n != null && /* @__PURE__ */ r(
            C1,
            {
              name: n,
              "aria-hidden": "true",
              ...l != null ? { style: { color: l } } : {}
            }
          ),
          e != null && /* @__PURE__ */ r("span", { className: vt.legendText, children: e }),
          t
        ] }) }) : null,
        /* @__PURE__ */ r(
          "div",
          {
            className: vt.content,
            id: v,
            hidden: z,
            children: x
          }
        ),
        A ? /* @__PURE__ */ r("div", { className: vt.summary, children: o }) : null
      ]
    }
  );
}
const Yr = "_form_19k3s_1", Jr = {
  form: Yr
}, C2 = qt(null);
function Qr() {
  const e = ht(C2);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function Tm({
  model: e,
  onSubmit: t,
  onInvalidSubmit: n,
  action: l,
  method: s,
  children: c,
  className: d
}) {
  const [o, a] = K({}), [i, u] = K(0), h = G(o);
  h.current = o;
  const b = q((g) => {
    a(
      (M) => M[g.name] === g ? M : { ...M, [g.name]: g }
    );
  }, []), y = q((g) => {
    a((M) => {
      if (!(g in M)) return M;
      const v = { ...M };
      return delete v[g], v;
    });
  }, []), x = q(() => {
    const g = {};
    for (const M of Object.values(h.current)) {
      const v = M.validate();
      v.length > 0 && (g[M.name] = v);
    }
    return g;
  }, []), m = q(() => {
    const g = x();
    u((M) => M + 1), Object.keys(g).length === 0 ? t?.(e) : n?.(g);
  }, [x, e, t, n]), k = (g) => {
    l != null && s != null || (g.preventDefault(), m());
  }, f = v1(
    () => ({ registerField: b, unregisterField: y, submit: m, submitCount: i }),
    [b, y, m, i]
  ), p = [Jr.form, d].filter(Boolean).join(" ");
  return /* @__PURE__ */ r(C2.Provider, { value: f, children: /* @__PURE__ */ r(
    "form",
    {
      className: p,
      onSubmit: k,
      action: l,
      method: s,
      noValidate: !0,
      children: c
    }
  ) });
}
const wt = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", Dm = (e = "Required") => (t) => wt(t) ? e : null, Em = (e = "Invalid email") => (t) => wt(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, qm = (e, t = "Invalid format") => (n) => wt(n) || e.test(String(n)) ? null : t, Im = (e, t = `Minimum ${e} characters`) => (n) => wt(n) || String(n).length >= e ? null : t, Pm = (e, t = `Maximum ${e} characters`) => (n) => wt(n) || String(n).length <= e ? null : t, Rm = (e, t, n = `Between ${e} and ${t}`) => (l) => {
  if (wt(l)) return null;
  const s = Number(l);
  return !Number.isNaN(s) && s >= e && s <= t ? null : n;
}, Bm = (e, t = "Values do not match") => (n, l) => {
  if (wt(n)) return null;
  const s = typeof e == "function" ? e(l) : e;
  return n === s ? null : t;
}, Fm = (e = "Required") => (t) => t === !0 ? null : e, Km = (e) => (t, n) => e(t, n);
function el(e, t, n) {
  return e.map((l) => l(t, n)).filter((l) => l != null);
}
function Wm(e, t) {
  const { registerField: n, unregisterField: l, submitCount: s } = Qr(), [c, d] = K(t?.initialValue), [o, a] = K(!1), [i, u] = K(!1), h = G(() => []);
  h.current = () => el(t?.validate ?? [], c), g1(() => (n({ name: e, validate: () => h.current() }), () => l(e)), [e, n, l]), g1(() => {
    s > 0 && (a(!0), u(!1));
  }, [s]);
  const b = o && !i ? h.current() : [];
  return { value: c, setValue: (x) => {
    d(x), u(!0);
  }, errors: b };
}
const tl = "_select_1vjst_1", nl = "_invalid_1vjst_33", rl = "_xs_1vjst_40", ll = "_sm_1vjst_48", ol = "_md_1vjst_56", al = "_lg_1vjst_62", sl = "_xl_1vjst_68", M0 = {
  select: tl,
  invalid: nl,
  xs: rl,
  sm: ll,
  md: ol,
  lg: al,
  xl: sl
}, Dt = R1(
  function({ size: t = "md", invalid: n = !1, options: l, children: s, className: c, ...d }, o) {
    return /* @__PURE__ */ r(
      "select",
      {
        ref: o,
        "data-size": t,
        className: [
          M0.select,
          M0[t],
          n ? M0.invalid : null,
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
], Kt = {
  string: "Contains",
  number: "Equals",
  boolean: "Equals",
  date: "Equals",
  enum: "Equals"
}, cl = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
];
function il(e) {
  return cl.includes(e);
}
function _0(e, t) {
  return t.split(".").reduce((n, l) => {
    if (n != null)
      return n[l];
  }, e);
}
function K0(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function t0(e, t) {
  const n = K0(e), l = K0(t);
  if (typeof n == "number" && typeof l == "number") return n - l;
  const s = String(n ?? ""), c = String(l ?? "");
  return s < c ? -1 : s > c ? 1 : 0;
}
function x0(e) {
  if (e.secondOperator == null) return !1;
  if (il(e.secondOperator)) return !0;
  const t = e.secondValue;
  return t != null && t !== "";
}
function W0(e, t, n) {
  const l = _0(t, e.property), s = Z0(
    l,
    e.value,
    e.operator,
    n
  );
  if (!x0(e)) return s;
  const c = Z0(
    l,
    e.secondValue,
    e.secondOperator,
    n
  );
  return (e.logicalOperator ?? "And") === "And" ? s && c : s || c;
}
function Z0(e, t, n, l) {
  const s = l === "CaseInsensitive", c = (a) => s && typeof a == "string" ? a.toLowerCase() : a, d = c(e), o = c(t);
  switch (n) {
    case "Equals":
      return d === o || Array.isArray(d) && d.some((a) => c(a) === o);
    case "NotEquals":
      return d !== o && !(Array.isArray(d) && d.some((a) => c(a) === o));
    case "LessThan":
      return t0(d, o) < 0;
    case "LessThanOrEquals":
      return t0(d, o) <= 0;
    case "GreaterThan":
      return t0(d, o) > 0;
    case "GreaterThanOrEquals":
      return t0(d, o) >= 0;
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
function I0(e) {
  return "filters" in e;
}
function z2(e, t, n = {}) {
  const l = n.logicalOperator ?? "And", s = n.caseSensitivity ?? "CaseInsensitive";
  if (I0(t)) {
    if (t.filters.length === 0) return !0;
    const c = t.operator ?? l;
    return t.filters[c === "Or" ? "some" : "every"](
      (d) => z2(e, d, { logicalOperator: c, caseSensitivity: s })
    );
  }
  return t.operator === "Custom", W0(t, e, s);
}
function L2(e, t, n = {}) {
  return e.filter((l) => z2(l, t, n));
}
function dl(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function Le(e) {
  return typeof e == "string" ? `"${dl(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(Le).join(", ")}]` : `"${String(e)}"`;
}
function ul(e) {
  const t = (s, c) => {
    switch (s) {
      case "Equals":
        return `${e.property}.Equals(${Le(c)})`;
      case "NotEquals":
        return `!${e.property}.Equals(${Le(c)})`;
      case "LessThan":
        return `${e.property}.LessThan(${Le(c)})`;
      case "LessThanOrEquals":
        return `${e.property}.LessThanOrEquals(${Le(c)})`;
      case "GreaterThan":
        return `${e.property}.GreaterThan(${Le(c)})`;
      case "GreaterThanOrEquals":
        return `${e.property}.GreaterThanOrEquals(${Le(c)})`;
      case "Contains":
        return `${e.property}.Contains(${Le(c)})`;
      case "StartsWith":
        return `${e.property}.StartsWith(${Le(c)})`;
      case "EndsWith":
        return `${e.property}.EndsWith(${Le(c)})`;
      case "DoesNotContain":
        return `!${e.property}.Contains(${Le(c)})`;
      case "In":
        return `${e.property}.In(${Le(c)})`;
      case "NotIn":
        return `!${e.property}.In(${Le(c)})`;
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
function hl(e) {
  return I0(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(hl).filter(Boolean).join(` ${e.operator} `)})` : ul(e);
}
function fl(e) {
  return e.replace(/'/g, "''");
}
const pl = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function ml(e, t) {
  const n = e.property, l = t === "CaseInsensitive", s = (i) => l ? `tolower(${i})` : i, c = (i) => typeof i == "string" ? `'${fl(i)}'` : i instanceof Date ? `'${i.toISOString()}'` : String(i ?? ""), d = (i, u) => {
    const h = typeof u == "string", b = h && l ? s(n) : n;
    switch (i) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${b} ${pl[i]} ${h && l ? s(c(u)) : c(u)}`;
      case "Contains":
        return `contains(${s(n)}, ${s(c(u))})`;
      case "StartsWith":
        return `startswith(${s(n)}, ${s(c(u))})`;
      case "EndsWith":
        return `endswith(${s(n)}, ${s(c(u))})`;
      case "DoesNotContain":
        return `not(contains(${s(n)}, ${s(c(u))}))`;
      case "In":
        return Array.isArray(u) ? `${b} in (${u.map((y) => c(y)).join(", ")})` : `${b} in (${c(u)})`;
      case "NotIn":
        return Array.isArray(u) ? `not(${b} in (${u.map((y) => c(y)).join(", ")}))` : `not(${b} in (${c(u)}))`;
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
function _l(e, t = {}) {
  const n = t.caseSensitivity ?? "CaseInsensitive";
  if (I0(e)) {
    if (e.filters.length === 0) return "";
    const l = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((s) => _l(s, { caseSensitivity: n })).filter(Boolean).join(` ${l} `)})`;
  }
  return ml(e, n);
}
function gl(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((n, l) => {
    for (const s of t) {
      const c = s.sortOrder === "Ascending" ? 1 : -1, d = t0(
        _0(n, s.property),
        _0(l, s.property)
      );
      if (d !== 0) return d * c;
    }
    return 0;
  });
}
const vl = "_filter_1h8zc_1", kl = "_rows_1h8zc_9", xl = "_row_1h8zc_9", yl = "_join_1h8zc_21", bl = "_property_1h8zc_30", Ml = "_operator_1h8zc_34", Cl = "_value_1h8zc_38", wl = "_remove_1h8zc_42", zl = "_bar_1h8zc_58", Ll = "_add_1h8zc_64", $l = "_custom_1h8zc_78", Nl = "_summary_1h8zc_82", Sl = "_second_1h8zc_87", Ol = "_secondAdd_1h8zc_91", Al = "_addSecond_1h8zc_95", Hl = "_joinSelect_1h8zc_109", Q1 = {
  filter: vl,
  rows: kl,
  row: xl,
  join: yl,
  property: bl,
  operator: Ml,
  value: Cl,
  remove: wl,
  bar: zl,
  add: Ll,
  custom: $l,
  summary: Nl,
  second: Sl,
  secondAdd: Ol,
  addSecond: Al,
  joinSelect: Hl
}, Wt = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
], U0 = {
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
function X0({
  property: e,
  value: t,
  onChange: n
}) {
  if (e.editor != null)
    return /* @__PURE__ */ r(b1, { children: e.editor({ value: t, onChange: n }) });
  const l = e.type ?? "string";
  if (l === "enum" && e.values != null)
    return /* @__PURE__ */ r(
      Dt,
      {
        "aria-label": e.title ?? e.name,
        className: Q1.value,
        options: e.values,
        value: String(t ?? ""),
        onChange: (c) => n(c.target.value)
      }
    );
  if (l === "boolean")
    return /* @__PURE__ */ r(
      Dt,
      {
        "aria-label": e.title ?? e.name,
        className: Q1.value,
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
      className: Q1.value,
      ...s,
      value: t == null ? "" : String(t),
      onChange: (c) => n(
        l === "number" && c.target.value !== "" ? Number(c.target.value) : c.target.value
      )
    }
  );
}
function Zm({
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
  const [i, u] = K(
    () => l != null && l.length > 0 ? l.map((f, p) => ({ id: p, ...f })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: Kt[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), h = (f, p) => {
    u(
      (g) => g.map((M) => M.id === f ? { ...M, ...p } : M)
    );
  }, b = () => {
    const f = i[i.length - 1], p = Math.max(0, ...i.map((M) => M.id)) + 1, g = e[0];
    u((M) => [
      ...M,
      {
        id: p,
        property: f?.property ?? g?.name ?? "",
        operator: Kt[e.find(
          (v) => v.name === (f?.property ?? g?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, y = (f) => {
    u(
      (p) => p.length > 1 ? p.filter((g) => g.id !== f) : p
    );
  }, x = v1(() => {
    const f = [];
    for (const p of i) {
      if (p.property === "" || (p.value == null || p.value === "") && !Wt.includes(p.operator)) continue;
      const M = {
        property: p.property,
        operator: p.operator,
        value: p.value
      }, { secondOperator: v } = p;
      v != null && x0(p) && (M.secondOperator = v, M.secondValue = p.secondValue, M.logicalOperator = p.logicalOperator ?? "And"), f.push(M);
    }
    return f;
  }, [i]), m = v1(() => o == null || x.length === 0 ? o : L2(o, {
    operator: t,
    filters: x
  }, {
    caseSensitivity: n
  }), [o, x, t, n]);
  g1(() => {
    d != null && o != null && d(m ?? []);
  }, [m]);
  const k = (f) => e.find((p) => p.name === f) ?? { name: f, type: "string" };
  return /* @__PURE__ */ $("div", { className: [Q1.filter, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ r("div", { className: Q1.rows, role: "group", "aria-label": "Filter conditions", children: i.map((f, p) => {
      const g = k(f.property), M = s ? [Kt[g.type ?? "string"]] : w2, v = !Wt.includes(f.operator), L = f.secondOperator != null;
      return /* @__PURE__ */ $(D0, { children: [
        /* @__PURE__ */ $("div", { className: Q1.row, children: [
          p > 0 ? /* @__PURE__ */ r("span", { className: Q1.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ r(
            Dt,
            {
              "aria-label": `Condition ${p + 1} property`,
              className: Q1.property,
              value: f.property,
              onChange: (C) => {
                const z = e.find(
                  (A) => A.name === C.target.value
                );
                h(f.id, {
                  property: C.target.value,
                  operator: Kt[z?.type ?? "string"],
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
            Dt,
            {
              "aria-label": `Condition ${p + 1} operator`,
              className: Q1.operator,
              value: f.operator,
              onChange: (C) => {
                const z = C.target.value;
                h(
                  f.id,
                  Wt.includes(z) ? {
                    operator: z,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: z }
                );
              },
              options: M.map((C) => ({
                value: C,
                label: U0[C]
              }))
            }
          ),
          v ? /* @__PURE__ */ r(
            X0,
            {
              property: g,
              value: f.value,
              onChange: (C) => h(f.id, { value: C })
            }
          ) : null,
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: Q1.remove,
              "aria-label": `Remove condition ${p + 1}`,
              onClick: () => y(f.id),
              children: /* @__PURE__ */ r(C1, { name: "close", size: "sm" })
            }
          )
        ] }),
        v ? L ? /* @__PURE__ */ $(
          "div",
          {
            className: [Q1.row, Q1.second].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ r(
                Dt,
                {
                  "aria-label": `Condition ${p + 1} second-operator logic`,
                  className: Q1.joinSelect,
                  value: f.logicalOperator ?? "And",
                  onChange: (C) => h(f.id, {
                    logicalOperator: C.target.value
                  }),
                  options: [
                    { value: "And", label: "And" },
                    { value: "Or", label: "Or" }
                  ]
                }
              ),
              /* @__PURE__ */ r(
                Dt,
                {
                  "aria-label": `Condition ${p + 1} second operator`,
                  className: Q1.operator,
                  value: f.secondOperator,
                  onChange: (C) => {
                    const z = C.target.value;
                    h(
                      f.id,
                      Wt.includes(z) ? { secondOperator: z, secondValue: void 0 } : { secondOperator: z }
                    );
                  },
                  options: M.map((C) => ({
                    value: C,
                    label: U0[C]
                  }))
                }
              ),
              f.secondOperator == null || !Wt.includes(f.secondOperator) ? /* @__PURE__ */ r(
                X0,
                {
                  property: g,
                  value: f.secondValue,
                  onChange: (C) => h(f.id, { secondValue: C })
                }
              ) : null,
              /* @__PURE__ */ r(
                "button",
                {
                  type: "button",
                  className: Q1.remove,
                  "aria-label": `Remove second condition ${p + 1}`,
                  onClick: () => h(f.id, {
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  }),
                  children: /* @__PURE__ */ r(C1, { name: "close", size: "sm" })
                }
              )
            ]
          }
        ) : /* @__PURE__ */ r("div", { className: Q1.secondAdd, children: /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: Q1.addSecond,
            onClick: () => h(f.id, {
              secondOperator: Kt[g.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, f.id);
    }) }),
    /* @__PURE__ */ $("div", { className: Q1.bar, children: [
      /* @__PURE__ */ r("button", { type: "button", className: Q1.add, onClick: b, children: "Add filter" }),
      a != null ? /* @__PURE__ */ r("div", { className: Q1.custom, children: a }) : null,
      o != null ? /* @__PURE__ */ $("span", { className: Q1.summary, "aria-live": "polite", children: [
        m?.length ?? 0,
        " of ",
        o.length
      ] }) : null
    ] })
  ] });
}
const jl = "_pager_4cpp0_1", Vl = "_alignLeft_4cpp0_10", Tl = "_alignCenter_4cpp0_14", Dl = "_alignRight_4cpp0_18", El = "_alignJustify_4cpp0_22", ql = "_summary_4cpp0_26", Il = "_controls_4cpp0_31", Pl = "_button_4cpp0_37", Rl = "_active_4cpp0_73", Bl = "_ellipsis_4cpp0_85", Fl = "_size_4cpp0_91", pe = {
  pager: jl,
  alignLeft: Vl,
  alignCenter: Tl,
  alignRight: Dl,
  alignJustify: El,
  summary: ql,
  controls: Il,
  button: Pl,
  active: Rl,
  ellipsis: Bl,
  size: Fl
};
function Kl(e, t, n, l) {
  return e.replace("{0}", String(t)).replace("{1}", String(n)).replace("{2}", String(l));
}
function G0(e, t) {
  return e.replace("{0}", String(t));
}
function Wl(e, t, n) {
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
function Zl({
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
  pagingSummaryFormat: u = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: h,
  pageSizeText: b = "Items per page",
  firstPageTitle: y = "First page",
  prevPageTitle: x = "Previous page",
  nextPageTitle: m = "Next page",
  lastPageTitle: k = "Last page",
  pageTitleFormat: f = "Page {0}",
  pageAriaLabelFormat: p = "Page {0}",
  onPageChange: g,
  onPageSizeChange: M,
  ariaLabel: v = "Pagination",
  className: L,
  visible: C = !0
}) {
  const z = n ?? l, [A, S] = K(z), O = n !== void 0, w = O ? z : A, _ = Math.max(1, Math.ceil(e / t)), N = Math.min(Math.max(1, w), _), V = a ?? !0, T = d || _ > 1, j = Wl(N, _, c), D = q(
    (U) => {
      const m1 = Math.min(Math.max(1, U), _);
      O || S(m1);
      const d1 = (m1 - 1) * t;
      g?.({
        page: m1,
        skip: d1,
        top: t,
        pageCount: _,
        pageSize: t
      });
    },
    [O, g, _, t]
  ), Y = o === "center" ? pe.alignCenter : o === "right" ? pe.alignRight : o === "justify" ? pe.alignJustify : pe.alignLeft, r1 = {
    count: e,
    pageNumber: N,
    pageSize: t,
    pageCount: _
  }, n1 = (U) => {
    const m1 = Array.from(
      U.currentTarget.querySelectorAll(
        "button[data-pager-page]"
      )
    ), d1 = m1.indexOf(document.activeElement);
    d1 !== -1 && (U.key === "ArrowRight" || U.key === "ArrowDown" ? (U.preventDefault(), (m1[d1 + 1] ?? m1[0])?.focus()) : U.key === "ArrowLeft" || U.key === "ArrowUp" ? (U.preventDefault(), (m1[d1 - 1] ?? m1[m1.length - 1])?.focus()) : U.key === "Home" ? (U.preventDefault(), m1[0]?.focus()) : U.key === "End" && (U.preventDefault(), m1[m1.length - 1]?.focus()));
  };
  return C === !1 || !T ? null : /* @__PURE__ */ $(
    "nav",
    {
      className: [pe.pager, Y, L].filter(Boolean).join(" "),
      "aria-label": v,
      children: [
        V && /* @__PURE__ */ r("span", { className: pe.summary, "aria-live": "polite", children: h ? h(r1) : Kl(u, N, _, e) }),
        /* @__PURE__ */ $(
          "div",
          {
            className: pe.controls,
            role: "group",
            "aria-label": v,
            onKeyDown: n1,
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
                  "aria-label": x,
                  title: x,
                  children: "‹"
                }
              ),
              j.map(
                (U, m1) => U === "ellipsis" ? /* @__PURE__ */ r("span", { className: pe.ellipsis, "aria-hidden": "true", children: "…" }, `e${m1}`) : /* @__PURE__ */ r(
                  "button",
                  {
                    type: "button",
                    "data-pager-page": U,
                    className: [pe.button, U === N ? pe.active : ""].filter(Boolean).join(" "),
                    "aria-current": U === N ? "page" : void 0,
                    "aria-label": G0(p, U),
                    title: G0(f, U),
                    onClick: () => D(U),
                    children: U
                  },
                  U
                )
              ),
              /* @__PURE__ */ r(
                "button",
                {
                  type: "button",
                  className: pe.button,
                  disabled: N >= _,
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
                  disabled: N >= _,
                  onClick: () => D(_),
                  "aria-label": k,
                  title: k,
                  children: "»"
                }
              )
            ]
          }
        ),
        i && s && s.length > 0 && /* @__PURE__ */ $("label", { className: pe.size, children: [
          /* @__PURE__ */ r("span", { children: b }),
          /* @__PURE__ */ r(
            "select",
            {
              value: t,
              onChange: (U) => M?.(Number(U.target.value)),
              "aria-label": b,
              children: s.map((U) => /* @__PURE__ */ r("option", { value: U, children: U }, U))
            }
          )
        ] })
      ]
    }
  );
}
function S0(e) {
  const { pageNumber: t, onPageChange: n, summaryTemplate: l, showSummary: s, ...c } = e;
  return /* @__PURE__ */ r(
    Zl,
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
function Ul(e, t, n, l, s) {
  if (t.length === 0) return e.map((o) => ({ type: "row", row: o }));
  const c = (o) => n.find((a) => a.property === o), d = (o, a, i) => {
    const u = t[a];
    if (u === void 0)
      return o.map((m) => ({ type: "row", row: m }));
    const h = c(u), b = /* @__PURE__ */ new Map(), y = [];
    o.forEach((m) => {
      const k = String(s(m, u) ?? ""), f = b.get(k);
      f ? f.push(m) : (b.set(k, [m]), y.push(k));
    });
    const x = [];
    return y.forEach((m) => {
      const k = b.get(m), f = [...i, m].join($2), p = k[0], g = p !== void 0 ? s(p, u) : void 0;
      x.push({
        type: "group",
        group: {
          key: f,
          display: g0(g, h?.format),
          property: u,
          title: h?.title ?? u,
          count: k.length,
          level: a
        }
      }), l.has(f) && x.push(...d(k, a + 1, [...i, m]));
    }), x;
  };
  return d(e, 0, []);
}
function Y0(e, t, n) {
  const l = /* @__PURE__ */ new Set(), s = (c, d, o) => {
    const a = t[d];
    if (a === void 0 || c.length === 0) return;
    const i = /* @__PURE__ */ new Map(), u = [];
    c.forEach((h) => {
      const b = String(n(h, a) ?? ""), y = i.get(b);
      y ? y.push(h) : (i.set(b, [h]), u.push(b));
    }), u.forEach((h) => {
      const b = [...o, h].join($2);
      l.add(b), s(i.get(h), d + 1, [...o, h]);
    });
  };
  return s(e, 0, []), l;
}
function o0(e, t) {
  return e.property ?? `col-${t}`;
}
function Xl(e, t) {
  const n = {};
  let l = 0;
  return e.forEach(({ key: s, column: c }) => {
    if (!c.frozen) return;
    n[s] = l === 0 ? "0px" : `${l}px`;
    const d = t[s] ?? c.width ?? "8rem";
    l += parseFloat(d);
  }), n;
}
function Gl(e, t) {
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
function g0(e, t) {
  if (t == null || t === "") return String(e ?? "");
  const n = /^N(\d+)$/i.exec(t);
  if (n && typeof e == "number") return e.toFixed(Number(n[1]));
  if (t === "d" || t === "D") {
    const l = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return l != null && !Number.isNaN(l.getTime()) ? l.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const J0 = [
  "Ascending",
  "Descending",
  null
];
function Yl(e, t, n = {}) {
  const l = e.find((c) => c.property === t), s = J0[(l ? J0.indexOf(l.sortOrder) : -1) + 1] ?? null;
  return s == null ? e.filter((c) => c.property !== t) : n.multi ? [
    ...e.filter((c) => c.property !== t),
    { property: t, sortOrder: s }
  ] : [{ property: t, sortOrder: s }];
}
function Jl(e, t) {
  return gl(e, t);
}
function Ql(e, t, n) {
  const l = Math.max(1, Math.ceil(e.length / n)), s = Math.min(Math.max(1, t), l), c = (s - 1) * n;
  return {
    items: e.slice(c, c + n),
    pageCount: l,
    pageNumber: s,
    total: e.length
  };
}
function eo(e, t, n = {}) {
  const l = [...t.filters.entries()].filter(([, o]) => o.value !== "" && o.value !== void 0).map(
    ([o, a]) => ({
      property: o,
      operator: a.operator ?? "Contains",
      value: Gl(
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
  ) : e, c = Jl(s, t.sorts);
  return {
    ...Ql(c, t.pageNumber, t.pageSize),
    filtered: c,
    sorts: t.sorts,
    filters: t.filters,
    pageSize: t.pageSize
  };
}
function Q0(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
function to(e, t, n) {
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
function no(e, t, n = Ct) {
  const l = (c) => /["\r\n,]/.test(c) ? `"${c.replace(/"/g, '""')}"` : c, s = [
    t.map((c) => l(c.title ?? c.property ?? "")).join(",")
  ];
  return e.forEach((c) => {
    s.push(
      t.map((d) => l(g0(n(c, d.property), d.format))).join(",")
    );
  }), `${s.join(`\r
`)}\r
`;
}
const ro = "_grid_gf8ma_1", lo = "_toolbar_gf8ma_8", oo = "_picker_gf8ma_13", ao = "_pickerButton_gf8ma_17", so = "_pickerPanel_gf8ma_31", co = "_pickerItem_gf8ma_46", io = "_groupPanel_gf8ma_55", uo = "_groupPanelActive_gf8ma_66", ho = "_groupPanelText_gf8ma_70", fo = "_groupChip_gf8ma_74", po = "_groupRemove_gf8ma_85", mo = "_groupRow_gf8ma_94", _o = "_groupCell_gf8ma_98", go = "_groupToggle_gf8ma_103", vo = "_editRow_gf8ma_116", ko = "_editCell_gf8ma_120", xo = "_editInput_gf8ma_125", yo = "_commandCell_gf8ma_135", bo = "_commandButton_gf8ma_141", Mo = "_data_gf8ma_156", Co = "_table_gf8ma_163", wo = "_header_gf8ma_169", zo = "_center_gf8ma_181", Lo = "_right_gf8ma_185", $o = "_sortButton_gf8ma_189", No = "_sortIndicator_gf8ma_207", So = "_sortIndex_gf8ma_211", Oo = "_cell_gf8ma_222", Ao = "_clickable_gf8ma_236", Ho = "_frozen_gf8ma_244", jo = "_selected_gf8ma_250", Vo = "_resizeHandle_gf8ma_258", To = "_filterCell_gf8ma_276", Do = "_filterSelect_gf8ma_284", Eo = "_filterInput_gf8ma_294", qo = "_empty_gf8ma_305", Io = "_loading_gf8ma_311", Po = "_visuallyHidden_gf8ma_325", Ro = "_virtualScroller_gf8ma_334", Bo = "_spacerRow_gf8ma_339", Fo = "_footerRow_gf8ma_344", Ko = "_footerCell_gf8ma_348", Wo = "_footerValue_gf8ma_355", p1 = {
  grid: ro,
  toolbar: lo,
  picker: oo,
  pickerButton: ao,
  pickerPanel: so,
  pickerItem: co,
  groupPanel: io,
  groupPanelActive: uo,
  groupPanelText: ho,
  groupChip: fo,
  groupRemove: po,
  groupRow: mo,
  groupCell: _o,
  groupToggle: go,
  editRow: vo,
  editCell: ko,
  editInput: xo,
  commandCell: yo,
  commandButton: bo,
  data: Mo,
  table: Co,
  header: wo,
  center: zo,
  right: Lo,
  sortButton: $o,
  sortIndicator: No,
  sortIndex: So,
  cell: Oo,
  clickable: Ao,
  frozen: Ho,
  selected: jo,
  resizeHandle: Vo,
  filterCell: To,
  filterSelect: Do,
  filterInput: Eo,
  empty: qo,
  loading: Io,
  visuallyHidden: Po,
  virtualScroller: Ro,
  spacerRow: Bo,
  footerRow: Fo,
  footerCell: Ko,
  footerValue: Wo
}, Zo = {
  Ascending: "ascending",
  Descending: "descending"
};
function e2(e, t) {
  return e.filterable ?? t;
}
function Uo(e, t) {
  return e.sortable ?? t;
}
function Xo(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function Um({
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
  pageSize: u = 10,
  pageSizeOptions: h,
  pageNumbersCount: b = 5,
  pagerPosition: y = "Bottom",
  showPagingSummary: x = !0,
  showPageSizeSelector: m = !0,
  selectionMode: k = "None",
  selectedKeys: f,
  onSelectionChange: p,
  showColumnPicker: g = !1,
  columnPickerText: M = "Columns",
  allowColumnResize: v = !1,
  allowColumnReorder: L = !1,
  allowGrouping: C = !1,
  groupPanelText: z = "Drag a column header here to group",
  groupExpanded: A = !0,
  aggregates: S,
  showExportButton: O = !1,
  exportFileName: w = "grid-data",
  serverMode: _ = !1,
  totalCount: N,
  onRangeChange: V,
  virtualize: T = !1,
  virtualRowHeight: j = 40,
  virtualHeight: D = 480,
  editMode: Y = "None",
  allowRowCreate: r1 = !1,
  onRowUpdate: n1,
  onRowCreate: U,
  onRowDelete: m1,
  isLoading: d1 = !1,
  empty: l1 = "No records found",
  ariaLabel: F,
  className: c1,
  onRowClick: t1
}) {
  const [o1, f1] = K([]), [y1, N1] = K(
    /* @__PURE__ */ new Map()
  ), [D1, M1] = K(1), [V1, $1] = K(u), [re, le] = K(
    () => e.map((E, I) => o0(E, I))
  ), [B1, je] = K(
    () => new Set(
      e.map((E, I) => E.visible !== !1 ? o0(E, I) : "").filter(Boolean)
    )
  ), [oe, Me] = K({}), [W, H] = K(!1), [P, Q] = K([]), [u1, J] = K(
    null
  ), [k1, O1] = K(null), [E1, G1] = K({}), [ue, pt] = K(0), [X, L1] = K(D), ee = G(null), Se = G(null), Ce = v1(() => {
    const E = /* @__PURE__ */ new Map();
    return e.forEach((I, s1) => E.set(o0(I, s1), I)), E;
  }, [e]), w1 = v1(
    () => re.filter((E) => B1.has(E)).map((E) => ({ key: E, column: Ce.get(E) })).filter(
      (E) => E.column != null
    ),
    [re, B1, Ce]
  ), F1 = v1(
    () => Xl(w1, oe),
    [w1, oe]
  ), ae = Y !== "None" || m1 != null || r1, K1 = v1(() => {
    if (_) {
      const E = N ?? t.length, I = Math.max(1, Math.ceil(E / V1));
      return {
        items: [...t],
        filtered: [...t],
        total: E,
        pageCount: I,
        pageNumber: D1,
        pageSize: V1,
        sorts: o1,
        filters: y1
      };
    }
    return eo(
      t,
      {
        sorts: o1,
        filters: y1,
        pageNumber: D1,
        // Without a pager the grid shows every row (Radzen parity); the
        // internal slice only applies when paging UI is on.
        pageSize: i ? V1 : Number.MAX_SAFE_INTEGER
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
    y1,
    D1,
    V1,
    a,
    o,
    e,
    _,
    N,
    i
  ]), Ge = G(V);
  g1(() => {
    Ge.current = V;
  });
  const B = v1(
    () => [...y1.entries()].filter(([, E]) => E.value !== "" && E.value !== void 0).map(([E, I]) => ({
      property: E,
      operator: I.operator ?? Q0(
        e.find((s1) => s1.property === E)?.type ?? "string"
      ),
      value: I.value ?? ""
    })),
    [y1, e]
  );
  g1(() => {
    !_ || Ge.current == null || Ge.current({
      start: (D1 - 1) * V1,
      count: V1,
      pageNumber: D1,
      pageSize: V1,
      sorts: o1,
      filters: B,
      logicalOperator: a
    });
  }, [
    _,
    D1,
    V1,
    o1,
    B,
    a
  ]);
  const a1 = v1(() => new Set(P), [P]), j1 = v1(() => u1 || (A ? Y0(K1.items, P, Ct) : /* @__PURE__ */ new Set()), [u1, A, K1.items, P]), I1 = v1(
    () => Ul(K1.items, P, e, j1, Ct),
    [K1.items, P, e, j1]
  ), se = v1(
    () => P.length > 0 ? w1.filter(
      (E) => E.column.property == null || !a1.has(E.column.property)
    ) : w1,
    [w1, P, a1]
  ), Ve = (E) => {
    E !== "" && f1(Yl(o1, E, { multi: s }));
  }, R = (E, I) => {
    N1((s1) => {
      const i1 = new Map(s1);
      return i1.set(E, I), i1;
    }), M1(1);
  }, Z = (E) => {
    $1(E), M1(1);
  }, e1 = (E) => {
    if (k === "None") return;
    const I = n(E), s1 = f ?? [];
    let i1;
    k === "Single" ? i1 = s1.length === 1 && s1[0] === I ? [] : [I] : i1 = s1.includes(I) ? s1.filter((P1) => P1 !== I) : [...s1, I], p?.(i1);
  }, _1 = (E) => {
    t1?.(E);
  }, h1 = (E, I, s1) => {
    ee.current = { key: E, startX: I, startWidth: s1 };
  }, x1 = (E) => {
    const I = ee.current;
    if (!I) return;
    const s1 = E - I.startX, i1 = Math.max(48, I.startWidth + s1);
    Me((P1) => ({ ...P1, [I.key]: `${i1}px` }));
  }, H1 = () => {
    ee.current = null;
  }, A1 = (E) => {
    Se.current = E;
  }, Y1 = (E) => {
    const I = Se.current;
    Se.current = null, !(!I || I === E) && le((s1) => {
      const i1 = [...s1], P1 = i1.indexOf(I), De = i1.indexOf(E);
      return P1 < 0 || De < 0 ? s1 : (i1.splice(P1, 1), i1.splice(De, 0, I), i1);
    });
  }, te = (E) => {
    je((I) => {
      const s1 = new Set(I);
      return s1.has(E) ? s1.delete(E) : s1.add(E), s1;
    });
  }, he = () => {
    const E = Se.current;
    if (Se.current = null, !E || !C) return;
    const s1 = Ce.get(E)?.property;
    s1 && (Q(
      (i1) => i1.includes(s1) ? i1 : [...i1, s1]
    ), J(null));
  }, ne = (E) => {
    Q((I) => I.filter((s1) => s1 !== E)), J(null);
  }, J1 = (E) => {
    J((I) => {
      const s1 = I ?? (A ? Y0(K1.items, P, Ct) : /* @__PURE__ */ new Set()), i1 = new Set(s1);
      return i1.has(E) ? i1.delete(E) : i1.add(E), i1;
    });
  }, Pe = (E) => {
    const I = {};
    e.forEach((s1) => {
      s1.property && (I[s1.property] = Ct(E, s1.property));
    }), G1(I), O1(String(n(E)));
  }, Te = () => {
    const E = {};
    e.forEach((I) => {
      I.property && I.type === "boolean" && (E[I.property] = !1);
    }), G1(E), O1("__new__");
  }, Re = () => {
    O1(null), G1({});
  }, l0 = (E) => {
    if (k1 === "__new__") {
      const I = Object.fromEntries(
        e.filter((s1) => s1.property).map((s1) => [s1.property, E1[s1.property]])
      );
      U?.(I);
    } else if (E != null) {
      const I = { ...E, ...E1 };
      n1?.(E, I);
    }
    Re();
  }, It = i && (y === "Top" || y === "TopAndBottom"), mt = i && (y === "Bottom" || y === "TopAndBottom"), I2 = d && e.some((E) => e2(E, d)), P2 = (E, I, s1) => E.render ? E.render(I, { index: 0 }) : g0(Ct(I, E.property), E.format), R2 = (E) => {
    const I = [p1.cell];
    return E.align === "center" && I.push(p1.center), E.align === "right" && I.push(p1.right), E.frozen && I.push(p1.frozen), I.join(" ");
  }, B0 = _ ? t : K1.filtered, B2 = () => {
    const E = no(
      B0,
      se.map((P1) => P1.column)
    ), I = new Blob([`\uFEFF${E}`], {
      type: "text/csv;charset=utf-8"
    }), s1 = URL.createObjectURL(I), i1 = document.createElement("a");
    i1.href = s1, i1.download = `${w}.csv`, document.body.appendChild(i1), i1.click(), i1.remove(), URL.revokeObjectURL(s1);
  }, zt = I1.length, _t = v1(() => {
    if (!T || zt === 0)
      return { start: 0, end: zt, top: 0, bottom: 0 };
    const E = 5, I = Math.max(
      0,
      Math.floor(ue / j) - E
    ), s1 = Math.ceil(X / j) + E * 2, i1 = Math.min(zt, I + s1), P1 = I * j, De = Math.max(0, (zt - i1) * j);
    return { start: I, end: i1, top: P1, bottom: De };
  }, [T, zt, ue, j, X]), y0 = se.length + (ae ? 1 : 0);
  return /* @__PURE__ */ $("div", { className: [p1.grid, c1].filter(Boolean).join(" "), children: [
    It && /* @__PURE__ */ r(
      S0,
      {
        pageNumber: K1.pageNumber,
        pageSize: K1.pageSize,
        count: K1.total,
        pageSizeOptions: h,
        pageNumbersCount: b,
        showSummary: x,
        showPageSizeSelector: m,
        ariaLabel: mt ? "Pagination (top)" : "Pagination",
        onPageChange: M1,
        onPageSizeChange: Z
      }
    ),
    (C || r1 || g || O) && /* @__PURE__ */ $("div", { className: p1.toolbar, children: [
      C && /* @__PURE__ */ r(
        "div",
        {
          className: [
            p1.groupPanel,
            P.length > 0 ? p1.groupPanelActive : ""
          ].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: C ? (E) => E.preventDefault() : void 0,
          onDrop: C ? he : void 0,
          children: P.length > 0 ? P.map((E) => {
            const I = e.find((s1) => s1.property === E)?.title ?? E;
            return /* @__PURE__ */ $("span", { className: p1.groupChip, children: [
              I,
              ":",
              " ",
              /* @__PURE__ */ r(
                "button",
                {
                  type: "button",
                  className: p1.groupRemove,
                  onClick: () => ne(E),
                  "aria-label": `Remove group by ${I}`,
                  children: /* @__PURE__ */ r(C1, { name: "close", size: "sm" })
                }
              )
            ] }, E);
          }) : /* @__PURE__ */ r("span", { className: p1.groupPanelText, children: z })
        }
      ),
      r1 && /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          className: p1.pickerButton,
          onClick: Te,
          children: "Add row"
        }
      ),
      g && /* @__PURE__ */ $("div", { className: p1.picker, children: [
        /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: p1.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": W,
            onClick: () => H((E) => !E),
            children: M
          }
        ),
        W && /* @__PURE__ */ r(
          "div",
          {
            className: p1.pickerPanel,
            role: "menu",
            "aria-label": M,
            children: e.map((E, I) => {
              const s1 = o0(E, I);
              return /* @__PURE__ */ $("label", { className: p1.pickerItem, children: [
                /* @__PURE__ */ r(
                  "input",
                  {
                    type: "checkbox",
                    checked: B1.has(s1),
                    onChange: () => te(s1)
                  }
                ),
                E.title ?? E.property
              ] }, s1);
            })
          }
        )
      ] }),
      O && /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          className: p1.pickerButton,
          onClick: B2,
          children: "Export CSV"
        }
      )
    ] }),
    /* @__PURE__ */ $(
      "div",
      {
        className: [p1.data, T ? p1.virtualScroller : ""].filter(Boolean).join(" "),
        style: T ? { maxHeight: D } : void 0,
        onScroll: T ? (E) => {
          pt(E.currentTarget.scrollTop), L1(E.currentTarget.clientHeight);
        } : void 0,
        children: [
          /* @__PURE__ */ $(
            "table",
            {
              className: p1.table,
              role: "grid",
              "aria-rowcount": (T ? zt : K1.total) + 1,
              "aria-label": F,
              "aria-busy": d1 || void 0,
              children: [
                /* @__PURE__ */ $("colgroup", { children: [
                  se.map(({ key: E, column: I }) => /* @__PURE__ */ r(
                    "col",
                    {
                      style: {
                        width: oe[E] ?? I.width,
                        minWidth: I.minWidth,
                        maxWidth: I.maxWidth
                      }
                    },
                    E
                  )),
                  ae && /* @__PURE__ */ r("col", { style: { width: "8rem" } })
                ] }),
                /* @__PURE__ */ $("thead", { children: [
                  /* @__PURE__ */ $("tr", { children: [
                    se.map(({ key: E, column: I }) => {
                      const s1 = Uo(I, l), i1 = o1.find((fe) => fe.property === I.property), P1 = i1 ? o1.indexOf(i1) + 1 : 0, De = I.align ?? "left";
                      return /* @__PURE__ */ $(
                        "th",
                        {
                          "aria-sort": s1 && i1 ? Zo[i1.sortOrder] : "none",
                          className: [
                            p1.header,
                            De === "center" ? p1.center : "",
                            De === "right" ? p1.right : "",
                            I.frozen ? p1.frozen : ""
                          ].filter(Boolean).join(" "),
                          style: I.frozen ? { left: F1[E] } : void 0,
                          scope: "col",
                          draggable: L || C || void 0,
                          onDragStart: L || C ? (fe) => {
                            fe.dataTransfer && (fe.dataTransfer.effectAllowed = "move"), A1(E);
                          } : void 0,
                          onDragOver: L ? (fe) => fe.preventDefault() : void 0,
                          onDrop: L ? () => Y1(E) : void 0,
                          children: [
                            s1 ? /* @__PURE__ */ $(
                              "button",
                              {
                                type: "button",
                                className: p1.sortButton,
                                onClick: () => I.property != null && Ve(I.property),
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
                                  P1 > 1 && c && /* @__PURE__ */ r("span", { className: p1.sortIndex, children: P1 })
                                ]
                              }
                            ) : I.title ?? I.property,
                            v && /* @__PURE__ */ r(
                              "span",
                              {
                                className: p1.resizeHandle,
                                "data-dx-grid-resize": !0,
                                role: "separator",
                                "aria-orientation": "vertical",
                                "aria-label": `Resize ${I.title ?? I.property}`,
                                onMouseDown: (fe) => {
                                  fe.preventDefault(), fe.stopPropagation();
                                  const Lt = oe[E] ?? I.width, Be = Lt ? parseFloat(Lt) : 96;
                                  h1(
                                    E,
                                    fe.clientX,
                                    Number.isFinite(Be) ? Be : 96
                                  );
                                },
                                onMouseMove: (fe) => {
                                  ee.current?.key === E && x1(fe.clientX);
                                },
                                onMouseUp: H1,
                                onMouseLeave: () => {
                                  ee.current?.key === E && H1();
                                }
                              }
                            )
                          ]
                        },
                        E
                      );
                    }),
                    ae && /* @__PURE__ */ r("th", { className: p1.header, scope: "col", children: "Actions" })
                  ] }),
                  I2 && /* @__PURE__ */ r("tr", { children: se.map(({ key: E, column: I }) => {
                    if (!e2(I, d))
                      return /* @__PURE__ */ r("td", { className: p1.filterCell }, E);
                    const s1 = y1.get(I.property ?? "");
                    return /* @__PURE__ */ $("td", { className: p1.filterCell, children: [
                      /* @__PURE__ */ $(
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
                          value: s1?.operator ?? Q0(I.type ?? "string"),
                          onChange: (i1) => R(I.property ?? "", {
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
                          onChange: (i1) => R(I.property ?? "", {
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
                /* @__PURE__ */ $("tbody", { children: [
                  k1 === "__new__" && /* @__PURE__ */ $("tr", { className: p1.editRow, children: [
                    se.map(({ key: E, column: I }) => /* @__PURE__ */ r("td", { className: p1.editCell, children: I.property && /* @__PURE__ */ r(
                      "input",
                      {
                        className: p1.editInput,
                        type: I.type === "number" ? "number" : I.type === "boolean" ? "checkbox" : "text",
                        checked: I.type === "boolean" ? !!E1[I.property] : void 0,
                        value: I.type === "boolean" ? void 0 : String(E1[I.property] ?? ""),
                        onChange: (s1) => G1((i1) => ({
                          ...i1,
                          [I.property]: I.type === "boolean" ? s1.target.checked : s1.target.value
                        })),
                        "aria-label": `${I.title ?? I.property} (new)`
                      }
                    ) }, E)),
                    ae && /* @__PURE__ */ $("td", { className: p1.editCell, children: [
                      /* @__PURE__ */ r(
                        "button",
                        {
                          type: "button",
                          className: p1.commandButton,
                          onClick: () => l0(),
                          children: "Save"
                        }
                      ),
                      /* @__PURE__ */ r(
                        "button",
                        {
                          type: "button",
                          className: p1.commandButton,
                          onClick: Re,
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
                  I1.slice(_t.start, _t.end).map((E, I) => {
                    const s1 = _t.start + I, i1 = T ? s1 + 2 : void 0;
                    if (E.type === "group" && E.group) {
                      const Be = j1.has(E.group.key);
                      return /* @__PURE__ */ r(
                        "tr",
                        {
                          className: p1.groupRow,
                          "aria-rowindex": i1,
                          children: /* @__PURE__ */ r("td", { colSpan: y0, className: p1.groupCell, children: /* @__PURE__ */ $(
                            "button",
                            {
                              type: "button",
                              className: p1.groupToggle,
                              "aria-expanded": Be,
                              style: {
                                paddingInlineStart: `${E.group.level * 16}px`
                              },
                              onClick: () => J1(E.group.key),
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
                    const P1 = E.row, De = n(P1), fe = (f ?? []).includes(De), Lt = k1 != null && k1 === String(De);
                    return /* @__PURE__ */ $(
                      "tr",
                      {
                        "aria-rowindex": i1,
                        className: [
                          t1 || k !== "None" ? p1.clickable : "",
                          fe ? p1.selected : "",
                          Lt ? p1.editRow : ""
                        ].filter(Boolean).join(" "),
                        "aria-selected": k !== "None" ? fe : void 0,
                        onClick: t1 || k !== "None" ? (Be) => {
                          Xo(Be.target) || (_1(P1), e1(P1));
                        } : void 0,
                        children: [
                          se.map(({ key: Be, column: ve }) => /* @__PURE__ */ r(
                            "td",
                            {
                              className: R2(ve),
                              style: ve.frozen ? { left: F1[Be] } : void 0,
                              children: Lt && ve.property ? /* @__PURE__ */ r(
                                "input",
                                {
                                  className: p1.editInput,
                                  type: ve.type === "number" ? "number" : ve.type === "boolean" ? "checkbox" : "text",
                                  checked: ve.type === "boolean" ? !!E1[ve.property] : void 0,
                                  value: ve.type === "boolean" ? void 0 : String(E1[ve.property] ?? ""),
                                  onChange: (F0) => G1((F2) => ({
                                    ...F2,
                                    [ve.property]: ve.type === "boolean" ? F0.target.checked : F0.target.value
                                  })),
                                  "aria-label": `${ve.title ?? ve.property} (edit)`
                                }
                              ) : P2(ve, P1)
                            },
                            Be
                          )),
                          ae && /* @__PURE__ */ r("td", { className: p1.commandCell, children: Lt ? /* @__PURE__ */ $(b1, { children: [
                            /* @__PURE__ */ r(
                              "button",
                              {
                                type: "button",
                                className: p1.commandButton,
                                onClick: () => l0(P1),
                                children: "Save"
                              }
                            ),
                            /* @__PURE__ */ r(
                              "button",
                              {
                                type: "button",
                                className: p1.commandButton,
                                onClick: Re,
                                children: "Cancel"
                              }
                            )
                          ] }) : /* @__PURE__ */ $(b1, { children: [
                            Y !== "None" && /* @__PURE__ */ r(
                              "button",
                              {
                                type: "button",
                                className: p1.commandButton,
                                onClick: () => Pe(P1),
                                children: "Edit"
                              }
                            ),
                            m1 && /* @__PURE__ */ r(
                              "button",
                              {
                                type: "button",
                                className: p1.commandButton,
                                onClick: () => m1(P1),
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
                S && S.length > 0 && /* @__PURE__ */ r("tfoot", { children: /* @__PURE__ */ $("tr", { className: p1.footerRow, children: [
                  se.map(({ key: E, column: I }) => {
                    const s1 = S.filter(
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
                        children: s1.map((i1, P1) => /* @__PURE__ */ $(
                          "div",
                          {
                            className: p1.footerValue,
                            children: [
                              i1.title ? `${i1.title}: ` : "",
                              g0(
                                to(B0, i1, Ct),
                                i1.format
                              )
                            ]
                          },
                          `${i1.property}-${i1.type}-${P1}`
                        ))
                      },
                      E
                    );
                  }),
                  ae && /* @__PURE__ */ r("td", { className: p1.footerCell })
                ] }) })
              ]
            }
          ),
          K1.items.length === 0 && !d1 && /* @__PURE__ */ r("div", { className: p1.empty, children: l1 }),
          d1 && /* @__PURE__ */ r("div", { className: p1.loading, role: "status", children: "Loading…" })
        ]
      }
    ),
    mt && /* @__PURE__ */ r(
      S0,
      {
        pageNumber: K1.pageNumber,
        pageSize: K1.pageSize,
        count: K1.total,
        pageSizeOptions: h,
        pageNumbersCount: b,
        showSummary: x,
        showPageSizeSelector: m,
        ariaLabel: It ? "Pagination (bottom)" : "Pagination",
        onPageChange: M1,
        onPageSizeChange: Z
      }
    )
  ] });
}
const Go = "_wrap_1e4xo_1", Yo = "_grid_1e4xo_7", Jo = "_stacked_1e4xo_13", Qo = "_item_1e4xo_19", ea = "_empty_1e4xo_25", Zt = {
  wrap: Go,
  grid: Yo,
  stacked: Jo,
  item: Qo,
  empty: ea
};
function Xm({
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
  className: u,
  ariaLabel: h = "Data list"
}) {
  const [b, y] = K(1), [x, m] = K(t), k = e.length, f = Math.max(1, Math.ceil(k / x)), p = Math.min(Math.max(1, b), f), g = v1(() => {
    const v = (p - 1) * x;
    return e.slice(v, v + x);
  }, [e, p, x]), M = l ? Zt.grid : Zt.stacked;
  return /* @__PURE__ */ $(
    "div",
    {
      className: [Zt.wrap, u].filter(Boolean).join(" "),
      "aria-label": h,
      children: [
        a && o != null ? o : k === 0 ? d ?? /* @__PURE__ */ r("div", { className: Zt.empty, children: c }) : /* @__PURE__ */ r("div", { className: M, children: g.map((v, L) => /* @__PURE__ */ r("div", { className: Zt.item, children: s ? s(v, L) : String(v) }, L)) }),
        /* @__PURE__ */ r(
          S0,
          {
            pageNumber: p,
            pageSize: x,
            count: k,
            pageSizeOptions: n,
            showPageSizeSelector: i,
            onPageChange: y,
            onPageSizeChange: (v) => {
              m(v), y(1);
            }
          }
        )
      ]
    }
  );
}
const ta = "_label_1qfpw_1", na = {
  label: ta
}, Gm = R1(function({ className: t, children: n, ...l }, s) {
  return /* @__PURE__ */ r(
    "label",
    {
      ref: s,
      className: [na.label, t].filter(Boolean).join(" "),
      ...l,
      children: n
    }
  );
}), ra = "_textbox_1wq7t_1", la = "_invalid_1wq7t_37", oa = "_xs_1wq7t_44", aa = "_sm_1wq7t_50", sa = "_md_1wq7t_56", ca = "_lg_1wq7t_62", ia = "_xl_1wq7t_68", C0 = {
  textbox: ra,
  invalid: la,
  xs: oa,
  sm: aa,
  md: sa,
  lg: ca,
  xl: ia
}, da = R1(
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
          C0.textbox,
          C0[t],
          n ? C0.invalid : null,
          l
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...d
      }
    );
  }
), Ym = da, ua = "_checkbox_e1een_1", ha = {
  checkbox: ua
}, Jm = R1(
  function({ className: t, indeterminate: n = !1, ...l }, s) {
    const c = G(null);
    return g1(() => {
      c.current && (c.current.indeterminate = n);
    }, [n]), /* @__PURE__ */ r(
      "input",
      {
        ref: (d) => {
          c.current = d, typeof s == "function" ? s(d) : s && (s.current = d);
        },
        type: "checkbox",
        className: [ha.checkbox, t].filter(Boolean).join(" "),
        ...l
      }
    );
  }
), fa = {
  switch: "_switch_1y0ld_1"
}, pa = R1(function({ className: t, ...n }, l) {
  return /* @__PURE__ */ r(
    "input",
    {
      ref: l,
      type: "checkbox",
      role: "switch",
      className: [fa.switch, t].filter(Boolean).join(" "),
      ...n
    }
  );
}), ma = "_trigger_18hdv_1", _a = "_tooltip_18hdv_7", ga = "_top_18hdv_34", va = "_right_18hdv_40", ka = "_bottom_18hdv_46", xa = "_left_18hdv_52", ya = "_arrow_18hdv_58", ba = "_floating_18hdv_70", st = {
  trigger: ma,
  tooltip: _a,
  "se-tooltip-in": "_se-tooltip-in_18hdv_1",
  top: ga,
  right: va,
  bottom: ka,
  left: xa,
  arrow: ya,
  floating: ba,
  "se-floating-tooltip-in": "_se-floating-tooltip-in_18hdv_1"
}, a0 = 8;
function Ma(e, t) {
  switch (t) {
    case "bottom":
      return {
        top: e.bottom + a0,
        left: e.left + e.width / 2,
        transform: "translate(-50%, 0)"
      };
    case "left":
      return {
        top: e.top + e.height / 2,
        left: e.left - a0,
        transform: "translate(-100%, -50%)"
      };
    case "right":
      return {
        top: e.top + e.height / 2,
        left: e.right + a0,
        transform: "translate(0, -50%)"
      };
    default:
      return {
        top: e.top - a0,
        left: e.left + e.width / 2,
        transform: "translate(-50%, -100%)"
      };
  }
}
function Qm({
  content: e,
  children: t,
  placement: n = "top",
  delayMs: l = 300,
  durationMs: s,
  targetSelector: c,
  className: d
}) {
  const o = q1(), a = G(null), i = G(null), u = G(null), [h, b] = K(!1), [y, x] = K(null), m = () => {
    a.current !== null && (window.clearTimeout(a.current), a.current = null), i.current !== null && (window.clearTimeout(i.current), i.current = null);
  }, k = () => {
    a.current = window.setTimeout(() => {
      b(!0), s != null && (i.current = window.setTimeout(() => b(!1), s));
    }, l);
  }, f = () => {
    m(), b(!1);
  };
  if (g1(() => () => m(), []), g1(() => {
    if (c || !h) return;
    const g = (M) => {
      M.key === "Escape" && f();
    };
    return window.addEventListener("keydown", g), () => window.removeEventListener("keydown", g);
  }, [c, h]), g1(() => {
    if (!c) return;
    let g = null, M = null, v = null;
    const L = () => {
      g !== null && (window.clearTimeout(g), g = null);
    }, C = () => {
      M !== null && (window.clearTimeout(M), M = null);
    }, z = () => {
      L(), C(), v = null, x(null);
    }, A = (V) => {
      L(), C(), v = V, g = window.setTimeout(() => {
        g = null, x(V), s != null && (M = window.setTimeout(z, s));
      }, l);
    }, S = (V) => V instanceof Element ? V.closest(c) : null, O = (V) => {
      const T = S(V.target);
      !T || T === v || A(T);
    }, w = (V) => {
      const T = S(V.target);
      if (!T || T !== v) return;
      const j = V.relatedTarget;
      j instanceof Element && T.contains(j) || z();
    }, _ = (V) => {
      V.key === "Escape" && z();
    }, N = () => z();
    return document.addEventListener("mouseover", O), document.addEventListener("mouseout", w), document.addEventListener("focusin", O), document.addEventListener("focusout", w), document.addEventListener("keydown", _), document.addEventListener("scroll", N, !0), window.addEventListener("resize", N), () => {
      L(), C(), document.removeEventListener("mouseover", O), document.removeEventListener("mouseout", w), document.removeEventListener("focusin", O), document.removeEventListener("focusout", w), document.removeEventListener("keydown", _), document.removeEventListener("scroll", N, !0), window.removeEventListener("resize", N), v = null, x(null);
    };
  }, [c, l, s]), N0(() => {
    const g = y;
    if (!g) return;
    const M = g.getAttribute("aria-describedby");
    return g.setAttribute(
      "aria-describedby",
      [M, o].filter(Boolean).join(" ")
    ), () => {
      M == null ? g.removeAttribute("aria-describedby") : g.setAttribute("aria-describedby", M);
    };
  }, [y, o]), N0(() => {
    const g = u.current, M = y;
    !g || !M || Object.assign(
      g.style,
      Ma(M.getBoundingClientRect(), n)
    );
  }, [y, n]), c)
    return y ? /* @__PURE__ */ $(
      "span",
      {
        ref: u,
        role: "tooltip",
        id: o,
        className: [
          st.tooltip,
          st[n],
          st.floating,
          d
        ].filter(Boolean).join(" "),
        children: [
          e,
          /* @__PURE__ */ r("span", { className: st.arrow, "aria-hidden": "true" })
        ]
      }
    ) : null;
  const p = ge(t) ? T0(t, {
    "aria-describedby": [
      t.props["aria-describedby"],
      h ? o : null
    ].filter((g) => typeof g == "string").join(" ") || void 0
  }) : t;
  return (
    // Presentational hit-area: hover/focus handlers here, semantics and
    // keyboard interaction live on the child trigger.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ $(
      "span",
      {
        className: [st.trigger, d].filter(Boolean).join(" "),
        onMouseEnter: k,
        onMouseLeave: f,
        onFocus: k,
        onBlur: f,
        children: [
          p,
          h && /* @__PURE__ */ $(
            "span",
            {
              role: "tooltip",
              id: o,
              className: [st.tooltip, st[n]].filter(Boolean).join(" "),
              children: [
                e,
                /* @__PURE__ */ r("span", { className: st.arrow, "aria-hidden": "true" })
              ]
            }
          )
        ]
      }
    )
  );
}
const Ca = "_dialog_18an3_1", wa = "_sm_18an3_72", za = "_resizable_18an3_78", La = "_md_18an3_81", $a = "_lg_18an3_85", Na = "_header_18an3_89", Sa = "_title_18an3_100", Oa = "_description_18an3_107", Aa = "_close_18an3_114", Ha = "_body_18an3_144", ja = "_footer_18an3_156", Je = {
  dialog: Ca,
  "se-dialog-in": "_se-dialog-in_18an3_1",
  sm: wa,
  resizable: za,
  md: La,
  lg: $a,
  header: Na,
  title: Sa,
  description: Oa,
  close: Aa,
  body: Ha,
  footer: ja
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
  closeOnEsc: u = !0,
  resizable: h = !1,
  canClose: b,
  className: y
}) {
  const x = G(null), m = q1(), k = q1(), f = G(t);
  g1(() => {
    f.current = t;
  });
  const p = G(b);
  g1(() => {
    p.current = b;
  });
  const g = G(u);
  g1(() => {
    g.current = u;
  });
  const M = G(!1), v = G(!1), L = q(() => {
    if (M.current) return;
    const z = p.current?.();
    if (z instanceof Promise) {
      z.then((A) => {
        A && !M.current && (M.current = !0, f.current());
      });
      return;
    }
    z !== !1 && (M.current = !0, f.current());
  }, []), C = q(() => {
    if (v.current) {
      v.current = !1;
      return;
    }
    f.current();
  }, []);
  return g1(() => {
    const z = x.current;
    if (z)
      if (e && !z.open) {
        const A = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        z.showModal(), (z.querySelector(
          'button[aria-label="Close dialog"]'
        ) ?? z.querySelector("button"))?.focus();
        const O = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const w = (_) => {
          _.preventDefault(), g.current && L();
        };
        return z.addEventListener("cancel", w), () => {
          z.removeEventListener("cancel", w), document.body.style.overflow = O, A?.focus({ preventScroll: !0 });
        };
      } else !e && z.open && (v.current = M.current, M.current = !1, z.close());
  }, [e, L]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button.
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ $(
    "dialog",
    {
      ref: x,
      className: [
        Je.dialog,
        Je[d],
        h ? Je.resizable : null,
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
        z.target === x.current && i && L();
      },
      "aria-modal": "true",
      "aria-labelledby": n ? m : void 0,
      "aria-describedby": l ? k : void 0,
      children: [
        n && /* @__PURE__ */ $("header", { className: Je.header, children: [
          /* @__PURE__ */ $("div", { children: [
            /* @__PURE__ */ r("h2", { id: m, className: Je.title, children: n }),
            l && /* @__PURE__ */ r("p", { id: k, className: Je.description, children: l })
          ] }),
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: Je.close,
              onClick: () => {
                L();
              },
              "aria-label": "Close dialog",
              children: /* @__PURE__ */ r(C1, { name: "close", size: "sm" })
            }
          )
        ] }),
        s && /* @__PURE__ */ r("div", { className: Je.body, children: s }),
        c && /* @__PURE__ */ r("footer", { className: Je.footer, children: c })
      ]
    }
  );
}
const Ta = "_typography_1jy8x_1", Da = "_h1_1jy8x_39", Ea = "_h2_1jy8x_45", qa = "_h3_1jy8x_51", Ia = "_h4_1jy8x_57", Pa = "_h5_1jy8x_63", Ra = "_h6_1jy8x_69", Ba = "_button_1jy8x_99", Fa = "_caption_1jy8x_106", Ka = "_overline_1jy8x_112", w0 = {
  typography: Ta,
  "display-1": "_display-1_1jy8x_8",
  "display-2": "_display-2_1jy8x_13",
  "display-3": "_display-3_1jy8x_18",
  "display-4": "_display-4_1jy8x_23",
  "display-5": "_display-5_1jy8x_28",
  "display-6": "_display-6_1jy8x_33",
  h1: Da,
  h2: Ea,
  h3: qa,
  h4: Ia,
  h5: Pa,
  h6: Ra,
  "subtitle-1": "_subtitle-1_1jy8x_75",
  "subtitle-2": "_subtitle-2_1jy8x_81",
  "body-1": "_body-1_1jy8x_87",
  "body-2": "_body-2_1jy8x_92",
  button: Ba,
  caption: Fa,
  overline: Ka,
  "align-left": "_align-left_1jy8x_121",
  "align-center": "_align-center_1jy8x_125",
  "align-right": "_align-right_1jy8x_129",
  "align-justify": "_align-justify_1jy8x_133"
}, Wa = {
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
}, Za = {
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
}, Ua = {
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
}, Xa = {
  Left: "align-left",
  Right: "align-right",
  Center: "align-center",
  Justify: "align-justify",
  Start: "align-left",
  End: "align-right",
  JustifyAll: "align-justify"
}, Ga = R1(function({
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
  const u = n === "Auto" ? Wa[t] : Ua[n];
  return /* @__PURE__ */ r(
    u,
    {
      ref: i,
      className: [
        w0.typography,
        w0[Za[t]],
        l ? w0[Xa[l]] : null,
        d
      ].filter(Boolean).join(" "),
      ...a,
      children: s ?? o
    }
  );
}), N2 = qt(null);
function e_() {
  const e = ht(N2);
  if (!e)
    throw new Error("useDialog must be used within a <DialogProvider>");
  return e;
}
function t_({ children: e }) {
  const [t, n] = K([]), l = G(0), s = v1(
    () => ({
      confirm: (o = {}) => new Promise((a) => {
        l.current += 1;
        const i = l.current;
        n((u) => [...u, { seq: i, kind: "confirm", options: o, resolve: a }]);
      }),
      alert: (o = {}) => new Promise((a) => {
        l.current += 1;
        const i = l.current;
        n((u) => [...u, { seq: i, kind: "alert", options: o, resolve: a }]);
      })
    }),
    []
  ), c = t[0], d = (o) => {
    c && (c.kind === "confirm" ? c.resolve(o) : c.resolve(), n((a) => a.slice(1)));
  };
  return /* @__PURE__ */ $(N2.Provider, { value: s, children: [
    e,
    /* @__PURE__ */ r(
      Va,
      {
        open: t.length > 0,
        onClose: () => d(!1),
        title: c?.options.title ?? (c?.kind === "confirm" ? "Confirm" : "Alert"),
        size: c?.options.size,
        footer: c?.kind === "confirm" ? /* @__PURE__ */ $(b1, { children: [
          /* @__PURE__ */ r(b0, { variant: "text", onClick: () => d(!1), children: c.options.cancelText ?? "Cancel" }),
          /* @__PURE__ */ r(
            b0,
            {
              severity: c.options.tone ?? "primary",
              onClick: () => d(!0),
              children: c.options.confirmText ?? "Confirm"
            }
          )
        ] }) : /* @__PURE__ */ r(b0, { onClick: () => d(!0), children: c?.kind === "alert" ? c.options.okText ?? "OK" : "OK" }),
        children: c?.options.message != null && /* @__PURE__ */ r(Ga, { textStyle: "Body1", children: c.options.message })
      },
      c?.seq ?? 0
    )
  ] });
}
const Ya = "_viewport_lo2x9_1", Ja = "_topLeft_lo2x9_13", Qa = "_topRight_lo2x9_20", es = "_bottomLeft_lo2x9_25", ts = "_toast_lo2x9_30", ns = "_leaving_lo2x9_61", rs = "_info_lo2x9_77", ls = "_success_lo2x9_86", os = "_warning_lo2x9_95", as = "_danger_lo2x9_104", ss = "_content_lo2x9_113", cs = "_title_lo2x9_118", is = "_description_lo2x9_141", ds = "_dismiss_lo2x9_148", us = "_actions_lo2x9_169", hs = "_action_lo2x9_169", fs = "_cancel_lo2x9_177", ps = "_progress_lo2x9_215", we = {
  viewport: Ya,
  topLeft: Ja,
  topRight: Qa,
  bottomLeft: es,
  toast: ts,
  "se-toast-in": "_se-toast-in_lo2x9_1",
  leaving: ns,
  "se-toast-out": "_se-toast-out_lo2x9_1",
  info: rs,
  success: ls,
  warning: os,
  danger: as,
  content: ss,
  title: cs,
  description: is,
  dismiss: ds,
  actions: us,
  action: hs,
  cancel: fs,
  progress: ps,
  "se-toast-progress": "_se-toast-progress_lo2x9_1"
}, S2 = qt(null);
function n_() {
  const e = ht(S2);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const ms = 200, _s = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function r_({
  children: e,
  durationMs: t = 4e3,
  position: n = "bottom-right",
  pauseOnHover: l = !0,
  className: s
}) {
  const [c, d] = K([]), [o, a] = K(!1), i = G([]), u = G(/* @__PURE__ */ new Map()), h = G(!1), b = G(0), y = (w) => {
    h.current = w, a(w);
  }, x = q((w) => {
    const _ = u.current.get(w);
    _ && (window.clearTimeout(_.timeoutId), _.remaining = Math.max(
      0,
      _.remaining - (Date.now() - _.startedAt)
    ));
  }, []), m = q((w) => {
    const _ = u.current.get(w);
    _ && (window.clearTimeout(_.timeoutId), u.current.delete(w));
  }, []), k = q(
    (w) => {
      m(w), d((_) => {
        const N = _.filter((V) => V.id !== w);
        return i.current = N, N;
      });
    },
    [m]
  ), f = q(
    (w) => {
      const _ = i.current.find((N) => N.id === w);
      !_ || _.leaving || (_.onAutoClose?.(), k(w));
    },
    [k]
  ), p = q(
    (w) => {
      const _ = u.current.get(w);
      !_ || _.remaining <= 0 || (_.startedAt = Date.now(), _.timeoutId = window.setTimeout(() => f(w), _.remaining));
    },
    [f]
  ), g = q(() => {
    h.current || u.current.forEach((w, _) => x(_)), y(!0);
  }, [x]), M = q(() => {
    u.current.forEach((w, _) => p(_)), y(!1);
  }, [p]);
  g1(() => {
    if (!l) return;
    const w = () => {
      document.hidden ? g() : M();
    };
    return document.addEventListener("visibilitychange", w), () => document.removeEventListener("visibilitychange", w);
  }, [l, g, M]);
  const v = q(
    (w) => {
      const _ = i.current.find((N) => N.id === w);
      !_ || _.leaving || (_.onDismiss?.(), d((N) => {
        const V = N.map(
          (T) => T.id === w ? { ...T, leaving: !0 } : T
        );
        return i.current = V, V;
      }), window.setTimeout(() => k(w), ms));
    },
    [k]
  ), L = q(
    (w) => {
      if (w.durationMs <= 0) return;
      const _ = {
        remaining: w.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      u.current.set(w.id, _), h.current || p(w.id);
    },
    [p]
  ), C = q(
    (w) => {
      const _ = i.current.find((V) => V.id === w.id), N = {
        id: w.id ?? ++b.current,
        title: w.title,
        description: w.description,
        severity: w.severity ?? "info",
        durationMs: w.durationMs ?? t,
        action: w.action,
        cancel: w.cancel,
        dismissible: w.dismissible ?? !0,
        closeOnClick: w.closeOnClick ?? !1,
        showProgress: w.showProgress ?? !1,
        position: w.position ?? n,
        onDismiss: w.onDismiss,
        onAutoClose: w.onAutoClose
      };
      d((V) => {
        const T = _ ? V.map(
          (j) => j.id === N.id ? { ...N, leaving: !1 } : j
        ) : [...V, N];
        return i.current = T, T;
      }), _ && m(N.id), L(N);
    },
    [t, n, L, m]
  ), z = v1(() => ({ toast: C }), [C]), A = v1(
    () => Array.from(/* @__PURE__ */ new Set([n, ...c.map((w) => w.position)])),
    [n, c]
  ), S = l ? g : void 0, O = l ? M : void 0;
  return /* @__PURE__ */ $(S2.Provider, { value: z, children: [
    e,
    A.map((w) => /* @__PURE__ */ r(
      "div",
      {
        className: [we.viewport, we[_s[w]], s].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: S,
        onMouseLeave: O,
        children: c.filter((_) => _.position === w).map((_) => /* @__PURE__ */ $(
          "div",
          {
            role: _.severity === "danger" ? "alert" : "status",
            "data-paused": o ? "true" : "false",
            "data-clickable": _.closeOnClick ? "true" : "false",
            className: [
              we.toast,
              we[_.severity],
              _.leaving ? we.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: _.closeOnClick ? () => v(_.id) : void 0,
            children: [
              /* @__PURE__ */ $("div", { className: we.content, children: [
                /* @__PURE__ */ r("div", { className: we.title, children: _.title }),
                _.description && /* @__PURE__ */ r("div", { className: we.description, children: _.description }),
                (_.action || _.cancel) && /* @__PURE__ */ $("div", { className: we.actions, children: [
                  _.action && /* @__PURE__ */ r(
                    "button",
                    {
                      type: "button",
                      className: we.action,
                      onClick: () => {
                        _.action?.onClick?.(), v(_.id);
                      },
                      children: _.action.label
                    }
                  ),
                  _.cancel && /* @__PURE__ */ r(
                    "button",
                    {
                      type: "button",
                      className: we.cancel,
                      onClick: () => {
                        _.cancel?.onClick?.(), v(_.id);
                      },
                      children: _.cancel.label
                    }
                  )
                ] })
              ] }),
              _.dismissible && /* @__PURE__ */ r(
                "button",
                {
                  type: "button",
                  className: we.dismiss,
                  onClick: () => v(_.id),
                  "aria-label": "Dismiss notification",
                  children: /* @__PURE__ */ r(C1, { name: "close", size: "sm" })
                }
              ),
              _.showProgress && _.durationMs > 0 && /* @__PURE__ */ r(
                "div",
                {
                  className: we.progress,
                  style: { animationDuration: `${_.durationMs}ms` }
                }
              )
            ]
          },
          _.id
        ))
      },
      w
    ))
  ] });
}
const gs = "_alert_1ktjq_1", vs = "_xs_1ktjq_28", ks = "_sm_1ktjq_38", xs = "_lg_1ktjq_48", ys = "_xl_1ktjq_58", bs = "_primary_1ktjq_69", Ms = "_secondary_1ktjq_74", Cs = "_light_1ktjq_79", ws = "_base_1ktjq_84", zs = "_dark_1ktjq_89", Ls = "_info_1ktjq_94", $s = "_success_1ktjq_99", Ns = "_warning_1ktjq_104", Ss = "_danger_1ktjq_109", Os = "_flat_1ktjq_116", As = "_outlined_1ktjq_123", Hs = "_filled_1ktjq_132", js = "_text_1ktjq_139", Vs = "_icon_1ktjq_181", Ts = "_content_1ktjq_192", Ds = "_title_1ktjq_197", Es = "_body_1ktjq_203", qs = "_dismiss_1ktjq_209", Ke = {
  alert: gs,
  xs: vs,
  sm: ks,
  lg: xs,
  xl: ys,
  primary: bs,
  secondary: Ms,
  light: Cs,
  base: ws,
  dark: zs,
  info: Ls,
  success: $s,
  warning: Ns,
  danger: Ss,
  flat: Os,
  outlined: As,
  filled: Hs,
  text: js,
  icon: Vs,
  content: Ts,
  title: Ds,
  body: Es,
  dismiss: qs,
  "shade-lighter": "_shade-lighter_1ktjq_451",
  "shade-light": "_shade-light_1ktjq_451",
  "shade-dark": "_shade-dark_1ktjq_461",
  "shade-darker": "_shade-darker_1ktjq_465"
}, Is = {
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
function l_({
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
  visible: u,
  onVisibleChange: h,
  className: b,
  ...y
}) {
  const [x, m] = K(!1);
  if (u === !1 || u === void 0 && x)
    return null;
  const k = () => {
    u === void 0 && m(!0), i?.(), h?.(!1);
  }, f = e, p = q0(t, "filled"), g = Et(n), M = c ?? (d ? /* @__PURE__ */ r(C1, { name: Is[e] }) : null);
  return /* @__PURE__ */ $(
    "div",
    {
      role: "alert",
      ...y,
      className: [
        Ke.alert,
        Ke[f],
        Ke[p],
        g ? Ke[g] : null,
        Ke[l],
        b
      ].filter(Boolean).join(" "),
      children: [
        M != null && /* @__PURE__ */ r("span", { className: Ke.icon, "aria-hidden": "true", children: M }),
        /* @__PURE__ */ $("div", { className: Ke.content, children: [
          s && /* @__PURE__ */ r("div", { className: Ke.title, children: s }),
          o && /* @__PURE__ */ r("div", { className: Ke.body, children: o })
        ] }),
        a && /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: Ke.dismiss,
            onClick: k,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ r(C1, { name: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const Ps = "_skeleton_14cft_1", Rs = "_text_14cft_35", Bs = "_circle_14cft_40", Fs = "_rect_14cft_44", t2 = {
  skeleton: Ps,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_14cft_1",
  text: Rs,
  circle: Bs,
  rect: Fs
};
function o_({
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
      className: [t2.skeleton, t2[e], l].filter(Boolean).join(" "),
      style: s
    }
  );
}
const Ks = "_row_ijmf6_1", Ws = "_gapXs_ijmf6_16", Zs = "_gapSm_ijmf6_20", Us = "_gapMd_ijmf6_24", Xs = "_gapLg_ijmf6_28", Gs = "_gapXl_ijmf6_32", Ys = "_start_ijmf6_36", Js = "_center_ijmf6_40", Qs = "_end_ijmf6_44", e5 = "_stretch_ijmf6_48", t5 = "_baseline_ijmf6_52", n5 = "_normal_ijmf6_56", r5 = "_noWrap_ijmf6_112", l5 = "_wrapReverse_ijmf6_116", o5 = "_gapRowXs_ijmf6_120", a5 = "_gapRowSm_ijmf6_124", s5 = "_gapRowMd_ijmf6_128", c5 = "_gapRowLg_ijmf6_132", i5 = "_gapRowXl_ijmf6_136", $t = {
  row: Ks,
  gapXs: Ws,
  gapSm: Zs,
  gapMd: Us,
  gapLg: Xs,
  gapXl: Gs,
  start: Ys,
  center: Js,
  end: Qs,
  stretch: e5,
  baseline: t5,
  normal: n5,
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
  noWrap: r5,
  wrapReverse: l5,
  gapRowXs: o5,
  gapRowSm: a5,
  gapRowMd: s5,
  gapRowLg: c5,
  gapRowXl: i5
}, d5 = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
}, u5 = {
  xs: "gapRowXs",
  sm: "gapRowSm",
  md: "gapRowMd",
  lg: "gapRowLg",
  xl: "gapRowXl"
};
function h5(e) {
  return typeof e != "string" ? null : d5[e] ?? null;
}
function f5(e) {
  return typeof e != "string" ? null : u5[e] ?? null;
}
function n2(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function a_({
  gap: e,
  rowGap: t,
  align: n = "stretch",
  justify: l = "start",
  wrap: s = !0,
  className: c,
  style: d,
  ...o
}) {
  const a = h5(e), i = f5(t), u = e != null && !a ? typeof e == "number" ? `${e}px` : e : null, h = {
    // Keep --dx-col-gap in sync so Column grid math compensates for
    // arbitrary (non-tier) gaps exactly like it does for tier classes.
    // Set columnGap (not the gap shorthand): an inline `gap` would also
    // fix row-gap inline and clobber a tier rowGap class like gapRowXl.
    ...u ? {
      columnGap: u,
      "--dx-col-gap": u
    } : {},
    ...t != null && !i ? { rowGap: typeof t == "number" ? `${t}px` : t } : {},
    ...d
  };
  return /* @__PURE__ */ r(
    "div",
    {
      className: [
        $t.row,
        $t[n],
        $t[`justify-${l}`],
        n2(s) != null ? $t[n2(s)] : null,
        a ? $t[a] : null,
        i ? $t[i] : null,
        c
      ].filter(Boolean).join(" "),
      style: h,
      ...o
    }
  );
}
const p5 = "_column_sh0ss_1", m5 = "_Size1_sh0ss_15", _5 = "_Size2_sh0ss_24", g5 = "_Size3_sh0ss_33", v5 = "_Size4_sh0ss_42", k5 = "_Size5_sh0ss_51", x5 = "_Size6_sh0ss_60", y5 = "_Size7_sh0ss_69", b5 = "_Size8_sh0ss_78", M5 = "_Size9_sh0ss_87", C5 = "_Size10_sh0ss_96", w5 = "_Size11_sh0ss_105", z5 = "_Size12_sh0ss_114", L5 = "_Offset0_sh0ss_119", $5 = "_Offset1_sh0ss_122", N5 = "_Offset2_sh0ss_127", S5 = "_Offset3_sh0ss_132", O5 = "_Offset4_sh0ss_137", A5 = "_Offset5_sh0ss_142", H5 = "_Offset6_sh0ss_147", j5 = "_Offset7_sh0ss_152", V5 = "_Offset8_sh0ss_157", T5 = "_Offset9_sh0ss_162", D5 = "_Offset10_sh0ss_167", E5 = "_Offset11_sh0ss_172", q5 = "_Offset12_sh0ss_177", I5 = "_OrderFirst_sh0ss_182", P5 = "_OrderLast_sh0ss_185", R5 = "_Order0_sh0ss_188", B5 = "_Order1_sh0ss_191", F5 = "_Order2_sh0ss_194", K5 = "_Order3_sh0ss_197", W5 = "_Order4_sh0ss_200", Z5 = "_Order5_sh0ss_203", U5 = "_Order6_sh0ss_206", X5 = "_Order7_sh0ss_209", G5 = "_Order8_sh0ss_212", Y5 = "_Order9_sh0ss_215", J5 = "_Order10_sh0ss_218", Q5 = "_Order11_sh0ss_221", ec = "_Order12_sh0ss_224", tc = "_xsSize1_sh0ss_229", nc = "_xsSize2_sh0ss_238", rc = "_xsSize3_sh0ss_247", lc = "_xsSize4_sh0ss_256", oc = "_xsSize5_sh0ss_265", ac = "_xsSize6_sh0ss_274", sc = "_xsSize7_sh0ss_283", cc = "_xsSize8_sh0ss_292", ic = "_xsSize9_sh0ss_301", dc = "_xsSize10_sh0ss_310", uc = "_xsSize11_sh0ss_321", hc = "_xsSize12_sh0ss_332", fc = "_xsOffset0_sh0ss_337", pc = "_xsOffset1_sh0ss_340", mc = "_xsOffset2_sh0ss_345", _c = "_xsOffset3_sh0ss_350", gc = "_xsOffset4_sh0ss_355", vc = "_xsOffset5_sh0ss_360", kc = "_xsOffset6_sh0ss_365", xc = "_xsOffset7_sh0ss_370", yc = "_xsOffset8_sh0ss_375", bc = "_xsOffset9_sh0ss_380", Mc = "_xsOffset10_sh0ss_385", Cc = "_xsOffset11_sh0ss_391", wc = "_xsOffset12_sh0ss_397", zc = "_xsOrderFirst_sh0ss_403", Lc = "_xsOrderLast_sh0ss_406", $c = "_xsOrder0_sh0ss_409", Nc = "_xsOrder1_sh0ss_412", Sc = "_xsOrder2_sh0ss_415", Oc = "_xsOrder3_sh0ss_418", Ac = "_xsOrder4_sh0ss_421", Hc = "_xsOrder5_sh0ss_424", jc = "_xsOrder6_sh0ss_427", Vc = "_xsOrder7_sh0ss_430", Tc = "_xsOrder8_sh0ss_433", Dc = "_xsOrder9_sh0ss_436", Ec = "_xsOrder10_sh0ss_439", qc = "_xsOrder11_sh0ss_442", Ic = "_xsOrder12_sh0ss_445", Pc = "_smSize1_sh0ss_451", Rc = "_smSize2_sh0ss_460", Bc = "_smSize3_sh0ss_469", Fc = "_smSize4_sh0ss_478", Kc = "_smSize5_sh0ss_487", Wc = "_smSize6_sh0ss_496", Zc = "_smSize7_sh0ss_505", Uc = "_smSize8_sh0ss_514", Xc = "_smSize9_sh0ss_523", Gc = "_smSize10_sh0ss_532", Yc = "_smSize11_sh0ss_543", Jc = "_smSize12_sh0ss_554", Qc = "_smOffset0_sh0ss_559", e4 = "_smOffset1_sh0ss_562", t4 = "_smOffset2_sh0ss_567", n4 = "_smOffset3_sh0ss_572", r4 = "_smOffset4_sh0ss_577", l4 = "_smOffset5_sh0ss_582", o4 = "_smOffset6_sh0ss_587", a4 = "_smOffset7_sh0ss_592", s4 = "_smOffset8_sh0ss_597", c4 = "_smOffset9_sh0ss_602", i4 = "_smOffset10_sh0ss_607", d4 = "_smOffset11_sh0ss_613", u4 = "_smOffset12_sh0ss_619", h4 = "_smOrderFirst_sh0ss_625", f4 = "_smOrderLast_sh0ss_628", p4 = "_smOrder0_sh0ss_631", m4 = "_smOrder1_sh0ss_634", _4 = "_smOrder2_sh0ss_637", g4 = "_smOrder3_sh0ss_640", v4 = "_smOrder4_sh0ss_643", k4 = "_smOrder5_sh0ss_646", x4 = "_smOrder6_sh0ss_649", y4 = "_smOrder7_sh0ss_652", b4 = "_smOrder8_sh0ss_655", M4 = "_smOrder9_sh0ss_658", C4 = "_smOrder10_sh0ss_661", w4 = "_smOrder11_sh0ss_664", z4 = "_smOrder12_sh0ss_667", L4 = "_mdSize1_sh0ss_673", $4 = "_mdSize2_sh0ss_682", N4 = "_mdSize3_sh0ss_691", S4 = "_mdSize4_sh0ss_700", O4 = "_mdSize5_sh0ss_709", A4 = "_mdSize6_sh0ss_718", H4 = "_mdSize7_sh0ss_727", j4 = "_mdSize8_sh0ss_736", V4 = "_mdSize9_sh0ss_745", T4 = "_mdSize10_sh0ss_754", D4 = "_mdSize11_sh0ss_765", E4 = "_mdSize12_sh0ss_776", q4 = "_mdOffset0_sh0ss_781", I4 = "_mdOffset1_sh0ss_784", P4 = "_mdOffset2_sh0ss_789", R4 = "_mdOffset3_sh0ss_794", B4 = "_mdOffset4_sh0ss_799", F4 = "_mdOffset5_sh0ss_804", K4 = "_mdOffset6_sh0ss_809", W4 = "_mdOffset7_sh0ss_814", Z4 = "_mdOffset8_sh0ss_819", U4 = "_mdOffset9_sh0ss_824", X4 = "_mdOffset10_sh0ss_829", G4 = "_mdOffset11_sh0ss_835", Y4 = "_mdOffset12_sh0ss_841", J4 = "_mdOrderFirst_sh0ss_847", Q4 = "_mdOrderLast_sh0ss_850", e3 = "_mdOrder0_sh0ss_853", t3 = "_mdOrder1_sh0ss_856", n3 = "_mdOrder2_sh0ss_859", r3 = "_mdOrder3_sh0ss_862", l3 = "_mdOrder4_sh0ss_865", o3 = "_mdOrder5_sh0ss_868", a3 = "_mdOrder6_sh0ss_871", s3 = "_mdOrder7_sh0ss_874", c3 = "_mdOrder8_sh0ss_877", i3 = "_mdOrder9_sh0ss_880", d3 = "_mdOrder10_sh0ss_883", u3 = "_mdOrder11_sh0ss_886", h3 = "_mdOrder12_sh0ss_889", f3 = "_lgSize1_sh0ss_895", p3 = "_lgSize2_sh0ss_904", m3 = "_lgSize3_sh0ss_913", _3 = "_lgSize4_sh0ss_922", g3 = "_lgSize5_sh0ss_931", v3 = "_lgSize6_sh0ss_940", k3 = "_lgSize7_sh0ss_949", x3 = "_lgSize8_sh0ss_958", y3 = "_lgSize9_sh0ss_967", b3 = "_lgSize10_sh0ss_976", M3 = "_lgSize11_sh0ss_987", C3 = "_lgSize12_sh0ss_998", w3 = "_lgOffset0_sh0ss_1003", z3 = "_lgOffset1_sh0ss_1006", L3 = "_lgOffset2_sh0ss_1011", $3 = "_lgOffset3_sh0ss_1016", N3 = "_lgOffset4_sh0ss_1021", S3 = "_lgOffset5_sh0ss_1026", O3 = "_lgOffset6_sh0ss_1031", A3 = "_lgOffset7_sh0ss_1036", H3 = "_lgOffset8_sh0ss_1041", j3 = "_lgOffset9_sh0ss_1046", V3 = "_lgOffset10_sh0ss_1051", T3 = "_lgOffset11_sh0ss_1057", D3 = "_lgOffset12_sh0ss_1063", E3 = "_lgOrderFirst_sh0ss_1069", q3 = "_lgOrderLast_sh0ss_1072", I3 = "_lgOrder0_sh0ss_1075", P3 = "_lgOrder1_sh0ss_1078", R3 = "_lgOrder2_sh0ss_1081", B3 = "_lgOrder3_sh0ss_1084", F3 = "_lgOrder4_sh0ss_1087", K3 = "_lgOrder5_sh0ss_1090", W3 = "_lgOrder6_sh0ss_1093", Z3 = "_lgOrder7_sh0ss_1096", U3 = "_lgOrder8_sh0ss_1099", X3 = "_lgOrder9_sh0ss_1102", G3 = "_lgOrder10_sh0ss_1105", Y3 = "_lgOrder11_sh0ss_1108", J3 = "_lgOrder12_sh0ss_1111", Q3 = "_xlSize1_sh0ss_1117", ei = "_xlSize2_sh0ss_1126", ti = "_xlSize3_sh0ss_1135", ni = "_xlSize4_sh0ss_1144", ri = "_xlSize5_sh0ss_1153", li = "_xlSize6_sh0ss_1162", oi = "_xlSize7_sh0ss_1171", ai = "_xlSize8_sh0ss_1180", si = "_xlSize9_sh0ss_1189", ci = "_xlSize10_sh0ss_1198", ii = "_xlSize11_sh0ss_1209", di = "_xlSize12_sh0ss_1220", ui = "_xlOffset0_sh0ss_1225", hi = "_xlOffset1_sh0ss_1228", fi = "_xlOffset2_sh0ss_1233", pi = "_xlOffset3_sh0ss_1238", mi = "_xlOffset4_sh0ss_1243", _i = "_xlOffset5_sh0ss_1248", gi = "_xlOffset6_sh0ss_1253", vi = "_xlOffset7_sh0ss_1258", ki = "_xlOffset8_sh0ss_1263", xi = "_xlOffset9_sh0ss_1268", yi = "_xlOffset10_sh0ss_1273", bi = "_xlOffset11_sh0ss_1279", Mi = "_xlOffset12_sh0ss_1285", Ci = "_xlOrderFirst_sh0ss_1291", wi = "_xlOrderLast_sh0ss_1294", zi = "_xlOrder0_sh0ss_1297", Li = "_xlOrder1_sh0ss_1300", $i = "_xlOrder2_sh0ss_1303", Ni = "_xlOrder3_sh0ss_1306", Si = "_xlOrder4_sh0ss_1309", Oi = "_xlOrder5_sh0ss_1312", Ai = "_xlOrder6_sh0ss_1315", Hi = "_xlOrder7_sh0ss_1318", ji = "_xlOrder8_sh0ss_1321", Vi = "_xlOrder9_sh0ss_1324", Ti = "_xlOrder10_sh0ss_1327", Di = "_xlOrder11_sh0ss_1330", Ei = "_xlOrder12_sh0ss_1333", qi = "_xxSize1_sh0ss_1339", Ii = "_xxSize2_sh0ss_1348", Pi = "_xxSize3_sh0ss_1357", Ri = "_xxSize4_sh0ss_1366", Bi = "_xxSize5_sh0ss_1375", Fi = "_xxSize6_sh0ss_1384", Ki = "_xxSize7_sh0ss_1393", Wi = "_xxSize8_sh0ss_1402", Zi = "_xxSize9_sh0ss_1411", Ui = "_xxSize10_sh0ss_1420", Xi = "_xxSize11_sh0ss_1431", Gi = "_xxSize12_sh0ss_1442", Yi = "_xxOffset0_sh0ss_1447", Ji = "_xxOffset1_sh0ss_1450", Qi = "_xxOffset2_sh0ss_1455", e6 = "_xxOffset3_sh0ss_1460", t6 = "_xxOffset4_sh0ss_1465", n6 = "_xxOffset5_sh0ss_1470", r6 = "_xxOffset6_sh0ss_1475", l6 = "_xxOffset7_sh0ss_1480", o6 = "_xxOffset8_sh0ss_1485", a6 = "_xxOffset9_sh0ss_1490", s6 = "_xxOffset10_sh0ss_1495", c6 = "_xxOffset11_sh0ss_1501", i6 = "_xxOffset12_sh0ss_1507", d6 = "_xxOrderFirst_sh0ss_1513", u6 = "_xxOrderLast_sh0ss_1516", h6 = "_xxOrder0_sh0ss_1519", f6 = "_xxOrder1_sh0ss_1522", p6 = "_xxOrder2_sh0ss_1525", m6 = "_xxOrder3_sh0ss_1528", _6 = "_xxOrder4_sh0ss_1531", g6 = "_xxOrder5_sh0ss_1534", v6 = "_xxOrder6_sh0ss_1537", k6 = "_xxOrder7_sh0ss_1540", x6 = "_xxOrder8_sh0ss_1543", y6 = "_xxOrder9_sh0ss_1546", b6 = "_xxOrder10_sh0ss_1549", M6 = "_xxOrder11_sh0ss_1552", C6 = "_xxOrder12_sh0ss_1555", s0 = {
  column: p5,
  Size1: m5,
  Size2: _5,
  Size3: g5,
  Size4: v5,
  Size5: k5,
  Size6: x5,
  Size7: y5,
  Size8: b5,
  Size9: M5,
  Size10: C5,
  Size11: w5,
  Size12: z5,
  Offset0: L5,
  Offset1: $5,
  Offset2: N5,
  Offset3: S5,
  Offset4: O5,
  Offset5: A5,
  Offset6: H5,
  Offset7: j5,
  Offset8: V5,
  Offset9: T5,
  Offset10: D5,
  Offset11: E5,
  Offset12: q5,
  OrderFirst: I5,
  OrderLast: P5,
  Order0: R5,
  Order1: B5,
  Order2: F5,
  Order3: K5,
  Order4: W5,
  Order5: Z5,
  Order6: U5,
  Order7: X5,
  Order8: G5,
  Order9: Y5,
  Order10: J5,
  Order11: Q5,
  Order12: ec,
  xsSize1: tc,
  xsSize2: nc,
  xsSize3: rc,
  xsSize4: lc,
  xsSize5: oc,
  xsSize6: ac,
  xsSize7: sc,
  xsSize8: cc,
  xsSize9: ic,
  xsSize10: dc,
  xsSize11: uc,
  xsSize12: hc,
  xsOffset0: fc,
  xsOffset1: pc,
  xsOffset2: mc,
  xsOffset3: _c,
  xsOffset4: gc,
  xsOffset5: vc,
  xsOffset6: kc,
  xsOffset7: xc,
  xsOffset8: yc,
  xsOffset9: bc,
  xsOffset10: Mc,
  xsOffset11: Cc,
  xsOffset12: wc,
  xsOrderFirst: zc,
  xsOrderLast: Lc,
  xsOrder0: $c,
  xsOrder1: Nc,
  xsOrder2: Sc,
  xsOrder3: Oc,
  xsOrder4: Ac,
  xsOrder5: Hc,
  xsOrder6: jc,
  xsOrder7: Vc,
  xsOrder8: Tc,
  xsOrder9: Dc,
  xsOrder10: Ec,
  xsOrder11: qc,
  xsOrder12: Ic,
  smSize1: Pc,
  smSize2: Rc,
  smSize3: Bc,
  smSize4: Fc,
  smSize5: Kc,
  smSize6: Wc,
  smSize7: Zc,
  smSize8: Uc,
  smSize9: Xc,
  smSize10: Gc,
  smSize11: Yc,
  smSize12: Jc,
  smOffset0: Qc,
  smOffset1: e4,
  smOffset2: t4,
  smOffset3: n4,
  smOffset4: r4,
  smOffset5: l4,
  smOffset6: o4,
  smOffset7: a4,
  smOffset8: s4,
  smOffset9: c4,
  smOffset10: i4,
  smOffset11: d4,
  smOffset12: u4,
  smOrderFirst: h4,
  smOrderLast: f4,
  smOrder0: p4,
  smOrder1: m4,
  smOrder2: _4,
  smOrder3: g4,
  smOrder4: v4,
  smOrder5: k4,
  smOrder6: x4,
  smOrder7: y4,
  smOrder8: b4,
  smOrder9: M4,
  smOrder10: C4,
  smOrder11: w4,
  smOrder12: z4,
  mdSize1: L4,
  mdSize2: $4,
  mdSize3: N4,
  mdSize4: S4,
  mdSize5: O4,
  mdSize6: A4,
  mdSize7: H4,
  mdSize8: j4,
  mdSize9: V4,
  mdSize10: T4,
  mdSize11: D4,
  mdSize12: E4,
  mdOffset0: q4,
  mdOffset1: I4,
  mdOffset2: P4,
  mdOffset3: R4,
  mdOffset4: B4,
  mdOffset5: F4,
  mdOffset6: K4,
  mdOffset7: W4,
  mdOffset8: Z4,
  mdOffset9: U4,
  mdOffset10: X4,
  mdOffset11: G4,
  mdOffset12: Y4,
  mdOrderFirst: J4,
  mdOrderLast: Q4,
  mdOrder0: e3,
  mdOrder1: t3,
  mdOrder2: n3,
  mdOrder3: r3,
  mdOrder4: l3,
  mdOrder5: o3,
  mdOrder6: a3,
  mdOrder7: s3,
  mdOrder8: c3,
  mdOrder9: i3,
  mdOrder10: d3,
  mdOrder11: u3,
  mdOrder12: h3,
  lgSize1: f3,
  lgSize2: p3,
  lgSize3: m3,
  lgSize4: _3,
  lgSize5: g3,
  lgSize6: v3,
  lgSize7: k3,
  lgSize8: x3,
  lgSize9: y3,
  lgSize10: b3,
  lgSize11: M3,
  lgSize12: C3,
  lgOffset0: w3,
  lgOffset1: z3,
  lgOffset2: L3,
  lgOffset3: $3,
  lgOffset4: N3,
  lgOffset5: S3,
  lgOffset6: O3,
  lgOffset7: A3,
  lgOffset8: H3,
  lgOffset9: j3,
  lgOffset10: V3,
  lgOffset11: T3,
  lgOffset12: D3,
  lgOrderFirst: E3,
  lgOrderLast: q3,
  lgOrder0: I3,
  lgOrder1: P3,
  lgOrder2: R3,
  lgOrder3: B3,
  lgOrder4: F3,
  lgOrder5: K3,
  lgOrder6: W3,
  lgOrder7: Z3,
  lgOrder8: U3,
  lgOrder9: X3,
  lgOrder10: G3,
  lgOrder11: Y3,
  lgOrder12: J3,
  xlSize1: Q3,
  xlSize2: ei,
  xlSize3: ti,
  xlSize4: ni,
  xlSize5: ri,
  xlSize6: li,
  xlSize7: oi,
  xlSize8: ai,
  xlSize9: si,
  xlSize10: ci,
  xlSize11: ii,
  xlSize12: di,
  xlOffset0: ui,
  xlOffset1: hi,
  xlOffset2: fi,
  xlOffset3: pi,
  xlOffset4: mi,
  xlOffset5: _i,
  xlOffset6: gi,
  xlOffset7: vi,
  xlOffset8: ki,
  xlOffset9: xi,
  xlOffset10: yi,
  xlOffset11: bi,
  xlOffset12: Mi,
  xlOrderFirst: Ci,
  xlOrderLast: wi,
  xlOrder0: zi,
  xlOrder1: Li,
  xlOrder2: $i,
  xlOrder3: Ni,
  xlOrder4: Si,
  xlOrder5: Oi,
  xlOrder6: Ai,
  xlOrder7: Hi,
  xlOrder8: ji,
  xlOrder9: Vi,
  xlOrder10: Ti,
  xlOrder11: Di,
  xlOrder12: Ei,
  xxSize1: qi,
  xxSize2: Ii,
  xxSize3: Pi,
  xxSize4: Ri,
  xxSize5: Bi,
  xxSize6: Fi,
  xxSize7: Ki,
  xxSize8: Wi,
  xxSize9: Zi,
  xxSize10: Ui,
  xxSize11: Xi,
  xxSize12: Gi,
  xxOffset0: Yi,
  xxOffset1: Ji,
  xxOffset2: Qi,
  xxOffset3: e6,
  xxOffset4: t6,
  xxOffset5: n6,
  xxOffset6: r6,
  xxOffset7: l6,
  xxOffset8: o6,
  xxOffset9: a6,
  xxOffset10: s6,
  xxOffset11: c6,
  xxOffset12: i6,
  xxOrderFirst: d6,
  xxOrderLast: u6,
  xxOrder0: h6,
  xxOrder1: f6,
  xxOrder2: p6,
  xxOrder3: m6,
  xxOrder4: _6,
  xxOrder5: g6,
  xxOrder6: v6,
  xxOrder7: k6,
  xxOrder8: x6,
  xxOrder9: y6,
  xxOrder10: b6,
  xxOrder11: M6,
  xxOrder12: C6
}, w6 = [
  ["", "size", "offset", "order"],
  ["xs", "sizeXs", "offsetXs", "orderXs"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xx", "sizeXx", "offsetXx", "orderXx"]
];
function z6(e, t) {
  if (!Number.isInteger(t) || t < 1 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 1 and 12.`
    );
}
function L6(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12.`
    );
}
function $6(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12 or first/last.`
    );
}
function N6(e, t, n) {
  return t === "first" ? `${e}OrderFirst` : t === "last" ? `${e}OrderLast` : ($6(n, t), `${e}Order${t}`);
}
function s_({ className: e, style: t, ...n }) {
  const l = [s0.column], s = { ...t };
  for (const [O, w, _, N] of w6) {
    const V = n[w], T = n[_], j = n[N];
    if (V != null) {
      z6(w, V);
      const D = s0[`${O}Size${V}`];
      D && l.push(D);
    }
    if (T != null) {
      L6(_, T);
      const D = s0[`${O}Offset${T}`];
      D && l.push(D);
    }
    if (j != null) {
      const D = s0[N6(O, j, N)];
      D && l.push(D);
    }
  }
  const {
    size: c,
    offset: d,
    sizeXs: o,
    offsetXs: a,
    sizeSm: i,
    offsetSm: u,
    sizeMd: h,
    offsetMd: b,
    sizeLg: y,
    offsetLg: x,
    sizeXl: m,
    offsetXl: k,
    sizeXx: f,
    offsetXx: p,
    order: g,
    orderXs: M,
    orderSm: v,
    orderMd: L,
    orderLg: C,
    orderXl: z,
    orderXx: A,
    ...S
  } = n;
  return /* @__PURE__ */ r(
    "div",
    {
      className: [...l, e].filter(Boolean).join(" "),
      style: s,
      ...S
    }
  );
}
const S6 = "_stack_1yc1g_1", O6 = "_gapXs_1yc1g_29", A6 = "_gapSm_1yc1g_33", H6 = "_gapMd_1yc1g_37", j6 = "_gapLg_1yc1g_41", V6 = "_gapXl_1yc1g_45", Nt = {
  stack: S6,
  "dir-row": "_dir-row_1yc1g_5",
  "dir-row-reverse": "_dir-row-reverse_1yc1g_9",
  "dir-column": "_dir-column_1yc1g_13",
  "dir-column-reverse": "_dir-column-reverse_1yc1g_17",
  "wrap-nowrap": "_wrap-nowrap_1yc1g_21",
  "wrap-wrap-reverse": "_wrap-wrap-reverse_1yc1g_25",
  gapXs: O6,
  gapSm: A6,
  gapMd: H6,
  gapLg: j6,
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
}, T6 = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function D6(e) {
  return typeof e != "string" ? null : T6[e] ?? null;
}
function r2(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function c_({
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
  const i = D6(l), u = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", h = {
    ...l != null && !i ? { gap: typeof l == "number" ? `${l}px` : l } : {},
    ...o
  };
  return /* @__PURE__ */ r(
    "div",
    {
      className: [
        Nt.stack,
        Nt[`dir-${u}`],
        r2(n) !== "wrap" ? Nt[`wrap-${r2(n)}`] : null,
        s != null ? Nt[`align-${s}`] : null,
        c != null ? Nt[`justify-${c}`] : null,
        i ? Nt[i] : null,
        d
      ].filter(Boolean).join(" "),
      style: h,
      ...a
    }
  );
}
const E6 = "_autogrid_1fz7w_1", q6 = "_gapXs_1fz7w_10", I6 = "_gapSm_1fz7w_14", P6 = "_gapMd_1fz7w_18", R6 = "_gapLg_1fz7w_22", B6 = "_gapXl_1fz7w_26", l2 = {
  autogrid: E6,
  gapXs: q6,
  gapSm: I6,
  gapMd: P6,
  gapLg: R6,
  gapXl: B6
}, F6 = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function K6(e) {
  return typeof e != "string" ? null : F6[e] ?? null;
}
function i_({
  min: e = 240,
  gap: t = "md",
  className: n,
  style: l,
  visible: s = !0,
  ...c
}) {
  if (s === !1) return null;
  const d = K6(t), o = {
    // Keep --dx-autogrid-min in sync so the track math follows the prop.
    "--dx-autogrid-min": typeof e == "number" ? `${e}px` : e,
    ...t != null && !d ? { gap: typeof t == "number" ? `${t}px` : t } : {},
    ...l
  };
  return /* @__PURE__ */ r(
    "div",
    {
      className: [l2.autogrid, d ? l2[d] : null, n].filter(Boolean).join(" "),
      style: o,
      ...c
    }
  );
}
const W6 = "_layout_fxvw1_1", Z6 = "_row_fxvw1_7", U6 = "_grid_fxvw1_21", X6 = "_gridRight_fxvw1_27", G6 = "_gridHeader_fxvw1_31", Y6 = "_gridFooter_fxvw1_36", J6 = "_gridContents_fxvw1_41", Q6 = "_gridBody_fxvw1_45", Qe = {
  layout: W6,
  row: Z6,
  grid: U6,
  gridRight: X6,
  gridHeader: G6,
  gridFooter: Y6,
  gridContents: J6,
  gridBody: Q6
}, e8 = "_footer_1thaw_1", t8 = "_sticky_1thaw_9", o2 = {
  footer: e8,
  sticky: t8
};
function n8({
  sticky: e = !1,
  className: t,
  children: n,
  ...l
}) {
  return /* @__PURE__ */ r(
    "footer",
    {
      className: [o2.footer, e ? o2.sticky : null, t].filter(Boolean).join(" "),
      ...l,
      children: n
    }
  );
}
const r8 = "_header_wh9gi_1", l8 = "_sticky_wh9gi_9", a2 = {
  header: r8,
  sticky: l8
};
function o8({
  sticky: e = !1,
  className: t,
  children: n,
  ...l
}) {
  return /* @__PURE__ */ r(
    "header",
    {
      className: [a2.header, e ? a2.sticky : null, t].filter(Boolean).join(" "),
      ...l,
      children: n
    }
  );
}
const a8 = "_sidebar_1a2mp_1", s8 = "_sticky_1a2mp_23", c8 = "_left_1a2mp_41", i8 = "_right_1a2mp_45", d8 = "_start_1a2mp_50", u8 = "_end_1a2mp_54", h8 = "_fullHeight_1a2mp_60", f8 = "_collapsed_1a2mp_64", p8 = "_responsive_1a2mp_72", m8 = "_overlay_1a2mp_80", _8 = "_mask_1a2mp_108", ct = {
  sidebar: a8,
  sticky: s8,
  left: c8,
  right: i8,
  start: d8,
  end: u8,
  fullHeight: h8,
  collapsed: f8,
  responsive: p8,
  overlay: m8,
  mask: _8
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
  return g1(() => {
    if (!l || !t || d == null) return;
    const u = (h) => {
      h.key === "Escape" && d();
    };
    return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
  }, [l, t, d]), /* @__PURE__ */ $(b1, { children: [
    l && t ? /* @__PURE__ */ r(
      "div",
      {
        className: `${ct.mask} se-layout-mask`,
        "aria-hidden": "true",
        onClick: d
      }
    ) : null,
    /* @__PURE__ */ r(
      "aside",
      {
        className: [
          ct.sidebar,
          ct[e],
          t ? null : ct.collapsed,
          n ? ct.responsive : null,
          l ? [ct.overlay, "se-sidebar--overlay"] : null,
          s ? ct.fullHeight : null,
          c && !l && !s ? ct.sticky : null,
          o
        ].flat().filter(Boolean).join(" "),
        ...i,
        children: a
      }
    )
  ] });
}
function d_(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ r(b1, { children: e.children });
  const { className: t, children: n, ...l } = e, s = [], c = [], d = [], o = [], a = [], i = [];
  r0.forEach(n, (b) => {
    if (!ge(b)) {
      d.push(b);
      return;
    }
    if (b.type === o8)
      s.push(b);
    else if (b.type === n8)
      c.push(b);
    else if (b.type === g8) {
      const y = b, x = y.props.position;
      i.push(y), (x === "right" || x === "end" ? a : o).push(y);
    } else
      d.push(b);
  });
  const u = i.length === 1 && i[0]?.props.fullHeight === !0 ? i[0] : null, h = u != null && (u.props.position === "right" || u.props.position === "end");
  if (u) {
    const b = h ? a : o;
    return /* @__PURE__ */ $(
      "div",
      {
        className: [
          Qe.layout,
          Qe.grid,
          h ? Qe.gridRight : null,
          t
        ].filter(Boolean).join(" "),
        ...l,
        children: [
          s.length > 0 && /* @__PURE__ */ r("div", { className: Qe.gridHeader, children: s }),
          /* @__PURE__ */ $("div", { className: Qe.gridContents, children: [
            b,
            /* @__PURE__ */ r("div", { className: Qe.gridBody, children: d })
          ] }),
          c.length > 0 && /* @__PURE__ */ r("div", { className: Qe.gridFooter, children: c })
        ]
      }
    );
  }
  return /* @__PURE__ */ $(
    "div",
    {
      className: [Qe.layout, t].filter(Boolean).join(" "),
      ...l,
      children: [
        s,
        /* @__PURE__ */ $("div", { className: Qe.row, children: [
          o,
          d,
          a
        ] }),
        c
      ]
    }
  );
}
const v8 = "_body_akga4_1", k8 = "_bare_akga4_10", s2 = {
  body: v8,
  bare: k8
};
function u_({
  as: e = "main",
  padded: t = !0,
  className: n,
  children: l,
  ...s
}) {
  return /* @__PURE__ */ r(
    e,
    {
      className: [s2.body, t ? null : s2.bare, n].filter(Boolean).join(" "),
      ...s,
      children: l
    }
  );
}
const x8 = "_toggle_lxnk5_1", y8 = {
  toggle: x8
};
function h_({
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
      className: [y8.toggle, n].filter(Boolean).join(" "),
      ...c,
      children: s ?? /* @__PURE__ */ r(C1, { name: e, size: 20 })
    }
  );
}
const b8 = "_track_1itxd_1", M8 = "_bar_1itxd_31", C8 = "_primary_1itxd_39", w8 = "_success_1itxd_43", z8 = "_warning_1itxd_47", L8 = "_danger_1itxd_51", $8 = "_indeterminate_1itxd_149", N8 = "_circular_1itxd_163", S8 = "_fill_1itxd_203", ze = {
  track: b8,
  "linear-xs": "_linear-xs_1itxd_11",
  "linear-sm": "_linear-sm_1itxd_15",
  "linear-md": "_linear-md_1itxd_19",
  "linear-lg": "_linear-lg_1itxd_23",
  "linear-xl": "_linear-xl_1itxd_27",
  bar: M8,
  primary: C8,
  success: w8,
  warning: z8,
  danger: L8,
  "shade-lighter": "_shade-lighter_1itxd_133",
  "shade-light": "_shade-light_1itxd_133",
  "shade-dark": "_shade-dark_1itxd_141",
  "shade-darker": "_shade-darker_1itxd_145",
  indeterminate: $8,
  "se-progress-slide": "_se-progress-slide_1itxd_1",
  circular: N8,
  "circular-xs": "_circular-xs_1itxd_169",
  "circular-sm": "_circular-sm_1itxd_174",
  "circular-md": "_circular-md_1itxd_179",
  "circular-lg": "_circular-lg_1itxd_184",
  "circular-xl": "_circular-xl_1itxd_189",
  fill: S8,
  "se-progress-spin": "_se-progress-spin_1itxd_1"
};
function f_({
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
  const u = t > 0 ? Math.min(t, Math.max(0, e)) : 0, h = t > 0 ? u / t * 100 : 0;
  if (c === "circular") {
    const y = typeof d == "string", x = 2, m = 10.5, k = 2 * Math.PI * m, f = k * (s ? 0.75 : 1), p = s ? 0 : k * (1 - h / 100), g = Et(l);
    return /* @__PURE__ */ $(
      "svg",
      {
        width: y ? void 0 : d,
        height: y ? void 0 : d,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": i["aria-label"],
        "aria-labelledby": i["aria-labelledby"],
        "aria-valuenow": s ? void 0 : Math.round(u),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        ...i,
        className: [
          ze.circular,
          ze[n],
          g ? ze[g] : null,
          y ? ze[`circular-${d}`] : null,
          s ? ze.indeterminate : null,
          o
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ r(
            "circle",
            {
              className: ze.track,
              cx: 12,
              cy: 12,
              r: m,
              strokeWidth: x
            }
          ),
          /* @__PURE__ */ r(
            "circle",
            {
              className: ze.fill,
              cx: 12,
              cy: 12,
              r: m,
              strokeWidth: x,
              strokeDasharray: `${f} ${k}`,
              strokeDashoffset: p
            }
          )
        ]
      }
    );
  }
  const b = Et(l);
  return /* @__PURE__ */ r(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": s ? void 0 : Math.round(u),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        ze.track,
        ze[n],
        b ? ze[b] : null,
        typeof d == "string" ? ze[`linear-${d}`] : null,
        s ? ze.indeterminate : null,
        o
      ].filter(Boolean).join(" "),
      ...i,
      children: /* @__PURE__ */ r(
        "div",
        {
          className: ze.bar,
          style: s ? void 0 : { width: `${h}%` }
        }
      )
    }
  );
}
function O8(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function O2(e) {
  const [t, n] = K(() => O8(e));
  return g1(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const l = window.matchMedia(e);
    n(l.matches);
    const s = (c) => n(c.matches);
    return typeof l.addEventListener == "function" ? (l.addEventListener("change", s), () => l.removeEventListener("change", s)) : (l.addListener(s), () => l.removeListener(s));
  }, [e]), t;
}
const A8 = "_wrapper_1qmsj_1", H8 = {
  wrapper: A8
}, A2 = "dx-theme";
function j8(e) {
  const t = e === void 0 ? A2 : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const n = localStorage.getItem(t);
      return n === "light" || n === "dark" || n === "system" ? n : void 0;
    } catch {
      return;
    }
}
function V8(e, t) {
  const n = e === void 0 ? A2 : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function p_({
  value: e,
  defaultValue: t,
  storageKey: n,
  onChange: l,
  label: s = "Dark mode",
  className: c
}) {
  const d = O2("(prefers-color-scheme: dark)"), [o, a] = K(void 0), i = e ?? o ?? j8(n) ?? t ?? "system", u = i === "system" ? d ? "dark" : "light" : i;
  g1(() => {
    if (i === "system") {
      delete document.documentElement.dataset.theme;
      return;
    }
    document.documentElement.dataset.theme = i;
  }, [i]);
  const h = (b) => {
    const y = b.target.checked ? "dark" : "light";
    e === void 0 && a(y), V8(n, y), l?.(y);
  };
  return /* @__PURE__ */ $("label", { className: [H8.wrapper, c].filter(Boolean).join(" "), children: [
    s,
    /* @__PURE__ */ r(pa, { checked: u === "dark", onChange: h })
  ] });
}
function T8(e) {
  const t = new TextEncoder().encode(e), n = t.length * 8, l = ((t.length + 8 >> 6) + 1) * 64, s = new Uint8Array(l);
  s.set(t), s[t.length] = 128;
  const c = new DataView(s.buffer);
  c.setUint32(l - 8, n >>> 0, !0), c.setUint32(l - 4, Math.floor(n / 4294967296), !0);
  const d = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21], o = Array.from(
    { length: 64 },
    (m, k) => Math.floor(Math.abs(Math.sin(k + 1)) * 4294967296)
  ), a = (m, k) => m + k | 0, i = (m, k) => m << k | m >>> 32 - k;
  let u = 1732584193, h = 4023233417, b = 2562383102, y = 271733878;
  for (let m = 0; m < l; m += 64) {
    const k = [];
    for (let v = 0; v < 16; v += 1)
      k.push(c.getUint32(m + v * 4, !0));
    let f = u, p = h, g = b, M = y;
    for (let v = 0; v < 64; v += 1) {
      let L, C;
      v < 16 ? (L = p & g | ~p & M, C = v) : v < 32 ? (L = M & p | ~M & g, C = (5 * v + 1) % 16) : v < 48 ? (L = p ^ g ^ M, C = (3 * v + 5) % 16) : (L = g ^ (p | ~M), C = 7 * v % 16), L = a(a(a(L, f), o[v]), k[C]), f = M, M = g, g = p, p = a(p, i(L, d[Math.floor(v / 16) * 4 + v % 4]));
    }
    u = a(u, f), h = a(h, p), b = a(b, g), y = a(y, M);
  }
  const x = (m) => {
    let k = "";
    for (let f = 0; f < 4; f += 1)
      k += `0${(m >>> f * 8 & 255).toString(16)}`.slice(-2);
    return k;
  };
  return x(u) + x(h) + x(b) + x(y);
}
const D8 = "_avatar_yj2hz_1", E8 = "_xs_yj2hz_12", q8 = "_sm_yj2hz_18", I8 = "_md_yj2hz_24", P8 = "_lg_yj2hz_30", R8 = "_xl_yj2hz_36", B8 = "_initials_yj2hz_42", F8 = "_image_yj2hz_57", K8 = "_status_yj2hz_64", W8 = "_online_yj2hz_84", Z8 = "_offline_yj2hz_88", U8 = "_away_yj2hz_92", St = {
  avatar: D8,
  xs: E8,
  sm: q8,
  md: I8,
  lg: P8,
  xl: R8,
  initials: B8,
  image: F8,
  status: K8,
  online: W8,
  offline: Z8,
  away: U8
}, X8 = {
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
function G8(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function Y8(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = t * 31 + e.charCodeAt(n) >>> 0;
  return m0[t % m0.length] ?? m0[0];
}
function m_({
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
  const i = v1(() => e ? G8(e) : "?", [e]), u = v1(() => e ? Y8(e) : m0[0], [e]), h = v1(() => {
    if (t != null || n == null) return;
    const M = n.trim().toLowerCase();
    return M === "" ? void 0 : `https://secure.gravatar.com/avatar/${T8(M)}?d=${l}&s=${X8[d]}&r=${s}`;
  }, [t, n, l, s, d]), b = t ?? h, [y, x] = K(null), m = b != null && y !== b, k = m && c === "", f = c ?? e ?? "avatar", p = o ? `${f}, ${o}` : f, g = m ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ r(
      "img",
      {
        className: St.image,
        src: b,
        alt: k ? "" : o ? p : f,
        onError: () => x(b ?? null)
      }
    )
  ) : /* @__PURE__ */ r(
    "span",
    {
      "aria-hidden": "true",
      className: St.initials,
      style: { background: u },
      children: i
    }
  );
  return /* @__PURE__ */ $(
    "span",
    {
      className: [
        St.avatar,
        St[d],
        o ? St[o] : null,
        a
      ].filter(Boolean).join(" "),
      role: m ? void 0 : "img",
      "aria-label": m ? void 0 : p,
      children: [
        g,
        o && /* @__PURE__ */ r("span", { className: St.status, "aria-hidden": "true" })
      ]
    }
  );
}
const J8 = "_root_iy2gv_1", Q8 = "_left_iy2gv_6", e7 = "_right_iy2gv_7", t7 = "_panel_iy2gv_12", n7 = "_bottom_iy2gv_20", r7 = "_tabList_iy2gv_24", l7 = "_underline_iy2gv_53", o7 = "_pills_iy2gv_72", a7 = "_tab_iy2gv_24", s7 = "_active_iy2gv_113", c7 = "_disabled_iy2gv_139", et = {
  root: J8,
  left: Q8,
  right: e7,
  panel: t7,
  bottom: n7,
  tabList: r7,
  underline: l7,
  pills: o7,
  tab: a7,
  active: s7,
  disabled: c7
};
function __({
  items: e,
  value: t,
  defaultValue: n,
  onChange: l,
  variant: s = "underline",
  position: c = "top",
  className: d
}) {
  const o = q1(), a = G(null), [i, u] = K(
    n ?? e[0]?.key ?? ""
  ), h = t ?? i, b = c === "left" || c === "right", y = (k) => {
    u(k), l?.(k);
  }, x = (k) => {
    const f = e.filter((M) => !M.disabled), p = f.findIndex((M) => M.key === h);
    let g = -1;
    k.key === "ArrowRight" || b && k.key === "ArrowDown" ? g = (p + 1) % f.length : k.key === "ArrowLeft" || b && k.key === "ArrowUp" ? g = (p - 1 + f.length) % f.length : k.key === "Home" ? g = 0 : k.key === "End" && (g = f.length - 1), g >= 0 && (k.preventDefault(), a.current?.querySelector(
      `[data-tab-key="${CSS.escape(f[g]?.key ?? "")}"]`
    )?.focus(), y(f[g]?.key ?? ""));
  }, m = e.find((k) => k.key === h);
  return /* @__PURE__ */ $(
    "div",
    {
      className: [et.root, et[c], d].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ r(
          "div",
          {
            ref: a,
            role: "tablist",
            className: [et.tabList, et[s], et[c]].filter(Boolean).join(" "),
            onKeyDown: x,
            children: e.map((k) => {
              const f = k.key === h;
              return /* @__PURE__ */ r(
                "button",
                {
                  type: "button",
                  role: "tab",
                  id: `${o}-tab-${k.key}`,
                  "data-tab-key": k.key,
                  "aria-selected": f,
                  "aria-controls": `${o}-panel-${k.key}`,
                  tabIndex: f ? 0 : -1,
                  disabled: k.disabled,
                  className: [
                    et.tab,
                    f ? et.active : null,
                    k.disabled ? et.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => y(k.key),
                  children: k.label
                },
                k.key
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
            className: et.panel,
            children: m.content
          }
        )
      ]
    }
  );
}
const i7 = "_root_1qkv8_1", d7 = "_item_1qkv8_9", u7 = "_heading_1qkv8_13", h7 = "_trigger_1qkv8_17", f7 = "_disabled_1qkv8_34", p7 = "_title_1qkv8_48", m7 = "_chevron_1qkv8_52", _7 = "_open_1qkv8_59", g7 = "_content_1qkv8_63", tt = {
  root: i7,
  item: d7,
  heading: u7,
  trigger: h7,
  disabled: f7,
  title: p7,
  chevron: m7,
  open: _7,
  content: g7
};
function g_({
  items: e,
  multiple: t = !1,
  value: n,
  defaultValue: l,
  onChange: s,
  className: c
}) {
  const d = q1(), [o, a] = K(
    l ?? []
  ), i = n ?? o, u = (h) => {
    const b = i.includes(h) ? i.filter((y) => y !== h) : t ? [...i, h] : [h];
    a(b), s?.(b);
  };
  return /* @__PURE__ */ r("div", { className: [tt.root, c].filter(Boolean).join(" "), children: e.map((h) => {
    const b = i.includes(h.key), y = `${d}-panel-${h.key}`, x = `${d}-trigger-${h.key}`;
    return /* @__PURE__ */ $("div", { className: tt.item, children: [
      /* @__PURE__ */ r("h3", { className: tt.heading, children: /* @__PURE__ */ $(
        "button",
        {
          type: "button",
          id: x,
          "aria-expanded": b,
          "aria-controls": y,
          disabled: h.disabled,
          className: [
            tt.trigger,
            h.disabled ? tt.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => u(h.key),
          children: [
            /* @__PURE__ */ r("span", { className: tt.title, children: h.title }),
            /* @__PURE__ */ r(
              "span",
              {
                className: [tt.chevron, b ? tt.open : null].filter(Boolean).join(" "),
                "aria-hidden": "true",
                children: /* @__PURE__ */ r(C1, { name: "chevron-down", size: 12 })
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
          "aria-labelledby": x,
          hidden: !b,
          className: tt.content,
          children: h.content
        }
      )
    ] }, h.key);
  }) });
}
const v7 = "_textarea_1uei3_1", k7 = "_invalid_1uei3_27", x7 = "_xs_1uei3_34", y7 = "_sm_1uei3_39", b7 = "_md_1uei3_44", M7 = "_lg_1uei3_49", C7 = "_xl_1uei3_54", c0 = {
  textarea: v7,
  invalid: k7,
  xs: x7,
  sm: y7,
  md: b7,
  lg: M7,
  xl: C7,
  "resize-none": "_resize-none_1uei3_59",
  "resize-vertical": "_resize-vertical_1uei3_63",
  "resize-horizontal": "_resize-horizontal_1uei3_67",
  "resize-both": "_resize-both_1uei3_71"
}, v_ = R1(
  function({ size: t = "md", resize: n = "none", invalid: l = !1, className: s, ...c }, d) {
    return /* @__PURE__ */ r(
      "textarea",
      {
        ref: d,
        "data-size": t,
        className: [
          c0.textarea,
          c0[t],
          c0[`resize-${n}`],
          l ? c0.invalid : null,
          s
        ].filter(Boolean).join(" "),
        "aria-invalid": l || void 0,
        ...c
      }
    );
  }
), w7 = "_root_jtes6_1", z7 = "_trigger_jtes6_9", L7 = "_invalid_jtes6_40", $7 = "_placeholder_jtes6_47", N7 = "_label_jtes6_54", S7 = "_chevron_jtes6_60", O7 = "_chevronOpen_jtes6_70", A7 = "_menu_jtes6_74", H7 = "_option_jtes6_89", j7 = "_disabled_jtes6_100", V7 = "_active_jtes6_104", T7 = "_selected_jtes6_105", D7 = "_header_jtes6_115", E7 = "_xs_jtes6_122", q7 = "_sm_jtes6_128", I7 = "_md_jtes6_134", P7 = "_lg_jtes6_140", R7 = "_xl_jtes6_146", me = {
  root: w7,
  trigger: z7,
  invalid: L7,
  placeholder: $7,
  label: N7,
  chevron: S7,
  chevronOpen: O7,
  menu: A7,
  option: H7,
  disabled: j7,
  active: V7,
  selected: T7,
  header: D7,
  xs: E7,
  sm: q7,
  md: I7,
  lg: P7,
  xl: R7
}, B7 = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function k_({
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
  const u = q1(), h = `${u}-listbox`, b = G(null), y = G(null), [x, m] = K(
    n
  ), [k, f] = K(!1), p = t ?? x, g = e.map(
    (_, N) => _.label === "" || _.disabled ? -1 : N
  ).filter((_) => _ >= 0), M = e.findIndex(
    (_) => _.value === p
  ), [v, L] = K(
    () => g.includes(0) ? 0 : g[0] ?? -1
  ), C = q(() => {
    if (o) return;
    const _ = M >= 0 && g.includes(M) ? M : g[0];
    L(_ ?? -1), f(!0);
  }, [o, M, g]), z = q(() => {
    f(!1), y.current?.focus();
  }, []);
  g1(() => {
    if (!k) return;
    const _ = (N) => {
      b.current && !b.current.contains(N.target) && f(!1);
    };
    return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
  }, [k]);
  const A = (_) => {
    m(_), l?.(_), f(!1), y.current?.focus();
  }, S = (_) => {
    if (g.length === 0) return;
    const N = g.includes(v) ? g.indexOf(v) : 0, V = g[(N + _ + g.length) % g.length];
    V != null && L(V);
  }, O = (_) => {
    if (!k) {
      _.key === "ArrowDown" && (_.preventDefault(), C());
      return;
    }
    switch (_.key) {
      case "ArrowDown":
        _.preventDefault(), S(1);
        break;
      case "ArrowUp":
        _.preventDefault(), S(-1);
        break;
      case "Home":
        _.preventDefault(), g[0] != null && L(g[0]);
        break;
      case "End":
        _.preventDefault(), g[g.length - 1] != null && L(g[g.length - 1]);
        break;
      case "Enter":
      case " ":
        _.preventDefault(), v >= 0 && e[v] && g.includes(v) && A(e[v]?.value ?? "");
        break;
      case "Escape":
        _.preventDefault(), z();
        break;
      case "Tab":
        f(!1);
        break;
    }
  }, w = e.find(
    (_) => _.value === p
  );
  return /* @__PURE__ */ $(
    "div",
    {
      ref: b,
      className: [me.root, a].filter(Boolean).join(" "),
      onKeyDown: O,
      children: [
        /* @__PURE__ */ $(
          "button",
          {
            ref: y,
            type: "button",
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-expanded": k,
            "aria-controls": h,
            "aria-invalid": d || void 0,
            disabled: o,
            className: [
              me.trigger,
              me[c],
              k ? me.open : null,
              d ? me.invalid : null
            ].filter(Boolean).join(" "),
            onClick: () => k ? f(!1) : C(),
            ...i,
            children: [
              /* @__PURE__ */ r("span", { className: w ? me.label : me.placeholder, children: w ? w.label : s }),
              /* @__PURE__ */ r(
                "span",
                {
                  className: [me.chevron, k ? me.chevronOpen : null].filter(Boolean).join(" "),
                  style: { backgroundImage: B7 },
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ),
        k && /* @__PURE__ */ r(
          "div",
          {
            id: h,
            role: "listbox",
            "aria-activedescendant": v >= 0 ? `${u}-option-${v}` : void 0,
            className: me.menu,
            children: e.map(
              (_, N) => _.label === "" ? /* @__PURE__ */ r(
                "div",
                {
                  className: me.header,
                  role: "presentation",
                  children: _.value
                },
                _.value
              ) : /* @__PURE__ */ r(
                "div",
                {
                  id: `${u}-option-${N}`,
                  role: "option",
                  "aria-selected": _.value === p,
                  "aria-disabled": _.disabled || void 0,
                  className: [
                    me.option,
                    N === v ? me.active : null,
                    _.value === p ? me.selected : null,
                    _.disabled ? me.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    _.disabled || A(_.value);
                  },
                  onMouseEnter: () => {
                    !_.disabled && _.label !== "" && L(N);
                  },
                  children: _.label
                },
                _.value
              )
            )
          }
        )
      ]
    }
  );
}
const F7 = "_root_5j58f_1", K7 = "_wrap_5j58f_9", W7 = "_input_5j58f_26", Z7 = "_invalid_5j58f_31", U7 = "_clear_5j58f_58", X7 = "_menu_5j58f_83", G7 = "_option_5j58f_98", Y7 = "_disabled_5j58f_109", J7 = "_active_5j58f_113", Q7 = "_empty_5j58f_123", ed = "_xs_5j58f_129", td = "_sm_5j58f_136", nd = "_md_5j58f_143", rd = "_lg_5j58f_150", ld = "_xl_5j58f_157", Ee = {
  root: F7,
  wrap: K7,
  input: W7,
  invalid: Z7,
  clear: U7,
  menu: X7,
  option: G7,
  disabled: Y7,
  active: J7,
  empty: Q7,
  xs: ed,
  sm: td,
  md: nd,
  lg: rd,
  xl: ld
}, od = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function x_({
  options: e = [],
  value: t,
  defaultValue: n = "",
  onChange: l,
  onSelect: s,
  placeholder: c = "",
  size: d = "md",
  invalid: o = !1,
  disabled: a = !1,
  filter: i = od,
  className: u,
  ...h
}) {
  const b = q1(), y = `${b}-listbox`, x = G(null), m = G(null), [k, f] = K(n), [p, g] = K(!1), M = t ?? k, v = v1(
    () => M.trim() === "" ? [...e] : e.filter((j) => i(j, M)),
    [e, M, i]
  ), L = v.map((j, D) => j.disabled ? -1 : D).filter((j) => j >= 0), [C, z] = K(-1), A = (j) => {
    f(j), l?.(j);
  }, S = (j) => {
    A(j.label), s?.(j.value, j), g(!1);
  }, O = (j) => {
    if (L.length === 0) return;
    const D = L.includes(C) ? L.indexOf(C) : j === 1 ? -1 : 0, Y = L[(D + j + L.length) % L.length];
    Y != null && z(Y);
  }, w = (j) => {
    a || (A(j.target.value), g(!0), z(-1));
  }, _ = () => {
    a || M !== "" && g(!0);
  }, N = (j) => {
    x.current && !x.current.contains(j.relatedTarget) && g(!1);
  }, V = (j) => {
    if (!a)
      switch (j.key) {
        case "ArrowDown":
          j.preventDefault(), p ? O(1) : (g(!0), z(L[0] ?? -1));
          break;
        case "ArrowUp":
          j.preventDefault(), p && O(-1);
          break;
        case "Enter":
          j.preventDefault(), p && C >= 0 && v[C] && S(v[C]);
          break;
        case "Escape":
          j.preventDefault(), g(!1);
          break;
        case "Tab":
          p && C >= 0 && v[C] && S(v[C]), g(!1);
          break;
      }
  }, T = () => {
    A(""), z(-1), g(!0), m.current?.focus();
  };
  return /* @__PURE__ */ $(
    "div",
    {
      ref: x,
      className: [Ee.root, u].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ $(
          "div",
          {
            className: [Ee.wrap, Ee[d], o ? Ee.invalid : null].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ r(
                "input",
                {
                  ref: m,
                  type: "text",
                  role: "combobox",
                  "aria-expanded": p,
                  "aria-controls": y,
                  "aria-autocomplete": "list",
                  "aria-activedescendant": p && C >= 0 ? `${b}-option-${C}` : void 0,
                  "aria-invalid": o || void 0,
                  disabled: a,
                  value: M,
                  placeholder: c,
                  className: Ee.input,
                  onChange: w,
                  onFocus: _,
                  onBlur: N,
                  onKeyDown: V,
                  ...h
                }
              ),
              M !== "" && !a && /* @__PURE__ */ r(
                "button",
                {
                  type: "button",
                  className: Ee.clear,
                  "aria-label": "Clear",
                  onClick: T,
                  children: /* @__PURE__ */ r(C1, { name: "close", size: "sm" })
                }
              )
            ]
          }
        ),
        p && /* @__PURE__ */ r("div", { id: y, role: "listbox", className: Ee.menu, children: v.length === 0 ? /* @__PURE__ */ r("div", { className: Ee.empty, children: "No matches" }) : v.map((j, D) => /* @__PURE__ */ r(
          "div",
          {
            id: `${b}-option-${D}`,
            role: "option",
            "aria-selected": !1,
            "aria-disabled": j.disabled || void 0,
            className: [
              Ee.option,
              D === C ? Ee.active : null,
              j.disabled ? Ee.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => {
              j.disabled || S(j);
            },
            onMouseDown: (Y) => {
              Y.preventDefault(), j.disabled || S(j);
            },
            onMouseEnter: () => {
              j.disabled || z(D);
            },
            children: j.label
          },
          j.value
        )) })
      ]
    }
  );
}
const ad = "_box_txdu6_1", sd = "_option_txdu6_12", cd = "_disabled_txdu6_23", id = "_selected_txdu6_27", dd = "_active_txdu6_33", Ut = {
  box: ad,
  option: sd,
  disabled: cd,
  selected: id,
  active: dd
};
function y_({
  options: e = [],
  value: t,
  defaultValue: n,
  multiple: l = !1,
  onChange: s,
  className: c,
  style: d,
  ...o
}) {
  const a = q1(), [i, u] = K(() => {
    const v = n;
    return v == null ? [] : Array.isArray(v) ? [...v] : [v];
  }), h = t == null ? i : Array.isArray(t) ? t : [t], b = e.findIndex((v) => !v.disabled), [y, x] = K(
    () => b >= 0 ? b : 0
  ), m = G(""), k = G(null), f = (v) => {
    u(v), s?.(l ? v : v[0] ?? "");
  }, p = e.map((v, L) => v.disabled ? -1 : L).filter((v) => v >= 0), g = (v) => {
    const L = e[v];
    if (!(!L || L.disabled))
      if (x(v), l) {
        const C = h.includes(L.value) ? h.filter((z) => z !== L.value) : [...h, L.value];
        f(C);
      } else
        f([L.value]);
  }, M = (v) => {
    if (p.length === 0) return;
    const L = p.includes(y) ? y : p[0];
    let C = -1;
    if (v.key === "ArrowDown")
      C = p[(p.indexOf(L) + 1) % p.length];
    else if (v.key === "ArrowUp")
      C = p[(p.indexOf(L) - 1 + p.length) % p.length];
    else if (v.key === "Home")
      C = p[0];
    else if (v.key === "End")
      C = p[p.length - 1];
    else if (v.key === "Enter" || v.key === " ") {
      v.preventDefault(), g(L);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(v.key)) {
      v.preventDefault();
      const z = (m.current + v.key).toLowerCase();
      m.current = z, k.current && clearTimeout(k.current), k.current = setTimeout(() => {
        m.current = "";
      }, 500);
      const A = [...p, ...p], S = p.indexOf(L) + 1, O = A.slice(S).find((w) => e[w]?.label.toLowerCase().startsWith(z));
      O != null && x(O);
      return;
    }
    C >= 0 && (v.preventDefault(), x(C), l || f([e[C]?.value ?? ""]));
  };
  return /* @__PURE__ */ r(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": l || void 0,
      "aria-activedescendant": e[y] ? `${a}-option-${y}` : void 0,
      style: d,
      className: [Ut.box, c].filter(Boolean).join(" "),
      onKeyDown: M,
      ...o,
      children: e.map((v, L) => {
        const C = h.includes(v.value), z = L === y;
        return /* @__PURE__ */ r(
          "div",
          {
            id: `${a}-option-${L}`,
            role: "option",
            "aria-selected": C,
            "aria-disabled": v.disabled || void 0,
            className: [
              Ut.option,
              C ? Ut.selected : null,
              z ? Ut.active : null,
              v.disabled ? Ut.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => g(L),
            children: v.label
          },
          v.value
        );
      })
    }
  );
}
const ud = "_group_1gpkr_1", hd = "_legend_1gpkr_8", fd = "_list_1gpkr_16", pd = "_item_1gpkr_25", md = "_disabled_1gpkr_32", _d = "_label_1gpkr_37", gd = "_checkbox_1gpkr_48", kt = {
  group: ud,
  legend: hd,
  list: fd,
  item: pd,
  disabled: md,
  label: _d,
  checkbox: gd
};
function b_({
  options: e = [],
  value: t,
  defaultValue: n = [],
  onChange: l,
  legend: s,
  name: c,
  className: d
}) {
  const [o, a] = K(() => [
    ...n
  ]), i = t ?? o, u = (h, b) => {
    const y = b ? [...i, h] : i.filter((x) => x !== h);
    a(y), l?.(y);
  };
  return /* @__PURE__ */ $("fieldset", { className: [kt.group, d].filter(Boolean).join(" "), children: [
    s != null && /* @__PURE__ */ r("legend", { className: kt.legend, children: s }),
    /* @__PURE__ */ r("ul", { className: kt.list, children: e.map((h) => {
      const b = i.includes(h.value);
      return /* @__PURE__ */ r(
        "li",
        {
          className: [kt.item, h.disabled ? kt.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ $("label", { className: kt.label, children: [
            /* @__PURE__ */ r(
              "input",
              {
                type: "checkbox",
                className: kt.checkbox,
                name: c,
                value: h.value,
                checked: b,
                disabled: h.disabled,
                onChange: (y) => u(h.value, y.target.checked)
              }
            ),
            /* @__PURE__ */ r("span", { children: h.label })
          ] })
        },
        h.value
      );
    }) })
  ] });
}
const vd = "_group_wb5fo_1", kd = "_legend_wb5fo_8", xd = "_list_wb5fo_16", yd = "_item_wb5fo_25", bd = "_disabled_wb5fo_32", Md = "_label_wb5fo_37", Cd = "_radio_wb5fo_48", xt = {
  group: vd,
  legend: kd,
  list: xd,
  item: yd,
  disabled: bd,
  label: Md,
  radio: Cd
};
function M_({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: l,
  legend: s,
  name: c,
  className: d
}) {
  const [o, a] = K(
    n
  ), i = t ?? o, u = (h) => {
    a(h), l?.(h);
  };
  return /* @__PURE__ */ $("fieldset", { className: [xt.group, d].filter(Boolean).join(" "), children: [
    s != null && /* @__PURE__ */ r("legend", { className: xt.legend, children: s }),
    /* @__PURE__ */ r("ul", { className: xt.list, children: e.map((h) => {
      const b = h.value === i;
      return /* @__PURE__ */ r(
        "li",
        {
          className: [xt.item, h.disabled ? xt.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ $("label", { className: xt.label, children: [
            /* @__PURE__ */ r(
              "input",
              {
                type: "radio",
                className: xt.radio,
                name: c,
                value: h.value,
                checked: b,
                disabled: h.disabled,
                onChange: (y) => u(y.target.value)
              }
            ),
            /* @__PURE__ */ r("span", { children: h.label })
          ] })
        },
        h.value
      );
    }) })
  ] });
}
const wd = "_bar_44vcf_1", zd = "_vertical_44vcf_12", Ld = "_option_44vcf_17", $d = "_selected_44vcf_40", Nd = "_sm_44vcf_56", Sd = "_md_44vcf_62", Od = "_lg_44vcf_68", Ot = {
  bar: wd,
  vertical: zd,
  option: Ld,
  selected: $d,
  sm: Nd,
  md: Sd,
  lg: Od
};
function c2(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function C_(e) {
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
  } = e, u = s ?? !1, [h, b] = K(l ?? (u ? [] : t[0]?.value)), y = n ?? h, x = s === !0 || s === void 0 && Array.isArray(y), m = (f) => {
    if (!x) {
      b(f), d?.(f);
      return;
    }
    const p = c2(y), g = p.includes(f) ? p.filter((M) => M !== f) : [...p, f];
    b(g), d?.(g);
  }, k = (f) => x ? c2(y).includes(f) : y === f;
  return /* @__PURE__ */ r(
    "div",
    {
      role: "group",
      className: [
        Ot.bar,
        Ot[o],
        c === "vertical" ? Ot.vertical : null,
        a
      ].filter(Boolean).join(" "),
      ...i,
      children: t.map((f) => {
        const p = k(f.value);
        return /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            "aria-pressed": p,
            disabled: f.disabled,
            className: [
              Ot.option,
              p ? Ot.selected : null,
              f.disabled ? Ot.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => m(f.value),
            children: f.label
          },
          f.value
        );
      })
    }
  );
}
const Ad = "_toggle_bc517_1", Hd = "_pressed_bc517_29", jd = "_sm_bc517_41", Vd = "_md_bc517_47", Td = "_lg_bc517_53", Dd = "_fullWidth_bc517_59", i0 = {
  toggle: Ad,
  pressed: Hd,
  sm: jd,
  md: Vd,
  lg: Td,
  fullWidth: Dd
}, w_ = R1(
  function({
    pressed: t,
    defaultPressed: n = !1,
    onChange: l,
    size: s = "md",
    fullWidth: c = !1,
    className: d,
    type: o = "button",
    ...a
  }, i) {
    const [u, h] = K(n), b = t ?? u, y = () => {
      const x = !b;
      h(x), l?.(x);
    };
    return /* @__PURE__ */ r(
      "button",
      {
        ref: i,
        type: o,
        "aria-pressed": b,
        className: [
          i0.toggle,
          i0[s],
          b ? i0.pressed : null,
          c ? i0.fullWidth : null,
          d
        ].filter(Boolean).join(" "),
        onClick: y,
        ...a
      }
    );
  }
), Ed = "_root_pn7s6_1", qd = "_action_pn7s6_285", Id = "_filled_pn7s6_305", Pd = "_caret_pn7s6_309", Rd = "_flat_pn7s6_331", Bd = "_outlined_pn7s6_343", Fd = "_text_pn7s6_352", Kd = "_sm_pn7s6_451", Wd = "_md_pn7s6_463", Zd = "_lg_pn7s6_475", Ud = "_menu_pn7s6_487", Xd = "_item_pn7s6_500", Gd = "_disabled_pn7s6_521", Yd = "_active_pn7s6_525", Jd = "_danger_pn7s6_534", Oe = {
  root: Ed,
  "style-primary": "_style-primary_pn7s6_10",
  "style-secondary": "_style-secondary_pn7s6_18",
  "style-base": "_style-base_pn7s6_26",
  "style-light": "_style-light_pn7s6_34",
  "style-dark": "_style-dark_pn7s6_42",
  "style-info": "_style-info_pn7s6_50",
  "style-success": "_style-success_pn7s6_58",
  "style-warning": "_style-warning_pn7s6_66",
  "style-danger": "_style-danger_pn7s6_74",
  action: qd,
  filled: Id,
  caret: Pd,
  flat: Rd,
  outlined: Bd,
  text: Fd,
  "shade-lighter": "_shade-lighter_pn7s6_370",
  "shade-light": "_shade-light_pn7s6_370",
  "shade-dark": "_shade-dark_pn7s6_380",
  "shade-darker": "_shade-darker_pn7s6_384",
  sm: Kd,
  md: Wd,
  lg: Zd,
  menu: Ud,
  item: Xd,
  disabled: Gd,
  active: Yd,
  danger: Jd
};
function z_({
  label: e,
  onClick: t,
  items: n = [],
  severity: l = "primary",
  variant: s = "filled",
  shade: c = "default",
  size: d = "md",
  disabled: o = !1,
  className: a,
  ...i
}) {
  const h = `${q1()}-menu`, b = G(null), y = G(null), x = G([]), [m, k] = K(!1), [f, p] = K(-1), g = v1(
    () => n.map((w, _) => w.disabled ? -1 : _).filter((w) => w >= 0),
    [n]
  ), M = q(() => {
    o || (p(g[0] ?? -1), k(!0));
  }, [o, g]), v = q(() => {
    k(!1), y.current?.focus();
  }, []);
  g1(() => {
    if (!m) return;
    const w = (_) => {
      b.current && !b.current.contains(_.target) && k(!1);
    };
    return document.addEventListener("mousedown", w), () => document.removeEventListener("mousedown", w);
  }, [m]);
  const L = G(m);
  g1(() => {
    const w = L.current;
    if (L.current = m, !m || w) return;
    const _ = g.includes(f) ? f : g[0] ?? -1;
    _ >= 0 && x.current[_]?.focus();
  }, [m, f, g]);
  const C = (w) => {
    const _ = n[w];
    !_ || _.disabled || (_.onClick?.(), k(!1), y.current?.focus());
  }, z = (w) => {
    if (g.length === 0) return;
    const _ = g.includes(f) ? g.indexOf(f) : w === 1 ? -1 : 0, N = g[(_ + w + g.length) % g.length];
    N != null && (p(N), x.current[N]?.focus());
  }, A = (w) => {
    const _ = w === "first" ? g[0] : g[g.length - 1];
    _ != null && (p(_), x.current[_]?.focus());
  }, S = (w) => {
    switch (w.key) {
      case "ArrowDown":
        w.preventDefault(), z(1);
        break;
      case "ArrowUp":
        w.preventDefault(), z(-1);
        break;
      case "Home":
        w.preventDefault(), A("first");
        break;
      case "End":
        w.preventDefault(), A("last");
        break;
      case "Escape":
        w.preventDefault(), v();
        break;
      case "Tab":
        k(!1);
        break;
    }
  }, O = Et(c);
  return /* @__PURE__ */ $(
    "div",
    {
      ref: b,
      className: [
        Oe.root,
        Oe[d],
        Oe[`style-${l}`],
        Oe[q0(s, "filled")],
        O ? Oe[O] : null,
        a
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: Oe.action,
            disabled: o,
            onClick: t,
            children: e
          }
        ),
        /* @__PURE__ */ r(
          "button",
          {
            ref: y,
            type: "button",
            className: Oe.caret,
            "aria-haspopup": "menu",
            "aria-expanded": m,
            "aria-controls": h,
            "aria-label": "More actions",
            disabled: o,
            onClick: () => m ? k(!1) : M(),
            onKeyDown: (w) => {
              !m && w.key === "ArrowDown" && (w.preventDefault(), M());
            },
            children: /* @__PURE__ */ r(C1, { name: "chevron-down" })
          }
        ),
        m && /* @__PURE__ */ r(
          "div",
          {
            id: h,
            role: "menu",
            tabIndex: -1,
            className: Oe.menu,
            onKeyDown: S,
            ...i,
            children: n.map((w, _) => /* @__PURE__ */ r(
              "button",
              {
                ref: (N) => {
                  x.current[_] = N;
                },
                type: "button",
                role: "menuitem",
                tabIndex: _ === f ? 0 : -1,
                disabled: w.disabled,
                className: [
                  Oe.item,
                  _ === f ? Oe.active : null,
                  w.danger ? Oe.danger : null,
                  w.disabled ? Oe.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => C(_),
                onMouseEnter: () => {
                  w.disabled || p(_);
                },
                children: w.label
              },
              w.key
            ))
          }
        )
      ]
    }
  );
}
const Qd = "_wrapper_eg26m_1", e9 = "_input_eg26m_8", t9 = "_invalid_eg26m_38", n9 = "_toggle_eg26m_45", r9 = "_xs_eg26m_80", l9 = "_sm_eg26m_86", o9 = "_md_eg26m_92", a9 = "_lg_eg26m_98", s9 = "_xl_eg26m_104", Xt = {
  wrapper: Qd,
  input: e9,
  invalid: t9,
  toggle: n9,
  xs: r9,
  sm: l9,
  md: o9,
  lg: a9,
  xl: s9
}, L_ = R1(
  function({
    size: t = "md",
    invalid: n = !1,
    className: l,
    disabled: s,
    showLabel: c = "Show password",
    hideLabel: d = "Hide password",
    ...o
  }, a) {
    const [i, u] = K(!1);
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ $("div", { className: Xt.wrapper, "data-size": t, children: [
        /* @__PURE__ */ r(
          "input",
          {
            ref: a,
            type: i ? "text" : "password",
            disabled: s,
            className: [
              Xt.input,
              Xt[t],
              n ? Xt.invalid : null,
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
            className: Xt.toggle,
            "aria-pressed": i,
            "aria-label": i ? d : c,
            disabled: s,
            onClick: () => u((h) => !h),
            children: /* @__PURE__ */ r(C1, { name: i ? "eye-off" : "eye", size: 16 })
          }
        )
      ] })
    );
  }
), c9 = "_mask_1pv7j_1", i9 = "_invalid_1pv7j_31", d9 = "_xs_1pv7j_38", u9 = "_sm_1pv7j_44", h9 = "_md_1pv7j_50", f9 = "_lg_1pv7j_56", p9 = "_xl_1pv7j_62", z0 = {
  mask: c9,
  invalid: i9,
  xs: d9,
  sm: u9,
  md: h9,
  lg: f9,
  xl: p9
};
function i2(e, t) {
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
const $_ = R1(function({
  size: t = "md",
  invalid: n = !1,
  mask: l,
  value: s,
  defaultValue: c = "",
  onChange: d,
  className: o,
  onKeyDown: a,
  ...i
}, u) {
  const [h, b] = K(c ?? ""), y = s !== void 0, x = y ? s ?? "" : h, m = (p) => {
    const g = i2(p, l);
    return y || b(g), d?.(g), g;
  };
  return /* @__PURE__ */ r(
    "input",
    {
      ref: u,
      type: "text",
      "data-size": t,
      value: x,
      onChange: (p) => {
        m(p.target.value);
      },
      onKeyDown: (p) => {
        if (p.key === "Backspace") {
          const g = p.currentTarget.selectionStart ?? x.length, M = x[g - 1];
          if (M !== void 0 && !/\d/.test(M)) {
            p.preventDefault();
            const v = x.replace(/\D/g, "");
            m(i2(v.slice(0, -1), l));
          }
        }
        a?.(p);
      },
      className: [
        z0.mask,
        z0[t],
        n ? z0.invalid : null,
        o
      ].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...i
    }
  );
}), m9 = "_wrapper_b3q45_1", _9 = "_input_b3q45_8", g9 = "_invalid_b3q45_38", v9 = "_button_b3q45_45", k9 = "_up_b3q45_77", x9 = "_down_b3q45_82", y9 = "_xs_b3q45_87", b9 = "_sm_b3q45_93", M9 = "_md_b3q45_99", C9 = "_lg_b3q45_105", w9 = "_xl_b3q45_111", it = {
  wrapper: m9,
  input: _9,
  invalid: g9,
  button: v9,
  up: k9,
  down: x9,
  xs: y9,
  sm: b9,
  md: M9,
  lg: C9,
  xl: w9
};
function O0(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function z9(e) {
  let t = "", n = !1;
  for (const l of e)
    l >= "0" && l <= "9" ? t += l : l === "." && !n ? (n = !0, t += l) : l === "-" && t.length === 0 && (t += l);
  return t;
}
function H2(e, t, n) {
  return Math.min(n ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function L9(e, t, n) {
  return t === void 0 ? e : t + Math.round((e - t) / n) * n;
}
function $9(e, t, n, l, s) {
  const d = O0(e) ?? n ?? 0;
  let o;
  return n === void 0 ? o = d + t * s : t > 0 ? o = n + Math.ceil((d - n + 1e-9) / s) * s : o = n + Math.floor((d - n - 1e-9) / s) * s, H2(o, n, l);
}
const N_ = R1(
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
    step: u = 1,
    incrementLabel: h = "Increment",
    decrementLabel: b = "Decrement",
    onBlur: y,
    onKeyDown: x,
    ...m
  }, k) {
    const [f, p] = K(
      d != null ? String(d) : ""
    ), g = c !== void 0, M = g ? c == null ? "" : String(c) : f, v = (O) => {
      g || p(O), o?.(O0(O));
    }, L = (O) => {
      g || p(String(O)), o?.(O);
    }, C = (O) => {
      s || L($9(M, O, a, i, u));
    }, z = (O) => {
      v(z9(O.target.value));
    }, A = (O) => {
      O.key === "ArrowUp" ? (O.preventDefault(), C(1)) : O.key === "ArrowDown" && (O.preventDefault(), C(-1)), x?.(O);
    }, S = (O) => {
      const w = O0(M);
      w === null ? (g || p(""), o?.(null)) : L(H2(L9(w, a, u), a, i)), y?.(O);
    };
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ $("div", { className: it.wrapper, "data-size": t, children: [
        /* @__PURE__ */ r(
          "input",
          {
            ref: k,
            type: "text",
            inputMode: "decimal",
            autoComplete: "off",
            value: M,
            disabled: s,
            onChange: z,
            onKeyDown: A,
            onBlur: S,
            className: [
              it.input,
              it[t],
              n ? it.invalid : null,
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
            className: [it.button, it.up].join(" "),
            "aria-label": h,
            disabled: s,
            onClick: () => C(1),
            children: /* @__PURE__ */ r(C1, { name: "chevron-up", size: 14 })
          }
        ),
        /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: [it.button, it.down].join(" "),
            "aria-label": b,
            disabled: s,
            onClick: () => C(-1),
            children: /* @__PURE__ */ r(C1, { name: "chevron-down", size: 14 })
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
}, N9 = [
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
function $e(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function A0(e) {
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
function S9({ r: e, g: t, b: n }) {
  const l = (s) => Math.round(s).toString(16).padStart(2, "0");
  return `#${l(e)}${l(t)}${l(n)}`;
}
function O9({ r: e, g: t, b: n }) {
  const l = e / 255, s = t / 255, c = n / 255, d = Math.max(l, s, c), o = Math.min(l, s, c), a = d - o;
  let i = 0;
  return a !== 0 && (d === l ? i = (s - c) / a % 6 : d === s ? i = (c - l) / a + 2 : i = (l - s) / a + 4, i *= 60, i < 0 && (i += 360)), {
    h: i,
    s: d === 0 ? 0 : a / d,
    v: d
  };
}
function At({ h: e, s: t, v: n }) {
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
function A9(e) {
  const t = A0(e);
  if (t) return t;
  const n = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*([\d.]+))?\s*\)$/i.exec(
    e.trim()
  );
  return n ? {
    r: $e(Number(n[1]), 0, 255),
    g: $e(Number(n[2]), 0, 255),
    b: $e(Number(n[3]), 0, 255),
    a: n[4] != null ? $e(Number(n[4]), 0, 1) : 1
  } : null;
}
function d2({ r: e, g: t, b: n, a: l }) {
  return l >= 1 ? `rgb(${e}, ${t}, ${n})` : `rgba(${e}, ${t}, ${n}, ${Math.round(l * 100) / 100})`;
}
const S_ = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: n = !0,
  showPalette: l = !0,
  palette: s = N9,
  showButton: c = !1,
  showArrow: d = !0,
  disabled: o = !1,
  invalid: a = !1,
  placeholder: i = "",
  size: u = "md",
  tabIndex: h = 0,
  className: b,
  onChange: y,
  onValueChange: x,
  onOpen: m,
  onClose: k
}) => {
  const f = G(null), p = G(null), g = G(null), M = G(null), v = G(null), L = q1(), C = G(null), z = v1(
    () => A9(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [A, S] = K(!1), [O, w] = K(null), _ = O ?? z, N = v1(() => O9(_), [_]), V = q(
    (W) => {
      const H = d2(W);
      y?.(H), x?.(H);
    },
    [y, x]
  ), T = q(
    (W, H) => {
      w(W), H && !c && V(W);
    },
    [c, V]
  ), j = q(() => {
    S(!1), w(null), k?.(), p.current?.focus();
  }, [k]), D = q(() => {
    o || (w(z), S(!0), m?.());
  }, [o, z, m]), Y = q(() => {
    A ? j() : D();
  }, [A, j, D]), r1 = q(
    (W, H) => {
      const P = g.current;
      if (!P) return N;
      const Q = P.getBoundingClientRect(), u1 = $e((W - Q.left) / Q.width, 0, 1), J = $e(1 - (H - Q.top) / Q.height, 0, 1);
      return { h: N.h, s: u1, v: J };
    },
    [N]
  ), n1 = q(
    (W, H) => {
      if (!H) return 0;
      const P = H.getBoundingClientRect();
      return $e((W - P.left) / P.width, 0, 1);
    },
    []
  ), U = (W) => {
    if (o) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), C.current = "sat";
    const H = r1(W.clientX, W.clientY);
    T({ ...At(H), a: _.a }, !0);
  }, m1 = (W) => {
    if (C.current !== "sat") return;
    W.preventDefault();
    const H = r1(W.clientX, W.clientY);
    T({ ...At(H), a: _.a }, !0);
  }, d1 = (W) => {
    if (o) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), C.current = "hue";
    const H = n1(W.clientX, M.current);
    T(
      { ...At({ ...N, h: H * 360 }), a: _.a },
      !0
    );
  }, l1 = (W) => {
    if (C.current !== "hue") return;
    W.preventDefault();
    const H = n1(W.clientX, M.current);
    T(
      { ...At({ ...N, h: H * 360 }), a: _.a },
      !0
    );
  }, F = (W) => {
    if (o) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), C.current = "alpha";
    const H = n1(W.clientX, v.current);
    T({ ..._, a: H }, !0);
  }, c1 = (W) => {
    if (C.current !== "alpha") return;
    W.preventDefault();
    const H = n1(W.clientX, v.current);
    T({ ..._, a: H }, !0);
  }, t1 = () => {
    C.current = null;
  }, o1 = q(
    (W, H) => {
      const P = {
        h: N.h,
        s: $e(N.s + W, 0, 1),
        v: $e(N.v + H, 0, 1)
      };
      T({ ...At(P), a: _.a }, !0);
    },
    [N, _.a, T]
  ), f1 = q(
    (W) => {
      const H = (N.h + W + 360) % 360;
      T({ ...At({ ...N, h: H }), a: _.a }, !0);
    },
    [N, _.a, T]
  ), y1 = q(
    (W) => {
      T({ ..._, a: $e(_.a + W, 0, 1) }, !0);
    },
    [_, T]
  ), N1 = (W) => {
    switch (W.key) {
      case "ArrowLeft":
        W.preventDefault(), o1(-0.05, 0);
        break;
      case "ArrowRight":
        W.preventDefault(), o1(0.05, 0);
        break;
      case "ArrowUp":
        W.preventDefault(), o1(0, 0.05);
        break;
      case "ArrowDown":
        W.preventDefault(), o1(0, -0.05);
        break;
      case "Escape":
        W.preventDefault(), j();
        break;
    }
  }, D1 = (W, H) => {
    switch (W.key) {
      case "ArrowLeft":
        W.preventDefault(), H === "hue" ? f1(-6) : y1(-0.05);
        break;
      case "ArrowRight":
        W.preventDefault(), H === "hue" ? f1(6) : y1(0.05);
        break;
      case "Escape":
        W.preventDefault(), j();
        break;
    }
  }, M1 = (W, H) => {
    if (W === "hex") {
      const J = A0(H);
      J && T({ ...J, a: _.a }, !0);
      return;
    }
    const P = H.replace(/[^\d.]/g, ""), Q = Number.parseFloat(P);
    if (Number.isNaN(Q)) return;
    if (W === "a") {
      const J = P.includes(".") ? $e(Q, 0, 1) : $e(Q / 100, 0, 1);
      T({ ..._, a: J }, !0);
      return;
    }
    const u1 = { r: 255, g: 255, b: 255 };
    T(
      { ..._, [W]: $e(Q, 0, u1[W]) },
      !0
    );
  }, V1 = () => {
    O && (V(O), w(null), S(!1), k?.(), p.current?.focus());
  };
  g1(() => {
    if (!A) return;
    const W = (H) => {
      f.current && !f.current.contains(H.target) && j();
    };
    return document.addEventListener("mousedown", W), () => document.removeEventListener("mousedown", W);
  }, [A, j]), g1(() => {
    if (!A) return;
    const W = (H) => {
      H.key === "Escape" && j();
    };
    return document.addEventListener("keydown", W), () => document.removeEventListener("keydown", W);
  }, [A, j]);
  const $1 = u === "xs" ? z1["dx-colorpicker-trigger-xs"] : u === "sm" ? z1["dx-colorpicker-trigger-sm"] : u === "lg" ? z1["dx-colorpicker-trigger-lg"] : u === "xl" ? z1["dx-colorpicker-trigger-xl"] : z1["dx-colorpicker-trigger"], re = d2(_), le = S9(_), B1 = { x: N.s * 100, y: (1 - N.v) * 100 }, je = N.h / 360 * 100, oe = _.a * 100, Me = /* @__PURE__ */ $("div", { className: z1["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ r(
      "div",
      {
        ref: g,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(N.s * 100),
        "aria-valuetext": `Saturation ${Math.round(N.s * 100)}%, value ${Math.round(N.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : h,
        className: z1["dx-saturation-picker"],
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${N.h}, 100%, 50%)`
        },
        onKeyDown: N1,
        onPointerDown: U,
        onPointerMove: m1,
        onPointerUp: t1,
        children: /* @__PURE__ */ r(
          "span",
          {
            className: z1["dx-saturation-indicator"],
            style: { left: `${B1.x}%`, top: `${B1.y}%` },
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
        tabIndex: o ? -1 : h,
        className: z1["dx-hue-picker"],
        onKeyDown: (W) => D1(W, "hue"),
        onPointerDown: d1,
        onPointerMove: l1,
        onPointerUp: t1,
        children: /* @__PURE__ */ r(
          "span",
          {
            className: z1["dx-hue-indicator"],
            style: { left: `${je}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    t && /* @__PURE__ */ r(
      "div",
      {
        ref: v,
        role: "slider",
        "aria-label": "Alpha",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(oe),
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : h,
        className: z1["dx-alpha-picker"],
        style: {
          background: `repeating-conic-gradient(var(--dx-border-color) 0% 25%, var(--dx-surface-color) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${N.h}, 100%, 50%))`
        },
        onKeyDown: (W) => D1(W, "alpha"),
        onPointerDown: F,
        onPointerMove: c1,
        onPointerUp: t1,
        children: /* @__PURE__ */ r(
          "span",
          {
            className: z1["dx-alpha-indicator"],
            style: { left: `${oe}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    n && /* @__PURE__ */ $("div", { className: z1["dx-colorpicker-rgba"], children: [
      /* @__PURE__ */ $("label", { className: z1["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ r("span", { className: z1["dx-colorpicker-rgba-label"], children: "Hex" }),
        /* @__PURE__ */ r(
          "input",
          {
            type: "text",
            maxLength: 7,
            className: z1["dx-colorpicker-rgba-input"],
            "aria-label": "Hex",
            value: le,
            onChange: (W) => M1("hex", W.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ $("label", { className: z1["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ r("span", { className: z1["dx-colorpicker-rgba-label"], children: "R" }),
        /* @__PURE__ */ r(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: z1["dx-colorpicker-rgba-input"],
            "aria-label": "Red",
            value: _.r,
            onChange: (W) => M1("r", W.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ $("label", { className: z1["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ r("span", { className: z1["dx-colorpicker-rgba-label"], children: "G" }),
        /* @__PURE__ */ r(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: z1["dx-colorpicker-rgba-input"],
            "aria-label": "Green",
            value: _.g,
            onChange: (W) => M1("g", W.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ $("label", { className: z1["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ r("span", { className: z1["dx-colorpicker-rgba-label"], children: "B" }),
        /* @__PURE__ */ r(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: z1["dx-colorpicker-rgba-input"],
            "aria-label": "Blue",
            value: _.b,
            onChange: (W) => M1("b", W.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ $("label", { className: z1["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ r("span", { className: z1["dx-colorpicker-rgba-label"], children: "A" }),
        /* @__PURE__ */ r(
          "input",
          {
            type: "text",
            inputMode: "decimal",
            maxLength: 4,
            className: z1["dx-colorpicker-rgba-input"],
            "aria-label": "Alpha",
            value: Math.round(_.a * 100),
            onChange: (W) => M1("a", W.target.value)
          }
        )
      ] })
    ] }),
    l && /* @__PURE__ */ r("div", { className: z1["dx-colorpicker-palette"], children: s.map((W) => /* @__PURE__ */ r(
      "button",
      {
        type: "button",
        className: z1["dx-colorpicker-swatch"],
        "aria-label": W,
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : h,
        style: { backgroundColor: W },
        onClick: () => {
          const H = A0(W);
          c ? T({ ...H, a: _.a }, !1) : (w(null), V({ ...H, a: _.a }), S(!1), k?.(), p.current?.focus());
        }
      },
      W
    )) }),
    c && /* @__PURE__ */ r("div", { className: z1["dx-colorpicker-footer"], children: /* @__PURE__ */ r(
      "button",
      {
        type: "button",
        className: z1["dx-colorpicker-ok"],
        onClick: V1,
        children: "OK"
      }
    ) })
  ] });
  return /* @__PURE__ */ $(
    "div",
    {
      ref: f,
      className: [
        z1["dx-colorpicker"],
        A ? z1["dx-colorpicker-open"] : null,
        a ? z1["dx-colorpicker-invalid"] : null,
        b
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ $(
          "button",
          {
            ref: p,
            type: "button",
            className: [z1["dx-colorpicker-trigger"], $1].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": A,
            "aria-controls": L,
            "aria-label": "Pick a color",
            "aria-disabled": o || void 0,
            disabled: o,
            tabIndex: h,
            onClick: Y,
            onKeyDown: (W) => {
              W.key === "Escape" && A && (W.preventDefault(), j());
            },
            children: [
              /* @__PURE__ */ r(
                "span",
                {
                  className: z1["dx-colorpicker-value"],
                  style: { backgroundColor: re },
                  "aria-hidden": "true"
                }
              ),
              i && /* @__PURE__ */ r("span", { className: z1["dx-colorpicker-text"], children: i }),
              d && /* @__PURE__ */ r("span", { className: z1["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ r(C1, { name: "chevron-down", size: 14 }) })
            ]
          }
        ),
        A && /* @__PURE__ */ r(
          "div",
          {
            id: L,
            role: "dialog",
            "aria-label": "Choose color",
            className: z1["dx-colorpicker-popup"],
            children: Me
          }
        )
      ]
    }
  );
}, S1 = {
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
}, H9 = 42;
function Ne(e) {
  return String(e).padStart(2, "0");
}
function be(e) {
  return `${e.year}-${Ne(e.month)}-${Ne(e.day)}`;
}
function j9(e, t) {
  const n = be(e);
  return t ? `${n} ${Ne(e.hour)}:${Ne(e.minute)}:${Ne(e.second)}` : n;
}
function H0(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!t) return null;
  const n = Number(t[1]), l = Number(t[2]), s = Number(t[3]), c = t[4] != null ? Number(t[4]) : 0, d = t[5] != null ? Number(t[5]) : 0, o = t[6] != null ? Number(t[6]) : 0;
  if (l < 1 || l > 12 || s < 1 || s > 31) return null;
  const a = new Date(n, l - 1, s, c, d, o);
  return a.getFullYear() !== n || a.getMonth() !== l - 1 || a.getDate() !== s ? null : { year: n, month: l, day: s, hour: c, minute: d, second: o };
}
function dt() {
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
function nt(e, t) {
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
function u2(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const h2 = {
  yyyy: (e) => String(e.year).padStart(4, "0"),
  yy: (e) => Ne(e.year % 100),
  MM: (e) => Ne(e.month),
  M: (e) => String(e.month),
  dd: (e) => Ne(e.day),
  d: (e) => String(e.day),
  HH: (e) => Ne(e.hour),
  H: (e) => String(e.hour),
  mm: (e) => Ne(e.minute),
  m: (e) => String(e.minute),
  ss: (e) => Ne(e.second),
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
], T9 = ["y", "M", "d", "H", "m", "s"];
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
        s += h2[a](e, l, n), c += a.length, d = !0;
        break;
      }
    if (d) continue;
    const o = t[c];
    if (T9.includes(o)) {
      s += h2[o](e, l, n), c += 1;
      continue;
    }
    s += o, c += 1;
  }
  return s;
}
const D9 = [
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
function E9(e, t) {
  const n = {};
  let l = 0, s = 0;
  for (; s < t.length; ) {
    let o = null;
    for (const a of D9)
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
function Gt(e, t) {
  const n = H0(e);
  return n || E9(e, t);
}
function q9(e, t, n) {
  return t && be(e) < be(t) ? t : n && be(e) > be(n) ? n : e;
}
const I9 = ["hour", "minute", "second"];
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
const O_ = R1(
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
    allowClear: u = !1,
    inline: h = !1,
    disabledDates: b,
    locale: y = "en-US",
    onChange: x,
    onValueChange: m,
    onOpen: k,
    onClose: f,
    disabled: p,
    readOnly: g,
    placeholder: M,
    ariaLabel: v,
    triggerLabel: L,
    clearLabel: C,
    tabIndex: z,
    className: A,
    onBlur: S,
    onKeyDown: O,
    ...w
  }, _) {
    const N = G(null), V = G(null), T = G(null), j = G(null), D = q1(), Y = l !== void 0, [r1, n1] = K(
      () => s != null ? u0(
        Gt(s, c) ?? dt(),
        c,
        y
      ) : ""
    ), [U, m1] = K(!1), [d1, l1] = K(null), [F, c1] = K(() => {
      const B = l !== void 0 ? l ?? "" : s ?? "";
      if (B) {
        const a1 = Gt(B, c);
        if (a1) return a1;
      }
      return dt();
    }), t1 = v1(() => d ? H0(d) : null, [d]), o1 = v1(() => o ? H0(o) : null, [o]), f1 = v1(
      () => new Set(b ?? []),
      [b]
    ), y1 = v1(() => {
      const B = Y ? l ?? "" : r1;
      return B ? Gt(B, c) : null;
    }, [l, r1, Y, c]), N1 = q(
      (B) => {
        const a1 = be(B);
        return !!(f1.has(a1) || t1 && a1 < be(t1) || o1 && a1 > be(o1));
      },
      [f1, t1, o1]
    ), D1 = q(
      (B) => {
        if (!N1(B)) return B;
        for (let a1 = 1; a1 <= 366; a1 += 1) {
          const j1 = nt(B, a1);
          if (!N1(j1)) return j1;
          const I1 = nt(B, -a1);
          if (!N1(I1)) return I1;
        }
        return B;
      },
      [N1]
    ), M1 = q(
      (B) => {
        Y || n1(B ? u0(B, c, y) : "");
        const a1 = B ? j9(B, a) : "";
        x?.(a1), m?.(a1);
      },
      [Y, c, y, a, x, m]
    ), V1 = q(
      (B) => {
        V.current = B, typeof _ == "function" ? _(B) : _ && (_.current = B);
      },
      [_]
    ), $1 = q(() => {
      m1(!1), l1(null), f?.(), h || T.current?.focus();
    }, [h, f]), re = q(() => {
      if (p) return;
      const B = y1 ?? dt();
      l1(B), c1(D1(B)), m1(!0), k?.();
    }, [p, y1, D1, k]), le = q(() => {
      U ? $1() : re();
    }, [U, $1, re]), B1 = q((B) => {
      j.current?.querySelector(
        `[data-date="${be(B)}"]`
      )?.focus();
    }, []), je = q(
      (B) => {
        if (N1(B)) return;
        const a1 = d1 ?? y1, I1 = {
          ...a ? {
            hour: a1?.hour ?? 0,
            minute: a1?.minute ?? 0,
            second: a1?.second ?? 0
          } : { hour: 0, minute: 0, second: 0 },
          year: B.year,
          month: B.month,
          day: B.day
        };
        l1(I1), a || (M1(I1), $1());
      },
      [N1, d1, y1, a, M1, $1]
    ), oe = q(
      (B, a1) => {
        l1((j1) => {
          const I1 = j1 ?? y1 ?? dt(), Ve = Math.min(B === "hour" ? 23 : 59, Math.max(0, I1[B] + a1));
          return { ...I1, [B]: Ve };
        });
      },
      [y1]
    ), Me = q(
      (B, a1) => {
        const j1 = a1.replace(/\D/g, ""), I1 = j1 === "" ? 0 : Number(j1), se = B === "hour" ? 23 : 59;
        l1((Ve) => ({ ...Ve ?? y1 ?? dt(), [B]: Math.min(se, I1) }));
      },
      [y1]
    ), W = q(() => {
      d1 && (M1(d1), $1());
    }, [d1, M1, $1]), H = q(() => {
      if (U) return;
      const B = Gt(r1, c);
      M1(B ? q9(B, t1, o1) : null);
    }, [U, r1, c, t1, o1, M1]), P = (B) => {
      const a1 = B.target.value;
      Y || n1(a1), U && l1(null);
    }, Q = (B) => {
      B.key === "Enter" ? (B.preventDefault(), U ? d1 && (M1(d1), $1()) : H()) : B.key === "Escape" ? U && (B.preventDefault(), $1()) : B.key === "ArrowDown" && !U ? (B.preventDefault(), re()) : B.key === "Tab" && U && m1(!1), O?.(B);
    }, u1 = (B) => {
      H(), S?.(B);
    }, J = (B) => {
      let a1 = null;
      switch (B.key) {
        case "ArrowLeft":
          a1 = nt(F, -1), B.preventDefault();
          break;
        case "ArrowRight":
          a1 = nt(F, 1), B.preventDefault();
          break;
        case "ArrowUp":
          a1 = nt(F, -7), B.preventDefault();
          break;
        case "ArrowDown":
          a1 = nt(F, 7), B.preventDefault();
          break;
        case "Home":
          a1 = nt(F, -u2(F)), B.preventDefault();
          break;
        case "End":
          a1 = nt(F, 6 - u2(F)), B.preventDefault();
          break;
        case "PageUp":
          a1 = d0(F, B.shiftKey ? -12 : -1), B.preventDefault();
          break;
        case "PageDown":
          a1 = d0(F, B.shiftKey ? 12 : 1), B.preventDefault();
          break;
        case "Enter":
        case " ":
          B.preventDefault(), je(F);
          break;
        case "Escape":
          B.preventDefault(), $1();
          break;
        case "Tab":
          m1(!1);
          break;
      }
      if (a1) {
        const j1 = D1(a1);
        c1(j1), setTimeout(() => B1(j1), 0);
      }
    };
    g1(() => {
      if (!U) return;
      const B = (a1) => {
        N.current && !N.current.contains(a1.target) && $1();
      };
      return document.addEventListener("mousedown", B), () => document.removeEventListener("mousedown", B);
    }, [U, $1]), g1(() => {
      if (!U) return;
      const B = (a1) => {
        a1.key === "Escape" && $1();
      };
      return document.addEventListener("keydown", B), () => document.removeEventListener("keydown", B);
    }, [U, $1]);
    const k1 = () => {
      Y || n1(""), x?.(""), m?.(""), V.current?.focus();
    }, O1 = U && d1 ? u0(d1, c, y) : Y ? l ? u0(
      Gt(l, c) ?? dt(),
      c,
      y
    ) : "" : r1, E1 = Y ? !!l : r1.length > 0, G1 = h || U, ue = { year: F.year, month: F.month }, pt = new Date(ue.year, ue.month - 1, 1).getDay(), X = {
      year: ue.year,
      month: ue.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, L1 = [];
    for (let B = 0; B < H9; B += 1)
      L1.push(nt(X, B - pt));
    const ee = d1 ? be(d1) : y1 ? be(y1) : null, Se = be(dt()), Ce = `${ue.year}-${Ne(ue.month)}`, w1 = v1(
      () => new Intl.DateTimeFormat(y, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      [y]
    ), F1 = new Intl.DateTimeFormat(y, {
      month: "long",
      year: "numeric"
    }).format(new Date(ue.year, ue.month - 1, 1)), ae = Array.from(
      { length: 7 },
      (B, a1) => new Intl.DateTimeFormat(y, { weekday: "short" }).format(
        new Date(2021, 0, 3 + a1)
      )
    ), K1 = t === "xs" ? S1["dx-datepicker-input--xs"] : t === "sm" ? S1["dx-datepicker-input--sm"] : t === "lg" ? S1["dx-datepicker-input--lg"] : t === "xl" ? S1["dx-datepicker-input--xl"] : S1["dx-datepicker-input--md"], Ge = /* @__PURE__ */ $(
      "div",
      {
        className: S1["dx-datepicker-calendar"],
        "aria-label": v ?? "Date picker",
        children: [
          /* @__PURE__ */ $("div", { className: S1["dx-datepicker-header"], children: [
            /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                className: S1["dx-datepicker-nav"],
                "aria-label": "Previous month",
                onClick: () => {
                  const B = D1(d0(F, -1));
                  c1(B), setTimeout(() => B1(B), 0);
                },
                children: /* @__PURE__ */ r(C1, { name: "chevron-left", size: 16 })
              }
            ),
            /* @__PURE__ */ r("span", { className: S1["dx-datepicker-title"], children: F1 }),
            /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                className: S1["dx-datepicker-nav"],
                "aria-label": "Next month",
                onClick: () => {
                  const B = D1(d0(F, 1));
                  c1(B), setTimeout(() => B1(B), 0);
                },
                children: /* @__PURE__ */ r(C1, { name: "chevron-right", size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ $(
            "div",
            {
              ref: j,
              role: "grid",
              className: S1["dx-datepicker-grid"],
              onKeyDown: J,
              children: [
                /* @__PURE__ */ r("div", { role: "row", className: S1["dx-datepicker-week-row"], children: ae.map((B) => /* @__PURE__ */ r(
                  "div",
                  {
                    role: "columnheader",
                    className: S1["dx-datepicker-weekday"],
                    children: B
                  },
                  B
                )) }),
                Array.from({ length: 6 }, (B, a1) => /* @__PURE__ */ r(
                  "div",
                  {
                    role: "row",
                    className: S1["dx-datepicker-row"],
                    children: L1.slice(a1 * 7, a1 * 7 + 7).map((j1) => {
                      const I1 = be(j1), se = N1(j1), Ve = I1.startsWith(Ce);
                      return /* @__PURE__ */ r(
                        "button",
                        {
                          type: "button",
                          role: "gridcell",
                          "data-date": I1,
                          tabIndex: I1 === be(F) ? 0 : -1,
                          "aria-selected": I1 === ee || void 0,
                          "aria-disabled": se || void 0,
                          "aria-label": w1.format(
                            new Date(j1.year, j1.month - 1, j1.day)
                          ),
                          className: [
                            S1["dx-datepicker-day"],
                            Ve ? null : S1["dx-datepicker-day--outside"],
                            I1 === Se ? S1["dx-datepicker-day--today"] : null,
                            I1 === ee ? S1["dx-datepicker-day--selected"] : null,
                            se ? S1["dx-datepicker-day--disabled"] : null
                          ].filter(Boolean).join(" "),
                          onClick: () => je(j1),
                          onFocus: () => c1(j1),
                          children: j1.day
                        },
                        I1
                      );
                    })
                  },
                  a1
                ))
              ]
            }
          ),
          a && /* @__PURE__ */ $("div", { className: S1["dx-datepicker-time"], children: [
            I9.map((B) => /* @__PURE__ */ $("label", { className: S1["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ r("span", { className: S1["dx-datepicker-time-label"], children: h0(B) }),
              /* @__PURE__ */ $("div", { className: S1["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ r(
                  "input",
                  {
                    className: S1["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": h0(B),
                    value: Ne(
                      (d1 ?? y1 ?? dt())[B]
                    ),
                    onChange: (a1) => Me(B, a1.target.value),
                    onKeyDown: (a1) => {
                      a1.key === "ArrowUp" ? (a1.preventDefault(), oe(B, 1)) : a1.key === "ArrowDown" ? (a1.preventDefault(), oe(B, -1)) : a1.key === "Enter" && (a1.preventDefault(), W());
                    }
                  }
                ),
                /* @__PURE__ */ $("span", { className: S1["dx-datepicker-time-buttons"], children: [
                  /* @__PURE__ */ r(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Increase ${h0(B).toLowerCase()}`,
                      onClick: () => oe(B, 1),
                      children: /* @__PURE__ */ r(C1, { name: "chevron-up", size: 11 })
                    }
                  ),
                  /* @__PURE__ */ r(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Decrease ${h0(B).toLowerCase()}`,
                      onClick: () => oe(B, -1),
                      children: /* @__PURE__ */ r(C1, { name: "chevron-down", size: 11 })
                    }
                  )
                ] })
              ] })
            ] }, B)),
            /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                className: S1["dx-datepicker-ok"],
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
        ref: N,
        className: [
          S1["dx-datepicker"],
          h ? S1["dx-datepicker-inline"] : null,
          A
        ].filter(Boolean).join(" "),
        children: [
          !h && /* @__PURE__ */ $(b1, { children: [
            /* @__PURE__ */ r(
              "input",
              {
                ref: V1,
                type: "text",
                autoComplete: "off",
                value: O1,
                disabled: p,
                readOnly: g,
                placeholder: M,
                tabIndex: z,
                role: i ? void 0 : "combobox",
                "aria-label": v ?? "Date",
                "aria-haspopup": i ? void 0 : "dialog",
                "aria-expanded": i ? void 0 : G1,
                "aria-controls": i ? void 0 : D,
                "aria-invalid": n || void 0,
                className: [
                  S1["dx-datepicker-input"],
                  K1,
                  n ? S1["dx-datepicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: P,
                onKeyDown: Q,
                onBlur: u1,
                onClick: () => {
                  i || le();
                },
                ...w
              }
            ),
            u && !p && E1 && /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                className: [
                  S1["dx-datepicker-clear"],
                  i ? S1["dx-datepicker-clear--inset"] : null
                ].filter(Boolean).join(" "),
                "aria-label": C ?? "Clear",
                onClick: k1,
                children: /* @__PURE__ */ r(C1, { name: "close", size: 14 })
              }
            ),
            i && /* @__PURE__ */ r(
              "button",
              {
                ref: T,
                type: "button",
                className: [S1["dx-datepicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": L ?? "Open calendar",
                "aria-haspopup": "dialog",
                "aria-expanded": U,
                "aria-controls": D,
                disabled: p,
                onClick: le,
                children: /* @__PURE__ */ r(C1, { name: "calendar", size: 16 })
              }
            )
          ] }),
          G1 && /* @__PURE__ */ r(
            "div",
            {
              id: D,
              role: h ? void 0 : "dialog",
              className: h ? void 0 : S1["dx-datepicker-popup"],
              children: Ge
            }
          )
        ]
      }
    );
  }
), ut = {
  "dx-rating": "_dx-rating_yg52p_1",
  "dx-rating-item": "_dx-rating-item_yg52p_8",
  "dx-rating-item-filled": "_dx-rating-item-filled_yg52p_28",
  "dx-rating-icon-filled": "_dx-rating-icon-filled_yg52p_43",
  "dx-rating-icon-empty": "_dx-rating-icon-empty_yg52p_51",
  "dx-rating-clear": "_dx-rating-clear_yg52p_55",
  "dx-rating-readonly": "_dx-rating-readonly_yg52p_87",
  "dx-rating-disabled": "_dx-rating-disabled_yg52p_96"
}, A_ = ({
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
  onValueChange: u
}) => {
  const [h, b] = K(e), y = q(
    (p) => Math.min(t, Math.max(1, p)),
    [t]
  ), x = q(
    (p) => {
      i?.(p), u?.(p);
    },
    [i, u]
  ), m = q(
    (p) => {
      n || l || (x(p), b(p));
    },
    [n, l, x]
  ), k = (p) => {
    if (n || l) return;
    const g = h > 0 ? h : 1;
    switch (p.key) {
      case "ArrowRight":
      case "ArrowUp":
        p.preventDefault(), m(y(g + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        p.preventDefault(), m(y(g - 1));
        break;
      case "Home":
        p.preventDefault(), m(1);
        break;
      case "End":
        p.preventDefault(), m(t);
        break;
    }
  }, f = Array.from({ length: t }, (p, g) => g + 1);
  return /* @__PURE__ */ $(
    "div",
    {
      role: "radiogroup",
      "aria-label": s,
      "aria-readonly": n || void 0,
      className: [
        ut["dx-rating"],
        n ? ut["dx-rating-readonly"] : null,
        l ? ut["dx-rating-disabled"] : null,
        a
      ].filter(Boolean).join(" "),
      onKeyDown: k,
      children: [
        !n && !l && /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: ut["dx-rating-clear"],
            "aria-label": c,
            tabIndex: e === 0 ? o : -1,
            disabled: l,
            onClick: () => m(0),
            children: /* @__PURE__ */ r(C1, { name: "ban", size: 16 })
          }
        ),
        f.map((p) => {
          const g = p <= e, M = p === (e > 0 ? e : h);
          return /* @__PURE__ */ $(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": g,
              "aria-posinset": p,
              "aria-setsize": t,
              "aria-label": `${d} ${p}`,
              tabIndex: M ? o : -1,
              "aria-disabled": l || n || void 0,
              disabled: l || n,
              className: [
                ut["dx-rating-item"],
                g ? ut["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => m(p),
              onFocus: () => b(p),
              children: [
                /* @__PURE__ */ r(
                  "span",
                  {
                    className: ut["dx-rating-icon-filled"],
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ r(C1, { name: "star", size: 20 })
                  }
                ),
                /* @__PURE__ */ r("span", { className: ut["dx-rating-icon-empty"], "aria-hidden": "true", children: /* @__PURE__ */ r(C1, { name: "star-outline", size: 20 }) })
              ]
            },
            p
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
const H_ = ({
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
  minLabel: u = "Min",
  maxLabel: h = "Max",
  tabIndex: b = 0,
  className: y,
  onChange: x,
  onInput: m,
  onValueChange: k,
  onInputChange: f
}) => {
  const p = G(null), g = G(
    null
  ), [M, v] = K(null), L = M ?? e, C = v1(
    () => We(L, l, s),
    [L, l, s]
  ), z = v1(
    () => We(d ? t : C, l, s),
    [d, t, C, l, s]
  ), A = v1(
    () => We(d ? Math.max(n, z) : C, l, s),
    [d, n, z, C, l, s]
  ), S = q(
    (F) => {
      const c1 = s - l;
      return c1 <= 0 ? 0 : (We(F, l, s) - l) / c1 * 100;
    },
    [l, s]
  ), O = q(
    (F, c1) => {
      const t1 = p.current;
      if (!t1) return l;
      const o1 = t1.getBoundingClientRect();
      let f1;
      o === "vertical" ? f1 = 1 - (c1 - o1.top) / o1.height : f1 = (F - o1.left) / o1.width;
      const y1 = l + We(f1, 0, 1) * (s - l);
      return c > 0 ? We(Math.round(y1 / c) * c, l, s) : We(y1, l, s);
    },
    [l, s, c, o]
  ), w = q(
    (F) => {
      typeof F == "number" && v(F), x?.(F), k?.(F);
    },
    [x, k]
  ), _ = q(
    (F) => {
      typeof F == "number" && v(F), m?.(F), f?.(F);
    },
    [m, f]
  ), N = q(
    (F, c1, t1) => {
      const o1 = O(c1, t1);
      let f1;
      d ? F === "min" ? f1 = { min: Math.min(o1, A), max: A } : f1 = { min: z, max: Math.max(o1, z) } : f1 = o1, _(f1), g.current === null && w(f1);
    },
    [d, O, z, A, _, w]
  ), V = q(
    (F, c1) => {
      const t1 = (c > 0 ? c : 1) * c1;
      let o1;
      d ? F === "min" ? o1 = {
        min: We(z + t1, l, A),
        max: A
      } : o1 = {
        min: z,
        max: We(A + t1, z, s)
      } : o1 = We(C + t1, l, s), w(o1);
    },
    [d, c, l, s, z, A, C, w]
  ), T = (F, c1) => {
    if (!a)
      switch (c1.key) {
        case "ArrowLeft":
        case "ArrowDown":
          c1.preventDefault(), V(F, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          c1.preventDefault(), V(F, 1);
          break;
        case "Home":
          c1.preventDefault(), w(d ? F === "min" ? { min: l, max: A } : { min: z, max: z } : l);
          break;
        case "End":
          c1.preventDefault(), w(d ? F === "min" ? { min: A, max: A } : { min: z, max: s } : s);
          break;
      }
  }, j = (F, c1) => {
    a || (c1.preventDefault(), c1.currentTarget.focus(), typeof c1.currentTarget.setPointerCapture == "function" && c1.currentTarget.setPointerCapture(c1.pointerId), g.current = { key: F, pointerId: c1.pointerId }, N(F, c1.clientX, c1.clientY));
  }, D = (F) => {
    !g.current || g.current.pointerId !== F.pointerId || (F.preventDefault(), N(g.current.key, F.clientX, F.clientY));
  }, Y = (F) => {
    !g.current || g.current.pointerId !== F.pointerId || (g.current = null, F.preventDefault(), w(d ? { min: z, max: A } : C));
  }, [r1, n1] = K(null), U = S(z), m1 = S(A), d1 = d ? U : 0, l1 = m1;
  return /* @__PURE__ */ r(
    "div",
    {
      className: [
        yt["dx-slider"],
        o === "vertical" ? yt["dx-slider-vertical"] : null,
        a ? yt["dx-slider-disabled"] : null,
        y
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ $("div", { ref: p, className: yt["dx-slider-track"], children: [
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
            "aria-label": d ? u : i,
            "aria-disabled": a || void 0,
            tabIndex: a || d && r1 === "max" ? -1 : b,
            className: yt["dx-slider-handle"],
            style: o === "vertical" ? { bottom: `calc(${U}% - 8px)` } : { left: `calc(${U}% - 8px)` },
            onKeyDown: (F) => T("min", F),
            onPointerDown: (F) => j("min", F),
            onPointerMove: D,
            onPointerUp: Y,
            onFocus: () => n1("min")
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
            "aria-label": h,
            "aria-disabled": a || void 0,
            tabIndex: a || r1 === "min" ? -1 : b,
            className: yt["dx-slider-handle"],
            style: o === "vertical" ? { bottom: `calc(${m1}% - 8px)` } : { left: `calc(${m1}% - 8px)` },
            onKeyDown: (F) => T("max", F),
            onPointerDown: (F) => j("max", F),
            onPointerMove: D,
            onPointerUp: Y,
            onFocus: () => n1("max")
          }
        )
      ] })
    }
  );
}, W1 = {
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
}, P9 = "-10675199.02:48:05.4775808", R9 = "10675199.02:48:05.4775808", lt = 86400, ot = 3600, qe = 60, L0 = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, f2 = {
  days: lt,
  hours: ot,
  minutes: qe,
  seconds: 1
}, B9 = {
  day: lt,
  hour: ot,
  minute: qe,
  second: 1
};
function Ht(e) {
  return String(e).padStart(2, "0");
}
function n0(e) {
  const t = e.trim();
  if (!t) return null;
  let n = 1, l = t;
  l.startsWith("-") ? (n = -1, l = l.slice(1)) : l.startsWith("+") && (l = l.slice(1));
  const s = /^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(
    l
  );
  if (s) {
    if (!s.slice(1).some((h) => h != null)) return null;
    const o = s[1] != null ? Number(s[1]) : 0, a = s[2] != null ? Number(s[2]) : 0, i = s[3] != null ? Number(s[3]) : 0, u = s[4] != null ? Number(s[4]) : 0;
    return n * (o * lt + a * ot + i * qe + u);
  }
  const c = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(
    l
  );
  if (c) {
    const d = c[1] != null ? Number(c[1]) : 0, o = Number(c[2]), a = Number(c[3]), i = c[4] != null ? Number(c[4]) : 0, u = c[5] != null ? +`0.${c[5]}` : 0;
    return o > 23 || a > 59 || i > 59 ? null : n * (d * lt + o * ot + a * qe + i + u);
  }
  return null;
}
function F9(e) {
  return e.days * lt + e.hours * ot + e.minutes * qe + e.seconds;
}
function p2(e) {
  let t = Math.abs(e);
  const n = Math.floor(t / lt);
  t %= lt;
  const l = Math.floor(t / ot);
  t %= ot;
  const s = Math.floor(t / qe), c = Math.round(t % qe * 1e9) / 1e9;
  return { days: n, hours: l, minutes: s, seconds: c };
}
function j0(e, t) {
  const n = e < 0;
  let l = Math.abs(e);
  t === "minute" ? l = Math.round(l / qe) * qe : t === "hour" ? l = Math.round(l / ot) * ot : t === "day" && (l = Math.round(l / lt) * lt);
  let s = Math.round(l % qe);
  const c = s === 60 ? 1 : 0;
  s = s === 60 ? 0 : s;
  const d = Math.floor(l / qe) + c, o = d % 60, a = Math.floor(d / 60), i = a % 24, u = Math.floor(a / 24), h = n ? "-" : "", b = u > 0 ? `${u}.` : "";
  switch (t) {
    case "day":
      return `${h}${u} day${u === 1 ? "" : "s"}`;
    case "hour":
      return `${h}${b}${Ht(i)}`;
    case "minute":
      return `${h}${b}${Ht(i)}:${Ht(o)}`;
    default:
      return `${h}${b}${Ht(i)}:${Ht(o)}:${Ht(s)}`;
  }
}
function m2(e, t = "second") {
  const n = n0(e);
  return n === null ? "" : j0(n, t);
}
function $0(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const j_ = R1(
  function({
    size: t = "md",
    invalid: n = !1,
    value: l,
    defaultValue: s,
    min: c = P9,
    max: d = R9,
    step: o = "1",
    precision: a = "second",
    showDays: i = !0,
    showHours: u = !0,
    showMinutes: h = !0,
    showSeconds: b = !0,
    allowClear: y = !1,
    inline: x = !1,
    onChange: m,
    onValueChange: k,
    onOpen: f,
    onClose: p,
    disabled: g,
    placeholder: M,
    ariaLabel: v,
    triggerLabel: L,
    clearLabel: C,
    tabIndex: z,
    className: A,
    onBlur: S,
    onKeyDown: O,
    ...w
  }, _) {
    const N = G(null), V = G(null), T = G(null), j = q1(), D = l !== void 0, [Y, r1] = K(
      () => s != null ? m2(s, a) : ""
    ), [n1, U] = K(!1), [m1, d1] = K(null), [l1, F] = K(null), c1 = v1(
      () => n0(c) ?? -Number.MAX_SAFE_INTEGER,
      [c]
    ), t1 = v1(
      () => n0(d) ?? Number.MAX_SAFE_INTEGER,
      [d]
    ), o1 = v1(() => {
      const X = Number.parseFloat(o);
      return Number.isNaN(X) || X <= 0 ? 1 : X;
    }, [o]), f1 = v1(() => {
      const X = D ? l ?? "" : Y;
      return X ? n0(X) : null;
    }, [l, Y, D]), y1 = q(
      (X) => {
        const L1 = X === null ? "" : j0(X, a);
        D || r1(L1), m?.(L1), k?.(L1);
      },
      [D, a, m, k]
    ), N1 = q(
      (X) => {
        X && m1 !== null && y1(m1), U(!1), d1(null), F(null), p?.(), x || T.current?.focus();
      },
      [x, m1, y1, p]
    ), D1 = q(() => {
      g || (d1(f1 ?? 0), U(!0), f?.());
    }, [g, f1, f]), M1 = q(() => {
      n1 ? N1(!1) : D1();
    }, [n1, N1, D1]), V1 = q(
      (X, L1) => {
        d1((ee) => {
          const Ce = (ee ?? f1 ?? 0) + L1 * o1 * f2[X];
          return $0(Ce, c1, t1);
        });
      },
      [f1, o1, c1, t1]
    ), $1 = q(
      (X) => {
        const L1 = l1?.[X];
        if (L1 == null) return;
        const ee = Number.parseFloat(L1), Se = Number.isNaN(ee) ? 0 : ee;
        d1((Ce) => {
          const w1 = Ce ?? f1 ?? 0, F1 = p2(w1);
          F1[X] = Se;
          const K1 = (w1 < 0 ? -1 : 1) * F9(F1);
          return $0(K1, c1, t1);
        }), F(null);
      },
      [l1, f1, c1, t1]
    ), re = (X, L1) => {
      F((ee) => ({ ...ee ?? {}, [X]: L1 }));
    }, le = (X, L1) => {
      switch (L1.key) {
        case "ArrowUp":
          L1.preventDefault(), $1(X), V1(X, 1);
          break;
        case "ArrowDown":
          L1.preventDefault(), $1(X), V1(X, -1);
          break;
        case "Home":
          L1.preventDefault(), $1(X), d1(c1);
          break;
        case "End":
          L1.preventDefault(), $1(X), d1(t1);
          break;
        case "Enter":
          L1.preventDefault(), $1(X), N1(!0);
          break;
      }
    }, B1 = q(() => {
      if (n1) return;
      const X = n0(Y);
      y1(X !== null ? $0(X, c1, t1) : null);
    }, [n1, Y, c1, t1, y1]), je = (X) => {
      D || r1(X.target.value);
    }, oe = (X) => {
      X.key === "Enter" ? (X.preventDefault(), n1 ? N1(!0) : B1()) : X.key === "Escape" && n1 ? (X.preventDefault(), N1(!1)) : X.key === "ArrowDown" && !n1 ? (X.preventDefault(), D1()) : X.key === "Tab" && n1 && U(!1), O?.(X);
    }, Me = (X) => {
      B1(), S?.(X);
    }, W = () => {
      D || r1(""), m?.(""), k?.(""), V.current?.focus();
    };
    g1(() => {
      if (!n1) return;
      const X = (L1) => {
        N.current && !N.current.contains(L1.target) && N1(!1);
      };
      return document.addEventListener("mousedown", X), () => document.removeEventListener("mousedown", X);
    }, [n1, N1]), g1(() => {
      if (!n1) return;
      const X = (L1) => {
        L1.key === "Escape" && N1(!1);
      };
      return document.addEventListener("keydown", X), () => document.removeEventListener("keydown", X);
    }, [n1, N1]), g1(() => {
      if (x && m1 !== null) {
        const X = f1;
        (X === null || Math.abs(m1 - X) > 1e-9) && y1(m1);
      }
    }, [x, m1, f1, y1]);
    const H = q(
      (X) => {
        V.current = X, typeof _ == "function" ? _(X) : _ && (_.current = X);
      },
      [_]
    ), P = D ? l ? m2(l, a) : "" : Y, Q = D ? !!l : Y.length > 0, u1 = x || n1, J = m1 ?? f1 ?? 0, k1 = p2(J), O1 = B9[a], G1 = ["days", "hours", "minutes", "seconds"].filter(
      (X) => f2[X] >= O1 && (X === "days" ? i : X === "hours" ? u : X === "minutes" ? h : b)
    ), ue = t === "xs" ? W1["dx-timespanpicker-input--xs"] : t === "sm" ? W1["dx-timespanpicker-input--sm"] : t === "lg" ? W1["dx-timespanpicker-input--lg"] : t === "xl" ? W1["dx-timespanpicker-input--xl"] : W1["dx-timespanpicker-input--md"], pt = /* @__PURE__ */ $("div", { className: W1["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ r("div", { className: W1["dx-timespanpicker-preview"], "aria-live": "polite", children: j0(J, a) }),
      /* @__PURE__ */ r("div", { className: W1["dx-timespanpicker-units"], children: G1.map((X) => /* @__PURE__ */ $("label", { className: W1["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ r("span", { className: W1["dx-timespanpicker-unit-label"], children: L0[X] }),
        /* @__PURE__ */ $("span", { className: W1["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ r(
            "input",
            {
              className: W1["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: l1?.[X] ?? String(k1[X]),
              onChange: (L1) => re(X, L1.target.value),
              onKeyDown: (L1) => le(X, L1),
              onBlur: () => $1(X)
            }
          ),
          /* @__PURE__ */ $("span", { className: W1["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${L0[X].toLowerCase()}`,
                onClick: () => {
                  $1(X), V1(X, 1);
                },
                children: /* @__PURE__ */ r(C1, { name: "chevron-up", size: 11 })
              }
            ),
            /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${L0[X].toLowerCase()}`,
                onClick: () => {
                  $1(X), V1(X, -1);
                },
                children: /* @__PURE__ */ r(C1, { name: "chevron-down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, X)) }),
      /* @__PURE__ */ r("div", { className: W1["dx-timespanpicker-footer"], children: /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          className: W1["dx-timespanpicker-ok"],
          onClick: () => N1(!0),
          children: "OK"
        }
      ) })
    ] });
    return /* @__PURE__ */ $(
      "div",
      {
        ref: N,
        className: [
          W1["dx-timespanpicker"],
          x ? W1["dx-timespanpicker-inline"] : null,
          A
        ].filter(Boolean).join(" "),
        children: [
          !x && /* @__PURE__ */ $(b1, { children: [
            /* @__PURE__ */ r(
              "input",
              {
                ref: H,
                type: "text",
                autoComplete: "off",
                value: P,
                disabled: g,
                placeholder: M,
                tabIndex: z,
                role: "combobox",
                "aria-label": v ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": n1,
                "aria-controls": j,
                "aria-invalid": n || void 0,
                className: [
                  W1["dx-timespanpicker-input"],
                  ue,
                  n ? W1["dx-timespanpicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: je,
                onKeyDown: oe,
                onBlur: Me,
                ...w
              }
            ),
            y && !g && Q && /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                className: W1["dx-timespanpicker-clear"],
                "aria-label": C ?? "Clear",
                onClick: W,
                children: /* @__PURE__ */ r(C1, { name: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ r(
              "button",
              {
                ref: T,
                type: "button",
                className: [W1["dx-timespanpicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": L ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": n1,
                "aria-controls": j,
                disabled: g,
                onClick: M1,
                children: /* @__PURE__ */ r(C1, { name: "clock", size: 16 })
              }
            )
          ] }),
          u1 && /* @__PURE__ */ r(
            "div",
            {
              id: j,
              role: x ? void 0 : "dialog",
              "aria-label": v ?? "Time span picker",
              className: x ? void 0 : W1["dx-timespanpicker-popup"],
              children: pt
            }
          )
        ]
      }
    );
  }
), K9 = "_wrapper_1rhh5_1", W9 = "_cells_1rhh5_8", Z9 = "_cell_1rhh5_8", U9 = "_invalid_1rhh5_63", X9 = "_live_1rhh5_73", bt = {
  wrapper: K9,
  cells: W9,
  cell: Z9,
  "cell-sm": "_cell-sm_1rhh5_45",
  "cell-md": "_cell-md_1rhh5_51",
  "cell-lg": "_cell-lg_1rhh5_57",
  invalid: U9,
  live: X9
};
function _2(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const V_ = R1(
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
    liveAnnounce: u = !0,
    className: h,
    "aria-label": b
  }, y) {
    const x = q1(), m = n !== void 0, [k, f] = K(_2(l).join("")), p = m ? _2(n).join("") : k, g = Array.from({ length: t }, (w, _) => p[_] ?? ""), M = G([]), [v, L] = K(""), C = (w) => {
      m || f(w), s?.(w);
    }, z = (w) => {
      const _ = M.current[w];
      _ && !_.disabled && (_.focus(), _.select());
    }, A = (w, _) => {
      const N = _.replace(/\D/g, "").slice(-1), V = p.split("");
      if (N) {
        V[w] = N;
        const T = V.join("").slice(0, t);
        C(T), T.length < t ? z(w + 1) : u && L("Code complete");
      }
    }, S = (w, _) => {
      if (_.key === "Backspace") {
        if (_.preventDefault(), p[w]) {
          const N = p.split("");
          N[w] = "", C(N.join(""));
        } else if (w > 0) {
          const N = p.split("");
          N[w - 1] = "", C(N.join("")), z(w - 1);
        }
      } else _.key === "ArrowLeft" && w > 0 ? (_.preventDefault(), z(w - 1)) : _.key === "ArrowRight" && w < t - 1 ? (_.preventDefault(), z(w + 1)) : _.key === "Home" ? (_.preventDefault(), z(0)) : _.key === "End" && (_.preventDefault(), z(t - 1));
    }, O = (w, _) => {
      _.preventDefault();
      const N = _.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!N) return;
      const V = p.split("");
      let T = 0;
      for (let D = 0; D < N.length && w + D < t; D++)
        V[w + D] = N[D] ?? "", T++;
      const j = V.join("");
      C(j), j.length >= t ? u && L("Code complete") : z(w + T);
    };
    return /* @__PURE__ */ $(
      "div",
      {
        className: [bt.wrapper, h].filter(Boolean).join(" "),
        role: "group",
        "aria-label": b ?? i,
        "data-invalid": c || void 0,
        children: [
          /* @__PURE__ */ r("div", { className: [bt.cells, bt[d]].join(" "), children: g.map((w, _) => /* @__PURE__ */ r(
            "input",
            {
              ref: (N) => {
                M.current[_] = N, _ === 0 && y && (typeof y == "function" ? y(N) : y.current = N);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: w,
              disabled: a,
              "aria-label": `Digit ${_ + 1} of ${t}`,
              "aria-invalid": c && w !== "" ? !0 : void 0,
              autoFocus: o && _ === 0,
              className: [
                bt.cell,
                bt[`cell-${d}`],
                c ? bt.invalid : null
              ].filter(Boolean).join(" "),
              onChange: (N) => A(_, N.target.value),
              onKeyDown: (N) => S(_, N),
              onPaste: (N) => O(_, N),
              onFocus: (N) => N.target.select(),
              onBlur: () => {
                u && L("");
              }
            },
            _
          )) }),
          u && /* @__PURE__ */ r(
            "span",
            {
              id: `${x}-live`,
              role: "status",
              "aria-live": "polite",
              className: bt.live,
              children: v
            }
          )
        ]
      }
    );
  }
), G9 = "_wrapper_1p09k_1", Y9 = "_header_1p09k_7", J9 = "_label_1p09k_15", Q9 = "_clear_1p09k_22", eu = "_canvas_1p09k_53", tu = "_disabled_1p09k_69", jt = {
  wrapper: G9,
  header: Y9,
  label: J9,
  clear: Q9,
  canvas: eu,
  disabled: tu
}, T_ = R1(
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
    disabled: u = !1,
    className: h
  }, b) {
    const y = G(null), x = G(!1), m = G(!1), k = G({ x: 0, y: 0 });
    g1(() => {
      const C = y.current;
      if (!C) return;
      const z = window.devicePixelRatio || 1, A = Math.round((a ?? C.clientWidth) * z), S = Math.round(i * z);
      (C.width !== A || C.height !== S) && (C.width = A, C.height = S);
      const O = C.getContext("2d");
      if (!O) return;
      O.setTransform(z, 0, 0, z, 0, 0), O.lineWidth = c, O.strokeStyle = s, O.lineCap = "round", O.lineJoin = "round";
      const w = t ?? n;
      if (w) {
        const _ = new Image();
        _.onload = () => {
          O.drawImage(_, 0, 0, C.clientWidth, i);
        }, _.src = w;
      }
    }, [t, n, s, c, a, i]);
    const f = () => {
      const C = y.current;
      if (!C) return;
      const z = C.toDataURL("image/png");
      l?.(z);
    }, p = () => {
      const C = y.current;
      if (!C) return;
      const z = C.getContext("2d");
      z && z.clearRect(0, 0, C.width, C.height), l?.("");
    };
    E0(b, () => ({
      clear: p,
      toDataURL: (C = "image/png", z) => y.current?.toDataURL(C, z) ?? ""
    }));
    const g = (C) => {
      const z = C.currentTarget.getBoundingClientRect();
      return { x: C.clientX - z.left, y: C.clientY - z.top };
    }, M = (C) => {
      u || (C.preventDefault(), typeof C.currentTarget.setPointerCapture == "function" && C.currentTarget.setPointerCapture(C.pointerId), x.current = !0, m.current = !1, k.current = g(C));
    }, v = (C) => {
      if (!x.current) return;
      C.preventDefault();
      const z = C.currentTarget.getContext("2d");
      if (!z) return;
      const A = g(C);
      z.beginPath(), z.moveTo(k.current.x, k.current.y), z.lineTo(A.x, A.y), z.stroke(), k.current = A, m.current = !0;
    }, L = (C) => {
      x.current && (C.preventDefault(), x.current = !1, m.current && f());
    };
    return /* @__PURE__ */ $(
      "div",
      {
        className: [
          jt.wrapper,
          h,
          u ? jt.disabled : null
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ $("div", { className: jt.header, children: [
            /* @__PURE__ */ r("span", { className: jt.label, children: o }),
            /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                className: jt.clear,
                onClick: p,
                disabled: u,
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
              "aria-disabled": u || void 0,
              style: {
                width: a ? `${a}px` : void 0,
                height: `${i}px`
              },
              className: jt.canvas,
              onPointerDown: M,
              onPointerMove: v,
              onPointerUp: L,
              onPointerCancel: L
            }
          )
        ]
      }
    );
  }
), nu = "_wrapper_cdx3b_1", ru = "_trigger_cdx3b_7", lu = "_list_cdx3b_35", ou = "_row_cdx3b_44", au = "_name_cdx3b_59", su = "_size_cdx3b_68", cu = "_progress_cdx3b_74", iu = "_fill_cdx3b_82", du = "_status_cdx3b_99", uu = "_remove_cdx3b_106", Ze = {
  wrapper: nu,
  trigger: ru,
  list: lu,
  row: ou,
  name: au,
  size: su,
  progress: cu,
  fill: iu,
  status: du,
  remove: uu
};
function g2(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const D_ = R1(function({
  url: t,
  multiple: n = !1,
  parameterName: l = "files",
  auto: s = !0,
  headers: c,
  accept: d,
  maxFileCount: o = Number.POSITIVE_INFINITY,
  maxFileSize: a,
  chooseText: i = "Upload",
  children: u,
  onProgress: h,
  onComplete: b,
  onError: y
}, x) {
  const m = G(null), [k, f] = K([]), p = G(/* @__PURE__ */ new Map()), g = (z, A) => {
    f(
      (S) => S.map((O) => O.file.name === z ? { ...O, ...A } : O)
    );
  }, M = (z) => {
    if (!t) return;
    const A = new XMLHttpRequest();
    p.current.set(z.file.name, A);
    const S = new FormData();
    if (S.append(l, z.file), A.upload.addEventListener("progress", (O) => {
      if (!O.lengthComputable) return;
      const w = Math.round(O.loaded / O.total * 100);
      g(z.file.name, { state: "uploading", progress: w }), h?.(z.file.name, w);
    }), A.addEventListener("load", () => {
      A.status >= 200 && A.status < 300 ? (g(z.file.name, { state: "complete", progress: 100 }), b?.(z.file.name)) : (g(z.file.name, {
        state: "error",
        message: `HTTP ${A.status}`
      }), y?.(z.file.name, `HTTP ${A.status}`));
    }), A.addEventListener("error", () => {
      g(z.file.name, { state: "error", message: "Network error" }), y?.(z.file.name, "Network error");
    }), c)
      for (const [O, w] of Object.entries(c))
        A.setRequestHeader(O, w);
    A.open("POST", t), A.send(S), g(z.file.name, { state: "uploading", progress: 0 });
  }, v = (z) => {
    if (!z) return;
    const A = [...z], S = [];
    let O = Math.max(0, o - k.length);
    for (const _ of A) {
      if (a != null && _.size > a) {
        y?.(
          _.name,
          `File too large (maximum ${g2(a)})`
        );
        continue;
      }
      if (O <= 0) {
        y?.(_.name, `Too many files (maximum ${o})`);
        continue;
      }
      O -= 1, S.push(_);
    }
    const w = S.map((_) => ({
      file: _,
      state: "pending",
      progress: 0
    }));
    f((_) => [..._, ...w]), m.current && (m.current.value = ""), s && w.forEach(M);
  }, L = (z) => {
    p.current.get(z)?.abort(), p.current.delete(z), f((S) => S.filter((O) => O.file.name !== z));
  }, C = u ?? /* @__PURE__ */ $(
    "button",
    {
      type: "button",
      className: Ze.trigger,
      onClick: () => m.current?.click(),
      children: [
        /* @__PURE__ */ r(C1, { name: "upload", size: 14 }),
        i
      ]
    }
  );
  return E0(x, () => ({
    open: () => m.current?.click(),
    upload: () => k.forEach((z) => z.state === "pending" ? M(z) : null)
  })), /* @__PURE__ */ $("div", { className: Ze.wrapper, children: [
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
        onChange: (z) => v(z.target.files)
      }
    ),
    !u && k.length > 0 && /* @__PURE__ */ r("ul", { className: Ze.list, children: k.map(({ file: z, state: A, progress: S, message: O }) => /* @__PURE__ */ $(
      "li",
      {
        className: Ze.row,
        "data-state": A,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ r("span", { className: Ze.name, children: z.name }),
          /* @__PURE__ */ r("span", { className: Ze.size, children: g2(z.size) }),
          /* @__PURE__ */ r(
            "span",
            {
              className: Ze.progress,
              role: "progressbar",
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": S,
              children: /* @__PURE__ */ r(
                "span",
                {
                  className: Ze.fill,
                  style: { width: `${S}%` }
                }
              )
            }
          ),
          /* @__PURE__ */ r("span", { className: Ze.status, role: "status", children: A === "uploading" ? "Uploading" : A === "complete" ? "Complete" : A === "error" ? O ?? "Failed" : "Pending" }),
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: Ze.remove,
              "aria-label": `Remove ${z.name}`,
              onClick: () => L(z.name),
              children: /* @__PURE__ */ r(C1, { name: "close", size: 14 })
            }
          )
        ]
      },
      z.name
    )) })
  ] });
}), hu = "_zone_e481w_1", fu = "_dragging_e481w_23", pu = "_caption_e481w_28", mu = "_browse_e481w_40", _u = "_disabled_e481w_67", Yt = {
  zone: hu,
  dragging: fu,
  caption: pu,
  browse: mu,
  disabled: _u
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
const E_ = R1(
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
    const u = G(null), [h, b] = K(!1), y = (p) => {
      if (!p || p.length === 0) return;
      const g = [...p].filter((M) => gu(M, t ?? ""));
      g.length !== 0 && l?.(g);
    }, x = (p) => {
      o || (p.preventDefault(), b(!0));
    }, m = (p) => {
      o || (p.preventDefault(), p.dataTransfer.dropEffect = "copy", b(!0));
    }, k = (p) => {
      o || p.currentTarget.contains(p.relatedTarget) || b(!1);
    }, f = (p) => {
      o || (p.preventDefault(), b(!1), y(p.dataTransfer.files));
    };
    return E0(i, () => ({
      open: () => u.current?.click()
    })), /* @__PURE__ */ $(
      "div",
      {
        role: "region",
        "aria-label": s,
        className: [
          Yt.zone,
          h ? Yt.dragging : null,
          o ? Yt.disabled : null,
          a
        ].filter(Boolean).join(" "),
        onDragEnter: x,
        onDragOver: m,
        onDragLeave: k,
        onDrop: f,
        children: [
          /* @__PURE__ */ r("p", { className: Yt.caption, children: h ? c : s }),
          !o && /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: Yt.browse,
              onClick: () => u.current?.click(),
              children: d
            }
          ),
          /* @__PURE__ */ r(
            "input",
            {
              ref: u,
              type: "file",
              hidden: !0,
              multiple: n,
              accept: t,
              "data-testid": "dropzone-input",
              onChange: (p) => {
                y(p.target.files), p.target.value = "";
              }
            }
          )
        ]
      }
    );
  }
), vu = "_root_mq6fh_1", ku = "_menubar_mq6fh_5", xu = "_horizontal_mq6fh_15", yu = "_vertical_mq6fh_20", bu = "_itemWrapper_mq6fh_25", Mu = "_item_mq6fh_25", Cu = "_disabled_mq6fh_61", wu = "_icon_mq6fh_68", zu = "_text_mq6fh_75", Lu = "_caret_mq6fh_79", $u = "_hasChildren_mq6fh_85", Nu = "_submenu_mq6fh_94", Su = "_submenuItem_mq6fh_118", Ou = "_flyout_mq6fh_155", Au = "_hamburger_mq6fh_175", Hu = "_responsive_mq6fh_198", ju = "_mobileOpen_mq6fh_207", X1 = {
  root: vu,
  menubar: ku,
  horizontal: xu,
  vertical: yu,
  itemWrapper: bu,
  item: Mu,
  disabled: Cu,
  icon: wu,
  text: zu,
  caret: Lu,
  hasChildren: $u,
  submenu: Nu,
  submenuItem: Su,
  flyout: Ou,
  hamburger: Au,
  responsive: Hu,
  mobileOpen: ju
}, v0 = qt(null);
function Vu(e, t) {
  if (!e || typeof window > "u") return !1;
  const n = window.location.hash.replace(/^#\/?/, ""), l = e.replace(/^#?\/?/, "");
  return t === "prefix" ? l === "" ? !1 : n === l || n.startsWith(`${l}/`) : n === l;
}
function Tu(e, t, n, l, s) {
  const [c, d] = K(n), o = e ? t ?? !1 : c, a = q(
    (i) => {
      e || d(i), l?.(i);
    },
    [e, l]
  );
  return g1(() => {
    s > 0 && a(!1);
  }, [s]), [o, a];
}
function Du({
  icon: e,
  iconColor: t,
  image: n,
  imageAlt: l
}) {
  return n ? /* @__PURE__ */ r("span", { className: X1.icon, "aria-hidden": "true", children: /* @__PURE__ */ r("img", { src: n, alt: l ?? "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ r(
    "span",
    {
      className: X1.icon,
      "aria-hidden": "true",
      style: t ? { color: t } : void 0,
      children: /* @__PURE__ */ r(C1, { name: e, size: 16 })
    }
  ) : null;
}
function j2(e) {
  return ge(e) && e.type === V2;
}
function P0({
  itemKey: e,
  props: t
}) {
  const n = ht(v0);
  if (!n) throw new Error("MenuItem must be used inside <Menu>");
  const { text: l, value: s, path: c, disabled: d, template: o } = t, a = v1(
    () => r0.toArray(t.children).filter(ge),
    [t.children]
  ), i = a.length > 0, u = !!d, h = t.open !== void 0, [b, y] = Tu(
    h,
    t.open,
    t.defaultOpen ?? !1,
    t.onOpenChange,
    n.closeSignal
  ), x = n.level === 0, m = G(0), f = (x && !h ? n.openKey === e : null) ?? b, p = q(
    (T) => {
      x && !h ? n.setOpenKey(T ? e : null) : (y(T), x && n.setOpenKey(null));
    },
    [x, h, n, e, y]
  ), [, g] = K(0);
  g1(() => {
    if (!c) return;
    const T = () => g((j) => j + 1);
    return window.addEventListener("hashchange", T), () => window.removeEventListener("hashchange", T);
  }, [c]);
  const M = c && !i ? Vu(c, t.match) : !1, v = q(
    (T) => {
      if (u) {
        T.preventDefault();
        return;
      }
      const j = { text: l, value: s, path: c };
      [n.emit(j), t.onClick?.(j)].includes(!1) && T.preventDefault(), n.closeAll();
    },
    [u, l, s, c, n, t]
  ), L = q(() => {
    if (!u) {
      if (f && (Date.now() - m.current < 600 || !n.clickToOpen)) {
        m.current = 0;
        return;
      }
      p(!f);
    }
  }, [u, f, p, n.clickToOpen]), C = q(() => {
    !i || u || n.clickToOpen || (m.current = Date.now(), p(!0));
  }, [i, u, n.clickToOpen, p]), z = q(() => {
    n.clickToOpen || p(!1);
  }, [n.clickToOpen, p]), A = `${n.baseId}-submenu-${e}`, [S, O] = K(null);
  g1(() => {
    n.closeSignal > 0 && O(null);
  }, [n.closeSignal]);
  const w = v1(
    () => ({
      baseId: n.baseId,
      flyout: n.flyout,
      clickToOpen: n.clickToOpen,
      level: n.level + 1,
      closeSignal: n.closeSignal,
      emit: n.emit,
      closeAll: n.closeAll,
      openKey: S,
      setOpenKey: O
    }),
    [n, S]
  ), _ = i ? /* @__PURE__ */ r("span", { className: X1.caret, "aria-hidden": "true", children: /* @__PURE__ */ r(
    C1,
    {
      name: n.flyout && !x ? "chevron-right" : "chevron-down",
      size: 10
    }
  ) }) : null, N = o ?? /* @__PURE__ */ $(b1, { children: [
    /* @__PURE__ */ r(
      Du,
      {
        icon: t.icon,
        iconColor: t.iconColor,
        image: t.image,
        imageAlt: t.imageAlt
      }
    ),
    /* @__PURE__ */ r("span", { className: X1.text, children: l }),
    _
  ] });
  if (i) {
    let T = function(j) {
      const D = Array.from(j.currentTarget.children).map((n1) => n1.querySelector('[role="menuitem"]')).filter(
        (n1) => n1 != null && n1.getAttribute("aria-disabled") !== "true" && !n1.hasAttribute("disabled")
      ), Y = document.activeElement, r1 = Y ? D.indexOf(Y) : -1;
      j.key === "ArrowDown" ? (j.preventDefault(), j.stopPropagation(), (r1 === -1 ? D[0] : D[(r1 + 1) % D.length])?.focus()) : j.key === "ArrowUp" ? (j.preventDefault(), j.stopPropagation(), (r1 === -1 ? D[D.length - 1] : D[(r1 - 1 + D.length) % D.length])?.focus()) : j.key === "ArrowRight" ? Y?.getAttribute("aria-haspopup") === "menu" && (j.preventDefault(), j.stopPropagation(), Y.getAttribute("aria-expanded") !== "true" && Y.click(), document.getElementById(
        Y.getAttribute("aria-controls") ?? ""
      )?.querySelector('[role="menuitem"]')?.focus()) : (j.key === "ArrowLeft" || j.key === "Escape") && (j.preventDefault(), j.stopPropagation(), p(!1));
    };
    return /* @__PURE__ */ $(
      "div",
      {
        className: X1.itemWrapper,
        onMouseEnter: n.clickToOpen ? void 0 : C,
        onMouseLeave: n.clickToOpen ? void 0 : z,
        "data-dx-menu-item": "",
        children: [
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              role: "menuitem",
              "data-top": x ? "true" : void 0,
              "data-index": e,
              "data-dx-menu-item": "",
              "aria-disabled": u || void 0,
              "aria-haspopup": "menu",
              "aria-expanded": f,
              "aria-controls": A,
              tabIndex: u ? -1 : 0,
              disabled: u,
              className: [
                X1.item,
                u ? X1.disabled : null,
                X1.hasChildren
              ].filter(Boolean).join(" "),
              onClick: L,
              children: N
            }
          ),
          f ? /* @__PURE__ */ r(
            "div",
            {
              id: A,
              role: "menu",
              "aria-label": l,
              className: [
                X1.submenu,
                n.flyout && !x ? X1.flyout : null
              ].filter(Boolean).join(" "),
              "data-dx-menu-submenu": "",
              onKeyDown: T,
              children: /* @__PURE__ */ r(v0.Provider, { value: w, children: a.map(
                (j, D) => j2(j) ? /* @__PURE__ */ r(
                  P0,
                  {
                    itemKey: `${e}-${D}`,
                    props: j.props
                  },
                  `${e}-${D}`
                ) : (
                  // Separators / custom content (Radzen `<hr />` parity) render verbatim.
                  /* @__PURE__ */ r(D0, { children: j }, `${e}-custom-${D}`)
                )
              ) })
            }
          ) : null
        ]
      }
    );
  }
  const V = {
    role: "menuitem",
    "aria-disabled": u || void 0,
    "aria-current": M ? "page" : void 0,
    tabIndex: u ? -1 : 0,
    "data-dx-menu-item": "",
    className: [X1.submenuItem, u ? X1.disabled : null].filter(Boolean).join(" "),
    onClick: v
  };
  return c && !u ? /* @__PURE__ */ r("div", { className: X1.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ r("a", { href: c, target: t.target, ...V, children: N }) }) : /* @__PURE__ */ r("div", { className: X1.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ r("button", { type: "button", disabled: u, ...V, children: N }) });
}
function V2(e) {
  if (!ht(v0)) throw new Error("MenuItem must be used inside <Menu>");
  return /* @__PURE__ */ r(P0, { itemKey: e.text, props: e });
}
function Eu({
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
  ...u
}) {
  const h = q1(), b = G(null), y = G(null), [x, m] = K(null), [k, f] = K(0), [p, g] = K(!1), M = G(null), v = q(
    (S) => c?.(S),
    [c]
  ), L = q(() => {
    m(null), f((S) => S + 1);
  }, []);
  g1(() => {
    if (x == null) return;
    const S = (O) => {
      b.current && !b.current.contains(O.target) && L();
    };
    return document.addEventListener("mousedown", S), () => document.removeEventListener("mousedown", S);
  }, [x, L]), g1(() => {
    M.current != null && x === M.current && (document.getElementById(`${h}-submenu-${x}`)?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus(), M.current = null);
  }, [x, h]);
  const C = v1(
    () => ({
      baseId: h,
      flyout: n,
      clickToOpen: t,
      level: 0,
      closeSignal: k,
      emit: v,
      closeAll: L,
      openKey: x,
      setOpenKey: m
    }),
    [h, n, t, k, v, L, x]
  ), z = v1(
    () => r0.toArray(e).filter(ge),
    [e]
  ), A = (S) => {
    const O = y.current;
    if (!O) return;
    const w = Array.from(O.children).map((V) => V.querySelector('[role="menuitem"]')).filter(
      (V) => V != null && !V.hasAttribute("disabled") && V.getAttribute("aria-disabled") !== "true"
    );
    if (x != null) {
      const V = document.getElementById(`${h}-submenu-${x}`);
      if (V) {
        const T = Array.from(
          V.querySelectorAll('[role="menuitem"]')
        ).filter(
          (Y) => Y.getAttribute("aria-disabled") !== "true" && !Y.hasAttribute("disabled")
        ), j = document.activeElement, D = j ? T.indexOf(j) : -1;
        if (S.key === "ArrowDown") {
          S.preventDefault(), (D === -1 ? T[0] : T[(D + 1) % T.length])?.focus();
          return;
        }
        if (S.key === "ArrowUp") {
          S.preventDefault(), (D === -1 ? T[T.length - 1] : T[(D - 1 + T.length) % T.length])?.focus();
          return;
        }
        if (S.key === "Escape") {
          S.preventDefault(), L(), d?.(), O.querySelector(`[data-index="${x}"]`)?.focus();
          return;
        }
        if (S.key === "Enter" || S.key === " ") return;
      }
      if (S.key === "Escape") {
        S.preventDefault(), L(), d?.();
        return;
      }
    }
    const _ = document.activeElement, N = _ ? w.indexOf(_) : -1;
    if (S.key === "ArrowRight") {
      if (S.preventDefault(), w.length === 0) return;
      w[N === -1 ? 0 : (N + 1) % w.length]?.focus();
      return;
    }
    if (S.key === "ArrowLeft") {
      if (S.preventDefault(), w.length === 0) return;
      w[N === -1 ? w.length - 1 : (N - 1 + w.length) % w.length]?.focus();
      return;
    }
    if (S.key === "ArrowDown") {
      if (N >= 0) {
        const V = _?.getAttribute("data-index");
        if (V == null) return;
        O.querySelector(
          `[data-index="${V}"]`
        )?.getAttribute("aria-haspopup") === "menu" && (S.preventDefault(), M.current = V, m(V));
      }
      return;
    }
    if (S.key === "Home") {
      S.preventDefault(), w[0]?.focus();
      return;
    }
    if (S.key === "End") {
      S.preventDefault(), w[w.length - 1]?.focus();
      return;
    }
    if (S.key.length === 1 && !S.ctrlKey && !S.metaKey) {
      const V = w.map((j) => j.textContent ?? ""), T = N === -1 ? 0 : (N + 1) % w.length;
      for (let j = 0; j < w.length; j++) {
        const D = (T + j) % w.length;
        if (V[D]?.toLowerCase().startsWith(S.key.toLowerCase())) {
          S.preventDefault(), w[D]?.focus();
          break;
        }
      }
    }
  };
  return /* @__PURE__ */ $(
    "nav",
    {
      ref: b,
      "aria-label": o,
      className: [
        X1.root,
        s ? X1.vertical : X1.horizontal,
        l ? X1.responsive : null,
        l && p ? X1.mobileOpen : null,
        n ? X1.flyoutRoot : null,
        i
      ].filter(Boolean).join(" "),
      ...u,
      children: [
        l ? /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            "aria-label": a,
            "aria-expanded": p,
            className: X1.hamburger,
            onClick: () => g((S) => !S),
            children: /* @__PURE__ */ r(C1, { name: "menu", size: 20 })
          }
        ) : null,
        /* @__PURE__ */ r(
          "div",
          {
            ref: y,
            role: s ? "menu" : "menubar",
            "aria-label": o,
            className: X1.menubar,
            onKeyDown: A,
            children: /* @__PURE__ */ r(v0.Provider, { value: C, children: z.map(
              (S, O) => j2(S) ? /* @__PURE__ */ r(
                P0,
                {
                  itemKey: String(O),
                  props: S.props
                },
                `top-${O}`
              ) : /* @__PURE__ */ r(D0, { children: S }, `top-custom-${O}`)
            ) })
          }
        )
      ]
    }
  );
}
const qu = "_popup_y9hdw_1", Iu = "_menu_y9hdw_22", V0 = {
  popup: qu,
  menu: Iu
}, T2 = qt(null);
function q_() {
  const e = ht(T2);
  if (!e)
    throw new Error("useContextMenu must be used inside <ContextMenuProvider>");
  return e;
}
function D2(e) {
  return e.map((t, n) => {
    const { children: l, ...s } = t;
    return /* @__PURE__ */ r(V2, { ...s, children: l ? D2(l) : void 0 }, `${t.text}-${n}`);
  });
}
function Pu({ state: e, onClose: t }) {
  const n = G(null), [l, s] = K({ left: e.x, top: e.y });
  N0(() => {
    const d = n.current;
    if (!d) return;
    const o = d.getBoundingClientRect();
    s({
      left: Math.max(0, Math.min(e.x, window.innerWidth - o.width)),
      top: Math.max(0, Math.min(e.y, window.innerHeight - o.height))
    });
  }, [e.x, e.y, e.options]), g1(() => {
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
      className: V0.popup,
      style: { left: l.left, top: l.top },
      children: /* @__PURE__ */ r("div", { className: V0.menu, children: e.options.content ?? /* @__PURE__ */ r(
        Eu,
        {
          isContextMenu: !0,
          responsive: !1,
          ariaLabel: e.options.ariaLabel ?? "Context menu",
          onClick: c,
          onClose: t,
          children: D2(e.options.items ?? [])
        }
      ) })
    }
  );
}
function I_({ children: e }) {
  const [t, n] = K(null), l = q(() => {
    n((d) => (d?.invoker && document.body.contains(d.invoker) && d.invoker.focus({ preventScroll: !0 }), null));
  }, []), s = q(
    (d, o) => {
      d.preventDefault();
      const a = d.currentTarget ?? d.target;
      n({ x: d.clientX, y: d.clientY, invoker: a, options: o });
    },
    []
  );
  g1(() => {
    if (!t) return;
    const d = (u) => {
      const h = document.querySelector(`.${V0.popup}`);
      h && !h.contains(u.target) && l();
    }, o = (u) => {
      u.key === "Escape" && (u.preventDefault(), l());
    }, a = () => l(), i = () => l();
    return document.addEventListener("pointerdown", d, !0), document.addEventListener("keydown", o, !0), window.addEventListener("resize", a), window.addEventListener("hashchange", i), () => {
      document.removeEventListener("pointerdown", d, !0), document.removeEventListener("keydown", o, !0), window.removeEventListener("resize", a), window.removeEventListener("hashchange", i);
    };
  }, [t, l]);
  const c = v1(
    () => ({ open: s, close: l, isOpen: t != null }),
    [s, l, t]
  );
  return /* @__PURE__ */ $(T2.Provider, { value: c, children: [
    e,
    t ? /* @__PURE__ */ r(Pu, { state: t, onClose: l }) : null
  ] });
}
const Ru = "_root_1ezv8_1", Bu = "_list_1ezv8_9", Fu = "_item_1ezv8_14", Ku = "_trigger_1ezv8_18", Wu = "_disabled_1ezv8_45", Zu = "_expanded_1ezv8_52", Uu = "_selected_1ezv8_56", Xu = "_icon_1ezv8_61", Gu = "_text_1ezv8_72", Yu = "_caret_1ezv8_79", Ju = "_open_1ezv8_86", Qu = "_submenu_1ezv8_90", eh = "_iconOnly_1ezv8_172", th = "_stacked_1ezv8_201", de = {
  root: Ru,
  list: Bu,
  item: Fu,
  trigger: Ku,
  disabled: Wu,
  expanded: Zu,
  selected: Uu,
  icon: Xu,
  text: Gu,
  caret: Yu,
  open: Ju,
  submenu: Qu,
  iconOnly: eh,
  stacked: th
}, k0 = qt(null);
function nh() {
  return typeof window > "u" ? "" : window.location.hash.replace(/^#\/?/, "");
}
function rh(e, t) {
  const n = nh(), l = e.replace(/^#?\/?/, "");
  return t === "prefix" ? l === "" ? !1 : l === "/" ? n === "" || n === "/" : n === l || n.startsWith(`${l}/`) : n === l;
}
function lh({
  icon: e,
  iconColor: t,
  image: n
}) {
  return n ? /* @__PURE__ */ r("span", { className: de.icon, "aria-hidden": "true", children: /* @__PURE__ */ r("img", { src: n, alt: "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ r(
    "span",
    {
      className: de.icon,
      "aria-hidden": "true",
      style: t ? { color: t } : void 0,
      children: /* @__PURE__ */ r(C1, { name: e, size: 16 })
    }
  ) : null;
}
function R0({
  itemKey: e,
  ancestors: t,
  props: n
}) {
  const l = ht(k0);
  if (!l) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  const { text: s, value: c, path: d, disabled: o } = n, a = v1(
    () => r0.toArray(n.children).filter(ge),
    [n.children]
  ), i = a.length > 0, u = !!o, h = n.match ?? l.match, b = n.expanded !== void 0, [y, x] = K(
    n.defaultExpanded ?? !1
  ), m = b ? n.expanded ?? !1 : y, k = q(
    (D) => {
      b || x(D), n.onExpandedChange?.(D);
    },
    [b, n]
  );
  g1(() => {
    l.collapseSignal > 0 && !l.collapseSkipRef.current.has(e) && k(!1);
  }, [l.collapseSignal]);
  const f = n.onSelectedChange !== void 0 || n.selected !== void 0, [p, g] = K(
    n.defaultSelected ?? !1
  ), M = !f && d ? rh(d, h) : !1, v = n.selected ?? (f ? p : M || p), [, L] = K(0);
  g1(() => {
    if (!d) return;
    const D = () => L((Y) => Y + 1);
    return window.addEventListener("hashchange", D), () => window.removeEventListener("hashchange", D);
  }, [d]);
  const C = v1(
    () => ({
      ...l,
      level: l.level + 1,
      openAncestors: () => {
        k(!0), l.openAncestors();
      }
    }),
    [l, k]
  );
  g1(() => {
    M && t.length > 0 && C.openAncestors();
  }, []);
  const z = q(
    (D) => {
      if (u) {
        D.preventDefault();
        return;
      }
      const Y = { text: s, value: c, path: d };
      [l.emit(Y), n.onClick?.(Y)].includes(!1) && D.preventDefault(), f || g(!0), n.onSelectedChange?.(!0);
    },
    [u, s, c, d, l, n, f]
  ), A = q(() => {
    u || (m || l.notifyOpened(e, t), k(!m));
  }, [u, m, l, e, t, k]), S = q(
    (D) => {
      D.key === "Enter" || D.key === " " ? (D.preventDefault(), i ? A() : D.target.click()) : D.key === "Escape" && m ? (D.preventDefault(), k(!1)) : D.key === "ArrowRight" && i && !m ? (D.preventDefault(), l.notifyOpened(e, t), k(!0)) : D.key === "ArrowLeft" && m && (D.preventDefault(), k(!1));
    },
    [i, A, m, k, l, e, t]
  ), O = i && l.showArrow ? /* @__PURE__ */ r(
    "span",
    {
      className: [de.caret, m ? de.open : null].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: /* @__PURE__ */ r(C1, { name: "chevron-down", size: 10 })
    }
  ) : null, w = n.template ?? /* @__PURE__ */ $(b1, { children: [
    /* @__PURE__ */ r(
      lh,
      {
        icon: n.icon,
        iconColor: n.iconColor,
        image: n.image,
        imageAlt: n.imageAlt
      }
    ),
    l.displayStyle === "icon" ? /* @__PURE__ */ r("span", { className: de.text, "aria-label": s, children: n.icon || n.image ? null : s.slice(0, 1) }) : /* @__PURE__ */ r("span", { className: de.text, children: s }),
    O
  ] }), _ = `${l.baseId}-panel-${e}`, N = `${l.baseId}-trigger-${e}`, V = [
    de.trigger,
    u ? de.disabled : null,
    m ? de.expanded : null,
    v ? de.selected : null
  ].filter(Boolean).join(" "), T = i ? /* @__PURE__ */ r(
    "button",
    {
      type: "button",
      id: N,
      "aria-expanded": m,
      "aria-controls": _,
      "aria-disabled": u || void 0,
      disabled: u,
      tabIndex: u ? -1 : 0,
      className: V,
      onClick: A,
      onKeyDown: S,
      children: w
    }
  ) : d && !u ? /* @__PURE__ */ r(
    "a",
    {
      id: N,
      href: d,
      target: n.target,
      "aria-disabled": void 0,
      "aria-current": v ? "page" : void 0,
      tabIndex: 0,
      className: V,
      onClick: z,
      onKeyDown: S,
      children: w
    }
  ) : /* @__PURE__ */ r(
    "button",
    {
      type: "button",
      id: N,
      "aria-current": v ? "page" : void 0,
      "aria-disabled": u || void 0,
      disabled: u,
      tabIndex: u ? -1 : 0,
      className: V,
      onClick: z,
      onKeyDown: S,
      children: w
    }
  ), j = i ? l.renderMode === "server" && !m ? null : /* @__PURE__ */ r(
    "div",
    {
      id: _,
      role: "menu",
      "aria-labelledby": N,
      className: de.submenu,
      hidden: l.renderMode === "client" && !m ? !0 : void 0,
      children: /* @__PURE__ */ r(k0.Provider, { value: C, children: a.map((D, Y) => /* @__PURE__ */ r(
        R0,
        {
          itemKey: `${e}-${Y}`,
          ancestors: [...t, e],
          props: D.props
        },
        `${e}-${Y}`
      )) })
    }
  ) : null;
  return /* @__PURE__ */ $(
    "div",
    {
      className: de.item,
      style: { "--dx-panelmenu-level": l.level },
      "data-dx-panelmenu-item": "",
      "data-level": l.level,
      children: [
        T,
        j
      ]
    }
  );
}
function P_(e) {
  if (!ht(k0)) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  return /* @__PURE__ */ r(R0, { itemKey: e.text, ancestors: [], props: e });
}
function R_({
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
  const u = q1(), [h, b] = K(0), y = G(/* @__PURE__ */ new Set()), x = q(
    (M) => d?.(M),
    [d]
  ), m = q(
    (M, v) => {
      t || (y.current = /* @__PURE__ */ new Set([M, ...v]), b((L) => L + 1));
    },
    [t]
  ), k = (M) => Array.from(
    M.querySelectorAll('button, a[href], [role="menuitem"]')
  ).filter(
    (v) => !v.hasAttribute("disabled") && v.getAttribute("aria-disabled") !== "true" && v.closest("[hidden]") == null
  ), f = (M) => {
    if (!(M.key === "Enter" || M.key === " ")) {
      if (M.key === "ArrowDown" || M.key === "ArrowUp") {
        const v = M.target, L = k(M.currentTarget), C = L.indexOf(v);
        if (C === -1) return;
        M.preventDefault();
        const z = M.key === "ArrowDown" ? 1 : -1;
        L[(C + z + L.length) % L.length]?.focus();
      } else if (M.key === "Home" || M.key === "End") {
        const v = k(M.currentTarget);
        M.preventDefault(), (M.key === "Home" ? v[0] : v[v.length - 1])?.focus();
      }
    }
  }, p = v1(
    () => ({
      baseId: u,
      multiple: t,
      displayStyle: n,
      showArrow: l,
      renderMode: c,
      match: s,
      level: 0,
      collapseSignal: h,
      collapseSkipRef: y,
      emit: x,
      notifyOpened: m,
      openAncestors: () => {
      }
    }),
    [
      u,
      t,
      n,
      l,
      c,
      s,
      h,
      x,
      m
    ]
  ), g = v1(
    () => r0.toArray(e).filter(ge),
    [e]
  );
  return /* @__PURE__ */ r(
    "nav",
    {
      "aria-label": o,
      className: [
        de.root,
        n === "icon" ? de.iconOnly : null,
        n === "stacked" ? de.stacked : null,
        a
      ].filter(Boolean).join(" "),
      onKeyDown: f,
      ...i,
      children: /* @__PURE__ */ r("div", { className: de.list, role: "presentation", children: /* @__PURE__ */ r(k0.Provider, { value: p, children: g.map((M, v) => /* @__PURE__ */ r(
        R0,
        {
          itemKey: String(v),
          ancestors: [],
          props: M.props
        },
        `top-${v}`
      )) }) })
    }
  );
}
const oh = "_root_1bbxp_1", ah = "_trigger_1bbxp_7", sh = "_defaultTrigger_1bbxp_40", ch = "_avatar_1bbxp_46", ih = "_menu_1bbxp_58", dh = "_item_1bbxp_74", uh = "_disabled_1bbxp_88", hh = "_active_1bbxp_97", fh = "_icon_1bbxp_107", ph = "_text_1bbxp_114", Ue = {
  root: oh,
  trigger: ah,
  defaultTrigger: sh,
  avatar: ch,
  menu: ih,
  item: dh,
  disabled: uh,
  active: hh,
  icon: fh,
  text: ph
};
function B_({
  items: e,
  trigger: t,
  onClick: n,
  ariaLabel: l = "Profile menu",
  className: s
}) {
  const c = q1(), d = `${c}-menu`, o = G(null), a = G(null), [i, u] = K(!1), [h, b] = K(-1), y = t, x = e.map((v, L) => v.disabled ? -1 : L).filter((v) => v >= 0), m = q(
    (v) => {
      if (v.disabled) return;
      const L = {
        text: v.text,
        path: v.path
      };
      n?.(L), u(!1), a.current?.focus();
    },
    [n]
  ), k = q(() => {
    b(x[0] ?? -1), u(!0);
  }, [x]), f = q(() => {
    u(!1), b(-1), a.current?.focus();
  }, []);
  g1(() => {
    if (!i) return;
    const v = (L) => {
      o.current && !o.current.contains(L.target) && (u(!1), b(-1));
    };
    return document.addEventListener("mousedown", v), () => document.removeEventListener("mousedown", v);
  }, [i]), g1(() => {
    if (!i) return;
    const v = (L) => {
      L.key === "Escape" && (L.preventDefault(), f());
    };
    return document.addEventListener("keydown", v), () => document.removeEventListener("keydown", v);
  }, [i, f]);
  const p = (v) => {
    if (x.length === 0) return;
    const L = x.indexOf(h), C = L === -1 ? 0 : (L + v + x.length) % x.length, z = x[C];
    z != null && b(z);
  }, g = (v) => {
    if (!i) {
      (v.key === "ArrowDown" || v.key === "Enter" || v.key === " ") && (v.preventDefault(), k());
      return;
    }
    switch (v.key) {
      case "Escape":
        v.preventDefault(), f();
        break;
      case "ArrowDown":
        v.preventDefault(), p(1);
        break;
      case "ArrowUp":
        v.preventDefault(), p(-1);
        break;
      case "Home":
        v.preventDefault(), x[0] != null && b(x[0]);
        break;
      case "End":
        v.preventDefault(), x[x.length - 1] != null && b(x[x.length - 1]);
        break;
      case "Enter":
      case " ":
        if (v.preventDefault(), h >= 0) {
          const L = e[h];
          L && !L.disabled && m(L);
        }
        break;
      case "Tab":
        u(!1), b(-1);
        break;
    }
  }, M = (v) => {
    switch (v.key) {
      case "ArrowDown":
        v.preventDefault(), p(1);
        break;
      case "ArrowUp":
        v.preventDefault(), p(-1);
        break;
      case "Home":
        v.preventDefault(), x[0] != null && b(x[0]);
        break;
      case "End":
        v.preventDefault(), x[x.length - 1] != null && b(x[x.length - 1]);
        break;
      case "Enter":
      case " ":
        if (v.preventDefault(), h >= 0) {
          const L = e[h];
          L && !L.disabled && m(L);
        }
        break;
      case "Escape":
        v.preventDefault(), f();
        break;
      case "Tab":
        u(!1), b(-1);
        break;
    }
  };
  return /* @__PURE__ */ r(
    "div",
    {
      ref: o,
      className: [Ue.root, s].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ $("nav", { "aria-label": l, children: [
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
            onClick: () => i ? f() : k(),
            onKeyDown: g,
            children: y ?? /* @__PURE__ */ $("span", { className: Ue.defaultTrigger, children: [
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
            "aria-activedescendant": h >= 0 ? `${c}-item-${h}` : void 0,
            className: Ue.menu,
            onKeyDown: M,
            tabIndex: -1,
            children: e.map((v, L) => {
              const C = !!v.disabled, z = L === h;
              return /* @__PURE__ */ $(
                "div",
                {
                  id: `${c}-item-${L}`,
                  role: "menuitem",
                  "aria-disabled": C || void 0,
                  tabIndex: C ? -1 : 0,
                  className: [
                    Ue.item,
                    z ? Ue.active : null,
                    C ? Ue.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    C || m(v);
                  },
                  onMouseEnter: () => {
                    C || b(L);
                  },
                  children: [
                    v.icon ? /* @__PURE__ */ r("span", { className: Ue.icon, "aria-hidden": "true", children: v.icon }) : null,
                    /* @__PURE__ */ r("span", { className: Ue.text, children: v.text })
                  ]
                },
                `${v.text}-${L}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const mh = "_root_1dgrt_1", _h = "_bottomRight_1dgrt_11", gh = "_bottomLeft_1dgrt_16", vh = "_topRight_1dgrt_21", kh = "_topLeft_1dgrt_26", xh = "_menu_1dgrt_31", yh = "_itemWrapper_1dgrt_48", bh = "_tooltip_1dgrt_54", Mh = "_main_1dgrt_76", Ch = "_mainIcon_1dgrt_104", wh = "_mainOpen_1dgrt_109", zh = "_item_1dgrt_48", Lh = "_disabled_1dgrt_141", $h = "_itemIcon_1dgrt_148", ke = {
  root: mh,
  bottomRight: _h,
  bottomLeft: gh,
  topRight: vh,
  topLeft: kh,
  menu: xh,
  itemWrapper: yh,
  tooltip: bh,
  main: Mh,
  mainIcon: Ch,
  mainOpen: wh,
  item: zh,
  disabled: Lh,
  itemIcon: $h
};
function F_({
  items: e,
  position: t,
  icon: n = "+",
  onClick: l,
  ariaLabel: s = "Open menu",
  className: c
}) {
  const d = t ?? "bottom-right", a = `${q1()}-menu`, i = G(null), u = G(null), [h, b] = K(!1), y = q(
    (f) => {
      if (f.disabled) return;
      const p = { text: f.text, value: f.value };
      l?.(p), b(!1), u.current?.focus();
    },
    [l]
  );
  g1(() => {
    if (!h) return;
    const f = (p) => {
      i.current && !i.current.contains(p.target) && b(!1);
    };
    return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, [h]), g1(() => {
    if (!h) return;
    const f = (p) => {
      p.key === "Escape" && (b(!1), u.current?.focus());
    };
    return document.addEventListener("keydown", f), () => document.removeEventListener("keydown", f);
  }, [h]);
  const x = d === "bottom-right" ? ke.bottomRight : d === "bottom-left" ? ke.bottomLeft : d === "top-right" ? ke.topRight : ke.topLeft, m = (f) => {
    !h && (f.key === "Enter" || f.key === " " || f.key === "ArrowDown" || f.key === "ArrowUp") ? (f.preventDefault(), b(!0)) : h && f.key === "Escape" && (f.preventDefault(), b(!1));
  }, k = (f) => {
    f.key === "Escape" && (f.preventDefault(), b(!1), u.current?.focus());
  };
  return /* @__PURE__ */ $(
    "div",
    {
      ref: i,
      className: [ke.root, x, c].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        h ? /* @__PURE__ */ r(
          "div",
          {
            id: a,
            role: "menu",
            "aria-label": s,
            className: ke.menu,
            onKeyDown: k,
            children: e.map((f, p) => {
              const g = !!f.disabled;
              return /* @__PURE__ */ $("div", { className: ke.itemWrapper, children: [
                /* @__PURE__ */ r("span", { className: ke.tooltip, "aria-hidden": "true", children: f.text }),
                /* @__PURE__ */ r(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": f.text,
                    "aria-disabled": g || void 0,
                    title: f.text,
                    disabled: g,
                    tabIndex: g ? -1 : 0,
                    className: [ke.item, g ? ke.disabled : null].filter(Boolean).join(" "),
                    onClick: () => y(f),
                    children: /* @__PURE__ */ r("span", { className: ke.itemIcon, "aria-hidden": "true", children: f.icon ?? "•" })
                  }
                )
              ] }, `${f.text}-${p}`);
            })
          }
        ) : null,
        /* @__PURE__ */ r(
          "button",
          {
            ref: u,
            type: "button",
            className: ke.main,
            "aria-haspopup": "menu",
            "aria-expanded": h,
            "aria-controls": a,
            "aria-label": s,
            onClick: () => b((f) => !f),
            onKeyDown: m,
            children: /* @__PURE__ */ r(
              "span",
              {
                "aria-hidden": "true",
                className: [ke.mainIcon, h ? ke.mainOpen : null].filter(Boolean).join(" "),
                children: n
              }
            )
          }
        )
      ]
    }
  );
}
const Nh = "_root_1nu0o_1", Sh = "_list_1nu0o_5", Oh = "_item_1nu0o_15", Ah = "_link_1nu0o_22", Hh = "_linkButton_1nu0o_23", jh = "_current_1nu0o_24", Vh = "_disabled_1nu0o_68", Th = "_icon_1nu0o_74", Dh = "_text_1nu0o_81", Eh = "_separator_1nu0o_85", Z1 = {
  root: Nh,
  list: Sh,
  item: Oh,
  link: Ah,
  linkButton: Hh,
  current: jh,
  disabled: Vh,
  icon: Th,
  text: Dh,
  separator: Eh
};
function K_({
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
      className: [Z1.root, l].filter(Boolean).join(" "),
      children: /* @__PURE__ */ r("ol", { className: Z1.list, children: e.map((d, o) => {
        const a = o === e.length - 1, i = !!d.disabled;
        return /* @__PURE__ */ $("li", { className: Z1.item, children: [
          a ? i ? /* @__PURE__ */ $(
            "span",
            {
              className: [Z1.current, Z1.disabled].filter(Boolean).join(" "),
              "aria-current": "page",
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                d.icon ? /* @__PURE__ */ r("span", { className: Z1.icon, "aria-hidden": "true", children: d.icon }) : null,
                d.text
              ]
            }
          ) : d.path ? /* @__PURE__ */ $(
            "a",
            {
              href: d.path,
              className: Z1.link,
              "aria-current": "page",
              onClick: (u) => {
                u.preventDefault(), c(d);
              },
              children: [
                d.icon ? /* @__PURE__ */ r("span", { className: Z1.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ r("span", { className: Z1.text, children: d.text })
              ]
            }
          ) : /* @__PURE__ */ $(
            "span",
            {
              className: Z1.current,
              "aria-current": "page",
              tabIndex: 0,
              children: [
                d.icon ? /* @__PURE__ */ r("span", { className: Z1.icon, "aria-hidden": "true", children: d.icon }) : null,
                d.text
              ]
            }
          ) : i ? /* @__PURE__ */ $(
            "span",
            {
              className: [Z1.link, Z1.disabled].filter(Boolean).join(" "),
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                d.icon ? /* @__PURE__ */ r("span", { className: Z1.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ r("span", { className: Z1.text, children: d.text })
              ]
            }
          ) : d.path ? /* @__PURE__ */ $(
            "a",
            {
              href: d.path,
              className: Z1.link,
              onClick: (u) => {
                u.preventDefault(), c(d);
              },
              children: [
                d.icon ? /* @__PURE__ */ r("span", { className: Z1.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ r("span", { className: Z1.text, children: d.text })
              ]
            }
          ) : /* @__PURE__ */ $(
            "button",
            {
              type: "button",
              className: Z1.linkButton,
              tabIndex: 0,
              onClick: () => c(d),
              children: [
                d.icon ? /* @__PURE__ */ r("span", { className: Z1.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ r("span", { className: Z1.text, children: d.text })
              ]
            }
          ),
          a ? null : /* @__PURE__ */ r("span", { className: Z1.separator, "aria-hidden": "true", children: "/" })
        ] }, `${d.text}-${o}`);
      }) })
    }
  );
}
const qh = "_link_6vrgp_1", Ih = {
  link: qh
}, W_ = R1(function({ children: t, icon: n, visible: l = !0, className: s, ...c }, d) {
  if (l === !1) return null;
  const o = /* @__PURE__ */ $(b1, { children: [
    n != null && /* @__PURE__ */ r(C1, { name: n, "aria-hidden": "true" }),
    t
  ] }), a = [Ih.link, s].filter(Boolean).join(" ");
  if (c.href != null) {
    const { href: u, ...h } = c;
    return /* @__PURE__ */ r(
      "a",
      {
        ref: d,
        className: a,
        href: u,
        ...h,
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
}), Ph = "_root_1w5vx_1", Rh = "_list_1w5vx_5", Bh = "_item_1w5vx_15", Fh = "_connector_1w5vx_21", Kh = "_connectorCompleted_1w5vx_30", Wh = "_step_1w5vx_34", Zh = "_active_1w5vx_69", Uh = "_completed_1w5vx_75", Xh = "_circle_1w5vx_79", Gh = "_check_1w5vx_109", Yh = "_icon_1w5vx_114", Jh = "_number_1w5vx_119", Qh = "_text_1w5vx_124", xe = {
  root: Ph,
  list: Rh,
  item: Bh,
  connector: Fh,
  connectorCompleted: Kh,
  step: Wh,
  active: Zh,
  completed: Uh,
  circle: Xh,
  check: Gh,
  icon: Yh,
  number: Jh,
  text: Qh
};
function Z_({
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
  className: u
}) {
  const h = s ?? c ?? !1, b = t ?? n, y = b !== void 0, [x, m] = K(() => Math.min(Math.max(0, b ?? l), Math.max(0, e.length - 1))), f = Math.min(
    Math.max(0, y ? b : x),
    Math.max(0, e.length - 1)
  ), p = G(null), g = q(
    (L) => {
      const C = Math.min(
        Math.max(0, L),
        Math.max(0, e.length - 1)
      );
      y || m(C), (d ?? o ?? a)?.(C);
    },
    [y, d, o, a, e.length]
  ), M = q(
    (L, C) => !!(C.disabled || h && L > f + 1),
    [h, f]
  ), v = (L) => {
    const C = Array.from(
      L.currentTarget.querySelectorAll("button[data-step]")
    ).filter((S) => S.getAttribute("aria-disabled") !== "true" && !S.disabled), z = document.activeElement, A = z ? C.indexOf(z) : -1;
    if (L.key === "ArrowRight" || L.key === "ArrowDown") {
      if (L.preventDefault(), C.length === 0) return;
      const S = A === -1 ? 0 : (A + 1) % C.length, O = C[S];
      O && O.focus();
    } else if (L.key === "ArrowLeft" || L.key === "ArrowUp") {
      if (L.preventDefault(), C.length === 0) return;
      const S = A === -1 ? C.length - 1 : (A - 1 + C.length) % C.length, O = C[S];
      O && O.focus();
    } else L.key === "Home" ? (L.preventDefault(), C[0]?.focus()) : L.key === "End" && (L.preventDefault(), C[C.length - 1]?.focus());
  };
  return /* @__PURE__ */ r(
    "nav",
    {
      "aria-label": i,
      className: [xe.root, u].filter(Boolean).join(" "),
      onKeyDown: v,
      children: /* @__PURE__ */ r("ol", { ref: p, role: "list", className: xe.list, children: e.map((L, C) => {
        const z = C === f, A = C < f, S = M(C, L);
        return /* @__PURE__ */ $(
          "li",
          {
            role: "listitem",
            className: xe.item,
            children: [
              C > 0 ? /* @__PURE__ */ r(
                "span",
                {
                  className: [
                    xe.connector,
                    A ? xe.connectorCompleted : null
                  ].filter(Boolean).join(" "),
                  "aria-hidden": "true"
                }
              ) : null,
              /* @__PURE__ */ $(
                "button",
                {
                  type: "button",
                  "data-step": C,
                  "aria-current": z ? "step" : void 0,
                  "aria-disabled": S ? "true" : void 0,
                  disabled: S,
                  tabIndex: S ? -1 : 0,
                  className: [
                    xe.step,
                    z ? xe.active : null,
                    A ? xe.completed : null,
                    S ? xe.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    S || g(C);
                  },
                  children: [
                    /* @__PURE__ */ r("span", { className: xe.circle, "aria-hidden": "true", children: A ? /* @__PURE__ */ r("span", { className: xe.check, "aria-hidden": "true", children: /* @__PURE__ */ r(C1, { name: "check", size: "sm" }) }) : L.icon ? /* @__PURE__ */ r("span", { className: xe.icon, children: L.icon }) : /* @__PURE__ */ r("span", { className: xe.number, children: C + 1 }) }),
                    /* @__PURE__ */ r("span", { className: xe.text, children: L.text })
                  ]
                }
              )
            ]
          },
          `${L.text}-${C}`
        );
      }) })
    }
  );
}
const ef = "_root_1np74_1", tf = "_horizontal_1np74_13", nf = "_vertical_1np74_17", rf = "_pane_1np74_21", lf = "_handle_1np74_31", of = "_handleHorizontal_1np74_51", af = "_handleVertical_1np74_57", sf = "_handleGrip_1np74_63", cf = "_handleCollapseHint_1np74_75", df = "_collapseBtn_1np74_79", uf = "_collapseBtnCollapsed_1np74_109", Ae = {
  root: ef,
  horizontal: tf,
  vertical: nf,
  pane: rf,
  handle: lf,
  handleHorizontal: of,
  handleVertical: af,
  handleGrip: sf,
  handleCollapseHint: cf,
  collapseBtn: df,
  collapseBtnCollapsed: uf
};
function Jt(e, t) {
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
function rt(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function U_({
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
  const i = e ?? t ?? "horizontal", u = i === "horizontal", h = G(null), b = q(() => {
    const _ = n.length;
    if (_ === 0) return [];
    const N = n.map((T) => T.size ? Jt(T.size, 100 / _) : 100 / _), V = N.reduce((T, j) => T + j, 0);
    return Math.abs(V - 100) > 0.01 && V > 0 ? N.map((T) => T / V * 100) : N;
  }, [n]), [y, x] = K(() => b()), [m, k] = K(
    () => n.map((_) => !!_.collapsed)
  ), f = G(y);
  g1(() => {
    k(n.map((_) => !!_.collapsed));
  }, [n]);
  const p = q(
    () => n.map((_) => Jt(_.min, 0)),
    [n]
  ), g = q(
    () => n.map((_) => Jt(_.max, 100)),
    [n]
  ), M = q(
    (_, N) => {
      const V = { paneIndex: _, newSize: N, cancel: !1 };
      return (l ?? s)?.(V), !V.cancel;
    },
    [l, s]
  ), v = q(
    (_, N) => {
      const V = { paneIndex: _, collapse: N, cancel: !1 };
      return (c ?? d)?.(V), !V.cancel;
    },
    [c, d]
  ), L = q(
    (_) => {
      const N = !m[_];
      v(_, N) && (N ? (f.current = [...y], k((V) => {
        const T = [...V];
        return T[_] !== void 0 && (T[_] = !0), T;
      }), x((V) => {
        const T = [...V], j = T[_] ?? 0, D = _ < T.length - 1 ? _ + 1 : _ - 1;
        if (D >= 0 && D < T.length) {
          const Y = T[D] ?? 0;
          T[D] = Y + j, T[_] = 0;
        } else
          T[_] = 0;
        return T;
      })) : (k((V) => {
        const T = [...V];
        return T[_] !== void 0 && (T[_] = !1), T;
      }), x(() => {
        const V = [...f.current];
        return V.length !== n.length ? n.map(() => 100 / n.length) : V;
      })));
    },
    [m, y, n.length, v]
  ), C = G(
    null
  ), z = q(
    (_, N, V) => {
      const T = h.current;
      if (!T) return null;
      const j = T.getBoundingClientRect();
      let D;
      if (u) {
        if (j.width === 0) return null;
        D = (N - j.left) / j.width * 100;
      } else {
        if (j.height === 0) return null;
        D = (V - j.top) / j.height * 100;
      }
      let Y = 0;
      for (let n1 = 0; n1 < _; n1++) {
        const U = y[n1];
        U !== void 0 && (Y += U);
      }
      return D - Y;
    },
    [u, y]
  ), A = (_, N) => {
    N.preventDefault();
    const V = N.currentTarget;
    V.focus(), typeof V.setPointerCapture == "function" && V.setPointerCapture(N.pointerId), C.current = { handleIndex: _, pointerId: N.pointerId };
  }, S = (_) => {
    if (!C.current || C.current.pointerId !== _.pointerId)
      return;
    _.preventDefault();
    const N = C.current.handleIndex, V = z(N, _.clientX, _.clientY);
    if (V == null) return;
    const T = p(), j = g(), D = T[N] ?? 0, Y = j[N] ?? 100, r1 = N + 1, n1 = T[r1] ?? 0, U = j[r1] ?? 100, m1 = y[N] ?? 0, d1 = y[r1] ?? 0, l1 = m1 + d1;
    if (l1 <= 0) return;
    let F = rt(V, D, Y), c1 = l1 - F;
    if (c1 < n1) {
      if (c1 = n1, F = l1 - c1, F < D || F > Y) return;
    } else if (c1 > U && (c1 = U, F = l1 - c1, F < D || F > Y))
      return;
    F = rt(F, D, Y), c1 = l1 - F, M(N, F) && x((t1) => {
      const o1 = [...t1];
      return o1[N] = F, o1[r1] = c1, o1;
    });
  }, O = (_) => {
    !C.current || C.current.pointerId !== _.pointerId || (C.current = null);
  }, w = (_, N) => {
    const V = p(), T = g(), j = _, D = _ + 1, Y = y[j] ?? 0, r1 = y[D] ?? 0, n1 = Y + r1;
    let U = 0;
    const m1 = !!n[j]?.collapsible, d1 = !!n[D]?.collapsible;
    if (u ? N.key === "ArrowLeft" ? U = -5 : N.key === "ArrowRight" && (U = 5) : N.key === "ArrowUp" ? U = -5 : N.key === "ArrowDown" && (U = 5), N.key === "Home") {
      N.preventDefault();
      let l1 = V[j] ?? 0, F = n1 - l1;
      if (F = rt(
        F,
        V[D] ?? 0,
        T[D] ?? 100
      ), l1 = n1 - F, l1 = rt(l1, V[j] ?? 0, T[j] ?? 100), !M(j, l1)) return;
      x((c1) => {
        const t1 = [...c1];
        return t1[j] = l1, t1[D] = F, t1;
      });
      return;
    }
    if (N.key === "End") {
      N.preventDefault();
      let l1 = T[j] ?? 100;
      l1 = Math.min(l1, n1 - (V[D] ?? 0));
      let F = n1 - l1;
      if (F = rt(
        F,
        V[D] ?? 0,
        T[D] ?? 100
      ), l1 = n1 - F, l1 = rt(l1, V[j] ?? 0, T[j] ?? 100), !M(j, l1)) return;
      x((c1) => {
        const t1 = [...c1];
        return t1[j] = l1, t1[D] = F, t1;
      });
      return;
    }
    if ((N.key === "Enter" || N.key === " ") && (m1 || d1)) {
      N.preventDefault(), L(m1 ? j : D);
      return;
    }
    if (U !== 0) {
      N.preventDefault();
      let l1 = Y + U, F = n1 - l1;
      const c1 = V[j] ?? 0, t1 = T[j] ?? 100, o1 = V[D] ?? 0, f1 = T[D] ?? 100;
      if (l1 = rt(l1, c1, t1), F = n1 - l1, (F < o1 || F > f1) && (F = rt(F, o1, f1), l1 = n1 - F, l1 = rt(l1, c1, t1), F = n1 - l1), !M(j, l1)) return;
      x((y1) => {
        const N1 = [...y1];
        return N1[j] = l1, N1[D] = F, N1;
      });
    }
  };
  return /* @__PURE__ */ r(
    "div",
    {
      ref: h,
      className: [
        Ae.root,
        u ? Ae.horizontal : Ae.vertical,
        a
      ].filter(Boolean).join(" "),
      "aria-label": o,
      children: n.map((_, N) => {
        const V = !!m[N], T = V ? 0 : y[N] ?? 100 / n.length, j = V ? { display: "none" } : u ? {
          flexBasis: `${T}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        } : {
          flexBasis: `${T}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        }, D = Jt(_.min, 0), Y = Jt(_.max, 100), r1 = N < n.length - 1, n1 = !!n[N + 1]?.collapsible;
        return /* @__PURE__ */ $("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ $(
            "div",
            {
              role: "group",
              "aria-label": _.label ?? `Pane ${N + 1}`,
              className: Ae.pane,
              style: j,
              "data-collapsed": V ? "true" : void 0,
              children: [
                V ? null : _.children,
                _.collapsible && !V ? /* @__PURE__ */ r(
                  "button",
                  {
                    type: "button",
                    className: Ae.collapseBtn,
                    "aria-label": `Collapse pane ${N + 1}`,
                    "aria-expanded": !V,
                    onClick: () => L(N),
                    children: u ? "◀" : "▲"
                  }
                ) : null,
                _.collapsible && V ? /* @__PURE__ */ r(
                  "button",
                  {
                    type: "button",
                    className: Ae.collapseBtn,
                    "aria-label": `Expand pane ${N + 1}`,
                    "aria-expanded": !V,
                    onClick: () => L(N),
                    children: u ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          V && _.collapsible ? (
            // when collapsed we already rendered expand button inside pane, but pane is display none, so render expand button outside?
            // Actually we hide pane with display none, need visible expand button
            // So render alternative expand button adjacent
            /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                className: Ae.collapseBtnCollapsed,
                "aria-label": `Expand pane ${N + 1}`,
                "aria-expanded": "false",
                onClick: () => L(N),
                children: u ? "▶" : "▼"
              }
            )
          ) : null,
          r1 ? /* @__PURE__ */ $(
            "div",
            {
              role: "separator",
              "aria-orientation": i,
              "aria-valuemin": D,
              "aria-valuemax": Y,
              "aria-valuenow": Math.round(T),
              "aria-label": `Resize handle ${N + 1}`,
              tabIndex: V || m[N + 1] ? -1 : 0,
              className: [
                Ae.handle,
                u ? Ae.handleHorizontal : Ae.handleVertical
              ].filter(Boolean).join(" "),
              onPointerDown: (U) => A(N, U),
              onPointerMove: S,
              onPointerUp: O,
              onKeyDown: (U) => w(N, U),
              children: [
                /* @__PURE__ */ r("span", { className: Ae.handleGrip, "aria-hidden": "true" }),
                (_.collapsible || n1) && /* @__PURE__ */ r(
                  "span",
                  {
                    className: Ae.handleCollapseHint,
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
const hf = "_root_wurjl_1", ff = "_list_wurjl_5", pf = "_vertical_wurjl_14", mf = "_horizontal_wurjl_20", _f = "_item_wurjl_28", gf = "_link_wurjl_32", vf = "_active_wurjl_57", Vt = {
  root: hf,
  list: ff,
  vertical: pf,
  horizontal: mf,
  item: _f,
  link: gf,
  active: vf
};
function X_({
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
  const i = t ?? n, u = l ?? s ?? "vertical", [h, b] = K(
    () => e[0]?.selector ?? null
  ), y = G(h);
  y.current = h;
  const x = q(
    (m, k) => {
      if (b(m.selector), (c ?? d)?.({ text: m.text, selector: m.selector }), k) {
        try {
          k.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        } catch {
          k.scrollIntoView();
        }
        const p = k;
        p.getAttribute("tabindex") == null && p.tabIndex === -1 || p.tabIndex < 0 ? (p.getAttribute("tabindex"), p.setAttribute("tabindex", "-1"), p.focus({ preventScroll: !0 })) : p.focus({ preventScroll: !0 });
      }
    },
    [c, d]
  );
  return g1(() => {
    if (e.length === 0) return;
    const k = (() => {
      if (i) {
        const v = document.querySelector(i);
        if (v) return v;
      }
      return window;
    })();
    let f = null;
    const p = /* @__PURE__ */ new Map(), g = () => {
      let v = null, L = null;
      for (const z of e) {
        const A = document.querySelector(z.selector);
        if (!A) continue;
        p.set(z.selector, A);
        const S = A.getBoundingClientRect();
        let O = S.top;
        if (k !== window) {
          const w = k.getBoundingClientRect();
          O = S.top - w.top;
        }
        O <= 80 ? (!L || O > L.el.getBoundingClientRect().top - (k !== window ? k.getBoundingClientRect().top : 0)) && (L = { sel: z.selector, el: A }) : (!v || O < v.top) && (v = { sel: z.selector, top: O });
      }
      const C = L?.sel ?? v?.sel ?? e[0]?.selector ?? null;
      C && C !== y.current && b(C);
    }, M = () => {
      g();
    };
    if (typeof IntersectionObserver < "u") {
      const v = k === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
        root: k,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      };
      f = new IntersectionObserver((L) => {
        const C = L.filter((z) => z.isIntersecting).sort((z, A) => z.boundingClientRect.top - A.boundingClientRect.top);
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
          g();
      }, v);
      for (const L of e) {
        const C = document.querySelector(L.selector);
        C && (f.observe(C), p.set(L.selector, C));
      }
    }
    return k === window ? (window.addEventListener("scroll", M, { passive: !0 }), g(), () => {
      window.removeEventListener("scroll", M), f?.disconnect();
    }) : (k.addEventListener("scroll", M, {
      passive: !0
    }), g(), () => {
      k.removeEventListener("scroll", M), f?.disconnect();
    });
  }, [e, i]), /* @__PURE__ */ r(
    "nav",
    {
      "aria-label": o,
      className: [Vt.root, Vt[u], a].filter(Boolean).join(" "),
      children: /* @__PURE__ */ r("ol", { className: Vt.list, children: e.map((m) => {
        const k = m.selector === h;
        return /* @__PURE__ */ r("li", { className: Vt.item, children: /* @__PURE__ */ r(
          "a",
          {
            href: m.selector.startsWith("#") || m.selector.startsWith(".") ? m.selector : `#${m.selector}`,
            className: [Vt.link, k ? Vt.active : null].filter(Boolean).join(" "),
            "aria-current": k ? "location" : void 0,
            onClick: (f) => {
              f.preventDefault();
              const p = document.querySelector(m.selector);
              x(m, p);
            },
            children: m.text
          }
        ) }, `${m.text}-${m.selector}`);
      }) })
    }
  );
}
const kf = "_root_u1med_1", xf = "_viewport_u1med_17", yf = "_slide_u1med_24", bf = "_active_u1med_33", Mf = "_arrow_u1med_37", Cf = "_prev_u1med_71", wf = "_next_u1med_75", zf = "_pauseBtn_u1med_79", Lf = "_indicators_u1med_110", $f = "_indicator_u1med_110", Nf = "_indicatorActive_u1med_145", He = {
  root: kf,
  viewport: xf,
  slide: yf,
  active: bf,
  arrow: Mf,
  prev: Cf,
  next: wf,
  pauseBtn: zf,
  indicators: Lf,
  indicator: $f,
  indicatorActive: Nf
};
function G_({
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
  showArrows: u,
  ShowArrows: h,
  showIndicators: b,
  ShowIndicators: y,
  onChange: x,
  Change: m,
  ariaLabel: k = "Carousel",
  className: f
}) {
  const p = t ?? n, g = p !== void 0, [M, v] = K(() => Math.min(Math.max(0, p ?? l), Math.max(0, e.length - 1))), L = g ? p : M, C = e.length === 0 ? 0 : Math.min(Math.max(0, L), e.length - 1), z = s ?? c ?? !1, A = d ?? o ?? 3e3, S = a ?? i ?? !0, O = u ?? h ?? !0, w = b ?? y ?? !0, [_, N] = K(!1), [V, T] = K(!1), j = _ || V, D = G(null), Y = q1(), r1 = q(
    (o1) => {
      const f1 = e.length === 0 ? 0 : (o1 % e.length + e.length) % e.length;
      g || v(f1), (x ?? m)?.(f1);
    },
    [g, x, m, e.length]
  ), n1 = q(() => {
    r1(C - 1);
  }, [r1, C]), U = q(() => {
    r1(C + 1);
  }, [r1, C]), m1 = q(
    (o1) => {
      r1(o1);
    },
    [r1]
  );
  g1(() => {
    if (!z || j || e.length <= 1) return;
    const o1 = setInterval(() => {
      r1(C + 1);
    }, A);
    return () => clearInterval(o1);
  }, [z, j, A, C, r1, e.length]);
  const d1 = (o1) => {
    e.length !== 0 && (o1.key === "ArrowLeft" ? (o1.preventDefault(), n1()) : o1.key === "ArrowRight" ? (o1.preventDefault(), U()) : o1.key === "Home" ? (o1.preventDefault(), m1(0)) : o1.key === "End" && (o1.preventDefault(), m1(e.length - 1)));
  }, l1 = () => {
    S && z && T(!0);
  }, F = () => {
    S && z && T(!1);
  }, c1 = () => {
    S && z && T(!0);
  }, t1 = () => {
    S && z && T(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ $(
    "div",
    {
      ref: D,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": k,
      tabIndex: 0,
      className: [He.root, f].filter(Boolean).join(" "),
      onKeyDown: d1,
      onMouseEnter: l1,
      onMouseLeave: F,
      onFocusCapture: c1,
      onBlurCapture: t1,
      children: [
        /* @__PURE__ */ r("div", { id: Y, className: He.viewport, children: e.map((o1, f1) => {
          const y1 = f1 === C;
          return /* @__PURE__ */ r(
            "div",
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `Slide ${f1 + 1} of ${e.length}`,
              "aria-hidden": y1 ? void 0 : !0,
              hidden: !y1,
              className: [He.slide, y1 ? He.active : null].filter(Boolean).join(" "),
              children: o1
            },
            f1
          );
        }) }),
        O && e.length > 1 ? /* @__PURE__ */ $(b1, { children: [
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: [He.arrow, He.prev].filter(Boolean).join(" "),
              "aria-label": "Previous slide",
              "aria-controls": Y,
              onClick: n1,
              children: "‹"
            }
          ),
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: [He.arrow, He.next].filter(Boolean).join(" "),
              "aria-label": "Next slide",
              "aria-controls": Y,
              onClick: U,
              children: "›"
            }
          )
        ] }) : null,
        z ? /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: He.pauseBtn,
            "aria-label": _ ? "Resume" : "Pause",
            "aria-pressed": _,
            onClick: () => N((o1) => !o1),
            children: _ ? "▶" : "⏸"
          }
        ) : null,
        w && e.length > 1 ? /* @__PURE__ */ r(
          "div",
          {
            className: He.indicators,
            role: "group",
            "aria-label": "Slide indicators",
            children: e.map((o1, f1) => {
              const y1 = f1 === C;
              return /* @__PURE__ */ r(
                "button",
                {
                  type: "button",
                  className: [
                    He.indicator,
                    y1 ? He.indicatorActive : null
                  ].filter(Boolean).join(" "),
                  "aria-label": `Go to slide ${f1 + 1}`,
                  "aria-current": y1 ? "true" : void 0,
                  "aria-controls": Y,
                  onClick: () => m1(f1)
                },
                f1
              );
            })
          }
        ) : null
      ]
    }
  );
}
const Sf = "_root_xvqqt_1", Of = "_group_xvqqt_20", Af = "_itemWrapper_xvqqt_30", Hf = "_treeitem_xvqqt_34", jf = "_disabled_xvqqt_50", Vf = "_selected_xvqqt_60", Tf = "_caret_xvqqt_66", Df = "_caretIcon_xvqqt_113", Ef = "_caretOpen_xvqqt_120", qf = "_caretPlaceholder_xvqqt_124", If = "_label_xvqqt_130", Pf = "_loading_xvqqt_137", Rf = "_loadingRow_xvqqt_143", Bf = "_empty_xvqqt_149", Ff = "_checkbox_xvqqt_155", ce = {
  root: Sf,
  group: Of,
  itemWrapper: Af,
  treeitem: Hf,
  disabled: jf,
  selected: Vf,
  caret: Tf,
  caretIcon: Df,
  caretOpen: Ef,
  caretPlaceholder: qf,
  label: If,
  loading: Pf,
  loadingRow: Rf,
  empty: Bf,
  checkbox: Ff
};
function Kf({
  indeterminate: e,
  ...t
}) {
  const n = G(null);
  return g1(() => {
    n.current && (n.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ r("input", { ref: n, type: "checkbox", ...t });
}
function Y_({
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
  selectedItem: u,
  SelectedItem: h,
  selectedItems: b,
  SelectedItems: y,
  defaultSelectedItem: x,
  defaultSelectedItems: m,
  onChange: k,
  Change: f,
  onExpand: p,
  Expand: g,
  onCollapse: M,
  Collapse: v,
  loadChildData: L,
  LoadChildData: C,
  template: z,
  Template: A,
  itemTemplate: S,
  ItemTemplate: O,
  ariaLabel: w,
  AriaLabel: _,
  allowCheckBoxes: N = !1,
  checkedKeys: V,
  defaultCheckedKeys: T,
  onCheckedChange: j,
  allowCheckChildren: D = !0,
  className: Y
}) {
  const r1 = e ?? t ?? [], n1 = n ?? l, U = s ?? c ?? "text", m1 = d ?? o ?? "id", d1 = a ?? i ?? "single", l1 = w ?? _ ?? "Tree", F = L ?? C, c1 = z ?? A ?? S ?? O, t1 = q(
    (R) => {
      const Z = R[m1];
      return Z != null ? String(Z) : String(R.id ?? "");
    },
    [m1]
  ), o1 = q(
    (R) => {
      const Z = R[U];
      if (Z != null) return String(Z);
      const e1 = R.text;
      return e1 != null ? String(e1) : "";
    },
    [U]
  ), f1 = q(
    (R) => {
      if (n1) {
        const e1 = n1(R);
        if (e1 !== void 0) return e1;
      }
      const Z = R.children;
      if (Array.isArray(Z)) return Z;
    },
    [n1]
  ), y1 = q(
    (R) => {
      const Z = /* @__PURE__ */ new Set(), e1 = (_1) => {
        for (const h1 of _1) {
          const x1 = t1(h1);
          h1.expanded && Z.add(x1);
          const H1 = f1(h1);
          H1 && H1.length > 0 && e1(H1);
        }
      };
      return e1(R), Z;
    },
    [t1, f1]
  ), [N1, D1] = K(
    () => y1(r1)
  ), [M1, V1] = K(
    () => /* @__PURE__ */ new Map()
  ), [$1, re] = K(() => /* @__PURE__ */ new Set()), le = u ?? h, B1 = b ?? y, Me = d1 === "multiple" ? B1 !== void 0 : le !== void 0, W = q(() => {
    if (d1 === "multiple") {
      if (m && m.length > 0)
        return new Set(m.map((e1) => t1(e1)));
      const R = /* @__PURE__ */ new Set(), Z = (e1) => {
        for (const _1 of e1) {
          _1.selected && R.add(t1(_1));
          const h1 = f1(_1);
          h1 && Z(h1);
        }
      };
      return Z(r1), R;
    } else {
      if (x) return /* @__PURE__ */ new Set([t1(x)]);
      let R = null;
      const Z = (e1) => {
        for (const _1 of e1) {
          if (_1.selected)
            return R = t1(_1), !0;
          const h1 = f1(_1);
          if (h1 && Z(h1)) return !0;
        }
        return !1;
      };
      return Z(r1), R ? /* @__PURE__ */ new Set([R]) : /* @__PURE__ */ new Set();
    }
  }, [
    d1,
    x,
    m,
    t1,
    f1,
    r1
  ]), [H, P] = K(
    () => W()
  ), Q = v1(() => {
    if (d1 === "multiple") {
      if (B1 !== void 0) {
        const R = B1;
        return R ? new Set(R.map((Z) => t1(Z))) : /* @__PURE__ */ new Set();
      }
      return H;
    } else {
      if (le !== void 0) {
        const R = le;
        return R ? /* @__PURE__ */ new Set([t1(R)]) : /* @__PURE__ */ new Set();
      }
      return H;
    }
  }, [
    d1,
    B1,
    le,
    H,
    t1
  ]), u1 = q(
    (R) => {
      let Z;
      const e1 = (_1) => {
        for (const h1 of _1) {
          if (t1(h1) === R)
            return Z = h1, !0;
          const H1 = M1.get(t1(h1)) ?? f1(h1);
          if (H1 && e1(H1)) return !0;
        }
        return !1;
      };
      if (e1(r1), !Z) {
        for (const _1 of M1.values())
          if (e1(_1)) break;
      }
      return Z;
    },
    [r1, M1, t1, f1]
  ), J = q(() => {
    const R = /* @__PURE__ */ new Map(), Z = (e1) => {
      for (const _1 of e1) {
        const h1 = t1(_1);
        R.set(h1, _1);
        const H1 = M1.get(h1) ?? f1(_1);
        H1 && Z(H1);
      }
    };
    return Z(r1), R;
  }, [r1, M1, t1, f1]), k1 = q(
    (R) => {
      const Z = t1(R);
      if (!R.disabled)
        if (d1 === "multiple") {
          const _1 = new Set(Q);
          _1.has(Z) ? _1.delete(Z) : _1.add(Z), Me || P(_1);
          const h1 = k ?? f;
          if (h1) {
            const x1 = J(), H1 = [];
            for (const A1 of _1) {
              const Y1 = x1.get(A1) ?? u1(A1);
              Y1 && H1.push(Y1);
            }
            h1({ item: R, selectedItems: H1 });
          }
        } else if (!Q.has(Z) || Q.size !== 1 || !Q.has(Z)) {
          Me || P(/* @__PURE__ */ new Set([Z]));
          const h1 = k ?? f;
          h1 && h1({ item: R, selectedItem: R });
        } else {
          const h1 = k ?? f;
          h1 && h1({ item: R, selectedItem: R });
        }
    },
    [
      t1,
      d1,
      Q,
      Me,
      k,
      f,
      J,
      u1
    ]
  ), O1 = q(
    async (R) => {
      const Z = t1(R);
      if (!!R.disabled) return;
      const _1 = N1.has(Z), h1 = p ?? g, x1 = M ?? v, H1 = f1(R), Y1 = M1.get(Z) ?? H1, he = !(Y1 !== void 0 && Y1.length > 0) && F != null;
      if (_1) {
        D1((ne) => {
          const J1 = new Set(ne);
          return J1.delete(Z), J1;
        }), x1?.({ item: R });
        return;
      }
      if (he) {
        if ($1.has(Z)) return;
        re((ne) => {
          const J1 = new Set(ne);
          return J1.add(Z), J1;
        });
        try {
          const J1 = await F(R);
          V1((Pe) => {
            const Te = new Map(Pe);
            return Te.set(Z, J1), Te;
          }), D1((Pe) => {
            const Te = new Set(Pe);
            return Te.add(Z), Te;
          }), h1?.({ item: R });
        } catch {
        } finally {
          re((ne) => {
            const J1 = new Set(ne);
            return J1.delete(Z), J1;
          });
        }
        return;
      }
      D1((ne) => {
        const J1 = new Set(ne);
        return J1.add(Z), J1;
      }), h1?.({ item: R });
    },
    [
      t1,
      N1,
      f1,
      M1,
      F,
      $1,
      p,
      g,
      M,
      v
    ]
  ), E1 = v1(() => {
    const R = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), e1 = /* @__PURE__ */ new Set(), _1 = (h1, x1) => {
      for (const H1 of h1) {
        const A1 = t1(H1);
        R.has(A1) || R.set(A1, []), Z.set(A1, x1), H1.disabled && e1.add(A1);
        const te = M1.get(A1) ?? f1(H1);
        te && te.length > 0 && (R.set(
          A1,
          te.map((he) => t1(he))
        ), _1(te, A1));
      }
    };
    return _1(r1, null), { childrenOf: R, parentOf: Z, disabledKeys: e1 };
  }, [r1, M1, t1, f1]), G1 = q(
    (R) => {
      const Z = [], e1 = [...E1.childrenOf.get(R) ?? []];
      for (; e1.length > 0; ) {
        const _1 = e1.pop();
        Z.push(_1), e1.push(...E1.childrenOf.get(_1) ?? []);
      }
      return Z;
    },
    [E1]
  ), [ue, pt] = K(
    () => new Set(T ?? [])
  ), X = V !== void 0 ? new Set(V) : ue, L1 = q(
    (R) => {
      const Z = E1.disabledKeys;
      return G1(R).filter((e1) => !Z.has(e1));
    },
    [G1, E1]
  ), ee = q(
    (R) => {
      if (X.has(R)) return !0;
      if (!N || !D) return !1;
      const Z = L1(R);
      return Z.length > 0 && Z.every((e1) => X.has(e1));
    },
    [X, N, D, L1]
  ), Se = q(
    (R) => {
      if (!N || !D || X.has(R))
        return !1;
      const Z = L1(R);
      if (Z.length === 0) return !1;
      const e1 = Z.filter((_1) => X.has(_1)).length;
      return e1 > 0 && e1 < Z.length;
    },
    [X, N, D, L1]
  ), Ce = q(
    (R) => {
      if (!N || R.disabled) return;
      const Z = t1(R), e1 = new Set(X);
      if (e1.has(Z) || ee(Z)) {
        if (e1.delete(Z), D)
          for (const _1 of L1(Z)) e1.delete(_1);
      } else if (e1.add(Z), D)
        for (const _1 of L1(Z)) e1.add(_1);
      V === void 0 && pt(e1), j?.([...e1]);
    },
    [
      N,
      D,
      V,
      X,
      L1,
      t1,
      ee,
      j
    ]
  ), w1 = v1(() => {
    const R = [], Z = (e1, _1, h1) => {
      e1.forEach((x1, H1) => {
        const A1 = t1(x1), Y1 = o1(x1), te = M1.get(A1) ?? f1(x1);
        let he;
        M1.has(A1) ? he = M1.get(A1).length > 0 : te !== void 0 ? he = te.length > 0 : F ? he = !0 : he = !1;
        const ne = N1.has(A1), J1 = !!x1.disabled, Pe = e1.length, Te = H1 + 1;
        if (R.push({
          item: x1,
          key: A1,
          text: Y1,
          level: _1,
          posInSet: Te,
          setSize: Pe,
          hasChildren: he,
          expanded: ne,
          parentKey: h1,
          disabled: J1
        }), he && ne) {
          const Re = M1.get(A1) ?? te;
          Re && Re.length > 0 && Z(Re, _1 + 1, A1);
        }
      });
    };
    return Z(r1, 1, null), R;
  }, [
    r1,
    t1,
    o1,
    f1,
    M1,
    N1,
    F,
    $1
  ]), [F1, ae] = K(
    () => w1[0]?.key ?? null
  ), K1 = G(""), Ge = G(null), B = G(null);
  g1(() => {
    if (!F1 && w1.length > 0) {
      const R = w1[0];
      R && ae(R.key);
    } else if (F1 && !w1.some((R) => R.key === F1)) {
      const R = w1[0];
      ae(R ? R.key : null);
    }
  }, [w1, F1]), g1(() => {
    if (F1) {
      const R = B.current?.querySelector(
        `[data-key="${CSS.escape(F1)}"]`
      );
      let Z = null;
      R || (Z = B.current?.querySelector(
        `[data-key="${F1}"]`
      ) ?? null);
      const e1 = R ?? Z;
      e1 && document.activeElement !== e1 && B.current?.contains(document.activeElement) && e1.focus();
    }
  }, [F1]);
  const a1 = q((R) => {
    ae(R), requestAnimationFrame(() => {
      const Z = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(R) : R;
      let e1 = B.current?.querySelector(
        `[data-key="${Z}"]`
      );
      e1 || (e1 = B.current?.querySelector(`[data-key="${R}"]`) ?? null), e1?.focus();
    });
  }, []), j1 = q(
    (R) => w1.find((e1) => e1.key === R)?.parentKey ?? null,
    [w1]
  ), I1 = q(
    (R) => {
      if (w1.length === 0) return;
      const Z = F1 ? w1.findIndex((h1) => h1.key === F1) : -1, e1 = Z >= 0 ? w1[Z] : void 0;
      let _1 = null;
      if (R.key === "ArrowDown") {
        if (R.preventDefault(), Z === -1)
          _1 = w1[0]?.key ?? null;
        else {
          const h1 = (Z + 1) % w1.length, x1 = w1[h1];
          x1 && (_1 = x1.key);
        }
        _1 && a1(_1);
        return;
      }
      if (R.key === "ArrowUp") {
        if (R.preventDefault(), Z === -1) {
          const h1 = w1[w1.length - 1];
          h1 && (_1 = h1.key);
        } else {
          const h1 = (Z - 1 + w1.length) % w1.length, x1 = w1[h1];
          x1 && (_1 = x1.key);
        }
        _1 && a1(_1);
        return;
      }
      if (R.key === "ArrowRight") {
        if (R.preventDefault(), !e1) return;
        if (e1.hasChildren && !e1.expanded)
          O1(e1.item);
        else if (e1.hasChildren && e1.expanded) {
          const h1 = Z + 1, x1 = w1[h1];
          x1 && x1.parentKey === e1.key && a1(x1.key);
        }
        return;
      }
      if (R.key === "ArrowLeft") {
        if (R.preventDefault(), !e1) return;
        if (e1.hasChildren && e1.expanded)
          O1(e1.item);
        else {
          const h1 = j1(e1.key);
          h1 && a1(h1);
        }
        return;
      }
      if (R.key === "Home") {
        R.preventDefault();
        const h1 = w1[0];
        h1 && a1(h1.key);
        return;
      }
      if (R.key === "End") {
        R.preventDefault();
        const h1 = w1[w1.length - 1];
        h1 && a1(h1.key);
        return;
      }
      if (R.key === "Enter" || R.key === " ") {
        if (R.key === " " && R.target?.tagName === "INPUT" || (R.preventDefault(), !e1)) return;
        if (R.key === " " && N) {
          const h1 = u1(e1.key);
          h1 && Ce(h1);
          return;
        }
        k1(e1.item);
        return;
      }
      if (R.key.length === 1 && /^[a-zA-Z0-9]$/.test(R.key)) {
        R.preventDefault();
        const h1 = (K1.current + R.key).toLowerCase();
        K1.current = h1, Ge.current && clearTimeout(Ge.current), Ge.current = setTimeout(() => {
          K1.current = "";
        }, 500);
        const x1 = Z >= 0 ? Z + 1 : 0, Y1 = [...w1, ...w1].slice(x1, x1 + w1.length).find((te) => te.text.toLowerCase().startsWith(h1));
        Y1 && a1(Y1.key);
        return;
      }
    },
    [
      w1,
      F1,
      a1,
      O1,
      k1,
      j1,
      N,
      Ce
    ]
  ), se = q(() => {
    if (!F1 && w1.length > 0) {
      const R = w1[0];
      R && ae(R.key);
    }
  }, [F1, w1]), Ve = (R, Z, e1) => /* @__PURE__ */ r("ul", { role: "group", className: ce.group, children: R.map((_1, h1) => {
    const x1 = t1(_1), H1 = o1(_1), A1 = M1.get(x1) ?? f1(_1);
    let Y1;
    M1.has(x1) ? Y1 = M1.get(x1).length > 0 : A1 !== void 0 ? Y1 = A1.length > 0 : F ? Y1 = !0 : Y1 = !1;
    const te = N1.has(x1), he = Q.has(x1), ne = !!_1.disabled, J1 = $1.has(x1), Pe = F1 === x1, Te = R.length, Re = h1 + 1, l0 = c1 ? c1(_1) : H1, It = N ? {
      checked: ee(x1),
      indeterminate: Se(x1)
    } : null;
    return /* @__PURE__ */ $("li", { role: "none", className: ce.itemWrapper, children: [
      /* @__PURE__ */ $(
        "div",
        {
          role: "treeitem",
          "data-key": x1,
          tabIndex: Pe ? 0 : -1,
          "aria-expanded": Y1 ? te : void 0,
          "aria-selected": he,
          "aria-level": Z,
          "aria-setsize": Te,
          "aria-posinset": Re,
          "aria-disabled": ne || void 0,
          "aria-busy": J1 || void 0,
          className: [
            ce.treeitem,
            he ? ce.selected : null,
            ne ? ce.disabled : null,
            Pe ? ce.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            a1(x1), ne || k1(_1);
          },
          onFocus: () => ae(x1),
          children: [
            N ? /* @__PURE__ */ r(
              Kf,
              {
                className: ce.checkbox,
                checked: It?.checked ?? !1,
                indeterminate: It?.indeterminate ?? !1,
                disabled: ne,
                "aria-label": `Select ${H1}`,
                onClick: (mt) => mt.stopPropagation(),
                onChange: () => Ce(_1)
              }
            ) : null,
            Y1 ? /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                className: ce.caret,
                "aria-label": `${te ? "Collapse" : "Expand"} ${H1}`,
                "aria-expanded": te,
                tabIndex: -1,
                disabled: ne,
                onClick: (mt) => {
                  mt.stopPropagation(), a1(x1), O1(_1);
                },
                children: /* @__PURE__ */ r(
                  "span",
                  {
                    "aria-hidden": "true",
                    className: [
                      ce.caretIcon,
                      te ? ce.caretOpen : null
                    ].filter(Boolean).join(" "),
                    children: /* @__PURE__ */ r(C1, { name: "chevron-right", size: 10 })
                  }
                )
              }
            ) : /* @__PURE__ */ r(
              "span",
              {
                className: ce.caretPlaceholder,
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ r("span", { className: ce.label, children: l0 }),
            J1 ? /* @__PURE__ */ r("span", { className: ce.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      Y1 && te ? J1 ? /* @__PURE__ */ r("div", { className: ce.loadingRow, "aria-busy": "true", children: "Loading…" }) : A1 && A1.length > 0 ? Ve(A1, Z + 1) : M1.has(x1) && M1.get(x1).length > 0 ? Ve(
        M1.get(x1),
        Z + 1
      ) : (A1 && A1.length === 0, null) : null
    ] }, x1);
  }) });
  return /* @__PURE__ */ r(
    "div",
    {
      ref: B,
      role: "tree",
      "aria-label": l1,
      "aria-multiselectable": d1 === "multiple" || void 0,
      tabIndex: 0,
      className: [ce.root, Y].filter(Boolean).join(" "),
      onKeyDown: I1,
      onFocus: se,
      children: r1.length === 0 ? /* @__PURE__ */ r("div", { className: ce.empty, children: "No items" }) : Ve(r1, 1)
    }
  );
}
const Wf = "_root_1plfv_1", Zf = "_panel_1plfv_8", Uf = "_header_1plfv_19", Xf = "_listbox_1plfv_28", Gf = "_option_1plfv_42", Yf = "_disabled_1plfv_57", Jf = "_active_1plfv_66", Qf = "_selected_1plfv_70", ep = "_empty_1plfv_86", tp = "_controls_1plfv_93", np = "_reorder_1plfv_102", rp = "_btn_1plfv_110", T1 = {
  root: Wf,
  panel: Zf,
  header: Uf,
  listbox: Xf,
  option: Gf,
  disabled: Yf,
  active: Jf,
  selected: Qf,
  empty: ep,
  controls: tp,
  reorder: np,
  btn: rp
};
function ie(e, t) {
  const n = e[t];
  return n != null ? String(n) : String(e.id ?? "");
}
function f0(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function J_({
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
  onSourceChange: u,
  SourceChange: h,
  onTargetChange: b,
  TargetChange: y,
  keyProperty: x,
  KeyProperty: m,
  onMove: k,
  Move: f,
  ariaLabel: p,
  AriaLabel: g,
  className: M
}) {
  const v = x ?? m ?? "id", L = p ?? g ?? "PickList", C = e ?? t ?? s ?? c ?? a ?? i ?? [], z = n ?? l ?? d ?? o ?? [], [A, S] = K(() => [
    ...C
  ]), [O, w] = K(() => [
    ...z
  ]);
  g1(() => {
    const H = e ?? t ?? s ?? c ?? a ?? i;
    H !== void 0 && S([...H]);
  }, [e, t, s, c, a, i]), g1(() => {
    const H = n ?? l ?? d ?? o;
    H !== void 0 && w([...H]);
  }, [n, l, d, o]);
  const [_, N] = K(
    () => /* @__PURE__ */ new Set()
  ), [V, T] = K(
    () => /* @__PURE__ */ new Set()
  ), [j, D] = K(() => {
    const H = C.findIndex((P) => !P.disabled);
    return H >= 0 ? H : 0;
  }), [Y, r1] = K(() => {
    const H = z.findIndex((P) => !P.disabled);
    return H >= 0 ? H : 0;
  }), n1 = v1(
    () => A.map((H, P) => H.disabled ? -1 : P).filter((H) => H >= 0),
    [A]
  ), U = v1(
    () => O.map((H, P) => H.disabled ? -1 : P).filter((H) => H >= 0),
    [O]
  );
  g1(() => {
    if (j >= A.length) {
      const H = n1[n1.length - 1];
      D(H ?? 0);
    } else if (A.length > 0 && n1.length > 0 && !n1.includes(j)) {
      const H = n1[0];
      H !== void 0 && D(H);
    }
  }, [j, A.length, n1]), g1(() => {
    if (Y >= O.length) {
      const H = U[U.length - 1];
      r1(H ?? 0);
    } else if (O.length > 0 && U.length > 0 && !U.includes(Y)) {
      const H = U[0];
      H !== void 0 && r1(H);
    }
  }, [Y, O.length, U]), g1(() => {
    N((H) => {
      const P = /* @__PURE__ */ new Set();
      for (const Q of H)
        A.some(
          (J) => ie(J, v) === Q && !J.disabled
        ) && P.add(Q);
      return P;
    });
  }, [A, v]), g1(() => {
    T((H) => {
      const P = /* @__PURE__ */ new Set();
      for (const Q of H)
        O.some(
          (J) => ie(J, v) === Q && !J.disabled
        ) && P.add(Q);
      return P;
    });
  }, [O, v]);
  const m1 = q(
    (H) => {
      (u ?? h)?.(H);
    },
    [u, h]
  ), d1 = q(
    (H) => {
      (b ?? y)?.(H);
    },
    [b, y]
  ), l1 = q(
    (H) => {
      (k ?? f)?.(H);
    },
    [k, f]
  ), F = q(
    (H) => {
      const P = A[H];
      if (!P || P.disabled) return;
      const Q = ie(P, v);
      N((u1) => {
        const J = new Set(u1);
        return J.has(Q) ? J.delete(Q) : J.add(Q), J;
      }), D(H);
    },
    [A, v]
  ), c1 = q(
    (H) => {
      const P = O[H];
      if (!P || P.disabled) return;
      const Q = ie(P, v);
      T((u1) => {
        const J = new Set(u1);
        return J.has(Q) ? J.delete(Q) : J.add(Q), J;
      }), r1(H);
    },
    [O, v]
  ), t1 = q(() => {
    const H = [], P = [];
    for (const k1 of A) {
      const O1 = ie(k1, v);
      _.has(O1) && !k1.disabled ? H.push(k1) : P.push(k1);
    }
    if (H.length === 0) return;
    const Q = P, u1 = [...O, ...H];
    S(Q), w(u1), N(/* @__PURE__ */ new Set());
    const J = new Set(H.map((k1) => ie(k1, v)));
    T(J), m1(Q), d1(u1), l1({
      source: Q,
      target: u1,
      moved: H,
      direction: "toTarget"
    });
  }, [
    A,
    O,
    _,
    v,
    m1,
    d1,
    l1
  ]), o1 = q(() => {
    const H = [], P = [];
    for (const k1 of O) {
      const O1 = ie(k1, v);
      V.has(O1) && !k1.disabled ? H.push(k1) : P.push(k1);
    }
    if (H.length === 0) return;
    const Q = P, u1 = [...A, ...H];
    w(Q), S(u1), T(/* @__PURE__ */ new Set());
    const J = new Set(H.map((k1) => ie(k1, v)));
    N(J), m1(u1), d1(Q), l1({
      source: u1,
      target: Q,
      moved: H,
      direction: "toSource"
    });
  }, [
    A,
    O,
    V,
    v,
    m1,
    d1,
    l1
  ]), f1 = q(() => {
    const H = A.filter((u1) => !u1.disabled);
    if (H.length === 0) return;
    const P = A.filter((u1) => !!u1.disabled), Q = [...O, ...H];
    S(P), w(Q), N(/* @__PURE__ */ new Set()), m1(P), d1(Q), l1({
      source: P,
      target: Q,
      moved: H,
      direction: "allToTarget"
    });
  }, [
    A,
    O,
    v,
    m1,
    d1,
    l1
  ]), y1 = q(() => {
    const H = O.filter((u1) => !u1.disabled);
    if (H.length === 0) return;
    const P = O.filter((u1) => !!u1.disabled), Q = [...A, ...H];
    w(P), S(Q), T(/* @__PURE__ */ new Set()), m1(Q), d1(P), l1({
      source: Q,
      target: P,
      moved: H,
      direction: "allToSource"
    });
  }, [A, O, m1, d1, l1]), N1 = q(() => {
    if (V.size === 0) return;
    const H = [...O], P = V, Q = [];
    for (let J = 1; J < H.length; J++) {
      const k1 = H[J], O1 = H[J - 1];
      if (!k1 || !O1) continue;
      const E1 = ie(k1, v), G1 = ie(O1, v);
      P.has(E1) && !P.has(G1) && !k1.disabled && !O1.disabled && (H[J - 1] = k1, H[J] = O1, Q.push(k1));
    }
    if (Q.length === 0) return;
    w(H), d1(H), l1({ source: A, target: H, moved: Q, direction: "up" });
    const u1 = Array.from(P)[0];
    if (u1) {
      const J = H.findIndex(
        (k1) => ie(k1, v) === u1
      );
      J >= 0 && r1(J);
    }
  }, [
    O,
    V,
    v,
    A,
    d1,
    l1
  ]), D1 = q(() => {
    if (V.size === 0) return;
    const H = [...O], P = V, Q = [];
    for (let J = H.length - 2; J >= 0; J--) {
      const k1 = H[J], O1 = H[J + 1];
      if (!k1 || !O1) continue;
      const E1 = ie(k1, v), G1 = ie(O1, v);
      P.has(E1) && !P.has(G1) && !k1.disabled && !O1.disabled && (H[J] = O1, H[J + 1] = k1, Q.push(k1));
    }
    if (Q.length === 0) return;
    w(H), d1(H), l1({ source: A, target: H, moved: Q, direction: "down" });
    const u1 = Array.from(P)[0];
    if (u1) {
      const J = H.findIndex(
        (k1) => ie(k1, v) === u1
      );
      J >= 0 && r1(J);
    }
  }, [
    O,
    V,
    v,
    A,
    d1,
    l1
  ]), M1 = _.size > 0, V1 = V.size > 0, $1 = G(""), re = G(
    null
  ), le = G(""), B1 = G(
    null
  ), je = q(
    (H) => {
      if (A.length === 0) return;
      const P = n1;
      if (P.length === 0) return;
      const Q = P.includes(j) ? j : P[0] ?? 0;
      let u1 = -1;
      if (H.key === "ArrowDown") {
        H.preventDefault();
        const J = P.indexOf(Q);
        u1 = P[(J + 1) % P.length] ?? P[0] ?? 0;
      } else if (H.key === "ArrowUp") {
        H.preventDefault();
        const J = P.indexOf(Q);
        u1 = P[(J - 1 + P.length) % P.length] ?? P[0] ?? 0;
      } else if (H.key === "Home")
        H.preventDefault(), u1 = P[0] ?? 0;
      else if (H.key === "End")
        H.preventDefault(), u1 = P[P.length - 1] ?? 0;
      else if (H.key === "Enter" || H.key === " ") {
        H.preventDefault(), F(Q);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(H.key)) {
        H.preventDefault();
        const J = ($1.current + H.key).toLowerCase();
        $1.current = J, re.current && clearTimeout(re.current), re.current = setTimeout(() => {
          $1.current = "";
        }, 500);
        const k1 = [...P, ...P], O1 = P.indexOf(Q) + 1, E1 = k1.slice(O1).find(
          (G1) => f0(A[G1]).toLowerCase().startsWith(J)
        );
        E1 != null && D(E1);
        return;
      }
      u1 >= 0 && D(u1);
    },
    [A, n1, j, F]
  ), oe = q(
    (H) => {
      if (O.length === 0) return;
      const P = U;
      if (P.length === 0) return;
      const Q = P.includes(Y) ? Y : P[0] ?? 0;
      let u1 = -1;
      if (H.key === "ArrowDown") {
        H.preventDefault();
        const J = P.indexOf(Q);
        u1 = P[(J + 1) % P.length] ?? P[0] ?? 0;
      } else if (H.key === "ArrowUp") {
        H.preventDefault();
        const J = P.indexOf(Q);
        u1 = P[(J - 1 + P.length) % P.length] ?? P[0] ?? 0;
      } else if (H.key === "Home")
        H.preventDefault(), u1 = P[0] ?? 0;
      else if (H.key === "End")
        H.preventDefault(), u1 = P[P.length - 1] ?? 0;
      else if (H.key === "Enter" || H.key === " ") {
        H.preventDefault(), c1(Q);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(H.key)) {
        H.preventDefault();
        const J = (le.current + H.key).toLowerCase();
        le.current = J, B1.current && clearTimeout(B1.current), B1.current = setTimeout(() => {
          le.current = "";
        }, 500);
        const k1 = [...P, ...P], O1 = P.indexOf(Q) + 1, E1 = k1.slice(O1).find(
          (G1) => f0(O[G1]).toLowerCase().startsWith(J)
        );
        E1 != null && r1(E1);
        return;
      }
      u1 >= 0 && r1(u1);
    },
    [O, U, Y, c1]
  ), Me = G(null), W = G(null);
  return /* @__PURE__ */ $(
    "div",
    {
      className: [T1.root, M].filter(Boolean).join(" "),
      "aria-label": L,
      children: [
        /* @__PURE__ */ $("div", { className: T1.panel, children: [
          /* @__PURE__ */ r("div", { className: T1.header, children: "Source" }),
          /* @__PURE__ */ r(
            "div",
            {
              ref: Me,
              role: "listbox",
              "aria-label": "Source",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: T1.listbox,
              onKeyDown: je,
              children: A.length === 0 ? /* @__PURE__ */ r("div", { className: T1.empty, children: "No items" }) : A.map((H, P) => {
                const Q = ie(H, v), u1 = _.has(Q), J = P === j, k1 = !!H.disabled;
                return /* @__PURE__ */ r(
                  "div",
                  {
                    role: "option",
                    "aria-selected": u1,
                    "aria-disabled": k1 || void 0,
                    tabIndex: -1,
                    "data-active": J || void 0,
                    className: [
                      T1.option,
                      u1 ? T1.selected : null,
                      J ? T1.active : null,
                      k1 ? T1.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => F(P),
                    children: f0(H)
                  },
                  Q
                );
              })
            }
          )
        ] }),
        /* @__PURE__ */ $("div", { className: T1.controls, children: [
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: T1.btn,
              "aria-label": "Move selected to target",
              "aria-disabled": !M1 || void 0,
              disabled: !M1,
              onClick: t1,
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
              onClick: f1,
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
              onClick: f1,
              children: "»"
            }
          ),
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: T1.btn,
              "aria-label": "Move selected to source",
              "aria-disabled": !V1 || void 0,
              disabled: !V1,
              onClick: o1,
              children: "‹"
            }
          ),
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: T1.btn,
              "aria-label": "Move all to source",
              "aria-disabled": O.filter((H) => !H.disabled).length === 0 || void 0,
              disabled: O.filter((H) => !H.disabled).length === 0,
              onClick: y1,
              children: "«"
            }
          )
        ] }),
        /* @__PURE__ */ $("div", { className: T1.panel, children: [
          /* @__PURE__ */ r("div", { className: T1.header, children: "Target" }),
          /* @__PURE__ */ r(
            "div",
            {
              ref: W,
              role: "listbox",
              "aria-label": "Target",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: T1.listbox,
              onKeyDown: oe,
              children: O.length === 0 ? /* @__PURE__ */ r("div", { className: T1.empty, children: "No items" }) : O.map((H, P) => {
                const Q = ie(H, v), u1 = V.has(Q), J = P === Y, k1 = !!H.disabled;
                return /* @__PURE__ */ r(
                  "div",
                  {
                    role: "option",
                    "aria-selected": u1,
                    "aria-disabled": k1 || void 0,
                    tabIndex: -1,
                    "data-active": J || void 0,
                    className: [
                      T1.option,
                      u1 ? T1.selected : null,
                      J ? T1.active : null,
                      k1 ? T1.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => c1(P),
                    children: f0(H)
                  },
                  Q
                );
              })
            }
          ),
          /* @__PURE__ */ $("div", { className: T1.reorder, children: [
            /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                className: T1.btn,
                "aria-label": "Move up",
                "aria-disabled": !V1 || void 0,
                disabled: !V1,
                onClick: N1,
                children: /* @__PURE__ */ r(C1, { name: "chevron-up", size: "sm" })
              }
            ),
            /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                className: T1.btn,
                "aria-label": "Move down",
                "aria-disabled": !V1 || void 0,
                disabled: !V1,
                onClick: D1,
                children: /* @__PURE__ */ r(C1, { name: "chevron-down", size: "sm" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const lp = "_root_16u8q_1", op = "_header_16u8q_8", ap = "_title_16u8q_15", sp = "_navBtn_16u8q_20", cp = "_resources_16u8q_39", ip = "_resource_16u8q_39", dp = "_grid_16u8q_50", up = "_timeCol_16u8q_55", hp = "_timeCell_16u8q_61", fp = "_dayCol_16u8q_66", pp = "_dayHeader_16u8q_73", mp = "_slot_16u8q_81", _p = "_event_16u8q_91", ye = {
  root: lp,
  header: op,
  title: ap,
  navBtn: sp,
  resources: cp,
  resource: ip,
  grid: dp,
  timeCol: up,
  timeCell: hp,
  dayCol: fp,
  dayHeader: pp,
  slot: mp,
  event: _p
};
function v2(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function Q_({
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
  const [i, u] = K(
    n ?? /* @__PURE__ */ new Date()
  ), h = n ?? i, b = (m) => {
    n || u(m), l?.(m);
  }, y = t === "day" ? [h] : t === "week" ? Array.from({ length: 7 }, (m, k) => {
    const f = new Date(h);
    return f.setDate(h.getDate() - h.getDay() + k), f;
  }) : Array.from({ length: 30 }, (m, k) => {
    const f = new Date(h);
    return f.setDate(1 + k), f;
  }), x = Array.from({ length: 12 }, (m, k) => 8 + k);
  return /* @__PURE__ */ $(
    "div",
    {
      className: [ye.root, a].filter(Boolean).join(" "),
      role: "group",
      "aria-label": o,
      children: [
        /* @__PURE__ */ $("div", { className: ye.header, children: [
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: ye.navBtn,
              "aria-label": "Previous",
              onClick: () => {
                const m = new Date(h);
                m.setDate(m.getDate() - 7), b(m);
              },
              children: "‹"
            }
          ),
          /* @__PURE__ */ r("span", { className: ye.title, children: h.toLocaleDateString() }),
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: ye.navBtn,
              "aria-label": "Next",
              onClick: () => {
                const m = new Date(h);
                m.setDate(m.getDate() + 7), b(m);
              },
              children: "›"
            }
          )
        ] }),
        s && /* @__PURE__ */ r("div", { className: ye.resources, children: s.map((m) => /* @__PURE__ */ r(
          "div",
          {
            className: ye.resource,
            role: "presentation",
            "aria-label": m.name,
            children: m.name
          },
          m.id
        )) }),
        /* @__PURE__ */ $("div", { className: ye.grid, role: "presentation", children: [
          /* @__PURE__ */ r("div", { className: ye.timeCol, role: "presentation", children: x.map((m) => /* @__PURE__ */ $("div", { className: ye.timeCell, children: [
            m,
            ":00"
          ] }, m)) }),
          y.map((m) => /* @__PURE__ */ $(
            "div",
            {
              className: ye.dayCol,
              role: "presentation",
              title: m.toLocaleDateString(),
              onClick: () => d?.({ date: m }),
              tabIndex: 0,
              "aria-label": m.toLocaleDateString(),
              children: [
                /* @__PURE__ */ r("div", { className: ye.dayHeader, children: m.toLocaleDateString(void 0, {
                  weekday: "short",
                  month: "short",
                  day: "numeric"
                }) }),
                x.map((k) => /* @__PURE__ */ r(
                  "div",
                  {
                    className: ye.slot,
                    tabIndex: -1,
                    onClick: () => {
                      const f = new Date(m);
                      f.setHours(k), d?.({ date: f });
                    }
                  },
                  k
                )),
                e.filter((k) => k.start.toDateString() === m.toDateString()).map((k) => /* @__PURE__ */ r(
                  "button",
                  {
                    type: "button",
                    className: ye.event,
                    "aria-label": `${k.title} ${v2(k.start)} - ${v2(k.end)}`,
                    "aria-pressed": !1,
                    onClick: () => c?.({ event: k }),
                    children: k.title
                  },
                  k.id
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
const gp = "_root_caexi_1", vp = "_header_caexi_8", kp = "_headerCell_caexi_15", xp = "_timeline_caexi_21", yp = "_row_caexi_26", bp = "_taskName_caexi_32", Mp = "_timelineCell_caexi_37", Cp = "_bar_caexi_43", wp = "_progress_caexi_56", zp = "_dep_caexi_61", Xe = {
  root: gp,
  header: vp,
  headerCell: kp,
  timeline: xp,
  row: yp,
  taskName: bp,
  timelineCell: Mp,
  bar: Cp,
  progress: wp,
  dep: zp
};
function eg({
  tasks: e,
  view: t = "week",
  onTaskClick: n,
  ariaLabel: l = "Gantt",
  className: s
}) {
  const [c, d] = K(null);
  return /* @__PURE__ */ $(
    "div",
    {
      className: [Xe.root, s].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": l,
      "aria-rowcount": e.length,
      children: [
        /* @__PURE__ */ $("div", { className: Xe.header, role: "row", children: [
          /* @__PURE__ */ r("div", { className: Xe.headerCell, role: "columnheader", children: "Task" }),
          /* @__PURE__ */ $("div", { className: Xe.timeline, role: "columnheader", children: [
            "Timeline (",
            t,
            ")"
          ] })
        ] }),
        e.map((o) => /* @__PURE__ */ $(
          "div",
          {
            className: Xe.row,
            role: "row",
            "aria-selected": c === o.id,
            children: [
              /* @__PURE__ */ r("div", { className: Xe.taskName, role: "gridcell", children: o.name }),
              /* @__PURE__ */ $("div", { className: Xe.timelineCell, role: "gridcell", children: [
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
const Lp = "_root_reqz6_1", $p = "_fields_reqz6_6", Np = "_chip_reqz6_13", Sp = "_table_reqz6_35", Op = "_totalRow_reqz6_55", Ap = "_total_reqz6_55", Tt = {
  root: Lp,
  fields: $p,
  chip: Np,
  table: Sp,
  totalRow: Op,
  total: Ap
}, p0 = {
  Sum: (e) => e.reduce((t, n) => t + n, 0),
  Average: (e) => e.length ? e.reduce((t, n) => t + n, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function Qt(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function tg({
  data: e,
  rowFields: t = [],
  columnFields: n = [],
  aggregateFields: l = [],
  onFieldsChange: s,
  ariaLabel: c = "Pivot table",
  className: d
}) {
  const o = t, a = n, i = l, u = (k, f, p) => {
    const g = k === "row" ? o.filter((L) => L.property !== f) : o, M = k === "col" ? a.filter((L) => L.property !== f) : a, v = k === "agg" ? i.filter((L) => !(L.property === f && L.aggregate === p)) : i;
    s?.({
      rowFields: g,
      columnFields: M,
      aggregateFields: v
    });
  }, h = (k, f) => f.map((p) => String(k[p.property])).join(""), b = [
    ...new Set(o.length ? e.map((k) => h(k, o)) : [""])
  ].sort(), y = [
    ...new Set(a.length ? e.map((k) => h(k, a)) : [""])
  ].sort(), x = (k, f, p) => {
    const g = e.filter(
      (v) => h(v, o) === k && h(v, a) === f
    ), M = g.map((v) => Number(v[p.property])).filter((v) => !Number.isNaN(v));
    return !M.length && p.aggregate !== "Count" ? 0 : p0[p.aggregate](
      p.aggregate === "Count" ? g.map(() => 1) : M
    );
  }, m = (k, f, p, g) => /* @__PURE__ */ $(
    "button",
    {
      type: "button",
      className: Tt.chip,
      "aria-label": `Remove ${k} field ${p}`,
      onClick: () => u(k, f, g),
      children: [
        p,
        g ? ` (${g})` : ""
      ]
    },
    `${k}-${p}-${g ?? ""}`
  );
  return /* @__PURE__ */ $("div", { className: [Tt.root, d].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ $("div", { className: Tt.fields, children: [
      o.map((k) => m("row", k.property, k.title ?? k.property)),
      a.map((k) => m("col", k.property, k.title ?? k.property)),
      i.map(
        (k) => m("agg", k.property, k.title ?? k.property, k.aggregate)
      )
    ] }),
    /* @__PURE__ */ $("table", { className: Tt.table, role: "grid", "aria-label": c, children: [
      /* @__PURE__ */ r("thead", { children: /* @__PURE__ */ $("tr", { children: [
        /* @__PURE__ */ r("th", { scope: "col", children: o.map((k) => k.title ?? k.property).join(" / ") || "Total" }),
        y.map((k) => /* @__PURE__ */ r("th", { scope: "col", children: k || "—" }, k)),
        /* @__PURE__ */ r("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ $("tbody", { children: [
        b.map((k) => /* @__PURE__ */ $("tr", { children: [
          /* @__PURE__ */ r("th", { scope: "row", children: k || "—" }),
          y.map((f) => /* @__PURE__ */ r(
            "td",
            {
              title: Qt(
                x(
                  k,
                  f,
                  i[0] ?? { property: "", aggregate: "Count" }
                )
              ),
              children: i.length ? Qt(x(k, f, i[0])) : ""
            },
            f
          )),
          /* @__PURE__ */ r("td", { className: Tt.total, children: i.length ? Qt(
            p0[i[0].aggregate](
              y.flatMap(
                (f) => e.filter(
                  (p) => h(p, o) === k && h(p, a) === f
                ).map((p) => Number(p[i[0].property]))
              ).filter((f) => !Number.isNaN(f))
            )
          ) : "" })
        ] }, k)),
        /* @__PURE__ */ $("tr", { className: Tt.totalRow, children: [
          /* @__PURE__ */ r("th", { scope: "row", children: "Total" }),
          y.map((k) => /* @__PURE__ */ r("td", { children: i.length ? Qt(
            p0[i[0].aggregate](
              e.filter((f) => h(f, a) === k).map((f) => Number(f[i[0].property])).filter((f) => !Number.isNaN(f))
            )
          ) : "" }, k)),
          /* @__PURE__ */ r("td", { children: i.length ? Qt(
            p0[i[0].aggregate](
              e.map((k) => Number(k[i[0].property])).filter((k) => !Number.isNaN(k))
            )
          ) : "" })
        ] })
      ] })
    ] })
  ] });
}
const Hp = "_root_48ysw_1", jp = "_reverse_48ysw_10", Vp = "_item_48ysw_14", Tp = "_marker_48ysw_35", Dp = "_body_48ysw_46", Ep = "_label_48ysw_50", qp = "_content_48ysw_56", Mt = {
  root: Hp,
  reverse: jp,
  item: Vp,
  marker: Tp,
  body: Dp,
  label: Ep,
  content: qp
};
function ng({
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
      children: s.map((c, d) => /* @__PURE__ */ $("li", { className: Mt.item, children: [
        /* @__PURE__ */ r("span", { className: Mt.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ $("div", { className: Mt.body, children: [
          /* @__PURE__ */ r("div", { className: Mt.label, children: c.label }),
          c.content !== void 0 && /* @__PURE__ */ r("div", { className: Mt.content, children: c.content })
        ] })
      ] }, d))
    }
  );
}
const Ip = "_root_4ls7q_1", Pp = "_header_4ls7q_13", Rp = "_headCell_4ls7q_22", Bp = "_row_4ls7q_32", Fp = "_cell_4ls7q_37", e0 = {
  root: Ip,
  header: Pp,
  headCell: Rp,
  row: Bp,
  cell: Fp
};
function rg({
  count: e,
  rowHeight: t = 40,
  height: n = 320,
  loadData: l,
  columns: s = [],
  ariaLabel: c = "Virtual grid",
  className: d
}) {
  const [o, a] = K(
    /* @__PURE__ */ new Map()
  ), [i, u] = K(0), h = G(/* @__PURE__ */ new Set()), b = Math.ceil(n / t), y = Math.max(0, Math.floor(i / t) - 3), x = Math.min(e, y + b + 6), m = q(
    (f, p) => {
      let g = !1;
      for (let M = f; M < p; M++)
        !o.has(M) && !h.current.has(M) && (g = !0);
      if (g) {
        for (let M = f; M < p; M++) h.current.add(M);
        l({ skip: f, top: p }).then((M) => {
          a((v) => {
            const L = new Map(v);
            return M.forEach((C, z) => L.set(f + z, C)), L;
          });
          for (let v = f; v < p; v++) h.current.delete(v);
        });
      }
    },
    [o, l]
  );
  g1(() => {
    m(y, x);
  }, [y, x]);
  const k = [];
  for (let f = y; f < x; f++) {
    const p = o.get(f) ?? {};
    k.push(
      /* @__PURE__ */ r(
        "div",
        {
          className: e0.row,
          role: "row",
          style: { height: t },
          children: s.map((g) => /* @__PURE__ */ r(
            "div",
            {
              role: "gridcell",
              className: e0.cell,
              style: g.width ? { width: g.width } : void 0,
              children: String(p[g.property] ?? "")
            },
            g.property
          ))
        },
        f
      )
    );
  }
  return /* @__PURE__ */ $(
    "div",
    {
      className: [e0.root, d].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": c,
      "aria-rowcount": e,
      tabIndex: 0,
      style: { height: n },
      onScroll: (f) => u(f.target.scrollTop),
      onKeyDown: (f) => {
        const p = f.currentTarget;
        f.key === "ArrowDown" ? (f.preventDefault(), p.scrollTop += t) : f.key === "ArrowUp" ? (f.preventDefault(), p.scrollTop -= t) : f.key === "PageDown" ? (f.preventDefault(), p.scrollTop += n) : f.key === "PageUp" && (f.preventDefault(), p.scrollTop -= n);
      },
      children: [
        /* @__PURE__ */ r("div", { style: { height: y * t }, "aria-hidden": "true" }),
        /* @__PURE__ */ r("div", { className: e0.header, role: "row", children: s.map((f) => /* @__PURE__ */ r(
          "div",
          {
            role: "columnheader",
            className: e0.headCell,
            style: {
              height: t,
              ...f.width ? { width: f.width } : {}
            },
            children: f.title ?? f.property
          },
          f.property
        )) }),
        k,
        /* @__PURE__ */ r(
          "div",
          {
            style: { height: Math.max(0, (e - x) * t) },
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
    constructor(o, a, i, u) {
      if (this.version = o, this.errorCorrectionLevel = a, o < t.MIN_VERSION || o > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (u < -1 || u > 7) throw new RangeError("Mask value out of range");
      this.size = o * 4 + 17;
      let h = [];
      for (let y = 0; y < this.size; y++) h.push(!1);
      for (let y = 0; y < this.size; y++)
        this.modules.push(h.slice()), this.isFunction.push(h.slice());
      this.drawFunctionPatterns();
      const b = this.addEccAndInterleave(i);
      if (this.drawCodewords(b), u == -1) {
        let y = 1e9;
        for (let x = 0; x < 8; x++) {
          this.applyMask(x), this.drawFormatBits(x);
          const m = this.getPenaltyScore();
          m < y && (u = x, y = m), this.applyMask(x);
        }
      }
      s(0 <= u && u <= 7), this.mask = u, this.applyMask(u), this.drawFormatBits(u), this.isFunction = [];
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
    static encodeSegments(o, a, i = 1, u = 40, h = -1, b = !0) {
      if (!(t.MIN_VERSION <= i && i <= u && u <= t.MAX_VERSION) || h < -1 || h > 7)
        throw new RangeError("Invalid value");
      let y, x;
      for (y = i; ; y++) {
        const p = t.getNumDataCodewords(y, a) * 8, g = c.getTotalBits(o, y);
        if (g <= p) {
          x = g;
          break;
        }
        if (y >= u)
          throw new RangeError("Data too long");
      }
      for (const p of [
        t.Ecc.MEDIUM,
        t.Ecc.QUARTILE,
        t.Ecc.HIGH
      ])
        b && x <= t.getNumDataCodewords(y, p) * 8 && (a = p);
      let m = [];
      for (const p of o) {
        n(p.mode.modeBits, 4, m), n(p.numChars, p.mode.numCharCountBits(y), m);
        for (const g of p.getData()) m.push(g);
      }
      s(m.length == x);
      const k = t.getNumDataCodewords(y, a) * 8;
      s(m.length <= k), n(0, Math.min(4, k - m.length), m), n(0, (8 - m.length % 8) % 8, m), s(m.length % 8 == 0);
      for (let p = 236; m.length < k; p ^= 253)
        n(p, 8, m);
      let f = [];
      for (; f.length * 8 < m.length; ) f.push(0);
      return m.forEach(
        (p, g) => f[g >>> 3] |= p << 7 - (g & 7)
      ), new t(y, a, f, h);
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
        for (let u = 0; u < a; u++)
          i == 0 && u == 0 || i == 0 && u == a - 1 || i == a - 1 && u == 0 || this.drawAlignmentPattern(o[i], o[u]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(o) {
      const a = this.errorCorrectionLevel.formatBits << 3 | o;
      let i = a;
      for (let h = 0; h < 10; h++) i = i << 1 ^ (i >>> 9) * 1335;
      const u = (a << 10 | i) ^ 21522;
      s(u >>> 15 == 0);
      for (let h = 0; h <= 5; h++)
        this.setFunctionModule(8, h, l(u, h));
      this.setFunctionModule(8, 7, l(u, 6)), this.setFunctionModule(8, 8, l(u, 7)), this.setFunctionModule(7, 8, l(u, 8));
      for (let h = 9; h < 15; h++)
        this.setFunctionModule(14 - h, 8, l(u, h));
      for (let h = 0; h < 8; h++)
        this.setFunctionModule(this.size - 1 - h, 8, l(u, h));
      for (let h = 8; h < 15; h++)
        this.setFunctionModule(8, this.size - 15 + h, l(u, h));
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
        const u = l(a, i), h = this.size - 11 + i % 3, b = Math.floor(i / 3);
        this.setFunctionModule(h, b, u), this.setFunctionModule(b, h, u);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(o, a) {
      for (let i = -4; i <= 4; i++)
        for (let u = -4; u <= 4; u++) {
          const h = Math.max(Math.abs(u), Math.abs(i)), b = o + u, y = a + i;
          0 <= b && b < this.size && 0 <= y && y < this.size && this.setFunctionModule(b, y, h != 2 && h != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(o, a) {
      for (let i = -2; i <= 2; i++)
        for (let u = -2; u <= 2; u++)
          this.setFunctionModule(
            o + u,
            a + i,
            Math.max(Math.abs(u), Math.abs(i)) != 1
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
      const u = t.NUM_ERROR_CORRECTION_BLOCKS[i.ordinal][a], h = t.ECC_CODEWORDS_PER_BLOCK[i.ordinal][a], b = Math.floor(
        t.getNumRawDataModules(a) / 8
      ), y = u - b % u, x = Math.floor(b / u);
      let m = [];
      const k = t.reedSolomonComputeDivisor(h);
      for (let p = 0, g = 0; p < u; p++) {
        let M = o.slice(
          g,
          g + x - h + (p < y ? 0 : 1)
        );
        g += M.length;
        const v = t.reedSolomonComputeRemainder(M, k);
        p < y && M.push(0), m.push(M.concat(v));
      }
      let f = [];
      for (let p = 0; p < m[0].length; p++)
        m.forEach((g, M) => {
          (p != x - h || M >= y) && f.push(g[p]);
        });
      return s(f.length == b), f;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(o) {
      if (o.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let a = 0;
      for (let i = this.size - 1; i >= 1; i -= 2) {
        i == 6 && (i = 5);
        for (let u = 0; u < this.size; u++)
          for (let h = 0; h < 2; h++) {
            const b = i - h, x = (i + 1 & 2) == 0 ? this.size - 1 - u : u;
            !this.isFunction[x][b] && a < o.length * 8 && (this.modules[x][b] = l(o[a >>> 3], 7 - (a & 7)), a++);
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
          let u;
          switch (o) {
            case 0:
              u = (i + a) % 2 == 0;
              break;
            case 1:
              u = a % 2 == 0;
              break;
            case 2:
              u = i % 3 == 0;
              break;
            case 3:
              u = (i + a) % 3 == 0;
              break;
            case 4:
              u = (Math.floor(i / 3) + Math.floor(a / 2)) % 2 == 0;
              break;
            case 5:
              u = i * a % 2 + i * a % 3 == 0;
              break;
            case 6:
              u = (i * a % 2 + i * a % 3) % 2 == 0;
              break;
            case 7:
              u = ((i + a) % 2 + i * a % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[a][i] && u && (this.modules[a][i] = !this.modules[a][i]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let o = 0;
      for (let h = 0; h < this.size; h++) {
        let b = !1, y = 0, x = [0, 0, 0, 0, 0, 0, 0];
        for (let m = 0; m < this.size; m++)
          this.modules[h][m] == b ? (y++, y == 5 ? o += t.PENALTY_N1 : y > 5 && o++) : (this.finderPenaltyAddHistory(y, x), b || (o += this.finderPenaltyCountPatterns(x) * t.PENALTY_N3), b = this.modules[h][m], y = 1);
        o += this.finderPenaltyTerminateAndCount(b, y, x) * t.PENALTY_N3;
      }
      for (let h = 0; h < this.size; h++) {
        let b = !1, y = 0, x = [0, 0, 0, 0, 0, 0, 0];
        for (let m = 0; m < this.size; m++)
          this.modules[m][h] == b ? (y++, y == 5 ? o += t.PENALTY_N1 : y > 5 && o++) : (this.finderPenaltyAddHistory(y, x), b || (o += this.finderPenaltyCountPatterns(x) * t.PENALTY_N3), b = this.modules[m][h], y = 1);
        o += this.finderPenaltyTerminateAndCount(b, y, x) * t.PENALTY_N3;
      }
      for (let h = 0; h < this.size - 1; h++)
        for (let b = 0; b < this.size - 1; b++) {
          const y = this.modules[h][b];
          y == this.modules[h][b + 1] && y == this.modules[h + 1][b] && y == this.modules[h + 1][b + 1] && (o += t.PENALTY_N2);
        }
      let a = 0;
      for (const h of this.modules)
        a = h.reduce((b, y) => b + (y ? 1 : 0), a);
      const i = this.size * this.size, u = Math.ceil(Math.abs(a * 20 - i * 10) / i) - 1;
      return s(0 <= u && u <= 9), o += u * t.PENALTY_N4, s(0 <= o && o <= 2568888), o;
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
        for (let u = this.size - 7; i.length < o; u -= a)
          i.splice(1, 0, u);
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
      for (let u = 0; u < o - 1; u++) a.push(0);
      a.push(1);
      let i = 1;
      for (let u = 0; u < o; u++) {
        for (let h = 0; h < a.length; h++)
          a[h] = t.reedSolomonMultiply(a[h], i), h + 1 < a.length && (a[h] ^= a[h + 1]);
        i = t.reedSolomonMultiply(i, 2);
      }
      return a;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(o, a) {
      let i = a.map((u) => 0);
      for (const u of o) {
        const h = u ^ i.shift();
        i.push(0), a.forEach(
          (b, y) => i[y] ^= t.reedSolomonMultiply(b, h)
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
      for (let u = 7; u >= 0; u--)
        i = i << 1 ^ (i >>> 7) * 285, i ^= (a >>> u & 1) * o;
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
        const u = Math.min(o.length - i, 3);
        n(parseInt(o.substring(i, i + u), 10), u * 3 + 1, a), i += u;
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
        let u = c.ALPHANUMERIC_CHARSET.indexOf(o.charAt(i)) * 45;
        u += c.ALPHANUMERIC_CHARSET.indexOf(o.charAt(i + 1)), n(u, 11, a);
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
      for (const u of o) {
        const h = u.mode.numCharCountBits(a);
        if (u.numChars >= 1 << h) return 1 / 0;
        i += 4 + h + u.bitData.length;
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
const Kp = "_root_1leml_1", Wp = {
  root: Kp
}, Zp = {
  low: Ie.QrCode.Ecc.LOW,
  medium: Ie.QrCode.Ecc.MEDIUM,
  quartile: Ie.QrCode.Ecc.QUARTILE,
  high: Ie.QrCode.Ecc.HIGH
};
function lg({
  value: e,
  size: t = 128,
  render: n = "svg",
  errorCorrection: l = "medium",
  margin: s = 4,
  ariaLabel: c,
  className: d,
  onError: o
}) {
  const a = c ?? `QR code for ${e}`, i = G(null), u = O2("(prefers-color-scheme: dark)"), [h, b] = K(null);
  g1(() => {
    const M = document.documentElement;
    b(M.dataset.theme ?? null);
    const v = new MutationObserver(() => {
      b(M.dataset.theme ?? null);
    });
    return v.observe(M, {
      attributes: !0,
      attributeFilter: ["data-theme"]
    }), () => v.disconnect();
  }, []);
  const y = v1(() => {
    try {
      return Ie.QrCode.encodeText(e, Zp[l]);
    } catch {
      return null;
    }
  }, [e, l]), x = G(null);
  g1(() => {
    if (y !== null) {
      x.current = null;
      return;
    }
    const M = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error(M), (x.current?.value !== e || x.current?.onError !== o) && (x.current = { value: e, onError: o }, o?.(M));
  }, [y, e, o]);
  const m = Math.max(0, Math.floor(s)), k = [Wp.root, d].filter(Boolean).join(" ");
  if (g1(() => {
    if (n !== "canvas" || y === null) return;
    const M = i.current, v = M?.getContext("2d");
    if (!M || !v) return;
    const L = getComputedStyle(M), C = L.getPropertyValue("--dx-text-color").trim() || "#000", z = L.getPropertyValue("--dx-surface-color").trim() || "#fff";
    Up(v, y, t, m, C, z);
  }, [n, y, t, m, u, h]), y === null)
    return /* @__PURE__ */ r("div", { className: k, role: "img", "aria-label": a, "data-qr-error": "true" });
  const f = y.size + m * 2, p = t / f;
  if (n === "canvas")
    return /* @__PURE__ */ r(
      "canvas",
      {
        ref: i,
        className: k,
        width: t,
        height: t,
        role: "img",
        "aria-label": a,
        "data-value": e
      }
    );
  const g = [];
  for (let M = 0; M < y.size; M++)
    for (let v = 0; v < y.size; v++)
      y.getModule(v, M) && g.push(
        /* @__PURE__ */ r(
          "rect",
          {
            x: (v + m) * p,
            y: (M + m) * p,
            width: p + 0.5,
            height: p + 0.5
          },
          `${v}-${M}`
        )
      );
  return /* @__PURE__ */ $(
    "svg",
    {
      className: k,
      width: t,
      height: t,
      viewBox: `0 0 ${t} ${t}`,
      role: "img",
      "aria-label": a,
      "data-value": e,
      children: [
        /* @__PURE__ */ r("rect", { width: t, height: t, fill: "var(--dx-surface-color)" }),
        /* @__PURE__ */ r("g", { fill: "var(--dx-text-color)", children: g })
      ]
    }
  );
}
function Up(e, t, n, l, s, c) {
  const d = n / (t.size + l * 2);
  e.fillStyle = c, e.fillRect(0, 0, n, n), e.fillStyle = s;
  for (let o = 0; o < t.size; o++)
    for (let a = 0; a < t.size; a++)
      t.getModule(a, o) && e.fillRect((a + l) * d, (o + l) * d, d + 0.5, d + 0.5);
}
const Xp = "_root_1v9la_1", Gp = "_value_1v9la_9", k2 = {
  root: Xp,
  value: Gp
}, x2 = [
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
], y2 = 104, Yp = 106;
function Jp(e) {
  const t = [y2];
  for (let l = 0; l < e.length; l++) {
    const s = e.charCodeAt(l);
    t.push(s >= 32 && s <= 126 ? s - 32 : 0);
  }
  let n = y2;
  for (let l = 1; l < t.length; l++) n += l * t[l];
  return t.push(n % 103, Yp), t;
}
function og({
  value: e,
  format: t = "Code128",
  height: n = 60,
  showValue: l = !1,
  ariaLabel: s,
  className: c
}) {
  const d = s ?? `Barcode ${e}`, o = v1(() => {
    const a = [];
    let i = 0;
    for (const u of Jp(e)) {
      const h = x2[u] ?? x2[0];
      for (let b = 0; b < h.length; b++) {
        const y = Number(h[b]);
        b % 2 === 0 && a.push({ x: i, w: y }), i += y;
      }
    }
    return { modules: a, total: i };
  }, [e]);
  return /* @__PURE__ */ $("span", { className: [k2.root, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ $(
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
    l && /* @__PURE__ */ r("span", { className: k2.value, children: e })
  ] });
}
const Qp = "_root_1o41a_1", em = "_svg_1o41a_10", tm = "_gridline_1o41a_15", nm = "_tickLabel_1o41a_21", rm = "_axisTitle_1o41a_27", lm = "_dataLabel_1o41a_34", om = "_gaugeValue_1o41a_40", am = "_legend_1o41a_47", sm = "_legendItem_1o41a_55", cm = "_swatch_1o41a_63", im = "_tooltip_1o41a_70", dm = "_visuallyHidden_1o41a_84", U1 = {
  root: Qp,
  svg: em,
  gridline: tm,
  tickLabel: nm,
  axisTitle: rm,
  dataLabel: lm,
  gaugeValue: om,
  legend: am,
  legendItem: sm,
  swatch: cm,
  tooltip: im,
  visuallyHidden: dm
}, b2 = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
], E2 = /* @__PURE__ */ new Set([
  "line",
  "area",
  "bar",
  "column",
  "scatter",
  "bubble"
]), um = /* @__PURE__ */ new Set([...E2, "heatmap"]);
function hm(e, t, n) {
  const l = t - e || 1, s = n ?? Math.pow(10, Math.floor(Math.log10(l / 4))), c = Math.floor(e / s) * s, d = Math.ceil(t / s) * s, o = [];
  for (let a = c; a <= d + 1e-9; a += s)
    o.push(Number(a.toFixed(6)));
  return { min: c, max: d, step: s, ticks: o };
}
function fm(e) {
  return e.data.map((t) => ({
    cat: String(t[e.categoryProperty] ?? ""),
    val: Number(t[e.valueProperty]),
    size: e.sizeProperty ? Number(t[e.sizeProperty]) : void 0,
    item: t
  }));
}
function ft(e, t, n) {
  return /* @__PURE__ */ $(
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
function pm(e, t, n, l, s) {
  const { pad: c, plotW: d, plotH: o } = e, a = c.l + d / 2, i = c.t + o / 2, u = Math.min(d, o) / 3, h = t.type === "donut" ? t.innerRadius ?? u * 0.5 : 0, b = l.reduce((x, m) => x + (Number(m.val) || 0), 0);
  let y = -90;
  return ft(
    n,
    t,
    l.map((x, m) => {
      const k = b ? x.val / b * 360 : 0, f = y, p = y + k;
      y = p;
      const g = k > 180 ? 1 : 0, M = a + u * Math.cos(_e(f)), v = i + u * Math.sin(_e(f)), L = a + u * Math.cos(_e(p)), C = i + u * Math.sin(_e(p)), z = a + h * Math.cos(_e(p)), A = i + h * Math.sin(_e(p)), S = a + h * Math.cos(_e(f)), O = i + h * Math.sin(_e(f)), w = h ? `M ${M} ${v} A ${u} ${u} 0 ${g} 1 ${L} ${C} L ${z} ${A} A ${h} ${h} 0 ${g} 0 ${S} ${O} Z` : `M ${a} ${i} L ${M} ${v} A ${u} ${u} 0 ${g} 1 ${L} ${C} Z`, _ = (f + p) / 2, N = a + (u + 12) * Math.cos(_e(_)), V = i + (u + 12) * Math.sin(_e(_));
      return /* @__PURE__ */ $("g", { role: "listitem", children: [
        /* @__PURE__ */ r(
          "path",
          {
            d: w,
            fill: s,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => e.tooltipVisible && e.showTip(N, V, `${t.title ?? x.cat}: ${x.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, x.cat, x.val, x.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ r(
          "text",
          {
            x: N,
            y: V,
            textAnchor: "middle",
            className: U1.dataLabel,
            children: x.val
          }
        )
      ] }, m);
    })
  );
}
function mm(e, t, n, l, s) {
  const { pad: c, plotW: d, scale: o, xFor: a, yFor: i, categories: u } = e, h = new Map(u.map((b, y) => [b, y]));
  return ft(
    n,
    t,
    l.map((b, y) => {
      const x = h.get(b.cat) ?? 0, m = Number(l[y].cat), k = Number.isNaN(m) ? a(x) : c.l + (m - o.min) / (o.max - o.min || 1) * d, f = i(b.val), p = t.type === "bubble" && b.size !== void 0 ? Math.max(4, Math.min(12, b.size / 10)) : 4;
      return /* @__PURE__ */ $("g", { role: "listitem", children: [
        /* @__PURE__ */ r(
          "circle",
          {
            cx: k,
            cy: f,
            r: p,
            fill: s,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ r(
          "circle",
          {
            cx: k,
            cy: f,
            r: 12,
            fill: "transparent",
            onMouseEnter: () => e.tooltipVisible && e.showTip(k, f, `${t.title ?? b.cat}: ${b.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, b.cat, b.val, b.item),
            style: { cursor: "pointer" }
          }
        )
      ] }, y);
    })
  );
}
function _m(e, t, n, l, s) {
  const { scale: c, xFor: d, yFor: o, categories: a, series: i } = e, u = new Map(a.map((x, m) => [x, m])), h = (x) => {
    if (!t.stack) return c.min;
    let m = 0;
    for (let k = 0; k < n; k++) {
      const f = i[k];
      if (f?.stack !== t.stack) continue;
      const p = f.data.find(
        (g) => String(g[f.categoryProperty] ?? "") === x
      );
      p && (m += Number(p[f.valueProperty]) || 0);
    }
    return m;
  }, b = l.map((x) => {
    const m = u.get(x.cat) ?? 0, k = h(x.cat);
    return `${m === 0 ? "M" : "L"} ${d(m)} ${o(k + x.val)}`;
  }).join(" "), y = l.map((x) => {
    const m = u.get(x.cat) ?? 0, k = h(x.cat);
    return `${m === 0 ? "M" : "L"} ${d(m)} ${o(k)}`;
  }).join(" ");
  return ft(
    n,
    t,
    /* @__PURE__ */ $(b1, { children: [
      t.type === "area" && /* @__PURE__ */ r(
        "path",
        {
          d: `${b} L ${d(l.length - 1)} ${o(h(l[l.length - 1].cat))} L ${d(0)} ${o(h(l[0].cat))} Z`,
          fill: s,
          fillOpacity: 0.25,
          stroke: "none"
        }
      ),
      /* @__PURE__ */ r("path", { d: b, fill: "none", stroke: s, strokeWidth: 2 }),
      t.stack && /* @__PURE__ */ r("path", { d: y, fill: "none", stroke: "transparent" }),
      l.map((x, m) => {
        const k = u.get(x.cat) ?? 0, f = h(x.cat), p = d(k), g = o(f + x.val);
        return /* @__PURE__ */ $("g", { role: "listitem", children: [
          /* @__PURE__ */ r(
            "circle",
            {
              cx: p,
              cy: g,
              r: 4,
              fill: s,
              stroke: "var(--dx-surface-color)",
              strokeWidth: 1.5
            }
          ),
          /* @__PURE__ */ r(
            "rect",
            {
              x: p - 12,
              y: g - 12,
              width: 24,
              height: 24,
              fill: "transparent",
              onMouseEnter: () => e.tooltipVisible && e.showTip(p, g, `${t.title ?? x.cat}: ${x.val}`),
              onMouseLeave: () => e.hideTip(),
              onClick: () => e.handleClick(t, x.cat, x.val, x.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ r(
            "text",
            {
              x: p,
              y: g - 8,
              textAnchor: "middle",
              className: U1.dataLabel,
              children: x.val
            }
          )
        ] }, m);
      })
    ] })
  );
}
function gm(e, t, n, l, s) {
  const { pad: c, plotW: d, plotH: o, scale: a, xFor: i, yFor: u, categories: h, series: b } = e, y = new Map(h.map((m, k) => [m, k])), x = t.type === "bar";
  return ft(
    n,
    t,
    l.map((m, k) => {
      const f = y.get(m.cat) ?? 0;
      let p = 0;
      if (t.stack)
        for (let _ = 0; _ < n; _++) {
          const N = b[_];
          if (N?.stack !== t.stack) continue;
          const V = N.data.find(
            (T) => String(T[N.categoryProperty] ?? "") === m.cat
          );
          V && (p += Number(V[N.valueProperty]) || 0);
        }
      const g = p + m.val, M = b.filter(
        (_) => !_.stack || _.stack === t.stack
      ).length, v = d / Math.max(1, h.length), L = x ? 18 : Math.max(12, v / (t.stack ? 1 : b.length) - 4), C = x ? c.l + p / (a.max - a.min || 1) * d : i(f) - L / 2 + (t.stack ? 0 : n % M * L), z = x ? c.t + f * o / Math.max(1, h.length) + 4 : u(g), A = x ? m.val / (a.max - a.min || 1) * d : L - 4, S = x ? 16 : u(p) - u(g), O = x ? c.l + p / (a.max - a.min || 1) * d : C, w = x ? c.t + f * o / Math.max(1, h.length) + 4 : z;
      return /* @__PURE__ */ $("g", { role: "listitem", children: [
        /* @__PURE__ */ r(
          "rect",
          {
            x: O,
            y: w,
            width: x ? A : L - 4,
            height: S,
            fill: s,
            rx: 2,
            onMouseEnter: () => e.tooltipVisible && e.showTip(
              O + (x ? A : L) / 2,
              w,
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
            x: O + (x ? A : L) / 2,
            y: w - 4,
            textAnchor: "middle",
            className: U1.dataLabel,
            children: m.val
          }
        )
      ] }, k);
    })
  );
}
function vm(e, t, n, l, s) {
  const { pad: c, plotW: d, plotH: o, scale: a, tooltipVisible: i, showTip: u, hideTip: h } = e, b = c.l + d / 2, y = c.t + o * 0.78, x = Math.min(d, o) * 0.36, m = 135, k = 270, f = l.reduce((L, C) => L + (Number(C.val) || 0), 0), p = a.max - a.min || 1, g = Math.min(1, Math.max(0, (f - a.min) / p)), M = (L, C) => {
    const [z, A] = [
      b + x * Math.cos(_e(L)),
      y + x * Math.sin(_e(L))
    ], [S, O] = [
      b + x * Math.cos(_e(C)),
      y + x * Math.sin(_e(C))
    ], w = C - L > 180 ? 1 : 0;
    return `M ${z} ${A} A ${x} ${x} 0 ${w} 1 ${S} ${O}`;
  }, v = Number(f.toFixed(2));
  return ft(
    n,
    t,
    /* @__PURE__ */ $(b1, { children: [
      /* @__PURE__ */ r(
        "path",
        {
          d: M(m, m + k),
          fill: "none",
          stroke: "var(--dx-border-color)",
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      g > 0 && /* @__PURE__ */ r(
        "path",
        {
          d: M(m, m + k * g),
          fill: "none",
          stroke: s,
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ r("text", { x: b, y: y - 4, textAnchor: "middle", className: U1.gaugeValue, children: v }),
      /* @__PURE__ */ r(
        "path",
        {
          d: M(m, m + k),
          fill: "none",
          stroke: "transparent",
          strokeWidth: 22,
          onMouseEnter: () => i && u(b, y - x, `${t.title ?? "Value"}: ${v}`),
          onMouseLeave: () => h(),
          onClick: () => e.handleClick(t, l[0]?.cat ?? "", f, l[0]?.item ?? {}),
          style: { cursor: "pointer" }
        }
      ),
      t.labels?.visible && /* @__PURE__ */ r(
        "text",
        {
          x: b,
          y: y + x + 18,
          textAnchor: "middle",
          className: U1.dataLabel,
          children: t.title ?? ""
        }
      )
    ] })
  );
}
function q2(e) {
  const { pad: t, plotW: n, plotH: l, categories: s } = e, c = t.l + n / 2, d = t.t + l / 2, o = Math.min(n, l) / 2 - 24, a = Math.max(3, s.length), i = (h) => _e(-90 + 360 * h / a);
  return { cx: c, cy: d, radius: o, angleFor: i, vertexFor: (h, b) => {
    const y = i(h);
    return [
      c + o * b * Math.cos(y),
      d + o * b * Math.sin(y)
    ];
  } };
}
function km(e) {
  const { categories: t } = e, { cx: n, cy: l, vertexFor: s } = q2(e);
  return /* @__PURE__ */ $("g", { "data-chart-type": "radar-grid", "aria-hidden": "true", children: [
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
function xm(e, t, n, l, s) {
  const { categories: c, tooltipVisible: d, showTip: o, hideTip: a } = e, { cx: i, cy: u, radius: h, angleFor: b, vertexFor: y } = q2(e), x = e.scale.max || 1, m = (f) => l.find((p) => p.cat === f)?.val ?? 0, k = c.map((f, p) => {
    const g = Math.min(1, Math.max(0, m(f) / x)), [M, v] = y(p, g);
    return `${M},${v}`;
  }).join(" ");
  return ft(
    n,
    t,
    /* @__PURE__ */ $(b1, { children: [
      /* @__PURE__ */ r(
        "polygon",
        {
          points: k,
          fill: s,
          fillOpacity: 0.25,
          stroke: s,
          strokeWidth: 2
        }
      ),
      c.map((f, p) => {
        const g = Math.min(1, Math.max(0, m(f) / x)), [M, v] = y(p, g), [L, C] = y(p, 1);
        return /* @__PURE__ */ $("g", { role: "listitem", children: [
          /* @__PURE__ */ r(
            "circle",
            {
              cx: M,
              cy: v,
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
              cy: v,
              r: 12,
              fill: "transparent",
              onMouseEnter: () => d && o(L, C, `${t.title ?? f}: ${m(f)}`),
              onMouseLeave: () => a(),
              onClick: () => {
                const z = l.find((A) => A.cat === f);
                z && e.handleClick(t, z.cat, z.val, z.item);
              },
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ r(
            "text",
            {
              x: i + (h + 14) * Math.cos(b(p)),
              y: u + (h + 14) * Math.sin(b(p)) + 4,
              textAnchor: "middle",
              className: U1.tickLabel,
              children: f
            }
          )
        ] }, f);
      })
    ] })
  );
}
function ym(e, t, n, l, s) {
  const { pad: c, plotW: d, plotH: o, tooltipVisible: a, showTip: i, hideTip: u } = e, h = l, b = Math.max(1, ...h.map((m) => Number(m.val) || 0)), y = o / Math.max(1, h.length), x = c.l + d / 2;
  return ft(
    n,
    t,
    h.map((m, k) => {
      const p = Math.max(0, Number(m.val) || 0) / b * d, g = h[k + 1], M = g ? Math.max(0, Number(g.val) || 0) / b * d : p * 0.7, v = c.t + k * y + 2, L = Math.max(4, y - 6), C = 1 - k * (0.45 / Math.max(1, h.length));
      return /* @__PURE__ */ $("g", { role: "listitem", children: [
        /* @__PURE__ */ r(
          "path",
          {
            d: `M ${x - p / 2} ${v} L ${x + p / 2} ${v} L ${x + M / 2} ${v + L} L ${x - M / 2} ${v + L} Z`,
            fill: s,
            fillOpacity: C,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => a && i(x, v, `${t.title ?? m.cat}: ${m.val}`),
            onMouseLeave: () => u(),
            onClick: () => e.handleClick(t, m.cat, m.val, m.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ $(
          "text",
          {
            x,
            y: v + L / 2 + 4,
            textAnchor: "middle",
            className: U1.dataLabel,
            children: [
              m.cat,
              " · ",
              m.val
            ]
          }
        )
      ] }, k);
    })
  );
}
function bm(e, t, n, l, s) {
  const { pad: c, plotW: d, plotH: o, categories: a, tooltipVisible: i, showTip: u, hideTip: h } = e, b = [];
  t.data.forEach((g) => {
    const M = t.rowProperty ? String(g[t.rowProperty] ?? "") : "All";
    b.includes(M) || b.push(M);
  });
  const y = l.map((g) => g.val).filter((g) => Number.isFinite(g)), x = y.length ? Math.min(...y) : 0, m = y.length ? Math.max(...y) : 1, k = d / Math.max(1, a.length), f = o / Math.max(1, b.length), p = (g) => m === x ? 0.6 : 0.15 + 0.85 * ((g - x) / (m - x));
  return ft(
    n,
    t,
    /* @__PURE__ */ $(b1, { children: [
      b.map((g, M) => /* @__PURE__ */ r(
        "text",
        {
          x: c.l - 8,
          y: c.t + M * f + f / 2 + 4,
          textAnchor: "end",
          className: U1.tickLabel,
          children: g
        },
        g
      )),
      l.map((g, M) => {
        const v = t.data[M], L = a.indexOf(g.cat), C = b.indexOf(
          t.rowProperty && v ? String(v[t.rowProperty] ?? "") : "All"
        );
        if (L < 0 || C < 0) return null;
        const z = c.l + L * k, A = c.t + C * f;
        return /* @__PURE__ */ $("g", { role: "listitem", children: [
          /* @__PURE__ */ r(
            "rect",
            {
              x: z + 1,
              y: A + 1,
              width: Math.max(1, k - 2),
              height: Math.max(1, f - 2),
              fill: s,
              fillOpacity: p(g.val),
              onMouseEnter: () => i && u(z + k / 2, A, `${t.title ?? g.cat}: ${g.val}`),
              onMouseLeave: () => h(),
              onClick: () => e.handleClick(t, g.cat, g.val, g.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ r(
            "text",
            {
              x: z + k / 2,
              y: A + f / 2 + 4,
              textAnchor: "middle",
              className: U1.dataLabel,
              children: g.val
            }
          )
        ] }, M);
      })
    ] })
  );
}
function Mm(e, t, n) {
  const l = fm(t), s = e.colorFor(n, t);
  switch (t.type) {
    case "pie":
    case "donut":
      return pm(e, t, n, l, s);
    case "scatter":
    case "bubble":
      return mm(e, t, n, l, s);
    case "line":
    case "area":
      return _m(e, t, n, l, s);
    case "gauge":
      return vm(e, t, n, l, s);
    case "radar":
      return xm(e, t, n, l, s);
    case "funnel":
      return ym(e, t, n, l, s);
    case "heatmap":
      return bm(e, t, n, l, s);
    default:
      return gm(e, t, n, l, s);
  }
}
function ag({
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
  const [u, h] = K(
    null
  ), b = v1(() => {
    const S = /* @__PURE__ */ new Set();
    for (const O of e)
      for (const w of O.data) S.add(String(w[O.categoryProperty] ?? ""));
    return [...S];
  }, [e]), y = v1(() => {
    const S = e.flatMap((w) => w.data.map((_) => Number(_[w.valueProperty]))).filter((w) => !Number.isNaN(w)), O = /* @__PURE__ */ new Map();
    for (const w of e) {
      if (!w.stack) continue;
      let _ = O.get(w.stack);
      _ || O.set(w.stack, _ = /* @__PURE__ */ new Map());
      for (const N of w.data) {
        const V = String(N[w.categoryProperty] ?? ""), T = Number(N[w.valueProperty]);
        Number.isNaN(T) || _.set(V, (_.get(V) ?? 0) + T);
      }
    }
    for (const w of O.values()) S.push(...w.values());
    return S;
  }, [e]), x = l?.min ?? (y.length ? Math.min(0, ...y) : 0), m = l?.max ?? (y.length ? Math.max(...y) : 10), k = v1(
    () => hm(x, m, l?.step),
    [x, m, l?.step]
  ), f = { t: 16, r: 16, b: 40, l: 56 }, p = t - f.l - f.r, g = n - f.t - f.b, M = (S) => f.l + S / Math.max(1, b.length - 1) * p, v = (S) => f.t + (1 - (S - k.min) / (k.max - k.min || 1)) * g, L = (S, O) => O.color ?? b2[S % b2.length], C = e.some((S) => E2.has(S.type)), z = e.some((S) => um.has(S.type)), A = {
    categories: b,
    scale: k,
    pad: f,
    plotW: p,
    plotH: g,
    xFor: M,
    yFor: v,
    colorFor: L,
    tooltipVisible: d,
    showTip: (S, O, w) => h({ x: S, y: O, text: w }),
    hideTip: () => h(null),
    handleClick: (S, O, w, _) => o?.({
      seriesTitle: S.title ?? "",
      category: O,
      value: w,
      item: _
    }),
    series: e
  };
  return /* @__PURE__ */ $(
    "figure",
    {
      className: [U1.root, i].filter(Boolean).join(" "),
      role: "img",
      "aria-label": a,
      "aria-describedby": `${a.replace(/\s+/g, "-")}-table`,
      children: [
        /* @__PURE__ */ $(
          "svg",
          {
            width: t,
            height: n,
            className: U1.svg,
            role: "presentation",
            children: [
              C && l?.gridlines !== !1 && k.ticks.map((S) => /* @__PURE__ */ r(
                "line",
                {
                  x1: f.l,
                  x2: f.l + p,
                  y1: v(S),
                  y2: v(S),
                  className: U1.gridline
                },
                S
              )),
              z && s?.gridlines && b.map((S, O) => /* @__PURE__ */ r(
                "line",
                {
                  x1: M(O),
                  x2: M(O),
                  y1: f.t,
                  y2: f.t + g,
                  className: U1.gridline
                },
                O
              )),
              C && k.ticks.map((S) => /* @__PURE__ */ r(
                "text",
                {
                  x: f.l - 8,
                  y: v(S) + 4,
                  textAnchor: "end",
                  className: U1.tickLabel,
                  children: S
                },
                S
              )),
              z && b.map((S, O) => /* @__PURE__ */ r(
                "text",
                {
                  x: M(O),
                  y: f.t + g + 16,
                  textAnchor: "middle",
                  className: U1.tickLabel,
                  children: S
                },
                S
              )),
              C && l?.title && /* @__PURE__ */ r(
                "text",
                {
                  x: 12,
                  y: f.t + g / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90,12,${f.t + g / 2})`,
                  className: U1.axisTitle,
                  children: l.title
                }
              ),
              z && s?.title && /* @__PURE__ */ r(
                "text",
                {
                  x: f.l + p / 2,
                  y: n - 4,
                  textAnchor: "middle",
                  className: U1.axisTitle,
                  children: s.title
                }
              ),
              e.some((S) => S.type === "radar") && km(A),
              e.map((S, O) => Mm(A, S, O))
            ]
          }
        ),
        u && /* @__PURE__ */ r(
          "div",
          {
            className: U1.tooltip,
            style: { left: u.x, top: u.y - 28 },
            children: u.text
          }
        ),
        c && /* @__PURE__ */ r("div", { className: U1.legend, children: e.map((S, O) => /* @__PURE__ */ $("span", { className: U1.legendItem, children: [
          /* @__PURE__ */ r(
            "span",
            {
              className: U1.swatch,
              style: { backgroundColor: L(O, S) },
              "aria-hidden": "true"
            }
          ),
          S.title ?? `Series ${O + 1}`
        ] }, O)) }),
        /* @__PURE__ */ $(
          "table",
          {
            className: U1.visuallyHidden,
            id: `${a.replace(/\s+/g, "-")}-table`,
            children: [
              /* @__PURE__ */ r("caption", { children: a }),
              /* @__PURE__ */ r("thead", { children: /* @__PURE__ */ $("tr", { children: [
                /* @__PURE__ */ r("th", { children: "Series" }),
                /* @__PURE__ */ r("th", { children: "Category" }),
                /* @__PURE__ */ r("th", { children: "Value" })
              ] }) }),
              /* @__PURE__ */ r("tbody", { children: e.map(
                (S) => S.data.map((O, w) => /* @__PURE__ */ $("tr", { children: [
                  /* @__PURE__ */ r("td", { children: S.title ?? "" }),
                  /* @__PURE__ */ r("td", { children: S.rowProperty ? `${String(O[S.rowProperty] ?? "")} / ${String(O[S.categoryProperty] ?? "")}` : String(O[S.categoryProperty] ?? "") }),
                  /* @__PURE__ */ r("td", { children: String(O[S.valueProperty] ?? "") })
                ] }, `${S.title}-${w}`))
              ) })
            ]
          }
        )
      ]
    }
  );
}
export {
  Is as ALERT_ICON,
  g_ as Accordion,
  l_ as Alert,
  i_ as AutoGrid,
  x_ as Autocomplete,
  m_ as Avatar,
  Lm as Badge,
  og as Barcode,
  u_ as Body,
  K_ as Breadcrumb,
  b0 as Button,
  zm as Card,
  G_ as Carousel,
  ag as Chart,
  Jm as Checkbox,
  b_ as Checkboxlist,
  S_ as Colorpicker,
  s_ as Column,
  I_ as ContextMenuProvider,
  Kt as DEFAULT_OPERATOR_BY_TYPE,
  N9 as DEFAULT_PALETTE,
  Zm as DataFilter,
  Um as DataGrid,
  Xm as DataList,
  O_ as Datepicker,
  Va as Dialog,
  t_ as DialogProvider,
  E_ as DropZone,
  k_ as Dropdown,
  Am as EmptyState,
  w2 as FILTER_OPERATORS,
  F_ as FabMenu,
  Hm as Field,
  Vm as Fieldset,
  n8 as Footer,
  Tm as Form,
  jm as FormField,
  eg as Gantt,
  o8 as Header,
  C1 as Icon,
  Ym as Input,
  Gm as Label,
  d_ as Layout,
  W_ as Link,
  y_ as Listbox,
  $_ as Mask,
  Eu as Menu,
  V2 as MenuItem,
  N_ as Numeric,
  Zl as Pager,
  R_ as PanelMenu,
  P_ as PanelMenuItem,
  L_ as Password,
  J_ as PickList,
  tg as Pivot,
  B_ as ProfileMenu,
  f_ as Progress,
  lg as QRCode,
  M_ as Radiobuttonlist,
  A_ as Rating,
  a_ as Row,
  Q_ as Scheduler,
  V_ as SecurityCode,
  Dt as Select,
  C_ as Selectbar,
  g8 as Sidebar,
  h_ as SidebarToggle,
  T_ as SignaturePad,
  o_ as Skeleton,
  H_ as Slider,
  z_ as Splitbutton,
  U_ as Splitter,
  c_ as Stack,
  Sm as Stat,
  Z_ as Steps,
  pa as Switch,
  Om as Table,
  __ as Tabs,
  Ga as Text,
  v_ as Textarea,
  da as Textbox,
  p_ as ThemeSwitcher,
  ng as Timeline,
  j_ as Timespanpicker,
  r_ as ToastProvider,
  X_ as Toc,
  w_ as Togglebutton,
  Qm as Tooltip,
  Y_ as Tree,
  D_ as Upload,
  rg as VirtualGrid,
  to as aggregateValue,
  L2 as applyFilters,
  eo as applyGridState,
  Y0 as collectGroupKeys,
  Ct as columnValue,
  Bm as compare,
  Km as custom,
  Yl as cycleSort,
  Q0 as defaultOperatorForType,
  Em as email,
  i2 as formatMasked,
  g0 as formatValue,
  _0 as getByPath,
  Ul as groupItems,
  Nm as iconNames,
  $m as iconSetNames,
  M2 as iconSets,
  z2 as matchesFilters,
  Pm as maxLength,
  Im as minLength,
  Ql as paginate,
  qm as pattern,
  Rm as range,
  Dm as required,
  Fm as requiredTrue,
  q0 as resolveVariant,
  el as runValidators,
  Et as shadeClass,
  gl as sortItems,
  Jl as sortedItems,
  no as toCsv,
  hl as toFilterString,
  _l as toODataFilterString,
  q_ as useContextMenu,
  e_ as useDialog,
  Qr as useFormContext,
  Wm as useFormField,
  O2 as useMediaQuery,
  n_ as useToast
};
