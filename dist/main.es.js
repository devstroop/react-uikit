import { jsx as e, jsxs as f, Fragment as g } from "react/jsx-runtime";
import { forwardRef as j, useId as D, isValidElement as le, cloneElement as de, useRef as A, useState as V, useEffect as G, useCallback as M, useMemo as ee, useContext as ge, createContext as xe, Children as ye } from "react";
const ze = "_button_1q3cy_1", be = "_primary_1q3cy_29", Se = "_secondary_1q3cy_38", ve = "_ghost_1q3cy_48", Oe = "_danger_1q3cy_57", $e = "_success_1q3cy_66", ke = "_info_1q3cy_75", we = "_xs_1q3cy_85", je = "_sm_1q3cy_91", Me = "_md_1q3cy_97", Ne = "_lg_1q3cy_103", Le = "_xl_1q3cy_109", Be = "_iconOnly_1q3cy_115", Ce = "_fullWidth_1q3cy_141", R = {
  button: ze,
  primary: be,
  secondary: Se,
  ghost: ve,
  danger: Oe,
  success: $e,
  info: ke,
  xs: we,
  sm: je,
  md: Me,
  lg: Ne,
  xl: Le,
  iconOnly: Be,
  fullWidth: Ce
}, Wa = j(function({
  variant: t = "primary",
  size: s = "md",
  fullWidth: o = !1,
  iconOnly: a = !1,
  className: l,
  type: r = "button",
  ...c
}, _) {
  const u = [
    R.button,
    R[t],
    R[s],
    o ? R.fullWidth : null,
    a ? R.iconOnly : null,
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("button", { ref: _, type: r, className: u, ...c });
}), qe = "_card_10w4x_1", Ee = "_elevated_10w4x_8", Ie = "_outlined_10w4x_13", Te = "_interactive_10w4x_17", Ae = "_text_10w4x_25", De = "_header_10w4x_41", Ve = "_body_10w4x_48", He = "_footer_10w4x_58", X = {
  card: qe,
  elevated: Ee,
  outlined: Ie,
  interactive: Te,
  text: Ae,
  header: De,
  body: Ve,
  footer: He
}, Ka = j(function({ variant: t = "elevated", header: s, footer: o, className: a, children: l, onKeyDown: r, ...c }, _) {
  const u = t === "interactive";
  return /* @__PURE__ */ f(
    "div",
    {
      ref: _,
      tabIndex: u ? 0 : void 0,
      onKeyDown: (p) => {
        r?.(p), !(!u || p.key !== "Enter" && p.key !== " ") && (p.preventDefault(), p.currentTarget.click());
      },
      className: [X.card, X[t], a].filter(Boolean).join(" "),
      ...c,
      children: [
        s != null && /* @__PURE__ */ e("div", { className: X.header, children: s }),
        /* @__PURE__ */ e("div", { className: X.body, children: l }),
        o != null && /* @__PURE__ */ e("div", { className: X.footer, children: o })
      ]
    }
  );
}), Pe = "_badge_dcudr_1", Re = "_xs_dcudr_14", Xe = "_sm_dcudr_19", We = "_md_dcudr_24", Ke = "_lg_dcudr_29", Fe = "_xl_dcudr_34", Ue = "_neutral_dcudr_40", Ge = "_primary_dcudr_45", Je = "_success_dcudr_50", Qe = "_warning_dcudr_55", Ye = "_danger_dcudr_60", Ze = "_solid_dcudr_66", et = "_outline_dcudr_91", Q = {
  badge: Pe,
  xs: Re,
  sm: Xe,
  md: We,
  lg: Ke,
  xl: Fe,
  neutral: Ue,
  primary: Ge,
  success: Je,
  warning: Qe,
  danger: Ye,
  solid: Ze,
  outline: et
}, Fa = j(function({ tone: t = "neutral", variant: s = "soft", size: o = "md", className: a, children: l, ...r }, c) {
  return /* @__PURE__ */ e(
    "span",
    {
      ref: c,
      className: [Q.badge, Q[o], Q[t], Q[s], a].filter(Boolean).join(" "),
      ...r,
      children: l
    }
  );
}), tt = "_xs_cg2f2_2", st = "_sm_cg2f2_7", nt = "_md_cg2f2_1", ot = "_lg_cg2f2_17", lt = "_xl_cg2f2_22", at = {
  xs: tt,
  sm: st,
  md: nt,
  lg: ot,
  xl: lt
}, Ua = [
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
], it = {
  check: /* @__PURE__ */ e("path", { d: "M20 6L9 17l-5-5" }),
  close: /* @__PURE__ */ e("path", { d: "M18 6L6 18M6 6l12 12" }),
  "chevron-down": /* @__PURE__ */ e("path", { d: "M6 9l6 6 6-6" }),
  "chevron-left": /* @__PURE__ */ e("path", { d: "M15 18l-6-6 6-6" }),
  "chevron-right": /* @__PURE__ */ e("path", { d: "M9 18l6-6-6-6" }),
  "chevron-up": /* @__PURE__ */ e("path", { d: "M18 15l-6-6-6 6" }),
  search: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ e("path", { d: "M21 21l-4.3-4.3" })
  ] }),
  plus: /* @__PURE__ */ e("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ e("path", { d: "M5 12h14" }),
  alert: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("path", { d: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" }),
    /* @__PURE__ */ e("path", { d: "M12 9v4M12 17h.01" })
  ] }),
  info: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e("path", { d: "M12 16v-4M12 8h.01" })
  ] }),
  "arrow-right": /* @__PURE__ */ e("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  "arrow-left": /* @__PURE__ */ e("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  "external-link": /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
    /* @__PURE__ */ e("path", { d: "M15 3h6v6M10 14L21 3" })
  ] }),
  copy: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ e("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] }),
  trash: /* @__PURE__ */ e(g, { children: /* @__PURE__ */ e("path", { d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" }) }),
  edit: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ e("path", { d: "M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  settings: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ e("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] }),
  user: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ e("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ e("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ e("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  download: /* @__PURE__ */ e("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  upload: /* @__PURE__ */ e("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  menu: /* @__PURE__ */ e("path", { d: "M3 12h18M3 6h18M3 18h18" }),
  "more-horizontal": /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ e("circle", { cx: "19", cy: "12", r: "1" }),
    /* @__PURE__ */ e("circle", { cx: "5", cy: "12", r: "1" })
  ] }),
  mail: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ e("path", { d: "M22 6l-10 7L2 6" })
  ] }),
  lock: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ e("path", { d: "M7 11V7a5 5 0 0110 0v4" })
  ] }),
  eye: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  "eye-off": /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ e("path", { d: "M1 1l22 22" })
  ] }),
  refresh: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("path", { d: "M23 4v6h-6M1 20v-6h6" }),
    /* @__PURE__ */ e("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
  ] }),
  calendar: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ e("path", { d: "M16 2v4M8 2v4M3 10h18" })
  ] }),
  clock: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e("path", { d: "M12 6v6l4 2" })
  ] }),
  "check-circle": /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ e("path", { d: "M22 4L12 14.01l-3-3" })
  ] }),
  "x-circle": /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] }),
  shield: /* @__PURE__ */ e(g, { children: /* @__PURE__ */ e("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  globe: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e("path", { d: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
  ] }),
  file: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
    /* @__PURE__ */ e("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
  ] }),
  folder: /* @__PURE__ */ e("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" }),
  home: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
    /* @__PURE__ */ e("path", { d: "M9 22V12h6v10" })
  ] }),
  key: /* @__PURE__ */ e(g, { children: /* @__PURE__ */ e("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) }),
  link: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("path", { d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" }),
    /* @__PURE__ */ e("path", { d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" })
  ] })
}, Ga = j(function({ name: t, size: s = "md", strokeWidth: o = 2, className: a, ...l }, r) {
  const c = typeof s == "string";
  return /* @__PURE__ */ e(
    "svg",
    {
      ref: r,
      className: [c ? at[s] : null, a].filter(Boolean).join(" "),
      width: c ? void 0 : s,
      height: c ? void 0 : s,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: o,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      ...l,
      children: it[t]
    }
  );
}), ct = "_stat_11sa0_1", _t = "_label_11sa0_8", rt = "_row_11sa0_16", dt = "_value_11sa0_22", ft = "_delta_11sa0_28", mt = "_success_11sa0_33", ut = "_danger_11sa0_37", pt = "_neutral_11sa0_41", ht = "_hint_11sa0_45", I = {
  stat: ct,
  label: _t,
  row: rt,
  value: dt,
  delta: ft,
  success: mt,
  danger: ut,
  neutral: pt,
  hint: ht
}, Ja = j(function({ label: t, value: s, delta: o, deltaTone: a = "neutral", hint: l, className: r, ...c }, _) {
  return /* @__PURE__ */ f("div", { ref: _, className: [I.stat, r].filter(Boolean).join(" "), ...c, children: [
    /* @__PURE__ */ e("div", { className: I.label, children: t }),
    /* @__PURE__ */ f("div", { className: I.row, children: [
      /* @__PURE__ */ e("div", { className: I.value, children: s }),
      o != null && /* @__PURE__ */ e("div", { className: [I.delta, I[a]].join(" "), children: o })
    ] }),
    l != null && /* @__PURE__ */ e("div", { className: I.hint, children: l })
  ] });
}), gt = "_wrap_l67ma_1", xt = "_table_l67ma_8", yt = "_start_l67ma_40", zt = "_center_l67ma_44", bt = "_end_l67ma_48", St = "_empty_l67ma_52", W = {
  wrap: gt,
  table: xt,
  start: yt,
  center: zt,
  end: bt,
  empty: St
};
function Qa({ columns: n, rows: t, rowKey: s, empty: o, className: a }) {
  return /* @__PURE__ */ f("div", { className: [W.wrap, a].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ f("table", { className: W.table, children: [
      /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { children: n.map((l) => /* @__PURE__ */ e(
        "th",
        {
          className: l.align != null ? W[l.align] : void 0,
          scope: "col",
          children: l.header
        },
        l.key
      )) }) }),
      /* @__PURE__ */ e("tbody", { children: t.map((l) => /* @__PURE__ */ e("tr", { children: n.map((r) => /* @__PURE__ */ e(
        "td",
        {
          className: r.align != null ? W[r.align] : void 0,
          children: r.render != null ? r.render(l) : l[r.key]
        },
        r.key
      )) }, s(l))) })
    ] }),
    t.length === 0 && o != null && /* @__PURE__ */ e("div", { className: W.empty, children: o })
  ] });
}
const vt = "_emptyState_123z1_1", Ot = "_icon_123z1_13", $t = "_title_123z1_18", kt = "_description_123z1_24", wt = "_action_123z1_30", K = {
  emptyState: vt,
  icon: Ot,
  title: $t,
  description: kt,
  action: wt
};
function Ya({ icon: n, title: t, description: s, action: o, className: a }) {
  return /* @__PURE__ */ f("div", { className: [K.emptyState, a].filter(Boolean).join(" "), children: [
    n != null && /* @__PURE__ */ e("div", { className: K.icon, children: n }),
    /* @__PURE__ */ e("div", { className: K.title, children: t }),
    s != null && /* @__PURE__ */ e("div", { className: K.description, children: s }),
    o != null && /* @__PURE__ */ e("div", { className: K.action, children: o })
  ] });
}
const jt = "_field_18dbj_1", Mt = "_label_18dbj_8", Nt = "_required_18dbj_14", Lt = "_hint_18dbj_19", Bt = "_error_18dbj_24", F = {
  field: jt,
  label: Mt,
  required: Nt,
  hint: Lt,
  error: Bt
};
function Za({ label: n, htmlFor: t, required: s, hint: o, error: a, children: l, className: r }) {
  const c = D(), _ = D(), u = a != null ? c : o != null ? _ : null, p = le(l) && u != null ? de(
    l,
    {
      "aria-describedby": [
        l.props["aria-describedby"],
        u
      ].filter((m) => typeof m == "string").join(" ") || void 0,
      "aria-invalid": a != null ? !0 : l.props["aria-invalid"]
    }
  ) : l;
  return /* @__PURE__ */ f("div", { className: [F.field, r].filter(Boolean).join(" "), children: [
    n != null && /* @__PURE__ */ f("label", { className: F.label, htmlFor: t, children: [
      n,
      s === !0 && /* @__PURE__ */ e("span", { className: F.required, "aria-hidden": "true", children: "*" })
    ] }),
    p,
    a != null ? /* @__PURE__ */ e("div", { id: c, className: F.error, role: "alert", children: a }) : o != null ? /* @__PURE__ */ e("div", { id: _, className: F.hint, children: o }) : null
  ] });
}
const Ct = "_label_11cq1_1", qt = {
  label: Ct
}, ei = j(
  function({ className: t, children: s, ...o }, a) {
    return /* @__PURE__ */ e("label", { ref: a, className: [qt.label, t].filter(Boolean).join(" "), ...o, children: s });
  }
), Et = "_input_1fy65_1", It = "_invalid_1fy65_31", Tt = "_xs_1fy65_37", At = "_sm_1fy65_43", Dt = "_md_1fy65_49", Vt = "_lg_1fy65_55", Ht = "_xl_1fy65_61", te = {
  input: Et,
  invalid: It,
  xs: Tt,
  sm: At,
  md: Dt,
  lg: Vt,
  xl: Ht
}, ti = j(function({ size: t = "md", invalid: s = !1, className: o, ...a }, l) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: l,
      className: [te.input, te[t], s ? te.invalid : null, o].filter(Boolean).join(" "),
      "aria-invalid": s || void 0,
      ...a
    }
  );
}), Pt = "_select_17784_1", Rt = "_invalid_17784_33", Xt = "_xs_17784_39", Wt = "_sm_17784_45", Kt = "_md_17784_51", Ft = "_lg_17784_57", Ut = "_xl_17784_63", se = {
  select: Pt,
  invalid: Rt,
  xs: Xt,
  sm: Wt,
  md: Kt,
  lg: Ft,
  xl: Ut
}, si = j(function({ size: t = "md", invalid: s = !1, options: o, children: a, className: l, ...r }, c) {
  return /* @__PURE__ */ e(
    "select",
    {
      ref: c,
      className: [se.select, se[t], s ? se.invalid : null, l].filter(Boolean).join(" "),
      "aria-invalid": s || void 0,
      ...r,
      children: o != null ? o.map((_) => /* @__PURE__ */ e("option", { value: _.value, disabled: _.disabled, children: _.label }, _.value)) : a
    }
  );
}), Gt = "_checkbox_9raim_1", Jt = {
  checkbox: Gt
}, ni = j(function({ className: t, ...s }, o) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: o,
      type: "checkbox",
      className: [Jt.checkbox, t].filter(Boolean).join(" "),
      ...s
    }
  );
}), Qt = {
  switch: "_switch_lkggd_1"
}, Yt = j(function({ className: t, ...s }, o) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: o,
      type: "checkbox",
      role: "switch",
      className: [Qt.switch, t].filter(Boolean).join(" "),
      ...s
    }
  );
}), Zt = "_trigger_dbm3e_1", es = "_tooltip_dbm3e_7", ts = "_top_dbm3e_34", ss = "_right_dbm3e_40", ns = "_bottom_dbm3e_46", os = "_left_dbm3e_52", ls = "_arrow_dbm3e_58", Y = {
  trigger: Zt,
  tooltip: es,
  "se-tooltip-in": "_se-tooltip-in_dbm3e_1",
  top: ts,
  right: ss,
  bottom: ns,
  left: os,
  arrow: ls
};
function oi({
  content: n,
  children: t,
  placement: s = "top",
  delayMs: o = 300,
  className: a
}) {
  const l = D(), r = A(null), [c, _] = V(!1), u = () => {
    r.current = window.setTimeout(() => _(!0), o);
  }, p = () => {
    r.current !== null && (window.clearTimeout(r.current), r.current = null), _(!1);
  };
  G(() => {
    if (!c) return;
    const x = (y) => {
      y.key === "Escape" && p();
    };
    return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  }, [c]);
  const m = le(t) ? de(
    t,
    {
      "aria-describedby": [
        t.props["aria-describedby"],
        c ? l : null
      ].filter((x) => typeof x == "string").join(" ") || void 0
    }
  ) : t;
  return /* @__PURE__ */ f(
    "span",
    {
      className: [Y.trigger, a].filter(Boolean).join(" "),
      onMouseEnter: u,
      onMouseLeave: p,
      onFocus: u,
      onBlur: p,
      children: [
        m,
        c && /* @__PURE__ */ f(
          "span",
          {
            role: "tooltip",
            id: l,
            className: [Y.tooltip, Y[s]].filter(Boolean).join(" "),
            children: [
              n,
              /* @__PURE__ */ e("span", { className: Y.arrow, "aria-hidden": "true" })
            ]
          }
        )
      ]
    }
  );
}
const as = "_dialog_1kllc_1", is = "_sm_1kllc_30", cs = "_md_1kllc_34", _s = "_lg_1kllc_38", rs = "_header_1kllc_42", ds = "_title_1kllc_51", fs = "_description_1kllc_58", ms = "_close_1kllc_65", us = "_body_1kllc_84", ps = "_footer_1kllc_90", E = {
  dialog: as,
  "se-dialog-in": "_se-dialog-in_1kllc_1",
  sm: is,
  md: cs,
  lg: _s,
  header: rs,
  title: ds,
  description: fs,
  close: ms,
  body: us,
  footer: ps
};
function li({
  open: n,
  onClose: t,
  title: s,
  description: o,
  children: a,
  footer: l,
  size: r = "md",
  className: c
}) {
  const _ = A(null), u = D(), p = D();
  return G(() => {
    const m = _.current;
    m && (n && !m.open ? m.showModal() : !n && m.open && m.close());
  }, [n]), /* @__PURE__ */ f(
    "dialog",
    {
      ref: _,
      className: [E.dialog, E[r], c].filter(Boolean).join(" "),
      onClose: t,
      "aria-labelledby": s ? u : void 0,
      "aria-describedby": o ? p : void 0,
      children: [
        s && /* @__PURE__ */ f("header", { className: E.header, children: [
          /* @__PURE__ */ f("div", { children: [
            /* @__PURE__ */ e("h2", { id: u, className: E.title, children: s }),
            o && /* @__PURE__ */ e("p", { id: p, className: E.description, children: o })
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              className: E.close,
              onClick: t,
              "aria-label": "Close dialog",
              children: "×"
            }
          )
        ] }),
        a && /* @__PURE__ */ e("div", { className: E.body, children: a }),
        l && /* @__PURE__ */ e("footer", { className: E.footer, children: l })
      ]
    }
  );
}
const hs = "_viewport_15dkh_1", gs = "_topLeft_15dkh_13", xs = "_topRight_15dkh_20", ys = "_bottomLeft_15dkh_25", zs = "_toast_15dkh_30", bs = "_leaving_15dkh_61", Ss = "_info_15dkh_77", vs = "_success_15dkh_82", Os = "_warning_15dkh_87", $s = "_danger_15dkh_92", ks = "_content_15dkh_97", ws = "_title_15dkh_102", js = "_description_15dkh_125", Ms = "_dismiss_15dkh_132", Ns = "_actions_15dkh_151", Ls = "_action_15dkh_151", Bs = "_cancel_15dkh_159", Cs = "_progress_15dkh_195", v = {
  viewport: hs,
  topLeft: gs,
  topRight: xs,
  bottomLeft: ys,
  toast: zs,
  "se-toast-in": "_se-toast-in_15dkh_1",
  leaving: bs,
  "se-toast-out": "_se-toast-out_15dkh_1",
  info: Ss,
  success: vs,
  warning: Os,
  danger: $s,
  content: ks,
  title: ws,
  description: js,
  dismiss: Ms,
  actions: Ns,
  action: Ls,
  cancel: Bs,
  progress: Cs,
  "se-toast-progress": "_se-toast-progress_15dkh_1"
}, fe = xe(null);
function ai() {
  const n = ge(fe);
  if (!n)
    throw new Error("useToast must be used within a <ToastProvider>");
  return n;
}
const qs = 200, Es = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function ii({
  children: n,
  durationMs: t = 4e3,
  position: s = "bottom-right",
  pauseOnHover: o = !0,
  className: a
}) {
  const [l, r] = V([]), [c, _] = V(!1), u = A([]), p = A(/* @__PURE__ */ new Map()), m = A(!1), x = A(0), y = (d) => {
    m.current = d, _(d);
  }, O = M((d) => {
    const i = p.current.get(d);
    i && (window.clearTimeout(i.timeoutId), i.remaining = Math.max(0, i.remaining - (Date.now() - i.startedAt)));
  }, []), S = M((d) => {
    const i = p.current.get(d);
    i && (window.clearTimeout(i.timeoutId), p.current.delete(d));
  }, []), h = M(
    (d) => {
      S(d), r((i) => {
        const b = i.filter((N) => N.id !== d);
        return u.current = b, b;
      });
    },
    [S]
  ), z = M(
    (d) => {
      const i = u.current.find((b) => b.id === d);
      !i || i.leaving || (i.onAutoClose?.(), h(d));
    },
    [h]
  ), $ = M(
    (d) => {
      const i = p.current.get(d);
      !i || i.remaining <= 0 || (i.startedAt = Date.now(), i.timeoutId = window.setTimeout(() => z(d), i.remaining));
    },
    [z]
  ), k = M(() => {
    m.current || p.current.forEach((d, i) => O(i)), y(!0);
  }, [O]), q = M(() => {
    p.current.forEach((d, i) => $(i)), y(!1);
  }, [$]);
  G(() => {
    if (!o) return;
    const d = () => {
      document.hidden ? k() : q();
    };
    return document.addEventListener("visibilitychange", d), () => document.removeEventListener("visibilitychange", d);
  }, [o, k, q]);
  const J = M(
    (d) => {
      const i = u.current.find((b) => b.id === d);
      !i || i.leaving || (i.onDismiss?.(), r((b) => {
        const N = b.map((H) => H.id === d ? { ...H, leaving: !0 } : H);
        return u.current = N, N;
      }), window.setTimeout(() => h(d), qs));
    },
    [h]
  ), ae = M(
    (d) => {
      if (d.durationMs <= 0) return;
      const i = {
        remaining: d.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      p.current.set(d.id, i), m.current || $(d.id);
    },
    [$]
  ), ie = M(
    (d) => {
      const i = u.current.find((N) => N.id === d.id), b = {
        id: d.id ?? ++x.current,
        title: d.title,
        description: d.description,
        tone: d.tone ?? "info",
        durationMs: d.durationMs ?? t,
        action: d.action,
        cancel: d.cancel,
        dismissible: d.dismissible ?? !0,
        closeOnClick: d.closeOnClick ?? !1,
        showProgress: d.showProgress ?? !1,
        position: d.position ?? s,
        onDismiss: d.onDismiss,
        onAutoClose: d.onAutoClose
      };
      r((N) => {
        const H = i ? N.map((ce) => ce.id === b.id ? { ...b, leaving: !1 } : ce) : [...N, b];
        return u.current = H, H;
      }), i && S(b.id), ae(b);
    },
    [t, s, ae, S]
  ), me = ee(() => ({ toast: ie }), [ie]), ue = ee(
    () => Array.from(/* @__PURE__ */ new Set([s, ...l.map((d) => d.position)])),
    [s, l]
  ), pe = o ? k : void 0, he = o ? q : void 0;
  return /* @__PURE__ */ f(fe.Provider, { value: me, children: [
    n,
    ue.map((d) => /* @__PURE__ */ e(
      "div",
      {
        className: [
          v.viewport,
          v[Es[d]],
          a
        ].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: pe,
        onMouseLeave: he,
        children: l.filter((i) => i.position === d).map((i) => /* @__PURE__ */ f(
          "div",
          {
            role: i.tone === "danger" ? "alert" : "status",
            "data-paused": c ? "true" : "false",
            "data-clickable": i.closeOnClick ? "true" : "false",
            className: [
              v.toast,
              v[i.tone],
              i.leaving ? v.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: i.closeOnClick ? () => J(i.id) : void 0,
            children: [
              /* @__PURE__ */ f("div", { className: v.content, children: [
                /* @__PURE__ */ e("div", { className: v.title, children: i.title }),
                i.description && /* @__PURE__ */ e("div", { className: v.description, children: i.description }),
                (i.action || i.cancel) && /* @__PURE__ */ f("div", { className: v.actions, children: [
                  i.action && /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      className: v.action,
                      onClick: () => {
                        i.action?.onClick?.(), J(i.id);
                      },
                      children: i.action.label
                    }
                  ),
                  i.cancel && /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      className: v.cancel,
                      onClick: () => {
                        i.cancel?.onClick?.(), J(i.id);
                      },
                      children: i.cancel.label
                    }
                  )
                ] })
              ] }),
              i.dismissible && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  className: v.dismiss,
                  onClick: () => J(i.id),
                  "aria-label": "Dismiss notification",
                  children: "×"
                }
              ),
              i.showProgress && i.durationMs > 0 && /* @__PURE__ */ e(
                "div",
                {
                  className: v.progress,
                  style: { animationDuration: `${i.durationMs}ms` }
                }
              )
            ]
          },
          i.id
        ))
      },
      d
    ))
  ] });
}
const Is = "_alert_1gxt0_1", Ts = "_xs_1gxt0_22", As = "_sm_1gxt0_32", Ds = "_lg_1gxt0_42", Vs = "_xl_1gxt0_52", Hs = "_info_1gxt0_63", Ps = "_success_1gxt0_68", Rs = "_warning_1gxt0_73", Xs = "_danger_1gxt0_78", Ws = "_soft_1gxt0_85", Ks = "_outline_1gxt0_92", Fs = "_solid_1gxt0_100", Us = "_icon_1gxt0_114", Gs = "_content_1gxt0_120", Js = "_title_1gxt0_125", Qs = "_body_1gxt0_131", Ys = "_dismiss_1gxt0_137", L = {
  alert: Is,
  xs: Ts,
  sm: As,
  lg: Ds,
  xl: Vs,
  info: Hs,
  success: Ps,
  warning: Rs,
  danger: Xs,
  soft: Ws,
  outline: Ks,
  solid: Fs,
  icon: Us,
  content: Gs,
  title: Js,
  body: Qs,
  dismiss: Ys
};
function ci({
  tone: n = "info",
  variant: t = "soft",
  size: s = "md",
  title: o,
  icon: a,
  children: l,
  dismissible: r = !1,
  onDismiss: c,
  className: _
}) {
  const [u, p] = V(!1);
  if (u)
    return null;
  const m = () => {
    p(!0), c?.();
  };
  return /* @__PURE__ */ f(
    "div",
    {
      role: "alert",
      className: [L.alert, L[n], L[t], L[s], _].filter(Boolean).join(" "),
      children: [
        a != null && /* @__PURE__ */ e("span", { className: L.icon, "aria-hidden": "true", children: a }),
        /* @__PURE__ */ f("div", { className: L.content, children: [
          o && /* @__PURE__ */ e("div", { className: L.title, children: o }),
          l && /* @__PURE__ */ e("div", { className: L.body, children: l })
        ] }),
        r && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: L.dismiss,
            onClick: m,
            "aria-label": "Dismiss alert",
            children: "×"
          }
        )
      ]
    }
  );
}
const Zs = "_skeleton_f6f3j_1", en = "_text_f6f3j_35", tn = "_circle_f6f3j_40", sn = "_rect_f6f3j_44", _e = {
  skeleton: Zs,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_f6f3j_1",
  text: en,
  circle: tn,
  rect: sn
};
function _i({
  variant: n = "text",
  width: t,
  height: s,
  className: o
}) {
  const a = {};
  return t !== void 0 && (a.width = typeof t == "number" ? `${t}px` : t), s !== void 0 && (a.height = typeof s == "number" ? `${s}px` : s), /* @__PURE__ */ e(
    "span",
    {
      "aria-hidden": "true",
      className: [_e.skeleton, _e[n], o].filter(Boolean).join(" "),
      style: a
    }
  );
}
const nn = "_row_64idu_1", on = "_gapXs_64idu_7", ln = "_gapSm_64idu_11", an = "_gapMd_64idu_15", cn = "_gapLg_64idu_19", _n = "_gapXl_64idu_23", rn = "_start_64idu_27", dn = "_center_64idu_31", fn = "_end_64idu_35", mn = "_stretch_64idu_39", un = "_baseline_64idu_43", pn = "_noWrap_64idu_71", U = {
  row: nn,
  gapXs: on,
  gapSm: ln,
  gapMd: an,
  gapLg: cn,
  gapXl: _n,
  start: rn,
  center: dn,
  end: fn,
  stretch: mn,
  baseline: un,
  "justify-start": "_justify-start_64idu_47",
  "justify-center": "_justify-center_64idu_51",
  "justify-end": "_justify-end_64idu_55",
  "justify-between": "_justify-between_64idu_59",
  "justify-around": "_justify-around_64idu_63",
  "justify-evenly": "_justify-evenly_64idu_67",
  noWrap: pn
}, hn = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function gn(n) {
  return typeof n != "string" ? null : hn[n] ?? null;
}
function ri({
  gap: n,
  align: t = "stretch",
  justify: s = "start",
  wrap: o = !0,
  className: a,
  style: l,
  ...r
}) {
  const c = gn(n), _ = {
    ...n != null && !c ? { gap: typeof n == "number" ? `${n}px` : n } : {},
    ...l
  };
  return /* @__PURE__ */ e(
    "div",
    {
      className: [
        U.row,
        U[t],
        U[`justify-${s}`],
        o ? null : U.noWrap,
        c ? U[c] : null,
        a
      ].filter(Boolean).join(" "),
      style: _,
      ...r
    }
  );
}
const xn = "_column_1pa86_1", yn = "_Size1_1pa86_6", zn = "_Size2_1pa86_7", bn = "_Size3_1pa86_8", Sn = "_Size4_1pa86_9", vn = "_Size5_1pa86_10", On = "_Size6_1pa86_11", $n = "_Size7_1pa86_12", kn = "_Size8_1pa86_13", wn = "_Size9_1pa86_14", jn = "_Size10_1pa86_15", Mn = "_Size11_1pa86_16", Nn = "_Size12_1pa86_17", Ln = "_Offset1_1pa86_18", Bn = "_Offset2_1pa86_19", Cn = "_Offset3_1pa86_20", qn = "_Offset4_1pa86_21", En = "_Offset5_1pa86_22", In = "_Offset6_1pa86_23", Tn = "_Offset7_1pa86_24", An = "_Offset8_1pa86_25", Dn = "_Offset9_1pa86_26", Vn = "_Offset10_1pa86_27", Hn = "_Offset11_1pa86_28", Pn = "_smSize1_1pa86_31", Rn = "_smSize2_1pa86_32", Xn = "_smSize3_1pa86_33", Wn = "_smSize4_1pa86_34", Kn = "_smSize5_1pa86_35", Fn = "_smSize6_1pa86_36", Un = "_smSize7_1pa86_37", Gn = "_smSize8_1pa86_38", Jn = "_smSize9_1pa86_39", Qn = "_smSize10_1pa86_40", Yn = "_smSize11_1pa86_41", Zn = "_smSize12_1pa86_42", eo = "_smOffset1_1pa86_43", to = "_smOffset2_1pa86_44", so = "_smOffset3_1pa86_45", no = "_smOffset4_1pa86_46", oo = "_smOffset5_1pa86_47", lo = "_smOffset6_1pa86_48", ao = "_smOffset7_1pa86_49", io = "_smOffset8_1pa86_50", co = "_smOffset9_1pa86_51", _o = "_smOffset10_1pa86_52", ro = "_smOffset11_1pa86_53", fo = "_mdSize1_1pa86_57", mo = "_mdSize2_1pa86_58", uo = "_mdSize3_1pa86_59", po = "_mdSize4_1pa86_60", ho = "_mdSize5_1pa86_61", go = "_mdSize6_1pa86_62", xo = "_mdSize7_1pa86_63", yo = "_mdSize8_1pa86_64", zo = "_mdSize9_1pa86_65", bo = "_mdSize10_1pa86_66", So = "_mdSize11_1pa86_67", vo = "_mdSize12_1pa86_68", Oo = "_mdOffset1_1pa86_69", $o = "_mdOffset2_1pa86_70", ko = "_mdOffset3_1pa86_71", wo = "_mdOffset4_1pa86_72", jo = "_mdOffset5_1pa86_73", Mo = "_mdOffset6_1pa86_74", No = "_mdOffset7_1pa86_75", Lo = "_mdOffset8_1pa86_76", Bo = "_mdOffset9_1pa86_77", Co = "_mdOffset10_1pa86_78", qo = "_mdOffset11_1pa86_79", Eo = "_lgSize1_1pa86_83", Io = "_lgSize2_1pa86_84", To = "_lgSize3_1pa86_85", Ao = "_lgSize4_1pa86_86", Do = "_lgSize5_1pa86_87", Vo = "_lgSize6_1pa86_88", Ho = "_lgSize7_1pa86_89", Po = "_lgSize8_1pa86_90", Ro = "_lgSize9_1pa86_91", Xo = "_lgSize10_1pa86_92", Wo = "_lgSize11_1pa86_93", Ko = "_lgSize12_1pa86_94", Fo = "_lgOffset1_1pa86_95", Uo = "_lgOffset2_1pa86_96", Go = "_lgOffset3_1pa86_97", Jo = "_lgOffset4_1pa86_98", Qo = "_lgOffset5_1pa86_99", Yo = "_lgOffset6_1pa86_100", Zo = "_lgOffset7_1pa86_101", el = "_lgOffset8_1pa86_102", tl = "_lgOffset9_1pa86_103", sl = "_lgOffset10_1pa86_104", nl = "_lgOffset11_1pa86_105", ol = "_xlSize1_1pa86_109", ll = "_xlSize2_1pa86_110", al = "_xlSize3_1pa86_111", il = "_xlSize4_1pa86_112", cl = "_xlSize5_1pa86_113", _l = "_xlSize6_1pa86_114", rl = "_xlSize7_1pa86_115", dl = "_xlSize8_1pa86_116", fl = "_xlSize9_1pa86_117", ml = "_xlSize10_1pa86_118", ul = "_xlSize11_1pa86_119", pl = "_xlSize12_1pa86_120", hl = "_xlOffset1_1pa86_121", gl = "_xlOffset2_1pa86_122", xl = "_xlOffset3_1pa86_123", yl = "_xlOffset4_1pa86_124", zl = "_xlOffset5_1pa86_125", bl = "_xlOffset6_1pa86_126", Sl = "_xlOffset7_1pa86_127", vl = "_xlOffset8_1pa86_128", Ol = "_xlOffset9_1pa86_129", $l = "_xlOffset10_1pa86_130", kl = "_xlOffset11_1pa86_131", ne = {
  column: xn,
  Size1: yn,
  Size2: zn,
  Size3: bn,
  Size4: Sn,
  Size5: vn,
  Size6: On,
  Size7: $n,
  Size8: kn,
  Size9: wn,
  Size10: jn,
  Size11: Mn,
  Size12: Nn,
  Offset1: Ln,
  Offset2: Bn,
  Offset3: Cn,
  Offset4: qn,
  Offset5: En,
  Offset6: In,
  Offset7: Tn,
  Offset8: An,
  Offset9: Dn,
  Offset10: Vn,
  Offset11: Hn,
  smSize1: Pn,
  smSize2: Rn,
  smSize3: Xn,
  smSize4: Wn,
  smSize5: Kn,
  smSize6: Fn,
  smSize7: Un,
  smSize8: Gn,
  smSize9: Jn,
  smSize10: Qn,
  smSize11: Yn,
  smSize12: Zn,
  smOffset1: eo,
  smOffset2: to,
  smOffset3: so,
  smOffset4: no,
  smOffset5: oo,
  smOffset6: lo,
  smOffset7: ao,
  smOffset8: io,
  smOffset9: co,
  smOffset10: _o,
  smOffset11: ro,
  mdSize1: fo,
  mdSize2: mo,
  mdSize3: uo,
  mdSize4: po,
  mdSize5: ho,
  mdSize6: go,
  mdSize7: xo,
  mdSize8: yo,
  mdSize9: zo,
  mdSize10: bo,
  mdSize11: So,
  mdSize12: vo,
  mdOffset1: Oo,
  mdOffset2: $o,
  mdOffset3: ko,
  mdOffset4: wo,
  mdOffset5: jo,
  mdOffset6: Mo,
  mdOffset7: No,
  mdOffset8: Lo,
  mdOffset9: Bo,
  mdOffset10: Co,
  mdOffset11: qo,
  lgSize1: Eo,
  lgSize2: Io,
  lgSize3: To,
  lgSize4: Ao,
  lgSize5: Do,
  lgSize6: Vo,
  lgSize7: Ho,
  lgSize8: Po,
  lgSize9: Ro,
  lgSize10: Xo,
  lgSize11: Wo,
  lgSize12: Ko,
  lgOffset1: Fo,
  lgOffset2: Uo,
  lgOffset3: Go,
  lgOffset4: Jo,
  lgOffset5: Qo,
  lgOffset6: Yo,
  lgOffset7: Zo,
  lgOffset8: el,
  lgOffset9: tl,
  lgOffset10: sl,
  lgOffset11: nl,
  xlSize1: ol,
  xlSize2: ll,
  xlSize3: al,
  xlSize4: il,
  xlSize5: cl,
  xlSize6: _l,
  xlSize7: rl,
  xlSize8: dl,
  xlSize9: fl,
  xlSize10: ml,
  xlSize11: ul,
  xlSize12: pl,
  xlOffset1: hl,
  xlOffset2: gl,
  xlOffset3: xl,
  xlOffset4: yl,
  xlOffset5: zl,
  xlOffset6: bl,
  xlOffset7: Sl,
  xlOffset8: vl,
  xlOffset9: Ol,
  xlOffset10: $l,
  xlOffset11: kl
}, wl = [
  ["", "size", "offset"],
  ["sm", "sizeSm", "offsetSm"],
  ["md", "sizeMd", "offsetMd"],
  ["lg", "sizeLg", "offsetLg"],
  ["xl", "sizeXl", "offsetXl"]
];
function di({ className: n, ...t }) {
  const s = [ne.column];
  for (const [O, S, h] of wl) {
    const z = t[S], $ = t[h];
    z != null && s.push(ne[`${O}Size${z}`]), $ != null && $ > 0 && s.push(ne[`${O}Offset${$}`]);
  }
  const { size: o, offset: a, sizeSm: l, offsetSm: r, sizeMd: c, offsetMd: _, sizeLg: u, offsetLg: p, sizeXl: m, offsetXl: x, ...y } = t;
  return /* @__PURE__ */ e("div", { className: [...s, n].filter(Boolean).join(" "), ...y });
}
const jl = "_layout_1pcye_1", Ml = "_row_1pcye_7", re = {
  layout: jl,
  row: Ml
}, Nl = "_footer_khrs9_1", Ll = {
  footer: Nl
};
function Bl({ className: n, children: t, ...s }) {
  return /* @__PURE__ */ e("footer", { className: [Ll.footer, n].filter(Boolean).join(" "), ...s, children: t });
}
const Cl = "_header_6x0qv_1", ql = {
  header: Cl
};
function El({ className: n, children: t, ...s }) {
  return /* @__PURE__ */ e("header", { className: [ql.header, n].filter(Boolean).join(" "), ...s, children: t });
}
const Il = "_sidebar_1tgxt_1", Tl = "_left_1tgxt_9", Al = "_right_1tgxt_13", Dl = "_collapsed_1tgxt_17", Vl = "_responsive_1tgxt_25", Hl = "_overlay_1tgxt_33", Pl = "_mask_1tgxt_53", T = {
  sidebar: Il,
  left: Tl,
  right: Al,
  collapsed: Dl,
  responsive: Vl,
  overlay: Hl,
  mask: Pl
};
function Rl({
  position: n = "left",
  expanded: t = !0,
  responsive: s = !1,
  overlay: o = !1,
  onClose: a,
  className: l,
  children: r,
  ...c
}) {
  return G(() => {
    if (!o || !t || a == null) return;
    const _ = (u) => {
      u.key === "Escape" && a();
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [o, t, a]), /* @__PURE__ */ f(g, { children: [
    o && t ? /* @__PURE__ */ e("div", { className: `${T.mask} se-layout-mask`, "aria-hidden": "true", onClick: a }) : null,
    /* @__PURE__ */ e(
      "aside",
      {
        className: [
          T.sidebar,
          n === "right" ? T.right : T.left,
          t ? null : T.collapsed,
          s ? T.responsive : null,
          o ? [T.overlay, "se-sidebar--overlay"] : null,
          l
        ].flat().filter(Boolean).join(" "),
        ...c,
        children: r
      }
    )
  ] });
}
function fi({ className: n, children: t, ...s }) {
  const o = [], a = [], l = [], r = [], c = [];
  return ye.forEach(t, (_) => {
    if (!le(_)) {
      l.push(_);
      return;
    }
    _.type === El ? o.push(_) : _.type === Bl ? a.push(_) : _.type === Rl ? (_.props.position === "right" ? c : r).push(_) : l.push(_);
  }), /* @__PURE__ */ f("div", { className: [re.layout, n].filter(Boolean).join(" "), ...s, children: [
    o,
    /* @__PURE__ */ f("div", { className: re.row, children: [
      r,
      l,
      c
    ] }),
    a
  ] });
}
const Xl = "_body_1i4wl_1", Wl = {
  body: Xl
};
function mi({ as: n = "main", className: t, children: s, ...o }) {
  return /* @__PURE__ */ e(n, { className: [Wl.body, t].filter(Boolean).join(" "), ...o, children: s });
}
const Kl = "_track_1eazj_1", Fl = "_bar_1eazj_31", Ul = "_primary_1eazj_39", Gl = "_success_1eazj_43", Jl = "_warning_1eazj_47", Ql = "_danger_1eazj_51", Yl = "_indeterminate_1eazj_55", Zl = "_circular_1eazj_69", ea = "_fill_1eazj_109", w = {
  track: Kl,
  "linear-xs": "_linear-xs_1eazj_11",
  "linear-sm": "_linear-sm_1eazj_15",
  "linear-md": "_linear-md_1eazj_19",
  "linear-lg": "_linear-lg_1eazj_23",
  "linear-xl": "_linear-xl_1eazj_27",
  bar: Fl,
  primary: Ul,
  success: Gl,
  warning: Jl,
  danger: Ql,
  indeterminate: Yl,
  "se-progress-slide": "_se-progress-slide_1eazj_1",
  circular: Zl,
  "circular-xs": "_circular-xs_1eazj_75",
  "circular-sm": "_circular-sm_1eazj_80",
  "circular-md": "_circular-md_1eazj_85",
  "circular-lg": "_circular-lg_1eazj_90",
  "circular-xl": "_circular-xl_1eazj_95",
  fill: ea,
  "se-progress-spin": "_se-progress-spin_1eazj_1"
};
function ui({
  value: n = 0,
  max: t = 100,
  tone: s = "primary",
  indeterminate: o = !1,
  variant: a = "linear",
  size: l = "md",
  className: r,
  ...c
}) {
  const _ = t > 0 ? Math.min(t, Math.max(0, n)) : 0, u = t > 0 ? _ / t * 100 : 0;
  if (a === "circular") {
    const p = typeof l == "string", m = 2, x = 10.5, y = 2 * Math.PI * x, O = y * (o ? 0.75 : 1), S = o ? 0 : y * (1 - u / 100);
    return /* @__PURE__ */ f(
      "svg",
      {
        width: p ? void 0 : l,
        height: p ? void 0 : l,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": c["aria-label"],
        "aria-labelledby": c["aria-labelledby"],
        "aria-valuenow": o ? void 0 : Math.round(_),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        id: c.id,
        style: c.style,
        className: [
          w.circular,
          w[s],
          p ? w[`circular-${l}`] : null,
          o ? w.indeterminate : null,
          r
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ e("circle", { className: w.track, cx: 12, cy: 12, r: x, strokeWidth: m }),
          /* @__PURE__ */ e(
            "circle",
            {
              className: w.fill,
              cx: 12,
              cy: 12,
              r: x,
              strokeWidth: m,
              strokeDasharray: `${O} ${y}`,
              strokeDashoffset: S
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ e(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": o ? void 0 : Math.round(_),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        w.track,
        w[s],
        typeof l == "string" ? w[`linear-${l}`] : null,
        o ? w.indeterminate : null,
        r
      ].filter(Boolean).join(" "),
      ...c,
      children: /* @__PURE__ */ e(
        "div",
        {
          className: w.bar,
          style: o ? void 0 : { width: `${u}%` }
        }
      )
    }
  );
}
const ta = "_wrapper_1mukg_1", sa = {
  wrapper: ta
};
function pi({
  defaultTheme: n = "light",
  onChange: t,
  label: s = "Dark mode",
  className: o
}) {
  const [a, l] = V(() => (typeof document < "u" ? document.documentElement.dataset.theme : void 0) === "dark" ? !0 : n === "dark");
  G(() => {
    document.documentElement.dataset.theme = a ? "dark" : "light";
  }, []);
  const r = (c) => {
    const _ = c.target.checked;
    l(_), document.documentElement.dataset.theme = _ ? "dark" : "light", t?.(_ ? "dark" : "light");
  };
  return /* @__PURE__ */ f("label", { className: [sa.wrapper, o].filter(Boolean).join(" "), children: [
    s,
    /* @__PURE__ */ e(Yt, { checked: a, onChange: r })
  ] });
}
const na = "_avatar_101wb_1", oa = "_xs_101wb_12", la = "_sm_101wb_18", aa = "_md_101wb_24", ia = "_lg_101wb_30", ca = "_xl_101wb_36", _a = "_initials_101wb_42", ra = "_image_101wb_57", da = "_status_101wb_64", fa = "_online_101wb_84", ma = "_offline_101wb_88", ua = "_away_101wb_92", P = {
  avatar: na,
  xs: oa,
  sm: la,
  md: aa,
  lg: ia,
  xl: ca,
  initials: _a,
  image: ra,
  status: da,
  online: fa,
  offline: ma,
  away: ua
}, Z = [
  "var(--dt-color-palette-0)",
  "var(--dt-color-palette-1)",
  "var(--dt-color-palette-2)",
  "var(--dt-color-palette-3)",
  "var(--dt-color-palette-4)",
  "var(--dt-color-palette-5)"
];
function pa(n) {
  return n.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function ha(n) {
  let t = 0;
  for (let s = 0; s < n.length; s += 1)
    t = t * 31 + n.charCodeAt(s) >>> 0;
  return Z[t % Z.length] ?? Z[0];
}
function hi({
  name: n,
  src: t,
  alt: s,
  size: o = "md",
  status: a,
  className: l
}) {
  const r = ee(() => n ? pa(n) : "?", [n]), c = ee(() => n ? ha(n) : Z[0], [n]), _ = t ? /* @__PURE__ */ e("img", { className: P.image, src: t, alt: s ?? n ?? "" }) : /* @__PURE__ */ e("span", { "aria-hidden": "true", className: P.initials, style: { background: c }, children: r });
  return /* @__PURE__ */ f(
    "span",
    {
      className: [
        P.avatar,
        P[o],
        a ? P[a] : null,
        l
      ].filter(Boolean).join(" "),
      role: "img",
      "aria-label": s ?? n ?? "avatar",
      children: [
        _,
        a && /* @__PURE__ */ e("span", { className: P.status, "aria-hidden": "true" })
      ]
    }
  );
}
const ga = "_root_9j3lx_1", xa = "_left_9j3lx_6", ya = "_right_9j3lx_7", za = "_panel_9j3lx_12", ba = "_bottom_9j3lx_20", Sa = "_tabList_9j3lx_24", va = "_underline_9j3lx_53", Oa = "_pills_9j3lx_72", $a = "_tab_9j3lx_24", ka = "_active_9j3lx_113", wa = "_disabled_9j3lx_139", B = {
  root: ga,
  left: xa,
  right: ya,
  panel: za,
  bottom: ba,
  tabList: Sa,
  underline: va,
  pills: Oa,
  tab: $a,
  active: ka,
  disabled: wa
};
function gi({
  items: n,
  value: t,
  defaultValue: s,
  onChange: o,
  variant: a = "underline",
  position: l = "top",
  className: r
}) {
  const c = D(), _ = A(null), [u, p] = V(s ?? n[0]?.key ?? ""), m = t ?? u, x = l === "left" || l === "right", y = (h) => {
    p(h), o?.(h);
  }, O = (h) => {
    const z = n.filter((q) => !q.disabled), $ = z.findIndex((q) => q.key === m);
    let k = -1;
    h.key === "ArrowRight" || x && h.key === "ArrowDown" ? k = ($ + 1) % z.length : h.key === "ArrowLeft" || x && h.key === "ArrowUp" ? k = ($ - 1 + z.length) % z.length : h.key === "Home" ? k = 0 : h.key === "End" && (k = z.length - 1), k >= 0 && (h.preventDefault(), _.current?.querySelector(
      `[data-tab-key="${CSS.escape(z[k]?.key ?? "")}"]`
    )?.focus(), y(z[k]?.key ?? ""));
  }, S = n.find((h) => h.key === m);
  return /* @__PURE__ */ f("div", { className: [B.root, B[l], r].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: _,
        role: "tablist",
        className: [B.tabList, B[a], B[l]].filter(Boolean).join(" "),
        onKeyDown: O,
        children: n.map((h) => {
          const z = h.key === m;
          return /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              role: "tab",
              id: `${c}-tab-${h.key}`,
              "data-tab-key": h.key,
              "aria-selected": z,
              "aria-controls": `${c}-panel-${h.key}`,
              tabIndex: z ? 0 : -1,
              disabled: h.disabled,
              className: [
                B.tab,
                z ? B.active : null,
                h.disabled ? B.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => y(h.key),
              children: h.label
            },
            h.key
          );
        })
      }
    ),
    S && /* @__PURE__ */ e(
      "div",
      {
        role: "tabpanel",
        id: `${c}-panel-${S.key}`,
        "aria-labelledby": `${c}-tab-${S.key}`,
        className: B.panel,
        children: S.content
      }
    )
  ] });
}
const ja = "_root_ejeux_1", Ma = "_item_ejeux_9", Na = "_heading_ejeux_13", La = "_trigger_ejeux_17", Ba = "_disabled_ejeux_34", Ca = "_title_ejeux_48", qa = "_chevron_ejeux_52", Ea = "_open_ejeux_59", Ia = "_content_ejeux_63", C = {
  root: ja,
  item: Ma,
  heading: Na,
  trigger: La,
  disabled: Ba,
  title: Ca,
  chevron: qa,
  open: Ea,
  content: Ia
};
function xi({
  items: n,
  multiple: t = !1,
  value: s,
  defaultValue: o,
  onChange: a,
  className: l
}) {
  const r = D(), [c, _] = V(o ?? []), u = s ?? c, p = (m) => {
    const x = u.includes(m) ? u.filter((y) => y !== m) : t ? [...u, m] : [m];
    _(x), a?.(x);
  };
  return /* @__PURE__ */ e("div", { className: [C.root, l].filter(Boolean).join(" "), children: n.map((m) => {
    const x = u.includes(m.key), y = `${r}-panel-${m.key}`, O = `${r}-trigger-${m.key}`;
    return /* @__PURE__ */ f("div", { className: C.item, children: [
      /* @__PURE__ */ e("h3", { className: C.heading, children: /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          id: O,
          "aria-expanded": x,
          "aria-controls": y,
          disabled: m.disabled,
          className: [
            C.trigger,
            m.disabled ? C.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => p(m.key),
          children: [
            /* @__PURE__ */ e("span", { className: C.title, children: m.title }),
            /* @__PURE__ */ e("span", { className: [C.chevron, x ? C.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" })
          ]
        }
      ) }),
      /* @__PURE__ */ e(
        "div",
        {
          id: y,
          role: "region",
          "aria-labelledby": O,
          hidden: !x,
          className: C.content,
          children: m.content
        }
      )
    ] }, m.key);
  }) });
}
const Ta = "_textarea_1qm9v_1", Aa = "_xs_1qm9v_25", Da = "_sm_1qm9v_30", Va = "_md_1qm9v_35", Ha = "_lg_1qm9v_40", Pa = "_xl_1qm9v_45", oe = {
  textarea: Ta,
  xs: Aa,
  sm: Da,
  md: Va,
  lg: Ha,
  xl: Pa,
  "resize-none": "_resize-none_1qm9v_50",
  "resize-vertical": "_resize-vertical_1qm9v_54",
  "resize-horizontal": "_resize-horizontal_1qm9v_58",
  "resize-both": "_resize-both_1qm9v_62"
}, yi = j(function({ size: t = "md", resize: s = "none", className: o, ...a }, l) {
  return /* @__PURE__ */ e(
    "textarea",
    {
      ref: l,
      className: [
        oe.textarea,
        oe[t],
        oe[`resize-${s}`],
        o
      ].filter(Boolean).join(" "),
      ...a
    }
  );
});
export {
  xi as Accordion,
  ci as Alert,
  hi as Avatar,
  Fa as Badge,
  mi as Body,
  Wa as Button,
  Ka as Card,
  ni as Checkbox,
  di as Column,
  li as Dialog,
  Ya as EmptyState,
  Za as Field,
  Bl as Footer,
  El as Header,
  Ga as Icon,
  ti as Input,
  ei as Label,
  fi as Layout,
  ui as Progress,
  ri as Row,
  si as Select,
  Rl as Sidebar,
  _i as Skeleton,
  Ja as Stat,
  Yt as Switch,
  Qa as Table,
  gi as Tabs,
  yi as Textarea,
  pi as ThemeSwitcher,
  ii as ToastProvider,
  oi as Tooltip,
  Ua as iconNames,
  ai as useToast
};
