import { jsx as t, jsxs as w, Fragment as Oe } from "react/jsx-runtime";
import { forwardRef as qe, useId as Ue, isValidElement as Vn, cloneElement as gr, useState as V, useRef as le, useCallback as q, useMemo as Se, useContext as br, createContext as yr, useEffect as De, Children as Cr, useImperativeHandle as Xn } from "react";
const Or = "_button_1wxdv_1", Ir = "_primary_1wxdv_29", Mr = "_secondary_1wxdv_38", jr = "_ghost_1wxdv_48", Er = "_danger_1wxdv_57", Tr = "_success_1wxdv_61", Ar = "_info_1wxdv_65", Lr = "_xs_1wxdv_101", Rr = "_sm_1wxdv_107", Br = "_md_1wxdv_113", Pr = "_lg_1wxdv_119", qr = "_xl_1wxdv_125", Fr = "_iconOnly_1wxdv_131", Kr = "_fullWidth_1wxdv_157", sn = {
  button: Or,
  primary: Ir,
  secondary: Mr,
  ghost: jr,
  danger: Er,
  success: Tr,
  info: Ar,
  xs: Lr,
  sm: Rr,
  md: Br,
  lg: Pr,
  xl: qr,
  iconOnly: Fr,
  fullWidth: Kr
}, Rg = qe(function({
  variant: n = "primary",
  size: r = "md",
  fullWidth: s = !1,
  iconOnly: o = !1,
  className: l,
  type: u = "button",
  ...a
}, i) {
  const h = [
    sn.button,
    sn[n],
    sn[r],
    s ? sn.fullWidth : null,
    o ? sn.iconOnly : null,
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ t("button", { ref: i, type: u, className: h, ...a });
}), Hr = "_card_10w4x_1", Wr = "_elevated_10w4x_8", Ur = "_outlined_10w4x_13", Vr = "_interactive_10w4x_17", Xr = "_text_10w4x_25", Gr = "_header_10w4x_41", Yr = "_body_10w4x_48", Zr = "_footer_10w4x_58", on = {
  card: Hr,
  elevated: Wr,
  outlined: Ur,
  interactive: Vr,
  text: Xr,
  header: Gr,
  body: Yr,
  footer: Zr
}, Bg = qe(function({ variant: n = "elevated", header: r, footer: s, className: o, children: l, onKeyDown: u, ...a }, i) {
  const h = n === "interactive";
  return /* @__PURE__ */ w(
    "div",
    {
      ref: i,
      tabIndex: h ? 0 : void 0,
      onKeyDown: (v) => {
        u?.(v), !(!h || v.key !== "Enter" && v.key !== " ") && (v.preventDefault(), v.currentTarget.click());
      },
      className: [on.card, on[n], o].filter(Boolean).join(" "),
      ...a,
      children: [
        r != null && /* @__PURE__ */ t("div", { className: on.header, children: r }),
        /* @__PURE__ */ t("div", { className: on.body, children: l }),
        s != null && /* @__PURE__ */ t("div", { className: on.footer, children: s })
      ]
    }
  );
}), Jr = "_badge_dcudr_1", Qr = "_xs_dcudr_14", es = "_sm_dcudr_19", ts = "_md_dcudr_24", ns = "_lg_dcudr_29", rs = "_xl_dcudr_34", ss = "_neutral_dcudr_40", os = "_primary_dcudr_45", as = "_success_dcudr_50", ls = "_warning_dcudr_55", cs = "_danger_dcudr_60", is = "_solid_dcudr_66", ds = "_outline_dcudr_91", wn = {
  badge: Jr,
  xs: Qr,
  sm: es,
  md: ts,
  lg: ns,
  xl: rs,
  neutral: ss,
  primary: os,
  success: as,
  warning: ls,
  danger: cs,
  solid: is,
  outline: ds
}, Pg = qe(function({ tone: n = "neutral", variant: r = "soft", size: s = "md", className: o, children: l, ...u }, a) {
  return /* @__PURE__ */ t(
    "span",
    {
      ref: a,
      className: [wn.badge, wn[s], wn[n], wn[r], o].filter(Boolean).join(" "),
      ...u,
      children: l
    }
  );
}), us = "_xs_cg2f2_2", fs = "_sm_cg2f2_7", _s = "_md_cg2f2_1", ps = "_lg_cg2f2_17", hs = "_xl_cg2f2_22", ms = {
  xs: us,
  sm: fs,
  md: _s,
  lg: ps,
  xl: hs
}, qg = [
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
], gs = {
  check: /* @__PURE__ */ t("path", { d: "M20 6L9 17l-5-5" }),
  close: /* @__PURE__ */ t("path", { d: "M18 6L6 18M6 6l12 12" }),
  "chevron-down": /* @__PURE__ */ t("path", { d: "M6 9l6 6 6-6" }),
  "chevron-left": /* @__PURE__ */ t("path", { d: "M15 18l-6-6 6-6" }),
  "chevron-right": /* @__PURE__ */ t("path", { d: "M9 18l6-6-6-6" }),
  "chevron-up": /* @__PURE__ */ t("path", { d: "M18 15l-6-6-6 6" }),
  search: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ t("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ t("path", { d: "M21 21l-4.3-4.3" })
  ] }),
  plus: /* @__PURE__ */ t("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ t("path", { d: "M5 12h14" }),
  alert: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" }),
    /* @__PURE__ */ t("path", { d: "M12 9v4M12 17h.01" })
  ] }),
  info: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M12 16v-4M12 8h.01" })
  ] }),
  "arrow-right": /* @__PURE__ */ t("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  "arrow-left": /* @__PURE__ */ t("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  "external-link": /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
    /* @__PURE__ */ t("path", { d: "M15 3h6v6M10 14L21 3" })
  ] }),
  copy: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ t("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ t("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] }),
  trash: /* @__PURE__ */ t(Oe, { children: /* @__PURE__ */ t("path", { d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" }) }),
  edit: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ t("path", { d: "M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  settings: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ t("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] }),
  user: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ t("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ t("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ t("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  download: /* @__PURE__ */ t("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  upload: /* @__PURE__ */ t("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  menu: /* @__PURE__ */ t("path", { d: "M3 12h18M3 6h18M3 18h18" }),
  "more-horizontal": /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ t("circle", { cx: "19", cy: "12", r: "1" }),
    /* @__PURE__ */ t("circle", { cx: "5", cy: "12", r: "1" })
  ] }),
  mail: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ t("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ t("path", { d: "M22 6l-10 7L2 6" })
  ] }),
  lock: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ t("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ t("path", { d: "M7 11V7a5 5 0 0110 0v4" })
  ] }),
  eye: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  "eye-off": /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ t("path", { d: "M1 1l22 22" })
  ] }),
  refresh: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M23 4v6h-6M1 20v-6h6" }),
    /* @__PURE__ */ t("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
  ] }),
  calendar: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ t("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ t("path", { d: "M16 2v4M8 2v4M3 10h18" })
  ] }),
  clock: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M12 6v6l4 2" })
  ] }),
  "check-circle": /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ t("path", { d: "M22 4L12 14.01l-3-3" })
  ] }),
  "x-circle": /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] }),
  shield: /* @__PURE__ */ t(Oe, { children: /* @__PURE__ */ t("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  globe: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
  ] }),
  file: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
    /* @__PURE__ */ t("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
  ] }),
  folder: /* @__PURE__ */ t("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" }),
  home: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
    /* @__PURE__ */ t("path", { d: "M9 22V12h6v10" })
  ] }),
  key: /* @__PURE__ */ t(Oe, { children: /* @__PURE__ */ t("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) }),
  link: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" }),
    /* @__PURE__ */ t("path", { d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" })
  ] }),
  star: /* @__PURE__ */ t("path", { fill: "currentColor", stroke: "none", d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" }),
  "star-outline": /* @__PURE__ */ t("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" }),
  ban: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M4.93 4.93l14.14 14.14" })
  ] })
}, Ve = qe(function({ name: n, size: r = "md", strokeWidth: s = 2, className: o, ...l }, u) {
  const a = typeof r == "string";
  return /* @__PURE__ */ t(
    "svg",
    {
      ref: u,
      className: [a ? ms[r] : null, o].filter(Boolean).join(" "),
      width: a ? void 0 : r,
      height: a ? void 0 : r,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: s,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      ...l,
      children: gs[n]
    }
  );
}), bs = "_stat_11sa0_1", ys = "_label_11sa0_8", vs = "_row_11sa0_16", xs = "_value_11sa0_22", ks = "_delta_11sa0_28", ws = "_success_11sa0_33", $s = "_danger_11sa0_37", Ns = "_neutral_11sa0_41", Ss = "_hint_11sa0_45", Ft = {
  stat: bs,
  label: ys,
  row: vs,
  value: xs,
  delta: ks,
  success: ws,
  danger: $s,
  neutral: Ns,
  hint: Ss
}, Fg = qe(function({ label: n, value: r, delta: s, deltaTone: o = "neutral", hint: l, className: u, ...a }, i) {
  return /* @__PURE__ */ w("div", { ref: i, className: [Ft.stat, u].filter(Boolean).join(" "), ...a, children: [
    /* @__PURE__ */ t("div", { className: Ft.label, children: n }),
    /* @__PURE__ */ w("div", { className: Ft.row, children: [
      /* @__PURE__ */ t("div", { className: Ft.value, children: r }),
      s != null && /* @__PURE__ */ t("div", { className: [Ft.delta, Ft[o]].join(" "), children: s })
    ] }),
    l != null && /* @__PURE__ */ t("div", { className: Ft.hint, children: l })
  ] });
}), Ds = "_wrap_1cpzs_1", zs = "_table_1cpzs_8", Cs = "_caption_1cpzs_14", Os = "_none_1cpzs_51", Is = "_horizontal_1cpzs_57", Ms = "_vertical_1cpzs_67", js = "_alternating_1cpzs_85", Es = "_start_1cpzs_89", Ts = "_center_1cpzs_93", As = "_end_1cpzs_97", Ls = "_empty_1cpzs_101", Lt = {
  wrap: Ds,
  table: zs,
  caption: Cs,
  none: Os,
  horizontal: Is,
  vertical: Ms,
  alternating: js,
  start: Es,
  center: Ts,
  end: As,
  empty: Ls
};
function Kg({
  columns: e,
  rows: n,
  rowKey: r,
  empty: s,
  caption: o,
  gridLines: l = "default",
  allowAlternatingRows: u = !0,
  className: a
}) {
  const i = l === "default" || l === "both" ? "" : Lt[l];
  return /* @__PURE__ */ w("div", { className: [Lt.wrap, a].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ w(
      "table",
      {
        className: [
          Lt.table,
          i,
          u ? Lt.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          o != null && /* @__PURE__ */ t("caption", { className: Lt.caption, children: o }),
          /* @__PURE__ */ t("thead", { children: /* @__PURE__ */ t("tr", { children: e.map((h) => /* @__PURE__ */ t(
            "th",
            {
              className: h.align != null ? Lt[h.align] : void 0,
              scope: "col",
              children: h.header
            },
            h.key
          )) }) }),
          /* @__PURE__ */ t("tbody", { children: n.map((h) => /* @__PURE__ */ t("tr", { children: e.map((v) => /* @__PURE__ */ t(
            "td",
            {
              className: v.align != null ? Lt[v.align] : void 0,
              children: v.render != null ? v.render(h) : h[v.key]
            },
            v.key
          )) }, r(h))) })
        ]
      }
    ),
    n.length === 0 && s != null && /* @__PURE__ */ t("div", { className: Lt.empty, children: s })
  ] });
}
const Rs = "_emptyState_123z1_1", Bs = "_icon_123z1_13", Ps = "_title_123z1_18", qs = "_description_123z1_24", Fs = "_action_123z1_30", an = {
  emptyState: Rs,
  icon: Bs,
  title: Ps,
  description: qs,
  action: Fs
};
function Hg({ icon: e, title: n, description: r, action: s, className: o }) {
  return /* @__PURE__ */ w("div", { className: [an.emptyState, o].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ t("div", { className: an.icon, children: e }),
    /* @__PURE__ */ t("div", { className: an.title, children: n }),
    r != null && /* @__PURE__ */ t("div", { className: an.description, children: r }),
    s != null && /* @__PURE__ */ t("div", { className: an.action, children: s })
  ] });
}
const Ks = "_field_18dbj_1", Hs = "_label_18dbj_8", Ws = "_required_18dbj_14", Us = "_hint_18dbj_19", Vs = "_error_18dbj_24", ln = {
  field: Ks,
  label: Hs,
  required: Ws,
  hint: Us,
  error: Vs
};
function Wg({ label: e, htmlFor: n, required: r, hint: s, error: o, children: l, className: u }) {
  const a = Ue(), i = Ue(), h = o != null ? a : s != null ? i : null, v = Vn(l) && h != null ? gr(
    l,
    {
      "aria-describedby": [
        l.props["aria-describedby"],
        h
      ].filter((f) => typeof f == "string").join(" ") || void 0,
      "aria-invalid": o != null ? !0 : l.props["aria-invalid"]
    }
  ) : l;
  return /* @__PURE__ */ w("div", { className: [ln.field, u].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ w("label", { className: ln.label, htmlFor: n, children: [
      e,
      r === !0 && /* @__PURE__ */ t("span", { className: ln.required, "aria-hidden": "true", children: "*" })
    ] }),
    v,
    o != null ? /* @__PURE__ */ t("div", { id: a, className: ln.error, "aria-live": "polite", children: o }) : s != null ? /* @__PURE__ */ t("div", { id: i, className: ln.hint, children: s }) : null
  ] });
}
const Xs = "_form_qa5tm_1", Gs = {
  form: Xs
}, vr = yr(null);
function Ys() {
  const e = br(vr);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function Ug({
  model: e,
  onSubmit: n,
  onInvalidSubmit: r,
  action: s,
  method: o,
  children: l,
  className: u
}) {
  const [a, i] = V({}), [h, v] = V(0), f = le(a);
  f.current = a;
  const C = q((p) => {
    i((z) => z[p.name] === p ? z : { ...z, [p.name]: p });
  }, []), $ = q((p) => {
    i((z) => {
      if (!(p in z)) return z;
      const _ = { ...z };
      return delete _[p], _;
    });
  }, []), O = q(() => {
    const p = {};
    for (const z of Object.values(f.current)) {
      const _ = z.validate();
      _.length > 0 && (p[z.name] = _);
    }
    return p;
  }, []), D = q(() => {
    const p = O();
    v((z) => z + 1), Object.keys(p).length === 0 ? n?.(e) : r?.(p);
  }, [O, e, n, r]), k = (p) => {
    s != null && o != null || (p.preventDefault(), D());
  }, b = Se(
    () => ({ registerField: C, unregisterField: $, submit: D, submitCount: h }),
    [C, $, D, h]
  ), m = [Gs.form, u].filter(Boolean).join(" ");
  return /* @__PURE__ */ t(vr.Provider, { value: b, children: /* @__PURE__ */ t("form", { className: m, onSubmit: k, action: s, method: o, children: l }) });
}
const tn = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", Vg = (e = "Required") => (n) => tn(n) ? e : null, Xg = (e = "Invalid email") => (n) => tn(n) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(n)) ? null : e, Gg = (e, n = "Invalid format") => (r) => tn(r) || e.test(String(r)) ? null : n, Yg = (e, n = `Minimum ${e} characters`) => (r) => tn(r) || String(r).length >= e ? null : n, Zg = (e, n = `Maximum ${e} characters`) => (r) => tn(r) || String(r).length <= e ? null : n, Jg = (e, n, r = `Between ${e} and ${n}`) => (s) => {
  if (tn(s)) return null;
  const o = Number(s);
  return !Number.isNaN(o) && o >= e && o <= n ? null : r;
};
function Zs(e, n, r) {
  return e.map((s) => s(n, r)).filter((s) => s != null);
}
function Qg(e, n) {
  const { registerField: r, unregisterField: s, submitCount: o } = Ys(), [l, u] = V(n?.initialValue), [a, i] = V(!1), [h, v] = V(!1), f = le(() => []);
  f.current = () => Zs(n?.validate ?? [], l), De(() => (r({ name: e, validate: () => f.current() }), () => s(e)), [e, r, s]), De(() => {
    o > 0 && (i(!0), v(!1));
  }, [o]);
  const C = a && !h ? f.current() : [];
  return { value: l, setValue: (O) => {
    u(O), v(!0);
  }, errors: C };
}
const Js = "_select_14c07_1", Qs = "_invalid_14c07_33", eo = "_xs_14c07_39", to = "_sm_14c07_45", no = "_md_14c07_51", ro = "_lg_14c07_57", so = "_xl_14c07_63", Tn = {
  select: Js,
  invalid: Qs,
  xs: eo,
  sm: to,
  md: no,
  lg: ro,
  xl: so
}, jn = qe(function({ size: n = "md", invalid: r = !1, options: s, children: o, className: l, ...u }, a) {
  return /* @__PURE__ */ t(
    "select",
    {
      ref: a,
      className: [Tn.select, Tn[n], r ? Tn.invalid : null, l].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...u,
      children: s != null ? s.map((i) => /* @__PURE__ */ t("option", { value: i.value, disabled: i.disabled, children: i.label }, i.value)) : o
    }
  );
}), xr = [
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
], $n = {
  string: "Contains",
  number: "Equals",
  boolean: "Equals",
  date: "Equals",
  enum: "Equals"
};
function En(e, n) {
  return n.split(".").reduce((r, s) => {
    if (r != null)
      return r[s];
  }, e);
}
function Yn(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function yn(e, n) {
  const r = Yn(e), s = Yn(n);
  if (typeof r == "number" && typeof s == "number") return r - s;
  const o = String(r ?? ""), l = String(s ?? "");
  return o < l ? -1 : o > l ? 1 : 0;
}
function Zn(e, n, r) {
  const s = En(n, e.property), o = Jn(s, e.value, e.operator, r);
  if (e.secondOperator == null || e.secondValue === void 0) return o;
  const l = Jn(s, e.secondValue, e.secondOperator, r);
  return (e.logicalOperator ?? "And") === "And" ? o && l : o || l;
}
function Jn(e, n, r, s) {
  const o = s === "CaseInsensitive", l = (i) => o && typeof i == "string" ? i.toLowerCase() : i, u = l(e), a = l(n);
  switch (r) {
    case "Equals":
      return u === a || Array.isArray(u) && u.some((i) => l(i) === a);
    case "NotEquals":
      return u !== a && !(Array.isArray(u) && u.some((i) => l(i) === a));
    case "LessThan":
      return yn(u, a) < 0;
    case "LessThanOrEquals":
      return yn(u, a) <= 0;
    case "GreaterThan":
      return yn(u, a) > 0;
    case "GreaterThanOrEquals":
      return yn(u, a) >= 0;
    case "Contains":
      return typeof u == "string" && typeof a == "string" && u.includes(a);
    case "StartsWith":
      return typeof u == "string" && typeof a == "string" && u.startsWith(a);
    case "EndsWith":
      return typeof u == "string" && typeof a == "string" && u.endsWith(a);
    case "DoesNotContain":
      return typeof u == "string" && typeof a == "string" && !u.includes(a);
    case "In":
      return Array.isArray(a) && a.some((i) => l(i) === u);
    case "NotIn":
      return Array.isArray(a) && !a.some((i) => l(i) === u);
    case "IsNull":
      return e == null;
    case "IsNotNull":
      return e != null;
    case "IsEmpty":
      return e == null || e === "";
    case "IsNotEmpty":
      return e != null && e !== "";
    case "Custom":
      return typeof n == "function" ? !!n(e) : !0;
    default:
      return !1;
  }
}
function Gn(e) {
  return "filters" in e;
}
function kr(e, n, r = {}) {
  const s = r.logicalOperator ?? "And", o = r.caseSensitivity ?? "CaseInsensitive";
  if (Gn(n)) {
    if (n.filters.length === 0) return !0;
    const l = n.operator ?? s;
    return n.filters[l === "Or" ? "some" : "every"](
      (u) => kr(e, u, { logicalOperator: l, caseSensitivity: o })
    );
  }
  return n.operator === "Custom", Zn(n, e, o);
}
function wr(e, n, r = {}) {
  return e.filter((s) => kr(s, n, r));
}
function oo(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function ht(e) {
  return typeof e == "string" ? `"${oo(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(ht).join(", ")}]` : `"${String(e)}"`;
}
function ao(e) {
  const n = (s, o) => {
    switch (s) {
      case "Equals":
        return `${e.property}.Equals(${ht(o)})`;
      case "NotEquals":
        return `!${e.property}.Equals(${ht(o)})`;
      case "LessThan":
        return `${e.property}.LessThan(${ht(o)})`;
      case "LessThanOrEquals":
        return `${e.property}.LessThanOrEquals(${ht(o)})`;
      case "GreaterThan":
        return `${e.property}.GreaterThan(${ht(o)})`;
      case "GreaterThanOrEquals":
        return `${e.property}.GreaterThanOrEquals(${ht(o)})`;
      case "Contains":
        return `${e.property}.Contains(${ht(o)})`;
      case "StartsWith":
        return `${e.property}.StartsWith(${ht(o)})`;
      case "EndsWith":
        return `${e.property}.EndsWith(${ht(o)})`;
      case "DoesNotContain":
        return `!${e.property}.Contains(${ht(o)})`;
      case "In":
        return `${e.property}.In(${ht(o)})`;
      case "NotIn":
        return `!${e.property}.In(${ht(o)})`;
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
    return n(e.operator, e.value);
  const r = e.logicalOperator ?? "And";
  return `(${n(e.operator, e.value)} ${r} ${n(
    e.secondOperator,
    e.secondValue
  )})`;
}
function lo(e) {
  return Gn(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(lo).filter(Boolean).join(` ${e.operator} `)})` : ao(e);
}
function co(e) {
  return e.replace(/'/g, "''");
}
const io = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function uo(e, n) {
  const r = e.property, s = n === "CaseInsensitive", o = (i) => s ? `tolower(${i})` : i, l = (i) => typeof i == "string" ? `'${co(i)}'` : i instanceof Date ? `'${i.toISOString()}'` : String(i ?? ""), u = (i, h) => {
    const v = typeof h == "string", f = v && s ? o(r) : r;
    switch (i) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${f} ${io[i]} ${v && s ? o(l(h)) : l(h)}`;
      case "Contains":
        return `contains(${o(r)}, ${o(l(h))})`;
      case "StartsWith":
        return `startswith(${o(r)}, ${o(l(h))})`;
      case "EndsWith":
        return `endswith(${o(r)}, ${o(l(h))})`;
      case "DoesNotContain":
        return `not(contains(${o(r)}, ${o(l(h))}))`;
      case "In":
        return Array.isArray(h) ? `${f} in (${h.map((C) => l(C)).join(", ")})` : `${f} in (${l(h)})`;
      case "NotIn":
        return Array.isArray(h) ? `not(${f} in (${h.map((C) => l(C)).join(", ")}))` : `not(${f} in (${l(h)}))`;
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
  if (e.secondOperator == null || e.secondValue === void 0)
    return u(e.operator, e.value);
  const a = (e.logicalOperator ?? "And") === "And" ? "and" : "or";
  return `(${u(e.operator, e.value)} ${a} ${u(
    e.secondOperator,
    e.secondValue
  )})`;
}
function fo(e, n = {}) {
  const r = n.caseSensitivity ?? "CaseInsensitive";
  if (Gn(e)) {
    if (e.filters.length === 0) return "";
    const s = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((o) => fo(o, { caseSensitivity: r })).filter(Boolean).join(` ${s} `)})`;
  }
  return uo(e, r);
}
function _o(e, n) {
  return n.length === 0 ? [...e] : [...e].sort((r, s) => {
    for (const o of n) {
      const l = o.sortOrder === "Ascending" ? 1 : -1, u = yn(En(r, o.property), En(s, o.property));
      if (u !== 0) return u * l;
    }
    return 0;
  });
}
const po = "_filter_1jk5p_1", ho = "_rows_1jk5p_9", mo = "_row_1jk5p_9", go = "_join_1jk5p_21", bo = "_property_1jk5p_30", yo = "_operator_1jk5p_34", vo = "_value_1jk5p_38", xo = "_remove_1jk5p_42", ko = "_bar_1jk5p_58", wo = "_add_1jk5p_64", $o = "_custom_1jk5p_78", No = "_summary_1jk5p_82", ut = {
  filter: po,
  rows: ho,
  row: mo,
  join: go,
  property: bo,
  operator: yo,
  value: vo,
  remove: xo,
  bar: ko,
  add: wo,
  custom: $o,
  summary: No
}, So = {
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
function Do({
  property: e,
  value: n,
  onChange: r
}) {
  if (e.editor != null)
    return /* @__PURE__ */ t(Oe, { children: e.editor({ value: n, onChange: r }) });
  const s = e.type ?? "string";
  if (s === "enum" && e.values != null)
    return /* @__PURE__ */ t(
      jn,
      {
        "aria-label": e.title ?? e.name,
        className: ut.value,
        options: e.values,
        value: String(n ?? ""),
        onChange: (l) => r(l.target.value)
      }
    );
  if (s === "boolean")
    return /* @__PURE__ */ t(
      jn,
      {
        "aria-label": e.title ?? e.name,
        className: ut.value,
        options: [
          { value: "", label: "" },
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        value: n == null ? "" : String(n),
        onChange: (l) => {
          l.target.value === "" ? r(void 0) : r(l.target.value === "true");
        }
      }
    );
  const o = s === "number" ? { type: "number" } : s === "date" ? { type: "date" } : { type: "text" };
  return /* @__PURE__ */ t(
    "input",
    {
      "aria-label": e.title ?? e.name,
      className: ut.value,
      ...o,
      value: n == null ? "" : String(n),
      onChange: (l) => r(s === "number" && l.target.value !== "" ? Number(l.target.value) : l.target.value)
    }
  );
}
function e0({
  properties: e,
  logicalOperator: n = "And",
  filterCaseSensitivity: r = "CaseInsensitive",
  initialRows: s,
  uniqueFilters: o = !1,
  className: l,
  viewChanged: u,
  items: a,
  children: i
}) {
  const [h, v] = V(
    () => s != null && s.length > 0 ? s.map((b, m) => ({ id: m, ...b })) : [{ id: 0, property: e[0]?.name ?? "", operator: $n[e[0]?.type ?? "string"], value: void 0 }]
  ), f = (b, m) => {
    v((p) => p.map((z) => z.id === b ? { ...z, ...m } : z));
  }, C = () => {
    const b = h[h.length - 1], m = Math.max(0, ...h.map((z) => z.id)) + 1, p = e[0];
    v((z) => [
      ...z,
      {
        id: m,
        property: b?.property ?? p?.name ?? "",
        operator: $n[e.find((_) => _.name === (b?.property ?? p?.name))?.type ?? "string"],
        value: void 0
      }
    ]);
  }, $ = (b) => {
    v((m) => m.length > 1 ? m.filter((p) => p.id !== b) : m);
  }, O = Se(() => {
    const b = ["IsNull", "IsEmpty", "IsNotNull", "IsNotEmpty"], m = [];
    for (const p of h) {
      if (p.property === "" || (p.value == null || p.value === "") && !b.includes(p.operator)) continue;
      const _ = {
        property: p.property,
        operator: p.operator,
        value: p.value
      };
      p.secondOperator != null && p.secondValue !== void 0 && (_.secondOperator = p.secondOperator, _.secondValue = p.secondValue, _.logicalOperator = p.logicalOperator ?? "And"), m.push(_);
    }
    return m;
  }, [h]), D = Se(() => a == null || O.length === 0 ? a : wr(a, { operator: n, filters: O }, { caseSensitivity: r }), [a, O, n, r]);
  De(() => {
    u != null && a != null && u(D ?? []);
  }, [D]);
  const k = (b) => e.find((m) => m.name === b) ?? { name: b, type: "string" };
  return /* @__PURE__ */ w("div", { className: [ut.filter, l].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ t("div", { className: ut.rows, role: "group", "aria-label": "Filter conditions", children: h.map((b, m) => {
      const p = k(b.property), z = o ? [$n[p.type ?? "string"]] : xr;
      return /* @__PURE__ */ w("div", { className: ut.row, children: [
        m > 0 ? /* @__PURE__ */ t("span", { className: ut.join, "aria-hidden": "true", children: n }) : null,
        /* @__PURE__ */ t(
          jn,
          {
            "aria-label": `Condition ${m + 1} property`,
            className: ut.property,
            value: b.property,
            onChange: (_) => {
              const g = e.find((c) => c.name === _.target.value);
              f(b.id, {
                property: _.target.value,
                operator: $n[g?.type ?? "string"],
                value: void 0
              });
            },
            options: e.map((_) => ({ value: _.name, label: _.title ?? _.name }))
          }
        ),
        /* @__PURE__ */ t(
          jn,
          {
            "aria-label": `Condition ${m + 1} operator`,
            className: ut.operator,
            value: b.operator,
            onChange: (_) => f(b.id, { operator: _.target.value }),
            options: z.map((_) => ({ value: _, label: So[_] }))
          }
        ),
        /* @__PURE__ */ t(Do, { property: p, value: b.value, onChange: (_) => f(b.id, { value: _ }) }),
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: ut.remove,
            "aria-label": `Remove condition ${m + 1}`,
            onClick: () => $(b.id),
            children: "×"
          }
        )
      ] }, b.id);
    }) }),
    /* @__PURE__ */ w("div", { className: ut.bar, children: [
      /* @__PURE__ */ t("button", { type: "button", className: ut.add, onClick: C, children: "Add filter" }),
      i != null ? /* @__PURE__ */ t("div", { className: ut.custom, children: i }) : null,
      a != null ? /* @__PURE__ */ w("span", { className: ut.summary, "aria-live": "polite", children: [
        D?.length ?? 0,
        " of ",
        a.length
      ] }) : null
    ] })
  ] });
}
const zo = "_pager_15jh8_1", Co = "_alignLeft_15jh8_10", Oo = "_alignCenter_15jh8_14", Io = "_alignRight_15jh8_18", Mo = "_alignJustify_15jh8_22", jo = "_summary_15jh8_26", Eo = "_controls_15jh8_31", To = "_button_15jh8_37", Ao = "_active_15jh8_73", Lo = "_ellipsis_15jh8_85", Ro = "_size_15jh8_91", rt = {
  pager: zo,
  alignLeft: Co,
  alignCenter: Oo,
  alignRight: Io,
  alignJustify: Mo,
  summary: jo,
  controls: Eo,
  button: To,
  active: Ao,
  ellipsis: Lo,
  size: Ro
};
function Bo(e, n, r, s) {
  return e.replace("{0}", String(n)).replace("{1}", String(r)).replace("{2}", String(s));
}
function Qn(e, n) {
  return e.replace("{0}", String(n));
}
function Po(e, n, r) {
  if (n <= r) return Array.from({ length: n }, (a, i) => i + 1);
  const s = Math.floor(r / 2);
  let o = Math.max(1, e - s);
  const l = Math.min(n, o + r - 1);
  o = Math.max(1, l - r + 1);
  const u = [];
  for (let a = o; a <= l; a++) u.push(a);
  return o > 2 && u.unshift("ellipsis"), o > 1 && u.unshift(1), l < n - 1 && u.push("ellipsis"), l < n && u.push(n), u;
}
function qo({
  count: e,
  pageSize: n,
  page: r,
  pageNumber: s,
  defaultPage: o = 1,
  pageSizeOptions: l,
  pageNumbersCount: u = 5,
  alwaysVisible: a = !1,
  horizontalAlign: i = "left",
  showPagingSummary: h,
  showSummary: v,
  showPageSizeSelector: f = !0,
  pagingSummaryFormat: C = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: $,
  summaryTemplate: O,
  pageSizeText: D = "Items per page",
  firstPageTitle: k = "First page",
  prevPageTitle: b = "Previous page",
  nextPageTitle: m = "Next page",
  lastPageTitle: p = "Last page",
  pageTitleFormat: z = "Page {0}",
  pageAriaLabelFormat: _ = "Page {0}",
  onPageChange: g,
  onPageSizeChange: c,
  ariaLabel: x = "Pagination",
  className: S
}) {
  const U = r ?? s ?? o, [R, I] = V(U), d = r !== void 0 || s !== void 0, N = d ? U : R, M = Math.max(1, Math.ceil(e / n)), L = Math.min(Math.max(1, N), M), T = h ?? v ?? !0, J = a || M > 1, se = Po(L, M, u), de = q(
    (X) => {
      const W = Math.min(Math.max(1, X), M);
      d || I(W);
      const B = (W - 1) * n;
      g?.({ page: W, skip: B, top: n, pageCount: M, pageSize: n });
    },
    [d, g, M, n]
  ), ne = i === "center" ? rt.alignCenter : i === "right" ? rt.alignRight : i === "justify" ? rt.alignJustify : rt.alignLeft, oe = { count: e, pageNumber: L, pageSize: n, pageCount: M }, ae = (X) => {
    const W = Array.from(X.currentTarget.querySelectorAll("button[data-pager-page]")), B = W.indexOf(document.activeElement);
    B !== -1 && (X.key === "ArrowRight" || X.key === "ArrowDown" ? (X.preventDefault(), (W[B + 1] ?? W[0])?.focus()) : X.key === "ArrowLeft" || X.key === "ArrowUp" ? (X.preventDefault(), (W[B - 1] ?? W[W.length - 1])?.focus()) : X.key === "Home" ? (X.preventDefault(), W[0]?.focus()) : X.key === "End" && (X.preventDefault(), W[W.length - 1]?.focus()));
  };
  return J ? /* @__PURE__ */ w("nav", { className: [rt.pager, ne, S].filter(Boolean).join(" "), "aria-label": x, children: [
    T && /* @__PURE__ */ t("span", { className: rt.summary, "aria-live": "polite", children: $ ? $(oe) : O ? O({ count: e, pageNumber: L, pageSize: n }) : Bo(C, L, M, e) }),
    /* @__PURE__ */ w("div", { className: rt.controls, role: "group", "aria-label": x, onKeyDown: ae, children: [
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: rt.button,
          disabled: L <= 1,
          onClick: () => de(1),
          "aria-label": k,
          title: k,
          children: "«"
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: rt.button,
          disabled: L <= 1,
          onClick: () => de(L - 1),
          "aria-label": b,
          title: b,
          children: "‹"
        }
      ),
      se.map(
        (X, W) => X === "ellipsis" ? /* @__PURE__ */ t("span", { className: rt.ellipsis, "aria-hidden": "true", children: "…" }, `e${W}`) : /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            "data-pager-page": X,
            className: [rt.button, X === L ? rt.active : ""].filter(Boolean).join(" "),
            "aria-current": X === L ? "page" : void 0,
            "aria-label": Qn(_, X),
            title: Qn(z, X),
            onClick: () => de(X),
            children: X
          },
          X
        )
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: rt.button,
          disabled: L >= M,
          onClick: () => de(L + 1),
          "aria-label": m,
          title: m,
          children: "›"
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: rt.button,
          disabled: L >= M,
          onClick: () => de(M),
          "aria-label": p,
          title: p,
          children: "»"
        }
      )
    ] }),
    f && l && l.length > 0 && /* @__PURE__ */ w("label", { className: rt.size, children: [
      /* @__PURE__ */ t("span", { children: D }),
      /* @__PURE__ */ t(
        "select",
        {
          value: n,
          onChange: (X) => c?.(Number(X.target.value)),
          "aria-label": D,
          children: l.map((X) => /* @__PURE__ */ t("option", { value: X, children: X }, X))
        }
      )
    ] })
  ] }) : null;
}
function Fn(e) {
  const { pageNumber: n, onPageChange: r, summaryTemplate: s, showSummary: o, ...l } = e;
  return /* @__PURE__ */ t(
    qo,
    {
      page: n,
      showPagingSummary: o,
      pagingSummaryFormat: "Page {0} of {1}",
      pageAriaLabelFormat: "{0}",
      pageTitleFormat: "{0}",
      alwaysVisible: !0,
      pagingSummaryTemplate: s ? (a) => s({ count: a.count, pageNumber: a.pageNumber, pageSize: a.pageSize }) : void 0,
      onPageChange: r ? (a) => r(a.page) : void 0,
      ...l
    }
  );
}
function Fo(e, n, r, s, o, l) {
  if (!n || !r) return e.map((i) => ({ type: "row", row: i }));
  const u = /* @__PURE__ */ new Map();
  e.forEach((i) => {
    const h = String(o(i, n) ?? ""), v = u.get(h);
    v ? v.push(i) : u.set(h, [i]);
  });
  const a = [];
  return u.forEach((i, h) => {
    const v = i[0], f = v != null ? o(v, n) : void 0;
    a.push({
      type: "group",
      group: { key: h, display: l(f), property: n, title: r.title ?? n, count: i.length }
    }), s.has(h) && i.forEach((C) => a.push({ type: "row", row: C }));
  }), a;
}
function Nn(e, n) {
  return e.property ?? `col-${n}`;
}
function Ko(e, n) {
  const r = {};
  let s = 0;
  return e.forEach(({ key: o, column: l }) => {
    if (!l.frozen) return;
    r[o] = s === 0 ? "0px" : `${s}px`;
    const u = n[o] ?? l.width ?? "8rem";
    s += parseFloat(u);
  }), r;
}
function Ho(e, n) {
  if (e !== void 0)
    switch (n) {
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
function cn(e, n) {
  if (n != null)
    return En(e, n);
}
function er(e, n) {
  if (n == null || n === "") return String(e ?? "");
  const r = /^N(\d+)$/i.exec(n);
  if (r && typeof e == "number") return e.toFixed(Number(r[1]));
  if (n === "d" || n === "D") {
    const s = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return s != null && !Number.isNaN(s.getTime()) ? s.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const tr = ["Ascending", "Descending", null];
function Wo(e, n, r = {}) {
  const s = e.find((l) => l.property === n), o = tr[(s ? tr.indexOf(s.sortOrder) : -1) + 1] ?? null;
  return o == null ? e.filter((l) => l.property !== n) : r.multi ? [...e.filter((l) => l.property !== n), { property: n, sortOrder: o }] : [{ property: n, sortOrder: o }];
}
function Uo(e, n) {
  return _o(e, n);
}
function Vo(e, n, r) {
  const s = Math.max(1, Math.ceil(e.length / r)), o = Math.min(Math.max(1, n), s), l = (o - 1) * r;
  return { items: e.slice(l, l + r), pageCount: s, pageNumber: o, total: e.length };
}
function Xo(e, n, r = {}) {
  const s = [...n.filters.entries()].filter(([, a]) => a.value !== "" && a.value !== void 0).map(([a, i]) => ({
    property: a,
    operator: i.operator ?? "Contains",
    value: Ho(i.value, r.types?.[a] ?? "string")
  })), o = s.length > 0 ? wr(e, { operator: r.logicalOperator ?? "And", filters: s }, {
    logicalOperator: r.logicalOperator ?? "And",
    caseSensitivity: r.caseSensitivity ?? "CaseInsensitive"
  }) : e, l = Uo(o, n.sorts);
  return { ...Vo(l, n.pageNumber, n.pageSize), sorts: n.sorts, filters: n.filters, pageSize: n.pageSize };
}
function Go(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
const Yo = "_grid_156jh_1", Zo = "_toolbar_156jh_8", Jo = "_picker_156jh_13", Qo = "_pickerButton_156jh_17", ea = "_pickerPanel_156jh_31", ta = "_pickerItem_156jh_46", na = "_groupPanel_156jh_55", ra = "_groupPanelActive_156jh_66", sa = "_groupPanelText_156jh_70", oa = "_groupChip_156jh_74", aa = "_groupRemove_156jh_85", la = "_groupRow_156jh_94", ca = "_groupCell_156jh_98", ia = "_groupToggle_156jh_103", da = "_editRow_156jh_116", ua = "_editCell_156jh_120", fa = "_editInput_156jh_125", _a = "_commandCell_156jh_135", pa = "_commandButton_156jh_141", ha = "_data_156jh_156", ma = "_table_156jh_163", ga = "_header_156jh_169", ba = "_center_156jh_181", ya = "_right_156jh_185", va = "_sortButton_156jh_189", xa = "_sortIndicator_156jh_207", ka = "_sortIndex_156jh_211", wa = "_cell_156jh_222", $a = "_clickable_156jh_236", Na = "_frozen_156jh_244", Sa = "_selected_156jh_250", Da = "_resizeHandle_156jh_254", za = "_filterCell_156jh_272", Ca = "_filterSelect_156jh_280", Oa = "_filterInput_156jh_290", Ia = "_empty_156jh_301", Ma = "_loading_156jh_307", ja = "_visuallyHidden_156jh_317", pe = {
  grid: Yo,
  toolbar: Zo,
  picker: Jo,
  pickerButton: Qo,
  pickerPanel: ea,
  pickerItem: ta,
  groupPanel: na,
  groupPanelActive: ra,
  groupPanelText: sa,
  groupChip: oa,
  groupRemove: aa,
  groupRow: la,
  groupCell: ca,
  groupToggle: ia,
  editRow: da,
  editCell: ua,
  editInput: fa,
  commandCell: _a,
  commandButton: pa,
  data: ha,
  table: ma,
  header: ga,
  center: ba,
  right: ya,
  sortButton: va,
  sortIndicator: xa,
  sortIndex: ka,
  cell: wa,
  clickable: $a,
  frozen: Na,
  selected: Sa,
  resizeHandle: Da,
  filterCell: za,
  filterSelect: Ca,
  filterInput: Oa,
  empty: Ia,
  loading: Ma,
  visuallyHidden: ja
}, Ea = {
  Ascending: "ascending",
  Descending: "descending"
};
function nr(e, n) {
  return e.filterable ?? n;
}
function Ta(e, n) {
  return e.sortable ?? n;
}
function Aa(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dt-grid-resize]");
}
function t0({
  columns: e,
  rows: n,
  rowKey: r,
  allowSorting: s = !1,
  allowMultiColumnSorting: o = !1,
  showSortIndex: l = !1,
  allowFiltering: u = !1,
  filterCaseSensitivity: a = "CaseInsensitive",
  logicalOperator: i = "And",
  allowPaging: h = !1,
  pageSize: v = 10,
  pageSizeOptions: f,
  pageNumbersCount: C = 5,
  pagerPosition: $ = "Bottom",
  showPagingSummary: O = !0,
  showPageSizeSelector: D = !0,
  selectionMode: k = "None",
  selectedKeys: b,
  onSelectionChange: m,
  showColumnPicker: p = !1,
  columnPickerText: z = "Columns",
  allowColumnResize: _ = !1,
  allowColumnReorder: g = !1,
  allowGrouping: c = !1,
  groupPanelText: x = "Drag a column header here to group",
  groupExpanded: S = !0,
  editMode: U = "None",
  allowRowCreate: R = !1,
  onRowUpdate: I,
  onRowCreate: d,
  onRowDelete: N,
  isLoading: M = !1,
  empty: L = "No records found",
  ariaLabel: T,
  className: J,
  onRowClick: se
}) {
  const [de, ne] = V([]), [oe, ae] = V(/* @__PURE__ */ new Map()), [X, W] = V(1), [B, te] = V(v), [he, Z] = V(
    () => e.map((A, P) => Nn(A, P))
  ), [me, ye] = V(
    () => new Set(e.map((A, P) => A.visible !== !1 ? Nn(A, P) : "").filter(Boolean))
  ), [ze, He] = V({}), [Me, Xe] = V(!1), [be, Ge] = V(null), [et, We] = V(null), [Ze, Fe] = V(null), [Ye, H] = V({}), y = le(null), E = le(null), K = Se(() => {
    const A = /* @__PURE__ */ new Map();
    return e.forEach((P, ue) => A.set(Nn(P, ue), P)), A;
  }, [e]), Q = Se(
    () => he.filter((A) => me.has(A)).map((A) => ({ key: A, column: K.get(A) })).filter((A) => A.column != null),
    [he, me, K]
  ), G = Se(
    () => Ko(Q, ze),
    [Q, ze]
  ), fe = U !== "None" || N != null || R, ke = Se(
    () => Xo(n, { sorts: de, filters: oe, pageNumber: X, pageSize: B }, {
      logicalOperator: i,
      caseSensitivity: a,
      types: Object.fromEntries(
        e.filter((A) => A.type != null && A.property != null).map((A) => [A.property, A.type])
      )
    }),
    [n, de, oe, X, B, i, a, e]
  ), Re = Se(
    () => be ? e.find((A) => A.property === be) : void 0,
    [be, e]
  ), je = Se(
    () => et ?? new Set(S ? ke.items.map((A) => String(cn(A, be ?? "") ?? "")) : []),
    [et, S, ke.items, be]
  ), tt = Se(
    () => Fo(
      ke.items,
      be ?? void 0,
      Re,
      je,
      cn,
      (A) => er(A, Re?.format)
    ),
    [ke.items, be, Re, je]
  ), bt = Se(
    () => be ? Q.filter((A) => A.column.property !== be) : Q,
    [Q, be]
  ), Y = (A) => {
    A !== "" && ne(Wo(de, A, { multi: o }));
  }, $e = (A, P) => {
    ae((ue) => {
      const ve = new Map(ue);
      return ve.set(A, P), ve;
    }), W(1);
  }, F = (A) => {
    te(A), W(1);
  }, ee = (A) => {
    if (k === "None") return;
    const P = r(A), ue = b ?? [];
    let ve;
    k === "Single" ? ve = ue.length === 1 && ue[0] === P ? [] : [P] : ve = ue.includes(P) ? ue.filter((nt) => nt !== P) : [...ue, P], m?.(ve);
  }, ie = (A) => {
    se?.(A);
  }, _e = (A, P, ue) => {
    y.current = { key: A, startX: P, startWidth: ue };
  }, ce = (A) => {
    const P = y.current;
    if (!P) return;
    const ue = A - P.startX, ve = Math.max(48, P.startWidth + ue);
    He((nt) => ({ ...nt, [P.key]: `${ve}px` }));
  }, ge = () => {
    y.current = null;
  }, Ae = (A) => {
    E.current = A;
  }, Be = (A) => {
    const P = E.current;
    E.current = null, !(!P || P === A) && Z((ue) => {
      const ve = [...ue], nt = ve.indexOf(P), _t = ve.indexOf(A);
      return nt < 0 || _t < 0 ? ue : (ve.splice(nt, 1), ve.splice(_t, 0, P), ve);
    });
  }, j = (A) => {
    ye((P) => {
      const ue = new Set(P);
      return ue.has(A) ? ue.delete(A) : ue.add(A), ue;
    });
  }, re = () => {
    const A = E.current;
    if (E.current = null, !A || !c) return;
    const ue = K.get(A)?.property;
    ue && (Ge(ue), We(null));
  }, Ce = () => {
    Ge(null), We(null);
  }, we = (A) => {
    We((P) => {
      const ue = P ?? new Set(S ? ke.items.map((nt) => String(cn(nt, be ?? "") ?? "")) : []), ve = new Set(ue);
      return ve.has(A) ? ve.delete(A) : ve.add(A), ve;
    });
  }, Ee = (A) => {
    const P = {};
    e.forEach((ue) => {
      ue.property && (P[ue.property] = cn(A, ue.property));
    }), H(P), Fe(String(r(A)));
  }, Je = () => {
    const A = {};
    e.forEach((P) => {
      P.property && P.type === "boolean" && (A[P.property] = !1);
    }), H(A), Fe("__new__");
  }, lt = () => {
    Fe(null), H({});
  }, zt = (A) => {
    if (Ze === "__new__") {
      const P = Object.fromEntries(
        e.filter((ue) => ue.property).map((ue) => [ue.property, Ye[ue.property]])
      );
      d?.(P);
    } else if (A != null) {
      const P = { ...A, ...Ye };
      I?.(A, P);
    }
    lt();
  }, xn = h && ($ === "Top" || $ === "TopAndBottom"), nn = h && ($ === "Bottom" || $ === "TopAndBottom"), Sr = u && e.some((A) => nr(A, u)), Dr = (A, P, ue) => A.render ? A.render(P, { index: 0 }) : er(cn(P, A.property), A.format), zr = (A) => {
    const P = [pe.cell];
    return A.align === "center" && P.push(pe.center), A.align === "right" && P.push(pe.right), A.frozen && P.push(pe.frozen), P.join(" ");
  };
  return /* @__PURE__ */ w("div", { className: [pe.grid, J].filter(Boolean).join(" "), children: [
    xn && /* @__PURE__ */ t(
      Fn,
      {
        pageNumber: ke.pageNumber,
        pageSize: ke.pageSize,
        count: ke.total,
        pageSizeOptions: f,
        pageNumbersCount: C,
        showSummary: O,
        showPageSizeSelector: D,
        ariaLabel: nn ? "Pagination (top)" : "Pagination",
        onPageChange: W,
        onPageSizeChange: F
      }
    ),
    (c || R || p) && /* @__PURE__ */ w("div", { className: pe.toolbar, children: [
      c && /* @__PURE__ */ t(
        "div",
        {
          className: [pe.groupPanel, be ? pe.groupPanelActive : ""].filter(Boolean).join(" "),
          "data-dt-grid-group-panel": !0,
          onDragOver: c ? (A) => A.preventDefault() : void 0,
          onDrop: c ? re : void 0,
          children: be ? /* @__PURE__ */ w("span", { className: pe.groupChip, children: [
            Re?.title ?? be,
            ":",
            " ",
            /* @__PURE__ */ t("button", { type: "button", className: pe.groupRemove, onClick: Ce, "aria-label": `Remove group by ${Re?.title ?? be}`, children: "×" })
          ] }) : /* @__PURE__ */ t("span", { className: pe.groupPanelText, children: x })
        }
      ),
      R && /* @__PURE__ */ t("button", { type: "button", className: pe.pickerButton, onClick: Je, children: "Add row" }),
      p && /* @__PURE__ */ w("div", { className: pe.picker, children: [
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: pe.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": Me,
            onClick: () => Xe((A) => !A),
            children: z
          }
        ),
        Me && /* @__PURE__ */ t("div", { className: pe.pickerPanel, role: "menu", "aria-label": z, children: e.map((A, P) => {
          const ue = Nn(A, P);
          return /* @__PURE__ */ w("label", { className: pe.pickerItem, children: [
            /* @__PURE__ */ t(
              "input",
              {
                type: "checkbox",
                checked: me.has(ue),
                onChange: () => j(ue)
              }
            ),
            A.title ?? A.property
          ] }, ue);
        }) })
      ] })
    ] }),
    /* @__PURE__ */ w("div", { className: pe.data, children: [
      /* @__PURE__ */ w(
        "table",
        {
          className: pe.table,
          role: "grid",
          "aria-rowcount": ke.total + 1,
          "aria-label": T,
          "aria-busy": M || void 0,
          children: [
            /* @__PURE__ */ w("colgroup", { children: [
              bt.map(({ key: A, column: P }) => /* @__PURE__ */ t(
                "col",
                {
                  style: {
                    width: ze[A] ?? P.width,
                    minWidth: P.minWidth,
                    maxWidth: P.maxWidth
                  }
                },
                A
              )),
              fe && /* @__PURE__ */ t("col", { style: { width: "8rem" } })
            ] }),
            /* @__PURE__ */ w("thead", { children: [
              /* @__PURE__ */ w("tr", { children: [
                bt.map(({ key: A, column: P }) => {
                  const ue = Ta(P, s), ve = de.find((Te) => Te.property === P.property), nt = ve ? de.indexOf(ve) + 1 : 0, _t = P.align ?? "left";
                  return /* @__PURE__ */ w(
                    "th",
                    {
                      "aria-sort": ue && ve ? Ea[ve.sortOrder] : "none",
                      className: [
                        pe.header,
                        _t === "center" ? pe.center : "",
                        _t === "right" ? pe.right : "",
                        P.frozen ? pe.frozen : ""
                      ].filter(Boolean).join(" "),
                      style: P.frozen ? { left: G[A] } : void 0,
                      scope: "col",
                      draggable: g || c || void 0,
                      onDragStart: g || c ? (Te) => {
                        Te.dataTransfer && (Te.dataTransfer.effectAllowed = "move"), Ae(A);
                      } : void 0,
                      onDragOver: g ? (Te) => Te.preventDefault() : void 0,
                      onDrop: g ? () => Be(A) : void 0,
                      children: [
                        ue ? /* @__PURE__ */ w(
                          "button",
                          {
                            type: "button",
                            className: pe.sortButton,
                            onClick: () => P.property != null && Y(P.property),
                            "aria-label": ve ? ve.sortOrder === "Ascending" ? `Sort ${P.title ?? P.property} descending` : `Sort ${P.title ?? P.property} ascending` : `Sort ${P.title ?? P.property} ascending`,
                            children: [
                              P.title ?? P.property,
                              ve && /* @__PURE__ */ t("span", { className: pe.sortIndicator, "aria-hidden": "true", children: ve.sortOrder === "Ascending" ? "▲" : "▼" }),
                              nt > 1 && l && /* @__PURE__ */ t("span", { className: pe.sortIndex, children: nt })
                            ]
                          }
                        ) : P.title ?? P.property,
                        _ && /* @__PURE__ */ t(
                          "span",
                          {
                            className: pe.resizeHandle,
                            "data-dt-grid-resize": !0,
                            role: "separator",
                            "aria-orientation": "vertical",
                            "aria-label": `Resize ${P.title ?? P.property}`,
                            onMouseDown: (Te) => {
                              Te.preventDefault(), Te.stopPropagation();
                              const rn = ze[A] ?? P.width, kn = rn ? parseFloat(rn) : 96;
                              _e(A, Te.clientX, Number.isFinite(kn) ? kn : 96);
                            },
                            onMouseMove: (Te) => {
                              y.current?.key === A && ce(Te.clientX);
                            },
                            onMouseUp: ge,
                            onMouseLeave: () => {
                              y.current?.key === A && ge();
                            }
                          }
                        )
                      ]
                    },
                    A
                  );
                }),
                fe && /* @__PURE__ */ t("th", { className: pe.header, scope: "col", children: "Actions" })
              ] }),
              Sr && /* @__PURE__ */ t("tr", { children: bt.map(({ key: A, column: P }) => {
                if (!nr(P, u)) return /* @__PURE__ */ t("td", { className: pe.filterCell }, A);
                const ue = oe.get(P.property ?? "");
                return /* @__PURE__ */ w("td", { className: pe.filterCell, children: [
                  /* @__PURE__ */ w("label", { className: pe.visuallyHidden, htmlFor: `df-${P.property}`, children: [
                    "Filter ",
                    P.title ?? P.property
                  ] }),
                  /* @__PURE__ */ t(
                    "select",
                    {
                      id: `df-${P.property}`,
                      className: pe.filterSelect,
                      value: ue?.operator ?? Go(P.type ?? "string"),
                      onChange: (ve) => $e(P.property ?? "", { ...ue, operator: ve.target.value }),
                      "aria-label": `${P.title ?? P.property} operator`,
                      children: xr.filter((ve) => ve !== "Custom").map((ve) => /* @__PURE__ */ t("option", { value: ve, children: ve }, ve))
                    }
                  ),
                  /* @__PURE__ */ t(
                    "input",
                    {
                      className: pe.filterInput,
                      value: ue?.value ?? "",
                      onChange: (ve) => $e(P.property ?? "", { ...ue, value: ve.target.value }),
                      placeholder: `Filter ${P.title ?? P.property}`,
                      "aria-label": `${P.title ?? P.property} value`
                    }
                  )
                ] }, A);
              }) })
            ] }),
            /* @__PURE__ */ w("tbody", { children: [
              Ze === "__new__" && /* @__PURE__ */ w("tr", { className: pe.editRow, children: [
                bt.map(({ key: A, column: P }) => /* @__PURE__ */ t("td", { className: pe.editCell, children: P.property && /* @__PURE__ */ t(
                  "input",
                  {
                    className: pe.editInput,
                    type: P.type === "number" ? "number" : P.type === "boolean" ? "checkbox" : "text",
                    checked: P.type === "boolean" ? !!Ye[P.property] : void 0,
                    value: P.type === "boolean" ? void 0 : String(Ye[P.property] ?? ""),
                    onChange: (ue) => H((ve) => ({
                      ...ve,
                      [P.property]: P.type === "boolean" ? ue.target.checked : ue.target.value
                    })),
                    "aria-label": `${P.title ?? P.property} (new)`
                  }
                ) }, A)),
                fe && /* @__PURE__ */ w("td", { className: pe.editCell, children: [
                  /* @__PURE__ */ t("button", { type: "button", className: pe.commandButton, onClick: () => zt(), children: "Save" }),
                  /* @__PURE__ */ t("button", { type: "button", className: pe.commandButton, onClick: lt, children: "Cancel" })
                ] })
              ] }),
              tt.map((A) => {
                if (A.type === "group" && A.group) {
                  const _t = je.has(A.group.key);
                  return /* @__PURE__ */ t("tr", { className: pe.groupRow, children: /* @__PURE__ */ t("td", { colSpan: bt.length + (fe ? 1 : 0), className: pe.groupCell, children: /* @__PURE__ */ w(
                    "button",
                    {
                      type: "button",
                      className: pe.groupToggle,
                      "aria-expanded": _t,
                      onClick: () => we(A.group.key),
                      children: [
                        /* @__PURE__ */ t("span", { "aria-hidden": "true", children: _t ? "▼" : "▶" }),
                        A.group.title,
                        ": ",
                        A.group.display,
                        " (",
                        A.group.count,
                        ")"
                      ]
                    }
                  ) }) }, `group-${A.group.key}`);
                }
                const P = A.row, ue = r(P), ve = (b ?? []).includes(ue), nt = Ze != null && Ze === String(ue);
                return /* @__PURE__ */ w(
                  "tr",
                  {
                    className: [
                      se || k !== "None" ? pe.clickable : "",
                      ve ? pe.selected : "",
                      nt ? pe.editRow : ""
                    ].filter(Boolean).join(" "),
                    "aria-selected": k !== "None" ? ve : void 0,
                    onClick: se || k !== "None" ? (_t) => {
                      Aa(_t.target) || (ie(P), ee(P));
                    } : void 0,
                    children: [
                      bt.map(({ key: _t, column: Te }) => /* @__PURE__ */ t(
                        "td",
                        {
                          className: zr(Te),
                          style: Te.frozen ? { left: G[_t] } : void 0,
                          children: nt && Te.property ? /* @__PURE__ */ t(
                            "input",
                            {
                              className: pe.editInput,
                              type: Te.type === "number" ? "number" : Te.type === "boolean" ? "checkbox" : "text",
                              checked: Te.type === "boolean" ? !!Ye[Te.property] : void 0,
                              value: Te.type === "boolean" ? void 0 : String(Ye[Te.property] ?? ""),
                              onChange: (rn) => H((kn) => ({
                                ...kn,
                                [Te.property]: Te.type === "boolean" ? rn.target.checked : rn.target.value
                              })),
                              "aria-label": `${Te.title ?? Te.property} (edit)`
                            }
                          ) : Dr(Te, P)
                        },
                        _t
                      )),
                      fe && /* @__PURE__ */ t("td", { className: pe.commandCell, children: nt ? /* @__PURE__ */ w(Oe, { children: [
                        /* @__PURE__ */ t("button", { type: "button", className: pe.commandButton, onClick: () => zt(P), children: "Save" }),
                        /* @__PURE__ */ t("button", { type: "button", className: pe.commandButton, onClick: lt, children: "Cancel" })
                      ] }) : /* @__PURE__ */ w(Oe, { children: [
                        U !== "None" && /* @__PURE__ */ t("button", { type: "button", className: pe.commandButton, onClick: () => Ee(P), children: "Edit" }),
                        N && /* @__PURE__ */ t("button", { type: "button", className: pe.commandButton, onClick: () => N(P), children: "Delete" })
                      ] }) })
                    ]
                  },
                  ue
                );
              })
            ] })
          ]
        }
      ),
      ke.items.length === 0 && !M && /* @__PURE__ */ t("div", { className: pe.empty, children: L }),
      M && /* @__PURE__ */ t("div", { className: pe.loading, role: "status", children: "Loading…" })
    ] }),
    nn && /* @__PURE__ */ t(
      Fn,
      {
        pageNumber: ke.pageNumber,
        pageSize: ke.pageSize,
        count: ke.total,
        pageSizeOptions: f,
        pageNumbersCount: C,
        showSummary: O,
        showPageSizeSelector: D,
        ariaLabel: xn ? "Pagination (bottom)" : "Pagination",
        onPageChange: W,
        onPageSizeChange: F
      }
    )
  ] });
}
const La = "_wrap_1ts67_1", Ra = "_grid_1ts67_7", Ba = "_stacked_1ts67_13", Pa = "_item_1ts67_19", qa = "_empty_1ts67_25", dn = {
  wrap: La,
  grid: Ra,
  stacked: Ba,
  item: Pa,
  empty: qa
};
function n0({
  data: e,
  pageSize: n = 10,
  pageSizeOptions: r,
  wrapItems: s = !1,
  itemTemplate: o,
  emptyMessage: l = "No records found",
  emptyTemplate: u,
  loadingTemplate: a,
  isLoading: i = !1,
  showPageSizeSelector: h = !0,
  className: v,
  ariaLabel: f = "Data list"
}) {
  const [C, $] = V(1), [O, D] = V(n), k = e.length, b = Math.max(1, Math.ceil(k / O)), m = Math.min(Math.max(1, C), b), p = Se(() => {
    const _ = (m - 1) * O;
    return e.slice(_, _ + O);
  }, [e, m, O]), z = s ? dn.grid : dn.stacked;
  return /* @__PURE__ */ w("div", { className: [dn.wrap, v].filter(Boolean).join(" "), "aria-label": f, children: [
    i && a != null ? a : k === 0 ? u ?? /* @__PURE__ */ t("div", { className: dn.empty, children: l }) : /* @__PURE__ */ t("div", { className: z, children: p.map((_, g) => /* @__PURE__ */ t("div", { className: dn.item, children: o ? o(_, g) : String(_) }, g)) }),
    /* @__PURE__ */ t(
      Fn,
      {
        pageNumber: m,
        pageSize: O,
        count: k,
        pageSizeOptions: r,
        showPageSizeSelector: h,
        onPageChange: $,
        onPageSizeChange: (_) => {
          D(_), $(1);
        }
      }
    )
  ] });
}
const Fa = "_label_11cq1_1", Ka = {
  label: Fa
}, r0 = qe(
  function({ className: n, children: r, ...s }, o) {
    return /* @__PURE__ */ t("label", { ref: o, className: [Ka.label, n].filter(Boolean).join(" "), ...s, children: r });
  }
), Ha = "_input_6qj37_1", Wa = "_invalid_6qj37_31", Ua = "_xs_6qj37_37", Va = "_sm_6qj37_43", Xa = "_md_6qj37_49", Ga = "_lg_6qj37_55", Ya = "_xl_6qj37_61", An = {
  input: Ha,
  invalid: Wa,
  xs: Ua,
  sm: Va,
  md: Xa,
  lg: Ga,
  xl: Ya
}, s0 = qe(function({ size: n = "md", invalid: r = !1, className: s, ...o }, l) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: l,
      className: [An.input, An[n], r ? An.invalid : null, s].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...o
    }
  );
}), Za = "_checkbox_fkb13_1", Ja = {
  checkbox: Za
}, o0 = qe(function({ className: n, ...r }, s) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: s,
      type: "checkbox",
      className: [Ja.checkbox, n].filter(Boolean).join(" "),
      ...r
    }
  );
}), Qa = {
  switch: "_switch_ew7ga_1"
}, el = qe(function({ className: n, ...r }, s) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: s,
      type: "checkbox",
      role: "switch",
      className: [Qa.switch, n].filter(Boolean).join(" "),
      ...r
    }
  );
}), tl = "_trigger_dbm3e_1", nl = "_tooltip_dbm3e_7", rl = "_top_dbm3e_34", sl = "_right_dbm3e_40", ol = "_bottom_dbm3e_46", al = "_left_dbm3e_52", ll = "_arrow_dbm3e_58", Sn = {
  trigger: tl,
  tooltip: nl,
  "se-tooltip-in": "_se-tooltip-in_dbm3e_1",
  top: rl,
  right: sl,
  bottom: ol,
  left: al,
  arrow: ll
};
function a0({
  content: e,
  children: n,
  placement: r = "top",
  delayMs: s = 300,
  className: o
}) {
  const l = Ue(), u = le(null), [a, i] = V(!1), h = () => {
    u.current = window.setTimeout(() => i(!0), s);
  }, v = () => {
    u.current !== null && (window.clearTimeout(u.current), u.current = null), i(!1);
  };
  De(() => {
    if (!a) return;
    const C = ($) => {
      $.key === "Escape" && v();
    };
    return window.addEventListener("keydown", C), () => window.removeEventListener("keydown", C);
  }, [a]);
  const f = Vn(n) ? gr(
    n,
    {
      "aria-describedby": [
        n.props["aria-describedby"],
        a ? l : null
      ].filter((C) => typeof C == "string").join(" ") || void 0
    }
  ) : n;
  return /* @__PURE__ */ w(
    "span",
    {
      className: [Sn.trigger, o].filter(Boolean).join(" "),
      onMouseEnter: h,
      onMouseLeave: v,
      onFocus: h,
      onBlur: v,
      children: [
        f,
        a && /* @__PURE__ */ w(
          "span",
          {
            role: "tooltip",
            id: l,
            className: [Sn.tooltip, Sn[r]].filter(Boolean).join(" "),
            children: [
              e,
              /* @__PURE__ */ t("span", { className: Sn.arrow, "aria-hidden": "true" })
            ]
          }
        )
      ]
    }
  );
}
const cl = "_dialog_1kllc_1", il = "_sm_1kllc_30", dl = "_md_1kllc_34", ul = "_lg_1kllc_38", fl = "_header_1kllc_42", _l = "_title_1kllc_51", pl = "_description_1kllc_58", hl = "_close_1kllc_65", ml = "_body_1kllc_84", gl = "_footer_1kllc_90", Rt = {
  dialog: cl,
  "se-dialog-in": "_se-dialog-in_1kllc_1",
  sm: il,
  md: dl,
  lg: ul,
  header: fl,
  title: _l,
  description: pl,
  close: hl,
  body: ml,
  footer: gl
};
function l0({
  open: e,
  onClose: n,
  title: r,
  description: s,
  children: o,
  footer: l,
  size: u = "md",
  className: a
}) {
  const i = le(null), h = Ue(), v = Ue();
  return De(() => {
    const f = i.current;
    f && (e && !f.open ? f.showModal() : !e && f.open && f.close());
  }, [e]), /* @__PURE__ */ w(
    "dialog",
    {
      ref: i,
      className: [Rt.dialog, Rt[u], a].filter(Boolean).join(" "),
      onClose: n,
      "aria-labelledby": r ? h : void 0,
      "aria-describedby": s ? v : void 0,
      children: [
        r && /* @__PURE__ */ w("header", { className: Rt.header, children: [
          /* @__PURE__ */ w("div", { children: [
            /* @__PURE__ */ t("h2", { id: h, className: Rt.title, children: r }),
            s && /* @__PURE__ */ t("p", { id: v, className: Rt.description, children: s })
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: Rt.close,
              onClick: n,
              "aria-label": "Close dialog",
              children: "×"
            }
          )
        ] }),
        o && /* @__PURE__ */ t("div", { className: Rt.body, children: o }),
        l && /* @__PURE__ */ t("footer", { className: Rt.footer, children: l })
      ]
    }
  );
}
const bl = "_viewport_15dkh_1", yl = "_topLeft_15dkh_13", vl = "_topRight_15dkh_20", xl = "_bottomLeft_15dkh_25", kl = "_toast_15dkh_30", wl = "_leaving_15dkh_61", $l = "_info_15dkh_77", Nl = "_success_15dkh_82", Sl = "_warning_15dkh_87", Dl = "_danger_15dkh_92", zl = "_content_15dkh_97", Cl = "_title_15dkh_102", Ol = "_description_15dkh_125", Il = "_dismiss_15dkh_132", Ml = "_actions_15dkh_151", jl = "_action_15dkh_151", El = "_cancel_15dkh_159", Tl = "_progress_15dkh_195", pt = {
  viewport: bl,
  topLeft: yl,
  topRight: vl,
  bottomLeft: xl,
  toast: kl,
  "se-toast-in": "_se-toast-in_15dkh_1",
  leaving: wl,
  "se-toast-out": "_se-toast-out_15dkh_1",
  info: $l,
  success: Nl,
  warning: Sl,
  danger: Dl,
  content: zl,
  title: Cl,
  description: Ol,
  dismiss: Il,
  actions: Ml,
  action: jl,
  cancel: El,
  progress: Tl,
  "se-toast-progress": "_se-toast-progress_15dkh_1"
}, $r = yr(null);
function c0() {
  const e = br($r);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const Al = 200, Ll = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function i0({
  children: e,
  durationMs: n = 4e3,
  position: r = "bottom-right",
  pauseOnHover: s = !0,
  className: o
}) {
  const [l, u] = V([]), [a, i] = V(!1), h = le([]), v = le(/* @__PURE__ */ new Map()), f = le(!1), C = le(0), $ = (I) => {
    f.current = I, i(I);
  }, O = q((I) => {
    const d = v.current.get(I);
    d && (window.clearTimeout(d.timeoutId), d.remaining = Math.max(0, d.remaining - (Date.now() - d.startedAt)));
  }, []), D = q((I) => {
    const d = v.current.get(I);
    d && (window.clearTimeout(d.timeoutId), v.current.delete(I));
  }, []), k = q(
    (I) => {
      D(I), u((d) => {
        const N = d.filter((M) => M.id !== I);
        return h.current = N, N;
      });
    },
    [D]
  ), b = q(
    (I) => {
      const d = h.current.find((N) => N.id === I);
      !d || d.leaving || (d.onAutoClose?.(), k(I));
    },
    [k]
  ), m = q(
    (I) => {
      const d = v.current.get(I);
      !d || d.remaining <= 0 || (d.startedAt = Date.now(), d.timeoutId = window.setTimeout(() => b(I), d.remaining));
    },
    [b]
  ), p = q(() => {
    f.current || v.current.forEach((I, d) => O(d)), $(!0);
  }, [O]), z = q(() => {
    v.current.forEach((I, d) => m(d)), $(!1);
  }, [m]);
  De(() => {
    if (!s) return;
    const I = () => {
      document.hidden ? p() : z();
    };
    return document.addEventListener("visibilitychange", I), () => document.removeEventListener("visibilitychange", I);
  }, [s, p, z]);
  const _ = q(
    (I) => {
      const d = h.current.find((N) => N.id === I);
      !d || d.leaving || (d.onDismiss?.(), u((N) => {
        const M = N.map((L) => L.id === I ? { ...L, leaving: !0 } : L);
        return h.current = M, M;
      }), window.setTimeout(() => k(I), Al));
    },
    [k]
  ), g = q(
    (I) => {
      if (I.durationMs <= 0) return;
      const d = {
        remaining: I.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      v.current.set(I.id, d), f.current || m(I.id);
    },
    [m]
  ), c = q(
    (I) => {
      const d = h.current.find((M) => M.id === I.id), N = {
        id: I.id ?? ++C.current,
        title: I.title,
        description: I.description,
        tone: I.tone ?? "info",
        durationMs: I.durationMs ?? n,
        action: I.action,
        cancel: I.cancel,
        dismissible: I.dismissible ?? !0,
        closeOnClick: I.closeOnClick ?? !1,
        showProgress: I.showProgress ?? !1,
        position: I.position ?? r,
        onDismiss: I.onDismiss,
        onAutoClose: I.onAutoClose
      };
      u((M) => {
        const L = d ? M.map((T) => T.id === N.id ? { ...N, leaving: !1 } : T) : [...M, N];
        return h.current = L, L;
      }), d && D(N.id), g(N);
    },
    [n, r, g, D]
  ), x = Se(() => ({ toast: c }), [c]), S = Se(
    () => Array.from(/* @__PURE__ */ new Set([r, ...l.map((I) => I.position)])),
    [r, l]
  ), U = s ? p : void 0, R = s ? z : void 0;
  return /* @__PURE__ */ w($r.Provider, { value: x, children: [
    e,
    S.map((I) => /* @__PURE__ */ t(
      "div",
      {
        className: [
          pt.viewport,
          pt[Ll[I]],
          o
        ].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: U,
        onMouseLeave: R,
        children: l.filter((d) => d.position === I).map((d) => /* @__PURE__ */ w(
          "div",
          {
            role: d.tone === "danger" ? "alert" : "status",
            "data-paused": a ? "true" : "false",
            "data-clickable": d.closeOnClick ? "true" : "false",
            className: [
              pt.toast,
              pt[d.tone],
              d.leaving ? pt.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: d.closeOnClick ? () => _(d.id) : void 0,
            children: [
              /* @__PURE__ */ w("div", { className: pt.content, children: [
                /* @__PURE__ */ t("div", { className: pt.title, children: d.title }),
                d.description && /* @__PURE__ */ t("div", { className: pt.description, children: d.description }),
                (d.action || d.cancel) && /* @__PURE__ */ w("div", { className: pt.actions, children: [
                  d.action && /* @__PURE__ */ t(
                    "button",
                    {
                      type: "button",
                      className: pt.action,
                      onClick: () => {
                        d.action?.onClick?.(), _(d.id);
                      },
                      children: d.action.label
                    }
                  ),
                  d.cancel && /* @__PURE__ */ t(
                    "button",
                    {
                      type: "button",
                      className: pt.cancel,
                      onClick: () => {
                        d.cancel?.onClick?.(), _(d.id);
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
                  className: pt.dismiss,
                  onClick: () => _(d.id),
                  "aria-label": "Dismiss notification",
                  children: "×"
                }
              ),
              d.showProgress && d.durationMs > 0 && /* @__PURE__ */ t(
                "div",
                {
                  className: pt.progress,
                  style: { animationDuration: `${d.durationMs}ms` }
                }
              )
            ]
          },
          d.id
        ))
      },
      I
    ))
  ] });
}
const Rl = "_alert_1gxt0_1", Bl = "_xs_1gxt0_22", Pl = "_sm_1gxt0_32", ql = "_lg_1gxt0_42", Fl = "_xl_1gxt0_52", Kl = "_info_1gxt0_63", Hl = "_success_1gxt0_68", Wl = "_warning_1gxt0_73", Ul = "_danger_1gxt0_78", Vl = "_soft_1gxt0_85", Xl = "_outline_1gxt0_92", Gl = "_solid_1gxt0_100", Yl = "_icon_1gxt0_114", Zl = "_content_1gxt0_120", Jl = "_title_1gxt0_125", Ql = "_body_1gxt0_131", ec = "_dismiss_1gxt0_137", Ct = {
  alert: Rl,
  xs: Bl,
  sm: Pl,
  lg: ql,
  xl: Fl,
  info: Kl,
  success: Hl,
  warning: Wl,
  danger: Ul,
  soft: Vl,
  outline: Xl,
  solid: Gl,
  icon: Yl,
  content: Zl,
  title: Jl,
  body: Ql,
  dismiss: ec
};
function d0({
  tone: e = "info",
  variant: n = "soft",
  size: r = "md",
  title: s,
  icon: o,
  children: l,
  dismissible: u = !1,
  onDismiss: a,
  className: i
}) {
  const [h, v] = V(!1);
  if (h)
    return null;
  const f = () => {
    v(!0), a?.();
  };
  return /* @__PURE__ */ w(
    "div",
    {
      role: "alert",
      className: [Ct.alert, Ct[e], Ct[n], Ct[r], i].filter(Boolean).join(" "),
      children: [
        o != null && /* @__PURE__ */ t("span", { className: Ct.icon, "aria-hidden": "true", children: o }),
        /* @__PURE__ */ w("div", { className: Ct.content, children: [
          s && /* @__PURE__ */ t("div", { className: Ct.title, children: s }),
          l && /* @__PURE__ */ t("div", { className: Ct.body, children: l })
        ] }),
        u && /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: Ct.dismiss,
            onClick: f,
            "aria-label": "Dismiss alert",
            children: "×"
          }
        )
      ]
    }
  );
}
const tc = "_skeleton_f6f3j_1", nc = "_text_f6f3j_35", rc = "_circle_f6f3j_40", sc = "_rect_f6f3j_44", rr = {
  skeleton: tc,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_f6f3j_1",
  text: nc,
  circle: rc,
  rect: sc
};
function u0({
  variant: e = "text",
  width: n,
  height: r,
  className: s
}) {
  const o = {};
  return n !== void 0 && (o.width = typeof n == "number" ? `${n}px` : n), r !== void 0 && (o.height = typeof r == "number" ? `${r}px` : r), /* @__PURE__ */ t(
    "span",
    {
      "aria-hidden": "true",
      className: [rr.skeleton, rr[e], s].filter(Boolean).join(" "),
      style: o
    }
  );
}
const oc = "_row_15qsh_1", ac = "_gapXs_15qsh_7", lc = "_gapSm_15qsh_11", cc = "_gapMd_15qsh_15", ic = "_gapLg_15qsh_19", dc = "_gapXl_15qsh_23", uc = "_start_15qsh_27", fc = "_center_15qsh_31", _c = "_end_15qsh_35", pc = "_stretch_15qsh_39", hc = "_baseline_15qsh_43", mc = "_noWrap_15qsh_99", gc = "_wrapReverse_15qsh_103", bc = "_gapRowXs_15qsh_107", yc = "_gapRowSm_15qsh_111", vc = "_gapRowMd_15qsh_115", xc = "_gapRowLg_15qsh_119", kc = "_gapRowXl_15qsh_123", Xt = {
  row: oc,
  gapXs: ac,
  gapSm: lc,
  gapMd: cc,
  gapLg: ic,
  gapXl: dc,
  start: uc,
  center: fc,
  end: _c,
  stretch: pc,
  baseline: hc,
  "justify-start": "_justify-start_15qsh_47",
  "justify-center": "_justify-center_15qsh_51",
  "justify-end": "_justify-end_15qsh_55",
  "justify-between": "_justify-between_15qsh_59",
  "justify-around": "_justify-around_15qsh_63",
  "justify-evenly": "_justify-evenly_15qsh_67",
  "justify-normal": "_justify-normal_15qsh_71",
  "justify-left": "_justify-left_15qsh_75",
  "justify-right": "_justify-right_15qsh_79",
  "justify-stretch": "_justify-stretch_15qsh_83",
  "justify-space-between": "_justify-space-between_15qsh_87",
  "justify-space-around": "_justify-space-around_15qsh_91",
  "justify-space-evenly": "_justify-space-evenly_15qsh_95",
  noWrap: mc,
  wrapReverse: gc,
  gapRowXs: bc,
  gapRowSm: yc,
  gapRowMd: vc,
  gapRowLg: xc,
  gapRowXl: kc
}, wc = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
}, $c = {
  xs: "gapRowXs",
  sm: "gapRowSm",
  md: "gapRowMd",
  lg: "gapRowLg",
  xl: "gapRowXl"
};
function Nc(e) {
  return typeof e != "string" ? null : wc[e] ?? null;
}
function Sc(e) {
  return typeof e != "string" ? null : $c[e] ?? null;
}
function sr(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function f0({
  gap: e,
  rowGap: n,
  align: r = "stretch",
  justify: s = "start",
  wrap: o = !0,
  className: l,
  style: u,
  ...a
}) {
  const i = Nc(e), h = Sc(n), v = {
    ...e != null && !i ? { gap: typeof e == "number" ? `${e}px` : e } : {},
    ...n != null && !h ? { rowGap: typeof n == "number" ? `${n}px` : n } : {},
    ...u
  };
  return /* @__PURE__ */ t(
    "div",
    {
      className: [
        Xt.row,
        Xt[r],
        Xt[`justify-${s}`],
        sr(o) != null ? Xt[sr(o)] : null,
        i ? Xt[i] : null,
        h ? Xt[h] : null,
        l
      ].filter(Boolean).join(" "),
      style: v,
      ...a
    }
  );
}
const Dc = "_column_2ch3a_1", zc = "_Size1_2ch3a_6", Cc = "_Size2_2ch3a_7", Oc = "_Size3_2ch3a_8", Ic = "_Size4_2ch3a_9", Mc = "_Size5_2ch3a_10", jc = "_Size6_2ch3a_11", Ec = "_Size7_2ch3a_12", Tc = "_Size8_2ch3a_13", Ac = "_Size9_2ch3a_14", Lc = "_Size10_2ch3a_15", Rc = "_Size11_2ch3a_16", Bc = "_Size12_2ch3a_17", Pc = "_Offset1_2ch3a_18", qc = "_Offset2_2ch3a_19", Fc = "_Offset3_2ch3a_20", Kc = "_Offset4_2ch3a_21", Hc = "_Offset5_2ch3a_22", Wc = "_Offset6_2ch3a_23", Uc = "_Offset7_2ch3a_24", Vc = "_Offset8_2ch3a_25", Xc = "_Offset9_2ch3a_26", Gc = "_Offset10_2ch3a_27", Yc = "_Offset11_2ch3a_28", Zc = "_smSize1_2ch3a_31", Jc = "_smSize2_2ch3a_32", Qc = "_smSize3_2ch3a_33", ei = "_smSize4_2ch3a_34", ti = "_smSize5_2ch3a_35", ni = "_smSize6_2ch3a_36", ri = "_smSize7_2ch3a_37", si = "_smSize8_2ch3a_38", oi = "_smSize9_2ch3a_39", ai = "_smSize10_2ch3a_40", li = "_smSize11_2ch3a_41", ci = "_smSize12_2ch3a_42", ii = "_smOffset1_2ch3a_43", di = "_smOffset2_2ch3a_44", ui = "_smOffset3_2ch3a_45", fi = "_smOffset4_2ch3a_46", _i = "_smOffset5_2ch3a_47", pi = "_smOffset6_2ch3a_48", hi = "_smOffset7_2ch3a_49", mi = "_smOffset8_2ch3a_50", gi = "_smOffset9_2ch3a_51", bi = "_smOffset10_2ch3a_52", yi = "_smOffset11_2ch3a_53", vi = "_mdSize1_2ch3a_57", xi = "_mdSize2_2ch3a_58", ki = "_mdSize3_2ch3a_59", wi = "_mdSize4_2ch3a_60", $i = "_mdSize5_2ch3a_61", Ni = "_mdSize6_2ch3a_62", Si = "_mdSize7_2ch3a_63", Di = "_mdSize8_2ch3a_64", zi = "_mdSize9_2ch3a_65", Ci = "_mdSize10_2ch3a_66", Oi = "_mdSize11_2ch3a_67", Ii = "_mdSize12_2ch3a_68", Mi = "_mdOffset1_2ch3a_69", ji = "_mdOffset2_2ch3a_70", Ei = "_mdOffset3_2ch3a_71", Ti = "_mdOffset4_2ch3a_72", Ai = "_mdOffset5_2ch3a_73", Li = "_mdOffset6_2ch3a_74", Ri = "_mdOffset7_2ch3a_75", Bi = "_mdOffset8_2ch3a_76", Pi = "_mdOffset9_2ch3a_77", qi = "_mdOffset10_2ch3a_78", Fi = "_mdOffset11_2ch3a_79", Ki = "_lgSize1_2ch3a_83", Hi = "_lgSize2_2ch3a_84", Wi = "_lgSize3_2ch3a_85", Ui = "_lgSize4_2ch3a_86", Vi = "_lgSize5_2ch3a_87", Xi = "_lgSize6_2ch3a_88", Gi = "_lgSize7_2ch3a_89", Yi = "_lgSize8_2ch3a_90", Zi = "_lgSize9_2ch3a_91", Ji = "_lgSize10_2ch3a_92", Qi = "_lgSize11_2ch3a_93", ed = "_lgSize12_2ch3a_94", td = "_lgOffset1_2ch3a_95", nd = "_lgOffset2_2ch3a_96", rd = "_lgOffset3_2ch3a_97", sd = "_lgOffset4_2ch3a_98", od = "_lgOffset5_2ch3a_99", ad = "_lgOffset6_2ch3a_100", ld = "_lgOffset7_2ch3a_101", cd = "_lgOffset8_2ch3a_102", id = "_lgOffset9_2ch3a_103", dd = "_lgOffset10_2ch3a_104", ud = "_lgOffset11_2ch3a_105", fd = "_xlSize1_2ch3a_109", _d = "_xlSize2_2ch3a_110", pd = "_xlSize3_2ch3a_111", hd = "_xlSize4_2ch3a_112", md = "_xlSize5_2ch3a_113", gd = "_xlSize6_2ch3a_114", bd = "_xlSize7_2ch3a_115", yd = "_xlSize8_2ch3a_116", vd = "_xlSize9_2ch3a_117", xd = "_xlSize10_2ch3a_118", kd = "_xlSize11_2ch3a_119", wd = "_xlSize12_2ch3a_120", $d = "_xlOffset1_2ch3a_121", Nd = "_xlOffset2_2ch3a_122", Sd = "_xlOffset3_2ch3a_123", Dd = "_xlOffset4_2ch3a_124", zd = "_xlOffset5_2ch3a_125", Cd = "_xlOffset6_2ch3a_126", Od = "_xlOffset7_2ch3a_127", Id = "_xlOffset8_2ch3a_128", Md = "_xlOffset9_2ch3a_129", jd = "_xlOffset10_2ch3a_130", Ed = "_xlOffset11_2ch3a_131", Td = "_xxlSize1_2ch3a_136", Ad = "_xxlSize2_2ch3a_137", Ld = "_xxlSize3_2ch3a_138", Rd = "_xxlSize4_2ch3a_139", Bd = "_xxlSize5_2ch3a_140", Pd = "_xxlSize6_2ch3a_141", qd = "_xxlSize7_2ch3a_142", Fd = "_xxlSize8_2ch3a_143", Kd = "_xxlSize9_2ch3a_144", Hd = "_xxlSize10_2ch3a_145", Wd = "_xxlSize11_2ch3a_146", Ud = "_xxlSize12_2ch3a_147", Vd = "_xxlOffset1_2ch3a_148", Xd = "_xxlOffset2_2ch3a_149", Gd = "_xxlOffset3_2ch3a_150", Yd = "_xxlOffset4_2ch3a_151", Zd = "_xxlOffset5_2ch3a_152", Jd = "_xxlOffset6_2ch3a_153", Qd = "_xxlOffset7_2ch3a_154", eu = "_xxlOffset8_2ch3a_155", tu = "_xxlOffset9_2ch3a_156", nu = "_xxlOffset10_2ch3a_157", ru = "_xxlOffset11_2ch3a_158", su = "_xxlOrderFirst_2ch3a_159", ou = "_xxlOrderLast_2ch3a_160", au = "_orderFirst_2ch3a_163", lu = "_orderLast_2ch3a_164", cu = "_smOrderFirst_2ch3a_167", iu = "_smOrderLast_2ch3a_168", du = "_mdOrderFirst_2ch3a_172", uu = "_mdOrderLast_2ch3a_173", fu = "_lgOrderFirst_2ch3a_177", _u = "_lgOrderLast_2ch3a_178", pu = "_xlOrderFirst_2ch3a_182", hu = "_xlOrderLast_2ch3a_183", un = {
  column: Dc,
  Size1: zc,
  Size2: Cc,
  Size3: Oc,
  Size4: Ic,
  Size5: Mc,
  Size6: jc,
  Size7: Ec,
  Size8: Tc,
  Size9: Ac,
  Size10: Lc,
  Size11: Rc,
  Size12: Bc,
  Offset1: Pc,
  Offset2: qc,
  Offset3: Fc,
  Offset4: Kc,
  Offset5: Hc,
  Offset6: Wc,
  Offset7: Uc,
  Offset8: Vc,
  Offset9: Xc,
  Offset10: Gc,
  Offset11: Yc,
  smSize1: Zc,
  smSize2: Jc,
  smSize3: Qc,
  smSize4: ei,
  smSize5: ti,
  smSize6: ni,
  smSize7: ri,
  smSize8: si,
  smSize9: oi,
  smSize10: ai,
  smSize11: li,
  smSize12: ci,
  smOffset1: ii,
  smOffset2: di,
  smOffset3: ui,
  smOffset4: fi,
  smOffset5: _i,
  smOffset6: pi,
  smOffset7: hi,
  smOffset8: mi,
  smOffset9: gi,
  smOffset10: bi,
  smOffset11: yi,
  mdSize1: vi,
  mdSize2: xi,
  mdSize3: ki,
  mdSize4: wi,
  mdSize5: $i,
  mdSize6: Ni,
  mdSize7: Si,
  mdSize8: Di,
  mdSize9: zi,
  mdSize10: Ci,
  mdSize11: Oi,
  mdSize12: Ii,
  mdOffset1: Mi,
  mdOffset2: ji,
  mdOffset3: Ei,
  mdOffset4: Ti,
  mdOffset5: Ai,
  mdOffset6: Li,
  mdOffset7: Ri,
  mdOffset8: Bi,
  mdOffset9: Pi,
  mdOffset10: qi,
  mdOffset11: Fi,
  lgSize1: Ki,
  lgSize2: Hi,
  lgSize3: Wi,
  lgSize4: Ui,
  lgSize5: Vi,
  lgSize6: Xi,
  lgSize7: Gi,
  lgSize8: Yi,
  lgSize9: Zi,
  lgSize10: Ji,
  lgSize11: Qi,
  lgSize12: ed,
  lgOffset1: td,
  lgOffset2: nd,
  lgOffset3: rd,
  lgOffset4: sd,
  lgOffset5: od,
  lgOffset6: ad,
  lgOffset7: ld,
  lgOffset8: cd,
  lgOffset9: id,
  lgOffset10: dd,
  lgOffset11: ud,
  xlSize1: fd,
  xlSize2: _d,
  xlSize3: pd,
  xlSize4: hd,
  xlSize5: md,
  xlSize6: gd,
  xlSize7: bd,
  xlSize8: yd,
  xlSize9: vd,
  xlSize10: xd,
  xlSize11: kd,
  xlSize12: wd,
  xlOffset1: $d,
  xlOffset2: Nd,
  xlOffset3: Sd,
  xlOffset4: Dd,
  xlOffset5: zd,
  xlOffset6: Cd,
  xlOffset7: Od,
  xlOffset8: Id,
  xlOffset9: Md,
  xlOffset10: jd,
  xlOffset11: Ed,
  xxlSize1: Td,
  xxlSize2: Ad,
  xxlSize3: Ld,
  xxlSize4: Rd,
  xxlSize5: Bd,
  xxlSize6: Pd,
  xxlSize7: qd,
  xxlSize8: Fd,
  xxlSize9: Kd,
  xxlSize10: Hd,
  xxlSize11: Wd,
  xxlSize12: Ud,
  xxlOffset1: Vd,
  xxlOffset2: Xd,
  xxlOffset3: Gd,
  xxlOffset4: Yd,
  xxlOffset5: Zd,
  xxlOffset6: Jd,
  xxlOffset7: Qd,
  xxlOffset8: eu,
  xxlOffset9: tu,
  xxlOffset10: nu,
  xxlOffset11: ru,
  xxlOrderFirst: su,
  xxlOrderLast: ou,
  orderFirst: au,
  orderLast: lu,
  smOrderFirst: cu,
  smOrderLast: iu,
  mdOrderFirst: du,
  mdOrderLast: uu,
  lgOrderFirst: fu,
  lgOrderLast: _u,
  xlOrderFirst: pu,
  xlOrderLast: hu
}, mu = [
  ["", "size", "offset", "order"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xxl", "sizeXxl", "offsetXxl", "orderXxl"]
], gu = {
  first: "orderFirst",
  last: "orderLast"
};
function bu(e) {
  return typeof e == "number" ? { order: e } : {};
}
function _0({ className: e, style: n, ...r }) {
  const s = [un.column], o = { ...n };
  for (const [x, S, U, R] of mu) {
    const I = r[S], d = r[U], N = r[R];
    if (I != null && s.push(un[`${x}Size${I}`]), d != null && d > 0 && s.push(un[`${x}Offset${d}`]), N === "first" || N === "last") {
      const M = `${x}${gu[N]}`;
      un[M] && s.push(un[M]);
    } else N != null && Object.assign(o, bu(N));
  }
  const {
    size: l,
    offset: u,
    sizeSm: a,
    offsetSm: i,
    sizeMd: h,
    offsetMd: v,
    sizeLg: f,
    offsetLg: C,
    sizeXl: $,
    offsetXl: O,
    sizeXxl: D,
    offsetXxl: k,
    order: b,
    orderSm: m,
    orderMd: p,
    orderLg: z,
    orderXl: _,
    orderXxl: g,
    ...c
  } = r;
  return /* @__PURE__ */ t("div", { className: [...s, e].filter(Boolean).join(" "), style: o, ...c });
}
const yu = "_stack_afbz7_1", vu = "_gapXs_afbz7_29", xu = "_gapSm_afbz7_33", ku = "_gapMd_afbz7_37", wu = "_gapLg_afbz7_41", $u = "_gapXl_afbz7_45", Gt = {
  stack: yu,
  "dir-row": "_dir-row_afbz7_5",
  "dir-row-reverse": "_dir-row-reverse_afbz7_9",
  "dir-column": "_dir-column_afbz7_13",
  "dir-column-reverse": "_dir-column-reverse_afbz7_17",
  "wrap-nowrap": "_wrap-nowrap_afbz7_21",
  "wrap-wrap-reverse": "_wrap-wrap-reverse_afbz7_25",
  gapXs: vu,
  gapSm: xu,
  gapMd: ku,
  gapLg: wu,
  gapXl: $u,
  "align-start": "_align-start_afbz7_49",
  "align-center": "_align-center_afbz7_53",
  "align-end": "_align-end_afbz7_57",
  "align-stretch": "_align-stretch_afbz7_61",
  "align-baseline": "_align-baseline_afbz7_65",
  "align-normal": "_align-normal_afbz7_69",
  "justify-start": "_justify-start_afbz7_73",
  "justify-center": "_justify-center_afbz7_77",
  "justify-end": "_justify-end_afbz7_81",
  "justify-between": "_justify-between_afbz7_85",
  "justify-around": "_justify-around_afbz7_89",
  "justify-evenly": "_justify-evenly_afbz7_93",
  "justify-normal": "_justify-normal_afbz7_97",
  "justify-space-between": "_justify-space-between_afbz7_104",
  "justify-space-around": "_justify-space-around_afbz7_108",
  "justify-space-evenly": "_justify-space-evenly_afbz7_112"
}, Nu = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function Su(e) {
  return typeof e != "string" ? null : Nu[e] ?? null;
}
function or(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function p0({
  orientation: e = "vertical",
  reverse: n = !1,
  wrap: r = !0,
  gap: s = "sm",
  align: o,
  justify: l,
  className: u,
  style: a,
  ...i
}) {
  const h = Su(s), v = e === "horizontal" ? n ? "row-reverse" : "row" : n ? "column-reverse" : "column", f = {
    ...s != null && !h ? { gap: typeof s == "number" ? `${s}px` : s } : {},
    ...a
  };
  return /* @__PURE__ */ t(
    "div",
    {
      className: [
        Gt.stack,
        Gt[`dir-${v}`],
        or(r) !== "wrap" ? Gt[`wrap-${or(r)}`] : null,
        o != null ? Gt[`align-${o}`] : null,
        l != null ? Gt[`justify-${l}`] : null,
        h ? Gt[h] : null,
        u
      ].filter(Boolean).join(" "),
      style: f,
      ...i
    }
  );
}
const Du = "_layout_1pcye_1", zu = "_row_1pcye_7", ar = {
  layout: Du,
  row: zu
}, Cu = "_footer_khrs9_1", Ou = {
  footer: Cu
};
function Iu({ className: e, children: n, ...r }) {
  return /* @__PURE__ */ t("footer", { className: [Ou.footer, e].filter(Boolean).join(" "), ...r, children: n });
}
const Mu = "_header_6x0qv_1", ju = {
  header: Mu
};
function Eu({ className: e, children: n, ...r }) {
  return /* @__PURE__ */ t("header", { className: [ju.header, e].filter(Boolean).join(" "), ...r, children: n });
}
const Tu = "_sidebar_1tgxt_1", Au = "_left_1tgxt_9", Lu = "_right_1tgxt_13", Ru = "_collapsed_1tgxt_17", Bu = "_responsive_1tgxt_25", Pu = "_overlay_1tgxt_33", qu = "_mask_1tgxt_53", Kt = {
  sidebar: Tu,
  left: Au,
  right: Lu,
  collapsed: Ru,
  responsive: Bu,
  overlay: Pu,
  mask: qu
};
function Fu({
  position: e = "left",
  expanded: n = !0,
  responsive: r = !1,
  overlay: s = !1,
  onClose: o,
  className: l,
  children: u,
  ...a
}) {
  return De(() => {
    if (!s || !n || o == null) return;
    const i = (h) => {
      h.key === "Escape" && o();
    };
    return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
  }, [s, n, o]), /* @__PURE__ */ w(Oe, { children: [
    s && n ? /* @__PURE__ */ t("div", { className: `${Kt.mask} se-layout-mask`, "aria-hidden": "true", onClick: o }) : null,
    /* @__PURE__ */ t(
      "aside",
      {
        className: [
          Kt.sidebar,
          e === "right" ? Kt.right : Kt.left,
          n ? null : Kt.collapsed,
          r ? Kt.responsive : null,
          s ? [Kt.overlay, "se-sidebar--overlay"] : null,
          l
        ].flat().filter(Boolean).join(" "),
        ...a,
        children: u
      }
    )
  ] });
}
function h0({ className: e, children: n, ...r }) {
  const s = [], o = [], l = [], u = [], a = [];
  return Cr.forEach(n, (i) => {
    if (!Vn(i)) {
      l.push(i);
      return;
    }
    i.type === Eu ? s.push(i) : i.type === Iu ? o.push(i) : i.type === Fu ? (i.props.position === "right" ? a : u).push(i) : l.push(i);
  }), /* @__PURE__ */ w("div", { className: [ar.layout, e].filter(Boolean).join(" "), ...r, children: [
    s,
    /* @__PURE__ */ w("div", { className: ar.row, children: [
      u,
      l,
      a
    ] }),
    o
  ] });
}
const Ku = "_body_1i4wl_1", Hu = {
  body: Ku
};
function m0({ as: e = "main", className: n, children: r, ...s }) {
  return /* @__PURE__ */ t(e, { className: [Hu.body, n].filter(Boolean).join(" "), ...s, children: r });
}
const Wu = "_track_1eazj_1", Uu = "_bar_1eazj_31", Vu = "_primary_1eazj_39", Xu = "_success_1eazj_43", Gu = "_warning_1eazj_47", Yu = "_danger_1eazj_51", Zu = "_indeterminate_1eazj_55", Ju = "_circular_1eazj_69", Qu = "_fill_1eazj_109", xt = {
  track: Wu,
  "linear-xs": "_linear-xs_1eazj_11",
  "linear-sm": "_linear-sm_1eazj_15",
  "linear-md": "_linear-md_1eazj_19",
  "linear-lg": "_linear-lg_1eazj_23",
  "linear-xl": "_linear-xl_1eazj_27",
  bar: Uu,
  primary: Vu,
  success: Xu,
  warning: Gu,
  danger: Yu,
  indeterminate: Zu,
  "se-progress-slide": "_se-progress-slide_1eazj_1",
  circular: Ju,
  "circular-xs": "_circular-xs_1eazj_75",
  "circular-sm": "_circular-sm_1eazj_80",
  "circular-md": "_circular-md_1eazj_85",
  "circular-lg": "_circular-lg_1eazj_90",
  "circular-xl": "_circular-xl_1eazj_95",
  fill: Qu,
  "se-progress-spin": "_se-progress-spin_1eazj_1"
};
function g0({
  value: e = 0,
  max: n = 100,
  tone: r = "primary",
  indeterminate: s = !1,
  variant: o = "linear",
  size: l = "md",
  className: u,
  ...a
}) {
  const i = n > 0 ? Math.min(n, Math.max(0, e)) : 0, h = n > 0 ? i / n * 100 : 0;
  if (o === "circular") {
    const v = typeof l == "string", f = 2, C = 10.5, $ = 2 * Math.PI * C, O = $ * (s ? 0.75 : 1), D = s ? 0 : $ * (1 - h / 100);
    return /* @__PURE__ */ w(
      "svg",
      {
        width: v ? void 0 : l,
        height: v ? void 0 : l,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": a["aria-label"],
        "aria-labelledby": a["aria-labelledby"],
        "aria-valuenow": s ? void 0 : Math.round(i),
        "aria-valuemin": 0,
        "aria-valuemax": n,
        id: a.id,
        style: a.style,
        className: [
          xt.circular,
          xt[r],
          v ? xt[`circular-${l}`] : null,
          s ? xt.indeterminate : null,
          u
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ t("circle", { className: xt.track, cx: 12, cy: 12, r: C, strokeWidth: f }),
          /* @__PURE__ */ t(
            "circle",
            {
              className: xt.fill,
              cx: 12,
              cy: 12,
              r: C,
              strokeWidth: f,
              strokeDasharray: `${O} ${$}`,
              strokeDashoffset: D
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
      "aria-valuenow": s ? void 0 : Math.round(i),
      "aria-valuemin": 0,
      "aria-valuemax": n,
      className: [
        xt.track,
        xt[r],
        typeof l == "string" ? xt[`linear-${l}`] : null,
        s ? xt.indeterminate : null,
        u
      ].filter(Boolean).join(" "),
      ...a,
      children: /* @__PURE__ */ t(
        "div",
        {
          className: xt.bar,
          style: s ? void 0 : { width: `${h}%` }
        }
      )
    }
  );
}
const ef = "_wrapper_1mukg_1", tf = {
  wrapper: ef
};
function b0({
  defaultTheme: e = "light",
  onChange: n,
  label: r = "Dark mode",
  className: s
}) {
  const [o, l] = V(() => (typeof document < "u" ? document.documentElement.dataset.theme : void 0) === "dark" ? !0 : e === "dark");
  De(() => {
    document.documentElement.dataset.theme = o ? "dark" : "light";
  }, []);
  const u = (a) => {
    const i = a.target.checked;
    l(i), document.documentElement.dataset.theme = i ? "dark" : "light", n?.(i ? "dark" : "light");
  };
  return /* @__PURE__ */ w("label", { className: [tf.wrapper, s].filter(Boolean).join(" "), children: [
    r,
    /* @__PURE__ */ t(el, { checked: o, onChange: u })
  ] });
}
const nf = "_avatar_101wb_1", rf = "_xs_101wb_12", sf = "_sm_101wb_18", of = "_md_101wb_24", af = "_lg_101wb_30", lf = "_xl_101wb_36", cf = "_initials_101wb_42", df = "_image_101wb_57", uf = "_status_101wb_64", ff = "_online_101wb_84", _f = "_offline_101wb_88", pf = "_away_101wb_92", Yt = {
  avatar: nf,
  xs: rf,
  sm: sf,
  md: of,
  lg: af,
  xl: lf,
  initials: cf,
  image: df,
  status: uf,
  online: ff,
  offline: _f,
  away: pf
}, Mn = [
  "var(--dt-color-palette-0)",
  "var(--dt-color-palette-1)",
  "var(--dt-color-palette-2)",
  "var(--dt-color-palette-3)",
  "var(--dt-color-palette-4)",
  "var(--dt-color-palette-5)"
];
function hf(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((n) => n[0]?.toUpperCase() ?? "").join("");
}
function mf(e) {
  let n = 0;
  for (let r = 0; r < e.length; r += 1)
    n = n * 31 + e.charCodeAt(r) >>> 0;
  return Mn[n % Mn.length] ?? Mn[0];
}
function y0({
  name: e,
  src: n,
  alt: r,
  size: s = "md",
  status: o,
  className: l
}) {
  const u = Se(() => e ? hf(e) : "?", [e]), a = Se(() => e ? mf(e) : Mn[0], [e]), i = n ? /* @__PURE__ */ t("img", { className: Yt.image, src: n, alt: r ?? e ?? "" }) : /* @__PURE__ */ t("span", { "aria-hidden": "true", className: Yt.initials, style: { background: a }, children: u });
  return /* @__PURE__ */ w(
    "span",
    {
      className: [
        Yt.avatar,
        Yt[s],
        o ? Yt[o] : null,
        l
      ].filter(Boolean).join(" "),
      role: "img",
      "aria-label": r ?? e ?? "avatar",
      children: [
        i,
        o && /* @__PURE__ */ t("span", { className: Yt.status, "aria-hidden": "true" })
      ]
    }
  );
}
const gf = "_root_9j3lx_1", bf = "_left_9j3lx_6", yf = "_right_9j3lx_7", vf = "_panel_9j3lx_12", xf = "_bottom_9j3lx_20", kf = "_tabList_9j3lx_24", wf = "_underline_9j3lx_53", $f = "_pills_9j3lx_72", Nf = "_tab_9j3lx_24", Sf = "_active_9j3lx_113", Df = "_disabled_9j3lx_139", Ot = {
  root: gf,
  left: bf,
  right: yf,
  panel: vf,
  bottom: xf,
  tabList: kf,
  underline: wf,
  pills: $f,
  tab: Nf,
  active: Sf,
  disabled: Df
};
function v0({
  items: e,
  value: n,
  defaultValue: r,
  onChange: s,
  variant: o = "underline",
  position: l = "top",
  className: u
}) {
  const a = Ue(), i = le(null), [h, v] = V(r ?? e[0]?.key ?? ""), f = n ?? h, C = l === "left" || l === "right", $ = (k) => {
    v(k), s?.(k);
  }, O = (k) => {
    const b = e.filter((z) => !z.disabled), m = b.findIndex((z) => z.key === f);
    let p = -1;
    k.key === "ArrowRight" || C && k.key === "ArrowDown" ? p = (m + 1) % b.length : k.key === "ArrowLeft" || C && k.key === "ArrowUp" ? p = (m - 1 + b.length) % b.length : k.key === "Home" ? p = 0 : k.key === "End" && (p = b.length - 1), p >= 0 && (k.preventDefault(), i.current?.querySelector(
      `[data-tab-key="${CSS.escape(b[p]?.key ?? "")}"]`
    )?.focus(), $(b[p]?.key ?? ""));
  }, D = e.find((k) => k.key === f);
  return /* @__PURE__ */ w("div", { className: [Ot.root, Ot[l], u].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ t(
      "div",
      {
        ref: i,
        role: "tablist",
        className: [Ot.tabList, Ot[o], Ot[l]].filter(Boolean).join(" "),
        onKeyDown: O,
        children: e.map((k) => {
          const b = k.key === f;
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              role: "tab",
              id: `${a}-tab-${k.key}`,
              "data-tab-key": k.key,
              "aria-selected": b,
              "aria-controls": `${a}-panel-${k.key}`,
              tabIndex: b ? 0 : -1,
              disabled: k.disabled,
              className: [
                Ot.tab,
                b ? Ot.active : null,
                k.disabled ? Ot.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => $(k.key),
              children: k.label
            },
            k.key
          );
        })
      }
    ),
    D && /* @__PURE__ */ t(
      "div",
      {
        role: "tabpanel",
        id: `${a}-panel-${D.key}`,
        "aria-labelledby": `${a}-tab-${D.key}`,
        className: Ot.panel,
        children: D.content
      }
    )
  ] });
}
const zf = "_root_ejeux_1", Cf = "_item_ejeux_9", Of = "_heading_ejeux_13", If = "_trigger_ejeux_17", Mf = "_disabled_ejeux_34", jf = "_title_ejeux_48", Ef = "_chevron_ejeux_52", Tf = "_open_ejeux_59", Af = "_content_ejeux_63", It = {
  root: zf,
  item: Cf,
  heading: Of,
  trigger: If,
  disabled: Mf,
  title: jf,
  chevron: Ef,
  open: Tf,
  content: Af
};
function x0({
  items: e,
  multiple: n = !1,
  value: r,
  defaultValue: s,
  onChange: o,
  className: l
}) {
  const u = Ue(), [a, i] = V(s ?? []), h = r ?? a, v = (f) => {
    const C = h.includes(f) ? h.filter(($) => $ !== f) : n ? [...h, f] : [f];
    i(C), o?.(C);
  };
  return /* @__PURE__ */ t("div", { className: [It.root, l].filter(Boolean).join(" "), children: e.map((f) => {
    const C = h.includes(f.key), $ = `${u}-panel-${f.key}`, O = `${u}-trigger-${f.key}`;
    return /* @__PURE__ */ w("div", { className: It.item, children: [
      /* @__PURE__ */ t("h3", { className: It.heading, children: /* @__PURE__ */ w(
        "button",
        {
          type: "button",
          id: O,
          "aria-expanded": C,
          "aria-controls": $,
          disabled: f.disabled,
          className: [
            It.trigger,
            f.disabled ? It.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => v(f.key),
          children: [
            /* @__PURE__ */ t("span", { className: It.title, children: f.title }),
            /* @__PURE__ */ t("span", { className: [It.chevron, C ? It.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" })
          ]
        }
      ) }),
      /* @__PURE__ */ t(
        "div",
        {
          id: $,
          role: "region",
          "aria-labelledby": O,
          hidden: !C,
          className: It.content,
          children: f.content
        }
      )
    ] }, f.key);
  }) });
}
const Lf = "_textarea_1qm9v_1", Rf = "_xs_1qm9v_25", Bf = "_sm_1qm9v_30", Pf = "_md_1qm9v_35", qf = "_lg_1qm9v_40", Ff = "_xl_1qm9v_45", Ln = {
  textarea: Lf,
  xs: Rf,
  sm: Bf,
  md: Pf,
  lg: qf,
  xl: Ff,
  "resize-none": "_resize-none_1qm9v_50",
  "resize-vertical": "_resize-vertical_1qm9v_54",
  "resize-horizontal": "_resize-horizontal_1qm9v_58",
  "resize-both": "_resize-both_1qm9v_62"
}, k0 = qe(function({ size: n = "md", resize: r = "none", className: s, ...o }, l) {
  return /* @__PURE__ */ t(
    "textarea",
    {
      ref: l,
      className: [
        Ln.textarea,
        Ln[n],
        Ln[`resize-${r}`],
        s
      ].filter(Boolean).join(" "),
      ...o
    }
  );
}), Kf = "_typography_1n43h_1", Hf = "_caption_1n43h_45", Wf = "_overline_1n43h_51", lr = {
  typography: Kf,
  "display-1": "_display-1_1n43h_5",
  "display-2": "_display-2_1n43h_10",
  "display-3": "_display-3_1n43h_15",
  "display-4": "_display-4_1n43h_20",
  "display-5": "_display-5_1n43h_25",
  "display-6": "_display-6_1n43h_30",
  "body-1": "_body-1_1n43h_35",
  "body-2": "_body-2_1n43h_40",
  caption: Hf,
  overline: Wf
}, Uf = {
  "display-1": "h1",
  "display-2": "h2",
  "display-3": "h3",
  "display-4": "h4",
  "display-5": "h5",
  "display-6": "h6",
  "body-1": "p",
  "body-2": "p",
  caption: "span",
  overline: "span"
}, w0 = qe(function({ variant: n = "body-1", as: r, className: s, children: o, ...l }, u) {
  const a = r ?? Uf[n];
  return /* @__PURE__ */ t(
    a,
    {
      ref: u,
      className: [lr.typography, lr[n], s].filter(Boolean).join(" "),
      ...l,
      children: o
    }
  );
}), Vf = "_root_dvw01_1", Xf = "_trigger_dvw01_9", Gf = "_invalid_dvw01_40", Yf = "_placeholder_dvw01_46", Zf = "_label_dvw01_53", Jf = "_chevron_dvw01_59", Qf = "_chevronOpen_dvw01_69", e_ = "_menu_dvw01_73", t_ = "_option_dvw01_88", n_ = "_disabled_dvw01_99", r_ = "_active_dvw01_103", s_ = "_selected_dvw01_104", o_ = "_header_dvw01_114", a_ = "_xs_dvw01_121", l_ = "_sm_dvw01_127", c_ = "_md_dvw01_133", i_ = "_lg_dvw01_139", d_ = "_xl_dvw01_145", st = {
  root: Vf,
  trigger: Xf,
  invalid: Gf,
  placeholder: Yf,
  label: Zf,
  chevron: Jf,
  chevronOpen: Qf,
  menu: e_,
  option: t_,
  disabled: n_,
  active: r_,
  selected: s_,
  header: o_,
  xs: a_,
  sm: l_,
  md: c_,
  lg: i_,
  xl: d_
}, u_ = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function $0({
  options: e = [],
  value: n,
  defaultValue: r,
  onChange: s,
  placeholder: o = "Select…",
  size: l = "md",
  invalid: u = !1,
  disabled: a = !1,
  className: i,
  ...h
}) {
  const v = Ue(), f = `${v}-listbox`, C = le(null), $ = le(null), [O, D] = V(r), [k, b] = V(!1), m = n ?? O, p = e.map((d, N) => d.label === "" || d.disabled ? -1 : N).filter((d) => d >= 0), z = e.findIndex((d) => d.value === m), [_, g] = V(
    () => p.includes(0) ? 0 : p[0] ?? -1
  ), c = q(() => {
    if (a) return;
    const d = z >= 0 && p.includes(z) ? z : p[0];
    g(d ?? -1), b(!0);
  }, [a, z, p]), x = q(() => {
    b(!1), $.current?.focus();
  }, []);
  De(() => {
    if (!k) return;
    const d = (N) => {
      C.current && !C.current.contains(N.target) && b(!1);
    };
    return document.addEventListener("mousedown", d), () => document.removeEventListener("mousedown", d);
  }, [k]);
  const S = (d) => {
    D(d), s?.(d), b(!1), $.current?.focus();
  }, U = (d) => {
    if (p.length === 0) return;
    const N = p.includes(_) ? p.indexOf(_) : 0, M = p[(N + d + p.length) % p.length];
    M != null && g(M);
  }, R = (d) => {
    if (!k) {
      d.key === "ArrowDown" && (d.preventDefault(), c());
      return;
    }
    switch (d.key) {
      case "ArrowDown":
        d.preventDefault(), U(1);
        break;
      case "ArrowUp":
        d.preventDefault(), U(-1);
        break;
      case "Home":
        d.preventDefault(), p[0] != null && g(p[0]);
        break;
      case "End":
        d.preventDefault(), p[p.length - 1] != null && g(p[p.length - 1]);
        break;
      case "Enter":
      case " ":
        d.preventDefault(), _ >= 0 && e[_] && p.includes(_) && S(e[_]?.value ?? "");
        break;
      case "Escape":
        d.preventDefault(), x();
        break;
      case "Tab":
        b(!1);
        break;
    }
  }, I = e.find((d) => d.value === m);
  return /* @__PURE__ */ w("div", { ref: C, className: [st.root, i].filter(Boolean).join(" "), onKeyDown: R, children: [
    /* @__PURE__ */ w(
      "button",
      {
        ref: $,
        type: "button",
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-expanded": k,
        "aria-controls": f,
        "aria-invalid": u || void 0,
        disabled: a,
        className: [
          st.trigger,
          st[l],
          k ? st.open : null,
          u ? st.invalid : null
        ].filter(Boolean).join(" "),
        onClick: () => k ? b(!1) : c(),
        ...h,
        children: [
          /* @__PURE__ */ t("span", { className: I ? st.label : st.placeholder, children: I ? I.label : o }),
          /* @__PURE__ */ t(
            "span",
            {
              className: [st.chevron, k ? st.chevronOpen : null].filter(Boolean).join(" "),
              style: { backgroundImage: u_ },
              "aria-hidden": "true"
            }
          )
        ]
      }
    ),
    k && /* @__PURE__ */ t(
      "div",
      {
        id: f,
        role: "listbox",
        "aria-activedescendant": _ >= 0 ? `${v}-option-${_}` : void 0,
        className: st.menu,
        children: e.map(
          (d, N) => d.label === "" ? /* @__PURE__ */ t("div", { className: st.header, role: "presentation", children: d.value }, d.value) : /* @__PURE__ */ t(
            "div",
            {
              id: `${v}-option-${N}`,
              role: "option",
              "aria-selected": d.value === m,
              "aria-disabled": d.disabled || void 0,
              className: [
                st.option,
                N === _ ? st.active : null,
                d.value === m ? st.selected : null,
                d.disabled ? st.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => {
                d.disabled || S(d.value);
              },
              onMouseEnter: () => {
                !d.disabled && d.label !== "" && g(N);
              },
              children: d.label
            },
            d.value
          )
        )
      }
    )
  ] });
}
const f_ = "_root_1ap80_1", __ = "_wrap_1ap80_9", p_ = "_input_1ap80_26", h_ = "_invalid_1ap80_31", m_ = "_clear_1ap80_57", g_ = "_menu_1ap80_82", b_ = "_option_1ap80_97", y_ = "_disabled_1ap80_108", v_ = "_active_1ap80_112", x_ = "_empty_1ap80_122", k_ = "_xs_1ap80_128", w_ = "_sm_1ap80_135", $_ = "_md_1ap80_142", N_ = "_lg_1ap80_149", S_ = "_xl_1ap80_156", kt = {
  root: f_,
  wrap: __,
  input: p_,
  invalid: h_,
  clear: m_,
  menu: g_,
  option: b_,
  disabled: y_,
  active: v_,
  empty: x_,
  xs: k_,
  sm: w_,
  md: $_,
  lg: N_,
  xl: S_
}, D_ = (e, n) => e.label.toLowerCase().includes(n.toLowerCase());
function N0({
  options: e = [],
  value: n,
  defaultValue: r = "",
  onChange: s,
  onSelect: o,
  placeholder: l = "",
  size: u = "md",
  invalid: a = !1,
  disabled: i = !1,
  filter: h = D_,
  className: v,
  ...f
}) {
  const C = Ue(), $ = `${C}-listbox`, O = le(null), D = le(null), [k, b] = V(r), [m, p] = V(!1), z = n ?? k, _ = Se(
    () => z.trim() === "" ? [...e] : e.filter((T) => h(T, z)),
    [e, z, h]
  ), g = _.map((T, J) => T.disabled ? -1 : J).filter((T) => T >= 0), [c, x] = V(-1), S = (T) => {
    b(T), s?.(T);
  }, U = (T) => {
    S(T.label), o?.(T.value, T), p(!1);
  }, R = (T) => {
    if (g.length === 0) return;
    const J = g.includes(c) ? g.indexOf(c) : T === 1 ? -1 : 0, se = g[(J + T + g.length) % g.length];
    se != null && x(se);
  }, I = (T) => {
    i || (S(T.target.value), p(!0), x(-1));
  }, d = () => {
    i || z !== "" && p(!0);
  }, N = (T) => {
    O.current && !O.current.contains(T.relatedTarget) && p(!1);
  }, M = (T) => {
    if (!i)
      switch (T.key) {
        case "ArrowDown":
          T.preventDefault(), m ? R(1) : (p(!0), x(g[0] ?? -1));
          break;
        case "ArrowUp":
          T.preventDefault(), m && R(-1);
          break;
        case "Enter":
          T.preventDefault(), m && c >= 0 && _[c] && U(_[c]);
          break;
        case "Escape":
          T.preventDefault(), p(!1);
          break;
        case "Tab":
          m && c >= 0 && _[c] && U(_[c]), p(!1);
          break;
      }
  }, L = () => {
    S(""), x(-1), p(!0), D.current?.focus();
  };
  return /* @__PURE__ */ w("div", { ref: O, className: [kt.root, v].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ w("div", { className: [kt.wrap, kt[u], a ? kt.invalid : null].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ t(
        "input",
        {
          ref: D,
          type: "text",
          role: "combobox",
          "aria-expanded": m,
          "aria-controls": $,
          "aria-autocomplete": "list",
          "aria-activedescendant": m && c >= 0 ? `${C}-option-${c}` : void 0,
          "aria-invalid": a || void 0,
          disabled: i,
          value: z,
          placeholder: l,
          className: kt.input,
          onChange: I,
          onFocus: d,
          onBlur: N,
          onKeyDown: M,
          ...f
        }
      ),
      z !== "" && !i && /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: kt.clear,
          "aria-label": "Clear",
          onClick: L,
          children: "×"
        }
      )
    ] }),
    m && /* @__PURE__ */ t("div", { id: $, role: "listbox", className: kt.menu, children: _.length === 0 ? /* @__PURE__ */ t("div", { className: kt.empty, children: "No matches" }) : _.map((T, J) => /* @__PURE__ */ t(
      "div",
      {
        id: `${C}-option-${J}`,
        role: "option",
        "aria-selected": !1,
        "aria-disabled": T.disabled || void 0,
        className: [
          kt.option,
          J === c ? kt.active : null,
          T.disabled ? kt.disabled : null
        ].filter(Boolean).join(" "),
        onClick: () => {
          T.disabled || U(T);
        },
        onMouseDown: (se) => {
          se.preventDefault(), T.disabled || U(T);
        },
        onMouseEnter: () => {
          T.disabled || x(J);
        },
        children: T.label
      },
      T.value
    )) })
  ] });
}
const z_ = "_box_186wt_1", C_ = "_option_186wt_12", O_ = "_disabled_186wt_23", I_ = "_selected_186wt_27", M_ = "_active_186wt_33", fn = {
  box: z_,
  option: C_,
  disabled: O_,
  selected: I_,
  active: M_
};
function S0({
  options: e = [],
  value: n,
  defaultValue: r,
  multiple: s = !1,
  onChange: o,
  className: l,
  style: u,
  ...a
}) {
  const i = Ue(), [h, v] = V(() => {
    const _ = r;
    return _ == null ? [] : Array.isArray(_) ? [..._] : [_];
  }), f = n == null ? h : Array.isArray(n) ? n : [n], C = e.findIndex((_) => !_.disabled), [$, O] = V(() => C >= 0 ? C : 0), D = le(""), k = le(null), b = (_) => {
    v(_), o?.(s ? _ : _[0] ?? "");
  }, m = e.map((_, g) => _.disabled ? -1 : g).filter((_) => _ >= 0), p = (_) => {
    const g = e[_];
    if (!(!g || g.disabled))
      if (O(_), s) {
        const c = f.includes(g.value) ? f.filter((x) => x !== g.value) : [...f, g.value];
        b(c);
      } else
        b([g.value]);
  }, z = (_) => {
    if (m.length === 0) return;
    const g = m.includes($) ? $ : m[0];
    let c = -1;
    if (_.key === "ArrowDown")
      c = m[(m.indexOf(g) + 1) % m.length];
    else if (_.key === "ArrowUp")
      c = m[(m.indexOf(g) - 1 + m.length) % m.length];
    else if (_.key === "Home")
      c = m[0];
    else if (_.key === "End")
      c = m[m.length - 1];
    else if (_.key === "Enter" || _.key === " ") {
      _.preventDefault(), p(g);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(_.key)) {
      _.preventDefault();
      const x = (D.current + _.key).toLowerCase();
      D.current = x, k.current && clearTimeout(k.current), k.current = setTimeout(() => {
        D.current = "";
      }, 500);
      const S = [...m, ...m], U = m.indexOf(g) + 1, R = S.slice(U).find(
        (I) => e[I]?.label.toLowerCase().startsWith(x)
      );
      R != null && O(R);
      return;
    }
    c >= 0 && (_.preventDefault(), O(c), s || b([e[c]?.value ?? ""]));
  };
  return /* @__PURE__ */ t(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": s || void 0,
      "aria-activedescendant": e[$] ? `${i}-option-${$}` : void 0,
      style: u,
      className: [fn.box, l].filter(Boolean).join(" "),
      onKeyDown: z,
      ...a,
      children: e.map((_, g) => {
        const c = f.includes(_.value), x = g === $;
        return /* @__PURE__ */ t(
          "div",
          {
            id: `${i}-option-${g}`,
            role: "option",
            "aria-selected": c,
            "aria-disabled": _.disabled || void 0,
            className: [
              fn.option,
              c ? fn.selected : null,
              x ? fn.active : null,
              _.disabled ? fn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => p(g),
            children: _.label
          },
          _.value
        );
      })
    }
  );
}
const j_ = "_group_qro0q_1", E_ = "_legend_qro0q_8", T_ = "_list_qro0q_16", A_ = "_item_qro0q_25", L_ = "_disabled_qro0q_32", R_ = "_label_qro0q_37", B_ = "_checkbox_qro0q_48", Ht = {
  group: j_,
  legend: E_,
  list: T_,
  item: A_,
  disabled: L_,
  label: R_,
  checkbox: B_
};
function D0({
  options: e = [],
  value: n,
  defaultValue: r = [],
  onChange: s,
  legend: o,
  name: l,
  className: u
}) {
  const [a, i] = V(() => [...r]), h = n ?? a, v = (f, C) => {
    const $ = C ? [...h, f] : h.filter((O) => O !== f);
    i($), s?.($);
  };
  return /* @__PURE__ */ w("fieldset", { className: [Ht.group, u].filter(Boolean).join(" "), children: [
    o != null && /* @__PURE__ */ t("legend", { className: Ht.legend, children: o }),
    /* @__PURE__ */ t("ul", { className: Ht.list, children: e.map((f) => {
      const C = h.includes(f.value);
      return /* @__PURE__ */ t(
        "li",
        {
          className: [Ht.item, f.disabled ? Ht.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ w("label", { className: Ht.label, children: [
            /* @__PURE__ */ t(
              "input",
              {
                type: "checkbox",
                className: Ht.checkbox,
                name: l,
                value: f.value,
                checked: C,
                disabled: f.disabled,
                onChange: ($) => v(f.value, $.target.checked)
              }
            ),
            /* @__PURE__ */ t("span", { children: f.label })
          ] })
        },
        f.value
      );
    }) })
  ] });
}
const P_ = "_group_1dyra_1", q_ = "_legend_1dyra_8", F_ = "_list_1dyra_16", K_ = "_item_1dyra_25", H_ = "_disabled_1dyra_32", W_ = "_label_1dyra_37", U_ = "_radio_1dyra_48", Wt = {
  group: P_,
  legend: q_,
  list: F_,
  item: K_,
  disabled: H_,
  label: W_,
  radio: U_
};
function z0({
  options: e = [],
  value: n,
  defaultValue: r,
  onChange: s,
  legend: o,
  name: l,
  className: u
}) {
  const [a, i] = V(r), h = n ?? a, v = (f) => {
    i(f), s?.(f);
  };
  return /* @__PURE__ */ w("fieldset", { className: [Wt.group, u].filter(Boolean).join(" "), children: [
    o != null && /* @__PURE__ */ t("legend", { className: Wt.legend, children: o }),
    /* @__PURE__ */ t("ul", { className: Wt.list, children: e.map((f) => {
      const C = f.value === h;
      return /* @__PURE__ */ t(
        "li",
        {
          className: [Wt.item, f.disabled ? Wt.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ w("label", { className: Wt.label, children: [
            /* @__PURE__ */ t(
              "input",
              {
                type: "radio",
                className: Wt.radio,
                name: l,
                value: f.value,
                checked: C,
                disabled: f.disabled,
                onChange: ($) => v($.target.value)
              }
            ),
            /* @__PURE__ */ t("span", { children: f.label })
          ] })
        },
        f.value
      );
    }) })
  ] });
}
const V_ = "_bar_5dkw6_1", X_ = "_option_5dkw6_12", G_ = "_selected_5dkw6_33", Y_ = "_sm_5dkw6_49", Z_ = "_md_5dkw6_55", J_ = "_lg_5dkw6_61", _n = {
  bar: V_,
  option: X_,
  selected: G_,
  sm: Y_,
  md: Z_,
  lg: J_
};
function C0({
  options: e = [],
  value: n,
  defaultValue: r,
  onChange: s,
  size: o = "md",
  className: l,
  ...u
}) {
  const [a, i] = V(
    r ?? e[0]?.value
  ), h = n ?? a, v = (f) => {
    i(f), s?.(f);
  };
  return /* @__PURE__ */ t(
    "div",
    {
      role: "group",
      className: [_n.bar, _n[o], l].filter(Boolean).join(" "),
      ...u,
      children: e.map((f) => {
        const C = f.value === h;
        return /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            "aria-pressed": C,
            disabled: f.disabled,
            className: [
              _n.option,
              C ? _n.selected : null,
              f.disabled ? _n.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => v(f.value),
            children: f.label
          },
          f.value
        );
      })
    }
  );
}
const Q_ = "_toggle_1lv03_1", ep = "_pressed_1lv03_29", tp = "_sm_1lv03_41", np = "_md_1lv03_47", rp = "_lg_1lv03_53", sp = "_fullWidth_1lv03_59", Dn = {
  toggle: Q_,
  pressed: ep,
  sm: tp,
  md: np,
  lg: rp,
  fullWidth: sp
}, O0 = qe(
  function({
    pressed: n,
    defaultPressed: r = !1,
    onChange: s,
    size: o = "md",
    fullWidth: l = !1,
    className: u,
    type: a = "button",
    ...i
  }, h) {
    const [v, f] = V(r), C = n ?? v, $ = () => {
      const O = !C;
      f(O), s?.(O);
    };
    return /* @__PURE__ */ t(
      "button",
      {
        ref: h,
        type: a,
        "aria-pressed": C,
        className: [
          Dn.toggle,
          Dn[o],
          C ? Dn.pressed : null,
          l ? Dn.fullWidth : null,
          u
        ].filter(Boolean).join(" "),
        onClick: $,
        ...i
      }
    );
  }
), op = "_root_6843t_1", ap = "_action_6843t_8", lp = "_caret_6843t_32", cp = "_sm_6843t_65", ip = "_md_6843t_77", dp = "_lg_6843t_89", up = "_menu_6843t_101", fp = "_item_6843t_114", _p = "_disabled_6843t_126", pp = "_active_6843t_130", hp = "_danger_6843t_139", Mt = {
  root: op,
  action: ap,
  caret: lp,
  sm: cp,
  md: ip,
  lg: dp,
  menu: up,
  item: fp,
  disabled: _p,
  active: pp,
  danger: hp
};
function I0({
  label: e,
  onClick: n,
  items: r = [],
  size: s = "md",
  disabled: o = !1,
  className: l,
  ...u
}) {
  const a = Ue(), i = `${a}-menu`, h = le(null), v = le(null), [f, C] = V(!1), [$, O] = V(-1), D = r.map((_, g) => _.disabled ? -1 : g).filter((_) => _ >= 0), k = q(() => {
    o || (O(D[0] ?? -1), C(!0));
  }, [o, D]), b = q(() => {
    C(!1), v.current?.focus();
  }, []);
  De(() => {
    if (!f) return;
    const _ = (g) => {
      h.current && !h.current.contains(g.target) && C(!1);
    };
    return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
  }, [f]);
  const m = (_) => {
    const g = r[_];
    !g || g.disabled || (g.onClick?.(), C(!1), v.current?.focus());
  }, p = (_) => {
    if (D.length === 0) return;
    const g = D.includes($) ? D.indexOf($) : _ === 1 ? -1 : 0, c = D[(g + _ + D.length) % D.length];
    c != null && O(c);
  }, z = (_) => {
    if (!f) {
      (_.key === "ArrowDown" || _.key === "Enter" || _.key === " ") && (_.preventDefault(), k());
      return;
    }
    switch (_.key) {
      case "ArrowDown":
        _.preventDefault(), p(1);
        break;
      case "ArrowUp":
        _.preventDefault(), p(-1);
        break;
      case "Home":
        _.preventDefault(), D[0] != null && O(D[0]);
        break;
      case "End":
        _.preventDefault(), D[D.length - 1] != null && O(D[D.length - 1]);
        break;
      case "Enter":
      case " ":
        _.preventDefault(), $ >= 0 && m($);
        break;
      case "Escape":
        _.preventDefault(), b();
        break;
      case "Tab":
        C(!1);
        break;
    }
  };
  return /* @__PURE__ */ w(
    "div",
    {
      ref: h,
      className: [Mt.root, Mt[s], l].filter(Boolean).join(" "),
      onKeyDown: z,
      children: [
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: Mt.action,
            disabled: o,
            onClick: n,
            children: e
          }
        ),
        /* @__PURE__ */ t(
          "button",
          {
            ref: v,
            type: "button",
            className: Mt.caret,
            "aria-haspopup": "menu",
            "aria-expanded": f,
            "aria-controls": i,
            "aria-label": "More actions",
            disabled: o,
            onClick: () => f ? C(!1) : k(),
            children: "▾"
          }
        ),
        f && /* @__PURE__ */ t(
          "div",
          {
            id: i,
            role: "menu",
            "aria-activedescendant": $ >= 0 ? `${a}-item-${$}` : void 0,
            className: Mt.menu,
            ...u,
            children: r.map((_, g) => /* @__PURE__ */ t(
              "div",
              {
                id: `${a}-item-${g}`,
                role: "menuitem",
                "aria-disabled": _.disabled || void 0,
                className: [
                  Mt.item,
                  g === $ ? Mt.active : null,
                  _.danger ? Mt.danger : null,
                  _.disabled ? Mt.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => m(g),
                onMouseEnter: () => {
                  _.disabled || O(g);
                },
                children: _.label
              },
              _.key
            ))
          }
        )
      ]
    }
  );
}
const mp = "_textbox_1eb0k_1", gp = "_invalid_1eb0k_31", bp = "_xs_1eb0k_37", yp = "_sm_1eb0k_43", vp = "_md_1eb0k_49", xp = "_lg_1eb0k_55", kp = "_xl_1eb0k_61", Rn = {
  textbox: mp,
  invalid: gp,
  xs: bp,
  sm: yp,
  md: vp,
  lg: xp,
  xl: kp
}, M0 = qe(function({ size: n = "md", invalid: r = !1, className: s, type: o = "text", ...l }, u) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: u,
      type: o,
      className: [Rn.textbox, Rn[n], r ? Rn.invalid : null, s].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...l
    }
  );
}), wp = "_wrapper_164zy_1", $p = "_input_164zy_8", Np = "_invalid_164zy_38", Sp = "_toggle_164zy_44", Dp = "_xs_164zy_79", zp = "_sm_164zy_85", Cp = "_md_164zy_91", Op = "_lg_164zy_97", Ip = "_xl_164zy_103", pn = {
  wrapper: wp,
  input: $p,
  invalid: Np,
  toggle: Sp,
  xs: Dp,
  sm: zp,
  md: Cp,
  lg: Op,
  xl: Ip
}, j0 = qe(function({
  size: n = "md",
  invalid: r = !1,
  className: s,
  disabled: o,
  showLabel: l = "Show password",
  hideLabel: u = "Hide password",
  ...a
}, i) {
  const [h, v] = V(!1);
  return /* @__PURE__ */ w("div", { className: pn.wrapper, children: [
    /* @__PURE__ */ t(
      "input",
      {
        ref: i,
        type: h ? "text" : "password",
        disabled: o,
        className: [pn.input, pn[n], r ? pn.invalid : null, s].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...a
      }
    ),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: pn.toggle,
        "aria-pressed": h,
        "aria-label": h ? u : l,
        disabled: o,
        onClick: () => v((f) => !f),
        children: /* @__PURE__ */ t(Ve, { name: h ? "eye-off" : "eye", size: 16 })
      }
    )
  ] });
}), Mp = "_mask_evq34_1", jp = "_invalid_evq34_31", Ep = "_xs_evq34_37", Tp = "_sm_evq34_43", Ap = "_md_evq34_49", Lp = "_lg_evq34_55", Rp = "_xl_evq34_61", Bn = {
  mask: Mp,
  invalid: jp,
  xs: Ep,
  sm: Tp,
  md: Ap,
  lg: Lp,
  xl: Rp
};
function cr(e, n) {
  let r = e.replace(/\D/g, ""), s = "";
  for (const o of n)
    if (o === "#") {
      if (r.length === 0) break;
      s += r[0] ?? "", r = r.slice(1);
    } else if (r.length > 0)
      s += o;
    else
      break;
  return s;
}
const E0 = qe(function({
  size: n = "md",
  invalid: r = !1,
  mask: s,
  value: o,
  defaultValue: l = "",
  onChange: u,
  className: a,
  onKeyDown: i,
  ...h
}, v) {
  const [f, C] = V(l ?? ""), $ = o !== void 0, O = $ ? o ?? "" : f, D = (m) => {
    const p = cr(m, s);
    return $ || C(p), u?.(p), p;
  };
  return /* @__PURE__ */ t(
    "input",
    {
      ref: v,
      type: "text",
      value: O,
      onChange: (m) => {
        D(m.target.value);
      },
      onKeyDown: (m) => {
        if (m.key === "Backspace") {
          const p = m.currentTarget.selectionStart ?? O.length, z = O[p - 1];
          if (z !== void 0 && !/\d/.test(z)) {
            m.preventDefault();
            const _ = O.replace(/\D/g, "");
            D(cr(_.slice(0, -1), s));
          }
        }
        i?.(m);
      },
      className: [Bn.mask, Bn[n], r ? Bn.invalid : null, a].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...h
    }
  );
}), Bp = "_wrapper_aus1c_1", Pp = "_input_aus1c_8", qp = "_invalid_aus1c_38", Fp = "_button_aus1c_44", Kp = "_up_aus1c_76", Hp = "_down_aus1c_81", Wp = "_xs_aus1c_86", Up = "_sm_aus1c_92", Vp = "_md_aus1c_98", Xp = "_lg_aus1c_104", Gp = "_xl_aus1c_110", Bt = {
  wrapper: Bp,
  input: Pp,
  invalid: qp,
  button: Fp,
  up: Kp,
  down: Hp,
  xs: Wp,
  sm: Up,
  md: Vp,
  lg: Xp,
  xl: Gp
};
function Kn(e) {
  const n = parseFloat(e);
  return Number.isNaN(n) ? null : n;
}
function Yp(e) {
  let n = "", r = !1;
  for (const s of e)
    s >= "0" && s <= "9" ? n += s : s === "." && !r ? (r = !0, n += s) : s === "-" && n.length === 0 && (n += s);
  return n;
}
function Nr(e, n, r) {
  return Math.min(r ?? 1 / 0, Math.max(n ?? -1 / 0, e));
}
function Zp(e, n, r) {
  return n === void 0 ? e : n + Math.round((e - n) / r) * r;
}
function Jp(e, n, r, s, o) {
  const u = Kn(e) ?? r ?? 0;
  let a;
  return r === void 0 ? a = u + n * o : n > 0 ? a = r + Math.ceil((u - r + 1e-9) / o) * o : a = r + Math.floor((u - r - 1e-9) / o) * o, Nr(a, r, s);
}
const T0 = qe(function({
  size: n = "md",
  invalid: r = !1,
  className: s,
  disabled: o,
  value: l,
  defaultValue: u,
  onChange: a,
  min: i,
  max: h,
  step: v = 1,
  incrementLabel: f = "Increment",
  decrementLabel: C = "Decrement",
  onBlur: $,
  onKeyDown: O,
  ...D
}, k) {
  const [b, m] = V(u != null ? String(u) : ""), p = l !== void 0, z = p ? l == null ? "" : String(l) : b, _ = (R) => {
    p || m(R), a?.(Kn(R));
  }, g = (R) => {
    p || m(String(R)), a?.(R);
  }, c = (R) => {
    o || g(Jp(z, R, i, h, v));
  }, x = (R) => {
    _(Yp(R.target.value));
  }, S = (R) => {
    R.key === "ArrowUp" ? (R.preventDefault(), c(1)) : R.key === "ArrowDown" && (R.preventDefault(), c(-1)), O?.(R);
  }, U = (R) => {
    const I = Kn(z);
    I === null ? (p || m(""), a?.(null)) : g(Nr(Zp(I, i, v), i, h)), $?.(R);
  };
  return /* @__PURE__ */ w("div", { className: Bt.wrapper, children: [
    /* @__PURE__ */ t(
      "input",
      {
        ref: k,
        type: "text",
        inputMode: "decimal",
        autoComplete: "off",
        value: z,
        disabled: o,
        onChange: x,
        onKeyDown: S,
        onBlur: U,
        className: [Bt.input, Bt[n], r ? Bt.invalid : null, s].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...D
      }
    ),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: [Bt.button, Bt.up].join(" "),
        "aria-label": f,
        disabled: o,
        onClick: () => c(1),
        children: /* @__PURE__ */ t(Ve, { name: "chevron-up", size: 14 })
      }
    ),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: [Bt.button, Bt.down].join(" "),
        "aria-label": C,
        disabled: o,
        onClick: () => c(-1),
        children: /* @__PURE__ */ t(Ve, { name: "chevron-down", size: 14 })
      }
    )
  ] });
}), xe = {}, Qp = [
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
function mt(e, n, r) {
  return Math.min(r, Math.max(n, e));
}
function Hn(e) {
  const n = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(e.trim());
  if (!n) return null;
  let r = n[1];
  return r.length === 3 && (r = r.split("").map((s) => s + s).join("")), {
    r: Number.parseInt(r.slice(0, 2), 16),
    g: Number.parseInt(r.slice(2, 4), 16),
    b: Number.parseInt(r.slice(4, 6), 16),
    a: 1
  };
}
function eh({ r: e, g: n, b: r }) {
  const s = (o) => Math.round(o).toString(16).padStart(2, "0");
  return `#${s(e)}${s(n)}${s(r)}`;
}
function th({ r: e, g: n, b: r }) {
  const s = e / 255, o = n / 255, l = r / 255, u = Math.max(s, o, l), a = Math.min(s, o, l), i = u - a;
  let h = 0;
  return i !== 0 && (u === s ? h = (o - l) / i % 6 : u === o ? h = (l - s) / i + 2 : h = (s - o) / i + 4, h *= 60, h < 0 && (h += 360)), {
    h,
    s: u === 0 ? 0 : i / u,
    v: u
  };
}
function Zt({ h: e, s: n, v: r }) {
  const s = r * n, o = e / 60, l = s * (1 - Math.abs(o % 2 - 1));
  let u = 0, a = 0, i = 0;
  o < 1 ? (u = s, a = l) : o < 2 ? (u = l, a = s) : o < 3 ? (a = s, i = l) : o < 4 ? (a = l, i = s) : o < 5 ? (u = l, i = s) : (u = s, i = l);
  const h = r - s;
  return {
    r: Math.round((u + h) * 255),
    g: Math.round((a + h) * 255),
    b: Math.round((i + h) * 255),
    a: 1
  };
}
function nh(e) {
  const n = Hn(e);
  if (n) return n;
  const r = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*([\d.]+))?\s*\)$/i.exec(
    e.trim()
  );
  return r ? {
    r: mt(Number(r[1]), 0, 255),
    g: mt(Number(r[2]), 0, 255),
    b: mt(Number(r[3]), 0, 255),
    a: r[4] != null ? mt(Number(r[4]), 0, 1) : 1
  } : null;
}
function ir({ r: e, g: n, b: r, a: s }) {
  return s >= 1 ? `rgb(${e}, ${n}, ${r})` : `rgba(${e}, ${n}, ${r}, ${Math.round(s * 100) / 100})`;
}
const A0 = ({
  value: e = "#000000",
  showSaturation: n = !0,
  showRgba: r = !0,
  showPalette: s = !0,
  palette: o = Qp,
  showButton: l = !1,
  showArrow: u = !0,
  disabled: a = !1,
  invalid: i = !1,
  placeholder: h = "",
  size: v = "md",
  tabIndex: f = 0,
  className: C,
  onChange: $,
  onValueChange: O,
  onOpen: D,
  onClose: k
}) => {
  const b = le(null), m = le(null), p = le(null), z = le(null), _ = le(null), g = Ue(), c = le(null), x = Se(
    () => nh(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [S, U] = V(!1), [R, I] = V(null), d = R ?? x, N = Se(() => th(d), [d]), M = q(
    (H) => {
      const y = ir(H);
      $?.(y), O?.(y);
    },
    [$, O]
  ), L = q(
    (H, y) => {
      I(H), y && !l && M(H);
    },
    [l, M]
  ), T = q(() => {
    U(!1), I(null), k?.(), m.current?.focus();
  }, [k]), J = q(() => {
    a || (I(x), U(!0), D?.());
  }, [a, x, D]), se = q(() => {
    S ? T() : J();
  }, [S, T, J]), de = q(
    (H, y) => {
      const E = p.current;
      if (!E) return N;
      const K = E.getBoundingClientRect(), Q = mt((H - K.left) / K.width, 0, 1), G = mt(1 - (y - K.top) / K.height, 0, 1);
      return { h: N.h, s: Q, v: G };
    },
    [N]
  ), ne = q(
    (H, y) => {
      if (!y) return 0;
      const E = y.getBoundingClientRect();
      return mt((H - E.left) / E.width, 0, 1);
    },
    []
  ), oe = (H) => {
    if (a) return;
    H.preventDefault(), H.currentTarget.setPointerCapture(H.pointerId), c.current = "sat";
    const y = de(H.clientX, H.clientY);
    L({ ...Zt(y), a: d.a }, !0);
  }, ae = (H) => {
    if (c.current !== "sat") return;
    H.preventDefault();
    const y = de(H.clientX, H.clientY);
    L({ ...Zt(y), a: d.a }, !0);
  }, X = (H) => {
    if (a) return;
    H.preventDefault(), H.currentTarget.setPointerCapture(H.pointerId), c.current = "hue";
    const y = ne(H.clientX, z.current);
    L({ ...Zt({ ...N, h: y * 360 }), a: d.a }, !0);
  }, W = (H) => {
    if (c.current !== "hue") return;
    H.preventDefault();
    const y = ne(H.clientX, z.current);
    L({ ...Zt({ ...N, h: y * 360 }), a: d.a }, !0);
  }, B = (H) => {
    if (a) return;
    H.preventDefault(), H.currentTarget.setPointerCapture(H.pointerId), c.current = "alpha";
    const y = ne(H.clientX, _.current);
    L({ ...d, a: y }, !0);
  }, te = (H) => {
    if (c.current !== "alpha") return;
    H.preventDefault();
    const y = ne(H.clientX, _.current);
    L({ ...d, a: y }, !0);
  }, he = () => {
    c.current = null;
  }, Z = q(
    (H, y) => {
      const E = { h: N.h, s: mt(N.s + H, 0, 1), v: mt(N.v + y, 0, 1) };
      L({ ...Zt(E), a: d.a }, !0);
    },
    [N, d.a, L]
  ), me = q(
    (H) => {
      const y = (N.h + H + 360) % 360;
      L({ ...Zt({ ...N, h: y }), a: d.a }, !0);
    },
    [N, d.a, L]
  ), ye = q(
    (H) => {
      L({ ...d, a: mt(d.a + H, 0, 1) }, !0);
    },
    [d, L]
  ), ze = (H) => {
    switch (H.key) {
      case "ArrowLeft":
        H.preventDefault(), Z(-0.05, 0);
        break;
      case "ArrowRight":
        H.preventDefault(), Z(0.05, 0);
        break;
      case "ArrowUp":
        H.preventDefault(), Z(0, 0.05);
        break;
      case "ArrowDown":
        H.preventDefault(), Z(0, -0.05);
        break;
      case "Escape":
        H.preventDefault(), T();
        break;
    }
  }, He = (H, y) => {
    switch (H.key) {
      case "ArrowLeft":
        H.preventDefault(), y === "hue" ? me(-6) : ye(-0.05);
        break;
      case "ArrowRight":
        H.preventDefault(), y === "hue" ? me(6) : ye(0.05);
        break;
      case "Escape":
        H.preventDefault(), T();
        break;
    }
  }, Me = (H, y) => {
    if (H === "hex") {
      const G = Hn(y);
      G && L({ ...G, a: d.a }, !0);
      return;
    }
    const E = y.replace(/[^\d.]/g, ""), K = Number.parseFloat(E);
    if (Number.isNaN(K)) return;
    if (H === "a") {
      const G = E.includes(".") ? mt(K, 0, 1) : mt(K / 100, 0, 1);
      L({ ...d, a: G }, !0);
      return;
    }
    const Q = { r: 255, g: 255, b: 255 };
    L({ ...d, [H]: mt(K, 0, Q[H]) }, !0);
  }, Xe = () => {
    R && (M(R), I(null), U(!1), k?.(), m.current?.focus());
  };
  De(() => {
    if (!S) return;
    const H = (y) => {
      b.current && !b.current.contains(y.target) && T();
    };
    return document.addEventListener("mousedown", H), () => document.removeEventListener("mousedown", H);
  }, [S, T]), De(() => {
    if (!S) return;
    const H = (y) => {
      y.key === "Escape" && T();
    };
    return document.addEventListener("keydown", H), () => document.removeEventListener("keydown", H);
  }, [S, T]);
  const be = v === "xs" ? xe.dtColorpickerTriggerXs : v === "sm" ? xe.dtColorpickerTriggerSm : v === "lg" ? xe.dtColorpickerTriggerLg : v === "xl" ? xe.dtColorpickerTriggerXl : xe.dtColorpickerTriggerMd, Ge = ir(d), et = eh(d), We = { x: N.s * 100, y: (1 - N.v) * 100 }, Ze = N.h / 360 * 100, Fe = d.a * 100, Ye = /* @__PURE__ */ w("div", { className: xe.dtColorpickerPanel, children: [
    n && /* @__PURE__ */ t(
      "div",
      {
        ref: p,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(N.s * 100),
        "aria-valuetext": `Saturation ${Math.round(N.s * 100)}%, value ${Math.round(N.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": a || void 0,
        tabIndex: a ? -1 : f,
        className: xe.dtSaturationPicker,
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${N.h}, 100%, 50%)`
        },
        onKeyDown: ze,
        onPointerDown: oe,
        onPointerMove: ae,
        onPointerUp: he,
        children: /* @__PURE__ */ t(
          "span",
          {
            className: xe.dtSaturationIndicator,
            style: { left: `${We.x}%`, top: `${We.y}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    n && /* @__PURE__ */ t(
      "div",
      {
        ref: z,
        role: "slider",
        "aria-label": "Hue",
        "aria-valuemin": 0,
        "aria-valuemax": 360,
        "aria-valuenow": Math.round(N.h),
        "aria-disabled": a || void 0,
        tabIndex: a ? -1 : f,
        className: xe.dtHuePicker,
        onKeyDown: (H) => He(H, "hue"),
        onPointerDown: X,
        onPointerMove: W,
        onPointerUp: he,
        children: /* @__PURE__ */ t(
          "span",
          {
            className: xe.dtHueIndicator,
            style: { left: `${Ze}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    n && /* @__PURE__ */ t(
      "div",
      {
        ref: _,
        role: "slider",
        "aria-label": "Alpha",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(Fe),
        "aria-disabled": a || void 0,
        tabIndex: a ? -1 : f,
        className: xe.dtAlphaPicker,
        style: {
          background: `repeating-conic-gradient(var(--dt-color-border) 0% 25%, var(--dt-color-surface) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${N.h}, 100%, 50%))`
        },
        onKeyDown: (H) => He(H, "alpha"),
        onPointerDown: B,
        onPointerMove: te,
        onPointerUp: he,
        children: /* @__PURE__ */ t(
          "span",
          {
            className: xe.dtAlphaIndicator,
            style: { left: `${Fe}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    r && /* @__PURE__ */ w("div", { className: xe.dtColorpickerRgba, children: [
      /* @__PURE__ */ w("label", { className: xe.dtColorpickerRgbaField, children: [
        /* @__PURE__ */ t("span", { className: xe.dtColorpickerRgbaLabel, children: "Hex" }),
        /* @__PURE__ */ t(
          "input",
          {
            type: "text",
            maxLength: 7,
            className: xe.dtColorpickerRgbaInput,
            "aria-label": "Hex",
            value: et,
            onChange: (H) => Me("hex", H.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ w("label", { className: xe.dtColorpickerRgbaField, children: [
        /* @__PURE__ */ t("span", { className: xe.dtColorpickerRgbaLabel, children: "R" }),
        /* @__PURE__ */ t(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: xe.dtColorpickerRgbaInput,
            "aria-label": "Red",
            value: d.r,
            onChange: (H) => Me("r", H.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ w("label", { className: xe.dtColorpickerRgbaField, children: [
        /* @__PURE__ */ t("span", { className: xe.dtColorpickerRgbaLabel, children: "G" }),
        /* @__PURE__ */ t(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: xe.dtColorpickerRgbaInput,
            "aria-label": "Green",
            value: d.g,
            onChange: (H) => Me("g", H.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ w("label", { className: xe.dtColorpickerRgbaField, children: [
        /* @__PURE__ */ t("span", { className: xe.dtColorpickerRgbaLabel, children: "B" }),
        /* @__PURE__ */ t(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: xe.dtColorpickerRgbaInput,
            "aria-label": "Blue",
            value: d.b,
            onChange: (H) => Me("b", H.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ w("label", { className: xe.dtColorpickerRgbaField, children: [
        /* @__PURE__ */ t("span", { className: xe.dtColorpickerRgbaLabel, children: "A" }),
        /* @__PURE__ */ t(
          "input",
          {
            type: "text",
            inputMode: "decimal",
            maxLength: 4,
            className: xe.dtColorpickerRgbaInput,
            "aria-label": "Alpha",
            value: Math.round(d.a * 100),
            onChange: (H) => Me("a", H.target.value)
          }
        )
      ] })
    ] }),
    s && /* @__PURE__ */ t("div", { className: xe.dtColorpickerPalette, children: o.map((H) => /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        role: "button",
        className: xe.dtColorpickerSwatch,
        "aria-label": H,
        "aria-disabled": a || void 0,
        tabIndex: a ? -1 : f,
        style: { backgroundColor: H },
        onClick: () => {
          const y = Hn(H);
          l ? L({ ...y, a: d.a }, !1) : (I(null), M({ ...y, a: d.a }), U(!1), k?.(), m.current?.focus());
        }
      },
      H
    )) }),
    l && /* @__PURE__ */ t("div", { className: xe.dtColorpickerFooter, children: /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: xe.dtColorpickerOk,
        onClick: Xe,
        children: "OK"
      }
    ) })
  ] });
  return /* @__PURE__ */ w(
    "div",
    {
      ref: b,
      className: [
        xe.dtColorpicker,
        S ? xe.dtColorpickerOpen : null,
        i ? xe.dtColorpickerInvalid : null,
        C
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ w(
          "button",
          {
            ref: m,
            type: "button",
            role: "button",
            className: [xe.dtColorpickerTrigger, be].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": S,
            "aria-controls": g,
            "aria-label": "Pick a color",
            "aria-disabled": a || void 0,
            disabled: a,
            tabIndex: f,
            onClick: se,
            onKeyDown: (H) => {
              H.key === "Escape" && S && (H.preventDefault(), T());
            },
            children: [
              /* @__PURE__ */ t(
                "span",
                {
                  className: xe.dtColorpickerValue,
                  style: { backgroundColor: Ge },
                  "aria-hidden": "true"
                }
              ),
              h && /* @__PURE__ */ t("span", { className: xe.dtColorpickerText, children: h }),
              u && /* @__PURE__ */ t("span", { className: xe.dtColorpickerChevron, "aria-hidden": "true", children: /* @__PURE__ */ t(Ve, { name: "chevron-down", size: 14 }) })
            ]
          }
        ),
        S && /* @__PURE__ */ t(
          "div",
          {
            id: g,
            role: "dialog",
            "aria-label": "Choose color",
            className: xe.dtColorpickerPopup,
            children: Ye
          }
        )
      ]
    }
  );
}, Ne = {}, rh = 42;
function gt(e) {
  return String(e).padStart(2, "0");
}
function ft(e) {
  return `${e.year}-${gt(e.month)}-${gt(e.day)}`;
}
function sh(e, n) {
  const r = ft(e);
  return n ? `${r} ${gt(e.hour)}:${gt(e.minute)}:${gt(e.second)}` : r;
}
function Wn(e) {
  const n = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!n) return null;
  const r = Number(n[1]), s = Number(n[2]), o = Number(n[3]), l = n[4] != null ? Number(n[4]) : 0, u = n[5] != null ? Number(n[5]) : 0, a = n[6] != null ? Number(n[6]) : 0;
  if (s < 1 || s > 12 || o < 1 || o > 31) return null;
  const i = new Date(r, s - 1, o, l, u, a);
  return i.getFullYear() !== r || i.getMonth() !== s - 1 || i.getDate() !== o ? null : { year: r, month: s, day: o, hour: l, minute: u, second: a };
}
function Pt() {
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
function jt(e, n) {
  const r = new Date(
    e.year,
    e.month - 1,
    e.day + n,
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
function zn(e, n) {
  const r = new Date(e.year, e.month - 1 + n, 1), s = r.getFullYear(), o = r.getMonth() + 1, l = new Date(s, o, 0).getDate();
  return {
    year: s,
    month: o,
    day: Math.min(e.day, l),
    hour: e.hour,
    minute: e.minute,
    second: e.second
  };
}
function dr(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const ur = {
  yyyy: (e) => String(e.year).padStart(4, "0"),
  yy: (e) => gt(e.year % 100),
  MM: (e) => gt(e.month),
  M: (e) => String(e.month),
  dd: (e) => gt(e.day),
  d: (e) => String(e.day),
  HH: (e) => gt(e.hour),
  H: (e) => String(e.hour),
  mm: (e) => gt(e.minute),
  m: (e) => String(e.minute),
  ss: (e) => gt(e.second),
  s: (e) => String(e.second),
  tt: (e, n, r) => new Intl.DateTimeFormat(r, {
    hour: "numeric",
    hour12: !0
  }).formatToParts(n).find((o) => o.type === "dayPeriod")?.value ?? ""
}, oh = ["yyyy", "yy", "MM", "dd", "HH", "mm", "ss", "tt"], ah = ["y", "M", "d", "H", "m", "s"];
function Cn(e, n, r) {
  const s = new Date(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second
  );
  let o = "", l = 0;
  for (; l < n.length; ) {
    let u = !1;
    for (const i of oh)
      if (n.startsWith(i, l)) {
        o += ur[i](e, s, r), l += i.length, u = !0;
        break;
      }
    if (u) continue;
    const a = n[l];
    if (ah.includes(a)) {
      o += ur[a](e, s, r), l += 1;
      continue;
    }
    o += a, l += 1;
  }
  return o;
}
const lh = [
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
function ch(e, n) {
  const r = {};
  let s = 0, o = 0;
  for (; o < n.length; ) {
    let a = null;
    for (const i of lh)
      if (n.startsWith(i, o)) {
        a = i;
        break;
      }
    if (a) {
      const i = e.slice(s, s + a.length);
      if (!/^\d+$/.test(i)) return null;
      const h = Number(i);
      switch (a) {
        case "yyyy":
          r.year = h;
          break;
        case "yy":
        case "y":
          r.year = 2e3 + h;
          break;
        case "MM":
        case "M":
          r.month = h;
          break;
        case "dd":
        case "d":
          r.day = h;
          break;
        case "HH":
        case "H":
          r.hour = h;
          break;
        case "mm":
        case "m":
          r.minute = h;
          break;
        case "ss":
        case "s":
          r.second = h;
          break;
      }
      s += a.length, o += a.length;
      continue;
    }
    if (e[s] !== n[o]) return null;
    s += 1, o += 1;
  }
  const l = {
    year: r.year ?? (/* @__PURE__ */ new Date()).getFullYear(),
    month: r.month ?? 1,
    day: r.day ?? 1,
    hour: r.hour ?? 0,
    minute: r.minute ?? 0,
    second: r.second ?? 0
  };
  if (l.month < 1 || l.month > 12 || l.day < 1 || l.day > 31)
    return null;
  const u = new Date(
    l.year,
    l.month - 1,
    l.day,
    l.hour,
    l.minute,
    l.second
  );
  return u.getFullYear() !== l.year || u.getMonth() !== l.month - 1 || u.getDate() !== l.day ? null : l;
}
function hn(e, n) {
  const r = Wn(e);
  return r || ch(e, n);
}
function ih(e, n, r) {
  return n && ft(e) < ft(n) ? n : r && ft(e) > ft(r) ? r : e;
}
const dh = ["hour", "minute", "second"];
function On(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const L0 = qe(function({
  size: n = "md",
  invalid: r = !1,
  value: s,
  defaultValue: o,
  format: l = "yyyy-MM-dd",
  min: u,
  max: a,
  showTime: i = !1,
  showButton: h = !0,
  allowClear: v = !1,
  inline: f = !1,
  disabledDates: C,
  locale: $ = "en-US",
  onChange: O,
  onValueChange: D,
  onOpen: k,
  onClose: b,
  disabled: m,
  readOnly: p,
  placeholder: z,
  ariaLabel: _,
  triggerLabel: g,
  clearLabel: c,
  tabIndex: x,
  className: S,
  onBlur: U,
  onKeyDown: R,
  ...I
}, d) {
  const N = le(null), M = le(null), L = le(null), T = le(null), J = Ue(), se = s !== void 0, [de, ne] = V(
    () => o != null ? Cn(hn(o, l) ?? Pt(), l, $) : ""
  ), [oe, ae] = V(!1), [X, W] = V(null), [B, te] = V(() => {
    const j = s !== void 0 ? s ?? "" : o ?? "";
    if (j) {
      const re = hn(j, l);
      if (re) return re;
    }
    return Pt();
  }), he = Se(() => u ? Wn(u) : null, [u]), Z = Se(() => a ? Wn(a) : null, [a]), me = Se(
    () => new Set(C ?? []),
    [C]
  ), ye = Se(() => {
    const j = se ? s ?? "" : de;
    return j ? hn(j, l) : null;
  }, [s, de, se, l]), ze = q(
    (j) => {
      const re = ft(j);
      return !!(me.has(re) || he && re < ft(he) || Z && re > ft(Z));
    },
    [me, he, Z]
  ), He = q(
    (j) => {
      if (!ze(j)) return j;
      for (let re = 1; re <= 366; re += 1) {
        const Ce = jt(j, re);
        if (!ze(Ce)) return Ce;
        const we = jt(j, -re);
        if (!ze(we)) return we;
      }
      return j;
    },
    [ze]
  ), Me = q(
    (j) => {
      se || ne(j ? Cn(j, l, $) : "");
      const re = j ? sh(j, i) : "";
      O?.(re), D?.(re);
    },
    [se, l, $, i, O, D]
  ), Xe = q(
    (j) => {
      M.current = j, typeof d == "function" ? d(j) : d && (d.current = j);
    },
    [d]
  ), be = q(() => {
    ae(!1), W(null), b?.(), f || L.current?.focus();
  }, [f, b]), Ge = q(() => {
    if (m) return;
    const j = ye ?? Pt();
    W(j), te(He(j)), ae(!0), k?.();
  }, [m, ye, He, k]), et = q(() => {
    oe ? be() : Ge();
  }, [oe, be, Ge]), We = q((j) => {
    T.current?.querySelector(
      `[data-date="${ft(j)}"]`
    )?.focus();
  }, []), Ze = q(
    (j) => {
      if (ze(j)) return;
      const re = X ?? ye, we = {
        ...i ? {
          hour: re?.hour ?? 0,
          minute: re?.minute ?? 0,
          second: re?.second ?? 0
        } : { hour: 0, minute: 0, second: 0 },
        year: j.year,
        month: j.month,
        day: j.day
      };
      W(we), i || (Me(we), be());
    },
    [ze, X, ye, i, Me, be]
  ), Fe = q(
    (j, re) => {
      W((Ce) => {
        const we = Ce ?? ye ?? Pt(), Je = Math.min(j === "hour" ? 23 : 59, Math.max(0, we[j] + re));
        return { ...we, [j]: Je };
      });
    },
    [ye]
  ), Ye = q(
    (j, re) => {
      const Ce = re.replace(/\D/g, ""), we = Ce === "" ? 0 : Number(Ce), Ee = j === "hour" ? 23 : 59;
      W((Je) => ({ ...Je ?? ye ?? Pt(), [j]: Math.min(Ee, we) }));
    },
    [ye]
  ), H = q(() => {
    X && (Me(X), be());
  }, [X, Me, be]), y = q(() => {
    if (oe) return;
    const j = hn(de, l);
    Me(j ? ih(j, he, Z) : null);
  }, [oe, de, l, he, Z, Me]), E = (j) => {
    const re = j.target.value;
    se || ne(re), oe && W(null);
  }, K = (j) => {
    j.key === "Enter" ? (j.preventDefault(), oe ? X && (Me(X), be()) : y()) : j.key === "Escape" ? oe && (j.preventDefault(), be()) : j.key === "ArrowDown" && !oe ? (j.preventDefault(), Ge()) : j.key === "Tab" && oe && ae(!1), R?.(j);
  }, Q = (j) => {
    y(), U?.(j);
  }, G = (j) => {
    let re = null;
    switch (j.key) {
      case "ArrowLeft":
        re = jt(B, -1), j.preventDefault();
        break;
      case "ArrowRight":
        re = jt(B, 1), j.preventDefault();
        break;
      case "ArrowUp":
        re = jt(B, -7), j.preventDefault();
        break;
      case "ArrowDown":
        re = jt(B, 7), j.preventDefault();
        break;
      case "Home":
        re = jt(B, -dr(B)), j.preventDefault();
        break;
      case "End":
        re = jt(B, 6 - dr(B)), j.preventDefault();
        break;
      case "PageUp":
        re = zn(B, j.shiftKey ? -12 : -1), j.preventDefault();
        break;
      case "PageDown":
        re = zn(B, j.shiftKey ? 12 : 1), j.preventDefault();
        break;
      case "Enter":
      case " ":
        j.preventDefault(), Ze(B);
        break;
      case "Escape":
        j.preventDefault(), be();
        break;
      case "Tab":
        ae(!1);
        break;
    }
    if (re) {
      const Ce = He(re);
      te(Ce), setTimeout(() => We(Ce), 0);
    }
  };
  De(() => {
    if (!oe) return;
    const j = (re) => {
      N.current && !N.current.contains(re.target) && be();
    };
    return document.addEventListener("mousedown", j), () => document.removeEventListener("mousedown", j);
  }, [oe, be]), De(() => {
    if (!oe) return;
    const j = (re) => {
      re.key === "Escape" && be();
    };
    return document.addEventListener("keydown", j), () => document.removeEventListener("keydown", j);
  }, [oe, be]);
  const fe = () => {
    se || ne(""), O?.(""), D?.(""), M.current?.focus();
  }, ke = oe && X ? Cn(X, l, $) : se ? s ? Cn(hn(s, l) ?? Pt(), l, $) : "" : de, Re = se ? !!s : de.length > 0, je = f || oe, tt = { year: B.year, month: B.month }, bt = new Date(tt.year, tt.month - 1, 1).getDay(), Y = {
    year: tt.year,
    month: tt.month,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0
  }, $e = [];
  for (let j = 0; j < rh; j += 1)
    $e.push(jt(Y, j - bt));
  const F = X ? ft(X) : ye ? ft(ye) : null, ee = ft(Pt()), ie = `${tt.year}-${gt(tt.month)}`, _e = Se(
    () => new Intl.DateTimeFormat($, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    }),
    [$]
  ), ce = new Intl.DateTimeFormat($, {
    month: "long",
    year: "numeric"
  }).format(new Date(tt.year, tt.month - 1, 1)), ge = Array.from(
    { length: 7 },
    (j, re) => new Intl.DateTimeFormat($, { weekday: "short" }).format(
      new Date(2021, 0, 3 + re)
    )
  ), Ae = n === "xs" ? Ne.dtDatepickerInputXs : n === "sm" ? Ne.dtDatepickerInputSm : n === "lg" ? Ne.dtDatepickerInputLg : n === "xl" ? Ne.dtDatepickerInputXl : Ne.dtDatepickerInputMd, Be = /* @__PURE__ */ w(
    "div",
    {
      className: Ne.dtDatepickerCalendar,
      "aria-label": _ ?? "Date picker",
      children: [
        /* @__PURE__ */ w("div", { className: Ne.dtDatepickerHeader, children: [
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: Ne.dtDatepickerNav,
              "aria-label": "Previous month",
              onClick: () => {
                const j = He(zn(B, -1));
                te(j), setTimeout(() => We(j), 0);
              },
              children: /* @__PURE__ */ t(Ve, { name: "chevron-left", size: 16 })
            }
          ),
          /* @__PURE__ */ t("span", { className: Ne.dtDatepickerTitle, children: ce }),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: Ne.dtDatepickerNav,
              "aria-label": "Next month",
              onClick: () => {
                const j = He(zn(B, 1));
                te(j), setTimeout(() => We(j), 0);
              },
              children: /* @__PURE__ */ t(Ve, { name: "chevron-right", size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ w(
          "div",
          {
            ref: T,
            role: "grid",
            className: Ne.dtDatepickerGrid,
            onKeyDown: G,
            children: [
              /* @__PURE__ */ t("div", { role: "row", className: Ne.dtDatepickerWeekRow, children: ge.map((j) => /* @__PURE__ */ t(
                "div",
                {
                  role: "columnheader",
                  className: Ne.dtDatepickerWeekday,
                  children: j
                },
                j
              )) }),
              Array.from({ length: 6 }, (j, re) => /* @__PURE__ */ t("div", { role: "row", className: Ne.dtDatepickerRow, children: $e.slice(re * 7, re * 7 + 7).map((Ce) => {
                const we = ft(Ce), Ee = ze(Ce), Je = we.startsWith(ie);
                return /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    role: "gridcell",
                    "data-date": we,
                    tabIndex: we === ft(B) ? 0 : -1,
                    "aria-selected": we === F || void 0,
                    "aria-disabled": Ee || void 0,
                    "aria-label": _e.format(
                      new Date(Ce.year, Ce.month - 1, Ce.day)
                    ),
                    className: [
                      Ne.dtDatepickerDay,
                      Je ? null : Ne.dtDatepickerDayOutside,
                      we === ee ? Ne.dtDatepickerDayToday : null,
                      we === F ? Ne.dtDatepickerDaySelected : null,
                      Ee ? Ne.dtDatepickerDayDisabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => Ze(Ce),
                    onFocus: () => te(Ce),
                    children: Ce.day
                  },
                  we
                );
              }) }, re))
            ]
          }
        ),
        i && /* @__PURE__ */ w("div", { className: Ne.dtDatepickerTime, children: [
          dh.map((j) => /* @__PURE__ */ w("label", { className: Ne.dtDatepickerTimeField, children: [
            /* @__PURE__ */ t("span", { className: Ne.dtDatepickerTimeLabel, children: On(j) }),
            /* @__PURE__ */ w("div", { className: Ne.dtDatepickerTimeControl, children: [
              /* @__PURE__ */ t(
                "input",
                {
                  className: Ne.dtDatepickerTimeInput,
                  inputMode: "numeric",
                  "aria-label": On(j),
                  value: gt((X ?? ye ?? Pt())[j]),
                  onChange: (re) => Ye(j, re.target.value),
                  onKeyDown: (re) => {
                    re.key === "ArrowUp" ? (re.preventDefault(), Fe(j, 1)) : re.key === "ArrowDown" ? (re.preventDefault(), Fe(j, -1)) : re.key === "Enter" && (re.preventDefault(), H());
                  }
                }
              ),
              /* @__PURE__ */ w("span", { className: Ne.dtDatepickerTimeButtons, children: [
                /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    "aria-label": `Increase ${On(j).toLowerCase()}`,
                    onClick: () => Fe(j, 1),
                    children: /* @__PURE__ */ t(Ve, { name: "chevron-up", size: 11 })
                  }
                ),
                /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    "aria-label": `Decrease ${On(j).toLowerCase()}`,
                    onClick: () => Fe(j, -1),
                    children: /* @__PURE__ */ t(Ve, { name: "chevron-down", size: 11 })
                  }
                )
              ] })
            ] })
          ] }, j)),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: Ne.dtDatepickerOk,
              onClick: H,
              children: "OK"
            }
          )
        ] })
      ]
    }
  );
  return /* @__PURE__ */ w(
    "div",
    {
      ref: N,
      className: [
        Ne.dtDatepicker,
        f ? Ne.dtDatepickerInline : null,
        S
      ].filter(Boolean).join(" "),
      children: [
        !f && /* @__PURE__ */ w(Oe, { children: [
          /* @__PURE__ */ t(
            "input",
            {
              ref: Xe,
              type: "text",
              autoComplete: "off",
              value: ke,
              disabled: m,
              readOnly: p,
              placeholder: z,
              tabIndex: x,
              role: h ? void 0 : "combobox",
              "aria-label": _ ?? "Date",
              "aria-haspopup": h ? void 0 : "dialog",
              "aria-expanded": h ? void 0 : je,
              "aria-controls": h ? void 0 : J,
              "aria-invalid": r || void 0,
              className: [
                Ne.dtDatepickerInput,
                Ae,
                r ? Ne.dtDatepickerInputInvalid : null
              ].filter(Boolean).join(" "),
              onChange: E,
              onKeyDown: K,
              onBlur: Q,
              onClick: () => {
                h || et();
              },
              ...I
            }
          ),
          v && !m && Re && /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: [
                Ne.dtDatepickerClear,
                h ? Ne.dtDatepickerClearInset : null
              ].filter(Boolean).join(" "),
              "aria-label": c ?? "Clear",
              onClick: fe,
              children: /* @__PURE__ */ t(Ve, { name: "close", size: 14 })
            }
          ),
          h && /* @__PURE__ */ t(
            "button",
            {
              ref: L,
              type: "button",
              className: [
                Ne.dtDatepickerTrigger,
                oe ? Ne.dtDatepickerTriggerOpen : null
              ].filter(Boolean).join(" "),
              "aria-label": g ?? "Open calendar",
              "aria-haspopup": "dialog",
              "aria-expanded": oe,
              "aria-controls": J,
              disabled: m,
              onClick: et,
              children: /* @__PURE__ */ t(Ve, { name: "calendar", size: 16 })
            }
          )
        ] }),
        je && /* @__PURE__ */ t(
          "div",
          {
            id: J,
            role: f ? void 0 : "dialog",
            className: f ? void 0 : Ne.dtDatepickerPopup,
            children: Be
          }
        )
      ]
    }
  );
}), qt = {}, R0 = ({
  value: e = 0,
  stars: n = 5,
  readOnly: r = !1,
  disabled: s = !1,
  ariaLabel: o = "Rating",
  clearLabel: l = "Clear",
  rateLabel: u = "Rate",
  tabIndex: a = 0,
  className: i,
  onChange: h,
  onValueChange: v
}) => {
  const [f, C] = V(e), $ = q(
    (m) => Math.min(n, Math.max(1, m)),
    [n]
  ), O = q(
    (m) => {
      h?.(m), v?.(m);
    },
    [h, v]
  ), D = q(
    (m) => {
      r || s || (O(m), C(m));
    },
    [r, s, O]
  ), k = (m) => {
    if (r || s) return;
    const p = f > 0 ? f : 1;
    switch (m.key) {
      case "ArrowRight":
      case "ArrowUp":
        m.preventDefault(), D($(p + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        m.preventDefault(), D($(p - 1));
        break;
      case "Home":
        m.preventDefault(), D(1);
        break;
      case "End":
        m.preventDefault(), D(n);
        break;
    }
  }, b = Array.from({ length: n }, (m, p) => p + 1);
  return /* @__PURE__ */ w(
    "div",
    {
      role: "radiogroup",
      "aria-label": o,
      "aria-readonly": r || void 0,
      className: [
        qt.dtRating,
        r ? qt.dtRatingReadonly : null,
        s ? qt.dtRatingDisabled : null,
        i
      ].filter(Boolean).join(" "),
      onKeyDown: k,
      children: [
        !r && !s && /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: qt.dtRatingClear,
            "aria-label": l,
            tabIndex: e === 0 ? a : -1,
            disabled: s,
            onClick: () => D(0),
            children: /* @__PURE__ */ t(Ve, { name: "ban", size: 16 })
          }
        ),
        b.map((m) => {
          const p = m <= e, z = m === (e > 0 ? e : f);
          return /* @__PURE__ */ w(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": p,
              "aria-posinset": m,
              "aria-setsize": n,
              "aria-label": `${u} ${m}`,
              tabIndex: z ? a : -1,
              "aria-disabled": s || r || void 0,
              disabled: s || r,
              className: [
                qt.dtRatingItem,
                p ? qt.dtRatingItemFilled : null
              ].filter(Boolean).join(" "),
              onClick: () => D(m),
              onFocus: () => C(m),
              children: [
                /* @__PURE__ */ t("span", { className: qt.dtRatingIconFilled, "aria-hidden": "true", children: /* @__PURE__ */ t(Ve, { name: "star", size: 20 }) }),
                /* @__PURE__ */ t("span", { className: qt.dtRatingIconEmpty, "aria-hidden": "true", children: /* @__PURE__ */ t(Ve, { name: "star-outline", size: 20 }) })
              ]
            },
            m
          );
        })
      ]
    }
  );
}, Ut = {};
function $t(e, n, r) {
  return Math.min(r, Math.max(n, e));
}
const B0 = ({
  value: e = 0,
  valueMin: n = 0,
  valueMax: r = 100,
  min: s = 0,
  max: o = 100,
  step: l = 1,
  range: u = !1,
  orientation: a = "horizontal",
  disabled: i = !1,
  label: h = "Value",
  minLabel: v = "Min",
  maxLabel: f = "Max",
  tabIndex: C = 0,
  className: $,
  onChange: O,
  onInput: D,
  onValueChange: k,
  onInputChange: b
}) => {
  const m = le(null), p = le(null), [z, _] = V(null), g = z ?? e, c = Se(() => $t(g, s, o), [g, s, o]), x = Se(
    () => $t(u ? n : c, s, o),
    [u, n, c, s, o]
  ), S = Se(
    () => $t(u ? Math.max(r, x) : c, s, o),
    [u, r, x, c, s, o]
  ), U = q(
    (B) => {
      const te = o - s;
      return te <= 0 ? 0 : ($t(B, s, o) - s) / te * 100;
    },
    [s, o]
  ), R = q(
    (B, te) => {
      const he = m.current;
      if (!he) return s;
      const Z = he.getBoundingClientRect();
      let me;
      a === "vertical" ? me = 1 - (te - Z.top) / Z.height : me = (B - Z.left) / Z.width;
      const ye = s + $t(me, 0, 1) * (o - s);
      return l > 0 ? $t(Math.round(ye / l) * l, s, o) : $t(ye, s, o);
    },
    [s, o, l, a]
  ), I = q(
    (B) => {
      typeof B == "number" && _(B), O?.(B), k?.(B);
    },
    [O, k]
  ), d = q(
    (B) => {
      typeof B == "number" && _(B), D?.(B), b?.(B);
    },
    [D, b]
  ), N = q(
    (B, te, he) => {
      const Z = R(te, he);
      let me;
      u ? B === "min" ? me = { min: Math.min(Z, S), max: S } : me = { min: x, max: Math.max(Z, x) } : me = Z, d(me), p.current === null && I(me);
    },
    [u, R, x, S, d, I]
  ), M = q(
    (B, te) => {
      const he = (l > 0 ? l : 1) * te;
      let Z;
      u ? B === "min" ? Z = {
        min: $t(x + he, s, S),
        max: S
      } : Z = {
        min: x,
        max: $t(S + he, x, o)
      } : Z = $t(c + he, s, o), I(Z);
    },
    [u, l, s, o, x, S, c, I]
  ), L = (B, te) => {
    if (!i)
      switch (te.key) {
        case "ArrowLeft":
        case "ArrowDown":
          te.preventDefault(), M(B, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          te.preventDefault(), M(B, 1);
          break;
        case "Home":
          te.preventDefault(), I(u ? B === "min" ? { min: s, max: S } : { min: x, max: x } : s);
          break;
        case "End":
          te.preventDefault(), I(u ? B === "min" ? { min: S, max: S } : { min: x, max: o } : o);
          break;
      }
  }, T = (B, te) => {
    i || (te.preventDefault(), te.currentTarget.focus(), typeof te.currentTarget.setPointerCapture == "function" && te.currentTarget.setPointerCapture(te.pointerId), p.current = { key: B, pointerId: te.pointerId }, N(B, te.clientX, te.clientY));
  }, J = (B) => {
    !p.current || p.current.pointerId !== B.pointerId || (B.preventDefault(), N(p.current.key, B.clientX, B.clientY));
  }, se = (B) => {
    !p.current || p.current.pointerId !== B.pointerId || (p.current = null, B.preventDefault(), I(u ? { min: x, max: S } : c));
  }, [de, ne] = V(null), oe = U(x), ae = U(S), X = u ? oe : 0, W = ae;
  return /* @__PURE__ */ t(
    "div",
    {
      className: [
        Ut.dtSlider,
        a === "vertical" ? Ut.dtSliderVertical : null,
        i ? Ut.dtSliderDisabled : null,
        $
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ w("div", { ref: m, className: Ut.dtSliderTrack, children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: Ut.dtSliderRange,
            style: a === "vertical" ? { bottom: `${X}%`, height: `${W - X}%` } : { left: `${X}%`, width: `${W - X}%` }
          }
        ),
        /* @__PURE__ */ t(
          "div",
          {
            role: "slider",
            "aria-valuemin": s,
            "aria-valuemax": o,
            "aria-valuenow": Math.round(x),
            "aria-orientation": a,
            "aria-label": u ? v : h,
            "aria-disabled": i || void 0,
            tabIndex: i || u && de === "max" ? -1 : C,
            className: Ut.dtSliderHandle,
            style: a === "vertical" ? { bottom: `calc(${oe}% - 8px)` } : { left: `calc(${oe}% - 8px)` },
            onKeyDown: (B) => L("min", B),
            onPointerDown: (B) => T("min", B),
            onPointerMove: J,
            onPointerUp: se,
            onFocus: () => ne("min")
          }
        ),
        u && /* @__PURE__ */ t(
          "div",
          {
            role: "slider",
            "aria-valuemin": s,
            "aria-valuemax": o,
            "aria-valuenow": Math.round(S),
            "aria-orientation": a,
            "aria-label": f,
            "aria-disabled": i || void 0,
            tabIndex: i || de === "min" ? -1 : C,
            className: Ut.dtSliderHandle,
            style: a === "vertical" ? { bottom: `calc(${ae}% - 8px)` } : { left: `calc(${ae}% - 8px)` },
            onKeyDown: (B) => L("max", B),
            onPointerDown: (B) => T("max", B),
            onPointerMove: J,
            onPointerUp: se,
            onFocus: () => ne("max")
          }
        )
      ] })
    }
  );
}, Pe = {}, uh = "-10675199.02:48:05.4775808", fh = "10675199.02:48:05.4775808", Tt = 86400, At = 3600, wt = 60, Pn = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, fr = {
  days: Tt,
  hours: At,
  minutes: wt,
  seconds: 1
}, _h = {
  day: Tt,
  hour: At,
  minute: wt,
  second: 1
};
function Jt(e) {
  return String(e).padStart(2, "0");
}
function vn(e) {
  const n = e.trim();
  if (!n) return null;
  let r = 1, s = n;
  s.startsWith("-") ? (r = -1, s = s.slice(1)) : s.startsWith("+") && (s = s.slice(1));
  const o = /^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(
    s
  );
  if (o) {
    if (!o.slice(1).some((f) => f != null)) return null;
    const a = o[1] != null ? Number(o[1]) : 0, i = o[2] != null ? Number(o[2]) : 0, h = o[3] != null ? Number(o[3]) : 0, v = o[4] != null ? Number(o[4]) : 0;
    return r * (a * Tt + i * At + h * wt + v);
  }
  const l = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(s);
  if (l) {
    const u = l[1] != null ? Number(l[1]) : 0, a = Number(l[2]), i = Number(l[3]), h = l[4] != null ? Number(l[4]) : 0, v = l[5] != null ? +`0.${l[5]}` : 0;
    return a > 23 || i > 59 || h > 59 ? null : r * (u * Tt + a * At + i * wt + h + v);
  }
  return null;
}
function ph(e) {
  return e.days * Tt + e.hours * At + e.minutes * wt + e.seconds;
}
function _r(e) {
  let n = Math.abs(e);
  const r = Math.floor(n / Tt);
  n %= Tt;
  const s = Math.floor(n / At);
  n %= At;
  const o = Math.floor(n / wt), l = Math.round(n % wt * 1e9) / 1e9;
  return { days: r, hours: s, minutes: o, seconds: l };
}
function Un(e, n) {
  const r = e < 0;
  let s = Math.abs(e);
  n === "minute" ? s = Math.round(s / wt) * wt : n === "hour" ? s = Math.round(s / At) * At : n === "day" && (s = Math.round(s / Tt) * Tt);
  let o = Math.round(s % wt);
  const l = o === 60 ? 1 : 0;
  o = o === 60 ? 0 : o;
  const u = Math.floor(s / wt) + l, a = u % 60, i = Math.floor(u / 60), h = i % 24, v = Math.floor(i / 24), f = r ? "-" : "", C = v > 0 ? `${v}.` : "";
  switch (n) {
    case "day":
      return `${f}${v} day${v === 1 ? "" : "s"}`;
    case "hour":
      return `${f}${C}${Jt(h)}`;
    case "minute":
      return `${f}${C}${Jt(h)}:${Jt(a)}`;
    default:
      return `${f}${C}${Jt(h)}:${Jt(a)}:${Jt(o)}`;
  }
}
function pr(e, n = "second") {
  const r = vn(e);
  return r === null ? "" : Un(r, n);
}
function qn(e, n, r) {
  return Math.min(r, Math.max(n, e));
}
const P0 = qe(
  function({
    size: n = "md",
    invalid: r = !1,
    value: s,
    defaultValue: o,
    min: l = uh,
    max: u = fh,
    step: a = "1",
    precision: i = "second",
    showDays: h = !0,
    showHours: v = !0,
    showMinutes: f = !0,
    showSeconds: C = !0,
    allowClear: $ = !1,
    inline: O = !1,
    onChange: D,
    onValueChange: k,
    onOpen: b,
    onClose: m,
    disabled: p,
    placeholder: z,
    ariaLabel: _,
    triggerLabel: g,
    clearLabel: c,
    tabIndex: x,
    className: S,
    onBlur: U,
    onKeyDown: R,
    ...I
  }, d) {
    const N = le(null), M = le(null), L = le(null), T = Ue(), J = s !== void 0, [se, de] = V(
      () => o != null ? pr(o, i) : ""
    ), [ne, oe] = V(!1), [ae, X] = V(null), [W, B] = V(null), te = Se(
      () => vn(l) ?? -Number.MAX_SAFE_INTEGER,
      [l]
    ), he = Se(
      () => vn(u) ?? Number.MAX_SAFE_INTEGER,
      [u]
    ), Z = Se(() => {
      const Y = Number.parseFloat(a);
      return Number.isNaN(Y) || Y <= 0 ? 1 : Y;
    }, [a]), me = Se(() => {
      const Y = J ? s ?? "" : se;
      return Y ? vn(Y) : null;
    }, [s, se, J]), ye = q(
      (Y) => {
        const $e = Y === null ? "" : Un(Y, i);
        J || de($e), D?.($e), k?.($e);
      },
      [J, i, D, k]
    ), ze = q(
      (Y) => {
        Y && ae !== null && ye(ae), oe(!1), X(null), B(null), m?.(), O || L.current?.focus();
      },
      [O, ae, ye, m]
    ), He = q(() => {
      p || (X(me ?? 0), oe(!0), b?.());
    }, [p, me, b]), Me = q(() => {
      ne ? ze(!1) : He();
    }, [ne, ze, He]), Xe = q(
      (Y, $e) => {
        X((F) => {
          const ie = (F ?? me ?? 0) + $e * Z * fr[Y];
          return qn(ie, te, he);
        });
      },
      [me, Z, te, he]
    ), be = q(
      (Y) => {
        const $e = W?.[Y];
        if ($e == null) return;
        const F = Number.parseFloat($e), ee = Number.isNaN(F) ? 0 : F;
        X((ie) => {
          const _e = ie ?? me ?? 0, ce = _r(_e);
          ce[Y] = ee;
          const Ae = (_e < 0 ? -1 : 1) * ph(ce);
          return qn(Ae, te, he);
        }), B(null);
      },
      [W, me, te, he]
    ), Ge = (Y, $e) => {
      B((F) => ({ ...F ?? {}, [Y]: $e }));
    }, et = (Y, $e) => {
      switch ($e.key) {
        case "ArrowUp":
          $e.preventDefault(), be(Y), Xe(Y, 1);
          break;
        case "ArrowDown":
          $e.preventDefault(), be(Y), Xe(Y, -1);
          break;
        case "Home":
          $e.preventDefault(), be(Y), X(te);
          break;
        case "End":
          $e.preventDefault(), be(Y), X(he);
          break;
        case "Enter":
          $e.preventDefault(), be(Y), ze(!0);
          break;
      }
    }, We = q(() => {
      if (ne) return;
      const Y = vn(se);
      ye(Y !== null ? qn(Y, te, he) : null);
    }, [ne, se, te, he, ye]), Ze = (Y) => {
      J || de(Y.target.value);
    }, Fe = (Y) => {
      Y.key === "Enter" ? (Y.preventDefault(), ne ? ze(!0) : We()) : Y.key === "Escape" && ne ? (Y.preventDefault(), ze(!1)) : Y.key === "ArrowDown" && !ne ? (Y.preventDefault(), He()) : Y.key === "Tab" && ne && oe(!1), R?.(Y);
    }, Ye = (Y) => {
      We(), U?.(Y);
    }, H = () => {
      J || de(""), D?.(""), k?.(""), M.current?.focus();
    };
    De(() => {
      if (!ne) return;
      const Y = ($e) => {
        N.current && !N.current.contains($e.target) && ze(!1);
      };
      return document.addEventListener("mousedown", Y), () => document.removeEventListener("mousedown", Y);
    }, [ne, ze]), De(() => {
      if (!ne) return;
      const Y = ($e) => {
        $e.key === "Escape" && ze(!1);
      };
      return document.addEventListener("keydown", Y), () => document.removeEventListener("keydown", Y);
    }, [ne, ze]), De(() => {
      if (O && ae !== null) {
        const Y = me;
        (Y === null || Math.abs(ae - Y) > 1e-9) && ye(ae);
      }
    }, [O, ae, me, ye]);
    const y = q(
      (Y) => {
        M.current = Y, typeof d == "function" ? d(Y) : d && (d.current = Y);
      },
      [d]
    ), E = J ? s ? pr(s, i) : "" : se, K = J ? !!s : se.length > 0, Q = O || ne, G = ae ?? me ?? 0, fe = _r(G), ke = _h[i], je = ["days", "hours", "minutes", "seconds"].filter(
      (Y) => fr[Y] >= ke && (Y === "days" ? h : Y === "hours" ? v : Y === "minutes" ? f : C)
    ), tt = n === "xs" ? Pe.dtTimespanpickerInputXs : n === "sm" ? Pe.dtTimespanpickerInputSm : n === "lg" ? Pe.dtTimespanpickerInputLg : n === "xl" ? Pe.dtTimespanpickerInputXl : Pe.dtTimespanpickerInputMd, bt = /* @__PURE__ */ w("div", { className: Pe.dtTimespanpickerPanel, children: [
      /* @__PURE__ */ t("div", { className: Pe.dtTimespanpickerPreview, "aria-live": "polite", children: Un(G, i) }),
      /* @__PURE__ */ t("div", { className: Pe.dtTimespanpickerUnits, children: je.map((Y) => /* @__PURE__ */ w("label", { className: Pe.dtTimespanpickerUnit, children: [
        /* @__PURE__ */ t("span", { className: Pe.dtTimespanpickerUnitLabel, children: Pn[Y] }),
        /* @__PURE__ */ w("span", { className: Pe.dtTimespanpickerUnitControl, children: [
          /* @__PURE__ */ t(
            "input",
            {
              className: Pe.dtTimespanpickerUnitInput,
              inputMode: "decimal",
              value: W?.[Y] ?? String(fe[Y]),
              onChange: ($e) => Ge(Y, $e.target.value),
              onKeyDown: ($e) => et(Y, $e),
              onBlur: () => be(Y)
            }
          ),
          /* @__PURE__ */ w("span", { className: Pe.dtTimespanpickerUnitButtons, children: [
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${Pn[Y].toLowerCase()}`,
                onClick: () => {
                  be(Y), Xe(Y, 1);
                },
                children: /* @__PURE__ */ t(Ve, { name: "chevron-up", size: 11 })
              }
            ),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${Pn[Y].toLowerCase()}`,
                onClick: () => {
                  be(Y), Xe(Y, -1);
                },
                children: /* @__PURE__ */ t(Ve, { name: "chevron-down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, Y)) }),
      /* @__PURE__ */ t("div", { className: Pe.dtTimespanpickerFooter, children: /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: Pe.dtTimespanpickerOk,
          onClick: () => ze(!0),
          children: "OK"
        }
      ) })
    ] });
    return /* @__PURE__ */ w(
      "div",
      {
        ref: N,
        className: [
          Pe.dtTimespanpicker,
          O ? Pe.dtTimespanpickerInline : null,
          S
        ].filter(Boolean).join(" "),
        children: [
          !O && /* @__PURE__ */ w(Oe, { children: [
            /* @__PURE__ */ t(
              "input",
              {
                ref: y,
                type: "text",
                autoComplete: "off",
                value: E,
                disabled: p,
                placeholder: z,
                tabIndex: x,
                role: "combobox",
                "aria-label": _ ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": ne,
                "aria-controls": T,
                "aria-invalid": r || void 0,
                className: [
                  Pe.dtTimespanpickerInput,
                  tt,
                  r ? Pe.dtTimespanpickerInputInvalid : null
                ].filter(Boolean).join(" "),
                onChange: Ze,
                onKeyDown: Fe,
                onBlur: Ye,
                ...I
              }
            ),
            $ && !p && K && /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                className: Pe.dtTimespanpickerClear,
                "aria-label": c ?? "Clear",
                onClick: H,
                children: /* @__PURE__ */ t(Ve, { name: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ t(
              "button",
              {
                ref: L,
                type: "button",
                className: [
                  Pe.dtTimespanpickerTrigger,
                  ne ? Pe.dtTimespanpickerTriggerOpen : null
                ].filter(Boolean).join(" "),
                "aria-label": g ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": ne,
                "aria-controls": T,
                disabled: p,
                onClick: Me,
                children: /* @__PURE__ */ t(Ve, { name: "clock", size: 16 })
              }
            )
          ] }),
          Q && /* @__PURE__ */ t(
            "div",
            {
              id: T,
              role: O ? void 0 : "dialog",
              "aria-label": _ ?? "Time span picker",
              className: O ? void 0 : Pe.dtTimespanpickerPopup,
              children: bt
            }
          )
        ]
      }
    );
  }
), hh = "_wrapper_gfb15_1", mh = "_cells_gfb15_8", gh = "_cell_gfb15_8", bh = "_invalid_gfb15_63", yh = "_live_gfb15_72", Vt = {
  wrapper: hh,
  cells: mh,
  cell: gh,
  "cell-sm": "_cell-sm_gfb15_45",
  "cell-md": "_cell-md_gfb15_51",
  "cell-lg": "_cell-lg_gfb15_57",
  invalid: bh,
  live: yh
};
function hr(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const q0 = qe(
  function({
    length: n = 6,
    value: r,
    defaultValue: s,
    onChange: o,
    invalid: l = !1,
    size: u = "md",
    autoFocus: a = !1,
    disabled: i = !1,
    label: h = "Security code",
    liveAnnounce: v = !0,
    className: f,
    "aria-label": C
  }, $) {
    const O = Ue(), D = r !== void 0, [k, b] = V(hr(s).join("")), m = D ? hr(r).join("") : k, p = Array.from({ length: n }, (I, d) => m[d] ?? ""), z = le([]), [_, g] = V(""), c = (I) => {
      D || b(I), o?.(I);
    }, x = (I) => {
      const d = z.current[I];
      d && !d.disabled && (d.focus(), d.select());
    }, S = (I, d) => {
      const N = d.replace(/\D/g, "").slice(-1), M = m.split("");
      if (N) {
        M[I] = N;
        const L = M.join("").slice(0, n);
        c(L), L.length < n ? x(I + 1) : v && g("Code complete");
      }
    }, U = (I, d) => {
      if (d.key === "Backspace") {
        if (d.preventDefault(), m[I]) {
          const N = m.split("");
          N[I] = "", c(N.join(""));
        } else if (I > 0) {
          const N = m.split("");
          N[I - 1] = "", c(N.join("")), x(I - 1);
        }
      } else d.key === "ArrowLeft" && I > 0 ? (d.preventDefault(), x(I - 1)) : d.key === "ArrowRight" && I < n - 1 ? (d.preventDefault(), x(I + 1)) : d.key === "Home" ? (d.preventDefault(), x(0)) : d.key === "End" && (d.preventDefault(), x(n - 1));
    }, R = (I, d) => {
      d.preventDefault();
      const N = d.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!N) return;
      const M = m.split("");
      let L = 0;
      for (let J = 0; J < N.length && I + J < n; J++)
        M[I + J] = N[J] ?? "", L++;
      const T = M.join("");
      c(T), T.length >= n ? v && g("Code complete") : x(I + L);
    };
    return /* @__PURE__ */ w(
      "div",
      {
        className: [Vt.wrapper, f].filter(Boolean).join(" "),
        role: "group",
        "aria-label": C ?? h,
        "data-invalid": l || void 0,
        children: [
          /* @__PURE__ */ t("div", { className: [Vt.cells, Vt[u]].join(" "), children: p.map((I, d) => /* @__PURE__ */ t(
            "input",
            {
              ref: (N) => {
                z.current[d] = N, d === 0 && $ && (typeof $ == "function" ? $(N) : $.current = N);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: I,
              disabled: i,
              "aria-label": `Digit ${d + 1} of ${n}`,
              "aria-invalid": l && I !== "" ? !0 : void 0,
              autoFocus: a && d === 0,
              className: [Vt.cell, Vt[`cell-${u}`], l ? Vt.invalid : null].filter(Boolean).join(" "),
              onChange: (N) => S(d, N.target.value),
              onKeyDown: (N) => U(d, N),
              onPaste: (N) => R(d, N),
              onFocus: (N) => N.target.select(),
              onBlur: () => {
                v && g("");
              }
            },
            d
          )) }),
          v && /* @__PURE__ */ t("span", { id: `${O}-live`, role: "status", "aria-live": "polite", className: Vt.live, children: _ })
        ]
      }
    );
  }
), vh = "_wrapper_26gop_1", xh = "_header_26gop_7", kh = "_label_26gop_15", wh = "_clear_26gop_22", $h = "_canvas_26gop_53", Nh = "_disabled_26gop_69", Qt = {
  wrapper: vh,
  header: xh,
  label: kh,
  clear: wh,
  canvas: $h,
  disabled: Nh
}, F0 = qe(
  function({
    value: n,
    defaultValue: r,
    onChange: s,
    penColor: o = "#1c1c1c",
    penWidth: l = 2.5,
    clearLabel: u = "Clear",
    ariaLabel: a = "Signature",
    width: i,
    height: h = 140,
    disabled: v = !1,
    className: f
  }, C) {
    const $ = le(null), O = le(!1), D = le(!1), k = le({ x: 0, y: 0 });
    De(() => {
      const c = $.current;
      if (!c) return;
      const x = window.devicePixelRatio || 1, S = Math.round((i ?? c.clientWidth) * x), U = Math.round(h * x);
      (c.width !== S || c.height !== U) && (c.width = S, c.height = U);
      const R = c.getContext("2d");
      if (!R) return;
      R.setTransform(x, 0, 0, x, 0, 0), R.lineWidth = l, R.strokeStyle = o, R.lineCap = "round", R.lineJoin = "round";
      const I = n ?? r;
      if (I) {
        const d = new Image();
        d.onload = () => {
          R.drawImage(d, 0, 0, c.clientWidth, h);
        }, d.src = I;
      }
    }, [n, r, o, l, i, h]);
    const b = () => {
      const c = $.current;
      if (!c) return;
      const x = c.toDataURL("image/png");
      s?.(x);
    }, m = () => {
      const c = $.current;
      if (!c) return;
      const x = c.getContext("2d");
      x && x.clearRect(0, 0, c.width, c.height), s?.("");
    };
    Xn(C, () => ({
      clear: m,
      toDataURL: (c = "image/png", x) => $.current?.toDataURL(c, x) ?? ""
    }));
    const p = (c) => {
      const x = c.currentTarget.getBoundingClientRect();
      return { x: c.clientX - x.left, y: c.clientY - x.top };
    }, z = (c) => {
      v || (c.preventDefault(), typeof c.currentTarget.setPointerCapture == "function" && c.currentTarget.setPointerCapture(c.pointerId), O.current = !0, D.current = !1, k.current = p(c));
    }, _ = (c) => {
      if (!O.current) return;
      c.preventDefault();
      const x = c.currentTarget.getContext("2d");
      if (!x) return;
      const S = p(c);
      x.beginPath(), x.moveTo(k.current.x, k.current.y), x.lineTo(S.x, S.y), x.stroke(), k.current = S, D.current = !0;
    }, g = (c) => {
      O.current && (c.preventDefault(), O.current = !1, D.current && b());
    };
    return /* @__PURE__ */ w("div", { className: [Qt.wrapper, f, v ? Qt.disabled : null].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ w("div", { className: Qt.header, children: [
        /* @__PURE__ */ t("span", { className: Qt.label, children: a }),
        /* @__PURE__ */ t("button", { type: "button", className: Qt.clear, onClick: m, disabled: v, children: u })
      ] }),
      /* @__PURE__ */ t(
        "canvas",
        {
          ref: $,
          role: "img",
          "aria-label": a,
          "aria-disabled": v || void 0,
          style: { width: i ? `${i}px` : void 0, height: `${h}px` },
          className: Qt.canvas,
          onPointerDown: z,
          onPointerMove: _,
          onPointerUp: g,
          onPointerCancel: g
        }
      )
    ] });
  }
), Sh = "_wrapper_1v5uo_1", Dh = "_trigger_1v5uo_7", zh = "_list_1v5uo_35", Ch = "_row_1v5uo_44", Oh = "_name_1v5uo_59", Ih = "_size_1v5uo_68", Mh = "_progress_1v5uo_74", jh = "_fill_1v5uo_82", Eh = "_status_1v5uo_99", Th = "_remove_1v5uo_106", Nt = {
  wrapper: Sh,
  trigger: Dh,
  list: zh,
  row: Ch,
  name: Oh,
  size: Ih,
  progress: Mh,
  fill: jh,
  status: Eh,
  remove: Th
};
function Ah(e) {
  return e > 0 ? `${Math.max(1, Math.round(e / 1024))} KB` : "0 KB";
}
const K0 = qe(function({
  url: n,
  multiple: r = !1,
  parameterName: s = "files",
  auto: o = !0,
  headers: l,
  accept: u,
  chooseText: a = "Upload",
  children: i,
  onProgress: h,
  onComplete: v,
  onError: f
}, C) {
  const $ = le(null), [O, D] = V([]), k = le(/* @__PURE__ */ new Map()), b = (g, c) => {
    D((x) => x.map((S) => S.file.name === g ? { ...S, ...c } : S));
  }, m = (g) => {
    if (!n) return;
    const c = new XMLHttpRequest();
    k.current.set(g.file.name, c);
    const x = new FormData();
    if (x.append(s, g.file), c.upload.addEventListener("progress", (S) => {
      if (!S.lengthComputable) return;
      const U = Math.round(S.loaded / S.total * 100);
      b(g.file.name, { state: "uploading", progress: U }), h?.(g.file.name, U);
    }), c.addEventListener("load", () => {
      c.status >= 200 && c.status < 300 ? (b(g.file.name, { state: "complete", progress: 100 }), v?.(g.file.name)) : (b(g.file.name, { state: "error", message: `HTTP ${c.status}` }), f?.(g.file.name, `HTTP ${c.status}`));
    }), c.addEventListener("error", () => {
      b(g.file.name, { state: "error", message: "Network error" }), f?.(g.file.name, "Network error");
    }), l)
      for (const [S, U] of Object.entries(l))
        c.setRequestHeader(S, U);
    c.open("POST", n), c.send(x), b(g.file.name, { state: "uploading", progress: 0 });
  }, p = (g) => {
    if (!g) return;
    const c = [...g].map((x) => ({
      file: x,
      state: "pending",
      progress: 0
    }));
    D((x) => [...x, ...c]), $.current && ($.current.value = ""), o && c.forEach(m);
  }, z = (g) => {
    k.current.get(g)?.abort(), k.current.delete(g), D((x) => x.filter((S) => S.file.name !== g));
  }, _ = i ?? /* @__PURE__ */ w("button", { type: "button", className: Nt.trigger, onClick: () => $.current?.click(), children: [
    /* @__PURE__ */ t(Ve, { name: "upload", size: 14 }),
    a
  ] });
  return Xn(C, () => ({
    open: () => $.current?.click(),
    upload: () => O.forEach((g) => g.state === "pending" ? m(g) : null)
  })), /* @__PURE__ */ w("div", { className: Nt.wrapper, children: [
    _,
    /* @__PURE__ */ t(
      "input",
      {
        ref: $,
        type: "file",
        hidden: !0,
        multiple: r,
        accept: u,
        "data-testid": "upload-input",
        onChange: (g) => p(g.target.files)
      }
    ),
    !i && O.length > 0 && /* @__PURE__ */ t("ul", { className: Nt.list, children: O.map(({ file: g, state: c, progress: x, message: S }) => /* @__PURE__ */ w("li", { className: Nt.row, "data-state": c, "data-testid": "upload-row", children: [
      /* @__PURE__ */ t("span", { className: Nt.name, children: g.name }),
      /* @__PURE__ */ t("span", { className: Nt.size, children: Ah(g.size) }),
      /* @__PURE__ */ t(
        "span",
        {
          className: Nt.progress,
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": x,
          children: /* @__PURE__ */ t("span", { className: Nt.fill, style: { width: `${x}%` } })
        }
      ),
      /* @__PURE__ */ t("span", { className: Nt.status, role: "status", children: c === "uploading" ? "Uploading" : c === "complete" ? "Complete" : c === "error" ? S ?? "Failed" : "Pending" }),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: Nt.remove,
          "aria-label": `Remove ${g.name}`,
          onClick: () => z(g.name),
          children: /* @__PURE__ */ t(Ve, { name: "close", size: 14 })
        }
      )
    ] }, g.name)) })
  ] });
}), Lh = "_zone_ws0th_1", Rh = "_dragging_ws0th_23", Bh = "_caption_ws0th_28", Ph = "_browse_ws0th_40", qh = "_disabled_ws0th_67", mn = {
  zone: Lh,
  dragging: Rh,
  caption: Bh,
  browse: Ph,
  disabled: qh
};
function Fh(e, n) {
  return n ? n.split(",").some((r) => {
    if (r = r.trim(), !r) return !1;
    if (r.startsWith(".")) return e.name.toLowerCase().endsWith(r.toLowerCase());
    if (r.endsWith("/*")) {
      const s = r.slice(0, -1);
      return e.type.startsWith(s);
    }
    return e.type === r;
  }) : !0;
}
const H0 = qe(function({
  accept: n,
  multiple: r = !1,
  onDrop: s,
  label: o = "Drop files here or browse",
  dragLabel: l = "Drop to attach",
  browseText: u = "Browse",
  disabled: a = !1,
  className: i
}, h) {
  const v = le(null), [f, C] = V(!1), $ = (m) => {
    if (!m || m.length === 0) return;
    const p = [...m].filter((z) => Fh(z, n ?? ""));
    p.length !== 0 && s?.(p);
  }, O = (m) => {
    a || (m.preventDefault(), C(!0));
  }, D = (m) => {
    a || (m.preventDefault(), m.dataTransfer.dropEffect = "copy", C(!0));
  }, k = (m) => {
    a || m.currentTarget.contains(m.relatedTarget) || C(!1);
  }, b = (m) => {
    a || (m.preventDefault(), C(!1), $(m.dataTransfer.files));
  };
  return Xn(h, () => ({
    open: () => v.current?.click()
  })), /* @__PURE__ */ w(
    "div",
    {
      role: "region",
      "aria-label": o,
      className: [mn.zone, f ? mn.dragging : null, a ? mn.disabled : null, i].filter(Boolean).join(" "),
      onDragEnter: O,
      onDragOver: D,
      onDragLeave: k,
      onDrop: b,
      children: [
        /* @__PURE__ */ t("p", { className: mn.caption, children: f ? l : o }),
        !a && /* @__PURE__ */ t("button", { type: "button", className: mn.browse, onClick: () => v.current?.click(), children: u }),
        /* @__PURE__ */ t(
          "input",
          {
            ref: v,
            type: "file",
            hidden: !0,
            multiple: r,
            accept: n,
            "data-testid": "dropzone-input",
            onChange: (m) => {
              $(m.target.files), m.target.value = "";
            }
          }
        )
      ]
    }
  );
}), Kh = "_root_zkoiq_1", Hh = "_menubar_zkoiq_5", Wh = "_horizontal_zkoiq_15", Uh = "_vertical_zkoiq_20", Vh = "_itemWrapper_zkoiq_25", Xh = "_item_zkoiq_25", Gh = "_disabled_zkoiq_61", Yh = "_icon_zkoiq_68", Zh = "_text_zkoiq_75", Jh = "_caret_zkoiq_79", Qh = "_hasChildren_zkoiq_85", e1 = "_submenu_zkoiq_94", t1 = "_submenuItem_zkoiq_118", ot = {
  root: Kh,
  menubar: Hh,
  horizontal: Wh,
  vertical: Uh,
  itemWrapper: Vh,
  item: Xh,
  disabled: Gh,
  icon: Yh,
  text: Zh,
  caret: Jh,
  hasChildren: Qh,
  submenu: e1,
  submenuItem: t1
};
function gn(e) {
  return !!e.disabled;
}
function W0({
  items: e,
  orientation: n = "horizontal",
  onClick: r,
  Click: s,
  ariaLabel: o = "Menu",
  className: l
}) {
  const u = Ue(), a = le(null), i = le(null), [h, v] = V(null), f = le(0), C = le(null), $ = q(
    (b) => {
      const m = { text: b.text, value: b.value, path: b.path };
      (r ?? s)?.(m);
    },
    [r, s]
  ), O = (b, m) => {
    if (!gn(b)) {
      if (b.children && b.children.length > 0) {
        const p = h === m, z = Date.now() - f.current < 600;
        if (p && z) {
          f.current = 0;
          return;
        }
        v((_) => _ === m ? null : m);
        return;
      }
      $(b), v(null);
    }
  }, D = (b) => {
    gn(b) || b.children && b.children.length > 0 || ($(b), v(null));
  };
  De(() => {
    if (h == null) return;
    const b = (m) => {
      a.current && !a.current.contains(m.target) && v(null);
    };
    return document.addEventListener("mousedown", b), () => document.removeEventListener("mousedown", b);
  }, [h]), De(() => {
    if (C.current != null && h === C.current) {
      const b = `${u}-submenu-${h}`;
      document.getElementById(b)?.querySelector('[role="menuitem"]:not([aria-disabled="true"])')?.focus(), C.current = null;
    }
  }, [h, u]);
  const k = (b) => {
    const m = i.current;
    if (!m) return;
    const p = Array.from(
      m.querySelectorAll('[data-top="true"]')
    ).filter((g) => !g.hasAttribute("disabled") && g.getAttribute("aria-disabled") !== "true");
    if (h != null) {
      const g = `${u}-submenu-${h}`, c = document.getElementById(g);
      if (c) {
        const x = Array.from(c.querySelectorAll('[role="menuitem"]')).filter(
          (R) => R.getAttribute("aria-disabled") !== "true"
        ), S = document.activeElement, U = S ? x.indexOf(S) : -1;
        if (b.key === "ArrowDown") {
          b.preventDefault(), U === -1 ? x[0]?.focus() : x[(U + 1) % x.length]?.focus();
          return;
        }
        if (b.key === "ArrowUp") {
          b.preventDefault(), U === -1 ? x[x.length - 1]?.focus() : x[(U - 1 + x.length) % x.length]?.focus();
          return;
        }
        if (b.key === "Escape") {
          b.preventDefault(), v(null), m.querySelector(`[data-top="true"][data-index="${h}"]`)?.focus();
          return;
        }
        if (b.key === "Enter" || b.key === " ")
          return;
      }
      if (b.key === "Escape") {
        b.preventDefault(), v(null);
        return;
      }
    }
    const z = document.activeElement, _ = z ? p.indexOf(z) : -1;
    if (b.key === "ArrowRight" || n === "vertical" && b.key === "ArrowDown") {
      if (b.preventDefault(), p.length === 0) return;
      const g = _ === -1 ? 0 : (_ + 1) % p.length;
      p[g]?.focus();
      return;
    }
    if (b.key === "ArrowLeft" || n === "vertical" && b.key === "ArrowUp") {
      if (b.preventDefault(), p.length === 0) return;
      const g = _ === -1 ? p.length - 1 : (_ - 1 + p.length) % p.length;
      p[g]?.focus();
      return;
    }
    if (b.key === "ArrowDown") {
      if (_ >= 0) {
        const g = z?.getAttribute("data-index"), c = g != null ? Number(g) : -1, x = c >= 0 ? e[c] : void 0;
        x?.children && x.children.length > 0 && !gn(x) && (b.preventDefault(), C.current = c, v(c));
      }
      return;
    }
    if (b.key === "Home") {
      b.preventDefault(), p[0]?.focus();
      return;
    }
    if (b.key === "End") {
      b.preventDefault(), p[p.length - 1]?.focus();
      return;
    }
  };
  return /* @__PURE__ */ t(
    "nav",
    {
      ref: a,
      "aria-label": o,
      className: [ot.root, ot[n], l].filter(Boolean).join(" "),
      children: /* @__PURE__ */ t(
        "div",
        {
          ref: i,
          role: "menubar",
          "aria-label": o,
          className: ot.menubar,
          onKeyDown: k,
          children: e.map((b, m) => {
            const p = !!b.children && b.children.length > 0, z = h === m, _ = gn(b), g = `${u}-submenu-${m}`;
            return /* @__PURE__ */ w(
              "div",
              {
                className: ot.itemWrapper,
                onMouseEnter: () => {
                  n === "horizontal" && p && !_ && (f.current = Date.now(), v(m));
                },
                onMouseLeave: () => {
                  n === "horizontal" && p && v((c) => c === m ? null : c);
                },
                "data-dt-menu-item": "",
                children: [
                  /* @__PURE__ */ w(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      "data-top": "true",
                      "data-index": m,
                      "data-dt-menu-item": "",
                      "aria-disabled": _ || void 0,
                      "aria-haspopup": p ? "menu" : void 0,
                      "aria-expanded": p ? z : void 0,
                      "aria-controls": p ? g : void 0,
                      "aria-current": (b.path && !p, void 0),
                      tabIndex: _ ? -1 : 0,
                      disabled: _,
                      className: [ot.item, _ ? ot.disabled : null, p ? ot.hasChildren : null].filter(Boolean).join(" "),
                      onClick: () => O(b, m),
                      children: [
                        b.icon ? /* @__PURE__ */ t("span", { className: ot.icon, "aria-hidden": "true", children: b.icon }) : null,
                        /* @__PURE__ */ t("span", { className: ot.text, children: b.text }),
                        p ? /* @__PURE__ */ t("span", { className: ot.caret, "aria-hidden": "true", children: "▾" }) : null
                      ]
                    }
                  ),
                  p && z ? /* @__PURE__ */ t(
                    "div",
                    {
                      id: g,
                      role: "menu",
                      className: ot.submenu,
                      "data-dt-menu-submenu": "",
                      "aria-label": b.text,
                      children: b.children?.map((c, x) => {
                        const S = gn(c), U = !!c.children && c.children.length > 0;
                        return /* @__PURE__ */ w(
                          "button",
                          {
                            type: "button",
                            role: "menuitem",
                            "aria-disabled": S || void 0,
                            "aria-haspopup": U ? "menu" : void 0,
                            tabIndex: S ? -1 : 0,
                            disabled: S,
                            className: [ot.submenuItem, S ? ot.disabled : null].filter(Boolean).join(" "),
                            onClick: () => D(c),
                            children: [
                              c.icon ? /* @__PURE__ */ t("span", { className: ot.icon, "aria-hidden": "true", children: c.icon }) : null,
                              /* @__PURE__ */ t("span", { className: ot.text, children: c.text })
                            ]
                          },
                          `${c.text}-${x}`
                        );
                      })
                    }
                  ) : null
                ]
              },
              `${b.text}-${m}`
            );
          })
        }
      )
    }
  );
}
const n1 = "_root_f3qrl_1", r1 = "_list_f3qrl_9", s1 = "_item_f3qrl_14", o1 = "_trigger_f3qrl_18", a1 = "_disabled_f3qrl_44", l1 = "_expanded_f3qrl_51", c1 = "_icon_f3qrl_55", i1 = "_text_f3qrl_66", d1 = "_caret_f3qrl_73", u1 = "_open_f3qrl_80", f1 = "_submenu_f3qrl_84", _1 = "_submenuItem_f3qrl_93", p1 = "_nestedWrapper_f3qrl_122", h1 = "_nestedTrigger_f3qrl_127", m1 = "_nestedMenu_f3qrl_152", g1 = "_iconOnly_f3qrl_160", Ie = {
  root: n1,
  list: r1,
  item: s1,
  trigger: o1,
  disabled: a1,
  expanded: l1,
  icon: c1,
  text: i1,
  caret: d1,
  open: u1,
  submenu: f1,
  submenuItem: _1,
  nestedWrapper: p1,
  nestedTrigger: h1,
  nestedMenu: m1,
  iconOnly: g1
};
function b1({
  item: e,
  baseId: n,
  parentKey: r,
  onEmit: s
}) {
  const o = !!e.children && e.children.length > 0, [l, u] = V(!1), a = `${n}-nested-${r}`, i = !!e.disabled, h = () => {
    if (!i) {
      if (o) {
        u((f) => !f);
        return;
      }
      s({ text: e.text, value: e.value, path: e.path });
    }
  }, v = (f) => {
    f.key === "Enter" || f.key === " " ? (f.preventDefault(), h()) : f.key === "Escape" && l && (f.preventDefault(), u(!1));
  };
  return o ? /* @__PURE__ */ w("div", { className: Ie.nestedWrapper, children: [
    /* @__PURE__ */ w(
      "button",
      {
        type: "button",
        "aria-expanded": l,
        "aria-controls": a,
        "aria-disabled": i || void 0,
        disabled: i,
        tabIndex: i ? -1 : 0,
        className: [Ie.nestedTrigger, i ? Ie.disabled : null].filter(Boolean).join(" "),
        onClick: h,
        onKeyDown: v,
        children: [
          e.icon ? /* @__PURE__ */ t("span", { className: Ie.icon, "aria-hidden": "true", children: e.icon }) : null,
          /* @__PURE__ */ t("span", { className: Ie.text, children: e.text }),
          /* @__PURE__ */ t("span", { className: [Ie.caret, l ? Ie.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" })
        ]
      }
    ),
    l ? /* @__PURE__ */ t("div", { id: a, role: "menu", className: Ie.nestedMenu, children: e.children?.map((f, C) => {
      const $ = !!f.disabled;
      return /* @__PURE__ */ w(
        "div",
        {
          role: "menuitem",
          "aria-disabled": $ || void 0,
          tabIndex: $ ? -1 : 0,
          className: [Ie.submenuItem, $ ? Ie.disabled : null].filter(Boolean).join(" "),
          onClick: () => {
            $ || f.children && f.children.length > 0 || s({ text: f.text, value: f.value, path: f.path });
          },
          onKeyDown: (O) => {
            if (O.key === "Enter" || O.key === " ") {
              if (O.preventDefault(), $) return;
              s({ text: f.text, value: f.value, path: f.path });
            }
          },
          children: [
            f.icon ? /* @__PURE__ */ t("span", { className: Ie.icon, "aria-hidden": "true", children: f.icon }) : null,
            /* @__PURE__ */ t("span", { className: Ie.text, children: f.text })
          ]
        },
        `${f.text}-${C}`
      );
    }) }) : null
  ] }) : /* @__PURE__ */ w(
    "div",
    {
      role: "menuitem",
      "aria-disabled": i || void 0,
      tabIndex: i ? -1 : 0,
      className: [Ie.submenuItem, i ? Ie.disabled : null].filter(Boolean).join(" "),
      onClick: () => {
        i || s({ text: e.text, value: e.value, path: e.path });
      },
      onKeyDown: (f) => {
        if (f.key === "Enter" || f.key === " ") {
          if (f.preventDefault(), i) return;
          s({ text: e.text, value: e.value, path: e.path });
        }
      },
      children: [
        e.icon ? /* @__PURE__ */ t("span", { className: Ie.icon, "aria-hidden": "true", children: e.icon }) : null,
        /* @__PURE__ */ t("span", { className: Ie.text, children: e.text })
      ]
    }
  );
}
function U0({
  items: e,
  multiple: n,
  Multiple: r,
  showArrow: s,
  ShowArrow: o,
  displayStyle: l,
  DisplayStyle: u,
  onClick: a,
  Click: i,
  ariaLabel: h = "Panel menu",
  className: v
}) {
  const f = Ue(), C = n ?? r ?? !1, $ = s ?? o ?? !0, O = l ?? u ?? "iconAndText", [D, k] = V([]), b = q(
    (z) => {
      const _ = { text: z.text, value: z.value, path: z.path };
      (a ?? i)?.(_);
    },
    [a, i]
  ), m = (z, _, g) => {
    if (!g.disabled) {
      if (_) {
        k((c) => c.includes(z) ? c.filter((S) => S !== z) : C ? [...c, z] : [z]);
        return;
      }
      b(g);
    }
  }, p = (z) => {
    const _ = z.target;
    if (!(z.key === "Enter" || z.key === " ")) {
      if (z.key === "Escape") {
        const g = _.getAttribute("aria-controls");
        if (g) {
          const c = g.match(/-panel-(\d+)$/);
          if (c) {
            const x = Number(c[1]);
            k((S) => S.filter((U) => U !== x));
          }
        } else {
          const c = _.closest('[role="menu"]');
          if (c) {
            const S = c.id.match(/-panel-(\d+)$/);
            if (S) {
              const U = Number(S[1]);
              k((I) => I.filter((d) => d !== U)), document.getElementById(`${f}-trigger-${U}`)?.focus();
            }
          }
        }
        z.preventDefault();
        return;
      }
      if (z.key === "ArrowDown" || z.key === "ArrowUp") {
        const g = Array.from(
          z.currentTarget.querySelectorAll('button, [role="menuitem"]')
        ).filter((U) => !U.hasAttribute("disabled") && U.getAttribute("aria-disabled") !== "true"), c = g.indexOf(_);
        if (c === -1) return;
        z.preventDefault();
        const x = z.key === "ArrowDown" ? 1 : -1;
        g[(c + x + g.length) % g.length]?.focus();
      }
    }
  };
  return /* @__PURE__ */ t(
    "nav",
    {
      "aria-label": h,
      className: [
        Ie.root,
        O === "icon" ? Ie.iconOnly : Ie.iconAndText,
        v
      ].filter(Boolean).join(" "),
      onKeyDown: p,
      children: /* @__PURE__ */ t("div", { className: Ie.list, role: "presentation", children: e.map((z, _) => {
        const g = !!z.children && z.children.length > 0, c = D.includes(_), x = !!z.disabled, S = `${f}-panel-${_}`, U = `${f}-trigger-${_}`;
        return /* @__PURE__ */ w("div", { className: Ie.item, children: [
          /* @__PURE__ */ w(
            "button",
            {
              type: "button",
              id: U,
              "aria-expanded": g ? c : void 0,
              "aria-controls": g ? S : void 0,
              "aria-disabled": x || void 0,
              disabled: x,
              tabIndex: x ? -1 : 0,
              className: [
                Ie.trigger,
                x ? Ie.disabled : null,
                c ? Ie.expanded : null
              ].filter(Boolean).join(" "),
              onClick: () => m(_, g, z),
              children: [
                z.icon ? /* @__PURE__ */ t("span", { className: Ie.icon, "aria-hidden": "true", children: z.icon }) : null,
                O === "iconAndText" ? /* @__PURE__ */ t("span", { className: Ie.text, children: z.text }) : /* @__PURE__ */ t("span", { className: Ie.text, "aria-label": z.text, children: z.icon ? null : z.text.slice(0, 1) }),
                g && $ ? /* @__PURE__ */ t("span", { className: [Ie.caret, c ? Ie.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" }) : null
              ]
            }
          ),
          g && c ? /* @__PURE__ */ t("div", { id: S, role: "menu", className: Ie.submenu, "aria-labelledby": U, children: z.children?.map((R, I) => /* @__PURE__ */ t(
            b1,
            {
              item: R,
              baseId: f,
              parentKey: `${_}-${I}`,
              onEmit: b
            },
            `${R.text}-${I}`
          )) }) : null
        ] }, `${z.text}-${_}`);
      }) })
    }
  );
}
const y1 = "_root_10qer_1", v1 = "_trigger_10qer_7", x1 = "_defaultTrigger_10qer_40", k1 = "_avatar_10qer_46", w1 = "_menu_10qer_58", $1 = "_item_10qer_74", N1 = "_disabled_10qer_88", S1 = "_active_10qer_97", D1 = "_icon_10qer_107", z1 = "_text_10qer_114", St = {
  root: y1,
  trigger: v1,
  defaultTrigger: x1,
  avatar: k1,
  menu: w1,
  item: $1,
  disabled: N1,
  active: S1,
  icon: D1,
  text: z1
};
function V0({
  items: e,
  trigger: n,
  Template: r,
  onClick: s,
  Click: o,
  ariaLabel: l = "Profile menu",
  className: u
}) {
  const a = Ue(), i = `${a}-menu`, h = le(null), v = le(null), [f, C] = V(!1), [$, O] = V(-1), D = n ?? r, k = e.map((c, x) => c.disabled ? -1 : x).filter((c) => c >= 0), b = q(
    (c) => {
      if (c.disabled) return;
      const x = { text: c.text, path: c.path };
      (s ?? o)?.(x), C(!1), v.current?.focus();
    },
    [s, o]
  ), m = q(() => {
    O(k[0] ?? -1), C(!0);
  }, [k]), p = q(() => {
    C(!1), O(-1), v.current?.focus();
  }, []);
  De(() => {
    if (!f) return;
    const c = (x) => {
      h.current && !h.current.contains(x.target) && (C(!1), O(-1));
    };
    return document.addEventListener("mousedown", c), () => document.removeEventListener("mousedown", c);
  }, [f]), De(() => {
    if (!f) return;
    const c = (x) => {
      x.key === "Escape" && (x.preventDefault(), p());
    };
    return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
  }, [f, p]);
  const z = (c) => {
    if (k.length === 0) return;
    const x = k.indexOf($), S = x === -1 ? 0 : (x + c + k.length) % k.length, U = k[S];
    U != null && O(U);
  }, _ = (c) => {
    if (!f) {
      (c.key === "ArrowDown" || c.key === "Enter" || c.key === " ") && (c.preventDefault(), m());
      return;
    }
    switch (c.key) {
      case "Escape":
        c.preventDefault(), p();
        break;
      case "ArrowDown":
        c.preventDefault(), z(1);
        break;
      case "ArrowUp":
        c.preventDefault(), z(-1);
        break;
      case "Home":
        c.preventDefault(), k[0] != null && O(k[0]);
        break;
      case "End":
        c.preventDefault(), k[k.length - 1] != null && O(k[k.length - 1]);
        break;
      case "Enter":
      case " ":
        if (c.preventDefault(), $ >= 0) {
          const x = e[$];
          x && !x.disabled && b(x);
        }
        break;
      case "Tab":
        C(!1), O(-1);
        break;
    }
  }, g = (c) => {
    switch (c.key) {
      case "ArrowDown":
        c.preventDefault(), z(1);
        break;
      case "ArrowUp":
        c.preventDefault(), z(-1);
        break;
      case "Home":
        c.preventDefault(), k[0] != null && O(k[0]);
        break;
      case "End":
        c.preventDefault(), k[k.length - 1] != null && O(k[k.length - 1]);
        break;
      case "Enter":
      case " ":
        if (c.preventDefault(), $ >= 0) {
          const x = e[$];
          x && !x.disabled && b(x);
        }
        break;
      case "Escape":
        c.preventDefault(), p();
        break;
      case "Tab":
        C(!1), O(-1);
        break;
    }
  };
  return /* @__PURE__ */ t(
    "div",
    {
      ref: h,
      className: [St.root, u].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ w("nav", { "aria-label": l, children: [
        /* @__PURE__ */ t(
          "button",
          {
            ref: v,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": f,
            "aria-controls": i,
            "aria-label": l,
            className: St.trigger,
            onClick: () => f ? p() : m(),
            onKeyDown: _,
            children: D ?? /* @__PURE__ */ w("span", { className: St.defaultTrigger, children: [
              /* @__PURE__ */ t("span", { className: St.avatar, "aria-hidden": "true", children: "●" }),
              /* @__PURE__ */ t("span", { children: "Profile" })
            ] })
          }
        ),
        f ? /* @__PURE__ */ t(
          "div",
          {
            id: i,
            role: "menu",
            "aria-label": l,
            "aria-activedescendant": $ >= 0 ? `${a}-item-${$}` : void 0,
            className: St.menu,
            onKeyDown: g,
            tabIndex: -1,
            children: e.map((c, x) => {
              const S = !!c.disabled, U = x === $;
              return /* @__PURE__ */ w(
                "div",
                {
                  id: `${a}-item-${x}`,
                  role: "menuitem",
                  "aria-disabled": S || void 0,
                  tabIndex: S ? -1 : 0,
                  className: [St.item, U ? St.active : null, S ? St.disabled : null].filter(Boolean).join(" "),
                  onClick: () => {
                    S || b(c);
                  },
                  onMouseEnter: () => {
                    S || O(x);
                  },
                  children: [
                    c.icon ? /* @__PURE__ */ t("span", { className: St.icon, "aria-hidden": "true", children: c.icon }) : null,
                    /* @__PURE__ */ t("span", { className: St.text, children: c.text })
                  ]
                },
                `${c.text}-${x}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const C1 = "_root_yzi70_1", O1 = "_bottomRight_yzi70_11", I1 = "_bottomLeft_yzi70_16", M1 = "_topRight_yzi70_21", j1 = "_topLeft_yzi70_26", E1 = "_menu_yzi70_31", T1 = "_itemWrapper_yzi70_48", A1 = "_tooltip_yzi70_54", L1 = "_main_yzi70_76", R1 = "_mainIcon_yzi70_104", B1 = "_mainOpen_yzi70_109", P1 = "_item_yzi70_48", q1 = "_disabled_yzi70_141", F1 = "_itemIcon_yzi70_148", ct = {
  root: C1,
  bottomRight: O1,
  bottomLeft: I1,
  topRight: M1,
  topLeft: j1,
  menu: E1,
  itemWrapper: T1,
  tooltip: A1,
  main: L1,
  mainIcon: R1,
  mainOpen: B1,
  item: P1,
  disabled: q1,
  itemIcon: F1
};
function X0({
  items: e,
  position: n,
  Position: r,
  icon: s = "+",
  onClick: o,
  Click: l,
  ariaLabel: u = "Open menu",
  className: a
}) {
  const i = n ?? r ?? "bottom-right", v = `${Ue()}-menu`, f = le(null), C = le(null), [$, O] = V(!1), D = q(
    (p) => {
      if (p.disabled) return;
      const z = { text: p.text, value: p.value };
      (o ?? l)?.(z), O(!1), C.current?.focus();
    },
    [o, l]
  );
  De(() => {
    if (!$) return;
    const p = (z) => {
      f.current && !f.current.contains(z.target) && O(!1);
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, [$]), De(() => {
    if (!$) return;
    const p = (z) => {
      z.key === "Escape" && (O(!1), C.current?.focus());
    };
    return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [$]);
  const k = i === "bottom-right" ? ct.bottomRight : i === "bottom-left" ? ct.bottomLeft : i === "top-right" ? ct.topRight : ct.topLeft, b = (p) => {
    !$ && (p.key === "Enter" || p.key === " " || p.key === "ArrowDown" || p.key === "ArrowUp") ? (p.preventDefault(), O(!0)) : $ && p.key === "Escape" && (p.preventDefault(), O(!1));
  }, m = (p) => {
    p.key === "Escape" && (p.preventDefault(), O(!1), C.current?.focus());
  };
  return /* @__PURE__ */ w(
    "div",
    {
      ref: f,
      className: [ct.root, k, a].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        $ ? /* @__PURE__ */ t(
          "div",
          {
            id: v,
            role: "menu",
            "aria-label": u,
            className: ct.menu,
            onKeyDown: m,
            children: e.map((p, z) => {
              const _ = !!p.disabled;
              return /* @__PURE__ */ w("div", { className: ct.itemWrapper, children: [
                /* @__PURE__ */ t("span", { className: ct.tooltip, "aria-hidden": "true", children: p.text }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": p.text,
                    "aria-disabled": _ || void 0,
                    title: p.text,
                    disabled: _,
                    tabIndex: _ ? -1 : 0,
                    className: [ct.item, _ ? ct.disabled : null].filter(Boolean).join(" "),
                    onClick: () => D(p),
                    children: /* @__PURE__ */ t("span", { className: ct.itemIcon, "aria-hidden": "true", children: p.icon ?? "•" })
                  }
                )
              ] }, `${p.text}-${z}`);
            })
          }
        ) : null,
        /* @__PURE__ */ t(
          "button",
          {
            ref: C,
            type: "button",
            className: ct.main,
            "aria-haspopup": "menu",
            "aria-expanded": $,
            "aria-controls": v,
            "aria-label": u,
            onClick: () => O((p) => !p),
            onKeyDown: b,
            children: /* @__PURE__ */ t("span", { "aria-hidden": "true", className: [ct.mainIcon, $ ? ct.mainOpen : null].filter(Boolean).join(" "), children: s })
          }
        )
      ]
    }
  );
}
const K1 = "_root_18w60_1", H1 = "_list_18w60_5", W1 = "_item_18w60_15", U1 = "_link_18w60_22", V1 = "_linkButton_18w60_23", X1 = "_current_18w60_24", G1 = "_disabled_18w60_68", Y1 = "_icon_18w60_74", Z1 = "_text_18w60_81", J1 = "_separator_18w60_85", Ke = {
  root: K1,
  list: H1,
  item: W1,
  link: U1,
  linkButton: V1,
  current: X1,
  disabled: G1,
  icon: Y1,
  text: Z1,
  separator: J1
};
function G0({ items: e, onClick: n, Click: r, ariaLabel: s = "Breadcrumb", className: o }) {
  const l = n ?? r, u = (a) => {
    a.disabled || l?.({ text: a.text, path: a.path });
  };
  return /* @__PURE__ */ t("nav", { "aria-label": s, className: [Ke.root, o].filter(Boolean).join(" "), children: /* @__PURE__ */ t("ol", { className: Ke.list, children: e.map((a, i) => {
    const h = i === e.length - 1, v = !!a.disabled;
    return /* @__PURE__ */ w("li", { className: Ke.item, children: [
      h ? v ? /* @__PURE__ */ w(
        "span",
        {
          className: [Ke.current, Ke.disabled].filter(Boolean).join(" "),
          "aria-current": "page",
          "aria-disabled": "true",
          tabIndex: -1,
          children: [
            a.icon ? /* @__PURE__ */ t("span", { className: Ke.icon, "aria-hidden": "true", children: a.icon }) : null,
            a.text
          ]
        }
      ) : a.path ? /* @__PURE__ */ w(
        "a",
        {
          href: a.path,
          className: Ke.link,
          "aria-current": "page",
          onClick: (f) => {
            f.preventDefault(), u(a);
          },
          children: [
            a.icon ? /* @__PURE__ */ t("span", { className: Ke.icon, "aria-hidden": "true", children: a.icon }) : null,
            /* @__PURE__ */ t("span", { className: Ke.text, children: a.text })
          ]
        }
      ) : /* @__PURE__ */ w(
        "span",
        {
          className: Ke.current,
          "aria-current": "page",
          tabIndex: 0,
          children: [
            a.icon ? /* @__PURE__ */ t("span", { className: Ke.icon, "aria-hidden": "true", children: a.icon }) : null,
            a.text
          ]
        }
      ) : v ? /* @__PURE__ */ w(
        "span",
        {
          className: [Ke.link, Ke.disabled].filter(Boolean).join(" "),
          "aria-disabled": "true",
          tabIndex: -1,
          children: [
            a.icon ? /* @__PURE__ */ t("span", { className: Ke.icon, "aria-hidden": "true", children: a.icon }) : null,
            /* @__PURE__ */ t("span", { className: Ke.text, children: a.text })
          ]
        }
      ) : a.path ? /* @__PURE__ */ w(
        "a",
        {
          href: a.path,
          className: Ke.link,
          onClick: (f) => {
            f.preventDefault(), u(a);
          },
          children: [
            a.icon ? /* @__PURE__ */ t("span", { className: Ke.icon, "aria-hidden": "true", children: a.icon }) : null,
            /* @__PURE__ */ t("span", { className: Ke.text, children: a.text })
          ]
        }
      ) : /* @__PURE__ */ w(
        "button",
        {
          type: "button",
          className: Ke.linkButton,
          tabIndex: 0,
          onClick: () => u(a),
          children: [
            a.icon ? /* @__PURE__ */ t("span", { className: Ke.icon, "aria-hidden": "true", children: a.icon }) : null,
            /* @__PURE__ */ t("span", { className: Ke.text, children: a.text })
          ]
        }
      ),
      h ? null : /* @__PURE__ */ t("span", { className: Ke.separator, "aria-hidden": "true", children: "/" })
    ] }, `${a.text}-${i}`);
  }) }) });
}
const Q1 = "_root_13ac5_1", em = "_list_13ac5_5", tm = "_item_13ac5_15", nm = "_connector_13ac5_21", rm = "_connectorCompleted_13ac5_30", sm = "_step_13ac5_34", om = "_active_13ac5_69", am = "_completed_13ac5_75", lm = "_circle_13ac5_79", cm = "_check_13ac5_109", im = "_icon_13ac5_114", dm = "_number_13ac5_119", um = "_text_13ac5_124", it = {
  root: Q1,
  list: em,
  item: tm,
  connector: nm,
  connectorCompleted: rm,
  step: sm,
  active: om,
  completed: am,
  circle: lm,
  check: cm,
  icon: im,
  number: dm,
  text: um
};
function Y0({
  items: e,
  selectedIndex: n,
  SelectedIndex: r,
  defaultIndex: s = 0,
  linear: o,
  Linear: l,
  onChange: u,
  Change: a,
  onSelectedIndexChange: i,
  ariaLabel: h = "Steps",
  className: v
}) {
  const f = o ?? l ?? !1, C = n ?? r, $ = C !== void 0, [O, D] = V(() => Math.min(Math.max(0, C ?? s), Math.max(0, e.length - 1))), b = Math.min(Math.max(0, $ ? C : O), Math.max(0, e.length - 1)), m = le(null), p = q(
    (g) => {
      const c = Math.min(Math.max(0, g), Math.max(0, e.length - 1));
      $ || D(c), (u ?? a ?? i)?.(c);
    },
    [$, u, a, i, e.length]
  ), z = q(
    (g, c) => !!(c.disabled || f && g > b + 1),
    [f, b]
  ), _ = (g) => {
    const c = Array.from(
      g.currentTarget.querySelectorAll("button[data-step]")
    ).filter((U) => U.getAttribute("aria-disabled") !== "true" && !U.disabled), x = document.activeElement, S = x ? c.indexOf(x) : -1;
    if (g.key === "ArrowRight" || g.key === "ArrowDown") {
      if (g.preventDefault(), c.length === 0) return;
      const U = S === -1 ? 0 : (S + 1) % c.length, R = c[U];
      R && R.focus();
    } else if (g.key === "ArrowLeft" || g.key === "ArrowUp") {
      if (g.preventDefault(), c.length === 0) return;
      const U = S === -1 ? c.length - 1 : (S - 1 + c.length) % c.length, R = c[U];
      R && R.focus();
    } else g.key === "Home" ? (g.preventDefault(), c[0]?.focus()) : g.key === "End" && (g.preventDefault(), c[c.length - 1]?.focus());
  };
  return /* @__PURE__ */ t(
    "nav",
    {
      "aria-label": h,
      className: [it.root, v].filter(Boolean).join(" "),
      onKeyDown: _,
      children: /* @__PURE__ */ t("ol", { ref: m, role: "list", className: it.list, children: e.map((g, c) => {
        const x = c === b, S = c < b, U = z(c, g);
        return /* @__PURE__ */ w("li", { role: "listitem", className: it.item, children: [
          c > 0 ? /* @__PURE__ */ t("span", { className: [it.connector, S ? it.connectorCompleted : null].filter(Boolean).join(" "), "aria-hidden": "true" }) : null,
          /* @__PURE__ */ w(
            "button",
            {
              type: "button",
              "data-step": c,
              "aria-current": x ? "step" : void 0,
              "aria-disabled": U ? "true" : void 0,
              disabled: U,
              tabIndex: U ? -1 : 0,
              className: [
                it.step,
                x ? it.active : null,
                S ? it.completed : null,
                U ? it.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => {
                U || p(c);
              },
              children: [
                /* @__PURE__ */ t("span", { className: it.circle, "aria-hidden": "true", children: S ? /* @__PURE__ */ t("span", { className: it.check, "aria-hidden": "true", children: "✓" }) : g.icon ? /* @__PURE__ */ t("span", { className: it.icon, children: g.icon }) : /* @__PURE__ */ t("span", { className: it.number, children: c + 1 }) }),
                /* @__PURE__ */ t("span", { className: it.text, children: g.text })
              ]
            }
          )
        ] }, `${g.text}-${c}`);
      }) })
    }
  );
}
const fm = "_root_1mm03_1", _m = "_horizontal_1mm03_13", pm = "_vertical_1mm03_17", hm = "_pane_1mm03_21", mm = "_handle_1mm03_31", gm = "_handleHorizontal_1mm03_51", bm = "_handleVertical_1mm03_57", ym = "_handleGrip_1mm03_63", vm = "_handleCollapseHint_1mm03_75", xm = "_collapseBtn_1mm03_79", km = "_collapseBtnCollapsed_1mm03_109", yt = {
  root: fm,
  horizontal: _m,
  vertical: pm,
  pane: hm,
  handle: mm,
  handleHorizontal: gm,
  handleVertical: bm,
  handleGrip: ym,
  handleCollapseHint: vm,
  collapseBtn: xm,
  collapseBtnCollapsed: km
};
function bn(e, n) {
  if (!e) return n;
  const r = e.trim();
  if (r.endsWith("%")) {
    const o = parseFloat(r.slice(0, -1));
    return Number.isNaN(o) ? n : o;
  }
  if (r.endsWith("px")) {
    const o = parseFloat(r.slice(0, -2));
    return Number.isNaN(o) ? n : o;
  }
  const s = parseFloat(r);
  return Number.isNaN(s) ? n : s;
}
function Et(e, n, r) {
  return Math.min(r, Math.max(n, e));
}
function Z0({
  orientation: e,
  Orientation: n,
  panes: r,
  onResize: s,
  Resize: o,
  onCollapse: l,
  Collapse: u,
  ariaLabel: a = "Splitter",
  className: i
}) {
  const h = e ?? n ?? "horizontal", v = h === "horizontal", f = le(null), C = q(() => {
    const d = r.length;
    if (d === 0) return [];
    const N = r.map((L) => L.size ? bn(L.size, 100 / d) : 100 / d), M = N.reduce((L, T) => L + T, 0);
    return Math.abs(M - 100) > 0.01 && M > 0 ? N.map((L) => L / M * 100) : N;
  }, [r]), [$, O] = V(() => C()), [D, k] = V(() => r.map((d) => !!d.collapsed)), b = le($);
  De(() => {
    k(r.map((d) => !!d.collapsed));
  }, [r]);
  const m = q(() => r.map((d) => bn(d.min, 0)), [r]), p = q(() => r.map((d) => bn(d.max, 100)), [r]), z = q(
    (d, N) => {
      const M = { paneIndex: d, newSize: N, cancel: !1 };
      return (s ?? o)?.(M), !M.cancel;
    },
    [s, o]
  ), _ = q(
    (d, N) => {
      const M = { paneIndex: d, collapse: N, cancel: !1 };
      return (l ?? u)?.(M), !M.cancel;
    },
    [l, u]
  ), g = q(
    (d) => {
      const N = !D[d];
      _(d, N) && (N ? (b.current = [...$], k((M) => {
        const L = [...M];
        return L[d] !== void 0 && (L[d] = !0), L;
      }), O((M) => {
        const L = [...M], T = L[d] ?? 0, J = d < L.length - 1 ? d + 1 : d - 1;
        if (J >= 0 && J < L.length) {
          const se = L[J] ?? 0;
          L[J] = se + T, L[d] = 0;
        } else
          L[d] = 0;
        return L;
      })) : (k((M) => {
        const L = [...M];
        return L[d] !== void 0 && (L[d] = !1), L;
      }), O(() => {
        const M = [...b.current];
        return M.length !== r.length ? r.map(() => 100 / r.length) : M;
      })));
    },
    [D, $, r.length, _]
  ), c = le(null), x = q(
    (d, N, M) => {
      const L = f.current;
      if (!L) return null;
      const T = L.getBoundingClientRect();
      let J;
      if (v) {
        if (T.width === 0) return null;
        J = (N - T.left) / T.width * 100;
      } else {
        if (T.height === 0) return null;
        J = (M - T.top) / T.height * 100;
      }
      let se = 0;
      for (let ne = 0; ne < d; ne++) {
        const oe = $[ne];
        oe !== void 0 && (se += oe);
      }
      return J - se;
    },
    [v, $]
  ), S = (d, N) => {
    N.preventDefault();
    const M = N.currentTarget;
    M.focus(), typeof M.setPointerCapture == "function" && M.setPointerCapture(N.pointerId), c.current = { handleIndex: d, pointerId: N.pointerId };
  }, U = (d) => {
    if (!c.current || c.current.pointerId !== d.pointerId) return;
    d.preventDefault();
    const N = c.current.handleIndex, M = x(N, d.clientX, d.clientY);
    if (M == null) return;
    const L = m(), T = p(), J = L[N] ?? 0, se = T[N] ?? 100, de = N + 1, ne = L[de] ?? 0, oe = T[de] ?? 100, ae = $[N] ?? 0, X = $[de] ?? 0, W = ae + X;
    if (W <= 0) return;
    let B = Et(M, J, se), te = W - B;
    if (te < ne) {
      if (te = ne, B = W - te, B < J || B > se) return;
    } else if (te > oe && (te = oe, B = W - te, B < J || B > se))
      return;
    B = Et(B, J, se), te = W - B, z(N, B) && O((he) => {
      const Z = [...he];
      return Z[N] = B, Z[de] = te, Z;
    });
  }, R = (d) => {
    !c.current || c.current.pointerId !== d.pointerId || (c.current = null);
  }, I = (d, N) => {
    const M = m(), L = p(), T = d, J = d + 1, se = $[T] ?? 0, de = $[J] ?? 0, ne = se + de;
    let oe = 0;
    const ae = !!r[T]?.collapsible, X = !!r[J]?.collapsible;
    if (v ? N.key === "ArrowLeft" ? oe = -5 : N.key === "ArrowRight" && (oe = 5) : N.key === "ArrowUp" ? oe = -5 : N.key === "ArrowDown" && (oe = 5), N.key === "Home") {
      N.preventDefault();
      let W = M[T] ?? 0, B = ne - W;
      if (B = Et(B, M[J] ?? 0, L[J] ?? 100), W = ne - B, W = Et(W, M[T] ?? 0, L[T] ?? 100), !z(T, W)) return;
      O((te) => {
        const he = [...te];
        return he[T] = W, he[J] = B, he;
      });
      return;
    }
    if (N.key === "End") {
      N.preventDefault();
      let W = L[T] ?? 100;
      W = Math.min(W, ne - (M[J] ?? 0));
      let B = ne - W;
      if (B = Et(B, M[J] ?? 0, L[J] ?? 100), W = ne - B, W = Et(W, M[T] ?? 0, L[T] ?? 100), !z(T, W)) return;
      O((te) => {
        const he = [...te];
        return he[T] = W, he[J] = B, he;
      });
      return;
    }
    if ((N.key === "Enter" || N.key === " ") && (ae || X)) {
      N.preventDefault(), g(ae ? T : J);
      return;
    }
    if (oe !== 0) {
      N.preventDefault();
      let W = se + oe, B = ne - W;
      const te = M[T] ?? 0, he = L[T] ?? 100, Z = M[J] ?? 0, me = L[J] ?? 100;
      if (W = Et(W, te, he), B = ne - W, (B < Z || B > me) && (B = Et(B, Z, me), W = ne - B, W = Et(W, te, he), B = ne - W), !z(T, W)) return;
      O((ye) => {
        const ze = [...ye];
        return ze[T] = W, ze[J] = B, ze;
      });
    }
  };
  return /* @__PURE__ */ t(
    "div",
    {
      ref: f,
      className: [yt.root, v ? yt.horizontal : yt.vertical, i].filter(Boolean).join(" "),
      "aria-label": a,
      children: r.map((d, N) => {
        const M = !!D[N], L = M ? 0 : $[N] ?? 100 / r.length, T = M ? { display: "none" } : v ? { flexBasis: `${L}%`, flexGrow: 0, flexShrink: 0, overflow: "auto" } : { flexBasis: `${L}%`, flexGrow: 0, flexShrink: 0, overflow: "auto" }, J = bn(d.min, 0), se = bn(d.max, 100), de = N < r.length - 1, ne = !!r[N + 1]?.collapsible;
        return /* @__PURE__ */ w("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ w(
            "div",
            {
              role: "group",
              "aria-label": d.label ?? `Pane ${N + 1}`,
              className: yt.pane,
              style: T,
              "data-collapsed": M ? "true" : void 0,
              children: [
                M ? null : d.children,
                d.collapsible && !M ? /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    className: yt.collapseBtn,
                    "aria-label": `Collapse pane ${N + 1}`,
                    "aria-expanded": !M,
                    onClick: () => g(N),
                    children: v ? "◀" : "▲"
                  }
                ) : null,
                d.collapsible && M ? /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    className: yt.collapseBtn,
                    "aria-label": `Expand pane ${N + 1}`,
                    "aria-expanded": !M,
                    onClick: () => g(N),
                    children: v ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          M && d.collapsible ? (
            // when collapsed we already rendered expand button inside pane, but pane is display none, so render expand button outside?
            // Actually we hide pane with display none, need visible expand button
            // So render alternative expand button adjacent
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                className: yt.collapseBtnCollapsed,
                "aria-label": `Expand pane ${N + 1}`,
                "aria-expanded": "false",
                onClick: () => g(N),
                children: v ? "▶" : "▼"
              }
            )
          ) : null,
          de ? /* @__PURE__ */ w(
            "div",
            {
              role: "separator",
              "aria-orientation": h,
              "aria-valuemin": J,
              "aria-valuemax": se,
              "aria-valuenow": Math.round(L),
              "aria-label": `Resize handle ${N + 1}`,
              tabIndex: M || D[N + 1] ? -1 : 0,
              className: [yt.handle, v ? yt.handleHorizontal : yt.handleVertical].filter(Boolean).join(" "),
              onPointerDown: (oe) => S(N, oe),
              onPointerMove: U,
              onPointerUp: R,
              onKeyDown: (oe) => I(N, oe),
              children: [
                /* @__PURE__ */ t("span", { className: yt.handleGrip, "aria-hidden": "true" }),
                (d.collapsible || ne) && /* @__PURE__ */ t("span", { className: yt.handleCollapseHint, "aria-hidden": "true" })
              ]
            }
          ) : null
        ] }, N);
      })
    }
  );
}
const wm = "_root_10e1i_1", $m = "_list_10e1i_5", Nm = "_vertical_10e1i_14", Sm = "_horizontal_10e1i_20", Dm = "_item_10e1i_28", zm = "_link_10e1i_32", Cm = "_active_10e1i_57", en = {
  root: wm,
  list: $m,
  vertical: Nm,
  horizontal: Sm,
  item: Dm,
  link: zm,
  active: Cm
};
function J0({
  items: e,
  selector: n,
  Selector: r,
  orientation: s,
  Orientation: o,
  onClick: l,
  Click: u,
  ariaLabel: a = "Table of contents",
  className: i
}) {
  const h = n ?? r, v = s ?? o ?? "vertical", [f, C] = V(() => e[0]?.selector ?? null), $ = le(f);
  $.current = f;
  const O = q(
    (D, k) => {
      if (C(D.selector), (l ?? u)?.({ text: D.text, selector: D.selector }), k) {
        try {
          k.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch {
          k.scrollIntoView();
        }
        const m = k;
        m.getAttribute("tabindex") == null && m.tabIndex === -1 || m.tabIndex < 0 ? (m.getAttribute("tabindex"), m.setAttribute("tabindex", "-1"), m.focus({ preventScroll: !0 })) : m.focus({ preventScroll: !0 });
      }
    },
    [l, u]
  );
  return De(() => {
    if (e.length === 0) return;
    const k = (() => {
      if (h) {
        const _ = document.querySelector(h);
        if (_) return _;
      }
      return window;
    })();
    let b = null;
    const m = /* @__PURE__ */ new Map(), p = () => {
      let _ = null, g = null;
      for (const x of e) {
        const S = document.querySelector(x.selector);
        if (!S) continue;
        m.set(x.selector, S);
        const U = S.getBoundingClientRect();
        let R = U.top;
        if (k !== window) {
          const I = k.getBoundingClientRect();
          R = U.top - I.top;
        }
        R <= 80 ? (!g || R > g.el.getBoundingClientRect().top - (k !== window ? k.getBoundingClientRect().top : 0)) && (g = { sel: x.selector, el: S }) : (!_ || R < _.top) && (_ = { sel: x.selector, top: R });
      }
      const c = g?.sel ?? _?.sel ?? e[0]?.selector ?? null;
      c && c !== $.current && C(c);
    }, z = () => {
      p();
    };
    if (typeof IntersectionObserver < "u") {
      const _ = k === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : { root: k, rootMargin: "-20% 0px -70% 0px", threshold: 0 };
      b = new IntersectionObserver((g) => {
        const c = g.filter((x) => x.isIntersecting).sort((x, S) => x.boundingClientRect.top - S.boundingClientRect.top);
        if (c[0]) {
          const x = c[0].target;
          for (const S of e) {
            if (document.querySelector(S.selector) === x) {
              C(S.selector);
              break;
            }
            if (S.selector.startsWith("#") && x.id === S.selector.slice(1)) {
              C(S.selector);
              break;
            }
          }
        } else
          p();
      }, _);
      for (const g of e) {
        const c = document.querySelector(g.selector);
        c && (b.observe(c), m.set(g.selector, c));
      }
    }
    return k === window ? (window.addEventListener("scroll", z, { passive: !0 }), p(), () => {
      window.removeEventListener("scroll", z), b?.disconnect();
    }) : (k.addEventListener("scroll", z, { passive: !0 }), p(), () => {
      k.removeEventListener("scroll", z), b?.disconnect();
    });
  }, [e, h]), /* @__PURE__ */ t("nav", { "aria-label": a, className: [en.root, en[v], i].filter(Boolean).join(" "), children: /* @__PURE__ */ t("ol", { className: en.list, children: e.map((D) => {
    const k = D.selector === f;
    return /* @__PURE__ */ t("li", { className: en.item, children: /* @__PURE__ */ t(
      "a",
      {
        href: D.selector.startsWith("#") || D.selector.startsWith(".") ? D.selector : `#${D.selector}`,
        className: [en.link, k ? en.active : null].filter(Boolean).join(" "),
        "aria-current": k ? "location" : void 0,
        onClick: (b) => {
          b.preventDefault();
          const m = document.querySelector(D.selector);
          O(D, m);
        },
        children: D.text
      }
    ) }, `${D.text}-${D.selector}`);
  }) }) });
}
const Om = "_root_7t0e2_1", Im = "_viewport_7t0e2_17", Mm = "_slide_7t0e2_24", jm = "_active_7t0e2_33", Em = "_arrow_7t0e2_37", Tm = "_prev_7t0e2_71", Am = "_next_7t0e2_75", Lm = "_pauseBtn_7t0e2_79", Rm = "_indicators_7t0e2_110", Bm = "_indicator_7t0e2_110", Pm = "_indicatorActive_7t0e2_145", vt = {
  root: Om,
  viewport: Im,
  slide: Mm,
  active: jm,
  arrow: Em,
  prev: Tm,
  next: Am,
  pauseBtn: Lm,
  indicators: Rm,
  indicator: Bm,
  indicatorActive: Pm
};
function Q0({
  items: e,
  selectedIndex: n,
  SelectedIndex: r,
  defaultIndex: s = 0,
  auto: o,
  Auto: l,
  interval: u,
  Interval: a,
  pauseOnHover: i,
  PauseOnHover: h,
  showArrows: v,
  ShowArrows: f,
  showIndicators: C,
  ShowIndicators: $,
  onChange: O,
  Change: D,
  ariaLabel: k = "Carousel",
  className: b
}) {
  const m = n ?? r, p = m !== void 0, [z, _] = V(() => Math.min(Math.max(0, m ?? s), Math.max(0, e.length - 1))), g = p ? m : z, c = e.length === 0 ? 0 : Math.min(Math.max(0, g), e.length - 1), x = o ?? l ?? !1, S = u ?? a ?? 3e3, U = i ?? h ?? !0, R = v ?? f ?? !0, I = C ?? $ ?? !0, [d, N] = V(!1), [M, L] = V(!1), T = d || M, J = le(null), se = Ue(), de = q(
    (Z) => {
      const me = e.length === 0 ? 0 : (Z % e.length + e.length) % e.length;
      p || _(me), (O ?? D)?.(me);
    },
    [p, O, D, e.length]
  ), ne = q(() => {
    de(c - 1);
  }, [de, c]), oe = q(() => {
    de(c + 1);
  }, [de, c]), ae = q(
    (Z) => {
      de(Z);
    },
    [de]
  );
  De(() => {
    if (!x || T || e.length <= 1) return;
    const Z = setInterval(() => {
      de(c + 1);
    }, S);
    return () => clearInterval(Z);
  }, [x, T, S, c, de, e.length]);
  const X = (Z) => {
    e.length !== 0 && (Z.key === "ArrowLeft" ? (Z.preventDefault(), ne()) : Z.key === "ArrowRight" ? (Z.preventDefault(), oe()) : Z.key === "Home" ? (Z.preventDefault(), ae(0)) : Z.key === "End" && (Z.preventDefault(), ae(e.length - 1)));
  }, W = () => {
    U && x && L(!0);
  }, B = () => {
    U && x && L(!1);
  }, te = () => {
    U && x && L(!0);
  }, he = () => {
    U && x && L(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ w(
    "div",
    {
      ref: J,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": k,
      tabIndex: 0,
      className: [vt.root, b].filter(Boolean).join(" "),
      onKeyDown: X,
      onMouseEnter: W,
      onMouseLeave: B,
      onFocusCapture: te,
      onBlurCapture: he,
      children: [
        /* @__PURE__ */ t("div", { id: se, className: vt.viewport, children: e.map((Z, me) => {
          const ye = me === c;
          return /* @__PURE__ */ t(
            "div",
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `Slide ${me + 1} of ${e.length}`,
              "aria-hidden": ye ? void 0 : !0,
              hidden: !ye,
              className: [vt.slide, ye ? vt.active : null].filter(Boolean).join(" "),
              children: Z
            },
            me
          );
        }) }),
        R && e.length > 1 ? /* @__PURE__ */ w(Oe, { children: [
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: [vt.arrow, vt.prev].filter(Boolean).join(" "),
              "aria-label": "Previous slide",
              "aria-controls": se,
              onClick: ne,
              children: "‹"
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: [vt.arrow, vt.next].filter(Boolean).join(" "),
              "aria-label": "Next slide",
              "aria-controls": se,
              onClick: oe,
              children: "›"
            }
          )
        ] }) : null,
        x ? /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: vt.pauseBtn,
            "aria-label": d ? "Resume" : "Pause",
            "aria-pressed": d,
            onClick: () => N((Z) => !Z),
            children: d ? "▶" : "⏸"
          }
        ) : null,
        I && e.length > 1 ? /* @__PURE__ */ t("div", { className: vt.indicators, role: "group", "aria-label": "Slide indicators", children: e.map((Z, me) => {
          const ye = me === c;
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: [vt.indicator, ye ? vt.indicatorActive : null].filter(Boolean).join(" "),
              "aria-label": `Go to slide ${me + 1}`,
              "aria-current": ye ? "true" : void 0,
              "aria-controls": se,
              onClick: () => ae(me)
            },
            me
          );
        }) }) : null
      ]
    }
  );
}
const qm = "_root_9vei2_1", Fm = "_group_9vei2_20", Km = "_itemWrapper_9vei2_30", Hm = "_treeitem_9vei2_34", Wm = "_disabled_9vei2_50", Um = "_selected_9vei2_60", Vm = "_caret_9vei2_66", Xm = "_caretIcon_9vei2_113", Gm = "_caretOpen_9vei2_120", Ym = "_caretPlaceholder_9vei2_124", Zm = "_label_9vei2_130", Jm = "_loading_9vei2_137", Qm = "_loadingRow_9vei2_143", eg = "_empty_9vei2_149", at = {
  root: qm,
  group: Fm,
  itemWrapper: Km,
  treeitem: Hm,
  disabled: Wm,
  selected: Um,
  caret: Vm,
  caretIcon: Xm,
  caretOpen: Gm,
  caretPlaceholder: Ym,
  label: Zm,
  loading: Jm,
  loadingRow: Qm,
  empty: eg
};
function eb({
  data: e,
  Data: n,
  children: r,
  Children: s,
  textProperty: o,
  TextProperty: l,
  keyProperty: u,
  KeyProperty: a,
  selectionMode: i,
  SelectionMode: h,
  selectedItem: v,
  SelectedItem: f,
  selectedItems: C,
  SelectedItems: $,
  defaultSelectedItem: O,
  defaultSelectedItems: D,
  onChange: k,
  Change: b,
  onExpand: m,
  Expand: p,
  onCollapse: z,
  Collapse: _,
  loadChildData: g,
  LoadChildData: c,
  template: x,
  Template: S,
  itemTemplate: U,
  ItemTemplate: R,
  ariaLabel: I,
  AriaLabel: d,
  className: N
}) {
  const M = e ?? n ?? [], L = r ?? s, T = o ?? l ?? "text", J = u ?? a ?? "id", se = i ?? h ?? "single", de = I ?? d ?? "Tree", ne = g ?? c, oe = x ?? S ?? U ?? R, ae = q(
    (F) => {
      const ee = F[J];
      return ee != null ? String(ee) : String(F.id ?? "");
    },
    [J]
  ), X = q(
    (F) => {
      const ee = F[T];
      if (ee != null) return String(ee);
      const ie = F.text;
      return ie != null ? String(ie) : "";
    },
    [T]
  ), W = q(
    (F) => {
      if (L) {
        const ie = L(F);
        if (ie !== void 0) return ie;
      }
      const ee = F.children;
      if (Array.isArray(ee)) return ee;
    },
    [L]
  ), B = q(
    (F) => {
      const ee = /* @__PURE__ */ new Set(), ie = (_e) => {
        for (const ce of _e) {
          const ge = ae(ce);
          ce.expanded && ee.add(ge);
          const Ae = W(ce);
          Ae && Ae.length > 0 && ie(Ae);
        }
      };
      return ie(F), ee;
    },
    [ae, W]
  ), [te, he] = V(() => B(M)), [Z, me] = V(() => /* @__PURE__ */ new Map()), [ye, ze] = V(() => /* @__PURE__ */ new Set()), He = v ?? f, Me = C ?? $, Ge = se === "multiple" ? Me !== void 0 : He !== void 0, et = q(() => {
    if (se === "multiple") {
      if (D && D.length > 0)
        return new Set(D.map((ie) => ae(ie)));
      const F = /* @__PURE__ */ new Set(), ee = (ie) => {
        for (const _e of ie) {
          _e.selected && F.add(ae(_e));
          const ce = W(_e);
          ce && ee(ce);
        }
      };
      return ee(M), F;
    } else {
      if (O) return /* @__PURE__ */ new Set([ae(O)]);
      let F = null;
      const ee = (ie) => {
        for (const _e of ie) {
          if (_e.selected)
            return F = ae(_e), !0;
          const ce = W(_e);
          if (ce && ee(ce)) return !0;
        }
        return !1;
      };
      return ee(M), F ? /* @__PURE__ */ new Set([F]) : /* @__PURE__ */ new Set();
    }
  }, [se, O, D, ae, W, M]), [We, Ze] = V(() => et()), Fe = Se(() => {
    if (se === "multiple") {
      if (Me !== void 0) {
        const F = Me;
        return F ? new Set(F.map((ee) => ae(ee))) : /* @__PURE__ */ new Set();
      }
      return We;
    } else {
      if (He !== void 0) {
        const F = He;
        return F ? /* @__PURE__ */ new Set([ae(F)]) : /* @__PURE__ */ new Set();
      }
      return We;
    }
  }, [se, Me, He, We, ae]), Ye = q(
    (F) => {
      let ee;
      const ie = (_e) => {
        for (const ce of _e) {
          if (ae(ce) === F)
            return ee = ce, !0;
          const Ae = Z.get(ae(ce)) ?? W(ce);
          if (Ae && ie(Ae)) return !0;
        }
        return !1;
      };
      if (ie(M), !ee) {
        for (const _e of Z.values())
          if (ie(_e)) break;
      }
      return ee;
    },
    [M, Z, ae, W]
  ), H = q(() => {
    const F = /* @__PURE__ */ new Map(), ee = (ie) => {
      for (const _e of ie) {
        const ce = ae(_e);
        F.set(ce, _e);
        const Ae = Z.get(ce) ?? W(_e);
        Ae && ee(Ae);
      }
    };
    return ee(M), F;
  }, [M, Z, ae, W]), y = q(
    (F) => {
      const ee = ae(F);
      if (!F.disabled)
        if (se === "multiple") {
          const _e = new Set(Fe);
          _e.has(ee) ? _e.delete(ee) : _e.add(ee), Ge || Ze(_e);
          const ce = k ?? b;
          if (ce) {
            const ge = H(), Ae = [];
            for (const Be of _e) {
              const j = ge.get(Be) ?? Ye(Be);
              j && Ae.push(j);
            }
            ce({ item: F, selectedItems: Ae });
          }
        } else if (!Fe.has(ee) || Fe.size !== 1 || !Fe.has(ee)) {
          Ge || Ze(/* @__PURE__ */ new Set([ee]));
          const ce = k ?? b;
          ce && ce({ item: F, selectedItem: F });
        } else {
          const ce = k ?? b;
          ce && ce({ item: F, selectedItem: F });
        }
    },
    [ae, se, Fe, Ge, k, b, H, Ye]
  ), E = q(
    async (F) => {
      const ee = ae(F);
      if (!!F.disabled) return;
      const _e = te.has(ee), ce = m ?? p, ge = z ?? _, Ae = W(F), j = Z.get(ee) ?? Ae, Ce = !(j !== void 0 && j.length > 0) && ne != null;
      if (_e) {
        he((we) => {
          const Ee = new Set(we);
          return Ee.delete(ee), Ee;
        }), ge?.({ item: F });
        return;
      }
      if (Ce) {
        if (ye.has(ee)) return;
        ze((we) => {
          const Ee = new Set(we);
          return Ee.add(ee), Ee;
        });
        try {
          const Ee = await ne(F);
          me((Je) => {
            const lt = new Map(Je);
            return lt.set(ee, Ee), lt;
          }), he((Je) => {
            const lt = new Set(Je);
            return lt.add(ee), lt;
          }), ce?.({ item: F });
        } catch {
        } finally {
          ze((we) => {
            const Ee = new Set(we);
            return Ee.delete(ee), Ee;
          });
        }
        return;
      }
      he((we) => {
        const Ee = new Set(we);
        return Ee.add(ee), Ee;
      }), ce?.({ item: F });
    },
    [ae, te, W, Z, ne, ye, m, p, z, _]
  ), K = Se(() => {
    const F = [], ee = (ie, _e, ce) => {
      ie.forEach((ge, Ae) => {
        const Be = ae(ge), j = X(ge), re = Z.get(Be) ?? W(ge);
        let Ce;
        Z.has(Be) ? Ce = Z.get(Be).length > 0 : re !== void 0 ? Ce = re.length > 0 : ne ? Ce = !0 : Ce = !1;
        const we = te.has(Be), Ee = !!ge.disabled, Je = ie.length, lt = Ae + 1;
        if (F.push({
          item: ge,
          key: Be,
          text: j,
          level: _e,
          posInSet: lt,
          setSize: Je,
          hasChildren: Ce,
          expanded: we,
          parentKey: ce,
          disabled: Ee
        }), Ce && we) {
          const zt = Z.get(Be) ?? re;
          zt && zt.length > 0 && ee(zt, _e + 1, Be);
        }
      });
    };
    return ee(M, 1, null), F;
  }, [M, ae, X, W, Z, te, ne, ye]), [Q, G] = V(() => K[0]?.key ?? null), fe = le(""), ke = le(null), Re = le(null);
  De(() => {
    if (!Q && K.length > 0) {
      const F = K[0];
      F && G(F.key);
    } else if (Q && !K.some((F) => F.key === Q)) {
      const F = K[0];
      G(F ? F.key : null);
    }
  }, [K, Q]), De(() => {
    if (Q) {
      const F = Re.current?.querySelector(`[data-key="${CSS.escape(Q)}"]`);
      let ee = null;
      F || (ee = Re.current?.querySelector(`[data-key="${Q}"]`) ?? null);
      const ie = F ?? ee;
      ie && document.activeElement !== ie && Re.current?.contains(document.activeElement) && ie.focus();
    }
  }, [Q]);
  const je = q(
    (F) => {
      G(F), requestAnimationFrame(() => {
        const ee = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(F) : F;
        let ie = Re.current?.querySelector(`[data-key="${ee}"]`);
        ie || (ie = Re.current?.querySelector(`[data-key="${F}"]`) ?? null), ie?.focus();
      });
    },
    []
  ), tt = q(
    (F) => K.find((ie) => ie.key === F)?.parentKey ?? null,
    [K]
  ), bt = q(
    (F) => {
      if (K.length === 0) return;
      const ee = Q ? K.findIndex((ce) => ce.key === Q) : -1, ie = ee >= 0 ? K[ee] : void 0;
      let _e = null;
      if (F.key === "ArrowDown") {
        if (F.preventDefault(), ee === -1)
          _e = K[0]?.key ?? null;
        else {
          const ce = (ee + 1) % K.length, ge = K[ce];
          ge && (_e = ge.key);
        }
        _e && je(_e);
        return;
      }
      if (F.key === "ArrowUp") {
        if (F.preventDefault(), ee === -1) {
          const ce = K[K.length - 1];
          ce && (_e = ce.key);
        } else {
          const ce = (ee - 1 + K.length) % K.length, ge = K[ce];
          ge && (_e = ge.key);
        }
        _e && je(_e);
        return;
      }
      if (F.key === "ArrowRight") {
        if (F.preventDefault(), !ie) return;
        if (ie.hasChildren && !ie.expanded)
          E(ie.item);
        else if (ie.hasChildren && ie.expanded) {
          const ce = ee + 1, ge = K[ce];
          ge && ge.parentKey === ie.key && je(ge.key);
        }
        return;
      }
      if (F.key === "ArrowLeft") {
        if (F.preventDefault(), !ie) return;
        if (ie.hasChildren && ie.expanded)
          E(ie.item);
        else {
          const ce = tt(ie.key);
          ce && je(ce);
        }
        return;
      }
      if (F.key === "Home") {
        F.preventDefault();
        const ce = K[0];
        ce && je(ce.key);
        return;
      }
      if (F.key === "End") {
        F.preventDefault();
        const ce = K[K.length - 1];
        ce && je(ce.key);
        return;
      }
      if (F.key === "Enter" || F.key === " ") {
        F.preventDefault(), ie && y(ie.item);
        return;
      }
      if (F.key.length === 1 && /^[a-zA-Z0-9]$/.test(F.key)) {
        F.preventDefault();
        const ce = (fe.current + F.key).toLowerCase();
        fe.current = ce, ke.current && clearTimeout(ke.current), ke.current = setTimeout(() => {
          fe.current = "";
        }, 500);
        const ge = ee >= 0 ? ee + 1 : 0, j = [...K, ...K].slice(ge, ge + K.length).find((re) => re.text.toLowerCase().startsWith(ce));
        j && je(j.key);
        return;
      }
    },
    [K, Q, je, E, y, tt]
  ), Y = q(() => {
    if (!Q && K.length > 0) {
      const F = K[0];
      F && G(F.key);
    }
  }, [Q, K]), $e = (F, ee, ie) => /* @__PURE__ */ t("ul", { role: "group", className: at.group, children: F.map((_e, ce) => {
    const ge = ae(_e), Ae = X(_e), Be = Z.get(ge) ?? W(_e);
    let j;
    Z.has(ge) ? j = Z.get(ge).length > 0 : Be !== void 0 ? j = Be.length > 0 : ne ? j = !0 : j = !1;
    const re = te.has(ge), Ce = Fe.has(ge), we = !!_e.disabled, Ee = ye.has(ge), Je = Q === ge, lt = F.length, zt = ce + 1, xn = oe ? oe(_e) : Ae;
    return /* @__PURE__ */ w("li", { role: "none", className: at.itemWrapper, children: [
      /* @__PURE__ */ w(
        "div",
        {
          role: "treeitem",
          "data-key": ge,
          tabIndex: Je ? 0 : -1,
          "aria-expanded": j ? re : void 0,
          "aria-selected": Ce,
          "aria-level": ee,
          "aria-setsize": lt,
          "aria-posinset": zt,
          "aria-disabled": we || void 0,
          "aria-busy": Ee || void 0,
          className: [
            at.treeitem,
            Ce ? at.selected : null,
            we ? at.disabled : null,
            Je ? at.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            je(ge), we || y(_e);
          },
          onFocus: () => G(ge),
          children: [
            j ? /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                className: at.caret,
                "aria-label": `${re ? "Collapse" : "Expand"} ${Ae}`,
                "aria-expanded": re,
                tabIndex: -1,
                disabled: we,
                onClick: (nn) => {
                  nn.stopPropagation(), je(ge), E(_e);
                },
                children: /* @__PURE__ */ t("span", { "aria-hidden": "true", className: [at.caretIcon, re ? at.caretOpen : null].filter(Boolean).join(" "), children: "▸" })
              }
            ) : /* @__PURE__ */ t("span", { className: at.caretPlaceholder, "aria-hidden": "true" }),
            /* @__PURE__ */ t("span", { className: at.label, children: xn }),
            Ee ? /* @__PURE__ */ t("span", { className: at.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      j && re ? Ee ? /* @__PURE__ */ t("div", { className: at.loadingRow, "aria-busy": "true", children: "Loading…" }) : Be && Be.length > 0 ? $e(Be, ee + 1) : Z.has(ge) && Z.get(ge).length > 0 ? $e(Z.get(ge), ee + 1) : (Be && Be.length === 0, null) : null
    ] }, ge);
  }) });
  return /* @__PURE__ */ t(
    "div",
    {
      ref: Re,
      role: "tree",
      "aria-label": de,
      "aria-multiselectable": se === "multiple" || void 0,
      tabIndex: 0,
      className: [at.root, N].filter(Boolean).join(" "),
      onKeyDown: bt,
      onFocus: Y,
      children: M.length === 0 ? /* @__PURE__ */ t("div", { className: at.empty, children: "No items" }) : $e(M, 1)
    }
  );
}
const tg = "_root_1nxec_1", ng = "_panel_1nxec_8", rg = "_header_1nxec_19", sg = "_listbox_1nxec_28", og = "_option_1nxec_42", ag = "_disabled_1nxec_57", lg = "_active_1nxec_66", cg = "_selected_1nxec_70", ig = "_empty_1nxec_86", dg = "_controls_1nxec_93", ug = "_reorder_1nxec_102", fg = "_btn_1nxec_110", Le = {
  root: tg,
  panel: ng,
  header: rg,
  listbox: sg,
  option: og,
  disabled: ag,
  active: lg,
  selected: cg,
  empty: ig,
  controls: dg,
  reorder: ug,
  btn: fg
};
function Qe(e, n) {
  const r = e[n];
  return r != null ? String(r) : String(e.id ?? "");
}
function In(e) {
  const n = e.text;
  return n != null ? String(n) : String(e.id ?? "");
}
function tb({
  source: e,
  Source: n,
  target: r,
  Target: s,
  value: o,
  Value: l,
  targetValue: u,
  TargetValue: a,
  data: i,
  Data: h,
  onSourceChange: v,
  SourceChange: f,
  onTargetChange: C,
  TargetChange: $,
  keyProperty: O,
  KeyProperty: D,
  onMove: k,
  Move: b,
  ariaLabel: m,
  AriaLabel: p,
  className: z
}) {
  const _ = O ?? D ?? "id", g = m ?? p ?? "PickList", c = e ?? n ?? o ?? l ?? i ?? h ?? [], x = r ?? s ?? u ?? a ?? [], [S, U] = V(() => [...c]), [R, I] = V(() => [...x]);
  De(() => {
    const y = e ?? n ?? o ?? l ?? i ?? h;
    y !== void 0 && U([...y]);
  }, [e, n, o, l, i, h]), De(() => {
    const y = r ?? s ?? u ?? a;
    y !== void 0 && I([...y]);
  }, [r, s, u, a]);
  const [d, N] = V(() => /* @__PURE__ */ new Set()), [M, L] = V(() => /* @__PURE__ */ new Set()), [T, J] = V(() => {
    const y = c.findIndex((E) => !E.disabled);
    return y >= 0 ? y : 0;
  }), [se, de] = V(() => {
    const y = x.findIndex((E) => !E.disabled);
    return y >= 0 ? y : 0;
  }), ne = Se(() => S.map((y, E) => y.disabled ? -1 : E).filter((y) => y >= 0), [S]), oe = Se(() => R.map((y, E) => y.disabled ? -1 : E).filter((y) => y >= 0), [R]);
  De(() => {
    if (T >= S.length) {
      const y = ne[ne.length - 1];
      J(y ?? 0);
    } else if (S.length > 0 && ne.length > 0 && !ne.includes(T)) {
      const y = ne[0];
      y !== void 0 && J(y);
    }
  }, [T, S.length, ne]), De(() => {
    if (se >= R.length) {
      const y = oe[oe.length - 1];
      de(y ?? 0);
    } else if (R.length > 0 && oe.length > 0 && !oe.includes(se)) {
      const y = oe[0];
      y !== void 0 && de(y);
    }
  }, [se, R.length, oe]), De(() => {
    N((y) => {
      const E = /* @__PURE__ */ new Set();
      for (const K of y)
        S.some((G) => Qe(G, _) === K && !G.disabled) && E.add(K);
      return E;
    });
  }, [S, _]), De(() => {
    L((y) => {
      const E = /* @__PURE__ */ new Set();
      for (const K of y)
        R.some((G) => Qe(G, _) === K && !G.disabled) && E.add(K);
      return E;
    });
  }, [R, _]);
  const ae = q(
    (y) => {
      (v ?? f)?.(y);
    },
    [v, f]
  ), X = q(
    (y) => {
      (C ?? $)?.(y);
    },
    [C, $]
  ), W = q(
    (y) => {
      (k ?? b)?.(y);
    },
    [k, b]
  ), B = q(
    (y) => {
      const E = S[y];
      if (!E || E.disabled) return;
      const K = Qe(E, _);
      N((Q) => {
        const G = new Set(Q);
        return G.has(K) ? G.delete(K) : G.add(K), G;
      }), J(y);
    },
    [S, _]
  ), te = q(
    (y) => {
      const E = R[y];
      if (!E || E.disabled) return;
      const K = Qe(E, _);
      L((Q) => {
        const G = new Set(Q);
        return G.has(K) ? G.delete(K) : G.add(K), G;
      }), de(y);
    },
    [R, _]
  ), he = q(() => {
    const y = [], E = [];
    for (const fe of S) {
      const ke = Qe(fe, _);
      d.has(ke) && !fe.disabled ? y.push(fe) : E.push(fe);
    }
    if (y.length === 0) return;
    const K = E, Q = [...R, ...y];
    U(K), I(Q), N(/* @__PURE__ */ new Set());
    const G = new Set(y.map((fe) => Qe(fe, _)));
    L(G), ae(K), X(Q), W({ source: K, target: Q, moved: y, direction: "toTarget" });
  }, [S, R, d, _, ae, X, W]), Z = q(() => {
    const y = [], E = [];
    for (const fe of R) {
      const ke = Qe(fe, _);
      M.has(ke) && !fe.disabled ? y.push(fe) : E.push(fe);
    }
    if (y.length === 0) return;
    const K = E, Q = [...S, ...y];
    I(K), U(Q), L(/* @__PURE__ */ new Set());
    const G = new Set(y.map((fe) => Qe(fe, _)));
    N(G), ae(Q), X(K), W({ source: Q, target: K, moved: y, direction: "toSource" });
  }, [S, R, M, _, ae, X, W]), me = q(() => {
    const y = S.filter((Q) => !Q.disabled);
    if (y.length === 0) return;
    const E = S.filter((Q) => !!Q.disabled), K = [...R, ...y];
    U(E), I(K), N(/* @__PURE__ */ new Set()), ae(E), X(K), W({ source: E, target: K, moved: y, direction: "allToTarget" });
  }, [S, R, _, ae, X, W]), ye = q(() => {
    const y = R.filter((Q) => !Q.disabled);
    if (y.length === 0) return;
    const E = R.filter((Q) => !!Q.disabled), K = [...S, ...y];
    I(E), U(K), L(/* @__PURE__ */ new Set()), ae(K), X(E), W({ source: K, target: E, moved: y, direction: "allToSource" });
  }, [S, R, ae, X, W]), ze = q(() => {
    if (M.size === 0) return;
    const y = [...R], E = M, K = [];
    for (let G = 1; G < y.length; G++) {
      const fe = y[G], ke = y[G - 1];
      if (!fe || !ke) continue;
      const Re = Qe(fe, _), je = Qe(ke, _);
      E.has(Re) && !E.has(je) && !fe.disabled && !ke.disabled && (y[G - 1] = fe, y[G] = ke, K.push(fe));
    }
    if (K.length === 0) return;
    I(y), X(y), W({ source: S, target: y, moved: K, direction: "up" });
    const Q = Array.from(E)[0];
    if (Q) {
      const G = y.findIndex((fe) => Qe(fe, _) === Q);
      G >= 0 && de(G);
    }
  }, [R, M, _, S, X, W]), He = q(() => {
    if (M.size === 0) return;
    const y = [...R], E = M, K = [];
    for (let G = y.length - 2; G >= 0; G--) {
      const fe = y[G], ke = y[G + 1];
      if (!fe || !ke) continue;
      const Re = Qe(fe, _), je = Qe(ke, _);
      E.has(Re) && !E.has(je) && !fe.disabled && !ke.disabled && (y[G] = ke, y[G + 1] = fe, K.push(fe));
    }
    if (K.length === 0) return;
    I(y), X(y), W({ source: S, target: y, moved: K, direction: "down" });
    const Q = Array.from(E)[0];
    if (Q) {
      const G = y.findIndex((fe) => Qe(fe, _) === Q);
      G >= 0 && de(G);
    }
  }, [R, M, _, S, X, W]), Me = d.size > 0, Xe = M.size > 0, be = le(""), Ge = le(null), et = le(""), We = le(null), Ze = q(
    (y) => {
      if (S.length === 0) return;
      const E = ne;
      if (E.length === 0) return;
      const K = E.includes(T) ? T : E[0] ?? 0;
      let Q = -1;
      if (y.key === "ArrowDown") {
        y.preventDefault();
        const G = E.indexOf(K);
        Q = E[(G + 1) % E.length] ?? E[0] ?? 0;
      } else if (y.key === "ArrowUp") {
        y.preventDefault();
        const G = E.indexOf(K);
        Q = E[(G - 1 + E.length) % E.length] ?? E[0] ?? 0;
      } else if (y.key === "Home")
        y.preventDefault(), Q = E[0] ?? 0;
      else if (y.key === "End")
        y.preventDefault(), Q = E[E.length - 1] ?? 0;
      else if (y.key === "Enter" || y.key === " ") {
        y.preventDefault(), B(K);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(y.key)) {
        y.preventDefault();
        const G = (be.current + y.key).toLowerCase();
        be.current = G, Ge.current && clearTimeout(Ge.current), Ge.current = setTimeout(() => {
          be.current = "";
        }, 500);
        const fe = [...E, ...E], ke = E.indexOf(K) + 1, Re = fe.slice(ke).find((je) => In(S[je]).toLowerCase().startsWith(G));
        Re != null && J(Re);
        return;
      }
      Q >= 0 && J(Q);
    },
    [S, ne, T, B]
  ), Fe = q(
    (y) => {
      if (R.length === 0) return;
      const E = oe;
      if (E.length === 0) return;
      const K = E.includes(se) ? se : E[0] ?? 0;
      let Q = -1;
      if (y.key === "ArrowDown") {
        y.preventDefault();
        const G = E.indexOf(K);
        Q = E[(G + 1) % E.length] ?? E[0] ?? 0;
      } else if (y.key === "ArrowUp") {
        y.preventDefault();
        const G = E.indexOf(K);
        Q = E[(G - 1 + E.length) % E.length] ?? E[0] ?? 0;
      } else if (y.key === "Home")
        y.preventDefault(), Q = E[0] ?? 0;
      else if (y.key === "End")
        y.preventDefault(), Q = E[E.length - 1] ?? 0;
      else if (y.key === "Enter" || y.key === " ") {
        y.preventDefault(), te(K);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(y.key)) {
        y.preventDefault();
        const G = (et.current + y.key).toLowerCase();
        et.current = G, We.current && clearTimeout(We.current), We.current = setTimeout(() => {
          et.current = "";
        }, 500);
        const fe = [...E, ...E], ke = E.indexOf(K) + 1, Re = fe.slice(ke).find((je) => In(R[je]).toLowerCase().startsWith(G));
        Re != null && de(Re);
        return;
      }
      Q >= 0 && de(Q);
    },
    [R, oe, se, te]
  ), Ye = le(null), H = le(null);
  return /* @__PURE__ */ w("div", { className: [Le.root, z].filter(Boolean).join(" "), "aria-label": g, children: [
    /* @__PURE__ */ w("div", { className: Le.panel, children: [
      /* @__PURE__ */ t("div", { className: Le.header, children: "Source" }),
      /* @__PURE__ */ t(
        "div",
        {
          ref: Ye,
          role: "listbox",
          "aria-label": "Source",
          "aria-multiselectable": "true",
          tabIndex: 0,
          className: Le.listbox,
          onKeyDown: Ze,
          children: S.length === 0 ? /* @__PURE__ */ t("div", { className: Le.empty, children: "No items" }) : S.map((y, E) => {
            const K = Qe(y, _), Q = d.has(K), G = E === T, fe = !!y.disabled;
            return /* @__PURE__ */ t(
              "div",
              {
                role: "option",
                "aria-selected": Q,
                "aria-disabled": fe || void 0,
                tabIndex: -1,
                "data-active": G || void 0,
                className: [
                  Le.option,
                  Q ? Le.selected : null,
                  G ? Le.active : null,
                  fe ? Le.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => B(E),
                children: In(y)
              },
              K
            );
          })
        }
      )
    ] }),
    /* @__PURE__ */ w("div", { className: Le.controls, children: [
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: Le.btn,
          "aria-label": "Move selected to target",
          "aria-disabled": !Me || void 0,
          disabled: !Me,
          onClick: he,
          children: "›"
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: Le.btn,
          "aria-label": "Move all to target",
          "aria-disabled": S.filter((y) => !y.disabled).length === 0 || void 0,
          disabled: S.filter((y) => !y.disabled).length === 0,
          onClick: me,
          children: "»"
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: Le.btn,
          "aria-label": "Move all",
          "aria-disabled": S.filter((y) => !y.disabled).length === 0 || void 0,
          disabled: S.filter((y) => !y.disabled).length === 0,
          onClick: me,
          children: "»"
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: Le.btn,
          "aria-label": "Move selected to source",
          "aria-disabled": !Xe || void 0,
          disabled: !Xe,
          onClick: Z,
          children: "‹"
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: Le.btn,
          "aria-label": "Move all to source",
          "aria-disabled": R.filter((y) => !y.disabled).length === 0 || void 0,
          disabled: R.filter((y) => !y.disabled).length === 0,
          onClick: ye,
          children: "«"
        }
      )
    ] }),
    /* @__PURE__ */ w("div", { className: Le.panel, children: [
      /* @__PURE__ */ t("div", { className: Le.header, children: "Target" }),
      /* @__PURE__ */ t(
        "div",
        {
          ref: H,
          role: "listbox",
          "aria-label": "Target",
          "aria-multiselectable": "true",
          tabIndex: 0,
          className: Le.listbox,
          onKeyDown: Fe,
          children: R.length === 0 ? /* @__PURE__ */ t("div", { className: Le.empty, children: "No items" }) : R.map((y, E) => {
            const K = Qe(y, _), Q = M.has(K), G = E === se, fe = !!y.disabled;
            return /* @__PURE__ */ t(
              "div",
              {
                role: "option",
                "aria-selected": Q,
                "aria-disabled": fe || void 0,
                tabIndex: -1,
                "data-active": G || void 0,
                className: [
                  Le.option,
                  Q ? Le.selected : null,
                  G ? Le.active : null,
                  fe ? Le.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => te(E),
                children: In(y)
              },
              K
            );
          })
        }
      ),
      /* @__PURE__ */ w("div", { className: Le.reorder, children: [
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: Le.btn,
            "aria-label": "Move up",
            "aria-disabled": !Xe || void 0,
            disabled: !Xe,
            onClick: ze,
            children: "↑"
          }
        ),
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: Le.btn,
            "aria-label": "Move down",
            "aria-disabled": !Xe || void 0,
            disabled: !Xe,
            onClick: He,
            children: "↓"
          }
        )
      ] })
    ] })
  ] });
}
const _g = "_root_1qckr_1", pg = "_header_1qckr_8", hg = "_title_1qckr_15", mg = "_navBtn_1qckr_20", gg = "_resources_1qckr_39", bg = "_resource_1qckr_39", yg = "_grid_1qckr_50", vg = "_timeCol_1qckr_55", xg = "_timeCell_1qckr_61", kg = "_dayCol_1qckr_66", wg = "_dayHeader_1qckr_73", $g = "_slot_1qckr_81", Ng = "_event_1qckr_91", dt = {
  root: _g,
  header: pg,
  title: hg,
  navBtn: mg,
  resources: gg,
  resource: bg,
  grid: yg,
  timeCol: vg,
  timeCell: xg,
  dayCol: kg,
  dayHeader: wg,
  slot: $g,
  event: Ng
};
function mr(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function nb({
  data: e,
  view: n = "week",
  date: r,
  onDateChange: s,
  resources: o,
  onEventClick: l,
  onSlotClick: u,
  ariaLabel: a = "Scheduler",
  className: i
}) {
  const [h, v] = V(r ?? /* @__PURE__ */ new Date()), f = r ?? h, C = (D) => {
    r || v(D), s?.(D);
  }, $ = n === "day" ? [f] : n === "week" ? Array.from({ length: 7 }, (D, k) => {
    const b = new Date(f);
    return b.setDate(f.getDate() - f.getDay() + k), b;
  }) : Array.from({ length: 30 }, (D, k) => {
    const b = new Date(f);
    return b.setDate(1 + k), b;
  }), O = Array.from({ length: 12 }, (D, k) => 8 + k);
  return /* @__PURE__ */ w("div", { className: [dt.root, i].filter(Boolean).join(" "), role: "grid", "aria-label": a, children: [
    /* @__PURE__ */ w("div", { className: dt.header, children: [
      /* @__PURE__ */ t("button", { type: "button", className: dt.navBtn, "aria-label": "Previous", onClick: () => {
        const D = new Date(f);
        D.setDate(D.getDate() - 7), C(D);
      }, children: "‹" }),
      /* @__PURE__ */ t("span", { className: dt.title, children: f.toLocaleDateString() }),
      /* @__PURE__ */ t("button", { type: "button", className: dt.navBtn, "aria-label": "Next", onClick: () => {
        const D = new Date(f);
        D.setDate(D.getDate() + 7), C(D);
      }, children: "›" })
    ] }),
    o && /* @__PURE__ */ t("div", { className: dt.resources, role: "row", children: o.map((D) => /* @__PURE__ */ t("div", { className: dt.resource, role: "columnheader", "aria-label": D.name, children: D.name }, D.id)) }),
    /* @__PURE__ */ w("div", { className: dt.grid, children: [
      /* @__PURE__ */ t("div", { className: dt.timeCol, children: O.map((D) => /* @__PURE__ */ w("div", { className: dt.timeCell, children: [
        D,
        ":00"
      ] }, D)) }),
      $.map((D) => /* @__PURE__ */ w("div", { className: dt.dayCol, role: "gridcell", onClick: () => u?.({ date: D }), tabIndex: 0, "aria-label": D.toLocaleDateString(), children: [
        /* @__PURE__ */ t("div", { className: dt.dayHeader, children: D.toLocaleDateString(void 0, { weekday: "short", month: "short", day: "numeric" }) }),
        O.map((k) => /* @__PURE__ */ t("div", { className: dt.slot, role: "gridcell", "aria-selected": !1, tabIndex: -1, onClick: () => {
          const b = new Date(D);
          b.setHours(k), u?.({ date: b });
        } }, k)),
        e.filter((k) => k.start.toDateString() === D.toDateString()).map((k) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: dt.event,
            "aria-label": `${k.title} ${mr(k.start)} - ${mr(k.end)}`,
            "aria-pressed": !1,
            onClick: () => l?.({ event: k }),
            children: k.title
          },
          k.id
        ))
      ] }, D.toISOString()))
    ] })
  ] });
}
const Sg = "_root_59ocn_1", Dg = "_header_59ocn_8", zg = "_headerCell_59ocn_15", Cg = "_timeline_59ocn_21", Og = "_row_59ocn_26", Ig = "_taskName_59ocn_32", Mg = "_timelineCell_59ocn_37", jg = "_bar_59ocn_43", Eg = "_progress_59ocn_56", Tg = "_dep_59ocn_61", Dt = {
  root: Sg,
  header: Dg,
  headerCell: zg,
  timeline: Cg,
  row: Og,
  taskName: Ig,
  timelineCell: Mg,
  bar: jg,
  progress: Eg,
  dep: Tg
};
function rb({ tasks: e, view: n = "week", onTaskClick: r, ariaLabel: s = "Gantt", className: o }) {
  const [l, u] = V(null);
  return /* @__PURE__ */ w("div", { className: [Dt.root, o].filter(Boolean).join(" "), role: "grid", "aria-label": s, "aria-rowcount": e.length, children: [
    /* @__PURE__ */ w("div", { className: Dt.header, role: "row", children: [
      /* @__PURE__ */ t("div", { className: Dt.headerCell, role: "columnheader", children: "Task" }),
      /* @__PURE__ */ w("div", { className: Dt.timeline, role: "columnheader", children: [
        "Timeline (",
        n,
        ")"
      ] })
    ] }),
    e.map((a) => /* @__PURE__ */ w("div", { className: Dt.row, role: "row", "aria-selected": l === a.id, children: [
      /* @__PURE__ */ t("div", { className: Dt.taskName, role: "gridcell", children: a.name }),
      /* @__PURE__ */ w("div", { className: Dt.timelineCell, role: "gridcell", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: Dt.bar,
            role: "button",
            "aria-label": `${a.name} ${a.start.toLocaleDateString()} - ${a.end.toLocaleDateString()}`,
            "aria-pressed": l === a.id,
            "aria-valuenow": a.progress ?? 0,
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            tabIndex: 0,
            onClick: () => {
              u(a.id), r?.({ task: a });
            },
            onKeyDown: (i) => {
              (i.key === "Enter" || i.key === " ") && (i.preventDefault(), u(a.id), r?.({ task: a }));
            },
            children: /* @__PURE__ */ t("div", { className: Dt.progress, style: { width: `${a.progress ?? 0}%` } })
          }
        ),
        a.dependencies?.map((i) => /* @__PURE__ */ t("svg", { className: Dt.dep, "aria-hidden": "true", children: /* @__PURE__ */ t("line", { x1: "0", y1: "10", x2: "20", y2: "10", stroke: "var(--dt-color-border)" }) }, i))
      ] })
    ] }, a.id))
  ] });
}
export {
  x0 as Accordion,
  d0 as Alert,
  N0 as Autocomplete,
  y0 as Avatar,
  Pg as Badge,
  m0 as Body,
  G0 as Breadcrumb,
  Rg as Button,
  Bg as Card,
  Q0 as Carousel,
  o0 as Checkbox,
  D0 as Checkboxlist,
  A0 as Colorpicker,
  _0 as Column,
  $n as DEFAULT_OPERATOR_BY_TYPE,
  Qp as DEFAULT_PALETTE,
  e0 as DataFilter,
  t0 as DataGrid,
  n0 as DataList,
  L0 as Datepicker,
  l0 as Dialog,
  H0 as DropZone,
  $0 as Dropdown,
  Hg as EmptyState,
  xr as FILTER_OPERATORS,
  X0 as FabMenu,
  Wg as Field,
  Iu as Footer,
  Ug as Form,
  rb as Gantt,
  Eu as Header,
  Ve as Icon,
  s0 as Input,
  r0 as Label,
  h0 as Layout,
  S0 as Listbox,
  E0 as Mask,
  W0 as Menu,
  T0 as Numeric,
  qo as Pager,
  U0 as PanelMenu,
  j0 as Password,
  tb as PickList,
  V0 as ProfileMenu,
  g0 as Progress,
  z0 as Radiobuttonlist,
  R0 as Rating,
  f0 as Row,
  nb as Scheduler,
  q0 as SecurityCode,
  jn as Select,
  C0 as Selectbar,
  Fu as Sidebar,
  F0 as SignaturePad,
  u0 as Skeleton,
  B0 as Slider,
  I0 as Splitbutton,
  Z0 as Splitter,
  p0 as Stack,
  Fg as Stat,
  Y0 as Steps,
  el as Switch,
  Kg as Table,
  v0 as Tabs,
  k0 as Textarea,
  M0 as Textbox,
  b0 as ThemeSwitcher,
  P0 as Timespanpicker,
  i0 as ToastProvider,
  J0 as Toc,
  O0 as Togglebutton,
  a0 as Tooltip,
  eb as Tree,
  w0 as Typography,
  K0 as Upload,
  wr as applyFilters,
  Xo as applyGridState,
  cn as columnValue,
  Wo as cycleSort,
  Go as defaultOperatorForType,
  Xg as email,
  cr as formatMasked,
  er as formatValue,
  En as getByPath,
  qg as iconNames,
  kr as matchesFilters,
  Zg as maxLength,
  Yg as minLength,
  Vo as paginate,
  Gg as pattern,
  Jg as range,
  Vg as required,
  Zs as runValidators,
  _o as sortItems,
  Uo as sortedItems,
  lo as toFilterString,
  fo as toODataFilterString,
  Ys as useFormContext,
  Qg as useFormField,
  c0 as useToast
};
