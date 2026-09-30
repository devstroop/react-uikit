import { jsx as n, jsxs as L, Fragment as b1 } from "react/jsx-runtime";
import { forwardRef as I1, useId as E1, isValidElement as ve, cloneElement as Vt, useState as W, useRef as Q, useCallback as I, useMemo as g1, useContext as f0, createContext as D0, useEffect as v1, Fragment as Dt, useLayoutEffect as Nt, Children as lt, useImperativeHandle as Et } from "react";
function nt(e) {
  return e == null || e === "default" || e === "medium" ? null : `shade-${e}`;
}
const W2 = "_button_eyvws_1", Z2 = "_filled_eyvws_36", U2 = "_flat_eyvws_55", G2 = "_outlined_eyvws_58", X2 = "_text_eyvws_63", Y2 = "_loading_eyvws_506", J2 = "_spinner_eyvws_509", Q2 = "_xs_eyvws_525", er = "_sm_eyvws_531", tr = "_md_eyvws_537", rr = "_lg_eyvws_543", nr = "_xl_eyvws_549", lr = "_iconOnly_eyvws_555", or = "_fullWidth_eyvws_585", Xe = {
  button: W2,
  filled: Z2,
  flat: U2,
  outlined: G2,
  text: X2,
  "style-primary": "_style-primary_eyvws_82",
  "style-secondary": "_style-secondary_eyvws_101",
  "style-base": "_style-base_eyvws_119",
  "style-light": "_style-light_eyvws_139",
  "style-dark": "_style-dark_eyvws_157",
  "style-danger": "_style-danger_eyvws_176",
  "style-success": "_style-success_eyvws_195",
  "style-warning": "_style-warning_eyvws_214",
  "style-info": "_style-info_eyvws_233",
  "shade-lighter": "_shade-lighter_eyvws_418",
  "shade-light": "_shade-light_eyvws_418",
  "shade-dark": "_shade-dark_eyvws_428",
  "shade-darker": "_shade-darker_eyvws_432",
  loading: Y2,
  spinner: J2,
  "dx-spin": "_dx-spin_eyvws_1",
  xs: Q2,
  sm: er,
  md: tr,
  lg: rr,
  xl: nr,
  iconOnly: lr,
  fullWidth: or
};
function ar(e, t) {
  const r = t, l = e ?? "filled";
  return { variant: l === "filled" || l === "flat" || l === "outlined" || l === "text" ? l : "filled", style: r ?? "primary" };
}
const V0 = I1(
  function(t, r) {
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
      disabled: x,
      children: b,
      ...k
    } = t;
    if (u === !1) return null;
    const m = ar(l, s), p = m.style === "light" || m.style === "dark" ? null : nt(c), f = [
      Xe.button,
      Xe[m.variant],
      Xe[`style-${m.style}`],
      p ? Xe[p] : null,
      Xe[d],
      o ? Xe.fullWidth : null,
      a ? Xe.iconOnly : null,
      i ? Xe.loading : null,
      // Press feedback on every button (Radzen material parity).
      "dx-ripple",
      h
    ].filter(Boolean).join(" "), g = /* @__PURE__ */ L(b1, { children: [
      i ? /* @__PURE__ */ n("span", { "aria-hidden": "true", className: Xe.spinner }) : null,
      b
    ] }), M = t.href;
    if (M != null) {
      const { onClick: C, ...z } = k, A = x || i;
      return /* @__PURE__ */ n(
        "a",
        {
          ref: r,
          href: M,
          className: f,
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
    const { type: v = "button", ...w } = k;
    return /* @__PURE__ */ n(
      "button",
      {
        ref: r,
        type: v,
        className: f,
        disabled: x || i,
        "aria-busy": i || void 0,
        ...w,
        children: g
      }
    );
  }
), sr = "_card_4vcae_1", cr = "_elevated_4vcae_8", ir = "_filled_4vcae_13", dr = "_outlined_4vcae_18", ur = "_interactive_4vcae_22", hr = "_text_4vcae_30", fr = "_header_4vcae_46", pr = "_body_4vcae_53", mr = "_footer_4vcae_63", q0 = {
  card: sr,
  elevated: cr,
  filled: ir,
  outlined: dr,
  interactive: ur,
  text: hr,
  header: fr,
  body: pr,
  footer: mr
}, Jp = I1(function({
  variant: t = "elevated",
  header: r,
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
    /* @__PURE__ */ L(
      "div",
      {
        ref: i,
        role: u ? "button" : void 0,
        tabIndex: u ? 0 : void 0,
        onKeyDown: (h) => {
          o?.(h), !(!u || h.key !== "Enter" && h.key !== " ") && (h.preventDefault(), h.currentTarget.click());
        },
        className: [q0.card, q0[t], s].filter(Boolean).join(" "),
        ...a,
        children: [
          r != null && /* @__PURE__ */ n("div", { className: q0.header, children: r }),
          /* @__PURE__ */ n("div", { className: q0.body, children: d }),
          l != null && /* @__PURE__ */ n("div", { className: q0.footer, children: l })
        ]
      }
    )
  );
});
function b2(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const _r = "_badge_1fy6d_1", vr = "_xs_1fy6d_21", gr = "_sm_1fy6d_26", kr = "_md_1fy6d_31", yr = "_lg_1fy6d_36", xr = "_xl_1fy6d_41", br = "_neutral_1fy6d_47", Mr = "_primary_1fy6d_52", Cr = "_secondary_1fy6d_61", wr = "_light_1fy6d_66", zr = "_base_1fy6d_71", Lr = "_dark_1fy6d_76", $r = "_info_1fy6d_81", Nr = "_success_1fy6d_86", Or = "_warning_1fy6d_95", Sr = "_danger_1fy6d_104", Ar = "_filled_1fy6d_111", Hr = "_outlined_1fy6d_161", jr = "_text_1fy6d_213", P0 = {
  badge: _r,
  xs: vr,
  sm: gr,
  md: kr,
  lg: yr,
  xl: xr,
  neutral: br,
  primary: Mr,
  secondary: Cr,
  light: wr,
  base: zr,
  dark: Lr,
  info: $r,
  success: Nr,
  warning: Or,
  danger: Sr,
  filled: Ar,
  outlined: Hr,
  text: jr,
  "shade-lighter": "_shade-lighter_1fy6d_486",
  "shade-light": "_shade-light_1fy6d_486",
  "shade-dark": "_shade-dark_1fy6d_494",
  "shade-darker": "_shade-darker_1fy6d_497"
}, Qp = I1(function({
  severity: t = "primary",
  variant: r = "filled",
  shade: l,
  size: s = "md",
  className: c,
  visible: d = !0,
  children: o,
  ...a
}, i) {
  if (d === !1) return null;
  const u = t, h = b2(r, "filled"), x = nt(l);
  return /* @__PURE__ */ n(
    "span",
    {
      ref: i,
      className: [
        P0.badge,
        P0[s],
        P0[u],
        P0[h],
        x ? P0[x] : null,
        c
      ].filter(Boolean).join(" "),
      ...a,
      children: o
    }
  );
}), Tr = {
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
    ban: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93l14.14 14.14"/></g>',
    sun: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></g>',
    moon: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79"/>'
  }
}, Vr = {
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
    ban: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M4.929 4.929L19.07 19.071"/></g>',
    sun: '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></g>',
    moon: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>'
  }
}, Dr = {
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
    ban: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m2.7-6.3l12.6 12.6"/>',
    sun: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-5 0h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7"/>',
    moon: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z"/>'
  }
}, Er = {
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
    ban: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"/>',
    sun: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0a3.75 3.75 0 0 1 7.5 0"/>',
    moon: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.752 15.002A9.7 9.7 0 0 1 18 15.75A9.75 9.75 0 0 1 8.25 6c0-1.33.266-2.597.748-3.752A9.75 9.75 0 0 0 3 11.25A9.75 9.75 0 0 0 12.75 21a9.75 9.75 0 0 0 9.002-5.998"/>'
  }
}, Ir = {
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
    ban: '<path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m88 104a87.56 87.56 0 0 1-20.41 56.28L71.72 60.4A88 88 0 0 1 216 128m-176 0a87.56 87.56 0 0 1 20.41-56.28L184.28 195.6A88 88 0 0 1 40 128"/>',
    sun: '<path fill="currentColor" d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0m72 88a64 64 0 1 1-64-64a64.07 64.07 0 0 1 64 64m-16 0a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48M58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32M192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72m5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8m80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8m112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16"/>',
    moon: '<path fill="currentColor" d="M233.54 142.23a8 8 0 0 0-8-2a88.08 88.08 0 0 1-109.8-109.8a8 8 0 0 0-10-10a104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.1 103.1 0 0 0 62.52-20.88a104.84 104.84 0 0 0 37-52.91a8 8 0 0 0-1.98-7.98m-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104a106 106 0 0 0 14.92-1.06a89 89 0 0 1-26.02 31.4"/>'
  }
}, qr = {
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
    ban: '<path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16M8.523 7.109l8.368 8.368a6 6 0 0 1-1.414 1.414L7.109 8.523A6 6 0 0 1 8.523 7.11"/>',
    sun: '<path fill="currentColor" d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12m0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8M11 1h2v3h-2zm0 19h2v3h-2zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414zM5.636 16.95l1.414 1.414l-2.121 2.121l-1.414-1.414zM23 11v2h-3v-2zM4 11v2H1v-2z"/>',
    moon: '<path fill="currentColor" d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2h.1A6.98 6.98 0 0 0 10 7m-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938A8 8 0 0 0 4 12"/>'
  }
}, Pr = {
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
    ban: '<path fill="currentColor" d="M26 28H6c-1.103 0-2-.897-2-2V6c0-1.103.897-2 2-2h20c1.103 0 2 .897 2 2v20c0 1.103-.897 2-2 2M6 6v20h20.002L26 6zm6.868 17.496l-1.736-.992l8-14l1.736.992z"/>',
    sun: '<path fill="currentColor" d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6M5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"/>',
    moon: '<path fill="currentColor" d="M13.503 5.414a15.076 15.076 0 0 0 11.593 18.194a11.1 11.1 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1 1 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.07 13.07 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3"/>'
  }
}, Br = {
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
    ban: '<circle cx="256" cy="256" r="200" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="48"/><path fill="currentColor" stroke="currentColor" stroke-miterlimit="10" stroke-width="48" d="m114.58 114.58l282.84 282.84"/>',
    sun: '<path fill="currentColor" d="M256 118a22 22 0 0 1-22-22V48a22 22 0 0 1 44 0v48a22 22 0 0 1-22 22m0 368a22 22 0 0 1-22-22v-48a22 22 0 0 1 44 0v48a22 22 0 0 1-22 22m113.14-321.14a22 22 0 0 1-15.56-37.55l33.94-33.94a22 22 0 0 1 31.11 31.11l-33.94 33.94a21.93 21.93 0 0 1-15.55 6.44M108.92 425.08a22 22 0 0 1-15.55-37.56l33.94-33.94a22 22 0 1 1 31.11 31.11l-33.94 33.94a21.94 21.94 0 0 1-15.56 6.45M464 278h-48a22 22 0 0 1 0-44h48a22 22 0 0 1 0 44m-368 0H48a22 22 0 0 1 0-44h48a22 22 0 0 1 0 44m307.08 147.08a21.94 21.94 0 0 1-15.56-6.45l-33.94-33.94a22 22 0 0 1 31.11-31.11l33.94 33.94a22 22 0 0 1-15.55 37.56M142.86 164.86a21.9 21.9 0 0 1-15.55-6.44l-33.94-33.94a22 22 0 0 1 31.11-31.11l33.94 33.94a22 22 0 0 1-15.56 37.55M256 358a102 102 0 1 1 102-102a102.12 102.12 0 0 1-102 102"/>',
    moon: '<path fill="currentColor" d="M264 480A232 232 0 0 1 32 248c0-94 54-178.28 137.61-214.67a16 16 0 0 1 21.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200c31.34 0 59.57-5.07 81.61-14.67a16 16 0 0 1 21.06 21.06C442.28 426 358 480 264 480"/>'
  }
}, Rr = {
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
}, Fr = {
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
    ban: '<path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m5 11H7v-2h10v2z" fill="currentColor"/>',
    sun: '<path fill="currentColor" d="M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0-7l2.39 3.42C13.65 5.15 12.84 5 12 5s-1.65.15-2.39.42zM3.34 7l4.16-.35A7.2 7.2 0 0 0 5.94 8.5c-.44.74-.69 1.5-.83 2.29zm.02 10l1.76-3.77a7.13 7.13 0 0 0 2.38 4.14zM20.65 7l-1.77 3.79a7.02 7.02 0 0 0-2.38-4.15zm-.01 10l-4.14.36c.59-.51 1.12-1.14 1.54-1.86c.42-.73.69-1.5.83-2.29zM12 22l-2.41-3.44c.74.27 1.55.44 2.41.44c.82 0 1.63-.17 2.37-.44z"/>',
    moon: '<path fill="currentColor" d="m17.75 4.09l-2.53 1.94l.91 3.06l-2.63-1.81l-2.63 1.81l.91-3.06l-2.53-1.94L12.44 4l1.06-3l1.06 3zm3.5 6.91l-1.64 1.25l.59 1.98l-1.7-1.17l-1.7 1.17l.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95zm-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85c-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14c.4-.4.82-.76 1.27-1.08c.75-.53 1.93.36 1.85 1.19c-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82c-2.81 3.14-2.7 7.96.31 10.98c3.02 3.01 7.84 3.12 10.98.31"/>'
  }
}, Kr = {
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
    ban: '<path fill="currentColor" d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5m45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5zM0 256a256 256 0 1 1 512 0a256 256 0 1 1-512 0"/>',
    sun: '<path fill="currentColor" d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391l-19.9 107.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391L13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256L2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121l19.9-107.9c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1l90.3-62.3c4.5-3.1 10.2-3.7 15.2-1.6M160 256a96 96 0 1 1 192 0a96 96 0 1 1-192 0m224 0a128 128 0 1 0-256 0a128 128 0 1 0 256 0"/>',
    moon: '<path fill="currentColor" d="M223.5 32C100 32 0 132.3 0 256s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/>'
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
    star: "0 0 576 512",
    moon: "0 0 384 512"
  }
}, Wr = {
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
    ban: '<path fill="currentColor" d="M15 8a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0"/>',
    sun: '<path fill="currentColor" d="M8 11a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8a4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>',
    moon: '<path fill="currentColor" d="M6 .278a.77.77 0 0 1 .08.858a7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316a.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71C0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29c0-1.167.242-2.278.681-3.286"/>'
  }
}, Zr = {
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
    ban: '<path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m6.517 4.543L6.543 18.517A8.5 8.5 0 0 0 18.517 6.543M12 3.5a8.5 8.5 0 0 0-6.517 13.957L17.457 5.483A8.47 8.47 0 0 0 12 3.5"/>',
    sun: '<path fill="currentColor" d="M12 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 2m0 15a5 5 0 1 0 0-10a5 5 0 0 0 0 10m0-1.5a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7m9.25-2.75a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5zM12 19a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 19m-7.75-6.25a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5zm-.03-8.53a.75.75 0 0 1 1.06 0l1.5 1.5a.75.75 0 0 1-1.06 1.06l-1.5-1.5a.75.75 0 0 1 0-1.06m1.06 15.56a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 1 1 1.06 1.06zm14.5-15.56a.75.75 0 0 0-1.06 0l-1.5 1.5a.75.75 0 0 0 1.06 1.06l1.5-1.5a.75.75 0 0 0 0-1.06m-1.06 15.56a.75.75 0 1 0 1.06-1.06l-1.5-1.5a.75.75 0 1 0-1.06 1.06z"/>',
    moon: '<path fill="currentColor" d="M20.026 17.001c-2.762 4.784-8.879 6.423-13.663 3.661A10 10 0 0 1 3.13 17.68a.75.75 0 0 1 .365-1.132c3.767-1.348 5.785-2.91 6.956-5.146c1.233-2.353 1.551-4.93.689-8.463a.75.75 0 0 1 .769-.927a9.96 9.96 0 0 1 4.457 1.327c4.784 2.762 6.423 8.879 3.66 13.662m-8.247-4.903c-1.252 2.389-3.312 4.1-6.818 5.499a8.5 8.5 0 0 0 2.152 1.766a8.502 8.502 0 0 0 8.502-14.725a8.5 8.5 0 0 0-2.792-1.015c.647 3.384.23 6.043-1.045 8.475"/>'
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
    ban: "0 0 24 24",
    sun: "0 0 24 24",
    moon: "0 0 24 24"
  }
}, Ur = {
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
    ban: '<path fill="currentColor" d="M8.1 21.213q-1.825-.788-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22t-3.9-.788m8.825-2.887q.4-.3.75-.65t.65-.75L7.075 5.675q-.4.3-.75.65t-.65.75z"/>',
    sun: '<path fill="currentColor" d="M8.463 15.538Q7 14.075 7 12t1.463-3.537T12 7t3.538 1.463T17 12t-1.463 3.538T12 17t-3.537-1.463M5 13H1v-2h4zm18 0h-4v-2h4zM11 5V1h2v4zm0 18v-4h2v4zM6.4 7.75L3.875 5.325L5.3 3.85l2.4 2.5zm12.3 12.4l-2.425-2.525L17.6 16.25l2.525 2.425zM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4zM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525z"/>',
    moon: '<path fill="currentColor" d="M12 21q-3.75 0-6.375-2.625T3 12t2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21"/>'
  }
}, Gr = {
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
}, Xr = {
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
  feather: Tr,
  lucide: Vr,
  tabler: Dr,
  heroicons: Er,
  ph: Ir,
  ri: qr,
  carbon: Pr,
  ion: Br,
  octicon: Rr,
  mdi: Fr,
  "fa6-solid": Kr,
  bi: Wr,
  fluent: Zr,
  "material-symbols": Ur,
  "simple-icons": Gr,
  "fa6-brands": Xr
}, em = Object.keys(M2), Yr = "_xs_2a6lm_2", Jr = "_sm_2a6lm_7", Qr = "_md_2a6lm_1", en = "_lg_2a6lm_17", tn = "_xl_2a6lm_22", rn = {
  xs: Yr,
  sm: Jr,
  md: Qr,
  lg: en,
  xl: tn
}, tm = [
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
  "ban",
  "sun",
  "moon"
], nn = {
  check: /* @__PURE__ */ n("path", { d: "M20 6L9 17l-5-5" }),
  close: /* @__PURE__ */ n("path", { d: "M18 6L6 18M6 6l12 12" }),
  "chevron-down": /* @__PURE__ */ n("path", { d: "M6 9l6 6 6-6" }),
  "chevron-left": /* @__PURE__ */ n("path", { d: "M15 18l-6-6 6-6" }),
  "chevron-right": /* @__PURE__ */ n("path", { d: "M9 18l6-6-6-6" }),
  "chevron-up": /* @__PURE__ */ n("path", { d: "M18 15l-6-6-6 6" }),
  search: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ n("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ n("path", { d: "M21 21l-4.3-4.3" })
  ] }),
  plus: /* @__PURE__ */ n("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ n("path", { d: "M5 12h14" }),
  alert: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ n("path", { d: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" }),
    /* @__PURE__ */ n("path", { d: "M12 9v4M12 17h.01" })
  ] }),
  info: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M12 16v-4M12 8h.01" })
  ] }),
  "arrow-right": /* @__PURE__ */ n("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  "arrow-left": /* @__PURE__ */ n("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  "external-link": /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ n("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
    /* @__PURE__ */ n("path", { d: "M15 3h6v6M10 14L21 3" })
  ] }),
  copy: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ n("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] }),
  trash: /* @__PURE__ */ n(b1, { children: /* @__PURE__ */ n("path", { d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" }) }),
  edit: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ n("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ n("path", { d: "M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  settings: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ n("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] }),
  user: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ n("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ n("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ n("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ n("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ n("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  download: /* @__PURE__ */ n("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  upload: /* @__PURE__ */ n("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  menu: /* @__PURE__ */ n("path", { d: "M3 12h18M3 6h18M3 18h18" }),
  "more-horizontal": /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ n("circle", { cx: "19", cy: "12", r: "1" }),
    /* @__PURE__ */ n("circle", { cx: "5", cy: "12", r: "1" })
  ] }),
  mail: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ n("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M22 6l-10 7L2 6" })
  ] }),
  lock: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ n("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M7 11V7a5 5 0 0110 0v4" })
  ] }),
  eye: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ n("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  "eye-off": /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ n("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ n("path", { d: "M1 1l22 22" })
  ] }),
  refresh: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ n("path", { d: "M23 4v6h-6M1 20v-6h6" }),
    /* @__PURE__ */ n("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
  ] }),
  calendar: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ n("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M16 2v4M8 2v4M3 10h18" })
  ] }),
  clock: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M12 6v6l4 2" })
  ] }),
  "check-circle": /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ n("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ n("path", { d: "M22 4L12 14.01l-3-3" })
  ] }),
  "x-circle": /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] }),
  shield: /* @__PURE__ */ n(b1, { children: /* @__PURE__ */ n("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  globe: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
  ] }),
  file: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ n("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
    /* @__PURE__ */ n("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
  ] }),
  folder: /* @__PURE__ */ n("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" }),
  home: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ n("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
    /* @__PURE__ */ n("path", { d: "M9 22V12h6v10" })
  ] }),
  key: /* @__PURE__ */ n(b1, { children: /* @__PURE__ */ n("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) }),
  link: /* @__PURE__ */ L(b1, { children: [
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
  ban: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M4.93 4.93l14.14 14.14" })
  ] }),
  sun: /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "5" }),
    /* @__PURE__ */ n("path", { d: "M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" })
  ] }),
  moon: /* @__PURE__ */ n("path", { d: "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" })
}, M1 = I1(function({ name: t, size: r = "md", strokeWidth: l, className: s, ...c }, d) {
  const o = typeof r == "string", a = t.indexOf(":"), i = a >= 0 ? M2[t.slice(0, a)] : void 0, u = a >= 0 ? t.slice(a + 1) : "", h = i?.style === "fill", x = i !== void 0 ? { dangerouslySetInnerHTML: { __html: i.icons[u] ?? "" } } : {};
  return /* @__PURE__ */ n(
    "svg",
    {
      ref: d,
      className: [o ? rn[r] : null, s].filter(Boolean).join(" "),
      width: o ? void 0 : r,
      height: o ? void 0 : r,
      viewBox: i !== void 0 ? i.viewBoxBy?.[u] ?? i.viewBox : "0 0 24 24",
      fill: h ? "currentColor" : "none",
      stroke: h ? "none" : "currentColor",
      strokeWidth: l ?? i?.strokeWidth ?? 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      ...c,
      ...x,
      children: i !== void 0 ? null : nn[t]
    }
  );
}), ln = "_stat_sjin9_1", on = "_label_sjin9_8", an = "_row_sjin9_16", sn = "_value_sjin9_22", cn = "_delta_sjin9_28", dn = "_success_sjin9_33", un = "_danger_sjin9_37", hn = "_neutral_sjin9_41", fn = "_hint_sjin9_45", v0 = {
  stat: ln,
  label: on,
  row: an,
  value: sn,
  delta: cn,
  success: dn,
  danger: un,
  neutral: hn,
  hint: fn
}, rm = I1(function({ label: t, value: r, delta: l, deltaTone: s = "neutral", hint: c, className: d, ...o }, a) {
  return /* @__PURE__ */ L(
    "div",
    {
      ref: a,
      className: [v0.stat, d].filter(Boolean).join(" "),
      ...o,
      children: [
        /* @__PURE__ */ n("div", { className: v0.label, children: t }),
        /* @__PURE__ */ L("div", { className: v0.row, children: [
          /* @__PURE__ */ n("div", { className: v0.value, children: r }),
          l != null && /* @__PURE__ */ n("div", { className: [v0.delta, v0[s]].join(" "), children: l })
        ] }),
        c != null && /* @__PURE__ */ n("div", { className: v0.hint, children: c })
      ]
    }
  );
}), pn = "_wrap_ipozk_1", mn = "_table_ipozk_8", _n = "_caption_ipozk_14", vn = "_none_ipozk_51", gn = "_horizontal_ipozk_57", kn = "_vertical_ipozk_67", yn = "_alternating_ipozk_85", xn = "_start_ipozk_89", bn = "_center_ipozk_93", Mn = "_end_ipozk_97", Cn = "_empty_ipozk_101", s0 = {
  wrap: pn,
  table: mn,
  caption: _n,
  none: vn,
  horizontal: gn,
  vertical: kn,
  alternating: yn,
  start: xn,
  center: bn,
  end: Mn,
  empty: Cn
};
function nm({
  columns: e,
  rows: t,
  rowKey: r,
  empty: l,
  caption: s,
  gridLines: c = "default",
  allowAlternatingRows: d = !0,
  className: o,
  visible: a = !0
}) {
  if (a === !1) return null;
  const i = c === "default" || c === "both" ? "" : s0[c];
  return /* @__PURE__ */ L("div", { className: [s0.wrap, o].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ L(
      "table",
      {
        className: [
          s0.table,
          i,
          d ? s0.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          s != null && /* @__PURE__ */ n("caption", { className: s0.caption, children: s }),
          /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ n("tr", { children: e.map((u) => /* @__PURE__ */ n(
            "th",
            {
              className: u.align != null ? s0[u.align] : void 0,
              scope: "col",
              children: u.header
            },
            u.key
          )) }) }),
          /* @__PURE__ */ n("tbody", { children: t.map((u) => /* @__PURE__ */ n("tr", { children: e.map((h) => /* @__PURE__ */ n(
            "td",
            {
              className: h.align != null ? s0[h.align] : void 0,
              children: h.render != null ? h.render(u) : u[h.key]
            },
            h.key
          )) }, r(u))) })
        ]
      }
    ),
    t.length === 0 && l != null && /* @__PURE__ */ n("div", { className: s0.empty, children: l })
  ] });
}
const wn = "_emptyState_1swxw_1", zn = "_icon_1swxw_13", Ln = "_title_1swxw_18", $n = "_description_1swxw_24", Nn = "_action_1swxw_30", B0 = {
  emptyState: wn,
  icon: zn,
  title: Ln,
  description: $n,
  action: Nn
};
function lm({
  icon: e,
  title: t,
  description: r,
  action: l,
  className: s,
  visible: c = !0
}) {
  return c === !1 ? null : /* @__PURE__ */ L("div", { className: [B0.emptyState, s].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ n("div", { className: B0.icon, children: e }),
    /* @__PURE__ */ n("div", { className: B0.title, children: t }),
    r != null && /* @__PURE__ */ n("div", { className: B0.description, children: r }),
    l != null && /* @__PURE__ */ n("div", { className: B0.action, children: l })
  ] });
}
const On = "_field_149oz_1", Sn = "_label_149oz_8", An = "_required_149oz_14", Hn = "_hint_149oz_19", jn = "_error_149oz_24", R0 = {
  field: On,
  label: Sn,
  required: An,
  hint: Hn,
  error: jn
};
function om({
  label: e,
  htmlFor: t,
  required: r,
  hint: l,
  supporting: s,
  error: c,
  children: d,
  className: o,
  visible: a = !0
}) {
  const i = l ?? s, u = E1(), h = E1(), x = E1();
  if (a === !1) return null;
  const b = c != null ? h : i != null ? x : null, k = typeof d == "function" ? d({ inputId: u, hintId: x, errorId: h }) : d, m = ve(k) && typeof k.props.id == "string" ? k.props.id : void 0, _ = m ?? t ?? u, p = ve(k) && (b != null || m == null && typeof k.type == "string"), f = m != null || t != null || p, g = p && ve(k) ? Vt(k, {
    id: _,
    "aria-describedby": b != null ? [
      k.props["aria-describedby"],
      b
    ].filter((M) => typeof M == "string").join(" ") || void 0 : k.props["aria-describedby"],
    "aria-invalid": c != null ? !0 : k.props["aria-invalid"]
  }) : k;
  return /* @__PURE__ */ L("div", { className: [R0.field, o].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ L(
      "label",
      {
        className: R0.label,
        htmlFor: f ? _ : void 0,
        children: [
          e,
          r === !0 && /* @__PURE__ */ n("span", { className: R0.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    g,
    c != null ? /* @__PURE__ */ n("div", { id: h, className: R0.error, "aria-live": "polite", children: c }) : i != null ? /* @__PURE__ */ n("div", { id: x, className: R0.hint, children: i }) : null
  ] });
}
const Tn = "_formfield_6e25e_1", Vn = "_content_6e25e_8", Dn = "_floating_6e25e_43", En = "_label_6e25e_111", In = "_start_6e25e_132", qn = "_required_6e25e_169", Pn = "_end_6e25e_175", Bn = "_filled_6e25e_192", Rn = "_flat_6e25e_199", Fn = "_helper_6e25e_206", Kn = "_invalid_6e25e_211", Fe = {
  formfield: Tn,
  content: Vn,
  floating: Dn,
  label: En,
  start: In,
  required: qn,
  end: Pn,
  filled: Bn,
  flat: Rn,
  helper: Fn,
  invalid: Kn
};
function am({
  text: e,
  start: t,
  end: r,
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
  const x = E1(), b = E1();
  if (h === !1) return null;
  const k = s ?? x, m = typeof i == "function" ? i({
    inputId: k
  }) : i, _ = ve(m) ? m.type : null, p = typeof _ == "string", f = ve(m) && typeof _ != "symbol", g = ve(m) ? m.props : null, M = typeof g?.id == "string" ? g.id : void 0, v = p && ve(m) ? m.type.toLowerCase() : null, w = v != null && (v === "input" ? typeof g?.type != "string" || g.type.toLowerCase() !== "hidden" : v === "button" || v === "meter" || v === "output" || v === "progress" || v === "select" || v === "textarea"), C = f && (l != null || o || M == null && w), z = M != null || s != null || C, A = v === "input" && typeof g?.type == "string" ? g.type.toLowerCase() : null, S = v === "textarea" || v === "input" && (A == null || [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number"
  ].includes(A)), O = C && ve(m) ? Vt(
    m,
    {
      id: M ?? k,
      ...c && S && g?.placeholder == null ? { placeholder: " " } : {},
      ...l != null ? {
        "aria-describedby": [
          g?.["aria-describedby"],
          b
        ].filter((y) => typeof y == "string").join(" ")
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
        a === !0 && /* @__PURE__ */ n("span", { className: Fe.required, "aria-hidden": "true", children: "*" })
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
        u
      ].filter(Boolean).join(" "),
      children: [
        c ? null : $,
        /* @__PURE__ */ L("div", { className: Fe.content, children: [
          t != null && /* @__PURE__ */ n("div", { className: Fe.start, children: t }),
          O,
          c ? $ : null,
          r != null && /* @__PURE__ */ n("div", { className: Fe.end, children: r })
        ] }),
        l != null && /* @__PURE__ */ n("div", { id: b, className: Fe.helper, children: l })
      ]
    }
  );
}
const Wn = "_fieldset_8x01p_1", Zn = "_legend_8x01p_11", Un = "_legendText_8x01p_20", Gn = "_toggle_8x01p_24", Xn = "_content_8x01p_45", Yn = "_summary_8x01p_49", g0 = {
  fieldset: Wn,
  legend: Zn,
  legendText: Un,
  toggle: Gn,
  content: Xn,
  summary: Yn
};
function sm({
  text: e,
  headerTemplate: t,
  icon: r,
  iconColor: l,
  allowCollapse: s = !1,
  collapsed: c,
  defaultCollapsed: d = !1,
  summary: o,
  expandTitle: a,
  collapseTitle: i,
  expandAriaLabel: u,
  collapseAriaLabel: h,
  onExpand: x,
  onCollapse: b,
  children: k,
  className: m,
  visible: _ = !0
}) {
  const p = E1(), [f, g] = W(d);
  if (_ === !1) return null;
  const M = c ?? f, v = s ? `${p}-content` : void 0, w = () => {
    const $ = !M;
    c === void 0 && g($), $ ? b?.() : x?.();
  }, C = s || e != null || r != null || t != null, z = s ? M : !1, A = s && M && o != null, S = z ? a ?? "Expand" : i ?? "Collapse", O = z ? u ?? "Expand" : h ?? "Collapse";
  return /* @__PURE__ */ L(
    "fieldset",
    {
      className: [g0.fieldset, m].filter(Boolean).join(" "),
      children: [
        C ? /* @__PURE__ */ n("legend", { className: g0.legend, children: s ? /* @__PURE__ */ L(b1, { children: [
          /* @__PURE__ */ L(
            "button",
            {
              type: "button",
              className: g0.toggle,
              title: S,
              "aria-label": e == null ? O : void 0,
              "aria-expanded": !z,
              "aria-controls": v,
              onClick: w,
              children: [
                /* @__PURE__ */ n(
                  M1,
                  {
                    name: z ? "plus" : "minus",
                    size: 16,
                    "aria-hidden": "true"
                  }
                ),
                r != null && /* @__PURE__ */ n(
                  M1,
                  {
                    name: r,
                    "aria-hidden": "true",
                    ...l != null ? { style: { color: l } } : {}
                  }
                ),
                e != null && /* @__PURE__ */ n("span", { className: g0.legendText, children: e })
              ]
            }
          ),
          t
        ] }) : /* @__PURE__ */ L(b1, { children: [
          r != null && /* @__PURE__ */ n(
            M1,
            {
              name: r,
              "aria-hidden": "true",
              ...l != null ? { style: { color: l } } : {}
            }
          ),
          e != null && /* @__PURE__ */ n("span", { className: g0.legendText, children: e }),
          t
        ] }) }) : null,
        /* @__PURE__ */ n(
          "div",
          {
            className: g0.content,
            id: v,
            hidden: z,
            children: k
          }
        ),
        A ? /* @__PURE__ */ n("div", { className: g0.summary, children: o }) : null
      ]
    }
  );
}
const Jn = "_form_19k3s_1", Qn = {
  form: Jn
}, C2 = D0(null);
function el() {
  const e = f0(C2);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function cm({
  model: e,
  onSubmit: t,
  onInvalidSubmit: r,
  action: l,
  method: s,
  children: c,
  className: d
}) {
  const [o, a] = W({}), [i, u] = W(0), h = Q(o);
  h.current = o;
  const x = I((g) => {
    a(
      (M) => M[g.name] === g ? M : { ...M, [g.name]: g }
    );
  }, []), b = I((g) => {
    a((M) => {
      if (!(g in M)) return M;
      const v = { ...M };
      return delete v[g], v;
    });
  }, []), k = I(() => {
    const g = {};
    for (const M of Object.values(h.current)) {
      const v = M.validate();
      v.length > 0 && (g[M.name] = v);
    }
    return g;
  }, []), m = I(() => {
    const g = k();
    u((M) => M + 1), Object.keys(g).length === 0 ? t?.(e) : r?.(g);
  }, [k, e, t, r]), _ = (g) => {
    l != null && s != null || (g.preventDefault(), m());
  }, p = g1(
    () => ({ registerField: x, unregisterField: b, submit: m, submitCount: i }),
    [x, b, m, i]
  ), f = [Qn.form, d].filter(Boolean).join(" ");
  return /* @__PURE__ */ n(C2.Provider, { value: p, children: /* @__PURE__ */ n(
    "form",
    {
      className: f,
      onSubmit: _,
      action: l,
      method: s,
      noValidate: !0,
      children: c
    }
  ) });
}
const z0 = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", im = (e = "Required") => (t) => z0(t) ? e : null, dm = (e = "Invalid email") => (t) => z0(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, um = (e, t = "Invalid format") => (r) => z0(r) || e.test(String(r)) ? null : t, hm = (e, t = `Minimum ${e} characters`) => (r) => z0(r) || String(r).length >= e ? null : t, fm = (e, t = `Maximum ${e} characters`) => (r) => z0(r) || String(r).length <= e ? null : t, pm = (e, t, r = `Between ${e} and ${t}`) => (l) => {
  if (z0(l)) return null;
  const s = Number(l);
  return !Number.isNaN(s) && s >= e && s <= t ? null : r;
}, mm = (e, t = "Values do not match") => (r, l) => {
  if (z0(r)) return null;
  const s = typeof e == "function" ? e(l) : e;
  return r === s ? null : t;
}, _m = (e = "Required") => (t) => t === !0 ? null : e, vm = (e) => (t, r) => e(t, r);
function tl(e, t, r) {
  return e.map((l) => l(t, r)).filter((l) => l != null);
}
function gm(e, t) {
  const { registerField: r, unregisterField: l, submitCount: s } = el(), [c, d] = W(t?.initialValue), [o, a] = W(!1), [i, u] = W(!1), h = Q(() => []);
  h.current = () => tl(t?.validate ?? [], c), v1(() => (r({ name: e, validate: () => h.current() }), () => l(e)), [e, r, l]), v1(() => {
    s > 0 && (a(!0), u(!1));
  }, [s]);
  const x = o && !i ? h.current() : [];
  return { value: c, setValue: (k) => {
    d(k), u(!0);
  }, errors: x };
}
const rl = "_select_1xe98_1", nl = "_invalid_1xe98_33", ll = "_xs_1xe98_40", ol = "_sm_1xe98_48", al = "_md_1xe98_56", sl = "_lg_1xe98_62", cl = "_xl_1xe98_68", Mt = {
  select: rl,
  invalid: nl,
  xs: ll,
  sm: ol,
  md: al,
  lg: sl,
  xl: cl
}, w0 = I1(
  function({ size: t = "md", invalid: r = !1, options: l, children: s, className: c, ...d }, o) {
    return /* @__PURE__ */ n(
      "select",
      {
        ref: o,
        "data-size": t,
        className: [
          Mt.select,
          Mt[t],
          r ? Mt.invalid : null,
          c
        ].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...d,
        children: l != null ? l.map((a) => /* @__PURE__ */ n(
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
], F0 = {
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
function _t(e, t) {
  return t.split(".").reduce((r, l) => {
    if (r != null)
      return r[l];
  }, e);
}
function Kt(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function tt(e, t) {
  const r = Kt(e), l = Kt(t);
  if (typeof r == "number" && typeof l == "number") return r - l;
  const s = String(r ?? ""), c = String(l ?? "");
  return s < c ? -1 : s > c ? 1 : 0;
}
function xt(e) {
  if (e.secondOperator == null) return !1;
  if (dl(e.secondOperator)) return !0;
  const t = e.secondValue;
  return t != null && t !== "";
}
function Wt(e, t, r) {
  const l = _t(t, e.property), s = Zt(
    l,
    e.value,
    e.operator,
    r
  );
  if (!xt(e)) return s;
  const c = Zt(
    l,
    e.secondValue,
    e.secondOperator,
    r
  );
  return (e.logicalOperator ?? "And") === "And" ? s && c : s || c;
}
function Zt(e, t, r, l) {
  const s = l === "CaseInsensitive", c = (a) => s && typeof a == "string" ? a.toLowerCase() : a, d = c(e), o = c(t);
  switch (r) {
    case "Equals":
      return d === o || Array.isArray(d) && d.some((a) => c(a) === o);
    case "NotEquals":
      return d !== o && !(Array.isArray(d) && d.some((a) => c(a) === o));
    case "LessThan":
      return tt(d, o) < 0;
    case "LessThanOrEquals":
      return tt(d, o) <= 0;
    case "GreaterThan":
      return tt(d, o) > 0;
    case "GreaterThanOrEquals":
      return tt(d, o) >= 0;
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
function It(e) {
  return "filters" in e;
}
function z2(e, t, r = {}) {
  const l = r.logicalOperator ?? "And", s = r.caseSensitivity ?? "CaseInsensitive";
  if (It(t)) {
    if (t.filters.length === 0) return !0;
    const c = t.operator ?? l;
    return t.filters[c === "Or" ? "some" : "every"](
      (d) => z2(e, d, { logicalOperator: c, caseSensitivity: s })
    );
  }
  return t.operator === "Custom", Wt(t, e, s);
}
function L2(e, t, r = {}) {
  return e.filter((l) => z2(l, t, r));
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
  if (!xt(e))
    return t(e.operator, e.value);
  const r = e.logicalOperator ?? "And", l = e.secondOperator;
  return `(${t(e.operator, e.value)} ${r} ${t(
    l,
    e.secondValue
  )})`;
}
function fl(e) {
  return It(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(fl).filter(Boolean).join(` ${e.operator} `)})` : hl(e);
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
  const r = e.property, l = t === "CaseInsensitive", s = (i) => l ? `tolower(${i})` : i, c = (i) => typeof i == "string" ? `'${pl(i)}'` : i instanceof Date ? `'${i.toISOString()}'` : String(i ?? ""), d = (i, u) => {
    const h = typeof u == "string", x = h && l ? s(r) : r;
    switch (i) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${x} ${ml[i]} ${h && l ? s(c(u)) : c(u)}`;
      case "Contains":
        return `contains(${s(r)}, ${s(c(u))})`;
      case "StartsWith":
        return `startswith(${s(r)}, ${s(c(u))})`;
      case "EndsWith":
        return `endswith(${s(r)}, ${s(c(u))})`;
      case "DoesNotContain":
        return `not(contains(${s(r)}, ${s(c(u))}))`;
      case "In":
        return Array.isArray(u) ? `${x} in (${u.map((b) => c(b)).join(", ")})` : `${x} in (${c(u)})`;
      case "NotIn":
        return Array.isArray(u) ? `not(${x} in (${u.map((b) => c(b)).join(", ")}))` : `not(${x} in (${c(u)}))`;
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
  if (!xt(e))
    return d(e.operator, e.value);
  const o = (e.logicalOperator ?? "And") === "And" ? "and" : "or", a = e.secondOperator;
  return `(${d(e.operator, e.value)} ${o} ${d(
    a,
    e.secondValue
  )})`;
}
function vl(e, t = {}) {
  const r = t.caseSensitivity ?? "CaseInsensitive";
  if (It(e)) {
    if (e.filters.length === 0) return "";
    const l = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((s) => vl(s, { caseSensitivity: r })).filter(Boolean).join(` ${l} `)})`;
  }
  return _l(e, r);
}
function gl(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((r, l) => {
    for (const s of t) {
      const c = s.sortOrder === "Ascending" ? 1 : -1, d = tt(
        _t(r, s.property),
        _t(l, s.property)
      );
      if (d !== 0) return d * c;
    }
    return 0;
  });
}
const kl = "_filter_1dvqt_1", yl = "_rows_1dvqt_9", xl = "_row_1dvqt_9", bl = "_join_1dvqt_21", Ml = "_property_1dvqt_30", Cl = "_operator_1dvqt_34", wl = "_value_1dvqt_38", zl = "_remove_1dvqt_42", Ll = "_bar_1dvqt_58", $l = "_add_1dvqt_64", Nl = "_custom_1dvqt_78", Ol = "_summary_1dvqt_82", Sl = "_second_1dvqt_87", Al = "_secondAdd_1dvqt_91", Hl = "_addSecond_1dvqt_95", jl = "_joinSelect_1dvqt_109", X1 = {
  filter: kl,
  rows: yl,
  row: xl,
  join: bl,
  property: Ml,
  operator: Cl,
  value: wl,
  remove: zl,
  bar: Ll,
  add: $l,
  custom: Nl,
  summary: Ol,
  second: Sl,
  secondAdd: Al,
  addSecond: Hl,
  joinSelect: jl
}, K0 = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
], Ut = {
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
function Gt({
  property: e,
  value: t,
  onChange: r
}) {
  if (e.editor != null)
    return /* @__PURE__ */ n(b1, { children: e.editor({ value: t, onChange: r }) });
  const l = e.type ?? "string";
  if (l === "enum" && e.values != null)
    return /* @__PURE__ */ n(
      w0,
      {
        "aria-label": e.title ?? e.name,
        className: X1.value,
        options: e.values,
        value: String(t ?? ""),
        onChange: (c) => r(c.target.value)
      }
    );
  if (l === "boolean")
    return /* @__PURE__ */ n(
      w0,
      {
        "aria-label": e.title ?? e.name,
        className: X1.value,
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
  const s = l === "number" ? { type: "number" } : l === "date" ? { type: "date" } : { type: "text" };
  return /* @__PURE__ */ n(
    "input",
    {
      "aria-label": e.title ?? e.name,
      className: X1.value,
      ...s,
      value: t == null ? "" : String(t),
      onChange: (c) => r(
        l === "number" && c.target.value !== "" ? Number(c.target.value) : c.target.value
      )
    }
  );
}
function km({
  properties: e,
  logicalOperator: t = "And",
  filterCaseSensitivity: r = "CaseInsensitive",
  initialRows: l,
  uniqueFilters: s = !1,
  className: c,
  viewChanged: d,
  items: o,
  children: a
}) {
  const [i, u] = W(
    () => l != null && l.length > 0 ? l.map((p, f) => ({ id: f, ...p })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: F0[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), h = (p, f) => {
    u(
      (g) => g.map((M) => M.id === p ? { ...M, ...f } : M)
    );
  }, x = () => {
    const p = i[i.length - 1], f = Math.max(0, ...i.map((M) => M.id)) + 1, g = e[0];
    u((M) => [
      ...M,
      {
        id: f,
        property: p?.property ?? g?.name ?? "",
        operator: F0[e.find(
          (v) => v.name === (p?.property ?? g?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, b = (p) => {
    u(
      (f) => f.length > 1 ? f.filter((g) => g.id !== p) : f
    );
  }, k = g1(() => {
    const p = [];
    for (const f of i) {
      if (f.property === "" || (f.value == null || f.value === "") && !K0.includes(f.operator)) continue;
      const M = {
        property: f.property,
        operator: f.operator,
        value: f.value
      }, { secondOperator: v } = f;
      v != null && xt(f) && (M.secondOperator = v, M.secondValue = f.secondValue, M.logicalOperator = f.logicalOperator ?? "And"), p.push(M);
    }
    return p;
  }, [i]), m = g1(() => o == null || k.length === 0 ? o : L2(o, {
    operator: t,
    filters: k
  }, {
    caseSensitivity: r
  }), [o, k, t, r]);
  v1(() => {
    d != null && o != null && d(m ?? []);
  }, [m]);
  const _ = (p) => e.find((f) => f.name === p) ?? { name: p, type: "string" };
  return /* @__PURE__ */ L("div", { className: [X1.filter, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ n("div", { className: X1.rows, role: "group", "aria-label": "Filter conditions", children: i.map((p, f) => {
      const g = _(p.property), M = s ? [F0[g.type ?? "string"]] : w2, v = !K0.includes(p.operator), w = p.secondOperator != null;
      return /* @__PURE__ */ L(Dt, { children: [
        /* @__PURE__ */ L("div", { className: X1.row, children: [
          f > 0 ? /* @__PURE__ */ n("span", { className: X1.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ n(
            w0,
            {
              "aria-label": `Condition ${f + 1} property`,
              className: X1.property,
              value: p.property,
              onChange: (C) => {
                const z = e.find(
                  (A) => A.name === C.target.value
                );
                h(p.id, {
                  property: C.target.value,
                  operator: F0[z?.type ?? "string"],
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
          /* @__PURE__ */ n(
            w0,
            {
              "aria-label": `Condition ${f + 1} operator`,
              className: X1.operator,
              value: p.operator,
              onChange: (C) => {
                const z = C.target.value;
                h(
                  p.id,
                  K0.includes(z) ? {
                    operator: z,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: z }
                );
              },
              options: M.map((C) => ({
                value: C,
                label: Ut[C]
              }))
            }
          ),
          v ? /* @__PURE__ */ n(
            Gt,
            {
              property: g,
              value: p.value,
              onChange: (C) => h(p.id, { value: C })
            }
          ) : null,
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: X1.remove,
              "aria-label": `Remove condition ${f + 1}`,
              onClick: () => b(p.id),
              children: /* @__PURE__ */ n(M1, { name: "close", size: "sm" })
            }
          )
        ] }),
        v ? w ? /* @__PURE__ */ L(
          "div",
          {
            className: [X1.row, X1.second].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ n(
                w0,
                {
                  "aria-label": `Condition ${f + 1} second-operator logic`,
                  className: X1.joinSelect,
                  value: p.logicalOperator ?? "And",
                  onChange: (C) => h(p.id, {
                    logicalOperator: C.target.value
                  }),
                  options: [
                    { value: "And", label: "And" },
                    { value: "Or", label: "Or" }
                  ]
                }
              ),
              /* @__PURE__ */ n(
                w0,
                {
                  "aria-label": `Condition ${f + 1} second operator`,
                  className: X1.operator,
                  value: p.secondOperator,
                  onChange: (C) => {
                    const z = C.target.value;
                    h(
                      p.id,
                      K0.includes(z) ? { secondOperator: z, secondValue: void 0 } : { secondOperator: z }
                    );
                  },
                  options: M.map((C) => ({
                    value: C,
                    label: Ut[C]
                  }))
                }
              ),
              p.secondOperator == null || !K0.includes(p.secondOperator) ? /* @__PURE__ */ n(
                Gt,
                {
                  property: g,
                  value: p.secondValue,
                  onChange: (C) => h(p.id, { secondValue: C })
                }
              ) : null,
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: X1.remove,
                  "aria-label": `Remove second condition ${f + 1}`,
                  onClick: () => h(p.id, {
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  }),
                  children: /* @__PURE__ */ n(M1, { name: "close", size: "sm" })
                }
              )
            ]
          }
        ) : /* @__PURE__ */ n("div", { className: X1.secondAdd, children: /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: X1.addSecond,
            onClick: () => h(p.id, {
              secondOperator: F0[g.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, p.id);
    }) }),
    /* @__PURE__ */ L("div", { className: X1.bar, children: [
      /* @__PURE__ */ n("button", { type: "button", className: X1.add, onClick: x, children: "Add filter" }),
      a != null ? /* @__PURE__ */ n("div", { className: X1.custom, children: a }) : null,
      o != null ? /* @__PURE__ */ L("span", { className: X1.summary, "aria-live": "polite", children: [
        m?.length ?? 0,
        " of ",
        o.length
      ] }) : null
    ] })
  ] });
}
const Tl = "_pager_1du31_1", Vl = "_alignLeft_1du31_10", Dl = "_alignCenter_1du31_14", El = "_alignRight_1du31_18", Il = "_alignJustify_1du31_22", ql = "_summary_1du31_26", Pl = "_controls_1du31_31", Bl = "_button_1du31_37", Rl = "_active_1du31_73", Fl = "_ellipsis_1du31_85", Kl = "_size_1du31_91", pe = {
  pager: Tl,
  alignLeft: Vl,
  alignCenter: Dl,
  alignRight: El,
  alignJustify: Il,
  summary: ql,
  controls: Pl,
  button: Bl,
  active: Rl,
  ellipsis: Fl,
  size: Kl
};
function Wl(e, t, r, l) {
  return e.replace("{0}", String(t)).replace("{1}", String(r)).replace("{2}", String(l));
}
function Xt(e, t) {
  return e.replace("{0}", String(t));
}
function Zl(e, t, r) {
  if (t <= r)
    return Array.from({ length: t }, (o, a) => a + 1);
  const l = Math.floor(r / 2);
  let s = Math.max(1, e - l);
  const c = Math.min(t, s + r - 1);
  s = Math.max(1, c - r + 1);
  const d = [];
  for (let o = s; o <= c; o++) d.push(o);
  return s > 2 && d.unshift("ellipsis"), s > 1 && d.unshift(1), c < t - 1 && d.push("ellipsis"), c < t && d.push(t), d;
}
function Ul({
  count: e,
  pageSize: t,
  page: r,
  defaultPage: l = 1,
  pageSizeOptions: s,
  pageNumbersCount: c = 5,
  alwaysVisible: d = !1,
  horizontalAlign: o = "left",
  showPagingSummary: a,
  showPageSizeSelector: i = !0,
  pagingSummaryFormat: u = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: h,
  pageSizeText: x = "Items per page",
  firstPageTitle: b = "First page",
  prevPageTitle: k = "Previous page",
  nextPageTitle: m = "Next page",
  lastPageTitle: _ = "Last page",
  pageTitleFormat: p = "Page {0}",
  pageAriaLabelFormat: f = "Page {0}",
  onPageChange: g,
  onPageSizeChange: M,
  ariaLabel: v = "Pagination",
  className: w,
  visible: C = !0
}) {
  const z = r ?? l, [A, S] = W(z), O = r !== void 0, $ = O ? z : A, y = Math.max(1, Math.ceil(e / t)), N = Math.min(Math.max(1, $), y), T = a ?? !0, V = d || y > 1, j = Zl(N, y, c), P = I(
    (X) => {
      const m1 = Math.min(Math.max(1, X), y);
      O || S(m1);
      const d1 = (m1 - 1) * t;
      g?.({
        page: m1,
        skip: d1,
        top: t,
        pageCount: y,
        pageSize: t
      });
    },
    [O, g, y, t]
  ), E = o === "center" ? pe.alignCenter : o === "right" ? pe.alignRight : o === "justify" ? pe.alignJustify : pe.alignLeft, Z = {
    count: e,
    pageNumber: N,
    pageSize: t,
    pageCount: y
  }, e1 = (X) => {
    const m1 = Array.from(
      X.currentTarget.querySelectorAll(
        "button[data-pager-page]"
      )
    ), d1 = m1.indexOf(document.activeElement);
    d1 !== -1 && (X.key === "ArrowRight" || X.key === "ArrowDown" ? (X.preventDefault(), (m1[d1 + 1] ?? m1[0])?.focus()) : X.key === "ArrowLeft" || X.key === "ArrowUp" ? (X.preventDefault(), (m1[d1 - 1] ?? m1[m1.length - 1])?.focus()) : X.key === "Home" ? (X.preventDefault(), m1[0]?.focus()) : X.key === "End" && (X.preventDefault(), m1[m1.length - 1]?.focus()));
  };
  return C === !1 || !V ? null : /* @__PURE__ */ L(
    "nav",
    {
      className: [pe.pager, E, w].filter(Boolean).join(" "),
      "aria-label": v,
      children: [
        T && /* @__PURE__ */ n("span", { className: pe.summary, "aria-live": "polite", children: h ? h(Z) : Wl(u, N, y, e) }),
        /* @__PURE__ */ L(
          "div",
          {
            className: pe.controls,
            role: "group",
            "aria-label": v,
            onKeyDown: e1,
            children: [
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: pe.button,
                  disabled: N <= 1,
                  onClick: () => P(1),
                  "aria-label": b,
                  title: b,
                  children: "«"
                }
              ),
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: pe.button,
                  disabled: N <= 1,
                  onClick: () => P(N - 1),
                  "aria-label": k,
                  title: k,
                  children: "‹"
                }
              ),
              j.map(
                (X, m1) => X === "ellipsis" ? /* @__PURE__ */ n("span", { className: pe.ellipsis, "aria-hidden": "true", children: "…" }, `e${m1}`) : /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    "data-pager-page": X,
                    className: [pe.button, X === N ? pe.active : ""].filter(Boolean).join(" "),
                    "aria-current": X === N ? "page" : void 0,
                    "aria-label": Xt(f, X),
                    title: Xt(p, X),
                    onClick: () => P(X),
                    children: X
                  },
                  X
                )
              ),
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: pe.button,
                  disabled: N >= y,
                  onClick: () => P(N + 1),
                  "aria-label": m,
                  title: m,
                  children: "›"
                }
              ),
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: pe.button,
                  disabled: N >= y,
                  onClick: () => P(y),
                  "aria-label": _,
                  title: _,
                  children: "»"
                }
              )
            ]
          }
        ),
        i && s && s.length > 0 && /* @__PURE__ */ L("label", { className: pe.size, children: [
          /* @__PURE__ */ n("span", { children: x }),
          /* @__PURE__ */ n(
            "select",
            {
              value: t,
              onChange: (X) => M?.(Number(X.target.value)),
              "aria-label": x,
              children: s.map((X) => /* @__PURE__ */ n("option", { value: X, children: X }, X))
            }
          )
        ] })
      ]
    }
  );
}
function Ot(e) {
  const { pageNumber: t, onPageChange: r, summaryTemplate: l, showSummary: s, ...c } = e;
  return /* @__PURE__ */ n(
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
      onPageChange: r ? (o) => r(o.page) : void 0,
      ...c
    }
  );
}
const $2 = "";
function Gl(e, t, r, l, s) {
  if (t.length === 0) return e.map((o) => ({ type: "row", row: o }));
  const c = (o) => r.find((a) => a.property === o), d = (o, a, i) => {
    const u = t[a];
    if (u === void 0)
      return o.map((m) => ({ type: "row", row: m }));
    const h = c(u), x = /* @__PURE__ */ new Map(), b = [];
    o.forEach((m) => {
      const _ = String(s(m, u) ?? ""), p = x.get(_);
      p ? p.push(m) : (x.set(_, [m]), b.push(_));
    });
    const k = [];
    return b.forEach((m) => {
      const _ = x.get(m), p = [...i, m].join($2), f = _[0], g = f !== void 0 ? s(f, u) : void 0;
      k.push({
        type: "group",
        group: {
          key: p,
          display: vt(g, h?.format),
          property: u,
          title: h?.title ?? u,
          count: _.length,
          level: a
        }
      }), l.has(p) && k.push(...d(_, a + 1, [...i, m]));
    }), k;
  };
  return d(e, 0, []);
}
function Yt(e, t, r) {
  const l = /* @__PURE__ */ new Set(), s = (c, d, o) => {
    const a = t[d];
    if (a === void 0 || c.length === 0) return;
    const i = /* @__PURE__ */ new Map(), u = [];
    c.forEach((h) => {
      const x = String(r(h, a) ?? ""), b = i.get(x);
      b ? b.push(h) : (i.set(x, [h]), u.push(x));
    }), u.forEach((h) => {
      const x = [...o, h].join($2);
      l.add(x), s(i.get(h), d + 1, [...o, h]);
    });
  };
  return s(e, 0, []), l;
}
function ot(e, t) {
  return e.property ?? `col-${t}`;
}
function Xl(e, t) {
  const r = {};
  let l = 0;
  return e.forEach(({ key: s, column: c }) => {
    if (!c.frozen) return;
    r[s] = l === 0 ? "0px" : `${l}px`;
    const d = t[s] ?? c.width ?? "8rem";
    l += parseFloat(d);
  }), r;
}
function Yl(e, t) {
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
function C0(e, t) {
  if (t != null)
    return _t(e, t);
}
function vt(e, t) {
  if (t == null || t === "") return String(e ?? "");
  const r = /^N(\d+)$/i.exec(t);
  if (r && typeof e == "number") return e.toFixed(Number(r[1]));
  if (t === "d" || t === "D") {
    const l = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return l != null && !Number.isNaN(l.getTime()) ? l.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const Jt = [
  "Ascending",
  "Descending",
  null
];
function Jl(e, t, r = {}) {
  const l = e.find((c) => c.property === t), s = Jt[(l ? Jt.indexOf(l.sortOrder) : -1) + 1] ?? null;
  return s == null ? e.filter((c) => c.property !== t) : r.multi ? [
    ...e.filter((c) => c.property !== t),
    { property: t, sortOrder: s }
  ] : [{ property: t, sortOrder: s }];
}
function Ql(e, t) {
  return gl(e, t);
}
function eo(e, t, r) {
  const l = Math.max(1, Math.ceil(e.length / r)), s = Math.min(Math.max(1, t), l), c = (s - 1) * r;
  return {
    items: e.slice(c, c + r),
    pageCount: l,
    pageNumber: s,
    total: e.length
  };
}
function to(e, t, r = {}) {
  const l = [...t.filters.entries()].filter(([, o]) => o.value !== "" && o.value !== void 0).map(
    ([o, a]) => ({
      property: o,
      operator: a.operator ?? "Contains",
      value: Yl(
        a.value,
        r.types?.[o] ?? "string"
      )
    })
  ), s = l.length > 0 ? L2(
    e,
    { operator: r.logicalOperator ?? "And", filters: l },
    {
      logicalOperator: r.logicalOperator ?? "And",
      caseSensitivity: r.caseSensitivity ?? "CaseInsensitive"
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
function Qt(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
function ro(e, t, r) {
  if (t.type === "custom") return t.compute?.(e);
  if (t.type === "count") return e.length;
  const l = [];
  switch (e.forEach((s) => {
    const c = r(s, t.property);
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
function no(e, t, r = C0) {
  const l = (c) => /["\r\n,]/.test(c) ? `"${c.replace(/"/g, '""')}"` : c, s = [
    t.map((c) => l(c.title ?? c.property ?? "")).join(",")
  ];
  return e.forEach((c) => {
    s.push(
      t.map((d) => l(vt(r(c, d.property), d.format))).join(",")
    );
  }), `${s.join(`\r
`)}\r
`;
}
const lo = "_grid_13rur_1", oo = "_toolbar_13rur_8", ao = "_picker_13rur_13", so = "_pickerButton_13rur_17", co = "_pickerPanel_13rur_31", io = "_pickerItem_13rur_46", uo = "_groupPanel_13rur_55", ho = "_groupPanelActive_13rur_66", fo = "_groupPanelText_13rur_70", po = "_groupChip_13rur_74", mo = "_groupRemove_13rur_85", _o = "_groupRow_13rur_94", vo = "_groupCell_13rur_98", go = "_groupToggle_13rur_104", ko = "_editRow_13rur_117", yo = "_editCell_13rur_121", xo = "_editInput_13rur_127", bo = "_commandCell_13rur_137", Mo = "_commandButton_13rur_144", Co = "_data_13rur_159", wo = "_table_13rur_166", zo = "_header_13rur_172", Lo = "_center_13rur_185", $o = "_right_13rur_189", No = "_sortButton_13rur_193", Oo = "_sortIndicator_13rur_211", So = "_sortIndex_13rur_215", Ao = "_cell_13rur_226", Ho = "_clickable_13rur_241", jo = "_frozen_13rur_249", To = "_selected_13rur_255", Vo = "_resizeHandle_13rur_263", Do = "_filterCell_13rur_281", Eo = "_filterSelect_13rur_290", Io = "_filterInput_13rur_300", qo = "_empty_13rur_311", Po = "_loading_13rur_317", Bo = "_visuallyHidden_13rur_331", Ro = "_virtualScroller_13rur_340", Fo = "_spacerRow_13rur_345", Ko = "_footerRow_13rur_350", Wo = "_footerCell_13rur_354", Zo = "_footerValue_13rur_361", p1 = {
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
  editCell: yo,
  editInput: xo,
  commandCell: bo,
  commandButton: Mo,
  data: Co,
  table: wo,
  header: zo,
  center: Lo,
  right: $o,
  sortButton: No,
  sortIndicator: Oo,
  sortIndex: So,
  cell: Ao,
  clickable: Ho,
  frozen: jo,
  selected: To,
  resizeHandle: Vo,
  filterCell: Do,
  filterSelect: Eo,
  filterInput: Io,
  empty: qo,
  loading: Po,
  visuallyHidden: Bo,
  virtualScroller: Ro,
  spacerRow: Fo,
  footerRow: Ko,
  footerCell: Wo,
  footerValue: Zo
}, Uo = {
  Ascending: "ascending",
  Descending: "descending"
};
function e2(e, t) {
  return e.filterable ?? t;
}
function Go(e, t) {
  return e.sortable ?? t;
}
function Xo(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function ym({
  columns: e,
  rows: t,
  rowKey: r,
  allowSorting: l = !1,
  allowMultiColumnSorting: s = !1,
  showSortIndex: c = !1,
  allowFiltering: d = !1,
  filterCaseSensitivity: o = "CaseInsensitive",
  logicalOperator: a = "And",
  allowPaging: i = !1,
  pageSize: u = 10,
  pageSizeOptions: h,
  pageNumbersCount: x = 5,
  pagerPosition: b = "Bottom",
  showPagingSummary: k = !0,
  showPageSizeSelector: m = !0,
  selectionMode: _ = "None",
  selectedKeys: p,
  onSelectionChange: f,
  showColumnPicker: g = !1,
  columnPickerText: M = "Columns",
  allowColumnResize: v = !1,
  allowColumnReorder: w = !1,
  allowGrouping: C = !1,
  groupPanelText: z = "Drag a column header here to group",
  groupExpanded: A = !0,
  aggregates: S,
  showExportButton: O = !1,
  exportFileName: $ = "grid-data",
  serverMode: y = !1,
  totalCount: N,
  onRangeChange: T,
  virtualize: V = !1,
  virtualRowHeight: j = 40,
  virtualHeight: P = 480,
  editMode: E = "None",
  allowRowCreate: Z = !1,
  onRowUpdate: e1,
  onRowCreate: X,
  onRowDelete: m1,
  isLoading: d1 = !1,
  empty: l1 = "No records found",
  ariaLabel: R,
  className: c1,
  onRowClick: n1
}) {
  const u1 = R != null ? `${R} ` : "", [o1, w1] = W([]), [L1, Y1] = W(
    /* @__PURE__ */ new Map()
  ), [x1, P1] = W(1), [C1, oe] = W(u), [re, J1] = W(
    () => e.map((D, q) => ot(D, q))
  ), [we, ge] = W(
    () => new Set(
      e.map((D, q) => D.visible !== !1 ? ot(D, q) : "").filter(Boolean)
    )
  ), [ae, U] = W({}), [H, K] = W(!1), [Y, f1] = W([]), [t1, k1] = W(
    null
  ), [S1, B1] = W(null), [R1, ne] = W({}), [o0, J] = W(0), [$1, de] = W(P), Se = Q(null), ue = Q(null), N1 = g1(() => {
    const D = /* @__PURE__ */ new Map();
    return e.forEach((q, s1) => D.set(ot(q, s1), q)), D;
  }, [e]), V1 = g1(
    () => re.filter((D) => we.has(D)).map((D) => ({ key: D, column: N1.get(D) })).filter(
      (D) => D.column != null
    ),
    [re, we, N1]
  ), Ae = g1(
    () => Xl(V1, ae),
    [V1, ae]
  ), ke = E !== "None" || m1 != null || Z, Q1 = g1(() => {
    if (y) {
      const D = N ?? t.length, q = Math.max(1, Math.ceil(D / C1));
      return {
        items: [...t],
        filtered: [...t],
        total: D,
        pageCount: q,
        pageNumber: x1,
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
        pageNumber: x1,
        // Without a pager the grid shows every row (Radzen parity); the
        // internal slice only applies when paging UI is on.
        pageSize: i ? C1 : Number.MAX_SAFE_INTEGER
      },
      {
        logicalOperator: a,
        caseSensitivity: o,
        types: Object.fromEntries(
          e.filter((D) => D.type != null && D.property != null).map((D) => [
            D.property,
            D.type
          ])
        )
      }
    );
  }, [
    t,
    o1,
    L1,
    x1,
    C1,
    a,
    o,
    e,
    y,
    N,
    i
  ]), F = Q(T);
  v1(() => {
    F.current = T;
  });
  const a1 = g1(
    () => [...L1.entries()].filter(([, D]) => D.value !== "" && D.value !== void 0).map(([D, q]) => ({
      property: D,
      operator: q.operator ?? Qt(
        e.find((s1) => s1.property === D)?.type ?? "string"
      ),
      value: q.value ?? ""
    })),
    [L1, e]
  );
  v1(() => {
    !y || F.current == null || F.current({
      start: (x1 - 1) * C1,
      count: C1,
      pageNumber: x1,
      pageSize: C1,
      sorts: o1,
      filters: a1,
      logicalOperator: a
    });
  }, [
    y,
    x1,
    C1,
    o1,
    a1,
    a
  ]);
  const j1 = g1(() => new Set(Y), [Y]), D1 = g1(() => t1 || (A ? Yt(Q1.items, Y, C0) : /* @__PURE__ */ new Set()), [t1, A, Q1.items, Y]), Pe = g1(
    () => Gl(Q1.items, Y, e, D1, C0),
    [Q1.items, Y, e, D1]
  ), le = g1(
    () => Y.length > 0 ? V1.filter(
      (D) => D.column.property == null || !j1.has(D.column.property)
    ) : V1,
    [V1, Y, j1]
  ), B = (D) => {
    D !== "" && w1(Jl(o1, D, { multi: s }));
  }, G = (D, q) => {
    Y1((s1) => {
      const i1 = new Map(s1);
      return i1.set(D, q), i1;
    }), P1(1);
  }, r1 = (D) => {
    oe(D), P1(1);
  }, _1 = (D) => {
    if (_ === "None") return;
    const q = r(D), s1 = p ?? [];
    let i1;
    _ === "Single" ? i1 = s1.length === 1 && s1[0] === q ? [] : [q] : i1 = s1.includes(q) ? s1.filter((q1) => q1 !== q) : [...s1, q], f?.(i1);
  }, h1 = (D) => {
    n1?.(D);
  }, y1 = (D, q, s1) => {
    Se.current = { key: D, startX: q, startWidth: s1 };
  }, H1 = (D) => {
    const q = Se.current;
    if (!q) return;
    const s1 = D - q.startX, i1 = Math.max(48, q.startWidth + s1);
    U((q1) => ({ ...q1, [q.key]: `${i1}px` }));
  }, A1 = () => {
    Se.current = null;
  }, U1 = (D) => {
    ue.current = D;
  }, ee = (D) => {
    const q = ue.current;
    ue.current = null, !(!q || q === D) && J1((s1) => {
      const i1 = [...s1], q1 = i1.indexOf(q), De = i1.indexOf(D);
      return q1 < 0 || De < 0 ? s1 : (i1.splice(q1, 1), i1.splice(De, 0, q), i1);
    });
  }, he = (D) => {
    ge((q) => {
      const s1 = new Set(q);
      return s1.has(D) ? s1.delete(D) : s1.add(D), s1;
    });
  }, te = () => {
    const D = ue.current;
    if (ue.current = null, !D || !C) return;
    const s1 = N1.get(D)?.property;
    s1 && (f1(
      (i1) => i1.includes(s1) ? i1 : [...i1, s1]
    ), k1(null));
  }, G1 = (D) => {
    f1((q) => q.filter((s1) => s1 !== D)), k1(null);
  }, Be = (D) => {
    k1((q) => {
      const s1 = q ?? (A ? Yt(Q1.items, Y, C0) : /* @__PURE__ */ new Set()), i1 = new Set(s1);
      return i1.has(D) ? i1.delete(D) : i1.add(D), i1;
    });
  }, Ve = (D) => {
    const q = {};
    e.forEach((s1) => {
      s1.property && (q[s1.property] = C0(D, s1.property));
    }), ne(q), B1(String(r(D)));
  }, a0 = () => {
    const D = {};
    e.forEach((q) => {
      q.property && q.type === "boolean" && (D[q.property] = !1);
    }), ne(D), B1("__new__");
  }, E0 = () => {
    B1(null), ne({});
  }, I0 = (D) => {
    if (S1 === "__new__") {
      const q = Object.fromEntries(
        e.filter((s1) => s1.property).map((s1) => [s1.property, R1[s1.property]])
      );
      X?.(q);
    } else if (D != null) {
      const q = { ...D, ...R1 };
      e1?.(D, q);
    }
    E0();
  }, m0 = i && (b === "Top" || b === "TopAndBottom"), Bt = i && (b === "Bottom" || b === "TopAndBottom"), P2 = d && e.some((D) => e2(D, d)), B2 = (D, q, s1) => D.render ? D.render(q, { index: 0 }) : vt(C0(q, D.property), D.format), R2 = (D) => {
    const q = [p1.cell];
    return D.align === "center" && q.push(p1.center), D.align === "right" && q.push(p1.right), D.frozen && q.push(p1.frozen), q.join(" ");
  }, Rt = y ? t : Q1.filtered, F2 = () => {
    const D = no(
      Rt,
      le.map((q1) => q1.column)
    ), q = new Blob([`\uFEFF${D}`], {
      type: "text/csv;charset=utf-8"
    }), s1 = URL.createObjectURL(q), i1 = document.createElement("a");
    i1.href = s1, i1.download = `${$}.csv`, document.body.appendChild(i1), i1.click(), i1.remove(), URL.revokeObjectURL(s1);
  }, L0 = Pe.length, _0 = g1(() => {
    if (!V || L0 === 0)
      return { start: 0, end: L0, top: 0, bottom: 0 };
    const D = 5, q = Math.max(
      0,
      Math.floor(o0 / j) - D
    ), s1 = Math.ceil($1 / j) + D * 2, i1 = Math.min(L0, q + s1), q1 = q * j, De = Math.max(0, (L0 - i1) * j);
    return { start: q, end: i1, top: q1, bottom: De };
  }, [V, L0, o0, j, $1]), bt = le.length + (ke ? 1 : 0);
  return /* @__PURE__ */ L("div", { className: [p1.grid, c1].filter(Boolean).join(" "), children: [
    m0 && /* @__PURE__ */ n(
      Ot,
      {
        pageNumber: Q1.pageNumber,
        pageSize: Q1.pageSize,
        count: Q1.total,
        pageSizeOptions: h,
        pageNumbersCount: x,
        showSummary: k,
        showPageSizeSelector: m,
        ariaLabel: `${u1}${Bt ? "Pagination (top)" : "Pagination"}`,
        onPageChange: P1,
        onPageSizeChange: r1
      }
    ),
    (C || Z || g || O) && /* @__PURE__ */ L("div", { className: p1.toolbar, children: [
      C && /* @__PURE__ */ n(
        "div",
        {
          className: [
            p1.groupPanel,
            Y.length > 0 ? p1.groupPanelActive : ""
          ].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: C ? (D) => D.preventDefault() : void 0,
          onDrop: C ? te : void 0,
          children: Y.length > 0 ? Y.map((D) => {
            const q = e.find((s1) => s1.property === D)?.title ?? D;
            return /* @__PURE__ */ L("span", { className: p1.groupChip, children: [
              q,
              ":",
              " ",
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: p1.groupRemove,
                  onClick: () => G1(D),
                  "aria-label": `Remove group by ${q}`,
                  children: /* @__PURE__ */ n(M1, { name: "close", size: "sm" })
                }
              )
            ] }, D);
          }) : /* @__PURE__ */ n("span", { className: p1.groupPanelText, children: z })
        }
      ),
      Z && /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: p1.pickerButton,
          onClick: a0,
          children: "Add row"
        }
      ),
      g && /* @__PURE__ */ L("div", { className: p1.picker, children: [
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: p1.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": H,
            onClick: () => K((D) => !D),
            children: M
          }
        ),
        H && /* @__PURE__ */ n(
          "div",
          {
            className: p1.pickerPanel,
            role: "menu",
            "aria-label": M,
            children: e.map((D, q) => {
              const s1 = ot(D, q);
              return /* @__PURE__ */ L("label", { className: p1.pickerItem, children: [
                /* @__PURE__ */ n(
                  "input",
                  {
                    type: "checkbox",
                    checked: we.has(s1),
                    onChange: () => he(s1)
                  }
                ),
                D.title ?? D.property
              ] }, s1);
            })
          }
        )
      ] }),
      O && /* @__PURE__ */ n(
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
        style: V ? { maxHeight: P } : void 0,
        onScroll: V ? (D) => {
          J(D.currentTarget.scrollTop), de(D.currentTarget.clientHeight);
        } : void 0,
        children: [
          /* @__PURE__ */ L(
            "table",
            {
              className: p1.table,
              role: "grid",
              "aria-rowcount": (V ? L0 : Q1.total) + 1,
              "aria-label": R,
              "aria-busy": d1 || void 0,
              children: [
                /* @__PURE__ */ L("colgroup", { children: [
                  le.map(({ key: D, column: q }) => /* @__PURE__ */ n(
                    "col",
                    {
                      style: {
                        width: ae[D] ?? q.width,
                        minWidth: q.minWidth,
                        maxWidth: q.maxWidth
                      }
                    },
                    D
                  )),
                  ke && /* @__PURE__ */ n("col", { style: { width: "8rem" } })
                ] }),
                /* @__PURE__ */ L("thead", { children: [
                  /* @__PURE__ */ L("tr", { children: [
                    le.map(({ key: D, column: q }) => {
                      const s1 = Go(q, l), i1 = o1.find((fe) => fe.property === q.property), q1 = i1 ? o1.indexOf(i1) + 1 : 0, De = q.align ?? "left";
                      return /* @__PURE__ */ L(
                        "th",
                        {
                          "aria-sort": s1 && i1 ? Uo[i1.sortOrder] : "none",
                          className: [
                            p1.header,
                            De === "center" ? p1.center : "",
                            De === "right" ? p1.right : "",
                            q.frozen ? p1.frozen : ""
                          ].filter(Boolean).join(" "),
                          style: q.frozen ? { left: Ae[D] } : void 0,
                          scope: "col",
                          draggable: w || C || void 0,
                          onDragStart: w || C ? (fe) => {
                            fe.dataTransfer && (fe.dataTransfer.effectAllowed = "move"), U1(D);
                          } : void 0,
                          onDragOver: w ? (fe) => fe.preventDefault() : void 0,
                          onDrop: w ? () => ee(D) : void 0,
                          children: [
                            s1 ? /* @__PURE__ */ L(
                              "button",
                              {
                                type: "button",
                                className: p1.sortButton,
                                onClick: () => q.property != null && B(q.property),
                                "aria-label": i1 ? i1.sortOrder === "Ascending" ? `Sort ${q.title ?? q.property} descending` : `Sort ${q.title ?? q.property} ascending` : `Sort ${q.title ?? q.property} ascending`,
                                children: [
                                  q.title ?? q.property,
                                  i1 && /* @__PURE__ */ n(
                                    "span",
                                    {
                                      className: p1.sortIndicator,
                                      "aria-hidden": "true",
                                      children: i1.sortOrder === "Ascending" ? "▲" : "▼"
                                    }
                                  ),
                                  q1 > 1 && c && /* @__PURE__ */ n("span", { className: p1.sortIndex, children: q1 })
                                ]
                              }
                            ) : q.title ?? q.property,
                            v && /* @__PURE__ */ n(
                              "span",
                              {
                                className: p1.resizeHandle,
                                "data-dx-grid-resize": !0,
                                role: "separator",
                                "aria-orientation": "vertical",
                                "aria-label": `Resize ${q.title ?? q.property}`,
                                onMouseDown: (fe) => {
                                  fe.preventDefault(), fe.stopPropagation();
                                  const $0 = ae[D] ?? q.width, Re = $0 ? parseFloat($0) : 96;
                                  y1(
                                    D,
                                    fe.clientX,
                                    Number.isFinite(Re) ? Re : 96
                                  );
                                },
                                onMouseMove: (fe) => {
                                  Se.current?.key === D && H1(fe.clientX);
                                },
                                onMouseUp: A1,
                                onMouseLeave: () => {
                                  Se.current?.key === D && A1();
                                }
                              }
                            )
                          ]
                        },
                        D
                      );
                    }),
                    ke && /* @__PURE__ */ n("th", { className: p1.header, scope: "col", children: "Actions" })
                  ] }),
                  P2 && /* @__PURE__ */ n("tr", { children: le.map(({ key: D, column: q }) => {
                    if (!e2(q, d))
                      return /* @__PURE__ */ n("td", { className: p1.filterCell }, D);
                    const s1 = L1.get(q.property ?? "");
                    return /* @__PURE__ */ L("td", { className: p1.filterCell, children: [
                      /* @__PURE__ */ L(
                        "label",
                        {
                          className: p1.visuallyHidden,
                          htmlFor: `df-${q.property}`,
                          children: [
                            "Filter ",
                            q.title ?? q.property
                          ]
                        }
                      ),
                      /* @__PURE__ */ n(
                        "select",
                        {
                          id: `df-${q.property}`,
                          className: p1.filterSelect,
                          value: s1?.operator ?? Qt(q.type ?? "string"),
                          onChange: (i1) => G(q.property ?? "", {
                            ...s1,
                            operator: i1.target.value
                          }),
                          "aria-label": `${q.title ?? q.property} operator`,
                          children: w2.filter((i1) => i1 !== "Custom").map(
                            (i1) => /* @__PURE__ */ n("option", { value: i1, children: i1 }, i1)
                          )
                        }
                      ),
                      /* @__PURE__ */ n(
                        "input",
                        {
                          className: p1.filterInput,
                          value: s1?.value ?? "",
                          onChange: (i1) => G(q.property ?? "", {
                            ...s1,
                            value: i1.target.value
                          }),
                          placeholder: `Filter ${q.title ?? q.property}`,
                          "aria-label": `${q.title ?? q.property} value`
                        }
                      )
                    ] }, D);
                  }) })
                ] }),
                /* @__PURE__ */ L("tbody", { children: [
                  S1 === "__new__" && /* @__PURE__ */ L("tr", { className: p1.editRow, children: [
                    le.map(({ key: D, column: q }) => /* @__PURE__ */ n("td", { className: p1.editCell, children: q.property && /* @__PURE__ */ n(
                      "input",
                      {
                        className: p1.editInput,
                        type: q.type === "number" ? "number" : q.type === "boolean" ? "checkbox" : "text",
                        checked: q.type === "boolean" ? !!R1[q.property] : void 0,
                        value: q.type === "boolean" ? void 0 : String(R1[q.property] ?? ""),
                        onChange: (s1) => ne((i1) => ({
                          ...i1,
                          [q.property]: q.type === "boolean" ? s1.target.checked : s1.target.value
                        })),
                        "aria-label": `${q.title ?? q.property} (new)`
                      }
                    ) }, D)),
                    ke && /* @__PURE__ */ L("td", { className: p1.editCell, children: [
                      /* @__PURE__ */ n(
                        "button",
                        {
                          type: "button",
                          className: p1.commandButton,
                          onClick: () => I0(),
                          children: "Save"
                        }
                      ),
                      /* @__PURE__ */ n(
                        "button",
                        {
                          type: "button",
                          className: p1.commandButton,
                          onClick: E0,
                          children: "Cancel"
                        }
                      )
                    ] })
                  ] }),
                  _0.top > 0 && /* @__PURE__ */ n("tr", { className: p1.spacerRow, "aria-hidden": "true", children: /* @__PURE__ */ n(
                    "td",
                    {
                      colSpan: bt,
                      style: { height: _0.top }
                    }
                  ) }),
                  Pe.slice(_0.start, _0.end).map((D, q) => {
                    const s1 = _0.start + q, i1 = V ? s1 + 2 : void 0;
                    if (D.type === "group" && D.group) {
                      const Re = D1.has(D.group.key);
                      return /* @__PURE__ */ n(
                        "tr",
                        {
                          className: p1.groupRow,
                          "aria-rowindex": i1,
                          children: /* @__PURE__ */ n("td", { colSpan: bt, className: p1.groupCell, children: /* @__PURE__ */ L(
                            "button",
                            {
                              type: "button",
                              className: p1.groupToggle,
                              "aria-expanded": Re,
                              style: {
                                paddingInlineStart: `${D.group.level * 16}px`
                              },
                              onClick: () => Be(D.group.key),
                              children: [
                                /* @__PURE__ */ n("span", { "aria-hidden": "true", children: Re ? "▼" : "▶" }),
                                D.group.title,
                                ": ",
                                D.group.display,
                                " (",
                                D.group.count,
                                ")"
                              ]
                            }
                          ) })
                        },
                        `group-${D.group.key}`
                      );
                    }
                    const q1 = D.row, De = r(q1), fe = (p ?? []).includes(De), $0 = S1 != null && S1 === String(De);
                    return /* @__PURE__ */ L(
                      "tr",
                      {
                        "aria-rowindex": i1,
                        className: [
                          n1 || _ !== "None" ? p1.clickable : "",
                          fe ? p1.selected : "",
                          $0 ? p1.editRow : ""
                        ].filter(Boolean).join(" "),
                        "aria-selected": _ !== "None" ? fe : void 0,
                        onClick: n1 || _ !== "None" ? (Re) => {
                          Xo(Re.target) || (h1(q1), _1(q1));
                        } : void 0,
                        children: [
                          le.map(({ key: Re, column: ye }) => /* @__PURE__ */ n(
                            "td",
                            {
                              className: R2(ye),
                              style: ye.frozen ? { left: Ae[Re] } : void 0,
                              children: $0 && ye.property ? /* @__PURE__ */ n(
                                "input",
                                {
                                  className: p1.editInput,
                                  type: ye.type === "number" ? "number" : ye.type === "boolean" ? "checkbox" : "text",
                                  checked: ye.type === "boolean" ? !!R1[ye.property] : void 0,
                                  value: ye.type === "boolean" ? void 0 : String(R1[ye.property] ?? ""),
                                  onChange: (Ft) => ne((K2) => ({
                                    ...K2,
                                    [ye.property]: ye.type === "boolean" ? Ft.target.checked : Ft.target.value
                                  })),
                                  "aria-label": `${ye.title ?? ye.property} (edit)`
                                }
                              ) : B2(ye, q1)
                            },
                            Re
                          )),
                          ke && /* @__PURE__ */ n("td", { className: p1.commandCell, children: $0 ? /* @__PURE__ */ L(b1, { children: [
                            /* @__PURE__ */ n(
                              "button",
                              {
                                type: "button",
                                className: p1.commandButton,
                                onClick: () => I0(q1),
                                children: "Save"
                              }
                            ),
                            /* @__PURE__ */ n(
                              "button",
                              {
                                type: "button",
                                className: p1.commandButton,
                                onClick: E0,
                                children: "Cancel"
                              }
                            )
                          ] }) : /* @__PURE__ */ L(b1, { children: [
                            E !== "None" && /* @__PURE__ */ n(
                              "button",
                              {
                                type: "button",
                                className: p1.commandButton,
                                onClick: () => Ve(q1),
                                children: "Edit"
                              }
                            ),
                            m1 && /* @__PURE__ */ n(
                              "button",
                              {
                                type: "button",
                                className: p1.commandButton,
                                onClick: () => m1(q1),
                                children: "Delete"
                              }
                            )
                          ] }) })
                        ]
                      },
                      De
                    );
                  }),
                  _0.bottom > 0 && /* @__PURE__ */ n("tr", { className: p1.spacerRow, "aria-hidden": "true", children: /* @__PURE__ */ n(
                    "td",
                    {
                      colSpan: bt,
                      style: { height: _0.bottom }
                    }
                  ) })
                ] }),
                S && S.length > 0 && /* @__PURE__ */ n("tfoot", { children: /* @__PURE__ */ L("tr", { className: p1.footerRow, children: [
                  le.map(({ key: D, column: q }) => {
                    const s1 = S.filter(
                      (i1) => i1.property === q.property
                    );
                    return /* @__PURE__ */ n(
                      "td",
                      {
                        className: [
                          p1.footerCell,
                          q.align === "right" ? p1.right : "",
                          q.align === "center" ? p1.center : ""
                        ].filter(Boolean).join(" "),
                        children: s1.map((i1, q1) => /* @__PURE__ */ L(
                          "div",
                          {
                            className: p1.footerValue,
                            children: [
                              i1.title ? `${i1.title}: ` : "",
                              vt(
                                ro(Rt, i1, C0),
                                i1.format
                              )
                            ]
                          },
                          `${i1.property}-${i1.type}-${q1}`
                        ))
                      },
                      D
                    );
                  }),
                  ke && /* @__PURE__ */ n("td", { className: p1.footerCell })
                ] }) })
              ]
            }
          ),
          Q1.items.length === 0 && !d1 && /* @__PURE__ */ n("div", { className: p1.empty, children: l1 }),
          d1 && /* @__PURE__ */ n("div", { className: p1.loading, role: "status", children: "Loading…" })
        ]
      }
    ),
    Bt && /* @__PURE__ */ n(
      Ot,
      {
        pageNumber: Q1.pageNumber,
        pageSize: Q1.pageSize,
        count: Q1.total,
        pageSizeOptions: h,
        pageNumbersCount: x,
        showSummary: k,
        showPageSizeSelector: m,
        ariaLabel: `${u1}${m0 ? "Pagination (bottom)" : "Pagination"}`,
        onPageChange: P1,
        onPageSizeChange: r1
      }
    )
  ] });
}
const Yo = "_wrap_avqds_1", Jo = "_grid_avqds_7", Qo = "_stacked_avqds_13", ea = "_item_avqds_19", ta = "_empty_avqds_25", W0 = {
  wrap: Yo,
  grid: Jo,
  stacked: Qo,
  item: ea,
  empty: ta
};
function xm({
  data: e,
  pageSize: t = 10,
  pageSizeOptions: r,
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
  const [x, b] = W(1), [k, m] = W(t), _ = e.length, p = Math.max(1, Math.ceil(_ / k)), f = Math.min(Math.max(1, x), p), g = g1(() => {
    const v = (f - 1) * k;
    return e.slice(v, v + k);
  }, [e, f, k]), M = l ? W0.grid : W0.stacked;
  return /* @__PURE__ */ L(
    "div",
    {
      className: [W0.wrap, u].filter(Boolean).join(" "),
      "aria-label": h,
      children: [
        a && o != null ? o : _ === 0 ? d ?? /* @__PURE__ */ n("div", { className: W0.empty, children: c }) : /* @__PURE__ */ n("div", { className: M, children: g.map((v, w) => /* @__PURE__ */ n("div", { className: W0.item, children: s ? s(v, w) : String(v) }, w)) }),
        /* @__PURE__ */ n(
          Ot,
          {
            ariaLabel: `${h} Pagination`,
            pageNumber: f,
            pageSize: k,
            count: _,
            pageSizeOptions: r,
            showPageSizeSelector: i,
            onPageChange: b,
            onPageSizeChange: (v) => {
              m(v), b(1);
            }
          }
        )
      ]
    }
  );
}
const ra = "_label_1qfpw_1", na = {
  label: ra
}, bm = I1(function({ className: t, children: r, ...l }, s) {
  return /* @__PURE__ */ n(
    "label",
    {
      ref: s,
      className: [na.label, t].filter(Boolean).join(" "),
      ...l,
      children: r
    }
  );
}), la = "_textbox_oly89_1", oa = "_invalid_oly89_37", aa = "_xs_oly89_44", sa = "_sm_oly89_50", ca = "_md_oly89_56", ia = "_lg_oly89_62", da = "_xl_oly89_68", Ct = {
  textbox: la,
  invalid: oa,
  xs: aa,
  sm: sa,
  md: ca,
  lg: ia,
  xl: da
}, ua = I1(
  function({
    size: t = "md",
    invalid: r = !1,
    className: l,
    visible: s = !0,
    type: c = "text",
    ...d
  }, o) {
    return s === !1 ? null : /* @__PURE__ */ n(
      "input",
      {
        ref: o,
        type: c,
        "data-size": t,
        className: [
          Ct.textbox,
          Ct[t],
          r ? Ct.invalid : null,
          l
        ].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...d
      }
    );
  }
), Mm = ua, ha = "_checkbox_1bb6c_1", fa = {
  checkbox: ha
}, Cm = I1(
  function({ className: t, indeterminate: r = !1, ...l }, s) {
    const c = Q(null);
    return v1(() => {
      c.current && (c.current.indeterminate = r);
    }, [r]), /* @__PURE__ */ n(
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
  switch: "_switch_19gf1_1"
}, wm = I1(function({ className: t, ...r }, l) {
  return /* @__PURE__ */ n(
    "input",
    {
      ref: l,
      type: "checkbox",
      role: "switch",
      className: [pa.switch, t].filter(Boolean).join(" "),
      ...r
    }
  );
}), ma = "_trigger_1jlxf_1", _a = "_tooltip_1jlxf_7", va = "_top_1jlxf_34", ga = "_right_1jlxf_40", ka = "_bottom_1jlxf_46", ya = "_left_1jlxf_52", xa = "_arrow_1jlxf_58", ba = "_floating_1jlxf_70", c0 = {
  trigger: ma,
  tooltip: _a,
  "se-tooltip-in": "_se-tooltip-in_1jlxf_1",
  top: va,
  right: ga,
  bottom: ka,
  left: ya,
  arrow: xa,
  floating: ba,
  "se-floating-tooltip-in": "_se-floating-tooltip-in_1jlxf_1"
}, at = 8;
function Ma(e, t) {
  switch (t) {
    case "bottom":
      return {
        top: e.bottom + at,
        left: e.left + e.width / 2,
        transform: "translate(-50%, 0)"
      };
    case "left":
      return {
        top: e.top + e.height / 2,
        left: e.left - at,
        transform: "translate(-100%, -50%)"
      };
    case "right":
      return {
        top: e.top + e.height / 2,
        left: e.right + at,
        transform: "translate(0, -50%)"
      };
    default:
      return {
        top: e.top - at,
        left: e.left + e.width / 2,
        transform: "translate(-50%, -100%)"
      };
  }
}
function zm({
  content: e,
  children: t,
  placement: r = "top",
  delayMs: l = 300,
  durationMs: s,
  targetSelector: c,
  className: d
}) {
  const o = E1(), a = Q(null), i = Q(null), u = Q(null), [h, x] = W(!1), [b, k] = W(null), m = () => {
    a.current !== null && (window.clearTimeout(a.current), a.current = null), i.current !== null && (window.clearTimeout(i.current), i.current = null);
  }, _ = () => {
    a.current = window.setTimeout(() => {
      x(!0), s != null && (i.current = window.setTimeout(() => x(!1), s));
    }, l);
  }, p = () => {
    m(), x(!1);
  };
  if (v1(() => () => m(), []), v1(() => {
    if (c || !h) return;
    const g = (M) => {
      M.key === "Escape" && p();
    };
    return window.addEventListener("keydown", g), () => window.removeEventListener("keydown", g);
  }, [c, h]), v1(() => {
    if (!c) return;
    let g = null, M = null, v = null;
    const w = () => {
      g !== null && (window.clearTimeout(g), g = null);
    }, C = () => {
      M !== null && (window.clearTimeout(M), M = null);
    }, z = () => {
      w(), C(), v = null, k(null);
    }, A = (T) => {
      w(), C(), v = T, g = window.setTimeout(() => {
        g = null, k(T), s != null && (M = window.setTimeout(z, s));
      }, l);
    }, S = (T) => T instanceof Element ? T.closest(c) : null, O = (T) => {
      const V = S(T.target);
      !V || V === v || A(V);
    }, $ = (T) => {
      const V = S(T.target);
      if (!V || V !== v) return;
      const j = T.relatedTarget;
      j instanceof Element && V.contains(j) || z();
    }, y = (T) => {
      T.key === "Escape" && z();
    }, N = () => z();
    return document.addEventListener("mouseover", O), document.addEventListener("mouseout", $), document.addEventListener("focusin", O), document.addEventListener("focusout", $), document.addEventListener("keydown", y), document.addEventListener("scroll", N, !0), window.addEventListener("resize", N), () => {
      w(), C(), document.removeEventListener("mouseover", O), document.removeEventListener("mouseout", $), document.removeEventListener("focusin", O), document.removeEventListener("focusout", $), document.removeEventListener("keydown", y), document.removeEventListener("scroll", N, !0), window.removeEventListener("resize", N), v = null, k(null);
    };
  }, [c, l, s]), Nt(() => {
    const g = b;
    if (!g) return;
    const M = g.getAttribute("aria-describedby");
    return g.setAttribute(
      "aria-describedby",
      [M, o].filter(Boolean).join(" ")
    ), () => {
      M == null ? g.removeAttribute("aria-describedby") : g.setAttribute("aria-describedby", M);
    };
  }, [b, o]), Nt(() => {
    const g = u.current, M = b;
    !g || !M || Object.assign(
      g.style,
      Ma(M.getBoundingClientRect(), r)
    );
  }, [b, r]), c)
    return b ? /* @__PURE__ */ L(
      "span",
      {
        ref: u,
        role: "tooltip",
        id: o,
        className: [
          c0.tooltip,
          c0[r],
          c0.floating,
          d
        ].filter(Boolean).join(" "),
        children: [
          e,
          /* @__PURE__ */ n("span", { className: c0.arrow, "aria-hidden": "true" })
        ]
      }
    ) : null;
  const f = ve(t) ? Vt(t, {
    "aria-describedby": [
      t.props["aria-describedby"],
      h ? o : null
    ].filter((g) => typeof g == "string").join(" ") || void 0
  }) : t;
  return (
    // Presentational hit-area: hover/focus handlers here, semantics and
    // keyboard interaction live on the child trigger.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ L(
      "span",
      {
        className: [c0.trigger, d].filter(Boolean).join(" "),
        onMouseEnter: _,
        onMouseLeave: p,
        onFocus: _,
        onBlur: p,
        children: [
          f,
          h && /* @__PURE__ */ L(
            "span",
            {
              role: "tooltip",
              id: o,
              className: [c0.tooltip, c0[r]].filter(Boolean).join(" "),
              children: [
                e,
                /* @__PURE__ */ n("span", { className: c0.arrow, "aria-hidden": "true" })
              ]
            }
          )
        ]
      }
    )
  );
}
const Ca = "_dialog_xijci_1", wa = "_sm_xijci_72", za = "_resizable_xijci_78", La = "_md_xijci_81", $a = "_lg_xijci_85", Na = "_header_xijci_89", Oa = "_title_xijci_100", Sa = "_description_xijci_107", Aa = "_close_xijci_114", Ha = "_body_xijci_144", ja = "_footer_xijci_156", Ye = {
  dialog: Ca,
  "se-dialog-in": "_se-dialog-in_xijci_1",
  sm: wa,
  resizable: za,
  md: La,
  lg: $a,
  header: Na,
  title: Oa,
  description: Sa,
  close: Aa,
  body: Ha,
  footer: ja
};
function Ta({
  open: e,
  onClose: t,
  title: r,
  description: l,
  children: s,
  footer: c,
  size: d = "md",
  width: o,
  height: a,
  closeOnOverlayClick: i = !0,
  closeOnEsc: u = !0,
  resizable: h = !1,
  canClose: x,
  className: b
}) {
  const k = Q(null), m = E1(), _ = E1(), p = Q(t);
  v1(() => {
    p.current = t;
  });
  const f = Q(x);
  v1(() => {
    f.current = x;
  });
  const g = Q(u);
  v1(() => {
    g.current = u;
  });
  const M = Q(!1), v = Q(!1), w = I(() => {
    if (M.current) return;
    const z = f.current?.();
    if (z instanceof Promise) {
      z.then((A) => {
        A && !M.current && (M.current = !0, p.current());
      });
      return;
    }
    z !== !1 && (M.current = !0, p.current());
  }, []), C = I(() => {
    if (v.current) {
      v.current = !1;
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
        const O = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const $ = (y) => {
          y.preventDefault(), g.current && w();
        };
        return z.addEventListener("cancel", $), () => {
          z.removeEventListener("cancel", $), document.body.style.overflow = O, A?.focus({ preventScroll: !0 });
        };
      } else !e && z.open && (v.current = M.current, M.current = !1, z.close());
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
        h ? Ye.resizable : null,
        b
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
      "aria-labelledby": r ? m : void 0,
      "aria-describedby": l ? _ : void 0,
      children: [
        r && /* @__PURE__ */ L("header", { className: Ye.header, children: [
          /* @__PURE__ */ L("div", { children: [
            /* @__PURE__ */ n("h2", { id: m, className: Ye.title, children: r }),
            l && /* @__PURE__ */ n("p", { id: _, className: Ye.description, children: l })
          ] }),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Ye.close,
              onClick: () => {
                w();
              },
              "aria-label": "Close dialog",
              children: /* @__PURE__ */ n(M1, { name: "close", size: "sm" })
            }
          )
        ] }),
        s && /* @__PURE__ */ n("div", { className: Ye.body, children: s }),
        c && /* @__PURE__ */ n("footer", { className: Ye.footer, children: c })
      ]
    }
  );
}
const Va = "_typography_1jy8x_1", Da = "_h1_1jy8x_39", Ea = "_h2_1jy8x_45", Ia = "_h3_1jy8x_51", qa = "_h4_1jy8x_57", Pa = "_h5_1jy8x_63", Ba = "_h6_1jy8x_69", Ra = "_button_1jy8x_99", Fa = "_caption_1jy8x_106", Ka = "_overline_1jy8x_112", wt = {
  typography: Va,
  "display-1": "_display-1_1jy8x_8",
  "display-2": "_display-2_1jy8x_13",
  "display-3": "_display-3_1jy8x_18",
  "display-4": "_display-4_1jy8x_23",
  "display-5": "_display-5_1jy8x_28",
  "display-6": "_display-6_1jy8x_33",
  h1: Da,
  h2: Ea,
  h3: Ia,
  h4: qa,
  h5: Pa,
  h6: Ba,
  "subtitle-1": "_subtitle-1_1jy8x_75",
  "subtitle-2": "_subtitle-2_1jy8x_81",
  "body-1": "_body-1_1jy8x_87",
  "body-2": "_body-2_1jy8x_92",
  button: Ra,
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
}, Ga = {
  Left: "align-left",
  Right: "align-right",
  Center: "align-center",
  Justify: "align-justify",
  Start: "align-left",
  End: "align-right",
  JustifyAll: "align-justify"
}, Xa = I1(function({
  textStyle: t = "Body1",
  tagName: r = "Auto",
  textAlign: l,
  text: s,
  visible: c = !0,
  className: d,
  children: o,
  ...a
}, i) {
  if (c === !1) return null;
  const u = r === "Auto" ? Wa[t] : Ua[r];
  return /* @__PURE__ */ n(
    u,
    {
      ref: i,
      className: [
        wt.typography,
        wt[Za[t]],
        l ? wt[Ga[l]] : null,
        d
      ].filter(Boolean).join(" "),
      ...a,
      children: s ?? o
    }
  );
}), N2 = D0(null);
function Lm() {
  const e = f0(N2);
  if (!e)
    throw new Error("useDialog must be used within a <DialogProvider>");
  return e;
}
function $m({ children: e }) {
  const [t, r] = W([]), l = Q(0), s = g1(
    () => ({
      confirm: (o = {}) => new Promise((a) => {
        l.current += 1;
        const i = l.current;
        r((u) => [...u, { seq: i, kind: "confirm", options: o, resolve: a }]);
      }),
      alert: (o = {}) => new Promise((a) => {
        l.current += 1;
        const i = l.current;
        r((u) => [...u, { seq: i, kind: "alert", options: o, resolve: a }]);
      })
    }),
    []
  ), c = t[0], d = (o) => {
    c && (c.kind === "confirm" ? c.resolve(o) : c.resolve(), r((a) => a.slice(1)));
  };
  return /* @__PURE__ */ L(N2.Provider, { value: s, children: [
    e,
    /* @__PURE__ */ n(
      Ta,
      {
        open: t.length > 0,
        onClose: () => d(!1),
        title: c?.options.title ?? (c?.kind === "confirm" ? "Confirm" : "Alert"),
        size: c?.options.size,
        footer: c?.kind === "confirm" ? /* @__PURE__ */ L(b1, { children: [
          /* @__PURE__ */ n(V0, { variant: "text", onClick: () => d(!1), children: c.options.cancelText ?? "Cancel" }),
          /* @__PURE__ */ n(
            V0,
            {
              severity: c.options.tone ?? "primary",
              onClick: () => d(!0),
              children: c.options.confirmText ?? "Confirm"
            }
          )
        ] }) : /* @__PURE__ */ n(V0, { onClick: () => d(!0), children: c?.kind === "alert" ? c.options.okText ?? "OK" : "OK" }),
        children: c?.options.message != null && /* @__PURE__ */ n(Xa, { textStyle: "Body1", children: c.options.message })
      },
      c?.seq ?? 0
    )
  ] });
}
const Ya = "_viewport_11t1p_1", Ja = "_topLeft_11t1p_13", Qa = "_topRight_11t1p_20", e5 = "_bottomLeft_11t1p_25", t5 = "_toast_11t1p_30", r5 = "_leaving_11t1p_61", n5 = "_info_11t1p_77", l5 = "_success_11t1p_86", o5 = "_warning_11t1p_95", a5 = "_danger_11t1p_104", s5 = "_content_11t1p_113", c5 = "_title_11t1p_118", i5 = "_description_11t1p_141", d5 = "_dismiss_11t1p_148", u5 = "_actions_11t1p_169", h5 = "_action_11t1p_169", f5 = "_cancel_11t1p_177", p5 = "_progress_11t1p_215", ze = {
  viewport: Ya,
  topLeft: Ja,
  topRight: Qa,
  bottomLeft: e5,
  toast: t5,
  "se-toast-in": "_se-toast-in_11t1p_1",
  leaving: r5,
  "se-toast-out": "_se-toast-out_11t1p_1",
  info: n5,
  success: l5,
  warning: o5,
  danger: a5,
  content: s5,
  title: c5,
  description: i5,
  dismiss: d5,
  actions: u5,
  action: h5,
  cancel: f5,
  progress: p5,
  "se-toast-progress": "_se-toast-progress_11t1p_1"
}, O2 = D0(null);
function Nm() {
  const e = f0(O2);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const m5 = 200, _5 = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function Om({
  children: e,
  durationMs: t = 4e3,
  position: r = "bottom-right",
  pauseOnHover: l = !0,
  className: s
}) {
  const [c, d] = W([]), [o, a] = W(!1), i = Q([]), u = Q(/* @__PURE__ */ new Map()), h = Q(!1), x = Q(0), b = ($) => {
    h.current = $, a($);
  }, k = I(($) => {
    const y = u.current.get($);
    y && (window.clearTimeout(y.timeoutId), y.remaining = Math.max(
      0,
      y.remaining - (Date.now() - y.startedAt)
    ));
  }, []), m = I(($) => {
    const y = u.current.get($);
    y && (window.clearTimeout(y.timeoutId), u.current.delete($));
  }, []), _ = I(
    ($) => {
      m($), d((y) => {
        const N = y.filter((T) => T.id !== $);
        return i.current = N, N;
      });
    },
    [m]
  ), p = I(
    ($) => {
      const y = i.current.find((N) => N.id === $);
      !y || y.leaving || (y.onAutoClose?.(), _($));
    },
    [_]
  ), f = I(
    ($) => {
      const y = u.current.get($);
      !y || y.remaining <= 0 || (y.startedAt = Date.now(), y.timeoutId = window.setTimeout(() => p($), y.remaining));
    },
    [p]
  ), g = I(() => {
    h.current || u.current.forEach(($, y) => k(y)), b(!0);
  }, [k]), M = I(() => {
    u.current.forEach(($, y) => f(y)), b(!1);
  }, [f]);
  v1(() => {
    if (!l) return;
    const $ = () => {
      document.hidden ? g() : M();
    };
    return document.addEventListener("visibilitychange", $), () => document.removeEventListener("visibilitychange", $);
  }, [l, g, M]);
  const v = I(
    ($) => {
      const y = i.current.find((N) => N.id === $);
      !y || y.leaving || (y.onDismiss?.(), d((N) => {
        const T = N.map(
          (V) => V.id === $ ? { ...V, leaving: !0 } : V
        );
        return i.current = T, T;
      }), window.setTimeout(() => _($), m5));
    },
    [_]
  ), w = I(
    ($) => {
      if ($.durationMs <= 0) return;
      const y = {
        remaining: $.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      u.current.set($.id, y), h.current || f($.id);
    },
    [f]
  ), C = I(
    ($) => {
      const y = i.current.find((T) => T.id === $.id), N = {
        id: $.id ?? ++x.current,
        title: $.title,
        description: $.description,
        severity: $.severity ?? "info",
        durationMs: $.durationMs ?? t,
        action: $.action,
        cancel: $.cancel,
        dismissible: $.dismissible ?? !0,
        closeOnClick: $.closeOnClick ?? !1,
        showProgress: $.showProgress ?? !1,
        position: $.position ?? r,
        onDismiss: $.onDismiss,
        onAutoClose: $.onAutoClose
      };
      d((T) => {
        const V = y ? T.map(
          (j) => j.id === N.id ? { ...N, leaving: !1 } : j
        ) : [...T, N];
        return i.current = V, V;
      }), y && m(N.id), w(N);
    },
    [t, r, w, m]
  ), z = g1(() => ({ toast: C }), [C]), A = g1(
    () => Array.from(/* @__PURE__ */ new Set([r, ...c.map(($) => $.position)])),
    [r, c]
  ), S = l ? g : void 0, O = l ? M : void 0;
  return /* @__PURE__ */ L(O2.Provider, { value: z, children: [
    e,
    A.map(($) => /* @__PURE__ */ n(
      "div",
      {
        className: [ze.viewport, ze[_5[$]], s].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: S,
        onMouseLeave: O,
        children: c.filter((y) => y.position === $).map((y) => /* @__PURE__ */ L(
          "div",
          {
            role: y.severity === "danger" ? "alert" : "status",
            "data-paused": o ? "true" : "false",
            "data-clickable": y.closeOnClick ? "true" : "false",
            className: [
              ze.toast,
              ze[y.severity],
              y.leaving ? ze.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: y.closeOnClick ? () => v(y.id) : void 0,
            children: [
              /* @__PURE__ */ L("div", { className: ze.content, children: [
                /* @__PURE__ */ n("div", { className: ze.title, children: y.title }),
                y.description && /* @__PURE__ */ n("div", { className: ze.description, children: y.description }),
                (y.action || y.cancel) && /* @__PURE__ */ L("div", { className: ze.actions, children: [
                  y.action && /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      className: ze.action,
                      onClick: () => {
                        y.action?.onClick?.(), v(y.id);
                      },
                      children: y.action.label
                    }
                  ),
                  y.cancel && /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      className: ze.cancel,
                      onClick: () => {
                        y.cancel?.onClick?.(), v(y.id);
                      },
                      children: y.cancel.label
                    }
                  )
                ] })
              ] }),
              y.dismissible && /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: ze.dismiss,
                  onClick: () => v(y.id),
                  "aria-label": "Dismiss notification",
                  children: /* @__PURE__ */ n(M1, { name: "close", size: "sm" })
                }
              ),
              y.showProgress && y.durationMs > 0 && /* @__PURE__ */ n(
                "div",
                {
                  className: ze.progress,
                  style: { animationDuration: `${y.durationMs}ms` }
                }
              )
            ]
          },
          y.id
        ))
      },
      $
    ))
  ] });
}
const v5 = "_alert_146r9_1", g5 = "_xs_146r9_28", k5 = "_sm_146r9_38", y5 = "_lg_146r9_48", x5 = "_xl_146r9_58", b5 = "_primary_146r9_69", M5 = "_secondary_146r9_74", C5 = "_light_146r9_79", w5 = "_base_146r9_84", z5 = "_dark_146r9_89", L5 = "_info_146r9_94", $5 = "_success_146r9_99", N5 = "_warning_146r9_104", O5 = "_danger_146r9_109", S5 = "_flat_146r9_116", A5 = "_outlined_146r9_123", H5 = "_filled_146r9_132", j5 = "_text_146r9_139", T5 = "_icon_146r9_181", V5 = "_content_146r9_192", D5 = "_title_146r9_197", E5 = "_body_146r9_203", I5 = "_dismiss_146r9_209", Ke = {
  alert: v5,
  xs: g5,
  sm: k5,
  lg: y5,
  xl: x5,
  primary: b5,
  secondary: M5,
  light: C5,
  base: w5,
  dark: z5,
  info: L5,
  success: $5,
  warning: N5,
  danger: O5,
  flat: S5,
  outlined: A5,
  filled: H5,
  text: j5,
  icon: T5,
  content: V5,
  title: D5,
  body: E5,
  dismiss: I5,
  "shade-lighter": "_shade-lighter_146r9_453",
  "shade-light": "_shade-light_146r9_453",
  "shade-dark": "_shade-dark_146r9_463",
  "shade-darker": "_shade-darker_146r9_467"
}, q5 = {
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
function Sm({
  // Intentional Radzen-parity breaking change (1.0): defaults were
  // severity="info" variant="flat" dismissible={false}; Radzen ships
  // AlertStyle.Base + Variant.Filled + AllowClose. Migrate by passing
  // the old values explicitly.
  severity: e = "base",
  variant: t = "filled",
  shade: r,
  size: l = "md",
  title: s,
  icon: c,
  showIcon: d = !0,
  children: o,
  dismissible: a = !0,
  onDismiss: i,
  visible: u,
  onVisibleChange: h,
  className: x,
  ...b
}) {
  const [k, m] = W(!1);
  if (u === !1 || u === void 0 && k)
    return null;
  const _ = () => {
    u === void 0 && m(!0), i?.(), h?.(!1);
  }, p = e, f = b2(t, "filled"), g = nt(r), M = c ?? (d ? /* @__PURE__ */ n(M1, { name: q5[e] }) : null);
  return /* @__PURE__ */ L(
    "div",
    {
      role: "alert",
      ...b,
      className: [
        Ke.alert,
        Ke[p],
        Ke[f],
        g ? Ke[g] : null,
        Ke[l],
        x
      ].filter(Boolean).join(" "),
      children: [
        M != null && /* @__PURE__ */ n("span", { className: Ke.icon, "aria-hidden": "true", children: M }),
        /* @__PURE__ */ L("div", { className: Ke.content, children: [
          s && /* @__PURE__ */ n("div", { className: Ke.title, children: s }),
          o && /* @__PURE__ */ n("div", { className: Ke.body, children: o })
        ] }),
        a && /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: Ke.dismiss,
            onClick: _,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ n(M1, { name: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const P5 = "_skeleton_1xyce_1", B5 = "_text_1xyce_35", R5 = "_circle_1xyce_40", F5 = "_rect_1xyce_44", t2 = {
  skeleton: P5,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_1xyce_1",
  text: B5,
  circle: R5,
  rect: F5
};
function Am({
  variant: e = "text",
  width: t,
  height: r,
  className: l
}) {
  const s = {};
  return t !== void 0 && (s.width = typeof t == "number" ? `${t}px` : t), r !== void 0 && (s.height = typeof r == "number" ? `${r}px` : r), /* @__PURE__ */ n(
    "span",
    {
      "aria-hidden": "true",
      className: [t2.skeleton, t2[e], l].filter(Boolean).join(" "),
      style: s
    }
  );
}
function gt(e) {
  return typeof e == "number" ? `${e}px` : /^\d+$/.test(e) ? `${e}px` : e;
}
const K5 = "_row_juebr_1", W5 = "_start_juebr_14", Z5 = "_center_juebr_18", U5 = "_end_juebr_22", G5 = "_stretch_juebr_26", X5 = "_baseline_juebr_30", Y5 = "_normal_juebr_34", J5 = "_noWrap_juebr_90", Q5 = "_wrapReverse_juebr_94", st = {
  row: K5,
  start: W5,
  center: Z5,
  end: U5,
  stretch: G5,
  baseline: X5,
  normal: Y5,
  "justify-start": "_justify-start_juebr_38",
  "justify-center": "_justify-center_juebr_42",
  "justify-end": "_justify-end_juebr_46",
  "justify-between": "_justify-between_juebr_50",
  "justify-around": "_justify-around_juebr_54",
  "justify-evenly": "_justify-evenly_juebr_58",
  "justify-normal": "_justify-normal_juebr_62",
  "justify-left": "_justify-left_juebr_66",
  "justify-right": "_justify-right_juebr_70",
  "justify-stretch": "_justify-stretch_juebr_74",
  "justify-space-between": "_justify-space-between_juebr_78",
  "justify-space-around": "_justify-space-around_juebr_82",
  "justify-space-evenly": "_justify-space-evenly_juebr_86",
  noWrap: J5,
  wrapReverse: Q5
};
function r2(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function Hm({
  gap: e,
  rowGap: t,
  align: r = "stretch",
  justify: l = "start",
  wrap: s = !0,
  className: c,
  style: d,
  ...o
}) {
  const a = e != null ? gt(e) : null, i = t != null ? gt(t) : null, u = {
    // Keep --dx-col-gap in sync so Column grid math compensates for any
    // gap exactly like it does for the stylesheet default (space-4).
    // Set columnGap (not the gap shorthand): an inline `gap` would also
    // fix row-gap inline and clobber the rowGap prop.
    ...a ? {
      columnGap: a,
      "--dx-col-gap": a
    } : {},
    ...i ? { rowGap: i } : {},
    ...d
  };
  return /* @__PURE__ */ n(
    "div",
    {
      className: [
        st.row,
        st[r],
        st[`justify-${l}`],
        r2(s) != null ? st[r2(s)] : null,
        c
      ].filter(Boolean).join(" "),
      style: u,
      ...o
    }
  );
}
const es = "_column_sh0ss_1", ts = "_Size1_sh0ss_15", rs = "_Size2_sh0ss_24", ns = "_Size3_sh0ss_33", ls = "_Size4_sh0ss_42", os = "_Size5_sh0ss_51", as = "_Size6_sh0ss_60", ss = "_Size7_sh0ss_69", cs = "_Size8_sh0ss_78", is = "_Size9_sh0ss_87", ds = "_Size10_sh0ss_96", us = "_Size11_sh0ss_105", hs = "_Size12_sh0ss_114", fs = "_Offset0_sh0ss_119", ps = "_Offset1_sh0ss_122", ms = "_Offset2_sh0ss_127", _s = "_Offset3_sh0ss_132", vs = "_Offset4_sh0ss_137", gs = "_Offset5_sh0ss_142", ks = "_Offset6_sh0ss_147", ys = "_Offset7_sh0ss_152", xs = "_Offset8_sh0ss_157", bs = "_Offset9_sh0ss_162", Ms = "_Offset10_sh0ss_167", Cs = "_Offset11_sh0ss_172", ws = "_Offset12_sh0ss_177", zs = "_OrderFirst_sh0ss_182", Ls = "_OrderLast_sh0ss_185", $s = "_Order0_sh0ss_188", Ns = "_Order1_sh0ss_191", Os = "_Order2_sh0ss_194", Ss = "_Order3_sh0ss_197", As = "_Order4_sh0ss_200", Hs = "_Order5_sh0ss_203", js = "_Order6_sh0ss_206", Ts = "_Order7_sh0ss_209", Vs = "_Order8_sh0ss_212", Ds = "_Order9_sh0ss_215", Es = "_Order10_sh0ss_218", Is = "_Order11_sh0ss_221", qs = "_Order12_sh0ss_224", Ps = "_xsSize1_sh0ss_229", Bs = "_xsSize2_sh0ss_238", Rs = "_xsSize3_sh0ss_247", Fs = "_xsSize4_sh0ss_256", Ks = "_xsSize5_sh0ss_265", Ws = "_xsSize6_sh0ss_274", Zs = "_xsSize7_sh0ss_283", Us = "_xsSize8_sh0ss_292", Gs = "_xsSize9_sh0ss_301", Xs = "_xsSize10_sh0ss_310", Ys = "_xsSize11_sh0ss_321", Js = "_xsSize12_sh0ss_332", Qs = "_xsOffset0_sh0ss_337", ec = "_xsOffset1_sh0ss_340", tc = "_xsOffset2_sh0ss_345", rc = "_xsOffset3_sh0ss_350", nc = "_xsOffset4_sh0ss_355", lc = "_xsOffset5_sh0ss_360", oc = "_xsOffset6_sh0ss_365", ac = "_xsOffset7_sh0ss_370", sc = "_xsOffset8_sh0ss_375", cc = "_xsOffset9_sh0ss_380", ic = "_xsOffset10_sh0ss_385", dc = "_xsOffset11_sh0ss_391", uc = "_xsOffset12_sh0ss_397", hc = "_xsOrderFirst_sh0ss_403", fc = "_xsOrderLast_sh0ss_406", pc = "_xsOrder0_sh0ss_409", mc = "_xsOrder1_sh0ss_412", _c = "_xsOrder2_sh0ss_415", vc = "_xsOrder3_sh0ss_418", gc = "_xsOrder4_sh0ss_421", kc = "_xsOrder5_sh0ss_424", yc = "_xsOrder6_sh0ss_427", xc = "_xsOrder7_sh0ss_430", bc = "_xsOrder8_sh0ss_433", Mc = "_xsOrder9_sh0ss_436", Cc = "_xsOrder10_sh0ss_439", wc = "_xsOrder11_sh0ss_442", zc = "_xsOrder12_sh0ss_445", Lc = "_smSize1_sh0ss_451", $c = "_smSize2_sh0ss_460", Nc = "_smSize3_sh0ss_469", Oc = "_smSize4_sh0ss_478", Sc = "_smSize5_sh0ss_487", Ac = "_smSize6_sh0ss_496", Hc = "_smSize7_sh0ss_505", jc = "_smSize8_sh0ss_514", Tc = "_smSize9_sh0ss_523", Vc = "_smSize10_sh0ss_532", Dc = "_smSize11_sh0ss_543", Ec = "_smSize12_sh0ss_554", Ic = "_smOffset0_sh0ss_559", qc = "_smOffset1_sh0ss_562", Pc = "_smOffset2_sh0ss_567", Bc = "_smOffset3_sh0ss_572", Rc = "_smOffset4_sh0ss_577", Fc = "_smOffset5_sh0ss_582", Kc = "_smOffset6_sh0ss_587", Wc = "_smOffset7_sh0ss_592", Zc = "_smOffset8_sh0ss_597", Uc = "_smOffset9_sh0ss_602", Gc = "_smOffset10_sh0ss_607", Xc = "_smOffset11_sh0ss_613", Yc = "_smOffset12_sh0ss_619", Jc = "_smOrderFirst_sh0ss_625", Qc = "_smOrderLast_sh0ss_628", e4 = "_smOrder0_sh0ss_631", t4 = "_smOrder1_sh0ss_634", r4 = "_smOrder2_sh0ss_637", n4 = "_smOrder3_sh0ss_640", l4 = "_smOrder4_sh0ss_643", o4 = "_smOrder5_sh0ss_646", a4 = "_smOrder6_sh0ss_649", s4 = "_smOrder7_sh0ss_652", c4 = "_smOrder8_sh0ss_655", i4 = "_smOrder9_sh0ss_658", d4 = "_smOrder10_sh0ss_661", u4 = "_smOrder11_sh0ss_664", h4 = "_smOrder12_sh0ss_667", f4 = "_mdSize1_sh0ss_673", p4 = "_mdSize2_sh0ss_682", m4 = "_mdSize3_sh0ss_691", _4 = "_mdSize4_sh0ss_700", v4 = "_mdSize5_sh0ss_709", g4 = "_mdSize6_sh0ss_718", k4 = "_mdSize7_sh0ss_727", y4 = "_mdSize8_sh0ss_736", x4 = "_mdSize9_sh0ss_745", b4 = "_mdSize10_sh0ss_754", M4 = "_mdSize11_sh0ss_765", C4 = "_mdSize12_sh0ss_776", w4 = "_mdOffset0_sh0ss_781", z4 = "_mdOffset1_sh0ss_784", L4 = "_mdOffset2_sh0ss_789", $4 = "_mdOffset3_sh0ss_794", N4 = "_mdOffset4_sh0ss_799", O4 = "_mdOffset5_sh0ss_804", S4 = "_mdOffset6_sh0ss_809", A4 = "_mdOffset7_sh0ss_814", H4 = "_mdOffset8_sh0ss_819", j4 = "_mdOffset9_sh0ss_824", T4 = "_mdOffset10_sh0ss_829", V4 = "_mdOffset11_sh0ss_835", D4 = "_mdOffset12_sh0ss_841", E4 = "_mdOrderFirst_sh0ss_847", I4 = "_mdOrderLast_sh0ss_850", q4 = "_mdOrder0_sh0ss_853", P4 = "_mdOrder1_sh0ss_856", B4 = "_mdOrder2_sh0ss_859", R4 = "_mdOrder3_sh0ss_862", F4 = "_mdOrder4_sh0ss_865", K4 = "_mdOrder5_sh0ss_868", W4 = "_mdOrder6_sh0ss_871", Z4 = "_mdOrder7_sh0ss_874", U4 = "_mdOrder8_sh0ss_877", G4 = "_mdOrder9_sh0ss_880", X4 = "_mdOrder10_sh0ss_883", Y4 = "_mdOrder11_sh0ss_886", J4 = "_mdOrder12_sh0ss_889", Q4 = "_lgSize1_sh0ss_895", e3 = "_lgSize2_sh0ss_904", t3 = "_lgSize3_sh0ss_913", r3 = "_lgSize4_sh0ss_922", n3 = "_lgSize5_sh0ss_931", l3 = "_lgSize6_sh0ss_940", o3 = "_lgSize7_sh0ss_949", a3 = "_lgSize8_sh0ss_958", s3 = "_lgSize9_sh0ss_967", c3 = "_lgSize10_sh0ss_976", i3 = "_lgSize11_sh0ss_987", d3 = "_lgSize12_sh0ss_998", u3 = "_lgOffset0_sh0ss_1003", h3 = "_lgOffset1_sh0ss_1006", f3 = "_lgOffset2_sh0ss_1011", p3 = "_lgOffset3_sh0ss_1016", m3 = "_lgOffset4_sh0ss_1021", _3 = "_lgOffset5_sh0ss_1026", v3 = "_lgOffset6_sh0ss_1031", g3 = "_lgOffset7_sh0ss_1036", k3 = "_lgOffset8_sh0ss_1041", y3 = "_lgOffset9_sh0ss_1046", x3 = "_lgOffset10_sh0ss_1051", b3 = "_lgOffset11_sh0ss_1057", M3 = "_lgOffset12_sh0ss_1063", C3 = "_lgOrderFirst_sh0ss_1069", w3 = "_lgOrderLast_sh0ss_1072", z3 = "_lgOrder0_sh0ss_1075", L3 = "_lgOrder1_sh0ss_1078", $3 = "_lgOrder2_sh0ss_1081", N3 = "_lgOrder3_sh0ss_1084", O3 = "_lgOrder4_sh0ss_1087", S3 = "_lgOrder5_sh0ss_1090", A3 = "_lgOrder6_sh0ss_1093", H3 = "_lgOrder7_sh0ss_1096", j3 = "_lgOrder8_sh0ss_1099", T3 = "_lgOrder9_sh0ss_1102", V3 = "_lgOrder10_sh0ss_1105", D3 = "_lgOrder11_sh0ss_1108", E3 = "_lgOrder12_sh0ss_1111", I3 = "_xlSize1_sh0ss_1117", q3 = "_xlSize2_sh0ss_1126", P3 = "_xlSize3_sh0ss_1135", B3 = "_xlSize4_sh0ss_1144", R3 = "_xlSize5_sh0ss_1153", F3 = "_xlSize6_sh0ss_1162", K3 = "_xlSize7_sh0ss_1171", W3 = "_xlSize8_sh0ss_1180", Z3 = "_xlSize9_sh0ss_1189", U3 = "_xlSize10_sh0ss_1198", G3 = "_xlSize11_sh0ss_1209", X3 = "_xlSize12_sh0ss_1220", Y3 = "_xlOffset0_sh0ss_1225", J3 = "_xlOffset1_sh0ss_1228", Q3 = "_xlOffset2_sh0ss_1233", ei = "_xlOffset3_sh0ss_1238", ti = "_xlOffset4_sh0ss_1243", ri = "_xlOffset5_sh0ss_1248", ni = "_xlOffset6_sh0ss_1253", li = "_xlOffset7_sh0ss_1258", oi = "_xlOffset8_sh0ss_1263", ai = "_xlOffset9_sh0ss_1268", si = "_xlOffset10_sh0ss_1273", ci = "_xlOffset11_sh0ss_1279", ii = "_xlOffset12_sh0ss_1285", di = "_xlOrderFirst_sh0ss_1291", ui = "_xlOrderLast_sh0ss_1294", hi = "_xlOrder0_sh0ss_1297", fi = "_xlOrder1_sh0ss_1300", pi = "_xlOrder2_sh0ss_1303", mi = "_xlOrder3_sh0ss_1306", _i = "_xlOrder4_sh0ss_1309", vi = "_xlOrder5_sh0ss_1312", gi = "_xlOrder6_sh0ss_1315", ki = "_xlOrder7_sh0ss_1318", yi = "_xlOrder8_sh0ss_1321", xi = "_xlOrder9_sh0ss_1324", bi = "_xlOrder10_sh0ss_1327", Mi = "_xlOrder11_sh0ss_1330", Ci = "_xlOrder12_sh0ss_1333", wi = "_xxSize1_sh0ss_1339", zi = "_xxSize2_sh0ss_1348", Li = "_xxSize3_sh0ss_1357", $i = "_xxSize4_sh0ss_1366", Ni = "_xxSize5_sh0ss_1375", Oi = "_xxSize6_sh0ss_1384", Si = "_xxSize7_sh0ss_1393", Ai = "_xxSize8_sh0ss_1402", Hi = "_xxSize9_sh0ss_1411", ji = "_xxSize10_sh0ss_1420", Ti = "_xxSize11_sh0ss_1431", Vi = "_xxSize12_sh0ss_1442", Di = "_xxOffset0_sh0ss_1447", Ei = "_xxOffset1_sh0ss_1450", Ii = "_xxOffset2_sh0ss_1455", qi = "_xxOffset3_sh0ss_1460", Pi = "_xxOffset4_sh0ss_1465", Bi = "_xxOffset5_sh0ss_1470", Ri = "_xxOffset6_sh0ss_1475", Fi = "_xxOffset7_sh0ss_1480", Ki = "_xxOffset8_sh0ss_1485", Wi = "_xxOffset9_sh0ss_1490", Zi = "_xxOffset10_sh0ss_1495", Ui = "_xxOffset11_sh0ss_1501", Gi = "_xxOffset12_sh0ss_1507", Xi = "_xxOrderFirst_sh0ss_1513", Yi = "_xxOrderLast_sh0ss_1516", Ji = "_xxOrder0_sh0ss_1519", Qi = "_xxOrder1_sh0ss_1522", e6 = "_xxOrder2_sh0ss_1525", t6 = "_xxOrder3_sh0ss_1528", r6 = "_xxOrder4_sh0ss_1531", n6 = "_xxOrder5_sh0ss_1534", l6 = "_xxOrder6_sh0ss_1537", o6 = "_xxOrder7_sh0ss_1540", a6 = "_xxOrder8_sh0ss_1543", s6 = "_xxOrder9_sh0ss_1546", c6 = "_xxOrder10_sh0ss_1549", i6 = "_xxOrder11_sh0ss_1552", d6 = "_xxOrder12_sh0ss_1555", ct = {
  column: es,
  Size1: ts,
  Size2: rs,
  Size3: ns,
  Size4: ls,
  Size5: os,
  Size6: as,
  Size7: ss,
  Size8: cs,
  Size9: is,
  Size10: ds,
  Size11: us,
  Size12: hs,
  Offset0: fs,
  Offset1: ps,
  Offset2: ms,
  Offset3: _s,
  Offset4: vs,
  Offset5: gs,
  Offset6: ks,
  Offset7: ys,
  Offset8: xs,
  Offset9: bs,
  Offset10: Ms,
  Offset11: Cs,
  Offset12: ws,
  OrderFirst: zs,
  OrderLast: Ls,
  Order0: $s,
  Order1: Ns,
  Order2: Os,
  Order3: Ss,
  Order4: As,
  Order5: Hs,
  Order6: js,
  Order7: Ts,
  Order8: Vs,
  Order9: Ds,
  Order10: Es,
  Order11: Is,
  Order12: qs,
  xsSize1: Ps,
  xsSize2: Bs,
  xsSize3: Rs,
  xsSize4: Fs,
  xsSize5: Ks,
  xsSize6: Ws,
  xsSize7: Zs,
  xsSize8: Us,
  xsSize9: Gs,
  xsSize10: Xs,
  xsSize11: Ys,
  xsSize12: Js,
  xsOffset0: Qs,
  xsOffset1: ec,
  xsOffset2: tc,
  xsOffset3: rc,
  xsOffset4: nc,
  xsOffset5: lc,
  xsOffset6: oc,
  xsOffset7: ac,
  xsOffset8: sc,
  xsOffset9: cc,
  xsOffset10: ic,
  xsOffset11: dc,
  xsOffset12: uc,
  xsOrderFirst: hc,
  xsOrderLast: fc,
  xsOrder0: pc,
  xsOrder1: mc,
  xsOrder2: _c,
  xsOrder3: vc,
  xsOrder4: gc,
  xsOrder5: kc,
  xsOrder6: yc,
  xsOrder7: xc,
  xsOrder8: bc,
  xsOrder9: Mc,
  xsOrder10: Cc,
  xsOrder11: wc,
  xsOrder12: zc,
  smSize1: Lc,
  smSize2: $c,
  smSize3: Nc,
  smSize4: Oc,
  smSize5: Sc,
  smSize6: Ac,
  smSize7: Hc,
  smSize8: jc,
  smSize9: Tc,
  smSize10: Vc,
  smSize11: Dc,
  smSize12: Ec,
  smOffset0: Ic,
  smOffset1: qc,
  smOffset2: Pc,
  smOffset3: Bc,
  smOffset4: Rc,
  smOffset5: Fc,
  smOffset6: Kc,
  smOffset7: Wc,
  smOffset8: Zc,
  smOffset9: Uc,
  smOffset10: Gc,
  smOffset11: Xc,
  smOffset12: Yc,
  smOrderFirst: Jc,
  smOrderLast: Qc,
  smOrder0: e4,
  smOrder1: t4,
  smOrder2: r4,
  smOrder3: n4,
  smOrder4: l4,
  smOrder5: o4,
  smOrder6: a4,
  smOrder7: s4,
  smOrder8: c4,
  smOrder9: i4,
  smOrder10: d4,
  smOrder11: u4,
  smOrder12: h4,
  mdSize1: f4,
  mdSize2: p4,
  mdSize3: m4,
  mdSize4: _4,
  mdSize5: v4,
  mdSize6: g4,
  mdSize7: k4,
  mdSize8: y4,
  mdSize9: x4,
  mdSize10: b4,
  mdSize11: M4,
  mdSize12: C4,
  mdOffset0: w4,
  mdOffset1: z4,
  mdOffset2: L4,
  mdOffset3: $4,
  mdOffset4: N4,
  mdOffset5: O4,
  mdOffset6: S4,
  mdOffset7: A4,
  mdOffset8: H4,
  mdOffset9: j4,
  mdOffset10: T4,
  mdOffset11: V4,
  mdOffset12: D4,
  mdOrderFirst: E4,
  mdOrderLast: I4,
  mdOrder0: q4,
  mdOrder1: P4,
  mdOrder2: B4,
  mdOrder3: R4,
  mdOrder4: F4,
  mdOrder5: K4,
  mdOrder6: W4,
  mdOrder7: Z4,
  mdOrder8: U4,
  mdOrder9: G4,
  mdOrder10: X4,
  mdOrder11: Y4,
  mdOrder12: J4,
  lgSize1: Q4,
  lgSize2: e3,
  lgSize3: t3,
  lgSize4: r3,
  lgSize5: n3,
  lgSize6: l3,
  lgSize7: o3,
  lgSize8: a3,
  lgSize9: s3,
  lgSize10: c3,
  lgSize11: i3,
  lgSize12: d3,
  lgOffset0: u3,
  lgOffset1: h3,
  lgOffset2: f3,
  lgOffset3: p3,
  lgOffset4: m3,
  lgOffset5: _3,
  lgOffset6: v3,
  lgOffset7: g3,
  lgOffset8: k3,
  lgOffset9: y3,
  lgOffset10: x3,
  lgOffset11: b3,
  lgOffset12: M3,
  lgOrderFirst: C3,
  lgOrderLast: w3,
  lgOrder0: z3,
  lgOrder1: L3,
  lgOrder2: $3,
  lgOrder3: N3,
  lgOrder4: O3,
  lgOrder5: S3,
  lgOrder6: A3,
  lgOrder7: H3,
  lgOrder8: j3,
  lgOrder9: T3,
  lgOrder10: V3,
  lgOrder11: D3,
  lgOrder12: E3,
  xlSize1: I3,
  xlSize2: q3,
  xlSize3: P3,
  xlSize4: B3,
  xlSize5: R3,
  xlSize6: F3,
  xlSize7: K3,
  xlSize8: W3,
  xlSize9: Z3,
  xlSize10: U3,
  xlSize11: G3,
  xlSize12: X3,
  xlOffset0: Y3,
  xlOffset1: J3,
  xlOffset2: Q3,
  xlOffset3: ei,
  xlOffset4: ti,
  xlOffset5: ri,
  xlOffset6: ni,
  xlOffset7: li,
  xlOffset8: oi,
  xlOffset9: ai,
  xlOffset10: si,
  xlOffset11: ci,
  xlOffset12: ii,
  xlOrderFirst: di,
  xlOrderLast: ui,
  xlOrder0: hi,
  xlOrder1: fi,
  xlOrder2: pi,
  xlOrder3: mi,
  xlOrder4: _i,
  xlOrder5: vi,
  xlOrder6: gi,
  xlOrder7: ki,
  xlOrder8: yi,
  xlOrder9: xi,
  xlOrder10: bi,
  xlOrder11: Mi,
  xlOrder12: Ci,
  xxSize1: wi,
  xxSize2: zi,
  xxSize3: Li,
  xxSize4: $i,
  xxSize5: Ni,
  xxSize6: Oi,
  xxSize7: Si,
  xxSize8: Ai,
  xxSize9: Hi,
  xxSize10: ji,
  xxSize11: Ti,
  xxSize12: Vi,
  xxOffset0: Di,
  xxOffset1: Ei,
  xxOffset2: Ii,
  xxOffset3: qi,
  xxOffset4: Pi,
  xxOffset5: Bi,
  xxOffset6: Ri,
  xxOffset7: Fi,
  xxOffset8: Ki,
  xxOffset9: Wi,
  xxOffset10: Zi,
  xxOffset11: Ui,
  xxOffset12: Gi,
  xxOrderFirst: Xi,
  xxOrderLast: Yi,
  xxOrder0: Ji,
  xxOrder1: Qi,
  xxOrder2: e6,
  xxOrder3: t6,
  xxOrder4: r6,
  xxOrder5: n6,
  xxOrder6: l6,
  xxOrder7: o6,
  xxOrder8: a6,
  xxOrder9: s6,
  xxOrder10: c6,
  xxOrder11: i6,
  xxOrder12: d6
}, u6 = [
  ["", "size", "offset", "order"],
  ["xs", "sizeXs", "offsetXs", "orderXs"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xx", "sizeXx", "offsetXx", "orderXx"]
];
function h6(e, t) {
  if (!Number.isInteger(t) || t < 1 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 1 and 12.`
    );
}
function f6(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12.`
    );
}
function p6(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12 or first/last.`
    );
}
function m6(e, t, r) {
  return t === "first" ? `${e}OrderFirst` : t === "last" ? `${e}OrderLast` : (p6(r, t), `${e}Order${t}`);
}
function jm({ className: e, style: t, ...r }) {
  const l = [ct.column], s = { ...t };
  for (const [O, $, y, N] of u6) {
    const T = r[$], V = r[y], j = r[N];
    if (T != null) {
      h6($, T);
      const P = ct[`${O}Size${T}`];
      P && l.push(P);
    }
    if (V != null) {
      f6(y, V);
      const P = ct[`${O}Offset${V}`];
      P && l.push(P);
    }
    if (j != null) {
      const P = ct[m6(O, j, N)];
      P && l.push(P);
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
    offsetMd: x,
    sizeLg: b,
    offsetLg: k,
    sizeXl: m,
    offsetXl: _,
    sizeXx: p,
    offsetXx: f,
    order: g,
    orderXs: M,
    orderSm: v,
    orderMd: w,
    orderLg: C,
    orderXl: z,
    orderXx: A,
    ...S
  } = r;
  return /* @__PURE__ */ n(
    "div",
    {
      className: [...l, e].filter(Boolean).join(" "),
      style: s,
      ...S
    }
  );
}
const _6 = "_stack_umuag_1", Z0 = {
  stack: _6,
  "dir-row": "_dir-row_umuag_5",
  "dir-row-reverse": "_dir-row-reverse_umuag_9",
  "dir-column": "_dir-column_umuag_13",
  "dir-column-reverse": "_dir-column-reverse_umuag_17",
  "wrap-nowrap": "_wrap-nowrap_umuag_21",
  "wrap-wrap-reverse": "_wrap-wrap-reverse_umuag_25",
  "align-start": "_align-start_umuag_29",
  "align-center": "_align-center_umuag_33",
  "align-end": "_align-end_umuag_37",
  "align-stretch": "_align-stretch_umuag_41",
  "align-baseline": "_align-baseline_umuag_45",
  "align-normal": "_align-normal_umuag_49",
  "justify-start": "_justify-start_umuag_53",
  "justify-center": "_justify-center_umuag_57",
  "justify-end": "_justify-end_umuag_61",
  "justify-between": "_justify-between_umuag_65",
  "justify-around": "_justify-around_umuag_69",
  "justify-evenly": "_justify-evenly_umuag_73",
  "justify-normal": "_justify-normal_umuag_77",
  "justify-space-between": "_justify-space-between_umuag_84",
  "justify-space-around": "_justify-space-around_umuag_88",
  "justify-space-evenly": "_justify-space-evenly_umuag_92"
};
function n2(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function Tm({
  orientation: e = "vertical",
  reverse: t = !1,
  wrap: r = !0,
  gap: l = 8,
  align: s,
  justify: c,
  className: d,
  style: o,
  ...a
}) {
  const i = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", u = {
    ...l != null ? { gap: gt(l) } : {},
    ...o
  };
  return /* @__PURE__ */ n(
    "div",
    {
      className: [
        Z0.stack,
        Z0[`dir-${i}`],
        n2(r) !== "wrap" ? Z0[`wrap-${n2(r)}`] : null,
        s != null ? Z0[`align-${s}`] : null,
        c != null ? Z0[`justify-${c}`] : null,
        d
      ].filter(Boolean).join(" "),
      style: u,
      ...a
    }
  );
}
const v6 = "_autogrid_16x9f_1", g6 = {
  autogrid: v6
};
function Vm({
  min: e = 240,
  gap: t = 12,
  className: r,
  style: l,
  visible: s = !0,
  ...c
}) {
  if (s === !1) return null;
  const d = {
    // Keep --dx-autogrid-min in sync so the track math follows the prop.
    "--dx-autogrid-min": typeof e == "number" ? `${e}px` : e,
    ...t != null ? { gap: gt(t) } : {},
    ...l
  };
  return /* @__PURE__ */ n(
    "div",
    {
      className: [g6.autogrid, r].filter(Boolean).join(" "),
      style: d,
      ...c
    }
  );
}
const k6 = "_layout_fxvw1_1", y6 = "_row_fxvw1_7", x6 = "_grid_fxvw1_21", b6 = "_gridRight_fxvw1_27", M6 = "_gridHeader_fxvw1_31", C6 = "_gridFooter_fxvw1_36", w6 = "_gridContents_fxvw1_41", z6 = "_gridBody_fxvw1_45", Je = {
  layout: k6,
  row: y6,
  grid: x6,
  gridRight: b6,
  gridHeader: M6,
  gridFooter: C6,
  gridContents: w6,
  gridBody: z6
}, L6 = "_footer_3be5w_1", $6 = "_sticky_3be5w_9", l2 = {
  footer: L6,
  sticky: $6
};
function N6({
  sticky: e = !1,
  className: t,
  children: r,
  ...l
}) {
  return /* @__PURE__ */ n(
    "footer",
    {
      className: [l2.footer, e ? l2.sticky : null, t].filter(Boolean).join(" "),
      ...l,
      children: r
    }
  );
}
const O6 = "_header_1tw8b_1", S6 = "_sticky_1tw8b_9", o2 = {
  header: O6,
  sticky: S6
};
function A6({
  sticky: e = !1,
  className: t,
  children: r,
  ...l
}) {
  return /* @__PURE__ */ n(
    "header",
    {
      className: [o2.header, e ? o2.sticky : null, t].filter(Boolean).join(" "),
      ...l,
      children: r
    }
  );
}
const H6 = "_sidebar_175d5_1", j6 = "_sticky_175d5_23", T6 = "_left_175d5_41", V6 = "_right_175d5_45", D6 = "_start_175d5_50", E6 = "_end_175d5_54", I6 = "_fullHeight_175d5_60", q6 = "_collapsed_175d5_64", P6 = "_responsive_175d5_72", B6 = "_overlay_175d5_80", R6 = "_mask_175d5_108", i0 = {
  sidebar: H6,
  sticky: j6,
  left: T6,
  right: V6,
  start: D6,
  end: E6,
  fullHeight: I6,
  collapsed: q6,
  responsive: P6,
  overlay: B6,
  mask: R6
};
function F6({
  position: e = "left",
  expanded: t = !0,
  responsive: r = !1,
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
    const u = (h) => {
      h.key === "Escape" && d();
    };
    return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
  }, [l, t, d]), /* @__PURE__ */ L(b1, { children: [
    l && t ? /* @__PURE__ */ n(
      "div",
      {
        className: `${i0.mask} se-layout-mask`,
        "aria-hidden": "true",
        onClick: d
      }
    ) : null,
    /* @__PURE__ */ n(
      "aside",
      {
        className: [
          i0.sidebar,
          i0[e],
          t ? null : i0.collapsed,
          r ? i0.responsive : null,
          l ? [i0.overlay, "se-sidebar--overlay"] : null,
          s ? i0.fullHeight : null,
          c && !l && !s ? i0.sticky : null,
          o
        ].flat().filter(Boolean).join(" "),
        ...i,
        children: a
      }
    )
  ] });
}
function Dm(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ n(b1, { children: e.children });
  const { className: t, children: r, ...l } = e, s = [], c = [], d = [], o = [], a = [], i = [];
  lt.forEach(r, (x) => {
    if (!ve(x)) {
      d.push(x);
      return;
    }
    if (x.type === A6)
      s.push(x);
    else if (x.type === N6)
      c.push(x);
    else if (x.type === F6) {
      const b = x, k = b.props.position;
      i.push(b), (k === "right" || k === "end" ? a : o).push(b);
    } else
      d.push(x);
  });
  const u = i.length === 1 && i[0]?.props.fullHeight === !0 ? i[0] : null, h = u != null && (u.props.position === "right" || u.props.position === "end");
  if (u) {
    const x = h ? a : o;
    return /* @__PURE__ */ L(
      "div",
      {
        className: [
          Je.layout,
          Je.grid,
          h ? Je.gridRight : null,
          t
        ].filter(Boolean).join(" "),
        ...l,
        children: [
          s.length > 0 && /* @__PURE__ */ n("div", { className: Je.gridHeader, children: s }),
          /* @__PURE__ */ L("div", { className: Je.gridContents, children: [
            x,
            /* @__PURE__ */ n("div", { className: Je.gridBody, children: d })
          ] }),
          c.length > 0 && /* @__PURE__ */ n("div", { className: Je.gridFooter, children: c })
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
const K6 = "_body_1ge00_4", W6 = "_bare_1ge00_12", a2 = {
  body: K6,
  bare: W6
};
function Em({
  as: e = "main",
  padded: t = !0,
  className: r,
  children: l,
  ...s
}) {
  return /* @__PURE__ */ n(
    e,
    {
      className: [a2.body, t ? null : a2.bare, r].filter(Boolean).join(" "),
      ...s,
      children: l
    }
  );
}
const Z6 = "_toggle_lxnk5_1", U6 = {
  toggle: Z6
};
function Im({
  icon: e = "menu",
  label: t = "Toggle sidebar",
  className: r,
  type: l = "button",
  children: s,
  ...c
}) {
  return /* @__PURE__ */ n(
    "button",
    {
      type: l,
      "aria-label": t,
      className: [U6.toggle, r].filter(Boolean).join(" "),
      ...c,
      children: s ?? /* @__PURE__ */ n(M1, { name: e, size: 20 })
    }
  );
}
const G6 = "_track_14127_1", X6 = "_bar_14127_31", Y6 = "_primary_14127_39", J6 = "_success_14127_43", Q6 = "_warning_14127_47", e8 = "_danger_14127_51", t8 = "_indeterminate_14127_149", r8 = "_circular_14127_163", n8 = "_fill_14127_203", Le = {
  track: G6,
  "linear-xs": "_linear-xs_14127_11",
  "linear-sm": "_linear-sm_14127_15",
  "linear-md": "_linear-md_14127_19",
  "linear-lg": "_linear-lg_14127_23",
  "linear-xl": "_linear-xl_14127_27",
  bar: X6,
  primary: Y6,
  success: J6,
  warning: Q6,
  danger: e8,
  "shade-lighter": "_shade-lighter_14127_133",
  "shade-light": "_shade-light_14127_133",
  "shade-dark": "_shade-dark_14127_141",
  "shade-darker": "_shade-darker_14127_145",
  indeterminate: t8,
  "se-progress-slide": "_se-progress-slide_14127_1",
  circular: r8,
  "circular-xs": "_circular-xs_14127_169",
  "circular-sm": "_circular-sm_14127_174",
  "circular-md": "_circular-md_14127_179",
  "circular-lg": "_circular-lg_14127_184",
  "circular-xl": "_circular-xl_14127_189",
  fill: n8,
  "se-progress-spin": "_se-progress-spin_14127_1"
};
function qm({
  value: e = 0,
  max: t = 100,
  severity: r = "primary",
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
    const b = typeof d == "string", k = 2, m = 10.5, _ = 2 * Math.PI * m, p = _ * (s ? 0.75 : 1), f = s ? 0 : _ * (1 - h / 100), g = nt(l);
    return /* @__PURE__ */ L(
      "svg",
      {
        width: b ? void 0 : d,
        height: b ? void 0 : d,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": i["aria-label"],
        "aria-labelledby": i["aria-labelledby"],
        "aria-valuenow": s ? void 0 : Math.round(u),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        ...i,
        className: [
          Le.circular,
          Le[r],
          g ? Le[g] : null,
          b ? Le[`circular-${d}`] : null,
          s ? Le.indeterminate : null,
          o
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ n(
            "circle",
            {
              className: Le.track,
              cx: 12,
              cy: 12,
              r: m,
              strokeWidth: k
            }
          ),
          /* @__PURE__ */ n(
            "circle",
            {
              className: Le.fill,
              cx: 12,
              cy: 12,
              r: m,
              strokeWidth: k,
              strokeDasharray: `${p} ${_}`,
              strokeDashoffset: f
            }
          )
        ]
      }
    );
  }
  const x = nt(l);
  return /* @__PURE__ */ n(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": s ? void 0 : Math.round(u),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        Le.track,
        Le[r],
        x ? Le[x] : null,
        typeof d == "string" ? Le[`linear-${d}`] : null,
        s ? Le.indeterminate : null,
        o
      ].filter(Boolean).join(" "),
      ...i,
      children: /* @__PURE__ */ n(
        "div",
        {
          className: Le.bar,
          style: s ? void 0 : { width: `${h}%` }
        }
      )
    }
  );
}
const l8 = "_wrapper_tk30z_1", o8 = {
  wrapper: l8
}, a8 = [
  "default",
  "fluent",
  "github",
  "material",
  "material-3",
  "shadcn"
], S2 = "dx-palette", s8 = "data-palette";
function c8(e, t) {
  const r = e === void 0 ? S2 : e;
  if (!(r === null || typeof localStorage > "u"))
    try {
      const l = localStorage.getItem(r);
      return l != null && t.includes(l) ? l : void 0;
    } catch {
      return;
    }
}
function i8(e, t) {
  const r = e === void 0 ? S2 : e;
  if (!(r === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(r, t);
    } catch {
    }
}
function Pm({
  themes: e = a8,
  value: t,
  defaultValue: r,
  storageKey: l,
  attribute: s = s8,
  onChange: c,
  label: d = "Theme",
  placeholder: o = "Theme…",
  id: a,
  size: i = "md",
  className: u
}) {
  const [h, x] = W(void 0), b = t !== void 0, k = t ?? h ?? c8(l, e) ?? r, m = k ?? "", _ = Q(void 0);
  v1(() => {
    if (b) return;
    const f = document.documentElement;
    if (k === void 0) {
      _.current !== void 0 && f.getAttribute(s) === _.current && (f.removeAttribute(s), _.current = void 0);
      return;
    }
    f.setAttribute(s, k), _.current = k;
  }, [k, s, b]);
  const p = (f) => {
    const g = f.target.value;
    b || (x(g), i8(l, g)), c?.(g);
  };
  return /* @__PURE__ */ L("label", { className: [o8.wrapper, u].filter(Boolean).join(" "), children: [
    d,
    /* @__PURE__ */ L(w0, { id: a, size: i, value: m, onChange: p, children: [
      k === void 0 && /* @__PURE__ */ n("option", { value: "", disabled: !0, children: o }),
      k !== void 0 && !e.includes(k) && /* @__PURE__ */ n("option", { value: k, children: k }),
      e.map((f) => /* @__PURE__ */ n("option", { value: f, children: f }, f))
    ] })
  ] });
}
function d8(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function A2(e) {
  const [t, r] = W(() => d8(e));
  return v1(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const l = window.matchMedia(e);
    r(l.matches);
    const s = (c) => r(c.matches);
    return typeof l.addEventListener == "function" ? (l.addEventListener("change", s), () => l.removeEventListener("change", s)) : (l.addListener(s), () => l.removeListener(s));
  }, [e]), t;
}
const u8 = "_pressed_12x15_8", h8 = {
  pressed: u8
}, f8 = I1(
  function({
    pressed: t,
    defaultPressed: r = !1,
    onChange: l,
    toggleVariant: s,
    toggleSeverity: c = "primary",
    toggleShade: d = "darker",
    toggleContent: o,
    size: a = "md",
    className: i,
    onClick: u,
    children: h,
    variant: x,
    severity: b,
    shade: k,
    ...m
  }, _) {
    const [p, f] = W(r), g = t ?? p, M = (v) => {
      const w = !g;
      t === void 0 && f(w), l?.(w), u?.(v);
    };
    return /* @__PURE__ */ n(
      V0,
      {
        ...m,
        ref: _,
        variant: g && s ? s : x,
        severity: g ? c : b,
        shade: g ? d : k,
        size: a,
        "aria-pressed": g,
        className: [g ? h8.pressed : null, i].filter(Boolean).join(" "),
        onClick: M,
        children: g && o !== void 0 ? o : h
      }
    );
  }
), H2 = "dx-theme";
function p8(e) {
  const t = e === void 0 ? H2 : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const r = localStorage.getItem(t);
      return r === "light" || r === "dark" || r === "system" ? r : void 0;
    } catch {
      return;
    }
}
function m8(e, t) {
  const r = e === void 0 ? H2 : e;
  if (!(r === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(r, t);
    } catch {
    }
}
function Bm({
  value: e,
  defaultValue: t,
  storageKey: r,
  onChange: l,
  label: s = "Dark mode",
  id: c,
  className: d,
  size: o
}) {
  const a = A2("(prefers-color-scheme: dark)"), [i, u] = W(void 0), h = e !== void 0, x = e ?? i ?? p8(r) ?? t ?? "system", b = x === "system" ? a ? "dark" : "light" : x;
  return v1(() => {
    if (!h) {
      if (x === "system") {
        delete document.documentElement.dataset.theme;
        return;
      }
      document.documentElement.dataset.theme = x;
    }
  }, [x, h]), /* @__PURE__ */ n(
    f8,
    {
      id: c,
      size: o,
      className: d,
      "aria-label": s,
      variant: "text",
      severity: "base",
      pressed: b === "dark",
      onChange: (m) => {
        const _ = m ? "dark" : "light";
        h || (u(_), m8(r, _)), l?.(_);
      },
      toggleContent: /* @__PURE__ */ n(M1, { name: "sun", size: o ?? "md" }),
      children: /* @__PURE__ */ n(M1, { name: "moon", size: o ?? "md" })
    }
  );
}
function _8(e) {
  const t = new TextEncoder().encode(e), r = t.length * 8, l = ((t.length + 8 >> 6) + 1) * 64, s = new Uint8Array(l);
  s.set(t), s[t.length] = 128;
  const c = new DataView(s.buffer);
  c.setUint32(l - 8, r >>> 0, !0), c.setUint32(l - 4, Math.floor(r / 4294967296), !0);
  const d = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21], o = Array.from(
    { length: 64 },
    (m, _) => Math.floor(Math.abs(Math.sin(_ + 1)) * 4294967296)
  ), a = (m, _) => m + _ | 0, i = (m, _) => m << _ | m >>> 32 - _;
  let u = 1732584193, h = 4023233417, x = 2562383102, b = 271733878;
  for (let m = 0; m < l; m += 64) {
    const _ = [];
    for (let v = 0; v < 16; v += 1)
      _.push(c.getUint32(m + v * 4, !0));
    let p = u, f = h, g = x, M = b;
    for (let v = 0; v < 64; v += 1) {
      let w, C;
      v < 16 ? (w = f & g | ~f & M, C = v) : v < 32 ? (w = M & f | ~M & g, C = (5 * v + 1) % 16) : v < 48 ? (w = f ^ g ^ M, C = (3 * v + 5) % 16) : (w = g ^ (f | ~M), C = 7 * v % 16), w = a(a(a(w, p), o[v]), _[C]), p = M, M = g, g = f, f = a(f, i(w, d[Math.floor(v / 16) * 4 + v % 4]));
    }
    u = a(u, p), h = a(h, f), x = a(x, g), b = a(b, M);
  }
  const k = (m) => {
    let _ = "";
    for (let p = 0; p < 4; p += 1)
      _ += `0${(m >>> p * 8 & 255).toString(16)}`.slice(-2);
    return _;
  };
  return k(u) + k(h) + k(x) + k(b);
}
const v8 = "_avatar_1mhfr_1", g8 = "_xs_1mhfr_12", k8 = "_sm_1mhfr_18", y8 = "_md_1mhfr_24", x8 = "_lg_1mhfr_30", b8 = "_xl_1mhfr_36", M8 = "_initials_1mhfr_42", C8 = "_image_1mhfr_57", w8 = "_status_1mhfr_64", z8 = "_online_1mhfr_84", L8 = "_offline_1mhfr_88", $8 = "_away_1mhfr_92", N0 = {
  avatar: v8,
  xs: g8,
  sm: k8,
  md: y8,
  lg: x8,
  xl: b8,
  initials: M8,
  image: C8,
  status: w8,
  online: z8,
  offline: L8,
  away: $8
}, N8 = {
  xs: 20,
  sm: 28,
  md: 36,
  lg: 44,
  xl: 52
}, mt = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function O8(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function S8(e) {
  let t = 0;
  for (let r = 0; r < e.length; r += 1)
    t = t * 31 + e.charCodeAt(r) >>> 0;
  return mt[t % mt.length] ?? mt[0];
}
function Rm({
  name: e,
  src: t,
  email: r,
  gravatarDefault: l = "retro",
  gravatarRating: s = "g",
  alt: c,
  size: d = "md",
  status: o,
  className: a
}) {
  const i = g1(() => e ? O8(e) : "?", [e]), u = g1(() => e ? S8(e) : mt[0], [e]), h = g1(() => {
    if (t != null || r == null) return;
    const M = r.trim().toLowerCase();
    return M === "" ? void 0 : `https://secure.gravatar.com/avatar/${_8(M)}?d=${l}&s=${N8[d]}&r=${s}`;
  }, [t, r, l, s, d]), x = t ?? h, [b, k] = W(null), m = x != null && b !== x, _ = m && c === "", p = c ?? e ?? "avatar", f = o ? `${p}, ${o}` : p, g = m ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ n(
      "img",
      {
        className: N0.image,
        src: x,
        alt: _ ? "" : o ? f : p,
        onError: () => k(x ?? null)
      }
    )
  ) : /* @__PURE__ */ n(
    "span",
    {
      "aria-hidden": "true",
      className: N0.initials,
      style: { background: u },
      children: i
    }
  );
  return /* @__PURE__ */ L(
    "span",
    {
      className: [
        N0.avatar,
        N0[d],
        o ? N0[o] : null,
        a
      ].filter(Boolean).join(" "),
      role: m ? void 0 : "img",
      "aria-label": m ? void 0 : f,
      children: [
        g,
        o && /* @__PURE__ */ n("span", { className: N0.status, "aria-hidden": "true" })
      ]
    }
  );
}
const A8 = "_root_zzwfz_1", H8 = "_left_zzwfz_6", j8 = "_right_zzwfz_7", T8 = "_panel_zzwfz_12", V8 = "_bottom_zzwfz_20", D8 = "_tabList_zzwfz_24", E8 = "_underline_zzwfz_53", I8 = "_pills_zzwfz_72", q8 = "_tab_zzwfz_24", P8 = "_active_zzwfz_113", B8 = "_disabled_zzwfz_139", Qe = {
  root: A8,
  left: H8,
  right: j8,
  panel: T8,
  bottom: V8,
  tabList: D8,
  underline: E8,
  pills: I8,
  tab: q8,
  active: P8,
  disabled: B8
};
function Fm({
  items: e,
  value: t,
  defaultValue: r,
  onChange: l,
  variant: s = "underline",
  position: c = "top",
  className: d
}) {
  const o = E1(), a = Q(null), [i, u] = W(
    r ?? e[0]?.key ?? ""
  ), h = t ?? i, x = c === "left" || c === "right", b = (_) => {
    u(_), l?.(_);
  }, k = (_) => {
    const p = e.filter((M) => !M.disabled), f = p.findIndex((M) => M.key === h);
    let g = -1;
    _.key === "ArrowRight" || x && _.key === "ArrowDown" ? g = (f + 1) % p.length : _.key === "ArrowLeft" || x && _.key === "ArrowUp" ? g = (f - 1 + p.length) % p.length : _.key === "Home" ? g = 0 : _.key === "End" && (g = p.length - 1), g >= 0 && (_.preventDefault(), a.current?.querySelector(
      `[data-tab-key="${CSS.escape(p[g]?.key ?? "")}"]`
    )?.focus(), b(p[g]?.key ?? ""));
  }, m = e.find((_) => _.key === h);
  return /* @__PURE__ */ L(
    "div",
    {
      className: [Qe.root, Qe[c], d].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ n(
          "div",
          {
            ref: a,
            role: "tablist",
            className: [Qe.tabList, Qe[s], Qe[c]].filter(Boolean).join(" "),
            onKeyDown: k,
            children: e.map((_) => {
              const p = _.key === h;
              return /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  role: "tab",
                  id: `${o}-tab-${_.key}`,
                  "data-tab-key": _.key,
                  "aria-selected": p,
                  "aria-controls": `${o}-panel-${_.key}`,
                  tabIndex: p ? 0 : -1,
                  disabled: _.disabled,
                  className: [
                    Qe.tab,
                    p ? Qe.active : null,
                    _.disabled ? Qe.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => b(_.key),
                  children: _.label
                },
                _.key
              );
            })
          }
        ),
        m && /* @__PURE__ */ n(
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
const R8 = "_root_1l1j2_1", F8 = "_item_1l1j2_9", K8 = "_heading_1l1j2_13", W8 = "_trigger_1l1j2_17", Z8 = "_disabled_1l1j2_34", U8 = "_title_1l1j2_48", G8 = "_chevron_1l1j2_52", X8 = "_open_1l1j2_59", Y8 = "_content_1l1j2_63", e0 = {
  root: R8,
  item: F8,
  heading: K8,
  trigger: W8,
  disabled: Z8,
  title: U8,
  chevron: G8,
  open: X8,
  content: Y8
};
function Km({
  items: e,
  multiple: t = !1,
  value: r,
  defaultValue: l,
  onChange: s,
  className: c
}) {
  const d = E1(), [o, a] = W(
    l ?? []
  ), i = r ?? o, u = (h) => {
    const x = i.includes(h) ? i.filter((b) => b !== h) : t ? [...i, h] : [h];
    a(x), s?.(x);
  };
  return /* @__PURE__ */ n("div", { className: [e0.root, c].filter(Boolean).join(" "), children: e.map((h) => {
    const x = i.includes(h.key), b = `${d}-panel-${h.key}`, k = `${d}-trigger-${h.key}`;
    return /* @__PURE__ */ L("div", { className: e0.item, children: [
      /* @__PURE__ */ n("h3", { className: e0.heading, children: /* @__PURE__ */ L(
        "button",
        {
          type: "button",
          id: k,
          "aria-expanded": x,
          "aria-controls": b,
          disabled: h.disabled,
          className: [
            e0.trigger,
            h.disabled ? e0.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => u(h.key),
          children: [
            /* @__PURE__ */ n("span", { className: e0.title, children: h.title }),
            /* @__PURE__ */ n(
              "span",
              {
                className: [e0.chevron, x ? e0.open : null].filter(Boolean).join(" "),
                "aria-hidden": "true",
                children: /* @__PURE__ */ n(M1, { name: "chevron-down", size: 12 })
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
          "aria-labelledby": k,
          hidden: !x,
          className: e0.content,
          children: h.content
        }
      )
    ] }, h.key);
  }) });
}
const J8 = "_textarea_l7fsl_1", Q8 = "_invalid_l7fsl_27", e7 = "_xs_l7fsl_34", t7 = "_sm_l7fsl_39", r7 = "_md_l7fsl_44", n7 = "_lg_l7fsl_49", l7 = "_xl_l7fsl_54", it = {
  textarea: J8,
  invalid: Q8,
  xs: e7,
  sm: t7,
  md: r7,
  lg: n7,
  xl: l7,
  "resize-none": "_resize-none_l7fsl_59",
  "resize-vertical": "_resize-vertical_l7fsl_63",
  "resize-horizontal": "_resize-horizontal_l7fsl_67",
  "resize-both": "_resize-both_l7fsl_71"
}, Wm = I1(
  function({ size: t = "md", resize: r = "none", invalid: l = !1, className: s, ...c }, d) {
    return /* @__PURE__ */ n(
      "textarea",
      {
        ref: d,
        "data-size": t,
        className: [
          it.textarea,
          it[t],
          it[`resize-${r}`],
          l ? it.invalid : null,
          s
        ].filter(Boolean).join(" "),
        "aria-invalid": l || void 0,
        ...c
      }
    );
  }
), o7 = "_root_xyp2i_1", a7 = "_trigger_xyp2i_9", s7 = "_invalid_xyp2i_40", c7 = "_placeholder_xyp2i_47", i7 = "_label_xyp2i_54", d7 = "_chevron_xyp2i_60", u7 = "_chevronOpen_xyp2i_70", h7 = "_menu_xyp2i_74", f7 = "_option_xyp2i_89", p7 = "_disabled_xyp2i_100", m7 = "_active_xyp2i_104", _7 = "_selected_xyp2i_105", v7 = "_header_xyp2i_115", g7 = "_xs_xyp2i_122", k7 = "_sm_xyp2i_128", y7 = "_md_xyp2i_134", x7 = "_lg_xyp2i_140", b7 = "_xl_xyp2i_146", me = {
  root: o7,
  trigger: a7,
  invalid: s7,
  placeholder: c7,
  label: i7,
  chevron: d7,
  chevronOpen: u7,
  menu: h7,
  option: f7,
  disabled: p7,
  active: m7,
  selected: _7,
  header: v7,
  xs: g7,
  sm: k7,
  md: y7,
  lg: x7,
  xl: b7
}, M7 = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function Zm({
  options: e = [],
  value: t,
  defaultValue: r,
  onChange: l,
  placeholder: s = "Select…",
  size: c = "md",
  invalid: d = !1,
  disabled: o = !1,
  className: a,
  ...i
}) {
  const u = E1(), h = `${u}-listbox`, x = Q(null), b = Q(null), [k, m] = W(
    r
  ), [_, p] = W(!1), f = t ?? k, g = e.map(
    (y, N) => y.label === "" || y.disabled ? -1 : N
  ).filter((y) => y >= 0), M = e.findIndex(
    (y) => y.value === f
  ), [v, w] = W(
    () => g.includes(0) ? 0 : g[0] ?? -1
  ), C = I(() => {
    if (o) return;
    const y = M >= 0 && g.includes(M) ? M : g[0];
    w(y ?? -1), p(!0);
  }, [o, M, g]), z = I(() => {
    p(!1), b.current?.focus();
  }, []);
  v1(() => {
    if (!_) return;
    const y = (N) => {
      x.current && !x.current.contains(N.target) && p(!1);
    };
    return document.addEventListener("mousedown", y), () => document.removeEventListener("mousedown", y);
  }, [_]);
  const A = (y) => {
    m(y), l?.(y), p(!1), b.current?.focus();
  }, S = (y) => {
    if (g.length === 0) return;
    const N = g.includes(v) ? g.indexOf(v) : 0, T = g[(N + y + g.length) % g.length];
    T != null && w(T);
  }, O = (y) => {
    if (!_) {
      y.key === "ArrowDown" && (y.preventDefault(), C());
      return;
    }
    switch (y.key) {
      case "ArrowDown":
        y.preventDefault(), S(1);
        break;
      case "ArrowUp":
        y.preventDefault(), S(-1);
        break;
      case "Home":
        y.preventDefault(), g[0] != null && w(g[0]);
        break;
      case "End":
        y.preventDefault(), g[g.length - 1] != null && w(g[g.length - 1]);
        break;
      case "Enter":
      case " ":
        y.preventDefault(), v >= 0 && e[v] && g.includes(v) && A(e[v]?.value ?? "");
        break;
      case "Escape":
        y.preventDefault(), z();
        break;
      case "Tab":
        p(!1);
        break;
    }
  }, $ = e.find(
    (y) => y.value === f
  );
  return /* @__PURE__ */ L(
    "div",
    {
      ref: x,
      className: [me.root, a].filter(Boolean).join(" "),
      onKeyDown: O,
      children: [
        /* @__PURE__ */ L(
          "button",
          {
            ref: b,
            type: "button",
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-expanded": _,
            "aria-controls": h,
            "aria-invalid": d || void 0,
            disabled: o,
            className: [
              me.trigger,
              me[c],
              _ ? me.open : null,
              d ? me.invalid : null
            ].filter(Boolean).join(" "),
            onClick: () => _ ? p(!1) : C(),
            ...i,
            children: [
              /* @__PURE__ */ n("span", { className: $ ? me.label : me.placeholder, children: $ ? $.label : s }),
              /* @__PURE__ */ n(
                "span",
                {
                  className: [me.chevron, _ ? me.chevronOpen : null].filter(Boolean).join(" "),
                  style: { backgroundImage: M7 },
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ),
        _ && /* @__PURE__ */ n(
          "div",
          {
            id: h,
            role: "listbox",
            "aria-activedescendant": v >= 0 ? `${u}-option-${v}` : void 0,
            className: me.menu,
            children: e.map(
              (y, N) => y.label === "" ? /* @__PURE__ */ n(
                "div",
                {
                  className: me.header,
                  role: "presentation",
                  children: y.value
                },
                y.value
              ) : /* @__PURE__ */ n(
                "div",
                {
                  id: `${u}-option-${N}`,
                  role: "option",
                  "aria-selected": y.value === f,
                  "aria-disabled": y.disabled || void 0,
                  className: [
                    me.option,
                    N === v ? me.active : null,
                    y.value === f ? me.selected : null,
                    y.disabled ? me.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    y.disabled || A(y.value);
                  },
                  onMouseEnter: () => {
                    !y.disabled && y.label !== "" && w(N);
                  },
                  children: y.label
                },
                y.value
              )
            )
          }
        )
      ]
    }
  );
}
const C7 = "_root_1ma8a_1", w7 = "_wrap_1ma8a_9", z7 = "_input_1ma8a_26", L7 = "_invalid_1ma8a_31", $7 = "_clear_1ma8a_58", N7 = "_menu_1ma8a_83", O7 = "_option_1ma8a_98", S7 = "_disabled_1ma8a_109", A7 = "_active_1ma8a_113", H7 = "_empty_1ma8a_123", j7 = "_xs_1ma8a_129", T7 = "_sm_1ma8a_136", V7 = "_md_1ma8a_143", D7 = "_lg_1ma8a_150", E7 = "_xl_1ma8a_157", He = {
  root: C7,
  wrap: w7,
  input: z7,
  invalid: L7,
  clear: $7,
  menu: N7,
  option: O7,
  disabled: S7,
  active: A7,
  empty: H7,
  xs: j7,
  sm: T7,
  md: V7,
  lg: D7,
  xl: E7
}, I7 = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function Um({
  options: e = [],
  value: t,
  defaultValue: r = "",
  onChange: l,
  onSelect: s,
  placeholder: c = "",
  size: d = "md",
  invalid: o = !1,
  disabled: a = !1,
  filter: i = I7,
  className: u,
  ...h
}) {
  const x = E1(), b = `${x}-listbox`, k = Q(null), m = Q(null), [_, p] = W(r), [f, g] = W(!1), M = t ?? _, v = g1(
    () => M.trim() === "" ? [...e] : e.filter((j) => i(j, M)),
    [e, M, i]
  ), w = v.map((j, P) => j.disabled ? -1 : P).filter((j) => j >= 0), [C, z] = W(-1), A = (j) => {
    p(j), l?.(j);
  }, S = (j) => {
    A(j.label), s?.(j.value, j), g(!1);
  }, O = (j) => {
    if (w.length === 0) return;
    const P = w.includes(C) ? w.indexOf(C) : j === 1 ? -1 : 0, E = w[(P + j + w.length) % w.length];
    E != null && z(E);
  }, $ = (j) => {
    a || (A(j.target.value), g(!0), z(-1));
  }, y = () => {
    a || M !== "" && g(!0);
  }, N = (j) => {
    k.current && !k.current.contains(j.relatedTarget) && g(!1);
  }, T = (j) => {
    if (!a)
      switch (j.key) {
        case "ArrowDown":
          j.preventDefault(), f ? O(1) : (g(!0), z(w[0] ?? -1));
          break;
        case "ArrowUp":
          j.preventDefault(), f && O(-1);
          break;
        case "Enter":
          j.preventDefault(), f && C >= 0 && v[C] && S(v[C]);
          break;
        case "Escape":
          j.preventDefault(), g(!1);
          break;
        case "Tab":
          f && C >= 0 && v[C] && S(v[C]), g(!1);
          break;
      }
  }, V = () => {
    A(""), z(-1), g(!0), m.current?.focus();
  };
  return /* @__PURE__ */ L(
    "div",
    {
      ref: k,
      className: [He.root, u].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ L(
          "div",
          {
            className: [He.wrap, He[d], o ? He.invalid : null].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ n(
                "input",
                {
                  ref: m,
                  type: "text",
                  role: "combobox",
                  "aria-expanded": f,
                  "aria-controls": b,
                  "aria-autocomplete": "list",
                  "aria-activedescendant": f && C >= 0 ? `${x}-option-${C}` : void 0,
                  "aria-invalid": o || void 0,
                  disabled: a,
                  value: M,
                  placeholder: c,
                  className: He.input,
                  onChange: $,
                  onFocus: y,
                  onBlur: N,
                  onKeyDown: T,
                  ...h
                }
              ),
              M !== "" && !a && /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: He.clear,
                  "aria-label": "Clear",
                  onClick: V,
                  children: /* @__PURE__ */ n(M1, { name: "close", size: "sm" })
                }
              )
            ]
          }
        ),
        f && (v.length === 0 ? (
          // No options → no listbox: an empty role="listbox" fails axe
          // aria-required-children either way (bare text child or no
          // children at all), so the empty state renders without the role.
          /* @__PURE__ */ n("div", { id: b, className: He.menu, children: /* @__PURE__ */ n("div", { className: He.empty, children: "No matches" }) })
        ) : /* @__PURE__ */ n("div", { id: b, role: "listbox", className: He.menu, children: v.map((j, P) => /* @__PURE__ */ n(
          "div",
          {
            id: `${x}-option-${P}`,
            role: "option",
            "aria-selected": !1,
            "aria-disabled": j.disabled || void 0,
            className: [
              He.option,
              P === C ? He.active : null,
              j.disabled ? He.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => {
              j.disabled || S(j);
            },
            onMouseDown: (E) => {
              E.preventDefault(), j.disabled || S(j);
            },
            onMouseEnter: () => {
              j.disabled || z(P);
            },
            children: j.label
          },
          j.value
        )) }))
      ]
    }
  );
}
const q7 = "_box_muvqe_1", P7 = "_option_muvqe_12", B7 = "_disabled_muvqe_23", R7 = "_selected_muvqe_27", F7 = "_active_muvqe_33", U0 = {
  box: q7,
  option: P7,
  disabled: B7,
  selected: R7,
  active: F7
};
function Gm({
  options: e = [],
  value: t,
  defaultValue: r,
  multiple: l = !1,
  onChange: s,
  className: c,
  style: d,
  ...o
}) {
  const a = E1(), [i, u] = W(() => {
    const v = r;
    return v == null ? [] : Array.isArray(v) ? [...v] : [v];
  }), h = t == null ? i : Array.isArray(t) ? t : [t], x = e.findIndex((v) => !v.disabled), [b, k] = W(
    () => x >= 0 ? x : 0
  ), m = Q(""), _ = Q(null), p = (v) => {
    u(v), s?.(l ? v : v[0] ?? "");
  }, f = e.map((v, w) => v.disabled ? -1 : w).filter((v) => v >= 0), g = (v) => {
    const w = e[v];
    if (!(!w || w.disabled))
      if (k(v), l) {
        const C = h.includes(w.value) ? h.filter((z) => z !== w.value) : [...h, w.value];
        p(C);
      } else
        p([w.value]);
  }, M = (v) => {
    if (f.length === 0) return;
    const w = f.includes(b) ? b : f[0];
    let C = -1;
    if (v.key === "ArrowDown")
      C = f[(f.indexOf(w) + 1) % f.length];
    else if (v.key === "ArrowUp")
      C = f[(f.indexOf(w) - 1 + f.length) % f.length];
    else if (v.key === "Home")
      C = f[0];
    else if (v.key === "End")
      C = f[f.length - 1];
    else if (v.key === "Enter" || v.key === " ") {
      v.preventDefault(), g(w);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(v.key)) {
      v.preventDefault();
      const z = (m.current + v.key).toLowerCase();
      m.current = z, _.current && clearTimeout(_.current), _.current = setTimeout(() => {
        m.current = "";
      }, 500);
      const A = [...f, ...f], S = f.indexOf(w) + 1, O = A.slice(S).find(($) => e[$]?.label.toLowerCase().startsWith(z));
      O != null && k(O);
      return;
    }
    C >= 0 && (v.preventDefault(), k(C), l || p([e[C]?.value ?? ""]));
  };
  return /* @__PURE__ */ n(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": l || void 0,
      "aria-activedescendant": e[b] ? `${a}-option-${b}` : void 0,
      style: d,
      className: [U0.box, c].filter(Boolean).join(" "),
      onKeyDown: M,
      ...o,
      children: e.map((v, w) => {
        const C = h.includes(v.value), z = w === b;
        return /* @__PURE__ */ n(
          "div",
          {
            id: `${a}-option-${w}`,
            role: "option",
            "aria-selected": C,
            "aria-disabled": v.disabled || void 0,
            className: [
              U0.option,
              C ? U0.selected : null,
              z ? U0.active : null,
              v.disabled ? U0.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => g(w),
            children: v.label
          },
          v.value
        );
      })
    }
  );
}
const K7 = "_group_oinj7_1", W7 = "_legend_oinj7_8", Z7 = "_list_oinj7_16", U7 = "_item_oinj7_25", G7 = "_disabled_oinj7_32", X7 = "_label_oinj7_37", Y7 = "_checkbox_oinj7_48", k0 = {
  group: K7,
  legend: W7,
  list: Z7,
  item: U7,
  disabled: G7,
  label: X7,
  checkbox: Y7
};
function Xm({
  options: e = [],
  value: t,
  defaultValue: r = [],
  onChange: l,
  legend: s,
  name: c,
  className: d
}) {
  const [o, a] = W(() => [
    ...r
  ]), i = t ?? o, u = (h, x) => {
    const b = x ? [...i, h] : i.filter((k) => k !== h);
    a(b), l?.(b);
  };
  return /* @__PURE__ */ L("fieldset", { className: [k0.group, d].filter(Boolean).join(" "), children: [
    s != null && /* @__PURE__ */ n("legend", { className: k0.legend, children: s }),
    /* @__PURE__ */ n("ul", { className: k0.list, children: e.map((h) => {
      const x = i.includes(h.value);
      return /* @__PURE__ */ n(
        "li",
        {
          className: [k0.item, h.disabled ? k0.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ L("label", { className: k0.label, children: [
            /* @__PURE__ */ n(
              "input",
              {
                type: "checkbox",
                className: k0.checkbox,
                name: c,
                value: h.value,
                checked: x,
                disabled: h.disabled,
                onChange: (b) => u(h.value, b.target.checked)
              }
            ),
            /* @__PURE__ */ n("span", { children: h.label })
          ] })
        },
        h.value
      );
    }) })
  ] });
}
const J7 = "_group_46668_1", Q7 = "_legend_46668_8", ed = "_list_46668_16", td = "_item_46668_25", rd = "_disabled_46668_32", nd = "_label_46668_37", ld = "_radio_46668_48", y0 = {
  group: J7,
  legend: Q7,
  list: ed,
  item: td,
  disabled: rd,
  label: nd,
  radio: ld
};
function Ym({
  options: e = [],
  value: t,
  defaultValue: r,
  onChange: l,
  legend: s,
  name: c,
  className: d
}) {
  const [o, a] = W(
    r
  ), i = t ?? o, u = (h) => {
    a(h), l?.(h);
  };
  return /* @__PURE__ */ L("fieldset", { className: [y0.group, d].filter(Boolean).join(" "), children: [
    s != null && /* @__PURE__ */ n("legend", { className: y0.legend, children: s }),
    /* @__PURE__ */ n("ul", { className: y0.list, children: e.map((h) => {
      const x = h.value === i;
      return /* @__PURE__ */ n(
        "li",
        {
          className: [y0.item, h.disabled ? y0.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ L("label", { className: y0.label, children: [
            /* @__PURE__ */ n(
              "input",
              {
                type: "radio",
                className: y0.radio,
                name: c,
                value: h.value,
                checked: x,
                disabled: h.disabled,
                onChange: (b) => u(b.target.value)
              }
            ),
            /* @__PURE__ */ n("span", { children: h.label })
          ] })
        },
        h.value
      );
    }) })
  ] });
}
const od = "_bar_9zyxn_1", ad = "_vertical_9zyxn_12", sd = "_option_9zyxn_17", cd = "_selected_9zyxn_40", id = "_sm_9zyxn_56", dd = "_md_9zyxn_62", ud = "_lg_9zyxn_68", O0 = {
  bar: od,
  vertical: ad,
  option: sd,
  selected: cd,
  sm: id,
  md: dd,
  lg: ud
};
function s2(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Jm(e) {
  const {
    options: t = [],
    value: r,
    defaultValue: l,
    multiple: s,
    orientation: c = "horizontal",
    onChange: d,
    size: o = "md",
    className: a,
    ...i
  } = e, u = s ?? !1, [h, x] = W(l ?? (u ? [] : t[0]?.value)), b = r ?? h, k = s === !0 || s === void 0 && Array.isArray(b), m = (p) => {
    if (!k) {
      x(p), d?.(p);
      return;
    }
    const f = s2(b), g = f.includes(p) ? f.filter((M) => M !== p) : [...f, p];
    x(g), d?.(g);
  }, _ = (p) => k ? s2(b).includes(p) : b === p;
  return /* @__PURE__ */ n(
    "div",
    {
      role: "group",
      className: [
        O0.bar,
        O0[o],
        c === "vertical" ? O0.vertical : null,
        a
      ].filter(Boolean).join(" "),
      ...i,
      children: t.map((p) => {
        const f = _(p.value);
        return /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            "aria-pressed": f,
            disabled: p.disabled,
            className: [
              O0.option,
              f ? O0.selected : null,
              p.disabled ? O0.disabled : null
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
const hd = "_root_11hdr_1", fd = "_action_11hdr_10", pd = "_caret_11hdr_15", md = "_sm_11hdr_49", _d = "_md_11hdr_53", vd = "_lg_11hdr_57", gd = "_fullWidth_11hdr_62", kd = "_menu_11hdr_70", yd = "_item_11hdr_83", xd = "_itemIcon_11hdr_105", bd = "_disabled_11hdr_110", Md = "_active_11hdr_114", Cd = "_danger_11hdr_123", Ee = {
  root: hd,
  action: fd,
  caret: pd,
  sm: md,
  md: _d,
  lg: vd,
  fullWidth: gd,
  menu: kd,
  item: yd,
  itemIcon: xd,
  disabled: bd,
  active: Md,
  danger: Cd
}, Qm = I1(
  function({
    label: t,
    onClick: r,
    items: l = [],
    severity: s = "primary",
    variant: c = "filled",
    shade: d = "default",
    size: o = "md",
    loading: a = !1,
    visible: i = !0,
    fullWidth: u = !1,
    disabled: h = !1,
    className: x,
    "aria-label": b,
    openAriaLabel: k = "More actions",
    ...m
  }, _) {
    const f = `${E1()}-menu`, g = Q(null), M = Q(null), v = Q([]), [w, C] = W(!1), [z, A] = W(-1), S = h || a, O = g1(
      () => l.map((E, Z) => E.disabled ? -1 : Z).filter((E) => E >= 0),
      [l]
    ), $ = I(() => {
      S || (A(O[0] ?? -1), C(!0));
    }, [S, O]), y = I(() => {
      C(!1), M.current?.focus();
    }, []);
    v1(() => {
      if (!w) return;
      const E = (Z) => {
        g.current && !g.current.contains(Z.target) && C(!1);
      };
      return document.addEventListener("mousedown", E), () => document.removeEventListener("mousedown", E);
    }, [w]), v1(() => {
      w && (S || !i) && C(!1);
    }, [w, S, i]);
    const N = Q(w);
    if (v1(() => {
      const E = N.current;
      if (N.current = w, !w || E) return;
      const Z = O.includes(z) ? z : O[0] ?? -1;
      Z >= 0 && v.current[Z]?.focus();
    }, [w, z, O]), i === !1) return null;
    const T = (E) => {
      const Z = l[E];
      !Z || Z.disabled || (Z.onClick?.(), C(!1), M.current?.focus());
    }, V = (E) => {
      if (O.length === 0) return;
      const Z = O.includes(z) ? O.indexOf(z) : E === 1 ? -1 : 0, e1 = O[(Z + E + O.length) % O.length];
      e1 != null && (A(e1), v.current[e1]?.focus());
    }, j = (E) => {
      const Z = E === "first" ? O[0] : O[O.length - 1];
      Z != null && (A(Z), v.current[Z]?.focus());
    }, P = (E) => {
      switch (E.key) {
        case "ArrowDown":
          E.preventDefault(), V(1);
          break;
        case "ArrowUp":
          E.preventDefault(), V(-1);
          break;
        case "Home":
          E.preventDefault(), j("first");
          break;
        case "End":
          E.preventDefault(), j("last");
          break;
        case "Escape":
          E.preventDefault(), y();
          break;
        case "Tab":
          C(!1);
          break;
      }
    };
    return /* @__PURE__ */ L(
      "div",
      {
        ref: (E) => {
          g.current = E, typeof _ == "function" ? _(E) : _ && (_.current = E);
        },
        className: [
          Ee.root,
          Ee[o],
          u ? Ee.fullWidth : null,
          x
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ n(
            V0,
            {
              className: Ee.action,
              variant: c,
              severity: s,
              shade: d,
              size: o,
              loading: a,
              disabled: h,
              "aria-label": b,
              onClick: () => {
                w && C(!1), r?.();
              },
              children: t
            }
          ),
          /* @__PURE__ */ n(
            V0,
            {
              ref: M,
              className: Ee.caret,
              variant: c,
              severity: s,
              shade: d,
              size: o,
              disabled: S,
              "aria-haspopup": "menu",
              "aria-expanded": w,
              "aria-controls": f,
              "aria-label": k,
              onClick: () => w ? C(!1) : $(),
              onKeyDown: (E) => {
                !w && (E.key === "ArrowDown" || E.key === "ArrowUp") && (E.preventDefault(), $());
              },
              children: /* @__PURE__ */ n(M1, { name: "chevron-down", "aria-hidden": "true" })
            }
          ),
          w && /* @__PURE__ */ n(
            "div",
            {
              id: f,
              role: "menu",
              tabIndex: -1,
              "aria-label": k,
              className: Ee.menu,
              onKeyDown: P,
              ...m,
              children: l.map((E, Z) => /* @__PURE__ */ L(
                "button",
                {
                  ref: (e1) => {
                    v.current[Z] = e1;
                  },
                  type: "button",
                  role: "menuitem",
                  tabIndex: Z === z ? 0 : -1,
                  disabled: E.disabled,
                  className: [
                    Ee.item,
                    Z === z ? Ee.active : null,
                    E.danger ? Ee.danger : null,
                    E.disabled ? Ee.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => T(Z),
                  onMouseEnter: () => {
                    E.disabled || A(Z);
                  },
                  children: [
                    E.icon ? /* @__PURE__ */ n("span", { className: Ee.itemIcon, "aria-hidden": "true", children: /* @__PURE__ */ n(M1, { name: E.icon, size: 16 }) }) : null,
                    E.label
                  ]
                },
                E.key
              ))
            }
          )
        ]
      }
    );
  }
), wd = "_wrapper_1ulz6_1", zd = "_input_1ulz6_8", Ld = "_invalid_1ulz6_38", $d = "_toggle_1ulz6_45", Nd = "_xs_1ulz6_80", Od = "_sm_1ulz6_86", Sd = "_md_1ulz6_92", Ad = "_lg_1ulz6_98", Hd = "_xl_1ulz6_104", G0 = {
  wrapper: wd,
  input: zd,
  invalid: Ld,
  toggle: $d,
  xs: Nd,
  sm: Od,
  md: Sd,
  lg: Ad,
  xl: Hd
}, e_ = I1(
  function({
    size: t = "md",
    invalid: r = !1,
    className: l,
    disabled: s,
    showLabel: c = "Show password",
    hideLabel: d = "Hide password",
    ...o
  }, a) {
    const [i, u] = W(!1);
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ L("div", { className: G0.wrapper, "data-size": t, children: [
        /* @__PURE__ */ n(
          "input",
          {
            ref: a,
            type: i ? "text" : "password",
            disabled: s,
            className: [
              G0.input,
              G0[t],
              r ? G0.invalid : null,
              l
            ].filter(Boolean).join(" "),
            "aria-invalid": r || void 0,
            ...o
          }
        ),
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: G0.toggle,
            "aria-pressed": i,
            "aria-label": i ? d : c,
            disabled: s,
            onClick: () => u((h) => !h),
            children: /* @__PURE__ */ n(M1, { name: i ? "eye-off" : "eye", size: 16 })
          }
        )
      ] })
    );
  }
), jd = "_mask_rcv90_1", Td = "_invalid_rcv90_31", Vd = "_xs_rcv90_38", Dd = "_sm_rcv90_44", Ed = "_md_rcv90_50", Id = "_lg_rcv90_56", qd = "_xl_rcv90_62", zt = {
  mask: jd,
  invalid: Td,
  xs: Vd,
  sm: Dd,
  md: Ed,
  lg: Id,
  xl: qd
};
function c2(e, t) {
  let r = e.replace(/\D/g, ""), l = "";
  for (const s of t)
    if (s === "#") {
      if (r.length === 0) break;
      l += r[0] ?? "", r = r.slice(1);
    } else if (r.length > 0)
      l += s;
    else
      break;
  return l;
}
const t_ = I1(function({
  size: t = "md",
  invalid: r = !1,
  mask: l,
  value: s,
  defaultValue: c = "",
  onChange: d,
  className: o,
  onKeyDown: a,
  ...i
}, u) {
  const [h, x] = W(c ?? ""), b = s !== void 0, k = b ? s ?? "" : h, m = (f) => {
    const g = c2(f, l);
    return b || x(g), d?.(g), g;
  };
  return /* @__PURE__ */ n(
    "input",
    {
      ref: u,
      type: "text",
      "data-size": t,
      value: k,
      onChange: (f) => {
        m(f.target.value);
      },
      onKeyDown: (f) => {
        if (f.key === "Backspace") {
          const g = f.currentTarget.selectionStart ?? k.length, M = k[g - 1];
          if (M !== void 0 && !/\d/.test(M)) {
            f.preventDefault();
            const v = k.replace(/\D/g, "");
            m(c2(v.slice(0, -1), l));
          }
        }
        a?.(f);
      },
      className: [
        zt.mask,
        zt[t],
        r ? zt.invalid : null,
        o
      ].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...i
    }
  );
}), Pd = "_wrapper_12jdf_1", Bd = "_input_12jdf_8", Rd = "_invalid_12jdf_38", Fd = "_button_12jdf_45", Kd = "_up_12jdf_77", Wd = "_down_12jdf_82", Zd = "_xs_12jdf_87", Ud = "_sm_12jdf_93", Gd = "_md_12jdf_99", Xd = "_lg_12jdf_105", Yd = "_xl_12jdf_111", d0 = {
  wrapper: Pd,
  input: Bd,
  invalid: Rd,
  button: Fd,
  up: Kd,
  down: Wd,
  xs: Zd,
  sm: Ud,
  md: Gd,
  lg: Xd,
  xl: Yd
};
function St(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function Jd(e) {
  let t = "", r = !1;
  for (const l of e)
    l >= "0" && l <= "9" ? t += l : l === "." && !r ? (r = !0, t += l) : l === "-" && t.length === 0 && (t += l);
  return t;
}
function j2(e, t, r) {
  return Math.min(r ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function Qd(e, t, r) {
  return t === void 0 ? e : t + Math.round((e - t) / r) * r;
}
function e9(e, t, r, l, s) {
  const d = St(e) ?? r ?? 0;
  let o;
  return r === void 0 ? o = d + t * s : t > 0 ? o = r + Math.ceil((d - r + 1e-9) / s) * s : o = r + Math.floor((d - r - 1e-9) / s) * s, j2(o, r, l);
}
const r_ = I1(
  function({
    size: t = "md",
    invalid: r = !1,
    className: l,
    disabled: s,
    value: c,
    defaultValue: d,
    onChange: o,
    min: a,
    max: i,
    step: u = 1,
    incrementLabel: h = "Increment",
    decrementLabel: x = "Decrement",
    onBlur: b,
    onKeyDown: k,
    ...m
  }, _) {
    const [p, f] = W(
      d != null ? String(d) : ""
    ), g = c !== void 0, M = g ? c == null ? "" : String(c) : p, v = (O) => {
      g || f(O), o?.(St(O));
    }, w = (O) => {
      g || f(String(O)), o?.(O);
    }, C = (O) => {
      s || w(e9(M, O, a, i, u));
    }, z = (O) => {
      v(Jd(O.target.value));
    }, A = (O) => {
      O.key === "ArrowUp" ? (O.preventDefault(), C(1)) : O.key === "ArrowDown" && (O.preventDefault(), C(-1)), k?.(O);
    }, S = (O) => {
      const $ = St(M);
      $ === null ? (g || f(""), o?.(null)) : w(j2(Qd($, a, u), a, i)), b?.(O);
    };
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ L("div", { className: d0.wrapper, "data-size": t, children: [
        /* @__PURE__ */ n(
          "input",
          {
            ref: _,
            type: "text",
            inputMode: "decimal",
            autoComplete: "off",
            value: M,
            disabled: s,
            onChange: z,
            onKeyDown: A,
            onBlur: S,
            className: [
              d0.input,
              d0[t],
              r ? d0.invalid : null,
              l
            ].filter(Boolean).join(" "),
            "aria-invalid": r || void 0,
            ...m
          }
        ),
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: [d0.button, d0.up].join(" "),
            "aria-label": h,
            disabled: s,
            onClick: () => C(1),
            children: /* @__PURE__ */ n(M1, { name: "chevron-up", size: 14 })
          }
        ),
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: [d0.button, d0.down].join(" "),
            "aria-label": x,
            disabled: s,
            onClick: () => C(-1),
            children: /* @__PURE__ */ n(M1, { name: "chevron-down", size: 14 })
          }
        )
      ] })
    );
  }
), z1 = {
  "dx-colorpicker": "_dx-colorpicker_1h5y3_1",
  "dx-colorpicker-invalid": "_dx-colorpicker-invalid_1h5y3_8",
  "dx-colorpicker-trigger": "_dx-colorpicker-trigger_1h5y3_8",
  "dx-colorpicker-trigger-xs": "_dx-colorpicker-trigger-xs_1h5y3_41",
  "dx-colorpicker-trigger-sm": "_dx-colorpicker-trigger-sm_1h5y3_47",
  "dx-colorpicker-trigger-lg": "_dx-colorpicker-trigger-lg_1h5y3_53",
  "dx-colorpicker-trigger-xl": "_dx-colorpicker-trigger-xl_1h5y3_59",
  "dx-colorpicker-value": "_dx-colorpicker-value_1h5y3_65",
  "dx-colorpicker-text": "_dx-colorpicker-text_1h5y3_96",
  "dx-colorpicker-chevron": "_dx-colorpicker-chevron_1h5y3_106",
  "dx-colorpicker-open": "_dx-colorpicker-open_1h5y3_115",
  "dx-colorpicker-popup": "_dx-colorpicker-popup_1h5y3_119",
  "dx-colorpicker-panel": "_dx-colorpicker-panel_1h5y3_133",
  "dx-saturation-picker": "_dx-saturation-picker_1h5y3_138",
  "dx-hue-picker": "_dx-hue-picker_1h5y3_149",
  "dx-alpha-picker": "_dx-alpha-picker_1h5y3_150",
  "dx-saturation-indicator": "_dx-saturation-indicator_1h5y3_155",
  "dx-hue-indicator": "_dx-hue-indicator_1h5y3_180",
  "dx-alpha-indicator": "_dx-alpha-indicator_1h5y3_204",
  "dx-colorpicker-rgba": "_dx-colorpicker-rgba_1h5y3_217",
  "dx-colorpicker-rgba-field": "_dx-colorpicker-rgba-field_1h5y3_224",
  "dx-colorpicker-rgba-label": "_dx-colorpicker-rgba-label_1h5y3_231",
  "dx-colorpicker-rgba-input": "_dx-colorpicker-rgba-input_1h5y3_236",
  "dx-colorpicker-palette": "_dx-colorpicker-palette_1h5y3_256",
  "dx-colorpicker-swatch": "_dx-colorpicker-swatch_1h5y3_263",
  "dx-colorpicker-footer": "_dx-colorpicker-footer_1h5y3_291",
  "dx-colorpicker-ok": "_dx-colorpicker-ok_1h5y3_300"
}, t9 = [
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
function Ne(e, t, r) {
  return Math.min(r, Math.max(t, e));
}
function At(e) {
  const t = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(e.trim());
  if (!t) return null;
  let r = t[1];
  return r.length === 3 && (r = r.split("").map((l) => l + l).join("")), {
    r: Number.parseInt(r.slice(0, 2), 16),
    g: Number.parseInt(r.slice(2, 4), 16),
    b: Number.parseInt(r.slice(4, 6), 16),
    a: 1
  };
}
function r9({ r: e, g: t, b: r }) {
  const l = (s) => Math.round(s).toString(16).padStart(2, "0");
  return `#${l(e)}${l(t)}${l(r)}`;
}
function n9({ r: e, g: t, b: r }) {
  const l = e / 255, s = t / 255, c = r / 255, d = Math.max(l, s, c), o = Math.min(l, s, c), a = d - o;
  let i = 0;
  return a !== 0 && (d === l ? i = (s - c) / a % 6 : d === s ? i = (c - l) / a + 2 : i = (l - s) / a + 4, i *= 60, i < 0 && (i += 360)), {
    h: i,
    s: d === 0 ? 0 : a / d,
    v: d
  };
}
function S0({ h: e, s: t, v: r }) {
  const l = r * t, s = e / 60, c = l * (1 - Math.abs(s % 2 - 1));
  let d = 0, o = 0, a = 0;
  s < 1 ? (d = l, o = c) : s < 2 ? (d = c, o = l) : s < 3 ? (o = l, a = c) : s < 4 ? (o = c, a = l) : s < 5 ? (d = c, a = l) : (d = l, a = c);
  const i = r - l;
  return {
    r: Math.round((d + i) * 255),
    g: Math.round((o + i) * 255),
    b: Math.round((a + i) * 255),
    a: 1
  };
}
function l9(e) {
  const t = At(e);
  if (t) return t;
  const r = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*([\d.]+))?\s*\)$/i.exec(
    e.trim()
  );
  return r ? {
    r: Ne(Number(r[1]), 0, 255),
    g: Ne(Number(r[2]), 0, 255),
    b: Ne(Number(r[3]), 0, 255),
    a: r[4] != null ? Ne(Number(r[4]), 0, 1) : 1
  } : null;
}
function i2({ r: e, g: t, b: r, a: l }) {
  return l >= 1 ? `rgb(${e}, ${t}, ${r})` : `rgba(${e}, ${t}, ${r}, ${Math.round(l * 100) / 100})`;
}
const n_ = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: r = !0,
  showPalette: l = !0,
  palette: s = t9,
  showButton: c = !1,
  showArrow: d = !0,
  disabled: o = !1,
  invalid: a = !1,
  placeholder: i = "",
  size: u = "md",
  tabIndex: h = 0,
  className: x,
  onChange: b,
  onValueChange: k,
  onOpen: m,
  onClose: _
}) => {
  const p = Q(null), f = Q(null), g = Q(null), M = Q(null), v = Q(null), w = E1(), C = Q(null), z = g1(
    () => l9(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [A, S] = W(!1), [O, $] = W(null), y = O ?? z, N = g1(() => n9(y), [y]), T = I(
    (U) => {
      const H = i2(U);
      b?.(H), k?.(H);
    },
    [b, k]
  ), V = I(
    (U, H) => {
      $(U), H && !c && T(U);
    },
    [c, T]
  ), j = I(() => {
    S(!1), $(null), _?.(), f.current?.focus();
  }, [_]), P = I(() => {
    o || ($(z), S(!0), m?.());
  }, [o, z, m]), E = I(() => {
    A ? j() : P();
  }, [A, j, P]), Z = I(
    (U, H) => {
      const K = g.current;
      if (!K) return N;
      const Y = K.getBoundingClientRect(), f1 = Ne((U - Y.left) / Y.width, 0, 1), t1 = Ne(1 - (H - Y.top) / Y.height, 0, 1);
      return { h: N.h, s: f1, v: t1 };
    },
    [N]
  ), e1 = I(
    (U, H) => {
      if (!H) return 0;
      const K = H.getBoundingClientRect();
      return Ne((U - K.left) / K.width, 0, 1);
    },
    []
  ), X = (U) => {
    if (o) return;
    U.preventDefault(), U.currentTarget.setPointerCapture(U.pointerId), C.current = "sat";
    const H = Z(U.clientX, U.clientY);
    V({ ...S0(H), a: y.a }, !0);
  }, m1 = (U) => {
    if (C.current !== "sat") return;
    U.preventDefault();
    const H = Z(U.clientX, U.clientY);
    V({ ...S0(H), a: y.a }, !0);
  }, d1 = (U) => {
    if (o) return;
    U.preventDefault(), U.currentTarget.setPointerCapture(U.pointerId), C.current = "hue";
    const H = e1(U.clientX, M.current);
    V(
      { ...S0({ ...N, h: H * 360 }), a: y.a },
      !0
    );
  }, l1 = (U) => {
    if (C.current !== "hue") return;
    U.preventDefault();
    const H = e1(U.clientX, M.current);
    V(
      { ...S0({ ...N, h: H * 360 }), a: y.a },
      !0
    );
  }, R = (U) => {
    if (o) return;
    U.preventDefault(), U.currentTarget.setPointerCapture(U.pointerId), C.current = "alpha";
    const H = e1(U.clientX, v.current);
    V({ ...y, a: H }, !0);
  }, c1 = (U) => {
    if (C.current !== "alpha") return;
    U.preventDefault();
    const H = e1(U.clientX, v.current);
    V({ ...y, a: H }, !0);
  }, n1 = () => {
    C.current = null;
  }, u1 = I(
    (U, H) => {
      const K = {
        h: N.h,
        s: Ne(N.s + U, 0, 1),
        v: Ne(N.v + H, 0, 1)
      };
      V({ ...S0(K), a: y.a }, !0);
    },
    [N, y.a, V]
  ), o1 = I(
    (U) => {
      const H = (N.h + U + 360) % 360;
      V({ ...S0({ ...N, h: H }), a: y.a }, !0);
    },
    [N, y.a, V]
  ), w1 = I(
    (U) => {
      V({ ...y, a: Ne(y.a + U, 0, 1) }, !0);
    },
    [y, V]
  ), L1 = (U) => {
    switch (U.key) {
      case "ArrowLeft":
        U.preventDefault(), u1(-0.05, 0);
        break;
      case "ArrowRight":
        U.preventDefault(), u1(0.05, 0);
        break;
      case "ArrowUp":
        U.preventDefault(), u1(0, 0.05);
        break;
      case "ArrowDown":
        U.preventDefault(), u1(0, -0.05);
        break;
      case "Escape":
        U.preventDefault(), j();
        break;
    }
  }, Y1 = (U, H) => {
    switch (U.key) {
      case "ArrowLeft":
        U.preventDefault(), H === "hue" ? o1(-6) : w1(-0.05);
        break;
      case "ArrowRight":
        U.preventDefault(), H === "hue" ? o1(6) : w1(0.05);
        break;
      case "Escape":
        U.preventDefault(), j();
        break;
    }
  }, x1 = (U, H) => {
    if (U === "hex") {
      const t1 = At(H);
      t1 && V({ ...t1, a: y.a }, !0);
      return;
    }
    const K = H.replace(/[^\d.]/g, ""), Y = Number.parseFloat(K);
    if (Number.isNaN(Y)) return;
    if (U === "a") {
      const t1 = K.includes(".") ? Ne(Y, 0, 1) : Ne(Y / 100, 0, 1);
      V({ ...y, a: t1 }, !0);
      return;
    }
    const f1 = { r: 255, g: 255, b: 255 };
    V(
      { ...y, [U]: Ne(Y, 0, f1[U]) },
      !0
    );
  }, P1 = () => {
    O && (T(O), $(null), S(!1), _?.(), f.current?.focus());
  };
  v1(() => {
    if (!A) return;
    const U = (H) => {
      p.current && !p.current.contains(H.target) && j();
    };
    return document.addEventListener("mousedown", U), () => document.removeEventListener("mousedown", U);
  }, [A, j]), v1(() => {
    if (!A) return;
    const U = (H) => {
      H.key === "Escape" && j();
    };
    return document.addEventListener("keydown", U), () => document.removeEventListener("keydown", U);
  }, [A, j]);
  const C1 = u === "xs" ? z1["dx-colorpicker-trigger-xs"] : u === "sm" ? z1["dx-colorpicker-trigger-sm"] : u === "lg" ? z1["dx-colorpicker-trigger-lg"] : u === "xl" ? z1["dx-colorpicker-trigger-xl"] : z1["dx-colorpicker-trigger"], oe = i2(y), re = r9(y), J1 = { x: N.s * 100, y: (1 - N.v) * 100 }, we = N.h / 360 * 100, ge = y.a * 100, ae = /* @__PURE__ */ L("div", { className: z1["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ n(
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
        onKeyDown: L1,
        onPointerDown: X,
        onPointerMove: m1,
        onPointerUp: n1,
        children: /* @__PURE__ */ n(
          "span",
          {
            className: z1["dx-saturation-indicator"],
            style: { left: `${J1.x}%`, top: `${J1.y}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    t && /* @__PURE__ */ n(
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
        onKeyDown: (U) => Y1(U, "hue"),
        onPointerDown: d1,
        onPointerMove: l1,
        onPointerUp: n1,
        children: /* @__PURE__ */ n(
          "span",
          {
            className: z1["dx-hue-indicator"],
            style: { left: `${we}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    t && /* @__PURE__ */ n(
      "div",
      {
        ref: v,
        role: "slider",
        "aria-label": "Alpha",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(ge),
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : h,
        className: z1["dx-alpha-picker"],
        style: {
          background: `repeating-conic-gradient(var(--dx-border-color) 0% 25%, var(--dx-surface-color) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${N.h}, 100%, 50%))`
        },
        onKeyDown: (U) => Y1(U, "alpha"),
        onPointerDown: R,
        onPointerMove: c1,
        onPointerUp: n1,
        children: /* @__PURE__ */ n(
          "span",
          {
            className: z1["dx-alpha-indicator"],
            style: { left: `${ge}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    r && /* @__PURE__ */ L("div", { className: z1["dx-colorpicker-rgba"], children: [
      /* @__PURE__ */ L("label", { className: z1["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ n("span", { className: z1["dx-colorpicker-rgba-label"], children: "Hex" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            maxLength: 7,
            className: z1["dx-colorpicker-rgba-input"],
            "aria-label": "Hex",
            value: re,
            onChange: (U) => x1("hex", U.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ L("label", { className: z1["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ n("span", { className: z1["dx-colorpicker-rgba-label"], children: "R" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: z1["dx-colorpicker-rgba-input"],
            "aria-label": "Red",
            value: y.r,
            onChange: (U) => x1("r", U.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ L("label", { className: z1["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ n("span", { className: z1["dx-colorpicker-rgba-label"], children: "G" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: z1["dx-colorpicker-rgba-input"],
            "aria-label": "Green",
            value: y.g,
            onChange: (U) => x1("g", U.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ L("label", { className: z1["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ n("span", { className: z1["dx-colorpicker-rgba-label"], children: "B" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: z1["dx-colorpicker-rgba-input"],
            "aria-label": "Blue",
            value: y.b,
            onChange: (U) => x1("b", U.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ L("label", { className: z1["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ n("span", { className: z1["dx-colorpicker-rgba-label"], children: "A" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            inputMode: "decimal",
            maxLength: 4,
            className: z1["dx-colorpicker-rgba-input"],
            "aria-label": "Alpha",
            value: Math.round(y.a * 100),
            onChange: (U) => x1("a", U.target.value)
          }
        )
      ] })
    ] }),
    l && /* @__PURE__ */ n("div", { className: z1["dx-colorpicker-palette"], children: s.map((U) => /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: z1["dx-colorpicker-swatch"],
        "aria-label": U,
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : h,
        style: { backgroundColor: U },
        onClick: () => {
          const H = At(U);
          c ? V({ ...H, a: y.a }, !1) : ($(null), T({ ...H, a: y.a }), S(!1), _?.(), f.current?.focus());
        }
      },
      U
    )) }),
    c && /* @__PURE__ */ n("div", { className: z1["dx-colorpicker-footer"], children: /* @__PURE__ */ n(
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
        x
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
            tabIndex: h,
            onClick: E,
            onKeyDown: (U) => {
              U.key === "Escape" && A && (U.preventDefault(), j());
            },
            children: [
              /* @__PURE__ */ n(
                "span",
                {
                  className: z1["dx-colorpicker-value"],
                  style: { backgroundColor: oe },
                  "aria-hidden": "true"
                }
              ),
              i && /* @__PURE__ */ n("span", { className: z1["dx-colorpicker-text"], children: i }),
              d && /* @__PURE__ */ n("span", { className: z1["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ n(M1, { name: "chevron-down", size: 14 }) })
            ]
          }
        ),
        A && /* @__PURE__ */ n(
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
}, O1 = {
  "dx-datepicker": "_dx-datepicker_1srju_1",
  "dx-datepicker-inline": "_dx-datepicker-inline_1srju_9",
  "dx-datepicker-input": "_dx-datepicker-input_1srju_13",
  "dx-datepicker-input-invalid": "_dx-datepicker-input-invalid_1srju_43",
  "dx-datepicker-input--xs": "_dx-datepicker-input--xs_1srju_50",
  "dx-datepicker-input--sm": "_dx-datepicker-input--sm_1srju_56",
  "dx-datepicker-input--md": "_dx-datepicker-input--md_1srju_62",
  "dx-datepicker-input--lg": "_dx-datepicker-input--lg_1srju_68",
  "dx-datepicker-input--xl": "_dx-datepicker-input--xl_1srju_74",
  "dx-datepicker-trigger": "_dx-datepicker-trigger_1srju_80",
  "dx-datepicker-clear": "_dx-datepicker-clear_1srju_115",
  "dx-datepicker-clear--inset": "_dx-datepicker-clear--inset_1srju_145",
  "dx-datepicker-popup": "_dx-datepicker-popup_1srju_149",
  "dx-datepicker-calendar": "_dx-datepicker-calendar_1srju_161",
  "dx-datepicker-header": "_dx-datepicker-header_1srju_167",
  "dx-datepicker-nav": "_dx-datepicker-nav_1srju_175",
  "dx-datepicker-title": "_dx-datepicker-title_1srju_201",
  "dx-datepicker-grid": "_dx-datepicker-grid_1srju_209",
  "dx-datepicker-week-row": "_dx-datepicker-week-row_1srju_214",
  "dx-datepicker-row": "_dx-datepicker-row_1srju_215",
  "dx-datepicker-weekday": "_dx-datepicker-weekday_1srju_220",
  "dx-datepicker-day": "_dx-datepicker-day_1srju_230",
  "dx-datepicker-day--today": "_dx-datepicker-day--today_1srju_258",
  "dx-datepicker-day--selected": "_dx-datepicker-day--selected_1srju_262",
  "dx-datepicker-day--outside": "_dx-datepicker-day--outside_1srju_272",
  "dx-datepicker-day--disabled": "_dx-datepicker-day--disabled_1srju_276",
  "dx-datepicker-time": "_dx-datepicker-time_1srju_282",
  "dx-datepicker-time-field": "_dx-datepicker-time-field_1srju_291",
  "dx-datepicker-time-label": "_dx-datepicker-time-label_1srju_297",
  "dx-datepicker-time-control": "_dx-datepicker-time-control_1srju_302",
  "dx-datepicker-time-input": "_dx-datepicker-time-input_1srju_306",
  "dx-datepicker-time-buttons": "_dx-datepicker-time-buttons_1srju_326",
  "dx-datepicker-ok": "_dx-datepicker-ok_1srju_354"
}, o9 = 42;
function Oe(e) {
  return String(e).padStart(2, "0");
}
function Ce(e) {
  return `${e.year}-${Oe(e.month)}-${Oe(e.day)}`;
}
function a9(e, t) {
  const r = Ce(e);
  return t ? `${r} ${Oe(e.hour)}:${Oe(e.minute)}:${Oe(e.second)}` : r;
}
function Ht(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!t) return null;
  const r = Number(t[1]), l = Number(t[2]), s = Number(t[3]), c = t[4] != null ? Number(t[4]) : 0, d = t[5] != null ? Number(t[5]) : 0, o = t[6] != null ? Number(t[6]) : 0;
  if (l < 1 || l > 12 || s < 1 || s > 31) return null;
  const a = new Date(r, l - 1, s, c, d, o);
  return a.getFullYear() !== r || a.getMonth() !== l - 1 || a.getDate() !== s ? null : { year: r, month: l, day: s, hour: c, minute: d, second: o };
}
function u0() {
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
function t0(e, t) {
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
function dt(e, t) {
  const r = new Date(e.year, e.month - 1 + t, 1), l = r.getFullYear(), s = r.getMonth() + 1, c = new Date(l, s, 0).getDate();
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
  yy: (e) => Oe(e.year % 100),
  MM: (e) => Oe(e.month),
  M: (e) => String(e.month),
  dd: (e) => Oe(e.day),
  d: (e) => String(e.day),
  HH: (e) => Oe(e.hour),
  H: (e) => String(e.hour),
  mm: (e) => Oe(e.minute),
  m: (e) => String(e.minute),
  ss: (e) => Oe(e.second),
  s: (e) => String(e.second),
  tt: (e, t, r) => new Intl.DateTimeFormat(r, {
    hour: "numeric",
    hour12: !0
  }).formatToParts(t).find((s) => s.type === "dayPeriod")?.value ?? ""
}, s9 = [
  "yyyy",
  "yy",
  "MM",
  "dd",
  "HH",
  "mm",
  "ss",
  "tt"
], c9 = ["y", "M", "d", "H", "m", "s"];
function ut(e, t, r) {
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
    for (const a of s9)
      if (t.startsWith(a, c)) {
        s += u2[a](e, l, r), c += a.length, d = !0;
        break;
      }
    if (d) continue;
    const o = t[c];
    if (c9.includes(o)) {
      s += u2[o](e, l, r), c += 1;
      continue;
    }
    s += o, c += 1;
  }
  return s;
}
const i9 = [
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
function d9(e, t) {
  const r = {};
  let l = 0, s = 0;
  for (; s < t.length; ) {
    let o = null;
    for (const a of i9)
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
      l += o.length, s += o.length;
      continue;
    }
    if (e[l] !== t[s]) return null;
    l += 1, s += 1;
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
function X0(e, t) {
  const r = Ht(e);
  return r || d9(e, t);
}
function u9(e, t, r) {
  return t && Ce(e) < Ce(t) ? t : r && Ce(e) > Ce(r) ? r : e;
}
const h9 = ["hour", "minute", "second"];
function ht(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const l_ = I1(
  function({
    size: t = "md",
    invalid: r = !1,
    value: l,
    defaultValue: s,
    format: c = "yyyy-MM-dd",
    min: d,
    max: o,
    showTime: a = !1,
    showButton: i = !0,
    allowClear: u = !1,
    inline: h = !1,
    disabledDates: x,
    locale: b = "en-US",
    onChange: k,
    onValueChange: m,
    onOpen: _,
    onClose: p,
    disabled: f,
    readOnly: g,
    placeholder: M,
    ariaLabel: v,
    triggerLabel: w,
    clearLabel: C,
    tabIndex: z,
    className: A,
    onBlur: S,
    onKeyDown: O,
    ...$
  }, y) {
    const N = Q(null), T = Q(null), V = Q(null), j = Q(null), P = E1(), E = l !== void 0, [Z, e1] = W(
      () => s != null ? ut(
        X0(s, c) ?? u0(),
        c,
        b
      ) : ""
    ), [X, m1] = W(!1), [d1, l1] = W(null), [R, c1] = W(() => {
      const F = l !== void 0 ? l ?? "" : s ?? "";
      if (F) {
        const a1 = X0(F, c);
        if (a1) return a1;
      }
      return u0();
    }), n1 = g1(() => d ? Ht(d) : null, [d]), u1 = g1(() => o ? Ht(o) : null, [o]), o1 = g1(
      () => new Set(x ?? []),
      [x]
    ), w1 = g1(() => {
      const F = E ? l ?? "" : Z;
      return F ? X0(F, c) : null;
    }, [l, Z, E, c]), L1 = I(
      (F) => {
        const a1 = Ce(F);
        return !!(o1.has(a1) || n1 && a1 < Ce(n1) || u1 && a1 > Ce(u1));
      },
      [o1, n1, u1]
    ), Y1 = I(
      (F) => {
        if (!L1(F)) return F;
        for (let a1 = 1; a1 <= 366; a1 += 1) {
          const j1 = t0(F, a1);
          if (!L1(j1)) return j1;
          const D1 = t0(F, -a1);
          if (!L1(D1)) return D1;
        }
        return F;
      },
      [L1]
    ), x1 = I(
      (F) => {
        E || e1(F ? ut(F, c, b) : "");
        const a1 = F ? a9(F, a) : "";
        k?.(a1), m?.(a1);
      },
      [E, c, b, a, k, m]
    ), P1 = I(
      (F) => {
        T.current = F, typeof y == "function" ? y(F) : y && (y.current = F);
      },
      [y]
    ), C1 = I(() => {
      m1(!1), l1(null), p?.(), h || V.current?.focus();
    }, [h, p]), oe = I(() => {
      if (f) return;
      const F = w1 ?? u0();
      l1(F), c1(Y1(F)), m1(!0), _?.();
    }, [f, w1, Y1, _]), re = I(() => {
      X ? C1() : oe();
    }, [X, C1, oe]), J1 = I((F) => {
      j.current?.querySelector(
        `[data-date="${Ce(F)}"]`
      )?.focus();
    }, []), we = I(
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
        l1(D1), a || (x1(D1), C1());
      },
      [L1, d1, w1, a, x1, C1]
    ), ge = I(
      (F, a1) => {
        l1((j1) => {
          const D1 = j1 ?? w1 ?? u0(), le = Math.min(F === "hour" ? 23 : 59, Math.max(0, D1[F] + a1));
          return { ...D1, [F]: le };
        });
      },
      [w1]
    ), ae = I(
      (F, a1) => {
        const j1 = a1.replace(/\D/g, ""), D1 = j1 === "" ? 0 : Number(j1), Pe = F === "hour" ? 23 : 59;
        l1((le) => ({ ...le ?? w1 ?? u0(), [F]: Math.min(Pe, D1) }));
      },
      [w1]
    ), U = I(() => {
      d1 && (x1(d1), C1());
    }, [d1, x1, C1]), H = I(() => {
      if (X) return;
      const F = X0(Z, c);
      x1(F ? u9(F, n1, u1) : null);
    }, [X, Z, c, n1, u1, x1]), K = (F) => {
      const a1 = F.target.value;
      E || e1(a1), X && l1(null);
    }, Y = (F) => {
      F.key === "Enter" ? (F.preventDefault(), X ? d1 && (x1(d1), C1()) : H()) : F.key === "Escape" ? X && (F.preventDefault(), C1()) : F.key === "ArrowDown" && !X ? (F.preventDefault(), oe()) : F.key === "Tab" && X && m1(!1), O?.(F);
    }, f1 = (F) => {
      H(), S?.(F);
    }, t1 = (F) => {
      let a1 = null;
      switch (F.key) {
        case "ArrowLeft":
          a1 = t0(R, -1), F.preventDefault();
          break;
        case "ArrowRight":
          a1 = t0(R, 1), F.preventDefault();
          break;
        case "ArrowUp":
          a1 = t0(R, -7), F.preventDefault();
          break;
        case "ArrowDown":
          a1 = t0(R, 7), F.preventDefault();
          break;
        case "Home":
          a1 = t0(R, -d2(R)), F.preventDefault();
          break;
        case "End":
          a1 = t0(R, 6 - d2(R)), F.preventDefault();
          break;
        case "PageUp":
          a1 = dt(R, F.shiftKey ? -12 : -1), F.preventDefault();
          break;
        case "PageDown":
          a1 = dt(R, F.shiftKey ? 12 : 1), F.preventDefault();
          break;
        case "Enter":
        case " ":
          F.preventDefault(), we(R);
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
      if (!X) return;
      const F = (a1) => {
        N.current && !N.current.contains(a1.target) && C1();
      };
      return document.addEventListener("mousedown", F), () => document.removeEventListener("mousedown", F);
    }, [X, C1]), v1(() => {
      if (!X) return;
      const F = (a1) => {
        a1.key === "Escape" && C1();
      };
      return document.addEventListener("keydown", F), () => document.removeEventListener("keydown", F);
    }, [X, C1]);
    const k1 = () => {
      E || e1(""), k?.(""), m?.(""), T.current?.focus();
    }, S1 = X && d1 ? ut(d1, c, b) : E ? l ? ut(
      X0(l, c) ?? u0(),
      c,
      b
    ) : "" : Z, B1 = E ? !!l : Z.length > 0, R1 = h || X, ne = { year: R.year, month: R.month }, o0 = new Date(ne.year, ne.month - 1, 1).getDay(), J = {
      year: ne.year,
      month: ne.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, $1 = [];
    for (let F = 0; F < o9; F += 1)
      $1.push(t0(J, F - o0));
    const de = d1 ? Ce(d1) : w1 ? Ce(w1) : null, Se = Ce(u0()), ue = `${ne.year}-${Oe(ne.month)}`, N1 = g1(
      () => new Intl.DateTimeFormat(b, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      [b]
    ), V1 = new Intl.DateTimeFormat(b, {
      month: "long",
      year: "numeric"
    }).format(new Date(ne.year, ne.month - 1, 1)), Ae = Array.from(
      { length: 7 },
      (F, a1) => new Intl.DateTimeFormat(b, { weekday: "short" }).format(
        new Date(2021, 0, 3 + a1)
      )
    ), ke = t === "xs" ? O1["dx-datepicker-input--xs"] : t === "sm" ? O1["dx-datepicker-input--sm"] : t === "lg" ? O1["dx-datepicker-input--lg"] : t === "xl" ? O1["dx-datepicker-input--xl"] : O1["dx-datepicker-input--md"], Q1 = /* @__PURE__ */ L(
      "div",
      {
        className: O1["dx-datepicker-calendar"],
        "aria-label": v ?? "Date picker",
        children: [
          /* @__PURE__ */ L("div", { className: O1["dx-datepicker-header"], children: [
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: O1["dx-datepicker-nav"],
                "aria-label": "Previous month",
                onClick: () => {
                  const F = Y1(dt(R, -1));
                  c1(F), setTimeout(() => J1(F), 0);
                },
                children: /* @__PURE__ */ n(M1, { name: "chevron-left", size: 16 })
              }
            ),
            /* @__PURE__ */ n("span", { className: O1["dx-datepicker-title"], children: V1 }),
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: O1["dx-datepicker-nav"],
                "aria-label": "Next month",
                onClick: () => {
                  const F = Y1(dt(R, 1));
                  c1(F), setTimeout(() => J1(F), 0);
                },
                children: /* @__PURE__ */ n(M1, { name: "chevron-right", size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ L(
            "div",
            {
              ref: j,
              role: "grid",
              className: O1["dx-datepicker-grid"],
              onKeyDown: t1,
              children: [
                /* @__PURE__ */ n("div", { role: "row", className: O1["dx-datepicker-week-row"], children: Ae.map((F) => /* @__PURE__ */ n(
                  "div",
                  {
                    role: "columnheader",
                    className: O1["dx-datepicker-weekday"],
                    children: F
                  },
                  F
                )) }),
                Array.from({ length: 6 }, (F, a1) => /* @__PURE__ */ n(
                  "div",
                  {
                    role: "row",
                    className: O1["dx-datepicker-row"],
                    children: $1.slice(a1 * 7, a1 * 7 + 7).map((j1) => {
                      const D1 = Ce(j1), Pe = L1(j1), le = D1.startsWith(ue);
                      return /* @__PURE__ */ n(
                        "button",
                        {
                          type: "button",
                          role: "gridcell",
                          "data-date": D1,
                          tabIndex: D1 === Ce(R) ? 0 : -1,
                          "aria-selected": D1 === de || void 0,
                          "aria-disabled": Pe || void 0,
                          "aria-label": N1.format(
                            new Date(j1.year, j1.month - 1, j1.day)
                          ),
                          className: [
                            O1["dx-datepicker-day"],
                            le ? null : O1["dx-datepicker-day--outside"],
                            D1 === Se ? O1["dx-datepicker-day--today"] : null,
                            D1 === de ? O1["dx-datepicker-day--selected"] : null,
                            Pe ? O1["dx-datepicker-day--disabled"] : null
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
          a && /* @__PURE__ */ L("div", { className: O1["dx-datepicker-time"], children: [
            h9.map((F) => /* @__PURE__ */ L("label", { className: O1["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ n("span", { className: O1["dx-datepicker-time-label"], children: ht(F) }),
              /* @__PURE__ */ L("div", { className: O1["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ n(
                  "input",
                  {
                    className: O1["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": ht(F),
                    value: Oe(
                      (d1 ?? w1 ?? u0())[F]
                    ),
                    onChange: (a1) => ae(F, a1.target.value),
                    onKeyDown: (a1) => {
                      a1.key === "ArrowUp" ? (a1.preventDefault(), ge(F, 1)) : a1.key === "ArrowDown" ? (a1.preventDefault(), ge(F, -1)) : a1.key === "Enter" && (a1.preventDefault(), U());
                    }
                  }
                ),
                /* @__PURE__ */ L("span", { className: O1["dx-datepicker-time-buttons"], children: [
                  /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Increase ${ht(F).toLowerCase()}`,
                      onClick: () => ge(F, 1),
                      children: /* @__PURE__ */ n(M1, { name: "chevron-up", size: 11 })
                    }
                  ),
                  /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Decrease ${ht(F).toLowerCase()}`,
                      onClick: () => ge(F, -1),
                      children: /* @__PURE__ */ n(M1, { name: "chevron-down", size: 11 })
                    }
                  )
                ] })
              ] })
            ] }, F)),
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: O1["dx-datepicker-ok"],
                onClick: U,
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
          O1["dx-datepicker"],
          h ? O1["dx-datepicker-inline"] : null,
          A
        ].filter(Boolean).join(" "),
        children: [
          !h && /* @__PURE__ */ L(b1, { children: [
            /* @__PURE__ */ n(
              "input",
              {
                ref: P1,
                type: "text",
                autoComplete: "off",
                value: S1,
                disabled: f,
                readOnly: g,
                placeholder: M,
                tabIndex: z,
                role: i ? void 0 : "combobox",
                "aria-label": v ?? "Date",
                "aria-haspopup": i ? void 0 : "dialog",
                "aria-expanded": i ? void 0 : R1,
                "aria-controls": i ? void 0 : P,
                "aria-invalid": r || void 0,
                className: [
                  O1["dx-datepicker-input"],
                  ke,
                  r ? O1["dx-datepicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: K,
                onKeyDown: Y,
                onBlur: f1,
                onClick: () => {
                  i || re();
                },
                ...$
              }
            ),
            u && !f && B1 && /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: [
                  O1["dx-datepicker-clear"],
                  i ? O1["dx-datepicker-clear--inset"] : null
                ].filter(Boolean).join(" "),
                "aria-label": C ?? "Clear",
                onClick: k1,
                children: /* @__PURE__ */ n(M1, { name: "close", size: 14 })
              }
            ),
            i && /* @__PURE__ */ n(
              "button",
              {
                ref: V,
                type: "button",
                className: [O1["dx-datepicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": w ?? "Open calendar",
                "aria-haspopup": "dialog",
                "aria-expanded": X,
                "aria-controls": P,
                disabled: f,
                onClick: re,
                children: /* @__PURE__ */ n(M1, { name: "calendar", size: 16 })
              }
            )
          ] }),
          R1 && /* @__PURE__ */ n(
            "div",
            {
              id: P,
              role: h ? void 0 : "dialog",
              "aria-label": h ? void 0 : v ?? "Date picker",
              className: h ? void 0 : O1["dx-datepicker-popup"],
              children: Q1
            }
          )
        ]
      }
    );
  }
), h0 = {
  "dx-rating": "_dx-rating_uhqbm_1",
  "dx-rating-item": "_dx-rating-item_uhqbm_8",
  "dx-rating-item-filled": "_dx-rating-item-filled_uhqbm_28",
  "dx-rating-icon-filled": "_dx-rating-icon-filled_uhqbm_43",
  "dx-rating-icon-empty": "_dx-rating-icon-empty_uhqbm_51",
  "dx-rating-clear": "_dx-rating-clear_uhqbm_55",
  "dx-rating-readonly": "_dx-rating-readonly_uhqbm_87",
  "dx-rating-disabled": "_dx-rating-disabled_uhqbm_96"
}, o_ = ({
  value: e = 0,
  stars: t = 5,
  readOnly: r = !1,
  disabled: l = !1,
  ariaLabel: s = "Rating",
  clearLabel: c = "Clear",
  rateLabel: d = "Rate",
  tabIndex: o = 0,
  className: a,
  onChange: i,
  onValueChange: u
}) => {
  const [h, x] = W(e), b = I(
    (f) => Math.min(t, Math.max(1, f)),
    [t]
  ), k = I(
    (f) => {
      i?.(f), u?.(f);
    },
    [i, u]
  ), m = I(
    (f) => {
      r || l || (k(f), x(f));
    },
    [r, l, k]
  ), _ = (f) => {
    if (r || l) return;
    const g = h > 0 ? h : 1;
    switch (f.key) {
      case "ArrowRight":
      case "ArrowUp":
        f.preventDefault(), m(b(g + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        f.preventDefault(), m(b(g - 1));
        break;
      case "Home":
        f.preventDefault(), m(1);
        break;
      case "End":
        f.preventDefault(), m(t);
        break;
    }
  }, p = Array.from({ length: t }, (f, g) => g + 1);
  return /* @__PURE__ */ L(
    "div",
    {
      role: "radiogroup",
      "aria-label": s,
      "aria-readonly": r || void 0,
      className: [
        h0["dx-rating"],
        r ? h0["dx-rating-readonly"] : null,
        l ? h0["dx-rating-disabled"] : null,
        a
      ].filter(Boolean).join(" "),
      onKeyDown: _,
      children: [
        !r && !l && /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: h0["dx-rating-clear"],
            "aria-label": c,
            tabIndex: e === 0 ? o : -1,
            disabled: l,
            onClick: () => m(0),
            children: /* @__PURE__ */ n(M1, { name: "ban", size: 16 })
          }
        ),
        p.map((f) => {
          const g = f <= e, M = f === (e > 0 ? e : h);
          return /* @__PURE__ */ L(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": g,
              "aria-posinset": f,
              "aria-setsize": t,
              "aria-label": `${d} ${f}`,
              tabIndex: M ? o : -1,
              "aria-disabled": l || r || void 0,
              disabled: l || r,
              className: [
                h0["dx-rating-item"],
                g ? h0["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => m(f),
              onFocus: () => x(f),
              children: [
                /* @__PURE__ */ n(
                  "span",
                  {
                    className: h0["dx-rating-icon-filled"],
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ n(M1, { name: "star", size: 20 })
                  }
                ),
                /* @__PURE__ */ n("span", { className: h0["dx-rating-icon-empty"], "aria-hidden": "true", children: /* @__PURE__ */ n(M1, { name: "star-outline", size: 20 }) })
              ]
            },
            f
          );
        })
      ]
    }
  );
}, x0 = {
  "dx-slider": "_dx-slider_18zjj_1",
  "dx-slider-track": "_dx-slider-track_18zjj_9",
  "dx-slider-range": "_dx-slider-range_18zjj_17",
  "dx-slider-handle": "_dx-slider-handle_18zjj_26",
  "dx-slider-vertical": "_dx-slider-vertical_18zjj_58",
  "dx-slider-disabled": "_dx-slider-disabled_18zjj_84"
};
function We(e, t, r) {
  return Math.min(r, Math.max(t, e));
}
const a_ = ({
  value: e = 0,
  valueMin: t = 0,
  valueMax: r = 100,
  min: l = 0,
  max: s = 100,
  step: c = 1,
  range: d = !1,
  orientation: o = "horizontal",
  disabled: a = !1,
  label: i = "Value",
  minLabel: u = "Min",
  maxLabel: h = "Max",
  tabIndex: x = 0,
  className: b,
  onChange: k,
  onInput: m,
  onValueChange: _,
  onInputChange: p
}) => {
  const f = Q(null), g = Q(
    null
  ), [M, v] = W(null), w = M ?? e, C = g1(
    () => We(w, l, s),
    [w, l, s]
  ), z = g1(
    () => We(d ? t : C, l, s),
    [d, t, C, l, s]
  ), A = g1(
    () => We(d ? Math.max(r, z) : C, l, s),
    [d, r, z, C, l, s]
  ), S = I(
    (R) => {
      const c1 = s - l;
      return c1 <= 0 ? 0 : (We(R, l, s) - l) / c1 * 100;
    },
    [l, s]
  ), O = I(
    (R, c1) => {
      const n1 = f.current;
      if (!n1) return l;
      const u1 = n1.getBoundingClientRect();
      let o1;
      o === "vertical" ? o1 = 1 - (c1 - u1.top) / u1.height : o1 = (R - u1.left) / u1.width;
      const w1 = l + We(o1, 0, 1) * (s - l);
      return c > 0 ? We(Math.round(w1 / c) * c, l, s) : We(w1, l, s);
    },
    [l, s, c, o]
  ), $ = I(
    (R) => {
      typeof R == "number" && v(R), k?.(R), _?.(R);
    },
    [k, _]
  ), y = I(
    (R) => {
      typeof R == "number" && v(R), m?.(R), p?.(R);
    },
    [m, p]
  ), N = I(
    (R, c1, n1) => {
      const u1 = O(c1, n1);
      let o1;
      d ? R === "min" ? o1 = { min: Math.min(u1, A), max: A } : o1 = { min: z, max: Math.max(u1, z) } : o1 = u1, y(o1), g.current === null && $(o1);
    },
    [d, O, z, A, y, $]
  ), T = I(
    (R, c1) => {
      const n1 = (c > 0 ? c : 1) * c1;
      let u1;
      d ? R === "min" ? u1 = {
        min: We(z + n1, l, A),
        max: A
      } : u1 = {
        min: z,
        max: We(A + n1, z, s)
      } : u1 = We(C + n1, l, s), $(u1);
    },
    [d, c, l, s, z, A, C, $]
  ), V = (R, c1) => {
    if (!a)
      switch (c1.key) {
        case "ArrowLeft":
        case "ArrowDown":
          c1.preventDefault(), T(R, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          c1.preventDefault(), T(R, 1);
          break;
        case "Home":
          c1.preventDefault(), $(d ? R === "min" ? { min: l, max: A } : { min: z, max: z } : l);
          break;
        case "End":
          c1.preventDefault(), $(d ? R === "min" ? { min: A, max: A } : { min: z, max: s } : s);
          break;
      }
  }, j = (R, c1) => {
    a || (c1.preventDefault(), c1.currentTarget.focus(), typeof c1.currentTarget.setPointerCapture == "function" && c1.currentTarget.setPointerCapture(c1.pointerId), g.current = { key: R, pointerId: c1.pointerId }, N(R, c1.clientX, c1.clientY));
  }, P = (R) => {
    !g.current || g.current.pointerId !== R.pointerId || (R.preventDefault(), N(g.current.key, R.clientX, R.clientY));
  }, E = (R) => {
    !g.current || g.current.pointerId !== R.pointerId || (g.current = null, R.preventDefault(), $(d ? { min: z, max: A } : C));
  }, [Z, e1] = W(null), X = S(z), m1 = S(A), d1 = d ? X : 0, l1 = m1;
  return /* @__PURE__ */ n(
    "div",
    {
      className: [
        x0["dx-slider"],
        o === "vertical" ? x0["dx-slider-vertical"] : null,
        a ? x0["dx-slider-disabled"] : null,
        b
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ L("div", { ref: f, className: x0["dx-slider-track"], children: [
        /* @__PURE__ */ n(
          "div",
          {
            className: x0["dx-slider-range"],
            style: o === "vertical" ? { bottom: `${d1}%`, height: `${l1 - d1}%` } : { left: `${d1}%`, width: `${l1 - d1}%` }
          }
        ),
        /* @__PURE__ */ n(
          "div",
          {
            role: "slider",
            "aria-valuemin": l,
            "aria-valuemax": s,
            "aria-valuenow": Math.round(z),
            "aria-orientation": o,
            "aria-label": d ? u : i,
            "aria-disabled": a || void 0,
            tabIndex: a || d && Z === "max" ? -1 : x,
            className: x0["dx-slider-handle"],
            style: o === "vertical" ? { bottom: `calc(${X}% - 8px)` } : { left: `calc(${X}% - 8px)` },
            onKeyDown: (R) => V("min", R),
            onPointerDown: (R) => j("min", R),
            onPointerMove: P,
            onPointerUp: E,
            onFocus: () => e1("min")
          }
        ),
        d && /* @__PURE__ */ n(
          "div",
          {
            role: "slider",
            "aria-valuemin": l,
            "aria-valuemax": s,
            "aria-valuenow": Math.round(A),
            "aria-orientation": o,
            "aria-label": h,
            "aria-disabled": a || void 0,
            tabIndex: a || Z === "min" ? -1 : x,
            className: x0["dx-slider-handle"],
            style: o === "vertical" ? { bottom: `calc(${m1}% - 8px)` } : { left: `calc(${m1}% - 8px)` },
            onKeyDown: (R) => V("max", R),
            onPointerDown: (R) => j("max", R),
            onPointerMove: P,
            onPointerUp: E,
            onFocus: () => e1("max")
          }
        )
      ] })
    }
  );
}, F1 = {
  "dx-timespanpicker": "_dx-timespanpicker_7t357_1",
  "dx-timespanpicker-inline": "_dx-timespanpicker-inline_7t357_9",
  "dx-timespanpicker-input": "_dx-timespanpicker-input_7t357_13",
  "dx-timespanpicker-input-invalid": "_dx-timespanpicker-input-invalid_7t357_43",
  "dx-timespanpicker-input--xs": "_dx-timespanpicker-input--xs_7t357_50",
  "dx-timespanpicker-input--sm": "_dx-timespanpicker-input--sm_7t357_56",
  "dx-timespanpicker-input--md": "_dx-timespanpicker-input--md_7t357_62",
  "dx-timespanpicker-input--lg": "_dx-timespanpicker-input--lg_7t357_68",
  "dx-timespanpicker-input--xl": "_dx-timespanpicker-input--xl_7t357_74",
  "dx-timespanpicker-trigger": "_dx-timespanpicker-trigger_7t357_80",
  "dx-timespanpicker-clear": "_dx-timespanpicker-clear_7t357_115",
  "dx-timespanpicker-popup": "_dx-timespanpicker-popup_7t357_145",
  "dx-timespanpicker-panel": "_dx-timespanpicker-panel_7t357_157",
  "dx-timespanpicker-preview": "_dx-timespanpicker-preview_7t357_164",
  "dx-timespanpicker-units": "_dx-timespanpicker-units_7t357_173",
  "dx-timespanpicker-unit": "_dx-timespanpicker-unit_7t357_173",
  "dx-timespanpicker-unit-label": "_dx-timespanpicker-unit-label_7t357_185",
  "dx-timespanpicker-unit-control": "_dx-timespanpicker-unit-control_7t357_190",
  "dx-timespanpicker-unit-input": "_dx-timespanpicker-unit-input_7t357_194",
  "dx-timespanpicker-unit-buttons": "_dx-timespanpicker-unit-buttons_7t357_214",
  "dx-timespanpicker-footer": "_dx-timespanpicker-footer_7t357_242",
  "dx-timespanpicker-ok": "_dx-timespanpicker-ok_7t357_250"
}, f9 = "-10675199.02:48:05.4775808", p9 = "10675199.02:48:05.4775808", n0 = 86400, l0 = 3600, Ie = 60, Lt = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, h2 = {
  days: n0,
  hours: l0,
  minutes: Ie,
  seconds: 1
}, m9 = {
  day: n0,
  hour: l0,
  minute: Ie,
  second: 1
};
function A0(e) {
  return String(e).padStart(2, "0");
}
function rt(e) {
  const t = e.trim();
  if (!t) return null;
  let r = 1, l = t;
  l.startsWith("-") ? (r = -1, l = l.slice(1)) : l.startsWith("+") && (l = l.slice(1));
  const s = /^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(
    l
  );
  if (s) {
    if (!s.slice(1).some((h) => h != null)) return null;
    const o = s[1] != null ? Number(s[1]) : 0, a = s[2] != null ? Number(s[2]) : 0, i = s[3] != null ? Number(s[3]) : 0, u = s[4] != null ? Number(s[4]) : 0;
    return r * (o * n0 + a * l0 + i * Ie + u);
  }
  const c = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(
    l
  );
  if (c) {
    const d = c[1] != null ? Number(c[1]) : 0, o = Number(c[2]), a = Number(c[3]), i = c[4] != null ? Number(c[4]) : 0, u = c[5] != null ? +`0.${c[5]}` : 0;
    return o > 23 || a > 59 || i > 59 ? null : r * (d * n0 + o * l0 + a * Ie + i + u);
  }
  return null;
}
function _9(e) {
  return e.days * n0 + e.hours * l0 + e.minutes * Ie + e.seconds;
}
function f2(e) {
  let t = Math.abs(e);
  const r = Math.floor(t / n0);
  t %= n0;
  const l = Math.floor(t / l0);
  t %= l0;
  const s = Math.floor(t / Ie), c = Math.round(t % Ie * 1e9) / 1e9;
  return { days: r, hours: l, minutes: s, seconds: c };
}
function jt(e, t) {
  const r = e < 0;
  let l = Math.abs(e);
  t === "minute" ? l = Math.round(l / Ie) * Ie : t === "hour" ? l = Math.round(l / l0) * l0 : t === "day" && (l = Math.round(l / n0) * n0);
  let s = Math.round(l % Ie);
  const c = s === 60 ? 1 : 0;
  s = s === 60 ? 0 : s;
  const d = Math.floor(l / Ie) + c, o = d % 60, a = Math.floor(d / 60), i = a % 24, u = Math.floor(a / 24), h = r ? "-" : "", x = u > 0 ? `${u}.` : "";
  switch (t) {
    case "day":
      return `${h}${u} day${u === 1 ? "" : "s"}`;
    case "hour":
      return `${h}${x}${A0(i)}`;
    case "minute":
      return `${h}${x}${A0(i)}:${A0(o)}`;
    default:
      return `${h}${x}${A0(i)}:${A0(o)}:${A0(s)}`;
  }
}
function p2(e, t = "second") {
  const r = rt(e);
  return r === null ? "" : jt(r, t);
}
function $t(e, t, r) {
  return Math.min(r, Math.max(t, e));
}
const s_ = I1(
  function({
    size: t = "md",
    invalid: r = !1,
    value: l,
    defaultValue: s,
    min: c = f9,
    max: d = p9,
    step: o = "1",
    precision: a = "second",
    showDays: i = !0,
    showHours: u = !0,
    showMinutes: h = !0,
    showSeconds: x = !0,
    allowClear: b = !1,
    inline: k = !1,
    onChange: m,
    onValueChange: _,
    onOpen: p,
    onClose: f,
    disabled: g,
    placeholder: M,
    ariaLabel: v,
    triggerLabel: w,
    clearLabel: C,
    tabIndex: z,
    className: A,
    onBlur: S,
    onKeyDown: O,
    ...$
  }, y) {
    const N = Q(null), T = Q(null), V = Q(null), j = E1(), P = l !== void 0, [E, Z] = W(
      () => s != null ? p2(s, a) : ""
    ), [e1, X] = W(!1), [m1, d1] = W(null), [l1, R] = W(null), c1 = g1(
      () => rt(c) ?? -Number.MAX_SAFE_INTEGER,
      [c]
    ), n1 = g1(
      () => rt(d) ?? Number.MAX_SAFE_INTEGER,
      [d]
    ), u1 = g1(() => {
      const J = Number.parseFloat(o);
      return Number.isNaN(J) || J <= 0 ? 1 : J;
    }, [o]), o1 = g1(() => {
      const J = P ? l ?? "" : E;
      return J ? rt(J) : null;
    }, [l, E, P]), w1 = I(
      (J) => {
        const $1 = J === null ? "" : jt(J, a);
        P || Z($1), m?.($1), _?.($1);
      },
      [P, a, m, _]
    ), L1 = I(
      (J) => {
        J && m1 !== null && w1(m1), X(!1), d1(null), R(null), f?.(), k || V.current?.focus();
      },
      [k, m1, w1, f]
    ), Y1 = I(() => {
      g || (d1(o1 ?? 0), X(!0), p?.());
    }, [g, o1, p]), x1 = I(() => {
      e1 ? L1(!1) : Y1();
    }, [e1, L1, Y1]), P1 = I(
      (J, $1) => {
        d1((de) => {
          const ue = (de ?? o1 ?? 0) + $1 * u1 * h2[J];
          return $t(ue, c1, n1);
        });
      },
      [o1, u1, c1, n1]
    ), C1 = I(
      (J) => {
        const $1 = l1?.[J];
        if ($1 == null) return;
        const de = Number.parseFloat($1), Se = Number.isNaN(de) ? 0 : de;
        d1((ue) => {
          const N1 = ue ?? o1 ?? 0, V1 = f2(N1);
          V1[J] = Se;
          const ke = (N1 < 0 ? -1 : 1) * _9(V1);
          return $t(ke, c1, n1);
        }), R(null);
      },
      [l1, o1, c1, n1]
    ), oe = (J, $1) => {
      R((de) => ({ ...de ?? {}, [J]: $1 }));
    }, re = (J, $1) => {
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
          $1.preventDefault(), C1(J), d1(n1);
          break;
        case "Enter":
          $1.preventDefault(), C1(J), L1(!0);
          break;
      }
    }, J1 = I(() => {
      if (e1) return;
      const J = rt(E);
      w1(J !== null ? $t(J, c1, n1) : null);
    }, [e1, E, c1, n1, w1]), we = (J) => {
      P || Z(J.target.value);
    }, ge = (J) => {
      J.key === "Enter" ? (J.preventDefault(), e1 ? L1(!0) : J1()) : J.key === "Escape" && e1 ? (J.preventDefault(), L1(!1)) : J.key === "ArrowDown" && !e1 ? (J.preventDefault(), Y1()) : J.key === "Tab" && e1 && X(!1), O?.(J);
    }, ae = (J) => {
      J1(), S?.(J);
    }, U = () => {
      P || Z(""), m?.(""), _?.(""), T.current?.focus();
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
    const H = I(
      (J) => {
        T.current = J, typeof y == "function" ? y(J) : y && (y.current = J);
      },
      [y]
    ), K = P ? l ? p2(l, a) : "" : E, Y = P ? !!l : E.length > 0, f1 = k || e1, t1 = m1 ?? o1 ?? 0, k1 = f2(t1), S1 = m9[a], R1 = ["days", "hours", "minutes", "seconds"].filter(
      (J) => h2[J] >= S1 && (J === "days" ? i : J === "hours" ? u : J === "minutes" ? h : x)
    ), ne = t === "xs" ? F1["dx-timespanpicker-input--xs"] : t === "sm" ? F1["dx-timespanpicker-input--sm"] : t === "lg" ? F1["dx-timespanpicker-input--lg"] : t === "xl" ? F1["dx-timespanpicker-input--xl"] : F1["dx-timespanpicker-input--md"], o0 = /* @__PURE__ */ L("div", { className: F1["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ n("div", { className: F1["dx-timespanpicker-preview"], "aria-live": "polite", children: jt(t1, a) }),
      /* @__PURE__ */ n("div", { className: F1["dx-timespanpicker-units"], children: R1.map((J) => /* @__PURE__ */ L("label", { className: F1["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ n("span", { className: F1["dx-timespanpicker-unit-label"], children: Lt[J] }),
        /* @__PURE__ */ L("span", { className: F1["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ n(
            "input",
            {
              className: F1["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: l1?.[J] ?? String(k1[J]),
              onChange: ($1) => oe(J, $1.target.value),
              onKeyDown: ($1) => re(J, $1),
              onBlur: () => C1(J)
            }
          ),
          /* @__PURE__ */ L("span", { className: F1["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${Lt[J].toLowerCase()}`,
                onClick: () => {
                  C1(J), P1(J, 1);
                },
                children: /* @__PURE__ */ n(M1, { name: "chevron-up", size: 11 })
              }
            ),
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${Lt[J].toLowerCase()}`,
                onClick: () => {
                  C1(J), P1(J, -1);
                },
                children: /* @__PURE__ */ n(M1, { name: "chevron-down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, J)) }),
      /* @__PURE__ */ n("div", { className: F1["dx-timespanpicker-footer"], children: /* @__PURE__ */ n(
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
            /* @__PURE__ */ n(
              "input",
              {
                ref: H,
                type: "text",
                autoComplete: "off",
                value: K,
                disabled: g,
                placeholder: M,
                tabIndex: z,
                role: "combobox",
                "aria-label": v ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": e1,
                "aria-controls": j,
                "aria-invalid": r || void 0,
                className: [
                  F1["dx-timespanpicker-input"],
                  ne,
                  r ? F1["dx-timespanpicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: we,
                onKeyDown: ge,
                onBlur: ae,
                ...$
              }
            ),
            b && !g && Y && /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: F1["dx-timespanpicker-clear"],
                "aria-label": C ?? "Clear",
                onClick: U,
                children: /* @__PURE__ */ n(M1, { name: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ n(
              "button",
              {
                ref: V,
                type: "button",
                className: [F1["dx-timespanpicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": w ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": e1,
                "aria-controls": j,
                disabled: g,
                onClick: x1,
                children: /* @__PURE__ */ n(M1, { name: "clock", size: 16 })
              }
            )
          ] }),
          f1 && /* @__PURE__ */ n(
            "div",
            {
              id: j,
              role: k ? void 0 : "dialog",
              "aria-label": v ?? "Time span picker",
              className: k ? void 0 : F1["dx-timespanpicker-popup"],
              children: o0
            }
          )
        ]
      }
    );
  }
), v9 = "_wrapper_ou9x5_1", g9 = "_cells_ou9x5_8", k9 = "_cell_ou9x5_8", y9 = "_invalid_ou9x5_63", x9 = "_live_ou9x5_73", b0 = {
  wrapper: v9,
  cells: g9,
  cell: k9,
  "cell-sm": "_cell-sm_ou9x5_45",
  "cell-md": "_cell-md_ou9x5_51",
  "cell-lg": "_cell-lg_ou9x5_57",
  invalid: y9,
  live: x9
};
function m2(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const c_ = I1(
  function({
    length: t = 6,
    value: r,
    defaultValue: l,
    onChange: s,
    invalid: c = !1,
    size: d = "md",
    autoFocus: o = !1,
    disabled: a = !1,
    label: i = "Security code",
    liveAnnounce: u = !0,
    className: h,
    "aria-label": x
  }, b) {
    const k = E1(), m = r !== void 0, [_, p] = W(m2(l).join("")), f = m ? m2(r).join("") : _, g = Array.from({ length: t }, ($, y) => f[y] ?? ""), M = Q([]), [v, w] = W(""), C = ($) => {
      m || p($), s?.($);
    }, z = ($) => {
      const y = M.current[$];
      y && !y.disabled && (y.focus(), y.select());
    }, A = ($, y) => {
      const N = y.replace(/\D/g, "").slice(-1), T = f.split("");
      if (N) {
        T[$] = N;
        const V = T.join("").slice(0, t);
        C(V), V.length < t ? z($ + 1) : u && w("Code complete");
      }
    }, S = ($, y) => {
      if (y.key === "Backspace") {
        if (y.preventDefault(), f[$]) {
          const N = f.split("");
          N[$] = "", C(N.join(""));
        } else if ($ > 0) {
          const N = f.split("");
          N[$ - 1] = "", C(N.join("")), z($ - 1);
        }
      } else y.key === "ArrowLeft" && $ > 0 ? (y.preventDefault(), z($ - 1)) : y.key === "ArrowRight" && $ < t - 1 ? (y.preventDefault(), z($ + 1)) : y.key === "Home" ? (y.preventDefault(), z(0)) : y.key === "End" && (y.preventDefault(), z(t - 1));
    }, O = ($, y) => {
      y.preventDefault();
      const N = y.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!N) return;
      const T = f.split("");
      let V = 0;
      for (let P = 0; P < N.length && $ + P < t; P++)
        T[$ + P] = N[P] ?? "", V++;
      const j = T.join("");
      C(j), j.length >= t ? u && w("Code complete") : z($ + V);
    };
    return /* @__PURE__ */ L(
      "div",
      {
        className: [b0.wrapper, h].filter(Boolean).join(" "),
        role: "group",
        "aria-label": x ?? i,
        "data-invalid": c || void 0,
        children: [
          /* @__PURE__ */ n("div", { className: [b0.cells, b0[d]].join(" "), children: g.map(($, y) => /* @__PURE__ */ n(
            "input",
            {
              ref: (N) => {
                M.current[y] = N, y === 0 && b && (typeof b == "function" ? b(N) : b.current = N);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: $,
              disabled: a,
              "aria-label": `Digit ${y + 1} of ${t}`,
              "aria-invalid": c && $ !== "" ? !0 : void 0,
              autoFocus: o && y === 0,
              className: [
                b0.cell,
                b0[`cell-${d}`],
                c ? b0.invalid : null
              ].filter(Boolean).join(" "),
              onChange: (N) => A(y, N.target.value),
              onKeyDown: (N) => S(y, N),
              onPaste: (N) => O(y, N),
              onFocus: (N) => N.target.select(),
              onBlur: () => {
                u && w("");
              }
            },
            y
          )) }),
          u && /* @__PURE__ */ n(
            "span",
            {
              id: `${k}-live`,
              role: "status",
              "aria-live": "polite",
              className: b0.live,
              children: v
            }
          )
        ]
      }
    );
  }
), b9 = "_wrapper_6lcd5_1", M9 = "_header_6lcd5_7", C9 = "_label_6lcd5_15", w9 = "_clear_6lcd5_22", z9 = "_canvas_6lcd5_53", L9 = "_disabled_6lcd5_69", H0 = {
  wrapper: b9,
  header: M9,
  label: C9,
  clear: w9,
  canvas: z9,
  disabled: L9
}, i_ = I1(
  function({
    value: t,
    defaultValue: r,
    onChange: l,
    penColor: s = "#1c1c1c",
    penWidth: c = 2.5,
    clearLabel: d = "Clear",
    ariaLabel: o = "Signature",
    width: a,
    height: i = 140,
    disabled: u = !1,
    className: h
  }, x) {
    const b = Q(null), k = Q(!1), m = Q(!1), _ = Q({ x: 0, y: 0 });
    v1(() => {
      const C = b.current;
      if (!C) return;
      const z = window.devicePixelRatio || 1, A = Math.round((a ?? C.clientWidth) * z), S = Math.round(i * z);
      (C.width !== A || C.height !== S) && (C.width = A, C.height = S);
      const O = C.getContext("2d");
      if (!O) return;
      O.setTransform(z, 0, 0, z, 0, 0), O.lineWidth = c, O.strokeStyle = s, O.lineCap = "round", O.lineJoin = "round";
      const $ = t ?? r;
      if ($) {
        const y = new Image();
        y.onload = () => {
          O.drawImage(y, 0, 0, C.clientWidth, i);
        }, y.src = $;
      }
    }, [t, r, s, c, a, i]);
    const p = () => {
      const C = b.current;
      if (!C) return;
      const z = C.toDataURL("image/png");
      l?.(z);
    }, f = () => {
      const C = b.current;
      if (!C) return;
      const z = C.getContext("2d");
      z && z.clearRect(0, 0, C.width, C.height), l?.("");
    };
    Et(x, () => ({
      clear: f,
      toDataURL: (C = "image/png", z) => b.current?.toDataURL(C, z) ?? ""
    }));
    const g = (C) => {
      const z = C.currentTarget.getBoundingClientRect();
      return { x: C.clientX - z.left, y: C.clientY - z.top };
    }, M = (C) => {
      u || (C.preventDefault(), typeof C.currentTarget.setPointerCapture == "function" && C.currentTarget.setPointerCapture(C.pointerId), k.current = !0, m.current = !1, _.current = g(C));
    }, v = (C) => {
      if (!k.current) return;
      C.preventDefault();
      const z = C.currentTarget.getContext("2d");
      if (!z) return;
      const A = g(C);
      z.beginPath(), z.moveTo(_.current.x, _.current.y), z.lineTo(A.x, A.y), z.stroke(), _.current = A, m.current = !0;
    }, w = (C) => {
      k.current && (C.preventDefault(), k.current = !1, m.current && p());
    };
    return /* @__PURE__ */ L(
      "div",
      {
        "aria-disabled": u || void 0,
        className: [
          H0.wrapper,
          h,
          u ? H0.disabled : null
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ L("div", { className: H0.header, children: [
            /* @__PURE__ */ n("span", { className: H0.label, children: o }),
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: H0.clear,
                onClick: f,
                disabled: u,
                children: d
              }
            )
          ] }),
          /* @__PURE__ */ n(
            "canvas",
            {
              ref: b,
              role: "img",
              "aria-label": o,
              "aria-disabled": u || void 0,
              style: {
                width: a ? `${a}px` : void 0,
                height: `${i}px`
              },
              className: H0.canvas,
              onPointerDown: M,
              onPointerMove: v,
              onPointerUp: w,
              onPointerCancel: w
            }
          )
        ]
      }
    );
  }
), $9 = "_wrapper_dsvd2_1", N9 = "_trigger_dsvd2_7", O9 = "_list_dsvd2_35", S9 = "_row_dsvd2_44", A9 = "_name_dsvd2_59", H9 = "_size_dsvd2_68", j9 = "_progress_dsvd2_74", T9 = "_fill_dsvd2_82", V9 = "_status_dsvd2_99", D9 = "_remove_dsvd2_106", Ze = {
  wrapper: $9,
  trigger: N9,
  list: O9,
  row: S9,
  name: A9,
  size: H9,
  progress: j9,
  fill: T9,
  status: V9,
  remove: D9
};
function _2(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const d_ = I1(function({
  url: t,
  multiple: r = !1,
  parameterName: l = "files",
  auto: s = !0,
  headers: c,
  accept: d,
  maxFileCount: o = Number.POSITIVE_INFINITY,
  maxFileSize: a,
  chooseText: i = "Upload",
  children: u,
  onProgress: h,
  onComplete: x,
  onError: b
}, k) {
  const m = Q(null), [_, p] = W([]), f = Q(/* @__PURE__ */ new Map()), g = (z, A) => {
    p(
      (S) => S.map((O) => O.file.name === z ? { ...O, ...A } : O)
    );
  }, M = (z) => {
    if (!t) return;
    const A = new XMLHttpRequest();
    f.current.set(z.file.name, A);
    const S = new FormData();
    if (S.append(l, z.file), A.upload.addEventListener("progress", (O) => {
      if (!O.lengthComputable) return;
      const $ = Math.round(O.loaded / O.total * 100);
      g(z.file.name, { state: "uploading", progress: $ }), h?.(z.file.name, $);
    }), A.addEventListener("load", () => {
      A.status >= 200 && A.status < 300 ? (g(z.file.name, { state: "complete", progress: 100 }), x?.(z.file.name)) : (g(z.file.name, {
        state: "error",
        message: `HTTP ${A.status}`
      }), b?.(z.file.name, `HTTP ${A.status}`));
    }), A.addEventListener("error", () => {
      g(z.file.name, { state: "error", message: "Network error" }), b?.(z.file.name, "Network error");
    }), c)
      for (const [O, $] of Object.entries(c))
        A.setRequestHeader(O, $);
    A.open("POST", t), A.send(S), g(z.file.name, { state: "uploading", progress: 0 });
  }, v = (z) => {
    if (!z) return;
    const A = [...z], S = [];
    let O = Math.max(0, o - _.length);
    for (const y of A) {
      if (a != null && y.size > a) {
        b?.(
          y.name,
          `File too large (maximum ${_2(a)})`
        );
        continue;
      }
      if (O <= 0) {
        b?.(y.name, `Too many files (maximum ${o})`);
        continue;
      }
      O -= 1, S.push(y);
    }
    const $ = S.map((y) => ({
      file: y,
      state: "pending",
      progress: 0
    }));
    p((y) => [...y, ...$]), m.current && (m.current.value = ""), s && $.forEach(M);
  }, w = (z) => {
    f.current.get(z)?.abort(), f.current.delete(z), p((S) => S.filter((O) => O.file.name !== z));
  }, C = u ?? /* @__PURE__ */ L(
    "button",
    {
      type: "button",
      className: Ze.trigger,
      onClick: () => m.current?.click(),
      children: [
        /* @__PURE__ */ n(M1, { name: "upload", size: 14 }),
        i
      ]
    }
  );
  return Et(k, () => ({
    open: () => m.current?.click(),
    upload: () => _.forEach((z) => z.state === "pending" ? M(z) : null)
  })), /* @__PURE__ */ L("div", { className: Ze.wrapper, children: [
    C,
    /* @__PURE__ */ n(
      "input",
      {
        ref: m,
        type: "file",
        hidden: !0,
        multiple: r,
        accept: d,
        "data-testid": "upload-input",
        onChange: (z) => v(z.target.files)
      }
    ),
    !u && _.length > 0 && /* @__PURE__ */ n("ul", { className: Ze.list, children: _.map(({ file: z, state: A, progress: S, message: O }) => /* @__PURE__ */ L(
      "li",
      {
        className: Ze.row,
        "data-state": A,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ n("span", { className: Ze.name, children: z.name }),
          /* @__PURE__ */ n("span", { className: Ze.size, children: _2(z.size) }),
          /* @__PURE__ */ n(
            "span",
            {
              className: Ze.progress,
              role: "progressbar",
              "aria-label": `${z.name} upload progress`,
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": S,
              children: /* @__PURE__ */ n(
                "span",
                {
                  className: Ze.fill,
                  style: { width: `${S}%` }
                }
              )
            }
          ),
          /* @__PURE__ */ n("span", { className: Ze.status, role: "status", children: A === "uploading" ? "Uploading" : A === "complete" ? "Complete" : A === "error" ? O ?? "Failed" : "Pending" }),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Ze.remove,
              "aria-label": `Remove ${z.name}`,
              onClick: () => w(z.name),
              children: /* @__PURE__ */ n(M1, { name: "close", size: 14 })
            }
          )
        ]
      },
      z.name
    )) })
  ] });
}), E9 = "_zone_nl0bz_1", I9 = "_dragging_nl0bz_23", q9 = "_caption_nl0bz_28", P9 = "_browse_nl0bz_40", B9 = "_disabled_nl0bz_67", Y0 = {
  zone: E9,
  dragging: I9,
  caption: q9,
  browse: P9,
  disabled: B9
};
function R9(e, t) {
  return t ? t.split(",").some((r) => {
    if (r = r.trim(), !r) return !1;
    if (r.startsWith("."))
      return e.name.toLowerCase().endsWith(r.toLowerCase());
    if (r.endsWith("/*")) {
      const l = r.slice(0, -1);
      return e.type.startsWith(l);
    }
    return e.type === r;
  }) : !0;
}
const u_ = I1(
  function({
    accept: t,
    multiple: r = !1,
    onDrop: l,
    label: s = "Drop files here or browse",
    dragLabel: c = "Drop to attach",
    browseText: d = "Browse",
    disabled: o = !1,
    className: a
  }, i) {
    const u = Q(null), [h, x] = W(!1), b = (f) => {
      if (!f || f.length === 0) return;
      const g = [...f].filter((M) => R9(M, t ?? ""));
      g.length !== 0 && l?.(g);
    }, k = (f) => {
      o || (f.preventDefault(), x(!0));
    }, m = (f) => {
      o || (f.preventDefault(), f.dataTransfer.dropEffect = "copy", x(!0));
    }, _ = (f) => {
      o || f.currentTarget.contains(f.relatedTarget) || x(!1);
    }, p = (f) => {
      o || (f.preventDefault(), x(!1), b(f.dataTransfer.files));
    };
    return Et(i, () => ({
      open: () => u.current?.click()
    })), /* @__PURE__ */ L(
      "div",
      {
        role: "region",
        "aria-label": s,
        "aria-disabled": o || void 0,
        className: [
          Y0.zone,
          h ? Y0.dragging : null,
          o ? Y0.disabled : null,
          a
        ].filter(Boolean).join(" "),
        onDragEnter: k,
        onDragOver: m,
        onDragLeave: _,
        onDrop: p,
        children: [
          /* @__PURE__ */ n("p", { className: Y0.caption, children: h ? c : s }),
          !o && /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Y0.browse,
              onClick: () => u.current?.click(),
              children: d
            }
          ),
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
                b(f.target.files), f.target.value = "";
              }
            }
          )
        ]
      }
    );
  }
), F9 = "_root_1a92d_1", K9 = "_menubar_1a92d_5", W9 = "_horizontal_1a92d_15", Z9 = "_vertical_1a92d_20", U9 = "_itemWrapper_1a92d_25", G9 = "_item_1a92d_25", X9 = "_disabled_1a92d_61", Y9 = "_icon_1a92d_68", J9 = "_text_1a92d_75", Q9 = "_caret_1a92d_79", eu = "_hasChildren_1a92d_85", tu = "_submenu_1a92d_94", ru = "_submenuItem_1a92d_118", nu = "_flyout_1a92d_155", lu = "_hamburger_1a92d_175", ou = "_responsive_1a92d_198", au = "_mobileOpen_1a92d_207", Z1 = {
  root: F9,
  menubar: K9,
  horizontal: W9,
  vertical: Z9,
  itemWrapper: U9,
  item: G9,
  disabled: X9,
  icon: Y9,
  text: J9,
  caret: Q9,
  hasChildren: eu,
  submenu: tu,
  submenuItem: ru,
  flyout: nu,
  hamburger: lu,
  responsive: ou,
  mobileOpen: au
}, kt = D0(null);
function su(e, t) {
  if (!e || typeof window > "u") return !1;
  const r = window.location.hash.replace(/^#\/?/, ""), l = e.replace(/^#?\/?/, "");
  return t === "prefix" ? l === "" ? !1 : r === l || r.startsWith(`${l}/`) : r === l;
}
function cu(e, t, r, l, s) {
  const [c, d] = W(r), o = e ? t ?? !1 : c, a = I(
    (i) => {
      e || d(i), l?.(i);
    },
    [e, l]
  );
  return v1(() => {
    s > 0 && a(!1);
  }, [s]), [o, a];
}
function iu({
  icon: e,
  iconColor: t,
  image: r,
  imageAlt: l
}) {
  return r ? /* @__PURE__ */ n("span", { className: Z1.icon, "aria-hidden": "true", children: /* @__PURE__ */ n("img", { src: r, alt: l ?? "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ n(
    "span",
    {
      className: Z1.icon,
      "aria-hidden": "true",
      style: t ? { color: t } : void 0,
      children: /* @__PURE__ */ n(M1, { name: e, size: 16 })
    }
  ) : null;
}
function T2(e) {
  return ve(e) && e.type === V2;
}
function qt({
  itemKey: e,
  props: t
}) {
  const r = f0(kt);
  if (!r) throw new Error("MenuItem must be used inside <Menu>");
  const { text: l, value: s, path: c, disabled: d, template: o } = t, a = g1(
    () => lt.toArray(t.children).filter(ve),
    [t.children]
  ), i = a.length > 0, u = !!d, h = t.open !== void 0, [x, b] = cu(
    h,
    t.open,
    t.defaultOpen ?? !1,
    t.onOpenChange,
    r.closeSignal
  ), k = r.level === 0, m = Q(0), p = (k && !h ? r.openKey === e : null) ?? x, f = I(
    (V) => {
      k && !h ? r.setOpenKey(V ? e : null) : (b(V), k && r.setOpenKey(null));
    },
    [k, h, r, e, b]
  ), [, g] = W(0);
  v1(() => {
    if (!c) return;
    const V = () => g((j) => j + 1);
    return window.addEventListener("hashchange", V), () => window.removeEventListener("hashchange", V);
  }, [c]);
  const M = c && !i ? su(c, t.match) : !1, v = I(
    (V) => {
      if (u) {
        V.preventDefault();
        return;
      }
      const j = { text: l, value: s, path: c };
      [r.emit(j), t.onClick?.(j)].includes(!1) && V.preventDefault(), r.closeAll();
    },
    [u, l, s, c, r, t]
  ), w = I(() => {
    if (!u) {
      if (p && (Date.now() - m.current < 600 || !r.clickToOpen)) {
        m.current = 0;
        return;
      }
      f(!p);
    }
  }, [u, p, f, r.clickToOpen]), C = I(() => {
    !i || u || r.clickToOpen || (m.current = Date.now(), f(!0));
  }, [i, u, r.clickToOpen, f]), z = I(() => {
    r.clickToOpen || f(!1);
  }, [r.clickToOpen, f]), A = `${r.baseId}-submenu-${e}`, [S, O] = W(null);
  v1(() => {
    r.closeSignal > 0 && O(null);
  }, [r.closeSignal]);
  const $ = g1(
    () => ({
      baseId: r.baseId,
      flyout: r.flyout,
      clickToOpen: r.clickToOpen,
      level: r.level + 1,
      closeSignal: r.closeSignal,
      emit: r.emit,
      closeAll: r.closeAll,
      openKey: S,
      setOpenKey: O
    }),
    [r, S]
  ), y = i ? /* @__PURE__ */ n("span", { className: Z1.caret, "aria-hidden": "true", children: /* @__PURE__ */ n(
    M1,
    {
      name: r.flyout && !k ? "chevron-right" : "chevron-down",
      size: 10
    }
  ) }) : null, N = o ?? /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ n(
      iu,
      {
        icon: t.icon,
        iconColor: t.iconColor,
        image: t.image,
        imageAlt: t.imageAlt
      }
    ),
    /* @__PURE__ */ n("span", { className: Z1.text, children: l }),
    y
  ] });
  if (i) {
    let V = function(j) {
      const P = Array.from(j.currentTarget.children).map((e1) => e1.querySelector('[role="menuitem"]')).filter(
        (e1) => e1 != null && e1.getAttribute("aria-disabled") !== "true" && !e1.hasAttribute("disabled")
      ), E = document.activeElement, Z = E ? P.indexOf(E) : -1;
      j.key === "ArrowDown" ? (j.preventDefault(), j.stopPropagation(), (Z === -1 ? P[0] : P[(Z + 1) % P.length])?.focus()) : j.key === "ArrowUp" ? (j.preventDefault(), j.stopPropagation(), (Z === -1 ? P[P.length - 1] : P[(Z - 1 + P.length) % P.length])?.focus()) : j.key === "ArrowRight" ? E?.getAttribute("aria-haspopup") === "menu" && (j.preventDefault(), j.stopPropagation(), E.getAttribute("aria-expanded") !== "true" && E.click(), document.getElementById(
        E.getAttribute("aria-controls") ?? ""
      )?.querySelector('[role="menuitem"]')?.focus()) : (j.key === "ArrowLeft" || j.key === "Escape") && (j.preventDefault(), j.stopPropagation(), f(!1));
    };
    return /* @__PURE__ */ L(
      "div",
      {
        className: Z1.itemWrapper,
        onMouseEnter: r.clickToOpen ? void 0 : C,
        onMouseLeave: r.clickToOpen ? void 0 : z,
        "data-dx-menu-item": "",
        children: [
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              role: "menuitem",
              "data-top": k ? "true" : void 0,
              "data-index": e,
              "data-dx-menu-item": "",
              "aria-disabled": u || void 0,
              "aria-haspopup": "menu",
              "aria-expanded": p,
              "aria-controls": A,
              tabIndex: u ? -1 : 0,
              disabled: u,
              className: [
                Z1.item,
                u ? Z1.disabled : null,
                Z1.hasChildren
              ].filter(Boolean).join(" "),
              onClick: w,
              children: N
            }
          ),
          p ? /* @__PURE__ */ n(
            "div",
            {
              id: A,
              role: "menu",
              "aria-label": l,
              className: [
                Z1.submenu,
                r.flyout && !k ? Z1.flyout : null
              ].filter(Boolean).join(" "),
              "data-dx-menu-submenu": "",
              onKeyDown: V,
              children: /* @__PURE__ */ n(kt.Provider, { value: $, children: a.map(
                (j, P) => T2(j) ? /* @__PURE__ */ n(
                  qt,
                  {
                    itemKey: `${e}-${P}`,
                    props: j.props
                  },
                  `${e}-${P}`
                ) : (
                  // Separators / custom content (Radzen `<hr />` parity) render verbatim.
                  /* @__PURE__ */ n(Dt, { children: j }, `${e}-custom-${P}`)
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
    "aria-current": M ? "page" : void 0,
    tabIndex: u ? -1 : 0,
    "data-dx-menu-item": "",
    className: [Z1.submenuItem, u ? Z1.disabled : null].filter(Boolean).join(" "),
    onClick: v
  };
  return c && !u ? /* @__PURE__ */ n("div", { className: Z1.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ n("a", { href: c, target: t.target, ...T, children: N }) }) : /* @__PURE__ */ n("div", { className: Z1.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ n("button", { type: "button", disabled: u, ...T, children: N }) });
}
function V2(e) {
  if (!f0(kt)) throw new Error("MenuItem must be used inside <Menu>");
  return /* @__PURE__ */ n(qt, { itemKey: e.text, props: e });
}
function du({
  children: e,
  clickToOpen: t = !0,
  flyout: r = !1,
  responsive: l = !0,
  isContextMenu: s = !1,
  onClick: c,
  onClose: d,
  ariaLabel: o = "Menu",
  toggleAriaLabel: a = "Toggle menu",
  className: i,
  ...u
}) {
  const h = E1(), x = Q(null), b = Q(null), [k, m] = W(null), [_, p] = W(0), [f, g] = W(!1), M = Q(null), v = I(
    (S) => c?.(S),
    [c]
  ), w = I(() => {
    m(null), p((S) => S + 1);
  }, []);
  v1(() => {
    if (k == null) return;
    const S = (O) => {
      x.current && !x.current.contains(O.target) && w();
    };
    return document.addEventListener("mousedown", S), () => document.removeEventListener("mousedown", S);
  }, [k, w]), v1(() => {
    M.current != null && k === M.current && (document.getElementById(`${h}-submenu-${k}`)?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus(), M.current = null);
  }, [k, h]);
  const C = g1(
    () => ({
      baseId: h,
      flyout: r,
      clickToOpen: t,
      level: 0,
      closeSignal: _,
      emit: v,
      closeAll: w,
      openKey: k,
      setOpenKey: m
    }),
    [h, r, t, _, v, w, k]
  ), z = g1(
    () => lt.toArray(e).filter(ve),
    [e]
  ), A = (S) => {
    const O = b.current;
    if (!O) return;
    const $ = Array.from(O.children).map((T) => T.querySelector('[role="menuitem"]')).filter(
      (T) => T != null && !T.hasAttribute("disabled") && T.getAttribute("aria-disabled") !== "true"
    );
    if (k != null) {
      const T = document.getElementById(`${h}-submenu-${k}`);
      if (T) {
        const V = Array.from(
          T.querySelectorAll('[role="menuitem"]')
        ).filter(
          (E) => E.getAttribute("aria-disabled") !== "true" && !E.hasAttribute("disabled")
        ), j = document.activeElement, P = j ? V.indexOf(j) : -1;
        if (S.key === "ArrowDown") {
          S.preventDefault(), (P === -1 ? V[0] : V[(P + 1) % V.length])?.focus();
          return;
        }
        if (S.key === "ArrowUp") {
          S.preventDefault(), (P === -1 ? V[V.length - 1] : V[(P - 1 + V.length) % V.length])?.focus();
          return;
        }
        if (S.key === "Escape") {
          S.preventDefault(), w(), d?.(), O.querySelector(`[data-index="${k}"]`)?.focus();
          return;
        }
        if (S.key === "Enter" || S.key === " ") return;
      }
      if (S.key === "Escape") {
        S.preventDefault(), w(), d?.();
        return;
      }
    }
    const y = document.activeElement, N = y ? $.indexOf(y) : -1;
    if (S.key === "ArrowRight") {
      if (S.preventDefault(), $.length === 0) return;
      $[N === -1 ? 0 : (N + 1) % $.length]?.focus();
      return;
    }
    if (S.key === "ArrowLeft") {
      if (S.preventDefault(), $.length === 0) return;
      $[N === -1 ? $.length - 1 : (N - 1 + $.length) % $.length]?.focus();
      return;
    }
    if (S.key === "ArrowDown") {
      if (N >= 0) {
        const T = y?.getAttribute("data-index");
        if (T == null) return;
        O.querySelector(
          `[data-index="${T}"]`
        )?.getAttribute("aria-haspopup") === "menu" && (S.preventDefault(), M.current = T, m(T));
      }
      return;
    }
    if (S.key === "Home") {
      S.preventDefault(), $[0]?.focus();
      return;
    }
    if (S.key === "End") {
      S.preventDefault(), $[$.length - 1]?.focus();
      return;
    }
    if (S.key.length === 1 && !S.ctrlKey && !S.metaKey) {
      const T = $.map((j) => j.textContent ?? ""), V = N === -1 ? 0 : (N + 1) % $.length;
      for (let j = 0; j < $.length; j++) {
        const P = (V + j) % $.length;
        if (T[P]?.toLowerCase().startsWith(S.key.toLowerCase())) {
          S.preventDefault(), $[P]?.focus();
          break;
        }
      }
    }
  };
  return /* @__PURE__ */ L(
    "nav",
    {
      ref: x,
      "aria-label": o,
      className: [
        Z1.root,
        s ? Z1.vertical : Z1.horizontal,
        l ? Z1.responsive : null,
        l && f ? Z1.mobileOpen : null,
        r ? Z1.flyoutRoot : null,
        i
      ].filter(Boolean).join(" "),
      ...u,
      children: [
        l ? /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            "aria-label": a,
            "aria-expanded": f,
            className: Z1.hamburger,
            onClick: () => g((S) => !S),
            children: /* @__PURE__ */ n(M1, { name: "menu", size: 20 })
          }
        ) : null,
        /* @__PURE__ */ n(
          "div",
          {
            ref: b,
            role: s ? "menu" : "menubar",
            "aria-label": o,
            className: Z1.menubar,
            onKeyDown: A,
            children: /* @__PURE__ */ n(kt.Provider, { value: C, children: z.map(
              (S, O) => T2(S) ? /* @__PURE__ */ n(
                qt,
                {
                  itemKey: String(O),
                  props: S.props
                },
                `top-${O}`
              ) : /* @__PURE__ */ n(Dt, { children: S }, `top-custom-${O}`)
            ) })
          }
        )
      ]
    }
  );
}
const uu = "_popup_uiejp_1", hu = "_menu_uiejp_22", Tt = {
  popup: uu,
  menu: hu
}, D2 = D0(null);
function h_() {
  const e = f0(D2);
  if (!e)
    throw new Error("useContextMenu must be used inside <ContextMenuProvider>");
  return e;
}
function E2(e) {
  return e.map((t, r) => {
    const { children: l, ...s } = t;
    return /* @__PURE__ */ n(V2, { ...s, children: l ? E2(l) : void 0 }, `${t.text}-${r}`);
  });
}
function fu({ state: e, onClose: t }) {
  const r = Q(null), [l, s] = W({ left: e.x, top: e.y });
  Nt(() => {
    const d = r.current;
    if (!d) return;
    const o = d.getBoundingClientRect();
    s({
      left: Math.max(0, Math.min(e.x, window.innerWidth - o.width)),
      top: Math.max(0, Math.min(e.y, window.innerHeight - o.height))
    });
  }, [e.x, e.y, e.options]), v1(() => {
    r.current?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus();
  }, []);
  const c = I(
    (d) => {
      e.options.onClick?.(d);
    },
    [e.options]
  );
  return /* @__PURE__ */ n(
    "div",
    {
      ref: r,
      role: "presentation",
      "data-dx-contextmenu-popup": "",
      className: Tt.popup,
      style: { left: l.left, top: l.top },
      children: /* @__PURE__ */ n("div", { className: Tt.menu, children: e.options.content ?? /* @__PURE__ */ n(
        du,
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
function f_({ children: e }) {
  const [t, r] = W(null), l = I(() => {
    r((d) => (d?.invoker && document.body.contains(d.invoker) && d.invoker.focus({ preventScroll: !0 }), null));
  }, []), s = I(
    (d, o) => {
      d.preventDefault();
      const a = d.currentTarget ?? d.target;
      r({ x: d.clientX, y: d.clientY, invoker: a, options: o });
    },
    []
  );
  v1(() => {
    if (!t) return;
    const d = (u) => {
      const h = document.querySelector(`.${Tt.popup}`);
      h && !h.contains(u.target) && l();
    }, o = (u) => {
      u.key === "Escape" && (u.preventDefault(), l());
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
    t ? /* @__PURE__ */ n(fu, { state: t, onClose: l }) : null
  ] });
}
const pu = "_root_rgcia_1", mu = "_list_rgcia_9", _u = "_item_rgcia_14", vu = "_trigger_rgcia_18", gu = "_disabled_rgcia_45", ku = "_expanded_rgcia_52", yu = "_selected_rgcia_56", xu = "_icon_rgcia_61", bu = "_text_rgcia_72", Mu = "_caret_rgcia_79", Cu = "_open_rgcia_86", wu = "_submenu_rgcia_90", zu = "_iconOnly_rgcia_172", Lu = "_stacked_rgcia_201", ie = {
  root: pu,
  list: mu,
  item: _u,
  trigger: vu,
  disabled: gu,
  expanded: ku,
  selected: yu,
  icon: xu,
  text: bu,
  caret: Mu,
  open: Cu,
  submenu: wu,
  iconOnly: zu,
  stacked: Lu
}, yt = D0(null);
function $u() {
  return typeof window > "u" ? "" : window.location.hash.replace(/^#\/?/, "");
}
function Nu(e, t) {
  const r = $u(), l = e.replace(/^#?\/?/, "");
  return t === "prefix" ? l === "" ? !1 : l === "/" ? r === "" || r === "/" : r === l || r.startsWith(`${l}/`) : r === l;
}
function Ou({
  icon: e,
  iconColor: t,
  image: r
}) {
  return r ? /* @__PURE__ */ n("span", { className: ie.icon, "aria-hidden": "true", children: /* @__PURE__ */ n("img", { src: r, alt: "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ n(
    "span",
    {
      className: ie.icon,
      "aria-hidden": "true",
      style: t ? { color: t } : void 0,
      children: /* @__PURE__ */ n(M1, { name: e, size: 16 })
    }
  ) : null;
}
function Pt({
  itemKey: e,
  ancestors: t,
  props: r
}) {
  const l = f0(yt);
  if (!l) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  const { text: s, value: c, path: d, disabled: o } = r, a = g1(
    () => lt.toArray(r.children).filter(ve),
    [r.children]
  ), i = a.length > 0, u = !!o, h = r.match ?? l.match, x = r.expanded !== void 0, [b, k] = W(
    r.defaultExpanded ?? !1
  ), m = x ? r.expanded ?? !1 : b, _ = I(
    (E) => {
      x || k(E), r.onExpandedChange?.(E);
    },
    [x, r]
  );
  v1(() => {
    l.collapseSignal > 0 && !l.collapseSkipRef.current.has(e) && _(!1);
  }, [l.collapseSignal]);
  const p = r.onSelectedChange !== void 0 || r.selected !== void 0, [f, g] = W(
    r.defaultSelected ?? !1
  ), M = !p && d ? Nu(d, h) : !1, v = r.selected ?? (p ? f : M || f), [, w] = W(0);
  v1(() => {
    if (!d) return;
    const E = () => w((Z) => Z + 1);
    return window.addEventListener("hashchange", E), () => window.removeEventListener("hashchange", E);
  }, [d]);
  const C = g1(
    () => ({
      ...l,
      level: l.level + 1,
      openAncestors: () => {
        _(!0), l.openAncestors();
      }
    }),
    [l, _]
  );
  v1(() => {
    M && t.length > 0 && C.openAncestors();
  }, []);
  const z = I(
    (E) => {
      if (u) {
        E.preventDefault();
        return;
      }
      const Z = { text: s, value: c, path: d };
      [l.emit(Z), r.onClick?.(Z)].includes(!1) && E.preventDefault(), p || g(!0), r.onSelectedChange?.(!0);
    },
    [u, s, c, d, l, r, p]
  ), A = I(() => {
    u || (m || l.notifyOpened(e, t), _(!m));
  }, [u, m, l, e, t, _]), S = I(
    (E) => {
      E.key === "Enter" || E.key === " " ? (E.preventDefault(), i ? A() : E.target.click()) : E.key === "Escape" && m ? (E.preventDefault(), _(!1)) : E.key === "ArrowRight" && i && !m ? (E.preventDefault(), l.notifyOpened(e, t), _(!0)) : E.key === "ArrowLeft" && m && (E.preventDefault(), _(!1));
    },
    [i, A, m, _, l, e, t]
  ), O = i && l.showArrow ? /* @__PURE__ */ n(
    "span",
    {
      className: [ie.caret, m ? ie.open : null].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: /* @__PURE__ */ n(M1, { name: "chevron-down", size: 10 })
    }
  ) : null, $ = r.template ?? /* @__PURE__ */ L(b1, { children: [
    /* @__PURE__ */ n(
      Ou,
      {
        icon: r.icon,
        iconColor: r.iconColor,
        image: r.image,
        imageAlt: r.imageAlt
      }
    ),
    l.displayStyle === "icon" ? /* @__PURE__ */ n("span", { className: ie.text, "aria-label": s, children: r.icon || r.image ? null : s.slice(0, 1) }) : /* @__PURE__ */ n("span", { className: ie.text, children: s }),
    O
  ] }), y = `${l.baseId}-panel-${e}`, N = `${l.baseId}-trigger-${e}`, T = [
    ie.trigger,
    u ? ie.disabled : null,
    m ? ie.expanded : null,
    v ? ie.selected : null
  ].filter(Boolean).join(" "), V = l.level > 0 ? "menuitem" : void 0, j = i ? /* @__PURE__ */ n(
    "button",
    {
      type: "button",
      id: N,
      role: V,
      "aria-expanded": m,
      "aria-controls": y,
      "aria-disabled": u || void 0,
      disabled: u,
      tabIndex: u ? -1 : 0,
      className: T,
      onClick: A,
      onKeyDown: S,
      children: $
    }
  ) : d && !u ? /* @__PURE__ */ n(
    "a",
    {
      id: N,
      role: V,
      href: d,
      target: r.target,
      "aria-disabled": void 0,
      "aria-current": v ? "page" : void 0,
      tabIndex: 0,
      className: T,
      onClick: z,
      onKeyDown: S,
      children: $
    }
  ) : /* @__PURE__ */ n(
    "button",
    {
      type: "button",
      id: N,
      role: V,
      "aria-current": v ? "page" : void 0,
      "aria-disabled": u || void 0,
      disabled: u,
      tabIndex: u ? -1 : 0,
      className: T,
      onClick: z,
      onKeyDown: S,
      children: $
    }
  ), P = i ? l.renderMode === "server" && !m ? null : /* @__PURE__ */ n(
    "div",
    {
      id: y,
      role: "menu",
      "aria-labelledby": N,
      className: ie.submenu,
      hidden: l.renderMode === "client" && !m ? !0 : void 0,
      children: /* @__PURE__ */ n(yt.Provider, { value: C, children: a.map((E, Z) => /* @__PURE__ */ n(
        Pt,
        {
          itemKey: `${e}-${Z}`,
          ancestors: [...t, e],
          props: E.props
        },
        `${e}-${Z}`
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
        j,
        P
      ]
    }
  );
}
function p_(e) {
  if (!f0(yt)) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  return /* @__PURE__ */ n(Pt, { itemKey: e.text, ancestors: [], props: e });
}
function m_({
  children: e,
  multiple: t = !0,
  displayStyle: r = "iconAndText",
  showArrow: l = !0,
  match: s = "prefix",
  renderMode: c = "client",
  onClick: d,
  ariaLabel: o = "Panel menu",
  className: a,
  ...i
}) {
  const u = E1(), [h, x] = W(0), b = Q(/* @__PURE__ */ new Set()), k = I(
    (M) => d?.(M),
    [d]
  ), m = I(
    (M, v) => {
      t || (b.current = /* @__PURE__ */ new Set([M, ...v]), x((w) => w + 1));
    },
    [t]
  ), _ = (M) => Array.from(
    M.querySelectorAll('button, a[href], [role="menuitem"]')
  ).filter(
    (v) => !v.hasAttribute("disabled") && v.getAttribute("aria-disabled") !== "true" && v.closest("[hidden]") == null
  ), p = (M) => {
    if (!(M.key === "Enter" || M.key === " ")) {
      if (M.key === "ArrowDown" || M.key === "ArrowUp") {
        const v = M.target, w = _(M.currentTarget), C = w.indexOf(v);
        if (C === -1) return;
        M.preventDefault();
        const z = M.key === "ArrowDown" ? 1 : -1;
        w[(C + z + w.length) % w.length]?.focus();
      } else if (M.key === "Home" || M.key === "End") {
        const v = _(M.currentTarget);
        M.preventDefault(), (M.key === "Home" ? v[0] : v[v.length - 1])?.focus();
      }
    }
  }, f = g1(
    () => ({
      baseId: u,
      multiple: t,
      displayStyle: r,
      showArrow: l,
      renderMode: c,
      match: s,
      level: 0,
      collapseSignal: h,
      collapseSkipRef: b,
      emit: k,
      notifyOpened: m,
      openAncestors: () => {
      }
    }),
    [
      u,
      t,
      r,
      l,
      c,
      s,
      h,
      k,
      m
    ]
  ), g = g1(
    () => lt.toArray(e).filter(ve),
    [e]
  );
  return /* @__PURE__ */ n(
    "nav",
    {
      "aria-label": o,
      className: [
        ie.root,
        r === "icon" ? ie.iconOnly : null,
        r === "stacked" ? ie.stacked : null,
        a
      ].filter(Boolean).join(" "),
      onKeyDown: p,
      ...i,
      children: /* @__PURE__ */ n("div", { className: ie.list, role: "presentation", children: /* @__PURE__ */ n(yt.Provider, { value: f, children: g.map((M, v) => /* @__PURE__ */ n(
        Pt,
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
const Su = "_root_5numg_1", Au = "_trigger_5numg_7", Hu = "_defaultTrigger_5numg_40", ju = "_avatar_5numg_46", Tu = "_menu_5numg_58", Vu = "_item_5numg_74", Du = "_disabled_5numg_88", Eu = "_active_5numg_97", Iu = "_icon_5numg_107", qu = "_text_5numg_114", Ue = {
  root: Su,
  trigger: Au,
  defaultTrigger: Hu,
  avatar: ju,
  menu: Tu,
  item: Vu,
  disabled: Du,
  active: Eu,
  icon: Iu,
  text: qu
};
function __({
  items: e,
  trigger: t,
  onClick: r,
  ariaLabel: l = "Profile menu",
  className: s
}) {
  const c = E1(), d = `${c}-menu`, o = Q(null), a = Q(null), [i, u] = W(!1), [h, x] = W(-1), b = t, k = e.map((v, w) => v.disabled ? -1 : w).filter((v) => v >= 0), m = I(
    (v) => {
      if (v.disabled) return;
      const w = {
        text: v.text,
        path: v.path
      };
      r?.(w), u(!1), a.current?.focus();
    },
    [r]
  ), _ = I(() => {
    x(k[0] ?? -1), u(!0);
  }, [k]), p = I(() => {
    u(!1), x(-1), a.current?.focus();
  }, []);
  v1(() => {
    if (!i) return;
    const v = (w) => {
      o.current && !o.current.contains(w.target) && (u(!1), x(-1));
    };
    return document.addEventListener("mousedown", v), () => document.removeEventListener("mousedown", v);
  }, [i]), v1(() => {
    if (!i) return;
    const v = (w) => {
      w.key === "Escape" && (w.preventDefault(), p());
    };
    return document.addEventListener("keydown", v), () => document.removeEventListener("keydown", v);
  }, [i, p]);
  const f = (v) => {
    if (k.length === 0) return;
    const w = k.indexOf(h), C = w === -1 ? 0 : (w + v + k.length) % k.length, z = k[C];
    z != null && x(z);
  }, g = (v) => {
    if (!i) {
      (v.key === "ArrowDown" || v.key === "Enter" || v.key === " ") && (v.preventDefault(), _());
      return;
    }
    switch (v.key) {
      case "Escape":
        v.preventDefault(), p();
        break;
      case "ArrowDown":
        v.preventDefault(), f(1);
        break;
      case "ArrowUp":
        v.preventDefault(), f(-1);
        break;
      case "Home":
        v.preventDefault(), k[0] != null && x(k[0]);
        break;
      case "End":
        v.preventDefault(), k[k.length - 1] != null && x(k[k.length - 1]);
        break;
      case "Enter":
      case " ":
        if (v.preventDefault(), h >= 0) {
          const w = e[h];
          w && !w.disabled && m(w);
        }
        break;
      case "Tab":
        u(!1), x(-1);
        break;
    }
  }, M = (v) => {
    switch (v.key) {
      case "ArrowDown":
        v.preventDefault(), f(1);
        break;
      case "ArrowUp":
        v.preventDefault(), f(-1);
        break;
      case "Home":
        v.preventDefault(), k[0] != null && x(k[0]);
        break;
      case "End":
        v.preventDefault(), k[k.length - 1] != null && x(k[k.length - 1]);
        break;
      case "Enter":
      case " ":
        if (v.preventDefault(), h >= 0) {
          const w = e[h];
          w && !w.disabled && m(w);
        }
        break;
      case "Escape":
        v.preventDefault(), p();
        break;
      case "Tab":
        u(!1), x(-1);
        break;
    }
  };
  return /* @__PURE__ */ n(
    "div",
    {
      ref: o,
      className: [Ue.root, s].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ L("nav", { "aria-label": l, children: [
        /* @__PURE__ */ n(
          "button",
          {
            ref: a,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": i,
            "aria-controls": d,
            "aria-label": l,
            className: Ue.trigger,
            onClick: () => i ? p() : _(),
            onKeyDown: g,
            children: b ?? /* @__PURE__ */ L("span", { className: Ue.defaultTrigger, children: [
              /* @__PURE__ */ n("span", { className: Ue.avatar, "aria-hidden": "true", children: "●" }),
              /* @__PURE__ */ n("span", { children: "Profile" })
            ] })
          }
        ),
        i ? /* @__PURE__ */ n(
          "div",
          {
            id: d,
            role: "menu",
            "aria-label": l,
            "aria-activedescendant": h >= 0 ? `${c}-item-${h}` : void 0,
            className: Ue.menu,
            onKeyDown: M,
            tabIndex: -1,
            children: e.map((v, w) => {
              const C = !!v.disabled, z = w === h;
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
                    C || m(v);
                  },
                  onMouseEnter: () => {
                    C || x(w);
                  },
                  children: [
                    v.icon ? /* @__PURE__ */ n("span", { className: Ue.icon, "aria-hidden": "true", children: v.icon }) : null,
                    /* @__PURE__ */ n("span", { className: Ue.text, children: v.text })
                  ]
                },
                `${v.text}-${w}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const Pu = "_root_vv0xs_1", Bu = "_bottomRight_vv0xs_11", Ru = "_bottomLeft_vv0xs_16", Fu = "_topRight_vv0xs_21", Ku = "_topLeft_vv0xs_26", Wu = "_menu_vv0xs_31", Zu = "_itemWrapper_vv0xs_48", Uu = "_tooltip_vv0xs_54", Gu = "_main_vv0xs_76", Xu = "_mainIcon_vv0xs_104", Yu = "_mainOpen_vv0xs_109", Ju = "_item_vv0xs_48", Qu = "_disabled_vv0xs_141", eh = "_itemIcon_vv0xs_148", xe = {
  root: Pu,
  bottomRight: Bu,
  bottomLeft: Ru,
  topRight: Fu,
  topLeft: Ku,
  menu: Wu,
  itemWrapper: Zu,
  tooltip: Uu,
  main: Gu,
  mainIcon: Xu,
  mainOpen: Yu,
  item: Ju,
  disabled: Qu,
  itemIcon: eh
};
function v_({
  items: e,
  position: t,
  icon: r = "+",
  onClick: l,
  ariaLabel: s = "Open menu",
  className: c
}) {
  const d = t ?? "bottom-right", a = `${E1()}-menu`, i = Q(null), u = Q(null), [h, x] = W(!1), b = I(
    (p) => {
      if (p.disabled) return;
      const f = { text: p.text, value: p.value };
      l?.(f), x(!1), u.current?.focus();
    },
    [l]
  );
  v1(() => {
    if (!h) return;
    const p = (f) => {
      i.current && !i.current.contains(f.target) && x(!1);
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, [h]), v1(() => {
    if (!h) return;
    const p = (f) => {
      f.key === "Escape" && (x(!1), u.current?.focus());
    };
    return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [h]);
  const k = d === "bottom-right" ? xe.bottomRight : d === "bottom-left" ? xe.bottomLeft : d === "top-right" ? xe.topRight : xe.topLeft, m = (p) => {
    !h && (p.key === "Enter" || p.key === " " || p.key === "ArrowDown" || p.key === "ArrowUp") ? (p.preventDefault(), x(!0)) : h && p.key === "Escape" && (p.preventDefault(), x(!1));
  }, _ = (p) => {
    p.key === "Escape" && (p.preventDefault(), x(!1), u.current?.focus());
  };
  return /* @__PURE__ */ L(
    "div",
    {
      ref: i,
      className: [xe.root, k, c].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        h ? /* @__PURE__ */ n(
          "div",
          {
            id: a,
            role: "menu",
            "aria-label": s,
            className: xe.menu,
            onKeyDown: _,
            children: e.map((p, f) => {
              const g = !!p.disabled;
              return /* @__PURE__ */ L("div", { className: xe.itemWrapper, children: [
                /* @__PURE__ */ n("span", { className: xe.tooltip, "aria-hidden": "true", children: p.text }),
                /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": p.text,
                    "aria-disabled": g || void 0,
                    title: p.text,
                    disabled: g,
                    tabIndex: g ? -1 : 0,
                    className: [xe.item, g ? xe.disabled : null].filter(Boolean).join(" "),
                    onClick: () => b(p),
                    children: /* @__PURE__ */ n("span", { className: xe.itemIcon, "aria-hidden": "true", children: p.icon ?? "•" })
                  }
                )
              ] }, `${p.text}-${f}`);
            })
          }
        ) : null,
        /* @__PURE__ */ n(
          "button",
          {
            ref: u,
            type: "button",
            className: xe.main,
            "aria-haspopup": "menu",
            "aria-expanded": h,
            "aria-controls": a,
            "aria-label": s,
            onClick: () => x((p) => !p),
            onKeyDown: m,
            children: /* @__PURE__ */ n(
              "span",
              {
                "aria-hidden": "true",
                className: [xe.mainIcon, h ? xe.mainOpen : null].filter(Boolean).join(" "),
                children: r
              }
            )
          }
        )
      ]
    }
  );
}
const th = "_root_1eyur_1", rh = "_list_1eyur_5", nh = "_item_1eyur_15", lh = "_link_1eyur_22", oh = "_linkButton_1eyur_23", ah = "_current_1eyur_24", sh = "_disabled_1eyur_68", ch = "_icon_1eyur_74", ih = "_text_1eyur_81", dh = "_separator_1eyur_85", K1 = {
  root: th,
  list: rh,
  item: nh,
  link: lh,
  linkButton: oh,
  current: ah,
  disabled: sh,
  icon: ch,
  text: ih,
  separator: dh
};
function g_({
  items: e,
  onClick: t,
  ariaLabel: r = "Breadcrumb",
  className: l
}) {
  const s = t, c = (d) => {
    d.disabled || s?.({ text: d.text, path: d.path });
  };
  return /* @__PURE__ */ n(
    "nav",
    {
      "aria-label": r,
      className: [K1.root, l].filter(Boolean).join(" "),
      children: /* @__PURE__ */ n("ol", { className: K1.list, children: e.map((d, o) => {
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
                d.icon ? /* @__PURE__ */ n("span", { className: K1.icon, "aria-hidden": "true", children: d.icon }) : null,
                d.text
              ]
            }
          ) : d.path ? /* @__PURE__ */ L(
            "a",
            {
              href: d.path,
              className: K1.link,
              "aria-current": "page",
              onClick: (u) => {
                u.preventDefault(), c(d);
              },
              children: [
                d.icon ? /* @__PURE__ */ n("span", { className: K1.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ n("span", { className: K1.text, children: d.text })
              ]
            }
          ) : /* @__PURE__ */ L(
            "span",
            {
              className: K1.current,
              "aria-current": "page",
              tabIndex: 0,
              children: [
                d.icon ? /* @__PURE__ */ n("span", { className: K1.icon, "aria-hidden": "true", children: d.icon }) : null,
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
                d.icon ? /* @__PURE__ */ n("span", { className: K1.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ n("span", { className: K1.text, children: d.text })
              ]
            }
          ) : d.path ? /* @__PURE__ */ L(
            "a",
            {
              href: d.path,
              className: K1.link,
              onClick: (u) => {
                u.preventDefault(), c(d);
              },
              children: [
                d.icon ? /* @__PURE__ */ n("span", { className: K1.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ n("span", { className: K1.text, children: d.text })
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
                d.icon ? /* @__PURE__ */ n("span", { className: K1.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ n("span", { className: K1.text, children: d.text })
              ]
            }
          ),
          a ? null : /* @__PURE__ */ n("span", { className: K1.separator, "aria-hidden": "true", children: "/" })
        ] }, `${d.text}-${o}`);
      }) })
    }
  );
}
const uh = "_link_tmy3k_1", hh = {
  link: uh
}, k_ = I1(function({ children: t, icon: r, visible: l = !0, className: s, ...c }, d) {
  if (l === !1) return null;
  const o = /* @__PURE__ */ L(b1, { children: [
    r != null && /* @__PURE__ */ n(M1, { name: r, "aria-hidden": "true" }),
    t
  ] }), a = [hh.link, s].filter(Boolean).join(" ");
  if (c.href != null) {
    const { href: u, ...h } = c;
    return /* @__PURE__ */ n(
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
  return /* @__PURE__ */ n(
    "button",
    {
      ref: d,
      type: "button",
      className: a,
      ...c,
      children: o
    }
  );
}), fh = "_root_dnkuu_1", ph = "_list_dnkuu_5", mh = "_item_dnkuu_15", _h = "_connector_dnkuu_21", vh = "_connectorCompleted_dnkuu_30", gh = "_step_dnkuu_34", kh = "_active_dnkuu_69", yh = "_completed_dnkuu_75", xh = "_circle_dnkuu_79", bh = "_check_dnkuu_109", Mh = "_icon_dnkuu_114", Ch = "_number_dnkuu_119", wh = "_text_dnkuu_124", be = {
  root: fh,
  list: ph,
  item: mh,
  connector: _h,
  connectorCompleted: vh,
  step: gh,
  active: kh,
  completed: yh,
  circle: xh,
  check: bh,
  icon: Mh,
  number: Ch,
  text: wh
};
function y_({
  items: e,
  selectedIndex: t,
  SelectedIndex: r,
  defaultIndex: l = 0,
  linear: s,
  Linear: c,
  onChange: d,
  Change: o,
  onSelectedIndexChange: a,
  ariaLabel: i = "Steps",
  className: u
}) {
  const h = s ?? c ?? !1, x = t ?? r, b = x !== void 0, [k, m] = W(() => Math.min(Math.max(0, x ?? l), Math.max(0, e.length - 1))), p = Math.min(
    Math.max(0, b ? x : k),
    Math.max(0, e.length - 1)
  ), f = Q(null), g = I(
    (w) => {
      const C = Math.min(
        Math.max(0, w),
        Math.max(0, e.length - 1)
      );
      b || m(C), (d ?? o ?? a)?.(C);
    },
    [b, d, o, a, e.length]
  ), M = I(
    (w, C) => !!(C.disabled || h && w > p + 1),
    [h, p]
  ), v = (w) => {
    const C = Array.from(
      w.currentTarget.querySelectorAll("button[data-step]")
    ).filter((S) => S.getAttribute("aria-disabled") !== "true" && !S.disabled), z = document.activeElement, A = z ? C.indexOf(z) : -1;
    if (w.key === "ArrowRight" || w.key === "ArrowDown") {
      if (w.preventDefault(), C.length === 0) return;
      const S = A === -1 ? 0 : (A + 1) % C.length, O = C[S];
      O && O.focus();
    } else if (w.key === "ArrowLeft" || w.key === "ArrowUp") {
      if (w.preventDefault(), C.length === 0) return;
      const S = A === -1 ? C.length - 1 : (A - 1 + C.length) % C.length, O = C[S];
      O && O.focus();
    } else w.key === "Home" ? (w.preventDefault(), C[0]?.focus()) : w.key === "End" && (w.preventDefault(), C[C.length - 1]?.focus());
  };
  return /* @__PURE__ */ n(
    "nav",
    {
      "aria-label": i,
      className: [be.root, u].filter(Boolean).join(" "),
      onKeyDown: v,
      children: /* @__PURE__ */ n("ol", { ref: f, role: "list", className: be.list, children: e.map((w, C) => {
        const z = C === p, A = C < p, S = M(C, w);
        return /* @__PURE__ */ L(
          "li",
          {
            role: "listitem",
            className: be.item,
            children: [
              C > 0 ? /* @__PURE__ */ n(
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
                  "aria-disabled": S ? "true" : void 0,
                  disabled: S,
                  tabIndex: S ? -1 : 0,
                  className: [
                    be.step,
                    z ? be.active : null,
                    A ? be.completed : null,
                    S ? be.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    S || g(C);
                  },
                  children: [
                    /* @__PURE__ */ n("span", { className: be.circle, "aria-hidden": "true", children: A ? /* @__PURE__ */ n("span", { className: be.check, "aria-hidden": "true", children: /* @__PURE__ */ n(M1, { name: "check", size: "sm" }) }) : w.icon ? /* @__PURE__ */ n("span", { className: be.icon, children: w.icon }) : /* @__PURE__ */ n("span", { className: be.number, children: C + 1 }) }),
                    /* @__PURE__ */ n("span", { className: be.text, children: w.text })
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
const zh = "_root_12hod_1", Lh = "_horizontal_12hod_13", $h = "_vertical_12hod_17", Nh = "_pane_12hod_21", Oh = "_handle_12hod_31", Sh = "_handleHorizontal_12hod_51", Ah = "_handleVertical_12hod_57", Hh = "_handleGrip_12hod_63", jh = "_handleCollapseHint_12hod_75", Th = "_collapseBtn_12hod_79", Vh = "_collapseBtnCollapsed_12hod_109", je = {
  root: zh,
  horizontal: Lh,
  vertical: $h,
  pane: Nh,
  handle: Oh,
  handleHorizontal: Sh,
  handleVertical: Ah,
  handleGrip: Hh,
  handleCollapseHint: jh,
  collapseBtn: Th,
  collapseBtnCollapsed: Vh
};
function J0(e, t) {
  if (!e) return t;
  const r = e.trim();
  if (r.endsWith("%")) {
    const s = parseFloat(r.slice(0, -1));
    return Number.isNaN(s) ? t : s;
  }
  if (r.endsWith("px")) {
    const s = parseFloat(r.slice(0, -2));
    return Number.isNaN(s) ? t : s;
  }
  const l = parseFloat(r);
  return Number.isNaN(l) ? t : l;
}
function r0(e, t, r) {
  return Math.min(r, Math.max(t, e));
}
function x_({
  orientation: e,
  Orientation: t,
  panes: r,
  onResize: l,
  Resize: s,
  onCollapse: c,
  Collapse: d,
  ariaLabel: o = "Splitter",
  className: a
}) {
  const i = e ?? t ?? "horizontal", u = i === "horizontal", h = Q(null), x = I(() => {
    const y = r.length;
    if (y === 0) return [];
    const N = r.map((V) => V.size ? J0(V.size, 100 / y) : 100 / y), T = N.reduce((V, j) => V + j, 0);
    return Math.abs(T - 100) > 0.01 && T > 0 ? N.map((V) => V / T * 100) : N;
  }, [r]), [b, k] = W(() => x()), [m, _] = W(
    () => r.map((y) => !!y.collapsed)
  ), p = Q(b);
  v1(() => {
    _(r.map((y) => !!y.collapsed));
  }, [r]);
  const f = I(
    () => r.map((y) => J0(y.min, 0)),
    [r]
  ), g = I(
    () => r.map((y) => J0(y.max, 100)),
    [r]
  ), M = I(
    (y, N) => {
      const T = { paneIndex: y, newSize: N, cancel: !1 };
      return (l ?? s)?.(T), !T.cancel;
    },
    [l, s]
  ), v = I(
    (y, N) => {
      const T = { paneIndex: y, collapse: N, cancel: !1 };
      return (c ?? d)?.(T), !T.cancel;
    },
    [c, d]
  ), w = I(
    (y) => {
      const N = !m[y];
      v(y, N) && (N ? (p.current = [...b], _((T) => {
        const V = [...T];
        return V[y] !== void 0 && (V[y] = !0), V;
      }), k((T) => {
        const V = [...T], j = V[y] ?? 0, P = y < V.length - 1 ? y + 1 : y - 1;
        if (P >= 0 && P < V.length) {
          const E = V[P] ?? 0;
          V[P] = E + j, V[y] = 0;
        } else
          V[y] = 0;
        return V;
      })) : (_((T) => {
        const V = [...T];
        return V[y] !== void 0 && (V[y] = !1), V;
      }), k(() => {
        const T = [...p.current];
        return T.length !== r.length ? r.map(() => 100 / r.length) : T;
      })));
    },
    [m, b, r.length, v]
  ), C = Q(
    null
  ), z = I(
    (y, N, T) => {
      const V = h.current;
      if (!V) return null;
      const j = V.getBoundingClientRect();
      let P;
      if (u) {
        if (j.width === 0) return null;
        P = (N - j.left) / j.width * 100;
      } else {
        if (j.height === 0) return null;
        P = (T - j.top) / j.height * 100;
      }
      let E = 0;
      for (let e1 = 0; e1 < y; e1++) {
        const X = b[e1];
        X !== void 0 && (E += X);
      }
      return P - E;
    },
    [u, b]
  ), A = (y, N) => {
    N.preventDefault();
    const T = N.currentTarget;
    T.focus(), typeof T.setPointerCapture == "function" && T.setPointerCapture(N.pointerId), C.current = { handleIndex: y, pointerId: N.pointerId };
  }, S = (y) => {
    if (!C.current || C.current.pointerId !== y.pointerId)
      return;
    y.preventDefault();
    const N = C.current.handleIndex, T = z(N, y.clientX, y.clientY);
    if (T == null) return;
    const V = f(), j = g(), P = V[N] ?? 0, E = j[N] ?? 100, Z = N + 1, e1 = V[Z] ?? 0, X = j[Z] ?? 100, m1 = b[N] ?? 0, d1 = b[Z] ?? 0, l1 = m1 + d1;
    if (l1 <= 0) return;
    let R = r0(T, P, E), c1 = l1 - R;
    if (c1 < e1) {
      if (c1 = e1, R = l1 - c1, R < P || R > E) return;
    } else if (c1 > X && (c1 = X, R = l1 - c1, R < P || R > E))
      return;
    R = r0(R, P, E), c1 = l1 - R, M(N, R) && k((n1) => {
      const u1 = [...n1];
      return u1[N] = R, u1[Z] = c1, u1;
    });
  }, O = (y) => {
    !C.current || C.current.pointerId !== y.pointerId || (C.current = null);
  }, $ = (y, N) => {
    const T = f(), V = g(), j = y, P = y + 1, E = b[j] ?? 0, Z = b[P] ?? 0, e1 = E + Z;
    let X = 0;
    const m1 = !!r[j]?.collapsible, d1 = !!r[P]?.collapsible;
    if (u ? N.key === "ArrowLeft" ? X = -5 : N.key === "ArrowRight" && (X = 5) : N.key === "ArrowUp" ? X = -5 : N.key === "ArrowDown" && (X = 5), N.key === "Home") {
      N.preventDefault();
      let l1 = T[j] ?? 0, R = e1 - l1;
      if (R = r0(
        R,
        T[P] ?? 0,
        V[P] ?? 100
      ), l1 = e1 - R, l1 = r0(l1, T[j] ?? 0, V[j] ?? 100), !M(j, l1)) return;
      k((c1) => {
        const n1 = [...c1];
        return n1[j] = l1, n1[P] = R, n1;
      });
      return;
    }
    if (N.key === "End") {
      N.preventDefault();
      let l1 = V[j] ?? 100;
      l1 = Math.min(l1, e1 - (T[P] ?? 0));
      let R = e1 - l1;
      if (R = r0(
        R,
        T[P] ?? 0,
        V[P] ?? 100
      ), l1 = e1 - R, l1 = r0(l1, T[j] ?? 0, V[j] ?? 100), !M(j, l1)) return;
      k((c1) => {
        const n1 = [...c1];
        return n1[j] = l1, n1[P] = R, n1;
      });
      return;
    }
    if ((N.key === "Enter" || N.key === " ") && (m1 || d1)) {
      N.preventDefault(), w(m1 ? j : P);
      return;
    }
    if (X !== 0) {
      N.preventDefault();
      let l1 = E + X, R = e1 - l1;
      const c1 = T[j] ?? 0, n1 = V[j] ?? 100, u1 = T[P] ?? 0, o1 = V[P] ?? 100;
      if (l1 = r0(l1, c1, n1), R = e1 - l1, (R < u1 || R > o1) && (R = r0(R, u1, o1), l1 = e1 - R, l1 = r0(l1, c1, n1), R = e1 - l1), !M(j, l1)) return;
      k((w1) => {
        const L1 = [...w1];
        return L1[j] = l1, L1[P] = R, L1;
      });
    }
  };
  return /* @__PURE__ */ n(
    "div",
    {
      ref: h,
      className: [
        je.root,
        u ? je.horizontal : je.vertical,
        a
      ].filter(Boolean).join(" "),
      "aria-label": o,
      children: r.map((y, N) => {
        const T = !!m[N], V = T ? 0 : b[N] ?? 100 / r.length, j = T ? { display: "none" } : u ? {
          flexBasis: `${V}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        } : {
          flexBasis: `${V}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        }, P = J0(y.min, 0), E = J0(y.max, 100), Z = N < r.length - 1, e1 = !!r[N + 1]?.collapsible;
        return /* @__PURE__ */ L("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ L(
            "div",
            {
              role: "group",
              "aria-label": y.label ?? `Pane ${N + 1}`,
              className: je.pane,
              style: j,
              "data-collapsed": T ? "true" : void 0,
              children: [
                T ? null : y.children,
                y.collapsible && !T ? /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    className: je.collapseBtn,
                    "aria-label": `Collapse pane ${N + 1}`,
                    "aria-expanded": !T,
                    onClick: () => w(N),
                    children: u ? "◀" : "▲"
                  }
                ) : null,
                y.collapsible && T ? /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    className: je.collapseBtn,
                    "aria-label": `Expand pane ${N + 1}`,
                    "aria-expanded": !T,
                    onClick: () => w(N),
                    children: u ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          T && y.collapsible ? (
            // when collapsed we already rendered expand button inside pane, but pane is display none, so render expand button outside?
            // Actually we hide pane with display none, need visible expand button
            // So render alternative expand button adjacent
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: je.collapseBtnCollapsed,
                "aria-label": `Expand pane ${N + 1}`,
                "aria-expanded": "false",
                onClick: () => w(N),
                children: u ? "▶" : "▼"
              }
            )
          ) : null,
          Z ? /* @__PURE__ */ L(
            "div",
            {
              role: "separator",
              "aria-orientation": i,
              "aria-valuemin": P,
              "aria-valuemax": E,
              "aria-valuenow": Math.round(V),
              "aria-label": `Resize handle ${N + 1}`,
              tabIndex: T || m[N + 1] ? -1 : 0,
              className: [
                je.handle,
                u ? je.handleHorizontal : je.handleVertical
              ].filter(Boolean).join(" "),
              onPointerDown: (X) => A(N, X),
              onPointerMove: S,
              onPointerUp: O,
              onKeyDown: (X) => $(N, X),
              children: [
                /* @__PURE__ */ n("span", { className: je.handleGrip, "aria-hidden": "true" }),
                (y.collapsible || e1) && /* @__PURE__ */ n(
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
const Dh = "_root_1w3wd_1", Eh = "_list_1w3wd_5", Ih = "_vertical_1w3wd_14", qh = "_horizontal_1w3wd_20", Ph = "_item_1w3wd_28", Bh = "_link_1w3wd_32", Rh = "_active_1w3wd_57", j0 = {
  root: Dh,
  list: Eh,
  vertical: Ih,
  horizontal: qh,
  item: Ph,
  link: Bh,
  active: Rh
};
function b_({
  items: e,
  selector: t,
  Selector: r,
  orientation: l,
  Orientation: s,
  onClick: c,
  Click: d,
  ariaLabel: o = "Table of contents",
  className: a
}) {
  const i = t ?? r, u = l ?? s ?? "vertical", [h, x] = W(
    () => e[0]?.selector ?? null
  ), b = Q(h);
  b.current = h;
  const k = I(
    (m, _) => {
      if (x(m.selector), (c ?? d)?.({ text: m.text, selector: m.selector }), _) {
        try {
          _.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        } catch {
          _.scrollIntoView();
        }
        const f = _;
        f.getAttribute("tabindex") == null && f.tabIndex === -1 || f.tabIndex < 0 ? (f.getAttribute("tabindex"), f.setAttribute("tabindex", "-1"), f.focus({ preventScroll: !0 })) : f.focus({ preventScroll: !0 });
      }
    },
    [c, d]
  );
  return v1(() => {
    if (e.length === 0) return;
    const _ = (() => {
      if (i) {
        const v = document.querySelector(i);
        if (v) return v;
      }
      return window;
    })();
    let p = null;
    const f = /* @__PURE__ */ new Map(), g = () => {
      let v = null, w = null;
      for (const z of e) {
        const A = document.querySelector(z.selector);
        if (!A) continue;
        f.set(z.selector, A);
        const S = A.getBoundingClientRect();
        let O = S.top;
        if (_ !== window) {
          const $ = _.getBoundingClientRect();
          O = S.top - $.top;
        }
        O <= 80 ? (!w || O > w.el.getBoundingClientRect().top - (_ !== window ? _.getBoundingClientRect().top : 0)) && (w = { sel: z.selector, el: A }) : (!v || O < v.top) && (v = { sel: z.selector, top: O });
      }
      const C = w?.sel ?? v?.sel ?? e[0]?.selector ?? null;
      C && C !== b.current && x(C);
    }, M = () => {
      g();
    };
    if (typeof IntersectionObserver < "u") {
      const v = _ === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
        root: _,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      };
      p = new IntersectionObserver((w) => {
        const C = w.filter((z) => z.isIntersecting).sort((z, A) => z.boundingClientRect.top - A.boundingClientRect.top);
        if (C[0]) {
          const z = C[0].target;
          for (const A of e) {
            if (document.querySelector(A.selector) === z) {
              x(A.selector);
              break;
            }
            if (A.selector.startsWith("#") && z.id === A.selector.slice(1)) {
              x(A.selector);
              break;
            }
          }
        } else
          g();
      }, v);
      for (const w of e) {
        const C = document.querySelector(w.selector);
        C && (p.observe(C), f.set(w.selector, C));
      }
    }
    return _ === window ? (window.addEventListener("scroll", M, { passive: !0 }), g(), () => {
      window.removeEventListener("scroll", M), p?.disconnect();
    }) : (_.addEventListener("scroll", M, {
      passive: !0
    }), g(), () => {
      _.removeEventListener("scroll", M), p?.disconnect();
    });
  }, [e, i]), /* @__PURE__ */ n(
    "nav",
    {
      "aria-label": o,
      className: [j0.root, j0[u], a].filter(Boolean).join(" "),
      children: /* @__PURE__ */ n("ol", { className: j0.list, children: e.map((m) => {
        const _ = m.selector === h;
        return /* @__PURE__ */ n("li", { className: j0.item, children: /* @__PURE__ */ n(
          "a",
          {
            href: m.selector.startsWith("#") || m.selector.startsWith(".") ? m.selector : `#${m.selector}`,
            className: [j0.link, _ ? j0.active : null].filter(Boolean).join(" "),
            "aria-current": _ ? "location" : void 0,
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
const Fh = "_root_1bfit_1", Kh = "_viewport_1bfit_17", Wh = "_slide_1bfit_24", Zh = "_active_1bfit_33", Uh = "_arrow_1bfit_37", Gh = "_prev_1bfit_71", Xh = "_next_1bfit_75", Yh = "_pauseBtn_1bfit_79", Jh = "_indicators_1bfit_110", Qh = "_indicator_1bfit_110", ef = "_indicatorActive_1bfit_145", Te = {
  root: Fh,
  viewport: Kh,
  slide: Wh,
  active: Zh,
  arrow: Uh,
  prev: Gh,
  next: Xh,
  pauseBtn: Yh,
  indicators: Jh,
  indicator: Qh,
  indicatorActive: ef
};
function M_({
  items: e,
  selectedIndex: t,
  SelectedIndex: r,
  defaultIndex: l = 0,
  auto: s,
  Auto: c,
  interval: d,
  Interval: o,
  pauseOnHover: a,
  PauseOnHover: i,
  showArrows: u,
  ShowArrows: h,
  showIndicators: x,
  ShowIndicators: b,
  onChange: k,
  Change: m,
  ariaLabel: _ = "Carousel",
  className: p
}) {
  const f = t ?? r, g = f !== void 0, [M, v] = W(() => Math.min(Math.max(0, f ?? l), Math.max(0, e.length - 1))), w = g ? f : M, C = e.length === 0 ? 0 : Math.min(Math.max(0, w), e.length - 1), z = s ?? c ?? !1, A = d ?? o ?? 3e3, S = a ?? i ?? !0, O = u ?? h ?? !0, $ = x ?? b ?? !0, [y, N] = W(!1), [T, V] = W(!1), j = y || T, P = Q(null), E = E1(), Z = I(
    (u1) => {
      const o1 = e.length === 0 ? 0 : (u1 % e.length + e.length) % e.length;
      g || v(o1), (k ?? m)?.(o1);
    },
    [g, k, m, e.length]
  ), e1 = I(() => {
    Z(C - 1);
  }, [Z, C]), X = I(() => {
    Z(C + 1);
  }, [Z, C]), m1 = I(
    (u1) => {
      Z(u1);
    },
    [Z]
  );
  v1(() => {
    if (!z || j || e.length <= 1) return;
    const u1 = setInterval(() => {
      Z(C + 1);
    }, A);
    return () => clearInterval(u1);
  }, [z, j, A, C, Z, e.length]);
  const d1 = (u1) => {
    e.length !== 0 && (u1.key === "ArrowLeft" ? (u1.preventDefault(), e1()) : u1.key === "ArrowRight" ? (u1.preventDefault(), X()) : u1.key === "Home" ? (u1.preventDefault(), m1(0)) : u1.key === "End" && (u1.preventDefault(), m1(e.length - 1)));
  }, l1 = () => {
    S && z && V(!0);
  }, R = () => {
    S && z && V(!1);
  }, c1 = () => {
    S && z && V(!0);
  }, n1 = () => {
    S && z && V(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ L(
    "div",
    {
      ref: P,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": _,
      tabIndex: 0,
      className: [Te.root, p].filter(Boolean).join(" "),
      onKeyDown: d1,
      onMouseEnter: l1,
      onMouseLeave: R,
      onFocusCapture: c1,
      onBlurCapture: n1,
      children: [
        /* @__PURE__ */ n("div", { id: E, className: Te.viewport, children: e.map((u1, o1) => {
          const w1 = o1 === C;
          return /* @__PURE__ */ n(
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
        O && e.length > 1 ? /* @__PURE__ */ L(b1, { children: [
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: [Te.arrow, Te.prev].filter(Boolean).join(" "),
              "aria-label": "Previous slide",
              "aria-controls": E,
              onClick: e1,
              children: "‹"
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: [Te.arrow, Te.next].filter(Boolean).join(" "),
              "aria-label": "Next slide",
              "aria-controls": E,
              onClick: X,
              children: "›"
            }
          )
        ] }) : null,
        z ? /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: Te.pauseBtn,
            "aria-label": y ? "Resume" : "Pause",
            "aria-pressed": y,
            onClick: () => N((u1) => !u1),
            children: y ? "▶" : "⏸"
          }
        ) : null,
        $ && e.length > 1 ? /* @__PURE__ */ n(
          "div",
          {
            className: Te.indicators,
            role: "group",
            "aria-label": "Slide indicators",
            children: e.map((u1, o1) => {
              const w1 = o1 === C;
              return /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: [
                    Te.indicator,
                    w1 ? Te.indicatorActive : null
                  ].filter(Boolean).join(" "),
                  "aria-label": `Go to slide ${o1 + 1}`,
                  "aria-current": w1 ? "true" : void 0,
                  "aria-controls": E,
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
const tf = "_root_1aa5u_1", rf = "_group_1aa5u_20", nf = "_itemWrapper_1aa5u_30", lf = "_treeitem_1aa5u_34", of = "_disabled_1aa5u_50", af = "_selected_1aa5u_60", sf = "_caret_1aa5u_66", cf = "_caretIcon_1aa5u_113", df = "_caretOpen_1aa5u_120", uf = "_caretPlaceholder_1aa5u_124", hf = "_label_1aa5u_130", ff = "_loading_1aa5u_137", pf = "_loadingRow_1aa5u_143", mf = "_empty_1aa5u_149", _f = "_checkbox_1aa5u_155", se = {
  root: tf,
  group: rf,
  itemWrapper: nf,
  treeitem: lf,
  disabled: of,
  selected: af,
  caret: sf,
  caretIcon: cf,
  caretOpen: df,
  caretPlaceholder: uf,
  label: hf,
  loading: ff,
  loadingRow: pf,
  empty: mf,
  checkbox: _f
};
function vf({
  indeterminate: e,
  ...t
}) {
  const r = Q(null);
  return v1(() => {
    r.current && (r.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ n("input", { ref: r, type: "checkbox", ...t });
}
function C_({
  data: e,
  Data: t,
  children: r,
  Children: l,
  textProperty: s,
  TextProperty: c,
  keyProperty: d,
  KeyProperty: o,
  selectionMode: a,
  SelectionMode: i,
  selectedItem: u,
  SelectedItem: h,
  selectedItems: x,
  SelectedItems: b,
  defaultSelectedItem: k,
  defaultSelectedItems: m,
  onChange: _,
  Change: p,
  onExpand: f,
  Expand: g,
  onCollapse: M,
  Collapse: v,
  loadChildData: w,
  LoadChildData: C,
  template: z,
  Template: A,
  itemTemplate: S,
  ItemTemplate: O,
  ariaLabel: $,
  AriaLabel: y,
  allowCheckBoxes: N = !1,
  checkedKeys: T,
  defaultCheckedKeys: V,
  onCheckedChange: j,
  allowCheckChildren: P = !0,
  className: E
}) {
  const Z = e ?? t ?? [], e1 = r ?? l, X = s ?? c ?? "text", m1 = d ?? o ?? "id", d1 = a ?? i ?? "single", l1 = $ ?? y ?? "Tree", R = w ?? C, c1 = z ?? A ?? S ?? O, n1 = I(
    (B) => {
      const G = B[m1];
      return G != null ? String(G) : String(B.id ?? "");
    },
    [m1]
  ), u1 = I(
    (B) => {
      const G = B[X];
      if (G != null) return String(G);
      const r1 = B.text;
      return r1 != null ? String(r1) : "";
    },
    [X]
  ), o1 = I(
    (B) => {
      if (e1) {
        const r1 = e1(B);
        if (r1 !== void 0) return r1;
      }
      const G = B.children;
      if (Array.isArray(G)) return G;
    },
    [e1]
  ), w1 = I(
    (B) => {
      const G = /* @__PURE__ */ new Set(), r1 = (_1) => {
        for (const h1 of _1) {
          const y1 = n1(h1);
          h1.expanded && G.add(y1);
          const H1 = o1(h1);
          H1 && H1.length > 0 && r1(H1);
        }
      };
      return r1(B), G;
    },
    [n1, o1]
  ), [L1, Y1] = W(
    () => w1(Z)
  ), [x1, P1] = W(
    () => /* @__PURE__ */ new Map()
  ), [C1, oe] = W(() => /* @__PURE__ */ new Set()), re = u ?? h, J1 = x ?? b, ae = d1 === "multiple" ? J1 !== void 0 : re !== void 0, U = I(() => {
    if (d1 === "multiple") {
      if (m && m.length > 0)
        return new Set(m.map((r1) => n1(r1)));
      const B = /* @__PURE__ */ new Set(), G = (r1) => {
        for (const _1 of r1) {
          _1.selected && B.add(n1(_1));
          const h1 = o1(_1);
          h1 && G(h1);
        }
      };
      return G(Z), B;
    } else {
      if (k) return /* @__PURE__ */ new Set([n1(k)]);
      let B = null;
      const G = (r1) => {
        for (const _1 of r1) {
          if (_1.selected)
            return B = n1(_1), !0;
          const h1 = o1(_1);
          if (h1 && G(h1)) return !0;
        }
        return !1;
      };
      return G(Z), B ? /* @__PURE__ */ new Set([B]) : /* @__PURE__ */ new Set();
    }
  }, [
    d1,
    k,
    m,
    n1,
    o1,
    Z
  ]), [H, K] = W(
    () => U()
  ), Y = g1(() => {
    if (d1 === "multiple") {
      if (J1 !== void 0) {
        const B = J1;
        return B ? new Set(B.map((G) => n1(G))) : /* @__PURE__ */ new Set();
      }
      return H;
    } else {
      if (re !== void 0) {
        const B = re;
        return B ? /* @__PURE__ */ new Set([n1(B)]) : /* @__PURE__ */ new Set();
      }
      return H;
    }
  }, [
    d1,
    J1,
    re,
    H,
    n1
  ]), f1 = I(
    (B) => {
      let G;
      const r1 = (_1) => {
        for (const h1 of _1) {
          if (n1(h1) === B)
            return G = h1, !0;
          const H1 = x1.get(n1(h1)) ?? o1(h1);
          if (H1 && r1(H1)) return !0;
        }
        return !1;
      };
      if (r1(Z), !G) {
        for (const _1 of x1.values())
          if (r1(_1)) break;
      }
      return G;
    },
    [Z, x1, n1, o1]
  ), t1 = I(() => {
    const B = /* @__PURE__ */ new Map(), G = (r1) => {
      for (const _1 of r1) {
        const h1 = n1(_1);
        B.set(h1, _1);
        const H1 = x1.get(h1) ?? o1(_1);
        H1 && G(H1);
      }
    };
    return G(Z), B;
  }, [Z, x1, n1, o1]), k1 = I(
    (B) => {
      const G = n1(B);
      if (!B.disabled)
        if (d1 === "multiple") {
          const _1 = new Set(Y);
          _1.has(G) ? _1.delete(G) : _1.add(G), ae || K(_1);
          const h1 = _ ?? p;
          if (h1) {
            const y1 = t1(), H1 = [];
            for (const A1 of _1) {
              const U1 = y1.get(A1) ?? f1(A1);
              U1 && H1.push(U1);
            }
            h1({ item: B, selectedItems: H1 });
          }
        } else if (!Y.has(G) || Y.size !== 1 || !Y.has(G)) {
          ae || K(/* @__PURE__ */ new Set([G]));
          const h1 = _ ?? p;
          h1 && h1({ item: B, selectedItem: B });
        } else {
          const h1 = _ ?? p;
          h1 && h1({ item: B, selectedItem: B });
        }
    },
    [
      n1,
      d1,
      Y,
      ae,
      _,
      p,
      t1,
      f1
    ]
  ), S1 = I(
    async (B) => {
      const G = n1(B);
      if (!!B.disabled) return;
      const _1 = L1.has(G), h1 = f ?? g, y1 = M ?? v, H1 = o1(B), U1 = x1.get(G) ?? H1, he = !(U1 !== void 0 && U1.length > 0) && R != null;
      if (_1) {
        Y1((te) => {
          const G1 = new Set(te);
          return G1.delete(G), G1;
        }), y1?.({ item: B });
        return;
      }
      if (he) {
        if (C1.has(G)) return;
        oe((te) => {
          const G1 = new Set(te);
          return G1.add(G), G1;
        });
        try {
          const G1 = await R(B);
          P1((Be) => {
            const Ve = new Map(Be);
            return Ve.set(G, G1), Ve;
          }), Y1((Be) => {
            const Ve = new Set(Be);
            return Ve.add(G), Ve;
          }), h1?.({ item: B });
        } catch {
        } finally {
          oe((te) => {
            const G1 = new Set(te);
            return G1.delete(G), G1;
          });
        }
        return;
      }
      Y1((te) => {
        const G1 = new Set(te);
        return G1.add(G), G1;
      }), h1?.({ item: B });
    },
    [
      n1,
      L1,
      o1,
      x1,
      R,
      C1,
      f,
      g,
      M,
      v
    ]
  ), B1 = g1(() => {
    const B = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), r1 = /* @__PURE__ */ new Set(), _1 = (h1, y1) => {
      for (const H1 of h1) {
        const A1 = n1(H1);
        B.has(A1) || B.set(A1, []), G.set(A1, y1), H1.disabled && r1.add(A1);
        const ee = x1.get(A1) ?? o1(H1);
        ee && ee.length > 0 && (B.set(
          A1,
          ee.map((he) => n1(he))
        ), _1(ee, A1));
      }
    };
    return _1(Z, null), { childrenOf: B, parentOf: G, disabledKeys: r1 };
  }, [Z, x1, n1, o1]), R1 = I(
    (B) => {
      const G = [], r1 = [...B1.childrenOf.get(B) ?? []];
      for (; r1.length > 0; ) {
        const _1 = r1.pop();
        G.push(_1), r1.push(...B1.childrenOf.get(_1) ?? []);
      }
      return G;
    },
    [B1]
  ), [ne, o0] = W(
    () => new Set(V ?? [])
  ), J = T !== void 0 ? new Set(T) : ne, $1 = I(
    (B) => {
      const G = B1.disabledKeys;
      return R1(B).filter((r1) => !G.has(r1));
    },
    [R1, B1]
  ), de = I(
    (B) => {
      if (J.has(B)) return !0;
      if (!N || !P) return !1;
      const G = $1(B);
      return G.length > 0 && G.every((r1) => J.has(r1));
    },
    [J, N, P, $1]
  ), Se = I(
    (B) => {
      if (!N || !P || J.has(B))
        return !1;
      const G = $1(B);
      if (G.length === 0) return !1;
      const r1 = G.filter((_1) => J.has(_1)).length;
      return r1 > 0 && r1 < G.length;
    },
    [J, N, P, $1]
  ), ue = I(
    (B) => {
      if (!N || B.disabled) return;
      const G = n1(B), r1 = new Set(J);
      if (r1.has(G) || de(G)) {
        if (r1.delete(G), P)
          for (const _1 of $1(G)) r1.delete(_1);
      } else if (r1.add(G), P)
        for (const _1 of $1(G)) r1.add(_1);
      T === void 0 && o0(r1), j?.([...r1]);
    },
    [
      N,
      P,
      T,
      J,
      $1,
      n1,
      de,
      j
    ]
  ), N1 = g1(() => {
    const B = [], G = (r1, _1, h1) => {
      r1.forEach((y1, H1) => {
        const A1 = n1(y1), U1 = u1(y1), ee = x1.get(A1) ?? o1(y1);
        let he;
        x1.has(A1) ? he = x1.get(A1).length > 0 : ee !== void 0 ? he = ee.length > 0 : R ? he = !0 : he = !1;
        const te = L1.has(A1), G1 = !!y1.disabled, Be = r1.length, Ve = H1 + 1;
        if (B.push({
          item: y1,
          key: A1,
          text: U1,
          level: _1,
          posInSet: Ve,
          setSize: Be,
          hasChildren: he,
          expanded: te,
          parentKey: h1,
          disabled: G1
        }), he && te) {
          const a0 = x1.get(A1) ?? ee;
          a0 && a0.length > 0 && G(a0, _1 + 1, A1);
        }
      });
    };
    return G(Z, 1, null), B;
  }, [
    Z,
    n1,
    u1,
    o1,
    x1,
    L1,
    R,
    C1
  ]), [V1, Ae] = W(
    () => N1[0]?.key ?? null
  ), ke = Q(""), Q1 = Q(null), F = Q(null);
  v1(() => {
    if (!V1 && N1.length > 0) {
      const B = N1[0];
      B && Ae(B.key);
    } else if (V1 && !N1.some((B) => B.key === V1)) {
      const B = N1[0];
      Ae(B ? B.key : null);
    }
  }, [N1, V1]), v1(() => {
    if (V1) {
      const B = F.current?.querySelector(
        `[data-key="${CSS.escape(V1)}"]`
      );
      let G = null;
      B || (G = F.current?.querySelector(
        `[data-key="${V1}"]`
      ) ?? null);
      const r1 = B ?? G;
      r1 && document.activeElement !== r1 && F.current?.contains(document.activeElement) && r1.focus();
    }
  }, [V1]);
  const a1 = I((B) => {
    Ae(B), requestAnimationFrame(() => {
      const G = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(B) : B;
      let r1 = F.current?.querySelector(
        `[data-key="${G}"]`
      );
      r1 || (r1 = F.current?.querySelector(`[data-key="${B}"]`) ?? null), r1?.focus();
    });
  }, []), j1 = I(
    (B) => N1.find((r1) => r1.key === B)?.parentKey ?? null,
    [N1]
  ), D1 = I(
    (B) => {
      if (N1.length === 0) return;
      const G = V1 ? N1.findIndex((h1) => h1.key === V1) : -1, r1 = G >= 0 ? N1[G] : void 0;
      let _1 = null;
      if (B.key === "ArrowDown") {
        if (B.preventDefault(), G === -1)
          _1 = N1[0]?.key ?? null;
        else {
          const h1 = (G + 1) % N1.length, y1 = N1[h1];
          y1 && (_1 = y1.key);
        }
        _1 && a1(_1);
        return;
      }
      if (B.key === "ArrowUp") {
        if (B.preventDefault(), G === -1) {
          const h1 = N1[N1.length - 1];
          h1 && (_1 = h1.key);
        } else {
          const h1 = (G - 1 + N1.length) % N1.length, y1 = N1[h1];
          y1 && (_1 = y1.key);
        }
        _1 && a1(_1);
        return;
      }
      if (B.key === "ArrowRight") {
        if (B.preventDefault(), !r1) return;
        if (r1.hasChildren && !r1.expanded)
          S1(r1.item);
        else if (r1.hasChildren && r1.expanded) {
          const h1 = G + 1, y1 = N1[h1];
          y1 && y1.parentKey === r1.key && a1(y1.key);
        }
        return;
      }
      if (B.key === "ArrowLeft") {
        if (B.preventDefault(), !r1) return;
        if (r1.hasChildren && r1.expanded)
          S1(r1.item);
        else {
          const h1 = j1(r1.key);
          h1 && a1(h1);
        }
        return;
      }
      if (B.key === "Home") {
        B.preventDefault();
        const h1 = N1[0];
        h1 && a1(h1.key);
        return;
      }
      if (B.key === "End") {
        B.preventDefault();
        const h1 = N1[N1.length - 1];
        h1 && a1(h1.key);
        return;
      }
      if (B.key === "Enter" || B.key === " ") {
        if (B.key === " " && B.target?.tagName === "INPUT" || (B.preventDefault(), !r1)) return;
        if (B.key === " " && N) {
          const h1 = f1(r1.key);
          h1 && ue(h1);
          return;
        }
        k1(r1.item);
        return;
      }
      if (B.key.length === 1 && /^[a-zA-Z0-9]$/.test(B.key)) {
        B.preventDefault();
        const h1 = (ke.current + B.key).toLowerCase();
        ke.current = h1, Q1.current && clearTimeout(Q1.current), Q1.current = setTimeout(() => {
          ke.current = "";
        }, 500);
        const y1 = G >= 0 ? G + 1 : 0, U1 = [...N1, ...N1].slice(y1, y1 + N1.length).find((ee) => ee.text.toLowerCase().startsWith(h1));
        U1 && a1(U1.key);
        return;
      }
    },
    [
      N1,
      V1,
      a1,
      S1,
      k1,
      j1,
      N,
      ue
    ]
  ), Pe = I(() => {
    if (!V1 && N1.length > 0) {
      const B = N1[0];
      B && Ae(B.key);
    }
  }, [V1, N1]), le = (B, G, r1) => /* @__PURE__ */ n("ul", { role: "group", className: se.group, children: B.map((_1, h1) => {
    const y1 = n1(_1), H1 = u1(_1), A1 = x1.get(y1) ?? o1(_1);
    let U1;
    x1.has(y1) ? U1 = x1.get(y1).length > 0 : A1 !== void 0 ? U1 = A1.length > 0 : R ? U1 = !0 : U1 = !1;
    const ee = L1.has(y1), he = Y.has(y1), te = !!_1.disabled, G1 = C1.has(y1), Be = V1 === y1, Ve = B.length, a0 = h1 + 1, E0 = c1 ? c1(_1) : H1, I0 = N ? {
      checked: de(y1),
      indeterminate: Se(y1)
    } : null;
    return /* @__PURE__ */ L("li", { role: "none", className: se.itemWrapper, children: [
      /* @__PURE__ */ L(
        "div",
        {
          role: "treeitem",
          "data-key": y1,
          tabIndex: Be ? 0 : -1,
          "aria-expanded": U1 ? ee : void 0,
          "aria-selected": he,
          "aria-level": G,
          "aria-setsize": Ve,
          "aria-posinset": a0,
          "aria-disabled": te || void 0,
          "aria-busy": G1 || void 0,
          className: [
            se.treeitem,
            he ? se.selected : null,
            te ? se.disabled : null,
            Be ? se.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            a1(y1), te || k1(_1);
          },
          onFocus: () => Ae(y1),
          children: [
            N ? /* @__PURE__ */ n(
              vf,
              {
                className: se.checkbox,
                checked: I0?.checked ?? !1,
                indeterminate: I0?.indeterminate ?? !1,
                disabled: te,
                "aria-label": `Select ${H1}`,
                onClick: (m0) => m0.stopPropagation(),
                onChange: () => ue(_1)
              }
            ) : null,
            U1 ? /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: se.caret,
                "aria-label": `${ee ? "Collapse" : "Expand"} ${H1}`,
                "aria-expanded": ee,
                tabIndex: -1,
                disabled: te,
                onClick: (m0) => {
                  m0.stopPropagation(), a1(y1), S1(_1);
                },
                children: /* @__PURE__ */ n(
                  "span",
                  {
                    "aria-hidden": "true",
                    className: [
                      se.caretIcon,
                      ee ? se.caretOpen : null
                    ].filter(Boolean).join(" "),
                    children: /* @__PURE__ */ n(M1, { name: "chevron-right", size: 10 })
                  }
                )
              }
            ) : /* @__PURE__ */ n(
              "span",
              {
                className: se.caretPlaceholder,
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ n("span", { className: se.label, children: E0 }),
            G1 ? /* @__PURE__ */ n("span", { className: se.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      U1 && ee ? G1 ? /* @__PURE__ */ n("div", { className: se.loadingRow, "aria-busy": "true", children: "Loading…" }) : A1 && A1.length > 0 ? le(A1, G + 1) : x1.has(y1) && x1.get(y1).length > 0 ? le(
        x1.get(y1),
        G + 1
      ) : (A1 && A1.length === 0, null) : null
    ] }, y1);
  }) });
  return /* @__PURE__ */ n(
    "div",
    {
      ref: F,
      role: "tree",
      "aria-label": l1,
      "aria-multiselectable": d1 === "multiple" || void 0,
      tabIndex: 0,
      className: [se.root, E].filter(Boolean).join(" "),
      onKeyDown: D1,
      onFocus: Pe,
      children: Z.length === 0 ? /* @__PURE__ */ n("div", { className: se.empty, children: "No items" }) : le(Z, 1)
    }
  );
}
const gf = "_root_10fdq_1", kf = "_panel_10fdq_8", yf = "_header_10fdq_19", xf = "_listbox_10fdq_28", bf = "_option_10fdq_42", Mf = "_disabled_10fdq_57", Cf = "_active_10fdq_66", wf = "_selected_10fdq_70", zf = "_empty_10fdq_86", Lf = "_controls_10fdq_93", $f = "_reorder_10fdq_102", Nf = "_btn_10fdq_110", T1 = {
  root: gf,
  panel: kf,
  header: yf,
  listbox: xf,
  option: bf,
  disabled: Mf,
  active: Cf,
  selected: wf,
  empty: zf,
  controls: Lf,
  reorder: $f,
  btn: Nf
};
function ce(e, t) {
  const r = e[t];
  return r != null ? String(r) : String(e.id ?? "");
}
function ft(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function w_({
  source: e,
  Source: t,
  target: r,
  Target: l,
  value: s,
  Value: c,
  targetValue: d,
  TargetValue: o,
  data: a,
  Data: i,
  onSourceChange: u,
  SourceChange: h,
  onTargetChange: x,
  TargetChange: b,
  keyProperty: k,
  KeyProperty: m,
  onMove: _,
  Move: p,
  ariaLabel: f,
  AriaLabel: g,
  className: M
}) {
  const v = k ?? m ?? "id", w = f ?? g ?? "PickList", C = e ?? t ?? s ?? c ?? a ?? i ?? [], z = r ?? l ?? d ?? o ?? [], [A, S] = W(() => [
    ...C
  ]), [O, $] = W(() => [
    ...z
  ]);
  v1(() => {
    const H = e ?? t ?? s ?? c ?? a ?? i;
    H !== void 0 && S([...H]);
  }, [e, t, s, c, a, i]), v1(() => {
    const H = r ?? l ?? d ?? o;
    H !== void 0 && $([...H]);
  }, [r, l, d, o]);
  const [y, N] = W(
    () => /* @__PURE__ */ new Set()
  ), [T, V] = W(
    () => /* @__PURE__ */ new Set()
  ), [j, P] = W(() => {
    const H = C.findIndex((K) => !K.disabled);
    return H >= 0 ? H : 0;
  }), [E, Z] = W(() => {
    const H = z.findIndex((K) => !K.disabled);
    return H >= 0 ? H : 0;
  }), e1 = g1(
    () => A.map((H, K) => H.disabled ? -1 : K).filter((H) => H >= 0),
    [A]
  ), X = g1(
    () => O.map((H, K) => H.disabled ? -1 : K).filter((H) => H >= 0),
    [O]
  );
  v1(() => {
    if (j >= A.length) {
      const H = e1[e1.length - 1];
      P(H ?? 0);
    } else if (A.length > 0 && e1.length > 0 && !e1.includes(j)) {
      const H = e1[0];
      H !== void 0 && P(H);
    }
  }, [j, A.length, e1]), v1(() => {
    if (E >= O.length) {
      const H = X[X.length - 1];
      Z(H ?? 0);
    } else if (O.length > 0 && X.length > 0 && !X.includes(E)) {
      const H = X[0];
      H !== void 0 && Z(H);
    }
  }, [E, O.length, X]), v1(() => {
    N((H) => {
      const K = /* @__PURE__ */ new Set();
      for (const Y of H)
        A.some(
          (t1) => ce(t1, v) === Y && !t1.disabled
        ) && K.add(Y);
      return K;
    });
  }, [A, v]), v1(() => {
    V((H) => {
      const K = /* @__PURE__ */ new Set();
      for (const Y of H)
        O.some(
          (t1) => ce(t1, v) === Y && !t1.disabled
        ) && K.add(Y);
      return K;
    });
  }, [O, v]);
  const m1 = I(
    (H) => {
      (u ?? h)?.(H);
    },
    [u, h]
  ), d1 = I(
    (H) => {
      (x ?? b)?.(H);
    },
    [x, b]
  ), l1 = I(
    (H) => {
      (_ ?? p)?.(H);
    },
    [_, p]
  ), R = I(
    (H) => {
      const K = A[H];
      if (!K || K.disabled) return;
      const Y = ce(K, v);
      N((f1) => {
        const t1 = new Set(f1);
        return t1.has(Y) ? t1.delete(Y) : t1.add(Y), t1;
      }), P(H);
    },
    [A, v]
  ), c1 = I(
    (H) => {
      const K = O[H];
      if (!K || K.disabled) return;
      const Y = ce(K, v);
      V((f1) => {
        const t1 = new Set(f1);
        return t1.has(Y) ? t1.delete(Y) : t1.add(Y), t1;
      }), Z(H);
    },
    [O, v]
  ), n1 = I(() => {
    const H = [], K = [];
    for (const k1 of A) {
      const S1 = ce(k1, v);
      y.has(S1) && !k1.disabled ? H.push(k1) : K.push(k1);
    }
    if (H.length === 0) return;
    const Y = K, f1 = [...O, ...H];
    S(Y), $(f1), N(/* @__PURE__ */ new Set());
    const t1 = new Set(H.map((k1) => ce(k1, v)));
    V(t1), m1(Y), d1(f1), l1({
      source: Y,
      target: f1,
      moved: H,
      direction: "toTarget"
    });
  }, [
    A,
    O,
    y,
    v,
    m1,
    d1,
    l1
  ]), u1 = I(() => {
    const H = [], K = [];
    for (const k1 of O) {
      const S1 = ce(k1, v);
      T.has(S1) && !k1.disabled ? H.push(k1) : K.push(k1);
    }
    if (H.length === 0) return;
    const Y = K, f1 = [...A, ...H];
    $(Y), S(f1), V(/* @__PURE__ */ new Set());
    const t1 = new Set(H.map((k1) => ce(k1, v)));
    N(t1), m1(f1), d1(Y), l1({
      source: f1,
      target: Y,
      moved: H,
      direction: "toSource"
    });
  }, [
    A,
    O,
    T,
    v,
    m1,
    d1,
    l1
  ]), o1 = I(() => {
    const H = A.filter((f1) => !f1.disabled);
    if (H.length === 0) return;
    const K = A.filter((f1) => !!f1.disabled), Y = [...O, ...H];
    S(K), $(Y), N(/* @__PURE__ */ new Set()), m1(K), d1(Y), l1({
      source: K,
      target: Y,
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
  ]), w1 = I(() => {
    const H = O.filter((f1) => !f1.disabled);
    if (H.length === 0) return;
    const K = O.filter((f1) => !!f1.disabled), Y = [...A, ...H];
    $(K), S(Y), V(/* @__PURE__ */ new Set()), m1(Y), d1(K), l1({
      source: Y,
      target: K,
      moved: H,
      direction: "allToSource"
    });
  }, [A, O, m1, d1, l1]), L1 = I(() => {
    if (T.size === 0) return;
    const H = [...O], K = T, Y = [];
    for (let t1 = 1; t1 < H.length; t1++) {
      const k1 = H[t1], S1 = H[t1 - 1];
      if (!k1 || !S1) continue;
      const B1 = ce(k1, v), R1 = ce(S1, v);
      K.has(B1) && !K.has(R1) && !k1.disabled && !S1.disabled && (H[t1 - 1] = k1, H[t1] = S1, Y.push(k1));
    }
    if (Y.length === 0) return;
    $(H), d1(H), l1({ source: A, target: H, moved: Y, direction: "up" });
    const f1 = Array.from(K)[0];
    if (f1) {
      const t1 = H.findIndex(
        (k1) => ce(k1, v) === f1
      );
      t1 >= 0 && Z(t1);
    }
  }, [
    O,
    T,
    v,
    A,
    d1,
    l1
  ]), Y1 = I(() => {
    if (T.size === 0) return;
    const H = [...O], K = T, Y = [];
    for (let t1 = H.length - 2; t1 >= 0; t1--) {
      const k1 = H[t1], S1 = H[t1 + 1];
      if (!k1 || !S1) continue;
      const B1 = ce(k1, v), R1 = ce(S1, v);
      K.has(B1) && !K.has(R1) && !k1.disabled && !S1.disabled && (H[t1] = S1, H[t1 + 1] = k1, Y.push(k1));
    }
    if (Y.length === 0) return;
    $(H), d1(H), l1({ source: A, target: H, moved: Y, direction: "down" });
    const f1 = Array.from(K)[0];
    if (f1) {
      const t1 = H.findIndex(
        (k1) => ce(k1, v) === f1
      );
      t1 >= 0 && Z(t1);
    }
  }, [
    O,
    T,
    v,
    A,
    d1,
    l1
  ]), x1 = y.size > 0, P1 = T.size > 0, C1 = Q(""), oe = Q(
    null
  ), re = Q(""), J1 = Q(
    null
  ), we = I(
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
        H.preventDefault(), R(Y);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(H.key)) {
        H.preventDefault();
        const t1 = (C1.current + H.key).toLowerCase();
        C1.current = t1, oe.current && clearTimeout(oe.current), oe.current = setTimeout(() => {
          C1.current = "";
        }, 500);
        const k1 = [...K, ...K], S1 = K.indexOf(Y) + 1, B1 = k1.slice(S1).find(
          (R1) => ft(A[R1]).toLowerCase().startsWith(t1)
        );
        B1 != null && P(B1);
        return;
      }
      f1 >= 0 && P(f1);
    },
    [A, e1, j, R]
  ), ge = I(
    (H) => {
      if (O.length === 0) return;
      const K = X;
      if (K.length === 0) return;
      const Y = K.includes(E) ? E : K[0] ?? 0;
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
        const t1 = (re.current + H.key).toLowerCase();
        re.current = t1, J1.current && clearTimeout(J1.current), J1.current = setTimeout(() => {
          re.current = "";
        }, 500);
        const k1 = [...K, ...K], S1 = K.indexOf(Y) + 1, B1 = k1.slice(S1).find(
          (R1) => ft(O[R1]).toLowerCase().startsWith(t1)
        );
        B1 != null && Z(B1);
        return;
      }
      f1 >= 0 && Z(f1);
    },
    [O, X, E, c1]
  ), ae = Q(null), U = Q(null);
  return /* @__PURE__ */ L(
    "div",
    {
      className: [T1.root, M].filter(Boolean).join(" "),
      "aria-label": w,
      children: [
        /* @__PURE__ */ L("div", { className: T1.panel, children: [
          /* @__PURE__ */ n("div", { className: T1.header, children: "Source" }),
          /* @__PURE__ */ n(
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
                /* @__PURE__ */ n(
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
                const Y = ce(H, v), f1 = y.has(Y), t1 = K === j, k1 = !!H.disabled;
                return /* @__PURE__ */ n(
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
                    onClick: () => R(K),
                    children: ft(H)
                  },
                  Y
                );
              })
            }
          )
        ] }),
        /* @__PURE__ */ L("div", { className: T1.controls, children: [
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: T1.btn,
              "aria-label": "Move selected to target",
              "aria-disabled": !x1 || void 0,
              disabled: !x1,
              onClick: n1,
              children: "›"
            }
          ),
          /* @__PURE__ */ n(
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
          /* @__PURE__ */ n(
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
          /* @__PURE__ */ n(
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
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: T1.btn,
              "aria-label": "Move all to source",
              "aria-disabled": O.filter((H) => !H.disabled).length === 0 || void 0,
              disabled: O.filter((H) => !H.disabled).length === 0,
              onClick: w1,
              children: "«"
            }
          )
        ] }),
        /* @__PURE__ */ L("div", { className: T1.panel, children: [
          /* @__PURE__ */ n("div", { className: T1.header, children: "Target" }),
          /* @__PURE__ */ n(
            "div",
            {
              ref: U,
              role: "listbox",
              "aria-label": "Target",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: T1.listbox,
              onKeyDown: ge,
              children: O.length === 0 ? (
                // Disabled option, not static text: a bare placeholder inside
                // role="listbox" fails aria-required-children, while hiding it
                // (aria-hidden) strands AT users without an empty-state hint.
                /* @__PURE__ */ n(
                  "div",
                  {
                    className: T1.empty,
                    role: "option",
                    "aria-selected": !1,
                    "aria-disabled": !0,
                    children: "No items"
                  }
                )
              ) : O.map((H, K) => {
                const Y = ce(H, v), f1 = T.has(Y), t1 = K === E, k1 = !!H.disabled;
                return /* @__PURE__ */ n(
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
                    children: ft(H)
                  },
                  Y
                );
              })
            }
          ),
          /* @__PURE__ */ L("div", { className: T1.reorder, children: [
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: T1.btn,
                "aria-label": "Move up",
                "aria-disabled": !P1 || void 0,
                disabled: !P1,
                onClick: L1,
                children: /* @__PURE__ */ n(M1, { name: "chevron-up", size: "sm" })
              }
            ),
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: T1.btn,
                "aria-label": "Move down",
                "aria-disabled": !P1 || void 0,
                disabled: !P1,
                onClick: Y1,
                children: /* @__PURE__ */ n(M1, { name: "chevron-down", size: "sm" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const Of = "_root_1qxsp_1", Sf = "_header_1qxsp_8", Af = "_title_1qxsp_15", Hf = "_navBtn_1qxsp_20", jf = "_resources_1qxsp_39", Tf = "_resource_1qxsp_39", Vf = "_grid_1qxsp_50", Df = "_timeCol_1qxsp_55", Ef = "_timeCell_1qxsp_61", If = "_dayCol_1qxsp_66", qf = "_dayHeader_1qxsp_73", Pf = "_slot_1qxsp_81", Bf = "_event_1qxsp_91", Me = {
  root: Of,
  header: Sf,
  title: Af,
  navBtn: Hf,
  resources: jf,
  resource: Tf,
  grid: Vf,
  timeCol: Df,
  timeCell: Ef,
  dayCol: If,
  dayHeader: qf,
  slot: Pf,
  event: Bf
};
function v2(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function z_({
  data: e,
  view: t = "week",
  date: r,
  onDateChange: l,
  resources: s,
  onEventClick: c,
  onSlotClick: d,
  ariaLabel: o = "Scheduler",
  className: a
}) {
  const [i, u] = W(
    r ?? /* @__PURE__ */ new Date()
  ), h = r ?? i, x = (m) => {
    r || u(m), l?.(m);
  }, b = t === "day" ? [h] : t === "week" ? Array.from({ length: 7 }, (m, _) => {
    const p = new Date(h);
    return p.setDate(h.getDate() - h.getDay() + _), p;
  }) : Array.from({ length: 30 }, (m, _) => {
    const p = new Date(h);
    return p.setDate(1 + _), p;
  }), k = Array.from({ length: 12 }, (m, _) => 8 + _);
  return /* @__PURE__ */ L(
    "div",
    {
      className: [Me.root, a].filter(Boolean).join(" "),
      role: "group",
      "aria-label": o,
      children: [
        /* @__PURE__ */ L("div", { className: Me.header, children: [
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Me.navBtn,
              "aria-label": "Previous",
              onClick: () => {
                const m = new Date(h);
                m.setDate(m.getDate() - 7), x(m);
              },
              children: "‹"
            }
          ),
          /* @__PURE__ */ n("span", { className: Me.title, children: h.toLocaleDateString() }),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Me.navBtn,
              "aria-label": "Next",
              onClick: () => {
                const m = new Date(h);
                m.setDate(m.getDate() + 7), x(m);
              },
              children: "›"
            }
          )
        ] }),
        s && /* @__PURE__ */ n("div", { className: Me.resources, children: s.map((m) => /* @__PURE__ */ n(
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
          /* @__PURE__ */ n("div", { className: Me.timeCol, role: "presentation", children: k.map((m) => /* @__PURE__ */ L("div", { className: Me.timeCell, children: [
            m,
            ":00"
          ] }, m)) }),
          b.map((m) => /* @__PURE__ */ L(
            "div",
            {
              className: Me.dayCol,
              role: "presentation",
              title: m.toLocaleDateString(),
              onClick: () => d?.({ date: m }),
              tabIndex: 0,
              "aria-label": m.toLocaleDateString(),
              children: [
                /* @__PURE__ */ n("div", { className: Me.dayHeader, children: m.toLocaleDateString(void 0, {
                  weekday: "short",
                  month: "short",
                  day: "numeric"
                }) }),
                k.map((_) => /* @__PURE__ */ n(
                  "div",
                  {
                    className: Me.slot,
                    tabIndex: -1,
                    onClick: () => {
                      const p = new Date(m);
                      p.setHours(_), d?.({ date: p });
                    }
                  },
                  _
                )),
                e.filter((_) => _.start.toDateString() === m.toDateString()).map((_) => /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    className: Me.event,
                    "aria-label": `${_.title} ${v2(_.start)} - ${v2(_.end)}`,
                    "aria-pressed": !1,
                    onClick: () => c?.({ event: _ }),
                    children: _.title
                  },
                  _.id
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
const Rf = "_root_dj5ne_1", Ff = "_header_dj5ne_8", Kf = "_headerCell_dj5ne_15", Wf = "_timeline_dj5ne_21", Zf = "_row_dj5ne_26", Uf = "_taskName_dj5ne_32", Gf = "_timelineCell_dj5ne_37", Xf = "_bar_dj5ne_43", Yf = "_progress_dj5ne_56", Jf = "_dep_dj5ne_61", Ge = {
  root: Rf,
  header: Ff,
  headerCell: Kf,
  timeline: Wf,
  row: Zf,
  taskName: Uf,
  timelineCell: Gf,
  bar: Xf,
  progress: Yf,
  dep: Jf
};
function L_({
  tasks: e,
  view: t = "week",
  onTaskClick: r,
  ariaLabel: l = "Gantt",
  className: s
}) {
  const [c, d] = W(null);
  return /* @__PURE__ */ L(
    "div",
    {
      className: [Ge.root, s].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": l,
      "aria-rowcount": e.length,
      children: [
        /* @__PURE__ */ L("div", { className: Ge.header, role: "row", children: [
          /* @__PURE__ */ n("div", { className: Ge.headerCell, role: "columnheader", children: "Task" }),
          /* @__PURE__ */ L("div", { className: Ge.timeline, role: "columnheader", children: [
            "Timeline (",
            t,
            ")"
          ] })
        ] }),
        e.map((o) => /* @__PURE__ */ L(
          "div",
          {
            className: Ge.row,
            role: "row",
            "aria-selected": c === o.id,
            children: [
              /* @__PURE__ */ n("div", { className: Ge.taskName, role: "gridcell", children: o.name }),
              /* @__PURE__ */ L("div", { className: Ge.timelineCell, role: "gridcell", children: [
                /* @__PURE__ */ n(
                  "div",
                  {
                    className: Ge.bar,
                    role: "button",
                    "aria-label": `${o.name} ${o.start.toLocaleDateString()} - ${o.end.toLocaleDateString()}${o.progress !== void 0 ? `, ${o.progress}% complete` : ""}`,
                    "aria-pressed": c === o.id,
                    tabIndex: 0,
                    onClick: () => {
                      d(o.id), r?.({ task: o });
                    },
                    onKeyDown: (a) => {
                      (a.key === "Enter" || a.key === " ") && (a.preventDefault(), d(o.id), r?.({ task: o }));
                    },
                    children: /* @__PURE__ */ n(
                      "div",
                      {
                        className: Ge.progress,
                        style: { width: `${o.progress ?? 0}%` }
                      }
                    )
                  }
                ),
                o.dependencies?.map((a) => /* @__PURE__ */ n("svg", { className: Ge.dep, "aria-hidden": "true", children: /* @__PURE__ */ n(
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
const Qf = "_root_4b64f_1", ep = "_fields_4b64f_6", tp = "_chip_4b64f_13", rp = "_table_4b64f_35", np = "_totalRow_4b64f_55", lp = "_total_4b64f_55", T0 = {
  root: Qf,
  fields: ep,
  chip: tp,
  table: rp,
  totalRow: np,
  total: lp
}, pt = {
  Sum: (e) => e.reduce((t, r) => t + r, 0),
  Average: (e) => e.length ? e.reduce((t, r) => t + r, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function Q0(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function $_({
  data: e,
  rowFields: t = [],
  columnFields: r = [],
  aggregateFields: l = [],
  onFieldsChange: s,
  ariaLabel: c = "Pivot table",
  className: d
}) {
  const o = t, a = r, i = l, u = (_, p, f) => {
    const g = _ === "row" ? o.filter((w) => w.property !== p) : o, M = _ === "col" ? a.filter((w) => w.property !== p) : a, v = _ === "agg" ? i.filter((w) => !(w.property === p && w.aggregate === f)) : i;
    s?.({
      rowFields: g,
      columnFields: M,
      aggregateFields: v
    });
  }, h = (_, p) => p.map((f) => String(_[f.property])).join(""), x = [
    ...new Set(o.length ? e.map((_) => h(_, o)) : [""])
  ].sort(), b = [
    ...new Set(a.length ? e.map((_) => h(_, a)) : [""])
  ].sort(), k = (_, p, f) => {
    const g = e.filter(
      (v) => h(v, o) === _ && h(v, a) === p
    ), M = g.map((v) => Number(v[f.property])).filter((v) => !Number.isNaN(v));
    return !M.length && f.aggregate !== "Count" ? 0 : pt[f.aggregate](
      f.aggregate === "Count" ? g.map(() => 1) : M
    );
  }, m = (_, p, f, g) => /* @__PURE__ */ L(
    "button",
    {
      type: "button",
      className: T0.chip,
      "aria-label": `Remove ${_} field ${f}`,
      onClick: () => u(_, p, g),
      children: [
        f,
        g ? ` (${g})` : ""
      ]
    },
    `${_}-${f}-${g ?? ""}`
  );
  return /* @__PURE__ */ L("div", { className: [T0.root, d].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ L("div", { className: T0.fields, children: [
      o.map((_) => m("row", _.property, _.title ?? _.property)),
      a.map((_) => m("col", _.property, _.title ?? _.property)),
      i.map(
        (_) => m("agg", _.property, _.title ?? _.property, _.aggregate)
      )
    ] }),
    /* @__PURE__ */ L("table", { className: T0.table, role: "grid", "aria-label": c, children: [
      /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ L("tr", { children: [
        /* @__PURE__ */ n("th", { scope: "col", children: o.map((_) => _.title ?? _.property).join(" / ") || "Total" }),
        b.map((_) => /* @__PURE__ */ n("th", { scope: "col", children: _ || "—" }, _)),
        /* @__PURE__ */ n("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ L("tbody", { children: [
        x.map((_) => /* @__PURE__ */ L("tr", { children: [
          /* @__PURE__ */ n("th", { scope: "row", children: _ || "—" }),
          b.map((p) => /* @__PURE__ */ n(
            "td",
            {
              title: Q0(
                k(
                  _,
                  p,
                  i[0] ?? { property: "", aggregate: "Count" }
                )
              ),
              children: i.length ? Q0(k(_, p, i[0])) : ""
            },
            p
          )),
          /* @__PURE__ */ n("td", { className: T0.total, children: i.length ? Q0(
            pt[i[0].aggregate](
              b.flatMap(
                (p) => e.filter(
                  (f) => h(f, o) === _ && h(f, a) === p
                ).map((f) => Number(f[i[0].property]))
              ).filter((p) => !Number.isNaN(p))
            )
          ) : "" })
        ] }, _)),
        /* @__PURE__ */ L("tr", { className: T0.totalRow, children: [
          /* @__PURE__ */ n("th", { scope: "row", children: "Total" }),
          b.map((_) => /* @__PURE__ */ n("td", { children: i.length ? Q0(
            pt[i[0].aggregate](
              e.filter((p) => h(p, a) === _).map((p) => Number(p[i[0].property])).filter((p) => !Number.isNaN(p))
            )
          ) : "" }, _)),
          /* @__PURE__ */ n("td", { children: i.length ? Q0(
            pt[i[0].aggregate](
              e.map((_) => Number(_[i[0].property])).filter((_) => !Number.isNaN(_))
            )
          ) : "" })
        ] })
      ] })
    ] })
  ] });
}
const op = "_root_1r7co_1", ap = "_reverse_1r7co_10", sp = "_item_1r7co_14", cp = "_marker_1r7co_35", ip = "_body_1r7co_46", dp = "_label_1r7co_50", up = "_content_1r7co_56", M0 = {
  root: op,
  reverse: ap,
  item: sp,
  marker: cp,
  body: ip,
  label: dp,
  content: up
};
function N_({
  items: e,
  reverse: t = !1,
  ariaLabel: r = "Timeline",
  className: l
}) {
  const s = t ? [...e].reverse() : e;
  return /* @__PURE__ */ n(
    "ol",
    {
      className: [M0.root, t ? M0.reverse : "", l].filter(Boolean).join(" "),
      role: "list",
      "aria-label": r,
      children: s.map((c, d) => /* @__PURE__ */ L("li", { className: M0.item, children: [
        /* @__PURE__ */ n("span", { className: M0.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ L("div", { className: M0.body, children: [
          /* @__PURE__ */ n("div", { className: M0.label, children: c.label }),
          c.content !== void 0 && /* @__PURE__ */ n("div", { className: M0.content, children: c.content })
        ] })
      ] }, d))
    }
  );
}
const hp = "_root_rm4d8_1", fp = "_header_rm4d8_13", pp = "_headCell_rm4d8_22", mp = "_row_rm4d8_32", _p = "_cell_rm4d8_37", et = {
  root: hp,
  header: fp,
  headCell: pp,
  row: mp,
  cell: _p
};
function O_({
  count: e,
  rowHeight: t = 40,
  height: r = 320,
  loadData: l,
  columns: s = [],
  ariaLabel: c = "Virtual grid",
  className: d
}) {
  const [o, a] = W(
    /* @__PURE__ */ new Map()
  ), [i, u] = W(0), h = Q(/* @__PURE__ */ new Set()), x = Math.ceil(r / t), b = Math.max(0, Math.floor(i / t) - 3), k = Math.min(e, b + x + 6), m = I(
    (p, f) => {
      let g = !1;
      for (let M = p; M < f; M++)
        !o.has(M) && !h.current.has(M) && (g = !0);
      if (g) {
        for (let M = p; M < f; M++) h.current.add(M);
        l({ skip: p, top: f }).then((M) => {
          a((v) => {
            const w = new Map(v);
            return M.forEach((C, z) => w.set(p + z, C)), w;
          });
          for (let v = p; v < f; v++) h.current.delete(v);
        });
      }
    },
    [o, l]
  );
  v1(() => {
    m(b, k);
  }, [b, k]);
  const _ = [];
  for (let p = b; p < k; p++) {
    const f = o.get(p) ?? {};
    _.push(
      /* @__PURE__ */ n(
        "div",
        {
          className: et.row,
          role: "row",
          style: { height: t },
          children: s.map((g) => /* @__PURE__ */ n(
            "div",
            {
              role: "gridcell",
              className: et.cell,
              style: g.width ? { width: g.width } : void 0,
              children: String(f[g.property] ?? "")
            },
            g.property
          ))
        },
        p
      )
    );
  }
  return /* @__PURE__ */ L(
    "div",
    {
      className: [et.root, d].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": c,
      "aria-rowcount": e,
      tabIndex: 0,
      style: { height: r },
      onScroll: (p) => u(p.target.scrollTop),
      onKeyDown: (p) => {
        const f = p.currentTarget;
        p.key === "ArrowDown" ? (p.preventDefault(), f.scrollTop += t) : p.key === "ArrowUp" ? (p.preventDefault(), f.scrollTop -= t) : p.key === "PageDown" ? (p.preventDefault(), f.scrollTop += r) : p.key === "PageUp" && (p.preventDefault(), f.scrollTop -= r);
      },
      children: [
        /* @__PURE__ */ n("div", { style: { height: b * t }, "aria-hidden": "true" }),
        /* @__PURE__ */ n("div", { className: et.header, role: "row", children: s.map((p) => /* @__PURE__ */ n(
          "div",
          {
            role: "columnheader",
            className: et.headCell,
            style: {
              height: t,
              ...p.width ? { width: p.width } : {}
            },
            children: p.title ?? p.property
          },
          p.property
        )) }),
        _,
        /* @__PURE__ */ n(
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
var qe;
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
      for (let b = 0; b < this.size; b++) h.push(!1);
      for (let b = 0; b < this.size; b++)
        this.modules.push(h.slice()), this.isFunction.push(h.slice());
      this.drawFunctionPatterns();
      const x = this.addEccAndInterleave(i);
      if (this.drawCodewords(x), u == -1) {
        let b = 1e9;
        for (let k = 0; k < 8; k++) {
          this.applyMask(k), this.drawFormatBits(k);
          const m = this.getPenaltyScore();
          m < b && (u = k, b = m), this.applyMask(k);
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
    static encodeSegments(o, a, i = 1, u = 40, h = -1, x = !0) {
      if (!(t.MIN_VERSION <= i && i <= u && u <= t.MAX_VERSION) || h < -1 || h > 7)
        throw new RangeError("Invalid value");
      let b, k;
      for (b = i; ; b++) {
        const f = t.getNumDataCodewords(b, a) * 8, g = c.getTotalBits(o, b);
        if (g <= f) {
          k = g;
          break;
        }
        if (b >= u)
          throw new RangeError("Data too long");
      }
      for (const f of [
        t.Ecc.MEDIUM,
        t.Ecc.QUARTILE,
        t.Ecc.HIGH
      ])
        x && k <= t.getNumDataCodewords(b, f) * 8 && (a = f);
      let m = [];
      for (const f of o) {
        r(f.mode.modeBits, 4, m), r(f.numChars, f.mode.numCharCountBits(b), m);
        for (const g of f.getData()) m.push(g);
      }
      s(m.length == k);
      const _ = t.getNumDataCodewords(b, a) * 8;
      s(m.length <= _), r(0, Math.min(4, _ - m.length), m), r(0, (8 - m.length % 8) % 8, m), s(m.length % 8 == 0);
      for (let f = 236; m.length < _; f ^= 253)
        r(f, 8, m);
      let p = [];
      for (; p.length * 8 < m.length; ) p.push(0);
      return m.forEach(
        (f, g) => p[g >>> 3] |= f << 7 - (g & 7)
      ), new t(b, a, p, h);
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
        const u = l(a, i), h = this.size - 11 + i % 3, x = Math.floor(i / 3);
        this.setFunctionModule(h, x, u), this.setFunctionModule(x, h, u);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(o, a) {
      for (let i = -4; i <= 4; i++)
        for (let u = -4; u <= 4; u++) {
          const h = Math.max(Math.abs(u), Math.abs(i)), x = o + u, b = a + i;
          0 <= x && x < this.size && 0 <= b && b < this.size && this.setFunctionModule(x, b, h != 2 && h != 4);
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
      const u = t.NUM_ERROR_CORRECTION_BLOCKS[i.ordinal][a], h = t.ECC_CODEWORDS_PER_BLOCK[i.ordinal][a], x = Math.floor(
        t.getNumRawDataModules(a) / 8
      ), b = u - x % u, k = Math.floor(x / u);
      let m = [];
      const _ = t.reedSolomonComputeDivisor(h);
      for (let f = 0, g = 0; f < u; f++) {
        let M = o.slice(
          g,
          g + k - h + (f < b ? 0 : 1)
        );
        g += M.length;
        const v = t.reedSolomonComputeRemainder(M, _);
        f < b && M.push(0), m.push(M.concat(v));
      }
      let p = [];
      for (let f = 0; f < m[0].length; f++)
        m.forEach((g, M) => {
          (f != k - h || M >= b) && p.push(g[f]);
        });
      return s(p.length == x), p;
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
            const x = i - h, k = (i + 1 & 2) == 0 ? this.size - 1 - u : u;
            !this.isFunction[k][x] && a < o.length * 8 && (this.modules[k][x] = l(o[a >>> 3], 7 - (a & 7)), a++);
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
        let x = !1, b = 0, k = [0, 0, 0, 0, 0, 0, 0];
        for (let m = 0; m < this.size; m++)
          this.modules[h][m] == x ? (b++, b == 5 ? o += t.PENALTY_N1 : b > 5 && o++) : (this.finderPenaltyAddHistory(b, k), x || (o += this.finderPenaltyCountPatterns(k) * t.PENALTY_N3), x = this.modules[h][m], b = 1);
        o += this.finderPenaltyTerminateAndCount(x, b, k) * t.PENALTY_N3;
      }
      for (let h = 0; h < this.size; h++) {
        let x = !1, b = 0, k = [0, 0, 0, 0, 0, 0, 0];
        for (let m = 0; m < this.size; m++)
          this.modules[m][h] == x ? (b++, b == 5 ? o += t.PENALTY_N1 : b > 5 && o++) : (this.finderPenaltyAddHistory(b, k), x || (o += this.finderPenaltyCountPatterns(k) * t.PENALTY_N3), x = this.modules[m][h], b = 1);
        o += this.finderPenaltyTerminateAndCount(x, b, k) * t.PENALTY_N3;
      }
      for (let h = 0; h < this.size - 1; h++)
        for (let x = 0; x < this.size - 1; x++) {
          const b = this.modules[h][x];
          b == this.modules[h][x + 1] && b == this.modules[h + 1][x] && b == this.modules[h + 1][x + 1] && (o += t.PENALTY_N2);
        }
      let a = 0;
      for (const h of this.modules)
        a = h.reduce((x, b) => x + (b ? 1 : 0), a);
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
          (x, b) => i[b] ^= t.reedSolomonMultiply(x, h)
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
  function r(d, o, a) {
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
      for (const i of o) r(i, 8, a);
      return new c(c.Mode.BYTE, o.length, a);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(o) {
      if (!c.isNumeric(o))
        throw new RangeError("String contains non-numeric characters");
      let a = [];
      for (let i = 0; i < o.length; ) {
        const u = Math.min(o.length - i, 3);
        r(parseInt(o.substring(i, i + u), 10), u * 3 + 1, a), i += u;
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
        u += c.ALPHANUMERIC_CHARSET.indexOf(o.charAt(i + 1)), r(u, 11, a);
      }
      return i < o.length && r(
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
      if (o < 128) r(o, 8, a);
      else if (o < 16384)
        r(2, 2, a), r(o, 14, a);
      else if (o < 1e6)
        r(6, 3, a), r(o, 21, a);
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
})(qe || (qe = {}));
((e) => {
  ((t) => {
    class r {
      // The QR Code can tolerate about 30% erroneous codewords
      /*-- Constructor and fields --*/
      constructor(s, c) {
        this.ordinal = s, this.formatBits = c;
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
})(qe || (qe = {}));
((e) => {
  ((t) => {
    class r {
      /*-- Constructor and fields --*/
      constructor(s, c) {
        this.modeBits = s, this.numBitsCharCount = c;
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
      numCharCountBits(s) {
        return this.numBitsCharCount[Math.floor((s + 7) / 17)];
      }
    }
    t.Mode = r;
  })(e.QrSegment || (e.QrSegment = {}));
})(qe || (qe = {}));
const vp = "_root_1leml_1", gp = {
  root: vp
}, kp = {
  low: qe.QrCode.Ecc.LOW,
  medium: qe.QrCode.Ecc.MEDIUM,
  quartile: qe.QrCode.Ecc.QUARTILE,
  high: qe.QrCode.Ecc.HIGH
};
function S_({
  value: e,
  size: t = 128,
  render: r = "svg",
  errorCorrection: l = "medium",
  margin: s = 4,
  ariaLabel: c,
  className: d,
  onError: o
}) {
  const a = c ?? `QR code for ${e}`, i = Q(null), u = A2("(prefers-color-scheme: dark)"), [h, x] = W(null);
  v1(() => {
    const M = document.documentElement;
    x(M.dataset.theme ?? null);
    const v = new MutationObserver(() => {
      x(M.dataset.theme ?? null);
    });
    return v.observe(M, {
      attributes: !0,
      attributeFilter: ["data-theme"]
    }), () => v.disconnect();
  }, []);
  const b = g1(() => {
    try {
      return qe.QrCode.encodeText(e, kp[l]);
    } catch {
      return null;
    }
  }, [e, l]), k = Q(null);
  v1(() => {
    if (b !== null) {
      k.current = null;
      return;
    }
    const M = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error(M), (k.current?.value !== e || k.current?.onError !== o) && (k.current = { value: e, onError: o }, o?.(M));
  }, [b, e, o]);
  const m = Math.max(0, Math.floor(s)), _ = [gp.root, d].filter(Boolean).join(" ");
  if (v1(() => {
    if (r !== "canvas" || b === null) return;
    const M = i.current, v = M?.getContext("2d");
    if (!M || !v) return;
    const w = getComputedStyle(M), C = w.getPropertyValue("--dx-text-color").trim() || "#000", z = w.getPropertyValue("--dx-surface-color").trim() || "#fff";
    yp(v, b, t, m, C, z);
  }, [r, b, t, m, u, h]), b === null)
    return /* @__PURE__ */ n("div", { className: _, role: "img", "aria-label": a, "data-qr-error": "true" });
  const p = b.size + m * 2, f = t / p;
  if (r === "canvas")
    return /* @__PURE__ */ n(
      "canvas",
      {
        ref: i,
        className: _,
        width: t,
        height: t,
        role: "img",
        "aria-label": a,
        "data-value": e
      }
    );
  const g = [];
  for (let M = 0; M < b.size; M++)
    for (let v = 0; v < b.size; v++)
      b.getModule(v, M) && g.push(
        /* @__PURE__ */ n(
          "rect",
          {
            x: (v + m) * f,
            y: (M + m) * f,
            width: f + 0.5,
            height: f + 0.5
          },
          `${v}-${M}`
        )
      );
  return /* @__PURE__ */ L(
    "svg",
    {
      className: _,
      width: t,
      height: t,
      viewBox: `0 0 ${t} ${t}`,
      role: "img",
      "aria-label": a,
      "data-value": e,
      children: [
        /* @__PURE__ */ n("rect", { width: t, height: t, fill: "var(--dx-surface-color)" }),
        /* @__PURE__ */ n("g", { fill: "var(--dx-text-color)", children: g })
      ]
    }
  );
}
function yp(e, t, r, l, s, c) {
  const d = r / (t.size + l * 2);
  e.fillStyle = c, e.fillRect(0, 0, r, r), e.fillStyle = s;
  for (let o = 0; o < t.size; o++)
    for (let a = 0; a < t.size; a++)
      t.getModule(a, o) && e.fillRect((a + l) * d, (o + l) * d, d + 0.5, d + 0.5);
}
const xp = "_root_1v9la_1", bp = "_value_1v9la_9", g2 = {
  root: xp,
  value: bp
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
], y2 = 104, Mp = 106;
function Cp(e) {
  const t = [y2];
  for (let l = 0; l < e.length; l++) {
    const s = e.charCodeAt(l);
    t.push(s >= 32 && s <= 126 ? s - 32 : 0);
  }
  let r = y2;
  for (let l = 1; l < t.length; l++) r += l * t[l];
  return t.push(r % 103, Mp), t;
}
function A_({
  value: e,
  format: t = "Code128",
  height: r = 60,
  showValue: l = !1,
  ariaLabel: s,
  className: c
}) {
  const d = s ?? `Barcode ${e}`, o = g1(() => {
    const a = [];
    let i = 0;
    for (const u of Cp(e)) {
      const h = k2[u] ?? k2[0];
      for (let x = 0; x < h.length; x++) {
        const b = Number(h[x]);
        x % 2 === 0 && a.push({ x: i, w: b }), i += b;
      }
    }
    return { modules: a, total: i };
  }, [e]);
  return /* @__PURE__ */ L("span", { className: [g2.root, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ L(
      "svg",
      {
        width: "100%",
        height: r,
        viewBox: `0 0 ${o.total} ${r}`,
        preserveAspectRatio: "none",
        role: "img",
        "aria-label": d,
        "data-value": e,
        children: [
          /* @__PURE__ */ n(
            "rect",
            {
              width: o.total,
              height: r,
              fill: "var(--dx-surface-color)"
            }
          ),
          o.modules.map((a, i) => /* @__PURE__ */ n(
            "rect",
            {
              x: a.x,
              y: 0,
              width: a.w,
              height: r,
              fill: "var(--dx-text-color)"
            },
            i
          ))
        ]
      }
    ),
    l && /* @__PURE__ */ n("span", { className: g2.value, children: e })
  ] });
}
const wp = "_root_16i43_1", zp = "_svg_16i43_10", Lp = "_gridline_16i43_15", $p = "_tickLabel_16i43_21", Np = "_axisTitle_16i43_27", Op = "_dataLabel_16i43_34", Sp = "_gaugeValue_16i43_40", Ap = "_legend_16i43_47", Hp = "_legendItem_16i43_55", jp = "_swatch_16i43_63", Tp = "_tooltip_16i43_70", Vp = "_visuallyHidden_16i43_84", W1 = {
  root: wp,
  svg: zp,
  gridline: Lp,
  tickLabel: $p,
  axisTitle: Np,
  dataLabel: Op,
  gaugeValue: Sp,
  legend: Ap,
  legendItem: Hp,
  swatch: jp,
  tooltip: Tp,
  visuallyHidden: Vp
}, x2 = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
], I2 = /* @__PURE__ */ new Set([
  "line",
  "area",
  "bar",
  "column",
  "scatter",
  "bubble"
]), Dp = /* @__PURE__ */ new Set([...I2, "heatmap"]);
function Ep(e, t, r) {
  const l = t - e || 1, s = r ?? Math.pow(10, Math.floor(Math.log10(l / 4))), c = Math.floor(e / s) * s, d = Math.ceil(t / s) * s, o = [];
  for (let a = c; a <= d + 1e-9; a += s)
    o.push(Number(a.toFixed(6)));
  return { min: c, max: d, step: s, ticks: o };
}
function Ip(e) {
  return e.data.map((t) => ({
    cat: String(t[e.categoryProperty] ?? ""),
    val: Number(t[e.valueProperty]),
    size: e.sizeProperty ? Number(t[e.sizeProperty]) : void 0,
    item: t
  }));
}
function p0(e, t, r) {
  return /* @__PURE__ */ L(
    "g",
    {
      "data-chart-type": t.type,
      role: "list",
      "aria-label": t.title ?? `Series ${e + 1}`,
      children: [
        /* @__PURE__ */ n("title", { children: t.title ?? `Series ${e + 1}` }),
        r
      ]
    },
    e
  );
}
const _e = (e) => e * Math.PI / 180;
function qp(e, t, r, l, s) {
  const { pad: c, plotW: d, plotH: o } = e, a = c.l + d / 2, i = c.t + o / 2, u = Math.min(d, o) / 3, h = t.type === "donut" ? t.innerRadius ?? u * 0.5 : 0, x = l.reduce((k, m) => k + (Number(m.val) || 0), 0);
  let b = -90;
  return p0(
    r,
    t,
    l.map((k, m) => {
      const _ = x ? k.val / x * 360 : 0, p = b, f = b + _;
      b = f;
      const g = _ > 180 ? 1 : 0, M = a + u * Math.cos(_e(p)), v = i + u * Math.sin(_e(p)), w = a + u * Math.cos(_e(f)), C = i + u * Math.sin(_e(f)), z = a + h * Math.cos(_e(f)), A = i + h * Math.sin(_e(f)), S = a + h * Math.cos(_e(p)), O = i + h * Math.sin(_e(p)), $ = h ? `M ${M} ${v} A ${u} ${u} 0 ${g} 1 ${w} ${C} L ${z} ${A} A ${h} ${h} 0 ${g} 0 ${S} ${O} Z` : `M ${a} ${i} L ${M} ${v} A ${u} ${u} 0 ${g} 1 ${w} ${C} Z`, y = (p + f) / 2, N = a + (u + 12) * Math.cos(_e(y)), T = i + (u + 12) * Math.sin(_e(y));
      return /* @__PURE__ */ L("g", { role: "listitem", children: [
        /* @__PURE__ */ n(
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
        t.labels?.visible && /* @__PURE__ */ n(
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
function Pp(e, t, r, l, s) {
  const { pad: c, plotW: d, scale: o, xFor: a, yFor: i, categories: u } = e, h = new Map(u.map((x, b) => [x, b]));
  return p0(
    r,
    t,
    l.map((x, b) => {
      const k = h.get(x.cat) ?? 0, m = Number(l[b].cat), _ = Number.isNaN(m) ? a(k) : c.l + (m - o.min) / (o.max - o.min || 1) * d, p = i(x.val), f = t.type === "bubble" && x.size !== void 0 ? Math.max(4, Math.min(12, x.size / 10)) : 4;
      return /* @__PURE__ */ L("g", { role: "listitem", children: [
        /* @__PURE__ */ n(
          "circle",
          {
            cx: _,
            cy: p,
            r: f,
            fill: s,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ n(
          "circle",
          {
            cx: _,
            cy: p,
            r: 12,
            fill: "transparent",
            onMouseEnter: () => e.tooltipVisible && e.showTip(_, p, `${t.title ?? x.cat}: ${x.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, x.cat, x.val, x.item),
            style: { cursor: "pointer" }
          }
        )
      ] }, b);
    })
  );
}
function Bp(e, t, r, l, s) {
  const { scale: c, xFor: d, yFor: o, categories: a, series: i } = e, u = new Map(a.map((k, m) => [k, m])), h = (k) => {
    if (!t.stack) return c.min;
    let m = 0;
    for (let _ = 0; _ < r; _++) {
      const p = i[_];
      if (p?.stack !== t.stack) continue;
      const f = p.data.find(
        (g) => String(g[p.categoryProperty] ?? "") === k
      );
      f && (m += Number(f[p.valueProperty]) || 0);
    }
    return m;
  }, x = l.map((k) => {
    const m = u.get(k.cat) ?? 0, _ = h(k.cat);
    return `${m === 0 ? "M" : "L"} ${d(m)} ${o(_ + k.val)}`;
  }).join(" "), b = l.map((k) => {
    const m = u.get(k.cat) ?? 0, _ = h(k.cat);
    return `${m === 0 ? "M" : "L"} ${d(m)} ${o(_)}`;
  }).join(" ");
  return p0(
    r,
    t,
    /* @__PURE__ */ L(b1, { children: [
      t.type === "area" && /* @__PURE__ */ n(
        "path",
        {
          d: `${x} L ${d(l.length - 1)} ${o(h(l[l.length - 1].cat))} L ${d(0)} ${o(h(l[0].cat))} Z`,
          fill: s,
          fillOpacity: 0.25,
          stroke: "none"
        }
      ),
      /* @__PURE__ */ n("path", { d: x, fill: "none", stroke: s, strokeWidth: 2 }),
      t.stack && /* @__PURE__ */ n("path", { d: b, fill: "none", stroke: "transparent" }),
      l.map((k, m) => {
        const _ = u.get(k.cat) ?? 0, p = h(k.cat), f = d(_), g = o(p + k.val);
        return /* @__PURE__ */ L("g", { role: "listitem", children: [
          /* @__PURE__ */ n(
            "circle",
            {
              cx: f,
              cy: g,
              r: 4,
              fill: s,
              stroke: "var(--dx-surface-color)",
              strokeWidth: 1.5
            }
          ),
          /* @__PURE__ */ n(
            "rect",
            {
              x: f - 12,
              y: g - 12,
              width: 24,
              height: 24,
              fill: "transparent",
              onMouseEnter: () => e.tooltipVisible && e.showTip(f, g, `${t.title ?? k.cat}: ${k.val}`),
              onMouseLeave: () => e.hideTip(),
              onClick: () => e.handleClick(t, k.cat, k.val, k.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ n(
            "text",
            {
              x: f,
              y: g - 8,
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
function Rp(e, t, r, l, s) {
  const { pad: c, plotW: d, plotH: o, scale: a, xFor: i, yFor: u, categories: h, series: x } = e, b = new Map(h.map((m, _) => [m, _])), k = t.type === "bar";
  return p0(
    r,
    t,
    l.map((m, _) => {
      const p = b.get(m.cat) ?? 0;
      let f = 0;
      if (t.stack)
        for (let y = 0; y < r; y++) {
          const N = x[y];
          if (N?.stack !== t.stack) continue;
          const T = N.data.find(
            (V) => String(V[N.categoryProperty] ?? "") === m.cat
          );
          T && (f += Number(T[N.valueProperty]) || 0);
        }
      const g = f + m.val, M = x.filter(
        (y) => !y.stack || y.stack === t.stack
      ).length, v = d / Math.max(1, h.length), w = k ? 18 : Math.max(12, v / (t.stack ? 1 : x.length) - 4), C = k ? c.l + f / (a.max - a.min || 1) * d : i(p) - w / 2 + (t.stack ? 0 : r % M * w), z = k ? c.t + p * o / Math.max(1, h.length) + 4 : u(g), A = k ? m.val / (a.max - a.min || 1) * d : w - 4, S = k ? 16 : u(f) - u(g), O = k ? c.l + f / (a.max - a.min || 1) * d : C, $ = k ? c.t + p * o / Math.max(1, h.length) + 4 : z;
      return /* @__PURE__ */ L("g", { role: "listitem", children: [
        /* @__PURE__ */ n(
          "rect",
          {
            x: O,
            y: $,
            width: k ? A : w - 4,
            height: S,
            fill: s,
            rx: 2,
            onMouseEnter: () => e.tooltipVisible && e.showTip(
              O + (k ? A : w) / 2,
              $,
              `${t.title ?? m.cat}: ${m.val}`
            ),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, m.cat, m.val, m.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ n(
          "text",
          {
            x: O + (k ? A : w) / 2,
            y: $ - 4,
            textAnchor: "middle",
            className: W1.dataLabel,
            children: m.val
          }
        )
      ] }, _);
    })
  );
}
function Fp(e, t, r, l, s) {
  const { pad: c, plotW: d, plotH: o, scale: a, tooltipVisible: i, showTip: u, hideTip: h } = e, x = c.l + d / 2, b = c.t + o * 0.78, k = Math.min(d, o) * 0.36, m = 135, _ = 270, p = l.reduce((w, C) => w + (Number(C.val) || 0), 0), f = a.max - a.min || 1, g = Math.min(1, Math.max(0, (p - a.min) / f)), M = (w, C) => {
    const [z, A] = [
      x + k * Math.cos(_e(w)),
      b + k * Math.sin(_e(w))
    ], [S, O] = [
      x + k * Math.cos(_e(C)),
      b + k * Math.sin(_e(C))
    ], $ = C - w > 180 ? 1 : 0;
    return `M ${z} ${A} A ${k} ${k} 0 ${$} 1 ${S} ${O}`;
  }, v = Number(p.toFixed(2));
  return p0(
    r,
    t,
    // One listitem per series value (parity with the point renderers):
    // the series <g role="list"> requires owned listitem children or
    // aria-required-children fails.
    /* @__PURE__ */ L("g", { role: "listitem", children: [
      /* @__PURE__ */ n(
        "path",
        {
          d: M(m, m + _),
          fill: "none",
          stroke: "var(--dx-border-color)",
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      g > 0 && /* @__PURE__ */ n(
        "path",
        {
          d: M(m, m + _ * g),
          fill: "none",
          stroke: s,
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ n("text", { x, y: b - 4, textAnchor: "middle", className: W1.gaugeValue, children: v }),
      /* @__PURE__ */ n(
        "path",
        {
          d: M(m, m + _),
          fill: "none",
          stroke: "transparent",
          strokeWidth: 22,
          onMouseEnter: () => i && u(x, b - k, `${t.title ?? "Value"}: ${v}`),
          onMouseLeave: () => h(),
          onClick: () => e.handleClick(t, l[0]?.cat ?? "", p, l[0]?.item ?? {}),
          style: { cursor: "pointer" }
        }
      ),
      t.labels?.visible && /* @__PURE__ */ n(
        "text",
        {
          x,
          y: b + k + 18,
          textAnchor: "middle",
          className: W1.dataLabel,
          children: t.title ?? ""
        }
      )
    ] })
  );
}
function q2(e) {
  const { pad: t, plotW: r, plotH: l, categories: s } = e, c = t.l + r / 2, d = t.t + l / 2, o = Math.min(r, l) / 2 - 24, a = Math.max(3, s.length), i = (h) => _e(-90 + 360 * h / a);
  return { cx: c, cy: d, radius: o, angleFor: i, vertexFor: (h, x) => {
    const b = i(h);
    return [
      c + o * x * Math.cos(b),
      d + o * x * Math.sin(b)
    ];
  } };
}
function Kp(e) {
  const { categories: t } = e, { cx: r, cy: l, vertexFor: s } = q2(e);
  return /* @__PURE__ */ L("g", { "data-chart-type": "radar-grid", "aria-hidden": "true", children: [
    [0.25, 0.5, 0.75, 1].map((d) => /* @__PURE__ */ n(
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
      return /* @__PURE__ */ n(
        "line",
        {
          x1: r,
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
function Wp(e, t, r, l, s) {
  const { categories: c, tooltipVisible: d, showTip: o, hideTip: a } = e, { cx: i, cy: u, radius: h, angleFor: x, vertexFor: b } = q2(e), k = e.scale.max || 1, m = (p) => l.find((f) => f.cat === p)?.val ?? 0, _ = c.map((p, f) => {
    const g = Math.min(1, Math.max(0, m(p) / k)), [M, v] = b(f, g);
    return `${M},${v}`;
  }).join(" ");
  return p0(
    r,
    t,
    /* @__PURE__ */ L(b1, { children: [
      /* @__PURE__ */ n(
        "polygon",
        {
          points: _,
          fill: s,
          fillOpacity: 0.25,
          stroke: s,
          strokeWidth: 2
        }
      ),
      c.map((p, f) => {
        const g = Math.min(1, Math.max(0, m(p) / k)), [M, v] = b(f, g), [w, C] = b(f, 1);
        return /* @__PURE__ */ L("g", { role: "listitem", children: [
          /* @__PURE__ */ n(
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
          /* @__PURE__ */ n(
            "circle",
            {
              cx: M,
              cy: v,
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
          /* @__PURE__ */ n(
            "text",
            {
              x: i + (h + 14) * Math.cos(x(f)),
              y: u + (h + 14) * Math.sin(x(f)) + 4,
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
function Zp(e, t, r, l, s) {
  const { pad: c, plotW: d, plotH: o, tooltipVisible: a, showTip: i, hideTip: u } = e, h = l, x = Math.max(1, ...h.map((m) => Number(m.val) || 0)), b = o / Math.max(1, h.length), k = c.l + d / 2;
  return p0(
    r,
    t,
    h.map((m, _) => {
      const f = Math.max(0, Number(m.val) || 0) / x * d, g = h[_ + 1], M = g ? Math.max(0, Number(g.val) || 0) / x * d : f * 0.7, v = c.t + _ * b + 2, w = Math.max(4, b - 6), C = 1 - _ * (0.45 / Math.max(1, h.length));
      return /* @__PURE__ */ L("g", { role: "listitem", children: [
        /* @__PURE__ */ n(
          "path",
          {
            d: `M ${k - f / 2} ${v} L ${k + f / 2} ${v} L ${k + M / 2} ${v + w} L ${k - M / 2} ${v + w} Z`,
            fill: s,
            fillOpacity: C,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => a && i(k, v, `${t.title ?? m.cat}: ${m.val}`),
            onMouseLeave: () => u(),
            onClick: () => e.handleClick(t, m.cat, m.val, m.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ L(
          "text",
          {
            x: k,
            y: v + w / 2 + 4,
            textAnchor: "middle",
            className: W1.dataLabel,
            children: [
              m.cat,
              " · ",
              m.val
            ]
          }
        )
      ] }, _);
    })
  );
}
function Up(e, t, r, l, s) {
  const { pad: c, plotW: d, plotH: o, categories: a, tooltipVisible: i, showTip: u, hideTip: h } = e, x = [];
  t.data.forEach((g) => {
    const M = t.rowProperty ? String(g[t.rowProperty] ?? "") : "All";
    x.includes(M) || x.push(M);
  });
  const b = l.map((g) => g.val).filter((g) => Number.isFinite(g)), k = b.length ? Math.min(...b) : 0, m = b.length ? Math.max(...b) : 1, _ = d / Math.max(1, a.length), p = o / Math.max(1, x.length), f = (g) => m === k ? 0.6 : 0.15 + 0.85 * ((g - k) / (m - k));
  return p0(
    r,
    t,
    /* @__PURE__ */ L(b1, { children: [
      x.map((g, M) => /* @__PURE__ */ n(
        "text",
        {
          x: c.l - 8,
          y: c.t + M * p + p / 2 + 4,
          textAnchor: "end",
          className: W1.tickLabel,
          children: g
        },
        g
      )),
      l.map((g, M) => {
        const v = t.data[M], w = a.indexOf(g.cat), C = x.indexOf(
          t.rowProperty && v ? String(v[t.rowProperty] ?? "") : "All"
        );
        if (w < 0 || C < 0) return null;
        const z = c.l + w * _, A = c.t + C * p;
        return /* @__PURE__ */ L("g", { role: "listitem", children: [
          /* @__PURE__ */ n(
            "rect",
            {
              x: z + 1,
              y: A + 1,
              width: Math.max(1, _ - 2),
              height: Math.max(1, p - 2),
              fill: s,
              fillOpacity: f(g.val),
              onMouseEnter: () => i && u(z + _ / 2, A, `${t.title ?? g.cat}: ${g.val}`),
              onMouseLeave: () => h(),
              onClick: () => e.handleClick(t, g.cat, g.val, g.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ n(
            "text",
            {
              x: z + _ / 2,
              y: A + p / 2 + 4,
              textAnchor: "middle",
              className: W1.dataLabel,
              children: g.val
            }
          )
        ] }, M);
      })
    ] })
  );
}
function Gp(e, t, r) {
  const l = Ip(t), s = e.colorFor(r, t);
  switch (t.type) {
    case "pie":
    case "donut":
      return qp(e, t, r, l, s);
    case "scatter":
    case "bubble":
      return Pp(e, t, r, l, s);
    case "line":
    case "area":
      return Bp(e, t, r, l, s);
    case "gauge":
      return Fp(e, t, r, l, s);
    case "radar":
      return Wp(e, t, r, l, s);
    case "funnel":
      return Zp(e, t, r, l, s);
    case "heatmap":
      return Up(e, t, r, l, s);
    default:
      return Rp(e, t, r, l, s);
  }
}
function H_({
  series: e,
  width: t = 600,
  height: r = 400,
  valueAxis: l,
  categoryAxis: s,
  showLegend: c = !0,
  tooltipVisible: d = !0,
  onSeriesClick: o,
  ariaLabel: a = "Chart",
  className: i
}) {
  const [u, h] = W(
    null
  ), x = g1(() => {
    const S = /* @__PURE__ */ new Set();
    for (const O of e)
      for (const $ of O.data) S.add(String($[O.categoryProperty] ?? ""));
    return [...S];
  }, [e]), b = g1(() => {
    const S = e.flatMap(($) => $.data.map((y) => Number(y[$.valueProperty]))).filter(($) => !Number.isNaN($)), O = /* @__PURE__ */ new Map();
    for (const $ of e) {
      if (!$.stack) continue;
      let y = O.get($.stack);
      y || O.set($.stack, y = /* @__PURE__ */ new Map());
      for (const N of $.data) {
        const T = String(N[$.categoryProperty] ?? ""), V = Number(N[$.valueProperty]);
        Number.isNaN(V) || y.set(T, (y.get(T) ?? 0) + V);
      }
    }
    for (const $ of O.values()) S.push(...$.values());
    return S;
  }, [e]), k = l?.min ?? (b.length ? Math.min(0, ...b) : 0), m = l?.max ?? (b.length ? Math.max(...b) : 10), _ = g1(
    () => Ep(k, m, l?.step),
    [k, m, l?.step]
  ), p = { t: 16, r: 16, b: 40, l: 56 }, f = t - p.l - p.r, g = r - p.t - p.b, M = (S) => p.l + S / Math.max(1, x.length - 1) * f, v = (S) => p.t + (1 - (S - _.min) / (_.max - _.min || 1)) * g, w = (S, O) => O.color ?? x2[S % x2.length], C = e.some((S) => I2.has(S.type)), z = e.some((S) => Dp.has(S.type)), A = {
    categories: x,
    scale: _,
    pad: p,
    plotW: f,
    plotH: g,
    xFor: M,
    yFor: v,
    colorFor: w,
    tooltipVisible: d,
    showTip: (S, O, $) => h({ x: S, y: O, text: $ }),
    hideTip: () => h(null),
    handleClick: (S, O, $, y) => o?.({
      seriesTitle: S.title ?? "",
      category: O,
      value: $,
      item: y
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
            height: r,
            className: W1.svg,
            role: "presentation",
            children: [
              C && l?.gridlines !== !1 && _.ticks.map((S) => /* @__PURE__ */ n(
                "line",
                {
                  x1: p.l,
                  x2: p.l + f,
                  y1: v(S),
                  y2: v(S),
                  className: W1.gridline
                },
                S
              )),
              z && s?.gridlines && x.map((S, O) => /* @__PURE__ */ n(
                "line",
                {
                  x1: M(O),
                  x2: M(O),
                  y1: p.t,
                  y2: p.t + g,
                  className: W1.gridline
                },
                O
              )),
              C && _.ticks.map((S) => /* @__PURE__ */ n(
                "text",
                {
                  x: p.l - 8,
                  y: v(S) + 4,
                  textAnchor: "end",
                  className: W1.tickLabel,
                  children: S
                },
                S
              )),
              z && x.map((S, O) => /* @__PURE__ */ n(
                "text",
                {
                  x: M(O),
                  y: p.t + g + 16,
                  textAnchor: "middle",
                  className: W1.tickLabel,
                  children: S
                },
                S
              )),
              C && l?.title && /* @__PURE__ */ n(
                "text",
                {
                  x: 12,
                  y: p.t + g / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90,12,${p.t + g / 2})`,
                  className: W1.axisTitle,
                  children: l.title
                }
              ),
              z && s?.title && /* @__PURE__ */ n(
                "text",
                {
                  x: p.l + f / 2,
                  y: r - 4,
                  textAnchor: "middle",
                  className: W1.axisTitle,
                  children: s.title
                }
              ),
              e.some((S) => S.type === "radar") && Kp(A),
              e.map((S, O) => Gp(A, S, O))
            ]
          }
        ),
        u && /* @__PURE__ */ n(
          "div",
          {
            className: W1.tooltip,
            style: { left: u.x, top: u.y - 28 },
            children: u.text
          }
        ),
        c && /* @__PURE__ */ n("div", { className: W1.legend, children: e.map((S, O) => /* @__PURE__ */ L("span", { className: W1.legendItem, children: [
          /* @__PURE__ */ n(
            "span",
            {
              className: W1.swatch,
              style: { backgroundColor: w(O, S) },
              "aria-hidden": "true"
            }
          ),
          S.title ?? `Series ${O + 1}`
        ] }, O)) }),
        /* @__PURE__ */ L(
          "table",
          {
            className: W1.visuallyHidden,
            id: `${a.replace(/\s+/g, "-")}-table`,
            children: [
              /* @__PURE__ */ n("caption", { children: a }),
              /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ L("tr", { children: [
                /* @__PURE__ */ n("th", { children: "Series" }),
                /* @__PURE__ */ n("th", { children: "Category" }),
                /* @__PURE__ */ n("th", { children: "Value" })
              ] }) }),
              /* @__PURE__ */ n("tbody", { children: e.map(
                (S) => S.data.map((O, $) => /* @__PURE__ */ L("tr", { children: [
                  /* @__PURE__ */ n("td", { children: S.title ?? "" }),
                  /* @__PURE__ */ n("td", { children: S.rowProperty ? `${String(O[S.rowProperty] ?? "")} / ${String(O[S.categoryProperty] ?? "")}` : String(O[S.categoryProperty] ?? "") }),
                  /* @__PURE__ */ n("td", { children: String(O[S.valueProperty] ?? "") })
                ] }, `${S.title}-${$}`))
              ) })
            ]
          }
        )
      ]
    }
  );
}
export {
  q5 as ALERT_ICON,
  Km as Accordion,
  Sm as Alert,
  Vm as AutoGrid,
  Um as Autocomplete,
  Rm as Avatar,
  Qp as Badge,
  A_ as Barcode,
  Em as Body,
  g_ as Breadcrumb,
  V0 as Button,
  Jp as Card,
  M_ as Carousel,
  H_ as Chart,
  Cm as Checkbox,
  Xm as Checkboxlist,
  n_ as Colorpicker,
  jm as Column,
  f_ as ContextMenuProvider,
  F0 as DEFAULT_OPERATOR_BY_TYPE,
  t9 as DEFAULT_PALETTE,
  a8 as DEFAULT_THEMES,
  km as DataFilter,
  ym as DataGrid,
  xm as DataList,
  l_ as Datepicker,
  Ta as Dialog,
  $m as DialogProvider,
  u_ as DropZone,
  Zm as Dropdown,
  lm as EmptyState,
  w2 as FILTER_OPERATORS,
  v_ as FabMenu,
  om as Field,
  sm as Fieldset,
  N6 as Footer,
  cm as Form,
  am as FormField,
  L_ as Gantt,
  A6 as Header,
  M1 as Icon,
  Mm as Input,
  bm as Label,
  Dm as Layout,
  k_ as Link,
  Gm as Listbox,
  t_ as Mask,
  du as Menu,
  V2 as MenuItem,
  r_ as Numeric,
  Ul as Pager,
  m_ as PanelMenu,
  p_ as PanelMenuItem,
  e_ as Password,
  w_ as PickList,
  $_ as Pivot,
  __ as ProfileMenu,
  qm as Progress,
  S_ as QRCode,
  Ym as Radiobuttonlist,
  o_ as Rating,
  Hm as Row,
  z_ as Scheduler,
  c_ as SecurityCode,
  w0 as Select,
  Jm as Selectbar,
  F6 as Sidebar,
  Im as SidebarToggle,
  i_ as SignaturePad,
  Am as Skeleton,
  a_ as Slider,
  Qm as Splitbutton,
  x_ as Splitter,
  Tm as Stack,
  rm as Stat,
  y_ as Steps,
  wm as Switch,
  nm as Table,
  Fm as Tabs,
  Xa as Text,
  Wm as Textarea,
  ua as Textbox,
  Pm as ThemeSwitcher,
  Bm as ThemeToggle,
  N_ as Timeline,
  s_ as Timespanpicker,
  Om as ToastProvider,
  b_ as Toc,
  f8 as Togglebutton,
  zm as Tooltip,
  C_ as Tree,
  d_ as Upload,
  O_ as VirtualGrid,
  ro as aggregateValue,
  L2 as applyFilters,
  to as applyGridState,
  Yt as collectGroupKeys,
  C0 as columnValue,
  mm as compare,
  vm as custom,
  Jl as cycleSort,
  Qt as defaultOperatorForType,
  dm as email,
  c2 as formatMasked,
  vt as formatValue,
  _t as getByPath,
  Gl as groupItems,
  tm as iconNames,
  em as iconSetNames,
  M2 as iconSets,
  z2 as matchesFilters,
  fm as maxLength,
  hm as minLength,
  eo as paginate,
  um as pattern,
  pm as range,
  im as required,
  _m as requiredTrue,
  b2 as resolveVariant,
  tl as runValidators,
  nt as shadeClass,
  gl as sortItems,
  Ql as sortedItems,
  no as toCsv,
  fl as toFilterString,
  vl as toODataFilterString,
  h_ as useContextMenu,
  Lm as useDialog,
  el as useFormContext,
  gm as useFormField,
  A2 as useMediaQuery,
  Nm as useToast
};
