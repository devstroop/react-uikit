import { jsx as t, jsxs as N, Fragment as Oe } from "react/jsx-runtime";
import { forwardRef as qe, useId as Ue, isValidElement as Wn, cloneElement as pr, useState as V, useRef as le, useCallback as q, useMemo as Se, useContext as hr, createContext as mr, useEffect as De, Children as Sr, useImperativeHandle as Un } from "react";
const Dr = "_button_1wxdv_1", zr = "_primary_1wxdv_29", Cr = "_secondary_1wxdv_38", Or = "_ghost_1wxdv_48", Ir = "_danger_1wxdv_57", Mr = "_success_1wxdv_61", jr = "_info_1wxdv_65", Er = "_xs_1wxdv_101", Tr = "_sm_1wxdv_107", Ar = "_md_1wxdv_113", Lr = "_lg_1wxdv_119", Rr = "_xl_1wxdv_125", Br = "_iconOnly_1wxdv_131", Pr = "_fullWidth_1wxdv_157", nn = {
  button: Dr,
  primary: zr,
  secondary: Cr,
  ghost: Or,
  danger: Ir,
  success: Mr,
  info: jr,
  xs: Er,
  sm: Tr,
  md: Ar,
  lg: Lr,
  xl: Rr,
  iconOnly: Br,
  fullWidth: Pr
}, fg = qe(function({
  variant: n = "primary",
  size: r = "md",
  fullWidth: s = !1,
  iconOnly: o = !1,
  className: a,
  type: u = "button",
  ...l
}, i) {
  const h = [
    nn.button,
    nn[n],
    nn[r],
    s ? nn.fullWidth : null,
    o ? nn.iconOnly : null,
    a
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ t("button", { ref: i, type: u, className: h, ...l });
}), qr = "_card_10w4x_1", Fr = "_elevated_10w4x_8", Kr = "_outlined_10w4x_13", Hr = "_interactive_10w4x_17", Wr = "_text_10w4x_25", Ur = "_header_10w4x_41", Vr = "_body_10w4x_48", Xr = "_footer_10w4x_58", rn = {
  card: qr,
  elevated: Fr,
  outlined: Kr,
  interactive: Hr,
  text: Wr,
  header: Ur,
  body: Vr,
  footer: Xr
}, _g = qe(function({ variant: n = "elevated", header: r, footer: s, className: o, children: a, onKeyDown: u, ...l }, i) {
  const h = n === "interactive";
  return /* @__PURE__ */ N(
    "div",
    {
      ref: i,
      tabIndex: h ? 0 : void 0,
      onKeyDown: (x) => {
        u?.(x), !(!h || x.key !== "Enter" && x.key !== " ") && (x.preventDefault(), x.currentTarget.click());
      },
      className: [rn.card, rn[n], o].filter(Boolean).join(" "),
      ...l,
      children: [
        r != null && /* @__PURE__ */ t("div", { className: rn.header, children: r }),
        /* @__PURE__ */ t("div", { className: rn.body, children: a }),
        s != null && /* @__PURE__ */ t("div", { className: rn.footer, children: s })
      ]
    }
  );
}), Gr = "_badge_dcudr_1", Yr = "_xs_dcudr_14", Zr = "_sm_dcudr_19", Jr = "_md_dcudr_24", Qr = "_lg_dcudr_29", es = "_xl_dcudr_34", ts = "_neutral_dcudr_40", ns = "_primary_dcudr_45", rs = "_success_dcudr_50", ss = "_warning_dcudr_55", os = "_danger_dcudr_60", as = "_solid_dcudr_66", ls = "_outline_dcudr_91", xn = {
  badge: Gr,
  xs: Yr,
  sm: Zr,
  md: Jr,
  lg: Qr,
  xl: es,
  neutral: ts,
  primary: ns,
  success: rs,
  warning: ss,
  danger: os,
  solid: as,
  outline: ls
}, pg = qe(function({ tone: n = "neutral", variant: r = "soft", size: s = "md", className: o, children: a, ...u }, l) {
  return /* @__PURE__ */ t(
    "span",
    {
      ref: l,
      className: [xn.badge, xn[s], xn[n], xn[r], o].filter(Boolean).join(" "),
      ...u,
      children: a
    }
  );
}), cs = "_xs_cg2f2_2", is = "_sm_cg2f2_7", ds = "_md_cg2f2_1", us = "_lg_cg2f2_17", fs = "_xl_cg2f2_22", _s = {
  xs: cs,
  sm: is,
  md: ds,
  lg: us,
  xl: fs
}, hg = [
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
], ps = {
  check: /* @__PURE__ */ t("path", { d: "M20 6L9 17l-5-5" }),
  close: /* @__PURE__ */ t("path", { d: "M18 6L6 18M6 6l12 12" }),
  "chevron-down": /* @__PURE__ */ t("path", { d: "M6 9l6 6 6-6" }),
  "chevron-left": /* @__PURE__ */ t("path", { d: "M15 18l-6-6 6-6" }),
  "chevron-right": /* @__PURE__ */ t("path", { d: "M9 18l6-6-6-6" }),
  "chevron-up": /* @__PURE__ */ t("path", { d: "M18 15l-6-6-6 6" }),
  search: /* @__PURE__ */ N(Oe, { children: [
    /* @__PURE__ */ t("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ t("path", { d: "M21 21l-4.3-4.3" })
  ] }),
  plus: /* @__PURE__ */ t("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ t("path", { d: "M5 12h14" }),
  alert: /* @__PURE__ */ N(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" }),
    /* @__PURE__ */ t("path", { d: "M12 9v4M12 17h.01" })
  ] }),
  info: /* @__PURE__ */ N(Oe, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M12 16v-4M12 8h.01" })
  ] }),
  "arrow-right": /* @__PURE__ */ t("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  "arrow-left": /* @__PURE__ */ t("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  "external-link": /* @__PURE__ */ N(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
    /* @__PURE__ */ t("path", { d: "M15 3h6v6M10 14L21 3" })
  ] }),
  copy: /* @__PURE__ */ N(Oe, { children: [
    /* @__PURE__ */ t("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ t("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] }),
  trash: /* @__PURE__ */ t(Oe, { children: /* @__PURE__ */ t("path", { d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" }) }),
  edit: /* @__PURE__ */ N(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ t("path", { d: "M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  settings: /* @__PURE__ */ N(Oe, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ t("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] }),
  user: /* @__PURE__ */ N(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ t("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ N(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ t("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ t("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  download: /* @__PURE__ */ t("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  upload: /* @__PURE__ */ t("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  menu: /* @__PURE__ */ t("path", { d: "M3 12h18M3 6h18M3 18h18" }),
  "more-horizontal": /* @__PURE__ */ N(Oe, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ t("circle", { cx: "19", cy: "12", r: "1" }),
    /* @__PURE__ */ t("circle", { cx: "5", cy: "12", r: "1" })
  ] }),
  mail: /* @__PURE__ */ N(Oe, { children: [
    /* @__PURE__ */ t("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ t("path", { d: "M22 6l-10 7L2 6" })
  ] }),
  lock: /* @__PURE__ */ N(Oe, { children: [
    /* @__PURE__ */ t("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ t("path", { d: "M7 11V7a5 5 0 0110 0v4" })
  ] }),
  eye: /* @__PURE__ */ N(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  "eye-off": /* @__PURE__ */ N(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ t("path", { d: "M1 1l22 22" })
  ] }),
  refresh: /* @__PURE__ */ N(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M23 4v6h-6M1 20v-6h6" }),
    /* @__PURE__ */ t("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
  ] }),
  calendar: /* @__PURE__ */ N(Oe, { children: [
    /* @__PURE__ */ t("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ t("path", { d: "M16 2v4M8 2v4M3 10h18" })
  ] }),
  clock: /* @__PURE__ */ N(Oe, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M12 6v6l4 2" })
  ] }),
  "check-circle": /* @__PURE__ */ N(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ t("path", { d: "M22 4L12 14.01l-3-3" })
  ] }),
  "x-circle": /* @__PURE__ */ N(Oe, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] }),
  shield: /* @__PURE__ */ t(Oe, { children: /* @__PURE__ */ t("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  globe: /* @__PURE__ */ N(Oe, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
  ] }),
  file: /* @__PURE__ */ N(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
    /* @__PURE__ */ t("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
  ] }),
  folder: /* @__PURE__ */ t("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" }),
  home: /* @__PURE__ */ N(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
    /* @__PURE__ */ t("path", { d: "M9 22V12h6v10" })
  ] }),
  key: /* @__PURE__ */ t(Oe, { children: /* @__PURE__ */ t("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) }),
  link: /* @__PURE__ */ N(Oe, { children: [
    /* @__PURE__ */ t("path", { d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" }),
    /* @__PURE__ */ t("path", { d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" })
  ] }),
  star: /* @__PURE__ */ t("path", { fill: "currentColor", stroke: "none", d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" }),
  "star-outline": /* @__PURE__ */ t("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" }),
  ban: /* @__PURE__ */ N(Oe, { children: [
    /* @__PURE__ */ t("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ t("path", { d: "M4.93 4.93l14.14 14.14" })
  ] })
}, Ve = qe(function({ name: n, size: r = "md", strokeWidth: s = 2, className: o, ...a }, u) {
  const l = typeof r == "string";
  return /* @__PURE__ */ t(
    "svg",
    {
      ref: u,
      className: [l ? _s[r] : null, o].filter(Boolean).join(" "),
      width: l ? void 0 : r,
      height: l ? void 0 : r,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: s,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      ...a,
      children: ps[n]
    }
  );
}), hs = "_stat_11sa0_1", ms = "_label_11sa0_8", gs = "_row_11sa0_16", bs = "_value_11sa0_22", ys = "_delta_11sa0_28", vs = "_success_11sa0_33", xs = "_danger_11sa0_37", ks = "_neutral_11sa0_41", ws = "_hint_11sa0_45", Pt = {
  stat: hs,
  label: ms,
  row: gs,
  value: bs,
  delta: ys,
  success: vs,
  danger: xs,
  neutral: ks,
  hint: ws
}, mg = qe(function({ label: n, value: r, delta: s, deltaTone: o = "neutral", hint: a, className: u, ...l }, i) {
  return /* @__PURE__ */ N("div", { ref: i, className: [Pt.stat, u].filter(Boolean).join(" "), ...l, children: [
    /* @__PURE__ */ t("div", { className: Pt.label, children: n }),
    /* @__PURE__ */ N("div", { className: Pt.row, children: [
      /* @__PURE__ */ t("div", { className: Pt.value, children: r }),
      s != null && /* @__PURE__ */ t("div", { className: [Pt.delta, Pt[o]].join(" "), children: s })
    ] }),
    a != null && /* @__PURE__ */ t("div", { className: Pt.hint, children: a })
  ] });
}), $s = "_wrap_1cpzs_1", Ns = "_table_1cpzs_8", Ss = "_caption_1cpzs_14", Ds = "_none_1cpzs_51", zs = "_horizontal_1cpzs_57", Cs = "_vertical_1cpzs_67", Os = "_alternating_1cpzs_85", Is = "_start_1cpzs_89", Ms = "_center_1cpzs_93", js = "_end_1cpzs_97", Es = "_empty_1cpzs_101", Tt = {
  wrap: $s,
  table: Ns,
  caption: Ss,
  none: Ds,
  horizontal: zs,
  vertical: Cs,
  alternating: Os,
  start: Is,
  center: Ms,
  end: js,
  empty: Es
};
function gg({
  columns: e,
  rows: n,
  rowKey: r,
  empty: s,
  caption: o,
  gridLines: a = "default",
  allowAlternatingRows: u = !0,
  className: l
}) {
  const i = a === "default" || a === "both" ? "" : Tt[a];
  return /* @__PURE__ */ N("div", { className: [Tt.wrap, l].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ N(
      "table",
      {
        className: [
          Tt.table,
          i,
          u ? Tt.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          o != null && /* @__PURE__ */ t("caption", { className: Tt.caption, children: o }),
          /* @__PURE__ */ t("thead", { children: /* @__PURE__ */ t("tr", { children: e.map((h) => /* @__PURE__ */ t(
            "th",
            {
              className: h.align != null ? Tt[h.align] : void 0,
              scope: "col",
              children: h.header
            },
            h.key
          )) }) }),
          /* @__PURE__ */ t("tbody", { children: n.map((h) => /* @__PURE__ */ t("tr", { children: e.map((x) => /* @__PURE__ */ t(
            "td",
            {
              className: x.align != null ? Tt[x.align] : void 0,
              children: x.render != null ? x.render(h) : h[x.key]
            },
            x.key
          )) }, r(h))) })
        ]
      }
    ),
    n.length === 0 && s != null && /* @__PURE__ */ t("div", { className: Tt.empty, children: s })
  ] });
}
const Ts = "_emptyState_123z1_1", As = "_icon_123z1_13", Ls = "_title_123z1_18", Rs = "_description_123z1_24", Bs = "_action_123z1_30", sn = {
  emptyState: Ts,
  icon: As,
  title: Ls,
  description: Rs,
  action: Bs
};
function bg({ icon: e, title: n, description: r, action: s, className: o }) {
  return /* @__PURE__ */ N("div", { className: [sn.emptyState, o].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ t("div", { className: sn.icon, children: e }),
    /* @__PURE__ */ t("div", { className: sn.title, children: n }),
    r != null && /* @__PURE__ */ t("div", { className: sn.description, children: r }),
    s != null && /* @__PURE__ */ t("div", { className: sn.action, children: s })
  ] });
}
const Ps = "_field_18dbj_1", qs = "_label_18dbj_8", Fs = "_required_18dbj_14", Ks = "_hint_18dbj_19", Hs = "_error_18dbj_24", on = {
  field: Ps,
  label: qs,
  required: Fs,
  hint: Ks,
  error: Hs
};
function yg({ label: e, htmlFor: n, required: r, hint: s, error: o, children: a, className: u }) {
  const l = Ue(), i = Ue(), h = o != null ? l : s != null ? i : null, x = Wn(a) && h != null ? pr(
    a,
    {
      "aria-describedby": [
        a.props["aria-describedby"],
        h
      ].filter((_) => typeof _ == "string").join(" ") || void 0,
      "aria-invalid": o != null ? !0 : a.props["aria-invalid"]
    }
  ) : a;
  return /* @__PURE__ */ N("div", { className: [on.field, u].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ N("label", { className: on.label, htmlFor: n, children: [
      e,
      r === !0 && /* @__PURE__ */ t("span", { className: on.required, "aria-hidden": "true", children: "*" })
    ] }),
    x,
    o != null ? /* @__PURE__ */ t("div", { id: l, className: on.error, "aria-live": "polite", children: o }) : s != null ? /* @__PURE__ */ t("div", { id: i, className: on.hint, children: s }) : null
  ] });
}
const Ws = "_form_qa5tm_1", Us = {
  form: Ws
}, gr = mr(null);
function Vs() {
  const e = hr(gr);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function vg({
  model: e,
  onSubmit: n,
  onInvalidSubmit: r,
  action: s,
  method: o,
  children: a,
  className: u
}) {
  const [l, i] = V({}), [h, x] = V(0), _ = le(l);
  _.current = l;
  const z = q((p) => {
    i((S) => S[p.name] === p ? S : { ...S, [p.name]: p });
  }, []), k = q((p) => {
    i((S) => {
      if (!(p in S)) return S;
      const f = { ...S };
      return delete f[p], f;
    });
  }, []), C = q(() => {
    const p = {};
    for (const S of Object.values(_.current)) {
      const f = S.validate();
      f.length > 0 && (p[S.name] = f);
    }
    return p;
  }, []), I = q(() => {
    const p = C();
    x((S) => S + 1), Object.keys(p).length === 0 ? n?.(e) : r?.(p);
  }, [C, e, n, r]), D = (p) => {
    s != null && o != null || (p.preventDefault(), I());
  }, y = Se(
    () => ({ registerField: z, unregisterField: k, submit: I, submitCount: h }),
    [z, k, I, h]
  ), m = [Us.form, u].filter(Boolean).join(" ");
  return /* @__PURE__ */ t(gr.Provider, { value: y, children: /* @__PURE__ */ t("form", { className: m, onSubmit: D, action: s, method: o, children: a }) });
}
const Qt = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", xg = (e = "Required") => (n) => Qt(n) ? e : null, kg = (e = "Invalid email") => (n) => Qt(n) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(n)) ? null : e, wg = (e, n = "Invalid format") => (r) => Qt(r) || e.test(String(r)) ? null : n, $g = (e, n = `Minimum ${e} characters`) => (r) => Qt(r) || String(r).length >= e ? null : n, Ng = (e, n = `Maximum ${e} characters`) => (r) => Qt(r) || String(r).length <= e ? null : n, Sg = (e, n, r = `Between ${e} and ${n}`) => (s) => {
  if (Qt(s)) return null;
  const o = Number(s);
  return !Number.isNaN(o) && o >= e && o <= n ? null : r;
};
function Xs(e, n, r) {
  return e.map((s) => s(n, r)).filter((s) => s != null);
}
function Dg(e, n) {
  const { registerField: r, unregisterField: s, submitCount: o } = Vs(), [a, u] = V(n?.initialValue), [l, i] = V(!1), [h, x] = V(!1), _ = le(() => []);
  _.current = () => Xs(n?.validate ?? [], a), De(() => (r({ name: e, validate: () => _.current() }), () => s(e)), [e, r, s]), De(() => {
    o > 0 && (i(!0), x(!1));
  }, [o]);
  const z = l && !h ? _.current() : [];
  return { value: a, setValue: (C) => {
    u(C), x(!0);
  }, errors: z };
}
const Gs = "_select_14c07_1", Ys = "_invalid_14c07_33", Zs = "_xs_14c07_39", Js = "_sm_14c07_45", Qs = "_md_14c07_51", eo = "_lg_14c07_57", to = "_xl_14c07_63", jn = {
  select: Gs,
  invalid: Ys,
  xs: Zs,
  sm: Js,
  md: Qs,
  lg: eo,
  xl: to
}, In = qe(function({ size: n = "md", invalid: r = !1, options: s, children: o, className: a, ...u }, l) {
  return /* @__PURE__ */ t(
    "select",
    {
      ref: l,
      className: [jn.select, jn[n], r ? jn.invalid : null, a].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...u,
      children: s != null ? s.map((i) => /* @__PURE__ */ t("option", { value: i.value, disabled: i.disabled, children: i.label }, i.value)) : o
    }
  );
}), br = [
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
], kn = {
  string: "Contains",
  number: "Equals",
  boolean: "Equals",
  date: "Equals",
  enum: "Equals"
};
function Mn(e, n) {
  return n.split(".").reduce((r, s) => {
    if (r != null)
      return r[s];
  }, e);
}
function Xn(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function gn(e, n) {
  const r = Xn(e), s = Xn(n);
  if (typeof r == "number" && typeof s == "number") return r - s;
  const o = String(r ?? ""), a = String(s ?? "");
  return o < a ? -1 : o > a ? 1 : 0;
}
function Gn(e, n, r) {
  const s = Mn(n, e.property), o = Yn(s, e.value, e.operator, r);
  if (e.secondOperator == null || e.secondValue === void 0) return o;
  const a = Yn(s, e.secondValue, e.secondOperator, r);
  return (e.logicalOperator ?? "And") === "And" ? o && a : o || a;
}
function Yn(e, n, r, s) {
  const o = s === "CaseInsensitive", a = (i) => o && typeof i == "string" ? i.toLowerCase() : i, u = a(e), l = a(n);
  switch (r) {
    case "Equals":
      return u === l || Array.isArray(u) && u.some((i) => a(i) === l);
    case "NotEquals":
      return u !== l && !(Array.isArray(u) && u.some((i) => a(i) === l));
    case "LessThan":
      return gn(u, l) < 0;
    case "LessThanOrEquals":
      return gn(u, l) <= 0;
    case "GreaterThan":
      return gn(u, l) > 0;
    case "GreaterThanOrEquals":
      return gn(u, l) >= 0;
    case "Contains":
      return typeof u == "string" && typeof l == "string" && u.includes(l);
    case "StartsWith":
      return typeof u == "string" && typeof l == "string" && u.startsWith(l);
    case "EndsWith":
      return typeof u == "string" && typeof l == "string" && u.endsWith(l);
    case "DoesNotContain":
      return typeof u == "string" && typeof l == "string" && !u.includes(l);
    case "In":
      return Array.isArray(l) && l.some((i) => a(i) === u);
    case "NotIn":
      return Array.isArray(l) && !l.some((i) => a(i) === u);
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
function Vn(e) {
  return "filters" in e;
}
function yr(e, n, r = {}) {
  const s = r.logicalOperator ?? "And", o = r.caseSensitivity ?? "CaseInsensitive";
  if (Vn(n)) {
    if (n.filters.length === 0) return !0;
    const a = n.operator ?? s;
    return n.filters[a === "Or" ? "some" : "every"](
      (u) => yr(e, u, { logicalOperator: a, caseSensitivity: o })
    );
  }
  return n.operator === "Custom", Gn(n, e, o);
}
function vr(e, n, r = {}) {
  return e.filter((s) => yr(s, n, r));
}
function no(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function pt(e) {
  return typeof e == "string" ? `"${no(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(pt).join(", ")}]` : `"${String(e)}"`;
}
function ro(e) {
  const n = (s, o) => {
    switch (s) {
      case "Equals":
        return `${e.property}.Equals(${pt(o)})`;
      case "NotEquals":
        return `!${e.property}.Equals(${pt(o)})`;
      case "LessThan":
        return `${e.property}.LessThan(${pt(o)})`;
      case "LessThanOrEquals":
        return `${e.property}.LessThanOrEquals(${pt(o)})`;
      case "GreaterThan":
        return `${e.property}.GreaterThan(${pt(o)})`;
      case "GreaterThanOrEquals":
        return `${e.property}.GreaterThanOrEquals(${pt(o)})`;
      case "Contains":
        return `${e.property}.Contains(${pt(o)})`;
      case "StartsWith":
        return `${e.property}.StartsWith(${pt(o)})`;
      case "EndsWith":
        return `${e.property}.EndsWith(${pt(o)})`;
      case "DoesNotContain":
        return `!${e.property}.Contains(${pt(o)})`;
      case "In":
        return `${e.property}.In(${pt(o)})`;
      case "NotIn":
        return `!${e.property}.In(${pt(o)})`;
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
function so(e) {
  return Vn(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(so).filter(Boolean).join(` ${e.operator} `)})` : ro(e);
}
function oo(e) {
  return e.replace(/'/g, "''");
}
const ao = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function lo(e, n) {
  const r = e.property, s = n === "CaseInsensitive", o = (i) => s ? `tolower(${i})` : i, a = (i) => typeof i == "string" ? `'${oo(i)}'` : i instanceof Date ? `'${i.toISOString()}'` : String(i ?? ""), u = (i, h) => {
    const x = typeof h == "string", _ = x && s ? o(r) : r;
    switch (i) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${_} ${ao[i]} ${x && s ? o(a(h)) : a(h)}`;
      case "Contains":
        return `contains(${o(r)}, ${o(a(h))})`;
      case "StartsWith":
        return `startswith(${o(r)}, ${o(a(h))})`;
      case "EndsWith":
        return `endswith(${o(r)}, ${o(a(h))})`;
      case "DoesNotContain":
        return `not(contains(${o(r)}, ${o(a(h))}))`;
      case "In":
        return Array.isArray(h) ? `${_} in (${h.map((z) => a(z)).join(", ")})` : `${_} in (${a(h)})`;
      case "NotIn":
        return Array.isArray(h) ? `not(${_} in (${h.map((z) => a(z)).join(", ")}))` : `not(${_} in (${a(h)}))`;
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
  const l = (e.logicalOperator ?? "And") === "And" ? "and" : "or";
  return `(${u(e.operator, e.value)} ${l} ${u(
    e.secondOperator,
    e.secondValue
  )})`;
}
function co(e, n = {}) {
  const r = n.caseSensitivity ?? "CaseInsensitive";
  if (Vn(e)) {
    if (e.filters.length === 0) return "";
    const s = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((o) => co(o, { caseSensitivity: r })).filter(Boolean).join(` ${s} `)})`;
  }
  return lo(e, r);
}
function io(e, n) {
  return n.length === 0 ? [...e] : [...e].sort((r, s) => {
    for (const o of n) {
      const a = o.sortOrder === "Ascending" ? 1 : -1, u = gn(Mn(r, o.property), Mn(s, o.property));
      if (u !== 0) return u * a;
    }
    return 0;
  });
}
const uo = "_filter_1jk5p_1", fo = "_rows_1jk5p_9", _o = "_row_1jk5p_9", po = "_join_1jk5p_21", ho = "_property_1jk5p_30", mo = "_operator_1jk5p_34", go = "_value_1jk5p_38", bo = "_remove_1jk5p_42", yo = "_bar_1jk5p_58", vo = "_add_1jk5p_64", xo = "_custom_1jk5p_78", ko = "_summary_1jk5p_82", dt = {
  filter: uo,
  rows: fo,
  row: _o,
  join: po,
  property: ho,
  operator: mo,
  value: go,
  remove: bo,
  bar: yo,
  add: vo,
  custom: xo,
  summary: ko
}, wo = {
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
function $o({
  property: e,
  value: n,
  onChange: r
}) {
  if (e.editor != null)
    return /* @__PURE__ */ t(Oe, { children: e.editor({ value: n, onChange: r }) });
  const s = e.type ?? "string";
  if (s === "enum" && e.values != null)
    return /* @__PURE__ */ t(
      In,
      {
        "aria-label": e.title ?? e.name,
        className: dt.value,
        options: e.values,
        value: String(n ?? ""),
        onChange: (a) => r(a.target.value)
      }
    );
  if (s === "boolean")
    return /* @__PURE__ */ t(
      In,
      {
        "aria-label": e.title ?? e.name,
        className: dt.value,
        options: [
          { value: "", label: "" },
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        value: n == null ? "" : String(n),
        onChange: (a) => {
          a.target.value === "" ? r(void 0) : r(a.target.value === "true");
        }
      }
    );
  const o = s === "number" ? { type: "number" } : s === "date" ? { type: "date" } : { type: "text" };
  return /* @__PURE__ */ t(
    "input",
    {
      "aria-label": e.title ?? e.name,
      className: dt.value,
      ...o,
      value: n == null ? "" : String(n),
      onChange: (a) => r(s === "number" && a.target.value !== "" ? Number(a.target.value) : a.target.value)
    }
  );
}
function zg({
  properties: e,
  logicalOperator: n = "And",
  filterCaseSensitivity: r = "CaseInsensitive",
  initialRows: s,
  uniqueFilters: o = !1,
  className: a,
  viewChanged: u,
  items: l,
  children: i
}) {
  const [h, x] = V(
    () => s != null && s.length > 0 ? s.map((y, m) => ({ id: m, ...y })) : [{ id: 0, property: e[0]?.name ?? "", operator: kn[e[0]?.type ?? "string"], value: void 0 }]
  ), _ = (y, m) => {
    x((p) => p.map((S) => S.id === y ? { ...S, ...m } : S));
  }, z = () => {
    const y = h[h.length - 1], m = Math.max(0, ...h.map((S) => S.id)) + 1, p = e[0];
    x((S) => [
      ...S,
      {
        id: m,
        property: y?.property ?? p?.name ?? "",
        operator: kn[e.find((f) => f.name === (y?.property ?? p?.name))?.type ?? "string"],
        value: void 0
      }
    ]);
  }, k = (y) => {
    x((m) => m.length > 1 ? m.filter((p) => p.id !== y) : m);
  }, C = Se(() => {
    const y = ["IsNull", "IsEmpty", "IsNotNull", "IsNotEmpty"], m = [];
    for (const p of h) {
      if (p.property === "" || (p.value == null || p.value === "") && !y.includes(p.operator)) continue;
      const f = {
        property: p.property,
        operator: p.operator,
        value: p.value
      };
      p.secondOperator != null && p.secondValue !== void 0 && (f.secondOperator = p.secondOperator, f.secondValue = p.secondValue, f.logicalOperator = p.logicalOperator ?? "And"), m.push(f);
    }
    return m;
  }, [h]), I = Se(() => l == null || C.length === 0 ? l : vr(l, { operator: n, filters: C }, { caseSensitivity: r }), [l, C, n, r]);
  De(() => {
    u != null && l != null && u(I ?? []);
  }, [I]);
  const D = (y) => e.find((m) => m.name === y) ?? { name: y, type: "string" };
  return /* @__PURE__ */ N("div", { className: [dt.filter, a].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ t("div", { className: dt.rows, role: "group", "aria-label": "Filter conditions", children: h.map((y, m) => {
      const p = D(y.property), S = o ? [kn[p.type ?? "string"]] : br;
      return /* @__PURE__ */ N("div", { className: dt.row, children: [
        m > 0 ? /* @__PURE__ */ t("span", { className: dt.join, "aria-hidden": "true", children: n }) : null,
        /* @__PURE__ */ t(
          In,
          {
            "aria-label": `Condition ${m + 1} property`,
            className: dt.property,
            value: y.property,
            onChange: (f) => {
              const g = e.find((c) => c.name === f.target.value);
              _(y.id, {
                property: f.target.value,
                operator: kn[g?.type ?? "string"],
                value: void 0
              });
            },
            options: e.map((f) => ({ value: f.name, label: f.title ?? f.name }))
          }
        ),
        /* @__PURE__ */ t(
          In,
          {
            "aria-label": `Condition ${m + 1} operator`,
            className: dt.operator,
            value: y.operator,
            onChange: (f) => _(y.id, { operator: f.target.value }),
            options: S.map((f) => ({ value: f, label: wo[f] }))
          }
        ),
        /* @__PURE__ */ t($o, { property: p, value: y.value, onChange: (f) => _(y.id, { value: f }) }),
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: dt.remove,
            "aria-label": `Remove condition ${m + 1}`,
            onClick: () => k(y.id),
            children: "×"
          }
        )
      ] }, y.id);
    }) }),
    /* @__PURE__ */ N("div", { className: dt.bar, children: [
      /* @__PURE__ */ t("button", { type: "button", className: dt.add, onClick: z, children: "Add filter" }),
      i != null ? /* @__PURE__ */ t("div", { className: dt.custom, children: i }) : null,
      l != null ? /* @__PURE__ */ N("span", { className: dt.summary, "aria-live": "polite", children: [
        I?.length ?? 0,
        " of ",
        l.length
      ] }) : null
    ] })
  ] });
}
const No = "_pager_15jh8_1", So = "_alignLeft_15jh8_10", Do = "_alignCenter_15jh8_14", zo = "_alignRight_15jh8_18", Co = "_alignJustify_15jh8_22", Oo = "_summary_15jh8_26", Io = "_controls_15jh8_31", Mo = "_button_15jh8_37", jo = "_active_15jh8_73", Eo = "_ellipsis_15jh8_85", To = "_size_15jh8_91", rt = {
  pager: No,
  alignLeft: So,
  alignCenter: Do,
  alignRight: zo,
  alignJustify: Co,
  summary: Oo,
  controls: Io,
  button: Mo,
  active: jo,
  ellipsis: Eo,
  size: To
};
function Ao(e, n, r, s) {
  return e.replace("{0}", String(n)).replace("{1}", String(r)).replace("{2}", String(s));
}
function Zn(e, n) {
  return e.replace("{0}", String(n));
}
function Lo(e, n, r) {
  if (n <= r) return Array.from({ length: n }, (l, i) => i + 1);
  const s = Math.floor(r / 2);
  let o = Math.max(1, e - s);
  const a = Math.min(n, o + r - 1);
  o = Math.max(1, a - r + 1);
  const u = [];
  for (let l = o; l <= a; l++) u.push(l);
  return o > 2 && u.unshift("ellipsis"), o > 1 && u.unshift(1), a < n - 1 && u.push("ellipsis"), a < n && u.push(n), u;
}
function Ro({
  count: e,
  pageSize: n,
  page: r,
  pageNumber: s,
  defaultPage: o = 1,
  pageSizeOptions: a,
  pageNumbersCount: u = 5,
  alwaysVisible: l = !1,
  horizontalAlign: i = "left",
  showPagingSummary: h,
  showSummary: x,
  showPageSizeSelector: _ = !0,
  pagingSummaryFormat: z = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: k,
  summaryTemplate: C,
  pageSizeText: I = "Items per page",
  firstPageTitle: D = "First page",
  prevPageTitle: y = "Previous page",
  nextPageTitle: m = "Next page",
  lastPageTitle: p = "Last page",
  pageTitleFormat: S = "Page {0}",
  pageAriaLabelFormat: f = "Page {0}",
  onPageChange: g,
  onPageSizeChange: c,
  ariaLabel: v = "Pagination",
  className: $
}) {
  const U = r ?? s ?? o, [R, O] = V(U), d = r !== void 0 || s !== void 0, w = d ? U : R, M = Math.max(1, Math.ceil(e / n)), L = Math.min(Math.max(1, w), M), T = h ?? x ?? !0, J = l || M > 1, se = Lo(L, M, u), de = q(
    (X) => {
      const W = Math.min(Math.max(1, X), M);
      d || O(W);
      const B = (W - 1) * n;
      g?.({ page: W, skip: B, top: n, pageCount: M, pageSize: n });
    },
    [d, g, M, n]
  ), ne = i === "center" ? rt.alignCenter : i === "right" ? rt.alignRight : i === "justify" ? rt.alignJustify : rt.alignLeft, oe = { count: e, pageNumber: L, pageSize: n, pageCount: M }, ae = (X) => {
    const W = Array.from(X.currentTarget.querySelectorAll("button[data-pager-page]")), B = W.indexOf(document.activeElement);
    B !== -1 && (X.key === "ArrowRight" || X.key === "ArrowDown" ? (X.preventDefault(), (W[B + 1] ?? W[0])?.focus()) : X.key === "ArrowLeft" || X.key === "ArrowUp" ? (X.preventDefault(), (W[B - 1] ?? W[W.length - 1])?.focus()) : X.key === "Home" ? (X.preventDefault(), W[0]?.focus()) : X.key === "End" && (X.preventDefault(), W[W.length - 1]?.focus()));
  };
  return J ? /* @__PURE__ */ N("nav", { className: [rt.pager, ne, $].filter(Boolean).join(" "), "aria-label": v, children: [
    T && /* @__PURE__ */ t("span", { className: rt.summary, "aria-live": "polite", children: k ? k(oe) : C ? C({ count: e, pageNumber: L, pageSize: n }) : Ao(z, L, M, e) }),
    /* @__PURE__ */ N("div", { className: rt.controls, role: "group", "aria-label": v, onKeyDown: ae, children: [
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: rt.button,
          disabled: L <= 1,
          onClick: () => de(1),
          "aria-label": D,
          title: D,
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
          "aria-label": y,
          title: y,
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
            "aria-label": Zn(f, X),
            title: Zn(S, X),
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
    _ && a && a.length > 0 && /* @__PURE__ */ N("label", { className: rt.size, children: [
      /* @__PURE__ */ t("span", { children: I }),
      /* @__PURE__ */ t(
        "select",
        {
          value: n,
          onChange: (X) => c?.(Number(X.target.value)),
          "aria-label": I,
          children: a.map((X) => /* @__PURE__ */ t("option", { value: X, children: X }, X))
        }
      )
    ] })
  ] }) : null;
}
function Pn(e) {
  const { pageNumber: n, onPageChange: r, summaryTemplate: s, showSummary: o, ...a } = e;
  return /* @__PURE__ */ t(
    Ro,
    {
      page: n,
      showPagingSummary: o,
      pagingSummaryFormat: "Page {0} of {1}",
      pageAriaLabelFormat: "{0}",
      pageTitleFormat: "{0}",
      alwaysVisible: !0,
      pagingSummaryTemplate: s ? (l) => s({ count: l.count, pageNumber: l.pageNumber, pageSize: l.pageSize }) : void 0,
      onPageChange: r ? (l) => r(l.page) : void 0,
      ...a
    }
  );
}
function Bo(e, n, r, s, o, a) {
  if (!n || !r) return e.map((i) => ({ type: "row", row: i }));
  const u = /* @__PURE__ */ new Map();
  e.forEach((i) => {
    const h = String(o(i, n) ?? ""), x = u.get(h);
    x ? x.push(i) : u.set(h, [i]);
  });
  const l = [];
  return u.forEach((i, h) => {
    const x = i[0], _ = x != null ? o(x, n) : void 0;
    l.push({
      type: "group",
      group: { key: h, display: a(_), property: n, title: r.title ?? n, count: i.length }
    }), s.has(h) && i.forEach((z) => l.push({ type: "row", row: z }));
  }), l;
}
function wn(e, n) {
  return e.property ?? `col-${n}`;
}
function Po(e, n) {
  const r = {};
  let s = 0;
  return e.forEach(({ key: o, column: a }) => {
    if (!a.frozen) return;
    r[o] = s === 0 ? "0px" : `${s}px`;
    const u = n[o] ?? a.width ?? "8rem";
    s += parseFloat(u);
  }), r;
}
function qo(e, n) {
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
function an(e, n) {
  if (n != null)
    return Mn(e, n);
}
function Jn(e, n) {
  if (n == null || n === "") return String(e ?? "");
  const r = /^N(\d+)$/i.exec(n);
  if (r && typeof e == "number") return e.toFixed(Number(r[1]));
  if (n === "d" || n === "D") {
    const s = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return s != null && !Number.isNaN(s.getTime()) ? s.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const Qn = ["Ascending", "Descending", null];
function Fo(e, n, r = {}) {
  const s = e.find((a) => a.property === n), o = Qn[(s ? Qn.indexOf(s.sortOrder) : -1) + 1] ?? null;
  return o == null ? e.filter((a) => a.property !== n) : r.multi ? [...e.filter((a) => a.property !== n), { property: n, sortOrder: o }] : [{ property: n, sortOrder: o }];
}
function Ko(e, n) {
  return io(e, n);
}
function Ho(e, n, r) {
  const s = Math.max(1, Math.ceil(e.length / r)), o = Math.min(Math.max(1, n), s), a = (o - 1) * r;
  return { items: e.slice(a, a + r), pageCount: s, pageNumber: o, total: e.length };
}
function Wo(e, n, r = {}) {
  const s = [...n.filters.entries()].filter(([, l]) => l.value !== "" && l.value !== void 0).map(([l, i]) => ({
    property: l,
    operator: i.operator ?? "Contains",
    value: qo(i.value, r.types?.[l] ?? "string")
  })), o = s.length > 0 ? vr(e, { operator: r.logicalOperator ?? "And", filters: s }, {
    logicalOperator: r.logicalOperator ?? "And",
    caseSensitivity: r.caseSensitivity ?? "CaseInsensitive"
  }) : e, a = Ko(o, n.sorts);
  return { ...Ho(a, n.pageNumber, n.pageSize), sorts: n.sorts, filters: n.filters, pageSize: n.pageSize };
}
function Uo(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
const Vo = "_grid_156jh_1", Xo = "_toolbar_156jh_8", Go = "_picker_156jh_13", Yo = "_pickerButton_156jh_17", Zo = "_pickerPanel_156jh_31", Jo = "_pickerItem_156jh_46", Qo = "_groupPanel_156jh_55", ea = "_groupPanelActive_156jh_66", ta = "_groupPanelText_156jh_70", na = "_groupChip_156jh_74", ra = "_groupRemove_156jh_85", sa = "_groupRow_156jh_94", oa = "_groupCell_156jh_98", aa = "_groupToggle_156jh_103", la = "_editRow_156jh_116", ca = "_editCell_156jh_120", ia = "_editInput_156jh_125", da = "_commandCell_156jh_135", ua = "_commandButton_156jh_141", fa = "_data_156jh_156", _a = "_table_156jh_163", pa = "_header_156jh_169", ha = "_center_156jh_181", ma = "_right_156jh_185", ga = "_sortButton_156jh_189", ba = "_sortIndicator_156jh_207", ya = "_sortIndex_156jh_211", va = "_cell_156jh_222", xa = "_clickable_156jh_236", ka = "_frozen_156jh_244", wa = "_selected_156jh_250", $a = "_resizeHandle_156jh_254", Na = "_filterCell_156jh_272", Sa = "_filterSelect_156jh_280", Da = "_filterInput_156jh_290", za = "_empty_156jh_301", Ca = "_loading_156jh_307", Oa = "_visuallyHidden_156jh_317", pe = {
  grid: Vo,
  toolbar: Xo,
  picker: Go,
  pickerButton: Yo,
  pickerPanel: Zo,
  pickerItem: Jo,
  groupPanel: Qo,
  groupPanelActive: ea,
  groupPanelText: ta,
  groupChip: na,
  groupRemove: ra,
  groupRow: sa,
  groupCell: oa,
  groupToggle: aa,
  editRow: la,
  editCell: ca,
  editInput: ia,
  commandCell: da,
  commandButton: ua,
  data: fa,
  table: _a,
  header: pa,
  center: ha,
  right: ma,
  sortButton: ga,
  sortIndicator: ba,
  sortIndex: ya,
  cell: va,
  clickable: xa,
  frozen: ka,
  selected: wa,
  resizeHandle: $a,
  filterCell: Na,
  filterSelect: Sa,
  filterInput: Da,
  empty: za,
  loading: Ca,
  visuallyHidden: Oa
}, Ia = {
  Ascending: "ascending",
  Descending: "descending"
};
function er(e, n) {
  return e.filterable ?? n;
}
function Ma(e, n) {
  return e.sortable ?? n;
}
function ja(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dt-grid-resize]");
}
function Cg({
  columns: e,
  rows: n,
  rowKey: r,
  allowSorting: s = !1,
  allowMultiColumnSorting: o = !1,
  showSortIndex: a = !1,
  allowFiltering: u = !1,
  filterCaseSensitivity: l = "CaseInsensitive",
  logicalOperator: i = "And",
  allowPaging: h = !1,
  pageSize: x = 10,
  pageSizeOptions: _,
  pageNumbersCount: z = 5,
  pagerPosition: k = "Bottom",
  showPagingSummary: C = !0,
  showPageSizeSelector: I = !0,
  selectionMode: D = "None",
  selectedKeys: y,
  onSelectionChange: m,
  showColumnPicker: p = !1,
  columnPickerText: S = "Columns",
  allowColumnResize: f = !1,
  allowColumnReorder: g = !1,
  allowGrouping: c = !1,
  groupPanelText: v = "Drag a column header here to group",
  groupExpanded: $ = !0,
  editMode: U = "None",
  allowRowCreate: R = !1,
  onRowUpdate: O,
  onRowCreate: d,
  onRowDelete: w,
  isLoading: M = !1,
  empty: L = "No records found",
  ariaLabel: T,
  className: J,
  onRowClick: se
}) {
  const [de, ne] = V([]), [oe, ae] = V(/* @__PURE__ */ new Map()), [X, W] = V(1), [B, te] = V(x), [he, Z] = V(
    () => e.map((A, P) => wn(A, P))
  ), [me, ye] = V(
    () => new Set(e.map((A, P) => A.visible !== !1 ? wn(A, P) : "").filter(Boolean))
  ), [ze, He] = V({}), [Me, Xe] = V(!1), [be, Ge] = V(null), [et, We] = V(null), [Ze, Fe] = V(null), [Ye, H] = V({}), b = le(null), E = le(null), K = Se(() => {
    const A = /* @__PURE__ */ new Map();
    return e.forEach((P, ue) => A.set(wn(P, ue), P)), A;
  }, [e]), Q = Se(
    () => he.filter((A) => me.has(A)).map((A) => ({ key: A, column: K.get(A) })).filter((A) => A.column != null),
    [he, me, K]
  ), G = Se(
    () => Po(Q, ze),
    [Q, ze]
  ), fe = U !== "None" || w != null || R, ke = Se(
    () => Wo(n, { sorts: de, filters: oe, pageNumber: X, pageSize: B }, {
      logicalOperator: i,
      caseSensitivity: l,
      types: Object.fromEntries(
        e.filter((A) => A.type != null && A.property != null).map((A) => [A.property, A.type])
      )
    }),
    [n, de, oe, X, B, i, l, e]
  ), Re = Se(
    () => be ? e.find((A) => A.property === be) : void 0,
    [be, e]
  ), je = Se(
    () => et ?? new Set($ ? ke.items.map((A) => String(an(A, be ?? "") ?? "")) : []),
    [et, $, ke.items, be]
  ), tt = Se(
    () => Bo(
      ke.items,
      be ?? void 0,
      Re,
      je,
      an,
      (A) => Jn(A, Re?.format)
    ),
    [ke.items, be, Re, je]
  ), gt = Se(
    () => be ? Q.filter((A) => A.column.property !== be) : Q,
    [Q, be]
  ), Y = (A) => {
    A !== "" && ne(Fo(de, A, { multi: o }));
  }, $e = (A, P) => {
    ae((ue) => {
      const ve = new Map(ue);
      return ve.set(A, P), ve;
    }), W(1);
  }, F = (A) => {
    te(A), W(1);
  }, ee = (A) => {
    if (D === "None") return;
    const P = r(A), ue = y ?? [];
    let ve;
    D === "Single" ? ve = ue.length === 1 && ue[0] === P ? [] : [P] : ve = ue.includes(P) ? ue.filter((nt) => nt !== P) : [...ue, P], m?.(ve);
  }, ie = (A) => {
    se?.(A);
  }, _e = (A, P, ue) => {
    b.current = { key: A, startX: P, startWidth: ue };
  }, ce = (A) => {
    const P = b.current;
    if (!P) return;
    const ue = A - P.startX, ve = Math.max(48, P.startWidth + ue);
    He((nt) => ({ ...nt, [P.key]: `${ve}px` }));
  }, ge = () => {
    b.current = null;
  }, Ae = (A) => {
    E.current = A;
  }, Be = (A) => {
    const P = E.current;
    E.current = null, !(!P || P === A) && Z((ue) => {
      const ve = [...ue], nt = ve.indexOf(P), ft = ve.indexOf(A);
      return nt < 0 || ft < 0 ? ue : (ve.splice(nt, 1), ve.splice(ft, 0, P), ve);
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
      const ue = P ?? new Set($ ? ke.items.map((nt) => String(an(nt, be ?? "") ?? "")) : []), ve = new Set(ue);
      return ve.has(A) ? ve.delete(A) : ve.add(A), ve;
    });
  }, Ee = (A) => {
    const P = {};
    e.forEach((ue) => {
      ue.property && (P[ue.property] = an(A, ue.property));
    }), H(P), Fe(String(r(A)));
  }, Je = () => {
    const A = {};
    e.forEach((P) => {
      P.property && P.type === "boolean" && (A[P.property] = !1);
    }), H(A), Fe("__new__");
  }, lt = () => {
    Fe(null), H({});
  }, St = (A) => {
    if (Ze === "__new__") {
      const P = Object.fromEntries(
        e.filter((ue) => ue.property).map((ue) => [ue.property, Ye[ue.property]])
      );
      d?.(P);
    } else if (A != null) {
      const P = { ...A, ...Ye };
      O?.(A, P);
    }
    lt();
  }, yn = h && (k === "Top" || k === "TopAndBottom"), en = h && (k === "Bottom" || k === "TopAndBottom"), wr = u && e.some((A) => er(A, u)), $r = (A, P, ue) => A.render ? A.render(P, { index: 0 }) : Jn(an(P, A.property), A.format), Nr = (A) => {
    const P = [pe.cell];
    return A.align === "center" && P.push(pe.center), A.align === "right" && P.push(pe.right), A.frozen && P.push(pe.frozen), P.join(" ");
  };
  return /* @__PURE__ */ N("div", { className: [pe.grid, J].filter(Boolean).join(" "), children: [
    yn && /* @__PURE__ */ t(
      Pn,
      {
        pageNumber: ke.pageNumber,
        pageSize: ke.pageSize,
        count: ke.total,
        pageSizeOptions: _,
        pageNumbersCount: z,
        showSummary: C,
        showPageSizeSelector: I,
        ariaLabel: en ? "Pagination (top)" : "Pagination",
        onPageChange: W,
        onPageSizeChange: F
      }
    ),
    (c || R || p) && /* @__PURE__ */ N("div", { className: pe.toolbar, children: [
      c && /* @__PURE__ */ t(
        "div",
        {
          className: [pe.groupPanel, be ? pe.groupPanelActive : ""].filter(Boolean).join(" "),
          "data-dt-grid-group-panel": !0,
          onDragOver: c ? (A) => A.preventDefault() : void 0,
          onDrop: c ? re : void 0,
          children: be ? /* @__PURE__ */ N("span", { className: pe.groupChip, children: [
            Re?.title ?? be,
            ":",
            " ",
            /* @__PURE__ */ t("button", { type: "button", className: pe.groupRemove, onClick: Ce, "aria-label": `Remove group by ${Re?.title ?? be}`, children: "×" })
          ] }) : /* @__PURE__ */ t("span", { className: pe.groupPanelText, children: v })
        }
      ),
      R && /* @__PURE__ */ t("button", { type: "button", className: pe.pickerButton, onClick: Je, children: "Add row" }),
      p && /* @__PURE__ */ N("div", { className: pe.picker, children: [
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: pe.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": Me,
            onClick: () => Xe((A) => !A),
            children: S
          }
        ),
        Me && /* @__PURE__ */ t("div", { className: pe.pickerPanel, role: "menu", "aria-label": S, children: e.map((A, P) => {
          const ue = wn(A, P);
          return /* @__PURE__ */ N("label", { className: pe.pickerItem, children: [
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
    /* @__PURE__ */ N("div", { className: pe.data, children: [
      /* @__PURE__ */ N(
        "table",
        {
          className: pe.table,
          role: "grid",
          "aria-rowcount": ke.total + 1,
          "aria-label": T,
          "aria-busy": M || void 0,
          children: [
            /* @__PURE__ */ N("colgroup", { children: [
              gt.map(({ key: A, column: P }) => /* @__PURE__ */ t(
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
            /* @__PURE__ */ N("thead", { children: [
              /* @__PURE__ */ N("tr", { children: [
                gt.map(({ key: A, column: P }) => {
                  const ue = Ma(P, s), ve = de.find((Te) => Te.property === P.property), nt = ve ? de.indexOf(ve) + 1 : 0, ft = P.align ?? "left";
                  return /* @__PURE__ */ N(
                    "th",
                    {
                      "aria-sort": ue && ve ? Ia[ve.sortOrder] : "none",
                      className: [
                        pe.header,
                        ft === "center" ? pe.center : "",
                        ft === "right" ? pe.right : "",
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
                        ue ? /* @__PURE__ */ N(
                          "button",
                          {
                            type: "button",
                            className: pe.sortButton,
                            onClick: () => P.property != null && Y(P.property),
                            "aria-label": ve ? ve.sortOrder === "Ascending" ? `Sort ${P.title ?? P.property} descending` : `Sort ${P.title ?? P.property} ascending` : `Sort ${P.title ?? P.property} ascending`,
                            children: [
                              P.title ?? P.property,
                              ve && /* @__PURE__ */ t("span", { className: pe.sortIndicator, "aria-hidden": "true", children: ve.sortOrder === "Ascending" ? "▲" : "▼" }),
                              nt > 1 && a && /* @__PURE__ */ t("span", { className: pe.sortIndex, children: nt })
                            ]
                          }
                        ) : P.title ?? P.property,
                        f && /* @__PURE__ */ t(
                          "span",
                          {
                            className: pe.resizeHandle,
                            "data-dt-grid-resize": !0,
                            role: "separator",
                            "aria-orientation": "vertical",
                            "aria-label": `Resize ${P.title ?? P.property}`,
                            onMouseDown: (Te) => {
                              Te.preventDefault(), Te.stopPropagation();
                              const tn = ze[A] ?? P.width, vn = tn ? parseFloat(tn) : 96;
                              _e(A, Te.clientX, Number.isFinite(vn) ? vn : 96);
                            },
                            onMouseMove: (Te) => {
                              b.current?.key === A && ce(Te.clientX);
                            },
                            onMouseUp: ge,
                            onMouseLeave: () => {
                              b.current?.key === A && ge();
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
              wr && /* @__PURE__ */ t("tr", { children: gt.map(({ key: A, column: P }) => {
                if (!er(P, u)) return /* @__PURE__ */ t("td", { className: pe.filterCell }, A);
                const ue = oe.get(P.property ?? "");
                return /* @__PURE__ */ N("td", { className: pe.filterCell, children: [
                  /* @__PURE__ */ N("label", { className: pe.visuallyHidden, htmlFor: `df-${P.property}`, children: [
                    "Filter ",
                    P.title ?? P.property
                  ] }),
                  /* @__PURE__ */ t(
                    "select",
                    {
                      id: `df-${P.property}`,
                      className: pe.filterSelect,
                      value: ue?.operator ?? Uo(P.type ?? "string"),
                      onChange: (ve) => $e(P.property ?? "", { ...ue, operator: ve.target.value }),
                      "aria-label": `${P.title ?? P.property} operator`,
                      children: br.filter((ve) => ve !== "Custom").map((ve) => /* @__PURE__ */ t("option", { value: ve, children: ve }, ve))
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
            /* @__PURE__ */ N("tbody", { children: [
              Ze === "__new__" && /* @__PURE__ */ N("tr", { className: pe.editRow, children: [
                gt.map(({ key: A, column: P }) => /* @__PURE__ */ t("td", { className: pe.editCell, children: P.property && /* @__PURE__ */ t(
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
                fe && /* @__PURE__ */ N("td", { className: pe.editCell, children: [
                  /* @__PURE__ */ t("button", { type: "button", className: pe.commandButton, onClick: () => St(), children: "Save" }),
                  /* @__PURE__ */ t("button", { type: "button", className: pe.commandButton, onClick: lt, children: "Cancel" })
                ] })
              ] }),
              tt.map((A) => {
                if (A.type === "group" && A.group) {
                  const ft = je.has(A.group.key);
                  return /* @__PURE__ */ t("tr", { className: pe.groupRow, children: /* @__PURE__ */ t("td", { colSpan: gt.length + (fe ? 1 : 0), className: pe.groupCell, children: /* @__PURE__ */ N(
                    "button",
                    {
                      type: "button",
                      className: pe.groupToggle,
                      "aria-expanded": ft,
                      onClick: () => we(A.group.key),
                      children: [
                        /* @__PURE__ */ t("span", { "aria-hidden": "true", children: ft ? "▼" : "▶" }),
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
                const P = A.row, ue = r(P), ve = (y ?? []).includes(ue), nt = Ze != null && Ze === String(ue);
                return /* @__PURE__ */ N(
                  "tr",
                  {
                    className: [
                      se || D !== "None" ? pe.clickable : "",
                      ve ? pe.selected : "",
                      nt ? pe.editRow : ""
                    ].filter(Boolean).join(" "),
                    "aria-selected": D !== "None" ? ve : void 0,
                    onClick: se || D !== "None" ? (ft) => {
                      ja(ft.target) || (ie(P), ee(P));
                    } : void 0,
                    children: [
                      gt.map(({ key: ft, column: Te }) => /* @__PURE__ */ t(
                        "td",
                        {
                          className: Nr(Te),
                          style: Te.frozen ? { left: G[ft] } : void 0,
                          children: nt && Te.property ? /* @__PURE__ */ t(
                            "input",
                            {
                              className: pe.editInput,
                              type: Te.type === "number" ? "number" : Te.type === "boolean" ? "checkbox" : "text",
                              checked: Te.type === "boolean" ? !!Ye[Te.property] : void 0,
                              value: Te.type === "boolean" ? void 0 : String(Ye[Te.property] ?? ""),
                              onChange: (tn) => H((vn) => ({
                                ...vn,
                                [Te.property]: Te.type === "boolean" ? tn.target.checked : tn.target.value
                              })),
                              "aria-label": `${Te.title ?? Te.property} (edit)`
                            }
                          ) : $r(Te, P)
                        },
                        ft
                      )),
                      fe && /* @__PURE__ */ t("td", { className: pe.commandCell, children: nt ? /* @__PURE__ */ N(Oe, { children: [
                        /* @__PURE__ */ t("button", { type: "button", className: pe.commandButton, onClick: () => St(P), children: "Save" }),
                        /* @__PURE__ */ t("button", { type: "button", className: pe.commandButton, onClick: lt, children: "Cancel" })
                      ] }) : /* @__PURE__ */ N(Oe, { children: [
                        U !== "None" && /* @__PURE__ */ t("button", { type: "button", className: pe.commandButton, onClick: () => Ee(P), children: "Edit" }),
                        w && /* @__PURE__ */ t("button", { type: "button", className: pe.commandButton, onClick: () => w(P), children: "Delete" })
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
    en && /* @__PURE__ */ t(
      Pn,
      {
        pageNumber: ke.pageNumber,
        pageSize: ke.pageSize,
        count: ke.total,
        pageSizeOptions: _,
        pageNumbersCount: z,
        showSummary: C,
        showPageSizeSelector: I,
        ariaLabel: yn ? "Pagination (bottom)" : "Pagination",
        onPageChange: W,
        onPageSizeChange: F
      }
    )
  ] });
}
const Ea = "_wrap_1ts67_1", Ta = "_grid_1ts67_7", Aa = "_stacked_1ts67_13", La = "_item_1ts67_19", Ra = "_empty_1ts67_25", ln = {
  wrap: Ea,
  grid: Ta,
  stacked: Aa,
  item: La,
  empty: Ra
};
function Og({
  data: e,
  pageSize: n = 10,
  pageSizeOptions: r,
  wrapItems: s = !1,
  itemTemplate: o,
  emptyMessage: a = "No records found",
  emptyTemplate: u,
  loadingTemplate: l,
  isLoading: i = !1,
  showPageSizeSelector: h = !0,
  className: x,
  ariaLabel: _ = "Data list"
}) {
  const [z, k] = V(1), [C, I] = V(n), D = e.length, y = Math.max(1, Math.ceil(D / C)), m = Math.min(Math.max(1, z), y), p = Se(() => {
    const f = (m - 1) * C;
    return e.slice(f, f + C);
  }, [e, m, C]), S = s ? ln.grid : ln.stacked;
  return /* @__PURE__ */ N("div", { className: [ln.wrap, x].filter(Boolean).join(" "), "aria-label": _, children: [
    i && l != null ? l : D === 0 ? u ?? /* @__PURE__ */ t("div", { className: ln.empty, children: a }) : /* @__PURE__ */ t("div", { className: S, children: p.map((f, g) => /* @__PURE__ */ t("div", { className: ln.item, children: o ? o(f, g) : String(f) }, g)) }),
    /* @__PURE__ */ t(
      Pn,
      {
        pageNumber: m,
        pageSize: C,
        count: D,
        pageSizeOptions: r,
        showPageSizeSelector: h,
        onPageChange: k,
        onPageSizeChange: (f) => {
          I(f), k(1);
        }
      }
    )
  ] });
}
const Ba = "_label_11cq1_1", Pa = {
  label: Ba
}, Ig = qe(
  function({ className: n, children: r, ...s }, o) {
    return /* @__PURE__ */ t("label", { ref: o, className: [Pa.label, n].filter(Boolean).join(" "), ...s, children: r });
  }
), qa = "_input_6qj37_1", Fa = "_invalid_6qj37_31", Ka = "_xs_6qj37_37", Ha = "_sm_6qj37_43", Wa = "_md_6qj37_49", Ua = "_lg_6qj37_55", Va = "_xl_6qj37_61", En = {
  input: qa,
  invalid: Fa,
  xs: Ka,
  sm: Ha,
  md: Wa,
  lg: Ua,
  xl: Va
}, Mg = qe(function({ size: n = "md", invalid: r = !1, className: s, ...o }, a) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: a,
      className: [En.input, En[n], r ? En.invalid : null, s].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...o
    }
  );
}), Xa = "_checkbox_fkb13_1", Ga = {
  checkbox: Xa
}, jg = qe(function({ className: n, ...r }, s) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: s,
      type: "checkbox",
      className: [Ga.checkbox, n].filter(Boolean).join(" "),
      ...r
    }
  );
}), Ya = {
  switch: "_switch_ew7ga_1"
}, Za = qe(function({ className: n, ...r }, s) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: s,
      type: "checkbox",
      role: "switch",
      className: [Ya.switch, n].filter(Boolean).join(" "),
      ...r
    }
  );
}), Ja = "_trigger_dbm3e_1", Qa = "_tooltip_dbm3e_7", el = "_top_dbm3e_34", tl = "_right_dbm3e_40", nl = "_bottom_dbm3e_46", rl = "_left_dbm3e_52", sl = "_arrow_dbm3e_58", $n = {
  trigger: Ja,
  tooltip: Qa,
  "se-tooltip-in": "_se-tooltip-in_dbm3e_1",
  top: el,
  right: tl,
  bottom: nl,
  left: rl,
  arrow: sl
};
function Eg({
  content: e,
  children: n,
  placement: r = "top",
  delayMs: s = 300,
  className: o
}) {
  const a = Ue(), u = le(null), [l, i] = V(!1), h = () => {
    u.current = window.setTimeout(() => i(!0), s);
  }, x = () => {
    u.current !== null && (window.clearTimeout(u.current), u.current = null), i(!1);
  };
  De(() => {
    if (!l) return;
    const z = (k) => {
      k.key === "Escape" && x();
    };
    return window.addEventListener("keydown", z), () => window.removeEventListener("keydown", z);
  }, [l]);
  const _ = Wn(n) ? pr(
    n,
    {
      "aria-describedby": [
        n.props["aria-describedby"],
        l ? a : null
      ].filter((z) => typeof z == "string").join(" ") || void 0
    }
  ) : n;
  return /* @__PURE__ */ N(
    "span",
    {
      className: [$n.trigger, o].filter(Boolean).join(" "),
      onMouseEnter: h,
      onMouseLeave: x,
      onFocus: h,
      onBlur: x,
      children: [
        _,
        l && /* @__PURE__ */ N(
          "span",
          {
            role: "tooltip",
            id: a,
            className: [$n.tooltip, $n[r]].filter(Boolean).join(" "),
            children: [
              e,
              /* @__PURE__ */ t("span", { className: $n.arrow, "aria-hidden": "true" })
            ]
          }
        )
      ]
    }
  );
}
const ol = "_dialog_1kllc_1", al = "_sm_1kllc_30", ll = "_md_1kllc_34", cl = "_lg_1kllc_38", il = "_header_1kllc_42", dl = "_title_1kllc_51", ul = "_description_1kllc_58", fl = "_close_1kllc_65", _l = "_body_1kllc_84", pl = "_footer_1kllc_90", At = {
  dialog: ol,
  "se-dialog-in": "_se-dialog-in_1kllc_1",
  sm: al,
  md: ll,
  lg: cl,
  header: il,
  title: dl,
  description: ul,
  close: fl,
  body: _l,
  footer: pl
};
function Tg({
  open: e,
  onClose: n,
  title: r,
  description: s,
  children: o,
  footer: a,
  size: u = "md",
  className: l
}) {
  const i = le(null), h = Ue(), x = Ue();
  return De(() => {
    const _ = i.current;
    _ && (e && !_.open ? _.showModal() : !e && _.open && _.close());
  }, [e]), /* @__PURE__ */ N(
    "dialog",
    {
      ref: i,
      className: [At.dialog, At[u], l].filter(Boolean).join(" "),
      onClose: n,
      "aria-labelledby": r ? h : void 0,
      "aria-describedby": s ? x : void 0,
      children: [
        r && /* @__PURE__ */ N("header", { className: At.header, children: [
          /* @__PURE__ */ N("div", { children: [
            /* @__PURE__ */ t("h2", { id: h, className: At.title, children: r }),
            s && /* @__PURE__ */ t("p", { id: x, className: At.description, children: s })
          ] }),
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: At.close,
              onClick: n,
              "aria-label": "Close dialog",
              children: "×"
            }
          )
        ] }),
        o && /* @__PURE__ */ t("div", { className: At.body, children: o }),
        a && /* @__PURE__ */ t("footer", { className: At.footer, children: a })
      ]
    }
  );
}
const hl = "_viewport_15dkh_1", ml = "_topLeft_15dkh_13", gl = "_topRight_15dkh_20", bl = "_bottomLeft_15dkh_25", yl = "_toast_15dkh_30", vl = "_leaving_15dkh_61", xl = "_info_15dkh_77", kl = "_success_15dkh_82", wl = "_warning_15dkh_87", $l = "_danger_15dkh_92", Nl = "_content_15dkh_97", Sl = "_title_15dkh_102", Dl = "_description_15dkh_125", zl = "_dismiss_15dkh_132", Cl = "_actions_15dkh_151", Ol = "_action_15dkh_151", Il = "_cancel_15dkh_159", Ml = "_progress_15dkh_195", _t = {
  viewport: hl,
  topLeft: ml,
  topRight: gl,
  bottomLeft: bl,
  toast: yl,
  "se-toast-in": "_se-toast-in_15dkh_1",
  leaving: vl,
  "se-toast-out": "_se-toast-out_15dkh_1",
  info: xl,
  success: kl,
  warning: wl,
  danger: $l,
  content: Nl,
  title: Sl,
  description: Dl,
  dismiss: zl,
  actions: Cl,
  action: Ol,
  cancel: Il,
  progress: Ml,
  "se-toast-progress": "_se-toast-progress_15dkh_1"
}, xr = mr(null);
function Ag() {
  const e = hr(xr);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const jl = 200, El = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function Lg({
  children: e,
  durationMs: n = 4e3,
  position: r = "bottom-right",
  pauseOnHover: s = !0,
  className: o
}) {
  const [a, u] = V([]), [l, i] = V(!1), h = le([]), x = le(/* @__PURE__ */ new Map()), _ = le(!1), z = le(0), k = (O) => {
    _.current = O, i(O);
  }, C = q((O) => {
    const d = x.current.get(O);
    d && (window.clearTimeout(d.timeoutId), d.remaining = Math.max(0, d.remaining - (Date.now() - d.startedAt)));
  }, []), I = q((O) => {
    const d = x.current.get(O);
    d && (window.clearTimeout(d.timeoutId), x.current.delete(O));
  }, []), D = q(
    (O) => {
      I(O), u((d) => {
        const w = d.filter((M) => M.id !== O);
        return h.current = w, w;
      });
    },
    [I]
  ), y = q(
    (O) => {
      const d = h.current.find((w) => w.id === O);
      !d || d.leaving || (d.onAutoClose?.(), D(O));
    },
    [D]
  ), m = q(
    (O) => {
      const d = x.current.get(O);
      !d || d.remaining <= 0 || (d.startedAt = Date.now(), d.timeoutId = window.setTimeout(() => y(O), d.remaining));
    },
    [y]
  ), p = q(() => {
    _.current || x.current.forEach((O, d) => C(d)), k(!0);
  }, [C]), S = q(() => {
    x.current.forEach((O, d) => m(d)), k(!1);
  }, [m]);
  De(() => {
    if (!s) return;
    const O = () => {
      document.hidden ? p() : S();
    };
    return document.addEventListener("visibilitychange", O), () => document.removeEventListener("visibilitychange", O);
  }, [s, p, S]);
  const f = q(
    (O) => {
      const d = h.current.find((w) => w.id === O);
      !d || d.leaving || (d.onDismiss?.(), u((w) => {
        const M = w.map((L) => L.id === O ? { ...L, leaving: !0 } : L);
        return h.current = M, M;
      }), window.setTimeout(() => D(O), jl));
    },
    [D]
  ), g = q(
    (O) => {
      if (O.durationMs <= 0) return;
      const d = {
        remaining: O.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      x.current.set(O.id, d), _.current || m(O.id);
    },
    [m]
  ), c = q(
    (O) => {
      const d = h.current.find((M) => M.id === O.id), w = {
        id: O.id ?? ++z.current,
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
      u((M) => {
        const L = d ? M.map((T) => T.id === w.id ? { ...w, leaving: !1 } : T) : [...M, w];
        return h.current = L, L;
      }), d && I(w.id), g(w);
    },
    [n, r, g, I]
  ), v = Se(() => ({ toast: c }), [c]), $ = Se(
    () => Array.from(/* @__PURE__ */ new Set([r, ...a.map((O) => O.position)])),
    [r, a]
  ), U = s ? p : void 0, R = s ? S : void 0;
  return /* @__PURE__ */ N(xr.Provider, { value: v, children: [
    e,
    $.map((O) => /* @__PURE__ */ t(
      "div",
      {
        className: [
          _t.viewport,
          _t[El[O]],
          o
        ].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: U,
        onMouseLeave: R,
        children: a.filter((d) => d.position === O).map((d) => /* @__PURE__ */ N(
          "div",
          {
            role: d.tone === "danger" ? "alert" : "status",
            "data-paused": l ? "true" : "false",
            "data-clickable": d.closeOnClick ? "true" : "false",
            className: [
              _t.toast,
              _t[d.tone],
              d.leaving ? _t.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: d.closeOnClick ? () => f(d.id) : void 0,
            children: [
              /* @__PURE__ */ N("div", { className: _t.content, children: [
                /* @__PURE__ */ t("div", { className: _t.title, children: d.title }),
                d.description && /* @__PURE__ */ t("div", { className: _t.description, children: d.description }),
                (d.action || d.cancel) && /* @__PURE__ */ N("div", { className: _t.actions, children: [
                  d.action && /* @__PURE__ */ t(
                    "button",
                    {
                      type: "button",
                      className: _t.action,
                      onClick: () => {
                        d.action?.onClick?.(), f(d.id);
                      },
                      children: d.action.label
                    }
                  ),
                  d.cancel && /* @__PURE__ */ t(
                    "button",
                    {
                      type: "button",
                      className: _t.cancel,
                      onClick: () => {
                        d.cancel?.onClick?.(), f(d.id);
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
                  className: _t.dismiss,
                  onClick: () => f(d.id),
                  "aria-label": "Dismiss notification",
                  children: "×"
                }
              ),
              d.showProgress && d.durationMs > 0 && /* @__PURE__ */ t(
                "div",
                {
                  className: _t.progress,
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
const Tl = "_alert_1gxt0_1", Al = "_xs_1gxt0_22", Ll = "_sm_1gxt0_32", Rl = "_lg_1gxt0_42", Bl = "_xl_1gxt0_52", Pl = "_info_1gxt0_63", ql = "_success_1gxt0_68", Fl = "_warning_1gxt0_73", Kl = "_danger_1gxt0_78", Hl = "_soft_1gxt0_85", Wl = "_outline_1gxt0_92", Ul = "_solid_1gxt0_100", Vl = "_icon_1gxt0_114", Xl = "_content_1gxt0_120", Gl = "_title_1gxt0_125", Yl = "_body_1gxt0_131", Zl = "_dismiss_1gxt0_137", Dt = {
  alert: Tl,
  xs: Al,
  sm: Ll,
  lg: Rl,
  xl: Bl,
  info: Pl,
  success: ql,
  warning: Fl,
  danger: Kl,
  soft: Hl,
  outline: Wl,
  solid: Ul,
  icon: Vl,
  content: Xl,
  title: Gl,
  body: Yl,
  dismiss: Zl
};
function Rg({
  tone: e = "info",
  variant: n = "soft",
  size: r = "md",
  title: s,
  icon: o,
  children: a,
  dismissible: u = !1,
  onDismiss: l,
  className: i
}) {
  const [h, x] = V(!1);
  if (h)
    return null;
  const _ = () => {
    x(!0), l?.();
  };
  return /* @__PURE__ */ N(
    "div",
    {
      role: "alert",
      className: [Dt.alert, Dt[e], Dt[n], Dt[r], i].filter(Boolean).join(" "),
      children: [
        o != null && /* @__PURE__ */ t("span", { className: Dt.icon, "aria-hidden": "true", children: o }),
        /* @__PURE__ */ N("div", { className: Dt.content, children: [
          s && /* @__PURE__ */ t("div", { className: Dt.title, children: s }),
          a && /* @__PURE__ */ t("div", { className: Dt.body, children: a })
        ] }),
        u && /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: Dt.dismiss,
            onClick: _,
            "aria-label": "Dismiss alert",
            children: "×"
          }
        )
      ]
    }
  );
}
const Jl = "_skeleton_f6f3j_1", Ql = "_text_f6f3j_35", ec = "_circle_f6f3j_40", tc = "_rect_f6f3j_44", tr = {
  skeleton: Jl,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_f6f3j_1",
  text: Ql,
  circle: ec,
  rect: tc
};
function Bg({
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
      className: [tr.skeleton, tr[e], s].filter(Boolean).join(" "),
      style: o
    }
  );
}
const nc = "_row_15qsh_1", rc = "_gapXs_15qsh_7", sc = "_gapSm_15qsh_11", oc = "_gapMd_15qsh_15", ac = "_gapLg_15qsh_19", lc = "_gapXl_15qsh_23", cc = "_start_15qsh_27", ic = "_center_15qsh_31", dc = "_end_15qsh_35", uc = "_stretch_15qsh_39", fc = "_baseline_15qsh_43", _c = "_noWrap_15qsh_99", pc = "_wrapReverse_15qsh_103", hc = "_gapRowXs_15qsh_107", mc = "_gapRowSm_15qsh_111", gc = "_gapRowMd_15qsh_115", bc = "_gapRowLg_15qsh_119", yc = "_gapRowXl_15qsh_123", Ut = {
  row: nc,
  gapXs: rc,
  gapSm: sc,
  gapMd: oc,
  gapLg: ac,
  gapXl: lc,
  start: cc,
  center: ic,
  end: dc,
  stretch: uc,
  baseline: fc,
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
  noWrap: _c,
  wrapReverse: pc,
  gapRowXs: hc,
  gapRowSm: mc,
  gapRowMd: gc,
  gapRowLg: bc,
  gapRowXl: yc
}, vc = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
}, xc = {
  xs: "gapRowXs",
  sm: "gapRowSm",
  md: "gapRowMd",
  lg: "gapRowLg",
  xl: "gapRowXl"
};
function kc(e) {
  return typeof e != "string" ? null : vc[e] ?? null;
}
function wc(e) {
  return typeof e != "string" ? null : xc[e] ?? null;
}
function nr(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function Pg({
  gap: e,
  rowGap: n,
  align: r = "stretch",
  justify: s = "start",
  wrap: o = !0,
  className: a,
  style: u,
  ...l
}) {
  const i = kc(e), h = wc(n), x = {
    ...e != null && !i ? { gap: typeof e == "number" ? `${e}px` : e } : {},
    ...n != null && !h ? { rowGap: typeof n == "number" ? `${n}px` : n } : {},
    ...u
  };
  return /* @__PURE__ */ t(
    "div",
    {
      className: [
        Ut.row,
        Ut[r],
        Ut[`justify-${s}`],
        nr(o) != null ? Ut[nr(o)] : null,
        i ? Ut[i] : null,
        h ? Ut[h] : null,
        a
      ].filter(Boolean).join(" "),
      style: x,
      ...l
    }
  );
}
const $c = "_column_2ch3a_1", Nc = "_Size1_2ch3a_6", Sc = "_Size2_2ch3a_7", Dc = "_Size3_2ch3a_8", zc = "_Size4_2ch3a_9", Cc = "_Size5_2ch3a_10", Oc = "_Size6_2ch3a_11", Ic = "_Size7_2ch3a_12", Mc = "_Size8_2ch3a_13", jc = "_Size9_2ch3a_14", Ec = "_Size10_2ch3a_15", Tc = "_Size11_2ch3a_16", Ac = "_Size12_2ch3a_17", Lc = "_Offset1_2ch3a_18", Rc = "_Offset2_2ch3a_19", Bc = "_Offset3_2ch3a_20", Pc = "_Offset4_2ch3a_21", qc = "_Offset5_2ch3a_22", Fc = "_Offset6_2ch3a_23", Kc = "_Offset7_2ch3a_24", Hc = "_Offset8_2ch3a_25", Wc = "_Offset9_2ch3a_26", Uc = "_Offset10_2ch3a_27", Vc = "_Offset11_2ch3a_28", Xc = "_smSize1_2ch3a_31", Gc = "_smSize2_2ch3a_32", Yc = "_smSize3_2ch3a_33", Zc = "_smSize4_2ch3a_34", Jc = "_smSize5_2ch3a_35", Qc = "_smSize6_2ch3a_36", ei = "_smSize7_2ch3a_37", ti = "_smSize8_2ch3a_38", ni = "_smSize9_2ch3a_39", ri = "_smSize10_2ch3a_40", si = "_smSize11_2ch3a_41", oi = "_smSize12_2ch3a_42", ai = "_smOffset1_2ch3a_43", li = "_smOffset2_2ch3a_44", ci = "_smOffset3_2ch3a_45", ii = "_smOffset4_2ch3a_46", di = "_smOffset5_2ch3a_47", ui = "_smOffset6_2ch3a_48", fi = "_smOffset7_2ch3a_49", _i = "_smOffset8_2ch3a_50", pi = "_smOffset9_2ch3a_51", hi = "_smOffset10_2ch3a_52", mi = "_smOffset11_2ch3a_53", gi = "_mdSize1_2ch3a_57", bi = "_mdSize2_2ch3a_58", yi = "_mdSize3_2ch3a_59", vi = "_mdSize4_2ch3a_60", xi = "_mdSize5_2ch3a_61", ki = "_mdSize6_2ch3a_62", wi = "_mdSize7_2ch3a_63", $i = "_mdSize8_2ch3a_64", Ni = "_mdSize9_2ch3a_65", Si = "_mdSize10_2ch3a_66", Di = "_mdSize11_2ch3a_67", zi = "_mdSize12_2ch3a_68", Ci = "_mdOffset1_2ch3a_69", Oi = "_mdOffset2_2ch3a_70", Ii = "_mdOffset3_2ch3a_71", Mi = "_mdOffset4_2ch3a_72", ji = "_mdOffset5_2ch3a_73", Ei = "_mdOffset6_2ch3a_74", Ti = "_mdOffset7_2ch3a_75", Ai = "_mdOffset8_2ch3a_76", Li = "_mdOffset9_2ch3a_77", Ri = "_mdOffset10_2ch3a_78", Bi = "_mdOffset11_2ch3a_79", Pi = "_lgSize1_2ch3a_83", qi = "_lgSize2_2ch3a_84", Fi = "_lgSize3_2ch3a_85", Ki = "_lgSize4_2ch3a_86", Hi = "_lgSize5_2ch3a_87", Wi = "_lgSize6_2ch3a_88", Ui = "_lgSize7_2ch3a_89", Vi = "_lgSize8_2ch3a_90", Xi = "_lgSize9_2ch3a_91", Gi = "_lgSize10_2ch3a_92", Yi = "_lgSize11_2ch3a_93", Zi = "_lgSize12_2ch3a_94", Ji = "_lgOffset1_2ch3a_95", Qi = "_lgOffset2_2ch3a_96", ed = "_lgOffset3_2ch3a_97", td = "_lgOffset4_2ch3a_98", nd = "_lgOffset5_2ch3a_99", rd = "_lgOffset6_2ch3a_100", sd = "_lgOffset7_2ch3a_101", od = "_lgOffset8_2ch3a_102", ad = "_lgOffset9_2ch3a_103", ld = "_lgOffset10_2ch3a_104", cd = "_lgOffset11_2ch3a_105", id = "_xlSize1_2ch3a_109", dd = "_xlSize2_2ch3a_110", ud = "_xlSize3_2ch3a_111", fd = "_xlSize4_2ch3a_112", _d = "_xlSize5_2ch3a_113", pd = "_xlSize6_2ch3a_114", hd = "_xlSize7_2ch3a_115", md = "_xlSize8_2ch3a_116", gd = "_xlSize9_2ch3a_117", bd = "_xlSize10_2ch3a_118", yd = "_xlSize11_2ch3a_119", vd = "_xlSize12_2ch3a_120", xd = "_xlOffset1_2ch3a_121", kd = "_xlOffset2_2ch3a_122", wd = "_xlOffset3_2ch3a_123", $d = "_xlOffset4_2ch3a_124", Nd = "_xlOffset5_2ch3a_125", Sd = "_xlOffset6_2ch3a_126", Dd = "_xlOffset7_2ch3a_127", zd = "_xlOffset8_2ch3a_128", Cd = "_xlOffset9_2ch3a_129", Od = "_xlOffset10_2ch3a_130", Id = "_xlOffset11_2ch3a_131", Md = "_xxlSize1_2ch3a_136", jd = "_xxlSize2_2ch3a_137", Ed = "_xxlSize3_2ch3a_138", Td = "_xxlSize4_2ch3a_139", Ad = "_xxlSize5_2ch3a_140", Ld = "_xxlSize6_2ch3a_141", Rd = "_xxlSize7_2ch3a_142", Bd = "_xxlSize8_2ch3a_143", Pd = "_xxlSize9_2ch3a_144", qd = "_xxlSize10_2ch3a_145", Fd = "_xxlSize11_2ch3a_146", Kd = "_xxlSize12_2ch3a_147", Hd = "_xxlOffset1_2ch3a_148", Wd = "_xxlOffset2_2ch3a_149", Ud = "_xxlOffset3_2ch3a_150", Vd = "_xxlOffset4_2ch3a_151", Xd = "_xxlOffset5_2ch3a_152", Gd = "_xxlOffset6_2ch3a_153", Yd = "_xxlOffset7_2ch3a_154", Zd = "_xxlOffset8_2ch3a_155", Jd = "_xxlOffset9_2ch3a_156", Qd = "_xxlOffset10_2ch3a_157", eu = "_xxlOffset11_2ch3a_158", tu = "_xxlOrderFirst_2ch3a_159", nu = "_xxlOrderLast_2ch3a_160", ru = "_orderFirst_2ch3a_163", su = "_orderLast_2ch3a_164", ou = "_smOrderFirst_2ch3a_167", au = "_smOrderLast_2ch3a_168", lu = "_mdOrderFirst_2ch3a_172", cu = "_mdOrderLast_2ch3a_173", iu = "_lgOrderFirst_2ch3a_177", du = "_lgOrderLast_2ch3a_178", uu = "_xlOrderFirst_2ch3a_182", fu = "_xlOrderLast_2ch3a_183", cn = {
  column: $c,
  Size1: Nc,
  Size2: Sc,
  Size3: Dc,
  Size4: zc,
  Size5: Cc,
  Size6: Oc,
  Size7: Ic,
  Size8: Mc,
  Size9: jc,
  Size10: Ec,
  Size11: Tc,
  Size12: Ac,
  Offset1: Lc,
  Offset2: Rc,
  Offset3: Bc,
  Offset4: Pc,
  Offset5: qc,
  Offset6: Fc,
  Offset7: Kc,
  Offset8: Hc,
  Offset9: Wc,
  Offset10: Uc,
  Offset11: Vc,
  smSize1: Xc,
  smSize2: Gc,
  smSize3: Yc,
  smSize4: Zc,
  smSize5: Jc,
  smSize6: Qc,
  smSize7: ei,
  smSize8: ti,
  smSize9: ni,
  smSize10: ri,
  smSize11: si,
  smSize12: oi,
  smOffset1: ai,
  smOffset2: li,
  smOffset3: ci,
  smOffset4: ii,
  smOffset5: di,
  smOffset6: ui,
  smOffset7: fi,
  smOffset8: _i,
  smOffset9: pi,
  smOffset10: hi,
  smOffset11: mi,
  mdSize1: gi,
  mdSize2: bi,
  mdSize3: yi,
  mdSize4: vi,
  mdSize5: xi,
  mdSize6: ki,
  mdSize7: wi,
  mdSize8: $i,
  mdSize9: Ni,
  mdSize10: Si,
  mdSize11: Di,
  mdSize12: zi,
  mdOffset1: Ci,
  mdOffset2: Oi,
  mdOffset3: Ii,
  mdOffset4: Mi,
  mdOffset5: ji,
  mdOffset6: Ei,
  mdOffset7: Ti,
  mdOffset8: Ai,
  mdOffset9: Li,
  mdOffset10: Ri,
  mdOffset11: Bi,
  lgSize1: Pi,
  lgSize2: qi,
  lgSize3: Fi,
  lgSize4: Ki,
  lgSize5: Hi,
  lgSize6: Wi,
  lgSize7: Ui,
  lgSize8: Vi,
  lgSize9: Xi,
  lgSize10: Gi,
  lgSize11: Yi,
  lgSize12: Zi,
  lgOffset1: Ji,
  lgOffset2: Qi,
  lgOffset3: ed,
  lgOffset4: td,
  lgOffset5: nd,
  lgOffset6: rd,
  lgOffset7: sd,
  lgOffset8: od,
  lgOffset9: ad,
  lgOffset10: ld,
  lgOffset11: cd,
  xlSize1: id,
  xlSize2: dd,
  xlSize3: ud,
  xlSize4: fd,
  xlSize5: _d,
  xlSize6: pd,
  xlSize7: hd,
  xlSize8: md,
  xlSize9: gd,
  xlSize10: bd,
  xlSize11: yd,
  xlSize12: vd,
  xlOffset1: xd,
  xlOffset2: kd,
  xlOffset3: wd,
  xlOffset4: $d,
  xlOffset5: Nd,
  xlOffset6: Sd,
  xlOffset7: Dd,
  xlOffset8: zd,
  xlOffset9: Cd,
  xlOffset10: Od,
  xlOffset11: Id,
  xxlSize1: Md,
  xxlSize2: jd,
  xxlSize3: Ed,
  xxlSize4: Td,
  xxlSize5: Ad,
  xxlSize6: Ld,
  xxlSize7: Rd,
  xxlSize8: Bd,
  xxlSize9: Pd,
  xxlSize10: qd,
  xxlSize11: Fd,
  xxlSize12: Kd,
  xxlOffset1: Hd,
  xxlOffset2: Wd,
  xxlOffset3: Ud,
  xxlOffset4: Vd,
  xxlOffset5: Xd,
  xxlOffset6: Gd,
  xxlOffset7: Yd,
  xxlOffset8: Zd,
  xxlOffset9: Jd,
  xxlOffset10: Qd,
  xxlOffset11: eu,
  xxlOrderFirst: tu,
  xxlOrderLast: nu,
  orderFirst: ru,
  orderLast: su,
  smOrderFirst: ou,
  smOrderLast: au,
  mdOrderFirst: lu,
  mdOrderLast: cu,
  lgOrderFirst: iu,
  lgOrderLast: du,
  xlOrderFirst: uu,
  xlOrderLast: fu
}, _u = [
  ["", "size", "offset", "order"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xxl", "sizeXxl", "offsetXxl", "orderXxl"]
], pu = {
  first: "orderFirst",
  last: "orderLast"
};
function hu(e) {
  return typeof e == "number" ? { order: e } : {};
}
function qg({ className: e, style: n, ...r }) {
  const s = [cn.column], o = { ...n };
  for (const [v, $, U, R] of _u) {
    const O = r[$], d = r[U], w = r[R];
    if (O != null && s.push(cn[`${v}Size${O}`]), d != null && d > 0 && s.push(cn[`${v}Offset${d}`]), w === "first" || w === "last") {
      const M = `${v}${pu[w]}`;
      cn[M] && s.push(cn[M]);
    } else w != null && Object.assign(o, hu(w));
  }
  const {
    size: a,
    offset: u,
    sizeSm: l,
    offsetSm: i,
    sizeMd: h,
    offsetMd: x,
    sizeLg: _,
    offsetLg: z,
    sizeXl: k,
    offsetXl: C,
    sizeXxl: I,
    offsetXxl: D,
    order: y,
    orderSm: m,
    orderMd: p,
    orderLg: S,
    orderXl: f,
    orderXxl: g,
    ...c
  } = r;
  return /* @__PURE__ */ t("div", { className: [...s, e].filter(Boolean).join(" "), style: o, ...c });
}
const mu = "_stack_afbz7_1", gu = "_gapXs_afbz7_29", bu = "_gapSm_afbz7_33", yu = "_gapMd_afbz7_37", vu = "_gapLg_afbz7_41", xu = "_gapXl_afbz7_45", Vt = {
  stack: mu,
  "dir-row": "_dir-row_afbz7_5",
  "dir-row-reverse": "_dir-row-reverse_afbz7_9",
  "dir-column": "_dir-column_afbz7_13",
  "dir-column-reverse": "_dir-column-reverse_afbz7_17",
  "wrap-nowrap": "_wrap-nowrap_afbz7_21",
  "wrap-wrap-reverse": "_wrap-wrap-reverse_afbz7_25",
  gapXs: gu,
  gapSm: bu,
  gapMd: yu,
  gapLg: vu,
  gapXl: xu,
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
}, ku = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function wu(e) {
  return typeof e != "string" ? null : ku[e] ?? null;
}
function rr(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function Fg({
  orientation: e = "vertical",
  reverse: n = !1,
  wrap: r = !0,
  gap: s = "sm",
  align: o,
  justify: a,
  className: u,
  style: l,
  ...i
}) {
  const h = wu(s), x = e === "horizontal" ? n ? "row-reverse" : "row" : n ? "column-reverse" : "column", _ = {
    ...s != null && !h ? { gap: typeof s == "number" ? `${s}px` : s } : {},
    ...l
  };
  return /* @__PURE__ */ t(
    "div",
    {
      className: [
        Vt.stack,
        Vt[`dir-${x}`],
        rr(r) !== "wrap" ? Vt[`wrap-${rr(r)}`] : null,
        o != null ? Vt[`align-${o}`] : null,
        a != null ? Vt[`justify-${a}`] : null,
        h ? Vt[h] : null,
        u
      ].filter(Boolean).join(" "),
      style: _,
      ...i
    }
  );
}
const $u = "_layout_1pcye_1", Nu = "_row_1pcye_7", sr = {
  layout: $u,
  row: Nu
}, Su = "_footer_khrs9_1", Du = {
  footer: Su
};
function zu({ className: e, children: n, ...r }) {
  return /* @__PURE__ */ t("footer", { className: [Du.footer, e].filter(Boolean).join(" "), ...r, children: n });
}
const Cu = "_header_6x0qv_1", Ou = {
  header: Cu
};
function Iu({ className: e, children: n, ...r }) {
  return /* @__PURE__ */ t("header", { className: [Ou.header, e].filter(Boolean).join(" "), ...r, children: n });
}
const Mu = "_sidebar_1tgxt_1", ju = "_left_1tgxt_9", Eu = "_right_1tgxt_13", Tu = "_collapsed_1tgxt_17", Au = "_responsive_1tgxt_25", Lu = "_overlay_1tgxt_33", Ru = "_mask_1tgxt_53", qt = {
  sidebar: Mu,
  left: ju,
  right: Eu,
  collapsed: Tu,
  responsive: Au,
  overlay: Lu,
  mask: Ru
};
function Bu({
  position: e = "left",
  expanded: n = !0,
  responsive: r = !1,
  overlay: s = !1,
  onClose: o,
  className: a,
  children: u,
  ...l
}) {
  return De(() => {
    if (!s || !n || o == null) return;
    const i = (h) => {
      h.key === "Escape" && o();
    };
    return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
  }, [s, n, o]), /* @__PURE__ */ N(Oe, { children: [
    s && n ? /* @__PURE__ */ t("div", { className: `${qt.mask} se-layout-mask`, "aria-hidden": "true", onClick: o }) : null,
    /* @__PURE__ */ t(
      "aside",
      {
        className: [
          qt.sidebar,
          e === "right" ? qt.right : qt.left,
          n ? null : qt.collapsed,
          r ? qt.responsive : null,
          s ? [qt.overlay, "se-sidebar--overlay"] : null,
          a
        ].flat().filter(Boolean).join(" "),
        ...l,
        children: u
      }
    )
  ] });
}
function Kg({ className: e, children: n, ...r }) {
  const s = [], o = [], a = [], u = [], l = [];
  return Sr.forEach(n, (i) => {
    if (!Wn(i)) {
      a.push(i);
      return;
    }
    i.type === Iu ? s.push(i) : i.type === zu ? o.push(i) : i.type === Bu ? (i.props.position === "right" ? l : u).push(i) : a.push(i);
  }), /* @__PURE__ */ N("div", { className: [sr.layout, e].filter(Boolean).join(" "), ...r, children: [
    s,
    /* @__PURE__ */ N("div", { className: sr.row, children: [
      u,
      a,
      l
    ] }),
    o
  ] });
}
const Pu = "_body_1i4wl_1", qu = {
  body: Pu
};
function Hg({ as: e = "main", className: n, children: r, ...s }) {
  return /* @__PURE__ */ t(e, { className: [qu.body, n].filter(Boolean).join(" "), ...s, children: r });
}
const Fu = "_track_1eazj_1", Ku = "_bar_1eazj_31", Hu = "_primary_1eazj_39", Wu = "_success_1eazj_43", Uu = "_warning_1eazj_47", Vu = "_danger_1eazj_51", Xu = "_indeterminate_1eazj_55", Gu = "_circular_1eazj_69", Yu = "_fill_1eazj_109", vt = {
  track: Fu,
  "linear-xs": "_linear-xs_1eazj_11",
  "linear-sm": "_linear-sm_1eazj_15",
  "linear-md": "_linear-md_1eazj_19",
  "linear-lg": "_linear-lg_1eazj_23",
  "linear-xl": "_linear-xl_1eazj_27",
  bar: Ku,
  primary: Hu,
  success: Wu,
  warning: Uu,
  danger: Vu,
  indeterminate: Xu,
  "se-progress-slide": "_se-progress-slide_1eazj_1",
  circular: Gu,
  "circular-xs": "_circular-xs_1eazj_75",
  "circular-sm": "_circular-sm_1eazj_80",
  "circular-md": "_circular-md_1eazj_85",
  "circular-lg": "_circular-lg_1eazj_90",
  "circular-xl": "_circular-xl_1eazj_95",
  fill: Yu,
  "se-progress-spin": "_se-progress-spin_1eazj_1"
};
function Wg({
  value: e = 0,
  max: n = 100,
  tone: r = "primary",
  indeterminate: s = !1,
  variant: o = "linear",
  size: a = "md",
  className: u,
  ...l
}) {
  const i = n > 0 ? Math.min(n, Math.max(0, e)) : 0, h = n > 0 ? i / n * 100 : 0;
  if (o === "circular") {
    const x = typeof a == "string", _ = 2, z = 10.5, k = 2 * Math.PI * z, C = k * (s ? 0.75 : 1), I = s ? 0 : k * (1 - h / 100);
    return /* @__PURE__ */ N(
      "svg",
      {
        width: x ? void 0 : a,
        height: x ? void 0 : a,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": l["aria-label"],
        "aria-labelledby": l["aria-labelledby"],
        "aria-valuenow": s ? void 0 : Math.round(i),
        "aria-valuemin": 0,
        "aria-valuemax": n,
        id: l.id,
        style: l.style,
        className: [
          vt.circular,
          vt[r],
          x ? vt[`circular-${a}`] : null,
          s ? vt.indeterminate : null,
          u
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ t("circle", { className: vt.track, cx: 12, cy: 12, r: z, strokeWidth: _ }),
          /* @__PURE__ */ t(
            "circle",
            {
              className: vt.fill,
              cx: 12,
              cy: 12,
              r: z,
              strokeWidth: _,
              strokeDasharray: `${C} ${k}`,
              strokeDashoffset: I
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
        vt.track,
        vt[r],
        typeof a == "string" ? vt[`linear-${a}`] : null,
        s ? vt.indeterminate : null,
        u
      ].filter(Boolean).join(" "),
      ...l,
      children: /* @__PURE__ */ t(
        "div",
        {
          className: vt.bar,
          style: s ? void 0 : { width: `${h}%` }
        }
      )
    }
  );
}
const Zu = "_wrapper_1mukg_1", Ju = {
  wrapper: Zu
};
function Ug({
  defaultTheme: e = "light",
  onChange: n,
  label: r = "Dark mode",
  className: s
}) {
  const [o, a] = V(() => (typeof document < "u" ? document.documentElement.dataset.theme : void 0) === "dark" ? !0 : e === "dark");
  De(() => {
    document.documentElement.dataset.theme = o ? "dark" : "light";
  }, []);
  const u = (l) => {
    const i = l.target.checked;
    a(i), document.documentElement.dataset.theme = i ? "dark" : "light", n?.(i ? "dark" : "light");
  };
  return /* @__PURE__ */ N("label", { className: [Ju.wrapper, s].filter(Boolean).join(" "), children: [
    r,
    /* @__PURE__ */ t(Za, { checked: o, onChange: u })
  ] });
}
const Qu = "_avatar_101wb_1", ef = "_xs_101wb_12", tf = "_sm_101wb_18", nf = "_md_101wb_24", rf = "_lg_101wb_30", sf = "_xl_101wb_36", of = "_initials_101wb_42", af = "_image_101wb_57", lf = "_status_101wb_64", cf = "_online_101wb_84", df = "_offline_101wb_88", uf = "_away_101wb_92", Xt = {
  avatar: Qu,
  xs: ef,
  sm: tf,
  md: nf,
  lg: rf,
  xl: sf,
  initials: of,
  image: af,
  status: lf,
  online: cf,
  offline: df,
  away: uf
}, On = [
  "var(--dt-color-palette-0)",
  "var(--dt-color-palette-1)",
  "var(--dt-color-palette-2)",
  "var(--dt-color-palette-3)",
  "var(--dt-color-palette-4)",
  "var(--dt-color-palette-5)"
];
function ff(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((n) => n[0]?.toUpperCase() ?? "").join("");
}
function _f(e) {
  let n = 0;
  for (let r = 0; r < e.length; r += 1)
    n = n * 31 + e.charCodeAt(r) >>> 0;
  return On[n % On.length] ?? On[0];
}
function Vg({
  name: e,
  src: n,
  alt: r,
  size: s = "md",
  status: o,
  className: a
}) {
  const u = Se(() => e ? ff(e) : "?", [e]), l = Se(() => e ? _f(e) : On[0], [e]), i = n ? /* @__PURE__ */ t("img", { className: Xt.image, src: n, alt: r ?? e ?? "" }) : /* @__PURE__ */ t("span", { "aria-hidden": "true", className: Xt.initials, style: { background: l }, children: u });
  return /* @__PURE__ */ N(
    "span",
    {
      className: [
        Xt.avatar,
        Xt[s],
        o ? Xt[o] : null,
        a
      ].filter(Boolean).join(" "),
      role: "img",
      "aria-label": r ?? e ?? "avatar",
      children: [
        i,
        o && /* @__PURE__ */ t("span", { className: Xt.status, "aria-hidden": "true" })
      ]
    }
  );
}
const pf = "_root_9j3lx_1", hf = "_left_9j3lx_6", mf = "_right_9j3lx_7", gf = "_panel_9j3lx_12", bf = "_bottom_9j3lx_20", yf = "_tabList_9j3lx_24", vf = "_underline_9j3lx_53", xf = "_pills_9j3lx_72", kf = "_tab_9j3lx_24", wf = "_active_9j3lx_113", $f = "_disabled_9j3lx_139", zt = {
  root: pf,
  left: hf,
  right: mf,
  panel: gf,
  bottom: bf,
  tabList: yf,
  underline: vf,
  pills: xf,
  tab: kf,
  active: wf,
  disabled: $f
};
function Xg({
  items: e,
  value: n,
  defaultValue: r,
  onChange: s,
  variant: o = "underline",
  position: a = "top",
  className: u
}) {
  const l = Ue(), i = le(null), [h, x] = V(r ?? e[0]?.key ?? ""), _ = n ?? h, z = a === "left" || a === "right", k = (D) => {
    x(D), s?.(D);
  }, C = (D) => {
    const y = e.filter((S) => !S.disabled), m = y.findIndex((S) => S.key === _);
    let p = -1;
    D.key === "ArrowRight" || z && D.key === "ArrowDown" ? p = (m + 1) % y.length : D.key === "ArrowLeft" || z && D.key === "ArrowUp" ? p = (m - 1 + y.length) % y.length : D.key === "Home" ? p = 0 : D.key === "End" && (p = y.length - 1), p >= 0 && (D.preventDefault(), i.current?.querySelector(
      `[data-tab-key="${CSS.escape(y[p]?.key ?? "")}"]`
    )?.focus(), k(y[p]?.key ?? ""));
  }, I = e.find((D) => D.key === _);
  return /* @__PURE__ */ N("div", { className: [zt.root, zt[a], u].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ t(
      "div",
      {
        ref: i,
        role: "tablist",
        className: [zt.tabList, zt[o], zt[a]].filter(Boolean).join(" "),
        onKeyDown: C,
        children: e.map((D) => {
          const y = D.key === _;
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              role: "tab",
              id: `${l}-tab-${D.key}`,
              "data-tab-key": D.key,
              "aria-selected": y,
              "aria-controls": `${l}-panel-${D.key}`,
              tabIndex: y ? 0 : -1,
              disabled: D.disabled,
              className: [
                zt.tab,
                y ? zt.active : null,
                D.disabled ? zt.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => k(D.key),
              children: D.label
            },
            D.key
          );
        })
      }
    ),
    I && /* @__PURE__ */ t(
      "div",
      {
        role: "tabpanel",
        id: `${l}-panel-${I.key}`,
        "aria-labelledby": `${l}-tab-${I.key}`,
        className: zt.panel,
        children: I.content
      }
    )
  ] });
}
const Nf = "_root_ejeux_1", Sf = "_item_ejeux_9", Df = "_heading_ejeux_13", zf = "_trigger_ejeux_17", Cf = "_disabled_ejeux_34", Of = "_title_ejeux_48", If = "_chevron_ejeux_52", Mf = "_open_ejeux_59", jf = "_content_ejeux_63", Ct = {
  root: Nf,
  item: Sf,
  heading: Df,
  trigger: zf,
  disabled: Cf,
  title: Of,
  chevron: If,
  open: Mf,
  content: jf
};
function Gg({
  items: e,
  multiple: n = !1,
  value: r,
  defaultValue: s,
  onChange: o,
  className: a
}) {
  const u = Ue(), [l, i] = V(s ?? []), h = r ?? l, x = (_) => {
    const z = h.includes(_) ? h.filter((k) => k !== _) : n ? [...h, _] : [_];
    i(z), o?.(z);
  };
  return /* @__PURE__ */ t("div", { className: [Ct.root, a].filter(Boolean).join(" "), children: e.map((_) => {
    const z = h.includes(_.key), k = `${u}-panel-${_.key}`, C = `${u}-trigger-${_.key}`;
    return /* @__PURE__ */ N("div", { className: Ct.item, children: [
      /* @__PURE__ */ t("h3", { className: Ct.heading, children: /* @__PURE__ */ N(
        "button",
        {
          type: "button",
          id: C,
          "aria-expanded": z,
          "aria-controls": k,
          disabled: _.disabled,
          className: [
            Ct.trigger,
            _.disabled ? Ct.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => x(_.key),
          children: [
            /* @__PURE__ */ t("span", { className: Ct.title, children: _.title }),
            /* @__PURE__ */ t("span", { className: [Ct.chevron, z ? Ct.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" })
          ]
        }
      ) }),
      /* @__PURE__ */ t(
        "div",
        {
          id: k,
          role: "region",
          "aria-labelledby": C,
          hidden: !z,
          className: Ct.content,
          children: _.content
        }
      )
    ] }, _.key);
  }) });
}
const Ef = "_textarea_1qm9v_1", Tf = "_xs_1qm9v_25", Af = "_sm_1qm9v_30", Lf = "_md_1qm9v_35", Rf = "_lg_1qm9v_40", Bf = "_xl_1qm9v_45", Tn = {
  textarea: Ef,
  xs: Tf,
  sm: Af,
  md: Lf,
  lg: Rf,
  xl: Bf,
  "resize-none": "_resize-none_1qm9v_50",
  "resize-vertical": "_resize-vertical_1qm9v_54",
  "resize-horizontal": "_resize-horizontal_1qm9v_58",
  "resize-both": "_resize-both_1qm9v_62"
}, Yg = qe(function({ size: n = "md", resize: r = "none", className: s, ...o }, a) {
  return /* @__PURE__ */ t(
    "textarea",
    {
      ref: a,
      className: [
        Tn.textarea,
        Tn[n],
        Tn[`resize-${r}`],
        s
      ].filter(Boolean).join(" "),
      ...o
    }
  );
}), Pf = "_typography_1n43h_1", qf = "_caption_1n43h_45", Ff = "_overline_1n43h_51", or = {
  typography: Pf,
  "display-1": "_display-1_1n43h_5",
  "display-2": "_display-2_1n43h_10",
  "display-3": "_display-3_1n43h_15",
  "display-4": "_display-4_1n43h_20",
  "display-5": "_display-5_1n43h_25",
  "display-6": "_display-6_1n43h_30",
  "body-1": "_body-1_1n43h_35",
  "body-2": "_body-2_1n43h_40",
  caption: qf,
  overline: Ff
}, Kf = {
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
}, Zg = qe(function({ variant: n = "body-1", as: r, className: s, children: o, ...a }, u) {
  const l = r ?? Kf[n];
  return /* @__PURE__ */ t(
    l,
    {
      ref: u,
      className: [or.typography, or[n], s].filter(Boolean).join(" "),
      ...a,
      children: o
    }
  );
}), Hf = "_root_dvw01_1", Wf = "_trigger_dvw01_9", Uf = "_invalid_dvw01_40", Vf = "_placeholder_dvw01_46", Xf = "_label_dvw01_53", Gf = "_chevron_dvw01_59", Yf = "_chevronOpen_dvw01_69", Zf = "_menu_dvw01_73", Jf = "_option_dvw01_88", Qf = "_disabled_dvw01_99", e_ = "_active_dvw01_103", t_ = "_selected_dvw01_104", n_ = "_header_dvw01_114", r_ = "_xs_dvw01_121", s_ = "_sm_dvw01_127", o_ = "_md_dvw01_133", a_ = "_lg_dvw01_139", l_ = "_xl_dvw01_145", st = {
  root: Hf,
  trigger: Wf,
  invalid: Uf,
  placeholder: Vf,
  label: Xf,
  chevron: Gf,
  chevronOpen: Yf,
  menu: Zf,
  option: Jf,
  disabled: Qf,
  active: e_,
  selected: t_,
  header: n_,
  xs: r_,
  sm: s_,
  md: o_,
  lg: a_,
  xl: l_
}, c_ = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function Jg({
  options: e = [],
  value: n,
  defaultValue: r,
  onChange: s,
  placeholder: o = "Select…",
  size: a = "md",
  invalid: u = !1,
  disabled: l = !1,
  className: i,
  ...h
}) {
  const x = Ue(), _ = `${x}-listbox`, z = le(null), k = le(null), [C, I] = V(r), [D, y] = V(!1), m = n ?? C, p = e.map((d, w) => d.label === "" || d.disabled ? -1 : w).filter((d) => d >= 0), S = e.findIndex((d) => d.value === m), [f, g] = V(
    () => p.includes(0) ? 0 : p[0] ?? -1
  ), c = q(() => {
    if (l) return;
    const d = S >= 0 && p.includes(S) ? S : p[0];
    g(d ?? -1), y(!0);
  }, [l, S, p]), v = q(() => {
    y(!1), k.current?.focus();
  }, []);
  De(() => {
    if (!D) return;
    const d = (w) => {
      z.current && !z.current.contains(w.target) && y(!1);
    };
    return document.addEventListener("mousedown", d), () => document.removeEventListener("mousedown", d);
  }, [D]);
  const $ = (d) => {
    I(d), s?.(d), y(!1), k.current?.focus();
  }, U = (d) => {
    if (p.length === 0) return;
    const w = p.includes(f) ? p.indexOf(f) : 0, M = p[(w + d + p.length) % p.length];
    M != null && g(M);
  }, R = (d) => {
    if (!D) {
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
        d.preventDefault(), f >= 0 && e[f] && p.includes(f) && $(e[f]?.value ?? "");
        break;
      case "Escape":
        d.preventDefault(), v();
        break;
      case "Tab":
        y(!1);
        break;
    }
  }, O = e.find((d) => d.value === m);
  return /* @__PURE__ */ N("div", { ref: z, className: [st.root, i].filter(Boolean).join(" "), onKeyDown: R, children: [
    /* @__PURE__ */ N(
      "button",
      {
        ref: k,
        type: "button",
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-expanded": D,
        "aria-controls": _,
        "aria-invalid": u || void 0,
        disabled: l,
        className: [
          st.trigger,
          st[a],
          D ? st.open : null,
          u ? st.invalid : null
        ].filter(Boolean).join(" "),
        onClick: () => D ? y(!1) : c(),
        ...h,
        children: [
          /* @__PURE__ */ t("span", { className: O ? st.label : st.placeholder, children: O ? O.label : o }),
          /* @__PURE__ */ t(
            "span",
            {
              className: [st.chevron, D ? st.chevronOpen : null].filter(Boolean).join(" "),
              style: { backgroundImage: c_ },
              "aria-hidden": "true"
            }
          )
        ]
      }
    ),
    D && /* @__PURE__ */ t(
      "div",
      {
        id: _,
        role: "listbox",
        "aria-activedescendant": f >= 0 ? `${x}-option-${f}` : void 0,
        className: st.menu,
        children: e.map(
          (d, w) => d.label === "" ? /* @__PURE__ */ t("div", { className: st.header, role: "presentation", children: d.value }, d.value) : /* @__PURE__ */ t(
            "div",
            {
              id: `${x}-option-${w}`,
              role: "option",
              "aria-selected": d.value === m,
              "aria-disabled": d.disabled || void 0,
              className: [
                st.option,
                w === f ? st.active : null,
                d.value === m ? st.selected : null,
                d.disabled ? st.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => {
                d.disabled || $(d.value);
              },
              onMouseEnter: () => {
                !d.disabled && d.label !== "" && g(w);
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
const i_ = "_root_1ap80_1", d_ = "_wrap_1ap80_9", u_ = "_input_1ap80_26", f_ = "_invalid_1ap80_31", __ = "_clear_1ap80_57", p_ = "_menu_1ap80_82", h_ = "_option_1ap80_97", m_ = "_disabled_1ap80_108", g_ = "_active_1ap80_112", b_ = "_empty_1ap80_122", y_ = "_xs_1ap80_128", v_ = "_sm_1ap80_135", x_ = "_md_1ap80_142", k_ = "_lg_1ap80_149", w_ = "_xl_1ap80_156", xt = {
  root: i_,
  wrap: d_,
  input: u_,
  invalid: f_,
  clear: __,
  menu: p_,
  option: h_,
  disabled: m_,
  active: g_,
  empty: b_,
  xs: y_,
  sm: v_,
  md: x_,
  lg: k_,
  xl: w_
}, $_ = (e, n) => e.label.toLowerCase().includes(n.toLowerCase());
function Qg({
  options: e = [],
  value: n,
  defaultValue: r = "",
  onChange: s,
  onSelect: o,
  placeholder: a = "",
  size: u = "md",
  invalid: l = !1,
  disabled: i = !1,
  filter: h = $_,
  className: x,
  ..._
}) {
  const z = Ue(), k = `${z}-listbox`, C = le(null), I = le(null), [D, y] = V(r), [m, p] = V(!1), S = n ?? D, f = Se(
    () => S.trim() === "" ? [...e] : e.filter((T) => h(T, S)),
    [e, S, h]
  ), g = f.map((T, J) => T.disabled ? -1 : J).filter((T) => T >= 0), [c, v] = V(-1), $ = (T) => {
    y(T), s?.(T);
  }, U = (T) => {
    $(T.label), o?.(T.value, T), p(!1);
  }, R = (T) => {
    if (g.length === 0) return;
    const J = g.includes(c) ? g.indexOf(c) : T === 1 ? -1 : 0, se = g[(J + T + g.length) % g.length];
    se != null && v(se);
  }, O = (T) => {
    i || ($(T.target.value), p(!0), v(-1));
  }, d = () => {
    i || S !== "" && p(!0);
  }, w = (T) => {
    C.current && !C.current.contains(T.relatedTarget) && p(!1);
  }, M = (T) => {
    if (!i)
      switch (T.key) {
        case "ArrowDown":
          T.preventDefault(), m ? R(1) : (p(!0), v(g[0] ?? -1));
          break;
        case "ArrowUp":
          T.preventDefault(), m && R(-1);
          break;
        case "Enter":
          T.preventDefault(), m && c >= 0 && f[c] && U(f[c]);
          break;
        case "Escape":
          T.preventDefault(), p(!1);
          break;
        case "Tab":
          m && c >= 0 && f[c] && U(f[c]), p(!1);
          break;
      }
  }, L = () => {
    $(""), v(-1), p(!0), I.current?.focus();
  };
  return /* @__PURE__ */ N("div", { ref: C, className: [xt.root, x].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ N("div", { className: [xt.wrap, xt[u], l ? xt.invalid : null].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ t(
        "input",
        {
          ref: I,
          type: "text",
          role: "combobox",
          "aria-expanded": m,
          "aria-controls": k,
          "aria-autocomplete": "list",
          "aria-activedescendant": m && c >= 0 ? `${z}-option-${c}` : void 0,
          "aria-invalid": l || void 0,
          disabled: i,
          value: S,
          placeholder: a,
          className: xt.input,
          onChange: O,
          onFocus: d,
          onBlur: w,
          onKeyDown: M,
          ..._
        }
      ),
      S !== "" && !i && /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: xt.clear,
          "aria-label": "Clear",
          onClick: L,
          children: "×"
        }
      )
    ] }),
    m && /* @__PURE__ */ t("div", { id: k, role: "listbox", className: xt.menu, children: f.length === 0 ? /* @__PURE__ */ t("div", { className: xt.empty, children: "No matches" }) : f.map((T, J) => /* @__PURE__ */ t(
      "div",
      {
        id: `${z}-option-${J}`,
        role: "option",
        "aria-selected": !1,
        "aria-disabled": T.disabled || void 0,
        className: [
          xt.option,
          J === c ? xt.active : null,
          T.disabled ? xt.disabled : null
        ].filter(Boolean).join(" "),
        onClick: () => {
          T.disabled || U(T);
        },
        onMouseDown: (se) => {
          se.preventDefault(), T.disabled || U(T);
        },
        onMouseEnter: () => {
          T.disabled || v(J);
        },
        children: T.label
      },
      T.value
    )) })
  ] });
}
const N_ = "_box_186wt_1", S_ = "_option_186wt_12", D_ = "_disabled_186wt_23", z_ = "_selected_186wt_27", C_ = "_active_186wt_33", dn = {
  box: N_,
  option: S_,
  disabled: D_,
  selected: z_,
  active: C_
};
function e0({
  options: e = [],
  value: n,
  defaultValue: r,
  multiple: s = !1,
  onChange: o,
  className: a,
  style: u,
  ...l
}) {
  const i = Ue(), [h, x] = V(() => {
    const f = r;
    return f == null ? [] : Array.isArray(f) ? [...f] : [f];
  }), _ = n == null ? h : Array.isArray(n) ? n : [n], z = e.findIndex((f) => !f.disabled), [k, C] = V(() => z >= 0 ? z : 0), I = le(""), D = le(null), y = (f) => {
    x(f), o?.(s ? f : f[0] ?? "");
  }, m = e.map((f, g) => f.disabled ? -1 : g).filter((f) => f >= 0), p = (f) => {
    const g = e[f];
    if (!(!g || g.disabled))
      if (C(f), s) {
        const c = _.includes(g.value) ? _.filter((v) => v !== g.value) : [..._, g.value];
        y(c);
      } else
        y([g.value]);
  }, S = (f) => {
    if (m.length === 0) return;
    const g = m.includes(k) ? k : m[0];
    let c = -1;
    if (f.key === "ArrowDown")
      c = m[(m.indexOf(g) + 1) % m.length];
    else if (f.key === "ArrowUp")
      c = m[(m.indexOf(g) - 1 + m.length) % m.length];
    else if (f.key === "Home")
      c = m[0];
    else if (f.key === "End")
      c = m[m.length - 1];
    else if (f.key === "Enter" || f.key === " ") {
      f.preventDefault(), p(g);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(f.key)) {
      f.preventDefault();
      const v = (I.current + f.key).toLowerCase();
      I.current = v, D.current && clearTimeout(D.current), D.current = setTimeout(() => {
        I.current = "";
      }, 500);
      const $ = [...m, ...m], U = m.indexOf(g) + 1, R = $.slice(U).find(
        (O) => e[O]?.label.toLowerCase().startsWith(v)
      );
      R != null && C(R);
      return;
    }
    c >= 0 && (f.preventDefault(), C(c), s || y([e[c]?.value ?? ""]));
  };
  return /* @__PURE__ */ t(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": s || void 0,
      "aria-activedescendant": e[k] ? `${i}-option-${k}` : void 0,
      style: u,
      className: [dn.box, a].filter(Boolean).join(" "),
      onKeyDown: S,
      ...l,
      children: e.map((f, g) => {
        const c = _.includes(f.value), v = g === k;
        return /* @__PURE__ */ t(
          "div",
          {
            id: `${i}-option-${g}`,
            role: "option",
            "aria-selected": c,
            "aria-disabled": f.disabled || void 0,
            className: [
              dn.option,
              c ? dn.selected : null,
              v ? dn.active : null,
              f.disabled ? dn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => p(g),
            children: f.label
          },
          f.value
        );
      })
    }
  );
}
const O_ = "_group_qro0q_1", I_ = "_legend_qro0q_8", M_ = "_list_qro0q_16", j_ = "_item_qro0q_25", E_ = "_disabled_qro0q_32", T_ = "_label_qro0q_37", A_ = "_checkbox_qro0q_48", Ft = {
  group: O_,
  legend: I_,
  list: M_,
  item: j_,
  disabled: E_,
  label: T_,
  checkbox: A_
};
function t0({
  options: e = [],
  value: n,
  defaultValue: r = [],
  onChange: s,
  legend: o,
  name: a,
  className: u
}) {
  const [l, i] = V(() => [...r]), h = n ?? l, x = (_, z) => {
    const k = z ? [...h, _] : h.filter((C) => C !== _);
    i(k), s?.(k);
  };
  return /* @__PURE__ */ N("fieldset", { className: [Ft.group, u].filter(Boolean).join(" "), children: [
    o != null && /* @__PURE__ */ t("legend", { className: Ft.legend, children: o }),
    /* @__PURE__ */ t("ul", { className: Ft.list, children: e.map((_) => {
      const z = h.includes(_.value);
      return /* @__PURE__ */ t(
        "li",
        {
          className: [Ft.item, _.disabled ? Ft.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ N("label", { className: Ft.label, children: [
            /* @__PURE__ */ t(
              "input",
              {
                type: "checkbox",
                className: Ft.checkbox,
                name: a,
                value: _.value,
                checked: z,
                disabled: _.disabled,
                onChange: (k) => x(_.value, k.target.checked)
              }
            ),
            /* @__PURE__ */ t("span", { children: _.label })
          ] })
        },
        _.value
      );
    }) })
  ] });
}
const L_ = "_group_1dyra_1", R_ = "_legend_1dyra_8", B_ = "_list_1dyra_16", P_ = "_item_1dyra_25", q_ = "_disabled_1dyra_32", F_ = "_label_1dyra_37", K_ = "_radio_1dyra_48", Kt = {
  group: L_,
  legend: R_,
  list: B_,
  item: P_,
  disabled: q_,
  label: F_,
  radio: K_
};
function n0({
  options: e = [],
  value: n,
  defaultValue: r,
  onChange: s,
  legend: o,
  name: a,
  className: u
}) {
  const [l, i] = V(r), h = n ?? l, x = (_) => {
    i(_), s?.(_);
  };
  return /* @__PURE__ */ N("fieldset", { className: [Kt.group, u].filter(Boolean).join(" "), children: [
    o != null && /* @__PURE__ */ t("legend", { className: Kt.legend, children: o }),
    /* @__PURE__ */ t("ul", { className: Kt.list, children: e.map((_) => {
      const z = _.value === h;
      return /* @__PURE__ */ t(
        "li",
        {
          className: [Kt.item, _.disabled ? Kt.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ N("label", { className: Kt.label, children: [
            /* @__PURE__ */ t(
              "input",
              {
                type: "radio",
                className: Kt.radio,
                name: a,
                value: _.value,
                checked: z,
                disabled: _.disabled,
                onChange: (k) => x(k.target.value)
              }
            ),
            /* @__PURE__ */ t("span", { children: _.label })
          ] })
        },
        _.value
      );
    }) })
  ] });
}
const H_ = "_bar_5dkw6_1", W_ = "_option_5dkw6_12", U_ = "_selected_5dkw6_33", V_ = "_sm_5dkw6_49", X_ = "_md_5dkw6_55", G_ = "_lg_5dkw6_61", un = {
  bar: H_,
  option: W_,
  selected: U_,
  sm: V_,
  md: X_,
  lg: G_
};
function r0({
  options: e = [],
  value: n,
  defaultValue: r,
  onChange: s,
  size: o = "md",
  className: a,
  ...u
}) {
  const [l, i] = V(
    r ?? e[0]?.value
  ), h = n ?? l, x = (_) => {
    i(_), s?.(_);
  };
  return /* @__PURE__ */ t(
    "div",
    {
      role: "group",
      className: [un.bar, un[o], a].filter(Boolean).join(" "),
      ...u,
      children: e.map((_) => {
        const z = _.value === h;
        return /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            "aria-pressed": z,
            disabled: _.disabled,
            className: [
              un.option,
              z ? un.selected : null,
              _.disabled ? un.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => x(_.value),
            children: _.label
          },
          _.value
        );
      })
    }
  );
}
const Y_ = "_toggle_1lv03_1", Z_ = "_pressed_1lv03_29", J_ = "_sm_1lv03_41", Q_ = "_md_1lv03_47", ep = "_lg_1lv03_53", tp = "_fullWidth_1lv03_59", Nn = {
  toggle: Y_,
  pressed: Z_,
  sm: J_,
  md: Q_,
  lg: ep,
  fullWidth: tp
}, s0 = qe(
  function({
    pressed: n,
    defaultPressed: r = !1,
    onChange: s,
    size: o = "md",
    fullWidth: a = !1,
    className: u,
    type: l = "button",
    ...i
  }, h) {
    const [x, _] = V(r), z = n ?? x, k = () => {
      const C = !z;
      _(C), s?.(C);
    };
    return /* @__PURE__ */ t(
      "button",
      {
        ref: h,
        type: l,
        "aria-pressed": z,
        className: [
          Nn.toggle,
          Nn[o],
          z ? Nn.pressed : null,
          a ? Nn.fullWidth : null,
          u
        ].filter(Boolean).join(" "),
        onClick: k,
        ...i
      }
    );
  }
), np = "_root_6843t_1", rp = "_action_6843t_8", sp = "_caret_6843t_32", op = "_sm_6843t_65", ap = "_md_6843t_77", lp = "_lg_6843t_89", cp = "_menu_6843t_101", ip = "_item_6843t_114", dp = "_disabled_6843t_126", up = "_active_6843t_130", fp = "_danger_6843t_139", Ot = {
  root: np,
  action: rp,
  caret: sp,
  sm: op,
  md: ap,
  lg: lp,
  menu: cp,
  item: ip,
  disabled: dp,
  active: up,
  danger: fp
};
function o0({
  label: e,
  onClick: n,
  items: r = [],
  size: s = "md",
  disabled: o = !1,
  className: a,
  ...u
}) {
  const l = Ue(), i = `${l}-menu`, h = le(null), x = le(null), [_, z] = V(!1), [k, C] = V(-1), I = r.map((f, g) => f.disabled ? -1 : g).filter((f) => f >= 0), D = q(() => {
    o || (C(I[0] ?? -1), z(!0));
  }, [o, I]), y = q(() => {
    z(!1), x.current?.focus();
  }, []);
  De(() => {
    if (!_) return;
    const f = (g) => {
      h.current && !h.current.contains(g.target) && z(!1);
    };
    return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, [_]);
  const m = (f) => {
    const g = r[f];
    !g || g.disabled || (g.onClick?.(), z(!1), x.current?.focus());
  }, p = (f) => {
    if (I.length === 0) return;
    const g = I.includes(k) ? I.indexOf(k) : f === 1 ? -1 : 0, c = I[(g + f + I.length) % I.length];
    c != null && C(c);
  }, S = (f) => {
    if (!_) {
      (f.key === "ArrowDown" || f.key === "Enter" || f.key === " ") && (f.preventDefault(), D());
      return;
    }
    switch (f.key) {
      case "ArrowDown":
        f.preventDefault(), p(1);
        break;
      case "ArrowUp":
        f.preventDefault(), p(-1);
        break;
      case "Home":
        f.preventDefault(), I[0] != null && C(I[0]);
        break;
      case "End":
        f.preventDefault(), I[I.length - 1] != null && C(I[I.length - 1]);
        break;
      case "Enter":
      case " ":
        f.preventDefault(), k >= 0 && m(k);
        break;
      case "Escape":
        f.preventDefault(), y();
        break;
      case "Tab":
        z(!1);
        break;
    }
  };
  return /* @__PURE__ */ N(
    "div",
    {
      ref: h,
      className: [Ot.root, Ot[s], a].filter(Boolean).join(" "),
      onKeyDown: S,
      children: [
        /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: Ot.action,
            disabled: o,
            onClick: n,
            children: e
          }
        ),
        /* @__PURE__ */ t(
          "button",
          {
            ref: x,
            type: "button",
            className: Ot.caret,
            "aria-haspopup": "menu",
            "aria-expanded": _,
            "aria-controls": i,
            "aria-label": "More actions",
            disabled: o,
            onClick: () => _ ? z(!1) : D(),
            children: "▾"
          }
        ),
        _ && /* @__PURE__ */ t(
          "div",
          {
            id: i,
            role: "menu",
            "aria-activedescendant": k >= 0 ? `${l}-item-${k}` : void 0,
            className: Ot.menu,
            ...u,
            children: r.map((f, g) => /* @__PURE__ */ t(
              "div",
              {
                id: `${l}-item-${g}`,
                role: "menuitem",
                "aria-disabled": f.disabled || void 0,
                className: [
                  Ot.item,
                  g === k ? Ot.active : null,
                  f.danger ? Ot.danger : null,
                  f.disabled ? Ot.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => m(g),
                onMouseEnter: () => {
                  f.disabled || C(g);
                },
                children: f.label
              },
              f.key
            ))
          }
        )
      ]
    }
  );
}
const _p = "_textbox_1eb0k_1", pp = "_invalid_1eb0k_31", hp = "_xs_1eb0k_37", mp = "_sm_1eb0k_43", gp = "_md_1eb0k_49", bp = "_lg_1eb0k_55", yp = "_xl_1eb0k_61", An = {
  textbox: _p,
  invalid: pp,
  xs: hp,
  sm: mp,
  md: gp,
  lg: bp,
  xl: yp
}, a0 = qe(function({ size: n = "md", invalid: r = !1, className: s, type: o = "text", ...a }, u) {
  return /* @__PURE__ */ t(
    "input",
    {
      ref: u,
      type: o,
      className: [An.textbox, An[n], r ? An.invalid : null, s].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...a
    }
  );
}), vp = "_wrapper_164zy_1", xp = "_input_164zy_8", kp = "_invalid_164zy_38", wp = "_toggle_164zy_44", $p = "_xs_164zy_79", Np = "_sm_164zy_85", Sp = "_md_164zy_91", Dp = "_lg_164zy_97", zp = "_xl_164zy_103", fn = {
  wrapper: vp,
  input: xp,
  invalid: kp,
  toggle: wp,
  xs: $p,
  sm: Np,
  md: Sp,
  lg: Dp,
  xl: zp
}, l0 = qe(function({
  size: n = "md",
  invalid: r = !1,
  className: s,
  disabled: o,
  showLabel: a = "Show password",
  hideLabel: u = "Hide password",
  ...l
}, i) {
  const [h, x] = V(!1);
  return /* @__PURE__ */ N("div", { className: fn.wrapper, children: [
    /* @__PURE__ */ t(
      "input",
      {
        ref: i,
        type: h ? "text" : "password",
        disabled: o,
        className: [fn.input, fn[n], r ? fn.invalid : null, s].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...l
      }
    ),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: fn.toggle,
        "aria-pressed": h,
        "aria-label": h ? u : a,
        disabled: o,
        onClick: () => x((_) => !_),
        children: /* @__PURE__ */ t(Ve, { name: h ? "eye-off" : "eye", size: 16 })
      }
    )
  ] });
}), Cp = "_mask_evq34_1", Op = "_invalid_evq34_31", Ip = "_xs_evq34_37", Mp = "_sm_evq34_43", jp = "_md_evq34_49", Ep = "_lg_evq34_55", Tp = "_xl_evq34_61", Ln = {
  mask: Cp,
  invalid: Op,
  xs: Ip,
  sm: Mp,
  md: jp,
  lg: Ep,
  xl: Tp
};
function ar(e, n) {
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
const c0 = qe(function({
  size: n = "md",
  invalid: r = !1,
  mask: s,
  value: o,
  defaultValue: a = "",
  onChange: u,
  className: l,
  onKeyDown: i,
  ...h
}, x) {
  const [_, z] = V(a ?? ""), k = o !== void 0, C = k ? o ?? "" : _, I = (m) => {
    const p = ar(m, s);
    return k || z(p), u?.(p), p;
  };
  return /* @__PURE__ */ t(
    "input",
    {
      ref: x,
      type: "text",
      value: C,
      onChange: (m) => {
        I(m.target.value);
      },
      onKeyDown: (m) => {
        if (m.key === "Backspace") {
          const p = m.currentTarget.selectionStart ?? C.length, S = C[p - 1];
          if (S !== void 0 && !/\d/.test(S)) {
            m.preventDefault();
            const f = C.replace(/\D/g, "");
            I(ar(f.slice(0, -1), s));
          }
        }
        i?.(m);
      },
      className: [Ln.mask, Ln[n], r ? Ln.invalid : null, l].filter(Boolean).join(" "),
      "aria-invalid": r || void 0,
      ...h
    }
  );
}), Ap = "_wrapper_aus1c_1", Lp = "_input_aus1c_8", Rp = "_invalid_aus1c_38", Bp = "_button_aus1c_44", Pp = "_up_aus1c_76", qp = "_down_aus1c_81", Fp = "_xs_aus1c_86", Kp = "_sm_aus1c_92", Hp = "_md_aus1c_98", Wp = "_lg_aus1c_104", Up = "_xl_aus1c_110", Lt = {
  wrapper: Ap,
  input: Lp,
  invalid: Rp,
  button: Bp,
  up: Pp,
  down: qp,
  xs: Fp,
  sm: Kp,
  md: Hp,
  lg: Wp,
  xl: Up
};
function qn(e) {
  const n = parseFloat(e);
  return Number.isNaN(n) ? null : n;
}
function Vp(e) {
  let n = "", r = !1;
  for (const s of e)
    s >= "0" && s <= "9" ? n += s : s === "." && !r ? (r = !0, n += s) : s === "-" && n.length === 0 && (n += s);
  return n;
}
function kr(e, n, r) {
  return Math.min(r ?? 1 / 0, Math.max(n ?? -1 / 0, e));
}
function Xp(e, n, r) {
  return n === void 0 ? e : n + Math.round((e - n) / r) * r;
}
function Gp(e, n, r, s, o) {
  const u = qn(e) ?? r ?? 0;
  let l;
  return r === void 0 ? l = u + n * o : n > 0 ? l = r + Math.ceil((u - r + 1e-9) / o) * o : l = r + Math.floor((u - r - 1e-9) / o) * o, kr(l, r, s);
}
const i0 = qe(function({
  size: n = "md",
  invalid: r = !1,
  className: s,
  disabled: o,
  value: a,
  defaultValue: u,
  onChange: l,
  min: i,
  max: h,
  step: x = 1,
  incrementLabel: _ = "Increment",
  decrementLabel: z = "Decrement",
  onBlur: k,
  onKeyDown: C,
  ...I
}, D) {
  const [y, m] = V(u != null ? String(u) : ""), p = a !== void 0, S = p ? a == null ? "" : String(a) : y, f = (R) => {
    p || m(R), l?.(qn(R));
  }, g = (R) => {
    p || m(String(R)), l?.(R);
  }, c = (R) => {
    o || g(Gp(S, R, i, h, x));
  }, v = (R) => {
    f(Vp(R.target.value));
  }, $ = (R) => {
    R.key === "ArrowUp" ? (R.preventDefault(), c(1)) : R.key === "ArrowDown" && (R.preventDefault(), c(-1)), C?.(R);
  }, U = (R) => {
    const O = qn(S);
    O === null ? (p || m(""), l?.(null)) : g(kr(Xp(O, i, x), i, h)), k?.(R);
  };
  return /* @__PURE__ */ N("div", { className: Lt.wrapper, children: [
    /* @__PURE__ */ t(
      "input",
      {
        ref: D,
        type: "text",
        inputMode: "decimal",
        autoComplete: "off",
        value: S,
        disabled: o,
        onChange: v,
        onKeyDown: $,
        onBlur: U,
        className: [Lt.input, Lt[n], r ? Lt.invalid : null, s].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...I
      }
    ),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: [Lt.button, Lt.up].join(" "),
        "aria-label": _,
        disabled: o,
        onClick: () => c(1),
        children: /* @__PURE__ */ t(Ve, { name: "chevron-up", size: 14 })
      }
    ),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: [Lt.button, Lt.down].join(" "),
        "aria-label": z,
        disabled: o,
        onClick: () => c(-1),
        children: /* @__PURE__ */ t(Ve, { name: "chevron-down", size: 14 })
      }
    )
  ] });
}), xe = {}, Yp = [
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
function ht(e, n, r) {
  return Math.min(r, Math.max(n, e));
}
function Fn(e) {
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
function Zp({ r: e, g: n, b: r }) {
  const s = (o) => Math.round(o).toString(16).padStart(2, "0");
  return `#${s(e)}${s(n)}${s(r)}`;
}
function Jp({ r: e, g: n, b: r }) {
  const s = e / 255, o = n / 255, a = r / 255, u = Math.max(s, o, a), l = Math.min(s, o, a), i = u - l;
  let h = 0;
  return i !== 0 && (u === s ? h = (o - a) / i % 6 : u === o ? h = (a - s) / i + 2 : h = (s - o) / i + 4, h *= 60, h < 0 && (h += 360)), {
    h,
    s: u === 0 ? 0 : i / u,
    v: u
  };
}
function Gt({ h: e, s: n, v: r }) {
  const s = r * n, o = e / 60, a = s * (1 - Math.abs(o % 2 - 1));
  let u = 0, l = 0, i = 0;
  o < 1 ? (u = s, l = a) : o < 2 ? (u = a, l = s) : o < 3 ? (l = s, i = a) : o < 4 ? (l = a, i = s) : o < 5 ? (u = a, i = s) : (u = s, i = a);
  const h = r - s;
  return {
    r: Math.round((u + h) * 255),
    g: Math.round((l + h) * 255),
    b: Math.round((i + h) * 255),
    a: 1
  };
}
function Qp(e) {
  const n = Fn(e);
  if (n) return n;
  const r = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*([\d.]+))?\s*\)$/i.exec(
    e.trim()
  );
  return r ? {
    r: ht(Number(r[1]), 0, 255),
    g: ht(Number(r[2]), 0, 255),
    b: ht(Number(r[3]), 0, 255),
    a: r[4] != null ? ht(Number(r[4]), 0, 1) : 1
  } : null;
}
function lr({ r: e, g: n, b: r, a: s }) {
  return s >= 1 ? `rgb(${e}, ${n}, ${r})` : `rgba(${e}, ${n}, ${r}, ${Math.round(s * 100) / 100})`;
}
const d0 = ({
  value: e = "#000000",
  showSaturation: n = !0,
  showRgba: r = !0,
  showPalette: s = !0,
  palette: o = Yp,
  showButton: a = !1,
  showArrow: u = !0,
  disabled: l = !1,
  invalid: i = !1,
  placeholder: h = "",
  size: x = "md",
  tabIndex: _ = 0,
  className: z,
  onChange: k,
  onValueChange: C,
  onOpen: I,
  onClose: D
}) => {
  const y = le(null), m = le(null), p = le(null), S = le(null), f = le(null), g = Ue(), c = le(null), v = Se(
    () => Qp(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [$, U] = V(!1), [R, O] = V(null), d = R ?? v, w = Se(() => Jp(d), [d]), M = q(
    (H) => {
      const b = lr(H);
      k?.(b), C?.(b);
    },
    [k, C]
  ), L = q(
    (H, b) => {
      O(H), b && !a && M(H);
    },
    [a, M]
  ), T = q(() => {
    U(!1), O(null), D?.(), m.current?.focus();
  }, [D]), J = q(() => {
    l || (O(v), U(!0), I?.());
  }, [l, v, I]), se = q(() => {
    $ ? T() : J();
  }, [$, T, J]), de = q(
    (H, b) => {
      const E = p.current;
      if (!E) return w;
      const K = E.getBoundingClientRect(), Q = ht((H - K.left) / K.width, 0, 1), G = ht(1 - (b - K.top) / K.height, 0, 1);
      return { h: w.h, s: Q, v: G };
    },
    [w]
  ), ne = q(
    (H, b) => {
      if (!b) return 0;
      const E = b.getBoundingClientRect();
      return ht((H - E.left) / E.width, 0, 1);
    },
    []
  ), oe = (H) => {
    if (l) return;
    H.preventDefault(), H.currentTarget.setPointerCapture(H.pointerId), c.current = "sat";
    const b = de(H.clientX, H.clientY);
    L({ ...Gt(b), a: d.a }, !0);
  }, ae = (H) => {
    if (c.current !== "sat") return;
    H.preventDefault();
    const b = de(H.clientX, H.clientY);
    L({ ...Gt(b), a: d.a }, !0);
  }, X = (H) => {
    if (l) return;
    H.preventDefault(), H.currentTarget.setPointerCapture(H.pointerId), c.current = "hue";
    const b = ne(H.clientX, S.current);
    L({ ...Gt({ ...w, h: b * 360 }), a: d.a }, !0);
  }, W = (H) => {
    if (c.current !== "hue") return;
    H.preventDefault();
    const b = ne(H.clientX, S.current);
    L({ ...Gt({ ...w, h: b * 360 }), a: d.a }, !0);
  }, B = (H) => {
    if (l) return;
    H.preventDefault(), H.currentTarget.setPointerCapture(H.pointerId), c.current = "alpha";
    const b = ne(H.clientX, f.current);
    L({ ...d, a: b }, !0);
  }, te = (H) => {
    if (c.current !== "alpha") return;
    H.preventDefault();
    const b = ne(H.clientX, f.current);
    L({ ...d, a: b }, !0);
  }, he = () => {
    c.current = null;
  }, Z = q(
    (H, b) => {
      const E = { h: w.h, s: ht(w.s + H, 0, 1), v: ht(w.v + b, 0, 1) };
      L({ ...Gt(E), a: d.a }, !0);
    },
    [w, d.a, L]
  ), me = q(
    (H) => {
      const b = (w.h + H + 360) % 360;
      L({ ...Gt({ ...w, h: b }), a: d.a }, !0);
    },
    [w, d.a, L]
  ), ye = q(
    (H) => {
      L({ ...d, a: ht(d.a + H, 0, 1) }, !0);
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
  }, He = (H, b) => {
    switch (H.key) {
      case "ArrowLeft":
        H.preventDefault(), b === "hue" ? me(-6) : ye(-0.05);
        break;
      case "ArrowRight":
        H.preventDefault(), b === "hue" ? me(6) : ye(0.05);
        break;
      case "Escape":
        H.preventDefault(), T();
        break;
    }
  }, Me = (H, b) => {
    if (H === "hex") {
      const G = Fn(b);
      G && L({ ...G, a: d.a }, !0);
      return;
    }
    const E = b.replace(/[^\d.]/g, ""), K = Number.parseFloat(E);
    if (Number.isNaN(K)) return;
    if (H === "a") {
      const G = E.includes(".") ? ht(K, 0, 1) : ht(K / 100, 0, 1);
      L({ ...d, a: G }, !0);
      return;
    }
    const Q = { r: 255, g: 255, b: 255 };
    L({ ...d, [H]: ht(K, 0, Q[H]) }, !0);
  }, Xe = () => {
    R && (M(R), O(null), U(!1), D?.(), m.current?.focus());
  };
  De(() => {
    if (!$) return;
    const H = (b) => {
      y.current && !y.current.contains(b.target) && T();
    };
    return document.addEventListener("mousedown", H), () => document.removeEventListener("mousedown", H);
  }, [$, T]), De(() => {
    if (!$) return;
    const H = (b) => {
      b.key === "Escape" && T();
    };
    return document.addEventListener("keydown", H), () => document.removeEventListener("keydown", H);
  }, [$, T]);
  const be = x === "xs" ? xe.dtColorpickerTriggerXs : x === "sm" ? xe.dtColorpickerTriggerSm : x === "lg" ? xe.dtColorpickerTriggerLg : x === "xl" ? xe.dtColorpickerTriggerXl : xe.dtColorpickerTriggerMd, Ge = lr(d), et = Zp(d), We = { x: w.s * 100, y: (1 - w.v) * 100 }, Ze = w.h / 360 * 100, Fe = d.a * 100, Ye = /* @__PURE__ */ N("div", { className: xe.dtColorpickerPanel, children: [
    n && /* @__PURE__ */ t(
      "div",
      {
        ref: p,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(w.s * 100),
        "aria-valuetext": `Saturation ${Math.round(w.s * 100)}%, value ${Math.round(w.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": l || void 0,
        tabIndex: l ? -1 : _,
        className: xe.dtSaturationPicker,
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${w.h}, 100%, 50%)`
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
        ref: S,
        role: "slider",
        "aria-label": "Hue",
        "aria-valuemin": 0,
        "aria-valuemax": 360,
        "aria-valuenow": Math.round(w.h),
        "aria-disabled": l || void 0,
        tabIndex: l ? -1 : _,
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
        ref: f,
        role: "slider",
        "aria-label": "Alpha",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(Fe),
        "aria-disabled": l || void 0,
        tabIndex: l ? -1 : _,
        className: xe.dtAlphaPicker,
        style: {
          background: `repeating-conic-gradient(var(--dt-color-border) 0% 25%, var(--dt-color-surface) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${w.h}, 100%, 50%))`
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
    r && /* @__PURE__ */ N("div", { className: xe.dtColorpickerRgba, children: [
      /* @__PURE__ */ N("label", { className: xe.dtColorpickerRgbaField, children: [
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
      /* @__PURE__ */ N("label", { className: xe.dtColorpickerRgbaField, children: [
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
      /* @__PURE__ */ N("label", { className: xe.dtColorpickerRgbaField, children: [
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
      /* @__PURE__ */ N("label", { className: xe.dtColorpickerRgbaField, children: [
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
      /* @__PURE__ */ N("label", { className: xe.dtColorpickerRgbaField, children: [
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
        "aria-disabled": l || void 0,
        tabIndex: l ? -1 : _,
        style: { backgroundColor: H },
        onClick: () => {
          const b = Fn(H);
          a ? L({ ...b, a: d.a }, !1) : (O(null), M({ ...b, a: d.a }), U(!1), D?.(), m.current?.focus());
        }
      },
      H
    )) }),
    a && /* @__PURE__ */ t("div", { className: xe.dtColorpickerFooter, children: /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        className: xe.dtColorpickerOk,
        onClick: Xe,
        children: "OK"
      }
    ) })
  ] });
  return /* @__PURE__ */ N(
    "div",
    {
      ref: y,
      className: [
        xe.dtColorpicker,
        $ ? xe.dtColorpickerOpen : null,
        i ? xe.dtColorpickerInvalid : null,
        z
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ N(
          "button",
          {
            ref: m,
            type: "button",
            role: "button",
            className: [xe.dtColorpickerTrigger, be].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": $,
            "aria-controls": g,
            "aria-label": "Pick a color",
            "aria-disabled": l || void 0,
            disabled: l,
            tabIndex: _,
            onClick: se,
            onKeyDown: (H) => {
              H.key === "Escape" && $ && (H.preventDefault(), T());
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
        $ && /* @__PURE__ */ t(
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
}, Ne = {}, eh = 42;
function mt(e) {
  return String(e).padStart(2, "0");
}
function ut(e) {
  return `${e.year}-${mt(e.month)}-${mt(e.day)}`;
}
function th(e, n) {
  const r = ut(e);
  return n ? `${r} ${mt(e.hour)}:${mt(e.minute)}:${mt(e.second)}` : r;
}
function Kn(e) {
  const n = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!n) return null;
  const r = Number(n[1]), s = Number(n[2]), o = Number(n[3]), a = n[4] != null ? Number(n[4]) : 0, u = n[5] != null ? Number(n[5]) : 0, l = n[6] != null ? Number(n[6]) : 0;
  if (s < 1 || s > 12 || o < 1 || o > 31) return null;
  const i = new Date(r, s - 1, o, a, u, l);
  return i.getFullYear() !== r || i.getMonth() !== s - 1 || i.getDate() !== o ? null : { year: r, month: s, day: o, hour: a, minute: u, second: l };
}
function Rt() {
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
function It(e, n) {
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
function Sn(e, n) {
  const r = new Date(e.year, e.month - 1 + n, 1), s = r.getFullYear(), o = r.getMonth() + 1, a = new Date(s, o, 0).getDate();
  return {
    year: s,
    month: o,
    day: Math.min(e.day, a),
    hour: e.hour,
    minute: e.minute,
    second: e.second
  };
}
function cr(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const ir = {
  yyyy: (e) => String(e.year).padStart(4, "0"),
  yy: (e) => mt(e.year % 100),
  MM: (e) => mt(e.month),
  M: (e) => String(e.month),
  dd: (e) => mt(e.day),
  d: (e) => String(e.day),
  HH: (e) => mt(e.hour),
  H: (e) => String(e.hour),
  mm: (e) => mt(e.minute),
  m: (e) => String(e.minute),
  ss: (e) => mt(e.second),
  s: (e) => String(e.second),
  tt: (e, n, r) => new Intl.DateTimeFormat(r, {
    hour: "numeric",
    hour12: !0
  }).formatToParts(n).find((o) => o.type === "dayPeriod")?.value ?? ""
}, nh = ["yyyy", "yy", "MM", "dd", "HH", "mm", "ss", "tt"], rh = ["y", "M", "d", "H", "m", "s"];
function Dn(e, n, r) {
  const s = new Date(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second
  );
  let o = "", a = 0;
  for (; a < n.length; ) {
    let u = !1;
    for (const i of nh)
      if (n.startsWith(i, a)) {
        o += ir[i](e, s, r), a += i.length, u = !0;
        break;
      }
    if (u) continue;
    const l = n[a];
    if (rh.includes(l)) {
      o += ir[l](e, s, r), a += 1;
      continue;
    }
    o += l, a += 1;
  }
  return o;
}
const sh = [
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
function oh(e, n) {
  const r = {};
  let s = 0, o = 0;
  for (; o < n.length; ) {
    let l = null;
    for (const i of sh)
      if (n.startsWith(i, o)) {
        l = i;
        break;
      }
    if (l) {
      const i = e.slice(s, s + l.length);
      if (!/^\d+$/.test(i)) return null;
      const h = Number(i);
      switch (l) {
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
      s += l.length, o += l.length;
      continue;
    }
    if (e[s] !== n[o]) return null;
    s += 1, o += 1;
  }
  const a = {
    year: r.year ?? (/* @__PURE__ */ new Date()).getFullYear(),
    month: r.month ?? 1,
    day: r.day ?? 1,
    hour: r.hour ?? 0,
    minute: r.minute ?? 0,
    second: r.second ?? 0
  };
  if (a.month < 1 || a.month > 12 || a.day < 1 || a.day > 31)
    return null;
  const u = new Date(
    a.year,
    a.month - 1,
    a.day,
    a.hour,
    a.minute,
    a.second
  );
  return u.getFullYear() !== a.year || u.getMonth() !== a.month - 1 || u.getDate() !== a.day ? null : a;
}
function _n(e, n) {
  const r = Kn(e);
  return r || oh(e, n);
}
function ah(e, n, r) {
  return n && ut(e) < ut(n) ? n : r && ut(e) > ut(r) ? r : e;
}
const lh = ["hour", "minute", "second"];
function zn(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const u0 = qe(function({
  size: n = "md",
  invalid: r = !1,
  value: s,
  defaultValue: o,
  format: a = "yyyy-MM-dd",
  min: u,
  max: l,
  showTime: i = !1,
  showButton: h = !0,
  allowClear: x = !1,
  inline: _ = !1,
  disabledDates: z,
  locale: k = "en-US",
  onChange: C,
  onValueChange: I,
  onOpen: D,
  onClose: y,
  disabled: m,
  readOnly: p,
  placeholder: S,
  ariaLabel: f,
  triggerLabel: g,
  clearLabel: c,
  tabIndex: v,
  className: $,
  onBlur: U,
  onKeyDown: R,
  ...O
}, d) {
  const w = le(null), M = le(null), L = le(null), T = le(null), J = Ue(), se = s !== void 0, [de, ne] = V(
    () => o != null ? Dn(_n(o, a) ?? Rt(), a, k) : ""
  ), [oe, ae] = V(!1), [X, W] = V(null), [B, te] = V(() => {
    const j = s !== void 0 ? s ?? "" : o ?? "";
    if (j) {
      const re = _n(j, a);
      if (re) return re;
    }
    return Rt();
  }), he = Se(() => u ? Kn(u) : null, [u]), Z = Se(() => l ? Kn(l) : null, [l]), me = Se(
    () => new Set(z ?? []),
    [z]
  ), ye = Se(() => {
    const j = se ? s ?? "" : de;
    return j ? _n(j, a) : null;
  }, [s, de, se, a]), ze = q(
    (j) => {
      const re = ut(j);
      return !!(me.has(re) || he && re < ut(he) || Z && re > ut(Z));
    },
    [me, he, Z]
  ), He = q(
    (j) => {
      if (!ze(j)) return j;
      for (let re = 1; re <= 366; re += 1) {
        const Ce = It(j, re);
        if (!ze(Ce)) return Ce;
        const we = It(j, -re);
        if (!ze(we)) return we;
      }
      return j;
    },
    [ze]
  ), Me = q(
    (j) => {
      se || ne(j ? Dn(j, a, k) : "");
      const re = j ? th(j, i) : "";
      C?.(re), I?.(re);
    },
    [se, a, k, i, C, I]
  ), Xe = q(
    (j) => {
      M.current = j, typeof d == "function" ? d(j) : d && (d.current = j);
    },
    [d]
  ), be = q(() => {
    ae(!1), W(null), y?.(), _ || L.current?.focus();
  }, [_, y]), Ge = q(() => {
    if (m) return;
    const j = ye ?? Rt();
    W(j), te(He(j)), ae(!0), D?.();
  }, [m, ye, He, D]), et = q(() => {
    oe ? be() : Ge();
  }, [oe, be, Ge]), We = q((j) => {
    T.current?.querySelector(
      `[data-date="${ut(j)}"]`
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
        const we = Ce ?? ye ?? Rt(), Je = Math.min(j === "hour" ? 23 : 59, Math.max(0, we[j] + re));
        return { ...we, [j]: Je };
      });
    },
    [ye]
  ), Ye = q(
    (j, re) => {
      const Ce = re.replace(/\D/g, ""), we = Ce === "" ? 0 : Number(Ce), Ee = j === "hour" ? 23 : 59;
      W((Je) => ({ ...Je ?? ye ?? Rt(), [j]: Math.min(Ee, we) }));
    },
    [ye]
  ), H = q(() => {
    X && (Me(X), be());
  }, [X, Me, be]), b = q(() => {
    if (oe) return;
    const j = _n(de, a);
    Me(j ? ah(j, he, Z) : null);
  }, [oe, de, a, he, Z, Me]), E = (j) => {
    const re = j.target.value;
    se || ne(re), oe && W(null);
  }, K = (j) => {
    j.key === "Enter" ? (j.preventDefault(), oe ? X && (Me(X), be()) : b()) : j.key === "Escape" ? oe && (j.preventDefault(), be()) : j.key === "ArrowDown" && !oe ? (j.preventDefault(), Ge()) : j.key === "Tab" && oe && ae(!1), R?.(j);
  }, Q = (j) => {
    b(), U?.(j);
  }, G = (j) => {
    let re = null;
    switch (j.key) {
      case "ArrowLeft":
        re = It(B, -1), j.preventDefault();
        break;
      case "ArrowRight":
        re = It(B, 1), j.preventDefault();
        break;
      case "ArrowUp":
        re = It(B, -7), j.preventDefault();
        break;
      case "ArrowDown":
        re = It(B, 7), j.preventDefault();
        break;
      case "Home":
        re = It(B, -cr(B)), j.preventDefault();
        break;
      case "End":
        re = It(B, 6 - cr(B)), j.preventDefault();
        break;
      case "PageUp":
        re = Sn(B, j.shiftKey ? -12 : -1), j.preventDefault();
        break;
      case "PageDown":
        re = Sn(B, j.shiftKey ? 12 : 1), j.preventDefault();
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
      w.current && !w.current.contains(re.target) && be();
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
    se || ne(""), C?.(""), I?.(""), M.current?.focus();
  }, ke = oe && X ? Dn(X, a, k) : se ? s ? Dn(_n(s, a) ?? Rt(), a, k) : "" : de, Re = se ? !!s : de.length > 0, je = _ || oe, tt = { year: B.year, month: B.month }, gt = new Date(tt.year, tt.month - 1, 1).getDay(), Y = {
    year: tt.year,
    month: tt.month,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0
  }, $e = [];
  for (let j = 0; j < eh; j += 1)
    $e.push(It(Y, j - gt));
  const F = X ? ut(X) : ye ? ut(ye) : null, ee = ut(Rt()), ie = `${tt.year}-${mt(tt.month)}`, _e = Se(
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
  }).format(new Date(tt.year, tt.month - 1, 1)), ge = Array.from(
    { length: 7 },
    (j, re) => new Intl.DateTimeFormat(k, { weekday: "short" }).format(
      new Date(2021, 0, 3 + re)
    )
  ), Ae = n === "xs" ? Ne.dtDatepickerInputXs : n === "sm" ? Ne.dtDatepickerInputSm : n === "lg" ? Ne.dtDatepickerInputLg : n === "xl" ? Ne.dtDatepickerInputXl : Ne.dtDatepickerInputMd, Be = /* @__PURE__ */ N(
    "div",
    {
      className: Ne.dtDatepickerCalendar,
      "aria-label": f ?? "Date picker",
      children: [
        /* @__PURE__ */ N("div", { className: Ne.dtDatepickerHeader, children: [
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: Ne.dtDatepickerNav,
              "aria-label": "Previous month",
              onClick: () => {
                const j = He(Sn(B, -1));
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
                const j = He(Sn(B, 1));
                te(j), setTimeout(() => We(j), 0);
              },
              children: /* @__PURE__ */ t(Ve, { name: "chevron-right", size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ N(
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
                const we = ut(Ce), Ee = ze(Ce), Je = we.startsWith(ie);
                return /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    role: "gridcell",
                    "data-date": we,
                    tabIndex: we === ut(B) ? 0 : -1,
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
        i && /* @__PURE__ */ N("div", { className: Ne.dtDatepickerTime, children: [
          lh.map((j) => /* @__PURE__ */ N("label", { className: Ne.dtDatepickerTimeField, children: [
            /* @__PURE__ */ t("span", { className: Ne.dtDatepickerTimeLabel, children: zn(j) }),
            /* @__PURE__ */ N("div", { className: Ne.dtDatepickerTimeControl, children: [
              /* @__PURE__ */ t(
                "input",
                {
                  className: Ne.dtDatepickerTimeInput,
                  inputMode: "numeric",
                  "aria-label": zn(j),
                  value: mt((X ?? ye ?? Rt())[j]),
                  onChange: (re) => Ye(j, re.target.value),
                  onKeyDown: (re) => {
                    re.key === "ArrowUp" ? (re.preventDefault(), Fe(j, 1)) : re.key === "ArrowDown" ? (re.preventDefault(), Fe(j, -1)) : re.key === "Enter" && (re.preventDefault(), H());
                  }
                }
              ),
              /* @__PURE__ */ N("span", { className: Ne.dtDatepickerTimeButtons, children: [
                /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    "aria-label": `Increase ${zn(j).toLowerCase()}`,
                    onClick: () => Fe(j, 1),
                    children: /* @__PURE__ */ t(Ve, { name: "chevron-up", size: 11 })
                  }
                ),
                /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    "aria-label": `Decrease ${zn(j).toLowerCase()}`,
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
  return /* @__PURE__ */ N(
    "div",
    {
      ref: w,
      className: [
        Ne.dtDatepicker,
        _ ? Ne.dtDatepickerInline : null,
        $
      ].filter(Boolean).join(" "),
      children: [
        !_ && /* @__PURE__ */ N(Oe, { children: [
          /* @__PURE__ */ t(
            "input",
            {
              ref: Xe,
              type: "text",
              autoComplete: "off",
              value: ke,
              disabled: m,
              readOnly: p,
              placeholder: S,
              tabIndex: v,
              role: h ? void 0 : "combobox",
              "aria-label": f ?? "Date",
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
              ...O
            }
          ),
          x && !m && Re && /* @__PURE__ */ t(
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
            role: _ ? void 0 : "dialog",
            className: _ ? void 0 : Ne.dtDatepickerPopup,
            children: Be
          }
        )
      ]
    }
  );
}), Bt = {}, f0 = ({
  value: e = 0,
  stars: n = 5,
  readOnly: r = !1,
  disabled: s = !1,
  ariaLabel: o = "Rating",
  clearLabel: a = "Clear",
  rateLabel: u = "Rate",
  tabIndex: l = 0,
  className: i,
  onChange: h,
  onValueChange: x
}) => {
  const [_, z] = V(e), k = q(
    (m) => Math.min(n, Math.max(1, m)),
    [n]
  ), C = q(
    (m) => {
      h?.(m), x?.(m);
    },
    [h, x]
  ), I = q(
    (m) => {
      r || s || (C(m), z(m));
    },
    [r, s, C]
  ), D = (m) => {
    if (r || s) return;
    const p = _ > 0 ? _ : 1;
    switch (m.key) {
      case "ArrowRight":
      case "ArrowUp":
        m.preventDefault(), I(k(p + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        m.preventDefault(), I(k(p - 1));
        break;
      case "Home":
        m.preventDefault(), I(1);
        break;
      case "End":
        m.preventDefault(), I(n);
        break;
    }
  }, y = Array.from({ length: n }, (m, p) => p + 1);
  return /* @__PURE__ */ N(
    "div",
    {
      role: "radiogroup",
      "aria-label": o,
      "aria-readonly": r || void 0,
      className: [
        Bt.dtRating,
        r ? Bt.dtRatingReadonly : null,
        s ? Bt.dtRatingDisabled : null,
        i
      ].filter(Boolean).join(" "),
      onKeyDown: D,
      children: [
        !r && !s && /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: Bt.dtRatingClear,
            "aria-label": a,
            tabIndex: e === 0 ? l : -1,
            disabled: s,
            onClick: () => I(0),
            children: /* @__PURE__ */ t(Ve, { name: "ban", size: 16 })
          }
        ),
        y.map((m) => {
          const p = m <= e, S = m === (e > 0 ? e : _);
          return /* @__PURE__ */ N(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": p,
              "aria-posinset": m,
              "aria-setsize": n,
              "aria-label": `${u} ${m}`,
              tabIndex: S ? l : -1,
              "aria-disabled": s || r || void 0,
              disabled: s || r,
              className: [
                Bt.dtRatingItem,
                p ? Bt.dtRatingItemFilled : null
              ].filter(Boolean).join(" "),
              onClick: () => I(m),
              onFocus: () => z(m),
              children: [
                /* @__PURE__ */ t("span", { className: Bt.dtRatingIconFilled, "aria-hidden": "true", children: /* @__PURE__ */ t(Ve, { name: "star", size: 20 }) }),
                /* @__PURE__ */ t("span", { className: Bt.dtRatingIconEmpty, "aria-hidden": "true", children: /* @__PURE__ */ t(Ve, { name: "star-outline", size: 20 }) })
              ]
            },
            m
          );
        })
      ]
    }
  );
}, Ht = {};
function wt(e, n, r) {
  return Math.min(r, Math.max(n, e));
}
const _0 = ({
  value: e = 0,
  valueMin: n = 0,
  valueMax: r = 100,
  min: s = 0,
  max: o = 100,
  step: a = 1,
  range: u = !1,
  orientation: l = "horizontal",
  disabled: i = !1,
  label: h = "Value",
  minLabel: x = "Min",
  maxLabel: _ = "Max",
  tabIndex: z = 0,
  className: k,
  onChange: C,
  onInput: I,
  onValueChange: D,
  onInputChange: y
}) => {
  const m = le(null), p = le(null), [S, f] = V(null), g = S ?? e, c = Se(() => wt(g, s, o), [g, s, o]), v = Se(
    () => wt(u ? n : c, s, o),
    [u, n, c, s, o]
  ), $ = Se(
    () => wt(u ? Math.max(r, v) : c, s, o),
    [u, r, v, c, s, o]
  ), U = q(
    (B) => {
      const te = o - s;
      return te <= 0 ? 0 : (wt(B, s, o) - s) / te * 100;
    },
    [s, o]
  ), R = q(
    (B, te) => {
      const he = m.current;
      if (!he) return s;
      const Z = he.getBoundingClientRect();
      let me;
      l === "vertical" ? me = 1 - (te - Z.top) / Z.height : me = (B - Z.left) / Z.width;
      const ye = s + wt(me, 0, 1) * (o - s);
      return a > 0 ? wt(Math.round(ye / a) * a, s, o) : wt(ye, s, o);
    },
    [s, o, a, l]
  ), O = q(
    (B) => {
      typeof B == "number" && f(B), C?.(B), D?.(B);
    },
    [C, D]
  ), d = q(
    (B) => {
      typeof B == "number" && f(B), I?.(B), y?.(B);
    },
    [I, y]
  ), w = q(
    (B, te, he) => {
      const Z = R(te, he);
      let me;
      u ? B === "min" ? me = { min: Math.min(Z, $), max: $ } : me = { min: v, max: Math.max(Z, v) } : me = Z, d(me), p.current === null && O(me);
    },
    [u, R, v, $, d, O]
  ), M = q(
    (B, te) => {
      const he = (a > 0 ? a : 1) * te;
      let Z;
      u ? B === "min" ? Z = {
        min: wt(v + he, s, $),
        max: $
      } : Z = {
        min: v,
        max: wt($ + he, v, o)
      } : Z = wt(c + he, s, o), O(Z);
    },
    [u, a, s, o, v, $, c, O]
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
          te.preventDefault(), O(u ? B === "min" ? { min: s, max: $ } : { min: v, max: v } : s);
          break;
        case "End":
          te.preventDefault(), O(u ? B === "min" ? { min: $, max: $ } : { min: v, max: o } : o);
          break;
      }
  }, T = (B, te) => {
    i || (te.preventDefault(), te.currentTarget.focus(), typeof te.currentTarget.setPointerCapture == "function" && te.currentTarget.setPointerCapture(te.pointerId), p.current = { key: B, pointerId: te.pointerId }, w(B, te.clientX, te.clientY));
  }, J = (B) => {
    !p.current || p.current.pointerId !== B.pointerId || (B.preventDefault(), w(p.current.key, B.clientX, B.clientY));
  }, se = (B) => {
    !p.current || p.current.pointerId !== B.pointerId || (p.current = null, B.preventDefault(), O(u ? { min: v, max: $ } : c));
  }, [de, ne] = V(null), oe = U(v), ae = U($), X = u ? oe : 0, W = ae;
  return /* @__PURE__ */ t(
    "div",
    {
      className: [
        Ht.dtSlider,
        l === "vertical" ? Ht.dtSliderVertical : null,
        i ? Ht.dtSliderDisabled : null,
        k
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ N("div", { ref: m, className: Ht.dtSliderTrack, children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: Ht.dtSliderRange,
            style: l === "vertical" ? { bottom: `${X}%`, height: `${W - X}%` } : { left: `${X}%`, width: `${W - X}%` }
          }
        ),
        /* @__PURE__ */ t(
          "div",
          {
            role: "slider",
            "aria-valuemin": s,
            "aria-valuemax": o,
            "aria-valuenow": Math.round(v),
            "aria-orientation": l,
            "aria-label": u ? x : h,
            "aria-disabled": i || void 0,
            tabIndex: i || u && de === "max" ? -1 : z,
            className: Ht.dtSliderHandle,
            style: l === "vertical" ? { bottom: `calc(${oe}% - 8px)` } : { left: `calc(${oe}% - 8px)` },
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
            "aria-valuenow": Math.round($),
            "aria-orientation": l,
            "aria-label": _,
            "aria-disabled": i || void 0,
            tabIndex: i || de === "min" ? -1 : z,
            className: Ht.dtSliderHandle,
            style: l === "vertical" ? { bottom: `calc(${ae}% - 8px)` } : { left: `calc(${ae}% - 8px)` },
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
}, Pe = {}, ch = "-10675199.02:48:05.4775808", ih = "10675199.02:48:05.4775808", jt = 86400, Et = 3600, kt = 60, Rn = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, dr = {
  days: jt,
  hours: Et,
  minutes: kt,
  seconds: 1
}, dh = {
  day: jt,
  hour: Et,
  minute: kt,
  second: 1
};
function Yt(e) {
  return String(e).padStart(2, "0");
}
function bn(e) {
  const n = e.trim();
  if (!n) return null;
  let r = 1, s = n;
  s.startsWith("-") ? (r = -1, s = s.slice(1)) : s.startsWith("+") && (s = s.slice(1));
  const o = /^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(
    s
  );
  if (o) {
    if (!o.slice(1).some((_) => _ != null)) return null;
    const l = o[1] != null ? Number(o[1]) : 0, i = o[2] != null ? Number(o[2]) : 0, h = o[3] != null ? Number(o[3]) : 0, x = o[4] != null ? Number(o[4]) : 0;
    return r * (l * jt + i * Et + h * kt + x);
  }
  const a = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(s);
  if (a) {
    const u = a[1] != null ? Number(a[1]) : 0, l = Number(a[2]), i = Number(a[3]), h = a[4] != null ? Number(a[4]) : 0, x = a[5] != null ? +`0.${a[5]}` : 0;
    return l > 23 || i > 59 || h > 59 ? null : r * (u * jt + l * Et + i * kt + h + x);
  }
  return null;
}
function uh(e) {
  return e.days * jt + e.hours * Et + e.minutes * kt + e.seconds;
}
function ur(e) {
  let n = Math.abs(e);
  const r = Math.floor(n / jt);
  n %= jt;
  const s = Math.floor(n / Et);
  n %= Et;
  const o = Math.floor(n / kt), a = Math.round(n % kt * 1e9) / 1e9;
  return { days: r, hours: s, minutes: o, seconds: a };
}
function Hn(e, n) {
  const r = e < 0;
  let s = Math.abs(e);
  n === "minute" ? s = Math.round(s / kt) * kt : n === "hour" ? s = Math.round(s / Et) * Et : n === "day" && (s = Math.round(s / jt) * jt);
  let o = Math.round(s % kt);
  const a = o === 60 ? 1 : 0;
  o = o === 60 ? 0 : o;
  const u = Math.floor(s / kt) + a, l = u % 60, i = Math.floor(u / 60), h = i % 24, x = Math.floor(i / 24), _ = r ? "-" : "", z = x > 0 ? `${x}.` : "";
  switch (n) {
    case "day":
      return `${_}${x} day${x === 1 ? "" : "s"}`;
    case "hour":
      return `${_}${z}${Yt(h)}`;
    case "minute":
      return `${_}${z}${Yt(h)}:${Yt(l)}`;
    default:
      return `${_}${z}${Yt(h)}:${Yt(l)}:${Yt(o)}`;
  }
}
function fr(e, n = "second") {
  const r = bn(e);
  return r === null ? "" : Hn(r, n);
}
function Bn(e, n, r) {
  return Math.min(r, Math.max(n, e));
}
const p0 = qe(
  function({
    size: n = "md",
    invalid: r = !1,
    value: s,
    defaultValue: o,
    min: a = ch,
    max: u = ih,
    step: l = "1",
    precision: i = "second",
    showDays: h = !0,
    showHours: x = !0,
    showMinutes: _ = !0,
    showSeconds: z = !0,
    allowClear: k = !1,
    inline: C = !1,
    onChange: I,
    onValueChange: D,
    onOpen: y,
    onClose: m,
    disabled: p,
    placeholder: S,
    ariaLabel: f,
    triggerLabel: g,
    clearLabel: c,
    tabIndex: v,
    className: $,
    onBlur: U,
    onKeyDown: R,
    ...O
  }, d) {
    const w = le(null), M = le(null), L = le(null), T = Ue(), J = s !== void 0, [se, de] = V(
      () => o != null ? fr(o, i) : ""
    ), [ne, oe] = V(!1), [ae, X] = V(null), [W, B] = V(null), te = Se(
      () => bn(a) ?? -Number.MAX_SAFE_INTEGER,
      [a]
    ), he = Se(
      () => bn(u) ?? Number.MAX_SAFE_INTEGER,
      [u]
    ), Z = Se(() => {
      const Y = Number.parseFloat(l);
      return Number.isNaN(Y) || Y <= 0 ? 1 : Y;
    }, [l]), me = Se(() => {
      const Y = J ? s ?? "" : se;
      return Y ? bn(Y) : null;
    }, [s, se, J]), ye = q(
      (Y) => {
        const $e = Y === null ? "" : Hn(Y, i);
        J || de($e), I?.($e), D?.($e);
      },
      [J, i, I, D]
    ), ze = q(
      (Y) => {
        Y && ae !== null && ye(ae), oe(!1), X(null), B(null), m?.(), C || L.current?.focus();
      },
      [C, ae, ye, m]
    ), He = q(() => {
      p || (X(me ?? 0), oe(!0), y?.());
    }, [p, me, y]), Me = q(() => {
      ne ? ze(!1) : He();
    }, [ne, ze, He]), Xe = q(
      (Y, $e) => {
        X((F) => {
          const ie = (F ?? me ?? 0) + $e * Z * dr[Y];
          return Bn(ie, te, he);
        });
      },
      [me, Z, te, he]
    ), be = q(
      (Y) => {
        const $e = W?.[Y];
        if ($e == null) return;
        const F = Number.parseFloat($e), ee = Number.isNaN(F) ? 0 : F;
        X((ie) => {
          const _e = ie ?? me ?? 0, ce = ur(_e);
          ce[Y] = ee;
          const Ae = (_e < 0 ? -1 : 1) * uh(ce);
          return Bn(Ae, te, he);
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
      const Y = bn(se);
      ye(Y !== null ? Bn(Y, te, he) : null);
    }, [ne, se, te, he, ye]), Ze = (Y) => {
      J || de(Y.target.value);
    }, Fe = (Y) => {
      Y.key === "Enter" ? (Y.preventDefault(), ne ? ze(!0) : We()) : Y.key === "Escape" && ne ? (Y.preventDefault(), ze(!1)) : Y.key === "ArrowDown" && !ne ? (Y.preventDefault(), He()) : Y.key === "Tab" && ne && oe(!1), R?.(Y);
    }, Ye = (Y) => {
      We(), U?.(Y);
    }, H = () => {
      J || de(""), I?.(""), D?.(""), M.current?.focus();
    };
    De(() => {
      if (!ne) return;
      const Y = ($e) => {
        w.current && !w.current.contains($e.target) && ze(!1);
      };
      return document.addEventListener("mousedown", Y), () => document.removeEventListener("mousedown", Y);
    }, [ne, ze]), De(() => {
      if (!ne) return;
      const Y = ($e) => {
        $e.key === "Escape" && ze(!1);
      };
      return document.addEventListener("keydown", Y), () => document.removeEventListener("keydown", Y);
    }, [ne, ze]), De(() => {
      if (C && ae !== null) {
        const Y = me;
        (Y === null || Math.abs(ae - Y) > 1e-9) && ye(ae);
      }
    }, [C, ae, me, ye]);
    const b = q(
      (Y) => {
        M.current = Y, typeof d == "function" ? d(Y) : d && (d.current = Y);
      },
      [d]
    ), E = J ? s ? fr(s, i) : "" : se, K = J ? !!s : se.length > 0, Q = C || ne, G = ae ?? me ?? 0, fe = ur(G), ke = dh[i], je = ["days", "hours", "minutes", "seconds"].filter(
      (Y) => dr[Y] >= ke && (Y === "days" ? h : Y === "hours" ? x : Y === "minutes" ? _ : z)
    ), tt = n === "xs" ? Pe.dtTimespanpickerInputXs : n === "sm" ? Pe.dtTimespanpickerInputSm : n === "lg" ? Pe.dtTimespanpickerInputLg : n === "xl" ? Pe.dtTimespanpickerInputXl : Pe.dtTimespanpickerInputMd, gt = /* @__PURE__ */ N("div", { className: Pe.dtTimespanpickerPanel, children: [
      /* @__PURE__ */ t("div", { className: Pe.dtTimespanpickerPreview, "aria-live": "polite", children: Hn(G, i) }),
      /* @__PURE__ */ t("div", { className: Pe.dtTimespanpickerUnits, children: je.map((Y) => /* @__PURE__ */ N("label", { className: Pe.dtTimespanpickerUnit, children: [
        /* @__PURE__ */ t("span", { className: Pe.dtTimespanpickerUnitLabel, children: Rn[Y] }),
        /* @__PURE__ */ N("span", { className: Pe.dtTimespanpickerUnitControl, children: [
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
          /* @__PURE__ */ N("span", { className: Pe.dtTimespanpickerUnitButtons, children: [
            /* @__PURE__ */ t(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${Rn[Y].toLowerCase()}`,
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
                "aria-label": `Decrease ${Rn[Y].toLowerCase()}`,
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
    return /* @__PURE__ */ N(
      "div",
      {
        ref: w,
        className: [
          Pe.dtTimespanpicker,
          C ? Pe.dtTimespanpickerInline : null,
          $
        ].filter(Boolean).join(" "),
        children: [
          !C && /* @__PURE__ */ N(Oe, { children: [
            /* @__PURE__ */ t(
              "input",
              {
                ref: b,
                type: "text",
                autoComplete: "off",
                value: E,
                disabled: p,
                placeholder: S,
                tabIndex: v,
                role: "combobox",
                "aria-label": f ?? "Time span",
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
                ...O
              }
            ),
            k && !p && K && /* @__PURE__ */ t(
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
              role: C ? void 0 : "dialog",
              "aria-label": f ?? "Time span picker",
              className: C ? void 0 : Pe.dtTimespanpickerPopup,
              children: gt
            }
          )
        ]
      }
    );
  }
), fh = "_wrapper_gfb15_1", _h = "_cells_gfb15_8", ph = "_cell_gfb15_8", hh = "_invalid_gfb15_63", mh = "_live_gfb15_72", Wt = {
  wrapper: fh,
  cells: _h,
  cell: ph,
  "cell-sm": "_cell-sm_gfb15_45",
  "cell-md": "_cell-md_gfb15_51",
  "cell-lg": "_cell-lg_gfb15_57",
  invalid: hh,
  live: mh
};
function _r(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const h0 = qe(
  function({
    length: n = 6,
    value: r,
    defaultValue: s,
    onChange: o,
    invalid: a = !1,
    size: u = "md",
    autoFocus: l = !1,
    disabled: i = !1,
    label: h = "Security code",
    liveAnnounce: x = !0,
    className: _,
    "aria-label": z
  }, k) {
    const C = Ue(), I = r !== void 0, [D, y] = V(_r(s).join("")), m = I ? _r(r).join("") : D, p = Array.from({ length: n }, (O, d) => m[d] ?? ""), S = le([]), [f, g] = V(""), c = (O) => {
      I || y(O), o?.(O);
    }, v = (O) => {
      const d = S.current[O];
      d && !d.disabled && (d.focus(), d.select());
    }, $ = (O, d) => {
      const w = d.replace(/\D/g, "").slice(-1), M = m.split("");
      if (w) {
        M[O] = w;
        const L = M.join("").slice(0, n);
        c(L), L.length < n ? v(O + 1) : x && g("Code complete");
      }
    }, U = (O, d) => {
      if (d.key === "Backspace") {
        if (d.preventDefault(), m[O]) {
          const w = m.split("");
          w[O] = "", c(w.join(""));
        } else if (O > 0) {
          const w = m.split("");
          w[O - 1] = "", c(w.join("")), v(O - 1);
        }
      } else d.key === "ArrowLeft" && O > 0 ? (d.preventDefault(), v(O - 1)) : d.key === "ArrowRight" && O < n - 1 ? (d.preventDefault(), v(O + 1)) : d.key === "Home" ? (d.preventDefault(), v(0)) : d.key === "End" && (d.preventDefault(), v(n - 1));
    }, R = (O, d) => {
      d.preventDefault();
      const w = d.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!w) return;
      const M = m.split("");
      let L = 0;
      for (let J = 0; J < w.length && O + J < n; J++)
        M[O + J] = w[J] ?? "", L++;
      const T = M.join("");
      c(T), T.length >= n ? x && g("Code complete") : v(O + L);
    };
    return /* @__PURE__ */ N(
      "div",
      {
        className: [Wt.wrapper, _].filter(Boolean).join(" "),
        role: "group",
        "aria-label": z ?? h,
        "data-invalid": a || void 0,
        children: [
          /* @__PURE__ */ t("div", { className: [Wt.cells, Wt[u]].join(" "), children: p.map((O, d) => /* @__PURE__ */ t(
            "input",
            {
              ref: (w) => {
                S.current[d] = w, d === 0 && k && (typeof k == "function" ? k(w) : k.current = w);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: O,
              disabled: i,
              "aria-label": `Digit ${d + 1} of ${n}`,
              "aria-invalid": a && O !== "" ? !0 : void 0,
              autoFocus: l && d === 0,
              className: [Wt.cell, Wt[`cell-${u}`], a ? Wt.invalid : null].filter(Boolean).join(" "),
              onChange: (w) => $(d, w.target.value),
              onKeyDown: (w) => U(d, w),
              onPaste: (w) => R(d, w),
              onFocus: (w) => w.target.select(),
              onBlur: () => {
                x && g("");
              }
            },
            d
          )) }),
          x && /* @__PURE__ */ t("span", { id: `${C}-live`, role: "status", "aria-live": "polite", className: Wt.live, children: f })
        ]
      }
    );
  }
), gh = "_wrapper_26gop_1", bh = "_header_26gop_7", yh = "_label_26gop_15", vh = "_clear_26gop_22", xh = "_canvas_26gop_53", kh = "_disabled_26gop_69", Zt = {
  wrapper: gh,
  header: bh,
  label: yh,
  clear: vh,
  canvas: xh,
  disabled: kh
}, m0 = qe(
  function({
    value: n,
    defaultValue: r,
    onChange: s,
    penColor: o = "#1c1c1c",
    penWidth: a = 2.5,
    clearLabel: u = "Clear",
    ariaLabel: l = "Signature",
    width: i,
    height: h = 140,
    disabled: x = !1,
    className: _
  }, z) {
    const k = le(null), C = le(!1), I = le(!1), D = le({ x: 0, y: 0 });
    De(() => {
      const c = k.current;
      if (!c) return;
      const v = window.devicePixelRatio || 1, $ = Math.round((i ?? c.clientWidth) * v), U = Math.round(h * v);
      (c.width !== $ || c.height !== U) && (c.width = $, c.height = U);
      const R = c.getContext("2d");
      if (!R) return;
      R.setTransform(v, 0, 0, v, 0, 0), R.lineWidth = a, R.strokeStyle = o, R.lineCap = "round", R.lineJoin = "round";
      const O = n ?? r;
      if (O) {
        const d = new Image();
        d.onload = () => {
          R.drawImage(d, 0, 0, c.clientWidth, h);
        }, d.src = O;
      }
    }, [n, r, o, a, i, h]);
    const y = () => {
      const c = k.current;
      if (!c) return;
      const v = c.toDataURL("image/png");
      s?.(v);
    }, m = () => {
      const c = k.current;
      if (!c) return;
      const v = c.getContext("2d");
      v && v.clearRect(0, 0, c.width, c.height), s?.("");
    };
    Un(z, () => ({
      clear: m,
      toDataURL: (c = "image/png", v) => k.current?.toDataURL(c, v) ?? ""
    }));
    const p = (c) => {
      const v = c.currentTarget.getBoundingClientRect();
      return { x: c.clientX - v.left, y: c.clientY - v.top };
    }, S = (c) => {
      x || (c.preventDefault(), typeof c.currentTarget.setPointerCapture == "function" && c.currentTarget.setPointerCapture(c.pointerId), C.current = !0, I.current = !1, D.current = p(c));
    }, f = (c) => {
      if (!C.current) return;
      c.preventDefault();
      const v = c.currentTarget.getContext("2d");
      if (!v) return;
      const $ = p(c);
      v.beginPath(), v.moveTo(D.current.x, D.current.y), v.lineTo($.x, $.y), v.stroke(), D.current = $, I.current = !0;
    }, g = (c) => {
      C.current && (c.preventDefault(), C.current = !1, I.current && y());
    };
    return /* @__PURE__ */ N("div", { className: [Zt.wrapper, _, x ? Zt.disabled : null].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ N("div", { className: Zt.header, children: [
        /* @__PURE__ */ t("span", { className: Zt.label, children: l }),
        /* @__PURE__ */ t("button", { type: "button", className: Zt.clear, onClick: m, disabled: x, children: u })
      ] }),
      /* @__PURE__ */ t(
        "canvas",
        {
          ref: k,
          role: "img",
          "aria-label": l,
          "aria-disabled": x || void 0,
          style: { width: i ? `${i}px` : void 0, height: `${h}px` },
          className: Zt.canvas,
          onPointerDown: S,
          onPointerMove: f,
          onPointerUp: g,
          onPointerCancel: g
        }
      )
    ] });
  }
), wh = "_wrapper_1v5uo_1", $h = "_trigger_1v5uo_7", Nh = "_list_1v5uo_35", Sh = "_row_1v5uo_44", Dh = "_name_1v5uo_59", zh = "_size_1v5uo_68", Ch = "_progress_1v5uo_74", Oh = "_fill_1v5uo_82", Ih = "_status_1v5uo_99", Mh = "_remove_1v5uo_106", $t = {
  wrapper: wh,
  trigger: $h,
  list: Nh,
  row: Sh,
  name: Dh,
  size: zh,
  progress: Ch,
  fill: Oh,
  status: Ih,
  remove: Mh
};
function jh(e) {
  return e > 0 ? `${Math.max(1, Math.round(e / 1024))} KB` : "0 KB";
}
const g0 = qe(function({
  url: n,
  multiple: r = !1,
  parameterName: s = "files",
  auto: o = !0,
  headers: a,
  accept: u,
  chooseText: l = "Upload",
  children: i,
  onProgress: h,
  onComplete: x,
  onError: _
}, z) {
  const k = le(null), [C, I] = V([]), D = le(/* @__PURE__ */ new Map()), y = (g, c) => {
    I((v) => v.map(($) => $.file.name === g ? { ...$, ...c } : $));
  }, m = (g) => {
    if (!n) return;
    const c = new XMLHttpRequest();
    D.current.set(g.file.name, c);
    const v = new FormData();
    if (v.append(s, g.file), c.upload.addEventListener("progress", ($) => {
      if (!$.lengthComputable) return;
      const U = Math.round($.loaded / $.total * 100);
      y(g.file.name, { state: "uploading", progress: U }), h?.(g.file.name, U);
    }), c.addEventListener("load", () => {
      c.status >= 200 && c.status < 300 ? (y(g.file.name, { state: "complete", progress: 100 }), x?.(g.file.name)) : (y(g.file.name, { state: "error", message: `HTTP ${c.status}` }), _?.(g.file.name, `HTTP ${c.status}`));
    }), c.addEventListener("error", () => {
      y(g.file.name, { state: "error", message: "Network error" }), _?.(g.file.name, "Network error");
    }), a)
      for (const [$, U] of Object.entries(a))
        c.setRequestHeader($, U);
    c.open("POST", n), c.send(v), y(g.file.name, { state: "uploading", progress: 0 });
  }, p = (g) => {
    if (!g) return;
    const c = [...g].map((v) => ({
      file: v,
      state: "pending",
      progress: 0
    }));
    I((v) => [...v, ...c]), k.current && (k.current.value = ""), o && c.forEach(m);
  }, S = (g) => {
    D.current.get(g)?.abort(), D.current.delete(g), I((v) => v.filter(($) => $.file.name !== g));
  }, f = i ?? /* @__PURE__ */ N("button", { type: "button", className: $t.trigger, onClick: () => k.current?.click(), children: [
    /* @__PURE__ */ t(Ve, { name: "upload", size: 14 }),
    l
  ] });
  return Un(z, () => ({
    open: () => k.current?.click(),
    upload: () => C.forEach((g) => g.state === "pending" ? m(g) : null)
  })), /* @__PURE__ */ N("div", { className: $t.wrapper, children: [
    f,
    /* @__PURE__ */ t(
      "input",
      {
        ref: k,
        type: "file",
        hidden: !0,
        multiple: r,
        accept: u,
        "data-testid": "upload-input",
        onChange: (g) => p(g.target.files)
      }
    ),
    !i && C.length > 0 && /* @__PURE__ */ t("ul", { className: $t.list, children: C.map(({ file: g, state: c, progress: v, message: $ }) => /* @__PURE__ */ N("li", { className: $t.row, "data-state": c, "data-testid": "upload-row", children: [
      /* @__PURE__ */ t("span", { className: $t.name, children: g.name }),
      /* @__PURE__ */ t("span", { className: $t.size, children: jh(g.size) }),
      /* @__PURE__ */ t(
        "span",
        {
          className: $t.progress,
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": v,
          children: /* @__PURE__ */ t("span", { className: $t.fill, style: { width: `${v}%` } })
        }
      ),
      /* @__PURE__ */ t("span", { className: $t.status, role: "status", children: c === "uploading" ? "Uploading" : c === "complete" ? "Complete" : c === "error" ? $ ?? "Failed" : "Pending" }),
      /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          className: $t.remove,
          "aria-label": `Remove ${g.name}`,
          onClick: () => S(g.name),
          children: /* @__PURE__ */ t(Ve, { name: "close", size: 14 })
        }
      )
    ] }, g.name)) })
  ] });
}), Eh = "_zone_ws0th_1", Th = "_dragging_ws0th_23", Ah = "_caption_ws0th_28", Lh = "_browse_ws0th_40", Rh = "_disabled_ws0th_67", pn = {
  zone: Eh,
  dragging: Th,
  caption: Ah,
  browse: Lh,
  disabled: Rh
};
function Bh(e, n) {
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
const b0 = qe(function({
  accept: n,
  multiple: r = !1,
  onDrop: s,
  label: o = "Drop files here or browse",
  dragLabel: a = "Drop to attach",
  browseText: u = "Browse",
  disabled: l = !1,
  className: i
}, h) {
  const x = le(null), [_, z] = V(!1), k = (m) => {
    if (!m || m.length === 0) return;
    const p = [...m].filter((S) => Bh(S, n ?? ""));
    p.length !== 0 && s?.(p);
  }, C = (m) => {
    l || (m.preventDefault(), z(!0));
  }, I = (m) => {
    l || (m.preventDefault(), m.dataTransfer.dropEffect = "copy", z(!0));
  }, D = (m) => {
    l || m.currentTarget.contains(m.relatedTarget) || z(!1);
  }, y = (m) => {
    l || (m.preventDefault(), z(!1), k(m.dataTransfer.files));
  };
  return Un(h, () => ({
    open: () => x.current?.click()
  })), /* @__PURE__ */ N(
    "div",
    {
      role: "region",
      "aria-label": o,
      className: [pn.zone, _ ? pn.dragging : null, l ? pn.disabled : null, i].filter(Boolean).join(" "),
      onDragEnter: C,
      onDragOver: I,
      onDragLeave: D,
      onDrop: y,
      children: [
        /* @__PURE__ */ t("p", { className: pn.caption, children: _ ? a : o }),
        !l && /* @__PURE__ */ t("button", { type: "button", className: pn.browse, onClick: () => x.current?.click(), children: u }),
        /* @__PURE__ */ t(
          "input",
          {
            ref: x,
            type: "file",
            hidden: !0,
            multiple: r,
            accept: n,
            "data-testid": "dropzone-input",
            onChange: (m) => {
              k(m.target.files), m.target.value = "";
            }
          }
        )
      ]
    }
  );
}), Ph = "_root_zkoiq_1", qh = "_menubar_zkoiq_5", Fh = "_horizontal_zkoiq_15", Kh = "_vertical_zkoiq_20", Hh = "_itemWrapper_zkoiq_25", Wh = "_item_zkoiq_25", Uh = "_disabled_zkoiq_61", Vh = "_icon_zkoiq_68", Xh = "_text_zkoiq_75", Gh = "_caret_zkoiq_79", Yh = "_hasChildren_zkoiq_85", Zh = "_submenu_zkoiq_94", Jh = "_submenuItem_zkoiq_118", ot = {
  root: Ph,
  menubar: qh,
  horizontal: Fh,
  vertical: Kh,
  itemWrapper: Hh,
  item: Wh,
  disabled: Uh,
  icon: Vh,
  text: Xh,
  caret: Gh,
  hasChildren: Yh,
  submenu: Zh,
  submenuItem: Jh
};
function hn(e) {
  return !!e.disabled;
}
function y0({
  items: e,
  orientation: n = "horizontal",
  onClick: r,
  Click: s,
  ariaLabel: o = "Menu",
  className: a
}) {
  const u = Ue(), l = le(null), i = le(null), [h, x] = V(null), _ = le(0), z = le(null), k = q(
    (y) => {
      const m = { text: y.text, value: y.value, path: y.path };
      (r ?? s)?.(m);
    },
    [r, s]
  ), C = (y, m) => {
    if (!hn(y)) {
      if (y.children && y.children.length > 0) {
        const p = h === m, S = Date.now() - _.current < 600;
        if (p && S) {
          _.current = 0;
          return;
        }
        x((f) => f === m ? null : m);
        return;
      }
      k(y), x(null);
    }
  }, I = (y) => {
    hn(y) || y.children && y.children.length > 0 || (k(y), x(null));
  };
  De(() => {
    if (h == null) return;
    const y = (m) => {
      l.current && !l.current.contains(m.target) && x(null);
    };
    return document.addEventListener("mousedown", y), () => document.removeEventListener("mousedown", y);
  }, [h]), De(() => {
    if (z.current != null && h === z.current) {
      const y = `${u}-submenu-${h}`;
      document.getElementById(y)?.querySelector('[role="menuitem"]:not([aria-disabled="true"])')?.focus(), z.current = null;
    }
  }, [h, u]);
  const D = (y) => {
    const m = i.current;
    if (!m) return;
    const p = Array.from(
      m.querySelectorAll('[data-top="true"]')
    ).filter((g) => !g.hasAttribute("disabled") && g.getAttribute("aria-disabled") !== "true");
    if (h != null) {
      const g = `${u}-submenu-${h}`, c = document.getElementById(g);
      if (c) {
        const v = Array.from(c.querySelectorAll('[role="menuitem"]')).filter(
          (R) => R.getAttribute("aria-disabled") !== "true"
        ), $ = document.activeElement, U = $ ? v.indexOf($) : -1;
        if (y.key === "ArrowDown") {
          y.preventDefault(), U === -1 ? v[0]?.focus() : v[(U + 1) % v.length]?.focus();
          return;
        }
        if (y.key === "ArrowUp") {
          y.preventDefault(), U === -1 ? v[v.length - 1]?.focus() : v[(U - 1 + v.length) % v.length]?.focus();
          return;
        }
        if (y.key === "Escape") {
          y.preventDefault(), x(null), m.querySelector(`[data-top="true"][data-index="${h}"]`)?.focus();
          return;
        }
        if (y.key === "Enter" || y.key === " ")
          return;
      }
      if (y.key === "Escape") {
        y.preventDefault(), x(null);
        return;
      }
    }
    const S = document.activeElement, f = S ? p.indexOf(S) : -1;
    if (y.key === "ArrowRight" || n === "vertical" && y.key === "ArrowDown") {
      if (y.preventDefault(), p.length === 0) return;
      const g = f === -1 ? 0 : (f + 1) % p.length;
      p[g]?.focus();
      return;
    }
    if (y.key === "ArrowLeft" || n === "vertical" && y.key === "ArrowUp") {
      if (y.preventDefault(), p.length === 0) return;
      const g = f === -1 ? p.length - 1 : (f - 1 + p.length) % p.length;
      p[g]?.focus();
      return;
    }
    if (y.key === "ArrowDown") {
      if (f >= 0) {
        const g = S?.getAttribute("data-index"), c = g != null ? Number(g) : -1, v = c >= 0 ? e[c] : void 0;
        v?.children && v.children.length > 0 && !hn(v) && (y.preventDefault(), z.current = c, x(c));
      }
      return;
    }
    if (y.key === "Home") {
      y.preventDefault(), p[0]?.focus();
      return;
    }
    if (y.key === "End") {
      y.preventDefault(), p[p.length - 1]?.focus();
      return;
    }
  };
  return /* @__PURE__ */ t(
    "nav",
    {
      ref: l,
      "aria-label": o,
      className: [ot.root, ot[n], a].filter(Boolean).join(" "),
      children: /* @__PURE__ */ t(
        "div",
        {
          ref: i,
          role: "menubar",
          "aria-label": o,
          className: ot.menubar,
          onKeyDown: D,
          children: e.map((y, m) => {
            const p = !!y.children && y.children.length > 0, S = h === m, f = hn(y), g = `${u}-submenu-${m}`;
            return /* @__PURE__ */ N(
              "div",
              {
                className: ot.itemWrapper,
                onMouseEnter: () => {
                  n === "horizontal" && p && !f && (_.current = Date.now(), x(m));
                },
                onMouseLeave: () => {
                  n === "horizontal" && p && x((c) => c === m ? null : c);
                },
                "data-dt-menu-item": "",
                children: [
                  /* @__PURE__ */ N(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      "data-top": "true",
                      "data-index": m,
                      "data-dt-menu-item": "",
                      "aria-disabled": f || void 0,
                      "aria-haspopup": p ? "menu" : void 0,
                      "aria-expanded": p ? S : void 0,
                      "aria-controls": p ? g : void 0,
                      "aria-current": (y.path && !p, void 0),
                      tabIndex: f ? -1 : 0,
                      disabled: f,
                      className: [ot.item, f ? ot.disabled : null, p ? ot.hasChildren : null].filter(Boolean).join(" "),
                      onClick: () => C(y, m),
                      children: [
                        y.icon ? /* @__PURE__ */ t("span", { className: ot.icon, "aria-hidden": "true", children: y.icon }) : null,
                        /* @__PURE__ */ t("span", { className: ot.text, children: y.text }),
                        p ? /* @__PURE__ */ t("span", { className: ot.caret, "aria-hidden": "true", children: "▾" }) : null
                      ]
                    }
                  ),
                  p && S ? /* @__PURE__ */ t(
                    "div",
                    {
                      id: g,
                      role: "menu",
                      className: ot.submenu,
                      "data-dt-menu-submenu": "",
                      "aria-label": y.text,
                      children: y.children?.map((c, v) => {
                        const $ = hn(c), U = !!c.children && c.children.length > 0;
                        return /* @__PURE__ */ N(
                          "button",
                          {
                            type: "button",
                            role: "menuitem",
                            "aria-disabled": $ || void 0,
                            "aria-haspopup": U ? "menu" : void 0,
                            tabIndex: $ ? -1 : 0,
                            disabled: $,
                            className: [ot.submenuItem, $ ? ot.disabled : null].filter(Boolean).join(" "),
                            onClick: () => I(c),
                            children: [
                              c.icon ? /* @__PURE__ */ t("span", { className: ot.icon, "aria-hidden": "true", children: c.icon }) : null,
                              /* @__PURE__ */ t("span", { className: ot.text, children: c.text })
                            ]
                          },
                          `${c.text}-${v}`
                        );
                      })
                    }
                  ) : null
                ]
              },
              `${y.text}-${m}`
            );
          })
        }
      )
    }
  );
}
const Qh = "_root_f3qrl_1", e1 = "_list_f3qrl_9", t1 = "_item_f3qrl_14", n1 = "_trigger_f3qrl_18", r1 = "_disabled_f3qrl_44", s1 = "_expanded_f3qrl_51", o1 = "_icon_f3qrl_55", a1 = "_text_f3qrl_66", l1 = "_caret_f3qrl_73", c1 = "_open_f3qrl_80", i1 = "_submenu_f3qrl_84", d1 = "_submenuItem_f3qrl_93", u1 = "_nestedWrapper_f3qrl_122", f1 = "_nestedTrigger_f3qrl_127", _1 = "_nestedMenu_f3qrl_152", p1 = "_iconOnly_f3qrl_160", Ie = {
  root: Qh,
  list: e1,
  item: t1,
  trigger: n1,
  disabled: r1,
  expanded: s1,
  icon: o1,
  text: a1,
  caret: l1,
  open: c1,
  submenu: i1,
  submenuItem: d1,
  nestedWrapper: u1,
  nestedTrigger: f1,
  nestedMenu: _1,
  iconOnly: p1
};
function h1({
  item: e,
  baseId: n,
  parentKey: r,
  onEmit: s
}) {
  const o = !!e.children && e.children.length > 0, [a, u] = V(!1), l = `${n}-nested-${r}`, i = !!e.disabled, h = () => {
    if (!i) {
      if (o) {
        u((_) => !_);
        return;
      }
      s({ text: e.text, value: e.value, path: e.path });
    }
  }, x = (_) => {
    _.key === "Enter" || _.key === " " ? (_.preventDefault(), h()) : _.key === "Escape" && a && (_.preventDefault(), u(!1));
  };
  return o ? /* @__PURE__ */ N("div", { className: Ie.nestedWrapper, children: [
    /* @__PURE__ */ N(
      "button",
      {
        type: "button",
        "aria-expanded": a,
        "aria-controls": l,
        "aria-disabled": i || void 0,
        disabled: i,
        tabIndex: i ? -1 : 0,
        className: [Ie.nestedTrigger, i ? Ie.disabled : null].filter(Boolean).join(" "),
        onClick: h,
        onKeyDown: x,
        children: [
          e.icon ? /* @__PURE__ */ t("span", { className: Ie.icon, "aria-hidden": "true", children: e.icon }) : null,
          /* @__PURE__ */ t("span", { className: Ie.text, children: e.text }),
          /* @__PURE__ */ t("span", { className: [Ie.caret, a ? Ie.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" })
        ]
      }
    ),
    a ? /* @__PURE__ */ t("div", { id: l, role: "menu", className: Ie.nestedMenu, children: e.children?.map((_, z) => {
      const k = !!_.disabled;
      return /* @__PURE__ */ N(
        "div",
        {
          role: "menuitem",
          "aria-disabled": k || void 0,
          tabIndex: k ? -1 : 0,
          className: [Ie.submenuItem, k ? Ie.disabled : null].filter(Boolean).join(" "),
          onClick: () => {
            k || _.children && _.children.length > 0 || s({ text: _.text, value: _.value, path: _.path });
          },
          onKeyDown: (C) => {
            if (C.key === "Enter" || C.key === " ") {
              if (C.preventDefault(), k) return;
              s({ text: _.text, value: _.value, path: _.path });
            }
          },
          children: [
            _.icon ? /* @__PURE__ */ t("span", { className: Ie.icon, "aria-hidden": "true", children: _.icon }) : null,
            /* @__PURE__ */ t("span", { className: Ie.text, children: _.text })
          ]
        },
        `${_.text}-${z}`
      );
    }) }) : null
  ] }) : /* @__PURE__ */ N(
    "div",
    {
      role: "menuitem",
      "aria-disabled": i || void 0,
      tabIndex: i ? -1 : 0,
      className: [Ie.submenuItem, i ? Ie.disabled : null].filter(Boolean).join(" "),
      onClick: () => {
        i || s({ text: e.text, value: e.value, path: e.path });
      },
      onKeyDown: (_) => {
        if (_.key === "Enter" || _.key === " ") {
          if (_.preventDefault(), i) return;
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
function v0({
  items: e,
  multiple: n,
  Multiple: r,
  showArrow: s,
  ShowArrow: o,
  displayStyle: a,
  DisplayStyle: u,
  onClick: l,
  Click: i,
  ariaLabel: h = "Panel menu",
  className: x
}) {
  const _ = Ue(), z = n ?? r ?? !1, k = s ?? o ?? !0, C = a ?? u ?? "iconAndText", [I, D] = V([]), y = q(
    (S) => {
      const f = { text: S.text, value: S.value, path: S.path };
      (l ?? i)?.(f);
    },
    [l, i]
  ), m = (S, f, g) => {
    if (!g.disabled) {
      if (f) {
        D((c) => c.includes(S) ? c.filter(($) => $ !== S) : z ? [...c, S] : [S]);
        return;
      }
      y(g);
    }
  }, p = (S) => {
    const f = S.target;
    if (!(S.key === "Enter" || S.key === " ")) {
      if (S.key === "Escape") {
        const g = f.getAttribute("aria-controls");
        if (g) {
          const c = g.match(/-panel-(\d+)$/);
          if (c) {
            const v = Number(c[1]);
            D(($) => $.filter((U) => U !== v));
          }
        } else {
          const c = f.closest('[role="menu"]');
          if (c) {
            const $ = c.id.match(/-panel-(\d+)$/);
            if ($) {
              const U = Number($[1]);
              D((O) => O.filter((d) => d !== U)), document.getElementById(`${_}-trigger-${U}`)?.focus();
            }
          }
        }
        S.preventDefault();
        return;
      }
      if (S.key === "ArrowDown" || S.key === "ArrowUp") {
        const g = Array.from(
          S.currentTarget.querySelectorAll('button, [role="menuitem"]')
        ).filter((U) => !U.hasAttribute("disabled") && U.getAttribute("aria-disabled") !== "true"), c = g.indexOf(f);
        if (c === -1) return;
        S.preventDefault();
        const v = S.key === "ArrowDown" ? 1 : -1;
        g[(c + v + g.length) % g.length]?.focus();
      }
    }
  };
  return /* @__PURE__ */ t(
    "nav",
    {
      "aria-label": h,
      className: [
        Ie.root,
        C === "icon" ? Ie.iconOnly : Ie.iconAndText,
        x
      ].filter(Boolean).join(" "),
      onKeyDown: p,
      children: /* @__PURE__ */ t("div", { className: Ie.list, role: "presentation", children: e.map((S, f) => {
        const g = !!S.children && S.children.length > 0, c = I.includes(f), v = !!S.disabled, $ = `${_}-panel-${f}`, U = `${_}-trigger-${f}`;
        return /* @__PURE__ */ N("div", { className: Ie.item, children: [
          /* @__PURE__ */ N(
            "button",
            {
              type: "button",
              id: U,
              "aria-expanded": g ? c : void 0,
              "aria-controls": g ? $ : void 0,
              "aria-disabled": v || void 0,
              disabled: v,
              tabIndex: v ? -1 : 0,
              className: [
                Ie.trigger,
                v ? Ie.disabled : null,
                c ? Ie.expanded : null
              ].filter(Boolean).join(" "),
              onClick: () => m(f, g, S),
              children: [
                S.icon ? /* @__PURE__ */ t("span", { className: Ie.icon, "aria-hidden": "true", children: S.icon }) : null,
                C === "iconAndText" ? /* @__PURE__ */ t("span", { className: Ie.text, children: S.text }) : /* @__PURE__ */ t("span", { className: Ie.text, "aria-label": S.text, children: S.icon ? null : S.text.slice(0, 1) }),
                g && k ? /* @__PURE__ */ t("span", { className: [Ie.caret, c ? Ie.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" }) : null
              ]
            }
          ),
          g && c ? /* @__PURE__ */ t("div", { id: $, role: "menu", className: Ie.submenu, "aria-labelledby": U, children: S.children?.map((R, O) => /* @__PURE__ */ t(
            h1,
            {
              item: R,
              baseId: _,
              parentKey: `${f}-${O}`,
              onEmit: y
            },
            `${R.text}-${O}`
          )) }) : null
        ] }, `${S.text}-${f}`);
      }) })
    }
  );
}
const m1 = "_root_10qer_1", g1 = "_trigger_10qer_7", b1 = "_defaultTrigger_10qer_40", y1 = "_avatar_10qer_46", v1 = "_menu_10qer_58", x1 = "_item_10qer_74", k1 = "_disabled_10qer_88", w1 = "_active_10qer_97", $1 = "_icon_10qer_107", N1 = "_text_10qer_114", Nt = {
  root: m1,
  trigger: g1,
  defaultTrigger: b1,
  avatar: y1,
  menu: v1,
  item: x1,
  disabled: k1,
  active: w1,
  icon: $1,
  text: N1
};
function x0({
  items: e,
  trigger: n,
  Template: r,
  onClick: s,
  Click: o,
  ariaLabel: a = "Profile menu",
  className: u
}) {
  const l = Ue(), i = `${l}-menu`, h = le(null), x = le(null), [_, z] = V(!1), [k, C] = V(-1), I = n ?? r, D = e.map((c, v) => c.disabled ? -1 : v).filter((c) => c >= 0), y = q(
    (c) => {
      if (c.disabled) return;
      const v = { text: c.text, path: c.path };
      (s ?? o)?.(v), z(!1), x.current?.focus();
    },
    [s, o]
  ), m = q(() => {
    C(D[0] ?? -1), z(!0);
  }, [D]), p = q(() => {
    z(!1), C(-1), x.current?.focus();
  }, []);
  De(() => {
    if (!_) return;
    const c = (v) => {
      h.current && !h.current.contains(v.target) && (z(!1), C(-1));
    };
    return document.addEventListener("mousedown", c), () => document.removeEventListener("mousedown", c);
  }, [_]), De(() => {
    if (!_) return;
    const c = (v) => {
      v.key === "Escape" && (v.preventDefault(), p());
    };
    return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
  }, [_, p]);
  const S = (c) => {
    if (D.length === 0) return;
    const v = D.indexOf(k), $ = v === -1 ? 0 : (v + c + D.length) % D.length, U = D[$];
    U != null && C(U);
  }, f = (c) => {
    if (!_) {
      (c.key === "ArrowDown" || c.key === "Enter" || c.key === " ") && (c.preventDefault(), m());
      return;
    }
    switch (c.key) {
      case "Escape":
        c.preventDefault(), p();
        break;
      case "ArrowDown":
        c.preventDefault(), S(1);
        break;
      case "ArrowUp":
        c.preventDefault(), S(-1);
        break;
      case "Home":
        c.preventDefault(), D[0] != null && C(D[0]);
        break;
      case "End":
        c.preventDefault(), D[D.length - 1] != null && C(D[D.length - 1]);
        break;
      case "Enter":
      case " ":
        if (c.preventDefault(), k >= 0) {
          const v = e[k];
          v && !v.disabled && y(v);
        }
        break;
      case "Tab":
        z(!1), C(-1);
        break;
    }
  }, g = (c) => {
    switch (c.key) {
      case "ArrowDown":
        c.preventDefault(), S(1);
        break;
      case "ArrowUp":
        c.preventDefault(), S(-1);
        break;
      case "Home":
        c.preventDefault(), D[0] != null && C(D[0]);
        break;
      case "End":
        c.preventDefault(), D[D.length - 1] != null && C(D[D.length - 1]);
        break;
      case "Enter":
      case " ":
        if (c.preventDefault(), k >= 0) {
          const v = e[k];
          v && !v.disabled && y(v);
        }
        break;
      case "Escape":
        c.preventDefault(), p();
        break;
      case "Tab":
        z(!1), C(-1);
        break;
    }
  };
  return /* @__PURE__ */ t(
    "div",
    {
      ref: h,
      className: [Nt.root, u].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ N("nav", { "aria-label": a, children: [
        /* @__PURE__ */ t(
          "button",
          {
            ref: x,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": _,
            "aria-controls": i,
            "aria-label": a,
            className: Nt.trigger,
            onClick: () => _ ? p() : m(),
            onKeyDown: f,
            children: I ?? /* @__PURE__ */ N("span", { className: Nt.defaultTrigger, children: [
              /* @__PURE__ */ t("span", { className: Nt.avatar, "aria-hidden": "true", children: "●" }),
              /* @__PURE__ */ t("span", { children: "Profile" })
            ] })
          }
        ),
        _ ? /* @__PURE__ */ t(
          "div",
          {
            id: i,
            role: "menu",
            "aria-label": a,
            "aria-activedescendant": k >= 0 ? `${l}-item-${k}` : void 0,
            className: Nt.menu,
            onKeyDown: g,
            tabIndex: -1,
            children: e.map((c, v) => {
              const $ = !!c.disabled, U = v === k;
              return /* @__PURE__ */ N(
                "div",
                {
                  id: `${l}-item-${v}`,
                  role: "menuitem",
                  "aria-disabled": $ || void 0,
                  tabIndex: $ ? -1 : 0,
                  className: [Nt.item, U ? Nt.active : null, $ ? Nt.disabled : null].filter(Boolean).join(" "),
                  onClick: () => {
                    $ || y(c);
                  },
                  onMouseEnter: () => {
                    $ || C(v);
                  },
                  children: [
                    c.icon ? /* @__PURE__ */ t("span", { className: Nt.icon, "aria-hidden": "true", children: c.icon }) : null,
                    /* @__PURE__ */ t("span", { className: Nt.text, children: c.text })
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
const S1 = "_root_yzi70_1", D1 = "_bottomRight_yzi70_11", z1 = "_bottomLeft_yzi70_16", C1 = "_topRight_yzi70_21", O1 = "_topLeft_yzi70_26", I1 = "_menu_yzi70_31", M1 = "_itemWrapper_yzi70_48", j1 = "_tooltip_yzi70_54", E1 = "_main_yzi70_76", T1 = "_mainIcon_yzi70_104", A1 = "_mainOpen_yzi70_109", L1 = "_item_yzi70_48", R1 = "_disabled_yzi70_141", B1 = "_itemIcon_yzi70_148", ct = {
  root: S1,
  bottomRight: D1,
  bottomLeft: z1,
  topRight: C1,
  topLeft: O1,
  menu: I1,
  itemWrapper: M1,
  tooltip: j1,
  main: E1,
  mainIcon: T1,
  mainOpen: A1,
  item: L1,
  disabled: R1,
  itemIcon: B1
};
function k0({
  items: e,
  position: n,
  Position: r,
  icon: s = "+",
  onClick: o,
  Click: a,
  ariaLabel: u = "Open menu",
  className: l
}) {
  const i = n ?? r ?? "bottom-right", x = `${Ue()}-menu`, _ = le(null), z = le(null), [k, C] = V(!1), I = q(
    (p) => {
      if (p.disabled) return;
      const S = { text: p.text, value: p.value };
      (o ?? a)?.(S), C(!1), z.current?.focus();
    },
    [o, a]
  );
  De(() => {
    if (!k) return;
    const p = (S) => {
      _.current && !_.current.contains(S.target) && C(!1);
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, [k]), De(() => {
    if (!k) return;
    const p = (S) => {
      S.key === "Escape" && (C(!1), z.current?.focus());
    };
    return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [k]);
  const D = i === "bottom-right" ? ct.bottomRight : i === "bottom-left" ? ct.bottomLeft : i === "top-right" ? ct.topRight : ct.topLeft, y = (p) => {
    !k && (p.key === "Enter" || p.key === " " || p.key === "ArrowDown" || p.key === "ArrowUp") ? (p.preventDefault(), C(!0)) : k && p.key === "Escape" && (p.preventDefault(), C(!1));
  }, m = (p) => {
    p.key === "Escape" && (p.preventDefault(), C(!1), z.current?.focus());
  };
  return /* @__PURE__ */ N(
    "div",
    {
      ref: _,
      className: [ct.root, D, l].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        k ? /* @__PURE__ */ t(
          "div",
          {
            id: x,
            role: "menu",
            "aria-label": u,
            className: ct.menu,
            onKeyDown: m,
            children: e.map((p, S) => {
              const f = !!p.disabled;
              return /* @__PURE__ */ N("div", { className: ct.itemWrapper, children: [
                /* @__PURE__ */ t("span", { className: ct.tooltip, "aria-hidden": "true", children: p.text }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": p.text,
                    "aria-disabled": f || void 0,
                    title: p.text,
                    disabled: f,
                    tabIndex: f ? -1 : 0,
                    className: [ct.item, f ? ct.disabled : null].filter(Boolean).join(" "),
                    onClick: () => I(p),
                    children: /* @__PURE__ */ t("span", { className: ct.itemIcon, "aria-hidden": "true", children: p.icon ?? "•" })
                  }
                )
              ] }, `${p.text}-${S}`);
            })
          }
        ) : null,
        /* @__PURE__ */ t(
          "button",
          {
            ref: z,
            type: "button",
            className: ct.main,
            "aria-haspopup": "menu",
            "aria-expanded": k,
            "aria-controls": x,
            "aria-label": u,
            onClick: () => C((p) => !p),
            onKeyDown: y,
            children: /* @__PURE__ */ t("span", { "aria-hidden": "true", className: [ct.mainIcon, k ? ct.mainOpen : null].filter(Boolean).join(" "), children: s })
          }
        )
      ]
    }
  );
}
const P1 = "_root_18w60_1", q1 = "_list_18w60_5", F1 = "_item_18w60_15", K1 = "_link_18w60_22", H1 = "_linkButton_18w60_23", W1 = "_current_18w60_24", U1 = "_disabled_18w60_68", V1 = "_icon_18w60_74", X1 = "_text_18w60_81", G1 = "_separator_18w60_85", Ke = {
  root: P1,
  list: q1,
  item: F1,
  link: K1,
  linkButton: H1,
  current: W1,
  disabled: U1,
  icon: V1,
  text: X1,
  separator: G1
};
function w0({ items: e, onClick: n, Click: r, ariaLabel: s = "Breadcrumb", className: o }) {
  const a = n ?? r, u = (l) => {
    l.disabled || a?.({ text: l.text, path: l.path });
  };
  return /* @__PURE__ */ t("nav", { "aria-label": s, className: [Ke.root, o].filter(Boolean).join(" "), children: /* @__PURE__ */ t("ol", { className: Ke.list, children: e.map((l, i) => {
    const h = i === e.length - 1, x = !!l.disabled;
    return /* @__PURE__ */ N("li", { className: Ke.item, children: [
      h ? x ? /* @__PURE__ */ N(
        "span",
        {
          className: [Ke.current, Ke.disabled].filter(Boolean).join(" "),
          "aria-current": "page",
          "aria-disabled": "true",
          tabIndex: -1,
          children: [
            l.icon ? /* @__PURE__ */ t("span", { className: Ke.icon, "aria-hidden": "true", children: l.icon }) : null,
            l.text
          ]
        }
      ) : l.path ? /* @__PURE__ */ N(
        "a",
        {
          href: l.path,
          className: Ke.link,
          "aria-current": "page",
          onClick: (_) => {
            _.preventDefault(), u(l);
          },
          children: [
            l.icon ? /* @__PURE__ */ t("span", { className: Ke.icon, "aria-hidden": "true", children: l.icon }) : null,
            /* @__PURE__ */ t("span", { className: Ke.text, children: l.text })
          ]
        }
      ) : /* @__PURE__ */ N(
        "span",
        {
          className: Ke.current,
          "aria-current": "page",
          tabIndex: 0,
          children: [
            l.icon ? /* @__PURE__ */ t("span", { className: Ke.icon, "aria-hidden": "true", children: l.icon }) : null,
            l.text
          ]
        }
      ) : x ? /* @__PURE__ */ N(
        "span",
        {
          className: [Ke.link, Ke.disabled].filter(Boolean).join(" "),
          "aria-disabled": "true",
          tabIndex: -1,
          children: [
            l.icon ? /* @__PURE__ */ t("span", { className: Ke.icon, "aria-hidden": "true", children: l.icon }) : null,
            /* @__PURE__ */ t("span", { className: Ke.text, children: l.text })
          ]
        }
      ) : l.path ? /* @__PURE__ */ N(
        "a",
        {
          href: l.path,
          className: Ke.link,
          onClick: (_) => {
            _.preventDefault(), u(l);
          },
          children: [
            l.icon ? /* @__PURE__ */ t("span", { className: Ke.icon, "aria-hidden": "true", children: l.icon }) : null,
            /* @__PURE__ */ t("span", { className: Ke.text, children: l.text })
          ]
        }
      ) : /* @__PURE__ */ N(
        "button",
        {
          type: "button",
          className: Ke.linkButton,
          tabIndex: 0,
          onClick: () => u(l),
          children: [
            l.icon ? /* @__PURE__ */ t("span", { className: Ke.icon, "aria-hidden": "true", children: l.icon }) : null,
            /* @__PURE__ */ t("span", { className: Ke.text, children: l.text })
          ]
        }
      ),
      h ? null : /* @__PURE__ */ t("span", { className: Ke.separator, "aria-hidden": "true", children: "/" })
    ] }, `${l.text}-${i}`);
  }) }) });
}
const Y1 = "_root_13ac5_1", Z1 = "_list_13ac5_5", J1 = "_item_13ac5_15", Q1 = "_connector_13ac5_21", em = "_connectorCompleted_13ac5_30", tm = "_step_13ac5_34", nm = "_active_13ac5_69", rm = "_completed_13ac5_75", sm = "_circle_13ac5_79", om = "_check_13ac5_109", am = "_icon_13ac5_114", lm = "_number_13ac5_119", cm = "_text_13ac5_124", it = {
  root: Y1,
  list: Z1,
  item: J1,
  connector: Q1,
  connectorCompleted: em,
  step: tm,
  active: nm,
  completed: rm,
  circle: sm,
  check: om,
  icon: am,
  number: lm,
  text: cm
};
function $0({
  items: e,
  selectedIndex: n,
  SelectedIndex: r,
  defaultIndex: s = 0,
  linear: o,
  Linear: a,
  onChange: u,
  Change: l,
  onSelectedIndexChange: i,
  ariaLabel: h = "Steps",
  className: x
}) {
  const _ = o ?? a ?? !1, z = n ?? r, k = z !== void 0, [C, I] = V(() => Math.min(Math.max(0, z ?? s), Math.max(0, e.length - 1))), y = Math.min(Math.max(0, k ? z : C), Math.max(0, e.length - 1)), m = le(null), p = q(
    (g) => {
      const c = Math.min(Math.max(0, g), Math.max(0, e.length - 1));
      k || I(c), (u ?? l ?? i)?.(c);
    },
    [k, u, l, i, e.length]
  ), S = q(
    (g, c) => !!(c.disabled || _ && g > y + 1),
    [_, y]
  ), f = (g) => {
    const c = Array.from(
      g.currentTarget.querySelectorAll("button[data-step]")
    ).filter((U) => U.getAttribute("aria-disabled") !== "true" && !U.disabled), v = document.activeElement, $ = v ? c.indexOf(v) : -1;
    if (g.key === "ArrowRight" || g.key === "ArrowDown") {
      if (g.preventDefault(), c.length === 0) return;
      const U = $ === -1 ? 0 : ($ + 1) % c.length, R = c[U];
      R && R.focus();
    } else if (g.key === "ArrowLeft" || g.key === "ArrowUp") {
      if (g.preventDefault(), c.length === 0) return;
      const U = $ === -1 ? c.length - 1 : ($ - 1 + c.length) % c.length, R = c[U];
      R && R.focus();
    } else g.key === "Home" ? (g.preventDefault(), c[0]?.focus()) : g.key === "End" && (g.preventDefault(), c[c.length - 1]?.focus());
  };
  return /* @__PURE__ */ t(
    "nav",
    {
      "aria-label": h,
      className: [it.root, x].filter(Boolean).join(" "),
      onKeyDown: f,
      children: /* @__PURE__ */ t("ol", { ref: m, role: "list", className: it.list, children: e.map((g, c) => {
        const v = c === y, $ = c < y, U = S(c, g);
        return /* @__PURE__ */ N("li", { role: "listitem", className: it.item, children: [
          c > 0 ? /* @__PURE__ */ t("span", { className: [it.connector, $ ? it.connectorCompleted : null].filter(Boolean).join(" "), "aria-hidden": "true" }) : null,
          /* @__PURE__ */ N(
            "button",
            {
              type: "button",
              "data-step": c,
              "aria-current": v ? "step" : void 0,
              "aria-disabled": U ? "true" : void 0,
              disabled: U,
              tabIndex: U ? -1 : 0,
              className: [
                it.step,
                v ? it.active : null,
                $ ? it.completed : null,
                U ? it.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => {
                U || p(c);
              },
              children: [
                /* @__PURE__ */ t("span", { className: it.circle, "aria-hidden": "true", children: $ ? /* @__PURE__ */ t("span", { className: it.check, "aria-hidden": "true", children: "✓" }) : g.icon ? /* @__PURE__ */ t("span", { className: it.icon, children: g.icon }) : /* @__PURE__ */ t("span", { className: it.number, children: c + 1 }) }),
                /* @__PURE__ */ t("span", { className: it.text, children: g.text })
              ]
            }
          )
        ] }, `${g.text}-${c}`);
      }) })
    }
  );
}
const im = "_root_1mm03_1", dm = "_horizontal_1mm03_13", um = "_vertical_1mm03_17", fm = "_pane_1mm03_21", _m = "_handle_1mm03_31", pm = "_handleHorizontal_1mm03_51", hm = "_handleVertical_1mm03_57", mm = "_handleGrip_1mm03_63", gm = "_handleCollapseHint_1mm03_75", bm = "_collapseBtn_1mm03_79", ym = "_collapseBtnCollapsed_1mm03_109", bt = {
  root: im,
  horizontal: dm,
  vertical: um,
  pane: fm,
  handle: _m,
  handleHorizontal: pm,
  handleVertical: hm,
  handleGrip: mm,
  handleCollapseHint: gm,
  collapseBtn: bm,
  collapseBtnCollapsed: ym
};
function mn(e, n) {
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
function Mt(e, n, r) {
  return Math.min(r, Math.max(n, e));
}
function N0({
  orientation: e,
  Orientation: n,
  panes: r,
  onResize: s,
  Resize: o,
  onCollapse: a,
  Collapse: u,
  ariaLabel: l = "Splitter",
  className: i
}) {
  const h = e ?? n ?? "horizontal", x = h === "horizontal", _ = le(null), z = q(() => {
    const d = r.length;
    if (d === 0) return [];
    const w = r.map((L) => L.size ? mn(L.size, 100 / d) : 100 / d), M = w.reduce((L, T) => L + T, 0);
    return Math.abs(M - 100) > 0.01 && M > 0 ? w.map((L) => L / M * 100) : w;
  }, [r]), [k, C] = V(() => z()), [I, D] = V(() => r.map((d) => !!d.collapsed)), y = le(k);
  De(() => {
    D(r.map((d) => !!d.collapsed));
  }, [r]);
  const m = q(() => r.map((d) => mn(d.min, 0)), [r]), p = q(() => r.map((d) => mn(d.max, 100)), [r]), S = q(
    (d, w) => {
      const M = { paneIndex: d, newSize: w, cancel: !1 };
      return (s ?? o)?.(M), !M.cancel;
    },
    [s, o]
  ), f = q(
    (d, w) => {
      const M = { paneIndex: d, collapse: w, cancel: !1 };
      return (a ?? u)?.(M), !M.cancel;
    },
    [a, u]
  ), g = q(
    (d) => {
      const w = !I[d];
      f(d, w) && (w ? (y.current = [...k], D((M) => {
        const L = [...M];
        return L[d] !== void 0 && (L[d] = !0), L;
      }), C((M) => {
        const L = [...M], T = L[d] ?? 0, J = d < L.length - 1 ? d + 1 : d - 1;
        if (J >= 0 && J < L.length) {
          const se = L[J] ?? 0;
          L[J] = se + T, L[d] = 0;
        } else
          L[d] = 0;
        return L;
      })) : (D((M) => {
        const L = [...M];
        return L[d] !== void 0 && (L[d] = !1), L;
      }), C(() => {
        const M = [...y.current];
        return M.length !== r.length ? r.map(() => 100 / r.length) : M;
      })));
    },
    [I, k, r.length, f]
  ), c = le(null), v = q(
    (d, w, M) => {
      const L = _.current;
      if (!L) return null;
      const T = L.getBoundingClientRect();
      let J;
      if (x) {
        if (T.width === 0) return null;
        J = (w - T.left) / T.width * 100;
      } else {
        if (T.height === 0) return null;
        J = (M - T.top) / T.height * 100;
      }
      let se = 0;
      for (let ne = 0; ne < d; ne++) {
        const oe = k[ne];
        oe !== void 0 && (se += oe);
      }
      return J - se;
    },
    [x, k]
  ), $ = (d, w) => {
    w.preventDefault();
    const M = w.currentTarget;
    M.focus(), typeof M.setPointerCapture == "function" && M.setPointerCapture(w.pointerId), c.current = { handleIndex: d, pointerId: w.pointerId };
  }, U = (d) => {
    if (!c.current || c.current.pointerId !== d.pointerId) return;
    d.preventDefault();
    const w = c.current.handleIndex, M = v(w, d.clientX, d.clientY);
    if (M == null) return;
    const L = m(), T = p(), J = L[w] ?? 0, se = T[w] ?? 100, de = w + 1, ne = L[de] ?? 0, oe = T[de] ?? 100, ae = k[w] ?? 0, X = k[de] ?? 0, W = ae + X;
    if (W <= 0) return;
    let B = Mt(M, J, se), te = W - B;
    if (te < ne) {
      if (te = ne, B = W - te, B < J || B > se) return;
    } else if (te > oe && (te = oe, B = W - te, B < J || B > se))
      return;
    B = Mt(B, J, se), te = W - B, S(w, B) && C((he) => {
      const Z = [...he];
      return Z[w] = B, Z[de] = te, Z;
    });
  }, R = (d) => {
    !c.current || c.current.pointerId !== d.pointerId || (c.current = null);
  }, O = (d, w) => {
    const M = m(), L = p(), T = d, J = d + 1, se = k[T] ?? 0, de = k[J] ?? 0, ne = se + de;
    let oe = 0;
    const ae = !!r[T]?.collapsible, X = !!r[J]?.collapsible;
    if (x ? w.key === "ArrowLeft" ? oe = -5 : w.key === "ArrowRight" && (oe = 5) : w.key === "ArrowUp" ? oe = -5 : w.key === "ArrowDown" && (oe = 5), w.key === "Home") {
      w.preventDefault();
      let W = M[T] ?? 0, B = ne - W;
      if (B = Mt(B, M[J] ?? 0, L[J] ?? 100), W = ne - B, W = Mt(W, M[T] ?? 0, L[T] ?? 100), !S(T, W)) return;
      C((te) => {
        const he = [...te];
        return he[T] = W, he[J] = B, he;
      });
      return;
    }
    if (w.key === "End") {
      w.preventDefault();
      let W = L[T] ?? 100;
      W = Math.min(W, ne - (M[J] ?? 0));
      let B = ne - W;
      if (B = Mt(B, M[J] ?? 0, L[J] ?? 100), W = ne - B, W = Mt(W, M[T] ?? 0, L[T] ?? 100), !S(T, W)) return;
      C((te) => {
        const he = [...te];
        return he[T] = W, he[J] = B, he;
      });
      return;
    }
    if ((w.key === "Enter" || w.key === " ") && (ae || X)) {
      w.preventDefault(), g(ae ? T : J);
      return;
    }
    if (oe !== 0) {
      w.preventDefault();
      let W = se + oe, B = ne - W;
      const te = M[T] ?? 0, he = L[T] ?? 100, Z = M[J] ?? 0, me = L[J] ?? 100;
      if (W = Mt(W, te, he), B = ne - W, (B < Z || B > me) && (B = Mt(B, Z, me), W = ne - B, W = Mt(W, te, he), B = ne - W), !S(T, W)) return;
      C((ye) => {
        const ze = [...ye];
        return ze[T] = W, ze[J] = B, ze;
      });
    }
  };
  return /* @__PURE__ */ t(
    "div",
    {
      ref: _,
      className: [bt.root, x ? bt.horizontal : bt.vertical, i].filter(Boolean).join(" "),
      "aria-label": l,
      children: r.map((d, w) => {
        const M = !!I[w], L = M ? 0 : k[w] ?? 100 / r.length, T = M ? { display: "none" } : x ? { flexBasis: `${L}%`, flexGrow: 0, flexShrink: 0, overflow: "auto" } : { flexBasis: `${L}%`, flexGrow: 0, flexShrink: 0, overflow: "auto" }, J = mn(d.min, 0), se = mn(d.max, 100), de = w < r.length - 1, ne = !!r[w + 1]?.collapsible;
        return /* @__PURE__ */ N("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ N(
            "div",
            {
              role: "group",
              "aria-label": d.label ?? `Pane ${w + 1}`,
              className: bt.pane,
              style: T,
              "data-collapsed": M ? "true" : void 0,
              children: [
                M ? null : d.children,
                d.collapsible && !M ? /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    className: bt.collapseBtn,
                    "aria-label": `Collapse pane ${w + 1}`,
                    "aria-expanded": !M,
                    onClick: () => g(w),
                    children: x ? "◀" : "▲"
                  }
                ) : null,
                d.collapsible && M ? /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    className: bt.collapseBtn,
                    "aria-label": `Expand pane ${w + 1}`,
                    "aria-expanded": !M,
                    onClick: () => g(w),
                    children: x ? "▶" : "▼"
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
                className: bt.collapseBtnCollapsed,
                "aria-label": `Expand pane ${w + 1}`,
                "aria-expanded": "false",
                onClick: () => g(w),
                children: x ? "▶" : "▼"
              }
            )
          ) : null,
          de ? /* @__PURE__ */ N(
            "div",
            {
              role: "separator",
              "aria-orientation": h,
              "aria-valuemin": J,
              "aria-valuemax": se,
              "aria-valuenow": Math.round(L),
              "aria-label": `Resize handle ${w + 1}`,
              tabIndex: M || I[w + 1] ? -1 : 0,
              className: [bt.handle, x ? bt.handleHorizontal : bt.handleVertical].filter(Boolean).join(" "),
              onPointerDown: (oe) => $(w, oe),
              onPointerMove: U,
              onPointerUp: R,
              onKeyDown: (oe) => O(w, oe),
              children: [
                /* @__PURE__ */ t("span", { className: bt.handleGrip, "aria-hidden": "true" }),
                (d.collapsible || ne) && /* @__PURE__ */ t("span", { className: bt.handleCollapseHint, "aria-hidden": "true" })
              ]
            }
          ) : null
        ] }, w);
      })
    }
  );
}
const vm = "_root_10e1i_1", xm = "_list_10e1i_5", km = "_vertical_10e1i_14", wm = "_horizontal_10e1i_20", $m = "_item_10e1i_28", Nm = "_link_10e1i_32", Sm = "_active_10e1i_57", Jt = {
  root: vm,
  list: xm,
  vertical: km,
  horizontal: wm,
  item: $m,
  link: Nm,
  active: Sm
};
function S0({
  items: e,
  selector: n,
  Selector: r,
  orientation: s,
  Orientation: o,
  onClick: a,
  Click: u,
  ariaLabel: l = "Table of contents",
  className: i
}) {
  const h = n ?? r, x = s ?? o ?? "vertical", [_, z] = V(() => e[0]?.selector ?? null), k = le(_);
  k.current = _;
  const C = q(
    (I, D) => {
      if (z(I.selector), (a ?? u)?.({ text: I.text, selector: I.selector }), D) {
        try {
          D.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch {
          D.scrollIntoView();
        }
        const m = D;
        m.getAttribute("tabindex") == null && m.tabIndex === -1 || m.tabIndex < 0 ? (m.getAttribute("tabindex"), m.setAttribute("tabindex", "-1"), m.focus({ preventScroll: !0 })) : m.focus({ preventScroll: !0 });
      }
    },
    [a, u]
  );
  return De(() => {
    if (e.length === 0) return;
    const D = (() => {
      if (h) {
        const f = document.querySelector(h);
        if (f) return f;
      }
      return window;
    })();
    let y = null;
    const m = /* @__PURE__ */ new Map(), p = () => {
      let f = null, g = null;
      for (const v of e) {
        const $ = document.querySelector(v.selector);
        if (!$) continue;
        m.set(v.selector, $);
        const U = $.getBoundingClientRect();
        let R = U.top;
        if (D !== window) {
          const O = D.getBoundingClientRect();
          R = U.top - O.top;
        }
        R <= 80 ? (!g || R > g.el.getBoundingClientRect().top - (D !== window ? D.getBoundingClientRect().top : 0)) && (g = { sel: v.selector, el: $ }) : (!f || R < f.top) && (f = { sel: v.selector, top: R });
      }
      const c = g?.sel ?? f?.sel ?? e[0]?.selector ?? null;
      c && c !== k.current && z(c);
    }, S = () => {
      p();
    };
    if (typeof IntersectionObserver < "u") {
      const f = D === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : { root: D, rootMargin: "-20% 0px -70% 0px", threshold: 0 };
      y = new IntersectionObserver((g) => {
        const c = g.filter((v) => v.isIntersecting).sort((v, $) => v.boundingClientRect.top - $.boundingClientRect.top);
        if (c[0]) {
          const v = c[0].target;
          for (const $ of e) {
            if (document.querySelector($.selector) === v) {
              z($.selector);
              break;
            }
            if ($.selector.startsWith("#") && v.id === $.selector.slice(1)) {
              z($.selector);
              break;
            }
          }
        } else
          p();
      }, f);
      for (const g of e) {
        const c = document.querySelector(g.selector);
        c && (y.observe(c), m.set(g.selector, c));
      }
    }
    return D === window ? (window.addEventListener("scroll", S, { passive: !0 }), p(), () => {
      window.removeEventListener("scroll", S), y?.disconnect();
    }) : (D.addEventListener("scroll", S, { passive: !0 }), p(), () => {
      D.removeEventListener("scroll", S), y?.disconnect();
    });
  }, [e, h]), /* @__PURE__ */ t("nav", { "aria-label": l, className: [Jt.root, Jt[x], i].filter(Boolean).join(" "), children: /* @__PURE__ */ t("ol", { className: Jt.list, children: e.map((I) => {
    const D = I.selector === _;
    return /* @__PURE__ */ t("li", { className: Jt.item, children: /* @__PURE__ */ t(
      "a",
      {
        href: I.selector.startsWith("#") || I.selector.startsWith(".") ? I.selector : `#${I.selector}`,
        className: [Jt.link, D ? Jt.active : null].filter(Boolean).join(" "),
        "aria-current": D ? "location" : void 0,
        onClick: (y) => {
          y.preventDefault();
          const m = document.querySelector(I.selector);
          C(I, m);
        },
        children: I.text
      }
    ) }, `${I.text}-${I.selector}`);
  }) }) });
}
const Dm = "_root_7t0e2_1", zm = "_viewport_7t0e2_17", Cm = "_slide_7t0e2_24", Om = "_active_7t0e2_33", Im = "_arrow_7t0e2_37", Mm = "_prev_7t0e2_71", jm = "_next_7t0e2_75", Em = "_pauseBtn_7t0e2_79", Tm = "_indicators_7t0e2_110", Am = "_indicator_7t0e2_110", Lm = "_indicatorActive_7t0e2_145", yt = {
  root: Dm,
  viewport: zm,
  slide: Cm,
  active: Om,
  arrow: Im,
  prev: Mm,
  next: jm,
  pauseBtn: Em,
  indicators: Tm,
  indicator: Am,
  indicatorActive: Lm
};
function D0({
  items: e,
  selectedIndex: n,
  SelectedIndex: r,
  defaultIndex: s = 0,
  auto: o,
  Auto: a,
  interval: u,
  Interval: l,
  pauseOnHover: i,
  PauseOnHover: h,
  showArrows: x,
  ShowArrows: _,
  showIndicators: z,
  ShowIndicators: k,
  onChange: C,
  Change: I,
  ariaLabel: D = "Carousel",
  className: y
}) {
  const m = n ?? r, p = m !== void 0, [S, f] = V(() => Math.min(Math.max(0, m ?? s), Math.max(0, e.length - 1))), g = p ? m : S, c = e.length === 0 ? 0 : Math.min(Math.max(0, g), e.length - 1), v = o ?? a ?? !1, $ = u ?? l ?? 3e3, U = i ?? h ?? !0, R = x ?? _ ?? !0, O = z ?? k ?? !0, [d, w] = V(!1), [M, L] = V(!1), T = d || M, J = le(null), se = Ue(), de = q(
    (Z) => {
      const me = e.length === 0 ? 0 : (Z % e.length + e.length) % e.length;
      p || f(me), (C ?? I)?.(me);
    },
    [p, C, I, e.length]
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
    if (!v || T || e.length <= 1) return;
    const Z = setInterval(() => {
      de(c + 1);
    }, $);
    return () => clearInterval(Z);
  }, [v, T, $, c, de, e.length]);
  const X = (Z) => {
    e.length !== 0 && (Z.key === "ArrowLeft" ? (Z.preventDefault(), ne()) : Z.key === "ArrowRight" ? (Z.preventDefault(), oe()) : Z.key === "Home" ? (Z.preventDefault(), ae(0)) : Z.key === "End" && (Z.preventDefault(), ae(e.length - 1)));
  }, W = () => {
    U && v && L(!0);
  }, B = () => {
    U && v && L(!1);
  }, te = () => {
    U && v && L(!0);
  }, he = () => {
    U && v && L(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ N(
    "div",
    {
      ref: J,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": D,
      tabIndex: 0,
      className: [yt.root, y].filter(Boolean).join(" "),
      onKeyDown: X,
      onMouseEnter: W,
      onMouseLeave: B,
      onFocusCapture: te,
      onBlurCapture: he,
      children: [
        /* @__PURE__ */ t("div", { id: se, className: yt.viewport, children: e.map((Z, me) => {
          const ye = me === c;
          return /* @__PURE__ */ t(
            "div",
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `Slide ${me + 1} of ${e.length}`,
              "aria-hidden": ye ? void 0 : !0,
              hidden: !ye,
              className: [yt.slide, ye ? yt.active : null].filter(Boolean).join(" "),
              children: Z
            },
            me
          );
        }) }),
        R && e.length > 1 ? /* @__PURE__ */ N(Oe, { children: [
          /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: [yt.arrow, yt.prev].filter(Boolean).join(" "),
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
              className: [yt.arrow, yt.next].filter(Boolean).join(" "),
              "aria-label": "Next slide",
              "aria-controls": se,
              onClick: oe,
              children: "›"
            }
          )
        ] }) : null,
        v ? /* @__PURE__ */ t(
          "button",
          {
            type: "button",
            className: yt.pauseBtn,
            "aria-label": d ? "Resume" : "Pause",
            "aria-pressed": d,
            onClick: () => w((Z) => !Z),
            children: d ? "▶" : "⏸"
          }
        ) : null,
        O && e.length > 1 ? /* @__PURE__ */ t("div", { className: yt.indicators, role: "group", "aria-label": "Slide indicators", children: e.map((Z, me) => {
          const ye = me === c;
          return /* @__PURE__ */ t(
            "button",
            {
              type: "button",
              className: [yt.indicator, ye ? yt.indicatorActive : null].filter(Boolean).join(" "),
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
const Rm = "_root_9vei2_1", Bm = "_group_9vei2_20", Pm = "_itemWrapper_9vei2_30", qm = "_treeitem_9vei2_34", Fm = "_disabled_9vei2_50", Km = "_selected_9vei2_60", Hm = "_caret_9vei2_66", Wm = "_caretIcon_9vei2_113", Um = "_caretOpen_9vei2_120", Vm = "_caretPlaceholder_9vei2_124", Xm = "_label_9vei2_130", Gm = "_loading_9vei2_137", Ym = "_loadingRow_9vei2_143", Zm = "_empty_9vei2_149", at = {
  root: Rm,
  group: Bm,
  itemWrapper: Pm,
  treeitem: qm,
  disabled: Fm,
  selected: Km,
  caret: Hm,
  caretIcon: Wm,
  caretOpen: Um,
  caretPlaceholder: Vm,
  label: Xm,
  loading: Gm,
  loadingRow: Ym,
  empty: Zm
};
function z0({
  data: e,
  Data: n,
  children: r,
  Children: s,
  textProperty: o,
  TextProperty: a,
  keyProperty: u,
  KeyProperty: l,
  selectionMode: i,
  SelectionMode: h,
  selectedItem: x,
  SelectedItem: _,
  selectedItems: z,
  SelectedItems: k,
  defaultSelectedItem: C,
  defaultSelectedItems: I,
  onChange: D,
  Change: y,
  onExpand: m,
  Expand: p,
  onCollapse: S,
  Collapse: f,
  loadChildData: g,
  LoadChildData: c,
  template: v,
  Template: $,
  itemTemplate: U,
  ItemTemplate: R,
  ariaLabel: O,
  AriaLabel: d,
  className: w
}) {
  const M = e ?? n ?? [], L = r ?? s, T = o ?? a ?? "text", J = u ?? l ?? "id", se = i ?? h ?? "single", de = O ?? d ?? "Tree", ne = g ?? c, oe = v ?? $ ?? U ?? R, ae = q(
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
  ), [te, he] = V(() => B(M)), [Z, me] = V(() => /* @__PURE__ */ new Map()), [ye, ze] = V(() => /* @__PURE__ */ new Set()), He = x ?? _, Me = z ?? k, Ge = se === "multiple" ? Me !== void 0 : He !== void 0, et = q(() => {
    if (se === "multiple") {
      if (I && I.length > 0)
        return new Set(I.map((ie) => ae(ie)));
      const F = /* @__PURE__ */ new Set(), ee = (ie) => {
        for (const _e of ie) {
          _e.selected && F.add(ae(_e));
          const ce = W(_e);
          ce && ee(ce);
        }
      };
      return ee(M), F;
    } else {
      if (C) return /* @__PURE__ */ new Set([ae(C)]);
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
  }, [se, C, I, ae, W, M]), [We, Ze] = V(() => et()), Fe = Se(() => {
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
  }, [M, Z, ae, W]), b = q(
    (F) => {
      const ee = ae(F);
      if (!F.disabled)
        if (se === "multiple") {
          let _e = new Set(Fe);
          _e.has(ee) ? _e.delete(ee) : _e.add(ee), Ge || Ze(_e);
          const ce = D ?? y;
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
          const ce = D ?? y;
          ce && ce({ item: F, selectedItem: F });
        } else {
          const ce = D ?? y;
          ce && ce({ item: F, selectedItem: F });
        }
    },
    [ae, se, Fe, Ge, D, y, H, Ye]
  ), E = q(
    async (F) => {
      const ee = ae(F);
      if (!!F.disabled) return;
      const _e = te.has(ee), ce = m ?? p, ge = S ?? f, Ae = W(F), j = Z.get(ee) ?? Ae, Ce = !(j !== void 0 && j.length > 0) && ne != null;
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
    [ae, te, W, Z, ne, ye, m, p, S, f]
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
          const St = Z.get(Be) ?? re;
          St && St.length > 0 && ee(St, _e + 1, Be);
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
  ), gt = q(
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
        F.preventDefault(), ie && b(ie.item);
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
    [K, Q, je, E, b, tt]
  ), Y = q(() => {
    if (!Q && K.length > 0) {
      const F = K[0];
      F && G(F.key);
    }
  }, [Q, K]), $e = (F, ee, ie) => /* @__PURE__ */ t("ul", { role: "group", className: at.group, children: F.map((_e, ce) => {
    const ge = ae(_e), Ae = X(_e), Be = Z.get(ge) ?? W(_e);
    let j;
    Z.has(ge) ? j = Z.get(ge).length > 0 : Be !== void 0 ? j = Be.length > 0 : ne ? j = !0 : j = !1;
    const re = te.has(ge), Ce = Fe.has(ge), we = !!_e.disabled, Ee = ye.has(ge), Je = Q === ge, lt = F.length, St = ce + 1, yn = oe ? oe(_e) : Ae;
    return /* @__PURE__ */ N("li", { role: "none", className: at.itemWrapper, children: [
      /* @__PURE__ */ N(
        "div",
        {
          role: "treeitem",
          "data-key": ge,
          tabIndex: Je ? 0 : -1,
          "aria-expanded": j ? re : void 0,
          "aria-selected": Ce,
          "aria-level": ee,
          "aria-setsize": lt,
          "aria-posinset": St,
          "aria-disabled": we || void 0,
          "aria-busy": Ee || void 0,
          className: [
            at.treeitem,
            Ce ? at.selected : null,
            we ? at.disabled : null,
            Je ? at.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            je(ge), we || b(_e);
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
                onClick: (en) => {
                  en.stopPropagation(), je(ge), E(_e);
                },
                children: /* @__PURE__ */ t("span", { "aria-hidden": "true", className: [at.caretIcon, re ? at.caretOpen : null].filter(Boolean).join(" "), children: "▸" })
              }
            ) : /* @__PURE__ */ t("span", { className: at.caretPlaceholder, "aria-hidden": "true" }),
            /* @__PURE__ */ t("span", { className: at.label, children: yn }),
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
      className: [at.root, w].filter(Boolean).join(" "),
      onKeyDown: gt,
      onFocus: Y,
      children: M.length === 0 ? /* @__PURE__ */ t("div", { className: at.empty, children: "No items" }) : $e(M, 1)
    }
  );
}
const Jm = "_root_1nxec_1", Qm = "_panel_1nxec_8", eg = "_header_1nxec_19", tg = "_listbox_1nxec_28", ng = "_option_1nxec_42", rg = "_disabled_1nxec_57", sg = "_active_1nxec_66", og = "_selected_1nxec_70", ag = "_empty_1nxec_86", lg = "_controls_1nxec_93", cg = "_reorder_1nxec_102", ig = "_btn_1nxec_110", Le = {
  root: Jm,
  panel: Qm,
  header: eg,
  listbox: tg,
  option: ng,
  disabled: rg,
  active: sg,
  selected: og,
  empty: ag,
  controls: lg,
  reorder: cg,
  btn: ig
};
function Qe(e, n) {
  const r = e[n];
  return r != null ? String(r) : String(e.id ?? "");
}
function Cn(e) {
  const n = e.text;
  return n != null ? String(n) : String(e.id ?? "");
}
function C0({
  source: e,
  Source: n,
  target: r,
  Target: s,
  value: o,
  Value: a,
  targetValue: u,
  TargetValue: l,
  data: i,
  Data: h,
  onSourceChange: x,
  SourceChange: _,
  onTargetChange: z,
  TargetChange: k,
  keyProperty: C,
  KeyProperty: I,
  onMove: D,
  Move: y,
  ariaLabel: m,
  AriaLabel: p,
  className: S
}) {
  const f = C ?? I ?? "id", g = m ?? p ?? "PickList", c = e ?? n ?? o ?? a ?? i ?? h ?? [], v = r ?? s ?? u ?? l ?? [], [$, U] = V(() => [...c]), [R, O] = V(() => [...v]);
  De(() => {
    const b = e ?? n ?? o ?? a ?? i ?? h;
    b !== void 0 && U([...b]);
  }, [e, n, o, a, i, h]), De(() => {
    const b = r ?? s ?? u ?? l;
    b !== void 0 && O([...b]);
  }, [r, s, u, l]);
  const [d, w] = V(() => /* @__PURE__ */ new Set()), [M, L] = V(() => /* @__PURE__ */ new Set()), [T, J] = V(() => {
    const b = c.findIndex((E) => !E.disabled);
    return b >= 0 ? b : 0;
  }), [se, de] = V(() => {
    const b = v.findIndex((E) => !E.disabled);
    return b >= 0 ? b : 0;
  }), ne = Se(() => $.map((b, E) => b.disabled ? -1 : E).filter((b) => b >= 0), [$]), oe = Se(() => R.map((b, E) => b.disabled ? -1 : E).filter((b) => b >= 0), [R]);
  De(() => {
    if (T >= $.length) {
      const b = ne[ne.length - 1];
      J(b ?? 0);
    } else if ($.length > 0 && ne.length > 0 && !ne.includes(T)) {
      const b = ne[0];
      b !== void 0 && J(b);
    }
  }, [T, $.length, ne]), De(() => {
    if (se >= R.length) {
      const b = oe[oe.length - 1];
      de(b ?? 0);
    } else if (R.length > 0 && oe.length > 0 && !oe.includes(se)) {
      const b = oe[0];
      b !== void 0 && de(b);
    }
  }, [se, R.length, oe]), De(() => {
    w((b) => {
      const E = /* @__PURE__ */ new Set();
      for (const K of b)
        $.some((G) => Qe(G, f) === K && !G.disabled) && E.add(K);
      return E;
    });
  }, [$, f]), De(() => {
    L((b) => {
      const E = /* @__PURE__ */ new Set();
      for (const K of b)
        R.some((G) => Qe(G, f) === K && !G.disabled) && E.add(K);
      return E;
    });
  }, [R, f]);
  const ae = q(
    (b) => {
      (x ?? _)?.(b);
    },
    [x, _]
  ), X = q(
    (b) => {
      (z ?? k)?.(b);
    },
    [z, k]
  ), W = q(
    (b) => {
      (D ?? y)?.(b);
    },
    [D, y]
  ), B = q(
    (b) => {
      const E = $[b];
      if (!E || E.disabled) return;
      const K = Qe(E, f);
      w((Q) => {
        const G = new Set(Q);
        return G.has(K) ? G.delete(K) : G.add(K), G;
      }), J(b);
    },
    [$, f]
  ), te = q(
    (b) => {
      const E = R[b];
      if (!E || E.disabled) return;
      const K = Qe(E, f);
      L((Q) => {
        const G = new Set(Q);
        return G.has(K) ? G.delete(K) : G.add(K), G;
      }), de(b);
    },
    [R, f]
  ), he = q(() => {
    const b = [], E = [];
    for (const fe of $) {
      const ke = Qe(fe, f);
      d.has(ke) && !fe.disabled ? b.push(fe) : E.push(fe);
    }
    if (b.length === 0) return;
    const K = E, Q = [...R, ...b];
    U(K), O(Q), w(/* @__PURE__ */ new Set());
    const G = new Set(b.map((fe) => Qe(fe, f)));
    L(G), ae(K), X(Q), W({ source: K, target: Q, moved: b, direction: "toTarget" });
  }, [$, R, d, f, ae, X, W]), Z = q(() => {
    const b = [], E = [];
    for (const fe of R) {
      const ke = Qe(fe, f);
      M.has(ke) && !fe.disabled ? b.push(fe) : E.push(fe);
    }
    if (b.length === 0) return;
    const K = E, Q = [...$, ...b];
    O(K), U(Q), L(/* @__PURE__ */ new Set());
    const G = new Set(b.map((fe) => Qe(fe, f)));
    w(G), ae(Q), X(K), W({ source: Q, target: K, moved: b, direction: "toSource" });
  }, [$, R, M, f, ae, X, W]), me = q(() => {
    const b = $.filter((Q) => !Q.disabled);
    if (b.length === 0) return;
    const E = $.filter((Q) => !!Q.disabled), K = [...R, ...b];
    U(E), O(K), w(/* @__PURE__ */ new Set()), ae(E), X(K), W({ source: E, target: K, moved: b, direction: "allToTarget" });
  }, [$, R, f, ae, X, W]), ye = q(() => {
    const b = R.filter((Q) => !Q.disabled);
    if (b.length === 0) return;
    const E = R.filter((Q) => !!Q.disabled), K = [...$, ...b];
    O(E), U(K), L(/* @__PURE__ */ new Set()), ae(K), X(E), W({ source: K, target: E, moved: b, direction: "allToSource" });
  }, [$, R, ae, X, W]), ze = q(() => {
    if (M.size === 0) return;
    const b = [...R], E = M;
    let K = [];
    for (let G = 1; G < b.length; G++) {
      const fe = b[G], ke = b[G - 1];
      if (!fe || !ke) continue;
      const Re = Qe(fe, f), je = Qe(ke, f);
      E.has(Re) && !E.has(je) && !fe.disabled && !ke.disabled && (b[G - 1] = fe, b[G] = ke, K.push(fe));
    }
    if (K.length === 0) return;
    O(b), X(b), W({ source: $, target: b, moved: K, direction: "up" });
    const Q = Array.from(E)[0];
    if (Q) {
      const G = b.findIndex((fe) => Qe(fe, f) === Q);
      G >= 0 && de(G);
    }
  }, [R, M, f, $, X, W]), He = q(() => {
    if (M.size === 0) return;
    const b = [...R], E = M;
    let K = [];
    for (let G = b.length - 2; G >= 0; G--) {
      const fe = b[G], ke = b[G + 1];
      if (!fe || !ke) continue;
      const Re = Qe(fe, f), je = Qe(ke, f);
      E.has(Re) && !E.has(je) && !fe.disabled && !ke.disabled && (b[G] = ke, b[G + 1] = fe, K.push(fe));
    }
    if (K.length === 0) return;
    O(b), X(b), W({ source: $, target: b, moved: K, direction: "down" });
    const Q = Array.from(E)[0];
    if (Q) {
      const G = b.findIndex((fe) => Qe(fe, f) === Q);
      G >= 0 && de(G);
    }
  }, [R, M, f, $, X, W]), Me = d.size > 0, Xe = M.size > 0, be = le(""), Ge = le(null), et = le(""), We = le(null), Ze = q(
    (b) => {
      if ($.length === 0) return;
      const E = ne;
      if (E.length === 0) return;
      let K = E.includes(T) ? T : E[0] ?? 0, Q = -1;
      if (b.key === "ArrowDown") {
        b.preventDefault();
        const G = E.indexOf(K);
        Q = E[(G + 1) % E.length] ?? E[0] ?? 0;
      } else if (b.key === "ArrowUp") {
        b.preventDefault();
        const G = E.indexOf(K);
        Q = E[(G - 1 + E.length) % E.length] ?? E[0] ?? 0;
      } else if (b.key === "Home")
        b.preventDefault(), Q = E[0] ?? 0;
      else if (b.key === "End")
        b.preventDefault(), Q = E[E.length - 1] ?? 0;
      else if (b.key === "Enter" || b.key === " ") {
        b.preventDefault(), B(K);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(b.key)) {
        b.preventDefault();
        const G = (be.current + b.key).toLowerCase();
        be.current = G, Ge.current && clearTimeout(Ge.current), Ge.current = setTimeout(() => {
          be.current = "";
        }, 500);
        const fe = [...E, ...E], ke = E.indexOf(K) + 1, Re = fe.slice(ke).find((je) => Cn($[je]).toLowerCase().startsWith(G));
        Re != null && J(Re);
        return;
      }
      Q >= 0 && J(Q);
    },
    [$, ne, T, B]
  ), Fe = q(
    (b) => {
      if (R.length === 0) return;
      const E = oe;
      if (E.length === 0) return;
      let K = E.includes(se) ? se : E[0] ?? 0, Q = -1;
      if (b.key === "ArrowDown") {
        b.preventDefault();
        const G = E.indexOf(K);
        Q = E[(G + 1) % E.length] ?? E[0] ?? 0;
      } else if (b.key === "ArrowUp") {
        b.preventDefault();
        const G = E.indexOf(K);
        Q = E[(G - 1 + E.length) % E.length] ?? E[0] ?? 0;
      } else if (b.key === "Home")
        b.preventDefault(), Q = E[0] ?? 0;
      else if (b.key === "End")
        b.preventDefault(), Q = E[E.length - 1] ?? 0;
      else if (b.key === "Enter" || b.key === " ") {
        b.preventDefault(), te(K);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(b.key)) {
        b.preventDefault();
        const G = (et.current + b.key).toLowerCase();
        et.current = G, We.current && clearTimeout(We.current), We.current = setTimeout(() => {
          et.current = "";
        }, 500);
        const fe = [...E, ...E], ke = E.indexOf(K) + 1, Re = fe.slice(ke).find((je) => Cn(R[je]).toLowerCase().startsWith(G));
        Re != null && de(Re);
        return;
      }
      Q >= 0 && de(Q);
    },
    [R, oe, se, te]
  ), Ye = le(null), H = le(null);
  return /* @__PURE__ */ N("div", { className: [Le.root, S].filter(Boolean).join(" "), "aria-label": g, children: [
    /* @__PURE__ */ N("div", { className: Le.panel, children: [
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
          children: $.length === 0 ? /* @__PURE__ */ t("div", { className: Le.empty, children: "No items" }) : $.map((b, E) => {
            const K = Qe(b, f), Q = d.has(K), G = E === T, fe = !!b.disabled;
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
                children: Cn(b)
              },
              K
            );
          })
        }
      )
    ] }),
    /* @__PURE__ */ N("div", { className: Le.controls, children: [
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
          "aria-disabled": $.filter((b) => !b.disabled).length === 0 || void 0,
          disabled: $.filter((b) => !b.disabled).length === 0,
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
          "aria-disabled": $.filter((b) => !b.disabled).length === 0 || void 0,
          disabled: $.filter((b) => !b.disabled).length === 0,
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
          "aria-disabled": R.filter((b) => !b.disabled).length === 0 || void 0,
          disabled: R.filter((b) => !b.disabled).length === 0,
          onClick: ye,
          children: "«"
        }
      )
    ] }),
    /* @__PURE__ */ N("div", { className: Le.panel, children: [
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
          children: R.length === 0 ? /* @__PURE__ */ t("div", { className: Le.empty, children: "No items" }) : R.map((b, E) => {
            const K = Qe(b, f), Q = M.has(K), G = E === se, fe = !!b.disabled;
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
                children: Cn(b)
              },
              K
            );
          })
        }
      ),
      /* @__PURE__ */ N("div", { className: Le.reorder, children: [
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
export {
  Gg as Accordion,
  Rg as Alert,
  Qg as Autocomplete,
  Vg as Avatar,
  pg as Badge,
  Hg as Body,
  w0 as Breadcrumb,
  fg as Button,
  _g as Card,
  D0 as Carousel,
  jg as Checkbox,
  t0 as Checkboxlist,
  d0 as Colorpicker,
  qg as Column,
  kn as DEFAULT_OPERATOR_BY_TYPE,
  Yp as DEFAULT_PALETTE,
  zg as DataFilter,
  Cg as DataGrid,
  Og as DataList,
  u0 as Datepicker,
  Tg as Dialog,
  b0 as DropZone,
  Jg as Dropdown,
  bg as EmptyState,
  br as FILTER_OPERATORS,
  k0 as FabMenu,
  yg as Field,
  zu as Footer,
  vg as Form,
  Iu as Header,
  Ve as Icon,
  Mg as Input,
  Ig as Label,
  Kg as Layout,
  e0 as Listbox,
  c0 as Mask,
  y0 as Menu,
  i0 as Numeric,
  Ro as Pager,
  v0 as PanelMenu,
  l0 as Password,
  C0 as PickList,
  x0 as ProfileMenu,
  Wg as Progress,
  n0 as Radiobuttonlist,
  f0 as Rating,
  Pg as Row,
  h0 as SecurityCode,
  In as Select,
  r0 as Selectbar,
  Bu as Sidebar,
  m0 as SignaturePad,
  Bg as Skeleton,
  _0 as Slider,
  o0 as Splitbutton,
  N0 as Splitter,
  Fg as Stack,
  mg as Stat,
  $0 as Steps,
  Za as Switch,
  gg as Table,
  Xg as Tabs,
  Yg as Textarea,
  a0 as Textbox,
  Ug as ThemeSwitcher,
  p0 as Timespanpicker,
  Lg as ToastProvider,
  S0 as Toc,
  s0 as Togglebutton,
  Eg as Tooltip,
  z0 as Tree,
  Zg as Typography,
  g0 as Upload,
  vr as applyFilters,
  Wo as applyGridState,
  an as columnValue,
  Fo as cycleSort,
  Uo as defaultOperatorForType,
  kg as email,
  ar as formatMasked,
  Jn as formatValue,
  Mn as getByPath,
  hg as iconNames,
  yr as matchesFilters,
  Ng as maxLength,
  $g as minLength,
  Ho as paginate,
  wg as pattern,
  Sg as range,
  xg as required,
  Xs as runValidators,
  io as sortItems,
  Ko as sortedItems,
  so as toFilterString,
  co as toODataFilterString,
  Vs as useFormContext,
  Dg as useFormField,
  Ag as useToast
};
