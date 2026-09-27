import { jsx as n, jsxs as O, Fragment as Me } from "react/jsx-runtime";
import { forwardRef as He, useId as Fe, isValidElement as Lt, cloneElement as ds, useState as V, useRef as le, useCallback as H, useMemo as $e, useContext as Ws, createContext as Xs, useEffect as ke, Fragment as sr, Children as rr, useImperativeHandle as us } from "react";
const or = "_button_14wii_1", lr = "_filled_14wii_36", ar = "_flat_14wii_55", ir = "_outlined_14wii_58", cr = "_text_14wii_63", dr = "_loading_14wii_523", ur = "_spinner_14wii_526", _r = "_xs_14wii_542", fr = "_sm_14wii_548", hr = "_md_14wii_554", pr = "_lg_14wii_560", mr = "_xl_14wii_566", gr = "_iconOnly_14wii_572", xr = "_fullWidth_14wii_602", Bt = {
  button: or,
  filled: lr,
  flat: ar,
  outlined: ir,
  text: cr,
  "style-primary": "_style-primary_14wii_78",
  "style-secondary": "_style-secondary_14wii_101",
  "style-base": "_style-base_14wii_119",
  "style-light": "_style-light_14wii_138",
  "style-dark": "_style-dark_14wii_156",
  "style-danger": "_style-danger_14wii_179",
  "style-success": "_style-success_14wii_202",
  "style-warning": "_style-warning_14wii_225",
  "style-info": "_style-info_14wii_248",
  "shade-lighter": "_shade-lighter_14wii_435",
  "shade-light": "_shade-light_14wii_435",
  "shade-dark": "_shade-dark_14wii_445",
  "shade-darker": "_shade-darker_14wii_449",
  loading: dr,
  spinner: ur,
  "dx-spin": "_dx-spin_14wii_1",
  xs: _r,
  sm: fr,
  md: hr,
  lg: pr,
  xl: mr,
  iconOnly: gr,
  fullWidth: xr
};
function br(e, t) {
  const s = t, o = e ?? "filled";
  return { variant: o === "filled" || o === "flat" || o === "outlined" || o === "text" ? o : "filled", style: s ?? "primary" };
}
const F2 = He(
  function(t, s) {
    const {
      variant: o = "filled",
      severity: i,
      shade: c = "default",
      size: h = "md",
      fullWidth: r = !1,
      iconOnly: l = !1,
      loading: a = !1,
      visible: p = !0,
      className: d,
      disabled: v,
      children: y,
      ...w
    } = t;
    if (p === !1) return null;
    const k = br(o, i), f = !(k.style === "light" || k.style === "dark") && c !== "default" ? `shade-${c}` : null, u = [
      Bt.button,
      Bt[k.variant],
      Bt[`style-${k.style}`],
      f ? Bt[f] : null,
      Bt[h],
      r ? Bt.fullWidth : null,
      l ? Bt.iconOnly : null,
      a ? Bt.loading : null,
      // Press feedback on every button (Radzen material parity).
      "dx-ripple",
      d
    ].filter(Boolean).join(" "), x = /* @__PURE__ */ O(Me, { children: [
      a ? /* @__PURE__ */ n("span", { "aria-hidden": "true", className: Bt.spinner }) : null,
      y
    ] }), $ = t.href;
    if ($ != null) {
      const { onClick: b, ...N } = w, E = v || a;
      return /* @__PURE__ */ n(
        "a",
        {
          ref: s,
          href: $,
          className: u,
          "aria-disabled": E || void 0,
          "aria-busy": a || void 0,
          onClick: (I) => {
            if (E) {
              I.preventDefault();
              return;
            }
            b?.(I);
          },
          ...N,
          children: x
        }
      );
    }
    const { type: m = "button", ...S } = w;
    return /* @__PURE__ */ n(
      "button",
      {
        ref: s,
        type: m,
        className: u,
        disabled: v || a,
        "aria-busy": a || void 0,
        ...S,
        children: x
      }
    );
  }
), yr = "_card_16nyh_1", vr = "_elevated_16nyh_8", kr = "_filled_16nyh_13", wr = "_outlined_16nyh_18", $r = "_interactive_16nyh_22", Nr = "_text_16nyh_30", Or = "_header_16nyh_46", Sr = "_body_16nyh_53", Dr = "_footer_16nyh_63", vn = {
  card: yr,
  elevated: vr,
  filled: kr,
  outlined: wr,
  interactive: $r,
  text: Nr,
  header: Or,
  body: Sr,
  footer: Dr
}, H2 = He(function({
  variant: t = "elevated",
  header: s,
  footer: o,
  className: i,
  visible: c = !0,
  children: h,
  onKeyDown: r,
  ...l
}, a) {
  if (c === !1) return null;
  const p = t === "interactive";
  return (
    // Interactivity is conditional on variant="interactive" (role + tabIndex
    // travel together); static analysis cannot see that.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ O(
      "div",
      {
        ref: a,
        role: p ? "button" : void 0,
        tabIndex: p ? 0 : void 0,
        onKeyDown: (d) => {
          r?.(d), !(!p || d.key !== "Enter" && d.key !== " ") && (d.preventDefault(), d.currentTarget.click());
        },
        className: [vn.card, vn[t], i].filter(Boolean).join(" "),
        ...l,
        children: [
          s != null && /* @__PURE__ */ n("div", { className: vn.header, children: s }),
          /* @__PURE__ */ n("div", { className: vn.body, children: h }),
          o != null && /* @__PURE__ */ n("div", { className: vn.footer, children: o })
        ]
      }
    )
  );
});
function _s(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const Mr = "_badge_154mm_1", zr = "_xs_154mm_21", Cr = "_sm_154mm_26", Er = "_md_154mm_31", Ir = "_lg_154mm_36", jr = "_xl_154mm_41", Ar = "_neutral_154mm_47", Tr = "_primary_154mm_52", Lr = "_secondary_154mm_61", Rr = "_light_154mm_66", Pr = "_base_154mm_71", Br = "_dark_154mm_76", qr = "_info_154mm_81", Fr = "_success_154mm_86", Hr = "_warning_154mm_95", Kr = "_danger_154mm_104", Ur = "_filled_154mm_111", Wr = "_outlined_154mm_161", Xr = "_text_154mm_213", kn = {
  badge: Mr,
  xs: zr,
  sm: Cr,
  md: Er,
  lg: Ir,
  xl: jr,
  neutral: Ar,
  primary: Tr,
  secondary: Lr,
  light: Rr,
  base: Pr,
  dark: Br,
  info: qr,
  success: Fr,
  warning: Hr,
  danger: Kr,
  filled: Ur,
  outlined: Wr,
  text: Xr,
  "shade-lighter": "_shade-lighter_154mm_484",
  "shade-light": "_shade-light_154mm_484",
  "shade-dark": "_shade-dark_154mm_492",
  "shade-darker": "_shade-darker_154mm_495"
}, K2 = He(function({
  severity: t = "primary",
  variant: s = "filled",
  shade: o,
  size: i = "md",
  className: c,
  visible: h = !0,
  children: r,
  ...l
}, a) {
  if (h === !1) return null;
  const p = t, d = _s(s, "filled"), v = o && o !== "default" ? `shade-${o}` : null;
  return /* @__PURE__ */ n(
    "span",
    {
      ref: a,
      className: [
        kn.badge,
        kn[i],
        kn[p],
        kn[d],
        v ? kn[v] : null,
        c
      ].filter(Boolean).join(" "),
      ...l,
      children: r
    }
  );
}), Vr = "_xs_2a6lm_2", Gr = "_sm_2a6lm_7", Yr = "_md_2a6lm_1", Zr = "_lg_2a6lm_17", Jr = "_xl_2a6lm_22", Qr = {
  xs: Vr,
  sm: Gr,
  md: Yr,
  lg: Zr,
  xl: Jr
}, U2 = [
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
], eo = {
  check: /* @__PURE__ */ n("path", { d: "M20 6L9 17l-5-5" }),
  close: /* @__PURE__ */ n("path", { d: "M18 6L6 18M6 6l12 12" }),
  "chevron-down": /* @__PURE__ */ n("path", { d: "M6 9l6 6 6-6" }),
  "chevron-left": /* @__PURE__ */ n("path", { d: "M15 18l-6-6 6-6" }),
  "chevron-right": /* @__PURE__ */ n("path", { d: "M9 18l6-6-6-6" }),
  "chevron-up": /* @__PURE__ */ n("path", { d: "M18 15l-6-6-6 6" }),
  search: /* @__PURE__ */ O(Me, { children: [
    /* @__PURE__ */ n("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ n("path", { d: "M21 21l-4.3-4.3" })
  ] }),
  plus: /* @__PURE__ */ n("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ n("path", { d: "M5 12h14" }),
  alert: /* @__PURE__ */ O(Me, { children: [
    /* @__PURE__ */ n("path", { d: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" }),
    /* @__PURE__ */ n("path", { d: "M12 9v4M12 17h.01" })
  ] }),
  info: /* @__PURE__ */ O(Me, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M12 16v-4M12 8h.01" })
  ] }),
  "arrow-right": /* @__PURE__ */ n("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  "arrow-left": /* @__PURE__ */ n("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  "external-link": /* @__PURE__ */ O(Me, { children: [
    /* @__PURE__ */ n("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
    /* @__PURE__ */ n("path", { d: "M15 3h6v6M10 14L21 3" })
  ] }),
  copy: /* @__PURE__ */ O(Me, { children: [
    /* @__PURE__ */ n("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] }),
  trash: /* @__PURE__ */ n(Me, { children: /* @__PURE__ */ n("path", { d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" }) }),
  edit: /* @__PURE__ */ O(Me, { children: [
    /* @__PURE__ */ n("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ n("path", { d: "M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  settings: /* @__PURE__ */ O(Me, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ n("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] }),
  user: /* @__PURE__ */ O(Me, { children: [
    /* @__PURE__ */ n("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ n("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ O(Me, { children: [
    /* @__PURE__ */ n("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ n("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ n("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  download: /* @__PURE__ */ n("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  upload: /* @__PURE__ */ n("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  menu: /* @__PURE__ */ n("path", { d: "M3 12h18M3 6h18M3 18h18" }),
  "more-horizontal": /* @__PURE__ */ O(Me, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ n("circle", { cx: "19", cy: "12", r: "1" }),
    /* @__PURE__ */ n("circle", { cx: "5", cy: "12", r: "1" })
  ] }),
  mail: /* @__PURE__ */ O(Me, { children: [
    /* @__PURE__ */ n("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M22 6l-10 7L2 6" })
  ] }),
  lock: /* @__PURE__ */ O(Me, { children: [
    /* @__PURE__ */ n("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M7 11V7a5 5 0 0110 0v4" })
  ] }),
  eye: /* @__PURE__ */ O(Me, { children: [
    /* @__PURE__ */ n("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  "eye-off": /* @__PURE__ */ O(Me, { children: [
    /* @__PURE__ */ n("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ n("path", { d: "M1 1l22 22" })
  ] }),
  refresh: /* @__PURE__ */ O(Me, { children: [
    /* @__PURE__ */ n("path", { d: "M23 4v6h-6M1 20v-6h6" }),
    /* @__PURE__ */ n("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
  ] }),
  calendar: /* @__PURE__ */ O(Me, { children: [
    /* @__PURE__ */ n("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ n("path", { d: "M16 2v4M8 2v4M3 10h18" })
  ] }),
  clock: /* @__PURE__ */ O(Me, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M12 6v6l4 2" })
  ] }),
  "check-circle": /* @__PURE__ */ O(Me, { children: [
    /* @__PURE__ */ n("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ n("path", { d: "M22 4L12 14.01l-3-3" })
  ] }),
  "x-circle": /* @__PURE__ */ O(Me, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] }),
  shield: /* @__PURE__ */ n(Me, { children: /* @__PURE__ */ n("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  globe: /* @__PURE__ */ O(Me, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
  ] }),
  file: /* @__PURE__ */ O(Me, { children: [
    /* @__PURE__ */ n("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
    /* @__PURE__ */ n("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
  ] }),
  folder: /* @__PURE__ */ n("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" }),
  home: /* @__PURE__ */ O(Me, { children: [
    /* @__PURE__ */ n("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
    /* @__PURE__ */ n("path", { d: "M9 22V12h6v10" })
  ] }),
  key: /* @__PURE__ */ n(Me, { children: /* @__PURE__ */ n("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) }),
  link: /* @__PURE__ */ O(Me, { children: [
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
  ban: /* @__PURE__ */ O(Me, { children: [
    /* @__PURE__ */ n("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ n("path", { d: "M4.93 4.93l14.14 14.14" })
  ] })
}, Ne = He(function({ name: t, size: s = "md", strokeWidth: o = 2, className: i, ...c }, h) {
  const r = typeof s == "string";
  return /* @__PURE__ */ n(
    "svg",
    {
      ref: h,
      className: [r ? Qr[s] : null, i].filter(Boolean).join(" "),
      width: r ? void 0 : s,
      height: r ? void 0 : s,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: o,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      ...c,
      children: eo[t]
    }
  );
}), to = "_stat_sjin9_1", no = "_label_sjin9_8", so = "_row_sjin9_16", ro = "_value_sjin9_22", oo = "_delta_sjin9_28", lo = "_success_sjin9_33", ao = "_danger_sjin9_37", io = "_neutral_sjin9_41", co = "_hint_sjin9_45", nn = {
  stat: to,
  label: no,
  row: so,
  value: ro,
  delta: oo,
  success: lo,
  danger: ao,
  neutral: io,
  hint: co
}, W2 = He(function({ label: t, value: s, delta: o, deltaTone: i = "neutral", hint: c, className: h, ...r }, l) {
  return /* @__PURE__ */ O(
    "div",
    {
      ref: l,
      className: [nn.stat, h].filter(Boolean).join(" "),
      ...r,
      children: [
        /* @__PURE__ */ n("div", { className: nn.label, children: t }),
        /* @__PURE__ */ O("div", { className: nn.row, children: [
          /* @__PURE__ */ n("div", { className: nn.value, children: s }),
          o != null && /* @__PURE__ */ n("div", { className: [nn.delta, nn[i]].join(" "), children: o })
        ] }),
        c != null && /* @__PURE__ */ n("div", { className: nn.hint, children: c })
      ]
    }
  );
}), uo = "_wrap_1nflq_1", _o = "_table_1nflq_8", fo = "_caption_1nflq_14", ho = "_none_1nflq_51", po = "_horizontal_1nflq_57", mo = "_vertical_1nflq_67", go = "_alternating_1nflq_85", xo = "_start_1nflq_89", bo = "_center_1nflq_93", yo = "_end_1nflq_97", vo = "_empty_1nflq_101", Yt = {
  wrap: uo,
  table: _o,
  caption: fo,
  none: ho,
  horizontal: po,
  vertical: mo,
  alternating: go,
  start: xo,
  center: bo,
  end: yo,
  empty: vo
};
function X2({
  columns: e,
  rows: t,
  rowKey: s,
  empty: o,
  caption: i,
  gridLines: c = "default",
  allowAlternatingRows: h = !0,
  className: r,
  visible: l = !0
}) {
  if (l === !1) return null;
  const a = c === "default" || c === "both" ? "" : Yt[c];
  return /* @__PURE__ */ O("div", { className: [Yt.wrap, r].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ O(
      "table",
      {
        className: [
          Yt.table,
          a,
          h ? Yt.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          i != null && /* @__PURE__ */ n("caption", { className: Yt.caption, children: i }),
          /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ n("tr", { children: e.map((p) => /* @__PURE__ */ n(
            "th",
            {
              className: p.align != null ? Yt[p.align] : void 0,
              scope: "col",
              children: p.header
            },
            p.key
          )) }) }),
          /* @__PURE__ */ n("tbody", { children: t.map((p) => /* @__PURE__ */ n("tr", { children: e.map((d) => /* @__PURE__ */ n(
            "td",
            {
              className: d.align != null ? Yt[d.align] : void 0,
              children: d.render != null ? d.render(p) : p[d.key]
            },
            d.key
          )) }, s(p))) })
        ]
      }
    ),
    t.length === 0 && o != null && /* @__PURE__ */ n("div", { className: Yt.empty, children: o })
  ] });
}
const ko = "_emptyState_1swxw_1", wo = "_icon_1swxw_13", $o = "_title_1swxw_18", No = "_description_1swxw_24", Oo = "_action_1swxw_30", wn = {
  emptyState: ko,
  icon: wo,
  title: $o,
  description: No,
  action: Oo
};
function V2({
  icon: e,
  title: t,
  description: s,
  action: o,
  className: i,
  visible: c = !0
}) {
  return c === !1 ? null : /* @__PURE__ */ O("div", { className: [wn.emptyState, i].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ n("div", { className: wn.icon, children: e }),
    /* @__PURE__ */ n("div", { className: wn.title, children: t }),
    s != null && /* @__PURE__ */ n("div", { className: wn.description, children: s }),
    o != null && /* @__PURE__ */ n("div", { className: wn.action, children: o })
  ] });
}
const So = "_field_149oz_1", Do = "_label_149oz_8", Mo = "_required_149oz_14", zo = "_hint_149oz_19", Co = "_error_149oz_24", $n = {
  field: So,
  label: Do,
  required: Mo,
  hint: zo,
  error: Co
};
function G2({
  label: e,
  htmlFor: t,
  required: s,
  hint: o,
  supporting: i,
  error: c,
  children: h,
  className: r,
  visible: l = !0
}) {
  const a = o ?? i, p = Fe(), d = Fe(), v = Fe();
  if (l === !1) return null;
  const y = c != null ? d : a != null ? v : null, w = typeof h == "function" ? h({ inputId: p, hintId: v, errorId: d }) : h, k = Lt(w) && typeof w.props.id == "string" ? w.props.id : void 0, _ = k ?? t ?? p, f = Lt(w) && (y != null || k == null && typeof w.type == "string"), u = k != null || t != null || f, x = f && Lt(w) ? ds(w, {
    id: _,
    "aria-describedby": y != null ? [
      w.props["aria-describedby"],
      y
    ].filter(($) => typeof $ == "string").join(" ") || void 0 : w.props["aria-describedby"],
    "aria-invalid": c != null ? !0 : w.props["aria-invalid"]
  }) : w;
  return /* @__PURE__ */ O("div", { className: [$n.field, r].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ O(
      "label",
      {
        className: $n.label,
        htmlFor: u ? _ : void 0,
        children: [
          e,
          s === !0 && /* @__PURE__ */ n("span", { className: $n.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    x,
    c != null ? /* @__PURE__ */ n("div", { id: d, className: $n.error, "aria-live": "polite", children: c }) : a != null ? /* @__PURE__ */ n("div", { id: v, className: $n.hint, children: a }) : null
  ] });
}
const Eo = "_formfield_1kmwl_1", Io = "_content_1kmwl_8", jo = "_floating_1kmwl_43", Ao = "_label_1kmwl_111", To = "_start_1kmwl_132", Lo = "_required_1kmwl_169", Ro = "_end_1kmwl_175", Po = "_filled_1kmwl_192", Bo = "_flat_1kmwl_199", qo = "_helper_1kmwl_206", Fo = "_invalid_1kmwl_211", Ct = {
  formfield: Eo,
  content: Io,
  floating: jo,
  label: Ao,
  start: To,
  required: Lo,
  end: Ro,
  filled: Po,
  flat: Bo,
  helper: qo,
  invalid: Fo
};
function Y2({
  text: e,
  start: t,
  end: s,
  helper: o,
  component: i,
  allowFloatingLabel: c = !0,
  variant: h = "outlined",
  invalid: r = !1,
  required: l = !1,
  children: a,
  className: p,
  visible: d = !0
}) {
  const v = Fe(), y = Fe();
  if (d === !1) return null;
  const w = i ?? v, k = typeof a == "function" ? a({
    inputId: w
  }) : a, _ = Lt(k) ? k.type : null, f = typeof _ == "string", u = Lt(k) && typeof _ != "symbol", x = Lt(k) ? k.props : null, $ = typeof x?.id == "string" ? x.id : void 0, m = f && Lt(k) ? k.type.toLowerCase() : null, S = m != null && (m === "input" ? typeof x?.type != "string" || x.type.toLowerCase() !== "hidden" : m === "button" || m === "meter" || m === "output" || m === "progress" || m === "select" || m === "textarea"), b = u && (o != null || r || $ == null && S), N = $ != null || i != null || b, E = m === "input" && typeof x?.type == "string" ? x.type.toLowerCase() : null, I = m === "textarea" || m === "input" && (E == null || [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number"
  ].includes(E)), C = b && Lt(k) ? ds(
    k,
    {
      id: $ ?? w,
      ...c && I && x?.placeholder == null ? { placeholder: " " } : {},
      ...o != null ? {
        "aria-describedby": [
          x?.["aria-describedby"],
          y
        ].filter((g) => typeof g == "string").join(" ")
      } : {},
      ...r ? {
        "aria-invalid": !0
      } : {}
    }
  ) : k, D = e != null ? /* @__PURE__ */ O(
    "label",
    {
      className: Ct.label,
      htmlFor: N ? $ ?? w : void 0,
      children: [
        e,
        l === !0 && /* @__PURE__ */ n("span", { className: Ct.required, "aria-hidden": "true", children: "*" })
      ]
    }
  ) : null;
  return /* @__PURE__ */ O(
    "div",
    {
      className: [
        Ct.formfield,
        Ct[h],
        c ? Ct.floating : null,
        r ? Ct.invalid : null,
        p
      ].filter(Boolean).join(" "),
      children: [
        c ? null : D,
        /* @__PURE__ */ O("div", { className: Ct.content, children: [
          t != null && /* @__PURE__ */ n("div", { className: Ct.start, children: t }),
          C,
          c ? D : null,
          s != null && /* @__PURE__ */ n("div", { className: Ct.end, children: s })
        ] }),
        o != null && /* @__PURE__ */ n("div", { id: y, className: Ct.helper, children: o })
      ]
    }
  );
}
const Ho = "_fieldset_18z6t_1", Ko = "_legend_18z6t_11", Uo = "_legendText_18z6t_20", Wo = "_toggle_18z6t_24", Xo = "_content_18z6t_45", Vo = "_summary_18z6t_49", sn = {
  fieldset: Ho,
  legend: Ko,
  legendText: Uo,
  toggle: Wo,
  content: Xo,
  summary: Vo
};
function Z2({
  text: e,
  headerTemplate: t,
  icon: s,
  iconColor: o,
  allowCollapse: i = !1,
  collapsed: c,
  defaultCollapsed: h = !1,
  summary: r,
  expandTitle: l,
  collapseTitle: a,
  expandAriaLabel: p,
  collapseAriaLabel: d,
  onExpand: v,
  onCollapse: y,
  children: w,
  className: k,
  visible: _ = !0
}) {
  const f = Fe(), [u, x] = V(h);
  if (_ === !1) return null;
  const $ = c ?? u, m = i ? `${f}-content` : void 0, S = () => {
    const D = !$;
    c === void 0 && x(D), D ? y?.() : v?.();
  }, b = i || e != null || s != null || t != null, N = i ? $ : !1, E = i && $ && r != null, I = N ? l ?? "Expand" : a ?? "Collapse", C = N ? p ?? "Expand" : d ?? "Collapse";
  return /* @__PURE__ */ O(
    "fieldset",
    {
      className: [sn.fieldset, k].filter(Boolean).join(" "),
      children: [
        b ? /* @__PURE__ */ n("legend", { className: sn.legend, children: i ? /* @__PURE__ */ O(Me, { children: [
          /* @__PURE__ */ O(
            "button",
            {
              type: "button",
              className: sn.toggle,
              title: I,
              "aria-label": e == null ? C : void 0,
              "aria-expanded": !N,
              "aria-controls": m,
              onClick: S,
              children: [
                /* @__PURE__ */ n(
                  Ne,
                  {
                    name: N ? "plus" : "minus",
                    size: 16,
                    "aria-hidden": "true"
                  }
                ),
                s != null && /* @__PURE__ */ n(
                  Ne,
                  {
                    name: s,
                    "aria-hidden": "true",
                    ...o != null ? { style: { color: o } } : {}
                  }
                ),
                e != null && /* @__PURE__ */ n("span", { className: sn.legendText, children: e })
              ]
            }
          ),
          t
        ] }) : /* @__PURE__ */ O(Me, { children: [
          s != null && /* @__PURE__ */ n(
            Ne,
            {
              name: s,
              "aria-hidden": "true",
              ...o != null ? { style: { color: o } } : {}
            }
          ),
          e != null && /* @__PURE__ */ n("span", { className: sn.legendText, children: e }),
          t
        ] }) }) : null,
        /* @__PURE__ */ n(
          "div",
          {
            className: sn.content,
            id: m,
            hidden: N,
            children: w
          }
        ),
        E ? /* @__PURE__ */ n("div", { className: sn.summary, children: r }) : null
      ]
    }
  );
}
const Go = "_form_19k3s_1", Yo = {
  form: Go
}, Vs = Xs(null);
function Zo() {
  const e = Ws(Vs);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function J2({
  model: e,
  onSubmit: t,
  onInvalidSubmit: s,
  action: o,
  method: i,
  children: c,
  className: h
}) {
  const [r, l] = V({}), [a, p] = V(0), d = le(r);
  d.current = r;
  const v = H((x) => {
    l(
      ($) => $[x.name] === x ? $ : { ...$, [x.name]: x }
    );
  }, []), y = H((x) => {
    l(($) => {
      if (!(x in $)) return $;
      const m = { ...$ };
      return delete m[x], m;
    });
  }, []), w = H(() => {
    const x = {};
    for (const $ of Object.values(d.current)) {
      const m = $.validate();
      m.length > 0 && (x[$.name] = m);
    }
    return x;
  }, []), k = H(() => {
    const x = w();
    p(($) => $ + 1), Object.keys(x).length === 0 ? t?.(e) : s?.(x);
  }, [w, e, t, s]), _ = (x) => {
    o != null && i != null || (x.preventDefault(), k());
  }, f = $e(
    () => ({ registerField: v, unregisterField: y, submit: k, submitCount: a }),
    [v, y, k, a]
  ), u = [Yo.form, h].filter(Boolean).join(" ");
  return /* @__PURE__ */ n(Vs.Provider, { value: f, children: /* @__PURE__ */ n(
    "form",
    {
      className: u,
      onSubmit: _,
      action: o,
      method: i,
      noValidate: !0,
      children: c
    }
  ) });
}
const dn = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", Q2 = (e = "Required") => (t) => dn(t) ? e : null, ev = (e = "Invalid email") => (t) => dn(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, tv = (e, t = "Invalid format") => (s) => dn(s) || e.test(String(s)) ? null : t, nv = (e, t = `Minimum ${e} characters`) => (s) => dn(s) || String(s).length >= e ? null : t, sv = (e, t = `Maximum ${e} characters`) => (s) => dn(s) || String(s).length <= e ? null : t, rv = (e, t, s = `Between ${e} and ${t}`) => (o) => {
  if (dn(o)) return null;
  const i = Number(o);
  return !Number.isNaN(i) && i >= e && i <= t ? null : s;
}, ov = (e, t = "Values do not match") => (s, o) => {
  if (dn(s)) return null;
  const i = typeof e == "function" ? e(o) : e;
  return s === i ? null : t;
}, lv = (e = "Required") => (t) => t === !0 ? null : e, av = (e) => (t, s) => e(t, s);
function Jo(e, t, s) {
  return e.map((o) => o(t, s)).filter((o) => o != null);
}
function iv(e, t) {
  const { registerField: s, unregisterField: o, submitCount: i } = Zo(), [c, h] = V(t?.initialValue), [r, l] = V(!1), [a, p] = V(!1), d = le(() => []);
  d.current = () => Jo(t?.validate ?? [], c), ke(() => (s({ name: e, validate: () => d.current() }), () => o(e)), [e, s, o]), ke(() => {
    i > 0 && (l(!0), p(!1));
  }, [i]);
  const v = r && !a ? d.current() : [];
  return { value: c, setValue: (w) => {
    h(w), p(!0);
  }, errors: v };
}
const Qo = "_select_1vjst_1", el = "_invalid_1vjst_33", tl = "_xs_1vjst_40", nl = "_sm_1vjst_48", sl = "_md_1vjst_56", rl = "_lg_1vjst_62", ol = "_xl_1vjst_68", Qn = {
  select: Qo,
  invalid: el,
  xs: tl,
  sm: nl,
  md: sl,
  lg: rl,
  xl: ol
}, yn = He(
  function({ size: t = "md", invalid: s = !1, options: o, children: i, className: c, ...h }, r) {
    return /* @__PURE__ */ n(
      "select",
      {
        ref: r,
        "data-size": t,
        className: [
          Qn.select,
          Qn[t],
          s ? Qn.invalid : null,
          c
        ].filter(Boolean).join(" "),
        "aria-invalid": s || void 0,
        ...h,
        children: o != null ? o.map((l) => /* @__PURE__ */ n(
          "option",
          {
            value: l.value,
            disabled: l.disabled,
            children: l.label
          },
          l.value
        )) : i
      }
    );
  }
), Gs = [
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
], Nn = {
  string: "Contains",
  number: "Equals",
  boolean: "Equals",
  date: "Equals",
  enum: "Equals"
}, ll = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
];
function al(e) {
  return ll.includes(e);
}
function Zn(e, t) {
  return t.split(".").reduce((s, o) => {
    if (s != null)
      return s[o];
  }, e);
}
function ps(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function Ln(e, t) {
  const s = ps(e), o = ps(t);
  if (typeof s == "number" && typeof o == "number") return s - o;
  const i = String(s ?? ""), c = String(o ?? "");
  return i < c ? -1 : i > c ? 1 : 0;
}
function Jn(e) {
  if (e.secondOperator == null) return !1;
  if (al(e.secondOperator)) return !0;
  const t = e.secondValue;
  return t != null && t !== "";
}
function ms(e, t, s) {
  const o = Zn(t, e.property), i = gs(
    o,
    e.value,
    e.operator,
    s
  );
  if (!Jn(e)) return i;
  const c = gs(
    o,
    e.secondValue,
    e.secondOperator,
    s
  );
  return (e.logicalOperator ?? "And") === "And" ? i && c : i || c;
}
function gs(e, t, s, o) {
  const i = o === "CaseInsensitive", c = (l) => i && typeof l == "string" ? l.toLowerCase() : l, h = c(e), r = c(t);
  switch (s) {
    case "Equals":
      return h === r || Array.isArray(h) && h.some((l) => c(l) === r);
    case "NotEquals":
      return h !== r && !(Array.isArray(h) && h.some((l) => c(l) === r));
    case "LessThan":
      return Ln(h, r) < 0;
    case "LessThanOrEquals":
      return Ln(h, r) <= 0;
    case "GreaterThan":
      return Ln(h, r) > 0;
    case "GreaterThanOrEquals":
      return Ln(h, r) >= 0;
    case "Contains":
      return typeof h == "string" && typeof r == "string" && h.includes(r);
    case "StartsWith":
      return typeof h == "string" && typeof r == "string" && h.startsWith(r);
    case "EndsWith":
      return typeof h == "string" && typeof r == "string" && h.endsWith(r);
    case "DoesNotContain":
      return typeof h == "string" && typeof r == "string" && !h.includes(r);
    case "In":
      return Array.isArray(r) && r.some((l) => c(l) === h);
    case "NotIn":
      return Array.isArray(r) && !r.some((l) => c(l) === h);
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
function fs(e) {
  return "filters" in e;
}
function Ys(e, t, s = {}) {
  const o = s.logicalOperator ?? "And", i = s.caseSensitivity ?? "CaseInsensitive";
  if (fs(t)) {
    if (t.filters.length === 0) return !0;
    const c = t.operator ?? o;
    return t.filters[c === "Or" ? "some" : "every"](
      (h) => Ys(e, h, { logicalOperator: c, caseSensitivity: i })
    );
  }
  return t.operator === "Custom", ms(t, e, i);
}
function Zs(e, t, s = {}) {
  return e.filter((o) => Ys(o, t, s));
}
function il(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function gt(e) {
  return typeof e == "string" ? `"${il(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(gt).join(", ")}]` : `"${String(e)}"`;
}
function cl(e) {
  const t = (i, c) => {
    switch (i) {
      case "Equals":
        return `${e.property}.Equals(${gt(c)})`;
      case "NotEquals":
        return `!${e.property}.Equals(${gt(c)})`;
      case "LessThan":
        return `${e.property}.LessThan(${gt(c)})`;
      case "LessThanOrEquals":
        return `${e.property}.LessThanOrEquals(${gt(c)})`;
      case "GreaterThan":
        return `${e.property}.GreaterThan(${gt(c)})`;
      case "GreaterThanOrEquals":
        return `${e.property}.GreaterThanOrEquals(${gt(c)})`;
      case "Contains":
        return `${e.property}.Contains(${gt(c)})`;
      case "StartsWith":
        return `${e.property}.StartsWith(${gt(c)})`;
      case "EndsWith":
        return `${e.property}.EndsWith(${gt(c)})`;
      case "DoesNotContain":
        return `!${e.property}.Contains(${gt(c)})`;
      case "In":
        return `${e.property}.In(${gt(c)})`;
      case "NotIn":
        return `!${e.property}.In(${gt(c)})`;
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
  if (!Jn(e))
    return t(e.operator, e.value);
  const s = e.logicalOperator ?? "And", o = e.secondOperator;
  return `(${t(e.operator, e.value)} ${s} ${t(
    o,
    e.secondValue
  )})`;
}
function dl(e) {
  return fs(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(dl).filter(Boolean).join(` ${e.operator} `)})` : cl(e);
}
function ul(e) {
  return e.replace(/'/g, "''");
}
const _l = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function fl(e, t) {
  const s = e.property, o = t === "CaseInsensitive", i = (a) => o ? `tolower(${a})` : a, c = (a) => typeof a == "string" ? `'${ul(a)}'` : a instanceof Date ? `'${a.toISOString()}'` : String(a ?? ""), h = (a, p) => {
    const d = typeof p == "string", v = d && o ? i(s) : s;
    switch (a) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${v} ${_l[a]} ${d && o ? i(c(p)) : c(p)}`;
      case "Contains":
        return `contains(${i(s)}, ${i(c(p))})`;
      case "StartsWith":
        return `startswith(${i(s)}, ${i(c(p))})`;
      case "EndsWith":
        return `endswith(${i(s)}, ${i(c(p))})`;
      case "DoesNotContain":
        return `not(contains(${i(s)}, ${i(c(p))}))`;
      case "In":
        return Array.isArray(p) ? `${v} in (${p.map((y) => c(y)).join(", ")})` : `${v} in (${c(p)})`;
      case "NotIn":
        return Array.isArray(p) ? `not(${v} in (${p.map((y) => c(y)).join(", ")}))` : `not(${v} in (${c(p)}))`;
      case "IsNull":
        return `${s} eq null`;
      case "IsNotNull":
        return `${s} ne null`;
      case "IsEmpty":
        return `${s} eq ''`;
      case "IsNotEmpty":
        return `${s} ne ''`;
      case "Custom":
        return `${s} custom`;
      default:
        return "";
    }
  };
  if (!Jn(e))
    return h(e.operator, e.value);
  const r = (e.logicalOperator ?? "And") === "And" ? "and" : "or", l = e.secondOperator;
  return `(${h(e.operator, e.value)} ${r} ${h(
    l,
    e.secondValue
  )})`;
}
function hl(e, t = {}) {
  const s = t.caseSensitivity ?? "CaseInsensitive";
  if (fs(e)) {
    if (e.filters.length === 0) return "";
    const o = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((i) => hl(i, { caseSensitivity: s })).filter(Boolean).join(` ${o} `)})`;
  }
  return fl(e, s);
}
function pl(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((s, o) => {
    for (const i of t) {
      const c = i.sortOrder === "Ascending" ? 1 : -1, h = Ln(
        Zn(s, i.property),
        Zn(o, i.property)
      );
      if (h !== 0) return h * c;
    }
    return 0;
  });
}
const ml = "_filter_1h8zc_1", gl = "_rows_1h8zc_9", xl = "_row_1h8zc_9", bl = "_join_1h8zc_21", yl = "_property_1h8zc_30", vl = "_operator_1h8zc_34", kl = "_value_1h8zc_38", wl = "_remove_1h8zc_42", $l = "_bar_1h8zc_58", Nl = "_add_1h8zc_64", Ol = "_custom_1h8zc_78", Sl = "_summary_1h8zc_82", Dl = "_second_1h8zc_87", Ml = "_secondAdd_1h8zc_91", zl = "_addSecond_1h8zc_95", Cl = "_joinSelect_1h8zc_109", Ye = {
  filter: ml,
  rows: gl,
  row: xl,
  join: bl,
  property: yl,
  operator: vl,
  value: kl,
  remove: wl,
  bar: $l,
  add: Nl,
  custom: Ol,
  summary: Sl,
  second: Dl,
  secondAdd: Ml,
  addSecond: zl,
  joinSelect: Cl
}, On = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
], xs = {
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
function bs({
  property: e,
  value: t,
  onChange: s
}) {
  if (e.editor != null)
    return /* @__PURE__ */ n(Me, { children: e.editor({ value: t, onChange: s }) });
  const o = e.type ?? "string";
  if (o === "enum" && e.values != null)
    return /* @__PURE__ */ n(
      yn,
      {
        "aria-label": e.title ?? e.name,
        className: Ye.value,
        options: e.values,
        value: String(t ?? ""),
        onChange: (c) => s(c.target.value)
      }
    );
  if (o === "boolean")
    return /* @__PURE__ */ n(
      yn,
      {
        "aria-label": e.title ?? e.name,
        className: Ye.value,
        options: [
          { value: "", label: "" },
          { value: "true", label: "True" },
          { value: "false", label: "False" }
        ],
        value: t == null ? "" : String(t),
        onChange: (c) => {
          c.target.value === "" ? s(void 0) : s(c.target.value === "true");
        }
      }
    );
  const i = o === "number" ? { type: "number" } : o === "date" ? { type: "date" } : { type: "text" };
  return /* @__PURE__ */ n(
    "input",
    {
      "aria-label": e.title ?? e.name,
      className: Ye.value,
      ...i,
      value: t == null ? "" : String(t),
      onChange: (c) => s(
        o === "number" && c.target.value !== "" ? Number(c.target.value) : c.target.value
      )
    }
  );
}
function cv({
  properties: e,
  logicalOperator: t = "And",
  filterCaseSensitivity: s = "CaseInsensitive",
  initialRows: o,
  uniqueFilters: i = !1,
  className: c,
  viewChanged: h,
  items: r,
  children: l
}) {
  const [a, p] = V(
    () => o != null && o.length > 0 ? o.map((f, u) => ({ id: u, ...f })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: Nn[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), d = (f, u) => {
    p(
      (x) => x.map(($) => $.id === f ? { ...$, ...u } : $)
    );
  }, v = () => {
    const f = a[a.length - 1], u = Math.max(0, ...a.map(($) => $.id)) + 1, x = e[0];
    p(($) => [
      ...$,
      {
        id: u,
        property: f?.property ?? x?.name ?? "",
        operator: Nn[e.find(
          (m) => m.name === (f?.property ?? x?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, y = (f) => {
    p(
      (u) => u.length > 1 ? u.filter((x) => x.id !== f) : u
    );
  }, w = $e(() => {
    const f = [];
    for (const u of a) {
      if (u.property === "" || (u.value == null || u.value === "") && !On.includes(u.operator)) continue;
      const $ = {
        property: u.property,
        operator: u.operator,
        value: u.value
      }, { secondOperator: m } = u;
      m != null && Jn(u) && ($.secondOperator = m, $.secondValue = u.secondValue, $.logicalOperator = u.logicalOperator ?? "And"), f.push($);
    }
    return f;
  }, [a]), k = $e(() => r == null || w.length === 0 ? r : Zs(r, {
    operator: t,
    filters: w
  }, {
    caseSensitivity: s
  }), [r, w, t, s]);
  ke(() => {
    h != null && r != null && h(k ?? []);
  }, [k]);
  const _ = (f) => e.find((u) => u.name === f) ?? { name: f, type: "string" };
  return /* @__PURE__ */ O("div", { className: [Ye.filter, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ n("div", { className: Ye.rows, role: "group", "aria-label": "Filter conditions", children: a.map((f, u) => {
      const x = _(f.property), $ = i ? [Nn[x.type ?? "string"]] : Gs, m = !On.includes(f.operator), S = f.secondOperator != null;
      return /* @__PURE__ */ O(sr, { children: [
        /* @__PURE__ */ O("div", { className: Ye.row, children: [
          u > 0 ? /* @__PURE__ */ n("span", { className: Ye.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ n(
            yn,
            {
              "aria-label": `Condition ${u + 1} property`,
              className: Ye.property,
              value: f.property,
              onChange: (b) => {
                const N = e.find(
                  (E) => E.name === b.target.value
                );
                d(f.id, {
                  property: b.target.value,
                  operator: Nn[N?.type ?? "string"],
                  value: void 0,
                  secondOperator: void 0,
                  secondValue: void 0,
                  logicalOperator: void 0
                });
              },
              options: e.map((b) => ({
                value: b.name,
                label: b.title ?? b.name
              }))
            }
          ),
          /* @__PURE__ */ n(
            yn,
            {
              "aria-label": `Condition ${u + 1} operator`,
              className: Ye.operator,
              value: f.operator,
              onChange: (b) => {
                const N = b.target.value;
                d(
                  f.id,
                  On.includes(N) ? {
                    operator: N,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: N }
                );
              },
              options: $.map((b) => ({
                value: b,
                label: xs[b]
              }))
            }
          ),
          m ? /* @__PURE__ */ n(
            bs,
            {
              property: x,
              value: f.value,
              onChange: (b) => d(f.id, { value: b })
            }
          ) : null,
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Ye.remove,
              "aria-label": `Remove condition ${u + 1}`,
              onClick: () => y(f.id),
              children: /* @__PURE__ */ n(Ne, { name: "close", size: "sm" })
            }
          )
        ] }),
        m ? S ? /* @__PURE__ */ O(
          "div",
          {
            className: [Ye.row, Ye.second].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ n(
                yn,
                {
                  "aria-label": `Condition ${u + 1} second-operator logic`,
                  className: Ye.joinSelect,
                  value: f.logicalOperator ?? "And",
                  onChange: (b) => d(f.id, {
                    logicalOperator: b.target.value
                  }),
                  options: [
                    { value: "And", label: "And" },
                    { value: "Or", label: "Or" }
                  ]
                }
              ),
              /* @__PURE__ */ n(
                yn,
                {
                  "aria-label": `Condition ${u + 1} second operator`,
                  className: Ye.operator,
                  value: f.secondOperator,
                  onChange: (b) => {
                    const N = b.target.value;
                    d(
                      f.id,
                      On.includes(N) ? { secondOperator: N, secondValue: void 0 } : { secondOperator: N }
                    );
                  },
                  options: $.map((b) => ({
                    value: b,
                    label: xs[b]
                  }))
                }
              ),
              f.secondOperator == null || !On.includes(f.secondOperator) ? /* @__PURE__ */ n(
                bs,
                {
                  property: x,
                  value: f.secondValue,
                  onChange: (b) => d(f.id, { secondValue: b })
                }
              ) : null,
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: Ye.remove,
                  "aria-label": `Remove second condition ${u + 1}`,
                  onClick: () => d(f.id, {
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  }),
                  children: /* @__PURE__ */ n(Ne, { name: "close", size: "sm" })
                }
              )
            ]
          }
        ) : /* @__PURE__ */ n("div", { className: Ye.secondAdd, children: /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: Ye.addSecond,
            onClick: () => d(f.id, {
              secondOperator: Nn[x.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, f.id);
    }) }),
    /* @__PURE__ */ O("div", { className: Ye.bar, children: [
      /* @__PURE__ */ n("button", { type: "button", className: Ye.add, onClick: v, children: "Add filter" }),
      l != null ? /* @__PURE__ */ n("div", { className: Ye.custom, children: l }) : null,
      r != null ? /* @__PURE__ */ O("span", { className: Ye.summary, "aria-live": "polite", children: [
        k?.length ?? 0,
        " of ",
        r.length
      ] }) : null
    ] })
  ] });
}
const El = "_pager_4cpp0_1", Il = "_alignLeft_4cpp0_10", jl = "_alignCenter_4cpp0_14", Al = "_alignRight_4cpp0_18", Tl = "_alignJustify_4cpp0_22", Ll = "_summary_4cpp0_26", Rl = "_controls_4cpp0_31", Pl = "_button_4cpp0_37", Bl = "_active_4cpp0_73", ql = "_ellipsis_4cpp0_85", Fl = "_size_4cpp0_91", at = {
  pager: El,
  alignLeft: Il,
  alignCenter: jl,
  alignRight: Al,
  alignJustify: Tl,
  summary: Ll,
  controls: Rl,
  button: Pl,
  active: Bl,
  ellipsis: ql,
  size: Fl
};
function Hl(e, t, s, o) {
  return e.replace("{0}", String(t)).replace("{1}", String(s)).replace("{2}", String(o));
}
function ys(e, t) {
  return e.replace("{0}", String(t));
}
function Kl(e, t, s) {
  if (t <= s)
    return Array.from({ length: t }, (r, l) => l + 1);
  const o = Math.floor(s / 2);
  let i = Math.max(1, e - o);
  const c = Math.min(t, i + s - 1);
  i = Math.max(1, c - s + 1);
  const h = [];
  for (let r = i; r <= c; r++) h.push(r);
  return i > 2 && h.unshift("ellipsis"), i > 1 && h.unshift(1), c < t - 1 && h.push("ellipsis"), c < t && h.push(t), h;
}
function Ul({
  count: e,
  pageSize: t,
  page: s,
  defaultPage: o = 1,
  pageSizeOptions: i,
  pageNumbersCount: c = 5,
  alwaysVisible: h = !1,
  horizontalAlign: r = "left",
  showPagingSummary: l,
  showPageSizeSelector: a = !0,
  pagingSummaryFormat: p = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: d,
  pageSizeText: v = "Items per page",
  firstPageTitle: y = "First page",
  prevPageTitle: w = "Previous page",
  nextPageTitle: k = "Next page",
  lastPageTitle: _ = "Last page",
  pageTitleFormat: f = "Page {0}",
  pageAriaLabelFormat: u = "Page {0}",
  onPageChange: x,
  onPageSizeChange: $,
  ariaLabel: m = "Pagination",
  className: S,
  visible: b = !0
}) {
  const N = s ?? o, [E, I] = V(N), C = s !== void 0, D = C ? N : E, g = Math.max(1, Math.ceil(e / t)), z = Math.min(Math.max(1, D), g), P = l ?? !0, j = h || g > 1, T = Kl(z, g, c), q = H(
    (K) => {
      const te = Math.min(Math.max(1, K), g);
      C || I(te);
      const oe = (te - 1) * t;
      x?.({
        page: te,
        skip: oe,
        top: t,
        pageCount: g,
        pageSize: t
      });
    },
    [C, x, g, t]
  ), X = r === "center" ? at.alignCenter : r === "right" ? at.alignRight : r === "justify" ? at.alignJustify : at.alignLeft, Z = {
    count: e,
    pageNumber: z,
    pageSize: t,
    pageCount: g
  }, Q = (K) => {
    const te = Array.from(
      K.currentTarget.querySelectorAll(
        "button[data-pager-page]"
      )
    ), oe = te.indexOf(document.activeElement);
    oe !== -1 && (K.key === "ArrowRight" || K.key === "ArrowDown" ? (K.preventDefault(), (te[oe + 1] ?? te[0])?.focus()) : K.key === "ArrowLeft" || K.key === "ArrowUp" ? (K.preventDefault(), (te[oe - 1] ?? te[te.length - 1])?.focus()) : K.key === "Home" ? (K.preventDefault(), te[0]?.focus()) : K.key === "End" && (K.preventDefault(), te[te.length - 1]?.focus()));
  };
  return b === !1 || !j ? null : /* @__PURE__ */ O(
    "nav",
    {
      className: [at.pager, X, S].filter(Boolean).join(" "),
      "aria-label": m,
      children: [
        P && /* @__PURE__ */ n("span", { className: at.summary, "aria-live": "polite", children: d ? d(Z) : Hl(p, z, g, e) }),
        /* @__PURE__ */ O(
          "div",
          {
            className: at.controls,
            role: "group",
            "aria-label": m,
            onKeyDown: Q,
            children: [
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: at.button,
                  disabled: z <= 1,
                  onClick: () => q(1),
                  "aria-label": y,
                  title: y,
                  children: "«"
                }
              ),
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: at.button,
                  disabled: z <= 1,
                  onClick: () => q(z - 1),
                  "aria-label": w,
                  title: w,
                  children: "‹"
                }
              ),
              T.map(
                (K, te) => K === "ellipsis" ? /* @__PURE__ */ n("span", { className: at.ellipsis, "aria-hidden": "true", children: "…" }, `e${te}`) : /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    "data-pager-page": K,
                    className: [at.button, K === z ? at.active : ""].filter(Boolean).join(" "),
                    "aria-current": K === z ? "page" : void 0,
                    "aria-label": ys(u, K),
                    title: ys(f, K),
                    onClick: () => q(K),
                    children: K
                  },
                  K
                )
              ),
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: at.button,
                  disabled: z >= g,
                  onClick: () => q(z + 1),
                  "aria-label": k,
                  title: k,
                  children: "›"
                }
              ),
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: at.button,
                  disabled: z >= g,
                  onClick: () => q(g),
                  "aria-label": _,
                  title: _,
                  children: "»"
                }
              )
            ]
          }
        ),
        a && i && i.length > 0 && /* @__PURE__ */ O("label", { className: at.size, children: [
          /* @__PURE__ */ n("span", { children: v }),
          /* @__PURE__ */ n(
            "select",
            {
              value: t,
              onChange: (K) => $?.(Number(K.target.value)),
              "aria-label": v,
              children: i.map((K) => /* @__PURE__ */ n("option", { value: K, children: K }, K))
            }
          )
        ] })
      ]
    }
  );
}
function os(e) {
  const { pageNumber: t, onPageChange: s, summaryTemplate: o, showSummary: i, ...c } = e;
  return /* @__PURE__ */ n(
    Ul,
    {
      page: t,
      showPagingSummary: i,
      pagingSummaryFormat: "Page {0} of {1}",
      pageAriaLabelFormat: "{0}",
      pageTitleFormat: "{0}",
      alwaysVisible: !0,
      pagingSummaryTemplate: o ? (r) => o({
        count: r.count,
        pageNumber: r.pageNumber,
        pageSize: r.pageSize
      }) : void 0,
      onPageChange: s ? (r) => s(r.page) : void 0,
      ...c
    }
  );
}
function Wl(e, t, s, o, i, c) {
  if (!t || !s) return e.map((l) => ({ type: "row", row: l }));
  const h = /* @__PURE__ */ new Map();
  e.forEach((l) => {
    const a = String(i(l, t) ?? ""), p = h.get(a);
    p ? p.push(l) : h.set(a, [l]);
  });
  const r = [];
  return h.forEach((l, a) => {
    const p = l[0], d = p != null ? i(p, t) : void 0;
    r.push({
      type: "group",
      group: {
        key: a,
        display: c(d),
        property: t,
        title: s.title ?? t,
        count: l.length
      }
    }), o.has(a) && l.forEach((v) => r.push({ type: "row", row: v }));
  }), r;
}
function Bn(e, t) {
  return e.property ?? `col-${t}`;
}
function Xl(e, t) {
  const s = {};
  let o = 0;
  return e.forEach(({ key: i, column: c }) => {
    if (!c.frozen) return;
    s[i] = o === 0 ? "0px" : `${o}px`;
    const h = t[i] ?? c.width ?? "8rem";
    o += parseFloat(h);
  }), s;
}
function Vl(e, t) {
  if (e !== void 0)
    switch (t) {
      case "number": {
        const s = Number(e);
        return Number.isNaN(s) ? e : s;
      }
      case "date": {
        const s = new Date(e);
        return Number.isNaN(s.getTime()) ? e : s;
      }
      case "boolean":
        return e === "true" ? !0 : e === "false" ? !1 : e;
      default:
        return e;
    }
}
function Sn(e, t) {
  if (t != null)
    return Zn(e, t);
}
function vs(e, t) {
  if (t == null || t === "") return String(e ?? "");
  const s = /^N(\d+)$/i.exec(t);
  if (s && typeof e == "number") return e.toFixed(Number(s[1]));
  if (t === "d" || t === "D") {
    const o = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return o != null && !Number.isNaN(o.getTime()) ? o.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const ks = [
  "Ascending",
  "Descending",
  null
];
function Gl(e, t, s = {}) {
  const o = e.find((c) => c.property === t), i = ks[(o ? ks.indexOf(o.sortOrder) : -1) + 1] ?? null;
  return i == null ? e.filter((c) => c.property !== t) : s.multi ? [
    ...e.filter((c) => c.property !== t),
    { property: t, sortOrder: i }
  ] : [{ property: t, sortOrder: i }];
}
function Yl(e, t) {
  return pl(e, t);
}
function Zl(e, t, s) {
  const o = Math.max(1, Math.ceil(e.length / s)), i = Math.min(Math.max(1, t), o), c = (i - 1) * s;
  return {
    items: e.slice(c, c + s),
    pageCount: o,
    pageNumber: i,
    total: e.length
  };
}
function Jl(e, t, s = {}) {
  const o = [...t.filters.entries()].filter(([, r]) => r.value !== "" && r.value !== void 0).map(
    ([r, l]) => ({
      property: r,
      operator: l.operator ?? "Contains",
      value: Vl(
        l.value,
        s.types?.[r] ?? "string"
      )
    })
  ), i = o.length > 0 ? Zs(
    e,
    { operator: s.logicalOperator ?? "And", filters: o },
    {
      logicalOperator: s.logicalOperator ?? "And",
      caseSensitivity: s.caseSensitivity ?? "CaseInsensitive"
    }
  ) : e, c = Yl(i, t.sorts);
  return {
    ...Zl(c, t.pageNumber, t.pageSize),
    sorts: t.sorts,
    filters: t.filters,
    pageSize: t.pageSize
  };
}
function Ql(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
const ea = "_grid_hbpof_1", ta = "_toolbar_hbpof_8", na = "_picker_hbpof_13", sa = "_pickerButton_hbpof_17", ra = "_pickerPanel_hbpof_31", oa = "_pickerItem_hbpof_46", la = "_groupPanel_hbpof_55", aa = "_groupPanelActive_hbpof_66", ia = "_groupPanelText_hbpof_70", ca = "_groupChip_hbpof_74", da = "_groupRemove_hbpof_85", ua = "_groupRow_hbpof_94", _a = "_groupCell_hbpof_98", fa = "_groupToggle_hbpof_103", ha = "_editRow_hbpof_116", pa = "_editCell_hbpof_120", ma = "_editInput_hbpof_125", ga = "_commandCell_hbpof_135", xa = "_commandButton_hbpof_141", ba = "_data_hbpof_156", ya = "_table_hbpof_163", va = "_header_hbpof_169", ka = "_center_hbpof_181", wa = "_right_hbpof_185", $a = "_sortButton_hbpof_189", Na = "_sortIndicator_hbpof_207", Oa = "_sortIndex_hbpof_211", Sa = "_cell_hbpof_222", Da = "_clickable_hbpof_236", Ma = "_frozen_hbpof_244", za = "_selected_hbpof_250", Ca = "_resizeHandle_hbpof_258", Ea = "_filterCell_hbpof_276", Ia = "_filterSelect_hbpof_284", ja = "_filterInput_hbpof_294", Aa = "_empty_hbpof_305", Ta = "_loading_hbpof_311", La = "_visuallyHidden_hbpof_321", ge = {
  grid: ea,
  toolbar: ta,
  picker: na,
  pickerButton: sa,
  pickerPanel: ra,
  pickerItem: oa,
  groupPanel: la,
  groupPanelActive: aa,
  groupPanelText: ia,
  groupChip: ca,
  groupRemove: da,
  groupRow: ua,
  groupCell: _a,
  groupToggle: fa,
  editRow: ha,
  editCell: pa,
  editInput: ma,
  commandCell: ga,
  commandButton: xa,
  data: ba,
  table: ya,
  header: va,
  center: ka,
  right: wa,
  sortButton: $a,
  sortIndicator: Na,
  sortIndex: Oa,
  cell: Sa,
  clickable: Da,
  frozen: Ma,
  selected: za,
  resizeHandle: Ca,
  filterCell: Ea,
  filterSelect: Ia,
  filterInput: ja,
  empty: Aa,
  loading: Ta,
  visuallyHidden: La
}, Ra = {
  Ascending: "ascending",
  Descending: "descending"
};
function ws(e, t) {
  return e.filterable ?? t;
}
function Pa(e, t) {
  return e.sortable ?? t;
}
function Ba(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function dv({
  columns: e,
  rows: t,
  rowKey: s,
  allowSorting: o = !1,
  allowMultiColumnSorting: i = !1,
  showSortIndex: c = !1,
  allowFiltering: h = !1,
  filterCaseSensitivity: r = "CaseInsensitive",
  logicalOperator: l = "And",
  allowPaging: a = !1,
  pageSize: p = 10,
  pageSizeOptions: d,
  pageNumbersCount: v = 5,
  pagerPosition: y = "Bottom",
  showPagingSummary: w = !0,
  showPageSizeSelector: k = !0,
  selectionMode: _ = "None",
  selectedKeys: f,
  onSelectionChange: u,
  showColumnPicker: x = !1,
  columnPickerText: $ = "Columns",
  allowColumnResize: m = !1,
  allowColumnReorder: S = !1,
  allowGrouping: b = !1,
  groupPanelText: N = "Drag a column header here to group",
  groupExpanded: E = !0,
  editMode: I = "None",
  allowRowCreate: C = !1,
  onRowUpdate: D,
  onRowCreate: g,
  onRowDelete: z,
  isLoading: P = !1,
  empty: j = "No records found",
  ariaLabel: T,
  className: q,
  onRowClick: X
}) {
  const [Z, Q] = V([]), [K, te] = V(
    /* @__PURE__ */ new Map()
  ), [oe, ee] = V(1), [R, ie] = V(p), [Y, de] = V(
    () => e.map((A, L) => Bn(A, L))
  ), [ae, be] = V(
    () => new Set(
      e.map((A, L) => A.visible !== !1 ? Bn(A, L) : "").filter(Boolean)
    )
  ), [we, Be] = V({}), [ve, Xe] = V(!1), [xe, Ze] = V(null), [Ve, Re] = V(
    null
  ), [tt, Qe] = V(null), [et, W] = V({}), M = le(null), F = le(null), ne = $e(() => {
    const A = /* @__PURE__ */ new Map();
    return e.forEach((L, ce) => A.set(Bn(L, ce), L)), A;
  }, [e]), _e = $e(
    () => Y.filter((A) => ae.has(A)).map((A) => ({ key: A, column: ne.get(A) })).filter(
      (A) => A.column != null
    ),
    [Y, ae, ne]
  ), se = $e(
    () => Xl(_e, we),
    [_e, we]
  ), me = I !== "None" || z != null || C, Oe = $e(
    () => Jl(
      t,
      { sorts: Z, filters: K, pageNumber: oe, pageSize: R },
      {
        logicalOperator: l,
        caseSensitivity: r,
        types: Object.fromEntries(
          e.filter((A) => A.type != null && A.property != null).map((A) => [
            A.property,
            A.type
          ])
        )
      }
    ),
    [
      t,
      Z,
      K,
      oe,
      R,
      l,
      r,
      e
    ]
  ), qe = $e(
    () => xe ? e.find((A) => A.property === xe) : void 0,
    [xe, e]
  ), Je = $e(
    () => Ve ?? new Set(
      E ? Oe.items.map(
        (A) => String(Sn(A, xe ?? "") ?? "")
      ) : []
    ),
    [Ve, E, Oe.items, xe]
  ), dt = $e(
    () => Wl(
      Oe.items,
      xe ?? void 0,
      qe,
      Je,
      Sn,
      (A) => vs(A, qe?.format)
    ),
    [Oe.items, xe, qe, Je]
  ), yt = $e(
    () => xe ? _e.filter((A) => A.column.property !== xe) : _e,
    [_e, xe]
  ), J = (A) => {
    A !== "" && Q(Gl(Z, A, { multi: i }));
  }, De = (A, L) => {
    te((ce) => {
      const pe = new Map(ce);
      return pe.set(A, L), pe;
    }), ee(1);
  }, nt = (A) => {
    ie(A), ee(1);
  }, Gt = (A) => {
    if (_ === "None") return;
    const L = s(A), ce = f ?? [];
    let pe;
    _ === "Single" ? pe = ce.length === 1 && ce[0] === L ? [] : [L] : pe = ce.includes(L) ? ce.filter((Ie) => Ie !== L) : [...ce, L], u?.(pe);
  }, Nt = (A) => {
    X?.(A);
  }, ze = (A, L, ce) => {
    M.current = { key: A, startX: L, startWidth: ce };
  }, Ge = (A) => {
    const L = M.current;
    if (!L) return;
    const ce = A - L.startX, pe = Math.max(48, L.startWidth + ce);
    Be((Ie) => ({ ...Ie, [L.key]: `${pe}px` }));
  }, vt = () => {
    M.current = null;
  }, Rt = (A) => {
    F.current = A;
  }, tn = (A) => {
    const L = F.current;
    F.current = null, !(!L || L === A) && de((ce) => {
      const pe = [...ce], Ie = pe.indexOf(L), je = pe.indexOf(A);
      return Ie < 0 || je < 0 ? ce : (pe.splice(Ie, 1), pe.splice(je, 0, L), pe);
    });
  }, U = (A) => {
    be((L) => {
      const ce = new Set(L);
      return ce.has(A) ? ce.delete(A) : ce.add(A), ce;
    });
  }, ue = () => {
    const A = F.current;
    if (F.current = null, !A || !b) return;
    const ce = ne.get(A)?.property;
    ce && (Ze(ce), Re(null));
  }, Pe = () => {
    Ze(null), Re(null);
  }, Ke = (A) => {
    Re((L) => {
      const ce = L ?? new Set(
        E ? Oe.items.map(
          (Ie) => String(Sn(Ie, xe ?? "") ?? "")
        ) : []
      ), pe = new Set(ce);
      return pe.has(A) ? pe.delete(A) : pe.add(A), pe;
    });
  }, Pt = (A) => {
    const L = {};
    e.forEach((ce) => {
      ce.property && (L[ce.property] = Sn(A, ce.property));
    }), W(L), Qe(String(s(A)));
  }, Ot = () => {
    const A = {};
    e.forEach((L) => {
      L.property && L.type === "boolean" && (A[L.property] = !1);
    }), W(A), Qe("__new__");
  }, B = () => {
    Qe(null), W({});
  }, G = (A) => {
    if (tt === "__new__") {
      const L = Object.fromEntries(
        e.filter((ce) => ce.property).map((ce) => [ce.property, et[ce.property]])
      );
      g?.(L);
    } else if (A != null) {
      const L = { ...A, ...et };
      D?.(A, L);
    }
    B();
  }, re = a && (y === "Top" || y === "TopAndBottom"), he = a && (y === "Bottom" || y === "TopAndBottom"), fe = h && e.some((A) => ws(A, h)), ye = (A, L, ce) => A.render ? A.render(L, { index: 0 }) : vs(Sn(L, A.property), A.format), Te = (A) => {
    const L = [ge.cell];
    return A.align === "center" && L.push(ge.center), A.align === "right" && L.push(ge.right), A.frozen && L.push(ge.frozen), L.join(" ");
  };
  return /* @__PURE__ */ O("div", { className: [ge.grid, q].filter(Boolean).join(" "), children: [
    re && /* @__PURE__ */ n(
      os,
      {
        pageNumber: Oe.pageNumber,
        pageSize: Oe.pageSize,
        count: Oe.total,
        pageSizeOptions: d,
        pageNumbersCount: v,
        showSummary: w,
        showPageSizeSelector: k,
        ariaLabel: he ? "Pagination (top)" : "Pagination",
        onPageChange: ee,
        onPageSizeChange: nt
      }
    ),
    (b || C || x) && /* @__PURE__ */ O("div", { className: ge.toolbar, children: [
      b && /* @__PURE__ */ n(
        "div",
        {
          className: [
            ge.groupPanel,
            xe ? ge.groupPanelActive : ""
          ].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: b ? (A) => A.preventDefault() : void 0,
          onDrop: b ? ue : void 0,
          children: xe ? /* @__PURE__ */ O("span", { className: ge.groupChip, children: [
            qe?.title ?? xe,
            ":",
            " ",
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: ge.groupRemove,
                onClick: Pe,
                "aria-label": `Remove group by ${qe?.title ?? xe}`,
                children: /* @__PURE__ */ n(Ne, { name: "close", size: "sm" })
              }
            )
          ] }) : /* @__PURE__ */ n("span", { className: ge.groupPanelText, children: N })
        }
      ),
      C && /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: ge.pickerButton,
          onClick: Ot,
          children: "Add row"
        }
      ),
      x && /* @__PURE__ */ O("div", { className: ge.picker, children: [
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: ge.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": ve,
            onClick: () => Xe((A) => !A),
            children: $
          }
        ),
        ve && /* @__PURE__ */ n(
          "div",
          {
            className: ge.pickerPanel,
            role: "menu",
            "aria-label": $,
            children: e.map((A, L) => {
              const ce = Bn(A, L);
              return /* @__PURE__ */ O("label", { className: ge.pickerItem, children: [
                /* @__PURE__ */ n(
                  "input",
                  {
                    type: "checkbox",
                    checked: ae.has(ce),
                    onChange: () => U(ce)
                  }
                ),
                A.title ?? A.property
              ] }, ce);
            })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ O("div", { className: ge.data, children: [
      /* @__PURE__ */ O(
        "table",
        {
          className: ge.table,
          role: "grid",
          "aria-rowcount": Oe.total + 1,
          "aria-label": T,
          "aria-busy": P || void 0,
          children: [
            /* @__PURE__ */ O("colgroup", { children: [
              yt.map(({ key: A, column: L }) => /* @__PURE__ */ n(
                "col",
                {
                  style: {
                    width: we[A] ?? L.width,
                    minWidth: L.minWidth,
                    maxWidth: L.maxWidth
                  }
                },
                A
              )),
              me && /* @__PURE__ */ n("col", { style: { width: "8rem" } })
            ] }),
            /* @__PURE__ */ O("thead", { children: [
              /* @__PURE__ */ O("tr", { children: [
                yt.map(({ key: A, column: L }) => {
                  const ce = Pa(L, o), pe = Z.find((Ce) => Ce.property === L.property), Ie = pe ? Z.indexOf(pe) + 1 : 0, je = L.align ?? "left";
                  return /* @__PURE__ */ O(
                    "th",
                    {
                      "aria-sort": ce && pe ? Ra[pe.sortOrder] : "none",
                      className: [
                        ge.header,
                        je === "center" ? ge.center : "",
                        je === "right" ? ge.right : "",
                        L.frozen ? ge.frozen : ""
                      ].filter(Boolean).join(" "),
                      style: L.frozen ? { left: se[A] } : void 0,
                      scope: "col",
                      draggable: S || b || void 0,
                      onDragStart: S || b ? (Ce) => {
                        Ce.dataTransfer && (Ce.dataTransfer.effectAllowed = "move"), Rt(A);
                      } : void 0,
                      onDragOver: S ? (Ce) => Ce.preventDefault() : void 0,
                      onDrop: S ? () => tn(A) : void 0,
                      children: [
                        ce ? /* @__PURE__ */ O(
                          "button",
                          {
                            type: "button",
                            className: ge.sortButton,
                            onClick: () => L.property != null && J(L.property),
                            "aria-label": pe ? pe.sortOrder === "Ascending" ? `Sort ${L.title ?? L.property} descending` : `Sort ${L.title ?? L.property} ascending` : `Sort ${L.title ?? L.property} ascending`,
                            children: [
                              L.title ?? L.property,
                              pe && /* @__PURE__ */ n(
                                "span",
                                {
                                  className: ge.sortIndicator,
                                  "aria-hidden": "true",
                                  children: pe.sortOrder === "Ascending" ? "▲" : "▼"
                                }
                              ),
                              Ie > 1 && c && /* @__PURE__ */ n("span", { className: ge.sortIndex, children: Ie })
                            ]
                          }
                        ) : L.title ?? L.property,
                        m && /* @__PURE__ */ n(
                          "span",
                          {
                            className: ge.resizeHandle,
                            "data-dx-grid-resize": !0,
                            role: "separator",
                            "aria-orientation": "vertical",
                            "aria-label": `Resize ${L.title ?? L.property}`,
                            onMouseDown: (Ce) => {
                              Ce.preventDefault(), Ce.stopPropagation();
                              const lt = we[A] ?? L.width, St = lt ? parseFloat(lt) : 96;
                              ze(
                                A,
                                Ce.clientX,
                                Number.isFinite(St) ? St : 96
                              );
                            },
                            onMouseMove: (Ce) => {
                              M.current?.key === A && Ge(Ce.clientX);
                            },
                            onMouseUp: vt,
                            onMouseLeave: () => {
                              M.current?.key === A && vt();
                            }
                          }
                        )
                      ]
                    },
                    A
                  );
                }),
                me && /* @__PURE__ */ n("th", { className: ge.header, scope: "col", children: "Actions" })
              ] }),
              fe && /* @__PURE__ */ n("tr", { children: yt.map(({ key: A, column: L }) => {
                if (!ws(L, h))
                  return /* @__PURE__ */ n("td", { className: ge.filterCell }, A);
                const ce = K.get(L.property ?? "");
                return /* @__PURE__ */ O("td", { className: ge.filterCell, children: [
                  /* @__PURE__ */ O(
                    "label",
                    {
                      className: ge.visuallyHidden,
                      htmlFor: `df-${L.property}`,
                      children: [
                        "Filter ",
                        L.title ?? L.property
                      ]
                    }
                  ),
                  /* @__PURE__ */ n(
                    "select",
                    {
                      id: `df-${L.property}`,
                      className: ge.filterSelect,
                      value: ce?.operator ?? Ql(L.type ?? "string"),
                      onChange: (pe) => De(L.property ?? "", {
                        ...ce,
                        operator: pe.target.value
                      }),
                      "aria-label": `${L.title ?? L.property} operator`,
                      children: Gs.filter((pe) => pe !== "Custom").map(
                        (pe) => /* @__PURE__ */ n("option", { value: pe, children: pe }, pe)
                      )
                    }
                  ),
                  /* @__PURE__ */ n(
                    "input",
                    {
                      className: ge.filterInput,
                      value: ce?.value ?? "",
                      onChange: (pe) => De(L.property ?? "", {
                        ...ce,
                        value: pe.target.value
                      }),
                      placeholder: `Filter ${L.title ?? L.property}`,
                      "aria-label": `${L.title ?? L.property} value`
                    }
                  )
                ] }, A);
              }) })
            ] }),
            /* @__PURE__ */ O("tbody", { children: [
              tt === "__new__" && /* @__PURE__ */ O("tr", { className: ge.editRow, children: [
                yt.map(({ key: A, column: L }) => /* @__PURE__ */ n("td", { className: ge.editCell, children: L.property && /* @__PURE__ */ n(
                  "input",
                  {
                    className: ge.editInput,
                    type: L.type === "number" ? "number" : L.type === "boolean" ? "checkbox" : "text",
                    checked: L.type === "boolean" ? !!et[L.property] : void 0,
                    value: L.type === "boolean" ? void 0 : String(et[L.property] ?? ""),
                    onChange: (ce) => W((pe) => ({
                      ...pe,
                      [L.property]: L.type === "boolean" ? ce.target.checked : ce.target.value
                    })),
                    "aria-label": `${L.title ?? L.property} (new)`
                  }
                ) }, A)),
                me && /* @__PURE__ */ O("td", { className: ge.editCell, children: [
                  /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      className: ge.commandButton,
                      onClick: () => G(),
                      children: "Save"
                    }
                  ),
                  /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      className: ge.commandButton,
                      onClick: B,
                      children: "Cancel"
                    }
                  )
                ] })
              ] }),
              dt.map((A) => {
                if (A.type === "group" && A.group) {
                  const je = Je.has(A.group.key);
                  return /* @__PURE__ */ n(
                    "tr",
                    {
                      className: ge.groupRow,
                      children: /* @__PURE__ */ n(
                        "td",
                        {
                          colSpan: yt.length + (me ? 1 : 0),
                          className: ge.groupCell,
                          children: /* @__PURE__ */ O(
                            "button",
                            {
                              type: "button",
                              className: ge.groupToggle,
                              "aria-expanded": je,
                              onClick: () => Ke(A.group.key),
                              children: [
                                /* @__PURE__ */ n("span", { "aria-hidden": "true", children: je ? "▼" : "▶" }),
                                A.group.title,
                                ": ",
                                A.group.display,
                                " (",
                                A.group.count,
                                ")"
                              ]
                            }
                          )
                        }
                      )
                    },
                    `group-${A.group.key}`
                  );
                }
                const L = A.row, ce = s(L), pe = (f ?? []).includes(ce), Ie = tt != null && tt === String(ce);
                return /* @__PURE__ */ O(
                  "tr",
                  {
                    className: [
                      X || _ !== "None" ? ge.clickable : "",
                      pe ? ge.selected : "",
                      Ie ? ge.editRow : ""
                    ].filter(Boolean).join(" "),
                    "aria-selected": _ !== "None" ? pe : void 0,
                    onClick: X || _ !== "None" ? (je) => {
                      Ba(je.target) || (Nt(L), Gt(L));
                    } : void 0,
                    children: [
                      yt.map(({ key: je, column: Ce }) => /* @__PURE__ */ n(
                        "td",
                        {
                          className: Te(Ce),
                          style: Ce.frozen ? { left: se[je] } : void 0,
                          children: Ie && Ce.property ? /* @__PURE__ */ n(
                            "input",
                            {
                              className: ge.editInput,
                              type: Ce.type === "number" ? "number" : Ce.type === "boolean" ? "checkbox" : "text",
                              checked: Ce.type === "boolean" ? !!et[Ce.property] : void 0,
                              value: Ce.type === "boolean" ? void 0 : String(et[Ce.property] ?? ""),
                              onChange: (lt) => W((St) => ({
                                ...St,
                                [Ce.property]: Ce.type === "boolean" ? lt.target.checked : lt.target.value
                              })),
                              "aria-label": `${Ce.title ?? Ce.property} (edit)`
                            }
                          ) : ye(Ce, L)
                        },
                        je
                      )),
                      me && /* @__PURE__ */ n("td", { className: ge.commandCell, children: Ie ? /* @__PURE__ */ O(Me, { children: [
                        /* @__PURE__ */ n(
                          "button",
                          {
                            type: "button",
                            className: ge.commandButton,
                            onClick: () => G(L),
                            children: "Save"
                          }
                        ),
                        /* @__PURE__ */ n(
                          "button",
                          {
                            type: "button",
                            className: ge.commandButton,
                            onClick: B,
                            children: "Cancel"
                          }
                        )
                      ] }) : /* @__PURE__ */ O(Me, { children: [
                        I !== "None" && /* @__PURE__ */ n(
                          "button",
                          {
                            type: "button",
                            className: ge.commandButton,
                            onClick: () => Pt(L),
                            children: "Edit"
                          }
                        ),
                        z && /* @__PURE__ */ n(
                          "button",
                          {
                            type: "button",
                            className: ge.commandButton,
                            onClick: () => z(L),
                            children: "Delete"
                          }
                        )
                      ] }) })
                    ]
                  },
                  ce
                );
              })
            ] })
          ]
        }
      ),
      Oe.items.length === 0 && !P && /* @__PURE__ */ n("div", { className: ge.empty, children: j }),
      P && /* @__PURE__ */ n("div", { className: ge.loading, role: "status", children: "Loading…" })
    ] }),
    he && /* @__PURE__ */ n(
      os,
      {
        pageNumber: Oe.pageNumber,
        pageSize: Oe.pageSize,
        count: Oe.total,
        pageSizeOptions: d,
        pageNumbersCount: v,
        showSummary: w,
        showPageSizeSelector: k,
        ariaLabel: re ? "Pagination (bottom)" : "Pagination",
        onPageChange: ee,
        onPageSizeChange: nt
      }
    )
  ] });
}
const qa = "_wrap_1e4xo_1", Fa = "_grid_1e4xo_7", Ha = "_stacked_1e4xo_13", Ka = "_item_1e4xo_19", Ua = "_empty_1e4xo_25", Dn = {
  wrap: qa,
  grid: Fa,
  stacked: Ha,
  item: Ka,
  empty: Ua
};
function uv({
  data: e,
  pageSize: t = 10,
  pageSizeOptions: s,
  wrapItems: o = !1,
  itemTemplate: i,
  emptyMessage: c = "No records found",
  emptyTemplate: h,
  loadingTemplate: r,
  isLoading: l = !1,
  showPageSizeSelector: a = !0,
  className: p,
  ariaLabel: d = "Data list"
}) {
  const [v, y] = V(1), [w, k] = V(t), _ = e.length, f = Math.max(1, Math.ceil(_ / w)), u = Math.min(Math.max(1, v), f), x = $e(() => {
    const m = (u - 1) * w;
    return e.slice(m, m + w);
  }, [e, u, w]), $ = o ? Dn.grid : Dn.stacked;
  return /* @__PURE__ */ O(
    "div",
    {
      className: [Dn.wrap, p].filter(Boolean).join(" "),
      "aria-label": d,
      children: [
        l && r != null ? r : _ === 0 ? h ?? /* @__PURE__ */ n("div", { className: Dn.empty, children: c }) : /* @__PURE__ */ n("div", { className: $, children: x.map((m, S) => /* @__PURE__ */ n("div", { className: Dn.item, children: i ? i(m, S) : String(m) }, S)) }),
        /* @__PURE__ */ n(
          os,
          {
            pageNumber: u,
            pageSize: w,
            count: _,
            pageSizeOptions: s,
            showPageSizeSelector: a,
            onPageChange: y,
            onPageSizeChange: (m) => {
              k(m), y(1);
            }
          }
        )
      ]
    }
  );
}
const Wa = "_label_1qfpw_1", Xa = {
  label: Wa
}, _v = He(function({ className: t, children: s, ...o }, i) {
  return /* @__PURE__ */ n(
    "label",
    {
      ref: i,
      className: [Xa.label, t].filter(Boolean).join(" "),
      ...o,
      children: s
    }
  );
}), Va = "_textbox_1wq7t_1", Ga = "_invalid_1wq7t_37", Ya = "_xs_1wq7t_44", Za = "_sm_1wq7t_50", Ja = "_md_1wq7t_56", Qa = "_lg_1wq7t_62", ei = "_xl_1wq7t_68", es = {
  textbox: Va,
  invalid: Ga,
  xs: Ya,
  sm: Za,
  md: Ja,
  lg: Qa,
  xl: ei
}, ti = He(
  function({
    size: t = "md",
    invalid: s = !1,
    className: o,
    visible: i = !0,
    type: c = "text",
    ...h
  }, r) {
    return i === !1 ? null : /* @__PURE__ */ n(
      "input",
      {
        ref: r,
        type: c,
        "data-size": t,
        className: [
          es.textbox,
          es[t],
          s ? es.invalid : null,
          o
        ].filter(Boolean).join(" "),
        "aria-invalid": s || void 0,
        ...h
      }
    );
  }
), fv = ti, ni = "_checkbox_1lojr_1", si = {
  checkbox: ni
}, hv = He(
  function({ className: t, ...s }, o) {
    return /* @__PURE__ */ n(
      "input",
      {
        ref: o,
        type: "checkbox",
        className: [si.checkbox, t].filter(Boolean).join(" "),
        ...s
      }
    );
  }
), ri = {
  switch: "_switch_1y0ld_1"
}, oi = He(function({ className: t, ...s }, o) {
  return /* @__PURE__ */ n(
    "input",
    {
      ref: o,
      type: "checkbox",
      role: "switch",
      className: [ri.switch, t].filter(Boolean).join(" "),
      ...s
    }
  );
}), li = "_trigger_iq2cp_1", ai = "_tooltip_iq2cp_7", ii = "_top_iq2cp_34", ci = "_right_iq2cp_40", di = "_bottom_iq2cp_46", ui = "_left_iq2cp_52", _i = "_arrow_iq2cp_58", qn = {
  trigger: li,
  tooltip: ai,
  "se-tooltip-in": "_se-tooltip-in_iq2cp_1",
  top: ii,
  right: ci,
  bottom: di,
  left: ui,
  arrow: _i
};
function pv({
  content: e,
  children: t,
  placement: s = "top",
  delayMs: o = 300,
  className: i
}) {
  const c = Fe(), h = le(null), [r, l] = V(!1), a = () => {
    h.current = window.setTimeout(() => l(!0), o);
  }, p = () => {
    h.current !== null && (window.clearTimeout(h.current), h.current = null), l(!1);
  };
  ke(() => {
    if (!r) return;
    const v = (y) => {
      y.key === "Escape" && p();
    };
    return window.addEventListener("keydown", v), () => window.removeEventListener("keydown", v);
  }, [r]);
  const d = Lt(t) ? ds(t, {
    "aria-describedby": [
      t.props["aria-describedby"],
      r ? c : null
    ].filter((v) => typeof v == "string").join(" ") || void 0
  }) : t;
  return /* @__PURE__ */ O(
    "span",
    {
      className: [qn.trigger, i].filter(Boolean).join(" "),
      onMouseEnter: a,
      onMouseLeave: p,
      onFocus: a,
      onBlur: p,
      children: [
        d,
        r && /* @__PURE__ */ O(
          "span",
          {
            role: "tooltip",
            id: c,
            className: [qn.tooltip, qn[s]].filter(Boolean).join(" "),
            children: [
              e,
              /* @__PURE__ */ n("span", { className: qn.arrow, "aria-hidden": "true" })
            ]
          }
        )
      ]
    }
  );
}
const fi = "_dialog_18an3_1", hi = "_sm_18an3_72", pi = "_resizable_18an3_78", mi = "_md_18an3_81", gi = "_lg_18an3_85", xi = "_header_18an3_89", bi = "_title_18an3_100", yi = "_description_18an3_107", vi = "_close_18an3_114", ki = "_body_18an3_144", wi = "_footer_18an3_156", qt = {
  dialog: fi,
  "se-dialog-in": "_se-dialog-in_18an3_1",
  sm: hi,
  resizable: pi,
  md: mi,
  lg: gi,
  header: xi,
  title: bi,
  description: yi,
  close: vi,
  body: ki,
  footer: wi
};
function mv({
  open: e,
  onClose: t,
  title: s,
  description: o,
  children: i,
  footer: c,
  size: h = "md",
  width: r,
  height: l,
  closeOnOverlayClick: a = !0,
  closeOnEsc: p = !0,
  resizable: d = !1,
  canClose: v,
  className: y
}) {
  const w = le(null), k = Fe(), _ = Fe(), f = le(t);
  ke(() => {
    f.current = t;
  });
  const u = le(v);
  ke(() => {
    u.current = v;
  });
  const x = le(p);
  ke(() => {
    x.current = p;
  });
  const $ = le(!1), m = le(!1), S = H(() => {
    if ($.current) return;
    const N = u.current?.();
    if (N instanceof Promise) {
      N.then((E) => {
        E && !$.current && ($.current = !0, f.current());
      });
      return;
    }
    N !== !1 && ($.current = !0, f.current());
  }, []), b = H(() => {
    if (m.current) {
      m.current = !1;
      return;
    }
    f.current();
  }, []);
  return ke(() => {
    const N = w.current;
    if (N)
      if (e && !N.open) {
        const E = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        N.showModal(), (N.querySelector(
          'button[aria-label="Close dialog"]'
        ) ?? N.querySelector("button"))?.focus();
        const C = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const D = (g) => {
          g.preventDefault(), x.current && S();
        };
        return N.addEventListener("cancel", D), () => {
          N.removeEventListener("cancel", D), document.body.style.overflow = C, E?.focus({ preventScroll: !0 });
        };
      } else !e && N.open && (m.current = $.current, $.current = !1, N.close());
  }, [e, S]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button.
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ O(
    "dialog",
    {
      ref: w,
      className: [
        qt.dialog,
        qt[h],
        d ? qt.resizable : null,
        y
      ].filter(Boolean).join(" "),
      style: {
        width: r ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: r != null ? "none" : void 0,
        height: l ?? void 0
      },
      onClose: b,
      onClick: (N) => {
        N.target === w.current && a && S();
      },
      "aria-modal": "true",
      "aria-labelledby": s ? k : void 0,
      "aria-describedby": o ? _ : void 0,
      children: [
        s && /* @__PURE__ */ O("header", { className: qt.header, children: [
          /* @__PURE__ */ O("div", { children: [
            /* @__PURE__ */ n("h2", { id: k, className: qt.title, children: s }),
            o && /* @__PURE__ */ n("p", { id: _, className: qt.description, children: o })
          ] }),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: qt.close,
              onClick: () => {
                S();
              },
              "aria-label": "Close dialog",
              children: /* @__PURE__ */ n(Ne, { name: "close", size: "sm" })
            }
          )
        ] }),
        i && /* @__PURE__ */ n("div", { className: qt.body, children: i }),
        c && /* @__PURE__ */ n("footer", { className: qt.footer, children: c })
      ]
    }
  );
}
const $i = "_viewport_lo2x9_1", Ni = "_topLeft_lo2x9_13", Oi = "_topRight_lo2x9_20", Si = "_bottomLeft_lo2x9_25", Di = "_toast_lo2x9_30", Mi = "_leaving_lo2x9_61", zi = "_info_lo2x9_77", Ci = "_success_lo2x9_86", Ei = "_warning_lo2x9_95", Ii = "_danger_lo2x9_104", ji = "_content_lo2x9_113", Ai = "_title_lo2x9_118", Ti = "_description_lo2x9_141", Li = "_dismiss_lo2x9_148", Ri = "_actions_lo2x9_169", Pi = "_action_lo2x9_169", Bi = "_cancel_lo2x9_177", qi = "_progress_lo2x9_215", pt = {
  viewport: $i,
  topLeft: Ni,
  topRight: Oi,
  bottomLeft: Si,
  toast: Di,
  "se-toast-in": "_se-toast-in_lo2x9_1",
  leaving: Mi,
  "se-toast-out": "_se-toast-out_lo2x9_1",
  info: zi,
  success: Ci,
  warning: Ei,
  danger: Ii,
  content: ji,
  title: Ai,
  description: Ti,
  dismiss: Li,
  actions: Ri,
  action: Pi,
  cancel: Bi,
  progress: qi,
  "se-toast-progress": "_se-toast-progress_lo2x9_1"
}, Js = Xs(null);
function gv() {
  const e = Ws(Js);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const Fi = 200, Hi = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function xv({
  children: e,
  durationMs: t = 4e3,
  position: s = "bottom-right",
  pauseOnHover: o = !0,
  className: i
}) {
  const [c, h] = V([]), [r, l] = V(!1), a = le([]), p = le(/* @__PURE__ */ new Map()), d = le(!1), v = le(0), y = (D) => {
    d.current = D, l(D);
  }, w = H((D) => {
    const g = p.current.get(D);
    g && (window.clearTimeout(g.timeoutId), g.remaining = Math.max(
      0,
      g.remaining - (Date.now() - g.startedAt)
    ));
  }, []), k = H((D) => {
    const g = p.current.get(D);
    g && (window.clearTimeout(g.timeoutId), p.current.delete(D));
  }, []), _ = H(
    (D) => {
      k(D), h((g) => {
        const z = g.filter((P) => P.id !== D);
        return a.current = z, z;
      });
    },
    [k]
  ), f = H(
    (D) => {
      const g = a.current.find((z) => z.id === D);
      !g || g.leaving || (g.onAutoClose?.(), _(D));
    },
    [_]
  ), u = H(
    (D) => {
      const g = p.current.get(D);
      !g || g.remaining <= 0 || (g.startedAt = Date.now(), g.timeoutId = window.setTimeout(() => f(D), g.remaining));
    },
    [f]
  ), x = H(() => {
    d.current || p.current.forEach((D, g) => w(g)), y(!0);
  }, [w]), $ = H(() => {
    p.current.forEach((D, g) => u(g)), y(!1);
  }, [u]);
  ke(() => {
    if (!o) return;
    const D = () => {
      document.hidden ? x() : $();
    };
    return document.addEventListener("visibilitychange", D), () => document.removeEventListener("visibilitychange", D);
  }, [o, x, $]);
  const m = H(
    (D) => {
      const g = a.current.find((z) => z.id === D);
      !g || g.leaving || (g.onDismiss?.(), h((z) => {
        const P = z.map(
          (j) => j.id === D ? { ...j, leaving: !0 } : j
        );
        return a.current = P, P;
      }), window.setTimeout(() => _(D), Fi));
    },
    [_]
  ), S = H(
    (D) => {
      if (D.durationMs <= 0) return;
      const g = {
        remaining: D.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      p.current.set(D.id, g), d.current || u(D.id);
    },
    [u]
  ), b = H(
    (D) => {
      const g = a.current.find((P) => P.id === D.id), z = {
        id: D.id ?? ++v.current,
        title: D.title,
        description: D.description,
        severity: D.severity ?? "info",
        durationMs: D.durationMs ?? t,
        action: D.action,
        cancel: D.cancel,
        dismissible: D.dismissible ?? !0,
        closeOnClick: D.closeOnClick ?? !1,
        showProgress: D.showProgress ?? !1,
        position: D.position ?? s,
        onDismiss: D.onDismiss,
        onAutoClose: D.onAutoClose
      };
      h((P) => {
        const j = g ? P.map(
          (T) => T.id === z.id ? { ...z, leaving: !1 } : T
        ) : [...P, z];
        return a.current = j, j;
      }), g && k(z.id), S(z);
    },
    [t, s, S, k]
  ), N = $e(() => ({ toast: b }), [b]), E = $e(
    () => Array.from(/* @__PURE__ */ new Set([s, ...c.map((D) => D.position)])),
    [s, c]
  ), I = o ? x : void 0, C = o ? $ : void 0;
  return /* @__PURE__ */ O(Js.Provider, { value: N, children: [
    e,
    E.map((D) => /* @__PURE__ */ n(
      "div",
      {
        className: [pt.viewport, pt[Hi[D]], i].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: I,
        onMouseLeave: C,
        children: c.filter((g) => g.position === D).map((g) => /* @__PURE__ */ O(
          "div",
          {
            role: g.severity === "danger" ? "alert" : "status",
            "data-paused": r ? "true" : "false",
            "data-clickable": g.closeOnClick ? "true" : "false",
            className: [
              pt.toast,
              pt[g.severity],
              g.leaving ? pt.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: g.closeOnClick ? () => m(g.id) : void 0,
            children: [
              /* @__PURE__ */ O("div", { className: pt.content, children: [
                /* @__PURE__ */ n("div", { className: pt.title, children: g.title }),
                g.description && /* @__PURE__ */ n("div", { className: pt.description, children: g.description }),
                (g.action || g.cancel) && /* @__PURE__ */ O("div", { className: pt.actions, children: [
                  g.action && /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      className: pt.action,
                      onClick: () => {
                        g.action?.onClick?.(), m(g.id);
                      },
                      children: g.action.label
                    }
                  ),
                  g.cancel && /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      className: pt.cancel,
                      onClick: () => {
                        g.cancel?.onClick?.(), m(g.id);
                      },
                      children: g.cancel.label
                    }
                  )
                ] })
              ] }),
              g.dismissible && /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: pt.dismiss,
                  onClick: () => m(g.id),
                  "aria-label": "Dismiss notification",
                  children: /* @__PURE__ */ n(Ne, { name: "close", size: "sm" })
                }
              ),
              g.showProgress && g.durationMs > 0 && /* @__PURE__ */ n(
                "div",
                {
                  className: pt.progress,
                  style: { animationDuration: `${g.durationMs}ms` }
                }
              )
            ]
          },
          g.id
        ))
      },
      D
    ))
  ] });
}
const Ki = "_alert_1ktjq_1", Ui = "_xs_1ktjq_28", Wi = "_sm_1ktjq_38", Xi = "_lg_1ktjq_48", Vi = "_xl_1ktjq_58", Gi = "_primary_1ktjq_69", Yi = "_secondary_1ktjq_74", Zi = "_light_1ktjq_79", Ji = "_base_1ktjq_84", Qi = "_dark_1ktjq_89", ec = "_info_1ktjq_94", tc = "_success_1ktjq_99", nc = "_warning_1ktjq_104", sc = "_danger_1ktjq_109", rc = "_flat_1ktjq_116", oc = "_outlined_1ktjq_123", lc = "_filled_1ktjq_132", ac = "_text_1ktjq_139", ic = "_icon_1ktjq_181", cc = "_content_1ktjq_192", dc = "_title_1ktjq_197", uc = "_body_1ktjq_203", _c = "_dismiss_1ktjq_209", Et = {
  alert: Ki,
  xs: Ui,
  sm: Wi,
  lg: Xi,
  xl: Vi,
  primary: Gi,
  secondary: Yi,
  light: Zi,
  base: Ji,
  dark: Qi,
  info: ec,
  success: tc,
  warning: nc,
  danger: sc,
  flat: rc,
  outlined: oc,
  filled: lc,
  text: ac,
  icon: ic,
  content: cc,
  title: dc,
  body: uc,
  dismiss: _c,
  "shade-lighter": "_shade-lighter_1ktjq_451",
  "shade-light": "_shade-light_1ktjq_451",
  "shade-dark": "_shade-dark_1ktjq_461",
  "shade-darker": "_shade-darker_1ktjq_465"
}, fc = {
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
function bv({
  // Intentional Radzen-parity breaking change (1.0): defaults were
  // severity="info" variant="flat" dismissible={false}; Radzen ships
  // AlertStyle.Base + Variant.Filled + AllowClose. Migrate by passing
  // the old values explicitly.
  severity: e = "base",
  variant: t = "filled",
  shade: s,
  size: o = "md",
  title: i,
  icon: c,
  showIcon: h = !0,
  children: r,
  dismissible: l = !0,
  onDismiss: a,
  visible: p,
  onVisibleChange: d,
  className: v,
  ...y
}) {
  const [w, k] = V(!1);
  if (p === !1 || p === void 0 && w)
    return null;
  const _ = () => {
    p === void 0 && k(!0), a?.(), d?.(!1);
  }, f = e, u = _s(t, "filled"), x = s && s !== "default" ? `shade-${s}` : null, $ = c ?? (h ? /* @__PURE__ */ n(Ne, { name: fc[e] }) : null);
  return /* @__PURE__ */ O(
    "div",
    {
      role: "alert",
      ...y,
      className: [
        Et.alert,
        Et[f],
        Et[u],
        x ? Et[x] : null,
        Et[o],
        v
      ].filter(Boolean).join(" "),
      children: [
        $ != null && /* @__PURE__ */ n("span", { className: Et.icon, "aria-hidden": "true", children: $ }),
        /* @__PURE__ */ O("div", { className: Et.content, children: [
          i && /* @__PURE__ */ n("div", { className: Et.title, children: i }),
          r && /* @__PURE__ */ n("div", { className: Et.body, children: r })
        ] }),
        l && /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: Et.dismiss,
            onClick: _,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ n(Ne, { name: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const hc = "_skeleton_14cft_1", pc = "_text_14cft_35", mc = "_circle_14cft_40", gc = "_rect_14cft_44", $s = {
  skeleton: hc,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_14cft_1",
  text: pc,
  circle: mc,
  rect: gc
};
function yv({
  variant: e = "text",
  width: t,
  height: s,
  className: o
}) {
  const i = {};
  return t !== void 0 && (i.width = typeof t == "number" ? `${t}px` : t), s !== void 0 && (i.height = typeof s == "number" ? `${s}px` : s), /* @__PURE__ */ n(
    "span",
    {
      "aria-hidden": "true",
      className: [$s.skeleton, $s[e], o].filter(Boolean).join(" "),
      style: i
    }
  );
}
const xc = "_row_tkkv2_1", bc = "_gapXs_tkkv2_12", yc = "_gapSm_tkkv2_17", vc = "_gapMd_tkkv2_22", kc = "_gapLg_tkkv2_27", wc = "_gapXl_tkkv2_32", $c = "_start_tkkv2_37", Nc = "_center_tkkv2_41", Oc = "_end_tkkv2_45", Sc = "_stretch_tkkv2_49", Dc = "_baseline_tkkv2_53", Mc = "_noWrap_tkkv2_109", zc = "_wrapReverse_tkkv2_113", Cc = "_gapRowXs_tkkv2_117", Ec = "_gapRowSm_tkkv2_121", Ic = "_gapRowMd_tkkv2_125", jc = "_gapRowLg_tkkv2_129", Ac = "_gapRowXl_tkkv2_133", un = {
  row: xc,
  gapXs: bc,
  gapSm: yc,
  gapMd: vc,
  gapLg: kc,
  gapXl: wc,
  start: $c,
  center: Nc,
  end: Oc,
  stretch: Sc,
  baseline: Dc,
  "justify-start": "_justify-start_tkkv2_57",
  "justify-center": "_justify-center_tkkv2_61",
  "justify-end": "_justify-end_tkkv2_65",
  "justify-between": "_justify-between_tkkv2_69",
  "justify-around": "_justify-around_tkkv2_73",
  "justify-evenly": "_justify-evenly_tkkv2_77",
  "justify-normal": "_justify-normal_tkkv2_81",
  "justify-left": "_justify-left_tkkv2_85",
  "justify-right": "_justify-right_tkkv2_89",
  "justify-stretch": "_justify-stretch_tkkv2_93",
  "justify-space-between": "_justify-space-between_tkkv2_97",
  "justify-space-around": "_justify-space-around_tkkv2_101",
  "justify-space-evenly": "_justify-space-evenly_tkkv2_105",
  noWrap: Mc,
  wrapReverse: zc,
  gapRowXs: Cc,
  gapRowSm: Ec,
  gapRowMd: Ic,
  gapRowLg: jc,
  gapRowXl: Ac
}, Tc = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
}, Lc = {
  xs: "gapRowXs",
  sm: "gapRowSm",
  md: "gapRowMd",
  lg: "gapRowLg",
  xl: "gapRowXl"
};
function Rc(e) {
  return typeof e != "string" ? null : Tc[e] ?? null;
}
function Pc(e) {
  return typeof e != "string" ? null : Lc[e] ?? null;
}
function Ns(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function vv({
  gap: e,
  rowGap: t,
  align: s = "stretch",
  justify: o = "start",
  wrap: i = !0,
  className: c,
  style: h,
  ...r
}) {
  const l = Rc(e), a = Pc(t), p = e != null && !l ? typeof e == "number" ? `${e}px` : e : null, d = {
    // Keep --dx-col-gap in sync so Column grid math compensates for
    // arbitrary (non-tier) gaps exactly like it does for tier classes.
    ...p ? { gap: p, "--dx-col-gap": p } : {},
    ...t != null && !a ? { rowGap: typeof t == "number" ? `${t}px` : t } : {},
    ...h
  };
  return /* @__PURE__ */ n(
    "div",
    {
      className: [
        un.row,
        un[s],
        un[`justify-${o}`],
        Ns(i) != null ? un[Ns(i)] : null,
        l ? un[l] : null,
        a ? un[a] : null,
        c
      ].filter(Boolean).join(" "),
      style: d,
      ...r
    }
  );
}
const Bc = "_column_sh0ss_1", qc = "_Size1_sh0ss_15", Fc = "_Size2_sh0ss_24", Hc = "_Size3_sh0ss_33", Kc = "_Size4_sh0ss_42", Uc = "_Size5_sh0ss_51", Wc = "_Size6_sh0ss_60", Xc = "_Size7_sh0ss_69", Vc = "_Size8_sh0ss_78", Gc = "_Size9_sh0ss_87", Yc = "_Size10_sh0ss_96", Zc = "_Size11_sh0ss_105", Jc = "_Size12_sh0ss_114", Qc = "_Offset0_sh0ss_119", ed = "_Offset1_sh0ss_122", td = "_Offset2_sh0ss_127", nd = "_Offset3_sh0ss_132", sd = "_Offset4_sh0ss_137", rd = "_Offset5_sh0ss_142", od = "_Offset6_sh0ss_147", ld = "_Offset7_sh0ss_152", ad = "_Offset8_sh0ss_157", id = "_Offset9_sh0ss_162", cd = "_Offset10_sh0ss_167", dd = "_Offset11_sh0ss_172", ud = "_Offset12_sh0ss_177", _d = "_OrderFirst_sh0ss_182", fd = "_OrderLast_sh0ss_185", hd = "_Order0_sh0ss_188", pd = "_Order1_sh0ss_191", md = "_Order2_sh0ss_194", gd = "_Order3_sh0ss_197", xd = "_Order4_sh0ss_200", bd = "_Order5_sh0ss_203", yd = "_Order6_sh0ss_206", vd = "_Order7_sh0ss_209", kd = "_Order8_sh0ss_212", wd = "_Order9_sh0ss_215", $d = "_Order10_sh0ss_218", Nd = "_Order11_sh0ss_221", Od = "_Order12_sh0ss_224", Sd = "_xsSize1_sh0ss_229", Dd = "_xsSize2_sh0ss_238", Md = "_xsSize3_sh0ss_247", zd = "_xsSize4_sh0ss_256", Cd = "_xsSize5_sh0ss_265", Ed = "_xsSize6_sh0ss_274", Id = "_xsSize7_sh0ss_283", jd = "_xsSize8_sh0ss_292", Ad = "_xsSize9_sh0ss_301", Td = "_xsSize10_sh0ss_310", Ld = "_xsSize11_sh0ss_321", Rd = "_xsSize12_sh0ss_332", Pd = "_xsOffset0_sh0ss_337", Bd = "_xsOffset1_sh0ss_340", qd = "_xsOffset2_sh0ss_345", Fd = "_xsOffset3_sh0ss_350", Hd = "_xsOffset4_sh0ss_355", Kd = "_xsOffset5_sh0ss_360", Ud = "_xsOffset6_sh0ss_365", Wd = "_xsOffset7_sh0ss_370", Xd = "_xsOffset8_sh0ss_375", Vd = "_xsOffset9_sh0ss_380", Gd = "_xsOffset10_sh0ss_385", Yd = "_xsOffset11_sh0ss_391", Zd = "_xsOffset12_sh0ss_397", Jd = "_xsOrderFirst_sh0ss_403", Qd = "_xsOrderLast_sh0ss_406", eu = "_xsOrder0_sh0ss_409", tu = "_xsOrder1_sh0ss_412", nu = "_xsOrder2_sh0ss_415", su = "_xsOrder3_sh0ss_418", ru = "_xsOrder4_sh0ss_421", ou = "_xsOrder5_sh0ss_424", lu = "_xsOrder6_sh0ss_427", au = "_xsOrder7_sh0ss_430", iu = "_xsOrder8_sh0ss_433", cu = "_xsOrder9_sh0ss_436", du = "_xsOrder10_sh0ss_439", uu = "_xsOrder11_sh0ss_442", _u = "_xsOrder12_sh0ss_445", fu = "_smSize1_sh0ss_451", hu = "_smSize2_sh0ss_460", pu = "_smSize3_sh0ss_469", mu = "_smSize4_sh0ss_478", gu = "_smSize5_sh0ss_487", xu = "_smSize6_sh0ss_496", bu = "_smSize7_sh0ss_505", yu = "_smSize8_sh0ss_514", vu = "_smSize9_sh0ss_523", ku = "_smSize10_sh0ss_532", wu = "_smSize11_sh0ss_543", $u = "_smSize12_sh0ss_554", Nu = "_smOffset0_sh0ss_559", Ou = "_smOffset1_sh0ss_562", Su = "_smOffset2_sh0ss_567", Du = "_smOffset3_sh0ss_572", Mu = "_smOffset4_sh0ss_577", zu = "_smOffset5_sh0ss_582", Cu = "_smOffset6_sh0ss_587", Eu = "_smOffset7_sh0ss_592", Iu = "_smOffset8_sh0ss_597", ju = "_smOffset9_sh0ss_602", Au = "_smOffset10_sh0ss_607", Tu = "_smOffset11_sh0ss_613", Lu = "_smOffset12_sh0ss_619", Ru = "_smOrderFirst_sh0ss_625", Pu = "_smOrderLast_sh0ss_628", Bu = "_smOrder0_sh0ss_631", qu = "_smOrder1_sh0ss_634", Fu = "_smOrder2_sh0ss_637", Hu = "_smOrder3_sh0ss_640", Ku = "_smOrder4_sh0ss_643", Uu = "_smOrder5_sh0ss_646", Wu = "_smOrder6_sh0ss_649", Xu = "_smOrder7_sh0ss_652", Vu = "_smOrder8_sh0ss_655", Gu = "_smOrder9_sh0ss_658", Yu = "_smOrder10_sh0ss_661", Zu = "_smOrder11_sh0ss_664", Ju = "_smOrder12_sh0ss_667", Qu = "_mdSize1_sh0ss_673", e_ = "_mdSize2_sh0ss_682", t_ = "_mdSize3_sh0ss_691", n_ = "_mdSize4_sh0ss_700", s_ = "_mdSize5_sh0ss_709", r_ = "_mdSize6_sh0ss_718", o_ = "_mdSize7_sh0ss_727", l_ = "_mdSize8_sh0ss_736", a_ = "_mdSize9_sh0ss_745", i_ = "_mdSize10_sh0ss_754", c_ = "_mdSize11_sh0ss_765", d_ = "_mdSize12_sh0ss_776", u_ = "_mdOffset0_sh0ss_781", __ = "_mdOffset1_sh0ss_784", f_ = "_mdOffset2_sh0ss_789", h_ = "_mdOffset3_sh0ss_794", p_ = "_mdOffset4_sh0ss_799", m_ = "_mdOffset5_sh0ss_804", g_ = "_mdOffset6_sh0ss_809", x_ = "_mdOffset7_sh0ss_814", b_ = "_mdOffset8_sh0ss_819", y_ = "_mdOffset9_sh0ss_824", v_ = "_mdOffset10_sh0ss_829", k_ = "_mdOffset11_sh0ss_835", w_ = "_mdOffset12_sh0ss_841", $_ = "_mdOrderFirst_sh0ss_847", N_ = "_mdOrderLast_sh0ss_850", O_ = "_mdOrder0_sh0ss_853", S_ = "_mdOrder1_sh0ss_856", D_ = "_mdOrder2_sh0ss_859", M_ = "_mdOrder3_sh0ss_862", z_ = "_mdOrder4_sh0ss_865", C_ = "_mdOrder5_sh0ss_868", E_ = "_mdOrder6_sh0ss_871", I_ = "_mdOrder7_sh0ss_874", j_ = "_mdOrder8_sh0ss_877", A_ = "_mdOrder9_sh0ss_880", T_ = "_mdOrder10_sh0ss_883", L_ = "_mdOrder11_sh0ss_886", R_ = "_mdOrder12_sh0ss_889", P_ = "_lgSize1_sh0ss_895", B_ = "_lgSize2_sh0ss_904", q_ = "_lgSize3_sh0ss_913", F_ = "_lgSize4_sh0ss_922", H_ = "_lgSize5_sh0ss_931", K_ = "_lgSize6_sh0ss_940", U_ = "_lgSize7_sh0ss_949", W_ = "_lgSize8_sh0ss_958", X_ = "_lgSize9_sh0ss_967", V_ = "_lgSize10_sh0ss_976", G_ = "_lgSize11_sh0ss_987", Y_ = "_lgSize12_sh0ss_998", Z_ = "_lgOffset0_sh0ss_1003", J_ = "_lgOffset1_sh0ss_1006", Q_ = "_lgOffset2_sh0ss_1011", ef = "_lgOffset3_sh0ss_1016", tf = "_lgOffset4_sh0ss_1021", nf = "_lgOffset5_sh0ss_1026", sf = "_lgOffset6_sh0ss_1031", rf = "_lgOffset7_sh0ss_1036", of = "_lgOffset8_sh0ss_1041", lf = "_lgOffset9_sh0ss_1046", af = "_lgOffset10_sh0ss_1051", cf = "_lgOffset11_sh0ss_1057", df = "_lgOffset12_sh0ss_1063", uf = "_lgOrderFirst_sh0ss_1069", _f = "_lgOrderLast_sh0ss_1072", ff = "_lgOrder0_sh0ss_1075", hf = "_lgOrder1_sh0ss_1078", pf = "_lgOrder2_sh0ss_1081", mf = "_lgOrder3_sh0ss_1084", gf = "_lgOrder4_sh0ss_1087", xf = "_lgOrder5_sh0ss_1090", bf = "_lgOrder6_sh0ss_1093", yf = "_lgOrder7_sh0ss_1096", vf = "_lgOrder8_sh0ss_1099", kf = "_lgOrder9_sh0ss_1102", wf = "_lgOrder10_sh0ss_1105", $f = "_lgOrder11_sh0ss_1108", Nf = "_lgOrder12_sh0ss_1111", Of = "_xlSize1_sh0ss_1117", Sf = "_xlSize2_sh0ss_1126", Df = "_xlSize3_sh0ss_1135", Mf = "_xlSize4_sh0ss_1144", zf = "_xlSize5_sh0ss_1153", Cf = "_xlSize6_sh0ss_1162", Ef = "_xlSize7_sh0ss_1171", If = "_xlSize8_sh0ss_1180", jf = "_xlSize9_sh0ss_1189", Af = "_xlSize10_sh0ss_1198", Tf = "_xlSize11_sh0ss_1209", Lf = "_xlSize12_sh0ss_1220", Rf = "_xlOffset0_sh0ss_1225", Pf = "_xlOffset1_sh0ss_1228", Bf = "_xlOffset2_sh0ss_1233", qf = "_xlOffset3_sh0ss_1238", Ff = "_xlOffset4_sh0ss_1243", Hf = "_xlOffset5_sh0ss_1248", Kf = "_xlOffset6_sh0ss_1253", Uf = "_xlOffset7_sh0ss_1258", Wf = "_xlOffset8_sh0ss_1263", Xf = "_xlOffset9_sh0ss_1268", Vf = "_xlOffset10_sh0ss_1273", Gf = "_xlOffset11_sh0ss_1279", Yf = "_xlOffset12_sh0ss_1285", Zf = "_xlOrderFirst_sh0ss_1291", Jf = "_xlOrderLast_sh0ss_1294", Qf = "_xlOrder0_sh0ss_1297", e1 = "_xlOrder1_sh0ss_1300", t1 = "_xlOrder2_sh0ss_1303", n1 = "_xlOrder3_sh0ss_1306", s1 = "_xlOrder4_sh0ss_1309", r1 = "_xlOrder5_sh0ss_1312", o1 = "_xlOrder6_sh0ss_1315", l1 = "_xlOrder7_sh0ss_1318", a1 = "_xlOrder8_sh0ss_1321", i1 = "_xlOrder9_sh0ss_1324", c1 = "_xlOrder10_sh0ss_1327", d1 = "_xlOrder11_sh0ss_1330", u1 = "_xlOrder12_sh0ss_1333", _1 = "_xxSize1_sh0ss_1339", f1 = "_xxSize2_sh0ss_1348", h1 = "_xxSize3_sh0ss_1357", p1 = "_xxSize4_sh0ss_1366", m1 = "_xxSize5_sh0ss_1375", g1 = "_xxSize6_sh0ss_1384", x1 = "_xxSize7_sh0ss_1393", b1 = "_xxSize8_sh0ss_1402", y1 = "_xxSize9_sh0ss_1411", v1 = "_xxSize10_sh0ss_1420", k1 = "_xxSize11_sh0ss_1431", w1 = "_xxSize12_sh0ss_1442", $1 = "_xxOffset0_sh0ss_1447", N1 = "_xxOffset1_sh0ss_1450", O1 = "_xxOffset2_sh0ss_1455", S1 = "_xxOffset3_sh0ss_1460", D1 = "_xxOffset4_sh0ss_1465", M1 = "_xxOffset5_sh0ss_1470", z1 = "_xxOffset6_sh0ss_1475", C1 = "_xxOffset7_sh0ss_1480", E1 = "_xxOffset8_sh0ss_1485", I1 = "_xxOffset9_sh0ss_1490", j1 = "_xxOffset10_sh0ss_1495", A1 = "_xxOffset11_sh0ss_1501", T1 = "_xxOffset12_sh0ss_1507", L1 = "_xxOrderFirst_sh0ss_1513", R1 = "_xxOrderLast_sh0ss_1516", P1 = "_xxOrder0_sh0ss_1519", B1 = "_xxOrder1_sh0ss_1522", q1 = "_xxOrder2_sh0ss_1525", F1 = "_xxOrder3_sh0ss_1528", H1 = "_xxOrder4_sh0ss_1531", K1 = "_xxOrder5_sh0ss_1534", U1 = "_xxOrder6_sh0ss_1537", W1 = "_xxOrder7_sh0ss_1540", X1 = "_xxOrder8_sh0ss_1543", V1 = "_xxOrder9_sh0ss_1546", G1 = "_xxOrder10_sh0ss_1549", Y1 = "_xxOrder11_sh0ss_1552", Z1 = "_xxOrder12_sh0ss_1555", Fn = {
  column: Bc,
  Size1: qc,
  Size2: Fc,
  Size3: Hc,
  Size4: Kc,
  Size5: Uc,
  Size6: Wc,
  Size7: Xc,
  Size8: Vc,
  Size9: Gc,
  Size10: Yc,
  Size11: Zc,
  Size12: Jc,
  Offset0: Qc,
  Offset1: ed,
  Offset2: td,
  Offset3: nd,
  Offset4: sd,
  Offset5: rd,
  Offset6: od,
  Offset7: ld,
  Offset8: ad,
  Offset9: id,
  Offset10: cd,
  Offset11: dd,
  Offset12: ud,
  OrderFirst: _d,
  OrderLast: fd,
  Order0: hd,
  Order1: pd,
  Order2: md,
  Order3: gd,
  Order4: xd,
  Order5: bd,
  Order6: yd,
  Order7: vd,
  Order8: kd,
  Order9: wd,
  Order10: $d,
  Order11: Nd,
  Order12: Od,
  xsSize1: Sd,
  xsSize2: Dd,
  xsSize3: Md,
  xsSize4: zd,
  xsSize5: Cd,
  xsSize6: Ed,
  xsSize7: Id,
  xsSize8: jd,
  xsSize9: Ad,
  xsSize10: Td,
  xsSize11: Ld,
  xsSize12: Rd,
  xsOffset0: Pd,
  xsOffset1: Bd,
  xsOffset2: qd,
  xsOffset3: Fd,
  xsOffset4: Hd,
  xsOffset5: Kd,
  xsOffset6: Ud,
  xsOffset7: Wd,
  xsOffset8: Xd,
  xsOffset9: Vd,
  xsOffset10: Gd,
  xsOffset11: Yd,
  xsOffset12: Zd,
  xsOrderFirst: Jd,
  xsOrderLast: Qd,
  xsOrder0: eu,
  xsOrder1: tu,
  xsOrder2: nu,
  xsOrder3: su,
  xsOrder4: ru,
  xsOrder5: ou,
  xsOrder6: lu,
  xsOrder7: au,
  xsOrder8: iu,
  xsOrder9: cu,
  xsOrder10: du,
  xsOrder11: uu,
  xsOrder12: _u,
  smSize1: fu,
  smSize2: hu,
  smSize3: pu,
  smSize4: mu,
  smSize5: gu,
  smSize6: xu,
  smSize7: bu,
  smSize8: yu,
  smSize9: vu,
  smSize10: ku,
  smSize11: wu,
  smSize12: $u,
  smOffset0: Nu,
  smOffset1: Ou,
  smOffset2: Su,
  smOffset3: Du,
  smOffset4: Mu,
  smOffset5: zu,
  smOffset6: Cu,
  smOffset7: Eu,
  smOffset8: Iu,
  smOffset9: ju,
  smOffset10: Au,
  smOffset11: Tu,
  smOffset12: Lu,
  smOrderFirst: Ru,
  smOrderLast: Pu,
  smOrder0: Bu,
  smOrder1: qu,
  smOrder2: Fu,
  smOrder3: Hu,
  smOrder4: Ku,
  smOrder5: Uu,
  smOrder6: Wu,
  smOrder7: Xu,
  smOrder8: Vu,
  smOrder9: Gu,
  smOrder10: Yu,
  smOrder11: Zu,
  smOrder12: Ju,
  mdSize1: Qu,
  mdSize2: e_,
  mdSize3: t_,
  mdSize4: n_,
  mdSize5: s_,
  mdSize6: r_,
  mdSize7: o_,
  mdSize8: l_,
  mdSize9: a_,
  mdSize10: i_,
  mdSize11: c_,
  mdSize12: d_,
  mdOffset0: u_,
  mdOffset1: __,
  mdOffset2: f_,
  mdOffset3: h_,
  mdOffset4: p_,
  mdOffset5: m_,
  mdOffset6: g_,
  mdOffset7: x_,
  mdOffset8: b_,
  mdOffset9: y_,
  mdOffset10: v_,
  mdOffset11: k_,
  mdOffset12: w_,
  mdOrderFirst: $_,
  mdOrderLast: N_,
  mdOrder0: O_,
  mdOrder1: S_,
  mdOrder2: D_,
  mdOrder3: M_,
  mdOrder4: z_,
  mdOrder5: C_,
  mdOrder6: E_,
  mdOrder7: I_,
  mdOrder8: j_,
  mdOrder9: A_,
  mdOrder10: T_,
  mdOrder11: L_,
  mdOrder12: R_,
  lgSize1: P_,
  lgSize2: B_,
  lgSize3: q_,
  lgSize4: F_,
  lgSize5: H_,
  lgSize6: K_,
  lgSize7: U_,
  lgSize8: W_,
  lgSize9: X_,
  lgSize10: V_,
  lgSize11: G_,
  lgSize12: Y_,
  lgOffset0: Z_,
  lgOffset1: J_,
  lgOffset2: Q_,
  lgOffset3: ef,
  lgOffset4: tf,
  lgOffset5: nf,
  lgOffset6: sf,
  lgOffset7: rf,
  lgOffset8: of,
  lgOffset9: lf,
  lgOffset10: af,
  lgOffset11: cf,
  lgOffset12: df,
  lgOrderFirst: uf,
  lgOrderLast: _f,
  lgOrder0: ff,
  lgOrder1: hf,
  lgOrder2: pf,
  lgOrder3: mf,
  lgOrder4: gf,
  lgOrder5: xf,
  lgOrder6: bf,
  lgOrder7: yf,
  lgOrder8: vf,
  lgOrder9: kf,
  lgOrder10: wf,
  lgOrder11: $f,
  lgOrder12: Nf,
  xlSize1: Of,
  xlSize2: Sf,
  xlSize3: Df,
  xlSize4: Mf,
  xlSize5: zf,
  xlSize6: Cf,
  xlSize7: Ef,
  xlSize8: If,
  xlSize9: jf,
  xlSize10: Af,
  xlSize11: Tf,
  xlSize12: Lf,
  xlOffset0: Rf,
  xlOffset1: Pf,
  xlOffset2: Bf,
  xlOffset3: qf,
  xlOffset4: Ff,
  xlOffset5: Hf,
  xlOffset6: Kf,
  xlOffset7: Uf,
  xlOffset8: Wf,
  xlOffset9: Xf,
  xlOffset10: Vf,
  xlOffset11: Gf,
  xlOffset12: Yf,
  xlOrderFirst: Zf,
  xlOrderLast: Jf,
  xlOrder0: Qf,
  xlOrder1: e1,
  xlOrder2: t1,
  xlOrder3: n1,
  xlOrder4: s1,
  xlOrder5: r1,
  xlOrder6: o1,
  xlOrder7: l1,
  xlOrder8: a1,
  xlOrder9: i1,
  xlOrder10: c1,
  xlOrder11: d1,
  xlOrder12: u1,
  xxSize1: _1,
  xxSize2: f1,
  xxSize3: h1,
  xxSize4: p1,
  xxSize5: m1,
  xxSize6: g1,
  xxSize7: x1,
  xxSize8: b1,
  xxSize9: y1,
  xxSize10: v1,
  xxSize11: k1,
  xxSize12: w1,
  xxOffset0: $1,
  xxOffset1: N1,
  xxOffset2: O1,
  xxOffset3: S1,
  xxOffset4: D1,
  xxOffset5: M1,
  xxOffset6: z1,
  xxOffset7: C1,
  xxOffset8: E1,
  xxOffset9: I1,
  xxOffset10: j1,
  xxOffset11: A1,
  xxOffset12: T1,
  xxOrderFirst: L1,
  xxOrderLast: R1,
  xxOrder0: P1,
  xxOrder1: B1,
  xxOrder2: q1,
  xxOrder3: F1,
  xxOrder4: H1,
  xxOrder5: K1,
  xxOrder6: U1,
  xxOrder7: W1,
  xxOrder8: X1,
  xxOrder9: V1,
  xxOrder10: G1,
  xxOrder11: Y1,
  xxOrder12: Z1
}, J1 = [
  ["", "size", "offset", "order"],
  ["xs", "sizeXs", "offsetXs", "orderXs"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xx", "sizeXx", "offsetXx", "orderXx"]
];
function Q1(e, t) {
  if (!Number.isInteger(t) || t < 1 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 1 and 12.`
    );
}
function eh(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12.`
    );
}
function th(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12 or first/last.`
    );
}
function nh(e, t, s) {
  return t === "first" ? `${e}OrderFirst` : t === "last" ? `${e}OrderLast` : (th(s, t), `${e}Order${t}`);
}
function kv({ className: e, style: t, ...s }) {
  const o = [Fn.column], i = { ...t };
  for (const [C, D, g, z] of J1) {
    const P = s[D], j = s[g], T = s[z];
    if (P != null) {
      Q1(D, P);
      const q = Fn[`${C}Size${P}`];
      q && o.push(q);
    }
    if (j != null) {
      eh(g, j);
      const q = Fn[`${C}Offset${j}`];
      q && o.push(q);
    }
    if (T != null) {
      const q = Fn[nh(C, T, z)];
      q && o.push(q);
    }
  }
  const {
    size: c,
    offset: h,
    sizeXs: r,
    offsetXs: l,
    sizeSm: a,
    offsetSm: p,
    sizeMd: d,
    offsetMd: v,
    sizeLg: y,
    offsetLg: w,
    sizeXl: k,
    offsetXl: _,
    sizeXx: f,
    offsetXx: u,
    order: x,
    orderXs: $,
    orderSm: m,
    orderMd: S,
    orderLg: b,
    orderXl: N,
    orderXx: E,
    ...I
  } = s;
  return /* @__PURE__ */ n(
    "div",
    {
      className: [...o, e].filter(Boolean).join(" "),
      style: i,
      ...I
    }
  );
}
const sh = "_stack_1yc1g_1", rh = "_gapXs_1yc1g_29", oh = "_gapSm_1yc1g_33", lh = "_gapMd_1yc1g_37", ah = "_gapLg_1yc1g_41", ih = "_gapXl_1yc1g_45", _n = {
  stack: sh,
  "dir-row": "_dir-row_1yc1g_5",
  "dir-row-reverse": "_dir-row-reverse_1yc1g_9",
  "dir-column": "_dir-column_1yc1g_13",
  "dir-column-reverse": "_dir-column-reverse_1yc1g_17",
  "wrap-nowrap": "_wrap-nowrap_1yc1g_21",
  "wrap-wrap-reverse": "_wrap-wrap-reverse_1yc1g_25",
  gapXs: rh,
  gapSm: oh,
  gapMd: lh,
  gapLg: ah,
  gapXl: ih,
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
}, ch = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function dh(e) {
  return typeof e != "string" ? null : ch[e] ?? null;
}
function Os(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function wv({
  orientation: e = "vertical",
  reverse: t = !1,
  wrap: s = !0,
  gap: o = "sm",
  align: i,
  justify: c,
  className: h,
  style: r,
  ...l
}) {
  const a = dh(o), p = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", d = {
    ...o != null && !a ? { gap: typeof o == "number" ? `${o}px` : o } : {},
    ...r
  };
  return /* @__PURE__ */ n(
    "div",
    {
      className: [
        _n.stack,
        _n[`dir-${p}`],
        Os(s) !== "wrap" ? _n[`wrap-${Os(s)}`] : null,
        i != null ? _n[`align-${i}`] : null,
        c != null ? _n[`justify-${c}`] : null,
        a ? _n[a] : null,
        h
      ].filter(Boolean).join(" "),
      style: d,
      ...l
    }
  );
}
const uh = "_autogrid_1fz7w_1", _h = "_gapXs_1fz7w_10", fh = "_gapSm_1fz7w_14", hh = "_gapMd_1fz7w_18", ph = "_gapLg_1fz7w_22", mh = "_gapXl_1fz7w_26", Ss = {
  autogrid: uh,
  gapXs: _h,
  gapSm: fh,
  gapMd: hh,
  gapLg: ph,
  gapXl: mh
}, gh = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function xh(e) {
  return typeof e != "string" ? null : gh[e] ?? null;
}
function $v({
  min: e = 240,
  gap: t = "md",
  className: s,
  style: o,
  visible: i = !0,
  ...c
}) {
  if (i === !1) return null;
  const h = xh(t), r = {
    // Keep --dx-autogrid-min in sync so the track math follows the prop.
    "--dx-autogrid-min": typeof e == "number" ? `${e}px` : e,
    ...t != null && !h ? { gap: typeof t == "number" ? `${t}px` : t } : {},
    ...o
  };
  return /* @__PURE__ */ n(
    "div",
    {
      className: [Ss.autogrid, h ? Ss[h] : null, s].filter(Boolean).join(" "),
      style: r,
      ...c
    }
  );
}
const bh = "_layout_fxvw1_1", yh = "_row_fxvw1_7", vh = "_grid_fxvw1_21", kh = "_gridRight_fxvw1_27", wh = "_gridHeader_fxvw1_31", $h = "_gridFooter_fxvw1_36", Nh = "_gridContents_fxvw1_41", Oh = "_gridBody_fxvw1_45", Ft = {
  layout: bh,
  row: yh,
  grid: vh,
  gridRight: kh,
  gridHeader: wh,
  gridFooter: $h,
  gridContents: Nh,
  gridBody: Oh
}, Sh = "_footer_1thaw_1", Dh = "_sticky_1thaw_9", Ds = {
  footer: Sh,
  sticky: Dh
};
function Mh({
  sticky: e = !1,
  className: t,
  children: s,
  ...o
}) {
  return /* @__PURE__ */ n(
    "footer",
    {
      className: [Ds.footer, e ? Ds.sticky : null, t].filter(Boolean).join(" "),
      ...o,
      children: s
    }
  );
}
const zh = "_header_wh9gi_1", Ch = "_sticky_wh9gi_9", Ms = {
  header: zh,
  sticky: Ch
};
function Eh({
  sticky: e = !1,
  className: t,
  children: s,
  ...o
}) {
  return /* @__PURE__ */ n(
    "header",
    {
      className: [Ms.header, e ? Ms.sticky : null, t].filter(Boolean).join(" "),
      ...o,
      children: s
    }
  );
}
const Ih = "_sidebar_1s2zw_1", jh = "_sticky_1s2zw_17", Ah = "_left_1s2zw_30", Th = "_right_1s2zw_34", Lh = "_start_1s2zw_39", Rh = "_end_1s2zw_43", Ph = "_fullHeight_1s2zw_49", Bh = "_collapsed_1s2zw_53", qh = "_responsive_1s2zw_61", Fh = "_overlay_1s2zw_69", Hh = "_mask_1s2zw_97", Zt = {
  sidebar: Ih,
  sticky: jh,
  left: Ah,
  right: Th,
  start: Lh,
  end: Rh,
  fullHeight: Ph,
  collapsed: Bh,
  responsive: qh,
  overlay: Fh,
  mask: Hh
};
function Kh({
  position: e = "left",
  expanded: t = !0,
  responsive: s = !1,
  overlay: o = !1,
  fullHeight: i = !1,
  sticky: c = !1,
  onClose: h,
  className: r,
  children: l,
  ...a
}) {
  return ke(() => {
    if (!o || !t || h == null) return;
    const p = (d) => {
      d.key === "Escape" && h();
    };
    return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [o, t, h]), /* @__PURE__ */ O(Me, { children: [
    o && t ? /* @__PURE__ */ n(
      "div",
      {
        className: `${Zt.mask} se-layout-mask`,
        "aria-hidden": "true",
        onClick: h
      }
    ) : null,
    /* @__PURE__ */ n(
      "aside",
      {
        className: [
          Zt.sidebar,
          Zt[e],
          t ? null : Zt.collapsed,
          s ? Zt.responsive : null,
          o ? [Zt.overlay, "se-sidebar--overlay"] : null,
          i ? Zt.fullHeight : null,
          c && !o && !i ? Zt.sticky : null,
          r
        ].flat().filter(Boolean).join(" "),
        ...a,
        children: l
      }
    )
  ] });
}
function Nv(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ n(Me, { children: e.children });
  const { className: t, children: s, ...o } = e, i = [], c = [], h = [], r = [], l = [], a = [];
  rr.forEach(s, (v) => {
    if (!Lt(v)) {
      h.push(v);
      return;
    }
    if (v.type === Eh)
      i.push(v);
    else if (v.type === Mh)
      c.push(v);
    else if (v.type === Kh) {
      const y = v, w = y.props.position;
      a.push(y), (w === "right" || w === "end" ? l : r).push(y);
    } else
      h.push(v);
  });
  const p = a.length === 1 && a[0]?.props.fullHeight === !0 ? a[0] : null, d = p != null && (p.props.position === "right" || p.props.position === "end");
  if (p) {
    const v = d ? l : r;
    return /* @__PURE__ */ O(
      "div",
      {
        className: [
          Ft.layout,
          Ft.grid,
          d ? Ft.gridRight : null,
          t
        ].filter(Boolean).join(" "),
        ...o,
        children: [
          i.length > 0 && /* @__PURE__ */ n("div", { className: Ft.gridHeader, children: i }),
          /* @__PURE__ */ O("div", { className: Ft.gridContents, children: [
            v,
            /* @__PURE__ */ n("div", { className: Ft.gridBody, children: h })
          ] }),
          c.length > 0 && /* @__PURE__ */ n("div", { className: Ft.gridFooter, children: c })
        ]
      }
    );
  }
  return /* @__PURE__ */ O(
    "div",
    {
      className: [Ft.layout, t].filter(Boolean).join(" "),
      ...o,
      children: [
        i,
        /* @__PURE__ */ O("div", { className: Ft.row, children: [
          r,
          h,
          l
        ] }),
        c
      ]
    }
  );
}
const Uh = "_body_akga4_1", Wh = "_bare_akga4_10", zs = {
  body: Uh,
  bare: Wh
};
function Ov({
  as: e = "main",
  padded: t = !0,
  className: s,
  children: o,
  ...i
}) {
  return /* @__PURE__ */ n(
    e,
    {
      className: [zs.body, t ? null : zs.bare, s].filter(Boolean).join(" "),
      ...i,
      children: o
    }
  );
}
const Xh = "_toggle_lxnk5_1", Vh = {
  toggle: Xh
};
function Sv({
  icon: e = "menu",
  label: t = "Toggle sidebar",
  className: s,
  type: o = "button",
  children: i,
  ...c
}) {
  return /* @__PURE__ */ n(
    "button",
    {
      type: o,
      "aria-label": t,
      className: [Vh.toggle, s].filter(Boolean).join(" "),
      ...c,
      children: i ?? /* @__PURE__ */ n(Ne, { name: e, size: 20 })
    }
  );
}
const Gh = "_track_1itxd_1", Yh = "_bar_1itxd_31", Zh = "_primary_1itxd_39", Jh = "_success_1itxd_43", Qh = "_warning_1itxd_47", ep = "_danger_1itxd_51", tp = "_indeterminate_1itxd_149", np = "_circular_1itxd_163", sp = "_fill_1itxd_203", mt = {
  track: Gh,
  "linear-xs": "_linear-xs_1itxd_11",
  "linear-sm": "_linear-sm_1itxd_15",
  "linear-md": "_linear-md_1itxd_19",
  "linear-lg": "_linear-lg_1itxd_23",
  "linear-xl": "_linear-xl_1itxd_27",
  bar: Yh,
  primary: Zh,
  success: Jh,
  warning: Qh,
  danger: ep,
  "shade-lighter": "_shade-lighter_1itxd_133",
  "shade-light": "_shade-light_1itxd_133",
  "shade-dark": "_shade-dark_1itxd_141",
  "shade-darker": "_shade-darker_1itxd_145",
  indeterminate: tp,
  "se-progress-slide": "_se-progress-slide_1itxd_1",
  circular: np,
  "circular-xs": "_circular-xs_1itxd_169",
  "circular-sm": "_circular-sm_1itxd_174",
  "circular-md": "_circular-md_1itxd_179",
  "circular-lg": "_circular-lg_1itxd_184",
  "circular-xl": "_circular-xl_1itxd_189",
  fill: sp,
  "se-progress-spin": "_se-progress-spin_1itxd_1"
};
function Dv({
  value: e = 0,
  max: t = 100,
  severity: s = "primary",
  shade: o,
  indeterminate: i = !1,
  variant: c = "linear",
  size: h = "md",
  className: r,
  visible: l = !0,
  ...a
}) {
  if (l === !1) return null;
  const p = t > 0 ? Math.min(t, Math.max(0, e)) : 0, d = t > 0 ? p / t * 100 : 0;
  if (c === "circular") {
    const y = typeof h == "string", w = 2, k = 10.5, _ = 2 * Math.PI * k, f = _ * (i ? 0.75 : 1), u = i ? 0 : _ * (1 - d / 100);
    return /* @__PURE__ */ O(
      "svg",
      {
        width: y ? void 0 : h,
        height: y ? void 0 : h,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": a["aria-label"],
        "aria-labelledby": a["aria-labelledby"],
        "aria-valuenow": i ? void 0 : Math.round(p),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        ...a,
        className: [
          mt.circular,
          mt[s],
          o && o !== "default" ? mt[`shade-${o}`] : null,
          y ? mt[`circular-${h}`] : null,
          i ? mt.indeterminate : null,
          r
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ n(
            "circle",
            {
              className: mt.track,
              cx: 12,
              cy: 12,
              r: k,
              strokeWidth: w
            }
          ),
          /* @__PURE__ */ n(
            "circle",
            {
              className: mt.fill,
              cx: 12,
              cy: 12,
              r: k,
              strokeWidth: w,
              strokeDasharray: `${f} ${_}`,
              strokeDashoffset: u
            }
          )
        ]
      }
    );
  }
  const v = o && o !== "default" ? `shade-${o}` : null;
  return /* @__PURE__ */ n(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": i ? void 0 : Math.round(p),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        mt.track,
        mt[s],
        v ? mt[v] : null,
        typeof h == "string" ? mt[`linear-${h}`] : null,
        i ? mt.indeterminate : null,
        r
      ].filter(Boolean).join(" "),
      ...a,
      children: /* @__PURE__ */ n(
        "div",
        {
          className: mt.bar,
          style: i ? void 0 : { width: `${d}%` }
        }
      )
    }
  );
}
function Mv(e) {
  return e == null || e === "default" ? null : `shade-${e}`;
}
function rp(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function Qs(e) {
  const [t, s] = V(() => rp(e));
  return ke(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const o = window.matchMedia(e);
    s(o.matches);
    const i = (c) => s(c.matches);
    return typeof o.addEventListener == "function" ? (o.addEventListener("change", i), () => o.removeEventListener("change", i)) : (o.addListener(i), () => o.removeListener(i));
  }, [e]), t;
}
const op = "_wrapper_1qmsj_1", lp = {
  wrapper: op
}, er = "dx-theme";
function ap(e) {
  const t = e === void 0 ? er : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const s = localStorage.getItem(t);
      return s === "light" || s === "dark" || s === "system" ? s : void 0;
    } catch {
      return;
    }
}
function ip(e, t) {
  const s = e === void 0 ? er : e;
  if (!(s === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(s, t);
    } catch {
    }
}
function zv({
  value: e,
  defaultValue: t,
  storageKey: s,
  onChange: o,
  label: i = "Dark mode",
  className: c
}) {
  const h = Qs("(prefers-color-scheme: dark)"), [r, l] = V(void 0), a = e ?? r ?? ap(s) ?? t ?? "system", p = a === "system" ? h ? "dark" : "light" : a;
  ke(() => {
    if (a === "system") {
      delete document.documentElement.dataset.theme;
      return;
    }
    document.documentElement.dataset.theme = a;
  }, [a]);
  const d = (v) => {
    const y = v.target.checked ? "dark" : "light";
    e === void 0 && l(y), ip(s, y), o?.(y);
  };
  return /* @__PURE__ */ O("label", { className: [lp.wrapper, c].filter(Boolean).join(" "), children: [
    i,
    /* @__PURE__ */ n(oi, { checked: p === "dark", onChange: d })
  ] });
}
function cp(e) {
  const t = new TextEncoder().encode(e), s = t.length * 8, o = ((t.length + 8 >> 6) + 1) * 64, i = new Uint8Array(o);
  i.set(t), i[t.length] = 128;
  const c = new DataView(i.buffer);
  c.setUint32(o - 8, s >>> 0, !0), c.setUint32(o - 4, Math.floor(s / 4294967296), !0);
  const h = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21], r = Array.from(
    { length: 64 },
    (k, _) => Math.floor(Math.abs(Math.sin(_ + 1)) * 4294967296)
  ), l = (k, _) => k + _ | 0, a = (k, _) => k << _ | k >>> 32 - _;
  let p = 1732584193, d = 4023233417, v = 2562383102, y = 271733878;
  for (let k = 0; k < o; k += 64) {
    const _ = [];
    for (let m = 0; m < 16; m += 1)
      _.push(c.getUint32(k + m * 4, !0));
    let f = p, u = d, x = v, $ = y;
    for (let m = 0; m < 64; m += 1) {
      let S, b;
      m < 16 ? (S = u & x | ~u & $, b = m) : m < 32 ? (S = $ & u | ~$ & x, b = (5 * m + 1) % 16) : m < 48 ? (S = u ^ x ^ $, b = (3 * m + 5) % 16) : (S = x ^ (u | ~$), b = 7 * m % 16), S = l(l(l(S, f), r[m]), _[b]), f = $, $ = x, x = u, u = l(u, a(S, h[Math.floor(m / 16) * 4 + m % 4]));
    }
    p = l(p, f), d = l(d, u), v = l(v, x), y = l(y, $);
  }
  const w = (k) => {
    let _ = "";
    for (let f = 0; f < 4; f += 1)
      _ += `0${(k >>> f * 8 & 255).toString(16)}`.slice(-2);
    return _;
  };
  return w(p) + w(d) + w(v) + w(y);
}
const dp = "_avatar_yj2hz_1", up = "_xs_yj2hz_12", _p = "_sm_yj2hz_18", fp = "_md_yj2hz_24", hp = "_lg_yj2hz_30", pp = "_xl_yj2hz_36", mp = "_initials_yj2hz_42", gp = "_image_yj2hz_57", xp = "_status_yj2hz_64", bp = "_online_yj2hz_84", yp = "_offline_yj2hz_88", vp = "_away_yj2hz_92", fn = {
  avatar: dp,
  xs: up,
  sm: _p,
  md: fp,
  lg: hp,
  xl: pp,
  initials: mp,
  image: gp,
  status: xp,
  online: bp,
  offline: yp,
  away: vp
}, kp = {
  xs: 20,
  sm: 28,
  md: 36,
  lg: 44,
  xl: 52
}, Yn = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function wp(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function $p(e) {
  let t = 0;
  for (let s = 0; s < e.length; s += 1)
    t = t * 31 + e.charCodeAt(s) >>> 0;
  return Yn[t % Yn.length] ?? Yn[0];
}
function Cv({
  name: e,
  src: t,
  email: s,
  gravatarDefault: o = "retro",
  gravatarRating: i = "g",
  alt: c,
  size: h = "md",
  status: r,
  className: l
}) {
  const a = $e(() => e ? wp(e) : "?", [e]), p = $e(() => e ? $p(e) : Yn[0], [e]), d = $e(() => {
    if (t != null || s == null) return;
    const $ = s.trim().toLowerCase();
    return $ === "" ? void 0 : `https://secure.gravatar.com/avatar/${cp($)}?d=${o}&s=${kp[h]}&r=${i}`;
  }, [t, s, o, i, h]), v = t ?? d, [y, w] = V(null), k = v != null && y !== v, _ = k && c === "", f = c ?? e ?? "avatar", u = r ? `${f}, ${r}` : f, x = k ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ n(
      "img",
      {
        className: fn.image,
        src: v,
        alt: _ ? "" : r ? u : f,
        onError: () => w(v ?? null)
      }
    )
  ) : /* @__PURE__ */ n(
    "span",
    {
      "aria-hidden": "true",
      className: fn.initials,
      style: { background: p },
      children: a
    }
  );
  return /* @__PURE__ */ O(
    "span",
    {
      className: [
        fn.avatar,
        fn[h],
        r ? fn[r] : null,
        l
      ].filter(Boolean).join(" "),
      role: k ? void 0 : "img",
      "aria-label": k ? void 0 : u,
      children: [
        x,
        r && /* @__PURE__ */ n("span", { className: fn.status, "aria-hidden": "true" })
      ]
    }
  );
}
const Np = "_root_iy2gv_1", Op = "_left_iy2gv_6", Sp = "_right_iy2gv_7", Dp = "_panel_iy2gv_12", Mp = "_bottom_iy2gv_20", zp = "_tabList_iy2gv_24", Cp = "_underline_iy2gv_53", Ep = "_pills_iy2gv_72", Ip = "_tab_iy2gv_24", jp = "_active_iy2gv_113", Ap = "_disabled_iy2gv_139", Ht = {
  root: Np,
  left: Op,
  right: Sp,
  panel: Dp,
  bottom: Mp,
  tabList: zp,
  underline: Cp,
  pills: Ep,
  tab: Ip,
  active: jp,
  disabled: Ap
};
function Ev({
  items: e,
  value: t,
  defaultValue: s,
  onChange: o,
  variant: i = "underline",
  position: c = "top",
  className: h
}) {
  const r = Fe(), l = le(null), [a, p] = V(
    s ?? e[0]?.key ?? ""
  ), d = t ?? a, v = c === "left" || c === "right", y = (_) => {
    p(_), o?.(_);
  }, w = (_) => {
    const f = e.filter(($) => !$.disabled), u = f.findIndex(($) => $.key === d);
    let x = -1;
    _.key === "ArrowRight" || v && _.key === "ArrowDown" ? x = (u + 1) % f.length : _.key === "ArrowLeft" || v && _.key === "ArrowUp" ? x = (u - 1 + f.length) % f.length : _.key === "Home" ? x = 0 : _.key === "End" && (x = f.length - 1), x >= 0 && (_.preventDefault(), l.current?.querySelector(
      `[data-tab-key="${CSS.escape(f[x]?.key ?? "")}"]`
    )?.focus(), y(f[x]?.key ?? ""));
  }, k = e.find((_) => _.key === d);
  return /* @__PURE__ */ O(
    "div",
    {
      className: [Ht.root, Ht[c], h].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ n(
          "div",
          {
            ref: l,
            role: "tablist",
            className: [Ht.tabList, Ht[i], Ht[c]].filter(Boolean).join(" "),
            onKeyDown: w,
            children: e.map((_) => {
              const f = _.key === d;
              return /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  role: "tab",
                  id: `${r}-tab-${_.key}`,
                  "data-tab-key": _.key,
                  "aria-selected": f,
                  "aria-controls": `${r}-panel-${_.key}`,
                  tabIndex: f ? 0 : -1,
                  disabled: _.disabled,
                  className: [
                    Ht.tab,
                    f ? Ht.active : null,
                    _.disabled ? Ht.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => y(_.key),
                  children: _.label
                },
                _.key
              );
            })
          }
        ),
        k && /* @__PURE__ */ n(
          "div",
          {
            role: "tabpanel",
            id: `${r}-panel-${k.key}`,
            "aria-labelledby": `${r}-tab-${k.key}`,
            className: Ht.panel,
            children: k.content
          }
        )
      ]
    }
  );
}
const Tp = "_root_1qkv8_1", Lp = "_item_1qkv8_9", Rp = "_heading_1qkv8_13", Pp = "_trigger_1qkv8_17", Bp = "_disabled_1qkv8_34", qp = "_title_1qkv8_48", Fp = "_chevron_1qkv8_52", Hp = "_open_1qkv8_59", Kp = "_content_1qkv8_63", Kt = {
  root: Tp,
  item: Lp,
  heading: Rp,
  trigger: Pp,
  disabled: Bp,
  title: qp,
  chevron: Fp,
  open: Hp,
  content: Kp
};
function Iv({
  items: e,
  multiple: t = !1,
  value: s,
  defaultValue: o,
  onChange: i,
  className: c
}) {
  const h = Fe(), [r, l] = V(
    o ?? []
  ), a = s ?? r, p = (d) => {
    const v = a.includes(d) ? a.filter((y) => y !== d) : t ? [...a, d] : [d];
    l(v), i?.(v);
  };
  return /* @__PURE__ */ n("div", { className: [Kt.root, c].filter(Boolean).join(" "), children: e.map((d) => {
    const v = a.includes(d.key), y = `${h}-panel-${d.key}`, w = `${h}-trigger-${d.key}`;
    return /* @__PURE__ */ O("div", { className: Kt.item, children: [
      /* @__PURE__ */ n("h3", { className: Kt.heading, children: /* @__PURE__ */ O(
        "button",
        {
          type: "button",
          id: w,
          "aria-expanded": v,
          "aria-controls": y,
          disabled: d.disabled,
          className: [
            Kt.trigger,
            d.disabled ? Kt.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => p(d.key),
          children: [
            /* @__PURE__ */ n("span", { className: Kt.title, children: d.title }),
            /* @__PURE__ */ n(
              "span",
              {
                className: [Kt.chevron, v ? Kt.open : null].filter(Boolean).join(" "),
                "aria-hidden": "true",
                children: /* @__PURE__ */ n(Ne, { name: "chevron-down", size: 12 })
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ n(
        "div",
        {
          id: y,
          role: "region",
          "aria-labelledby": w,
          hidden: !v,
          className: Kt.content,
          children: d.content
        }
      )
    ] }, d.key);
  }) });
}
const Up = "_textarea_1uei3_1", Wp = "_invalid_1uei3_27", Xp = "_xs_1uei3_34", Vp = "_sm_1uei3_39", Gp = "_md_1uei3_44", Yp = "_lg_1uei3_49", Zp = "_xl_1uei3_54", Hn = {
  textarea: Up,
  invalid: Wp,
  xs: Xp,
  sm: Vp,
  md: Gp,
  lg: Yp,
  xl: Zp,
  "resize-none": "_resize-none_1uei3_59",
  "resize-vertical": "_resize-vertical_1uei3_63",
  "resize-horizontal": "_resize-horizontal_1uei3_67",
  "resize-both": "_resize-both_1uei3_71"
}, jv = He(
  function({ size: t = "md", resize: s = "none", invalid: o = !1, className: i, ...c }, h) {
    return /* @__PURE__ */ n(
      "textarea",
      {
        ref: h,
        "data-size": t,
        className: [
          Hn.textarea,
          Hn[t],
          Hn[`resize-${s}`],
          o ? Hn.invalid : null,
          i
        ].filter(Boolean).join(" "),
        "aria-invalid": o || void 0,
        ...c
      }
    );
  }
), Jp = "_typography_1jy8x_1", Qp = "_h1_1jy8x_39", em = "_h2_1jy8x_45", tm = "_h3_1jy8x_51", nm = "_h4_1jy8x_57", sm = "_h5_1jy8x_63", rm = "_h6_1jy8x_69", om = "_button_1jy8x_99", lm = "_caption_1jy8x_106", am = "_overline_1jy8x_112", ts = {
  typography: Jp,
  "display-1": "_display-1_1jy8x_8",
  "display-2": "_display-2_1jy8x_13",
  "display-3": "_display-3_1jy8x_18",
  "display-4": "_display-4_1jy8x_23",
  "display-5": "_display-5_1jy8x_28",
  "display-6": "_display-6_1jy8x_33",
  h1: Qp,
  h2: em,
  h3: tm,
  h4: nm,
  h5: sm,
  h6: rm,
  "subtitle-1": "_subtitle-1_1jy8x_75",
  "subtitle-2": "_subtitle-2_1jy8x_81",
  "body-1": "_body-1_1jy8x_87",
  "body-2": "_body-2_1jy8x_92",
  button: om,
  caption: lm,
  overline: am,
  "align-left": "_align-left_1jy8x_121",
  "align-center": "_align-center_1jy8x_125",
  "align-right": "_align-right_1jy8x_129",
  "align-justify": "_align-justify_1jy8x_133"
}, im = {
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
}, cm = {
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
}, dm = {
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
}, um = {
  Left: "align-left",
  Right: "align-right",
  Center: "align-center",
  Justify: "align-justify",
  Start: "align-left",
  End: "align-right",
  JustifyAll: "align-justify"
}, Av = He(function({
  textStyle: t = "Body1",
  tagName: s = "Auto",
  textAlign: o,
  text: i,
  visible: c = !0,
  className: h,
  children: r,
  ...l
}, a) {
  if (c === !1) return null;
  const p = s === "Auto" ? im[t] : dm[s];
  return /* @__PURE__ */ n(
    p,
    {
      ref: a,
      className: [
        ts.typography,
        ts[cm[t]],
        o ? ts[um[o]] : null,
        h
      ].filter(Boolean).join(" "),
      ...l,
      children: i ?? r
    }
  );
}), _m = "_root_jtes6_1", fm = "_trigger_jtes6_9", hm = "_invalid_jtes6_40", pm = "_placeholder_jtes6_47", mm = "_label_jtes6_54", gm = "_chevron_jtes6_60", xm = "_chevronOpen_jtes6_70", bm = "_menu_jtes6_74", ym = "_option_jtes6_89", vm = "_disabled_jtes6_100", km = "_active_jtes6_104", wm = "_selected_jtes6_105", $m = "_header_jtes6_115", Nm = "_xs_jtes6_122", Om = "_sm_jtes6_128", Sm = "_md_jtes6_134", Dm = "_lg_jtes6_140", Mm = "_xl_jtes6_146", it = {
  root: _m,
  trigger: fm,
  invalid: hm,
  placeholder: pm,
  label: mm,
  chevron: gm,
  chevronOpen: xm,
  menu: bm,
  option: ym,
  disabled: vm,
  active: km,
  selected: wm,
  header: $m,
  xs: Nm,
  sm: Om,
  md: Sm,
  lg: Dm,
  xl: Mm
}, zm = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function Tv({
  options: e = [],
  value: t,
  defaultValue: s,
  onChange: o,
  placeholder: i = "Select…",
  size: c = "md",
  invalid: h = !1,
  disabled: r = !1,
  className: l,
  ...a
}) {
  const p = Fe(), d = `${p}-listbox`, v = le(null), y = le(null), [w, k] = V(
    s
  ), [_, f] = V(!1), u = t ?? w, x = e.map(
    (g, z) => g.label === "" || g.disabled ? -1 : z
  ).filter((g) => g >= 0), $ = e.findIndex(
    (g) => g.value === u
  ), [m, S] = V(
    () => x.includes(0) ? 0 : x[0] ?? -1
  ), b = H(() => {
    if (r) return;
    const g = $ >= 0 && x.includes($) ? $ : x[0];
    S(g ?? -1), f(!0);
  }, [r, $, x]), N = H(() => {
    f(!1), y.current?.focus();
  }, []);
  ke(() => {
    if (!_) return;
    const g = (z) => {
      v.current && !v.current.contains(z.target) && f(!1);
    };
    return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, [_]);
  const E = (g) => {
    k(g), o?.(g), f(!1), y.current?.focus();
  }, I = (g) => {
    if (x.length === 0) return;
    const z = x.includes(m) ? x.indexOf(m) : 0, P = x[(z + g + x.length) % x.length];
    P != null && S(P);
  }, C = (g) => {
    if (!_) {
      g.key === "ArrowDown" && (g.preventDefault(), b());
      return;
    }
    switch (g.key) {
      case "ArrowDown":
        g.preventDefault(), I(1);
        break;
      case "ArrowUp":
        g.preventDefault(), I(-1);
        break;
      case "Home":
        g.preventDefault(), x[0] != null && S(x[0]);
        break;
      case "End":
        g.preventDefault(), x[x.length - 1] != null && S(x[x.length - 1]);
        break;
      case "Enter":
      case " ":
        g.preventDefault(), m >= 0 && e[m] && x.includes(m) && E(e[m]?.value ?? "");
        break;
      case "Escape":
        g.preventDefault(), N();
        break;
      case "Tab":
        f(!1);
        break;
    }
  }, D = e.find(
    (g) => g.value === u
  );
  return /* @__PURE__ */ O(
    "div",
    {
      ref: v,
      className: [it.root, l].filter(Boolean).join(" "),
      onKeyDown: C,
      children: [
        /* @__PURE__ */ O(
          "button",
          {
            ref: y,
            type: "button",
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-expanded": _,
            "aria-controls": d,
            "aria-invalid": h || void 0,
            disabled: r,
            className: [
              it.trigger,
              it[c],
              _ ? it.open : null,
              h ? it.invalid : null
            ].filter(Boolean).join(" "),
            onClick: () => _ ? f(!1) : b(),
            ...a,
            children: [
              /* @__PURE__ */ n("span", { className: D ? it.label : it.placeholder, children: D ? D.label : i }),
              /* @__PURE__ */ n(
                "span",
                {
                  className: [it.chevron, _ ? it.chevronOpen : null].filter(Boolean).join(" "),
                  style: { backgroundImage: zm },
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ),
        _ && /* @__PURE__ */ n(
          "div",
          {
            id: d,
            role: "listbox",
            "aria-activedescendant": m >= 0 ? `${p}-option-${m}` : void 0,
            className: it.menu,
            children: e.map(
              (g, z) => g.label === "" ? /* @__PURE__ */ n(
                "div",
                {
                  className: it.header,
                  role: "presentation",
                  children: g.value
                },
                g.value
              ) : /* @__PURE__ */ n(
                "div",
                {
                  id: `${p}-option-${z}`,
                  role: "option",
                  "aria-selected": g.value === u,
                  "aria-disabled": g.disabled || void 0,
                  className: [
                    it.option,
                    z === m ? it.active : null,
                    g.value === u ? it.selected : null,
                    g.disabled ? it.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    g.disabled || E(g.value);
                  },
                  onMouseEnter: () => {
                    !g.disabled && g.label !== "" && S(z);
                  },
                  children: g.label
                },
                g.value
              )
            )
          }
        )
      ]
    }
  );
}
const Cm = "_root_5j58f_1", Em = "_wrap_5j58f_9", Im = "_input_5j58f_26", jm = "_invalid_5j58f_31", Am = "_clear_5j58f_58", Tm = "_menu_5j58f_83", Lm = "_option_5j58f_98", Rm = "_disabled_5j58f_109", Pm = "_active_5j58f_113", Bm = "_empty_5j58f_123", qm = "_xs_5j58f_129", Fm = "_sm_5j58f_136", Hm = "_md_5j58f_143", Km = "_lg_5j58f_150", Um = "_xl_5j58f_157", Dt = {
  root: Cm,
  wrap: Em,
  input: Im,
  invalid: jm,
  clear: Am,
  menu: Tm,
  option: Lm,
  disabled: Rm,
  active: Pm,
  empty: Bm,
  xs: qm,
  sm: Fm,
  md: Hm,
  lg: Km,
  xl: Um
}, Wm = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function Lv({
  options: e = [],
  value: t,
  defaultValue: s = "",
  onChange: o,
  onSelect: i,
  placeholder: c = "",
  size: h = "md",
  invalid: r = !1,
  disabled: l = !1,
  filter: a = Wm,
  className: p,
  ...d
}) {
  const v = Fe(), y = `${v}-listbox`, w = le(null), k = le(null), [_, f] = V(s), [u, x] = V(!1), $ = t ?? _, m = $e(
    () => $.trim() === "" ? [...e] : e.filter((T) => a(T, $)),
    [e, $, a]
  ), S = m.map((T, q) => T.disabled ? -1 : q).filter((T) => T >= 0), [b, N] = V(-1), E = (T) => {
    f(T), o?.(T);
  }, I = (T) => {
    E(T.label), i?.(T.value, T), x(!1);
  }, C = (T) => {
    if (S.length === 0) return;
    const q = S.includes(b) ? S.indexOf(b) : T === 1 ? -1 : 0, X = S[(q + T + S.length) % S.length];
    X != null && N(X);
  }, D = (T) => {
    l || (E(T.target.value), x(!0), N(-1));
  }, g = () => {
    l || $ !== "" && x(!0);
  }, z = (T) => {
    w.current && !w.current.contains(T.relatedTarget) && x(!1);
  }, P = (T) => {
    if (!l)
      switch (T.key) {
        case "ArrowDown":
          T.preventDefault(), u ? C(1) : (x(!0), N(S[0] ?? -1));
          break;
        case "ArrowUp":
          T.preventDefault(), u && C(-1);
          break;
        case "Enter":
          T.preventDefault(), u && b >= 0 && m[b] && I(m[b]);
          break;
        case "Escape":
          T.preventDefault(), x(!1);
          break;
        case "Tab":
          u && b >= 0 && m[b] && I(m[b]), x(!1);
          break;
      }
  }, j = () => {
    E(""), N(-1), x(!0), k.current?.focus();
  };
  return /* @__PURE__ */ O(
    "div",
    {
      ref: w,
      className: [Dt.root, p].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ O(
          "div",
          {
            className: [Dt.wrap, Dt[h], r ? Dt.invalid : null].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ n(
                "input",
                {
                  ref: k,
                  type: "text",
                  role: "combobox",
                  "aria-expanded": u,
                  "aria-controls": y,
                  "aria-autocomplete": "list",
                  "aria-activedescendant": u && b >= 0 ? `${v}-option-${b}` : void 0,
                  "aria-invalid": r || void 0,
                  disabled: l,
                  value: $,
                  placeholder: c,
                  className: Dt.input,
                  onChange: D,
                  onFocus: g,
                  onBlur: z,
                  onKeyDown: P,
                  ...d
                }
              ),
              $ !== "" && !l && /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: Dt.clear,
                  "aria-label": "Clear",
                  onClick: j,
                  children: /* @__PURE__ */ n(Ne, { name: "close", size: "sm" })
                }
              )
            ]
          }
        ),
        u && /* @__PURE__ */ n("div", { id: y, role: "listbox", className: Dt.menu, children: m.length === 0 ? /* @__PURE__ */ n("div", { className: Dt.empty, children: "No matches" }) : m.map((T, q) => /* @__PURE__ */ n(
          "div",
          {
            id: `${v}-option-${q}`,
            role: "option",
            "aria-selected": !1,
            "aria-disabled": T.disabled || void 0,
            className: [
              Dt.option,
              q === b ? Dt.active : null,
              T.disabled ? Dt.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => {
              T.disabled || I(T);
            },
            onMouseDown: (X) => {
              X.preventDefault(), T.disabled || I(T);
            },
            onMouseEnter: () => {
              T.disabled || N(q);
            },
            children: T.label
          },
          T.value
        )) })
      ]
    }
  );
}
const Xm = "_box_txdu6_1", Vm = "_option_txdu6_12", Gm = "_disabled_txdu6_23", Ym = "_selected_txdu6_27", Zm = "_active_txdu6_33", Mn = {
  box: Xm,
  option: Vm,
  disabled: Gm,
  selected: Ym,
  active: Zm
};
function Rv({
  options: e = [],
  value: t,
  defaultValue: s,
  multiple: o = !1,
  onChange: i,
  className: c,
  style: h,
  ...r
}) {
  const l = Fe(), [a, p] = V(() => {
    const m = s;
    return m == null ? [] : Array.isArray(m) ? [...m] : [m];
  }), d = t == null ? a : Array.isArray(t) ? t : [t], v = e.findIndex((m) => !m.disabled), [y, w] = V(
    () => v >= 0 ? v : 0
  ), k = le(""), _ = le(null), f = (m) => {
    p(m), i?.(o ? m : m[0] ?? "");
  }, u = e.map((m, S) => m.disabled ? -1 : S).filter((m) => m >= 0), x = (m) => {
    const S = e[m];
    if (!(!S || S.disabled))
      if (w(m), o) {
        const b = d.includes(S.value) ? d.filter((N) => N !== S.value) : [...d, S.value];
        f(b);
      } else
        f([S.value]);
  }, $ = (m) => {
    if (u.length === 0) return;
    const S = u.includes(y) ? y : u[0];
    let b = -1;
    if (m.key === "ArrowDown")
      b = u[(u.indexOf(S) + 1) % u.length];
    else if (m.key === "ArrowUp")
      b = u[(u.indexOf(S) - 1 + u.length) % u.length];
    else if (m.key === "Home")
      b = u[0];
    else if (m.key === "End")
      b = u[u.length - 1];
    else if (m.key === "Enter" || m.key === " ") {
      m.preventDefault(), x(S);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(m.key)) {
      m.preventDefault();
      const N = (k.current + m.key).toLowerCase();
      k.current = N, _.current && clearTimeout(_.current), _.current = setTimeout(() => {
        k.current = "";
      }, 500);
      const E = [...u, ...u], I = u.indexOf(S) + 1, C = E.slice(I).find((D) => e[D]?.label.toLowerCase().startsWith(N));
      C != null && w(C);
      return;
    }
    b >= 0 && (m.preventDefault(), w(b), o || f([e[b]?.value ?? ""]));
  };
  return /* @__PURE__ */ n(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": o || void 0,
      "aria-activedescendant": e[y] ? `${l}-option-${y}` : void 0,
      style: h,
      className: [Mn.box, c].filter(Boolean).join(" "),
      onKeyDown: $,
      ...r,
      children: e.map((m, S) => {
        const b = d.includes(m.value), N = S === y;
        return /* @__PURE__ */ n(
          "div",
          {
            id: `${l}-option-${S}`,
            role: "option",
            "aria-selected": b,
            "aria-disabled": m.disabled || void 0,
            className: [
              Mn.option,
              b ? Mn.selected : null,
              N ? Mn.active : null,
              m.disabled ? Mn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => x(S),
            children: m.label
          },
          m.value
        );
      })
    }
  );
}
const Jm = "_group_1gpkr_1", Qm = "_legend_1gpkr_8", eg = "_list_1gpkr_16", tg = "_item_1gpkr_25", ng = "_disabled_1gpkr_32", sg = "_label_1gpkr_37", rg = "_checkbox_1gpkr_48", rn = {
  group: Jm,
  legend: Qm,
  list: eg,
  item: tg,
  disabled: ng,
  label: sg,
  checkbox: rg
};
function Pv({
  options: e = [],
  value: t,
  defaultValue: s = [],
  onChange: o,
  legend: i,
  name: c,
  className: h
}) {
  const [r, l] = V(() => [
    ...s
  ]), a = t ?? r, p = (d, v) => {
    const y = v ? [...a, d] : a.filter((w) => w !== d);
    l(y), o?.(y);
  };
  return /* @__PURE__ */ O("fieldset", { className: [rn.group, h].filter(Boolean).join(" "), children: [
    i != null && /* @__PURE__ */ n("legend", { className: rn.legend, children: i }),
    /* @__PURE__ */ n("ul", { className: rn.list, children: e.map((d) => {
      const v = a.includes(d.value);
      return /* @__PURE__ */ n(
        "li",
        {
          className: [rn.item, d.disabled ? rn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ O("label", { className: rn.label, children: [
            /* @__PURE__ */ n(
              "input",
              {
                type: "checkbox",
                className: rn.checkbox,
                name: c,
                value: d.value,
                checked: v,
                disabled: d.disabled,
                onChange: (y) => p(d.value, y.target.checked)
              }
            ),
            /* @__PURE__ */ n("span", { children: d.label })
          ] })
        },
        d.value
      );
    }) })
  ] });
}
const og = "_group_wb5fo_1", lg = "_legend_wb5fo_8", ag = "_list_wb5fo_16", ig = "_item_wb5fo_25", cg = "_disabled_wb5fo_32", dg = "_label_wb5fo_37", ug = "_radio_wb5fo_48", on = {
  group: og,
  legend: lg,
  list: ag,
  item: ig,
  disabled: cg,
  label: dg,
  radio: ug
};
function Bv({
  options: e = [],
  value: t,
  defaultValue: s,
  onChange: o,
  legend: i,
  name: c,
  className: h
}) {
  const [r, l] = V(
    s
  ), a = t ?? r, p = (d) => {
    l(d), o?.(d);
  };
  return /* @__PURE__ */ O("fieldset", { className: [on.group, h].filter(Boolean).join(" "), children: [
    i != null && /* @__PURE__ */ n("legend", { className: on.legend, children: i }),
    /* @__PURE__ */ n("ul", { className: on.list, children: e.map((d) => {
      const v = d.value === a;
      return /* @__PURE__ */ n(
        "li",
        {
          className: [on.item, d.disabled ? on.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ O("label", { className: on.label, children: [
            /* @__PURE__ */ n(
              "input",
              {
                type: "radio",
                className: on.radio,
                name: c,
                value: d.value,
                checked: v,
                disabled: d.disabled,
                onChange: (y) => p(y.target.value)
              }
            ),
            /* @__PURE__ */ n("span", { children: d.label })
          ] })
        },
        d.value
      );
    }) })
  ] });
}
const _g = "_bar_44vcf_1", fg = "_vertical_44vcf_12", hg = "_option_44vcf_17", pg = "_selected_44vcf_40", mg = "_sm_44vcf_56", gg = "_md_44vcf_62", xg = "_lg_44vcf_68", hn = {
  bar: _g,
  vertical: fg,
  option: hg,
  selected: pg,
  sm: mg,
  md: gg,
  lg: xg
};
function Cs(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function qv(e) {
  const {
    options: t = [],
    value: s,
    defaultValue: o,
    multiple: i,
    orientation: c = "horizontal",
    onChange: h,
    size: r = "md",
    className: l,
    ...a
  } = e, p = i ?? !1, [d, v] = V(o ?? (p ? [] : t[0]?.value)), y = s ?? d, w = i === !0 || i === void 0 && Array.isArray(y), k = (f) => {
    if (!w) {
      v(f), h?.(f);
      return;
    }
    const u = Cs(y), x = u.includes(f) ? u.filter(($) => $ !== f) : [...u, f];
    v(x), h?.(x);
  }, _ = (f) => w ? Cs(y).includes(f) : y === f;
  return /* @__PURE__ */ n(
    "div",
    {
      role: "group",
      className: [
        hn.bar,
        hn[r],
        c === "vertical" ? hn.vertical : null,
        l
      ].filter(Boolean).join(" "),
      ...a,
      children: t.map((f) => {
        const u = _(f.value);
        return /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            "aria-pressed": u,
            disabled: f.disabled,
            className: [
              hn.option,
              u ? hn.selected : null,
              f.disabled ? hn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => k(f.value),
            children: f.label
          },
          f.value
        );
      })
    }
  );
}
const bg = "_toggle_bc517_1", yg = "_pressed_bc517_29", vg = "_sm_bc517_41", kg = "_md_bc517_47", wg = "_lg_bc517_53", $g = "_fullWidth_bc517_59", Kn = {
  toggle: bg,
  pressed: yg,
  sm: vg,
  md: kg,
  lg: wg,
  fullWidth: $g
}, Fv = He(
  function({
    pressed: t,
    defaultPressed: s = !1,
    onChange: o,
    size: i = "md",
    fullWidth: c = !1,
    className: h,
    type: r = "button",
    ...l
  }, a) {
    const [p, d] = V(s), v = t ?? p, y = () => {
      const w = !v;
      d(w), o?.(w);
    };
    return /* @__PURE__ */ n(
      "button",
      {
        ref: a,
        type: r,
        "aria-pressed": v,
        className: [
          Kn.toggle,
          Kn[i],
          v ? Kn.pressed : null,
          c ? Kn.fullWidth : null,
          h
        ].filter(Boolean).join(" "),
        onClick: y,
        ...l
      }
    );
  }
), Ng = "_root_1nhis_1", Og = "_action_1nhis_328", Sg = "_filled_1nhis_348", Dg = "_caret_1nhis_352", Mg = "_flat_1nhis_373", zg = "_outlined_1nhis_381", Cg = "_text_1nhis_390", Eg = "_sm_1nhis_496", Ig = "_md_1nhis_508", jg = "_lg_1nhis_520", Ag = "_menu_1nhis_532", Tg = "_item_1nhis_545", Lg = "_disabled_1nhis_566", Rg = "_active_1nhis_570", Pg = "_danger_1nhis_579", kt = {
  root: Ng,
  "style-primary": "_style-primary_1nhis_11",
  "style-secondary": "_style-secondary_1nhis_25",
  "style-base": "_style-base_1nhis_35",
  "style-light": "_style-light_1nhis_45",
  "style-dark": "_style-dark_1nhis_55",
  "style-info": "_style-info_1nhis_69",
  "style-success": "_style-success_1nhis_83",
  "style-warning": "_style-warning_1nhis_97",
  "style-danger": "_style-danger_1nhis_111",
  action: Og,
  filled: Sg,
  caret: Dg,
  flat: Mg,
  outlined: zg,
  text: Cg,
  "shade-lighter": "_shade-lighter_1nhis_407",
  "shade-light": "_shade-light_1nhis_407",
  "shade-dark": "_shade-dark_1nhis_417",
  "shade-darker": "_shade-darker_1nhis_421",
  sm: Eg,
  md: Ig,
  lg: jg,
  menu: Ag,
  item: Tg,
  disabled: Lg,
  active: Rg,
  danger: Pg
};
function Hv({
  label: e,
  onClick: t,
  items: s = [],
  severity: o = "primary",
  variant: i = "filled",
  shade: c = "default",
  size: h = "md",
  disabled: r = !1,
  className: l,
  ...a
}) {
  const d = `${Fe()}-menu`, v = le(null), y = le(null), w = le([]), [k, _] = V(!1), [f, u] = V(-1), x = $e(
    () => s.map((C, D) => C.disabled ? -1 : D).filter((C) => C >= 0),
    [s]
  ), $ = H(() => {
    r || (u(x[0] ?? -1), _(!0));
  }, [r, x]), m = H(() => {
    _(!1), y.current?.focus();
  }, []);
  ke(() => {
    if (!k) return;
    const C = (D) => {
      v.current && !v.current.contains(D.target) && _(!1);
    };
    return document.addEventListener("mousedown", C), () => document.removeEventListener("mousedown", C);
  }, [k]);
  const S = le(k);
  ke(() => {
    const C = S.current;
    if (S.current = k, !k || C) return;
    const D = x.includes(f) ? f : x[0] ?? -1;
    D >= 0 && w.current[D]?.focus();
  }, [k, f, x]);
  const b = (C) => {
    const D = s[C];
    !D || D.disabled || (D.onClick?.(), _(!1), y.current?.focus());
  }, N = (C) => {
    if (x.length === 0) return;
    const D = x.includes(f) ? x.indexOf(f) : C === 1 ? -1 : 0, g = x[(D + C + x.length) % x.length];
    g != null && (u(g), w.current[g]?.focus());
  }, E = (C) => {
    const D = C === "first" ? x[0] : x[x.length - 1];
    D != null && (u(D), w.current[D]?.focus());
  }, I = (C) => {
    switch (C.key) {
      case "ArrowDown":
        C.preventDefault(), N(1);
        break;
      case "ArrowUp":
        C.preventDefault(), N(-1);
        break;
      case "Home":
        C.preventDefault(), E("first");
        break;
      case "End":
        C.preventDefault(), E("last");
        break;
      case "Escape":
        C.preventDefault(), m();
        break;
      case "Tab":
        _(!1);
        break;
    }
  };
  return /* @__PURE__ */ O(
    "div",
    {
      ref: v,
      className: [
        kt.root,
        kt[h],
        kt[`style-${o}`],
        kt[_s(i, "filled")],
        c !== "default" ? kt[`shade-${c}`] : null,
        l
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: kt.action,
            disabled: r,
            onClick: t,
            children: e
          }
        ),
        /* @__PURE__ */ n(
          "button",
          {
            ref: y,
            type: "button",
            className: kt.caret,
            "aria-haspopup": "menu",
            "aria-expanded": k,
            "aria-controls": d,
            "aria-label": "More actions",
            disabled: r,
            onClick: () => k ? _(!1) : $(),
            onKeyDown: (C) => {
              !k && C.key === "ArrowDown" && (C.preventDefault(), $());
            },
            children: /* @__PURE__ */ n(Ne, { name: "chevron-down" })
          }
        ),
        k && /* @__PURE__ */ n(
          "div",
          {
            id: d,
            role: "menu",
            tabIndex: -1,
            className: kt.menu,
            onKeyDown: I,
            ...a,
            children: s.map((C, D) => /* @__PURE__ */ n(
              "button",
              {
                ref: (g) => {
                  w.current[D] = g;
                },
                type: "button",
                role: "menuitem",
                tabIndex: D === f ? 0 : -1,
                disabled: C.disabled,
                className: [
                  kt.item,
                  D === f ? kt.active : null,
                  C.danger ? kt.danger : null,
                  C.disabled ? kt.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => b(D),
                onMouseEnter: () => {
                  C.disabled || u(D);
                },
                children: C.label
              },
              C.key
            ))
          }
        )
      ]
    }
  );
}
const Bg = "_wrapper_eg26m_1", qg = "_input_eg26m_8", Fg = "_invalid_eg26m_38", Hg = "_toggle_eg26m_45", Kg = "_xs_eg26m_80", Ug = "_sm_eg26m_86", Wg = "_md_eg26m_92", Xg = "_lg_eg26m_98", Vg = "_xl_eg26m_104", zn = {
  wrapper: Bg,
  input: qg,
  invalid: Fg,
  toggle: Hg,
  xs: Kg,
  sm: Ug,
  md: Wg,
  lg: Xg,
  xl: Vg
}, Kv = He(
  function({
    size: t = "md",
    invalid: s = !1,
    className: o,
    disabled: i,
    showLabel: c = "Show password",
    hideLabel: h = "Hide password",
    ...r
  }, l) {
    const [a, p] = V(!1);
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ O("div", { className: zn.wrapper, "data-size": t, children: [
        /* @__PURE__ */ n(
          "input",
          {
            ref: l,
            type: a ? "text" : "password",
            disabled: i,
            className: [
              zn.input,
              zn[t],
              s ? zn.invalid : null,
              o
            ].filter(Boolean).join(" "),
            "aria-invalid": s || void 0,
            ...r
          }
        ),
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: zn.toggle,
            "aria-pressed": a,
            "aria-label": a ? h : c,
            disabled: i,
            onClick: () => p((d) => !d),
            children: /* @__PURE__ */ n(Ne, { name: a ? "eye-off" : "eye", size: 16 })
          }
        )
      ] })
    );
  }
), Gg = "_mask_1pv7j_1", Yg = "_invalid_1pv7j_31", Zg = "_xs_1pv7j_38", Jg = "_sm_1pv7j_44", Qg = "_md_1pv7j_50", e0 = "_lg_1pv7j_56", t0 = "_xl_1pv7j_62", ns = {
  mask: Gg,
  invalid: Yg,
  xs: Zg,
  sm: Jg,
  md: Qg,
  lg: e0,
  xl: t0
};
function Es(e, t) {
  let s = e.replace(/\D/g, ""), o = "";
  for (const i of t)
    if (i === "#") {
      if (s.length === 0) break;
      o += s[0] ?? "", s = s.slice(1);
    } else if (s.length > 0)
      o += i;
    else
      break;
  return o;
}
const Uv = He(function({
  size: t = "md",
  invalid: s = !1,
  mask: o,
  value: i,
  defaultValue: c = "",
  onChange: h,
  className: r,
  onKeyDown: l,
  ...a
}, p) {
  const [d, v] = V(c ?? ""), y = i !== void 0, w = y ? i ?? "" : d, k = (u) => {
    const x = Es(u, o);
    return y || v(x), h?.(x), x;
  };
  return /* @__PURE__ */ n(
    "input",
    {
      ref: p,
      type: "text",
      "data-size": t,
      value: w,
      onChange: (u) => {
        k(u.target.value);
      },
      onKeyDown: (u) => {
        if (u.key === "Backspace") {
          const x = u.currentTarget.selectionStart ?? w.length, $ = w[x - 1];
          if ($ !== void 0 && !/\d/.test($)) {
            u.preventDefault();
            const m = w.replace(/\D/g, "");
            k(Es(m.slice(0, -1), o));
          }
        }
        l?.(u);
      },
      className: [
        ns.mask,
        ns[t],
        s ? ns.invalid : null,
        r
      ].filter(Boolean).join(" "),
      "aria-invalid": s || void 0,
      ...a
    }
  );
}), n0 = "_wrapper_b3q45_1", s0 = "_input_b3q45_8", r0 = "_invalid_b3q45_38", o0 = "_button_b3q45_45", l0 = "_up_b3q45_77", a0 = "_down_b3q45_82", i0 = "_xs_b3q45_87", c0 = "_sm_b3q45_93", d0 = "_md_b3q45_99", u0 = "_lg_b3q45_105", _0 = "_xl_b3q45_111", Jt = {
  wrapper: n0,
  input: s0,
  invalid: r0,
  button: o0,
  up: l0,
  down: a0,
  xs: i0,
  sm: c0,
  md: d0,
  lg: u0,
  xl: _0
};
function ls(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function f0(e) {
  let t = "", s = !1;
  for (const o of e)
    o >= "0" && o <= "9" ? t += o : o === "." && !s ? (s = !0, t += o) : o === "-" && t.length === 0 && (t += o);
  return t;
}
function tr(e, t, s) {
  return Math.min(s ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function h0(e, t, s) {
  return t === void 0 ? e : t + Math.round((e - t) / s) * s;
}
function p0(e, t, s, o, i) {
  const h = ls(e) ?? s ?? 0;
  let r;
  return s === void 0 ? r = h + t * i : t > 0 ? r = s + Math.ceil((h - s + 1e-9) / i) * i : r = s + Math.floor((h - s - 1e-9) / i) * i, tr(r, s, o);
}
const Wv = He(
  function({
    size: t = "md",
    invalid: s = !1,
    className: o,
    disabled: i,
    value: c,
    defaultValue: h,
    onChange: r,
    min: l,
    max: a,
    step: p = 1,
    incrementLabel: d = "Increment",
    decrementLabel: v = "Decrement",
    onBlur: y,
    onKeyDown: w,
    ...k
  }, _) {
    const [f, u] = V(
      h != null ? String(h) : ""
    ), x = c !== void 0, $ = x ? c == null ? "" : String(c) : f, m = (C) => {
      x || u(C), r?.(ls(C));
    }, S = (C) => {
      x || u(String(C)), r?.(C);
    }, b = (C) => {
      i || S(p0($, C, l, a, p));
    }, N = (C) => {
      m(f0(C.target.value));
    }, E = (C) => {
      C.key === "ArrowUp" ? (C.preventDefault(), b(1)) : C.key === "ArrowDown" && (C.preventDefault(), b(-1)), w?.(C);
    }, I = (C) => {
      const D = ls($);
      D === null ? (x || u(""), r?.(null)) : S(tr(h0(D, l, p), l, a)), y?.(C);
    };
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ O("div", { className: Jt.wrapper, "data-size": t, children: [
        /* @__PURE__ */ n(
          "input",
          {
            ref: _,
            type: "text",
            inputMode: "decimal",
            autoComplete: "off",
            value: $,
            disabled: i,
            onChange: N,
            onKeyDown: E,
            onBlur: I,
            className: [
              Jt.input,
              Jt[t],
              s ? Jt.invalid : null,
              o
            ].filter(Boolean).join(" "),
            "aria-invalid": s || void 0,
            ...k
          }
        ),
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: [Jt.button, Jt.up].join(" "),
            "aria-label": d,
            disabled: i,
            onClick: () => b(1),
            children: /* @__PURE__ */ n(Ne, { name: "chevron-up", size: 14 })
          }
        ),
        /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: [Jt.button, Jt.down].join(" "),
            "aria-label": v,
            disabled: i,
            onClick: () => b(-1),
            children: /* @__PURE__ */ n(Ne, { name: "chevron-down", size: 14 })
          }
        )
      ] })
    );
  }
), Se = {
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
}, m0 = [
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
function xt(e, t, s) {
  return Math.min(s, Math.max(t, e));
}
function as(e) {
  const t = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(e.trim());
  if (!t) return null;
  let s = t[1];
  return s.length === 3 && (s = s.split("").map((o) => o + o).join("")), {
    r: Number.parseInt(s.slice(0, 2), 16),
    g: Number.parseInt(s.slice(2, 4), 16),
    b: Number.parseInt(s.slice(4, 6), 16),
    a: 1
  };
}
function g0({ r: e, g: t, b: s }) {
  const o = (i) => Math.round(i).toString(16).padStart(2, "0");
  return `#${o(e)}${o(t)}${o(s)}`;
}
function x0({ r: e, g: t, b: s }) {
  const o = e / 255, i = t / 255, c = s / 255, h = Math.max(o, i, c), r = Math.min(o, i, c), l = h - r;
  let a = 0;
  return l !== 0 && (h === o ? a = (i - c) / l % 6 : h === i ? a = (c - o) / l + 2 : a = (o - i) / l + 4, a *= 60, a < 0 && (a += 360)), {
    h: a,
    s: h === 0 ? 0 : l / h,
    v: h
  };
}
function pn({ h: e, s: t, v: s }) {
  const o = s * t, i = e / 60, c = o * (1 - Math.abs(i % 2 - 1));
  let h = 0, r = 0, l = 0;
  i < 1 ? (h = o, r = c) : i < 2 ? (h = c, r = o) : i < 3 ? (r = o, l = c) : i < 4 ? (r = c, l = o) : i < 5 ? (h = c, l = o) : (h = o, l = c);
  const a = s - o;
  return {
    r: Math.round((h + a) * 255),
    g: Math.round((r + a) * 255),
    b: Math.round((l + a) * 255),
    a: 1
  };
}
function b0(e) {
  const t = as(e);
  if (t) return t;
  const s = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*([\d.]+))?\s*\)$/i.exec(
    e.trim()
  );
  return s ? {
    r: xt(Number(s[1]), 0, 255),
    g: xt(Number(s[2]), 0, 255),
    b: xt(Number(s[3]), 0, 255),
    a: s[4] != null ? xt(Number(s[4]), 0, 1) : 1
  } : null;
}
function Is({ r: e, g: t, b: s, a: o }) {
  return o >= 1 ? `rgb(${e}, ${t}, ${s})` : `rgba(${e}, ${t}, ${s}, ${Math.round(o * 100) / 100})`;
}
const Xv = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: s = !0,
  showPalette: o = !0,
  palette: i = m0,
  showButton: c = !1,
  showArrow: h = !0,
  disabled: r = !1,
  invalid: l = !1,
  placeholder: a = "",
  size: p = "md",
  tabIndex: d = 0,
  className: v,
  onChange: y,
  onValueChange: w,
  onOpen: k,
  onClose: _
}) => {
  const f = le(null), u = le(null), x = le(null), $ = le(null), m = le(null), S = Fe(), b = le(null), N = $e(
    () => b0(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [E, I] = V(!1), [C, D] = V(null), g = C ?? N, z = $e(() => x0(g), [g]), P = H(
    (W) => {
      const M = Is(W);
      y?.(M), w?.(M);
    },
    [y, w]
  ), j = H(
    (W, M) => {
      D(W), M && !c && P(W);
    },
    [c, P]
  ), T = H(() => {
    I(!1), D(null), _?.(), u.current?.focus();
  }, [_]), q = H(() => {
    r || (D(N), I(!0), k?.());
  }, [r, N, k]), X = H(() => {
    E ? T() : q();
  }, [E, T, q]), Z = H(
    (W, M) => {
      const F = x.current;
      if (!F) return z;
      const ne = F.getBoundingClientRect(), _e = xt((W - ne.left) / ne.width, 0, 1), se = xt(1 - (M - ne.top) / ne.height, 0, 1);
      return { h: z.h, s: _e, v: se };
    },
    [z]
  ), Q = H(
    (W, M) => {
      if (!M) return 0;
      const F = M.getBoundingClientRect();
      return xt((W - F.left) / F.width, 0, 1);
    },
    []
  ), K = (W) => {
    if (r) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), b.current = "sat";
    const M = Z(W.clientX, W.clientY);
    j({ ...pn(M), a: g.a }, !0);
  }, te = (W) => {
    if (b.current !== "sat") return;
    W.preventDefault();
    const M = Z(W.clientX, W.clientY);
    j({ ...pn(M), a: g.a }, !0);
  }, oe = (W) => {
    if (r) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), b.current = "hue";
    const M = Q(W.clientX, $.current);
    j(
      { ...pn({ ...z, h: M * 360 }), a: g.a },
      !0
    );
  }, ee = (W) => {
    if (b.current !== "hue") return;
    W.preventDefault();
    const M = Q(W.clientX, $.current);
    j(
      { ...pn({ ...z, h: M * 360 }), a: g.a },
      !0
    );
  }, R = (W) => {
    if (r) return;
    W.preventDefault(), W.currentTarget.setPointerCapture(W.pointerId), b.current = "alpha";
    const M = Q(W.clientX, m.current);
    j({ ...g, a: M }, !0);
  }, ie = (W) => {
    if (b.current !== "alpha") return;
    W.preventDefault();
    const M = Q(W.clientX, m.current);
    j({ ...g, a: M }, !0);
  }, Y = () => {
    b.current = null;
  }, de = H(
    (W, M) => {
      const F = {
        h: z.h,
        s: xt(z.s + W, 0, 1),
        v: xt(z.v + M, 0, 1)
      };
      j({ ...pn(F), a: g.a }, !0);
    },
    [z, g.a, j]
  ), ae = H(
    (W) => {
      const M = (z.h + W + 360) % 360;
      j({ ...pn({ ...z, h: M }), a: g.a }, !0);
    },
    [z, g.a, j]
  ), be = H(
    (W) => {
      j({ ...g, a: xt(g.a + W, 0, 1) }, !0);
    },
    [g, j]
  ), we = (W) => {
    switch (W.key) {
      case "ArrowLeft":
        W.preventDefault(), de(-0.05, 0);
        break;
      case "ArrowRight":
        W.preventDefault(), de(0.05, 0);
        break;
      case "ArrowUp":
        W.preventDefault(), de(0, 0.05);
        break;
      case "ArrowDown":
        W.preventDefault(), de(0, -0.05);
        break;
      case "Escape":
        W.preventDefault(), T();
        break;
    }
  }, Be = (W, M) => {
    switch (W.key) {
      case "ArrowLeft":
        W.preventDefault(), M === "hue" ? ae(-6) : be(-0.05);
        break;
      case "ArrowRight":
        W.preventDefault(), M === "hue" ? ae(6) : be(0.05);
        break;
      case "Escape":
        W.preventDefault(), T();
        break;
    }
  }, ve = (W, M) => {
    if (W === "hex") {
      const se = as(M);
      se && j({ ...se, a: g.a }, !0);
      return;
    }
    const F = M.replace(/[^\d.]/g, ""), ne = Number.parseFloat(F);
    if (Number.isNaN(ne)) return;
    if (W === "a") {
      const se = F.includes(".") ? xt(ne, 0, 1) : xt(ne / 100, 0, 1);
      j({ ...g, a: se }, !0);
      return;
    }
    const _e = { r: 255, g: 255, b: 255 };
    j(
      { ...g, [W]: xt(ne, 0, _e[W]) },
      !0
    );
  }, Xe = () => {
    C && (P(C), D(null), I(!1), _?.(), u.current?.focus());
  };
  ke(() => {
    if (!E) return;
    const W = (M) => {
      f.current && !f.current.contains(M.target) && T();
    };
    return document.addEventListener("mousedown", W), () => document.removeEventListener("mousedown", W);
  }, [E, T]), ke(() => {
    if (!E) return;
    const W = (M) => {
      M.key === "Escape" && T();
    };
    return document.addEventListener("keydown", W), () => document.removeEventListener("keydown", W);
  }, [E, T]);
  const xe = p === "xs" ? Se["dx-colorpicker-trigger-xs"] : p === "sm" ? Se["dx-colorpicker-trigger-sm"] : p === "lg" ? Se["dx-colorpicker-trigger-lg"] : p === "xl" ? Se["dx-colorpicker-trigger-xl"] : Se["dx-colorpicker-trigger"], Ze = Is(g), Ve = g0(g), Re = { x: z.s * 100, y: (1 - z.v) * 100 }, tt = z.h / 360 * 100, Qe = g.a * 100, et = /* @__PURE__ */ O("div", { className: Se["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ n(
      "div",
      {
        ref: x,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(z.s * 100),
        "aria-valuetext": `Saturation ${Math.round(z.s * 100)}%, value ${Math.round(z.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": r || void 0,
        tabIndex: r ? -1 : d,
        className: Se["dx-saturation-picker"],
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${z.h}, 100%, 50%)`
        },
        onKeyDown: we,
        onPointerDown: K,
        onPointerMove: te,
        onPointerUp: Y,
        children: /* @__PURE__ */ n(
          "span",
          {
            className: Se["dx-saturation-indicator"],
            style: { left: `${Re.x}%`, top: `${Re.y}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    t && /* @__PURE__ */ n(
      "div",
      {
        ref: $,
        role: "slider",
        "aria-label": "Hue",
        "aria-valuemin": 0,
        "aria-valuemax": 360,
        "aria-valuenow": Math.round(z.h),
        "aria-disabled": r || void 0,
        tabIndex: r ? -1 : d,
        className: Se["dx-hue-picker"],
        onKeyDown: (W) => Be(W, "hue"),
        onPointerDown: oe,
        onPointerMove: ee,
        onPointerUp: Y,
        children: /* @__PURE__ */ n(
          "span",
          {
            className: Se["dx-hue-indicator"],
            style: { left: `${tt}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    t && /* @__PURE__ */ n(
      "div",
      {
        ref: m,
        role: "slider",
        "aria-label": "Alpha",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(Qe),
        "aria-disabled": r || void 0,
        tabIndex: r ? -1 : d,
        className: Se["dx-alpha-picker"],
        style: {
          background: `repeating-conic-gradient(var(--dx-border-color) 0% 25%, var(--dx-surface-color) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${z.h}, 100%, 50%))`
        },
        onKeyDown: (W) => Be(W, "alpha"),
        onPointerDown: R,
        onPointerMove: ie,
        onPointerUp: Y,
        children: /* @__PURE__ */ n(
          "span",
          {
            className: Se["dx-alpha-indicator"],
            style: { left: `${Qe}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    s && /* @__PURE__ */ O("div", { className: Se["dx-colorpicker-rgba"], children: [
      /* @__PURE__ */ O("label", { className: Se["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ n("span", { className: Se["dx-colorpicker-rgba-label"], children: "Hex" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            maxLength: 7,
            className: Se["dx-colorpicker-rgba-input"],
            "aria-label": "Hex",
            value: Ve,
            onChange: (W) => ve("hex", W.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ O("label", { className: Se["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ n("span", { className: Se["dx-colorpicker-rgba-label"], children: "R" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Se["dx-colorpicker-rgba-input"],
            "aria-label": "Red",
            value: g.r,
            onChange: (W) => ve("r", W.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ O("label", { className: Se["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ n("span", { className: Se["dx-colorpicker-rgba-label"], children: "G" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Se["dx-colorpicker-rgba-input"],
            "aria-label": "Green",
            value: g.g,
            onChange: (W) => ve("g", W.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ O("label", { className: Se["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ n("span", { className: Se["dx-colorpicker-rgba-label"], children: "B" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Se["dx-colorpicker-rgba-input"],
            "aria-label": "Blue",
            value: g.b,
            onChange: (W) => ve("b", W.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ O("label", { className: Se["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ n("span", { className: Se["dx-colorpicker-rgba-label"], children: "A" }),
        /* @__PURE__ */ n(
          "input",
          {
            type: "text",
            inputMode: "decimal",
            maxLength: 4,
            className: Se["dx-colorpicker-rgba-input"],
            "aria-label": "Alpha",
            value: Math.round(g.a * 100),
            onChange: (W) => ve("a", W.target.value)
          }
        )
      ] })
    ] }),
    o && /* @__PURE__ */ n("div", { className: Se["dx-colorpicker-palette"], children: i.map((W) => /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: Se["dx-colorpicker-swatch"],
        "aria-label": W,
        "aria-disabled": r || void 0,
        tabIndex: r ? -1 : d,
        style: { backgroundColor: W },
        onClick: () => {
          const M = as(W);
          c ? j({ ...M, a: g.a }, !1) : (D(null), P({ ...M, a: g.a }), I(!1), _?.(), u.current?.focus());
        }
      },
      W
    )) }),
    c && /* @__PURE__ */ n("div", { className: Se["dx-colorpicker-footer"], children: /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: Se["dx-colorpicker-ok"],
        onClick: Xe,
        children: "OK"
      }
    ) })
  ] });
  return /* @__PURE__ */ O(
    "div",
    {
      ref: f,
      className: [
        Se["dx-colorpicker"],
        E ? Se["dx-colorpicker-open"] : null,
        l ? Se["dx-colorpicker-invalid"] : null,
        v
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ O(
          "button",
          {
            ref: u,
            type: "button",
            className: [Se["dx-colorpicker-trigger"], xe].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": E,
            "aria-controls": S,
            "aria-label": "Pick a color",
            "aria-disabled": r || void 0,
            disabled: r,
            tabIndex: d,
            onClick: X,
            onKeyDown: (W) => {
              W.key === "Escape" && E && (W.preventDefault(), T());
            },
            children: [
              /* @__PURE__ */ n(
                "span",
                {
                  className: Se["dx-colorpicker-value"],
                  style: { backgroundColor: Ze },
                  "aria-hidden": "true"
                }
              ),
              a && /* @__PURE__ */ n("span", { className: Se["dx-colorpicker-text"], children: a }),
              h && /* @__PURE__ */ n("span", { className: Se["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ n(Ne, { name: "chevron-down", size: 14 }) })
            ]
          }
        ),
        E && /* @__PURE__ */ n(
          "div",
          {
            id: S,
            role: "dialog",
            "aria-label": "Choose color",
            className: Se["dx-colorpicker-popup"],
            children: et
          }
        )
      ]
    }
  );
}, Ee = {
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
}, y0 = 42;
function bt(e) {
  return String(e).padStart(2, "0");
}
function ht(e) {
  return `${e.year}-${bt(e.month)}-${bt(e.day)}`;
}
function v0(e, t) {
  const s = ht(e);
  return t ? `${s} ${bt(e.hour)}:${bt(e.minute)}:${bt(e.second)}` : s;
}
function is(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!t) return null;
  const s = Number(t[1]), o = Number(t[2]), i = Number(t[3]), c = t[4] != null ? Number(t[4]) : 0, h = t[5] != null ? Number(t[5]) : 0, r = t[6] != null ? Number(t[6]) : 0;
  if (o < 1 || o > 12 || i < 1 || i > 31) return null;
  const l = new Date(s, o - 1, i, c, h, r);
  return l.getFullYear() !== s || l.getMonth() !== o - 1 || l.getDate() !== i ? null : { year: s, month: o, day: i, hour: c, minute: h, second: r };
}
function Qt() {
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
function Ut(e, t) {
  const s = new Date(
    e.year,
    e.month - 1,
    e.day + t,
    e.hour,
    e.minute,
    e.second
  );
  return {
    year: s.getFullYear(),
    month: s.getMonth() + 1,
    day: s.getDate(),
    hour: e.hour,
    minute: e.minute,
    second: e.second
  };
}
function Un(e, t) {
  const s = new Date(e.year, e.month - 1 + t, 1), o = s.getFullYear(), i = s.getMonth() + 1, c = new Date(o, i, 0).getDate();
  return {
    year: o,
    month: i,
    day: Math.min(e.day, c),
    hour: e.hour,
    minute: e.minute,
    second: e.second
  };
}
function js(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const As = {
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
  tt: (e, t, s) => new Intl.DateTimeFormat(s, {
    hour: "numeric",
    hour12: !0
  }).formatToParts(t).find((i) => i.type === "dayPeriod")?.value ?? ""
}, k0 = [
  "yyyy",
  "yy",
  "MM",
  "dd",
  "HH",
  "mm",
  "ss",
  "tt"
], w0 = ["y", "M", "d", "H", "m", "s"];
function Wn(e, t, s) {
  const o = new Date(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second
  );
  let i = "", c = 0;
  for (; c < t.length; ) {
    let h = !1;
    for (const l of k0)
      if (t.startsWith(l, c)) {
        i += As[l](e, o, s), c += l.length, h = !0;
        break;
      }
    if (h) continue;
    const r = t[c];
    if (w0.includes(r)) {
      i += As[r](e, o, s), c += 1;
      continue;
    }
    i += r, c += 1;
  }
  return i;
}
const $0 = [
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
function N0(e, t) {
  const s = {};
  let o = 0, i = 0;
  for (; i < t.length; ) {
    let r = null;
    for (const l of $0)
      if (t.startsWith(l, i)) {
        r = l;
        break;
      }
    if (r) {
      const l = e.slice(o, o + r.length);
      if (!/^\d+$/.test(l)) return null;
      const a = Number(l);
      switch (r) {
        case "yyyy":
          s.year = a;
          break;
        case "yy":
        case "y":
          s.year = 2e3 + a;
          break;
        case "MM":
        case "M":
          s.month = a;
          break;
        case "dd":
        case "d":
          s.day = a;
          break;
        case "HH":
        case "H":
          s.hour = a;
          break;
        case "mm":
        case "m":
          s.minute = a;
          break;
        case "ss":
        case "s":
          s.second = a;
          break;
      }
      o += r.length, i += r.length;
      continue;
    }
    if (e[o] !== t[i]) return null;
    o += 1, i += 1;
  }
  const c = {
    year: s.year ?? (/* @__PURE__ */ new Date()).getFullYear(),
    month: s.month ?? 1,
    day: s.day ?? 1,
    hour: s.hour ?? 0,
    minute: s.minute ?? 0,
    second: s.second ?? 0
  };
  if (c.month < 1 || c.month > 12 || c.day < 1 || c.day > 31)
    return null;
  const h = new Date(
    c.year,
    c.month - 1,
    c.day,
    c.hour,
    c.minute,
    c.second
  );
  return h.getFullYear() !== c.year || h.getMonth() !== c.month - 1 || h.getDate() !== c.day ? null : c;
}
function Cn(e, t) {
  const s = is(e);
  return s || N0(e, t);
}
function O0(e, t, s) {
  return t && ht(e) < ht(t) ? t : s && ht(e) > ht(s) ? s : e;
}
const S0 = ["hour", "minute", "second"];
function Xn(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const Vv = He(
  function({
    size: t = "md",
    invalid: s = !1,
    value: o,
    defaultValue: i,
    format: c = "yyyy-MM-dd",
    min: h,
    max: r,
    showTime: l = !1,
    showButton: a = !0,
    allowClear: p = !1,
    inline: d = !1,
    disabledDates: v,
    locale: y = "en-US",
    onChange: w,
    onValueChange: k,
    onOpen: _,
    onClose: f,
    disabled: u,
    readOnly: x,
    placeholder: $,
    ariaLabel: m,
    triggerLabel: S,
    clearLabel: b,
    tabIndex: N,
    className: E,
    onBlur: I,
    onKeyDown: C,
    ...D
  }, g) {
    const z = le(null), P = le(null), j = le(null), T = le(null), q = Fe(), X = o !== void 0, [Z, Q] = V(
      () => i != null ? Wn(
        Cn(i, c) ?? Qt(),
        c,
        y
      ) : ""
    ), [K, te] = V(!1), [oe, ee] = V(null), [R, ie] = V(() => {
      const U = o !== void 0 ? o ?? "" : i ?? "";
      if (U) {
        const ue = Cn(U, c);
        if (ue) return ue;
      }
      return Qt();
    }), Y = $e(() => h ? is(h) : null, [h]), de = $e(() => r ? is(r) : null, [r]), ae = $e(
      () => new Set(v ?? []),
      [v]
    ), be = $e(() => {
      const U = X ? o ?? "" : Z;
      return U ? Cn(U, c) : null;
    }, [o, Z, X, c]), we = H(
      (U) => {
        const ue = ht(U);
        return !!(ae.has(ue) || Y && ue < ht(Y) || de && ue > ht(de));
      },
      [ae, Y, de]
    ), Be = H(
      (U) => {
        if (!we(U)) return U;
        for (let ue = 1; ue <= 366; ue += 1) {
          const Pe = Ut(U, ue);
          if (!we(Pe)) return Pe;
          const Ke = Ut(U, -ue);
          if (!we(Ke)) return Ke;
        }
        return U;
      },
      [we]
    ), ve = H(
      (U) => {
        X || Q(U ? Wn(U, c, y) : "");
        const ue = U ? v0(U, l) : "";
        w?.(ue), k?.(ue);
      },
      [X, c, y, l, w, k]
    ), Xe = H(
      (U) => {
        P.current = U, typeof g == "function" ? g(U) : g && (g.current = U);
      },
      [g]
    ), xe = H(() => {
      te(!1), ee(null), f?.(), d || j.current?.focus();
    }, [d, f]), Ze = H(() => {
      if (u) return;
      const U = be ?? Qt();
      ee(U), ie(Be(U)), te(!0), _?.();
    }, [u, be, Be, _]), Ve = H(() => {
      K ? xe() : Ze();
    }, [K, xe, Ze]), Re = H((U) => {
      T.current?.querySelector(
        `[data-date="${ht(U)}"]`
      )?.focus();
    }, []), tt = H(
      (U) => {
        if (we(U)) return;
        const ue = oe ?? be, Ke = {
          ...l ? {
            hour: ue?.hour ?? 0,
            minute: ue?.minute ?? 0,
            second: ue?.second ?? 0
          } : { hour: 0, minute: 0, second: 0 },
          year: U.year,
          month: U.month,
          day: U.day
        };
        ee(Ke), l || (ve(Ke), xe());
      },
      [we, oe, be, l, ve, xe]
    ), Qe = H(
      (U, ue) => {
        ee((Pe) => {
          const Ke = Pe ?? be ?? Qt(), Ot = Math.min(U === "hour" ? 23 : 59, Math.max(0, Ke[U] + ue));
          return { ...Ke, [U]: Ot };
        });
      },
      [be]
    ), et = H(
      (U, ue) => {
        const Pe = ue.replace(/\D/g, ""), Ke = Pe === "" ? 0 : Number(Pe), Pt = U === "hour" ? 23 : 59;
        ee((Ot) => ({ ...Ot ?? be ?? Qt(), [U]: Math.min(Pt, Ke) }));
      },
      [be]
    ), W = H(() => {
      oe && (ve(oe), xe());
    }, [oe, ve, xe]), M = H(() => {
      if (K) return;
      const U = Cn(Z, c);
      ve(U ? O0(U, Y, de) : null);
    }, [K, Z, c, Y, de, ve]), F = (U) => {
      const ue = U.target.value;
      X || Q(ue), K && ee(null);
    }, ne = (U) => {
      U.key === "Enter" ? (U.preventDefault(), K ? oe && (ve(oe), xe()) : M()) : U.key === "Escape" ? K && (U.preventDefault(), xe()) : U.key === "ArrowDown" && !K ? (U.preventDefault(), Ze()) : U.key === "Tab" && K && te(!1), C?.(U);
    }, _e = (U) => {
      M(), I?.(U);
    }, se = (U) => {
      let ue = null;
      switch (U.key) {
        case "ArrowLeft":
          ue = Ut(R, -1), U.preventDefault();
          break;
        case "ArrowRight":
          ue = Ut(R, 1), U.preventDefault();
          break;
        case "ArrowUp":
          ue = Ut(R, -7), U.preventDefault();
          break;
        case "ArrowDown":
          ue = Ut(R, 7), U.preventDefault();
          break;
        case "Home":
          ue = Ut(R, -js(R)), U.preventDefault();
          break;
        case "End":
          ue = Ut(R, 6 - js(R)), U.preventDefault();
          break;
        case "PageUp":
          ue = Un(R, U.shiftKey ? -12 : -1), U.preventDefault();
          break;
        case "PageDown":
          ue = Un(R, U.shiftKey ? 12 : 1), U.preventDefault();
          break;
        case "Enter":
        case " ":
          U.preventDefault(), tt(R);
          break;
        case "Escape":
          U.preventDefault(), xe();
          break;
        case "Tab":
          te(!1);
          break;
      }
      if (ue) {
        const Pe = Be(ue);
        ie(Pe), setTimeout(() => Re(Pe), 0);
      }
    };
    ke(() => {
      if (!K) return;
      const U = (ue) => {
        z.current && !z.current.contains(ue.target) && xe();
      };
      return document.addEventListener("mousedown", U), () => document.removeEventListener("mousedown", U);
    }, [K, xe]), ke(() => {
      if (!K) return;
      const U = (ue) => {
        ue.key === "Escape" && xe();
      };
      return document.addEventListener("keydown", U), () => document.removeEventListener("keydown", U);
    }, [K, xe]);
    const me = () => {
      X || Q(""), w?.(""), k?.(""), P.current?.focus();
    }, Oe = K && oe ? Wn(oe, c, y) : X ? o ? Wn(
      Cn(o, c) ?? Qt(),
      c,
      y
    ) : "" : Z, qe = X ? !!o : Z.length > 0, Je = d || K, dt = { year: R.year, month: R.month }, yt = new Date(dt.year, dt.month - 1, 1).getDay(), J = {
      year: dt.year,
      month: dt.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, De = [];
    for (let U = 0; U < y0; U += 1)
      De.push(Ut(J, U - yt));
    const nt = oe ? ht(oe) : be ? ht(be) : null, Gt = ht(Qt()), Nt = `${dt.year}-${bt(dt.month)}`, ze = $e(
      () => new Intl.DateTimeFormat(y, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      [y]
    ), Ge = new Intl.DateTimeFormat(y, {
      month: "long",
      year: "numeric"
    }).format(new Date(dt.year, dt.month - 1, 1)), vt = Array.from(
      { length: 7 },
      (U, ue) => new Intl.DateTimeFormat(y, { weekday: "short" }).format(
        new Date(2021, 0, 3 + ue)
      )
    ), Rt = t === "xs" ? Ee["dx-datepicker-input--xs"] : t === "sm" ? Ee["dx-datepicker-input--sm"] : t === "lg" ? Ee["dx-datepicker-input--lg"] : t === "xl" ? Ee["dx-datepicker-input--xl"] : Ee["dx-datepicker-input--md"], tn = /* @__PURE__ */ O(
      "div",
      {
        className: Ee["dx-datepicker-calendar"],
        "aria-label": m ?? "Date picker",
        children: [
          /* @__PURE__ */ O("div", { className: Ee["dx-datepicker-header"], children: [
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: Ee["dx-datepicker-nav"],
                "aria-label": "Previous month",
                onClick: () => {
                  const U = Be(Un(R, -1));
                  ie(U), setTimeout(() => Re(U), 0);
                },
                children: /* @__PURE__ */ n(Ne, { name: "chevron-left", size: 16 })
              }
            ),
            /* @__PURE__ */ n("span", { className: Ee["dx-datepicker-title"], children: Ge }),
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: Ee["dx-datepicker-nav"],
                "aria-label": "Next month",
                onClick: () => {
                  const U = Be(Un(R, 1));
                  ie(U), setTimeout(() => Re(U), 0);
                },
                children: /* @__PURE__ */ n(Ne, { name: "chevron-right", size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ O(
            "div",
            {
              ref: T,
              role: "grid",
              className: Ee["dx-datepicker-grid"],
              onKeyDown: se,
              children: [
                /* @__PURE__ */ n("div", { role: "row", className: Ee["dx-datepicker-week-row"], children: vt.map((U) => /* @__PURE__ */ n(
                  "div",
                  {
                    role: "columnheader",
                    className: Ee["dx-datepicker-weekday"],
                    children: U
                  },
                  U
                )) }),
                Array.from({ length: 6 }, (U, ue) => /* @__PURE__ */ n(
                  "div",
                  {
                    role: "row",
                    className: Ee["dx-datepicker-row"],
                    children: De.slice(ue * 7, ue * 7 + 7).map((Pe) => {
                      const Ke = ht(Pe), Pt = we(Pe), Ot = Ke.startsWith(Nt);
                      return /* @__PURE__ */ n(
                        "button",
                        {
                          type: "button",
                          role: "gridcell",
                          "data-date": Ke,
                          tabIndex: Ke === ht(R) ? 0 : -1,
                          "aria-selected": Ke === nt || void 0,
                          "aria-disabled": Pt || void 0,
                          "aria-label": ze.format(
                            new Date(Pe.year, Pe.month - 1, Pe.day)
                          ),
                          className: [
                            Ee["dx-datepicker-day"],
                            Ot ? null : Ee["dx-datepicker-day--outside"],
                            Ke === Gt ? Ee["dx-datepicker-day--today"] : null,
                            Ke === nt ? Ee["dx-datepicker-day--selected"] : null,
                            Pt ? Ee["dx-datepicker-day--disabled"] : null
                          ].filter(Boolean).join(" "),
                          onClick: () => tt(Pe),
                          onFocus: () => ie(Pe),
                          children: Pe.day
                        },
                        Ke
                      );
                    })
                  },
                  ue
                ))
              ]
            }
          ),
          l && /* @__PURE__ */ O("div", { className: Ee["dx-datepicker-time"], children: [
            S0.map((U) => /* @__PURE__ */ O("label", { className: Ee["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ n("span", { className: Ee["dx-datepicker-time-label"], children: Xn(U) }),
              /* @__PURE__ */ O("div", { className: Ee["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ n(
                  "input",
                  {
                    className: Ee["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": Xn(U),
                    value: bt(
                      (oe ?? be ?? Qt())[U]
                    ),
                    onChange: (ue) => et(U, ue.target.value),
                    onKeyDown: (ue) => {
                      ue.key === "ArrowUp" ? (ue.preventDefault(), Qe(U, 1)) : ue.key === "ArrowDown" ? (ue.preventDefault(), Qe(U, -1)) : ue.key === "Enter" && (ue.preventDefault(), W());
                    }
                  }
                ),
                /* @__PURE__ */ O("span", { className: Ee["dx-datepicker-time-buttons"], children: [
                  /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Increase ${Xn(U).toLowerCase()}`,
                      onClick: () => Qe(U, 1),
                      children: /* @__PURE__ */ n(Ne, { name: "chevron-up", size: 11 })
                    }
                  ),
                  /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Decrease ${Xn(U).toLowerCase()}`,
                      onClick: () => Qe(U, -1),
                      children: /* @__PURE__ */ n(Ne, { name: "chevron-down", size: 11 })
                    }
                  )
                ] })
              ] })
            ] }, U)),
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: Ee["dx-datepicker-ok"],
                onClick: W,
                children: "OK"
              }
            )
          ] })
        ]
      }
    );
    return /* @__PURE__ */ O(
      "div",
      {
        ref: z,
        className: [
          Ee["dx-datepicker"],
          d ? Ee["dx-datepicker-inline"] : null,
          E
        ].filter(Boolean).join(" "),
        children: [
          !d && /* @__PURE__ */ O(Me, { children: [
            /* @__PURE__ */ n(
              "input",
              {
                ref: Xe,
                type: "text",
                autoComplete: "off",
                value: Oe,
                disabled: u,
                readOnly: x,
                placeholder: $,
                tabIndex: N,
                role: a ? void 0 : "combobox",
                "aria-label": m ?? "Date",
                "aria-haspopup": a ? void 0 : "dialog",
                "aria-expanded": a ? void 0 : Je,
                "aria-controls": a ? void 0 : q,
                "aria-invalid": s || void 0,
                className: [
                  Ee["dx-datepicker-input"],
                  Rt,
                  s ? Ee["dx-datepicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: F,
                onKeyDown: ne,
                onBlur: _e,
                onClick: () => {
                  a || Ve();
                },
                ...D
              }
            ),
            p && !u && qe && /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: [
                  Ee["dx-datepicker-clear"],
                  a ? Ee["dx-datepicker-clear--inset"] : null
                ].filter(Boolean).join(" "),
                "aria-label": b ?? "Clear",
                onClick: me,
                children: /* @__PURE__ */ n(Ne, { name: "close", size: 14 })
              }
            ),
            a && /* @__PURE__ */ n(
              "button",
              {
                ref: j,
                type: "button",
                className: [Ee["dx-datepicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": S ?? "Open calendar",
                "aria-haspopup": "dialog",
                "aria-expanded": K,
                "aria-controls": q,
                disabled: u,
                onClick: Ve,
                children: /* @__PURE__ */ n(Ne, { name: "calendar", size: 16 })
              }
            )
          ] }),
          Je && /* @__PURE__ */ n(
            "div",
            {
              id: q,
              role: d ? void 0 : "dialog",
              className: d ? void 0 : Ee["dx-datepicker-popup"],
              children: tn
            }
          )
        ]
      }
    );
  }
), en = {
  "dx-rating": "_dx-rating_yg52p_1",
  "dx-rating-item": "_dx-rating-item_yg52p_8",
  "dx-rating-item-filled": "_dx-rating-item-filled_yg52p_28",
  "dx-rating-icon-filled": "_dx-rating-icon-filled_yg52p_43",
  "dx-rating-icon-empty": "_dx-rating-icon-empty_yg52p_51",
  "dx-rating-clear": "_dx-rating-clear_yg52p_55",
  "dx-rating-readonly": "_dx-rating-readonly_yg52p_87",
  "dx-rating-disabled": "_dx-rating-disabled_yg52p_96"
}, Gv = ({
  value: e = 0,
  stars: t = 5,
  readOnly: s = !1,
  disabled: o = !1,
  ariaLabel: i = "Rating",
  clearLabel: c = "Clear",
  rateLabel: h = "Rate",
  tabIndex: r = 0,
  className: l,
  onChange: a,
  onValueChange: p
}) => {
  const [d, v] = V(e), y = H(
    (u) => Math.min(t, Math.max(1, u)),
    [t]
  ), w = H(
    (u) => {
      a?.(u), p?.(u);
    },
    [a, p]
  ), k = H(
    (u) => {
      s || o || (w(u), v(u));
    },
    [s, o, w]
  ), _ = (u) => {
    if (s || o) return;
    const x = d > 0 ? d : 1;
    switch (u.key) {
      case "ArrowRight":
      case "ArrowUp":
        u.preventDefault(), k(y(x + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        u.preventDefault(), k(y(x - 1));
        break;
      case "Home":
        u.preventDefault(), k(1);
        break;
      case "End":
        u.preventDefault(), k(t);
        break;
    }
  }, f = Array.from({ length: t }, (u, x) => x + 1);
  return /* @__PURE__ */ O(
    "div",
    {
      role: "radiogroup",
      "aria-label": i,
      "aria-readonly": s || void 0,
      className: [
        en["dx-rating"],
        s ? en["dx-rating-readonly"] : null,
        o ? en["dx-rating-disabled"] : null,
        l
      ].filter(Boolean).join(" "),
      onKeyDown: _,
      children: [
        !s && !o && /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: en["dx-rating-clear"],
            "aria-label": c,
            tabIndex: e === 0 ? r : -1,
            disabled: o,
            onClick: () => k(0),
            children: /* @__PURE__ */ n(Ne, { name: "ban", size: 16 })
          }
        ),
        f.map((u) => {
          const x = u <= e, $ = u === (e > 0 ? e : d);
          return /* @__PURE__ */ O(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": x,
              "aria-posinset": u,
              "aria-setsize": t,
              "aria-label": `${h} ${u}`,
              tabIndex: $ ? r : -1,
              "aria-disabled": o || s || void 0,
              disabled: o || s,
              className: [
                en["dx-rating-item"],
                x ? en["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => k(u),
              onFocus: () => v(u),
              children: [
                /* @__PURE__ */ n(
                  "span",
                  {
                    className: en["dx-rating-icon-filled"],
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ n(Ne, { name: "star", size: 20 })
                  }
                ),
                /* @__PURE__ */ n("span", { className: en["dx-rating-icon-empty"], "aria-hidden": "true", children: /* @__PURE__ */ n(Ne, { name: "star-outline", size: 20 }) })
              ]
            },
            u
          );
        })
      ]
    }
  );
}, ln = {
  "dx-slider": "_dx-slider_x6ptv_1",
  "dx-slider-track": "_dx-slider-track_x6ptv_9",
  "dx-slider-range": "_dx-slider-range_x6ptv_17",
  "dx-slider-handle": "_dx-slider-handle_x6ptv_26",
  "dx-slider-vertical": "_dx-slider-vertical_x6ptv_58",
  "dx-slider-disabled": "_dx-slider-disabled_x6ptv_84"
};
function It(e, t, s) {
  return Math.min(s, Math.max(t, e));
}
const Yv = ({
  value: e = 0,
  valueMin: t = 0,
  valueMax: s = 100,
  min: o = 0,
  max: i = 100,
  step: c = 1,
  range: h = !1,
  orientation: r = "horizontal",
  disabled: l = !1,
  label: a = "Value",
  minLabel: p = "Min",
  maxLabel: d = "Max",
  tabIndex: v = 0,
  className: y,
  onChange: w,
  onInput: k,
  onValueChange: _,
  onInputChange: f
}) => {
  const u = le(null), x = le(
    null
  ), [$, m] = V(null), S = $ ?? e, b = $e(
    () => It(S, o, i),
    [S, o, i]
  ), N = $e(
    () => It(h ? t : b, o, i),
    [h, t, b, o, i]
  ), E = $e(
    () => It(h ? Math.max(s, N) : b, o, i),
    [h, s, N, b, o, i]
  ), I = H(
    (R) => {
      const ie = i - o;
      return ie <= 0 ? 0 : (It(R, o, i) - o) / ie * 100;
    },
    [o, i]
  ), C = H(
    (R, ie) => {
      const Y = u.current;
      if (!Y) return o;
      const de = Y.getBoundingClientRect();
      let ae;
      r === "vertical" ? ae = 1 - (ie - de.top) / de.height : ae = (R - de.left) / de.width;
      const be = o + It(ae, 0, 1) * (i - o);
      return c > 0 ? It(Math.round(be / c) * c, o, i) : It(be, o, i);
    },
    [o, i, c, r]
  ), D = H(
    (R) => {
      typeof R == "number" && m(R), w?.(R), _?.(R);
    },
    [w, _]
  ), g = H(
    (R) => {
      typeof R == "number" && m(R), k?.(R), f?.(R);
    },
    [k, f]
  ), z = H(
    (R, ie, Y) => {
      const de = C(ie, Y);
      let ae;
      h ? R === "min" ? ae = { min: Math.min(de, E), max: E } : ae = { min: N, max: Math.max(de, N) } : ae = de, g(ae), x.current === null && D(ae);
    },
    [h, C, N, E, g, D]
  ), P = H(
    (R, ie) => {
      const Y = (c > 0 ? c : 1) * ie;
      let de;
      h ? R === "min" ? de = {
        min: It(N + Y, o, E),
        max: E
      } : de = {
        min: N,
        max: It(E + Y, N, i)
      } : de = It(b + Y, o, i), D(de);
    },
    [h, c, o, i, N, E, b, D]
  ), j = (R, ie) => {
    if (!l)
      switch (ie.key) {
        case "ArrowLeft":
        case "ArrowDown":
          ie.preventDefault(), P(R, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          ie.preventDefault(), P(R, 1);
          break;
        case "Home":
          ie.preventDefault(), D(h ? R === "min" ? { min: o, max: E } : { min: N, max: N } : o);
          break;
        case "End":
          ie.preventDefault(), D(h ? R === "min" ? { min: E, max: E } : { min: N, max: i } : i);
          break;
      }
  }, T = (R, ie) => {
    l || (ie.preventDefault(), ie.currentTarget.focus(), typeof ie.currentTarget.setPointerCapture == "function" && ie.currentTarget.setPointerCapture(ie.pointerId), x.current = { key: R, pointerId: ie.pointerId }, z(R, ie.clientX, ie.clientY));
  }, q = (R) => {
    !x.current || x.current.pointerId !== R.pointerId || (R.preventDefault(), z(x.current.key, R.clientX, R.clientY));
  }, X = (R) => {
    !x.current || x.current.pointerId !== R.pointerId || (x.current = null, R.preventDefault(), D(h ? { min: N, max: E } : b));
  }, [Z, Q] = V(null), K = I(N), te = I(E), oe = h ? K : 0, ee = te;
  return /* @__PURE__ */ n(
    "div",
    {
      className: [
        ln["dx-slider"],
        r === "vertical" ? ln["dx-slider-vertical"] : null,
        l ? ln["dx-slider-disabled"] : null,
        y
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ O("div", { ref: u, className: ln["dx-slider-track"], children: [
        /* @__PURE__ */ n(
          "div",
          {
            className: ln["dx-slider-range"],
            style: r === "vertical" ? { bottom: `${oe}%`, height: `${ee - oe}%` } : { left: `${oe}%`, width: `${ee - oe}%` }
          }
        ),
        /* @__PURE__ */ n(
          "div",
          {
            role: "slider",
            "aria-valuemin": o,
            "aria-valuemax": i,
            "aria-valuenow": Math.round(N),
            "aria-orientation": r,
            "aria-label": h ? p : a,
            "aria-disabled": l || void 0,
            tabIndex: l || h && Z === "max" ? -1 : v,
            className: ln["dx-slider-handle"],
            style: r === "vertical" ? { bottom: `calc(${K}% - 8px)` } : { left: `calc(${K}% - 8px)` },
            onKeyDown: (R) => j("min", R),
            onPointerDown: (R) => T("min", R),
            onPointerMove: q,
            onPointerUp: X,
            onFocus: () => Q("min")
          }
        ),
        h && /* @__PURE__ */ n(
          "div",
          {
            role: "slider",
            "aria-valuemin": o,
            "aria-valuemax": i,
            "aria-valuenow": Math.round(E),
            "aria-orientation": r,
            "aria-label": d,
            "aria-disabled": l || void 0,
            tabIndex: l || Z === "min" ? -1 : v,
            className: ln["dx-slider-handle"],
            style: r === "vertical" ? { bottom: `calc(${te}% - 8px)` } : { left: `calc(${te}% - 8px)` },
            onKeyDown: (R) => j("max", R),
            onPointerDown: (R) => T("max", R),
            onPointerMove: q,
            onPointerUp: X,
            onFocus: () => Q("max")
          }
        )
      ] })
    }
  );
}, Ue = {
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
}, D0 = "-10675199.02:48:05.4775808", M0 = "10675199.02:48:05.4775808", Xt = 86400, Vt = 3600, Mt = 60, ss = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, Ts = {
  days: Xt,
  hours: Vt,
  minutes: Mt,
  seconds: 1
}, z0 = {
  day: Xt,
  hour: Vt,
  minute: Mt,
  second: 1
};
function mn(e) {
  return String(e).padStart(2, "0");
}
function Rn(e) {
  const t = e.trim();
  if (!t) return null;
  let s = 1, o = t;
  o.startsWith("-") ? (s = -1, o = o.slice(1)) : o.startsWith("+") && (o = o.slice(1));
  const i = /^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(
    o
  );
  if (i) {
    if (!i.slice(1).some((d) => d != null)) return null;
    const r = i[1] != null ? Number(i[1]) : 0, l = i[2] != null ? Number(i[2]) : 0, a = i[3] != null ? Number(i[3]) : 0, p = i[4] != null ? Number(i[4]) : 0;
    return s * (r * Xt + l * Vt + a * Mt + p);
  }
  const c = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(
    o
  );
  if (c) {
    const h = c[1] != null ? Number(c[1]) : 0, r = Number(c[2]), l = Number(c[3]), a = c[4] != null ? Number(c[4]) : 0, p = c[5] != null ? +`0.${c[5]}` : 0;
    return r > 23 || l > 59 || a > 59 ? null : s * (h * Xt + r * Vt + l * Mt + a + p);
  }
  return null;
}
function C0(e) {
  return e.days * Xt + e.hours * Vt + e.minutes * Mt + e.seconds;
}
function Ls(e) {
  let t = Math.abs(e);
  const s = Math.floor(t / Xt);
  t %= Xt;
  const o = Math.floor(t / Vt);
  t %= Vt;
  const i = Math.floor(t / Mt), c = Math.round(t % Mt * 1e9) / 1e9;
  return { days: s, hours: o, minutes: i, seconds: c };
}
function cs(e, t) {
  const s = e < 0;
  let o = Math.abs(e);
  t === "minute" ? o = Math.round(o / Mt) * Mt : t === "hour" ? o = Math.round(o / Vt) * Vt : t === "day" && (o = Math.round(o / Xt) * Xt);
  let i = Math.round(o % Mt);
  const c = i === 60 ? 1 : 0;
  i = i === 60 ? 0 : i;
  const h = Math.floor(o / Mt) + c, r = h % 60, l = Math.floor(h / 60), a = l % 24, p = Math.floor(l / 24), d = s ? "-" : "", v = p > 0 ? `${p}.` : "";
  switch (t) {
    case "day":
      return `${d}${p} day${p === 1 ? "" : "s"}`;
    case "hour":
      return `${d}${v}${mn(a)}`;
    case "minute":
      return `${d}${v}${mn(a)}:${mn(r)}`;
    default:
      return `${d}${v}${mn(a)}:${mn(r)}:${mn(i)}`;
  }
}
function Rs(e, t = "second") {
  const s = Rn(e);
  return s === null ? "" : cs(s, t);
}
function rs(e, t, s) {
  return Math.min(s, Math.max(t, e));
}
const Zv = He(
  function({
    size: t = "md",
    invalid: s = !1,
    value: o,
    defaultValue: i,
    min: c = D0,
    max: h = M0,
    step: r = "1",
    precision: l = "second",
    showDays: a = !0,
    showHours: p = !0,
    showMinutes: d = !0,
    showSeconds: v = !0,
    allowClear: y = !1,
    inline: w = !1,
    onChange: k,
    onValueChange: _,
    onOpen: f,
    onClose: u,
    disabled: x,
    placeholder: $,
    ariaLabel: m,
    triggerLabel: S,
    clearLabel: b,
    tabIndex: N,
    className: E,
    onBlur: I,
    onKeyDown: C,
    ...D
  }, g) {
    const z = le(null), P = le(null), j = le(null), T = Fe(), q = o !== void 0, [X, Z] = V(
      () => i != null ? Rs(i, l) : ""
    ), [Q, K] = V(!1), [te, oe] = V(null), [ee, R] = V(null), ie = $e(
      () => Rn(c) ?? -Number.MAX_SAFE_INTEGER,
      [c]
    ), Y = $e(
      () => Rn(h) ?? Number.MAX_SAFE_INTEGER,
      [h]
    ), de = $e(() => {
      const J = Number.parseFloat(r);
      return Number.isNaN(J) || J <= 0 ? 1 : J;
    }, [r]), ae = $e(() => {
      const J = q ? o ?? "" : X;
      return J ? Rn(J) : null;
    }, [o, X, q]), be = H(
      (J) => {
        const De = J === null ? "" : cs(J, l);
        q || Z(De), k?.(De), _?.(De);
      },
      [q, l, k, _]
    ), we = H(
      (J) => {
        J && te !== null && be(te), K(!1), oe(null), R(null), u?.(), w || j.current?.focus();
      },
      [w, te, be, u]
    ), Be = H(() => {
      x || (oe(ae ?? 0), K(!0), f?.());
    }, [x, ae, f]), ve = H(() => {
      Q ? we(!1) : Be();
    }, [Q, we, Be]), Xe = H(
      (J, De) => {
        oe((nt) => {
          const Nt = (nt ?? ae ?? 0) + De * de * Ts[J];
          return rs(Nt, ie, Y);
        });
      },
      [ae, de, ie, Y]
    ), xe = H(
      (J) => {
        const De = ee?.[J];
        if (De == null) return;
        const nt = Number.parseFloat(De), Gt = Number.isNaN(nt) ? 0 : nt;
        oe((Nt) => {
          const ze = Nt ?? ae ?? 0, Ge = Ls(ze);
          Ge[J] = Gt;
          const Rt = (ze < 0 ? -1 : 1) * C0(Ge);
          return rs(Rt, ie, Y);
        }), R(null);
      },
      [ee, ae, ie, Y]
    ), Ze = (J, De) => {
      R((nt) => ({ ...nt ?? {}, [J]: De }));
    }, Ve = (J, De) => {
      switch (De.key) {
        case "ArrowUp":
          De.preventDefault(), xe(J), Xe(J, 1);
          break;
        case "ArrowDown":
          De.preventDefault(), xe(J), Xe(J, -1);
          break;
        case "Home":
          De.preventDefault(), xe(J), oe(ie);
          break;
        case "End":
          De.preventDefault(), xe(J), oe(Y);
          break;
        case "Enter":
          De.preventDefault(), xe(J), we(!0);
          break;
      }
    }, Re = H(() => {
      if (Q) return;
      const J = Rn(X);
      be(J !== null ? rs(J, ie, Y) : null);
    }, [Q, X, ie, Y, be]), tt = (J) => {
      q || Z(J.target.value);
    }, Qe = (J) => {
      J.key === "Enter" ? (J.preventDefault(), Q ? we(!0) : Re()) : J.key === "Escape" && Q ? (J.preventDefault(), we(!1)) : J.key === "ArrowDown" && !Q ? (J.preventDefault(), Be()) : J.key === "Tab" && Q && K(!1), C?.(J);
    }, et = (J) => {
      Re(), I?.(J);
    }, W = () => {
      q || Z(""), k?.(""), _?.(""), P.current?.focus();
    };
    ke(() => {
      if (!Q) return;
      const J = (De) => {
        z.current && !z.current.contains(De.target) && we(!1);
      };
      return document.addEventListener("mousedown", J), () => document.removeEventListener("mousedown", J);
    }, [Q, we]), ke(() => {
      if (!Q) return;
      const J = (De) => {
        De.key === "Escape" && we(!1);
      };
      return document.addEventListener("keydown", J), () => document.removeEventListener("keydown", J);
    }, [Q, we]), ke(() => {
      if (w && te !== null) {
        const J = ae;
        (J === null || Math.abs(te - J) > 1e-9) && be(te);
      }
    }, [w, te, ae, be]);
    const M = H(
      (J) => {
        P.current = J, typeof g == "function" ? g(J) : g && (g.current = J);
      },
      [g]
    ), F = q ? o ? Rs(o, l) : "" : X, ne = q ? !!o : X.length > 0, _e = w || Q, se = te ?? ae ?? 0, me = Ls(se), Oe = z0[l], Je = ["days", "hours", "minutes", "seconds"].filter(
      (J) => Ts[J] >= Oe && (J === "days" ? a : J === "hours" ? p : J === "minutes" ? d : v)
    ), dt = t === "xs" ? Ue["dx-timespanpicker-input--xs"] : t === "sm" ? Ue["dx-timespanpicker-input--sm"] : t === "lg" ? Ue["dx-timespanpicker-input--lg"] : t === "xl" ? Ue["dx-timespanpicker-input--xl"] : Ue["dx-timespanpicker-input--md"], yt = /* @__PURE__ */ O("div", { className: Ue["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ n("div", { className: Ue["dx-timespanpicker-preview"], "aria-live": "polite", children: cs(se, l) }),
      /* @__PURE__ */ n("div", { className: Ue["dx-timespanpicker-units"], children: Je.map((J) => /* @__PURE__ */ O("label", { className: Ue["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ n("span", { className: Ue["dx-timespanpicker-unit-label"], children: ss[J] }),
        /* @__PURE__ */ O("span", { className: Ue["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ n(
            "input",
            {
              className: Ue["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: ee?.[J] ?? String(me[J]),
              onChange: (De) => Ze(J, De.target.value),
              onKeyDown: (De) => Ve(J, De),
              onBlur: () => xe(J)
            }
          ),
          /* @__PURE__ */ O("span", { className: Ue["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${ss[J].toLowerCase()}`,
                onClick: () => {
                  xe(J), Xe(J, 1);
                },
                children: /* @__PURE__ */ n(Ne, { name: "chevron-up", size: 11 })
              }
            ),
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${ss[J].toLowerCase()}`,
                onClick: () => {
                  xe(J), Xe(J, -1);
                },
                children: /* @__PURE__ */ n(Ne, { name: "chevron-down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, J)) }),
      /* @__PURE__ */ n("div", { className: Ue["dx-timespanpicker-footer"], children: /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          className: Ue["dx-timespanpicker-ok"],
          onClick: () => we(!0),
          children: "OK"
        }
      ) })
    ] });
    return /* @__PURE__ */ O(
      "div",
      {
        ref: z,
        className: [
          Ue["dx-timespanpicker"],
          w ? Ue["dx-timespanpicker-inline"] : null,
          E
        ].filter(Boolean).join(" "),
        children: [
          !w && /* @__PURE__ */ O(Me, { children: [
            /* @__PURE__ */ n(
              "input",
              {
                ref: M,
                type: "text",
                autoComplete: "off",
                value: F,
                disabled: x,
                placeholder: $,
                tabIndex: N,
                role: "combobox",
                "aria-label": m ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": Q,
                "aria-controls": T,
                "aria-invalid": s || void 0,
                className: [
                  Ue["dx-timespanpicker-input"],
                  dt,
                  s ? Ue["dx-timespanpicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: tt,
                onKeyDown: Qe,
                onBlur: et,
                ...D
              }
            ),
            y && !x && ne && /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: Ue["dx-timespanpicker-clear"],
                "aria-label": b ?? "Clear",
                onClick: W,
                children: /* @__PURE__ */ n(Ne, { name: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ n(
              "button",
              {
                ref: j,
                type: "button",
                className: [Ue["dx-timespanpicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": S ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": Q,
                "aria-controls": T,
                disabled: x,
                onClick: ve,
                children: /* @__PURE__ */ n(Ne, { name: "clock", size: 16 })
              }
            )
          ] }),
          _e && /* @__PURE__ */ n(
            "div",
            {
              id: T,
              role: w ? void 0 : "dialog",
              "aria-label": m ?? "Time span picker",
              className: w ? void 0 : Ue["dx-timespanpicker-popup"],
              children: yt
            }
          )
        ]
      }
    );
  }
), E0 = "_wrapper_1rhh5_1", I0 = "_cells_1rhh5_8", j0 = "_cell_1rhh5_8", A0 = "_invalid_1rhh5_63", T0 = "_live_1rhh5_73", an = {
  wrapper: E0,
  cells: I0,
  cell: j0,
  "cell-sm": "_cell-sm_1rhh5_45",
  "cell-md": "_cell-md_1rhh5_51",
  "cell-lg": "_cell-lg_1rhh5_57",
  invalid: A0,
  live: T0
};
function Ps(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const Jv = He(
  function({
    length: t = 6,
    value: s,
    defaultValue: o,
    onChange: i,
    invalid: c = !1,
    size: h = "md",
    autoFocus: r = !1,
    disabled: l = !1,
    label: a = "Security code",
    liveAnnounce: p = !0,
    className: d,
    "aria-label": v
  }, y) {
    const w = Fe(), k = s !== void 0, [_, f] = V(Ps(o).join("")), u = k ? Ps(s).join("") : _, x = Array.from({ length: t }, (D, g) => u[g] ?? ""), $ = le([]), [m, S] = V(""), b = (D) => {
      k || f(D), i?.(D);
    }, N = (D) => {
      const g = $.current[D];
      g && !g.disabled && (g.focus(), g.select());
    }, E = (D, g) => {
      const z = g.replace(/\D/g, "").slice(-1), P = u.split("");
      if (z) {
        P[D] = z;
        const j = P.join("").slice(0, t);
        b(j), j.length < t ? N(D + 1) : p && S("Code complete");
      }
    }, I = (D, g) => {
      if (g.key === "Backspace") {
        if (g.preventDefault(), u[D]) {
          const z = u.split("");
          z[D] = "", b(z.join(""));
        } else if (D > 0) {
          const z = u.split("");
          z[D - 1] = "", b(z.join("")), N(D - 1);
        }
      } else g.key === "ArrowLeft" && D > 0 ? (g.preventDefault(), N(D - 1)) : g.key === "ArrowRight" && D < t - 1 ? (g.preventDefault(), N(D + 1)) : g.key === "Home" ? (g.preventDefault(), N(0)) : g.key === "End" && (g.preventDefault(), N(t - 1));
    }, C = (D, g) => {
      g.preventDefault();
      const z = g.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!z) return;
      const P = u.split("");
      let j = 0;
      for (let q = 0; q < z.length && D + q < t; q++)
        P[D + q] = z[q] ?? "", j++;
      const T = P.join("");
      b(T), T.length >= t ? p && S("Code complete") : N(D + j);
    };
    return /* @__PURE__ */ O(
      "div",
      {
        className: [an.wrapper, d].filter(Boolean).join(" "),
        role: "group",
        "aria-label": v ?? a,
        "data-invalid": c || void 0,
        children: [
          /* @__PURE__ */ n("div", { className: [an.cells, an[h]].join(" "), children: x.map((D, g) => /* @__PURE__ */ n(
            "input",
            {
              ref: (z) => {
                $.current[g] = z, g === 0 && y && (typeof y == "function" ? y(z) : y.current = z);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: D,
              disabled: l,
              "aria-label": `Digit ${g + 1} of ${t}`,
              "aria-invalid": c && D !== "" ? !0 : void 0,
              autoFocus: r && g === 0,
              className: [
                an.cell,
                an[`cell-${h}`],
                c ? an.invalid : null
              ].filter(Boolean).join(" "),
              onChange: (z) => E(g, z.target.value),
              onKeyDown: (z) => I(g, z),
              onPaste: (z) => C(g, z),
              onFocus: (z) => z.target.select(),
              onBlur: () => {
                p && S("");
              }
            },
            g
          )) }),
          p && /* @__PURE__ */ n(
            "span",
            {
              id: `${w}-live`,
              role: "status",
              "aria-live": "polite",
              className: an.live,
              children: m
            }
          )
        ]
      }
    );
  }
), L0 = "_wrapper_1p09k_1", R0 = "_header_1p09k_7", P0 = "_label_1p09k_15", B0 = "_clear_1p09k_22", q0 = "_canvas_1p09k_53", F0 = "_disabled_1p09k_69", gn = {
  wrapper: L0,
  header: R0,
  label: P0,
  clear: B0,
  canvas: q0,
  disabled: F0
}, Qv = He(
  function({
    value: t,
    defaultValue: s,
    onChange: o,
    penColor: i = "#1c1c1c",
    penWidth: c = 2.5,
    clearLabel: h = "Clear",
    ariaLabel: r = "Signature",
    width: l,
    height: a = 140,
    disabled: p = !1,
    className: d
  }, v) {
    const y = le(null), w = le(!1), k = le(!1), _ = le({ x: 0, y: 0 });
    ke(() => {
      const b = y.current;
      if (!b) return;
      const N = window.devicePixelRatio || 1, E = Math.round((l ?? b.clientWidth) * N), I = Math.round(a * N);
      (b.width !== E || b.height !== I) && (b.width = E, b.height = I);
      const C = b.getContext("2d");
      if (!C) return;
      C.setTransform(N, 0, 0, N, 0, 0), C.lineWidth = c, C.strokeStyle = i, C.lineCap = "round", C.lineJoin = "round";
      const D = t ?? s;
      if (D) {
        const g = new Image();
        g.onload = () => {
          C.drawImage(g, 0, 0, b.clientWidth, a);
        }, g.src = D;
      }
    }, [t, s, i, c, l, a]);
    const f = () => {
      const b = y.current;
      if (!b) return;
      const N = b.toDataURL("image/png");
      o?.(N);
    }, u = () => {
      const b = y.current;
      if (!b) return;
      const N = b.getContext("2d");
      N && N.clearRect(0, 0, b.width, b.height), o?.("");
    };
    us(v, () => ({
      clear: u,
      toDataURL: (b = "image/png", N) => y.current?.toDataURL(b, N) ?? ""
    }));
    const x = (b) => {
      const N = b.currentTarget.getBoundingClientRect();
      return { x: b.clientX - N.left, y: b.clientY - N.top };
    }, $ = (b) => {
      p || (b.preventDefault(), typeof b.currentTarget.setPointerCapture == "function" && b.currentTarget.setPointerCapture(b.pointerId), w.current = !0, k.current = !1, _.current = x(b));
    }, m = (b) => {
      if (!w.current) return;
      b.preventDefault();
      const N = b.currentTarget.getContext("2d");
      if (!N) return;
      const E = x(b);
      N.beginPath(), N.moveTo(_.current.x, _.current.y), N.lineTo(E.x, E.y), N.stroke(), _.current = E, k.current = !0;
    }, S = (b) => {
      w.current && (b.preventDefault(), w.current = !1, k.current && f());
    };
    return /* @__PURE__ */ O(
      "div",
      {
        className: [
          gn.wrapper,
          d,
          p ? gn.disabled : null
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ O("div", { className: gn.header, children: [
            /* @__PURE__ */ n("span", { className: gn.label, children: r }),
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: gn.clear,
                onClick: u,
                disabled: p,
                children: h
              }
            )
          ] }),
          /* @__PURE__ */ n(
            "canvas",
            {
              ref: y,
              role: "img",
              "aria-label": r,
              "aria-disabled": p || void 0,
              style: {
                width: l ? `${l}px` : void 0,
                height: `${a}px`
              },
              className: gn.canvas,
              onPointerDown: $,
              onPointerMove: m,
              onPointerUp: S,
              onPointerCancel: S
            }
          )
        ]
      }
    );
  }
), H0 = "_wrapper_cdx3b_1", K0 = "_trigger_cdx3b_7", U0 = "_list_cdx3b_35", W0 = "_row_cdx3b_44", X0 = "_name_cdx3b_59", V0 = "_size_cdx3b_68", G0 = "_progress_cdx3b_74", Y0 = "_fill_cdx3b_82", Z0 = "_status_cdx3b_99", J0 = "_remove_cdx3b_106", jt = {
  wrapper: H0,
  trigger: K0,
  list: U0,
  row: W0,
  name: X0,
  size: V0,
  progress: G0,
  fill: Y0,
  status: Z0,
  remove: J0
};
function Bs(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const ek = He(function({
  url: t,
  multiple: s = !1,
  parameterName: o = "files",
  auto: i = !0,
  headers: c,
  accept: h,
  maxFileCount: r = Number.POSITIVE_INFINITY,
  maxFileSize: l,
  chooseText: a = "Upload",
  children: p,
  onProgress: d,
  onComplete: v,
  onError: y
}, w) {
  const k = le(null), [_, f] = V([]), u = le(/* @__PURE__ */ new Map()), x = (N, E) => {
    f(
      (I) => I.map((C) => C.file.name === N ? { ...C, ...E } : C)
    );
  }, $ = (N) => {
    if (!t) return;
    const E = new XMLHttpRequest();
    u.current.set(N.file.name, E);
    const I = new FormData();
    if (I.append(o, N.file), E.upload.addEventListener("progress", (C) => {
      if (!C.lengthComputable) return;
      const D = Math.round(C.loaded / C.total * 100);
      x(N.file.name, { state: "uploading", progress: D }), d?.(N.file.name, D);
    }), E.addEventListener("load", () => {
      E.status >= 200 && E.status < 300 ? (x(N.file.name, { state: "complete", progress: 100 }), v?.(N.file.name)) : (x(N.file.name, {
        state: "error",
        message: `HTTP ${E.status}`
      }), y?.(N.file.name, `HTTP ${E.status}`));
    }), E.addEventListener("error", () => {
      x(N.file.name, { state: "error", message: "Network error" }), y?.(N.file.name, "Network error");
    }), c)
      for (const [C, D] of Object.entries(c))
        E.setRequestHeader(C, D);
    E.open("POST", t), E.send(I), x(N.file.name, { state: "uploading", progress: 0 });
  }, m = (N) => {
    if (!N) return;
    const E = [...N], I = [];
    let C = Math.max(0, r - _.length);
    for (const g of E) {
      if (l != null && g.size > l) {
        y?.(
          g.name,
          `File too large (maximum ${Bs(l)})`
        );
        continue;
      }
      if (C <= 0) {
        y?.(g.name, `Too many files (maximum ${r})`);
        continue;
      }
      C -= 1, I.push(g);
    }
    const D = I.map((g) => ({
      file: g,
      state: "pending",
      progress: 0
    }));
    f((g) => [...g, ...D]), k.current && (k.current.value = ""), i && D.forEach($);
  }, S = (N) => {
    u.current.get(N)?.abort(), u.current.delete(N), f((I) => I.filter((C) => C.file.name !== N));
  }, b = p ?? /* @__PURE__ */ O(
    "button",
    {
      type: "button",
      className: jt.trigger,
      onClick: () => k.current?.click(),
      children: [
        /* @__PURE__ */ n(Ne, { name: "upload", size: 14 }),
        a
      ]
    }
  );
  return us(w, () => ({
    open: () => k.current?.click(),
    upload: () => _.forEach((N) => N.state === "pending" ? $(N) : null)
  })), /* @__PURE__ */ O("div", { className: jt.wrapper, children: [
    b,
    /* @__PURE__ */ n(
      "input",
      {
        ref: k,
        type: "file",
        hidden: !0,
        multiple: s,
        accept: h,
        "data-testid": "upload-input",
        onChange: (N) => m(N.target.files)
      }
    ),
    !p && _.length > 0 && /* @__PURE__ */ n("ul", { className: jt.list, children: _.map(({ file: N, state: E, progress: I, message: C }) => /* @__PURE__ */ O(
      "li",
      {
        className: jt.row,
        "data-state": E,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ n("span", { className: jt.name, children: N.name }),
          /* @__PURE__ */ n("span", { className: jt.size, children: Bs(N.size) }),
          /* @__PURE__ */ n(
            "span",
            {
              className: jt.progress,
              role: "progressbar",
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": I,
              children: /* @__PURE__ */ n(
                "span",
                {
                  className: jt.fill,
                  style: { width: `${I}%` }
                }
              )
            }
          ),
          /* @__PURE__ */ n("span", { className: jt.status, role: "status", children: E === "uploading" ? "Uploading" : E === "complete" ? "Complete" : E === "error" ? C ?? "Failed" : "Pending" }),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: jt.remove,
              "aria-label": `Remove ${N.name}`,
              onClick: () => S(N.name),
              children: /* @__PURE__ */ n(Ne, { name: "close", size: 14 })
            }
          )
        ]
      },
      N.name
    )) })
  ] });
}), Q0 = "_zone_e481w_1", ex = "_dragging_e481w_23", tx = "_caption_e481w_28", nx = "_browse_e481w_40", sx = "_disabled_e481w_67", En = {
  zone: Q0,
  dragging: ex,
  caption: tx,
  browse: nx,
  disabled: sx
};
function rx(e, t) {
  return t ? t.split(",").some((s) => {
    if (s = s.trim(), !s) return !1;
    if (s.startsWith("."))
      return e.name.toLowerCase().endsWith(s.toLowerCase());
    if (s.endsWith("/*")) {
      const o = s.slice(0, -1);
      return e.type.startsWith(o);
    }
    return e.type === s;
  }) : !0;
}
const tk = He(
  function({
    accept: t,
    multiple: s = !1,
    onDrop: o,
    label: i = "Drop files here or browse",
    dragLabel: c = "Drop to attach",
    browseText: h = "Browse",
    disabled: r = !1,
    className: l
  }, a) {
    const p = le(null), [d, v] = V(!1), y = (u) => {
      if (!u || u.length === 0) return;
      const x = [...u].filter(($) => rx($, t ?? ""));
      x.length !== 0 && o?.(x);
    }, w = (u) => {
      r || (u.preventDefault(), v(!0));
    }, k = (u) => {
      r || (u.preventDefault(), u.dataTransfer.dropEffect = "copy", v(!0));
    }, _ = (u) => {
      r || u.currentTarget.contains(u.relatedTarget) || v(!1);
    }, f = (u) => {
      r || (u.preventDefault(), v(!1), y(u.dataTransfer.files));
    };
    return us(a, () => ({
      open: () => p.current?.click()
    })), /* @__PURE__ */ O(
      "div",
      {
        role: "region",
        "aria-label": i,
        className: [
          En.zone,
          d ? En.dragging : null,
          r ? En.disabled : null,
          l
        ].filter(Boolean).join(" "),
        onDragEnter: w,
        onDragOver: k,
        onDragLeave: _,
        onDrop: f,
        children: [
          /* @__PURE__ */ n("p", { className: En.caption, children: d ? c : i }),
          !r && /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: En.browse,
              onClick: () => p.current?.click(),
              children: h
            }
          ),
          /* @__PURE__ */ n(
            "input",
            {
              ref: p,
              type: "file",
              hidden: !0,
              multiple: s,
              accept: t,
              "data-testid": "dropzone-input",
              onChange: (u) => {
                y(u.target.files), u.target.value = "";
              }
            }
          )
        ]
      }
    );
  }
), ox = "_root_6h4fh_1", lx = "_menubar_6h4fh_5", ax = "_horizontal_6h4fh_15", ix = "_vertical_6h4fh_20", cx = "_itemWrapper_6h4fh_25", dx = "_item_6h4fh_25", ux = "_disabled_6h4fh_61", _x = "_icon_6h4fh_68", fx = "_text_6h4fh_75", hx = "_caret_6h4fh_79", px = "_hasChildren_6h4fh_85", mx = "_submenu_6h4fh_94", gx = "_submenuItem_6h4fh_118", ct = {
  root: ox,
  menubar: lx,
  horizontal: ax,
  vertical: ix,
  itemWrapper: cx,
  item: dx,
  disabled: ux,
  icon: _x,
  text: fx,
  caret: hx,
  hasChildren: px,
  submenu: mx,
  submenuItem: gx
};
function In(e) {
  return !!e.disabled;
}
function nk({
  items: e,
  orientation: t = "horizontal",
  onClick: s,
  ariaLabel: o = "Menu",
  className: i
}) {
  const c = Fe(), h = le(null), r = le(null), [l, a] = V(null), p = le(0), d = le(null), v = H(
    (_) => {
      const f = {
        text: _.text,
        value: _.value,
        path: _.path
      };
      s?.(f);
    },
    [s]
  ), y = H(
    (_, f) => {
      if (!In(_)) {
        if (_.children && _.children.length > 0) {
          const u = l === f, x = Date.now() - p.current < 600;
          if (u && x) {
            p.current = 0;
            return;
          }
          a(($) => $ === f ? null : f);
          return;
        }
        v(_), a(null);
      }
    },
    [v, l]
  ), w = (_) => {
    In(_) || _.children && _.children.length > 0 || (v(_), a(null));
  };
  ke(() => {
    if (l == null) return;
    const _ = (f) => {
      h.current && !h.current.contains(f.target) && a(null);
    };
    return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
  }, [l]), ke(() => {
    if (d.current != null && l === d.current) {
      const _ = `${c}-submenu-${l}`;
      document.getElementById(_)?.querySelector(
        '[role="menuitem"]:not([aria-disabled="true"])'
      )?.focus(), d.current = null;
    }
  }, [l, c]);
  const k = (_) => {
    const f = r.current;
    if (!f) return;
    const u = Array.from(
      f.querySelectorAll('[data-top="true"]')
    ).filter(
      (m) => !m.hasAttribute("disabled") && m.getAttribute("aria-disabled") !== "true"
    );
    if (l != null) {
      const m = `${c}-submenu-${l}`, S = document.getElementById(m);
      if (S) {
        const b = Array.from(
          S.querySelectorAll('[role="menuitem"]')
        ).filter((I) => I.getAttribute("aria-disabled") !== "true"), N = document.activeElement, E = N ? b.indexOf(N) : -1;
        if (_.key === "ArrowDown") {
          _.preventDefault(), E === -1 ? b[0]?.focus() : b[(E + 1) % b.length]?.focus();
          return;
        }
        if (_.key === "ArrowUp") {
          _.preventDefault(), E === -1 ? b[b.length - 1]?.focus() : b[(E - 1 + b.length) % b.length]?.focus();
          return;
        }
        if (_.key === "Escape") {
          _.preventDefault(), a(null), f.querySelector(
            `[data-top="true"][data-index="${l}"]`
          )?.focus();
          return;
        }
        if (_.key === "Enter" || _.key === " ")
          return;
      }
      if (_.key === "Escape") {
        _.preventDefault(), a(null);
        return;
      }
    }
    const x = document.activeElement, $ = x ? u.indexOf(x) : -1;
    if (_.key === "ArrowRight" || t === "vertical" && _.key === "ArrowDown") {
      if (_.preventDefault(), u.length === 0) return;
      const m = $ === -1 ? 0 : ($ + 1) % u.length;
      u[m]?.focus();
      return;
    }
    if (_.key === "ArrowLeft" || t === "vertical" && _.key === "ArrowUp") {
      if (_.preventDefault(), u.length === 0) return;
      const m = $ === -1 ? u.length - 1 : ($ - 1 + u.length) % u.length;
      u[m]?.focus();
      return;
    }
    if (_.key === "ArrowDown") {
      if ($ >= 0) {
        const m = x?.getAttribute("data-index"), S = m != null ? Number(m) : -1, b = S >= 0 ? e[S] : void 0;
        b?.children && b.children.length > 0 && !In(b) && (_.preventDefault(), d.current = S, a(S));
      }
      return;
    }
    if (_.key === "Home") {
      _.preventDefault(), u[0]?.focus();
      return;
    }
    if (_.key === "End") {
      _.preventDefault(), u[u.length - 1]?.focus();
      return;
    }
  };
  return /* @__PURE__ */ n(
    "nav",
    {
      ref: h,
      "aria-label": o,
      className: [ct.root, ct[t], i].filter(Boolean).join(" "),
      children: /* @__PURE__ */ n(
        "div",
        {
          ref: r,
          role: "menubar",
          "aria-label": o,
          className: ct.menubar,
          onKeyDown: k,
          children: e.map((_, f) => {
            const u = !!_.children && _.children.length > 0, x = l === f, $ = In(_), m = `${c}-submenu-${f}`;
            return /* @__PURE__ */ O(
              "div",
              {
                className: ct.itemWrapper,
                onMouseEnter: () => {
                  t === "horizontal" && u && !$ && (p.current = Date.now(), a(f));
                },
                onMouseLeave: () => {
                  t === "horizontal" && u && a((S) => S === f ? null : S);
                },
                "data-dx-menu-item": "",
                children: [
                  /* @__PURE__ */ O(
                    "button",
                    {
                      type: "button",
                      role: "menuitem",
                      "data-top": "true",
                      "data-index": f,
                      "data-dx-menu-item": "",
                      "aria-disabled": $ || void 0,
                      "aria-haspopup": u ? "menu" : void 0,
                      "aria-expanded": u ? x : void 0,
                      "aria-controls": u ? m : void 0,
                      tabIndex: $ ? -1 : 0,
                      disabled: $,
                      className: [
                        ct.item,
                        $ ? ct.disabled : null,
                        u ? ct.hasChildren : null
                      ].filter(Boolean).join(" "),
                      onClick: () => y(_, f),
                      children: [
                        _.icon ? /* @__PURE__ */ n("span", { className: ct.icon, "aria-hidden": "true", children: _.icon }) : null,
                        /* @__PURE__ */ n("span", { className: ct.text, children: _.text }),
                        u ? /* @__PURE__ */ n("span", { className: ct.caret, "aria-hidden": "true", children: /* @__PURE__ */ n(Ne, { name: "chevron-down", size: 10 }) }) : null
                      ]
                    }
                  ),
                  u && x ? /* @__PURE__ */ n(
                    "div",
                    {
                      id: m,
                      role: "menu",
                      className: ct.submenu,
                      "data-dx-menu-submenu": "",
                      "aria-label": _.text,
                      children: _.children?.map((S, b) => {
                        const N = In(S), E = !!S.children && S.children.length > 0;
                        return /* @__PURE__ */ O(
                          "button",
                          {
                            type: "button",
                            role: "menuitem",
                            "aria-disabled": N || void 0,
                            "aria-haspopup": E ? "menu" : void 0,
                            tabIndex: N ? -1 : 0,
                            disabled: N,
                            className: [
                              ct.submenuItem,
                              N ? ct.disabled : null
                            ].filter(Boolean).join(" "),
                            onClick: () => w(S),
                            children: [
                              S.icon ? /* @__PURE__ */ n("span", { className: ct.icon, "aria-hidden": "true", children: S.icon }) : null,
                              /* @__PURE__ */ n("span", { className: ct.text, children: S.text })
                            ]
                          },
                          `${S.text}-${b}`
                        );
                      })
                    }
                  ) : null
                ]
              },
              `${_.text}-${f}`
            );
          })
        }
      )
    }
  );
}
const xx = "_root_6ojuu_1", bx = "_list_6ojuu_9", yx = "_item_6ojuu_14", vx = "_trigger_6ojuu_18", kx = "_disabled_6ojuu_44", wx = "_expanded_6ojuu_51", $x = "_icon_6ojuu_55", Nx = "_text_6ojuu_66", Ox = "_caret_6ojuu_73", Sx = "_open_6ojuu_80", Dx = "_submenu_6ojuu_84", Mx = "_submenuItem_6ojuu_93", zx = "_nestedWrapper_6ojuu_122", Cx = "_nestedTrigger_6ojuu_127", Ex = "_nestedMenu_6ojuu_152", Ix = "_iconOnly_6ojuu_160", Ae = {
  root: xx,
  list: bx,
  item: yx,
  trigger: vx,
  disabled: kx,
  expanded: wx,
  icon: $x,
  text: Nx,
  caret: Ox,
  open: Sx,
  submenu: Dx,
  submenuItem: Mx,
  nestedWrapper: zx,
  nestedTrigger: Cx,
  nestedMenu: Ex,
  iconOnly: Ix
};
function jx({
  item: e,
  baseId: t,
  parentKey: s,
  onEmit: o
}) {
  const i = !!e.children && e.children.length > 0, [c, h] = V(!1), r = `${t}-nested-${s}`, l = !!e.disabled, a = () => {
    if (!l) {
      if (i) {
        h((d) => !d);
        return;
      }
      o({ text: e.text, value: e.value, path: e.path });
    }
  }, p = (d) => {
    d.key === "Enter" || d.key === " " ? (d.preventDefault(), a()) : d.key === "Escape" && c && (d.preventDefault(), h(!1));
  };
  return i ? /* @__PURE__ */ O("div", { className: Ae.nestedWrapper, children: [
    /* @__PURE__ */ O(
      "button",
      {
        type: "button",
        "aria-expanded": c,
        "aria-controls": r,
        "aria-disabled": l || void 0,
        disabled: l,
        tabIndex: l ? -1 : 0,
        className: [Ae.nestedTrigger, l ? Ae.disabled : null].filter(Boolean).join(" "),
        onClick: a,
        onKeyDown: p,
        children: [
          e.icon ? /* @__PURE__ */ n("span", { className: Ae.icon, "aria-hidden": "true", children: e.icon }) : null,
          /* @__PURE__ */ n("span", { className: Ae.text, children: e.text }),
          /* @__PURE__ */ n(
            "span",
            {
              className: [Ae.caret, c ? Ae.open : null].filter(Boolean).join(" "),
              "aria-hidden": "true",
              children: /* @__PURE__ */ n(Ne, { name: "chevron-down", size: 10 })
            }
          )
        ]
      }
    ),
    c ? /* @__PURE__ */ n("div", { id: r, role: "menu", className: Ae.nestedMenu, children: e.children?.map((d, v) => {
      const y = !!d.disabled;
      return /* @__PURE__ */ O(
        "div",
        {
          role: "menuitem",
          "aria-disabled": y || void 0,
          tabIndex: y ? -1 : 0,
          className: [
            Ae.submenuItem,
            y ? Ae.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            y || d.children && d.children.length > 0 || o({
              text: d.text,
              value: d.value,
              path: d.path
            });
          },
          onKeyDown: (w) => {
            if (w.key === "Enter" || w.key === " ") {
              if (w.preventDefault(), y) return;
              o({
                text: d.text,
                value: d.value,
                path: d.path
              });
            }
          },
          children: [
            d.icon ? /* @__PURE__ */ n("span", { className: Ae.icon, "aria-hidden": "true", children: d.icon }) : null,
            /* @__PURE__ */ n("span", { className: Ae.text, children: d.text })
          ]
        },
        `${d.text}-${v}`
      );
    }) }) : null
  ] }) : /* @__PURE__ */ O(
    "div",
    {
      role: "menuitem",
      "aria-disabled": l || void 0,
      tabIndex: l ? -1 : 0,
      className: [Ae.submenuItem, l ? Ae.disabled : null].filter(Boolean).join(" "),
      onClick: () => {
        l || o({ text: e.text, value: e.value, path: e.path });
      },
      onKeyDown: (d) => {
        if (d.key === "Enter" || d.key === " ") {
          if (d.preventDefault(), l) return;
          o({ text: e.text, value: e.value, path: e.path });
        }
      },
      children: [
        e.icon ? /* @__PURE__ */ n("span", { className: Ae.icon, "aria-hidden": "true", children: e.icon }) : null,
        /* @__PURE__ */ n("span", { className: Ae.text, children: e.text })
      ]
    }
  );
}
function sk({
  items: e,
  multiple: t,
  showArrow: s,
  displayStyle: o,
  onClick: i,
  ariaLabel: c = "Panel menu",
  className: h
}) {
  const r = Fe(), l = t ?? !1, a = s ?? !0, p = o ?? "iconAndText", [d, v] = V([]), y = H(
    (_) => {
      const f = {
        text: _.text,
        value: _.value,
        path: _.path
      };
      i?.(f);
    },
    [i]
  ), w = (_, f, u) => {
    if (!u.disabled) {
      if (f) {
        v((x) => x.includes(_) ? x.filter((m) => m !== _) : l ? [...x, _] : [_]);
        return;
      }
      y(u);
    }
  }, k = (_) => {
    const f = _.target;
    if (!(_.key === "Enter" || _.key === " ")) {
      if (_.key === "Escape") {
        const u = f.getAttribute("aria-controls");
        if (u) {
          const x = u.match(/-panel-(\d+)$/);
          if (x) {
            const $ = Number(x[1]);
            v((m) => m.filter((S) => S !== $));
          }
        } else {
          const x = f.closest('[role="menu"]');
          if (x) {
            const m = x.id.match(/-panel-(\d+)$/);
            if (m) {
              const S = Number(m[1]);
              v((N) => N.filter((E) => E !== S)), document.getElementById(`${r}-trigger-${S}`)?.focus();
            }
          }
        }
        _.preventDefault();
        return;
      }
      if (_.key === "ArrowDown" || _.key === "ArrowUp") {
        const u = Array.from(
          _.currentTarget.querySelectorAll(
            'button, [role="menuitem"]'
          )
        ).filter(
          (S) => !S.hasAttribute("disabled") && S.getAttribute("aria-disabled") !== "true"
        ), x = u.indexOf(f);
        if (x === -1) return;
        _.preventDefault();
        const $ = _.key === "ArrowDown" ? 1 : -1;
        u[(x + $ + u.length) % u.length]?.focus();
      }
    }
  };
  return /* @__PURE__ */ n(
    "nav",
    {
      "aria-label": c,
      className: [
        Ae.root,
        p === "icon" ? Ae.iconOnly : Ae.iconAndText,
        h
      ].filter(Boolean).join(" "),
      onKeyDown: k,
      children: /* @__PURE__ */ n("div", { className: Ae.list, role: "presentation", children: e.map((_, f) => {
        const u = !!_.children && _.children.length > 0, x = d.includes(f), $ = !!_.disabled, m = `${r}-panel-${f}`, S = `${r}-trigger-${f}`;
        return /* @__PURE__ */ O("div", { className: Ae.item, children: [
          /* @__PURE__ */ O(
            "button",
            {
              type: "button",
              id: S,
              "aria-expanded": u ? x : void 0,
              "aria-controls": u ? m : void 0,
              "aria-disabled": $ || void 0,
              disabled: $,
              tabIndex: $ ? -1 : 0,
              className: [
                Ae.trigger,
                $ ? Ae.disabled : null,
                x ? Ae.expanded : null
              ].filter(Boolean).join(" "),
              onClick: () => w(f, u, _),
              children: [
                _.icon ? /* @__PURE__ */ n("span", { className: Ae.icon, "aria-hidden": "true", children: _.icon }) : null,
                p === "iconAndText" ? /* @__PURE__ */ n("span", { className: Ae.text, children: _.text }) : /* @__PURE__ */ n("span", { className: Ae.text, "aria-label": _.text, children: _.icon ? null : _.text.slice(0, 1) }),
                u && a ? /* @__PURE__ */ n(
                  "span",
                  {
                    className: [Ae.caret, x ? Ae.open : null].filter(Boolean).join(" "),
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ n(Ne, { name: "chevron-down", size: 10 })
                  }
                ) : null
              ]
            }
          ),
          u && x ? /* @__PURE__ */ n(
            "div",
            {
              id: m,
              role: "menu",
              className: Ae.submenu,
              "aria-labelledby": S,
              children: _.children?.map((b, N) => /* @__PURE__ */ n(
                jx,
                {
                  item: b,
                  baseId: r,
                  parentKey: `${f}-${N}`,
                  onEmit: y
                },
                `${b.text}-${N}`
              ))
            }
          ) : null
        ] }, `${_.text}-${f}`);
      }) })
    }
  );
}
const Ax = "_root_1bbxp_1", Tx = "_trigger_1bbxp_7", Lx = "_defaultTrigger_1bbxp_40", Rx = "_avatar_1bbxp_46", Px = "_menu_1bbxp_58", Bx = "_item_1bbxp_74", qx = "_disabled_1bbxp_88", Fx = "_active_1bbxp_97", Hx = "_icon_1bbxp_107", Kx = "_text_1bbxp_114", At = {
  root: Ax,
  trigger: Tx,
  defaultTrigger: Lx,
  avatar: Rx,
  menu: Px,
  item: Bx,
  disabled: qx,
  active: Fx,
  icon: Hx,
  text: Kx
};
function rk({
  items: e,
  trigger: t,
  onClick: s,
  ariaLabel: o = "Profile menu",
  className: i
}) {
  const c = Fe(), h = `${c}-menu`, r = le(null), l = le(null), [a, p] = V(!1), [d, v] = V(-1), y = t, w = e.map((m, S) => m.disabled ? -1 : S).filter((m) => m >= 0), k = H(
    (m) => {
      if (m.disabled) return;
      const S = {
        text: m.text,
        path: m.path
      };
      s?.(S), p(!1), l.current?.focus();
    },
    [s]
  ), _ = H(() => {
    v(w[0] ?? -1), p(!0);
  }, [w]), f = H(() => {
    p(!1), v(-1), l.current?.focus();
  }, []);
  ke(() => {
    if (!a) return;
    const m = (S) => {
      r.current && !r.current.contains(S.target) && (p(!1), v(-1));
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [a]), ke(() => {
    if (!a) return;
    const m = (S) => {
      S.key === "Escape" && (S.preventDefault(), f());
    };
    return document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m);
  }, [a, f]);
  const u = (m) => {
    if (w.length === 0) return;
    const S = w.indexOf(d), b = S === -1 ? 0 : (S + m + w.length) % w.length, N = w[b];
    N != null && v(N);
  }, x = (m) => {
    if (!a) {
      (m.key === "ArrowDown" || m.key === "Enter" || m.key === " ") && (m.preventDefault(), _());
      return;
    }
    switch (m.key) {
      case "Escape":
        m.preventDefault(), f();
        break;
      case "ArrowDown":
        m.preventDefault(), u(1);
        break;
      case "ArrowUp":
        m.preventDefault(), u(-1);
        break;
      case "Home":
        m.preventDefault(), w[0] != null && v(w[0]);
        break;
      case "End":
        m.preventDefault(), w[w.length - 1] != null && v(w[w.length - 1]);
        break;
      case "Enter":
      case " ":
        if (m.preventDefault(), d >= 0) {
          const S = e[d];
          S && !S.disabled && k(S);
        }
        break;
      case "Tab":
        p(!1), v(-1);
        break;
    }
  }, $ = (m) => {
    switch (m.key) {
      case "ArrowDown":
        m.preventDefault(), u(1);
        break;
      case "ArrowUp":
        m.preventDefault(), u(-1);
        break;
      case "Home":
        m.preventDefault(), w[0] != null && v(w[0]);
        break;
      case "End":
        m.preventDefault(), w[w.length - 1] != null && v(w[w.length - 1]);
        break;
      case "Enter":
      case " ":
        if (m.preventDefault(), d >= 0) {
          const S = e[d];
          S && !S.disabled && k(S);
        }
        break;
      case "Escape":
        m.preventDefault(), f();
        break;
      case "Tab":
        p(!1), v(-1);
        break;
    }
  };
  return /* @__PURE__ */ n(
    "div",
    {
      ref: r,
      className: [At.root, i].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ O("nav", { "aria-label": o, children: [
        /* @__PURE__ */ n(
          "button",
          {
            ref: l,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": a,
            "aria-controls": h,
            "aria-label": o,
            className: At.trigger,
            onClick: () => a ? f() : _(),
            onKeyDown: x,
            children: y ?? /* @__PURE__ */ O("span", { className: At.defaultTrigger, children: [
              /* @__PURE__ */ n("span", { className: At.avatar, "aria-hidden": "true", children: "●" }),
              /* @__PURE__ */ n("span", { children: "Profile" })
            ] })
          }
        ),
        a ? /* @__PURE__ */ n(
          "div",
          {
            id: h,
            role: "menu",
            "aria-label": o,
            "aria-activedescendant": d >= 0 ? `${c}-item-${d}` : void 0,
            className: At.menu,
            onKeyDown: $,
            tabIndex: -1,
            children: e.map((m, S) => {
              const b = !!m.disabled, N = S === d;
              return /* @__PURE__ */ O(
                "div",
                {
                  id: `${c}-item-${S}`,
                  role: "menuitem",
                  "aria-disabled": b || void 0,
                  tabIndex: b ? -1 : 0,
                  className: [
                    At.item,
                    N ? At.active : null,
                    b ? At.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    b || k(m);
                  },
                  onMouseEnter: () => {
                    b || v(S);
                  },
                  children: [
                    m.icon ? /* @__PURE__ */ n("span", { className: At.icon, "aria-hidden": "true", children: m.icon }) : null,
                    /* @__PURE__ */ n("span", { className: At.text, children: m.text })
                  ]
                },
                `${m.text}-${S}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const Ux = "_root_1dgrt_1", Wx = "_bottomRight_1dgrt_11", Xx = "_bottomLeft_1dgrt_16", Vx = "_topRight_1dgrt_21", Gx = "_topLeft_1dgrt_26", Yx = "_menu_1dgrt_31", Zx = "_itemWrapper_1dgrt_48", Jx = "_tooltip_1dgrt_54", Qx = "_main_1dgrt_76", eb = "_mainIcon_1dgrt_104", tb = "_mainOpen_1dgrt_109", nb = "_item_1dgrt_48", sb = "_disabled_1dgrt_141", rb = "_itemIcon_1dgrt_148", ut = {
  root: Ux,
  bottomRight: Wx,
  bottomLeft: Xx,
  topRight: Vx,
  topLeft: Gx,
  menu: Yx,
  itemWrapper: Zx,
  tooltip: Jx,
  main: Qx,
  mainIcon: eb,
  mainOpen: tb,
  item: nb,
  disabled: sb,
  itemIcon: rb
};
function ok({
  items: e,
  position: t,
  icon: s = "+",
  onClick: o,
  ariaLabel: i = "Open menu",
  className: c
}) {
  const h = t ?? "bottom-right", l = `${Fe()}-menu`, a = le(null), p = le(null), [d, v] = V(!1), y = H(
    (f) => {
      if (f.disabled) return;
      const u = { text: f.text, value: f.value };
      o?.(u), v(!1), p.current?.focus();
    },
    [o]
  );
  ke(() => {
    if (!d) return;
    const f = (u) => {
      a.current && !a.current.contains(u.target) && v(!1);
    };
    return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, [d]), ke(() => {
    if (!d) return;
    const f = (u) => {
      u.key === "Escape" && (v(!1), p.current?.focus());
    };
    return document.addEventListener("keydown", f), () => document.removeEventListener("keydown", f);
  }, [d]);
  const w = h === "bottom-right" ? ut.bottomRight : h === "bottom-left" ? ut.bottomLeft : h === "top-right" ? ut.topRight : ut.topLeft, k = (f) => {
    !d && (f.key === "Enter" || f.key === " " || f.key === "ArrowDown" || f.key === "ArrowUp") ? (f.preventDefault(), v(!0)) : d && f.key === "Escape" && (f.preventDefault(), v(!1));
  }, _ = (f) => {
    f.key === "Escape" && (f.preventDefault(), v(!1), p.current?.focus());
  };
  return /* @__PURE__ */ O(
    "div",
    {
      ref: a,
      className: [ut.root, w, c].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        d ? /* @__PURE__ */ n(
          "div",
          {
            id: l,
            role: "menu",
            "aria-label": i,
            className: ut.menu,
            onKeyDown: _,
            children: e.map((f, u) => {
              const x = !!f.disabled;
              return /* @__PURE__ */ O("div", { className: ut.itemWrapper, children: [
                /* @__PURE__ */ n("span", { className: ut.tooltip, "aria-hidden": "true", children: f.text }),
                /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": f.text,
                    "aria-disabled": x || void 0,
                    title: f.text,
                    disabled: x,
                    tabIndex: x ? -1 : 0,
                    className: [ut.item, x ? ut.disabled : null].filter(Boolean).join(" "),
                    onClick: () => y(f),
                    children: /* @__PURE__ */ n("span", { className: ut.itemIcon, "aria-hidden": "true", children: f.icon ?? "•" })
                  }
                )
              ] }, `${f.text}-${u}`);
            })
          }
        ) : null,
        /* @__PURE__ */ n(
          "button",
          {
            ref: p,
            type: "button",
            className: ut.main,
            "aria-haspopup": "menu",
            "aria-expanded": d,
            "aria-controls": l,
            "aria-label": i,
            onClick: () => v((f) => !f),
            onKeyDown: k,
            children: /* @__PURE__ */ n(
              "span",
              {
                "aria-hidden": "true",
                className: [ut.mainIcon, d ? ut.mainOpen : null].filter(Boolean).join(" "),
                children: s
              }
            )
          }
        )
      ]
    }
  );
}
const ob = "_root_1nu0o_1", lb = "_list_1nu0o_5", ab = "_item_1nu0o_15", ib = "_link_1nu0o_22", cb = "_linkButton_1nu0o_23", db = "_current_1nu0o_24", ub = "_disabled_1nu0o_68", _b = "_icon_1nu0o_74", fb = "_text_1nu0o_81", hb = "_separator_1nu0o_85", We = {
  root: ob,
  list: lb,
  item: ab,
  link: ib,
  linkButton: cb,
  current: db,
  disabled: ub,
  icon: _b,
  text: fb,
  separator: hb
};
function lk({
  items: e,
  onClick: t,
  ariaLabel: s = "Breadcrumb",
  className: o
}) {
  const i = t, c = (h) => {
    h.disabled || i?.({ text: h.text, path: h.path });
  };
  return /* @__PURE__ */ n(
    "nav",
    {
      "aria-label": s,
      className: [We.root, o].filter(Boolean).join(" "),
      children: /* @__PURE__ */ n("ol", { className: We.list, children: e.map((h, r) => {
        const l = r === e.length - 1, a = !!h.disabled;
        return /* @__PURE__ */ O("li", { className: We.item, children: [
          l ? a ? /* @__PURE__ */ O(
            "span",
            {
              className: [We.current, We.disabled].filter(Boolean).join(" "),
              "aria-current": "page",
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                h.icon ? /* @__PURE__ */ n("span", { className: We.icon, "aria-hidden": "true", children: h.icon }) : null,
                h.text
              ]
            }
          ) : h.path ? /* @__PURE__ */ O(
            "a",
            {
              href: h.path,
              className: We.link,
              "aria-current": "page",
              onClick: (p) => {
                p.preventDefault(), c(h);
              },
              children: [
                h.icon ? /* @__PURE__ */ n("span", { className: We.icon, "aria-hidden": "true", children: h.icon }) : null,
                /* @__PURE__ */ n("span", { className: We.text, children: h.text })
              ]
            }
          ) : /* @__PURE__ */ O(
            "span",
            {
              className: We.current,
              "aria-current": "page",
              tabIndex: 0,
              children: [
                h.icon ? /* @__PURE__ */ n("span", { className: We.icon, "aria-hidden": "true", children: h.icon }) : null,
                h.text
              ]
            }
          ) : a ? /* @__PURE__ */ O(
            "span",
            {
              className: [We.link, We.disabled].filter(Boolean).join(" "),
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                h.icon ? /* @__PURE__ */ n("span", { className: We.icon, "aria-hidden": "true", children: h.icon }) : null,
                /* @__PURE__ */ n("span", { className: We.text, children: h.text })
              ]
            }
          ) : h.path ? /* @__PURE__ */ O(
            "a",
            {
              href: h.path,
              className: We.link,
              onClick: (p) => {
                p.preventDefault(), c(h);
              },
              children: [
                h.icon ? /* @__PURE__ */ n("span", { className: We.icon, "aria-hidden": "true", children: h.icon }) : null,
                /* @__PURE__ */ n("span", { className: We.text, children: h.text })
              ]
            }
          ) : /* @__PURE__ */ O(
            "button",
            {
              type: "button",
              className: We.linkButton,
              tabIndex: 0,
              onClick: () => c(h),
              children: [
                h.icon ? /* @__PURE__ */ n("span", { className: We.icon, "aria-hidden": "true", children: h.icon }) : null,
                /* @__PURE__ */ n("span", { className: We.text, children: h.text })
              ]
            }
          ),
          l ? null : /* @__PURE__ */ n("span", { className: We.separator, "aria-hidden": "true", children: "/" })
        ] }, `${h.text}-${r}`);
      }) })
    }
  );
}
const pb = "_link_6vrgp_1", mb = {
  link: pb
}, ak = He(function({ children: t, icon: s, visible: o = !0, className: i, ...c }, h) {
  if (o === !1) return null;
  const r = /* @__PURE__ */ O(Me, { children: [
    s != null && /* @__PURE__ */ n(Ne, { name: s, "aria-hidden": "true" }),
    t
  ] }), l = [mb.link, i].filter(Boolean).join(" ");
  if (c.href != null) {
    const { href: p, ...d } = c;
    return /* @__PURE__ */ n(
      "a",
      {
        ref: h,
        className: l,
        href: p,
        ...d,
        children: r
      }
    );
  }
  return /* @__PURE__ */ n(
    "button",
    {
      ref: h,
      type: "button",
      className: l,
      ...c,
      children: r
    }
  );
}), gb = "_root_1w5vx_1", xb = "_list_1w5vx_5", bb = "_item_1w5vx_15", yb = "_connector_1w5vx_21", vb = "_connectorCompleted_1w5vx_30", kb = "_step_1w5vx_34", wb = "_active_1w5vx_69", $b = "_completed_1w5vx_75", Nb = "_circle_1w5vx_79", Ob = "_check_1w5vx_109", Sb = "_icon_1w5vx_114", Db = "_number_1w5vx_119", Mb = "_text_1w5vx_124", _t = {
  root: gb,
  list: xb,
  item: bb,
  connector: yb,
  connectorCompleted: vb,
  step: kb,
  active: wb,
  completed: $b,
  circle: Nb,
  check: Ob,
  icon: Sb,
  number: Db,
  text: Mb
};
function ik({
  items: e,
  selectedIndex: t,
  SelectedIndex: s,
  defaultIndex: o = 0,
  linear: i,
  Linear: c,
  onChange: h,
  Change: r,
  onSelectedIndexChange: l,
  ariaLabel: a = "Steps",
  className: p
}) {
  const d = i ?? c ?? !1, v = t ?? s, y = v !== void 0, [w, k] = V(() => Math.min(Math.max(0, v ?? o), Math.max(0, e.length - 1))), f = Math.min(
    Math.max(0, y ? v : w),
    Math.max(0, e.length - 1)
  ), u = le(null), x = H(
    (S) => {
      const b = Math.min(
        Math.max(0, S),
        Math.max(0, e.length - 1)
      );
      y || k(b), (h ?? r ?? l)?.(b);
    },
    [y, h, r, l, e.length]
  ), $ = H(
    (S, b) => !!(b.disabled || d && S > f + 1),
    [d, f]
  ), m = (S) => {
    const b = Array.from(
      S.currentTarget.querySelectorAll("button[data-step]")
    ).filter((I) => I.getAttribute("aria-disabled") !== "true" && !I.disabled), N = document.activeElement, E = N ? b.indexOf(N) : -1;
    if (S.key === "ArrowRight" || S.key === "ArrowDown") {
      if (S.preventDefault(), b.length === 0) return;
      const I = E === -1 ? 0 : (E + 1) % b.length, C = b[I];
      C && C.focus();
    } else if (S.key === "ArrowLeft" || S.key === "ArrowUp") {
      if (S.preventDefault(), b.length === 0) return;
      const I = E === -1 ? b.length - 1 : (E - 1 + b.length) % b.length, C = b[I];
      C && C.focus();
    } else S.key === "Home" ? (S.preventDefault(), b[0]?.focus()) : S.key === "End" && (S.preventDefault(), b[b.length - 1]?.focus());
  };
  return /* @__PURE__ */ n(
    "nav",
    {
      "aria-label": a,
      className: [_t.root, p].filter(Boolean).join(" "),
      onKeyDown: m,
      children: /* @__PURE__ */ n("ol", { ref: u, role: "list", className: _t.list, children: e.map((S, b) => {
        const N = b === f, E = b < f, I = $(b, S);
        return /* @__PURE__ */ O(
          "li",
          {
            role: "listitem",
            className: _t.item,
            children: [
              b > 0 ? /* @__PURE__ */ n(
                "span",
                {
                  className: [
                    _t.connector,
                    E ? _t.connectorCompleted : null
                  ].filter(Boolean).join(" "),
                  "aria-hidden": "true"
                }
              ) : null,
              /* @__PURE__ */ O(
                "button",
                {
                  type: "button",
                  "data-step": b,
                  "aria-current": N ? "step" : void 0,
                  "aria-disabled": I ? "true" : void 0,
                  disabled: I,
                  tabIndex: I ? -1 : 0,
                  className: [
                    _t.step,
                    N ? _t.active : null,
                    E ? _t.completed : null,
                    I ? _t.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    I || x(b);
                  },
                  children: [
                    /* @__PURE__ */ n("span", { className: _t.circle, "aria-hidden": "true", children: E ? /* @__PURE__ */ n("span", { className: _t.check, "aria-hidden": "true", children: /* @__PURE__ */ n(Ne, { name: "check", size: "sm" }) }) : S.icon ? /* @__PURE__ */ n("span", { className: _t.icon, children: S.icon }) : /* @__PURE__ */ n("span", { className: _t.number, children: b + 1 }) }),
                    /* @__PURE__ */ n("span", { className: _t.text, children: S.text })
                  ]
                }
              )
            ]
          },
          `${S.text}-${b}`
        );
      }) })
    }
  );
}
const zb = "_root_1np74_1", Cb = "_horizontal_1np74_13", Eb = "_vertical_1np74_17", Ib = "_pane_1np74_21", jb = "_handle_1np74_31", Ab = "_handleHorizontal_1np74_51", Tb = "_handleVertical_1np74_57", Lb = "_handleGrip_1np74_63", Rb = "_handleCollapseHint_1np74_75", Pb = "_collapseBtn_1np74_79", Bb = "_collapseBtnCollapsed_1np74_109", wt = {
  root: zb,
  horizontal: Cb,
  vertical: Eb,
  pane: Ib,
  handle: jb,
  handleHorizontal: Ab,
  handleVertical: Tb,
  handleGrip: Lb,
  handleCollapseHint: Rb,
  collapseBtn: Pb,
  collapseBtnCollapsed: Bb
};
function jn(e, t) {
  if (!e) return t;
  const s = e.trim();
  if (s.endsWith("%")) {
    const i = parseFloat(s.slice(0, -1));
    return Number.isNaN(i) ? t : i;
  }
  if (s.endsWith("px")) {
    const i = parseFloat(s.slice(0, -2));
    return Number.isNaN(i) ? t : i;
  }
  const o = parseFloat(s);
  return Number.isNaN(o) ? t : o;
}
function Wt(e, t, s) {
  return Math.min(s, Math.max(t, e));
}
function ck({
  orientation: e,
  Orientation: t,
  panes: s,
  onResize: o,
  Resize: i,
  onCollapse: c,
  Collapse: h,
  ariaLabel: r = "Splitter",
  className: l
}) {
  const a = e ?? t ?? "horizontal", p = a === "horizontal", d = le(null), v = H(() => {
    const g = s.length;
    if (g === 0) return [];
    const z = s.map((j) => j.size ? jn(j.size, 100 / g) : 100 / g), P = z.reduce((j, T) => j + T, 0);
    return Math.abs(P - 100) > 0.01 && P > 0 ? z.map((j) => j / P * 100) : z;
  }, [s]), [y, w] = V(() => v()), [k, _] = V(
    () => s.map((g) => !!g.collapsed)
  ), f = le(y);
  ke(() => {
    _(s.map((g) => !!g.collapsed));
  }, [s]);
  const u = H(
    () => s.map((g) => jn(g.min, 0)),
    [s]
  ), x = H(
    () => s.map((g) => jn(g.max, 100)),
    [s]
  ), $ = H(
    (g, z) => {
      const P = { paneIndex: g, newSize: z, cancel: !1 };
      return (o ?? i)?.(P), !P.cancel;
    },
    [o, i]
  ), m = H(
    (g, z) => {
      const P = { paneIndex: g, collapse: z, cancel: !1 };
      return (c ?? h)?.(P), !P.cancel;
    },
    [c, h]
  ), S = H(
    (g) => {
      const z = !k[g];
      m(g, z) && (z ? (f.current = [...y], _((P) => {
        const j = [...P];
        return j[g] !== void 0 && (j[g] = !0), j;
      }), w((P) => {
        const j = [...P], T = j[g] ?? 0, q = g < j.length - 1 ? g + 1 : g - 1;
        if (q >= 0 && q < j.length) {
          const X = j[q] ?? 0;
          j[q] = X + T, j[g] = 0;
        } else
          j[g] = 0;
        return j;
      })) : (_((P) => {
        const j = [...P];
        return j[g] !== void 0 && (j[g] = !1), j;
      }), w(() => {
        const P = [...f.current];
        return P.length !== s.length ? s.map(() => 100 / s.length) : P;
      })));
    },
    [k, y, s.length, m]
  ), b = le(
    null
  ), N = H(
    (g, z, P) => {
      const j = d.current;
      if (!j) return null;
      const T = j.getBoundingClientRect();
      let q;
      if (p) {
        if (T.width === 0) return null;
        q = (z - T.left) / T.width * 100;
      } else {
        if (T.height === 0) return null;
        q = (P - T.top) / T.height * 100;
      }
      let X = 0;
      for (let Q = 0; Q < g; Q++) {
        const K = y[Q];
        K !== void 0 && (X += K);
      }
      return q - X;
    },
    [p, y]
  ), E = (g, z) => {
    z.preventDefault();
    const P = z.currentTarget;
    P.focus(), typeof P.setPointerCapture == "function" && P.setPointerCapture(z.pointerId), b.current = { handleIndex: g, pointerId: z.pointerId };
  }, I = (g) => {
    if (!b.current || b.current.pointerId !== g.pointerId)
      return;
    g.preventDefault();
    const z = b.current.handleIndex, P = N(z, g.clientX, g.clientY);
    if (P == null) return;
    const j = u(), T = x(), q = j[z] ?? 0, X = T[z] ?? 100, Z = z + 1, Q = j[Z] ?? 0, K = T[Z] ?? 100, te = y[z] ?? 0, oe = y[Z] ?? 0, ee = te + oe;
    if (ee <= 0) return;
    let R = Wt(P, q, X), ie = ee - R;
    if (ie < Q) {
      if (ie = Q, R = ee - ie, R < q || R > X) return;
    } else if (ie > K && (ie = K, R = ee - ie, R < q || R > X))
      return;
    R = Wt(R, q, X), ie = ee - R, $(z, R) && w((Y) => {
      const de = [...Y];
      return de[z] = R, de[Z] = ie, de;
    });
  }, C = (g) => {
    !b.current || b.current.pointerId !== g.pointerId || (b.current = null);
  }, D = (g, z) => {
    const P = u(), j = x(), T = g, q = g + 1, X = y[T] ?? 0, Z = y[q] ?? 0, Q = X + Z;
    let K = 0;
    const te = !!s[T]?.collapsible, oe = !!s[q]?.collapsible;
    if (p ? z.key === "ArrowLeft" ? K = -5 : z.key === "ArrowRight" && (K = 5) : z.key === "ArrowUp" ? K = -5 : z.key === "ArrowDown" && (K = 5), z.key === "Home") {
      z.preventDefault();
      let ee = P[T] ?? 0, R = Q - ee;
      if (R = Wt(
        R,
        P[q] ?? 0,
        j[q] ?? 100
      ), ee = Q - R, ee = Wt(ee, P[T] ?? 0, j[T] ?? 100), !$(T, ee)) return;
      w((ie) => {
        const Y = [...ie];
        return Y[T] = ee, Y[q] = R, Y;
      });
      return;
    }
    if (z.key === "End") {
      z.preventDefault();
      let ee = j[T] ?? 100;
      ee = Math.min(ee, Q - (P[q] ?? 0));
      let R = Q - ee;
      if (R = Wt(
        R,
        P[q] ?? 0,
        j[q] ?? 100
      ), ee = Q - R, ee = Wt(ee, P[T] ?? 0, j[T] ?? 100), !$(T, ee)) return;
      w((ie) => {
        const Y = [...ie];
        return Y[T] = ee, Y[q] = R, Y;
      });
      return;
    }
    if ((z.key === "Enter" || z.key === " ") && (te || oe)) {
      z.preventDefault(), S(te ? T : q);
      return;
    }
    if (K !== 0) {
      z.preventDefault();
      let ee = X + K, R = Q - ee;
      const ie = P[T] ?? 0, Y = j[T] ?? 100, de = P[q] ?? 0, ae = j[q] ?? 100;
      if (ee = Wt(ee, ie, Y), R = Q - ee, (R < de || R > ae) && (R = Wt(R, de, ae), ee = Q - R, ee = Wt(ee, ie, Y), R = Q - ee), !$(T, ee)) return;
      w((be) => {
        const we = [...be];
        return we[T] = ee, we[q] = R, we;
      });
    }
  };
  return /* @__PURE__ */ n(
    "div",
    {
      ref: d,
      className: [
        wt.root,
        p ? wt.horizontal : wt.vertical,
        l
      ].filter(Boolean).join(" "),
      "aria-label": r,
      children: s.map((g, z) => {
        const P = !!k[z], j = P ? 0 : y[z] ?? 100 / s.length, T = P ? { display: "none" } : p ? {
          flexBasis: `${j}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        } : {
          flexBasis: `${j}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        }, q = jn(g.min, 0), X = jn(g.max, 100), Z = z < s.length - 1, Q = !!s[z + 1]?.collapsible;
        return /* @__PURE__ */ O("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ O(
            "div",
            {
              role: "group",
              "aria-label": g.label ?? `Pane ${z + 1}`,
              className: wt.pane,
              style: T,
              "data-collapsed": P ? "true" : void 0,
              children: [
                P ? null : g.children,
                g.collapsible && !P ? /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    className: wt.collapseBtn,
                    "aria-label": `Collapse pane ${z + 1}`,
                    "aria-expanded": !P,
                    onClick: () => S(z),
                    children: p ? "◀" : "▲"
                  }
                ) : null,
                g.collapsible && P ? /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    className: wt.collapseBtn,
                    "aria-label": `Expand pane ${z + 1}`,
                    "aria-expanded": !P,
                    onClick: () => S(z),
                    children: p ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          P && g.collapsible ? (
            // when collapsed we already rendered expand button inside pane, but pane is display none, so render expand button outside?
            // Actually we hide pane with display none, need visible expand button
            // So render alternative expand button adjacent
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: wt.collapseBtnCollapsed,
                "aria-label": `Expand pane ${z + 1}`,
                "aria-expanded": "false",
                onClick: () => S(z),
                children: p ? "▶" : "▼"
              }
            )
          ) : null,
          Z ? /* @__PURE__ */ O(
            "div",
            {
              role: "separator",
              "aria-orientation": a,
              "aria-valuemin": q,
              "aria-valuemax": X,
              "aria-valuenow": Math.round(j),
              "aria-label": `Resize handle ${z + 1}`,
              tabIndex: P || k[z + 1] ? -1 : 0,
              className: [
                wt.handle,
                p ? wt.handleHorizontal : wt.handleVertical
              ].filter(Boolean).join(" "),
              onPointerDown: (K) => E(z, K),
              onPointerMove: I,
              onPointerUp: C,
              onKeyDown: (K) => D(z, K),
              children: [
                /* @__PURE__ */ n("span", { className: wt.handleGrip, "aria-hidden": "true" }),
                (g.collapsible || Q) && /* @__PURE__ */ n(
                  "span",
                  {
                    className: wt.handleCollapseHint,
                    "aria-hidden": "true"
                  }
                )
              ]
            }
          ) : null
        ] }, z);
      })
    }
  );
}
const qb = "_root_wurjl_1", Fb = "_list_wurjl_5", Hb = "_vertical_wurjl_14", Kb = "_horizontal_wurjl_20", Ub = "_item_wurjl_28", Wb = "_link_wurjl_32", Xb = "_active_wurjl_57", xn = {
  root: qb,
  list: Fb,
  vertical: Hb,
  horizontal: Kb,
  item: Ub,
  link: Wb,
  active: Xb
};
function dk({
  items: e,
  selector: t,
  Selector: s,
  orientation: o,
  Orientation: i,
  onClick: c,
  Click: h,
  ariaLabel: r = "Table of contents",
  className: l
}) {
  const a = t ?? s, p = o ?? i ?? "vertical", [d, v] = V(
    () => e[0]?.selector ?? null
  ), y = le(d);
  y.current = d;
  const w = H(
    (k, _) => {
      if (v(k.selector), (c ?? h)?.({ text: k.text, selector: k.selector }), _) {
        try {
          _.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        } catch {
          _.scrollIntoView();
        }
        const u = _;
        u.getAttribute("tabindex") == null && u.tabIndex === -1 || u.tabIndex < 0 ? (u.getAttribute("tabindex"), u.setAttribute("tabindex", "-1"), u.focus({ preventScroll: !0 })) : u.focus({ preventScroll: !0 });
      }
    },
    [c, h]
  );
  return ke(() => {
    if (e.length === 0) return;
    const _ = (() => {
      if (a) {
        const m = document.querySelector(a);
        if (m) return m;
      }
      return window;
    })();
    let f = null;
    const u = /* @__PURE__ */ new Map(), x = () => {
      let m = null, S = null;
      for (const N of e) {
        const E = document.querySelector(N.selector);
        if (!E) continue;
        u.set(N.selector, E);
        const I = E.getBoundingClientRect();
        let C = I.top;
        if (_ !== window) {
          const D = _.getBoundingClientRect();
          C = I.top - D.top;
        }
        C <= 80 ? (!S || C > S.el.getBoundingClientRect().top - (_ !== window ? _.getBoundingClientRect().top : 0)) && (S = { sel: N.selector, el: E }) : (!m || C < m.top) && (m = { sel: N.selector, top: C });
      }
      const b = S?.sel ?? m?.sel ?? e[0]?.selector ?? null;
      b && b !== y.current && v(b);
    }, $ = () => {
      x();
    };
    if (typeof IntersectionObserver < "u") {
      const m = _ === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
        root: _,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      };
      f = new IntersectionObserver((S) => {
        const b = S.filter((N) => N.isIntersecting).sort((N, E) => N.boundingClientRect.top - E.boundingClientRect.top);
        if (b[0]) {
          const N = b[0].target;
          for (const E of e) {
            if (document.querySelector(E.selector) === N) {
              v(E.selector);
              break;
            }
            if (E.selector.startsWith("#") && N.id === E.selector.slice(1)) {
              v(E.selector);
              break;
            }
          }
        } else
          x();
      }, m);
      for (const S of e) {
        const b = document.querySelector(S.selector);
        b && (f.observe(b), u.set(S.selector, b));
      }
    }
    return _ === window ? (window.addEventListener("scroll", $, { passive: !0 }), x(), () => {
      window.removeEventListener("scroll", $), f?.disconnect();
    }) : (_.addEventListener("scroll", $, {
      passive: !0
    }), x(), () => {
      _.removeEventListener("scroll", $), f?.disconnect();
    });
  }, [e, a]), /* @__PURE__ */ n(
    "nav",
    {
      "aria-label": r,
      className: [xn.root, xn[p], l].filter(Boolean).join(" "),
      children: /* @__PURE__ */ n("ol", { className: xn.list, children: e.map((k) => {
        const _ = k.selector === d;
        return /* @__PURE__ */ n("li", { className: xn.item, children: /* @__PURE__ */ n(
          "a",
          {
            href: k.selector.startsWith("#") || k.selector.startsWith(".") ? k.selector : `#${k.selector}`,
            className: [xn.link, _ ? xn.active : null].filter(Boolean).join(" "),
            "aria-current": _ ? "location" : void 0,
            onClick: (f) => {
              f.preventDefault();
              const u = document.querySelector(k.selector);
              w(k, u);
            },
            children: k.text
          }
        ) }, `${k.text}-${k.selector}`);
      }) })
    }
  );
}
const Vb = "_root_u1med_1", Gb = "_viewport_u1med_17", Yb = "_slide_u1med_24", Zb = "_active_u1med_33", Jb = "_arrow_u1med_37", Qb = "_prev_u1med_71", ey = "_next_u1med_75", ty = "_pauseBtn_u1med_79", ny = "_indicators_u1med_110", sy = "_indicator_u1med_110", ry = "_indicatorActive_u1med_145", $t = {
  root: Vb,
  viewport: Gb,
  slide: Yb,
  active: Zb,
  arrow: Jb,
  prev: Qb,
  next: ey,
  pauseBtn: ty,
  indicators: ny,
  indicator: sy,
  indicatorActive: ry
};
function uk({
  items: e,
  selectedIndex: t,
  SelectedIndex: s,
  defaultIndex: o = 0,
  auto: i,
  Auto: c,
  interval: h,
  Interval: r,
  pauseOnHover: l,
  PauseOnHover: a,
  showArrows: p,
  ShowArrows: d,
  showIndicators: v,
  ShowIndicators: y,
  onChange: w,
  Change: k,
  ariaLabel: _ = "Carousel",
  className: f
}) {
  const u = t ?? s, x = u !== void 0, [$, m] = V(() => Math.min(Math.max(0, u ?? o), Math.max(0, e.length - 1))), S = x ? u : $, b = e.length === 0 ? 0 : Math.min(Math.max(0, S), e.length - 1), N = i ?? c ?? !1, E = h ?? r ?? 3e3, I = l ?? a ?? !0, C = p ?? d ?? !0, D = v ?? y ?? !0, [g, z] = V(!1), [P, j] = V(!1), T = g || P, q = le(null), X = Fe(), Z = H(
    (de) => {
      const ae = e.length === 0 ? 0 : (de % e.length + e.length) % e.length;
      x || m(ae), (w ?? k)?.(ae);
    },
    [x, w, k, e.length]
  ), Q = H(() => {
    Z(b - 1);
  }, [Z, b]), K = H(() => {
    Z(b + 1);
  }, [Z, b]), te = H(
    (de) => {
      Z(de);
    },
    [Z]
  );
  ke(() => {
    if (!N || T || e.length <= 1) return;
    const de = setInterval(() => {
      Z(b + 1);
    }, E);
    return () => clearInterval(de);
  }, [N, T, E, b, Z, e.length]);
  const oe = (de) => {
    e.length !== 0 && (de.key === "ArrowLeft" ? (de.preventDefault(), Q()) : de.key === "ArrowRight" ? (de.preventDefault(), K()) : de.key === "Home" ? (de.preventDefault(), te(0)) : de.key === "End" && (de.preventDefault(), te(e.length - 1)));
  }, ee = () => {
    I && N && j(!0);
  }, R = () => {
    I && N && j(!1);
  }, ie = () => {
    I && N && j(!0);
  }, Y = () => {
    I && N && j(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ O(
    "div",
    {
      ref: q,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": _,
      tabIndex: 0,
      className: [$t.root, f].filter(Boolean).join(" "),
      onKeyDown: oe,
      onMouseEnter: ee,
      onMouseLeave: R,
      onFocusCapture: ie,
      onBlurCapture: Y,
      children: [
        /* @__PURE__ */ n("div", { id: X, className: $t.viewport, children: e.map((de, ae) => {
          const be = ae === b;
          return /* @__PURE__ */ n(
            "div",
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `Slide ${ae + 1} of ${e.length}`,
              "aria-hidden": be ? void 0 : !0,
              hidden: !be,
              className: [$t.slide, be ? $t.active : null].filter(Boolean).join(" "),
              children: de
            },
            ae
          );
        }) }),
        C && e.length > 1 ? /* @__PURE__ */ O(Me, { children: [
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: [$t.arrow, $t.prev].filter(Boolean).join(" "),
              "aria-label": "Previous slide",
              "aria-controls": X,
              onClick: Q,
              children: "‹"
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: [$t.arrow, $t.next].filter(Boolean).join(" "),
              "aria-label": "Next slide",
              "aria-controls": X,
              onClick: K,
              children: "›"
            }
          )
        ] }) : null,
        N ? /* @__PURE__ */ n(
          "button",
          {
            type: "button",
            className: $t.pauseBtn,
            "aria-label": g ? "Resume" : "Pause",
            "aria-pressed": g,
            onClick: () => z((de) => !de),
            children: g ? "▶" : "⏸"
          }
        ) : null,
        D && e.length > 1 ? /* @__PURE__ */ n(
          "div",
          {
            className: $t.indicators,
            role: "group",
            "aria-label": "Slide indicators",
            children: e.map((de, ae) => {
              const be = ae === b;
              return /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: [
                    $t.indicator,
                    be ? $t.indicatorActive : null
                  ].filter(Boolean).join(" "),
                  "aria-label": `Go to slide ${ae + 1}`,
                  "aria-current": be ? "true" : void 0,
                  "aria-controls": X,
                  onClick: () => te(ae)
                },
                ae
              );
            })
          }
        ) : null
      ]
    }
  );
}
const oy = "_root_xvqqt_1", ly = "_group_xvqqt_20", ay = "_itemWrapper_xvqqt_30", iy = "_treeitem_xvqqt_34", cy = "_disabled_xvqqt_50", dy = "_selected_xvqqt_60", uy = "_caret_xvqqt_66", _y = "_caretIcon_xvqqt_113", fy = "_caretOpen_xvqqt_120", hy = "_caretPlaceholder_xvqqt_124", py = "_label_xvqqt_130", my = "_loading_xvqqt_137", gy = "_loadingRow_xvqqt_143", xy = "_empty_xvqqt_149", by = "_checkbox_xvqqt_155", st = {
  root: oy,
  group: ly,
  itemWrapper: ay,
  treeitem: iy,
  disabled: cy,
  selected: dy,
  caret: uy,
  caretIcon: _y,
  caretOpen: fy,
  caretPlaceholder: hy,
  label: py,
  loading: my,
  loadingRow: gy,
  empty: xy,
  checkbox: by
};
function yy({
  indeterminate: e,
  ...t
}) {
  const s = le(null);
  return ke(() => {
    s.current && (s.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ n("input", { ref: s, type: "checkbox", ...t });
}
function _k({
  data: e,
  Data: t,
  children: s,
  Children: o,
  textProperty: i,
  TextProperty: c,
  keyProperty: h,
  KeyProperty: r,
  selectionMode: l,
  SelectionMode: a,
  selectedItem: p,
  SelectedItem: d,
  selectedItems: v,
  SelectedItems: y,
  defaultSelectedItem: w,
  defaultSelectedItems: k,
  onChange: _,
  Change: f,
  onExpand: u,
  Expand: x,
  onCollapse: $,
  Collapse: m,
  loadChildData: S,
  LoadChildData: b,
  template: N,
  Template: E,
  itemTemplate: I,
  ItemTemplate: C,
  ariaLabel: D,
  AriaLabel: g,
  allowCheckBoxes: z = !1,
  checkedKeys: P,
  defaultCheckedKeys: j,
  onCheckedChange: T,
  allowCheckChildren: q = !0,
  className: X
}) {
  const Z = e ?? t ?? [], Q = s ?? o, K = i ?? c ?? "text", te = h ?? r ?? "id", oe = l ?? a ?? "single", ee = D ?? g ?? "Tree", R = S ?? b, ie = N ?? E ?? I ?? C, Y = H(
    (B) => {
      const G = B[te];
      return G != null ? String(G) : String(B.id ?? "");
    },
    [te]
  ), de = H(
    (B) => {
      const G = B[K];
      if (G != null) return String(G);
      const re = B.text;
      return re != null ? String(re) : "";
    },
    [K]
  ), ae = H(
    (B) => {
      if (Q) {
        const re = Q(B);
        if (re !== void 0) return re;
      }
      const G = B.children;
      if (Array.isArray(G)) return G;
    },
    [Q]
  ), be = H(
    (B) => {
      const G = /* @__PURE__ */ new Set(), re = (he) => {
        for (const fe of he) {
          const ye = Y(fe);
          fe.expanded && G.add(ye);
          const Te = ae(fe);
          Te && Te.length > 0 && re(Te);
        }
      };
      return re(B), G;
    },
    [Y, ae]
  ), [we, Be] = V(
    () => be(Z)
  ), [ve, Xe] = V(
    () => /* @__PURE__ */ new Map()
  ), [xe, Ze] = V(() => /* @__PURE__ */ new Set()), Ve = p ?? d, Re = v ?? y, et = oe === "multiple" ? Re !== void 0 : Ve !== void 0, W = H(() => {
    if (oe === "multiple") {
      if (k && k.length > 0)
        return new Set(k.map((re) => Y(re)));
      const B = /* @__PURE__ */ new Set(), G = (re) => {
        for (const he of re) {
          he.selected && B.add(Y(he));
          const fe = ae(he);
          fe && G(fe);
        }
      };
      return G(Z), B;
    } else {
      if (w) return /* @__PURE__ */ new Set([Y(w)]);
      let B = null;
      const G = (re) => {
        for (const he of re) {
          if (he.selected)
            return B = Y(he), !0;
          const fe = ae(he);
          if (fe && G(fe)) return !0;
        }
        return !1;
      };
      return G(Z), B ? /* @__PURE__ */ new Set([B]) : /* @__PURE__ */ new Set();
    }
  }, [
    oe,
    w,
    k,
    Y,
    ae,
    Z
  ]), [M, F] = V(
    () => W()
  ), ne = $e(() => {
    if (oe === "multiple") {
      if (Re !== void 0) {
        const B = Re;
        return B ? new Set(B.map((G) => Y(G))) : /* @__PURE__ */ new Set();
      }
      return M;
    } else {
      if (Ve !== void 0) {
        const B = Ve;
        return B ? /* @__PURE__ */ new Set([Y(B)]) : /* @__PURE__ */ new Set();
      }
      return M;
    }
  }, [
    oe,
    Re,
    Ve,
    M,
    Y
  ]), _e = H(
    (B) => {
      let G;
      const re = (he) => {
        for (const fe of he) {
          if (Y(fe) === B)
            return G = fe, !0;
          const Te = ve.get(Y(fe)) ?? ae(fe);
          if (Te && re(Te)) return !0;
        }
        return !1;
      };
      if (re(Z), !G) {
        for (const he of ve.values())
          if (re(he)) break;
      }
      return G;
    },
    [Z, ve, Y, ae]
  ), se = H(() => {
    const B = /* @__PURE__ */ new Map(), G = (re) => {
      for (const he of re) {
        const fe = Y(he);
        B.set(fe, he);
        const Te = ve.get(fe) ?? ae(he);
        Te && G(Te);
      }
    };
    return G(Z), B;
  }, [Z, ve, Y, ae]), me = H(
    (B) => {
      const G = Y(B);
      if (!B.disabled)
        if (oe === "multiple") {
          const he = new Set(ne);
          he.has(G) ? he.delete(G) : he.add(G), et || F(he);
          const fe = _ ?? f;
          if (fe) {
            const ye = se(), Te = [];
            for (const A of he) {
              const L = ye.get(A) ?? _e(A);
              L && Te.push(L);
            }
            fe({ item: B, selectedItems: Te });
          }
        } else if (!ne.has(G) || ne.size !== 1 || !ne.has(G)) {
          et || F(/* @__PURE__ */ new Set([G]));
          const fe = _ ?? f;
          fe && fe({ item: B, selectedItem: B });
        } else {
          const fe = _ ?? f;
          fe && fe({ item: B, selectedItem: B });
        }
    },
    [
      Y,
      oe,
      ne,
      et,
      _,
      f,
      se,
      _e
    ]
  ), Oe = H(
    async (B) => {
      const G = Y(B);
      if (!!B.disabled) return;
      const he = we.has(G), fe = u ?? x, ye = $ ?? m, Te = ae(B), L = ve.get(G) ?? Te, pe = !(L !== void 0 && L.length > 0) && R != null;
      if (he) {
        Be((Ie) => {
          const je = new Set(Ie);
          return je.delete(G), je;
        }), ye?.({ item: B });
        return;
      }
      if (pe) {
        if (xe.has(G)) return;
        Ze((Ie) => {
          const je = new Set(Ie);
          return je.add(G), je;
        });
        try {
          const je = await R(B);
          Xe((Ce) => {
            const lt = new Map(Ce);
            return lt.set(G, je), lt;
          }), Be((Ce) => {
            const lt = new Set(Ce);
            return lt.add(G), lt;
          }), fe?.({ item: B });
        } catch {
        } finally {
          Ze((Ie) => {
            const je = new Set(Ie);
            return je.delete(G), je;
          });
        }
        return;
      }
      Be((Ie) => {
        const je = new Set(Ie);
        return je.add(G), je;
      }), fe?.({ item: B });
    },
    [
      Y,
      we,
      ae,
      ve,
      R,
      xe,
      u,
      x,
      $,
      m
    ]
  ), qe = $e(() => {
    const B = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Set(), he = (fe, ye) => {
      for (const Te of fe) {
        const A = Y(Te);
        B.has(A) || B.set(A, []), G.set(A, ye), Te.disabled && re.add(A);
        const ce = ve.get(A) ?? ae(Te);
        ce && ce.length > 0 && (B.set(
          A,
          ce.map((pe) => Y(pe))
        ), he(ce, A));
      }
    };
    return he(Z, null), { childrenOf: B, parentOf: G, disabledKeys: re };
  }, [Z, ve, Y, ae]), Je = H(
    (B) => {
      const G = [], re = [...qe.childrenOf.get(B) ?? []];
      for (; re.length > 0; ) {
        const he = re.pop();
        G.push(he), re.push(...qe.childrenOf.get(he) ?? []);
      }
      return G;
    },
    [qe]
  ), [dt, yt] = V(
    () => new Set(j ?? [])
  ), J = P !== void 0 ? new Set(P) : dt, De = H(
    (B) => {
      const G = qe.disabledKeys;
      return Je(B).filter((re) => !G.has(re));
    },
    [Je, qe]
  ), nt = H(
    (B) => {
      if (J.has(B)) return !0;
      if (!z || !q) return !1;
      const G = De(B);
      return G.length > 0 && G.every((re) => J.has(re));
    },
    [J, z, q, De]
  ), Gt = H(
    (B) => {
      if (!z || !q || J.has(B))
        return !1;
      const G = De(B);
      if (G.length === 0) return !1;
      const re = G.filter((he) => J.has(he)).length;
      return re > 0 && re < G.length;
    },
    [J, z, q, De]
  ), Nt = H(
    (B) => {
      if (!z || B.disabled) return;
      const G = Y(B), re = new Set(J);
      if (re.has(G) || nt(G)) {
        if (re.delete(G), q)
          for (const he of De(G)) re.delete(he);
      } else if (re.add(G), q)
        for (const he of De(G)) re.add(he);
      P === void 0 && yt(re), T?.([...re]);
    },
    [
      z,
      q,
      P,
      J,
      De,
      Y,
      nt,
      T
    ]
  ), ze = $e(() => {
    const B = [], G = (re, he, fe) => {
      re.forEach((ye, Te) => {
        const A = Y(ye), L = de(ye), ce = ve.get(A) ?? ae(ye);
        let pe;
        ve.has(A) ? pe = ve.get(A).length > 0 : ce !== void 0 ? pe = ce.length > 0 : R ? pe = !0 : pe = !1;
        const Ie = we.has(A), je = !!ye.disabled, Ce = re.length, lt = Te + 1;
        if (B.push({
          item: ye,
          key: A,
          text: L,
          level: he,
          posInSet: lt,
          setSize: Ce,
          hasChildren: pe,
          expanded: Ie,
          parentKey: fe,
          disabled: je
        }), pe && Ie) {
          const St = ve.get(A) ?? ce;
          St && St.length > 0 && G(St, he + 1, A);
        }
      });
    };
    return G(Z, 1, null), B;
  }, [
    Z,
    Y,
    de,
    ae,
    ve,
    we,
    R,
    xe
  ]), [Ge, vt] = V(
    () => ze[0]?.key ?? null
  ), Rt = le(""), tn = le(null), U = le(null);
  ke(() => {
    if (!Ge && ze.length > 0) {
      const B = ze[0];
      B && vt(B.key);
    } else if (Ge && !ze.some((B) => B.key === Ge)) {
      const B = ze[0];
      vt(B ? B.key : null);
    }
  }, [ze, Ge]), ke(() => {
    if (Ge) {
      const B = U.current?.querySelector(
        `[data-key="${CSS.escape(Ge)}"]`
      );
      let G = null;
      B || (G = U.current?.querySelector(
        `[data-key="${Ge}"]`
      ) ?? null);
      const re = B ?? G;
      re && document.activeElement !== re && U.current?.contains(document.activeElement) && re.focus();
    }
  }, [Ge]);
  const ue = H((B) => {
    vt(B), requestAnimationFrame(() => {
      const G = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(B) : B;
      let re = U.current?.querySelector(
        `[data-key="${G}"]`
      );
      re || (re = U.current?.querySelector(`[data-key="${B}"]`) ?? null), re?.focus();
    });
  }, []), Pe = H(
    (B) => ze.find((re) => re.key === B)?.parentKey ?? null,
    [ze]
  ), Ke = H(
    (B) => {
      if (ze.length === 0) return;
      const G = Ge ? ze.findIndex((fe) => fe.key === Ge) : -1, re = G >= 0 ? ze[G] : void 0;
      let he = null;
      if (B.key === "ArrowDown") {
        if (B.preventDefault(), G === -1)
          he = ze[0]?.key ?? null;
        else {
          const fe = (G + 1) % ze.length, ye = ze[fe];
          ye && (he = ye.key);
        }
        he && ue(he);
        return;
      }
      if (B.key === "ArrowUp") {
        if (B.preventDefault(), G === -1) {
          const fe = ze[ze.length - 1];
          fe && (he = fe.key);
        } else {
          const fe = (G - 1 + ze.length) % ze.length, ye = ze[fe];
          ye && (he = ye.key);
        }
        he && ue(he);
        return;
      }
      if (B.key === "ArrowRight") {
        if (B.preventDefault(), !re) return;
        if (re.hasChildren && !re.expanded)
          Oe(re.item);
        else if (re.hasChildren && re.expanded) {
          const fe = G + 1, ye = ze[fe];
          ye && ye.parentKey === re.key && ue(ye.key);
        }
        return;
      }
      if (B.key === "ArrowLeft") {
        if (B.preventDefault(), !re) return;
        if (re.hasChildren && re.expanded)
          Oe(re.item);
        else {
          const fe = Pe(re.key);
          fe && ue(fe);
        }
        return;
      }
      if (B.key === "Home") {
        B.preventDefault();
        const fe = ze[0];
        fe && ue(fe.key);
        return;
      }
      if (B.key === "End") {
        B.preventDefault();
        const fe = ze[ze.length - 1];
        fe && ue(fe.key);
        return;
      }
      if (B.key === "Enter" || B.key === " ") {
        if (B.key === " " && B.target?.tagName === "INPUT" || (B.preventDefault(), !re)) return;
        if (B.key === " " && z) {
          const fe = _e(re.key);
          fe && Nt(fe);
          return;
        }
        me(re.item);
        return;
      }
      if (B.key.length === 1 && /^[a-zA-Z0-9]$/.test(B.key)) {
        B.preventDefault();
        const fe = (Rt.current + B.key).toLowerCase();
        Rt.current = fe, tn.current && clearTimeout(tn.current), tn.current = setTimeout(() => {
          Rt.current = "";
        }, 500);
        const ye = G >= 0 ? G + 1 : 0, L = [...ze, ...ze].slice(ye, ye + ze.length).find((ce) => ce.text.toLowerCase().startsWith(fe));
        L && ue(L.key);
        return;
      }
    },
    [
      ze,
      Ge,
      ue,
      Oe,
      me,
      Pe,
      z,
      Nt
    ]
  ), Pt = H(() => {
    if (!Ge && ze.length > 0) {
      const B = ze[0];
      B && vt(B.key);
    }
  }, [Ge, ze]), Ot = (B, G, re) => /* @__PURE__ */ n("ul", { role: "group", className: st.group, children: B.map((he, fe) => {
    const ye = Y(he), Te = de(he), A = ve.get(ye) ?? ae(he);
    let L;
    ve.has(ye) ? L = ve.get(ye).length > 0 : A !== void 0 ? L = A.length > 0 : R ? L = !0 : L = !1;
    const ce = we.has(ye), pe = ne.has(ye), Ie = !!he.disabled, je = xe.has(ye), Ce = Ge === ye, lt = B.length, St = fe + 1, nr = ie ? ie(he) : Te, hs = z ? {
      checked: nt(ye),
      indeterminate: Gt(ye)
    } : null;
    return /* @__PURE__ */ O("li", { role: "none", className: st.itemWrapper, children: [
      /* @__PURE__ */ O(
        "div",
        {
          role: "treeitem",
          "data-key": ye,
          tabIndex: Ce ? 0 : -1,
          "aria-expanded": L ? ce : void 0,
          "aria-selected": pe,
          "aria-level": G,
          "aria-setsize": lt,
          "aria-posinset": St,
          "aria-disabled": Ie || void 0,
          "aria-busy": je || void 0,
          className: [
            st.treeitem,
            pe ? st.selected : null,
            Ie ? st.disabled : null,
            Ce ? st.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            ue(ye), Ie || me(he);
          },
          onFocus: () => vt(ye),
          children: [
            z ? /* @__PURE__ */ n(
              yy,
              {
                className: st.checkbox,
                checked: hs?.checked ?? !1,
                indeterminate: hs?.indeterminate ?? !1,
                disabled: Ie,
                "aria-label": `Select ${Te}`,
                onClick: (Pn) => Pn.stopPropagation(),
                onChange: () => Nt(he)
              }
            ) : null,
            L ? /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: st.caret,
                "aria-label": `${ce ? "Collapse" : "Expand"} ${Te}`,
                "aria-expanded": ce,
                tabIndex: -1,
                disabled: Ie,
                onClick: (Pn) => {
                  Pn.stopPropagation(), ue(ye), Oe(he);
                },
                children: /* @__PURE__ */ n(
                  "span",
                  {
                    "aria-hidden": "true",
                    className: [
                      st.caretIcon,
                      ce ? st.caretOpen : null
                    ].filter(Boolean).join(" "),
                    children: /* @__PURE__ */ n(Ne, { name: "chevron-right", size: 10 })
                  }
                )
              }
            ) : /* @__PURE__ */ n(
              "span",
              {
                className: st.caretPlaceholder,
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ n("span", { className: st.label, children: nr }),
            je ? /* @__PURE__ */ n("span", { className: st.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      L && ce ? je ? /* @__PURE__ */ n("div", { className: st.loadingRow, "aria-busy": "true", children: "Loading…" }) : A && A.length > 0 ? Ot(A, G + 1) : ve.has(ye) && ve.get(ye).length > 0 ? Ot(
        ve.get(ye),
        G + 1
      ) : (A && A.length === 0, null) : null
    ] }, ye);
  }) });
  return /* @__PURE__ */ n(
    "div",
    {
      ref: U,
      role: "tree",
      "aria-label": ee,
      "aria-multiselectable": oe === "multiple" || void 0,
      tabIndex: 0,
      className: [st.root, X].filter(Boolean).join(" "),
      onKeyDown: Ke,
      onFocus: Pt,
      children: Z.length === 0 ? /* @__PURE__ */ n("div", { className: st.empty, children: "No items" }) : Ot(Z, 1)
    }
  );
}
const vy = "_root_1plfv_1", ky = "_panel_1plfv_8", wy = "_header_1plfv_19", $y = "_listbox_1plfv_28", Ny = "_option_1plfv_42", Oy = "_disabled_1plfv_57", Sy = "_active_1plfv_66", Dy = "_selected_1plfv_70", My = "_empty_1plfv_86", zy = "_controls_1plfv_93", Cy = "_reorder_1plfv_102", Ey = "_btn_1plfv_110", Le = {
  root: vy,
  panel: ky,
  header: wy,
  listbox: $y,
  option: Ny,
  disabled: Oy,
  active: Sy,
  selected: Dy,
  empty: My,
  controls: zy,
  reorder: Cy,
  btn: Ey
};
function rt(e, t) {
  const s = e[t];
  return s != null ? String(s) : String(e.id ?? "");
}
function Vn(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function fk({
  source: e,
  Source: t,
  target: s,
  Target: o,
  value: i,
  Value: c,
  targetValue: h,
  TargetValue: r,
  data: l,
  Data: a,
  onSourceChange: p,
  SourceChange: d,
  onTargetChange: v,
  TargetChange: y,
  keyProperty: w,
  KeyProperty: k,
  onMove: _,
  Move: f,
  ariaLabel: u,
  AriaLabel: x,
  className: $
}) {
  const m = w ?? k ?? "id", S = u ?? x ?? "PickList", b = e ?? t ?? i ?? c ?? l ?? a ?? [], N = s ?? o ?? h ?? r ?? [], [E, I] = V(() => [
    ...b
  ]), [C, D] = V(() => [
    ...N
  ]);
  ke(() => {
    const M = e ?? t ?? i ?? c ?? l ?? a;
    M !== void 0 && I([...M]);
  }, [e, t, i, c, l, a]), ke(() => {
    const M = s ?? o ?? h ?? r;
    M !== void 0 && D([...M]);
  }, [s, o, h, r]);
  const [g, z] = V(
    () => /* @__PURE__ */ new Set()
  ), [P, j] = V(
    () => /* @__PURE__ */ new Set()
  ), [T, q] = V(() => {
    const M = b.findIndex((F) => !F.disabled);
    return M >= 0 ? M : 0;
  }), [X, Z] = V(() => {
    const M = N.findIndex((F) => !F.disabled);
    return M >= 0 ? M : 0;
  }), Q = $e(
    () => E.map((M, F) => M.disabled ? -1 : F).filter((M) => M >= 0),
    [E]
  ), K = $e(
    () => C.map((M, F) => M.disabled ? -1 : F).filter((M) => M >= 0),
    [C]
  );
  ke(() => {
    if (T >= E.length) {
      const M = Q[Q.length - 1];
      q(M ?? 0);
    } else if (E.length > 0 && Q.length > 0 && !Q.includes(T)) {
      const M = Q[0];
      M !== void 0 && q(M);
    }
  }, [T, E.length, Q]), ke(() => {
    if (X >= C.length) {
      const M = K[K.length - 1];
      Z(M ?? 0);
    } else if (C.length > 0 && K.length > 0 && !K.includes(X)) {
      const M = K[0];
      M !== void 0 && Z(M);
    }
  }, [X, C.length, K]), ke(() => {
    z((M) => {
      const F = /* @__PURE__ */ new Set();
      for (const ne of M)
        E.some(
          (se) => rt(se, m) === ne && !se.disabled
        ) && F.add(ne);
      return F;
    });
  }, [E, m]), ke(() => {
    j((M) => {
      const F = /* @__PURE__ */ new Set();
      for (const ne of M)
        C.some(
          (se) => rt(se, m) === ne && !se.disabled
        ) && F.add(ne);
      return F;
    });
  }, [C, m]);
  const te = H(
    (M) => {
      (p ?? d)?.(M);
    },
    [p, d]
  ), oe = H(
    (M) => {
      (v ?? y)?.(M);
    },
    [v, y]
  ), ee = H(
    (M) => {
      (_ ?? f)?.(M);
    },
    [_, f]
  ), R = H(
    (M) => {
      const F = E[M];
      if (!F || F.disabled) return;
      const ne = rt(F, m);
      z((_e) => {
        const se = new Set(_e);
        return se.has(ne) ? se.delete(ne) : se.add(ne), se;
      }), q(M);
    },
    [E, m]
  ), ie = H(
    (M) => {
      const F = C[M];
      if (!F || F.disabled) return;
      const ne = rt(F, m);
      j((_e) => {
        const se = new Set(_e);
        return se.has(ne) ? se.delete(ne) : se.add(ne), se;
      }), Z(M);
    },
    [C, m]
  ), Y = H(() => {
    const M = [], F = [];
    for (const me of E) {
      const Oe = rt(me, m);
      g.has(Oe) && !me.disabled ? M.push(me) : F.push(me);
    }
    if (M.length === 0) return;
    const ne = F, _e = [...C, ...M];
    I(ne), D(_e), z(/* @__PURE__ */ new Set());
    const se = new Set(M.map((me) => rt(me, m)));
    j(se), te(ne), oe(_e), ee({
      source: ne,
      target: _e,
      moved: M,
      direction: "toTarget"
    });
  }, [
    E,
    C,
    g,
    m,
    te,
    oe,
    ee
  ]), de = H(() => {
    const M = [], F = [];
    for (const me of C) {
      const Oe = rt(me, m);
      P.has(Oe) && !me.disabled ? M.push(me) : F.push(me);
    }
    if (M.length === 0) return;
    const ne = F, _e = [...E, ...M];
    D(ne), I(_e), j(/* @__PURE__ */ new Set());
    const se = new Set(M.map((me) => rt(me, m)));
    z(se), te(_e), oe(ne), ee({
      source: _e,
      target: ne,
      moved: M,
      direction: "toSource"
    });
  }, [
    E,
    C,
    P,
    m,
    te,
    oe,
    ee
  ]), ae = H(() => {
    const M = E.filter((_e) => !_e.disabled);
    if (M.length === 0) return;
    const F = E.filter((_e) => !!_e.disabled), ne = [...C, ...M];
    I(F), D(ne), z(/* @__PURE__ */ new Set()), te(F), oe(ne), ee({
      source: F,
      target: ne,
      moved: M,
      direction: "allToTarget"
    });
  }, [
    E,
    C,
    m,
    te,
    oe,
    ee
  ]), be = H(() => {
    const M = C.filter((_e) => !_e.disabled);
    if (M.length === 0) return;
    const F = C.filter((_e) => !!_e.disabled), ne = [...E, ...M];
    D(F), I(ne), j(/* @__PURE__ */ new Set()), te(ne), oe(F), ee({
      source: ne,
      target: F,
      moved: M,
      direction: "allToSource"
    });
  }, [E, C, te, oe, ee]), we = H(() => {
    if (P.size === 0) return;
    const M = [...C], F = P, ne = [];
    for (let se = 1; se < M.length; se++) {
      const me = M[se], Oe = M[se - 1];
      if (!me || !Oe) continue;
      const qe = rt(me, m), Je = rt(Oe, m);
      F.has(qe) && !F.has(Je) && !me.disabled && !Oe.disabled && (M[se - 1] = me, M[se] = Oe, ne.push(me));
    }
    if (ne.length === 0) return;
    D(M), oe(M), ee({ source: E, target: M, moved: ne, direction: "up" });
    const _e = Array.from(F)[0];
    if (_e) {
      const se = M.findIndex(
        (me) => rt(me, m) === _e
      );
      se >= 0 && Z(se);
    }
  }, [
    C,
    P,
    m,
    E,
    oe,
    ee
  ]), Be = H(() => {
    if (P.size === 0) return;
    const M = [...C], F = P, ne = [];
    for (let se = M.length - 2; se >= 0; se--) {
      const me = M[se], Oe = M[se + 1];
      if (!me || !Oe) continue;
      const qe = rt(me, m), Je = rt(Oe, m);
      F.has(qe) && !F.has(Je) && !me.disabled && !Oe.disabled && (M[se] = Oe, M[se + 1] = me, ne.push(me));
    }
    if (ne.length === 0) return;
    D(M), oe(M), ee({ source: E, target: M, moved: ne, direction: "down" });
    const _e = Array.from(F)[0];
    if (_e) {
      const se = M.findIndex(
        (me) => rt(me, m) === _e
      );
      se >= 0 && Z(se);
    }
  }, [
    C,
    P,
    m,
    E,
    oe,
    ee
  ]), ve = g.size > 0, Xe = P.size > 0, xe = le(""), Ze = le(
    null
  ), Ve = le(""), Re = le(
    null
  ), tt = H(
    (M) => {
      if (E.length === 0) return;
      const F = Q;
      if (F.length === 0) return;
      const ne = F.includes(T) ? T : F[0] ?? 0;
      let _e = -1;
      if (M.key === "ArrowDown") {
        M.preventDefault();
        const se = F.indexOf(ne);
        _e = F[(se + 1) % F.length] ?? F[0] ?? 0;
      } else if (M.key === "ArrowUp") {
        M.preventDefault();
        const se = F.indexOf(ne);
        _e = F[(se - 1 + F.length) % F.length] ?? F[0] ?? 0;
      } else if (M.key === "Home")
        M.preventDefault(), _e = F[0] ?? 0;
      else if (M.key === "End")
        M.preventDefault(), _e = F[F.length - 1] ?? 0;
      else if (M.key === "Enter" || M.key === " ") {
        M.preventDefault(), R(ne);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(M.key)) {
        M.preventDefault();
        const se = (xe.current + M.key).toLowerCase();
        xe.current = se, Ze.current && clearTimeout(Ze.current), Ze.current = setTimeout(() => {
          xe.current = "";
        }, 500);
        const me = [...F, ...F], Oe = F.indexOf(ne) + 1, qe = me.slice(Oe).find(
          (Je) => Vn(E[Je]).toLowerCase().startsWith(se)
        );
        qe != null && q(qe);
        return;
      }
      _e >= 0 && q(_e);
    },
    [E, Q, T, R]
  ), Qe = H(
    (M) => {
      if (C.length === 0) return;
      const F = K;
      if (F.length === 0) return;
      const ne = F.includes(X) ? X : F[0] ?? 0;
      let _e = -1;
      if (M.key === "ArrowDown") {
        M.preventDefault();
        const se = F.indexOf(ne);
        _e = F[(se + 1) % F.length] ?? F[0] ?? 0;
      } else if (M.key === "ArrowUp") {
        M.preventDefault();
        const se = F.indexOf(ne);
        _e = F[(se - 1 + F.length) % F.length] ?? F[0] ?? 0;
      } else if (M.key === "Home")
        M.preventDefault(), _e = F[0] ?? 0;
      else if (M.key === "End")
        M.preventDefault(), _e = F[F.length - 1] ?? 0;
      else if (M.key === "Enter" || M.key === " ") {
        M.preventDefault(), ie(ne);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(M.key)) {
        M.preventDefault();
        const se = (Ve.current + M.key).toLowerCase();
        Ve.current = se, Re.current && clearTimeout(Re.current), Re.current = setTimeout(() => {
          Ve.current = "";
        }, 500);
        const me = [...F, ...F], Oe = F.indexOf(ne) + 1, qe = me.slice(Oe).find(
          (Je) => Vn(C[Je]).toLowerCase().startsWith(se)
        );
        qe != null && Z(qe);
        return;
      }
      _e >= 0 && Z(_e);
    },
    [C, K, X, ie]
  ), et = le(null), W = le(null);
  return /* @__PURE__ */ O(
    "div",
    {
      className: [Le.root, $].filter(Boolean).join(" "),
      "aria-label": S,
      children: [
        /* @__PURE__ */ O("div", { className: Le.panel, children: [
          /* @__PURE__ */ n("div", { className: Le.header, children: "Source" }),
          /* @__PURE__ */ n(
            "div",
            {
              ref: et,
              role: "listbox",
              "aria-label": "Source",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: Le.listbox,
              onKeyDown: tt,
              children: E.length === 0 ? /* @__PURE__ */ n("div", { className: Le.empty, children: "No items" }) : E.map((M, F) => {
                const ne = rt(M, m), _e = g.has(ne), se = F === T, me = !!M.disabled;
                return /* @__PURE__ */ n(
                  "div",
                  {
                    role: "option",
                    "aria-selected": _e,
                    "aria-disabled": me || void 0,
                    tabIndex: -1,
                    "data-active": se || void 0,
                    className: [
                      Le.option,
                      _e ? Le.selected : null,
                      se ? Le.active : null,
                      me ? Le.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => R(F),
                    children: Vn(M)
                  },
                  ne
                );
              })
            }
          )
        ] }),
        /* @__PURE__ */ O("div", { className: Le.controls, children: [
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Le.btn,
              "aria-label": "Move selected to target",
              "aria-disabled": !ve || void 0,
              disabled: !ve,
              onClick: Y,
              children: "›"
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Le.btn,
              "aria-label": "Move all to target",
              "aria-disabled": E.filter((M) => !M.disabled).length === 0 || void 0,
              disabled: E.filter((M) => !M.disabled).length === 0,
              onClick: ae,
              children: "»"
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Le.btn,
              "aria-label": "Move all",
              "aria-disabled": E.filter((M) => !M.disabled).length === 0 || void 0,
              disabled: E.filter((M) => !M.disabled).length === 0,
              onClick: ae,
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
              onClick: de,
              children: "‹"
            }
          ),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: Le.btn,
              "aria-label": "Move all to source",
              "aria-disabled": C.filter((M) => !M.disabled).length === 0 || void 0,
              disabled: C.filter((M) => !M.disabled).length === 0,
              onClick: be,
              children: "«"
            }
          )
        ] }),
        /* @__PURE__ */ O("div", { className: Le.panel, children: [
          /* @__PURE__ */ n("div", { className: Le.header, children: "Target" }),
          /* @__PURE__ */ n(
            "div",
            {
              ref: W,
              role: "listbox",
              "aria-label": "Target",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: Le.listbox,
              onKeyDown: Qe,
              children: C.length === 0 ? /* @__PURE__ */ n("div", { className: Le.empty, children: "No items" }) : C.map((M, F) => {
                const ne = rt(M, m), _e = P.has(ne), se = F === X, me = !!M.disabled;
                return /* @__PURE__ */ n(
                  "div",
                  {
                    role: "option",
                    "aria-selected": _e,
                    "aria-disabled": me || void 0,
                    tabIndex: -1,
                    "data-active": se || void 0,
                    className: [
                      Le.option,
                      _e ? Le.selected : null,
                      se ? Le.active : null,
                      me ? Le.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => ie(F),
                    children: Vn(M)
                  },
                  ne
                );
              })
            }
          ),
          /* @__PURE__ */ O("div", { className: Le.reorder, children: [
            /* @__PURE__ */ n(
              "button",
              {
                type: "button",
                className: Le.btn,
                "aria-label": "Move up",
                "aria-disabled": !Xe || void 0,
                disabled: !Xe,
                onClick: we,
                children: /* @__PURE__ */ n(Ne, { name: "chevron-up", size: "sm" })
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
                onClick: Be,
                children: /* @__PURE__ */ n(Ne, { name: "chevron-down", size: "sm" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const Iy = "_root_16u8q_1", jy = "_header_16u8q_8", Ay = "_title_16u8q_15", Ty = "_navBtn_16u8q_20", Ly = "_resources_16u8q_39", Ry = "_resource_16u8q_39", Py = "_grid_16u8q_50", By = "_timeCol_16u8q_55", qy = "_timeCell_16u8q_61", Fy = "_dayCol_16u8q_66", Hy = "_dayHeader_16u8q_73", Ky = "_slot_16u8q_81", Uy = "_event_16u8q_91", ft = {
  root: Iy,
  header: jy,
  title: Ay,
  navBtn: Ty,
  resources: Ly,
  resource: Ry,
  grid: Py,
  timeCol: By,
  timeCell: qy,
  dayCol: Fy,
  dayHeader: Hy,
  slot: Ky,
  event: Uy
};
function qs(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function hk({
  data: e,
  view: t = "week",
  date: s,
  onDateChange: o,
  resources: i,
  onEventClick: c,
  onSlotClick: h,
  ariaLabel: r = "Scheduler",
  className: l
}) {
  const [a, p] = V(
    s ?? /* @__PURE__ */ new Date()
  ), d = s ?? a, v = (k) => {
    s || p(k), o?.(k);
  }, y = t === "day" ? [d] : t === "week" ? Array.from({ length: 7 }, (k, _) => {
    const f = new Date(d);
    return f.setDate(d.getDate() - d.getDay() + _), f;
  }) : Array.from({ length: 30 }, (k, _) => {
    const f = new Date(d);
    return f.setDate(1 + _), f;
  }), w = Array.from({ length: 12 }, (k, _) => 8 + _);
  return /* @__PURE__ */ O(
    "div",
    {
      className: [ft.root, l].filter(Boolean).join(" "),
      role: "group",
      "aria-label": r,
      children: [
        /* @__PURE__ */ O("div", { className: ft.header, children: [
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: ft.navBtn,
              "aria-label": "Previous",
              onClick: () => {
                const k = new Date(d);
                k.setDate(k.getDate() - 7), v(k);
              },
              children: "‹"
            }
          ),
          /* @__PURE__ */ n("span", { className: ft.title, children: d.toLocaleDateString() }),
          /* @__PURE__ */ n(
            "button",
            {
              type: "button",
              className: ft.navBtn,
              "aria-label": "Next",
              onClick: () => {
                const k = new Date(d);
                k.setDate(k.getDate() + 7), v(k);
              },
              children: "›"
            }
          )
        ] }),
        i && /* @__PURE__ */ n("div", { className: ft.resources, children: i.map((k) => /* @__PURE__ */ n(
          "div",
          {
            className: ft.resource,
            role: "presentation",
            "aria-label": k.name,
            children: k.name
          },
          k.id
        )) }),
        /* @__PURE__ */ O("div", { className: ft.grid, role: "presentation", children: [
          /* @__PURE__ */ n("div", { className: ft.timeCol, role: "presentation", children: w.map((k) => /* @__PURE__ */ O("div", { className: ft.timeCell, children: [
            k,
            ":00"
          ] }, k)) }),
          y.map((k) => /* @__PURE__ */ O(
            "div",
            {
              className: ft.dayCol,
              role: "presentation",
              title: k.toLocaleDateString(),
              onClick: () => h?.({ date: k }),
              tabIndex: 0,
              "aria-label": k.toLocaleDateString(),
              children: [
                /* @__PURE__ */ n("div", { className: ft.dayHeader, children: k.toLocaleDateString(void 0, {
                  weekday: "short",
                  month: "short",
                  day: "numeric"
                }) }),
                w.map((_) => /* @__PURE__ */ n(
                  "div",
                  {
                    className: ft.slot,
                    tabIndex: -1,
                    onClick: () => {
                      const f = new Date(k);
                      f.setHours(_), h?.({ date: f });
                    }
                  },
                  _
                )),
                e.filter((_) => _.start.toDateString() === k.toDateString()).map((_) => /* @__PURE__ */ n(
                  "button",
                  {
                    type: "button",
                    className: ft.event,
                    "aria-label": `${_.title} ${qs(_.start)} - ${qs(_.end)}`,
                    "aria-pressed": !1,
                    onClick: () => c?.({ event: _ }),
                    children: _.title
                  },
                  _.id
                ))
              ]
            },
            k.toISOString()
          ))
        ] })
      ]
    }
  );
}
const Wy = "_root_caexi_1", Xy = "_header_caexi_8", Vy = "_headerCell_caexi_15", Gy = "_timeline_caexi_21", Yy = "_row_caexi_26", Zy = "_taskName_caexi_32", Jy = "_timelineCell_caexi_37", Qy = "_bar_caexi_43", e2 = "_progress_caexi_56", t2 = "_dep_caexi_61", Tt = {
  root: Wy,
  header: Xy,
  headerCell: Vy,
  timeline: Gy,
  row: Yy,
  taskName: Zy,
  timelineCell: Jy,
  bar: Qy,
  progress: e2,
  dep: t2
};
function pk({
  tasks: e,
  view: t = "week",
  onTaskClick: s,
  ariaLabel: o = "Gantt",
  className: i
}) {
  const [c, h] = V(null);
  return /* @__PURE__ */ O(
    "div",
    {
      className: [Tt.root, i].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": o,
      "aria-rowcount": e.length,
      children: [
        /* @__PURE__ */ O("div", { className: Tt.header, role: "row", children: [
          /* @__PURE__ */ n("div", { className: Tt.headerCell, role: "columnheader", children: "Task" }),
          /* @__PURE__ */ O("div", { className: Tt.timeline, role: "columnheader", children: [
            "Timeline (",
            t,
            ")"
          ] })
        ] }),
        e.map((r) => /* @__PURE__ */ O(
          "div",
          {
            className: Tt.row,
            role: "row",
            "aria-selected": c === r.id,
            children: [
              /* @__PURE__ */ n("div", { className: Tt.taskName, role: "gridcell", children: r.name }),
              /* @__PURE__ */ O("div", { className: Tt.timelineCell, role: "gridcell", children: [
                /* @__PURE__ */ n(
                  "div",
                  {
                    className: Tt.bar,
                    role: "button",
                    "aria-label": `${r.name} ${r.start.toLocaleDateString()} - ${r.end.toLocaleDateString()}${r.progress !== void 0 ? `, ${r.progress}% complete` : ""}`,
                    "aria-pressed": c === r.id,
                    tabIndex: 0,
                    onClick: () => {
                      h(r.id), s?.({ task: r });
                    },
                    onKeyDown: (l) => {
                      (l.key === "Enter" || l.key === " ") && (l.preventDefault(), h(r.id), s?.({ task: r }));
                    },
                    children: /* @__PURE__ */ n(
                      "div",
                      {
                        className: Tt.progress,
                        style: { width: `${r.progress ?? 0}%` }
                      }
                    )
                  }
                ),
                r.dependencies?.map((l) => /* @__PURE__ */ n("svg", { className: Tt.dep, "aria-hidden": "true", children: /* @__PURE__ */ n(
                  "line",
                  {
                    x1: "0",
                    y1: "10",
                    x2: "20",
                    y2: "10",
                    stroke: "var(--dx-border-color)"
                  }
                ) }, l))
              ] })
            ]
          },
          r.id
        ))
      ]
    }
  );
}
const n2 = "_root_reqz6_1", s2 = "_fields_reqz6_6", r2 = "_chip_reqz6_13", o2 = "_table_reqz6_35", l2 = "_totalRow_reqz6_55", a2 = "_total_reqz6_55", bn = {
  root: n2,
  fields: s2,
  chip: r2,
  table: o2,
  totalRow: l2,
  total: a2
}, Gn = {
  Sum: (e) => e.reduce((t, s) => t + s, 0),
  Average: (e) => e.length ? e.reduce((t, s) => t + s, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function An(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function mk({
  data: e,
  rowFields: t = [],
  columnFields: s = [],
  aggregateFields: o = [],
  onFieldsChange: i,
  ariaLabel: c = "Pivot table",
  className: h
}) {
  const r = t, l = s, a = o, p = (_, f, u) => {
    const x = _ === "row" ? r.filter((S) => S.property !== f) : r, $ = _ === "col" ? l.filter((S) => S.property !== f) : l, m = _ === "agg" ? a.filter((S) => !(S.property === f && S.aggregate === u)) : a;
    i?.({
      rowFields: x,
      columnFields: $,
      aggregateFields: m
    });
  }, d = (_, f) => f.map((u) => String(_[u.property])).join(""), v = [
    ...new Set(r.length ? e.map((_) => d(_, r)) : [""])
  ].sort(), y = [
    ...new Set(l.length ? e.map((_) => d(_, l)) : [""])
  ].sort(), w = (_, f, u) => {
    const x = e.filter(
      (m) => d(m, r) === _ && d(m, l) === f
    ), $ = x.map((m) => Number(m[u.property])).filter((m) => !Number.isNaN(m));
    return !$.length && u.aggregate !== "Count" ? 0 : Gn[u.aggregate](
      u.aggregate === "Count" ? x.map(() => 1) : $
    );
  }, k = (_, f, u, x) => /* @__PURE__ */ O(
    "button",
    {
      type: "button",
      className: bn.chip,
      "aria-label": `Remove ${_} field ${u}`,
      onClick: () => p(_, f, x),
      children: [
        u,
        x ? ` (${x})` : ""
      ]
    },
    `${_}-${u}-${x ?? ""}`
  );
  return /* @__PURE__ */ O("div", { className: [bn.root, h].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ O("div", { className: bn.fields, children: [
      r.map((_) => k("row", _.property, _.title ?? _.property)),
      l.map((_) => k("col", _.property, _.title ?? _.property)),
      a.map(
        (_) => k("agg", _.property, _.title ?? _.property, _.aggregate)
      )
    ] }),
    /* @__PURE__ */ O("table", { className: bn.table, role: "grid", "aria-label": c, children: [
      /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ O("tr", { children: [
        /* @__PURE__ */ n("th", { scope: "col", children: r.map((_) => _.title ?? _.property).join(" / ") || "Total" }),
        y.map((_) => /* @__PURE__ */ n("th", { scope: "col", children: _ || "—" }, _)),
        /* @__PURE__ */ n("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ O("tbody", { children: [
        v.map((_) => /* @__PURE__ */ O("tr", { children: [
          /* @__PURE__ */ n("th", { scope: "row", children: _ || "—" }),
          y.map((f) => /* @__PURE__ */ n(
            "td",
            {
              title: An(
                w(
                  _,
                  f,
                  a[0] ?? { property: "", aggregate: "Count" }
                )
              ),
              children: a.length ? An(w(_, f, a[0])) : ""
            },
            f
          )),
          /* @__PURE__ */ n("td", { className: bn.total, children: a.length ? An(
            Gn[a[0].aggregate](
              y.flatMap(
                (f) => e.filter(
                  (u) => d(u, r) === _ && d(u, l) === f
                ).map((u) => Number(u[a[0].property]))
              ).filter((f) => !Number.isNaN(f))
            )
          ) : "" })
        ] }, _)),
        /* @__PURE__ */ O("tr", { className: bn.totalRow, children: [
          /* @__PURE__ */ n("th", { scope: "row", children: "Total" }),
          y.map((_) => /* @__PURE__ */ n("td", { children: a.length ? An(
            Gn[a[0].aggregate](
              e.filter((f) => d(f, l) === _).map((f) => Number(f[a[0].property])).filter((f) => !Number.isNaN(f))
            )
          ) : "" }, _)),
          /* @__PURE__ */ n("td", { children: a.length ? An(
            Gn[a[0].aggregate](
              e.map((_) => Number(_[a[0].property])).filter((_) => !Number.isNaN(_))
            )
          ) : "" })
        ] })
      ] })
    ] })
  ] });
}
const i2 = "_root_48ysw_1", c2 = "_reverse_48ysw_10", d2 = "_item_48ysw_14", u2 = "_marker_48ysw_35", _2 = "_body_48ysw_46", f2 = "_label_48ysw_50", h2 = "_content_48ysw_56", cn = {
  root: i2,
  reverse: c2,
  item: d2,
  marker: u2,
  body: _2,
  label: f2,
  content: h2
};
function gk({
  items: e,
  reverse: t = !1,
  ariaLabel: s = "Timeline",
  className: o
}) {
  const i = t ? [...e].reverse() : e;
  return /* @__PURE__ */ n(
    "ol",
    {
      className: [cn.root, t ? cn.reverse : "", o].filter(Boolean).join(" "),
      role: "list",
      "aria-label": s,
      children: i.map((c, h) => /* @__PURE__ */ O("li", { className: cn.item, children: [
        /* @__PURE__ */ n("span", { className: cn.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ O("div", { className: cn.body, children: [
          /* @__PURE__ */ n("div", { className: cn.label, children: c.label }),
          c.content !== void 0 && /* @__PURE__ */ n("div", { className: cn.content, children: c.content })
        ] })
      ] }, h))
    }
  );
}
const p2 = "_root_4ls7q_1", m2 = "_header_4ls7q_13", g2 = "_headCell_4ls7q_22", x2 = "_row_4ls7q_32", b2 = "_cell_4ls7q_37", Tn = {
  root: p2,
  header: m2,
  headCell: g2,
  row: x2,
  cell: b2
};
function xk({
  count: e,
  rowHeight: t = 40,
  height: s = 320,
  loadData: o,
  columns: i = [],
  ariaLabel: c = "Virtual grid",
  className: h
}) {
  const [r, l] = V(
    /* @__PURE__ */ new Map()
  ), [a, p] = V(0), d = le(/* @__PURE__ */ new Set()), v = Math.ceil(s / t), y = Math.max(0, Math.floor(a / t) - 3), w = Math.min(e, y + v + 6), k = H(
    (f, u) => {
      let x = !1;
      for (let $ = f; $ < u; $++)
        !r.has($) && !d.current.has($) && (x = !0);
      if (x) {
        for (let $ = f; $ < u; $++) d.current.add($);
        o({ skip: f, top: u }).then(($) => {
          l((m) => {
            const S = new Map(m);
            return $.forEach((b, N) => S.set(f + N, b)), S;
          });
          for (let m = f; m < u; m++) d.current.delete(m);
        });
      }
    },
    [r, o]
  );
  ke(() => {
    k(y, w);
  }, [y, w]);
  const _ = [];
  for (let f = y; f < w; f++) {
    const u = r.get(f) ?? {};
    _.push(
      /* @__PURE__ */ n(
        "div",
        {
          className: Tn.row,
          role: "row",
          style: { height: t },
          children: i.map((x) => /* @__PURE__ */ n(
            "div",
            {
              role: "gridcell",
              className: Tn.cell,
              style: x.width ? { width: x.width } : void 0,
              children: String(u[x.property] ?? "")
            },
            x.property
          ))
        },
        f
      )
    );
  }
  return /* @__PURE__ */ O(
    "div",
    {
      className: [Tn.root, h].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": c,
      "aria-rowcount": e,
      tabIndex: 0,
      style: { height: s },
      onScroll: (f) => p(f.target.scrollTop),
      onKeyDown: (f) => {
        const u = f.currentTarget;
        f.key === "ArrowDown" ? (f.preventDefault(), u.scrollTop += t) : f.key === "ArrowUp" ? (f.preventDefault(), u.scrollTop -= t) : f.key === "PageDown" ? (f.preventDefault(), u.scrollTop += s) : f.key === "PageUp" && (f.preventDefault(), u.scrollTop -= s);
      },
      children: [
        /* @__PURE__ */ n("div", { style: { height: y * t }, "aria-hidden": "true" }),
        /* @__PURE__ */ n("div", { className: Tn.header, role: "row", children: i.map((f) => /* @__PURE__ */ n(
          "div",
          {
            role: "columnheader",
            className: Tn.headCell,
            style: {
              height: t,
              ...f.width ? { width: f.width } : {}
            },
            children: f.title ?? f.property
          },
          f.property
        )) }),
        _,
        /* @__PURE__ */ n(
          "div",
          {
            style: { height: Math.max(0, (e - w) * t) },
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
var zt;
((e) => {
  class t {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(r, l, a, p) {
      if (this.version = r, this.errorCorrectionLevel = l, r < t.MIN_VERSION || r > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (p < -1 || p > 7) throw new RangeError("Mask value out of range");
      this.size = r * 4 + 17;
      let d = [];
      for (let y = 0; y < this.size; y++) d.push(!1);
      for (let y = 0; y < this.size; y++)
        this.modules.push(d.slice()), this.isFunction.push(d.slice());
      this.drawFunctionPatterns();
      const v = this.addEccAndInterleave(a);
      if (this.drawCodewords(v), p == -1) {
        let y = 1e9;
        for (let w = 0; w < 8; w++) {
          this.applyMask(w), this.drawFormatBits(w);
          const k = this.getPenaltyScore();
          k < y && (p = w, y = k), this.applyMask(w);
        }
      }
      i(0 <= p && p <= 7), this.mask = p, this.applyMask(p), this.drawFormatBits(p), this.isFunction = [];
    }
    version;
    errorCorrectionLevel;
    /*-- Static factory functions (high level) --*/
    // Returns a QR Code representing the given Unicode text string at the given error correction level.
    // As a conservative upper bound, this function is guaranteed to succeed for strings that have 738 or fewer
    // Unicode code points (not UTF-16 code units) if the low error correction level is used. The smallest possible
    // QR Code version is automatically chosen for the output. The ECC level of the result may be higher than the
    // ecl argument if it can be done without increasing the version.
    static encodeText(r, l) {
      const a = e.QrSegment.makeSegments(r);
      return t.encodeSegments(a, l);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(r, l) {
      const a = e.QrSegment.makeBytes(r);
      return t.encodeSegments([a], l);
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
    static encodeSegments(r, l, a = 1, p = 40, d = -1, v = !0) {
      if (!(t.MIN_VERSION <= a && a <= p && p <= t.MAX_VERSION) || d < -1 || d > 7)
        throw new RangeError("Invalid value");
      let y, w;
      for (y = a; ; y++) {
        const u = t.getNumDataCodewords(y, l) * 8, x = c.getTotalBits(r, y);
        if (x <= u) {
          w = x;
          break;
        }
        if (y >= p)
          throw new RangeError("Data too long");
      }
      for (const u of [
        t.Ecc.MEDIUM,
        t.Ecc.QUARTILE,
        t.Ecc.HIGH
      ])
        v && w <= t.getNumDataCodewords(y, u) * 8 && (l = u);
      let k = [];
      for (const u of r) {
        s(u.mode.modeBits, 4, k), s(u.numChars, u.mode.numCharCountBits(y), k);
        for (const x of u.getData()) k.push(x);
      }
      i(k.length == w);
      const _ = t.getNumDataCodewords(y, l) * 8;
      i(k.length <= _), s(0, Math.min(4, _ - k.length), k), s(0, (8 - k.length % 8) % 8, k), i(k.length % 8 == 0);
      for (let u = 236; k.length < _; u ^= 253)
        s(u, 8, k);
      let f = [];
      for (; f.length * 8 < k.length; ) f.push(0);
      return k.forEach(
        (u, x) => f[x >>> 3] |= u << 7 - (x & 7)
      ), new t(y, l, f, d);
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
    getModule(r, l) {
      return 0 <= r && r < this.size && 0 <= l && l < this.size && this.modules[l][r];
    }
    /*-- Private helper methods for constructor: Drawing function modules --*/
    // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
      for (let a = 0; a < this.size; a++)
        this.setFunctionModule(6, a, a % 2 == 0), this.setFunctionModule(a, 6, a % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const r = this.getAlignmentPatternPositions(), l = r.length;
      for (let a = 0; a < l; a++)
        for (let p = 0; p < l; p++)
          a == 0 && p == 0 || a == 0 && p == l - 1 || a == l - 1 && p == 0 || this.drawAlignmentPattern(r[a], r[p]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(r) {
      const l = this.errorCorrectionLevel.formatBits << 3 | r;
      let a = l;
      for (let d = 0; d < 10; d++) a = a << 1 ^ (a >>> 9) * 1335;
      const p = (l << 10 | a) ^ 21522;
      i(p >>> 15 == 0);
      for (let d = 0; d <= 5; d++)
        this.setFunctionModule(8, d, o(p, d));
      this.setFunctionModule(8, 7, o(p, 6)), this.setFunctionModule(8, 8, o(p, 7)), this.setFunctionModule(7, 8, o(p, 8));
      for (let d = 9; d < 15; d++)
        this.setFunctionModule(14 - d, 8, o(p, d));
      for (let d = 0; d < 8; d++)
        this.setFunctionModule(this.size - 1 - d, 8, o(p, d));
      for (let d = 8; d < 15; d++)
        this.setFunctionModule(8, this.size - 15 + d, o(p, d));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    // Draws two copies of the version bits (with its own error correction code),
    // based on this object's version field, iff 7 <= version <= 40.
    drawVersion() {
      if (this.version < 7) return;
      let r = this.version;
      for (let a = 0; a < 12; a++) r = r << 1 ^ (r >>> 11) * 7973;
      const l = this.version << 12 | r;
      i(l >>> 18 == 0);
      for (let a = 0; a < 18; a++) {
        const p = o(l, a), d = this.size - 11 + a % 3, v = Math.floor(a / 3);
        this.setFunctionModule(d, v, p), this.setFunctionModule(v, d, p);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(r, l) {
      for (let a = -4; a <= 4; a++)
        for (let p = -4; p <= 4; p++) {
          const d = Math.max(Math.abs(p), Math.abs(a)), v = r + p, y = l + a;
          0 <= v && v < this.size && 0 <= y && y < this.size && this.setFunctionModule(v, y, d != 2 && d != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(r, l) {
      for (let a = -2; a <= 2; a++)
        for (let p = -2; p <= 2; p++)
          this.setFunctionModule(
            r + p,
            l + a,
            Math.max(Math.abs(p), Math.abs(a)) != 1
          );
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(r, l, a) {
      this.modules[l][r] = a, this.isFunction[l][r] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(r) {
      const l = this.version, a = this.errorCorrectionLevel;
      if (r.length != t.getNumDataCodewords(l, a))
        throw new RangeError("Invalid argument");
      const p = t.NUM_ERROR_CORRECTION_BLOCKS[a.ordinal][l], d = t.ECC_CODEWORDS_PER_BLOCK[a.ordinal][l], v = Math.floor(
        t.getNumRawDataModules(l) / 8
      ), y = p - v % p, w = Math.floor(v / p);
      let k = [];
      const _ = t.reedSolomonComputeDivisor(d);
      for (let u = 0, x = 0; u < p; u++) {
        let $ = r.slice(
          x,
          x + w - d + (u < y ? 0 : 1)
        );
        x += $.length;
        const m = t.reedSolomonComputeRemainder($, _);
        u < y && $.push(0), k.push($.concat(m));
      }
      let f = [];
      for (let u = 0; u < k[0].length; u++)
        k.forEach((x, $) => {
          (u != w - d || $ >= y) && f.push(x[u]);
        });
      return i(f.length == v), f;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(r) {
      if (r.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let l = 0;
      for (let a = this.size - 1; a >= 1; a -= 2) {
        a == 6 && (a = 5);
        for (let p = 0; p < this.size; p++)
          for (let d = 0; d < 2; d++) {
            const v = a - d, w = (a + 1 & 2) == 0 ? this.size - 1 - p : p;
            !this.isFunction[w][v] && l < r.length * 8 && (this.modules[w][v] = o(r[l >>> 3], 7 - (l & 7)), l++);
          }
      }
      i(l == r.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(r) {
      if (r < 0 || r > 7) throw new RangeError("Mask value out of range");
      for (let l = 0; l < this.size; l++)
        for (let a = 0; a < this.size; a++) {
          let p;
          switch (r) {
            case 0:
              p = (a + l) % 2 == 0;
              break;
            case 1:
              p = l % 2 == 0;
              break;
            case 2:
              p = a % 3 == 0;
              break;
            case 3:
              p = (a + l) % 3 == 0;
              break;
            case 4:
              p = (Math.floor(a / 3) + Math.floor(l / 2)) % 2 == 0;
              break;
            case 5:
              p = a * l % 2 + a * l % 3 == 0;
              break;
            case 6:
              p = (a * l % 2 + a * l % 3) % 2 == 0;
              break;
            case 7:
              p = ((a + l) % 2 + a * l % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[l][a] && p && (this.modules[l][a] = !this.modules[l][a]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let r = 0;
      for (let d = 0; d < this.size; d++) {
        let v = !1, y = 0, w = [0, 0, 0, 0, 0, 0, 0];
        for (let k = 0; k < this.size; k++)
          this.modules[d][k] == v ? (y++, y == 5 ? r += t.PENALTY_N1 : y > 5 && r++) : (this.finderPenaltyAddHistory(y, w), v || (r += this.finderPenaltyCountPatterns(w) * t.PENALTY_N3), v = this.modules[d][k], y = 1);
        r += this.finderPenaltyTerminateAndCount(v, y, w) * t.PENALTY_N3;
      }
      for (let d = 0; d < this.size; d++) {
        let v = !1, y = 0, w = [0, 0, 0, 0, 0, 0, 0];
        for (let k = 0; k < this.size; k++)
          this.modules[k][d] == v ? (y++, y == 5 ? r += t.PENALTY_N1 : y > 5 && r++) : (this.finderPenaltyAddHistory(y, w), v || (r += this.finderPenaltyCountPatterns(w) * t.PENALTY_N3), v = this.modules[k][d], y = 1);
        r += this.finderPenaltyTerminateAndCount(v, y, w) * t.PENALTY_N3;
      }
      for (let d = 0; d < this.size - 1; d++)
        for (let v = 0; v < this.size - 1; v++) {
          const y = this.modules[d][v];
          y == this.modules[d][v + 1] && y == this.modules[d + 1][v] && y == this.modules[d + 1][v + 1] && (r += t.PENALTY_N2);
        }
      let l = 0;
      for (const d of this.modules)
        l = d.reduce((v, y) => v + (y ? 1 : 0), l);
      const a = this.size * this.size, p = Math.ceil(Math.abs(l * 20 - a * 10) / a) - 1;
      return i(0 <= p && p <= 9), r += p * t.PENALTY_N4, i(0 <= r && r <= 2568888), r;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1) return [];
      {
        const r = Math.floor(this.version / 7) + 2, l = Math.floor(
          (this.version * 8 + r * 3 + 5) / (r * 4 - 4)
        ) * 2;
        let a = [6];
        for (let p = this.size - 7; a.length < r; p -= l)
          a.splice(1, 0, p);
        return a;
      }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(r) {
      if (r < t.MIN_VERSION || r > t.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let l = (16 * r + 128) * r + 64;
      if (r >= 2) {
        const a = Math.floor(r / 7) + 2;
        l -= (25 * a - 10) * a - 55, r >= 7 && (l -= 36);
      }
      return i(208 <= l && l <= 29648), l;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(r, l) {
      return Math.floor(t.getNumRawDataModules(r) / 8) - t.ECC_CODEWORDS_PER_BLOCK[l.ordinal][r] * t.NUM_ERROR_CORRECTION_BLOCKS[l.ordinal][r];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(r) {
      if (r < 1 || r > 255)
        throw new RangeError("Degree out of range");
      let l = [];
      for (let p = 0; p < r - 1; p++) l.push(0);
      l.push(1);
      let a = 1;
      for (let p = 0; p < r; p++) {
        for (let d = 0; d < l.length; d++)
          l[d] = t.reedSolomonMultiply(l[d], a), d + 1 < l.length && (l[d] ^= l[d + 1]);
        a = t.reedSolomonMultiply(a, 2);
      }
      return l;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(r, l) {
      let a = l.map((p) => 0);
      for (const p of r) {
        const d = p ^ a.shift();
        a.push(0), l.forEach(
          (v, y) => a[y] ^= t.reedSolomonMultiply(v, d)
        );
      }
      return a;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(r, l) {
      if (r >>> 8 || l >>> 8)
        throw new RangeError("Byte out of range");
      let a = 0;
      for (let p = 7; p >= 0; p--)
        a = a << 1 ^ (a >>> 7) * 285, a ^= (l >>> p & 1) * r;
      return i(a >>> 8 == 0), a;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(r) {
      const l = r[1];
      i(l <= this.size * 3);
      const a = l > 0 && r[2] == l && r[3] == l * 3 && r[4] == l && r[5] == l;
      return (a && r[0] >= l * 4 && r[6] >= l ? 1 : 0) + (a && r[6] >= l * 4 && r[0] >= l ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(r, l, a) {
      return r && (this.finderPenaltyAddHistory(l, a), l = 0), l += this.size, this.finderPenaltyAddHistory(l, a), this.finderPenaltyCountPatterns(a);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(r, l) {
      l[0] == 0 && (r += this.size), l.pop(), l.unshift(r);
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
  function s(h, r, l) {
    if (r < 0 || r > 31 || h >>> r)
      throw new RangeError("Value out of range");
    for (let a = r - 1; a >= 0; a--)
      l.push(h >>> a & 1);
  }
  function o(h, r) {
    return (h >>> r & 1) != 0;
  }
  function i(h) {
    if (!h) throw new Error("Assertion error");
  }
  class c {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(r, l, a) {
      if (this.mode = r, this.numChars = l, this.bitData = a, l < 0) throw new RangeError("Invalid argument");
      this.bitData = a.slice();
    }
    mode;
    numChars;
    bitData;
    /*-- Static factory functions (mid level) --*/
    // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(r) {
      let l = [];
      for (const a of r) s(a, 8, l);
      return new c(c.Mode.BYTE, r.length, l);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(r) {
      if (!c.isNumeric(r))
        throw new RangeError("String contains non-numeric characters");
      let l = [];
      for (let a = 0; a < r.length; ) {
        const p = Math.min(r.length - a, 3);
        s(parseInt(r.substring(a, a + p), 10), p * 3 + 1, l), a += p;
      }
      return new c(c.Mode.NUMERIC, r.length, l);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(r) {
      if (!c.isAlphanumeric(r))
        throw new RangeError(
          "String contains unencodable characters in alphanumeric mode"
        );
      let l = [], a;
      for (a = 0; a + 2 <= r.length; a += 2) {
        let p = c.ALPHANUMERIC_CHARSET.indexOf(r.charAt(a)) * 45;
        p += c.ALPHANUMERIC_CHARSET.indexOf(r.charAt(a + 1)), s(p, 11, l);
      }
      return a < r.length && s(
        c.ALPHANUMERIC_CHARSET.indexOf(r.charAt(a)),
        6,
        l
      ), new c(c.Mode.ALPHANUMERIC, r.length, l);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(r) {
      return r == "" ? [] : c.isNumeric(r) ? [c.makeNumeric(r)] : c.isAlphanumeric(r) ? [c.makeAlphanumeric(r)] : [c.makeBytes(c.toUtf8ByteArray(r))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(r) {
      let l = [];
      if (r < 0)
        throw new RangeError("ECI assignment value out of range");
      if (r < 128) s(r, 8, l);
      else if (r < 16384)
        s(2, 2, l), s(r, 14, l);
      else if (r < 1e6)
        s(6, 3, l), s(r, 21, l);
      else throw new RangeError("ECI assignment value out of range");
      return new c(c.Mode.ECI, 0, l);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(r) {
      return c.NUMERIC_REGEX.test(r);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(r) {
      return c.ALPHANUMERIC_REGEX.test(r);
    }
    /*-- Methods --*/
    // Returns a new copy of the data bits of this segment.
    getData() {
      return this.bitData.slice();
    }
    // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
    // the given version. The result is infinity if a segment has too many characters to fit its length field.
    static getTotalBits(r, l) {
      let a = 0;
      for (const p of r) {
        const d = p.mode.numCharCountBits(l);
        if (p.numChars >= 1 << d) return 1 / 0;
        a += 4 + d + p.bitData.length;
      }
      return a;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(r) {
      r = encodeURI(r);
      let l = [];
      for (let a = 0; a < r.length; a++)
        r.charAt(a) != "%" ? l.push(r.charCodeAt(a)) : (l.push(parseInt(r.substring(a + 1, a + 3), 16)), a += 2);
      return l;
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
})(zt || (zt = {}));
((e) => {
  ((t) => {
    class s {
      // The QR Code can tolerate about 30% erroneous codewords
      /*-- Constructor and fields --*/
      constructor(i, c) {
        this.ordinal = i, this.formatBits = c;
      }
      ordinal;
      formatBits;
      /*-- Constants --*/
      static LOW = new s(0, 1);
      // The QR Code can tolerate about  7% erroneous codewords
      static MEDIUM = new s(1, 0);
      // The QR Code can tolerate about 15% erroneous codewords
      static QUARTILE = new s(2, 3);
      // The QR Code can tolerate about 25% erroneous codewords
      static HIGH = new s(3, 2);
    }
    t.Ecc = s;
  })(e.QrCode || (e.QrCode = {}));
})(zt || (zt = {}));
((e) => {
  ((t) => {
    class s {
      /*-- Constructor and fields --*/
      constructor(i, c) {
        this.modeBits = i, this.numBitsCharCount = c;
      }
      modeBits;
      numBitsCharCount;
      /*-- Constants --*/
      static NUMERIC = new s(1, [10, 12, 14]);
      static ALPHANUMERIC = new s(2, [9, 11, 13]);
      static BYTE = new s(4, [8, 16, 16]);
      static KANJI = new s(8, [8, 10, 12]);
      static ECI = new s(7, [0, 0, 0]);
      /*-- Method --*/
      // (Package-private) Returns the bit width of the character count field for a segment in
      // this mode in a QR Code at the given version number. The result is in the range [0, 16].
      numCharCountBits(i) {
        return this.numBitsCharCount[Math.floor((i + 7) / 17)];
      }
    }
    t.Mode = s;
  })(e.QrSegment || (e.QrSegment = {}));
})(zt || (zt = {}));
const y2 = "_root_1leml_1", v2 = {
  root: y2
}, k2 = {
  low: zt.QrCode.Ecc.LOW,
  medium: zt.QrCode.Ecc.MEDIUM,
  quartile: zt.QrCode.Ecc.QUARTILE,
  high: zt.QrCode.Ecc.HIGH
};
function bk({
  value: e,
  size: t = 128,
  render: s = "svg",
  errorCorrection: o = "medium",
  margin: i = 4,
  ariaLabel: c,
  className: h,
  onError: r
}) {
  const l = c ?? `QR code for ${e}`, a = le(null), p = Qs("(prefers-color-scheme: dark)"), [d, v] = V(null);
  ke(() => {
    const $ = document.documentElement;
    v($.dataset.theme ?? null);
    const m = new MutationObserver(() => {
      v($.dataset.theme ?? null);
    });
    return m.observe($, {
      attributes: !0,
      attributeFilter: ["data-theme"]
    }), () => m.disconnect();
  }, []);
  const y = $e(() => {
    try {
      return zt.QrCode.encodeText(e, k2[o]);
    } catch {
      return null;
    }
  }, [e, o]), w = le(null);
  ke(() => {
    if (y !== null) {
      w.current = null;
      return;
    }
    const $ = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error($), (w.current?.value !== e || w.current?.onError !== r) && (w.current = { value: e, onError: r }, r?.($));
  }, [y, e, r]);
  const k = Math.max(0, Math.floor(i)), _ = [v2.root, h].filter(Boolean).join(" ");
  if (ke(() => {
    if (s !== "canvas" || y === null) return;
    const $ = a.current, m = $?.getContext("2d");
    if (!$ || !m) return;
    const S = getComputedStyle($), b = S.getPropertyValue("--dx-text-color").trim() || "#000", N = S.getPropertyValue("--dx-surface-color").trim() || "#fff";
    w2(m, y, t, k, b, N);
  }, [s, y, t, k, p, d]), y === null)
    return /* @__PURE__ */ n("div", { className: _, role: "img", "aria-label": l, "data-qr-error": "true" });
  const f = y.size + k * 2, u = t / f;
  if (s === "canvas")
    return /* @__PURE__ */ n(
      "canvas",
      {
        ref: a,
        className: _,
        width: t,
        height: t,
        role: "img",
        "aria-label": l,
        "data-value": e
      }
    );
  const x = [];
  for (let $ = 0; $ < y.size; $++)
    for (let m = 0; m < y.size; m++)
      y.getModule(m, $) && x.push(
        /* @__PURE__ */ n(
          "rect",
          {
            x: (m + k) * u,
            y: ($ + k) * u,
            width: u + 0.5,
            height: u + 0.5
          },
          `${m}-${$}`
        )
      );
  return /* @__PURE__ */ O(
    "svg",
    {
      className: _,
      width: t,
      height: t,
      viewBox: `0 0 ${t} ${t}`,
      role: "img",
      "aria-label": l,
      "data-value": e,
      children: [
        /* @__PURE__ */ n("rect", { width: t, height: t, fill: "var(--dx-surface-color)" }),
        /* @__PURE__ */ n("g", { fill: "var(--dx-text-color)", children: x })
      ]
    }
  );
}
function w2(e, t, s, o, i, c) {
  const h = s / (t.size + o * 2);
  e.fillStyle = c, e.fillRect(0, 0, s, s), e.fillStyle = i;
  for (let r = 0; r < t.size; r++)
    for (let l = 0; l < t.size; l++)
      t.getModule(l, r) && e.fillRect((l + o) * h, (r + o) * h, h + 0.5, h + 0.5);
}
const $2 = "_root_1v9la_1", N2 = "_value_1v9la_9", Fs = {
  root: $2,
  value: N2
}, Hs = [
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
], Ks = 104, O2 = 106;
function S2(e) {
  const t = [Ks];
  for (let o = 0; o < e.length; o++) {
    const i = e.charCodeAt(o);
    t.push(i >= 32 && i <= 126 ? i - 32 : 0);
  }
  let s = Ks;
  for (let o = 1; o < t.length; o++) s += o * t[o];
  return t.push(s % 103, O2), t;
}
function yk({
  value: e,
  format: t = "Code128",
  height: s = 60,
  showValue: o = !1,
  ariaLabel: i,
  className: c
}) {
  const h = i ?? `Barcode ${e}`, r = $e(() => {
    const l = [];
    let a = 0;
    for (const p of S2(e)) {
      const d = Hs[p] ?? Hs[0];
      for (let v = 0; v < d.length; v++) {
        const y = Number(d[v]);
        v % 2 === 0 && l.push({ x: a, w: y }), a += y;
      }
    }
    return { modules: l, total: a };
  }, [e]);
  return /* @__PURE__ */ O("span", { className: [Fs.root, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ O(
      "svg",
      {
        width: "100%",
        height: s,
        viewBox: `0 0 ${r.total} ${s}`,
        preserveAspectRatio: "none",
        role: "img",
        "aria-label": h,
        "data-value": e,
        children: [
          /* @__PURE__ */ n(
            "rect",
            {
              width: r.total,
              height: s,
              fill: "var(--dx-surface-color)"
            }
          ),
          r.modules.map((l, a) => /* @__PURE__ */ n(
            "rect",
            {
              x: l.x,
              y: 0,
              width: l.w,
              height: s,
              fill: "var(--dx-text-color)"
            },
            a
          ))
        ]
      }
    ),
    o && /* @__PURE__ */ n("span", { className: Fs.value, children: e })
  ] });
}
const D2 = "_root_1bgqt_1", M2 = "_svg_1bgqt_10", z2 = "_gridline_1bgqt_15", C2 = "_tickLabel_1bgqt_21", E2 = "_axisTitle_1bgqt_27", I2 = "_dataLabel_1bgqt_34", j2 = "_legend_1bgqt_40", A2 = "_legendItem_1bgqt_48", T2 = "_swatch_1bgqt_56", L2 = "_tooltip_1bgqt_63", R2 = "_visuallyHidden_1bgqt_77", ot = {
  root: D2,
  svg: M2,
  gridline: z2,
  tickLabel: C2,
  axisTitle: E2,
  dataLabel: I2,
  legend: j2,
  legendItem: A2,
  swatch: T2,
  tooltip: L2,
  visuallyHidden: R2
}, Us = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function P2(e, t, s) {
  const o = t - e || 1, i = s ?? Math.pow(10, Math.floor(Math.log10(o / 4))), c = Math.floor(e / i) * i, h = Math.ceil(t / i) * i, r = [];
  for (let l = c; l <= h + 1e-9; l += i)
    r.push(Number(l.toFixed(6)));
  return { min: c, max: h, step: i, ticks: r };
}
function vk({
  series: e,
  width: t = 600,
  height: s = 400,
  valueAxis: o,
  categoryAxis: i,
  showLegend: c = !0,
  tooltipVisible: h = !0,
  onSeriesClick: r,
  ariaLabel: l = "Chart",
  className: a
}) {
  const [p, d] = V(
    null
  ), v = $e(() => {
    const b = /* @__PURE__ */ new Set();
    for (const N of e)
      for (const E of N.data) b.add(String(E[N.categoryProperty] ?? ""));
    return [...b];
  }, [e]), y = $e(
    () => e.flatMap((b) => b.data.map((N) => Number(N[b.valueProperty]))).filter((b) => !Number.isNaN(b)),
    [e]
  ), w = o?.min ?? (y.length ? Math.min(0, ...y) : 0), k = o?.max ?? (y.length ? Math.max(...y) : 10), _ = $e(
    () => P2(w, k, o?.step),
    [w, k, o?.step]
  ), f = { t: 16, r: 16, b: 40, l: 56 }, u = t - f.l - f.r, x = s - f.t - f.b, $ = (b) => f.l + b / Math.max(1, v.length - 1) * u, m = (b) => f.t + (1 - (b - _.min) / (_.max - _.min || 1)) * x, S = (b, N) => N.color ?? Us[b % Us.length];
  return /* @__PURE__ */ O(
    "figure",
    {
      className: [ot.root, a].filter(Boolean).join(" "),
      role: "img",
      "aria-label": l,
      "aria-describedby": `${l.replace(/\s+/g, "-")}-table`,
      children: [
        /* @__PURE__ */ O(
          "svg",
          {
            width: t,
            height: s,
            className: ot.svg,
            role: "presentation",
            children: [
              o?.gridlines !== !1 && _.ticks.map((b) => /* @__PURE__ */ n(
                "line",
                {
                  x1: f.l,
                  x2: f.l + u,
                  y1: m(b),
                  y2: m(b),
                  className: ot.gridline
                },
                b
              )),
              i?.gridlines && v.map((b, N) => /* @__PURE__ */ n(
                "line",
                {
                  x1: $(N),
                  x2: $(N),
                  y1: f.t,
                  y2: f.t + x,
                  className: ot.gridline
                },
                N
              )),
              _.ticks.map((b) => /* @__PURE__ */ n(
                "text",
                {
                  x: f.l - 8,
                  y: m(b) + 4,
                  textAnchor: "end",
                  className: ot.tickLabel,
                  children: b
                },
                b
              )),
              v.map((b, N) => /* @__PURE__ */ n(
                "text",
                {
                  x: $(N),
                  y: f.t + x + 16,
                  textAnchor: "middle",
                  className: ot.tickLabel,
                  children: b
                },
                b
              )),
              o?.title && /* @__PURE__ */ n(
                "text",
                {
                  x: 12,
                  y: f.t + x / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90,12,${f.t + x / 2})`,
                  className: ot.axisTitle,
                  children: o.title
                }
              ),
              i?.title && /* @__PURE__ */ n(
                "text",
                {
                  x: f.l + u / 2,
                  y: s - 4,
                  textAnchor: "middle",
                  className: ot.axisTitle,
                  children: i.title
                }
              ),
              (() => {
                const b = /* @__PURE__ */ new Map();
                for (const I of e)
                  if (I.stack)
                    for (const C of I.data) {
                      const D = String(C[I.categoryProperty] ?? ""), g = Number(C[I.valueProperty]);
                      if (Number.isNaN(g)) continue;
                      b.has(I.stack) || b.set(I.stack, /* @__PURE__ */ new Map());
                      const z = b.get(I.stack);
                      z.set(D, (z.get(D) ?? 0) + g);
                    }
                const N = e.filter(
                  (I) => I.type === "pie" || I.type === "donut"
                ), E = /* @__PURE__ */ new Map();
                for (const I of N) {
                  const C = I.data.reduce(
                    (D, g) => D + (Number(g[I.valueProperty]) || 0),
                    0
                  );
                  E.set(I, C);
                }
                return e.map((I, C) => {
                  const D = I.data.map((j) => ({
                    cat: String(j[I.categoryProperty] ?? ""),
                    val: Number(j[I.valueProperty]),
                    size: I.sizeProperty ? Number(j[I.sizeProperty]) : void 0,
                    item: j
                  })), g = new Map(v.map((j, T) => [j, T])), z = S(C, I);
                  if (I.type === "pie" || I.type === "donut") {
                    const j = f.l + u / 2, T = f.t + x / 2, q = Math.min(u, x) / 3, X = I.type === "donut" ? I.innerRadius ?? q * 0.5 : 0, Z = E.get(I) ?? D.reduce((K, te) => K + te.val, 0);
                    let Q = -90;
                    return /* @__PURE__ */ O(
                      "g",
                      {
                        role: "list",
                        "aria-label": I.title ?? `Series ${C + 1}`,
                        children: [
                          /* @__PURE__ */ n("title", { children: I.title ?? `Series ${C + 1}` }),
                          D.map((K, te) => {
                            const oe = Z ? K.val / Z * 360 : 0, ee = Q, R = Q + oe;
                            Q = R;
                            const ie = oe > 180 ? 1 : 0, Y = (Qe) => Qe * Math.PI / 180, de = j + q * Math.cos(Y(ee)), ae = T + q * Math.sin(Y(ee)), be = j + q * Math.cos(Y(R)), we = T + q * Math.sin(Y(R)), Be = j + X * Math.cos(Y(R)), ve = T + X * Math.sin(Y(R)), Xe = j + X * Math.cos(Y(ee)), xe = T + X * Math.sin(Y(ee)), Ze = X ? `M ${de} ${ae} A ${q} ${q} 0 ${ie} 1 ${be} ${we} L ${Be} ${ve} A ${X} ${X} 0 ${ie} 0 ${Xe} ${xe} Z` : `M ${j} ${T} L ${de} ${ae} A ${q} ${q} 0 ${ie} 1 ${be} ${we} Z`, Ve = (ee + R) / 2, Re = j + (q + 12) * Math.cos(Y(Ve)), tt = T + (q + 12) * Math.sin(Y(Ve));
                            return /* @__PURE__ */ O("g", { role: "listitem", children: [
                              /* @__PURE__ */ n(
                                "path",
                                {
                                  d: Ze,
                                  fill: z,
                                  stroke: "var(--dx-surface-color)",
                                  strokeWidth: 1,
                                  onMouseEnter: () => h && d({
                                    x: Re,
                                    y: tt,
                                    text: `${I.title ?? K.cat}: ${K.val}`
                                  }),
                                  onMouseLeave: () => d(null),
                                  onClick: () => r?.({
                                    seriesTitle: I.title ?? "",
                                    category: K.cat,
                                    value: K.val,
                                    item: K.item
                                  }),
                                  style: { cursor: "pointer" }
                                }
                              ),
                              I.labels?.visible && /* @__PURE__ */ n(
                                "text",
                                {
                                  x: Re,
                                  y: tt,
                                  textAnchor: "middle",
                                  className: ot.dataLabel,
                                  children: K.val
                                }
                              )
                            ] }, te);
                          })
                        ]
                      },
                      C
                    );
                  }
                  if (I.type === "scatter" || I.type === "bubble")
                    return /* @__PURE__ */ O(
                      "g",
                      {
                        role: "list",
                        "aria-label": I.title ?? `Series ${C + 1}`,
                        children: [
                          /* @__PURE__ */ n("title", { children: I.title ?? `Series ${C + 1}` }),
                          D.map((j, T) => {
                            const q = g.get(j.cat) ?? 0, X = Number(D[T].cat), Z = Number.isNaN(X) ? $(q) : f.l + (X - _.min) / (_.max - _.min || 1) * u, Q = m(j.val), K = I.type === "bubble" && j.size !== void 0 ? Math.max(4, Math.min(12, j.size / 10)) : 4;
                            return /* @__PURE__ */ O("g", { role: "listitem", children: [
                              /* @__PURE__ */ n(
                                "circle",
                                {
                                  cx: Z,
                                  cy: Q,
                                  r: K,
                                  fill: z,
                                  stroke: "var(--dx-surface-color)",
                                  strokeWidth: 1.5
                                }
                              ),
                              /* @__PURE__ */ n(
                                "circle",
                                {
                                  cx: Z,
                                  cy: Q,
                                  r: 12,
                                  fill: "transparent",
                                  onMouseEnter: () => h && d({
                                    x: Z,
                                    y: Q,
                                    text: `${I.title ?? j.cat}: ${j.val}`
                                  }),
                                  onMouseLeave: () => d(null),
                                  onClick: () => r?.({
                                    seriesTitle: I.title ?? "",
                                    category: j.cat,
                                    value: j.val,
                                    item: j.item
                                  }),
                                  style: { cursor: "pointer" }
                                }
                              )
                            ] }, T);
                          })
                        ]
                      },
                      C
                    );
                  if (I.type === "line" || I.type === "area") {
                    const j = (X) => {
                      if (!I.stack) return _.min;
                      let Z = 0;
                      for (let Q = 0; Q < C; Q++) {
                        const K = e[Q];
                        if (K?.stack !== I.stack) continue;
                        const te = K.data.find(
                          (oe) => String(oe[K.categoryProperty] ?? "") === X
                        );
                        te && (Z += Number(te[K.valueProperty]) || 0);
                      }
                      return Z;
                    }, T = D.map((X) => {
                      const Z = g.get(X.cat) ?? 0, Q = j(X.cat);
                      return `${Z === 0 ? "M" : "L"} ${$(Z)} ${m(Q + X.val)}`;
                    }).join(" "), q = D.map((X) => {
                      const Z = g.get(X.cat) ?? 0, Q = j(X.cat);
                      return `${Z === 0 ? "M" : "L"} ${$(Z)} ${m(Q)}`;
                    }).join(" ");
                    return /* @__PURE__ */ O(
                      "g",
                      {
                        role: "list",
                        "aria-label": I.title ?? `Series ${C + 1}`,
                        children: [
                          /* @__PURE__ */ n("title", { children: I.title ?? `Series ${C + 1}` }),
                          I.type === "area" && /* @__PURE__ */ n(
                            "path",
                            {
                              d: `${T} L ${$(D.length - 1)} ${m(j(D[D.length - 1].cat))} L ${$(0)} ${m(j(D[0].cat))} Z`,
                              fill: z,
                              fillOpacity: 0.25,
                              stroke: "none"
                            }
                          ),
                          /* @__PURE__ */ n("path", { d: T, fill: "none", stroke: z, strokeWidth: 2 }),
                          I.stack && /* @__PURE__ */ n("path", { d: q, fill: "none", stroke: "transparent" }),
                          D.map((X, Z) => {
                            const Q = g.get(X.cat) ?? 0, K = j(X.cat), te = $(Q), oe = m(K + X.val);
                            return /* @__PURE__ */ O("g", { role: "listitem", children: [
                              /* @__PURE__ */ n(
                                "circle",
                                {
                                  cx: te,
                                  cy: oe,
                                  r: 4,
                                  fill: z,
                                  stroke: "var(--dx-surface-color)",
                                  strokeWidth: 1.5
                                }
                              ),
                              /* @__PURE__ */ n(
                                "rect",
                                {
                                  x: te - 12,
                                  y: oe - 12,
                                  width: 24,
                                  height: 24,
                                  fill: "transparent",
                                  onMouseEnter: () => h && d({
                                    x: te,
                                    y: oe,
                                    text: `${I.title ?? X.cat}: ${X.val}`
                                  }),
                                  onMouseLeave: () => d(null),
                                  onFocus: () => h && d({
                                    x: te,
                                    y: oe,
                                    text: `${I.title ?? X.cat}: ${X.val}`
                                  }),
                                  onBlur: () => d(null),
                                  onClick: () => r?.({
                                    seriesTitle: I.title ?? "",
                                    category: X.cat,
                                    value: X.val,
                                    item: X.item
                                  }),
                                  style: { cursor: "pointer" }
                                }
                              ),
                              I.labels?.visible && /* @__PURE__ */ n(
                                "text",
                                {
                                  x: te,
                                  y: oe - 8,
                                  textAnchor: "middle",
                                  className: ot.dataLabel,
                                  children: X.val
                                }
                              )
                            ] }, Z);
                          })
                        ]
                      },
                      C
                    );
                  }
                  const P = I.type === "bar";
                  return /* @__PURE__ */ O(
                    "g",
                    {
                      role: "list",
                      "aria-label": I.title ?? `Series ${C + 1}`,
                      children: [
                        /* @__PURE__ */ n("title", { children: I.title ?? `Series ${C + 1}` }),
                        D.map((j, T) => {
                          const q = g.get(j.cat) ?? 0;
                          let X = 0;
                          if (I.stack)
                            for (let ae = 0; ae < C; ae++) {
                              const be = e[ae];
                              if (be?.stack !== I.stack) continue;
                              const we = be.data.find(
                                (Be) => String(Be[be.categoryProperty] ?? "") === j.cat
                              );
                              we && (X += Number(we[be.valueProperty]) || 0);
                            }
                          const Z = X + j.val, Q = e.filter(
                            (ae) => !ae.stack || ae.stack === I.stack
                          ).length, K = u / v.length, te = P ? 18 : Math.max(
                            12,
                            K / (I.stack ? 1 : e.length) - 4
                          ), oe = P ? f.l + X / (_.max - _.min || 1) * u : $(q) - te / 2 + (I.stack ? 0 : C % Q * te), ee = P ? f.t + q * x / v.length + 4 : m(Z), R = P ? j.val / (_.max - _.min || 1) * u : te - 4, ie = P ? 16 : m(X) - m(Z), Y = P ? f.l + X / (_.max - _.min || 1) * u : oe, de = P ? f.t + q * x / v.length + 4 : ee;
                          return /* @__PURE__ */ O("g", { role: "listitem", children: [
                            /* @__PURE__ */ n(
                              "rect",
                              {
                                x: Y,
                                y: de,
                                width: P ? R : te - 4,
                                height: ie,
                                fill: z,
                                rx: 2,
                                onMouseEnter: () => h && d({
                                  x: Y + (P ? R : te) / 2,
                                  y: de,
                                  text: `${I.title ?? j.cat}: ${j.val}`
                                }),
                                onMouseLeave: () => d(null),
                                onClick: () => r?.({
                                  seriesTitle: I.title ?? "",
                                  category: j.cat,
                                  value: j.val,
                                  item: j.item
                                }),
                                style: { cursor: "pointer" }
                              }
                            ),
                            I.labels?.visible && /* @__PURE__ */ n(
                              "text",
                              {
                                x: Y + (P ? R : te) / 2,
                                y: de - 4,
                                textAnchor: "middle",
                                className: ot.dataLabel,
                                children: j.val
                              }
                            )
                          ] }, T);
                        })
                      ]
                    },
                    C
                  );
                });
              })()
            ]
          }
        ),
        p && /* @__PURE__ */ n(
          "div",
          {
            className: ot.tooltip,
            style: { left: p.x, top: p.y - 28 },
            children: p.text
          }
        ),
        c && /* @__PURE__ */ n("div", { className: ot.legend, children: e.map((b, N) => /* @__PURE__ */ O("span", { className: ot.legendItem, children: [
          /* @__PURE__ */ n(
            "span",
            {
              className: ot.swatch,
              style: { backgroundColor: S(N, b) },
              "aria-hidden": "true"
            }
          ),
          b.title ?? `Series ${N + 1}`
        ] }, N)) }),
        /* @__PURE__ */ O(
          "table",
          {
            className: ot.visuallyHidden,
            id: `${l.replace(/\s+/g, "-")}-table`,
            children: [
              /* @__PURE__ */ n("caption", { children: l }),
              /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ O("tr", { children: [
                /* @__PURE__ */ n("th", { children: "Series" }),
                /* @__PURE__ */ n("th", { children: "Category" }),
                /* @__PURE__ */ n("th", { children: "Value" })
              ] }) }),
              /* @__PURE__ */ n("tbody", { children: e.map(
                (b) => b.data.map((N, E) => /* @__PURE__ */ O("tr", { children: [
                  /* @__PURE__ */ n("td", { children: b.title ?? "" }),
                  /* @__PURE__ */ n("td", { children: String(N[b.categoryProperty] ?? "") }),
                  /* @__PURE__ */ n("td", { children: String(N[b.valueProperty] ?? "") })
                ] }, `${b.title}-${E}`))
              ) })
            ]
          }
        )
      ]
    }
  );
}
export {
  fc as ALERT_ICON,
  Iv as Accordion,
  bv as Alert,
  $v as AutoGrid,
  Lv as Autocomplete,
  Cv as Avatar,
  K2 as Badge,
  yk as Barcode,
  Ov as Body,
  lk as Breadcrumb,
  F2 as Button,
  H2 as Card,
  uk as Carousel,
  vk as Chart,
  hv as Checkbox,
  Pv as Checkboxlist,
  Xv as Colorpicker,
  kv as Column,
  Nn as DEFAULT_OPERATOR_BY_TYPE,
  m0 as DEFAULT_PALETTE,
  cv as DataFilter,
  dv as DataGrid,
  uv as DataList,
  Vv as Datepicker,
  mv as Dialog,
  tk as DropZone,
  Tv as Dropdown,
  V2 as EmptyState,
  Gs as FILTER_OPERATORS,
  ok as FabMenu,
  G2 as Field,
  Z2 as Fieldset,
  Mh as Footer,
  J2 as Form,
  Y2 as FormField,
  pk as Gantt,
  Eh as Header,
  Ne as Icon,
  fv as Input,
  _v as Label,
  Nv as Layout,
  ak as Link,
  Rv as Listbox,
  Uv as Mask,
  nk as Menu,
  Wv as Numeric,
  Ul as Pager,
  sk as PanelMenu,
  Kv as Password,
  fk as PickList,
  mk as Pivot,
  rk as ProfileMenu,
  Dv as Progress,
  bk as QRCode,
  Bv as Radiobuttonlist,
  Gv as Rating,
  vv as Row,
  hk as Scheduler,
  Jv as SecurityCode,
  yn as Select,
  qv as Selectbar,
  Kh as Sidebar,
  Sv as SidebarToggle,
  Qv as SignaturePad,
  yv as Skeleton,
  Yv as Slider,
  Hv as Splitbutton,
  ck as Splitter,
  wv as Stack,
  W2 as Stat,
  ik as Steps,
  oi as Switch,
  X2 as Table,
  Ev as Tabs,
  Av as Text,
  jv as Textarea,
  ti as Textbox,
  zv as ThemeSwitcher,
  gk as Timeline,
  Zv as Timespanpicker,
  xv as ToastProvider,
  dk as Toc,
  Fv as Togglebutton,
  pv as Tooltip,
  _k as Tree,
  ek as Upload,
  xk as VirtualGrid,
  Zs as applyFilters,
  Jl as applyGridState,
  Sn as columnValue,
  ov as compare,
  av as custom,
  Gl as cycleSort,
  Ql as defaultOperatorForType,
  ev as email,
  Es as formatMasked,
  vs as formatValue,
  Zn as getByPath,
  U2 as iconNames,
  Ys as matchesFilters,
  sv as maxLength,
  nv as minLength,
  Zl as paginate,
  tv as pattern,
  rv as range,
  Q2 as required,
  lv as requiredTrue,
  _s as resolveVariant,
  Jo as runValidators,
  Mv as shadeClass,
  pl as sortItems,
  Yl as sortedItems,
  dl as toFilterString,
  hl as toODataFilterString,
  Zo as useFormContext,
  iv as useFormField,
  Qs as useMediaQuery,
  gv as useToast
};
