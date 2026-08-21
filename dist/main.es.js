import { jsx as r, jsxs as $, Fragment as ue } from "react/jsx-runtime";
import { forwardRef as ve, useId as Ne, isValidElement as Rn, cloneElement as dr, useState as H, useRef as Y, useCallback as q, useMemo as pe, useContext as ur, createContext as fr, useEffect as be, Children as wr, useImperativeHandle as Bn } from "react";
const kr = "_button_1wxdv_1", $r = "_primary_1wxdv_29", Nr = "_secondary_1wxdv_38", Sr = "_ghost_1wxdv_48", Dr = "_danger_1wxdv_57", zr = "_success_1wxdv_61", Or = "_info_1wxdv_65", Cr = "_xs_1wxdv_101", Mr = "_sm_1wxdv_107", Ir = "_md_1wxdv_113", jr = "_lg_1wxdv_119", Er = "_xl_1wxdv_125", Tr = "_iconOnly_1wxdv_131", Ar = "_fullWidth_1wxdv_157", Gt = {
  button: kr,
  primary: $r,
  secondary: Nr,
  ghost: Sr,
  danger: Dr,
  success: zr,
  info: Or,
  xs: Cr,
  sm: Mr,
  md: Ir,
  lg: jr,
  xl: Er,
  iconOnly: Tr,
  fullWidth: Ar
}, Am = ve(function({
  variant: t = "primary",
  size: n = "md",
  fullWidth: s = !1,
  iconOnly: o = !1,
  className: a,
  type: u = "button",
  ...l
}, i) {
  const p = [
    Gt.button,
    Gt[t],
    Gt[n],
    s ? Gt.fullWidth : null,
    o ? Gt.iconOnly : null,
    a
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r("button", { ref: i, type: u, className: p, ...l });
}), Lr = "_card_10w4x_1", Rr = "_elevated_10w4x_8", Br = "_outlined_10w4x_13", Pr = "_interactive_10w4x_17", qr = "_text_10w4x_25", Fr = "_header_10w4x_41", Hr = "_body_10w4x_48", Kr = "_footer_10w4x_58", Yt = {
  card: Lr,
  elevated: Rr,
  outlined: Br,
  interactive: Pr,
  text: qr,
  header: Fr,
  body: Hr,
  footer: Kr
}, Lm = ve(function({ variant: t = "elevated", header: n, footer: s, className: o, children: a, onKeyDown: u, ...l }, i) {
  const p = t === "interactive";
  return /* @__PURE__ */ $(
    "div",
    {
      ref: i,
      tabIndex: p ? 0 : void 0,
      onKeyDown: (v) => {
        u?.(v), !(!p || v.key !== "Enter" && v.key !== " ") && (v.preventDefault(), v.currentTarget.click());
      },
      className: [Yt.card, Yt[t], o].filter(Boolean).join(" "),
      ...l,
      children: [
        n != null && /* @__PURE__ */ r("div", { className: Yt.header, children: n }),
        /* @__PURE__ */ r("div", { className: Yt.body, children: a }),
        s != null && /* @__PURE__ */ r("div", { className: Yt.footer, children: s })
      ]
    }
  );
}), Wr = "_badge_dcudr_1", Vr = "_xs_dcudr_14", Ur = "_sm_dcudr_19", Xr = "_md_dcudr_24", Gr = "_lg_dcudr_29", Yr = "_xl_dcudr_34", Jr = "_neutral_dcudr_40", Zr = "_primary_dcudr_45", Qr = "_success_dcudr_50", es = "_warning_dcudr_55", ts = "_danger_dcudr_60", ns = "_solid_dcudr_66", rs = "_outline_dcudr_91", pn = {
  badge: Wr,
  xs: Vr,
  sm: Ur,
  md: Xr,
  lg: Gr,
  xl: Yr,
  neutral: Jr,
  primary: Zr,
  success: Qr,
  warning: es,
  danger: ts,
  solid: ns,
  outline: rs
}, Rm = ve(function({ tone: t = "neutral", variant: n = "soft", size: s = "md", className: o, children: a, ...u }, l) {
  return /* @__PURE__ */ r(
    "span",
    {
      ref: l,
      className: [pn.badge, pn[s], pn[t], pn[n], o].filter(Boolean).join(" "),
      ...u,
      children: a
    }
  );
}), ss = "_xs_cg2f2_2", os = "_sm_cg2f2_7", as = "_md_cg2f2_1", ls = "_lg_cg2f2_17", cs = "_xl_cg2f2_22", is = {
  xs: ss,
  sm: os,
  md: as,
  lg: ls,
  xl: cs
}, Bm = [
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
], ds = {
  check: /* @__PURE__ */ r("path", { d: "M20 6L9 17l-5-5" }),
  close: /* @__PURE__ */ r("path", { d: "M18 6L6 18M6 6l12 12" }),
  "chevron-down": /* @__PURE__ */ r("path", { d: "M6 9l6 6 6-6" }),
  "chevron-left": /* @__PURE__ */ r("path", { d: "M15 18l-6-6 6-6" }),
  "chevron-right": /* @__PURE__ */ r("path", { d: "M9 18l6-6-6-6" }),
  "chevron-up": /* @__PURE__ */ r("path", { d: "M18 15l-6-6-6 6" }),
  search: /* @__PURE__ */ $(ue, { children: [
    /* @__PURE__ */ r("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ r("path", { d: "M21 21l-4.3-4.3" })
  ] }),
  plus: /* @__PURE__ */ r("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ r("path", { d: "M5 12h14" }),
  alert: /* @__PURE__ */ $(ue, { children: [
    /* @__PURE__ */ r("path", { d: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" }),
    /* @__PURE__ */ r("path", { d: "M12 9v4M12 17h.01" })
  ] }),
  info: /* @__PURE__ */ $(ue, { children: [
    /* @__PURE__ */ r("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ r("path", { d: "M12 16v-4M12 8h.01" })
  ] }),
  "arrow-right": /* @__PURE__ */ r("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  "arrow-left": /* @__PURE__ */ r("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  "external-link": /* @__PURE__ */ $(ue, { children: [
    /* @__PURE__ */ r("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
    /* @__PURE__ */ r("path", { d: "M15 3h6v6M10 14L21 3" })
  ] }),
  copy: /* @__PURE__ */ $(ue, { children: [
    /* @__PURE__ */ r("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ r("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] }),
  trash: /* @__PURE__ */ r(ue, { children: /* @__PURE__ */ r("path", { d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" }) }),
  edit: /* @__PURE__ */ $(ue, { children: [
    /* @__PURE__ */ r("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ r("path", { d: "M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  settings: /* @__PURE__ */ $(ue, { children: [
    /* @__PURE__ */ r("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ r("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] }),
  user: /* @__PURE__ */ $(ue, { children: [
    /* @__PURE__ */ r("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ r("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ $(ue, { children: [
    /* @__PURE__ */ r("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ r("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ r("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  download: /* @__PURE__ */ r("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  upload: /* @__PURE__ */ r("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  menu: /* @__PURE__ */ r("path", { d: "M3 12h18M3 6h18M3 18h18" }),
  "more-horizontal": /* @__PURE__ */ $(ue, { children: [
    /* @__PURE__ */ r("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ r("circle", { cx: "19", cy: "12", r: "1" }),
    /* @__PURE__ */ r("circle", { cx: "5", cy: "12", r: "1" })
  ] }),
  mail: /* @__PURE__ */ $(ue, { children: [
    /* @__PURE__ */ r("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ r("path", { d: "M22 6l-10 7L2 6" })
  ] }),
  lock: /* @__PURE__ */ $(ue, { children: [
    /* @__PURE__ */ r("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ r("path", { d: "M7 11V7a5 5 0 0110 0v4" })
  ] }),
  eye: /* @__PURE__ */ $(ue, { children: [
    /* @__PURE__ */ r("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ r("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  "eye-off": /* @__PURE__ */ $(ue, { children: [
    /* @__PURE__ */ r("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ r("path", { d: "M1 1l22 22" })
  ] }),
  refresh: /* @__PURE__ */ $(ue, { children: [
    /* @__PURE__ */ r("path", { d: "M23 4v6h-6M1 20v-6h6" }),
    /* @__PURE__ */ r("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
  ] }),
  calendar: /* @__PURE__ */ $(ue, { children: [
    /* @__PURE__ */ r("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ r("path", { d: "M16 2v4M8 2v4M3 10h18" })
  ] }),
  clock: /* @__PURE__ */ $(ue, { children: [
    /* @__PURE__ */ r("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ r("path", { d: "M12 6v6l4 2" })
  ] }),
  "check-circle": /* @__PURE__ */ $(ue, { children: [
    /* @__PURE__ */ r("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ r("path", { d: "M22 4L12 14.01l-3-3" })
  ] }),
  "x-circle": /* @__PURE__ */ $(ue, { children: [
    /* @__PURE__ */ r("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ r("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] }),
  shield: /* @__PURE__ */ r(ue, { children: /* @__PURE__ */ r("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  globe: /* @__PURE__ */ $(ue, { children: [
    /* @__PURE__ */ r("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ r("path", { d: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
  ] }),
  file: /* @__PURE__ */ $(ue, { children: [
    /* @__PURE__ */ r("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
    /* @__PURE__ */ r("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
  ] }),
  folder: /* @__PURE__ */ r("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" }),
  home: /* @__PURE__ */ $(ue, { children: [
    /* @__PURE__ */ r("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
    /* @__PURE__ */ r("path", { d: "M9 22V12h6v10" })
  ] }),
  key: /* @__PURE__ */ r(ue, { children: /* @__PURE__ */ r("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) }),
  link: /* @__PURE__ */ $(ue, { children: [
    /* @__PURE__ */ r("path", { d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" }),
    /* @__PURE__ */ r("path", { d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" })
  ] }),
  star: /* @__PURE__ */ r("path", { fill: "currentColor", stroke: "none", d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" }),
  "star-outline": /* @__PURE__ */ r("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" }),
  ban: /* @__PURE__ */ $(ue, { children: [
    /* @__PURE__ */ r("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ r("path", { d: "M4.93 4.93l14.14 14.14" })
  ] })
}, De = ve(function({ name: t, size: n = "md", strokeWidth: s = 2, className: o, ...a }, u) {
  const l = typeof n == "string";
  return /* @__PURE__ */ r(
    "svg",
    {
      ref: u,
      className: [l ? is[n] : null, o].filter(Boolean).join(" "),
      width: l ? void 0 : n,
      height: l ? void 0 : n,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: s,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      ...a,
      children: ds[t]
    }
  );
}), us = "_stat_11sa0_1", fs = "_label_11sa0_8", _s = "_row_11sa0_16", ps = "_value_11sa0_22", hs = "_delta_11sa0_28", ms = "_success_11sa0_33", gs = "_danger_11sa0_37", bs = "_neutral_11sa0_41", ys = "_hint_11sa0_45", Ot = {
  stat: us,
  label: fs,
  row: _s,
  value: ps,
  delta: hs,
  success: ms,
  danger: gs,
  neutral: bs,
  hint: ys
}, Pm = ve(function({ label: t, value: n, delta: s, deltaTone: o = "neutral", hint: a, className: u, ...l }, i) {
  return /* @__PURE__ */ $("div", { ref: i, className: [Ot.stat, u].filter(Boolean).join(" "), ...l, children: [
    /* @__PURE__ */ r("div", { className: Ot.label, children: t }),
    /* @__PURE__ */ $("div", { className: Ot.row, children: [
      /* @__PURE__ */ r("div", { className: Ot.value, children: n }),
      s != null && /* @__PURE__ */ r("div", { className: [Ot.delta, Ot[o]].join(" "), children: s })
    ] }),
    a != null && /* @__PURE__ */ r("div", { className: Ot.hint, children: a })
  ] });
}), vs = "_wrap_1cpzs_1", xs = "_table_1cpzs_8", ws = "_caption_1cpzs_14", ks = "_none_1cpzs_51", $s = "_horizontal_1cpzs_57", Ns = "_vertical_1cpzs_67", Ss = "_alternating_1cpzs_85", Ds = "_start_1cpzs_89", zs = "_center_1cpzs_93", Os = "_end_1cpzs_97", Cs = "_empty_1cpzs_101", xt = {
  wrap: vs,
  table: xs,
  caption: ws,
  none: ks,
  horizontal: $s,
  vertical: Ns,
  alternating: Ss,
  start: Ds,
  center: zs,
  end: Os,
  empty: Cs
};
function qm({
  columns: e,
  rows: t,
  rowKey: n,
  empty: s,
  caption: o,
  gridLines: a = "default",
  allowAlternatingRows: u = !0,
  className: l
}) {
  const i = a === "default" || a === "both" ? "" : xt[a];
  return /* @__PURE__ */ $("div", { className: [xt.wrap, l].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ $(
      "table",
      {
        className: [
          xt.table,
          i,
          u ? xt.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          o != null && /* @__PURE__ */ r("caption", { className: xt.caption, children: o }),
          /* @__PURE__ */ r("thead", { children: /* @__PURE__ */ r("tr", { children: e.map((p) => /* @__PURE__ */ r(
            "th",
            {
              className: p.align != null ? xt[p.align] : void 0,
              scope: "col",
              children: p.header
            },
            p.key
          )) }) }),
          /* @__PURE__ */ r("tbody", { children: t.map((p) => /* @__PURE__ */ r("tr", { children: e.map((v) => /* @__PURE__ */ r(
            "td",
            {
              className: v.align != null ? xt[v.align] : void 0,
              children: v.render != null ? v.render(p) : p[v.key]
            },
            v.key
          )) }, n(p))) })
        ]
      }
    ),
    t.length === 0 && s != null && /* @__PURE__ */ r("div", { className: xt.empty, children: s })
  ] });
}
const Ms = "_emptyState_123z1_1", Is = "_icon_123z1_13", js = "_title_123z1_18", Es = "_description_123z1_24", Ts = "_action_123z1_30", Jt = {
  emptyState: Ms,
  icon: Is,
  title: js,
  description: Es,
  action: Ts
};
function Fm({ icon: e, title: t, description: n, action: s, className: o }) {
  return /* @__PURE__ */ $("div", { className: [Jt.emptyState, o].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ r("div", { className: Jt.icon, children: e }),
    /* @__PURE__ */ r("div", { className: Jt.title, children: t }),
    n != null && /* @__PURE__ */ r("div", { className: Jt.description, children: n }),
    s != null && /* @__PURE__ */ r("div", { className: Jt.action, children: s })
  ] });
}
const As = "_field_18dbj_1", Ls = "_label_18dbj_8", Rs = "_required_18dbj_14", Bs = "_hint_18dbj_19", Ps = "_error_18dbj_24", Zt = {
  field: As,
  label: Ls,
  required: Rs,
  hint: Bs,
  error: Ps
};
function Hm({ label: e, htmlFor: t, required: n, hint: s, error: o, children: a, className: u }) {
  const l = Ne(), i = Ne(), p = o != null ? l : s != null ? i : null, v = Rn(a) && p != null ? dr(
    a,
    {
      "aria-describedby": [
        a.props["aria-describedby"],
        p
      ].filter((f) => typeof f == "string").join(" ") || void 0,
      "aria-invalid": o != null ? !0 : a.props["aria-invalid"]
    }
  ) : a;
  return /* @__PURE__ */ $("div", { className: [Zt.field, u].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ $("label", { className: Zt.label, htmlFor: t, children: [
      e,
      n === !0 && /* @__PURE__ */ r("span", { className: Zt.required, "aria-hidden": "true", children: "*" })
    ] }),
    v,
    o != null ? /* @__PURE__ */ r("div", { id: l, className: Zt.error, "aria-live": "polite", children: o }) : s != null ? /* @__PURE__ */ r("div", { id: i, className: Zt.hint, children: s }) : null
  ] });
}
const qs = "_form_qa5tm_1", Fs = {
  form: qs
}, _r = fr(null);
function Hs() {
  const e = ur(_r);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function Km({
  model: e,
  onSubmit: t,
  onInvalidSubmit: n,
  action: s,
  method: o,
  children: a,
  className: u
}) {
  const [l, i] = H({}), [p, v] = H(0), f = Y(l);
  f.current = l;
  const S = q((_) => {
    i((w) => w[_.name] === _ ? w : { ...w, [_.name]: _ });
  }, []), x = q((_) => {
    i((w) => {
      if (!(_ in w)) return w;
      const m = { ...w };
      return delete m[_], m;
    });
  }, []), D = q(() => {
    const _ = {};
    for (const w of Object.values(f.current)) {
      const m = w.validate();
      m.length > 0 && (_[w.name] = m);
    }
    return _;
  }, []), C = q(() => {
    const _ = D();
    v((w) => w + 1), Object.keys(_).length === 0 ? t?.(e) : n?.(_);
  }, [D, e, t, n]), N = (_) => {
    s != null && o != null || (_.preventDefault(), C());
  }, b = pe(
    () => ({ registerField: S, unregisterField: x, submit: C, submitCount: p }),
    [S, x, C, p]
  ), h = [Fs.form, u].filter(Boolean).join(" ");
  return /* @__PURE__ */ r(_r.Provider, { value: b, children: /* @__PURE__ */ r("form", { className: h, onSubmit: N, action: s, method: o, children: a }) });
}
const Wt = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", Wm = (e = "Required") => (t) => Wt(t) ? e : null, Vm = (e = "Invalid email") => (t) => Wt(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, Um = (e, t = "Invalid format") => (n) => Wt(n) || e.test(String(n)) ? null : t, Xm = (e, t = `Minimum ${e} characters`) => (n) => Wt(n) || String(n).length >= e ? null : t, Gm = (e, t = `Maximum ${e} characters`) => (n) => Wt(n) || String(n).length <= e ? null : t, Ym = (e, t, n = `Between ${e} and ${t}`) => (s) => {
  if (Wt(s)) return null;
  const o = Number(s);
  return !Number.isNaN(o) && o >= e && o <= t ? null : n;
};
function Ks(e, t, n) {
  return e.map((s) => s(t, n)).filter((s) => s != null);
}
function Jm(e, t) {
  const { registerField: n, unregisterField: s, submitCount: o } = Hs(), [a, u] = H(t?.initialValue), [l, i] = H(!1), [p, v] = H(!1), f = Y(() => []);
  f.current = () => Ks(t?.validate ?? [], a), be(() => (n({ name: e, validate: () => f.current() }), () => s(e)), [e, n, s]), be(() => {
    o > 0 && (i(!0), v(!1));
  }, [o]);
  const S = l && !p ? f.current() : [];
  return { value: a, setValue: (D) => {
    u(D), v(!0);
  }, errors: S };
}
const Ws = "_select_14c07_1", Vs = "_invalid_14c07_33", Us = "_xs_14c07_39", Xs = "_sm_14c07_45", Gs = "_md_14c07_51", Ys = "_lg_14c07_57", Js = "_xl_14c07_63", Sn = {
  select: Ws,
  invalid: Vs,
  xs: Us,
  sm: Xs,
  md: Gs,
  lg: Ys,
  xl: Js
}, kn = ve(function({ size: t = "md", invalid: n = !1, options: s, children: o, className: a, ...u }, l) {
  return /* @__PURE__ */ r(
    "select",
    {
      ref: l,
      className: [Sn.select, Sn[t], n ? Sn.invalid : null, a].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...u,
      children: s != null ? s.map((i) => /* @__PURE__ */ r("option", { value: i.value, disabled: i.disabled, children: i.label }, i.value)) : o
    }
  );
}), pr = [
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
], hn = {
  string: "Contains",
  number: "Equals",
  boolean: "Equals",
  date: "Equals",
  enum: "Equals"
};
function $n(e, t) {
  return t.split(".").reduce((n, s) => {
    if (n != null)
      return n[s];
  }, e);
}
function Kn(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function dn(e, t) {
  const n = Kn(e), s = Kn(t);
  if (typeof n == "number" && typeof s == "number") return n - s;
  const o = String(n ?? ""), a = String(s ?? "");
  return o < a ? -1 : o > a ? 1 : 0;
}
function Wn(e, t, n) {
  const s = $n(t, e.property), o = Vn(s, e.value, e.operator, n);
  if (e.secondOperator == null || e.secondValue === void 0) return o;
  const a = Vn(s, e.secondValue, e.secondOperator, n);
  return (e.logicalOperator ?? "And") === "And" ? o && a : o || a;
}
function Vn(e, t, n, s) {
  const o = s === "CaseInsensitive", a = (i) => o && typeof i == "string" ? i.toLowerCase() : i, u = a(e), l = a(t);
  switch (n) {
    case "Equals":
      return u === l || Array.isArray(u) && u.some((i) => a(i) === l);
    case "NotEquals":
      return u !== l && !(Array.isArray(u) && u.some((i) => a(i) === l));
    case "LessThan":
      return dn(u, l) < 0;
    case "LessThanOrEquals":
      return dn(u, l) <= 0;
    case "GreaterThan":
      return dn(u, l) > 0;
    case "GreaterThanOrEquals":
      return dn(u, l) >= 0;
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
      return typeof t == "function" ? !!t(e) : !0;
    default:
      return !1;
  }
}
function Pn(e) {
  return "filters" in e;
}
function hr(e, t, n = {}) {
  const s = n.logicalOperator ?? "And", o = n.caseSensitivity ?? "CaseInsensitive";
  if (Pn(t)) {
    if (t.filters.length === 0) return !0;
    const a = t.operator ?? s;
    return t.filters[a === "Or" ? "some" : "every"](
      (u) => hr(e, u, { logicalOperator: a, caseSensitivity: o })
    );
  }
  return t.operator === "Custom", Wn(t, e, o);
}
function mr(e, t, n = {}) {
  return e.filter((s) => hr(s, t, n));
}
function Zs(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function We(e) {
  return typeof e == "string" ? `"${Zs(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(We).join(", ")}]` : `"${String(e)}"`;
}
function Qs(e) {
  const t = (s, o) => {
    switch (s) {
      case "Equals":
        return `${e.property}.Equals(${We(o)})`;
      case "NotEquals":
        return `!${e.property}.Equals(${We(o)})`;
      case "LessThan":
        return `${e.property}.LessThan(${We(o)})`;
      case "LessThanOrEquals":
        return `${e.property}.LessThanOrEquals(${We(o)})`;
      case "GreaterThan":
        return `${e.property}.GreaterThan(${We(o)})`;
      case "GreaterThanOrEquals":
        return `${e.property}.GreaterThanOrEquals(${We(o)})`;
      case "Contains":
        return `${e.property}.Contains(${We(o)})`;
      case "StartsWith":
        return `${e.property}.StartsWith(${We(o)})`;
      case "EndsWith":
        return `${e.property}.EndsWith(${We(o)})`;
      case "DoesNotContain":
        return `!${e.property}.Contains(${We(o)})`;
      case "In":
        return `${e.property}.In(${We(o)})`;
      case "NotIn":
        return `!${e.property}.In(${We(o)})`;
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
  const n = e.logicalOperator ?? "And";
  return `(${t(e.operator, e.value)} ${n} ${t(
    e.secondOperator,
    e.secondValue
  )})`;
}
function eo(e) {
  return Pn(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(eo).filter(Boolean).join(` ${e.operator} `)})` : Qs(e);
}
function to(e) {
  return e.replace(/'/g, "''");
}
const no = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function ro(e, t) {
  const n = e.property, s = t === "CaseInsensitive", o = (i) => s ? `tolower(${i})` : i, a = (i) => typeof i == "string" ? `'${to(i)}'` : i instanceof Date ? `'${i.toISOString()}'` : String(i ?? ""), u = (i, p) => {
    const v = typeof p == "string", f = v && s ? o(n) : n;
    switch (i) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${f} ${no[i]} ${v && s ? o(a(p)) : a(p)}`;
      case "Contains":
        return `contains(${o(n)}, ${o(a(p))})`;
      case "StartsWith":
        return `startswith(${o(n)}, ${o(a(p))})`;
      case "EndsWith":
        return `endswith(${o(n)}, ${o(a(p))})`;
      case "DoesNotContain":
        return `not(contains(${o(n)}, ${o(a(p))}))`;
      case "In":
        return Array.isArray(p) ? `${f} in (${p.map((S) => a(S)).join(", ")})` : `${f} in (${a(p)})`;
      case "NotIn":
        return Array.isArray(p) ? `not(${f} in (${p.map((S) => a(S)).join(", ")}))` : `not(${f} in (${a(p)}))`;
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
    return u(e.operator, e.value);
  const l = (e.logicalOperator ?? "And") === "And" ? "and" : "or";
  return `(${u(e.operator, e.value)} ${l} ${u(
    e.secondOperator,
    e.secondValue
  )})`;
}
function so(e, t = {}) {
  const n = t.caseSensitivity ?? "CaseInsensitive";
  if (Pn(e)) {
    if (e.filters.length === 0) return "";
    const s = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((o) => so(o, { caseSensitivity: n })).filter(Boolean).join(` ${s} `)})`;
  }
  return ro(e, n);
}
function oo(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((n, s) => {
    for (const o of t) {
      const a = o.sortOrder === "Ascending" ? 1 : -1, u = dn($n(n, o.property), $n(s, o.property));
      if (u !== 0) return u * a;
    }
    return 0;
  });
}
const ao = "_filter_1jk5p_1", lo = "_rows_1jk5p_9", co = "_row_1jk5p_9", io = "_join_1jk5p_21", uo = "_property_1jk5p_30", fo = "_operator_1jk5p_34", _o = "_value_1jk5p_38", po = "_remove_1jk5p_42", ho = "_bar_1jk5p_58", mo = "_add_1jk5p_64", go = "_custom_1jk5p_78", bo = "_summary_1jk5p_82", Re = {
  filter: ao,
  rows: lo,
  row: co,
  join: io,
  property: uo,
  operator: fo,
  value: _o,
  remove: po,
  bar: ho,
  add: mo,
  custom: go,
  summary: bo
}, yo = {
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
function vo({
  property: e,
  value: t,
  onChange: n
}) {
  if (e.editor != null)
    return /* @__PURE__ */ r(ue, { children: e.editor({ value: t, onChange: n }) });
  const s = e.type ?? "string";
  if (s === "enum" && e.values != null)
    return /* @__PURE__ */ r(
      kn,
      {
        "aria-label": e.title ?? e.name,
        className: Re.value,
        options: e.values,
        value: String(t ?? ""),
        onChange: (a) => n(a.target.value)
      }
    );
  if (s === "boolean")
    return /* @__PURE__ */ r(
      kn,
      {
        "aria-label": e.title ?? e.name,
        className: Re.value,
        options: [
          { value: "", label: "" },
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        value: t == null ? "" : String(t),
        onChange: (a) => {
          a.target.value === "" ? n(void 0) : n(a.target.value === "true");
        }
      }
    );
  const o = s === "number" ? { type: "number" } : s === "date" ? { type: "date" } : { type: "text" };
  return /* @__PURE__ */ r(
    "input",
    {
      "aria-label": e.title ?? e.name,
      className: Re.value,
      ...o,
      value: t == null ? "" : String(t),
      onChange: (a) => n(s === "number" && a.target.value !== "" ? Number(a.target.value) : a.target.value)
    }
  );
}
function Zm({
  properties: e,
  logicalOperator: t = "And",
  filterCaseSensitivity: n = "CaseInsensitive",
  initialRows: s,
  uniqueFilters: o = !1,
  className: a,
  viewChanged: u,
  items: l,
  children: i
}) {
  const [p, v] = H(
    () => s != null && s.length > 0 ? s.map((b, h) => ({ id: h, ...b })) : [{ id: 0, property: e[0]?.name ?? "", operator: hn[e[0]?.type ?? "string"], value: void 0 }]
  ), f = (b, h) => {
    v((_) => _.map((w) => w.id === b ? { ...w, ...h } : w));
  }, S = () => {
    const b = p[p.length - 1], h = Math.max(0, ...p.map((w) => w.id)) + 1, _ = e[0];
    v((w) => [
      ...w,
      {
        id: h,
        property: b?.property ?? _?.name ?? "",
        operator: hn[e.find((m) => m.name === (b?.property ?? _?.name))?.type ?? "string"],
        value: void 0
      }
    ]);
  }, x = (b) => {
    v((h) => h.length > 1 ? h.filter((_) => _.id !== b) : h);
  }, D = pe(() => {
    const b = ["IsNull", "IsEmpty", "IsNotNull", "IsNotEmpty"], h = [];
    for (const _ of p) {
      if (_.property === "" || (_.value == null || _.value === "") && !b.includes(_.operator)) continue;
      const m = {
        property: _.property,
        operator: _.operator,
        value: _.value
      };
      _.secondOperator != null && _.secondValue !== void 0 && (m.secondOperator = _.secondOperator, m.secondValue = _.secondValue, m.logicalOperator = _.logicalOperator ?? "And"), h.push(m);
    }
    return h;
  }, [p]), C = pe(() => l == null || D.length === 0 ? l : mr(l, { operator: t, filters: D }, { caseSensitivity: n }), [l, D, t, n]);
  be(() => {
    u != null && l != null && u(C ?? []);
  }, [C]);
  const N = (b) => e.find((h) => h.name === b) ?? { name: b, type: "string" };
  return /* @__PURE__ */ $("div", { className: [Re.filter, a].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ r("div", { className: Re.rows, role: "group", "aria-label": "Filter conditions", children: p.map((b, h) => {
      const _ = N(b.property), w = o ? [hn[_.type ?? "string"]] : pr;
      return /* @__PURE__ */ $("div", { className: Re.row, children: [
        h > 0 ? /* @__PURE__ */ r("span", { className: Re.join, "aria-hidden": "true", children: t }) : null,
        /* @__PURE__ */ r(
          kn,
          {
            "aria-label": `Condition ${h + 1} property`,
            className: Re.property,
            value: b.property,
            onChange: (m) => {
              const g = e.find((c) => c.name === m.target.value);
              f(b.id, {
                property: m.target.value,
                operator: hn[g?.type ?? "string"],
                value: void 0
              });
            },
            options: e.map((m) => ({ value: m.name, label: m.title ?? m.name }))
          }
        ),
        /* @__PURE__ */ r(
          kn,
          {
            "aria-label": `Condition ${h + 1} operator`,
            className: Re.operator,
            value: b.operator,
            onChange: (m) => f(b.id, { operator: m.target.value }),
            options: w.map((m) => ({ value: m, label: yo[m] }))
          }
        ),
        /* @__PURE__ */ r(vo, { property: _, value: b.value, onChange: (m) => f(b.id, { value: m }) }),
        /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: Re.remove,
            "aria-label": `Remove condition ${h + 1}`,
            onClick: () => x(b.id),
            children: "×"
          }
        )
      ] }, b.id);
    }) }),
    /* @__PURE__ */ $("div", { className: Re.bar, children: [
      /* @__PURE__ */ r("button", { type: "button", className: Re.add, onClick: S, children: "Add filter" }),
      i != null ? /* @__PURE__ */ r("div", { className: Re.custom, children: i }) : null,
      l != null ? /* @__PURE__ */ $("span", { className: Re.summary, "aria-live": "polite", children: [
        C?.length ?? 0,
        " of ",
        l.length
      ] }) : null
    ] })
  ] });
}
const xo = "_pager_15jh8_1", wo = "_alignLeft_15jh8_10", ko = "_alignCenter_15jh8_14", $o = "_alignRight_15jh8_18", No = "_alignJustify_15jh8_22", So = "_summary_15jh8_26", Do = "_controls_15jh8_31", zo = "_button_15jh8_37", Oo = "_active_15jh8_73", Co = "_ellipsis_15jh8_85", Mo = "_size_15jh8_91", Me = {
  pager: xo,
  alignLeft: wo,
  alignCenter: ko,
  alignRight: $o,
  alignJustify: No,
  summary: So,
  controls: Do,
  button: zo,
  active: Oo,
  ellipsis: Co,
  size: Mo
};
function Io(e, t, n, s) {
  return e.replace("{0}", String(t)).replace("{1}", String(n)).replace("{2}", String(s));
}
function Un(e, t) {
  return e.replace("{0}", String(t));
}
function jo(e, t, n) {
  if (t <= n) return Array.from({ length: t }, (l, i) => i + 1);
  const s = Math.floor(n / 2);
  let o = Math.max(1, e - s);
  const a = Math.min(t, o + n - 1);
  o = Math.max(1, a - n + 1);
  const u = [];
  for (let l = o; l <= a; l++) u.push(l);
  return o > 2 && u.unshift("ellipsis"), o > 1 && u.unshift(1), a < t - 1 && u.push("ellipsis"), a < t && u.push(t), u;
}
function Eo({
  count: e,
  pageSize: t,
  page: n,
  pageNumber: s,
  defaultPage: o = 1,
  pageSizeOptions: a,
  pageNumbersCount: u = 5,
  alwaysVisible: l = !1,
  horizontalAlign: i = "left",
  showPagingSummary: p,
  showSummary: v,
  showPageSizeSelector: f = !0,
  pagingSummaryFormat: S = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: x,
  summaryTemplate: D,
  pageSizeText: C = "Items per page",
  firstPageTitle: N = "First page",
  prevPageTitle: b = "Previous page",
  nextPageTitle: h = "Next page",
  lastPageTitle: _ = "Last page",
  pageTitleFormat: w = "Page {0}",
  pageAriaLabelFormat: m = "Page {0}",
  onPageChange: g,
  onPageSizeChange: c,
  ariaLabel: y = "Pagination",
  className: O
}) {
  const B = n ?? s ?? o, [P, z] = H(B), d = n !== void 0 || s !== void 0, k = d ? B : P, L = Math.max(1, Math.ceil(e / t)), E = Math.min(Math.max(1, k), L), T = p ?? v ?? !0, W = l || L > 1, te = jo(E, L, u), re = q(
    (V) => {
      const K = Math.min(Math.max(1, V), L);
      d || z(K);
      const j = (K - 1) * t;
      g?.({ page: K, skip: j, top: t, pageCount: L, pageSize: t });
    },
    [d, g, L, t]
  ), Z = i === "center" ? Me.alignCenter : i === "right" ? Me.alignRight : i === "justify" ? Me.alignJustify : Me.alignLeft, Q = { count: e, pageNumber: E, pageSize: t, pageCount: L }, fe = (V) => {
    const K = Array.from(V.currentTarget.querySelectorAll("button[data-pager-page]")), j = K.indexOf(document.activeElement);
    j !== -1 && (V.key === "ArrowRight" || V.key === "ArrowDown" ? (V.preventDefault(), (K[j + 1] ?? K[0])?.focus()) : V.key === "ArrowLeft" || V.key === "ArrowUp" ? (V.preventDefault(), (K[j - 1] ?? K[K.length - 1])?.focus()) : V.key === "Home" ? (V.preventDefault(), K[0]?.focus()) : V.key === "End" && (V.preventDefault(), K[K.length - 1]?.focus()));
  };
  return W ? /* @__PURE__ */ $("nav", { className: [Me.pager, Z, O].filter(Boolean).join(" "), "aria-label": y, children: [
    T && /* @__PURE__ */ r("span", { className: Me.summary, "aria-live": "polite", children: x ? x(Q) : D ? D({ count: e, pageNumber: E, pageSize: t }) : Io(S, E, L, e) }),
    /* @__PURE__ */ $("div", { className: Me.controls, role: "group", "aria-label": y, onKeyDown: fe, children: [
      /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          className: Me.button,
          disabled: E <= 1,
          onClick: () => re(1),
          "aria-label": N,
          title: N,
          children: "«"
        }
      ),
      /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          className: Me.button,
          disabled: E <= 1,
          onClick: () => re(E - 1),
          "aria-label": b,
          title: b,
          children: "‹"
        }
      ),
      te.map(
        (V, K) => V === "ellipsis" ? /* @__PURE__ */ r("span", { className: Me.ellipsis, "aria-hidden": "true", children: "…" }, `e${K}`) : /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            "data-pager-page": V,
            className: [Me.button, V === E ? Me.active : ""].filter(Boolean).join(" "),
            "aria-current": V === E ? "page" : void 0,
            "aria-label": Un(m, V),
            title: Un(w, V),
            onClick: () => re(V),
            children: V
          },
          V
        )
      ),
      /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          className: Me.button,
          disabled: E >= L,
          onClick: () => re(E + 1),
          "aria-label": h,
          title: h,
          children: "›"
        }
      ),
      /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          className: Me.button,
          disabled: E >= L,
          onClick: () => re(L),
          "aria-label": _,
          title: _,
          children: "»"
        }
      )
    ] }),
    f && a && a.length > 0 && /* @__PURE__ */ $("label", { className: Me.size, children: [
      /* @__PURE__ */ r("span", { children: C }),
      /* @__PURE__ */ r(
        "select",
        {
          value: t,
          onChange: (V) => c?.(Number(V.target.value)),
          "aria-label": C,
          children: a.map((V) => /* @__PURE__ */ r("option", { value: V, children: V }, V))
        }
      )
    ] })
  ] }) : null;
}
function jn(e) {
  const { pageNumber: t, onPageChange: n, summaryTemplate: s, showSummary: o, ...a } = e;
  return /* @__PURE__ */ r(
    Eo,
    {
      page: t,
      showPagingSummary: o,
      pagingSummaryFormat: "Page {0} of {1}",
      pageAriaLabelFormat: "{0}",
      pageTitleFormat: "{0}",
      alwaysVisible: !0,
      pagingSummaryTemplate: s ? (l) => s({ count: l.count, pageNumber: l.pageNumber, pageSize: l.pageSize }) : void 0,
      onPageChange: n ? (l) => n(l.page) : void 0,
      ...a
    }
  );
}
function To(e, t, n, s, o, a) {
  if (!t || !n) return e.map((i) => ({ type: "row", row: i }));
  const u = /* @__PURE__ */ new Map();
  e.forEach((i) => {
    const p = String(o(i, t) ?? ""), v = u.get(p);
    v ? v.push(i) : u.set(p, [i]);
  });
  const l = [];
  return u.forEach((i, p) => {
    const v = i[0], f = v != null ? o(v, t) : void 0;
    l.push({
      type: "group",
      group: { key: p, display: a(f), property: t, title: n.title ?? t, count: i.length }
    }), s.has(p) && i.forEach((S) => l.push({ type: "row", row: S }));
  }), l;
}
function mn(e, t) {
  return e.property ?? `col-${t}`;
}
function Ao(e, t) {
  const n = {};
  let s = 0;
  return e.forEach(({ key: o, column: a }) => {
    if (!a.frozen) return;
    n[o] = s === 0 ? "0px" : `${s}px`;
    const u = t[o] ?? a.width ?? "8rem";
    s += parseFloat(u);
  }), n;
}
function Lo(e, t) {
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
function Qt(e, t) {
  if (t != null)
    return $n(e, t);
}
function Xn(e, t) {
  if (t == null || t === "") return String(e ?? "");
  const n = /^N(\d+)$/i.exec(t);
  if (n && typeof e == "number") return e.toFixed(Number(n[1]));
  if (t === "d" || t === "D") {
    const s = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return s != null && !Number.isNaN(s.getTime()) ? s.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const Gn = ["Ascending", "Descending", null];
function Ro(e, t, n = {}) {
  const s = e.find((a) => a.property === t), o = Gn[(s ? Gn.indexOf(s.sortOrder) : -1) + 1] ?? null;
  return o == null ? e.filter((a) => a.property !== t) : n.multi ? [...e.filter((a) => a.property !== t), { property: t, sortOrder: o }] : [{ property: t, sortOrder: o }];
}
function Bo(e, t) {
  return oo(e, t);
}
function Po(e, t, n) {
  const s = Math.max(1, Math.ceil(e.length / n)), o = Math.min(Math.max(1, t), s), a = (o - 1) * n;
  return { items: e.slice(a, a + n), pageCount: s, pageNumber: o, total: e.length };
}
function qo(e, t, n = {}) {
  const s = [...t.filters.entries()].filter(([, l]) => l.value !== "" && l.value !== void 0).map(([l, i]) => ({
    property: l,
    operator: i.operator ?? "Contains",
    value: Lo(i.value, n.types?.[l] ?? "string")
  })), o = s.length > 0 ? mr(e, { operator: n.logicalOperator ?? "And", filters: s }, {
    logicalOperator: n.logicalOperator ?? "And",
    caseSensitivity: n.caseSensitivity ?? "CaseInsensitive"
  }) : e, a = Bo(o, t.sorts);
  return { ...Po(a, t.pageNumber, t.pageSize), sorts: t.sorts, filters: t.filters, pageSize: t.pageSize };
}
function Fo(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
const Ho = "_grid_156jh_1", Ko = "_toolbar_156jh_8", Wo = "_picker_156jh_13", Vo = "_pickerButton_156jh_17", Uo = "_pickerPanel_156jh_31", Xo = "_pickerItem_156jh_46", Go = "_groupPanel_156jh_55", Yo = "_groupPanelActive_156jh_66", Jo = "_groupPanelText_156jh_70", Zo = "_groupChip_156jh_74", Qo = "_groupRemove_156jh_85", ea = "_groupRow_156jh_94", ta = "_groupCell_156jh_98", na = "_groupToggle_156jh_103", ra = "_editRow_156jh_116", sa = "_editCell_156jh_120", oa = "_editInput_156jh_125", aa = "_commandCell_156jh_135", la = "_commandButton_156jh_141", ca = "_data_156jh_156", ia = "_table_156jh_163", da = "_header_156jh_169", ua = "_center_156jh_181", fa = "_right_156jh_185", _a = "_sortButton_156jh_189", pa = "_sortIndicator_156jh_207", ha = "_sortIndex_156jh_211", ma = "_cell_156jh_222", ga = "_clickable_156jh_236", ba = "_frozen_156jh_244", ya = "_selected_156jh_250", va = "_resizeHandle_156jh_254", xa = "_filterCell_156jh_272", wa = "_filterSelect_156jh_280", ka = "_filterInput_156jh_290", $a = "_empty_156jh_301", Na = "_loading_156jh_307", Sa = "_visuallyHidden_156jh_317", ee = {
  grid: Ho,
  toolbar: Ko,
  picker: Wo,
  pickerButton: Vo,
  pickerPanel: Uo,
  pickerItem: Xo,
  groupPanel: Go,
  groupPanelActive: Yo,
  groupPanelText: Jo,
  groupChip: Zo,
  groupRemove: Qo,
  groupRow: ea,
  groupCell: ta,
  groupToggle: na,
  editRow: ra,
  editCell: sa,
  editInput: oa,
  commandCell: aa,
  commandButton: la,
  data: ca,
  table: ia,
  header: da,
  center: ua,
  right: fa,
  sortButton: _a,
  sortIndicator: pa,
  sortIndex: ha,
  cell: ma,
  clickable: ga,
  frozen: ba,
  selected: ya,
  resizeHandle: va,
  filterCell: xa,
  filterSelect: wa,
  filterInput: ka,
  empty: $a,
  loading: Na,
  visuallyHidden: Sa
}, Da = {
  Ascending: "ascending",
  Descending: "descending"
};
function Yn(e, t) {
  return e.filterable ?? t;
}
function za(e, t) {
  return e.sortable ?? t;
}
function Oa(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dt-grid-resize]");
}
function Qm({
  columns: e,
  rows: t,
  rowKey: n,
  allowSorting: s = !1,
  allowMultiColumnSorting: o = !1,
  showSortIndex: a = !1,
  allowFiltering: u = !1,
  filterCaseSensitivity: l = "CaseInsensitive",
  logicalOperator: i = "And",
  allowPaging: p = !1,
  pageSize: v = 10,
  pageSizeOptions: f,
  pageNumbersCount: S = 5,
  pagerPosition: x = "Bottom",
  showPagingSummary: D = !0,
  showPageSizeSelector: C = !0,
  selectionMode: N = "None",
  selectedKeys: b,
  onSelectionChange: h,
  showColumnPicker: _ = !1,
  columnPickerText: w = "Columns",
  allowColumnResize: m = !1,
  allowColumnReorder: g = !1,
  allowGrouping: c = !1,
  groupPanelText: y = "Drag a column header here to group",
  groupExpanded: O = !0,
  editMode: B = "None",
  allowRowCreate: P = !1,
  onRowUpdate: z,
  onRowCreate: d,
  onRowDelete: k,
  isLoading: L = !1,
  empty: E = "No records found",
  ariaLabel: T,
  className: W,
  onRowClick: te
}) {
  const [re, Z] = H([]), [Q, fe] = H(/* @__PURE__ */ new Map()), [V, K] = H(1), [j, U] = H(v), [se, X] = H(
    () => e.map((M, I) => mn(M, I))
  ), [oe, ie] = H(
    () => new Set(e.map((M, I) => M.visible !== !1 ? mn(M, I) : "").filter(Boolean))
  ), [me, Ee] = H({}), [Se, rt] = H(!1), [le, st] = H(null), [it, Pe] = H(null), [Qe, qe] = H(null), [Xe, R] = H({}), ne = Y(null), ke = Y(null), ze = pe(() => {
    const M = /* @__PURE__ */ new Map();
    return e.forEach((I, J) => M.set(mn(I, J), I)), M;
  }, [e]), Fe = pe(
    () => se.filter((M) => oe.has(M)).map((M) => ({ key: M, column: ze.get(M) })).filter((M) => M.column != null),
    [se, oe, ze]
  ), Te = pe(
    () => Ao(Fe, me),
    [Fe, me]
  ), dt = B !== "None" || k != null || P, Oe = pe(
    () => qo(t, { sorts: re, filters: Q, pageNumber: V, pageSize: j }, {
      logicalOperator: i,
      caseSensitivity: l,
      types: Object.fromEntries(
        e.filter((M) => M.type != null && M.property != null).map((M) => [M.property, M.type])
      )
    }),
    [t, re, Q, V, j, i, l, e]
  ), yt = pe(
    () => le ? e.find((M) => M.property === le) : void 0,
    [le, e]
  ), vt = pe(
    () => it ?? new Set(O ? Oe.items.map((M) => String(Qt(M, le ?? "") ?? "")) : []),
    [it, O, Oe.items, le]
  ), Ge = pe(
    () => To(
      Oe.items,
      le ?? void 0,
      yt,
      vt,
      Qt,
      (M) => Xn(M, yt?.format)
    ),
    [Oe.items, le, yt, vt]
  ), ot = pe(
    () => le ? Fe.filter((M) => M.column.property !== le) : Fe,
    [Fe, le]
  ), F = (M) => {
    M !== "" && Z(Ro(re, M, { multi: o }));
  }, _e = (M, I) => {
    fe((J) => {
      const ae = new Map(J);
      return ae.set(M, I), ae;
    }), K(1);
  }, Ye = (M) => {
    U(M), K(1);
  }, Tt = (M) => {
    if (N === "None") return;
    const I = n(M), J = b ?? [];
    let ae;
    N === "Single" ? ae = J.length === 1 && J[0] === I ? [] : [I] : ae = J.includes(I) ? J.filter((Ce) => Ce !== I) : [...J, I], h?.(ae);
  }, St = (M) => {
    te?.(M);
  }, At = (M, I, J) => {
    ne.current = { key: M, startX: I, startWidth: J };
  }, Lt = (M) => {
    const I = ne.current;
    if (!I) return;
    const J = M - I.startX, ae = Math.max(48, I.startWidth + J);
    Ee((Ce) => ({ ...Ce, [I.key]: `${ae}px` }));
  }, Vt = () => {
    ne.current = null;
  }, Ut = (M) => {
    ke.current = M;
  }, Nn = (M) => {
    const I = ke.current;
    ke.current = null, !(!I || I === M) && X((J) => {
      const ae = [...J], Ce = ae.indexOf(I), He = ae.indexOf(M);
      return Ce < 0 || He < 0 ? J : (ae.splice(Ce, 1), ae.splice(He, 0, I), ae);
    });
  }, A = (M) => {
    ie((I) => {
      const J = new Set(I);
      return J.has(M) ? J.delete(M) : J.add(M), J;
    });
  }, G = () => {
    const M = ke.current;
    if (ke.current = null, !M || !c) return;
    const J = ze.get(M)?.property;
    J && (st(J), Pe(null));
  }, xe = () => {
    st(null), Pe(null);
  }, $e = (M) => {
    Pe((I) => {
      const J = I ?? new Set(O ? Oe.items.map((Ce) => String(Qt(Ce, le ?? "") ?? "")) : []), ae = new Set(J);
      return ae.has(M) ? ae.delete(M) : ae.add(M), ae;
    });
  }, Dt = (M) => {
    const I = {};
    e.forEach((J) => {
      J.property && (I[J.property] = Qt(M, J.property));
    }), R(I), qe(String(n(M)));
  }, zt = () => {
    const M = {};
    e.forEach((I) => {
      I.property && I.type === "boolean" && (M[I.property] = !1);
    }), R(M), qe("__new__");
  }, fn = () => {
    qe(null), R({});
  }, qn = (M) => {
    if (Qe === "__new__") {
      const I = Object.fromEntries(
        e.filter((J) => J.property).map((J) => [J.property, Xe[J.property]])
      );
      d?.(I);
    } else if (M != null) {
      const I = { ...M, ...Xe };
      z?.(M, I);
    }
    fn();
  }, Fn = p && (x === "Top" || x === "TopAndBottom"), Hn = p && (x === "Bottom" || x === "TopAndBottom"), yr = u && e.some((M) => Yn(M, u)), vr = (M, I, J) => M.render ? M.render(I, { index: 0 }) : Xn(Qt(I, M.property), M.format), xr = (M) => {
    const I = [ee.cell];
    return M.align === "center" && I.push(ee.center), M.align === "right" && I.push(ee.right), M.frozen && I.push(ee.frozen), I.join(" ");
  };
  return /* @__PURE__ */ $("div", { className: [ee.grid, W].filter(Boolean).join(" "), children: [
    Fn && /* @__PURE__ */ r(
      jn,
      {
        pageNumber: Oe.pageNumber,
        pageSize: Oe.pageSize,
        count: Oe.total,
        pageSizeOptions: f,
        pageNumbersCount: S,
        showSummary: D,
        showPageSizeSelector: C,
        ariaLabel: Hn ? "Pagination (top)" : "Pagination",
        onPageChange: K,
        onPageSizeChange: Ye
      }
    ),
    (c || P || _) && /* @__PURE__ */ $("div", { className: ee.toolbar, children: [
      c && /* @__PURE__ */ r(
        "div",
        {
          className: [ee.groupPanel, le ? ee.groupPanelActive : ""].filter(Boolean).join(" "),
          "data-dt-grid-group-panel": !0,
          onDragOver: c ? (M) => M.preventDefault() : void 0,
          onDrop: c ? G : void 0,
          children: le ? /* @__PURE__ */ $("span", { className: ee.groupChip, children: [
            yt?.title ?? le,
            ":",
            " ",
            /* @__PURE__ */ r("button", { type: "button", className: ee.groupRemove, onClick: xe, "aria-label": `Remove group by ${yt?.title ?? le}`, children: "×" })
          ] }) : /* @__PURE__ */ r("span", { className: ee.groupPanelText, children: y })
        }
      ),
      P && /* @__PURE__ */ r("button", { type: "button", className: ee.pickerButton, onClick: zt, children: "Add row" }),
      _ && /* @__PURE__ */ $("div", { className: ee.picker, children: [
        /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: ee.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": Se,
            onClick: () => rt((M) => !M),
            children: w
          }
        ),
        Se && /* @__PURE__ */ r("div", { className: ee.pickerPanel, role: "menu", "aria-label": w, children: e.map((M, I) => {
          const J = mn(M, I);
          return /* @__PURE__ */ $("label", { className: ee.pickerItem, children: [
            /* @__PURE__ */ r(
              "input",
              {
                type: "checkbox",
                checked: oe.has(J),
                onChange: () => A(J)
              }
            ),
            M.title ?? M.property
          ] }, J);
        }) })
      ] })
    ] }),
    /* @__PURE__ */ $("div", { className: ee.data, children: [
      /* @__PURE__ */ $(
        "table",
        {
          className: ee.table,
          role: "grid",
          "aria-rowcount": Oe.total + 1,
          "aria-label": T,
          "aria-busy": L || void 0,
          children: [
            /* @__PURE__ */ $("colgroup", { children: [
              ot.map(({ key: M, column: I }) => /* @__PURE__ */ r(
                "col",
                {
                  style: {
                    width: me[M] ?? I.width,
                    minWidth: I.minWidth,
                    maxWidth: I.maxWidth
                  }
                },
                M
              )),
              dt && /* @__PURE__ */ r("col", { style: { width: "8rem" } })
            ] }),
            /* @__PURE__ */ $("thead", { children: [
              /* @__PURE__ */ $("tr", { children: [
                ot.map(({ key: M, column: I }) => {
                  const J = za(I, s), ae = re.find((ge) => ge.property === I.property), Ce = ae ? re.indexOf(ae) + 1 : 0, He = I.align ?? "left";
                  return /* @__PURE__ */ $(
                    "th",
                    {
                      "aria-sort": J && ae ? Da[ae.sortOrder] : "none",
                      className: [
                        ee.header,
                        He === "center" ? ee.center : "",
                        He === "right" ? ee.right : "",
                        I.frozen ? ee.frozen : ""
                      ].filter(Boolean).join(" "),
                      style: I.frozen ? { left: Te[M] } : void 0,
                      scope: "col",
                      draggable: g || c || void 0,
                      onDragStart: g || c ? (ge) => {
                        ge.dataTransfer && (ge.dataTransfer.effectAllowed = "move"), Ut(M);
                      } : void 0,
                      onDragOver: g ? (ge) => ge.preventDefault() : void 0,
                      onDrop: g ? () => Nn(M) : void 0,
                      children: [
                        J ? /* @__PURE__ */ $(
                          "button",
                          {
                            type: "button",
                            className: ee.sortButton,
                            onClick: () => I.property != null && F(I.property),
                            "aria-label": ae ? ae.sortOrder === "Ascending" ? `Sort ${I.title ?? I.property} descending` : `Sort ${I.title ?? I.property} ascending` : `Sort ${I.title ?? I.property} ascending`,
                            children: [
                              I.title ?? I.property,
                              ae && /* @__PURE__ */ r("span", { className: ee.sortIndicator, "aria-hidden": "true", children: ae.sortOrder === "Ascending" ? "▲" : "▼" }),
                              Ce > 1 && a && /* @__PURE__ */ r("span", { className: ee.sortIndex, children: Ce })
                            ]
                          }
                        ) : I.title ?? I.property,
                        m && /* @__PURE__ */ r(
                          "span",
                          {
                            className: ee.resizeHandle,
                            "data-dt-grid-resize": !0,
                            role: "separator",
                            "aria-orientation": "vertical",
                            "aria-label": `Resize ${I.title ?? I.property}`,
                            onMouseDown: (ge) => {
                              ge.preventDefault(), ge.stopPropagation();
                              const Xt = me[M] ?? I.width, _n = Xt ? parseFloat(Xt) : 96;
                              At(M, ge.clientX, Number.isFinite(_n) ? _n : 96);
                            },
                            onMouseMove: (ge) => {
                              ne.current?.key === M && Lt(ge.clientX);
                            },
                            onMouseUp: Vt,
                            onMouseLeave: () => {
                              ne.current?.key === M && Vt();
                            }
                          }
                        )
                      ]
                    },
                    M
                  );
                }),
                dt && /* @__PURE__ */ r("th", { className: ee.header, scope: "col", children: "Actions" })
              ] }),
              yr && /* @__PURE__ */ r("tr", { children: ot.map(({ key: M, column: I }) => {
                if (!Yn(I, u)) return /* @__PURE__ */ r("td", { className: ee.filterCell }, M);
                const J = Q.get(I.property ?? "");
                return /* @__PURE__ */ $("td", { className: ee.filterCell, children: [
                  /* @__PURE__ */ $("label", { className: ee.visuallyHidden, htmlFor: `df-${I.property}`, children: [
                    "Filter ",
                    I.title ?? I.property
                  ] }),
                  /* @__PURE__ */ r(
                    "select",
                    {
                      id: `df-${I.property}`,
                      className: ee.filterSelect,
                      value: J?.operator ?? Fo(I.type ?? "string"),
                      onChange: (ae) => _e(I.property ?? "", { ...J, operator: ae.target.value }),
                      "aria-label": `${I.title ?? I.property} operator`,
                      children: pr.filter((ae) => ae !== "Custom").map((ae) => /* @__PURE__ */ r("option", { value: ae, children: ae }, ae))
                    }
                  ),
                  /* @__PURE__ */ r(
                    "input",
                    {
                      className: ee.filterInput,
                      value: J?.value ?? "",
                      onChange: (ae) => _e(I.property ?? "", { ...J, value: ae.target.value }),
                      placeholder: `Filter ${I.title ?? I.property}`,
                      "aria-label": `${I.title ?? I.property} value`
                    }
                  )
                ] }, M);
              }) })
            ] }),
            /* @__PURE__ */ $("tbody", { children: [
              Qe === "__new__" && /* @__PURE__ */ $("tr", { className: ee.editRow, children: [
                ot.map(({ key: M, column: I }) => /* @__PURE__ */ r("td", { className: ee.editCell, children: I.property && /* @__PURE__ */ r(
                  "input",
                  {
                    className: ee.editInput,
                    type: I.type === "number" ? "number" : I.type === "boolean" ? "checkbox" : "text",
                    checked: I.type === "boolean" ? !!Xe[I.property] : void 0,
                    value: I.type === "boolean" ? void 0 : String(Xe[I.property] ?? ""),
                    onChange: (J) => R((ae) => ({
                      ...ae,
                      [I.property]: I.type === "boolean" ? J.target.checked : J.target.value
                    })),
                    "aria-label": `${I.title ?? I.property} (new)`
                  }
                ) }, M)),
                dt && /* @__PURE__ */ $("td", { className: ee.editCell, children: [
                  /* @__PURE__ */ r("button", { type: "button", className: ee.commandButton, onClick: () => qn(), children: "Save" }),
                  /* @__PURE__ */ r("button", { type: "button", className: ee.commandButton, onClick: fn, children: "Cancel" })
                ] })
              ] }),
              Ge.map((M) => {
                if (M.type === "group" && M.group) {
                  const He = vt.has(M.group.key);
                  return /* @__PURE__ */ r("tr", { className: ee.groupRow, children: /* @__PURE__ */ r("td", { colSpan: ot.length + (dt ? 1 : 0), className: ee.groupCell, children: /* @__PURE__ */ $(
                    "button",
                    {
                      type: "button",
                      className: ee.groupToggle,
                      "aria-expanded": He,
                      onClick: () => $e(M.group.key),
                      children: [
                        /* @__PURE__ */ r("span", { "aria-hidden": "true", children: He ? "▼" : "▶" }),
                        M.group.title,
                        ": ",
                        M.group.display,
                        " (",
                        M.group.count,
                        ")"
                      ]
                    }
                  ) }) }, `group-${M.group.key}`);
                }
                const I = M.row, J = n(I), ae = (b ?? []).includes(J), Ce = Qe != null && Qe === String(J);
                return /* @__PURE__ */ $(
                  "tr",
                  {
                    className: [
                      te || N !== "None" ? ee.clickable : "",
                      ae ? ee.selected : "",
                      Ce ? ee.editRow : ""
                    ].filter(Boolean).join(" "),
                    "aria-selected": N !== "None" ? ae : void 0,
                    onClick: te || N !== "None" ? (He) => {
                      Oa(He.target) || (St(I), Tt(I));
                    } : void 0,
                    children: [
                      ot.map(({ key: He, column: ge }) => /* @__PURE__ */ r(
                        "td",
                        {
                          className: xr(ge),
                          style: ge.frozen ? { left: Te[He] } : void 0,
                          children: Ce && ge.property ? /* @__PURE__ */ r(
                            "input",
                            {
                              className: ee.editInput,
                              type: ge.type === "number" ? "number" : ge.type === "boolean" ? "checkbox" : "text",
                              checked: ge.type === "boolean" ? !!Xe[ge.property] : void 0,
                              value: ge.type === "boolean" ? void 0 : String(Xe[ge.property] ?? ""),
                              onChange: (Xt) => R((_n) => ({
                                ..._n,
                                [ge.property]: ge.type === "boolean" ? Xt.target.checked : Xt.target.value
                              })),
                              "aria-label": `${ge.title ?? ge.property} (edit)`
                            }
                          ) : vr(ge, I)
                        },
                        He
                      )),
                      dt && /* @__PURE__ */ r("td", { className: ee.commandCell, children: Ce ? /* @__PURE__ */ $(ue, { children: [
                        /* @__PURE__ */ r("button", { type: "button", className: ee.commandButton, onClick: () => qn(I), children: "Save" }),
                        /* @__PURE__ */ r("button", { type: "button", className: ee.commandButton, onClick: fn, children: "Cancel" })
                      ] }) : /* @__PURE__ */ $(ue, { children: [
                        B !== "None" && /* @__PURE__ */ r("button", { type: "button", className: ee.commandButton, onClick: () => Dt(I), children: "Edit" }),
                        k && /* @__PURE__ */ r("button", { type: "button", className: ee.commandButton, onClick: () => k(I), children: "Delete" })
                      ] }) })
                    ]
                  },
                  J
                );
              })
            ] })
          ]
        }
      ),
      Oe.items.length === 0 && !L && /* @__PURE__ */ r("div", { className: ee.empty, children: E }),
      L && /* @__PURE__ */ r("div", { className: ee.loading, role: "status", children: "Loading…" })
    ] }),
    Hn && /* @__PURE__ */ r(
      jn,
      {
        pageNumber: Oe.pageNumber,
        pageSize: Oe.pageSize,
        count: Oe.total,
        pageSizeOptions: f,
        pageNumbersCount: S,
        showSummary: D,
        showPageSizeSelector: C,
        ariaLabel: Fn ? "Pagination (bottom)" : "Pagination",
        onPageChange: K,
        onPageSizeChange: Ye
      }
    )
  ] });
}
const Ca = "_wrap_1ts67_1", Ma = "_grid_1ts67_7", Ia = "_stacked_1ts67_13", ja = "_item_1ts67_19", Ea = "_empty_1ts67_25", en = {
  wrap: Ca,
  grid: Ma,
  stacked: Ia,
  item: ja,
  empty: Ea
};
function eg({
  data: e,
  pageSize: t = 10,
  pageSizeOptions: n,
  wrapItems: s = !1,
  itemTemplate: o,
  emptyMessage: a = "No records found",
  emptyTemplate: u,
  loadingTemplate: l,
  isLoading: i = !1,
  showPageSizeSelector: p = !0,
  className: v,
  ariaLabel: f = "Data list"
}) {
  const [S, x] = H(1), [D, C] = H(t), N = e.length, b = Math.max(1, Math.ceil(N / D)), h = Math.min(Math.max(1, S), b), _ = pe(() => {
    const m = (h - 1) * D;
    return e.slice(m, m + D);
  }, [e, h, D]), w = s ? en.grid : en.stacked;
  return /* @__PURE__ */ $("div", { className: [en.wrap, v].filter(Boolean).join(" "), "aria-label": f, children: [
    i && l != null ? l : N === 0 ? u ?? /* @__PURE__ */ r("div", { className: en.empty, children: a }) : /* @__PURE__ */ r("div", { className: w, children: _.map((m, g) => /* @__PURE__ */ r("div", { className: en.item, children: o ? o(m, g) : String(m) }, g)) }),
    /* @__PURE__ */ r(
      jn,
      {
        pageNumber: h,
        pageSize: D,
        count: N,
        pageSizeOptions: n,
        showPageSizeSelector: p,
        onPageChange: x,
        onPageSizeChange: (m) => {
          C(m), x(1);
        }
      }
    )
  ] });
}
const Ta = "_label_11cq1_1", Aa = {
  label: Ta
}, tg = ve(
  function({ className: t, children: n, ...s }, o) {
    return /* @__PURE__ */ r("label", { ref: o, className: [Aa.label, t].filter(Boolean).join(" "), ...s, children: n });
  }
), La = "_input_6qj37_1", Ra = "_invalid_6qj37_31", Ba = "_xs_6qj37_37", Pa = "_sm_6qj37_43", qa = "_md_6qj37_49", Fa = "_lg_6qj37_55", Ha = "_xl_6qj37_61", Dn = {
  input: La,
  invalid: Ra,
  xs: Ba,
  sm: Pa,
  md: qa,
  lg: Fa,
  xl: Ha
}, ng = ve(function({ size: t = "md", invalid: n = !1, className: s, ...o }, a) {
  return /* @__PURE__ */ r(
    "input",
    {
      ref: a,
      className: [Dn.input, Dn[t], n ? Dn.invalid : null, s].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...o
    }
  );
}), Ka = "_checkbox_fkb13_1", Wa = {
  checkbox: Ka
}, rg = ve(function({ className: t, ...n }, s) {
  return /* @__PURE__ */ r(
    "input",
    {
      ref: s,
      type: "checkbox",
      className: [Wa.checkbox, t].filter(Boolean).join(" "),
      ...n
    }
  );
}), Va = {
  switch: "_switch_ew7ga_1"
}, Ua = ve(function({ className: t, ...n }, s) {
  return /* @__PURE__ */ r(
    "input",
    {
      ref: s,
      type: "checkbox",
      role: "switch",
      className: [Va.switch, t].filter(Boolean).join(" "),
      ...n
    }
  );
}), Xa = "_trigger_dbm3e_1", Ga = "_tooltip_dbm3e_7", Ya = "_top_dbm3e_34", Ja = "_right_dbm3e_40", Za = "_bottom_dbm3e_46", Qa = "_left_dbm3e_52", el = "_arrow_dbm3e_58", gn = {
  trigger: Xa,
  tooltip: Ga,
  "se-tooltip-in": "_se-tooltip-in_dbm3e_1",
  top: Ya,
  right: Ja,
  bottom: Za,
  left: Qa,
  arrow: el
};
function sg({
  content: e,
  children: t,
  placement: n = "top",
  delayMs: s = 300,
  className: o
}) {
  const a = Ne(), u = Y(null), [l, i] = H(!1), p = () => {
    u.current = window.setTimeout(() => i(!0), s);
  }, v = () => {
    u.current !== null && (window.clearTimeout(u.current), u.current = null), i(!1);
  };
  be(() => {
    if (!l) return;
    const S = (x) => {
      x.key === "Escape" && v();
    };
    return window.addEventListener("keydown", S), () => window.removeEventListener("keydown", S);
  }, [l]);
  const f = Rn(t) ? dr(
    t,
    {
      "aria-describedby": [
        t.props["aria-describedby"],
        l ? a : null
      ].filter((S) => typeof S == "string").join(" ") || void 0
    }
  ) : t;
  return /* @__PURE__ */ $(
    "span",
    {
      className: [gn.trigger, o].filter(Boolean).join(" "),
      onMouseEnter: p,
      onMouseLeave: v,
      onFocus: p,
      onBlur: v,
      children: [
        f,
        l && /* @__PURE__ */ $(
          "span",
          {
            role: "tooltip",
            id: a,
            className: [gn.tooltip, gn[n]].filter(Boolean).join(" "),
            children: [
              e,
              /* @__PURE__ */ r("span", { className: gn.arrow, "aria-hidden": "true" })
            ]
          }
        )
      ]
    }
  );
}
const tl = "_dialog_1kllc_1", nl = "_sm_1kllc_30", rl = "_md_1kllc_34", sl = "_lg_1kllc_38", ol = "_header_1kllc_42", al = "_title_1kllc_51", ll = "_description_1kllc_58", cl = "_close_1kllc_65", il = "_body_1kllc_84", dl = "_footer_1kllc_90", wt = {
  dialog: tl,
  "se-dialog-in": "_se-dialog-in_1kllc_1",
  sm: nl,
  md: rl,
  lg: sl,
  header: ol,
  title: al,
  description: ll,
  close: cl,
  body: il,
  footer: dl
};
function og({
  open: e,
  onClose: t,
  title: n,
  description: s,
  children: o,
  footer: a,
  size: u = "md",
  className: l
}) {
  const i = Y(null), p = Ne(), v = Ne();
  return be(() => {
    const f = i.current;
    f && (e && !f.open ? f.showModal() : !e && f.open && f.close());
  }, [e]), /* @__PURE__ */ $(
    "dialog",
    {
      ref: i,
      className: [wt.dialog, wt[u], l].filter(Boolean).join(" "),
      onClose: t,
      "aria-labelledby": n ? p : void 0,
      "aria-describedby": s ? v : void 0,
      children: [
        n && /* @__PURE__ */ $("header", { className: wt.header, children: [
          /* @__PURE__ */ $("div", { children: [
            /* @__PURE__ */ r("h2", { id: p, className: wt.title, children: n }),
            s && /* @__PURE__ */ r("p", { id: v, className: wt.description, children: s })
          ] }),
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: wt.close,
              onClick: t,
              "aria-label": "Close dialog",
              children: "×"
            }
          )
        ] }),
        o && /* @__PURE__ */ r("div", { className: wt.body, children: o }),
        a && /* @__PURE__ */ r("footer", { className: wt.footer, children: a })
      ]
    }
  );
}
const ul = "_viewport_15dkh_1", fl = "_topLeft_15dkh_13", _l = "_topRight_15dkh_20", pl = "_bottomLeft_15dkh_25", hl = "_toast_15dkh_30", ml = "_leaving_15dkh_61", gl = "_info_15dkh_77", bl = "_success_15dkh_82", yl = "_warning_15dkh_87", vl = "_danger_15dkh_92", xl = "_content_15dkh_97", wl = "_title_15dkh_102", kl = "_description_15dkh_125", $l = "_dismiss_15dkh_132", Nl = "_actions_15dkh_151", Sl = "_action_15dkh_151", Dl = "_cancel_15dkh_159", zl = "_progress_15dkh_195", Ke = {
  viewport: ul,
  topLeft: fl,
  topRight: _l,
  bottomLeft: pl,
  toast: hl,
  "se-toast-in": "_se-toast-in_15dkh_1",
  leaving: ml,
  "se-toast-out": "_se-toast-out_15dkh_1",
  info: gl,
  success: bl,
  warning: yl,
  danger: vl,
  content: xl,
  title: wl,
  description: kl,
  dismiss: $l,
  actions: Nl,
  action: Sl,
  cancel: Dl,
  progress: zl,
  "se-toast-progress": "_se-toast-progress_15dkh_1"
}, gr = fr(null);
function ag() {
  const e = ur(gr);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const Ol = 200, Cl = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function lg({
  children: e,
  durationMs: t = 4e3,
  position: n = "bottom-right",
  pauseOnHover: s = !0,
  className: o
}) {
  const [a, u] = H([]), [l, i] = H(!1), p = Y([]), v = Y(/* @__PURE__ */ new Map()), f = Y(!1), S = Y(0), x = (z) => {
    f.current = z, i(z);
  }, D = q((z) => {
    const d = v.current.get(z);
    d && (window.clearTimeout(d.timeoutId), d.remaining = Math.max(0, d.remaining - (Date.now() - d.startedAt)));
  }, []), C = q((z) => {
    const d = v.current.get(z);
    d && (window.clearTimeout(d.timeoutId), v.current.delete(z));
  }, []), N = q(
    (z) => {
      C(z), u((d) => {
        const k = d.filter((L) => L.id !== z);
        return p.current = k, k;
      });
    },
    [C]
  ), b = q(
    (z) => {
      const d = p.current.find((k) => k.id === z);
      !d || d.leaving || (d.onAutoClose?.(), N(z));
    },
    [N]
  ), h = q(
    (z) => {
      const d = v.current.get(z);
      !d || d.remaining <= 0 || (d.startedAt = Date.now(), d.timeoutId = window.setTimeout(() => b(z), d.remaining));
    },
    [b]
  ), _ = q(() => {
    f.current || v.current.forEach((z, d) => D(d)), x(!0);
  }, [D]), w = q(() => {
    v.current.forEach((z, d) => h(d)), x(!1);
  }, [h]);
  be(() => {
    if (!s) return;
    const z = () => {
      document.hidden ? _() : w();
    };
    return document.addEventListener("visibilitychange", z), () => document.removeEventListener("visibilitychange", z);
  }, [s, _, w]);
  const m = q(
    (z) => {
      const d = p.current.find((k) => k.id === z);
      !d || d.leaving || (d.onDismiss?.(), u((k) => {
        const L = k.map((E) => E.id === z ? { ...E, leaving: !0 } : E);
        return p.current = L, L;
      }), window.setTimeout(() => N(z), Ol));
    },
    [N]
  ), g = q(
    (z) => {
      if (z.durationMs <= 0) return;
      const d = {
        remaining: z.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      v.current.set(z.id, d), f.current || h(z.id);
    },
    [h]
  ), c = q(
    (z) => {
      const d = p.current.find((L) => L.id === z.id), k = {
        id: z.id ?? ++S.current,
        title: z.title,
        description: z.description,
        tone: z.tone ?? "info",
        durationMs: z.durationMs ?? t,
        action: z.action,
        cancel: z.cancel,
        dismissible: z.dismissible ?? !0,
        closeOnClick: z.closeOnClick ?? !1,
        showProgress: z.showProgress ?? !1,
        position: z.position ?? n,
        onDismiss: z.onDismiss,
        onAutoClose: z.onAutoClose
      };
      u((L) => {
        const E = d ? L.map((T) => T.id === k.id ? { ...k, leaving: !1 } : T) : [...L, k];
        return p.current = E, E;
      }), d && C(k.id), g(k);
    },
    [t, n, g, C]
  ), y = pe(() => ({ toast: c }), [c]), O = pe(
    () => Array.from(/* @__PURE__ */ new Set([n, ...a.map((z) => z.position)])),
    [n, a]
  ), B = s ? _ : void 0, P = s ? w : void 0;
  return /* @__PURE__ */ $(gr.Provider, { value: y, children: [
    e,
    O.map((z) => /* @__PURE__ */ r(
      "div",
      {
        className: [
          Ke.viewport,
          Ke[Cl[z]],
          o
        ].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: B,
        onMouseLeave: P,
        children: a.filter((d) => d.position === z).map((d) => /* @__PURE__ */ $(
          "div",
          {
            role: d.tone === "danger" ? "alert" : "status",
            "data-paused": l ? "true" : "false",
            "data-clickable": d.closeOnClick ? "true" : "false",
            className: [
              Ke.toast,
              Ke[d.tone],
              d.leaving ? Ke.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: d.closeOnClick ? () => m(d.id) : void 0,
            children: [
              /* @__PURE__ */ $("div", { className: Ke.content, children: [
                /* @__PURE__ */ r("div", { className: Ke.title, children: d.title }),
                d.description && /* @__PURE__ */ r("div", { className: Ke.description, children: d.description }),
                (d.action || d.cancel) && /* @__PURE__ */ $("div", { className: Ke.actions, children: [
                  d.action && /* @__PURE__ */ r(
                    "button",
                    {
                      type: "button",
                      className: Ke.action,
                      onClick: () => {
                        d.action?.onClick?.(), m(d.id);
                      },
                      children: d.action.label
                    }
                  ),
                  d.cancel && /* @__PURE__ */ r(
                    "button",
                    {
                      type: "button",
                      className: Ke.cancel,
                      onClick: () => {
                        d.cancel?.onClick?.(), m(d.id);
                      },
                      children: d.cancel.label
                    }
                  )
                ] })
              ] }),
              d.dismissible && /* @__PURE__ */ r(
                "button",
                {
                  type: "button",
                  className: Ke.dismiss,
                  onClick: () => m(d.id),
                  "aria-label": "Dismiss notification",
                  children: "×"
                }
              ),
              d.showProgress && d.durationMs > 0 && /* @__PURE__ */ r(
                "div",
                {
                  className: Ke.progress,
                  style: { animationDuration: `${d.durationMs}ms` }
                }
              )
            ]
          },
          d.id
        ))
      },
      z
    ))
  ] });
}
const Ml = "_alert_1gxt0_1", Il = "_xs_1gxt0_22", jl = "_sm_1gxt0_32", El = "_lg_1gxt0_42", Tl = "_xl_1gxt0_52", Al = "_info_1gxt0_63", Ll = "_success_1gxt0_68", Rl = "_warning_1gxt0_73", Bl = "_danger_1gxt0_78", Pl = "_soft_1gxt0_85", ql = "_outline_1gxt0_92", Fl = "_solid_1gxt0_100", Hl = "_icon_1gxt0_114", Kl = "_content_1gxt0_120", Wl = "_title_1gxt0_125", Vl = "_body_1gxt0_131", Ul = "_dismiss_1gxt0_137", ut = {
  alert: Ml,
  xs: Il,
  sm: jl,
  lg: El,
  xl: Tl,
  info: Al,
  success: Ll,
  warning: Rl,
  danger: Bl,
  soft: Pl,
  outline: ql,
  solid: Fl,
  icon: Hl,
  content: Kl,
  title: Wl,
  body: Vl,
  dismiss: Ul
};
function cg({
  tone: e = "info",
  variant: t = "soft",
  size: n = "md",
  title: s,
  icon: o,
  children: a,
  dismissible: u = !1,
  onDismiss: l,
  className: i
}) {
  const [p, v] = H(!1);
  if (p)
    return null;
  const f = () => {
    v(!0), l?.();
  };
  return /* @__PURE__ */ $(
    "div",
    {
      role: "alert",
      className: [ut.alert, ut[e], ut[t], ut[n], i].filter(Boolean).join(" "),
      children: [
        o != null && /* @__PURE__ */ r("span", { className: ut.icon, "aria-hidden": "true", children: o }),
        /* @__PURE__ */ $("div", { className: ut.content, children: [
          s && /* @__PURE__ */ r("div", { className: ut.title, children: s }),
          a && /* @__PURE__ */ r("div", { className: ut.body, children: a })
        ] }),
        u && /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: ut.dismiss,
            onClick: f,
            "aria-label": "Dismiss alert",
            children: "×"
          }
        )
      ]
    }
  );
}
const Xl = "_skeleton_f6f3j_1", Gl = "_text_f6f3j_35", Yl = "_circle_f6f3j_40", Jl = "_rect_f6f3j_44", Jn = {
  skeleton: Xl,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_f6f3j_1",
  text: Gl,
  circle: Yl,
  rect: Jl
};
function ig({
  variant: e = "text",
  width: t,
  height: n,
  className: s
}) {
  const o = {};
  return t !== void 0 && (o.width = typeof t == "number" ? `${t}px` : t), n !== void 0 && (o.height = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ r(
    "span",
    {
      "aria-hidden": "true",
      className: [Jn.skeleton, Jn[e], s].filter(Boolean).join(" "),
      style: o
    }
  );
}
const Zl = "_row_15qsh_1", Ql = "_gapXs_15qsh_7", ec = "_gapSm_15qsh_11", tc = "_gapMd_15qsh_15", nc = "_gapLg_15qsh_19", rc = "_gapXl_15qsh_23", sc = "_start_15qsh_27", oc = "_center_15qsh_31", ac = "_end_15qsh_35", lc = "_stretch_15qsh_39", cc = "_baseline_15qsh_43", ic = "_noWrap_15qsh_99", dc = "_wrapReverse_15qsh_103", uc = "_gapRowXs_15qsh_107", fc = "_gapRowSm_15qsh_111", _c = "_gapRowMd_15qsh_115", pc = "_gapRowLg_15qsh_119", hc = "_gapRowXl_15qsh_123", Rt = {
  row: Zl,
  gapXs: Ql,
  gapSm: ec,
  gapMd: tc,
  gapLg: nc,
  gapXl: rc,
  start: sc,
  center: oc,
  end: ac,
  stretch: lc,
  baseline: cc,
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
  noWrap: ic,
  wrapReverse: dc,
  gapRowXs: uc,
  gapRowSm: fc,
  gapRowMd: _c,
  gapRowLg: pc,
  gapRowXl: hc
}, mc = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
}, gc = {
  xs: "gapRowXs",
  sm: "gapRowSm",
  md: "gapRowMd",
  lg: "gapRowLg",
  xl: "gapRowXl"
};
function bc(e) {
  return typeof e != "string" ? null : mc[e] ?? null;
}
function yc(e) {
  return typeof e != "string" ? null : gc[e] ?? null;
}
function Zn(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function dg({
  gap: e,
  rowGap: t,
  align: n = "stretch",
  justify: s = "start",
  wrap: o = !0,
  className: a,
  style: u,
  ...l
}) {
  const i = bc(e), p = yc(t), v = {
    ...e != null && !i ? { gap: typeof e == "number" ? `${e}px` : e } : {},
    ...t != null && !p ? { rowGap: typeof t == "number" ? `${t}px` : t } : {},
    ...u
  };
  return /* @__PURE__ */ r(
    "div",
    {
      className: [
        Rt.row,
        Rt[n],
        Rt[`justify-${s}`],
        Zn(o) != null ? Rt[Zn(o)] : null,
        i ? Rt[i] : null,
        p ? Rt[p] : null,
        a
      ].filter(Boolean).join(" "),
      style: v,
      ...l
    }
  );
}
const vc = "_column_2ch3a_1", xc = "_Size1_2ch3a_6", wc = "_Size2_2ch3a_7", kc = "_Size3_2ch3a_8", $c = "_Size4_2ch3a_9", Nc = "_Size5_2ch3a_10", Sc = "_Size6_2ch3a_11", Dc = "_Size7_2ch3a_12", zc = "_Size8_2ch3a_13", Oc = "_Size9_2ch3a_14", Cc = "_Size10_2ch3a_15", Mc = "_Size11_2ch3a_16", Ic = "_Size12_2ch3a_17", jc = "_Offset1_2ch3a_18", Ec = "_Offset2_2ch3a_19", Tc = "_Offset3_2ch3a_20", Ac = "_Offset4_2ch3a_21", Lc = "_Offset5_2ch3a_22", Rc = "_Offset6_2ch3a_23", Bc = "_Offset7_2ch3a_24", Pc = "_Offset8_2ch3a_25", qc = "_Offset9_2ch3a_26", Fc = "_Offset10_2ch3a_27", Hc = "_Offset11_2ch3a_28", Kc = "_smSize1_2ch3a_31", Wc = "_smSize2_2ch3a_32", Vc = "_smSize3_2ch3a_33", Uc = "_smSize4_2ch3a_34", Xc = "_smSize5_2ch3a_35", Gc = "_smSize6_2ch3a_36", Yc = "_smSize7_2ch3a_37", Jc = "_smSize8_2ch3a_38", Zc = "_smSize9_2ch3a_39", Qc = "_smSize10_2ch3a_40", ei = "_smSize11_2ch3a_41", ti = "_smSize12_2ch3a_42", ni = "_smOffset1_2ch3a_43", ri = "_smOffset2_2ch3a_44", si = "_smOffset3_2ch3a_45", oi = "_smOffset4_2ch3a_46", ai = "_smOffset5_2ch3a_47", li = "_smOffset6_2ch3a_48", ci = "_smOffset7_2ch3a_49", ii = "_smOffset8_2ch3a_50", di = "_smOffset9_2ch3a_51", ui = "_smOffset10_2ch3a_52", fi = "_smOffset11_2ch3a_53", _i = "_mdSize1_2ch3a_57", pi = "_mdSize2_2ch3a_58", hi = "_mdSize3_2ch3a_59", mi = "_mdSize4_2ch3a_60", gi = "_mdSize5_2ch3a_61", bi = "_mdSize6_2ch3a_62", yi = "_mdSize7_2ch3a_63", vi = "_mdSize8_2ch3a_64", xi = "_mdSize9_2ch3a_65", wi = "_mdSize10_2ch3a_66", ki = "_mdSize11_2ch3a_67", $i = "_mdSize12_2ch3a_68", Ni = "_mdOffset1_2ch3a_69", Si = "_mdOffset2_2ch3a_70", Di = "_mdOffset3_2ch3a_71", zi = "_mdOffset4_2ch3a_72", Oi = "_mdOffset5_2ch3a_73", Ci = "_mdOffset6_2ch3a_74", Mi = "_mdOffset7_2ch3a_75", Ii = "_mdOffset8_2ch3a_76", ji = "_mdOffset9_2ch3a_77", Ei = "_mdOffset10_2ch3a_78", Ti = "_mdOffset11_2ch3a_79", Ai = "_lgSize1_2ch3a_83", Li = "_lgSize2_2ch3a_84", Ri = "_lgSize3_2ch3a_85", Bi = "_lgSize4_2ch3a_86", Pi = "_lgSize5_2ch3a_87", qi = "_lgSize6_2ch3a_88", Fi = "_lgSize7_2ch3a_89", Hi = "_lgSize8_2ch3a_90", Ki = "_lgSize9_2ch3a_91", Wi = "_lgSize10_2ch3a_92", Vi = "_lgSize11_2ch3a_93", Ui = "_lgSize12_2ch3a_94", Xi = "_lgOffset1_2ch3a_95", Gi = "_lgOffset2_2ch3a_96", Yi = "_lgOffset3_2ch3a_97", Ji = "_lgOffset4_2ch3a_98", Zi = "_lgOffset5_2ch3a_99", Qi = "_lgOffset6_2ch3a_100", ed = "_lgOffset7_2ch3a_101", td = "_lgOffset8_2ch3a_102", nd = "_lgOffset9_2ch3a_103", rd = "_lgOffset10_2ch3a_104", sd = "_lgOffset11_2ch3a_105", od = "_xlSize1_2ch3a_109", ad = "_xlSize2_2ch3a_110", ld = "_xlSize3_2ch3a_111", cd = "_xlSize4_2ch3a_112", id = "_xlSize5_2ch3a_113", dd = "_xlSize6_2ch3a_114", ud = "_xlSize7_2ch3a_115", fd = "_xlSize8_2ch3a_116", _d = "_xlSize9_2ch3a_117", pd = "_xlSize10_2ch3a_118", hd = "_xlSize11_2ch3a_119", md = "_xlSize12_2ch3a_120", gd = "_xlOffset1_2ch3a_121", bd = "_xlOffset2_2ch3a_122", yd = "_xlOffset3_2ch3a_123", vd = "_xlOffset4_2ch3a_124", xd = "_xlOffset5_2ch3a_125", wd = "_xlOffset6_2ch3a_126", kd = "_xlOffset7_2ch3a_127", $d = "_xlOffset8_2ch3a_128", Nd = "_xlOffset9_2ch3a_129", Sd = "_xlOffset10_2ch3a_130", Dd = "_xlOffset11_2ch3a_131", zd = "_xxlSize1_2ch3a_136", Od = "_xxlSize2_2ch3a_137", Cd = "_xxlSize3_2ch3a_138", Md = "_xxlSize4_2ch3a_139", Id = "_xxlSize5_2ch3a_140", jd = "_xxlSize6_2ch3a_141", Ed = "_xxlSize7_2ch3a_142", Td = "_xxlSize8_2ch3a_143", Ad = "_xxlSize9_2ch3a_144", Ld = "_xxlSize10_2ch3a_145", Rd = "_xxlSize11_2ch3a_146", Bd = "_xxlSize12_2ch3a_147", Pd = "_xxlOffset1_2ch3a_148", qd = "_xxlOffset2_2ch3a_149", Fd = "_xxlOffset3_2ch3a_150", Hd = "_xxlOffset4_2ch3a_151", Kd = "_xxlOffset5_2ch3a_152", Wd = "_xxlOffset6_2ch3a_153", Vd = "_xxlOffset7_2ch3a_154", Ud = "_xxlOffset8_2ch3a_155", Xd = "_xxlOffset9_2ch3a_156", Gd = "_xxlOffset10_2ch3a_157", Yd = "_xxlOffset11_2ch3a_158", Jd = "_xxlOrderFirst_2ch3a_159", Zd = "_xxlOrderLast_2ch3a_160", Qd = "_orderFirst_2ch3a_163", eu = "_orderLast_2ch3a_164", tu = "_smOrderFirst_2ch3a_167", nu = "_smOrderLast_2ch3a_168", ru = "_mdOrderFirst_2ch3a_172", su = "_mdOrderLast_2ch3a_173", ou = "_lgOrderFirst_2ch3a_177", au = "_lgOrderLast_2ch3a_178", lu = "_xlOrderFirst_2ch3a_182", cu = "_xlOrderLast_2ch3a_183", tn = {
  column: vc,
  Size1: xc,
  Size2: wc,
  Size3: kc,
  Size4: $c,
  Size5: Nc,
  Size6: Sc,
  Size7: Dc,
  Size8: zc,
  Size9: Oc,
  Size10: Cc,
  Size11: Mc,
  Size12: Ic,
  Offset1: jc,
  Offset2: Ec,
  Offset3: Tc,
  Offset4: Ac,
  Offset5: Lc,
  Offset6: Rc,
  Offset7: Bc,
  Offset8: Pc,
  Offset9: qc,
  Offset10: Fc,
  Offset11: Hc,
  smSize1: Kc,
  smSize2: Wc,
  smSize3: Vc,
  smSize4: Uc,
  smSize5: Xc,
  smSize6: Gc,
  smSize7: Yc,
  smSize8: Jc,
  smSize9: Zc,
  smSize10: Qc,
  smSize11: ei,
  smSize12: ti,
  smOffset1: ni,
  smOffset2: ri,
  smOffset3: si,
  smOffset4: oi,
  smOffset5: ai,
  smOffset6: li,
  smOffset7: ci,
  smOffset8: ii,
  smOffset9: di,
  smOffset10: ui,
  smOffset11: fi,
  mdSize1: _i,
  mdSize2: pi,
  mdSize3: hi,
  mdSize4: mi,
  mdSize5: gi,
  mdSize6: bi,
  mdSize7: yi,
  mdSize8: vi,
  mdSize9: xi,
  mdSize10: wi,
  mdSize11: ki,
  mdSize12: $i,
  mdOffset1: Ni,
  mdOffset2: Si,
  mdOffset3: Di,
  mdOffset4: zi,
  mdOffset5: Oi,
  mdOffset6: Ci,
  mdOffset7: Mi,
  mdOffset8: Ii,
  mdOffset9: ji,
  mdOffset10: Ei,
  mdOffset11: Ti,
  lgSize1: Ai,
  lgSize2: Li,
  lgSize3: Ri,
  lgSize4: Bi,
  lgSize5: Pi,
  lgSize6: qi,
  lgSize7: Fi,
  lgSize8: Hi,
  lgSize9: Ki,
  lgSize10: Wi,
  lgSize11: Vi,
  lgSize12: Ui,
  lgOffset1: Xi,
  lgOffset2: Gi,
  lgOffset3: Yi,
  lgOffset4: Ji,
  lgOffset5: Zi,
  lgOffset6: Qi,
  lgOffset7: ed,
  lgOffset8: td,
  lgOffset9: nd,
  lgOffset10: rd,
  lgOffset11: sd,
  xlSize1: od,
  xlSize2: ad,
  xlSize3: ld,
  xlSize4: cd,
  xlSize5: id,
  xlSize6: dd,
  xlSize7: ud,
  xlSize8: fd,
  xlSize9: _d,
  xlSize10: pd,
  xlSize11: hd,
  xlSize12: md,
  xlOffset1: gd,
  xlOffset2: bd,
  xlOffset3: yd,
  xlOffset4: vd,
  xlOffset5: xd,
  xlOffset6: wd,
  xlOffset7: kd,
  xlOffset8: $d,
  xlOffset9: Nd,
  xlOffset10: Sd,
  xlOffset11: Dd,
  xxlSize1: zd,
  xxlSize2: Od,
  xxlSize3: Cd,
  xxlSize4: Md,
  xxlSize5: Id,
  xxlSize6: jd,
  xxlSize7: Ed,
  xxlSize8: Td,
  xxlSize9: Ad,
  xxlSize10: Ld,
  xxlSize11: Rd,
  xxlSize12: Bd,
  xxlOffset1: Pd,
  xxlOffset2: qd,
  xxlOffset3: Fd,
  xxlOffset4: Hd,
  xxlOffset5: Kd,
  xxlOffset6: Wd,
  xxlOffset7: Vd,
  xxlOffset8: Ud,
  xxlOffset9: Xd,
  xxlOffset10: Gd,
  xxlOffset11: Yd,
  xxlOrderFirst: Jd,
  xxlOrderLast: Zd,
  orderFirst: Qd,
  orderLast: eu,
  smOrderFirst: tu,
  smOrderLast: nu,
  mdOrderFirst: ru,
  mdOrderLast: su,
  lgOrderFirst: ou,
  lgOrderLast: au,
  xlOrderFirst: lu,
  xlOrderLast: cu
}, iu = [
  ["", "size", "offset", "order"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xxl", "sizeXxl", "offsetXxl", "orderXxl"]
], du = {
  first: "orderFirst",
  last: "orderLast"
};
function uu(e) {
  return typeof e == "number" ? { order: e } : {};
}
function ug({ className: e, style: t, ...n }) {
  const s = [tn.column], o = { ...t };
  for (const [y, O, B, P] of iu) {
    const z = n[O], d = n[B], k = n[P];
    if (z != null && s.push(tn[`${y}Size${z}`]), d != null && d > 0 && s.push(tn[`${y}Offset${d}`]), k === "first" || k === "last") {
      const L = `${y}${du[k]}`;
      tn[L] && s.push(tn[L]);
    } else k != null && Object.assign(o, uu(k));
  }
  const {
    size: a,
    offset: u,
    sizeSm: l,
    offsetSm: i,
    sizeMd: p,
    offsetMd: v,
    sizeLg: f,
    offsetLg: S,
    sizeXl: x,
    offsetXl: D,
    sizeXxl: C,
    offsetXxl: N,
    order: b,
    orderSm: h,
    orderMd: _,
    orderLg: w,
    orderXl: m,
    orderXxl: g,
    ...c
  } = n;
  return /* @__PURE__ */ r("div", { className: [...s, e].filter(Boolean).join(" "), style: o, ...c });
}
const fu = "_stack_afbz7_1", _u = "_gapXs_afbz7_29", pu = "_gapSm_afbz7_33", hu = "_gapMd_afbz7_37", mu = "_gapLg_afbz7_41", gu = "_gapXl_afbz7_45", Bt = {
  stack: fu,
  "dir-row": "_dir-row_afbz7_5",
  "dir-row-reverse": "_dir-row-reverse_afbz7_9",
  "dir-column": "_dir-column_afbz7_13",
  "dir-column-reverse": "_dir-column-reverse_afbz7_17",
  "wrap-nowrap": "_wrap-nowrap_afbz7_21",
  "wrap-wrap-reverse": "_wrap-wrap-reverse_afbz7_25",
  gapXs: _u,
  gapSm: pu,
  gapMd: hu,
  gapLg: mu,
  gapXl: gu,
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
}, bu = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function yu(e) {
  return typeof e != "string" ? null : bu[e] ?? null;
}
function Qn(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function fg({
  orientation: e = "vertical",
  reverse: t = !1,
  wrap: n = !0,
  gap: s = "sm",
  align: o,
  justify: a,
  className: u,
  style: l,
  ...i
}) {
  const p = yu(s), v = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", f = {
    ...s != null && !p ? { gap: typeof s == "number" ? `${s}px` : s } : {},
    ...l
  };
  return /* @__PURE__ */ r(
    "div",
    {
      className: [
        Bt.stack,
        Bt[`dir-${v}`],
        Qn(n) !== "wrap" ? Bt[`wrap-${Qn(n)}`] : null,
        o != null ? Bt[`align-${o}`] : null,
        a != null ? Bt[`justify-${a}`] : null,
        p ? Bt[p] : null,
        u
      ].filter(Boolean).join(" "),
      style: f,
      ...i
    }
  );
}
const vu = "_layout_1pcye_1", xu = "_row_1pcye_7", er = {
  layout: vu,
  row: xu
}, wu = "_footer_khrs9_1", ku = {
  footer: wu
};
function $u({ className: e, children: t, ...n }) {
  return /* @__PURE__ */ r("footer", { className: [ku.footer, e].filter(Boolean).join(" "), ...n, children: t });
}
const Nu = "_header_6x0qv_1", Su = {
  header: Nu
};
function Du({ className: e, children: t, ...n }) {
  return /* @__PURE__ */ r("header", { className: [Su.header, e].filter(Boolean).join(" "), ...n, children: t });
}
const zu = "_sidebar_1tgxt_1", Ou = "_left_1tgxt_9", Cu = "_right_1tgxt_13", Mu = "_collapsed_1tgxt_17", Iu = "_responsive_1tgxt_25", ju = "_overlay_1tgxt_33", Eu = "_mask_1tgxt_53", Ct = {
  sidebar: zu,
  left: Ou,
  right: Cu,
  collapsed: Mu,
  responsive: Iu,
  overlay: ju,
  mask: Eu
};
function Tu({
  position: e = "left",
  expanded: t = !0,
  responsive: n = !1,
  overlay: s = !1,
  onClose: o,
  className: a,
  children: u,
  ...l
}) {
  return be(() => {
    if (!s || !t || o == null) return;
    const i = (p) => {
      p.key === "Escape" && o();
    };
    return document.addEventListener("keydown", i), () => document.removeEventListener("keydown", i);
  }, [s, t, o]), /* @__PURE__ */ $(ue, { children: [
    s && t ? /* @__PURE__ */ r("div", { className: `${Ct.mask} se-layout-mask`, "aria-hidden": "true", onClick: o }) : null,
    /* @__PURE__ */ r(
      "aside",
      {
        className: [
          Ct.sidebar,
          e === "right" ? Ct.right : Ct.left,
          t ? null : Ct.collapsed,
          n ? Ct.responsive : null,
          s ? [Ct.overlay, "se-sidebar--overlay"] : null,
          a
        ].flat().filter(Boolean).join(" "),
        ...l,
        children: u
      }
    )
  ] });
}
function _g({ className: e, children: t, ...n }) {
  const s = [], o = [], a = [], u = [], l = [];
  return wr.forEach(t, (i) => {
    if (!Rn(i)) {
      a.push(i);
      return;
    }
    i.type === Du ? s.push(i) : i.type === $u ? o.push(i) : i.type === Tu ? (i.props.position === "right" ? l : u).push(i) : a.push(i);
  }), /* @__PURE__ */ $("div", { className: [er.layout, e].filter(Boolean).join(" "), ...n, children: [
    s,
    /* @__PURE__ */ $("div", { className: er.row, children: [
      u,
      a,
      l
    ] }),
    o
  ] });
}
const Au = "_body_1i4wl_1", Lu = {
  body: Au
};
function pg({ as: e = "main", className: t, children: n, ...s }) {
  return /* @__PURE__ */ r(e, { className: [Lu.body, t].filter(Boolean).join(" "), ...s, children: n });
}
const Ru = "_track_1eazj_1", Bu = "_bar_1eazj_31", Pu = "_primary_1eazj_39", qu = "_success_1eazj_43", Fu = "_warning_1eazj_47", Hu = "_danger_1eazj_51", Ku = "_indeterminate_1eazj_55", Wu = "_circular_1eazj_69", Vu = "_fill_1eazj_109", et = {
  track: Ru,
  "linear-xs": "_linear-xs_1eazj_11",
  "linear-sm": "_linear-sm_1eazj_15",
  "linear-md": "_linear-md_1eazj_19",
  "linear-lg": "_linear-lg_1eazj_23",
  "linear-xl": "_linear-xl_1eazj_27",
  bar: Bu,
  primary: Pu,
  success: qu,
  warning: Fu,
  danger: Hu,
  indeterminate: Ku,
  "se-progress-slide": "_se-progress-slide_1eazj_1",
  circular: Wu,
  "circular-xs": "_circular-xs_1eazj_75",
  "circular-sm": "_circular-sm_1eazj_80",
  "circular-md": "_circular-md_1eazj_85",
  "circular-lg": "_circular-lg_1eazj_90",
  "circular-xl": "_circular-xl_1eazj_95",
  fill: Vu,
  "se-progress-spin": "_se-progress-spin_1eazj_1"
};
function hg({
  value: e = 0,
  max: t = 100,
  tone: n = "primary",
  indeterminate: s = !1,
  variant: o = "linear",
  size: a = "md",
  className: u,
  ...l
}) {
  const i = t > 0 ? Math.min(t, Math.max(0, e)) : 0, p = t > 0 ? i / t * 100 : 0;
  if (o === "circular") {
    const v = typeof a == "string", f = 2, S = 10.5, x = 2 * Math.PI * S, D = x * (s ? 0.75 : 1), C = s ? 0 : x * (1 - p / 100);
    return /* @__PURE__ */ $(
      "svg",
      {
        width: v ? void 0 : a,
        height: v ? void 0 : a,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": l["aria-label"],
        "aria-labelledby": l["aria-labelledby"],
        "aria-valuenow": s ? void 0 : Math.round(i),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        id: l.id,
        style: l.style,
        className: [
          et.circular,
          et[n],
          v ? et[`circular-${a}`] : null,
          s ? et.indeterminate : null,
          u
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ r("circle", { className: et.track, cx: 12, cy: 12, r: S, strokeWidth: f }),
          /* @__PURE__ */ r(
            "circle",
            {
              className: et.fill,
              cx: 12,
              cy: 12,
              r: S,
              strokeWidth: f,
              strokeDasharray: `${D} ${x}`,
              strokeDashoffset: C
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ r(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": s ? void 0 : Math.round(i),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        et.track,
        et[n],
        typeof a == "string" ? et[`linear-${a}`] : null,
        s ? et.indeterminate : null,
        u
      ].filter(Boolean).join(" "),
      ...l,
      children: /* @__PURE__ */ r(
        "div",
        {
          className: et.bar,
          style: s ? void 0 : { width: `${p}%` }
        }
      )
    }
  );
}
const Uu = "_wrapper_1mukg_1", Xu = {
  wrapper: Uu
};
function mg({
  defaultTheme: e = "light",
  onChange: t,
  label: n = "Dark mode",
  className: s
}) {
  const [o, a] = H(() => (typeof document < "u" ? document.documentElement.dataset.theme : void 0) === "dark" ? !0 : e === "dark");
  be(() => {
    document.documentElement.dataset.theme = o ? "dark" : "light";
  }, []);
  const u = (l) => {
    const i = l.target.checked;
    a(i), document.documentElement.dataset.theme = i ? "dark" : "light", t?.(i ? "dark" : "light");
  };
  return /* @__PURE__ */ $("label", { className: [Xu.wrapper, s].filter(Boolean).join(" "), children: [
    n,
    /* @__PURE__ */ r(Ua, { checked: o, onChange: u })
  ] });
}
const Gu = "_avatar_101wb_1", Yu = "_xs_101wb_12", Ju = "_sm_101wb_18", Zu = "_md_101wb_24", Qu = "_lg_101wb_30", ef = "_xl_101wb_36", tf = "_initials_101wb_42", nf = "_image_101wb_57", rf = "_status_101wb_64", sf = "_online_101wb_84", of = "_offline_101wb_88", af = "_away_101wb_92", Pt = {
  avatar: Gu,
  xs: Yu,
  sm: Ju,
  md: Zu,
  lg: Qu,
  xl: ef,
  initials: tf,
  image: nf,
  status: rf,
  online: sf,
  offline: of,
  away: af
}, wn = [
  "var(--dt-color-palette-0)",
  "var(--dt-color-palette-1)",
  "var(--dt-color-palette-2)",
  "var(--dt-color-palette-3)",
  "var(--dt-color-palette-4)",
  "var(--dt-color-palette-5)"
];
function lf(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function cf(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = t * 31 + e.charCodeAt(n) >>> 0;
  return wn[t % wn.length] ?? wn[0];
}
function gg({
  name: e,
  src: t,
  alt: n,
  size: s = "md",
  status: o,
  className: a
}) {
  const u = pe(() => e ? lf(e) : "?", [e]), l = pe(() => e ? cf(e) : wn[0], [e]), i = t ? /* @__PURE__ */ r("img", { className: Pt.image, src: t, alt: n ?? e ?? "" }) : /* @__PURE__ */ r("span", { "aria-hidden": "true", className: Pt.initials, style: { background: l }, children: u });
  return /* @__PURE__ */ $(
    "span",
    {
      className: [
        Pt.avatar,
        Pt[s],
        o ? Pt[o] : null,
        a
      ].filter(Boolean).join(" "),
      role: "img",
      "aria-label": n ?? e ?? "avatar",
      children: [
        i,
        o && /* @__PURE__ */ r("span", { className: Pt.status, "aria-hidden": "true" })
      ]
    }
  );
}
const df = "_root_9j3lx_1", uf = "_left_9j3lx_6", ff = "_right_9j3lx_7", _f = "_panel_9j3lx_12", pf = "_bottom_9j3lx_20", hf = "_tabList_9j3lx_24", mf = "_underline_9j3lx_53", gf = "_pills_9j3lx_72", bf = "_tab_9j3lx_24", yf = "_active_9j3lx_113", vf = "_disabled_9j3lx_139", ft = {
  root: df,
  left: uf,
  right: ff,
  panel: _f,
  bottom: pf,
  tabList: hf,
  underline: mf,
  pills: gf,
  tab: bf,
  active: yf,
  disabled: vf
};
function bg({
  items: e,
  value: t,
  defaultValue: n,
  onChange: s,
  variant: o = "underline",
  position: a = "top",
  className: u
}) {
  const l = Ne(), i = Y(null), [p, v] = H(n ?? e[0]?.key ?? ""), f = t ?? p, S = a === "left" || a === "right", x = (N) => {
    v(N), s?.(N);
  }, D = (N) => {
    const b = e.filter((w) => !w.disabled), h = b.findIndex((w) => w.key === f);
    let _ = -1;
    N.key === "ArrowRight" || S && N.key === "ArrowDown" ? _ = (h + 1) % b.length : N.key === "ArrowLeft" || S && N.key === "ArrowUp" ? _ = (h - 1 + b.length) % b.length : N.key === "Home" ? _ = 0 : N.key === "End" && (_ = b.length - 1), _ >= 0 && (N.preventDefault(), i.current?.querySelector(
      `[data-tab-key="${CSS.escape(b[_]?.key ?? "")}"]`
    )?.focus(), x(b[_]?.key ?? ""));
  }, C = e.find((N) => N.key === f);
  return /* @__PURE__ */ $("div", { className: [ft.root, ft[a], u].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ r(
      "div",
      {
        ref: i,
        role: "tablist",
        className: [ft.tabList, ft[o], ft[a]].filter(Boolean).join(" "),
        onKeyDown: D,
        children: e.map((N) => {
          const b = N.key === f;
          return /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              role: "tab",
              id: `${l}-tab-${N.key}`,
              "data-tab-key": N.key,
              "aria-selected": b,
              "aria-controls": `${l}-panel-${N.key}`,
              tabIndex: b ? 0 : -1,
              disabled: N.disabled,
              className: [
                ft.tab,
                b ? ft.active : null,
                N.disabled ? ft.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => x(N.key),
              children: N.label
            },
            N.key
          );
        })
      }
    ),
    C && /* @__PURE__ */ r(
      "div",
      {
        role: "tabpanel",
        id: `${l}-panel-${C.key}`,
        "aria-labelledby": `${l}-tab-${C.key}`,
        className: ft.panel,
        children: C.content
      }
    )
  ] });
}
const xf = "_root_ejeux_1", wf = "_item_ejeux_9", kf = "_heading_ejeux_13", $f = "_trigger_ejeux_17", Nf = "_disabled_ejeux_34", Sf = "_title_ejeux_48", Df = "_chevron_ejeux_52", zf = "_open_ejeux_59", Of = "_content_ejeux_63", _t = {
  root: xf,
  item: wf,
  heading: kf,
  trigger: $f,
  disabled: Nf,
  title: Sf,
  chevron: Df,
  open: zf,
  content: Of
};
function yg({
  items: e,
  multiple: t = !1,
  value: n,
  defaultValue: s,
  onChange: o,
  className: a
}) {
  const u = Ne(), [l, i] = H(s ?? []), p = n ?? l, v = (f) => {
    const S = p.includes(f) ? p.filter((x) => x !== f) : t ? [...p, f] : [f];
    i(S), o?.(S);
  };
  return /* @__PURE__ */ r("div", { className: [_t.root, a].filter(Boolean).join(" "), children: e.map((f) => {
    const S = p.includes(f.key), x = `${u}-panel-${f.key}`, D = `${u}-trigger-${f.key}`;
    return /* @__PURE__ */ $("div", { className: _t.item, children: [
      /* @__PURE__ */ r("h3", { className: _t.heading, children: /* @__PURE__ */ $(
        "button",
        {
          type: "button",
          id: D,
          "aria-expanded": S,
          "aria-controls": x,
          disabled: f.disabled,
          className: [
            _t.trigger,
            f.disabled ? _t.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => v(f.key),
          children: [
            /* @__PURE__ */ r("span", { className: _t.title, children: f.title }),
            /* @__PURE__ */ r("span", { className: [_t.chevron, S ? _t.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" })
          ]
        }
      ) }),
      /* @__PURE__ */ r(
        "div",
        {
          id: x,
          role: "region",
          "aria-labelledby": D,
          hidden: !S,
          className: _t.content,
          children: f.content
        }
      )
    ] }, f.key);
  }) });
}
const Cf = "_textarea_1qm9v_1", Mf = "_xs_1qm9v_25", If = "_sm_1qm9v_30", jf = "_md_1qm9v_35", Ef = "_lg_1qm9v_40", Tf = "_xl_1qm9v_45", zn = {
  textarea: Cf,
  xs: Mf,
  sm: If,
  md: jf,
  lg: Ef,
  xl: Tf,
  "resize-none": "_resize-none_1qm9v_50",
  "resize-vertical": "_resize-vertical_1qm9v_54",
  "resize-horizontal": "_resize-horizontal_1qm9v_58",
  "resize-both": "_resize-both_1qm9v_62"
}, vg = ve(function({ size: t = "md", resize: n = "none", className: s, ...o }, a) {
  return /* @__PURE__ */ r(
    "textarea",
    {
      ref: a,
      className: [
        zn.textarea,
        zn[t],
        zn[`resize-${n}`],
        s
      ].filter(Boolean).join(" "),
      ...o
    }
  );
}), Af = "_typography_1n43h_1", Lf = "_caption_1n43h_45", Rf = "_overline_1n43h_51", tr = {
  typography: Af,
  "display-1": "_display-1_1n43h_5",
  "display-2": "_display-2_1n43h_10",
  "display-3": "_display-3_1n43h_15",
  "display-4": "_display-4_1n43h_20",
  "display-5": "_display-5_1n43h_25",
  "display-6": "_display-6_1n43h_30",
  "body-1": "_body-1_1n43h_35",
  "body-2": "_body-2_1n43h_40",
  caption: Lf,
  overline: Rf
}, Bf = {
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
}, xg = ve(function({ variant: t = "body-1", as: n, className: s, children: o, ...a }, u) {
  const l = n ?? Bf[t];
  return /* @__PURE__ */ r(
    l,
    {
      ref: u,
      className: [tr.typography, tr[t], s].filter(Boolean).join(" "),
      ...a,
      children: o
    }
  );
}), Pf = "_root_dvw01_1", qf = "_trigger_dvw01_9", Ff = "_invalid_dvw01_40", Hf = "_placeholder_dvw01_46", Kf = "_label_dvw01_53", Wf = "_chevron_dvw01_59", Vf = "_chevronOpen_dvw01_69", Uf = "_menu_dvw01_73", Xf = "_option_dvw01_88", Gf = "_disabled_dvw01_99", Yf = "_active_dvw01_103", Jf = "_selected_dvw01_104", Zf = "_header_dvw01_114", Qf = "_xs_dvw01_121", e_ = "_sm_dvw01_127", t_ = "_md_dvw01_133", n_ = "_lg_dvw01_139", r_ = "_xl_dvw01_145", Ie = {
  root: Pf,
  trigger: qf,
  invalid: Ff,
  placeholder: Hf,
  label: Kf,
  chevron: Wf,
  chevronOpen: Vf,
  menu: Uf,
  option: Xf,
  disabled: Gf,
  active: Yf,
  selected: Jf,
  header: Zf,
  xs: Qf,
  sm: e_,
  md: t_,
  lg: n_,
  xl: r_
}, s_ = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function wg({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: s,
  placeholder: o = "Select…",
  size: a = "md",
  invalid: u = !1,
  disabled: l = !1,
  className: i,
  ...p
}) {
  const v = Ne(), f = `${v}-listbox`, S = Y(null), x = Y(null), [D, C] = H(n), [N, b] = H(!1), h = t ?? D, _ = e.map((d, k) => d.label === "" || d.disabled ? -1 : k).filter((d) => d >= 0), w = e.findIndex((d) => d.value === h), [m, g] = H(
    () => _.includes(0) ? 0 : _[0] ?? -1
  ), c = q(() => {
    if (l) return;
    const d = w >= 0 && _.includes(w) ? w : _[0];
    g(d ?? -1), b(!0);
  }, [l, w, _]), y = q(() => {
    b(!1), x.current?.focus();
  }, []);
  be(() => {
    if (!N) return;
    const d = (k) => {
      S.current && !S.current.contains(k.target) && b(!1);
    };
    return document.addEventListener("mousedown", d), () => document.removeEventListener("mousedown", d);
  }, [N]);
  const O = (d) => {
    C(d), s?.(d), b(!1), x.current?.focus();
  }, B = (d) => {
    if (_.length === 0) return;
    const k = _.includes(m) ? _.indexOf(m) : 0, L = _[(k + d + _.length) % _.length];
    L != null && g(L);
  }, P = (d) => {
    if (!N) {
      d.key === "ArrowDown" && (d.preventDefault(), c());
      return;
    }
    switch (d.key) {
      case "ArrowDown":
        d.preventDefault(), B(1);
        break;
      case "ArrowUp":
        d.preventDefault(), B(-1);
        break;
      case "Home":
        d.preventDefault(), _[0] != null && g(_[0]);
        break;
      case "End":
        d.preventDefault(), _[_.length - 1] != null && g(_[_.length - 1]);
        break;
      case "Enter":
      case " ":
        d.preventDefault(), m >= 0 && e[m] && _.includes(m) && O(e[m]?.value ?? "");
        break;
      case "Escape":
        d.preventDefault(), y();
        break;
      case "Tab":
        b(!1);
        break;
    }
  }, z = e.find((d) => d.value === h);
  return /* @__PURE__ */ $("div", { ref: S, className: [Ie.root, i].filter(Boolean).join(" "), onKeyDown: P, children: [
    /* @__PURE__ */ $(
      "button",
      {
        ref: x,
        type: "button",
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-expanded": N,
        "aria-controls": f,
        "aria-invalid": u || void 0,
        disabled: l,
        className: [
          Ie.trigger,
          Ie[a],
          N ? Ie.open : null,
          u ? Ie.invalid : null
        ].filter(Boolean).join(" "),
        onClick: () => N ? b(!1) : c(),
        ...p,
        children: [
          /* @__PURE__ */ r("span", { className: z ? Ie.label : Ie.placeholder, children: z ? z.label : o }),
          /* @__PURE__ */ r(
            "span",
            {
              className: [Ie.chevron, N ? Ie.chevronOpen : null].filter(Boolean).join(" "),
              style: { backgroundImage: s_ },
              "aria-hidden": "true"
            }
          )
        ]
      }
    ),
    N && /* @__PURE__ */ r(
      "div",
      {
        id: f,
        role: "listbox",
        "aria-activedescendant": m >= 0 ? `${v}-option-${m}` : void 0,
        className: Ie.menu,
        children: e.map(
          (d, k) => d.label === "" ? /* @__PURE__ */ r("div", { className: Ie.header, role: "presentation", children: d.value }, d.value) : /* @__PURE__ */ r(
            "div",
            {
              id: `${v}-option-${k}`,
              role: "option",
              "aria-selected": d.value === h,
              "aria-disabled": d.disabled || void 0,
              className: [
                Ie.option,
                k === m ? Ie.active : null,
                d.value === h ? Ie.selected : null,
                d.disabled ? Ie.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => {
                d.disabled || O(d.value);
              },
              onMouseEnter: () => {
                !d.disabled && d.label !== "" && g(k);
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
const o_ = "_root_1ap80_1", a_ = "_wrap_1ap80_9", l_ = "_input_1ap80_26", c_ = "_invalid_1ap80_31", i_ = "_clear_1ap80_57", d_ = "_menu_1ap80_82", u_ = "_option_1ap80_97", f_ = "_disabled_1ap80_108", __ = "_active_1ap80_112", p_ = "_empty_1ap80_122", h_ = "_xs_1ap80_128", m_ = "_sm_1ap80_135", g_ = "_md_1ap80_142", b_ = "_lg_1ap80_149", y_ = "_xl_1ap80_156", tt = {
  root: o_,
  wrap: a_,
  input: l_,
  invalid: c_,
  clear: i_,
  menu: d_,
  option: u_,
  disabled: f_,
  active: __,
  empty: p_,
  xs: h_,
  sm: m_,
  md: g_,
  lg: b_,
  xl: y_
}, v_ = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function kg({
  options: e = [],
  value: t,
  defaultValue: n = "",
  onChange: s,
  onSelect: o,
  placeholder: a = "",
  size: u = "md",
  invalid: l = !1,
  disabled: i = !1,
  filter: p = v_,
  className: v,
  ...f
}) {
  const S = Ne(), x = `${S}-listbox`, D = Y(null), C = Y(null), [N, b] = H(n), [h, _] = H(!1), w = t ?? N, m = pe(
    () => w.trim() === "" ? [...e] : e.filter((T) => p(T, w)),
    [e, w, p]
  ), g = m.map((T, W) => T.disabled ? -1 : W).filter((T) => T >= 0), [c, y] = H(-1), O = (T) => {
    b(T), s?.(T);
  }, B = (T) => {
    O(T.label), o?.(T.value, T), _(!1);
  }, P = (T) => {
    if (g.length === 0) return;
    const W = g.includes(c) ? g.indexOf(c) : T === 1 ? -1 : 0, te = g[(W + T + g.length) % g.length];
    te != null && y(te);
  }, z = (T) => {
    i || (O(T.target.value), _(!0), y(-1));
  }, d = () => {
    i || w !== "" && _(!0);
  }, k = (T) => {
    D.current && !D.current.contains(T.relatedTarget) && _(!1);
  }, L = (T) => {
    if (!i)
      switch (T.key) {
        case "ArrowDown":
          T.preventDefault(), h ? P(1) : (_(!0), y(g[0] ?? -1));
          break;
        case "ArrowUp":
          T.preventDefault(), h && P(-1);
          break;
        case "Enter":
          T.preventDefault(), h && c >= 0 && m[c] && B(m[c]);
          break;
        case "Escape":
          T.preventDefault(), _(!1);
          break;
        case "Tab":
          h && c >= 0 && m[c] && B(m[c]), _(!1);
          break;
      }
  }, E = () => {
    O(""), y(-1), _(!0), C.current?.focus();
  };
  return /* @__PURE__ */ $("div", { ref: D, className: [tt.root, v].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ $("div", { className: [tt.wrap, tt[u], l ? tt.invalid : null].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ r(
        "input",
        {
          ref: C,
          type: "text",
          role: "combobox",
          "aria-expanded": h,
          "aria-controls": x,
          "aria-autocomplete": "list",
          "aria-activedescendant": h && c >= 0 ? `${S}-option-${c}` : void 0,
          "aria-invalid": l || void 0,
          disabled: i,
          value: w,
          placeholder: a,
          className: tt.input,
          onChange: z,
          onFocus: d,
          onBlur: k,
          onKeyDown: L,
          ...f
        }
      ),
      w !== "" && !i && /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          className: tt.clear,
          "aria-label": "Clear",
          onClick: E,
          children: "×"
        }
      )
    ] }),
    h && /* @__PURE__ */ r("div", { id: x, role: "listbox", className: tt.menu, children: m.length === 0 ? /* @__PURE__ */ r("div", { className: tt.empty, children: "No matches" }) : m.map((T, W) => /* @__PURE__ */ r(
      "div",
      {
        id: `${S}-option-${W}`,
        role: "option",
        "aria-selected": !1,
        "aria-disabled": T.disabled || void 0,
        className: [
          tt.option,
          W === c ? tt.active : null,
          T.disabled ? tt.disabled : null
        ].filter(Boolean).join(" "),
        onClick: () => {
          T.disabled || B(T);
        },
        onMouseDown: (te) => {
          te.preventDefault(), T.disabled || B(T);
        },
        onMouseEnter: () => {
          T.disabled || y(W);
        },
        children: T.label
      },
      T.value
    )) })
  ] });
}
const x_ = "_box_186wt_1", w_ = "_option_186wt_12", k_ = "_disabled_186wt_23", $_ = "_selected_186wt_27", N_ = "_active_186wt_33", nn = {
  box: x_,
  option: w_,
  disabled: k_,
  selected: $_,
  active: N_
};
function $g({
  options: e = [],
  value: t,
  defaultValue: n,
  multiple: s = !1,
  onChange: o,
  className: a,
  style: u,
  ...l
}) {
  const i = Ne(), [p, v] = H(() => {
    const m = n;
    return m == null ? [] : Array.isArray(m) ? [...m] : [m];
  }), f = t == null ? p : Array.isArray(t) ? t : [t], S = e.findIndex((m) => !m.disabled), [x, D] = H(() => S >= 0 ? S : 0), C = Y(""), N = Y(null), b = (m) => {
    v(m), o?.(s ? m : m[0] ?? "");
  }, h = e.map((m, g) => m.disabled ? -1 : g).filter((m) => m >= 0), _ = (m) => {
    const g = e[m];
    if (!(!g || g.disabled))
      if (D(m), s) {
        const c = f.includes(g.value) ? f.filter((y) => y !== g.value) : [...f, g.value];
        b(c);
      } else
        b([g.value]);
  }, w = (m) => {
    if (h.length === 0) return;
    const g = h.includes(x) ? x : h[0];
    let c = -1;
    if (m.key === "ArrowDown")
      c = h[(h.indexOf(g) + 1) % h.length];
    else if (m.key === "ArrowUp")
      c = h[(h.indexOf(g) - 1 + h.length) % h.length];
    else if (m.key === "Home")
      c = h[0];
    else if (m.key === "End")
      c = h[h.length - 1];
    else if (m.key === "Enter" || m.key === " ") {
      m.preventDefault(), _(g);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(m.key)) {
      m.preventDefault();
      const y = (C.current + m.key).toLowerCase();
      C.current = y, N.current && clearTimeout(N.current), N.current = setTimeout(() => {
        C.current = "";
      }, 500);
      const O = [...h, ...h], B = h.indexOf(g) + 1, P = O.slice(B).find(
        (z) => e[z]?.label.toLowerCase().startsWith(y)
      );
      P != null && D(P);
      return;
    }
    c >= 0 && (m.preventDefault(), D(c), s || b([e[c]?.value ?? ""]));
  };
  return /* @__PURE__ */ r(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": s || void 0,
      "aria-activedescendant": e[x] ? `${i}-option-${x}` : void 0,
      style: u,
      className: [nn.box, a].filter(Boolean).join(" "),
      onKeyDown: w,
      ...l,
      children: e.map((m, g) => {
        const c = f.includes(m.value), y = g === x;
        return /* @__PURE__ */ r(
          "div",
          {
            id: `${i}-option-${g}`,
            role: "option",
            "aria-selected": c,
            "aria-disabled": m.disabled || void 0,
            className: [
              nn.option,
              c ? nn.selected : null,
              y ? nn.active : null,
              m.disabled ? nn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => _(g),
            children: m.label
          },
          m.value
        );
      })
    }
  );
}
const S_ = "_group_qro0q_1", D_ = "_legend_qro0q_8", z_ = "_list_qro0q_16", O_ = "_item_qro0q_25", C_ = "_disabled_qro0q_32", M_ = "_label_qro0q_37", I_ = "_checkbox_qro0q_48", Mt = {
  group: S_,
  legend: D_,
  list: z_,
  item: O_,
  disabled: C_,
  label: M_,
  checkbox: I_
};
function Ng({
  options: e = [],
  value: t,
  defaultValue: n = [],
  onChange: s,
  legend: o,
  name: a,
  className: u
}) {
  const [l, i] = H(() => [...n]), p = t ?? l, v = (f, S) => {
    const x = S ? [...p, f] : p.filter((D) => D !== f);
    i(x), s?.(x);
  };
  return /* @__PURE__ */ $("fieldset", { className: [Mt.group, u].filter(Boolean).join(" "), children: [
    o != null && /* @__PURE__ */ r("legend", { className: Mt.legend, children: o }),
    /* @__PURE__ */ r("ul", { className: Mt.list, children: e.map((f) => {
      const S = p.includes(f.value);
      return /* @__PURE__ */ r(
        "li",
        {
          className: [Mt.item, f.disabled ? Mt.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ $("label", { className: Mt.label, children: [
            /* @__PURE__ */ r(
              "input",
              {
                type: "checkbox",
                className: Mt.checkbox,
                name: a,
                value: f.value,
                checked: S,
                disabled: f.disabled,
                onChange: (x) => v(f.value, x.target.checked)
              }
            ),
            /* @__PURE__ */ r("span", { children: f.label })
          ] })
        },
        f.value
      );
    }) })
  ] });
}
const j_ = "_group_1dyra_1", E_ = "_legend_1dyra_8", T_ = "_list_1dyra_16", A_ = "_item_1dyra_25", L_ = "_disabled_1dyra_32", R_ = "_label_1dyra_37", B_ = "_radio_1dyra_48", It = {
  group: j_,
  legend: E_,
  list: T_,
  item: A_,
  disabled: L_,
  label: R_,
  radio: B_
};
function Sg({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: s,
  legend: o,
  name: a,
  className: u
}) {
  const [l, i] = H(n), p = t ?? l, v = (f) => {
    i(f), s?.(f);
  };
  return /* @__PURE__ */ $("fieldset", { className: [It.group, u].filter(Boolean).join(" "), children: [
    o != null && /* @__PURE__ */ r("legend", { className: It.legend, children: o }),
    /* @__PURE__ */ r("ul", { className: It.list, children: e.map((f) => {
      const S = f.value === p;
      return /* @__PURE__ */ r(
        "li",
        {
          className: [It.item, f.disabled ? It.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ $("label", { className: It.label, children: [
            /* @__PURE__ */ r(
              "input",
              {
                type: "radio",
                className: It.radio,
                name: a,
                value: f.value,
                checked: S,
                disabled: f.disabled,
                onChange: (x) => v(x.target.value)
              }
            ),
            /* @__PURE__ */ r("span", { children: f.label })
          ] })
        },
        f.value
      );
    }) })
  ] });
}
const P_ = "_bar_5dkw6_1", q_ = "_option_5dkw6_12", F_ = "_selected_5dkw6_33", H_ = "_sm_5dkw6_49", K_ = "_md_5dkw6_55", W_ = "_lg_5dkw6_61", rn = {
  bar: P_,
  option: q_,
  selected: F_,
  sm: H_,
  md: K_,
  lg: W_
};
function Dg({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: s,
  size: o = "md",
  className: a,
  ...u
}) {
  const [l, i] = H(
    n ?? e[0]?.value
  ), p = t ?? l, v = (f) => {
    i(f), s?.(f);
  };
  return /* @__PURE__ */ r(
    "div",
    {
      role: "group",
      className: [rn.bar, rn[o], a].filter(Boolean).join(" "),
      ...u,
      children: e.map((f) => {
        const S = f.value === p;
        return /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            "aria-pressed": S,
            disabled: f.disabled,
            className: [
              rn.option,
              S ? rn.selected : null,
              f.disabled ? rn.disabled : null
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
const V_ = "_toggle_1lv03_1", U_ = "_pressed_1lv03_29", X_ = "_sm_1lv03_41", G_ = "_md_1lv03_47", Y_ = "_lg_1lv03_53", J_ = "_fullWidth_1lv03_59", bn = {
  toggle: V_,
  pressed: U_,
  sm: X_,
  md: G_,
  lg: Y_,
  fullWidth: J_
}, zg = ve(
  function({
    pressed: t,
    defaultPressed: n = !1,
    onChange: s,
    size: o = "md",
    fullWidth: a = !1,
    className: u,
    type: l = "button",
    ...i
  }, p) {
    const [v, f] = H(n), S = t ?? v, x = () => {
      const D = !S;
      f(D), s?.(D);
    };
    return /* @__PURE__ */ r(
      "button",
      {
        ref: p,
        type: l,
        "aria-pressed": S,
        className: [
          bn.toggle,
          bn[o],
          S ? bn.pressed : null,
          a ? bn.fullWidth : null,
          u
        ].filter(Boolean).join(" "),
        onClick: x,
        ...i
      }
    );
  }
), Z_ = "_root_6843t_1", Q_ = "_action_6843t_8", ep = "_caret_6843t_32", tp = "_sm_6843t_65", np = "_md_6843t_77", rp = "_lg_6843t_89", sp = "_menu_6843t_101", op = "_item_6843t_114", ap = "_disabled_6843t_126", lp = "_active_6843t_130", cp = "_danger_6843t_139", pt = {
  root: Z_,
  action: Q_,
  caret: ep,
  sm: tp,
  md: np,
  lg: rp,
  menu: sp,
  item: op,
  disabled: ap,
  active: lp,
  danger: cp
};
function Og({
  label: e,
  onClick: t,
  items: n = [],
  size: s = "md",
  disabled: o = !1,
  className: a,
  ...u
}) {
  const l = Ne(), i = `${l}-menu`, p = Y(null), v = Y(null), [f, S] = H(!1), [x, D] = H(-1), C = n.map((m, g) => m.disabled ? -1 : g).filter((m) => m >= 0), N = q(() => {
    o || (D(C[0] ?? -1), S(!0));
  }, [o, C]), b = q(() => {
    S(!1), v.current?.focus();
  }, []);
  be(() => {
    if (!f) return;
    const m = (g) => {
      p.current && !p.current.contains(g.target) && S(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [f]);
  const h = (m) => {
    const g = n[m];
    !g || g.disabled || (g.onClick?.(), S(!1), v.current?.focus());
  }, _ = (m) => {
    if (C.length === 0) return;
    const g = C.includes(x) ? C.indexOf(x) : m === 1 ? -1 : 0, c = C[(g + m + C.length) % C.length];
    c != null && D(c);
  }, w = (m) => {
    if (!f) {
      (m.key === "ArrowDown" || m.key === "Enter" || m.key === " ") && (m.preventDefault(), N());
      return;
    }
    switch (m.key) {
      case "ArrowDown":
        m.preventDefault(), _(1);
        break;
      case "ArrowUp":
        m.preventDefault(), _(-1);
        break;
      case "Home":
        m.preventDefault(), C[0] != null && D(C[0]);
        break;
      case "End":
        m.preventDefault(), C[C.length - 1] != null && D(C[C.length - 1]);
        break;
      case "Enter":
      case " ":
        m.preventDefault(), x >= 0 && h(x);
        break;
      case "Escape":
        m.preventDefault(), b();
        break;
      case "Tab":
        S(!1);
        break;
    }
  };
  return /* @__PURE__ */ $(
    "div",
    {
      ref: p,
      className: [pt.root, pt[s], a].filter(Boolean).join(" "),
      onKeyDown: w,
      children: [
        /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: pt.action,
            disabled: o,
            onClick: t,
            children: e
          }
        ),
        /* @__PURE__ */ r(
          "button",
          {
            ref: v,
            type: "button",
            className: pt.caret,
            "aria-haspopup": "menu",
            "aria-expanded": f,
            "aria-controls": i,
            "aria-label": "More actions",
            disabled: o,
            onClick: () => f ? S(!1) : N(),
            children: "▾"
          }
        ),
        f && /* @__PURE__ */ r(
          "div",
          {
            id: i,
            role: "menu",
            "aria-activedescendant": x >= 0 ? `${l}-item-${x}` : void 0,
            className: pt.menu,
            ...u,
            children: n.map((m, g) => /* @__PURE__ */ r(
              "div",
              {
                id: `${l}-item-${g}`,
                role: "menuitem",
                "aria-disabled": m.disabled || void 0,
                className: [
                  pt.item,
                  g === x ? pt.active : null,
                  m.danger ? pt.danger : null,
                  m.disabled ? pt.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => h(g),
                onMouseEnter: () => {
                  m.disabled || D(g);
                },
                children: m.label
              },
              m.key
            ))
          }
        )
      ]
    }
  );
}
const ip = "_textbox_1eb0k_1", dp = "_invalid_1eb0k_31", up = "_xs_1eb0k_37", fp = "_sm_1eb0k_43", _p = "_md_1eb0k_49", pp = "_lg_1eb0k_55", hp = "_xl_1eb0k_61", On = {
  textbox: ip,
  invalid: dp,
  xs: up,
  sm: fp,
  md: _p,
  lg: pp,
  xl: hp
}, Cg = ve(function({ size: t = "md", invalid: n = !1, className: s, type: o = "text", ...a }, u) {
  return /* @__PURE__ */ r(
    "input",
    {
      ref: u,
      type: o,
      className: [On.textbox, On[t], n ? On.invalid : null, s].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...a
    }
  );
}), mp = "_wrapper_164zy_1", gp = "_input_164zy_8", bp = "_invalid_164zy_38", yp = "_toggle_164zy_44", vp = "_xs_164zy_79", xp = "_sm_164zy_85", wp = "_md_164zy_91", kp = "_lg_164zy_97", $p = "_xl_164zy_103", sn = {
  wrapper: mp,
  input: gp,
  invalid: bp,
  toggle: yp,
  xs: vp,
  sm: xp,
  md: wp,
  lg: kp,
  xl: $p
}, Mg = ve(function({
  size: t = "md",
  invalid: n = !1,
  className: s,
  disabled: o,
  showLabel: a = "Show password",
  hideLabel: u = "Hide password",
  ...l
}, i) {
  const [p, v] = H(!1);
  return /* @__PURE__ */ $("div", { className: sn.wrapper, children: [
    /* @__PURE__ */ r(
      "input",
      {
        ref: i,
        type: p ? "text" : "password",
        disabled: o,
        className: [sn.input, sn[t], n ? sn.invalid : null, s].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...l
      }
    ),
    /* @__PURE__ */ r(
      "button",
      {
        type: "button",
        className: sn.toggle,
        "aria-pressed": p,
        "aria-label": p ? u : a,
        disabled: o,
        onClick: () => v((f) => !f),
        children: /* @__PURE__ */ r(De, { name: p ? "eye-off" : "eye", size: 16 })
      }
    )
  ] });
}), Np = "_mask_evq34_1", Sp = "_invalid_evq34_31", Dp = "_xs_evq34_37", zp = "_sm_evq34_43", Op = "_md_evq34_49", Cp = "_lg_evq34_55", Mp = "_xl_evq34_61", Cn = {
  mask: Np,
  invalid: Sp,
  xs: Dp,
  sm: zp,
  md: Op,
  lg: Cp,
  xl: Mp
};
function nr(e, t) {
  let n = e.replace(/\D/g, ""), s = "";
  for (const o of t)
    if (o === "#") {
      if (n.length === 0) break;
      s += n[0] ?? "", n = n.slice(1);
    } else if (n.length > 0)
      s += o;
    else
      break;
  return s;
}
const Ig = ve(function({
  size: t = "md",
  invalid: n = !1,
  mask: s,
  value: o,
  defaultValue: a = "",
  onChange: u,
  className: l,
  onKeyDown: i,
  ...p
}, v) {
  const [f, S] = H(a ?? ""), x = o !== void 0, D = x ? o ?? "" : f, C = (h) => {
    const _ = nr(h, s);
    return x || S(_), u?.(_), _;
  };
  return /* @__PURE__ */ r(
    "input",
    {
      ref: v,
      type: "text",
      value: D,
      onChange: (h) => {
        C(h.target.value);
      },
      onKeyDown: (h) => {
        if (h.key === "Backspace") {
          const _ = h.currentTarget.selectionStart ?? D.length, w = D[_ - 1];
          if (w !== void 0 && !/\d/.test(w)) {
            h.preventDefault();
            const m = D.replace(/\D/g, "");
            C(nr(m.slice(0, -1), s));
          }
        }
        i?.(h);
      },
      className: [Cn.mask, Cn[t], n ? Cn.invalid : null, l].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...p
    }
  );
}), Ip = "_wrapper_aus1c_1", jp = "_input_aus1c_8", Ep = "_invalid_aus1c_38", Tp = "_button_aus1c_44", Ap = "_up_aus1c_76", Lp = "_down_aus1c_81", Rp = "_xs_aus1c_86", Bp = "_sm_aus1c_92", Pp = "_md_aus1c_98", qp = "_lg_aus1c_104", Fp = "_xl_aus1c_110", kt = {
  wrapper: Ip,
  input: jp,
  invalid: Ep,
  button: Tp,
  up: Ap,
  down: Lp,
  xs: Rp,
  sm: Bp,
  md: Pp,
  lg: qp,
  xl: Fp
};
function En(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function Hp(e) {
  let t = "", n = !1;
  for (const s of e)
    s >= "0" && s <= "9" ? t += s : s === "." && !n ? (n = !0, t += s) : s === "-" && t.length === 0 && (t += s);
  return t;
}
function br(e, t, n) {
  return Math.min(n ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function Kp(e, t, n) {
  return t === void 0 ? e : t + Math.round((e - t) / n) * n;
}
function Wp(e, t, n, s, o) {
  const u = En(e) ?? n ?? 0;
  let l;
  return n === void 0 ? l = u + t * o : t > 0 ? l = n + Math.ceil((u - n + 1e-9) / o) * o : l = n + Math.floor((u - n - 1e-9) / o) * o, br(l, n, s);
}
const jg = ve(function({
  size: t = "md",
  invalid: n = !1,
  className: s,
  disabled: o,
  value: a,
  defaultValue: u,
  onChange: l,
  min: i,
  max: p,
  step: v = 1,
  incrementLabel: f = "Increment",
  decrementLabel: S = "Decrement",
  onBlur: x,
  onKeyDown: D,
  ...C
}, N) {
  const [b, h] = H(u != null ? String(u) : ""), _ = a !== void 0, w = _ ? a == null ? "" : String(a) : b, m = (P) => {
    _ || h(P), l?.(En(P));
  }, g = (P) => {
    _ || h(String(P)), l?.(P);
  }, c = (P) => {
    o || g(Wp(w, P, i, p, v));
  }, y = (P) => {
    m(Hp(P.target.value));
  }, O = (P) => {
    P.key === "ArrowUp" ? (P.preventDefault(), c(1)) : P.key === "ArrowDown" && (P.preventDefault(), c(-1)), D?.(P);
  }, B = (P) => {
    const z = En(w);
    z === null ? (_ || h(""), l?.(null)) : g(br(Kp(z, i, v), i, p)), x?.(P);
  };
  return /* @__PURE__ */ $("div", { className: kt.wrapper, children: [
    /* @__PURE__ */ r(
      "input",
      {
        ref: N,
        type: "text",
        inputMode: "decimal",
        autoComplete: "off",
        value: w,
        disabled: o,
        onChange: y,
        onKeyDown: O,
        onBlur: B,
        className: [kt.input, kt[t], n ? kt.invalid : null, s].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...C
      }
    ),
    /* @__PURE__ */ r(
      "button",
      {
        type: "button",
        className: [kt.button, kt.up].join(" "),
        "aria-label": f,
        disabled: o,
        onClick: () => c(1),
        children: /* @__PURE__ */ r(De, { name: "chevron-up", size: 14 })
      }
    ),
    /* @__PURE__ */ r(
      "button",
      {
        type: "button",
        className: [kt.button, kt.down].join(" "),
        "aria-label": S,
        disabled: o,
        onClick: () => c(-1),
        children: /* @__PURE__ */ r(De, { name: "chevron-down", size: 14 })
      }
    )
  ] });
}), ce = {}, Vp = [
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
function Ve(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function Tn(e) {
  const t = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(e.trim());
  if (!t) return null;
  let n = t[1];
  return n.length === 3 && (n = n.split("").map((s) => s + s).join("")), {
    r: Number.parseInt(n.slice(0, 2), 16),
    g: Number.parseInt(n.slice(2, 4), 16),
    b: Number.parseInt(n.slice(4, 6), 16),
    a: 1
  };
}
function Up({ r: e, g: t, b: n }) {
  const s = (o) => Math.round(o).toString(16).padStart(2, "0");
  return `#${s(e)}${s(t)}${s(n)}`;
}
function Xp({ r: e, g: t, b: n }) {
  const s = e / 255, o = t / 255, a = n / 255, u = Math.max(s, o, a), l = Math.min(s, o, a), i = u - l;
  let p = 0;
  return i !== 0 && (u === s ? p = (o - a) / i % 6 : u === o ? p = (a - s) / i + 2 : p = (s - o) / i + 4, p *= 60, p < 0 && (p += 360)), {
    h: p,
    s: u === 0 ? 0 : i / u,
    v: u
  };
}
function qt({ h: e, s: t, v: n }) {
  const s = n * t, o = e / 60, a = s * (1 - Math.abs(o % 2 - 1));
  let u = 0, l = 0, i = 0;
  o < 1 ? (u = s, l = a) : o < 2 ? (u = a, l = s) : o < 3 ? (l = s, i = a) : o < 4 ? (l = a, i = s) : o < 5 ? (u = a, i = s) : (u = s, i = a);
  const p = n - s;
  return {
    r: Math.round((u + p) * 255),
    g: Math.round((l + p) * 255),
    b: Math.round((i + p) * 255),
    a: 1
  };
}
function Gp(e) {
  const t = Tn(e);
  if (t) return t;
  const n = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*([\d.]+))?\s*\)$/i.exec(
    e.trim()
  );
  return n ? {
    r: Ve(Number(n[1]), 0, 255),
    g: Ve(Number(n[2]), 0, 255),
    b: Ve(Number(n[3]), 0, 255),
    a: n[4] != null ? Ve(Number(n[4]), 0, 1) : 1
  } : null;
}
function rr({ r: e, g: t, b: n, a: s }) {
  return s >= 1 ? `rgb(${e}, ${t}, ${n})` : `rgba(${e}, ${t}, ${n}, ${Math.round(s * 100) / 100})`;
}
const Eg = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: n = !0,
  showPalette: s = !0,
  palette: o = Vp,
  showButton: a = !1,
  showArrow: u = !0,
  disabled: l = !1,
  invalid: i = !1,
  placeholder: p = "",
  size: v = "md",
  tabIndex: f = 0,
  className: S,
  onChange: x,
  onValueChange: D,
  onOpen: C,
  onClose: N
}) => {
  const b = Y(null), h = Y(null), _ = Y(null), w = Y(null), m = Y(null), g = Ne(), c = Y(null), y = pe(
    () => Gp(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [O, B] = H(!1), [P, z] = H(null), d = P ?? y, k = pe(() => Xp(d), [d]), L = q(
    (R) => {
      const ne = rr(R);
      x?.(ne), D?.(ne);
    },
    [x, D]
  ), E = q(
    (R, ne) => {
      z(R), ne && !a && L(R);
    },
    [a, L]
  ), T = q(() => {
    B(!1), z(null), N?.(), h.current?.focus();
  }, [N]), W = q(() => {
    l || (z(y), B(!0), C?.());
  }, [l, y, C]), te = q(() => {
    O ? T() : W();
  }, [O, T, W]), re = q(
    (R, ne) => {
      const ke = _.current;
      if (!ke) return k;
      const ze = ke.getBoundingClientRect(), Fe = Ve((R - ze.left) / ze.width, 0, 1), Te = Ve(1 - (ne - ze.top) / ze.height, 0, 1);
      return { h: k.h, s: Fe, v: Te };
    },
    [k]
  ), Z = q(
    (R, ne) => {
      if (!ne) return 0;
      const ke = ne.getBoundingClientRect();
      return Ve((R - ke.left) / ke.width, 0, 1);
    },
    []
  ), Q = (R) => {
    if (l) return;
    R.preventDefault(), R.currentTarget.setPointerCapture(R.pointerId), c.current = "sat";
    const ne = re(R.clientX, R.clientY);
    E({ ...qt(ne), a: d.a }, !0);
  }, fe = (R) => {
    if (c.current !== "sat") return;
    R.preventDefault();
    const ne = re(R.clientX, R.clientY);
    E({ ...qt(ne), a: d.a }, !0);
  }, V = (R) => {
    if (l) return;
    R.preventDefault(), R.currentTarget.setPointerCapture(R.pointerId), c.current = "hue";
    const ne = Z(R.clientX, w.current);
    E({ ...qt({ ...k, h: ne * 360 }), a: d.a }, !0);
  }, K = (R) => {
    if (c.current !== "hue") return;
    R.preventDefault();
    const ne = Z(R.clientX, w.current);
    E({ ...qt({ ...k, h: ne * 360 }), a: d.a }, !0);
  }, j = (R) => {
    if (l) return;
    R.preventDefault(), R.currentTarget.setPointerCapture(R.pointerId), c.current = "alpha";
    const ne = Z(R.clientX, m.current);
    E({ ...d, a: ne }, !0);
  }, U = (R) => {
    if (c.current !== "alpha") return;
    R.preventDefault();
    const ne = Z(R.clientX, m.current);
    E({ ...d, a: ne }, !0);
  }, se = () => {
    c.current = null;
  }, X = q(
    (R, ne) => {
      const ke = { h: k.h, s: Ve(k.s + R, 0, 1), v: Ve(k.v + ne, 0, 1) };
      E({ ...qt(ke), a: d.a }, !0);
    },
    [k, d.a, E]
  ), oe = q(
    (R) => {
      const ne = (k.h + R + 360) % 360;
      E({ ...qt({ ...k, h: ne }), a: d.a }, !0);
    },
    [k, d.a, E]
  ), ie = q(
    (R) => {
      E({ ...d, a: Ve(d.a + R, 0, 1) }, !0);
    },
    [d, E]
  ), me = (R) => {
    switch (R.key) {
      case "ArrowLeft":
        R.preventDefault(), X(-0.05, 0);
        break;
      case "ArrowRight":
        R.preventDefault(), X(0.05, 0);
        break;
      case "ArrowUp":
        R.preventDefault(), X(0, 0.05);
        break;
      case "ArrowDown":
        R.preventDefault(), X(0, -0.05);
        break;
      case "Escape":
        R.preventDefault(), T();
        break;
    }
  }, Ee = (R, ne) => {
    switch (R.key) {
      case "ArrowLeft":
        R.preventDefault(), ne === "hue" ? oe(-6) : ie(-0.05);
        break;
      case "ArrowRight":
        R.preventDefault(), ne === "hue" ? oe(6) : ie(0.05);
        break;
      case "Escape":
        R.preventDefault(), T();
        break;
    }
  }, Se = (R, ne) => {
    if (R === "hex") {
      const Te = Tn(ne);
      Te && E({ ...Te, a: d.a }, !0);
      return;
    }
    const ke = ne.replace(/[^\d.]/g, ""), ze = Number.parseFloat(ke);
    if (Number.isNaN(ze)) return;
    if (R === "a") {
      const Te = ke.includes(".") ? Ve(ze, 0, 1) : Ve(ze / 100, 0, 1);
      E({ ...d, a: Te }, !0);
      return;
    }
    const Fe = { r: 255, g: 255, b: 255 };
    E({ ...d, [R]: Ve(ze, 0, Fe[R]) }, !0);
  }, rt = () => {
    P && (L(P), z(null), B(!1), N?.(), h.current?.focus());
  };
  be(() => {
    if (!O) return;
    const R = (ne) => {
      b.current && !b.current.contains(ne.target) && T();
    };
    return document.addEventListener("mousedown", R), () => document.removeEventListener("mousedown", R);
  }, [O, T]), be(() => {
    if (!O) return;
    const R = (ne) => {
      ne.key === "Escape" && T();
    };
    return document.addEventListener("keydown", R), () => document.removeEventListener("keydown", R);
  }, [O, T]);
  const le = v === "xs" ? ce.dtColorpickerTriggerXs : v === "sm" ? ce.dtColorpickerTriggerSm : v === "lg" ? ce.dtColorpickerTriggerLg : v === "xl" ? ce.dtColorpickerTriggerXl : ce.dtColorpickerTriggerMd, st = rr(d), it = Up(d), Pe = { x: k.s * 100, y: (1 - k.v) * 100 }, Qe = k.h / 360 * 100, qe = d.a * 100, Xe = /* @__PURE__ */ $("div", { className: ce.dtColorpickerPanel, children: [
    t && /* @__PURE__ */ r(
      "div",
      {
        ref: _,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(k.s * 100),
        "aria-valuetext": `Saturation ${Math.round(k.s * 100)}%, value ${Math.round(k.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": l || void 0,
        tabIndex: l ? -1 : f,
        className: ce.dtSaturationPicker,
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${k.h}, 100%, 50%)`
        },
        onKeyDown: me,
        onPointerDown: Q,
        onPointerMove: fe,
        onPointerUp: se,
        children: /* @__PURE__ */ r(
          "span",
          {
            className: ce.dtSaturationIndicator,
            style: { left: `${Pe.x}%`, top: `${Pe.y}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    t && /* @__PURE__ */ r(
      "div",
      {
        ref: w,
        role: "slider",
        "aria-label": "Hue",
        "aria-valuemin": 0,
        "aria-valuemax": 360,
        "aria-valuenow": Math.round(k.h),
        "aria-disabled": l || void 0,
        tabIndex: l ? -1 : f,
        className: ce.dtHuePicker,
        onKeyDown: (R) => Ee(R, "hue"),
        onPointerDown: V,
        onPointerMove: K,
        onPointerUp: se,
        children: /* @__PURE__ */ r(
          "span",
          {
            className: ce.dtHueIndicator,
            style: { left: `${Qe}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    t && /* @__PURE__ */ r(
      "div",
      {
        ref: m,
        role: "slider",
        "aria-label": "Alpha",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(qe),
        "aria-disabled": l || void 0,
        tabIndex: l ? -1 : f,
        className: ce.dtAlphaPicker,
        style: {
          background: `repeating-conic-gradient(var(--dt-color-border) 0% 25%, var(--dt-color-surface) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${k.h}, 100%, 50%))`
        },
        onKeyDown: (R) => Ee(R, "alpha"),
        onPointerDown: j,
        onPointerMove: U,
        onPointerUp: se,
        children: /* @__PURE__ */ r(
          "span",
          {
            className: ce.dtAlphaIndicator,
            style: { left: `${qe}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    n && /* @__PURE__ */ $("div", { className: ce.dtColorpickerRgba, children: [
      /* @__PURE__ */ $("label", { className: ce.dtColorpickerRgbaField, children: [
        /* @__PURE__ */ r("span", { className: ce.dtColorpickerRgbaLabel, children: "Hex" }),
        /* @__PURE__ */ r(
          "input",
          {
            type: "text",
            maxLength: 7,
            className: ce.dtColorpickerRgbaInput,
            "aria-label": "Hex",
            value: it,
            onChange: (R) => Se("hex", R.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ $("label", { className: ce.dtColorpickerRgbaField, children: [
        /* @__PURE__ */ r("span", { className: ce.dtColorpickerRgbaLabel, children: "R" }),
        /* @__PURE__ */ r(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: ce.dtColorpickerRgbaInput,
            "aria-label": "Red",
            value: d.r,
            onChange: (R) => Se("r", R.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ $("label", { className: ce.dtColorpickerRgbaField, children: [
        /* @__PURE__ */ r("span", { className: ce.dtColorpickerRgbaLabel, children: "G" }),
        /* @__PURE__ */ r(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: ce.dtColorpickerRgbaInput,
            "aria-label": "Green",
            value: d.g,
            onChange: (R) => Se("g", R.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ $("label", { className: ce.dtColorpickerRgbaField, children: [
        /* @__PURE__ */ r("span", { className: ce.dtColorpickerRgbaLabel, children: "B" }),
        /* @__PURE__ */ r(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: ce.dtColorpickerRgbaInput,
            "aria-label": "Blue",
            value: d.b,
            onChange: (R) => Se("b", R.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ $("label", { className: ce.dtColorpickerRgbaField, children: [
        /* @__PURE__ */ r("span", { className: ce.dtColorpickerRgbaLabel, children: "A" }),
        /* @__PURE__ */ r(
          "input",
          {
            type: "text",
            inputMode: "decimal",
            maxLength: 4,
            className: ce.dtColorpickerRgbaInput,
            "aria-label": "Alpha",
            value: Math.round(d.a * 100),
            onChange: (R) => Se("a", R.target.value)
          }
        )
      ] })
    ] }),
    s && /* @__PURE__ */ r("div", { className: ce.dtColorpickerPalette, children: o.map((R) => /* @__PURE__ */ r(
      "button",
      {
        type: "button",
        role: "button",
        className: ce.dtColorpickerSwatch,
        "aria-label": R,
        "aria-disabled": l || void 0,
        tabIndex: l ? -1 : f,
        style: { backgroundColor: R },
        onClick: () => {
          const ne = Tn(R);
          a ? E({ ...ne, a: d.a }, !1) : (z(null), L({ ...ne, a: d.a }), B(!1), N?.(), h.current?.focus());
        }
      },
      R
    )) }),
    a && /* @__PURE__ */ r("div", { className: ce.dtColorpickerFooter, children: /* @__PURE__ */ r(
      "button",
      {
        type: "button",
        className: ce.dtColorpickerOk,
        onClick: rt,
        children: "OK"
      }
    ) })
  ] });
  return /* @__PURE__ */ $(
    "div",
    {
      ref: b,
      className: [
        ce.dtColorpicker,
        O ? ce.dtColorpickerOpen : null,
        i ? ce.dtColorpickerInvalid : null,
        S
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ $(
          "button",
          {
            ref: h,
            type: "button",
            role: "button",
            className: [ce.dtColorpickerTrigger, le].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": O,
            "aria-controls": g,
            "aria-label": "Pick a color",
            "aria-disabled": l || void 0,
            disabled: l,
            tabIndex: f,
            onClick: te,
            onKeyDown: (R) => {
              R.key === "Escape" && O && (R.preventDefault(), T());
            },
            children: [
              /* @__PURE__ */ r(
                "span",
                {
                  className: ce.dtColorpickerValue,
                  style: { backgroundColor: st },
                  "aria-hidden": "true"
                }
              ),
              p && /* @__PURE__ */ r("span", { className: ce.dtColorpickerText, children: p }),
              u && /* @__PURE__ */ r("span", { className: ce.dtColorpickerChevron, "aria-hidden": "true", children: /* @__PURE__ */ r(De, { name: "chevron-down", size: 14 }) })
            ]
          }
        ),
        O && /* @__PURE__ */ r(
          "div",
          {
            id: g,
            role: "dialog",
            "aria-label": "Choose color",
            className: ce.dtColorpickerPopup,
            children: Xe
          }
        )
      ]
    }
  );
}, de = {}, Yp = 42;
function Ue(e) {
  return String(e).padStart(2, "0");
}
function Be(e) {
  return `${e.year}-${Ue(e.month)}-${Ue(e.day)}`;
}
function Jp(e, t) {
  const n = Be(e);
  return t ? `${n} ${Ue(e.hour)}:${Ue(e.minute)}:${Ue(e.second)}` : n;
}
function An(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!t) return null;
  const n = Number(t[1]), s = Number(t[2]), o = Number(t[3]), a = t[4] != null ? Number(t[4]) : 0, u = t[5] != null ? Number(t[5]) : 0, l = t[6] != null ? Number(t[6]) : 0;
  if (s < 1 || s > 12 || o < 1 || o > 31) return null;
  const i = new Date(n, s - 1, o, a, u, l);
  return i.getFullYear() !== n || i.getMonth() !== s - 1 || i.getDate() !== o ? null : { year: n, month: s, day: o, hour: a, minute: u, second: l };
}
function $t() {
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
function ht(e, t) {
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
function yn(e, t) {
  const n = new Date(e.year, e.month - 1 + t, 1), s = n.getFullYear(), o = n.getMonth() + 1, a = new Date(s, o, 0).getDate();
  return {
    year: s,
    month: o,
    day: Math.min(e.day, a),
    hour: e.hour,
    minute: e.minute,
    second: e.second
  };
}
function sr(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const or = {
  yyyy: (e) => String(e.year).padStart(4, "0"),
  yy: (e) => Ue(e.year % 100),
  MM: (e) => Ue(e.month),
  M: (e) => String(e.month),
  dd: (e) => Ue(e.day),
  d: (e) => String(e.day),
  HH: (e) => Ue(e.hour),
  H: (e) => String(e.hour),
  mm: (e) => Ue(e.minute),
  m: (e) => String(e.minute),
  ss: (e) => Ue(e.second),
  s: (e) => String(e.second),
  tt: (e, t, n) => new Intl.DateTimeFormat(n, {
    hour: "numeric",
    hour12: !0
  }).formatToParts(t).find((o) => o.type === "dayPeriod")?.value ?? ""
}, Zp = ["yyyy", "yy", "MM", "dd", "HH", "mm", "ss", "tt"], Qp = ["y", "M", "d", "H", "m", "s"];
function vn(e, t, n) {
  const s = new Date(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second
  );
  let o = "", a = 0;
  for (; a < t.length; ) {
    let u = !1;
    for (const i of Zp)
      if (t.startsWith(i, a)) {
        o += or[i](e, s, n), a += i.length, u = !0;
        break;
      }
    if (u) continue;
    const l = t[a];
    if (Qp.includes(l)) {
      o += or[l](e, s, n), a += 1;
      continue;
    }
    o += l, a += 1;
  }
  return o;
}
const e1 = [
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
function t1(e, t) {
  const n = {};
  let s = 0, o = 0;
  for (; o < t.length; ) {
    let l = null;
    for (const i of e1)
      if (t.startsWith(i, o)) {
        l = i;
        break;
      }
    if (l) {
      const i = e.slice(s, s + l.length);
      if (!/^\d+$/.test(i)) return null;
      const p = Number(i);
      switch (l) {
        case "yyyy":
          n.year = p;
          break;
        case "yy":
        case "y":
          n.year = 2e3 + p;
          break;
        case "MM":
        case "M":
          n.month = p;
          break;
        case "dd":
        case "d":
          n.day = p;
          break;
        case "HH":
        case "H":
          n.hour = p;
          break;
        case "mm":
        case "m":
          n.minute = p;
          break;
        case "ss":
        case "s":
          n.second = p;
          break;
      }
      s += l.length, o += l.length;
      continue;
    }
    if (e[s] !== t[o]) return null;
    s += 1, o += 1;
  }
  const a = {
    year: n.year ?? (/* @__PURE__ */ new Date()).getFullYear(),
    month: n.month ?? 1,
    day: n.day ?? 1,
    hour: n.hour ?? 0,
    minute: n.minute ?? 0,
    second: n.second ?? 0
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
function on(e, t) {
  const n = An(e);
  return n || t1(e, t);
}
function n1(e, t, n) {
  return t && Be(e) < Be(t) ? t : n && Be(e) > Be(n) ? n : e;
}
const r1 = ["hour", "minute", "second"];
function xn(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const Tg = ve(function({
  size: t = "md",
  invalid: n = !1,
  value: s,
  defaultValue: o,
  format: a = "yyyy-MM-dd",
  min: u,
  max: l,
  showTime: i = !1,
  showButton: p = !0,
  allowClear: v = !1,
  inline: f = !1,
  disabledDates: S,
  locale: x = "en-US",
  onChange: D,
  onValueChange: C,
  onOpen: N,
  onClose: b,
  disabled: h,
  readOnly: _,
  placeholder: w,
  ariaLabel: m,
  triggerLabel: g,
  clearLabel: c,
  tabIndex: y,
  className: O,
  onBlur: B,
  onKeyDown: P,
  ...z
}, d) {
  const k = Y(null), L = Y(null), E = Y(null), T = Y(null), W = Ne(), te = s !== void 0, [re, Z] = H(
    () => o != null ? vn(on(o, a) ?? $t(), a, x) : ""
  ), [Q, fe] = H(!1), [V, K] = H(null), [j, U] = H(() => {
    const A = s !== void 0 ? s ?? "" : o ?? "";
    if (A) {
      const G = on(A, a);
      if (G) return G;
    }
    return $t();
  }), se = pe(() => u ? An(u) : null, [u]), X = pe(() => l ? An(l) : null, [l]), oe = pe(
    () => new Set(S ?? []),
    [S]
  ), ie = pe(() => {
    const A = te ? s ?? "" : re;
    return A ? on(A, a) : null;
  }, [s, re, te, a]), me = q(
    (A) => {
      const G = Be(A);
      return !!(oe.has(G) || se && G < Be(se) || X && G > Be(X));
    },
    [oe, se, X]
  ), Ee = q(
    (A) => {
      if (!me(A)) return A;
      for (let G = 1; G <= 366; G += 1) {
        const xe = ht(A, G);
        if (!me(xe)) return xe;
        const $e = ht(A, -G);
        if (!me($e)) return $e;
      }
      return A;
    },
    [me]
  ), Se = q(
    (A) => {
      te || Z(A ? vn(A, a, x) : "");
      const G = A ? Jp(A, i) : "";
      D?.(G), C?.(G);
    },
    [te, a, x, i, D, C]
  ), rt = q(
    (A) => {
      L.current = A, typeof d == "function" ? d(A) : d && (d.current = A);
    },
    [d]
  ), le = q(() => {
    fe(!1), K(null), b?.(), f || E.current?.focus();
  }, [f, b]), st = q(() => {
    if (h) return;
    const A = ie ?? $t();
    K(A), U(Ee(A)), fe(!0), N?.();
  }, [h, ie, Ee, N]), it = q(() => {
    Q ? le() : st();
  }, [Q, le, st]), Pe = q((A) => {
    T.current?.querySelector(
      `[data-date="${Be(A)}"]`
    )?.focus();
  }, []), Qe = q(
    (A) => {
      if (me(A)) return;
      const G = V ?? ie, $e = {
        ...i ? {
          hour: G?.hour ?? 0,
          minute: G?.minute ?? 0,
          second: G?.second ?? 0
        } : { hour: 0, minute: 0, second: 0 },
        year: A.year,
        month: A.month,
        day: A.day
      };
      K($e), i || (Se($e), le());
    },
    [me, V, ie, i, Se, le]
  ), qe = q(
    (A, G) => {
      K((xe) => {
        const $e = xe ?? ie ?? $t(), zt = Math.min(A === "hour" ? 23 : 59, Math.max(0, $e[A] + G));
        return { ...$e, [A]: zt };
      });
    },
    [ie]
  ), Xe = q(
    (A, G) => {
      const xe = G.replace(/\D/g, ""), $e = xe === "" ? 0 : Number(xe), Dt = A === "hour" ? 23 : 59;
      K((zt) => ({ ...zt ?? ie ?? $t(), [A]: Math.min(Dt, $e) }));
    },
    [ie]
  ), R = q(() => {
    V && (Se(V), le());
  }, [V, Se, le]), ne = q(() => {
    if (Q) return;
    const A = on(re, a);
    Se(A ? n1(A, se, X) : null);
  }, [Q, re, a, se, X, Se]), ke = (A) => {
    const G = A.target.value;
    te || Z(G), Q && K(null);
  }, ze = (A) => {
    A.key === "Enter" ? (A.preventDefault(), Q ? V && (Se(V), le()) : ne()) : A.key === "Escape" ? Q && (A.preventDefault(), le()) : A.key === "ArrowDown" && !Q ? (A.preventDefault(), st()) : A.key === "Tab" && Q && fe(!1), P?.(A);
  }, Fe = (A) => {
    ne(), B?.(A);
  }, Te = (A) => {
    let G = null;
    switch (A.key) {
      case "ArrowLeft":
        G = ht(j, -1), A.preventDefault();
        break;
      case "ArrowRight":
        G = ht(j, 1), A.preventDefault();
        break;
      case "ArrowUp":
        G = ht(j, -7), A.preventDefault();
        break;
      case "ArrowDown":
        G = ht(j, 7), A.preventDefault();
        break;
      case "Home":
        G = ht(j, -sr(j)), A.preventDefault();
        break;
      case "End":
        G = ht(j, 6 - sr(j)), A.preventDefault();
        break;
      case "PageUp":
        G = yn(j, A.shiftKey ? -12 : -1), A.preventDefault();
        break;
      case "PageDown":
        G = yn(j, A.shiftKey ? 12 : 1), A.preventDefault();
        break;
      case "Enter":
      case " ":
        A.preventDefault(), Qe(j);
        break;
      case "Escape":
        A.preventDefault(), le();
        break;
      case "Tab":
        fe(!1);
        break;
    }
    if (G) {
      const xe = Ee(G);
      U(xe), setTimeout(() => Pe(xe), 0);
    }
  };
  be(() => {
    if (!Q) return;
    const A = (G) => {
      k.current && !k.current.contains(G.target) && le();
    };
    return document.addEventListener("mousedown", A), () => document.removeEventListener("mousedown", A);
  }, [Q, le]), be(() => {
    if (!Q) return;
    const A = (G) => {
      G.key === "Escape" && le();
    };
    return document.addEventListener("keydown", A), () => document.removeEventListener("keydown", A);
  }, [Q, le]);
  const dt = () => {
    te || Z(""), D?.(""), C?.(""), L.current?.focus();
  }, Oe = Q && V ? vn(V, a, x) : te ? s ? vn(on(s, a) ?? $t(), a, x) : "" : re, yt = te ? !!s : re.length > 0, vt = f || Q, Ge = { year: j.year, month: j.month }, ot = new Date(Ge.year, Ge.month - 1, 1).getDay(), F = {
    year: Ge.year,
    month: Ge.month,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0
  }, _e = [];
  for (let A = 0; A < Yp; A += 1)
    _e.push(ht(F, A - ot));
  const Ye = V ? Be(V) : ie ? Be(ie) : null, Tt = Be($t()), St = `${Ge.year}-${Ue(Ge.month)}`, At = pe(
    () => new Intl.DateTimeFormat(x, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    }),
    [x]
  ), Lt = new Intl.DateTimeFormat(x, {
    month: "long",
    year: "numeric"
  }).format(new Date(Ge.year, Ge.month - 1, 1)), Vt = Array.from(
    { length: 7 },
    (A, G) => new Intl.DateTimeFormat(x, { weekday: "short" }).format(
      new Date(2021, 0, 3 + G)
    )
  ), Ut = t === "xs" ? de.dtDatepickerInputXs : t === "sm" ? de.dtDatepickerInputSm : t === "lg" ? de.dtDatepickerInputLg : t === "xl" ? de.dtDatepickerInputXl : de.dtDatepickerInputMd, Nn = /* @__PURE__ */ $(
    "div",
    {
      className: de.dtDatepickerCalendar,
      "aria-label": m ?? "Date picker",
      children: [
        /* @__PURE__ */ $("div", { className: de.dtDatepickerHeader, children: [
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: de.dtDatepickerNav,
              "aria-label": "Previous month",
              onClick: () => {
                const A = Ee(yn(j, -1));
                U(A), setTimeout(() => Pe(A), 0);
              },
              children: /* @__PURE__ */ r(De, { name: "chevron-left", size: 16 })
            }
          ),
          /* @__PURE__ */ r("span", { className: de.dtDatepickerTitle, children: Lt }),
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: de.dtDatepickerNav,
              "aria-label": "Next month",
              onClick: () => {
                const A = Ee(yn(j, 1));
                U(A), setTimeout(() => Pe(A), 0);
              },
              children: /* @__PURE__ */ r(De, { name: "chevron-right", size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ $(
          "div",
          {
            ref: T,
            role: "grid",
            className: de.dtDatepickerGrid,
            onKeyDown: Te,
            children: [
              /* @__PURE__ */ r("div", { role: "row", className: de.dtDatepickerWeekRow, children: Vt.map((A) => /* @__PURE__ */ r(
                "div",
                {
                  role: "columnheader",
                  className: de.dtDatepickerWeekday,
                  children: A
                },
                A
              )) }),
              Array.from({ length: 6 }, (A, G) => /* @__PURE__ */ r("div", { role: "row", className: de.dtDatepickerRow, children: _e.slice(G * 7, G * 7 + 7).map((xe) => {
                const $e = Be(xe), Dt = me(xe), zt = $e.startsWith(St);
                return /* @__PURE__ */ r(
                  "button",
                  {
                    type: "button",
                    role: "gridcell",
                    "data-date": $e,
                    tabIndex: $e === Be(j) ? 0 : -1,
                    "aria-selected": $e === Ye || void 0,
                    "aria-disabled": Dt || void 0,
                    "aria-label": At.format(
                      new Date(xe.year, xe.month - 1, xe.day)
                    ),
                    className: [
                      de.dtDatepickerDay,
                      zt ? null : de.dtDatepickerDayOutside,
                      $e === Tt ? de.dtDatepickerDayToday : null,
                      $e === Ye ? de.dtDatepickerDaySelected : null,
                      Dt ? de.dtDatepickerDayDisabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => Qe(xe),
                    onFocus: () => U(xe),
                    children: xe.day
                  },
                  $e
                );
              }) }, G))
            ]
          }
        ),
        i && /* @__PURE__ */ $("div", { className: de.dtDatepickerTime, children: [
          r1.map((A) => /* @__PURE__ */ $("label", { className: de.dtDatepickerTimeField, children: [
            /* @__PURE__ */ r("span", { className: de.dtDatepickerTimeLabel, children: xn(A) }),
            /* @__PURE__ */ $("div", { className: de.dtDatepickerTimeControl, children: [
              /* @__PURE__ */ r(
                "input",
                {
                  className: de.dtDatepickerTimeInput,
                  inputMode: "numeric",
                  "aria-label": xn(A),
                  value: Ue((V ?? ie ?? $t())[A]),
                  onChange: (G) => Xe(A, G.target.value),
                  onKeyDown: (G) => {
                    G.key === "ArrowUp" ? (G.preventDefault(), qe(A, 1)) : G.key === "ArrowDown" ? (G.preventDefault(), qe(A, -1)) : G.key === "Enter" && (G.preventDefault(), R());
                  }
                }
              ),
              /* @__PURE__ */ $("span", { className: de.dtDatepickerTimeButtons, children: [
                /* @__PURE__ */ r(
                  "button",
                  {
                    type: "button",
                    "aria-label": `Increase ${xn(A).toLowerCase()}`,
                    onClick: () => qe(A, 1),
                    children: /* @__PURE__ */ r(De, { name: "chevron-up", size: 11 })
                  }
                ),
                /* @__PURE__ */ r(
                  "button",
                  {
                    type: "button",
                    "aria-label": `Decrease ${xn(A).toLowerCase()}`,
                    onClick: () => qe(A, -1),
                    children: /* @__PURE__ */ r(De, { name: "chevron-down", size: 11 })
                  }
                )
              ] })
            ] })
          ] }, A)),
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: de.dtDatepickerOk,
              onClick: R,
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
      ref: k,
      className: [
        de.dtDatepicker,
        f ? de.dtDatepickerInline : null,
        O
      ].filter(Boolean).join(" "),
      children: [
        !f && /* @__PURE__ */ $(ue, { children: [
          /* @__PURE__ */ r(
            "input",
            {
              ref: rt,
              type: "text",
              autoComplete: "off",
              value: Oe,
              disabled: h,
              readOnly: _,
              placeholder: w,
              tabIndex: y,
              role: p ? void 0 : "combobox",
              "aria-label": m ?? "Date",
              "aria-haspopup": p ? void 0 : "dialog",
              "aria-expanded": p ? void 0 : vt,
              "aria-controls": p ? void 0 : W,
              "aria-invalid": n || void 0,
              className: [
                de.dtDatepickerInput,
                Ut,
                n ? de.dtDatepickerInputInvalid : null
              ].filter(Boolean).join(" "),
              onChange: ke,
              onKeyDown: ze,
              onBlur: Fe,
              onClick: () => {
                p || it();
              },
              ...z
            }
          ),
          v && !h && yt && /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: [
                de.dtDatepickerClear,
                p ? de.dtDatepickerClearInset : null
              ].filter(Boolean).join(" "),
              "aria-label": c ?? "Clear",
              onClick: dt,
              children: /* @__PURE__ */ r(De, { name: "close", size: 14 })
            }
          ),
          p && /* @__PURE__ */ r(
            "button",
            {
              ref: E,
              type: "button",
              className: [
                de.dtDatepickerTrigger,
                Q ? de.dtDatepickerTriggerOpen : null
              ].filter(Boolean).join(" "),
              "aria-label": g ?? "Open calendar",
              "aria-haspopup": "dialog",
              "aria-expanded": Q,
              "aria-controls": W,
              disabled: h,
              onClick: it,
              children: /* @__PURE__ */ r(De, { name: "calendar", size: 16 })
            }
          )
        ] }),
        vt && /* @__PURE__ */ r(
          "div",
          {
            id: W,
            role: f ? void 0 : "dialog",
            className: f ? void 0 : de.dtDatepickerPopup,
            children: Nn
          }
        )
      ]
    }
  );
}), Nt = {}, Ag = ({
  value: e = 0,
  stars: t = 5,
  readOnly: n = !1,
  disabled: s = !1,
  ariaLabel: o = "Rating",
  clearLabel: a = "Clear",
  rateLabel: u = "Rate",
  tabIndex: l = 0,
  className: i,
  onChange: p,
  onValueChange: v
}) => {
  const [f, S] = H(e), x = q(
    (h) => Math.min(t, Math.max(1, h)),
    [t]
  ), D = q(
    (h) => {
      p?.(h), v?.(h);
    },
    [p, v]
  ), C = q(
    (h) => {
      n || s || (D(h), S(h));
    },
    [n, s, D]
  ), N = (h) => {
    if (n || s) return;
    const _ = f > 0 ? f : 1;
    switch (h.key) {
      case "ArrowRight":
      case "ArrowUp":
        h.preventDefault(), C(x(_ + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        h.preventDefault(), C(x(_ - 1));
        break;
      case "Home":
        h.preventDefault(), C(1);
        break;
      case "End":
        h.preventDefault(), C(t);
        break;
    }
  }, b = Array.from({ length: t }, (h, _) => _ + 1);
  return /* @__PURE__ */ $(
    "div",
    {
      role: "radiogroup",
      "aria-label": o,
      "aria-readonly": n || void 0,
      className: [
        Nt.dtRating,
        n ? Nt.dtRatingReadonly : null,
        s ? Nt.dtRatingDisabled : null,
        i
      ].filter(Boolean).join(" "),
      onKeyDown: N,
      children: [
        !n && !s && /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: Nt.dtRatingClear,
            "aria-label": a,
            tabIndex: e === 0 ? l : -1,
            disabled: s,
            onClick: () => C(0),
            children: /* @__PURE__ */ r(De, { name: "ban", size: 16 })
          }
        ),
        b.map((h) => {
          const _ = h <= e, w = h === (e > 0 ? e : f);
          return /* @__PURE__ */ $(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": _,
              "aria-posinset": h,
              "aria-setsize": t,
              "aria-label": `${u} ${h}`,
              tabIndex: w ? l : -1,
              "aria-disabled": s || n || void 0,
              disabled: s || n,
              className: [
                Nt.dtRatingItem,
                _ ? Nt.dtRatingItemFilled : null
              ].filter(Boolean).join(" "),
              onClick: () => C(h),
              onFocus: () => S(h),
              children: [
                /* @__PURE__ */ r("span", { className: Nt.dtRatingIconFilled, "aria-hidden": "true", children: /* @__PURE__ */ r(De, { name: "star", size: 20 }) }),
                /* @__PURE__ */ r("span", { className: Nt.dtRatingIconEmpty, "aria-hidden": "true", children: /* @__PURE__ */ r(De, { name: "star-outline", size: 20 }) })
              ]
            },
            h
          );
        })
      ]
    }
  );
}, jt = {};
function at(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const Lg = ({
  value: e = 0,
  valueMin: t = 0,
  valueMax: n = 100,
  min: s = 0,
  max: o = 100,
  step: a = 1,
  range: u = !1,
  orientation: l = "horizontal",
  disabled: i = !1,
  label: p = "Value",
  minLabel: v = "Min",
  maxLabel: f = "Max",
  tabIndex: S = 0,
  className: x,
  onChange: D,
  onInput: C,
  onValueChange: N,
  onInputChange: b
}) => {
  const h = Y(null), _ = Y(null), [w, m] = H(null), g = w ?? e, c = pe(() => at(g, s, o), [g, s, o]), y = pe(
    () => at(u ? t : c, s, o),
    [u, t, c, s, o]
  ), O = pe(
    () => at(u ? Math.max(n, y) : c, s, o),
    [u, n, y, c, s, o]
  ), B = q(
    (j) => {
      const U = o - s;
      return U <= 0 ? 0 : (at(j, s, o) - s) / U * 100;
    },
    [s, o]
  ), P = q(
    (j, U) => {
      const se = h.current;
      if (!se) return s;
      const X = se.getBoundingClientRect();
      let oe;
      l === "vertical" ? oe = 1 - (U - X.top) / X.height : oe = (j - X.left) / X.width;
      const ie = s + at(oe, 0, 1) * (o - s);
      return a > 0 ? at(Math.round(ie / a) * a, s, o) : at(ie, s, o);
    },
    [s, o, a, l]
  ), z = q(
    (j) => {
      typeof j == "number" && m(j), D?.(j), N?.(j);
    },
    [D, N]
  ), d = q(
    (j) => {
      typeof j == "number" && m(j), C?.(j), b?.(j);
    },
    [C, b]
  ), k = q(
    (j, U, se) => {
      const X = P(U, se);
      let oe;
      u ? j === "min" ? oe = { min: Math.min(X, O), max: O } : oe = { min: y, max: Math.max(X, y) } : oe = X, d(oe), _.current === null && z(oe);
    },
    [u, P, y, O, d, z]
  ), L = q(
    (j, U) => {
      const se = (a > 0 ? a : 1) * U;
      let X;
      u ? j === "min" ? X = {
        min: at(y + se, s, O),
        max: O
      } : X = {
        min: y,
        max: at(O + se, y, o)
      } : X = at(c + se, s, o), z(X);
    },
    [u, a, s, o, y, O, c, z]
  ), E = (j, U) => {
    if (!i)
      switch (U.key) {
        case "ArrowLeft":
        case "ArrowDown":
          U.preventDefault(), L(j, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          U.preventDefault(), L(j, 1);
          break;
        case "Home":
          U.preventDefault(), z(u ? j === "min" ? { min: s, max: O } : { min: y, max: y } : s);
          break;
        case "End":
          U.preventDefault(), z(u ? j === "min" ? { min: O, max: O } : { min: y, max: o } : o);
          break;
      }
  }, T = (j, U) => {
    i || (U.preventDefault(), U.currentTarget.focus(), typeof U.currentTarget.setPointerCapture == "function" && U.currentTarget.setPointerCapture(U.pointerId), _.current = { key: j, pointerId: U.pointerId }, k(j, U.clientX, U.clientY));
  }, W = (j) => {
    !_.current || _.current.pointerId !== j.pointerId || (j.preventDefault(), k(_.current.key, j.clientX, j.clientY));
  }, te = (j) => {
    !_.current || _.current.pointerId !== j.pointerId || (_.current = null, j.preventDefault(), z(u ? { min: y, max: O } : c));
  }, [re, Z] = H(null), Q = B(y), fe = B(O), V = u ? Q : 0, K = fe;
  return /* @__PURE__ */ r(
    "div",
    {
      className: [
        jt.dtSlider,
        l === "vertical" ? jt.dtSliderVertical : null,
        i ? jt.dtSliderDisabled : null,
        x
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ $("div", { ref: h, className: jt.dtSliderTrack, children: [
        /* @__PURE__ */ r(
          "div",
          {
            className: jt.dtSliderRange,
            style: l === "vertical" ? { bottom: `${V}%`, height: `${K - V}%` } : { left: `${V}%`, width: `${K - V}%` }
          }
        ),
        /* @__PURE__ */ r(
          "div",
          {
            role: "slider",
            "aria-valuemin": s,
            "aria-valuemax": o,
            "aria-valuenow": Math.round(y),
            "aria-orientation": l,
            "aria-label": u ? v : p,
            "aria-disabled": i || void 0,
            tabIndex: i || u && re === "max" ? -1 : S,
            className: jt.dtSliderHandle,
            style: l === "vertical" ? { bottom: `calc(${Q}% - 8px)` } : { left: `calc(${Q}% - 8px)` },
            onKeyDown: (j) => E("min", j),
            onPointerDown: (j) => T("min", j),
            onPointerMove: W,
            onPointerUp: te,
            onFocus: () => Z("min")
          }
        ),
        u && /* @__PURE__ */ r(
          "div",
          {
            role: "slider",
            "aria-valuemin": s,
            "aria-valuemax": o,
            "aria-valuenow": Math.round(O),
            "aria-orientation": l,
            "aria-label": f,
            "aria-disabled": i || void 0,
            tabIndex: i || re === "min" ? -1 : S,
            className: jt.dtSliderHandle,
            style: l === "vertical" ? { bottom: `calc(${fe}% - 8px)` } : { left: `calc(${fe}% - 8px)` },
            onKeyDown: (j) => E("max", j),
            onPointerDown: (j) => T("max", j),
            onPointerMove: W,
            onPointerUp: te,
            onFocus: () => Z("max")
          }
        )
      ] })
    }
  );
}, ye = {}, s1 = "-10675199.02:48:05.4775808", o1 = "10675199.02:48:05.4775808", gt = 86400, bt = 3600, nt = 60, Mn = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, ar = {
  days: gt,
  hours: bt,
  minutes: nt,
  seconds: 1
}, a1 = {
  day: gt,
  hour: bt,
  minute: nt,
  second: 1
};
function Ft(e) {
  return String(e).padStart(2, "0");
}
function un(e) {
  const t = e.trim();
  if (!t) return null;
  let n = 1, s = t;
  s.startsWith("-") ? (n = -1, s = s.slice(1)) : s.startsWith("+") && (s = s.slice(1));
  const o = /^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(
    s
  );
  if (o) {
    if (!o.slice(1).some((f) => f != null)) return null;
    const l = o[1] != null ? Number(o[1]) : 0, i = o[2] != null ? Number(o[2]) : 0, p = o[3] != null ? Number(o[3]) : 0, v = o[4] != null ? Number(o[4]) : 0;
    return n * (l * gt + i * bt + p * nt + v);
  }
  const a = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(s);
  if (a) {
    const u = a[1] != null ? Number(a[1]) : 0, l = Number(a[2]), i = Number(a[3]), p = a[4] != null ? Number(a[4]) : 0, v = a[5] != null ? +`0.${a[5]}` : 0;
    return l > 23 || i > 59 || p > 59 ? null : n * (u * gt + l * bt + i * nt + p + v);
  }
  return null;
}
function l1(e) {
  return e.days * gt + e.hours * bt + e.minutes * nt + e.seconds;
}
function lr(e) {
  let t = Math.abs(e);
  const n = Math.floor(t / gt);
  t %= gt;
  const s = Math.floor(t / bt);
  t %= bt;
  const o = Math.floor(t / nt), a = Math.round(t % nt * 1e9) / 1e9;
  return { days: n, hours: s, minutes: o, seconds: a };
}
function Ln(e, t) {
  const n = e < 0;
  let s = Math.abs(e);
  t === "minute" ? s = Math.round(s / nt) * nt : t === "hour" ? s = Math.round(s / bt) * bt : t === "day" && (s = Math.round(s / gt) * gt);
  let o = Math.round(s % nt);
  const a = o === 60 ? 1 : 0;
  o = o === 60 ? 0 : o;
  const u = Math.floor(s / nt) + a, l = u % 60, i = Math.floor(u / 60), p = i % 24, v = Math.floor(i / 24), f = n ? "-" : "", S = v > 0 ? `${v}.` : "";
  switch (t) {
    case "day":
      return `${f}${v} day${v === 1 ? "" : "s"}`;
    case "hour":
      return `${f}${S}${Ft(p)}`;
    case "minute":
      return `${f}${S}${Ft(p)}:${Ft(l)}`;
    default:
      return `${f}${S}${Ft(p)}:${Ft(l)}:${Ft(o)}`;
  }
}
function cr(e, t = "second") {
  const n = un(e);
  return n === null ? "" : Ln(n, t);
}
function In(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const Rg = ve(
  function({
    size: t = "md",
    invalid: n = !1,
    value: s,
    defaultValue: o,
    min: a = s1,
    max: u = o1,
    step: l = "1",
    precision: i = "second",
    showDays: p = !0,
    showHours: v = !0,
    showMinutes: f = !0,
    showSeconds: S = !0,
    allowClear: x = !1,
    inline: D = !1,
    onChange: C,
    onValueChange: N,
    onOpen: b,
    onClose: h,
    disabled: _,
    placeholder: w,
    ariaLabel: m,
    triggerLabel: g,
    clearLabel: c,
    tabIndex: y,
    className: O,
    onBlur: B,
    onKeyDown: P,
    ...z
  }, d) {
    const k = Y(null), L = Y(null), E = Y(null), T = Ne(), W = s !== void 0, [te, re] = H(
      () => o != null ? cr(o, i) : ""
    ), [Z, Q] = H(!1), [fe, V] = H(null), [K, j] = H(null), U = pe(
      () => un(a) ?? -Number.MAX_SAFE_INTEGER,
      [a]
    ), se = pe(
      () => un(u) ?? Number.MAX_SAFE_INTEGER,
      [u]
    ), X = pe(() => {
      const F = Number.parseFloat(l);
      return Number.isNaN(F) || F <= 0 ? 1 : F;
    }, [l]), oe = pe(() => {
      const F = W ? s ?? "" : te;
      return F ? un(F) : null;
    }, [s, te, W]), ie = q(
      (F) => {
        const _e = F === null ? "" : Ln(F, i);
        W || re(_e), C?.(_e), N?.(_e);
      },
      [W, i, C, N]
    ), me = q(
      (F) => {
        F && fe !== null && ie(fe), Q(!1), V(null), j(null), h?.(), D || E.current?.focus();
      },
      [D, fe, ie, h]
    ), Ee = q(() => {
      _ || (V(oe ?? 0), Q(!0), b?.());
    }, [_, oe, b]), Se = q(() => {
      Z ? me(!1) : Ee();
    }, [Z, me, Ee]), rt = q(
      (F, _e) => {
        V((Ye) => {
          const St = (Ye ?? oe ?? 0) + _e * X * ar[F];
          return In(St, U, se);
        });
      },
      [oe, X, U, se]
    ), le = q(
      (F) => {
        const _e = K?.[F];
        if (_e == null) return;
        const Ye = Number.parseFloat(_e), Tt = Number.isNaN(Ye) ? 0 : Ye;
        V((St) => {
          const At = St ?? oe ?? 0, Lt = lr(At);
          Lt[F] = Tt;
          const Ut = (At < 0 ? -1 : 1) * l1(Lt);
          return In(Ut, U, se);
        }), j(null);
      },
      [K, oe, U, se]
    ), st = (F, _e) => {
      j((Ye) => ({ ...Ye ?? {}, [F]: _e }));
    }, it = (F, _e) => {
      switch (_e.key) {
        case "ArrowUp":
          _e.preventDefault(), le(F), rt(F, 1);
          break;
        case "ArrowDown":
          _e.preventDefault(), le(F), rt(F, -1);
          break;
        case "Home":
          _e.preventDefault(), le(F), V(U);
          break;
        case "End":
          _e.preventDefault(), le(F), V(se);
          break;
        case "Enter":
          _e.preventDefault(), le(F), me(!0);
          break;
      }
    }, Pe = q(() => {
      if (Z) return;
      const F = un(te);
      ie(F !== null ? In(F, U, se) : null);
    }, [Z, te, U, se, ie]), Qe = (F) => {
      W || re(F.target.value);
    }, qe = (F) => {
      F.key === "Enter" ? (F.preventDefault(), Z ? me(!0) : Pe()) : F.key === "Escape" && Z ? (F.preventDefault(), me(!1)) : F.key === "ArrowDown" && !Z ? (F.preventDefault(), Ee()) : F.key === "Tab" && Z && Q(!1), P?.(F);
    }, Xe = (F) => {
      Pe(), B?.(F);
    }, R = () => {
      W || re(""), C?.(""), N?.(""), L.current?.focus();
    };
    be(() => {
      if (!Z) return;
      const F = (_e) => {
        k.current && !k.current.contains(_e.target) && me(!1);
      };
      return document.addEventListener("mousedown", F), () => document.removeEventListener("mousedown", F);
    }, [Z, me]), be(() => {
      if (!Z) return;
      const F = (_e) => {
        _e.key === "Escape" && me(!1);
      };
      return document.addEventListener("keydown", F), () => document.removeEventListener("keydown", F);
    }, [Z, me]), be(() => {
      if (D && fe !== null) {
        const F = oe;
        (F === null || Math.abs(fe - F) > 1e-9) && ie(fe);
      }
    }, [D, fe, oe, ie]);
    const ne = q(
      (F) => {
        L.current = F, typeof d == "function" ? d(F) : d && (d.current = F);
      },
      [d]
    ), ke = W ? s ? cr(s, i) : "" : te, ze = W ? !!s : te.length > 0, Fe = D || Z, Te = fe ?? oe ?? 0, dt = lr(Te), Oe = a1[i], vt = ["days", "hours", "minutes", "seconds"].filter(
      (F) => ar[F] >= Oe && (F === "days" ? p : F === "hours" ? v : F === "minutes" ? f : S)
    ), Ge = t === "xs" ? ye.dtTimespanpickerInputXs : t === "sm" ? ye.dtTimespanpickerInputSm : t === "lg" ? ye.dtTimespanpickerInputLg : t === "xl" ? ye.dtTimespanpickerInputXl : ye.dtTimespanpickerInputMd, ot = /* @__PURE__ */ $("div", { className: ye.dtTimespanpickerPanel, children: [
      /* @__PURE__ */ r("div", { className: ye.dtTimespanpickerPreview, "aria-live": "polite", children: Ln(Te, i) }),
      /* @__PURE__ */ r("div", { className: ye.dtTimespanpickerUnits, children: vt.map((F) => /* @__PURE__ */ $("label", { className: ye.dtTimespanpickerUnit, children: [
        /* @__PURE__ */ r("span", { className: ye.dtTimespanpickerUnitLabel, children: Mn[F] }),
        /* @__PURE__ */ $("span", { className: ye.dtTimespanpickerUnitControl, children: [
          /* @__PURE__ */ r(
            "input",
            {
              className: ye.dtTimespanpickerUnitInput,
              inputMode: "decimal",
              value: K?.[F] ?? String(dt[F]),
              onChange: (_e) => st(F, _e.target.value),
              onKeyDown: (_e) => it(F, _e),
              onBlur: () => le(F)
            }
          ),
          /* @__PURE__ */ $("span", { className: ye.dtTimespanpickerUnitButtons, children: [
            /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${Mn[F].toLowerCase()}`,
                onClick: () => {
                  le(F), rt(F, 1);
                },
                children: /* @__PURE__ */ r(De, { name: "chevron-up", size: 11 })
              }
            ),
            /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${Mn[F].toLowerCase()}`,
                onClick: () => {
                  le(F), rt(F, -1);
                },
                children: /* @__PURE__ */ r(De, { name: "chevron-down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, F)) }),
      /* @__PURE__ */ r("div", { className: ye.dtTimespanpickerFooter, children: /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          className: ye.dtTimespanpickerOk,
          onClick: () => me(!0),
          children: "OK"
        }
      ) })
    ] });
    return /* @__PURE__ */ $(
      "div",
      {
        ref: k,
        className: [
          ye.dtTimespanpicker,
          D ? ye.dtTimespanpickerInline : null,
          O
        ].filter(Boolean).join(" "),
        children: [
          !D && /* @__PURE__ */ $(ue, { children: [
            /* @__PURE__ */ r(
              "input",
              {
                ref: ne,
                type: "text",
                autoComplete: "off",
                value: ke,
                disabled: _,
                placeholder: w,
                tabIndex: y,
                role: "combobox",
                "aria-label": m ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": Z,
                "aria-controls": T,
                "aria-invalid": n || void 0,
                className: [
                  ye.dtTimespanpickerInput,
                  Ge,
                  n ? ye.dtTimespanpickerInputInvalid : null
                ].filter(Boolean).join(" "),
                onChange: Qe,
                onKeyDown: qe,
                onBlur: Xe,
                ...z
              }
            ),
            x && !_ && ze && /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                className: ye.dtTimespanpickerClear,
                "aria-label": c ?? "Clear",
                onClick: R,
                children: /* @__PURE__ */ r(De, { name: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ r(
              "button",
              {
                ref: E,
                type: "button",
                className: [
                  ye.dtTimespanpickerTrigger,
                  Z ? ye.dtTimespanpickerTriggerOpen : null
                ].filter(Boolean).join(" "),
                "aria-label": g ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": Z,
                "aria-controls": T,
                disabled: _,
                onClick: Se,
                children: /* @__PURE__ */ r(De, { name: "clock", size: 16 })
              }
            )
          ] }),
          Fe && /* @__PURE__ */ r(
            "div",
            {
              id: T,
              role: D ? void 0 : "dialog",
              "aria-label": m ?? "Time span picker",
              className: D ? void 0 : ye.dtTimespanpickerPopup,
              children: ot
            }
          )
        ]
      }
    );
  }
), c1 = "_wrapper_gfb15_1", i1 = "_cells_gfb15_8", d1 = "_cell_gfb15_8", u1 = "_invalid_gfb15_63", f1 = "_live_gfb15_72", Et = {
  wrapper: c1,
  cells: i1,
  cell: d1,
  "cell-sm": "_cell-sm_gfb15_45",
  "cell-md": "_cell-md_gfb15_51",
  "cell-lg": "_cell-lg_gfb15_57",
  invalid: u1,
  live: f1
};
function ir(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const Bg = ve(
  function({
    length: t = 6,
    value: n,
    defaultValue: s,
    onChange: o,
    invalid: a = !1,
    size: u = "md",
    autoFocus: l = !1,
    disabled: i = !1,
    label: p = "Security code",
    liveAnnounce: v = !0,
    className: f,
    "aria-label": S
  }, x) {
    const D = Ne(), C = n !== void 0, [N, b] = H(ir(s).join("")), h = C ? ir(n).join("") : N, _ = Array.from({ length: t }, (z, d) => h[d] ?? ""), w = Y([]), [m, g] = H(""), c = (z) => {
      C || b(z), o?.(z);
    }, y = (z) => {
      const d = w.current[z];
      d && !d.disabled && (d.focus(), d.select());
    }, O = (z, d) => {
      const k = d.replace(/\D/g, "").slice(-1), L = h.split("");
      if (k) {
        L[z] = k;
        const E = L.join("").slice(0, t);
        c(E), E.length < t ? y(z + 1) : v && g("Code complete");
      }
    }, B = (z, d) => {
      if (d.key === "Backspace") {
        if (d.preventDefault(), h[z]) {
          const k = h.split("");
          k[z] = "", c(k.join(""));
        } else if (z > 0) {
          const k = h.split("");
          k[z - 1] = "", c(k.join("")), y(z - 1);
        }
      } else d.key === "ArrowLeft" && z > 0 ? (d.preventDefault(), y(z - 1)) : d.key === "ArrowRight" && z < t - 1 ? (d.preventDefault(), y(z + 1)) : d.key === "Home" ? (d.preventDefault(), y(0)) : d.key === "End" && (d.preventDefault(), y(t - 1));
    }, P = (z, d) => {
      d.preventDefault();
      const k = d.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!k) return;
      const L = h.split("");
      let E = 0;
      for (let W = 0; W < k.length && z + W < t; W++)
        L[z + W] = k[W] ?? "", E++;
      const T = L.join("");
      c(T), T.length >= t ? v && g("Code complete") : y(z + E);
    };
    return /* @__PURE__ */ $(
      "div",
      {
        className: [Et.wrapper, f].filter(Boolean).join(" "),
        role: "group",
        "aria-label": S ?? p,
        "data-invalid": a || void 0,
        children: [
          /* @__PURE__ */ r("div", { className: [Et.cells, Et[u]].join(" "), children: _.map((z, d) => /* @__PURE__ */ r(
            "input",
            {
              ref: (k) => {
                w.current[d] = k, d === 0 && x && (typeof x == "function" ? x(k) : x.current = k);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: z,
              disabled: i,
              "aria-label": `Digit ${d + 1} of ${t}`,
              "aria-invalid": a && z !== "" ? !0 : void 0,
              autoFocus: l && d === 0,
              className: [Et.cell, Et[`cell-${u}`], a ? Et.invalid : null].filter(Boolean).join(" "),
              onChange: (k) => O(d, k.target.value),
              onKeyDown: (k) => B(d, k),
              onPaste: (k) => P(d, k),
              onFocus: (k) => k.target.select(),
              onBlur: () => {
                v && g("");
              }
            },
            d
          )) }),
          v && /* @__PURE__ */ r("span", { id: `${D}-live`, role: "status", "aria-live": "polite", className: Et.live, children: m })
        ]
      }
    );
  }
), _1 = "_wrapper_26gop_1", p1 = "_header_26gop_7", h1 = "_label_26gop_15", m1 = "_clear_26gop_22", g1 = "_canvas_26gop_53", b1 = "_disabled_26gop_69", Ht = {
  wrapper: _1,
  header: p1,
  label: h1,
  clear: m1,
  canvas: g1,
  disabled: b1
}, Pg = ve(
  function({
    value: t,
    defaultValue: n,
    onChange: s,
    penColor: o = "#1c1c1c",
    penWidth: a = 2.5,
    clearLabel: u = "Clear",
    ariaLabel: l = "Signature",
    width: i,
    height: p = 140,
    disabled: v = !1,
    className: f
  }, S) {
    const x = Y(null), D = Y(!1), C = Y(!1), N = Y({ x: 0, y: 0 });
    be(() => {
      const c = x.current;
      if (!c) return;
      const y = window.devicePixelRatio || 1, O = Math.round((i ?? c.clientWidth) * y), B = Math.round(p * y);
      (c.width !== O || c.height !== B) && (c.width = O, c.height = B);
      const P = c.getContext("2d");
      if (!P) return;
      P.setTransform(y, 0, 0, y, 0, 0), P.lineWidth = a, P.strokeStyle = o, P.lineCap = "round", P.lineJoin = "round";
      const z = t ?? n;
      if (z) {
        const d = new Image();
        d.onload = () => {
          P.drawImage(d, 0, 0, c.clientWidth, p);
        }, d.src = z;
      }
    }, [t, n, o, a, i, p]);
    const b = () => {
      const c = x.current;
      if (!c) return;
      const y = c.toDataURL("image/png");
      s?.(y);
    }, h = () => {
      const c = x.current;
      if (!c) return;
      const y = c.getContext("2d");
      y && y.clearRect(0, 0, c.width, c.height), s?.("");
    };
    Bn(S, () => ({
      clear: h,
      toDataURL: (c = "image/png", y) => x.current?.toDataURL(c, y) ?? ""
    }));
    const _ = (c) => {
      const y = c.currentTarget.getBoundingClientRect();
      return { x: c.clientX - y.left, y: c.clientY - y.top };
    }, w = (c) => {
      v || (c.preventDefault(), typeof c.currentTarget.setPointerCapture == "function" && c.currentTarget.setPointerCapture(c.pointerId), D.current = !0, C.current = !1, N.current = _(c));
    }, m = (c) => {
      if (!D.current) return;
      c.preventDefault();
      const y = c.currentTarget.getContext("2d");
      if (!y) return;
      const O = _(c);
      y.beginPath(), y.moveTo(N.current.x, N.current.y), y.lineTo(O.x, O.y), y.stroke(), N.current = O, C.current = !0;
    }, g = (c) => {
      D.current && (c.preventDefault(), D.current = !1, C.current && b());
    };
    return /* @__PURE__ */ $("div", { className: [Ht.wrapper, f, v ? Ht.disabled : null].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ $("div", { className: Ht.header, children: [
        /* @__PURE__ */ r("span", { className: Ht.label, children: l }),
        /* @__PURE__ */ r("button", { type: "button", className: Ht.clear, onClick: h, disabled: v, children: u })
      ] }),
      /* @__PURE__ */ r(
        "canvas",
        {
          ref: x,
          role: "img",
          "aria-label": l,
          "aria-disabled": v || void 0,
          style: { width: i ? `${i}px` : void 0, height: `${p}px` },
          className: Ht.canvas,
          onPointerDown: w,
          onPointerMove: m,
          onPointerUp: g,
          onPointerCancel: g
        }
      )
    ] });
  }
), y1 = "_wrapper_1v5uo_1", v1 = "_trigger_1v5uo_7", x1 = "_list_1v5uo_35", w1 = "_row_1v5uo_44", k1 = "_name_1v5uo_59", $1 = "_size_1v5uo_68", N1 = "_progress_1v5uo_74", S1 = "_fill_1v5uo_82", D1 = "_status_1v5uo_99", z1 = "_remove_1v5uo_106", lt = {
  wrapper: y1,
  trigger: v1,
  list: x1,
  row: w1,
  name: k1,
  size: $1,
  progress: N1,
  fill: S1,
  status: D1,
  remove: z1
};
function O1(e) {
  return e > 0 ? `${Math.max(1, Math.round(e / 1024))} KB` : "0 KB";
}
const qg = ve(function({
  url: t,
  multiple: n = !1,
  parameterName: s = "files",
  auto: o = !0,
  headers: a,
  accept: u,
  chooseText: l = "Upload",
  children: i,
  onProgress: p,
  onComplete: v,
  onError: f
}, S) {
  const x = Y(null), [D, C] = H([]), N = Y(/* @__PURE__ */ new Map()), b = (g, c) => {
    C((y) => y.map((O) => O.file.name === g ? { ...O, ...c } : O));
  }, h = (g) => {
    if (!t) return;
    const c = new XMLHttpRequest();
    N.current.set(g.file.name, c);
    const y = new FormData();
    if (y.append(s, g.file), c.upload.addEventListener("progress", (O) => {
      if (!O.lengthComputable) return;
      const B = Math.round(O.loaded / O.total * 100);
      b(g.file.name, { state: "uploading", progress: B }), p?.(g.file.name, B);
    }), c.addEventListener("load", () => {
      c.status >= 200 && c.status < 300 ? (b(g.file.name, { state: "complete", progress: 100 }), v?.(g.file.name)) : (b(g.file.name, { state: "error", message: `HTTP ${c.status}` }), f?.(g.file.name, `HTTP ${c.status}`));
    }), c.addEventListener("error", () => {
      b(g.file.name, { state: "error", message: "Network error" }), f?.(g.file.name, "Network error");
    }), a)
      for (const [O, B] of Object.entries(a))
        c.setRequestHeader(O, B);
    c.open("POST", t), c.send(y), b(g.file.name, { state: "uploading", progress: 0 });
  }, _ = (g) => {
    if (!g) return;
    const c = [...g].map((y) => ({
      file: y,
      state: "pending",
      progress: 0
    }));
    C((y) => [...y, ...c]), x.current && (x.current.value = ""), o && c.forEach(h);
  }, w = (g) => {
    N.current.get(g)?.abort(), N.current.delete(g), C((y) => y.filter((O) => O.file.name !== g));
  }, m = i ?? /* @__PURE__ */ $("button", { type: "button", className: lt.trigger, onClick: () => x.current?.click(), children: [
    /* @__PURE__ */ r(De, { name: "upload", size: 14 }),
    l
  ] });
  return Bn(S, () => ({
    open: () => x.current?.click(),
    upload: () => D.forEach((g) => g.state === "pending" ? h(g) : null)
  })), /* @__PURE__ */ $("div", { className: lt.wrapper, children: [
    m,
    /* @__PURE__ */ r(
      "input",
      {
        ref: x,
        type: "file",
        hidden: !0,
        multiple: n,
        accept: u,
        "data-testid": "upload-input",
        onChange: (g) => _(g.target.files)
      }
    ),
    !i && D.length > 0 && /* @__PURE__ */ r("ul", { className: lt.list, children: D.map(({ file: g, state: c, progress: y, message: O }) => /* @__PURE__ */ $("li", { className: lt.row, "data-state": c, "data-testid": "upload-row", children: [
      /* @__PURE__ */ r("span", { className: lt.name, children: g.name }),
      /* @__PURE__ */ r("span", { className: lt.size, children: O1(g.size) }),
      /* @__PURE__ */ r(
        "span",
        {
          className: lt.progress,
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuenow": y,
          children: /* @__PURE__ */ r("span", { className: lt.fill, style: { width: `${y}%` } })
        }
      ),
      /* @__PURE__ */ r("span", { className: lt.status, role: "status", children: c === "uploading" ? "Uploading" : c === "complete" ? "Complete" : c === "error" ? O ?? "Failed" : "Pending" }),
      /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          className: lt.remove,
          "aria-label": `Remove ${g.name}`,
          onClick: () => w(g.name),
          children: /* @__PURE__ */ r(De, { name: "close", size: 14 })
        }
      )
    ] }, g.name)) })
  ] });
}), C1 = "_zone_ws0th_1", M1 = "_dragging_ws0th_23", I1 = "_caption_ws0th_28", j1 = "_browse_ws0th_40", E1 = "_disabled_ws0th_67", an = {
  zone: C1,
  dragging: M1,
  caption: I1,
  browse: j1,
  disabled: E1
};
function T1(e, t) {
  return t ? t.split(",").some((n) => {
    if (n = n.trim(), !n) return !1;
    if (n.startsWith(".")) return e.name.toLowerCase().endsWith(n.toLowerCase());
    if (n.endsWith("/*")) {
      const s = n.slice(0, -1);
      return e.type.startsWith(s);
    }
    return e.type === n;
  }) : !0;
}
const Fg = ve(function({
  accept: t,
  multiple: n = !1,
  onDrop: s,
  label: o = "Drop files here or browse",
  dragLabel: a = "Drop to attach",
  browseText: u = "Browse",
  disabled: l = !1,
  className: i
}, p) {
  const v = Y(null), [f, S] = H(!1), x = (h) => {
    if (!h || h.length === 0) return;
    const _ = [...h].filter((w) => T1(w, t ?? ""));
    _.length !== 0 && s?.(_);
  }, D = (h) => {
    l || (h.preventDefault(), S(!0));
  }, C = (h) => {
    l || (h.preventDefault(), h.dataTransfer.dropEffect = "copy", S(!0));
  }, N = (h) => {
    l || h.currentTarget.contains(h.relatedTarget) || S(!1);
  }, b = (h) => {
    l || (h.preventDefault(), S(!1), x(h.dataTransfer.files));
  };
  return Bn(p, () => ({
    open: () => v.current?.click()
  })), /* @__PURE__ */ $(
    "div",
    {
      role: "region",
      "aria-label": o,
      className: [an.zone, f ? an.dragging : null, l ? an.disabled : null, i].filter(Boolean).join(" "),
      onDragEnter: D,
      onDragOver: C,
      onDragLeave: N,
      onDrop: b,
      children: [
        /* @__PURE__ */ r("p", { className: an.caption, children: f ? a : o }),
        !l && /* @__PURE__ */ r("button", { type: "button", className: an.browse, onClick: () => v.current?.click(), children: u }),
        /* @__PURE__ */ r(
          "input",
          {
            ref: v,
            type: "file",
            hidden: !0,
            multiple: n,
            accept: t,
            "data-testid": "dropzone-input",
            onChange: (h) => {
              x(h.target.files), h.target.value = "";
            }
          }
        )
      ]
    }
  );
}), A1 = "_root_zkoiq_1", L1 = "_menubar_zkoiq_5", R1 = "_horizontal_zkoiq_15", B1 = "_vertical_zkoiq_20", P1 = "_itemWrapper_zkoiq_25", q1 = "_item_zkoiq_25", F1 = "_disabled_zkoiq_61", H1 = "_icon_zkoiq_68", K1 = "_text_zkoiq_75", W1 = "_caret_zkoiq_79", V1 = "_hasChildren_zkoiq_85", U1 = "_submenu_zkoiq_94", X1 = "_submenuItem_zkoiq_118", je = {
  root: A1,
  menubar: L1,
  horizontal: R1,
  vertical: B1,
  itemWrapper: P1,
  item: q1,
  disabled: F1,
  icon: H1,
  text: K1,
  caret: W1,
  hasChildren: V1,
  submenu: U1,
  submenuItem: X1
};
function ln(e) {
  return !!e.disabled;
}
function Hg({
  items: e,
  orientation: t = "horizontal",
  onClick: n,
  Click: s,
  ariaLabel: o = "Menu",
  className: a
}) {
  const u = Ne(), l = Y(null), i = Y(null), [p, v] = H(null), f = Y(0), S = Y(null), x = q(
    (b) => {
      const h = { text: b.text, value: b.value, path: b.path };
      (n ?? s)?.(h);
    },
    [n, s]
  ), D = (b, h) => {
    if (!ln(b)) {
      if (b.children && b.children.length > 0) {
        const _ = p === h, w = Date.now() - f.current < 600;
        if (_ && w) {
          f.current = 0;
          return;
        }
        v((m) => m === h ? null : h);
        return;
      }
      x(b), v(null);
    }
  }, C = (b) => {
    ln(b) || b.children && b.children.length > 0 || (x(b), v(null));
  };
  be(() => {
    if (p == null) return;
    const b = (h) => {
      l.current && !l.current.contains(h.target) && v(null);
    };
    return document.addEventListener("mousedown", b), () => document.removeEventListener("mousedown", b);
  }, [p]), be(() => {
    if (S.current != null && p === S.current) {
      const b = `${u}-submenu-${p}`;
      document.getElementById(b)?.querySelector('[role="menuitem"]:not([aria-disabled="true"])')?.focus(), S.current = null;
    }
  }, [p, u]);
  const N = (b) => {
    const h = i.current;
    if (!h) return;
    const _ = Array.from(
      h.querySelectorAll('[data-top="true"]')
    ).filter((g) => !g.hasAttribute("disabled") && g.getAttribute("aria-disabled") !== "true");
    if (p != null) {
      const g = `${u}-submenu-${p}`, c = document.getElementById(g);
      if (c) {
        const y = Array.from(c.querySelectorAll('[role="menuitem"]')).filter(
          (P) => P.getAttribute("aria-disabled") !== "true"
        ), O = document.activeElement, B = O ? y.indexOf(O) : -1;
        if (b.key === "ArrowDown") {
          b.preventDefault(), B === -1 ? y[0]?.focus() : y[(B + 1) % y.length]?.focus();
          return;
        }
        if (b.key === "ArrowUp") {
          b.preventDefault(), B === -1 ? y[y.length - 1]?.focus() : y[(B - 1 + y.length) % y.length]?.focus();
          return;
        }
        if (b.key === "Escape") {
          b.preventDefault(), v(null), h.querySelector(`[data-top="true"][data-index="${p}"]`)?.focus();
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
    const w = document.activeElement, m = w ? _.indexOf(w) : -1;
    if (b.key === "ArrowRight" || t === "vertical" && b.key === "ArrowDown") {
      if (b.preventDefault(), _.length === 0) return;
      const g = m === -1 ? 0 : (m + 1) % _.length;
      _[g]?.focus();
      return;
    }
    if (b.key === "ArrowLeft" || t === "vertical" && b.key === "ArrowUp") {
      if (b.preventDefault(), _.length === 0) return;
      const g = m === -1 ? _.length - 1 : (m - 1 + _.length) % _.length;
      _[g]?.focus();
      return;
    }
    if (b.key === "ArrowDown") {
      if (m >= 0) {
        const g = w?.getAttribute("data-index"), c = g != null ? Number(g) : -1, y = c >= 0 ? e[c] : void 0;
        y?.children && y.children.length > 0 && !ln(y) && (b.preventDefault(), S.current = c, v(c));
      }
      return;
    }
    if (b.key === "Home") {
      b.preventDefault(), _[0]?.focus();
      return;
    }
    if (b.key === "End") {
      b.preventDefault(), _[_.length - 1]?.focus();
      return;
    }
  };
  return /* @__PURE__ */ r(
    "nav",
    {
      ref: l,
      "aria-label": o,
      className: [je.root, je[t], a].filter(Boolean).join(" "),
      children: /* @__PURE__ */ r(
        "div",
        {
          ref: i,
          role: "menubar",
          "aria-label": o,
          className: je.menubar,
          onKeyDown: N,
          children: e.map((b, h) => {
            const _ = !!b.children && b.children.length > 0, w = p === h, m = ln(b), g = `${u}-submenu-${h}`;
            return /* @__PURE__ */ $(
              "div",
              {
                className: je.itemWrapper,
                onMouseEnter: () => {
                  t === "horizontal" && _ && !m && (f.current = Date.now(), v(h));
                },
                onMouseLeave: () => {
                  t === "horizontal" && _ && v((c) => c === h ? null : c);
                },
                "data-dt-menu-item": "",
                children: [
                  /* @__PURE__ */ $(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      "data-top": "true",
                      "data-index": h,
                      "data-dt-menu-item": "",
                      "aria-disabled": m || void 0,
                      "aria-haspopup": _ ? "menu" : void 0,
                      "aria-expanded": _ ? w : void 0,
                      "aria-controls": _ ? g : void 0,
                      "aria-current": (b.path && !_, void 0),
                      tabIndex: m ? -1 : 0,
                      disabled: m,
                      className: [je.item, m ? je.disabled : null, _ ? je.hasChildren : null].filter(Boolean).join(" "),
                      onClick: () => D(b, h),
                      children: [
                        b.icon ? /* @__PURE__ */ r("span", { className: je.icon, "aria-hidden": "true", children: b.icon }) : null,
                        /* @__PURE__ */ r("span", { className: je.text, children: b.text }),
                        _ ? /* @__PURE__ */ r("span", { className: je.caret, "aria-hidden": "true", children: "▾" }) : null
                      ]
                    }
                  ),
                  _ && w ? /* @__PURE__ */ r(
                    "div",
                    {
                      id: g,
                      role: "menu",
                      className: je.submenu,
                      "data-dt-menu-submenu": "",
                      "aria-label": b.text,
                      children: b.children?.map((c, y) => {
                        const O = ln(c), B = !!c.children && c.children.length > 0;
                        return /* @__PURE__ */ $(
                          "button",
                          {
                            type: "button",
                            role: "menuitem",
                            "aria-disabled": O || void 0,
                            "aria-haspopup": B ? "menu" : void 0,
                            tabIndex: O ? -1 : 0,
                            disabled: O,
                            className: [je.submenuItem, O ? je.disabled : null].filter(Boolean).join(" "),
                            onClick: () => C(c),
                            children: [
                              c.icon ? /* @__PURE__ */ r("span", { className: je.icon, "aria-hidden": "true", children: c.icon }) : null,
                              /* @__PURE__ */ r("span", { className: je.text, children: c.text })
                            ]
                          },
                          `${c.text}-${y}`
                        );
                      })
                    }
                  ) : null
                ]
              },
              `${b.text}-${h}`
            );
          })
        }
      )
    }
  );
}
const G1 = "_root_f3qrl_1", Y1 = "_list_f3qrl_9", J1 = "_item_f3qrl_14", Z1 = "_trigger_f3qrl_18", Q1 = "_disabled_f3qrl_44", eh = "_expanded_f3qrl_51", th = "_icon_f3qrl_55", nh = "_text_f3qrl_66", rh = "_caret_f3qrl_73", sh = "_open_f3qrl_80", oh = "_submenu_f3qrl_84", ah = "_submenuItem_f3qrl_93", lh = "_nestedWrapper_f3qrl_122", ch = "_nestedTrigger_f3qrl_127", ih = "_nestedMenu_f3qrl_152", dh = "_iconOnly_f3qrl_160", he = {
  root: G1,
  list: Y1,
  item: J1,
  trigger: Z1,
  disabled: Q1,
  expanded: eh,
  icon: th,
  text: nh,
  caret: rh,
  open: sh,
  submenu: oh,
  submenuItem: ah,
  nestedWrapper: lh,
  nestedTrigger: ch,
  nestedMenu: ih,
  iconOnly: dh
};
function uh({
  item: e,
  baseId: t,
  parentKey: n,
  onEmit: s
}) {
  const o = !!e.children && e.children.length > 0, [a, u] = H(!1), l = `${t}-nested-${n}`, i = !!e.disabled, p = () => {
    if (!i) {
      if (o) {
        u((f) => !f);
        return;
      }
      s({ text: e.text, value: e.value, path: e.path });
    }
  }, v = (f) => {
    f.key === "Enter" || f.key === " " ? (f.preventDefault(), p()) : f.key === "Escape" && a && (f.preventDefault(), u(!1));
  };
  return o ? /* @__PURE__ */ $("div", { className: he.nestedWrapper, children: [
    /* @__PURE__ */ $(
      "button",
      {
        type: "button",
        "aria-expanded": a,
        "aria-controls": l,
        "aria-disabled": i || void 0,
        disabled: i,
        tabIndex: i ? -1 : 0,
        className: [he.nestedTrigger, i ? he.disabled : null].filter(Boolean).join(" "),
        onClick: p,
        onKeyDown: v,
        children: [
          e.icon ? /* @__PURE__ */ r("span", { className: he.icon, "aria-hidden": "true", children: e.icon }) : null,
          /* @__PURE__ */ r("span", { className: he.text, children: e.text }),
          /* @__PURE__ */ r("span", { className: [he.caret, a ? he.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" })
        ]
      }
    ),
    a ? /* @__PURE__ */ r("div", { id: l, role: "menu", className: he.nestedMenu, children: e.children?.map((f, S) => {
      const x = !!f.disabled;
      return /* @__PURE__ */ $(
        "div",
        {
          role: "menuitem",
          "aria-disabled": x || void 0,
          tabIndex: x ? -1 : 0,
          className: [he.submenuItem, x ? he.disabled : null].filter(Boolean).join(" "),
          onClick: () => {
            x || f.children && f.children.length > 0 || s({ text: f.text, value: f.value, path: f.path });
          },
          onKeyDown: (D) => {
            if (D.key === "Enter" || D.key === " ") {
              if (D.preventDefault(), x) return;
              s({ text: f.text, value: f.value, path: f.path });
            }
          },
          children: [
            f.icon ? /* @__PURE__ */ r("span", { className: he.icon, "aria-hidden": "true", children: f.icon }) : null,
            /* @__PURE__ */ r("span", { className: he.text, children: f.text })
          ]
        },
        `${f.text}-${S}`
      );
    }) }) : null
  ] }) : /* @__PURE__ */ $(
    "div",
    {
      role: "menuitem",
      "aria-disabled": i || void 0,
      tabIndex: i ? -1 : 0,
      className: [he.submenuItem, i ? he.disabled : null].filter(Boolean).join(" "),
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
        e.icon ? /* @__PURE__ */ r("span", { className: he.icon, "aria-hidden": "true", children: e.icon }) : null,
        /* @__PURE__ */ r("span", { className: he.text, children: e.text })
      ]
    }
  );
}
function Kg({
  items: e,
  multiple: t,
  Multiple: n,
  showArrow: s,
  ShowArrow: o,
  displayStyle: a,
  DisplayStyle: u,
  onClick: l,
  Click: i,
  ariaLabel: p = "Panel menu",
  className: v
}) {
  const f = Ne(), S = t ?? n ?? !1, x = s ?? o ?? !0, D = a ?? u ?? "iconAndText", [C, N] = H([]), b = q(
    (w) => {
      const m = { text: w.text, value: w.value, path: w.path };
      (l ?? i)?.(m);
    },
    [l, i]
  ), h = (w, m, g) => {
    if (!g.disabled) {
      if (m) {
        N((c) => c.includes(w) ? c.filter((O) => O !== w) : S ? [...c, w] : [w]);
        return;
      }
      b(g);
    }
  }, _ = (w) => {
    const m = w.target;
    if (!(w.key === "Enter" || w.key === " ")) {
      if (w.key === "Escape") {
        const g = m.getAttribute("aria-controls");
        if (g) {
          const c = g.match(/-panel-(\d+)$/);
          if (c) {
            const y = Number(c[1]);
            N((O) => O.filter((B) => B !== y));
          }
        } else {
          const c = m.closest('[role="menu"]');
          if (c) {
            const O = c.id.match(/-panel-(\d+)$/);
            if (O) {
              const B = Number(O[1]);
              N((z) => z.filter((d) => d !== B)), document.getElementById(`${f}-trigger-${B}`)?.focus();
            }
          }
        }
        w.preventDefault();
        return;
      }
      if (w.key === "ArrowDown" || w.key === "ArrowUp") {
        const g = Array.from(
          w.currentTarget.querySelectorAll('button, [role="menuitem"]')
        ).filter((B) => !B.hasAttribute("disabled") && B.getAttribute("aria-disabled") !== "true"), c = g.indexOf(m);
        if (c === -1) return;
        w.preventDefault();
        const y = w.key === "ArrowDown" ? 1 : -1;
        g[(c + y + g.length) % g.length]?.focus();
      }
    }
  };
  return /* @__PURE__ */ r(
    "nav",
    {
      "aria-label": p,
      className: [
        he.root,
        D === "icon" ? he.iconOnly : he.iconAndText,
        v
      ].filter(Boolean).join(" "),
      onKeyDown: _,
      children: /* @__PURE__ */ r("div", { className: he.list, role: "presentation", children: e.map((w, m) => {
        const g = !!w.children && w.children.length > 0, c = C.includes(m), y = !!w.disabled, O = `${f}-panel-${m}`, B = `${f}-trigger-${m}`;
        return /* @__PURE__ */ $("div", { className: he.item, children: [
          /* @__PURE__ */ $(
            "button",
            {
              type: "button",
              id: B,
              "aria-expanded": g ? c : void 0,
              "aria-controls": g ? O : void 0,
              "aria-disabled": y || void 0,
              disabled: y,
              tabIndex: y ? -1 : 0,
              className: [
                he.trigger,
                y ? he.disabled : null,
                c ? he.expanded : null
              ].filter(Boolean).join(" "),
              onClick: () => h(m, g, w),
              children: [
                w.icon ? /* @__PURE__ */ r("span", { className: he.icon, "aria-hidden": "true", children: w.icon }) : null,
                D === "iconAndText" ? /* @__PURE__ */ r("span", { className: he.text, children: w.text }) : /* @__PURE__ */ r("span", { className: he.text, "aria-label": w.text, children: w.icon ? null : w.text.slice(0, 1) }),
                g && x ? /* @__PURE__ */ r("span", { className: [he.caret, c ? he.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" }) : null
              ]
            }
          ),
          g && c ? /* @__PURE__ */ r("div", { id: O, role: "menu", className: he.submenu, "aria-labelledby": B, children: w.children?.map((P, z) => /* @__PURE__ */ r(
            uh,
            {
              item: P,
              baseId: f,
              parentKey: `${m}-${z}`,
              onEmit: b
            },
            `${P.text}-${z}`
          )) }) : null
        ] }, `${w.text}-${m}`);
      }) })
    }
  );
}
const fh = "_root_10qer_1", _h = "_trigger_10qer_7", ph = "_defaultTrigger_10qer_40", hh = "_avatar_10qer_46", mh = "_menu_10qer_58", gh = "_item_10qer_74", bh = "_disabled_10qer_88", yh = "_active_10qer_97", vh = "_icon_10qer_107", xh = "_text_10qer_114", ct = {
  root: fh,
  trigger: _h,
  defaultTrigger: ph,
  avatar: hh,
  menu: mh,
  item: gh,
  disabled: bh,
  active: yh,
  icon: vh,
  text: xh
};
function Wg({
  items: e,
  trigger: t,
  Template: n,
  onClick: s,
  Click: o,
  ariaLabel: a = "Profile menu",
  className: u
}) {
  const l = Ne(), i = `${l}-menu`, p = Y(null), v = Y(null), [f, S] = H(!1), [x, D] = H(-1), C = t ?? n, N = e.map((c, y) => c.disabled ? -1 : y).filter((c) => c >= 0), b = q(
    (c) => {
      if (c.disabled) return;
      const y = { text: c.text, path: c.path };
      (s ?? o)?.(y), S(!1), v.current?.focus();
    },
    [s, o]
  ), h = q(() => {
    D(N[0] ?? -1), S(!0);
  }, [N]), _ = q(() => {
    S(!1), D(-1), v.current?.focus();
  }, []);
  be(() => {
    if (!f) return;
    const c = (y) => {
      p.current && !p.current.contains(y.target) && (S(!1), D(-1));
    };
    return document.addEventListener("mousedown", c), () => document.removeEventListener("mousedown", c);
  }, [f]), be(() => {
    if (!f) return;
    const c = (y) => {
      y.key === "Escape" && (y.preventDefault(), _());
    };
    return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
  }, [f, _]);
  const w = (c) => {
    if (N.length === 0) return;
    const y = N.indexOf(x), O = y === -1 ? 0 : (y + c + N.length) % N.length, B = N[O];
    B != null && D(B);
  }, m = (c) => {
    if (!f) {
      (c.key === "ArrowDown" || c.key === "Enter" || c.key === " ") && (c.preventDefault(), h());
      return;
    }
    switch (c.key) {
      case "Escape":
        c.preventDefault(), _();
        break;
      case "ArrowDown":
        c.preventDefault(), w(1);
        break;
      case "ArrowUp":
        c.preventDefault(), w(-1);
        break;
      case "Home":
        c.preventDefault(), N[0] != null && D(N[0]);
        break;
      case "End":
        c.preventDefault(), N[N.length - 1] != null && D(N[N.length - 1]);
        break;
      case "Enter":
      case " ":
        if (c.preventDefault(), x >= 0) {
          const y = e[x];
          y && !y.disabled && b(y);
        }
        break;
      case "Tab":
        S(!1), D(-1);
        break;
    }
  }, g = (c) => {
    switch (c.key) {
      case "ArrowDown":
        c.preventDefault(), w(1);
        break;
      case "ArrowUp":
        c.preventDefault(), w(-1);
        break;
      case "Home":
        c.preventDefault(), N[0] != null && D(N[0]);
        break;
      case "End":
        c.preventDefault(), N[N.length - 1] != null && D(N[N.length - 1]);
        break;
      case "Enter":
      case " ":
        if (c.preventDefault(), x >= 0) {
          const y = e[x];
          y && !y.disabled && b(y);
        }
        break;
      case "Escape":
        c.preventDefault(), _();
        break;
      case "Tab":
        S(!1), D(-1);
        break;
    }
  };
  return /* @__PURE__ */ r(
    "div",
    {
      ref: p,
      className: [ct.root, u].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ $("nav", { "aria-label": a, children: [
        /* @__PURE__ */ r(
          "button",
          {
            ref: v,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": f,
            "aria-controls": i,
            "aria-label": a,
            className: ct.trigger,
            onClick: () => f ? _() : h(),
            onKeyDown: m,
            children: C ?? /* @__PURE__ */ $("span", { className: ct.defaultTrigger, children: [
              /* @__PURE__ */ r("span", { className: ct.avatar, "aria-hidden": "true", children: "●" }),
              /* @__PURE__ */ r("span", { children: "Profile" })
            ] })
          }
        ),
        f ? /* @__PURE__ */ r(
          "div",
          {
            id: i,
            role: "menu",
            "aria-label": a,
            "aria-activedescendant": x >= 0 ? `${l}-item-${x}` : void 0,
            className: ct.menu,
            onKeyDown: g,
            tabIndex: -1,
            children: e.map((c, y) => {
              const O = !!c.disabled, B = y === x;
              return /* @__PURE__ */ $(
                "div",
                {
                  id: `${l}-item-${y}`,
                  role: "menuitem",
                  "aria-disabled": O || void 0,
                  tabIndex: O ? -1 : 0,
                  className: [ct.item, B ? ct.active : null, O ? ct.disabled : null].filter(Boolean).join(" "),
                  onClick: () => {
                    O || b(c);
                  },
                  onMouseEnter: () => {
                    O || D(y);
                  },
                  children: [
                    c.icon ? /* @__PURE__ */ r("span", { className: ct.icon, "aria-hidden": "true", children: c.icon }) : null,
                    /* @__PURE__ */ r("span", { className: ct.text, children: c.text })
                  ]
                },
                `${c.text}-${y}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const wh = "_root_yzi70_1", kh = "_bottomRight_yzi70_11", $h = "_bottomLeft_yzi70_16", Nh = "_topRight_yzi70_21", Sh = "_topLeft_yzi70_26", Dh = "_menu_yzi70_31", zh = "_itemWrapper_yzi70_48", Oh = "_tooltip_yzi70_54", Ch = "_main_yzi70_76", Mh = "_mainIcon_yzi70_104", Ih = "_mainOpen_yzi70_109", jh = "_item_yzi70_48", Eh = "_disabled_yzi70_141", Th = "_itemIcon_yzi70_148", Ae = {
  root: wh,
  bottomRight: kh,
  bottomLeft: $h,
  topRight: Nh,
  topLeft: Sh,
  menu: Dh,
  itemWrapper: zh,
  tooltip: Oh,
  main: Ch,
  mainIcon: Mh,
  mainOpen: Ih,
  item: jh,
  disabled: Eh,
  itemIcon: Th
};
function Vg({
  items: e,
  position: t,
  Position: n,
  icon: s = "+",
  onClick: o,
  Click: a,
  ariaLabel: u = "Open menu",
  className: l
}) {
  const i = t ?? n ?? "bottom-right", v = `${Ne()}-menu`, f = Y(null), S = Y(null), [x, D] = H(!1), C = q(
    (_) => {
      if (_.disabled) return;
      const w = { text: _.text, value: _.value };
      (o ?? a)?.(w), D(!1), S.current?.focus();
    },
    [o, a]
  );
  be(() => {
    if (!x) return;
    const _ = (w) => {
      f.current && !f.current.contains(w.target) && D(!1);
    };
    return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
  }, [x]), be(() => {
    if (!x) return;
    const _ = (w) => {
      w.key === "Escape" && (D(!1), S.current?.focus());
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [x]);
  const N = i === "bottom-right" ? Ae.bottomRight : i === "bottom-left" ? Ae.bottomLeft : i === "top-right" ? Ae.topRight : Ae.topLeft, b = (_) => {
    !x && (_.key === "Enter" || _.key === " " || _.key === "ArrowDown" || _.key === "ArrowUp") ? (_.preventDefault(), D(!0)) : x && _.key === "Escape" && (_.preventDefault(), D(!1));
  }, h = (_) => {
    _.key === "Escape" && (_.preventDefault(), D(!1), S.current?.focus());
  };
  return /* @__PURE__ */ $(
    "div",
    {
      ref: f,
      className: [Ae.root, N, l].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        x ? /* @__PURE__ */ r(
          "div",
          {
            id: v,
            role: "menu",
            "aria-label": u,
            className: Ae.menu,
            onKeyDown: h,
            children: e.map((_, w) => {
              const m = !!_.disabled;
              return /* @__PURE__ */ $("div", { className: Ae.itemWrapper, children: [
                /* @__PURE__ */ r("span", { className: Ae.tooltip, "aria-hidden": "true", children: _.text }),
                /* @__PURE__ */ r(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": _.text,
                    "aria-disabled": m || void 0,
                    title: _.text,
                    disabled: m,
                    tabIndex: m ? -1 : 0,
                    className: [Ae.item, m ? Ae.disabled : null].filter(Boolean).join(" "),
                    onClick: () => C(_),
                    children: /* @__PURE__ */ r("span", { className: Ae.itemIcon, "aria-hidden": "true", children: _.icon ?? "•" })
                  }
                )
              ] }, `${_.text}-${w}`);
            })
          }
        ) : null,
        /* @__PURE__ */ r(
          "button",
          {
            ref: S,
            type: "button",
            className: Ae.main,
            "aria-haspopup": "menu",
            "aria-expanded": x,
            "aria-controls": v,
            "aria-label": u,
            onClick: () => D((_) => !_),
            onKeyDown: b,
            children: /* @__PURE__ */ r("span", { "aria-hidden": "true", className: [Ae.mainIcon, x ? Ae.mainOpen : null].filter(Boolean).join(" "), children: s })
          }
        )
      ]
    }
  );
}
const Ah = "_root_18w60_1", Lh = "_list_18w60_5", Rh = "_item_18w60_15", Bh = "_link_18w60_22", Ph = "_linkButton_18w60_23", qh = "_current_18w60_24", Fh = "_disabled_18w60_68", Hh = "_icon_18w60_74", Kh = "_text_18w60_81", Wh = "_separator_18w60_85", we = {
  root: Ah,
  list: Lh,
  item: Rh,
  link: Bh,
  linkButton: Ph,
  current: qh,
  disabled: Fh,
  icon: Hh,
  text: Kh,
  separator: Wh
};
function Ug({ items: e, onClick: t, Click: n, ariaLabel: s = "Breadcrumb", className: o }) {
  const a = t ?? n, u = (l) => {
    l.disabled || a?.({ text: l.text, path: l.path });
  };
  return /* @__PURE__ */ r("nav", { "aria-label": s, className: [we.root, o].filter(Boolean).join(" "), children: /* @__PURE__ */ r("ol", { className: we.list, children: e.map((l, i) => {
    const p = i === e.length - 1, v = !!l.disabled;
    return /* @__PURE__ */ $("li", { className: we.item, children: [
      p ? v ? /* @__PURE__ */ $(
        "span",
        {
          className: [we.current, we.disabled].filter(Boolean).join(" "),
          "aria-current": "page",
          "aria-disabled": "true",
          tabIndex: -1,
          children: [
            l.icon ? /* @__PURE__ */ r("span", { className: we.icon, "aria-hidden": "true", children: l.icon }) : null,
            l.text
          ]
        }
      ) : l.path ? /* @__PURE__ */ $(
        "a",
        {
          href: l.path,
          className: we.link,
          "aria-current": "page",
          onClick: (f) => {
            f.preventDefault(), u(l);
          },
          children: [
            l.icon ? /* @__PURE__ */ r("span", { className: we.icon, "aria-hidden": "true", children: l.icon }) : null,
            /* @__PURE__ */ r("span", { className: we.text, children: l.text })
          ]
        }
      ) : /* @__PURE__ */ $(
        "span",
        {
          className: we.current,
          "aria-current": "page",
          tabIndex: 0,
          children: [
            l.icon ? /* @__PURE__ */ r("span", { className: we.icon, "aria-hidden": "true", children: l.icon }) : null,
            l.text
          ]
        }
      ) : v ? /* @__PURE__ */ $(
        "span",
        {
          className: [we.link, we.disabled].filter(Boolean).join(" "),
          "aria-disabled": "true",
          tabIndex: -1,
          children: [
            l.icon ? /* @__PURE__ */ r("span", { className: we.icon, "aria-hidden": "true", children: l.icon }) : null,
            /* @__PURE__ */ r("span", { className: we.text, children: l.text })
          ]
        }
      ) : l.path ? /* @__PURE__ */ $(
        "a",
        {
          href: l.path,
          className: we.link,
          onClick: (f) => {
            f.preventDefault(), u(l);
          },
          children: [
            l.icon ? /* @__PURE__ */ r("span", { className: we.icon, "aria-hidden": "true", children: l.icon }) : null,
            /* @__PURE__ */ r("span", { className: we.text, children: l.text })
          ]
        }
      ) : /* @__PURE__ */ $(
        "button",
        {
          type: "button",
          className: we.linkButton,
          tabIndex: 0,
          onClick: () => u(l),
          children: [
            l.icon ? /* @__PURE__ */ r("span", { className: we.icon, "aria-hidden": "true", children: l.icon }) : null,
            /* @__PURE__ */ r("span", { className: we.text, children: l.text })
          ]
        }
      ),
      p ? null : /* @__PURE__ */ r("span", { className: we.separator, "aria-hidden": "true", children: "/" })
    ] }, `${l.text}-${i}`);
  }) }) });
}
const Vh = "_root_13ac5_1", Uh = "_list_13ac5_5", Xh = "_item_13ac5_15", Gh = "_connector_13ac5_21", Yh = "_connectorCompleted_13ac5_30", Jh = "_step_13ac5_34", Zh = "_active_13ac5_69", Qh = "_completed_13ac5_75", em = "_circle_13ac5_79", tm = "_check_13ac5_109", nm = "_icon_13ac5_114", rm = "_number_13ac5_119", sm = "_text_13ac5_124", Le = {
  root: Vh,
  list: Uh,
  item: Xh,
  connector: Gh,
  connectorCompleted: Yh,
  step: Jh,
  active: Zh,
  completed: Qh,
  circle: em,
  check: tm,
  icon: nm,
  number: rm,
  text: sm
};
function Xg({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: s = 0,
  linear: o,
  Linear: a,
  onChange: u,
  Change: l,
  onSelectedIndexChange: i,
  ariaLabel: p = "Steps",
  className: v
}) {
  const f = o ?? a ?? !1, S = t ?? n, x = S !== void 0, [D, C] = H(() => Math.min(Math.max(0, S ?? s), Math.max(0, e.length - 1))), b = Math.min(Math.max(0, x ? S : D), Math.max(0, e.length - 1)), h = Y(null), _ = q(
    (g) => {
      const c = Math.min(Math.max(0, g), Math.max(0, e.length - 1));
      x || C(c), (u ?? l ?? i)?.(c);
    },
    [x, u, l, i, e.length]
  ), w = q(
    (g, c) => !!(c.disabled || f && g > b + 1),
    [f, b]
  ), m = (g) => {
    const c = Array.from(
      g.currentTarget.querySelectorAll("button[data-step]")
    ).filter((B) => B.getAttribute("aria-disabled") !== "true" && !B.disabled), y = document.activeElement, O = y ? c.indexOf(y) : -1;
    if (g.key === "ArrowRight" || g.key === "ArrowDown") {
      if (g.preventDefault(), c.length === 0) return;
      const B = O === -1 ? 0 : (O + 1) % c.length, P = c[B];
      P && P.focus();
    } else if (g.key === "ArrowLeft" || g.key === "ArrowUp") {
      if (g.preventDefault(), c.length === 0) return;
      const B = O === -1 ? c.length - 1 : (O - 1 + c.length) % c.length, P = c[B];
      P && P.focus();
    } else g.key === "Home" ? (g.preventDefault(), c[0]?.focus()) : g.key === "End" && (g.preventDefault(), c[c.length - 1]?.focus());
  };
  return /* @__PURE__ */ r(
    "nav",
    {
      "aria-label": p,
      className: [Le.root, v].filter(Boolean).join(" "),
      onKeyDown: m,
      children: /* @__PURE__ */ r("ol", { ref: h, role: "list", className: Le.list, children: e.map((g, c) => {
        const y = c === b, O = c < b, B = w(c, g);
        return /* @__PURE__ */ $("li", { role: "listitem", className: Le.item, children: [
          c > 0 ? /* @__PURE__ */ r("span", { className: [Le.connector, O ? Le.connectorCompleted : null].filter(Boolean).join(" "), "aria-hidden": "true" }) : null,
          /* @__PURE__ */ $(
            "button",
            {
              type: "button",
              "data-step": c,
              "aria-current": y ? "step" : void 0,
              "aria-disabled": B ? "true" : void 0,
              disabled: B,
              tabIndex: B ? -1 : 0,
              className: [
                Le.step,
                y ? Le.active : null,
                O ? Le.completed : null,
                B ? Le.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => {
                B || _(c);
              },
              children: [
                /* @__PURE__ */ r("span", { className: Le.circle, "aria-hidden": "true", children: O ? /* @__PURE__ */ r("span", { className: Le.check, "aria-hidden": "true", children: "✓" }) : g.icon ? /* @__PURE__ */ r("span", { className: Le.icon, children: g.icon }) : /* @__PURE__ */ r("span", { className: Le.number, children: c + 1 }) }),
                /* @__PURE__ */ r("span", { className: Le.text, children: g.text })
              ]
            }
          )
        ] }, `${g.text}-${c}`);
      }) })
    }
  );
}
const om = "_root_1mm03_1", am = "_horizontal_1mm03_13", lm = "_vertical_1mm03_17", cm = "_pane_1mm03_21", im = "_handle_1mm03_31", dm = "_handleHorizontal_1mm03_51", um = "_handleVertical_1mm03_57", fm = "_handleGrip_1mm03_63", _m = "_handleCollapseHint_1mm03_75", pm = "_collapseBtn_1mm03_79", hm = "_collapseBtnCollapsed_1mm03_109", Je = {
  root: om,
  horizontal: am,
  vertical: lm,
  pane: cm,
  handle: im,
  handleHorizontal: dm,
  handleVertical: um,
  handleGrip: fm,
  handleCollapseHint: _m,
  collapseBtn: pm,
  collapseBtnCollapsed: hm
};
function cn(e, t) {
  if (!e) return t;
  const n = e.trim();
  if (n.endsWith("%")) {
    const o = parseFloat(n.slice(0, -1));
    return Number.isNaN(o) ? t : o;
  }
  if (n.endsWith("px")) {
    const o = parseFloat(n.slice(0, -2));
    return Number.isNaN(o) ? t : o;
  }
  const s = parseFloat(n);
  return Number.isNaN(s) ? t : s;
}
function mt(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function Gg({
  orientation: e,
  Orientation: t,
  panes: n,
  onResize: s,
  Resize: o,
  onCollapse: a,
  Collapse: u,
  ariaLabel: l = "Splitter",
  className: i
}) {
  const p = e ?? t ?? "horizontal", v = p === "horizontal", f = Y(null), S = q(() => {
    const d = n.length;
    if (d === 0) return [];
    const k = n.map((E) => E.size ? cn(E.size, 100 / d) : 100 / d), L = k.reduce((E, T) => E + T, 0);
    return Math.abs(L - 100) > 0.01 && L > 0 ? k.map((E) => E / L * 100) : k;
  }, [n]), [x, D] = H(() => S()), [C, N] = H(() => n.map((d) => !!d.collapsed)), b = Y(x);
  be(() => {
    N(n.map((d) => !!d.collapsed));
  }, [n]);
  const h = q(() => n.map((d) => cn(d.min, 0)), [n]), _ = q(() => n.map((d) => cn(d.max, 100)), [n]), w = q(
    (d, k) => {
      const L = { paneIndex: d, newSize: k, cancel: !1 };
      return (s ?? o)?.(L), !L.cancel;
    },
    [s, o]
  ), m = q(
    (d, k) => {
      const L = { paneIndex: d, collapse: k, cancel: !1 };
      return (a ?? u)?.(L), !L.cancel;
    },
    [a, u]
  ), g = q(
    (d) => {
      const k = !C[d];
      m(d, k) && (k ? (b.current = [...x], N((L) => {
        const E = [...L];
        return E[d] !== void 0 && (E[d] = !0), E;
      }), D((L) => {
        const E = [...L], T = E[d] ?? 0, W = d < E.length - 1 ? d + 1 : d - 1;
        if (W >= 0 && W < E.length) {
          const te = E[W] ?? 0;
          E[W] = te + T, E[d] = 0;
        } else
          E[d] = 0;
        return E;
      })) : (N((L) => {
        const E = [...L];
        return E[d] !== void 0 && (E[d] = !1), E;
      }), D(() => {
        const L = [...b.current];
        return L.length !== n.length ? n.map(() => 100 / n.length) : L;
      })));
    },
    [C, x, n.length, m]
  ), c = Y(null), y = q(
    (d, k, L) => {
      const E = f.current;
      if (!E) return null;
      const T = E.getBoundingClientRect();
      let W;
      if (v) {
        if (T.width === 0) return null;
        W = (k - T.left) / T.width * 100;
      } else {
        if (T.height === 0) return null;
        W = (L - T.top) / T.height * 100;
      }
      let te = 0;
      for (let Z = 0; Z < d; Z++) {
        const Q = x[Z];
        Q !== void 0 && (te += Q);
      }
      return W - te;
    },
    [v, x]
  ), O = (d, k) => {
    k.preventDefault();
    const L = k.currentTarget;
    L.focus(), typeof L.setPointerCapture == "function" && L.setPointerCapture(k.pointerId), c.current = { handleIndex: d, pointerId: k.pointerId };
  }, B = (d) => {
    if (!c.current || c.current.pointerId !== d.pointerId) return;
    d.preventDefault();
    const k = c.current.handleIndex, L = y(k, d.clientX, d.clientY);
    if (L == null) return;
    const E = h(), T = _(), W = E[k] ?? 0, te = T[k] ?? 100, re = k + 1, Z = E[re] ?? 0, Q = T[re] ?? 100, fe = x[k] ?? 0, V = x[re] ?? 0, K = fe + V;
    if (K <= 0) return;
    let j = mt(L, W, te), U = K - j;
    if (U < Z) {
      if (U = Z, j = K - U, j < W || j > te) return;
    } else if (U > Q && (U = Q, j = K - U, j < W || j > te))
      return;
    j = mt(j, W, te), U = K - j, w(k, j) && D((se) => {
      const X = [...se];
      return X[k] = j, X[re] = U, X;
    });
  }, P = (d) => {
    !c.current || c.current.pointerId !== d.pointerId || (c.current = null);
  }, z = (d, k) => {
    const L = h(), E = _(), T = d, W = d + 1, te = x[T] ?? 0, re = x[W] ?? 0, Z = te + re;
    let Q = 0;
    const fe = !!n[T]?.collapsible, V = !!n[W]?.collapsible;
    if (v ? k.key === "ArrowLeft" ? Q = -5 : k.key === "ArrowRight" && (Q = 5) : k.key === "ArrowUp" ? Q = -5 : k.key === "ArrowDown" && (Q = 5), k.key === "Home") {
      k.preventDefault();
      let K = L[T] ?? 0, j = Z - K;
      if (j = mt(j, L[W] ?? 0, E[W] ?? 100), K = Z - j, K = mt(K, L[T] ?? 0, E[T] ?? 100), !w(T, K)) return;
      D((U) => {
        const se = [...U];
        return se[T] = K, se[W] = j, se;
      });
      return;
    }
    if (k.key === "End") {
      k.preventDefault();
      let K = E[T] ?? 100;
      K = Math.min(K, Z - (L[W] ?? 0));
      let j = Z - K;
      if (j = mt(j, L[W] ?? 0, E[W] ?? 100), K = Z - j, K = mt(K, L[T] ?? 0, E[T] ?? 100), !w(T, K)) return;
      D((U) => {
        const se = [...U];
        return se[T] = K, se[W] = j, se;
      });
      return;
    }
    if ((k.key === "Enter" || k.key === " ") && (fe || V)) {
      k.preventDefault(), g(fe ? T : W);
      return;
    }
    if (Q !== 0) {
      k.preventDefault();
      let K = te + Q, j = Z - K;
      const U = L[T] ?? 0, se = E[T] ?? 100, X = L[W] ?? 0, oe = E[W] ?? 100;
      if (K = mt(K, U, se), j = Z - K, (j < X || j > oe) && (j = mt(j, X, oe), K = Z - j, K = mt(K, U, se), j = Z - K), !w(T, K)) return;
      D((ie) => {
        const me = [...ie];
        return me[T] = K, me[W] = j, me;
      });
    }
  };
  return /* @__PURE__ */ r(
    "div",
    {
      ref: f,
      className: [Je.root, v ? Je.horizontal : Je.vertical, i].filter(Boolean).join(" "),
      "aria-label": l,
      children: n.map((d, k) => {
        const L = !!C[k], E = L ? 0 : x[k] ?? 100 / n.length, T = L ? { display: "none" } : v ? { flexBasis: `${E}%`, flexGrow: 0, flexShrink: 0, overflow: "auto" } : { flexBasis: `${E}%`, flexGrow: 0, flexShrink: 0, overflow: "auto" }, W = cn(d.min, 0), te = cn(d.max, 100), re = k < n.length - 1, Z = !!n[k + 1]?.collapsible;
        return /* @__PURE__ */ $("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ $(
            "div",
            {
              role: "group",
              "aria-label": d.label ?? `Pane ${k + 1}`,
              className: Je.pane,
              style: T,
              "data-collapsed": L ? "true" : void 0,
              children: [
                L ? null : d.children,
                d.collapsible && !L ? /* @__PURE__ */ r(
                  "button",
                  {
                    type: "button",
                    className: Je.collapseBtn,
                    "aria-label": `Collapse pane ${k + 1}`,
                    "aria-expanded": !L,
                    onClick: () => g(k),
                    children: v ? "◀" : "▲"
                  }
                ) : null,
                d.collapsible && L ? /* @__PURE__ */ r(
                  "button",
                  {
                    type: "button",
                    className: Je.collapseBtn,
                    "aria-label": `Expand pane ${k + 1}`,
                    "aria-expanded": !L,
                    onClick: () => g(k),
                    children: v ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          L && d.collapsible ? (
            // when collapsed we already rendered expand button inside pane, but pane is display none, so render expand button outside?
            // Actually we hide pane with display none, need visible expand button
            // So render alternative expand button adjacent
            /* @__PURE__ */ r(
              "button",
              {
                type: "button",
                className: Je.collapseBtnCollapsed,
                "aria-label": `Expand pane ${k + 1}`,
                "aria-expanded": "false",
                onClick: () => g(k),
                children: v ? "▶" : "▼"
              }
            )
          ) : null,
          re ? /* @__PURE__ */ $(
            "div",
            {
              role: "separator",
              "aria-orientation": p,
              "aria-valuemin": W,
              "aria-valuemax": te,
              "aria-valuenow": Math.round(E),
              "aria-label": `Resize handle ${k + 1}`,
              tabIndex: L || C[k + 1] ? -1 : 0,
              className: [Je.handle, v ? Je.handleHorizontal : Je.handleVertical].filter(Boolean).join(" "),
              onPointerDown: (Q) => O(k, Q),
              onPointerMove: B,
              onPointerUp: P,
              onKeyDown: (Q) => z(k, Q),
              children: [
                /* @__PURE__ */ r("span", { className: Je.handleGrip, "aria-hidden": "true" }),
                (d.collapsible || Z) && /* @__PURE__ */ r("span", { className: Je.handleCollapseHint, "aria-hidden": "true" })
              ]
            }
          ) : null
        ] }, k);
      })
    }
  );
}
const mm = "_root_10e1i_1", gm = "_list_10e1i_5", bm = "_vertical_10e1i_14", ym = "_horizontal_10e1i_20", vm = "_item_10e1i_28", xm = "_link_10e1i_32", wm = "_active_10e1i_57", Kt = {
  root: mm,
  list: gm,
  vertical: bm,
  horizontal: ym,
  item: vm,
  link: xm,
  active: wm
};
function Yg({
  items: e,
  selector: t,
  Selector: n,
  orientation: s,
  Orientation: o,
  onClick: a,
  Click: u,
  ariaLabel: l = "Table of contents",
  className: i
}) {
  const p = t ?? n, v = s ?? o ?? "vertical", [f, S] = H(() => e[0]?.selector ?? null), x = Y(f);
  x.current = f;
  const D = q(
    (C, N) => {
      if (S(C.selector), (a ?? u)?.({ text: C.text, selector: C.selector }), N) {
        try {
          N.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch {
          N.scrollIntoView();
        }
        const h = N;
        h.getAttribute("tabindex") == null && h.tabIndex === -1 || h.tabIndex < 0 ? (h.getAttribute("tabindex"), h.setAttribute("tabindex", "-1"), h.focus({ preventScroll: !0 })) : h.focus({ preventScroll: !0 });
      }
    },
    [a, u]
  );
  return be(() => {
    if (e.length === 0) return;
    const N = (() => {
      if (p) {
        const m = document.querySelector(p);
        if (m) return m;
      }
      return window;
    })();
    let b = null;
    const h = /* @__PURE__ */ new Map(), _ = () => {
      let m = null, g = null;
      for (const y of e) {
        const O = document.querySelector(y.selector);
        if (!O) continue;
        h.set(y.selector, O);
        const B = O.getBoundingClientRect();
        let P = B.top;
        if (N !== window) {
          const z = N.getBoundingClientRect();
          P = B.top - z.top;
        }
        P <= 80 ? (!g || P > g.el.getBoundingClientRect().top - (N !== window ? N.getBoundingClientRect().top : 0)) && (g = { sel: y.selector, el: O }) : (!m || P < m.top) && (m = { sel: y.selector, top: P });
      }
      const c = g?.sel ?? m?.sel ?? e[0]?.selector ?? null;
      c && c !== x.current && S(c);
    }, w = () => {
      _();
    };
    if (typeof IntersectionObserver < "u") {
      const m = N === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : { root: N, rootMargin: "-20% 0px -70% 0px", threshold: 0 };
      b = new IntersectionObserver((g) => {
        const c = g.filter((y) => y.isIntersecting).sort((y, O) => y.boundingClientRect.top - O.boundingClientRect.top);
        if (c[0]) {
          const y = c[0].target;
          for (const O of e) {
            if (document.querySelector(O.selector) === y) {
              S(O.selector);
              break;
            }
            if (O.selector.startsWith("#") && y.id === O.selector.slice(1)) {
              S(O.selector);
              break;
            }
          }
        } else
          _();
      }, m);
      for (const g of e) {
        const c = document.querySelector(g.selector);
        c && (b.observe(c), h.set(g.selector, c));
      }
    }
    return N === window ? (window.addEventListener("scroll", w, { passive: !0 }), _(), () => {
      window.removeEventListener("scroll", w), b?.disconnect();
    }) : (N.addEventListener("scroll", w, { passive: !0 }), _(), () => {
      N.removeEventListener("scroll", w), b?.disconnect();
    });
  }, [e, p]), /* @__PURE__ */ r("nav", { "aria-label": l, className: [Kt.root, Kt[v], i].filter(Boolean).join(" "), children: /* @__PURE__ */ r("ol", { className: Kt.list, children: e.map((C) => {
    const N = C.selector === f;
    return /* @__PURE__ */ r("li", { className: Kt.item, children: /* @__PURE__ */ r(
      "a",
      {
        href: C.selector.startsWith("#") || C.selector.startsWith(".") ? C.selector : `#${C.selector}`,
        className: [Kt.link, N ? Kt.active : null].filter(Boolean).join(" "),
        "aria-current": N ? "location" : void 0,
        onClick: (b) => {
          b.preventDefault();
          const h = document.querySelector(C.selector);
          D(C, h);
        },
        children: C.text
      }
    ) }, `${C.text}-${C.selector}`);
  }) }) });
}
const km = "_root_7t0e2_1", $m = "_viewport_7t0e2_17", Nm = "_slide_7t0e2_24", Sm = "_active_7t0e2_33", Dm = "_arrow_7t0e2_37", zm = "_prev_7t0e2_71", Om = "_next_7t0e2_75", Cm = "_pauseBtn_7t0e2_79", Mm = "_indicators_7t0e2_110", Im = "_indicator_7t0e2_110", jm = "_indicatorActive_7t0e2_145", Ze = {
  root: km,
  viewport: $m,
  slide: Nm,
  active: Sm,
  arrow: Dm,
  prev: zm,
  next: Om,
  pauseBtn: Cm,
  indicators: Mm,
  indicator: Im,
  indicatorActive: jm
};
function Jg({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: s = 0,
  auto: o,
  Auto: a,
  interval: u,
  Interval: l,
  pauseOnHover: i,
  PauseOnHover: p,
  showArrows: v,
  ShowArrows: f,
  showIndicators: S,
  ShowIndicators: x,
  onChange: D,
  Change: C,
  ariaLabel: N = "Carousel",
  className: b
}) {
  const h = t ?? n, _ = h !== void 0, [w, m] = H(() => Math.min(Math.max(0, h ?? s), Math.max(0, e.length - 1))), g = _ ? h : w, c = e.length === 0 ? 0 : Math.min(Math.max(0, g), e.length - 1), y = o ?? a ?? !1, O = u ?? l ?? 3e3, B = i ?? p ?? !0, P = v ?? f ?? !0, z = S ?? x ?? !0, [d, k] = H(!1), [L, E] = H(!1), T = d || L, W = Y(null), te = Ne(), re = q(
    (X) => {
      const oe = e.length === 0 ? 0 : (X % e.length + e.length) % e.length;
      _ || m(oe), (D ?? C)?.(oe);
    },
    [_, D, C, e.length]
  ), Z = q(() => {
    re(c - 1);
  }, [re, c]), Q = q(() => {
    re(c + 1);
  }, [re, c]), fe = q(
    (X) => {
      re(X);
    },
    [re]
  );
  be(() => {
    if (!y || T || e.length <= 1) return;
    const X = setInterval(() => {
      re(c + 1);
    }, O);
    return () => clearInterval(X);
  }, [y, T, O, c, re, e.length]);
  const V = (X) => {
    e.length !== 0 && (X.key === "ArrowLeft" ? (X.preventDefault(), Z()) : X.key === "ArrowRight" ? (X.preventDefault(), Q()) : X.key === "Home" ? (X.preventDefault(), fe(0)) : X.key === "End" && (X.preventDefault(), fe(e.length - 1)));
  }, K = () => {
    B && y && E(!0);
  }, j = () => {
    B && y && E(!1);
  }, U = () => {
    B && y && E(!0);
  }, se = () => {
    B && y && E(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ $(
    "div",
    {
      ref: W,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": N,
      tabIndex: 0,
      className: [Ze.root, b].filter(Boolean).join(" "),
      onKeyDown: V,
      onMouseEnter: K,
      onMouseLeave: j,
      onFocusCapture: U,
      onBlurCapture: se,
      children: [
        /* @__PURE__ */ r("div", { id: te, className: Ze.viewport, children: e.map((X, oe) => {
          const ie = oe === c;
          return /* @__PURE__ */ r(
            "div",
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `Slide ${oe + 1} of ${e.length}`,
              "aria-hidden": ie ? void 0 : !0,
              hidden: !ie,
              className: [Ze.slide, ie ? Ze.active : null].filter(Boolean).join(" "),
              children: X
            },
            oe
          );
        }) }),
        P && e.length > 1 ? /* @__PURE__ */ $(ue, { children: [
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: [Ze.arrow, Ze.prev].filter(Boolean).join(" "),
              "aria-label": "Previous slide",
              "aria-controls": te,
              onClick: Z,
              children: "‹"
            }
          ),
          /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: [Ze.arrow, Ze.next].filter(Boolean).join(" "),
              "aria-label": "Next slide",
              "aria-controls": te,
              onClick: Q,
              children: "›"
            }
          )
        ] }) : null,
        y ? /* @__PURE__ */ r(
          "button",
          {
            type: "button",
            className: Ze.pauseBtn,
            "aria-label": d ? "Resume" : "Pause",
            "aria-pressed": d,
            onClick: () => k((X) => !X),
            children: d ? "▶" : "⏸"
          }
        ) : null,
        z && e.length > 1 ? /* @__PURE__ */ r("div", { className: Ze.indicators, role: "group", "aria-label": "Slide indicators", children: e.map((X, oe) => {
          const ie = oe === c;
          return /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              className: [Ze.indicator, ie ? Ze.indicatorActive : null].filter(Boolean).join(" "),
              "aria-label": `Go to slide ${oe + 1}`,
              "aria-current": ie ? "true" : void 0,
              "aria-controls": te,
              onClick: () => fe(oe)
            },
            oe
          );
        }) }) : null
      ]
    }
  );
}
export {
  yg as Accordion,
  cg as Alert,
  kg as Autocomplete,
  gg as Avatar,
  Rm as Badge,
  pg as Body,
  Ug as Breadcrumb,
  Am as Button,
  Lm as Card,
  Jg as Carousel,
  rg as Checkbox,
  Ng as Checkboxlist,
  Eg as Colorpicker,
  ug as Column,
  hn as DEFAULT_OPERATOR_BY_TYPE,
  Vp as DEFAULT_PALETTE,
  Zm as DataFilter,
  Qm as DataGrid,
  eg as DataList,
  Tg as Datepicker,
  og as Dialog,
  Fg as DropZone,
  wg as Dropdown,
  Fm as EmptyState,
  pr as FILTER_OPERATORS,
  Vg as FabMenu,
  Hm as Field,
  $u as Footer,
  Km as Form,
  Du as Header,
  De as Icon,
  ng as Input,
  tg as Label,
  _g as Layout,
  $g as Listbox,
  Ig as Mask,
  Hg as Menu,
  jg as Numeric,
  Eo as Pager,
  Kg as PanelMenu,
  Mg as Password,
  Wg as ProfileMenu,
  hg as Progress,
  Sg as Radiobuttonlist,
  Ag as Rating,
  dg as Row,
  Bg as SecurityCode,
  kn as Select,
  Dg as Selectbar,
  Tu as Sidebar,
  Pg as SignaturePad,
  ig as Skeleton,
  Lg as Slider,
  Og as Splitbutton,
  Gg as Splitter,
  fg as Stack,
  Pm as Stat,
  Xg as Steps,
  Ua as Switch,
  qm as Table,
  bg as Tabs,
  vg as Textarea,
  Cg as Textbox,
  mg as ThemeSwitcher,
  Rg as Timespanpicker,
  lg as ToastProvider,
  Yg as Toc,
  zg as Togglebutton,
  sg as Tooltip,
  xg as Typography,
  qg as Upload,
  mr as applyFilters,
  qo as applyGridState,
  Qt as columnValue,
  Ro as cycleSort,
  Fo as defaultOperatorForType,
  Vm as email,
  nr as formatMasked,
  Xn as formatValue,
  $n as getByPath,
  Bm as iconNames,
  hr as matchesFilters,
  Gm as maxLength,
  Xm as minLength,
  Po as paginate,
  Um as pattern,
  Ym as range,
  Wm as required,
  Ks as runValidators,
  oo as sortItems,
  Bo as sortedItems,
  eo as toFilterString,
  so as toODataFilterString,
  Hs as useFormContext,
  Jm as useFormField,
  ag as useToast
};
