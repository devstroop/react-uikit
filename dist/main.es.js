import { jsx as t, jsxs as u, Fragment as z } from "react/jsx-runtime";
import { forwardRef as C, useId as P, isValidElement as me, cloneElement as $e, useState as I, useRef as D, useCallback as j, useMemo as H, useContext as ze, createContext as ve, useEffect as R, Children as Ie } from "react";
const qe = "_button_1q3cy_1", Ce = "_primary_1q3cy_29", Le = "_secondary_1q3cy_38", Te = "_ghost_1q3cy_48", Ae = "_danger_1q3cy_57", Be = "_success_1q3cy_66", De = "_info_1q3cy_75", Ve = "_xs_1q3cy_85", Re = "_sm_1q3cy_91", Fe = "_md_1q3cy_97", We = "_lg_1q3cy_103", Pe = "_xl_1q3cy_109", He = "_iconOnly_1q3cy_115", Ge = "_fullWidth_1q3cy_141", U = {
  button: qe,
  primary: Ce,
  secondary: Le,
  ghost: Te,
  danger: Ae,
  success: Be,
  info: De,
  xs: Ve,
  sm: Re,
  md: Fe,
  lg: We,
  xl: Pe,
  iconOnly: He,
  fullWidth: Ge
}, El = C(function({
  variant: s = "primary",
  size: n = "md",
  fullWidth: o = !1,
  iconOnly: a = !1,
  className: r,
  type: i = "button",
  ...l
}, c) {
  const _ = [
    U.button,
    U[s],
    U[n],
    o ? U.fullWidth : null,
    a ? U.iconOnly : null,
    r
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ t("button", { ref: c, type: i, className: _, ...l });
}), Xe = "_card_10w4x_1", Ke = "_elevated_10w4x_8", Ue = "_outlined_10w4x_13", Ye = "_interactive_10w4x_17", Je = "_text_10w4x_25", Qe = "_header_10w4x_41", Ze = "_body_10w4x_48", et = "_footer_10w4x_58", Y = {
  card: Xe,
  elevated: Ke,
  outlined: Ue,
  interactive: Ye,
  text: Je,
  header: Qe,
  body: Ze,
  footer: et
}, Il = C(function({ variant: s = "elevated", header: n, footer: o, className: a, children: r, onKeyDown: i, ...l }, c) {
  const _ = s === "interactive";
  return /* @__PURE__ */ u(
    "div",
    {
      ref: c,
      tabIndex: _ ? 0 : void 0,
      onKeyDown: (h) => {
        i?.(h), !(!_ || h.key !== "Enter" && h.key !== " ") && (h.preventDefault(), h.currentTarget.click());
      },
      className: [Y.card, Y[s], a].filter(Boolean).join(" "),
      ...l,
      children: [
        n != null && /* @__PURE__ */ t("div", { className: Y.header, children: n }),
        /* @__PURE__ */ t("div", { className: Y.body, children: r }),
        o != null && /* @__PURE__ */ t("div", { className: Y.footer, children: o })
      ]
    }
  );
}), tt = "_badge_dcudr_1", st = "_xs_dcudr_14", nt = "_sm_dcudr_19", ot = "_md_dcudr_24", at = "_lg_dcudr_29", rt = "_xl_dcudr_34", lt = "_neutral_dcudr_40", it = "_primary_dcudr_45", ct = "_success_dcudr_50", _t = "_warning_dcudr_55", dt = "_danger_dcudr_60", ft = "_solid_dcudr_66", ut = "_outline_dcudr_91", oe = {
  badge: tt,
  xs: st,
  sm: nt,
  md: ot,
  lg: at,
  xl: rt,
  neutral: lt,
  primary: it,
  success: ct,
  warning: _t,
  danger: dt,
  solid: ft,
  outline: ut
}, ql = C(function({ tone: s = "neutral", variant: n = "soft", size: o = "md", className: a, children: r, ...i }, l) {
  return /* @__PURE__ */ t(
    "span",
    {
      ref: l,
      className: [oe.badge, oe[o], oe[s], oe[n], a].filter(Boolean).join(" "),
      ...i,
      children: r
    }
  );
}), mt = "_xs_cg2f2_2", pt = "_sm_cg2f2_7", ht = "_md_cg2f2_1", gt = "_lg_cg2f2_17", yt = "_xl_cg2f2_22", bt = {
  xs: mt,
  sm: pt,
  md: ht,
  lg: gt,
  xl: yt
}, Cl = [
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
  "link"
], xt = {
  check: /* @__PURE__ */ t("path", { d: "M20 6L9 17l-5-5" }),
  close: /* @__PURE__ */ t("path", { d: "M18 6L6 18M6 6l12 12" }),
  "chevron-down": /* @__PURE__ */ t("path", { d: "M6 9l6 6 6-6" }),
  "chevron-left": /* @__PURE__ */ t("path", { d: "M15 18l-6-6 6-6" }),
  "chevron-right": /* @__PURE__ */ t("path", { d: "M9 18l6-6-6-6" }),
  "chevron-up": /* @__PURE__ */ t("path", { d: "M18 15l-6-6-6 6" }),
  search: /* @__PURE__ */ u(z, { children: [
    /* @__PURE__ */ t("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ t("path", { d: "M21 21l-4.3-4.3" })
  ] }),
  plus: /* @__PURE__ */ t("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ t("path", { d: "M5 12h14" }),
  alert: /* @__PURE__ */ u(z, { children: [
    /* @__PURE__ */ t("path", { d: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" }),
    /* @__PURE__ */ t("path", { d: "M12 9v4M12 17h.01" })
  ] }),
  info: /* @__PURE__ */ u(z, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M12 16v-4M12 8h.01" })
  ] }),
  "arrow-right": /* @__PURE__ */ t("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  "arrow-left": /* @__PURE__ */ t("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  "external-link": /* @__PURE__ */ u(z, { children: [
    /* @__PURE__ */ t("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
    /* @__PURE__ */ t("path", { d: "M15 3h6v6M10 14L21 3" })
  ] }),
  copy: /* @__PURE__ */ u(z, { children: [
    /* @__PURE__ */ t("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ t("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] }),
  trash: /* @__PURE__ */ t(z, { children: /* @__PURE__ */ t("path", { d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" }) }),
  edit: /* @__PURE__ */ u(z, { children: [
    /* @__PURE__ */ t("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ t("path", { d: "M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  settings: /* @__PURE__ */ u(z, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ t("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] }),
  user: /* @__PURE__ */ u(z, { children: [
    /* @__PURE__ */ t("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ t("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ u(z, { children: [
    /* @__PURE__ */ t("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ t("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ t("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  download: /* @__PURE__ */ t("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  upload: /* @__PURE__ */ t("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  menu: /* @__PURE__ */ t("path", { d: "M3 12h18M3 6h18M3 18h18" }),
  "more-horizontal": /* @__PURE__ */ u(z, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ t("circle", { cx: "19", cy: "12", r: "1" }),
    /* @__PURE__ */ t("circle", { cx: "5", cy: "12", r: "1" })
  ] }),
  mail: /* @__PURE__ */ u(z, { children: [
    /* @__PURE__ */ t("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ t("path", { d: "M22 6l-10 7L2 6" })
  ] }),
  lock: /* @__PURE__ */ u(z, { children: [
    /* @__PURE__ */ t("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ t("path", { d: "M7 11V7a5 5 0 0110 0v4" })
  ] }),
  eye: /* @__PURE__ */ u(z, { children: [
    /* @__PURE__ */ t("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  "eye-off": /* @__PURE__ */ u(z, { children: [
    /* @__PURE__ */ t("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ t("path", { d: "M1 1l22 22" })
  ] }),
  refresh: /* @__PURE__ */ u(z, { children: [
    /* @__PURE__ */ t("path", { d: "M23 4v6h-6M1 20v-6h6" }),
    /* @__PURE__ */ t("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
  ] }),
  calendar: /* @__PURE__ */ u(z, { children: [
    /* @__PURE__ */ t("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ t("path", { d: "M16 2v4M8 2v4M3 10h18" })
  ] }),
  clock: /* @__PURE__ */ u(z, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M12 6v6l4 2" })
  ] }),
  "check-circle": /* @__PURE__ */ u(z, { children: [
    /* @__PURE__ */ t("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ t("path", { d: "M22 4L12 14.01l-3-3" })
  ] }),
  "x-circle": /* @__PURE__ */ u(z, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] }),
  shield: /* @__PURE__ */ t(z, { children: /* @__PURE__ */ t("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  globe: /* @__PURE__ */ u(z, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
  ] }),
  file: /* @__PURE__ */ u(z, { children: [
    /* @__PURE__ */ t("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
    /* @__PURE__ */ t("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
  ] }),
  folder: /* @__PURE__ */ t("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" }),
  home: /* @__PURE__ */ u(z, { children: [
    /* @__PURE__ */ t("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
    /* @__PURE__ */ t("path", { d: "M9 22V12h6v10" })
  ] }),
  key: /* @__PURE__ */ t(z, { children: /* @__PURE__ */ t("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) }),
  link: /* @__PURE__ */ u(z, { children: [
    /* @__PURE__ */ t("path", { d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" }),
    /* @__PURE__ */ t("path", { d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" })
  ] })
}, Ll = C(function({ name: s, size: n = "md", strokeWidth: o = 2, className: a, ...r }, i) {
  const l = typeof n == "string";
  return /* @__PURE__ */ t(
    "svg",
    {
      ref: i,
      className: [l ? bt[n] : null, a].filter(Boolean).join(" "),
      width: l ? void 0 : n,
      height: l ? void 0 : n,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: o,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      ...r,
      children: xt[s]
    }
  );
}), St = "_stat_11sa0_1", $t = "_label_11sa0_8", zt = "_row_11sa0_16", vt = "_value_11sa0_22", Ot = "_delta_11sa0_28", Nt = "_success_11sa0_33", wt = "_danger_11sa0_37", kt = "_neutral_11sa0_41", jt = "_hint_11sa0_45", F = {
  stat: St,
  label: $t,
  row: zt,
  value: vt,
  delta: Ot,
  success: Nt,
  danger: wt,
  neutral: kt,
  hint: jt
}, Tl = C(function({ label: s, value: n, delta: o, deltaTone: a = "neutral", hint: r, className: i, ...l }, c) {
  return /* @__PURE__ */ u("div", { ref: c, className: [F.stat, i].filter(Boolean).join(" "), ...l, children: [
    /* @__PURE__ */ t("div", { className: F.label, children: s }),
    /* @__PURE__ */ u("div", { className: F.row, children: [
      /* @__PURE__ */ t("div", { className: F.value, children: n }),
      o != null && /* @__PURE__ */ t("div", { className: [F.delta, F[a]].join(" "), children: o })
    ] }),
    r != null && /* @__PURE__ */ t("div", { className: F.hint, children: r })
  ] });
}), Mt = "_wrap_l67ma_1", Et = "_table_l67ma_8", It = "_start_l67ma_40", qt = "_center_l67ma_44", Ct = "_end_l67ma_48", Lt = "_empty_l67ma_52", J = {
  wrap: Mt,
  table: Et,
  start: It,
  center: qt,
  end: Ct,
  empty: Lt
};
function Al({ columns: e, rows: s, rowKey: n, empty: o, className: a }) {
  return /* @__PURE__ */ u("div", { className: [J.wrap, a].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ u("table", { className: J.table, children: [
      /* @__PURE__ */ t("thead", { children: /* @__PURE__ */ t("tr", { children: e.map((r) => /* @__PURE__ */ t(
        "th",
        {
          className: r.align != null ? J[r.align] : void 0,
          scope: "col",
          children: r.header
        },
        r.key
      )) }) }),
      /* @__PURE__ */ t("tbody", { children: s.map((r) => /* @__PURE__ */ t("tr", { children: e.map((i) => /* @__PURE__ */ t(
        "td",
        {
          className: i.align != null ? J[i.align] : void 0,
          children: i.render != null ? i.render(r) : r[i.key]
        },
        i.key
      )) }, n(r))) })
    ] }),
    s.length === 0 && o != null && /* @__PURE__ */ t("div", { className: J.empty, children: o })
  ] });
}
const Tt = "_emptyState_123z1_1", At = "_icon_123z1_13", Bt = "_title_123z1_18", Dt = "_description_123z1_24", Vt = "_action_123z1_30", Q = {
  emptyState: Tt,
  icon: At,
  title: Bt,
  description: Dt,
  action: Vt
};
function Bl({ icon: e, title: s, description: n, action: o, className: a }) {
  return /* @__PURE__ */ u("div", { className: [Q.emptyState, a].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ t("div", { className: Q.icon, children: e }),
    /* @__PURE__ */ t("div", { className: Q.title, children: s }),
    n != null && /* @__PURE__ */ t("div", { className: Q.description, children: n }),
    o != null && /* @__PURE__ */ t("div", { className: Q.action, children: o })
  ] });
}
const Rt = "_field_18dbj_1", Ft = "_label_18dbj_8", Wt = "_required_18dbj_14", Pt = "_hint_18dbj_19", Ht = "_error_18dbj_24", Z = {
  field: Rt,
  label: Ft,
  required: Wt,
  hint: Pt,
  error: Ht
};
function Dl({ label: e, htmlFor: s, required: n, hint: o, error: a, children: r, className: i }) {
  const l = P(), c = P(), _ = a != null ? l : o != null ? c : null, h = me(r) && _ != null ? $e(
    r,
    {
      "aria-describedby": [
        r.props["aria-describedby"],
        _
      ].filter((f) => typeof f == "string").join(" ") || void 0,
      "aria-invalid": a != null ? !0 : r.props["aria-invalid"]
    }
  ) : r;
  return /* @__PURE__ */ u("div", { className: [Z.field, i].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ u("label", { className: Z.label, htmlFor: s, children: [
      e,
      n === !0 && /* @__PURE__ */ t("span", { className: Z.required, "aria-hidden": "true", children: "*" })
    ] }),
    h,
    a != null ? /* @__PURE__ */ t("div", { id: l, className: Z.error, "aria-live": "polite", children: a }) : o != null ? /* @__PURE__ */ t("div", { id: c, className: Z.hint, children: o }) : null
  ] });
}
const Gt = "_form_qa5tm_1", Xt = {
  form: Gt
}, Oe = ve(null);
function Kt() {
  const e = ze(Oe);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function Vl({
  model: e,
  onSubmit: s,
  onInvalidSubmit: n,
  action: o,
  method: a,
  children: r,
  className: i
}) {
  const [l, c] = I({}), [_, h] = I(0), f = D(l);
  f.current = l;
  const x = j((p) => {
    c((S) => S[p.name] === p ? S : { ...S, [p.name]: p });
  }, []), v = j((p) => {
    c((S) => {
      if (!(p in S)) return S;
      const $ = { ...S };
      return delete $[p], $;
    });
  }, []), O = j(() => {
    const p = {};
    for (const S of Object.values(f.current)) {
      const $ = S.validate();
      $.length > 0 && (p[S.name] = $);
    }
    return p;
  }, []), N = j(() => {
    const p = O();
    h((S) => S + 1), Object.keys(p).length === 0 ? s?.(e) : n?.(p);
  }, [O, e, s, n]), y = (p) => {
    o != null && a != null || (p.preventDefault(), N());
  }, g = H(
    () => ({ registerField: x, unregisterField: v, submit: N, submitCount: _ }),
    [x, v, N, _]
  ), b = [Xt.form, i].filter(Boolean).join(" ");
  return /* @__PURE__ */ t(Oe.Provider, { value: g, children: /* @__PURE__ */ t("form", { className: b, onSubmit: y, action: o, method: a, children: r }) });
}
const K = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", Rl = (e = "Required") => (s) => K(s) ? e : null, Fl = (e = "Invalid email") => (s) => K(s) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s)) ? null : e, Wl = (e, s = "Invalid format") => (n) => K(n) || e.test(String(n)) ? null : s, Pl = (e, s = `Minimum ${e} characters`) => (n) => K(n) || String(n).length >= e ? null : s, Hl = (e, s = `Maximum ${e} characters`) => (n) => K(n) || String(n).length <= e ? null : s, Gl = (e, s, n = `Between ${e} and ${s}`) => (o) => {
  if (K(o)) return null;
  const a = Number(o);
  return !Number.isNaN(a) && a >= e && a <= s ? null : n;
};
function Ut(e, s, n) {
  return e.map((o) => o(s, n)).filter((o) => o != null);
}
function Xl(e, s) {
  const { registerField: n, unregisterField: o, submitCount: a } = Kt(), [r, i] = I(s?.initialValue), [l, c] = I(!1), [_, h] = I(!1), f = D(() => []);
  f.current = () => Ut(s?.validate ?? [], r), R(() => (n({ name: e, validate: () => f.current() }), () => o(e)), [e, n, o]), R(() => {
    a > 0 && (c(!0), h(!1));
  }, [a]);
  const x = l && !_ ? f.current() : [];
  return { value: r, setValue: (O) => {
    i(O), h(!0);
  }, errors: x };
}
const Yt = "_select_17784_1", Jt = "_invalid_17784_33", Qt = "_xs_17784_39", Zt = "_sm_17784_45", es = "_md_17784_51", ts = "_lg_17784_57", ss = "_xl_17784_63", ce = {
  select: Yt,
  invalid: Jt,
  xs: Qt,
  sm: Zt,
  md: es,
  lg: ts,
  xl: ss
}, ie = C(function({ size: s = "md", invalid: n = !1, options: o, children: a, className: r, ...i }, l) {
  return /* @__PURE__ */ t(
    "select",
    {
      ref: l,
      className: [ce.select, ce[s], n ? ce.invalid : null, r].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...i,
      children: o != null ? o.map((c) => /* @__PURE__ */ t("option", { value: c.value, disabled: c.disabled, children: c.label }, c.value)) : a
    }
  );
}), ns = [
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
], ae = {
  string: "Contains",
  number: "Equals",
  boolean: "Equals",
  date: "Equals",
  enum: "Equals"
};
function ue(e, s) {
  return s.split(".").reduce((n, o) => {
    if (n != null)
      return n[o];
  }, e);
}
function ge(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function te(e, s) {
  const n = ge(e), o = ge(s);
  if (typeof n == "number" && typeof o == "number") return n - o;
  const a = String(n ?? ""), r = String(o ?? "");
  return a < r ? -1 : a > r ? 1 : 0;
}
function ye(e, s, n) {
  const o = ue(s, e.property), a = be(o, e.value, e.operator, n);
  if (e.secondOperator == null || e.secondValue === void 0) return a;
  const r = be(o, e.secondValue, e.secondOperator, n);
  return (e.logicalOperator ?? "And") === "And" ? a && r : a || r;
}
function be(e, s, n, o) {
  const a = o === "CaseInsensitive", r = (c) => a && typeof c == "string" ? c.toLowerCase() : c, i = r(e), l = r(s);
  switch (n) {
    case "Equals":
      return i === l || Array.isArray(i) && i.some((c) => r(c) === l);
    case "NotEquals":
      return i !== l && !(Array.isArray(i) && i.some((c) => r(c) === l));
    case "LessThan":
      return te(i, l) < 0;
    case "LessThanOrEquals":
      return te(i, l) <= 0;
    case "GreaterThan":
      return te(i, l) > 0;
    case "GreaterThanOrEquals":
      return te(i, l) >= 0;
    case "Contains":
      return typeof i == "string" && typeof l == "string" && i.includes(l);
    case "StartsWith":
      return typeof i == "string" && typeof l == "string" && i.startsWith(l);
    case "EndsWith":
      return typeof i == "string" && typeof l == "string" && i.endsWith(l);
    case "DoesNotContain":
      return typeof i == "string" && typeof l == "string" && !i.includes(l);
    case "In":
      return Array.isArray(l) && l.some((c) => r(c) === i);
    case "NotIn":
      return Array.isArray(l) && !l.some((c) => r(c) === i);
    case "IsNull":
      return e == null;
    case "IsNotNull":
      return e != null;
    case "IsEmpty":
      return e == null || e === "";
    case "IsNotEmpty":
      return e != null && e !== "";
    case "Custom":
      return typeof s == "function" ? !!s(e) : !0;
    default:
      return !1;
  }
}
function pe(e) {
  return "filters" in e;
}
function Ne(e, s, n = {}) {
  const o = n.logicalOperator ?? "And", a = n.caseSensitivity ?? "CaseInsensitive";
  if (pe(s)) {
    if (s.filters.length === 0) return !0;
    const r = s.operator ?? o;
    return s.filters[r === "Or" ? "some" : "every"](
      (i) => Ne(e, i, { logicalOperator: r, caseSensitivity: a })
    );
  }
  return s.operator === "Custom", ye(s, e, a);
}
function os(e, s, n = {}) {
  return e.filter((o) => Ne(o, s, n));
}
function as(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function E(e) {
  return typeof e == "string" ? `"${as(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(E).join(", ")}]` : `"${String(e)}"`;
}
function rs(e) {
  const s = (o, a) => {
    switch (o) {
      case "Equals":
        return `${e.property}.Equals(${E(a)})`;
      case "NotEquals":
        return `!${e.property}.Equals(${E(a)})`;
      case "LessThan":
        return `${e.property}.LessThan(${E(a)})`;
      case "LessThanOrEquals":
        return `${e.property}.LessThanOrEquals(${E(a)})`;
      case "GreaterThan":
        return `${e.property}.GreaterThan(${E(a)})`;
      case "GreaterThanOrEquals":
        return `${e.property}.GreaterThanOrEquals(${E(a)})`;
      case "Contains":
        return `${e.property}.Contains(${E(a)})`;
      case "StartsWith":
        return `${e.property}.StartsWith(${E(a)})`;
      case "EndsWith":
        return `${e.property}.EndsWith(${E(a)})`;
      case "DoesNotContain":
        return `!${e.property}.Contains(${E(a)})`;
      case "In":
        return `${e.property}.In(${E(a)})`;
      case "NotIn":
        return `!${e.property}.In(${E(a)})`;
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
  if (e.secondOperator == null || e.secondValue === void 0)
    return s(e.operator, e.value);
  const n = e.logicalOperator ?? "And";
  return `(${s(e.operator, e.value)} ${n} ${s(
    e.secondOperator,
    e.secondValue
  )})`;
}
function ls(e) {
  return pe(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(ls).filter(Boolean).join(` ${e.operator} `)})` : rs(e);
}
function is(e) {
  return e.replace(/'/g, "''");
}
const cs = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function _s(e, s) {
  const n = e.property, o = s === "CaseInsensitive", a = (c) => o ? `tolower(${c})` : c, r = (c) => typeof c == "string" ? `'${is(c)}'` : c instanceof Date ? `'${c.toISOString()}'` : String(c ?? ""), i = (c, _) => {
    const h = typeof _ == "string", f = h && o ? a(n) : n;
    switch (c) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${f} ${cs[c]} ${h && o ? a(r(_)) : r(_)}`;
      case "Contains":
        return `contains(${a(n)}, ${a(r(_))})`;
      case "StartsWith":
        return `startswith(${a(n)}, ${a(r(_))})`;
      case "EndsWith":
        return `endswith(${a(n)}, ${a(r(_))})`;
      case "DoesNotContain":
        return `not(contains(${a(n)}, ${a(r(_))}))`;
      case "In":
        return Array.isArray(_) ? `${f} in (${_.map((x) => r(x)).join(", ")})` : `${f} in (${r(_)})`;
      case "NotIn":
        return Array.isArray(_) ? `not(${f} in (${_.map((x) => r(x)).join(", ")}))` : `not(${f} in (${r(_)}))`;
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
  if (e.secondOperator == null || e.secondValue === void 0)
    return i(e.operator, e.value);
  const l = (e.logicalOperator ?? "And") === "And" ? "and" : "or";
  return `(${i(e.operator, e.value)} ${l} ${i(
    e.secondOperator,
    e.secondValue
  )})`;
}
function ds(e, s = {}) {
  const n = s.caseSensitivity ?? "CaseInsensitive";
  if (pe(e)) {
    if (e.filters.length === 0) return "";
    const o = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((a) => ds(a, { caseSensitivity: n })).filter(Boolean).join(` ${o} `)})`;
  }
  return _s(e, n);
}
function Kl(e, s) {
  return s.length === 0 ? [...e] : [...e].sort((n, o) => {
    for (const a of s) {
      const r = a.sortOrder === "Ascending" ? 1 : -1, i = te(ue(n, a.property), ue(o, a.property));
      if (i !== 0) return i * r;
    }
    return 0;
  });
}
const fs = "_filter_aylp4_1", us = "_rows_aylp4_9", ms = "_row_aylp4_9", ps = "_join_aylp4_21", hs = "_property_aylp4_30", gs = "_operator_aylp4_34", ys = "_value_aylp4_38", bs = "_remove_aylp4_42", xs = "_bar_aylp4_58", Ss = "_add_aylp4_64", $s = "_custom_aylp4_77", zs = "_summary_aylp4_81", k = {
  filter: fs,
  rows: us,
  row: ms,
  join: ps,
  property: hs,
  operator: gs,
  value: ys,
  remove: bs,
  bar: xs,
  add: Ss,
  custom: $s,
  summary: zs
}, vs = {
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
function Os({
  property: e,
  value: s,
  onChange: n
}) {
  if (e.editor != null)
    return /* @__PURE__ */ t(z, { children: e.editor({ value: s, onChange: n }) });
  const o = e.type ?? "string";
  if (o === "enum" && e.values != null)
    return /* @__PURE__ */ t(
      ie,
      {
        "aria-label": e.title ?? e.name,
        className: k.value,
        options: e.values,
        value: String(s ?? ""),
        onChange: (r) => n(r.target.value)
      }
    );
  if (o === "boolean")
    return /* @__PURE__ */ t(
      ie,
      {
        "aria-label": e.title ?? e.name,
        className: k.value,
        options: [
          { value: "", label: "" },
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        value: s == null ? "" : String(s),
        onChange: (r) => {
          r.target.value === "" ? n(void 0) : n(r.target.value === "true");
        }
      }
    );
  const a = o === "number" ? { type: "number" } : o === "date" ? { type: "date" } : { type: "text" };
  return /* @__PURE__ */ t(
    "input",
    {
      "aria-label": e.title ?? e.name,
      className: k.value,
      ...a,
      value: s == null ? "" : String(s),
      onChange: (r) => n(o === "number" && r.target.value !== "" ? Number(r.target.value) : r.target.value)
    }
  );
}
function Ul({
  properties: e,
  logicalOperator: s = "And",
  filterCaseSensitivity: n = "CaseInsensitive",
  initialRows: o,
  uniqueFilters: a = !1,
  className: r,
  viewChanged: i,
  items: l,
  children: c
}) {
  const [_, h] = I(
    () => o != null && o.length > 0 ? o.map((g, b) => ({ id: b, ...g })) : [{ id: 0, property: e[0]?.name ?? "", operator: ae[e[0]?.type ?? "string"], value: void 0 }]
  ), f = (g, b) => {
    h((p) => p.map((S) => S.id === g ? { ...S, ...b } : S));
  }, x = () => {
    const g = _[_.length - 1], b = Math.max(0, ..._.map((S) => S.id)) + 1, p = e[0];
    h((S) => [
      ...S,
      {
        id: b,
        property: g?.property ?? p?.name ?? "",
        operator: ae[e.find(($) => $.name === (g?.property ?? p?.name))?.type ?? "string"],
        value: void 0
      }
    ]);
  }, v = (g) => {
    h((b) => b.length > 1 ? b.filter((p) => p.id !== g) : b);
  }, O = H(() => {
    const g = ["IsNull", "IsEmpty", "IsNotNull", "IsNotEmpty"], b = [];
    for (const p of _) {
      if (p.property === "" || (p.value == null || p.value === "") && !g.includes(p.operator)) continue;
      const $ = {
        property: p.property,
        operator: p.operator,
        value: p.value
      };
      p.secondOperator != null && p.secondValue !== void 0 && ($.secondOperator = p.secondOperator, $.secondValue = p.secondValue, $.logicalOperator = p.logicalOperator ?? "And"), b.push($);
    }
    return b;
  }, [_]), N = H(() => l == null || O.length === 0 ? l : os(l, { operator: s, filters: O }, { caseSensitivity: n }), [l, O, s, n]);
  R(() => {
    i != null && l != null && i(N);
  }, [N]);
  const y = (g) => e.find((b) => b.name === g) ?? { name: g, type: "string" };
  return /* @__PURE__ */ u("div", { className: [k.filter, r].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ t("div", { className: k.rows, role: "group", "aria-label": "Filter conditions", children: _.map((g, b) => {
      const p = y(g.property), S = a ? [ae[p.type ?? "string"]] : ns;
      return /* @__PURE__ */ u("div", { className: k.row, children: [
        b > 0 ? /* @__PURE__ */ t("span", { className: k.join, "aria-hidden": "true", children: s }) : null,
        /* @__PURE__ */ t(
          ie,
          {
            "aria-label": `Condition ${b + 1} property`,
            className: k.property,
            value: g.property,
            onChange: ($) => {
              const se = e.find((ne) => ne.name === $.target.value);
              f(g.id, {
                property: $.target.value,
                operator: ae[se?.type ?? "string"],
                value: void 0
              });
            },
            options: e.map(($) => ({ value: $.name, label: $.title ?? $.name }))
          }
        ),
        /* @__PURE__ */ t(
          ie,
          {
            "aria-label": `Condition ${b + 1} operator`,
            className: k.operator,
            value: g.operator,
            onChange: ($) => f(g.id, { operator: $.target.value }),
            options: S.map(($) => ({ value: $, label: vs[$] }))
          }
        ),
        /* @__PURE__ */ t(Os, { property: p, value: g.value, onChange: ($) => f(g.id, { value: $ }) }),
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: k.remove,
            "aria-label": `Remove condition ${b + 1}`,
            onClick: () => v(g.id),
            children: "×"
          }
        )
      ] }, g.id);
    }) }),
    /* @__PURE__ */ u("div", { className: k.bar, children: [
      /* @__PURE__ */ t("button", { type: "button", className: k.add, onClick: x, children: "Add filter" }),
      c != null ? /* @__PURE__ */ t("div", { className: k.custom, children: c }) : null,
      l != null ? /* @__PURE__ */ u("span", { className: k.summary, "aria-live": "polite", children: [
        N.length,
        " of ",
        l.length
      ] }) : null
    ] })
  ] });
}
const Ns = "_label_11cq1_1", ws = {
  label: Ns
}, Yl = C(
  function({ className: s, children: n, ...o }, a) {
    return /* @__PURE__ */ t("label", { ref: a, className: [ws.label, s].filter(Boolean).join(" "), ...o, children: n });
  }
), ks = "_input_1fy65_1", js = "_invalid_1fy65_31", Ms = "_xs_1fy65_37", Es = "_sm_1fy65_43", Is = "_md_1fy65_49", qs = "_lg_1fy65_55", Cs = "_xl_1fy65_61", _e = {
  input: ks,
  invalid: js,
  xs: Ms,
  sm: Es,
  md: Is,
  lg: qs,
  xl: Cs
}, Jl = C(function({ size: s = "md", invalid: n = !1, className: o, ...a }, r) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: r,
      className: [_e.input, _e[s], n ? _e.invalid : null, o].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...a
    }
  );
}), Ls = "_checkbox_9raim_1", Ts = {
  checkbox: Ls
}, Ql = C(function({ className: s, ...n }, o) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: o,
      type: "checkbox",
      className: [Ts.checkbox, s].filter(Boolean).join(" "),
      ...n
    }
  );
}), As = {
  switch: "_switch_lkggd_1"
}, Bs = C(function({ className: s, ...n }, o) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: o,
      type: "checkbox",
      role: "switch",
      className: [As.switch, s].filter(Boolean).join(" "),
      ...n
    }
  );
}), Ds = "_trigger_dbm3e_1", Vs = "_tooltip_dbm3e_7", Rs = "_top_dbm3e_34", Fs = "_right_dbm3e_40", Ws = "_bottom_dbm3e_46", Ps = "_left_dbm3e_52", Hs = "_arrow_dbm3e_58", re = {
  trigger: Ds,
  tooltip: Vs,
  "se-tooltip-in": "_se-tooltip-in_dbm3e_1",
  top: Rs,
  right: Fs,
  bottom: Ws,
  left: Ps,
  arrow: Hs
};
function Zl({
  content: e,
  children: s,
  placement: n = "top",
  delayMs: o = 300,
  className: a
}) {
  const r = P(), i = D(null), [l, c] = I(!1), _ = () => {
    i.current = window.setTimeout(() => c(!0), o);
  }, h = () => {
    i.current !== null && (window.clearTimeout(i.current), i.current = null), c(!1);
  };
  R(() => {
    if (!l) return;
    const x = (v) => {
      v.key === "Escape" && h();
    };
    return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  }, [l]);
  const f = me(s) ? $e(
    s,
    {
      "aria-describedby": [
        s.props["aria-describedby"],
        l ? r : null
      ].filter((x) => typeof x == "string").join(" ") || void 0
    }
  ) : s;
  return /* @__PURE__ */ u(
    "span",
    {
      className: [re.trigger, a].filter(Boolean).join(" "),
      onMouseEnter: _,
      onMouseLeave: h,
      onFocus: _,
      onBlur: h,
      children: [
        f,
        l && /* @__PURE__ */ u(
          "span",
          {
            role: "tooltip",
            id: r,
            className: [re.tooltip, re[n]].filter(Boolean).join(" "),
            children: [
              e,
              /* @__PURE__ */ t("span", { className: re.arrow, "aria-hidden": "true" })
            ]
          }
        )
      ]
    }
  );
}
const Gs = "_dialog_1kllc_1", Xs = "_sm_1kllc_30", Ks = "_md_1kllc_34", Us = "_lg_1kllc_38", Ys = "_header_1kllc_42", Js = "_title_1kllc_51", Qs = "_description_1kllc_58", Zs = "_close_1kllc_65", en = "_body_1kllc_84", tn = "_footer_1kllc_90", V = {
  dialog: Gs,
  "se-dialog-in": "_se-dialog-in_1kllc_1",
  sm: Xs,
  md: Ks,
  lg: Us,
  header: Ys,
  title: Js,
  description: Qs,
  close: Zs,
  body: en,
  footer: tn
};
function ei({
  open: e,
  onClose: s,
  title: n,
  description: o,
  children: a,
  footer: r,
  size: i = "md",
  className: l
}) {
  const c = D(null), _ = P(), h = P();
  return R(() => {
    const f = c.current;
    f && (e && !f.open ? f.showModal() : !e && f.open && f.close());
  }, [e]), /* @__PURE__ */ u(
    "dialog",
    {
      ref: c,
      className: [V.dialog, V[i], l].filter(Boolean).join(" "),
      onClose: s,
      "aria-labelledby": n ? _ : void 0,
      "aria-describedby": o ? h : void 0,
      children: [
        n && /* @__PURE__ */ u("header", { className: V.header, children: [
          /* @__PURE__ */ u("div", { children: [
            /* @__PURE__ */ t("h2", { id: _, className: V.title, children: n }),
            o && /* @__PURE__ */ t("p", { id: h, className: V.description, children: o })
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: V.close,
              onClick: s,
              "aria-label": "Close dialog",
              children: "×"
            }
          )
        ] }),
        a && /* @__PURE__ */ t("div", { className: V.body, children: a }),
        r && /* @__PURE__ */ t("footer", { className: V.footer, children: r })
      ]
    }
  );
}
const sn = "_viewport_15dkh_1", nn = "_topLeft_15dkh_13", on = "_topRight_15dkh_20", an = "_bottomLeft_15dkh_25", rn = "_toast_15dkh_30", ln = "_leaving_15dkh_61", cn = "_info_15dkh_77", _n = "_success_15dkh_82", dn = "_warning_15dkh_87", fn = "_danger_15dkh_92", un = "_content_15dkh_97", mn = "_title_15dkh_102", pn = "_description_15dkh_125", hn = "_dismiss_15dkh_132", gn = "_actions_15dkh_151", yn = "_action_15dkh_151", bn = "_cancel_15dkh_159", xn = "_progress_15dkh_195", M = {
  viewport: sn,
  topLeft: nn,
  topRight: on,
  bottomLeft: an,
  toast: rn,
  "se-toast-in": "_se-toast-in_15dkh_1",
  leaving: ln,
  "se-toast-out": "_se-toast-out_15dkh_1",
  info: cn,
  success: _n,
  warning: dn,
  danger: fn,
  content: un,
  title: mn,
  description: pn,
  dismiss: hn,
  actions: gn,
  action: yn,
  cancel: bn,
  progress: xn,
  "se-toast-progress": "_se-toast-progress_15dkh_1"
}, we = ve(null);
function ti() {
  const e = ze(we);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const Sn = 200, $n = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function si({
  children: e,
  durationMs: s = 4e3,
  position: n = "bottom-right",
  pauseOnHover: o = !0,
  className: a
}) {
  const [r, i] = I([]), [l, c] = I(!1), _ = D([]), h = D(/* @__PURE__ */ new Map()), f = D(!1), x = D(0), v = (m) => {
    f.current = m, c(m);
  }, O = j((m) => {
    const d = h.current.get(m);
    d && (window.clearTimeout(d.timeoutId), d.remaining = Math.max(0, d.remaining - (Date.now() - d.startedAt)));
  }, []), N = j((m) => {
    const d = h.current.get(m);
    d && (window.clearTimeout(d.timeoutId), h.current.delete(m));
  }, []), y = j(
    (m) => {
      N(m), i((d) => {
        const w = d.filter((L) => L.id !== m);
        return _.current = w, w;
      });
    },
    [N]
  ), g = j(
    (m) => {
      const d = _.current.find((w) => w.id === m);
      !d || d.leaving || (d.onAutoClose?.(), y(m));
    },
    [y]
  ), b = j(
    (m) => {
      const d = h.current.get(m);
      !d || d.remaining <= 0 || (d.startedAt = Date.now(), d.timeoutId = window.setTimeout(() => g(m), d.remaining));
    },
    [g]
  ), p = j(() => {
    f.current || h.current.forEach((m, d) => O(d)), v(!0);
  }, [O]), S = j(() => {
    h.current.forEach((m, d) => b(d)), v(!1);
  }, [b]);
  R(() => {
    if (!o) return;
    const m = () => {
      document.hidden ? p() : S();
    };
    return document.addEventListener("visibilitychange", m), () => document.removeEventListener("visibilitychange", m);
  }, [o, p, S]);
  const $ = j(
    (m) => {
      const d = _.current.find((w) => w.id === m);
      !d || d.leaving || (d.onDismiss?.(), i((w) => {
        const L = w.map((G) => G.id === m ? { ...G, leaving: !0 } : G);
        return _.current = L, L;
      }), window.setTimeout(() => y(m), Sn));
    },
    [y]
  ), se = j(
    (m) => {
      if (m.durationMs <= 0) return;
      const d = {
        remaining: m.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      h.current.set(m.id, d), f.current || b(m.id);
    },
    [b]
  ), ne = j(
    (m) => {
      const d = _.current.find((L) => L.id === m.id), w = {
        id: m.id ?? ++x.current,
        title: m.title,
        description: m.description,
        tone: m.tone ?? "info",
        durationMs: m.durationMs ?? s,
        action: m.action,
        cancel: m.cancel,
        dismissible: m.dismissible ?? !0,
        closeOnClick: m.closeOnClick ?? !1,
        showProgress: m.showProgress ?? !1,
        position: m.position ?? n,
        onDismiss: m.onDismiss,
        onAutoClose: m.onAutoClose
      };
      i((L) => {
        const G = d ? L.map((he) => he.id === w.id ? { ...w, leaving: !1 } : he) : [...L, w];
        return _.current = G, G;
      }), d && N(w.id), se(w);
    },
    [s, n, se, N]
  ), ke = H(() => ({ toast: ne }), [ne]), je = H(
    () => Array.from(/* @__PURE__ */ new Set([n, ...r.map((m) => m.position)])),
    [n, r]
  ), Me = o ? p : void 0, Ee = o ? S : void 0;
  return /* @__PURE__ */ u(we.Provider, { value: ke, children: [
    e,
    je.map((m) => /* @__PURE__ */ t(
      "div",
      {
        className: [
          M.viewport,
          M[$n[m]],
          a
        ].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: Me,
        onMouseLeave: Ee,
        children: r.filter((d) => d.position === m).map((d) => /* @__PURE__ */ u(
          "div",
          {
            role: d.tone === "danger" ? "alert" : "status",
            "data-paused": l ? "true" : "false",
            "data-clickable": d.closeOnClick ? "true" : "false",
            className: [
              M.toast,
              M[d.tone],
              d.leaving ? M.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: d.closeOnClick ? () => $(d.id) : void 0,
            children: [
              /* @__PURE__ */ u("div", { className: M.content, children: [
                /* @__PURE__ */ t("div", { className: M.title, children: d.title }),
                d.description && /* @__PURE__ */ t("div", { className: M.description, children: d.description }),
                (d.action || d.cancel) && /* @__PURE__ */ u("div", { className: M.actions, children: [
                  d.action && /* @__PURE__ */ t(
                    "button",
                    {
                      type: "button",
                      className: M.action,
                      onClick: () => {
                        d.action?.onClick?.(), $(d.id);
                      },
                      children: d.action.label
                    }
                  ),
                  d.cancel && /* @__PURE__ */ t(
                    "button",
                    {
                      type: "button",
                      className: M.cancel,
                      onClick: () => {
                        d.cancel?.onClick?.(), $(d.id);
                      },
                      children: d.cancel.label
                    }
                  )
                ] })
              ] }),
              d.dismissible && /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  className: M.dismiss,
                  onClick: () => $(d.id),
                  "aria-label": "Dismiss notification",
                  children: "×"
                }
              ),
              d.showProgress && d.durationMs > 0 && /* @__PURE__ */ t(
                "div",
                {
                  className: M.progress,
                  style: { animationDuration: `${d.durationMs}ms` }
                }
              )
            ]
          },
          d.id
        ))
      },
      m
    ))
  ] });
}
const zn = "_alert_1gxt0_1", vn = "_xs_1gxt0_22", On = "_sm_1gxt0_32", Nn = "_lg_1gxt0_42", wn = "_xl_1gxt0_52", kn = "_info_1gxt0_63", jn = "_success_1gxt0_68", Mn = "_warning_1gxt0_73", En = "_danger_1gxt0_78", In = "_soft_1gxt0_85", qn = "_outline_1gxt0_92", Cn = "_solid_1gxt0_100", Ln = "_icon_1gxt0_114", Tn = "_content_1gxt0_120", An = "_title_1gxt0_125", Bn = "_body_1gxt0_131", Dn = "_dismiss_1gxt0_137", T = {
  alert: zn,
  xs: vn,
  sm: On,
  lg: Nn,
  xl: wn,
  info: kn,
  success: jn,
  warning: Mn,
  danger: En,
  soft: In,
  outline: qn,
  solid: Cn,
  icon: Ln,
  content: Tn,
  title: An,
  body: Bn,
  dismiss: Dn
};
function ni({
  tone: e = "info",
  variant: s = "soft",
  size: n = "md",
  title: o,
  icon: a,
  children: r,
  dismissible: i = !1,
  onDismiss: l,
  className: c
}) {
  const [_, h] = I(!1);
  if (_)
    return null;
  const f = () => {
    h(!0), l?.();
  };
  return /* @__PURE__ */ u(
    "div",
    {
      role: "alert",
      className: [T.alert, T[e], T[s], T[n], c].filter(Boolean).join(" "),
      children: [
        a != null && /* @__PURE__ */ t("span", { className: T.icon, "aria-hidden": "true", children: a }),
        /* @__PURE__ */ u("div", { className: T.content, children: [
          o && /* @__PURE__ */ t("div", { className: T.title, children: o }),
          r && /* @__PURE__ */ t("div", { className: T.body, children: r })
        ] }),
        i && /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: T.dismiss,
            onClick: f,
            "aria-label": "Dismiss alert",
            children: "×"
          }
        )
      ]
    }
  );
}
const Vn = "_skeleton_f6f3j_1", Rn = "_text_f6f3j_35", Fn = "_circle_f6f3j_40", Wn = "_rect_f6f3j_44", xe = {
  skeleton: Vn,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_f6f3j_1",
  text: Rn,
  circle: Fn,
  rect: Wn
};
function oi({
  variant: e = "text",
  width: s,
  height: n,
  className: o
}) {
  const a = {};
  return s !== void 0 && (a.width = typeof s == "number" ? `${s}px` : s), n !== void 0 && (a.height = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ t(
    "span",
    {
      "aria-hidden": "true",
      className: [xe.skeleton, xe[e], o].filter(Boolean).join(" "),
      style: a
    }
  );
}
const Pn = "_row_64idu_1", Hn = "_gapXs_64idu_7", Gn = "_gapSm_64idu_11", Xn = "_gapMd_64idu_15", Kn = "_gapLg_64idu_19", Un = "_gapXl_64idu_23", Yn = "_start_64idu_27", Jn = "_center_64idu_31", Qn = "_end_64idu_35", Zn = "_stretch_64idu_39", eo = "_baseline_64idu_43", to = "_noWrap_64idu_71", ee = {
  row: Pn,
  gapXs: Hn,
  gapSm: Gn,
  gapMd: Xn,
  gapLg: Kn,
  gapXl: Un,
  start: Yn,
  center: Jn,
  end: Qn,
  stretch: Zn,
  baseline: eo,
  "justify-start": "_justify-start_64idu_47",
  "justify-center": "_justify-center_64idu_51",
  "justify-end": "_justify-end_64idu_55",
  "justify-between": "_justify-between_64idu_59",
  "justify-around": "_justify-around_64idu_63",
  "justify-evenly": "_justify-evenly_64idu_67",
  noWrap: to
}, so = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function no(e) {
  return typeof e != "string" ? null : so[e] ?? null;
}
function ai({
  gap: e,
  align: s = "stretch",
  justify: n = "start",
  wrap: o = !0,
  className: a,
  style: r,
  ...i
}) {
  const l = no(e), c = {
    ...e != null && !l ? { gap: typeof e == "number" ? `${e}px` : e } : {},
    ...r
  };
  return /* @__PURE__ */ t(
    "div",
    {
      className: [
        ee.row,
        ee[s],
        ee[`justify-${n}`],
        o ? null : ee.noWrap,
        l ? ee[l] : null,
        a
      ].filter(Boolean).join(" "),
      style: c,
      ...i
    }
  );
}
const oo = "_column_1pa86_1", ao = "_Size1_1pa86_6", ro = "_Size2_1pa86_7", lo = "_Size3_1pa86_8", io = "_Size4_1pa86_9", co = "_Size5_1pa86_10", _o = "_Size6_1pa86_11", fo = "_Size7_1pa86_12", uo = "_Size8_1pa86_13", mo = "_Size9_1pa86_14", po = "_Size10_1pa86_15", ho = "_Size11_1pa86_16", go = "_Size12_1pa86_17", yo = "_Offset1_1pa86_18", bo = "_Offset2_1pa86_19", xo = "_Offset3_1pa86_20", So = "_Offset4_1pa86_21", $o = "_Offset5_1pa86_22", zo = "_Offset6_1pa86_23", vo = "_Offset7_1pa86_24", Oo = "_Offset8_1pa86_25", No = "_Offset9_1pa86_26", wo = "_Offset10_1pa86_27", ko = "_Offset11_1pa86_28", jo = "_smSize1_1pa86_31", Mo = "_smSize2_1pa86_32", Eo = "_smSize3_1pa86_33", Io = "_smSize4_1pa86_34", qo = "_smSize5_1pa86_35", Co = "_smSize6_1pa86_36", Lo = "_smSize7_1pa86_37", To = "_smSize8_1pa86_38", Ao = "_smSize9_1pa86_39", Bo = "_smSize10_1pa86_40", Do = "_smSize11_1pa86_41", Vo = "_smSize12_1pa86_42", Ro = "_smOffset1_1pa86_43", Fo = "_smOffset2_1pa86_44", Wo = "_smOffset3_1pa86_45", Po = "_smOffset4_1pa86_46", Ho = "_smOffset5_1pa86_47", Go = "_smOffset6_1pa86_48", Xo = "_smOffset7_1pa86_49", Ko = "_smOffset8_1pa86_50", Uo = "_smOffset9_1pa86_51", Yo = "_smOffset10_1pa86_52", Jo = "_smOffset11_1pa86_53", Qo = "_mdSize1_1pa86_57", Zo = "_mdSize2_1pa86_58", ea = "_mdSize3_1pa86_59", ta = "_mdSize4_1pa86_60", sa = "_mdSize5_1pa86_61", na = "_mdSize6_1pa86_62", oa = "_mdSize7_1pa86_63", aa = "_mdSize8_1pa86_64", ra = "_mdSize9_1pa86_65", la = "_mdSize10_1pa86_66", ia = "_mdSize11_1pa86_67", ca = "_mdSize12_1pa86_68", _a = "_mdOffset1_1pa86_69", da = "_mdOffset2_1pa86_70", fa = "_mdOffset3_1pa86_71", ua = "_mdOffset4_1pa86_72", ma = "_mdOffset5_1pa86_73", pa = "_mdOffset6_1pa86_74", ha = "_mdOffset7_1pa86_75", ga = "_mdOffset8_1pa86_76", ya = "_mdOffset9_1pa86_77", ba = "_mdOffset10_1pa86_78", xa = "_mdOffset11_1pa86_79", Sa = "_lgSize1_1pa86_83", $a = "_lgSize2_1pa86_84", za = "_lgSize3_1pa86_85", va = "_lgSize4_1pa86_86", Oa = "_lgSize5_1pa86_87", Na = "_lgSize6_1pa86_88", wa = "_lgSize7_1pa86_89", ka = "_lgSize8_1pa86_90", ja = "_lgSize9_1pa86_91", Ma = "_lgSize10_1pa86_92", Ea = "_lgSize11_1pa86_93", Ia = "_lgSize12_1pa86_94", qa = "_lgOffset1_1pa86_95", Ca = "_lgOffset2_1pa86_96", La = "_lgOffset3_1pa86_97", Ta = "_lgOffset4_1pa86_98", Aa = "_lgOffset5_1pa86_99", Ba = "_lgOffset6_1pa86_100", Da = "_lgOffset7_1pa86_101", Va = "_lgOffset8_1pa86_102", Ra = "_lgOffset9_1pa86_103", Fa = "_lgOffset10_1pa86_104", Wa = "_lgOffset11_1pa86_105", Pa = "_xlSize1_1pa86_109", Ha = "_xlSize2_1pa86_110", Ga = "_xlSize3_1pa86_111", Xa = "_xlSize4_1pa86_112", Ka = "_xlSize5_1pa86_113", Ua = "_xlSize6_1pa86_114", Ya = "_xlSize7_1pa86_115", Ja = "_xlSize8_1pa86_116", Qa = "_xlSize9_1pa86_117", Za = "_xlSize10_1pa86_118", er = "_xlSize11_1pa86_119", tr = "_xlSize12_1pa86_120", sr = "_xlOffset1_1pa86_121", nr = "_xlOffset2_1pa86_122", or = "_xlOffset3_1pa86_123", ar = "_xlOffset4_1pa86_124", rr = "_xlOffset5_1pa86_125", lr = "_xlOffset6_1pa86_126", ir = "_xlOffset7_1pa86_127", cr = "_xlOffset8_1pa86_128", _r = "_xlOffset9_1pa86_129", dr = "_xlOffset10_1pa86_130", fr = "_xlOffset11_1pa86_131", de = {
  column: oo,
  Size1: ao,
  Size2: ro,
  Size3: lo,
  Size4: io,
  Size5: co,
  Size6: _o,
  Size7: fo,
  Size8: uo,
  Size9: mo,
  Size10: po,
  Size11: ho,
  Size12: go,
  Offset1: yo,
  Offset2: bo,
  Offset3: xo,
  Offset4: So,
  Offset5: $o,
  Offset6: zo,
  Offset7: vo,
  Offset8: Oo,
  Offset9: No,
  Offset10: wo,
  Offset11: ko,
  smSize1: jo,
  smSize2: Mo,
  smSize3: Eo,
  smSize4: Io,
  smSize5: qo,
  smSize6: Co,
  smSize7: Lo,
  smSize8: To,
  smSize9: Ao,
  smSize10: Bo,
  smSize11: Do,
  smSize12: Vo,
  smOffset1: Ro,
  smOffset2: Fo,
  smOffset3: Wo,
  smOffset4: Po,
  smOffset5: Ho,
  smOffset6: Go,
  smOffset7: Xo,
  smOffset8: Ko,
  smOffset9: Uo,
  smOffset10: Yo,
  smOffset11: Jo,
  mdSize1: Qo,
  mdSize2: Zo,
  mdSize3: ea,
  mdSize4: ta,
  mdSize5: sa,
  mdSize6: na,
  mdSize7: oa,
  mdSize8: aa,
  mdSize9: ra,
  mdSize10: la,
  mdSize11: ia,
  mdSize12: ca,
  mdOffset1: _a,
  mdOffset2: da,
  mdOffset3: fa,
  mdOffset4: ua,
  mdOffset5: ma,
  mdOffset6: pa,
  mdOffset7: ha,
  mdOffset8: ga,
  mdOffset9: ya,
  mdOffset10: ba,
  mdOffset11: xa,
  lgSize1: Sa,
  lgSize2: $a,
  lgSize3: za,
  lgSize4: va,
  lgSize5: Oa,
  lgSize6: Na,
  lgSize7: wa,
  lgSize8: ka,
  lgSize9: ja,
  lgSize10: Ma,
  lgSize11: Ea,
  lgSize12: Ia,
  lgOffset1: qa,
  lgOffset2: Ca,
  lgOffset3: La,
  lgOffset4: Ta,
  lgOffset5: Aa,
  lgOffset6: Ba,
  lgOffset7: Da,
  lgOffset8: Va,
  lgOffset9: Ra,
  lgOffset10: Fa,
  lgOffset11: Wa,
  xlSize1: Pa,
  xlSize2: Ha,
  xlSize3: Ga,
  xlSize4: Xa,
  xlSize5: Ka,
  xlSize6: Ua,
  xlSize7: Ya,
  xlSize8: Ja,
  xlSize9: Qa,
  xlSize10: Za,
  xlSize11: er,
  xlSize12: tr,
  xlOffset1: sr,
  xlOffset2: nr,
  xlOffset3: or,
  xlOffset4: ar,
  xlOffset5: rr,
  xlOffset6: lr,
  xlOffset7: ir,
  xlOffset8: cr,
  xlOffset9: _r,
  xlOffset10: dr,
  xlOffset11: fr
}, ur = [
  ["", "size", "offset"],
  ["sm", "sizeSm", "offsetSm"],
  ["md", "sizeMd", "offsetMd"],
  ["lg", "sizeLg", "offsetLg"],
  ["xl", "sizeXl", "offsetXl"]
];
function ri({ className: e, ...s }) {
  const n = [de.column];
  for (const [O, N, y] of ur) {
    const g = s[N], b = s[y];
    g != null && n.push(de[`${O}Size${g}`]), b != null && b > 0 && n.push(de[`${O}Offset${b}`]);
  }
  const { size: o, offset: a, sizeSm: r, offsetSm: i, sizeMd: l, offsetMd: c, sizeLg: _, offsetLg: h, sizeXl: f, offsetXl: x, ...v } = s;
  return /* @__PURE__ */ t("div", { className: [...n, e].filter(Boolean).join(" "), ...v });
}
const mr = "_layout_1pcye_1", pr = "_row_1pcye_7", Se = {
  layout: mr,
  row: pr
}, hr = "_footer_khrs9_1", gr = {
  footer: hr
};
function yr({ className: e, children: s, ...n }) {
  return /* @__PURE__ */ t("footer", { className: [gr.footer, e].filter(Boolean).join(" "), ...n, children: s });
}
const br = "_header_6x0qv_1", xr = {
  header: br
};
function Sr({ className: e, children: s, ...n }) {
  return /* @__PURE__ */ t("header", { className: [xr.header, e].filter(Boolean).join(" "), ...n, children: s });
}
const $r = "_sidebar_1tgxt_1", zr = "_left_1tgxt_9", vr = "_right_1tgxt_13", Or = "_collapsed_1tgxt_17", Nr = "_responsive_1tgxt_25", wr = "_overlay_1tgxt_33", kr = "_mask_1tgxt_53", W = {
  sidebar: $r,
  left: zr,
  right: vr,
  collapsed: Or,
  responsive: Nr,
  overlay: wr,
  mask: kr
};
function jr({
  position: e = "left",
  expanded: s = !0,
  responsive: n = !1,
  overlay: o = !1,
  onClose: a,
  className: r,
  children: i,
  ...l
}) {
  return R(() => {
    if (!o || !s || a == null) return;
    const c = (_) => {
      _.key === "Escape" && a();
    };
    return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
  }, [o, s, a]), /* @__PURE__ */ u(z, { children: [
    o && s ? /* @__PURE__ */ t("div", { className: `${W.mask} se-layout-mask`, "aria-hidden": "true", onClick: a }) : null,
    /* @__PURE__ */ t(
      "aside",
      {
        className: [
          W.sidebar,
          e === "right" ? W.right : W.left,
          s ? null : W.collapsed,
          n ? W.responsive : null,
          o ? [W.overlay, "se-sidebar--overlay"] : null,
          r
        ].flat().filter(Boolean).join(" "),
        ...l,
        children: i
      }
    )
  ] });
}
function li({ className: e, children: s, ...n }) {
  const o = [], a = [], r = [], i = [], l = [];
  return Ie.forEach(s, (c) => {
    if (!me(c)) {
      r.push(c);
      return;
    }
    c.type === Sr ? o.push(c) : c.type === yr ? a.push(c) : c.type === jr ? (c.props.position === "right" ? l : i).push(c) : r.push(c);
  }), /* @__PURE__ */ u("div", { className: [Se.layout, e].filter(Boolean).join(" "), ...n, children: [
    o,
    /* @__PURE__ */ u("div", { className: Se.row, children: [
      i,
      r,
      l
    ] }),
    a
  ] });
}
const Mr = "_body_1i4wl_1", Er = {
  body: Mr
};
function ii({ as: e = "main", className: s, children: n, ...o }) {
  return /* @__PURE__ */ t(e, { className: [Er.body, s].filter(Boolean).join(" "), ...o, children: n });
}
const Ir = "_track_1eazj_1", qr = "_bar_1eazj_31", Cr = "_primary_1eazj_39", Lr = "_success_1eazj_43", Tr = "_warning_1eazj_47", Ar = "_danger_1eazj_51", Br = "_indeterminate_1eazj_55", Dr = "_circular_1eazj_69", Vr = "_fill_1eazj_109", q = {
  track: Ir,
  "linear-xs": "_linear-xs_1eazj_11",
  "linear-sm": "_linear-sm_1eazj_15",
  "linear-md": "_linear-md_1eazj_19",
  "linear-lg": "_linear-lg_1eazj_23",
  "linear-xl": "_linear-xl_1eazj_27",
  bar: qr,
  primary: Cr,
  success: Lr,
  warning: Tr,
  danger: Ar,
  indeterminate: Br,
  "se-progress-slide": "_se-progress-slide_1eazj_1",
  circular: Dr,
  "circular-xs": "_circular-xs_1eazj_75",
  "circular-sm": "_circular-sm_1eazj_80",
  "circular-md": "_circular-md_1eazj_85",
  "circular-lg": "_circular-lg_1eazj_90",
  "circular-xl": "_circular-xl_1eazj_95",
  fill: Vr,
  "se-progress-spin": "_se-progress-spin_1eazj_1"
};
function ci({
  value: e = 0,
  max: s = 100,
  tone: n = "primary",
  indeterminate: o = !1,
  variant: a = "linear",
  size: r = "md",
  className: i,
  ...l
}) {
  const c = s > 0 ? Math.min(s, Math.max(0, e)) : 0, _ = s > 0 ? c / s * 100 : 0;
  if (a === "circular") {
    const h = typeof r == "string", f = 2, x = 10.5, v = 2 * Math.PI * x, O = v * (o ? 0.75 : 1), N = o ? 0 : v * (1 - _ / 100);
    return /* @__PURE__ */ u(
      "svg",
      {
        width: h ? void 0 : r,
        height: h ? void 0 : r,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": l["aria-label"],
        "aria-labelledby": l["aria-labelledby"],
        "aria-valuenow": o ? void 0 : Math.round(c),
        "aria-valuemin": 0,
        "aria-valuemax": s,
        id: l.id,
        style: l.style,
        className: [
          q.circular,
          q[n],
          h ? q[`circular-${r}`] : null,
          o ? q.indeterminate : null,
          i
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ t("circle", { className: q.track, cx: 12, cy: 12, r: x, strokeWidth: f }),
          /* @__PURE__ */ t(
            "circle",
            {
              className: q.fill,
              cx: 12,
              cy: 12,
              r: x,
              strokeWidth: f,
              strokeDasharray: `${O} ${v}`,
              strokeDashoffset: N
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ t(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": o ? void 0 : Math.round(c),
      "aria-valuemin": 0,
      "aria-valuemax": s,
      className: [
        q.track,
        q[n],
        typeof r == "string" ? q[`linear-${r}`] : null,
        o ? q.indeterminate : null,
        i
      ].filter(Boolean).join(" "),
      ...l,
      children: /* @__PURE__ */ t(
        "div",
        {
          className: q.bar,
          style: o ? void 0 : { width: `${_}%` }
        }
      )
    }
  );
}
const Rr = "_wrapper_1mukg_1", Fr = {
  wrapper: Rr
};
function _i({
  defaultTheme: e = "light",
  onChange: s,
  label: n = "Dark mode",
  className: o
}) {
  const [a, r] = I(() => (typeof document < "u" ? document.documentElement.dataset.theme : void 0) === "dark" ? !0 : e === "dark");
  R(() => {
    document.documentElement.dataset.theme = a ? "dark" : "light";
  }, []);
  const i = (l) => {
    const c = l.target.checked;
    r(c), document.documentElement.dataset.theme = c ? "dark" : "light", s?.(c ? "dark" : "light");
  };
  return /* @__PURE__ */ u("label", { className: [Fr.wrapper, o].filter(Boolean).join(" "), children: [
    n,
    /* @__PURE__ */ t(Bs, { checked: a, onChange: i })
  ] });
}
const Wr = "_avatar_101wb_1", Pr = "_xs_101wb_12", Hr = "_sm_101wb_18", Gr = "_md_101wb_24", Xr = "_lg_101wb_30", Kr = "_xl_101wb_36", Ur = "_initials_101wb_42", Yr = "_image_101wb_57", Jr = "_status_101wb_64", Qr = "_online_101wb_84", Zr = "_offline_101wb_88", el = "_away_101wb_92", X = {
  avatar: Wr,
  xs: Pr,
  sm: Hr,
  md: Gr,
  lg: Xr,
  xl: Kr,
  initials: Ur,
  image: Yr,
  status: Jr,
  online: Qr,
  offline: Zr,
  away: el
}, le = [
  "var(--dt-color-palette-0)",
  "var(--dt-color-palette-1)",
  "var(--dt-color-palette-2)",
  "var(--dt-color-palette-3)",
  "var(--dt-color-palette-4)",
  "var(--dt-color-palette-5)"
];
function tl(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((s) => s[0]?.toUpperCase() ?? "").join("");
}
function sl(e) {
  let s = 0;
  for (let n = 0; n < e.length; n += 1)
    s = s * 31 + e.charCodeAt(n) >>> 0;
  return le[s % le.length] ?? le[0];
}
function di({
  name: e,
  src: s,
  alt: n,
  size: o = "md",
  status: a,
  className: r
}) {
  const i = H(() => e ? tl(e) : "?", [e]), l = H(() => e ? sl(e) : le[0], [e]), c = s ? /* @__PURE__ */ t("img", { className: X.image, src: s, alt: n ?? e ?? "" }) : /* @__PURE__ */ t("span", { "aria-hidden": "true", className: X.initials, style: { background: l }, children: i });
  return /* @__PURE__ */ u(
    "span",
    {
      className: [
        X.avatar,
        X[o],
        a ? X[a] : null,
        r
      ].filter(Boolean).join(" "),
      role: "img",
      "aria-label": n ?? e ?? "avatar",
      children: [
        c,
        a && /* @__PURE__ */ t("span", { className: X.status, "aria-hidden": "true" })
      ]
    }
  );
}
const nl = "_root_9j3lx_1", ol = "_left_9j3lx_6", al = "_right_9j3lx_7", rl = "_panel_9j3lx_12", ll = "_bottom_9j3lx_20", il = "_tabList_9j3lx_24", cl = "_underline_9j3lx_53", _l = "_pills_9j3lx_72", dl = "_tab_9j3lx_24", fl = "_active_9j3lx_113", ul = "_disabled_9j3lx_139", A = {
  root: nl,
  left: ol,
  right: al,
  panel: rl,
  bottom: ll,
  tabList: il,
  underline: cl,
  pills: _l,
  tab: dl,
  active: fl,
  disabled: ul
};
function fi({
  items: e,
  value: s,
  defaultValue: n,
  onChange: o,
  variant: a = "underline",
  position: r = "top",
  className: i
}) {
  const l = P(), c = D(null), [_, h] = I(n ?? e[0]?.key ?? ""), f = s ?? _, x = r === "left" || r === "right", v = (y) => {
    h(y), o?.(y);
  }, O = (y) => {
    const g = e.filter((S) => !S.disabled), b = g.findIndex((S) => S.key === f);
    let p = -1;
    y.key === "ArrowRight" || x && y.key === "ArrowDown" ? p = (b + 1) % g.length : y.key === "ArrowLeft" || x && y.key === "ArrowUp" ? p = (b - 1 + g.length) % g.length : y.key === "Home" ? p = 0 : y.key === "End" && (p = g.length - 1), p >= 0 && (y.preventDefault(), c.current?.querySelector(
      `[data-tab-key="${CSS.escape(g[p]?.key ?? "")}"]`
    )?.focus(), v(g[p]?.key ?? ""));
  }, N = e.find((y) => y.key === f);
  return /* @__PURE__ */ u("div", { className: [A.root, A[r], i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ t(
      "div",
      {
        ref: c,
        role: "tablist",
        className: [A.tabList, A[a], A[r]].filter(Boolean).join(" "),
        onKeyDown: O,
        children: e.map((y) => {
          const g = y.key === f;
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              role: "tab",
              id: `${l}-tab-${y.key}`,
              "data-tab-key": y.key,
              "aria-selected": g,
              "aria-controls": `${l}-panel-${y.key}`,
              tabIndex: g ? 0 : -1,
              disabled: y.disabled,
              className: [
                A.tab,
                g ? A.active : null,
                y.disabled ? A.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => v(y.key),
              children: y.label
            },
            y.key
          );
        })
      }
    ),
    N && /* @__PURE__ */ t(
      "div",
      {
        role: "tabpanel",
        id: `${l}-panel-${N.key}`,
        "aria-labelledby": `${l}-tab-${N.key}`,
        className: A.panel,
        children: N.content
      }
    )
  ] });
}
const ml = "_root_ejeux_1", pl = "_item_ejeux_9", hl = "_heading_ejeux_13", gl = "_trigger_ejeux_17", yl = "_disabled_ejeux_34", bl = "_title_ejeux_48", xl = "_chevron_ejeux_52", Sl = "_open_ejeux_59", $l = "_content_ejeux_63", B = {
  root: ml,
  item: pl,
  heading: hl,
  trigger: gl,
  disabled: yl,
  title: bl,
  chevron: xl,
  open: Sl,
  content: $l
};
function ui({
  items: e,
  multiple: s = !1,
  value: n,
  defaultValue: o,
  onChange: a,
  className: r
}) {
  const i = P(), [l, c] = I(o ?? []), _ = n ?? l, h = (f) => {
    const x = _.includes(f) ? _.filter((v) => v !== f) : s ? [..._, f] : [f];
    c(x), a?.(x);
  };
  return /* @__PURE__ */ t("div", { className: [B.root, r].filter(Boolean).join(" "), children: e.map((f) => {
    const x = _.includes(f.key), v = `${i}-panel-${f.key}`, O = `${i}-trigger-${f.key}`;
    return /* @__PURE__ */ u("div", { className: B.item, children: [
      /* @__PURE__ */ t("h3", { className: B.heading, children: /* @__PURE__ */ u(
        "button",
        {
          type: "button",
          id: O,
          "aria-expanded": x,
          "aria-controls": v,
          disabled: f.disabled,
          className: [
            B.trigger,
            f.disabled ? B.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => h(f.key),
          children: [
            /* @__PURE__ */ t("span", { className: B.title, children: f.title }),
            /* @__PURE__ */ t("span", { className: [B.chevron, x ? B.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" })
          ]
        }
      ) }),
      /* @__PURE__ */ t(
        "div",
        {
          id: v,
          role: "region",
          "aria-labelledby": O,
          hidden: !x,
          className: B.content,
          children: f.content
        }
      )
    ] }, f.key);
  }) });
}
const zl = "_textarea_1qm9v_1", vl = "_xs_1qm9v_25", Ol = "_sm_1qm9v_30", Nl = "_md_1qm9v_35", wl = "_lg_1qm9v_40", kl = "_xl_1qm9v_45", fe = {
  textarea: zl,
  xs: vl,
  sm: Ol,
  md: Nl,
  lg: wl,
  xl: kl,
  "resize-none": "_resize-none_1qm9v_50",
  "resize-vertical": "_resize-vertical_1qm9v_54",
  "resize-horizontal": "_resize-horizontal_1qm9v_58",
  "resize-both": "_resize-both_1qm9v_62"
}, mi = C(function({ size: s = "md", resize: n = "none", className: o, ...a }, r) {
  return /* @__PURE__ */ t(
    "textarea",
    {
      ref: r,
      className: [
        fe.textarea,
        fe[s],
        fe[`resize-${n}`],
        o
      ].filter(Boolean).join(" "),
      ...a
    }
  );
});
export {
  ui as Accordion,
  ni as Alert,
  di as Avatar,
  ql as Badge,
  ii as Body,
  El as Button,
  Il as Card,
  Ql as Checkbox,
  ri as Column,
  ae as DEFAULT_OPERATOR_BY_TYPE,
  Ul as DataFilter,
  ei as Dialog,
  Bl as EmptyState,
  ns as FILTER_OPERATORS,
  Dl as Field,
  yr as Footer,
  Vl as Form,
  Sr as Header,
  Ll as Icon,
  Jl as Input,
  Yl as Label,
  li as Layout,
  ci as Progress,
  ai as Row,
  ie as Select,
  jr as Sidebar,
  oi as Skeleton,
  Tl as Stat,
  Bs as Switch,
  Al as Table,
  fi as Tabs,
  mi as Textarea,
  _i as ThemeSwitcher,
  si as ToastProvider,
  Zl as Tooltip,
  os as applyFilters,
  Fl as email,
  Cl as iconNames,
  Ne as matchesFilters,
  Hl as maxLength,
  Pl as minLength,
  Wl as pattern,
  Gl as range,
  Rl as required,
  Ut as runValidators,
  Kl as sortItems,
  ls as toFilterString,
  ds as toODataFilterString,
  Kt as useFormContext,
  Xl as useFormField,
  ti as useToast
};
