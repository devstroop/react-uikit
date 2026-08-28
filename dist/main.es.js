import { jsx as t, jsxs as w, Fragment as Me } from "react/jsx-runtime";
import { forwardRef as He, useId as Xe, isValidElement as er, cloneElement as zr, useState as Y, useRef as ce, useCallback as H, useMemo as ke, useContext as Cr, createContext as Mr, useEffect as Se, Children as Pr, useImperativeHandle as tr } from "react";
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
}, T0 = He(function({
  variant: n = "primary",
  size: r = "md",
  fullWidth: o = !1,
  iconOnly: s = !1,
  className: l,
  type: u = "button",
  ...a
}, i) {
  const h = [
    cn.button,
    cn[n],
    cn[r],
    o ? cn.fullWidth : null,
    s ? cn.iconOnly : null,
    l
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
}, E0 = He(function({ variant: n = "elevated", header: r, footer: o, className: s, children: l, onKeyDown: u, ...a }, i) {
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
        /* @__PURE__ */ t("div", { className: dn.body, children: l }),
        o != null && /* @__PURE__ */ t("div", { className: dn.footer, children: o })
      ]
    }
  );
}), io = "_badge_dcudr_1", uo = "_xs_dcudr_14", fo = "_sm_dcudr_19", _o = "_md_dcudr_24", po = "_lg_dcudr_29", ho = "_xl_dcudr_34", mo = "_neutral_dcudr_40", go = "_primary_dcudr_45", bo = "_success_dcudr_50", yo = "_warning_dcudr_55", vo = "_danger_dcudr_60", xo = "_solid_dcudr_66", wo = "_outline_dcudr_91", Cn = {
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
}, A0 = He(function({ tone: n = "neutral", variant: r = "soft", size: o = "md", className: s, children: l, ...u }, a) {
  return /* @__PURE__ */ t(
    "span",
    {
      ref: a,
      className: [Cn.badge, Cn[o], Cn[n], Cn[r], s].filter(Boolean).join(" "),
      ...u,
      children: l
    }
  );
}), ko = "_xs_cg2f2_2", $o = "_sm_cg2f2_7", No = "_md_cg2f2_1", So = "_lg_cg2f2_17", Do = "_xl_cg2f2_22", zo = {
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
], Co = {
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
}, Ye = He(function({ name: n, size: r = "md", strokeWidth: o = 2, className: s, ...l }, u) {
  const a = typeof r == "string";
  return /* @__PURE__ */ t(
    "svg",
    {
      ref: u,
      className: [a ? zo[r] : null, s].filter(Boolean).join(" "),
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
      ...l,
      children: Co[n]
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
}, R0 = He(function({ label: n, value: r, delta: o, deltaTone: s = "neutral", hint: l, className: u, ...a }, i) {
  return /* @__PURE__ */ w("div", { ref: i, className: [Ht.stat, u].filter(Boolean).join(" "), ...a, children: [
    /* @__PURE__ */ t("div", { className: Ht.label, children: n }),
    /* @__PURE__ */ w("div", { className: Ht.row, children: [
      /* @__PURE__ */ t("div", { className: Ht.value, children: r }),
      o != null && /* @__PURE__ */ t("div", { className: [Ht.delta, Ht[s]].join(" "), children: o })
    ] }),
    l != null && /* @__PURE__ */ t("div", { className: Ht.hint, children: l })
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
  gridLines: l = "default",
  allowAlternatingRows: u = !0,
  className: a
}) {
  const i = l === "default" || l === "both" ? "" : Bt[l];
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
function q0({ label: e, htmlFor: n, required: r, hint: o, error: s, children: l, className: u }) {
  const a = Xe(), i = Xe(), h = s != null ? a : o != null ? i : null, x = er(l) && h != null ? zr(
    l,
    {
      "aria-describedby": [
        l.props["aria-describedby"],
        h
      ].filter((d) => typeof d == "string").join(" ") || void 0,
      "aria-invalid": s != null ? !0 : l.props["aria-invalid"]
    }
  ) : l;
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
  const e = Cr(Or);
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
  children: l,
  className: u
}) {
  const [a, i] = Y({}), [h, x] = Y(0), d = ce(a);
  d.current = a;
  const S = H((m) => {
    i((N) => N[m.name] === m ? N : { ...N, [m.name]: m });
  }, []), $ = H((m) => {
    i((N) => {
      if (!(m in N)) return N;
      const p = { ...N };
      return delete p[m], p;
    });
  }, []), I = H(() => {
    const m = {};
    for (const N of Object.values(d.current)) {
      const p = N.validate();
      p.length > 0 && (m[N.name] = p);
    }
    return m;
  }, []), z = H(() => {
    const m = I();
    x((N) => N + 1), Object.keys(m).length === 0 ? n?.(e) : r?.(m);
  }, [I, e, n, r]), b = (m) => {
    o != null && s != null || (m.preventDefault(), z());
  }, _ = ke(
    () => ({ registerField: S, unregisterField: $, submit: z, submitCount: h }),
    [S, $, z, h]
  ), g = [ls.form, u].filter(Boolean).join(" ");
  return /* @__PURE__ */ t(Or.Provider, { value: _, children: /* @__PURE__ */ t("form", { className: g, onSubmit: b, action: o, method: s, noValidate: !0, children: l }) });
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
  const { registerField: r, unregisterField: o, submitCount: s } = cs(), [l, u] = Y(n?.initialValue), [a, i] = Y(!1), [h, x] = Y(!1), d = ce(() => []);
  d.current = () => is(n?.validate ?? [], l), Se(() => (r({ name: e, validate: () => d.current() }), () => o(e)), [e, r, o]), Se(() => {
    s > 0 && (i(!0), x(!1));
  }, [s]);
  const S = a && !h ? d.current() : [];
  return { value: l, setValue: (I) => {
    u(I), x(!0);
  }, errors: S };
}
const ds = "_select_14c07_1", us = "_invalid_14c07_33", fs = "_xs_14c07_39", _s = "_sm_14c07_45", ps = "_md_14c07_51", hs = "_lg_14c07_57", ms = "_xl_14c07_63", Fn = {
  select: ds,
  invalid: us,
  xs: fs,
  sm: _s,
  md: ps,
  lg: hs,
  xl: ms
}, Pn = He(function({ size: n = "md", invalid: r = !1, options: o, children: s, className: l, ...u }, a) {
  return /* @__PURE__ */ t(
    "select",
    {
      ref: a,
      className: [Fn.select, Fn[n], r ? Fn.invalid : null, l].filter(Boolean).join(" "),
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
  const s = String(r ?? ""), l = String(o ?? "");
  return s < l ? -1 : s > l ? 1 : 0;
}
function or(e, n, r) {
  const o = qn(n, e.property), s = sr(o, e.value, e.operator, r);
  if (e.secondOperator == null || e.secondValue === void 0) return s;
  const l = sr(o, e.secondValue, e.secondOperator, r);
  return (e.logicalOperator ?? "And") === "And" ? s && l : s || l;
}
function sr(e, n, r, o) {
  const s = o === "CaseInsensitive", l = (i) => s && typeof i == "string" ? i.toLowerCase() : i, u = l(e), a = l(n);
  switch (r) {
    case "Equals":
      return u === a || Array.isArray(u) && u.some((i) => l(i) === a);
    case "NotEquals":
      return u !== a && !(Array.isArray(u) && u.some((i) => l(i) === a));
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
function nr(e) {
  return "filters" in e;
}
function jr(e, n, r = {}) {
  const o = r.logicalOperator ?? "And", s = r.caseSensitivity ?? "CaseInsensitive";
  if (nr(n)) {
    if (n.filters.length === 0) return !0;
    const l = n.operator ?? o;
    return n.filters[l === "Or" ? "some" : "every"](
      (u) => jr(e, u, { logicalOperator: l, caseSensitivity: s })
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
  const r = e.property, o = n === "CaseInsensitive", s = (i) => o ? `tolower(${i})` : i, l = (i) => typeof i == "string" ? `'${vs(i)}'` : i instanceof Date ? `'${i.toISOString()}'` : String(i ?? ""), u = (i, h) => {
    const x = typeof h == "string", d = x && o ? s(r) : r;
    switch (i) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${d} ${xs[i]} ${x && o ? s(l(h)) : l(h)}`;
      case "Contains":
        return `contains(${s(r)}, ${s(l(h))})`;
      case "StartsWith":
        return `startswith(${s(r)}, ${s(l(h))})`;
      case "EndsWith":
        return `endswith(${s(r)}, ${s(l(h))})`;
      case "DoesNotContain":
        return `not(contains(${s(r)}, ${s(l(h))}))`;
      case "In":
        return Array.isArray(h) ? `${d} in (${h.map((S) => l(S)).join(", ")})` : `${d} in (${l(h)})`;
      case "NotIn":
        return Array.isArray(h) ? `not(${d} in (${h.map((S) => l(S)).join(", ")}))` : `not(${d} in (${l(h)}))`;
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
      const l = s.sortOrder === "Ascending" ? 1 : -1, u = Nn(qn(r, s.property), qn(o, s.property));
      if (u !== 0) return u * l;
    }
    return 0;
  });
}
const Ns = "_filter_1jk5p_1", Ss = "_rows_1jk5p_9", Ds = "_row_1jk5p_9", zs = "_join_1jk5p_21", Cs = "_property_1jk5p_30", Ms = "_operator_1jk5p_34", Os = "_value_1jk5p_38", Is = "_remove_1jk5p_42", js = "_bar_1jk5p_58", Ts = "_add_1jk5p_64", Es = "_custom_1jk5p_78", As = "_summary_1jk5p_82", _t = {
  filter: Ns,
  rows: Ss,
  row: Ds,
  join: zs,
  property: Cs,
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
        onChange: (l) => r(l.target.value)
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
        onChange: (l) => {
          l.target.value === "" ? r(void 0) : r(l.target.value === "true");
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
      onChange: (l) => r(o === "number" && l.target.value !== "" ? Number(l.target.value) : l.target.value)
    }
  );
}
function Y0({
  properties: e,
  logicalOperator: n = "And",
  filterCaseSensitivity: r = "CaseInsensitive",
  initialRows: o,
  uniqueFilters: s = !1,
  className: l,
  viewChanged: u,
  items: a,
  children: i
}) {
  const [h, x] = Y(
    () => o != null && o.length > 0 ? o.map((_, g) => ({ id: g, ..._ })) : [{ id: 0, property: e[0]?.name ?? "", operator: Mn[e[0]?.type ?? "string"], value: void 0 }]
  ), d = (_, g) => {
    x((m) => m.map((N) => N.id === _ ? { ...N, ...g } : N));
  }, S = () => {
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
  }, I = ke(() => {
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
  }, [h]), z = ke(() => a == null || I.length === 0 ? a : Tr(a, { operator: n, filters: I }, { caseSensitivity: r }), [a, I, n, r]);
  Se(() => {
    u != null && a != null && u(z ?? []);
  }, [z]);
  const b = (_) => e.find((g) => g.name === _) ?? { name: _, type: "string" };
  return /* @__PURE__ */ w("div", { className: [_t.filter, l].filter(Boolean).join(" "), children: [
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
              const y = e.find((c) => c.name === p.target.value);
              d(_.id, {
                property: p.target.value,
                operator: Mn[y?.type ?? "string"],
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
            onChange: (p) => d(_.id, { operator: p.target.value }),
            options: N.map((p) => ({ value: p, label: Ls[p] }))
          }
        ),
        /* @__PURE__ */ t(Rs, { property: m, value: _.value, onChange: (p) => d(_.id, { value: p }) }),
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
      /* @__PURE__ */ t("button", { type: "button", className: _t.add, onClick: S, children: "Add filter" }),
      i != null ? /* @__PURE__ */ t("div", { className: _t.custom, children: i }) : null,
      a != null ? /* @__PURE__ */ w("span", { className: _t.summary, "aria-live": "polite", children: [
        z?.length ?? 0,
        " of ",
        a.length
      ] }) : null
    ] })
  ] });
}
const Bs = "_pager_15jh8_1", Ps = "_alignLeft_15jh8_10", qs = "_alignCenter_15jh8_14", Fs = "_alignRight_15jh8_18", Ks = "_alignJustify_15jh8_22", Hs = "_summary_15jh8_26", Ws = "_controls_15jh8_31", Us = "_button_15jh8_37", Vs = "_active_15jh8_73", Xs = "_ellipsis_15jh8_85", Gs = "_size_15jh8_91", st = {
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
  const l = Math.min(n, s + r - 1);
  s = Math.max(1, l - r + 1);
  const u = [];
  for (let a = s; a <= l; a++) u.push(a);
  return s > 2 && u.unshift("ellipsis"), s > 1 && u.unshift(1), l < n - 1 && u.push("ellipsis"), l < n && u.push(n), u;
}
function Js({
  count: e,
  pageSize: n,
  page: r,
  pageNumber: o,
  defaultPage: s = 1,
  pageSizeOptions: l,
  pageNumbersCount: u = 5,
  alwaysVisible: a = !1,
  horizontalAlign: i = "left",
  showPagingSummary: h,
  showSummary: x,
  showPageSizeSelector: d = !0,
  pagingSummaryFormat: S = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: $,
  summaryTemplate: I,
  pageSizeText: z = "Items per page",
  firstPageTitle: b = "First page",
  prevPageTitle: _ = "Previous page",
  nextPageTitle: g = "Next page",
  lastPageTitle: m = "Last page",
  pageTitleFormat: N = "Page {0}",
  pageAriaLabelFormat: p = "Page {0}",
  onPageChange: y,
  onPageSizeChange: c,
  ariaLabel: v = "Pagination",
  className: C
}) {
  const M = r ?? o ?? s, [E, O] = Y(M), f = r !== void 0 || o !== void 0, D = f ? M : E, T = Math.max(1, Math.ceil(e / n)), j = Math.min(Math.max(1, D), T), A = h ?? x ?? !0, X = a || T > 1, K = Zs(j, T, u), re = H(
    (G) => {
      const F = Math.min(Math.max(1, G), T);
      f || O(F);
      const L = (F - 1) * n;
      y?.({ page: F, skip: L, top: n, pageCount: T, pageSize: n });
    },
    [f, y, T, n]
  ), Z = i === "center" ? st.alignCenter : i === "right" ? st.alignRight : i === "justify" ? st.alignJustify : st.alignLeft, J = { count: e, pageNumber: j, pageSize: n, pageCount: T }, Q = (G) => {
    const F = Array.from(G.currentTarget.querySelectorAll("button[data-pager-page]")), L = F.indexOf(document.activeElement);
    L !== -1 && (G.key === "ArrowRight" || G.key === "ArrowDown" ? (G.preventDefault(), (F[L + 1] ?? F[0])?.focus()) : G.key === "ArrowLeft" || G.key === "ArrowUp" ? (G.preventDefault(), (F[L - 1] ?? F[F.length - 1])?.focus()) : G.key === "Home" ? (G.preventDefault(), F[0]?.focus()) : G.key === "End" && (G.preventDefault(), F[F.length - 1]?.focus()));
  };
  return X ? /* @__PURE__ */ w("nav", { className: [st.pager, Z, C].filter(Boolean).join(" "), "aria-label": v, children: [
    A && /* @__PURE__ */ t("span", { className: st.summary, "aria-live": "polite", children: $ ? $(J) : I ? I({ count: e, pageNumber: j, pageSize: n }) : Ys(S, j, T, e) }),
    /* @__PURE__ */ w("div", { className: st.controls, role: "group", "aria-label": v, onKeyDown: Q, children: [
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: st.button,
          disabled: j <= 1,
          onClick: () => re(1),
          "aria-label": b,
          title: b,
          children: "«"
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: st.button,
          disabled: j <= 1,
          onClick: () => re(j - 1),
          "aria-label": _,
          title: _,
          children: "‹"
        }
      ),
      K.map(
        (G, F) => G === "ellipsis" ? /* @__PURE__ */ t("span", { className: st.ellipsis, "aria-hidden": "true", children: "…" }, `e${F}`) : /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            "data-pager-page": G,
            className: [st.button, G === j ? st.active : ""].filter(Boolean).join(" "),
            "aria-current": G === j ? "page" : void 0,
            "aria-label": ar(p, G),
            title: ar(N, G),
            onClick: () => re(G),
            children: G
          },
          G
        )
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: st.button,
          disabled: j >= T,
          onClick: () => re(j + 1),
          "aria-label": g,
          title: g,
          children: "›"
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: st.button,
          disabled: j >= T,
          onClick: () => re(T),
          "aria-label": m,
          title: m,
          children: "»"
        }
      )
    ] }),
    d && l && l.length > 0 && /* @__PURE__ */ w("label", { className: st.size, children: [
      /* @__PURE__ */ t("span", { children: z }),
      /* @__PURE__ */ t(
        "select",
        {
          value: n,
          onChange: (G) => c?.(Number(G.target.value)),
          "aria-label": z,
          children: l.map((G) => /* @__PURE__ */ t("option", { value: G, children: G }, G))
        }
      )
    ] })
  ] }) : null;
}
function Gn(e) {
  const { pageNumber: n, onPageChange: r, summaryTemplate: o, showSummary: s, ...l } = e;
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
      ...l
    }
  );
}
function Qs(e, n, r, o, s, l) {
  if (!n || !r) return e.map((i) => ({ type: "row", row: i }));
  const u = /* @__PURE__ */ new Map();
  e.forEach((i) => {
    const h = String(s(i, n) ?? ""), x = u.get(h);
    x ? x.push(i) : u.set(h, [i]);
  });
  const a = [];
  return u.forEach((i, h) => {
    const x = i[0], d = x != null ? s(x, n) : void 0;
    a.push({
      type: "group",
      group: { key: h, display: l(d), property: n, title: r.title ?? n, count: i.length }
    }), o.has(h) && i.forEach((S) => a.push({ type: "row", row: S }));
  }), a;
}
function On(e, n) {
  return e.property ?? `col-${n}`;
}
function ea(e, n) {
  const r = {};
  let o = 0;
  return e.forEach(({ key: s, column: l }) => {
    if (!l.frozen) return;
    r[s] = o === 0 ? "0px" : `${o}px`;
    const u = n[s] ?? l.width ?? "8rem";
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
  const o = e.find((l) => l.property === n), s = cr[(o ? cr.indexOf(o.sortOrder) : -1) + 1] ?? null;
  return s == null ? e.filter((l) => l.property !== n) : r.multi ? [...e.filter((l) => l.property !== n), { property: n, sortOrder: s }] : [{ property: n, sortOrder: s }];
}
function ra(e, n) {
  return $s(e, n);
}
function oa(e, n, r) {
  const o = Math.max(1, Math.ceil(e.length / r)), s = Math.min(Math.max(1, n), o), l = (s - 1) * r;
  return { items: e.slice(l, l + r), pageCount: o, pageNumber: s, total: e.length };
}
function sa(e, n, r = {}) {
  const o = [...n.filters.entries()].filter(([, a]) => a.value !== "" && a.value !== void 0).map(([a, i]) => ({
    property: a,
    operator: i.operator ?? "Contains",
    value: ta(i.value, r.types?.[a] ?? "string")
  })), s = o.length > 0 ? Tr(e, { operator: r.logicalOperator ?? "And", filters: o }, {
    logicalOperator: r.logicalOperator ?? "And",
    caseSensitivity: r.caseSensitivity ?? "CaseInsensitive"
  }) : e, l = ra(s, n.sorts);
  return { ...oa(l, n.pageNumber, n.pageSize), sorts: n.sorts, filters: n.filters, pageSize: n.pageSize };
}
function aa(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
const la = "_grid_156jh_1", ca = "_toolbar_156jh_8", ia = "_picker_156jh_13", da = "_pickerButton_156jh_17", ua = "_pickerPanel_156jh_31", fa = "_pickerItem_156jh_46", _a = "_groupPanel_156jh_55", pa = "_groupPanelActive_156jh_66", ha = "_groupPanelText_156jh_70", ma = "_groupChip_156jh_74", ga = "_groupRemove_156jh_85", ba = "_groupRow_156jh_94", ya = "_groupCell_156jh_98", va = "_groupToggle_156jh_103", xa = "_editRow_156jh_116", wa = "_editCell_156jh_120", ka = "_editInput_156jh_125", $a = "_commandCell_156jh_135", Na = "_commandButton_156jh_141", Sa = "_data_156jh_156", Da = "_table_156jh_163", za = "_header_156jh_169", Ca = "_center_156jh_181", Ma = "_right_156jh_185", Oa = "_sortButton_156jh_189", Ia = "_sortIndicator_156jh_207", ja = "_sortIndex_156jh_211", Ta = "_cell_156jh_222", Ea = "_clickable_156jh_236", Aa = "_frozen_156jh_244", La = "_selected_156jh_250", Ra = "_resizeHandle_156jh_254", Ba = "_filterCell_156jh_272", Pa = "_filterSelect_156jh_280", qa = "_filterInput_156jh_290", Fa = "_empty_156jh_301", Ka = "_loading_156jh_307", Ha = "_visuallyHidden_156jh_317", ge = {
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
  header: za,
  center: Ca,
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
  showSortIndex: l = !1,
  allowFiltering: u = !1,
  filterCaseSensitivity: a = "CaseInsensitive",
  logicalOperator: i = "And",
  allowPaging: h = !1,
  pageSize: x = 10,
  pageSizeOptions: d,
  pageNumbersCount: S = 5,
  pagerPosition: $ = "Bottom",
  showPagingSummary: I = !0,
  showPageSizeSelector: z = !0,
  selectionMode: b = "None",
  selectedKeys: _,
  onSelectionChange: g,
  showColumnPicker: m = !1,
  columnPickerText: N = "Columns",
  allowColumnResize: p = !1,
  allowColumnReorder: y = !1,
  allowGrouping: c = !1,
  groupPanelText: v = "Drag a column header here to group",
  groupExpanded: C = !0,
  editMode: M = "None",
  allowRowCreate: E = !1,
  onRowUpdate: O,
  onRowCreate: f,
  onRowDelete: D,
  isLoading: T = !1,
  empty: j = "No records found",
  ariaLabel: A,
  className: X,
  onRowClick: K
}) {
  const [re, Z] = Y([]), [J, Q] = Y(/* @__PURE__ */ new Map()), [G, F] = Y(1), [L, oe] = Y(x), [ie, ee] = Y(
    () => e.map((P, q) => On(P, q))
  ), [ue, me] = Y(
    () => new Set(e.map((P, q) => P.visible !== !1 ? On(P, q) : "").filter(Boolean))
  ), [xe, Re] = Y({}), [Ie, Ue] = Y(!1), [ye, Ve] = Y(null), [Ze, Pe] = Y(null), [Ge, qe] = Y(null), [Je, V] = Y({}), k = ce(null), B = ce(null), U = ke(() => {
    const P = /* @__PURE__ */ new Map();
    return e.forEach((q, _e) => P.set(On(q, _e), q)), P;
  }, [e]), se = ke(
    () => ie.filter((P) => ue.has(P)).map((P) => ({ key: P, column: U.get(P) })).filter((P) => P.column != null),
    [ie, ue, U]
  ), te = ke(
    () => ea(se, xe),
    [se, xe]
  ), pe = M !== "None" || D != null || E, $e = ke(
    () => sa(n, { sorts: re, filters: J, pageNumber: G, pageSize: L }, {
      logicalOperator: i,
      caseSensitivity: a,
      types: Object.fromEntries(
        e.filter((P) => P.type != null && P.property != null).map((P) => [P.property, P.type])
      )
    }),
    [n, re, J, G, L, i, a, e]
  ), Be = ke(
    () => ye ? e.find((P) => P.property === ye) : void 0,
    [ye, e]
  ), je = ke(
    () => Ze ?? new Set(C ? $e.items.map((P) => String(_n(P, ye ?? "") ?? "")) : []),
    [Ze, C, $e.items, ye]
  ), rt = ke(
    () => Qs(
      $e.items,
      ye ?? void 0,
      Be,
      je,
      _n,
      (P) => lr(P, Be?.format)
    ),
    [$e.items, ye, Be, je]
  ), vt = ke(
    () => ye ? se.filter((P) => P.column.property !== ye) : se,
    [se, ye]
  ), ne = (P) => {
    P !== "" && Z(na(re, P, { multi: s }));
  }, De = (P, q) => {
    Q((_e) => {
      const ve = new Map(_e);
      return ve.set(P, q), ve;
    }), F(1);
  }, W = (P) => {
    oe(P), F(1);
  }, ae = (P) => {
    if (b === "None") return;
    const q = r(P), _e = _ ?? [];
    let ve;
    b === "Single" ? ve = _e.length === 1 && _e[0] === q ? [] : [q] : ve = _e.includes(q) ? _e.filter((ot) => ot !== q) : [..._e, q], g?.(ve);
  }, fe = (P) => {
    K?.(P);
  }, he = (P, q, _e) => {
    k.current = { key: P, startX: q, startWidth: _e };
  }, de = (P) => {
    const q = k.current;
    if (!q) return;
    const _e = P - q.startX, ve = Math.max(48, q.startWidth + _e);
    Re((ot) => ({ ...ot, [q.key]: `${ve}px` }));
  }, be = () => {
    k.current = null;
  }, Ae = (P) => {
    B.current = P;
  }, Fe = (P) => {
    const q = B.current;
    B.current = null, !(!q || q === P) && ee((_e) => {
      const ve = [..._e], ot = ve.indexOf(q), ht = ve.indexOf(P);
      return ot < 0 || ht < 0 ? _e : (ve.splice(ot, 1), ve.splice(ht, 0, q), ve);
    });
  }, R = (P) => {
    me((q) => {
      const _e = new Set(q);
      return _e.has(P) ? _e.delete(P) : _e.add(P), _e;
    });
  }, le = () => {
    const P = B.current;
    if (B.current = null, !P || !c) return;
    const _e = U.get(P)?.property;
    _e && (Ve(_e), Pe(null));
  }, Ce = () => {
    Ve(null), Pe(null);
  }, Ne = (P) => {
    Pe((q) => {
      const _e = q ?? new Set(C ? $e.items.map((ot) => String(_n(ot, ye ?? "") ?? "")) : []), ve = new Set(_e);
      return ve.has(P) ? ve.delete(P) : ve.add(P), ve;
    });
  }, Te = (P) => {
    const q = {};
    e.forEach((_e) => {
      _e.property && (q[_e.property] = _n(P, _e.property));
    }), V(q), qe(String(r(P)));
  }, et = () => {
    const P = {};
    e.forEach((q) => {
      q.property && q.type === "boolean" && (P[q.property] = !1);
    }), V(P), qe("__new__");
  }, it = () => {
    qe(null), V({});
  }, Mt = (P) => {
    if (Ge === "__new__") {
      const q = Object.fromEntries(
        e.filter((_e) => _e.property).map((_e) => [_e.property, Je[_e.property]])
      );
      f?.(q);
    } else if (P != null) {
      const q = { ...P, ...Je };
      O?.(P, q);
    }
    it();
  }, Dn = h && ($ === "Top" || $ === "TopAndBottom"), an = h && ($ === "Bottom" || $ === "TopAndBottom"), Lr = u && e.some((P) => ir(P, u)), Rr = (P, q, _e) => P.render ? P.render(q, { index: 0 }) : lr(_n(q, P.property), P.format), Br = (P) => {
    const q = [ge.cell];
    return P.align === "center" && q.push(ge.center), P.align === "right" && q.push(ge.right), P.frozen && q.push(ge.frozen), q.join(" ");
  };
  return /* @__PURE__ */ w("div", { className: [ge.grid, X].filter(Boolean).join(" "), children: [
    Dn && /* @__PURE__ */ t(
      Gn,
      {
        pageNumber: $e.pageNumber,
        pageSize: $e.pageSize,
        count: $e.total,
        pageSizeOptions: d,
        pageNumbersCount: S,
        showSummary: I,
        showPageSizeSelector: z,
        ariaLabel: an ? "Pagination (top)" : "Pagination",
        onPageChange: F,
        onPageSizeChange: W
      }
    ),
    (c || E || m) && /* @__PURE__ */ w("div", { className: ge.toolbar, children: [
      c && /* @__PURE__ */ t(
        "div",
        {
          className: [ge.groupPanel, ye ? ge.groupPanelActive : ""].filter(Boolean).join(" "),
          "data-dt-grid-group-panel": !0,
          onDragOver: c ? (P) => P.preventDefault() : void 0,
          onDrop: c ? le : void 0,
          children: ye ? /* @__PURE__ */ w("span", { className: ge.groupChip, children: [
            Be?.title ?? ye,
            ":",
            " ",
            /* @__PURE__ */ t("button", { type: "button", className: ge.groupRemove, onClick: Ce, "aria-label": `Remove group by ${Be?.title ?? ye}`, children: "×" })
          ] }) : /* @__PURE__ */ t("span", { className: ge.groupPanelText, children: v })
        }
      ),
      E && /* @__PURE__ */ t("button", { type: "button", className: ge.pickerButton, onClick: et, children: "Add row" }),
      m && /* @__PURE__ */ w("div", { className: ge.picker, children: [
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: ge.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": Ie,
            onClick: () => Ue((P) => !P),
            children: N
          }
        ),
        Ie && /* @__PURE__ */ t("div", { className: ge.pickerPanel, role: "menu", "aria-label": N, children: e.map((P, q) => {
          const _e = On(P, q);
          return /* @__PURE__ */ w("label", { className: ge.pickerItem, children: [
            /* @__PURE__ */ t(
              "input",
              {
                type: "checkbox",
                checked: ue.has(_e),
                onChange: () => R(_e)
              }
            ),
            P.title ?? P.property
          ] }, _e);
        }) })
      ] })
    ] }),
    /* @__PURE__ */ w("div", { className: ge.data, children: [
      /* @__PURE__ */ w(
        "table",
        {
          className: ge.table,
          role: "grid",
          "aria-rowcount": $e.total + 1,
          "aria-label": A,
          "aria-busy": T || void 0,
          children: [
            /* @__PURE__ */ w("colgroup", { children: [
              vt.map(({ key: P, column: q }) => /* @__PURE__ */ t(
                "col",
                {
                  style: {
                    width: xe[P] ?? q.width,
                    minWidth: q.minWidth,
                    maxWidth: q.maxWidth
                  }
                },
                P
              )),
              pe && /* @__PURE__ */ t("col", { style: { width: "8rem" } })
            ] }),
            /* @__PURE__ */ w("thead", { children: [
              /* @__PURE__ */ w("tr", { children: [
                vt.map(({ key: P, column: q }) => {
                  const _e = Ua(q, o), ve = re.find((Ee) => Ee.property === q.property), ot = ve ? re.indexOf(ve) + 1 : 0, ht = q.align ?? "left";
                  return /* @__PURE__ */ w(
                    "th",
                    {
                      "aria-sort": _e && ve ? Wa[ve.sortOrder] : "none",
                      className: [
                        ge.header,
                        ht === "center" ? ge.center : "",
                        ht === "right" ? ge.right : "",
                        q.frozen ? ge.frozen : ""
                      ].filter(Boolean).join(" "),
                      style: q.frozen ? { left: te[P] } : void 0,
                      scope: "col",
                      draggable: y || c || void 0,
                      onDragStart: y || c ? (Ee) => {
                        Ee.dataTransfer && (Ee.dataTransfer.effectAllowed = "move"), Ae(P);
                      } : void 0,
                      onDragOver: y ? (Ee) => Ee.preventDefault() : void 0,
                      onDrop: y ? () => Fe(P) : void 0,
                      children: [
                        _e ? /* @__PURE__ */ w(
                          "button",
                          {
                            type: "button",
                            className: ge.sortButton,
                            onClick: () => q.property != null && ne(q.property),
                            "aria-label": ve ? ve.sortOrder === "Ascending" ? `Sort ${q.title ?? q.property} descending` : `Sort ${q.title ?? q.property} ascending` : `Sort ${q.title ?? q.property} ascending`,
                            children: [
                              q.title ?? q.property,
                              ve && /* @__PURE__ */ t("span", { className: ge.sortIndicator, "aria-hidden": "true", children: ve.sortOrder === "Ascending" ? "▲" : "▼" }),
                              ot > 1 && l && /* @__PURE__ */ t("span", { className: ge.sortIndex, children: ot })
                            ]
                          }
                        ) : q.title ?? q.property,
                        p && /* @__PURE__ */ t(
                          "span",
                          {
                            className: ge.resizeHandle,
                            "data-dt-grid-resize": !0,
                            role: "separator",
                            "aria-orientation": "vertical",
                            "aria-label": `Resize ${q.title ?? q.property}`,
                            onMouseDown: (Ee) => {
                              Ee.preventDefault(), Ee.stopPropagation();
                              const ln = xe[P] ?? q.width, zn = ln ? parseFloat(ln) : 96;
                              he(P, Ee.clientX, Number.isFinite(zn) ? zn : 96);
                            },
                            onMouseMove: (Ee) => {
                              k.current?.key === P && de(Ee.clientX);
                            },
                            onMouseUp: be,
                            onMouseLeave: () => {
                              k.current?.key === P && be();
                            }
                          }
                        )
                      ]
                    },
                    P
                  );
                }),
                pe && /* @__PURE__ */ t("th", { className: ge.header, scope: "col", children: "Actions" })
              ] }),
              Lr && /* @__PURE__ */ t("tr", { children: vt.map(({ key: P, column: q }) => {
                if (!ir(q, u)) return /* @__PURE__ */ t("td", { className: ge.filterCell }, P);
                const _e = J.get(q.property ?? "");
                return /* @__PURE__ */ w("td", { className: ge.filterCell, children: [
                  /* @__PURE__ */ w("label", { className: ge.visuallyHidden, htmlFor: `df-${q.property}`, children: [
                    "Filter ",
                    q.title ?? q.property
                  ] }),
                  /* @__PURE__ */ t(
                    "select",
                    {
                      id: `df-${q.property}`,
                      className: ge.filterSelect,
                      value: _e?.operator ?? aa(q.type ?? "string"),
                      onChange: (ve) => De(q.property ?? "", { ..._e, operator: ve.target.value }),
                      "aria-label": `${q.title ?? q.property} operator`,
                      children: Ir.filter((ve) => ve !== "Custom").map((ve) => /* @__PURE__ */ t("option", { value: ve, children: ve }, ve))
                    }
                  ),
                  /* @__PURE__ */ t(
                    "input",
                    {
                      className: ge.filterInput,
                      value: _e?.value ?? "",
                      onChange: (ve) => De(q.property ?? "", { ..._e, value: ve.target.value }),
                      placeholder: `Filter ${q.title ?? q.property}`,
                      "aria-label": `${q.title ?? q.property} value`
                    }
                  )
                ] }, P);
              }) })
            ] }),
            /* @__PURE__ */ w("tbody", { children: [
              Ge === "__new__" && /* @__PURE__ */ w("tr", { className: ge.editRow, children: [
                vt.map(({ key: P, column: q }) => /* @__PURE__ */ t("td", { className: ge.editCell, children: q.property && /* @__PURE__ */ t(
                  "input",
                  {
                    className: ge.editInput,
                    type: q.type === "number" ? "number" : q.type === "boolean" ? "checkbox" : "text",
                    checked: q.type === "boolean" ? !!Je[q.property] : void 0,
                    value: q.type === "boolean" ? void 0 : String(Je[q.property] ?? ""),
                    onChange: (_e) => V((ve) => ({
                      ...ve,
                      [q.property]: q.type === "boolean" ? _e.target.checked : _e.target.value
                    })),
                    "aria-label": `${q.title ?? q.property} (new)`
                  }
                ) }, P)),
                pe && /* @__PURE__ */ w("td", { className: ge.editCell, children: [
                  /* @__PURE__ */ t("button", { type: "button", className: ge.commandButton, onClick: () => Mt(), children: "Save" }),
                  /* @__PURE__ */ t("button", { type: "button", className: ge.commandButton, onClick: it, children: "Cancel" })
                ] })
              ] }),
              rt.map((P) => {
                if (P.type === "group" && P.group) {
                  const ht = je.has(P.group.key);
                  return /* @__PURE__ */ t("tr", { className: ge.groupRow, children: /* @__PURE__ */ t("td", { colSpan: vt.length + (pe ? 1 : 0), className: ge.groupCell, children: /* @__PURE__ */ w(
                    "button",
                    {
                      type: "button",
                      className: ge.groupToggle,
                      "aria-expanded": ht,
                      onClick: () => Ne(P.group.key),
                      children: [
                        /* @__PURE__ */ t("span", { "aria-hidden": "true", children: ht ? "▼" : "▶" }),
                        P.group.title,
                        ": ",
                        P.group.display,
                        " (",
                        P.group.count,
                        ")"
                      ]
                    }
                  ) }) }, `group-${P.group.key}`);
                }
                const q = P.row, _e = r(q), ve = (_ ?? []).includes(_e), ot = Ge != null && Ge === String(_e);
                return /* @__PURE__ */ w(
                  "tr",
                  {
                    className: [
                      K || b !== "None" ? ge.clickable : "",
                      ve ? ge.selected : "",
                      ot ? ge.editRow : ""
                    ].filter(Boolean).join(" "),
                    "aria-selected": b !== "None" ? ve : void 0,
                    onClick: K || b !== "None" ? (ht) => {
                      Va(ht.target) || (fe(q), ae(q));
                    } : void 0,
                    children: [
                      vt.map(({ key: ht, column: Ee }) => /* @__PURE__ */ t(
                        "td",
                        {
                          className: Br(Ee),
                          style: Ee.frozen ? { left: te[ht] } : void 0,
                          children: ot && Ee.property ? /* @__PURE__ */ t(
                            "input",
                            {
                              className: ge.editInput,
                              type: Ee.type === "number" ? "number" : Ee.type === "boolean" ? "checkbox" : "text",
                              checked: Ee.type === "boolean" ? !!Je[Ee.property] : void 0,
                              value: Ee.type === "boolean" ? void 0 : String(Je[Ee.property] ?? ""),
                              onChange: (ln) => V((zn) => ({
                                ...zn,
                                [Ee.property]: Ee.type === "boolean" ? ln.target.checked : ln.target.value
                              })),
                              "aria-label": `${Ee.title ?? Ee.property} (edit)`
                            }
                          ) : Rr(Ee, q)
                        },
                        ht
                      )),
                      pe && /* @__PURE__ */ t("td", { className: ge.commandCell, children: ot ? /* @__PURE__ */ w(Me, { children: [
                        /* @__PURE__ */ t("button", { type: "button", className: ge.commandButton, onClick: () => Mt(q), children: "Save" }),
                        /* @__PURE__ */ t("button", { type: "button", className: ge.commandButton, onClick: it, children: "Cancel" })
                      ] }) : /* @__PURE__ */ w(Me, { children: [
                        M !== "None" && /* @__PURE__ */ t("button", { type: "button", className: ge.commandButton, onClick: () => Te(q), children: "Edit" }),
                        D && /* @__PURE__ */ t("button", { type: "button", className: ge.commandButton, onClick: () => D(q), children: "Delete" })
                      ] }) })
                    ]
                  },
                  _e
                );
              })
            ] })
          ]
        }
      ),
      $e.items.length === 0 && !T && /* @__PURE__ */ t("div", { className: ge.empty, children: j }),
      T && /* @__PURE__ */ t("div", { className: ge.loading, role: "status", children: "Loading…" })
    ] }),
    an && /* @__PURE__ */ t(
      Gn,
      {
        pageNumber: $e.pageNumber,
        pageSize: $e.pageSize,
        count: $e.total,
        pageSizeOptions: d,
        pageNumbersCount: S,
        showSummary: I,
        showPageSizeSelector: z,
        ariaLabel: Dn ? "Pagination (bottom)" : "Pagination",
        onPageChange: F,
        onPageSizeChange: W
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
  emptyMessage: l = "No records found",
  emptyTemplate: u,
  loadingTemplate: a,
  isLoading: i = !1,
  showPageSizeSelector: h = !0,
  className: x,
  ariaLabel: d = "Data list"
}) {
  const [S, $] = Y(1), [I, z] = Y(n), b = e.length, _ = Math.max(1, Math.ceil(b / I)), g = Math.min(Math.max(1, S), _), m = ke(() => {
    const p = (g - 1) * I;
    return e.slice(p, p + I);
  }, [e, g, I]), N = o ? pn.grid : pn.stacked;
  return /* @__PURE__ */ w("div", { className: [pn.wrap, x].filter(Boolean).join(" "), "aria-label": d, children: [
    i && a != null ? a : b === 0 ? u ?? /* @__PURE__ */ t("div", { className: pn.empty, children: l }) : /* @__PURE__ */ t("div", { className: N, children: m.map((p, y) => /* @__PURE__ */ t("div", { className: pn.item, children: s ? s(p, y) : String(p) }, y)) }),
    /* @__PURE__ */ t(
      Gn,
      {
        pageNumber: g,
        pageSize: I,
        count: b,
        pageSizeOptions: r,
        showPageSizeSelector: h,
        onPageChange: $,
        onPageSizeChange: (p) => {
          z(p), $(1);
        }
      }
    )
  ] });
}
const Qa = "_label_11cq1_1", el = {
  label: Qa
}, Q0 = He(
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
}, eb = He(function({ size: n = "md", invalid: r = !1, className: o, ...s }, l) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: l,
      className: [Kn.input, Kn[n], r ? Kn.invalid : null, o].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...s
    }
  );
}), cl = "_checkbox_fkb13_1", il = {
  checkbox: cl
}, tb = He(function({ className: n, ...r }, o) {
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
}, ul = He(function({ className: n, ...r }, o) {
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
  const l = Xe(), u = ce(null), [a, i] = Y(!1), h = () => {
    u.current = window.setTimeout(() => i(!0), o);
  }, x = () => {
    u.current !== null && (window.clearTimeout(u.current), u.current = null), i(!1);
  };
  Se(() => {
    if (!a) return;
    const S = ($) => {
      $.key === "Escape" && x();
    };
    return window.addEventListener("keydown", S), () => window.removeEventListener("keydown", S);
  }, [a]);
  const d = er(n) ? zr(
    n,
    {
      "aria-describedby": [
        n.props["aria-describedby"],
        a ? l : null
      ].filter((S) => typeof S == "string").join(" ") || void 0
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
        d,
        a && /* @__PURE__ */ w(
          "span",
          {
            role: "tooltip",
            id: l,
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
const yl = "_dialog_1kllc_1", vl = "_sm_1kllc_30", xl = "_md_1kllc_34", wl = "_lg_1kllc_38", kl = "_header_1kllc_42", $l = "_title_1kllc_51", Nl = "_description_1kllc_58", Sl = "_close_1kllc_65", Dl = "_body_1kllc_84", zl = "_footer_1kllc_90", Pt = {
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
  footer: zl
};
function rb({
  open: e,
  onClose: n,
  title: r,
  description: o,
  children: s,
  footer: l,
  size: u = "md",
  className: a
}) {
  const i = ce(null), h = Xe(), x = Xe();
  return Se(() => {
    const d = i.current;
    d && (e && !d.open ? d.showModal() : !e && d.open && d.close());
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
        l && /* @__PURE__ */ t("footer", { className: Pt.footer, children: l })
      ]
    }
  );
}
const Cl = "_viewport_15dkh_1", Ml = "_topLeft_15dkh_13", Ol = "_topRight_15dkh_20", Il = "_bottomLeft_15dkh_25", jl = "_toast_15dkh_30", Tl = "_leaving_15dkh_61", El = "_info_15dkh_77", Al = "_success_15dkh_82", Ll = "_warning_15dkh_87", Rl = "_danger_15dkh_92", Bl = "_content_15dkh_97", Pl = "_title_15dkh_102", ql = "_description_15dkh_125", Fl = "_dismiss_15dkh_132", Kl = "_actions_15dkh_151", Hl = "_action_15dkh_151", Wl = "_cancel_15dkh_159", Ul = "_progress_15dkh_195", mt = {
  viewport: Cl,
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
  const e = Cr(Er);
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
  const [l, u] = Y([]), [a, i] = Y(!1), h = ce([]), x = ce(/* @__PURE__ */ new Map()), d = ce(!1), S = ce(0), $ = (O) => {
    d.current = O, i(O);
  }, I = H((O) => {
    const f = x.current.get(O);
    f && (window.clearTimeout(f.timeoutId), f.remaining = Math.max(0, f.remaining - (Date.now() - f.startedAt)));
  }, []), z = H((O) => {
    const f = x.current.get(O);
    f && (window.clearTimeout(f.timeoutId), x.current.delete(O));
  }, []), b = H(
    (O) => {
      z(O), u((f) => {
        const D = f.filter((T) => T.id !== O);
        return h.current = D, D;
      });
    },
    [z]
  ), _ = H(
    (O) => {
      const f = h.current.find((D) => D.id === O);
      !f || f.leaving || (f.onAutoClose?.(), b(O));
    },
    [b]
  ), g = H(
    (O) => {
      const f = x.current.get(O);
      !f || f.remaining <= 0 || (f.startedAt = Date.now(), f.timeoutId = window.setTimeout(() => _(O), f.remaining));
    },
    [_]
  ), m = H(() => {
    d.current || x.current.forEach((O, f) => I(f)), $(!0);
  }, [I]), N = H(() => {
    x.current.forEach((O, f) => g(f)), $(!1);
  }, [g]);
  Se(() => {
    if (!o) return;
    const O = () => {
      document.hidden ? m() : N();
    };
    return document.addEventListener("visibilitychange", O), () => document.removeEventListener("visibilitychange", O);
  }, [o, m, N]);
  const p = H(
    (O) => {
      const f = h.current.find((D) => D.id === O);
      !f || f.leaving || (f.onDismiss?.(), u((D) => {
        const T = D.map((j) => j.id === O ? { ...j, leaving: !0 } : j);
        return h.current = T, T;
      }), window.setTimeout(() => b(O), Vl));
    },
    [b]
  ), y = H(
    (O) => {
      if (O.durationMs <= 0) return;
      const f = {
        remaining: O.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      x.current.set(O.id, f), d.current || g(O.id);
    },
    [g]
  ), c = H(
    (O) => {
      const f = h.current.find((T) => T.id === O.id), D = {
        id: O.id ?? ++S.current,
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
      u((T) => {
        const j = f ? T.map((A) => A.id === D.id ? { ...D, leaving: !1 } : A) : [...T, D];
        return h.current = j, j;
      }), f && z(D.id), y(D);
    },
    [n, r, y, z]
  ), v = ke(() => ({ toast: c }), [c]), C = ke(
    () => Array.from(/* @__PURE__ */ new Set([r, ...l.map((O) => O.position)])),
    [r, l]
  ), M = o ? m : void 0, E = o ? N : void 0;
  return /* @__PURE__ */ w(Er.Provider, { value: v, children: [
    e,
    C.map((O) => /* @__PURE__ */ t(
      "div",
      {
        className: [
          mt.viewport,
          mt[Xl[O]],
          s
        ].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: M,
        onMouseLeave: E,
        children: l.filter((f) => f.position === O).map((f) => /* @__PURE__ */ w(
          "div",
          {
            role: f.tone === "danger" ? "alert" : "status",
            "data-paused": a ? "true" : "false",
            "data-clickable": f.closeOnClick ? "true" : "false",
            className: [
              mt.toast,
              mt[f.tone],
              f.leaving ? mt.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: f.closeOnClick ? () => p(f.id) : void 0,
            children: [
              /* @__PURE__ */ w("div", { className: mt.content, children: [
                /* @__PURE__ */ t("div", { className: mt.title, children: f.title }),
                f.description && /* @__PURE__ */ t("div", { className: mt.description, children: f.description }),
                (f.action || f.cancel) && /* @__PURE__ */ w("div", { className: mt.actions, children: [
                  f.action && /* @__PURE__ */ t(
                    "button",
                    {
                      type: "button",
                      className: mt.action,
                      onClick: () => {
                        f.action?.onClick?.(), p(f.id);
                      },
                      children: f.action.label
                    }
                  ),
                  f.cancel && /* @__PURE__ */ t(
                    "button",
                    {
                      type: "button",
                      className: mt.cancel,
                      onClick: () => {
                        f.cancel?.onClick?.(), p(f.id);
                      },
                      children: f.cancel.label
                    }
                  )
                ] })
              ] }),
              f.dismissible && /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  className: mt.dismiss,
                  onClick: () => p(f.id),
                  "aria-label": "Dismiss notification",
                  children: "×"
                }
              ),
              f.showProgress && f.durationMs > 0 && /* @__PURE__ */ t(
                "div",
                {
                  className: mt.progress,
                  style: { animationDuration: `${f.durationMs}ms` }
                }
              )
            ]
          },
          f.id
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
  children: l,
  dismissible: u = !1,
  onDismiss: a,
  className: i
}) {
  const [h, x] = Y(!1);
  if (h)
    return null;
  const d = () => {
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
          l && /* @__PURE__ */ t("div", { className: Ot.body, children: l })
        ] }),
        u && /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: Ot.dismiss,
            onClick: d,
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
const mc = "_row_15qsh_1", gc = "_gapXs_15qsh_7", bc = "_gapSm_15qsh_11", yc = "_gapMd_15qsh_15", vc = "_gapLg_15qsh_19", xc = "_gapXl_15qsh_23", wc = "_start_15qsh_27", kc = "_center_15qsh_31", $c = "_end_15qsh_35", Nc = "_stretch_15qsh_39", Sc = "_baseline_15qsh_43", Dc = "_noWrap_15qsh_99", zc = "_wrapReverse_15qsh_103", Cc = "_gapRowXs_15qsh_107", Mc = "_gapRowSm_15qsh_111", Oc = "_gapRowMd_15qsh_115", Ic = "_gapRowLg_15qsh_119", jc = "_gapRowXl_15qsh_123", Zt = {
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
  wrapReverse: zc,
  gapRowXs: Cc,
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
  className: l,
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
        l
      ].filter(Boolean).join(" "),
      style: x,
      ...a
    }
  );
}
const Rc = "_column_2ch3a_1", Bc = "_Size1_2ch3a_6", Pc = "_Size2_2ch3a_7", qc = "_Size3_2ch3a_8", Fc = "_Size4_2ch3a_9", Kc = "_Size5_2ch3a_10", Hc = "_Size6_2ch3a_11", Wc = "_Size7_2ch3a_12", Uc = "_Size8_2ch3a_13", Vc = "_Size9_2ch3a_14", Xc = "_Size10_2ch3a_15", Gc = "_Size11_2ch3a_16", Yc = "_Size12_2ch3a_17", Zc = "_Offset1_2ch3a_18", Jc = "_Offset2_2ch3a_19", Qc = "_Offset3_2ch3a_20", ei = "_Offset4_2ch3a_21", ti = "_Offset5_2ch3a_22", ni = "_Offset6_2ch3a_23", ri = "_Offset7_2ch3a_24", oi = "_Offset8_2ch3a_25", si = "_Offset9_2ch3a_26", ai = "_Offset10_2ch3a_27", li = "_Offset11_2ch3a_28", ci = "_smSize1_2ch3a_31", ii = "_smSize2_2ch3a_32", di = "_smSize3_2ch3a_33", ui = "_smSize4_2ch3a_34", fi = "_smSize5_2ch3a_35", _i = "_smSize6_2ch3a_36", pi = "_smSize7_2ch3a_37", hi = "_smSize8_2ch3a_38", mi = "_smSize9_2ch3a_39", gi = "_smSize10_2ch3a_40", bi = "_smSize11_2ch3a_41", yi = "_smSize12_2ch3a_42", vi = "_smOffset1_2ch3a_43", xi = "_smOffset2_2ch3a_44", wi = "_smOffset3_2ch3a_45", ki = "_smOffset4_2ch3a_46", $i = "_smOffset5_2ch3a_47", Ni = "_smOffset6_2ch3a_48", Si = "_smOffset7_2ch3a_49", Di = "_smOffset8_2ch3a_50", zi = "_smOffset9_2ch3a_51", Ci = "_smOffset10_2ch3a_52", Mi = "_smOffset11_2ch3a_53", Oi = "_mdSize1_2ch3a_57", Ii = "_mdSize2_2ch3a_58", ji = "_mdSize3_2ch3a_59", Ti = "_mdSize4_2ch3a_60", Ei = "_mdSize5_2ch3a_61", Ai = "_mdSize6_2ch3a_62", Li = "_mdSize7_2ch3a_63", Ri = "_mdSize8_2ch3a_64", Bi = "_mdSize9_2ch3a_65", Pi = "_mdSize10_2ch3a_66", qi = "_mdSize11_2ch3a_67", Fi = "_mdSize12_2ch3a_68", Ki = "_mdOffset1_2ch3a_69", Hi = "_mdOffset2_2ch3a_70", Wi = "_mdOffset3_2ch3a_71", Ui = "_mdOffset4_2ch3a_72", Vi = "_mdOffset5_2ch3a_73", Xi = "_mdOffset6_2ch3a_74", Gi = "_mdOffset7_2ch3a_75", Yi = "_mdOffset8_2ch3a_76", Zi = "_mdOffset9_2ch3a_77", Ji = "_mdOffset10_2ch3a_78", Qi = "_mdOffset11_2ch3a_79", ed = "_lgSize1_2ch3a_83", td = "_lgSize2_2ch3a_84", nd = "_lgSize3_2ch3a_85", rd = "_lgSize4_2ch3a_86", od = "_lgSize5_2ch3a_87", sd = "_lgSize6_2ch3a_88", ad = "_lgSize7_2ch3a_89", ld = "_lgSize8_2ch3a_90", cd = "_lgSize9_2ch3a_91", id = "_lgSize10_2ch3a_92", dd = "_lgSize11_2ch3a_93", ud = "_lgSize12_2ch3a_94", fd = "_lgOffset1_2ch3a_95", _d = "_lgOffset2_2ch3a_96", pd = "_lgOffset3_2ch3a_97", hd = "_lgOffset4_2ch3a_98", md = "_lgOffset5_2ch3a_99", gd = "_lgOffset6_2ch3a_100", bd = "_lgOffset7_2ch3a_101", yd = "_lgOffset8_2ch3a_102", vd = "_lgOffset9_2ch3a_103", xd = "_lgOffset10_2ch3a_104", wd = "_lgOffset11_2ch3a_105", kd = "_xlSize1_2ch3a_109", $d = "_xlSize2_2ch3a_110", Nd = "_xlSize3_2ch3a_111", Sd = "_xlSize4_2ch3a_112", Dd = "_xlSize5_2ch3a_113", zd = "_xlSize6_2ch3a_114", Cd = "_xlSize7_2ch3a_115", Md = "_xlSize8_2ch3a_116", Od = "_xlSize9_2ch3a_117", Id = "_xlSize10_2ch3a_118", jd = "_xlSize11_2ch3a_119", Td = "_xlSize12_2ch3a_120", Ed = "_xlOffset1_2ch3a_121", Ad = "_xlOffset2_2ch3a_122", Ld = "_xlOffset3_2ch3a_123", Rd = "_xlOffset4_2ch3a_124", Bd = "_xlOffset5_2ch3a_125", Pd = "_xlOffset6_2ch3a_126", qd = "_xlOffset7_2ch3a_127", Fd = "_xlOffset8_2ch3a_128", Kd = "_xlOffset9_2ch3a_129", Hd = "_xlOffset10_2ch3a_130", Wd = "_xlOffset11_2ch3a_131", Ud = "_xxlSize1_2ch3a_136", Vd = "_xxlSize2_2ch3a_137", Xd = "_xxlSize3_2ch3a_138", Gd = "_xxlSize4_2ch3a_139", Yd = "_xxlSize5_2ch3a_140", Zd = "_xxlSize6_2ch3a_141", Jd = "_xxlSize7_2ch3a_142", Qd = "_xxlSize8_2ch3a_143", eu = "_xxlSize9_2ch3a_144", tu = "_xxlSize10_2ch3a_145", nu = "_xxlSize11_2ch3a_146", ru = "_xxlSize12_2ch3a_147", ou = "_xxlOffset1_2ch3a_148", su = "_xxlOffset2_2ch3a_149", au = "_xxlOffset3_2ch3a_150", lu = "_xxlOffset4_2ch3a_151", cu = "_xxlOffset5_2ch3a_152", iu = "_xxlOffset6_2ch3a_153", du = "_xxlOffset7_2ch3a_154", uu = "_xxlOffset8_2ch3a_155", fu = "_xxlOffset9_2ch3a_156", _u = "_xxlOffset10_2ch3a_157", pu = "_xxlOffset11_2ch3a_158", hu = "_xxlOrderFirst_2ch3a_159", mu = "_xxlOrderLast_2ch3a_160", gu = "_orderFirst_2ch3a_163", bu = "_orderLast_2ch3a_164", yu = "_smOrderFirst_2ch3a_167", vu = "_smOrderLast_2ch3a_168", xu = "_mdOrderFirst_2ch3a_172", wu = "_mdOrderLast_2ch3a_173", ku = "_lgOrderFirst_2ch3a_177", $u = "_lgOrderLast_2ch3a_178", Nu = "_xlOrderFirst_2ch3a_182", Su = "_xlOrderLast_2ch3a_183", hn = {
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
  smOffset9: zi,
  smOffset10: Ci,
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
  xlSize6: zd,
  xlSize7: Cd,
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
], zu = {
  first: "orderFirst",
  last: "orderLast"
};
function Cu(e) {
  return typeof e == "number" ? { order: e } : {};
}
function ib({ className: e, style: n, ...r }) {
  const o = [hn.column], s = { ...n };
  for (const [v, C, M, E] of Du) {
    const O = r[C], f = r[M], D = r[E];
    if (O != null && o.push(hn[`${v}Size${O}`]), f != null && f > 0 && o.push(hn[`${v}Offset${f}`]), D === "first" || D === "last") {
      const T = `${v}${zu[D]}`;
      hn[T] && o.push(hn[T]);
    } else D != null && Object.assign(s, Cu(D));
  }
  const {
    size: l,
    offset: u,
    sizeSm: a,
    offsetSm: i,
    sizeMd: h,
    offsetMd: x,
    sizeLg: d,
    offsetLg: S,
    sizeXl: $,
    offsetXl: I,
    sizeXxl: z,
    offsetXxl: b,
    order: _,
    orderSm: g,
    orderMd: m,
    orderLg: N,
    orderXl: p,
    orderXxl: y,
    ...c
  } = r;
  return /* @__PURE__ */ t("div", { className: [...o, e].filter(Boolean).join(" "), style: s, ...c });
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
  justify: l,
  className: u,
  style: a,
  ...i
}) {
  const h = Lu(o), x = e === "horizontal" ? n ? "row-reverse" : "row" : n ? "column-reverse" : "column", d = {
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
        l != null ? Jt[`justify-${l}`] : null,
        h ? Jt[h] : null,
        u
      ].filter(Boolean).join(" "),
      style: d,
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
  className: l,
  children: u,
  ...a
}) {
  return Se(() => {
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
          l
        ].flat().filter(Boolean).join(" "),
        ...a,
        children: u
      }
    )
  ] });
}
function ub({ className: e, children: n, ...r }) {
  const o = [], s = [], l = [], u = [], a = [];
  return Pr.forEach(n, (i) => {
    if (!er(i)) {
      l.push(i);
      return;
    }
    i.type === Wu ? o.push(i) : i.type === Fu ? s.push(i) : i.type === Qu ? (i.props.position === "right" ? a : u).push(i) : l.push(i);
  }), /* @__PURE__ */ w("div", { className: [_r.layout, e].filter(Boolean).join(" "), ...r, children: [
    o,
    /* @__PURE__ */ w("div", { className: _r.row, children: [
      u,
      l,
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
  size: l = "md",
  className: u,
  ...a
}) {
  const i = n > 0 ? Math.min(n, Math.max(0, e)) : 0, h = n > 0 ? i / n * 100 : 0;
  if (s === "circular") {
    const x = typeof l == "string", d = 2, S = 10.5, $ = 2 * Math.PI * S, I = $ * (o ? 0.75 : 1), z = o ? 0 : $ * (1 - h / 100);
    return /* @__PURE__ */ w(
      "svg",
      {
        width: x ? void 0 : l,
        height: x ? void 0 : l,
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
          x ? kt[`circular-${l}`] : null,
          o ? kt.indeterminate : null,
          u
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ t("circle", { className: kt.track, cx: 12, cy: 12, r: S, strokeWidth: d }),
          /* @__PURE__ */ t(
            "circle",
            {
              className: kt.fill,
              cx: 12,
              cy: 12,
              r: S,
              strokeWidth: d,
              strokeDasharray: `${I} ${$}`,
              strokeDashoffset: z
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
        typeof l == "string" ? kt[`linear-${l}`] : null,
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
  const [s, l] = Y(() => (typeof document < "u" ? document.documentElement.dataset.theme : void 0) === "dark" ? !0 : e === "dark");
  Se(() => {
    document.documentElement.dataset.theme = s ? "dark" : "light";
  }, []);
  const u = (a) => {
    const i = a.target.checked;
    l(i), document.documentElement.dataset.theme = i ? "dark" : "light", n?.(i ? "dark" : "light");
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
  className: l
}) {
  const u = ke(() => e ? Sf(e) : "?", [e]), a = ke(() => e ? Df(e) : Bn[0], [e]), i = n ? /* @__PURE__ */ t("img", { className: Qt.image, src: n, alt: r ?? e ?? "" }) : /* @__PURE__ */ t("span", { "aria-hidden": "true", className: Qt.initials, style: { background: a }, children: u });
  return /* @__PURE__ */ w(
    "span",
    {
      className: [
        Qt.avatar,
        Qt[o],
        s ? Qt[s] : null,
        l
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
const zf = "_root_9j3lx_1", Cf = "_left_9j3lx_6", Mf = "_right_9j3lx_7", Of = "_panel_9j3lx_12", If = "_bottom_9j3lx_20", jf = "_tabList_9j3lx_24", Tf = "_underline_9j3lx_53", Ef = "_pills_9j3lx_72", Af = "_tab_9j3lx_24", Lf = "_active_9j3lx_113", Rf = "_disabled_9j3lx_139", It = {
  root: zf,
  left: Cf,
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
  position: l = "top",
  className: u
}) {
  const a = Xe(), i = ce(null), [h, x] = Y(r ?? e[0]?.key ?? ""), d = n ?? h, S = l === "left" || l === "right", $ = (b) => {
    x(b), o?.(b);
  }, I = (b) => {
    const _ = e.filter((N) => !N.disabled), g = _.findIndex((N) => N.key === d);
    let m = -1;
    b.key === "ArrowRight" || S && b.key === "ArrowDown" ? m = (g + 1) % _.length : b.key === "ArrowLeft" || S && b.key === "ArrowUp" ? m = (g - 1 + _.length) % _.length : b.key === "Home" ? m = 0 : b.key === "End" && (m = _.length - 1), m >= 0 && (b.preventDefault(), i.current?.querySelector(
      `[data-tab-key="${CSS.escape(_[m]?.key ?? "")}"]`
    )?.focus(), $(_[m]?.key ?? ""));
  }, z = e.find((b) => b.key === d);
  return /* @__PURE__ */ w("div", { className: [It.root, It[l], u].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ t(
      "div",
      {
        ref: i,
        role: "tablist",
        className: [It.tabList, It[s], It[l]].filter(Boolean).join(" "),
        onKeyDown: I,
        children: e.map((b) => {
          const _ = b.key === d;
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
    z && /* @__PURE__ */ t(
      "div",
      {
        role: "tabpanel",
        id: `${a}-panel-${z.key}`,
        "aria-labelledby": `${a}-tab-${z.key}`,
        className: It.panel,
        children: z.content
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
  className: l
}) {
  const u = Xe(), [a, i] = Y(o ?? []), h = r ?? a, x = (d) => {
    const S = h.includes(d) ? h.filter(($) => $ !== d) : n ? [...h, d] : [d];
    i(S), s?.(S);
  };
  return /* @__PURE__ */ t("div", { className: [jt.root, l].filter(Boolean).join(" "), children: e.map((d) => {
    const S = h.includes(d.key), $ = `${u}-panel-${d.key}`, I = `${u}-trigger-${d.key}`;
    return /* @__PURE__ */ w("div", { className: jt.item, children: [
      /* @__PURE__ */ t("h3", { className: jt.heading, children: /* @__PURE__ */ w(
        "button",
        {
          type: "button",
          id: I,
          "aria-expanded": S,
          "aria-controls": $,
          disabled: d.disabled,
          className: [
            jt.trigger,
            d.disabled ? jt.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => x(d.key),
          children: [
            /* @__PURE__ */ t("span", { className: jt.title, children: d.title }),
            /* @__PURE__ */ t("span", { className: [jt.chevron, S ? jt.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" })
          ]
        }
      ) }),
      /* @__PURE__ */ t(
        "div",
        {
          id: $,
          role: "region",
          "aria-labelledby": I,
          hidden: !S,
          className: jt.content,
          children: d.content
        }
      )
    ] }, d.key);
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
}, bb = He(function({ size: n = "md", resize: r = "none", className: o, ...s }, l) {
  return /* @__PURE__ */ t(
    "textarea",
    {
      ref: l,
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
}, yb = He(function({ variant: n = "body-1", as: r, className: o, children: s, ...l }, u) {
  const a = r ?? r_[n];
  return /* @__PURE__ */ t(
    a,
    {
      ref: u,
      className: [pr.typography, pr[n], o].filter(Boolean).join(" "),
      ...l,
      children: s
    }
  );
}), o_ = "_root_dvw01_1", s_ = "_trigger_dvw01_9", a_ = "_invalid_dvw01_40", l_ = "_placeholder_dvw01_46", c_ = "_label_dvw01_53", i_ = "_chevron_dvw01_59", d_ = "_chevronOpen_dvw01_69", u_ = "_menu_dvw01_73", f_ = "_option_dvw01_88", __ = "_disabled_dvw01_99", p_ = "_active_dvw01_103", h_ = "_selected_dvw01_104", m_ = "_header_dvw01_114", g_ = "_xs_dvw01_121", b_ = "_sm_dvw01_127", y_ = "_md_dvw01_133", v_ = "_lg_dvw01_139", x_ = "_xl_dvw01_145", at = {
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
  size: l = "md",
  invalid: u = !1,
  disabled: a = !1,
  className: i,
  ...h
}) {
  const x = Xe(), d = `${x}-listbox`, S = ce(null), $ = ce(null), [I, z] = Y(r), [b, _] = Y(!1), g = n ?? I, m = e.map((f, D) => f.label === "" || f.disabled ? -1 : D).filter((f) => f >= 0), N = e.findIndex((f) => f.value === g), [p, y] = Y(
    () => m.includes(0) ? 0 : m[0] ?? -1
  ), c = H(() => {
    if (a) return;
    const f = N >= 0 && m.includes(N) ? N : m[0];
    y(f ?? -1), _(!0);
  }, [a, N, m]), v = H(() => {
    _(!1), $.current?.focus();
  }, []);
  Se(() => {
    if (!b) return;
    const f = (D) => {
      S.current && !S.current.contains(D.target) && _(!1);
    };
    return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, [b]);
  const C = (f) => {
    z(f), o?.(f), _(!1), $.current?.focus();
  }, M = (f) => {
    if (m.length === 0) return;
    const D = m.includes(p) ? m.indexOf(p) : 0, T = m[(D + f + m.length) % m.length];
    T != null && y(T);
  }, E = (f) => {
    if (!b) {
      f.key === "ArrowDown" && (f.preventDefault(), c());
      return;
    }
    switch (f.key) {
      case "ArrowDown":
        f.preventDefault(), M(1);
        break;
      case "ArrowUp":
        f.preventDefault(), M(-1);
        break;
      case "Home":
        f.preventDefault(), m[0] != null && y(m[0]);
        break;
      case "End":
        f.preventDefault(), m[m.length - 1] != null && y(m[m.length - 1]);
        break;
      case "Enter":
      case " ":
        f.preventDefault(), p >= 0 && e[p] && m.includes(p) && C(e[p]?.value ?? "");
        break;
      case "Escape":
        f.preventDefault(), v();
        break;
      case "Tab":
        _(!1);
        break;
    }
  }, O = e.find((f) => f.value === g);
  return /* @__PURE__ */ w("div", { ref: S, className: [at.root, i].filter(Boolean).join(" "), onKeyDown: E, children: [
    /* @__PURE__ */ w(
      "button",
      {
        ref: $,
        type: "button",
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-expanded": b,
        "aria-controls": d,
        "aria-invalid": u || void 0,
        disabled: a,
        className: [
          at.trigger,
          at[l],
          b ? at.open : null,
          u ? at.invalid : null
        ].filter(Boolean).join(" "),
        onClick: () => b ? _(!1) : c(),
        ...h,
        children: [
          /* @__PURE__ */ t("span", { className: O ? at.label : at.placeholder, children: O ? O.label : s }),
          /* @__PURE__ */ t(
            "span",
            {
              className: [at.chevron, b ? at.chevronOpen : null].filter(Boolean).join(" "),
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
        id: d,
        role: "listbox",
        "aria-activedescendant": p >= 0 ? `${x}-option-${p}` : void 0,
        className: at.menu,
        children: e.map(
          (f, D) => f.label === "" ? /* @__PURE__ */ t("div", { className: at.header, role: "presentation", children: f.value }, f.value) : /* @__PURE__ */ t(
            "div",
            {
              id: `${x}-option-${D}`,
              role: "option",
              "aria-selected": f.value === g,
              "aria-disabled": f.disabled || void 0,
              className: [
                at.option,
                D === p ? at.active : null,
                f.value === g ? at.selected : null,
                f.disabled ? at.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => {
                f.disabled || C(f.value);
              },
              onMouseEnter: () => {
                !f.disabled && f.label !== "" && y(D);
              },
              children: f.label
            },
            f.value
          )
        )
      }
    )
  ] });
}
const k_ = "_root_1ap80_1", $_ = "_wrap_1ap80_9", N_ = "_input_1ap80_26", S_ = "_invalid_1ap80_31", D_ = "_clear_1ap80_57", z_ = "_menu_1ap80_82", C_ = "_option_1ap80_97", M_ = "_disabled_1ap80_108", O_ = "_active_1ap80_112", I_ = "_empty_1ap80_122", j_ = "_xs_1ap80_128", T_ = "_sm_1ap80_135", E_ = "_md_1ap80_142", A_ = "_lg_1ap80_149", L_ = "_xl_1ap80_156", $t = {
  root: k_,
  wrap: $_,
  input: N_,
  invalid: S_,
  clear: D_,
  menu: z_,
  option: C_,
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
  placeholder: l = "",
  size: u = "md",
  invalid: a = !1,
  disabled: i = !1,
  filter: h = R_,
  className: x,
  ...d
}) {
  const S = Xe(), $ = `${S}-listbox`, I = ce(null), z = ce(null), [b, _] = Y(r), [g, m] = Y(!1), N = n ?? b, p = ke(
    () => N.trim() === "" ? [...e] : e.filter((A) => h(A, N)),
    [e, N, h]
  ), y = p.map((A, X) => A.disabled ? -1 : X).filter((A) => A >= 0), [c, v] = Y(-1), C = (A) => {
    _(A), o?.(A);
  }, M = (A) => {
    C(A.label), s?.(A.value, A), m(!1);
  }, E = (A) => {
    if (y.length === 0) return;
    const X = y.includes(c) ? y.indexOf(c) : A === 1 ? -1 : 0, K = y[(X + A + y.length) % y.length];
    K != null && v(K);
  }, O = (A) => {
    i || (C(A.target.value), m(!0), v(-1));
  }, f = () => {
    i || N !== "" && m(!0);
  }, D = (A) => {
    I.current && !I.current.contains(A.relatedTarget) && m(!1);
  }, T = (A) => {
    if (!i)
      switch (A.key) {
        case "ArrowDown":
          A.preventDefault(), g ? E(1) : (m(!0), v(y[0] ?? -1));
          break;
        case "ArrowUp":
          A.preventDefault(), g && E(-1);
          break;
        case "Enter":
          A.preventDefault(), g && c >= 0 && p[c] && M(p[c]);
          break;
        case "Escape":
          A.preventDefault(), m(!1);
          break;
        case "Tab":
          g && c >= 0 && p[c] && M(p[c]), m(!1);
          break;
      }
  }, j = () => {
    C(""), v(-1), m(!0), z.current?.focus();
  };
  return /* @__PURE__ */ w("div", { ref: I, className: [$t.root, x].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ w("div", { className: [$t.wrap, $t[u], a ? $t.invalid : null].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ t(
        "input",
        {
          ref: z,
          type: "text",
          role: "combobox",
          "aria-expanded": g,
          "aria-controls": $,
          "aria-autocomplete": "list",
          "aria-activedescendant": g && c >= 0 ? `${S}-option-${c}` : void 0,
          "aria-invalid": a || void 0,
          disabled: i,
          value: N,
          placeholder: l,
          className: $t.input,
          onChange: O,
          onFocus: f,
          onBlur: D,
          onKeyDown: T,
          ...d
        }
      ),
      N !== "" && !i && /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: $t.clear,
          "aria-label": "Clear",
          onClick: j,
          children: "×"
        }
      )
    ] }),
    g && /* @__PURE__ */ t("div", { id: $, role: "listbox", className: $t.menu, children: p.length === 0 ? /* @__PURE__ */ t("div", { className: $t.empty, children: "No matches" }) : p.map((A, X) => /* @__PURE__ */ t(
      "div",
      {
        id: `${S}-option-${X}`,
        role: "option",
        "aria-selected": !1,
        "aria-disabled": A.disabled || void 0,
        className: [
          $t.option,
          X === c ? $t.active : null,
          A.disabled ? $t.disabled : null
        ].filter(Boolean).join(" "),
        onClick: () => {
          A.disabled || M(A);
        },
        onMouseDown: (K) => {
          K.preventDefault(), A.disabled || M(A);
        },
        onMouseEnter: () => {
          A.disabled || v(X);
        },
        children: A.label
      },
      A.value
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
  className: l,
  style: u,
  ...a
}) {
  const i = Xe(), [h, x] = Y(() => {
    const p = r;
    return p == null ? [] : Array.isArray(p) ? [...p] : [p];
  }), d = n == null ? h : Array.isArray(n) ? n : [n], S = e.findIndex((p) => !p.disabled), [$, I] = Y(() => S >= 0 ? S : 0), z = ce(""), b = ce(null), _ = (p) => {
    x(p), s?.(o ? p : p[0] ?? "");
  }, g = e.map((p, y) => p.disabled ? -1 : y).filter((p) => p >= 0), m = (p) => {
    const y = e[p];
    if (!(!y || y.disabled))
      if (I(p), o) {
        const c = d.includes(y.value) ? d.filter((v) => v !== y.value) : [...d, y.value];
        _(c);
      } else
        _([y.value]);
  }, N = (p) => {
    if (g.length === 0) return;
    const y = g.includes($) ? $ : g[0];
    let c = -1;
    if (p.key === "ArrowDown")
      c = g[(g.indexOf(y) + 1) % g.length];
    else if (p.key === "ArrowUp")
      c = g[(g.indexOf(y) - 1 + g.length) % g.length];
    else if (p.key === "Home")
      c = g[0];
    else if (p.key === "End")
      c = g[g.length - 1];
    else if (p.key === "Enter" || p.key === " ") {
      p.preventDefault(), m(y);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(p.key)) {
      p.preventDefault();
      const v = (z.current + p.key).toLowerCase();
      z.current = v, b.current && clearTimeout(b.current), b.current = setTimeout(() => {
        z.current = "";
      }, 500);
      const C = [...g, ...g], M = g.indexOf(y) + 1, E = C.slice(M).find(
        (O) => e[O]?.label.toLowerCase().startsWith(v)
      );
      E != null && I(E);
      return;
    }
    c >= 0 && (p.preventDefault(), I(c), o || _([e[c]?.value ?? ""]));
  };
  return /* @__PURE__ */ t(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": o || void 0,
      "aria-activedescendant": e[$] ? `${i}-option-${$}` : void 0,
      style: u,
      className: [mn.box, l].filter(Boolean).join(" "),
      onKeyDown: N,
      ...a,
      children: e.map((p, y) => {
        const c = d.includes(p.value), v = y === $;
        return /* @__PURE__ */ t(
          "div",
          {
            id: `${i}-option-${y}`,
            role: "option",
            "aria-selected": c,
            "aria-disabled": p.disabled || void 0,
            className: [
              mn.option,
              c ? mn.selected : null,
              v ? mn.active : null,
              p.disabled ? mn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => m(y),
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
  name: l,
  className: u
}) {
  const [a, i] = Y(() => [...r]), h = n ?? a, x = (d, S) => {
    const $ = S ? [...h, d] : h.filter((I) => I !== d);
    i($), o?.($);
  };
  return /* @__PURE__ */ w("fieldset", { className: [Ut.group, u].filter(Boolean).join(" "), children: [
    s != null && /* @__PURE__ */ t("legend", { className: Ut.legend, children: s }),
    /* @__PURE__ */ t("ul", { className: Ut.list, children: e.map((d) => {
      const S = h.includes(d.value);
      return /* @__PURE__ */ t(
        "li",
        {
          className: [Ut.item, d.disabled ? Ut.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ w("label", { className: Ut.label, children: [
            /* @__PURE__ */ t(
              "input",
              {
                type: "checkbox",
                className: Ut.checkbox,
                name: l,
                value: d.value,
                checked: S,
                disabled: d.disabled,
                onChange: ($) => x(d.value, $.target.checked)
              }
            ),
            /* @__PURE__ */ t("span", { children: d.label })
          ] })
        },
        d.value
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
  name: l,
  className: u
}) {
  const [a, i] = Y(r), h = n ?? a, x = (d) => {
    i(d), o?.(d);
  };
  return /* @__PURE__ */ w("fieldset", { className: [Vt.group, u].filter(Boolean).join(" "), children: [
    s != null && /* @__PURE__ */ t("legend", { className: Vt.legend, children: s }),
    /* @__PURE__ */ t("ul", { className: Vt.list, children: e.map((d) => {
      const S = d.value === h;
      return /* @__PURE__ */ t(
        "li",
        {
          className: [Vt.item, d.disabled ? Vt.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ w("label", { className: Vt.label, children: [
            /* @__PURE__ */ t(
              "input",
              {
                type: "radio",
                className: Vt.radio,
                name: l,
                value: d.value,
                checked: S,
                disabled: d.disabled,
                onChange: ($) => x($.target.value)
              }
            ),
            /* @__PURE__ */ t("span", { children: d.label })
          ] })
        },
        d.value
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
  className: l,
  ...u
}) {
  const [a, i] = Y(
    r ?? e[0]?.value
  ), h = n ?? a, x = (d) => {
    i(d), o?.(d);
  };
  return /* @__PURE__ */ t(
    "div",
    {
      role: "group",
      className: [gn.bar, gn[s], l].filter(Boolean).join(" "),
      ...u,
      children: e.map((d) => {
        const S = d.value === h;
        return /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            "aria-pressed": S,
            disabled: d.disabled,
            className: [
              gn.option,
              S ? gn.selected : null,
              d.disabled ? gn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => x(d.value),
            children: d.label
          },
          d.value
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
}, Sb = He(
  function({
    pressed: n,
    defaultPressed: r = !1,
    onChange: o,
    size: s = "md",
    fullWidth: l = !1,
    className: u,
    type: a = "button",
    ...i
  }, h) {
    const [x, d] = Y(r), S = n ?? x, $ = () => {
      const I = !S;
      d(I), o?.(I);
    };
    return /* @__PURE__ */ t(
      "button",
      {
        ref: h,
        type: a,
        "aria-pressed": S,
        className: [
          jn.toggle,
          jn[s],
          S ? jn.pressed : null,
          l ? jn.fullWidth : null,
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
  className: l,
  ...u
}) {
  const a = Xe(), i = `${a}-menu`, h = ce(null), x = ce(null), [d, S] = Y(!1), [$, I] = Y(-1), z = r.map((p, y) => p.disabled ? -1 : y).filter((p) => p >= 0), b = H(() => {
    s || (I(z[0] ?? -1), S(!0));
  }, [s, z]), _ = H(() => {
    S(!1), x.current?.focus();
  }, []);
  Se(() => {
    if (!d) return;
    const p = (y) => {
      h.current && !h.current.contains(y.target) && S(!1);
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, [d]);
  const g = (p) => {
    const y = r[p];
    !y || y.disabled || (y.onClick?.(), S(!1), x.current?.focus());
  }, m = (p) => {
    if (z.length === 0) return;
    const y = z.includes($) ? z.indexOf($) : p === 1 ? -1 : 0, c = z[(y + p + z.length) % z.length];
    c != null && I(c);
  }, N = (p) => {
    if (!d) {
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
        p.preventDefault(), z[0] != null && I(z[0]);
        break;
      case "End":
        p.preventDefault(), z[z.length - 1] != null && I(z[z.length - 1]);
        break;
      case "Enter":
      case " ":
        p.preventDefault(), $ >= 0 && g($);
        break;
      case "Escape":
        p.preventDefault(), _();
        break;
      case "Tab":
        S(!1);
        break;
    }
  };
  return /* @__PURE__ */ w(
    "div",
    {
      ref: h,
      className: [Tt.root, Tt[o], l].filter(Boolean).join(" "),
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
            "aria-expanded": d,
            "aria-controls": i,
            "aria-label": "More actions",
            disabled: s,
            onClick: () => d ? S(!1) : b(),
            children: "▾"
          }
        ),
        d && /* @__PURE__ */ t(
          "div",
          {
            id: i,
            role: "menu",
            "aria-activedescendant": $ >= 0 ? `${a}-item-${$}` : void 0,
            className: Tt.menu,
            ...u,
            children: r.map((p, y) => /* @__PURE__ */ t(
              "div",
              {
                id: `${a}-item-${y}`,
                role: "menuitem",
                "aria-disabled": p.disabled || void 0,
                className: [
                  Tt.item,
                  y === $ ? Tt.active : null,
                  p.danger ? Tt.danger : null,
                  p.disabled ? Tt.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => g(y),
                onMouseEnter: () => {
                  p.disabled || I(y);
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
const D1 = "_textbox_1eb0k_1", z1 = "_invalid_1eb0k_31", C1 = "_xs_1eb0k_37", M1 = "_sm_1eb0k_43", O1 = "_md_1eb0k_49", I1 = "_lg_1eb0k_55", j1 = "_xl_1eb0k_61", Wn = {
  textbox: D1,
  invalid: z1,
  xs: C1,
  sm: M1,
  md: O1,
  lg: I1,
  xl: j1
}, zb = He(function({ size: n = "md", invalid: r = !1, className: o, type: s = "text", ...l }, u) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: u,
      type: s,
      className: [Wn.textbox, Wn[n], r ? Wn.invalid : null, o].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...l
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
}, Cb = He(function({
  size: n = "md",
  invalid: r = !1,
  className: o,
  disabled: s,
  showLabel: l = "Show password",
  hideLabel: u = "Hide password",
  ...a
}, i) {
  const [h, x] = Y(!1);
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
        "aria-label": h ? u : l,
        disabled: s,
        onClick: () => x((d) => !d),
        children: /* @__PURE__ */ t(Ye, { name: h ? "eye-off" : "eye", size: 16 })
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
const Mb = He(function({
  size: n = "md",
  invalid: r = !1,
  mask: o,
  value: s,
  defaultValue: l = "",
  onChange: u,
  className: a,
  onKeyDown: i,
  ...h
}, x) {
  const [d, S] = Y(l ?? ""), $ = s !== void 0, I = $ ? s ?? "" : d, z = (g) => {
    const m = hr(g, o);
    return $ || S(m), u?.(m), m;
  };
  return /* @__PURE__ */ t(
    "input",
    {
      ref: x,
      type: "text",
      value: I,
      onChange: (g) => {
        z(g.target.value);
      },
      onKeyDown: (g) => {
        if (g.key === "Backspace") {
          const m = g.currentTarget.selectionStart ?? I.length, N = I[m - 1];
          if (N !== void 0 && !/\d/.test(N)) {
            g.preventDefault();
            const p = I.replace(/\D/g, "");
            z(hr(p.slice(0, -1), o));
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
const Ob = He(function({
  size: n = "md",
  invalid: r = !1,
  className: o,
  disabled: s,
  value: l,
  defaultValue: u,
  onChange: a,
  min: i,
  max: h,
  step: x = 1,
  incrementLabel: d = "Increment",
  decrementLabel: S = "Decrement",
  onBlur: $,
  onKeyDown: I,
  ...z
}, b) {
  const [_, g] = Y(u != null ? String(u) : ""), m = l !== void 0, N = m ? l == null ? "" : String(l) : _, p = (E) => {
    m || g(E), a?.(Yn(E));
  }, y = (E) => {
    m || g(String(E)), a?.(E);
  }, c = (E) => {
    s || y(ip(N, E, i, h, x));
  }, v = (E) => {
    p(lp(E.target.value));
  }, C = (E) => {
    E.key === "ArrowUp" ? (E.preventDefault(), c(1)) : E.key === "ArrowDown" && (E.preventDefault(), c(-1)), I?.(E);
  }, M = (E) => {
    const O = Yn(N);
    O === null ? (m || g(""), a?.(null)) : y(Ar(cp(O, i, x), i, h)), $?.(E);
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
        onChange: v,
        onKeyDown: C,
        onBlur: M,
        className: [qt.input, qt[n], r ? qt.invalid : null, o].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...z
      }
    ),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: [qt.button, qt.up].join(" "),
        "aria-label": d,
        disabled: s,
        onClick: () => c(1),
        children: /* @__PURE__ */ t(Ye, { name: "chevron-up", size: 14 })
      }
    ),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: [qt.button, qt.down].join(" "),
        "aria-label": S,
        disabled: s,
        onClick: () => c(-1),
        children: /* @__PURE__ */ t(Ye, { name: "chevron-down", size: 14 })
      }
    )
  ] });
}), we = {}, dp = [
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
  const o = e / 255, s = n / 255, l = r / 255, u = Math.max(o, s, l), a = Math.min(o, s, l), i = u - a;
  let h = 0;
  return i !== 0 && (u === o ? h = (s - l) / i % 6 : u === s ? h = (l - o) / i + 2 : h = (o - s) / i + 4, h *= 60, h < 0 && (h += 360)), {
    h,
    s: u === 0 ? 0 : i / u,
    v: u
  };
}
function en({ h: e, s: n, v: r }) {
  const o = r * n, s = e / 60, l = o * (1 - Math.abs(s % 2 - 1));
  let u = 0, a = 0, i = 0;
  s < 1 ? (u = o, a = l) : s < 2 ? (u = l, a = o) : s < 3 ? (a = o, i = l) : s < 4 ? (a = l, i = o) : s < 5 ? (u = l, i = o) : (u = o, i = l);
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
  showButton: l = !1,
  showArrow: u = !0,
  disabled: a = !1,
  invalid: i = !1,
  placeholder: h = "",
  size: x = "md",
  tabIndex: d = 0,
  className: S,
  onChange: $,
  onValueChange: I,
  onOpen: z,
  onClose: b
}) => {
  const _ = ce(null), g = ce(null), m = ce(null), N = ce(null), p = ce(null), y = Xe(), c = ce(null), v = ke(
    () => _p(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [C, M] = Y(!1), [E, O] = Y(null), f = E ?? v, D = ke(() => fp(f), [f]), T = H(
    (V) => {
      const k = mr(V);
      $?.(k), I?.(k);
    },
    [$, I]
  ), j = H(
    (V, k) => {
      O(V), k && !l && T(V);
    },
    [l, T]
  ), A = H(() => {
    M(!1), O(null), b?.(), g.current?.focus();
  }, [b]), X = H(() => {
    a || (O(v), M(!0), z?.());
  }, [a, v, z]), K = H(() => {
    C ? A() : X();
  }, [C, A, X]), re = H(
    (V, k) => {
      const B = m.current;
      if (!B) return D;
      const U = B.getBoundingClientRect(), se = bt((V - U.left) / U.width, 0, 1), te = bt(1 - (k - U.top) / U.height, 0, 1);
      return { h: D.h, s: se, v: te };
    },
    [D]
  ), Z = H(
    (V, k) => {
      if (!k) return 0;
      const B = k.getBoundingClientRect();
      return bt((V - B.left) / B.width, 0, 1);
    },
    []
  ), J = (V) => {
    if (a) return;
    V.preventDefault(), V.currentTarget.setPointerCapture(V.pointerId), c.current = "sat";
    const k = re(V.clientX, V.clientY);
    j({ ...en(k), a: f.a }, !0);
  }, Q = (V) => {
    if (c.current !== "sat") return;
    V.preventDefault();
    const k = re(V.clientX, V.clientY);
    j({ ...en(k), a: f.a }, !0);
  }, G = (V) => {
    if (a) return;
    V.preventDefault(), V.currentTarget.setPointerCapture(V.pointerId), c.current = "hue";
    const k = Z(V.clientX, N.current);
    j({ ...en({ ...D, h: k * 360 }), a: f.a }, !0);
  }, F = (V) => {
    if (c.current !== "hue") return;
    V.preventDefault();
    const k = Z(V.clientX, N.current);
    j({ ...en({ ...D, h: k * 360 }), a: f.a }, !0);
  }, L = (V) => {
    if (a) return;
    V.preventDefault(), V.currentTarget.setPointerCapture(V.pointerId), c.current = "alpha";
    const k = Z(V.clientX, p.current);
    j({ ...f, a: k }, !0);
  }, oe = (V) => {
    if (c.current !== "alpha") return;
    V.preventDefault();
    const k = Z(V.clientX, p.current);
    j({ ...f, a: k }, !0);
  }, ie = () => {
    c.current = null;
  }, ee = H(
    (V, k) => {
      const B = { h: D.h, s: bt(D.s + V, 0, 1), v: bt(D.v + k, 0, 1) };
      j({ ...en(B), a: f.a }, !0);
    },
    [D, f.a, j]
  ), ue = H(
    (V) => {
      const k = (D.h + V + 360) % 360;
      j({ ...en({ ...D, h: k }), a: f.a }, !0);
    },
    [D, f.a, j]
  ), me = H(
    (V) => {
      j({ ...f, a: bt(f.a + V, 0, 1) }, !0);
    },
    [f, j]
  ), xe = (V) => {
    switch (V.key) {
      case "ArrowLeft":
        V.preventDefault(), ee(-0.05, 0);
        break;
      case "ArrowRight":
        V.preventDefault(), ee(0.05, 0);
        break;
      case "ArrowUp":
        V.preventDefault(), ee(0, 0.05);
        break;
      case "ArrowDown":
        V.preventDefault(), ee(0, -0.05);
        break;
      case "Escape":
        V.preventDefault(), A();
        break;
    }
  }, Re = (V, k) => {
    switch (V.key) {
      case "ArrowLeft":
        V.preventDefault(), k === "hue" ? ue(-6) : me(-0.05);
        break;
      case "ArrowRight":
        V.preventDefault(), k === "hue" ? ue(6) : me(0.05);
        break;
      case "Escape":
        V.preventDefault(), A();
        break;
    }
  }, Ie = (V, k) => {
    if (V === "hex") {
      const te = Zn(k);
      te && j({ ...te, a: f.a }, !0);
      return;
    }
    const B = k.replace(/[^\d.]/g, ""), U = Number.parseFloat(B);
    if (Number.isNaN(U)) return;
    if (V === "a") {
      const te = B.includes(".") ? bt(U, 0, 1) : bt(U / 100, 0, 1);
      j({ ...f, a: te }, !0);
      return;
    }
    const se = { r: 255, g: 255, b: 255 };
    j({ ...f, [V]: bt(U, 0, se[V]) }, !0);
  }, Ue = () => {
    E && (T(E), O(null), M(!1), b?.(), g.current?.focus());
  };
  Se(() => {
    if (!C) return;
    const V = (k) => {
      _.current && !_.current.contains(k.target) && A();
    };
    return document.addEventListener("mousedown", V), () => document.removeEventListener("mousedown", V);
  }, [C, A]), Se(() => {
    if (!C) return;
    const V = (k) => {
      k.key === "Escape" && A();
    };
    return document.addEventListener("keydown", V), () => document.removeEventListener("keydown", V);
  }, [C, A]);
  const ye = x === "xs" ? we.dtColorpickerTriggerXs : x === "sm" ? we.dtColorpickerTriggerSm : x === "lg" ? we.dtColorpickerTriggerLg : x === "xl" ? we.dtColorpickerTriggerXl : we.dtColorpickerTriggerMd, Ve = mr(f), Ze = up(f), Pe = { x: D.s * 100, y: (1 - D.v) * 100 }, Ge = D.h / 360 * 100, qe = f.a * 100, Je = /* @__PURE__ */ w("div", { className: we.dtColorpickerPanel, children: [
    n && /* @__PURE__ */ t(
      "div",
      {
        ref: m,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(D.s * 100),
        "aria-valuetext": `Saturation ${Math.round(D.s * 100)}%, value ${Math.round(D.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": a || void 0,
        tabIndex: a ? -1 : d,
        className: we.dtSaturationPicker,
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${D.h}, 100%, 50%)`
        },
        onKeyDown: xe,
        onPointerDown: J,
        onPointerMove: Q,
        onPointerUp: ie,
        children: /* @__PURE__ */ t(
          "span",
          {
            className: we.dtSaturationIndicator,
            style: { left: `${Pe.x}%`, top: `${Pe.y}%` },
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
        "aria-valuenow": Math.round(D.h),
        "aria-disabled": a || void 0,
        tabIndex: a ? -1 : d,
        className: we.dtHuePicker,
        onKeyDown: (V) => Re(V, "hue"),
        onPointerDown: G,
        onPointerMove: F,
        onPointerUp: ie,
        children: /* @__PURE__ */ t(
          "span",
          {
            className: we.dtHueIndicator,
            style: { left: `${Ge}%` },
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
        "aria-valuenow": Math.round(qe),
        "aria-disabled": a || void 0,
        tabIndex: a ? -1 : d,
        className: we.dtAlphaPicker,
        style: {
          background: `repeating-conic-gradient(var(--dt-color-border) 0% 25%, var(--dt-color-surface) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${D.h}, 100%, 50%))`
        },
        onKeyDown: (V) => Re(V, "alpha"),
        onPointerDown: L,
        onPointerMove: oe,
        onPointerUp: ie,
        children: /* @__PURE__ */ t(
          "span",
          {
            className: we.dtAlphaIndicator,
            style: { left: `${qe}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    r && /* @__PURE__ */ w("div", { className: we.dtColorpickerRgba, children: [
      /* @__PURE__ */ w("label", { className: we.dtColorpickerRgbaField, children: [
        /* @__PURE__ */ t("span", { className: we.dtColorpickerRgbaLabel, children: "Hex" }),
        /* @__PURE__ */ t(
          "input",
          {
            type: "text",
            maxLength: 7,
            className: we.dtColorpickerRgbaInput,
            "aria-label": "Hex",
            value: Ze,
            onChange: (V) => Ie("hex", V.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ w("label", { className: we.dtColorpickerRgbaField, children: [
        /* @__PURE__ */ t("span", { className: we.dtColorpickerRgbaLabel, children: "R" }),
        /* @__PURE__ */ t(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: we.dtColorpickerRgbaInput,
            "aria-label": "Red",
            value: f.r,
            onChange: (V) => Ie("r", V.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ w("label", { className: we.dtColorpickerRgbaField, children: [
        /* @__PURE__ */ t("span", { className: we.dtColorpickerRgbaLabel, children: "G" }),
        /* @__PURE__ */ t(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: we.dtColorpickerRgbaInput,
            "aria-label": "Green",
            value: f.g,
            onChange: (V) => Ie("g", V.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ w("label", { className: we.dtColorpickerRgbaField, children: [
        /* @__PURE__ */ t("span", { className: we.dtColorpickerRgbaLabel, children: "B" }),
        /* @__PURE__ */ t(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: we.dtColorpickerRgbaInput,
            "aria-label": "Blue",
            value: f.b,
            onChange: (V) => Ie("b", V.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ w("label", { className: we.dtColorpickerRgbaField, children: [
        /* @__PURE__ */ t("span", { className: we.dtColorpickerRgbaLabel, children: "A" }),
        /* @__PURE__ */ t(
          "input",
          {
            type: "text",
            inputMode: "decimal",
            maxLength: 4,
            className: we.dtColorpickerRgbaInput,
            "aria-label": "Alpha",
            value: Math.round(f.a * 100),
            onChange: (V) => Ie("a", V.target.value)
          }
        )
      ] })
    ] }),
    o && /* @__PURE__ */ t("div", { className: we.dtColorpickerPalette, children: s.map((V) => /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        role: "button",
        className: we.dtColorpickerSwatch,
        "aria-label": V,
        "aria-disabled": a || void 0,
        tabIndex: a ? -1 : d,
        style: { backgroundColor: V },
        onClick: () => {
          const k = Zn(V);
          l ? j({ ...k, a: f.a }, !1) : (O(null), T({ ...k, a: f.a }), M(!1), b?.(), g.current?.focus());
        }
      },
      V
    )) }),
    l && /* @__PURE__ */ t("div", { className: we.dtColorpickerFooter, children: /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: we.dtColorpickerOk,
        onClick: Ue,
        children: "OK"
      }
    ) })
  ] });
  return /* @__PURE__ */ w(
    "div",
    {
      ref: _,
      className: [
        we.dtColorpicker,
        C ? we.dtColorpickerOpen : null,
        i ? we.dtColorpickerInvalid : null,
        S
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ w(
          "button",
          {
            ref: g,
            type: "button",
            role: "button",
            className: [we.dtColorpickerTrigger, ye].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": C,
            "aria-controls": y,
            "aria-label": "Pick a color",
            "aria-disabled": a || void 0,
            disabled: a,
            tabIndex: d,
            onClick: K,
            onKeyDown: (V) => {
              V.key === "Escape" && C && (V.preventDefault(), A());
            },
            children: [
              /* @__PURE__ */ t(
                "span",
                {
                  className: we.dtColorpickerValue,
                  style: { backgroundColor: Ve },
                  "aria-hidden": "true"
                }
              ),
              h && /* @__PURE__ */ t("span", { className: we.dtColorpickerText, children: h }),
              u && /* @__PURE__ */ t("span", { className: we.dtColorpickerChevron, "aria-hidden": "true", children: /* @__PURE__ */ t(Ye, { name: "chevron-down", size: 14 }) })
            ]
          }
        ),
        C && /* @__PURE__ */ t(
          "div",
          {
            id: y,
            role: "dialog",
            "aria-label": "Choose color",
            className: we.dtColorpickerPopup,
            children: Je
          }
        )
      ]
    }
  );
}, ze = {}, pp = 42;
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
  const r = Number(n[1]), o = Number(n[2]), s = Number(n[3]), l = n[4] != null ? Number(n[4]) : 0, u = n[5] != null ? Number(n[5]) : 0, a = n[6] != null ? Number(n[6]) : 0;
  if (o < 1 || o > 12 || s < 1 || s > 31) return null;
  const i = new Date(r, o - 1, s, l, u, a);
  return i.getFullYear() !== r || i.getMonth() !== o - 1 || i.getDate() !== s ? null : { year: r, month: o, day: s, hour: l, minute: u, second: a };
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
  const r = new Date(e.year, e.month - 1 + n, 1), o = r.getFullYear(), s = r.getMonth() + 1, l = new Date(o, s, 0).getDate();
  return {
    year: o,
    month: s,
    day: Math.min(e.day, l),
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
  let s = "", l = 0;
  for (; l < n.length; ) {
    let u = !1;
    for (const i of mp)
      if (n.startsWith(i, l)) {
        s += br[i](e, o, r), l += i.length, u = !0;
        break;
      }
    if (u) continue;
    const a = n[l];
    if (gp.includes(a)) {
      s += br[a](e, o, r), l += 1;
      continue;
    }
    s += a, l += 1;
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
const jb = He(function({
  size: n = "md",
  invalid: r = !1,
  value: o,
  defaultValue: s,
  format: l = "yyyy-MM-dd",
  min: u,
  max: a,
  showTime: i = !1,
  showButton: h = !0,
  allowClear: x = !1,
  inline: d = !1,
  disabledDates: S,
  locale: $ = "en-US",
  onChange: I,
  onValueChange: z,
  onOpen: b,
  onClose: _,
  disabled: g,
  readOnly: m,
  placeholder: N,
  ariaLabel: p,
  triggerLabel: y,
  clearLabel: c,
  tabIndex: v,
  className: C,
  onBlur: M,
  onKeyDown: E,
  ...O
}, f) {
  const D = ce(null), T = ce(null), j = ce(null), A = ce(null), X = Xe(), K = o !== void 0, [re, Z] = Y(
    () => s != null ? En(yn(s, l) ?? Ft(), l, $) : ""
  ), [J, Q] = Y(!1), [G, F] = Y(null), [L, oe] = Y(() => {
    const R = o !== void 0 ? o ?? "" : s ?? "";
    if (R) {
      const le = yn(R, l);
      if (le) return le;
    }
    return Ft();
  }), ie = ke(() => u ? Jn(u) : null, [u]), ee = ke(() => a ? Jn(a) : null, [a]), ue = ke(
    () => new Set(S ?? []),
    [S]
  ), me = ke(() => {
    const R = K ? o ?? "" : re;
    return R ? yn(R, l) : null;
  }, [o, re, K, l]), xe = H(
    (R) => {
      const le = pt(R);
      return !!(ue.has(le) || ie && le < pt(ie) || ee && le > pt(ee));
    },
    [ue, ie, ee]
  ), Re = H(
    (R) => {
      if (!xe(R)) return R;
      for (let le = 1; le <= 366; le += 1) {
        const Ce = Et(R, le);
        if (!xe(Ce)) return Ce;
        const Ne = Et(R, -le);
        if (!xe(Ne)) return Ne;
      }
      return R;
    },
    [xe]
  ), Ie = H(
    (R) => {
      K || Z(R ? En(R, l, $) : "");
      const le = R ? hp(R, i) : "";
      I?.(le), z?.(le);
    },
    [K, l, $, i, I, z]
  ), Ue = H(
    (R) => {
      T.current = R, typeof f == "function" ? f(R) : f && (f.current = R);
    },
    [f]
  ), ye = H(() => {
    Q(!1), F(null), _?.(), d || j.current?.focus();
  }, [d, _]), Ve = H(() => {
    if (g) return;
    const R = me ?? Ft();
    F(R), oe(Re(R)), Q(!0), b?.();
  }, [g, me, Re, b]), Ze = H(() => {
    J ? ye() : Ve();
  }, [J, ye, Ve]), Pe = H((R) => {
    A.current?.querySelector(
      `[data-date="${pt(R)}"]`
    )?.focus();
  }, []), Ge = H(
    (R) => {
      if (xe(R)) return;
      const le = G ?? me, Ne = {
        ...i ? {
          hour: le?.hour ?? 0,
          minute: le?.minute ?? 0,
          second: le?.second ?? 0
        } : { hour: 0, minute: 0, second: 0 },
        year: R.year,
        month: R.month,
        day: R.day
      };
      F(Ne), i || (Ie(Ne), ye());
    },
    [xe, G, me, i, Ie, ye]
  ), qe = H(
    (R, le) => {
      F((Ce) => {
        const Ne = Ce ?? me ?? Ft(), et = Math.min(R === "hour" ? 23 : 59, Math.max(0, Ne[R] + le));
        return { ...Ne, [R]: et };
      });
    },
    [me]
  ), Je = H(
    (R, le) => {
      const Ce = le.replace(/\D/g, ""), Ne = Ce === "" ? 0 : Number(Ce), Te = R === "hour" ? 23 : 59;
      F((et) => ({ ...et ?? me ?? Ft(), [R]: Math.min(Te, Ne) }));
    },
    [me]
  ), V = H(() => {
    G && (Ie(G), ye());
  }, [G, Ie, ye]), k = H(() => {
    if (J) return;
    const R = yn(re, l);
    Ie(R ? vp(R, ie, ee) : null);
  }, [J, re, l, ie, ee, Ie]), B = (R) => {
    const le = R.target.value;
    K || Z(le), J && F(null);
  }, U = (R) => {
    R.key === "Enter" ? (R.preventDefault(), J ? G && (Ie(G), ye()) : k()) : R.key === "Escape" ? J && (R.preventDefault(), ye()) : R.key === "ArrowDown" && !J ? (R.preventDefault(), Ve()) : R.key === "Tab" && J && Q(!1), E?.(R);
  }, se = (R) => {
    k(), M?.(R);
  }, te = (R) => {
    let le = null;
    switch (R.key) {
      case "ArrowLeft":
        le = Et(L, -1), R.preventDefault();
        break;
      case "ArrowRight":
        le = Et(L, 1), R.preventDefault();
        break;
      case "ArrowUp":
        le = Et(L, -7), R.preventDefault();
        break;
      case "ArrowDown":
        le = Et(L, 7), R.preventDefault();
        break;
      case "Home":
        le = Et(L, -gr(L)), R.preventDefault();
        break;
      case "End":
        le = Et(L, 6 - gr(L)), R.preventDefault();
        break;
      case "PageUp":
        le = Tn(L, R.shiftKey ? -12 : -1), R.preventDefault();
        break;
      case "PageDown":
        le = Tn(L, R.shiftKey ? 12 : 1), R.preventDefault();
        break;
      case "Enter":
      case " ":
        R.preventDefault(), Ge(L);
        break;
      case "Escape":
        R.preventDefault(), ye();
        break;
      case "Tab":
        Q(!1);
        break;
    }
    if (le) {
      const Ce = Re(le);
      oe(Ce), setTimeout(() => Pe(Ce), 0);
    }
  };
  Se(() => {
    if (!J) return;
    const R = (le) => {
      D.current && !D.current.contains(le.target) && ye();
    };
    return document.addEventListener("mousedown", R), () => document.removeEventListener("mousedown", R);
  }, [J, ye]), Se(() => {
    if (!J) return;
    const R = (le) => {
      le.key === "Escape" && ye();
    };
    return document.addEventListener("keydown", R), () => document.removeEventListener("keydown", R);
  }, [J, ye]);
  const pe = () => {
    K || Z(""), I?.(""), z?.(""), T.current?.focus();
  }, $e = J && G ? En(G, l, $) : K ? o ? En(yn(o, l) ?? Ft(), l, $) : "" : re, Be = K ? !!o : re.length > 0, je = d || J, rt = { year: L.year, month: L.month }, vt = new Date(rt.year, rt.month - 1, 1).getDay(), ne = {
    year: rt.year,
    month: rt.month,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0
  }, De = [];
  for (let R = 0; R < pp; R += 1)
    De.push(Et(ne, R - vt));
  const W = G ? pt(G) : me ? pt(me) : null, ae = pt(Ft()), fe = `${rt.year}-${yt(rt.month)}`, he = ke(
    () => new Intl.DateTimeFormat($, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    }),
    [$]
  ), de = new Intl.DateTimeFormat($, {
    month: "long",
    year: "numeric"
  }).format(new Date(rt.year, rt.month - 1, 1)), be = Array.from(
    { length: 7 },
    (R, le) => new Intl.DateTimeFormat($, { weekday: "short" }).format(
      new Date(2021, 0, 3 + le)
    )
  ), Ae = n === "xs" ? ze.dtDatepickerInputXs : n === "sm" ? ze.dtDatepickerInputSm : n === "lg" ? ze.dtDatepickerInputLg : n === "xl" ? ze.dtDatepickerInputXl : ze.dtDatepickerInputMd, Fe = /* @__PURE__ */ w(
    "div",
    {
      className: ze.dtDatepickerCalendar,
      "aria-label": p ?? "Date picker",
      children: [
        /* @__PURE__ */ w("div", { className: ze.dtDatepickerHeader, children: [
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: ze.dtDatepickerNav,
              "aria-label": "Previous month",
              onClick: () => {
                const R = Re(Tn(L, -1));
                oe(R), setTimeout(() => Pe(R), 0);
              },
              children: /* @__PURE__ */ t(Ye, { name: "chevron-left", size: 16 })
            }
          ),
          /* @__PURE__ */ t("span", { className: ze.dtDatepickerTitle, children: de }),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: ze.dtDatepickerNav,
              "aria-label": "Next month",
              onClick: () => {
                const R = Re(Tn(L, 1));
                oe(R), setTimeout(() => Pe(R), 0);
              },
              children: /* @__PURE__ */ t(Ye, { name: "chevron-right", size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ w(
          "div",
          {
            ref: A,
            role: "grid",
            className: ze.dtDatepickerGrid,
            onKeyDown: te,
            children: [
              /* @__PURE__ */ t("div", { role: "row", className: ze.dtDatepickerWeekRow, children: be.map((R) => /* @__PURE__ */ t(
                "div",
                {
                  role: "columnheader",
                  className: ze.dtDatepickerWeekday,
                  children: R
                },
                R
              )) }),
              Array.from({ length: 6 }, (R, le) => /* @__PURE__ */ t("div", { role: "row", className: ze.dtDatepickerRow, children: De.slice(le * 7, le * 7 + 7).map((Ce) => {
                const Ne = pt(Ce), Te = xe(Ce), et = Ne.startsWith(fe);
                return /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    role: "gridcell",
                    "data-date": Ne,
                    tabIndex: Ne === pt(L) ? 0 : -1,
                    "aria-selected": Ne === W || void 0,
                    "aria-disabled": Te || void 0,
                    "aria-label": he.format(
                      new Date(Ce.year, Ce.month - 1, Ce.day)
                    ),
                    className: [
                      ze.dtDatepickerDay,
                      et ? null : ze.dtDatepickerDayOutside,
                      Ne === ae ? ze.dtDatepickerDayToday : null,
                      Ne === W ? ze.dtDatepickerDaySelected : null,
                      Te ? ze.dtDatepickerDayDisabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => Ge(Ce),
                    onFocus: () => oe(Ce),
                    children: Ce.day
                  },
                  Ne
                );
              }) }, le))
            ]
          }
        ),
        i && /* @__PURE__ */ w("div", { className: ze.dtDatepickerTime, children: [
          xp.map((R) => /* @__PURE__ */ w("label", { className: ze.dtDatepickerTimeField, children: [
            /* @__PURE__ */ t("span", { className: ze.dtDatepickerTimeLabel, children: An(R) }),
            /* @__PURE__ */ w("div", { className: ze.dtDatepickerTimeControl, children: [
              /* @__PURE__ */ t(
                "input",
                {
                  className: ze.dtDatepickerTimeInput,
                  inputMode: "numeric",
                  "aria-label": An(R),
                  value: yt((G ?? me ?? Ft())[R]),
                  onChange: (le) => Je(R, le.target.value),
                  onKeyDown: (le) => {
                    le.key === "ArrowUp" ? (le.preventDefault(), qe(R, 1)) : le.key === "ArrowDown" ? (le.preventDefault(), qe(R, -1)) : le.key === "Enter" && (le.preventDefault(), V());
                  }
                }
              ),
              /* @__PURE__ */ w("span", { className: ze.dtDatepickerTimeButtons, children: [
                /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    "aria-label": `Increase ${An(R).toLowerCase()}`,
                    onClick: () => qe(R, 1),
                    children: /* @__PURE__ */ t(Ye, { name: "chevron-up", size: 11 })
                  }
                ),
                /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    "aria-label": `Decrease ${An(R).toLowerCase()}`,
                    onClick: () => qe(R, -1),
                    children: /* @__PURE__ */ t(Ye, { name: "chevron-down", size: 11 })
                  }
                )
              ] })
            ] })
          ] }, R)),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: ze.dtDatepickerOk,
              onClick: V,
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
      ref: D,
      className: [
        ze.dtDatepicker,
        d ? ze.dtDatepickerInline : null,
        C
      ].filter(Boolean).join(" "),
      children: [
        !d && /* @__PURE__ */ w(Me, { children: [
          /* @__PURE__ */ t(
            "input",
            {
              ref: Ue,
              type: "text",
              autoComplete: "off",
              value: $e,
              disabled: g,
              readOnly: m,
              placeholder: N,
              tabIndex: v,
              role: h ? void 0 : "combobox",
              "aria-label": p ?? "Date",
              "aria-haspopup": h ? void 0 : "dialog",
              "aria-expanded": h ? void 0 : je,
              "aria-controls": h ? void 0 : X,
              "aria-invalid": r || void 0,
              className: [
                ze.dtDatepickerInput,
                Ae,
                r ? ze.dtDatepickerInputInvalid : null
              ].filter(Boolean).join(" "),
              onChange: B,
              onKeyDown: U,
              onBlur: se,
              onClick: () => {
                h || Ze();
              },
              ...O
            }
          ),
          x && !g && Be && /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: [
                ze.dtDatepickerClear,
                h ? ze.dtDatepickerClearInset : null
              ].filter(Boolean).join(" "),
              "aria-label": c ?? "Clear",
              onClick: pe,
              children: /* @__PURE__ */ t(Ye, { name: "close", size: 14 })
            }
          ),
          h && /* @__PURE__ */ t(
            "button",
            {
              ref: j,
              type: "button",
              className: [
                ze.dtDatepickerTrigger,
                J ? ze.dtDatepickerTriggerOpen : null
              ].filter(Boolean).join(" "),
              "aria-label": y ?? "Open calendar",
              "aria-haspopup": "dialog",
              "aria-expanded": J,
              "aria-controls": X,
              disabled: g,
              onClick: Ze,
              children: /* @__PURE__ */ t(Ye, { name: "calendar", size: 16 })
            }
          )
        ] }),
        je && /* @__PURE__ */ t(
          "div",
          {
            id: X,
            role: d ? void 0 : "dialog",
            className: d ? void 0 : ze.dtDatepickerPopup,
            children: Fe
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
  clearLabel: l = "Clear",
  rateLabel: u = "Rate",
  tabIndex: a = 0,
  className: i,
  onChange: h,
  onValueChange: x
}) => {
  const [d, S] = Y(e), $ = H(
    (g) => Math.min(n, Math.max(1, g)),
    [n]
  ), I = H(
    (g) => {
      h?.(g), x?.(g);
    },
    [h, x]
  ), z = H(
    (g) => {
      r || o || (I(g), S(g));
    },
    [r, o, I]
  ), b = (g) => {
    if (r || o) return;
    const m = d > 0 ? d : 1;
    switch (g.key) {
      case "ArrowRight":
      case "ArrowUp":
        g.preventDefault(), z($(m + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        g.preventDefault(), z($(m - 1));
        break;
      case "Home":
        g.preventDefault(), z(1);
        break;
      case "End":
        g.preventDefault(), z(n);
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
            "aria-label": l,
            tabIndex: e === 0 ? a : -1,
            disabled: o,
            onClick: () => z(0),
            children: /* @__PURE__ */ t(Ye, { name: "ban", size: 16 })
          }
        ),
        _.map((g) => {
          const m = g <= e, N = g === (e > 0 ? e : d);
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
              onClick: () => z(g),
              onFocus: () => S(g),
              children: [
                /* @__PURE__ */ t("span", { className: Kt.dtRatingIconFilled, "aria-hidden": "true", children: /* @__PURE__ */ t(Ye, { name: "star", size: 20 }) }),
                /* @__PURE__ */ t("span", { className: Kt.dtRatingIconEmpty, "aria-hidden": "true", children: /* @__PURE__ */ t(Ye, { name: "star-outline", size: 20 }) })
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
  step: l = 1,
  range: u = !1,
  orientation: a = "horizontal",
  disabled: i = !1,
  label: h = "Value",
  minLabel: x = "Min",
  maxLabel: d = "Max",
  tabIndex: S = 0,
  className: $,
  onChange: I,
  onInput: z,
  onValueChange: b,
  onInputChange: _
}) => {
  const g = ce(null), m = ce(null), [N, p] = Y(null), y = N ?? e, c = ke(() => St(y, o, s), [y, o, s]), v = ke(
    () => St(u ? n : c, o, s),
    [u, n, c, o, s]
  ), C = ke(
    () => St(u ? Math.max(r, v) : c, o, s),
    [u, r, v, c, o, s]
  ), M = H(
    (L) => {
      const oe = s - o;
      return oe <= 0 ? 0 : (St(L, o, s) - o) / oe * 100;
    },
    [o, s]
  ), E = H(
    (L, oe) => {
      const ie = g.current;
      if (!ie) return o;
      const ee = ie.getBoundingClientRect();
      let ue;
      a === "vertical" ? ue = 1 - (oe - ee.top) / ee.height : ue = (L - ee.left) / ee.width;
      const me = o + St(ue, 0, 1) * (s - o);
      return l > 0 ? St(Math.round(me / l) * l, o, s) : St(me, o, s);
    },
    [o, s, l, a]
  ), O = H(
    (L) => {
      typeof L == "number" && p(L), I?.(L), b?.(L);
    },
    [I, b]
  ), f = H(
    (L) => {
      typeof L == "number" && p(L), z?.(L), _?.(L);
    },
    [z, _]
  ), D = H(
    (L, oe, ie) => {
      const ee = E(oe, ie);
      let ue;
      u ? L === "min" ? ue = { min: Math.min(ee, C), max: C } : ue = { min: v, max: Math.max(ee, v) } : ue = ee, f(ue), m.current === null && O(ue);
    },
    [u, E, v, C, f, O]
  ), T = H(
    (L, oe) => {
      const ie = (l > 0 ? l : 1) * oe;
      let ee;
      u ? L === "min" ? ee = {
        min: St(v + ie, o, C),
        max: C
      } : ee = {
        min: v,
        max: St(C + ie, v, s)
      } : ee = St(c + ie, o, s), O(ee);
    },
    [u, l, o, s, v, C, c, O]
  ), j = (L, oe) => {
    if (!i)
      switch (oe.key) {
        case "ArrowLeft":
        case "ArrowDown":
          oe.preventDefault(), T(L, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          oe.preventDefault(), T(L, 1);
          break;
        case "Home":
          oe.preventDefault(), O(u ? L === "min" ? { min: o, max: C } : { min: v, max: v } : o);
          break;
        case "End":
          oe.preventDefault(), O(u ? L === "min" ? { min: C, max: C } : { min: v, max: s } : s);
          break;
      }
  }, A = (L, oe) => {
    i || (oe.preventDefault(), oe.currentTarget.focus(), typeof oe.currentTarget.setPointerCapture == "function" && oe.currentTarget.setPointerCapture(oe.pointerId), m.current = { key: L, pointerId: oe.pointerId }, D(L, oe.clientX, oe.clientY));
  }, X = (L) => {
    !m.current || m.current.pointerId !== L.pointerId || (L.preventDefault(), D(m.current.key, L.clientX, L.clientY));
  }, K = (L) => {
    !m.current || m.current.pointerId !== L.pointerId || (m.current = null, L.preventDefault(), O(u ? { min: v, max: C } : c));
  }, [re, Z] = Y(null), J = M(v), Q = M(C), G = u ? J : 0, F = Q;
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
            style: a === "vertical" ? { bottom: `${G}%`, height: `${F - G}%` } : { left: `${G}%`, width: `${F - G}%` }
          }
        ),
        /* @__PURE__ */ t(
          "div",
          {
            role: "slider",
            "aria-valuemin": o,
            "aria-valuemax": s,
            "aria-valuenow": Math.round(v),
            "aria-orientation": a,
            "aria-label": u ? x : h,
            "aria-disabled": i || void 0,
            tabIndex: i || u && re === "max" ? -1 : S,
            className: Xt.dtSliderHandle,
            style: a === "vertical" ? { bottom: `calc(${J}% - 8px)` } : { left: `calc(${J}% - 8px)` },
            onKeyDown: (L) => j("min", L),
            onPointerDown: (L) => A("min", L),
            onPointerMove: X,
            onPointerUp: K,
            onFocus: () => Z("min")
          }
        ),
        u && /* @__PURE__ */ t(
          "div",
          {
            role: "slider",
            "aria-valuemin": o,
            "aria-valuemax": s,
            "aria-valuenow": Math.round(C),
            "aria-orientation": a,
            "aria-label": d,
            "aria-disabled": i || void 0,
            tabIndex: i || re === "min" ? -1 : S,
            className: Xt.dtSliderHandle,
            style: a === "vertical" ? { bottom: `calc(${Q}% - 8px)` } : { left: `calc(${Q}% - 8px)` },
            onKeyDown: (L) => j("max", L),
            onPointerDown: (L) => A("max", L),
            onPointerMove: X,
            onPointerUp: K,
            onFocus: () => Z("max")
          }
        )
      ] })
    }
  );
}, Ke = {}, wp = "-10675199.02:48:05.4775808", kp = "10675199.02:48:05.4775808", Lt = 86400, Rt = 3600, Nt = 60, Vn = {
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
    if (!s.slice(1).some((d) => d != null)) return null;
    const a = s[1] != null ? Number(s[1]) : 0, i = s[2] != null ? Number(s[2]) : 0, h = s[3] != null ? Number(s[3]) : 0, x = s[4] != null ? Number(s[4]) : 0;
    return r * (a * Lt + i * Rt + h * Nt + x);
  }
  const l = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(o);
  if (l) {
    const u = l[1] != null ? Number(l[1]) : 0, a = Number(l[2]), i = Number(l[3]), h = l[4] != null ? Number(l[4]) : 0, x = l[5] != null ? +`0.${l[5]}` : 0;
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
  const s = Math.floor(n / Nt), l = Math.round(n % Nt * 1e9) / 1e9;
  return { days: r, hours: o, minutes: s, seconds: l };
}
function Qn(e, n) {
  const r = e < 0;
  let o = Math.abs(e);
  n === "minute" ? o = Math.round(o / Nt) * Nt : n === "hour" ? o = Math.round(o / Rt) * Rt : n === "day" && (o = Math.round(o / Lt) * Lt);
  let s = Math.round(o % Nt);
  const l = s === 60 ? 1 : 0;
  s = s === 60 ? 0 : s;
  const u = Math.floor(o / Nt) + l, a = u % 60, i = Math.floor(u / 60), h = i % 24, x = Math.floor(i / 24), d = r ? "-" : "", S = x > 0 ? `${x}.` : "";
  switch (n) {
    case "day":
      return `${d}${x} day${x === 1 ? "" : "s"}`;
    case "hour":
      return `${d}${S}${tn(h)}`;
    case "minute":
      return `${d}${S}${tn(h)}:${tn(a)}`;
    default:
      return `${d}${S}${tn(h)}:${tn(a)}:${tn(s)}`;
  }
}
function xr(e, n = "second") {
  const r = Sn(e);
  return r === null ? "" : Qn(r, n);
}
function Xn(e, n, r) {
  return Math.min(r, Math.max(n, e));
}
const Ab = He(
  function({
    size: n = "md",
    invalid: r = !1,
    value: o,
    defaultValue: s,
    min: l = wp,
    max: u = kp,
    step: a = "1",
    precision: i = "second",
    showDays: h = !0,
    showHours: x = !0,
    showMinutes: d = !0,
    showSeconds: S = !0,
    allowClear: $ = !1,
    inline: I = !1,
    onChange: z,
    onValueChange: b,
    onOpen: _,
    onClose: g,
    disabled: m,
    placeholder: N,
    ariaLabel: p,
    triggerLabel: y,
    clearLabel: c,
    tabIndex: v,
    className: C,
    onBlur: M,
    onKeyDown: E,
    ...O
  }, f) {
    const D = ce(null), T = ce(null), j = ce(null), A = Xe(), X = o !== void 0, [K, re] = Y(
      () => s != null ? xr(s, i) : ""
    ), [Z, J] = Y(!1), [Q, G] = Y(null), [F, L] = Y(null), oe = ke(
      () => Sn(l) ?? -Number.MAX_SAFE_INTEGER,
      [l]
    ), ie = ke(
      () => Sn(u) ?? Number.MAX_SAFE_INTEGER,
      [u]
    ), ee = ke(() => {
      const ne = Number.parseFloat(a);
      return Number.isNaN(ne) || ne <= 0 ? 1 : ne;
    }, [a]), ue = ke(() => {
      const ne = X ? o ?? "" : K;
      return ne ? Sn(ne) : null;
    }, [o, K, X]), me = H(
      (ne) => {
        const De = ne === null ? "" : Qn(ne, i);
        X || re(De), z?.(De), b?.(De);
      },
      [X, i, z, b]
    ), xe = H(
      (ne) => {
        ne && Q !== null && me(Q), J(!1), G(null), L(null), g?.(), I || j.current?.focus();
      },
      [I, Q, me, g]
    ), Re = H(() => {
      m || (G(ue ?? 0), J(!0), _?.());
    }, [m, ue, _]), Ie = H(() => {
      Z ? xe(!1) : Re();
    }, [Z, xe, Re]), Ue = H(
      (ne, De) => {
        G((W) => {
          const fe = (W ?? ue ?? 0) + De * ee * yr[ne];
          return Xn(fe, oe, ie);
        });
      },
      [ue, ee, oe, ie]
    ), ye = H(
      (ne) => {
        const De = F?.[ne];
        if (De == null) return;
        const W = Number.parseFloat(De), ae = Number.isNaN(W) ? 0 : W;
        G((fe) => {
          const he = fe ?? ue ?? 0, de = vr(he);
          de[ne] = ae;
          const Ae = (he < 0 ? -1 : 1) * Np(de);
          return Xn(Ae, oe, ie);
        }), L(null);
      },
      [F, ue, oe, ie]
    ), Ve = (ne, De) => {
      L((W) => ({ ...W ?? {}, [ne]: De }));
    }, Ze = (ne, De) => {
      switch (De.key) {
        case "ArrowUp":
          De.preventDefault(), ye(ne), Ue(ne, 1);
          break;
        case "ArrowDown":
          De.preventDefault(), ye(ne), Ue(ne, -1);
          break;
        case "Home":
          De.preventDefault(), ye(ne), G(oe);
          break;
        case "End":
          De.preventDefault(), ye(ne), G(ie);
          break;
        case "Enter":
          De.preventDefault(), ye(ne), xe(!0);
          break;
      }
    }, Pe = H(() => {
      if (Z) return;
      const ne = Sn(K);
      me(ne !== null ? Xn(ne, oe, ie) : null);
    }, [Z, K, oe, ie, me]), Ge = (ne) => {
      X || re(ne.target.value);
    }, qe = (ne) => {
      ne.key === "Enter" ? (ne.preventDefault(), Z ? xe(!0) : Pe()) : ne.key === "Escape" && Z ? (ne.preventDefault(), xe(!1)) : ne.key === "ArrowDown" && !Z ? (ne.preventDefault(), Re()) : ne.key === "Tab" && Z && J(!1), E?.(ne);
    }, Je = (ne) => {
      Pe(), M?.(ne);
    }, V = () => {
      X || re(""), z?.(""), b?.(""), T.current?.focus();
    };
    Se(() => {
      if (!Z) return;
      const ne = (De) => {
        D.current && !D.current.contains(De.target) && xe(!1);
      };
      return document.addEventListener("mousedown", ne), () => document.removeEventListener("mousedown", ne);
    }, [Z, xe]), Se(() => {
      if (!Z) return;
      const ne = (De) => {
        De.key === "Escape" && xe(!1);
      };
      return document.addEventListener("keydown", ne), () => document.removeEventListener("keydown", ne);
    }, [Z, xe]), Se(() => {
      if (I && Q !== null) {
        const ne = ue;
        (ne === null || Math.abs(Q - ne) > 1e-9) && me(Q);
      }
    }, [I, Q, ue, me]);
    const k = H(
      (ne) => {
        T.current = ne, typeof f == "function" ? f(ne) : f && (f.current = ne);
      },
      [f]
    ), B = X ? o ? xr(o, i) : "" : K, U = X ? !!o : K.length > 0, se = I || Z, te = Q ?? ue ?? 0, pe = vr(te), $e = $p[i], je = ["days", "hours", "minutes", "seconds"].filter(
      (ne) => yr[ne] >= $e && (ne === "days" ? h : ne === "hours" ? x : ne === "minutes" ? d : S)
    ), rt = n === "xs" ? Ke.dtTimespanpickerInputXs : n === "sm" ? Ke.dtTimespanpickerInputSm : n === "lg" ? Ke.dtTimespanpickerInputLg : n === "xl" ? Ke.dtTimespanpickerInputXl : Ke.dtTimespanpickerInputMd, vt = /* @__PURE__ */ w("div", { className: Ke.dtTimespanpickerPanel, children: [
      /* @__PURE__ */ t("div", { className: Ke.dtTimespanpickerPreview, "aria-live": "polite", children: Qn(te, i) }),
      /* @__PURE__ */ t("div", { className: Ke.dtTimespanpickerUnits, children: je.map((ne) => /* @__PURE__ */ w("label", { className: Ke.dtTimespanpickerUnit, children: [
        /* @__PURE__ */ t("span", { className: Ke.dtTimespanpickerUnitLabel, children: Vn[ne] }),
        /* @__PURE__ */ w("span", { className: Ke.dtTimespanpickerUnitControl, children: [
          /* @__PURE__ */ t(
            "input",
            {
              className: Ke.dtTimespanpickerUnitInput,
              inputMode: "decimal",
              value: F?.[ne] ?? String(pe[ne]),
              onChange: (De) => Ve(ne, De.target.value),
              onKeyDown: (De) => Ze(ne, De),
              onBlur: () => ye(ne)
            }
          ),
          /* @__PURE__ */ w("span", { className: Ke.dtTimespanpickerUnitButtons, children: [
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${Vn[ne].toLowerCase()}`,
                onClick: () => {
                  ye(ne), Ue(ne, 1);
                },
                children: /* @__PURE__ */ t(Ye, { name: "chevron-up", size: 11 })
              }
            ),
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${Vn[ne].toLowerCase()}`,
                onClick: () => {
                  ye(ne), Ue(ne, -1);
                },
                children: /* @__PURE__ */ t(Ye, { name: "chevron-down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, ne)) }),
      /* @__PURE__ */ t("div", { className: Ke.dtTimespanpickerFooter, children: /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: Ke.dtTimespanpickerOk,
          onClick: () => xe(!0),
          children: "OK"
        }
      ) })
    ] });
    return /* @__PURE__ */ w(
      "div",
      {
        ref: D,
        className: [
          Ke.dtTimespanpicker,
          I ? Ke.dtTimespanpickerInline : null,
          C
        ].filter(Boolean).join(" "),
        children: [
          !I && /* @__PURE__ */ w(Me, { children: [
            /* @__PURE__ */ t(
              "input",
              {
                ref: k,
                type: "text",
                autoComplete: "off",
                value: B,
                disabled: m,
                placeholder: N,
                tabIndex: v,
                role: "combobox",
                "aria-label": p ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": Z,
                "aria-controls": A,
                "aria-invalid": r || void 0,
                className: [
                  Ke.dtTimespanpickerInput,
                  rt,
                  r ? Ke.dtTimespanpickerInputInvalid : null
                ].filter(Boolean).join(" "),
                onChange: Ge,
                onKeyDown: qe,
                onBlur: Je,
                ...O
              }
            ),
            $ && !m && U && /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                className: Ke.dtTimespanpickerClear,
                "aria-label": c ?? "Clear",
                onClick: V,
                children: /* @__PURE__ */ t(Ye, { name: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ t(
              "button",
              {
                ref: j,
                type: "button",
                className: [
                  Ke.dtTimespanpickerTrigger,
                  Z ? Ke.dtTimespanpickerTriggerOpen : null
                ].filter(Boolean).join(" "),
                "aria-label": y ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": Z,
                "aria-controls": A,
                disabled: m,
                onClick: Ie,
                children: /* @__PURE__ */ t(Ye, { name: "clock", size: 16 })
              }
            )
          ] }),
          se && /* @__PURE__ */ t(
            "div",
            {
              id: A,
              role: I ? void 0 : "dialog",
              "aria-label": p ?? "Time span picker",
              className: I ? void 0 : Ke.dtTimespanpickerPopup,
              children: vt
            }
          )
        ]
      }
    );
  }
), Sp = "_wrapper_gfb15_1", Dp = "_cells_gfb15_8", zp = "_cell_gfb15_8", Cp = "_invalid_gfb15_63", Mp = "_live_gfb15_72", Gt = {
  wrapper: Sp,
  cells: Dp,
  cell: zp,
  "cell-sm": "_cell-sm_gfb15_45",
  "cell-md": "_cell-md_gfb15_51",
  "cell-lg": "_cell-lg_gfb15_57",
  invalid: Cp,
  live: Mp
};
function wr(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const Lb = He(
  function({
    length: n = 6,
    value: r,
    defaultValue: o,
    onChange: s,
    invalid: l = !1,
    size: u = "md",
    autoFocus: a = !1,
    disabled: i = !1,
    label: h = "Security code",
    liveAnnounce: x = !0,
    className: d,
    "aria-label": S
  }, $) {
    const I = Xe(), z = r !== void 0, [b, _] = Y(wr(o).join("")), g = z ? wr(r).join("") : b, m = Array.from({ length: n }, (O, f) => g[f] ?? ""), N = ce([]), [p, y] = Y(""), c = (O) => {
      z || _(O), s?.(O);
    }, v = (O) => {
      const f = N.current[O];
      f && !f.disabled && (f.focus(), f.select());
    }, C = (O, f) => {
      const D = f.replace(/\D/g, "").slice(-1), T = g.split("");
      if (D) {
        T[O] = D;
        const j = T.join("").slice(0, n);
        c(j), j.length < n ? v(O + 1) : x && y("Code complete");
      }
    }, M = (O, f) => {
      if (f.key === "Backspace") {
        if (f.preventDefault(), g[O]) {
          const D = g.split("");
          D[O] = "", c(D.join(""));
        } else if (O > 0) {
          const D = g.split("");
          D[O - 1] = "", c(D.join("")), v(O - 1);
        }
      } else f.key === "ArrowLeft" && O > 0 ? (f.preventDefault(), v(O - 1)) : f.key === "ArrowRight" && O < n - 1 ? (f.preventDefault(), v(O + 1)) : f.key === "Home" ? (f.preventDefault(), v(0)) : f.key === "End" && (f.preventDefault(), v(n - 1));
    }, E = (O, f) => {
      f.preventDefault();
      const D = f.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!D) return;
      const T = g.split("");
      let j = 0;
      for (let X = 0; X < D.length && O + X < n; X++)
        T[O + X] = D[X] ?? "", j++;
      const A = T.join("");
      c(A), A.length >= n ? x && y("Code complete") : v(O + j);
    };
    return /* @__PURE__ */ w(
      "div",
      {
        className: [Gt.wrapper, d].filter(Boolean).join(" "),
        role: "group",
        "aria-label": S ?? h,
        "data-invalid": l || void 0,
        children: [
          /* @__PURE__ */ t("div", { className: [Gt.cells, Gt[u]].join(" "), children: m.map((O, f) => /* @__PURE__ */ t(
            "input",
            {
              ref: (D) => {
                N.current[f] = D, f === 0 && $ && (typeof $ == "function" ? $(D) : $.current = D);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: O,
              disabled: i,
              "aria-label": `Digit ${f + 1} of ${n}`,
              "aria-invalid": l && O !== "" ? !0 : void 0,
              autoFocus: a && f === 0,
              className: [Gt.cell, Gt[`cell-${u}`], l ? Gt.invalid : null].filter(Boolean).join(" "),
              onChange: (D) => C(f, D.target.value),
              onKeyDown: (D) => M(f, D),
              onPaste: (D) => E(f, D),
              onFocus: (D) => D.target.select(),
              onBlur: () => {
                x && y("");
              }
            },
            f
          )) }),
          x && /* @__PURE__ */ t("span", { id: `${I}-live`, role: "status", "aria-live": "polite", className: Gt.live, children: p })
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
}, Rb = He(
  function({
    value: n,
    defaultValue: r,
    onChange: o,
    penColor: s = "#1c1c1c",
    penWidth: l = 2.5,
    clearLabel: u = "Clear",
    ariaLabel: a = "Signature",
    width: i,
    height: h = 140,
    disabled: x = !1,
    className: d
  }, S) {
    const $ = ce(null), I = ce(!1), z = ce(!1), b = ce({ x: 0, y: 0 });
    Se(() => {
      const c = $.current;
      if (!c) return;
      const v = window.devicePixelRatio || 1, C = Math.round((i ?? c.clientWidth) * v), M = Math.round(h * v);
      (c.width !== C || c.height !== M) && (c.width = C, c.height = M);
      const E = c.getContext("2d");
      if (!E) return;
      E.setTransform(v, 0, 0, v, 0, 0), E.lineWidth = l, E.strokeStyle = s, E.lineCap = "round", E.lineJoin = "round";
      const O = n ?? r;
      if (O) {
        const f = new Image();
        f.onload = () => {
          E.drawImage(f, 0, 0, c.clientWidth, h);
        }, f.src = O;
      }
    }, [n, r, s, l, i, h]);
    const _ = () => {
      const c = $.current;
      if (!c) return;
      const v = c.toDataURL("image/png");
      o?.(v);
    }, g = () => {
      const c = $.current;
      if (!c) return;
      const v = c.getContext("2d");
      v && v.clearRect(0, 0, c.width, c.height), o?.("");
    };
    tr(S, () => ({
      clear: g,
      toDataURL: (c = "image/png", v) => $.current?.toDataURL(c, v) ?? ""
    }));
    const m = (c) => {
      const v = c.currentTarget.getBoundingClientRect();
      return { x: c.clientX - v.left, y: c.clientY - v.top };
    }, N = (c) => {
      x || (c.preventDefault(), typeof c.currentTarget.setPointerCapture == "function" && c.currentTarget.setPointerCapture(c.pointerId), I.current = !0, z.current = !1, b.current = m(c));
    }, p = (c) => {
      if (!I.current) return;
      c.preventDefault();
      const v = c.currentTarget.getContext("2d");
      if (!v) return;
      const C = m(c);
      v.beginPath(), v.moveTo(b.current.x, b.current.y), v.lineTo(C.x, C.y), v.stroke(), b.current = C, z.current = !0;
    }, y = (c) => {
      I.current && (c.preventDefault(), I.current = !1, z.current && _());
    };
    return /* @__PURE__ */ w("div", { className: [nn.wrapper, d, x ? nn.disabled : null].filter(Boolean).join(" "), children: [
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
          onPointerUp: y,
          onPointerCancel: y
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
const Bb = He(function({
  url: n,
  multiple: r = !1,
  parameterName: o = "files",
  auto: s = !0,
  headers: l,
  accept: u,
  chooseText: a = "Upload",
  children: i,
  onProgress: h,
  onComplete: x,
  onError: d
}, S) {
  const $ = ce(null), [I, z] = Y([]), b = ce(/* @__PURE__ */ new Map()), _ = (y, c) => {
    z((v) => v.map((C) => C.file.name === y ? { ...C, ...c } : C));
  }, g = (y) => {
    if (!n) return;
    const c = new XMLHttpRequest();
    b.current.set(y.file.name, c);
    const v = new FormData();
    if (v.append(o, y.file), c.upload.addEventListener("progress", (C) => {
      if (!C.lengthComputable) return;
      const M = Math.round(C.loaded / C.total * 100);
      _(y.file.name, { state: "uploading", progress: M }), h?.(y.file.name, M);
    }), c.addEventListener("load", () => {
      c.status >= 200 && c.status < 300 ? (_(y.file.name, { state: "complete", progress: 100 }), x?.(y.file.name)) : (_(y.file.name, { state: "error", message: `HTTP ${c.status}` }), d?.(y.file.name, `HTTP ${c.status}`));
    }), c.addEventListener("error", () => {
      _(y.file.name, { state: "error", message: "Network error" }), d?.(y.file.name, "Network error");
    }), l)
      for (const [C, M] of Object.entries(l))
        c.setRequestHeader(C, M);
    c.open("POST", n), c.send(v), _(y.file.name, { state: "uploading", progress: 0 });
  }, m = (y) => {
    if (!y) return;
    const c = [...y].map((v) => ({
      file: v,
      state: "pending",
      progress: 0
    }));
    z((v) => [...v, ...c]), $.current && ($.current.value = ""), s && c.forEach(g);
  }, N = (y) => {
    b.current.get(y)?.abort(), b.current.delete(y), z((v) => v.filter((C) => C.file.name !== y));
  }, p = i ?? /* @__PURE__ */ w("button", { type: "button", className: Dt.trigger, onClick: () => $.current?.click(), children: [
    /* @__PURE__ */ t(Ye, { name: "upload", size: 14 }),
    a
  ] });
  return tr(S, () => ({
    open: () => $.current?.click(),
    upload: () => I.forEach((y) => y.state === "pending" ? g(y) : null)
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
        onChange: (y) => m(y.target.files)
      }
    ),
    !i && I.length > 0 && /* @__PURE__ */ t("ul", { className: Dt.list, children: I.map(({ file: y, state: c, progress: v, message: C }) => /* @__PURE__ */ w("li", { className: Dt.row, "data-state": c, "data-testid": "upload-row", children: [
      /* @__PURE__ */ t("span", { className: Dt.name, children: y.name }),
      /* @__PURE__ */ t("span", { className: Dt.size, children: Vp(y.size) }),
      /* @__PURE__ */ t(
        "span",
        {
          className: Dt.progress,
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": v,
          children: /* @__PURE__ */ t("span", { className: Dt.fill, style: { width: `${v}%` } })
        }
      ),
      /* @__PURE__ */ t("span", { className: Dt.status, role: "status", children: c === "uploading" ? "Uploading" : c === "complete" ? "Complete" : c === "error" ? C ?? "Failed" : "Pending" }),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: Dt.remove,
          "aria-label": `Remove ${y.name}`,
          onClick: () => N(y.name),
          children: /* @__PURE__ */ t(Ye, { name: "close", size: 14 })
        }
      )
    ] }, y.name)) })
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
const Pb = He(function({
  accept: n,
  multiple: r = !1,
  onDrop: o,
  label: s = "Drop files here or browse",
  dragLabel: l = "Drop to attach",
  browseText: u = "Browse",
  disabled: a = !1,
  className: i
}, h) {
  const x = ce(null), [d, S] = Y(!1), $ = (g) => {
    if (!g || g.length === 0) return;
    const m = [...g].filter((N) => Qp(N, n ?? ""));
    m.length !== 0 && o?.(m);
  }, I = (g) => {
    a || (g.preventDefault(), S(!0));
  }, z = (g) => {
    a || (g.preventDefault(), g.dataTransfer.dropEffect = "copy", S(!0));
  }, b = (g) => {
    a || g.currentTarget.contains(g.relatedTarget) || S(!1);
  }, _ = (g) => {
    a || (g.preventDefault(), S(!1), $(g.dataTransfer.files));
  };
  return tr(h, () => ({
    open: () => x.current?.click()
  })), /* @__PURE__ */ w(
    "div",
    {
      role: "region",
      "aria-label": s,
      className: [vn.zone, d ? vn.dragging : null, a ? vn.disabled : null, i].filter(Boolean).join(" "),
      onDragEnter: I,
      onDragOver: z,
      onDragLeave: b,
      onDrop: _,
      children: [
        /* @__PURE__ */ t("p", { className: vn.caption, children: d ? l : s }),
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
}), eh = "_root_zkoiq_1", th = "_menubar_zkoiq_5", nh = "_horizontal_zkoiq_15", rh = "_vertical_zkoiq_20", oh = "_itemWrapper_zkoiq_25", sh = "_item_zkoiq_25", ah = "_disabled_zkoiq_61", lh = "_icon_zkoiq_68", ch = "_text_zkoiq_75", ih = "_caret_zkoiq_79", dh = "_hasChildren_zkoiq_85", uh = "_submenu_zkoiq_94", fh = "_submenuItem_zkoiq_118", lt = {
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
  className: l
}) {
  const u = Xe(), a = ce(null), i = ce(null), [h, x] = Y(null), d = ce(0), S = ce(null), $ = H(
    (_) => {
      const g = { text: _.text, value: _.value, path: _.path };
      (r ?? o)?.(g);
    },
    [r, o]
  ), I = (_, g) => {
    if (!xn(_)) {
      if (_.children && _.children.length > 0) {
        const m = h === g, N = Date.now() - d.current < 600;
        if (m && N) {
          d.current = 0;
          return;
        }
        x((p) => p === g ? null : g);
        return;
      }
      $(_), x(null);
    }
  }, z = (_) => {
    xn(_) || _.children && _.children.length > 0 || ($(_), x(null));
  };
  Se(() => {
    if (h == null) return;
    const _ = (g) => {
      a.current && !a.current.contains(g.target) && x(null);
    };
    return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
  }, [h]), Se(() => {
    if (S.current != null && h === S.current) {
      const _ = `${u}-submenu-${h}`;
      document.getElementById(_)?.querySelector('[role="menuitem"]:not([aria-disabled="true"])')?.focus(), S.current = null;
    }
  }, [h, u]);
  const b = (_) => {
    const g = i.current;
    if (!g) return;
    const m = Array.from(
      g.querySelectorAll('[data-top="true"]')
    ).filter((y) => !y.hasAttribute("disabled") && y.getAttribute("aria-disabled") !== "true");
    if (h != null) {
      const y = `${u}-submenu-${h}`, c = document.getElementById(y);
      if (c) {
        const v = Array.from(c.querySelectorAll('[role="menuitem"]')).filter(
          (E) => E.getAttribute("aria-disabled") !== "true"
        ), C = document.activeElement, M = C ? v.indexOf(C) : -1;
        if (_.key === "ArrowDown") {
          _.preventDefault(), M === -1 ? v[0]?.focus() : v[(M + 1) % v.length]?.focus();
          return;
        }
        if (_.key === "ArrowUp") {
          _.preventDefault(), M === -1 ? v[v.length - 1]?.focus() : v[(M - 1 + v.length) % v.length]?.focus();
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
      const y = p === -1 ? 0 : (p + 1) % m.length;
      m[y]?.focus();
      return;
    }
    if (_.key === "ArrowLeft" || n === "vertical" && _.key === "ArrowUp") {
      if (_.preventDefault(), m.length === 0) return;
      const y = p === -1 ? m.length - 1 : (p - 1 + m.length) % m.length;
      m[y]?.focus();
      return;
    }
    if (_.key === "ArrowDown") {
      if (p >= 0) {
        const y = N?.getAttribute("data-index"), c = y != null ? Number(y) : -1, v = c >= 0 ? e[c] : void 0;
        v?.children && v.children.length > 0 && !xn(v) && (_.preventDefault(), S.current = c, x(c));
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
      className: [lt.root, lt[n], l].filter(Boolean).join(" "),
      children: /* @__PURE__ */ t(
        "div",
        {
          ref: i,
          role: "menubar",
          "aria-label": s,
          className: lt.menubar,
          onKeyDown: b,
          children: e.map((_, g) => {
            const m = !!_.children && _.children.length > 0, N = h === g, p = xn(_), y = `${u}-submenu-${g}`;
            return /* @__PURE__ */ w(
              "div",
              {
                className: lt.itemWrapper,
                onMouseEnter: () => {
                  n === "horizontal" && m && !p && (d.current = Date.now(), x(g));
                },
                onMouseLeave: () => {
                  n === "horizontal" && m && x((c) => c === g ? null : c);
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
                      "aria-controls": m ? y : void 0,
                      "aria-current": (_.path && !m, void 0),
                      tabIndex: p ? -1 : 0,
                      disabled: p,
                      className: [lt.item, p ? lt.disabled : null, m ? lt.hasChildren : null].filter(Boolean).join(" "),
                      onClick: () => I(_, g),
                      children: [
                        _.icon ? /* @__PURE__ */ t("span", { className: lt.icon, "aria-hidden": "true", children: _.icon }) : null,
                        /* @__PURE__ */ t("span", { className: lt.text, children: _.text }),
                        m ? /* @__PURE__ */ t("span", { className: lt.caret, "aria-hidden": "true", children: "▾" }) : null
                      ]
                    }
                  ),
                  m && N ? /* @__PURE__ */ t(
                    "div",
                    {
                      id: y,
                      role: "menu",
                      className: lt.submenu,
                      "data-dt-menu-submenu": "",
                      "aria-label": _.text,
                      children: _.children?.map((c, v) => {
                        const C = xn(c), M = !!c.children && c.children.length > 0;
                        return /* @__PURE__ */ w(
                          "button",
                          {
                            type: "button",
                            role: "menuitem",
                            "aria-disabled": C || void 0,
                            "aria-haspopup": M ? "menu" : void 0,
                            tabIndex: C ? -1 : 0,
                            disabled: C,
                            className: [lt.submenuItem, C ? lt.disabled : null].filter(Boolean).join(" "),
                            onClick: () => z(c),
                            children: [
                              c.icon ? /* @__PURE__ */ t("span", { className: lt.icon, "aria-hidden": "true", children: c.icon }) : null,
                              /* @__PURE__ */ t("span", { className: lt.text, children: c.text })
                            ]
                          },
                          `${c.text}-${v}`
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
const _h = "_root_f3qrl_1", ph = "_list_f3qrl_9", hh = "_item_f3qrl_14", mh = "_trigger_f3qrl_18", gh = "_disabled_f3qrl_44", bh = "_expanded_f3qrl_51", yh = "_icon_f3qrl_55", vh = "_text_f3qrl_66", xh = "_caret_f3qrl_73", wh = "_open_f3qrl_80", kh = "_submenu_f3qrl_84", $h = "_submenuItem_f3qrl_93", Nh = "_nestedWrapper_f3qrl_122", Sh = "_nestedTrigger_f3qrl_127", Dh = "_nestedMenu_f3qrl_152", zh = "_iconOnly_f3qrl_160", Oe = {
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
  iconOnly: zh
};
function Ch({
  item: e,
  baseId: n,
  parentKey: r,
  onEmit: o
}) {
  const s = !!e.children && e.children.length > 0, [l, u] = Y(!1), a = `${n}-nested-${r}`, i = !!e.disabled, h = () => {
    if (!i) {
      if (s) {
        u((d) => !d);
        return;
      }
      o({ text: e.text, value: e.value, path: e.path });
    }
  }, x = (d) => {
    d.key === "Enter" || d.key === " " ? (d.preventDefault(), h()) : d.key === "Escape" && l && (d.preventDefault(), u(!1));
  };
  return s ? /* @__PURE__ */ w("div", { className: Oe.nestedWrapper, children: [
    /* @__PURE__ */ w(
      "button",
      {
        type: "button",
        "aria-expanded": l,
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
          /* @__PURE__ */ t("span", { className: [Oe.caret, l ? Oe.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" })
        ]
      }
    ),
    l ? /* @__PURE__ */ t("div", { id: a, role: "menu", className: Oe.nestedMenu, children: e.children?.map((d, S) => {
      const $ = !!d.disabled;
      return /* @__PURE__ */ w(
        "div",
        {
          role: "menuitem",
          "aria-disabled": $ || void 0,
          tabIndex: $ ? -1 : 0,
          className: [Oe.submenuItem, $ ? Oe.disabled : null].filter(Boolean).join(" "),
          onClick: () => {
            $ || d.children && d.children.length > 0 || o({ text: d.text, value: d.value, path: d.path });
          },
          onKeyDown: (I) => {
            if (I.key === "Enter" || I.key === " ") {
              if (I.preventDefault(), $) return;
              o({ text: d.text, value: d.value, path: d.path });
            }
          },
          children: [
            d.icon ? /* @__PURE__ */ t("span", { className: Oe.icon, "aria-hidden": "true", children: d.icon }) : null,
            /* @__PURE__ */ t("span", { className: Oe.text, children: d.text })
          ]
        },
        `${d.text}-${S}`
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
      onKeyDown: (d) => {
        if (d.key === "Enter" || d.key === " ") {
          if (d.preventDefault(), i) return;
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
  displayStyle: l,
  DisplayStyle: u,
  onClick: a,
  Click: i,
  ariaLabel: h = "Panel menu",
  className: x
}) {
  const d = Xe(), S = n ?? r ?? !1, $ = o ?? s ?? !0, I = l ?? u ?? "iconAndText", [z, b] = Y([]), _ = H(
    (N) => {
      const p = { text: N.text, value: N.value, path: N.path };
      (a ?? i)?.(p);
    },
    [a, i]
  ), g = (N, p, y) => {
    if (!y.disabled) {
      if (p) {
        b((c) => c.includes(N) ? c.filter((C) => C !== N) : S ? [...c, N] : [N]);
        return;
      }
      _(y);
    }
  }, m = (N) => {
    const p = N.target;
    if (!(N.key === "Enter" || N.key === " ")) {
      if (N.key === "Escape") {
        const y = p.getAttribute("aria-controls");
        if (y) {
          const c = y.match(/-panel-(\d+)$/);
          if (c) {
            const v = Number(c[1]);
            b((C) => C.filter((M) => M !== v));
          }
        } else {
          const c = p.closest('[role="menu"]');
          if (c) {
            const C = c.id.match(/-panel-(\d+)$/);
            if (C) {
              const M = Number(C[1]);
              b((O) => O.filter((f) => f !== M)), document.getElementById(`${d}-trigger-${M}`)?.focus();
            }
          }
        }
        N.preventDefault();
        return;
      }
      if (N.key === "ArrowDown" || N.key === "ArrowUp") {
        const y = Array.from(
          N.currentTarget.querySelectorAll('button, [role="menuitem"]')
        ).filter((M) => !M.hasAttribute("disabled") && M.getAttribute("aria-disabled") !== "true"), c = y.indexOf(p);
        if (c === -1) return;
        N.preventDefault();
        const v = N.key === "ArrowDown" ? 1 : -1;
        y[(c + v + y.length) % y.length]?.focus();
      }
    }
  };
  return /* @__PURE__ */ t(
    "nav",
    {
      "aria-label": h,
      className: [
        Oe.root,
        I === "icon" ? Oe.iconOnly : Oe.iconAndText,
        x
      ].filter(Boolean).join(" "),
      onKeyDown: m,
      children: /* @__PURE__ */ t("div", { className: Oe.list, role: "presentation", children: e.map((N, p) => {
        const y = !!N.children && N.children.length > 0, c = z.includes(p), v = !!N.disabled, C = `${d}-panel-${p}`, M = `${d}-trigger-${p}`;
        return /* @__PURE__ */ w("div", { className: Oe.item, children: [
          /* @__PURE__ */ w(
            "button",
            {
              type: "button",
              id: M,
              "aria-expanded": y ? c : void 0,
              "aria-controls": y ? C : void 0,
              "aria-disabled": v || void 0,
              disabled: v,
              tabIndex: v ? -1 : 0,
              className: [
                Oe.trigger,
                v ? Oe.disabled : null,
                c ? Oe.expanded : null
              ].filter(Boolean).join(" "),
              onClick: () => g(p, y, N),
              children: [
                N.icon ? /* @__PURE__ */ t("span", { className: Oe.icon, "aria-hidden": "true", children: N.icon }) : null,
                I === "iconAndText" ? /* @__PURE__ */ t("span", { className: Oe.text, children: N.text }) : /* @__PURE__ */ t("span", { className: Oe.text, "aria-label": N.text, children: N.icon ? null : N.text.slice(0, 1) }),
                y && $ ? /* @__PURE__ */ t("span", { className: [Oe.caret, c ? Oe.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" }) : null
              ]
            }
          ),
          y && c ? /* @__PURE__ */ t("div", { id: C, role: "menu", className: Oe.submenu, "aria-labelledby": M, children: N.children?.map((E, O) => /* @__PURE__ */ t(
            Ch,
            {
              item: E,
              baseId: d,
              parentKey: `${p}-${O}`,
              onEmit: _
            },
            `${E.text}-${O}`
          )) }) : null
        ] }, `${N.text}-${p}`);
      }) })
    }
  );
}
const Mh = "_root_10qer_1", Oh = "_trigger_10qer_7", Ih = "_defaultTrigger_10qer_40", jh = "_avatar_10qer_46", Th = "_menu_10qer_58", Eh = "_item_10qer_74", Ah = "_disabled_10qer_88", Lh = "_active_10qer_97", Rh = "_icon_10qer_107", Bh = "_text_10qer_114", zt = {
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
  ariaLabel: l = "Profile menu",
  className: u
}) {
  const a = Xe(), i = `${a}-menu`, h = ce(null), x = ce(null), [d, S] = Y(!1), [$, I] = Y(-1), z = n ?? r, b = e.map((c, v) => c.disabled ? -1 : v).filter((c) => c >= 0), _ = H(
    (c) => {
      if (c.disabled) return;
      const v = { text: c.text, path: c.path };
      (o ?? s)?.(v), S(!1), x.current?.focus();
    },
    [o, s]
  ), g = H(() => {
    I(b[0] ?? -1), S(!0);
  }, [b]), m = H(() => {
    S(!1), I(-1), x.current?.focus();
  }, []);
  Se(() => {
    if (!d) return;
    const c = (v) => {
      h.current && !h.current.contains(v.target) && (S(!1), I(-1));
    };
    return document.addEventListener("mousedown", c), () => document.removeEventListener("mousedown", c);
  }, [d]), Se(() => {
    if (!d) return;
    const c = (v) => {
      v.key === "Escape" && (v.preventDefault(), m());
    };
    return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
  }, [d, m]);
  const N = (c) => {
    if (b.length === 0) return;
    const v = b.indexOf($), C = v === -1 ? 0 : (v + c + b.length) % b.length, M = b[C];
    M != null && I(M);
  }, p = (c) => {
    if (!d) {
      (c.key === "ArrowDown" || c.key === "Enter" || c.key === " ") && (c.preventDefault(), g());
      return;
    }
    switch (c.key) {
      case "Escape":
        c.preventDefault(), m();
        break;
      case "ArrowDown":
        c.preventDefault(), N(1);
        break;
      case "ArrowUp":
        c.preventDefault(), N(-1);
        break;
      case "Home":
        c.preventDefault(), b[0] != null && I(b[0]);
        break;
      case "End":
        c.preventDefault(), b[b.length - 1] != null && I(b[b.length - 1]);
        break;
      case "Enter":
      case " ":
        if (c.preventDefault(), $ >= 0) {
          const v = e[$];
          v && !v.disabled && _(v);
        }
        break;
      case "Tab":
        S(!1), I(-1);
        break;
    }
  }, y = (c) => {
    switch (c.key) {
      case "ArrowDown":
        c.preventDefault(), N(1);
        break;
      case "ArrowUp":
        c.preventDefault(), N(-1);
        break;
      case "Home":
        c.preventDefault(), b[0] != null && I(b[0]);
        break;
      case "End":
        c.preventDefault(), b[b.length - 1] != null && I(b[b.length - 1]);
        break;
      case "Enter":
      case " ":
        if (c.preventDefault(), $ >= 0) {
          const v = e[$];
          v && !v.disabled && _(v);
        }
        break;
      case "Escape":
        c.preventDefault(), m();
        break;
      case "Tab":
        S(!1), I(-1);
        break;
    }
  };
  return /* @__PURE__ */ t(
    "div",
    {
      ref: h,
      className: [zt.root, u].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ w("nav", { "aria-label": l, children: [
        /* @__PURE__ */ t(
          "button",
          {
            ref: x,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": d,
            "aria-controls": i,
            "aria-label": l,
            className: zt.trigger,
            onClick: () => d ? m() : g(),
            onKeyDown: p,
            children: z ?? /* @__PURE__ */ w("span", { className: zt.defaultTrigger, children: [
              /* @__PURE__ */ t("span", { className: zt.avatar, "aria-hidden": "true", children: "●" }),
              /* @__PURE__ */ t("span", { children: "Profile" })
            ] })
          }
        ),
        d ? /* @__PURE__ */ t(
          "div",
          {
            id: i,
            role: "menu",
            "aria-label": l,
            "aria-activedescendant": $ >= 0 ? `${a}-item-${$}` : void 0,
            className: zt.menu,
            onKeyDown: y,
            tabIndex: -1,
            children: e.map((c, v) => {
              const C = !!c.disabled, M = v === $;
              return /* @__PURE__ */ w(
                "div",
                {
                  id: `${a}-item-${v}`,
                  role: "menuitem",
                  "aria-disabled": C || void 0,
                  tabIndex: C ? -1 : 0,
                  className: [zt.item, M ? zt.active : null, C ? zt.disabled : null].filter(Boolean).join(" "),
                  onClick: () => {
                    C || _(c);
                  },
                  onMouseEnter: () => {
                    C || I(v);
                  },
                  children: [
                    c.icon ? /* @__PURE__ */ t("span", { className: zt.icon, "aria-hidden": "true", children: c.icon }) : null,
                    /* @__PURE__ */ t("span", { className: zt.text, children: c.text })
                  ]
                },
                `${c.text}-${v}`
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
  Click: l,
  ariaLabel: u = "Open menu",
  className: a
}) {
  const i = n ?? r ?? "bottom-right", x = `${Xe()}-menu`, d = ce(null), S = ce(null), [$, I] = Y(!1), z = H(
    (m) => {
      if (m.disabled) return;
      const N = { text: m.text, value: m.value };
      (s ?? l)?.(N), I(!1), S.current?.focus();
    },
    [s, l]
  );
  Se(() => {
    if (!$) return;
    const m = (N) => {
      d.current && !d.current.contains(N.target) && I(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [$]), Se(() => {
    if (!$) return;
    const m = (N) => {
      N.key === "Escape" && (I(!1), S.current?.focus());
    };
    return document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m);
  }, [$]);
  const b = i === "bottom-right" ? dt.bottomRight : i === "bottom-left" ? dt.bottomLeft : i === "top-right" ? dt.topRight : dt.topLeft, _ = (m) => {
    !$ && (m.key === "Enter" || m.key === " " || m.key === "ArrowDown" || m.key === "ArrowUp") ? (m.preventDefault(), I(!0)) : $ && m.key === "Escape" && (m.preventDefault(), I(!1));
  }, g = (m) => {
    m.key === "Escape" && (m.preventDefault(), I(!1), S.current?.focus());
  };
  return /* @__PURE__ */ w(
    "div",
    {
      ref: d,
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
                    onClick: () => z(m),
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
            ref: S,
            type: "button",
            className: dt.main,
            "aria-haspopup": "menu",
            "aria-expanded": $,
            "aria-controls": x,
            "aria-label": u,
            onClick: () => I((m) => !m),
            onKeyDown: _,
            children: /* @__PURE__ */ t("span", { "aria-hidden": "true", className: [dt.mainIcon, $ ? dt.mainOpen : null].filter(Boolean).join(" "), children: o })
          }
        )
      ]
    }
  );
}
const em = "_root_18w60_1", tm = "_list_18w60_5", nm = "_item_18w60_15", rm = "_link_18w60_22", om = "_linkButton_18w60_23", sm = "_current_18w60_24", am = "_disabled_18w60_68", lm = "_icon_18w60_74", cm = "_text_18w60_81", im = "_separator_18w60_85", We = {
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
  const l = n ?? r, u = (a) => {
    a.disabled || l?.({ text: a.text, path: a.path });
  };
  return /* @__PURE__ */ t("nav", { "aria-label": o, className: [We.root, s].filter(Boolean).join(" "), children: /* @__PURE__ */ t("ol", { className: We.list, children: e.map((a, i) => {
    const h = i === e.length - 1, x = !!a.disabled;
    return /* @__PURE__ */ w("li", { className: We.item, children: [
      h ? x ? /* @__PURE__ */ w(
        "span",
        {
          className: [We.current, We.disabled].filter(Boolean).join(" "),
          "aria-current": "page",
          "aria-disabled": "true",
          tabIndex: -1,
          children: [
            a.icon ? /* @__PURE__ */ t("span", { className: We.icon, "aria-hidden": "true", children: a.icon }) : null,
            a.text
          ]
        }
      ) : a.path ? /* @__PURE__ */ w(
        "a",
        {
          href: a.path,
          className: We.link,
          "aria-current": "page",
          onClick: (d) => {
            d.preventDefault(), u(a);
          },
          children: [
            a.icon ? /* @__PURE__ */ t("span", { className: We.icon, "aria-hidden": "true", children: a.icon }) : null,
            /* @__PURE__ */ t("span", { className: We.text, children: a.text })
          ]
        }
      ) : /* @__PURE__ */ w(
        "span",
        {
          className: We.current,
          "aria-current": "page",
          tabIndex: 0,
          children: [
            a.icon ? /* @__PURE__ */ t("span", { className: We.icon, "aria-hidden": "true", children: a.icon }) : null,
            a.text
          ]
        }
      ) : x ? /* @__PURE__ */ w(
        "span",
        {
          className: [We.link, We.disabled].filter(Boolean).join(" "),
          "aria-disabled": "true",
          tabIndex: -1,
          children: [
            a.icon ? /* @__PURE__ */ t("span", { className: We.icon, "aria-hidden": "true", children: a.icon }) : null,
            /* @__PURE__ */ t("span", { className: We.text, children: a.text })
          ]
        }
      ) : a.path ? /* @__PURE__ */ w(
        "a",
        {
          href: a.path,
          className: We.link,
          onClick: (d) => {
            d.preventDefault(), u(a);
          },
          children: [
            a.icon ? /* @__PURE__ */ t("span", { className: We.icon, "aria-hidden": "true", children: a.icon }) : null,
            /* @__PURE__ */ t("span", { className: We.text, children: a.text })
          ]
        }
      ) : /* @__PURE__ */ w(
        "button",
        {
          type: "button",
          className: We.linkButton,
          tabIndex: 0,
          onClick: () => u(a),
          children: [
            a.icon ? /* @__PURE__ */ t("span", { className: We.icon, "aria-hidden": "true", children: a.icon }) : null,
            /* @__PURE__ */ t("span", { className: We.text, children: a.text })
          ]
        }
      ),
      h ? null : /* @__PURE__ */ t("span", { className: We.separator, "aria-hidden": "true", children: "/" })
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
  Linear: l,
  onChange: u,
  Change: a,
  onSelectedIndexChange: i,
  ariaLabel: h = "Steps",
  className: x
}) {
  const d = s ?? l ?? !1, S = n ?? r, $ = S !== void 0, [I, z] = Y(() => Math.min(Math.max(0, S ?? o), Math.max(0, e.length - 1))), _ = Math.min(Math.max(0, $ ? S : I), Math.max(0, e.length - 1)), g = ce(null), m = H(
    (y) => {
      const c = Math.min(Math.max(0, y), Math.max(0, e.length - 1));
      $ || z(c), (u ?? a ?? i)?.(c);
    },
    [$, u, a, i, e.length]
  ), N = H(
    (y, c) => !!(c.disabled || d && y > _ + 1),
    [d, _]
  ), p = (y) => {
    const c = Array.from(
      y.currentTarget.querySelectorAll("button[data-step]")
    ).filter((M) => M.getAttribute("aria-disabled") !== "true" && !M.disabled), v = document.activeElement, C = v ? c.indexOf(v) : -1;
    if (y.key === "ArrowRight" || y.key === "ArrowDown") {
      if (y.preventDefault(), c.length === 0) return;
      const M = C === -1 ? 0 : (C + 1) % c.length, E = c[M];
      E && E.focus();
    } else if (y.key === "ArrowLeft" || y.key === "ArrowUp") {
      if (y.preventDefault(), c.length === 0) return;
      const M = C === -1 ? c.length - 1 : (C - 1 + c.length) % c.length, E = c[M];
      E && E.focus();
    } else y.key === "Home" ? (y.preventDefault(), c[0]?.focus()) : y.key === "End" && (y.preventDefault(), c[c.length - 1]?.focus());
  };
  return /* @__PURE__ */ t(
    "nav",
    {
      "aria-label": h,
      className: [ut.root, x].filter(Boolean).join(" "),
      onKeyDown: p,
      children: /* @__PURE__ */ t("ol", { ref: g, role: "list", className: ut.list, children: e.map((y, c) => {
        const v = c === _, C = c < _, M = N(c, y);
        return /* @__PURE__ */ w("li", { role: "listitem", className: ut.item, children: [
          c > 0 ? /* @__PURE__ */ t("span", { className: [ut.connector, C ? ut.connectorCompleted : null].filter(Boolean).join(" "), "aria-hidden": "true" }) : null,
          /* @__PURE__ */ w(
            "button",
            {
              type: "button",
              "data-step": c,
              "aria-current": v ? "step" : void 0,
              "aria-disabled": M ? "true" : void 0,
              disabled: M,
              tabIndex: M ? -1 : 0,
              className: [
                ut.step,
                v ? ut.active : null,
                C ? ut.completed : null,
                M ? ut.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => {
                M || m(c);
              },
              children: [
                /* @__PURE__ */ t("span", { className: ut.circle, "aria-hidden": "true", children: C ? /* @__PURE__ */ t("span", { className: ut.check, "aria-hidden": "true", children: "✓" }) : y.icon ? /* @__PURE__ */ t("span", { className: ut.icon, children: y.icon }) : /* @__PURE__ */ t("span", { className: ut.number, children: c + 1 }) }),
                /* @__PURE__ */ t("span", { className: ut.text, children: y.text })
              ]
            }
          )
        ] }, `${y.text}-${c}`);
      }) })
    }
  );
}
const km = "_root_1mm03_1", $m = "_horizontal_1mm03_13", Nm = "_vertical_1mm03_17", Sm = "_pane_1mm03_21", Dm = "_handle_1mm03_31", zm = "_handleHorizontal_1mm03_51", Cm = "_handleVertical_1mm03_57", Mm = "_handleGrip_1mm03_63", Om = "_handleCollapseHint_1mm03_75", Im = "_collapseBtn_1mm03_79", jm = "_collapseBtnCollapsed_1mm03_109", xt = {
  root: km,
  horizontal: $m,
  vertical: Nm,
  pane: Sm,
  handle: Dm,
  handleHorizontal: zm,
  handleVertical: Cm,
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
  onCollapse: l,
  Collapse: u,
  ariaLabel: a = "Splitter",
  className: i
}) {
  const h = e ?? n ?? "horizontal", x = h === "horizontal", d = ce(null), S = H(() => {
    const f = r.length;
    if (f === 0) return [];
    const D = r.map((j) => j.size ? wn(j.size, 100 / f) : 100 / f), T = D.reduce((j, A) => j + A, 0);
    return Math.abs(T - 100) > 0.01 && T > 0 ? D.map((j) => j / T * 100) : D;
  }, [r]), [$, I] = Y(() => S()), [z, b] = Y(() => r.map((f) => !!f.collapsed)), _ = ce($);
  Se(() => {
    b(r.map((f) => !!f.collapsed));
  }, [r]);
  const g = H(() => r.map((f) => wn(f.min, 0)), [r]), m = H(() => r.map((f) => wn(f.max, 100)), [r]), N = H(
    (f, D) => {
      const T = { paneIndex: f, newSize: D, cancel: !1 };
      return (o ?? s)?.(T), !T.cancel;
    },
    [o, s]
  ), p = H(
    (f, D) => {
      const T = { paneIndex: f, collapse: D, cancel: !1 };
      return (l ?? u)?.(T), !T.cancel;
    },
    [l, u]
  ), y = H(
    (f) => {
      const D = !z[f];
      p(f, D) && (D ? (_.current = [...$], b((T) => {
        const j = [...T];
        return j[f] !== void 0 && (j[f] = !0), j;
      }), I((T) => {
        const j = [...T], A = j[f] ?? 0, X = f < j.length - 1 ? f + 1 : f - 1;
        if (X >= 0 && X < j.length) {
          const K = j[X] ?? 0;
          j[X] = K + A, j[f] = 0;
        } else
          j[f] = 0;
        return j;
      })) : (b((T) => {
        const j = [...T];
        return j[f] !== void 0 && (j[f] = !1), j;
      }), I(() => {
        const T = [..._.current];
        return T.length !== r.length ? r.map(() => 100 / r.length) : T;
      })));
    },
    [z, $, r.length, p]
  ), c = ce(null), v = H(
    (f, D, T) => {
      const j = d.current;
      if (!j) return null;
      const A = j.getBoundingClientRect();
      let X;
      if (x) {
        if (A.width === 0) return null;
        X = (D - A.left) / A.width * 100;
      } else {
        if (A.height === 0) return null;
        X = (T - A.top) / A.height * 100;
      }
      let K = 0;
      for (let Z = 0; Z < f; Z++) {
        const J = $[Z];
        J !== void 0 && (K += J);
      }
      return X - K;
    },
    [x, $]
  ), C = (f, D) => {
    D.preventDefault();
    const T = D.currentTarget;
    T.focus(), typeof T.setPointerCapture == "function" && T.setPointerCapture(D.pointerId), c.current = { handleIndex: f, pointerId: D.pointerId };
  }, M = (f) => {
    if (!c.current || c.current.pointerId !== f.pointerId) return;
    f.preventDefault();
    const D = c.current.handleIndex, T = v(D, f.clientX, f.clientY);
    if (T == null) return;
    const j = g(), A = m(), X = j[D] ?? 0, K = A[D] ?? 100, re = D + 1, Z = j[re] ?? 0, J = A[re] ?? 100, Q = $[D] ?? 0, G = $[re] ?? 0, F = Q + G;
    if (F <= 0) return;
    let L = At(T, X, K), oe = F - L;
    if (oe < Z) {
      if (oe = Z, L = F - oe, L < X || L > K) return;
    } else if (oe > J && (oe = J, L = F - oe, L < X || L > K))
      return;
    L = At(L, X, K), oe = F - L, N(D, L) && I((ie) => {
      const ee = [...ie];
      return ee[D] = L, ee[re] = oe, ee;
    });
  }, E = (f) => {
    !c.current || c.current.pointerId !== f.pointerId || (c.current = null);
  }, O = (f, D) => {
    const T = g(), j = m(), A = f, X = f + 1, K = $[A] ?? 0, re = $[X] ?? 0, Z = K + re;
    let J = 0;
    const Q = !!r[A]?.collapsible, G = !!r[X]?.collapsible;
    if (x ? D.key === "ArrowLeft" ? J = -5 : D.key === "ArrowRight" && (J = 5) : D.key === "ArrowUp" ? J = -5 : D.key === "ArrowDown" && (J = 5), D.key === "Home") {
      D.preventDefault();
      let F = T[A] ?? 0, L = Z - F;
      if (L = At(L, T[X] ?? 0, j[X] ?? 100), F = Z - L, F = At(F, T[A] ?? 0, j[A] ?? 100), !N(A, F)) return;
      I((oe) => {
        const ie = [...oe];
        return ie[A] = F, ie[X] = L, ie;
      });
      return;
    }
    if (D.key === "End") {
      D.preventDefault();
      let F = j[A] ?? 100;
      F = Math.min(F, Z - (T[X] ?? 0));
      let L = Z - F;
      if (L = At(L, T[X] ?? 0, j[X] ?? 100), F = Z - L, F = At(F, T[A] ?? 0, j[A] ?? 100), !N(A, F)) return;
      I((oe) => {
        const ie = [...oe];
        return ie[A] = F, ie[X] = L, ie;
      });
      return;
    }
    if ((D.key === "Enter" || D.key === " ") && (Q || G)) {
      D.preventDefault(), y(Q ? A : X);
      return;
    }
    if (J !== 0) {
      D.preventDefault();
      let F = K + J, L = Z - F;
      const oe = T[A] ?? 0, ie = j[A] ?? 100, ee = T[X] ?? 0, ue = j[X] ?? 100;
      if (F = At(F, oe, ie), L = Z - F, (L < ee || L > ue) && (L = At(L, ee, ue), F = Z - L, F = At(F, oe, ie), L = Z - F), !N(A, F)) return;
      I((me) => {
        const xe = [...me];
        return xe[A] = F, xe[X] = L, xe;
      });
    }
  };
  return /* @__PURE__ */ t(
    "div",
    {
      ref: d,
      className: [xt.root, x ? xt.horizontal : xt.vertical, i].filter(Boolean).join(" "),
      "aria-label": a,
      children: r.map((f, D) => {
        const T = !!z[D], j = T ? 0 : $[D] ?? 100 / r.length, A = T ? { display: "none" } : x ? { flexBasis: `${j}%`, flexGrow: 0, flexShrink: 0, overflow: "auto" } : { flexBasis: `${j}%`, flexGrow: 0, flexShrink: 0, overflow: "auto" }, X = wn(f.min, 0), K = wn(f.max, 100), re = D < r.length - 1, Z = !!r[D + 1]?.collapsible;
        return /* @__PURE__ */ w("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ w(
            "div",
            {
              role: "group",
              "aria-label": f.label ?? `Pane ${D + 1}`,
              className: xt.pane,
              style: A,
              "data-collapsed": T ? "true" : void 0,
              children: [
                T ? null : f.children,
                f.collapsible && !T ? /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    className: xt.collapseBtn,
                    "aria-label": `Collapse pane ${D + 1}`,
                    "aria-expanded": !T,
                    onClick: () => y(D),
                    children: x ? "◀" : "▲"
                  }
                ) : null,
                f.collapsible && T ? /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    className: xt.collapseBtn,
                    "aria-label": `Expand pane ${D + 1}`,
                    "aria-expanded": !T,
                    onClick: () => y(D),
                    children: x ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          T && f.collapsible ? (
            // when collapsed we already rendered expand button inside pane, but pane is display none, so render expand button outside?
            // Actually we hide pane with display none, need visible expand button
            // So render alternative expand button adjacent
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                className: xt.collapseBtnCollapsed,
                "aria-label": `Expand pane ${D + 1}`,
                "aria-expanded": "false",
                onClick: () => y(D),
                children: x ? "▶" : "▼"
              }
            )
          ) : null,
          re ? /* @__PURE__ */ w(
            "div",
            {
              role: "separator",
              "aria-orientation": h,
              "aria-valuemin": X,
              "aria-valuemax": K,
              "aria-valuenow": Math.round(j),
              "aria-label": `Resize handle ${D + 1}`,
              tabIndex: T || z[D + 1] ? -1 : 0,
              className: [xt.handle, x ? xt.handleHorizontal : xt.handleVertical].filter(Boolean).join(" "),
              onPointerDown: (J) => C(D, J),
              onPointerMove: M,
              onPointerUp: E,
              onKeyDown: (J) => O(D, J),
              children: [
                /* @__PURE__ */ t("span", { className: xt.handleGrip, "aria-hidden": "true" }),
                (f.collapsible || Z) && /* @__PURE__ */ t("span", { className: xt.handleCollapseHint, "aria-hidden": "true" })
              ]
            }
          ) : null
        ] }, D);
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
  onClick: l,
  Click: u,
  ariaLabel: a = "Table of contents",
  className: i
}) {
  const h = n ?? r, x = o ?? s ?? "vertical", [d, S] = Y(() => e[0]?.selector ?? null), $ = ce(d);
  $.current = d;
  const I = H(
    (z, b) => {
      if (S(z.selector), (l ?? u)?.({ text: z.text, selector: z.selector }), b) {
        try {
          b.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch {
          b.scrollIntoView();
        }
        const g = b;
        g.getAttribute("tabindex") == null && g.tabIndex === -1 || g.tabIndex < 0 ? (g.getAttribute("tabindex"), g.setAttribute("tabindex", "-1"), g.focus({ preventScroll: !0 })) : g.focus({ preventScroll: !0 });
      }
    },
    [l, u]
  );
  return Se(() => {
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
      let p = null, y = null;
      for (const v of e) {
        const C = document.querySelector(v.selector);
        if (!C) continue;
        g.set(v.selector, C);
        const M = C.getBoundingClientRect();
        let E = M.top;
        if (b !== window) {
          const O = b.getBoundingClientRect();
          E = M.top - O.top;
        }
        E <= 80 ? (!y || E > y.el.getBoundingClientRect().top - (b !== window ? b.getBoundingClientRect().top : 0)) && (y = { sel: v.selector, el: C }) : (!p || E < p.top) && (p = { sel: v.selector, top: E });
      }
      const c = y?.sel ?? p?.sel ?? e[0]?.selector ?? null;
      c && c !== $.current && S(c);
    }, N = () => {
      m();
    };
    if (typeof IntersectionObserver < "u") {
      const p = b === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : { root: b, rootMargin: "-20% 0px -70% 0px", threshold: 0 };
      _ = new IntersectionObserver((y) => {
        const c = y.filter((v) => v.isIntersecting).sort((v, C) => v.boundingClientRect.top - C.boundingClientRect.top);
        if (c[0]) {
          const v = c[0].target;
          for (const C of e) {
            if (document.querySelector(C.selector) === v) {
              S(C.selector);
              break;
            }
            if (C.selector.startsWith("#") && v.id === C.selector.slice(1)) {
              S(C.selector);
              break;
            }
          }
        } else
          m();
      }, p);
      for (const y of e) {
        const c = document.querySelector(y.selector);
        c && (_.observe(c), g.set(y.selector, c));
      }
    }
    return b === window ? (window.addEventListener("scroll", N, { passive: !0 }), m(), () => {
      window.removeEventListener("scroll", N), _?.disconnect();
    }) : (b.addEventListener("scroll", N, { passive: !0 }), m(), () => {
      b.removeEventListener("scroll", N), _?.disconnect();
    });
  }, [e, h]), /* @__PURE__ */ t("nav", { "aria-label": a, className: [rn.root, rn[x], i].filter(Boolean).join(" "), children: /* @__PURE__ */ t("ol", { className: rn.list, children: e.map((z) => {
    const b = z.selector === d;
    return /* @__PURE__ */ t("li", { className: rn.item, children: /* @__PURE__ */ t(
      "a",
      {
        href: z.selector.startsWith("#") || z.selector.startsWith(".") ? z.selector : `#${z.selector}`,
        className: [rn.link, b ? rn.active : null].filter(Boolean).join(" "),
        "aria-current": b ? "location" : void 0,
        onClick: (_) => {
          _.preventDefault();
          const g = document.querySelector(z.selector);
          I(z, g);
        },
        children: z.text
      }
    ) }, `${z.text}-${z.selector}`);
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
  Auto: l,
  interval: u,
  Interval: a,
  pauseOnHover: i,
  PauseOnHover: h,
  showArrows: x,
  ShowArrows: d,
  showIndicators: S,
  ShowIndicators: $,
  onChange: I,
  Change: z,
  ariaLabel: b = "Carousel",
  className: _
}) {
  const g = n ?? r, m = g !== void 0, [N, p] = Y(() => Math.min(Math.max(0, g ?? o), Math.max(0, e.length - 1))), y = m ? g : N, c = e.length === 0 ? 0 : Math.min(Math.max(0, y), e.length - 1), v = s ?? l ?? !1, C = u ?? a ?? 3e3, M = i ?? h ?? !0, E = x ?? d ?? !0, O = S ?? $ ?? !0, [f, D] = Y(!1), [T, j] = Y(!1), A = f || T, X = ce(null), K = Xe(), re = H(
    (ee) => {
      const ue = e.length === 0 ? 0 : (ee % e.length + e.length) % e.length;
      m || p(ue), (I ?? z)?.(ue);
    },
    [m, I, z, e.length]
  ), Z = H(() => {
    re(c - 1);
  }, [re, c]), J = H(() => {
    re(c + 1);
  }, [re, c]), Q = H(
    (ee) => {
      re(ee);
    },
    [re]
  );
  Se(() => {
    if (!v || A || e.length <= 1) return;
    const ee = setInterval(() => {
      re(c + 1);
    }, C);
    return () => clearInterval(ee);
  }, [v, A, C, c, re, e.length]);
  const G = (ee) => {
    e.length !== 0 && (ee.key === "ArrowLeft" ? (ee.preventDefault(), Z()) : ee.key === "ArrowRight" ? (ee.preventDefault(), J()) : ee.key === "Home" ? (ee.preventDefault(), Q(0)) : ee.key === "End" && (ee.preventDefault(), Q(e.length - 1)));
  }, F = () => {
    M && v && j(!0);
  }, L = () => {
    M && v && j(!1);
  }, oe = () => {
    M && v && j(!0);
  }, ie = () => {
    M && v && j(!1);
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
      onMouseEnter: F,
      onMouseLeave: L,
      onFocusCapture: oe,
      onBlurCapture: ie,
      children: [
        /* @__PURE__ */ t("div", { id: K, className: wt.viewport, children: e.map((ee, ue) => {
          const me = ue === c;
          return /* @__PURE__ */ t(
            "div",
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `Slide ${ue + 1} of ${e.length}`,
              "aria-hidden": me ? void 0 : !0,
              hidden: !me,
              className: [wt.slide, me ? wt.active : null].filter(Boolean).join(" "),
              children: ee
            },
            ue
          );
        }) }),
        E && e.length > 1 ? /* @__PURE__ */ w(Me, { children: [
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: [wt.arrow, wt.prev].filter(Boolean).join(" "),
              "aria-label": "Previous slide",
              "aria-controls": K,
              onClick: Z,
              children: "‹"
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: [wt.arrow, wt.next].filter(Boolean).join(" "),
              "aria-label": "Next slide",
              "aria-controls": K,
              onClick: J,
              children: "›"
            }
          )
        ] }) : null,
        v ? /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: wt.pauseBtn,
            "aria-label": f ? "Resume" : "Pause",
            "aria-pressed": f,
            onClick: () => D((ee) => !ee),
            children: f ? "▶" : "⏸"
          }
        ) : null,
        O && e.length > 1 ? /* @__PURE__ */ t("div", { className: wt.indicators, role: "group", "aria-label": "Slide indicators", children: e.map((ee, ue) => {
          const me = ue === c;
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: [wt.indicator, me ? wt.indicatorActive : null].filter(Boolean).join(" "),
              "aria-label": `Go to slide ${ue + 1}`,
              "aria-current": me ? "true" : void 0,
              "aria-controls": K,
              onClick: () => Q(ue)
            },
            ue
          );
        }) }) : null
      ]
    }
  );
}
const Jm = "_root_9vei2_1", Qm = "_group_9vei2_20", eg = "_itemWrapper_9vei2_30", tg = "_treeitem_9vei2_34", ng = "_disabled_9vei2_50", rg = "_selected_9vei2_60", og = "_caret_9vei2_66", sg = "_caretIcon_9vei2_113", ag = "_caretOpen_9vei2_120", lg = "_caretPlaceholder_9vei2_124", cg = "_label_9vei2_130", ig = "_loading_9vei2_137", dg = "_loadingRow_9vei2_143", ug = "_empty_9vei2_149", ct = {
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
  TextProperty: l,
  keyProperty: u,
  KeyProperty: a,
  selectionMode: i,
  SelectionMode: h,
  selectedItem: x,
  SelectedItem: d,
  selectedItems: S,
  SelectedItems: $,
  defaultSelectedItem: I,
  defaultSelectedItems: z,
  onChange: b,
  Change: _,
  onExpand: g,
  Expand: m,
  onCollapse: N,
  Collapse: p,
  loadChildData: y,
  LoadChildData: c,
  template: v,
  Template: C,
  itemTemplate: M,
  ItemTemplate: E,
  ariaLabel: O,
  AriaLabel: f,
  className: D
}) {
  const T = e ?? n ?? [], j = r ?? o, A = s ?? l ?? "text", X = u ?? a ?? "id", K = i ?? h ?? "single", re = O ?? f ?? "Tree", Z = y ?? c, J = v ?? C ?? M ?? E, Q = H(
    (W) => {
      const ae = W[X];
      return ae != null ? String(ae) : String(W.id ?? "");
    },
    [X]
  ), G = H(
    (W) => {
      const ae = W[A];
      if (ae != null) return String(ae);
      const fe = W.text;
      return fe != null ? String(fe) : "";
    },
    [A]
  ), F = H(
    (W) => {
      if (j) {
        const fe = j(W);
        if (fe !== void 0) return fe;
      }
      const ae = W.children;
      if (Array.isArray(ae)) return ae;
    },
    [j]
  ), L = H(
    (W) => {
      const ae = /* @__PURE__ */ new Set(), fe = (he) => {
        for (const de of he) {
          const be = Q(de);
          de.expanded && ae.add(be);
          const Ae = F(de);
          Ae && Ae.length > 0 && fe(Ae);
        }
      };
      return fe(W), ae;
    },
    [Q, F]
  ), [oe, ie] = Y(() => L(T)), [ee, ue] = Y(() => /* @__PURE__ */ new Map()), [me, xe] = Y(() => /* @__PURE__ */ new Set()), Re = x ?? d, Ie = S ?? $, Ve = K === "multiple" ? Ie !== void 0 : Re !== void 0, Ze = H(() => {
    if (K === "multiple") {
      if (z && z.length > 0)
        return new Set(z.map((fe) => Q(fe)));
      const W = /* @__PURE__ */ new Set(), ae = (fe) => {
        for (const he of fe) {
          he.selected && W.add(Q(he));
          const de = F(he);
          de && ae(de);
        }
      };
      return ae(T), W;
    } else {
      if (I) return /* @__PURE__ */ new Set([Q(I)]);
      let W = null;
      const ae = (fe) => {
        for (const he of fe) {
          if (he.selected)
            return W = Q(he), !0;
          const de = F(he);
          if (de && ae(de)) return !0;
        }
        return !1;
      };
      return ae(T), W ? /* @__PURE__ */ new Set([W]) : /* @__PURE__ */ new Set();
    }
  }, [K, I, z, Q, F, T]), [Pe, Ge] = Y(() => Ze()), qe = ke(() => {
    if (K === "multiple") {
      if (Ie !== void 0) {
        const W = Ie;
        return W ? new Set(W.map((ae) => Q(ae))) : /* @__PURE__ */ new Set();
      }
      return Pe;
    } else {
      if (Re !== void 0) {
        const W = Re;
        return W ? /* @__PURE__ */ new Set([Q(W)]) : /* @__PURE__ */ new Set();
      }
      return Pe;
    }
  }, [K, Ie, Re, Pe, Q]), Je = H(
    (W) => {
      let ae;
      const fe = (he) => {
        for (const de of he) {
          if (Q(de) === W)
            return ae = de, !0;
          const Ae = ee.get(Q(de)) ?? F(de);
          if (Ae && fe(Ae)) return !0;
        }
        return !1;
      };
      if (fe(T), !ae) {
        for (const he of ee.values())
          if (fe(he)) break;
      }
      return ae;
    },
    [T, ee, Q, F]
  ), V = H(() => {
    const W = /* @__PURE__ */ new Map(), ae = (fe) => {
      for (const he of fe) {
        const de = Q(he);
        W.set(de, he);
        const Ae = ee.get(de) ?? F(he);
        Ae && ae(Ae);
      }
    };
    return ae(T), W;
  }, [T, ee, Q, F]), k = H(
    (W) => {
      const ae = Q(W);
      if (!W.disabled)
        if (K === "multiple") {
          const he = new Set(qe);
          he.has(ae) ? he.delete(ae) : he.add(ae), Ve || Ge(he);
          const de = b ?? _;
          if (de) {
            const be = V(), Ae = [];
            for (const Fe of he) {
              const R = be.get(Fe) ?? Je(Fe);
              R && Ae.push(R);
            }
            de({ item: W, selectedItems: Ae });
          }
        } else if (!qe.has(ae) || qe.size !== 1 || !qe.has(ae)) {
          Ve || Ge(/* @__PURE__ */ new Set([ae]));
          const de = b ?? _;
          de && de({ item: W, selectedItem: W });
        } else {
          const de = b ?? _;
          de && de({ item: W, selectedItem: W });
        }
    },
    [Q, K, qe, Ve, b, _, V, Je]
  ), B = H(
    async (W) => {
      const ae = Q(W);
      if (!!W.disabled) return;
      const he = oe.has(ae), de = g ?? m, be = N ?? p, Ae = F(W), R = ee.get(ae) ?? Ae, Ce = !(R !== void 0 && R.length > 0) && Z != null;
      if (he) {
        ie((Ne) => {
          const Te = new Set(Ne);
          return Te.delete(ae), Te;
        }), be?.({ item: W });
        return;
      }
      if (Ce) {
        if (me.has(ae)) return;
        xe((Ne) => {
          const Te = new Set(Ne);
          return Te.add(ae), Te;
        });
        try {
          const Te = await Z(W);
          ue((et) => {
            const it = new Map(et);
            return it.set(ae, Te), it;
          }), ie((et) => {
            const it = new Set(et);
            return it.add(ae), it;
          }), de?.({ item: W });
        } catch {
        } finally {
          xe((Ne) => {
            const Te = new Set(Ne);
            return Te.delete(ae), Te;
          });
        }
        return;
      }
      ie((Ne) => {
        const Te = new Set(Ne);
        return Te.add(ae), Te;
      }), de?.({ item: W });
    },
    [Q, oe, F, ee, Z, me, g, m, N, p]
  ), U = ke(() => {
    const W = [], ae = (fe, he, de) => {
      fe.forEach((be, Ae) => {
        const Fe = Q(be), R = G(be), le = ee.get(Fe) ?? F(be);
        let Ce;
        ee.has(Fe) ? Ce = ee.get(Fe).length > 0 : le !== void 0 ? Ce = le.length > 0 : Z ? Ce = !0 : Ce = !1;
        const Ne = oe.has(Fe), Te = !!be.disabled, et = fe.length, it = Ae + 1;
        if (W.push({
          item: be,
          key: Fe,
          text: R,
          level: he,
          posInSet: it,
          setSize: et,
          hasChildren: Ce,
          expanded: Ne,
          parentKey: de,
          disabled: Te
        }), Ce && Ne) {
          const Mt = ee.get(Fe) ?? le;
          Mt && Mt.length > 0 && ae(Mt, he + 1, Fe);
        }
      });
    };
    return ae(T, 1, null), W;
  }, [T, Q, G, F, ee, oe, Z, me]), [se, te] = Y(() => U[0]?.key ?? null), pe = ce(""), $e = ce(null), Be = ce(null);
  Se(() => {
    if (!se && U.length > 0) {
      const W = U[0];
      W && te(W.key);
    } else if (se && !U.some((W) => W.key === se)) {
      const W = U[0];
      te(W ? W.key : null);
    }
  }, [U, se]), Se(() => {
    if (se) {
      const W = Be.current?.querySelector(`[data-key="${CSS.escape(se)}"]`);
      let ae = null;
      W || (ae = Be.current?.querySelector(`[data-key="${se}"]`) ?? null);
      const fe = W ?? ae;
      fe && document.activeElement !== fe && Be.current?.contains(document.activeElement) && fe.focus();
    }
  }, [se]);
  const je = H(
    (W) => {
      te(W), requestAnimationFrame(() => {
        const ae = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(W) : W;
        let fe = Be.current?.querySelector(`[data-key="${ae}"]`);
        fe || (fe = Be.current?.querySelector(`[data-key="${W}"]`) ?? null), fe?.focus();
      });
    },
    []
  ), rt = H(
    (W) => U.find((fe) => fe.key === W)?.parentKey ?? null,
    [U]
  ), vt = H(
    (W) => {
      if (U.length === 0) return;
      const ae = se ? U.findIndex((de) => de.key === se) : -1, fe = ae >= 0 ? U[ae] : void 0;
      let he = null;
      if (W.key === "ArrowDown") {
        if (W.preventDefault(), ae === -1)
          he = U[0]?.key ?? null;
        else {
          const de = (ae + 1) % U.length, be = U[de];
          be && (he = be.key);
        }
        he && je(he);
        return;
      }
      if (W.key === "ArrowUp") {
        if (W.preventDefault(), ae === -1) {
          const de = U[U.length - 1];
          de && (he = de.key);
        } else {
          const de = (ae - 1 + U.length) % U.length, be = U[de];
          be && (he = be.key);
        }
        he && je(he);
        return;
      }
      if (W.key === "ArrowRight") {
        if (W.preventDefault(), !fe) return;
        if (fe.hasChildren && !fe.expanded)
          B(fe.item);
        else if (fe.hasChildren && fe.expanded) {
          const de = ae + 1, be = U[de];
          be && be.parentKey === fe.key && je(be.key);
        }
        return;
      }
      if (W.key === "ArrowLeft") {
        if (W.preventDefault(), !fe) return;
        if (fe.hasChildren && fe.expanded)
          B(fe.item);
        else {
          const de = rt(fe.key);
          de && je(de);
        }
        return;
      }
      if (W.key === "Home") {
        W.preventDefault();
        const de = U[0];
        de && je(de.key);
        return;
      }
      if (W.key === "End") {
        W.preventDefault();
        const de = U[U.length - 1];
        de && je(de.key);
        return;
      }
      if (W.key === "Enter" || W.key === " ") {
        W.preventDefault(), fe && k(fe.item);
        return;
      }
      if (W.key.length === 1 && /^[a-zA-Z0-9]$/.test(W.key)) {
        W.preventDefault();
        const de = (pe.current + W.key).toLowerCase();
        pe.current = de, $e.current && clearTimeout($e.current), $e.current = setTimeout(() => {
          pe.current = "";
        }, 500);
        const be = ae >= 0 ? ae + 1 : 0, R = [...U, ...U].slice(be, be + U.length).find((le) => le.text.toLowerCase().startsWith(de));
        R && je(R.key);
        return;
      }
    },
    [U, se, je, B, k, rt]
  ), ne = H(() => {
    if (!se && U.length > 0) {
      const W = U[0];
      W && te(W.key);
    }
  }, [se, U]), De = (W, ae, fe) => /* @__PURE__ */ t("ul", { role: "group", className: ct.group, children: W.map((he, de) => {
    const be = Q(he), Ae = G(he), Fe = ee.get(be) ?? F(he);
    let R;
    ee.has(be) ? R = ee.get(be).length > 0 : Fe !== void 0 ? R = Fe.length > 0 : Z ? R = !0 : R = !1;
    const le = oe.has(be), Ce = qe.has(be), Ne = !!he.disabled, Te = me.has(be), et = se === be, it = W.length, Mt = de + 1, Dn = J ? J(he) : Ae;
    return /* @__PURE__ */ w("li", { role: "none", className: ct.itemWrapper, children: [
      /* @__PURE__ */ w(
        "div",
        {
          role: "treeitem",
          "data-key": be,
          tabIndex: et ? 0 : -1,
          "aria-expanded": R ? le : void 0,
          "aria-selected": Ce,
          "aria-level": ae,
          "aria-setsize": it,
          "aria-posinset": Mt,
          "aria-disabled": Ne || void 0,
          "aria-busy": Te || void 0,
          className: [
            ct.treeitem,
            Ce ? ct.selected : null,
            Ne ? ct.disabled : null,
            et ? ct.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            je(be), Ne || k(he);
          },
          onFocus: () => te(be),
          children: [
            R ? /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                className: ct.caret,
                "aria-label": `${le ? "Collapse" : "Expand"} ${Ae}`,
                "aria-expanded": le,
                tabIndex: -1,
                disabled: Ne,
                onClick: (an) => {
                  an.stopPropagation(), je(be), B(he);
                },
                children: /* @__PURE__ */ t("span", { "aria-hidden": "true", className: [ct.caretIcon, le ? ct.caretOpen : null].filter(Boolean).join(" "), children: "▸" })
              }
            ) : /* @__PURE__ */ t("span", { className: ct.caretPlaceholder, "aria-hidden": "true" }),
            /* @__PURE__ */ t("span", { className: ct.label, children: Dn }),
            Te ? /* @__PURE__ */ t("span", { className: ct.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      R && le ? Te ? /* @__PURE__ */ t("div", { className: ct.loadingRow, "aria-busy": "true", children: "Loading…" }) : Fe && Fe.length > 0 ? De(Fe, ae + 1) : ee.has(be) && ee.get(be).length > 0 ? De(ee.get(be), ae + 1) : (Fe && Fe.length === 0, null) : null
    ] }, be);
  }) });
  return /* @__PURE__ */ t(
    "div",
    {
      ref: Be,
      role: "tree",
      "aria-label": re,
      "aria-multiselectable": K === "multiple" || void 0,
      tabIndex: 0,
      className: [ct.root, D].filter(Boolean).join(" "),
      onKeyDown: vt,
      onFocus: ne,
      children: T.length === 0 ? /* @__PURE__ */ t("div", { className: ct.empty, children: "No items" }) : De(T, 1)
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
function tt(e, n) {
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
  Value: l,
  targetValue: u,
  TargetValue: a,
  data: i,
  Data: h,
  onSourceChange: x,
  SourceChange: d,
  onTargetChange: S,
  TargetChange: $,
  keyProperty: I,
  KeyProperty: z,
  onMove: b,
  Move: _,
  ariaLabel: g,
  AriaLabel: m,
  className: N
}) {
  const p = I ?? z ?? "id", y = g ?? m ?? "PickList", c = e ?? n ?? s ?? l ?? i ?? h ?? [], v = r ?? o ?? u ?? a ?? [], [C, M] = Y(() => [...c]), [E, O] = Y(() => [...v]);
  Se(() => {
    const k = e ?? n ?? s ?? l ?? i ?? h;
    k !== void 0 && M([...k]);
  }, [e, n, s, l, i, h]), Se(() => {
    const k = r ?? o ?? u ?? a;
    k !== void 0 && O([...k]);
  }, [r, o, u, a]);
  const [f, D] = Y(() => /* @__PURE__ */ new Set()), [T, j] = Y(() => /* @__PURE__ */ new Set()), [A, X] = Y(() => {
    const k = c.findIndex((B) => !B.disabled);
    return k >= 0 ? k : 0;
  }), [K, re] = Y(() => {
    const k = v.findIndex((B) => !B.disabled);
    return k >= 0 ? k : 0;
  }), Z = ke(() => C.map((k, B) => k.disabled ? -1 : B).filter((k) => k >= 0), [C]), J = ke(() => E.map((k, B) => k.disabled ? -1 : B).filter((k) => k >= 0), [E]);
  Se(() => {
    if (A >= C.length) {
      const k = Z[Z.length - 1];
      X(k ?? 0);
    } else if (C.length > 0 && Z.length > 0 && !Z.includes(A)) {
      const k = Z[0];
      k !== void 0 && X(k);
    }
  }, [A, C.length, Z]), Se(() => {
    if (K >= E.length) {
      const k = J[J.length - 1];
      re(k ?? 0);
    } else if (E.length > 0 && J.length > 0 && !J.includes(K)) {
      const k = J[0];
      k !== void 0 && re(k);
    }
  }, [K, E.length, J]), Se(() => {
    D((k) => {
      const B = /* @__PURE__ */ new Set();
      for (const U of k)
        C.some((te) => tt(te, p) === U && !te.disabled) && B.add(U);
      return B;
    });
  }, [C, p]), Se(() => {
    j((k) => {
      const B = /* @__PURE__ */ new Set();
      for (const U of k)
        E.some((te) => tt(te, p) === U && !te.disabled) && B.add(U);
      return B;
    });
  }, [E, p]);
  const Q = H(
    (k) => {
      (x ?? d)?.(k);
    },
    [x, d]
  ), G = H(
    (k) => {
      (S ?? $)?.(k);
    },
    [S, $]
  ), F = H(
    (k) => {
      (b ?? _)?.(k);
    },
    [b, _]
  ), L = H(
    (k) => {
      const B = C[k];
      if (!B || B.disabled) return;
      const U = tt(B, p);
      D((se) => {
        const te = new Set(se);
        return te.has(U) ? te.delete(U) : te.add(U), te;
      }), X(k);
    },
    [C, p]
  ), oe = H(
    (k) => {
      const B = E[k];
      if (!B || B.disabled) return;
      const U = tt(B, p);
      j((se) => {
        const te = new Set(se);
        return te.has(U) ? te.delete(U) : te.add(U), te;
      }), re(k);
    },
    [E, p]
  ), ie = H(() => {
    const k = [], B = [];
    for (const pe of C) {
      const $e = tt(pe, p);
      f.has($e) && !pe.disabled ? k.push(pe) : B.push(pe);
    }
    if (k.length === 0) return;
    const U = B, se = [...E, ...k];
    M(U), O(se), D(/* @__PURE__ */ new Set());
    const te = new Set(k.map((pe) => tt(pe, p)));
    j(te), Q(U), G(se), F({ source: U, target: se, moved: k, direction: "toTarget" });
  }, [C, E, f, p, Q, G, F]), ee = H(() => {
    const k = [], B = [];
    for (const pe of E) {
      const $e = tt(pe, p);
      T.has($e) && !pe.disabled ? k.push(pe) : B.push(pe);
    }
    if (k.length === 0) return;
    const U = B, se = [...C, ...k];
    O(U), M(se), j(/* @__PURE__ */ new Set());
    const te = new Set(k.map((pe) => tt(pe, p)));
    D(te), Q(se), G(U), F({ source: se, target: U, moved: k, direction: "toSource" });
  }, [C, E, T, p, Q, G, F]), ue = H(() => {
    const k = C.filter((se) => !se.disabled);
    if (k.length === 0) return;
    const B = C.filter((se) => !!se.disabled), U = [...E, ...k];
    M(B), O(U), D(/* @__PURE__ */ new Set()), Q(B), G(U), F({ source: B, target: U, moved: k, direction: "allToTarget" });
  }, [C, E, p, Q, G, F]), me = H(() => {
    const k = E.filter((se) => !se.disabled);
    if (k.length === 0) return;
    const B = E.filter((se) => !!se.disabled), U = [...C, ...k];
    O(B), M(U), j(/* @__PURE__ */ new Set()), Q(U), G(B), F({ source: U, target: B, moved: k, direction: "allToSource" });
  }, [C, E, Q, G, F]), xe = H(() => {
    if (T.size === 0) return;
    const k = [...E], B = T, U = [];
    for (let te = 1; te < k.length; te++) {
      const pe = k[te], $e = k[te - 1];
      if (!pe || !$e) continue;
      const Be = tt(pe, p), je = tt($e, p);
      B.has(Be) && !B.has(je) && !pe.disabled && !$e.disabled && (k[te - 1] = pe, k[te] = $e, U.push(pe));
    }
    if (U.length === 0) return;
    O(k), G(k), F({ source: C, target: k, moved: U, direction: "up" });
    const se = Array.from(B)[0];
    if (se) {
      const te = k.findIndex((pe) => tt(pe, p) === se);
      te >= 0 && re(te);
    }
  }, [E, T, p, C, G, F]), Re = H(() => {
    if (T.size === 0) return;
    const k = [...E], B = T, U = [];
    for (let te = k.length - 2; te >= 0; te--) {
      const pe = k[te], $e = k[te + 1];
      if (!pe || !$e) continue;
      const Be = tt(pe, p), je = tt($e, p);
      B.has(Be) && !B.has(je) && !pe.disabled && !$e.disabled && (k[te] = $e, k[te + 1] = pe, U.push(pe));
    }
    if (U.length === 0) return;
    O(k), G(k), F({ source: C, target: k, moved: U, direction: "down" });
    const se = Array.from(B)[0];
    if (se) {
      const te = k.findIndex((pe) => tt(pe, p) === se);
      te >= 0 && re(te);
    }
  }, [E, T, p, C, G, F]), Ie = f.size > 0, Ue = T.size > 0, ye = ce(""), Ve = ce(null), Ze = ce(""), Pe = ce(null), Ge = H(
    (k) => {
      if (C.length === 0) return;
      const B = Z;
      if (B.length === 0) return;
      const U = B.includes(A) ? A : B[0] ?? 0;
      let se = -1;
      if (k.key === "ArrowDown") {
        k.preventDefault();
        const te = B.indexOf(U);
        se = B[(te + 1) % B.length] ?? B[0] ?? 0;
      } else if (k.key === "ArrowUp") {
        k.preventDefault();
        const te = B.indexOf(U);
        se = B[(te - 1 + B.length) % B.length] ?? B[0] ?? 0;
      } else if (k.key === "Home")
        k.preventDefault(), se = B[0] ?? 0;
      else if (k.key === "End")
        k.preventDefault(), se = B[B.length - 1] ?? 0;
      else if (k.key === "Enter" || k.key === " ") {
        k.preventDefault(), L(U);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(k.key)) {
        k.preventDefault();
        const te = (ye.current + k.key).toLowerCase();
        ye.current = te, Ve.current && clearTimeout(Ve.current), Ve.current = setTimeout(() => {
          ye.current = "";
        }, 500);
        const pe = [...B, ...B], $e = B.indexOf(U) + 1, Be = pe.slice($e).find((je) => Ln(C[je]).toLowerCase().startsWith(te));
        Be != null && X(Be);
        return;
      }
      se >= 0 && X(se);
    },
    [C, Z, A, L]
  ), qe = H(
    (k) => {
      if (E.length === 0) return;
      const B = J;
      if (B.length === 0) return;
      const U = B.includes(K) ? K : B[0] ?? 0;
      let se = -1;
      if (k.key === "ArrowDown") {
        k.preventDefault();
        const te = B.indexOf(U);
        se = B[(te + 1) % B.length] ?? B[0] ?? 0;
      } else if (k.key === "ArrowUp") {
        k.preventDefault();
        const te = B.indexOf(U);
        se = B[(te - 1 + B.length) % B.length] ?? B[0] ?? 0;
      } else if (k.key === "Home")
        k.preventDefault(), se = B[0] ?? 0;
      else if (k.key === "End")
        k.preventDefault(), se = B[B.length - 1] ?? 0;
      else if (k.key === "Enter" || k.key === " ") {
        k.preventDefault(), oe(U);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(k.key)) {
        k.preventDefault();
        const te = (Ze.current + k.key).toLowerCase();
        Ze.current = te, Pe.current && clearTimeout(Pe.current), Pe.current = setTimeout(() => {
          Ze.current = "";
        }, 500);
        const pe = [...B, ...B], $e = B.indexOf(U) + 1, Be = pe.slice($e).find((je) => Ln(E[je]).toLowerCase().startsWith(te));
        Be != null && re(Be);
        return;
      }
      se >= 0 && re(se);
    },
    [E, J, K, oe]
  ), Je = ce(null), V = ce(null);
  return /* @__PURE__ */ w("div", { className: [Le.root, N].filter(Boolean).join(" "), "aria-label": y, children: [
    /* @__PURE__ */ w("div", { className: Le.panel, children: [
      /* @__PURE__ */ t("div", { className: Le.header, children: "Source" }),
      /* @__PURE__ */ t(
        "div",
        {
          ref: Je,
          role: "listbox",
          "aria-label": "Source",
          "aria-multiselectable": "true",
          tabIndex: 0,
          className: Le.listbox,
          onKeyDown: Ge,
          children: C.length === 0 ? /* @__PURE__ */ t("div", { className: Le.empty, children: "No items" }) : C.map((k, B) => {
            const U = tt(k, p), se = f.has(U), te = B === A, pe = !!k.disabled;
            return /* @__PURE__ */ t(
              "div",
              {
                role: "option",
                "aria-selected": se,
                "aria-disabled": pe || void 0,
                tabIndex: -1,
                "data-active": te || void 0,
                className: [
                  Le.option,
                  se ? Le.selected : null,
                  te ? Le.active : null,
                  pe ? Le.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => L(B),
                children: Ln(k)
              },
              U
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
          onClick: ie,
          children: "›"
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: Le.btn,
          "aria-label": "Move all to target",
          "aria-disabled": C.filter((k) => !k.disabled).length === 0 || void 0,
          disabled: C.filter((k) => !k.disabled).length === 0,
          onClick: ue,
          children: "»"
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: Le.btn,
          "aria-label": "Move all",
          "aria-disabled": C.filter((k) => !k.disabled).length === 0 || void 0,
          disabled: C.filter((k) => !k.disabled).length === 0,
          onClick: ue,
          children: "»"
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: Le.btn,
          "aria-label": "Move selected to source",
          "aria-disabled": !Ue || void 0,
          disabled: !Ue,
          onClick: ee,
          children: "‹"
        }
      ),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: Le.btn,
          "aria-label": "Move all to source",
          "aria-disabled": E.filter((k) => !k.disabled).length === 0 || void 0,
          disabled: E.filter((k) => !k.disabled).length === 0,
          onClick: me,
          children: "«"
        }
      )
    ] }),
    /* @__PURE__ */ w("div", { className: Le.panel, children: [
      /* @__PURE__ */ t("div", { className: Le.header, children: "Target" }),
      /* @__PURE__ */ t(
        "div",
        {
          ref: V,
          role: "listbox",
          "aria-label": "Target",
          "aria-multiselectable": "true",
          tabIndex: 0,
          className: Le.listbox,
          onKeyDown: qe,
          children: E.length === 0 ? /* @__PURE__ */ t("div", { className: Le.empty, children: "No items" }) : E.map((k, B) => {
            const U = tt(k, p), se = T.has(U), te = B === K, pe = !!k.disabled;
            return /* @__PURE__ */ t(
              "div",
              {
                role: "option",
                "aria-selected": se,
                "aria-disabled": pe || void 0,
                tabIndex: -1,
                "data-active": te || void 0,
                className: [
                  Le.option,
                  se ? Le.selected : null,
                  te ? Le.active : null,
                  pe ? Le.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => oe(B),
                children: Ln(k)
              },
              U
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
            "aria-disabled": !Ue || void 0,
            disabled: !Ue,
            onClick: xe,
            children: "↑"
          }
        ),
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: Le.btn,
            "aria-label": "Move down",
            "aria-disabled": !Ue || void 0,
            disabled: !Ue,
            onClick: Re,
            children: "↓"
          }
        )
      ] })
    ] })
  ] });
}
const $g = "_root_1qckr_1", Ng = "_header_1qckr_8", Sg = "_title_1qckr_15", Dg = "_navBtn_1qckr_20", zg = "_resources_1qckr_39", Cg = "_resource_1qckr_39", Mg = "_grid_1qckr_50", Og = "_timeCol_1qckr_55", Ig = "_timeCell_1qckr_61", jg = "_dayCol_1qckr_66", Tg = "_dayHeader_1qckr_73", Eg = "_slot_1qckr_81", Ag = "_event_1qckr_91", ft = {
  root: $g,
  header: Ng,
  title: Sg,
  navBtn: Dg,
  resources: zg,
  resource: Cg,
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
  onEventClick: l,
  onSlotClick: u,
  ariaLabel: a = "Scheduler",
  className: i
}) {
  const [h, x] = Y(r ?? /* @__PURE__ */ new Date()), d = r ?? h, S = (z) => {
    r || x(z), o?.(z);
  }, $ = n === "day" ? [d] : n === "week" ? Array.from({ length: 7 }, (z, b) => {
    const _ = new Date(d);
    return _.setDate(d.getDate() - d.getDay() + b), _;
  }) : Array.from({ length: 30 }, (z, b) => {
    const _ = new Date(d);
    return _.setDate(1 + b), _;
  }), I = Array.from({ length: 12 }, (z, b) => 8 + b);
  return /* @__PURE__ */ w("div", { className: [ft.root, i].filter(Boolean).join(" "), role: "group", "aria-label": a, children: [
    /* @__PURE__ */ w("div", { className: ft.header, children: [
      /* @__PURE__ */ t("button", { type: "button", className: ft.navBtn, "aria-label": "Previous", onClick: () => {
        const z = new Date(d);
        z.setDate(z.getDate() - 7), S(z);
      }, children: "‹" }),
      /* @__PURE__ */ t("span", { className: ft.title, children: d.toLocaleDateString() }),
      /* @__PURE__ */ t("button", { type: "button", className: ft.navBtn, "aria-label": "Next", onClick: () => {
        const z = new Date(d);
        z.setDate(z.getDate() + 7), S(z);
      }, children: "›" })
    ] }),
    s && /* @__PURE__ */ t("div", { className: ft.resources, children: s.map((z) => /* @__PURE__ */ t("div", { className: ft.resource, role: "presentation", "aria-label": z.name, children: z.name }, z.id)) }),
    /* @__PURE__ */ w("div", { className: ft.grid, role: "presentation", children: [
      /* @__PURE__ */ t("div", { className: ft.timeCol, role: "presentation", children: I.map((z) => /* @__PURE__ */ w("div", { className: ft.timeCell, children: [
        z,
        ":00"
      ] }, z)) }),
      $.map((z) => /* @__PURE__ */ w("div", { className: ft.dayCol, role: "presentation", title: z.toLocaleDateString(), onClick: () => u?.({ date: z }), tabIndex: 0, "aria-label": z.toLocaleDateString(), children: [
        /* @__PURE__ */ t("div", { className: ft.dayHeader, children: z.toLocaleDateString(void 0, { weekday: "short", month: "short", day: "numeric" }) }),
        I.map((b) => /* @__PURE__ */ t("div", { className: ft.slot, tabIndex: -1, onClick: () => {
          const _ = new Date(z);
          _.setHours(b), u?.({ date: _ });
        } }, b)),
        e.filter((b) => b.start.toDateString() === z.toDateString()).map((b) => /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: ft.event,
            "aria-label": `${b.title} ${kr(b.start)} - ${kr(b.end)}`,
            "aria-pressed": !1,
            onClick: () => l?.({ event: b }),
            children: b.title
          },
          b.id
        ))
      ] }, z.toISOString()))
    ] })
  ] });
}
const Lg = "_root_59ocn_1", Rg = "_header_59ocn_8", Bg = "_headerCell_59ocn_15", Pg = "_timeline_59ocn_21", qg = "_row_59ocn_26", Fg = "_taskName_59ocn_32", Kg = "_timelineCell_59ocn_37", Hg = "_bar_59ocn_43", Wg = "_progress_59ocn_56", Ug = "_dep_59ocn_61", Ct = {
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
  const [l, u] = Y(null);
  return /* @__PURE__ */ w("div", { className: [Ct.root, s].filter(Boolean).join(" "), role: "grid", "aria-label": o, "aria-rowcount": e.length, children: [
    /* @__PURE__ */ w("div", { className: Ct.header, role: "row", children: [
      /* @__PURE__ */ t("div", { className: Ct.headerCell, role: "columnheader", children: "Task" }),
      /* @__PURE__ */ w("div", { className: Ct.timeline, role: "columnheader", children: [
        "Timeline (",
        n,
        ")"
      ] })
    ] }),
    e.map((a) => /* @__PURE__ */ w("div", { className: Ct.row, role: "row", "aria-selected": l === a.id, children: [
      /* @__PURE__ */ t("div", { className: Ct.taskName, role: "gridcell", children: a.name }),
      /* @__PURE__ */ w("div", { className: Ct.timelineCell, role: "gridcell", children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: Ct.bar,
            role: "button",
            "aria-label": `${a.name} ${a.start.toLocaleDateString()} - ${a.end.toLocaleDateString()}${a.progress !== void 0 ? `, ${a.progress}% complete` : ""}`,
            "aria-pressed": l === a.id,
            tabIndex: 0,
            onClick: () => {
              u(a.id), r?.({ task: a });
            },
            onKeyDown: (i) => {
              (i.key === "Enter" || i.key === " ") && (i.preventDefault(), u(a.id), r?.({ task: a }));
            },
            children: /* @__PURE__ */ t("div", { className: Ct.progress, style: { width: `${a.progress ?? 0}%` } })
          }
        ),
        a.dependencies?.map((i) => /* @__PURE__ */ t("svg", { className: Ct.dep, "aria-hidden": "true", children: /* @__PURE__ */ t("line", { x1: "0", y1: "10", x2: "20", y2: "10", stroke: "var(--dt-color-border)" }) }, i))
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
function ey({ data: e, rowFields: n = [], columnFields: r = [], aggregateFields: o = [], onFieldsChange: s, ariaLabel: l = "Pivot table", className: u }) {
  const a = n, i = r, h = o, x = (b, _, g) => {
    const m = b === "row" ? a.filter((y) => y.property !== _) : a, N = b === "col" ? i.filter((y) => y.property !== _) : i, p = b === "agg" ? h.filter((y) => !(y.property === _ && y.aggregate === g)) : h;
    s?.({ rowFields: m, columnFields: N, aggregateFields: p });
  }, d = (b, _) => _.map((g) => String(b[g.property])).join(""), S = [...new Set(a.length ? e.map((b) => d(b, a)) : [""])].sort(), $ = [...new Set(i.length ? e.map((b) => d(b, i)) : [""])].sort(), I = (b, _, g) => {
    const m = e.filter((p) => d(p, a) === b && d(p, i) === _), N = m.map((p) => Number(p[g.property])).filter((p) => !Number.isNaN(p));
    return !N.length && g.aggregate !== "Count" ? 0 : Rn[g.aggregate](g.aggregate === "Count" ? m.map(() => 1) : N);
  }, z = (b, _, g, m) => /* @__PURE__ */ w(
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
      a.map((b) => z("row", b.property, b.title ?? b.property)),
      i.map((b) => z("col", b.property, b.title ?? b.property)),
      h.map((b) => z("agg", b.property, b.title ?? b.property, b.aggregate))
    ] }),
    /* @__PURE__ */ w("table", { className: on.table, role: "grid", "aria-label": l, children: [
      /* @__PURE__ */ t("thead", { children: /* @__PURE__ */ w("tr", { children: [
        /* @__PURE__ */ t("th", { scope: "col", children: a.map((b) => b.title ?? b.property).join(" / ") || "Total" }),
        $.map((b) => /* @__PURE__ */ t("th", { scope: "col", children: b || "—" }, b)),
        /* @__PURE__ */ t("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ w("tbody", { children: [
        S.map((b) => /* @__PURE__ */ w("tr", { children: [
          /* @__PURE__ */ t("th", { scope: "row", children: b || "—" }),
          $.map((_) => /* @__PURE__ */ t("td", { title: kn(I(b, _, h[0] ?? { property: "", aggregate: "Count" })), children: h.length ? kn(I(b, _, h[0])) : "" }, _)),
          /* @__PURE__ */ t("td", { className: on.total, children: h.length ? kn(
            Rn[h[0].aggregate](
              $.flatMap((_) => e.filter((g) => d(g, a) === b && d(g, i) === _).map((g) => Number(g[h[0].property]))).filter((_) => !Number.isNaN(_))
            )
          ) : "" })
        ] }, b)),
        /* @__PURE__ */ w("tr", { className: on.totalRow, children: [
          /* @__PURE__ */ t("th", { scope: "row", children: "Total" }),
          $.map((b) => /* @__PURE__ */ t("td", { children: h.length ? kn(
            Rn[h[0].aggregate](
              e.filter((_) => d(_, i) === b).map((_) => Number(_[h[0].property])).filter((_) => !Number.isNaN(_))
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
      children: s.map((l, u) => /* @__PURE__ */ w("li", { className: Yt.item, children: [
        /* @__PURE__ */ t("span", { className: Yt.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ w("div", { className: Yt.body, children: [
          /* @__PURE__ */ t("div", { className: Yt.label, children: l.label }),
          l.content !== void 0 && /* @__PURE__ */ t("div", { className: Yt.content, children: l.content })
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
function ny({ count: e, rowHeight: n = 40, height: r = 320, loadData: o, columns: s = [], ariaLabel: l = "Virtual grid", className: u }) {
  const [a, i] = Y(/* @__PURE__ */ new Map()), [h, x] = Y(0), d = ce(/* @__PURE__ */ new Set()), S = Math.ceil(r / n), $ = Math.max(0, Math.floor(h / n) - 3), I = Math.min(e, $ + S + 6), z = H(
    (_, g) => {
      let m = !1;
      for (let N = _; N < g; N++)
        !a.has(N) && !d.current.has(N) && (m = !0);
      if (m) {
        for (let N = _; N < g; N++) d.current.add(N);
        o({ skip: _, top: g }).then((N) => {
          i((p) => {
            const y = new Map(p);
            return N.forEach((c, v) => y.set(_ + v, c)), y;
          });
          for (let p = _; p < g; p++) d.current.delete(p);
        });
      }
    },
    [a, o]
  );
  Se(() => {
    z($, I);
  }, [$, I]);
  const b = [];
  for (let _ = $; _ < I; _++) {
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
      "aria-label": l,
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
        /* @__PURE__ */ t("div", { style: { height: Math.max(0, (e - I) * n) }, "aria-hidden": "true" })
      ]
    }
  );
}
const u0 = "_root_112nk_1", f0 = {
  root: u0
}, Qe = 25;
function _0(e) {
  const n = [];
  let r = 2166136261;
  for (let o = 0; o < e.length; o++)
    r ^= e.charCodeAt(o), r = Math.imul(r, 16777619) >>> 0, n.push(r & 255);
  for (; n.length < Qe * Qe; )
    r = Math.imul(r ^ n.length + 1, 16777619) >>> 0, n.push(r & 255);
  return n;
}
function p0(e, n) {
  const r = (o, s) => e >= o && e < o + 7 && n >= s && n < s + 7;
  return !!(r(0, 0) || r(Qe - 7, 0) || r(0, Qe - 7) || e === 6 || n === 6 || e === 8 && n === 8 || e === 8 && (n < 9 || n > Qe - 9) || n === 8 && (e < 9 || e > Qe - 9));
}
function h0(e, n) {
  const r = (o, s) => {
    const l = e - o, u = n - s, a = Math.max(Math.abs(l - 3), Math.abs(u - 3));
    return a === 3 || a <= 1;
  };
  return e < 7 && n < 7 ? r(0, 0) : e >= Qe - 7 && n < 7 ? r(Qe - 7, 0) : e < 7 && n >= Qe - 7 ? r(0, Qe - 7) : null;
}
function ry({ value: e, size: n = 128, render: r = "svg", ariaLabel: o, className: s }) {
  const l = o ?? `QR code for ${e}`, u = ke(() => {
    const h = _0(e), x = [];
    for (let d = 0; d < Qe; d++)
      for (let S = 0; S < Qe; S++) {
        const $ = h0(S, d);
        if ($ !== null) {
          x.push($);
          continue;
        }
        if (p0(S, d)) {
          x.push(S === 6 || d === 6 ? (S + d) % 2 === 0 : !1);
          continue;
        }
        x.push(h[d * Qe + S] % 2 === 1);
      }
    return x;
  }, [e]), a = n / Qe, i = [];
  for (let h = 0; h < Qe; h++)
    for (let x = 0; x < Qe; x++)
      u[h * Qe + x] && i.push(/* @__PURE__ */ t("rect", { x: x * a, y: h * a, width: a, height: a }, `${x}-${h}`));
  return /* @__PURE__ */ w(
    "svg",
    {
      className: [f0.root, s].filter(Boolean).join(" "),
      width: n,
      height: n,
      viewBox: `0 0 ${n} ${n}`,
      role: "img",
      "aria-label": l,
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
function oy({ value: e, format: n = "Code128", height: r = 60, showValue: o = !1, ariaLabel: s, className: l }) {
  const u = s ?? `Barcode ${e}`, a = ke(() => {
    const i = [];
    let h = 0;
    for (const x of y0(e)) {
      const d = Nr[x] ?? Nr[0];
      for (let S = 0; S < d.length; S++) {
        const $ = Number(d[S]);
        S % 2 === 0 && i.push({ x: h, w: $ }), h += $;
      }
    }
    return { modules: i, total: h };
  }, [e]);
  return /* @__PURE__ */ w("span", { className: [$r.root, l].filter(Boolean).join(" "), children: [
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
const v0 = "_root_14y8l_1", x0 = "_svg_14y8l_10", w0 = "_gridline_14y8l_15", k0 = "_tickLabel_14y8l_21", $0 = "_axisTitle_14y8l_27", N0 = "_dataLabel_14y8l_34", S0 = "_legend_14y8l_40", D0 = "_legendItem_14y8l_48", z0 = "_swatch_14y8l_56", C0 = "_tooltip_14y8l_63", M0 = "_visuallyHidden_14y8l_77", nt = {
  root: v0,
  svg: x0,
  gridline: w0,
  tickLabel: k0,
  axisTitle: $0,
  dataLabel: N0,
  legend: S0,
  legendItem: D0,
  swatch: z0,
  tooltip: C0,
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
  const o = n - e || 1, s = r ?? Math.pow(10, Math.floor(Math.log10(o / 4))), l = Math.floor(e / s) * s, u = Math.ceil(n / s) * s, a = [];
  for (let i = l; i <= u + 1e-9; i += s) a.push(Number(i.toFixed(6)));
  return { min: l, max: u, step: s, ticks: a };
}
function sy({
  series: e,
  width: n = 600,
  height: r = 400,
  valueAxis: o,
  categoryAxis: s,
  showLegend: l = !0,
  tooltipVisible: u = !0,
  onSeriesClick: a,
  ariaLabel: i = "Chart",
  className: h
}) {
  const [x, d] = Y(null), S = ke(() => {
    const c = /* @__PURE__ */ new Set();
    for (const v of e) for (const C of v.data) c.add(String(C[v.categoryProperty] ?? ""));
    return [...c];
  }, [e]), $ = ke(() => e.flatMap((c) => c.data.map((v) => Number(v[c.valueProperty]))).filter((c) => !Number.isNaN(c)), [e]), I = o?.min ?? ($.length ? Math.min(0, ...$) : 0), z = o?.max ?? ($.length ? Math.max(...$) : 10), b = ke(() => O0(I, z, o?.step), [I, z, o?.step]), _ = { t: 16, r: 16, b: 40, l: 56 }, g = n - _.l - _.r, m = r - _.t - _.b, N = (c) => _.l + c / Math.max(1, S.length - 1) * g, p = (c) => _.t + (1 - (c - b.min) / (b.max - b.min || 1)) * m, y = (c, v) => v.color ?? Dr[c % Dr.length];
  return /* @__PURE__ */ w("figure", { className: [nt.root, h].filter(Boolean).join(" "), role: "img", "aria-label": i, "aria-describedby": `${i.replace(/\s+/g, "-")}-table`, children: [
    /* @__PURE__ */ w("svg", { width: n, height: r, className: nt.svg, role: "presentation", children: [
      o?.gridlines !== !1 && b.ticks.map((c) => /* @__PURE__ */ t("line", { x1: _.l, x2: _.l + g, y1: p(c), y2: p(c), className: nt.gridline }, c)),
      s?.gridlines && S.map((c, v) => /* @__PURE__ */ t("line", { x1: N(v), x2: N(v), y1: _.t, y2: _.t + m, className: nt.gridline }, v)),
      b.ticks.map((c) => /* @__PURE__ */ t("text", { x: _.l - 8, y: p(c) + 4, textAnchor: "end", className: nt.tickLabel, children: c }, c)),
      S.map((c, v) => /* @__PURE__ */ t("text", { x: N(v), y: _.t + m + 16, textAnchor: "middle", className: nt.tickLabel, children: c }, c)),
      o?.title && /* @__PURE__ */ t("text", { x: 12, y: _.t + m / 2, textAnchor: "middle", transform: `rotate(-90,12,${_.t + m / 2})`, className: nt.axisTitle, children: o.title }),
      s?.title && /* @__PURE__ */ t("text", { x: _.l + g / 2, y: r - 4, textAnchor: "middle", className: nt.axisTitle, children: s.title }),
      (() => {
        const c = /* @__PURE__ */ new Map();
        for (const M of e)
          if (M.stack)
            for (const E of M.data) {
              const O = String(E[M.categoryProperty] ?? ""), f = Number(E[M.valueProperty]);
              if (Number.isNaN(f)) continue;
              c.has(M.stack) || c.set(M.stack, /* @__PURE__ */ new Map());
              const D = c.get(M.stack);
              D.set(O, (D.get(O) ?? 0) + f);
            }
        const v = e.filter((M) => M.type === "pie" || M.type === "donut"), C = /* @__PURE__ */ new Map();
        for (const M of v) {
          const E = M.data.reduce((O, f) => O + (Number(f[M.valueProperty]) || 0), 0);
          C.set(M.title ?? String(v.indexOf(M)), E);
        }
        return e.map((M, E) => {
          const O = M.data.map((j) => ({
            cat: String(j[M.categoryProperty] ?? ""),
            val: Number(j[M.valueProperty]),
            size: M.sizeProperty ? Number(j[M.sizeProperty]) : void 0,
            item: j
          })), f = new Map(S.map((j, A) => [j, A])), D = y(E, M);
          if (M.type === "pie" || M.type === "donut") {
            const j = _.l + g / 2, A = _.t + m / 2, X = Math.min(g, m) / 3, K = M.type === "donut" ? M.innerRadius ?? X * 0.5 : 0, re = C.get(M.title ?? String(E)) ?? O.reduce((J, Q) => J + Q.val, 0);
            let Z = -90;
            return /* @__PURE__ */ w("g", { role: "list", "aria-label": M.title ?? `Series ${E + 1}`, children: [
              /* @__PURE__ */ t("title", { children: M.title ?? `Series ${E + 1}` }),
              O.map((J, Q) => {
                const G = re ? J.val / re * 360 : 0, F = Z, L = Z + G;
                Z = L;
                const oe = G > 180 ? 1 : 0, ie = (qe) => qe * Math.PI / 180, ee = j + X * Math.cos(ie(F)), ue = A + X * Math.sin(ie(F)), me = j + X * Math.cos(ie(L)), xe = A + X * Math.sin(ie(L)), Re = j + K * Math.cos(ie(L)), Ie = A + K * Math.sin(ie(L)), Ue = j + K * Math.cos(ie(F)), ye = A + K * Math.sin(ie(F)), Ve = K ? `M ${ee} ${ue} A ${X} ${X} 0 ${oe} 1 ${me} ${xe} L ${Re} ${Ie} A ${K} ${K} 0 ${oe} 0 ${Ue} ${ye} Z` : `M ${j} ${A} L ${ee} ${ue} A ${X} ${X} 0 ${oe} 1 ${me} ${xe} Z`, Ze = (F + L) / 2, Pe = j + (X + 12) * Math.cos(ie(Ze)), Ge = A + (X + 12) * Math.sin(ie(Ze));
                return /* @__PURE__ */ w("g", { role: "listitem", children: [
                  /* @__PURE__ */ t(
                    "path",
                    {
                      d: Ve,
                      fill: D,
                      stroke: "var(--dt-color-surface)",
                      strokeWidth: 1,
                      onMouseEnter: () => u && d({ x: Pe, y: Ge, text: `${M.title ?? J.cat}: ${J.val}` }),
                      onMouseLeave: () => d(null),
                      onClick: () => a?.({ seriesTitle: M.title ?? "", category: J.cat, value: J.val, item: J.item }),
                      style: { cursor: "pointer" }
                    }
                  ),
                  M.labels?.visible && /* @__PURE__ */ t("text", { x: Pe, y: Ge, textAnchor: "middle", className: nt.dataLabel, children: J.val })
                ] }, Q);
              })
            ] }, E);
          }
          if (M.type === "scatter" || M.type === "bubble")
            return /* @__PURE__ */ w("g", { role: "list", "aria-label": M.title ?? `Series ${E + 1}`, children: [
              /* @__PURE__ */ t("title", { children: M.title ?? `Series ${E + 1}` }),
              O.map((j, A) => {
                const X = f.get(j.cat) ?? 0, K = Number(O[A].cat), re = Number.isNaN(K) ? N(X) : _.l + (K - b.min) / (b.max - b.min || 1) * g, Z = p(j.val), J = M.type === "bubble" && j.size !== void 0 ? Math.max(4, Math.min(12, j.size / 10)) : 4;
                return /* @__PURE__ */ w("g", { role: "listitem", children: [
                  /* @__PURE__ */ t("circle", { cx: re, cy: Z, r: J, fill: D, stroke: "var(--dt-color-surface)", strokeWidth: 1.5 }),
                  /* @__PURE__ */ t(
                    "circle",
                    {
                      cx: re,
                      cy: Z,
                      r: 12,
                      fill: "transparent",
                      onMouseEnter: () => u && d({ x: re, y: Z, text: `${M.title ?? j.cat}: ${j.val}` }),
                      onMouseLeave: () => d(null),
                      onClick: () => a?.({ seriesTitle: M.title ?? "", category: j.cat, value: j.val, item: j.item }),
                      style: { cursor: "pointer" }
                    }
                  )
                ] }, A);
              })
            ] }, E);
          if (M.type === "line" || M.type === "area") {
            const j = (K) => {
              if (!M.stack) return b.min;
              let re = 0;
              for (let Z = 0; Z < E; Z++) {
                const J = e[Z];
                if (J?.stack !== M.stack) continue;
                const Q = J.data.find((G) => String(G[J.categoryProperty] ?? "") === K);
                Q && (re += Number(Q[J.valueProperty]) || 0);
              }
              return re;
            }, A = O.map((K) => {
              const re = f.get(K.cat) ?? 0, Z = j(K.cat);
              return `${re === 0 ? "M" : "L"} ${N(re)} ${p(Z + K.val)}`;
            }).join(" "), X = O.map((K) => {
              const re = f.get(K.cat) ?? 0, Z = j(K.cat);
              return `${re === 0 ? "M" : "L"} ${N(re)} ${p(Z)}`;
            }).join(" ");
            return /* @__PURE__ */ w("g", { role: "list", "aria-label": M.title ?? `Series ${E + 1}`, children: [
              /* @__PURE__ */ t("title", { children: M.title ?? `Series ${E + 1}` }),
              M.type === "area" && /* @__PURE__ */ t("path", { d: `${A} L ${N(O.length - 1)} ${p(j(O[O.length - 1].cat))} L ${N(0)} ${p(j(O[0].cat))} Z`, fill: D, fillOpacity: 0.25, stroke: "none" }),
              /* @__PURE__ */ t("path", { d: A, fill: "none", stroke: D, strokeWidth: 2 }),
              M.stack && /* @__PURE__ */ t("path", { d: X, fill: "none", stroke: "transparent" }),
              O.map((K, re) => {
                const Z = f.get(K.cat) ?? 0, J = j(K.cat), Q = N(Z), G = p(J + K.val);
                return /* @__PURE__ */ w("g", { role: "listitem", children: [
                  /* @__PURE__ */ t("circle", { cx: Q, cy: G, r: 4, fill: D, stroke: "var(--dt-color-surface)", strokeWidth: 1.5 }),
                  /* @__PURE__ */ t(
                    "rect",
                    {
                      x: Q - 12,
                      y: G - 12,
                      width: 24,
                      height: 24,
                      fill: "transparent",
                      onMouseEnter: () => u && d({ x: Q, y: G, text: `${M.title ?? K.cat}: ${K.val}` }),
                      onMouseLeave: () => d(null),
                      onFocus: () => u && d({ x: Q, y: G, text: `${M.title ?? K.cat}: ${K.val}` }),
                      onBlur: () => d(null),
                      onClick: () => a?.({ seriesTitle: M.title ?? "", category: K.cat, value: K.val, item: K.item }),
                      style: { cursor: "pointer" }
                    }
                  ),
                  M.labels?.visible && /* @__PURE__ */ t("text", { x: Q, y: G - 8, textAnchor: "middle", className: nt.dataLabel, children: K.val })
                ] }, re);
              })
            ] }, E);
          }
          const T = M.type === "bar";
          return /* @__PURE__ */ w("g", { role: "list", "aria-label": M.title ?? `Series ${E + 1}`, children: [
            /* @__PURE__ */ t("title", { children: M.title ?? `Series ${E + 1}` }),
            O.map((j, A) => {
              const X = f.get(j.cat) ?? 0;
              let K = 0;
              if (M.stack)
                for (let ue = 0; ue < E; ue++) {
                  const me = e[ue];
                  if (me?.stack !== M.stack) continue;
                  const xe = me.data.find((Re) => String(Re[me.categoryProperty] ?? "") === j.cat);
                  xe && (K += Number(xe[me.valueProperty]) || 0);
                }
              const re = K + j.val, Z = e.filter((ue) => !ue.stack || ue.stack === M.stack).length, J = g / S.length, Q = T ? 18 : Math.max(12, J / (M.stack ? 1 : e.length) - 4), G = T ? _.l + K / (b.max - b.min || 1) * g : N(X) - Q / 2 + (M.stack ? 0 : E % Z * Q), F = T ? _.t + X * m / S.length + 4 : p(re), L = T ? j.val / (b.max - b.min || 1) * g : Q - 4, oe = T ? 16 : p(K) - p(re), ie = T ? _.l + K / (b.max - b.min || 1) * g : G, ee = T ? _.t + X * m / S.length + 4 : F;
              return /* @__PURE__ */ w("g", { role: "listitem", children: [
                /* @__PURE__ */ t(
                  "rect",
                  {
                    x: ie,
                    y: ee,
                    width: T ? L : Q - 4,
                    height: oe,
                    fill: D,
                    rx: 2,
                    onMouseEnter: () => u && d({ x: ie + (T ? L : Q) / 2, y: ee, text: `${M.title ?? j.cat}: ${j.val}` }),
                    onMouseLeave: () => d(null),
                    onClick: () => a?.({ seriesTitle: M.title ?? "", category: j.cat, value: j.val, item: j.item }),
                    style: { cursor: "pointer" }
                  }
                ),
                M.labels?.visible && /* @__PURE__ */ t("text", { x: ie + (T ? L : Q) / 2, y: ee - 4, textAnchor: "middle", className: nt.dataLabel, children: j.val })
              ] }, A);
            })
          ] }, E);
        });
      })()
    ] }),
    x && /* @__PURE__ */ t("div", { className: nt.tooltip, style: { left: x.x, top: x.y - 28 }, children: x.text }),
    l && /* @__PURE__ */ t("div", { className: nt.legend, children: e.map((c, v) => /* @__PURE__ */ w("span", { className: nt.legendItem, children: [
      /* @__PURE__ */ t("span", { className: nt.swatch, style: { backgroundColor: y(v, c) }, "aria-hidden": "true" }),
      c.title ?? `Series ${v + 1}`
    ] }, v)) }),
    /* @__PURE__ */ w("table", { className: nt.visuallyHidden, id: `${i.replace(/\s+/g, "-")}-table`, children: [
      /* @__PURE__ */ t("caption", { children: i }),
      /* @__PURE__ */ t("thead", { children: /* @__PURE__ */ w("tr", { children: [
        /* @__PURE__ */ t("th", { children: "Series" }),
        /* @__PURE__ */ t("th", { children: "Category" }),
        /* @__PURE__ */ t("th", { children: "Value" })
      ] }) }),
      /* @__PURE__ */ t("tbody", { children: e.map(
        (c) => c.data.map((v, C) => /* @__PURE__ */ w("tr", { children: [
          /* @__PURE__ */ t("td", { children: c.title ?? "" }),
          /* @__PURE__ */ t("td", { children: String(v[c.categoryProperty] ?? "") }),
          /* @__PURE__ */ t("td", { children: String(v[c.valueProperty] ?? "") })
        ] }, `${c.title}-${C}`))
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
  Ye as Icon,
  eb as Input,
  Q0 as Label,
  ub as Layout,
  wb as Listbox,
  Mb as Mask,
  qb as Menu,
  Ob as Numeric,
  Js as Pager,
  Fb as PanelMenu,
  Cb as Password,
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
  zb as Textbox,
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
