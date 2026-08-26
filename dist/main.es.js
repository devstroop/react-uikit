import { jsx as t, jsxs as w, Fragment as Me } from "react/jsx-runtime";
import { forwardRef as qe, useId as Ue, isValidElement as er, cloneElement as Cr, useState as V, useRef as le, useCallback as q, useMemo as we, useContext as zr, createContext as Mr, useEffect as Ne, Children as Pr, useImperativeHandle as tr } from "react";
const qr = "_button_1wxdv_1", Fr = "_primary_1wxdv_29", Kr = "_secondary_1wxdv_38", Hr = "_ghost_1wxdv_48", Wr = "_danger_1wxdv_57", Ur = "_success_1wxdv_61", Vr = "_info_1wxdv_65", Xr = "_xs_1wxdv_101", Gr = "_sm_1wxdv_107", Yr = "_md_1wxdv_113", Zr = "_lg_1wxdv_119", Jr = "_xl_1wxdv_125", Qr = "_iconOnly_1wxdv_131", eo = "_fullWidth_1wxdv_157", cn = {
  button: qr,
  primary: Fr,
  secondary: Kr,
  ghost: Hr,
  danger: Wr,
  success: Ur,
  info: Vr,
  xs: Xr,
  sm: Gr,
  md: Yr,
  lg: Zr,
  xl: Jr,
  iconOnly: Qr,
  fullWidth: eo
}, T0 = qe(function({
  variant: n = "primary",
  size: r = "md",
  fullWidth: o = !1,
  iconOnly: s = !1,
  className: c,
  type: u = "button",
  ...a
}, i) {
  const h = [
    cn.button,
    cn[n],
    cn[r],
    o ? cn.fullWidth : null,
    s ? cn.iconOnly : null,
    c
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ t("button", { ref: i, type: u, className: h, ...a });
}), to = "_card_10w4x_1", no = "_elevated_10w4x_8", ro = "_outlined_10w4x_13", oo = "_interactive_10w4x_17", so = "_text_10w4x_25", ao = "_header_10w4x_41", lo = "_body_10w4x_48", co = "_footer_10w4x_58", dn = {
  card: to,
  elevated: no,
  outlined: ro,
  interactive: oo,
  text: so,
  header: ao,
  body: lo,
  footer: co
}, E0 = qe(function({ variant: n = "elevated", header: r, footer: o, className: s, children: c, onKeyDown: u, ...a }, i) {
  const h = n === "interactive";
  return /* @__PURE__ */ w(
    "div",
    {
      ref: i,
      tabIndex: h ? 0 : void 0,
      onKeyDown: (x) => {
        u?.(x), !(!h || x.key !== "Enter" && x.key !== " ") && (x.preventDefault(), x.currentTarget.click());
      },
      className: [dn.card, dn[n], s].filter(Boolean).join(" "),
      ...a,
      children: [
        r != null && /* @__PURE__ */ t("div", { className: dn.header, children: r }),
        /* @__PURE__ */ t("div", { className: dn.body, children: c }),
        o != null && /* @__PURE__ */ t("div", { className: dn.footer, children: o })
      ]
    }
  );
}), io = "_badge_dcudr_1", uo = "_xs_dcudr_14", fo = "_sm_dcudr_19", _o = "_md_dcudr_24", po = "_lg_dcudr_29", ho = "_xl_dcudr_34", mo = "_neutral_dcudr_40", go = "_primary_dcudr_45", bo = "_success_dcudr_50", yo = "_warning_dcudr_55", vo = "_danger_dcudr_60", xo = "_solid_dcudr_66", wo = "_outline_dcudr_91", zn = {
  badge: io,
  xs: uo,
  sm: fo,
  md: _o,
  lg: po,
  xl: ho,
  neutral: mo,
  primary: go,
  success: bo,
  warning: yo,
  danger: vo,
  solid: xo,
  outline: wo
}, A0 = qe(function({ tone: n = "neutral", variant: r = "soft", size: o = "md", className: s, children: c, ...u }, a) {
  return /* @__PURE__ */ t(
    "span",
    {
      ref: a,
      className: [zn.badge, zn[o], zn[n], zn[r], s].filter(Boolean).join(" "),
      ...u,
      children: c
    }
  );
}), ko = "_xs_cg2f2_2", $o = "_sm_cg2f2_7", No = "_md_cg2f2_1", So = "_lg_cg2f2_17", Do = "_xl_cg2f2_22", Co = {
  xs: ko,
  sm: $o,
  md: No,
  lg: So,
  xl: Do
}, L0 = [
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
], zo = {
  check: /* @__PURE__ */ t("path", { d: "M20 6L9 17l-5-5" }),
  close: /* @__PURE__ */ t("path", { d: "M18 6L6 18M6 6l12 12" }),
  "chevron-down": /* @__PURE__ */ t("path", { d: "M6 9l6 6 6-6" }),
  "chevron-left": /* @__PURE__ */ t("path", { d: "M15 18l-6-6 6-6" }),
  "chevron-right": /* @__PURE__ */ t("path", { d: "M9 18l6-6-6-6" }),
  "chevron-up": /* @__PURE__ */ t("path", { d: "M18 15l-6-6-6 6" }),
  search: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ t("path", { d: "M21 21l-4.3-4.3" })
  ] }),
  plus: /* @__PURE__ */ t("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ t("path", { d: "M5 12h14" }),
  alert: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" }),
    /* @__PURE__ */ t("path", { d: "M12 9v4M12 17h.01" })
  ] }),
  info: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M12 16v-4M12 8h.01" })
  ] }),
  "arrow-right": /* @__PURE__ */ t("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  "arrow-left": /* @__PURE__ */ t("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  "external-link": /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
    /* @__PURE__ */ t("path", { d: "M15 3h6v6M10 14L21 3" })
  ] }),
  copy: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ t("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] }),
  trash: /* @__PURE__ */ t(Me, { children: /* @__PURE__ */ t("path", { d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" }) }),
  edit: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ t("path", { d: "M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  settings: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ t("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] }),
  user: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ t("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ t("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ t("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  download: /* @__PURE__ */ t("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  upload: /* @__PURE__ */ t("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  menu: /* @__PURE__ */ t("path", { d: "M3 12h18M3 6h18M3 18h18" }),
  "more-horizontal": /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ t("circle", { cx: "19", cy: "12", r: "1" }),
    /* @__PURE__ */ t("circle", { cx: "5", cy: "12", r: "1" })
  ] }),
  mail: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ t("path", { d: "M22 6l-10 7L2 6" })
  ] }),
  lock: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ t("path", { d: "M7 11V7a5 5 0 0110 0v4" })
  ] }),
  eye: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  "eye-off": /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ t("path", { d: "M1 1l22 22" })
  ] }),
  refresh: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M23 4v6h-6M1 20v-6h6" }),
    /* @__PURE__ */ t("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
  ] }),
  calendar: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ t("path", { d: "M16 2v4M8 2v4M3 10h18" })
  ] }),
  clock: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M12 6v6l4 2" })
  ] }),
  "check-circle": /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ t("path", { d: "M22 4L12 14.01l-3-3" })
  ] }),
  "x-circle": /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] }),
  shield: /* @__PURE__ */ t(Me, { children: /* @__PURE__ */ t("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  globe: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
  ] }),
  file: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
    /* @__PURE__ */ t("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
  ] }),
  folder: /* @__PURE__ */ t("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" }),
  home: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
    /* @__PURE__ */ t("path", { d: "M9 22V12h6v10" })
  ] }),
  key: /* @__PURE__ */ t(Me, { children: /* @__PURE__ */ t("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) }),
  link: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("path", { d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" }),
    /* @__PURE__ */ t("path", { d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" })
  ] }),
  star: /* @__PURE__ */ t("path", { fill: "currentColor", stroke: "none", d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" }),
  "star-outline": /* @__PURE__ */ t("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" }),
  ban: /* @__PURE__ */ w(Me, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M4.93 4.93l14.14 14.14" })
  ] })
}, Ve = qe(function({ name: n, size: r = "md", strokeWidth: o = 2, className: s, ...c }, u) {
  const a = typeof r == "string";
  return /* @__PURE__ */ t(
    "svg",
    {
      ref: u,
      className: [a ? Co[r] : null, s].filter(Boolean).join(" "),
      width: a ? void 0 : r,
      height: a ? void 0 : r,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: o,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      ...c,
      children: zo[n]
    }
  );
}), Mo = "_stat_11sa0_1", Oo = "_label_11sa0_8", Io = "_row_11sa0_16", jo = "_value_11sa0_22", To = "_delta_11sa0_28", Eo = "_success_11sa0_33", Ao = "_danger_11sa0_37", Lo = "_neutral_11sa0_41", Ro = "_hint_11sa0_45", Ht = {
  stat: Mo,
  label: Oo,
  row: Io,
  value: jo,
  delta: To,
  success: Eo,
  danger: Ao,
  neutral: Lo,
  hint: Ro
}, R0 = qe(function({ label: n, value: r, delta: o, deltaTone: s = "neutral", hint: c, className: u, ...a }, i) {
  return /* @__PURE__ */ w("div", { ref: i, className: [Ht.stat, u].filter(Boolean).join(" "), ...a, children: [
    /* @__PURE__ */ t("div", { className: Ht.label, children: n }),
    /* @__PURE__ */ w("div", { className: Ht.row, children: [
      /* @__PURE__ */ t("div", { className: Ht.value, children: r }),
      o != null && /* @__PURE__ */ t("div", { className: [Ht.delta, Ht[s]].join(" "), children: o })
    ] }),
    c != null && /* @__PURE__ */ t("div", { className: Ht.hint, children: c })
  ] });
}), Bo = "_wrap_1cpzs_1", Po = "_table_1cpzs_8", qo = "_caption_1cpzs_14", Fo = "_none_1cpzs_51", Ko = "_horizontal_1cpzs_57", Ho = "_vertical_1cpzs_67", Wo = "_alternating_1cpzs_85", Uo = "_start_1cpzs_89", Vo = "_center_1cpzs_93", Xo = "_end_1cpzs_97", Go = "_empty_1cpzs_101", Bt = {
  wrap: Bo,
  table: Po,
  caption: qo,
  none: Fo,
  horizontal: Ko,
  vertical: Ho,
  alternating: Wo,
  start: Uo,
  center: Vo,
  end: Xo,
  empty: Go
};
function B0({
  columns: e,
  rows: n,
  rowKey: r,
  empty: o,
  caption: s,
  gridLines: c = "default",
  allowAlternatingRows: u = !0,
  className: a
}) {
  const i = c === "default" || c === "both" ? "" : Bt[c];
  return /* @__PURE__ */ w("div", { className: [Bt.wrap, a].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ w(
      "table",
      {
        className: [
          Bt.table,
          i,
          u ? Bt.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          s != null && /* @__PURE__ */ t("caption", { className: Bt.caption, children: s }),
          /* @__PURE__ */ t("thead", { children: /* @__PURE__ */ t("tr", { children: e.map((h) => /* @__PURE__ */ t(
            "th",
            {
              className: h.align != null ? Bt[h.align] : void 0,
              scope: "col",
              children: h.header
            },
            h.key
          )) }) }),
          /* @__PURE__ */ t("tbody", { children: n.map((h) => /* @__PURE__ */ t("tr", { children: e.map((x) => /* @__PURE__ */ t(
            "td",
            {
              className: x.align != null ? Bt[x.align] : void 0,
              children: x.render != null ? x.render(h) : h[x.key]
            },
            x.key
          )) }, r(h))) })
        ]
      }
    ),
    n.length === 0 && o != null && /* @__PURE__ */ t("div", { className: Bt.empty, children: o })
  ] });
}
const Yo = "_emptyState_123z1_1", Zo = "_icon_123z1_13", Jo = "_title_123z1_18", Qo = "_description_123z1_24", es = "_action_123z1_30", un = {
  emptyState: Yo,
  icon: Zo,
  title: Jo,
  description: Qo,
  action: es
};
function P0({ icon: e, title: n, description: r, action: o, className: s }) {
  return /* @__PURE__ */ w("div", { className: [un.emptyState, s].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ t("div", { className: un.icon, children: e }),
    /* @__PURE__ */ t("div", { className: un.title, children: n }),
    r != null && /* @__PURE__ */ t("div", { className: un.description, children: r }),
    o != null && /* @__PURE__ */ t("div", { className: un.action, children: o })
  ] });
}
const ts = "_field_18dbj_1", ns = "_label_18dbj_8", rs = "_required_18dbj_14", os = "_hint_18dbj_19", ss = "_error_18dbj_24", fn = {
  field: ts,
  label: ns,
  required: rs,
  hint: os,
  error: ss
};
function q0({ label: e, htmlFor: n, required: r, hint: o, error: s, children: c, className: u }) {
  const a = Ue(), i = Ue(), h = s != null ? a : o != null ? i : null, x = er(c) && h != null ? Cr(
    c,
    {
      "aria-describedby": [
        c.props["aria-describedby"],
        h
      ].filter((f) => typeof f == "string").join(" ") || void 0,
      "aria-invalid": s != null ? !0 : c.props["aria-invalid"]
    }
  ) : c;
  return /* @__PURE__ */ w("div", { className: [fn.field, u].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ w("label", { className: fn.label, htmlFor: n, children: [
      e,
      r === !0 && /* @__PURE__ */ t("span", { className: fn.required, "aria-hidden": "true", children: "*" })
    ] }),
    x,
    s != null ? /* @__PURE__ */ t("div", { id: a, className: fn.error, "aria-live": "polite", children: s }) : o != null ? /* @__PURE__ */ t("div", { id: i, className: fn.hint, children: o }) : null
  ] });
}
const as = "_form_qa5tm_1", ls = {
  form: as
}, Or = Mr(null);
function cs() {
  const e = zr(Or);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function F0({
  model: e,
  onSubmit: n,
  onInvalidSubmit: r,
  action: o,
  method: s,
  children: c,
  className: u
}) {
  const [a, i] = V({}), [h, x] = V(0), f = le(a);
  f.current = a;
  const D = q((m) => {
    i((N) => N[m.name] === m ? N : { ...N, [m.name]: m });
  }, []), $ = q((m) => {
    i((N) => {
      if (!(m in N)) return N;
      const p = { ...N };
      return delete p[m], p;
    });
  }, []), M = q(() => {
    const m = {};
    for (const N of Object.values(f.current)) {
      const p = N.validate();
      p.length > 0 && (m[N.name] = p);
    }
    return m;
  }, []), C = q(() => {
    const m = M();
    x((N) => N + 1), Object.keys(m).length === 0 ? n?.(e) : r?.(m);
  }, [M, e, n, r]), b = (m) => {
    o != null && s != null || (m.preventDefault(), C());
  }, _ = we(
    () => ({ registerField: D, unregisterField: $, submit: C, submitCount: h }),
    [D, $, C, h]
  ), g = [ls.form, u].filter(Boolean).join(" ");
  return /* @__PURE__ */ t(Or.Provider, { value: _, children: /* @__PURE__ */ t("form", { className: g, onSubmit: b, action: o, method: s, noValidate: !0, children: c }) });
}
const sn = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", K0 = (e = "Required") => (n) => sn(n) ? e : null, H0 = (e = "Invalid email") => (n) => sn(n) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(n)) ? null : e, W0 = (e, n = "Invalid format") => (r) => sn(r) || e.test(String(r)) ? null : n, U0 = (e, n = `Minimum ${e} characters`) => (r) => sn(r) || String(r).length >= e ? null : n, V0 = (e, n = `Maximum ${e} characters`) => (r) => sn(r) || String(r).length <= e ? null : n, X0 = (e, n, r = `Between ${e} and ${n}`) => (o) => {
  if (sn(o)) return null;
  const s = Number(o);
  return !Number.isNaN(s) && s >= e && s <= n ? null : r;
};
function is(e, n, r) {
  return e.map((o) => o(n, r)).filter((o) => o != null);
}
function G0(e, n) {
  const { registerField: r, unregisterField: o, submitCount: s } = cs(), [c, u] = V(n?.initialValue), [a, i] = V(!1), [h, x] = V(!1), f = le(() => []);
  f.current = () => is(n?.validate ?? [], c), Ne(() => (r({ name: e, validate: () => f.current() }), () => o(e)), [e, r, o]), Ne(() => {
    s > 0 && (i(!0), x(!1));
  }, [s]);
  const D = a && !h ? f.current() : [];
  return { value: c, setValue: (M) => {
    u(M), x(!0);
  }, errors: D };
}
const ds = "_select_14c07_1", us = "_invalid_14c07_33", fs = "_xs_14c07_39", _s = "_sm_14c07_45", ps = "_md_14c07_51", hs = "_lg_14c07_57", ms = "_xl_14c07_63", Fn = {
  select: ds,
  invalid: us,
  xs: fs,
  sm: _s,
  md: ps,
  lg: hs,
  xl: ms
}, Pn = qe(function({ size: n = "md", invalid: r = !1, options: o, children: s, className: c, ...u }, a) {
  return /* @__PURE__ */ t(
    "select",
    {
      ref: a,
      className: [Fn.select, Fn[n], r ? Fn.invalid : null, c].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...u,
      children: o != null ? o.map((i) => /* @__PURE__ */ t("option", { value: i.value, disabled: i.disabled, children: i.label }, i.value)) : s
    }
  );
}), Ir = [
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
};
function qn(e, n) {
  return n.split(".").reduce((r, o) => {
    if (r != null)
      return r[o];
  }, e);
}
function rr(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function Nn(e, n) {
  const r = rr(e), o = rr(n);
  if (typeof r == "number" && typeof o == "number") return r - o;
  const s = String(r ?? ""), c = String(o ?? "");
  return s < c ? -1 : s > c ? 1 : 0;
}
function or(e, n, r) {
  const o = qn(n, e.property), s = sr(o, e.value, e.operator, r);
  if (e.secondOperator == null || e.secondValue === void 0) return s;
  const c = sr(o, e.secondValue, e.secondOperator, r);
  return (e.logicalOperator ?? "And") === "And" ? s && c : s || c;
}
function sr(e, n, r, o) {
  const s = o === "CaseInsensitive", c = (i) => s && typeof i == "string" ? i.toLowerCase() : i, u = c(e), a = c(n);
  switch (r) {
    case "Equals":
      return u === a || Array.isArray(u) && u.some((i) => c(i) === a);
    case "NotEquals":
      return u !== a && !(Array.isArray(u) && u.some((i) => c(i) === a));
    case "LessThan":
      return Nn(u, a) < 0;
    case "LessThanOrEquals":
      return Nn(u, a) <= 0;
    case "GreaterThan":
      return Nn(u, a) > 0;
    case "GreaterThanOrEquals":
      return Nn(u, a) >= 0;
    case "Contains":
      return typeof u == "string" && typeof a == "string" && u.includes(a);
    case "StartsWith":
      return typeof u == "string" && typeof a == "string" && u.startsWith(a);
    case "EndsWith":
      return typeof u == "string" && typeof a == "string" && u.endsWith(a);
    case "DoesNotContain":
      return typeof u == "string" && typeof a == "string" && !u.includes(a);
    case "In":
      return Array.isArray(a) && a.some((i) => c(i) === u);
    case "NotIn":
      return Array.isArray(a) && !a.some((i) => c(i) === u);
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
function nr(e) {
  return "filters" in e;
}
function jr(e, n, r = {}) {
  const o = r.logicalOperator ?? "And", s = r.caseSensitivity ?? "CaseInsensitive";
  if (nr(n)) {
    if (n.filters.length === 0) return !0;
    const c = n.operator ?? o;
    return n.filters[c === "Or" ? "some" : "every"](
      (u) => jr(e, u, { logicalOperator: c, caseSensitivity: s })
    );
  }
  return n.operator === "Custom", or(n, e, s);
}
function Tr(e, n, r = {}) {
  return e.filter((o) => jr(o, n, r));
}
function gs(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function gt(e) {
  return typeof e == "string" ? `"${gs(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(gt).join(", ")}]` : `"${String(e)}"`;
}
function bs(e) {
  const n = (o, s) => {
    switch (o) {
      case "Equals":
        return `${e.property}.Equals(${gt(s)})`;
      case "NotEquals":
        return `!${e.property}.Equals(${gt(s)})`;
      case "LessThan":
        return `${e.property}.LessThan(${gt(s)})`;
      case "LessThanOrEquals":
        return `${e.property}.LessThanOrEquals(${gt(s)})`;
      case "GreaterThan":
        return `${e.property}.GreaterThan(${gt(s)})`;
      case "GreaterThanOrEquals":
        return `${e.property}.GreaterThanOrEquals(${gt(s)})`;
      case "Contains":
        return `${e.property}.Contains(${gt(s)})`;
      case "StartsWith":
        return `${e.property}.StartsWith(${gt(s)})`;
      case "EndsWith":
        return `${e.property}.EndsWith(${gt(s)})`;
      case "DoesNotContain":
        return `!${e.property}.Contains(${gt(s)})`;
      case "In":
        return `${e.property}.In(${gt(s)})`;
      case "NotIn":
        return `!${e.property}.In(${gt(s)})`;
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
function ys(e) {
  return nr(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(ys).filter(Boolean).join(` ${e.operator} `)})` : bs(e);
}
function vs(e) {
  return e.replace(/'/g, "''");
}
const xs = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function ws(e, n) {
  const r = e.property, o = n === "CaseInsensitive", s = (i) => o ? `tolower(${i})` : i, c = (i) => typeof i == "string" ? `'${vs(i)}'` : i instanceof Date ? `'${i.toISOString()}'` : String(i ?? ""), u = (i, h) => {
    const x = typeof h == "string", f = x && o ? s(r) : r;
    switch (i) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${f} ${xs[i]} ${x && o ? s(c(h)) : c(h)}`;
      case "Contains":
        return `contains(${s(r)}, ${s(c(h))})`;
      case "StartsWith":
        return `startswith(${s(r)}, ${s(c(h))})`;
      case "EndsWith":
        return `endswith(${s(r)}, ${s(c(h))})`;
      case "DoesNotContain":
        return `not(contains(${s(r)}, ${s(c(h))}))`;
      case "In":
        return Array.isArray(h) ? `${f} in (${h.map((D) => c(D)).join(", ")})` : `${f} in (${c(h)})`;
      case "NotIn":
        return Array.isArray(h) ? `not(${f} in (${h.map((D) => c(D)).join(", ")}))` : `not(${f} in (${c(h)}))`;
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
function ks(e, n = {}) {
  const r = n.caseSensitivity ?? "CaseInsensitive";
  if (nr(e)) {
    if (e.filters.length === 0) return "";
    const o = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((s) => ks(s, { caseSensitivity: r })).filter(Boolean).join(` ${o} `)})`;
  }
  return ws(e, r);
}
function $s(e, n) {
  return n.length === 0 ? [...e] : [...e].sort((r, o) => {
    for (const s of n) {
      const c = s.sortOrder === "Ascending" ? 1 : -1, u = Nn(qn(r, s.property), qn(o, s.property));
      if (u !== 0) return u * c;
    }
    return 0;
  });
}
const Ns = "_filter_1jk5p_1", Ss = "_rows_1jk5p_9", Ds = "_row_1jk5p_9", Cs = "_join_1jk5p_21", zs = "_property_1jk5p_30", Ms = "_operator_1jk5p_34", Os = "_value_1jk5p_38", Is = "_remove_1jk5p_42", js = "_bar_1jk5p_58", Ts = "_add_1jk5p_64", Es = "_custom_1jk5p_78", As = "_summary_1jk5p_82", _t = {
  filter: Ns,
  rows: Ss,
  row: Ds,
  join: Cs,
  property: zs,
  operator: Ms,
  value: Os,
  remove: Is,
  bar: js,
  add: Ts,
  custom: Es,
  summary: As
}, Ls = {
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
function Rs({
  property: e,
  value: n,
  onChange: r
}) {
  if (e.editor != null)
    return /* @__PURE__ */ t(Me, { children: e.editor({ value: n, onChange: r }) });
  const o = e.type ?? "string";
  if (o === "enum" && e.values != null)
    return /* @__PURE__ */ t(
      Pn,
      {
        "aria-label": e.title ?? e.name,
        className: _t.value,
        options: e.values,
        value: String(n ?? ""),
        onChange: (c) => r(c.target.value)
      }
    );
  if (o === "boolean")
    return /* @__PURE__ */ t(
      Pn,
      {
        "aria-label": e.title ?? e.name,
        className: _t.value,
        options: [
          { value: "", label: "" },
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        value: n == null ? "" : String(n),
        onChange: (c) => {
          c.target.value === "" ? r(void 0) : r(c.target.value === "true");
        }
      }
    );
  const s = o === "number" ? { type: "number" } : o === "date" ? { type: "date" } : { type: "text" };
  return /* @__PURE__ */ t(
    "input",
    {
      "aria-label": e.title ?? e.name,
      className: _t.value,
      ...s,
      value: n == null ? "" : String(n),
      onChange: (c) => r(o === "number" && c.target.value !== "" ? Number(c.target.value) : c.target.value)
    }
  );
}
function Y0({
  properties: e,
  logicalOperator: n = "And",
  filterCaseSensitivity: r = "CaseInsensitive",
  initialRows: o,
  uniqueFilters: s = !1,
  className: c,
  viewChanged: u,
  items: a,
  children: i
}) {
  const [h, x] = V(
    () => o != null && o.length > 0 ? o.map((_, g) => ({ id: g, ..._ })) : [{ id: 0, property: e[0]?.name ?? "", operator: Mn[e[0]?.type ?? "string"], value: void 0 }]
  ), f = (_, g) => {
    x((m) => m.map((N) => N.id === _ ? { ...N, ...g } : N));
  }, D = () => {
    const _ = h[h.length - 1], g = Math.max(0, ...h.map((N) => N.id)) + 1, m = e[0];
    x((N) => [
      ...N,
      {
        id: g,
        property: _?.property ?? m?.name ?? "",
        operator: Mn[e.find((p) => p.name === (_?.property ?? m?.name))?.type ?? "string"],
        value: void 0
      }
    ]);
  }, $ = (_) => {
    x((g) => g.length > 1 ? g.filter((m) => m.id !== _) : g);
  }, M = we(() => {
    const _ = ["IsNull", "IsEmpty", "IsNotNull", "IsNotEmpty"], g = [];
    for (const m of h) {
      if (m.property === "" || (m.value == null || m.value === "") && !_.includes(m.operator)) continue;
      const p = {
        property: m.property,
        operator: m.operator,
        value: m.value
      };
      m.secondOperator != null && m.secondValue !== void 0 && (p.secondOperator = m.secondOperator, p.secondValue = m.secondValue, p.logicalOperator = m.logicalOperator ?? "And"), g.push(p);
    }
    return g;
  }, [h]), C = we(() => a == null || M.length === 0 ? a : Tr(a, { operator: n, filters: M }, { caseSensitivity: r }), [a, M, n, r]);
  Ne(() => {
    u != null && a != null && u(C ?? []);
  }, [C]);
  const b = (_) => e.find((g) => g.name === _) ?? { name: _, type: "string" };
  return /* @__PURE__ */ w("div", { className: [_t.filter, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ t("div", { className: _t.rows, role: "group", "aria-label": "Filter conditions", children: h.map((_, g) => {
      const m = b(_.property), N = s ? [Mn[m.type ?? "string"]] : Ir;
      return /* @__PURE__ */ w("div", { className: _t.row, children: [
        g > 0 ? /* @__PURE__ */ t("span", { className: _t.join, "aria-hidden": "true", children: n }) : null,
        /* @__PURE__ */ t(
          Pn,
          {
            "aria-label": `Condition ${g + 1} property`,
            className: _t.property,
            value: _.property,
            onChange: (p) => {
              const v = e.find((l) => l.name === p.target.value);
              f(_.id, {
                property: p.target.value,
                operator: Mn[v?.type ?? "string"],
                value: void 0
              });
            },
            options: e.map((p) => ({ value: p.name, label: p.title ?? p.name }))
          }
        ),
        /* @__PURE__ */ t(
          Pn,
          {
            "aria-label": `Condition ${g + 1} operator`,
            className: _t.operator,
            value: _.operator,
            onChange: (p) => f(_.id, { operator: p.target.value }),
            options: N.map((p) => ({ value: p, label: Ls[p] }))
          }
        ),
        /* @__PURE__ */ t(Rs, { property: m, value: _.value, onChange: (p) => f(_.id, { value: p }) }),
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: _t.remove,
            "aria-label": `Remove condition ${g + 1}`,
            onClick: () => $(_.id),
            children: "×"
          }
        )
      ] }, _.id);
    }) }),
    /* @__PURE__ */ w("div", { className: _t.bar, children: [
      /* @__PURE__ */ t("button", { type: "button", className: _t.add, onClick: D, children: "Add filter" }),
      i != null ? /* @__PURE__ */ t("div", { className: _t.custom, children: i }) : null,
      a != null ? /* @__PURE__ */ w("span", { className: _t.summary, "aria-live": "polite", children: [
        C?.length ?? 0,
        " of ",
        a.length
      ] }) : null
    ] })
  ] });
}
const Bs = "_pager_15jh8_1", Ps = "_alignLeft_15jh8_10", qs = "_alignCenter_15jh8_14", Fs = "_alignRight_15jh8_18", Ks = "_alignJustify_15jh8_22", Hs = "_summary_15jh8_26", Ws = "_controls_15jh8_31", Us = "_button_15jh8_37", Vs = "_active_15jh8_73", Xs = "_ellipsis_15jh8_85", Gs = "_size_15jh8_91", ot = {
  pager: Bs,
  alignLeft: Ps,
  alignCenter: qs,
  alignRight: Fs,
  alignJustify: Ks,
  summary: Hs,
  controls: Ws,
  button: Us,
  active: Vs,
  ellipsis: Xs,
  size: Gs
};
function Ys(e, n, r, o) {
  return e.replace("{0}", String(n)).replace("{1}", String(r)).replace("{2}", String(o));
}
function ar(e, n) {
  return e.replace("{0}", String(n));
}
function Zs(e, n, r) {
  if (n <= r) return Array.from({ length: n }, (a, i) => i + 1);
  const o = Math.floor(r / 2);
  let s = Math.max(1, e - o);
  const c = Math.min(n, s + r - 1);
  s = Math.max(1, c - r + 1);
  const u = [];
  for (let a = s; a <= c; a++) u.push(a);
  return s > 2 && u.unshift("ellipsis"), s > 1 && u.unshift(1), c < n - 1 && u.push("ellipsis"), c < n && u.push(n), u;
}
function Js({
  count: e,
  pageSize: n,
  page: r,
  pageNumber: o,
  defaultPage: s = 1,
  pageSizeOptions: c,
  pageNumbersCount: u = 5,
  alwaysVisible: a = !1,
  horizontalAlign: i = "left",
  showPagingSummary: h,
  showSummary: x,
  showPageSizeSelector: f = !0,
  pagingSummaryFormat: D = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: $,
  summaryTemplate: M,
  pageSizeText: C = "Items per page",
  firstPageTitle: b = "First page",
  prevPageTitle: _ = "Previous page",
  nextPageTitle: g = "Next page",
  lastPageTitle: m = "Last page",
  pageTitleFormat: N = "Page {0}",
  pageAriaLabelFormat: p = "Page {0}",
  onPageChange: v,
  onPageSizeChange: l,
  ariaLabel: y = "Pagination",
  className: z
}) {
  const K = r ?? o ?? s, [A, O] = V(K), d = r !== void 0 || o !== void 0, S = d ? K : A, I = Math.max(1, Math.ceil(e / n)), E = Math.min(Math.max(1, S), I), j = h ?? x ?? !0, X = a || I > 1, ne = Zs(E, I, u), ie = q(
    (G) => {
      const U = Math.min(Math.max(1, G), I);
      d || O(U);
      const B = (U - 1) * n;
      v?.({ page: U, skip: B, top: n, pageCount: I, pageSize: n });
    },
    [d, v, I, n]
  ), ee = i === "center" ? ot.alignCenter : i === "right" ? ot.alignRight : i === "justify" ? ot.alignJustify : ot.alignLeft, ae = { count: e, pageNumber: E, pageSize: n, pageCount: I }, se = (G) => {
    const U = Array.from(G.currentTarget.querySelectorAll("button[data-pager-page]")), B = U.indexOf(document.activeElement);
    B !== -1 && (G.key === "ArrowRight" || G.key === "ArrowDown" ? (G.preventDefault(), (U[B + 1] ?? U[0])?.focus()) : G.key === "ArrowLeft" || G.key === "ArrowUp" ? (G.preventDefault(), (U[B - 1] ?? U[U.length - 1])?.focus()) : G.key === "Home" ? (G.preventDefault(), U[0]?.focus()) : G.key === "End" && (G.preventDefault(), U[U.length - 1]?.focus()));
  };
  return X ? /* @__PURE__ */ w("nav", { className: [ot.pager, ee, z].filter(Boolean).join(" "), "aria-label": y, children: [
    j && /* @__PURE__ */ t("span", { className: ot.summary, "aria-live": "polite", children: $ ? $(ae) : M ? M({ count: e, pageNumber: E, pageSize: n }) : Ys(D, E, I, e) }),
    /* @__PURE__ */ w("div", { className: ot.controls, role: "group", "aria-label": y, onKeyDown: se, children: [
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: ot.button,
          disabled: E <= 1,
          onClick: () => ie(1),
          "aria-label": b,
          title: b,
          children: "«"
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: ot.button,
          disabled: E <= 1,
          onClick: () => ie(E - 1),
          "aria-label": _,
          title: _,
          children: "‹"
        }
      ),
      ne.map(
        (G, U) => G === "ellipsis" ? /* @__PURE__ */ t("span", { className: ot.ellipsis, "aria-hidden": "true", children: "…" }, `e${U}`) : /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            "data-pager-page": G,
            className: [ot.button, G === E ? ot.active : ""].filter(Boolean).join(" "),
            "aria-current": G === E ? "page" : void 0,
            "aria-label": ar(p, G),
            title: ar(N, G),
            onClick: () => ie(G),
            children: G
          },
          G
        )
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: ot.button,
          disabled: E >= I,
          onClick: () => ie(E + 1),
          "aria-label": g,
          title: g,
          children: "›"
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: ot.button,
          disabled: E >= I,
          onClick: () => ie(I),
          "aria-label": m,
          title: m,
          children: "»"
        }
      )
    ] }),
    f && c && c.length > 0 && /* @__PURE__ */ w("label", { className: ot.size, children: [
      /* @__PURE__ */ t("span", { children: C }),
      /* @__PURE__ */ t(
        "select",
        {
          value: n,
          onChange: (G) => l?.(Number(G.target.value)),
          "aria-label": C,
          children: c.map((G) => /* @__PURE__ */ t("option", { value: G, children: G }, G))
        }
      )
    ] })
  ] }) : null;
}
function Gn(e) {
  const { pageNumber: n, onPageChange: r, summaryTemplate: o, showSummary: s, ...c } = e;
  return /* @__PURE__ */ t(
    Js,
    {
      page: n,
      showPagingSummary: s,
      pagingSummaryFormat: "Page {0} of {1}",
      pageAriaLabelFormat: "{0}",
      pageTitleFormat: "{0}",
      alwaysVisible: !0,
      pagingSummaryTemplate: o ? (a) => o({ count: a.count, pageNumber: a.pageNumber, pageSize: a.pageSize }) : void 0,
      onPageChange: r ? (a) => r(a.page) : void 0,
      ...c
    }
  );
}
function Qs(e, n, r, o, s, c) {
  if (!n || !r) return e.map((i) => ({ type: "row", row: i }));
  const u = /* @__PURE__ */ new Map();
  e.forEach((i) => {
    const h = String(s(i, n) ?? ""), x = u.get(h);
    x ? x.push(i) : u.set(h, [i]);
  });
  const a = [];
  return u.forEach((i, h) => {
    const x = i[0], f = x != null ? s(x, n) : void 0;
    a.push({
      type: "group",
      group: { key: h, display: c(f), property: n, title: r.title ?? n, count: i.length }
    }), o.has(h) && i.forEach((D) => a.push({ type: "row", row: D }));
  }), a;
}
function On(e, n) {
  return e.property ?? `col-${n}`;
}
function ea(e, n) {
  const r = {};
  let o = 0;
  return e.forEach(({ key: s, column: c }) => {
    if (!c.frozen) return;
    r[s] = o === 0 ? "0px" : `${o}px`;
    const u = n[s] ?? c.width ?? "8rem";
    o += parseFloat(u);
  }), r;
}
function ta(e, n) {
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
function _n(e, n) {
  if (n != null)
    return qn(e, n);
}
function lr(e, n) {
  if (n == null || n === "") return String(e ?? "");
  const r = /^N(\d+)$/i.exec(n);
  if (r && typeof e == "number") return e.toFixed(Number(r[1]));
  if (n === "d" || n === "D") {
    const o = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return o != null && !Number.isNaN(o.getTime()) ? o.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const cr = ["Ascending", "Descending", null];
function na(e, n, r = {}) {
  const o = e.find((c) => c.property === n), s = cr[(o ? cr.indexOf(o.sortOrder) : -1) + 1] ?? null;
  return s == null ? e.filter((c) => c.property !== n) : r.multi ? [...e.filter((c) => c.property !== n), { property: n, sortOrder: s }] : [{ property: n, sortOrder: s }];
}
function ra(e, n) {
  return $s(e, n);
}
function oa(e, n, r) {
  const o = Math.max(1, Math.ceil(e.length / r)), s = Math.min(Math.max(1, n), o), c = (s - 1) * r;
  return { items: e.slice(c, c + r), pageCount: o, pageNumber: s, total: e.length };
}
function sa(e, n, r = {}) {
  const o = [...n.filters.entries()].filter(([, a]) => a.value !== "" && a.value !== void 0).map(([a, i]) => ({
    property: a,
    operator: i.operator ?? "Contains",
    value: ta(i.value, r.types?.[a] ?? "string")
  })), s = o.length > 0 ? Tr(e, { operator: r.logicalOperator ?? "And", filters: o }, {
    logicalOperator: r.logicalOperator ?? "And",
    caseSensitivity: r.caseSensitivity ?? "CaseInsensitive"
  }) : e, c = ra(s, n.sorts);
  return { ...oa(c, n.pageNumber, n.pageSize), sorts: n.sorts, filters: n.filters, pageSize: n.pageSize };
}
function aa(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
const la = "_grid_156jh_1", ca = "_toolbar_156jh_8", ia = "_picker_156jh_13", da = "_pickerButton_156jh_17", ua = "_pickerPanel_156jh_31", fa = "_pickerItem_156jh_46", _a = "_groupPanel_156jh_55", pa = "_groupPanelActive_156jh_66", ha = "_groupPanelText_156jh_70", ma = "_groupChip_156jh_74", ga = "_groupRemove_156jh_85", ba = "_groupRow_156jh_94", ya = "_groupCell_156jh_98", va = "_groupToggle_156jh_103", xa = "_editRow_156jh_116", wa = "_editCell_156jh_120", ka = "_editInput_156jh_125", $a = "_commandCell_156jh_135", Na = "_commandButton_156jh_141", Sa = "_data_156jh_156", Da = "_table_156jh_163", Ca = "_header_156jh_169", za = "_center_156jh_181", Ma = "_right_156jh_185", Oa = "_sortButton_156jh_189", Ia = "_sortIndicator_156jh_207", ja = "_sortIndex_156jh_211", Ta = "_cell_156jh_222", Ea = "_clickable_156jh_236", Aa = "_frozen_156jh_244", La = "_selected_156jh_250", Ra = "_resizeHandle_156jh_254", Ba = "_filterCell_156jh_272", Pa = "_filterSelect_156jh_280", qa = "_filterInput_156jh_290", Fa = "_empty_156jh_301", Ka = "_loading_156jh_307", Ha = "_visuallyHidden_156jh_317", pe = {
  grid: la,
  toolbar: ca,
  picker: ia,
  pickerButton: da,
  pickerPanel: ua,
  pickerItem: fa,
  groupPanel: _a,
  groupPanelActive: pa,
  groupPanelText: ha,
  groupChip: ma,
  groupRemove: ga,
  groupRow: ba,
  groupCell: ya,
  groupToggle: va,
  editRow: xa,
  editCell: wa,
  editInput: ka,
  commandCell: $a,
  commandButton: Na,
  data: Sa,
  table: Da,
  header: Ca,
  center: za,
  right: Ma,
  sortButton: Oa,
  sortIndicator: Ia,
  sortIndex: ja,
  cell: Ta,
  clickable: Ea,
  frozen: Aa,
  selected: La,
  resizeHandle: Ra,
  filterCell: Ba,
  filterSelect: Pa,
  filterInput: qa,
  empty: Fa,
  loading: Ka,
  visuallyHidden: Ha
}, Wa = {
  Ascending: "ascending",
  Descending: "descending"
};
function ir(e, n) {
  return e.filterable ?? n;
}
function Ua(e, n) {
  return e.sortable ?? n;
}
function Va(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dt-grid-resize]");
}
function Z0({
  columns: e,
  rows: n,
  rowKey: r,
  allowSorting: o = !1,
  allowMultiColumnSorting: s = !1,
  showSortIndex: c = !1,
  allowFiltering: u = !1,
  filterCaseSensitivity: a = "CaseInsensitive",
  logicalOperator: i = "And",
  allowPaging: h = !1,
  pageSize: x = 10,
  pageSizeOptions: f,
  pageNumbersCount: D = 5,
  pagerPosition: $ = "Bottom",
  showPagingSummary: M = !0,
  showPageSizeSelector: C = !0,
  selectionMode: b = "None",
  selectedKeys: _,
  onSelectionChange: g,
  showColumnPicker: m = !1,
  columnPickerText: N = "Columns",
  allowColumnResize: p = !1,
  allowColumnReorder: v = !1,
  allowGrouping: l = !1,
  groupPanelText: y = "Drag a column header here to group",
  groupExpanded: z = !0,
  editMode: K = "None",
  allowRowCreate: A = !1,
  onRowUpdate: O,
  onRowCreate: d,
  onRowDelete: S,
  isLoading: I = !1,
  empty: E = "No records found",
  ariaLabel: j,
  className: X,
  onRowClick: ne
}) {
  const [ie, ee] = V([]), [ae, se] = V(/* @__PURE__ */ new Map()), [G, U] = V(1), [B, re] = V(x), [he, J] = V(
    () => e.map((R, P) => On(R, P))
  ), [me, ye] = V(
    () => new Set(e.map((R, P) => R.visible !== !1 ? On(R, P) : "").filter(Boolean))
  ), [Ce, He] = V({}), [Ie, Xe] = V(!1), [be, Ge] = V(null), [tt, We] = V(null), [Je, Fe] = V(null), [Ye, W] = V({}), k = le(null), L = le(null), H = we(() => {
    const R = /* @__PURE__ */ new Map();
    return e.forEach((P, ue) => R.set(On(P, ue), P)), R;
  }, [e]), Q = we(
    () => he.filter((R) => me.has(R)).map((R) => ({ key: R, column: H.get(R) })).filter((R) => R.column != null),
    [he, me, H]
  ), Y = we(
    () => ea(Q, Ce),
    [Q, Ce]
  ), fe = K !== "None" || S != null || A, ke = we(
    () => sa(n, { sorts: ie, filters: ae, pageNumber: G, pageSize: B }, {
      logicalOperator: i,
      caseSensitivity: a,
      types: Object.fromEntries(
        e.filter((R) => R.type != null && R.property != null).map((R) => [R.property, R.type])
      )
    }),
    [n, ie, ae, G, B, i, a, e]
  ), Re = we(
    () => be ? e.find((R) => R.property === be) : void 0,
    [be, e]
  ), je = we(
    () => tt ?? new Set(z ? ke.items.map((R) => String(_n(R, be ?? "") ?? "")) : []),
    [tt, z, ke.items, be]
  ), nt = we(
    () => Qs(
      ke.items,
      be ?? void 0,
      Re,
      je,
      _n,
      (R) => lr(R, Re?.format)
    ),
    [ke.items, be, Re, je]
  ), vt = we(
    () => be ? Q.filter((R) => R.column.property !== be) : Q,
    [Q, be]
  ), Z = (R) => {
    R !== "" && ee(na(ie, R, { multi: s }));
  }, Se = (R, P) => {
    se((ue) => {
      const ve = new Map(ue);
      return ve.set(R, P), ve;
    }), U(1);
  }, F = (R) => {
    re(R), U(1);
  }, te = (R) => {
    if (b === "None") return;
    const P = r(R), ue = _ ?? [];
    let ve;
    b === "Single" ? ve = ue.length === 1 && ue[0] === P ? [] : [P] : ve = ue.includes(P) ? ue.filter((rt) => rt !== P) : [...ue, P], g?.(ve);
  }, de = (R) => {
    ne?.(R);
  }, _e = (R, P, ue) => {
    k.current = { key: R, startX: P, startWidth: ue };
  }, ce = (R) => {
    const P = k.current;
    if (!P) return;
    const ue = R - P.startX, ve = Math.max(48, P.startWidth + ue);
    He((rt) => ({ ...rt, [P.key]: `${ve}px` }));
  }, ge = () => {
    k.current = null;
  }, Ae = (R) => {
    L.current = R;
  }, Be = (R) => {
    const P = L.current;
    L.current = null, !(!P || P === R) && J((ue) => {
      const ve = [...ue], rt = ve.indexOf(P), ht = ve.indexOf(R);
      return rt < 0 || ht < 0 ? ue : (ve.splice(rt, 1), ve.splice(ht, 0, P), ve);
    });
  }, T = (R) => {
    ye((P) => {
      const ue = new Set(P);
      return ue.has(R) ? ue.delete(R) : ue.add(R), ue;
    });
  }, oe = () => {
    const R = L.current;
    if (L.current = null, !R || !l) return;
    const ue = H.get(R)?.property;
    ue && (Ge(ue), We(null));
  }, ze = () => {
    Ge(null), We(null);
  }, $e = (R) => {
    We((P) => {
      const ue = P ?? new Set(z ? ke.items.map((rt) => String(_n(rt, be ?? "") ?? "")) : []), ve = new Set(ue);
      return ve.has(R) ? ve.delete(R) : ve.add(R), ve;
    });
  }, Te = (R) => {
    const P = {};
    e.forEach((ue) => {
      ue.property && (P[ue.property] = _n(R, ue.property));
    }), W(P), Fe(String(r(R)));
  }, Qe = () => {
    const R = {};
    e.forEach((P) => {
      P.property && P.type === "boolean" && (R[P.property] = !1);
    }), W(R), Fe("__new__");
  }, it = () => {
    Fe(null), W({});
  }, Mt = (R) => {
    if (Je === "__new__") {
      const P = Object.fromEntries(
        e.filter((ue) => ue.property).map((ue) => [ue.property, Ye[ue.property]])
      );
      d?.(P);
    } else if (R != null) {
      const P = { ...R, ...Ye };
      O?.(R, P);
    }
    it();
  }, Dn = h && ($ === "Top" || $ === "TopAndBottom"), an = h && ($ === "Bottom" || $ === "TopAndBottom"), Lr = u && e.some((R) => ir(R, u)), Rr = (R, P, ue) => R.render ? R.render(P, { index: 0 }) : lr(_n(P, R.property), R.format), Br = (R) => {
    const P = [pe.cell];
    return R.align === "center" && P.push(pe.center), R.align === "right" && P.push(pe.right), R.frozen && P.push(pe.frozen), P.join(" ");
  };
  return /* @__PURE__ */ w("div", { className: [pe.grid, X].filter(Boolean).join(" "), children: [
    Dn && /* @__PURE__ */ t(
      Gn,
      {
        pageNumber: ke.pageNumber,
        pageSize: ke.pageSize,
        count: ke.total,
        pageSizeOptions: f,
        pageNumbersCount: D,
        showSummary: M,
        showPageSizeSelector: C,
        ariaLabel: an ? "Pagination (top)" : "Pagination",
        onPageChange: U,
        onPageSizeChange: F
      }
    ),
    (l || A || m) && /* @__PURE__ */ w("div", { className: pe.toolbar, children: [
      l && /* @__PURE__ */ t(
        "div",
        {
          className: [pe.groupPanel, be ? pe.groupPanelActive : ""].filter(Boolean).join(" "),
          "data-dt-grid-group-panel": !0,
          onDragOver: l ? (R) => R.preventDefault() : void 0,
          onDrop: l ? oe : void 0,
          children: be ? /* @__PURE__ */ w("span", { className: pe.groupChip, children: [
            Re?.title ?? be,
            ":",
            " ",
            /* @__PURE__ */ t("button", { type: "button", className: pe.groupRemove, onClick: ze, "aria-label": `Remove group by ${Re?.title ?? be}`, children: "×" })
          ] }) : /* @__PURE__ */ t("span", { className: pe.groupPanelText, children: y })
        }
      ),
      A && /* @__PURE__ */ t("button", { type: "button", className: pe.pickerButton, onClick: Qe, children: "Add row" }),
      m && /* @__PURE__ */ w("div", { className: pe.picker, children: [
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: pe.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": Ie,
            onClick: () => Xe((R) => !R),
            children: N
          }
        ),
        Ie && /* @__PURE__ */ t("div", { className: pe.pickerPanel, role: "menu", "aria-label": N, children: e.map((R, P) => {
          const ue = On(R, P);
          return /* @__PURE__ */ w("label", { className: pe.pickerItem, children: [
            /* @__PURE__ */ t(
              "input",
              {
                type: "checkbox",
                checked: me.has(ue),
                onChange: () => T(ue)
              }
            ),
            R.title ?? R.property
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
          "aria-label": j,
          "aria-busy": I || void 0,
          children: [
            /* @__PURE__ */ w("colgroup", { children: [
              vt.map(({ key: R, column: P }) => /* @__PURE__ */ t(
                "col",
                {
                  style: {
                    width: Ce[R] ?? P.width,
                    minWidth: P.minWidth,
                    maxWidth: P.maxWidth
                  }
                },
                R
              )),
              fe && /* @__PURE__ */ t("col", { style: { width: "8rem" } })
            ] }),
            /* @__PURE__ */ w("thead", { children: [
              /* @__PURE__ */ w("tr", { children: [
                vt.map(({ key: R, column: P }) => {
                  const ue = Ua(P, o), ve = ie.find((Ee) => Ee.property === P.property), rt = ve ? ie.indexOf(ve) + 1 : 0, ht = P.align ?? "left";
                  return /* @__PURE__ */ w(
                    "th",
                    {
                      "aria-sort": ue && ve ? Wa[ve.sortOrder] : "none",
                      className: [
                        pe.header,
                        ht === "center" ? pe.center : "",
                        ht === "right" ? pe.right : "",
                        P.frozen ? pe.frozen : ""
                      ].filter(Boolean).join(" "),
                      style: P.frozen ? { left: Y[R] } : void 0,
                      scope: "col",
                      draggable: v || l || void 0,
                      onDragStart: v || l ? (Ee) => {
                        Ee.dataTransfer && (Ee.dataTransfer.effectAllowed = "move"), Ae(R);
                      } : void 0,
                      onDragOver: v ? (Ee) => Ee.preventDefault() : void 0,
                      onDrop: v ? () => Be(R) : void 0,
                      children: [
                        ue ? /* @__PURE__ */ w(
                          "button",
                          {
                            type: "button",
                            className: pe.sortButton,
                            onClick: () => P.property != null && Z(P.property),
                            "aria-label": ve ? ve.sortOrder === "Ascending" ? `Sort ${P.title ?? P.property} descending` : `Sort ${P.title ?? P.property} ascending` : `Sort ${P.title ?? P.property} ascending`,
                            children: [
                              P.title ?? P.property,
                              ve && /* @__PURE__ */ t("span", { className: pe.sortIndicator, "aria-hidden": "true", children: ve.sortOrder === "Ascending" ? "▲" : "▼" }),
                              rt > 1 && c && /* @__PURE__ */ t("span", { className: pe.sortIndex, children: rt })
                            ]
                          }
                        ) : P.title ?? P.property,
                        p && /* @__PURE__ */ t(
                          "span",
                          {
                            className: pe.resizeHandle,
                            "data-dt-grid-resize": !0,
                            role: "separator",
                            "aria-orientation": "vertical",
                            "aria-label": `Resize ${P.title ?? P.property}`,
                            onMouseDown: (Ee) => {
                              Ee.preventDefault(), Ee.stopPropagation();
                              const ln = Ce[R] ?? P.width, Cn = ln ? parseFloat(ln) : 96;
                              _e(R, Ee.clientX, Number.isFinite(Cn) ? Cn : 96);
                            },
                            onMouseMove: (Ee) => {
                              k.current?.key === R && ce(Ee.clientX);
                            },
                            onMouseUp: ge,
                            onMouseLeave: () => {
                              k.current?.key === R && ge();
                            }
                          }
                        )
                      ]
                    },
                    R
                  );
                }),
                fe && /* @__PURE__ */ t("th", { className: pe.header, scope: "col", children: "Actions" })
              ] }),
              Lr && /* @__PURE__ */ t("tr", { children: vt.map(({ key: R, column: P }) => {
                if (!ir(P, u)) return /* @__PURE__ */ t("td", { className: pe.filterCell }, R);
                const ue = ae.get(P.property ?? "");
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
                      value: ue?.operator ?? aa(P.type ?? "string"),
                      onChange: (ve) => Se(P.property ?? "", { ...ue, operator: ve.target.value }),
                      "aria-label": `${P.title ?? P.property} operator`,
                      children: Ir.filter((ve) => ve !== "Custom").map((ve) => /* @__PURE__ */ t("option", { value: ve, children: ve }, ve))
                    }
                  ),
                  /* @__PURE__ */ t(
                    "input",
                    {
                      className: pe.filterInput,
                      value: ue?.value ?? "",
                      onChange: (ve) => Se(P.property ?? "", { ...ue, value: ve.target.value }),
                      placeholder: `Filter ${P.title ?? P.property}`,
                      "aria-label": `${P.title ?? P.property} value`
                    }
                  )
                ] }, R);
              }) })
            ] }),
            /* @__PURE__ */ w("tbody", { children: [
              Je === "__new__" && /* @__PURE__ */ w("tr", { className: pe.editRow, children: [
                vt.map(({ key: R, column: P }) => /* @__PURE__ */ t("td", { className: pe.editCell, children: P.property && /* @__PURE__ */ t(
                  "input",
                  {
                    className: pe.editInput,
                    type: P.type === "number" ? "number" : P.type === "boolean" ? "checkbox" : "text",
                    checked: P.type === "boolean" ? !!Ye[P.property] : void 0,
                    value: P.type === "boolean" ? void 0 : String(Ye[P.property] ?? ""),
                    onChange: (ue) => W((ve) => ({
                      ...ve,
                      [P.property]: P.type === "boolean" ? ue.target.checked : ue.target.value
                    })),
                    "aria-label": `${P.title ?? P.property} (new)`
                  }
                ) }, R)),
                fe && /* @__PURE__ */ w("td", { className: pe.editCell, children: [
                  /* @__PURE__ */ t("button", { type: "button", className: pe.commandButton, onClick: () => Mt(), children: "Save" }),
                  /* @__PURE__ */ t("button", { type: "button", className: pe.commandButton, onClick: it, children: "Cancel" })
                ] })
              ] }),
              nt.map((R) => {
                if (R.type === "group" && R.group) {
                  const ht = je.has(R.group.key);
                  return /* @__PURE__ */ t("tr", { className: pe.groupRow, children: /* @__PURE__ */ t("td", { colSpan: vt.length + (fe ? 1 : 0), className: pe.groupCell, children: /* @__PURE__ */ w(
                    "button",
                    {
                      type: "button",
                      className: pe.groupToggle,
                      "aria-expanded": ht,
                      onClick: () => $e(R.group.key),
                      children: [
                        /* @__PURE__ */ t("span", { "aria-hidden": "true", children: ht ? "▼" : "▶" }),
                        R.group.title,
                        ": ",
                        R.group.display,
                        " (",
                        R.group.count,
                        ")"
                      ]
                    }
                  ) }) }, `group-${R.group.key}`);
                }
                const P = R.row, ue = r(P), ve = (_ ?? []).includes(ue), rt = Je != null && Je === String(ue);
                return /* @__PURE__ */ w(
                  "tr",
                  {
                    className: [
                      ne || b !== "None" ? pe.clickable : "",
                      ve ? pe.selected : "",
                      rt ? pe.editRow : ""
                    ].filter(Boolean).join(" "),
                    "aria-selected": b !== "None" ? ve : void 0,
                    onClick: ne || b !== "None" ? (ht) => {
                      Va(ht.target) || (de(P), te(P));
                    } : void 0,
                    children: [
                      vt.map(({ key: ht, column: Ee }) => /* @__PURE__ */ t(
                        "td",
                        {
                          className: Br(Ee),
                          style: Ee.frozen ? { left: Y[ht] } : void 0,
                          children: rt && Ee.property ? /* @__PURE__ */ t(
                            "input",
                            {
                              className: pe.editInput,
                              type: Ee.type === "number" ? "number" : Ee.type === "boolean" ? "checkbox" : "text",
                              checked: Ee.type === "boolean" ? !!Ye[Ee.property] : void 0,
                              value: Ee.type === "boolean" ? void 0 : String(Ye[Ee.property] ?? ""),
                              onChange: (ln) => W((Cn) => ({
                                ...Cn,
                                [Ee.property]: Ee.type === "boolean" ? ln.target.checked : ln.target.value
                              })),
                              "aria-label": `${Ee.title ?? Ee.property} (edit)`
                            }
                          ) : Rr(Ee, P)
                        },
                        ht
                      )),
                      fe && /* @__PURE__ */ t("td", { className: pe.commandCell, children: rt ? /* @__PURE__ */ w(Me, { children: [
                        /* @__PURE__ */ t("button", { type: "button", className: pe.commandButton, onClick: () => Mt(P), children: "Save" }),
                        /* @__PURE__ */ t("button", { type: "button", className: pe.commandButton, onClick: it, children: "Cancel" })
                      ] }) : /* @__PURE__ */ w(Me, { children: [
                        K !== "None" && /* @__PURE__ */ t("button", { type: "button", className: pe.commandButton, onClick: () => Te(P), children: "Edit" }),
                        S && /* @__PURE__ */ t("button", { type: "button", className: pe.commandButton, onClick: () => S(P), children: "Delete" })
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
      ke.items.length === 0 && !I && /* @__PURE__ */ t("div", { className: pe.empty, children: E }),
      I && /* @__PURE__ */ t("div", { className: pe.loading, role: "status", children: "Loading…" })
    ] }),
    an && /* @__PURE__ */ t(
      Gn,
      {
        pageNumber: ke.pageNumber,
        pageSize: ke.pageSize,
        count: ke.total,
        pageSizeOptions: f,
        pageNumbersCount: D,
        showSummary: M,
        showPageSizeSelector: C,
        ariaLabel: Dn ? "Pagination (bottom)" : "Pagination",
        onPageChange: U,
        onPageSizeChange: F
      }
    )
  ] });
}
const Xa = "_wrap_1ts67_1", Ga = "_grid_1ts67_7", Ya = "_stacked_1ts67_13", Za = "_item_1ts67_19", Ja = "_empty_1ts67_25", pn = {
  wrap: Xa,
  grid: Ga,
  stacked: Ya,
  item: Za,
  empty: Ja
};
function J0({
  data: e,
  pageSize: n = 10,
  pageSizeOptions: r,
  wrapItems: o = !1,
  itemTemplate: s,
  emptyMessage: c = "No records found",
  emptyTemplate: u,
  loadingTemplate: a,
  isLoading: i = !1,
  showPageSizeSelector: h = !0,
  className: x,
  ariaLabel: f = "Data list"
}) {
  const [D, $] = V(1), [M, C] = V(n), b = e.length, _ = Math.max(1, Math.ceil(b / M)), g = Math.min(Math.max(1, D), _), m = we(() => {
    const p = (g - 1) * M;
    return e.slice(p, p + M);
  }, [e, g, M]), N = o ? pn.grid : pn.stacked;
  return /* @__PURE__ */ w("div", { className: [pn.wrap, x].filter(Boolean).join(" "), "aria-label": f, children: [
    i && a != null ? a : b === 0 ? u ?? /* @__PURE__ */ t("div", { className: pn.empty, children: c }) : /* @__PURE__ */ t("div", { className: N, children: m.map((p, v) => /* @__PURE__ */ t("div", { className: pn.item, children: s ? s(p, v) : String(p) }, v)) }),
    /* @__PURE__ */ t(
      Gn,
      {
        pageNumber: g,
        pageSize: M,
        count: b,
        pageSizeOptions: r,
        showPageSizeSelector: h,
        onPageChange: $,
        onPageSizeChange: (p) => {
          C(p), $(1);
        }
      }
    )
  ] });
}
const Qa = "_label_11cq1_1", el = {
  label: Qa
}, Q0 = qe(
  function({ className: n, children: r, ...o }, s) {
    return /* @__PURE__ */ t("label", { ref: s, className: [el.label, n].filter(Boolean).join(" "), ...o, children: r });
  }
), tl = "_input_6qj37_1", nl = "_invalid_6qj37_31", rl = "_xs_6qj37_37", ol = "_sm_6qj37_43", sl = "_md_6qj37_49", al = "_lg_6qj37_55", ll = "_xl_6qj37_61", Kn = {
  input: tl,
  invalid: nl,
  xs: rl,
  sm: ol,
  md: sl,
  lg: al,
  xl: ll
}, eb = qe(function({ size: n = "md", invalid: r = !1, className: o, ...s }, c) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: c,
      className: [Kn.input, Kn[n], r ? Kn.invalid : null, o].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...s
    }
  );
}), cl = "_checkbox_fkb13_1", il = {
  checkbox: cl
}, tb = qe(function({ className: n, ...r }, o) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: o,
      type: "checkbox",
      className: [il.checkbox, n].filter(Boolean).join(" "),
      ...r
    }
  );
}), dl = {
  switch: "_switch_ew7ga_1"
}, ul = qe(function({ className: n, ...r }, o) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: o,
      type: "checkbox",
      role: "switch",
      className: [dl.switch, n].filter(Boolean).join(" "),
      ...r
    }
  );
}), fl = "_trigger_dbm3e_1", _l = "_tooltip_dbm3e_7", pl = "_top_dbm3e_34", hl = "_right_dbm3e_40", ml = "_bottom_dbm3e_46", gl = "_left_dbm3e_52", bl = "_arrow_dbm3e_58", In = {
  trigger: fl,
  tooltip: _l,
  "se-tooltip-in": "_se-tooltip-in_dbm3e_1",
  top: pl,
  right: hl,
  bottom: ml,
  left: gl,
  arrow: bl
};
function nb({
  content: e,
  children: n,
  placement: r = "top",
  delayMs: o = 300,
  className: s
}) {
  const c = Ue(), u = le(null), [a, i] = V(!1), h = () => {
    u.current = window.setTimeout(() => i(!0), o);
  }, x = () => {
    u.current !== null && (window.clearTimeout(u.current), u.current = null), i(!1);
  };
  Ne(() => {
    if (!a) return;
    const D = ($) => {
      $.key === "Escape" && x();
    };
    return window.addEventListener("keydown", D), () => window.removeEventListener("keydown", D);
  }, [a]);
  const f = er(n) ? Cr(
    n,
    {
      "aria-describedby": [
        n.props["aria-describedby"],
        a ? c : null
      ].filter((D) => typeof D == "string").join(" ") || void 0
    }
  ) : n;
  return /* @__PURE__ */ w(
    "span",
    {
      className: [In.trigger, s].filter(Boolean).join(" "),
      onMouseEnter: h,
      onMouseLeave: x,
      onFocus: h,
      onBlur: x,
      children: [
        f,
        a && /* @__PURE__ */ w(
          "span",
          {
            role: "tooltip",
            id: c,
            className: [In.tooltip, In[r]].filter(Boolean).join(" "),
            children: [
              e,
              /* @__PURE__ */ t("span", { className: In.arrow, "aria-hidden": "true" })
            ]
          }
        )
      ]
    }
  );
}
const yl = "_dialog_1kllc_1", vl = "_sm_1kllc_30", xl = "_md_1kllc_34", wl = "_lg_1kllc_38", kl = "_header_1kllc_42", $l = "_title_1kllc_51", Nl = "_description_1kllc_58", Sl = "_close_1kllc_65", Dl = "_body_1kllc_84", Cl = "_footer_1kllc_90", Pt = {
  dialog: yl,
  "se-dialog-in": "_se-dialog-in_1kllc_1",
  sm: vl,
  md: xl,
  lg: wl,
  header: kl,
  title: $l,
  description: Nl,
  close: Sl,
  body: Dl,
  footer: Cl
};
function rb({
  open: e,
  onClose: n,
  title: r,
  description: o,
  children: s,
  footer: c,
  size: u = "md",
  className: a
}) {
  const i = le(null), h = Ue(), x = Ue();
  return Ne(() => {
    const f = i.current;
    f && (e && !f.open ? f.showModal() : !e && f.open && f.close());
  }, [e]), /* @__PURE__ */ w(
    "dialog",
    {
      ref: i,
      className: [Pt.dialog, Pt[u], a].filter(Boolean).join(" "),
      onClose: n,
      "aria-labelledby": r ? h : void 0,
      "aria-describedby": o ? x : void 0,
      children: [
        r && /* @__PURE__ */ w("header", { className: Pt.header, children: [
          /* @__PURE__ */ w("div", { children: [
            /* @__PURE__ */ t("h2", { id: h, className: Pt.title, children: r }),
            o && /* @__PURE__ */ t("p", { id: x, className: Pt.description, children: o })
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: Pt.close,
              onClick: n,
              "aria-label": "Close dialog",
              children: "×"
            }
          )
        ] }),
        s && /* @__PURE__ */ t("div", { className: Pt.body, children: s }),
        c && /* @__PURE__ */ t("footer", { className: Pt.footer, children: c })
      ]
    }
  );
}
const zl = "_viewport_15dkh_1", Ml = "_topLeft_15dkh_13", Ol = "_topRight_15dkh_20", Il = "_bottomLeft_15dkh_25", jl = "_toast_15dkh_30", Tl = "_leaving_15dkh_61", El = "_info_15dkh_77", Al = "_success_15dkh_82", Ll = "_warning_15dkh_87", Rl = "_danger_15dkh_92", Bl = "_content_15dkh_97", Pl = "_title_15dkh_102", ql = "_description_15dkh_125", Fl = "_dismiss_15dkh_132", Kl = "_actions_15dkh_151", Hl = "_action_15dkh_151", Wl = "_cancel_15dkh_159", Ul = "_progress_15dkh_195", mt = {
  viewport: zl,
  topLeft: Ml,
  topRight: Ol,
  bottomLeft: Il,
  toast: jl,
  "se-toast-in": "_se-toast-in_15dkh_1",
  leaving: Tl,
  "se-toast-out": "_se-toast-out_15dkh_1",
  info: El,
  success: Al,
  warning: Ll,
  danger: Rl,
  content: Bl,
  title: Pl,
  description: ql,
  dismiss: Fl,
  actions: Kl,
  action: Hl,
  cancel: Wl,
  progress: Ul,
  "se-toast-progress": "_se-toast-progress_15dkh_1"
}, Er = Mr(null);
function ob() {
  const e = zr(Er);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const Vl = 200, Xl = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function sb({
  children: e,
  durationMs: n = 4e3,
  position: r = "bottom-right",
  pauseOnHover: o = !0,
  className: s
}) {
  const [c, u] = V([]), [a, i] = V(!1), h = le([]), x = le(/* @__PURE__ */ new Map()), f = le(!1), D = le(0), $ = (O) => {
    f.current = O, i(O);
  }, M = q((O) => {
    const d = x.current.get(O);
    d && (window.clearTimeout(d.timeoutId), d.remaining = Math.max(0, d.remaining - (Date.now() - d.startedAt)));
  }, []), C = q((O) => {
    const d = x.current.get(O);
    d && (window.clearTimeout(d.timeoutId), x.current.delete(O));
  }, []), b = q(
    (O) => {
      C(O), u((d) => {
        const S = d.filter((I) => I.id !== O);
        return h.current = S, S;
      });
    },
    [C]
  ), _ = q(
    (O) => {
      const d = h.current.find((S) => S.id === O);
      !d || d.leaving || (d.onAutoClose?.(), b(O));
    },
    [b]
  ), g = q(
    (O) => {
      const d = x.current.get(O);
      !d || d.remaining <= 0 || (d.startedAt = Date.now(), d.timeoutId = window.setTimeout(() => _(O), d.remaining));
    },
    [_]
  ), m = q(() => {
    f.current || x.current.forEach((O, d) => M(d)), $(!0);
  }, [M]), N = q(() => {
    x.current.forEach((O, d) => g(d)), $(!1);
  }, [g]);
  Ne(() => {
    if (!o) return;
    const O = () => {
      document.hidden ? m() : N();
    };
    return document.addEventListener("visibilitychange", O), () => document.removeEventListener("visibilitychange", O);
  }, [o, m, N]);
  const p = q(
    (O) => {
      const d = h.current.find((S) => S.id === O);
      !d || d.leaving || (d.onDismiss?.(), u((S) => {
        const I = S.map((E) => E.id === O ? { ...E, leaving: !0 } : E);
        return h.current = I, I;
      }), window.setTimeout(() => b(O), Vl));
    },
    [b]
  ), v = q(
    (O) => {
      if (O.durationMs <= 0) return;
      const d = {
        remaining: O.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      x.current.set(O.id, d), f.current || g(O.id);
    },
    [g]
  ), l = q(
    (O) => {
      const d = h.current.find((I) => I.id === O.id), S = {
        id: O.id ?? ++D.current,
        title: O.title,
        description: O.description,
        tone: O.tone ?? "info",
        durationMs: O.durationMs ?? n,
        action: O.action,
        cancel: O.cancel,
        dismissible: O.dismissible ?? !0,
        closeOnClick: O.closeOnClick ?? !1,
        showProgress: O.showProgress ?? !1,
        position: O.position ?? r,
        onDismiss: O.onDismiss,
        onAutoClose: O.onAutoClose
      };
      u((I) => {
        const E = d ? I.map((j) => j.id === S.id ? { ...S, leaving: !1 } : j) : [...I, S];
        return h.current = E, E;
      }), d && C(S.id), v(S);
    },
    [n, r, v, C]
  ), y = we(() => ({ toast: l }), [l]), z = we(
    () => Array.from(/* @__PURE__ */ new Set([r, ...c.map((O) => O.position)])),
    [r, c]
  ), K = o ? m : void 0, A = o ? N : void 0;
  return /* @__PURE__ */ w(Er.Provider, { value: y, children: [
    e,
    z.map((O) => /* @__PURE__ */ t(
      "div",
      {
        className: [
          mt.viewport,
          mt[Xl[O]],
          s
        ].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: K,
        onMouseLeave: A,
        children: c.filter((d) => d.position === O).map((d) => /* @__PURE__ */ w(
          "div",
          {
            role: d.tone === "danger" ? "alert" : "status",
            "data-paused": a ? "true" : "false",
            "data-clickable": d.closeOnClick ? "true" : "false",
            className: [
              mt.toast,
              mt[d.tone],
              d.leaving ? mt.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: d.closeOnClick ? () => p(d.id) : void 0,
            children: [
              /* @__PURE__ */ w("div", { className: mt.content, children: [
                /* @__PURE__ */ t("div", { className: mt.title, children: d.title }),
                d.description && /* @__PURE__ */ t("div", { className: mt.description, children: d.description }),
                (d.action || d.cancel) && /* @__PURE__ */ w("div", { className: mt.actions, children: [
                  d.action && /* @__PURE__ */ t(
                    "button",
                    {
                      type: "button",
                      className: mt.action,
                      onClick: () => {
                        d.action?.onClick?.(), p(d.id);
                      },
                      children: d.action.label
                    }
                  ),
                  d.cancel && /* @__PURE__ */ t(
                    "button",
                    {
                      type: "button",
                      className: mt.cancel,
                      onClick: () => {
                        d.cancel?.onClick?.(), p(d.id);
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
                  className: mt.dismiss,
                  onClick: () => p(d.id),
                  "aria-label": "Dismiss notification",
                  children: "×"
                }
              ),
              d.showProgress && d.durationMs > 0 && /* @__PURE__ */ t(
                "div",
                {
                  className: mt.progress,
                  style: { animationDuration: `${d.durationMs}ms` }
                }
              )
            ]
          },
          d.id
        ))
      },
      O
    ))
  ] });
}
const Gl = "_alert_1gxt0_1", Yl = "_xs_1gxt0_22", Zl = "_sm_1gxt0_32", Jl = "_lg_1gxt0_42", Ql = "_xl_1gxt0_52", ec = "_info_1gxt0_63", tc = "_success_1gxt0_68", nc = "_warning_1gxt0_73", rc = "_danger_1gxt0_78", oc = "_soft_1gxt0_85", sc = "_outline_1gxt0_92", ac = "_solid_1gxt0_100", lc = "_icon_1gxt0_114", cc = "_content_1gxt0_120", ic = "_title_1gxt0_125", dc = "_body_1gxt0_131", uc = "_dismiss_1gxt0_137", Ot = {
  alert: Gl,
  xs: Yl,
  sm: Zl,
  lg: Jl,
  xl: Ql,
  info: ec,
  success: tc,
  warning: nc,
  danger: rc,
  soft: oc,
  outline: sc,
  solid: ac,
  icon: lc,
  content: cc,
  title: ic,
  body: dc,
  dismiss: uc
};
function ab({
  tone: e = "info",
  variant: n = "soft",
  size: r = "md",
  title: o,
  icon: s,
  children: c,
  dismissible: u = !1,
  onDismiss: a,
  className: i
}) {
  const [h, x] = V(!1);
  if (h)
    return null;
  const f = () => {
    x(!0), a?.();
  };
  return /* @__PURE__ */ w(
    "div",
    {
      role: "alert",
      className: [Ot.alert, Ot[e], Ot[n], Ot[r], i].filter(Boolean).join(" "),
      children: [
        s != null && /* @__PURE__ */ t("span", { className: Ot.icon, "aria-hidden": "true", children: s }),
        /* @__PURE__ */ w("div", { className: Ot.content, children: [
          o && /* @__PURE__ */ t("div", { className: Ot.title, children: o }),
          c && /* @__PURE__ */ t("div", { className: Ot.body, children: c })
        ] }),
        u && /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: Ot.dismiss,
            onClick: f,
            "aria-label": "Dismiss alert",
            children: "×"
          }
        )
      ]
    }
  );
}
const fc = "_skeleton_f6f3j_1", _c = "_text_f6f3j_35", pc = "_circle_f6f3j_40", hc = "_rect_f6f3j_44", dr = {
  skeleton: fc,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_f6f3j_1",
  text: _c,
  circle: pc,
  rect: hc
};
function lb({
  variant: e = "text",
  width: n,
  height: r,
  className: o
}) {
  const s = {};
  return n !== void 0 && (s.width = typeof n == "number" ? `${n}px` : n), r !== void 0 && (s.height = typeof r == "number" ? `${r}px` : r), /* @__PURE__ */ t(
    "span",
    {
      "aria-hidden": "true",
      className: [dr.skeleton, dr[e], o].filter(Boolean).join(" "),
      style: s
    }
  );
}
const mc = "_row_15qsh_1", gc = "_gapXs_15qsh_7", bc = "_gapSm_15qsh_11", yc = "_gapMd_15qsh_15", vc = "_gapLg_15qsh_19", xc = "_gapXl_15qsh_23", wc = "_start_15qsh_27", kc = "_center_15qsh_31", $c = "_end_15qsh_35", Nc = "_stretch_15qsh_39", Sc = "_baseline_15qsh_43", Dc = "_noWrap_15qsh_99", Cc = "_wrapReverse_15qsh_103", zc = "_gapRowXs_15qsh_107", Mc = "_gapRowSm_15qsh_111", Oc = "_gapRowMd_15qsh_115", Ic = "_gapRowLg_15qsh_119", jc = "_gapRowXl_15qsh_123", Zt = {
  row: mc,
  gapXs: gc,
  gapSm: bc,
  gapMd: yc,
  gapLg: vc,
  gapXl: xc,
  start: wc,
  center: kc,
  end: $c,
  stretch: Nc,
  baseline: Sc,
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
  noWrap: Dc,
  wrapReverse: Cc,
  gapRowXs: zc,
  gapRowSm: Mc,
  gapRowMd: Oc,
  gapRowLg: Ic,
  gapRowXl: jc
}, Tc = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
}, Ec = {
  xs: "gapRowXs",
  sm: "gapRowSm",
  md: "gapRowMd",
  lg: "gapRowLg",
  xl: "gapRowXl"
};
function Ac(e) {
  return typeof e != "string" ? null : Tc[e] ?? null;
}
function Lc(e) {
  return typeof e != "string" ? null : Ec[e] ?? null;
}
function ur(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function cb({
  gap: e,
  rowGap: n,
  align: r = "stretch",
  justify: o = "start",
  wrap: s = !0,
  className: c,
  style: u,
  ...a
}) {
  const i = Ac(e), h = Lc(n), x = {
    ...e != null && !i ? { gap: typeof e == "number" ? `${e}px` : e } : {},
    ...n != null && !h ? { rowGap: typeof n == "number" ? `${n}px` : n } : {},
    ...u
  };
  return /* @__PURE__ */ t(
    "div",
    {
      className: [
        Zt.row,
        Zt[r],
        Zt[`justify-${o}`],
        ur(s) != null ? Zt[ur(s)] : null,
        i ? Zt[i] : null,
        h ? Zt[h] : null,
        c
      ].filter(Boolean).join(" "),
      style: x,
      ...a
    }
  );
}
const Rc = "_column_2ch3a_1", Bc = "_Size1_2ch3a_6", Pc = "_Size2_2ch3a_7", qc = "_Size3_2ch3a_8", Fc = "_Size4_2ch3a_9", Kc = "_Size5_2ch3a_10", Hc = "_Size6_2ch3a_11", Wc = "_Size7_2ch3a_12", Uc = "_Size8_2ch3a_13", Vc = "_Size9_2ch3a_14", Xc = "_Size10_2ch3a_15", Gc = "_Size11_2ch3a_16", Yc = "_Size12_2ch3a_17", Zc = "_Offset1_2ch3a_18", Jc = "_Offset2_2ch3a_19", Qc = "_Offset3_2ch3a_20", ei = "_Offset4_2ch3a_21", ti = "_Offset5_2ch3a_22", ni = "_Offset6_2ch3a_23", ri = "_Offset7_2ch3a_24", oi = "_Offset8_2ch3a_25", si = "_Offset9_2ch3a_26", ai = "_Offset10_2ch3a_27", li = "_Offset11_2ch3a_28", ci = "_smSize1_2ch3a_31", ii = "_smSize2_2ch3a_32", di = "_smSize3_2ch3a_33", ui = "_smSize4_2ch3a_34", fi = "_smSize5_2ch3a_35", _i = "_smSize6_2ch3a_36", pi = "_smSize7_2ch3a_37", hi = "_smSize8_2ch3a_38", mi = "_smSize9_2ch3a_39", gi = "_smSize10_2ch3a_40", bi = "_smSize11_2ch3a_41", yi = "_smSize12_2ch3a_42", vi = "_smOffset1_2ch3a_43", xi = "_smOffset2_2ch3a_44", wi = "_smOffset3_2ch3a_45", ki = "_smOffset4_2ch3a_46", $i = "_smOffset5_2ch3a_47", Ni = "_smOffset6_2ch3a_48", Si = "_smOffset7_2ch3a_49", Di = "_smOffset8_2ch3a_50", Ci = "_smOffset9_2ch3a_51", zi = "_smOffset10_2ch3a_52", Mi = "_smOffset11_2ch3a_53", Oi = "_mdSize1_2ch3a_57", Ii = "_mdSize2_2ch3a_58", ji = "_mdSize3_2ch3a_59", Ti = "_mdSize4_2ch3a_60", Ei = "_mdSize5_2ch3a_61", Ai = "_mdSize6_2ch3a_62", Li = "_mdSize7_2ch3a_63", Ri = "_mdSize8_2ch3a_64", Bi = "_mdSize9_2ch3a_65", Pi = "_mdSize10_2ch3a_66", qi = "_mdSize11_2ch3a_67", Fi = "_mdSize12_2ch3a_68", Ki = "_mdOffset1_2ch3a_69", Hi = "_mdOffset2_2ch3a_70", Wi = "_mdOffset3_2ch3a_71", Ui = "_mdOffset4_2ch3a_72", Vi = "_mdOffset5_2ch3a_73", Xi = "_mdOffset6_2ch3a_74", Gi = "_mdOffset7_2ch3a_75", Yi = "_mdOffset8_2ch3a_76", Zi = "_mdOffset9_2ch3a_77", Ji = "_mdOffset10_2ch3a_78", Qi = "_mdOffset11_2ch3a_79", ed = "_lgSize1_2ch3a_83", td = "_lgSize2_2ch3a_84", nd = "_lgSize3_2ch3a_85", rd = "_lgSize4_2ch3a_86", od = "_lgSize5_2ch3a_87", sd = "_lgSize6_2ch3a_88", ad = "_lgSize7_2ch3a_89", ld = "_lgSize8_2ch3a_90", cd = "_lgSize9_2ch3a_91", id = "_lgSize10_2ch3a_92", dd = "_lgSize11_2ch3a_93", ud = "_lgSize12_2ch3a_94", fd = "_lgOffset1_2ch3a_95", _d = "_lgOffset2_2ch3a_96", pd = "_lgOffset3_2ch3a_97", hd = "_lgOffset4_2ch3a_98", md = "_lgOffset5_2ch3a_99", gd = "_lgOffset6_2ch3a_100", bd = "_lgOffset7_2ch3a_101", yd = "_lgOffset8_2ch3a_102", vd = "_lgOffset9_2ch3a_103", xd = "_lgOffset10_2ch3a_104", wd = "_lgOffset11_2ch3a_105", kd = "_xlSize1_2ch3a_109", $d = "_xlSize2_2ch3a_110", Nd = "_xlSize3_2ch3a_111", Sd = "_xlSize4_2ch3a_112", Dd = "_xlSize5_2ch3a_113", Cd = "_xlSize6_2ch3a_114", zd = "_xlSize7_2ch3a_115", Md = "_xlSize8_2ch3a_116", Od = "_xlSize9_2ch3a_117", Id = "_xlSize10_2ch3a_118", jd = "_xlSize11_2ch3a_119", Td = "_xlSize12_2ch3a_120", Ed = "_xlOffset1_2ch3a_121", Ad = "_xlOffset2_2ch3a_122", Ld = "_xlOffset3_2ch3a_123", Rd = "_xlOffset4_2ch3a_124", Bd = "_xlOffset5_2ch3a_125", Pd = "_xlOffset6_2ch3a_126", qd = "_xlOffset7_2ch3a_127", Fd = "_xlOffset8_2ch3a_128", Kd = "_xlOffset9_2ch3a_129", Hd = "_xlOffset10_2ch3a_130", Wd = "_xlOffset11_2ch3a_131", Ud = "_xxlSize1_2ch3a_136", Vd = "_xxlSize2_2ch3a_137", Xd = "_xxlSize3_2ch3a_138", Gd = "_xxlSize4_2ch3a_139", Yd = "_xxlSize5_2ch3a_140", Zd = "_xxlSize6_2ch3a_141", Jd = "_xxlSize7_2ch3a_142", Qd = "_xxlSize8_2ch3a_143", eu = "_xxlSize9_2ch3a_144", tu = "_xxlSize10_2ch3a_145", nu = "_xxlSize11_2ch3a_146", ru = "_xxlSize12_2ch3a_147", ou = "_xxlOffset1_2ch3a_148", su = "_xxlOffset2_2ch3a_149", au = "_xxlOffset3_2ch3a_150", lu = "_xxlOffset4_2ch3a_151", cu = "_xxlOffset5_2ch3a_152", iu = "_xxlOffset6_2ch3a_153", du = "_xxlOffset7_2ch3a_154", uu = "_xxlOffset8_2ch3a_155", fu = "_xxlOffset9_2ch3a_156", _u = "_xxlOffset10_2ch3a_157", pu = "_xxlOffset11_2ch3a_158", hu = "_xxlOrderFirst_2ch3a_159", mu = "_xxlOrderLast_2ch3a_160", gu = "_orderFirst_2ch3a_163", bu = "_orderLast_2ch3a_164", yu = "_smOrderFirst_2ch3a_167", vu = "_smOrderLast_2ch3a_168", xu = "_mdOrderFirst_2ch3a_172", wu = "_mdOrderLast_2ch3a_173", ku = "_lgOrderFirst_2ch3a_177", $u = "_lgOrderLast_2ch3a_178", Nu = "_xlOrderFirst_2ch3a_182", Su = "_xlOrderLast_2ch3a_183", hn = {
  column: Rc,
  Size1: Bc,
  Size2: Pc,
  Size3: qc,
  Size4: Fc,
  Size5: Kc,
  Size6: Hc,
  Size7: Wc,
  Size8: Uc,
  Size9: Vc,
  Size10: Xc,
  Size11: Gc,
  Size12: Yc,
  Offset1: Zc,
  Offset2: Jc,
  Offset3: Qc,
  Offset4: ei,
  Offset5: ti,
  Offset6: ni,
  Offset7: ri,
  Offset8: oi,
  Offset9: si,
  Offset10: ai,
  Offset11: li,
  smSize1: ci,
  smSize2: ii,
  smSize3: di,
  smSize4: ui,
  smSize5: fi,
  smSize6: _i,
  smSize7: pi,
  smSize8: hi,
  smSize9: mi,
  smSize10: gi,
  smSize11: bi,
  smSize12: yi,
  smOffset1: vi,
  smOffset2: xi,
  smOffset3: wi,
  smOffset4: ki,
  smOffset5: $i,
  smOffset6: Ni,
  smOffset7: Si,
  smOffset8: Di,
  smOffset9: Ci,
  smOffset10: zi,
  smOffset11: Mi,
  mdSize1: Oi,
  mdSize2: Ii,
  mdSize3: ji,
  mdSize4: Ti,
  mdSize5: Ei,
  mdSize6: Ai,
  mdSize7: Li,
  mdSize8: Ri,
  mdSize9: Bi,
  mdSize10: Pi,
  mdSize11: qi,
  mdSize12: Fi,
  mdOffset1: Ki,
  mdOffset2: Hi,
  mdOffset3: Wi,
  mdOffset4: Ui,
  mdOffset5: Vi,
  mdOffset6: Xi,
  mdOffset7: Gi,
  mdOffset8: Yi,
  mdOffset9: Zi,
  mdOffset10: Ji,
  mdOffset11: Qi,
  lgSize1: ed,
  lgSize2: td,
  lgSize3: nd,
  lgSize4: rd,
  lgSize5: od,
  lgSize6: sd,
  lgSize7: ad,
  lgSize8: ld,
  lgSize9: cd,
  lgSize10: id,
  lgSize11: dd,
  lgSize12: ud,
  lgOffset1: fd,
  lgOffset2: _d,
  lgOffset3: pd,
  lgOffset4: hd,
  lgOffset5: md,
  lgOffset6: gd,
  lgOffset7: bd,
  lgOffset8: yd,
  lgOffset9: vd,
  lgOffset10: xd,
  lgOffset11: wd,
  xlSize1: kd,
  xlSize2: $d,
  xlSize3: Nd,
  xlSize4: Sd,
  xlSize5: Dd,
  xlSize6: Cd,
  xlSize7: zd,
  xlSize8: Md,
  xlSize9: Od,
  xlSize10: Id,
  xlSize11: jd,
  xlSize12: Td,
  xlOffset1: Ed,
  xlOffset2: Ad,
  xlOffset3: Ld,
  xlOffset4: Rd,
  xlOffset5: Bd,
  xlOffset6: Pd,
  xlOffset7: qd,
  xlOffset8: Fd,
  xlOffset9: Kd,
  xlOffset10: Hd,
  xlOffset11: Wd,
  xxlSize1: Ud,
  xxlSize2: Vd,
  xxlSize3: Xd,
  xxlSize4: Gd,
  xxlSize5: Yd,
  xxlSize6: Zd,
  xxlSize7: Jd,
  xxlSize8: Qd,
  xxlSize9: eu,
  xxlSize10: tu,
  xxlSize11: nu,
  xxlSize12: ru,
  xxlOffset1: ou,
  xxlOffset2: su,
  xxlOffset3: au,
  xxlOffset4: lu,
  xxlOffset5: cu,
  xxlOffset6: iu,
  xxlOffset7: du,
  xxlOffset8: uu,
  xxlOffset9: fu,
  xxlOffset10: _u,
  xxlOffset11: pu,
  xxlOrderFirst: hu,
  xxlOrderLast: mu,
  orderFirst: gu,
  orderLast: bu,
  smOrderFirst: yu,
  smOrderLast: vu,
  mdOrderFirst: xu,
  mdOrderLast: wu,
  lgOrderFirst: ku,
  lgOrderLast: $u,
  xlOrderFirst: Nu,
  xlOrderLast: Su
}, Du = [
  ["", "size", "offset", "order"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xxl", "sizeXxl", "offsetXxl", "orderXxl"]
], Cu = {
  first: "orderFirst",
  last: "orderLast"
};
function zu(e) {
  return typeof e == "number" ? { order: e } : {};
}
function ib({ className: e, style: n, ...r }) {
  const o = [hn.column], s = { ...n };
  for (const [y, z, K, A] of Du) {
    const O = r[z], d = r[K], S = r[A];
    if (O != null && o.push(hn[`${y}Size${O}`]), d != null && d > 0 && o.push(hn[`${y}Offset${d}`]), S === "first" || S === "last") {
      const I = `${y}${Cu[S]}`;
      hn[I] && o.push(hn[I]);
    } else S != null && Object.assign(s, zu(S));
  }
  const {
    size: c,
    offset: u,
    sizeSm: a,
    offsetSm: i,
    sizeMd: h,
    offsetMd: x,
    sizeLg: f,
    offsetLg: D,
    sizeXl: $,
    offsetXl: M,
    sizeXxl: C,
    offsetXxl: b,
    order: _,
    orderSm: g,
    orderMd: m,
    orderLg: N,
    orderXl: p,
    orderXxl: v,
    ...l
  } = r;
  return /* @__PURE__ */ t("div", { className: [...o, e].filter(Boolean).join(" "), style: s, ...l });
}
const Mu = "_stack_afbz7_1", Ou = "_gapXs_afbz7_29", Iu = "_gapSm_afbz7_33", ju = "_gapMd_afbz7_37", Tu = "_gapLg_afbz7_41", Eu = "_gapXl_afbz7_45", Jt = {
  stack: Mu,
  "dir-row": "_dir-row_afbz7_5",
  "dir-row-reverse": "_dir-row-reverse_afbz7_9",
  "dir-column": "_dir-column_afbz7_13",
  "dir-column-reverse": "_dir-column-reverse_afbz7_17",
  "wrap-nowrap": "_wrap-nowrap_afbz7_21",
  "wrap-wrap-reverse": "_wrap-wrap-reverse_afbz7_25",
  gapXs: Ou,
  gapSm: Iu,
  gapMd: ju,
  gapLg: Tu,
  gapXl: Eu,
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
}, Au = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function Lu(e) {
  return typeof e != "string" ? null : Au[e] ?? null;
}
function fr(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function db({
  orientation: e = "vertical",
  reverse: n = !1,
  wrap: r = !0,
  gap: o = "sm",
  align: s,
  justify: c,
  className: u,
  style: a,
  ...i
}) {
  const h = Lu(o), x = e === "horizontal" ? n ? "row-reverse" : "row" : n ? "column-reverse" : "column", f = {
    ...o != null && !h ? { gap: typeof o == "number" ? `${o}px` : o } : {},
    ...a
  };
  return /* @__PURE__ */ t(
    "div",
    {
      className: [
        Jt.stack,
        Jt[`dir-${x}`],
        fr(r) !== "wrap" ? Jt[`wrap-${fr(r)}`] : null,
        s != null ? Jt[`align-${s}`] : null,
        c != null ? Jt[`justify-${c}`] : null,
        h ? Jt[h] : null,
        u
      ].filter(Boolean).join(" "),
      style: f,
      ...i
    }
  );
}
const Ru = "_layout_1pcye_1", Bu = "_row_1pcye_7", _r = {
  layout: Ru,
  row: Bu
}, Pu = "_footer_khrs9_1", qu = {
  footer: Pu
};
function Fu({ className: e, children: n, ...r }) {
  return /* @__PURE__ */ t("footer", { className: [qu.footer, e].filter(Boolean).join(" "), ...r, children: n });
}
const Ku = "_header_6x0qv_1", Hu = {
  header: Ku
};
function Wu({ className: e, children: n, ...r }) {
  return /* @__PURE__ */ t("header", { className: [Hu.header, e].filter(Boolean).join(" "), ...r, children: n });
}
const Uu = "_sidebar_1tgxt_1", Vu = "_left_1tgxt_9", Xu = "_right_1tgxt_13", Gu = "_collapsed_1tgxt_17", Yu = "_responsive_1tgxt_25", Zu = "_overlay_1tgxt_33", Ju = "_mask_1tgxt_53", Wt = {
  sidebar: Uu,
  left: Vu,
  right: Xu,
  collapsed: Gu,
  responsive: Yu,
  overlay: Zu,
  mask: Ju
};
function Qu({
  position: e = "left",
  expanded: n = !0,
  responsive: r = !1,
  overlay: o = !1,
  onClose: s,
  className: c,
  children: u,
  ...a
}) {
  return Ne(() => {
    if (!o || !n || s == null) return;
    const i = (h) => {
      h.key === "Escape" && s();
    };
    return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
  }, [o, n, s]), /* @__PURE__ */ w(Me, { children: [
    o && n ? /* @__PURE__ */ t("div", { className: `${Wt.mask} se-layout-mask`, "aria-hidden": "true", onClick: s }) : null,
    /* @__PURE__ */ t(
      "aside",
      {
        className: [
          Wt.sidebar,
          e === "right" ? Wt.right : Wt.left,
          n ? null : Wt.collapsed,
          r ? Wt.responsive : null,
          o ? [Wt.overlay, "se-sidebar--overlay"] : null,
          c
        ].flat().filter(Boolean).join(" "),
        ...a,
        children: u
      }
    )
  ] });
}
function ub({ className: e, children: n, ...r }) {
  const o = [], s = [], c = [], u = [], a = [];
  return Pr.forEach(n, (i) => {
    if (!er(i)) {
      c.push(i);
      return;
    }
    i.type === Wu ? o.push(i) : i.type === Fu ? s.push(i) : i.type === Qu ? (i.props.position === "right" ? a : u).push(i) : c.push(i);
  }), /* @__PURE__ */ w("div", { className: [_r.layout, e].filter(Boolean).join(" "), ...r, children: [
    o,
    /* @__PURE__ */ w("div", { className: _r.row, children: [
      u,
      c,
      a
    ] }),
    s
  ] });
}
const ef = "_body_1i4wl_1", tf = {
  body: ef
};
function fb({ as: e = "main", className: n, children: r, ...o }) {
  return /* @__PURE__ */ t(e, { className: [tf.body, n].filter(Boolean).join(" "), ...o, children: r });
}
const nf = "_track_1eazj_1", rf = "_bar_1eazj_31", of = "_primary_1eazj_39", sf = "_success_1eazj_43", af = "_warning_1eazj_47", lf = "_danger_1eazj_51", cf = "_indeterminate_1eazj_55", df = "_circular_1eazj_69", uf = "_fill_1eazj_109", kt = {
  track: nf,
  "linear-xs": "_linear-xs_1eazj_11",
  "linear-sm": "_linear-sm_1eazj_15",
  "linear-md": "_linear-md_1eazj_19",
  "linear-lg": "_linear-lg_1eazj_23",
  "linear-xl": "_linear-xl_1eazj_27",
  bar: rf,
  primary: of,
  success: sf,
  warning: af,
  danger: lf,
  indeterminate: cf,
  "se-progress-slide": "_se-progress-slide_1eazj_1",
  circular: df,
  "circular-xs": "_circular-xs_1eazj_75",
  "circular-sm": "_circular-sm_1eazj_80",
  "circular-md": "_circular-md_1eazj_85",
  "circular-lg": "_circular-lg_1eazj_90",
  "circular-xl": "_circular-xl_1eazj_95",
  fill: uf,
  "se-progress-spin": "_se-progress-spin_1eazj_1"
};
function _b({
  value: e = 0,
  max: n = 100,
  tone: r = "primary",
  indeterminate: o = !1,
  variant: s = "linear",
  size: c = "md",
  className: u,
  ...a
}) {
  const i = n > 0 ? Math.min(n, Math.max(0, e)) : 0, h = n > 0 ? i / n * 100 : 0;
  if (s === "circular") {
    const x = typeof c == "string", f = 2, D = 10.5, $ = 2 * Math.PI * D, M = $ * (o ? 0.75 : 1), C = o ? 0 : $ * (1 - h / 100);
    return /* @__PURE__ */ w(
      "svg",
      {
        width: x ? void 0 : c,
        height: x ? void 0 : c,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": a["aria-label"],
        "aria-labelledby": a["aria-labelledby"],
        "aria-valuenow": o ? void 0 : Math.round(i),
        "aria-valuemin": 0,
        "aria-valuemax": n,
        id: a.id,
        style: a.style,
        className: [
          kt.circular,
          kt[r],
          x ? kt[`circular-${c}`] : null,
          o ? kt.indeterminate : null,
          u
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ t("circle", { className: kt.track, cx: 12, cy: 12, r: D, strokeWidth: f }),
          /* @__PURE__ */ t(
            "circle",
            {
              className: kt.fill,
              cx: 12,
              cy: 12,
              r: D,
              strokeWidth: f,
              strokeDasharray: `${M} ${$}`,
              strokeDashoffset: C
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
      "aria-valuenow": o ? void 0 : Math.round(i),
      "aria-valuemin": 0,
      "aria-valuemax": n,
      className: [
        kt.track,
        kt[r],
        typeof c == "string" ? kt[`linear-${c}`] : null,
        o ? kt.indeterminate : null,
        u
      ].filter(Boolean).join(" "),
      ...a,
      children: /* @__PURE__ */ t(
        "div",
        {
          className: kt.bar,
          style: o ? void 0 : { width: `${h}%` }
        }
      )
    }
  );
}
const ff = "_wrapper_1mukg_1", _f = {
  wrapper: ff
};
function pb({
  defaultTheme: e = "light",
  onChange: n,
  label: r = "Dark mode",
  className: o
}) {
  const [s, c] = V(() => (typeof document < "u" ? document.documentElement.dataset.theme : void 0) === "dark" ? !0 : e === "dark");
  Ne(() => {
    document.documentElement.dataset.theme = s ? "dark" : "light";
  }, []);
  const u = (a) => {
    const i = a.target.checked;
    c(i), document.documentElement.dataset.theme = i ? "dark" : "light", n?.(i ? "dark" : "light");
  };
  return /* @__PURE__ */ w("label", { className: [_f.wrapper, o].filter(Boolean).join(" "), children: [
    r,
    /* @__PURE__ */ t(ul, { checked: s, onChange: u })
  ] });
}
const pf = "_avatar_101wb_1", hf = "_xs_101wb_12", mf = "_sm_101wb_18", gf = "_md_101wb_24", bf = "_lg_101wb_30", yf = "_xl_101wb_36", vf = "_initials_101wb_42", xf = "_image_101wb_57", wf = "_status_101wb_64", kf = "_online_101wb_84", $f = "_offline_101wb_88", Nf = "_away_101wb_92", Qt = {
  avatar: pf,
  xs: hf,
  sm: mf,
  md: gf,
  lg: bf,
  xl: yf,
  initials: vf,
  image: xf,
  status: wf,
  online: kf,
  offline: $f,
  away: Nf
}, Bn = [
  "var(--dt-color-palette-0)",
  "var(--dt-color-palette-1)",
  "var(--dt-color-palette-2)",
  "var(--dt-color-palette-3)",
  "var(--dt-color-palette-4)",
  "var(--dt-color-palette-5)"
];
function Sf(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((n) => n[0]?.toUpperCase() ?? "").join("");
}
function Df(e) {
  let n = 0;
  for (let r = 0; r < e.length; r += 1)
    n = n * 31 + e.charCodeAt(r) >>> 0;
  return Bn[n % Bn.length] ?? Bn[0];
}
function hb({
  name: e,
  src: n,
  alt: r,
  size: o = "md",
  status: s,
  className: c
}) {
  const u = we(() => e ? Sf(e) : "?", [e]), a = we(() => e ? Df(e) : Bn[0], [e]), i = n ? /* @__PURE__ */ t("img", { className: Qt.image, src: n, alt: r ?? e ?? "" }) : /* @__PURE__ */ t("span", { "aria-hidden": "true", className: Qt.initials, style: { background: a }, children: u });
  return /* @__PURE__ */ w(
    "span",
    {
      className: [
        Qt.avatar,
        Qt[o],
        s ? Qt[s] : null,
        c
      ].filter(Boolean).join(" "),
      role: "img",
      "aria-label": r ?? e ?? "avatar",
      children: [
        i,
        s && /* @__PURE__ */ t("span", { className: Qt.status, "aria-hidden": "true" })
      ]
    }
  );
}
const Cf = "_root_9j3lx_1", zf = "_left_9j3lx_6", Mf = "_right_9j3lx_7", Of = "_panel_9j3lx_12", If = "_bottom_9j3lx_20", jf = "_tabList_9j3lx_24", Tf = "_underline_9j3lx_53", Ef = "_pills_9j3lx_72", Af = "_tab_9j3lx_24", Lf = "_active_9j3lx_113", Rf = "_disabled_9j3lx_139", It = {
  root: Cf,
  left: zf,
  right: Mf,
  panel: Of,
  bottom: If,
  tabList: jf,
  underline: Tf,
  pills: Ef,
  tab: Af,
  active: Lf,
  disabled: Rf
};
function mb({
  items: e,
  value: n,
  defaultValue: r,
  onChange: o,
  variant: s = "underline",
  position: c = "top",
  className: u
}) {
  const a = Ue(), i = le(null), [h, x] = V(r ?? e[0]?.key ?? ""), f = n ?? h, D = c === "left" || c === "right", $ = (b) => {
    x(b), o?.(b);
  }, M = (b) => {
    const _ = e.filter((N) => !N.disabled), g = _.findIndex((N) => N.key === f);
    let m = -1;
    b.key === "ArrowRight" || D && b.key === "ArrowDown" ? m = (g + 1) % _.length : b.key === "ArrowLeft" || D && b.key === "ArrowUp" ? m = (g - 1 + _.length) % _.length : b.key === "Home" ? m = 0 : b.key === "End" && (m = _.length - 1), m >= 0 && (b.preventDefault(), i.current?.querySelector(
      `[data-tab-key="${CSS.escape(_[m]?.key ?? "")}"]`
    )?.focus(), $(_[m]?.key ?? ""));
  }, C = e.find((b) => b.key === f);
  return /* @__PURE__ */ w("div", { className: [It.root, It[c], u].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ t(
      "div",
      {
        ref: i,
        role: "tablist",
        className: [It.tabList, It[s], It[c]].filter(Boolean).join(" "),
        onKeyDown: M,
        children: e.map((b) => {
          const _ = b.key === f;
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              role: "tab",
              id: `${a}-tab-${b.key}`,
              "data-tab-key": b.key,
              "aria-selected": _,
              "aria-controls": `${a}-panel-${b.key}`,
              tabIndex: _ ? 0 : -1,
              disabled: b.disabled,
              className: [
                It.tab,
                _ ? It.active : null,
                b.disabled ? It.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => $(b.key),
              children: b.label
            },
            b.key
          );
        })
      }
    ),
    C && /* @__PURE__ */ t(
      "div",
      {
        role: "tabpanel",
        id: `${a}-panel-${C.key}`,
        "aria-labelledby": `${a}-tab-${C.key}`,
        className: It.panel,
        children: C.content
      }
    )
  ] });
}
const Bf = "_root_ejeux_1", Pf = "_item_ejeux_9", qf = "_heading_ejeux_13", Ff = "_trigger_ejeux_17", Kf = "_disabled_ejeux_34", Hf = "_title_ejeux_48", Wf = "_chevron_ejeux_52", Uf = "_open_ejeux_59", Vf = "_content_ejeux_63", jt = {
  root: Bf,
  item: Pf,
  heading: qf,
  trigger: Ff,
  disabled: Kf,
  title: Hf,
  chevron: Wf,
  open: Uf,
  content: Vf
};
function gb({
  items: e,
  multiple: n = !1,
  value: r,
  defaultValue: o,
  onChange: s,
  className: c
}) {
  const u = Ue(), [a, i] = V(o ?? []), h = r ?? a, x = (f) => {
    const D = h.includes(f) ? h.filter(($) => $ !== f) : n ? [...h, f] : [f];
    i(D), s?.(D);
  };
  return /* @__PURE__ */ t("div", { className: [jt.root, c].filter(Boolean).join(" "), children: e.map((f) => {
    const D = h.includes(f.key), $ = `${u}-panel-${f.key}`, M = `${u}-trigger-${f.key}`;
    return /* @__PURE__ */ w("div", { className: jt.item, children: [
      /* @__PURE__ */ t("h3", { className: jt.heading, children: /* @__PURE__ */ w(
        "button",
        {
          type: "button",
          id: M,
          "aria-expanded": D,
          "aria-controls": $,
          disabled: f.disabled,
          className: [
            jt.trigger,
            f.disabled ? jt.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => x(f.key),
          children: [
            /* @__PURE__ */ t("span", { className: jt.title, children: f.title }),
            /* @__PURE__ */ t("span", { className: [jt.chevron, D ? jt.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" })
          ]
        }
      ) }),
      /* @__PURE__ */ t(
        "div",
        {
          id: $,
          role: "region",
          "aria-labelledby": M,
          hidden: !D,
          className: jt.content,
          children: f.content
        }
      )
    ] }, f.key);
  }) });
}
const Xf = "_textarea_1qm9v_1", Gf = "_xs_1qm9v_25", Yf = "_sm_1qm9v_30", Zf = "_md_1qm9v_35", Jf = "_lg_1qm9v_40", Qf = "_xl_1qm9v_45", Hn = {
  textarea: Xf,
  xs: Gf,
  sm: Yf,
  md: Zf,
  lg: Jf,
  xl: Qf,
  "resize-none": "_resize-none_1qm9v_50",
  "resize-vertical": "_resize-vertical_1qm9v_54",
  "resize-horizontal": "_resize-horizontal_1qm9v_58",
  "resize-both": "_resize-both_1qm9v_62"
}, bb = qe(function({ size: n = "md", resize: r = "none", className: o, ...s }, c) {
  return /* @__PURE__ */ t(
    "textarea",
    {
      ref: c,
      className: [
        Hn.textarea,
        Hn[n],
        Hn[`resize-${r}`],
        o
      ].filter(Boolean).join(" "),
      ...s
    }
  );
}), e_ = "_typography_1n43h_1", t_ = "_caption_1n43h_45", n_ = "_overline_1n43h_51", pr = {
  typography: e_,
  "display-1": "_display-1_1n43h_5",
  "display-2": "_display-2_1n43h_10",
  "display-3": "_display-3_1n43h_15",
  "display-4": "_display-4_1n43h_20",
  "display-5": "_display-5_1n43h_25",
  "display-6": "_display-6_1n43h_30",
  "body-1": "_body-1_1n43h_35",
  "body-2": "_body-2_1n43h_40",
  caption: t_,
  overline: n_
}, r_ = {
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
}, yb = qe(function({ variant: n = "body-1", as: r, className: o, children: s, ...c }, u) {
  const a = r ?? r_[n];
  return /* @__PURE__ */ t(
    a,
    {
      ref: u,
      className: [pr.typography, pr[n], o].filter(Boolean).join(" "),
      ...c,
      children: s
    }
  );
}), o_ = "_root_dvw01_1", s_ = "_trigger_dvw01_9", a_ = "_invalid_dvw01_40", l_ = "_placeholder_dvw01_46", c_ = "_label_dvw01_53", i_ = "_chevron_dvw01_59", d_ = "_chevronOpen_dvw01_69", u_ = "_menu_dvw01_73", f_ = "_option_dvw01_88", __ = "_disabled_dvw01_99", p_ = "_active_dvw01_103", h_ = "_selected_dvw01_104", m_ = "_header_dvw01_114", g_ = "_xs_dvw01_121", b_ = "_sm_dvw01_127", y_ = "_md_dvw01_133", v_ = "_lg_dvw01_139", x_ = "_xl_dvw01_145", st = {
  root: o_,
  trigger: s_,
  invalid: a_,
  placeholder: l_,
  label: c_,
  chevron: i_,
  chevronOpen: d_,
  menu: u_,
  option: f_,
  disabled: __,
  active: p_,
  selected: h_,
  header: m_,
  xs: g_,
  sm: b_,
  md: y_,
  lg: v_,
  xl: x_
}, w_ = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function vb({
  options: e = [],
  value: n,
  defaultValue: r,
  onChange: o,
  placeholder: s = "Select…",
  size: c = "md",
  invalid: u = !1,
  disabled: a = !1,
  className: i,
  ...h
}) {
  const x = Ue(), f = `${x}-listbox`, D = le(null), $ = le(null), [M, C] = V(r), [b, _] = V(!1), g = n ?? M, m = e.map((d, S) => d.label === "" || d.disabled ? -1 : S).filter((d) => d >= 0), N = e.findIndex((d) => d.value === g), [p, v] = V(
    () => m.includes(0) ? 0 : m[0] ?? -1
  ), l = q(() => {
    if (a) return;
    const d = N >= 0 && m.includes(N) ? N : m[0];
    v(d ?? -1), _(!0);
  }, [a, N, m]), y = q(() => {
    _(!1), $.current?.focus();
  }, []);
  Ne(() => {
    if (!b) return;
    const d = (S) => {
      D.current && !D.current.contains(S.target) && _(!1);
    };
    return document.addEventListener("mousedown", d), () => document.removeEventListener("mousedown", d);
  }, [b]);
  const z = (d) => {
    C(d), o?.(d), _(!1), $.current?.focus();
  }, K = (d) => {
    if (m.length === 0) return;
    const S = m.includes(p) ? m.indexOf(p) : 0, I = m[(S + d + m.length) % m.length];
    I != null && v(I);
  }, A = (d) => {
    if (!b) {
      d.key === "ArrowDown" && (d.preventDefault(), l());
      return;
    }
    switch (d.key) {
      case "ArrowDown":
        d.preventDefault(), K(1);
        break;
      case "ArrowUp":
        d.preventDefault(), K(-1);
        break;
      case "Home":
        d.preventDefault(), m[0] != null && v(m[0]);
        break;
      case "End":
        d.preventDefault(), m[m.length - 1] != null && v(m[m.length - 1]);
        break;
      case "Enter":
      case " ":
        d.preventDefault(), p >= 0 && e[p] && m.includes(p) && z(e[p]?.value ?? "");
        break;
      case "Escape":
        d.preventDefault(), y();
        break;
      case "Tab":
        _(!1);
        break;
    }
  }, O = e.find((d) => d.value === g);
  return /* @__PURE__ */ w("div", { ref: D, className: [st.root, i].filter(Boolean).join(" "), onKeyDown: A, children: [
    /* @__PURE__ */ w(
      "button",
      {
        ref: $,
        type: "button",
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-expanded": b,
        "aria-controls": f,
        "aria-invalid": u || void 0,
        disabled: a,
        className: [
          st.trigger,
          st[c],
          b ? st.open : null,
          u ? st.invalid : null
        ].filter(Boolean).join(" "),
        onClick: () => b ? _(!1) : l(),
        ...h,
        children: [
          /* @__PURE__ */ t("span", { className: O ? st.label : st.placeholder, children: O ? O.label : s }),
          /* @__PURE__ */ t(
            "span",
            {
              className: [st.chevron, b ? st.chevronOpen : null].filter(Boolean).join(" "),
              style: { backgroundImage: w_ },
              "aria-hidden": "true"
            }
          )
        ]
      }
    ),
    b && /* @__PURE__ */ t(
      "div",
      {
        id: f,
        role: "listbox",
        "aria-activedescendant": p >= 0 ? `${x}-option-${p}` : void 0,
        className: st.menu,
        children: e.map(
          (d, S) => d.label === "" ? /* @__PURE__ */ t("div", { className: st.header, role: "presentation", children: d.value }, d.value) : /* @__PURE__ */ t(
            "div",
            {
              id: `${x}-option-${S}`,
              role: "option",
              "aria-selected": d.value === g,
              "aria-disabled": d.disabled || void 0,
              className: [
                st.option,
                S === p ? st.active : null,
                d.value === g ? st.selected : null,
                d.disabled ? st.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => {
                d.disabled || z(d.value);
              },
              onMouseEnter: () => {
                !d.disabled && d.label !== "" && v(S);
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
const k_ = "_root_1ap80_1", $_ = "_wrap_1ap80_9", N_ = "_input_1ap80_26", S_ = "_invalid_1ap80_31", D_ = "_clear_1ap80_57", C_ = "_menu_1ap80_82", z_ = "_option_1ap80_97", M_ = "_disabled_1ap80_108", O_ = "_active_1ap80_112", I_ = "_empty_1ap80_122", j_ = "_xs_1ap80_128", T_ = "_sm_1ap80_135", E_ = "_md_1ap80_142", A_ = "_lg_1ap80_149", L_ = "_xl_1ap80_156", $t = {
  root: k_,
  wrap: $_,
  input: N_,
  invalid: S_,
  clear: D_,
  menu: C_,
  option: z_,
  disabled: M_,
  active: O_,
  empty: I_,
  xs: j_,
  sm: T_,
  md: E_,
  lg: A_,
  xl: L_
}, R_ = (e, n) => e.label.toLowerCase().includes(n.toLowerCase());
function xb({
  options: e = [],
  value: n,
  defaultValue: r = "",
  onChange: o,
  onSelect: s,
  placeholder: c = "",
  size: u = "md",
  invalid: a = !1,
  disabled: i = !1,
  filter: h = R_,
  className: x,
  ...f
}) {
  const D = Ue(), $ = `${D}-listbox`, M = le(null), C = le(null), [b, _] = V(r), [g, m] = V(!1), N = n ?? b, p = we(
    () => N.trim() === "" ? [...e] : e.filter((j) => h(j, N)),
    [e, N, h]
  ), v = p.map((j, X) => j.disabled ? -1 : X).filter((j) => j >= 0), [l, y] = V(-1), z = (j) => {
    _(j), o?.(j);
  }, K = (j) => {
    z(j.label), s?.(j.value, j), m(!1);
  }, A = (j) => {
    if (v.length === 0) return;
    const X = v.includes(l) ? v.indexOf(l) : j === 1 ? -1 : 0, ne = v[(X + j + v.length) % v.length];
    ne != null && y(ne);
  }, O = (j) => {
    i || (z(j.target.value), m(!0), y(-1));
  }, d = () => {
    i || N !== "" && m(!0);
  }, S = (j) => {
    M.current && !M.current.contains(j.relatedTarget) && m(!1);
  }, I = (j) => {
    if (!i)
      switch (j.key) {
        case "ArrowDown":
          j.preventDefault(), g ? A(1) : (m(!0), y(v[0] ?? -1));
          break;
        case "ArrowUp":
          j.preventDefault(), g && A(-1);
          break;
        case "Enter":
          j.preventDefault(), g && l >= 0 && p[l] && K(p[l]);
          break;
        case "Escape":
          j.preventDefault(), m(!1);
          break;
        case "Tab":
          g && l >= 0 && p[l] && K(p[l]), m(!1);
          break;
      }
  }, E = () => {
    z(""), y(-1), m(!0), C.current?.focus();
  };
  return /* @__PURE__ */ w("div", { ref: M, className: [$t.root, x].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ w("div", { className: [$t.wrap, $t[u], a ? $t.invalid : null].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ t(
        "input",
        {
          ref: C,
          type: "text",
          role: "combobox",
          "aria-expanded": g,
          "aria-controls": $,
          "aria-autocomplete": "list",
          "aria-activedescendant": g && l >= 0 ? `${D}-option-${l}` : void 0,
          "aria-invalid": a || void 0,
          disabled: i,
          value: N,
          placeholder: c,
          className: $t.input,
          onChange: O,
          onFocus: d,
          onBlur: S,
          onKeyDown: I,
          ...f
        }
      ),
      N !== "" && !i && /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: $t.clear,
          "aria-label": "Clear",
          onClick: E,
          children: "×"
        }
      )
    ] }),
    g && /* @__PURE__ */ t("div", { id: $, role: "listbox", className: $t.menu, children: p.length === 0 ? /* @__PURE__ */ t("div", { className: $t.empty, children: "No matches" }) : p.map((j, X) => /* @__PURE__ */ t(
      "div",
      {
        id: `${D}-option-${X}`,
        role: "option",
        "aria-selected": !1,
        "aria-disabled": j.disabled || void 0,
        className: [
          $t.option,
          X === l ? $t.active : null,
          j.disabled ? $t.disabled : null
        ].filter(Boolean).join(" "),
        onClick: () => {
          j.disabled || K(j);
        },
        onMouseDown: (ne) => {
          ne.preventDefault(), j.disabled || K(j);
        },
        onMouseEnter: () => {
          j.disabled || y(X);
        },
        children: j.label
      },
      j.value
    )) })
  ] });
}
const B_ = "_box_186wt_1", P_ = "_option_186wt_12", q_ = "_disabled_186wt_23", F_ = "_selected_186wt_27", K_ = "_active_186wt_33", mn = {
  box: B_,
  option: P_,
  disabled: q_,
  selected: F_,
  active: K_
};
function wb({
  options: e = [],
  value: n,
  defaultValue: r,
  multiple: o = !1,
  onChange: s,
  className: c,
  style: u,
  ...a
}) {
  const i = Ue(), [h, x] = V(() => {
    const p = r;
    return p == null ? [] : Array.isArray(p) ? [...p] : [p];
  }), f = n == null ? h : Array.isArray(n) ? n : [n], D = e.findIndex((p) => !p.disabled), [$, M] = V(() => D >= 0 ? D : 0), C = le(""), b = le(null), _ = (p) => {
    x(p), s?.(o ? p : p[0] ?? "");
  }, g = e.map((p, v) => p.disabled ? -1 : v).filter((p) => p >= 0), m = (p) => {
    const v = e[p];
    if (!(!v || v.disabled))
      if (M(p), o) {
        const l = f.includes(v.value) ? f.filter((y) => y !== v.value) : [...f, v.value];
        _(l);
      } else
        _([v.value]);
  }, N = (p) => {
    if (g.length === 0) return;
    const v = g.includes($) ? $ : g[0];
    let l = -1;
    if (p.key === "ArrowDown")
      l = g[(g.indexOf(v) + 1) % g.length];
    else if (p.key === "ArrowUp")
      l = g[(g.indexOf(v) - 1 + g.length) % g.length];
    else if (p.key === "Home")
      l = g[0];
    else if (p.key === "End")
      l = g[g.length - 1];
    else if (p.key === "Enter" || p.key === " ") {
      p.preventDefault(), m(v);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(p.key)) {
      p.preventDefault();
      const y = (C.current + p.key).toLowerCase();
      C.current = y, b.current && clearTimeout(b.current), b.current = setTimeout(() => {
        C.current = "";
      }, 500);
      const z = [...g, ...g], K = g.indexOf(v) + 1, A = z.slice(K).find(
        (O) => e[O]?.label.toLowerCase().startsWith(y)
      );
      A != null && M(A);
      return;
    }
    l >= 0 && (p.preventDefault(), M(l), o || _([e[l]?.value ?? ""]));
  };
  return /* @__PURE__ */ t(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": o || void 0,
      "aria-activedescendant": e[$] ? `${i}-option-${$}` : void 0,
      style: u,
      className: [mn.box, c].filter(Boolean).join(" "),
      onKeyDown: N,
      ...a,
      children: e.map((p, v) => {
        const l = f.includes(p.value), y = v === $;
        return /* @__PURE__ */ t(
          "div",
          {
            id: `${i}-option-${v}`,
            role: "option",
            "aria-selected": l,
            "aria-disabled": p.disabled || void 0,
            className: [
              mn.option,
              l ? mn.selected : null,
              y ? mn.active : null,
              p.disabled ? mn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => m(v),
            children: p.label
          },
          p.value
        );
      })
    }
  );
}
const H_ = "_group_qro0q_1", W_ = "_legend_qro0q_8", U_ = "_list_qro0q_16", V_ = "_item_qro0q_25", X_ = "_disabled_qro0q_32", G_ = "_label_qro0q_37", Y_ = "_checkbox_qro0q_48", Ut = {
  group: H_,
  legend: W_,
  list: U_,
  item: V_,
  disabled: X_,
  label: G_,
  checkbox: Y_
};
function kb({
  options: e = [],
  value: n,
  defaultValue: r = [],
  onChange: o,
  legend: s,
  name: c,
  className: u
}) {
  const [a, i] = V(() => [...r]), h = n ?? a, x = (f, D) => {
    const $ = D ? [...h, f] : h.filter((M) => M !== f);
    i($), o?.($);
  };
  return /* @__PURE__ */ w("fieldset", { className: [Ut.group, u].filter(Boolean).join(" "), children: [
    s != null && /* @__PURE__ */ t("legend", { className: Ut.legend, children: s }),
    /* @__PURE__ */ t("ul", { className: Ut.list, children: e.map((f) => {
      const D = h.includes(f.value);
      return /* @__PURE__ */ t(
        "li",
        {
          className: [Ut.item, f.disabled ? Ut.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ w("label", { className: Ut.label, children: [
            /* @__PURE__ */ t(
              "input",
              {
                type: "checkbox",
                className: Ut.checkbox,
                name: c,
                value: f.value,
                checked: D,
                disabled: f.disabled,
                onChange: ($) => x(f.value, $.target.checked)
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
const Z_ = "_group_1dyra_1", J_ = "_legend_1dyra_8", Q_ = "_list_1dyra_16", e1 = "_item_1dyra_25", t1 = "_disabled_1dyra_32", n1 = "_label_1dyra_37", r1 = "_radio_1dyra_48", Vt = {
  group: Z_,
  legend: J_,
  list: Q_,
  item: e1,
  disabled: t1,
  label: n1,
  radio: r1
};
function $b({
  options: e = [],
  value: n,
  defaultValue: r,
  onChange: o,
  legend: s,
  name: c,
  className: u
}) {
  const [a, i] = V(r), h = n ?? a, x = (f) => {
    i(f), o?.(f);
  };
  return /* @__PURE__ */ w("fieldset", { className: [Vt.group, u].filter(Boolean).join(" "), children: [
    s != null && /* @__PURE__ */ t("legend", { className: Vt.legend, children: s }),
    /* @__PURE__ */ t("ul", { className: Vt.list, children: e.map((f) => {
      const D = f.value === h;
      return /* @__PURE__ */ t(
        "li",
        {
          className: [Vt.item, f.disabled ? Vt.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ w("label", { className: Vt.label, children: [
            /* @__PURE__ */ t(
              "input",
              {
                type: "radio",
                className: Vt.radio,
                name: c,
                value: f.value,
                checked: D,
                disabled: f.disabled,
                onChange: ($) => x($.target.value)
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
const o1 = "_bar_5dkw6_1", s1 = "_option_5dkw6_12", a1 = "_selected_5dkw6_33", l1 = "_sm_5dkw6_49", c1 = "_md_5dkw6_55", i1 = "_lg_5dkw6_61", gn = {
  bar: o1,
  option: s1,
  selected: a1,
  sm: l1,
  md: c1,
  lg: i1
};
function Nb({
  options: e = [],
  value: n,
  defaultValue: r,
  onChange: o,
  size: s = "md",
  className: c,
  ...u
}) {
  const [a, i] = V(
    r ?? e[0]?.value
  ), h = n ?? a, x = (f) => {
    i(f), o?.(f);
  };
  return /* @__PURE__ */ t(
    "div",
    {
      role: "group",
      className: [gn.bar, gn[s], c].filter(Boolean).join(" "),
      ...u,
      children: e.map((f) => {
        const D = f.value === h;
        return /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            "aria-pressed": D,
            disabled: f.disabled,
            className: [
              gn.option,
              D ? gn.selected : null,
              f.disabled ? gn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => x(f.value),
            children: f.label
          },
          f.value
        );
      })
    }
  );
}
const d1 = "_toggle_1lv03_1", u1 = "_pressed_1lv03_29", f1 = "_sm_1lv03_41", _1 = "_md_1lv03_47", p1 = "_lg_1lv03_53", h1 = "_fullWidth_1lv03_59", jn = {
  toggle: d1,
  pressed: u1,
  sm: f1,
  md: _1,
  lg: p1,
  fullWidth: h1
}, Sb = qe(
  function({
    pressed: n,
    defaultPressed: r = !1,
    onChange: o,
    size: s = "md",
    fullWidth: c = !1,
    className: u,
    type: a = "button",
    ...i
  }, h) {
    const [x, f] = V(r), D = n ?? x, $ = () => {
      const M = !D;
      f(M), o?.(M);
    };
    return /* @__PURE__ */ t(
      "button",
      {
        ref: h,
        type: a,
        "aria-pressed": D,
        className: [
          jn.toggle,
          jn[s],
          D ? jn.pressed : null,
          c ? jn.fullWidth : null,
          u
        ].filter(Boolean).join(" "),
        onClick: $,
        ...i
      }
    );
  }
), m1 = "_root_6843t_1", g1 = "_action_6843t_8", b1 = "_caret_6843t_32", y1 = "_sm_6843t_65", v1 = "_md_6843t_77", x1 = "_lg_6843t_89", w1 = "_menu_6843t_101", k1 = "_item_6843t_114", $1 = "_disabled_6843t_126", N1 = "_active_6843t_130", S1 = "_danger_6843t_139", Tt = {
  root: m1,
  action: g1,
  caret: b1,
  sm: y1,
  md: v1,
  lg: x1,
  menu: w1,
  item: k1,
  disabled: $1,
  active: N1,
  danger: S1
};
function Db({
  label: e,
  onClick: n,
  items: r = [],
  size: o = "md",
  disabled: s = !1,
  className: c,
  ...u
}) {
  const a = Ue(), i = `${a}-menu`, h = le(null), x = le(null), [f, D] = V(!1), [$, M] = V(-1), C = r.map((p, v) => p.disabled ? -1 : v).filter((p) => p >= 0), b = q(() => {
    s || (M(C[0] ?? -1), D(!0));
  }, [s, C]), _ = q(() => {
    D(!1), x.current?.focus();
  }, []);
  Ne(() => {
    if (!f) return;
    const p = (v) => {
      h.current && !h.current.contains(v.target) && D(!1);
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, [f]);
  const g = (p) => {
    const v = r[p];
    !v || v.disabled || (v.onClick?.(), D(!1), x.current?.focus());
  }, m = (p) => {
    if (C.length === 0) return;
    const v = C.includes($) ? C.indexOf($) : p === 1 ? -1 : 0, l = C[(v + p + C.length) % C.length];
    l != null && M(l);
  }, N = (p) => {
    if (!f) {
      (p.key === "ArrowDown" || p.key === "Enter" || p.key === " ") && (p.preventDefault(), b());
      return;
    }
    switch (p.key) {
      case "ArrowDown":
        p.preventDefault(), m(1);
        break;
      case "ArrowUp":
        p.preventDefault(), m(-1);
        break;
      case "Home":
        p.preventDefault(), C[0] != null && M(C[0]);
        break;
      case "End":
        p.preventDefault(), C[C.length - 1] != null && M(C[C.length - 1]);
        break;
      case "Enter":
      case " ":
        p.preventDefault(), $ >= 0 && g($);
        break;
      case "Escape":
        p.preventDefault(), _();
        break;
      case "Tab":
        D(!1);
        break;
    }
  };
  return /* @__PURE__ */ w(
    "div",
    {
      ref: h,
      className: [Tt.root, Tt[o], c].filter(Boolean).join(" "),
      onKeyDown: N,
      children: [
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: Tt.action,
            disabled: s,
            onClick: n,
            children: e
          }
        ),
        /* @__PURE__ */ t(
          "button",
          {
            ref: x,
            type: "button",
            className: Tt.caret,
            "aria-haspopup": "menu",
            "aria-expanded": f,
            "aria-controls": i,
            "aria-label": "More actions",
            disabled: s,
            onClick: () => f ? D(!1) : b(),
            children: "▾"
          }
        ),
        f && /* @__PURE__ */ t(
          "div",
          {
            id: i,
            role: "menu",
            "aria-activedescendant": $ >= 0 ? `${a}-item-${$}` : void 0,
            className: Tt.menu,
            ...u,
            children: r.map((p, v) => /* @__PURE__ */ t(
              "div",
              {
                id: `${a}-item-${v}`,
                role: "menuitem",
                "aria-disabled": p.disabled || void 0,
                className: [
                  Tt.item,
                  v === $ ? Tt.active : null,
                  p.danger ? Tt.danger : null,
                  p.disabled ? Tt.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => g(v),
                onMouseEnter: () => {
                  p.disabled || M(v);
                },
                children: p.label
              },
              p.key
            ))
          }
        )
      ]
    }
  );
}
const D1 = "_textbox_1eb0k_1", C1 = "_invalid_1eb0k_31", z1 = "_xs_1eb0k_37", M1 = "_sm_1eb0k_43", O1 = "_md_1eb0k_49", I1 = "_lg_1eb0k_55", j1 = "_xl_1eb0k_61", Wn = {
  textbox: D1,
  invalid: C1,
  xs: z1,
  sm: M1,
  md: O1,
  lg: I1,
  xl: j1
}, Cb = qe(function({ size: n = "md", invalid: r = !1, className: o, type: s = "text", ...c }, u) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: u,
      type: s,
      className: [Wn.textbox, Wn[n], r ? Wn.invalid : null, o].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...c
    }
  );
}), T1 = "_wrapper_164zy_1", E1 = "_input_164zy_8", A1 = "_invalid_164zy_38", L1 = "_toggle_164zy_44", R1 = "_xs_164zy_79", B1 = "_sm_164zy_85", P1 = "_md_164zy_91", q1 = "_lg_164zy_97", F1 = "_xl_164zy_103", bn = {
  wrapper: T1,
  input: E1,
  invalid: A1,
  toggle: L1,
  xs: R1,
  sm: B1,
  md: P1,
  lg: q1,
  xl: F1
}, zb = qe(function({
  size: n = "md",
  invalid: r = !1,
  className: o,
  disabled: s,
  showLabel: c = "Show password",
  hideLabel: u = "Hide password",
  ...a
}, i) {
  const [h, x] = V(!1);
  return /* @__PURE__ */ w("div", { className: bn.wrapper, children: [
    /* @__PURE__ */ t(
      "input",
      {
        ref: i,
        type: h ? "text" : "password",
        disabled: s,
        className: [bn.input, bn[n], r ? bn.invalid : null, o].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...a
      }
    ),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: bn.toggle,
        "aria-pressed": h,
        "aria-label": h ? u : c,
        disabled: s,
        onClick: () => x((f) => !f),
        children: /* @__PURE__ */ t(Ve, { name: h ? "eye-off" : "eye", size: 16 })
      }
    )
  ] });
}), K1 = "_mask_evq34_1", H1 = "_invalid_evq34_31", W1 = "_xs_evq34_37", U1 = "_sm_evq34_43", V1 = "_md_evq34_49", X1 = "_lg_evq34_55", G1 = "_xl_evq34_61", Un = {
  mask: K1,
  invalid: H1,
  xs: W1,
  sm: U1,
  md: V1,
  lg: X1,
  xl: G1
};
function hr(e, n) {
  let r = e.replace(/\D/g, ""), o = "";
  for (const s of n)
    if (s === "#") {
      if (r.length === 0) break;
      o += r[0] ?? "", r = r.slice(1);
    } else if (r.length > 0)
      o += s;
    else
      break;
  return o;
}
const Mb = qe(function({
  size: n = "md",
  invalid: r = !1,
  mask: o,
  value: s,
  defaultValue: c = "",
  onChange: u,
  className: a,
  onKeyDown: i,
  ...h
}, x) {
  const [f, D] = V(c ?? ""), $ = s !== void 0, M = $ ? s ?? "" : f, C = (g) => {
    const m = hr(g, o);
    return $ || D(m), u?.(m), m;
  };
  return /* @__PURE__ */ t(
    "input",
    {
      ref: x,
      type: "text",
      value: M,
      onChange: (g) => {
        C(g.target.value);
      },
      onKeyDown: (g) => {
        if (g.key === "Backspace") {
          const m = g.currentTarget.selectionStart ?? M.length, N = M[m - 1];
          if (N !== void 0 && !/\d/.test(N)) {
            g.preventDefault();
            const p = M.replace(/\D/g, "");
            C(hr(p.slice(0, -1), o));
          }
        }
        i?.(g);
      },
      className: [Un.mask, Un[n], r ? Un.invalid : null, a].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...h
    }
  );
}), Y1 = "_wrapper_aus1c_1", Z1 = "_input_aus1c_8", J1 = "_invalid_aus1c_38", Q1 = "_button_aus1c_44", ep = "_up_aus1c_76", tp = "_down_aus1c_81", np = "_xs_aus1c_86", rp = "_sm_aus1c_92", op = "_md_aus1c_98", sp = "_lg_aus1c_104", ap = "_xl_aus1c_110", qt = {
  wrapper: Y1,
  input: Z1,
  invalid: J1,
  button: Q1,
  up: ep,
  down: tp,
  xs: np,
  sm: rp,
  md: op,
  lg: sp,
  xl: ap
};
function Yn(e) {
  const n = parseFloat(e);
  return Number.isNaN(n) ? null : n;
}
function lp(e) {
  let n = "", r = !1;
  for (const o of e)
    o >= "0" && o <= "9" ? n += o : o === "." && !r ? (r = !0, n += o) : o === "-" && n.length === 0 && (n += o);
  return n;
}
function Ar(e, n, r) {
  return Math.min(r ?? 1 / 0, Math.max(n ?? -1 / 0, e));
}
function cp(e, n, r) {
  return n === void 0 ? e : n + Math.round((e - n) / r) * r;
}
function ip(e, n, r, o, s) {
  const u = Yn(e) ?? r ?? 0;
  let a;
  return r === void 0 ? a = u + n * s : n > 0 ? a = r + Math.ceil((u - r + 1e-9) / s) * s : a = r + Math.floor((u - r - 1e-9) / s) * s, Ar(a, r, o);
}
const Ob = qe(function({
  size: n = "md",
  invalid: r = !1,
  className: o,
  disabled: s,
  value: c,
  defaultValue: u,
  onChange: a,
  min: i,
  max: h,
  step: x = 1,
  incrementLabel: f = "Increment",
  decrementLabel: D = "Decrement",
  onBlur: $,
  onKeyDown: M,
  ...C
}, b) {
  const [_, g] = V(u != null ? String(u) : ""), m = c !== void 0, N = m ? c == null ? "" : String(c) : _, p = (A) => {
    m || g(A), a?.(Yn(A));
  }, v = (A) => {
    m || g(String(A)), a?.(A);
  }, l = (A) => {
    s || v(ip(N, A, i, h, x));
  }, y = (A) => {
    p(lp(A.target.value));
  }, z = (A) => {
    A.key === "ArrowUp" ? (A.preventDefault(), l(1)) : A.key === "ArrowDown" && (A.preventDefault(), l(-1)), M?.(A);
  }, K = (A) => {
    const O = Yn(N);
    O === null ? (m || g(""), a?.(null)) : v(Ar(cp(O, i, x), i, h)), $?.(A);
  };
  return /* @__PURE__ */ w("div", { className: qt.wrapper, children: [
    /* @__PURE__ */ t(
      "input",
      {
        ref: b,
        type: "text",
        inputMode: "decimal",
        autoComplete: "off",
        value: N,
        disabled: s,
        onChange: y,
        onKeyDown: z,
        onBlur: K,
        className: [qt.input, qt[n], r ? qt.invalid : null, o].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...C
      }
    ),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: [qt.button, qt.up].join(" "),
        "aria-label": f,
        disabled: s,
        onClick: () => l(1),
        children: /* @__PURE__ */ t(Ve, { name: "chevron-up", size: 14 })
      }
    ),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: [qt.button, qt.down].join(" "),
        "aria-label": D,
        disabled: s,
        onClick: () => l(-1),
        children: /* @__PURE__ */ t(Ve, { name: "chevron-down", size: 14 })
      }
    )
  ] });
}), xe = {}, dp = [
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
function bt(e, n, r) {
  return Math.min(r, Math.max(n, e));
}
function Zn(e) {
  const n = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(e.trim());
  if (!n) return null;
  let r = n[1];
  return r.length === 3 && (r = r.split("").map((o) => o + o).join("")), {
    r: Number.parseInt(r.slice(0, 2), 16),
    g: Number.parseInt(r.slice(2, 4), 16),
    b: Number.parseInt(r.slice(4, 6), 16),
    a: 1
  };
}
function up({ r: e, g: n, b: r }) {
  const o = (s) => Math.round(s).toString(16).padStart(2, "0");
  return `#${o(e)}${o(n)}${o(r)}`;
}
function fp({ r: e, g: n, b: r }) {
  const o = e / 255, s = n / 255, c = r / 255, u = Math.max(o, s, c), a = Math.min(o, s, c), i = u - a;
  let h = 0;
  return i !== 0 && (u === o ? h = (s - c) / i % 6 : u === s ? h = (c - o) / i + 2 : h = (o - s) / i + 4, h *= 60, h < 0 && (h += 360)), {
    h,
    s: u === 0 ? 0 : i / u,
    v: u
  };
}
function en({ h: e, s: n, v: r }) {
  const o = r * n, s = e / 60, c = o * (1 - Math.abs(s % 2 - 1));
  let u = 0, a = 0, i = 0;
  s < 1 ? (u = o, a = c) : s < 2 ? (u = c, a = o) : s < 3 ? (a = o, i = c) : s < 4 ? (a = c, i = o) : s < 5 ? (u = c, i = o) : (u = o, i = c);
  const h = r - o;
  return {
    r: Math.round((u + h) * 255),
    g: Math.round((a + h) * 255),
    b: Math.round((i + h) * 255),
    a: 1
  };
}
function _p(e) {
  const n = Zn(e);
  if (n) return n;
  const r = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*([\d.]+))?\s*\)$/i.exec(
    e.trim()
  );
  return r ? {
    r: bt(Number(r[1]), 0, 255),
    g: bt(Number(r[2]), 0, 255),
    b: bt(Number(r[3]), 0, 255),
    a: r[4] != null ? bt(Number(r[4]), 0, 1) : 1
  } : null;
}
function mr({ r: e, g: n, b: r, a: o }) {
  return o >= 1 ? `rgb(${e}, ${n}, ${r})` : `rgba(${e}, ${n}, ${r}, ${Math.round(o * 100) / 100})`;
}
const Ib = ({
  value: e = "#000000",
  showSaturation: n = !0,
  showRgba: r = !0,
  showPalette: o = !0,
  palette: s = dp,
  showButton: c = !1,
  showArrow: u = !0,
  disabled: a = !1,
  invalid: i = !1,
  placeholder: h = "",
  size: x = "md",
  tabIndex: f = 0,
  className: D,
  onChange: $,
  onValueChange: M,
  onOpen: C,
  onClose: b
}) => {
  const _ = le(null), g = le(null), m = le(null), N = le(null), p = le(null), v = Ue(), l = le(null), y = we(
    () => _p(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [z, K] = V(!1), [A, O] = V(null), d = A ?? y, S = we(() => fp(d), [d]), I = q(
    (W) => {
      const k = mr(W);
      $?.(k), M?.(k);
    },
    [$, M]
  ), E = q(
    (W, k) => {
      O(W), k && !c && I(W);
    },
    [c, I]
  ), j = q(() => {
    K(!1), O(null), b?.(), g.current?.focus();
  }, [b]), X = q(() => {
    a || (O(y), K(!0), C?.());
  }, [a, y, C]), ne = q(() => {
    z ? j() : X();
  }, [z, j, X]), ie = q(
    (W, k) => {
      const L = m.current;
      if (!L) return S;
      const H = L.getBoundingClientRect(), Q = bt((W - H.left) / H.width, 0, 1), Y = bt(1 - (k - H.top) / H.height, 0, 1);
      return { h: S.h, s: Q, v: Y };
    },
    [S]
  ), ee = q(
    (W, k) => {
      if (!k) return 0;
      const L = k.getBoundingClientRect();
      return bt((W - L.left) / L.width, 0, 1);
    },
    []
  ), ae = (W) => {
    if (a) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), l.current = "sat";
    const k = ie(W.clientX, W.clientY);
    E({ ...en(k), a: d.a }, !0);
  }, se = (W) => {
    if (l.current !== "sat") return;
    W.preventDefault();
    const k = ie(W.clientX, W.clientY);
    E({ ...en(k), a: d.a }, !0);
  }, G = (W) => {
    if (a) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), l.current = "hue";
    const k = ee(W.clientX, N.current);
    E({ ...en({ ...S, h: k * 360 }), a: d.a }, !0);
  }, U = (W) => {
    if (l.current !== "hue") return;
    W.preventDefault();
    const k = ee(W.clientX, N.current);
    E({ ...en({ ...S, h: k * 360 }), a: d.a }, !0);
  }, B = (W) => {
    if (a) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), l.current = "alpha";
    const k = ee(W.clientX, p.current);
    E({ ...d, a: k }, !0);
  }, re = (W) => {
    if (l.current !== "alpha") return;
    W.preventDefault();
    const k = ee(W.clientX, p.current);
    E({ ...d, a: k }, !0);
  }, he = () => {
    l.current = null;
  }, J = q(
    (W, k) => {
      const L = { h: S.h, s: bt(S.s + W, 0, 1), v: bt(S.v + k, 0, 1) };
      E({ ...en(L), a: d.a }, !0);
    },
    [S, d.a, E]
  ), me = q(
    (W) => {
      const k = (S.h + W + 360) % 360;
      E({ ...en({ ...S, h: k }), a: d.a }, !0);
    },
    [S, d.a, E]
  ), ye = q(
    (W) => {
      E({ ...d, a: bt(d.a + W, 0, 1) }, !0);
    },
    [d, E]
  ), Ce = (W) => {
    switch (W.key) {
      case "ArrowLeft":
        W.preventDefault(), J(-0.05, 0);
        break;
      case "ArrowRight":
        W.preventDefault(), J(0.05, 0);
        break;
      case "ArrowUp":
        W.preventDefault(), J(0, 0.05);
        break;
      case "ArrowDown":
        W.preventDefault(), J(0, -0.05);
        break;
      case "Escape":
        W.preventDefault(), j();
        break;
    }
  }, He = (W, k) => {
    switch (W.key) {
      case "ArrowLeft":
        W.preventDefault(), k === "hue" ? me(-6) : ye(-0.05);
        break;
      case "ArrowRight":
        W.preventDefault(), k === "hue" ? me(6) : ye(0.05);
        break;
      case "Escape":
        W.preventDefault(), j();
        break;
    }
  }, Ie = (W, k) => {
    if (W === "hex") {
      const Y = Zn(k);
      Y && E({ ...Y, a: d.a }, !0);
      return;
    }
    const L = k.replace(/[^\d.]/g, ""), H = Number.parseFloat(L);
    if (Number.isNaN(H)) return;
    if (W === "a") {
      const Y = L.includes(".") ? bt(H, 0, 1) : bt(H / 100, 0, 1);
      E({ ...d, a: Y }, !0);
      return;
    }
    const Q = { r: 255, g: 255, b: 255 };
    E({ ...d, [W]: bt(H, 0, Q[W]) }, !0);
  }, Xe = () => {
    A && (I(A), O(null), K(!1), b?.(), g.current?.focus());
  };
  Ne(() => {
    if (!z) return;
    const W = (k) => {
      _.current && !_.current.contains(k.target) && j();
    };
    return document.addEventListener("mousedown", W), () => document.removeEventListener("mousedown", W);
  }, [z, j]), Ne(() => {
    if (!z) return;
    const W = (k) => {
      k.key === "Escape" && j();
    };
    return document.addEventListener("keydown", W), () => document.removeEventListener("keydown", W);
  }, [z, j]);
  const be = x === "xs" ? xe.dtColorpickerTriggerXs : x === "sm" ? xe.dtColorpickerTriggerSm : x === "lg" ? xe.dtColorpickerTriggerLg : x === "xl" ? xe.dtColorpickerTriggerXl : xe.dtColorpickerTriggerMd, Ge = mr(d), tt = up(d), We = { x: S.s * 100, y: (1 - S.v) * 100 }, Je = S.h / 360 * 100, Fe = d.a * 100, Ye = /* @__PURE__ */ w("div", { className: xe.dtColorpickerPanel, children: [
    n && /* @__PURE__ */ t(
      "div",
      {
        ref: m,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(S.s * 100),
        "aria-valuetext": `Saturation ${Math.round(S.s * 100)}%, value ${Math.round(S.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": a || void 0,
        tabIndex: a ? -1 : f,
        className: xe.dtSaturationPicker,
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${S.h}, 100%, 50%)`
        },
        onKeyDown: Ce,
        onPointerDown: ae,
        onPointerMove: se,
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
        ref: N,
        role: "slider",
        "aria-label": "Hue",
        "aria-valuemin": 0,
        "aria-valuemax": 360,
        "aria-valuenow": Math.round(S.h),
        "aria-disabled": a || void 0,
        tabIndex: a ? -1 : f,
        className: xe.dtHuePicker,
        onKeyDown: (W) => He(W, "hue"),
        onPointerDown: G,
        onPointerMove: U,
        onPointerUp: he,
        children: /* @__PURE__ */ t(
          "span",
          {
            className: xe.dtHueIndicator,
            style: { left: `${Je}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    n && /* @__PURE__ */ t(
      "div",
      {
        ref: p,
        role: "slider",
        "aria-label": "Alpha",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(Fe),
        "aria-disabled": a || void 0,
        tabIndex: a ? -1 : f,
        className: xe.dtAlphaPicker,
        style: {
          background: `repeating-conic-gradient(var(--dt-color-border) 0% 25%, var(--dt-color-surface) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${S.h}, 100%, 50%))`
        },
        onKeyDown: (W) => He(W, "alpha"),
        onPointerDown: B,
        onPointerMove: re,
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
            value: tt,
            onChange: (W) => Ie("hex", W.target.value)
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
            onChange: (W) => Ie("r", W.target.value)
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
            onChange: (W) => Ie("g", W.target.value)
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
            onChange: (W) => Ie("b", W.target.value)
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
            onChange: (W) => Ie("a", W.target.value)
          }
        )
      ] })
    ] }),
    o && /* @__PURE__ */ t("div", { className: xe.dtColorpickerPalette, children: s.map((W) => /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        role: "button",
        className: xe.dtColorpickerSwatch,
        "aria-label": W,
        "aria-disabled": a || void 0,
        tabIndex: a ? -1 : f,
        style: { backgroundColor: W },
        onClick: () => {
          const k = Zn(W);
          c ? E({ ...k, a: d.a }, !1) : (O(null), I({ ...k, a: d.a }), K(!1), b?.(), g.current?.focus());
        }
      },
      W
    )) }),
    c && /* @__PURE__ */ t("div", { className: xe.dtColorpickerFooter, children: /* @__PURE__ */ t(
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
      ref: _,
      className: [
        xe.dtColorpicker,
        z ? xe.dtColorpickerOpen : null,
        i ? xe.dtColorpickerInvalid : null,
        D
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ w(
          "button",
          {
            ref: g,
            type: "button",
            role: "button",
            className: [xe.dtColorpickerTrigger, be].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": z,
            "aria-controls": v,
            "aria-label": "Pick a color",
            "aria-disabled": a || void 0,
            disabled: a,
            tabIndex: f,
            onClick: ne,
            onKeyDown: (W) => {
              W.key === "Escape" && z && (W.preventDefault(), j());
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
        z && /* @__PURE__ */ t(
          "div",
          {
            id: v,
            role: "dialog",
            "aria-label": "Choose color",
            className: xe.dtColorpickerPopup,
            children: Ye
          }
        )
      ]
    }
  );
}, De = {}, pp = 42;
function yt(e) {
  return String(e).padStart(2, "0");
}
function pt(e) {
  return `${e.year}-${yt(e.month)}-${yt(e.day)}`;
}
function hp(e, n) {
  const r = pt(e);
  return n ? `${r} ${yt(e.hour)}:${yt(e.minute)}:${yt(e.second)}` : r;
}
function Jn(e) {
  const n = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!n) return null;
  const r = Number(n[1]), o = Number(n[2]), s = Number(n[3]), c = n[4] != null ? Number(n[4]) : 0, u = n[5] != null ? Number(n[5]) : 0, a = n[6] != null ? Number(n[6]) : 0;
  if (o < 1 || o > 12 || s < 1 || s > 31) return null;
  const i = new Date(r, o - 1, s, c, u, a);
  return i.getFullYear() !== r || i.getMonth() !== o - 1 || i.getDate() !== s ? null : { year: r, month: o, day: s, hour: c, minute: u, second: a };
}
function Ft() {
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
function Et(e, n) {
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
function Tn(e, n) {
  const r = new Date(e.year, e.month - 1 + n, 1), o = r.getFullYear(), s = r.getMonth() + 1, c = new Date(o, s, 0).getDate();
  return {
    year: o,
    month: s,
    day: Math.min(e.day, c),
    hour: e.hour,
    minute: e.minute,
    second: e.second
  };
}
function gr(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const br = {
  yyyy: (e) => String(e.year).padStart(4, "0"),
  yy: (e) => yt(e.year % 100),
  MM: (e) => yt(e.month),
  M: (e) => String(e.month),
  dd: (e) => yt(e.day),
  d: (e) => String(e.day),
  HH: (e) => yt(e.hour),
  H: (e) => String(e.hour),
  mm: (e) => yt(e.minute),
  m: (e) => String(e.minute),
  ss: (e) => yt(e.second),
  s: (e) => String(e.second),
  tt: (e, n, r) => new Intl.DateTimeFormat(r, {
    hour: "numeric",
    hour12: !0
  }).formatToParts(n).find((s) => s.type === "dayPeriod")?.value ?? ""
}, mp = ["yyyy", "yy", "MM", "dd", "HH", "mm", "ss", "tt"], gp = ["y", "M", "d", "H", "m", "s"];
function En(e, n, r) {
  const o = new Date(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second
  );
  let s = "", c = 0;
  for (; c < n.length; ) {
    let u = !1;
    for (const i of mp)
      if (n.startsWith(i, c)) {
        s += br[i](e, o, r), c += i.length, u = !0;
        break;
      }
    if (u) continue;
    const a = n[c];
    if (gp.includes(a)) {
      s += br[a](e, o, r), c += 1;
      continue;
    }
    s += a, c += 1;
  }
  return s;
}
const bp = [
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
function yp(e, n) {
  const r = {};
  let o = 0, s = 0;
  for (; s < n.length; ) {
    let a = null;
    for (const i of bp)
      if (n.startsWith(i, s)) {
        a = i;
        break;
      }
    if (a) {
      const i = e.slice(o, o + a.length);
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
      o += a.length, s += a.length;
      continue;
    }
    if (e[o] !== n[s]) return null;
    o += 1, s += 1;
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
  const u = new Date(
    c.year,
    c.month - 1,
    c.day,
    c.hour,
    c.minute,
    c.second
  );
  return u.getFullYear() !== c.year || u.getMonth() !== c.month - 1 || u.getDate() !== c.day ? null : c;
}
function yn(e, n) {
  const r = Jn(e);
  return r || yp(e, n);
}
function vp(e, n, r) {
  return n && pt(e) < pt(n) ? n : r && pt(e) > pt(r) ? r : e;
}
const xp = ["hour", "minute", "second"];
function An(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const jb = qe(function({
  size: n = "md",
  invalid: r = !1,
  value: o,
  defaultValue: s,
  format: c = "yyyy-MM-dd",
  min: u,
  max: a,
  showTime: i = !1,
  showButton: h = !0,
  allowClear: x = !1,
  inline: f = !1,
  disabledDates: D,
  locale: $ = "en-US",
  onChange: M,
  onValueChange: C,
  onOpen: b,
  onClose: _,
  disabled: g,
  readOnly: m,
  placeholder: N,
  ariaLabel: p,
  triggerLabel: v,
  clearLabel: l,
  tabIndex: y,
  className: z,
  onBlur: K,
  onKeyDown: A,
  ...O
}, d) {
  const S = le(null), I = le(null), E = le(null), j = le(null), X = Ue(), ne = o !== void 0, [ie, ee] = V(
    () => s != null ? En(yn(s, c) ?? Ft(), c, $) : ""
  ), [ae, se] = V(!1), [G, U] = V(null), [B, re] = V(() => {
    const T = o !== void 0 ? o ?? "" : s ?? "";
    if (T) {
      const oe = yn(T, c);
      if (oe) return oe;
    }
    return Ft();
  }), he = we(() => u ? Jn(u) : null, [u]), J = we(() => a ? Jn(a) : null, [a]), me = we(
    () => new Set(D ?? []),
    [D]
  ), ye = we(() => {
    const T = ne ? o ?? "" : ie;
    return T ? yn(T, c) : null;
  }, [o, ie, ne, c]), Ce = q(
    (T) => {
      const oe = pt(T);
      return !!(me.has(oe) || he && oe < pt(he) || J && oe > pt(J));
    },
    [me, he, J]
  ), He = q(
    (T) => {
      if (!Ce(T)) return T;
      for (let oe = 1; oe <= 366; oe += 1) {
        const ze = Et(T, oe);
        if (!Ce(ze)) return ze;
        const $e = Et(T, -oe);
        if (!Ce($e)) return $e;
      }
      return T;
    },
    [Ce]
  ), Ie = q(
    (T) => {
      ne || ee(T ? En(T, c, $) : "");
      const oe = T ? hp(T, i) : "";
      M?.(oe), C?.(oe);
    },
    [ne, c, $, i, M, C]
  ), Xe = q(
    (T) => {
      I.current = T, typeof d == "function" ? d(T) : d && (d.current = T);
    },
    [d]
  ), be = q(() => {
    se(!1), U(null), _?.(), f || E.current?.focus();
  }, [f, _]), Ge = q(() => {
    if (g) return;
    const T = ye ?? Ft();
    U(T), re(He(T)), se(!0), b?.();
  }, [g, ye, He, b]), tt = q(() => {
    ae ? be() : Ge();
  }, [ae, be, Ge]), We = q((T) => {
    j.current?.querySelector(
      `[data-date="${pt(T)}"]`
    )?.focus();
  }, []), Je = q(
    (T) => {
      if (Ce(T)) return;
      const oe = G ?? ye, $e = {
        ...i ? {
          hour: oe?.hour ?? 0,
          minute: oe?.minute ?? 0,
          second: oe?.second ?? 0
        } : { hour: 0, minute: 0, second: 0 },
        year: T.year,
        month: T.month,
        day: T.day
      };
      U($e), i || (Ie($e), be());
    },
    [Ce, G, ye, i, Ie, be]
  ), Fe = q(
    (T, oe) => {
      U((ze) => {
        const $e = ze ?? ye ?? Ft(), Qe = Math.min(T === "hour" ? 23 : 59, Math.max(0, $e[T] + oe));
        return { ...$e, [T]: Qe };
      });
    },
    [ye]
  ), Ye = q(
    (T, oe) => {
      const ze = oe.replace(/\D/g, ""), $e = ze === "" ? 0 : Number(ze), Te = T === "hour" ? 23 : 59;
      U((Qe) => ({ ...Qe ?? ye ?? Ft(), [T]: Math.min(Te, $e) }));
    },
    [ye]
  ), W = q(() => {
    G && (Ie(G), be());
  }, [G, Ie, be]), k = q(() => {
    if (ae) return;
    const T = yn(ie, c);
    Ie(T ? vp(T, he, J) : null);
  }, [ae, ie, c, he, J, Ie]), L = (T) => {
    const oe = T.target.value;
    ne || ee(oe), ae && U(null);
  }, H = (T) => {
    T.key === "Enter" ? (T.preventDefault(), ae ? G && (Ie(G), be()) : k()) : T.key === "Escape" ? ae && (T.preventDefault(), be()) : T.key === "ArrowDown" && !ae ? (T.preventDefault(), Ge()) : T.key === "Tab" && ae && se(!1), A?.(T);
  }, Q = (T) => {
    k(), K?.(T);
  }, Y = (T) => {
    let oe = null;
    switch (T.key) {
      case "ArrowLeft":
        oe = Et(B, -1), T.preventDefault();
        break;
      case "ArrowRight":
        oe = Et(B, 1), T.preventDefault();
        break;
      case "ArrowUp":
        oe = Et(B, -7), T.preventDefault();
        break;
      case "ArrowDown":
        oe = Et(B, 7), T.preventDefault();
        break;
      case "Home":
        oe = Et(B, -gr(B)), T.preventDefault();
        break;
      case "End":
        oe = Et(B, 6 - gr(B)), T.preventDefault();
        break;
      case "PageUp":
        oe = Tn(B, T.shiftKey ? -12 : -1), T.preventDefault();
        break;
      case "PageDown":
        oe = Tn(B, T.shiftKey ? 12 : 1), T.preventDefault();
        break;
      case "Enter":
      case " ":
        T.preventDefault(), Je(B);
        break;
      case "Escape":
        T.preventDefault(), be();
        break;
      case "Tab":
        se(!1);
        break;
    }
    if (oe) {
      const ze = He(oe);
      re(ze), setTimeout(() => We(ze), 0);
    }
  };
  Ne(() => {
    if (!ae) return;
    const T = (oe) => {
      S.current && !S.current.contains(oe.target) && be();
    };
    return document.addEventListener("mousedown", T), () => document.removeEventListener("mousedown", T);
  }, [ae, be]), Ne(() => {
    if (!ae) return;
    const T = (oe) => {
      oe.key === "Escape" && be();
    };
    return document.addEventListener("keydown", T), () => document.removeEventListener("keydown", T);
  }, [ae, be]);
  const fe = () => {
    ne || ee(""), M?.(""), C?.(""), I.current?.focus();
  }, ke = ae && G ? En(G, c, $) : ne ? o ? En(yn(o, c) ?? Ft(), c, $) : "" : ie, Re = ne ? !!o : ie.length > 0, je = f || ae, nt = { year: B.year, month: B.month }, vt = new Date(nt.year, nt.month - 1, 1).getDay(), Z = {
    year: nt.year,
    month: nt.month,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0
  }, Se = [];
  for (let T = 0; T < pp; T += 1)
    Se.push(Et(Z, T - vt));
  const F = G ? pt(G) : ye ? pt(ye) : null, te = pt(Ft()), de = `${nt.year}-${yt(nt.month)}`, _e = we(
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
  }).format(new Date(nt.year, nt.month - 1, 1)), ge = Array.from(
    { length: 7 },
    (T, oe) => new Intl.DateTimeFormat($, { weekday: "short" }).format(
      new Date(2021, 0, 3 + oe)
    )
  ), Ae = n === "xs" ? De.dtDatepickerInputXs : n === "sm" ? De.dtDatepickerInputSm : n === "lg" ? De.dtDatepickerInputLg : n === "xl" ? De.dtDatepickerInputXl : De.dtDatepickerInputMd, Be = /* @__PURE__ */ w(
    "div",
    {
      className: De.dtDatepickerCalendar,
      "aria-label": p ?? "Date picker",
      children: [
        /* @__PURE__ */ w("div", { className: De.dtDatepickerHeader, children: [
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: De.dtDatepickerNav,
              "aria-label": "Previous month",
              onClick: () => {
                const T = He(Tn(B, -1));
                re(T), setTimeout(() => We(T), 0);
              },
              children: /* @__PURE__ */ t(Ve, { name: "chevron-left", size: 16 })
            }
          ),
          /* @__PURE__ */ t("span", { className: De.dtDatepickerTitle, children: ce }),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: De.dtDatepickerNav,
              "aria-label": "Next month",
              onClick: () => {
                const T = He(Tn(B, 1));
                re(T), setTimeout(() => We(T), 0);
              },
              children: /* @__PURE__ */ t(Ve, { name: "chevron-right", size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ w(
          "div",
          {
            ref: j,
            role: "grid",
            className: De.dtDatepickerGrid,
            onKeyDown: Y,
            children: [
              /* @__PURE__ */ t("div", { role: "row", className: De.dtDatepickerWeekRow, children: ge.map((T) => /* @__PURE__ */ t(
                "div",
                {
                  role: "columnheader",
                  className: De.dtDatepickerWeekday,
                  children: T
                },
                T
              )) }),
              Array.from({ length: 6 }, (T, oe) => /* @__PURE__ */ t("div", { role: "row", className: De.dtDatepickerRow, children: Se.slice(oe * 7, oe * 7 + 7).map((ze) => {
                const $e = pt(ze), Te = Ce(ze), Qe = $e.startsWith(de);
                return /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    role: "gridcell",
                    "data-date": $e,
                    tabIndex: $e === pt(B) ? 0 : -1,
                    "aria-selected": $e === F || void 0,
                    "aria-disabled": Te || void 0,
                    "aria-label": _e.format(
                      new Date(ze.year, ze.month - 1, ze.day)
                    ),
                    className: [
                      De.dtDatepickerDay,
                      Qe ? null : De.dtDatepickerDayOutside,
                      $e === te ? De.dtDatepickerDayToday : null,
                      $e === F ? De.dtDatepickerDaySelected : null,
                      Te ? De.dtDatepickerDayDisabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => Je(ze),
                    onFocus: () => re(ze),
                    children: ze.day
                  },
                  $e
                );
              }) }, oe))
            ]
          }
        ),
        i && /* @__PURE__ */ w("div", { className: De.dtDatepickerTime, children: [
          xp.map((T) => /* @__PURE__ */ w("label", { className: De.dtDatepickerTimeField, children: [
            /* @__PURE__ */ t("span", { className: De.dtDatepickerTimeLabel, children: An(T) }),
            /* @__PURE__ */ w("div", { className: De.dtDatepickerTimeControl, children: [
              /* @__PURE__ */ t(
                "input",
                {
                  className: De.dtDatepickerTimeInput,
                  inputMode: "numeric",
                  "aria-label": An(T),
                  value: yt((G ?? ye ?? Ft())[T]),
                  onChange: (oe) => Ye(T, oe.target.value),
                  onKeyDown: (oe) => {
                    oe.key === "ArrowUp" ? (oe.preventDefault(), Fe(T, 1)) : oe.key === "ArrowDown" ? (oe.preventDefault(), Fe(T, -1)) : oe.key === "Enter" && (oe.preventDefault(), W());
                  }
                }
              ),
              /* @__PURE__ */ w("span", { className: De.dtDatepickerTimeButtons, children: [
                /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    "aria-label": `Increase ${An(T).toLowerCase()}`,
                    onClick: () => Fe(T, 1),
                    children: /* @__PURE__ */ t(Ve, { name: "chevron-up", size: 11 })
                  }
                ),
                /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    "aria-label": `Decrease ${An(T).toLowerCase()}`,
                    onClick: () => Fe(T, -1),
                    children: /* @__PURE__ */ t(Ve, { name: "chevron-down", size: 11 })
                  }
                )
              ] })
            ] })
          ] }, T)),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: De.dtDatepickerOk,
              onClick: W,
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
      ref: S,
      className: [
        De.dtDatepicker,
        f ? De.dtDatepickerInline : null,
        z
      ].filter(Boolean).join(" "),
      children: [
        !f && /* @__PURE__ */ w(Me, { children: [
          /* @__PURE__ */ t(
            "input",
            {
              ref: Xe,
              type: "text",
              autoComplete: "off",
              value: ke,
              disabled: g,
              readOnly: m,
              placeholder: N,
              tabIndex: y,
              role: h ? void 0 : "combobox",
              "aria-label": p ?? "Date",
              "aria-haspopup": h ? void 0 : "dialog",
              "aria-expanded": h ? void 0 : je,
              "aria-controls": h ? void 0 : X,
              "aria-invalid": r || void 0,
              className: [
                De.dtDatepickerInput,
                Ae,
                r ? De.dtDatepickerInputInvalid : null
              ].filter(Boolean).join(" "),
              onChange: L,
              onKeyDown: H,
              onBlur: Q,
              onClick: () => {
                h || tt();
              },
              ...O
            }
          ),
          x && !g && Re && /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: [
                De.dtDatepickerClear,
                h ? De.dtDatepickerClearInset : null
              ].filter(Boolean).join(" "),
              "aria-label": l ?? "Clear",
              onClick: fe,
              children: /* @__PURE__ */ t(Ve, { name: "close", size: 14 })
            }
          ),
          h && /* @__PURE__ */ t(
            "button",
            {
              ref: E,
              type: "button",
              className: [
                De.dtDatepickerTrigger,
                ae ? De.dtDatepickerTriggerOpen : null
              ].filter(Boolean).join(" "),
              "aria-label": v ?? "Open calendar",
              "aria-haspopup": "dialog",
              "aria-expanded": ae,
              "aria-controls": X,
              disabled: g,
              onClick: tt,
              children: /* @__PURE__ */ t(Ve, { name: "calendar", size: 16 })
            }
          )
        ] }),
        je && /* @__PURE__ */ t(
          "div",
          {
            id: X,
            role: f ? void 0 : "dialog",
            className: f ? void 0 : De.dtDatepickerPopup,
            children: Be
          }
        )
      ]
    }
  );
}), Kt = {}, Tb = ({
  value: e = 0,
  stars: n = 5,
  readOnly: r = !1,
  disabled: o = !1,
  ariaLabel: s = "Rating",
  clearLabel: c = "Clear",
  rateLabel: u = "Rate",
  tabIndex: a = 0,
  className: i,
  onChange: h,
  onValueChange: x
}) => {
  const [f, D] = V(e), $ = q(
    (g) => Math.min(n, Math.max(1, g)),
    [n]
  ), M = q(
    (g) => {
      h?.(g), x?.(g);
    },
    [h, x]
  ), C = q(
    (g) => {
      r || o || (M(g), D(g));
    },
    [r, o, M]
  ), b = (g) => {
    if (r || o) return;
    const m = f > 0 ? f : 1;
    switch (g.key) {
      case "ArrowRight":
      case "ArrowUp":
        g.preventDefault(), C($(m + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        g.preventDefault(), C($(m - 1));
        break;
      case "Home":
        g.preventDefault(), C(1);
        break;
      case "End":
        g.preventDefault(), C(n);
        break;
    }
  }, _ = Array.from({ length: n }, (g, m) => m + 1);
  return /* @__PURE__ */ w(
    "div",
    {
      role: "radiogroup",
      "aria-label": s,
      "aria-readonly": r || void 0,
      className: [
        Kt.dtRating,
        r ? Kt.dtRatingReadonly : null,
        o ? Kt.dtRatingDisabled : null,
        i
      ].filter(Boolean).join(" "),
      onKeyDown: b,
      children: [
        !r && !o && /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: Kt.dtRatingClear,
            "aria-label": c,
            tabIndex: e === 0 ? a : -1,
            disabled: o,
            onClick: () => C(0),
            children: /* @__PURE__ */ t(Ve, { name: "ban", size: 16 })
          }
        ),
        _.map((g) => {
          const m = g <= e, N = g === (e > 0 ? e : f);
          return /* @__PURE__ */ w(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": m,
              "aria-posinset": g,
              "aria-setsize": n,
              "aria-label": `${u} ${g}`,
              tabIndex: N ? a : -1,
              "aria-disabled": o || r || void 0,
              disabled: o || r,
              className: [
                Kt.dtRatingItem,
                m ? Kt.dtRatingItemFilled : null
              ].filter(Boolean).join(" "),
              onClick: () => C(g),
              onFocus: () => D(g),
              children: [
                /* @__PURE__ */ t("span", { className: Kt.dtRatingIconFilled, "aria-hidden": "true", children: /* @__PURE__ */ t(Ve, { name: "star", size: 20 }) }),
                /* @__PURE__ */ t("span", { className: Kt.dtRatingIconEmpty, "aria-hidden": "true", children: /* @__PURE__ */ t(Ve, { name: "star-outline", size: 20 }) })
              ]
            },
            g
          );
        })
      ]
    }
  );
}, Xt = {};
function St(e, n, r) {
  return Math.min(r, Math.max(n, e));
}
const Eb = ({
  value: e = 0,
  valueMin: n = 0,
  valueMax: r = 100,
  min: o = 0,
  max: s = 100,
  step: c = 1,
  range: u = !1,
  orientation: a = "horizontal",
  disabled: i = !1,
  label: h = "Value",
  minLabel: x = "Min",
  maxLabel: f = "Max",
  tabIndex: D = 0,
  className: $,
  onChange: M,
  onInput: C,
  onValueChange: b,
  onInputChange: _
}) => {
  const g = le(null), m = le(null), [N, p] = V(null), v = N ?? e, l = we(() => St(v, o, s), [v, o, s]), y = we(
    () => St(u ? n : l, o, s),
    [u, n, l, o, s]
  ), z = we(
    () => St(u ? Math.max(r, y) : l, o, s),
    [u, r, y, l, o, s]
  ), K = q(
    (B) => {
      const re = s - o;
      return re <= 0 ? 0 : (St(B, o, s) - o) / re * 100;
    },
    [o, s]
  ), A = q(
    (B, re) => {
      const he = g.current;
      if (!he) return o;
      const J = he.getBoundingClientRect();
      let me;
      a === "vertical" ? me = 1 - (re - J.top) / J.height : me = (B - J.left) / J.width;
      const ye = o + St(me, 0, 1) * (s - o);
      return c > 0 ? St(Math.round(ye / c) * c, o, s) : St(ye, o, s);
    },
    [o, s, c, a]
  ), O = q(
    (B) => {
      typeof B == "number" && p(B), M?.(B), b?.(B);
    },
    [M, b]
  ), d = q(
    (B) => {
      typeof B == "number" && p(B), C?.(B), _?.(B);
    },
    [C, _]
  ), S = q(
    (B, re, he) => {
      const J = A(re, he);
      let me;
      u ? B === "min" ? me = { min: Math.min(J, z), max: z } : me = { min: y, max: Math.max(J, y) } : me = J, d(me), m.current === null && O(me);
    },
    [u, A, y, z, d, O]
  ), I = q(
    (B, re) => {
      const he = (c > 0 ? c : 1) * re;
      let J;
      u ? B === "min" ? J = {
        min: St(y + he, o, z),
        max: z
      } : J = {
        min: y,
        max: St(z + he, y, s)
      } : J = St(l + he, o, s), O(J);
    },
    [u, c, o, s, y, z, l, O]
  ), E = (B, re) => {
    if (!i)
      switch (re.key) {
        case "ArrowLeft":
        case "ArrowDown":
          re.preventDefault(), I(B, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          re.preventDefault(), I(B, 1);
          break;
        case "Home":
          re.preventDefault(), O(u ? B === "min" ? { min: o, max: z } : { min: y, max: y } : o);
          break;
        case "End":
          re.preventDefault(), O(u ? B === "min" ? { min: z, max: z } : { min: y, max: s } : s);
          break;
      }
  }, j = (B, re) => {
    i || (re.preventDefault(), re.currentTarget.focus(), typeof re.currentTarget.setPointerCapture == "function" && re.currentTarget.setPointerCapture(re.pointerId), m.current = { key: B, pointerId: re.pointerId }, S(B, re.clientX, re.clientY));
  }, X = (B) => {
    !m.current || m.current.pointerId !== B.pointerId || (B.preventDefault(), S(m.current.key, B.clientX, B.clientY));
  }, ne = (B) => {
    !m.current || m.current.pointerId !== B.pointerId || (m.current = null, B.preventDefault(), O(u ? { min: y, max: z } : l));
  }, [ie, ee] = V(null), ae = K(y), se = K(z), G = u ? ae : 0, U = se;
  return /* @__PURE__ */ t(
    "div",
    {
      className: [
        Xt.dtSlider,
        a === "vertical" ? Xt.dtSliderVertical : null,
        i ? Xt.dtSliderDisabled : null,
        $
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ w("div", { ref: g, className: Xt.dtSliderTrack, children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: Xt.dtSliderRange,
            style: a === "vertical" ? { bottom: `${G}%`, height: `${U - G}%` } : { left: `${G}%`, width: `${U - G}%` }
          }
        ),
        /* @__PURE__ */ t(
          "div",
          {
            role: "slider",
            "aria-valuemin": o,
            "aria-valuemax": s,
            "aria-valuenow": Math.round(y),
            "aria-orientation": a,
            "aria-label": u ? x : h,
            "aria-disabled": i || void 0,
            tabIndex: i || u && ie === "max" ? -1 : D,
            className: Xt.dtSliderHandle,
            style: a === "vertical" ? { bottom: `calc(${ae}% - 8px)` } : { left: `calc(${ae}% - 8px)` },
            onKeyDown: (B) => E("min", B),
            onPointerDown: (B) => j("min", B),
            onPointerMove: X,
            onPointerUp: ne,
            onFocus: () => ee("min")
          }
        ),
        u && /* @__PURE__ */ t(
          "div",
          {
            role: "slider",
            "aria-valuemin": o,
            "aria-valuemax": s,
            "aria-valuenow": Math.round(z),
            "aria-orientation": a,
            "aria-label": f,
            "aria-disabled": i || void 0,
            tabIndex: i || ie === "min" ? -1 : D,
            className: Xt.dtSliderHandle,
            style: a === "vertical" ? { bottom: `calc(${se}% - 8px)` } : { left: `calc(${se}% - 8px)` },
            onKeyDown: (B) => E("max", B),
            onPointerDown: (B) => j("max", B),
            onPointerMove: X,
            onPointerUp: ne,
            onFocus: () => ee("max")
          }
        )
      ] })
    }
  );
}, Pe = {}, wp = "-10675199.02:48:05.4775808", kp = "10675199.02:48:05.4775808", Lt = 86400, Rt = 3600, Nt = 60, Vn = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, yr = {
  days: Lt,
  hours: Rt,
  minutes: Nt,
  seconds: 1
}, $p = {
  day: Lt,
  hour: Rt,
  minute: Nt,
  second: 1
};
function tn(e) {
  return String(e).padStart(2, "0");
}
function Sn(e) {
  const n = e.trim();
  if (!n) return null;
  let r = 1, o = n;
  o.startsWith("-") ? (r = -1, o = o.slice(1)) : o.startsWith("+") && (o = o.slice(1));
  const s = /^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(
    o
  );
  if (s) {
    if (!s.slice(1).some((f) => f != null)) return null;
    const a = s[1] != null ? Number(s[1]) : 0, i = s[2] != null ? Number(s[2]) : 0, h = s[3] != null ? Number(s[3]) : 0, x = s[4] != null ? Number(s[4]) : 0;
    return r * (a * Lt + i * Rt + h * Nt + x);
  }
  const c = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(o);
  if (c) {
    const u = c[1] != null ? Number(c[1]) : 0, a = Number(c[2]), i = Number(c[3]), h = c[4] != null ? Number(c[4]) : 0, x = c[5] != null ? +`0.${c[5]}` : 0;
    return a > 23 || i > 59 || h > 59 ? null : r * (u * Lt + a * Rt + i * Nt + h + x);
  }
  return null;
}
function Np(e) {
  return e.days * Lt + e.hours * Rt + e.minutes * Nt + e.seconds;
}
function vr(e) {
  let n = Math.abs(e);
  const r = Math.floor(n / Lt);
  n %= Lt;
  const o = Math.floor(n / Rt);
  n %= Rt;
  const s = Math.floor(n / Nt), c = Math.round(n % Nt * 1e9) / 1e9;
  return { days: r, hours: o, minutes: s, seconds: c };
}
function Qn(e, n) {
  const r = e < 0;
  let o = Math.abs(e);
  n === "minute" ? o = Math.round(o / Nt) * Nt : n === "hour" ? o = Math.round(o / Rt) * Rt : n === "day" && (o = Math.round(o / Lt) * Lt);
  let s = Math.round(o % Nt);
  const c = s === 60 ? 1 : 0;
  s = s === 60 ? 0 : s;
  const u = Math.floor(o / Nt) + c, a = u % 60, i = Math.floor(u / 60), h = i % 24, x = Math.floor(i / 24), f = r ? "-" : "", D = x > 0 ? `${x}.` : "";
  switch (n) {
    case "day":
      return `${f}${x} day${x === 1 ? "" : "s"}`;
    case "hour":
      return `${f}${D}${tn(h)}`;
    case "minute":
      return `${f}${D}${tn(h)}:${tn(a)}`;
    default:
      return `${f}${D}${tn(h)}:${tn(a)}:${tn(s)}`;
  }
}
function xr(e, n = "second") {
  const r = Sn(e);
  return r === null ? "" : Qn(r, n);
}
function Xn(e, n, r) {
  return Math.min(r, Math.max(n, e));
}
const Ab = qe(
  function({
    size: n = "md",
    invalid: r = !1,
    value: o,
    defaultValue: s,
    min: c = wp,
    max: u = kp,
    step: a = "1",
    precision: i = "second",
    showDays: h = !0,
    showHours: x = !0,
    showMinutes: f = !0,
    showSeconds: D = !0,
    allowClear: $ = !1,
    inline: M = !1,
    onChange: C,
    onValueChange: b,
    onOpen: _,
    onClose: g,
    disabled: m,
    placeholder: N,
    ariaLabel: p,
    triggerLabel: v,
    clearLabel: l,
    tabIndex: y,
    className: z,
    onBlur: K,
    onKeyDown: A,
    ...O
  }, d) {
    const S = le(null), I = le(null), E = le(null), j = Ue(), X = o !== void 0, [ne, ie] = V(
      () => s != null ? xr(s, i) : ""
    ), [ee, ae] = V(!1), [se, G] = V(null), [U, B] = V(null), re = we(
      () => Sn(c) ?? -Number.MAX_SAFE_INTEGER,
      [c]
    ), he = we(
      () => Sn(u) ?? Number.MAX_SAFE_INTEGER,
      [u]
    ), J = we(() => {
      const Z = Number.parseFloat(a);
      return Number.isNaN(Z) || Z <= 0 ? 1 : Z;
    }, [a]), me = we(() => {
      const Z = X ? o ?? "" : ne;
      return Z ? Sn(Z) : null;
    }, [o, ne, X]), ye = q(
      (Z) => {
        const Se = Z === null ? "" : Qn(Z, i);
        X || ie(Se), C?.(Se), b?.(Se);
      },
      [X, i, C, b]
    ), Ce = q(
      (Z) => {
        Z && se !== null && ye(se), ae(!1), G(null), B(null), g?.(), M || E.current?.focus();
      },
      [M, se, ye, g]
    ), He = q(() => {
      m || (G(me ?? 0), ae(!0), _?.());
    }, [m, me, _]), Ie = q(() => {
      ee ? Ce(!1) : He();
    }, [ee, Ce, He]), Xe = q(
      (Z, Se) => {
        G((F) => {
          const de = (F ?? me ?? 0) + Se * J * yr[Z];
          return Xn(de, re, he);
        });
      },
      [me, J, re, he]
    ), be = q(
      (Z) => {
        const Se = U?.[Z];
        if (Se == null) return;
        const F = Number.parseFloat(Se), te = Number.isNaN(F) ? 0 : F;
        G((de) => {
          const _e = de ?? me ?? 0, ce = vr(_e);
          ce[Z] = te;
          const Ae = (_e < 0 ? -1 : 1) * Np(ce);
          return Xn(Ae, re, he);
        }), B(null);
      },
      [U, me, re, he]
    ), Ge = (Z, Se) => {
      B((F) => ({ ...F ?? {}, [Z]: Se }));
    }, tt = (Z, Se) => {
      switch (Se.key) {
        case "ArrowUp":
          Se.preventDefault(), be(Z), Xe(Z, 1);
          break;
        case "ArrowDown":
          Se.preventDefault(), be(Z), Xe(Z, -1);
          break;
        case "Home":
          Se.preventDefault(), be(Z), G(re);
          break;
        case "End":
          Se.preventDefault(), be(Z), G(he);
          break;
        case "Enter":
          Se.preventDefault(), be(Z), Ce(!0);
          break;
      }
    }, We = q(() => {
      if (ee) return;
      const Z = Sn(ne);
      ye(Z !== null ? Xn(Z, re, he) : null);
    }, [ee, ne, re, he, ye]), Je = (Z) => {
      X || ie(Z.target.value);
    }, Fe = (Z) => {
      Z.key === "Enter" ? (Z.preventDefault(), ee ? Ce(!0) : We()) : Z.key === "Escape" && ee ? (Z.preventDefault(), Ce(!1)) : Z.key === "ArrowDown" && !ee ? (Z.preventDefault(), He()) : Z.key === "Tab" && ee && ae(!1), A?.(Z);
    }, Ye = (Z) => {
      We(), K?.(Z);
    }, W = () => {
      X || ie(""), C?.(""), b?.(""), I.current?.focus();
    };
    Ne(() => {
      if (!ee) return;
      const Z = (Se) => {
        S.current && !S.current.contains(Se.target) && Ce(!1);
      };
      return document.addEventListener("mousedown", Z), () => document.removeEventListener("mousedown", Z);
    }, [ee, Ce]), Ne(() => {
      if (!ee) return;
      const Z = (Se) => {
        Se.key === "Escape" && Ce(!1);
      };
      return document.addEventListener("keydown", Z), () => document.removeEventListener("keydown", Z);
    }, [ee, Ce]), Ne(() => {
      if (M && se !== null) {
        const Z = me;
        (Z === null || Math.abs(se - Z) > 1e-9) && ye(se);
      }
    }, [M, se, me, ye]);
    const k = q(
      (Z) => {
        I.current = Z, typeof d == "function" ? d(Z) : d && (d.current = Z);
      },
      [d]
    ), L = X ? o ? xr(o, i) : "" : ne, H = X ? !!o : ne.length > 0, Q = M || ee, Y = se ?? me ?? 0, fe = vr(Y), ke = $p[i], je = ["days", "hours", "minutes", "seconds"].filter(
      (Z) => yr[Z] >= ke && (Z === "days" ? h : Z === "hours" ? x : Z === "minutes" ? f : D)
    ), nt = n === "xs" ? Pe.dtTimespanpickerInputXs : n === "sm" ? Pe.dtTimespanpickerInputSm : n === "lg" ? Pe.dtTimespanpickerInputLg : n === "xl" ? Pe.dtTimespanpickerInputXl : Pe.dtTimespanpickerInputMd, vt = /* @__PURE__ */ w("div", { className: Pe.dtTimespanpickerPanel, children: [
      /* @__PURE__ */ t("div", { className: Pe.dtTimespanpickerPreview, "aria-live": "polite", children: Qn(Y, i) }),
      /* @__PURE__ */ t("div", { className: Pe.dtTimespanpickerUnits, children: je.map((Z) => /* @__PURE__ */ w("label", { className: Pe.dtTimespanpickerUnit, children: [
        /* @__PURE__ */ t("span", { className: Pe.dtTimespanpickerUnitLabel, children: Vn[Z] }),
        /* @__PURE__ */ w("span", { className: Pe.dtTimespanpickerUnitControl, children: [
          /* @__PURE__ */ t(
            "input",
            {
              className: Pe.dtTimespanpickerUnitInput,
              inputMode: "decimal",
              value: U?.[Z] ?? String(fe[Z]),
              onChange: (Se) => Ge(Z, Se.target.value),
              onKeyDown: (Se) => tt(Z, Se),
              onBlur: () => be(Z)
            }
          ),
          /* @__PURE__ */ w("span", { className: Pe.dtTimespanpickerUnitButtons, children: [
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${Vn[Z].toLowerCase()}`,
                onClick: () => {
                  be(Z), Xe(Z, 1);
                },
                children: /* @__PURE__ */ t(Ve, { name: "chevron-up", size: 11 })
              }
            ),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${Vn[Z].toLowerCase()}`,
                onClick: () => {
                  be(Z), Xe(Z, -1);
                },
                children: /* @__PURE__ */ t(Ve, { name: "chevron-down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, Z)) }),
      /* @__PURE__ */ t("div", { className: Pe.dtTimespanpickerFooter, children: /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: Pe.dtTimespanpickerOk,
          onClick: () => Ce(!0),
          children: "OK"
        }
      ) })
    ] });
    return /* @__PURE__ */ w(
      "div",
      {
        ref: S,
        className: [
          Pe.dtTimespanpicker,
          M ? Pe.dtTimespanpickerInline : null,
          z
        ].filter(Boolean).join(" "),
        children: [
          !M && /* @__PURE__ */ w(Me, { children: [
            /* @__PURE__ */ t(
              "input",
              {
                ref: k,
                type: "text",
                autoComplete: "off",
                value: L,
                disabled: m,
                placeholder: N,
                tabIndex: y,
                role: "combobox",
                "aria-label": p ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": ee,
                "aria-controls": j,
                "aria-invalid": r || void 0,
                className: [
                  Pe.dtTimespanpickerInput,
                  nt,
                  r ? Pe.dtTimespanpickerInputInvalid : null
                ].filter(Boolean).join(" "),
                onChange: Je,
                onKeyDown: Fe,
                onBlur: Ye,
                ...O
              }
            ),
            $ && !m && H && /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                className: Pe.dtTimespanpickerClear,
                "aria-label": l ?? "Clear",
                onClick: W,
                children: /* @__PURE__ */ t(Ve, { name: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ t(
              "button",
              {
                ref: E,
                type: "button",
                className: [
                  Pe.dtTimespanpickerTrigger,
                  ee ? Pe.dtTimespanpickerTriggerOpen : null
                ].filter(Boolean).join(" "),
                "aria-label": v ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": ee,
                "aria-controls": j,
                disabled: m,
                onClick: Ie,
                children: /* @__PURE__ */ t(Ve, { name: "clock", size: 16 })
              }
            )
          ] }),
          Q && /* @__PURE__ */ t(
            "div",
            {
              id: j,
              role: M ? void 0 : "dialog",
              "aria-label": p ?? "Time span picker",
              className: M ? void 0 : Pe.dtTimespanpickerPopup,
              children: vt
            }
          )
        ]
      }
    );
  }
), Sp = "_wrapper_gfb15_1", Dp = "_cells_gfb15_8", Cp = "_cell_gfb15_8", zp = "_invalid_gfb15_63", Mp = "_live_gfb15_72", Gt = {
  wrapper: Sp,
  cells: Dp,
  cell: Cp,
  "cell-sm": "_cell-sm_gfb15_45",
  "cell-md": "_cell-md_gfb15_51",
  "cell-lg": "_cell-lg_gfb15_57",
  invalid: zp,
  live: Mp
};
function wr(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const Lb = qe(
  function({
    length: n = 6,
    value: r,
    defaultValue: o,
    onChange: s,
    invalid: c = !1,
    size: u = "md",
    autoFocus: a = !1,
    disabled: i = !1,
    label: h = "Security code",
    liveAnnounce: x = !0,
    className: f,
    "aria-label": D
  }, $) {
    const M = Ue(), C = r !== void 0, [b, _] = V(wr(o).join("")), g = C ? wr(r).join("") : b, m = Array.from({ length: n }, (O, d) => g[d] ?? ""), N = le([]), [p, v] = V(""), l = (O) => {
      C || _(O), s?.(O);
    }, y = (O) => {
      const d = N.current[O];
      d && !d.disabled && (d.focus(), d.select());
    }, z = (O, d) => {
      const S = d.replace(/\D/g, "").slice(-1), I = g.split("");
      if (S) {
        I[O] = S;
        const E = I.join("").slice(0, n);
        l(E), E.length < n ? y(O + 1) : x && v("Code complete");
      }
    }, K = (O, d) => {
      if (d.key === "Backspace") {
        if (d.preventDefault(), g[O]) {
          const S = g.split("");
          S[O] = "", l(S.join(""));
        } else if (O > 0) {
          const S = g.split("");
          S[O - 1] = "", l(S.join("")), y(O - 1);
        }
      } else d.key === "ArrowLeft" && O > 0 ? (d.preventDefault(), y(O - 1)) : d.key === "ArrowRight" && O < n - 1 ? (d.preventDefault(), y(O + 1)) : d.key === "Home" ? (d.preventDefault(), y(0)) : d.key === "End" && (d.preventDefault(), y(n - 1));
    }, A = (O, d) => {
      d.preventDefault();
      const S = d.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!S) return;
      const I = g.split("");
      let E = 0;
      for (let X = 0; X < S.length && O + X < n; X++)
        I[O + X] = S[X] ?? "", E++;
      const j = I.join("");
      l(j), j.length >= n ? x && v("Code complete") : y(O + E);
    };
    return /* @__PURE__ */ w(
      "div",
      {
        className: [Gt.wrapper, f].filter(Boolean).join(" "),
        role: "group",
        "aria-label": D ?? h,
        "data-invalid": c || void 0,
        children: [
          /* @__PURE__ */ t("div", { className: [Gt.cells, Gt[u]].join(" "), children: m.map((O, d) => /* @__PURE__ */ t(
            "input",
            {
              ref: (S) => {
                N.current[d] = S, d === 0 && $ && (typeof $ == "function" ? $(S) : $.current = S);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: O,
              disabled: i,
              "aria-label": `Digit ${d + 1} of ${n}`,
              "aria-invalid": c && O !== "" ? !0 : void 0,
              autoFocus: a && d === 0,
              className: [Gt.cell, Gt[`cell-${u}`], c ? Gt.invalid : null].filter(Boolean).join(" "),
              onChange: (S) => z(d, S.target.value),
              onKeyDown: (S) => K(d, S),
              onPaste: (S) => A(d, S),
              onFocus: (S) => S.target.select(),
              onBlur: () => {
                x && v("");
              }
            },
            d
          )) }),
          x && /* @__PURE__ */ t("span", { id: `${M}-live`, role: "status", "aria-live": "polite", className: Gt.live, children: p })
        ]
      }
    );
  }
), Op = "_wrapper_26gop_1", Ip = "_header_26gop_7", jp = "_label_26gop_15", Tp = "_clear_26gop_22", Ep = "_canvas_26gop_53", Ap = "_disabled_26gop_69", nn = {
  wrapper: Op,
  header: Ip,
  label: jp,
  clear: Tp,
  canvas: Ep,
  disabled: Ap
}, Rb = qe(
  function({
    value: n,
    defaultValue: r,
    onChange: o,
    penColor: s = "#1c1c1c",
    penWidth: c = 2.5,
    clearLabel: u = "Clear",
    ariaLabel: a = "Signature",
    width: i,
    height: h = 140,
    disabled: x = !1,
    className: f
  }, D) {
    const $ = le(null), M = le(!1), C = le(!1), b = le({ x: 0, y: 0 });
    Ne(() => {
      const l = $.current;
      if (!l) return;
      const y = window.devicePixelRatio || 1, z = Math.round((i ?? l.clientWidth) * y), K = Math.round(h * y);
      (l.width !== z || l.height !== K) && (l.width = z, l.height = K);
      const A = l.getContext("2d");
      if (!A) return;
      A.setTransform(y, 0, 0, y, 0, 0), A.lineWidth = c, A.strokeStyle = s, A.lineCap = "round", A.lineJoin = "round";
      const O = n ?? r;
      if (O) {
        const d = new Image();
        d.onload = () => {
          A.drawImage(d, 0, 0, l.clientWidth, h);
        }, d.src = O;
      }
    }, [n, r, s, c, i, h]);
    const _ = () => {
      const l = $.current;
      if (!l) return;
      const y = l.toDataURL("image/png");
      o?.(y);
    }, g = () => {
      const l = $.current;
      if (!l) return;
      const y = l.getContext("2d");
      y && y.clearRect(0, 0, l.width, l.height), o?.("");
    };
    tr(D, () => ({
      clear: g,
      toDataURL: (l = "image/png", y) => $.current?.toDataURL(l, y) ?? ""
    }));
    const m = (l) => {
      const y = l.currentTarget.getBoundingClientRect();
      return { x: l.clientX - y.left, y: l.clientY - y.top };
    }, N = (l) => {
      x || (l.preventDefault(), typeof l.currentTarget.setPointerCapture == "function" && l.currentTarget.setPointerCapture(l.pointerId), M.current = !0, C.current = !1, b.current = m(l));
    }, p = (l) => {
      if (!M.current) return;
      l.preventDefault();
      const y = l.currentTarget.getContext("2d");
      if (!y) return;
      const z = m(l);
      y.beginPath(), y.moveTo(b.current.x, b.current.y), y.lineTo(z.x, z.y), y.stroke(), b.current = z, C.current = !0;
    }, v = (l) => {
      M.current && (l.preventDefault(), M.current = !1, C.current && _());
    };
    return /* @__PURE__ */ w("div", { className: [nn.wrapper, f, x ? nn.disabled : null].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ w("div", { className: nn.header, children: [
        /* @__PURE__ */ t("span", { className: nn.label, children: a }),
        /* @__PURE__ */ t("button", { type: "button", className: nn.clear, onClick: g, disabled: x, children: u })
      ] }),
      /* @__PURE__ */ t(
        "canvas",
        {
          ref: $,
          role: "img",
          "aria-label": a,
          "aria-disabled": x || void 0,
          style: { width: i ? `${i}px` : void 0, height: `${h}px` },
          className: nn.canvas,
          onPointerDown: N,
          onPointerMove: p,
          onPointerUp: v,
          onPointerCancel: v
        }
      )
    ] });
  }
), Lp = "_wrapper_1v5uo_1", Rp = "_trigger_1v5uo_7", Bp = "_list_1v5uo_35", Pp = "_row_1v5uo_44", qp = "_name_1v5uo_59", Fp = "_size_1v5uo_68", Kp = "_progress_1v5uo_74", Hp = "_fill_1v5uo_82", Wp = "_status_1v5uo_99", Up = "_remove_1v5uo_106", Dt = {
  wrapper: Lp,
  trigger: Rp,
  list: Bp,
  row: Pp,
  name: qp,
  size: Fp,
  progress: Kp,
  fill: Hp,
  status: Wp,
  remove: Up
};
function Vp(e) {
  return e > 0 ? `${Math.max(1, Math.round(e / 1024))} KB` : "0 KB";
}
const Bb = qe(function({
  url: n,
  multiple: r = !1,
  parameterName: o = "files",
  auto: s = !0,
  headers: c,
  accept: u,
  chooseText: a = "Upload",
  children: i,
  onProgress: h,
  onComplete: x,
  onError: f
}, D) {
  const $ = le(null), [M, C] = V([]), b = le(/* @__PURE__ */ new Map()), _ = (v, l) => {
    C((y) => y.map((z) => z.file.name === v ? { ...z, ...l } : z));
  }, g = (v) => {
    if (!n) return;
    const l = new XMLHttpRequest();
    b.current.set(v.file.name, l);
    const y = new FormData();
    if (y.append(o, v.file), l.upload.addEventListener("progress", (z) => {
      if (!z.lengthComputable) return;
      const K = Math.round(z.loaded / z.total * 100);
      _(v.file.name, { state: "uploading", progress: K }), h?.(v.file.name, K);
    }), l.addEventListener("load", () => {
      l.status >= 200 && l.status < 300 ? (_(v.file.name, { state: "complete", progress: 100 }), x?.(v.file.name)) : (_(v.file.name, { state: "error", message: `HTTP ${l.status}` }), f?.(v.file.name, `HTTP ${l.status}`));
    }), l.addEventListener("error", () => {
      _(v.file.name, { state: "error", message: "Network error" }), f?.(v.file.name, "Network error");
    }), c)
      for (const [z, K] of Object.entries(c))
        l.setRequestHeader(z, K);
    l.open("POST", n), l.send(y), _(v.file.name, { state: "uploading", progress: 0 });
  }, m = (v) => {
    if (!v) return;
    const l = [...v].map((y) => ({
      file: y,
      state: "pending",
      progress: 0
    }));
    C((y) => [...y, ...l]), $.current && ($.current.value = ""), s && l.forEach(g);
  }, N = (v) => {
    b.current.get(v)?.abort(), b.current.delete(v), C((y) => y.filter((z) => z.file.name !== v));
  }, p = i ?? /* @__PURE__ */ w("button", { type: "button", className: Dt.trigger, onClick: () => $.current?.click(), children: [
    /* @__PURE__ */ t(Ve, { name: "upload", size: 14 }),
    a
  ] });
  return tr(D, () => ({
    open: () => $.current?.click(),
    upload: () => M.forEach((v) => v.state === "pending" ? g(v) : null)
  })), /* @__PURE__ */ w("div", { className: Dt.wrapper, children: [
    p,
    /* @__PURE__ */ t(
      "input",
      {
        ref: $,
        type: "file",
        hidden: !0,
        multiple: r,
        accept: u,
        "data-testid": "upload-input",
        onChange: (v) => m(v.target.files)
      }
    ),
    !i && M.length > 0 && /* @__PURE__ */ t("ul", { className: Dt.list, children: M.map(({ file: v, state: l, progress: y, message: z }) => /* @__PURE__ */ w("li", { className: Dt.row, "data-state": l, "data-testid": "upload-row", children: [
      /* @__PURE__ */ t("span", { className: Dt.name, children: v.name }),
      /* @__PURE__ */ t("span", { className: Dt.size, children: Vp(v.size) }),
      /* @__PURE__ */ t(
        "span",
        {
          className: Dt.progress,
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": y,
          children: /* @__PURE__ */ t("span", { className: Dt.fill, style: { width: `${y}%` } })
        }
      ),
      /* @__PURE__ */ t("span", { className: Dt.status, role: "status", children: l === "uploading" ? "Uploading" : l === "complete" ? "Complete" : l === "error" ? z ?? "Failed" : "Pending" }),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: Dt.remove,
          "aria-label": `Remove ${v.name}`,
          onClick: () => N(v.name),
          children: /* @__PURE__ */ t(Ve, { name: "close", size: 14 })
        }
      )
    ] }, v.name)) })
  ] });
}), Xp = "_zone_ws0th_1", Gp = "_dragging_ws0th_23", Yp = "_caption_ws0th_28", Zp = "_browse_ws0th_40", Jp = "_disabled_ws0th_67", vn = {
  zone: Xp,
  dragging: Gp,
  caption: Yp,
  browse: Zp,
  disabled: Jp
};
function Qp(e, n) {
  return n ? n.split(",").some((r) => {
    if (r = r.trim(), !r) return !1;
    if (r.startsWith(".")) return e.name.toLowerCase().endsWith(r.toLowerCase());
    if (r.endsWith("/*")) {
      const o = r.slice(0, -1);
      return e.type.startsWith(o);
    }
    return e.type === r;
  }) : !0;
}
const Pb = qe(function({
  accept: n,
  multiple: r = !1,
  onDrop: o,
  label: s = "Drop files here or browse",
  dragLabel: c = "Drop to attach",
  browseText: u = "Browse",
  disabled: a = !1,
  className: i
}, h) {
  const x = le(null), [f, D] = V(!1), $ = (g) => {
    if (!g || g.length === 0) return;
    const m = [...g].filter((N) => Qp(N, n ?? ""));
    m.length !== 0 && o?.(m);
  }, M = (g) => {
    a || (g.preventDefault(), D(!0));
  }, C = (g) => {
    a || (g.preventDefault(), g.dataTransfer.dropEffect = "copy", D(!0));
  }, b = (g) => {
    a || g.currentTarget.contains(g.relatedTarget) || D(!1);
  }, _ = (g) => {
    a || (g.preventDefault(), D(!1), $(g.dataTransfer.files));
  };
  return tr(h, () => ({
    open: () => x.current?.click()
  })), /* @__PURE__ */ w(
    "div",
    {
      role: "region",
      "aria-label": s,
      className: [vn.zone, f ? vn.dragging : null, a ? vn.disabled : null, i].filter(Boolean).join(" "),
      onDragEnter: M,
      onDragOver: C,
      onDragLeave: b,
      onDrop: _,
      children: [
        /* @__PURE__ */ t("p", { className: vn.caption, children: f ? c : s }),
        !a && /* @__PURE__ */ t("button", { type: "button", className: vn.browse, onClick: () => x.current?.click(), children: u }),
        /* @__PURE__ */ t(
          "input",
          {
            ref: x,
            type: "file",
            hidden: !0,
            multiple: r,
            accept: n,
            "data-testid": "dropzone-input",
            onChange: (g) => {
              $(g.target.files), g.target.value = "";
            }
          }
        )
      ]
    }
  );
}), eh = "_root_zkoiq_1", th = "_menubar_zkoiq_5", nh = "_horizontal_zkoiq_15", rh = "_vertical_zkoiq_20", oh = "_itemWrapper_zkoiq_25", sh = "_item_zkoiq_25", ah = "_disabled_zkoiq_61", lh = "_icon_zkoiq_68", ch = "_text_zkoiq_75", ih = "_caret_zkoiq_79", dh = "_hasChildren_zkoiq_85", uh = "_submenu_zkoiq_94", fh = "_submenuItem_zkoiq_118", at = {
  root: eh,
  menubar: th,
  horizontal: nh,
  vertical: rh,
  itemWrapper: oh,
  item: sh,
  disabled: ah,
  icon: lh,
  text: ch,
  caret: ih,
  hasChildren: dh,
  submenu: uh,
  submenuItem: fh
};
function xn(e) {
  return !!e.disabled;
}
function qb({
  items: e,
  orientation: n = "horizontal",
  onClick: r,
  Click: o,
  ariaLabel: s = "Menu",
  className: c
}) {
  const u = Ue(), a = le(null), i = le(null), [h, x] = V(null), f = le(0), D = le(null), $ = q(
    (_) => {
      const g = { text: _.text, value: _.value, path: _.path };
      (r ?? o)?.(g);
    },
    [r, o]
  ), M = (_, g) => {
    if (!xn(_)) {
      if (_.children && _.children.length > 0) {
        const m = h === g, N = Date.now() - f.current < 600;
        if (m && N) {
          f.current = 0;
          return;
        }
        x((p) => p === g ? null : g);
        return;
      }
      $(_), x(null);
    }
  }, C = (_) => {
    xn(_) || _.children && _.children.length > 0 || ($(_), x(null));
  };
  Ne(() => {
    if (h == null) return;
    const _ = (g) => {
      a.current && !a.current.contains(g.target) && x(null);
    };
    return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
  }, [h]), Ne(() => {
    if (D.current != null && h === D.current) {
      const _ = `${u}-submenu-${h}`;
      document.getElementById(_)?.querySelector('[role="menuitem"]:not([aria-disabled="true"])')?.focus(), D.current = null;
    }
  }, [h, u]);
  const b = (_) => {
    const g = i.current;
    if (!g) return;
    const m = Array.from(
      g.querySelectorAll('[data-top="true"]')
    ).filter((v) => !v.hasAttribute("disabled") && v.getAttribute("aria-disabled") !== "true");
    if (h != null) {
      const v = `${u}-submenu-${h}`, l = document.getElementById(v);
      if (l) {
        const y = Array.from(l.querySelectorAll('[role="menuitem"]')).filter(
          (A) => A.getAttribute("aria-disabled") !== "true"
        ), z = document.activeElement, K = z ? y.indexOf(z) : -1;
        if (_.key === "ArrowDown") {
          _.preventDefault(), K === -1 ? y[0]?.focus() : y[(K + 1) % y.length]?.focus();
          return;
        }
        if (_.key === "ArrowUp") {
          _.preventDefault(), K === -1 ? y[y.length - 1]?.focus() : y[(K - 1 + y.length) % y.length]?.focus();
          return;
        }
        if (_.key === "Escape") {
          _.preventDefault(), x(null), g.querySelector(`[data-top="true"][data-index="${h}"]`)?.focus();
          return;
        }
        if (_.key === "Enter" || _.key === " ")
          return;
      }
      if (_.key === "Escape") {
        _.preventDefault(), x(null);
        return;
      }
    }
    const N = document.activeElement, p = N ? m.indexOf(N) : -1;
    if (_.key === "ArrowRight" || n === "vertical" && _.key === "ArrowDown") {
      if (_.preventDefault(), m.length === 0) return;
      const v = p === -1 ? 0 : (p + 1) % m.length;
      m[v]?.focus();
      return;
    }
    if (_.key === "ArrowLeft" || n === "vertical" && _.key === "ArrowUp") {
      if (_.preventDefault(), m.length === 0) return;
      const v = p === -1 ? m.length - 1 : (p - 1 + m.length) % m.length;
      m[v]?.focus();
      return;
    }
    if (_.key === "ArrowDown") {
      if (p >= 0) {
        const v = N?.getAttribute("data-index"), l = v != null ? Number(v) : -1, y = l >= 0 ? e[l] : void 0;
        y?.children && y.children.length > 0 && !xn(y) && (_.preventDefault(), D.current = l, x(l));
      }
      return;
    }
    if (_.key === "Home") {
      _.preventDefault(), m[0]?.focus();
      return;
    }
    if (_.key === "End") {
      _.preventDefault(), m[m.length - 1]?.focus();
      return;
    }
  };
  return /* @__PURE__ */ t(
    "nav",
    {
      ref: a,
      "aria-label": s,
      className: [at.root, at[n], c].filter(Boolean).join(" "),
      children: /* @__PURE__ */ t(
        "div",
        {
          ref: i,
          role: "menubar",
          "aria-label": s,
          className: at.menubar,
          onKeyDown: b,
          children: e.map((_, g) => {
            const m = !!_.children && _.children.length > 0, N = h === g, p = xn(_), v = `${u}-submenu-${g}`;
            return /* @__PURE__ */ w(
              "div",
              {
                className: at.itemWrapper,
                onMouseEnter: () => {
                  n === "horizontal" && m && !p && (f.current = Date.now(), x(g));
                },
                onMouseLeave: () => {
                  n === "horizontal" && m && x((l) => l === g ? null : l);
                },
                "data-dt-menu-item": "",
                children: [
                  /* @__PURE__ */ w(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      "data-top": "true",
                      "data-index": g,
                      "data-dt-menu-item": "",
                      "aria-disabled": p || void 0,
                      "aria-haspopup": m ? "menu" : void 0,
                      "aria-expanded": m ? N : void 0,
                      "aria-controls": m ? v : void 0,
                      "aria-current": (_.path && !m, void 0),
                      tabIndex: p ? -1 : 0,
                      disabled: p,
                      className: [at.item, p ? at.disabled : null, m ? at.hasChildren : null].filter(Boolean).join(" "),
                      onClick: () => M(_, g),
                      children: [
                        _.icon ? /* @__PURE__ */ t("span", { className: at.icon, "aria-hidden": "true", children: _.icon }) : null,
                        /* @__PURE__ */ t("span", { className: at.text, children: _.text }),
                        m ? /* @__PURE__ */ t("span", { className: at.caret, "aria-hidden": "true", children: "▾" }) : null
                      ]
                    }
                  ),
                  m && N ? /* @__PURE__ */ t(
                    "div",
                    {
                      id: v,
                      role: "menu",
                      className: at.submenu,
                      "data-dt-menu-submenu": "",
                      "aria-label": _.text,
                      children: _.children?.map((l, y) => {
                        const z = xn(l), K = !!l.children && l.children.length > 0;
                        return /* @__PURE__ */ w(
                          "button",
                          {
                            type: "button",
                            role: "menuitem",
                            "aria-disabled": z || void 0,
                            "aria-haspopup": K ? "menu" : void 0,
                            tabIndex: z ? -1 : 0,
                            disabled: z,
                            className: [at.submenuItem, z ? at.disabled : null].filter(Boolean).join(" "),
                            onClick: () => C(l),
                            children: [
                              l.icon ? /* @__PURE__ */ t("span", { className: at.icon, "aria-hidden": "true", children: l.icon }) : null,
                              /* @__PURE__ */ t("span", { className: at.text, children: l.text })
                            ]
                          },
                          `${l.text}-${y}`
                        );
                      })
                    }
                  ) : null
                ]
              },
              `${_.text}-${g}`
            );
          })
        }
      )
    }
  );
}
const _h = "_root_f3qrl_1", ph = "_list_f3qrl_9", hh = "_item_f3qrl_14", mh = "_trigger_f3qrl_18", gh = "_disabled_f3qrl_44", bh = "_expanded_f3qrl_51", yh = "_icon_f3qrl_55", vh = "_text_f3qrl_66", xh = "_caret_f3qrl_73", wh = "_open_f3qrl_80", kh = "_submenu_f3qrl_84", $h = "_submenuItem_f3qrl_93", Nh = "_nestedWrapper_f3qrl_122", Sh = "_nestedTrigger_f3qrl_127", Dh = "_nestedMenu_f3qrl_152", Ch = "_iconOnly_f3qrl_160", Oe = {
  root: _h,
  list: ph,
  item: hh,
  trigger: mh,
  disabled: gh,
  expanded: bh,
  icon: yh,
  text: vh,
  caret: xh,
  open: wh,
  submenu: kh,
  submenuItem: $h,
  nestedWrapper: Nh,
  nestedTrigger: Sh,
  nestedMenu: Dh,
  iconOnly: Ch
};
function zh({
  item: e,
  baseId: n,
  parentKey: r,
  onEmit: o
}) {
  const s = !!e.children && e.children.length > 0, [c, u] = V(!1), a = `${n}-nested-${r}`, i = !!e.disabled, h = () => {
    if (!i) {
      if (s) {
        u((f) => !f);
        return;
      }
      o({ text: e.text, value: e.value, path: e.path });
    }
  }, x = (f) => {
    f.key === "Enter" || f.key === " " ? (f.preventDefault(), h()) : f.key === "Escape" && c && (f.preventDefault(), u(!1));
  };
  return s ? /* @__PURE__ */ w("div", { className: Oe.nestedWrapper, children: [
    /* @__PURE__ */ w(
      "button",
      {
        type: "button",
        "aria-expanded": c,
        "aria-controls": a,
        "aria-disabled": i || void 0,
        disabled: i,
        tabIndex: i ? -1 : 0,
        className: [Oe.nestedTrigger, i ? Oe.disabled : null].filter(Boolean).join(" "),
        onClick: h,
        onKeyDown: x,
        children: [
          e.icon ? /* @__PURE__ */ t("span", { className: Oe.icon, "aria-hidden": "true", children: e.icon }) : null,
          /* @__PURE__ */ t("span", { className: Oe.text, children: e.text }),
          /* @__PURE__ */ t("span", { className: [Oe.caret, c ? Oe.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" })
        ]
      }
    ),
    c ? /* @__PURE__ */ t("div", { id: a, role: "menu", className: Oe.nestedMenu, children: e.children?.map((f, D) => {
      const $ = !!f.disabled;
      return /* @__PURE__ */ w(
        "div",
        {
          role: "menuitem",
          "aria-disabled": $ || void 0,
          tabIndex: $ ? -1 : 0,
          className: [Oe.submenuItem, $ ? Oe.disabled : null].filter(Boolean).join(" "),
          onClick: () => {
            $ || f.children && f.children.length > 0 || o({ text: f.text, value: f.value, path: f.path });
          },
          onKeyDown: (M) => {
            if (M.key === "Enter" || M.key === " ") {
              if (M.preventDefault(), $) return;
              o({ text: f.text, value: f.value, path: f.path });
            }
          },
          children: [
            f.icon ? /* @__PURE__ */ t("span", { className: Oe.icon, "aria-hidden": "true", children: f.icon }) : null,
            /* @__PURE__ */ t("span", { className: Oe.text, children: f.text })
          ]
        },
        `${f.text}-${D}`
      );
    }) }) : null
  ] }) : /* @__PURE__ */ w(
    "div",
    {
      role: "menuitem",
      "aria-disabled": i || void 0,
      tabIndex: i ? -1 : 0,
      className: [Oe.submenuItem, i ? Oe.disabled : null].filter(Boolean).join(" "),
      onClick: () => {
        i || o({ text: e.text, value: e.value, path: e.path });
      },
      onKeyDown: (f) => {
        if (f.key === "Enter" || f.key === " ") {
          if (f.preventDefault(), i) return;
          o({ text: e.text, value: e.value, path: e.path });
        }
      },
      children: [
        e.icon ? /* @__PURE__ */ t("span", { className: Oe.icon, "aria-hidden": "true", children: e.icon }) : null,
        /* @__PURE__ */ t("span", { className: Oe.text, children: e.text })
      ]
    }
  );
}
function Fb({
  items: e,
  multiple: n,
  Multiple: r,
  showArrow: o,
  ShowArrow: s,
  displayStyle: c,
  DisplayStyle: u,
  onClick: a,
  Click: i,
  ariaLabel: h = "Panel menu",
  className: x
}) {
  const f = Ue(), D = n ?? r ?? !1, $ = o ?? s ?? !0, M = c ?? u ?? "iconAndText", [C, b] = V([]), _ = q(
    (N) => {
      const p = { text: N.text, value: N.value, path: N.path };
      (a ?? i)?.(p);
    },
    [a, i]
  ), g = (N, p, v) => {
    if (!v.disabled) {
      if (p) {
        b((l) => l.includes(N) ? l.filter((z) => z !== N) : D ? [...l, N] : [N]);
        return;
      }
      _(v);
    }
  }, m = (N) => {
    const p = N.target;
    if (!(N.key === "Enter" || N.key === " ")) {
      if (N.key === "Escape") {
        const v = p.getAttribute("aria-controls");
        if (v) {
          const l = v.match(/-panel-(\d+)$/);
          if (l) {
            const y = Number(l[1]);
            b((z) => z.filter((K) => K !== y));
          }
        } else {
          const l = p.closest('[role="menu"]');
          if (l) {
            const z = l.id.match(/-panel-(\d+)$/);
            if (z) {
              const K = Number(z[1]);
              b((O) => O.filter((d) => d !== K)), document.getElementById(`${f}-trigger-${K}`)?.focus();
            }
          }
        }
        N.preventDefault();
        return;
      }
      if (N.key === "ArrowDown" || N.key === "ArrowUp") {
        const v = Array.from(
          N.currentTarget.querySelectorAll('button, [role="menuitem"]')
        ).filter((K) => !K.hasAttribute("disabled") && K.getAttribute("aria-disabled") !== "true"), l = v.indexOf(p);
        if (l === -1) return;
        N.preventDefault();
        const y = N.key === "ArrowDown" ? 1 : -1;
        v[(l + y + v.length) % v.length]?.focus();
      }
    }
  };
  return /* @__PURE__ */ t(
    "nav",
    {
      "aria-label": h,
      className: [
        Oe.root,
        M === "icon" ? Oe.iconOnly : Oe.iconAndText,
        x
      ].filter(Boolean).join(" "),
      onKeyDown: m,
      children: /* @__PURE__ */ t("div", { className: Oe.list, role: "presentation", children: e.map((N, p) => {
        const v = !!N.children && N.children.length > 0, l = C.includes(p), y = !!N.disabled, z = `${f}-panel-${p}`, K = `${f}-trigger-${p}`;
        return /* @__PURE__ */ w("div", { className: Oe.item, children: [
          /* @__PURE__ */ w(
            "button",
            {
              type: "button",
              id: K,
              "aria-expanded": v ? l : void 0,
              "aria-controls": v ? z : void 0,
              "aria-disabled": y || void 0,
              disabled: y,
              tabIndex: y ? -1 : 0,
              className: [
                Oe.trigger,
                y ? Oe.disabled : null,
                l ? Oe.expanded : null
              ].filter(Boolean).join(" "),
              onClick: () => g(p, v, N),
              children: [
                N.icon ? /* @__PURE__ */ t("span", { className: Oe.icon, "aria-hidden": "true", children: N.icon }) : null,
                M === "iconAndText" ? /* @__PURE__ */ t("span", { className: Oe.text, children: N.text }) : /* @__PURE__ */ t("span", { className: Oe.text, "aria-label": N.text, children: N.icon ? null : N.text.slice(0, 1) }),
                v && $ ? /* @__PURE__ */ t("span", { className: [Oe.caret, l ? Oe.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" }) : null
              ]
            }
          ),
          v && l ? /* @__PURE__ */ t("div", { id: z, role: "menu", className: Oe.submenu, "aria-labelledby": K, children: N.children?.map((A, O) => /* @__PURE__ */ t(
            zh,
            {
              item: A,
              baseId: f,
              parentKey: `${p}-${O}`,
              onEmit: _
            },
            `${A.text}-${O}`
          )) }) : null
        ] }, `${N.text}-${p}`);
      }) })
    }
  );
}
const Mh = "_root_10qer_1", Oh = "_trigger_10qer_7", Ih = "_defaultTrigger_10qer_40", jh = "_avatar_10qer_46", Th = "_menu_10qer_58", Eh = "_item_10qer_74", Ah = "_disabled_10qer_88", Lh = "_active_10qer_97", Rh = "_icon_10qer_107", Bh = "_text_10qer_114", Ct = {
  root: Mh,
  trigger: Oh,
  defaultTrigger: Ih,
  avatar: jh,
  menu: Th,
  item: Eh,
  disabled: Ah,
  active: Lh,
  icon: Rh,
  text: Bh
};
function Kb({
  items: e,
  trigger: n,
  Template: r,
  onClick: o,
  Click: s,
  ariaLabel: c = "Profile menu",
  className: u
}) {
  const a = Ue(), i = `${a}-menu`, h = le(null), x = le(null), [f, D] = V(!1), [$, M] = V(-1), C = n ?? r, b = e.map((l, y) => l.disabled ? -1 : y).filter((l) => l >= 0), _ = q(
    (l) => {
      if (l.disabled) return;
      const y = { text: l.text, path: l.path };
      (o ?? s)?.(y), D(!1), x.current?.focus();
    },
    [o, s]
  ), g = q(() => {
    M(b[0] ?? -1), D(!0);
  }, [b]), m = q(() => {
    D(!1), M(-1), x.current?.focus();
  }, []);
  Ne(() => {
    if (!f) return;
    const l = (y) => {
      h.current && !h.current.contains(y.target) && (D(!1), M(-1));
    };
    return document.addEventListener("mousedown", l), () => document.removeEventListener("mousedown", l);
  }, [f]), Ne(() => {
    if (!f) return;
    const l = (y) => {
      y.key === "Escape" && (y.preventDefault(), m());
    };
    return document.addEventListener("keydown", l), () => document.removeEventListener("keydown", l);
  }, [f, m]);
  const N = (l) => {
    if (b.length === 0) return;
    const y = b.indexOf($), z = y === -1 ? 0 : (y + l + b.length) % b.length, K = b[z];
    K != null && M(K);
  }, p = (l) => {
    if (!f) {
      (l.key === "ArrowDown" || l.key === "Enter" || l.key === " ") && (l.preventDefault(), g());
      return;
    }
    switch (l.key) {
      case "Escape":
        l.preventDefault(), m();
        break;
      case "ArrowDown":
        l.preventDefault(), N(1);
        break;
      case "ArrowUp":
        l.preventDefault(), N(-1);
        break;
      case "Home":
        l.preventDefault(), b[0] != null && M(b[0]);
        break;
      case "End":
        l.preventDefault(), b[b.length - 1] != null && M(b[b.length - 1]);
        break;
      case "Enter":
      case " ":
        if (l.preventDefault(), $ >= 0) {
          const y = e[$];
          y && !y.disabled && _(y);
        }
        break;
      case "Tab":
        D(!1), M(-1);
        break;
    }
  }, v = (l) => {
    switch (l.key) {
      case "ArrowDown":
        l.preventDefault(), N(1);
        break;
      case "ArrowUp":
        l.preventDefault(), N(-1);
        break;
      case "Home":
        l.preventDefault(), b[0] != null && M(b[0]);
        break;
      case "End":
        l.preventDefault(), b[b.length - 1] != null && M(b[b.length - 1]);
        break;
      case "Enter":
      case " ":
        if (l.preventDefault(), $ >= 0) {
          const y = e[$];
          y && !y.disabled && _(y);
        }
        break;
      case "Escape":
        l.preventDefault(), m();
        break;
      case "Tab":
        D(!1), M(-1);
        break;
    }
  };
  return /* @__PURE__ */ t(
    "div",
    {
      ref: h,
      className: [Ct.root, u].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ w("nav", { "aria-label": c, children: [
        /* @__PURE__ */ t(
          "button",
          {
            ref: x,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": f,
            "aria-controls": i,
            "aria-label": c,
            className: Ct.trigger,
            onClick: () => f ? m() : g(),
            onKeyDown: p,
            children: C ?? /* @__PURE__ */ w("span", { className: Ct.defaultTrigger, children: [
              /* @__PURE__ */ t("span", { className: Ct.avatar, "aria-hidden": "true", children: "●" }),
              /* @__PURE__ */ t("span", { children: "Profile" })
            ] })
          }
        ),
        f ? /* @__PURE__ */ t(
          "div",
          {
            id: i,
            role: "menu",
            "aria-label": c,
            "aria-activedescendant": $ >= 0 ? `${a}-item-${$}` : void 0,
            className: Ct.menu,
            onKeyDown: v,
            tabIndex: -1,
            children: e.map((l, y) => {
              const z = !!l.disabled, K = y === $;
              return /* @__PURE__ */ w(
                "div",
                {
                  id: `${a}-item-${y}`,
                  role: "menuitem",
                  "aria-disabled": z || void 0,
                  tabIndex: z ? -1 : 0,
                  className: [Ct.item, K ? Ct.active : null, z ? Ct.disabled : null].filter(Boolean).join(" "),
                  onClick: () => {
                    z || _(l);
                  },
                  onMouseEnter: () => {
                    z || M(y);
                  },
                  children: [
                    l.icon ? /* @__PURE__ */ t("span", { className: Ct.icon, "aria-hidden": "true", children: l.icon }) : null,
                    /* @__PURE__ */ t("span", { className: Ct.text, children: l.text })
                  ]
                },
                `${l.text}-${y}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const Ph = "_root_yzi70_1", qh = "_bottomRight_yzi70_11", Fh = "_bottomLeft_yzi70_16", Kh = "_topRight_yzi70_21", Hh = "_topLeft_yzi70_26", Wh = "_menu_yzi70_31", Uh = "_itemWrapper_yzi70_48", Vh = "_tooltip_yzi70_54", Xh = "_main_yzi70_76", Gh = "_mainIcon_yzi70_104", Yh = "_mainOpen_yzi70_109", Zh = "_item_yzi70_48", Jh = "_disabled_yzi70_141", Qh = "_itemIcon_yzi70_148", dt = {
  root: Ph,
  bottomRight: qh,
  bottomLeft: Fh,
  topRight: Kh,
  topLeft: Hh,
  menu: Wh,
  itemWrapper: Uh,
  tooltip: Vh,
  main: Xh,
  mainIcon: Gh,
  mainOpen: Yh,
  item: Zh,
  disabled: Jh,
  itemIcon: Qh
};
function Hb({
  items: e,
  position: n,
  Position: r,
  icon: o = "+",
  onClick: s,
  Click: c,
  ariaLabel: u = "Open menu",
  className: a
}) {
  const i = n ?? r ?? "bottom-right", x = `${Ue()}-menu`, f = le(null), D = le(null), [$, M] = V(!1), C = q(
    (m) => {
      if (m.disabled) return;
      const N = { text: m.text, value: m.value };
      (s ?? c)?.(N), M(!1), D.current?.focus();
    },
    [s, c]
  );
  Ne(() => {
    if (!$) return;
    const m = (N) => {
      f.current && !f.current.contains(N.target) && M(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [$]), Ne(() => {
    if (!$) return;
    const m = (N) => {
      N.key === "Escape" && (M(!1), D.current?.focus());
    };
    return document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m);
  }, [$]);
  const b = i === "bottom-right" ? dt.bottomRight : i === "bottom-left" ? dt.bottomLeft : i === "top-right" ? dt.topRight : dt.topLeft, _ = (m) => {
    !$ && (m.key === "Enter" || m.key === " " || m.key === "ArrowDown" || m.key === "ArrowUp") ? (m.preventDefault(), M(!0)) : $ && m.key === "Escape" && (m.preventDefault(), M(!1));
  }, g = (m) => {
    m.key === "Escape" && (m.preventDefault(), M(!1), D.current?.focus());
  };
  return /* @__PURE__ */ w(
    "div",
    {
      ref: f,
      className: [dt.root, b, a].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        $ ? /* @__PURE__ */ t(
          "div",
          {
            id: x,
            role: "menu",
            "aria-label": u,
            className: dt.menu,
            onKeyDown: g,
            children: e.map((m, N) => {
              const p = !!m.disabled;
              return /* @__PURE__ */ w("div", { className: dt.itemWrapper, children: [
                /* @__PURE__ */ t("span", { className: dt.tooltip, "aria-hidden": "true", children: m.text }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": m.text,
                    "aria-disabled": p || void 0,
                    title: m.text,
                    disabled: p,
                    tabIndex: p ? -1 : 0,
                    className: [dt.item, p ? dt.disabled : null].filter(Boolean).join(" "),
                    onClick: () => C(m),
                    children: /* @__PURE__ */ t("span", { className: dt.itemIcon, "aria-hidden": "true", children: m.icon ?? "•" })
                  }
                )
              ] }, `${m.text}-${N}`);
            })
          }
        ) : null,
        /* @__PURE__ */ t(
          "button",
          {
            ref: D,
            type: "button",
            className: dt.main,
            "aria-haspopup": "menu",
            "aria-expanded": $,
            "aria-controls": x,
            "aria-label": u,
            onClick: () => M((m) => !m),
            onKeyDown: _,
            children: /* @__PURE__ */ t("span", { "aria-hidden": "true", className: [dt.mainIcon, $ ? dt.mainOpen : null].filter(Boolean).join(" "), children: o })
          }
        )
      ]
    }
  );
}
const em = "_root_18w60_1", tm = "_list_18w60_5", nm = "_item_18w60_15", rm = "_link_18w60_22", om = "_linkButton_18w60_23", sm = "_current_18w60_24", am = "_disabled_18w60_68", lm = "_icon_18w60_74", cm = "_text_18w60_81", im = "_separator_18w60_85", Ke = {
  root: em,
  list: tm,
  item: nm,
  link: rm,
  linkButton: om,
  current: sm,
  disabled: am,
  icon: lm,
  text: cm,
  separator: im
};
function Wb({ items: e, onClick: n, Click: r, ariaLabel: o = "Breadcrumb", className: s }) {
  const c = n ?? r, u = (a) => {
    a.disabled || c?.({ text: a.text, path: a.path });
  };
  return /* @__PURE__ */ t("nav", { "aria-label": o, className: [Ke.root, s].filter(Boolean).join(" "), children: /* @__PURE__ */ t("ol", { className: Ke.list, children: e.map((a, i) => {
    const h = i === e.length - 1, x = !!a.disabled;
    return /* @__PURE__ */ w("li", { className: Ke.item, children: [
      h ? x ? /* @__PURE__ */ w(
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
      ) : x ? /* @__PURE__ */ w(
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
const dm = "_root_13ac5_1", um = "_list_13ac5_5", fm = "_item_13ac5_15", _m = "_connector_13ac5_21", pm = "_connectorCompleted_13ac5_30", hm = "_step_13ac5_34", mm = "_active_13ac5_69", gm = "_completed_13ac5_75", bm = "_circle_13ac5_79", ym = "_check_13ac5_109", vm = "_icon_13ac5_114", xm = "_number_13ac5_119", wm = "_text_13ac5_124", ut = {
  root: dm,
  list: um,
  item: fm,
  connector: _m,
  connectorCompleted: pm,
  step: hm,
  active: mm,
  completed: gm,
  circle: bm,
  check: ym,
  icon: vm,
  number: xm,
  text: wm
};
function Ub({
  items: e,
  selectedIndex: n,
  SelectedIndex: r,
  defaultIndex: o = 0,
  linear: s,
  Linear: c,
  onChange: u,
  Change: a,
  onSelectedIndexChange: i,
  ariaLabel: h = "Steps",
  className: x
}) {
  const f = s ?? c ?? !1, D = n ?? r, $ = D !== void 0, [M, C] = V(() => Math.min(Math.max(0, D ?? o), Math.max(0, e.length - 1))), _ = Math.min(Math.max(0, $ ? D : M), Math.max(0, e.length - 1)), g = le(null), m = q(
    (v) => {
      const l = Math.min(Math.max(0, v), Math.max(0, e.length - 1));
      $ || C(l), (u ?? a ?? i)?.(l);
    },
    [$, u, a, i, e.length]
  ), N = q(
    (v, l) => !!(l.disabled || f && v > _ + 1),
    [f, _]
  ), p = (v) => {
    const l = Array.from(
      v.currentTarget.querySelectorAll("button[data-step]")
    ).filter((K) => K.getAttribute("aria-disabled") !== "true" && !K.disabled), y = document.activeElement, z = y ? l.indexOf(y) : -1;
    if (v.key === "ArrowRight" || v.key === "ArrowDown") {
      if (v.preventDefault(), l.length === 0) return;
      const K = z === -1 ? 0 : (z + 1) % l.length, A = l[K];
      A && A.focus();
    } else if (v.key === "ArrowLeft" || v.key === "ArrowUp") {
      if (v.preventDefault(), l.length === 0) return;
      const K = z === -1 ? l.length - 1 : (z - 1 + l.length) % l.length, A = l[K];
      A && A.focus();
    } else v.key === "Home" ? (v.preventDefault(), l[0]?.focus()) : v.key === "End" && (v.preventDefault(), l[l.length - 1]?.focus());
  };
  return /* @__PURE__ */ t(
    "nav",
    {
      "aria-label": h,
      className: [ut.root, x].filter(Boolean).join(" "),
      onKeyDown: p,
      children: /* @__PURE__ */ t("ol", { ref: g, role: "list", className: ut.list, children: e.map((v, l) => {
        const y = l === _, z = l < _, K = N(l, v);
        return /* @__PURE__ */ w("li", { role: "listitem", className: ut.item, children: [
          l > 0 ? /* @__PURE__ */ t("span", { className: [ut.connector, z ? ut.connectorCompleted : null].filter(Boolean).join(" "), "aria-hidden": "true" }) : null,
          /* @__PURE__ */ w(
            "button",
            {
              type: "button",
              "data-step": l,
              "aria-current": y ? "step" : void 0,
              "aria-disabled": K ? "true" : void 0,
              disabled: K,
              tabIndex: K ? -1 : 0,
              className: [
                ut.step,
                y ? ut.active : null,
                z ? ut.completed : null,
                K ? ut.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => {
                K || m(l);
              },
              children: [
                /* @__PURE__ */ t("span", { className: ut.circle, "aria-hidden": "true", children: z ? /* @__PURE__ */ t("span", { className: ut.check, "aria-hidden": "true", children: "✓" }) : v.icon ? /* @__PURE__ */ t("span", { className: ut.icon, children: v.icon }) : /* @__PURE__ */ t("span", { className: ut.number, children: l + 1 }) }),
                /* @__PURE__ */ t("span", { className: ut.text, children: v.text })
              ]
            }
          )
        ] }, `${v.text}-${l}`);
      }) })
    }
  );
}
const km = "_root_1mm03_1", $m = "_horizontal_1mm03_13", Nm = "_vertical_1mm03_17", Sm = "_pane_1mm03_21", Dm = "_handle_1mm03_31", Cm = "_handleHorizontal_1mm03_51", zm = "_handleVertical_1mm03_57", Mm = "_handleGrip_1mm03_63", Om = "_handleCollapseHint_1mm03_75", Im = "_collapseBtn_1mm03_79", jm = "_collapseBtnCollapsed_1mm03_109", xt = {
  root: km,
  horizontal: $m,
  vertical: Nm,
  pane: Sm,
  handle: Dm,
  handleHorizontal: Cm,
  handleVertical: zm,
  handleGrip: Mm,
  handleCollapseHint: Om,
  collapseBtn: Im,
  collapseBtnCollapsed: jm
};
function wn(e, n) {
  if (!e) return n;
  const r = e.trim();
  if (r.endsWith("%")) {
    const s = parseFloat(r.slice(0, -1));
    return Number.isNaN(s) ? n : s;
  }
  if (r.endsWith("px")) {
    const s = parseFloat(r.slice(0, -2));
    return Number.isNaN(s) ? n : s;
  }
  const o = parseFloat(r);
  return Number.isNaN(o) ? n : o;
}
function At(e, n, r) {
  return Math.min(r, Math.max(n, e));
}
function Vb({
  orientation: e,
  Orientation: n,
  panes: r,
  onResize: o,
  Resize: s,
  onCollapse: c,
  Collapse: u,
  ariaLabel: a = "Splitter",
  className: i
}) {
  const h = e ?? n ?? "horizontal", x = h === "horizontal", f = le(null), D = q(() => {
    const d = r.length;
    if (d === 0) return [];
    const S = r.map((E) => E.size ? wn(E.size, 100 / d) : 100 / d), I = S.reduce((E, j) => E + j, 0);
    return Math.abs(I - 100) > 0.01 && I > 0 ? S.map((E) => E / I * 100) : S;
  }, [r]), [$, M] = V(() => D()), [C, b] = V(() => r.map((d) => !!d.collapsed)), _ = le($);
  Ne(() => {
    b(r.map((d) => !!d.collapsed));
  }, [r]);
  const g = q(() => r.map((d) => wn(d.min, 0)), [r]), m = q(() => r.map((d) => wn(d.max, 100)), [r]), N = q(
    (d, S) => {
      const I = { paneIndex: d, newSize: S, cancel: !1 };
      return (o ?? s)?.(I), !I.cancel;
    },
    [o, s]
  ), p = q(
    (d, S) => {
      const I = { paneIndex: d, collapse: S, cancel: !1 };
      return (c ?? u)?.(I), !I.cancel;
    },
    [c, u]
  ), v = q(
    (d) => {
      const S = !C[d];
      p(d, S) && (S ? (_.current = [...$], b((I) => {
        const E = [...I];
        return E[d] !== void 0 && (E[d] = !0), E;
      }), M((I) => {
        const E = [...I], j = E[d] ?? 0, X = d < E.length - 1 ? d + 1 : d - 1;
        if (X >= 0 && X < E.length) {
          const ne = E[X] ?? 0;
          E[X] = ne + j, E[d] = 0;
        } else
          E[d] = 0;
        return E;
      })) : (b((I) => {
        const E = [...I];
        return E[d] !== void 0 && (E[d] = !1), E;
      }), M(() => {
        const I = [..._.current];
        return I.length !== r.length ? r.map(() => 100 / r.length) : I;
      })));
    },
    [C, $, r.length, p]
  ), l = le(null), y = q(
    (d, S, I) => {
      const E = f.current;
      if (!E) return null;
      const j = E.getBoundingClientRect();
      let X;
      if (x) {
        if (j.width === 0) return null;
        X = (S - j.left) / j.width * 100;
      } else {
        if (j.height === 0) return null;
        X = (I - j.top) / j.height * 100;
      }
      let ne = 0;
      for (let ee = 0; ee < d; ee++) {
        const ae = $[ee];
        ae !== void 0 && (ne += ae);
      }
      return X - ne;
    },
    [x, $]
  ), z = (d, S) => {
    S.preventDefault();
    const I = S.currentTarget;
    I.focus(), typeof I.setPointerCapture == "function" && I.setPointerCapture(S.pointerId), l.current = { handleIndex: d, pointerId: S.pointerId };
  }, K = (d) => {
    if (!l.current || l.current.pointerId !== d.pointerId) return;
    d.preventDefault();
    const S = l.current.handleIndex, I = y(S, d.clientX, d.clientY);
    if (I == null) return;
    const E = g(), j = m(), X = E[S] ?? 0, ne = j[S] ?? 100, ie = S + 1, ee = E[ie] ?? 0, ae = j[ie] ?? 100, se = $[S] ?? 0, G = $[ie] ?? 0, U = se + G;
    if (U <= 0) return;
    let B = At(I, X, ne), re = U - B;
    if (re < ee) {
      if (re = ee, B = U - re, B < X || B > ne) return;
    } else if (re > ae && (re = ae, B = U - re, B < X || B > ne))
      return;
    B = At(B, X, ne), re = U - B, N(S, B) && M((he) => {
      const J = [...he];
      return J[S] = B, J[ie] = re, J;
    });
  }, A = (d) => {
    !l.current || l.current.pointerId !== d.pointerId || (l.current = null);
  }, O = (d, S) => {
    const I = g(), E = m(), j = d, X = d + 1, ne = $[j] ?? 0, ie = $[X] ?? 0, ee = ne + ie;
    let ae = 0;
    const se = !!r[j]?.collapsible, G = !!r[X]?.collapsible;
    if (x ? S.key === "ArrowLeft" ? ae = -5 : S.key === "ArrowRight" && (ae = 5) : S.key === "ArrowUp" ? ae = -5 : S.key === "ArrowDown" && (ae = 5), S.key === "Home") {
      S.preventDefault();
      let U = I[j] ?? 0, B = ee - U;
      if (B = At(B, I[X] ?? 0, E[X] ?? 100), U = ee - B, U = At(U, I[j] ?? 0, E[j] ?? 100), !N(j, U)) return;
      M((re) => {
        const he = [...re];
        return he[j] = U, he[X] = B, he;
      });
      return;
    }
    if (S.key === "End") {
      S.preventDefault();
      let U = E[j] ?? 100;
      U = Math.min(U, ee - (I[X] ?? 0));
      let B = ee - U;
      if (B = At(B, I[X] ?? 0, E[X] ?? 100), U = ee - B, U = At(U, I[j] ?? 0, E[j] ?? 100), !N(j, U)) return;
      M((re) => {
        const he = [...re];
        return he[j] = U, he[X] = B, he;
      });
      return;
    }
    if ((S.key === "Enter" || S.key === " ") && (se || G)) {
      S.preventDefault(), v(se ? j : X);
      return;
    }
    if (ae !== 0) {
      S.preventDefault();
      let U = ne + ae, B = ee - U;
      const re = I[j] ?? 0, he = E[j] ?? 100, J = I[X] ?? 0, me = E[X] ?? 100;
      if (U = At(U, re, he), B = ee - U, (B < J || B > me) && (B = At(B, J, me), U = ee - B, U = At(U, re, he), B = ee - U), !N(j, U)) return;
      M((ye) => {
        const Ce = [...ye];
        return Ce[j] = U, Ce[X] = B, Ce;
      });
    }
  };
  return /* @__PURE__ */ t(
    "div",
    {
      ref: f,
      className: [xt.root, x ? xt.horizontal : xt.vertical, i].filter(Boolean).join(" "),
      "aria-label": a,
      children: r.map((d, S) => {
        const I = !!C[S], E = I ? 0 : $[S] ?? 100 / r.length, j = I ? { display: "none" } : x ? { flexBasis: `${E}%`, flexGrow: 0, flexShrink: 0, overflow: "auto" } : { flexBasis: `${E}%`, flexGrow: 0, flexShrink: 0, overflow: "auto" }, X = wn(d.min, 0), ne = wn(d.max, 100), ie = S < r.length - 1, ee = !!r[S + 1]?.collapsible;
        return /* @__PURE__ */ w("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ w(
            "div",
            {
              role: "group",
              "aria-label": d.label ?? `Pane ${S + 1}`,
              className: xt.pane,
              style: j,
              "data-collapsed": I ? "true" : void 0,
              children: [
                I ? null : d.children,
                d.collapsible && !I ? /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    className: xt.collapseBtn,
                    "aria-label": `Collapse pane ${S + 1}`,
                    "aria-expanded": !I,
                    onClick: () => v(S),
                    children: x ? "◀" : "▲"
                  }
                ) : null,
                d.collapsible && I ? /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    className: xt.collapseBtn,
                    "aria-label": `Expand pane ${S + 1}`,
                    "aria-expanded": !I,
                    onClick: () => v(S),
                    children: x ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          I && d.collapsible ? (
            // when collapsed we already rendered expand button inside pane, but pane is display none, so render expand button outside?
            // Actually we hide pane with display none, need visible expand button
            // So render alternative expand button adjacent
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                className: xt.collapseBtnCollapsed,
                "aria-label": `Expand pane ${S + 1}`,
                "aria-expanded": "false",
                onClick: () => v(S),
                children: x ? "▶" : "▼"
              }
            )
          ) : null,
          ie ? /* @__PURE__ */ w(
            "div",
            {
              role: "separator",
              "aria-orientation": h,
              "aria-valuemin": X,
              "aria-valuemax": ne,
              "aria-valuenow": Math.round(E),
              "aria-label": `Resize handle ${S + 1}`,
              tabIndex: I || C[S + 1] ? -1 : 0,
              className: [xt.handle, x ? xt.handleHorizontal : xt.handleVertical].filter(Boolean).join(" "),
              onPointerDown: (ae) => z(S, ae),
              onPointerMove: K,
              onPointerUp: A,
              onKeyDown: (ae) => O(S, ae),
              children: [
                /* @__PURE__ */ t("span", { className: xt.handleGrip, "aria-hidden": "true" }),
                (d.collapsible || ee) && /* @__PURE__ */ t("span", { className: xt.handleCollapseHint, "aria-hidden": "true" })
              ]
            }
          ) : null
        ] }, S);
      })
    }
  );
}
const Tm = "_root_10e1i_1", Em = "_list_10e1i_5", Am = "_vertical_10e1i_14", Lm = "_horizontal_10e1i_20", Rm = "_item_10e1i_28", Bm = "_link_10e1i_32", Pm = "_active_10e1i_57", rn = {
  root: Tm,
  list: Em,
  vertical: Am,
  horizontal: Lm,
  item: Rm,
  link: Bm,
  active: Pm
};
function Xb({
  items: e,
  selector: n,
  Selector: r,
  orientation: o,
  Orientation: s,
  onClick: c,
  Click: u,
  ariaLabel: a = "Table of contents",
  className: i
}) {
  const h = n ?? r, x = o ?? s ?? "vertical", [f, D] = V(() => e[0]?.selector ?? null), $ = le(f);
  $.current = f;
  const M = q(
    (C, b) => {
      if (D(C.selector), (c ?? u)?.({ text: C.text, selector: C.selector }), b) {
        try {
          b.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch {
          b.scrollIntoView();
        }
        const g = b;
        g.getAttribute("tabindex") == null && g.tabIndex === -1 || g.tabIndex < 0 ? (g.getAttribute("tabindex"), g.setAttribute("tabindex", "-1"), g.focus({ preventScroll: !0 })) : g.focus({ preventScroll: !0 });
      }
    },
    [c, u]
  );
  return Ne(() => {
    if (e.length === 0) return;
    const b = (() => {
      if (h) {
        const p = document.querySelector(h);
        if (p) return p;
      }
      return window;
    })();
    let _ = null;
    const g = /* @__PURE__ */ new Map(), m = () => {
      let p = null, v = null;
      for (const y of e) {
        const z = document.querySelector(y.selector);
        if (!z) continue;
        g.set(y.selector, z);
        const K = z.getBoundingClientRect();
        let A = K.top;
        if (b !== window) {
          const O = b.getBoundingClientRect();
          A = K.top - O.top;
        }
        A <= 80 ? (!v || A > v.el.getBoundingClientRect().top - (b !== window ? b.getBoundingClientRect().top : 0)) && (v = { sel: y.selector, el: z }) : (!p || A < p.top) && (p = { sel: y.selector, top: A });
      }
      const l = v?.sel ?? p?.sel ?? e[0]?.selector ?? null;
      l && l !== $.current && D(l);
    }, N = () => {
      m();
    };
    if (typeof IntersectionObserver < "u") {
      const p = b === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : { root: b, rootMargin: "-20% 0px -70% 0px", threshold: 0 };
      _ = new IntersectionObserver((v) => {
        const l = v.filter((y) => y.isIntersecting).sort((y, z) => y.boundingClientRect.top - z.boundingClientRect.top);
        if (l[0]) {
          const y = l[0].target;
          for (const z of e) {
            if (document.querySelector(z.selector) === y) {
              D(z.selector);
              break;
            }
            if (z.selector.startsWith("#") && y.id === z.selector.slice(1)) {
              D(z.selector);
              break;
            }
          }
        } else
          m();
      }, p);
      for (const v of e) {
        const l = document.querySelector(v.selector);
        l && (_.observe(l), g.set(v.selector, l));
      }
    }
    return b === window ? (window.addEventListener("scroll", N, { passive: !0 }), m(), () => {
      window.removeEventListener("scroll", N), _?.disconnect();
    }) : (b.addEventListener("scroll", N, { passive: !0 }), m(), () => {
      b.removeEventListener("scroll", N), _?.disconnect();
    });
  }, [e, h]), /* @__PURE__ */ t("nav", { "aria-label": a, className: [rn.root, rn[x], i].filter(Boolean).join(" "), children: /* @__PURE__ */ t("ol", { className: rn.list, children: e.map((C) => {
    const b = C.selector === f;
    return /* @__PURE__ */ t("li", { className: rn.item, children: /* @__PURE__ */ t(
      "a",
      {
        href: C.selector.startsWith("#") || C.selector.startsWith(".") ? C.selector : `#${C.selector}`,
        className: [rn.link, b ? rn.active : null].filter(Boolean).join(" "),
        "aria-current": b ? "location" : void 0,
        onClick: (_) => {
          _.preventDefault();
          const g = document.querySelector(C.selector);
          M(C, g);
        },
        children: C.text
      }
    ) }, `${C.text}-${C.selector}`);
  }) }) });
}
const qm = "_root_7t0e2_1", Fm = "_viewport_7t0e2_17", Km = "_slide_7t0e2_24", Hm = "_active_7t0e2_33", Wm = "_arrow_7t0e2_37", Um = "_prev_7t0e2_71", Vm = "_next_7t0e2_75", Xm = "_pauseBtn_7t0e2_79", Gm = "_indicators_7t0e2_110", Ym = "_indicator_7t0e2_110", Zm = "_indicatorActive_7t0e2_145", wt = {
  root: qm,
  viewport: Fm,
  slide: Km,
  active: Hm,
  arrow: Wm,
  prev: Um,
  next: Vm,
  pauseBtn: Xm,
  indicators: Gm,
  indicator: Ym,
  indicatorActive: Zm
};
function Gb({
  items: e,
  selectedIndex: n,
  SelectedIndex: r,
  defaultIndex: o = 0,
  auto: s,
  Auto: c,
  interval: u,
  Interval: a,
  pauseOnHover: i,
  PauseOnHover: h,
  showArrows: x,
  ShowArrows: f,
  showIndicators: D,
  ShowIndicators: $,
  onChange: M,
  Change: C,
  ariaLabel: b = "Carousel",
  className: _
}) {
  const g = n ?? r, m = g !== void 0, [N, p] = V(() => Math.min(Math.max(0, g ?? o), Math.max(0, e.length - 1))), v = m ? g : N, l = e.length === 0 ? 0 : Math.min(Math.max(0, v), e.length - 1), y = s ?? c ?? !1, z = u ?? a ?? 3e3, K = i ?? h ?? !0, A = x ?? f ?? !0, O = D ?? $ ?? !0, [d, S] = V(!1), [I, E] = V(!1), j = d || I, X = le(null), ne = Ue(), ie = q(
    (J) => {
      const me = e.length === 0 ? 0 : (J % e.length + e.length) % e.length;
      m || p(me), (M ?? C)?.(me);
    },
    [m, M, C, e.length]
  ), ee = q(() => {
    ie(l - 1);
  }, [ie, l]), ae = q(() => {
    ie(l + 1);
  }, [ie, l]), se = q(
    (J) => {
      ie(J);
    },
    [ie]
  );
  Ne(() => {
    if (!y || j || e.length <= 1) return;
    const J = setInterval(() => {
      ie(l + 1);
    }, z);
    return () => clearInterval(J);
  }, [y, j, z, l, ie, e.length]);
  const G = (J) => {
    e.length !== 0 && (J.key === "ArrowLeft" ? (J.preventDefault(), ee()) : J.key === "ArrowRight" ? (J.preventDefault(), ae()) : J.key === "Home" ? (J.preventDefault(), se(0)) : J.key === "End" && (J.preventDefault(), se(e.length - 1)));
  }, U = () => {
    K && y && E(!0);
  }, B = () => {
    K && y && E(!1);
  }, re = () => {
    K && y && E(!0);
  }, he = () => {
    K && y && E(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ w(
    "div",
    {
      ref: X,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": b,
      tabIndex: 0,
      className: [wt.root, _].filter(Boolean).join(" "),
      onKeyDown: G,
      onMouseEnter: U,
      onMouseLeave: B,
      onFocusCapture: re,
      onBlurCapture: he,
      children: [
        /* @__PURE__ */ t("div", { id: ne, className: wt.viewport, children: e.map((J, me) => {
          const ye = me === l;
          return /* @__PURE__ */ t(
            "div",
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `Slide ${me + 1} of ${e.length}`,
              "aria-hidden": ye ? void 0 : !0,
              hidden: !ye,
              className: [wt.slide, ye ? wt.active : null].filter(Boolean).join(" "),
              children: J
            },
            me
          );
        }) }),
        A && e.length > 1 ? /* @__PURE__ */ w(Me, { children: [
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: [wt.arrow, wt.prev].filter(Boolean).join(" "),
              "aria-label": "Previous slide",
              "aria-controls": ne,
              onClick: ee,
              children: "‹"
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: [wt.arrow, wt.next].filter(Boolean).join(" "),
              "aria-label": "Next slide",
              "aria-controls": ne,
              onClick: ae,
              children: "›"
            }
          )
        ] }) : null,
        y ? /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: wt.pauseBtn,
            "aria-label": d ? "Resume" : "Pause",
            "aria-pressed": d,
            onClick: () => S((J) => !J),
            children: d ? "▶" : "⏸"
          }
        ) : null,
        O && e.length > 1 ? /* @__PURE__ */ t("div", { className: wt.indicators, role: "group", "aria-label": "Slide indicators", children: e.map((J, me) => {
          const ye = me === l;
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: [wt.indicator, ye ? wt.indicatorActive : null].filter(Boolean).join(" "),
              "aria-label": `Go to slide ${me + 1}`,
              "aria-current": ye ? "true" : void 0,
              "aria-controls": ne,
              onClick: () => se(me)
            },
            me
          );
        }) }) : null
      ]
    }
  );
}
const Jm = "_root_9vei2_1", Qm = "_group_9vei2_20", eg = "_itemWrapper_9vei2_30", tg = "_treeitem_9vei2_34", ng = "_disabled_9vei2_50", rg = "_selected_9vei2_60", og = "_caret_9vei2_66", sg = "_caretIcon_9vei2_113", ag = "_caretOpen_9vei2_120", lg = "_caretPlaceholder_9vei2_124", cg = "_label_9vei2_130", ig = "_loading_9vei2_137", dg = "_loadingRow_9vei2_143", ug = "_empty_9vei2_149", lt = {
  root: Jm,
  group: Qm,
  itemWrapper: eg,
  treeitem: tg,
  disabled: ng,
  selected: rg,
  caret: og,
  caretIcon: sg,
  caretOpen: ag,
  caretPlaceholder: lg,
  label: cg,
  loading: ig,
  loadingRow: dg,
  empty: ug
};
function Yb({
  data: e,
  Data: n,
  children: r,
  Children: o,
  textProperty: s,
  TextProperty: c,
  keyProperty: u,
  KeyProperty: a,
  selectionMode: i,
  SelectionMode: h,
  selectedItem: x,
  SelectedItem: f,
  selectedItems: D,
  SelectedItems: $,
  defaultSelectedItem: M,
  defaultSelectedItems: C,
  onChange: b,
  Change: _,
  onExpand: g,
  Expand: m,
  onCollapse: N,
  Collapse: p,
  loadChildData: v,
  LoadChildData: l,
  template: y,
  Template: z,
  itemTemplate: K,
  ItemTemplate: A,
  ariaLabel: O,
  AriaLabel: d,
  className: S
}) {
  const I = e ?? n ?? [], E = r ?? o, j = s ?? c ?? "text", X = u ?? a ?? "id", ne = i ?? h ?? "single", ie = O ?? d ?? "Tree", ee = v ?? l, ae = y ?? z ?? K ?? A, se = q(
    (F) => {
      const te = F[X];
      return te != null ? String(te) : String(F.id ?? "");
    },
    [X]
  ), G = q(
    (F) => {
      const te = F[j];
      if (te != null) return String(te);
      const de = F.text;
      return de != null ? String(de) : "";
    },
    [j]
  ), U = q(
    (F) => {
      if (E) {
        const de = E(F);
        if (de !== void 0) return de;
      }
      const te = F.children;
      if (Array.isArray(te)) return te;
    },
    [E]
  ), B = q(
    (F) => {
      const te = /* @__PURE__ */ new Set(), de = (_e) => {
        for (const ce of _e) {
          const ge = se(ce);
          ce.expanded && te.add(ge);
          const Ae = U(ce);
          Ae && Ae.length > 0 && de(Ae);
        }
      };
      return de(F), te;
    },
    [se, U]
  ), [re, he] = V(() => B(I)), [J, me] = V(() => /* @__PURE__ */ new Map()), [ye, Ce] = V(() => /* @__PURE__ */ new Set()), He = x ?? f, Ie = D ?? $, Ge = ne === "multiple" ? Ie !== void 0 : He !== void 0, tt = q(() => {
    if (ne === "multiple") {
      if (C && C.length > 0)
        return new Set(C.map((de) => se(de)));
      const F = /* @__PURE__ */ new Set(), te = (de) => {
        for (const _e of de) {
          _e.selected && F.add(se(_e));
          const ce = U(_e);
          ce && te(ce);
        }
      };
      return te(I), F;
    } else {
      if (M) return /* @__PURE__ */ new Set([se(M)]);
      let F = null;
      const te = (de) => {
        for (const _e of de) {
          if (_e.selected)
            return F = se(_e), !0;
          const ce = U(_e);
          if (ce && te(ce)) return !0;
        }
        return !1;
      };
      return te(I), F ? /* @__PURE__ */ new Set([F]) : /* @__PURE__ */ new Set();
    }
  }, [ne, M, C, se, U, I]), [We, Je] = V(() => tt()), Fe = we(() => {
    if (ne === "multiple") {
      if (Ie !== void 0) {
        const F = Ie;
        return F ? new Set(F.map((te) => se(te))) : /* @__PURE__ */ new Set();
      }
      return We;
    } else {
      if (He !== void 0) {
        const F = He;
        return F ? /* @__PURE__ */ new Set([se(F)]) : /* @__PURE__ */ new Set();
      }
      return We;
    }
  }, [ne, Ie, He, We, se]), Ye = q(
    (F) => {
      let te;
      const de = (_e) => {
        for (const ce of _e) {
          if (se(ce) === F)
            return te = ce, !0;
          const Ae = J.get(se(ce)) ?? U(ce);
          if (Ae && de(Ae)) return !0;
        }
        return !1;
      };
      if (de(I), !te) {
        for (const _e of J.values())
          if (de(_e)) break;
      }
      return te;
    },
    [I, J, se, U]
  ), W = q(() => {
    const F = /* @__PURE__ */ new Map(), te = (de) => {
      for (const _e of de) {
        const ce = se(_e);
        F.set(ce, _e);
        const Ae = J.get(ce) ?? U(_e);
        Ae && te(Ae);
      }
    };
    return te(I), F;
  }, [I, J, se, U]), k = q(
    (F) => {
      const te = se(F);
      if (!F.disabled)
        if (ne === "multiple") {
          const _e = new Set(Fe);
          _e.has(te) ? _e.delete(te) : _e.add(te), Ge || Je(_e);
          const ce = b ?? _;
          if (ce) {
            const ge = W(), Ae = [];
            for (const Be of _e) {
              const T = ge.get(Be) ?? Ye(Be);
              T && Ae.push(T);
            }
            ce({ item: F, selectedItems: Ae });
          }
        } else if (!Fe.has(te) || Fe.size !== 1 || !Fe.has(te)) {
          Ge || Je(/* @__PURE__ */ new Set([te]));
          const ce = b ?? _;
          ce && ce({ item: F, selectedItem: F });
        } else {
          const ce = b ?? _;
          ce && ce({ item: F, selectedItem: F });
        }
    },
    [se, ne, Fe, Ge, b, _, W, Ye]
  ), L = q(
    async (F) => {
      const te = se(F);
      if (!!F.disabled) return;
      const _e = re.has(te), ce = g ?? m, ge = N ?? p, Ae = U(F), T = J.get(te) ?? Ae, ze = !(T !== void 0 && T.length > 0) && ee != null;
      if (_e) {
        he(($e) => {
          const Te = new Set($e);
          return Te.delete(te), Te;
        }), ge?.({ item: F });
        return;
      }
      if (ze) {
        if (ye.has(te)) return;
        Ce(($e) => {
          const Te = new Set($e);
          return Te.add(te), Te;
        });
        try {
          const Te = await ee(F);
          me((Qe) => {
            const it = new Map(Qe);
            return it.set(te, Te), it;
          }), he((Qe) => {
            const it = new Set(Qe);
            return it.add(te), it;
          }), ce?.({ item: F });
        } catch {
        } finally {
          Ce(($e) => {
            const Te = new Set($e);
            return Te.delete(te), Te;
          });
        }
        return;
      }
      he(($e) => {
        const Te = new Set($e);
        return Te.add(te), Te;
      }), ce?.({ item: F });
    },
    [se, re, U, J, ee, ye, g, m, N, p]
  ), H = we(() => {
    const F = [], te = (de, _e, ce) => {
      de.forEach((ge, Ae) => {
        const Be = se(ge), T = G(ge), oe = J.get(Be) ?? U(ge);
        let ze;
        J.has(Be) ? ze = J.get(Be).length > 0 : oe !== void 0 ? ze = oe.length > 0 : ee ? ze = !0 : ze = !1;
        const $e = re.has(Be), Te = !!ge.disabled, Qe = de.length, it = Ae + 1;
        if (F.push({
          item: ge,
          key: Be,
          text: T,
          level: _e,
          posInSet: it,
          setSize: Qe,
          hasChildren: ze,
          expanded: $e,
          parentKey: ce,
          disabled: Te
        }), ze && $e) {
          const Mt = J.get(Be) ?? oe;
          Mt && Mt.length > 0 && te(Mt, _e + 1, Be);
        }
      });
    };
    return te(I, 1, null), F;
  }, [I, se, G, U, J, re, ee, ye]), [Q, Y] = V(() => H[0]?.key ?? null), fe = le(""), ke = le(null), Re = le(null);
  Ne(() => {
    if (!Q && H.length > 0) {
      const F = H[0];
      F && Y(F.key);
    } else if (Q && !H.some((F) => F.key === Q)) {
      const F = H[0];
      Y(F ? F.key : null);
    }
  }, [H, Q]), Ne(() => {
    if (Q) {
      const F = Re.current?.querySelector(`[data-key="${CSS.escape(Q)}"]`);
      let te = null;
      F || (te = Re.current?.querySelector(`[data-key="${Q}"]`) ?? null);
      const de = F ?? te;
      de && document.activeElement !== de && Re.current?.contains(document.activeElement) && de.focus();
    }
  }, [Q]);
  const je = q(
    (F) => {
      Y(F), requestAnimationFrame(() => {
        const te = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(F) : F;
        let de = Re.current?.querySelector(`[data-key="${te}"]`);
        de || (de = Re.current?.querySelector(`[data-key="${F}"]`) ?? null), de?.focus();
      });
    },
    []
  ), nt = q(
    (F) => H.find((de) => de.key === F)?.parentKey ?? null,
    [H]
  ), vt = q(
    (F) => {
      if (H.length === 0) return;
      const te = Q ? H.findIndex((ce) => ce.key === Q) : -1, de = te >= 0 ? H[te] : void 0;
      let _e = null;
      if (F.key === "ArrowDown") {
        if (F.preventDefault(), te === -1)
          _e = H[0]?.key ?? null;
        else {
          const ce = (te + 1) % H.length, ge = H[ce];
          ge && (_e = ge.key);
        }
        _e && je(_e);
        return;
      }
      if (F.key === "ArrowUp") {
        if (F.preventDefault(), te === -1) {
          const ce = H[H.length - 1];
          ce && (_e = ce.key);
        } else {
          const ce = (te - 1 + H.length) % H.length, ge = H[ce];
          ge && (_e = ge.key);
        }
        _e && je(_e);
        return;
      }
      if (F.key === "ArrowRight") {
        if (F.preventDefault(), !de) return;
        if (de.hasChildren && !de.expanded)
          L(de.item);
        else if (de.hasChildren && de.expanded) {
          const ce = te + 1, ge = H[ce];
          ge && ge.parentKey === de.key && je(ge.key);
        }
        return;
      }
      if (F.key === "ArrowLeft") {
        if (F.preventDefault(), !de) return;
        if (de.hasChildren && de.expanded)
          L(de.item);
        else {
          const ce = nt(de.key);
          ce && je(ce);
        }
        return;
      }
      if (F.key === "Home") {
        F.preventDefault();
        const ce = H[0];
        ce && je(ce.key);
        return;
      }
      if (F.key === "End") {
        F.preventDefault();
        const ce = H[H.length - 1];
        ce && je(ce.key);
        return;
      }
      if (F.key === "Enter" || F.key === " ") {
        F.preventDefault(), de && k(de.item);
        return;
      }
      if (F.key.length === 1 && /^[a-zA-Z0-9]$/.test(F.key)) {
        F.preventDefault();
        const ce = (fe.current + F.key).toLowerCase();
        fe.current = ce, ke.current && clearTimeout(ke.current), ke.current = setTimeout(() => {
          fe.current = "";
        }, 500);
        const ge = te >= 0 ? te + 1 : 0, T = [...H, ...H].slice(ge, ge + H.length).find((oe) => oe.text.toLowerCase().startsWith(ce));
        T && je(T.key);
        return;
      }
    },
    [H, Q, je, L, k, nt]
  ), Z = q(() => {
    if (!Q && H.length > 0) {
      const F = H[0];
      F && Y(F.key);
    }
  }, [Q, H]), Se = (F, te, de) => /* @__PURE__ */ t("ul", { role: "group", className: lt.group, children: F.map((_e, ce) => {
    const ge = se(_e), Ae = G(_e), Be = J.get(ge) ?? U(_e);
    let T;
    J.has(ge) ? T = J.get(ge).length > 0 : Be !== void 0 ? T = Be.length > 0 : ee ? T = !0 : T = !1;
    const oe = re.has(ge), ze = Fe.has(ge), $e = !!_e.disabled, Te = ye.has(ge), Qe = Q === ge, it = F.length, Mt = ce + 1, Dn = ae ? ae(_e) : Ae;
    return /* @__PURE__ */ w("li", { role: "none", className: lt.itemWrapper, children: [
      /* @__PURE__ */ w(
        "div",
        {
          role: "treeitem",
          "data-key": ge,
          tabIndex: Qe ? 0 : -1,
          "aria-expanded": T ? oe : void 0,
          "aria-selected": ze,
          "aria-level": te,
          "aria-setsize": it,
          "aria-posinset": Mt,
          "aria-disabled": $e || void 0,
          "aria-busy": Te || void 0,
          className: [
            lt.treeitem,
            ze ? lt.selected : null,
            $e ? lt.disabled : null,
            Qe ? lt.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            je(ge), $e || k(_e);
          },
          onFocus: () => Y(ge),
          children: [
            T ? /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                className: lt.caret,
                "aria-label": `${oe ? "Collapse" : "Expand"} ${Ae}`,
                "aria-expanded": oe,
                tabIndex: -1,
                disabled: $e,
                onClick: (an) => {
                  an.stopPropagation(), je(ge), L(_e);
                },
                children: /* @__PURE__ */ t("span", { "aria-hidden": "true", className: [lt.caretIcon, oe ? lt.caretOpen : null].filter(Boolean).join(" "), children: "▸" })
              }
            ) : /* @__PURE__ */ t("span", { className: lt.caretPlaceholder, "aria-hidden": "true" }),
            /* @__PURE__ */ t("span", { className: lt.label, children: Dn }),
            Te ? /* @__PURE__ */ t("span", { className: lt.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      T && oe ? Te ? /* @__PURE__ */ t("div", { className: lt.loadingRow, "aria-busy": "true", children: "Loading…" }) : Be && Be.length > 0 ? Se(Be, te + 1) : J.has(ge) && J.get(ge).length > 0 ? Se(J.get(ge), te + 1) : (Be && Be.length === 0, null) : null
    ] }, ge);
  }) });
  return /* @__PURE__ */ t(
    "div",
    {
      ref: Re,
      role: "tree",
      "aria-label": ie,
      "aria-multiselectable": ne === "multiple" || void 0,
      tabIndex: 0,
      className: [lt.root, S].filter(Boolean).join(" "),
      onKeyDown: vt,
      onFocus: Z,
      children: I.length === 0 ? /* @__PURE__ */ t("div", { className: lt.empty, children: "No items" }) : Se(I, 1)
    }
  );
}
const fg = "_root_1nxec_1", _g = "_panel_1nxec_8", pg = "_header_1nxec_19", hg = "_listbox_1nxec_28", mg = "_option_1nxec_42", gg = "_disabled_1nxec_57", bg = "_active_1nxec_66", yg = "_selected_1nxec_70", vg = "_empty_1nxec_86", xg = "_controls_1nxec_93", wg = "_reorder_1nxec_102", kg = "_btn_1nxec_110", Le = {
  root: fg,
  panel: _g,
  header: pg,
  listbox: hg,
  option: mg,
  disabled: gg,
  active: bg,
  selected: yg,
  empty: vg,
  controls: xg,
  reorder: wg,
  btn: kg
};
function et(e, n) {
  const r = e[n];
  return r != null ? String(r) : String(e.id ?? "");
}
function Ln(e) {
  const n = e.text;
  return n != null ? String(n) : String(e.id ?? "");
}
function Zb({
  source: e,
  Source: n,
  target: r,
  Target: o,
  value: s,
  Value: c,
  targetValue: u,
  TargetValue: a,
  data: i,
  Data: h,
  onSourceChange: x,
  SourceChange: f,
  onTargetChange: D,
  TargetChange: $,
  keyProperty: M,
  KeyProperty: C,
  onMove: b,
  Move: _,
  ariaLabel: g,
  AriaLabel: m,
  className: N
}) {
  const p = M ?? C ?? "id", v = g ?? m ?? "PickList", l = e ?? n ?? s ?? c ?? i ?? h ?? [], y = r ?? o ?? u ?? a ?? [], [z, K] = V(() => [...l]), [A, O] = V(() => [...y]);
  Ne(() => {
    const k = e ?? n ?? s ?? c ?? i ?? h;
    k !== void 0 && K([...k]);
  }, [e, n, s, c, i, h]), Ne(() => {
    const k = r ?? o ?? u ?? a;
    k !== void 0 && O([...k]);
  }, [r, o, u, a]);
  const [d, S] = V(() => /* @__PURE__ */ new Set()), [I, E] = V(() => /* @__PURE__ */ new Set()), [j, X] = V(() => {
    const k = l.findIndex((L) => !L.disabled);
    return k >= 0 ? k : 0;
  }), [ne, ie] = V(() => {
    const k = y.findIndex((L) => !L.disabled);
    return k >= 0 ? k : 0;
  }), ee = we(() => z.map((k, L) => k.disabled ? -1 : L).filter((k) => k >= 0), [z]), ae = we(() => A.map((k, L) => k.disabled ? -1 : L).filter((k) => k >= 0), [A]);
  Ne(() => {
    if (j >= z.length) {
      const k = ee[ee.length - 1];
      X(k ?? 0);
    } else if (z.length > 0 && ee.length > 0 && !ee.includes(j)) {
      const k = ee[0];
      k !== void 0 && X(k);
    }
  }, [j, z.length, ee]), Ne(() => {
    if (ne >= A.length) {
      const k = ae[ae.length - 1];
      ie(k ?? 0);
    } else if (A.length > 0 && ae.length > 0 && !ae.includes(ne)) {
      const k = ae[0];
      k !== void 0 && ie(k);
    }
  }, [ne, A.length, ae]), Ne(() => {
    S((k) => {
      const L = /* @__PURE__ */ new Set();
      for (const H of k)
        z.some((Y) => et(Y, p) === H && !Y.disabled) && L.add(H);
      return L;
    });
  }, [z, p]), Ne(() => {
    E((k) => {
      const L = /* @__PURE__ */ new Set();
      for (const H of k)
        A.some((Y) => et(Y, p) === H && !Y.disabled) && L.add(H);
      return L;
    });
  }, [A, p]);
  const se = q(
    (k) => {
      (x ?? f)?.(k);
    },
    [x, f]
  ), G = q(
    (k) => {
      (D ?? $)?.(k);
    },
    [D, $]
  ), U = q(
    (k) => {
      (b ?? _)?.(k);
    },
    [b, _]
  ), B = q(
    (k) => {
      const L = z[k];
      if (!L || L.disabled) return;
      const H = et(L, p);
      S((Q) => {
        const Y = new Set(Q);
        return Y.has(H) ? Y.delete(H) : Y.add(H), Y;
      }), X(k);
    },
    [z, p]
  ), re = q(
    (k) => {
      const L = A[k];
      if (!L || L.disabled) return;
      const H = et(L, p);
      E((Q) => {
        const Y = new Set(Q);
        return Y.has(H) ? Y.delete(H) : Y.add(H), Y;
      }), ie(k);
    },
    [A, p]
  ), he = q(() => {
    const k = [], L = [];
    for (const fe of z) {
      const ke = et(fe, p);
      d.has(ke) && !fe.disabled ? k.push(fe) : L.push(fe);
    }
    if (k.length === 0) return;
    const H = L, Q = [...A, ...k];
    K(H), O(Q), S(/* @__PURE__ */ new Set());
    const Y = new Set(k.map((fe) => et(fe, p)));
    E(Y), se(H), G(Q), U({ source: H, target: Q, moved: k, direction: "toTarget" });
  }, [z, A, d, p, se, G, U]), J = q(() => {
    const k = [], L = [];
    for (const fe of A) {
      const ke = et(fe, p);
      I.has(ke) && !fe.disabled ? k.push(fe) : L.push(fe);
    }
    if (k.length === 0) return;
    const H = L, Q = [...z, ...k];
    O(H), K(Q), E(/* @__PURE__ */ new Set());
    const Y = new Set(k.map((fe) => et(fe, p)));
    S(Y), se(Q), G(H), U({ source: Q, target: H, moved: k, direction: "toSource" });
  }, [z, A, I, p, se, G, U]), me = q(() => {
    const k = z.filter((Q) => !Q.disabled);
    if (k.length === 0) return;
    const L = z.filter((Q) => !!Q.disabled), H = [...A, ...k];
    K(L), O(H), S(/* @__PURE__ */ new Set()), se(L), G(H), U({ source: L, target: H, moved: k, direction: "allToTarget" });
  }, [z, A, p, se, G, U]), ye = q(() => {
    const k = A.filter((Q) => !Q.disabled);
    if (k.length === 0) return;
    const L = A.filter((Q) => !!Q.disabled), H = [...z, ...k];
    O(L), K(H), E(/* @__PURE__ */ new Set()), se(H), G(L), U({ source: H, target: L, moved: k, direction: "allToSource" });
  }, [z, A, se, G, U]), Ce = q(() => {
    if (I.size === 0) return;
    const k = [...A], L = I, H = [];
    for (let Y = 1; Y < k.length; Y++) {
      const fe = k[Y], ke = k[Y - 1];
      if (!fe || !ke) continue;
      const Re = et(fe, p), je = et(ke, p);
      L.has(Re) && !L.has(je) && !fe.disabled && !ke.disabled && (k[Y - 1] = fe, k[Y] = ke, H.push(fe));
    }
    if (H.length === 0) return;
    O(k), G(k), U({ source: z, target: k, moved: H, direction: "up" });
    const Q = Array.from(L)[0];
    if (Q) {
      const Y = k.findIndex((fe) => et(fe, p) === Q);
      Y >= 0 && ie(Y);
    }
  }, [A, I, p, z, G, U]), He = q(() => {
    if (I.size === 0) return;
    const k = [...A], L = I, H = [];
    for (let Y = k.length - 2; Y >= 0; Y--) {
      const fe = k[Y], ke = k[Y + 1];
      if (!fe || !ke) continue;
      const Re = et(fe, p), je = et(ke, p);
      L.has(Re) && !L.has(je) && !fe.disabled && !ke.disabled && (k[Y] = ke, k[Y + 1] = fe, H.push(fe));
    }
    if (H.length === 0) return;
    O(k), G(k), U({ source: z, target: k, moved: H, direction: "down" });
    const Q = Array.from(L)[0];
    if (Q) {
      const Y = k.findIndex((fe) => et(fe, p) === Q);
      Y >= 0 && ie(Y);
    }
  }, [A, I, p, z, G, U]), Ie = d.size > 0, Xe = I.size > 0, be = le(""), Ge = le(null), tt = le(""), We = le(null), Je = q(
    (k) => {
      if (z.length === 0) return;
      const L = ee;
      if (L.length === 0) return;
      const H = L.includes(j) ? j : L[0] ?? 0;
      let Q = -1;
      if (k.key === "ArrowDown") {
        k.preventDefault();
        const Y = L.indexOf(H);
        Q = L[(Y + 1) % L.length] ?? L[0] ?? 0;
      } else if (k.key === "ArrowUp") {
        k.preventDefault();
        const Y = L.indexOf(H);
        Q = L[(Y - 1 + L.length) % L.length] ?? L[0] ?? 0;
      } else if (k.key === "Home")
        k.preventDefault(), Q = L[0] ?? 0;
      else if (k.key === "End")
        k.preventDefault(), Q = L[L.length - 1] ?? 0;
      else if (k.key === "Enter" || k.key === " ") {
        k.preventDefault(), B(H);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(k.key)) {
        k.preventDefault();
        const Y = (be.current + k.key).toLowerCase();
        be.current = Y, Ge.current && clearTimeout(Ge.current), Ge.current = setTimeout(() => {
          be.current = "";
        }, 500);
        const fe = [...L, ...L], ke = L.indexOf(H) + 1, Re = fe.slice(ke).find((je) => Ln(z[je]).toLowerCase().startsWith(Y));
        Re != null && X(Re);
        return;
      }
      Q >= 0 && X(Q);
    },
    [z, ee, j, B]
  ), Fe = q(
    (k) => {
      if (A.length === 0) return;
      const L = ae;
      if (L.length === 0) return;
      const H = L.includes(ne) ? ne : L[0] ?? 0;
      let Q = -1;
      if (k.key === "ArrowDown") {
        k.preventDefault();
        const Y = L.indexOf(H);
        Q = L[(Y + 1) % L.length] ?? L[0] ?? 0;
      } else if (k.key === "ArrowUp") {
        k.preventDefault();
        const Y = L.indexOf(H);
        Q = L[(Y - 1 + L.length) % L.length] ?? L[0] ?? 0;
      } else if (k.key === "Home")
        k.preventDefault(), Q = L[0] ?? 0;
      else if (k.key === "End")
        k.preventDefault(), Q = L[L.length - 1] ?? 0;
      else if (k.key === "Enter" || k.key === " ") {
        k.preventDefault(), re(H);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(k.key)) {
        k.preventDefault();
        const Y = (tt.current + k.key).toLowerCase();
        tt.current = Y, We.current && clearTimeout(We.current), We.current = setTimeout(() => {
          tt.current = "";
        }, 500);
        const fe = [...L, ...L], ke = L.indexOf(H) + 1, Re = fe.slice(ke).find((je) => Ln(A[je]).toLowerCase().startsWith(Y));
        Re != null && ie(Re);
        return;
      }
      Q >= 0 && ie(Q);
    },
    [A, ae, ne, re]
  ), Ye = le(null), W = le(null);
  return /* @__PURE__ */ w("div", { className: [Le.root, N].filter(Boolean).join(" "), "aria-label": v, children: [
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
          onKeyDown: Je,
          children: z.length === 0 ? /* @__PURE__ */ t("div", { className: Le.empty, children: "No items" }) : z.map((k, L) => {
            const H = et(k, p), Q = d.has(H), Y = L === j, fe = !!k.disabled;
            return /* @__PURE__ */ t(
              "div",
              {
                role: "option",
                "aria-selected": Q,
                "aria-disabled": fe || void 0,
                tabIndex: -1,
                "data-active": Y || void 0,
                className: [
                  Le.option,
                  Q ? Le.selected : null,
                  Y ? Le.active : null,
                  fe ? Le.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => B(L),
                children: Ln(k)
              },
              H
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
          "aria-disabled": !Ie || void 0,
          disabled: !Ie,
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
          "aria-disabled": z.filter((k) => !k.disabled).length === 0 || void 0,
          disabled: z.filter((k) => !k.disabled).length === 0,
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
          "aria-disabled": z.filter((k) => !k.disabled).length === 0 || void 0,
          disabled: z.filter((k) => !k.disabled).length === 0,
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
          onClick: J,
          children: "‹"
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: Le.btn,
          "aria-label": "Move all to source",
          "aria-disabled": A.filter((k) => !k.disabled).length === 0 || void 0,
          disabled: A.filter((k) => !k.disabled).length === 0,
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
          ref: W,
          role: "listbox",
          "aria-label": "Target",
          "aria-multiselectable": "true",
          tabIndex: 0,
          className: Le.listbox,
          onKeyDown: Fe,
          children: A.length === 0 ? /* @__PURE__ */ t("div", { className: Le.empty, children: "No items" }) : A.map((k, L) => {
            const H = et(k, p), Q = I.has(H), Y = L === ne, fe = !!k.disabled;
            return /* @__PURE__ */ t(
              "div",
              {
                role: "option",
                "aria-selected": Q,
                "aria-disabled": fe || void 0,
                tabIndex: -1,
                "data-active": Y || void 0,
                className: [
                  Le.option,
                  Q ? Le.selected : null,
                  Y ? Le.active : null,
                  fe ? Le.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => re(L),
                children: Ln(k)
              },
              H
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
            onClick: Ce,
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
const $g = "_root_1qckr_1", Ng = "_header_1qckr_8", Sg = "_title_1qckr_15", Dg = "_navBtn_1qckr_20", Cg = "_resources_1qckr_39", zg = "_resource_1qckr_39", Mg = "_grid_1qckr_50", Og = "_timeCol_1qckr_55", Ig = "_timeCell_1qckr_61", jg = "_dayCol_1qckr_66", Tg = "_dayHeader_1qckr_73", Eg = "_slot_1qckr_81", Ag = "_event_1qckr_91", ft = {
  root: $g,
  header: Ng,
  title: Sg,
  navBtn: Dg,
  resources: Cg,
  resource: zg,
  grid: Mg,
  timeCol: Og,
  timeCell: Ig,
  dayCol: jg,
  dayHeader: Tg,
  slot: Eg,
  event: Ag
};
function kr(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function Jb({
  data: e,
  view: n = "week",
  date: r,
  onDateChange: o,
  resources: s,
  onEventClick: c,
  onSlotClick: u,
  ariaLabel: a = "Scheduler",
  className: i
}) {
  const [h, x] = V(r ?? /* @__PURE__ */ new Date()), f = r ?? h, D = (C) => {
    r || x(C), o?.(C);
  }, $ = n === "day" ? [f] : n === "week" ? Array.from({ length: 7 }, (C, b) => {
    const _ = new Date(f);
    return _.setDate(f.getDate() - f.getDay() + b), _;
  }) : Array.from({ length: 30 }, (C, b) => {
    const _ = new Date(f);
    return _.setDate(1 + b), _;
  }), M = Array.from({ length: 12 }, (C, b) => 8 + b);
  return /* @__PURE__ */ w("div", { className: [ft.root, i].filter(Boolean).join(" "), role: "group", "aria-label": a, children: [
    /* @__PURE__ */ w("div", { className: ft.header, children: [
      /* @__PURE__ */ t("button", { type: "button", className: ft.navBtn, "aria-label": "Previous", onClick: () => {
        const C = new Date(f);
        C.setDate(C.getDate() - 7), D(C);
      }, children: "‹" }),
      /* @__PURE__ */ t("span", { className: ft.title, children: f.toLocaleDateString() }),
      /* @__PURE__ */ t("button", { type: "button", className: ft.navBtn, "aria-label": "Next", onClick: () => {
        const C = new Date(f);
        C.setDate(C.getDate() + 7), D(C);
      }, children: "›" })
    ] }),
    s && /* @__PURE__ */ t("div", { className: ft.resources, children: s.map((C) => /* @__PURE__ */ t("div", { className: ft.resource, role: "presentation", "aria-label": C.name, children: C.name }, C.id)) }),
    /* @__PURE__ */ w("div", { className: ft.grid, role: "presentation", children: [
      /* @__PURE__ */ t("div", { className: ft.timeCol, role: "presentation", children: M.map((C) => /* @__PURE__ */ w("div", { className: ft.timeCell, children: [
        C,
        ":00"
      ] }, C)) }),
      $.map((C) => /* @__PURE__ */ w("div", { className: ft.dayCol, role: "presentation", title: C.toLocaleDateString(), onClick: () => u?.({ date: C }), tabIndex: 0, "aria-label": C.toLocaleDateString(), children: [
        /* @__PURE__ */ t("div", { className: ft.dayHeader, children: C.toLocaleDateString(void 0, { weekday: "short", month: "short", day: "numeric" }) }),
        M.map((b) => /* @__PURE__ */ t("div", { className: ft.slot, tabIndex: -1, onClick: () => {
          const _ = new Date(C);
          _.setHours(b), u?.({ date: _ });
        } }, b)),
        e.filter((b) => b.start.toDateString() === C.toDateString()).map((b) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: ft.event,
            "aria-label": `${b.title} ${kr(b.start)} - ${kr(b.end)}`,
            "aria-pressed": !1,
            onClick: () => c?.({ event: b }),
            children: b.title
          },
          b.id
        ))
      ] }, C.toISOString()))
    ] })
  ] });
}
const Lg = "_root_59ocn_1", Rg = "_header_59ocn_8", Bg = "_headerCell_59ocn_15", Pg = "_timeline_59ocn_21", qg = "_row_59ocn_26", Fg = "_taskName_59ocn_32", Kg = "_timelineCell_59ocn_37", Hg = "_bar_59ocn_43", Wg = "_progress_59ocn_56", Ug = "_dep_59ocn_61", zt = {
  root: Lg,
  header: Rg,
  headerCell: Bg,
  timeline: Pg,
  row: qg,
  taskName: Fg,
  timelineCell: Kg,
  bar: Hg,
  progress: Wg,
  dep: Ug
};
function Qb({ tasks: e, view: n = "week", onTaskClick: r, ariaLabel: o = "Gantt", className: s }) {
  const [c, u] = V(null);
  return /* @__PURE__ */ w("div", { className: [zt.root, s].filter(Boolean).join(" "), role: "grid", "aria-label": o, "aria-rowcount": e.length, children: [
    /* @__PURE__ */ w("div", { className: zt.header, role: "row", children: [
      /* @__PURE__ */ t("div", { className: zt.headerCell, role: "columnheader", children: "Task" }),
      /* @__PURE__ */ w("div", { className: zt.timeline, role: "columnheader", children: [
        "Timeline (",
        n,
        ")"
      ] })
    ] }),
    e.map((a) => /* @__PURE__ */ w("div", { className: zt.row, role: "row", "aria-selected": c === a.id, children: [
      /* @__PURE__ */ t("div", { className: zt.taskName, role: "gridcell", children: a.name }),
      /* @__PURE__ */ w("div", { className: zt.timelineCell, role: "gridcell", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: zt.bar,
            role: "button",
            "aria-label": `${a.name} ${a.start.toLocaleDateString()} - ${a.end.toLocaleDateString()}${a.progress !== void 0 ? `, ${a.progress}% complete` : ""}`,
            "aria-pressed": c === a.id,
            tabIndex: 0,
            onClick: () => {
              u(a.id), r?.({ task: a });
            },
            onKeyDown: (i) => {
              (i.key === "Enter" || i.key === " ") && (i.preventDefault(), u(a.id), r?.({ task: a }));
            },
            children: /* @__PURE__ */ t("div", { className: zt.progress, style: { width: `${a.progress ?? 0}%` } })
          }
        ),
        a.dependencies?.map((i) => /* @__PURE__ */ t("svg", { className: zt.dep, "aria-hidden": "true", children: /* @__PURE__ */ t("line", { x1: "0", y1: "10", x2: "20", y2: "10", stroke: "var(--dt-color-border)" }) }, i))
      ] })
    ] }, a.id))
  ] });
}
const Vg = "_root_dai4q_1", Xg = "_fields_dai4q_6", Gg = "_chip_dai4q_13", Yg = "_table_dai4q_35", Zg = "_totalRow_dai4q_55", Jg = "_total_dai4q_55", on = {
  root: Vg,
  fields: Xg,
  chip: Gg,
  table: Yg,
  totalRow: Zg,
  total: Jg
}, Rn = {
  Sum: (e) => e.reduce((n, r) => n + r, 0),
  Average: (e) => e.length ? e.reduce((n, r) => n + r, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function kn(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function ey({ data: e, rowFields: n = [], columnFields: r = [], aggregateFields: o = [], onFieldsChange: s, ariaLabel: c = "Pivot table", className: u }) {
  const a = n, i = r, h = o, x = (b, _, g) => {
    const m = b === "row" ? a.filter((v) => v.property !== _) : a, N = b === "col" ? i.filter((v) => v.property !== _) : i, p = b === "agg" ? h.filter((v) => !(v.property === _ && v.aggregate === g)) : h;
    s?.({ rowFields: m, columnFields: N, aggregateFields: p });
  }, f = (b, _) => _.map((g) => String(b[g.property])).join(""), D = [...new Set(a.length ? e.map((b) => f(b, a)) : [""])].sort(), $ = [...new Set(i.length ? e.map((b) => f(b, i)) : [""])].sort(), M = (b, _, g) => {
    const m = e.filter((p) => f(p, a) === b && f(p, i) === _), N = m.map((p) => Number(p[g.property])).filter((p) => !Number.isNaN(p));
    return !N.length && g.aggregate !== "Count" ? 0 : Rn[g.aggregate](g.aggregate === "Count" ? m.map(() => 1) : N);
  }, C = (b, _, g, m) => /* @__PURE__ */ w(
    "button",
    {
      type: "button",
      className: on.chip,
      "aria-label": `Remove ${b} field ${g}`,
      onClick: () => x(b, _, m),
      children: [
        g,
        m ? ` (${m})` : ""
      ]
    },
    `${b}-${g}-${m ?? ""}`
  );
  return /* @__PURE__ */ w("div", { className: [on.root, u].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ w("div", { className: on.fields, children: [
      a.map((b) => C("row", b.property, b.title ?? b.property)),
      i.map((b) => C("col", b.property, b.title ?? b.property)),
      h.map((b) => C("agg", b.property, b.title ?? b.property, b.aggregate))
    ] }),
    /* @__PURE__ */ w("table", { className: on.table, role: "grid", "aria-label": c, children: [
      /* @__PURE__ */ t("thead", { children: /* @__PURE__ */ w("tr", { children: [
        /* @__PURE__ */ t("th", { scope: "col", children: a.map((b) => b.title ?? b.property).join(" / ") || "Total" }),
        $.map((b) => /* @__PURE__ */ t("th", { scope: "col", children: b || "—" }, b)),
        /* @__PURE__ */ t("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ w("tbody", { children: [
        D.map((b) => /* @__PURE__ */ w("tr", { children: [
          /* @__PURE__ */ t("th", { scope: "row", children: b || "—" }),
          $.map((_) => /* @__PURE__ */ t("td", { title: kn(M(b, _, h[0] ?? { property: "", aggregate: "Count" })), children: h.length ? kn(M(b, _, h[0])) : "" }, _)),
          /* @__PURE__ */ t("td", { className: on.total, children: h.length ? kn(
            Rn[h[0].aggregate](
              $.flatMap((_) => e.filter((g) => f(g, a) === b && f(g, i) === _).map((g) => Number(g[h[0].property]))).filter((_) => !Number.isNaN(_))
            )
          ) : "" })
        ] }, b)),
        /* @__PURE__ */ w("tr", { className: on.totalRow, children: [
          /* @__PURE__ */ t("th", { scope: "row", children: "Total" }),
          $.map((b) => /* @__PURE__ */ t("td", { children: h.length ? kn(
            Rn[h[0].aggregate](
              e.filter((_) => f(_, i) === b).map((_) => Number(_[h[0].property])).filter((_) => !Number.isNaN(_))
            )
          ) : "" }, b)),
          /* @__PURE__ */ t("td", { children: h.length ? kn(Rn[h[0].aggregate](e.map((b) => Number(b[h[0].property])).filter((b) => !Number.isNaN(b)))) : "" })
        ] })
      ] })
    ] })
  ] });
}
const Qg = "_root_221i7_1", e0 = "_reverse_221i7_10", t0 = "_item_221i7_14", n0 = "_marker_221i7_35", r0 = "_body_221i7_46", o0 = "_label_221i7_50", s0 = "_content_221i7_56", Yt = {
  root: Qg,
  reverse: e0,
  item: t0,
  marker: n0,
  body: r0,
  label: o0,
  content: s0
};
function ty({ items: e, reverse: n = !1, ariaLabel: r = "Timeline", className: o }) {
  const s = n ? [...e].reverse() : e;
  return /* @__PURE__ */ t(
    "ol",
    {
      className: [Yt.root, n ? Yt.reverse : "", o].filter(Boolean).join(" "),
      role: "list",
      "aria-label": r,
      children: s.map((c, u) => /* @__PURE__ */ w("li", { className: Yt.item, children: [
        /* @__PURE__ */ t("span", { className: Yt.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ w("div", { className: Yt.body, children: [
          /* @__PURE__ */ t("div", { className: Yt.label, children: c.label }),
          c.content !== void 0 && /* @__PURE__ */ t("div", { className: Yt.content, children: c.content })
        ] })
      ] }, u))
    }
  );
}
const a0 = "_root_jannm_1", l0 = "_header_jannm_13", c0 = "_headCell_jannm_22", i0 = "_row_jannm_32", d0 = "_cell_jannm_37", $n = {
  root: a0,
  header: l0,
  headCell: c0,
  row: i0,
  cell: d0
};
function ny({ count: e, rowHeight: n = 40, height: r = 320, loadData: o, columns: s = [], ariaLabel: c = "Virtual grid", className: u }) {
  const [a, i] = V(/* @__PURE__ */ new Map()), [h, x] = V(0), f = le(/* @__PURE__ */ new Set()), D = Math.ceil(r / n), $ = Math.max(0, Math.floor(h / n) - 3), M = Math.min(e, $ + D + 6), C = q(
    (_, g) => {
      let m = !1;
      for (let N = _; N < g; N++)
        !a.has(N) && !f.current.has(N) && (m = !0);
      if (m) {
        for (let N = _; N < g; N++) f.current.add(N);
        o({ skip: _, top: g }).then((N) => {
          i((p) => {
            const v = new Map(p);
            return N.forEach((l, y) => v.set(_ + y, l)), v;
          });
          for (let p = _; p < g; p++) f.current.delete(p);
        });
      }
    },
    [a, o]
  );
  Ne(() => {
    C($, M);
  }, [$, M]);
  const b = [];
  for (let _ = $; _ < M; _++) {
    const g = a.get(_) ?? {};
    b.push(
      /* @__PURE__ */ t("div", { className: $n.row, role: "row", style: { height: n }, children: s.map((m) => /* @__PURE__ */ t("div", { role: "gridcell", className: $n.cell, style: m.width ? { width: m.width } : void 0, children: String(g[m.property] ?? "") }, m.property)) }, _)
    );
  }
  return /* @__PURE__ */ w(
    "div",
    {
      className: [$n.root, u].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": c,
      "aria-rowcount": e,
      tabIndex: 0,
      style: { height: r },
      onScroll: (_) => x(_.target.scrollTop),
      onKeyDown: (_) => {
        const g = _.currentTarget;
        _.key === "ArrowDown" ? (_.preventDefault(), g.scrollTop += n) : _.key === "ArrowUp" ? (_.preventDefault(), g.scrollTop -= n) : _.key === "PageDown" ? (_.preventDefault(), g.scrollTop += r) : _.key === "PageUp" && (_.preventDefault(), g.scrollTop -= r);
      },
      children: [
        /* @__PURE__ */ t("div", { style: { height: $ * n }, "aria-hidden": "true" }),
        /* @__PURE__ */ t("div", { className: $n.header, role: "row", children: s.map((_) => /* @__PURE__ */ t("div", { role: "columnheader", className: $n.headCell, style: { height: n, ..._.width ? { width: _.width } : {} }, children: _.title ?? _.property }, _.property)) }),
        b,
        /* @__PURE__ */ t("div", { style: { height: Math.max(0, (e - M) * n) }, "aria-hidden": "true" })
      ]
    }
  );
}
const u0 = "_root_112nk_1", f0 = {
  root: u0
}, Ze = 25;
function _0(e) {
  const n = [];
  let r = 2166136261;
  for (let o = 0; o < e.length; o++)
    r ^= e.charCodeAt(o), r = Math.imul(r, 16777619) >>> 0, n.push(r & 255);
  for (; n.length < Ze * Ze; )
    r = Math.imul(r ^ n.length + 1, 16777619) >>> 0, n.push(r & 255);
  return n;
}
function p0(e, n) {
  const r = (o, s) => e >= o && e < o + 7 && n >= s && n < s + 7;
  return !!(r(0, 0) || r(Ze - 7, 0) || r(0, Ze - 7) || e === 6 || n === 6 || e === 8 && n === 8 || e === 8 && (n < 9 || n > Ze - 9) || n === 8 && (e < 9 || e > Ze - 9));
}
function h0(e, n) {
  const r = (o, s) => {
    const c = e - o, u = n - s, a = Math.max(Math.abs(c - 3), Math.abs(u - 3));
    return a === 3 || a <= 1;
  };
  return e < 7 && n < 7 ? r(0, 0) : e >= Ze - 7 && n < 7 ? r(Ze - 7, 0) : e < 7 && n >= Ze - 7 ? r(0, Ze - 7) : null;
}
function ry({ value: e, size: n = 128, render: r = "svg", ariaLabel: o, className: s }) {
  const c = o ?? `QR code for ${e}`, u = we(() => {
    const h = _0(e), x = [];
    for (let f = 0; f < Ze; f++)
      for (let D = 0; D < Ze; D++) {
        const $ = h0(D, f);
        if ($ !== null) {
          x.push($);
          continue;
        }
        if (p0(D, f)) {
          x.push(D === 6 || f === 6 ? (D + f) % 2 === 0 : !1);
          continue;
        }
        x.push(h[f * Ze + D] % 2 === 1);
      }
    return x;
  }, [e]), a = n / Ze, i = [];
  for (let h = 0; h < Ze; h++)
    for (let x = 0; x < Ze; x++)
      u[h * Ze + x] && i.push(/* @__PURE__ */ t("rect", { x: x * a, y: h * a, width: a, height: a }, `${x}-${h}`));
  return /* @__PURE__ */ w(
    "svg",
    {
      className: [f0.root, s].filter(Boolean).join(" "),
      width: n,
      height: n,
      viewBox: `0 0 ${n} ${n}`,
      role: "img",
      "aria-label": c,
      "data-value": e,
      children: [
        /* @__PURE__ */ t("rect", { width: n, height: n, fill: "var(--dt-color-surface)" }),
        /* @__PURE__ */ t("g", { fill: "var(--dt-color-text)", children: i })
      ]
    }
  );
}
const m0 = "_root_1us75_1", g0 = "_value_1us75_9", $r = {
  root: m0,
  value: g0
}, Nr = [
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
], Sr = 104, b0 = 106;
function y0(e) {
  const n = [Sr];
  for (let o = 0; o < e.length; o++) {
    const s = e.charCodeAt(o);
    n.push(s >= 32 && s <= 126 ? s - 32 : 0);
  }
  let r = Sr;
  for (let o = 1; o < n.length; o++) r += o * n[o];
  return n.push(r % 103, b0), n;
}
function oy({ value: e, format: n = "Code128", height: r = 60, showValue: o = !1, ariaLabel: s, className: c }) {
  const u = s ?? `Barcode ${e}`, a = we(() => {
    const i = [];
    let h = 0;
    for (const x of y0(e)) {
      const f = Nr[x] ?? Nr[0];
      for (let D = 0; D < f.length; D++) {
        const $ = Number(f[D]);
        D % 2 === 0 && i.push({ x: h, w: $ }), h += $;
      }
    }
    return { modules: i, total: h };
  }, [e]);
  return /* @__PURE__ */ w("span", { className: [$r.root, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ w(
      "svg",
      {
        width: "100%",
        height: r,
        viewBox: `0 0 ${a.total} ${r}`,
        preserveAspectRatio: "none",
        role: "img",
        "aria-label": u,
        "data-value": e,
        children: [
          /* @__PURE__ */ t("rect", { width: a.total, height: r, fill: "var(--dt-color-surface)" }),
          a.modules.map((i, h) => /* @__PURE__ */ t("rect", { x: i.x, y: 0, width: i.w, height: r, fill: "var(--dt-color-text)" }, h))
        ]
      }
    ),
    o && /* @__PURE__ */ t("span", { className: $r.value, children: e })
  ] });
}
const v0 = "_root_14y8l_1", x0 = "_svg_14y8l_10", w0 = "_gridline_14y8l_15", k0 = "_tickLabel_14y8l_21", $0 = "_axisTitle_14y8l_27", N0 = "_dataLabel_14y8l_34", S0 = "_legend_14y8l_40", D0 = "_legendItem_14y8l_48", C0 = "_swatch_14y8l_56", z0 = "_tooltip_14y8l_63", M0 = "_visuallyHidden_14y8l_77", ct = {
  root: v0,
  svg: x0,
  gridline: w0,
  tickLabel: k0,
  axisTitle: $0,
  dataLabel: N0,
  legend: S0,
  legendItem: D0,
  swatch: C0,
  tooltip: z0,
  visuallyHidden: M0
}, Dr = [
  "var(--dt-color-palette-0)",
  "var(--dt-color-palette-1)",
  "var(--dt-color-palette-2)",
  "var(--dt-color-palette-3)",
  "var(--dt-color-palette-4)",
  "var(--dt-color-palette-5)"
];
function O0(e, n, r) {
  const o = n - e || 1, s = r ?? Math.pow(10, Math.floor(Math.log10(o / 4))), c = Math.floor(e / s) * s, u = Math.ceil(n / s) * s, a = [];
  for (let i = c; i <= u + 1e-9; i += s) a.push(Number(i.toFixed(6)));
  return { min: c, max: u, step: s, ticks: a };
}
function sy({
  series: e,
  width: n = 600,
  height: r = 400,
  valueAxis: o,
  categoryAxis: s,
  showLegend: c = !0,
  tooltipVisible: u = !0,
  onSeriesClick: a,
  ariaLabel: i = "Chart",
  className: h
}) {
  const [x, f] = V(null), D = we(() => {
    const l = /* @__PURE__ */ new Set();
    for (const y of e) for (const z of y.data) l.add(String(z[y.categoryProperty] ?? ""));
    return [...l];
  }, [e]), $ = we(() => e.flatMap((l) => l.data.map((y) => Number(y[l.valueProperty]))).filter((l) => !Number.isNaN(l)), [e]), M = o?.min ?? ($.length ? Math.min(0, ...$) : 0), C = o?.max ?? ($.length ? Math.max(...$) : 10), b = we(() => O0(M, C, o?.step), [M, C, o?.step]), _ = { t: 16, r: 16, b: 40, l: 56 }, g = n - _.l - _.r, m = r - _.t - _.b, N = (l) => _.l + l / Math.max(1, D.length - 1) * g, p = (l) => _.t + (1 - (l - b.min) / (b.max - b.min || 1)) * m, v = (l, y) => y.color ?? Dr[l % Dr.length];
  return /* @__PURE__ */ w("figure", { className: [ct.root, h].filter(Boolean).join(" "), role: "img", "aria-label": i, "aria-describedby": `${i.replace(/\s+/g, "-")}-table`, children: [
    /* @__PURE__ */ w("svg", { width: n, height: r, className: ct.svg, role: "presentation", children: [
      o?.gridlines !== !1 && b.ticks.map((l) => /* @__PURE__ */ t("line", { x1: _.l, x2: _.l + g, y1: p(l), y2: p(l), className: ct.gridline }, l)),
      s?.gridlines && D.map((l, y) => /* @__PURE__ */ t("line", { x1: N(y), x2: N(y), y1: _.t, y2: _.t + m, className: ct.gridline }, y)),
      b.ticks.map((l) => /* @__PURE__ */ t("text", { x: _.l - 8, y: p(l) + 4, textAnchor: "end", className: ct.tickLabel, children: l }, l)),
      D.map((l, y) => /* @__PURE__ */ t("text", { x: N(y), y: _.t + m + 16, textAnchor: "middle", className: ct.tickLabel, children: l }, l)),
      o?.title && /* @__PURE__ */ t("text", { x: 12, y: _.t + m / 2, textAnchor: "middle", transform: `rotate(-90,12,${_.t + m / 2})`, className: ct.axisTitle, children: o.title }),
      s?.title && /* @__PURE__ */ t("text", { x: _.l + g / 2, y: r - 4, textAnchor: "middle", className: ct.axisTitle, children: s.title }),
      e.map((l, y) => {
        const z = l.data.map((d) => ({
          cat: String(d[l.categoryProperty] ?? ""),
          val: Number(d[l.valueProperty]),
          item: d
        })), K = new Map(D.map((d, S) => [d, S])), A = v(y, l);
        if (l.type === "line" || l.type === "area") {
          const d = z.map((S) => {
            const I = K.get(S.cat) ?? 0;
            return `${I === 0 ? "M" : "L"} ${N(I)} ${p(S.val)}`;
          }).join(" ");
          return /* @__PURE__ */ w("g", { role: "list", "aria-label": l.title ?? `Series ${y + 1}`, children: [
            /* @__PURE__ */ t("title", { children: l.title ?? `Series ${y + 1}` }),
            l.type === "area" && /* @__PURE__ */ t("path", { d: `${d} L ${N(z.length - 1)} ${p(b.min)} L ${N(0)} ${p(b.min)} Z`, fill: A, fillOpacity: 0.25, stroke: "none" }),
            /* @__PURE__ */ t("path", { d, fill: "none", stroke: A, strokeWidth: 2 }),
            z.map((S, I) => {
              const E = K.get(S.cat) ?? 0, j = N(E), X = p(S.val);
              return /* @__PURE__ */ w("g", { role: "listitem", children: [
                /* @__PURE__ */ t("circle", { cx: j, cy: X, r: 4, fill: A, stroke: "var(--dt-color-surface)", strokeWidth: 1.5 }),
                /* @__PURE__ */ t(
                  "rect",
                  {
                    x: j - 12,
                    y: X - 12,
                    width: 24,
                    height: 24,
                    fill: "transparent",
                    onMouseEnter: () => u && f({ x: j, y: X, text: `${l.title ?? S.cat}: ${S.val}` }),
                    onMouseLeave: () => f(null),
                    onFocus: () => u && f({ x: j, y: X, text: `${l.title ?? S.cat}: ${S.val}` }),
                    onBlur: () => f(null),
                    onClick: () => a?.({ seriesTitle: l.title ?? "", category: S.cat, value: S.val, item: S.item }),
                    style: { cursor: "pointer" }
                  }
                ),
                l.labels?.visible && /* @__PURE__ */ t("text", { x: j, y: X - 8, textAnchor: "middle", className: ct.dataLabel, children: S.val })
              ] }, I);
            })
          ] }, y);
        }
        const O = l.type === "bar";
        return /* @__PURE__ */ w("g", { role: "list", "aria-label": l.title ?? `Series ${y + 1}`, children: [
          /* @__PURE__ */ t("title", { children: l.title ?? `Series ${y + 1}` }),
          z.map((d, S) => {
            const I = K.get(d.cat) ?? 0, E = e.length, j = g / D.length, X = O ? 18 : Math.max(12, j / E - 4), ne = O ? _.l : N(I) - E * X / 2 + y * X + 2, ie = O ? _.t + I * m / D.length + 4 : p(d.val), ee = O ? (d.val - b.min) / (b.max - b.min || 1) * g : X - 4, ae = O ? 16 : _.t + m - p(d.val), se = ne, G = ie;
            return /* @__PURE__ */ w("g", { role: "listitem", children: [
              /* @__PURE__ */ t(
                "rect",
                {
                  x: se,
                  y: G,
                  width: ee,
                  height: ae,
                  fill: A,
                  rx: 2,
                  onMouseEnter: () => u && f({ x: se + ee / 2, y: G, text: `${l.title ?? d.cat}: ${d.val}` }),
                  onMouseLeave: () => f(null),
                  onClick: () => a?.({ seriesTitle: l.title ?? "", category: d.cat, value: d.val, item: d.item }),
                  style: { cursor: "pointer" }
                }
              ),
              l.labels?.visible && /* @__PURE__ */ t("text", { x: se + ee / 2, y: G - 4, textAnchor: "middle", className: ct.dataLabel, children: d.val })
            ] }, S);
          })
        ] }, y);
      })
    ] }),
    x && /* @__PURE__ */ t("div", { className: ct.tooltip, style: { left: x.x, top: x.y - 28 }, children: x.text }),
    c && /* @__PURE__ */ t("div", { className: ct.legend, children: e.map((l, y) => /* @__PURE__ */ w("span", { className: ct.legendItem, children: [
      /* @__PURE__ */ t("span", { className: ct.swatch, style: { backgroundColor: v(y, l) }, "aria-hidden": "true" }),
      l.title ?? `Series ${y + 1}`
    ] }, y)) }),
    /* @__PURE__ */ w("table", { className: ct.visuallyHidden, id: `${i.replace(/\s+/g, "-")}-table`, children: [
      /* @__PURE__ */ t("caption", { children: i }),
      /* @__PURE__ */ t("thead", { children: /* @__PURE__ */ w("tr", { children: [
        /* @__PURE__ */ t("th", { children: "Series" }),
        /* @__PURE__ */ t("th", { children: "Category" }),
        /* @__PURE__ */ t("th", { children: "Value" })
      ] }) }),
      /* @__PURE__ */ t("tbody", { children: e.map(
        (l) => l.data.map((y, z) => /* @__PURE__ */ w("tr", { children: [
          /* @__PURE__ */ t("td", { children: l.title ?? "" }),
          /* @__PURE__ */ t("td", { children: String(y[l.categoryProperty] ?? "") }),
          /* @__PURE__ */ t("td", { children: String(y[l.valueProperty] ?? "") })
        ] }, `${l.title}-${z}`))
      ) })
    ] })
  ] });
}
export {
  gb as Accordion,
  ab as Alert,
  xb as Autocomplete,
  hb as Avatar,
  A0 as Badge,
  oy as Barcode,
  fb as Body,
  Wb as Breadcrumb,
  T0 as Button,
  E0 as Card,
  Gb as Carousel,
  sy as Chart,
  tb as Checkbox,
  kb as Checkboxlist,
  Ib as Colorpicker,
  ib as Column,
  Mn as DEFAULT_OPERATOR_BY_TYPE,
  dp as DEFAULT_PALETTE,
  Y0 as DataFilter,
  Z0 as DataGrid,
  J0 as DataList,
  jb as Datepicker,
  rb as Dialog,
  Pb as DropZone,
  vb as Dropdown,
  P0 as EmptyState,
  Ir as FILTER_OPERATORS,
  Hb as FabMenu,
  q0 as Field,
  Fu as Footer,
  F0 as Form,
  Qb as Gantt,
  Wu as Header,
  Ve as Icon,
  eb as Input,
  Q0 as Label,
  ub as Layout,
  wb as Listbox,
  Mb as Mask,
  qb as Menu,
  Ob as Numeric,
  Js as Pager,
  Fb as PanelMenu,
  zb as Password,
  Zb as PickList,
  ey as Pivot,
  Kb as ProfileMenu,
  _b as Progress,
  ry as QRCode,
  $b as Radiobuttonlist,
  Tb as Rating,
  cb as Row,
  Jb as Scheduler,
  Lb as SecurityCode,
  Pn as Select,
  Nb as Selectbar,
  Qu as Sidebar,
  Rb as SignaturePad,
  lb as Skeleton,
  Eb as Slider,
  Db as Splitbutton,
  Vb as Splitter,
  db as Stack,
  R0 as Stat,
  Ub as Steps,
  ul as Switch,
  B0 as Table,
  mb as Tabs,
  bb as Textarea,
  Cb as Textbox,
  pb as ThemeSwitcher,
  ty as Timeline,
  Ab as Timespanpicker,
  sb as ToastProvider,
  Xb as Toc,
  Sb as Togglebutton,
  nb as Tooltip,
  Yb as Tree,
  yb as Typography,
  Bb as Upload,
  ny as VirtualGrid,
  Tr as applyFilters,
  sa as applyGridState,
  _n as columnValue,
  na as cycleSort,
  aa as defaultOperatorForType,
  H0 as email,
  hr as formatMasked,
  lr as formatValue,
  qn as getByPath,
  L0 as iconNames,
  jr as matchesFilters,
  V0 as maxLength,
  U0 as minLength,
  oa as paginate,
  W0 as pattern,
  X0 as range,
  K0 as required,
  is as runValidators,
  $s as sortItems,
  ra as sortedItems,
  ys as toFilterString,
  ks as toODataFilterString,
  cs as useFormContext,
  G0 as useFormField,
  ob as useToast
};
