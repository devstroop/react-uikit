import { jsx as n, jsxs as w, Fragment as Oe } from "react/jsx-runtime";
import { forwardRef as qe, useId as Ue, isValidElement as Qn, cloneElement as Sr, useState as V, useRef as se, useCallback as q, useMemo as $e, useContext as Dr, createContext as zr, useEffect as Ne, Children as Rr, useImperativeHandle as er } from "react";
const Br = "_button_1wxdv_1", Pr = "_primary_1wxdv_29", qr = "_secondary_1wxdv_38", Fr = "_ghost_1wxdv_48", Kr = "_danger_1wxdv_57", Hr = "_success_1wxdv_61", Wr = "_info_1wxdv_65", Ur = "_xs_1wxdv_101", Vr = "_sm_1wxdv_107", Xr = "_md_1wxdv_113", Gr = "_lg_1wxdv_119", Yr = "_xl_1wxdv_125", Zr = "_iconOnly_1wxdv_131", Jr = "_fullWidth_1wxdv_157", ln = {
  button: Br,
  primary: Pr,
  secondary: qr,
  ghost: Fr,
  danger: Kr,
  success: Hr,
  info: Wr,
  xs: Ur,
  sm: Vr,
  md: Xr,
  lg: Gr,
  xl: Yr,
  iconOnly: Zr,
  fullWidth: Jr
}, v0 = qe(function({
  variant: t = "primary",
  size: r = "md",
  fullWidth: o = !1,
  iconOnly: s = !1,
  className: l,
  type: d = "button",
  ...a
}, c) {
  const _ = [
    ln.button,
    ln[t],
    ln[r],
    o ? ln.fullWidth : null,
    s ? ln.iconOnly : null,
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n("button", { ref: c, type: d, className: _, ...a });
}), Qr = "_card_10w4x_1", eo = "_elevated_10w4x_8", to = "_outlined_10w4x_13", no = "_interactive_10w4x_17", ro = "_text_10w4x_25", oo = "_header_10w4x_41", so = "_body_10w4x_48", ao = "_footer_10w4x_58", cn = {
  card: Qr,
  elevated: eo,
  outlined: to,
  interactive: no,
  text: ro,
  header: oo,
  body: so,
  footer: ao
}, x0 = qe(function({ variant: t = "elevated", header: r, footer: o, className: s, children: l, onKeyDown: d, ...a }, c) {
  const _ = t === "interactive";
  return /* @__PURE__ */ w(
    "div",
    {
      ref: c,
      tabIndex: _ ? 0 : void 0,
      onKeyDown: (v) => {
        d?.(v), !(!_ || v.key !== "Enter" && v.key !== " ") && (v.preventDefault(), v.currentTarget.click());
      },
      className: [cn.card, cn[t], s].filter(Boolean).join(" "),
      ...a,
      children: [
        r != null && /* @__PURE__ */ n("div", { className: cn.header, children: r }),
        /* @__PURE__ */ n("div", { className: cn.body, children: l }),
        o != null && /* @__PURE__ */ n("div", { className: cn.footer, children: o })
      ]
    }
  );
}), lo = "_badge_dcudr_1", co = "_xs_dcudr_14", io = "_sm_dcudr_19", uo = "_md_dcudr_24", fo = "_lg_dcudr_29", _o = "_xl_dcudr_34", po = "_neutral_dcudr_40", ho = "_primary_dcudr_45", mo = "_success_dcudr_50", go = "_warning_dcudr_55", bo = "_danger_dcudr_60", yo = "_solid_dcudr_66", vo = "_outline_dcudr_91", zn = {
  badge: lo,
  xs: co,
  sm: io,
  md: uo,
  lg: fo,
  xl: _o,
  neutral: po,
  primary: ho,
  success: mo,
  warning: go,
  danger: bo,
  solid: yo,
  outline: vo
}, w0 = qe(function({ tone: t = "neutral", variant: r = "soft", size: o = "md", className: s, children: l, ...d }, a) {
  return /* @__PURE__ */ n(
    "span",
    {
      ref: a,
      className: [zn.badge, zn[o], zn[t], zn[r], s].filter(Boolean).join(" "),
      ...d,
      children: l
    }
  );
}), xo = "_xs_cg2f2_2", wo = "_sm_cg2f2_7", ko = "_md_cg2f2_1", $o = "_lg_cg2f2_17", No = "_xl_cg2f2_22", So = {
  xs: xo,
  sm: wo,
  md: ko,
  lg: $o,
  xl: No
}, k0 = [
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
], Do = {
  check: /* @__PURE__ */ n("path", { d: "M20 6L9 17l-5-5" }),
  close: /* @__PURE__ */ n("path", { d: "M18 6L6 18M6 6l12 12" }),
  "chevron-down": /* @__PURE__ */ n("path", { d: "M6 9l6 6 6-6" }),
  "chevron-left": /* @__PURE__ */ n("path", { d: "M15 18l-6-6 6-6" }),
  "chevron-right": /* @__PURE__ */ n("path", { d: "M9 18l6-6-6-6" }),
  "chevron-up": /* @__PURE__ */ n("path", { d: "M18 15l-6-6-6 6" }),
  search: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ n("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ n("path", { d: "M21 21l-4.3-4.3" })
  ] }),
  plus: /* @__PURE__ */ n("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ n("path", { d: "M5 12h14" }),
  alert: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ n("path", { d: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" }),
    /* @__PURE__ */ n("path", { d: "M12 9v4M12 17h.01" })
  ] }),
  info: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M12 16v-4M12 8h.01" })
  ] }),
  "arrow-right": /* @__PURE__ */ n("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  "arrow-left": /* @__PURE__ */ n("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  "external-link": /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ n("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
    /* @__PURE__ */ n("path", { d: "M15 3h6v6M10 14L21 3" })
  ] }),
  copy: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ n("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] }),
  trash: /* @__PURE__ */ n(Oe, { children: /* @__PURE__ */ n("path", { d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" }) }),
  edit: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ n("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ n("path", { d: "M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  settings: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ n("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] }),
  user: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ n("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ n("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ n("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ n("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ n("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  download: /* @__PURE__ */ n("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  upload: /* @__PURE__ */ n("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  menu: /* @__PURE__ */ n("path", { d: "M3 12h18M3 6h18M3 18h18" }),
  "more-horizontal": /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ n("circle", { cx: "19", cy: "12", r: "1" }),
    /* @__PURE__ */ n("circle", { cx: "5", cy: "12", r: "1" })
  ] }),
  mail: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ n("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M22 6l-10 7L2 6" })
  ] }),
  lock: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ n("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M7 11V7a5 5 0 0110 0v4" })
  ] }),
  eye: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ n("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  "eye-off": /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ n("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ n("path", { d: "M1 1l22 22" })
  ] }),
  refresh: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ n("path", { d: "M23 4v6h-6M1 20v-6h6" }),
    /* @__PURE__ */ n("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
  ] }),
  calendar: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ n("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M16 2v4M8 2v4M3 10h18" })
  ] }),
  clock: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M12 6v6l4 2" })
  ] }),
  "check-circle": /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ n("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ n("path", { d: "M22 4L12 14.01l-3-3" })
  ] }),
  "x-circle": /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] }),
  shield: /* @__PURE__ */ n(Oe, { children: /* @__PURE__ */ n("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  globe: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
  ] }),
  file: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ n("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
    /* @__PURE__ */ n("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
  ] }),
  folder: /* @__PURE__ */ n("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" }),
  home: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ n("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
    /* @__PURE__ */ n("path", { d: "M9 22V12h6v10" })
  ] }),
  key: /* @__PURE__ */ n(Oe, { children: /* @__PURE__ */ n("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) }),
  link: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ n("path", { d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" }),
    /* @__PURE__ */ n("path", { d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" })
  ] }),
  star: /* @__PURE__ */ n("path", { fill: "currentColor", stroke: "none", d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" }),
  "star-outline": /* @__PURE__ */ n("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" }),
  ban: /* @__PURE__ */ w(Oe, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M4.93 4.93l14.14 14.14" })
  ] })
}, Ve = qe(function({ name: t, size: r = "md", strokeWidth: o = 2, className: s, ...l }, d) {
  const a = typeof r == "string";
  return /* @__PURE__ */ n(
    "svg",
    {
      ref: d,
      className: [a ? So[r] : null, s].filter(Boolean).join(" "),
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
      children: Do[t]
    }
  );
}), zo = "_stat_11sa0_1", Co = "_label_11sa0_8", Oo = "_row_11sa0_16", Mo = "_value_11sa0_22", Io = "_delta_11sa0_28", jo = "_success_11sa0_33", To = "_danger_11sa0_37", Eo = "_neutral_11sa0_41", Ao = "_hint_11sa0_45", Kt = {
  stat: zo,
  label: Co,
  row: Oo,
  value: Mo,
  delta: Io,
  success: jo,
  danger: To,
  neutral: Eo,
  hint: Ao
}, $0 = qe(function({ label: t, value: r, delta: o, deltaTone: s = "neutral", hint: l, className: d, ...a }, c) {
  return /* @__PURE__ */ w("div", { ref: c, className: [Kt.stat, d].filter(Boolean).join(" "), ...a, children: [
    /* @__PURE__ */ n("div", { className: Kt.label, children: t }),
    /* @__PURE__ */ w("div", { className: Kt.row, children: [
      /* @__PURE__ */ n("div", { className: Kt.value, children: r }),
      o != null && /* @__PURE__ */ n("div", { className: [Kt.delta, Kt[s]].join(" "), children: o })
    ] }),
    l != null && /* @__PURE__ */ n("div", { className: Kt.hint, children: l })
  ] });
}), Lo = "_wrap_1cpzs_1", Ro = "_table_1cpzs_8", Bo = "_caption_1cpzs_14", Po = "_none_1cpzs_51", qo = "_horizontal_1cpzs_57", Fo = "_vertical_1cpzs_67", Ko = "_alternating_1cpzs_85", Ho = "_start_1cpzs_89", Wo = "_center_1cpzs_93", Uo = "_end_1cpzs_97", Vo = "_empty_1cpzs_101", Rt = {
  wrap: Lo,
  table: Ro,
  caption: Bo,
  none: Po,
  horizontal: qo,
  vertical: Fo,
  alternating: Ko,
  start: Ho,
  center: Wo,
  end: Uo,
  empty: Vo
};
function N0({
  columns: e,
  rows: t,
  rowKey: r,
  empty: o,
  caption: s,
  gridLines: l = "default",
  allowAlternatingRows: d = !0,
  className: a
}) {
  const c = l === "default" || l === "both" ? "" : Rt[l];
  return /* @__PURE__ */ w("div", { className: [Rt.wrap, a].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ w(
      "table",
      {
        className: [
          Rt.table,
          c,
          d ? Rt.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          s != null && /* @__PURE__ */ n("caption", { className: Rt.caption, children: s }),
          /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ n("tr", { children: e.map((_) => /* @__PURE__ */ n(
            "th",
            {
              className: _.align != null ? Rt[_.align] : void 0,
              scope: "col",
              children: _.header
            },
            _.key
          )) }) }),
          /* @__PURE__ */ n("tbody", { children: t.map((_) => /* @__PURE__ */ n("tr", { children: e.map((v) => /* @__PURE__ */ n(
            "td",
            {
              className: v.align != null ? Rt[v.align] : void 0,
              children: v.render != null ? v.render(_) : _[v.key]
            },
            v.key
          )) }, r(_))) })
        ]
      }
    ),
    t.length === 0 && o != null && /* @__PURE__ */ n("div", { className: Rt.empty, children: o })
  ] });
}
const Xo = "_emptyState_123z1_1", Go = "_icon_123z1_13", Yo = "_title_123z1_18", Zo = "_description_123z1_24", Jo = "_action_123z1_30", dn = {
  emptyState: Xo,
  icon: Go,
  title: Yo,
  description: Zo,
  action: Jo
};
function S0({ icon: e, title: t, description: r, action: o, className: s }) {
  return /* @__PURE__ */ w("div", { className: [dn.emptyState, s].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ n("div", { className: dn.icon, children: e }),
    /* @__PURE__ */ n("div", { className: dn.title, children: t }),
    r != null && /* @__PURE__ */ n("div", { className: dn.description, children: r }),
    o != null && /* @__PURE__ */ n("div", { className: dn.action, children: o })
  ] });
}
const Qo = "_field_18dbj_1", es = "_label_18dbj_8", ts = "_required_18dbj_14", ns = "_hint_18dbj_19", rs = "_error_18dbj_24", un = {
  field: Qo,
  label: es,
  required: ts,
  hint: ns,
  error: rs
};
function D0({ label: e, htmlFor: t, required: r, hint: o, error: s, children: l, className: d }) {
  const a = Ue(), c = Ue(), _ = s != null ? a : o != null ? c : null, v = Qn(l) && _ != null ? Sr(
    l,
    {
      "aria-describedby": [
        l.props["aria-describedby"],
        _
      ].filter((u) => typeof u == "string").join(" ") || void 0,
      "aria-invalid": s != null ? !0 : l.props["aria-invalid"]
    }
  ) : l;
  return /* @__PURE__ */ w("div", { className: [un.field, d].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ w("label", { className: un.label, htmlFor: t, children: [
      e,
      r === !0 && /* @__PURE__ */ n("span", { className: un.required, "aria-hidden": "true", children: "*" })
    ] }),
    v,
    s != null ? /* @__PURE__ */ n("div", { id: a, className: un.error, "aria-live": "polite", children: s }) : o != null ? /* @__PURE__ */ n("div", { id: c, className: un.hint, children: o }) : null
  ] });
}
const os = "_form_qa5tm_1", ss = {
  form: os
}, Cr = zr(null);
function as() {
  const e = Dr(Cr);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function z0({
  model: e,
  onSubmit: t,
  onInvalidSubmit: r,
  action: o,
  method: s,
  children: l,
  className: d
}) {
  const [a, c] = V({}), [_, v] = V(0), u = se(a);
  u.current = a;
  const D = q((m) => {
    c((N) => N[m.name] === m ? N : { ...N, [m.name]: m });
  }, []), k = q((m) => {
    c((N) => {
      if (!(m in N)) return N;
      const p = { ...N };
      return delete p[m], p;
    });
  }, []), O = q(() => {
    const m = {};
    for (const N of Object.values(u.current)) {
      const p = N.validate();
      p.length > 0 && (m[N.name] = p);
    }
    return m;
  }, []), S = q(() => {
    const m = O();
    v((N) => N + 1), Object.keys(m).length === 0 ? t?.(e) : r?.(m);
  }, [O, e, t, r]), b = (m) => {
    o != null && s != null || (m.preventDefault(), S());
  }, h = $e(
    () => ({ registerField: D, unregisterField: k, submit: S, submitCount: _ }),
    [D, k, S, _]
  ), g = [ss.form, d].filter(Boolean).join(" ");
  return /* @__PURE__ */ n(Cr.Provider, { value: h, children: /* @__PURE__ */ n("form", { className: g, onSubmit: b, action: o, method: s, children: l }) });
}
const on = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", C0 = (e = "Required") => (t) => on(t) ? e : null, O0 = (e = "Invalid email") => (t) => on(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, M0 = (e, t = "Invalid format") => (r) => on(r) || e.test(String(r)) ? null : t, I0 = (e, t = `Minimum ${e} characters`) => (r) => on(r) || String(r).length >= e ? null : t, j0 = (e, t = `Maximum ${e} characters`) => (r) => on(r) || String(r).length <= e ? null : t, T0 = (e, t, r = `Between ${e} and ${t}`) => (o) => {
  if (on(o)) return null;
  const s = Number(o);
  return !Number.isNaN(s) && s >= e && s <= t ? null : r;
};
function ls(e, t, r) {
  return e.map((o) => o(t, r)).filter((o) => o != null);
}
function E0(e, t) {
  const { registerField: r, unregisterField: o, submitCount: s } = as(), [l, d] = V(t?.initialValue), [a, c] = V(!1), [_, v] = V(!1), u = se(() => []);
  u.current = () => ls(t?.validate ?? [], l), Ne(() => (r({ name: e, validate: () => u.current() }), () => o(e)), [e, r, o]), Ne(() => {
    s > 0 && (c(!0), v(!1));
  }, [s]);
  const D = a && !_ ? u.current() : [];
  return { value: l, setValue: (O) => {
    d(O), v(!0);
  }, errors: D };
}
const cs = "_select_14c07_1", is = "_invalid_14c07_33", ds = "_xs_14c07_39", us = "_sm_14c07_45", fs = "_md_14c07_51", _s = "_lg_14c07_57", ps = "_xl_14c07_63", qn = {
  select: cs,
  invalid: is,
  xs: ds,
  sm: us,
  md: fs,
  lg: _s,
  xl: ps
}, Bn = qe(function({ size: t = "md", invalid: r = !1, options: o, children: s, className: l, ...d }, a) {
  return /* @__PURE__ */ n(
    "select",
    {
      ref: a,
      className: [qn.select, qn[t], r ? qn.invalid : null, l].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...d,
      children: o != null ? o.map((c) => /* @__PURE__ */ n("option", { value: c.value, disabled: c.disabled, children: c.label }, c.value)) : s
    }
  );
}), Or = [
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
], Cn = {
  string: "Contains",
  number: "Equals",
  boolean: "Equals",
  date: "Equals",
  enum: "Equals"
};
function Pn(e, t) {
  return t.split(".").reduce((r, o) => {
    if (r != null)
      return r[o];
  }, e);
}
function nr(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function $n(e, t) {
  const r = nr(e), o = nr(t);
  if (typeof r == "number" && typeof o == "number") return r - o;
  const s = String(r ?? ""), l = String(o ?? "");
  return s < l ? -1 : s > l ? 1 : 0;
}
function rr(e, t, r) {
  const o = Pn(t, e.property), s = or(o, e.value, e.operator, r);
  if (e.secondOperator == null || e.secondValue === void 0) return s;
  const l = or(o, e.secondValue, e.secondOperator, r);
  return (e.logicalOperator ?? "And") === "And" ? s && l : s || l;
}
function or(e, t, r, o) {
  const s = o === "CaseInsensitive", l = (c) => s && typeof c == "string" ? c.toLowerCase() : c, d = l(e), a = l(t);
  switch (r) {
    case "Equals":
      return d === a || Array.isArray(d) && d.some((c) => l(c) === a);
    case "NotEquals":
      return d !== a && !(Array.isArray(d) && d.some((c) => l(c) === a));
    case "LessThan":
      return $n(d, a) < 0;
    case "LessThanOrEquals":
      return $n(d, a) <= 0;
    case "GreaterThan":
      return $n(d, a) > 0;
    case "GreaterThanOrEquals":
      return $n(d, a) >= 0;
    case "Contains":
      return typeof d == "string" && typeof a == "string" && d.includes(a);
    case "StartsWith":
      return typeof d == "string" && typeof a == "string" && d.startsWith(a);
    case "EndsWith":
      return typeof d == "string" && typeof a == "string" && d.endsWith(a);
    case "DoesNotContain":
      return typeof d == "string" && typeof a == "string" && !d.includes(a);
    case "In":
      return Array.isArray(a) && a.some((c) => l(c) === d);
    case "NotIn":
      return Array.isArray(a) && !a.some((c) => l(c) === d);
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
function tr(e) {
  return "filters" in e;
}
function Mr(e, t, r = {}) {
  const o = r.logicalOperator ?? "And", s = r.caseSensitivity ?? "CaseInsensitive";
  if (tr(t)) {
    if (t.filters.length === 0) return !0;
    const l = t.operator ?? o;
    return t.filters[l === "Or" ? "some" : "every"](
      (d) => Mr(e, d, { logicalOperator: l, caseSensitivity: s })
    );
  }
  return t.operator === "Custom", rr(t, e, s);
}
function Ir(e, t, r = {}) {
  return e.filter((o) => Mr(o, t, r));
}
function hs(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function mt(e) {
  return typeof e == "string" ? `"${hs(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(mt).join(", ")}]` : `"${String(e)}"`;
}
function ms(e) {
  const t = (o, s) => {
    switch (o) {
      case "Equals":
        return `${e.property}.Equals(${mt(s)})`;
      case "NotEquals":
        return `!${e.property}.Equals(${mt(s)})`;
      case "LessThan":
        return `${e.property}.LessThan(${mt(s)})`;
      case "LessThanOrEquals":
        return `${e.property}.LessThanOrEquals(${mt(s)})`;
      case "GreaterThan":
        return `${e.property}.GreaterThan(${mt(s)})`;
      case "GreaterThanOrEquals":
        return `${e.property}.GreaterThanOrEquals(${mt(s)})`;
      case "Contains":
        return `${e.property}.Contains(${mt(s)})`;
      case "StartsWith":
        return `${e.property}.StartsWith(${mt(s)})`;
      case "EndsWith":
        return `${e.property}.EndsWith(${mt(s)})`;
      case "DoesNotContain":
        return `!${e.property}.Contains(${mt(s)})`;
      case "In":
        return `${e.property}.In(${mt(s)})`;
      case "NotIn":
        return `!${e.property}.In(${mt(s)})`;
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
    return t(e.operator, e.value);
  const r = e.logicalOperator ?? "And";
  return `(${t(e.operator, e.value)} ${r} ${t(
    e.secondOperator,
    e.secondValue
  )})`;
}
function gs(e) {
  return tr(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(gs).filter(Boolean).join(` ${e.operator} `)})` : ms(e);
}
function bs(e) {
  return e.replace(/'/g, "''");
}
const ys = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function vs(e, t) {
  const r = e.property, o = t === "CaseInsensitive", s = (c) => o ? `tolower(${c})` : c, l = (c) => typeof c == "string" ? `'${bs(c)}'` : c instanceof Date ? `'${c.toISOString()}'` : String(c ?? ""), d = (c, _) => {
    const v = typeof _ == "string", u = v && o ? s(r) : r;
    switch (c) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${u} ${ys[c]} ${v && o ? s(l(_)) : l(_)}`;
      case "Contains":
        return `contains(${s(r)}, ${s(l(_))})`;
      case "StartsWith":
        return `startswith(${s(r)}, ${s(l(_))})`;
      case "EndsWith":
        return `endswith(${s(r)}, ${s(l(_))})`;
      case "DoesNotContain":
        return `not(contains(${s(r)}, ${s(l(_))}))`;
      case "In":
        return Array.isArray(_) ? `${u} in (${_.map((D) => l(D)).join(", ")})` : `${u} in (${l(_)})`;
      case "NotIn":
        return Array.isArray(_) ? `not(${u} in (${_.map((D) => l(D)).join(", ")}))` : `not(${u} in (${l(_)}))`;
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
    return d(e.operator, e.value);
  const a = (e.logicalOperator ?? "And") === "And" ? "and" : "or";
  return `(${d(e.operator, e.value)} ${a} ${d(
    e.secondOperator,
    e.secondValue
  )})`;
}
function xs(e, t = {}) {
  const r = t.caseSensitivity ?? "CaseInsensitive";
  if (tr(e)) {
    if (e.filters.length === 0) return "";
    const o = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((s) => xs(s, { caseSensitivity: r })).filter(Boolean).join(` ${o} `)})`;
  }
  return vs(e, r);
}
function ws(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((r, o) => {
    for (const s of t) {
      const l = s.sortOrder === "Ascending" ? 1 : -1, d = $n(Pn(r, s.property), Pn(o, s.property));
      if (d !== 0) return d * l;
    }
    return 0;
  });
}
const ks = "_filter_1jk5p_1", $s = "_rows_1jk5p_9", Ns = "_row_1jk5p_9", Ss = "_join_1jk5p_21", Ds = "_property_1jk5p_30", zs = "_operator_1jk5p_34", Cs = "_value_1jk5p_38", Os = "_remove_1jk5p_42", Ms = "_bar_1jk5p_58", Is = "_add_1jk5p_64", js = "_custom_1jk5p_78", Ts = "_summary_1jk5p_82", ft = {
  filter: ks,
  rows: $s,
  row: Ns,
  join: Ss,
  property: Ds,
  operator: zs,
  value: Cs,
  remove: Os,
  bar: Ms,
  add: Is,
  custom: js,
  summary: Ts
}, Es = {
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
function As({
  property: e,
  value: t,
  onChange: r
}) {
  if (e.editor != null)
    return /* @__PURE__ */ n(Oe, { children: e.editor({ value: t, onChange: r }) });
  const o = e.type ?? "string";
  if (o === "enum" && e.values != null)
    return /* @__PURE__ */ n(
      Bn,
      {
        "aria-label": e.title ?? e.name,
        className: ft.value,
        options: e.values,
        value: String(t ?? ""),
        onChange: (l) => r(l.target.value)
      }
    );
  if (o === "boolean")
    return /* @__PURE__ */ n(
      Bn,
      {
        "aria-label": e.title ?? e.name,
        className: ft.value,
        options: [
          { value: "", label: "" },
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        value: t == null ? "" : String(t),
        onChange: (l) => {
          l.target.value === "" ? r(void 0) : r(l.target.value === "true");
        }
      }
    );
  const s = o === "number" ? { type: "number" } : o === "date" ? { type: "date" } : { type: "text" };
  return /* @__PURE__ */ n(
    "input",
    {
      "aria-label": e.title ?? e.name,
      className: ft.value,
      ...s,
      value: t == null ? "" : String(t),
      onChange: (l) => r(o === "number" && l.target.value !== "" ? Number(l.target.value) : l.target.value)
    }
  );
}
function A0({
  properties: e,
  logicalOperator: t = "And",
  filterCaseSensitivity: r = "CaseInsensitive",
  initialRows: o,
  uniqueFilters: s = !1,
  className: l,
  viewChanged: d,
  items: a,
  children: c
}) {
  const [_, v] = V(
    () => o != null && o.length > 0 ? o.map((h, g) => ({ id: g, ...h })) : [{ id: 0, property: e[0]?.name ?? "", operator: Cn[e[0]?.type ?? "string"], value: void 0 }]
  ), u = (h, g) => {
    v((m) => m.map((N) => N.id === h ? { ...N, ...g } : N));
  }, D = () => {
    const h = _[_.length - 1], g = Math.max(0, ..._.map((N) => N.id)) + 1, m = e[0];
    v((N) => [
      ...N,
      {
        id: g,
        property: h?.property ?? m?.name ?? "",
        operator: Cn[e.find((p) => p.name === (h?.property ?? m?.name))?.type ?? "string"],
        value: void 0
      }
    ]);
  }, k = (h) => {
    v((g) => g.length > 1 ? g.filter((m) => m.id !== h) : g);
  }, O = $e(() => {
    const h = ["IsNull", "IsEmpty", "IsNotNull", "IsNotEmpty"], g = [];
    for (const m of _) {
      if (m.property === "" || (m.value == null || m.value === "") && !h.includes(m.operator)) continue;
      const p = {
        property: m.property,
        operator: m.operator,
        value: m.value
      };
      m.secondOperator != null && m.secondValue !== void 0 && (p.secondOperator = m.secondOperator, p.secondValue = m.secondValue, p.logicalOperator = m.logicalOperator ?? "And"), g.push(p);
    }
    return g;
  }, [_]), S = $e(() => a == null || O.length === 0 ? a : Ir(a, { operator: t, filters: O }, { caseSensitivity: r }), [a, O, t, r]);
  Ne(() => {
    d != null && a != null && d(S ?? []);
  }, [S]);
  const b = (h) => e.find((g) => g.name === h) ?? { name: h, type: "string" };
  return /* @__PURE__ */ w("div", { className: [ft.filter, l].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ n("div", { className: ft.rows, role: "group", "aria-label": "Filter conditions", children: _.map((h, g) => {
      const m = b(h.property), N = s ? [Cn[m.type ?? "string"]] : Or;
      return /* @__PURE__ */ w("div", { className: ft.row, children: [
        g > 0 ? /* @__PURE__ */ n("span", { className: ft.join, "aria-hidden": "true", children: t }) : null,
        /* @__PURE__ */ n(
          Bn,
          {
            "aria-label": `Condition ${g + 1} property`,
            className: ft.property,
            value: h.property,
            onChange: (p) => {
              const y = e.find((i) => i.name === p.target.value);
              u(h.id, {
                property: p.target.value,
                operator: Cn[y?.type ?? "string"],
                value: void 0
              });
            },
            options: e.map((p) => ({ value: p.name, label: p.title ?? p.name }))
          }
        ),
        /* @__PURE__ */ n(
          Bn,
          {
            "aria-label": `Condition ${g + 1} operator`,
            className: ft.operator,
            value: h.operator,
            onChange: (p) => u(h.id, { operator: p.target.value }),
            options: N.map((p) => ({ value: p, label: Es[p] }))
          }
        ),
        /* @__PURE__ */ n(As, { property: m, value: h.value, onChange: (p) => u(h.id, { value: p }) }),
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: ft.remove,
            "aria-label": `Remove condition ${g + 1}`,
            onClick: () => k(h.id),
            children: "×"
          }
        )
      ] }, h.id);
    }) }),
    /* @__PURE__ */ w("div", { className: ft.bar, children: [
      /* @__PURE__ */ n("button", { type: "button", className: ft.add, onClick: D, children: "Add filter" }),
      c != null ? /* @__PURE__ */ n("div", { className: ft.custom, children: c }) : null,
      a != null ? /* @__PURE__ */ w("span", { className: ft.summary, "aria-live": "polite", children: [
        S?.length ?? 0,
        " of ",
        a.length
      ] }) : null
    ] })
  ] });
}
const Ls = "_pager_15jh8_1", Rs = "_alignLeft_15jh8_10", Bs = "_alignCenter_15jh8_14", Ps = "_alignRight_15jh8_18", qs = "_alignJustify_15jh8_22", Fs = "_summary_15jh8_26", Ks = "_controls_15jh8_31", Hs = "_button_15jh8_37", Ws = "_active_15jh8_73", Us = "_ellipsis_15jh8_85", Vs = "_size_15jh8_91", ot = {
  pager: Ls,
  alignLeft: Rs,
  alignCenter: Bs,
  alignRight: Ps,
  alignJustify: qs,
  summary: Fs,
  controls: Ks,
  button: Hs,
  active: Ws,
  ellipsis: Us,
  size: Vs
};
function Xs(e, t, r, o) {
  return e.replace("{0}", String(t)).replace("{1}", String(r)).replace("{2}", String(o));
}
function sr(e, t) {
  return e.replace("{0}", String(t));
}
function Gs(e, t, r) {
  if (t <= r) return Array.from({ length: t }, (a, c) => c + 1);
  const o = Math.floor(r / 2);
  let s = Math.max(1, e - o);
  const l = Math.min(t, s + r - 1);
  s = Math.max(1, l - r + 1);
  const d = [];
  for (let a = s; a <= l; a++) d.push(a);
  return s > 2 && d.unshift("ellipsis"), s > 1 && d.unshift(1), l < t - 1 && d.push("ellipsis"), l < t && d.push(t), d;
}
function Ys({
  count: e,
  pageSize: t,
  page: r,
  pageNumber: o,
  defaultPage: s = 1,
  pageSizeOptions: l,
  pageNumbersCount: d = 5,
  alwaysVisible: a = !1,
  horizontalAlign: c = "left",
  showPagingSummary: _,
  showSummary: v,
  showPageSizeSelector: u = !0,
  pagingSummaryFormat: D = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: k,
  summaryTemplate: O,
  pageSizeText: S = "Items per page",
  firstPageTitle: b = "First page",
  prevPageTitle: h = "Previous page",
  nextPageTitle: g = "Next page",
  lastPageTitle: m = "Last page",
  pageTitleFormat: N = "Page {0}",
  pageAriaLabelFormat: p = "Page {0}",
  onPageChange: y,
  onPageSizeChange: i,
  ariaLabel: $ = "Pagination",
  className: C
}) {
  const U = r ?? o ?? s, [R, M] = V(U), f = r !== void 0 || o !== void 0, z = f ? U : R, I = Math.max(1, Math.ceil(e / t)), L = Math.min(Math.max(1, z), I), E = _ ?? v ?? !0, J = a || I > 1, oe = Gs(L, I, d), de = q(
    (X) => {
      const W = Math.min(Math.max(1, X), I);
      f || M(W);
      const B = (W - 1) * t;
      y?.({ page: W, skip: B, top: t, pageCount: I, pageSize: t });
    },
    [f, y, I, t]
  ), ne = c === "center" ? ot.alignCenter : c === "right" ? ot.alignRight : c === "justify" ? ot.alignJustify : ot.alignLeft, ae = { count: e, pageNumber: L, pageSize: t, pageCount: I }, le = (X) => {
    const W = Array.from(X.currentTarget.querySelectorAll("button[data-pager-page]")), B = W.indexOf(document.activeElement);
    B !== -1 && (X.key === "ArrowRight" || X.key === "ArrowDown" ? (X.preventDefault(), (W[B + 1] ?? W[0])?.focus()) : X.key === "ArrowLeft" || X.key === "ArrowUp" ? (X.preventDefault(), (W[B - 1] ?? W[W.length - 1])?.focus()) : X.key === "Home" ? (X.preventDefault(), W[0]?.focus()) : X.key === "End" && (X.preventDefault(), W[W.length - 1]?.focus()));
  };
  return J ? /* @__PURE__ */ w("nav", { className: [ot.pager, ne, C].filter(Boolean).join(" "), "aria-label": $, children: [
    E && /* @__PURE__ */ n("span", { className: ot.summary, "aria-live": "polite", children: k ? k(ae) : O ? O({ count: e, pageNumber: L, pageSize: t }) : Xs(D, L, I, e) }),
    /* @__PURE__ */ w("div", { className: ot.controls, role: "group", "aria-label": $, onKeyDown: le, children: [
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: ot.button,
          disabled: L <= 1,
          onClick: () => de(1),
          "aria-label": b,
          title: b,
          children: "«"
        }
      ),
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: ot.button,
          disabled: L <= 1,
          onClick: () => de(L - 1),
          "aria-label": h,
          title: h,
          children: "‹"
        }
      ),
      oe.map(
        (X, W) => X === "ellipsis" ? /* @__PURE__ */ n("span", { className: ot.ellipsis, "aria-hidden": "true", children: "…" }, `e${W}`) : /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            "data-pager-page": X,
            className: [ot.button, X === L ? ot.active : ""].filter(Boolean).join(" "),
            "aria-current": X === L ? "page" : void 0,
            "aria-label": sr(p, X),
            title: sr(N, X),
            onClick: () => de(X),
            children: X
          },
          X
        )
      ),
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: ot.button,
          disabled: L >= I,
          onClick: () => de(L + 1),
          "aria-label": g,
          title: g,
          children: "›"
        }
      ),
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: ot.button,
          disabled: L >= I,
          onClick: () => de(I),
          "aria-label": m,
          title: m,
          children: "»"
        }
      )
    ] }),
    u && l && l.length > 0 && /* @__PURE__ */ w("label", { className: ot.size, children: [
      /* @__PURE__ */ n("span", { children: S }),
      /* @__PURE__ */ n(
        "select",
        {
          value: t,
          onChange: (X) => i?.(Number(X.target.value)),
          "aria-label": S,
          children: l.map((X) => /* @__PURE__ */ n("option", { value: X, children: X }, X))
        }
      )
    ] })
  ] }) : null;
}
function Xn(e) {
  const { pageNumber: t, onPageChange: r, summaryTemplate: o, showSummary: s, ...l } = e;
  return /* @__PURE__ */ n(
    Ys,
    {
      page: t,
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
function Zs(e, t, r, o, s, l) {
  if (!t || !r) return e.map((c) => ({ type: "row", row: c }));
  const d = /* @__PURE__ */ new Map();
  e.forEach((c) => {
    const _ = String(s(c, t) ?? ""), v = d.get(_);
    v ? v.push(c) : d.set(_, [c]);
  });
  const a = [];
  return d.forEach((c, _) => {
    const v = c[0], u = v != null ? s(v, t) : void 0;
    a.push({
      type: "group",
      group: { key: _, display: l(u), property: t, title: r.title ?? t, count: c.length }
    }), o.has(_) && c.forEach((D) => a.push({ type: "row", row: D }));
  }), a;
}
function On(e, t) {
  return e.property ?? `col-${t}`;
}
function Js(e, t) {
  const r = {};
  let o = 0;
  return e.forEach(({ key: s, column: l }) => {
    if (!l.frozen) return;
    r[s] = o === 0 ? "0px" : `${o}px`;
    const d = t[s] ?? l.width ?? "8rem";
    o += parseFloat(d);
  }), r;
}
function Qs(e, t) {
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
function fn(e, t) {
  if (t != null)
    return Pn(e, t);
}
function ar(e, t) {
  if (t == null || t === "") return String(e ?? "");
  const r = /^N(\d+)$/i.exec(t);
  if (r && typeof e == "number") return e.toFixed(Number(r[1]));
  if (t === "d" || t === "D") {
    const o = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return o != null && !Number.isNaN(o.getTime()) ? o.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const lr = ["Ascending", "Descending", null];
function ea(e, t, r = {}) {
  const o = e.find((l) => l.property === t), s = lr[(o ? lr.indexOf(o.sortOrder) : -1) + 1] ?? null;
  return s == null ? e.filter((l) => l.property !== t) : r.multi ? [...e.filter((l) => l.property !== t), { property: t, sortOrder: s }] : [{ property: t, sortOrder: s }];
}
function ta(e, t) {
  return ws(e, t);
}
function na(e, t, r) {
  const o = Math.max(1, Math.ceil(e.length / r)), s = Math.min(Math.max(1, t), o), l = (s - 1) * r;
  return { items: e.slice(l, l + r), pageCount: o, pageNumber: s, total: e.length };
}
function ra(e, t, r = {}) {
  const o = [...t.filters.entries()].filter(([, a]) => a.value !== "" && a.value !== void 0).map(([a, c]) => ({
    property: a,
    operator: c.operator ?? "Contains",
    value: Qs(c.value, r.types?.[a] ?? "string")
  })), s = o.length > 0 ? Ir(e, { operator: r.logicalOperator ?? "And", filters: o }, {
    logicalOperator: r.logicalOperator ?? "And",
    caseSensitivity: r.caseSensitivity ?? "CaseInsensitive"
  }) : e, l = ta(s, t.sorts);
  return { ...na(l, t.pageNumber, t.pageSize), sorts: t.sorts, filters: t.filters, pageSize: t.pageSize };
}
function oa(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
const sa = "_grid_156jh_1", aa = "_toolbar_156jh_8", la = "_picker_156jh_13", ca = "_pickerButton_156jh_17", ia = "_pickerPanel_156jh_31", da = "_pickerItem_156jh_46", ua = "_groupPanel_156jh_55", fa = "_groupPanelActive_156jh_66", _a = "_groupPanelText_156jh_70", pa = "_groupChip_156jh_74", ha = "_groupRemove_156jh_85", ma = "_groupRow_156jh_94", ga = "_groupCell_156jh_98", ba = "_groupToggle_156jh_103", ya = "_editRow_156jh_116", va = "_editCell_156jh_120", xa = "_editInput_156jh_125", wa = "_commandCell_156jh_135", ka = "_commandButton_156jh_141", $a = "_data_156jh_156", Na = "_table_156jh_163", Sa = "_header_156jh_169", Da = "_center_156jh_181", za = "_right_156jh_185", Ca = "_sortButton_156jh_189", Oa = "_sortIndicator_156jh_207", Ma = "_sortIndex_156jh_211", Ia = "_cell_156jh_222", ja = "_clickable_156jh_236", Ta = "_frozen_156jh_244", Ea = "_selected_156jh_250", Aa = "_resizeHandle_156jh_254", La = "_filterCell_156jh_272", Ra = "_filterSelect_156jh_280", Ba = "_filterInput_156jh_290", Pa = "_empty_156jh_301", qa = "_loading_156jh_307", Fa = "_visuallyHidden_156jh_317", pe = {
  grid: sa,
  toolbar: aa,
  picker: la,
  pickerButton: ca,
  pickerPanel: ia,
  pickerItem: da,
  groupPanel: ua,
  groupPanelActive: fa,
  groupPanelText: _a,
  groupChip: pa,
  groupRemove: ha,
  groupRow: ma,
  groupCell: ga,
  groupToggle: ba,
  editRow: ya,
  editCell: va,
  editInput: xa,
  commandCell: wa,
  commandButton: ka,
  data: $a,
  table: Na,
  header: Sa,
  center: Da,
  right: za,
  sortButton: Ca,
  sortIndicator: Oa,
  sortIndex: Ma,
  cell: Ia,
  clickable: ja,
  frozen: Ta,
  selected: Ea,
  resizeHandle: Aa,
  filterCell: La,
  filterSelect: Ra,
  filterInput: Ba,
  empty: Pa,
  loading: qa,
  visuallyHidden: Fa
}, Ka = {
  Ascending: "ascending",
  Descending: "descending"
};
function cr(e, t) {
  return e.filterable ?? t;
}
function Ha(e, t) {
  return e.sortable ?? t;
}
function Wa(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dt-grid-resize]");
}
function L0({
  columns: e,
  rows: t,
  rowKey: r,
  allowSorting: o = !1,
  allowMultiColumnSorting: s = !1,
  showSortIndex: l = !1,
  allowFiltering: d = !1,
  filterCaseSensitivity: a = "CaseInsensitive",
  logicalOperator: c = "And",
  allowPaging: _ = !1,
  pageSize: v = 10,
  pageSizeOptions: u,
  pageNumbersCount: D = 5,
  pagerPosition: k = "Bottom",
  showPagingSummary: O = !0,
  showPageSizeSelector: S = !0,
  selectionMode: b = "None",
  selectedKeys: h,
  onSelectionChange: g,
  showColumnPicker: m = !1,
  columnPickerText: N = "Columns",
  allowColumnResize: p = !1,
  allowColumnReorder: y = !1,
  allowGrouping: i = !1,
  groupPanelText: $ = "Drag a column header here to group",
  groupExpanded: C = !0,
  editMode: U = "None",
  allowRowCreate: R = !1,
  onRowUpdate: M,
  onRowCreate: f,
  onRowDelete: z,
  isLoading: I = !1,
  empty: L = "No records found",
  ariaLabel: E,
  className: J,
  onRowClick: oe
}) {
  const [de, ne] = V([]), [ae, le] = V(/* @__PURE__ */ new Map()), [X, W] = V(1), [B, te] = V(v), [he, Z] = V(
    () => e.map((A, P) => On(A, P))
  ), [me, ye] = V(
    () => new Set(e.map((A, P) => A.visible !== !1 ? On(A, P) : "").filter(Boolean))
  ), [ze, He] = V({}), [Ie, Xe] = V(!1), [be, Ge] = V(null), [tt, We] = V(null), [Je, Fe] = V(null), [Ye, H] = V({}), x = se(null), T = se(null), K = $e(() => {
    const A = /* @__PURE__ */ new Map();
    return e.forEach((P, ue) => A.set(On(P, ue), P)), A;
  }, [e]), Q = $e(
    () => he.filter((A) => me.has(A)).map((A) => ({ key: A, column: K.get(A) })).filter((A) => A.column != null),
    [he, me, K]
  ), G = $e(
    () => Js(Q, ze),
    [Q, ze]
  ), fe = U !== "None" || z != null || R, we = $e(
    () => ra(t, { sorts: de, filters: ae, pageNumber: X, pageSize: B }, {
      logicalOperator: c,
      caseSensitivity: a,
      types: Object.fromEntries(
        e.filter((A) => A.type != null && A.property != null).map((A) => [A.property, A.type])
      )
    }),
    [t, de, ae, X, B, c, a, e]
  ), Re = $e(
    () => be ? e.find((A) => A.property === be) : void 0,
    [be, e]
  ), je = $e(
    () => tt ?? new Set(C ? we.items.map((A) => String(fn(A, be ?? "") ?? "")) : []),
    [tt, C, we.items, be]
  ), nt = $e(
    () => Zs(
      we.items,
      be ?? void 0,
      Re,
      je,
      fn,
      (A) => ar(A, Re?.format)
    ),
    [we.items, be, Re, je]
  ), yt = $e(
    () => be ? Q.filter((A) => A.column.property !== be) : Q,
    [Q, be]
  ), Y = (A) => {
    A !== "" && ne(ea(de, A, { multi: s }));
  }, Se = (A, P) => {
    le((ue) => {
      const ve = new Map(ue);
      return ve.set(A, P), ve;
    }), W(1);
  }, F = (A) => {
    te(A), W(1);
  }, ee = (A) => {
    if (b === "None") return;
    const P = r(A), ue = h ?? [];
    let ve;
    b === "Single" ? ve = ue.length === 1 && ue[0] === P ? [] : [P] : ve = ue.includes(P) ? ue.filter((rt) => rt !== P) : [...ue, P], g?.(ve);
  }, ie = (A) => {
    oe?.(A);
  }, _e = (A, P, ue) => {
    x.current = { key: A, startX: P, startWidth: ue };
  }, ce = (A) => {
    const P = x.current;
    if (!P) return;
    const ue = A - P.startX, ve = Math.max(48, P.startWidth + ue);
    He((rt) => ({ ...rt, [P.key]: `${ve}px` }));
  }, ge = () => {
    x.current = null;
  }, Ae = (A) => {
    T.current = A;
  }, Be = (A) => {
    const P = T.current;
    T.current = null, !(!P || P === A) && Z((ue) => {
      const ve = [...ue], rt = ve.indexOf(P), pt = ve.indexOf(A);
      return rt < 0 || pt < 0 ? ue : (ve.splice(rt, 1), ve.splice(pt, 0, P), ve);
    });
  }, j = (A) => {
    ye((P) => {
      const ue = new Set(P);
      return ue.has(A) ? ue.delete(A) : ue.add(A), ue;
    });
  }, re = () => {
    const A = T.current;
    if (T.current = null, !A || !i) return;
    const ue = K.get(A)?.property;
    ue && (Ge(ue), We(null));
  }, Ce = () => {
    Ge(null), We(null);
  }, ke = (A) => {
    We((P) => {
      const ue = P ?? new Set(C ? we.items.map((rt) => String(fn(rt, be ?? "") ?? "")) : []), ve = new Set(ue);
      return ve.has(A) ? ve.delete(A) : ve.add(A), ve;
    });
  }, Te = (A) => {
    const P = {};
    e.forEach((ue) => {
      ue.property && (P[ue.property] = fn(A, ue.property));
    }), H(P), Fe(String(r(A)));
  }, Qe = () => {
    const A = {};
    e.forEach((P) => {
      P.property && P.type === "boolean" && (A[P.property] = !1);
    }), H(A), Fe("__new__");
  }, ct = () => {
    Fe(null), H({});
  }, Ct = (A) => {
    if (Je === "__new__") {
      const P = Object.fromEntries(
        e.filter((ue) => ue.property).map((ue) => [ue.property, Ye[ue.property]])
      );
      f?.(P);
    } else if (A != null) {
      const P = { ...A, ...Ye };
      M?.(A, P);
    }
    ct();
  }, Sn = _ && (k === "Top" || k === "TopAndBottom"), sn = _ && (k === "Bottom" || k === "TopAndBottom"), Er = d && e.some((A) => cr(A, d)), Ar = (A, P, ue) => A.render ? A.render(P, { index: 0 }) : ar(fn(P, A.property), A.format), Lr = (A) => {
    const P = [pe.cell];
    return A.align === "center" && P.push(pe.center), A.align === "right" && P.push(pe.right), A.frozen && P.push(pe.frozen), P.join(" ");
  };
  return /* @__PURE__ */ w("div", { className: [pe.grid, J].filter(Boolean).join(" "), children: [
    Sn && /* @__PURE__ */ n(
      Xn,
      {
        pageNumber: we.pageNumber,
        pageSize: we.pageSize,
        count: we.total,
        pageSizeOptions: u,
        pageNumbersCount: D,
        showSummary: O,
        showPageSizeSelector: S,
        ariaLabel: sn ? "Pagination (top)" : "Pagination",
        onPageChange: W,
        onPageSizeChange: F
      }
    ),
    (i || R || m) && /* @__PURE__ */ w("div", { className: pe.toolbar, children: [
      i && /* @__PURE__ */ n(
        "div",
        {
          className: [pe.groupPanel, be ? pe.groupPanelActive : ""].filter(Boolean).join(" "),
          "data-dt-grid-group-panel": !0,
          onDragOver: i ? (A) => A.preventDefault() : void 0,
          onDrop: i ? re : void 0,
          children: be ? /* @__PURE__ */ w("span", { className: pe.groupChip, children: [
            Re?.title ?? be,
            ":",
            " ",
            /* @__PURE__ */ n("button", { type: "button", className: pe.groupRemove, onClick: Ce, "aria-label": `Remove group by ${Re?.title ?? be}`, children: "×" })
          ] }) : /* @__PURE__ */ n("span", { className: pe.groupPanelText, children: $ })
        }
      ),
      R && /* @__PURE__ */ n("button", { type: "button", className: pe.pickerButton, onClick: Qe, children: "Add row" }),
      m && /* @__PURE__ */ w("div", { className: pe.picker, children: [
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: pe.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": Ie,
            onClick: () => Xe((A) => !A),
            children: N
          }
        ),
        Ie && /* @__PURE__ */ n("div", { className: pe.pickerPanel, role: "menu", "aria-label": N, children: e.map((A, P) => {
          const ue = On(A, P);
          return /* @__PURE__ */ w("label", { className: pe.pickerItem, children: [
            /* @__PURE__ */ n(
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
          "aria-rowcount": we.total + 1,
          "aria-label": E,
          "aria-busy": I || void 0,
          children: [
            /* @__PURE__ */ w("colgroup", { children: [
              yt.map(({ key: A, column: P }) => /* @__PURE__ */ n(
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
              fe && /* @__PURE__ */ n("col", { style: { width: "8rem" } })
            ] }),
            /* @__PURE__ */ w("thead", { children: [
              /* @__PURE__ */ w("tr", { children: [
                yt.map(({ key: A, column: P }) => {
                  const ue = Ha(P, o), ve = de.find((Ee) => Ee.property === P.property), rt = ve ? de.indexOf(ve) + 1 : 0, pt = P.align ?? "left";
                  return /* @__PURE__ */ w(
                    "th",
                    {
                      "aria-sort": ue && ve ? Ka[ve.sortOrder] : "none",
                      className: [
                        pe.header,
                        pt === "center" ? pe.center : "",
                        pt === "right" ? pe.right : "",
                        P.frozen ? pe.frozen : ""
                      ].filter(Boolean).join(" "),
                      style: P.frozen ? { left: G[A] } : void 0,
                      scope: "col",
                      draggable: y || i || void 0,
                      onDragStart: y || i ? (Ee) => {
                        Ee.dataTransfer && (Ee.dataTransfer.effectAllowed = "move"), Ae(A);
                      } : void 0,
                      onDragOver: y ? (Ee) => Ee.preventDefault() : void 0,
                      onDrop: y ? () => Be(A) : void 0,
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
                              ve && /* @__PURE__ */ n("span", { className: pe.sortIndicator, "aria-hidden": "true", children: ve.sortOrder === "Ascending" ? "▲" : "▼" }),
                              rt > 1 && l && /* @__PURE__ */ n("span", { className: pe.sortIndex, children: rt })
                            ]
                          }
                        ) : P.title ?? P.property,
                        p && /* @__PURE__ */ n(
                          "span",
                          {
                            className: pe.resizeHandle,
                            "data-dt-grid-resize": !0,
                            role: "separator",
                            "aria-orientation": "vertical",
                            "aria-label": `Resize ${P.title ?? P.property}`,
                            onMouseDown: (Ee) => {
                              Ee.preventDefault(), Ee.stopPropagation();
                              const an = ze[A] ?? P.width, Dn = an ? parseFloat(an) : 96;
                              _e(A, Ee.clientX, Number.isFinite(Dn) ? Dn : 96);
                            },
                            onMouseMove: (Ee) => {
                              x.current?.key === A && ce(Ee.clientX);
                            },
                            onMouseUp: ge,
                            onMouseLeave: () => {
                              x.current?.key === A && ge();
                            }
                          }
                        )
                      ]
                    },
                    A
                  );
                }),
                fe && /* @__PURE__ */ n("th", { className: pe.header, scope: "col", children: "Actions" })
              ] }),
              Er && /* @__PURE__ */ n("tr", { children: yt.map(({ key: A, column: P }) => {
                if (!cr(P, d)) return /* @__PURE__ */ n("td", { className: pe.filterCell }, A);
                const ue = ae.get(P.property ?? "");
                return /* @__PURE__ */ w("td", { className: pe.filterCell, children: [
                  /* @__PURE__ */ w("label", { className: pe.visuallyHidden, htmlFor: `df-${P.property}`, children: [
                    "Filter ",
                    P.title ?? P.property
                  ] }),
                  /* @__PURE__ */ n(
                    "select",
                    {
                      id: `df-${P.property}`,
                      className: pe.filterSelect,
                      value: ue?.operator ?? oa(P.type ?? "string"),
                      onChange: (ve) => Se(P.property ?? "", { ...ue, operator: ve.target.value }),
                      "aria-label": `${P.title ?? P.property} operator`,
                      children: Or.filter((ve) => ve !== "Custom").map((ve) => /* @__PURE__ */ n("option", { value: ve, children: ve }, ve))
                    }
                  ),
                  /* @__PURE__ */ n(
                    "input",
                    {
                      className: pe.filterInput,
                      value: ue?.value ?? "",
                      onChange: (ve) => Se(P.property ?? "", { ...ue, value: ve.target.value }),
                      placeholder: `Filter ${P.title ?? P.property}`,
                      "aria-label": `${P.title ?? P.property} value`
                    }
                  )
                ] }, A);
              }) })
            ] }),
            /* @__PURE__ */ w("tbody", { children: [
              Je === "__new__" && /* @__PURE__ */ w("tr", { className: pe.editRow, children: [
                yt.map(({ key: A, column: P }) => /* @__PURE__ */ n("td", { className: pe.editCell, children: P.property && /* @__PURE__ */ n(
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
                  /* @__PURE__ */ n("button", { type: "button", className: pe.commandButton, onClick: () => Ct(), children: "Save" }),
                  /* @__PURE__ */ n("button", { type: "button", className: pe.commandButton, onClick: ct, children: "Cancel" })
                ] })
              ] }),
              nt.map((A) => {
                if (A.type === "group" && A.group) {
                  const pt = je.has(A.group.key);
                  return /* @__PURE__ */ n("tr", { className: pe.groupRow, children: /* @__PURE__ */ n("td", { colSpan: yt.length + (fe ? 1 : 0), className: pe.groupCell, children: /* @__PURE__ */ w(
                    "button",
                    {
                      type: "button",
                      className: pe.groupToggle,
                      "aria-expanded": pt,
                      onClick: () => ke(A.group.key),
                      children: [
                        /* @__PURE__ */ n("span", { "aria-hidden": "true", children: pt ? "▼" : "▶" }),
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
                const P = A.row, ue = r(P), ve = (h ?? []).includes(ue), rt = Je != null && Je === String(ue);
                return /* @__PURE__ */ w(
                  "tr",
                  {
                    className: [
                      oe || b !== "None" ? pe.clickable : "",
                      ve ? pe.selected : "",
                      rt ? pe.editRow : ""
                    ].filter(Boolean).join(" "),
                    "aria-selected": b !== "None" ? ve : void 0,
                    onClick: oe || b !== "None" ? (pt) => {
                      Wa(pt.target) || (ie(P), ee(P));
                    } : void 0,
                    children: [
                      yt.map(({ key: pt, column: Ee }) => /* @__PURE__ */ n(
                        "td",
                        {
                          className: Lr(Ee),
                          style: Ee.frozen ? { left: G[pt] } : void 0,
                          children: rt && Ee.property ? /* @__PURE__ */ n(
                            "input",
                            {
                              className: pe.editInput,
                              type: Ee.type === "number" ? "number" : Ee.type === "boolean" ? "checkbox" : "text",
                              checked: Ee.type === "boolean" ? !!Ye[Ee.property] : void 0,
                              value: Ee.type === "boolean" ? void 0 : String(Ye[Ee.property] ?? ""),
                              onChange: (an) => H((Dn) => ({
                                ...Dn,
                                [Ee.property]: Ee.type === "boolean" ? an.target.checked : an.target.value
                              })),
                              "aria-label": `${Ee.title ?? Ee.property} (edit)`
                            }
                          ) : Ar(Ee, P)
                        },
                        pt
                      )),
                      fe && /* @__PURE__ */ n("td", { className: pe.commandCell, children: rt ? /* @__PURE__ */ w(Oe, { children: [
                        /* @__PURE__ */ n("button", { type: "button", className: pe.commandButton, onClick: () => Ct(P), children: "Save" }),
                        /* @__PURE__ */ n("button", { type: "button", className: pe.commandButton, onClick: ct, children: "Cancel" })
                      ] }) : /* @__PURE__ */ w(Oe, { children: [
                        U !== "None" && /* @__PURE__ */ n("button", { type: "button", className: pe.commandButton, onClick: () => Te(P), children: "Edit" }),
                        z && /* @__PURE__ */ n("button", { type: "button", className: pe.commandButton, onClick: () => z(P), children: "Delete" })
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
      we.items.length === 0 && !I && /* @__PURE__ */ n("div", { className: pe.empty, children: L }),
      I && /* @__PURE__ */ n("div", { className: pe.loading, role: "status", children: "Loading…" })
    ] }),
    sn && /* @__PURE__ */ n(
      Xn,
      {
        pageNumber: we.pageNumber,
        pageSize: we.pageSize,
        count: we.total,
        pageSizeOptions: u,
        pageNumbersCount: D,
        showSummary: O,
        showPageSizeSelector: S,
        ariaLabel: Sn ? "Pagination (bottom)" : "Pagination",
        onPageChange: W,
        onPageSizeChange: F
      }
    )
  ] });
}
const Ua = "_wrap_1ts67_1", Va = "_grid_1ts67_7", Xa = "_stacked_1ts67_13", Ga = "_item_1ts67_19", Ya = "_empty_1ts67_25", _n = {
  wrap: Ua,
  grid: Va,
  stacked: Xa,
  item: Ga,
  empty: Ya
};
function R0({
  data: e,
  pageSize: t = 10,
  pageSizeOptions: r,
  wrapItems: o = !1,
  itemTemplate: s,
  emptyMessage: l = "No records found",
  emptyTemplate: d,
  loadingTemplate: a,
  isLoading: c = !1,
  showPageSizeSelector: _ = !0,
  className: v,
  ariaLabel: u = "Data list"
}) {
  const [D, k] = V(1), [O, S] = V(t), b = e.length, h = Math.max(1, Math.ceil(b / O)), g = Math.min(Math.max(1, D), h), m = $e(() => {
    const p = (g - 1) * O;
    return e.slice(p, p + O);
  }, [e, g, O]), N = o ? _n.grid : _n.stacked;
  return /* @__PURE__ */ w("div", { className: [_n.wrap, v].filter(Boolean).join(" "), "aria-label": u, children: [
    c && a != null ? a : b === 0 ? d ?? /* @__PURE__ */ n("div", { className: _n.empty, children: l }) : /* @__PURE__ */ n("div", { className: N, children: m.map((p, y) => /* @__PURE__ */ n("div", { className: _n.item, children: s ? s(p, y) : String(p) }, y)) }),
    /* @__PURE__ */ n(
      Xn,
      {
        pageNumber: g,
        pageSize: O,
        count: b,
        pageSizeOptions: r,
        showPageSizeSelector: _,
        onPageChange: k,
        onPageSizeChange: (p) => {
          S(p), k(1);
        }
      }
    )
  ] });
}
const Za = "_label_11cq1_1", Ja = {
  label: Za
}, B0 = qe(
  function({ className: t, children: r, ...o }, s) {
    return /* @__PURE__ */ n("label", { ref: s, className: [Ja.label, t].filter(Boolean).join(" "), ...o, children: r });
  }
), Qa = "_input_6qj37_1", el = "_invalid_6qj37_31", tl = "_xs_6qj37_37", nl = "_sm_6qj37_43", rl = "_md_6qj37_49", ol = "_lg_6qj37_55", sl = "_xl_6qj37_61", Fn = {
  input: Qa,
  invalid: el,
  xs: tl,
  sm: nl,
  md: rl,
  lg: ol,
  xl: sl
}, P0 = qe(function({ size: t = "md", invalid: r = !1, className: o, ...s }, l) {
  return /* @__PURE__ */ n(
    "input",
    {
      ref: l,
      className: [Fn.input, Fn[t], r ? Fn.invalid : null, o].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...s
    }
  );
}), al = "_checkbox_fkb13_1", ll = {
  checkbox: al
}, q0 = qe(function({ className: t, ...r }, o) {
  return /* @__PURE__ */ n(
    "input",
    {
      ref: o,
      type: "checkbox",
      className: [ll.checkbox, t].filter(Boolean).join(" "),
      ...r
    }
  );
}), cl = {
  switch: "_switch_ew7ga_1"
}, il = qe(function({ className: t, ...r }, o) {
  return /* @__PURE__ */ n(
    "input",
    {
      ref: o,
      type: "checkbox",
      role: "switch",
      className: [cl.switch, t].filter(Boolean).join(" "),
      ...r
    }
  );
}), dl = "_trigger_dbm3e_1", ul = "_tooltip_dbm3e_7", fl = "_top_dbm3e_34", _l = "_right_dbm3e_40", pl = "_bottom_dbm3e_46", hl = "_left_dbm3e_52", ml = "_arrow_dbm3e_58", Mn = {
  trigger: dl,
  tooltip: ul,
  "se-tooltip-in": "_se-tooltip-in_dbm3e_1",
  top: fl,
  right: _l,
  bottom: pl,
  left: hl,
  arrow: ml
};
function F0({
  content: e,
  children: t,
  placement: r = "top",
  delayMs: o = 300,
  className: s
}) {
  const l = Ue(), d = se(null), [a, c] = V(!1), _ = () => {
    d.current = window.setTimeout(() => c(!0), o);
  }, v = () => {
    d.current !== null && (window.clearTimeout(d.current), d.current = null), c(!1);
  };
  Ne(() => {
    if (!a) return;
    const D = (k) => {
      k.key === "Escape" && v();
    };
    return window.addEventListener("keydown", D), () => window.removeEventListener("keydown", D);
  }, [a]);
  const u = Qn(t) ? Sr(
    t,
    {
      "aria-describedby": [
        t.props["aria-describedby"],
        a ? l : null
      ].filter((D) => typeof D == "string").join(" ") || void 0
    }
  ) : t;
  return /* @__PURE__ */ w(
    "span",
    {
      className: [Mn.trigger, s].filter(Boolean).join(" "),
      onMouseEnter: _,
      onMouseLeave: v,
      onFocus: _,
      onBlur: v,
      children: [
        u,
        a && /* @__PURE__ */ w(
          "span",
          {
            role: "tooltip",
            id: l,
            className: [Mn.tooltip, Mn[r]].filter(Boolean).join(" "),
            children: [
              e,
              /* @__PURE__ */ n("span", { className: Mn.arrow, "aria-hidden": "true" })
            ]
          }
        )
      ]
    }
  );
}
const gl = "_dialog_1kllc_1", bl = "_sm_1kllc_30", yl = "_md_1kllc_34", vl = "_lg_1kllc_38", xl = "_header_1kllc_42", wl = "_title_1kllc_51", kl = "_description_1kllc_58", $l = "_close_1kllc_65", Nl = "_body_1kllc_84", Sl = "_footer_1kllc_90", Bt = {
  dialog: gl,
  "se-dialog-in": "_se-dialog-in_1kllc_1",
  sm: bl,
  md: yl,
  lg: vl,
  header: xl,
  title: wl,
  description: kl,
  close: $l,
  body: Nl,
  footer: Sl
};
function K0({
  open: e,
  onClose: t,
  title: r,
  description: o,
  children: s,
  footer: l,
  size: d = "md",
  className: a
}) {
  const c = se(null), _ = Ue(), v = Ue();
  return Ne(() => {
    const u = c.current;
    u && (e && !u.open ? u.showModal() : !e && u.open && u.close());
  }, [e]), /* @__PURE__ */ w(
    "dialog",
    {
      ref: c,
      className: [Bt.dialog, Bt[d], a].filter(Boolean).join(" "),
      onClose: t,
      "aria-labelledby": r ? _ : void 0,
      "aria-describedby": o ? v : void 0,
      children: [
        r && /* @__PURE__ */ w("header", { className: Bt.header, children: [
          /* @__PURE__ */ w("div", { children: [
            /* @__PURE__ */ n("h2", { id: _, className: Bt.title, children: r }),
            o && /* @__PURE__ */ n("p", { id: v, className: Bt.description, children: o })
          ] }),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Bt.close,
              onClick: t,
              "aria-label": "Close dialog",
              children: "×"
            }
          )
        ] }),
        s && /* @__PURE__ */ n("div", { className: Bt.body, children: s }),
        l && /* @__PURE__ */ n("footer", { className: Bt.footer, children: l })
      ]
    }
  );
}
const Dl = "_viewport_15dkh_1", zl = "_topLeft_15dkh_13", Cl = "_topRight_15dkh_20", Ol = "_bottomLeft_15dkh_25", Ml = "_toast_15dkh_30", Il = "_leaving_15dkh_61", jl = "_info_15dkh_77", Tl = "_success_15dkh_82", El = "_warning_15dkh_87", Al = "_danger_15dkh_92", Ll = "_content_15dkh_97", Rl = "_title_15dkh_102", Bl = "_description_15dkh_125", Pl = "_dismiss_15dkh_132", ql = "_actions_15dkh_151", Fl = "_action_15dkh_151", Kl = "_cancel_15dkh_159", Hl = "_progress_15dkh_195", ht = {
  viewport: Dl,
  topLeft: zl,
  topRight: Cl,
  bottomLeft: Ol,
  toast: Ml,
  "se-toast-in": "_se-toast-in_15dkh_1",
  leaving: Il,
  "se-toast-out": "_se-toast-out_15dkh_1",
  info: jl,
  success: Tl,
  warning: El,
  danger: Al,
  content: Ll,
  title: Rl,
  description: Bl,
  dismiss: Pl,
  actions: ql,
  action: Fl,
  cancel: Kl,
  progress: Hl,
  "se-toast-progress": "_se-toast-progress_15dkh_1"
}, jr = zr(null);
function H0() {
  const e = Dr(jr);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const Wl = 200, Ul = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function W0({
  children: e,
  durationMs: t = 4e3,
  position: r = "bottom-right",
  pauseOnHover: o = !0,
  className: s
}) {
  const [l, d] = V([]), [a, c] = V(!1), _ = se([]), v = se(/* @__PURE__ */ new Map()), u = se(!1), D = se(0), k = (M) => {
    u.current = M, c(M);
  }, O = q((M) => {
    const f = v.current.get(M);
    f && (window.clearTimeout(f.timeoutId), f.remaining = Math.max(0, f.remaining - (Date.now() - f.startedAt)));
  }, []), S = q((M) => {
    const f = v.current.get(M);
    f && (window.clearTimeout(f.timeoutId), v.current.delete(M));
  }, []), b = q(
    (M) => {
      S(M), d((f) => {
        const z = f.filter((I) => I.id !== M);
        return _.current = z, z;
      });
    },
    [S]
  ), h = q(
    (M) => {
      const f = _.current.find((z) => z.id === M);
      !f || f.leaving || (f.onAutoClose?.(), b(M));
    },
    [b]
  ), g = q(
    (M) => {
      const f = v.current.get(M);
      !f || f.remaining <= 0 || (f.startedAt = Date.now(), f.timeoutId = window.setTimeout(() => h(M), f.remaining));
    },
    [h]
  ), m = q(() => {
    u.current || v.current.forEach((M, f) => O(f)), k(!0);
  }, [O]), N = q(() => {
    v.current.forEach((M, f) => g(f)), k(!1);
  }, [g]);
  Ne(() => {
    if (!o) return;
    const M = () => {
      document.hidden ? m() : N();
    };
    return document.addEventListener("visibilitychange", M), () => document.removeEventListener("visibilitychange", M);
  }, [o, m, N]);
  const p = q(
    (M) => {
      const f = _.current.find((z) => z.id === M);
      !f || f.leaving || (f.onDismiss?.(), d((z) => {
        const I = z.map((L) => L.id === M ? { ...L, leaving: !0 } : L);
        return _.current = I, I;
      }), window.setTimeout(() => b(M), Wl));
    },
    [b]
  ), y = q(
    (M) => {
      if (M.durationMs <= 0) return;
      const f = {
        remaining: M.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      v.current.set(M.id, f), u.current || g(M.id);
    },
    [g]
  ), i = q(
    (M) => {
      const f = _.current.find((I) => I.id === M.id), z = {
        id: M.id ?? ++D.current,
        title: M.title,
        description: M.description,
        tone: M.tone ?? "info",
        durationMs: M.durationMs ?? t,
        action: M.action,
        cancel: M.cancel,
        dismissible: M.dismissible ?? !0,
        closeOnClick: M.closeOnClick ?? !1,
        showProgress: M.showProgress ?? !1,
        position: M.position ?? r,
        onDismiss: M.onDismiss,
        onAutoClose: M.onAutoClose
      };
      d((I) => {
        const L = f ? I.map((E) => E.id === z.id ? { ...z, leaving: !1 } : E) : [...I, z];
        return _.current = L, L;
      }), f && S(z.id), y(z);
    },
    [t, r, y, S]
  ), $ = $e(() => ({ toast: i }), [i]), C = $e(
    () => Array.from(/* @__PURE__ */ new Set([r, ...l.map((M) => M.position)])),
    [r, l]
  ), U = o ? m : void 0, R = o ? N : void 0;
  return /* @__PURE__ */ w(jr.Provider, { value: $, children: [
    e,
    C.map((M) => /* @__PURE__ */ n(
      "div",
      {
        className: [
          ht.viewport,
          ht[Ul[M]],
          s
        ].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: U,
        onMouseLeave: R,
        children: l.filter((f) => f.position === M).map((f) => /* @__PURE__ */ w(
          "div",
          {
            role: f.tone === "danger" ? "alert" : "status",
            "data-paused": a ? "true" : "false",
            "data-clickable": f.closeOnClick ? "true" : "false",
            className: [
              ht.toast,
              ht[f.tone],
              f.leaving ? ht.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: f.closeOnClick ? () => p(f.id) : void 0,
            children: [
              /* @__PURE__ */ w("div", { className: ht.content, children: [
                /* @__PURE__ */ n("div", { className: ht.title, children: f.title }),
                f.description && /* @__PURE__ */ n("div", { className: ht.description, children: f.description }),
                (f.action || f.cancel) && /* @__PURE__ */ w("div", { className: ht.actions, children: [
                  f.action && /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      className: ht.action,
                      onClick: () => {
                        f.action?.onClick?.(), p(f.id);
                      },
                      children: f.action.label
                    }
                  ),
                  f.cancel && /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      className: ht.cancel,
                      onClick: () => {
                        f.cancel?.onClick?.(), p(f.id);
                      },
                      children: f.cancel.label
                    }
                  )
                ] })
              ] }),
              f.dismissible && /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: ht.dismiss,
                  onClick: () => p(f.id),
                  "aria-label": "Dismiss notification",
                  children: "×"
                }
              ),
              f.showProgress && f.durationMs > 0 && /* @__PURE__ */ n(
                "div",
                {
                  className: ht.progress,
                  style: { animationDuration: `${f.durationMs}ms` }
                }
              )
            ]
          },
          f.id
        ))
      },
      M
    ))
  ] });
}
const Vl = "_alert_1gxt0_1", Xl = "_xs_1gxt0_22", Gl = "_sm_1gxt0_32", Yl = "_lg_1gxt0_42", Zl = "_xl_1gxt0_52", Jl = "_info_1gxt0_63", Ql = "_success_1gxt0_68", ec = "_warning_1gxt0_73", tc = "_danger_1gxt0_78", nc = "_soft_1gxt0_85", rc = "_outline_1gxt0_92", oc = "_solid_1gxt0_100", sc = "_icon_1gxt0_114", ac = "_content_1gxt0_120", lc = "_title_1gxt0_125", cc = "_body_1gxt0_131", ic = "_dismiss_1gxt0_137", Ot = {
  alert: Vl,
  xs: Xl,
  sm: Gl,
  lg: Yl,
  xl: Zl,
  info: Jl,
  success: Ql,
  warning: ec,
  danger: tc,
  soft: nc,
  outline: rc,
  solid: oc,
  icon: sc,
  content: ac,
  title: lc,
  body: cc,
  dismiss: ic
};
function U0({
  tone: e = "info",
  variant: t = "soft",
  size: r = "md",
  title: o,
  icon: s,
  children: l,
  dismissible: d = !1,
  onDismiss: a,
  className: c
}) {
  const [_, v] = V(!1);
  if (_)
    return null;
  const u = () => {
    v(!0), a?.();
  };
  return /* @__PURE__ */ w(
    "div",
    {
      role: "alert",
      className: [Ot.alert, Ot[e], Ot[t], Ot[r], c].filter(Boolean).join(" "),
      children: [
        s != null && /* @__PURE__ */ n("span", { className: Ot.icon, "aria-hidden": "true", children: s }),
        /* @__PURE__ */ w("div", { className: Ot.content, children: [
          o && /* @__PURE__ */ n("div", { className: Ot.title, children: o }),
          l && /* @__PURE__ */ n("div", { className: Ot.body, children: l })
        ] }),
        d && /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: Ot.dismiss,
            onClick: u,
            "aria-label": "Dismiss alert",
            children: "×"
          }
        )
      ]
    }
  );
}
const dc = "_skeleton_f6f3j_1", uc = "_text_f6f3j_35", fc = "_circle_f6f3j_40", _c = "_rect_f6f3j_44", ir = {
  skeleton: dc,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_f6f3j_1",
  text: uc,
  circle: fc,
  rect: _c
};
function V0({
  variant: e = "text",
  width: t,
  height: r,
  className: o
}) {
  const s = {};
  return t !== void 0 && (s.width = typeof t == "number" ? `${t}px` : t), r !== void 0 && (s.height = typeof r == "number" ? `${r}px` : r), /* @__PURE__ */ n(
    "span",
    {
      "aria-hidden": "true",
      className: [ir.skeleton, ir[e], o].filter(Boolean).join(" "),
      style: s
    }
  );
}
const pc = "_row_15qsh_1", hc = "_gapXs_15qsh_7", mc = "_gapSm_15qsh_11", gc = "_gapMd_15qsh_15", bc = "_gapLg_15qsh_19", yc = "_gapXl_15qsh_23", vc = "_start_15qsh_27", xc = "_center_15qsh_31", wc = "_end_15qsh_35", kc = "_stretch_15qsh_39", $c = "_baseline_15qsh_43", Nc = "_noWrap_15qsh_99", Sc = "_wrapReverse_15qsh_103", Dc = "_gapRowXs_15qsh_107", zc = "_gapRowSm_15qsh_111", Cc = "_gapRowMd_15qsh_115", Oc = "_gapRowLg_15qsh_119", Mc = "_gapRowXl_15qsh_123", Yt = {
  row: pc,
  gapXs: hc,
  gapSm: mc,
  gapMd: gc,
  gapLg: bc,
  gapXl: yc,
  start: vc,
  center: xc,
  end: wc,
  stretch: kc,
  baseline: $c,
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
  noWrap: Nc,
  wrapReverse: Sc,
  gapRowXs: Dc,
  gapRowSm: zc,
  gapRowMd: Cc,
  gapRowLg: Oc,
  gapRowXl: Mc
}, Ic = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
}, jc = {
  xs: "gapRowXs",
  sm: "gapRowSm",
  md: "gapRowMd",
  lg: "gapRowLg",
  xl: "gapRowXl"
};
function Tc(e) {
  return typeof e != "string" ? null : Ic[e] ?? null;
}
function Ec(e) {
  return typeof e != "string" ? null : jc[e] ?? null;
}
function dr(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function X0({
  gap: e,
  rowGap: t,
  align: r = "stretch",
  justify: o = "start",
  wrap: s = !0,
  className: l,
  style: d,
  ...a
}) {
  const c = Tc(e), _ = Ec(t), v = {
    ...e != null && !c ? { gap: typeof e == "number" ? `${e}px` : e } : {},
    ...t != null && !_ ? { rowGap: typeof t == "number" ? `${t}px` : t } : {},
    ...d
  };
  return /* @__PURE__ */ n(
    "div",
    {
      className: [
        Yt.row,
        Yt[r],
        Yt[`justify-${o}`],
        dr(s) != null ? Yt[dr(s)] : null,
        c ? Yt[c] : null,
        _ ? Yt[_] : null,
        l
      ].filter(Boolean).join(" "),
      style: v,
      ...a
    }
  );
}
const Ac = "_column_2ch3a_1", Lc = "_Size1_2ch3a_6", Rc = "_Size2_2ch3a_7", Bc = "_Size3_2ch3a_8", Pc = "_Size4_2ch3a_9", qc = "_Size5_2ch3a_10", Fc = "_Size6_2ch3a_11", Kc = "_Size7_2ch3a_12", Hc = "_Size8_2ch3a_13", Wc = "_Size9_2ch3a_14", Uc = "_Size10_2ch3a_15", Vc = "_Size11_2ch3a_16", Xc = "_Size12_2ch3a_17", Gc = "_Offset1_2ch3a_18", Yc = "_Offset2_2ch3a_19", Zc = "_Offset3_2ch3a_20", Jc = "_Offset4_2ch3a_21", Qc = "_Offset5_2ch3a_22", ei = "_Offset6_2ch3a_23", ti = "_Offset7_2ch3a_24", ni = "_Offset8_2ch3a_25", ri = "_Offset9_2ch3a_26", oi = "_Offset10_2ch3a_27", si = "_Offset11_2ch3a_28", ai = "_smSize1_2ch3a_31", li = "_smSize2_2ch3a_32", ci = "_smSize3_2ch3a_33", ii = "_smSize4_2ch3a_34", di = "_smSize5_2ch3a_35", ui = "_smSize6_2ch3a_36", fi = "_smSize7_2ch3a_37", _i = "_smSize8_2ch3a_38", pi = "_smSize9_2ch3a_39", hi = "_smSize10_2ch3a_40", mi = "_smSize11_2ch3a_41", gi = "_smSize12_2ch3a_42", bi = "_smOffset1_2ch3a_43", yi = "_smOffset2_2ch3a_44", vi = "_smOffset3_2ch3a_45", xi = "_smOffset4_2ch3a_46", wi = "_smOffset5_2ch3a_47", ki = "_smOffset6_2ch3a_48", $i = "_smOffset7_2ch3a_49", Ni = "_smOffset8_2ch3a_50", Si = "_smOffset9_2ch3a_51", Di = "_smOffset10_2ch3a_52", zi = "_smOffset11_2ch3a_53", Ci = "_mdSize1_2ch3a_57", Oi = "_mdSize2_2ch3a_58", Mi = "_mdSize3_2ch3a_59", Ii = "_mdSize4_2ch3a_60", ji = "_mdSize5_2ch3a_61", Ti = "_mdSize6_2ch3a_62", Ei = "_mdSize7_2ch3a_63", Ai = "_mdSize8_2ch3a_64", Li = "_mdSize9_2ch3a_65", Ri = "_mdSize10_2ch3a_66", Bi = "_mdSize11_2ch3a_67", Pi = "_mdSize12_2ch3a_68", qi = "_mdOffset1_2ch3a_69", Fi = "_mdOffset2_2ch3a_70", Ki = "_mdOffset3_2ch3a_71", Hi = "_mdOffset4_2ch3a_72", Wi = "_mdOffset5_2ch3a_73", Ui = "_mdOffset6_2ch3a_74", Vi = "_mdOffset7_2ch3a_75", Xi = "_mdOffset8_2ch3a_76", Gi = "_mdOffset9_2ch3a_77", Yi = "_mdOffset10_2ch3a_78", Zi = "_mdOffset11_2ch3a_79", Ji = "_lgSize1_2ch3a_83", Qi = "_lgSize2_2ch3a_84", ed = "_lgSize3_2ch3a_85", td = "_lgSize4_2ch3a_86", nd = "_lgSize5_2ch3a_87", rd = "_lgSize6_2ch3a_88", od = "_lgSize7_2ch3a_89", sd = "_lgSize8_2ch3a_90", ad = "_lgSize9_2ch3a_91", ld = "_lgSize10_2ch3a_92", cd = "_lgSize11_2ch3a_93", id = "_lgSize12_2ch3a_94", dd = "_lgOffset1_2ch3a_95", ud = "_lgOffset2_2ch3a_96", fd = "_lgOffset3_2ch3a_97", _d = "_lgOffset4_2ch3a_98", pd = "_lgOffset5_2ch3a_99", hd = "_lgOffset6_2ch3a_100", md = "_lgOffset7_2ch3a_101", gd = "_lgOffset8_2ch3a_102", bd = "_lgOffset9_2ch3a_103", yd = "_lgOffset10_2ch3a_104", vd = "_lgOffset11_2ch3a_105", xd = "_xlSize1_2ch3a_109", wd = "_xlSize2_2ch3a_110", kd = "_xlSize3_2ch3a_111", $d = "_xlSize4_2ch3a_112", Nd = "_xlSize5_2ch3a_113", Sd = "_xlSize6_2ch3a_114", Dd = "_xlSize7_2ch3a_115", zd = "_xlSize8_2ch3a_116", Cd = "_xlSize9_2ch3a_117", Od = "_xlSize10_2ch3a_118", Md = "_xlSize11_2ch3a_119", Id = "_xlSize12_2ch3a_120", jd = "_xlOffset1_2ch3a_121", Td = "_xlOffset2_2ch3a_122", Ed = "_xlOffset3_2ch3a_123", Ad = "_xlOffset4_2ch3a_124", Ld = "_xlOffset5_2ch3a_125", Rd = "_xlOffset6_2ch3a_126", Bd = "_xlOffset7_2ch3a_127", Pd = "_xlOffset8_2ch3a_128", qd = "_xlOffset9_2ch3a_129", Fd = "_xlOffset10_2ch3a_130", Kd = "_xlOffset11_2ch3a_131", Hd = "_xxlSize1_2ch3a_136", Wd = "_xxlSize2_2ch3a_137", Ud = "_xxlSize3_2ch3a_138", Vd = "_xxlSize4_2ch3a_139", Xd = "_xxlSize5_2ch3a_140", Gd = "_xxlSize6_2ch3a_141", Yd = "_xxlSize7_2ch3a_142", Zd = "_xxlSize8_2ch3a_143", Jd = "_xxlSize9_2ch3a_144", Qd = "_xxlSize10_2ch3a_145", eu = "_xxlSize11_2ch3a_146", tu = "_xxlSize12_2ch3a_147", nu = "_xxlOffset1_2ch3a_148", ru = "_xxlOffset2_2ch3a_149", ou = "_xxlOffset3_2ch3a_150", su = "_xxlOffset4_2ch3a_151", au = "_xxlOffset5_2ch3a_152", lu = "_xxlOffset6_2ch3a_153", cu = "_xxlOffset7_2ch3a_154", iu = "_xxlOffset8_2ch3a_155", du = "_xxlOffset9_2ch3a_156", uu = "_xxlOffset10_2ch3a_157", fu = "_xxlOffset11_2ch3a_158", _u = "_xxlOrderFirst_2ch3a_159", pu = "_xxlOrderLast_2ch3a_160", hu = "_orderFirst_2ch3a_163", mu = "_orderLast_2ch3a_164", gu = "_smOrderFirst_2ch3a_167", bu = "_smOrderLast_2ch3a_168", yu = "_mdOrderFirst_2ch3a_172", vu = "_mdOrderLast_2ch3a_173", xu = "_lgOrderFirst_2ch3a_177", wu = "_lgOrderLast_2ch3a_178", ku = "_xlOrderFirst_2ch3a_182", $u = "_xlOrderLast_2ch3a_183", pn = {
  column: Ac,
  Size1: Lc,
  Size2: Rc,
  Size3: Bc,
  Size4: Pc,
  Size5: qc,
  Size6: Fc,
  Size7: Kc,
  Size8: Hc,
  Size9: Wc,
  Size10: Uc,
  Size11: Vc,
  Size12: Xc,
  Offset1: Gc,
  Offset2: Yc,
  Offset3: Zc,
  Offset4: Jc,
  Offset5: Qc,
  Offset6: ei,
  Offset7: ti,
  Offset8: ni,
  Offset9: ri,
  Offset10: oi,
  Offset11: si,
  smSize1: ai,
  smSize2: li,
  smSize3: ci,
  smSize4: ii,
  smSize5: di,
  smSize6: ui,
  smSize7: fi,
  smSize8: _i,
  smSize9: pi,
  smSize10: hi,
  smSize11: mi,
  smSize12: gi,
  smOffset1: bi,
  smOffset2: yi,
  smOffset3: vi,
  smOffset4: xi,
  smOffset5: wi,
  smOffset6: ki,
  smOffset7: $i,
  smOffset8: Ni,
  smOffset9: Si,
  smOffset10: Di,
  smOffset11: zi,
  mdSize1: Ci,
  mdSize2: Oi,
  mdSize3: Mi,
  mdSize4: Ii,
  mdSize5: ji,
  mdSize6: Ti,
  mdSize7: Ei,
  mdSize8: Ai,
  mdSize9: Li,
  mdSize10: Ri,
  mdSize11: Bi,
  mdSize12: Pi,
  mdOffset1: qi,
  mdOffset2: Fi,
  mdOffset3: Ki,
  mdOffset4: Hi,
  mdOffset5: Wi,
  mdOffset6: Ui,
  mdOffset7: Vi,
  mdOffset8: Xi,
  mdOffset9: Gi,
  mdOffset10: Yi,
  mdOffset11: Zi,
  lgSize1: Ji,
  lgSize2: Qi,
  lgSize3: ed,
  lgSize4: td,
  lgSize5: nd,
  lgSize6: rd,
  lgSize7: od,
  lgSize8: sd,
  lgSize9: ad,
  lgSize10: ld,
  lgSize11: cd,
  lgSize12: id,
  lgOffset1: dd,
  lgOffset2: ud,
  lgOffset3: fd,
  lgOffset4: _d,
  lgOffset5: pd,
  lgOffset6: hd,
  lgOffset7: md,
  lgOffset8: gd,
  lgOffset9: bd,
  lgOffset10: yd,
  lgOffset11: vd,
  xlSize1: xd,
  xlSize2: wd,
  xlSize3: kd,
  xlSize4: $d,
  xlSize5: Nd,
  xlSize6: Sd,
  xlSize7: Dd,
  xlSize8: zd,
  xlSize9: Cd,
  xlSize10: Od,
  xlSize11: Md,
  xlSize12: Id,
  xlOffset1: jd,
  xlOffset2: Td,
  xlOffset3: Ed,
  xlOffset4: Ad,
  xlOffset5: Ld,
  xlOffset6: Rd,
  xlOffset7: Bd,
  xlOffset8: Pd,
  xlOffset9: qd,
  xlOffset10: Fd,
  xlOffset11: Kd,
  xxlSize1: Hd,
  xxlSize2: Wd,
  xxlSize3: Ud,
  xxlSize4: Vd,
  xxlSize5: Xd,
  xxlSize6: Gd,
  xxlSize7: Yd,
  xxlSize8: Zd,
  xxlSize9: Jd,
  xxlSize10: Qd,
  xxlSize11: eu,
  xxlSize12: tu,
  xxlOffset1: nu,
  xxlOffset2: ru,
  xxlOffset3: ou,
  xxlOffset4: su,
  xxlOffset5: au,
  xxlOffset6: lu,
  xxlOffset7: cu,
  xxlOffset8: iu,
  xxlOffset9: du,
  xxlOffset10: uu,
  xxlOffset11: fu,
  xxlOrderFirst: _u,
  xxlOrderLast: pu,
  orderFirst: hu,
  orderLast: mu,
  smOrderFirst: gu,
  smOrderLast: bu,
  mdOrderFirst: yu,
  mdOrderLast: vu,
  lgOrderFirst: xu,
  lgOrderLast: wu,
  xlOrderFirst: ku,
  xlOrderLast: $u
}, Nu = [
  ["", "size", "offset", "order"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xxl", "sizeXxl", "offsetXxl", "orderXxl"]
], Su = {
  first: "orderFirst",
  last: "orderLast"
};
function Du(e) {
  return typeof e == "number" ? { order: e } : {};
}
function G0({ className: e, style: t, ...r }) {
  const o = [pn.column], s = { ...t };
  for (const [$, C, U, R] of Nu) {
    const M = r[C], f = r[U], z = r[R];
    if (M != null && o.push(pn[`${$}Size${M}`]), f != null && f > 0 && o.push(pn[`${$}Offset${f}`]), z === "first" || z === "last") {
      const I = `${$}${Su[z]}`;
      pn[I] && o.push(pn[I]);
    } else z != null && Object.assign(s, Du(z));
  }
  const {
    size: l,
    offset: d,
    sizeSm: a,
    offsetSm: c,
    sizeMd: _,
    offsetMd: v,
    sizeLg: u,
    offsetLg: D,
    sizeXl: k,
    offsetXl: O,
    sizeXxl: S,
    offsetXxl: b,
    order: h,
    orderSm: g,
    orderMd: m,
    orderLg: N,
    orderXl: p,
    orderXxl: y,
    ...i
  } = r;
  return /* @__PURE__ */ n("div", { className: [...o, e].filter(Boolean).join(" "), style: s, ...i });
}
const zu = "_stack_afbz7_1", Cu = "_gapXs_afbz7_29", Ou = "_gapSm_afbz7_33", Mu = "_gapMd_afbz7_37", Iu = "_gapLg_afbz7_41", ju = "_gapXl_afbz7_45", Zt = {
  stack: zu,
  "dir-row": "_dir-row_afbz7_5",
  "dir-row-reverse": "_dir-row-reverse_afbz7_9",
  "dir-column": "_dir-column_afbz7_13",
  "dir-column-reverse": "_dir-column-reverse_afbz7_17",
  "wrap-nowrap": "_wrap-nowrap_afbz7_21",
  "wrap-wrap-reverse": "_wrap-wrap-reverse_afbz7_25",
  gapXs: Cu,
  gapSm: Ou,
  gapMd: Mu,
  gapLg: Iu,
  gapXl: ju,
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
}, Tu = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function Eu(e) {
  return typeof e != "string" ? null : Tu[e] ?? null;
}
function ur(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function Y0({
  orientation: e = "vertical",
  reverse: t = !1,
  wrap: r = !0,
  gap: o = "sm",
  align: s,
  justify: l,
  className: d,
  style: a,
  ...c
}) {
  const _ = Eu(o), v = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", u = {
    ...o != null && !_ ? { gap: typeof o == "number" ? `${o}px` : o } : {},
    ...a
  };
  return /* @__PURE__ */ n(
    "div",
    {
      className: [
        Zt.stack,
        Zt[`dir-${v}`],
        ur(r) !== "wrap" ? Zt[`wrap-${ur(r)}`] : null,
        s != null ? Zt[`align-${s}`] : null,
        l != null ? Zt[`justify-${l}`] : null,
        _ ? Zt[_] : null,
        d
      ].filter(Boolean).join(" "),
      style: u,
      ...c
    }
  );
}
const Au = "_layout_1pcye_1", Lu = "_row_1pcye_7", fr = {
  layout: Au,
  row: Lu
}, Ru = "_footer_khrs9_1", Bu = {
  footer: Ru
};
function Pu({ className: e, children: t, ...r }) {
  return /* @__PURE__ */ n("footer", { className: [Bu.footer, e].filter(Boolean).join(" "), ...r, children: t });
}
const qu = "_header_6x0qv_1", Fu = {
  header: qu
};
function Ku({ className: e, children: t, ...r }) {
  return /* @__PURE__ */ n("header", { className: [Fu.header, e].filter(Boolean).join(" "), ...r, children: t });
}
const Hu = "_sidebar_1tgxt_1", Wu = "_left_1tgxt_9", Uu = "_right_1tgxt_13", Vu = "_collapsed_1tgxt_17", Xu = "_responsive_1tgxt_25", Gu = "_overlay_1tgxt_33", Yu = "_mask_1tgxt_53", Ht = {
  sidebar: Hu,
  left: Wu,
  right: Uu,
  collapsed: Vu,
  responsive: Xu,
  overlay: Gu,
  mask: Yu
};
function Zu({
  position: e = "left",
  expanded: t = !0,
  responsive: r = !1,
  overlay: o = !1,
  onClose: s,
  className: l,
  children: d,
  ...a
}) {
  return Ne(() => {
    if (!o || !t || s == null) return;
    const c = (_) => {
      _.key === "Escape" && s();
    };
    return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
  }, [o, t, s]), /* @__PURE__ */ w(Oe, { children: [
    o && t ? /* @__PURE__ */ n("div", { className: `${Ht.mask} se-layout-mask`, "aria-hidden": "true", onClick: s }) : null,
    /* @__PURE__ */ n(
      "aside",
      {
        className: [
          Ht.sidebar,
          e === "right" ? Ht.right : Ht.left,
          t ? null : Ht.collapsed,
          r ? Ht.responsive : null,
          o ? [Ht.overlay, "se-sidebar--overlay"] : null,
          l
        ].flat().filter(Boolean).join(" "),
        ...a,
        children: d
      }
    )
  ] });
}
function Z0({ className: e, children: t, ...r }) {
  const o = [], s = [], l = [], d = [], a = [];
  return Rr.forEach(t, (c) => {
    if (!Qn(c)) {
      l.push(c);
      return;
    }
    c.type === Ku ? o.push(c) : c.type === Pu ? s.push(c) : c.type === Zu ? (c.props.position === "right" ? a : d).push(c) : l.push(c);
  }), /* @__PURE__ */ w("div", { className: [fr.layout, e].filter(Boolean).join(" "), ...r, children: [
    o,
    /* @__PURE__ */ w("div", { className: fr.row, children: [
      d,
      l,
      a
    ] }),
    s
  ] });
}
const Ju = "_body_1i4wl_1", Qu = {
  body: Ju
};
function J0({ as: e = "main", className: t, children: r, ...o }) {
  return /* @__PURE__ */ n(e, { className: [Qu.body, t].filter(Boolean).join(" "), ...o, children: r });
}
const ef = "_track_1eazj_1", tf = "_bar_1eazj_31", nf = "_primary_1eazj_39", rf = "_success_1eazj_43", of = "_warning_1eazj_47", sf = "_danger_1eazj_51", af = "_indeterminate_1eazj_55", lf = "_circular_1eazj_69", cf = "_fill_1eazj_109", wt = {
  track: ef,
  "linear-xs": "_linear-xs_1eazj_11",
  "linear-sm": "_linear-sm_1eazj_15",
  "linear-md": "_linear-md_1eazj_19",
  "linear-lg": "_linear-lg_1eazj_23",
  "linear-xl": "_linear-xl_1eazj_27",
  bar: tf,
  primary: nf,
  success: rf,
  warning: of,
  danger: sf,
  indeterminate: af,
  "se-progress-slide": "_se-progress-slide_1eazj_1",
  circular: lf,
  "circular-xs": "_circular-xs_1eazj_75",
  "circular-sm": "_circular-sm_1eazj_80",
  "circular-md": "_circular-md_1eazj_85",
  "circular-lg": "_circular-lg_1eazj_90",
  "circular-xl": "_circular-xl_1eazj_95",
  fill: cf,
  "se-progress-spin": "_se-progress-spin_1eazj_1"
};
function Q0({
  value: e = 0,
  max: t = 100,
  tone: r = "primary",
  indeterminate: o = !1,
  variant: s = "linear",
  size: l = "md",
  className: d,
  ...a
}) {
  const c = t > 0 ? Math.min(t, Math.max(0, e)) : 0, _ = t > 0 ? c / t * 100 : 0;
  if (s === "circular") {
    const v = typeof l == "string", u = 2, D = 10.5, k = 2 * Math.PI * D, O = k * (o ? 0.75 : 1), S = o ? 0 : k * (1 - _ / 100);
    return /* @__PURE__ */ w(
      "svg",
      {
        width: v ? void 0 : l,
        height: v ? void 0 : l,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": a["aria-label"],
        "aria-labelledby": a["aria-labelledby"],
        "aria-valuenow": o ? void 0 : Math.round(c),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        id: a.id,
        style: a.style,
        className: [
          wt.circular,
          wt[r],
          v ? wt[`circular-${l}`] : null,
          o ? wt.indeterminate : null,
          d
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ n("circle", { className: wt.track, cx: 12, cy: 12, r: D, strokeWidth: u }),
          /* @__PURE__ */ n(
            "circle",
            {
              className: wt.fill,
              cx: 12,
              cy: 12,
              r: D,
              strokeWidth: u,
              strokeDasharray: `${O} ${k}`,
              strokeDashoffset: S
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ n(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": o ? void 0 : Math.round(c),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        wt.track,
        wt[r],
        typeof l == "string" ? wt[`linear-${l}`] : null,
        o ? wt.indeterminate : null,
        d
      ].filter(Boolean).join(" "),
      ...a,
      children: /* @__PURE__ */ n(
        "div",
        {
          className: wt.bar,
          style: o ? void 0 : { width: `${_}%` }
        }
      )
    }
  );
}
const df = "_wrapper_1mukg_1", uf = {
  wrapper: df
};
function eb({
  defaultTheme: e = "light",
  onChange: t,
  label: r = "Dark mode",
  className: o
}) {
  const [s, l] = V(() => (typeof document < "u" ? document.documentElement.dataset.theme : void 0) === "dark" ? !0 : e === "dark");
  Ne(() => {
    document.documentElement.dataset.theme = s ? "dark" : "light";
  }, []);
  const d = (a) => {
    const c = a.target.checked;
    l(c), document.documentElement.dataset.theme = c ? "dark" : "light", t?.(c ? "dark" : "light");
  };
  return /* @__PURE__ */ w("label", { className: [uf.wrapper, o].filter(Boolean).join(" "), children: [
    r,
    /* @__PURE__ */ n(il, { checked: s, onChange: d })
  ] });
}
const ff = "_avatar_101wb_1", _f = "_xs_101wb_12", pf = "_sm_101wb_18", hf = "_md_101wb_24", mf = "_lg_101wb_30", gf = "_xl_101wb_36", bf = "_initials_101wb_42", yf = "_image_101wb_57", vf = "_status_101wb_64", xf = "_online_101wb_84", wf = "_offline_101wb_88", kf = "_away_101wb_92", Jt = {
  avatar: ff,
  xs: _f,
  sm: pf,
  md: hf,
  lg: mf,
  xl: gf,
  initials: bf,
  image: yf,
  status: vf,
  online: xf,
  offline: wf,
  away: kf
}, Rn = [
  "var(--dt-color-palette-0)",
  "var(--dt-color-palette-1)",
  "var(--dt-color-palette-2)",
  "var(--dt-color-palette-3)",
  "var(--dt-color-palette-4)",
  "var(--dt-color-palette-5)"
];
function $f(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function Nf(e) {
  let t = 0;
  for (let r = 0; r < e.length; r += 1)
    t = t * 31 + e.charCodeAt(r) >>> 0;
  return Rn[t % Rn.length] ?? Rn[0];
}
function tb({
  name: e,
  src: t,
  alt: r,
  size: o = "md",
  status: s,
  className: l
}) {
  const d = $e(() => e ? $f(e) : "?", [e]), a = $e(() => e ? Nf(e) : Rn[0], [e]), c = t ? /* @__PURE__ */ n("img", { className: Jt.image, src: t, alt: r ?? e ?? "" }) : /* @__PURE__ */ n("span", { "aria-hidden": "true", className: Jt.initials, style: { background: a }, children: d });
  return /* @__PURE__ */ w(
    "span",
    {
      className: [
        Jt.avatar,
        Jt[o],
        s ? Jt[s] : null,
        l
      ].filter(Boolean).join(" "),
      role: "img",
      "aria-label": r ?? e ?? "avatar",
      children: [
        c,
        s && /* @__PURE__ */ n("span", { className: Jt.status, "aria-hidden": "true" })
      ]
    }
  );
}
const Sf = "_root_9j3lx_1", Df = "_left_9j3lx_6", zf = "_right_9j3lx_7", Cf = "_panel_9j3lx_12", Of = "_bottom_9j3lx_20", Mf = "_tabList_9j3lx_24", If = "_underline_9j3lx_53", jf = "_pills_9j3lx_72", Tf = "_tab_9j3lx_24", Ef = "_active_9j3lx_113", Af = "_disabled_9j3lx_139", Mt = {
  root: Sf,
  left: Df,
  right: zf,
  panel: Cf,
  bottom: Of,
  tabList: Mf,
  underline: If,
  pills: jf,
  tab: Tf,
  active: Ef,
  disabled: Af
};
function nb({
  items: e,
  value: t,
  defaultValue: r,
  onChange: o,
  variant: s = "underline",
  position: l = "top",
  className: d
}) {
  const a = Ue(), c = se(null), [_, v] = V(r ?? e[0]?.key ?? ""), u = t ?? _, D = l === "left" || l === "right", k = (b) => {
    v(b), o?.(b);
  }, O = (b) => {
    const h = e.filter((N) => !N.disabled), g = h.findIndex((N) => N.key === u);
    let m = -1;
    b.key === "ArrowRight" || D && b.key === "ArrowDown" ? m = (g + 1) % h.length : b.key === "ArrowLeft" || D && b.key === "ArrowUp" ? m = (g - 1 + h.length) % h.length : b.key === "Home" ? m = 0 : b.key === "End" && (m = h.length - 1), m >= 0 && (b.preventDefault(), c.current?.querySelector(
      `[data-tab-key="${CSS.escape(h[m]?.key ?? "")}"]`
    )?.focus(), k(h[m]?.key ?? ""));
  }, S = e.find((b) => b.key === u);
  return /* @__PURE__ */ w("div", { className: [Mt.root, Mt[l], d].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ n(
      "div",
      {
        ref: c,
        role: "tablist",
        className: [Mt.tabList, Mt[s], Mt[l]].filter(Boolean).join(" "),
        onKeyDown: O,
        children: e.map((b) => {
          const h = b.key === u;
          return /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              role: "tab",
              id: `${a}-tab-${b.key}`,
              "data-tab-key": b.key,
              "aria-selected": h,
              "aria-controls": `${a}-panel-${b.key}`,
              tabIndex: h ? 0 : -1,
              disabled: b.disabled,
              className: [
                Mt.tab,
                h ? Mt.active : null,
                b.disabled ? Mt.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => k(b.key),
              children: b.label
            },
            b.key
          );
        })
      }
    ),
    S && /* @__PURE__ */ n(
      "div",
      {
        role: "tabpanel",
        id: `${a}-panel-${S.key}`,
        "aria-labelledby": `${a}-tab-${S.key}`,
        className: Mt.panel,
        children: S.content
      }
    )
  ] });
}
const Lf = "_root_ejeux_1", Rf = "_item_ejeux_9", Bf = "_heading_ejeux_13", Pf = "_trigger_ejeux_17", qf = "_disabled_ejeux_34", Ff = "_title_ejeux_48", Kf = "_chevron_ejeux_52", Hf = "_open_ejeux_59", Wf = "_content_ejeux_63", It = {
  root: Lf,
  item: Rf,
  heading: Bf,
  trigger: Pf,
  disabled: qf,
  title: Ff,
  chevron: Kf,
  open: Hf,
  content: Wf
};
function rb({
  items: e,
  multiple: t = !1,
  value: r,
  defaultValue: o,
  onChange: s,
  className: l
}) {
  const d = Ue(), [a, c] = V(o ?? []), _ = r ?? a, v = (u) => {
    const D = _.includes(u) ? _.filter((k) => k !== u) : t ? [..._, u] : [u];
    c(D), s?.(D);
  };
  return /* @__PURE__ */ n("div", { className: [It.root, l].filter(Boolean).join(" "), children: e.map((u) => {
    const D = _.includes(u.key), k = `${d}-panel-${u.key}`, O = `${d}-trigger-${u.key}`;
    return /* @__PURE__ */ w("div", { className: It.item, children: [
      /* @__PURE__ */ n("h3", { className: It.heading, children: /* @__PURE__ */ w(
        "button",
        {
          type: "button",
          id: O,
          "aria-expanded": D,
          "aria-controls": k,
          disabled: u.disabled,
          className: [
            It.trigger,
            u.disabled ? It.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => v(u.key),
          children: [
            /* @__PURE__ */ n("span", { className: It.title, children: u.title }),
            /* @__PURE__ */ n("span", { className: [It.chevron, D ? It.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" })
          ]
        }
      ) }),
      /* @__PURE__ */ n(
        "div",
        {
          id: k,
          role: "region",
          "aria-labelledby": O,
          hidden: !D,
          className: It.content,
          children: u.content
        }
      )
    ] }, u.key);
  }) });
}
const Uf = "_textarea_1qm9v_1", Vf = "_xs_1qm9v_25", Xf = "_sm_1qm9v_30", Gf = "_md_1qm9v_35", Yf = "_lg_1qm9v_40", Zf = "_xl_1qm9v_45", Kn = {
  textarea: Uf,
  xs: Vf,
  sm: Xf,
  md: Gf,
  lg: Yf,
  xl: Zf,
  "resize-none": "_resize-none_1qm9v_50",
  "resize-vertical": "_resize-vertical_1qm9v_54",
  "resize-horizontal": "_resize-horizontal_1qm9v_58",
  "resize-both": "_resize-both_1qm9v_62"
}, ob = qe(function({ size: t = "md", resize: r = "none", className: o, ...s }, l) {
  return /* @__PURE__ */ n(
    "textarea",
    {
      ref: l,
      className: [
        Kn.textarea,
        Kn[t],
        Kn[`resize-${r}`],
        o
      ].filter(Boolean).join(" "),
      ...s
    }
  );
}), Jf = "_typography_1n43h_1", Qf = "_caption_1n43h_45", e_ = "_overline_1n43h_51", _r = {
  typography: Jf,
  "display-1": "_display-1_1n43h_5",
  "display-2": "_display-2_1n43h_10",
  "display-3": "_display-3_1n43h_15",
  "display-4": "_display-4_1n43h_20",
  "display-5": "_display-5_1n43h_25",
  "display-6": "_display-6_1n43h_30",
  "body-1": "_body-1_1n43h_35",
  "body-2": "_body-2_1n43h_40",
  caption: Qf,
  overline: e_
}, t_ = {
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
}, sb = qe(function({ variant: t = "body-1", as: r, className: o, children: s, ...l }, d) {
  const a = r ?? t_[t];
  return /* @__PURE__ */ n(
    a,
    {
      ref: d,
      className: [_r.typography, _r[t], o].filter(Boolean).join(" "),
      ...l,
      children: s
    }
  );
}), n_ = "_root_dvw01_1", r_ = "_trigger_dvw01_9", o_ = "_invalid_dvw01_40", s_ = "_placeholder_dvw01_46", a_ = "_label_dvw01_53", l_ = "_chevron_dvw01_59", c_ = "_chevronOpen_dvw01_69", i_ = "_menu_dvw01_73", d_ = "_option_dvw01_88", u_ = "_disabled_dvw01_99", f_ = "_active_dvw01_103", __ = "_selected_dvw01_104", p_ = "_header_dvw01_114", h_ = "_xs_dvw01_121", m_ = "_sm_dvw01_127", g_ = "_md_dvw01_133", b_ = "_lg_dvw01_139", y_ = "_xl_dvw01_145", st = {
  root: n_,
  trigger: r_,
  invalid: o_,
  placeholder: s_,
  label: a_,
  chevron: l_,
  chevronOpen: c_,
  menu: i_,
  option: d_,
  disabled: u_,
  active: f_,
  selected: __,
  header: p_,
  xs: h_,
  sm: m_,
  md: g_,
  lg: b_,
  xl: y_
}, v_ = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function ab({
  options: e = [],
  value: t,
  defaultValue: r,
  onChange: o,
  placeholder: s = "Select…",
  size: l = "md",
  invalid: d = !1,
  disabled: a = !1,
  className: c,
  ..._
}) {
  const v = Ue(), u = `${v}-listbox`, D = se(null), k = se(null), [O, S] = V(r), [b, h] = V(!1), g = t ?? O, m = e.map((f, z) => f.label === "" || f.disabled ? -1 : z).filter((f) => f >= 0), N = e.findIndex((f) => f.value === g), [p, y] = V(
    () => m.includes(0) ? 0 : m[0] ?? -1
  ), i = q(() => {
    if (a) return;
    const f = N >= 0 && m.includes(N) ? N : m[0];
    y(f ?? -1), h(!0);
  }, [a, N, m]), $ = q(() => {
    h(!1), k.current?.focus();
  }, []);
  Ne(() => {
    if (!b) return;
    const f = (z) => {
      D.current && !D.current.contains(z.target) && h(!1);
    };
    return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, [b]);
  const C = (f) => {
    S(f), o?.(f), h(!1), k.current?.focus();
  }, U = (f) => {
    if (m.length === 0) return;
    const z = m.includes(p) ? m.indexOf(p) : 0, I = m[(z + f + m.length) % m.length];
    I != null && y(I);
  }, R = (f) => {
    if (!b) {
      f.key === "ArrowDown" && (f.preventDefault(), i());
      return;
    }
    switch (f.key) {
      case "ArrowDown":
        f.preventDefault(), U(1);
        break;
      case "ArrowUp":
        f.preventDefault(), U(-1);
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
        f.preventDefault(), $();
        break;
      case "Tab":
        h(!1);
        break;
    }
  }, M = e.find((f) => f.value === g);
  return /* @__PURE__ */ w("div", { ref: D, className: [st.root, c].filter(Boolean).join(" "), onKeyDown: R, children: [
    /* @__PURE__ */ w(
      "button",
      {
        ref: k,
        type: "button",
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-expanded": b,
        "aria-controls": u,
        "aria-invalid": d || void 0,
        disabled: a,
        className: [
          st.trigger,
          st[l],
          b ? st.open : null,
          d ? st.invalid : null
        ].filter(Boolean).join(" "),
        onClick: () => b ? h(!1) : i(),
        ..._,
        children: [
          /* @__PURE__ */ n("span", { className: M ? st.label : st.placeholder, children: M ? M.label : s }),
          /* @__PURE__ */ n(
            "span",
            {
              className: [st.chevron, b ? st.chevronOpen : null].filter(Boolean).join(" "),
              style: { backgroundImage: v_ },
              "aria-hidden": "true"
            }
          )
        ]
      }
    ),
    b && /* @__PURE__ */ n(
      "div",
      {
        id: u,
        role: "listbox",
        "aria-activedescendant": p >= 0 ? `${v}-option-${p}` : void 0,
        className: st.menu,
        children: e.map(
          (f, z) => f.label === "" ? /* @__PURE__ */ n("div", { className: st.header, role: "presentation", children: f.value }, f.value) : /* @__PURE__ */ n(
            "div",
            {
              id: `${v}-option-${z}`,
              role: "option",
              "aria-selected": f.value === g,
              "aria-disabled": f.disabled || void 0,
              className: [
                st.option,
                z === p ? st.active : null,
                f.value === g ? st.selected : null,
                f.disabled ? st.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => {
                f.disabled || C(f.value);
              },
              onMouseEnter: () => {
                !f.disabled && f.label !== "" && y(z);
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
const x_ = "_root_1ap80_1", w_ = "_wrap_1ap80_9", k_ = "_input_1ap80_26", $_ = "_invalid_1ap80_31", N_ = "_clear_1ap80_57", S_ = "_menu_1ap80_82", D_ = "_option_1ap80_97", z_ = "_disabled_1ap80_108", C_ = "_active_1ap80_112", O_ = "_empty_1ap80_122", M_ = "_xs_1ap80_128", I_ = "_sm_1ap80_135", j_ = "_md_1ap80_142", T_ = "_lg_1ap80_149", E_ = "_xl_1ap80_156", kt = {
  root: x_,
  wrap: w_,
  input: k_,
  invalid: $_,
  clear: N_,
  menu: S_,
  option: D_,
  disabled: z_,
  active: C_,
  empty: O_,
  xs: M_,
  sm: I_,
  md: j_,
  lg: T_,
  xl: E_
}, A_ = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function lb({
  options: e = [],
  value: t,
  defaultValue: r = "",
  onChange: o,
  onSelect: s,
  placeholder: l = "",
  size: d = "md",
  invalid: a = !1,
  disabled: c = !1,
  filter: _ = A_,
  className: v,
  ...u
}) {
  const D = Ue(), k = `${D}-listbox`, O = se(null), S = se(null), [b, h] = V(r), [g, m] = V(!1), N = t ?? b, p = $e(
    () => N.trim() === "" ? [...e] : e.filter((E) => _(E, N)),
    [e, N, _]
  ), y = p.map((E, J) => E.disabled ? -1 : J).filter((E) => E >= 0), [i, $] = V(-1), C = (E) => {
    h(E), o?.(E);
  }, U = (E) => {
    C(E.label), s?.(E.value, E), m(!1);
  }, R = (E) => {
    if (y.length === 0) return;
    const J = y.includes(i) ? y.indexOf(i) : E === 1 ? -1 : 0, oe = y[(J + E + y.length) % y.length];
    oe != null && $(oe);
  }, M = (E) => {
    c || (C(E.target.value), m(!0), $(-1));
  }, f = () => {
    c || N !== "" && m(!0);
  }, z = (E) => {
    O.current && !O.current.contains(E.relatedTarget) && m(!1);
  }, I = (E) => {
    if (!c)
      switch (E.key) {
        case "ArrowDown":
          E.preventDefault(), g ? R(1) : (m(!0), $(y[0] ?? -1));
          break;
        case "ArrowUp":
          E.preventDefault(), g && R(-1);
          break;
        case "Enter":
          E.preventDefault(), g && i >= 0 && p[i] && U(p[i]);
          break;
        case "Escape":
          E.preventDefault(), m(!1);
          break;
        case "Tab":
          g && i >= 0 && p[i] && U(p[i]), m(!1);
          break;
      }
  }, L = () => {
    C(""), $(-1), m(!0), S.current?.focus();
  };
  return /* @__PURE__ */ w("div", { ref: O, className: [kt.root, v].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ w("div", { className: [kt.wrap, kt[d], a ? kt.invalid : null].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ n(
        "input",
        {
          ref: S,
          type: "text",
          role: "combobox",
          "aria-expanded": g,
          "aria-controls": k,
          "aria-autocomplete": "list",
          "aria-activedescendant": g && i >= 0 ? `${D}-option-${i}` : void 0,
          "aria-invalid": a || void 0,
          disabled: c,
          value: N,
          placeholder: l,
          className: kt.input,
          onChange: M,
          onFocus: f,
          onBlur: z,
          onKeyDown: I,
          ...u
        }
      ),
      N !== "" && !c && /* @__PURE__ */ n(
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
    g && /* @__PURE__ */ n("div", { id: k, role: "listbox", className: kt.menu, children: p.length === 0 ? /* @__PURE__ */ n("div", { className: kt.empty, children: "No matches" }) : p.map((E, J) => /* @__PURE__ */ n(
      "div",
      {
        id: `${D}-option-${J}`,
        role: "option",
        "aria-selected": !1,
        "aria-disabled": E.disabled || void 0,
        className: [
          kt.option,
          J === i ? kt.active : null,
          E.disabled ? kt.disabled : null
        ].filter(Boolean).join(" "),
        onClick: () => {
          E.disabled || U(E);
        },
        onMouseDown: (oe) => {
          oe.preventDefault(), E.disabled || U(E);
        },
        onMouseEnter: () => {
          E.disabled || $(J);
        },
        children: E.label
      },
      E.value
    )) })
  ] });
}
const L_ = "_box_186wt_1", R_ = "_option_186wt_12", B_ = "_disabled_186wt_23", P_ = "_selected_186wt_27", q_ = "_active_186wt_33", hn = {
  box: L_,
  option: R_,
  disabled: B_,
  selected: P_,
  active: q_
};
function cb({
  options: e = [],
  value: t,
  defaultValue: r,
  multiple: o = !1,
  onChange: s,
  className: l,
  style: d,
  ...a
}) {
  const c = Ue(), [_, v] = V(() => {
    const p = r;
    return p == null ? [] : Array.isArray(p) ? [...p] : [p];
  }), u = t == null ? _ : Array.isArray(t) ? t : [t], D = e.findIndex((p) => !p.disabled), [k, O] = V(() => D >= 0 ? D : 0), S = se(""), b = se(null), h = (p) => {
    v(p), s?.(o ? p : p[0] ?? "");
  }, g = e.map((p, y) => p.disabled ? -1 : y).filter((p) => p >= 0), m = (p) => {
    const y = e[p];
    if (!(!y || y.disabled))
      if (O(p), o) {
        const i = u.includes(y.value) ? u.filter(($) => $ !== y.value) : [...u, y.value];
        h(i);
      } else
        h([y.value]);
  }, N = (p) => {
    if (g.length === 0) return;
    const y = g.includes(k) ? k : g[0];
    let i = -1;
    if (p.key === "ArrowDown")
      i = g[(g.indexOf(y) + 1) % g.length];
    else if (p.key === "ArrowUp")
      i = g[(g.indexOf(y) - 1 + g.length) % g.length];
    else if (p.key === "Home")
      i = g[0];
    else if (p.key === "End")
      i = g[g.length - 1];
    else if (p.key === "Enter" || p.key === " ") {
      p.preventDefault(), m(y);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(p.key)) {
      p.preventDefault();
      const $ = (S.current + p.key).toLowerCase();
      S.current = $, b.current && clearTimeout(b.current), b.current = setTimeout(() => {
        S.current = "";
      }, 500);
      const C = [...g, ...g], U = g.indexOf(y) + 1, R = C.slice(U).find(
        (M) => e[M]?.label.toLowerCase().startsWith($)
      );
      R != null && O(R);
      return;
    }
    i >= 0 && (p.preventDefault(), O(i), o || h([e[i]?.value ?? ""]));
  };
  return /* @__PURE__ */ n(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": o || void 0,
      "aria-activedescendant": e[k] ? `${c}-option-${k}` : void 0,
      style: d,
      className: [hn.box, l].filter(Boolean).join(" "),
      onKeyDown: N,
      ...a,
      children: e.map((p, y) => {
        const i = u.includes(p.value), $ = y === k;
        return /* @__PURE__ */ n(
          "div",
          {
            id: `${c}-option-${y}`,
            role: "option",
            "aria-selected": i,
            "aria-disabled": p.disabled || void 0,
            className: [
              hn.option,
              i ? hn.selected : null,
              $ ? hn.active : null,
              p.disabled ? hn.disabled : null
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
const F_ = "_group_qro0q_1", K_ = "_legend_qro0q_8", H_ = "_list_qro0q_16", W_ = "_item_qro0q_25", U_ = "_disabled_qro0q_32", V_ = "_label_qro0q_37", X_ = "_checkbox_qro0q_48", Wt = {
  group: F_,
  legend: K_,
  list: H_,
  item: W_,
  disabled: U_,
  label: V_,
  checkbox: X_
};
function ib({
  options: e = [],
  value: t,
  defaultValue: r = [],
  onChange: o,
  legend: s,
  name: l,
  className: d
}) {
  const [a, c] = V(() => [...r]), _ = t ?? a, v = (u, D) => {
    const k = D ? [..._, u] : _.filter((O) => O !== u);
    c(k), o?.(k);
  };
  return /* @__PURE__ */ w("fieldset", { className: [Wt.group, d].filter(Boolean).join(" "), children: [
    s != null && /* @__PURE__ */ n("legend", { className: Wt.legend, children: s }),
    /* @__PURE__ */ n("ul", { className: Wt.list, children: e.map((u) => {
      const D = _.includes(u.value);
      return /* @__PURE__ */ n(
        "li",
        {
          className: [Wt.item, u.disabled ? Wt.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ w("label", { className: Wt.label, children: [
            /* @__PURE__ */ n(
              "input",
              {
                type: "checkbox",
                className: Wt.checkbox,
                name: l,
                value: u.value,
                checked: D,
                disabled: u.disabled,
                onChange: (k) => v(u.value, k.target.checked)
              }
            ),
            /* @__PURE__ */ n("span", { children: u.label })
          ] })
        },
        u.value
      );
    }) })
  ] });
}
const G_ = "_group_1dyra_1", Y_ = "_legend_1dyra_8", Z_ = "_list_1dyra_16", J_ = "_item_1dyra_25", Q_ = "_disabled_1dyra_32", e1 = "_label_1dyra_37", t1 = "_radio_1dyra_48", Ut = {
  group: G_,
  legend: Y_,
  list: Z_,
  item: J_,
  disabled: Q_,
  label: e1,
  radio: t1
};
function db({
  options: e = [],
  value: t,
  defaultValue: r,
  onChange: o,
  legend: s,
  name: l,
  className: d
}) {
  const [a, c] = V(r), _ = t ?? a, v = (u) => {
    c(u), o?.(u);
  };
  return /* @__PURE__ */ w("fieldset", { className: [Ut.group, d].filter(Boolean).join(" "), children: [
    s != null && /* @__PURE__ */ n("legend", { className: Ut.legend, children: s }),
    /* @__PURE__ */ n("ul", { className: Ut.list, children: e.map((u) => {
      const D = u.value === _;
      return /* @__PURE__ */ n(
        "li",
        {
          className: [Ut.item, u.disabled ? Ut.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ w("label", { className: Ut.label, children: [
            /* @__PURE__ */ n(
              "input",
              {
                type: "radio",
                className: Ut.radio,
                name: l,
                value: u.value,
                checked: D,
                disabled: u.disabled,
                onChange: (k) => v(k.target.value)
              }
            ),
            /* @__PURE__ */ n("span", { children: u.label })
          ] })
        },
        u.value
      );
    }) })
  ] });
}
const n1 = "_bar_5dkw6_1", r1 = "_option_5dkw6_12", o1 = "_selected_5dkw6_33", s1 = "_sm_5dkw6_49", a1 = "_md_5dkw6_55", l1 = "_lg_5dkw6_61", mn = {
  bar: n1,
  option: r1,
  selected: o1,
  sm: s1,
  md: a1,
  lg: l1
};
function ub({
  options: e = [],
  value: t,
  defaultValue: r,
  onChange: o,
  size: s = "md",
  className: l,
  ...d
}) {
  const [a, c] = V(
    r ?? e[0]?.value
  ), _ = t ?? a, v = (u) => {
    c(u), o?.(u);
  };
  return /* @__PURE__ */ n(
    "div",
    {
      role: "group",
      className: [mn.bar, mn[s], l].filter(Boolean).join(" "),
      ...d,
      children: e.map((u) => {
        const D = u.value === _;
        return /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            "aria-pressed": D,
            disabled: u.disabled,
            className: [
              mn.option,
              D ? mn.selected : null,
              u.disabled ? mn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => v(u.value),
            children: u.label
          },
          u.value
        );
      })
    }
  );
}
const c1 = "_toggle_1lv03_1", i1 = "_pressed_1lv03_29", d1 = "_sm_1lv03_41", u1 = "_md_1lv03_47", f1 = "_lg_1lv03_53", _1 = "_fullWidth_1lv03_59", In = {
  toggle: c1,
  pressed: i1,
  sm: d1,
  md: u1,
  lg: f1,
  fullWidth: _1
}, fb = qe(
  function({
    pressed: t,
    defaultPressed: r = !1,
    onChange: o,
    size: s = "md",
    fullWidth: l = !1,
    className: d,
    type: a = "button",
    ...c
  }, _) {
    const [v, u] = V(r), D = t ?? v, k = () => {
      const O = !D;
      u(O), o?.(O);
    };
    return /* @__PURE__ */ n(
      "button",
      {
        ref: _,
        type: a,
        "aria-pressed": D,
        className: [
          In.toggle,
          In[s],
          D ? In.pressed : null,
          l ? In.fullWidth : null,
          d
        ].filter(Boolean).join(" "),
        onClick: k,
        ...c
      }
    );
  }
), p1 = "_root_6843t_1", h1 = "_action_6843t_8", m1 = "_caret_6843t_32", g1 = "_sm_6843t_65", b1 = "_md_6843t_77", y1 = "_lg_6843t_89", v1 = "_menu_6843t_101", x1 = "_item_6843t_114", w1 = "_disabled_6843t_126", k1 = "_active_6843t_130", $1 = "_danger_6843t_139", jt = {
  root: p1,
  action: h1,
  caret: m1,
  sm: g1,
  md: b1,
  lg: y1,
  menu: v1,
  item: x1,
  disabled: w1,
  active: k1,
  danger: $1
};
function _b({
  label: e,
  onClick: t,
  items: r = [],
  size: o = "md",
  disabled: s = !1,
  className: l,
  ...d
}) {
  const a = Ue(), c = `${a}-menu`, _ = se(null), v = se(null), [u, D] = V(!1), [k, O] = V(-1), S = r.map((p, y) => p.disabled ? -1 : y).filter((p) => p >= 0), b = q(() => {
    s || (O(S[0] ?? -1), D(!0));
  }, [s, S]), h = q(() => {
    D(!1), v.current?.focus();
  }, []);
  Ne(() => {
    if (!u) return;
    const p = (y) => {
      _.current && !_.current.contains(y.target) && D(!1);
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, [u]);
  const g = (p) => {
    const y = r[p];
    !y || y.disabled || (y.onClick?.(), D(!1), v.current?.focus());
  }, m = (p) => {
    if (S.length === 0) return;
    const y = S.includes(k) ? S.indexOf(k) : p === 1 ? -1 : 0, i = S[(y + p + S.length) % S.length];
    i != null && O(i);
  }, N = (p) => {
    if (!u) {
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
        p.preventDefault(), S[0] != null && O(S[0]);
        break;
      case "End":
        p.preventDefault(), S[S.length - 1] != null && O(S[S.length - 1]);
        break;
      case "Enter":
      case " ":
        p.preventDefault(), k >= 0 && g(k);
        break;
      case "Escape":
        p.preventDefault(), h();
        break;
      case "Tab":
        D(!1);
        break;
    }
  };
  return /* @__PURE__ */ w(
    "div",
    {
      ref: _,
      className: [jt.root, jt[o], l].filter(Boolean).join(" "),
      onKeyDown: N,
      children: [
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: jt.action,
            disabled: s,
            onClick: t,
            children: e
          }
        ),
        /* @__PURE__ */ n(
          "button",
          {
            ref: v,
            type: "button",
            className: jt.caret,
            "aria-haspopup": "menu",
            "aria-expanded": u,
            "aria-controls": c,
            "aria-label": "More actions",
            disabled: s,
            onClick: () => u ? D(!1) : b(),
            children: "▾"
          }
        ),
        u && /* @__PURE__ */ n(
          "div",
          {
            id: c,
            role: "menu",
            "aria-activedescendant": k >= 0 ? `${a}-item-${k}` : void 0,
            className: jt.menu,
            ...d,
            children: r.map((p, y) => /* @__PURE__ */ n(
              "div",
              {
                id: `${a}-item-${y}`,
                role: "menuitem",
                "aria-disabled": p.disabled || void 0,
                className: [
                  jt.item,
                  y === k ? jt.active : null,
                  p.danger ? jt.danger : null,
                  p.disabled ? jt.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => g(y),
                onMouseEnter: () => {
                  p.disabled || O(y);
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
const N1 = "_textbox_1eb0k_1", S1 = "_invalid_1eb0k_31", D1 = "_xs_1eb0k_37", z1 = "_sm_1eb0k_43", C1 = "_md_1eb0k_49", O1 = "_lg_1eb0k_55", M1 = "_xl_1eb0k_61", Hn = {
  textbox: N1,
  invalid: S1,
  xs: D1,
  sm: z1,
  md: C1,
  lg: O1,
  xl: M1
}, pb = qe(function({ size: t = "md", invalid: r = !1, className: o, type: s = "text", ...l }, d) {
  return /* @__PURE__ */ n(
    "input",
    {
      ref: d,
      type: s,
      className: [Hn.textbox, Hn[t], r ? Hn.invalid : null, o].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...l
    }
  );
}), I1 = "_wrapper_164zy_1", j1 = "_input_164zy_8", T1 = "_invalid_164zy_38", E1 = "_toggle_164zy_44", A1 = "_xs_164zy_79", L1 = "_sm_164zy_85", R1 = "_md_164zy_91", B1 = "_lg_164zy_97", P1 = "_xl_164zy_103", gn = {
  wrapper: I1,
  input: j1,
  invalid: T1,
  toggle: E1,
  xs: A1,
  sm: L1,
  md: R1,
  lg: B1,
  xl: P1
}, hb = qe(function({
  size: t = "md",
  invalid: r = !1,
  className: o,
  disabled: s,
  showLabel: l = "Show password",
  hideLabel: d = "Hide password",
  ...a
}, c) {
  const [_, v] = V(!1);
  return /* @__PURE__ */ w("div", { className: gn.wrapper, children: [
    /* @__PURE__ */ n(
      "input",
      {
        ref: c,
        type: _ ? "text" : "password",
        disabled: s,
        className: [gn.input, gn[t], r ? gn.invalid : null, o].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...a
      }
    ),
    /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: gn.toggle,
        "aria-pressed": _,
        "aria-label": _ ? d : l,
        disabled: s,
        onClick: () => v((u) => !u),
        children: /* @__PURE__ */ n(Ve, { name: _ ? "eye-off" : "eye", size: 16 })
      }
    )
  ] });
}), q1 = "_mask_evq34_1", F1 = "_invalid_evq34_31", K1 = "_xs_evq34_37", H1 = "_sm_evq34_43", W1 = "_md_evq34_49", U1 = "_lg_evq34_55", V1 = "_xl_evq34_61", Wn = {
  mask: q1,
  invalid: F1,
  xs: K1,
  sm: H1,
  md: W1,
  lg: U1,
  xl: V1
};
function pr(e, t) {
  let r = e.replace(/\D/g, ""), o = "";
  for (const s of t)
    if (s === "#") {
      if (r.length === 0) break;
      o += r[0] ?? "", r = r.slice(1);
    } else if (r.length > 0)
      o += s;
    else
      break;
  return o;
}
const mb = qe(function({
  size: t = "md",
  invalid: r = !1,
  mask: o,
  value: s,
  defaultValue: l = "",
  onChange: d,
  className: a,
  onKeyDown: c,
  ..._
}, v) {
  const [u, D] = V(l ?? ""), k = s !== void 0, O = k ? s ?? "" : u, S = (g) => {
    const m = pr(g, o);
    return k || D(m), d?.(m), m;
  };
  return /* @__PURE__ */ n(
    "input",
    {
      ref: v,
      type: "text",
      value: O,
      onChange: (g) => {
        S(g.target.value);
      },
      onKeyDown: (g) => {
        if (g.key === "Backspace") {
          const m = g.currentTarget.selectionStart ?? O.length, N = O[m - 1];
          if (N !== void 0 && !/\d/.test(N)) {
            g.preventDefault();
            const p = O.replace(/\D/g, "");
            S(pr(p.slice(0, -1), o));
          }
        }
        c?.(g);
      },
      className: [Wn.mask, Wn[t], r ? Wn.invalid : null, a].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ..._
    }
  );
}), X1 = "_wrapper_aus1c_1", G1 = "_input_aus1c_8", Y1 = "_invalid_aus1c_38", Z1 = "_button_aus1c_44", J1 = "_up_aus1c_76", Q1 = "_down_aus1c_81", ep = "_xs_aus1c_86", tp = "_sm_aus1c_92", np = "_md_aus1c_98", rp = "_lg_aus1c_104", op = "_xl_aus1c_110", Pt = {
  wrapper: X1,
  input: G1,
  invalid: Y1,
  button: Z1,
  up: J1,
  down: Q1,
  xs: ep,
  sm: tp,
  md: np,
  lg: rp,
  xl: op
};
function Gn(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function sp(e) {
  let t = "", r = !1;
  for (const o of e)
    o >= "0" && o <= "9" ? t += o : o === "." && !r ? (r = !0, t += o) : o === "-" && t.length === 0 && (t += o);
  return t;
}
function Tr(e, t, r) {
  return Math.min(r ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function ap(e, t, r) {
  return t === void 0 ? e : t + Math.round((e - t) / r) * r;
}
function lp(e, t, r, o, s) {
  const d = Gn(e) ?? r ?? 0;
  let a;
  return r === void 0 ? a = d + t * s : t > 0 ? a = r + Math.ceil((d - r + 1e-9) / s) * s : a = r + Math.floor((d - r - 1e-9) / s) * s, Tr(a, r, o);
}
const gb = qe(function({
  size: t = "md",
  invalid: r = !1,
  className: o,
  disabled: s,
  value: l,
  defaultValue: d,
  onChange: a,
  min: c,
  max: _,
  step: v = 1,
  incrementLabel: u = "Increment",
  decrementLabel: D = "Decrement",
  onBlur: k,
  onKeyDown: O,
  ...S
}, b) {
  const [h, g] = V(d != null ? String(d) : ""), m = l !== void 0, N = m ? l == null ? "" : String(l) : h, p = (R) => {
    m || g(R), a?.(Gn(R));
  }, y = (R) => {
    m || g(String(R)), a?.(R);
  }, i = (R) => {
    s || y(lp(N, R, c, _, v));
  }, $ = (R) => {
    p(sp(R.target.value));
  }, C = (R) => {
    R.key === "ArrowUp" ? (R.preventDefault(), i(1)) : R.key === "ArrowDown" && (R.preventDefault(), i(-1)), O?.(R);
  }, U = (R) => {
    const M = Gn(N);
    M === null ? (m || g(""), a?.(null)) : y(Tr(ap(M, c, v), c, _)), k?.(R);
  };
  return /* @__PURE__ */ w("div", { className: Pt.wrapper, children: [
    /* @__PURE__ */ n(
      "input",
      {
        ref: b,
        type: "text",
        inputMode: "decimal",
        autoComplete: "off",
        value: N,
        disabled: s,
        onChange: $,
        onKeyDown: C,
        onBlur: U,
        className: [Pt.input, Pt[t], r ? Pt.invalid : null, o].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...S
      }
    ),
    /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: [Pt.button, Pt.up].join(" "),
        "aria-label": u,
        disabled: s,
        onClick: () => i(1),
        children: /* @__PURE__ */ n(Ve, { name: "chevron-up", size: 14 })
      }
    ),
    /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: [Pt.button, Pt.down].join(" "),
        "aria-label": D,
        disabled: s,
        onClick: () => i(-1),
        children: /* @__PURE__ */ n(Ve, { name: "chevron-down", size: 14 })
      }
    )
  ] });
}), xe = {}, cp = [
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
function gt(e, t, r) {
  return Math.min(r, Math.max(t, e));
}
function Yn(e) {
  const t = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(e.trim());
  if (!t) return null;
  let r = t[1];
  return r.length === 3 && (r = r.split("").map((o) => o + o).join("")), {
    r: Number.parseInt(r.slice(0, 2), 16),
    g: Number.parseInt(r.slice(2, 4), 16),
    b: Number.parseInt(r.slice(4, 6), 16),
    a: 1
  };
}
function ip({ r: e, g: t, b: r }) {
  const o = (s) => Math.round(s).toString(16).padStart(2, "0");
  return `#${o(e)}${o(t)}${o(r)}`;
}
function dp({ r: e, g: t, b: r }) {
  const o = e / 255, s = t / 255, l = r / 255, d = Math.max(o, s, l), a = Math.min(o, s, l), c = d - a;
  let _ = 0;
  return c !== 0 && (d === o ? _ = (s - l) / c % 6 : d === s ? _ = (l - o) / c + 2 : _ = (o - s) / c + 4, _ *= 60, _ < 0 && (_ += 360)), {
    h: _,
    s: d === 0 ? 0 : c / d,
    v: d
  };
}
function Qt({ h: e, s: t, v: r }) {
  const o = r * t, s = e / 60, l = o * (1 - Math.abs(s % 2 - 1));
  let d = 0, a = 0, c = 0;
  s < 1 ? (d = o, a = l) : s < 2 ? (d = l, a = o) : s < 3 ? (a = o, c = l) : s < 4 ? (a = l, c = o) : s < 5 ? (d = l, c = o) : (d = o, c = l);
  const _ = r - o;
  return {
    r: Math.round((d + _) * 255),
    g: Math.round((a + _) * 255),
    b: Math.round((c + _) * 255),
    a: 1
  };
}
function up(e) {
  const t = Yn(e);
  if (t) return t;
  const r = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*([\d.]+))?\s*\)$/i.exec(
    e.trim()
  );
  return r ? {
    r: gt(Number(r[1]), 0, 255),
    g: gt(Number(r[2]), 0, 255),
    b: gt(Number(r[3]), 0, 255),
    a: r[4] != null ? gt(Number(r[4]), 0, 1) : 1
  } : null;
}
function hr({ r: e, g: t, b: r, a: o }) {
  return o >= 1 ? `rgb(${e}, ${t}, ${r})` : `rgba(${e}, ${t}, ${r}, ${Math.round(o * 100) / 100})`;
}
const bb = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: r = !0,
  showPalette: o = !0,
  palette: s = cp,
  showButton: l = !1,
  showArrow: d = !0,
  disabled: a = !1,
  invalid: c = !1,
  placeholder: _ = "",
  size: v = "md",
  tabIndex: u = 0,
  className: D,
  onChange: k,
  onValueChange: O,
  onOpen: S,
  onClose: b
}) => {
  const h = se(null), g = se(null), m = se(null), N = se(null), p = se(null), y = Ue(), i = se(null), $ = $e(
    () => up(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [C, U] = V(!1), [R, M] = V(null), f = R ?? $, z = $e(() => dp(f), [f]), I = q(
    (H) => {
      const x = hr(H);
      k?.(x), O?.(x);
    },
    [k, O]
  ), L = q(
    (H, x) => {
      M(H), x && !l && I(H);
    },
    [l, I]
  ), E = q(() => {
    U(!1), M(null), b?.(), g.current?.focus();
  }, [b]), J = q(() => {
    a || (M($), U(!0), S?.());
  }, [a, $, S]), oe = q(() => {
    C ? E() : J();
  }, [C, E, J]), de = q(
    (H, x) => {
      const T = m.current;
      if (!T) return z;
      const K = T.getBoundingClientRect(), Q = gt((H - K.left) / K.width, 0, 1), G = gt(1 - (x - K.top) / K.height, 0, 1);
      return { h: z.h, s: Q, v: G };
    },
    [z]
  ), ne = q(
    (H, x) => {
      if (!x) return 0;
      const T = x.getBoundingClientRect();
      return gt((H - T.left) / T.width, 0, 1);
    },
    []
  ), ae = (H) => {
    if (a) return;
    H.preventDefault(), H.currentTarget.setPointerCapture(H.pointerId), i.current = "sat";
    const x = de(H.clientX, H.clientY);
    L({ ...Qt(x), a: f.a }, !0);
  }, le = (H) => {
    if (i.current !== "sat") return;
    H.preventDefault();
    const x = de(H.clientX, H.clientY);
    L({ ...Qt(x), a: f.a }, !0);
  }, X = (H) => {
    if (a) return;
    H.preventDefault(), H.currentTarget.setPointerCapture(H.pointerId), i.current = "hue";
    const x = ne(H.clientX, N.current);
    L({ ...Qt({ ...z, h: x * 360 }), a: f.a }, !0);
  }, W = (H) => {
    if (i.current !== "hue") return;
    H.preventDefault();
    const x = ne(H.clientX, N.current);
    L({ ...Qt({ ...z, h: x * 360 }), a: f.a }, !0);
  }, B = (H) => {
    if (a) return;
    H.preventDefault(), H.currentTarget.setPointerCapture(H.pointerId), i.current = "alpha";
    const x = ne(H.clientX, p.current);
    L({ ...f, a: x }, !0);
  }, te = (H) => {
    if (i.current !== "alpha") return;
    H.preventDefault();
    const x = ne(H.clientX, p.current);
    L({ ...f, a: x }, !0);
  }, he = () => {
    i.current = null;
  }, Z = q(
    (H, x) => {
      const T = { h: z.h, s: gt(z.s + H, 0, 1), v: gt(z.v + x, 0, 1) };
      L({ ...Qt(T), a: f.a }, !0);
    },
    [z, f.a, L]
  ), me = q(
    (H) => {
      const x = (z.h + H + 360) % 360;
      L({ ...Qt({ ...z, h: x }), a: f.a }, !0);
    },
    [z, f.a, L]
  ), ye = q(
    (H) => {
      L({ ...f, a: gt(f.a + H, 0, 1) }, !0);
    },
    [f, L]
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
        H.preventDefault(), E();
        break;
    }
  }, He = (H, x) => {
    switch (H.key) {
      case "ArrowLeft":
        H.preventDefault(), x === "hue" ? me(-6) : ye(-0.05);
        break;
      case "ArrowRight":
        H.preventDefault(), x === "hue" ? me(6) : ye(0.05);
        break;
      case "Escape":
        H.preventDefault(), E();
        break;
    }
  }, Ie = (H, x) => {
    if (H === "hex") {
      const G = Yn(x);
      G && L({ ...G, a: f.a }, !0);
      return;
    }
    const T = x.replace(/[^\d.]/g, ""), K = Number.parseFloat(T);
    if (Number.isNaN(K)) return;
    if (H === "a") {
      const G = T.includes(".") ? gt(K, 0, 1) : gt(K / 100, 0, 1);
      L({ ...f, a: G }, !0);
      return;
    }
    const Q = { r: 255, g: 255, b: 255 };
    L({ ...f, [H]: gt(K, 0, Q[H]) }, !0);
  }, Xe = () => {
    R && (I(R), M(null), U(!1), b?.(), g.current?.focus());
  };
  Ne(() => {
    if (!C) return;
    const H = (x) => {
      h.current && !h.current.contains(x.target) && E();
    };
    return document.addEventListener("mousedown", H), () => document.removeEventListener("mousedown", H);
  }, [C, E]), Ne(() => {
    if (!C) return;
    const H = (x) => {
      x.key === "Escape" && E();
    };
    return document.addEventListener("keydown", H), () => document.removeEventListener("keydown", H);
  }, [C, E]);
  const be = v === "xs" ? xe.dtColorpickerTriggerXs : v === "sm" ? xe.dtColorpickerTriggerSm : v === "lg" ? xe.dtColorpickerTriggerLg : v === "xl" ? xe.dtColorpickerTriggerXl : xe.dtColorpickerTriggerMd, Ge = hr(f), tt = ip(f), We = { x: z.s * 100, y: (1 - z.v) * 100 }, Je = z.h / 360 * 100, Fe = f.a * 100, Ye = /* @__PURE__ */ w("div", { className: xe.dtColorpickerPanel, children: [
    t && /* @__PURE__ */ n(
      "div",
      {
        ref: m,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(z.s * 100),
        "aria-valuetext": `Saturation ${Math.round(z.s * 100)}%, value ${Math.round(z.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": a || void 0,
        tabIndex: a ? -1 : u,
        className: xe.dtSaturationPicker,
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${z.h}, 100%, 50%)`
        },
        onKeyDown: ze,
        onPointerDown: ae,
        onPointerMove: le,
        onPointerUp: he,
        children: /* @__PURE__ */ n(
          "span",
          {
            className: xe.dtSaturationIndicator,
            style: { left: `${We.x}%`, top: `${We.y}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    t && /* @__PURE__ */ n(
      "div",
      {
        ref: N,
        role: "slider",
        "aria-label": "Hue",
        "aria-valuemin": 0,
        "aria-valuemax": 360,
        "aria-valuenow": Math.round(z.h),
        "aria-disabled": a || void 0,
        tabIndex: a ? -1 : u,
        className: xe.dtHuePicker,
        onKeyDown: (H) => He(H, "hue"),
        onPointerDown: X,
        onPointerMove: W,
        onPointerUp: he,
        children: /* @__PURE__ */ n(
          "span",
          {
            className: xe.dtHueIndicator,
            style: { left: `${Je}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    t && /* @__PURE__ */ n(
      "div",
      {
        ref: p,
        role: "slider",
        "aria-label": "Alpha",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(Fe),
        "aria-disabled": a || void 0,
        tabIndex: a ? -1 : u,
        className: xe.dtAlphaPicker,
        style: {
          background: `repeating-conic-gradient(var(--dt-color-border) 0% 25%, var(--dt-color-surface) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${z.h}, 100%, 50%))`
        },
        onKeyDown: (H) => He(H, "alpha"),
        onPointerDown: B,
        onPointerMove: te,
        onPointerUp: he,
        children: /* @__PURE__ */ n(
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
        /* @__PURE__ */ n("span", { className: xe.dtColorpickerRgbaLabel, children: "Hex" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            maxLength: 7,
            className: xe.dtColorpickerRgbaInput,
            "aria-label": "Hex",
            value: tt,
            onChange: (H) => Ie("hex", H.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ w("label", { className: xe.dtColorpickerRgbaField, children: [
        /* @__PURE__ */ n("span", { className: xe.dtColorpickerRgbaLabel, children: "R" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: xe.dtColorpickerRgbaInput,
            "aria-label": "Red",
            value: f.r,
            onChange: (H) => Ie("r", H.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ w("label", { className: xe.dtColorpickerRgbaField, children: [
        /* @__PURE__ */ n("span", { className: xe.dtColorpickerRgbaLabel, children: "G" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: xe.dtColorpickerRgbaInput,
            "aria-label": "Green",
            value: f.g,
            onChange: (H) => Ie("g", H.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ w("label", { className: xe.dtColorpickerRgbaField, children: [
        /* @__PURE__ */ n("span", { className: xe.dtColorpickerRgbaLabel, children: "B" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: xe.dtColorpickerRgbaInput,
            "aria-label": "Blue",
            value: f.b,
            onChange: (H) => Ie("b", H.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ w("label", { className: xe.dtColorpickerRgbaField, children: [
        /* @__PURE__ */ n("span", { className: xe.dtColorpickerRgbaLabel, children: "A" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            inputMode: "decimal",
            maxLength: 4,
            className: xe.dtColorpickerRgbaInput,
            "aria-label": "Alpha",
            value: Math.round(f.a * 100),
            onChange: (H) => Ie("a", H.target.value)
          }
        )
      ] })
    ] }),
    o && /* @__PURE__ */ n("div", { className: xe.dtColorpickerPalette, children: s.map((H) => /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        role: "button",
        className: xe.dtColorpickerSwatch,
        "aria-label": H,
        "aria-disabled": a || void 0,
        tabIndex: a ? -1 : u,
        style: { backgroundColor: H },
        onClick: () => {
          const x = Yn(H);
          l ? L({ ...x, a: f.a }, !1) : (M(null), I({ ...x, a: f.a }), U(!1), b?.(), g.current?.focus());
        }
      },
      H
    )) }),
    l && /* @__PURE__ */ n("div", { className: xe.dtColorpickerFooter, children: /* @__PURE__ */ n(
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
      ref: h,
      className: [
        xe.dtColorpicker,
        C ? xe.dtColorpickerOpen : null,
        c ? xe.dtColorpickerInvalid : null,
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
            "aria-expanded": C,
            "aria-controls": y,
            "aria-label": "Pick a color",
            "aria-disabled": a || void 0,
            disabled: a,
            tabIndex: u,
            onClick: oe,
            onKeyDown: (H) => {
              H.key === "Escape" && C && (H.preventDefault(), E());
            },
            children: [
              /* @__PURE__ */ n(
                "span",
                {
                  className: xe.dtColorpickerValue,
                  style: { backgroundColor: Ge },
                  "aria-hidden": "true"
                }
              ),
              _ && /* @__PURE__ */ n("span", { className: xe.dtColorpickerText, children: _ }),
              d && /* @__PURE__ */ n("span", { className: xe.dtColorpickerChevron, "aria-hidden": "true", children: /* @__PURE__ */ n(Ve, { name: "chevron-down", size: 14 }) })
            ]
          }
        ),
        C && /* @__PURE__ */ n(
          "div",
          {
            id: y,
            role: "dialog",
            "aria-label": "Choose color",
            className: xe.dtColorpickerPopup,
            children: Ye
          }
        )
      ]
    }
  );
}, De = {}, fp = 42;
function bt(e) {
  return String(e).padStart(2, "0");
}
function _t(e) {
  return `${e.year}-${bt(e.month)}-${bt(e.day)}`;
}
function _p(e, t) {
  const r = _t(e);
  return t ? `${r} ${bt(e.hour)}:${bt(e.minute)}:${bt(e.second)}` : r;
}
function Zn(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!t) return null;
  const r = Number(t[1]), o = Number(t[2]), s = Number(t[3]), l = t[4] != null ? Number(t[4]) : 0, d = t[5] != null ? Number(t[5]) : 0, a = t[6] != null ? Number(t[6]) : 0;
  if (o < 1 || o > 12 || s < 1 || s > 31) return null;
  const c = new Date(r, o - 1, s, l, d, a);
  return c.getFullYear() !== r || c.getMonth() !== o - 1 || c.getDate() !== s ? null : { year: r, month: o, day: s, hour: l, minute: d, second: a };
}
function qt() {
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
function Tt(e, t) {
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
function jn(e, t) {
  const r = new Date(e.year, e.month - 1 + t, 1), o = r.getFullYear(), s = r.getMonth() + 1, l = new Date(o, s, 0).getDate();
  return {
    year: o,
    month: s,
    day: Math.min(e.day, l),
    hour: e.hour,
    minute: e.minute,
    second: e.second
  };
}
function mr(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const gr = {
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
  tt: (e, t, r) => new Intl.DateTimeFormat(r, {
    hour: "numeric",
    hour12: !0
  }).formatToParts(t).find((s) => s.type === "dayPeriod")?.value ?? ""
}, pp = ["yyyy", "yy", "MM", "dd", "HH", "mm", "ss", "tt"], hp = ["y", "M", "d", "H", "m", "s"];
function Tn(e, t, r) {
  const o = new Date(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second
  );
  let s = "", l = 0;
  for (; l < t.length; ) {
    let d = !1;
    for (const c of pp)
      if (t.startsWith(c, l)) {
        s += gr[c](e, o, r), l += c.length, d = !0;
        break;
      }
    if (d) continue;
    const a = t[l];
    if (hp.includes(a)) {
      s += gr[a](e, o, r), l += 1;
      continue;
    }
    s += a, l += 1;
  }
  return s;
}
const mp = [
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
function gp(e, t) {
  const r = {};
  let o = 0, s = 0;
  for (; s < t.length; ) {
    let a = null;
    for (const c of mp)
      if (t.startsWith(c, s)) {
        a = c;
        break;
      }
    if (a) {
      const c = e.slice(o, o + a.length);
      if (!/^\d+$/.test(c)) return null;
      const _ = Number(c);
      switch (a) {
        case "yyyy":
          r.year = _;
          break;
        case "yy":
        case "y":
          r.year = 2e3 + _;
          break;
        case "MM":
        case "M":
          r.month = _;
          break;
        case "dd":
        case "d":
          r.day = _;
          break;
        case "HH":
        case "H":
          r.hour = _;
          break;
        case "mm":
        case "m":
          r.minute = _;
          break;
        case "ss":
        case "s":
          r.second = _;
          break;
      }
      o += a.length, s += a.length;
      continue;
    }
    if (e[o] !== t[s]) return null;
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
  const d = new Date(
    l.year,
    l.month - 1,
    l.day,
    l.hour,
    l.minute,
    l.second
  );
  return d.getFullYear() !== l.year || d.getMonth() !== l.month - 1 || d.getDate() !== l.day ? null : l;
}
function bn(e, t) {
  const r = Zn(e);
  return r || gp(e, t);
}
function bp(e, t, r) {
  return t && _t(e) < _t(t) ? t : r && _t(e) > _t(r) ? r : e;
}
const yp = ["hour", "minute", "second"];
function En(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const yb = qe(function({
  size: t = "md",
  invalid: r = !1,
  value: o,
  defaultValue: s,
  format: l = "yyyy-MM-dd",
  min: d,
  max: a,
  showTime: c = !1,
  showButton: _ = !0,
  allowClear: v = !1,
  inline: u = !1,
  disabledDates: D,
  locale: k = "en-US",
  onChange: O,
  onValueChange: S,
  onOpen: b,
  onClose: h,
  disabled: g,
  readOnly: m,
  placeholder: N,
  ariaLabel: p,
  triggerLabel: y,
  clearLabel: i,
  tabIndex: $,
  className: C,
  onBlur: U,
  onKeyDown: R,
  ...M
}, f) {
  const z = se(null), I = se(null), L = se(null), E = se(null), J = Ue(), oe = o !== void 0, [de, ne] = V(
    () => s != null ? Tn(bn(s, l) ?? qt(), l, k) : ""
  ), [ae, le] = V(!1), [X, W] = V(null), [B, te] = V(() => {
    const j = o !== void 0 ? o ?? "" : s ?? "";
    if (j) {
      const re = bn(j, l);
      if (re) return re;
    }
    return qt();
  }), he = $e(() => d ? Zn(d) : null, [d]), Z = $e(() => a ? Zn(a) : null, [a]), me = $e(
    () => new Set(D ?? []),
    [D]
  ), ye = $e(() => {
    const j = oe ? o ?? "" : de;
    return j ? bn(j, l) : null;
  }, [o, de, oe, l]), ze = q(
    (j) => {
      const re = _t(j);
      return !!(me.has(re) || he && re < _t(he) || Z && re > _t(Z));
    },
    [me, he, Z]
  ), He = q(
    (j) => {
      if (!ze(j)) return j;
      for (let re = 1; re <= 366; re += 1) {
        const Ce = Tt(j, re);
        if (!ze(Ce)) return Ce;
        const ke = Tt(j, -re);
        if (!ze(ke)) return ke;
      }
      return j;
    },
    [ze]
  ), Ie = q(
    (j) => {
      oe || ne(j ? Tn(j, l, k) : "");
      const re = j ? _p(j, c) : "";
      O?.(re), S?.(re);
    },
    [oe, l, k, c, O, S]
  ), Xe = q(
    (j) => {
      I.current = j, typeof f == "function" ? f(j) : f && (f.current = j);
    },
    [f]
  ), be = q(() => {
    le(!1), W(null), h?.(), u || L.current?.focus();
  }, [u, h]), Ge = q(() => {
    if (g) return;
    const j = ye ?? qt();
    W(j), te(He(j)), le(!0), b?.();
  }, [g, ye, He, b]), tt = q(() => {
    ae ? be() : Ge();
  }, [ae, be, Ge]), We = q((j) => {
    E.current?.querySelector(
      `[data-date="${_t(j)}"]`
    )?.focus();
  }, []), Je = q(
    (j) => {
      if (ze(j)) return;
      const re = X ?? ye, ke = {
        ...c ? {
          hour: re?.hour ?? 0,
          minute: re?.minute ?? 0,
          second: re?.second ?? 0
        } : { hour: 0, minute: 0, second: 0 },
        year: j.year,
        month: j.month,
        day: j.day
      };
      W(ke), c || (Ie(ke), be());
    },
    [ze, X, ye, c, Ie, be]
  ), Fe = q(
    (j, re) => {
      W((Ce) => {
        const ke = Ce ?? ye ?? qt(), Qe = Math.min(j === "hour" ? 23 : 59, Math.max(0, ke[j] + re));
        return { ...ke, [j]: Qe };
      });
    },
    [ye]
  ), Ye = q(
    (j, re) => {
      const Ce = re.replace(/\D/g, ""), ke = Ce === "" ? 0 : Number(Ce), Te = j === "hour" ? 23 : 59;
      W((Qe) => ({ ...Qe ?? ye ?? qt(), [j]: Math.min(Te, ke) }));
    },
    [ye]
  ), H = q(() => {
    X && (Ie(X), be());
  }, [X, Ie, be]), x = q(() => {
    if (ae) return;
    const j = bn(de, l);
    Ie(j ? bp(j, he, Z) : null);
  }, [ae, de, l, he, Z, Ie]), T = (j) => {
    const re = j.target.value;
    oe || ne(re), ae && W(null);
  }, K = (j) => {
    j.key === "Enter" ? (j.preventDefault(), ae ? X && (Ie(X), be()) : x()) : j.key === "Escape" ? ae && (j.preventDefault(), be()) : j.key === "ArrowDown" && !ae ? (j.preventDefault(), Ge()) : j.key === "Tab" && ae && le(!1), R?.(j);
  }, Q = (j) => {
    x(), U?.(j);
  }, G = (j) => {
    let re = null;
    switch (j.key) {
      case "ArrowLeft":
        re = Tt(B, -1), j.preventDefault();
        break;
      case "ArrowRight":
        re = Tt(B, 1), j.preventDefault();
        break;
      case "ArrowUp":
        re = Tt(B, -7), j.preventDefault();
        break;
      case "ArrowDown":
        re = Tt(B, 7), j.preventDefault();
        break;
      case "Home":
        re = Tt(B, -mr(B)), j.preventDefault();
        break;
      case "End":
        re = Tt(B, 6 - mr(B)), j.preventDefault();
        break;
      case "PageUp":
        re = jn(B, j.shiftKey ? -12 : -1), j.preventDefault();
        break;
      case "PageDown":
        re = jn(B, j.shiftKey ? 12 : 1), j.preventDefault();
        break;
      case "Enter":
      case " ":
        j.preventDefault(), Je(B);
        break;
      case "Escape":
        j.preventDefault(), be();
        break;
      case "Tab":
        le(!1);
        break;
    }
    if (re) {
      const Ce = He(re);
      te(Ce), setTimeout(() => We(Ce), 0);
    }
  };
  Ne(() => {
    if (!ae) return;
    const j = (re) => {
      z.current && !z.current.contains(re.target) && be();
    };
    return document.addEventListener("mousedown", j), () => document.removeEventListener("mousedown", j);
  }, [ae, be]), Ne(() => {
    if (!ae) return;
    const j = (re) => {
      re.key === "Escape" && be();
    };
    return document.addEventListener("keydown", j), () => document.removeEventListener("keydown", j);
  }, [ae, be]);
  const fe = () => {
    oe || ne(""), O?.(""), S?.(""), I.current?.focus();
  }, we = ae && X ? Tn(X, l, k) : oe ? o ? Tn(bn(o, l) ?? qt(), l, k) : "" : de, Re = oe ? !!o : de.length > 0, je = u || ae, nt = { year: B.year, month: B.month }, yt = new Date(nt.year, nt.month - 1, 1).getDay(), Y = {
    year: nt.year,
    month: nt.month,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0
  }, Se = [];
  for (let j = 0; j < fp; j += 1)
    Se.push(Tt(Y, j - yt));
  const F = X ? _t(X) : ye ? _t(ye) : null, ee = _t(qt()), ie = `${nt.year}-${bt(nt.month)}`, _e = $e(
    () => new Intl.DateTimeFormat(k, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    }),
    [k]
  ), ce = new Intl.DateTimeFormat(k, {
    month: "long",
    year: "numeric"
  }).format(new Date(nt.year, nt.month - 1, 1)), ge = Array.from(
    { length: 7 },
    (j, re) => new Intl.DateTimeFormat(k, { weekday: "short" }).format(
      new Date(2021, 0, 3 + re)
    )
  ), Ae = t === "xs" ? De.dtDatepickerInputXs : t === "sm" ? De.dtDatepickerInputSm : t === "lg" ? De.dtDatepickerInputLg : t === "xl" ? De.dtDatepickerInputXl : De.dtDatepickerInputMd, Be = /* @__PURE__ */ w(
    "div",
    {
      className: De.dtDatepickerCalendar,
      "aria-label": p ?? "Date picker",
      children: [
        /* @__PURE__ */ w("div", { className: De.dtDatepickerHeader, children: [
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: De.dtDatepickerNav,
              "aria-label": "Previous month",
              onClick: () => {
                const j = He(jn(B, -1));
                te(j), setTimeout(() => We(j), 0);
              },
              children: /* @__PURE__ */ n(Ve, { name: "chevron-left", size: 16 })
            }
          ),
          /* @__PURE__ */ n("span", { className: De.dtDatepickerTitle, children: ce }),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: De.dtDatepickerNav,
              "aria-label": "Next month",
              onClick: () => {
                const j = He(jn(B, 1));
                te(j), setTimeout(() => We(j), 0);
              },
              children: /* @__PURE__ */ n(Ve, { name: "chevron-right", size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ w(
          "div",
          {
            ref: E,
            role: "grid",
            className: De.dtDatepickerGrid,
            onKeyDown: G,
            children: [
              /* @__PURE__ */ n("div", { role: "row", className: De.dtDatepickerWeekRow, children: ge.map((j) => /* @__PURE__ */ n(
                "div",
                {
                  role: "columnheader",
                  className: De.dtDatepickerWeekday,
                  children: j
                },
                j
              )) }),
              Array.from({ length: 6 }, (j, re) => /* @__PURE__ */ n("div", { role: "row", className: De.dtDatepickerRow, children: Se.slice(re * 7, re * 7 + 7).map((Ce) => {
                const ke = _t(Ce), Te = ze(Ce), Qe = ke.startsWith(ie);
                return /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    role: "gridcell",
                    "data-date": ke,
                    tabIndex: ke === _t(B) ? 0 : -1,
                    "aria-selected": ke === F || void 0,
                    "aria-disabled": Te || void 0,
                    "aria-label": _e.format(
                      new Date(Ce.year, Ce.month - 1, Ce.day)
                    ),
                    className: [
                      De.dtDatepickerDay,
                      Qe ? null : De.dtDatepickerDayOutside,
                      ke === ee ? De.dtDatepickerDayToday : null,
                      ke === F ? De.dtDatepickerDaySelected : null,
                      Te ? De.dtDatepickerDayDisabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => Je(Ce),
                    onFocus: () => te(Ce),
                    children: Ce.day
                  },
                  ke
                );
              }) }, re))
            ]
          }
        ),
        c && /* @__PURE__ */ w("div", { className: De.dtDatepickerTime, children: [
          yp.map((j) => /* @__PURE__ */ w("label", { className: De.dtDatepickerTimeField, children: [
            /* @__PURE__ */ n("span", { className: De.dtDatepickerTimeLabel, children: En(j) }),
            /* @__PURE__ */ w("div", { className: De.dtDatepickerTimeControl, children: [
              /* @__PURE__ */ n(
                "input",
                {
                  className: De.dtDatepickerTimeInput,
                  inputMode: "numeric",
                  "aria-label": En(j),
                  value: bt((X ?? ye ?? qt())[j]),
                  onChange: (re) => Ye(j, re.target.value),
                  onKeyDown: (re) => {
                    re.key === "ArrowUp" ? (re.preventDefault(), Fe(j, 1)) : re.key === "ArrowDown" ? (re.preventDefault(), Fe(j, -1)) : re.key === "Enter" && (re.preventDefault(), H());
                  }
                }
              ),
              /* @__PURE__ */ w("span", { className: De.dtDatepickerTimeButtons, children: [
                /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    "aria-label": `Increase ${En(j).toLowerCase()}`,
                    onClick: () => Fe(j, 1),
                    children: /* @__PURE__ */ n(Ve, { name: "chevron-up", size: 11 })
                  }
                ),
                /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    "aria-label": `Decrease ${En(j).toLowerCase()}`,
                    onClick: () => Fe(j, -1),
                    children: /* @__PURE__ */ n(Ve, { name: "chevron-down", size: 11 })
                  }
                )
              ] })
            ] })
          ] }, j)),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: De.dtDatepickerOk,
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
      ref: z,
      className: [
        De.dtDatepicker,
        u ? De.dtDatepickerInline : null,
        C
      ].filter(Boolean).join(" "),
      children: [
        !u && /* @__PURE__ */ w(Oe, { children: [
          /* @__PURE__ */ n(
            "input",
            {
              ref: Xe,
              type: "text",
              autoComplete: "off",
              value: we,
              disabled: g,
              readOnly: m,
              placeholder: N,
              tabIndex: $,
              role: _ ? void 0 : "combobox",
              "aria-label": p ?? "Date",
              "aria-haspopup": _ ? void 0 : "dialog",
              "aria-expanded": _ ? void 0 : je,
              "aria-controls": _ ? void 0 : J,
              "aria-invalid": r || void 0,
              className: [
                De.dtDatepickerInput,
                Ae,
                r ? De.dtDatepickerInputInvalid : null
              ].filter(Boolean).join(" "),
              onChange: T,
              onKeyDown: K,
              onBlur: Q,
              onClick: () => {
                _ || tt();
              },
              ...M
            }
          ),
          v && !g && Re && /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: [
                De.dtDatepickerClear,
                _ ? De.dtDatepickerClearInset : null
              ].filter(Boolean).join(" "),
              "aria-label": i ?? "Clear",
              onClick: fe,
              children: /* @__PURE__ */ n(Ve, { name: "close", size: 14 })
            }
          ),
          _ && /* @__PURE__ */ n(
            "button",
            {
              ref: L,
              type: "button",
              className: [
                De.dtDatepickerTrigger,
                ae ? De.dtDatepickerTriggerOpen : null
              ].filter(Boolean).join(" "),
              "aria-label": y ?? "Open calendar",
              "aria-haspopup": "dialog",
              "aria-expanded": ae,
              "aria-controls": J,
              disabled: g,
              onClick: tt,
              children: /* @__PURE__ */ n(Ve, { name: "calendar", size: 16 })
            }
          )
        ] }),
        je && /* @__PURE__ */ n(
          "div",
          {
            id: J,
            role: u ? void 0 : "dialog",
            className: u ? void 0 : De.dtDatepickerPopup,
            children: Be
          }
        )
      ]
    }
  );
}), Ft = {}, vb = ({
  value: e = 0,
  stars: t = 5,
  readOnly: r = !1,
  disabled: o = !1,
  ariaLabel: s = "Rating",
  clearLabel: l = "Clear",
  rateLabel: d = "Rate",
  tabIndex: a = 0,
  className: c,
  onChange: _,
  onValueChange: v
}) => {
  const [u, D] = V(e), k = q(
    (g) => Math.min(t, Math.max(1, g)),
    [t]
  ), O = q(
    (g) => {
      _?.(g), v?.(g);
    },
    [_, v]
  ), S = q(
    (g) => {
      r || o || (O(g), D(g));
    },
    [r, o, O]
  ), b = (g) => {
    if (r || o) return;
    const m = u > 0 ? u : 1;
    switch (g.key) {
      case "ArrowRight":
      case "ArrowUp":
        g.preventDefault(), S(k(m + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        g.preventDefault(), S(k(m - 1));
        break;
      case "Home":
        g.preventDefault(), S(1);
        break;
      case "End":
        g.preventDefault(), S(t);
        break;
    }
  }, h = Array.from({ length: t }, (g, m) => m + 1);
  return /* @__PURE__ */ w(
    "div",
    {
      role: "radiogroup",
      "aria-label": s,
      "aria-readonly": r || void 0,
      className: [
        Ft.dtRating,
        r ? Ft.dtRatingReadonly : null,
        o ? Ft.dtRatingDisabled : null,
        c
      ].filter(Boolean).join(" "),
      onKeyDown: b,
      children: [
        !r && !o && /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: Ft.dtRatingClear,
            "aria-label": l,
            tabIndex: e === 0 ? a : -1,
            disabled: o,
            onClick: () => S(0),
            children: /* @__PURE__ */ n(Ve, { name: "ban", size: 16 })
          }
        ),
        h.map((g) => {
          const m = g <= e, N = g === (e > 0 ? e : u);
          return /* @__PURE__ */ w(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": m,
              "aria-posinset": g,
              "aria-setsize": t,
              "aria-label": `${d} ${g}`,
              tabIndex: N ? a : -1,
              "aria-disabled": o || r || void 0,
              disabled: o || r,
              className: [
                Ft.dtRatingItem,
                m ? Ft.dtRatingItemFilled : null
              ].filter(Boolean).join(" "),
              onClick: () => S(g),
              onFocus: () => D(g),
              children: [
                /* @__PURE__ */ n("span", { className: Ft.dtRatingIconFilled, "aria-hidden": "true", children: /* @__PURE__ */ n(Ve, { name: "star", size: 20 }) }),
                /* @__PURE__ */ n("span", { className: Ft.dtRatingIconEmpty, "aria-hidden": "true", children: /* @__PURE__ */ n(Ve, { name: "star-outline", size: 20 }) })
              ]
            },
            g
          );
        })
      ]
    }
  );
}, Vt = {};
function Nt(e, t, r) {
  return Math.min(r, Math.max(t, e));
}
const xb = ({
  value: e = 0,
  valueMin: t = 0,
  valueMax: r = 100,
  min: o = 0,
  max: s = 100,
  step: l = 1,
  range: d = !1,
  orientation: a = "horizontal",
  disabled: c = !1,
  label: _ = "Value",
  minLabel: v = "Min",
  maxLabel: u = "Max",
  tabIndex: D = 0,
  className: k,
  onChange: O,
  onInput: S,
  onValueChange: b,
  onInputChange: h
}) => {
  const g = se(null), m = se(null), [N, p] = V(null), y = N ?? e, i = $e(() => Nt(y, o, s), [y, o, s]), $ = $e(
    () => Nt(d ? t : i, o, s),
    [d, t, i, o, s]
  ), C = $e(
    () => Nt(d ? Math.max(r, $) : i, o, s),
    [d, r, $, i, o, s]
  ), U = q(
    (B) => {
      const te = s - o;
      return te <= 0 ? 0 : (Nt(B, o, s) - o) / te * 100;
    },
    [o, s]
  ), R = q(
    (B, te) => {
      const he = g.current;
      if (!he) return o;
      const Z = he.getBoundingClientRect();
      let me;
      a === "vertical" ? me = 1 - (te - Z.top) / Z.height : me = (B - Z.left) / Z.width;
      const ye = o + Nt(me, 0, 1) * (s - o);
      return l > 0 ? Nt(Math.round(ye / l) * l, o, s) : Nt(ye, o, s);
    },
    [o, s, l, a]
  ), M = q(
    (B) => {
      typeof B == "number" && p(B), O?.(B), b?.(B);
    },
    [O, b]
  ), f = q(
    (B) => {
      typeof B == "number" && p(B), S?.(B), h?.(B);
    },
    [S, h]
  ), z = q(
    (B, te, he) => {
      const Z = R(te, he);
      let me;
      d ? B === "min" ? me = { min: Math.min(Z, C), max: C } : me = { min: $, max: Math.max(Z, $) } : me = Z, f(me), m.current === null && M(me);
    },
    [d, R, $, C, f, M]
  ), I = q(
    (B, te) => {
      const he = (l > 0 ? l : 1) * te;
      let Z;
      d ? B === "min" ? Z = {
        min: Nt($ + he, o, C),
        max: C
      } : Z = {
        min: $,
        max: Nt(C + he, $, s)
      } : Z = Nt(i + he, o, s), M(Z);
    },
    [d, l, o, s, $, C, i, M]
  ), L = (B, te) => {
    if (!c)
      switch (te.key) {
        case "ArrowLeft":
        case "ArrowDown":
          te.preventDefault(), I(B, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          te.preventDefault(), I(B, 1);
          break;
        case "Home":
          te.preventDefault(), M(d ? B === "min" ? { min: o, max: C } : { min: $, max: $ } : o);
          break;
        case "End":
          te.preventDefault(), M(d ? B === "min" ? { min: C, max: C } : { min: $, max: s } : s);
          break;
      }
  }, E = (B, te) => {
    c || (te.preventDefault(), te.currentTarget.focus(), typeof te.currentTarget.setPointerCapture == "function" && te.currentTarget.setPointerCapture(te.pointerId), m.current = { key: B, pointerId: te.pointerId }, z(B, te.clientX, te.clientY));
  }, J = (B) => {
    !m.current || m.current.pointerId !== B.pointerId || (B.preventDefault(), z(m.current.key, B.clientX, B.clientY));
  }, oe = (B) => {
    !m.current || m.current.pointerId !== B.pointerId || (m.current = null, B.preventDefault(), M(d ? { min: $, max: C } : i));
  }, [de, ne] = V(null), ae = U($), le = U(C), X = d ? ae : 0, W = le;
  return /* @__PURE__ */ n(
    "div",
    {
      className: [
        Vt.dtSlider,
        a === "vertical" ? Vt.dtSliderVertical : null,
        c ? Vt.dtSliderDisabled : null,
        k
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ w("div", { ref: g, className: Vt.dtSliderTrack, children: [
        /* @__PURE__ */ n(
          "div",
          {
            className: Vt.dtSliderRange,
            style: a === "vertical" ? { bottom: `${X}%`, height: `${W - X}%` } : { left: `${X}%`, width: `${W - X}%` }
          }
        ),
        /* @__PURE__ */ n(
          "div",
          {
            role: "slider",
            "aria-valuemin": o,
            "aria-valuemax": s,
            "aria-valuenow": Math.round($),
            "aria-orientation": a,
            "aria-label": d ? v : _,
            "aria-disabled": c || void 0,
            tabIndex: c || d && de === "max" ? -1 : D,
            className: Vt.dtSliderHandle,
            style: a === "vertical" ? { bottom: `calc(${ae}% - 8px)` } : { left: `calc(${ae}% - 8px)` },
            onKeyDown: (B) => L("min", B),
            onPointerDown: (B) => E("min", B),
            onPointerMove: J,
            onPointerUp: oe,
            onFocus: () => ne("min")
          }
        ),
        d && /* @__PURE__ */ n(
          "div",
          {
            role: "slider",
            "aria-valuemin": o,
            "aria-valuemax": s,
            "aria-valuenow": Math.round(C),
            "aria-orientation": a,
            "aria-label": u,
            "aria-disabled": c || void 0,
            tabIndex: c || de === "min" ? -1 : D,
            className: Vt.dtSliderHandle,
            style: a === "vertical" ? { bottom: `calc(${le}% - 8px)` } : { left: `calc(${le}% - 8px)` },
            onKeyDown: (B) => L("max", B),
            onPointerDown: (B) => E("max", B),
            onPointerMove: J,
            onPointerUp: oe,
            onFocus: () => ne("max")
          }
        )
      ] })
    }
  );
}, Pe = {}, vp = "-10675199.02:48:05.4775808", xp = "10675199.02:48:05.4775808", At = 86400, Lt = 3600, $t = 60, Un = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, br = {
  days: At,
  hours: Lt,
  minutes: $t,
  seconds: 1
}, wp = {
  day: At,
  hour: Lt,
  minute: $t,
  second: 1
};
function en(e) {
  return String(e).padStart(2, "0");
}
function Nn(e) {
  const t = e.trim();
  if (!t) return null;
  let r = 1, o = t;
  o.startsWith("-") ? (r = -1, o = o.slice(1)) : o.startsWith("+") && (o = o.slice(1));
  const s = /^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(
    o
  );
  if (s) {
    if (!s.slice(1).some((u) => u != null)) return null;
    const a = s[1] != null ? Number(s[1]) : 0, c = s[2] != null ? Number(s[2]) : 0, _ = s[3] != null ? Number(s[3]) : 0, v = s[4] != null ? Number(s[4]) : 0;
    return r * (a * At + c * Lt + _ * $t + v);
  }
  const l = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(o);
  if (l) {
    const d = l[1] != null ? Number(l[1]) : 0, a = Number(l[2]), c = Number(l[3]), _ = l[4] != null ? Number(l[4]) : 0, v = l[5] != null ? +`0.${l[5]}` : 0;
    return a > 23 || c > 59 || _ > 59 ? null : r * (d * At + a * Lt + c * $t + _ + v);
  }
  return null;
}
function kp(e) {
  return e.days * At + e.hours * Lt + e.minutes * $t + e.seconds;
}
function yr(e) {
  let t = Math.abs(e);
  const r = Math.floor(t / At);
  t %= At;
  const o = Math.floor(t / Lt);
  t %= Lt;
  const s = Math.floor(t / $t), l = Math.round(t % $t * 1e9) / 1e9;
  return { days: r, hours: o, minutes: s, seconds: l };
}
function Jn(e, t) {
  const r = e < 0;
  let o = Math.abs(e);
  t === "minute" ? o = Math.round(o / $t) * $t : t === "hour" ? o = Math.round(o / Lt) * Lt : t === "day" && (o = Math.round(o / At) * At);
  let s = Math.round(o % $t);
  const l = s === 60 ? 1 : 0;
  s = s === 60 ? 0 : s;
  const d = Math.floor(o / $t) + l, a = d % 60, c = Math.floor(d / 60), _ = c % 24, v = Math.floor(c / 24), u = r ? "-" : "", D = v > 0 ? `${v}.` : "";
  switch (t) {
    case "day":
      return `${u}${v} day${v === 1 ? "" : "s"}`;
    case "hour":
      return `${u}${D}${en(_)}`;
    case "minute":
      return `${u}${D}${en(_)}:${en(a)}`;
    default:
      return `${u}${D}${en(_)}:${en(a)}:${en(s)}`;
  }
}
function vr(e, t = "second") {
  const r = Nn(e);
  return r === null ? "" : Jn(r, t);
}
function Vn(e, t, r) {
  return Math.min(r, Math.max(t, e));
}
const wb = qe(
  function({
    size: t = "md",
    invalid: r = !1,
    value: o,
    defaultValue: s,
    min: l = vp,
    max: d = xp,
    step: a = "1",
    precision: c = "second",
    showDays: _ = !0,
    showHours: v = !0,
    showMinutes: u = !0,
    showSeconds: D = !0,
    allowClear: k = !1,
    inline: O = !1,
    onChange: S,
    onValueChange: b,
    onOpen: h,
    onClose: g,
    disabled: m,
    placeholder: N,
    ariaLabel: p,
    triggerLabel: y,
    clearLabel: i,
    tabIndex: $,
    className: C,
    onBlur: U,
    onKeyDown: R,
    ...M
  }, f) {
    const z = se(null), I = se(null), L = se(null), E = Ue(), J = o !== void 0, [oe, de] = V(
      () => s != null ? vr(s, c) : ""
    ), [ne, ae] = V(!1), [le, X] = V(null), [W, B] = V(null), te = $e(
      () => Nn(l) ?? -Number.MAX_SAFE_INTEGER,
      [l]
    ), he = $e(
      () => Nn(d) ?? Number.MAX_SAFE_INTEGER,
      [d]
    ), Z = $e(() => {
      const Y = Number.parseFloat(a);
      return Number.isNaN(Y) || Y <= 0 ? 1 : Y;
    }, [a]), me = $e(() => {
      const Y = J ? o ?? "" : oe;
      return Y ? Nn(Y) : null;
    }, [o, oe, J]), ye = q(
      (Y) => {
        const Se = Y === null ? "" : Jn(Y, c);
        J || de(Se), S?.(Se), b?.(Se);
      },
      [J, c, S, b]
    ), ze = q(
      (Y) => {
        Y && le !== null && ye(le), ae(!1), X(null), B(null), g?.(), O || L.current?.focus();
      },
      [O, le, ye, g]
    ), He = q(() => {
      m || (X(me ?? 0), ae(!0), h?.());
    }, [m, me, h]), Ie = q(() => {
      ne ? ze(!1) : He();
    }, [ne, ze, He]), Xe = q(
      (Y, Se) => {
        X((F) => {
          const ie = (F ?? me ?? 0) + Se * Z * br[Y];
          return Vn(ie, te, he);
        });
      },
      [me, Z, te, he]
    ), be = q(
      (Y) => {
        const Se = W?.[Y];
        if (Se == null) return;
        const F = Number.parseFloat(Se), ee = Number.isNaN(F) ? 0 : F;
        X((ie) => {
          const _e = ie ?? me ?? 0, ce = yr(_e);
          ce[Y] = ee;
          const Ae = (_e < 0 ? -1 : 1) * kp(ce);
          return Vn(Ae, te, he);
        }), B(null);
      },
      [W, me, te, he]
    ), Ge = (Y, Se) => {
      B((F) => ({ ...F ?? {}, [Y]: Se }));
    }, tt = (Y, Se) => {
      switch (Se.key) {
        case "ArrowUp":
          Se.preventDefault(), be(Y), Xe(Y, 1);
          break;
        case "ArrowDown":
          Se.preventDefault(), be(Y), Xe(Y, -1);
          break;
        case "Home":
          Se.preventDefault(), be(Y), X(te);
          break;
        case "End":
          Se.preventDefault(), be(Y), X(he);
          break;
        case "Enter":
          Se.preventDefault(), be(Y), ze(!0);
          break;
      }
    }, We = q(() => {
      if (ne) return;
      const Y = Nn(oe);
      ye(Y !== null ? Vn(Y, te, he) : null);
    }, [ne, oe, te, he, ye]), Je = (Y) => {
      J || de(Y.target.value);
    }, Fe = (Y) => {
      Y.key === "Enter" ? (Y.preventDefault(), ne ? ze(!0) : We()) : Y.key === "Escape" && ne ? (Y.preventDefault(), ze(!1)) : Y.key === "ArrowDown" && !ne ? (Y.preventDefault(), He()) : Y.key === "Tab" && ne && ae(!1), R?.(Y);
    }, Ye = (Y) => {
      We(), U?.(Y);
    }, H = () => {
      J || de(""), S?.(""), b?.(""), I.current?.focus();
    };
    Ne(() => {
      if (!ne) return;
      const Y = (Se) => {
        z.current && !z.current.contains(Se.target) && ze(!1);
      };
      return document.addEventListener("mousedown", Y), () => document.removeEventListener("mousedown", Y);
    }, [ne, ze]), Ne(() => {
      if (!ne) return;
      const Y = (Se) => {
        Se.key === "Escape" && ze(!1);
      };
      return document.addEventListener("keydown", Y), () => document.removeEventListener("keydown", Y);
    }, [ne, ze]), Ne(() => {
      if (O && le !== null) {
        const Y = me;
        (Y === null || Math.abs(le - Y) > 1e-9) && ye(le);
      }
    }, [O, le, me, ye]);
    const x = q(
      (Y) => {
        I.current = Y, typeof f == "function" ? f(Y) : f && (f.current = Y);
      },
      [f]
    ), T = J ? o ? vr(o, c) : "" : oe, K = J ? !!o : oe.length > 0, Q = O || ne, G = le ?? me ?? 0, fe = yr(G), we = wp[c], je = ["days", "hours", "minutes", "seconds"].filter(
      (Y) => br[Y] >= we && (Y === "days" ? _ : Y === "hours" ? v : Y === "minutes" ? u : D)
    ), nt = t === "xs" ? Pe.dtTimespanpickerInputXs : t === "sm" ? Pe.dtTimespanpickerInputSm : t === "lg" ? Pe.dtTimespanpickerInputLg : t === "xl" ? Pe.dtTimespanpickerInputXl : Pe.dtTimespanpickerInputMd, yt = /* @__PURE__ */ w("div", { className: Pe.dtTimespanpickerPanel, children: [
      /* @__PURE__ */ n("div", { className: Pe.dtTimespanpickerPreview, "aria-live": "polite", children: Jn(G, c) }),
      /* @__PURE__ */ n("div", { className: Pe.dtTimespanpickerUnits, children: je.map((Y) => /* @__PURE__ */ w("label", { className: Pe.dtTimespanpickerUnit, children: [
        /* @__PURE__ */ n("span", { className: Pe.dtTimespanpickerUnitLabel, children: Un[Y] }),
        /* @__PURE__ */ w("span", { className: Pe.dtTimespanpickerUnitControl, children: [
          /* @__PURE__ */ n(
            "input",
            {
              className: Pe.dtTimespanpickerUnitInput,
              inputMode: "decimal",
              value: W?.[Y] ?? String(fe[Y]),
              onChange: (Se) => Ge(Y, Se.target.value),
              onKeyDown: (Se) => tt(Y, Se),
              onBlur: () => be(Y)
            }
          ),
          /* @__PURE__ */ w("span", { className: Pe.dtTimespanpickerUnitButtons, children: [
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${Un[Y].toLowerCase()}`,
                onClick: () => {
                  be(Y), Xe(Y, 1);
                },
                children: /* @__PURE__ */ n(Ve, { name: "chevron-up", size: 11 })
              }
            ),
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${Un[Y].toLowerCase()}`,
                onClick: () => {
                  be(Y), Xe(Y, -1);
                },
                children: /* @__PURE__ */ n(Ve, { name: "chevron-down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, Y)) }),
      /* @__PURE__ */ n("div", { className: Pe.dtTimespanpickerFooter, children: /* @__PURE__ */ n(
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
        ref: z,
        className: [
          Pe.dtTimespanpicker,
          O ? Pe.dtTimespanpickerInline : null,
          C
        ].filter(Boolean).join(" "),
        children: [
          !O && /* @__PURE__ */ w(Oe, { children: [
            /* @__PURE__ */ n(
              "input",
              {
                ref: x,
                type: "text",
                autoComplete: "off",
                value: T,
                disabled: m,
                placeholder: N,
                tabIndex: $,
                role: "combobox",
                "aria-label": p ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": ne,
                "aria-controls": E,
                "aria-invalid": r || void 0,
                className: [
                  Pe.dtTimespanpickerInput,
                  nt,
                  r ? Pe.dtTimespanpickerInputInvalid : null
                ].filter(Boolean).join(" "),
                onChange: Je,
                onKeyDown: Fe,
                onBlur: Ye,
                ...M
              }
            ),
            k && !m && K && /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: Pe.dtTimespanpickerClear,
                "aria-label": i ?? "Clear",
                onClick: H,
                children: /* @__PURE__ */ n(Ve, { name: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ n(
              "button",
              {
                ref: L,
                type: "button",
                className: [
                  Pe.dtTimespanpickerTrigger,
                  ne ? Pe.dtTimespanpickerTriggerOpen : null
                ].filter(Boolean).join(" "),
                "aria-label": y ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": ne,
                "aria-controls": E,
                disabled: m,
                onClick: Ie,
                children: /* @__PURE__ */ n(Ve, { name: "clock", size: 16 })
              }
            )
          ] }),
          Q && /* @__PURE__ */ n(
            "div",
            {
              id: E,
              role: O ? void 0 : "dialog",
              "aria-label": p ?? "Time span picker",
              className: O ? void 0 : Pe.dtTimespanpickerPopup,
              children: yt
            }
          )
        ]
      }
    );
  }
), $p = "_wrapper_gfb15_1", Np = "_cells_gfb15_8", Sp = "_cell_gfb15_8", Dp = "_invalid_gfb15_63", zp = "_live_gfb15_72", Xt = {
  wrapper: $p,
  cells: Np,
  cell: Sp,
  "cell-sm": "_cell-sm_gfb15_45",
  "cell-md": "_cell-md_gfb15_51",
  "cell-lg": "_cell-lg_gfb15_57",
  invalid: Dp,
  live: zp
};
function xr(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const kb = qe(
  function({
    length: t = 6,
    value: r,
    defaultValue: o,
    onChange: s,
    invalid: l = !1,
    size: d = "md",
    autoFocus: a = !1,
    disabled: c = !1,
    label: _ = "Security code",
    liveAnnounce: v = !0,
    className: u,
    "aria-label": D
  }, k) {
    const O = Ue(), S = r !== void 0, [b, h] = V(xr(o).join("")), g = S ? xr(r).join("") : b, m = Array.from({ length: t }, (M, f) => g[f] ?? ""), N = se([]), [p, y] = V(""), i = (M) => {
      S || h(M), s?.(M);
    }, $ = (M) => {
      const f = N.current[M];
      f && !f.disabled && (f.focus(), f.select());
    }, C = (M, f) => {
      const z = f.replace(/\D/g, "").slice(-1), I = g.split("");
      if (z) {
        I[M] = z;
        const L = I.join("").slice(0, t);
        i(L), L.length < t ? $(M + 1) : v && y("Code complete");
      }
    }, U = (M, f) => {
      if (f.key === "Backspace") {
        if (f.preventDefault(), g[M]) {
          const z = g.split("");
          z[M] = "", i(z.join(""));
        } else if (M > 0) {
          const z = g.split("");
          z[M - 1] = "", i(z.join("")), $(M - 1);
        }
      } else f.key === "ArrowLeft" && M > 0 ? (f.preventDefault(), $(M - 1)) : f.key === "ArrowRight" && M < t - 1 ? (f.preventDefault(), $(M + 1)) : f.key === "Home" ? (f.preventDefault(), $(0)) : f.key === "End" && (f.preventDefault(), $(t - 1));
    }, R = (M, f) => {
      f.preventDefault();
      const z = f.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!z) return;
      const I = g.split("");
      let L = 0;
      for (let J = 0; J < z.length && M + J < t; J++)
        I[M + J] = z[J] ?? "", L++;
      const E = I.join("");
      i(E), E.length >= t ? v && y("Code complete") : $(M + L);
    };
    return /* @__PURE__ */ w(
      "div",
      {
        className: [Xt.wrapper, u].filter(Boolean).join(" "),
        role: "group",
        "aria-label": D ?? _,
        "data-invalid": l || void 0,
        children: [
          /* @__PURE__ */ n("div", { className: [Xt.cells, Xt[d]].join(" "), children: m.map((M, f) => /* @__PURE__ */ n(
            "input",
            {
              ref: (z) => {
                N.current[f] = z, f === 0 && k && (typeof k == "function" ? k(z) : k.current = z);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: M,
              disabled: c,
              "aria-label": `Digit ${f + 1} of ${t}`,
              "aria-invalid": l && M !== "" ? !0 : void 0,
              autoFocus: a && f === 0,
              className: [Xt.cell, Xt[`cell-${d}`], l ? Xt.invalid : null].filter(Boolean).join(" "),
              onChange: (z) => C(f, z.target.value),
              onKeyDown: (z) => U(f, z),
              onPaste: (z) => R(f, z),
              onFocus: (z) => z.target.select(),
              onBlur: () => {
                v && y("");
              }
            },
            f
          )) }),
          v && /* @__PURE__ */ n("span", { id: `${O}-live`, role: "status", "aria-live": "polite", className: Xt.live, children: p })
        ]
      }
    );
  }
), Cp = "_wrapper_26gop_1", Op = "_header_26gop_7", Mp = "_label_26gop_15", Ip = "_clear_26gop_22", jp = "_canvas_26gop_53", Tp = "_disabled_26gop_69", tn = {
  wrapper: Cp,
  header: Op,
  label: Mp,
  clear: Ip,
  canvas: jp,
  disabled: Tp
}, $b = qe(
  function({
    value: t,
    defaultValue: r,
    onChange: o,
    penColor: s = "#1c1c1c",
    penWidth: l = 2.5,
    clearLabel: d = "Clear",
    ariaLabel: a = "Signature",
    width: c,
    height: _ = 140,
    disabled: v = !1,
    className: u
  }, D) {
    const k = se(null), O = se(!1), S = se(!1), b = se({ x: 0, y: 0 });
    Ne(() => {
      const i = k.current;
      if (!i) return;
      const $ = window.devicePixelRatio || 1, C = Math.round((c ?? i.clientWidth) * $), U = Math.round(_ * $);
      (i.width !== C || i.height !== U) && (i.width = C, i.height = U);
      const R = i.getContext("2d");
      if (!R) return;
      R.setTransform($, 0, 0, $, 0, 0), R.lineWidth = l, R.strokeStyle = s, R.lineCap = "round", R.lineJoin = "round";
      const M = t ?? r;
      if (M) {
        const f = new Image();
        f.onload = () => {
          R.drawImage(f, 0, 0, i.clientWidth, _);
        }, f.src = M;
      }
    }, [t, r, s, l, c, _]);
    const h = () => {
      const i = k.current;
      if (!i) return;
      const $ = i.toDataURL("image/png");
      o?.($);
    }, g = () => {
      const i = k.current;
      if (!i) return;
      const $ = i.getContext("2d");
      $ && $.clearRect(0, 0, i.width, i.height), o?.("");
    };
    er(D, () => ({
      clear: g,
      toDataURL: (i = "image/png", $) => k.current?.toDataURL(i, $) ?? ""
    }));
    const m = (i) => {
      const $ = i.currentTarget.getBoundingClientRect();
      return { x: i.clientX - $.left, y: i.clientY - $.top };
    }, N = (i) => {
      v || (i.preventDefault(), typeof i.currentTarget.setPointerCapture == "function" && i.currentTarget.setPointerCapture(i.pointerId), O.current = !0, S.current = !1, b.current = m(i));
    }, p = (i) => {
      if (!O.current) return;
      i.preventDefault();
      const $ = i.currentTarget.getContext("2d");
      if (!$) return;
      const C = m(i);
      $.beginPath(), $.moveTo(b.current.x, b.current.y), $.lineTo(C.x, C.y), $.stroke(), b.current = C, S.current = !0;
    }, y = (i) => {
      O.current && (i.preventDefault(), O.current = !1, S.current && h());
    };
    return /* @__PURE__ */ w("div", { className: [tn.wrapper, u, v ? tn.disabled : null].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ w("div", { className: tn.header, children: [
        /* @__PURE__ */ n("span", { className: tn.label, children: a }),
        /* @__PURE__ */ n("button", { type: "button", className: tn.clear, onClick: g, disabled: v, children: d })
      ] }),
      /* @__PURE__ */ n(
        "canvas",
        {
          ref: k,
          role: "img",
          "aria-label": a,
          "aria-disabled": v || void 0,
          style: { width: c ? `${c}px` : void 0, height: `${_}px` },
          className: tn.canvas,
          onPointerDown: N,
          onPointerMove: p,
          onPointerUp: y,
          onPointerCancel: y
        }
      )
    ] });
  }
), Ep = "_wrapper_1v5uo_1", Ap = "_trigger_1v5uo_7", Lp = "_list_1v5uo_35", Rp = "_row_1v5uo_44", Bp = "_name_1v5uo_59", Pp = "_size_1v5uo_68", qp = "_progress_1v5uo_74", Fp = "_fill_1v5uo_82", Kp = "_status_1v5uo_99", Hp = "_remove_1v5uo_106", St = {
  wrapper: Ep,
  trigger: Ap,
  list: Lp,
  row: Rp,
  name: Bp,
  size: Pp,
  progress: qp,
  fill: Fp,
  status: Kp,
  remove: Hp
};
function Wp(e) {
  return e > 0 ? `${Math.max(1, Math.round(e / 1024))} KB` : "0 KB";
}
const Nb = qe(function({
  url: t,
  multiple: r = !1,
  parameterName: o = "files",
  auto: s = !0,
  headers: l,
  accept: d,
  chooseText: a = "Upload",
  children: c,
  onProgress: _,
  onComplete: v,
  onError: u
}, D) {
  const k = se(null), [O, S] = V([]), b = se(/* @__PURE__ */ new Map()), h = (y, i) => {
    S(($) => $.map((C) => C.file.name === y ? { ...C, ...i } : C));
  }, g = (y) => {
    if (!t) return;
    const i = new XMLHttpRequest();
    b.current.set(y.file.name, i);
    const $ = new FormData();
    if ($.append(o, y.file), i.upload.addEventListener("progress", (C) => {
      if (!C.lengthComputable) return;
      const U = Math.round(C.loaded / C.total * 100);
      h(y.file.name, { state: "uploading", progress: U }), _?.(y.file.name, U);
    }), i.addEventListener("load", () => {
      i.status >= 200 && i.status < 300 ? (h(y.file.name, { state: "complete", progress: 100 }), v?.(y.file.name)) : (h(y.file.name, { state: "error", message: `HTTP ${i.status}` }), u?.(y.file.name, `HTTP ${i.status}`));
    }), i.addEventListener("error", () => {
      h(y.file.name, { state: "error", message: "Network error" }), u?.(y.file.name, "Network error");
    }), l)
      for (const [C, U] of Object.entries(l))
        i.setRequestHeader(C, U);
    i.open("POST", t), i.send($), h(y.file.name, { state: "uploading", progress: 0 });
  }, m = (y) => {
    if (!y) return;
    const i = [...y].map(($) => ({
      file: $,
      state: "pending",
      progress: 0
    }));
    S(($) => [...$, ...i]), k.current && (k.current.value = ""), s && i.forEach(g);
  }, N = (y) => {
    b.current.get(y)?.abort(), b.current.delete(y), S(($) => $.filter((C) => C.file.name !== y));
  }, p = c ?? /* @__PURE__ */ w("button", { type: "button", className: St.trigger, onClick: () => k.current?.click(), children: [
    /* @__PURE__ */ n(Ve, { name: "upload", size: 14 }),
    a
  ] });
  return er(D, () => ({
    open: () => k.current?.click(),
    upload: () => O.forEach((y) => y.state === "pending" ? g(y) : null)
  })), /* @__PURE__ */ w("div", { className: St.wrapper, children: [
    p,
    /* @__PURE__ */ n(
      "input",
      {
        ref: k,
        type: "file",
        hidden: !0,
        multiple: r,
        accept: d,
        "data-testid": "upload-input",
        onChange: (y) => m(y.target.files)
      }
    ),
    !c && O.length > 0 && /* @__PURE__ */ n("ul", { className: St.list, children: O.map(({ file: y, state: i, progress: $, message: C }) => /* @__PURE__ */ w("li", { className: St.row, "data-state": i, "data-testid": "upload-row", children: [
      /* @__PURE__ */ n("span", { className: St.name, children: y.name }),
      /* @__PURE__ */ n("span", { className: St.size, children: Wp(y.size) }),
      /* @__PURE__ */ n(
        "span",
        {
          className: St.progress,
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": $,
          children: /* @__PURE__ */ n("span", { className: St.fill, style: { width: `${$}%` } })
        }
      ),
      /* @__PURE__ */ n("span", { className: St.status, role: "status", children: i === "uploading" ? "Uploading" : i === "complete" ? "Complete" : i === "error" ? C ?? "Failed" : "Pending" }),
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: St.remove,
          "aria-label": `Remove ${y.name}`,
          onClick: () => N(y.name),
          children: /* @__PURE__ */ n(Ve, { name: "close", size: 14 })
        }
      )
    ] }, y.name)) })
  ] });
}), Up = "_zone_ws0th_1", Vp = "_dragging_ws0th_23", Xp = "_caption_ws0th_28", Gp = "_browse_ws0th_40", Yp = "_disabled_ws0th_67", yn = {
  zone: Up,
  dragging: Vp,
  caption: Xp,
  browse: Gp,
  disabled: Yp
};
function Zp(e, t) {
  return t ? t.split(",").some((r) => {
    if (r = r.trim(), !r) return !1;
    if (r.startsWith(".")) return e.name.toLowerCase().endsWith(r.toLowerCase());
    if (r.endsWith("/*")) {
      const o = r.slice(0, -1);
      return e.type.startsWith(o);
    }
    return e.type === r;
  }) : !0;
}
const Sb = qe(function({
  accept: t,
  multiple: r = !1,
  onDrop: o,
  label: s = "Drop files here or browse",
  dragLabel: l = "Drop to attach",
  browseText: d = "Browse",
  disabled: a = !1,
  className: c
}, _) {
  const v = se(null), [u, D] = V(!1), k = (g) => {
    if (!g || g.length === 0) return;
    const m = [...g].filter((N) => Zp(N, t ?? ""));
    m.length !== 0 && o?.(m);
  }, O = (g) => {
    a || (g.preventDefault(), D(!0));
  }, S = (g) => {
    a || (g.preventDefault(), g.dataTransfer.dropEffect = "copy", D(!0));
  }, b = (g) => {
    a || g.currentTarget.contains(g.relatedTarget) || D(!1);
  }, h = (g) => {
    a || (g.preventDefault(), D(!1), k(g.dataTransfer.files));
  };
  return er(_, () => ({
    open: () => v.current?.click()
  })), /* @__PURE__ */ w(
    "div",
    {
      role: "region",
      "aria-label": s,
      className: [yn.zone, u ? yn.dragging : null, a ? yn.disabled : null, c].filter(Boolean).join(" "),
      onDragEnter: O,
      onDragOver: S,
      onDragLeave: b,
      onDrop: h,
      children: [
        /* @__PURE__ */ n("p", { className: yn.caption, children: u ? l : s }),
        !a && /* @__PURE__ */ n("button", { type: "button", className: yn.browse, onClick: () => v.current?.click(), children: d }),
        /* @__PURE__ */ n(
          "input",
          {
            ref: v,
            type: "file",
            hidden: !0,
            multiple: r,
            accept: t,
            "data-testid": "dropzone-input",
            onChange: (g) => {
              k(g.target.files), g.target.value = "";
            }
          }
        )
      ]
    }
  );
}), Jp = "_root_zkoiq_1", Qp = "_menubar_zkoiq_5", eh = "_horizontal_zkoiq_15", th = "_vertical_zkoiq_20", nh = "_itemWrapper_zkoiq_25", rh = "_item_zkoiq_25", oh = "_disabled_zkoiq_61", sh = "_icon_zkoiq_68", ah = "_text_zkoiq_75", lh = "_caret_zkoiq_79", ch = "_hasChildren_zkoiq_85", ih = "_submenu_zkoiq_94", dh = "_submenuItem_zkoiq_118", at = {
  root: Jp,
  menubar: Qp,
  horizontal: eh,
  vertical: th,
  itemWrapper: nh,
  item: rh,
  disabled: oh,
  icon: sh,
  text: ah,
  caret: lh,
  hasChildren: ch,
  submenu: ih,
  submenuItem: dh
};
function vn(e) {
  return !!e.disabled;
}
function Db({
  items: e,
  orientation: t = "horizontal",
  onClick: r,
  Click: o,
  ariaLabel: s = "Menu",
  className: l
}) {
  const d = Ue(), a = se(null), c = se(null), [_, v] = V(null), u = se(0), D = se(null), k = q(
    (h) => {
      const g = { text: h.text, value: h.value, path: h.path };
      (r ?? o)?.(g);
    },
    [r, o]
  ), O = (h, g) => {
    if (!vn(h)) {
      if (h.children && h.children.length > 0) {
        const m = _ === g, N = Date.now() - u.current < 600;
        if (m && N) {
          u.current = 0;
          return;
        }
        v((p) => p === g ? null : g);
        return;
      }
      k(h), v(null);
    }
  }, S = (h) => {
    vn(h) || h.children && h.children.length > 0 || (k(h), v(null));
  };
  Ne(() => {
    if (_ == null) return;
    const h = (g) => {
      a.current && !a.current.contains(g.target) && v(null);
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, [_]), Ne(() => {
    if (D.current != null && _ === D.current) {
      const h = `${d}-submenu-${_}`;
      document.getElementById(h)?.querySelector('[role="menuitem"]:not([aria-disabled="true"])')?.focus(), D.current = null;
    }
  }, [_, d]);
  const b = (h) => {
    const g = c.current;
    if (!g) return;
    const m = Array.from(
      g.querySelectorAll('[data-top="true"]')
    ).filter((y) => !y.hasAttribute("disabled") && y.getAttribute("aria-disabled") !== "true");
    if (_ != null) {
      const y = `${d}-submenu-${_}`, i = document.getElementById(y);
      if (i) {
        const $ = Array.from(i.querySelectorAll('[role="menuitem"]')).filter(
          (R) => R.getAttribute("aria-disabled") !== "true"
        ), C = document.activeElement, U = C ? $.indexOf(C) : -1;
        if (h.key === "ArrowDown") {
          h.preventDefault(), U === -1 ? $[0]?.focus() : $[(U + 1) % $.length]?.focus();
          return;
        }
        if (h.key === "ArrowUp") {
          h.preventDefault(), U === -1 ? $[$.length - 1]?.focus() : $[(U - 1 + $.length) % $.length]?.focus();
          return;
        }
        if (h.key === "Escape") {
          h.preventDefault(), v(null), g.querySelector(`[data-top="true"][data-index="${_}"]`)?.focus();
          return;
        }
        if (h.key === "Enter" || h.key === " ")
          return;
      }
      if (h.key === "Escape") {
        h.preventDefault(), v(null);
        return;
      }
    }
    const N = document.activeElement, p = N ? m.indexOf(N) : -1;
    if (h.key === "ArrowRight" || t === "vertical" && h.key === "ArrowDown") {
      if (h.preventDefault(), m.length === 0) return;
      const y = p === -1 ? 0 : (p + 1) % m.length;
      m[y]?.focus();
      return;
    }
    if (h.key === "ArrowLeft" || t === "vertical" && h.key === "ArrowUp") {
      if (h.preventDefault(), m.length === 0) return;
      const y = p === -1 ? m.length - 1 : (p - 1 + m.length) % m.length;
      m[y]?.focus();
      return;
    }
    if (h.key === "ArrowDown") {
      if (p >= 0) {
        const y = N?.getAttribute("data-index"), i = y != null ? Number(y) : -1, $ = i >= 0 ? e[i] : void 0;
        $?.children && $.children.length > 0 && !vn($) && (h.preventDefault(), D.current = i, v(i));
      }
      return;
    }
    if (h.key === "Home") {
      h.preventDefault(), m[0]?.focus();
      return;
    }
    if (h.key === "End") {
      h.preventDefault(), m[m.length - 1]?.focus();
      return;
    }
  };
  return /* @__PURE__ */ n(
    "nav",
    {
      ref: a,
      "aria-label": s,
      className: [at.root, at[t], l].filter(Boolean).join(" "),
      children: /* @__PURE__ */ n(
        "div",
        {
          ref: c,
          role: "menubar",
          "aria-label": s,
          className: at.menubar,
          onKeyDown: b,
          children: e.map((h, g) => {
            const m = !!h.children && h.children.length > 0, N = _ === g, p = vn(h), y = `${d}-submenu-${g}`;
            return /* @__PURE__ */ w(
              "div",
              {
                className: at.itemWrapper,
                onMouseEnter: () => {
                  t === "horizontal" && m && !p && (u.current = Date.now(), v(g));
                },
                onMouseLeave: () => {
                  t === "horizontal" && m && v((i) => i === g ? null : i);
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
                      "aria-current": (h.path && !m, void 0),
                      tabIndex: p ? -1 : 0,
                      disabled: p,
                      className: [at.item, p ? at.disabled : null, m ? at.hasChildren : null].filter(Boolean).join(" "),
                      onClick: () => O(h, g),
                      children: [
                        h.icon ? /* @__PURE__ */ n("span", { className: at.icon, "aria-hidden": "true", children: h.icon }) : null,
                        /* @__PURE__ */ n("span", { className: at.text, children: h.text }),
                        m ? /* @__PURE__ */ n("span", { className: at.caret, "aria-hidden": "true", children: "▾" }) : null
                      ]
                    }
                  ),
                  m && N ? /* @__PURE__ */ n(
                    "div",
                    {
                      id: y,
                      role: "menu",
                      className: at.submenu,
                      "data-dt-menu-submenu": "",
                      "aria-label": h.text,
                      children: h.children?.map((i, $) => {
                        const C = vn(i), U = !!i.children && i.children.length > 0;
                        return /* @__PURE__ */ w(
                          "button",
                          {
                            type: "button",
                            role: "menuitem",
                            "aria-disabled": C || void 0,
                            "aria-haspopup": U ? "menu" : void 0,
                            tabIndex: C ? -1 : 0,
                            disabled: C,
                            className: [at.submenuItem, C ? at.disabled : null].filter(Boolean).join(" "),
                            onClick: () => S(i),
                            children: [
                              i.icon ? /* @__PURE__ */ n("span", { className: at.icon, "aria-hidden": "true", children: i.icon }) : null,
                              /* @__PURE__ */ n("span", { className: at.text, children: i.text })
                            ]
                          },
                          `${i.text}-${$}`
                        );
                      })
                    }
                  ) : null
                ]
              },
              `${h.text}-${g}`
            );
          })
        }
      )
    }
  );
}
const uh = "_root_f3qrl_1", fh = "_list_f3qrl_9", _h = "_item_f3qrl_14", ph = "_trigger_f3qrl_18", hh = "_disabled_f3qrl_44", mh = "_expanded_f3qrl_51", gh = "_icon_f3qrl_55", bh = "_text_f3qrl_66", yh = "_caret_f3qrl_73", vh = "_open_f3qrl_80", xh = "_submenu_f3qrl_84", wh = "_submenuItem_f3qrl_93", kh = "_nestedWrapper_f3qrl_122", $h = "_nestedTrigger_f3qrl_127", Nh = "_nestedMenu_f3qrl_152", Sh = "_iconOnly_f3qrl_160", Me = {
  root: uh,
  list: fh,
  item: _h,
  trigger: ph,
  disabled: hh,
  expanded: mh,
  icon: gh,
  text: bh,
  caret: yh,
  open: vh,
  submenu: xh,
  submenuItem: wh,
  nestedWrapper: kh,
  nestedTrigger: $h,
  nestedMenu: Nh,
  iconOnly: Sh
};
function Dh({
  item: e,
  baseId: t,
  parentKey: r,
  onEmit: o
}) {
  const s = !!e.children && e.children.length > 0, [l, d] = V(!1), a = `${t}-nested-${r}`, c = !!e.disabled, _ = () => {
    if (!c) {
      if (s) {
        d((u) => !u);
        return;
      }
      o({ text: e.text, value: e.value, path: e.path });
    }
  }, v = (u) => {
    u.key === "Enter" || u.key === " " ? (u.preventDefault(), _()) : u.key === "Escape" && l && (u.preventDefault(), d(!1));
  };
  return s ? /* @__PURE__ */ w("div", { className: Me.nestedWrapper, children: [
    /* @__PURE__ */ w(
      "button",
      {
        type: "button",
        "aria-expanded": l,
        "aria-controls": a,
        "aria-disabled": c || void 0,
        disabled: c,
        tabIndex: c ? -1 : 0,
        className: [Me.nestedTrigger, c ? Me.disabled : null].filter(Boolean).join(" "),
        onClick: _,
        onKeyDown: v,
        children: [
          e.icon ? /* @__PURE__ */ n("span", { className: Me.icon, "aria-hidden": "true", children: e.icon }) : null,
          /* @__PURE__ */ n("span", { className: Me.text, children: e.text }),
          /* @__PURE__ */ n("span", { className: [Me.caret, l ? Me.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" })
        ]
      }
    ),
    l ? /* @__PURE__ */ n("div", { id: a, role: "menu", className: Me.nestedMenu, children: e.children?.map((u, D) => {
      const k = !!u.disabled;
      return /* @__PURE__ */ w(
        "div",
        {
          role: "menuitem",
          "aria-disabled": k || void 0,
          tabIndex: k ? -1 : 0,
          className: [Me.submenuItem, k ? Me.disabled : null].filter(Boolean).join(" "),
          onClick: () => {
            k || u.children && u.children.length > 0 || o({ text: u.text, value: u.value, path: u.path });
          },
          onKeyDown: (O) => {
            if (O.key === "Enter" || O.key === " ") {
              if (O.preventDefault(), k) return;
              o({ text: u.text, value: u.value, path: u.path });
            }
          },
          children: [
            u.icon ? /* @__PURE__ */ n("span", { className: Me.icon, "aria-hidden": "true", children: u.icon }) : null,
            /* @__PURE__ */ n("span", { className: Me.text, children: u.text })
          ]
        },
        `${u.text}-${D}`
      );
    }) }) : null
  ] }) : /* @__PURE__ */ w(
    "div",
    {
      role: "menuitem",
      "aria-disabled": c || void 0,
      tabIndex: c ? -1 : 0,
      className: [Me.submenuItem, c ? Me.disabled : null].filter(Boolean).join(" "),
      onClick: () => {
        c || o({ text: e.text, value: e.value, path: e.path });
      },
      onKeyDown: (u) => {
        if (u.key === "Enter" || u.key === " ") {
          if (u.preventDefault(), c) return;
          o({ text: e.text, value: e.value, path: e.path });
        }
      },
      children: [
        e.icon ? /* @__PURE__ */ n("span", { className: Me.icon, "aria-hidden": "true", children: e.icon }) : null,
        /* @__PURE__ */ n("span", { className: Me.text, children: e.text })
      ]
    }
  );
}
function zb({
  items: e,
  multiple: t,
  Multiple: r,
  showArrow: o,
  ShowArrow: s,
  displayStyle: l,
  DisplayStyle: d,
  onClick: a,
  Click: c,
  ariaLabel: _ = "Panel menu",
  className: v
}) {
  const u = Ue(), D = t ?? r ?? !1, k = o ?? s ?? !0, O = l ?? d ?? "iconAndText", [S, b] = V([]), h = q(
    (N) => {
      const p = { text: N.text, value: N.value, path: N.path };
      (a ?? c)?.(p);
    },
    [a, c]
  ), g = (N, p, y) => {
    if (!y.disabled) {
      if (p) {
        b((i) => i.includes(N) ? i.filter((C) => C !== N) : D ? [...i, N] : [N]);
        return;
      }
      h(y);
    }
  }, m = (N) => {
    const p = N.target;
    if (!(N.key === "Enter" || N.key === " ")) {
      if (N.key === "Escape") {
        const y = p.getAttribute("aria-controls");
        if (y) {
          const i = y.match(/-panel-(\d+)$/);
          if (i) {
            const $ = Number(i[1]);
            b((C) => C.filter((U) => U !== $));
          }
        } else {
          const i = p.closest('[role="menu"]');
          if (i) {
            const C = i.id.match(/-panel-(\d+)$/);
            if (C) {
              const U = Number(C[1]);
              b((M) => M.filter((f) => f !== U)), document.getElementById(`${u}-trigger-${U}`)?.focus();
            }
          }
        }
        N.preventDefault();
        return;
      }
      if (N.key === "ArrowDown" || N.key === "ArrowUp") {
        const y = Array.from(
          N.currentTarget.querySelectorAll('button, [role="menuitem"]')
        ).filter((U) => !U.hasAttribute("disabled") && U.getAttribute("aria-disabled") !== "true"), i = y.indexOf(p);
        if (i === -1) return;
        N.preventDefault();
        const $ = N.key === "ArrowDown" ? 1 : -1;
        y[(i + $ + y.length) % y.length]?.focus();
      }
    }
  };
  return /* @__PURE__ */ n(
    "nav",
    {
      "aria-label": _,
      className: [
        Me.root,
        O === "icon" ? Me.iconOnly : Me.iconAndText,
        v
      ].filter(Boolean).join(" "),
      onKeyDown: m,
      children: /* @__PURE__ */ n("div", { className: Me.list, role: "presentation", children: e.map((N, p) => {
        const y = !!N.children && N.children.length > 0, i = S.includes(p), $ = !!N.disabled, C = `${u}-panel-${p}`, U = `${u}-trigger-${p}`;
        return /* @__PURE__ */ w("div", { className: Me.item, children: [
          /* @__PURE__ */ w(
            "button",
            {
              type: "button",
              id: U,
              "aria-expanded": y ? i : void 0,
              "aria-controls": y ? C : void 0,
              "aria-disabled": $ || void 0,
              disabled: $,
              tabIndex: $ ? -1 : 0,
              className: [
                Me.trigger,
                $ ? Me.disabled : null,
                i ? Me.expanded : null
              ].filter(Boolean).join(" "),
              onClick: () => g(p, y, N),
              children: [
                N.icon ? /* @__PURE__ */ n("span", { className: Me.icon, "aria-hidden": "true", children: N.icon }) : null,
                O === "iconAndText" ? /* @__PURE__ */ n("span", { className: Me.text, children: N.text }) : /* @__PURE__ */ n("span", { className: Me.text, "aria-label": N.text, children: N.icon ? null : N.text.slice(0, 1) }),
                y && k ? /* @__PURE__ */ n("span", { className: [Me.caret, i ? Me.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" }) : null
              ]
            }
          ),
          y && i ? /* @__PURE__ */ n("div", { id: C, role: "menu", className: Me.submenu, "aria-labelledby": U, children: N.children?.map((R, M) => /* @__PURE__ */ n(
            Dh,
            {
              item: R,
              baseId: u,
              parentKey: `${p}-${M}`,
              onEmit: h
            },
            `${R.text}-${M}`
          )) }) : null
        ] }, `${N.text}-${p}`);
      }) })
    }
  );
}
const zh = "_root_10qer_1", Ch = "_trigger_10qer_7", Oh = "_defaultTrigger_10qer_40", Mh = "_avatar_10qer_46", Ih = "_menu_10qer_58", jh = "_item_10qer_74", Th = "_disabled_10qer_88", Eh = "_active_10qer_97", Ah = "_icon_10qer_107", Lh = "_text_10qer_114", Dt = {
  root: zh,
  trigger: Ch,
  defaultTrigger: Oh,
  avatar: Mh,
  menu: Ih,
  item: jh,
  disabled: Th,
  active: Eh,
  icon: Ah,
  text: Lh
};
function Cb({
  items: e,
  trigger: t,
  Template: r,
  onClick: o,
  Click: s,
  ariaLabel: l = "Profile menu",
  className: d
}) {
  const a = Ue(), c = `${a}-menu`, _ = se(null), v = se(null), [u, D] = V(!1), [k, O] = V(-1), S = t ?? r, b = e.map((i, $) => i.disabled ? -1 : $).filter((i) => i >= 0), h = q(
    (i) => {
      if (i.disabled) return;
      const $ = { text: i.text, path: i.path };
      (o ?? s)?.($), D(!1), v.current?.focus();
    },
    [o, s]
  ), g = q(() => {
    O(b[0] ?? -1), D(!0);
  }, [b]), m = q(() => {
    D(!1), O(-1), v.current?.focus();
  }, []);
  Ne(() => {
    if (!u) return;
    const i = ($) => {
      _.current && !_.current.contains($.target) && (D(!1), O(-1));
    };
    return document.addEventListener("mousedown", i), () => document.removeEventListener("mousedown", i);
  }, [u]), Ne(() => {
    if (!u) return;
    const i = ($) => {
      $.key === "Escape" && ($.preventDefault(), m());
    };
    return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
  }, [u, m]);
  const N = (i) => {
    if (b.length === 0) return;
    const $ = b.indexOf(k), C = $ === -1 ? 0 : ($ + i + b.length) % b.length, U = b[C];
    U != null && O(U);
  }, p = (i) => {
    if (!u) {
      (i.key === "ArrowDown" || i.key === "Enter" || i.key === " ") && (i.preventDefault(), g());
      return;
    }
    switch (i.key) {
      case "Escape":
        i.preventDefault(), m();
        break;
      case "ArrowDown":
        i.preventDefault(), N(1);
        break;
      case "ArrowUp":
        i.preventDefault(), N(-1);
        break;
      case "Home":
        i.preventDefault(), b[0] != null && O(b[0]);
        break;
      case "End":
        i.preventDefault(), b[b.length - 1] != null && O(b[b.length - 1]);
        break;
      case "Enter":
      case " ":
        if (i.preventDefault(), k >= 0) {
          const $ = e[k];
          $ && !$.disabled && h($);
        }
        break;
      case "Tab":
        D(!1), O(-1);
        break;
    }
  }, y = (i) => {
    switch (i.key) {
      case "ArrowDown":
        i.preventDefault(), N(1);
        break;
      case "ArrowUp":
        i.preventDefault(), N(-1);
        break;
      case "Home":
        i.preventDefault(), b[0] != null && O(b[0]);
        break;
      case "End":
        i.preventDefault(), b[b.length - 1] != null && O(b[b.length - 1]);
        break;
      case "Enter":
      case " ":
        if (i.preventDefault(), k >= 0) {
          const $ = e[k];
          $ && !$.disabled && h($);
        }
        break;
      case "Escape":
        i.preventDefault(), m();
        break;
      case "Tab":
        D(!1), O(-1);
        break;
    }
  };
  return /* @__PURE__ */ n(
    "div",
    {
      ref: _,
      className: [Dt.root, d].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ w("nav", { "aria-label": l, children: [
        /* @__PURE__ */ n(
          "button",
          {
            ref: v,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": u,
            "aria-controls": c,
            "aria-label": l,
            className: Dt.trigger,
            onClick: () => u ? m() : g(),
            onKeyDown: p,
            children: S ?? /* @__PURE__ */ w("span", { className: Dt.defaultTrigger, children: [
              /* @__PURE__ */ n("span", { className: Dt.avatar, "aria-hidden": "true", children: "●" }),
              /* @__PURE__ */ n("span", { children: "Profile" })
            ] })
          }
        ),
        u ? /* @__PURE__ */ n(
          "div",
          {
            id: c,
            role: "menu",
            "aria-label": l,
            "aria-activedescendant": k >= 0 ? `${a}-item-${k}` : void 0,
            className: Dt.menu,
            onKeyDown: y,
            tabIndex: -1,
            children: e.map((i, $) => {
              const C = !!i.disabled, U = $ === k;
              return /* @__PURE__ */ w(
                "div",
                {
                  id: `${a}-item-${$}`,
                  role: "menuitem",
                  "aria-disabled": C || void 0,
                  tabIndex: C ? -1 : 0,
                  className: [Dt.item, U ? Dt.active : null, C ? Dt.disabled : null].filter(Boolean).join(" "),
                  onClick: () => {
                    C || h(i);
                  },
                  onMouseEnter: () => {
                    C || O($);
                  },
                  children: [
                    i.icon ? /* @__PURE__ */ n("span", { className: Dt.icon, "aria-hidden": "true", children: i.icon }) : null,
                    /* @__PURE__ */ n("span", { className: Dt.text, children: i.text })
                  ]
                },
                `${i.text}-${$}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const Rh = "_root_yzi70_1", Bh = "_bottomRight_yzi70_11", Ph = "_bottomLeft_yzi70_16", qh = "_topRight_yzi70_21", Fh = "_topLeft_yzi70_26", Kh = "_menu_yzi70_31", Hh = "_itemWrapper_yzi70_48", Wh = "_tooltip_yzi70_54", Uh = "_main_yzi70_76", Vh = "_mainIcon_yzi70_104", Xh = "_mainOpen_yzi70_109", Gh = "_item_yzi70_48", Yh = "_disabled_yzi70_141", Zh = "_itemIcon_yzi70_148", it = {
  root: Rh,
  bottomRight: Bh,
  bottomLeft: Ph,
  topRight: qh,
  topLeft: Fh,
  menu: Kh,
  itemWrapper: Hh,
  tooltip: Wh,
  main: Uh,
  mainIcon: Vh,
  mainOpen: Xh,
  item: Gh,
  disabled: Yh,
  itemIcon: Zh
};
function Ob({
  items: e,
  position: t,
  Position: r,
  icon: o = "+",
  onClick: s,
  Click: l,
  ariaLabel: d = "Open menu",
  className: a
}) {
  const c = t ?? r ?? "bottom-right", v = `${Ue()}-menu`, u = se(null), D = se(null), [k, O] = V(!1), S = q(
    (m) => {
      if (m.disabled) return;
      const N = { text: m.text, value: m.value };
      (s ?? l)?.(N), O(!1), D.current?.focus();
    },
    [s, l]
  );
  Ne(() => {
    if (!k) return;
    const m = (N) => {
      u.current && !u.current.contains(N.target) && O(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [k]), Ne(() => {
    if (!k) return;
    const m = (N) => {
      N.key === "Escape" && (O(!1), D.current?.focus());
    };
    return document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m);
  }, [k]);
  const b = c === "bottom-right" ? it.bottomRight : c === "bottom-left" ? it.bottomLeft : c === "top-right" ? it.topRight : it.topLeft, h = (m) => {
    !k && (m.key === "Enter" || m.key === " " || m.key === "ArrowDown" || m.key === "ArrowUp") ? (m.preventDefault(), O(!0)) : k && m.key === "Escape" && (m.preventDefault(), O(!1));
  }, g = (m) => {
    m.key === "Escape" && (m.preventDefault(), O(!1), D.current?.focus());
  };
  return /* @__PURE__ */ w(
    "div",
    {
      ref: u,
      className: [it.root, b, a].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        k ? /* @__PURE__ */ n(
          "div",
          {
            id: v,
            role: "menu",
            "aria-label": d,
            className: it.menu,
            onKeyDown: g,
            children: e.map((m, N) => {
              const p = !!m.disabled;
              return /* @__PURE__ */ w("div", { className: it.itemWrapper, children: [
                /* @__PURE__ */ n("span", { className: it.tooltip, "aria-hidden": "true", children: m.text }),
                /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": m.text,
                    "aria-disabled": p || void 0,
                    title: m.text,
                    disabled: p,
                    tabIndex: p ? -1 : 0,
                    className: [it.item, p ? it.disabled : null].filter(Boolean).join(" "),
                    onClick: () => S(m),
                    children: /* @__PURE__ */ n("span", { className: it.itemIcon, "aria-hidden": "true", children: m.icon ?? "•" })
                  }
                )
              ] }, `${m.text}-${N}`);
            })
          }
        ) : null,
        /* @__PURE__ */ n(
          "button",
          {
            ref: D,
            type: "button",
            className: it.main,
            "aria-haspopup": "menu",
            "aria-expanded": k,
            "aria-controls": v,
            "aria-label": d,
            onClick: () => O((m) => !m),
            onKeyDown: h,
            children: /* @__PURE__ */ n("span", { "aria-hidden": "true", className: [it.mainIcon, k ? it.mainOpen : null].filter(Boolean).join(" "), children: o })
          }
        )
      ]
    }
  );
}
const Jh = "_root_18w60_1", Qh = "_list_18w60_5", em = "_item_18w60_15", tm = "_link_18w60_22", nm = "_linkButton_18w60_23", rm = "_current_18w60_24", om = "_disabled_18w60_68", sm = "_icon_18w60_74", am = "_text_18w60_81", lm = "_separator_18w60_85", Ke = {
  root: Jh,
  list: Qh,
  item: em,
  link: tm,
  linkButton: nm,
  current: rm,
  disabled: om,
  icon: sm,
  text: am,
  separator: lm
};
function Mb({ items: e, onClick: t, Click: r, ariaLabel: o = "Breadcrumb", className: s }) {
  const l = t ?? r, d = (a) => {
    a.disabled || l?.({ text: a.text, path: a.path });
  };
  return /* @__PURE__ */ n("nav", { "aria-label": o, className: [Ke.root, s].filter(Boolean).join(" "), children: /* @__PURE__ */ n("ol", { className: Ke.list, children: e.map((a, c) => {
    const _ = c === e.length - 1, v = !!a.disabled;
    return /* @__PURE__ */ w("li", { className: Ke.item, children: [
      _ ? v ? /* @__PURE__ */ w(
        "span",
        {
          className: [Ke.current, Ke.disabled].filter(Boolean).join(" "),
          "aria-current": "page",
          "aria-disabled": "true",
          tabIndex: -1,
          children: [
            a.icon ? /* @__PURE__ */ n("span", { className: Ke.icon, "aria-hidden": "true", children: a.icon }) : null,
            a.text
          ]
        }
      ) : a.path ? /* @__PURE__ */ w(
        "a",
        {
          href: a.path,
          className: Ke.link,
          "aria-current": "page",
          onClick: (u) => {
            u.preventDefault(), d(a);
          },
          children: [
            a.icon ? /* @__PURE__ */ n("span", { className: Ke.icon, "aria-hidden": "true", children: a.icon }) : null,
            /* @__PURE__ */ n("span", { className: Ke.text, children: a.text })
          ]
        }
      ) : /* @__PURE__ */ w(
        "span",
        {
          className: Ke.current,
          "aria-current": "page",
          tabIndex: 0,
          children: [
            a.icon ? /* @__PURE__ */ n("span", { className: Ke.icon, "aria-hidden": "true", children: a.icon }) : null,
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
            a.icon ? /* @__PURE__ */ n("span", { className: Ke.icon, "aria-hidden": "true", children: a.icon }) : null,
            /* @__PURE__ */ n("span", { className: Ke.text, children: a.text })
          ]
        }
      ) : a.path ? /* @__PURE__ */ w(
        "a",
        {
          href: a.path,
          className: Ke.link,
          onClick: (u) => {
            u.preventDefault(), d(a);
          },
          children: [
            a.icon ? /* @__PURE__ */ n("span", { className: Ke.icon, "aria-hidden": "true", children: a.icon }) : null,
            /* @__PURE__ */ n("span", { className: Ke.text, children: a.text })
          ]
        }
      ) : /* @__PURE__ */ w(
        "button",
        {
          type: "button",
          className: Ke.linkButton,
          tabIndex: 0,
          onClick: () => d(a),
          children: [
            a.icon ? /* @__PURE__ */ n("span", { className: Ke.icon, "aria-hidden": "true", children: a.icon }) : null,
            /* @__PURE__ */ n("span", { className: Ke.text, children: a.text })
          ]
        }
      ),
      _ ? null : /* @__PURE__ */ n("span", { className: Ke.separator, "aria-hidden": "true", children: "/" })
    ] }, `${a.text}-${c}`);
  }) }) });
}
const cm = "_root_13ac5_1", im = "_list_13ac5_5", dm = "_item_13ac5_15", um = "_connector_13ac5_21", fm = "_connectorCompleted_13ac5_30", _m = "_step_13ac5_34", pm = "_active_13ac5_69", hm = "_completed_13ac5_75", mm = "_circle_13ac5_79", gm = "_check_13ac5_109", bm = "_icon_13ac5_114", ym = "_number_13ac5_119", vm = "_text_13ac5_124", dt = {
  root: cm,
  list: im,
  item: dm,
  connector: um,
  connectorCompleted: fm,
  step: _m,
  active: pm,
  completed: hm,
  circle: mm,
  check: gm,
  icon: bm,
  number: ym,
  text: vm
};
function Ib({
  items: e,
  selectedIndex: t,
  SelectedIndex: r,
  defaultIndex: o = 0,
  linear: s,
  Linear: l,
  onChange: d,
  Change: a,
  onSelectedIndexChange: c,
  ariaLabel: _ = "Steps",
  className: v
}) {
  const u = s ?? l ?? !1, D = t ?? r, k = D !== void 0, [O, S] = V(() => Math.min(Math.max(0, D ?? o), Math.max(0, e.length - 1))), h = Math.min(Math.max(0, k ? D : O), Math.max(0, e.length - 1)), g = se(null), m = q(
    (y) => {
      const i = Math.min(Math.max(0, y), Math.max(0, e.length - 1));
      k || S(i), (d ?? a ?? c)?.(i);
    },
    [k, d, a, c, e.length]
  ), N = q(
    (y, i) => !!(i.disabled || u && y > h + 1),
    [u, h]
  ), p = (y) => {
    const i = Array.from(
      y.currentTarget.querySelectorAll("button[data-step]")
    ).filter((U) => U.getAttribute("aria-disabled") !== "true" && !U.disabled), $ = document.activeElement, C = $ ? i.indexOf($) : -1;
    if (y.key === "ArrowRight" || y.key === "ArrowDown") {
      if (y.preventDefault(), i.length === 0) return;
      const U = C === -1 ? 0 : (C + 1) % i.length, R = i[U];
      R && R.focus();
    } else if (y.key === "ArrowLeft" || y.key === "ArrowUp") {
      if (y.preventDefault(), i.length === 0) return;
      const U = C === -1 ? i.length - 1 : (C - 1 + i.length) % i.length, R = i[U];
      R && R.focus();
    } else y.key === "Home" ? (y.preventDefault(), i[0]?.focus()) : y.key === "End" && (y.preventDefault(), i[i.length - 1]?.focus());
  };
  return /* @__PURE__ */ n(
    "nav",
    {
      "aria-label": _,
      className: [dt.root, v].filter(Boolean).join(" "),
      onKeyDown: p,
      children: /* @__PURE__ */ n("ol", { ref: g, role: "list", className: dt.list, children: e.map((y, i) => {
        const $ = i === h, C = i < h, U = N(i, y);
        return /* @__PURE__ */ w("li", { role: "listitem", className: dt.item, children: [
          i > 0 ? /* @__PURE__ */ n("span", { className: [dt.connector, C ? dt.connectorCompleted : null].filter(Boolean).join(" "), "aria-hidden": "true" }) : null,
          /* @__PURE__ */ w(
            "button",
            {
              type: "button",
              "data-step": i,
              "aria-current": $ ? "step" : void 0,
              "aria-disabled": U ? "true" : void 0,
              disabled: U,
              tabIndex: U ? -1 : 0,
              className: [
                dt.step,
                $ ? dt.active : null,
                C ? dt.completed : null,
                U ? dt.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => {
                U || m(i);
              },
              children: [
                /* @__PURE__ */ n("span", { className: dt.circle, "aria-hidden": "true", children: C ? /* @__PURE__ */ n("span", { className: dt.check, "aria-hidden": "true", children: "✓" }) : y.icon ? /* @__PURE__ */ n("span", { className: dt.icon, children: y.icon }) : /* @__PURE__ */ n("span", { className: dt.number, children: i + 1 }) }),
                /* @__PURE__ */ n("span", { className: dt.text, children: y.text })
              ]
            }
          )
        ] }, `${y.text}-${i}`);
      }) })
    }
  );
}
const xm = "_root_1mm03_1", wm = "_horizontal_1mm03_13", km = "_vertical_1mm03_17", $m = "_pane_1mm03_21", Nm = "_handle_1mm03_31", Sm = "_handleHorizontal_1mm03_51", Dm = "_handleVertical_1mm03_57", zm = "_handleGrip_1mm03_63", Cm = "_handleCollapseHint_1mm03_75", Om = "_collapseBtn_1mm03_79", Mm = "_collapseBtnCollapsed_1mm03_109", vt = {
  root: xm,
  horizontal: wm,
  vertical: km,
  pane: $m,
  handle: Nm,
  handleHorizontal: Sm,
  handleVertical: Dm,
  handleGrip: zm,
  handleCollapseHint: Cm,
  collapseBtn: Om,
  collapseBtnCollapsed: Mm
};
function xn(e, t) {
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
  const o = parseFloat(r);
  return Number.isNaN(o) ? t : o;
}
function Et(e, t, r) {
  return Math.min(r, Math.max(t, e));
}
function jb({
  orientation: e,
  Orientation: t,
  panes: r,
  onResize: o,
  Resize: s,
  onCollapse: l,
  Collapse: d,
  ariaLabel: a = "Splitter",
  className: c
}) {
  const _ = e ?? t ?? "horizontal", v = _ === "horizontal", u = se(null), D = q(() => {
    const f = r.length;
    if (f === 0) return [];
    const z = r.map((L) => L.size ? xn(L.size, 100 / f) : 100 / f), I = z.reduce((L, E) => L + E, 0);
    return Math.abs(I - 100) > 0.01 && I > 0 ? z.map((L) => L / I * 100) : z;
  }, [r]), [k, O] = V(() => D()), [S, b] = V(() => r.map((f) => !!f.collapsed)), h = se(k);
  Ne(() => {
    b(r.map((f) => !!f.collapsed));
  }, [r]);
  const g = q(() => r.map((f) => xn(f.min, 0)), [r]), m = q(() => r.map((f) => xn(f.max, 100)), [r]), N = q(
    (f, z) => {
      const I = { paneIndex: f, newSize: z, cancel: !1 };
      return (o ?? s)?.(I), !I.cancel;
    },
    [o, s]
  ), p = q(
    (f, z) => {
      const I = { paneIndex: f, collapse: z, cancel: !1 };
      return (l ?? d)?.(I), !I.cancel;
    },
    [l, d]
  ), y = q(
    (f) => {
      const z = !S[f];
      p(f, z) && (z ? (h.current = [...k], b((I) => {
        const L = [...I];
        return L[f] !== void 0 && (L[f] = !0), L;
      }), O((I) => {
        const L = [...I], E = L[f] ?? 0, J = f < L.length - 1 ? f + 1 : f - 1;
        if (J >= 0 && J < L.length) {
          const oe = L[J] ?? 0;
          L[J] = oe + E, L[f] = 0;
        } else
          L[f] = 0;
        return L;
      })) : (b((I) => {
        const L = [...I];
        return L[f] !== void 0 && (L[f] = !1), L;
      }), O(() => {
        const I = [...h.current];
        return I.length !== r.length ? r.map(() => 100 / r.length) : I;
      })));
    },
    [S, k, r.length, p]
  ), i = se(null), $ = q(
    (f, z, I) => {
      const L = u.current;
      if (!L) return null;
      const E = L.getBoundingClientRect();
      let J;
      if (v) {
        if (E.width === 0) return null;
        J = (z - E.left) / E.width * 100;
      } else {
        if (E.height === 0) return null;
        J = (I - E.top) / E.height * 100;
      }
      let oe = 0;
      for (let ne = 0; ne < f; ne++) {
        const ae = k[ne];
        ae !== void 0 && (oe += ae);
      }
      return J - oe;
    },
    [v, k]
  ), C = (f, z) => {
    z.preventDefault();
    const I = z.currentTarget;
    I.focus(), typeof I.setPointerCapture == "function" && I.setPointerCapture(z.pointerId), i.current = { handleIndex: f, pointerId: z.pointerId };
  }, U = (f) => {
    if (!i.current || i.current.pointerId !== f.pointerId) return;
    f.preventDefault();
    const z = i.current.handleIndex, I = $(z, f.clientX, f.clientY);
    if (I == null) return;
    const L = g(), E = m(), J = L[z] ?? 0, oe = E[z] ?? 100, de = z + 1, ne = L[de] ?? 0, ae = E[de] ?? 100, le = k[z] ?? 0, X = k[de] ?? 0, W = le + X;
    if (W <= 0) return;
    let B = Et(I, J, oe), te = W - B;
    if (te < ne) {
      if (te = ne, B = W - te, B < J || B > oe) return;
    } else if (te > ae && (te = ae, B = W - te, B < J || B > oe))
      return;
    B = Et(B, J, oe), te = W - B, N(z, B) && O((he) => {
      const Z = [...he];
      return Z[z] = B, Z[de] = te, Z;
    });
  }, R = (f) => {
    !i.current || i.current.pointerId !== f.pointerId || (i.current = null);
  }, M = (f, z) => {
    const I = g(), L = m(), E = f, J = f + 1, oe = k[E] ?? 0, de = k[J] ?? 0, ne = oe + de;
    let ae = 0;
    const le = !!r[E]?.collapsible, X = !!r[J]?.collapsible;
    if (v ? z.key === "ArrowLeft" ? ae = -5 : z.key === "ArrowRight" && (ae = 5) : z.key === "ArrowUp" ? ae = -5 : z.key === "ArrowDown" && (ae = 5), z.key === "Home") {
      z.preventDefault();
      let W = I[E] ?? 0, B = ne - W;
      if (B = Et(B, I[J] ?? 0, L[J] ?? 100), W = ne - B, W = Et(W, I[E] ?? 0, L[E] ?? 100), !N(E, W)) return;
      O((te) => {
        const he = [...te];
        return he[E] = W, he[J] = B, he;
      });
      return;
    }
    if (z.key === "End") {
      z.preventDefault();
      let W = L[E] ?? 100;
      W = Math.min(W, ne - (I[J] ?? 0));
      let B = ne - W;
      if (B = Et(B, I[J] ?? 0, L[J] ?? 100), W = ne - B, W = Et(W, I[E] ?? 0, L[E] ?? 100), !N(E, W)) return;
      O((te) => {
        const he = [...te];
        return he[E] = W, he[J] = B, he;
      });
      return;
    }
    if ((z.key === "Enter" || z.key === " ") && (le || X)) {
      z.preventDefault(), y(le ? E : J);
      return;
    }
    if (ae !== 0) {
      z.preventDefault();
      let W = oe + ae, B = ne - W;
      const te = I[E] ?? 0, he = L[E] ?? 100, Z = I[J] ?? 0, me = L[J] ?? 100;
      if (W = Et(W, te, he), B = ne - W, (B < Z || B > me) && (B = Et(B, Z, me), W = ne - B, W = Et(W, te, he), B = ne - W), !N(E, W)) return;
      O((ye) => {
        const ze = [...ye];
        return ze[E] = W, ze[J] = B, ze;
      });
    }
  };
  return /* @__PURE__ */ n(
    "div",
    {
      ref: u,
      className: [vt.root, v ? vt.horizontal : vt.vertical, c].filter(Boolean).join(" "),
      "aria-label": a,
      children: r.map((f, z) => {
        const I = !!S[z], L = I ? 0 : k[z] ?? 100 / r.length, E = I ? { display: "none" } : v ? { flexBasis: `${L}%`, flexGrow: 0, flexShrink: 0, overflow: "auto" } : { flexBasis: `${L}%`, flexGrow: 0, flexShrink: 0, overflow: "auto" }, J = xn(f.min, 0), oe = xn(f.max, 100), de = z < r.length - 1, ne = !!r[z + 1]?.collapsible;
        return /* @__PURE__ */ w("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ w(
            "div",
            {
              role: "group",
              "aria-label": f.label ?? `Pane ${z + 1}`,
              className: vt.pane,
              style: E,
              "data-collapsed": I ? "true" : void 0,
              children: [
                I ? null : f.children,
                f.collapsible && !I ? /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    className: vt.collapseBtn,
                    "aria-label": `Collapse pane ${z + 1}`,
                    "aria-expanded": !I,
                    onClick: () => y(z),
                    children: v ? "◀" : "▲"
                  }
                ) : null,
                f.collapsible && I ? /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    className: vt.collapseBtn,
                    "aria-label": `Expand pane ${z + 1}`,
                    "aria-expanded": !I,
                    onClick: () => y(z),
                    children: v ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          I && f.collapsible ? (
            // when collapsed we already rendered expand button inside pane, but pane is display none, so render expand button outside?
            // Actually we hide pane with display none, need visible expand button
            // So render alternative expand button adjacent
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: vt.collapseBtnCollapsed,
                "aria-label": `Expand pane ${z + 1}`,
                "aria-expanded": "false",
                onClick: () => y(z),
                children: v ? "▶" : "▼"
              }
            )
          ) : null,
          de ? /* @__PURE__ */ w(
            "div",
            {
              role: "separator",
              "aria-orientation": _,
              "aria-valuemin": J,
              "aria-valuemax": oe,
              "aria-valuenow": Math.round(L),
              "aria-label": `Resize handle ${z + 1}`,
              tabIndex: I || S[z + 1] ? -1 : 0,
              className: [vt.handle, v ? vt.handleHorizontal : vt.handleVertical].filter(Boolean).join(" "),
              onPointerDown: (ae) => C(z, ae),
              onPointerMove: U,
              onPointerUp: R,
              onKeyDown: (ae) => M(z, ae),
              children: [
                /* @__PURE__ */ n("span", { className: vt.handleGrip, "aria-hidden": "true" }),
                (f.collapsible || ne) && /* @__PURE__ */ n("span", { className: vt.handleCollapseHint, "aria-hidden": "true" })
              ]
            }
          ) : null
        ] }, z);
      })
    }
  );
}
const Im = "_root_10e1i_1", jm = "_list_10e1i_5", Tm = "_vertical_10e1i_14", Em = "_horizontal_10e1i_20", Am = "_item_10e1i_28", Lm = "_link_10e1i_32", Rm = "_active_10e1i_57", nn = {
  root: Im,
  list: jm,
  vertical: Tm,
  horizontal: Em,
  item: Am,
  link: Lm,
  active: Rm
};
function Tb({
  items: e,
  selector: t,
  Selector: r,
  orientation: o,
  Orientation: s,
  onClick: l,
  Click: d,
  ariaLabel: a = "Table of contents",
  className: c
}) {
  const _ = t ?? r, v = o ?? s ?? "vertical", [u, D] = V(() => e[0]?.selector ?? null), k = se(u);
  k.current = u;
  const O = q(
    (S, b) => {
      if (D(S.selector), (l ?? d)?.({ text: S.text, selector: S.selector }), b) {
        try {
          b.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch {
          b.scrollIntoView();
        }
        const g = b;
        g.getAttribute("tabindex") == null && g.tabIndex === -1 || g.tabIndex < 0 ? (g.getAttribute("tabindex"), g.setAttribute("tabindex", "-1"), g.focus({ preventScroll: !0 })) : g.focus({ preventScroll: !0 });
      }
    },
    [l, d]
  );
  return Ne(() => {
    if (e.length === 0) return;
    const b = (() => {
      if (_) {
        const p = document.querySelector(_);
        if (p) return p;
      }
      return window;
    })();
    let h = null;
    const g = /* @__PURE__ */ new Map(), m = () => {
      let p = null, y = null;
      for (const $ of e) {
        const C = document.querySelector($.selector);
        if (!C) continue;
        g.set($.selector, C);
        const U = C.getBoundingClientRect();
        let R = U.top;
        if (b !== window) {
          const M = b.getBoundingClientRect();
          R = U.top - M.top;
        }
        R <= 80 ? (!y || R > y.el.getBoundingClientRect().top - (b !== window ? b.getBoundingClientRect().top : 0)) && (y = { sel: $.selector, el: C }) : (!p || R < p.top) && (p = { sel: $.selector, top: R });
      }
      const i = y?.sel ?? p?.sel ?? e[0]?.selector ?? null;
      i && i !== k.current && D(i);
    }, N = () => {
      m();
    };
    if (typeof IntersectionObserver < "u") {
      const p = b === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : { root: b, rootMargin: "-20% 0px -70% 0px", threshold: 0 };
      h = new IntersectionObserver((y) => {
        const i = y.filter(($) => $.isIntersecting).sort(($, C) => $.boundingClientRect.top - C.boundingClientRect.top);
        if (i[0]) {
          const $ = i[0].target;
          for (const C of e) {
            if (document.querySelector(C.selector) === $) {
              D(C.selector);
              break;
            }
            if (C.selector.startsWith("#") && $.id === C.selector.slice(1)) {
              D(C.selector);
              break;
            }
          }
        } else
          m();
      }, p);
      for (const y of e) {
        const i = document.querySelector(y.selector);
        i && (h.observe(i), g.set(y.selector, i));
      }
    }
    return b === window ? (window.addEventListener("scroll", N, { passive: !0 }), m(), () => {
      window.removeEventListener("scroll", N), h?.disconnect();
    }) : (b.addEventListener("scroll", N, { passive: !0 }), m(), () => {
      b.removeEventListener("scroll", N), h?.disconnect();
    });
  }, [e, _]), /* @__PURE__ */ n("nav", { "aria-label": a, className: [nn.root, nn[v], c].filter(Boolean).join(" "), children: /* @__PURE__ */ n("ol", { className: nn.list, children: e.map((S) => {
    const b = S.selector === u;
    return /* @__PURE__ */ n("li", { className: nn.item, children: /* @__PURE__ */ n(
      "a",
      {
        href: S.selector.startsWith("#") || S.selector.startsWith(".") ? S.selector : `#${S.selector}`,
        className: [nn.link, b ? nn.active : null].filter(Boolean).join(" "),
        "aria-current": b ? "location" : void 0,
        onClick: (h) => {
          h.preventDefault();
          const g = document.querySelector(S.selector);
          O(S, g);
        },
        children: S.text
      }
    ) }, `${S.text}-${S.selector}`);
  }) }) });
}
const Bm = "_root_7t0e2_1", Pm = "_viewport_7t0e2_17", qm = "_slide_7t0e2_24", Fm = "_active_7t0e2_33", Km = "_arrow_7t0e2_37", Hm = "_prev_7t0e2_71", Wm = "_next_7t0e2_75", Um = "_pauseBtn_7t0e2_79", Vm = "_indicators_7t0e2_110", Xm = "_indicator_7t0e2_110", Gm = "_indicatorActive_7t0e2_145", xt = {
  root: Bm,
  viewport: Pm,
  slide: qm,
  active: Fm,
  arrow: Km,
  prev: Hm,
  next: Wm,
  pauseBtn: Um,
  indicators: Vm,
  indicator: Xm,
  indicatorActive: Gm
};
function Eb({
  items: e,
  selectedIndex: t,
  SelectedIndex: r,
  defaultIndex: o = 0,
  auto: s,
  Auto: l,
  interval: d,
  Interval: a,
  pauseOnHover: c,
  PauseOnHover: _,
  showArrows: v,
  ShowArrows: u,
  showIndicators: D,
  ShowIndicators: k,
  onChange: O,
  Change: S,
  ariaLabel: b = "Carousel",
  className: h
}) {
  const g = t ?? r, m = g !== void 0, [N, p] = V(() => Math.min(Math.max(0, g ?? o), Math.max(0, e.length - 1))), y = m ? g : N, i = e.length === 0 ? 0 : Math.min(Math.max(0, y), e.length - 1), $ = s ?? l ?? !1, C = d ?? a ?? 3e3, U = c ?? _ ?? !0, R = v ?? u ?? !0, M = D ?? k ?? !0, [f, z] = V(!1), [I, L] = V(!1), E = f || I, J = se(null), oe = Ue(), de = q(
    (Z) => {
      const me = e.length === 0 ? 0 : (Z % e.length + e.length) % e.length;
      m || p(me), (O ?? S)?.(me);
    },
    [m, O, S, e.length]
  ), ne = q(() => {
    de(i - 1);
  }, [de, i]), ae = q(() => {
    de(i + 1);
  }, [de, i]), le = q(
    (Z) => {
      de(Z);
    },
    [de]
  );
  Ne(() => {
    if (!$ || E || e.length <= 1) return;
    const Z = setInterval(() => {
      de(i + 1);
    }, C);
    return () => clearInterval(Z);
  }, [$, E, C, i, de, e.length]);
  const X = (Z) => {
    e.length !== 0 && (Z.key === "ArrowLeft" ? (Z.preventDefault(), ne()) : Z.key === "ArrowRight" ? (Z.preventDefault(), ae()) : Z.key === "Home" ? (Z.preventDefault(), le(0)) : Z.key === "End" && (Z.preventDefault(), le(e.length - 1)));
  }, W = () => {
    U && $ && L(!0);
  }, B = () => {
    U && $ && L(!1);
  }, te = () => {
    U && $ && L(!0);
  }, he = () => {
    U && $ && L(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ w(
    "div",
    {
      ref: J,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": b,
      tabIndex: 0,
      className: [xt.root, h].filter(Boolean).join(" "),
      onKeyDown: X,
      onMouseEnter: W,
      onMouseLeave: B,
      onFocusCapture: te,
      onBlurCapture: he,
      children: [
        /* @__PURE__ */ n("div", { id: oe, className: xt.viewport, children: e.map((Z, me) => {
          const ye = me === i;
          return /* @__PURE__ */ n(
            "div",
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `Slide ${me + 1} of ${e.length}`,
              "aria-hidden": ye ? void 0 : !0,
              hidden: !ye,
              className: [xt.slide, ye ? xt.active : null].filter(Boolean).join(" "),
              children: Z
            },
            me
          );
        }) }),
        R && e.length > 1 ? /* @__PURE__ */ w(Oe, { children: [
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: [xt.arrow, xt.prev].filter(Boolean).join(" "),
              "aria-label": "Previous slide",
              "aria-controls": oe,
              onClick: ne,
              children: "‹"
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: [xt.arrow, xt.next].filter(Boolean).join(" "),
              "aria-label": "Next slide",
              "aria-controls": oe,
              onClick: ae,
              children: "›"
            }
          )
        ] }) : null,
        $ ? /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: xt.pauseBtn,
            "aria-label": f ? "Resume" : "Pause",
            "aria-pressed": f,
            onClick: () => z((Z) => !Z),
            children: f ? "▶" : "⏸"
          }
        ) : null,
        M && e.length > 1 ? /* @__PURE__ */ n("div", { className: xt.indicators, role: "group", "aria-label": "Slide indicators", children: e.map((Z, me) => {
          const ye = me === i;
          return /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: [xt.indicator, ye ? xt.indicatorActive : null].filter(Boolean).join(" "),
              "aria-label": `Go to slide ${me + 1}`,
              "aria-current": ye ? "true" : void 0,
              "aria-controls": oe,
              onClick: () => le(me)
            },
            me
          );
        }) }) : null
      ]
    }
  );
}
const Ym = "_root_9vei2_1", Zm = "_group_9vei2_20", Jm = "_itemWrapper_9vei2_30", Qm = "_treeitem_9vei2_34", eg = "_disabled_9vei2_50", tg = "_selected_9vei2_60", ng = "_caret_9vei2_66", rg = "_caretIcon_9vei2_113", og = "_caretOpen_9vei2_120", sg = "_caretPlaceholder_9vei2_124", ag = "_label_9vei2_130", lg = "_loading_9vei2_137", cg = "_loadingRow_9vei2_143", ig = "_empty_9vei2_149", lt = {
  root: Ym,
  group: Zm,
  itemWrapper: Jm,
  treeitem: Qm,
  disabled: eg,
  selected: tg,
  caret: ng,
  caretIcon: rg,
  caretOpen: og,
  caretPlaceholder: sg,
  label: ag,
  loading: lg,
  loadingRow: cg,
  empty: ig
};
function Ab({
  data: e,
  Data: t,
  children: r,
  Children: o,
  textProperty: s,
  TextProperty: l,
  keyProperty: d,
  KeyProperty: a,
  selectionMode: c,
  SelectionMode: _,
  selectedItem: v,
  SelectedItem: u,
  selectedItems: D,
  SelectedItems: k,
  defaultSelectedItem: O,
  defaultSelectedItems: S,
  onChange: b,
  Change: h,
  onExpand: g,
  Expand: m,
  onCollapse: N,
  Collapse: p,
  loadChildData: y,
  LoadChildData: i,
  template: $,
  Template: C,
  itemTemplate: U,
  ItemTemplate: R,
  ariaLabel: M,
  AriaLabel: f,
  className: z
}) {
  const I = e ?? t ?? [], L = r ?? o, E = s ?? l ?? "text", J = d ?? a ?? "id", oe = c ?? _ ?? "single", de = M ?? f ?? "Tree", ne = y ?? i, ae = $ ?? C ?? U ?? R, le = q(
    (F) => {
      const ee = F[J];
      return ee != null ? String(ee) : String(F.id ?? "");
    },
    [J]
  ), X = q(
    (F) => {
      const ee = F[E];
      if (ee != null) return String(ee);
      const ie = F.text;
      return ie != null ? String(ie) : "";
    },
    [E]
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
          const ge = le(ce);
          ce.expanded && ee.add(ge);
          const Ae = W(ce);
          Ae && Ae.length > 0 && ie(Ae);
        }
      };
      return ie(F), ee;
    },
    [le, W]
  ), [te, he] = V(() => B(I)), [Z, me] = V(() => /* @__PURE__ */ new Map()), [ye, ze] = V(() => /* @__PURE__ */ new Set()), He = v ?? u, Ie = D ?? k, Ge = oe === "multiple" ? Ie !== void 0 : He !== void 0, tt = q(() => {
    if (oe === "multiple") {
      if (S && S.length > 0)
        return new Set(S.map((ie) => le(ie)));
      const F = /* @__PURE__ */ new Set(), ee = (ie) => {
        for (const _e of ie) {
          _e.selected && F.add(le(_e));
          const ce = W(_e);
          ce && ee(ce);
        }
      };
      return ee(I), F;
    } else {
      if (O) return /* @__PURE__ */ new Set([le(O)]);
      let F = null;
      const ee = (ie) => {
        for (const _e of ie) {
          if (_e.selected)
            return F = le(_e), !0;
          const ce = W(_e);
          if (ce && ee(ce)) return !0;
        }
        return !1;
      };
      return ee(I), F ? /* @__PURE__ */ new Set([F]) : /* @__PURE__ */ new Set();
    }
  }, [oe, O, S, le, W, I]), [We, Je] = V(() => tt()), Fe = $e(() => {
    if (oe === "multiple") {
      if (Ie !== void 0) {
        const F = Ie;
        return F ? new Set(F.map((ee) => le(ee))) : /* @__PURE__ */ new Set();
      }
      return We;
    } else {
      if (He !== void 0) {
        const F = He;
        return F ? /* @__PURE__ */ new Set([le(F)]) : /* @__PURE__ */ new Set();
      }
      return We;
    }
  }, [oe, Ie, He, We, le]), Ye = q(
    (F) => {
      let ee;
      const ie = (_e) => {
        for (const ce of _e) {
          if (le(ce) === F)
            return ee = ce, !0;
          const Ae = Z.get(le(ce)) ?? W(ce);
          if (Ae && ie(Ae)) return !0;
        }
        return !1;
      };
      if (ie(I), !ee) {
        for (const _e of Z.values())
          if (ie(_e)) break;
      }
      return ee;
    },
    [I, Z, le, W]
  ), H = q(() => {
    const F = /* @__PURE__ */ new Map(), ee = (ie) => {
      for (const _e of ie) {
        const ce = le(_e);
        F.set(ce, _e);
        const Ae = Z.get(ce) ?? W(_e);
        Ae && ee(Ae);
      }
    };
    return ee(I), F;
  }, [I, Z, le, W]), x = q(
    (F) => {
      const ee = le(F);
      if (!F.disabled)
        if (oe === "multiple") {
          const _e = new Set(Fe);
          _e.has(ee) ? _e.delete(ee) : _e.add(ee), Ge || Je(_e);
          const ce = b ?? h;
          if (ce) {
            const ge = H(), Ae = [];
            for (const Be of _e) {
              const j = ge.get(Be) ?? Ye(Be);
              j && Ae.push(j);
            }
            ce({ item: F, selectedItems: Ae });
          }
        } else if (!Fe.has(ee) || Fe.size !== 1 || !Fe.has(ee)) {
          Ge || Je(/* @__PURE__ */ new Set([ee]));
          const ce = b ?? h;
          ce && ce({ item: F, selectedItem: F });
        } else {
          const ce = b ?? h;
          ce && ce({ item: F, selectedItem: F });
        }
    },
    [le, oe, Fe, Ge, b, h, H, Ye]
  ), T = q(
    async (F) => {
      const ee = le(F);
      if (!!F.disabled) return;
      const _e = te.has(ee), ce = g ?? m, ge = N ?? p, Ae = W(F), j = Z.get(ee) ?? Ae, Ce = !(j !== void 0 && j.length > 0) && ne != null;
      if (_e) {
        he((ke) => {
          const Te = new Set(ke);
          return Te.delete(ee), Te;
        }), ge?.({ item: F });
        return;
      }
      if (Ce) {
        if (ye.has(ee)) return;
        ze((ke) => {
          const Te = new Set(ke);
          return Te.add(ee), Te;
        });
        try {
          const Te = await ne(F);
          me((Qe) => {
            const ct = new Map(Qe);
            return ct.set(ee, Te), ct;
          }), he((Qe) => {
            const ct = new Set(Qe);
            return ct.add(ee), ct;
          }), ce?.({ item: F });
        } catch {
        } finally {
          ze((ke) => {
            const Te = new Set(ke);
            return Te.delete(ee), Te;
          });
        }
        return;
      }
      he((ke) => {
        const Te = new Set(ke);
        return Te.add(ee), Te;
      }), ce?.({ item: F });
    },
    [le, te, W, Z, ne, ye, g, m, N, p]
  ), K = $e(() => {
    const F = [], ee = (ie, _e, ce) => {
      ie.forEach((ge, Ae) => {
        const Be = le(ge), j = X(ge), re = Z.get(Be) ?? W(ge);
        let Ce;
        Z.has(Be) ? Ce = Z.get(Be).length > 0 : re !== void 0 ? Ce = re.length > 0 : ne ? Ce = !0 : Ce = !1;
        const ke = te.has(Be), Te = !!ge.disabled, Qe = ie.length, ct = Ae + 1;
        if (F.push({
          item: ge,
          key: Be,
          text: j,
          level: _e,
          posInSet: ct,
          setSize: Qe,
          hasChildren: Ce,
          expanded: ke,
          parentKey: ce,
          disabled: Te
        }), Ce && ke) {
          const Ct = Z.get(Be) ?? re;
          Ct && Ct.length > 0 && ee(Ct, _e + 1, Be);
        }
      });
    };
    return ee(I, 1, null), F;
  }, [I, le, X, W, Z, te, ne, ye]), [Q, G] = V(() => K[0]?.key ?? null), fe = se(""), we = se(null), Re = se(null);
  Ne(() => {
    if (!Q && K.length > 0) {
      const F = K[0];
      F && G(F.key);
    } else if (Q && !K.some((F) => F.key === Q)) {
      const F = K[0];
      G(F ? F.key : null);
    }
  }, [K, Q]), Ne(() => {
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
  ), nt = q(
    (F) => K.find((ie) => ie.key === F)?.parentKey ?? null,
    [K]
  ), yt = q(
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
          T(ie.item);
        else if (ie.hasChildren && ie.expanded) {
          const ce = ee + 1, ge = K[ce];
          ge && ge.parentKey === ie.key && je(ge.key);
        }
        return;
      }
      if (F.key === "ArrowLeft") {
        if (F.preventDefault(), !ie) return;
        if (ie.hasChildren && ie.expanded)
          T(ie.item);
        else {
          const ce = nt(ie.key);
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
        F.preventDefault(), ie && x(ie.item);
        return;
      }
      if (F.key.length === 1 && /^[a-zA-Z0-9]$/.test(F.key)) {
        F.preventDefault();
        const ce = (fe.current + F.key).toLowerCase();
        fe.current = ce, we.current && clearTimeout(we.current), we.current = setTimeout(() => {
          fe.current = "";
        }, 500);
        const ge = ee >= 0 ? ee + 1 : 0, j = [...K, ...K].slice(ge, ge + K.length).find((re) => re.text.toLowerCase().startsWith(ce));
        j && je(j.key);
        return;
      }
    },
    [K, Q, je, T, x, nt]
  ), Y = q(() => {
    if (!Q && K.length > 0) {
      const F = K[0];
      F && G(F.key);
    }
  }, [Q, K]), Se = (F, ee, ie) => /* @__PURE__ */ n("ul", { role: "group", className: lt.group, children: F.map((_e, ce) => {
    const ge = le(_e), Ae = X(_e), Be = Z.get(ge) ?? W(_e);
    let j;
    Z.has(ge) ? j = Z.get(ge).length > 0 : Be !== void 0 ? j = Be.length > 0 : ne ? j = !0 : j = !1;
    const re = te.has(ge), Ce = Fe.has(ge), ke = !!_e.disabled, Te = ye.has(ge), Qe = Q === ge, ct = F.length, Ct = ce + 1, Sn = ae ? ae(_e) : Ae;
    return /* @__PURE__ */ w("li", { role: "none", className: lt.itemWrapper, children: [
      /* @__PURE__ */ w(
        "div",
        {
          role: "treeitem",
          "data-key": ge,
          tabIndex: Qe ? 0 : -1,
          "aria-expanded": j ? re : void 0,
          "aria-selected": Ce,
          "aria-level": ee,
          "aria-setsize": ct,
          "aria-posinset": Ct,
          "aria-disabled": ke || void 0,
          "aria-busy": Te || void 0,
          className: [
            lt.treeitem,
            Ce ? lt.selected : null,
            ke ? lt.disabled : null,
            Qe ? lt.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            je(ge), ke || x(_e);
          },
          onFocus: () => G(ge),
          children: [
            j ? /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: lt.caret,
                "aria-label": `${re ? "Collapse" : "Expand"} ${Ae}`,
                "aria-expanded": re,
                tabIndex: -1,
                disabled: ke,
                onClick: (sn) => {
                  sn.stopPropagation(), je(ge), T(_e);
                },
                children: /* @__PURE__ */ n("span", { "aria-hidden": "true", className: [lt.caretIcon, re ? lt.caretOpen : null].filter(Boolean).join(" "), children: "▸" })
              }
            ) : /* @__PURE__ */ n("span", { className: lt.caretPlaceholder, "aria-hidden": "true" }),
            /* @__PURE__ */ n("span", { className: lt.label, children: Sn }),
            Te ? /* @__PURE__ */ n("span", { className: lt.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      j && re ? Te ? /* @__PURE__ */ n("div", { className: lt.loadingRow, "aria-busy": "true", children: "Loading…" }) : Be && Be.length > 0 ? Se(Be, ee + 1) : Z.has(ge) && Z.get(ge).length > 0 ? Se(Z.get(ge), ee + 1) : (Be && Be.length === 0, null) : null
    ] }, ge);
  }) });
  return /* @__PURE__ */ n(
    "div",
    {
      ref: Re,
      role: "tree",
      "aria-label": de,
      "aria-multiselectable": oe === "multiple" || void 0,
      tabIndex: 0,
      className: [lt.root, z].filter(Boolean).join(" "),
      onKeyDown: yt,
      onFocus: Y,
      children: I.length === 0 ? /* @__PURE__ */ n("div", { className: lt.empty, children: "No items" }) : Se(I, 1)
    }
  );
}
const dg = "_root_1nxec_1", ug = "_panel_1nxec_8", fg = "_header_1nxec_19", _g = "_listbox_1nxec_28", pg = "_option_1nxec_42", hg = "_disabled_1nxec_57", mg = "_active_1nxec_66", gg = "_selected_1nxec_70", bg = "_empty_1nxec_86", yg = "_controls_1nxec_93", vg = "_reorder_1nxec_102", xg = "_btn_1nxec_110", Le = {
  root: dg,
  panel: ug,
  header: fg,
  listbox: _g,
  option: pg,
  disabled: hg,
  active: mg,
  selected: gg,
  empty: bg,
  controls: yg,
  reorder: vg,
  btn: xg
};
function et(e, t) {
  const r = e[t];
  return r != null ? String(r) : String(e.id ?? "");
}
function An(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function Lb({
  source: e,
  Source: t,
  target: r,
  Target: o,
  value: s,
  Value: l,
  targetValue: d,
  TargetValue: a,
  data: c,
  Data: _,
  onSourceChange: v,
  SourceChange: u,
  onTargetChange: D,
  TargetChange: k,
  keyProperty: O,
  KeyProperty: S,
  onMove: b,
  Move: h,
  ariaLabel: g,
  AriaLabel: m,
  className: N
}) {
  const p = O ?? S ?? "id", y = g ?? m ?? "PickList", i = e ?? t ?? s ?? l ?? c ?? _ ?? [], $ = r ?? o ?? d ?? a ?? [], [C, U] = V(() => [...i]), [R, M] = V(() => [...$]);
  Ne(() => {
    const x = e ?? t ?? s ?? l ?? c ?? _;
    x !== void 0 && U([...x]);
  }, [e, t, s, l, c, _]), Ne(() => {
    const x = r ?? o ?? d ?? a;
    x !== void 0 && M([...x]);
  }, [r, o, d, a]);
  const [f, z] = V(() => /* @__PURE__ */ new Set()), [I, L] = V(() => /* @__PURE__ */ new Set()), [E, J] = V(() => {
    const x = i.findIndex((T) => !T.disabled);
    return x >= 0 ? x : 0;
  }), [oe, de] = V(() => {
    const x = $.findIndex((T) => !T.disabled);
    return x >= 0 ? x : 0;
  }), ne = $e(() => C.map((x, T) => x.disabled ? -1 : T).filter((x) => x >= 0), [C]), ae = $e(() => R.map((x, T) => x.disabled ? -1 : T).filter((x) => x >= 0), [R]);
  Ne(() => {
    if (E >= C.length) {
      const x = ne[ne.length - 1];
      J(x ?? 0);
    } else if (C.length > 0 && ne.length > 0 && !ne.includes(E)) {
      const x = ne[0];
      x !== void 0 && J(x);
    }
  }, [E, C.length, ne]), Ne(() => {
    if (oe >= R.length) {
      const x = ae[ae.length - 1];
      de(x ?? 0);
    } else if (R.length > 0 && ae.length > 0 && !ae.includes(oe)) {
      const x = ae[0];
      x !== void 0 && de(x);
    }
  }, [oe, R.length, ae]), Ne(() => {
    z((x) => {
      const T = /* @__PURE__ */ new Set();
      for (const K of x)
        C.some((G) => et(G, p) === K && !G.disabled) && T.add(K);
      return T;
    });
  }, [C, p]), Ne(() => {
    L((x) => {
      const T = /* @__PURE__ */ new Set();
      for (const K of x)
        R.some((G) => et(G, p) === K && !G.disabled) && T.add(K);
      return T;
    });
  }, [R, p]);
  const le = q(
    (x) => {
      (v ?? u)?.(x);
    },
    [v, u]
  ), X = q(
    (x) => {
      (D ?? k)?.(x);
    },
    [D, k]
  ), W = q(
    (x) => {
      (b ?? h)?.(x);
    },
    [b, h]
  ), B = q(
    (x) => {
      const T = C[x];
      if (!T || T.disabled) return;
      const K = et(T, p);
      z((Q) => {
        const G = new Set(Q);
        return G.has(K) ? G.delete(K) : G.add(K), G;
      }), J(x);
    },
    [C, p]
  ), te = q(
    (x) => {
      const T = R[x];
      if (!T || T.disabled) return;
      const K = et(T, p);
      L((Q) => {
        const G = new Set(Q);
        return G.has(K) ? G.delete(K) : G.add(K), G;
      }), de(x);
    },
    [R, p]
  ), he = q(() => {
    const x = [], T = [];
    for (const fe of C) {
      const we = et(fe, p);
      f.has(we) && !fe.disabled ? x.push(fe) : T.push(fe);
    }
    if (x.length === 0) return;
    const K = T, Q = [...R, ...x];
    U(K), M(Q), z(/* @__PURE__ */ new Set());
    const G = new Set(x.map((fe) => et(fe, p)));
    L(G), le(K), X(Q), W({ source: K, target: Q, moved: x, direction: "toTarget" });
  }, [C, R, f, p, le, X, W]), Z = q(() => {
    const x = [], T = [];
    for (const fe of R) {
      const we = et(fe, p);
      I.has(we) && !fe.disabled ? x.push(fe) : T.push(fe);
    }
    if (x.length === 0) return;
    const K = T, Q = [...C, ...x];
    M(K), U(Q), L(/* @__PURE__ */ new Set());
    const G = new Set(x.map((fe) => et(fe, p)));
    z(G), le(Q), X(K), W({ source: Q, target: K, moved: x, direction: "toSource" });
  }, [C, R, I, p, le, X, W]), me = q(() => {
    const x = C.filter((Q) => !Q.disabled);
    if (x.length === 0) return;
    const T = C.filter((Q) => !!Q.disabled), K = [...R, ...x];
    U(T), M(K), z(/* @__PURE__ */ new Set()), le(T), X(K), W({ source: T, target: K, moved: x, direction: "allToTarget" });
  }, [C, R, p, le, X, W]), ye = q(() => {
    const x = R.filter((Q) => !Q.disabled);
    if (x.length === 0) return;
    const T = R.filter((Q) => !!Q.disabled), K = [...C, ...x];
    M(T), U(K), L(/* @__PURE__ */ new Set()), le(K), X(T), W({ source: K, target: T, moved: x, direction: "allToSource" });
  }, [C, R, le, X, W]), ze = q(() => {
    if (I.size === 0) return;
    const x = [...R], T = I, K = [];
    for (let G = 1; G < x.length; G++) {
      const fe = x[G], we = x[G - 1];
      if (!fe || !we) continue;
      const Re = et(fe, p), je = et(we, p);
      T.has(Re) && !T.has(je) && !fe.disabled && !we.disabled && (x[G - 1] = fe, x[G] = we, K.push(fe));
    }
    if (K.length === 0) return;
    M(x), X(x), W({ source: C, target: x, moved: K, direction: "up" });
    const Q = Array.from(T)[0];
    if (Q) {
      const G = x.findIndex((fe) => et(fe, p) === Q);
      G >= 0 && de(G);
    }
  }, [R, I, p, C, X, W]), He = q(() => {
    if (I.size === 0) return;
    const x = [...R], T = I, K = [];
    for (let G = x.length - 2; G >= 0; G--) {
      const fe = x[G], we = x[G + 1];
      if (!fe || !we) continue;
      const Re = et(fe, p), je = et(we, p);
      T.has(Re) && !T.has(je) && !fe.disabled && !we.disabled && (x[G] = we, x[G + 1] = fe, K.push(fe));
    }
    if (K.length === 0) return;
    M(x), X(x), W({ source: C, target: x, moved: K, direction: "down" });
    const Q = Array.from(T)[0];
    if (Q) {
      const G = x.findIndex((fe) => et(fe, p) === Q);
      G >= 0 && de(G);
    }
  }, [R, I, p, C, X, W]), Ie = f.size > 0, Xe = I.size > 0, be = se(""), Ge = se(null), tt = se(""), We = se(null), Je = q(
    (x) => {
      if (C.length === 0) return;
      const T = ne;
      if (T.length === 0) return;
      const K = T.includes(E) ? E : T[0] ?? 0;
      let Q = -1;
      if (x.key === "ArrowDown") {
        x.preventDefault();
        const G = T.indexOf(K);
        Q = T[(G + 1) % T.length] ?? T[0] ?? 0;
      } else if (x.key === "ArrowUp") {
        x.preventDefault();
        const G = T.indexOf(K);
        Q = T[(G - 1 + T.length) % T.length] ?? T[0] ?? 0;
      } else if (x.key === "Home")
        x.preventDefault(), Q = T[0] ?? 0;
      else if (x.key === "End")
        x.preventDefault(), Q = T[T.length - 1] ?? 0;
      else if (x.key === "Enter" || x.key === " ") {
        x.preventDefault(), B(K);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(x.key)) {
        x.preventDefault();
        const G = (be.current + x.key).toLowerCase();
        be.current = G, Ge.current && clearTimeout(Ge.current), Ge.current = setTimeout(() => {
          be.current = "";
        }, 500);
        const fe = [...T, ...T], we = T.indexOf(K) + 1, Re = fe.slice(we).find((je) => An(C[je]).toLowerCase().startsWith(G));
        Re != null && J(Re);
        return;
      }
      Q >= 0 && J(Q);
    },
    [C, ne, E, B]
  ), Fe = q(
    (x) => {
      if (R.length === 0) return;
      const T = ae;
      if (T.length === 0) return;
      const K = T.includes(oe) ? oe : T[0] ?? 0;
      let Q = -1;
      if (x.key === "ArrowDown") {
        x.preventDefault();
        const G = T.indexOf(K);
        Q = T[(G + 1) % T.length] ?? T[0] ?? 0;
      } else if (x.key === "ArrowUp") {
        x.preventDefault();
        const G = T.indexOf(K);
        Q = T[(G - 1 + T.length) % T.length] ?? T[0] ?? 0;
      } else if (x.key === "Home")
        x.preventDefault(), Q = T[0] ?? 0;
      else if (x.key === "End")
        x.preventDefault(), Q = T[T.length - 1] ?? 0;
      else if (x.key === "Enter" || x.key === " ") {
        x.preventDefault(), te(K);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(x.key)) {
        x.preventDefault();
        const G = (tt.current + x.key).toLowerCase();
        tt.current = G, We.current && clearTimeout(We.current), We.current = setTimeout(() => {
          tt.current = "";
        }, 500);
        const fe = [...T, ...T], we = T.indexOf(K) + 1, Re = fe.slice(we).find((je) => An(R[je]).toLowerCase().startsWith(G));
        Re != null && de(Re);
        return;
      }
      Q >= 0 && de(Q);
    },
    [R, ae, oe, te]
  ), Ye = se(null), H = se(null);
  return /* @__PURE__ */ w("div", { className: [Le.root, N].filter(Boolean).join(" "), "aria-label": y, children: [
    /* @__PURE__ */ w("div", { className: Le.panel, children: [
      /* @__PURE__ */ n("div", { className: Le.header, children: "Source" }),
      /* @__PURE__ */ n(
        "div",
        {
          ref: Ye,
          role: "listbox",
          "aria-label": "Source",
          "aria-multiselectable": "true",
          tabIndex: 0,
          className: Le.listbox,
          onKeyDown: Je,
          children: C.length === 0 ? /* @__PURE__ */ n("div", { className: Le.empty, children: "No items" }) : C.map((x, T) => {
            const K = et(x, p), Q = f.has(K), G = T === E, fe = !!x.disabled;
            return /* @__PURE__ */ n(
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
                onClick: () => B(T),
                children: An(x)
              },
              K
            );
          })
        }
      )
    ] }),
    /* @__PURE__ */ w("div", { className: Le.controls, children: [
      /* @__PURE__ */ n(
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
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: Le.btn,
          "aria-label": "Move all to target",
          "aria-disabled": C.filter((x) => !x.disabled).length === 0 || void 0,
          disabled: C.filter((x) => !x.disabled).length === 0,
          onClick: me,
          children: "»"
        }
      ),
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: Le.btn,
          "aria-label": "Move all",
          "aria-disabled": C.filter((x) => !x.disabled).length === 0 || void 0,
          disabled: C.filter((x) => !x.disabled).length === 0,
          onClick: me,
          children: "»"
        }
      ),
      /* @__PURE__ */ n(
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
      /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: Le.btn,
          "aria-label": "Move all to source",
          "aria-disabled": R.filter((x) => !x.disabled).length === 0 || void 0,
          disabled: R.filter((x) => !x.disabled).length === 0,
          onClick: ye,
          children: "«"
        }
      )
    ] }),
    /* @__PURE__ */ w("div", { className: Le.panel, children: [
      /* @__PURE__ */ n("div", { className: Le.header, children: "Target" }),
      /* @__PURE__ */ n(
        "div",
        {
          ref: H,
          role: "listbox",
          "aria-label": "Target",
          "aria-multiselectable": "true",
          tabIndex: 0,
          className: Le.listbox,
          onKeyDown: Fe,
          children: R.length === 0 ? /* @__PURE__ */ n("div", { className: Le.empty, children: "No items" }) : R.map((x, T) => {
            const K = et(x, p), Q = I.has(K), G = T === oe, fe = !!x.disabled;
            return /* @__PURE__ */ n(
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
                onClick: () => te(T),
                children: An(x)
              },
              K
            );
          })
        }
      ),
      /* @__PURE__ */ w("div", { className: Le.reorder, children: [
        /* @__PURE__ */ n(
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
        /* @__PURE__ */ n(
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
const wg = "_root_1qckr_1", kg = "_header_1qckr_8", $g = "_title_1qckr_15", Ng = "_navBtn_1qckr_20", Sg = "_resources_1qckr_39", Dg = "_resource_1qckr_39", zg = "_grid_1qckr_50", Cg = "_timeCol_1qckr_55", Og = "_timeCell_1qckr_61", Mg = "_dayCol_1qckr_66", Ig = "_dayHeader_1qckr_73", jg = "_slot_1qckr_81", Tg = "_event_1qckr_91", ut = {
  root: wg,
  header: kg,
  title: $g,
  navBtn: Ng,
  resources: Sg,
  resource: Dg,
  grid: zg,
  timeCol: Cg,
  timeCell: Og,
  dayCol: Mg,
  dayHeader: Ig,
  slot: jg,
  event: Tg
};
function wr(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function Rb({
  data: e,
  view: t = "week",
  date: r,
  onDateChange: o,
  resources: s,
  onEventClick: l,
  onSlotClick: d,
  ariaLabel: a = "Scheduler",
  className: c
}) {
  const [_, v] = V(r ?? /* @__PURE__ */ new Date()), u = r ?? _, D = (S) => {
    r || v(S), o?.(S);
  }, k = t === "day" ? [u] : t === "week" ? Array.from({ length: 7 }, (S, b) => {
    const h = new Date(u);
    return h.setDate(u.getDate() - u.getDay() + b), h;
  }) : Array.from({ length: 30 }, (S, b) => {
    const h = new Date(u);
    return h.setDate(1 + b), h;
  }), O = Array.from({ length: 12 }, (S, b) => 8 + b);
  return /* @__PURE__ */ w("div", { className: [ut.root, c].filter(Boolean).join(" "), role: "group", "aria-label": a, children: [
    /* @__PURE__ */ w("div", { className: ut.header, children: [
      /* @__PURE__ */ n("button", { type: "button", className: ut.navBtn, "aria-label": "Previous", onClick: () => {
        const S = new Date(u);
        S.setDate(S.getDate() - 7), D(S);
      }, children: "‹" }),
      /* @__PURE__ */ n("span", { className: ut.title, children: u.toLocaleDateString() }),
      /* @__PURE__ */ n("button", { type: "button", className: ut.navBtn, "aria-label": "Next", onClick: () => {
        const S = new Date(u);
        S.setDate(S.getDate() + 7), D(S);
      }, children: "›" })
    ] }),
    s && /* @__PURE__ */ n("div", { className: ut.resources, children: s.map((S) => /* @__PURE__ */ n("div", { className: ut.resource, role: "presentation", "aria-label": S.name, children: S.name }, S.id)) }),
    /* @__PURE__ */ w("div", { className: ut.grid, role: "presentation", children: [
      /* @__PURE__ */ n("div", { className: ut.timeCol, role: "presentation", children: O.map((S) => /* @__PURE__ */ w("div", { className: ut.timeCell, children: [
        S,
        ":00"
      ] }, S)) }),
      k.map((S) => /* @__PURE__ */ w("div", { className: ut.dayCol, role: "presentation", title: S.toLocaleDateString(), onClick: () => d?.({ date: S }), tabIndex: 0, "aria-label": S.toLocaleDateString(), children: [
        /* @__PURE__ */ n("div", { className: ut.dayHeader, children: S.toLocaleDateString(void 0, { weekday: "short", month: "short", day: "numeric" }) }),
        O.map((b) => /* @__PURE__ */ n("div", { className: ut.slot, tabIndex: -1, onClick: () => {
          const h = new Date(S);
          h.setHours(b), d?.({ date: h });
        } }, b)),
        e.filter((b) => b.start.toDateString() === S.toDateString()).map((b) => /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: ut.event,
            "aria-label": `${b.title} ${wr(b.start)} - ${wr(b.end)}`,
            "aria-pressed": !1,
            onClick: () => l?.({ event: b }),
            children: b.title
          },
          b.id
        ))
      ] }, S.toISOString()))
    ] })
  ] });
}
const Eg = "_root_59ocn_1", Ag = "_header_59ocn_8", Lg = "_headerCell_59ocn_15", Rg = "_timeline_59ocn_21", Bg = "_row_59ocn_26", Pg = "_taskName_59ocn_32", qg = "_timelineCell_59ocn_37", Fg = "_bar_59ocn_43", Kg = "_progress_59ocn_56", Hg = "_dep_59ocn_61", zt = {
  root: Eg,
  header: Ag,
  headerCell: Lg,
  timeline: Rg,
  row: Bg,
  taskName: Pg,
  timelineCell: qg,
  bar: Fg,
  progress: Kg,
  dep: Hg
};
function Bb({ tasks: e, view: t = "week", onTaskClick: r, ariaLabel: o = "Gantt", className: s }) {
  const [l, d] = V(null);
  return /* @__PURE__ */ w("div", { className: [zt.root, s].filter(Boolean).join(" "), role: "grid", "aria-label": o, "aria-rowcount": e.length, children: [
    /* @__PURE__ */ w("div", { className: zt.header, role: "row", children: [
      /* @__PURE__ */ n("div", { className: zt.headerCell, role: "columnheader", children: "Task" }),
      /* @__PURE__ */ w("div", { className: zt.timeline, role: "columnheader", children: [
        "Timeline (",
        t,
        ")"
      ] })
    ] }),
    e.map((a) => /* @__PURE__ */ w("div", { className: zt.row, role: "row", "aria-selected": l === a.id, children: [
      /* @__PURE__ */ n("div", { className: zt.taskName, role: "gridcell", children: a.name }),
      /* @__PURE__ */ w("div", { className: zt.timelineCell, role: "gridcell", children: [
        /* @__PURE__ */ n(
          "div",
          {
            className: zt.bar,
            role: "button",
            "aria-label": `${a.name} ${a.start.toLocaleDateString()} - ${a.end.toLocaleDateString()}${a.progress !== void 0 ? `, ${a.progress}% complete` : ""}`,
            "aria-pressed": l === a.id,
            tabIndex: 0,
            onClick: () => {
              d(a.id), r?.({ task: a });
            },
            onKeyDown: (c) => {
              (c.key === "Enter" || c.key === " ") && (c.preventDefault(), d(a.id), r?.({ task: a }));
            },
            children: /* @__PURE__ */ n("div", { className: zt.progress, style: { width: `${a.progress ?? 0}%` } })
          }
        ),
        a.dependencies?.map((c) => /* @__PURE__ */ n("svg", { className: zt.dep, "aria-hidden": "true", children: /* @__PURE__ */ n("line", { x1: "0", y1: "10", x2: "20", y2: "10", stroke: "var(--dt-color-border)" }) }, c))
      ] })
    ] }, a.id))
  ] });
}
const Wg = "_root_dai4q_1", Ug = "_fields_dai4q_6", Vg = "_chip_dai4q_13", Xg = "_table_dai4q_35", Gg = "_totalRow_dai4q_55", Yg = "_total_dai4q_55", rn = {
  root: Wg,
  fields: Ug,
  chip: Vg,
  table: Xg,
  totalRow: Gg,
  total: Yg
}, Ln = {
  Sum: (e) => e.reduce((t, r) => t + r, 0),
  Average: (e) => e.length ? e.reduce((t, r) => t + r, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function wn(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function Pb({ data: e, rowFields: t = [], columnFields: r = [], aggregateFields: o = [], onFieldsChange: s, ariaLabel: l = "Pivot table", className: d }) {
  const a = t, c = r, _ = o, v = (b, h, g) => {
    const m = b === "row" ? a.filter((y) => y.property !== h) : a, N = b === "col" ? c.filter((y) => y.property !== h) : c, p = b === "agg" ? _.filter((y) => !(y.property === h && y.aggregate === g)) : _;
    s?.({ rowFields: m, columnFields: N, aggregateFields: p });
  }, u = (b, h) => h.map((g) => String(b[g.property])).join(""), D = [...new Set(a.length ? e.map((b) => u(b, a)) : [""])].sort(), k = [...new Set(c.length ? e.map((b) => u(b, c)) : [""])].sort(), O = (b, h, g) => {
    const m = e.filter((p) => u(p, a) === b && u(p, c) === h), N = m.map((p) => Number(p[g.property])).filter((p) => !Number.isNaN(p));
    return !N.length && g.aggregate !== "Count" ? 0 : Ln[g.aggregate](g.aggregate === "Count" ? m.map(() => 1) : N);
  }, S = (b, h, g, m) => /* @__PURE__ */ w(
    "button",
    {
      type: "button",
      className: rn.chip,
      "aria-label": `Remove ${b} field ${g}`,
      onClick: () => v(b, h, m),
      children: [
        g,
        m ? ` (${m})` : ""
      ]
    },
    `${b}-${g}-${m ?? ""}`
  );
  return /* @__PURE__ */ w("div", { className: [rn.root, d].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ w("div", { className: rn.fields, children: [
      a.map((b) => S("row", b.property, b.title ?? b.property)),
      c.map((b) => S("col", b.property, b.title ?? b.property)),
      _.map((b) => S("agg", b.property, b.title ?? b.property, b.aggregate))
    ] }),
    /* @__PURE__ */ w("table", { className: rn.table, role: "grid", "aria-label": l, children: [
      /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ w("tr", { children: [
        /* @__PURE__ */ n("th", { scope: "col", children: a.map((b) => b.title ?? b.property).join(" / ") || "Total" }),
        k.map((b) => /* @__PURE__ */ n("th", { scope: "col", children: b || "—" }, b)),
        /* @__PURE__ */ n("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ w("tbody", { children: [
        D.map((b) => /* @__PURE__ */ w("tr", { children: [
          /* @__PURE__ */ n("th", { scope: "row", children: b || "—" }),
          k.map((h) => /* @__PURE__ */ n("td", { title: wn(O(b, h, _[0] ?? { property: "", aggregate: "Count" })), children: _.length ? wn(O(b, h, _[0])) : "" }, h)),
          /* @__PURE__ */ n("td", { className: rn.total, children: _.length ? wn(
            Ln[_[0].aggregate](
              k.flatMap((h) => e.filter((g) => u(g, a) === b && u(g, c) === h).map((g) => Number(g[_[0].property]))).filter((h) => !Number.isNaN(h))
            )
          ) : "" })
        ] }, b)),
        /* @__PURE__ */ w("tr", { className: rn.totalRow, children: [
          /* @__PURE__ */ n("th", { scope: "row", children: "Total" }),
          k.map((b) => /* @__PURE__ */ n("td", { children: _.length ? wn(
            Ln[_[0].aggregate](
              e.filter((h) => u(h, c) === b).map((h) => Number(h[_[0].property])).filter((h) => !Number.isNaN(h))
            )
          ) : "" }, b)),
          /* @__PURE__ */ n("td", { children: _.length ? wn(Ln[_[0].aggregate](e.map((b) => Number(b[_[0].property])).filter((b) => !Number.isNaN(b)))) : "" })
        ] })
      ] })
    ] })
  ] });
}
const Zg = "_root_221i7_1", Jg = "_reverse_221i7_10", Qg = "_item_221i7_14", e0 = "_marker_221i7_35", t0 = "_body_221i7_46", n0 = "_label_221i7_50", r0 = "_content_221i7_56", Gt = {
  root: Zg,
  reverse: Jg,
  item: Qg,
  marker: e0,
  body: t0,
  label: n0,
  content: r0
};
function qb({ items: e, reverse: t = !1, ariaLabel: r = "Timeline", className: o }) {
  const s = t ? [...e].reverse() : e;
  return /* @__PURE__ */ n(
    "ol",
    {
      className: [Gt.root, t ? Gt.reverse : "", o].filter(Boolean).join(" "),
      role: "list",
      "aria-label": r,
      children: s.map((l, d) => /* @__PURE__ */ w("li", { className: Gt.item, children: [
        /* @__PURE__ */ n("span", { className: Gt.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ w("div", { className: Gt.body, children: [
          /* @__PURE__ */ n("div", { className: Gt.label, children: l.label }),
          l.content !== void 0 && /* @__PURE__ */ n("div", { className: Gt.content, children: l.content })
        ] })
      ] }, d))
    }
  );
}
const o0 = "_root_jannm_1", s0 = "_header_jannm_13", a0 = "_headCell_jannm_22", l0 = "_row_jannm_32", c0 = "_cell_jannm_37", kn = {
  root: o0,
  header: s0,
  headCell: a0,
  row: l0,
  cell: c0
};
function Fb({ count: e, rowHeight: t = 40, height: r = 320, loadData: o, columns: s = [], ariaLabel: l = "Virtual grid", className: d }) {
  const [a, c] = V(/* @__PURE__ */ new Map()), [_, v] = V(0), u = se(/* @__PURE__ */ new Set()), D = Math.ceil(r / t), k = Math.max(0, Math.floor(_ / t) - 3), O = Math.min(e, k + D + 6), S = q(
    (h, g) => {
      let m = !1;
      for (let N = h; N < g; N++)
        !a.has(N) && !u.current.has(N) && (m = !0);
      if (m) {
        for (let N = h; N < g; N++) u.current.add(N);
        o({ skip: h, top: g }).then((N) => {
          c((p) => {
            const y = new Map(p);
            return N.forEach((i, $) => y.set(h + $, i)), y;
          });
          for (let p = h; p < g; p++) u.current.delete(p);
        });
      }
    },
    [a, o]
  );
  Ne(() => {
    S(k, O);
  }, [k, O]);
  const b = [];
  for (let h = k; h < O; h++) {
    const g = a.get(h) ?? {};
    b.push(
      /* @__PURE__ */ n("div", { className: kn.row, role: "row", style: { height: t }, children: s.map((m) => /* @__PURE__ */ n("div", { role: "gridcell", className: kn.cell, style: m.width ? { width: m.width } : void 0, children: String(g[m.property] ?? "") }, m.property)) }, h)
    );
  }
  return /* @__PURE__ */ w(
    "div",
    {
      className: [kn.root, d].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": l,
      "aria-rowcount": e,
      tabIndex: 0,
      style: { height: r },
      onScroll: (h) => v(h.target.scrollTop),
      onKeyDown: (h) => {
        const g = h.currentTarget;
        h.key === "ArrowDown" ? (h.preventDefault(), g.scrollTop += t) : h.key === "ArrowUp" ? (h.preventDefault(), g.scrollTop -= t) : h.key === "PageDown" ? (h.preventDefault(), g.scrollTop += r) : h.key === "PageUp" && (h.preventDefault(), g.scrollTop -= r);
      },
      children: [
        /* @__PURE__ */ n("div", { style: { height: k * t }, "aria-hidden": "true" }),
        /* @__PURE__ */ n("div", { className: kn.header, role: "row", children: s.map((h) => /* @__PURE__ */ n("div", { role: "columnheader", className: kn.headCell, style: { height: t, ...h.width ? { width: h.width } : {} }, children: h.title ?? h.property }, h.property)) }),
        b,
        /* @__PURE__ */ n("div", { style: { height: Math.max(0, (e - O) * t) }, "aria-hidden": "true" })
      ]
    }
  );
}
const i0 = "_root_112nk_1", d0 = {
  root: i0
}, Ze = 25;
function u0(e) {
  const t = [];
  let r = 2166136261;
  for (let o = 0; o < e.length; o++)
    r ^= e.charCodeAt(o), r = Math.imul(r, 16777619) >>> 0, t.push(r & 255);
  for (; t.length < Ze * Ze; )
    r = Math.imul(r ^ t.length + 1, 16777619) >>> 0, t.push(r & 255);
  return t;
}
function f0(e, t) {
  const r = (o, s) => e >= o && e < o + 7 && t >= s && t < s + 7;
  return !!(r(0, 0) || r(Ze - 7, 0) || r(0, Ze - 7) || e === 6 || t === 6 || e === 8 && t === 8 || e === 8 && (t < 9 || t > Ze - 9) || t === 8 && (e < 9 || e > Ze - 9));
}
function _0(e, t) {
  const r = (o, s) => {
    const l = e - o, d = t - s, a = Math.max(Math.abs(l - 3), Math.abs(d - 3));
    return a === 3 || a <= 1;
  };
  return e < 7 && t < 7 ? r(0, 0) : e >= Ze - 7 && t < 7 ? r(Ze - 7, 0) : e < 7 && t >= Ze - 7 ? r(0, Ze - 7) : null;
}
function Kb({ value: e, size: t = 128, render: r = "svg", ariaLabel: o, className: s }) {
  const l = o ?? `QR code for ${e}`, d = $e(() => {
    const _ = u0(e), v = [];
    for (let u = 0; u < Ze; u++)
      for (let D = 0; D < Ze; D++) {
        const k = _0(D, u);
        if (k !== null) {
          v.push(k);
          continue;
        }
        if (f0(D, u)) {
          v.push(D === 6 || u === 6 ? (D + u) % 2 === 0 : !1);
          continue;
        }
        v.push(_[u * Ze + D] % 2 === 1);
      }
    return v;
  }, [e]), a = t / Ze, c = [];
  for (let _ = 0; _ < Ze; _++)
    for (let v = 0; v < Ze; v++)
      d[_ * Ze + v] && c.push(/* @__PURE__ */ n("rect", { x: v * a, y: _ * a, width: a, height: a }, `${v}-${_}`));
  return /* @__PURE__ */ w(
    "svg",
    {
      className: [d0.root, s].filter(Boolean).join(" "),
      width: t,
      height: t,
      viewBox: `0 0 ${t} ${t}`,
      role: "img",
      "aria-label": l,
      "data-value": e,
      children: [
        /* @__PURE__ */ n("rect", { width: t, height: t, fill: "var(--dt-color-surface)" }),
        /* @__PURE__ */ n("g", { fill: "var(--dt-color-text)", children: c })
      ]
    }
  );
}
const p0 = "_root_1us75_1", h0 = "_value_1us75_9", kr = {
  root: p0,
  value: h0
}, $r = [
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
], Nr = 104, m0 = 106;
function g0(e) {
  const t = [Nr];
  for (let o = 0; o < e.length; o++) {
    const s = e.charCodeAt(o);
    t.push(s >= 32 && s <= 126 ? s - 32 : 0);
  }
  let r = Nr;
  for (let o = 1; o < t.length; o++) r += o * t[o];
  return t.push(r % 103, m0), t;
}
function Hb({ value: e, format: t = "Code128", height: r = 60, showValue: o = !1, ariaLabel: s, className: l }) {
  const d = s ?? `Barcode ${e}`, a = $e(() => {
    const c = [];
    let _ = 0;
    for (const v of g0(e)) {
      const u = $r[v] ?? $r[0];
      for (let D = 0; D < u.length; D++) {
        const k = Number(u[D]);
        D % 2 === 0 && c.push({ x: _, w: k }), _ += k;
      }
    }
    return { modules: c, total: _ };
  }, [e]);
  return /* @__PURE__ */ w("span", { className: [kr.root, l].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ w(
      "svg",
      {
        width: "100%",
        height: r,
        viewBox: `0 0 ${a.total} ${r}`,
        preserveAspectRatio: "none",
        role: "img",
        "aria-label": d,
        "data-value": e,
        children: [
          /* @__PURE__ */ n("rect", { width: a.total, height: r, fill: "var(--dt-color-surface)" }),
          a.modules.map((c, _) => /* @__PURE__ */ n("rect", { x: c.x, y: 0, width: c.w, height: r, fill: "var(--dt-color-text)" }, _))
        ]
      }
    ),
    o && /* @__PURE__ */ n("span", { className: kr.value, children: e })
  ] });
}
export {
  rb as Accordion,
  U0 as Alert,
  lb as Autocomplete,
  tb as Avatar,
  w0 as Badge,
  Hb as Barcode,
  J0 as Body,
  Mb as Breadcrumb,
  v0 as Button,
  x0 as Card,
  Eb as Carousel,
  q0 as Checkbox,
  ib as Checkboxlist,
  bb as Colorpicker,
  G0 as Column,
  Cn as DEFAULT_OPERATOR_BY_TYPE,
  cp as DEFAULT_PALETTE,
  A0 as DataFilter,
  L0 as DataGrid,
  R0 as DataList,
  yb as Datepicker,
  K0 as Dialog,
  Sb as DropZone,
  ab as Dropdown,
  S0 as EmptyState,
  Or as FILTER_OPERATORS,
  Ob as FabMenu,
  D0 as Field,
  Pu as Footer,
  z0 as Form,
  Bb as Gantt,
  Ku as Header,
  Ve as Icon,
  P0 as Input,
  B0 as Label,
  Z0 as Layout,
  cb as Listbox,
  mb as Mask,
  Db as Menu,
  gb as Numeric,
  Ys as Pager,
  zb as PanelMenu,
  hb as Password,
  Lb as PickList,
  Pb as Pivot,
  Cb as ProfileMenu,
  Q0 as Progress,
  Kb as QRCode,
  db as Radiobuttonlist,
  vb as Rating,
  X0 as Row,
  Rb as Scheduler,
  kb as SecurityCode,
  Bn as Select,
  ub as Selectbar,
  Zu as Sidebar,
  $b as SignaturePad,
  V0 as Skeleton,
  xb as Slider,
  _b as Splitbutton,
  jb as Splitter,
  Y0 as Stack,
  $0 as Stat,
  Ib as Steps,
  il as Switch,
  N0 as Table,
  nb as Tabs,
  ob as Textarea,
  pb as Textbox,
  eb as ThemeSwitcher,
  qb as Timeline,
  wb as Timespanpicker,
  W0 as ToastProvider,
  Tb as Toc,
  fb as Togglebutton,
  F0 as Tooltip,
  Ab as Tree,
  sb as Typography,
  Nb as Upload,
  Fb as VirtualGrid,
  Ir as applyFilters,
  ra as applyGridState,
  fn as columnValue,
  ea as cycleSort,
  oa as defaultOperatorForType,
  O0 as email,
  pr as formatMasked,
  ar as formatValue,
  Pn as getByPath,
  k0 as iconNames,
  Mr as matchesFilters,
  j0 as maxLength,
  I0 as minLength,
  na as paginate,
  M0 as pattern,
  T0 as range,
  C0 as required,
  ls as runValidators,
  ws as sortItems,
  ta as sortedItems,
  gs as toFilterString,
  xs as toODataFilterString,
  as as useFormContext,
  E0 as useFormField,
  H0 as useToast
};
