import { jsx as s, jsxs as D, Fragment as Oe } from "react/jsx-runtime";
import { forwardRef as Fe, useId as qe, isValidElement as pt, cloneElement as ps, useState as X, useRef as oe, useCallback as B, useMemo as be, useContext as kn, createContext as ns, useEffect as ye, Fragment as ir, Children as Bn, useImperativeHandle as ms } from "react";
function vn(e) {
  return e == null || e === "default" || e === "medium" ? null : `shade-${e}`;
}
const cr = "_button_1anap_1", dr = "_filled_1anap_36", ur = "_flat_1anap_55", _r = "_outlined_1anap_58", fr = "_text_1anap_63", hr = "_loading_1anap_504", pr = "_spinner_1anap_507", mr = "_xs_1anap_523", gr = "_sm_1anap_529", xr = "_md_1anap_535", br = "_lg_1anap_541", yr = "_xl_1anap_547", vr = "_iconOnly_1anap_553", kr = "_fullWidth_1anap_583", Bt = {
  button: cr,
  filled: dr,
  flat: ur,
  outlined: _r,
  text: fr,
  "style-primary": "_style-primary_1anap_82",
  "style-secondary": "_style-secondary_1anap_101",
  "style-base": "_style-base_1anap_119",
  "style-light": "_style-light_1anap_139",
  "style-dark": "_style-dark_1anap_157",
  "style-danger": "_style-danger_1anap_176",
  "style-success": "_style-success_1anap_195",
  "style-warning": "_style-warning_1anap_214",
  "style-info": "_style-info_1anap_233",
  "shade-lighter": "_shade-lighter_1anap_416",
  "shade-light": "_shade-light_1anap_416",
  "shade-dark": "_shade-dark_1anap_426",
  "shade-darker": "_shade-darker_1anap_430",
  loading: hr,
  spinner: pr,
  "dx-spin": "_dx-spin_1anap_1",
  xs: mr,
  sm: gr,
  md: xr,
  lg: br,
  xl: yr,
  iconOnly: vr,
  fullWidth: kr
};
function wr(e, t) {
  const n = t, o = e ?? "filled";
  return { variant: o === "filled" || o === "flat" || o === "outlined" || o === "text" ? o : "filled", style: n ?? "primary" };
}
const Q2 = Fe(
  function(t, n) {
    const {
      variant: o = "filled",
      severity: i,
      shade: c = "default",
      size: _ = "md",
      fullWidth: r = !1,
      iconOnly: l = !1,
      loading: a = !1,
      visible: d = !0,
      className: u,
      disabled: k,
      children: v,
      ...w
    } = t;
    if (d === !1) return null;
    const x = wr(o, i), h = x.style === "light" || x.style === "dark" ? null : vn(c), f = [
      Bt.button,
      Bt[x.variant],
      Bt[`style-${x.style}`],
      h ? Bt[h] : null,
      Bt[_],
      r ? Bt.fullWidth : null,
      l ? Bt.iconOnly : null,
      a ? Bt.loading : null,
      // Press feedback on every button (Radzen material parity).
      "dx-ripple",
      u
    ].filter(Boolean).join(" "), y = /* @__PURE__ */ D(Oe, { children: [
      a ? /* @__PURE__ */ s("span", { "aria-hidden": "true", className: Bt.spinner }) : null,
      v
    ] }), $ = t.href;
    if ($ != null) {
      const { onClick: b, ...O } = w, E = k || a;
      return /* @__PURE__ */ s(
        "a",
        {
          ref: n,
          href: $,
          className: f,
          "aria-disabled": E || void 0,
          "aria-busy": a || void 0,
          onClick: (M) => {
            if (E) {
              M.preventDefault();
              return;
            }
            b?.(M);
          },
          ...O,
          children: y
        }
      );
    }
    const { type: m = "button", ...C } = w;
    return /* @__PURE__ */ s(
      "button",
      {
        ref: n,
        type: m,
        className: f,
        disabled: k || a,
        "aria-busy": a || void 0,
        ...C,
        children: y
      }
    );
  }
), $r = "_card_16nyh_1", Nr = "_elevated_16nyh_8", Or = "_filled_16nyh_13", Sr = "_outlined_16nyh_18", Dr = "_interactive_16nyh_22", Mr = "_text_16nyh_30", Cr = "_header_16nyh_46", zr = "_body_16nyh_53", Er = "_footer_16nyh_63", wn = {
  card: $r,
  elevated: Nr,
  filled: Or,
  outlined: Sr,
  interactive: Dr,
  text: Mr,
  header: Cr,
  body: zr,
  footer: Er
}, ev = Fe(function({
  variant: t = "elevated",
  header: n,
  footer: o,
  className: i,
  visible: c = !0,
  children: _,
  onKeyDown: r,
  ...l
}, a) {
  if (c === !1) return null;
  const d = t === "interactive";
  return (
    // Interactivity is conditional on variant="interactive" (role + tabIndex
    // travel together); static analysis cannot see that.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ D(
      "div",
      {
        ref: a,
        role: d ? "button" : void 0,
        tabIndex: d ? 0 : void 0,
        onKeyDown: (u) => {
          r?.(u), !(!d || u.key !== "Enter" && u.key !== " ") && (u.preventDefault(), u.currentTarget.click());
        },
        className: [wn.card, wn[t], i].filter(Boolean).join(" "),
        ...l,
        children: [
          n != null && /* @__PURE__ */ s("div", { className: wn.header, children: n }),
          /* @__PURE__ */ s("div", { className: wn.body, children: _ }),
          o != null && /* @__PURE__ */ s("div", { className: wn.footer, children: o })
        ]
      }
    )
  );
});
function gs(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const Ir = "_badge_154mm_1", Ar = "_xs_154mm_21", jr = "_sm_154mm_26", Tr = "_md_154mm_31", Lr = "_lg_154mm_36", Pr = "_xl_154mm_41", Rr = "_neutral_154mm_47", Br = "_primary_154mm_52", qr = "_secondary_154mm_61", Fr = "_light_154mm_66", Hr = "_base_154mm_71", Kr = "_dark_154mm_76", Ur = "_info_154mm_81", Wr = "_success_154mm_86", Xr = "_warning_154mm_95", Vr = "_danger_154mm_104", Gr = "_filled_154mm_111", Yr = "_outlined_154mm_161", Zr = "_text_154mm_213", $n = {
  badge: Ir,
  xs: Ar,
  sm: jr,
  md: Tr,
  lg: Lr,
  xl: Pr,
  neutral: Rr,
  primary: Br,
  secondary: qr,
  light: Fr,
  base: Hr,
  dark: Kr,
  info: Ur,
  success: Wr,
  warning: Xr,
  danger: Vr,
  filled: Gr,
  outlined: Yr,
  text: Zr,
  "shade-lighter": "_shade-lighter_154mm_484",
  "shade-light": "_shade-light_154mm_484",
  "shade-dark": "_shade-dark_154mm_492",
  "shade-darker": "_shade-darker_154mm_495"
}, tv = Fe(function({
  severity: t = "primary",
  variant: n = "filled",
  shade: o,
  size: i = "md",
  className: c,
  visible: _ = !0,
  children: r,
  ...l
}, a) {
  if (_ === !1) return null;
  const d = t, u = gs(n, "filled"), k = vn(o);
  return /* @__PURE__ */ s(
    "span",
    {
      ref: a,
      className: [
        $n.badge,
        $n[i],
        $n[d],
        $n[u],
        k ? $n[k] : null,
        c
      ].filter(Boolean).join(" "),
      ...l,
      children: r
    }
  );
}), Jr = "_xs_2a6lm_2", Qr = "_sm_2a6lm_7", eo = "_md_2a6lm_1", to = "_lg_2a6lm_17", no = "_xl_2a6lm_22", so = {
  xs: Jr,
  sm: Qr,
  md: eo,
  lg: to,
  xl: no
}, nv = [
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
], ro = {
  check: /* @__PURE__ */ s("path", { d: "M20 6L9 17l-5-5" }),
  close: /* @__PURE__ */ s("path", { d: "M18 6L6 18M6 6l12 12" }),
  "chevron-down": /* @__PURE__ */ s("path", { d: "M6 9l6 6 6-6" }),
  "chevron-left": /* @__PURE__ */ s("path", { d: "M15 18l-6-6 6-6" }),
  "chevron-right": /* @__PURE__ */ s("path", { d: "M9 18l6-6-6-6" }),
  "chevron-up": /* @__PURE__ */ s("path", { d: "M18 15l-6-6-6 6" }),
  search: /* @__PURE__ */ D(Oe, { children: [
    /* @__PURE__ */ s("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ s("path", { d: "M21 21l-4.3-4.3" })
  ] }),
  plus: /* @__PURE__ */ s("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ s("path", { d: "M5 12h14" }),
  alert: /* @__PURE__ */ D(Oe, { children: [
    /* @__PURE__ */ s("path", { d: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" }),
    /* @__PURE__ */ s("path", { d: "M12 9v4M12 17h.01" })
  ] }),
  info: /* @__PURE__ */ D(Oe, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ s("path", { d: "M12 16v-4M12 8h.01" })
  ] }),
  "arrow-right": /* @__PURE__ */ s("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  "arrow-left": /* @__PURE__ */ s("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  "external-link": /* @__PURE__ */ D(Oe, { children: [
    /* @__PURE__ */ s("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
    /* @__PURE__ */ s("path", { d: "M15 3h6v6M10 14L21 3" })
  ] }),
  copy: /* @__PURE__ */ D(Oe, { children: [
    /* @__PURE__ */ s("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ s("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] }),
  trash: /* @__PURE__ */ s(Oe, { children: /* @__PURE__ */ s("path", { d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" }) }),
  edit: /* @__PURE__ */ D(Oe, { children: [
    /* @__PURE__ */ s("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ s("path", { d: "M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  settings: /* @__PURE__ */ D(Oe, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ s("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] }),
  user: /* @__PURE__ */ D(Oe, { children: [
    /* @__PURE__ */ s("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ s("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ D(Oe, { children: [
    /* @__PURE__ */ s("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ s("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ s("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  download: /* @__PURE__ */ s("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  upload: /* @__PURE__ */ s("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  menu: /* @__PURE__ */ s("path", { d: "M3 12h18M3 6h18M3 18h18" }),
  "more-horizontal": /* @__PURE__ */ D(Oe, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ s("circle", { cx: "19", cy: "12", r: "1" }),
    /* @__PURE__ */ s("circle", { cx: "5", cy: "12", r: "1" })
  ] }),
  mail: /* @__PURE__ */ D(Oe, { children: [
    /* @__PURE__ */ s("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ s("path", { d: "M22 6l-10 7L2 6" })
  ] }),
  lock: /* @__PURE__ */ D(Oe, { children: [
    /* @__PURE__ */ s("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ s("path", { d: "M7 11V7a5 5 0 0110 0v4" })
  ] }),
  eye: /* @__PURE__ */ D(Oe, { children: [
    /* @__PURE__ */ s("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  "eye-off": /* @__PURE__ */ D(Oe, { children: [
    /* @__PURE__ */ s("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ s("path", { d: "M1 1l22 22" })
  ] }),
  refresh: /* @__PURE__ */ D(Oe, { children: [
    /* @__PURE__ */ s("path", { d: "M23 4v6h-6M1 20v-6h6" }),
    /* @__PURE__ */ s("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
  ] }),
  calendar: /* @__PURE__ */ D(Oe, { children: [
    /* @__PURE__ */ s("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ s("path", { d: "M16 2v4M8 2v4M3 10h18" })
  ] }),
  clock: /* @__PURE__ */ D(Oe, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ s("path", { d: "M12 6v6l4 2" })
  ] }),
  "check-circle": /* @__PURE__ */ D(Oe, { children: [
    /* @__PURE__ */ s("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ s("path", { d: "M22 4L12 14.01l-3-3" })
  ] }),
  "x-circle": /* @__PURE__ */ D(Oe, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ s("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] }),
  shield: /* @__PURE__ */ s(Oe, { children: /* @__PURE__ */ s("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  globe: /* @__PURE__ */ D(Oe, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ s("path", { d: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
  ] }),
  file: /* @__PURE__ */ D(Oe, { children: [
    /* @__PURE__ */ s("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
    /* @__PURE__ */ s("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
  ] }),
  folder: /* @__PURE__ */ s("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" }),
  home: /* @__PURE__ */ D(Oe, { children: [
    /* @__PURE__ */ s("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
    /* @__PURE__ */ s("path", { d: "M9 22V12h6v10" })
  ] }),
  key: /* @__PURE__ */ s(Oe, { children: /* @__PURE__ */ s("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) }),
  link: /* @__PURE__ */ D(Oe, { children: [
    /* @__PURE__ */ s("path", { d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" }),
    /* @__PURE__ */ s("path", { d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" })
  ] }),
  star: /* @__PURE__ */ s(
    "path",
    {
      fill: "currentColor",
      stroke: "none",
      d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
    }
  ),
  "star-outline": /* @__PURE__ */ s("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.54 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" }),
  ban: /* @__PURE__ */ D(Oe, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ s("path", { d: "M4.93 4.93l14.14 14.14" })
  ] })
}, Ne = Fe(function({ name: t, size: n = "md", strokeWidth: o = 2, className: i, ...c }, _) {
  const r = typeof n == "string";
  return /* @__PURE__ */ s(
    "svg",
    {
      ref: _,
      className: [r ? so[n] : null, i].filter(Boolean).join(" "),
      width: r ? void 0 : n,
      height: r ? void 0 : n,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: o,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      ...c,
      children: ro[t]
    }
  );
}), oo = "_stat_sjin9_1", lo = "_label_sjin9_8", ao = "_row_sjin9_16", io = "_value_sjin9_22", co = "_delta_sjin9_28", uo = "_success_sjin9_33", _o = "_danger_sjin9_37", fo = "_neutral_sjin9_41", ho = "_hint_sjin9_45", nn = {
  stat: oo,
  label: lo,
  row: ao,
  value: io,
  delta: co,
  success: uo,
  danger: _o,
  neutral: fo,
  hint: ho
}, sv = Fe(function({ label: t, value: n, delta: o, deltaTone: i = "neutral", hint: c, className: _, ...r }, l) {
  return /* @__PURE__ */ D(
    "div",
    {
      ref: l,
      className: [nn.stat, _].filter(Boolean).join(" "),
      ...r,
      children: [
        /* @__PURE__ */ s("div", { className: nn.label, children: t }),
        /* @__PURE__ */ D("div", { className: nn.row, children: [
          /* @__PURE__ */ s("div", { className: nn.value, children: n }),
          o != null && /* @__PURE__ */ s("div", { className: [nn.delta, nn[i]].join(" "), children: o })
        ] }),
        c != null && /* @__PURE__ */ s("div", { className: nn.hint, children: c })
      ]
    }
  );
}), po = "_wrap_1nflq_1", mo = "_table_1nflq_8", go = "_caption_1nflq_14", xo = "_none_1nflq_51", bo = "_horizontal_1nflq_57", yo = "_vertical_1nflq_67", vo = "_alternating_1nflq_85", ko = "_start_1nflq_89", wo = "_center_1nflq_93", $o = "_end_1nflq_97", No = "_empty_1nflq_101", Yt = {
  wrap: po,
  table: mo,
  caption: go,
  none: xo,
  horizontal: bo,
  vertical: yo,
  alternating: vo,
  start: ko,
  center: wo,
  end: $o,
  empty: No
};
function rv({
  columns: e,
  rows: t,
  rowKey: n,
  empty: o,
  caption: i,
  gridLines: c = "default",
  allowAlternatingRows: _ = !0,
  className: r,
  visible: l = !0
}) {
  if (l === !1) return null;
  const a = c === "default" || c === "both" ? "" : Yt[c];
  return /* @__PURE__ */ D("div", { className: [Yt.wrap, r].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ D(
      "table",
      {
        className: [
          Yt.table,
          a,
          _ ? Yt.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          i != null && /* @__PURE__ */ s("caption", { className: Yt.caption, children: i }),
          /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ s("tr", { children: e.map((d) => /* @__PURE__ */ s(
            "th",
            {
              className: d.align != null ? Yt[d.align] : void 0,
              scope: "col",
              children: d.header
            },
            d.key
          )) }) }),
          /* @__PURE__ */ s("tbody", { children: t.map((d) => /* @__PURE__ */ s("tr", { children: e.map((u) => /* @__PURE__ */ s(
            "td",
            {
              className: u.align != null ? Yt[u.align] : void 0,
              children: u.render != null ? u.render(d) : d[u.key]
            },
            u.key
          )) }, n(d))) })
        ]
      }
    ),
    t.length === 0 && o != null && /* @__PURE__ */ s("div", { className: Yt.empty, children: o })
  ] });
}
const Oo = "_emptyState_1swxw_1", So = "_icon_1swxw_13", Do = "_title_1swxw_18", Mo = "_description_1swxw_24", Co = "_action_1swxw_30", Nn = {
  emptyState: Oo,
  icon: So,
  title: Do,
  description: Mo,
  action: Co
};
function ov({
  icon: e,
  title: t,
  description: n,
  action: o,
  className: i,
  visible: c = !0
}) {
  return c === !1 ? null : /* @__PURE__ */ D("div", { className: [Nn.emptyState, i].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ s("div", { className: Nn.icon, children: e }),
    /* @__PURE__ */ s("div", { className: Nn.title, children: t }),
    n != null && /* @__PURE__ */ s("div", { className: Nn.description, children: n }),
    o != null && /* @__PURE__ */ s("div", { className: Nn.action, children: o })
  ] });
}
const zo = "_field_149oz_1", Eo = "_label_149oz_8", Io = "_required_149oz_14", Ao = "_hint_149oz_19", jo = "_error_149oz_24", On = {
  field: zo,
  label: Eo,
  required: Io,
  hint: Ao,
  error: jo
};
function lv({
  label: e,
  htmlFor: t,
  required: n,
  hint: o,
  supporting: i,
  error: c,
  children: _,
  className: r,
  visible: l = !0
}) {
  const a = o ?? i, d = qe(), u = qe(), k = qe();
  if (l === !1) return null;
  const v = c != null ? u : a != null ? k : null, w = typeof _ == "function" ? _({ inputId: d, hintId: k, errorId: u }) : _, x = pt(w) && typeof w.props.id == "string" ? w.props.id : void 0, g = x ?? t ?? d, h = pt(w) && (v != null || x == null && typeof w.type == "string"), f = x != null || t != null || h, y = h && pt(w) ? ps(w, {
    id: g,
    "aria-describedby": v != null ? [
      w.props["aria-describedby"],
      v
    ].filter(($) => typeof $ == "string").join(" ") || void 0 : w.props["aria-describedby"],
    "aria-invalid": c != null ? !0 : w.props["aria-invalid"]
  }) : w;
  return /* @__PURE__ */ D("div", { className: [On.field, r].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ D(
      "label",
      {
        className: On.label,
        htmlFor: f ? g : void 0,
        children: [
          e,
          n === !0 && /* @__PURE__ */ s("span", { className: On.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    y,
    c != null ? /* @__PURE__ */ s("div", { id: u, className: On.error, "aria-live": "polite", children: c }) : a != null ? /* @__PURE__ */ s("div", { id: k, className: On.hint, children: a }) : null
  ] });
}
const To = "_formfield_1kmwl_1", Lo = "_content_1kmwl_8", Po = "_floating_1kmwl_43", Ro = "_label_1kmwl_111", Bo = "_start_1kmwl_132", qo = "_required_1kmwl_169", Fo = "_end_1kmwl_175", Ho = "_filled_1kmwl_192", Ko = "_flat_1kmwl_199", Uo = "_helper_1kmwl_206", Wo = "_invalid_1kmwl_211", Et = {
  formfield: To,
  content: Lo,
  floating: Po,
  label: Ro,
  start: Bo,
  required: qo,
  end: Fo,
  filled: Ho,
  flat: Ko,
  helper: Uo,
  invalid: Wo
};
function av({
  text: e,
  start: t,
  end: n,
  helper: o,
  component: i,
  allowFloatingLabel: c = !0,
  variant: _ = "outlined",
  invalid: r = !1,
  required: l = !1,
  children: a,
  className: d,
  visible: u = !0
}) {
  const k = qe(), v = qe();
  if (u === !1) return null;
  const w = i ?? k, x = typeof a == "function" ? a({
    inputId: w
  }) : a, g = pt(x) ? x.type : null, h = typeof g == "string", f = pt(x) && typeof g != "symbol", y = pt(x) ? x.props : null, $ = typeof y?.id == "string" ? y.id : void 0, m = h && pt(x) ? x.type.toLowerCase() : null, C = m != null && (m === "input" ? typeof y?.type != "string" || y.type.toLowerCase() !== "hidden" : m === "button" || m === "meter" || m === "output" || m === "progress" || m === "select" || m === "textarea"), b = f && (o != null || r || $ == null && C), O = $ != null || i != null || b, E = m === "input" && typeof y?.type == "string" ? y.type.toLowerCase() : null, M = m === "textarea" || m === "input" && (E == null || [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number"
  ].includes(E)), A = b && pt(x) ? ps(
    x,
    {
      id: $ ?? w,
      ...c && M && y?.placeholder == null ? { placeholder: " " } : {},
      ...o != null ? {
        "aria-describedby": [
          y?.["aria-describedby"],
          v
        ].filter((p) => typeof p == "string").join(" ")
      } : {},
      ...r ? {
        "aria-invalid": !0
      } : {}
    }
  ) : x, N = e != null ? /* @__PURE__ */ D(
    "label",
    {
      className: Et.label,
      htmlFor: O ? $ ?? w : void 0,
      children: [
        e,
        l === !0 && /* @__PURE__ */ s("span", { className: Et.required, "aria-hidden": "true", children: "*" })
      ]
    }
  ) : null;
  return /* @__PURE__ */ D(
    "div",
    {
      className: [
        Et.formfield,
        Et[_],
        c ? Et.floating : null,
        r ? Et.invalid : null,
        d
      ].filter(Boolean).join(" "),
      children: [
        c ? null : N,
        /* @__PURE__ */ D("div", { className: Et.content, children: [
          t != null && /* @__PURE__ */ s("div", { className: Et.start, children: t }),
          A,
          c ? N : null,
          n != null && /* @__PURE__ */ s("div", { className: Et.end, children: n })
        ] }),
        o != null && /* @__PURE__ */ s("div", { id: v, className: Et.helper, children: o })
      ]
    }
  );
}
const Xo = "_fieldset_18z6t_1", Vo = "_legend_18z6t_11", Go = "_legendText_18z6t_20", Yo = "_toggle_18z6t_24", Zo = "_content_18z6t_45", Jo = "_summary_18z6t_49", sn = {
  fieldset: Xo,
  legend: Vo,
  legendText: Go,
  toggle: Yo,
  content: Zo,
  summary: Jo
};
function iv({
  text: e,
  headerTemplate: t,
  icon: n,
  iconColor: o,
  allowCollapse: i = !1,
  collapsed: c,
  defaultCollapsed: _ = !1,
  summary: r,
  expandTitle: l,
  collapseTitle: a,
  expandAriaLabel: d,
  collapseAriaLabel: u,
  onExpand: k,
  onCollapse: v,
  children: w,
  className: x,
  visible: g = !0
}) {
  const h = qe(), [f, y] = X(_);
  if (g === !1) return null;
  const $ = c ?? f, m = i ? `${h}-content` : void 0, C = () => {
    const N = !$;
    c === void 0 && y(N), N ? v?.() : k?.();
  }, b = i || e != null || n != null || t != null, O = i ? $ : !1, E = i && $ && r != null, M = O ? l ?? "Expand" : a ?? "Collapse", A = O ? d ?? "Expand" : u ?? "Collapse";
  return /* @__PURE__ */ D(
    "fieldset",
    {
      className: [sn.fieldset, x].filter(Boolean).join(" "),
      children: [
        b ? /* @__PURE__ */ s("legend", { className: sn.legend, children: i ? /* @__PURE__ */ D(Oe, { children: [
          /* @__PURE__ */ D(
            "button",
            {
              type: "button",
              className: sn.toggle,
              title: M,
              "aria-label": e == null ? A : void 0,
              "aria-expanded": !O,
              "aria-controls": m,
              onClick: C,
              children: [
                /* @__PURE__ */ s(
                  Ne,
                  {
                    name: O ? "plus" : "minus",
                    size: 16,
                    "aria-hidden": "true"
                  }
                ),
                n != null && /* @__PURE__ */ s(
                  Ne,
                  {
                    name: n,
                    "aria-hidden": "true",
                    ...o != null ? { style: { color: o } } : {}
                  }
                ),
                e != null && /* @__PURE__ */ s("span", { className: sn.legendText, children: e })
              ]
            }
          ),
          t
        ] }) : /* @__PURE__ */ D(Oe, { children: [
          n != null && /* @__PURE__ */ s(
            Ne,
            {
              name: n,
              "aria-hidden": "true",
              ...o != null ? { style: { color: o } } : {}
            }
          ),
          e != null && /* @__PURE__ */ s("span", { className: sn.legendText, children: e }),
          t
        ] }) }) : null,
        /* @__PURE__ */ s(
          "div",
          {
            className: sn.content,
            id: m,
            hidden: O,
            children: w
          }
        ),
        E ? /* @__PURE__ */ s("div", { className: sn.summary, children: r }) : null
      ]
    }
  );
}
const Qo = "_form_19k3s_1", el = {
  form: Qo
}, Qs = ns(null);
function tl() {
  const e = kn(Qs);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function cv({
  model: e,
  onSubmit: t,
  onInvalidSubmit: n,
  action: o,
  method: i,
  children: c,
  className: _
}) {
  const [r, l] = X({}), [a, d] = X(0), u = oe(r);
  u.current = r;
  const k = B((y) => {
    l(
      ($) => $[y.name] === y ? $ : { ...$, [y.name]: y }
    );
  }, []), v = B((y) => {
    l(($) => {
      if (!(y in $)) return $;
      const m = { ...$ };
      return delete m[y], m;
    });
  }, []), w = B(() => {
    const y = {};
    for (const $ of Object.values(u.current)) {
      const m = $.validate();
      m.length > 0 && (y[$.name] = m);
    }
    return y;
  }, []), x = B(() => {
    const y = w();
    d(($) => $ + 1), Object.keys(y).length === 0 ? t?.(e) : n?.(y);
  }, [w, e, t, n]), g = (y) => {
    o != null && i != null || (y.preventDefault(), x());
  }, h = be(
    () => ({ registerField: k, unregisterField: v, submit: x, submitCount: a }),
    [k, v, x, a]
  ), f = [el.form, _].filter(Boolean).join(" ");
  return /* @__PURE__ */ s(Qs.Provider, { value: h, children: /* @__PURE__ */ s(
    "form",
    {
      className: f,
      onSubmit: g,
      action: o,
      method: i,
      noValidate: !0,
      children: c
    }
  ) });
}
const dn = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", dv = (e = "Required") => (t) => dn(t) ? e : null, uv = (e = "Invalid email") => (t) => dn(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, _v = (e, t = "Invalid format") => (n) => dn(n) || e.test(String(n)) ? null : t, fv = (e, t = `Minimum ${e} characters`) => (n) => dn(n) || String(n).length >= e ? null : t, hv = (e, t = `Maximum ${e} characters`) => (n) => dn(n) || String(n).length <= e ? null : t, pv = (e, t, n = `Between ${e} and ${t}`) => (o) => {
  if (dn(o)) return null;
  const i = Number(o);
  return !Number.isNaN(i) && i >= e && i <= t ? null : n;
}, mv = (e, t = "Values do not match") => (n, o) => {
  if (dn(n)) return null;
  const i = typeof e == "function" ? e(o) : e;
  return n === i ? null : t;
}, gv = (e = "Required") => (t) => t === !0 ? null : e, xv = (e) => (t, n) => e(t, n);
function nl(e, t, n) {
  return e.map((o) => o(t, n)).filter((o) => o != null);
}
function bv(e, t) {
  const { registerField: n, unregisterField: o, submitCount: i } = tl(), [c, _] = X(t?.initialValue), [r, l] = X(!1), [a, d] = X(!1), u = oe(() => []);
  u.current = () => nl(t?.validate ?? [], c), ye(() => (n({ name: e, validate: () => u.current() }), () => o(e)), [e, n, o]), ye(() => {
    i > 0 && (l(!0), d(!1));
  }, [i]);
  const k = r && !a ? u.current() : [];
  return { value: c, setValue: (w) => {
    _(w), d(!0);
  }, errors: k };
}
const sl = "_select_1vjst_1", rl = "_invalid_1vjst_33", ol = "_xs_1vjst_40", ll = "_sm_1vjst_48", al = "_md_1vjst_56", il = "_lg_1vjst_62", cl = "_xl_1vjst_68", rs = {
  select: sl,
  invalid: rl,
  xs: ol,
  sm: ll,
  md: al,
  lg: il,
  xl: cl
}, yn = Fe(
  function({ size: t = "md", invalid: n = !1, options: o, children: i, className: c, ..._ }, r) {
    return /* @__PURE__ */ s(
      "select",
      {
        ref: r,
        "data-size": t,
        className: [
          rs.select,
          rs[t],
          n ? rs.invalid : null,
          c
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ..._,
        children: o != null ? o.map((l) => /* @__PURE__ */ s(
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
), er = [
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
], Sn = {
  string: "Contains",
  number: "Equals",
  boolean: "Equals",
  date: "Equals",
  enum: "Equals"
}, dl = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
];
function ul(e) {
  return dl.includes(e);
}
function Qn(e, t) {
  return t.split(".").reduce((n, o) => {
    if (n != null)
      return n[o];
  }, e);
}
function ks(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function Pn(e, t) {
  const n = ks(e), o = ks(t);
  if (typeof n == "number" && typeof o == "number") return n - o;
  const i = String(n ?? ""), c = String(o ?? "");
  return i < c ? -1 : i > c ? 1 : 0;
}
function ss(e) {
  if (e.secondOperator == null) return !1;
  if (ul(e.secondOperator)) return !0;
  const t = e.secondValue;
  return t != null && t !== "";
}
function ws(e, t, n) {
  const o = Qn(t, e.property), i = $s(
    o,
    e.value,
    e.operator,
    n
  );
  if (!ss(e)) return i;
  const c = $s(
    o,
    e.secondValue,
    e.secondOperator,
    n
  );
  return (e.logicalOperator ?? "And") === "And" ? i && c : i || c;
}
function $s(e, t, n, o) {
  const i = o === "CaseInsensitive", c = (l) => i && typeof l == "string" ? l.toLowerCase() : l, _ = c(e), r = c(t);
  switch (n) {
    case "Equals":
      return _ === r || Array.isArray(_) && _.some((l) => c(l) === r);
    case "NotEquals":
      return _ !== r && !(Array.isArray(_) && _.some((l) => c(l) === r));
    case "LessThan":
      return Pn(_, r) < 0;
    case "LessThanOrEquals":
      return Pn(_, r) <= 0;
    case "GreaterThan":
      return Pn(_, r) > 0;
    case "GreaterThanOrEquals":
      return Pn(_, r) >= 0;
    case "Contains":
      return typeof _ == "string" && typeof r == "string" && _.includes(r);
    case "StartsWith":
      return typeof _ == "string" && typeof r == "string" && _.startsWith(r);
    case "EndsWith":
      return typeof _ == "string" && typeof r == "string" && _.endsWith(r);
    case "DoesNotContain":
      return typeof _ == "string" && typeof r == "string" && !_.includes(r);
    case "In":
      return Array.isArray(r) && r.some((l) => c(l) === _);
    case "NotIn":
      return Array.isArray(r) && !r.some((l) => c(l) === _);
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
function xs(e) {
  return "filters" in e;
}
function tr(e, t, n = {}) {
  const o = n.logicalOperator ?? "And", i = n.caseSensitivity ?? "CaseInsensitive";
  if (xs(t)) {
    if (t.filters.length === 0) return !0;
    const c = t.operator ?? o;
    return t.filters[c === "Or" ? "some" : "every"](
      (_) => tr(e, _, { logicalOperator: c, caseSensitivity: i })
    );
  }
  return t.operator === "Custom", ws(t, e, i);
}
function nr(e, t, n = {}) {
  return e.filter((o) => tr(o, t, n));
}
function _l(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function xt(e) {
  return typeof e == "string" ? `"${_l(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(xt).join(", ")}]` : `"${String(e)}"`;
}
function fl(e) {
  const t = (i, c) => {
    switch (i) {
      case "Equals":
        return `${e.property}.Equals(${xt(c)})`;
      case "NotEquals":
        return `!${e.property}.Equals(${xt(c)})`;
      case "LessThan":
        return `${e.property}.LessThan(${xt(c)})`;
      case "LessThanOrEquals":
        return `${e.property}.LessThanOrEquals(${xt(c)})`;
      case "GreaterThan":
        return `${e.property}.GreaterThan(${xt(c)})`;
      case "GreaterThanOrEquals":
        return `${e.property}.GreaterThanOrEquals(${xt(c)})`;
      case "Contains":
        return `${e.property}.Contains(${xt(c)})`;
      case "StartsWith":
        return `${e.property}.StartsWith(${xt(c)})`;
      case "EndsWith":
        return `${e.property}.EndsWith(${xt(c)})`;
      case "DoesNotContain":
        return `!${e.property}.Contains(${xt(c)})`;
      case "In":
        return `${e.property}.In(${xt(c)})`;
      case "NotIn":
        return `!${e.property}.In(${xt(c)})`;
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
  if (!ss(e))
    return t(e.operator, e.value);
  const n = e.logicalOperator ?? "And", o = e.secondOperator;
  return `(${t(e.operator, e.value)} ${n} ${t(
    o,
    e.secondValue
  )})`;
}
function hl(e) {
  return xs(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(hl).filter(Boolean).join(` ${e.operator} `)})` : fl(e);
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
function gl(e, t) {
  const n = e.property, o = t === "CaseInsensitive", i = (a) => o ? `tolower(${a})` : a, c = (a) => typeof a == "string" ? `'${pl(a)}'` : a instanceof Date ? `'${a.toISOString()}'` : String(a ?? ""), _ = (a, d) => {
    const u = typeof d == "string", k = u && o ? i(n) : n;
    switch (a) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${k} ${ml[a]} ${u && o ? i(c(d)) : c(d)}`;
      case "Contains":
        return `contains(${i(n)}, ${i(c(d))})`;
      case "StartsWith":
        return `startswith(${i(n)}, ${i(c(d))})`;
      case "EndsWith":
        return `endswith(${i(n)}, ${i(c(d))})`;
      case "DoesNotContain":
        return `not(contains(${i(n)}, ${i(c(d))}))`;
      case "In":
        return Array.isArray(d) ? `${k} in (${d.map((v) => c(v)).join(", ")})` : `${k} in (${c(d)})`;
      case "NotIn":
        return Array.isArray(d) ? `not(${k} in (${d.map((v) => c(v)).join(", ")}))` : `not(${k} in (${c(d)}))`;
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
  if (!ss(e))
    return _(e.operator, e.value);
  const r = (e.logicalOperator ?? "And") === "And" ? "and" : "or", l = e.secondOperator;
  return `(${_(e.operator, e.value)} ${r} ${_(
    l,
    e.secondValue
  )})`;
}
function xl(e, t = {}) {
  const n = t.caseSensitivity ?? "CaseInsensitive";
  if (xs(e)) {
    if (e.filters.length === 0) return "";
    const o = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((i) => xl(i, { caseSensitivity: n })).filter(Boolean).join(` ${o} `)})`;
  }
  return gl(e, n);
}
function bl(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((n, o) => {
    for (const i of t) {
      const c = i.sortOrder === "Ascending" ? 1 : -1, _ = Pn(
        Qn(n, i.property),
        Qn(o, i.property)
      );
      if (_ !== 0) return _ * c;
    }
    return 0;
  });
}
const yl = "_filter_1h8zc_1", vl = "_rows_1h8zc_9", kl = "_row_1h8zc_9", wl = "_join_1h8zc_21", $l = "_property_1h8zc_30", Nl = "_operator_1h8zc_34", Ol = "_value_1h8zc_38", Sl = "_remove_1h8zc_42", Dl = "_bar_1h8zc_58", Ml = "_add_1h8zc_64", Cl = "_custom_1h8zc_78", zl = "_summary_1h8zc_82", El = "_second_1h8zc_87", Il = "_secondAdd_1h8zc_91", Al = "_addSecond_1h8zc_95", jl = "_joinSelect_1h8zc_109", Ye = {
  filter: yl,
  rows: vl,
  row: kl,
  join: wl,
  property: $l,
  operator: Nl,
  value: Ol,
  remove: Sl,
  bar: Dl,
  add: Ml,
  custom: Cl,
  summary: zl,
  second: El,
  secondAdd: Il,
  addSecond: Al,
  joinSelect: jl
}, Dn = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
], Ns = {
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
  value: t,
  onChange: n
}) {
  if (e.editor != null)
    return /* @__PURE__ */ s(Oe, { children: e.editor({ value: t, onChange: n }) });
  const o = e.type ?? "string";
  if (o === "enum" && e.values != null)
    return /* @__PURE__ */ s(
      yn,
      {
        "aria-label": e.title ?? e.name,
        className: Ye.value,
        options: e.values,
        value: String(t ?? ""),
        onChange: (c) => n(c.target.value)
      }
    );
  if (o === "boolean")
    return /* @__PURE__ */ s(
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
          c.target.value === "" ? n(void 0) : n(c.target.value === "true");
        }
      }
    );
  const i = o === "number" ? { type: "number" } : o === "date" ? { type: "date" } : { type: "text" };
  return /* @__PURE__ */ s(
    "input",
    {
      "aria-label": e.title ?? e.name,
      className: Ye.value,
      ...i,
      value: t == null ? "" : String(t),
      onChange: (c) => n(
        o === "number" && c.target.value !== "" ? Number(c.target.value) : c.target.value
      )
    }
  );
}
function yv({
  properties: e,
  logicalOperator: t = "And",
  filterCaseSensitivity: n = "CaseInsensitive",
  initialRows: o,
  uniqueFilters: i = !1,
  className: c,
  viewChanged: _,
  items: r,
  children: l
}) {
  const [a, d] = X(
    () => o != null && o.length > 0 ? o.map((h, f) => ({ id: f, ...h })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: Sn[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), u = (h, f) => {
    d(
      (y) => y.map(($) => $.id === h ? { ...$, ...f } : $)
    );
  }, k = () => {
    const h = a[a.length - 1], f = Math.max(0, ...a.map(($) => $.id)) + 1, y = e[0];
    d(($) => [
      ...$,
      {
        id: f,
        property: h?.property ?? y?.name ?? "",
        operator: Sn[e.find(
          (m) => m.name === (h?.property ?? y?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, v = (h) => {
    d(
      (f) => f.length > 1 ? f.filter((y) => y.id !== h) : f
    );
  }, w = be(() => {
    const h = [];
    for (const f of a) {
      if (f.property === "" || (f.value == null || f.value === "") && !Dn.includes(f.operator)) continue;
      const $ = {
        property: f.property,
        operator: f.operator,
        value: f.value
      }, { secondOperator: m } = f;
      m != null && ss(f) && ($.secondOperator = m, $.secondValue = f.secondValue, $.logicalOperator = f.logicalOperator ?? "And"), h.push($);
    }
    return h;
  }, [a]), x = be(() => r == null || w.length === 0 ? r : nr(r, {
    operator: t,
    filters: w
  }, {
    caseSensitivity: n
  }), [r, w, t, n]);
  ye(() => {
    _ != null && r != null && _(x ?? []);
  }, [x]);
  const g = (h) => e.find((f) => f.name === h) ?? { name: h, type: "string" };
  return /* @__PURE__ */ D("div", { className: [Ye.filter, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ s("div", { className: Ye.rows, role: "group", "aria-label": "Filter conditions", children: a.map((h, f) => {
      const y = g(h.property), $ = i ? [Sn[y.type ?? "string"]] : er, m = !Dn.includes(h.operator), C = h.secondOperator != null;
      return /* @__PURE__ */ D(ir, { children: [
        /* @__PURE__ */ D("div", { className: Ye.row, children: [
          f > 0 ? /* @__PURE__ */ s("span", { className: Ye.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ s(
            yn,
            {
              "aria-label": `Condition ${f + 1} property`,
              className: Ye.property,
              value: h.property,
              onChange: (b) => {
                const O = e.find(
                  (E) => E.name === b.target.value
                );
                u(h.id, {
                  property: b.target.value,
                  operator: Sn[O?.type ?? "string"],
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
          /* @__PURE__ */ s(
            yn,
            {
              "aria-label": `Condition ${f + 1} operator`,
              className: Ye.operator,
              value: h.operator,
              onChange: (b) => {
                const O = b.target.value;
                u(
                  h.id,
                  Dn.includes(O) ? {
                    operator: O,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: O }
                );
              },
              options: $.map((b) => ({
                value: b,
                label: Ns[b]
              }))
            }
          ),
          m ? /* @__PURE__ */ s(
            Os,
            {
              property: y,
              value: h.value,
              onChange: (b) => u(h.id, { value: b })
            }
          ) : null,
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: Ye.remove,
              "aria-label": `Remove condition ${f + 1}`,
              onClick: () => v(h.id),
              children: /* @__PURE__ */ s(Ne, { name: "close", size: "sm" })
            }
          )
        ] }),
        m ? C ? /* @__PURE__ */ D(
          "div",
          {
            className: [Ye.row, Ye.second].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ s(
                yn,
                {
                  "aria-label": `Condition ${f + 1} second-operator logic`,
                  className: Ye.joinSelect,
                  value: h.logicalOperator ?? "And",
                  onChange: (b) => u(h.id, {
                    logicalOperator: b.target.value
                  }),
                  options: [
                    { value: "And", label: "And" },
                    { value: "Or", label: "Or" }
                  ]
                }
              ),
              /* @__PURE__ */ s(
                yn,
                {
                  "aria-label": `Condition ${f + 1} second operator`,
                  className: Ye.operator,
                  value: h.secondOperator,
                  onChange: (b) => {
                    const O = b.target.value;
                    u(
                      h.id,
                      Dn.includes(O) ? { secondOperator: O, secondValue: void 0 } : { secondOperator: O }
                    );
                  },
                  options: $.map((b) => ({
                    value: b,
                    label: Ns[b]
                  }))
                }
              ),
              h.secondOperator == null || !Dn.includes(h.secondOperator) ? /* @__PURE__ */ s(
                Os,
                {
                  property: y,
                  value: h.secondValue,
                  onChange: (b) => u(h.id, { secondValue: b })
                }
              ) : null,
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: Ye.remove,
                  "aria-label": `Remove second condition ${f + 1}`,
                  onClick: () => u(h.id, {
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  }),
                  children: /* @__PURE__ */ s(Ne, { name: "close", size: "sm" })
                }
              )
            ]
          }
        ) : /* @__PURE__ */ s("div", { className: Ye.secondAdd, children: /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: Ye.addSecond,
            onClick: () => u(h.id, {
              secondOperator: Sn[y.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, h.id);
    }) }),
    /* @__PURE__ */ D("div", { className: Ye.bar, children: [
      /* @__PURE__ */ s("button", { type: "button", className: Ye.add, onClick: k, children: "Add filter" }),
      l != null ? /* @__PURE__ */ s("div", { className: Ye.custom, children: l }) : null,
      r != null ? /* @__PURE__ */ D("span", { className: Ye.summary, "aria-live": "polite", children: [
        x?.length ?? 0,
        " of ",
        r.length
      ] }) : null
    ] })
  ] });
}
const Tl = "_pager_4cpp0_1", Ll = "_alignLeft_4cpp0_10", Pl = "_alignCenter_4cpp0_14", Rl = "_alignRight_4cpp0_18", Bl = "_alignJustify_4cpp0_22", ql = "_summary_4cpp0_26", Fl = "_controls_4cpp0_31", Hl = "_button_4cpp0_37", Kl = "_active_4cpp0_73", Ul = "_ellipsis_4cpp0_85", Wl = "_size_4cpp0_91", it = {
  pager: Tl,
  alignLeft: Ll,
  alignCenter: Pl,
  alignRight: Rl,
  alignJustify: Bl,
  summary: ql,
  controls: Fl,
  button: Hl,
  active: Kl,
  ellipsis: Ul,
  size: Wl
};
function Xl(e, t, n, o) {
  return e.replace("{0}", String(t)).replace("{1}", String(n)).replace("{2}", String(o));
}
function Ss(e, t) {
  return e.replace("{0}", String(t));
}
function Vl(e, t, n) {
  if (t <= n)
    return Array.from({ length: t }, (r, l) => l + 1);
  const o = Math.floor(n / 2);
  let i = Math.max(1, e - o);
  const c = Math.min(t, i + n - 1);
  i = Math.max(1, c - n + 1);
  const _ = [];
  for (let r = i; r <= c; r++) _.push(r);
  return i > 2 && _.unshift("ellipsis"), i > 1 && _.unshift(1), c < t - 1 && _.push("ellipsis"), c < t && _.push(t), _;
}
function Gl({
  count: e,
  pageSize: t,
  page: n,
  defaultPage: o = 1,
  pageSizeOptions: i,
  pageNumbersCount: c = 5,
  alwaysVisible: _ = !1,
  horizontalAlign: r = "left",
  showPagingSummary: l,
  showPageSizeSelector: a = !0,
  pagingSummaryFormat: d = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: u,
  pageSizeText: k = "Items per page",
  firstPageTitle: v = "First page",
  prevPageTitle: w = "Previous page",
  nextPageTitle: x = "Next page",
  lastPageTitle: g = "Last page",
  pageTitleFormat: h = "Page {0}",
  pageAriaLabelFormat: f = "Page {0}",
  onPageChange: y,
  onPageSizeChange: $,
  ariaLabel: m = "Pagination",
  className: C,
  visible: b = !0
}) {
  const O = n ?? o, [E, M] = X(O), A = n !== void 0, N = A ? O : E, p = Math.max(1, Math.ceil(e / t)), S = Math.min(Math.max(1, N), p), L = l ?? !0, I = _ || p > 1, j = Vl(S, p, c), T = B(
    (U) => {
      const te = Math.min(Math.max(1, U), p);
      A || M(te);
      const le = (te - 1) * t;
      y?.({
        page: te,
        skip: le,
        top: t,
        pageCount: p,
        pageSize: t
      });
    },
    [A, y, p, t]
  ), F = r === "center" ? it.alignCenter : r === "right" ? it.alignRight : r === "justify" ? it.alignJustify : it.alignLeft, G = {
    count: e,
    pageNumber: S,
    pageSize: t,
    pageCount: p
  }, Y = (U) => {
    const te = Array.from(
      U.currentTarget.querySelectorAll(
        "button[data-pager-page]"
      )
    ), le = te.indexOf(document.activeElement);
    le !== -1 && (U.key === "ArrowRight" || U.key === "ArrowDown" ? (U.preventDefault(), (te[le + 1] ?? te[0])?.focus()) : U.key === "ArrowLeft" || U.key === "ArrowUp" ? (U.preventDefault(), (te[le - 1] ?? te[te.length - 1])?.focus()) : U.key === "Home" ? (U.preventDefault(), te[0]?.focus()) : U.key === "End" && (U.preventDefault(), te[te.length - 1]?.focus()));
  };
  return b === !1 || !I ? null : /* @__PURE__ */ D(
    "nav",
    {
      className: [it.pager, F, C].filter(Boolean).join(" "),
      "aria-label": m,
      children: [
        L && /* @__PURE__ */ s("span", { className: it.summary, "aria-live": "polite", children: u ? u(G) : Xl(d, S, p, e) }),
        /* @__PURE__ */ D(
          "div",
          {
            className: it.controls,
            role: "group",
            "aria-label": m,
            onKeyDown: Y,
            children: [
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: it.button,
                  disabled: S <= 1,
                  onClick: () => T(1),
                  "aria-label": v,
                  title: v,
                  children: "«"
                }
              ),
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: it.button,
                  disabled: S <= 1,
                  onClick: () => T(S - 1),
                  "aria-label": w,
                  title: w,
                  children: "‹"
                }
              ),
              j.map(
                (U, te) => U === "ellipsis" ? /* @__PURE__ */ s("span", { className: it.ellipsis, "aria-hidden": "true", children: "…" }, `e${te}`) : /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    "data-pager-page": U,
                    className: [it.button, U === S ? it.active : ""].filter(Boolean).join(" "),
                    "aria-current": U === S ? "page" : void 0,
                    "aria-label": Ss(f, U),
                    title: Ss(h, U),
                    onClick: () => T(U),
                    children: U
                  },
                  U
                )
              ),
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: it.button,
                  disabled: S >= p,
                  onClick: () => T(S + 1),
                  "aria-label": x,
                  title: x,
                  children: "›"
                }
              ),
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: it.button,
                  disabled: S >= p,
                  onClick: () => T(p),
                  "aria-label": g,
                  title: g,
                  children: "»"
                }
              )
            ]
          }
        ),
        a && i && i.length > 0 && /* @__PURE__ */ D("label", { className: it.size, children: [
          /* @__PURE__ */ s("span", { children: k }),
          /* @__PURE__ */ s(
            "select",
            {
              value: t,
              onChange: (U) => $?.(Number(U.target.value)),
              "aria-label": k,
              children: i.map((U) => /* @__PURE__ */ s("option", { value: U, children: U }, U))
            }
          )
        ] })
      ]
    }
  );
}
function ds(e) {
  const { pageNumber: t, onPageChange: n, summaryTemplate: o, showSummary: i, ...c } = e;
  return /* @__PURE__ */ s(
    Gl,
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
      onPageChange: n ? (r) => n(r.page) : void 0,
      ...c
    }
  );
}
function Yl(e, t, n, o, i, c) {
  if (!t || !n) return e.map((l) => ({ type: "row", row: l }));
  const _ = /* @__PURE__ */ new Map();
  e.forEach((l) => {
    const a = String(i(l, t) ?? ""), d = _.get(a);
    d ? d.push(l) : _.set(a, [l]);
  });
  const r = [];
  return _.forEach((l, a) => {
    const d = l[0], u = d != null ? i(d, t) : void 0;
    r.push({
      type: "group",
      group: {
        key: a,
        display: c(u),
        property: t,
        title: n.title ?? t,
        count: l.length
      }
    }), o.has(a) && l.forEach((k) => r.push({ type: "row", row: k }));
  }), r;
}
function Fn(e, t) {
  return e.property ?? `col-${t}`;
}
function Zl(e, t) {
  const n = {};
  let o = 0;
  return e.forEach(({ key: i, column: c }) => {
    if (!c.frozen) return;
    n[i] = o === 0 ? "0px" : `${o}px`;
    const _ = t[i] ?? c.width ?? "8rem";
    o += parseFloat(_);
  }), n;
}
function Jl(e, t) {
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
function Mn(e, t) {
  if (t != null)
    return Qn(e, t);
}
function Ds(e, t) {
  if (t == null || t === "") return String(e ?? "");
  const n = /^N(\d+)$/i.exec(t);
  if (n && typeof e == "number") return e.toFixed(Number(n[1]));
  if (t === "d" || t === "D") {
    const o = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return o != null && !Number.isNaN(o.getTime()) ? o.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const Ms = [
  "Ascending",
  "Descending",
  null
];
function Ql(e, t, n = {}) {
  const o = e.find((c) => c.property === t), i = Ms[(o ? Ms.indexOf(o.sortOrder) : -1) + 1] ?? null;
  return i == null ? e.filter((c) => c.property !== t) : n.multi ? [
    ...e.filter((c) => c.property !== t),
    { property: t, sortOrder: i }
  ] : [{ property: t, sortOrder: i }];
}
function ea(e, t) {
  return bl(e, t);
}
function ta(e, t, n) {
  const o = Math.max(1, Math.ceil(e.length / n)), i = Math.min(Math.max(1, t), o), c = (i - 1) * n;
  return {
    items: e.slice(c, c + n),
    pageCount: o,
    pageNumber: i,
    total: e.length
  };
}
function na(e, t, n = {}) {
  const o = [...t.filters.entries()].filter(([, r]) => r.value !== "" && r.value !== void 0).map(
    ([r, l]) => ({
      property: r,
      operator: l.operator ?? "Contains",
      value: Jl(
        l.value,
        n.types?.[r] ?? "string"
      )
    })
  ), i = o.length > 0 ? nr(
    e,
    { operator: n.logicalOperator ?? "And", filters: o },
    {
      logicalOperator: n.logicalOperator ?? "And",
      caseSensitivity: n.caseSensitivity ?? "CaseInsensitive"
    }
  ) : e, c = ea(i, t.sorts);
  return {
    ...ta(c, t.pageNumber, t.pageSize),
    sorts: t.sorts,
    filters: t.filters,
    pageSize: t.pageSize
  };
}
function sa(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
const ra = "_grid_hbpof_1", oa = "_toolbar_hbpof_8", la = "_picker_hbpof_13", aa = "_pickerButton_hbpof_17", ia = "_pickerPanel_hbpof_31", ca = "_pickerItem_hbpof_46", da = "_groupPanel_hbpof_55", ua = "_groupPanelActive_hbpof_66", _a = "_groupPanelText_hbpof_70", fa = "_groupChip_hbpof_74", ha = "_groupRemove_hbpof_85", pa = "_groupRow_hbpof_94", ma = "_groupCell_hbpof_98", ga = "_groupToggle_hbpof_103", xa = "_editRow_hbpof_116", ba = "_editCell_hbpof_120", ya = "_editInput_hbpof_125", va = "_commandCell_hbpof_135", ka = "_commandButton_hbpof_141", wa = "_data_hbpof_156", $a = "_table_hbpof_163", Na = "_header_hbpof_169", Oa = "_center_hbpof_181", Sa = "_right_hbpof_185", Da = "_sortButton_hbpof_189", Ma = "_sortIndicator_hbpof_207", Ca = "_sortIndex_hbpof_211", za = "_cell_hbpof_222", Ea = "_clickable_hbpof_236", Ia = "_frozen_hbpof_244", Aa = "_selected_hbpof_250", ja = "_resizeHandle_hbpof_258", Ta = "_filterCell_hbpof_276", La = "_filterSelect_hbpof_284", Pa = "_filterInput_hbpof_294", Ra = "_empty_hbpof_305", Ba = "_loading_hbpof_311", qa = "_visuallyHidden_hbpof_321", ge = {
  grid: ra,
  toolbar: oa,
  picker: la,
  pickerButton: aa,
  pickerPanel: ia,
  pickerItem: ca,
  groupPanel: da,
  groupPanelActive: ua,
  groupPanelText: _a,
  groupChip: fa,
  groupRemove: ha,
  groupRow: pa,
  groupCell: ma,
  groupToggle: ga,
  editRow: xa,
  editCell: ba,
  editInput: ya,
  commandCell: va,
  commandButton: ka,
  data: wa,
  table: $a,
  header: Na,
  center: Oa,
  right: Sa,
  sortButton: Da,
  sortIndicator: Ma,
  sortIndex: Ca,
  cell: za,
  clickable: Ea,
  frozen: Ia,
  selected: Aa,
  resizeHandle: ja,
  filterCell: Ta,
  filterSelect: La,
  filterInput: Pa,
  empty: Ra,
  loading: Ba,
  visuallyHidden: qa
}, Fa = {
  Ascending: "ascending",
  Descending: "descending"
};
function Cs(e, t) {
  return e.filterable ?? t;
}
function Ha(e, t) {
  return e.sortable ?? t;
}
function Ka(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function vv({
  columns: e,
  rows: t,
  rowKey: n,
  allowSorting: o = !1,
  allowMultiColumnSorting: i = !1,
  showSortIndex: c = !1,
  allowFiltering: _ = !1,
  filterCaseSensitivity: r = "CaseInsensitive",
  logicalOperator: l = "And",
  allowPaging: a = !1,
  pageSize: d = 10,
  pageSizeOptions: u,
  pageNumbersCount: k = 5,
  pagerPosition: v = "Bottom",
  showPagingSummary: w = !0,
  showPageSizeSelector: x = !0,
  selectionMode: g = "None",
  selectedKeys: h,
  onSelectionChange: f,
  showColumnPicker: y = !1,
  columnPickerText: $ = "Columns",
  allowColumnResize: m = !1,
  allowColumnReorder: C = !1,
  allowGrouping: b = !1,
  groupPanelText: O = "Drag a column header here to group",
  groupExpanded: E = !0,
  editMode: M = "None",
  allowRowCreate: A = !1,
  onRowUpdate: N,
  onRowCreate: p,
  onRowDelete: S,
  isLoading: L = !1,
  empty: I = "No records found",
  ariaLabel: j,
  className: T,
  onRowClick: F
}) {
  const [G, Y] = X([]), [U, te] = X(
    /* @__PURE__ */ new Map()
  ), [le, ee] = X(1), [q, ie] = X(d), [J, de] = X(
    () => e.map((P, R) => Fn(P, R))
  ), [ae, ve] = X(
    () => new Set(
      e.map((P, R) => P.visible !== !1 ? Fn(P, R) : "").filter(Boolean)
    )
  ), [$e, Re] = X({}), [we, Xe] = X(!1), [xe, Ze] = X(null), [Ve, Le] = X(
    null
  ), [tt, Qe] = X(null), [et, V] = X({}), z = oe(null), K = oe(null), ne = be(() => {
    const P = /* @__PURE__ */ new Map();
    return e.forEach((R, ce) => P.set(Fn(R, ce), R)), P;
  }, [e]), _e = be(
    () => J.filter((P) => ae.has(P)).map((P) => ({ key: P, column: ne.get(P) })).filter(
      (P) => P.column != null
    ),
    [J, ae, ne]
  ), se = be(
    () => Zl(_e, $e),
    [_e, $e]
  ), me = M !== "None" || S != null || A, Se = be(
    () => na(
      t,
      { sorts: G, filters: U, pageNumber: le, pageSize: q },
      {
        logicalOperator: l,
        caseSensitivity: r,
        types: Object.fromEntries(
          e.filter((P) => P.type != null && P.property != null).map((P) => [
            P.property,
            P.type
          ])
        )
      }
    ),
    [
      t,
      G,
      U,
      le,
      q,
      l,
      r,
      e
    ]
  ), Be = be(
    () => xe ? e.find((P) => P.property === xe) : void 0,
    [xe, e]
  ), Je = be(
    () => Ve ?? new Set(
      E ? Se.items.map(
        (P) => String(Mn(P, xe ?? "") ?? "")
      ) : []
    ),
    [Ve, E, Se.items, xe]
  ), dt = be(
    () => Yl(
      Se.items,
      xe ?? void 0,
      Be,
      Je,
      Mn,
      (P) => Ds(P, Be?.format)
    ),
    [Se.items, xe, Be, Je]
  ), vt = be(
    () => xe ? _e.filter((P) => P.column.property !== xe) : _e,
    [_e, xe]
  ), Q = (P) => {
    P !== "" && Y(Ql(G, P, { multi: i }));
  }, Me = (P, R) => {
    te((ce) => {
      const pe = new Map(ce);
      return pe.set(P, R), pe;
    }), ee(1);
  }, nt = (P) => {
    ie(P), ee(1);
  }, Gt = (P) => {
    if (g === "None") return;
    const R = n(P), ce = h ?? [];
    let pe;
    g === "Single" ? pe = ce.length === 1 && ce[0] === R ? [] : [R] : pe = ce.includes(R) ? ce.filter((Ie) => Ie !== R) : [...ce, R], f?.(pe);
  }, Ot = (P) => {
    F?.(P);
  }, Ce = (P, R, ce) => {
    z.current = { key: P, startX: R, startWidth: ce };
  }, Ge = (P) => {
    const R = z.current;
    if (!R) return;
    const ce = P - R.startX, pe = Math.max(48, R.startWidth + ce);
    Re((Ie) => ({ ...Ie, [R.key]: `${pe}px` }));
  }, kt = () => {
    z.current = null;
  }, Pt = (P) => {
    K.current = P;
  }, tn = (P) => {
    const R = K.current;
    K.current = null, !(!R || R === P) && de((ce) => {
      const pe = [...ce], Ie = pe.indexOf(R), Ae = pe.indexOf(P);
      return Ie < 0 || Ae < 0 ? ce : (pe.splice(Ie, 1), pe.splice(Ae, 0, R), pe);
    });
  }, W = (P) => {
    ve((R) => {
      const ce = new Set(R);
      return ce.has(P) ? ce.delete(P) : ce.add(P), ce;
    });
  }, ue = () => {
    const P = K.current;
    if (K.current = null, !P || !b) return;
    const ce = ne.get(P)?.property;
    ce && (Ze(ce), Le(null));
  }, Pe = () => {
    Ze(null), Le(null);
  }, He = (P) => {
    Le((R) => {
      const ce = R ?? new Set(
        E ? Se.items.map(
          (Ie) => String(Mn(Ie, xe ?? "") ?? "")
        ) : []
      ), pe = new Set(ce);
      return pe.has(P) ? pe.delete(P) : pe.add(P), pe;
    });
  }, Rt = (P) => {
    const R = {};
    e.forEach((ce) => {
      ce.property && (R[ce.property] = Mn(P, ce.property));
    }), V(R), Qe(String(n(P)));
  }, St = () => {
    const P = {};
    e.forEach((R) => {
      R.property && R.type === "boolean" && (P[R.property] = !1);
    }), V(P), Qe("__new__");
  }, H = () => {
    Qe(null), V({});
  }, Z = (P) => {
    if (tt === "__new__") {
      const R = Object.fromEntries(
        e.filter((ce) => ce.property).map((ce) => [ce.property, et[ce.property]])
      );
      p?.(R);
    } else if (P != null) {
      const R = { ...P, ...et };
      N?.(P, R);
    }
    H();
  }, re = a && (v === "Top" || v === "TopAndBottom"), he = a && (v === "Bottom" || v === "TopAndBottom"), fe = _ && e.some((P) => Cs(P, _)), ke = (P, R, ce) => P.render ? P.render(R, { index: 0 }) : Ds(Mn(R, P.property), P.format), je = (P) => {
    const R = [ge.cell];
    return P.align === "center" && R.push(ge.center), P.align === "right" && R.push(ge.right), P.frozen && R.push(ge.frozen), R.join(" ");
  };
  return /* @__PURE__ */ D("div", { className: [ge.grid, T].filter(Boolean).join(" "), children: [
    re && /* @__PURE__ */ s(
      ds,
      {
        pageNumber: Se.pageNumber,
        pageSize: Se.pageSize,
        count: Se.total,
        pageSizeOptions: u,
        pageNumbersCount: k,
        showSummary: w,
        showPageSizeSelector: x,
        ariaLabel: he ? "Pagination (top)" : "Pagination",
        onPageChange: ee,
        onPageSizeChange: nt
      }
    ),
    (b || A || y) && /* @__PURE__ */ D("div", { className: ge.toolbar, children: [
      b && /* @__PURE__ */ s(
        "div",
        {
          className: [
            ge.groupPanel,
            xe ? ge.groupPanelActive : ""
          ].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: b ? (P) => P.preventDefault() : void 0,
          onDrop: b ? ue : void 0,
          children: xe ? /* @__PURE__ */ D("span", { className: ge.groupChip, children: [
            Be?.title ?? xe,
            ":",
            " ",
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: ge.groupRemove,
                onClick: Pe,
                "aria-label": `Remove group by ${Be?.title ?? xe}`,
                children: /* @__PURE__ */ s(Ne, { name: "close", size: "sm" })
              }
            )
          ] }) : /* @__PURE__ */ s("span", { className: ge.groupPanelText, children: O })
        }
      ),
      A && /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          className: ge.pickerButton,
          onClick: St,
          children: "Add row"
        }
      ),
      y && /* @__PURE__ */ D("div", { className: ge.picker, children: [
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: ge.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": we,
            onClick: () => Xe((P) => !P),
            children: $
          }
        ),
        we && /* @__PURE__ */ s(
          "div",
          {
            className: ge.pickerPanel,
            role: "menu",
            "aria-label": $,
            children: e.map((P, R) => {
              const ce = Fn(P, R);
              return /* @__PURE__ */ D("label", { className: ge.pickerItem, children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    type: "checkbox",
                    checked: ae.has(ce),
                    onChange: () => W(ce)
                  }
                ),
                P.title ?? P.property
              ] }, ce);
            })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ D("div", { className: ge.data, children: [
      /* @__PURE__ */ D(
        "table",
        {
          className: ge.table,
          role: "grid",
          "aria-rowcount": Se.total + 1,
          "aria-label": j,
          "aria-busy": L || void 0,
          children: [
            /* @__PURE__ */ D("colgroup", { children: [
              vt.map(({ key: P, column: R }) => /* @__PURE__ */ s(
                "col",
                {
                  style: {
                    width: $e[P] ?? R.width,
                    minWidth: R.minWidth,
                    maxWidth: R.maxWidth
                  }
                },
                P
              )),
              me && /* @__PURE__ */ s("col", { style: { width: "8rem" } })
            ] }),
            /* @__PURE__ */ D("thead", { children: [
              /* @__PURE__ */ D("tr", { children: [
                vt.map(({ key: P, column: R }) => {
                  const ce = Ha(R, o), pe = G.find((ze) => ze.property === R.property), Ie = pe ? G.indexOf(pe) + 1 : 0, Ae = R.align ?? "left";
                  return /* @__PURE__ */ D(
                    "th",
                    {
                      "aria-sort": ce && pe ? Fa[pe.sortOrder] : "none",
                      className: [
                        ge.header,
                        Ae === "center" ? ge.center : "",
                        Ae === "right" ? ge.right : "",
                        R.frozen ? ge.frozen : ""
                      ].filter(Boolean).join(" "),
                      style: R.frozen ? { left: se[P] } : void 0,
                      scope: "col",
                      draggable: C || b || void 0,
                      onDragStart: C || b ? (ze) => {
                        ze.dataTransfer && (ze.dataTransfer.effectAllowed = "move"), Pt(P);
                      } : void 0,
                      onDragOver: C ? (ze) => ze.preventDefault() : void 0,
                      onDrop: C ? () => tn(P) : void 0,
                      children: [
                        ce ? /* @__PURE__ */ D(
                          "button",
                          {
                            type: "button",
                            className: ge.sortButton,
                            onClick: () => R.property != null && Q(R.property),
                            "aria-label": pe ? pe.sortOrder === "Ascending" ? `Sort ${R.title ?? R.property} descending` : `Sort ${R.title ?? R.property} ascending` : `Sort ${R.title ?? R.property} ascending`,
                            children: [
                              R.title ?? R.property,
                              pe && /* @__PURE__ */ s(
                                "span",
                                {
                                  className: ge.sortIndicator,
                                  "aria-hidden": "true",
                                  children: pe.sortOrder === "Ascending" ? "▲" : "▼"
                                }
                              ),
                              Ie > 1 && c && /* @__PURE__ */ s("span", { className: ge.sortIndex, children: Ie })
                            ]
                          }
                        ) : R.title ?? R.property,
                        m && /* @__PURE__ */ s(
                          "span",
                          {
                            className: ge.resizeHandle,
                            "data-dx-grid-resize": !0,
                            role: "separator",
                            "aria-orientation": "vertical",
                            "aria-label": `Resize ${R.title ?? R.property}`,
                            onMouseDown: (ze) => {
                              ze.preventDefault(), ze.stopPropagation();
                              const at = $e[P] ?? R.width, Dt = at ? parseFloat(at) : 96;
                              Ce(
                                P,
                                ze.clientX,
                                Number.isFinite(Dt) ? Dt : 96
                              );
                            },
                            onMouseMove: (ze) => {
                              z.current?.key === P && Ge(ze.clientX);
                            },
                            onMouseUp: kt,
                            onMouseLeave: () => {
                              z.current?.key === P && kt();
                            }
                          }
                        )
                      ]
                    },
                    P
                  );
                }),
                me && /* @__PURE__ */ s("th", { className: ge.header, scope: "col", children: "Actions" })
              ] }),
              fe && /* @__PURE__ */ s("tr", { children: vt.map(({ key: P, column: R }) => {
                if (!Cs(R, _))
                  return /* @__PURE__ */ s("td", { className: ge.filterCell }, P);
                const ce = U.get(R.property ?? "");
                return /* @__PURE__ */ D("td", { className: ge.filterCell, children: [
                  /* @__PURE__ */ D(
                    "label",
                    {
                      className: ge.visuallyHidden,
                      htmlFor: `df-${R.property}`,
                      children: [
                        "Filter ",
                        R.title ?? R.property
                      ]
                    }
                  ),
                  /* @__PURE__ */ s(
                    "select",
                    {
                      id: `df-${R.property}`,
                      className: ge.filterSelect,
                      value: ce?.operator ?? sa(R.type ?? "string"),
                      onChange: (pe) => Me(R.property ?? "", {
                        ...ce,
                        operator: pe.target.value
                      }),
                      "aria-label": `${R.title ?? R.property} operator`,
                      children: er.filter((pe) => pe !== "Custom").map(
                        (pe) => /* @__PURE__ */ s("option", { value: pe, children: pe }, pe)
                      )
                    }
                  ),
                  /* @__PURE__ */ s(
                    "input",
                    {
                      className: ge.filterInput,
                      value: ce?.value ?? "",
                      onChange: (pe) => Me(R.property ?? "", {
                        ...ce,
                        value: pe.target.value
                      }),
                      placeholder: `Filter ${R.title ?? R.property}`,
                      "aria-label": `${R.title ?? R.property} value`
                    }
                  )
                ] }, P);
              }) })
            ] }),
            /* @__PURE__ */ D("tbody", { children: [
              tt === "__new__" && /* @__PURE__ */ D("tr", { className: ge.editRow, children: [
                vt.map(({ key: P, column: R }) => /* @__PURE__ */ s("td", { className: ge.editCell, children: R.property && /* @__PURE__ */ s(
                  "input",
                  {
                    className: ge.editInput,
                    type: R.type === "number" ? "number" : R.type === "boolean" ? "checkbox" : "text",
                    checked: R.type === "boolean" ? !!et[R.property] : void 0,
                    value: R.type === "boolean" ? void 0 : String(et[R.property] ?? ""),
                    onChange: (ce) => V((pe) => ({
                      ...pe,
                      [R.property]: R.type === "boolean" ? ce.target.checked : ce.target.value
                    })),
                    "aria-label": `${R.title ?? R.property} (new)`
                  }
                ) }, P)),
                me && /* @__PURE__ */ D("td", { className: ge.editCell, children: [
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      className: ge.commandButton,
                      onClick: () => Z(),
                      children: "Save"
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      className: ge.commandButton,
                      onClick: H,
                      children: "Cancel"
                    }
                  )
                ] })
              ] }),
              dt.map((P) => {
                if (P.type === "group" && P.group) {
                  const Ae = Je.has(P.group.key);
                  return /* @__PURE__ */ s(
                    "tr",
                    {
                      className: ge.groupRow,
                      children: /* @__PURE__ */ s(
                        "td",
                        {
                          colSpan: vt.length + (me ? 1 : 0),
                          className: ge.groupCell,
                          children: /* @__PURE__ */ D(
                            "button",
                            {
                              type: "button",
                              className: ge.groupToggle,
                              "aria-expanded": Ae,
                              onClick: () => He(P.group.key),
                              children: [
                                /* @__PURE__ */ s("span", { "aria-hidden": "true", children: Ae ? "▼" : "▶" }),
                                P.group.title,
                                ": ",
                                P.group.display,
                                " (",
                                P.group.count,
                                ")"
                              ]
                            }
                          )
                        }
                      )
                    },
                    `group-${P.group.key}`
                  );
                }
                const R = P.row, ce = n(R), pe = (h ?? []).includes(ce), Ie = tt != null && tt === String(ce);
                return /* @__PURE__ */ D(
                  "tr",
                  {
                    className: [
                      F || g !== "None" ? ge.clickable : "",
                      pe ? ge.selected : "",
                      Ie ? ge.editRow : ""
                    ].filter(Boolean).join(" "),
                    "aria-selected": g !== "None" ? pe : void 0,
                    onClick: F || g !== "None" ? (Ae) => {
                      Ka(Ae.target) || (Ot(R), Gt(R));
                    } : void 0,
                    children: [
                      vt.map(({ key: Ae, column: ze }) => /* @__PURE__ */ s(
                        "td",
                        {
                          className: je(ze),
                          style: ze.frozen ? { left: se[Ae] } : void 0,
                          children: Ie && ze.property ? /* @__PURE__ */ s(
                            "input",
                            {
                              className: ge.editInput,
                              type: ze.type === "number" ? "number" : ze.type === "boolean" ? "checkbox" : "text",
                              checked: ze.type === "boolean" ? !!et[ze.property] : void 0,
                              value: ze.type === "boolean" ? void 0 : String(et[ze.property] ?? ""),
                              onChange: (at) => V((Dt) => ({
                                ...Dt,
                                [ze.property]: ze.type === "boolean" ? at.target.checked : at.target.value
                              })),
                              "aria-label": `${ze.title ?? ze.property} (edit)`
                            }
                          ) : ke(ze, R)
                        },
                        Ae
                      )),
                      me && /* @__PURE__ */ s("td", { className: ge.commandCell, children: Ie ? /* @__PURE__ */ D(Oe, { children: [
                        /* @__PURE__ */ s(
                          "button",
                          {
                            type: "button",
                            className: ge.commandButton,
                            onClick: () => Z(R),
                            children: "Save"
                          }
                        ),
                        /* @__PURE__ */ s(
                          "button",
                          {
                            type: "button",
                            className: ge.commandButton,
                            onClick: H,
                            children: "Cancel"
                          }
                        )
                      ] }) : /* @__PURE__ */ D(Oe, { children: [
                        M !== "None" && /* @__PURE__ */ s(
                          "button",
                          {
                            type: "button",
                            className: ge.commandButton,
                            onClick: () => Rt(R),
                            children: "Edit"
                          }
                        ),
                        S && /* @__PURE__ */ s(
                          "button",
                          {
                            type: "button",
                            className: ge.commandButton,
                            onClick: () => S(R),
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
      Se.items.length === 0 && !L && /* @__PURE__ */ s("div", { className: ge.empty, children: I }),
      L && /* @__PURE__ */ s("div", { className: ge.loading, role: "status", children: "Loading…" })
    ] }),
    he && /* @__PURE__ */ s(
      ds,
      {
        pageNumber: Se.pageNumber,
        pageSize: Se.pageSize,
        count: Se.total,
        pageSizeOptions: u,
        pageNumbersCount: k,
        showSummary: w,
        showPageSizeSelector: x,
        ariaLabel: re ? "Pagination (bottom)" : "Pagination",
        onPageChange: ee,
        onPageSizeChange: nt
      }
    )
  ] });
}
const Ua = "_wrap_1e4xo_1", Wa = "_grid_1e4xo_7", Xa = "_stacked_1e4xo_13", Va = "_item_1e4xo_19", Ga = "_empty_1e4xo_25", Cn = {
  wrap: Ua,
  grid: Wa,
  stacked: Xa,
  item: Va,
  empty: Ga
};
function kv({
  data: e,
  pageSize: t = 10,
  pageSizeOptions: n,
  wrapItems: o = !1,
  itemTemplate: i,
  emptyMessage: c = "No records found",
  emptyTemplate: _,
  loadingTemplate: r,
  isLoading: l = !1,
  showPageSizeSelector: a = !0,
  className: d,
  ariaLabel: u = "Data list"
}) {
  const [k, v] = X(1), [w, x] = X(t), g = e.length, h = Math.max(1, Math.ceil(g / w)), f = Math.min(Math.max(1, k), h), y = be(() => {
    const m = (f - 1) * w;
    return e.slice(m, m + w);
  }, [e, f, w]), $ = o ? Cn.grid : Cn.stacked;
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Cn.wrap, d].filter(Boolean).join(" "),
      "aria-label": u,
      children: [
        l && r != null ? r : g === 0 ? _ ?? /* @__PURE__ */ s("div", { className: Cn.empty, children: c }) : /* @__PURE__ */ s("div", { className: $, children: y.map((m, C) => /* @__PURE__ */ s("div", { className: Cn.item, children: i ? i(m, C) : String(m) }, C)) }),
        /* @__PURE__ */ s(
          ds,
          {
            pageNumber: f,
            pageSize: w,
            count: g,
            pageSizeOptions: n,
            showPageSizeSelector: a,
            onPageChange: v,
            onPageSizeChange: (m) => {
              x(m), v(1);
            }
          }
        )
      ]
    }
  );
}
const Ya = "_label_1qfpw_1", Za = {
  label: Ya
}, wv = Fe(function({ className: t, children: n, ...o }, i) {
  return /* @__PURE__ */ s(
    "label",
    {
      ref: i,
      className: [Za.label, t].filter(Boolean).join(" "),
      ...o,
      children: n
    }
  );
}), Ja = "_textbox_1wq7t_1", Qa = "_invalid_1wq7t_37", ei = "_xs_1wq7t_44", ti = "_sm_1wq7t_50", ni = "_md_1wq7t_56", si = "_lg_1wq7t_62", ri = "_xl_1wq7t_68", os = {
  textbox: Ja,
  invalid: Qa,
  xs: ei,
  sm: ti,
  md: ni,
  lg: si,
  xl: ri
}, oi = Fe(
  function({
    size: t = "md",
    invalid: n = !1,
    className: o,
    visible: i = !0,
    type: c = "text",
    ..._
  }, r) {
    return i === !1 ? null : /* @__PURE__ */ s(
      "input",
      {
        ref: r,
        type: c,
        "data-size": t,
        className: [
          os.textbox,
          os[t],
          n ? os.invalid : null,
          o
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ..._
      }
    );
  }
), $v = oi, li = "_checkbox_1lojr_1", ai = {
  checkbox: li
}, Nv = Fe(
  function({ className: t, ...n }, o) {
    return /* @__PURE__ */ s(
      "input",
      {
        ref: o,
        type: "checkbox",
        className: [ai.checkbox, t].filter(Boolean).join(" "),
        ...n
      }
    );
  }
), ii = {
  switch: "_switch_1y0ld_1"
}, ci = Fe(function({ className: t, ...n }, o) {
  return /* @__PURE__ */ s(
    "input",
    {
      ref: o,
      type: "checkbox",
      role: "switch",
      className: [ii.switch, t].filter(Boolean).join(" "),
      ...n
    }
  );
}), di = "_trigger_iq2cp_1", ui = "_tooltip_iq2cp_7", _i = "_top_iq2cp_34", fi = "_right_iq2cp_40", hi = "_bottom_iq2cp_46", pi = "_left_iq2cp_52", mi = "_arrow_iq2cp_58", Hn = {
  trigger: di,
  tooltip: ui,
  "se-tooltip-in": "_se-tooltip-in_iq2cp_1",
  top: _i,
  right: fi,
  bottom: hi,
  left: pi,
  arrow: mi
};
function Ov({
  content: e,
  children: t,
  placement: n = "top",
  delayMs: o = 300,
  className: i
}) {
  const c = qe(), _ = oe(null), [r, l] = X(!1), a = () => {
    _.current = window.setTimeout(() => l(!0), o);
  }, d = () => {
    _.current !== null && (window.clearTimeout(_.current), _.current = null), l(!1);
  };
  ye(() => {
    if (!r) return;
    const k = (v) => {
      v.key === "Escape" && d();
    };
    return window.addEventListener("keydown", k), () => window.removeEventListener("keydown", k);
  }, [r]);
  const u = pt(t) ? ps(t, {
    "aria-describedby": [
      t.props["aria-describedby"],
      r ? c : null
    ].filter((k) => typeof k == "string").join(" ") || void 0
  }) : t;
  return /* @__PURE__ */ D(
    "span",
    {
      className: [Hn.trigger, i].filter(Boolean).join(" "),
      onMouseEnter: a,
      onMouseLeave: d,
      onFocus: a,
      onBlur: d,
      children: [
        u,
        r && /* @__PURE__ */ D(
          "span",
          {
            role: "tooltip",
            id: c,
            className: [Hn.tooltip, Hn[n]].filter(Boolean).join(" "),
            children: [
              e,
              /* @__PURE__ */ s("span", { className: Hn.arrow, "aria-hidden": "true" })
            ]
          }
        )
      ]
    }
  );
}
const gi = "_dialog_18an3_1", xi = "_sm_18an3_72", bi = "_resizable_18an3_78", yi = "_md_18an3_81", vi = "_lg_18an3_85", ki = "_header_18an3_89", wi = "_title_18an3_100", $i = "_description_18an3_107", Ni = "_close_18an3_114", Oi = "_body_18an3_144", Si = "_footer_18an3_156", qt = {
  dialog: gi,
  "se-dialog-in": "_se-dialog-in_18an3_1",
  sm: xi,
  resizable: bi,
  md: yi,
  lg: vi,
  header: ki,
  title: wi,
  description: $i,
  close: Ni,
  body: Oi,
  footer: Si
};
function Sv({
  open: e,
  onClose: t,
  title: n,
  description: o,
  children: i,
  footer: c,
  size: _ = "md",
  width: r,
  height: l,
  closeOnOverlayClick: a = !0,
  closeOnEsc: d = !0,
  resizable: u = !1,
  canClose: k,
  className: v
}) {
  const w = oe(null), x = qe(), g = qe(), h = oe(t);
  ye(() => {
    h.current = t;
  });
  const f = oe(k);
  ye(() => {
    f.current = k;
  });
  const y = oe(d);
  ye(() => {
    y.current = d;
  });
  const $ = oe(!1), m = oe(!1), C = B(() => {
    if ($.current) return;
    const O = f.current?.();
    if (O instanceof Promise) {
      O.then((E) => {
        E && !$.current && ($.current = !0, h.current());
      });
      return;
    }
    O !== !1 && ($.current = !0, h.current());
  }, []), b = B(() => {
    if (m.current) {
      m.current = !1;
      return;
    }
    h.current();
  }, []);
  return ye(() => {
    const O = w.current;
    if (O)
      if (e && !O.open) {
        const E = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        O.showModal(), (O.querySelector(
          'button[aria-label="Close dialog"]'
        ) ?? O.querySelector("button"))?.focus();
        const A = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const N = (p) => {
          p.preventDefault(), y.current && C();
        };
        return O.addEventListener("cancel", N), () => {
          O.removeEventListener("cancel", N), document.body.style.overflow = A, E?.focus({ preventScroll: !0 });
        };
      } else !e && O.open && (m.current = $.current, $.current = !1, O.close());
  }, [e, C]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button.
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ D(
    "dialog",
    {
      ref: w,
      className: [
        qt.dialog,
        qt[_],
        u ? qt.resizable : null,
        v
      ].filter(Boolean).join(" "),
      style: {
        width: r ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: r != null ? "none" : void 0,
        height: l ?? void 0
      },
      onClose: b,
      onClick: (O) => {
        O.target === w.current && a && C();
      },
      "aria-modal": "true",
      "aria-labelledby": n ? x : void 0,
      "aria-describedby": o ? g : void 0,
      children: [
        n && /* @__PURE__ */ D("header", { className: qt.header, children: [
          /* @__PURE__ */ D("div", { children: [
            /* @__PURE__ */ s("h2", { id: x, className: qt.title, children: n }),
            o && /* @__PURE__ */ s("p", { id: g, className: qt.description, children: o })
          ] }),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: qt.close,
              onClick: () => {
                C();
              },
              "aria-label": "Close dialog",
              children: /* @__PURE__ */ s(Ne, { name: "close", size: "sm" })
            }
          )
        ] }),
        i && /* @__PURE__ */ s("div", { className: qt.body, children: i }),
        c && /* @__PURE__ */ s("footer", { className: qt.footer, children: c })
      ]
    }
  );
}
const Di = "_viewport_lo2x9_1", Mi = "_topLeft_lo2x9_13", Ci = "_topRight_lo2x9_20", zi = "_bottomLeft_lo2x9_25", Ei = "_toast_lo2x9_30", Ii = "_leaving_lo2x9_61", Ai = "_info_lo2x9_77", ji = "_success_lo2x9_86", Ti = "_warning_lo2x9_95", Li = "_danger_lo2x9_104", Pi = "_content_lo2x9_113", Ri = "_title_lo2x9_118", Bi = "_description_lo2x9_141", qi = "_dismiss_lo2x9_148", Fi = "_actions_lo2x9_169", Hi = "_action_lo2x9_169", Ki = "_cancel_lo2x9_177", Ui = "_progress_lo2x9_215", mt = {
  viewport: Di,
  topLeft: Mi,
  topRight: Ci,
  bottomLeft: zi,
  toast: Ei,
  "se-toast-in": "_se-toast-in_lo2x9_1",
  leaving: Ii,
  "se-toast-out": "_se-toast-out_lo2x9_1",
  info: Ai,
  success: ji,
  warning: Ti,
  danger: Li,
  content: Pi,
  title: Ri,
  description: Bi,
  dismiss: qi,
  actions: Fi,
  action: Hi,
  cancel: Ki,
  progress: Ui,
  "se-toast-progress": "_se-toast-progress_lo2x9_1"
}, sr = ns(null);
function Dv() {
  const e = kn(sr);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const Wi = 200, Xi = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function Mv({
  children: e,
  durationMs: t = 4e3,
  position: n = "bottom-right",
  pauseOnHover: o = !0,
  className: i
}) {
  const [c, _] = X([]), [r, l] = X(!1), a = oe([]), d = oe(/* @__PURE__ */ new Map()), u = oe(!1), k = oe(0), v = (N) => {
    u.current = N, l(N);
  }, w = B((N) => {
    const p = d.current.get(N);
    p && (window.clearTimeout(p.timeoutId), p.remaining = Math.max(
      0,
      p.remaining - (Date.now() - p.startedAt)
    ));
  }, []), x = B((N) => {
    const p = d.current.get(N);
    p && (window.clearTimeout(p.timeoutId), d.current.delete(N));
  }, []), g = B(
    (N) => {
      x(N), _((p) => {
        const S = p.filter((L) => L.id !== N);
        return a.current = S, S;
      });
    },
    [x]
  ), h = B(
    (N) => {
      const p = a.current.find((S) => S.id === N);
      !p || p.leaving || (p.onAutoClose?.(), g(N));
    },
    [g]
  ), f = B(
    (N) => {
      const p = d.current.get(N);
      !p || p.remaining <= 0 || (p.startedAt = Date.now(), p.timeoutId = window.setTimeout(() => h(N), p.remaining));
    },
    [h]
  ), y = B(() => {
    u.current || d.current.forEach((N, p) => w(p)), v(!0);
  }, [w]), $ = B(() => {
    d.current.forEach((N, p) => f(p)), v(!1);
  }, [f]);
  ye(() => {
    if (!o) return;
    const N = () => {
      document.hidden ? y() : $();
    };
    return document.addEventListener("visibilitychange", N), () => document.removeEventListener("visibilitychange", N);
  }, [o, y, $]);
  const m = B(
    (N) => {
      const p = a.current.find((S) => S.id === N);
      !p || p.leaving || (p.onDismiss?.(), _((S) => {
        const L = S.map(
          (I) => I.id === N ? { ...I, leaving: !0 } : I
        );
        return a.current = L, L;
      }), window.setTimeout(() => g(N), Wi));
    },
    [g]
  ), C = B(
    (N) => {
      if (N.durationMs <= 0) return;
      const p = {
        remaining: N.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      d.current.set(N.id, p), u.current || f(N.id);
    },
    [f]
  ), b = B(
    (N) => {
      const p = a.current.find((L) => L.id === N.id), S = {
        id: N.id ?? ++k.current,
        title: N.title,
        description: N.description,
        severity: N.severity ?? "info",
        durationMs: N.durationMs ?? t,
        action: N.action,
        cancel: N.cancel,
        dismissible: N.dismissible ?? !0,
        closeOnClick: N.closeOnClick ?? !1,
        showProgress: N.showProgress ?? !1,
        position: N.position ?? n,
        onDismiss: N.onDismiss,
        onAutoClose: N.onAutoClose
      };
      _((L) => {
        const I = p ? L.map(
          (j) => j.id === S.id ? { ...S, leaving: !1 } : j
        ) : [...L, S];
        return a.current = I, I;
      }), p && x(S.id), C(S);
    },
    [t, n, C, x]
  ), O = be(() => ({ toast: b }), [b]), E = be(
    () => Array.from(/* @__PURE__ */ new Set([n, ...c.map((N) => N.position)])),
    [n, c]
  ), M = o ? y : void 0, A = o ? $ : void 0;
  return /* @__PURE__ */ D(sr.Provider, { value: O, children: [
    e,
    E.map((N) => /* @__PURE__ */ s(
      "div",
      {
        className: [mt.viewport, mt[Xi[N]], i].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: M,
        onMouseLeave: A,
        children: c.filter((p) => p.position === N).map((p) => /* @__PURE__ */ D(
          "div",
          {
            role: p.severity === "danger" ? "alert" : "status",
            "data-paused": r ? "true" : "false",
            "data-clickable": p.closeOnClick ? "true" : "false",
            className: [
              mt.toast,
              mt[p.severity],
              p.leaving ? mt.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: p.closeOnClick ? () => m(p.id) : void 0,
            children: [
              /* @__PURE__ */ D("div", { className: mt.content, children: [
                /* @__PURE__ */ s("div", { className: mt.title, children: p.title }),
                p.description && /* @__PURE__ */ s("div", { className: mt.description, children: p.description }),
                (p.action || p.cancel) && /* @__PURE__ */ D("div", { className: mt.actions, children: [
                  p.action && /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      className: mt.action,
                      onClick: () => {
                        p.action?.onClick?.(), m(p.id);
                      },
                      children: p.action.label
                    }
                  ),
                  p.cancel && /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      className: mt.cancel,
                      onClick: () => {
                        p.cancel?.onClick?.(), m(p.id);
                      },
                      children: p.cancel.label
                    }
                  )
                ] })
              ] }),
              p.dismissible && /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: mt.dismiss,
                  onClick: () => m(p.id),
                  "aria-label": "Dismiss notification",
                  children: /* @__PURE__ */ s(Ne, { name: "close", size: "sm" })
                }
              ),
              p.showProgress && p.durationMs > 0 && /* @__PURE__ */ s(
                "div",
                {
                  className: mt.progress,
                  style: { animationDuration: `${p.durationMs}ms` }
                }
              )
            ]
          },
          p.id
        ))
      },
      N
    ))
  ] });
}
const Vi = "_alert_1ktjq_1", Gi = "_xs_1ktjq_28", Yi = "_sm_1ktjq_38", Zi = "_lg_1ktjq_48", Ji = "_xl_1ktjq_58", Qi = "_primary_1ktjq_69", ec = "_secondary_1ktjq_74", tc = "_light_1ktjq_79", nc = "_base_1ktjq_84", sc = "_dark_1ktjq_89", rc = "_info_1ktjq_94", oc = "_success_1ktjq_99", lc = "_warning_1ktjq_104", ac = "_danger_1ktjq_109", ic = "_flat_1ktjq_116", cc = "_outlined_1ktjq_123", dc = "_filled_1ktjq_132", uc = "_text_1ktjq_139", _c = "_icon_1ktjq_181", fc = "_content_1ktjq_192", hc = "_title_1ktjq_197", pc = "_body_1ktjq_203", mc = "_dismiss_1ktjq_209", It = {
  alert: Vi,
  xs: Gi,
  sm: Yi,
  lg: Zi,
  xl: Ji,
  primary: Qi,
  secondary: ec,
  light: tc,
  base: nc,
  dark: sc,
  info: rc,
  success: oc,
  warning: lc,
  danger: ac,
  flat: ic,
  outlined: cc,
  filled: dc,
  text: uc,
  icon: _c,
  content: fc,
  title: hc,
  body: pc,
  dismiss: mc,
  "shade-lighter": "_shade-lighter_1ktjq_451",
  "shade-light": "_shade-light_1ktjq_451",
  "shade-dark": "_shade-dark_1ktjq_461",
  "shade-darker": "_shade-darker_1ktjq_465"
}, gc = {
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
function Cv({
  // Intentional Radzen-parity breaking change (1.0): defaults were
  // severity="info" variant="flat" dismissible={false}; Radzen ships
  // AlertStyle.Base + Variant.Filled + AllowClose. Migrate by passing
  // the old values explicitly.
  severity: e = "base",
  variant: t = "filled",
  shade: n,
  size: o = "md",
  title: i,
  icon: c,
  showIcon: _ = !0,
  children: r,
  dismissible: l = !0,
  onDismiss: a,
  visible: d,
  onVisibleChange: u,
  className: k,
  ...v
}) {
  const [w, x] = X(!1);
  if (d === !1 || d === void 0 && w)
    return null;
  const g = () => {
    d === void 0 && x(!0), a?.(), u?.(!1);
  }, h = e, f = gs(t, "filled"), y = vn(n), $ = c ?? (_ ? /* @__PURE__ */ s(Ne, { name: gc[e] }) : null);
  return /* @__PURE__ */ D(
    "div",
    {
      role: "alert",
      ...v,
      className: [
        It.alert,
        It[h],
        It[f],
        y ? It[y] : null,
        It[o],
        k
      ].filter(Boolean).join(" "),
      children: [
        $ != null && /* @__PURE__ */ s("span", { className: It.icon, "aria-hidden": "true", children: $ }),
        /* @__PURE__ */ D("div", { className: It.content, children: [
          i && /* @__PURE__ */ s("div", { className: It.title, children: i }),
          r && /* @__PURE__ */ s("div", { className: It.body, children: r })
        ] }),
        l && /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: It.dismiss,
            onClick: g,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ s(Ne, { name: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const xc = "_skeleton_14cft_1", bc = "_text_14cft_35", yc = "_circle_14cft_40", vc = "_rect_14cft_44", zs = {
  skeleton: xc,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_14cft_1",
  text: bc,
  circle: yc,
  rect: vc
};
function zv({
  variant: e = "text",
  width: t,
  height: n,
  className: o
}) {
  const i = {};
  return t !== void 0 && (i.width = typeof t == "number" ? `${t}px` : t), n !== void 0 && (i.height = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ s(
    "span",
    {
      "aria-hidden": "true",
      className: [zs.skeleton, zs[e], o].filter(Boolean).join(" "),
      style: i
    }
  );
}
const kc = "_row_tkkv2_1", wc = "_gapXs_tkkv2_12", $c = "_gapSm_tkkv2_17", Nc = "_gapMd_tkkv2_22", Oc = "_gapLg_tkkv2_27", Sc = "_gapXl_tkkv2_32", Dc = "_start_tkkv2_37", Mc = "_center_tkkv2_41", Cc = "_end_tkkv2_45", zc = "_stretch_tkkv2_49", Ec = "_baseline_tkkv2_53", Ic = "_noWrap_tkkv2_109", Ac = "_wrapReverse_tkkv2_113", jc = "_gapRowXs_tkkv2_117", Tc = "_gapRowSm_tkkv2_121", Lc = "_gapRowMd_tkkv2_125", Pc = "_gapRowLg_tkkv2_129", Rc = "_gapRowXl_tkkv2_133", un = {
  row: kc,
  gapXs: wc,
  gapSm: $c,
  gapMd: Nc,
  gapLg: Oc,
  gapXl: Sc,
  start: Dc,
  center: Mc,
  end: Cc,
  stretch: zc,
  baseline: Ec,
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
  noWrap: Ic,
  wrapReverse: Ac,
  gapRowXs: jc,
  gapRowSm: Tc,
  gapRowMd: Lc,
  gapRowLg: Pc,
  gapRowXl: Rc
}, Bc = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
}, qc = {
  xs: "gapRowXs",
  sm: "gapRowSm",
  md: "gapRowMd",
  lg: "gapRowLg",
  xl: "gapRowXl"
};
function Fc(e) {
  return typeof e != "string" ? null : Bc[e] ?? null;
}
function Hc(e) {
  return typeof e != "string" ? null : qc[e] ?? null;
}
function Es(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function Ev({
  gap: e,
  rowGap: t,
  align: n = "stretch",
  justify: o = "start",
  wrap: i = !0,
  className: c,
  style: _,
  ...r
}) {
  const l = Fc(e), a = Hc(t), d = e != null && !l ? typeof e == "number" ? `${e}px` : e : null, u = {
    // Keep --dx-col-gap in sync so Column grid math compensates for
    // arbitrary (non-tier) gaps exactly like it does for tier classes.
    ...d ? { gap: d, "--dx-col-gap": d } : {},
    ...t != null && !a ? { rowGap: typeof t == "number" ? `${t}px` : t } : {},
    ..._
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: [
        un.row,
        un[n],
        un[`justify-${o}`],
        Es(i) != null ? un[Es(i)] : null,
        l ? un[l] : null,
        a ? un[a] : null,
        c
      ].filter(Boolean).join(" "),
      style: u,
      ...r
    }
  );
}
const Kc = "_column_sh0ss_1", Uc = "_Size1_sh0ss_15", Wc = "_Size2_sh0ss_24", Xc = "_Size3_sh0ss_33", Vc = "_Size4_sh0ss_42", Gc = "_Size5_sh0ss_51", Yc = "_Size6_sh0ss_60", Zc = "_Size7_sh0ss_69", Jc = "_Size8_sh0ss_78", Qc = "_Size9_sh0ss_87", ed = "_Size10_sh0ss_96", td = "_Size11_sh0ss_105", nd = "_Size12_sh0ss_114", sd = "_Offset0_sh0ss_119", rd = "_Offset1_sh0ss_122", od = "_Offset2_sh0ss_127", ld = "_Offset3_sh0ss_132", ad = "_Offset4_sh0ss_137", id = "_Offset5_sh0ss_142", cd = "_Offset6_sh0ss_147", dd = "_Offset7_sh0ss_152", ud = "_Offset8_sh0ss_157", _d = "_Offset9_sh0ss_162", fd = "_Offset10_sh0ss_167", hd = "_Offset11_sh0ss_172", pd = "_Offset12_sh0ss_177", md = "_OrderFirst_sh0ss_182", gd = "_OrderLast_sh0ss_185", xd = "_Order0_sh0ss_188", bd = "_Order1_sh0ss_191", yd = "_Order2_sh0ss_194", vd = "_Order3_sh0ss_197", kd = "_Order4_sh0ss_200", wd = "_Order5_sh0ss_203", $d = "_Order6_sh0ss_206", Nd = "_Order7_sh0ss_209", Od = "_Order8_sh0ss_212", Sd = "_Order9_sh0ss_215", Dd = "_Order10_sh0ss_218", Md = "_Order11_sh0ss_221", Cd = "_Order12_sh0ss_224", zd = "_xsSize1_sh0ss_229", Ed = "_xsSize2_sh0ss_238", Id = "_xsSize3_sh0ss_247", Ad = "_xsSize4_sh0ss_256", jd = "_xsSize5_sh0ss_265", Td = "_xsSize6_sh0ss_274", Ld = "_xsSize7_sh0ss_283", Pd = "_xsSize8_sh0ss_292", Rd = "_xsSize9_sh0ss_301", Bd = "_xsSize10_sh0ss_310", qd = "_xsSize11_sh0ss_321", Fd = "_xsSize12_sh0ss_332", Hd = "_xsOffset0_sh0ss_337", Kd = "_xsOffset1_sh0ss_340", Ud = "_xsOffset2_sh0ss_345", Wd = "_xsOffset3_sh0ss_350", Xd = "_xsOffset4_sh0ss_355", Vd = "_xsOffset5_sh0ss_360", Gd = "_xsOffset6_sh0ss_365", Yd = "_xsOffset7_sh0ss_370", Zd = "_xsOffset8_sh0ss_375", Jd = "_xsOffset9_sh0ss_380", Qd = "_xsOffset10_sh0ss_385", eu = "_xsOffset11_sh0ss_391", tu = "_xsOffset12_sh0ss_397", nu = "_xsOrderFirst_sh0ss_403", su = "_xsOrderLast_sh0ss_406", ru = "_xsOrder0_sh0ss_409", ou = "_xsOrder1_sh0ss_412", lu = "_xsOrder2_sh0ss_415", au = "_xsOrder3_sh0ss_418", iu = "_xsOrder4_sh0ss_421", cu = "_xsOrder5_sh0ss_424", du = "_xsOrder6_sh0ss_427", uu = "_xsOrder7_sh0ss_430", _u = "_xsOrder8_sh0ss_433", fu = "_xsOrder9_sh0ss_436", hu = "_xsOrder10_sh0ss_439", pu = "_xsOrder11_sh0ss_442", mu = "_xsOrder12_sh0ss_445", gu = "_smSize1_sh0ss_451", xu = "_smSize2_sh0ss_460", bu = "_smSize3_sh0ss_469", yu = "_smSize4_sh0ss_478", vu = "_smSize5_sh0ss_487", ku = "_smSize6_sh0ss_496", wu = "_smSize7_sh0ss_505", $u = "_smSize8_sh0ss_514", Nu = "_smSize9_sh0ss_523", Ou = "_smSize10_sh0ss_532", Su = "_smSize11_sh0ss_543", Du = "_smSize12_sh0ss_554", Mu = "_smOffset0_sh0ss_559", Cu = "_smOffset1_sh0ss_562", zu = "_smOffset2_sh0ss_567", Eu = "_smOffset3_sh0ss_572", Iu = "_smOffset4_sh0ss_577", Au = "_smOffset5_sh0ss_582", ju = "_smOffset6_sh0ss_587", Tu = "_smOffset7_sh0ss_592", Lu = "_smOffset8_sh0ss_597", Pu = "_smOffset9_sh0ss_602", Ru = "_smOffset10_sh0ss_607", Bu = "_smOffset11_sh0ss_613", qu = "_smOffset12_sh0ss_619", Fu = "_smOrderFirst_sh0ss_625", Hu = "_smOrderLast_sh0ss_628", Ku = "_smOrder0_sh0ss_631", Uu = "_smOrder1_sh0ss_634", Wu = "_smOrder2_sh0ss_637", Xu = "_smOrder3_sh0ss_640", Vu = "_smOrder4_sh0ss_643", Gu = "_smOrder5_sh0ss_646", Yu = "_smOrder6_sh0ss_649", Zu = "_smOrder7_sh0ss_652", Ju = "_smOrder8_sh0ss_655", Qu = "_smOrder9_sh0ss_658", e_ = "_smOrder10_sh0ss_661", t_ = "_smOrder11_sh0ss_664", n_ = "_smOrder12_sh0ss_667", s_ = "_mdSize1_sh0ss_673", r_ = "_mdSize2_sh0ss_682", o_ = "_mdSize3_sh0ss_691", l_ = "_mdSize4_sh0ss_700", a_ = "_mdSize5_sh0ss_709", i_ = "_mdSize6_sh0ss_718", c_ = "_mdSize7_sh0ss_727", d_ = "_mdSize8_sh0ss_736", u_ = "_mdSize9_sh0ss_745", __ = "_mdSize10_sh0ss_754", f_ = "_mdSize11_sh0ss_765", h_ = "_mdSize12_sh0ss_776", p_ = "_mdOffset0_sh0ss_781", m_ = "_mdOffset1_sh0ss_784", g_ = "_mdOffset2_sh0ss_789", x_ = "_mdOffset3_sh0ss_794", b_ = "_mdOffset4_sh0ss_799", y_ = "_mdOffset5_sh0ss_804", v_ = "_mdOffset6_sh0ss_809", k_ = "_mdOffset7_sh0ss_814", w_ = "_mdOffset8_sh0ss_819", $_ = "_mdOffset9_sh0ss_824", N_ = "_mdOffset10_sh0ss_829", O_ = "_mdOffset11_sh0ss_835", S_ = "_mdOffset12_sh0ss_841", D_ = "_mdOrderFirst_sh0ss_847", M_ = "_mdOrderLast_sh0ss_850", C_ = "_mdOrder0_sh0ss_853", z_ = "_mdOrder1_sh0ss_856", E_ = "_mdOrder2_sh0ss_859", I_ = "_mdOrder3_sh0ss_862", A_ = "_mdOrder4_sh0ss_865", j_ = "_mdOrder5_sh0ss_868", T_ = "_mdOrder6_sh0ss_871", L_ = "_mdOrder7_sh0ss_874", P_ = "_mdOrder8_sh0ss_877", R_ = "_mdOrder9_sh0ss_880", B_ = "_mdOrder10_sh0ss_883", q_ = "_mdOrder11_sh0ss_886", F_ = "_mdOrder12_sh0ss_889", H_ = "_lgSize1_sh0ss_895", K_ = "_lgSize2_sh0ss_904", U_ = "_lgSize3_sh0ss_913", W_ = "_lgSize4_sh0ss_922", X_ = "_lgSize5_sh0ss_931", V_ = "_lgSize6_sh0ss_940", G_ = "_lgSize7_sh0ss_949", Y_ = "_lgSize8_sh0ss_958", Z_ = "_lgSize9_sh0ss_967", J_ = "_lgSize10_sh0ss_976", Q_ = "_lgSize11_sh0ss_987", ef = "_lgSize12_sh0ss_998", tf = "_lgOffset0_sh0ss_1003", nf = "_lgOffset1_sh0ss_1006", sf = "_lgOffset2_sh0ss_1011", rf = "_lgOffset3_sh0ss_1016", of = "_lgOffset4_sh0ss_1021", lf = "_lgOffset5_sh0ss_1026", af = "_lgOffset6_sh0ss_1031", cf = "_lgOffset7_sh0ss_1036", df = "_lgOffset8_sh0ss_1041", uf = "_lgOffset9_sh0ss_1046", _f = "_lgOffset10_sh0ss_1051", ff = "_lgOffset11_sh0ss_1057", hf = "_lgOffset12_sh0ss_1063", pf = "_lgOrderFirst_sh0ss_1069", mf = "_lgOrderLast_sh0ss_1072", gf = "_lgOrder0_sh0ss_1075", xf = "_lgOrder1_sh0ss_1078", bf = "_lgOrder2_sh0ss_1081", yf = "_lgOrder3_sh0ss_1084", vf = "_lgOrder4_sh0ss_1087", kf = "_lgOrder5_sh0ss_1090", wf = "_lgOrder6_sh0ss_1093", $f = "_lgOrder7_sh0ss_1096", Nf = "_lgOrder8_sh0ss_1099", Of = "_lgOrder9_sh0ss_1102", Sf = "_lgOrder10_sh0ss_1105", Df = "_lgOrder11_sh0ss_1108", Mf = "_lgOrder12_sh0ss_1111", Cf = "_xlSize1_sh0ss_1117", zf = "_xlSize2_sh0ss_1126", Ef = "_xlSize3_sh0ss_1135", If = "_xlSize4_sh0ss_1144", Af = "_xlSize5_sh0ss_1153", jf = "_xlSize6_sh0ss_1162", Tf = "_xlSize7_sh0ss_1171", Lf = "_xlSize8_sh0ss_1180", Pf = "_xlSize9_sh0ss_1189", Rf = "_xlSize10_sh0ss_1198", Bf = "_xlSize11_sh0ss_1209", qf = "_xlSize12_sh0ss_1220", Ff = "_xlOffset0_sh0ss_1225", Hf = "_xlOffset1_sh0ss_1228", Kf = "_xlOffset2_sh0ss_1233", Uf = "_xlOffset3_sh0ss_1238", Wf = "_xlOffset4_sh0ss_1243", Xf = "_xlOffset5_sh0ss_1248", Vf = "_xlOffset6_sh0ss_1253", Gf = "_xlOffset7_sh0ss_1258", Yf = "_xlOffset8_sh0ss_1263", Zf = "_xlOffset9_sh0ss_1268", Jf = "_xlOffset10_sh0ss_1273", Qf = "_xlOffset11_sh0ss_1279", e1 = "_xlOffset12_sh0ss_1285", t1 = "_xlOrderFirst_sh0ss_1291", n1 = "_xlOrderLast_sh0ss_1294", s1 = "_xlOrder0_sh0ss_1297", r1 = "_xlOrder1_sh0ss_1300", o1 = "_xlOrder2_sh0ss_1303", l1 = "_xlOrder3_sh0ss_1306", a1 = "_xlOrder4_sh0ss_1309", i1 = "_xlOrder5_sh0ss_1312", c1 = "_xlOrder6_sh0ss_1315", d1 = "_xlOrder7_sh0ss_1318", u1 = "_xlOrder8_sh0ss_1321", _1 = "_xlOrder9_sh0ss_1324", f1 = "_xlOrder10_sh0ss_1327", h1 = "_xlOrder11_sh0ss_1330", p1 = "_xlOrder12_sh0ss_1333", m1 = "_xxSize1_sh0ss_1339", g1 = "_xxSize2_sh0ss_1348", x1 = "_xxSize3_sh0ss_1357", b1 = "_xxSize4_sh0ss_1366", y1 = "_xxSize5_sh0ss_1375", v1 = "_xxSize6_sh0ss_1384", k1 = "_xxSize7_sh0ss_1393", w1 = "_xxSize8_sh0ss_1402", $1 = "_xxSize9_sh0ss_1411", N1 = "_xxSize10_sh0ss_1420", O1 = "_xxSize11_sh0ss_1431", S1 = "_xxSize12_sh0ss_1442", D1 = "_xxOffset0_sh0ss_1447", M1 = "_xxOffset1_sh0ss_1450", C1 = "_xxOffset2_sh0ss_1455", z1 = "_xxOffset3_sh0ss_1460", E1 = "_xxOffset4_sh0ss_1465", I1 = "_xxOffset5_sh0ss_1470", A1 = "_xxOffset6_sh0ss_1475", j1 = "_xxOffset7_sh0ss_1480", T1 = "_xxOffset8_sh0ss_1485", L1 = "_xxOffset9_sh0ss_1490", P1 = "_xxOffset10_sh0ss_1495", R1 = "_xxOffset11_sh0ss_1501", B1 = "_xxOffset12_sh0ss_1507", q1 = "_xxOrderFirst_sh0ss_1513", F1 = "_xxOrderLast_sh0ss_1516", H1 = "_xxOrder0_sh0ss_1519", K1 = "_xxOrder1_sh0ss_1522", U1 = "_xxOrder2_sh0ss_1525", W1 = "_xxOrder3_sh0ss_1528", X1 = "_xxOrder4_sh0ss_1531", V1 = "_xxOrder5_sh0ss_1534", G1 = "_xxOrder6_sh0ss_1537", Y1 = "_xxOrder7_sh0ss_1540", Z1 = "_xxOrder8_sh0ss_1543", J1 = "_xxOrder9_sh0ss_1546", Q1 = "_xxOrder10_sh0ss_1549", eh = "_xxOrder11_sh0ss_1552", th = "_xxOrder12_sh0ss_1555", Kn = {
  column: Kc,
  Size1: Uc,
  Size2: Wc,
  Size3: Xc,
  Size4: Vc,
  Size5: Gc,
  Size6: Yc,
  Size7: Zc,
  Size8: Jc,
  Size9: Qc,
  Size10: ed,
  Size11: td,
  Size12: nd,
  Offset0: sd,
  Offset1: rd,
  Offset2: od,
  Offset3: ld,
  Offset4: ad,
  Offset5: id,
  Offset6: cd,
  Offset7: dd,
  Offset8: ud,
  Offset9: _d,
  Offset10: fd,
  Offset11: hd,
  Offset12: pd,
  OrderFirst: md,
  OrderLast: gd,
  Order0: xd,
  Order1: bd,
  Order2: yd,
  Order3: vd,
  Order4: kd,
  Order5: wd,
  Order6: $d,
  Order7: Nd,
  Order8: Od,
  Order9: Sd,
  Order10: Dd,
  Order11: Md,
  Order12: Cd,
  xsSize1: zd,
  xsSize2: Ed,
  xsSize3: Id,
  xsSize4: Ad,
  xsSize5: jd,
  xsSize6: Td,
  xsSize7: Ld,
  xsSize8: Pd,
  xsSize9: Rd,
  xsSize10: Bd,
  xsSize11: qd,
  xsSize12: Fd,
  xsOffset0: Hd,
  xsOffset1: Kd,
  xsOffset2: Ud,
  xsOffset3: Wd,
  xsOffset4: Xd,
  xsOffset5: Vd,
  xsOffset6: Gd,
  xsOffset7: Yd,
  xsOffset8: Zd,
  xsOffset9: Jd,
  xsOffset10: Qd,
  xsOffset11: eu,
  xsOffset12: tu,
  xsOrderFirst: nu,
  xsOrderLast: su,
  xsOrder0: ru,
  xsOrder1: ou,
  xsOrder2: lu,
  xsOrder3: au,
  xsOrder4: iu,
  xsOrder5: cu,
  xsOrder6: du,
  xsOrder7: uu,
  xsOrder8: _u,
  xsOrder9: fu,
  xsOrder10: hu,
  xsOrder11: pu,
  xsOrder12: mu,
  smSize1: gu,
  smSize2: xu,
  smSize3: bu,
  smSize4: yu,
  smSize5: vu,
  smSize6: ku,
  smSize7: wu,
  smSize8: $u,
  smSize9: Nu,
  smSize10: Ou,
  smSize11: Su,
  smSize12: Du,
  smOffset0: Mu,
  smOffset1: Cu,
  smOffset2: zu,
  smOffset3: Eu,
  smOffset4: Iu,
  smOffset5: Au,
  smOffset6: ju,
  smOffset7: Tu,
  smOffset8: Lu,
  smOffset9: Pu,
  smOffset10: Ru,
  smOffset11: Bu,
  smOffset12: qu,
  smOrderFirst: Fu,
  smOrderLast: Hu,
  smOrder0: Ku,
  smOrder1: Uu,
  smOrder2: Wu,
  smOrder3: Xu,
  smOrder4: Vu,
  smOrder5: Gu,
  smOrder6: Yu,
  smOrder7: Zu,
  smOrder8: Ju,
  smOrder9: Qu,
  smOrder10: e_,
  smOrder11: t_,
  smOrder12: n_,
  mdSize1: s_,
  mdSize2: r_,
  mdSize3: o_,
  mdSize4: l_,
  mdSize5: a_,
  mdSize6: i_,
  mdSize7: c_,
  mdSize8: d_,
  mdSize9: u_,
  mdSize10: __,
  mdSize11: f_,
  mdSize12: h_,
  mdOffset0: p_,
  mdOffset1: m_,
  mdOffset2: g_,
  mdOffset3: x_,
  mdOffset4: b_,
  mdOffset5: y_,
  mdOffset6: v_,
  mdOffset7: k_,
  mdOffset8: w_,
  mdOffset9: $_,
  mdOffset10: N_,
  mdOffset11: O_,
  mdOffset12: S_,
  mdOrderFirst: D_,
  mdOrderLast: M_,
  mdOrder0: C_,
  mdOrder1: z_,
  mdOrder2: E_,
  mdOrder3: I_,
  mdOrder4: A_,
  mdOrder5: j_,
  mdOrder6: T_,
  mdOrder7: L_,
  mdOrder8: P_,
  mdOrder9: R_,
  mdOrder10: B_,
  mdOrder11: q_,
  mdOrder12: F_,
  lgSize1: H_,
  lgSize2: K_,
  lgSize3: U_,
  lgSize4: W_,
  lgSize5: X_,
  lgSize6: V_,
  lgSize7: G_,
  lgSize8: Y_,
  lgSize9: Z_,
  lgSize10: J_,
  lgSize11: Q_,
  lgSize12: ef,
  lgOffset0: tf,
  lgOffset1: nf,
  lgOffset2: sf,
  lgOffset3: rf,
  lgOffset4: of,
  lgOffset5: lf,
  lgOffset6: af,
  lgOffset7: cf,
  lgOffset8: df,
  lgOffset9: uf,
  lgOffset10: _f,
  lgOffset11: ff,
  lgOffset12: hf,
  lgOrderFirst: pf,
  lgOrderLast: mf,
  lgOrder0: gf,
  lgOrder1: xf,
  lgOrder2: bf,
  lgOrder3: yf,
  lgOrder4: vf,
  lgOrder5: kf,
  lgOrder6: wf,
  lgOrder7: $f,
  lgOrder8: Nf,
  lgOrder9: Of,
  lgOrder10: Sf,
  lgOrder11: Df,
  lgOrder12: Mf,
  xlSize1: Cf,
  xlSize2: zf,
  xlSize3: Ef,
  xlSize4: If,
  xlSize5: Af,
  xlSize6: jf,
  xlSize7: Tf,
  xlSize8: Lf,
  xlSize9: Pf,
  xlSize10: Rf,
  xlSize11: Bf,
  xlSize12: qf,
  xlOffset0: Ff,
  xlOffset1: Hf,
  xlOffset2: Kf,
  xlOffset3: Uf,
  xlOffset4: Wf,
  xlOffset5: Xf,
  xlOffset6: Vf,
  xlOffset7: Gf,
  xlOffset8: Yf,
  xlOffset9: Zf,
  xlOffset10: Jf,
  xlOffset11: Qf,
  xlOffset12: e1,
  xlOrderFirst: t1,
  xlOrderLast: n1,
  xlOrder0: s1,
  xlOrder1: r1,
  xlOrder2: o1,
  xlOrder3: l1,
  xlOrder4: a1,
  xlOrder5: i1,
  xlOrder6: c1,
  xlOrder7: d1,
  xlOrder8: u1,
  xlOrder9: _1,
  xlOrder10: f1,
  xlOrder11: h1,
  xlOrder12: p1,
  xxSize1: m1,
  xxSize2: g1,
  xxSize3: x1,
  xxSize4: b1,
  xxSize5: y1,
  xxSize6: v1,
  xxSize7: k1,
  xxSize8: w1,
  xxSize9: $1,
  xxSize10: N1,
  xxSize11: O1,
  xxSize12: S1,
  xxOffset0: D1,
  xxOffset1: M1,
  xxOffset2: C1,
  xxOffset3: z1,
  xxOffset4: E1,
  xxOffset5: I1,
  xxOffset6: A1,
  xxOffset7: j1,
  xxOffset8: T1,
  xxOffset9: L1,
  xxOffset10: P1,
  xxOffset11: R1,
  xxOffset12: B1,
  xxOrderFirst: q1,
  xxOrderLast: F1,
  xxOrder0: H1,
  xxOrder1: K1,
  xxOrder2: U1,
  xxOrder3: W1,
  xxOrder4: X1,
  xxOrder5: V1,
  xxOrder6: G1,
  xxOrder7: Y1,
  xxOrder8: Z1,
  xxOrder9: J1,
  xxOrder10: Q1,
  xxOrder11: eh,
  xxOrder12: th
}, nh = [
  ["", "size", "offset", "order"],
  ["xs", "sizeXs", "offsetXs", "orderXs"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xx", "sizeXx", "offsetXx", "orderXx"]
];
function sh(e, t) {
  if (!Number.isInteger(t) || t < 1 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 1 and 12.`
    );
}
function rh(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12.`
    );
}
function oh(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12 or first/last.`
    );
}
function lh(e, t, n) {
  return t === "first" ? `${e}OrderFirst` : t === "last" ? `${e}OrderLast` : (oh(n, t), `${e}Order${t}`);
}
function Iv({ className: e, style: t, ...n }) {
  const o = [Kn.column], i = { ...t };
  for (const [A, N, p, S] of nh) {
    const L = n[N], I = n[p], j = n[S];
    if (L != null) {
      sh(N, L);
      const T = Kn[`${A}Size${L}`];
      T && o.push(T);
    }
    if (I != null) {
      rh(p, I);
      const T = Kn[`${A}Offset${I}`];
      T && o.push(T);
    }
    if (j != null) {
      const T = Kn[lh(A, j, S)];
      T && o.push(T);
    }
  }
  const {
    size: c,
    offset: _,
    sizeXs: r,
    offsetXs: l,
    sizeSm: a,
    offsetSm: d,
    sizeMd: u,
    offsetMd: k,
    sizeLg: v,
    offsetLg: w,
    sizeXl: x,
    offsetXl: g,
    sizeXx: h,
    offsetXx: f,
    order: y,
    orderXs: $,
    orderSm: m,
    orderMd: C,
    orderLg: b,
    orderXl: O,
    orderXx: E,
    ...M
  } = n;
  return /* @__PURE__ */ s(
    "div",
    {
      className: [...o, e].filter(Boolean).join(" "),
      style: i,
      ...M
    }
  );
}
const ah = "_stack_1yc1g_1", ih = "_gapXs_1yc1g_29", ch = "_gapSm_1yc1g_33", dh = "_gapMd_1yc1g_37", uh = "_gapLg_1yc1g_41", _h = "_gapXl_1yc1g_45", _n = {
  stack: ah,
  "dir-row": "_dir-row_1yc1g_5",
  "dir-row-reverse": "_dir-row-reverse_1yc1g_9",
  "dir-column": "_dir-column_1yc1g_13",
  "dir-column-reverse": "_dir-column-reverse_1yc1g_17",
  "wrap-nowrap": "_wrap-nowrap_1yc1g_21",
  "wrap-wrap-reverse": "_wrap-wrap-reverse_1yc1g_25",
  gapXs: ih,
  gapSm: ch,
  gapMd: dh,
  gapLg: uh,
  gapXl: _h,
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
}, fh = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function hh(e) {
  return typeof e != "string" ? null : fh[e] ?? null;
}
function Is(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function Av({
  orientation: e = "vertical",
  reverse: t = !1,
  wrap: n = !0,
  gap: o = "sm",
  align: i,
  justify: c,
  className: _,
  style: r,
  ...l
}) {
  const a = hh(o), d = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", u = {
    ...o != null && !a ? { gap: typeof o == "number" ? `${o}px` : o } : {},
    ...r
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: [
        _n.stack,
        _n[`dir-${d}`],
        Is(n) !== "wrap" ? _n[`wrap-${Is(n)}`] : null,
        i != null ? _n[`align-${i}`] : null,
        c != null ? _n[`justify-${c}`] : null,
        a ? _n[a] : null,
        _
      ].filter(Boolean).join(" "),
      style: u,
      ...l
    }
  );
}
const ph = "_autogrid_1fz7w_1", mh = "_gapXs_1fz7w_10", gh = "_gapSm_1fz7w_14", xh = "_gapMd_1fz7w_18", bh = "_gapLg_1fz7w_22", yh = "_gapXl_1fz7w_26", As = {
  autogrid: ph,
  gapXs: mh,
  gapSm: gh,
  gapMd: xh,
  gapLg: bh,
  gapXl: yh
}, vh = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function kh(e) {
  return typeof e != "string" ? null : vh[e] ?? null;
}
function jv({
  min: e = 240,
  gap: t = "md",
  className: n,
  style: o,
  visible: i = !0,
  ...c
}) {
  if (i === !1) return null;
  const _ = kh(t), r = {
    // Keep --dx-autogrid-min in sync so the track math follows the prop.
    "--dx-autogrid-min": typeof e == "number" ? `${e}px` : e,
    ...t != null && !_ ? { gap: typeof t == "number" ? `${t}px` : t } : {},
    ...o
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: [As.autogrid, _ ? As[_] : null, n].filter(Boolean).join(" "),
      style: r,
      ...c
    }
  );
}
const wh = "_layout_fxvw1_1", $h = "_row_fxvw1_7", Nh = "_grid_fxvw1_21", Oh = "_gridRight_fxvw1_27", Sh = "_gridHeader_fxvw1_31", Dh = "_gridFooter_fxvw1_36", Mh = "_gridContents_fxvw1_41", Ch = "_gridBody_fxvw1_45", Ft = {
  layout: wh,
  row: $h,
  grid: Nh,
  gridRight: Oh,
  gridHeader: Sh,
  gridFooter: Dh,
  gridContents: Mh,
  gridBody: Ch
}, zh = "_footer_1thaw_1", Eh = "_sticky_1thaw_9", js = {
  footer: zh,
  sticky: Eh
};
function Ih({
  sticky: e = !1,
  className: t,
  children: n,
  ...o
}) {
  return /* @__PURE__ */ s(
    "footer",
    {
      className: [js.footer, e ? js.sticky : null, t].filter(Boolean).join(" "),
      ...o,
      children: n
    }
  );
}
const Ah = "_header_wh9gi_1", jh = "_sticky_wh9gi_9", Ts = {
  header: Ah,
  sticky: jh
};
function Th({
  sticky: e = !1,
  className: t,
  children: n,
  ...o
}) {
  return /* @__PURE__ */ s(
    "header",
    {
      className: [Ts.header, e ? Ts.sticky : null, t].filter(Boolean).join(" "),
      ...o,
      children: n
    }
  );
}
const Lh = "_sidebar_1a2mp_1", Ph = "_sticky_1a2mp_23", Rh = "_left_1a2mp_41", Bh = "_right_1a2mp_45", qh = "_start_1a2mp_50", Fh = "_end_1a2mp_54", Hh = "_fullHeight_1a2mp_60", Kh = "_collapsed_1a2mp_64", Uh = "_responsive_1a2mp_72", Wh = "_overlay_1a2mp_80", Xh = "_mask_1a2mp_108", Zt = {
  sidebar: Lh,
  sticky: Ph,
  left: Rh,
  right: Bh,
  start: qh,
  end: Fh,
  fullHeight: Hh,
  collapsed: Kh,
  responsive: Uh,
  overlay: Wh,
  mask: Xh
};
function Vh({
  position: e = "left",
  expanded: t = !0,
  responsive: n = !1,
  overlay: o = !1,
  fullHeight: i = !1,
  sticky: c = !1,
  onClose: _,
  className: r,
  children: l,
  ...a
}) {
  return ye(() => {
    if (!o || !t || _ == null) return;
    const d = (u) => {
      u.key === "Escape" && _();
    };
    return document.addEventListener("keydown", d), () => document.removeEventListener("keydown", d);
  }, [o, t, _]), /* @__PURE__ */ D(Oe, { children: [
    o && t ? /* @__PURE__ */ s(
      "div",
      {
        className: `${Zt.mask} se-layout-mask`,
        "aria-hidden": "true",
        onClick: _
      }
    ) : null,
    /* @__PURE__ */ s(
      "aside",
      {
        className: [
          Zt.sidebar,
          Zt[e],
          t ? null : Zt.collapsed,
          n ? Zt.responsive : null,
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
function Tv(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ s(Oe, { children: e.children });
  const { className: t, children: n, ...o } = e, i = [], c = [], _ = [], r = [], l = [], a = [];
  Bn.forEach(n, (k) => {
    if (!pt(k)) {
      _.push(k);
      return;
    }
    if (k.type === Th)
      i.push(k);
    else if (k.type === Ih)
      c.push(k);
    else if (k.type === Vh) {
      const v = k, w = v.props.position;
      a.push(v), (w === "right" || w === "end" ? l : r).push(v);
    } else
      _.push(k);
  });
  const d = a.length === 1 && a[0]?.props.fullHeight === !0 ? a[0] : null, u = d != null && (d.props.position === "right" || d.props.position === "end");
  if (d) {
    const k = u ? l : r;
    return /* @__PURE__ */ D(
      "div",
      {
        className: [
          Ft.layout,
          Ft.grid,
          u ? Ft.gridRight : null,
          t
        ].filter(Boolean).join(" "),
        ...o,
        children: [
          i.length > 0 && /* @__PURE__ */ s("div", { className: Ft.gridHeader, children: i }),
          /* @__PURE__ */ D("div", { className: Ft.gridContents, children: [
            k,
            /* @__PURE__ */ s("div", { className: Ft.gridBody, children: _ })
          ] }),
          c.length > 0 && /* @__PURE__ */ s("div", { className: Ft.gridFooter, children: c })
        ]
      }
    );
  }
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Ft.layout, t].filter(Boolean).join(" "),
      ...o,
      children: [
        i,
        /* @__PURE__ */ D("div", { className: Ft.row, children: [
          r,
          _,
          l
        ] }),
        c
      ]
    }
  );
}
const Gh = "_body_akga4_1", Yh = "_bare_akga4_10", Ls = {
  body: Gh,
  bare: Yh
};
function Lv({
  as: e = "main",
  padded: t = !0,
  className: n,
  children: o,
  ...i
}) {
  return /* @__PURE__ */ s(
    e,
    {
      className: [Ls.body, t ? null : Ls.bare, n].filter(Boolean).join(" "),
      ...i,
      children: o
    }
  );
}
const Zh = "_toggle_lxnk5_1", Jh = {
  toggle: Zh
};
function Pv({
  icon: e = "menu",
  label: t = "Toggle sidebar",
  className: n,
  type: o = "button",
  children: i,
  ...c
}) {
  return /* @__PURE__ */ s(
    "button",
    {
      type: o,
      "aria-label": t,
      className: [Jh.toggle, n].filter(Boolean).join(" "),
      ...c,
      children: i ?? /* @__PURE__ */ s(Ne, { name: e, size: 20 })
    }
  );
}
const Qh = "_track_1itxd_1", ep = "_bar_1itxd_31", tp = "_primary_1itxd_39", np = "_success_1itxd_43", sp = "_warning_1itxd_47", rp = "_danger_1itxd_51", op = "_indeterminate_1itxd_149", lp = "_circular_1itxd_163", ap = "_fill_1itxd_203", gt = {
  track: Qh,
  "linear-xs": "_linear-xs_1itxd_11",
  "linear-sm": "_linear-sm_1itxd_15",
  "linear-md": "_linear-md_1itxd_19",
  "linear-lg": "_linear-lg_1itxd_23",
  "linear-xl": "_linear-xl_1itxd_27",
  bar: ep,
  primary: tp,
  success: np,
  warning: sp,
  danger: rp,
  "shade-lighter": "_shade-lighter_1itxd_133",
  "shade-light": "_shade-light_1itxd_133",
  "shade-dark": "_shade-dark_1itxd_141",
  "shade-darker": "_shade-darker_1itxd_145",
  indeterminate: op,
  "se-progress-slide": "_se-progress-slide_1itxd_1",
  circular: lp,
  "circular-xs": "_circular-xs_1itxd_169",
  "circular-sm": "_circular-sm_1itxd_174",
  "circular-md": "_circular-md_1itxd_179",
  "circular-lg": "_circular-lg_1itxd_184",
  "circular-xl": "_circular-xl_1itxd_189",
  fill: ap,
  "se-progress-spin": "_se-progress-spin_1itxd_1"
};
function Rv({
  value: e = 0,
  max: t = 100,
  severity: n = "primary",
  shade: o,
  indeterminate: i = !1,
  variant: c = "linear",
  size: _ = "md",
  className: r,
  visible: l = !0,
  ...a
}) {
  if (l === !1) return null;
  const d = t > 0 ? Math.min(t, Math.max(0, e)) : 0, u = t > 0 ? d / t * 100 : 0;
  if (c === "circular") {
    const v = typeof _ == "string", w = 2, x = 10.5, g = 2 * Math.PI * x, h = g * (i ? 0.75 : 1), f = i ? 0 : g * (1 - u / 100), y = vn(o);
    return /* @__PURE__ */ D(
      "svg",
      {
        width: v ? void 0 : _,
        height: v ? void 0 : _,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": a["aria-label"],
        "aria-labelledby": a["aria-labelledby"],
        "aria-valuenow": i ? void 0 : Math.round(d),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        ...a,
        className: [
          gt.circular,
          gt[n],
          y ? gt[y] : null,
          v ? gt[`circular-${_}`] : null,
          i ? gt.indeterminate : null,
          r
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ s(
            "circle",
            {
              className: gt.track,
              cx: 12,
              cy: 12,
              r: x,
              strokeWidth: w
            }
          ),
          /* @__PURE__ */ s(
            "circle",
            {
              className: gt.fill,
              cx: 12,
              cy: 12,
              r: x,
              strokeWidth: w,
              strokeDasharray: `${h} ${g}`,
              strokeDashoffset: f
            }
          )
        ]
      }
    );
  }
  const k = vn(o);
  return /* @__PURE__ */ s(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": i ? void 0 : Math.round(d),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        gt.track,
        gt[n],
        k ? gt[k] : null,
        typeof _ == "string" ? gt[`linear-${_}`] : null,
        i ? gt.indeterminate : null,
        r
      ].filter(Boolean).join(" "),
      ...a,
      children: /* @__PURE__ */ s(
        "div",
        {
          className: gt.bar,
          style: i ? void 0 : { width: `${u}%` }
        }
      )
    }
  );
}
function ip(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function rr(e) {
  const [t, n] = X(() => ip(e));
  return ye(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const o = window.matchMedia(e);
    n(o.matches);
    const i = (c) => n(c.matches);
    return typeof o.addEventListener == "function" ? (o.addEventListener("change", i), () => o.removeEventListener("change", i)) : (o.addListener(i), () => o.removeListener(i));
  }, [e]), t;
}
const cp = "_wrapper_1qmsj_1", dp = {
  wrapper: cp
}, or = "dx-theme";
function up(e) {
  const t = e === void 0 ? or : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const n = localStorage.getItem(t);
      return n === "light" || n === "dark" || n === "system" ? n : void 0;
    } catch {
      return;
    }
}
function _p(e, t) {
  const n = e === void 0 ? or : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function Bv({
  value: e,
  defaultValue: t,
  storageKey: n,
  onChange: o,
  label: i = "Dark mode",
  className: c
}) {
  const _ = rr("(prefers-color-scheme: dark)"), [r, l] = X(void 0), a = e ?? r ?? up(n) ?? t ?? "system", d = a === "system" ? _ ? "dark" : "light" : a;
  ye(() => {
    if (a === "system") {
      delete document.documentElement.dataset.theme;
      return;
    }
    document.documentElement.dataset.theme = a;
  }, [a]);
  const u = (k) => {
    const v = k.target.checked ? "dark" : "light";
    e === void 0 && l(v), _p(n, v), o?.(v);
  };
  return /* @__PURE__ */ D("label", { className: [dp.wrapper, c].filter(Boolean).join(" "), children: [
    i,
    /* @__PURE__ */ s(ci, { checked: d === "dark", onChange: u })
  ] });
}
function fp(e) {
  const t = new TextEncoder().encode(e), n = t.length * 8, o = ((t.length + 8 >> 6) + 1) * 64, i = new Uint8Array(o);
  i.set(t), i[t.length] = 128;
  const c = new DataView(i.buffer);
  c.setUint32(o - 8, n >>> 0, !0), c.setUint32(o - 4, Math.floor(n / 4294967296), !0);
  const _ = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21], r = Array.from(
    { length: 64 },
    (x, g) => Math.floor(Math.abs(Math.sin(g + 1)) * 4294967296)
  ), l = (x, g) => x + g | 0, a = (x, g) => x << g | x >>> 32 - g;
  let d = 1732584193, u = 4023233417, k = 2562383102, v = 271733878;
  for (let x = 0; x < o; x += 64) {
    const g = [];
    for (let m = 0; m < 16; m += 1)
      g.push(c.getUint32(x + m * 4, !0));
    let h = d, f = u, y = k, $ = v;
    for (let m = 0; m < 64; m += 1) {
      let C, b;
      m < 16 ? (C = f & y | ~f & $, b = m) : m < 32 ? (C = $ & f | ~$ & y, b = (5 * m + 1) % 16) : m < 48 ? (C = f ^ y ^ $, b = (3 * m + 5) % 16) : (C = y ^ (f | ~$), b = 7 * m % 16), C = l(l(l(C, h), r[m]), g[b]), h = $, $ = y, y = f, f = l(f, a(C, _[Math.floor(m / 16) * 4 + m % 4]));
    }
    d = l(d, h), u = l(u, f), k = l(k, y), v = l(v, $);
  }
  const w = (x) => {
    let g = "";
    for (let h = 0; h < 4; h += 1)
      g += `0${(x >>> h * 8 & 255).toString(16)}`.slice(-2);
    return g;
  };
  return w(d) + w(u) + w(k) + w(v);
}
const hp = "_avatar_yj2hz_1", pp = "_xs_yj2hz_12", mp = "_sm_yj2hz_18", gp = "_md_yj2hz_24", xp = "_lg_yj2hz_30", bp = "_xl_yj2hz_36", yp = "_initials_yj2hz_42", vp = "_image_yj2hz_57", kp = "_status_yj2hz_64", wp = "_online_yj2hz_84", $p = "_offline_yj2hz_88", Np = "_away_yj2hz_92", fn = {
  avatar: hp,
  xs: pp,
  sm: mp,
  md: gp,
  lg: xp,
  xl: bp,
  initials: yp,
  image: vp,
  status: kp,
  online: wp,
  offline: $p,
  away: Np
}, Op = {
  xs: 20,
  sm: 28,
  md: 36,
  lg: 44,
  xl: 52
}, Jn = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function Sp(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function Dp(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = t * 31 + e.charCodeAt(n) >>> 0;
  return Jn[t % Jn.length] ?? Jn[0];
}
function qv({
  name: e,
  src: t,
  email: n,
  gravatarDefault: o = "retro",
  gravatarRating: i = "g",
  alt: c,
  size: _ = "md",
  status: r,
  className: l
}) {
  const a = be(() => e ? Sp(e) : "?", [e]), d = be(() => e ? Dp(e) : Jn[0], [e]), u = be(() => {
    if (t != null || n == null) return;
    const $ = n.trim().toLowerCase();
    return $ === "" ? void 0 : `https://secure.gravatar.com/avatar/${fp($)}?d=${o}&s=${Op[_]}&r=${i}`;
  }, [t, n, o, i, _]), k = t ?? u, [v, w] = X(null), x = k != null && v !== k, g = x && c === "", h = c ?? e ?? "avatar", f = r ? `${h}, ${r}` : h, y = x ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ s(
      "img",
      {
        className: fn.image,
        src: k,
        alt: g ? "" : r ? f : h,
        onError: () => w(k ?? null)
      }
    )
  ) : /* @__PURE__ */ s(
    "span",
    {
      "aria-hidden": "true",
      className: fn.initials,
      style: { background: d },
      children: a
    }
  );
  return /* @__PURE__ */ D(
    "span",
    {
      className: [
        fn.avatar,
        fn[_],
        r ? fn[r] : null,
        l
      ].filter(Boolean).join(" "),
      role: x ? void 0 : "img",
      "aria-label": x ? void 0 : f,
      children: [
        y,
        r && /* @__PURE__ */ s("span", { className: fn.status, "aria-hidden": "true" })
      ]
    }
  );
}
const Mp = "_root_iy2gv_1", Cp = "_left_iy2gv_6", zp = "_right_iy2gv_7", Ep = "_panel_iy2gv_12", Ip = "_bottom_iy2gv_20", Ap = "_tabList_iy2gv_24", jp = "_underline_iy2gv_53", Tp = "_pills_iy2gv_72", Lp = "_tab_iy2gv_24", Pp = "_active_iy2gv_113", Rp = "_disabled_iy2gv_139", Ht = {
  root: Mp,
  left: Cp,
  right: zp,
  panel: Ep,
  bottom: Ip,
  tabList: Ap,
  underline: jp,
  pills: Tp,
  tab: Lp,
  active: Pp,
  disabled: Rp
};
function Fv({
  items: e,
  value: t,
  defaultValue: n,
  onChange: o,
  variant: i = "underline",
  position: c = "top",
  className: _
}) {
  const r = qe(), l = oe(null), [a, d] = X(
    n ?? e[0]?.key ?? ""
  ), u = t ?? a, k = c === "left" || c === "right", v = (g) => {
    d(g), o?.(g);
  }, w = (g) => {
    const h = e.filter(($) => !$.disabled), f = h.findIndex(($) => $.key === u);
    let y = -1;
    g.key === "ArrowRight" || k && g.key === "ArrowDown" ? y = (f + 1) % h.length : g.key === "ArrowLeft" || k && g.key === "ArrowUp" ? y = (f - 1 + h.length) % h.length : g.key === "Home" ? y = 0 : g.key === "End" && (y = h.length - 1), y >= 0 && (g.preventDefault(), l.current?.querySelector(
      `[data-tab-key="${CSS.escape(h[y]?.key ?? "")}"]`
    )?.focus(), v(h[y]?.key ?? ""));
  }, x = e.find((g) => g.key === u);
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Ht.root, Ht[c], _].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ s(
          "div",
          {
            ref: l,
            role: "tablist",
            className: [Ht.tabList, Ht[i], Ht[c]].filter(Boolean).join(" "),
            onKeyDown: w,
            children: e.map((g) => {
              const h = g.key === u;
              return /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  role: "tab",
                  id: `${r}-tab-${g.key}`,
                  "data-tab-key": g.key,
                  "aria-selected": h,
                  "aria-controls": `${r}-panel-${g.key}`,
                  tabIndex: h ? 0 : -1,
                  disabled: g.disabled,
                  className: [
                    Ht.tab,
                    h ? Ht.active : null,
                    g.disabled ? Ht.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => v(g.key),
                  children: g.label
                },
                g.key
              );
            })
          }
        ),
        x && /* @__PURE__ */ s(
          "div",
          {
            role: "tabpanel",
            id: `${r}-panel-${x.key}`,
            "aria-labelledby": `${r}-tab-${x.key}`,
            className: Ht.panel,
            children: x.content
          }
        )
      ]
    }
  );
}
const Bp = "_root_1qkv8_1", qp = "_item_1qkv8_9", Fp = "_heading_1qkv8_13", Hp = "_trigger_1qkv8_17", Kp = "_disabled_1qkv8_34", Up = "_title_1qkv8_48", Wp = "_chevron_1qkv8_52", Xp = "_open_1qkv8_59", Vp = "_content_1qkv8_63", Kt = {
  root: Bp,
  item: qp,
  heading: Fp,
  trigger: Hp,
  disabled: Kp,
  title: Up,
  chevron: Wp,
  open: Xp,
  content: Vp
};
function Hv({
  items: e,
  multiple: t = !1,
  value: n,
  defaultValue: o,
  onChange: i,
  className: c
}) {
  const _ = qe(), [r, l] = X(
    o ?? []
  ), a = n ?? r, d = (u) => {
    const k = a.includes(u) ? a.filter((v) => v !== u) : t ? [...a, u] : [u];
    l(k), i?.(k);
  };
  return /* @__PURE__ */ s("div", { className: [Kt.root, c].filter(Boolean).join(" "), children: e.map((u) => {
    const k = a.includes(u.key), v = `${_}-panel-${u.key}`, w = `${_}-trigger-${u.key}`;
    return /* @__PURE__ */ D("div", { className: Kt.item, children: [
      /* @__PURE__ */ s("h3", { className: Kt.heading, children: /* @__PURE__ */ D(
        "button",
        {
          type: "button",
          id: w,
          "aria-expanded": k,
          "aria-controls": v,
          disabled: u.disabled,
          className: [
            Kt.trigger,
            u.disabled ? Kt.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => d(u.key),
          children: [
            /* @__PURE__ */ s("span", { className: Kt.title, children: u.title }),
            /* @__PURE__ */ s(
              "span",
              {
                className: [Kt.chevron, k ? Kt.open : null].filter(Boolean).join(" "),
                "aria-hidden": "true",
                children: /* @__PURE__ */ s(Ne, { name: "chevron-down", size: 12 })
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ s(
        "div",
        {
          id: v,
          role: "region",
          "aria-labelledby": w,
          hidden: !k,
          className: Kt.content,
          children: u.content
        }
      )
    ] }, u.key);
  }) });
}
const Gp = "_textarea_1uei3_1", Yp = "_invalid_1uei3_27", Zp = "_xs_1uei3_34", Jp = "_sm_1uei3_39", Qp = "_md_1uei3_44", em = "_lg_1uei3_49", tm = "_xl_1uei3_54", Un = {
  textarea: Gp,
  invalid: Yp,
  xs: Zp,
  sm: Jp,
  md: Qp,
  lg: em,
  xl: tm,
  "resize-none": "_resize-none_1uei3_59",
  "resize-vertical": "_resize-vertical_1uei3_63",
  "resize-horizontal": "_resize-horizontal_1uei3_67",
  "resize-both": "_resize-both_1uei3_71"
}, Kv = Fe(
  function({ size: t = "md", resize: n = "none", invalid: o = !1, className: i, ...c }, _) {
    return /* @__PURE__ */ s(
      "textarea",
      {
        ref: _,
        "data-size": t,
        className: [
          Un.textarea,
          Un[t],
          Un[`resize-${n}`],
          o ? Un.invalid : null,
          i
        ].filter(Boolean).join(" "),
        "aria-invalid": o || void 0,
        ...c
      }
    );
  }
), nm = "_typography_1jy8x_1", sm = "_h1_1jy8x_39", rm = "_h2_1jy8x_45", om = "_h3_1jy8x_51", lm = "_h4_1jy8x_57", am = "_h5_1jy8x_63", im = "_h6_1jy8x_69", cm = "_button_1jy8x_99", dm = "_caption_1jy8x_106", um = "_overline_1jy8x_112", ls = {
  typography: nm,
  "display-1": "_display-1_1jy8x_8",
  "display-2": "_display-2_1jy8x_13",
  "display-3": "_display-3_1jy8x_18",
  "display-4": "_display-4_1jy8x_23",
  "display-5": "_display-5_1jy8x_28",
  "display-6": "_display-6_1jy8x_33",
  h1: sm,
  h2: rm,
  h3: om,
  h4: lm,
  h5: am,
  h6: im,
  "subtitle-1": "_subtitle-1_1jy8x_75",
  "subtitle-2": "_subtitle-2_1jy8x_81",
  "body-1": "_body-1_1jy8x_87",
  "body-2": "_body-2_1jy8x_92",
  button: cm,
  caption: dm,
  overline: um,
  "align-left": "_align-left_1jy8x_121",
  "align-center": "_align-center_1jy8x_125",
  "align-right": "_align-right_1jy8x_129",
  "align-justify": "_align-justify_1jy8x_133"
}, _m = {
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
}, fm = {
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
}, hm = {
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
}, pm = {
  Left: "align-left",
  Right: "align-right",
  Center: "align-center",
  Justify: "align-justify",
  Start: "align-left",
  End: "align-right",
  JustifyAll: "align-justify"
}, Uv = Fe(function({
  textStyle: t = "Body1",
  tagName: n = "Auto",
  textAlign: o,
  text: i,
  visible: c = !0,
  className: _,
  children: r,
  ...l
}, a) {
  if (c === !1) return null;
  const d = n === "Auto" ? _m[t] : hm[n];
  return /* @__PURE__ */ s(
    d,
    {
      ref: a,
      className: [
        ls.typography,
        ls[fm[t]],
        o ? ls[pm[o]] : null,
        _
      ].filter(Boolean).join(" "),
      ...l,
      children: i ?? r
    }
  );
}), mm = "_root_jtes6_1", gm = "_trigger_jtes6_9", xm = "_invalid_jtes6_40", bm = "_placeholder_jtes6_47", ym = "_label_jtes6_54", vm = "_chevron_jtes6_60", km = "_chevronOpen_jtes6_70", wm = "_menu_jtes6_74", $m = "_option_jtes6_89", Nm = "_disabled_jtes6_100", Om = "_active_jtes6_104", Sm = "_selected_jtes6_105", Dm = "_header_jtes6_115", Mm = "_xs_jtes6_122", Cm = "_sm_jtes6_128", zm = "_md_jtes6_134", Em = "_lg_jtes6_140", Im = "_xl_jtes6_146", ct = {
  root: mm,
  trigger: gm,
  invalid: xm,
  placeholder: bm,
  label: ym,
  chevron: vm,
  chevronOpen: km,
  menu: wm,
  option: $m,
  disabled: Nm,
  active: Om,
  selected: Sm,
  header: Dm,
  xs: Mm,
  sm: Cm,
  md: zm,
  lg: Em,
  xl: Im
}, Am = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function Wv({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: o,
  placeholder: i = "Select…",
  size: c = "md",
  invalid: _ = !1,
  disabled: r = !1,
  className: l,
  ...a
}) {
  const d = qe(), u = `${d}-listbox`, k = oe(null), v = oe(null), [w, x] = X(
    n
  ), [g, h] = X(!1), f = t ?? w, y = e.map(
    (p, S) => p.label === "" || p.disabled ? -1 : S
  ).filter((p) => p >= 0), $ = e.findIndex(
    (p) => p.value === f
  ), [m, C] = X(
    () => y.includes(0) ? 0 : y[0] ?? -1
  ), b = B(() => {
    if (r) return;
    const p = $ >= 0 && y.includes($) ? $ : y[0];
    C(p ?? -1), h(!0);
  }, [r, $, y]), O = B(() => {
    h(!1), v.current?.focus();
  }, []);
  ye(() => {
    if (!g) return;
    const p = (S) => {
      k.current && !k.current.contains(S.target) && h(!1);
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, [g]);
  const E = (p) => {
    x(p), o?.(p), h(!1), v.current?.focus();
  }, M = (p) => {
    if (y.length === 0) return;
    const S = y.includes(m) ? y.indexOf(m) : 0, L = y[(S + p + y.length) % y.length];
    L != null && C(L);
  }, A = (p) => {
    if (!g) {
      p.key === "ArrowDown" && (p.preventDefault(), b());
      return;
    }
    switch (p.key) {
      case "ArrowDown":
        p.preventDefault(), M(1);
        break;
      case "ArrowUp":
        p.preventDefault(), M(-1);
        break;
      case "Home":
        p.preventDefault(), y[0] != null && C(y[0]);
        break;
      case "End":
        p.preventDefault(), y[y.length - 1] != null && C(y[y.length - 1]);
        break;
      case "Enter":
      case " ":
        p.preventDefault(), m >= 0 && e[m] && y.includes(m) && E(e[m]?.value ?? "");
        break;
      case "Escape":
        p.preventDefault(), O();
        break;
      case "Tab":
        h(!1);
        break;
    }
  }, N = e.find(
    (p) => p.value === f
  );
  return /* @__PURE__ */ D(
    "div",
    {
      ref: k,
      className: [ct.root, l].filter(Boolean).join(" "),
      onKeyDown: A,
      children: [
        /* @__PURE__ */ D(
          "button",
          {
            ref: v,
            type: "button",
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-expanded": g,
            "aria-controls": u,
            "aria-invalid": _ || void 0,
            disabled: r,
            className: [
              ct.trigger,
              ct[c],
              g ? ct.open : null,
              _ ? ct.invalid : null
            ].filter(Boolean).join(" "),
            onClick: () => g ? h(!1) : b(),
            ...a,
            children: [
              /* @__PURE__ */ s("span", { className: N ? ct.label : ct.placeholder, children: N ? N.label : i }),
              /* @__PURE__ */ s(
                "span",
                {
                  className: [ct.chevron, g ? ct.chevronOpen : null].filter(Boolean).join(" "),
                  style: { backgroundImage: Am },
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ),
        g && /* @__PURE__ */ s(
          "div",
          {
            id: u,
            role: "listbox",
            "aria-activedescendant": m >= 0 ? `${d}-option-${m}` : void 0,
            className: ct.menu,
            children: e.map(
              (p, S) => p.label === "" ? /* @__PURE__ */ s(
                "div",
                {
                  className: ct.header,
                  role: "presentation",
                  children: p.value
                },
                p.value
              ) : /* @__PURE__ */ s(
                "div",
                {
                  id: `${d}-option-${S}`,
                  role: "option",
                  "aria-selected": p.value === f,
                  "aria-disabled": p.disabled || void 0,
                  className: [
                    ct.option,
                    S === m ? ct.active : null,
                    p.value === f ? ct.selected : null,
                    p.disabled ? ct.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    p.disabled || E(p.value);
                  },
                  onMouseEnter: () => {
                    !p.disabled && p.label !== "" && C(S);
                  },
                  children: p.label
                },
                p.value
              )
            )
          }
        )
      ]
    }
  );
}
const jm = "_root_5j58f_1", Tm = "_wrap_5j58f_9", Lm = "_input_5j58f_26", Pm = "_invalid_5j58f_31", Rm = "_clear_5j58f_58", Bm = "_menu_5j58f_83", qm = "_option_5j58f_98", Fm = "_disabled_5j58f_109", Hm = "_active_5j58f_113", Km = "_empty_5j58f_123", Um = "_xs_5j58f_129", Wm = "_sm_5j58f_136", Xm = "_md_5j58f_143", Vm = "_lg_5j58f_150", Gm = "_xl_5j58f_157", Mt = {
  root: jm,
  wrap: Tm,
  input: Lm,
  invalid: Pm,
  clear: Rm,
  menu: Bm,
  option: qm,
  disabled: Fm,
  active: Hm,
  empty: Km,
  xs: Um,
  sm: Wm,
  md: Xm,
  lg: Vm,
  xl: Gm
}, Ym = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function Xv({
  options: e = [],
  value: t,
  defaultValue: n = "",
  onChange: o,
  onSelect: i,
  placeholder: c = "",
  size: _ = "md",
  invalid: r = !1,
  disabled: l = !1,
  filter: a = Ym,
  className: d,
  ...u
}) {
  const k = qe(), v = `${k}-listbox`, w = oe(null), x = oe(null), [g, h] = X(n), [f, y] = X(!1), $ = t ?? g, m = be(
    () => $.trim() === "" ? [...e] : e.filter((j) => a(j, $)),
    [e, $, a]
  ), C = m.map((j, T) => j.disabled ? -1 : T).filter((j) => j >= 0), [b, O] = X(-1), E = (j) => {
    h(j), o?.(j);
  }, M = (j) => {
    E(j.label), i?.(j.value, j), y(!1);
  }, A = (j) => {
    if (C.length === 0) return;
    const T = C.includes(b) ? C.indexOf(b) : j === 1 ? -1 : 0, F = C[(T + j + C.length) % C.length];
    F != null && O(F);
  }, N = (j) => {
    l || (E(j.target.value), y(!0), O(-1));
  }, p = () => {
    l || $ !== "" && y(!0);
  }, S = (j) => {
    w.current && !w.current.contains(j.relatedTarget) && y(!1);
  }, L = (j) => {
    if (!l)
      switch (j.key) {
        case "ArrowDown":
          j.preventDefault(), f ? A(1) : (y(!0), O(C[0] ?? -1));
          break;
        case "ArrowUp":
          j.preventDefault(), f && A(-1);
          break;
        case "Enter":
          j.preventDefault(), f && b >= 0 && m[b] && M(m[b]);
          break;
        case "Escape":
          j.preventDefault(), y(!1);
          break;
        case "Tab":
          f && b >= 0 && m[b] && M(m[b]), y(!1);
          break;
      }
  }, I = () => {
    E(""), O(-1), y(!0), x.current?.focus();
  };
  return /* @__PURE__ */ D(
    "div",
    {
      ref: w,
      className: [Mt.root, d].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ D(
          "div",
          {
            className: [Mt.wrap, Mt[_], r ? Mt.invalid : null].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ s(
                "input",
                {
                  ref: x,
                  type: "text",
                  role: "combobox",
                  "aria-expanded": f,
                  "aria-controls": v,
                  "aria-autocomplete": "list",
                  "aria-activedescendant": f && b >= 0 ? `${k}-option-${b}` : void 0,
                  "aria-invalid": r || void 0,
                  disabled: l,
                  value: $,
                  placeholder: c,
                  className: Mt.input,
                  onChange: N,
                  onFocus: p,
                  onBlur: S,
                  onKeyDown: L,
                  ...u
                }
              ),
              $ !== "" && !l && /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: Mt.clear,
                  "aria-label": "Clear",
                  onClick: I,
                  children: /* @__PURE__ */ s(Ne, { name: "close", size: "sm" })
                }
              )
            ]
          }
        ),
        f && /* @__PURE__ */ s("div", { id: v, role: "listbox", className: Mt.menu, children: m.length === 0 ? /* @__PURE__ */ s("div", { className: Mt.empty, children: "No matches" }) : m.map((j, T) => /* @__PURE__ */ s(
          "div",
          {
            id: `${k}-option-${T}`,
            role: "option",
            "aria-selected": !1,
            "aria-disabled": j.disabled || void 0,
            className: [
              Mt.option,
              T === b ? Mt.active : null,
              j.disabled ? Mt.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => {
              j.disabled || M(j);
            },
            onMouseDown: (F) => {
              F.preventDefault(), j.disabled || M(j);
            },
            onMouseEnter: () => {
              j.disabled || O(T);
            },
            children: j.label
          },
          j.value
        )) })
      ]
    }
  );
}
const Zm = "_box_txdu6_1", Jm = "_option_txdu6_12", Qm = "_disabled_txdu6_23", eg = "_selected_txdu6_27", tg = "_active_txdu6_33", zn = {
  box: Zm,
  option: Jm,
  disabled: Qm,
  selected: eg,
  active: tg
};
function Vv({
  options: e = [],
  value: t,
  defaultValue: n,
  multiple: o = !1,
  onChange: i,
  className: c,
  style: _,
  ...r
}) {
  const l = qe(), [a, d] = X(() => {
    const m = n;
    return m == null ? [] : Array.isArray(m) ? [...m] : [m];
  }), u = t == null ? a : Array.isArray(t) ? t : [t], k = e.findIndex((m) => !m.disabled), [v, w] = X(
    () => k >= 0 ? k : 0
  ), x = oe(""), g = oe(null), h = (m) => {
    d(m), i?.(o ? m : m[0] ?? "");
  }, f = e.map((m, C) => m.disabled ? -1 : C).filter((m) => m >= 0), y = (m) => {
    const C = e[m];
    if (!(!C || C.disabled))
      if (w(m), o) {
        const b = u.includes(C.value) ? u.filter((O) => O !== C.value) : [...u, C.value];
        h(b);
      } else
        h([C.value]);
  }, $ = (m) => {
    if (f.length === 0) return;
    const C = f.includes(v) ? v : f[0];
    let b = -1;
    if (m.key === "ArrowDown")
      b = f[(f.indexOf(C) + 1) % f.length];
    else if (m.key === "ArrowUp")
      b = f[(f.indexOf(C) - 1 + f.length) % f.length];
    else if (m.key === "Home")
      b = f[0];
    else if (m.key === "End")
      b = f[f.length - 1];
    else if (m.key === "Enter" || m.key === " ") {
      m.preventDefault(), y(C);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(m.key)) {
      m.preventDefault();
      const O = (x.current + m.key).toLowerCase();
      x.current = O, g.current && clearTimeout(g.current), g.current = setTimeout(() => {
        x.current = "";
      }, 500);
      const E = [...f, ...f], M = f.indexOf(C) + 1, A = E.slice(M).find((N) => e[N]?.label.toLowerCase().startsWith(O));
      A != null && w(A);
      return;
    }
    b >= 0 && (m.preventDefault(), w(b), o || h([e[b]?.value ?? ""]));
  };
  return /* @__PURE__ */ s(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": o || void 0,
      "aria-activedescendant": e[v] ? `${l}-option-${v}` : void 0,
      style: _,
      className: [zn.box, c].filter(Boolean).join(" "),
      onKeyDown: $,
      ...r,
      children: e.map((m, C) => {
        const b = u.includes(m.value), O = C === v;
        return /* @__PURE__ */ s(
          "div",
          {
            id: `${l}-option-${C}`,
            role: "option",
            "aria-selected": b,
            "aria-disabled": m.disabled || void 0,
            className: [
              zn.option,
              b ? zn.selected : null,
              O ? zn.active : null,
              m.disabled ? zn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => y(C),
            children: m.label
          },
          m.value
        );
      })
    }
  );
}
const ng = "_group_1gpkr_1", sg = "_legend_1gpkr_8", rg = "_list_1gpkr_16", og = "_item_1gpkr_25", lg = "_disabled_1gpkr_32", ag = "_label_1gpkr_37", ig = "_checkbox_1gpkr_48", rn = {
  group: ng,
  legend: sg,
  list: rg,
  item: og,
  disabled: lg,
  label: ag,
  checkbox: ig
};
function Gv({
  options: e = [],
  value: t,
  defaultValue: n = [],
  onChange: o,
  legend: i,
  name: c,
  className: _
}) {
  const [r, l] = X(() => [
    ...n
  ]), a = t ?? r, d = (u, k) => {
    const v = k ? [...a, u] : a.filter((w) => w !== u);
    l(v), o?.(v);
  };
  return /* @__PURE__ */ D("fieldset", { className: [rn.group, _].filter(Boolean).join(" "), children: [
    i != null && /* @__PURE__ */ s("legend", { className: rn.legend, children: i }),
    /* @__PURE__ */ s("ul", { className: rn.list, children: e.map((u) => {
      const k = a.includes(u.value);
      return /* @__PURE__ */ s(
        "li",
        {
          className: [rn.item, u.disabled ? rn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ D("label", { className: rn.label, children: [
            /* @__PURE__ */ s(
              "input",
              {
                type: "checkbox",
                className: rn.checkbox,
                name: c,
                value: u.value,
                checked: k,
                disabled: u.disabled,
                onChange: (v) => d(u.value, v.target.checked)
              }
            ),
            /* @__PURE__ */ s("span", { children: u.label })
          ] })
        },
        u.value
      );
    }) })
  ] });
}
const cg = "_group_wb5fo_1", dg = "_legend_wb5fo_8", ug = "_list_wb5fo_16", _g = "_item_wb5fo_25", fg = "_disabled_wb5fo_32", hg = "_label_wb5fo_37", pg = "_radio_wb5fo_48", on = {
  group: cg,
  legend: dg,
  list: ug,
  item: _g,
  disabled: fg,
  label: hg,
  radio: pg
};
function Yv({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: o,
  legend: i,
  name: c,
  className: _
}) {
  const [r, l] = X(
    n
  ), a = t ?? r, d = (u) => {
    l(u), o?.(u);
  };
  return /* @__PURE__ */ D("fieldset", { className: [on.group, _].filter(Boolean).join(" "), children: [
    i != null && /* @__PURE__ */ s("legend", { className: on.legend, children: i }),
    /* @__PURE__ */ s("ul", { className: on.list, children: e.map((u) => {
      const k = u.value === a;
      return /* @__PURE__ */ s(
        "li",
        {
          className: [on.item, u.disabled ? on.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ D("label", { className: on.label, children: [
            /* @__PURE__ */ s(
              "input",
              {
                type: "radio",
                className: on.radio,
                name: c,
                value: u.value,
                checked: k,
                disabled: u.disabled,
                onChange: (v) => d(v.target.value)
              }
            ),
            /* @__PURE__ */ s("span", { children: u.label })
          ] })
        },
        u.value
      );
    }) })
  ] });
}
const mg = "_bar_44vcf_1", gg = "_vertical_44vcf_12", xg = "_option_44vcf_17", bg = "_selected_44vcf_40", yg = "_sm_44vcf_56", vg = "_md_44vcf_62", kg = "_lg_44vcf_68", hn = {
  bar: mg,
  vertical: gg,
  option: xg,
  selected: bg,
  sm: yg,
  md: vg,
  lg: kg
};
function Ps(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Zv(e) {
  const {
    options: t = [],
    value: n,
    defaultValue: o,
    multiple: i,
    orientation: c = "horizontal",
    onChange: _,
    size: r = "md",
    className: l,
    ...a
  } = e, d = i ?? !1, [u, k] = X(o ?? (d ? [] : t[0]?.value)), v = n ?? u, w = i === !0 || i === void 0 && Array.isArray(v), x = (h) => {
    if (!w) {
      k(h), _?.(h);
      return;
    }
    const f = Ps(v), y = f.includes(h) ? f.filter(($) => $ !== h) : [...f, h];
    k(y), _?.(y);
  }, g = (h) => w ? Ps(v).includes(h) : v === h;
  return /* @__PURE__ */ s(
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
      children: t.map((h) => {
        const f = g(h.value);
        return /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            "aria-pressed": f,
            disabled: h.disabled,
            className: [
              hn.option,
              f ? hn.selected : null,
              h.disabled ? hn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => x(h.value),
            children: h.label
          },
          h.value
        );
      })
    }
  );
}
const wg = "_toggle_bc517_1", $g = "_pressed_bc517_29", Ng = "_sm_bc517_41", Og = "_md_bc517_47", Sg = "_lg_bc517_53", Dg = "_fullWidth_bc517_59", Wn = {
  toggle: wg,
  pressed: $g,
  sm: Ng,
  md: Og,
  lg: Sg,
  fullWidth: Dg
}, Jv = Fe(
  function({
    pressed: t,
    defaultPressed: n = !1,
    onChange: o,
    size: i = "md",
    fullWidth: c = !1,
    className: _,
    type: r = "button",
    ...l
  }, a) {
    const [d, u] = X(n), k = t ?? d, v = () => {
      const w = !k;
      u(w), o?.(w);
    };
    return /* @__PURE__ */ s(
      "button",
      {
        ref: a,
        type: r,
        "aria-pressed": k,
        className: [
          Wn.toggle,
          Wn[i],
          k ? Wn.pressed : null,
          c ? Wn.fullWidth : null,
          _
        ].filter(Boolean).join(" "),
        onClick: v,
        ...l
      }
    );
  }
), Mg = "_root_pn7s6_1", Cg = "_action_pn7s6_285", zg = "_filled_pn7s6_305", Eg = "_caret_pn7s6_309", Ig = "_flat_pn7s6_331", Ag = "_outlined_pn7s6_343", jg = "_text_pn7s6_352", Tg = "_sm_pn7s6_451", Lg = "_md_pn7s6_463", Pg = "_lg_pn7s6_475", Rg = "_menu_pn7s6_487", Bg = "_item_pn7s6_500", qg = "_disabled_pn7s6_521", Fg = "_active_pn7s6_525", Hg = "_danger_pn7s6_534", wt = {
  root: Mg,
  "style-primary": "_style-primary_pn7s6_10",
  "style-secondary": "_style-secondary_pn7s6_18",
  "style-base": "_style-base_pn7s6_26",
  "style-light": "_style-light_pn7s6_34",
  "style-dark": "_style-dark_pn7s6_42",
  "style-info": "_style-info_pn7s6_50",
  "style-success": "_style-success_pn7s6_58",
  "style-warning": "_style-warning_pn7s6_66",
  "style-danger": "_style-danger_pn7s6_74",
  action: Cg,
  filled: zg,
  caret: Eg,
  flat: Ig,
  outlined: Ag,
  text: jg,
  "shade-lighter": "_shade-lighter_pn7s6_370",
  "shade-light": "_shade-light_pn7s6_370",
  "shade-dark": "_shade-dark_pn7s6_380",
  "shade-darker": "_shade-darker_pn7s6_384",
  sm: Tg,
  md: Lg,
  lg: Pg,
  menu: Rg,
  item: Bg,
  disabled: qg,
  active: Fg,
  danger: Hg
};
function Qv({
  label: e,
  onClick: t,
  items: n = [],
  severity: o = "primary",
  variant: i = "filled",
  shade: c = "default",
  size: _ = "md",
  disabled: r = !1,
  className: l,
  ...a
}) {
  const u = `${qe()}-menu`, k = oe(null), v = oe(null), w = oe([]), [x, g] = X(!1), [h, f] = X(-1), y = be(
    () => n.map((N, p) => N.disabled ? -1 : p).filter((N) => N >= 0),
    [n]
  ), $ = B(() => {
    r || (f(y[0] ?? -1), g(!0));
  }, [r, y]), m = B(() => {
    g(!1), v.current?.focus();
  }, []);
  ye(() => {
    if (!x) return;
    const N = (p) => {
      k.current && !k.current.contains(p.target) && g(!1);
    };
    return document.addEventListener("mousedown", N), () => document.removeEventListener("mousedown", N);
  }, [x]);
  const C = oe(x);
  ye(() => {
    const N = C.current;
    if (C.current = x, !x || N) return;
    const p = y.includes(h) ? h : y[0] ?? -1;
    p >= 0 && w.current[p]?.focus();
  }, [x, h, y]);
  const b = (N) => {
    const p = n[N];
    !p || p.disabled || (p.onClick?.(), g(!1), v.current?.focus());
  }, O = (N) => {
    if (y.length === 0) return;
    const p = y.includes(h) ? y.indexOf(h) : N === 1 ? -1 : 0, S = y[(p + N + y.length) % y.length];
    S != null && (f(S), w.current[S]?.focus());
  }, E = (N) => {
    const p = N === "first" ? y[0] : y[y.length - 1];
    p != null && (f(p), w.current[p]?.focus());
  }, M = (N) => {
    switch (N.key) {
      case "ArrowDown":
        N.preventDefault(), O(1);
        break;
      case "ArrowUp":
        N.preventDefault(), O(-1);
        break;
      case "Home":
        N.preventDefault(), E("first");
        break;
      case "End":
        N.preventDefault(), E("last");
        break;
      case "Escape":
        N.preventDefault(), m();
        break;
      case "Tab":
        g(!1);
        break;
    }
  }, A = vn(c);
  return /* @__PURE__ */ D(
    "div",
    {
      ref: k,
      className: [
        wt.root,
        wt[_],
        wt[`style-${o}`],
        wt[gs(i, "filled")],
        A ? wt[A] : null,
        l
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: wt.action,
            disabled: r,
            onClick: t,
            children: e
          }
        ),
        /* @__PURE__ */ s(
          "button",
          {
            ref: v,
            type: "button",
            className: wt.caret,
            "aria-haspopup": "menu",
            "aria-expanded": x,
            "aria-controls": u,
            "aria-label": "More actions",
            disabled: r,
            onClick: () => x ? g(!1) : $(),
            onKeyDown: (N) => {
              !x && N.key === "ArrowDown" && (N.preventDefault(), $());
            },
            children: /* @__PURE__ */ s(Ne, { name: "chevron-down" })
          }
        ),
        x && /* @__PURE__ */ s(
          "div",
          {
            id: u,
            role: "menu",
            tabIndex: -1,
            className: wt.menu,
            onKeyDown: M,
            ...a,
            children: n.map((N, p) => /* @__PURE__ */ s(
              "button",
              {
                ref: (S) => {
                  w.current[p] = S;
                },
                type: "button",
                role: "menuitem",
                tabIndex: p === h ? 0 : -1,
                disabled: N.disabled,
                className: [
                  wt.item,
                  p === h ? wt.active : null,
                  N.danger ? wt.danger : null,
                  N.disabled ? wt.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => b(p),
                onMouseEnter: () => {
                  N.disabled || f(p);
                },
                children: N.label
              },
              N.key
            ))
          }
        )
      ]
    }
  );
}
const Kg = "_wrapper_eg26m_1", Ug = "_input_eg26m_8", Wg = "_invalid_eg26m_38", Xg = "_toggle_eg26m_45", Vg = "_xs_eg26m_80", Gg = "_sm_eg26m_86", Yg = "_md_eg26m_92", Zg = "_lg_eg26m_98", Jg = "_xl_eg26m_104", En = {
  wrapper: Kg,
  input: Ug,
  invalid: Wg,
  toggle: Xg,
  xs: Vg,
  sm: Gg,
  md: Yg,
  lg: Zg,
  xl: Jg
}, ek = Fe(
  function({
    size: t = "md",
    invalid: n = !1,
    className: o,
    disabled: i,
    showLabel: c = "Show password",
    hideLabel: _ = "Hide password",
    ...r
  }, l) {
    const [a, d] = X(!1);
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ D("div", { className: En.wrapper, "data-size": t, children: [
        /* @__PURE__ */ s(
          "input",
          {
            ref: l,
            type: a ? "text" : "password",
            disabled: i,
            className: [
              En.input,
              En[t],
              n ? En.invalid : null,
              o
            ].filter(Boolean).join(" "),
            "aria-invalid": n || void 0,
            ...r
          }
        ),
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: En.toggle,
            "aria-pressed": a,
            "aria-label": a ? _ : c,
            disabled: i,
            onClick: () => d((u) => !u),
            children: /* @__PURE__ */ s(Ne, { name: a ? "eye-off" : "eye", size: 16 })
          }
        )
      ] })
    );
  }
), Qg = "_mask_1pv7j_1", e0 = "_invalid_1pv7j_31", t0 = "_xs_1pv7j_38", n0 = "_sm_1pv7j_44", s0 = "_md_1pv7j_50", r0 = "_lg_1pv7j_56", o0 = "_xl_1pv7j_62", as = {
  mask: Qg,
  invalid: e0,
  xs: t0,
  sm: n0,
  md: s0,
  lg: r0,
  xl: o0
};
function Rs(e, t) {
  let n = e.replace(/\D/g, ""), o = "";
  for (const i of t)
    if (i === "#") {
      if (n.length === 0) break;
      o += n[0] ?? "", n = n.slice(1);
    } else if (n.length > 0)
      o += i;
    else
      break;
  return o;
}
const tk = Fe(function({
  size: t = "md",
  invalid: n = !1,
  mask: o,
  value: i,
  defaultValue: c = "",
  onChange: _,
  className: r,
  onKeyDown: l,
  ...a
}, d) {
  const [u, k] = X(c ?? ""), v = i !== void 0, w = v ? i ?? "" : u, x = (f) => {
    const y = Rs(f, o);
    return v || k(y), _?.(y), y;
  };
  return /* @__PURE__ */ s(
    "input",
    {
      ref: d,
      type: "text",
      "data-size": t,
      value: w,
      onChange: (f) => {
        x(f.target.value);
      },
      onKeyDown: (f) => {
        if (f.key === "Backspace") {
          const y = f.currentTarget.selectionStart ?? w.length, $ = w[y - 1];
          if ($ !== void 0 && !/\d/.test($)) {
            f.preventDefault();
            const m = w.replace(/\D/g, "");
            x(Rs(m.slice(0, -1), o));
          }
        }
        l?.(f);
      },
      className: [
        as.mask,
        as[t],
        n ? as.invalid : null,
        r
      ].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...a
    }
  );
}), l0 = "_wrapper_b3q45_1", a0 = "_input_b3q45_8", i0 = "_invalid_b3q45_38", c0 = "_button_b3q45_45", d0 = "_up_b3q45_77", u0 = "_down_b3q45_82", _0 = "_xs_b3q45_87", f0 = "_sm_b3q45_93", h0 = "_md_b3q45_99", p0 = "_lg_b3q45_105", m0 = "_xl_b3q45_111", Jt = {
  wrapper: l0,
  input: a0,
  invalid: i0,
  button: c0,
  up: d0,
  down: u0,
  xs: _0,
  sm: f0,
  md: h0,
  lg: p0,
  xl: m0
};
function us(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function g0(e) {
  let t = "", n = !1;
  for (const o of e)
    o >= "0" && o <= "9" ? t += o : o === "." && !n ? (n = !0, t += o) : o === "-" && t.length === 0 && (t += o);
  return t;
}
function lr(e, t, n) {
  return Math.min(n ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function x0(e, t, n) {
  return t === void 0 ? e : t + Math.round((e - t) / n) * n;
}
function b0(e, t, n, o, i) {
  const _ = us(e) ?? n ?? 0;
  let r;
  return n === void 0 ? r = _ + t * i : t > 0 ? r = n + Math.ceil((_ - n + 1e-9) / i) * i : r = n + Math.floor((_ - n - 1e-9) / i) * i, lr(r, n, o);
}
const nk = Fe(
  function({
    size: t = "md",
    invalid: n = !1,
    className: o,
    disabled: i,
    value: c,
    defaultValue: _,
    onChange: r,
    min: l,
    max: a,
    step: d = 1,
    incrementLabel: u = "Increment",
    decrementLabel: k = "Decrement",
    onBlur: v,
    onKeyDown: w,
    ...x
  }, g) {
    const [h, f] = X(
      _ != null ? String(_) : ""
    ), y = c !== void 0, $ = y ? c == null ? "" : String(c) : h, m = (A) => {
      y || f(A), r?.(us(A));
    }, C = (A) => {
      y || f(String(A)), r?.(A);
    }, b = (A) => {
      i || C(b0($, A, l, a, d));
    }, O = (A) => {
      m(g0(A.target.value));
    }, E = (A) => {
      A.key === "ArrowUp" ? (A.preventDefault(), b(1)) : A.key === "ArrowDown" && (A.preventDefault(), b(-1)), w?.(A);
    }, M = (A) => {
      const N = us($);
      N === null ? (y || f(""), r?.(null)) : C(lr(x0(N, l, d), l, a)), v?.(A);
    };
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ D("div", { className: Jt.wrapper, "data-size": t, children: [
        /* @__PURE__ */ s(
          "input",
          {
            ref: g,
            type: "text",
            inputMode: "decimal",
            autoComplete: "off",
            value: $,
            disabled: i,
            onChange: O,
            onKeyDown: E,
            onBlur: M,
            className: [
              Jt.input,
              Jt[t],
              n ? Jt.invalid : null,
              o
            ].filter(Boolean).join(" "),
            "aria-invalid": n || void 0,
            ...x
          }
        ),
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: [Jt.button, Jt.up].join(" "),
            "aria-label": u,
            disabled: i,
            onClick: () => b(1),
            children: /* @__PURE__ */ s(Ne, { name: "chevron-up", size: 14 })
          }
        ),
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: [Jt.button, Jt.down].join(" "),
            "aria-label": k,
            disabled: i,
            onClick: () => b(-1),
            children: /* @__PURE__ */ s(Ne, { name: "chevron-down", size: 14 })
          }
        )
      ] })
    );
  }
), De = {
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
}, y0 = [
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
function bt(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function _s(e) {
  const t = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(e.trim());
  if (!t) return null;
  let n = t[1];
  return n.length === 3 && (n = n.split("").map((o) => o + o).join("")), {
    r: Number.parseInt(n.slice(0, 2), 16),
    g: Number.parseInt(n.slice(2, 4), 16),
    b: Number.parseInt(n.slice(4, 6), 16),
    a: 1
  };
}
function v0({ r: e, g: t, b: n }) {
  const o = (i) => Math.round(i).toString(16).padStart(2, "0");
  return `#${o(e)}${o(t)}${o(n)}`;
}
function k0({ r: e, g: t, b: n }) {
  const o = e / 255, i = t / 255, c = n / 255, _ = Math.max(o, i, c), r = Math.min(o, i, c), l = _ - r;
  let a = 0;
  return l !== 0 && (_ === o ? a = (i - c) / l % 6 : _ === i ? a = (c - o) / l + 2 : a = (o - i) / l + 4, a *= 60, a < 0 && (a += 360)), {
    h: a,
    s: _ === 0 ? 0 : l / _,
    v: _
  };
}
function pn({ h: e, s: t, v: n }) {
  const o = n * t, i = e / 60, c = o * (1 - Math.abs(i % 2 - 1));
  let _ = 0, r = 0, l = 0;
  i < 1 ? (_ = o, r = c) : i < 2 ? (_ = c, r = o) : i < 3 ? (r = o, l = c) : i < 4 ? (r = c, l = o) : i < 5 ? (_ = c, l = o) : (_ = o, l = c);
  const a = n - o;
  return {
    r: Math.round((_ + a) * 255),
    g: Math.round((r + a) * 255),
    b: Math.round((l + a) * 255),
    a: 1
  };
}
function w0(e) {
  const t = _s(e);
  if (t) return t;
  const n = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*([\d.]+))?\s*\)$/i.exec(
    e.trim()
  );
  return n ? {
    r: bt(Number(n[1]), 0, 255),
    g: bt(Number(n[2]), 0, 255),
    b: bt(Number(n[3]), 0, 255),
    a: n[4] != null ? bt(Number(n[4]), 0, 1) : 1
  } : null;
}
function Bs({ r: e, g: t, b: n, a: o }) {
  return o >= 1 ? `rgb(${e}, ${t}, ${n})` : `rgba(${e}, ${t}, ${n}, ${Math.round(o * 100) / 100})`;
}
const sk = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: n = !0,
  showPalette: o = !0,
  palette: i = y0,
  showButton: c = !1,
  showArrow: _ = !0,
  disabled: r = !1,
  invalid: l = !1,
  placeholder: a = "",
  size: d = "md",
  tabIndex: u = 0,
  className: k,
  onChange: v,
  onValueChange: w,
  onOpen: x,
  onClose: g
}) => {
  const h = oe(null), f = oe(null), y = oe(null), $ = oe(null), m = oe(null), C = qe(), b = oe(null), O = be(
    () => w0(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [E, M] = X(!1), [A, N] = X(null), p = A ?? O, S = be(() => k0(p), [p]), L = B(
    (V) => {
      const z = Bs(V);
      v?.(z), w?.(z);
    },
    [v, w]
  ), I = B(
    (V, z) => {
      N(V), z && !c && L(V);
    },
    [c, L]
  ), j = B(() => {
    M(!1), N(null), g?.(), f.current?.focus();
  }, [g]), T = B(() => {
    r || (N(O), M(!0), x?.());
  }, [r, O, x]), F = B(() => {
    E ? j() : T();
  }, [E, j, T]), G = B(
    (V, z) => {
      const K = y.current;
      if (!K) return S;
      const ne = K.getBoundingClientRect(), _e = bt((V - ne.left) / ne.width, 0, 1), se = bt(1 - (z - ne.top) / ne.height, 0, 1);
      return { h: S.h, s: _e, v: se };
    },
    [S]
  ), Y = B(
    (V, z) => {
      if (!z) return 0;
      const K = z.getBoundingClientRect();
      return bt((V - K.left) / K.width, 0, 1);
    },
    []
  ), U = (V) => {
    if (r) return;
    V.preventDefault(), V.currentTarget.setPointerCapture(V.pointerId), b.current = "sat";
    const z = G(V.clientX, V.clientY);
    I({ ...pn(z), a: p.a }, !0);
  }, te = (V) => {
    if (b.current !== "sat") return;
    V.preventDefault();
    const z = G(V.clientX, V.clientY);
    I({ ...pn(z), a: p.a }, !0);
  }, le = (V) => {
    if (r) return;
    V.preventDefault(), V.currentTarget.setPointerCapture(V.pointerId), b.current = "hue";
    const z = Y(V.clientX, $.current);
    I(
      { ...pn({ ...S, h: z * 360 }), a: p.a },
      !0
    );
  }, ee = (V) => {
    if (b.current !== "hue") return;
    V.preventDefault();
    const z = Y(V.clientX, $.current);
    I(
      { ...pn({ ...S, h: z * 360 }), a: p.a },
      !0
    );
  }, q = (V) => {
    if (r) return;
    V.preventDefault(), V.currentTarget.setPointerCapture(V.pointerId), b.current = "alpha";
    const z = Y(V.clientX, m.current);
    I({ ...p, a: z }, !0);
  }, ie = (V) => {
    if (b.current !== "alpha") return;
    V.preventDefault();
    const z = Y(V.clientX, m.current);
    I({ ...p, a: z }, !0);
  }, J = () => {
    b.current = null;
  }, de = B(
    (V, z) => {
      const K = {
        h: S.h,
        s: bt(S.s + V, 0, 1),
        v: bt(S.v + z, 0, 1)
      };
      I({ ...pn(K), a: p.a }, !0);
    },
    [S, p.a, I]
  ), ae = B(
    (V) => {
      const z = (S.h + V + 360) % 360;
      I({ ...pn({ ...S, h: z }), a: p.a }, !0);
    },
    [S, p.a, I]
  ), ve = B(
    (V) => {
      I({ ...p, a: bt(p.a + V, 0, 1) }, !0);
    },
    [p, I]
  ), $e = (V) => {
    switch (V.key) {
      case "ArrowLeft":
        V.preventDefault(), de(-0.05, 0);
        break;
      case "ArrowRight":
        V.preventDefault(), de(0.05, 0);
        break;
      case "ArrowUp":
        V.preventDefault(), de(0, 0.05);
        break;
      case "ArrowDown":
        V.preventDefault(), de(0, -0.05);
        break;
      case "Escape":
        V.preventDefault(), j();
        break;
    }
  }, Re = (V, z) => {
    switch (V.key) {
      case "ArrowLeft":
        V.preventDefault(), z === "hue" ? ae(-6) : ve(-0.05);
        break;
      case "ArrowRight":
        V.preventDefault(), z === "hue" ? ae(6) : ve(0.05);
        break;
      case "Escape":
        V.preventDefault(), j();
        break;
    }
  }, we = (V, z) => {
    if (V === "hex") {
      const se = _s(z);
      se && I({ ...se, a: p.a }, !0);
      return;
    }
    const K = z.replace(/[^\d.]/g, ""), ne = Number.parseFloat(K);
    if (Number.isNaN(ne)) return;
    if (V === "a") {
      const se = K.includes(".") ? bt(ne, 0, 1) : bt(ne / 100, 0, 1);
      I({ ...p, a: se }, !0);
      return;
    }
    const _e = { r: 255, g: 255, b: 255 };
    I(
      { ...p, [V]: bt(ne, 0, _e[V]) },
      !0
    );
  }, Xe = () => {
    A && (L(A), N(null), M(!1), g?.(), f.current?.focus());
  };
  ye(() => {
    if (!E) return;
    const V = (z) => {
      h.current && !h.current.contains(z.target) && j();
    };
    return document.addEventListener("mousedown", V), () => document.removeEventListener("mousedown", V);
  }, [E, j]), ye(() => {
    if (!E) return;
    const V = (z) => {
      z.key === "Escape" && j();
    };
    return document.addEventListener("keydown", V), () => document.removeEventListener("keydown", V);
  }, [E, j]);
  const xe = d === "xs" ? De["dx-colorpicker-trigger-xs"] : d === "sm" ? De["dx-colorpicker-trigger-sm"] : d === "lg" ? De["dx-colorpicker-trigger-lg"] : d === "xl" ? De["dx-colorpicker-trigger-xl"] : De["dx-colorpicker-trigger"], Ze = Bs(p), Ve = v0(p), Le = { x: S.s * 100, y: (1 - S.v) * 100 }, tt = S.h / 360 * 100, Qe = p.a * 100, et = /* @__PURE__ */ D("div", { className: De["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ s(
      "div",
      {
        ref: y,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(S.s * 100),
        "aria-valuetext": `Saturation ${Math.round(S.s * 100)}%, value ${Math.round(S.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": r || void 0,
        tabIndex: r ? -1 : u,
        className: De["dx-saturation-picker"],
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${S.h}, 100%, 50%)`
        },
        onKeyDown: $e,
        onPointerDown: U,
        onPointerMove: te,
        onPointerUp: J,
        children: /* @__PURE__ */ s(
          "span",
          {
            className: De["dx-saturation-indicator"],
            style: { left: `${Le.x}%`, top: `${Le.y}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    t && /* @__PURE__ */ s(
      "div",
      {
        ref: $,
        role: "slider",
        "aria-label": "Hue",
        "aria-valuemin": 0,
        "aria-valuemax": 360,
        "aria-valuenow": Math.round(S.h),
        "aria-disabled": r || void 0,
        tabIndex: r ? -1 : u,
        className: De["dx-hue-picker"],
        onKeyDown: (V) => Re(V, "hue"),
        onPointerDown: le,
        onPointerMove: ee,
        onPointerUp: J,
        children: /* @__PURE__ */ s(
          "span",
          {
            className: De["dx-hue-indicator"],
            style: { left: `${tt}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    t && /* @__PURE__ */ s(
      "div",
      {
        ref: m,
        role: "slider",
        "aria-label": "Alpha",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(Qe),
        "aria-disabled": r || void 0,
        tabIndex: r ? -1 : u,
        className: De["dx-alpha-picker"],
        style: {
          background: `repeating-conic-gradient(var(--dx-border-color) 0% 25%, var(--dx-surface-color) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${S.h}, 100%, 50%))`
        },
        onKeyDown: (V) => Re(V, "alpha"),
        onPointerDown: q,
        onPointerMove: ie,
        onPointerUp: J,
        children: /* @__PURE__ */ s(
          "span",
          {
            className: De["dx-alpha-indicator"],
            style: { left: `${Qe}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    n && /* @__PURE__ */ D("div", { className: De["dx-colorpicker-rgba"], children: [
      /* @__PURE__ */ D("label", { className: De["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ s("span", { className: De["dx-colorpicker-rgba-label"], children: "Hex" }),
        /* @__PURE__ */ s(
          "input",
          {
            type: "text",
            maxLength: 7,
            className: De["dx-colorpicker-rgba-input"],
            "aria-label": "Hex",
            value: Ve,
            onChange: (V) => we("hex", V.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ D("label", { className: De["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ s("span", { className: De["dx-colorpicker-rgba-label"], children: "R" }),
        /* @__PURE__ */ s(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: De["dx-colorpicker-rgba-input"],
            "aria-label": "Red",
            value: p.r,
            onChange: (V) => we("r", V.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ D("label", { className: De["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ s("span", { className: De["dx-colorpicker-rgba-label"], children: "G" }),
        /* @__PURE__ */ s(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: De["dx-colorpicker-rgba-input"],
            "aria-label": "Green",
            value: p.g,
            onChange: (V) => we("g", V.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ D("label", { className: De["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ s("span", { className: De["dx-colorpicker-rgba-label"], children: "B" }),
        /* @__PURE__ */ s(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: De["dx-colorpicker-rgba-input"],
            "aria-label": "Blue",
            value: p.b,
            onChange: (V) => we("b", V.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ D("label", { className: De["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ s("span", { className: De["dx-colorpicker-rgba-label"], children: "A" }),
        /* @__PURE__ */ s(
          "input",
          {
            type: "text",
            inputMode: "decimal",
            maxLength: 4,
            className: De["dx-colorpicker-rgba-input"],
            "aria-label": "Alpha",
            value: Math.round(p.a * 100),
            onChange: (V) => we("a", V.target.value)
          }
        )
      ] })
    ] }),
    o && /* @__PURE__ */ s("div", { className: De["dx-colorpicker-palette"], children: i.map((V) => /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        className: De["dx-colorpicker-swatch"],
        "aria-label": V,
        "aria-disabled": r || void 0,
        tabIndex: r ? -1 : u,
        style: { backgroundColor: V },
        onClick: () => {
          const z = _s(V);
          c ? I({ ...z, a: p.a }, !1) : (N(null), L({ ...z, a: p.a }), M(!1), g?.(), f.current?.focus());
        }
      },
      V
    )) }),
    c && /* @__PURE__ */ s("div", { className: De["dx-colorpicker-footer"], children: /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        className: De["dx-colorpicker-ok"],
        onClick: Xe,
        children: "OK"
      }
    ) })
  ] });
  return /* @__PURE__ */ D(
    "div",
    {
      ref: h,
      className: [
        De["dx-colorpicker"],
        E ? De["dx-colorpicker-open"] : null,
        l ? De["dx-colorpicker-invalid"] : null,
        k
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ D(
          "button",
          {
            ref: f,
            type: "button",
            className: [De["dx-colorpicker-trigger"], xe].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": E,
            "aria-controls": C,
            "aria-label": "Pick a color",
            "aria-disabled": r || void 0,
            disabled: r,
            tabIndex: u,
            onClick: F,
            onKeyDown: (V) => {
              V.key === "Escape" && E && (V.preventDefault(), j());
            },
            children: [
              /* @__PURE__ */ s(
                "span",
                {
                  className: De["dx-colorpicker-value"],
                  style: { backgroundColor: Ze },
                  "aria-hidden": "true"
                }
              ),
              a && /* @__PURE__ */ s("span", { className: De["dx-colorpicker-text"], children: a }),
              _ && /* @__PURE__ */ s("span", { className: De["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ s(Ne, { name: "chevron-down", size: 14 }) })
            ]
          }
        ),
        E && /* @__PURE__ */ s(
          "div",
          {
            id: C,
            role: "dialog",
            "aria-label": "Choose color",
            className: De["dx-colorpicker-popup"],
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
}, $0 = 42;
function yt(e) {
  return String(e).padStart(2, "0");
}
function ht(e) {
  return `${e.year}-${yt(e.month)}-${yt(e.day)}`;
}
function N0(e, t) {
  const n = ht(e);
  return t ? `${n} ${yt(e.hour)}:${yt(e.minute)}:${yt(e.second)}` : n;
}
function fs(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!t) return null;
  const n = Number(t[1]), o = Number(t[2]), i = Number(t[3]), c = t[4] != null ? Number(t[4]) : 0, _ = t[5] != null ? Number(t[5]) : 0, r = t[6] != null ? Number(t[6]) : 0;
  if (o < 1 || o > 12 || i < 1 || i > 31) return null;
  const l = new Date(n, o - 1, i, c, _, r);
  return l.getFullYear() !== n || l.getMonth() !== o - 1 || l.getDate() !== i ? null : { year: n, month: o, day: i, hour: c, minute: _, second: r };
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
function Xn(e, t) {
  const n = new Date(e.year, e.month - 1 + t, 1), o = n.getFullYear(), i = n.getMonth() + 1, c = new Date(o, i, 0).getDate();
  return {
    year: o,
    month: i,
    day: Math.min(e.day, c),
    hour: e.hour,
    minute: e.minute,
    second: e.second
  };
}
function qs(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const Fs = {
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
  tt: (e, t, n) => new Intl.DateTimeFormat(n, {
    hour: "numeric",
    hour12: !0
  }).formatToParts(t).find((i) => i.type === "dayPeriod")?.value ?? ""
}, O0 = [
  "yyyy",
  "yy",
  "MM",
  "dd",
  "HH",
  "mm",
  "ss",
  "tt"
], S0 = ["y", "M", "d", "H", "m", "s"];
function Vn(e, t, n) {
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
    let _ = !1;
    for (const l of O0)
      if (t.startsWith(l, c)) {
        i += Fs[l](e, o, n), c += l.length, _ = !0;
        break;
      }
    if (_) continue;
    const r = t[c];
    if (S0.includes(r)) {
      i += Fs[r](e, o, n), c += 1;
      continue;
    }
    i += r, c += 1;
  }
  return i;
}
const D0 = [
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
function M0(e, t) {
  const n = {};
  let o = 0, i = 0;
  for (; i < t.length; ) {
    let r = null;
    for (const l of D0)
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
          n.year = a;
          break;
        case "yy":
        case "y":
          n.year = 2e3 + a;
          break;
        case "MM":
        case "M":
          n.month = a;
          break;
        case "dd":
        case "d":
          n.day = a;
          break;
        case "HH":
        case "H":
          n.hour = a;
          break;
        case "mm":
        case "m":
          n.minute = a;
          break;
        case "ss":
        case "s":
          n.second = a;
          break;
      }
      o += r.length, i += r.length;
      continue;
    }
    if (e[o] !== t[i]) return null;
    o += 1, i += 1;
  }
  const c = {
    year: n.year ?? (/* @__PURE__ */ new Date()).getFullYear(),
    month: n.month ?? 1,
    day: n.day ?? 1,
    hour: n.hour ?? 0,
    minute: n.minute ?? 0,
    second: n.second ?? 0
  };
  if (c.month < 1 || c.month > 12 || c.day < 1 || c.day > 31)
    return null;
  const _ = new Date(
    c.year,
    c.month - 1,
    c.day,
    c.hour,
    c.minute,
    c.second
  );
  return _.getFullYear() !== c.year || _.getMonth() !== c.month - 1 || _.getDate() !== c.day ? null : c;
}
function In(e, t) {
  const n = fs(e);
  return n || M0(e, t);
}
function C0(e, t, n) {
  return t && ht(e) < ht(t) ? t : n && ht(e) > ht(n) ? n : e;
}
const z0 = ["hour", "minute", "second"];
function Gn(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const rk = Fe(
  function({
    size: t = "md",
    invalid: n = !1,
    value: o,
    defaultValue: i,
    format: c = "yyyy-MM-dd",
    min: _,
    max: r,
    showTime: l = !1,
    showButton: a = !0,
    allowClear: d = !1,
    inline: u = !1,
    disabledDates: k,
    locale: v = "en-US",
    onChange: w,
    onValueChange: x,
    onOpen: g,
    onClose: h,
    disabled: f,
    readOnly: y,
    placeholder: $,
    ariaLabel: m,
    triggerLabel: C,
    clearLabel: b,
    tabIndex: O,
    className: E,
    onBlur: M,
    onKeyDown: A,
    ...N
  }, p) {
    const S = oe(null), L = oe(null), I = oe(null), j = oe(null), T = qe(), F = o !== void 0, [G, Y] = X(
      () => i != null ? Vn(
        In(i, c) ?? Qt(),
        c,
        v
      ) : ""
    ), [U, te] = X(!1), [le, ee] = X(null), [q, ie] = X(() => {
      const W = o !== void 0 ? o ?? "" : i ?? "";
      if (W) {
        const ue = In(W, c);
        if (ue) return ue;
      }
      return Qt();
    }), J = be(() => _ ? fs(_) : null, [_]), de = be(() => r ? fs(r) : null, [r]), ae = be(
      () => new Set(k ?? []),
      [k]
    ), ve = be(() => {
      const W = F ? o ?? "" : G;
      return W ? In(W, c) : null;
    }, [o, G, F, c]), $e = B(
      (W) => {
        const ue = ht(W);
        return !!(ae.has(ue) || J && ue < ht(J) || de && ue > ht(de));
      },
      [ae, J, de]
    ), Re = B(
      (W) => {
        if (!$e(W)) return W;
        for (let ue = 1; ue <= 366; ue += 1) {
          const Pe = Ut(W, ue);
          if (!$e(Pe)) return Pe;
          const He = Ut(W, -ue);
          if (!$e(He)) return He;
        }
        return W;
      },
      [$e]
    ), we = B(
      (W) => {
        F || Y(W ? Vn(W, c, v) : "");
        const ue = W ? N0(W, l) : "";
        w?.(ue), x?.(ue);
      },
      [F, c, v, l, w, x]
    ), Xe = B(
      (W) => {
        L.current = W, typeof p == "function" ? p(W) : p && (p.current = W);
      },
      [p]
    ), xe = B(() => {
      te(!1), ee(null), h?.(), u || I.current?.focus();
    }, [u, h]), Ze = B(() => {
      if (f) return;
      const W = ve ?? Qt();
      ee(W), ie(Re(W)), te(!0), g?.();
    }, [f, ve, Re, g]), Ve = B(() => {
      U ? xe() : Ze();
    }, [U, xe, Ze]), Le = B((W) => {
      j.current?.querySelector(
        `[data-date="${ht(W)}"]`
      )?.focus();
    }, []), tt = B(
      (W) => {
        if ($e(W)) return;
        const ue = le ?? ve, He = {
          ...l ? {
            hour: ue?.hour ?? 0,
            minute: ue?.minute ?? 0,
            second: ue?.second ?? 0
          } : { hour: 0, minute: 0, second: 0 },
          year: W.year,
          month: W.month,
          day: W.day
        };
        ee(He), l || (we(He), xe());
      },
      [$e, le, ve, l, we, xe]
    ), Qe = B(
      (W, ue) => {
        ee((Pe) => {
          const He = Pe ?? ve ?? Qt(), St = Math.min(W === "hour" ? 23 : 59, Math.max(0, He[W] + ue));
          return { ...He, [W]: St };
        });
      },
      [ve]
    ), et = B(
      (W, ue) => {
        const Pe = ue.replace(/\D/g, ""), He = Pe === "" ? 0 : Number(Pe), Rt = W === "hour" ? 23 : 59;
        ee((St) => ({ ...St ?? ve ?? Qt(), [W]: Math.min(Rt, He) }));
      },
      [ve]
    ), V = B(() => {
      le && (we(le), xe());
    }, [le, we, xe]), z = B(() => {
      if (U) return;
      const W = In(G, c);
      we(W ? C0(W, J, de) : null);
    }, [U, G, c, J, de, we]), K = (W) => {
      const ue = W.target.value;
      F || Y(ue), U && ee(null);
    }, ne = (W) => {
      W.key === "Enter" ? (W.preventDefault(), U ? le && (we(le), xe()) : z()) : W.key === "Escape" ? U && (W.preventDefault(), xe()) : W.key === "ArrowDown" && !U ? (W.preventDefault(), Ze()) : W.key === "Tab" && U && te(!1), A?.(W);
    }, _e = (W) => {
      z(), M?.(W);
    }, se = (W) => {
      let ue = null;
      switch (W.key) {
        case "ArrowLeft":
          ue = Ut(q, -1), W.preventDefault();
          break;
        case "ArrowRight":
          ue = Ut(q, 1), W.preventDefault();
          break;
        case "ArrowUp":
          ue = Ut(q, -7), W.preventDefault();
          break;
        case "ArrowDown":
          ue = Ut(q, 7), W.preventDefault();
          break;
        case "Home":
          ue = Ut(q, -qs(q)), W.preventDefault();
          break;
        case "End":
          ue = Ut(q, 6 - qs(q)), W.preventDefault();
          break;
        case "PageUp":
          ue = Xn(q, W.shiftKey ? -12 : -1), W.preventDefault();
          break;
        case "PageDown":
          ue = Xn(q, W.shiftKey ? 12 : 1), W.preventDefault();
          break;
        case "Enter":
        case " ":
          W.preventDefault(), tt(q);
          break;
        case "Escape":
          W.preventDefault(), xe();
          break;
        case "Tab":
          te(!1);
          break;
      }
      if (ue) {
        const Pe = Re(ue);
        ie(Pe), setTimeout(() => Le(Pe), 0);
      }
    };
    ye(() => {
      if (!U) return;
      const W = (ue) => {
        S.current && !S.current.contains(ue.target) && xe();
      };
      return document.addEventListener("mousedown", W), () => document.removeEventListener("mousedown", W);
    }, [U, xe]), ye(() => {
      if (!U) return;
      const W = (ue) => {
        ue.key === "Escape" && xe();
      };
      return document.addEventListener("keydown", W), () => document.removeEventListener("keydown", W);
    }, [U, xe]);
    const me = () => {
      F || Y(""), w?.(""), x?.(""), L.current?.focus();
    }, Se = U && le ? Vn(le, c, v) : F ? o ? Vn(
      In(o, c) ?? Qt(),
      c,
      v
    ) : "" : G, Be = F ? !!o : G.length > 0, Je = u || U, dt = { year: q.year, month: q.month }, vt = new Date(dt.year, dt.month - 1, 1).getDay(), Q = {
      year: dt.year,
      month: dt.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, Me = [];
    for (let W = 0; W < $0; W += 1)
      Me.push(Ut(Q, W - vt));
    const nt = le ? ht(le) : ve ? ht(ve) : null, Gt = ht(Qt()), Ot = `${dt.year}-${yt(dt.month)}`, Ce = be(
      () => new Intl.DateTimeFormat(v, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      [v]
    ), Ge = new Intl.DateTimeFormat(v, {
      month: "long",
      year: "numeric"
    }).format(new Date(dt.year, dt.month - 1, 1)), kt = Array.from(
      { length: 7 },
      (W, ue) => new Intl.DateTimeFormat(v, { weekday: "short" }).format(
        new Date(2021, 0, 3 + ue)
      )
    ), Pt = t === "xs" ? Ee["dx-datepicker-input--xs"] : t === "sm" ? Ee["dx-datepicker-input--sm"] : t === "lg" ? Ee["dx-datepicker-input--lg"] : t === "xl" ? Ee["dx-datepicker-input--xl"] : Ee["dx-datepicker-input--md"], tn = /* @__PURE__ */ D(
      "div",
      {
        className: Ee["dx-datepicker-calendar"],
        "aria-label": m ?? "Date picker",
        children: [
          /* @__PURE__ */ D("div", { className: Ee["dx-datepicker-header"], children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: Ee["dx-datepicker-nav"],
                "aria-label": "Previous month",
                onClick: () => {
                  const W = Re(Xn(q, -1));
                  ie(W), setTimeout(() => Le(W), 0);
                },
                children: /* @__PURE__ */ s(Ne, { name: "chevron-left", size: 16 })
              }
            ),
            /* @__PURE__ */ s("span", { className: Ee["dx-datepicker-title"], children: Ge }),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: Ee["dx-datepicker-nav"],
                "aria-label": "Next month",
                onClick: () => {
                  const W = Re(Xn(q, 1));
                  ie(W), setTimeout(() => Le(W), 0);
                },
                children: /* @__PURE__ */ s(Ne, { name: "chevron-right", size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ D(
            "div",
            {
              ref: j,
              role: "grid",
              className: Ee["dx-datepicker-grid"],
              onKeyDown: se,
              children: [
                /* @__PURE__ */ s("div", { role: "row", className: Ee["dx-datepicker-week-row"], children: kt.map((W) => /* @__PURE__ */ s(
                  "div",
                  {
                    role: "columnheader",
                    className: Ee["dx-datepicker-weekday"],
                    children: W
                  },
                  W
                )) }),
                Array.from({ length: 6 }, (W, ue) => /* @__PURE__ */ s(
                  "div",
                  {
                    role: "row",
                    className: Ee["dx-datepicker-row"],
                    children: Me.slice(ue * 7, ue * 7 + 7).map((Pe) => {
                      const He = ht(Pe), Rt = $e(Pe), St = He.startsWith(Ot);
                      return /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          role: "gridcell",
                          "data-date": He,
                          tabIndex: He === ht(q) ? 0 : -1,
                          "aria-selected": He === nt || void 0,
                          "aria-disabled": Rt || void 0,
                          "aria-label": Ce.format(
                            new Date(Pe.year, Pe.month - 1, Pe.day)
                          ),
                          className: [
                            Ee["dx-datepicker-day"],
                            St ? null : Ee["dx-datepicker-day--outside"],
                            He === Gt ? Ee["dx-datepicker-day--today"] : null,
                            He === nt ? Ee["dx-datepicker-day--selected"] : null,
                            Rt ? Ee["dx-datepicker-day--disabled"] : null
                          ].filter(Boolean).join(" "),
                          onClick: () => tt(Pe),
                          onFocus: () => ie(Pe),
                          children: Pe.day
                        },
                        He
                      );
                    })
                  },
                  ue
                ))
              ]
            }
          ),
          l && /* @__PURE__ */ D("div", { className: Ee["dx-datepicker-time"], children: [
            z0.map((W) => /* @__PURE__ */ D("label", { className: Ee["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ s("span", { className: Ee["dx-datepicker-time-label"], children: Gn(W) }),
              /* @__PURE__ */ D("div", { className: Ee["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    className: Ee["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": Gn(W),
                    value: yt(
                      (le ?? ve ?? Qt())[W]
                    ),
                    onChange: (ue) => et(W, ue.target.value),
                    onKeyDown: (ue) => {
                      ue.key === "ArrowUp" ? (ue.preventDefault(), Qe(W, 1)) : ue.key === "ArrowDown" ? (ue.preventDefault(), Qe(W, -1)) : ue.key === "Enter" && (ue.preventDefault(), V());
                    }
                  }
                ),
                /* @__PURE__ */ D("span", { className: Ee["dx-datepicker-time-buttons"], children: [
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Increase ${Gn(W).toLowerCase()}`,
                      onClick: () => Qe(W, 1),
                      children: /* @__PURE__ */ s(Ne, { name: "chevron-up", size: 11 })
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Decrease ${Gn(W).toLowerCase()}`,
                      onClick: () => Qe(W, -1),
                      children: /* @__PURE__ */ s(Ne, { name: "chevron-down", size: 11 })
                    }
                  )
                ] })
              ] })
            ] }, W)),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: Ee["dx-datepicker-ok"],
                onClick: V,
                children: "OK"
              }
            )
          ] })
        ]
      }
    );
    return /* @__PURE__ */ D(
      "div",
      {
        ref: S,
        className: [
          Ee["dx-datepicker"],
          u ? Ee["dx-datepicker-inline"] : null,
          E
        ].filter(Boolean).join(" "),
        children: [
          !u && /* @__PURE__ */ D(Oe, { children: [
            /* @__PURE__ */ s(
              "input",
              {
                ref: Xe,
                type: "text",
                autoComplete: "off",
                value: Se,
                disabled: f,
                readOnly: y,
                placeholder: $,
                tabIndex: O,
                role: a ? void 0 : "combobox",
                "aria-label": m ?? "Date",
                "aria-haspopup": a ? void 0 : "dialog",
                "aria-expanded": a ? void 0 : Je,
                "aria-controls": a ? void 0 : T,
                "aria-invalid": n || void 0,
                className: [
                  Ee["dx-datepicker-input"],
                  Pt,
                  n ? Ee["dx-datepicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: K,
                onKeyDown: ne,
                onBlur: _e,
                onClick: () => {
                  a || Ve();
                },
                ...N
              }
            ),
            d && !f && Be && /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: [
                  Ee["dx-datepicker-clear"],
                  a ? Ee["dx-datepicker-clear--inset"] : null
                ].filter(Boolean).join(" "),
                "aria-label": b ?? "Clear",
                onClick: me,
                children: /* @__PURE__ */ s(Ne, { name: "close", size: 14 })
              }
            ),
            a && /* @__PURE__ */ s(
              "button",
              {
                ref: I,
                type: "button",
                className: [Ee["dx-datepicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": C ?? "Open calendar",
                "aria-haspopup": "dialog",
                "aria-expanded": U,
                "aria-controls": T,
                disabled: f,
                onClick: Ve,
                children: /* @__PURE__ */ s(Ne, { name: "calendar", size: 16 })
              }
            )
          ] }),
          Je && /* @__PURE__ */ s(
            "div",
            {
              id: T,
              role: u ? void 0 : "dialog",
              className: u ? void 0 : Ee["dx-datepicker-popup"],
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
}, ok = ({
  value: e = 0,
  stars: t = 5,
  readOnly: n = !1,
  disabled: o = !1,
  ariaLabel: i = "Rating",
  clearLabel: c = "Clear",
  rateLabel: _ = "Rate",
  tabIndex: r = 0,
  className: l,
  onChange: a,
  onValueChange: d
}) => {
  const [u, k] = X(e), v = B(
    (f) => Math.min(t, Math.max(1, f)),
    [t]
  ), w = B(
    (f) => {
      a?.(f), d?.(f);
    },
    [a, d]
  ), x = B(
    (f) => {
      n || o || (w(f), k(f));
    },
    [n, o, w]
  ), g = (f) => {
    if (n || o) return;
    const y = u > 0 ? u : 1;
    switch (f.key) {
      case "ArrowRight":
      case "ArrowUp":
        f.preventDefault(), x(v(y + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        f.preventDefault(), x(v(y - 1));
        break;
      case "Home":
        f.preventDefault(), x(1);
        break;
      case "End":
        f.preventDefault(), x(t);
        break;
    }
  }, h = Array.from({ length: t }, (f, y) => y + 1);
  return /* @__PURE__ */ D(
    "div",
    {
      role: "radiogroup",
      "aria-label": i,
      "aria-readonly": n || void 0,
      className: [
        en["dx-rating"],
        n ? en["dx-rating-readonly"] : null,
        o ? en["dx-rating-disabled"] : null,
        l
      ].filter(Boolean).join(" "),
      onKeyDown: g,
      children: [
        !n && !o && /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: en["dx-rating-clear"],
            "aria-label": c,
            tabIndex: e === 0 ? r : -1,
            disabled: o,
            onClick: () => x(0),
            children: /* @__PURE__ */ s(Ne, { name: "ban", size: 16 })
          }
        ),
        h.map((f) => {
          const y = f <= e, $ = f === (e > 0 ? e : u);
          return /* @__PURE__ */ D(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": y,
              "aria-posinset": f,
              "aria-setsize": t,
              "aria-label": `${_} ${f}`,
              tabIndex: $ ? r : -1,
              "aria-disabled": o || n || void 0,
              disabled: o || n,
              className: [
                en["dx-rating-item"],
                y ? en["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => x(f),
              onFocus: () => k(f),
              children: [
                /* @__PURE__ */ s(
                  "span",
                  {
                    className: en["dx-rating-icon-filled"],
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ s(Ne, { name: "star", size: 20 })
                  }
                ),
                /* @__PURE__ */ s("span", { className: en["dx-rating-icon-empty"], "aria-hidden": "true", children: /* @__PURE__ */ s(Ne, { name: "star-outline", size: 20 }) })
              ]
            },
            f
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
function At(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const lk = ({
  value: e = 0,
  valueMin: t = 0,
  valueMax: n = 100,
  min: o = 0,
  max: i = 100,
  step: c = 1,
  range: _ = !1,
  orientation: r = "horizontal",
  disabled: l = !1,
  label: a = "Value",
  minLabel: d = "Min",
  maxLabel: u = "Max",
  tabIndex: k = 0,
  className: v,
  onChange: w,
  onInput: x,
  onValueChange: g,
  onInputChange: h
}) => {
  const f = oe(null), y = oe(
    null
  ), [$, m] = X(null), C = $ ?? e, b = be(
    () => At(C, o, i),
    [C, o, i]
  ), O = be(
    () => At(_ ? t : b, o, i),
    [_, t, b, o, i]
  ), E = be(
    () => At(_ ? Math.max(n, O) : b, o, i),
    [_, n, O, b, o, i]
  ), M = B(
    (q) => {
      const ie = i - o;
      return ie <= 0 ? 0 : (At(q, o, i) - o) / ie * 100;
    },
    [o, i]
  ), A = B(
    (q, ie) => {
      const J = f.current;
      if (!J) return o;
      const de = J.getBoundingClientRect();
      let ae;
      r === "vertical" ? ae = 1 - (ie - de.top) / de.height : ae = (q - de.left) / de.width;
      const ve = o + At(ae, 0, 1) * (i - o);
      return c > 0 ? At(Math.round(ve / c) * c, o, i) : At(ve, o, i);
    },
    [o, i, c, r]
  ), N = B(
    (q) => {
      typeof q == "number" && m(q), w?.(q), g?.(q);
    },
    [w, g]
  ), p = B(
    (q) => {
      typeof q == "number" && m(q), x?.(q), h?.(q);
    },
    [x, h]
  ), S = B(
    (q, ie, J) => {
      const de = A(ie, J);
      let ae;
      _ ? q === "min" ? ae = { min: Math.min(de, E), max: E } : ae = { min: O, max: Math.max(de, O) } : ae = de, p(ae), y.current === null && N(ae);
    },
    [_, A, O, E, p, N]
  ), L = B(
    (q, ie) => {
      const J = (c > 0 ? c : 1) * ie;
      let de;
      _ ? q === "min" ? de = {
        min: At(O + J, o, E),
        max: E
      } : de = {
        min: O,
        max: At(E + J, O, i)
      } : de = At(b + J, o, i), N(de);
    },
    [_, c, o, i, O, E, b, N]
  ), I = (q, ie) => {
    if (!l)
      switch (ie.key) {
        case "ArrowLeft":
        case "ArrowDown":
          ie.preventDefault(), L(q, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          ie.preventDefault(), L(q, 1);
          break;
        case "Home":
          ie.preventDefault(), N(_ ? q === "min" ? { min: o, max: E } : { min: O, max: O } : o);
          break;
        case "End":
          ie.preventDefault(), N(_ ? q === "min" ? { min: E, max: E } : { min: O, max: i } : i);
          break;
      }
  }, j = (q, ie) => {
    l || (ie.preventDefault(), ie.currentTarget.focus(), typeof ie.currentTarget.setPointerCapture == "function" && ie.currentTarget.setPointerCapture(ie.pointerId), y.current = { key: q, pointerId: ie.pointerId }, S(q, ie.clientX, ie.clientY));
  }, T = (q) => {
    !y.current || y.current.pointerId !== q.pointerId || (q.preventDefault(), S(y.current.key, q.clientX, q.clientY));
  }, F = (q) => {
    !y.current || y.current.pointerId !== q.pointerId || (y.current = null, q.preventDefault(), N(_ ? { min: O, max: E } : b));
  }, [G, Y] = X(null), U = M(O), te = M(E), le = _ ? U : 0, ee = te;
  return /* @__PURE__ */ s(
    "div",
    {
      className: [
        ln["dx-slider"],
        r === "vertical" ? ln["dx-slider-vertical"] : null,
        l ? ln["dx-slider-disabled"] : null,
        v
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ D("div", { ref: f, className: ln["dx-slider-track"], children: [
        /* @__PURE__ */ s(
          "div",
          {
            className: ln["dx-slider-range"],
            style: r === "vertical" ? { bottom: `${le}%`, height: `${ee - le}%` } : { left: `${le}%`, width: `${ee - le}%` }
          }
        ),
        /* @__PURE__ */ s(
          "div",
          {
            role: "slider",
            "aria-valuemin": o,
            "aria-valuemax": i,
            "aria-valuenow": Math.round(O),
            "aria-orientation": r,
            "aria-label": _ ? d : a,
            "aria-disabled": l || void 0,
            tabIndex: l || _ && G === "max" ? -1 : k,
            className: ln["dx-slider-handle"],
            style: r === "vertical" ? { bottom: `calc(${U}% - 8px)` } : { left: `calc(${U}% - 8px)` },
            onKeyDown: (q) => I("min", q),
            onPointerDown: (q) => j("min", q),
            onPointerMove: T,
            onPointerUp: F,
            onFocus: () => Y("min")
          }
        ),
        _ && /* @__PURE__ */ s(
          "div",
          {
            role: "slider",
            "aria-valuemin": o,
            "aria-valuemax": i,
            "aria-valuenow": Math.round(E),
            "aria-orientation": r,
            "aria-label": u,
            "aria-disabled": l || void 0,
            tabIndex: l || G === "min" ? -1 : k,
            className: ln["dx-slider-handle"],
            style: r === "vertical" ? { bottom: `calc(${te}% - 8px)` } : { left: `calc(${te}% - 8px)` },
            onKeyDown: (q) => I("max", q),
            onPointerDown: (q) => j("max", q),
            onPointerMove: T,
            onPointerUp: F,
            onFocus: () => Y("max")
          }
        )
      ] })
    }
  );
}, Ke = {
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
}, E0 = "-10675199.02:48:05.4775808", I0 = "10675199.02:48:05.4775808", Xt = 86400, Vt = 3600, Ct = 60, is = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, Hs = {
  days: Xt,
  hours: Vt,
  minutes: Ct,
  seconds: 1
}, A0 = {
  day: Xt,
  hour: Vt,
  minute: Ct,
  second: 1
};
function mn(e) {
  return String(e).padStart(2, "0");
}
function Rn(e) {
  const t = e.trim();
  if (!t) return null;
  let n = 1, o = t;
  o.startsWith("-") ? (n = -1, o = o.slice(1)) : o.startsWith("+") && (o = o.slice(1));
  const i = /^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(
    o
  );
  if (i) {
    if (!i.slice(1).some((u) => u != null)) return null;
    const r = i[1] != null ? Number(i[1]) : 0, l = i[2] != null ? Number(i[2]) : 0, a = i[3] != null ? Number(i[3]) : 0, d = i[4] != null ? Number(i[4]) : 0;
    return n * (r * Xt + l * Vt + a * Ct + d);
  }
  const c = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(
    o
  );
  if (c) {
    const _ = c[1] != null ? Number(c[1]) : 0, r = Number(c[2]), l = Number(c[3]), a = c[4] != null ? Number(c[4]) : 0, d = c[5] != null ? +`0.${c[5]}` : 0;
    return r > 23 || l > 59 || a > 59 ? null : n * (_ * Xt + r * Vt + l * Ct + a + d);
  }
  return null;
}
function j0(e) {
  return e.days * Xt + e.hours * Vt + e.minutes * Ct + e.seconds;
}
function Ks(e) {
  let t = Math.abs(e);
  const n = Math.floor(t / Xt);
  t %= Xt;
  const o = Math.floor(t / Vt);
  t %= Vt;
  const i = Math.floor(t / Ct), c = Math.round(t % Ct * 1e9) / 1e9;
  return { days: n, hours: o, minutes: i, seconds: c };
}
function hs(e, t) {
  const n = e < 0;
  let o = Math.abs(e);
  t === "minute" ? o = Math.round(o / Ct) * Ct : t === "hour" ? o = Math.round(o / Vt) * Vt : t === "day" && (o = Math.round(o / Xt) * Xt);
  let i = Math.round(o % Ct);
  const c = i === 60 ? 1 : 0;
  i = i === 60 ? 0 : i;
  const _ = Math.floor(o / Ct) + c, r = _ % 60, l = Math.floor(_ / 60), a = l % 24, d = Math.floor(l / 24), u = n ? "-" : "", k = d > 0 ? `${d}.` : "";
  switch (t) {
    case "day":
      return `${u}${d} day${d === 1 ? "" : "s"}`;
    case "hour":
      return `${u}${k}${mn(a)}`;
    case "minute":
      return `${u}${k}${mn(a)}:${mn(r)}`;
    default:
      return `${u}${k}${mn(a)}:${mn(r)}:${mn(i)}`;
  }
}
function Us(e, t = "second") {
  const n = Rn(e);
  return n === null ? "" : hs(n, t);
}
function cs(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const ak = Fe(
  function({
    size: t = "md",
    invalid: n = !1,
    value: o,
    defaultValue: i,
    min: c = E0,
    max: _ = I0,
    step: r = "1",
    precision: l = "second",
    showDays: a = !0,
    showHours: d = !0,
    showMinutes: u = !0,
    showSeconds: k = !0,
    allowClear: v = !1,
    inline: w = !1,
    onChange: x,
    onValueChange: g,
    onOpen: h,
    onClose: f,
    disabled: y,
    placeholder: $,
    ariaLabel: m,
    triggerLabel: C,
    clearLabel: b,
    tabIndex: O,
    className: E,
    onBlur: M,
    onKeyDown: A,
    ...N
  }, p) {
    const S = oe(null), L = oe(null), I = oe(null), j = qe(), T = o !== void 0, [F, G] = X(
      () => i != null ? Us(i, l) : ""
    ), [Y, U] = X(!1), [te, le] = X(null), [ee, q] = X(null), ie = be(
      () => Rn(c) ?? -Number.MAX_SAFE_INTEGER,
      [c]
    ), J = be(
      () => Rn(_) ?? Number.MAX_SAFE_INTEGER,
      [_]
    ), de = be(() => {
      const Q = Number.parseFloat(r);
      return Number.isNaN(Q) || Q <= 0 ? 1 : Q;
    }, [r]), ae = be(() => {
      const Q = T ? o ?? "" : F;
      return Q ? Rn(Q) : null;
    }, [o, F, T]), ve = B(
      (Q) => {
        const Me = Q === null ? "" : hs(Q, l);
        T || G(Me), x?.(Me), g?.(Me);
      },
      [T, l, x, g]
    ), $e = B(
      (Q) => {
        Q && te !== null && ve(te), U(!1), le(null), q(null), f?.(), w || I.current?.focus();
      },
      [w, te, ve, f]
    ), Re = B(() => {
      y || (le(ae ?? 0), U(!0), h?.());
    }, [y, ae, h]), we = B(() => {
      Y ? $e(!1) : Re();
    }, [Y, $e, Re]), Xe = B(
      (Q, Me) => {
        le((nt) => {
          const Ot = (nt ?? ae ?? 0) + Me * de * Hs[Q];
          return cs(Ot, ie, J);
        });
      },
      [ae, de, ie, J]
    ), xe = B(
      (Q) => {
        const Me = ee?.[Q];
        if (Me == null) return;
        const nt = Number.parseFloat(Me), Gt = Number.isNaN(nt) ? 0 : nt;
        le((Ot) => {
          const Ce = Ot ?? ae ?? 0, Ge = Ks(Ce);
          Ge[Q] = Gt;
          const Pt = (Ce < 0 ? -1 : 1) * j0(Ge);
          return cs(Pt, ie, J);
        }), q(null);
      },
      [ee, ae, ie, J]
    ), Ze = (Q, Me) => {
      q((nt) => ({ ...nt ?? {}, [Q]: Me }));
    }, Ve = (Q, Me) => {
      switch (Me.key) {
        case "ArrowUp":
          Me.preventDefault(), xe(Q), Xe(Q, 1);
          break;
        case "ArrowDown":
          Me.preventDefault(), xe(Q), Xe(Q, -1);
          break;
        case "Home":
          Me.preventDefault(), xe(Q), le(ie);
          break;
        case "End":
          Me.preventDefault(), xe(Q), le(J);
          break;
        case "Enter":
          Me.preventDefault(), xe(Q), $e(!0);
          break;
      }
    }, Le = B(() => {
      if (Y) return;
      const Q = Rn(F);
      ve(Q !== null ? cs(Q, ie, J) : null);
    }, [Y, F, ie, J, ve]), tt = (Q) => {
      T || G(Q.target.value);
    }, Qe = (Q) => {
      Q.key === "Enter" ? (Q.preventDefault(), Y ? $e(!0) : Le()) : Q.key === "Escape" && Y ? (Q.preventDefault(), $e(!1)) : Q.key === "ArrowDown" && !Y ? (Q.preventDefault(), Re()) : Q.key === "Tab" && Y && U(!1), A?.(Q);
    }, et = (Q) => {
      Le(), M?.(Q);
    }, V = () => {
      T || G(""), x?.(""), g?.(""), L.current?.focus();
    };
    ye(() => {
      if (!Y) return;
      const Q = (Me) => {
        S.current && !S.current.contains(Me.target) && $e(!1);
      };
      return document.addEventListener("mousedown", Q), () => document.removeEventListener("mousedown", Q);
    }, [Y, $e]), ye(() => {
      if (!Y) return;
      const Q = (Me) => {
        Me.key === "Escape" && $e(!1);
      };
      return document.addEventListener("keydown", Q), () => document.removeEventListener("keydown", Q);
    }, [Y, $e]), ye(() => {
      if (w && te !== null) {
        const Q = ae;
        (Q === null || Math.abs(te - Q) > 1e-9) && ve(te);
      }
    }, [w, te, ae, ve]);
    const z = B(
      (Q) => {
        L.current = Q, typeof p == "function" ? p(Q) : p && (p.current = Q);
      },
      [p]
    ), K = T ? o ? Us(o, l) : "" : F, ne = T ? !!o : F.length > 0, _e = w || Y, se = te ?? ae ?? 0, me = Ks(se), Se = A0[l], Je = ["days", "hours", "minutes", "seconds"].filter(
      (Q) => Hs[Q] >= Se && (Q === "days" ? a : Q === "hours" ? d : Q === "minutes" ? u : k)
    ), dt = t === "xs" ? Ke["dx-timespanpicker-input--xs"] : t === "sm" ? Ke["dx-timespanpicker-input--sm"] : t === "lg" ? Ke["dx-timespanpicker-input--lg"] : t === "xl" ? Ke["dx-timespanpicker-input--xl"] : Ke["dx-timespanpicker-input--md"], vt = /* @__PURE__ */ D("div", { className: Ke["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ s("div", { className: Ke["dx-timespanpicker-preview"], "aria-live": "polite", children: hs(se, l) }),
      /* @__PURE__ */ s("div", { className: Ke["dx-timespanpicker-units"], children: Je.map((Q) => /* @__PURE__ */ D("label", { className: Ke["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ s("span", { className: Ke["dx-timespanpicker-unit-label"], children: is[Q] }),
        /* @__PURE__ */ D("span", { className: Ke["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ s(
            "input",
            {
              className: Ke["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: ee?.[Q] ?? String(me[Q]),
              onChange: (Me) => Ze(Q, Me.target.value),
              onKeyDown: (Me) => Ve(Q, Me),
              onBlur: () => xe(Q)
            }
          ),
          /* @__PURE__ */ D("span", { className: Ke["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${is[Q].toLowerCase()}`,
                onClick: () => {
                  xe(Q), Xe(Q, 1);
                },
                children: /* @__PURE__ */ s(Ne, { name: "chevron-up", size: 11 })
              }
            ),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${is[Q].toLowerCase()}`,
                onClick: () => {
                  xe(Q), Xe(Q, -1);
                },
                children: /* @__PURE__ */ s(Ne, { name: "chevron-down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, Q)) }),
      /* @__PURE__ */ s("div", { className: Ke["dx-timespanpicker-footer"], children: /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          className: Ke["dx-timespanpicker-ok"],
          onClick: () => $e(!0),
          children: "OK"
        }
      ) })
    ] });
    return /* @__PURE__ */ D(
      "div",
      {
        ref: S,
        className: [
          Ke["dx-timespanpicker"],
          w ? Ke["dx-timespanpicker-inline"] : null,
          E
        ].filter(Boolean).join(" "),
        children: [
          !w && /* @__PURE__ */ D(Oe, { children: [
            /* @__PURE__ */ s(
              "input",
              {
                ref: z,
                type: "text",
                autoComplete: "off",
                value: K,
                disabled: y,
                placeholder: $,
                tabIndex: O,
                role: "combobox",
                "aria-label": m ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": Y,
                "aria-controls": j,
                "aria-invalid": n || void 0,
                className: [
                  Ke["dx-timespanpicker-input"],
                  dt,
                  n ? Ke["dx-timespanpicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: tt,
                onKeyDown: Qe,
                onBlur: et,
                ...N
              }
            ),
            v && !y && ne && /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: Ke["dx-timespanpicker-clear"],
                "aria-label": b ?? "Clear",
                onClick: V,
                children: /* @__PURE__ */ s(Ne, { name: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ s(
              "button",
              {
                ref: I,
                type: "button",
                className: [Ke["dx-timespanpicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": C ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": Y,
                "aria-controls": j,
                disabled: y,
                onClick: we,
                children: /* @__PURE__ */ s(Ne, { name: "clock", size: 16 })
              }
            )
          ] }),
          _e && /* @__PURE__ */ s(
            "div",
            {
              id: j,
              role: w ? void 0 : "dialog",
              "aria-label": m ?? "Time span picker",
              className: w ? void 0 : Ke["dx-timespanpicker-popup"],
              children: vt
            }
          )
        ]
      }
    );
  }
), T0 = "_wrapper_1rhh5_1", L0 = "_cells_1rhh5_8", P0 = "_cell_1rhh5_8", R0 = "_invalid_1rhh5_63", B0 = "_live_1rhh5_73", an = {
  wrapper: T0,
  cells: L0,
  cell: P0,
  "cell-sm": "_cell-sm_1rhh5_45",
  "cell-md": "_cell-md_1rhh5_51",
  "cell-lg": "_cell-lg_1rhh5_57",
  invalid: R0,
  live: B0
};
function Ws(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const ik = Fe(
  function({
    length: t = 6,
    value: n,
    defaultValue: o,
    onChange: i,
    invalid: c = !1,
    size: _ = "md",
    autoFocus: r = !1,
    disabled: l = !1,
    label: a = "Security code",
    liveAnnounce: d = !0,
    className: u,
    "aria-label": k
  }, v) {
    const w = qe(), x = n !== void 0, [g, h] = X(Ws(o).join("")), f = x ? Ws(n).join("") : g, y = Array.from({ length: t }, (N, p) => f[p] ?? ""), $ = oe([]), [m, C] = X(""), b = (N) => {
      x || h(N), i?.(N);
    }, O = (N) => {
      const p = $.current[N];
      p && !p.disabled && (p.focus(), p.select());
    }, E = (N, p) => {
      const S = p.replace(/\D/g, "").slice(-1), L = f.split("");
      if (S) {
        L[N] = S;
        const I = L.join("").slice(0, t);
        b(I), I.length < t ? O(N + 1) : d && C("Code complete");
      }
    }, M = (N, p) => {
      if (p.key === "Backspace") {
        if (p.preventDefault(), f[N]) {
          const S = f.split("");
          S[N] = "", b(S.join(""));
        } else if (N > 0) {
          const S = f.split("");
          S[N - 1] = "", b(S.join("")), O(N - 1);
        }
      } else p.key === "ArrowLeft" && N > 0 ? (p.preventDefault(), O(N - 1)) : p.key === "ArrowRight" && N < t - 1 ? (p.preventDefault(), O(N + 1)) : p.key === "Home" ? (p.preventDefault(), O(0)) : p.key === "End" && (p.preventDefault(), O(t - 1));
    }, A = (N, p) => {
      p.preventDefault();
      const S = p.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!S) return;
      const L = f.split("");
      let I = 0;
      for (let T = 0; T < S.length && N + T < t; T++)
        L[N + T] = S[T] ?? "", I++;
      const j = L.join("");
      b(j), j.length >= t ? d && C("Code complete") : O(N + I);
    };
    return /* @__PURE__ */ D(
      "div",
      {
        className: [an.wrapper, u].filter(Boolean).join(" "),
        role: "group",
        "aria-label": k ?? a,
        "data-invalid": c || void 0,
        children: [
          /* @__PURE__ */ s("div", { className: [an.cells, an[_]].join(" "), children: y.map((N, p) => /* @__PURE__ */ s(
            "input",
            {
              ref: (S) => {
                $.current[p] = S, p === 0 && v && (typeof v == "function" ? v(S) : v.current = S);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: N,
              disabled: l,
              "aria-label": `Digit ${p + 1} of ${t}`,
              "aria-invalid": c && N !== "" ? !0 : void 0,
              autoFocus: r && p === 0,
              className: [
                an.cell,
                an[`cell-${_}`],
                c ? an.invalid : null
              ].filter(Boolean).join(" "),
              onChange: (S) => E(p, S.target.value),
              onKeyDown: (S) => M(p, S),
              onPaste: (S) => A(p, S),
              onFocus: (S) => S.target.select(),
              onBlur: () => {
                d && C("");
              }
            },
            p
          )) }),
          d && /* @__PURE__ */ s(
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
), q0 = "_wrapper_1p09k_1", F0 = "_header_1p09k_7", H0 = "_label_1p09k_15", K0 = "_clear_1p09k_22", U0 = "_canvas_1p09k_53", W0 = "_disabled_1p09k_69", gn = {
  wrapper: q0,
  header: F0,
  label: H0,
  clear: K0,
  canvas: U0,
  disabled: W0
}, ck = Fe(
  function({
    value: t,
    defaultValue: n,
    onChange: o,
    penColor: i = "#1c1c1c",
    penWidth: c = 2.5,
    clearLabel: _ = "Clear",
    ariaLabel: r = "Signature",
    width: l,
    height: a = 140,
    disabled: d = !1,
    className: u
  }, k) {
    const v = oe(null), w = oe(!1), x = oe(!1), g = oe({ x: 0, y: 0 });
    ye(() => {
      const b = v.current;
      if (!b) return;
      const O = window.devicePixelRatio || 1, E = Math.round((l ?? b.clientWidth) * O), M = Math.round(a * O);
      (b.width !== E || b.height !== M) && (b.width = E, b.height = M);
      const A = b.getContext("2d");
      if (!A) return;
      A.setTransform(O, 0, 0, O, 0, 0), A.lineWidth = c, A.strokeStyle = i, A.lineCap = "round", A.lineJoin = "round";
      const N = t ?? n;
      if (N) {
        const p = new Image();
        p.onload = () => {
          A.drawImage(p, 0, 0, b.clientWidth, a);
        }, p.src = N;
      }
    }, [t, n, i, c, l, a]);
    const h = () => {
      const b = v.current;
      if (!b) return;
      const O = b.toDataURL("image/png");
      o?.(O);
    }, f = () => {
      const b = v.current;
      if (!b) return;
      const O = b.getContext("2d");
      O && O.clearRect(0, 0, b.width, b.height), o?.("");
    };
    ms(k, () => ({
      clear: f,
      toDataURL: (b = "image/png", O) => v.current?.toDataURL(b, O) ?? ""
    }));
    const y = (b) => {
      const O = b.currentTarget.getBoundingClientRect();
      return { x: b.clientX - O.left, y: b.clientY - O.top };
    }, $ = (b) => {
      d || (b.preventDefault(), typeof b.currentTarget.setPointerCapture == "function" && b.currentTarget.setPointerCapture(b.pointerId), w.current = !0, x.current = !1, g.current = y(b));
    }, m = (b) => {
      if (!w.current) return;
      b.preventDefault();
      const O = b.currentTarget.getContext("2d");
      if (!O) return;
      const E = y(b);
      O.beginPath(), O.moveTo(g.current.x, g.current.y), O.lineTo(E.x, E.y), O.stroke(), g.current = E, x.current = !0;
    }, C = (b) => {
      w.current && (b.preventDefault(), w.current = !1, x.current && h());
    };
    return /* @__PURE__ */ D(
      "div",
      {
        className: [
          gn.wrapper,
          u,
          d ? gn.disabled : null
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ D("div", { className: gn.header, children: [
            /* @__PURE__ */ s("span", { className: gn.label, children: r }),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: gn.clear,
                onClick: f,
                disabled: d,
                children: _
              }
            )
          ] }),
          /* @__PURE__ */ s(
            "canvas",
            {
              ref: v,
              role: "img",
              "aria-label": r,
              "aria-disabled": d || void 0,
              style: {
                width: l ? `${l}px` : void 0,
                height: `${a}px`
              },
              className: gn.canvas,
              onPointerDown: $,
              onPointerMove: m,
              onPointerUp: C,
              onPointerCancel: C
            }
          )
        ]
      }
    );
  }
), X0 = "_wrapper_cdx3b_1", V0 = "_trigger_cdx3b_7", G0 = "_list_cdx3b_35", Y0 = "_row_cdx3b_44", Z0 = "_name_cdx3b_59", J0 = "_size_cdx3b_68", Q0 = "_progress_cdx3b_74", ex = "_fill_cdx3b_82", tx = "_status_cdx3b_99", nx = "_remove_cdx3b_106", jt = {
  wrapper: X0,
  trigger: V0,
  list: G0,
  row: Y0,
  name: Z0,
  size: J0,
  progress: Q0,
  fill: ex,
  status: tx,
  remove: nx
};
function Xs(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const dk = Fe(function({
  url: t,
  multiple: n = !1,
  parameterName: o = "files",
  auto: i = !0,
  headers: c,
  accept: _,
  maxFileCount: r = Number.POSITIVE_INFINITY,
  maxFileSize: l,
  chooseText: a = "Upload",
  children: d,
  onProgress: u,
  onComplete: k,
  onError: v
}, w) {
  const x = oe(null), [g, h] = X([]), f = oe(/* @__PURE__ */ new Map()), y = (O, E) => {
    h(
      (M) => M.map((A) => A.file.name === O ? { ...A, ...E } : A)
    );
  }, $ = (O) => {
    if (!t) return;
    const E = new XMLHttpRequest();
    f.current.set(O.file.name, E);
    const M = new FormData();
    if (M.append(o, O.file), E.upload.addEventListener("progress", (A) => {
      if (!A.lengthComputable) return;
      const N = Math.round(A.loaded / A.total * 100);
      y(O.file.name, { state: "uploading", progress: N }), u?.(O.file.name, N);
    }), E.addEventListener("load", () => {
      E.status >= 200 && E.status < 300 ? (y(O.file.name, { state: "complete", progress: 100 }), k?.(O.file.name)) : (y(O.file.name, {
        state: "error",
        message: `HTTP ${E.status}`
      }), v?.(O.file.name, `HTTP ${E.status}`));
    }), E.addEventListener("error", () => {
      y(O.file.name, { state: "error", message: "Network error" }), v?.(O.file.name, "Network error");
    }), c)
      for (const [A, N] of Object.entries(c))
        E.setRequestHeader(A, N);
    E.open("POST", t), E.send(M), y(O.file.name, { state: "uploading", progress: 0 });
  }, m = (O) => {
    if (!O) return;
    const E = [...O], M = [];
    let A = Math.max(0, r - g.length);
    for (const p of E) {
      if (l != null && p.size > l) {
        v?.(
          p.name,
          `File too large (maximum ${Xs(l)})`
        );
        continue;
      }
      if (A <= 0) {
        v?.(p.name, `Too many files (maximum ${r})`);
        continue;
      }
      A -= 1, M.push(p);
    }
    const N = M.map((p) => ({
      file: p,
      state: "pending",
      progress: 0
    }));
    h((p) => [...p, ...N]), x.current && (x.current.value = ""), i && N.forEach($);
  }, C = (O) => {
    f.current.get(O)?.abort(), f.current.delete(O), h((M) => M.filter((A) => A.file.name !== O));
  }, b = d ?? /* @__PURE__ */ D(
    "button",
    {
      type: "button",
      className: jt.trigger,
      onClick: () => x.current?.click(),
      children: [
        /* @__PURE__ */ s(Ne, { name: "upload", size: 14 }),
        a
      ]
    }
  );
  return ms(w, () => ({
    open: () => x.current?.click(),
    upload: () => g.forEach((O) => O.state === "pending" ? $(O) : null)
  })), /* @__PURE__ */ D("div", { className: jt.wrapper, children: [
    b,
    /* @__PURE__ */ s(
      "input",
      {
        ref: x,
        type: "file",
        hidden: !0,
        multiple: n,
        accept: _,
        "data-testid": "upload-input",
        onChange: (O) => m(O.target.files)
      }
    ),
    !d && g.length > 0 && /* @__PURE__ */ s("ul", { className: jt.list, children: g.map(({ file: O, state: E, progress: M, message: A }) => /* @__PURE__ */ D(
      "li",
      {
        className: jt.row,
        "data-state": E,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ s("span", { className: jt.name, children: O.name }),
          /* @__PURE__ */ s("span", { className: jt.size, children: Xs(O.size) }),
          /* @__PURE__ */ s(
            "span",
            {
              className: jt.progress,
              role: "progressbar",
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": M,
              children: /* @__PURE__ */ s(
                "span",
                {
                  className: jt.fill,
                  style: { width: `${M}%` }
                }
              )
            }
          ),
          /* @__PURE__ */ s("span", { className: jt.status, role: "status", children: E === "uploading" ? "Uploading" : E === "complete" ? "Complete" : E === "error" ? A ?? "Failed" : "Pending" }),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: jt.remove,
              "aria-label": `Remove ${O.name}`,
              onClick: () => C(O.name),
              children: /* @__PURE__ */ s(Ne, { name: "close", size: 14 })
            }
          )
        ]
      },
      O.name
    )) })
  ] });
}), sx = "_zone_e481w_1", rx = "_dragging_e481w_23", ox = "_caption_e481w_28", lx = "_browse_e481w_40", ax = "_disabled_e481w_67", An = {
  zone: sx,
  dragging: rx,
  caption: ox,
  browse: lx,
  disabled: ax
};
function ix(e, t) {
  return t ? t.split(",").some((n) => {
    if (n = n.trim(), !n) return !1;
    if (n.startsWith("."))
      return e.name.toLowerCase().endsWith(n.toLowerCase());
    if (n.endsWith("/*")) {
      const o = n.slice(0, -1);
      return e.type.startsWith(o);
    }
    return e.type === n;
  }) : !0;
}
const uk = Fe(
  function({
    accept: t,
    multiple: n = !1,
    onDrop: o,
    label: i = "Drop files here or browse",
    dragLabel: c = "Drop to attach",
    browseText: _ = "Browse",
    disabled: r = !1,
    className: l
  }, a) {
    const d = oe(null), [u, k] = X(!1), v = (f) => {
      if (!f || f.length === 0) return;
      const y = [...f].filter(($) => ix($, t ?? ""));
      y.length !== 0 && o?.(y);
    }, w = (f) => {
      r || (f.preventDefault(), k(!0));
    }, x = (f) => {
      r || (f.preventDefault(), f.dataTransfer.dropEffect = "copy", k(!0));
    }, g = (f) => {
      r || f.currentTarget.contains(f.relatedTarget) || k(!1);
    }, h = (f) => {
      r || (f.preventDefault(), k(!1), v(f.dataTransfer.files));
    };
    return ms(a, () => ({
      open: () => d.current?.click()
    })), /* @__PURE__ */ D(
      "div",
      {
        role: "region",
        "aria-label": i,
        className: [
          An.zone,
          u ? An.dragging : null,
          r ? An.disabled : null,
          l
        ].filter(Boolean).join(" "),
        onDragEnter: w,
        onDragOver: x,
        onDragLeave: g,
        onDrop: h,
        children: [
          /* @__PURE__ */ s("p", { className: An.caption, children: u ? c : i }),
          !r && /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: An.browse,
              onClick: () => d.current?.click(),
              children: _
            }
          ),
          /* @__PURE__ */ s(
            "input",
            {
              ref: d,
              type: "file",
              hidden: !0,
              multiple: n,
              accept: t,
              "data-testid": "dropzone-input",
              onChange: (f) => {
                v(f.target.files), f.target.value = "";
              }
            }
          )
        ]
      }
    );
  }
), cx = "_root_mq6fh_1", dx = "_menubar_mq6fh_5", ux = "_horizontal_mq6fh_15", _x = "_vertical_mq6fh_20", fx = "_itemWrapper_mq6fh_25", hx = "_item_mq6fh_25", px = "_disabled_mq6fh_61", mx = "_icon_mq6fh_68", gx = "_text_mq6fh_75", xx = "_caret_mq6fh_79", bx = "_hasChildren_mq6fh_85", yx = "_submenu_mq6fh_94", vx = "_submenuItem_mq6fh_118", kx = "_flyout_mq6fh_155", wx = "_hamburger_mq6fh_175", $x = "_responsive_mq6fh_198", Nx = "_mobileOpen_mq6fh_207", We = {
  root: cx,
  menubar: dx,
  horizontal: ux,
  vertical: _x,
  itemWrapper: fx,
  item: hx,
  disabled: px,
  icon: mx,
  text: gx,
  caret: xx,
  hasChildren: bx,
  submenu: yx,
  submenuItem: vx,
  flyout: kx,
  hamburger: wx,
  responsive: $x,
  mobileOpen: Nx
}, es = ns(null);
function Ox(e, t) {
  if (!e || typeof window > "u") return !1;
  const n = window.location.hash.replace(/^#\/?/, ""), o = e.replace(/^#?\/?/, "");
  return t === "prefix" ? o === "" ? !1 : n === o || n.startsWith(`${o}/`) : n === o;
}
function Sx(e, t, n, o, i) {
  const [c, _] = X(n), r = e ? t ?? !1 : c, l = B(
    (a) => {
      e || _(a), o?.(a);
    },
    [e, o]
  );
  return ye(() => {
    i > 0 && l(!1);
  }, [i]), [r, l];
}
function Dx({ icon: e, iconColor: t, image: n, imageAlt: o }) {
  return n ? /* @__PURE__ */ s("span", { className: We.icon, "aria-hidden": "true", children: /* @__PURE__ */ s("img", { src: n, alt: o ?? "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ s("span", { className: We.icon, "aria-hidden": "true", style: t ? { color: t } : void 0, children: /* @__PURE__ */ s(Ne, { name: e, size: 16 }) }) : null;
}
function bs({ itemKey: e, props: t }) {
  const n = kn(es);
  if (!n) throw new Error("MenuItem must be used inside <Menu>");
  const { text: o, value: i, path: c, disabled: _, template: r } = t, l = be(
    () => Bn.toArray(t.children).filter(pt),
    [t.children]
  ), a = l.length > 0, d = !!_, u = t.open !== void 0, [k, v] = Sx(u, t.open, t.defaultOpen ?? !1, t.onOpenChange, n.closeSignal), w = n.level === 0, x = oe(0), h = (w && !u ? n.openKey === e : null) ?? k, f = B(
    (I) => {
      w && !u ? n.setOpenKey(I ? e : null) : (v(I), w && n.setOpenKey(null));
    },
    [w, u, n, e, v]
  ), [, y] = X(0);
  ye(() => {
    if (!c) return;
    const I = () => y((j) => j + 1);
    return window.addEventListener("hashchange", I), () => window.removeEventListener("hashchange", I);
  }, [c]);
  const $ = c && !a ? Ox(c, t.match) : !1, m = B(
    (I) => {
      if (d) {
        I.preventDefault();
        return;
      }
      const j = { text: o, value: i, path: c };
      [n.emit(j), t.onClick?.(j)].includes(!1) && I.preventDefault(), n.closeAll();
    },
    [d, o, i, c, n, t]
  ), C = B(() => {
    if (!d) {
      if (h && (Date.now() - x.current < 600 || !n.clickToOpen)) {
        x.current = 0;
        return;
      }
      f(!h);
    }
  }, [d, h, f, n.clickToOpen]), b = B(() => {
    !a || d || n.clickToOpen || (x.current = Date.now(), f(!0));
  }, [a, d, n.clickToOpen, f]), O = B(() => {
    n.clickToOpen || f(!1);
  }, [n.clickToOpen, f]), E = `${n.baseId}-submenu-${e}`, [M, A] = X(null);
  ye(() => {
    n.closeSignal > 0 && A(null);
  }, [n.closeSignal]);
  const N = be(
    () => ({
      baseId: n.baseId,
      flyout: n.flyout,
      clickToOpen: n.clickToOpen,
      level: n.level + 1,
      closeSignal: n.closeSignal,
      emit: n.emit,
      closeAll: n.closeAll,
      openKey: M,
      setOpenKey: A
    }),
    [n, M]
  ), p = a ? /* @__PURE__ */ s("span", { className: We.caret, "aria-hidden": "true", children: /* @__PURE__ */ s(Ne, { name: n.flyout && !w ? "chevron-right" : "chevron-down", size: 10 }) }) : null, S = r ?? /* @__PURE__ */ D(Oe, { children: [
    /* @__PURE__ */ s(Dx, { icon: t.icon, iconColor: t.iconColor, image: t.image, imageAlt: t.imageAlt }),
    /* @__PURE__ */ s("span", { className: We.text, children: o }),
    p
  ] });
  if (a) {
    let I = function(j) {
      const T = Array.from(j.currentTarget.children).map((Y) => Y.querySelector('[role="menuitem"]')).filter(
        (Y) => Y != null && Y.getAttribute("aria-disabled") !== "true" && !Y.hasAttribute("disabled")
      ), F = document.activeElement, G = F ? T.indexOf(F) : -1;
      j.key === "ArrowDown" ? (j.preventDefault(), j.stopPropagation(), (G === -1 ? T[0] : T[(G + 1) % T.length])?.focus()) : j.key === "ArrowUp" ? (j.preventDefault(), j.stopPropagation(), (G === -1 ? T[T.length - 1] : T[(G - 1 + T.length) % T.length])?.focus()) : j.key === "ArrowRight" ? F?.getAttribute("aria-haspopup") === "menu" && (j.preventDefault(), j.stopPropagation(), F.getAttribute("aria-expanded") !== "true" && F.click(), document.getElementById(F.getAttribute("aria-controls") ?? "")?.querySelector('[role="menuitem"]')?.focus()) : (j.key === "ArrowLeft" || j.key === "Escape") && (j.preventDefault(), j.stopPropagation(), f(!1));
    };
    return /* @__PURE__ */ D(
      "div",
      {
        className: We.itemWrapper,
        onMouseEnter: n.clickToOpen ? void 0 : b,
        onMouseLeave: n.clickToOpen ? void 0 : O,
        "data-dx-menu-item": "",
        children: [
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              role: "menuitem",
              "data-top": w ? "true" : void 0,
              "data-index": e,
              "data-dx-menu-item": "",
              "aria-disabled": d || void 0,
              "aria-haspopup": "menu",
              "aria-expanded": h,
              "aria-controls": E,
              tabIndex: d ? -1 : 0,
              disabled: d,
              className: [We.item, d ? We.disabled : null, We.hasChildren].filter(Boolean).join(" "),
              onClick: C,
              children: S
            }
          ),
          h ? /* @__PURE__ */ s(
            "div",
            {
              id: E,
              role: "menu",
              "aria-label": o,
              className: [We.submenu, n.flyout && !w ? We.flyout : null].filter(Boolean).join(" "),
              "data-dx-menu-submenu": "",
              onKeyDown: I,
              children: /* @__PURE__ */ s(es.Provider, { value: N, children: l.map((j, T) => /* @__PURE__ */ s(
                bs,
                {
                  itemKey: `${e}-${T}`,
                  props: j.props
                },
                `${e}-${T}`
              )) })
            }
          ) : null
        ]
      }
    );
  }
  const L = {
    role: "menuitem",
    "aria-disabled": d || void 0,
    "aria-current": $ ? "page" : void 0,
    tabIndex: d ? -1 : 0,
    "data-dx-menu-item": "",
    className: [We.submenuItem, d ? We.disabled : null].filter(Boolean).join(" "),
    onClick: m
  };
  return c && !d ? /* @__PURE__ */ s("div", { className: We.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ s("a", { href: c, target: t.target, ...L, children: S }) }) : /* @__PURE__ */ s("div", { className: We.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ s("button", { type: "button", disabled: d, ...L, children: S }) });
}
function _k(e) {
  if (!kn(es)) throw new Error("MenuItem must be used inside <Menu>");
  return /* @__PURE__ */ s(bs, { itemKey: e.text, props: e });
}
function fk({
  children: e,
  clickToOpen: t = !0,
  flyout: n = !1,
  responsive: o = !0,
  isContextMenu: i = !1,
  onClick: c,
  onClose: _,
  ariaLabel: r = "Menu",
  toggleAriaLabel: l = "Toggle menu",
  className: a,
  ...d
}) {
  const u = qe(), k = oe(null), v = oe(null), [w, x] = X(null), [g, h] = X(0), [f, y] = X(!1), $ = oe(null), m = B(
    (M) => c?.(M),
    [c]
  ), C = B(() => {
    x(null), h((M) => M + 1);
  }, []);
  ye(() => {
    if (w == null) return;
    const M = (A) => {
      k.current && !k.current.contains(A.target) && C();
    };
    return document.addEventListener("mousedown", M), () => document.removeEventListener("mousedown", M);
  }, [w, C]), ye(() => {
    $.current != null && w === $.current && (document.getElementById(`${u}-submenu-${w}`)?.querySelector('[role="menuitem"]:not([aria-disabled="true"])')?.focus(), $.current = null);
  }, [w, u]);
  const b = be(
    () => ({ baseId: u, flyout: n, clickToOpen: t, level: 0, closeSignal: g, emit: m, closeAll: C, openKey: w, setOpenKey: x }),
    [u, n, t, g, m, C, w]
  ), O = be(() => Bn.toArray(e).filter(pt), [e]), E = (M) => {
    const A = v.current;
    if (!A) return;
    const N = Array.from(A.children).map((L) => L.querySelector('[role="menuitem"]')).filter(
      (L) => L != null && !L.hasAttribute("disabled") && L.getAttribute("aria-disabled") !== "true"
    );
    if (w != null) {
      const L = document.getElementById(`${u}-submenu-${w}`);
      if (L) {
        const I = Array.from(L.querySelectorAll('[role="menuitem"]')).filter(
          (F) => F.getAttribute("aria-disabled") !== "true" && !F.hasAttribute("disabled")
        ), j = document.activeElement, T = j ? I.indexOf(j) : -1;
        if (M.key === "ArrowDown") {
          M.preventDefault(), (T === -1 ? I[0] : I[(T + 1) % I.length])?.focus();
          return;
        }
        if (M.key === "ArrowUp") {
          M.preventDefault(), (T === -1 ? I[I.length - 1] : I[(T - 1 + I.length) % I.length])?.focus();
          return;
        }
        if (M.key === "Escape") {
          M.preventDefault(), C(), _?.(), A.querySelector(`[data-index="${w}"]`)?.focus();
          return;
        }
        if (M.key === "Enter" || M.key === " ") return;
      }
      if (M.key === "Escape") {
        M.preventDefault(), C(), _?.();
        return;
      }
    }
    const p = document.activeElement, S = p ? N.indexOf(p) : -1;
    if (M.key === "ArrowRight") {
      if (M.preventDefault(), N.length === 0) return;
      N[S === -1 ? 0 : (S + 1) % N.length]?.focus();
      return;
    }
    if (M.key === "ArrowLeft") {
      if (M.preventDefault(), N.length === 0) return;
      N[S === -1 ? N.length - 1 : (S - 1 + N.length) % N.length]?.focus();
      return;
    }
    if (M.key === "ArrowDown") {
      if (S >= 0) {
        const L = p?.getAttribute("data-index");
        if (L == null) return;
        A.querySelector(`[data-index="${L}"]`)?.getAttribute("aria-haspopup") === "menu" && (M.preventDefault(), $.current = L, x(L));
      }
      return;
    }
    if (M.key === "Home") {
      M.preventDefault(), N[0]?.focus();
      return;
    }
    if (M.key === "End") {
      M.preventDefault(), N[N.length - 1]?.focus();
      return;
    }
    if (M.key.length === 1 && !M.ctrlKey && !M.metaKey) {
      const L = N.map((j) => j.textContent ?? ""), I = S === -1 ? 0 : (S + 1) % N.length;
      for (let j = 0; j < N.length; j++) {
        const T = (I + j) % N.length;
        if (L[T]?.toLowerCase().startsWith(M.key.toLowerCase())) {
          M.preventDefault(), N[T]?.focus();
          break;
        }
      }
    }
  };
  return /* @__PURE__ */ D(
    "nav",
    {
      ref: k,
      "aria-label": r,
      className: [
        We.root,
        i ? We.vertical : We.horizontal,
        o ? We.responsive : null,
        o && f ? We.mobileOpen : null,
        n ? We.flyoutRoot : null,
        a
      ].filter(Boolean).join(" "),
      ...d,
      children: [
        o ? /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            "aria-label": l,
            "aria-expanded": f,
            className: We.hamburger,
            onClick: () => y((M) => !M),
            children: /* @__PURE__ */ s(Ne, { name: "menu", size: 20 })
          }
        ) : null,
        /* @__PURE__ */ s(
          "div",
          {
            ref: v,
            role: i ? "menu" : "menubar",
            "aria-label": r,
            className: We.menubar,
            onKeyDown: E,
            children: /* @__PURE__ */ s(es.Provider, { value: b, children: O.map((M, A) => /* @__PURE__ */ s(
              bs,
              {
                itemKey: String(A),
                props: M.props
              },
              `top-${A}`
            )) })
          }
        )
      ]
    }
  );
}
const Mx = "_root_14qk4_1", Cx = "_list_14qk4_9", zx = "_item_14qk4_14", Ex = "_trigger_14qk4_18", Ix = "_disabled_14qk4_45", Ax = "_expanded_14qk4_52", jx = "_selected_14qk4_56", Tx = "_icon_14qk4_61", Lx = "_text_14qk4_72", Px = "_caret_14qk4_79", Rx = "_open_14qk4_86", Bx = "_submenu_14qk4_90", qx = "_iconOnly_14qk4_172", Fx = "_stacked_14qk4_199", lt = {
  root: Mx,
  list: Cx,
  item: zx,
  trigger: Ex,
  disabled: Ix,
  expanded: Ax,
  selected: jx,
  icon: Tx,
  text: Lx,
  caret: Px,
  open: Rx,
  submenu: Bx,
  iconOnly: qx,
  stacked: Fx
}, ts = ns(null);
function Hx() {
  return typeof window > "u" ? "" : window.location.hash.replace(/^#\/?/, "");
}
function Kx(e, t) {
  const n = Hx(), o = e.replace(/^#?\/?/, "");
  return t === "prefix" ? o === "" ? !1 : o === "/" ? n === "" || n === "/" : n === o || n.startsWith(`${o}/`) : n === o;
}
function Ux({ icon: e, iconColor: t, image: n }) {
  return n ? /* @__PURE__ */ s("span", { className: lt.icon, "aria-hidden": "true", children: /* @__PURE__ */ s("img", { src: n, alt: "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ s("span", { className: lt.icon, "aria-hidden": "true", style: t ? { color: t } : void 0, children: /* @__PURE__ */ s(Ne, { name: e, size: 16 }) }) : null;
}
function ys({ itemKey: e, ancestors: t, props: n }) {
  const o = kn(ts);
  if (!o) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  const { text: i, value: c, path: _, disabled: r } = n, l = be(() => Bn.toArray(n.children).filter(pt), [n.children]), a = l.length > 0, d = !!r, u = n.match ?? o.match, k = n.expanded !== void 0, [v, w] = X(n.defaultExpanded ?? !1), x = k ? n.expanded ?? !1 : v, g = B(
    (T) => {
      k || w(T), n.onExpandedChange?.(T);
    },
    [k, n]
  );
  ye(() => {
    o.collapseSignal > 0 && !o.collapseSkipRef.current.has(e) && g(!1);
  }, [o.collapseSignal]);
  const h = n.onSelectedChange !== void 0 || n.selected !== void 0, [f, y] = X(n.defaultSelected ?? !1), $ = !h && _ ? Kx(_, u) : !1, m = n.selected ?? (h ? f : $ || f), [, C] = X(0);
  ye(() => {
    if (!_) return;
    const T = () => C((F) => F + 1);
    return window.addEventListener("hashchange", T), () => window.removeEventListener("hashchange", T);
  }, [_]);
  const b = be(
    () => ({
      ...o,
      level: o.level + 1,
      openAncestors: () => {
        g(!0), o.openAncestors();
      }
    }),
    [o, g]
  );
  ye(() => {
    $ && t.length > 0 && b.openAncestors();
  }, []);
  const O = B(
    (T) => {
      if (d) {
        T.preventDefault();
        return;
      }
      const F = { text: i, value: c, path: _ };
      [o.emit(F), n.onClick?.(F)].includes(!1) && T.preventDefault(), h || y(!0), n.onSelectedChange?.(!0);
    },
    [d, i, c, _, o, n, h]
  ), E = B(() => {
    d || (x || o.notifyOpened(e, t), g(!x));
  }, [d, x, o, e, t, g]), M = B(
    (T) => {
      T.key === "Enter" || T.key === " " ? (T.preventDefault(), a ? E() : T.target.click()) : T.key === "Escape" && x ? (T.preventDefault(), g(!1)) : T.key === "ArrowRight" && a && !x ? (T.preventDefault(), o.notifyOpened(e, t), g(!0)) : T.key === "ArrowLeft" && x && (T.preventDefault(), g(!1));
    },
    [a, E, x, g, o, e, t]
  ), A = a && o.showArrow ? /* @__PURE__ */ s("span", { className: [lt.caret, x ? lt.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: /* @__PURE__ */ s(Ne, { name: "chevron-down", size: 10 }) }) : null, N = n.template ?? /* @__PURE__ */ D(Oe, { children: [
    /* @__PURE__ */ s(Ux, { icon: n.icon, iconColor: n.iconColor, image: n.image, imageAlt: n.imageAlt }),
    o.displayStyle === "icon" ? /* @__PURE__ */ s("span", { className: lt.text, "aria-label": i, children: n.icon || n.image ? null : i.slice(0, 1) }) : /* @__PURE__ */ s("span", { className: lt.text, children: i }),
    A
  ] }), p = `${o.baseId}-panel-${e}`, S = `${o.baseId}-trigger-${e}`, L = [lt.trigger, d ? lt.disabled : null, x ? lt.expanded : null, m ? lt.selected : null].filter(Boolean).join(" "), I = a ? /* @__PURE__ */ s(
    "button",
    {
      type: "button",
      id: S,
      "aria-expanded": x,
      "aria-controls": p,
      "aria-disabled": d || void 0,
      disabled: d,
      tabIndex: d ? -1 : 0,
      className: L,
      onClick: E,
      onKeyDown: M,
      children: N
    }
  ) : _ && !d ? /* @__PURE__ */ s(
    "a",
    {
      id: S,
      href: _,
      target: n.target,
      "aria-disabled": void 0,
      "aria-current": m ? "page" : void 0,
      tabIndex: 0,
      className: L,
      onClick: O,
      onKeyDown: M,
      children: N
    }
  ) : /* @__PURE__ */ s(
    "button",
    {
      type: "button",
      id: S,
      "aria-current": m ? "page" : void 0,
      "aria-disabled": d || void 0,
      disabled: d,
      tabIndex: d ? -1 : 0,
      className: L,
      onClick: O,
      onKeyDown: M,
      children: N
    }
  ), j = a ? o.renderMode === "server" && !x ? null : /* @__PURE__ */ s(
    "div",
    {
      id: p,
      role: "menu",
      "aria-labelledby": S,
      className: lt.submenu,
      hidden: o.renderMode === "client" && !x ? !0 : void 0,
      children: /* @__PURE__ */ s(ts.Provider, { value: b, children: l.map((T, F) => /* @__PURE__ */ s(
        ys,
        {
          itemKey: `${e}-${F}`,
          ancestors: [...t, e],
          props: T.props
        },
        `${e}-${F}`
      )) })
    }
  ) : null;
  return /* @__PURE__ */ D(
    "div",
    {
      className: lt.item,
      style: { "--dx-panelmenu-level": o.level },
      "data-dx-panelmenu-item": "",
      "data-level": o.level,
      children: [
        I,
        j
      ]
    }
  );
}
function hk(e) {
  if (!kn(ts)) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  return /* @__PURE__ */ s(ys, { itemKey: e.text, ancestors: [], props: e });
}
function pk({
  children: e,
  multiple: t = !0,
  displayStyle: n = "iconAndText",
  showArrow: o = !0,
  match: i = "prefix",
  renderMode: c = "client",
  onClick: _,
  ariaLabel: r = "Panel menu",
  className: l,
  ...a
}) {
  const d = qe(), [u, k] = X(0), v = oe(/* @__PURE__ */ new Set()), w = B(($) => _?.($), [_]), x = B(
    ($, m) => {
      t || (v.current = /* @__PURE__ */ new Set([$, ...m]), k((C) => C + 1));
    },
    [t]
  ), g = ($) => Array.from($.querySelectorAll('button, a[href], [role="menuitem"]')).filter(
    (m) => !m.hasAttribute("disabled") && m.getAttribute("aria-disabled") !== "true" && m.closest("[hidden]") == null
  ), h = ($) => {
    if (!($.key === "Enter" || $.key === " ")) {
      if ($.key === "ArrowDown" || $.key === "ArrowUp") {
        const m = $.target, C = g($.currentTarget), b = C.indexOf(m);
        if (b === -1) return;
        $.preventDefault();
        const O = $.key === "ArrowDown" ? 1 : -1;
        C[(b + O + C.length) % C.length]?.focus();
      } else if ($.key === "Home" || $.key === "End") {
        const m = g($.currentTarget);
        $.preventDefault(), ($.key === "Home" ? m[0] : m[m.length - 1])?.focus();
      }
    }
  }, f = be(
    () => ({
      baseId: d,
      multiple: t,
      displayStyle: n,
      showArrow: o,
      renderMode: c,
      match: i,
      level: 0,
      collapseSignal: u,
      collapseSkipRef: v,
      emit: w,
      notifyOpened: x,
      openAncestors: () => {
      }
    }),
    [d, t, n, o, c, i, u, w, x]
  ), y = be(() => Bn.toArray(e).filter(pt), [e]);
  return /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": r,
      className: [
        lt.root,
        n === "icon" ? lt.iconOnly : null,
        n === "stacked" ? lt.stacked : null,
        l
      ].filter(Boolean).join(" "),
      onKeyDown: h,
      ...a,
      children: /* @__PURE__ */ s("div", { className: lt.list, role: "presentation", children: /* @__PURE__ */ s(ts.Provider, { value: f, children: y.map(($, m) => /* @__PURE__ */ s(
        ys,
        {
          itemKey: String(m),
          ancestors: [],
          props: $.props
        },
        `top-${m}`
      )) }) })
    }
  );
}
const Wx = "_root_1bbxp_1", Xx = "_trigger_1bbxp_7", Vx = "_defaultTrigger_1bbxp_40", Gx = "_avatar_1bbxp_46", Yx = "_menu_1bbxp_58", Zx = "_item_1bbxp_74", Jx = "_disabled_1bbxp_88", Qx = "_active_1bbxp_97", eb = "_icon_1bbxp_107", tb = "_text_1bbxp_114", Tt = {
  root: Wx,
  trigger: Xx,
  defaultTrigger: Vx,
  avatar: Gx,
  menu: Yx,
  item: Zx,
  disabled: Jx,
  active: Qx,
  icon: eb,
  text: tb
};
function mk({
  items: e,
  trigger: t,
  onClick: n,
  ariaLabel: o = "Profile menu",
  className: i
}) {
  const c = qe(), _ = `${c}-menu`, r = oe(null), l = oe(null), [a, d] = X(!1), [u, k] = X(-1), v = t, w = e.map((m, C) => m.disabled ? -1 : C).filter((m) => m >= 0), x = B(
    (m) => {
      if (m.disabled) return;
      const C = {
        text: m.text,
        path: m.path
      };
      n?.(C), d(!1), l.current?.focus();
    },
    [n]
  ), g = B(() => {
    k(w[0] ?? -1), d(!0);
  }, [w]), h = B(() => {
    d(!1), k(-1), l.current?.focus();
  }, []);
  ye(() => {
    if (!a) return;
    const m = (C) => {
      r.current && !r.current.contains(C.target) && (d(!1), k(-1));
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [a]), ye(() => {
    if (!a) return;
    const m = (C) => {
      C.key === "Escape" && (C.preventDefault(), h());
    };
    return document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m);
  }, [a, h]);
  const f = (m) => {
    if (w.length === 0) return;
    const C = w.indexOf(u), b = C === -1 ? 0 : (C + m + w.length) % w.length, O = w[b];
    O != null && k(O);
  }, y = (m) => {
    if (!a) {
      (m.key === "ArrowDown" || m.key === "Enter" || m.key === " ") && (m.preventDefault(), g());
      return;
    }
    switch (m.key) {
      case "Escape":
        m.preventDefault(), h();
        break;
      case "ArrowDown":
        m.preventDefault(), f(1);
        break;
      case "ArrowUp":
        m.preventDefault(), f(-1);
        break;
      case "Home":
        m.preventDefault(), w[0] != null && k(w[0]);
        break;
      case "End":
        m.preventDefault(), w[w.length - 1] != null && k(w[w.length - 1]);
        break;
      case "Enter":
      case " ":
        if (m.preventDefault(), u >= 0) {
          const C = e[u];
          C && !C.disabled && x(C);
        }
        break;
      case "Tab":
        d(!1), k(-1);
        break;
    }
  }, $ = (m) => {
    switch (m.key) {
      case "ArrowDown":
        m.preventDefault(), f(1);
        break;
      case "ArrowUp":
        m.preventDefault(), f(-1);
        break;
      case "Home":
        m.preventDefault(), w[0] != null && k(w[0]);
        break;
      case "End":
        m.preventDefault(), w[w.length - 1] != null && k(w[w.length - 1]);
        break;
      case "Enter":
      case " ":
        if (m.preventDefault(), u >= 0) {
          const C = e[u];
          C && !C.disabled && x(C);
        }
        break;
      case "Escape":
        m.preventDefault(), h();
        break;
      case "Tab":
        d(!1), k(-1);
        break;
    }
  };
  return /* @__PURE__ */ s(
    "div",
    {
      ref: r,
      className: [Tt.root, i].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ D("nav", { "aria-label": o, children: [
        /* @__PURE__ */ s(
          "button",
          {
            ref: l,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": a,
            "aria-controls": _,
            "aria-label": o,
            className: Tt.trigger,
            onClick: () => a ? h() : g(),
            onKeyDown: y,
            children: v ?? /* @__PURE__ */ D("span", { className: Tt.defaultTrigger, children: [
              /* @__PURE__ */ s("span", { className: Tt.avatar, "aria-hidden": "true", children: "●" }),
              /* @__PURE__ */ s("span", { children: "Profile" })
            ] })
          }
        ),
        a ? /* @__PURE__ */ s(
          "div",
          {
            id: _,
            role: "menu",
            "aria-label": o,
            "aria-activedescendant": u >= 0 ? `${c}-item-${u}` : void 0,
            className: Tt.menu,
            onKeyDown: $,
            tabIndex: -1,
            children: e.map((m, C) => {
              const b = !!m.disabled, O = C === u;
              return /* @__PURE__ */ D(
                "div",
                {
                  id: `${c}-item-${C}`,
                  role: "menuitem",
                  "aria-disabled": b || void 0,
                  tabIndex: b ? -1 : 0,
                  className: [
                    Tt.item,
                    O ? Tt.active : null,
                    b ? Tt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    b || x(m);
                  },
                  onMouseEnter: () => {
                    b || k(C);
                  },
                  children: [
                    m.icon ? /* @__PURE__ */ s("span", { className: Tt.icon, "aria-hidden": "true", children: m.icon }) : null,
                    /* @__PURE__ */ s("span", { className: Tt.text, children: m.text })
                  ]
                },
                `${m.text}-${C}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const nb = "_root_1dgrt_1", sb = "_bottomRight_1dgrt_11", rb = "_bottomLeft_1dgrt_16", ob = "_topRight_1dgrt_21", lb = "_topLeft_1dgrt_26", ab = "_menu_1dgrt_31", ib = "_itemWrapper_1dgrt_48", cb = "_tooltip_1dgrt_54", db = "_main_1dgrt_76", ub = "_mainIcon_1dgrt_104", _b = "_mainOpen_1dgrt_109", fb = "_item_1dgrt_48", hb = "_disabled_1dgrt_141", pb = "_itemIcon_1dgrt_148", ut = {
  root: nb,
  bottomRight: sb,
  bottomLeft: rb,
  topRight: ob,
  topLeft: lb,
  menu: ab,
  itemWrapper: ib,
  tooltip: cb,
  main: db,
  mainIcon: ub,
  mainOpen: _b,
  item: fb,
  disabled: hb,
  itemIcon: pb
};
function gk({
  items: e,
  position: t,
  icon: n = "+",
  onClick: o,
  ariaLabel: i = "Open menu",
  className: c
}) {
  const _ = t ?? "bottom-right", l = `${qe()}-menu`, a = oe(null), d = oe(null), [u, k] = X(!1), v = B(
    (h) => {
      if (h.disabled) return;
      const f = { text: h.text, value: h.value };
      o?.(f), k(!1), d.current?.focus();
    },
    [o]
  );
  ye(() => {
    if (!u) return;
    const h = (f) => {
      a.current && !a.current.contains(f.target) && k(!1);
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, [u]), ye(() => {
    if (!u) return;
    const h = (f) => {
      f.key === "Escape" && (k(!1), d.current?.focus());
    };
    return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h);
  }, [u]);
  const w = _ === "bottom-right" ? ut.bottomRight : _ === "bottom-left" ? ut.bottomLeft : _ === "top-right" ? ut.topRight : ut.topLeft, x = (h) => {
    !u && (h.key === "Enter" || h.key === " " || h.key === "ArrowDown" || h.key === "ArrowUp") ? (h.preventDefault(), k(!0)) : u && h.key === "Escape" && (h.preventDefault(), k(!1));
  }, g = (h) => {
    h.key === "Escape" && (h.preventDefault(), k(!1), d.current?.focus());
  };
  return /* @__PURE__ */ D(
    "div",
    {
      ref: a,
      className: [ut.root, w, c].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        u ? /* @__PURE__ */ s(
          "div",
          {
            id: l,
            role: "menu",
            "aria-label": i,
            className: ut.menu,
            onKeyDown: g,
            children: e.map((h, f) => {
              const y = !!h.disabled;
              return /* @__PURE__ */ D("div", { className: ut.itemWrapper, children: [
                /* @__PURE__ */ s("span", { className: ut.tooltip, "aria-hidden": "true", children: h.text }),
                /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": h.text,
                    "aria-disabled": y || void 0,
                    title: h.text,
                    disabled: y,
                    tabIndex: y ? -1 : 0,
                    className: [ut.item, y ? ut.disabled : null].filter(Boolean).join(" "),
                    onClick: () => v(h),
                    children: /* @__PURE__ */ s("span", { className: ut.itemIcon, "aria-hidden": "true", children: h.icon ?? "•" })
                  }
                )
              ] }, `${h.text}-${f}`);
            })
          }
        ) : null,
        /* @__PURE__ */ s(
          "button",
          {
            ref: d,
            type: "button",
            className: ut.main,
            "aria-haspopup": "menu",
            "aria-expanded": u,
            "aria-controls": l,
            "aria-label": i,
            onClick: () => k((h) => !h),
            onKeyDown: x,
            children: /* @__PURE__ */ s(
              "span",
              {
                "aria-hidden": "true",
                className: [ut.mainIcon, u ? ut.mainOpen : null].filter(Boolean).join(" "),
                children: n
              }
            )
          }
        )
      ]
    }
  );
}
const mb = "_root_1nu0o_1", gb = "_list_1nu0o_5", xb = "_item_1nu0o_15", bb = "_link_1nu0o_22", yb = "_linkButton_1nu0o_23", vb = "_current_1nu0o_24", kb = "_disabled_1nu0o_68", wb = "_icon_1nu0o_74", $b = "_text_1nu0o_81", Nb = "_separator_1nu0o_85", Ue = {
  root: mb,
  list: gb,
  item: xb,
  link: bb,
  linkButton: yb,
  current: vb,
  disabled: kb,
  icon: wb,
  text: $b,
  separator: Nb
};
function xk({
  items: e,
  onClick: t,
  ariaLabel: n = "Breadcrumb",
  className: o
}) {
  const i = t, c = (_) => {
    _.disabled || i?.({ text: _.text, path: _.path });
  };
  return /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": n,
      className: [Ue.root, o].filter(Boolean).join(" "),
      children: /* @__PURE__ */ s("ol", { className: Ue.list, children: e.map((_, r) => {
        const l = r === e.length - 1, a = !!_.disabled;
        return /* @__PURE__ */ D("li", { className: Ue.item, children: [
          l ? a ? /* @__PURE__ */ D(
            "span",
            {
              className: [Ue.current, Ue.disabled].filter(Boolean).join(" "),
              "aria-current": "page",
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                _.icon ? /* @__PURE__ */ s("span", { className: Ue.icon, "aria-hidden": "true", children: _.icon }) : null,
                _.text
              ]
            }
          ) : _.path ? /* @__PURE__ */ D(
            "a",
            {
              href: _.path,
              className: Ue.link,
              "aria-current": "page",
              onClick: (d) => {
                d.preventDefault(), c(_);
              },
              children: [
                _.icon ? /* @__PURE__ */ s("span", { className: Ue.icon, "aria-hidden": "true", children: _.icon }) : null,
                /* @__PURE__ */ s("span", { className: Ue.text, children: _.text })
              ]
            }
          ) : /* @__PURE__ */ D(
            "span",
            {
              className: Ue.current,
              "aria-current": "page",
              tabIndex: 0,
              children: [
                _.icon ? /* @__PURE__ */ s("span", { className: Ue.icon, "aria-hidden": "true", children: _.icon }) : null,
                _.text
              ]
            }
          ) : a ? /* @__PURE__ */ D(
            "span",
            {
              className: [Ue.link, Ue.disabled].filter(Boolean).join(" "),
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                _.icon ? /* @__PURE__ */ s("span", { className: Ue.icon, "aria-hidden": "true", children: _.icon }) : null,
                /* @__PURE__ */ s("span", { className: Ue.text, children: _.text })
              ]
            }
          ) : _.path ? /* @__PURE__ */ D(
            "a",
            {
              href: _.path,
              className: Ue.link,
              onClick: (d) => {
                d.preventDefault(), c(_);
              },
              children: [
                _.icon ? /* @__PURE__ */ s("span", { className: Ue.icon, "aria-hidden": "true", children: _.icon }) : null,
                /* @__PURE__ */ s("span", { className: Ue.text, children: _.text })
              ]
            }
          ) : /* @__PURE__ */ D(
            "button",
            {
              type: "button",
              className: Ue.linkButton,
              tabIndex: 0,
              onClick: () => c(_),
              children: [
                _.icon ? /* @__PURE__ */ s("span", { className: Ue.icon, "aria-hidden": "true", children: _.icon }) : null,
                /* @__PURE__ */ s("span", { className: Ue.text, children: _.text })
              ]
            }
          ),
          l ? null : /* @__PURE__ */ s("span", { className: Ue.separator, "aria-hidden": "true", children: "/" })
        ] }, `${_.text}-${r}`);
      }) })
    }
  );
}
const Ob = "_link_6vrgp_1", Sb = {
  link: Ob
}, bk = Fe(function({ children: t, icon: n, visible: o = !0, className: i, ...c }, _) {
  if (o === !1) return null;
  const r = /* @__PURE__ */ D(Oe, { children: [
    n != null && /* @__PURE__ */ s(Ne, { name: n, "aria-hidden": "true" }),
    t
  ] }), l = [Sb.link, i].filter(Boolean).join(" ");
  if (c.href != null) {
    const { href: d, ...u } = c;
    return /* @__PURE__ */ s(
      "a",
      {
        ref: _,
        className: l,
        href: d,
        ...u,
        children: r
      }
    );
  }
  return /* @__PURE__ */ s(
    "button",
    {
      ref: _,
      type: "button",
      className: l,
      ...c,
      children: r
    }
  );
}), Db = "_root_1w5vx_1", Mb = "_list_1w5vx_5", Cb = "_item_1w5vx_15", zb = "_connector_1w5vx_21", Eb = "_connectorCompleted_1w5vx_30", Ib = "_step_1w5vx_34", Ab = "_active_1w5vx_69", jb = "_completed_1w5vx_75", Tb = "_circle_1w5vx_79", Lb = "_check_1w5vx_109", Pb = "_icon_1w5vx_114", Rb = "_number_1w5vx_119", Bb = "_text_1w5vx_124", _t = {
  root: Db,
  list: Mb,
  item: Cb,
  connector: zb,
  connectorCompleted: Eb,
  step: Ib,
  active: Ab,
  completed: jb,
  circle: Tb,
  check: Lb,
  icon: Pb,
  number: Rb,
  text: Bb
};
function yk({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: o = 0,
  linear: i,
  Linear: c,
  onChange: _,
  Change: r,
  onSelectedIndexChange: l,
  ariaLabel: a = "Steps",
  className: d
}) {
  const u = i ?? c ?? !1, k = t ?? n, v = k !== void 0, [w, x] = X(() => Math.min(Math.max(0, k ?? o), Math.max(0, e.length - 1))), h = Math.min(
    Math.max(0, v ? k : w),
    Math.max(0, e.length - 1)
  ), f = oe(null), y = B(
    (C) => {
      const b = Math.min(
        Math.max(0, C),
        Math.max(0, e.length - 1)
      );
      v || x(b), (_ ?? r ?? l)?.(b);
    },
    [v, _, r, l, e.length]
  ), $ = B(
    (C, b) => !!(b.disabled || u && C > h + 1),
    [u, h]
  ), m = (C) => {
    const b = Array.from(
      C.currentTarget.querySelectorAll("button[data-step]")
    ).filter((M) => M.getAttribute("aria-disabled") !== "true" && !M.disabled), O = document.activeElement, E = O ? b.indexOf(O) : -1;
    if (C.key === "ArrowRight" || C.key === "ArrowDown") {
      if (C.preventDefault(), b.length === 0) return;
      const M = E === -1 ? 0 : (E + 1) % b.length, A = b[M];
      A && A.focus();
    } else if (C.key === "ArrowLeft" || C.key === "ArrowUp") {
      if (C.preventDefault(), b.length === 0) return;
      const M = E === -1 ? b.length - 1 : (E - 1 + b.length) % b.length, A = b[M];
      A && A.focus();
    } else C.key === "Home" ? (C.preventDefault(), b[0]?.focus()) : C.key === "End" && (C.preventDefault(), b[b.length - 1]?.focus());
  };
  return /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": a,
      className: [_t.root, d].filter(Boolean).join(" "),
      onKeyDown: m,
      children: /* @__PURE__ */ s("ol", { ref: f, role: "list", className: _t.list, children: e.map((C, b) => {
        const O = b === h, E = b < h, M = $(b, C);
        return /* @__PURE__ */ D(
          "li",
          {
            role: "listitem",
            className: _t.item,
            children: [
              b > 0 ? /* @__PURE__ */ s(
                "span",
                {
                  className: [
                    _t.connector,
                    E ? _t.connectorCompleted : null
                  ].filter(Boolean).join(" "),
                  "aria-hidden": "true"
                }
              ) : null,
              /* @__PURE__ */ D(
                "button",
                {
                  type: "button",
                  "data-step": b,
                  "aria-current": O ? "step" : void 0,
                  "aria-disabled": M ? "true" : void 0,
                  disabled: M,
                  tabIndex: M ? -1 : 0,
                  className: [
                    _t.step,
                    O ? _t.active : null,
                    E ? _t.completed : null,
                    M ? _t.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    M || y(b);
                  },
                  children: [
                    /* @__PURE__ */ s("span", { className: _t.circle, "aria-hidden": "true", children: E ? /* @__PURE__ */ s("span", { className: _t.check, "aria-hidden": "true", children: /* @__PURE__ */ s(Ne, { name: "check", size: "sm" }) }) : C.icon ? /* @__PURE__ */ s("span", { className: _t.icon, children: C.icon }) : /* @__PURE__ */ s("span", { className: _t.number, children: b + 1 }) }),
                    /* @__PURE__ */ s("span", { className: _t.text, children: C.text })
                  ]
                }
              )
            ]
          },
          `${C.text}-${b}`
        );
      }) })
    }
  );
}
const qb = "_root_1np74_1", Fb = "_horizontal_1np74_13", Hb = "_vertical_1np74_17", Kb = "_pane_1np74_21", Ub = "_handle_1np74_31", Wb = "_handleHorizontal_1np74_51", Xb = "_handleVertical_1np74_57", Vb = "_handleGrip_1np74_63", Gb = "_handleCollapseHint_1np74_75", Yb = "_collapseBtn_1np74_79", Zb = "_collapseBtnCollapsed_1np74_109", $t = {
  root: qb,
  horizontal: Fb,
  vertical: Hb,
  pane: Kb,
  handle: Ub,
  handleHorizontal: Wb,
  handleVertical: Xb,
  handleGrip: Vb,
  handleCollapseHint: Gb,
  collapseBtn: Yb,
  collapseBtnCollapsed: Zb
};
function jn(e, t) {
  if (!e) return t;
  const n = e.trim();
  if (n.endsWith("%")) {
    const i = parseFloat(n.slice(0, -1));
    return Number.isNaN(i) ? t : i;
  }
  if (n.endsWith("px")) {
    const i = parseFloat(n.slice(0, -2));
    return Number.isNaN(i) ? t : i;
  }
  const o = parseFloat(n);
  return Number.isNaN(o) ? t : o;
}
function Wt(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function vk({
  orientation: e,
  Orientation: t,
  panes: n,
  onResize: o,
  Resize: i,
  onCollapse: c,
  Collapse: _,
  ariaLabel: r = "Splitter",
  className: l
}) {
  const a = e ?? t ?? "horizontal", d = a === "horizontal", u = oe(null), k = B(() => {
    const p = n.length;
    if (p === 0) return [];
    const S = n.map((I) => I.size ? jn(I.size, 100 / p) : 100 / p), L = S.reduce((I, j) => I + j, 0);
    return Math.abs(L - 100) > 0.01 && L > 0 ? S.map((I) => I / L * 100) : S;
  }, [n]), [v, w] = X(() => k()), [x, g] = X(
    () => n.map((p) => !!p.collapsed)
  ), h = oe(v);
  ye(() => {
    g(n.map((p) => !!p.collapsed));
  }, [n]);
  const f = B(
    () => n.map((p) => jn(p.min, 0)),
    [n]
  ), y = B(
    () => n.map((p) => jn(p.max, 100)),
    [n]
  ), $ = B(
    (p, S) => {
      const L = { paneIndex: p, newSize: S, cancel: !1 };
      return (o ?? i)?.(L), !L.cancel;
    },
    [o, i]
  ), m = B(
    (p, S) => {
      const L = { paneIndex: p, collapse: S, cancel: !1 };
      return (c ?? _)?.(L), !L.cancel;
    },
    [c, _]
  ), C = B(
    (p) => {
      const S = !x[p];
      m(p, S) && (S ? (h.current = [...v], g((L) => {
        const I = [...L];
        return I[p] !== void 0 && (I[p] = !0), I;
      }), w((L) => {
        const I = [...L], j = I[p] ?? 0, T = p < I.length - 1 ? p + 1 : p - 1;
        if (T >= 0 && T < I.length) {
          const F = I[T] ?? 0;
          I[T] = F + j, I[p] = 0;
        } else
          I[p] = 0;
        return I;
      })) : (g((L) => {
        const I = [...L];
        return I[p] !== void 0 && (I[p] = !1), I;
      }), w(() => {
        const L = [...h.current];
        return L.length !== n.length ? n.map(() => 100 / n.length) : L;
      })));
    },
    [x, v, n.length, m]
  ), b = oe(
    null
  ), O = B(
    (p, S, L) => {
      const I = u.current;
      if (!I) return null;
      const j = I.getBoundingClientRect();
      let T;
      if (d) {
        if (j.width === 0) return null;
        T = (S - j.left) / j.width * 100;
      } else {
        if (j.height === 0) return null;
        T = (L - j.top) / j.height * 100;
      }
      let F = 0;
      for (let Y = 0; Y < p; Y++) {
        const U = v[Y];
        U !== void 0 && (F += U);
      }
      return T - F;
    },
    [d, v]
  ), E = (p, S) => {
    S.preventDefault();
    const L = S.currentTarget;
    L.focus(), typeof L.setPointerCapture == "function" && L.setPointerCapture(S.pointerId), b.current = { handleIndex: p, pointerId: S.pointerId };
  }, M = (p) => {
    if (!b.current || b.current.pointerId !== p.pointerId)
      return;
    p.preventDefault();
    const S = b.current.handleIndex, L = O(S, p.clientX, p.clientY);
    if (L == null) return;
    const I = f(), j = y(), T = I[S] ?? 0, F = j[S] ?? 100, G = S + 1, Y = I[G] ?? 0, U = j[G] ?? 100, te = v[S] ?? 0, le = v[G] ?? 0, ee = te + le;
    if (ee <= 0) return;
    let q = Wt(L, T, F), ie = ee - q;
    if (ie < Y) {
      if (ie = Y, q = ee - ie, q < T || q > F) return;
    } else if (ie > U && (ie = U, q = ee - ie, q < T || q > F))
      return;
    q = Wt(q, T, F), ie = ee - q, $(S, q) && w((J) => {
      const de = [...J];
      return de[S] = q, de[G] = ie, de;
    });
  }, A = (p) => {
    !b.current || b.current.pointerId !== p.pointerId || (b.current = null);
  }, N = (p, S) => {
    const L = f(), I = y(), j = p, T = p + 1, F = v[j] ?? 0, G = v[T] ?? 0, Y = F + G;
    let U = 0;
    const te = !!n[j]?.collapsible, le = !!n[T]?.collapsible;
    if (d ? S.key === "ArrowLeft" ? U = -5 : S.key === "ArrowRight" && (U = 5) : S.key === "ArrowUp" ? U = -5 : S.key === "ArrowDown" && (U = 5), S.key === "Home") {
      S.preventDefault();
      let ee = L[j] ?? 0, q = Y - ee;
      if (q = Wt(
        q,
        L[T] ?? 0,
        I[T] ?? 100
      ), ee = Y - q, ee = Wt(ee, L[j] ?? 0, I[j] ?? 100), !$(j, ee)) return;
      w((ie) => {
        const J = [...ie];
        return J[j] = ee, J[T] = q, J;
      });
      return;
    }
    if (S.key === "End") {
      S.preventDefault();
      let ee = I[j] ?? 100;
      ee = Math.min(ee, Y - (L[T] ?? 0));
      let q = Y - ee;
      if (q = Wt(
        q,
        L[T] ?? 0,
        I[T] ?? 100
      ), ee = Y - q, ee = Wt(ee, L[j] ?? 0, I[j] ?? 100), !$(j, ee)) return;
      w((ie) => {
        const J = [...ie];
        return J[j] = ee, J[T] = q, J;
      });
      return;
    }
    if ((S.key === "Enter" || S.key === " ") && (te || le)) {
      S.preventDefault(), C(te ? j : T);
      return;
    }
    if (U !== 0) {
      S.preventDefault();
      let ee = F + U, q = Y - ee;
      const ie = L[j] ?? 0, J = I[j] ?? 100, de = L[T] ?? 0, ae = I[T] ?? 100;
      if (ee = Wt(ee, ie, J), q = Y - ee, (q < de || q > ae) && (q = Wt(q, de, ae), ee = Y - q, ee = Wt(ee, ie, J), q = Y - ee), !$(j, ee)) return;
      w((ve) => {
        const $e = [...ve];
        return $e[j] = ee, $e[T] = q, $e;
      });
    }
  };
  return /* @__PURE__ */ s(
    "div",
    {
      ref: u,
      className: [
        $t.root,
        d ? $t.horizontal : $t.vertical,
        l
      ].filter(Boolean).join(" "),
      "aria-label": r,
      children: n.map((p, S) => {
        const L = !!x[S], I = L ? 0 : v[S] ?? 100 / n.length, j = L ? { display: "none" } : d ? {
          flexBasis: `${I}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        } : {
          flexBasis: `${I}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        }, T = jn(p.min, 0), F = jn(p.max, 100), G = S < n.length - 1, Y = !!n[S + 1]?.collapsible;
        return /* @__PURE__ */ D("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ D(
            "div",
            {
              role: "group",
              "aria-label": p.label ?? `Pane ${S + 1}`,
              className: $t.pane,
              style: j,
              "data-collapsed": L ? "true" : void 0,
              children: [
                L ? null : p.children,
                p.collapsible && !L ? /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    className: $t.collapseBtn,
                    "aria-label": `Collapse pane ${S + 1}`,
                    "aria-expanded": !L,
                    onClick: () => C(S),
                    children: d ? "◀" : "▲"
                  }
                ) : null,
                p.collapsible && L ? /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    className: $t.collapseBtn,
                    "aria-label": `Expand pane ${S + 1}`,
                    "aria-expanded": !L,
                    onClick: () => C(S),
                    children: d ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          L && p.collapsible ? (
            // when collapsed we already rendered expand button inside pane, but pane is display none, so render expand button outside?
            // Actually we hide pane with display none, need visible expand button
            // So render alternative expand button adjacent
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: $t.collapseBtnCollapsed,
                "aria-label": `Expand pane ${S + 1}`,
                "aria-expanded": "false",
                onClick: () => C(S),
                children: d ? "▶" : "▼"
              }
            )
          ) : null,
          G ? /* @__PURE__ */ D(
            "div",
            {
              role: "separator",
              "aria-orientation": a,
              "aria-valuemin": T,
              "aria-valuemax": F,
              "aria-valuenow": Math.round(I),
              "aria-label": `Resize handle ${S + 1}`,
              tabIndex: L || x[S + 1] ? -1 : 0,
              className: [
                $t.handle,
                d ? $t.handleHorizontal : $t.handleVertical
              ].filter(Boolean).join(" "),
              onPointerDown: (U) => E(S, U),
              onPointerMove: M,
              onPointerUp: A,
              onKeyDown: (U) => N(S, U),
              children: [
                /* @__PURE__ */ s("span", { className: $t.handleGrip, "aria-hidden": "true" }),
                (p.collapsible || Y) && /* @__PURE__ */ s(
                  "span",
                  {
                    className: $t.handleCollapseHint,
                    "aria-hidden": "true"
                  }
                )
              ]
            }
          ) : null
        ] }, S);
      })
    }
  );
}
const Jb = "_root_wurjl_1", Qb = "_list_wurjl_5", ey = "_vertical_wurjl_14", ty = "_horizontal_wurjl_20", ny = "_item_wurjl_28", sy = "_link_wurjl_32", ry = "_active_wurjl_57", xn = {
  root: Jb,
  list: Qb,
  vertical: ey,
  horizontal: ty,
  item: ny,
  link: sy,
  active: ry
};
function kk({
  items: e,
  selector: t,
  Selector: n,
  orientation: o,
  Orientation: i,
  onClick: c,
  Click: _,
  ariaLabel: r = "Table of contents",
  className: l
}) {
  const a = t ?? n, d = o ?? i ?? "vertical", [u, k] = X(
    () => e[0]?.selector ?? null
  ), v = oe(u);
  v.current = u;
  const w = B(
    (x, g) => {
      if (k(x.selector), (c ?? _)?.({ text: x.text, selector: x.selector }), g) {
        try {
          g.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        } catch {
          g.scrollIntoView();
        }
        const f = g;
        f.getAttribute("tabindex") == null && f.tabIndex === -1 || f.tabIndex < 0 ? (f.getAttribute("tabindex"), f.setAttribute("tabindex", "-1"), f.focus({ preventScroll: !0 })) : f.focus({ preventScroll: !0 });
      }
    },
    [c, _]
  );
  return ye(() => {
    if (e.length === 0) return;
    const g = (() => {
      if (a) {
        const m = document.querySelector(a);
        if (m) return m;
      }
      return window;
    })();
    let h = null;
    const f = /* @__PURE__ */ new Map(), y = () => {
      let m = null, C = null;
      for (const O of e) {
        const E = document.querySelector(O.selector);
        if (!E) continue;
        f.set(O.selector, E);
        const M = E.getBoundingClientRect();
        let A = M.top;
        if (g !== window) {
          const N = g.getBoundingClientRect();
          A = M.top - N.top;
        }
        A <= 80 ? (!C || A > C.el.getBoundingClientRect().top - (g !== window ? g.getBoundingClientRect().top : 0)) && (C = { sel: O.selector, el: E }) : (!m || A < m.top) && (m = { sel: O.selector, top: A });
      }
      const b = C?.sel ?? m?.sel ?? e[0]?.selector ?? null;
      b && b !== v.current && k(b);
    }, $ = () => {
      y();
    };
    if (typeof IntersectionObserver < "u") {
      const m = g === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
        root: g,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      };
      h = new IntersectionObserver((C) => {
        const b = C.filter((O) => O.isIntersecting).sort((O, E) => O.boundingClientRect.top - E.boundingClientRect.top);
        if (b[0]) {
          const O = b[0].target;
          for (const E of e) {
            if (document.querySelector(E.selector) === O) {
              k(E.selector);
              break;
            }
            if (E.selector.startsWith("#") && O.id === E.selector.slice(1)) {
              k(E.selector);
              break;
            }
          }
        } else
          y();
      }, m);
      for (const C of e) {
        const b = document.querySelector(C.selector);
        b && (h.observe(b), f.set(C.selector, b));
      }
    }
    return g === window ? (window.addEventListener("scroll", $, { passive: !0 }), y(), () => {
      window.removeEventListener("scroll", $), h?.disconnect();
    }) : (g.addEventListener("scroll", $, {
      passive: !0
    }), y(), () => {
      g.removeEventListener("scroll", $), h?.disconnect();
    });
  }, [e, a]), /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": r,
      className: [xn.root, xn[d], l].filter(Boolean).join(" "),
      children: /* @__PURE__ */ s("ol", { className: xn.list, children: e.map((x) => {
        const g = x.selector === u;
        return /* @__PURE__ */ s("li", { className: xn.item, children: /* @__PURE__ */ s(
          "a",
          {
            href: x.selector.startsWith("#") || x.selector.startsWith(".") ? x.selector : `#${x.selector}`,
            className: [xn.link, g ? xn.active : null].filter(Boolean).join(" "),
            "aria-current": g ? "location" : void 0,
            onClick: (h) => {
              h.preventDefault();
              const f = document.querySelector(x.selector);
              w(x, f);
            },
            children: x.text
          }
        ) }, `${x.text}-${x.selector}`);
      }) })
    }
  );
}
const oy = "_root_u1med_1", ly = "_viewport_u1med_17", ay = "_slide_u1med_24", iy = "_active_u1med_33", cy = "_arrow_u1med_37", dy = "_prev_u1med_71", uy = "_next_u1med_75", _y = "_pauseBtn_u1med_79", fy = "_indicators_u1med_110", hy = "_indicator_u1med_110", py = "_indicatorActive_u1med_145", Nt = {
  root: oy,
  viewport: ly,
  slide: ay,
  active: iy,
  arrow: cy,
  prev: dy,
  next: uy,
  pauseBtn: _y,
  indicators: fy,
  indicator: hy,
  indicatorActive: py
};
function wk({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: o = 0,
  auto: i,
  Auto: c,
  interval: _,
  Interval: r,
  pauseOnHover: l,
  PauseOnHover: a,
  showArrows: d,
  ShowArrows: u,
  showIndicators: k,
  ShowIndicators: v,
  onChange: w,
  Change: x,
  ariaLabel: g = "Carousel",
  className: h
}) {
  const f = t ?? n, y = f !== void 0, [$, m] = X(() => Math.min(Math.max(0, f ?? o), Math.max(0, e.length - 1))), C = y ? f : $, b = e.length === 0 ? 0 : Math.min(Math.max(0, C), e.length - 1), O = i ?? c ?? !1, E = _ ?? r ?? 3e3, M = l ?? a ?? !0, A = d ?? u ?? !0, N = k ?? v ?? !0, [p, S] = X(!1), [L, I] = X(!1), j = p || L, T = oe(null), F = qe(), G = B(
    (de) => {
      const ae = e.length === 0 ? 0 : (de % e.length + e.length) % e.length;
      y || m(ae), (w ?? x)?.(ae);
    },
    [y, w, x, e.length]
  ), Y = B(() => {
    G(b - 1);
  }, [G, b]), U = B(() => {
    G(b + 1);
  }, [G, b]), te = B(
    (de) => {
      G(de);
    },
    [G]
  );
  ye(() => {
    if (!O || j || e.length <= 1) return;
    const de = setInterval(() => {
      G(b + 1);
    }, E);
    return () => clearInterval(de);
  }, [O, j, E, b, G, e.length]);
  const le = (de) => {
    e.length !== 0 && (de.key === "ArrowLeft" ? (de.preventDefault(), Y()) : de.key === "ArrowRight" ? (de.preventDefault(), U()) : de.key === "Home" ? (de.preventDefault(), te(0)) : de.key === "End" && (de.preventDefault(), te(e.length - 1)));
  }, ee = () => {
    M && O && I(!0);
  }, q = () => {
    M && O && I(!1);
  }, ie = () => {
    M && O && I(!0);
  }, J = () => {
    M && O && I(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ D(
    "div",
    {
      ref: T,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": g,
      tabIndex: 0,
      className: [Nt.root, h].filter(Boolean).join(" "),
      onKeyDown: le,
      onMouseEnter: ee,
      onMouseLeave: q,
      onFocusCapture: ie,
      onBlurCapture: J,
      children: [
        /* @__PURE__ */ s("div", { id: F, className: Nt.viewport, children: e.map((de, ae) => {
          const ve = ae === b;
          return /* @__PURE__ */ s(
            "div",
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `Slide ${ae + 1} of ${e.length}`,
              "aria-hidden": ve ? void 0 : !0,
              hidden: !ve,
              className: [Nt.slide, ve ? Nt.active : null].filter(Boolean).join(" "),
              children: de
            },
            ae
          );
        }) }),
        A && e.length > 1 ? /* @__PURE__ */ D(Oe, { children: [
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: [Nt.arrow, Nt.prev].filter(Boolean).join(" "),
              "aria-label": "Previous slide",
              "aria-controls": F,
              onClick: Y,
              children: "‹"
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: [Nt.arrow, Nt.next].filter(Boolean).join(" "),
              "aria-label": "Next slide",
              "aria-controls": F,
              onClick: U,
              children: "›"
            }
          )
        ] }) : null,
        O ? /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: Nt.pauseBtn,
            "aria-label": p ? "Resume" : "Pause",
            "aria-pressed": p,
            onClick: () => S((de) => !de),
            children: p ? "▶" : "⏸"
          }
        ) : null,
        N && e.length > 1 ? /* @__PURE__ */ s(
          "div",
          {
            className: Nt.indicators,
            role: "group",
            "aria-label": "Slide indicators",
            children: e.map((de, ae) => {
              const ve = ae === b;
              return /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: [
                    Nt.indicator,
                    ve ? Nt.indicatorActive : null
                  ].filter(Boolean).join(" "),
                  "aria-label": `Go to slide ${ae + 1}`,
                  "aria-current": ve ? "true" : void 0,
                  "aria-controls": F,
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
const my = "_root_xvqqt_1", gy = "_group_xvqqt_20", xy = "_itemWrapper_xvqqt_30", by = "_treeitem_xvqqt_34", yy = "_disabled_xvqqt_50", vy = "_selected_xvqqt_60", ky = "_caret_xvqqt_66", wy = "_caretIcon_xvqqt_113", $y = "_caretOpen_xvqqt_120", Ny = "_caretPlaceholder_xvqqt_124", Oy = "_label_xvqqt_130", Sy = "_loading_xvqqt_137", Dy = "_loadingRow_xvqqt_143", My = "_empty_xvqqt_149", Cy = "_checkbox_xvqqt_155", st = {
  root: my,
  group: gy,
  itemWrapper: xy,
  treeitem: by,
  disabled: yy,
  selected: vy,
  caret: ky,
  caretIcon: wy,
  caretOpen: $y,
  caretPlaceholder: Ny,
  label: Oy,
  loading: Sy,
  loadingRow: Dy,
  empty: My,
  checkbox: Cy
};
function zy({
  indeterminate: e,
  ...t
}) {
  const n = oe(null);
  return ye(() => {
    n.current && (n.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ s("input", { ref: n, type: "checkbox", ...t });
}
function $k({
  data: e,
  Data: t,
  children: n,
  Children: o,
  textProperty: i,
  TextProperty: c,
  keyProperty: _,
  KeyProperty: r,
  selectionMode: l,
  SelectionMode: a,
  selectedItem: d,
  SelectedItem: u,
  selectedItems: k,
  SelectedItems: v,
  defaultSelectedItem: w,
  defaultSelectedItems: x,
  onChange: g,
  Change: h,
  onExpand: f,
  Expand: y,
  onCollapse: $,
  Collapse: m,
  loadChildData: C,
  LoadChildData: b,
  template: O,
  Template: E,
  itemTemplate: M,
  ItemTemplate: A,
  ariaLabel: N,
  AriaLabel: p,
  allowCheckBoxes: S = !1,
  checkedKeys: L,
  defaultCheckedKeys: I,
  onCheckedChange: j,
  allowCheckChildren: T = !0,
  className: F
}) {
  const G = e ?? t ?? [], Y = n ?? o, U = i ?? c ?? "text", te = _ ?? r ?? "id", le = l ?? a ?? "single", ee = N ?? p ?? "Tree", q = C ?? b, ie = O ?? E ?? M ?? A, J = B(
    (H) => {
      const Z = H[te];
      return Z != null ? String(Z) : String(H.id ?? "");
    },
    [te]
  ), de = B(
    (H) => {
      const Z = H[U];
      if (Z != null) return String(Z);
      const re = H.text;
      return re != null ? String(re) : "";
    },
    [U]
  ), ae = B(
    (H) => {
      if (Y) {
        const re = Y(H);
        if (re !== void 0) return re;
      }
      const Z = H.children;
      if (Array.isArray(Z)) return Z;
    },
    [Y]
  ), ve = B(
    (H) => {
      const Z = /* @__PURE__ */ new Set(), re = (he) => {
        for (const fe of he) {
          const ke = J(fe);
          fe.expanded && Z.add(ke);
          const je = ae(fe);
          je && je.length > 0 && re(je);
        }
      };
      return re(H), Z;
    },
    [J, ae]
  ), [$e, Re] = X(
    () => ve(G)
  ), [we, Xe] = X(
    () => /* @__PURE__ */ new Map()
  ), [xe, Ze] = X(() => /* @__PURE__ */ new Set()), Ve = d ?? u, Le = k ?? v, et = le === "multiple" ? Le !== void 0 : Ve !== void 0, V = B(() => {
    if (le === "multiple") {
      if (x && x.length > 0)
        return new Set(x.map((re) => J(re)));
      const H = /* @__PURE__ */ new Set(), Z = (re) => {
        for (const he of re) {
          he.selected && H.add(J(he));
          const fe = ae(he);
          fe && Z(fe);
        }
      };
      return Z(G), H;
    } else {
      if (w) return /* @__PURE__ */ new Set([J(w)]);
      let H = null;
      const Z = (re) => {
        for (const he of re) {
          if (he.selected)
            return H = J(he), !0;
          const fe = ae(he);
          if (fe && Z(fe)) return !0;
        }
        return !1;
      };
      return Z(G), H ? /* @__PURE__ */ new Set([H]) : /* @__PURE__ */ new Set();
    }
  }, [
    le,
    w,
    x,
    J,
    ae,
    G
  ]), [z, K] = X(
    () => V()
  ), ne = be(() => {
    if (le === "multiple") {
      if (Le !== void 0) {
        const H = Le;
        return H ? new Set(H.map((Z) => J(Z))) : /* @__PURE__ */ new Set();
      }
      return z;
    } else {
      if (Ve !== void 0) {
        const H = Ve;
        return H ? /* @__PURE__ */ new Set([J(H)]) : /* @__PURE__ */ new Set();
      }
      return z;
    }
  }, [
    le,
    Le,
    Ve,
    z,
    J
  ]), _e = B(
    (H) => {
      let Z;
      const re = (he) => {
        for (const fe of he) {
          if (J(fe) === H)
            return Z = fe, !0;
          const je = we.get(J(fe)) ?? ae(fe);
          if (je && re(je)) return !0;
        }
        return !1;
      };
      if (re(G), !Z) {
        for (const he of we.values())
          if (re(he)) break;
      }
      return Z;
    },
    [G, we, J, ae]
  ), se = B(() => {
    const H = /* @__PURE__ */ new Map(), Z = (re) => {
      for (const he of re) {
        const fe = J(he);
        H.set(fe, he);
        const je = we.get(fe) ?? ae(he);
        je && Z(je);
      }
    };
    return Z(G), H;
  }, [G, we, J, ae]), me = B(
    (H) => {
      const Z = J(H);
      if (!H.disabled)
        if (le === "multiple") {
          const he = new Set(ne);
          he.has(Z) ? he.delete(Z) : he.add(Z), et || K(he);
          const fe = g ?? h;
          if (fe) {
            const ke = se(), je = [];
            for (const P of he) {
              const R = ke.get(P) ?? _e(P);
              R && je.push(R);
            }
            fe({ item: H, selectedItems: je });
          }
        } else if (!ne.has(Z) || ne.size !== 1 || !ne.has(Z)) {
          et || K(/* @__PURE__ */ new Set([Z]));
          const fe = g ?? h;
          fe && fe({ item: H, selectedItem: H });
        } else {
          const fe = g ?? h;
          fe && fe({ item: H, selectedItem: H });
        }
    },
    [
      J,
      le,
      ne,
      et,
      g,
      h,
      se,
      _e
    ]
  ), Se = B(
    async (H) => {
      const Z = J(H);
      if (!!H.disabled) return;
      const he = $e.has(Z), fe = f ?? y, ke = $ ?? m, je = ae(H), R = we.get(Z) ?? je, pe = !(R !== void 0 && R.length > 0) && q != null;
      if (he) {
        Re((Ie) => {
          const Ae = new Set(Ie);
          return Ae.delete(Z), Ae;
        }), ke?.({ item: H });
        return;
      }
      if (pe) {
        if (xe.has(Z)) return;
        Ze((Ie) => {
          const Ae = new Set(Ie);
          return Ae.add(Z), Ae;
        });
        try {
          const Ae = await q(H);
          Xe((ze) => {
            const at = new Map(ze);
            return at.set(Z, Ae), at;
          }), Re((ze) => {
            const at = new Set(ze);
            return at.add(Z), at;
          }), fe?.({ item: H });
        } catch {
        } finally {
          Ze((Ie) => {
            const Ae = new Set(Ie);
            return Ae.delete(Z), Ae;
          });
        }
        return;
      }
      Re((Ie) => {
        const Ae = new Set(Ie);
        return Ae.add(Z), Ae;
      }), fe?.({ item: H });
    },
    [
      J,
      $e,
      ae,
      we,
      q,
      xe,
      f,
      y,
      $,
      m
    ]
  ), Be = be(() => {
    const H = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Set(), he = (fe, ke) => {
      for (const je of fe) {
        const P = J(je);
        H.has(P) || H.set(P, []), Z.set(P, ke), je.disabled && re.add(P);
        const ce = we.get(P) ?? ae(je);
        ce && ce.length > 0 && (H.set(
          P,
          ce.map((pe) => J(pe))
        ), he(ce, P));
      }
    };
    return he(G, null), { childrenOf: H, parentOf: Z, disabledKeys: re };
  }, [G, we, J, ae]), Je = B(
    (H) => {
      const Z = [], re = [...Be.childrenOf.get(H) ?? []];
      for (; re.length > 0; ) {
        const he = re.pop();
        Z.push(he), re.push(...Be.childrenOf.get(he) ?? []);
      }
      return Z;
    },
    [Be]
  ), [dt, vt] = X(
    () => new Set(I ?? [])
  ), Q = L !== void 0 ? new Set(L) : dt, Me = B(
    (H) => {
      const Z = Be.disabledKeys;
      return Je(H).filter((re) => !Z.has(re));
    },
    [Je, Be]
  ), nt = B(
    (H) => {
      if (Q.has(H)) return !0;
      if (!S || !T) return !1;
      const Z = Me(H);
      return Z.length > 0 && Z.every((re) => Q.has(re));
    },
    [Q, S, T, Me]
  ), Gt = B(
    (H) => {
      if (!S || !T || Q.has(H))
        return !1;
      const Z = Me(H);
      if (Z.length === 0) return !1;
      const re = Z.filter((he) => Q.has(he)).length;
      return re > 0 && re < Z.length;
    },
    [Q, S, T, Me]
  ), Ot = B(
    (H) => {
      if (!S || H.disabled) return;
      const Z = J(H), re = new Set(Q);
      if (re.has(Z) || nt(Z)) {
        if (re.delete(Z), T)
          for (const he of Me(Z)) re.delete(he);
      } else if (re.add(Z), T)
        for (const he of Me(Z)) re.add(he);
      L === void 0 && vt(re), j?.([...re]);
    },
    [
      S,
      T,
      L,
      Q,
      Me,
      J,
      nt,
      j
    ]
  ), Ce = be(() => {
    const H = [], Z = (re, he, fe) => {
      re.forEach((ke, je) => {
        const P = J(ke), R = de(ke), ce = we.get(P) ?? ae(ke);
        let pe;
        we.has(P) ? pe = we.get(P).length > 0 : ce !== void 0 ? pe = ce.length > 0 : q ? pe = !0 : pe = !1;
        const Ie = $e.has(P), Ae = !!ke.disabled, ze = re.length, at = je + 1;
        if (H.push({
          item: ke,
          key: P,
          text: R,
          level: he,
          posInSet: at,
          setSize: ze,
          hasChildren: pe,
          expanded: Ie,
          parentKey: fe,
          disabled: Ae
        }), pe && Ie) {
          const Dt = we.get(P) ?? ce;
          Dt && Dt.length > 0 && Z(Dt, he + 1, P);
        }
      });
    };
    return Z(G, 1, null), H;
  }, [
    G,
    J,
    de,
    ae,
    we,
    $e,
    q,
    xe
  ]), [Ge, kt] = X(
    () => Ce[0]?.key ?? null
  ), Pt = oe(""), tn = oe(null), W = oe(null);
  ye(() => {
    if (!Ge && Ce.length > 0) {
      const H = Ce[0];
      H && kt(H.key);
    } else if (Ge && !Ce.some((H) => H.key === Ge)) {
      const H = Ce[0];
      kt(H ? H.key : null);
    }
  }, [Ce, Ge]), ye(() => {
    if (Ge) {
      const H = W.current?.querySelector(
        `[data-key="${CSS.escape(Ge)}"]`
      );
      let Z = null;
      H || (Z = W.current?.querySelector(
        `[data-key="${Ge}"]`
      ) ?? null);
      const re = H ?? Z;
      re && document.activeElement !== re && W.current?.contains(document.activeElement) && re.focus();
    }
  }, [Ge]);
  const ue = B((H) => {
    kt(H), requestAnimationFrame(() => {
      const Z = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(H) : H;
      let re = W.current?.querySelector(
        `[data-key="${Z}"]`
      );
      re || (re = W.current?.querySelector(`[data-key="${H}"]`) ?? null), re?.focus();
    });
  }, []), Pe = B(
    (H) => Ce.find((re) => re.key === H)?.parentKey ?? null,
    [Ce]
  ), He = B(
    (H) => {
      if (Ce.length === 0) return;
      const Z = Ge ? Ce.findIndex((fe) => fe.key === Ge) : -1, re = Z >= 0 ? Ce[Z] : void 0;
      let he = null;
      if (H.key === "ArrowDown") {
        if (H.preventDefault(), Z === -1)
          he = Ce[0]?.key ?? null;
        else {
          const fe = (Z + 1) % Ce.length, ke = Ce[fe];
          ke && (he = ke.key);
        }
        he && ue(he);
        return;
      }
      if (H.key === "ArrowUp") {
        if (H.preventDefault(), Z === -1) {
          const fe = Ce[Ce.length - 1];
          fe && (he = fe.key);
        } else {
          const fe = (Z - 1 + Ce.length) % Ce.length, ke = Ce[fe];
          ke && (he = ke.key);
        }
        he && ue(he);
        return;
      }
      if (H.key === "ArrowRight") {
        if (H.preventDefault(), !re) return;
        if (re.hasChildren && !re.expanded)
          Se(re.item);
        else if (re.hasChildren && re.expanded) {
          const fe = Z + 1, ke = Ce[fe];
          ke && ke.parentKey === re.key && ue(ke.key);
        }
        return;
      }
      if (H.key === "ArrowLeft") {
        if (H.preventDefault(), !re) return;
        if (re.hasChildren && re.expanded)
          Se(re.item);
        else {
          const fe = Pe(re.key);
          fe && ue(fe);
        }
        return;
      }
      if (H.key === "Home") {
        H.preventDefault();
        const fe = Ce[0];
        fe && ue(fe.key);
        return;
      }
      if (H.key === "End") {
        H.preventDefault();
        const fe = Ce[Ce.length - 1];
        fe && ue(fe.key);
        return;
      }
      if (H.key === "Enter" || H.key === " ") {
        if (H.key === " " && H.target?.tagName === "INPUT" || (H.preventDefault(), !re)) return;
        if (H.key === " " && S) {
          const fe = _e(re.key);
          fe && Ot(fe);
          return;
        }
        me(re.item);
        return;
      }
      if (H.key.length === 1 && /^[a-zA-Z0-9]$/.test(H.key)) {
        H.preventDefault();
        const fe = (Pt.current + H.key).toLowerCase();
        Pt.current = fe, tn.current && clearTimeout(tn.current), tn.current = setTimeout(() => {
          Pt.current = "";
        }, 500);
        const ke = Z >= 0 ? Z + 1 : 0, R = [...Ce, ...Ce].slice(ke, ke + Ce.length).find((ce) => ce.text.toLowerCase().startsWith(fe));
        R && ue(R.key);
        return;
      }
    },
    [
      Ce,
      Ge,
      ue,
      Se,
      me,
      Pe,
      S,
      Ot
    ]
  ), Rt = B(() => {
    if (!Ge && Ce.length > 0) {
      const H = Ce[0];
      H && kt(H.key);
    }
  }, [Ge, Ce]), St = (H, Z, re) => /* @__PURE__ */ s("ul", { role: "group", className: st.group, children: H.map((he, fe) => {
    const ke = J(he), je = de(he), P = we.get(ke) ?? ae(he);
    let R;
    we.has(ke) ? R = we.get(ke).length > 0 : P !== void 0 ? R = P.length > 0 : q ? R = !0 : R = !1;
    const ce = $e.has(ke), pe = ne.has(ke), Ie = !!he.disabled, Ae = xe.has(ke), ze = Ge === ke, at = H.length, Dt = fe + 1, ar = ie ? ie(he) : je, vs = S ? {
      checked: nt(ke),
      indeterminate: Gt(ke)
    } : null;
    return /* @__PURE__ */ D("li", { role: "none", className: st.itemWrapper, children: [
      /* @__PURE__ */ D(
        "div",
        {
          role: "treeitem",
          "data-key": ke,
          tabIndex: ze ? 0 : -1,
          "aria-expanded": R ? ce : void 0,
          "aria-selected": pe,
          "aria-level": Z,
          "aria-setsize": at,
          "aria-posinset": Dt,
          "aria-disabled": Ie || void 0,
          "aria-busy": Ae || void 0,
          className: [
            st.treeitem,
            pe ? st.selected : null,
            Ie ? st.disabled : null,
            ze ? st.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            ue(ke), Ie || me(he);
          },
          onFocus: () => kt(ke),
          children: [
            S ? /* @__PURE__ */ s(
              zy,
              {
                className: st.checkbox,
                checked: vs?.checked ?? !1,
                indeterminate: vs?.indeterminate ?? !1,
                disabled: Ie,
                "aria-label": `Select ${je}`,
                onClick: (qn) => qn.stopPropagation(),
                onChange: () => Ot(he)
              }
            ) : null,
            R ? /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: st.caret,
                "aria-label": `${ce ? "Collapse" : "Expand"} ${je}`,
                "aria-expanded": ce,
                tabIndex: -1,
                disabled: Ie,
                onClick: (qn) => {
                  qn.stopPropagation(), ue(ke), Se(he);
                },
                children: /* @__PURE__ */ s(
                  "span",
                  {
                    "aria-hidden": "true",
                    className: [
                      st.caretIcon,
                      ce ? st.caretOpen : null
                    ].filter(Boolean).join(" "),
                    children: /* @__PURE__ */ s(Ne, { name: "chevron-right", size: 10 })
                  }
                )
              }
            ) : /* @__PURE__ */ s(
              "span",
              {
                className: st.caretPlaceholder,
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ s("span", { className: st.label, children: ar }),
            Ae ? /* @__PURE__ */ s("span", { className: st.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      R && ce ? Ae ? /* @__PURE__ */ s("div", { className: st.loadingRow, "aria-busy": "true", children: "Loading…" }) : P && P.length > 0 ? St(P, Z + 1) : we.has(ke) && we.get(ke).length > 0 ? St(
        we.get(ke),
        Z + 1
      ) : (P && P.length === 0, null) : null
    ] }, ke);
  }) });
  return /* @__PURE__ */ s(
    "div",
    {
      ref: W,
      role: "tree",
      "aria-label": ee,
      "aria-multiselectable": le === "multiple" || void 0,
      tabIndex: 0,
      className: [st.root, F].filter(Boolean).join(" "),
      onKeyDown: He,
      onFocus: Rt,
      children: G.length === 0 ? /* @__PURE__ */ s("div", { className: st.empty, children: "No items" }) : St(G, 1)
    }
  );
}
const Ey = "_root_1plfv_1", Iy = "_panel_1plfv_8", Ay = "_header_1plfv_19", jy = "_listbox_1plfv_28", Ty = "_option_1plfv_42", Ly = "_disabled_1plfv_57", Py = "_active_1plfv_66", Ry = "_selected_1plfv_70", By = "_empty_1plfv_86", qy = "_controls_1plfv_93", Fy = "_reorder_1plfv_102", Hy = "_btn_1plfv_110", Te = {
  root: Ey,
  panel: Iy,
  header: Ay,
  listbox: jy,
  option: Ty,
  disabled: Ly,
  active: Py,
  selected: Ry,
  empty: By,
  controls: qy,
  reorder: Fy,
  btn: Hy
};
function rt(e, t) {
  const n = e[t];
  return n != null ? String(n) : String(e.id ?? "");
}
function Yn(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function Nk({
  source: e,
  Source: t,
  target: n,
  Target: o,
  value: i,
  Value: c,
  targetValue: _,
  TargetValue: r,
  data: l,
  Data: a,
  onSourceChange: d,
  SourceChange: u,
  onTargetChange: k,
  TargetChange: v,
  keyProperty: w,
  KeyProperty: x,
  onMove: g,
  Move: h,
  ariaLabel: f,
  AriaLabel: y,
  className: $
}) {
  const m = w ?? x ?? "id", C = f ?? y ?? "PickList", b = e ?? t ?? i ?? c ?? l ?? a ?? [], O = n ?? o ?? _ ?? r ?? [], [E, M] = X(() => [
    ...b
  ]), [A, N] = X(() => [
    ...O
  ]);
  ye(() => {
    const z = e ?? t ?? i ?? c ?? l ?? a;
    z !== void 0 && M([...z]);
  }, [e, t, i, c, l, a]), ye(() => {
    const z = n ?? o ?? _ ?? r;
    z !== void 0 && N([...z]);
  }, [n, o, _, r]);
  const [p, S] = X(
    () => /* @__PURE__ */ new Set()
  ), [L, I] = X(
    () => /* @__PURE__ */ new Set()
  ), [j, T] = X(() => {
    const z = b.findIndex((K) => !K.disabled);
    return z >= 0 ? z : 0;
  }), [F, G] = X(() => {
    const z = O.findIndex((K) => !K.disabled);
    return z >= 0 ? z : 0;
  }), Y = be(
    () => E.map((z, K) => z.disabled ? -1 : K).filter((z) => z >= 0),
    [E]
  ), U = be(
    () => A.map((z, K) => z.disabled ? -1 : K).filter((z) => z >= 0),
    [A]
  );
  ye(() => {
    if (j >= E.length) {
      const z = Y[Y.length - 1];
      T(z ?? 0);
    } else if (E.length > 0 && Y.length > 0 && !Y.includes(j)) {
      const z = Y[0];
      z !== void 0 && T(z);
    }
  }, [j, E.length, Y]), ye(() => {
    if (F >= A.length) {
      const z = U[U.length - 1];
      G(z ?? 0);
    } else if (A.length > 0 && U.length > 0 && !U.includes(F)) {
      const z = U[0];
      z !== void 0 && G(z);
    }
  }, [F, A.length, U]), ye(() => {
    S((z) => {
      const K = /* @__PURE__ */ new Set();
      for (const ne of z)
        E.some(
          (se) => rt(se, m) === ne && !se.disabled
        ) && K.add(ne);
      return K;
    });
  }, [E, m]), ye(() => {
    I((z) => {
      const K = /* @__PURE__ */ new Set();
      for (const ne of z)
        A.some(
          (se) => rt(se, m) === ne && !se.disabled
        ) && K.add(ne);
      return K;
    });
  }, [A, m]);
  const te = B(
    (z) => {
      (d ?? u)?.(z);
    },
    [d, u]
  ), le = B(
    (z) => {
      (k ?? v)?.(z);
    },
    [k, v]
  ), ee = B(
    (z) => {
      (g ?? h)?.(z);
    },
    [g, h]
  ), q = B(
    (z) => {
      const K = E[z];
      if (!K || K.disabled) return;
      const ne = rt(K, m);
      S((_e) => {
        const se = new Set(_e);
        return se.has(ne) ? se.delete(ne) : se.add(ne), se;
      }), T(z);
    },
    [E, m]
  ), ie = B(
    (z) => {
      const K = A[z];
      if (!K || K.disabled) return;
      const ne = rt(K, m);
      I((_e) => {
        const se = new Set(_e);
        return se.has(ne) ? se.delete(ne) : se.add(ne), se;
      }), G(z);
    },
    [A, m]
  ), J = B(() => {
    const z = [], K = [];
    for (const me of E) {
      const Se = rt(me, m);
      p.has(Se) && !me.disabled ? z.push(me) : K.push(me);
    }
    if (z.length === 0) return;
    const ne = K, _e = [...A, ...z];
    M(ne), N(_e), S(/* @__PURE__ */ new Set());
    const se = new Set(z.map((me) => rt(me, m)));
    I(se), te(ne), le(_e), ee({
      source: ne,
      target: _e,
      moved: z,
      direction: "toTarget"
    });
  }, [
    E,
    A,
    p,
    m,
    te,
    le,
    ee
  ]), de = B(() => {
    const z = [], K = [];
    for (const me of A) {
      const Se = rt(me, m);
      L.has(Se) && !me.disabled ? z.push(me) : K.push(me);
    }
    if (z.length === 0) return;
    const ne = K, _e = [...E, ...z];
    N(ne), M(_e), I(/* @__PURE__ */ new Set());
    const se = new Set(z.map((me) => rt(me, m)));
    S(se), te(_e), le(ne), ee({
      source: _e,
      target: ne,
      moved: z,
      direction: "toSource"
    });
  }, [
    E,
    A,
    L,
    m,
    te,
    le,
    ee
  ]), ae = B(() => {
    const z = E.filter((_e) => !_e.disabled);
    if (z.length === 0) return;
    const K = E.filter((_e) => !!_e.disabled), ne = [...A, ...z];
    M(K), N(ne), S(/* @__PURE__ */ new Set()), te(K), le(ne), ee({
      source: K,
      target: ne,
      moved: z,
      direction: "allToTarget"
    });
  }, [
    E,
    A,
    m,
    te,
    le,
    ee
  ]), ve = B(() => {
    const z = A.filter((_e) => !_e.disabled);
    if (z.length === 0) return;
    const K = A.filter((_e) => !!_e.disabled), ne = [...E, ...z];
    N(K), M(ne), I(/* @__PURE__ */ new Set()), te(ne), le(K), ee({
      source: ne,
      target: K,
      moved: z,
      direction: "allToSource"
    });
  }, [E, A, te, le, ee]), $e = B(() => {
    if (L.size === 0) return;
    const z = [...A], K = L, ne = [];
    for (let se = 1; se < z.length; se++) {
      const me = z[se], Se = z[se - 1];
      if (!me || !Se) continue;
      const Be = rt(me, m), Je = rt(Se, m);
      K.has(Be) && !K.has(Je) && !me.disabled && !Se.disabled && (z[se - 1] = me, z[se] = Se, ne.push(me));
    }
    if (ne.length === 0) return;
    N(z), le(z), ee({ source: E, target: z, moved: ne, direction: "up" });
    const _e = Array.from(K)[0];
    if (_e) {
      const se = z.findIndex(
        (me) => rt(me, m) === _e
      );
      se >= 0 && G(se);
    }
  }, [
    A,
    L,
    m,
    E,
    le,
    ee
  ]), Re = B(() => {
    if (L.size === 0) return;
    const z = [...A], K = L, ne = [];
    for (let se = z.length - 2; se >= 0; se--) {
      const me = z[se], Se = z[se + 1];
      if (!me || !Se) continue;
      const Be = rt(me, m), Je = rt(Se, m);
      K.has(Be) && !K.has(Je) && !me.disabled && !Se.disabled && (z[se] = Se, z[se + 1] = me, ne.push(me));
    }
    if (ne.length === 0) return;
    N(z), le(z), ee({ source: E, target: z, moved: ne, direction: "down" });
    const _e = Array.from(K)[0];
    if (_e) {
      const se = z.findIndex(
        (me) => rt(me, m) === _e
      );
      se >= 0 && G(se);
    }
  }, [
    A,
    L,
    m,
    E,
    le,
    ee
  ]), we = p.size > 0, Xe = L.size > 0, xe = oe(""), Ze = oe(
    null
  ), Ve = oe(""), Le = oe(
    null
  ), tt = B(
    (z) => {
      if (E.length === 0) return;
      const K = Y;
      if (K.length === 0) return;
      const ne = K.includes(j) ? j : K[0] ?? 0;
      let _e = -1;
      if (z.key === "ArrowDown") {
        z.preventDefault();
        const se = K.indexOf(ne);
        _e = K[(se + 1) % K.length] ?? K[0] ?? 0;
      } else if (z.key === "ArrowUp") {
        z.preventDefault();
        const se = K.indexOf(ne);
        _e = K[(se - 1 + K.length) % K.length] ?? K[0] ?? 0;
      } else if (z.key === "Home")
        z.preventDefault(), _e = K[0] ?? 0;
      else if (z.key === "End")
        z.preventDefault(), _e = K[K.length - 1] ?? 0;
      else if (z.key === "Enter" || z.key === " ") {
        z.preventDefault(), q(ne);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(z.key)) {
        z.preventDefault();
        const se = (xe.current + z.key).toLowerCase();
        xe.current = se, Ze.current && clearTimeout(Ze.current), Ze.current = setTimeout(() => {
          xe.current = "";
        }, 500);
        const me = [...K, ...K], Se = K.indexOf(ne) + 1, Be = me.slice(Se).find(
          (Je) => Yn(E[Je]).toLowerCase().startsWith(se)
        );
        Be != null && T(Be);
        return;
      }
      _e >= 0 && T(_e);
    },
    [E, Y, j, q]
  ), Qe = B(
    (z) => {
      if (A.length === 0) return;
      const K = U;
      if (K.length === 0) return;
      const ne = K.includes(F) ? F : K[0] ?? 0;
      let _e = -1;
      if (z.key === "ArrowDown") {
        z.preventDefault();
        const se = K.indexOf(ne);
        _e = K[(se + 1) % K.length] ?? K[0] ?? 0;
      } else if (z.key === "ArrowUp") {
        z.preventDefault();
        const se = K.indexOf(ne);
        _e = K[(se - 1 + K.length) % K.length] ?? K[0] ?? 0;
      } else if (z.key === "Home")
        z.preventDefault(), _e = K[0] ?? 0;
      else if (z.key === "End")
        z.preventDefault(), _e = K[K.length - 1] ?? 0;
      else if (z.key === "Enter" || z.key === " ") {
        z.preventDefault(), ie(ne);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(z.key)) {
        z.preventDefault();
        const se = (Ve.current + z.key).toLowerCase();
        Ve.current = se, Le.current && clearTimeout(Le.current), Le.current = setTimeout(() => {
          Ve.current = "";
        }, 500);
        const me = [...K, ...K], Se = K.indexOf(ne) + 1, Be = me.slice(Se).find(
          (Je) => Yn(A[Je]).toLowerCase().startsWith(se)
        );
        Be != null && G(Be);
        return;
      }
      _e >= 0 && G(_e);
    },
    [A, U, F, ie]
  ), et = oe(null), V = oe(null);
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Te.root, $].filter(Boolean).join(" "),
      "aria-label": C,
      children: [
        /* @__PURE__ */ D("div", { className: Te.panel, children: [
          /* @__PURE__ */ s("div", { className: Te.header, children: "Source" }),
          /* @__PURE__ */ s(
            "div",
            {
              ref: et,
              role: "listbox",
              "aria-label": "Source",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: Te.listbox,
              onKeyDown: tt,
              children: E.length === 0 ? /* @__PURE__ */ s("div", { className: Te.empty, children: "No items" }) : E.map((z, K) => {
                const ne = rt(z, m), _e = p.has(ne), se = K === j, me = !!z.disabled;
                return /* @__PURE__ */ s(
                  "div",
                  {
                    role: "option",
                    "aria-selected": _e,
                    "aria-disabled": me || void 0,
                    tabIndex: -1,
                    "data-active": se || void 0,
                    className: [
                      Te.option,
                      _e ? Te.selected : null,
                      se ? Te.active : null,
                      me ? Te.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => q(K),
                    children: Yn(z)
                  },
                  ne
                );
              })
            }
          )
        ] }),
        /* @__PURE__ */ D("div", { className: Te.controls, children: [
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: Te.btn,
              "aria-label": "Move selected to target",
              "aria-disabled": !we || void 0,
              disabled: !we,
              onClick: J,
              children: "›"
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: Te.btn,
              "aria-label": "Move all to target",
              "aria-disabled": E.filter((z) => !z.disabled).length === 0 || void 0,
              disabled: E.filter((z) => !z.disabled).length === 0,
              onClick: ae,
              children: "»"
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: Te.btn,
              "aria-label": "Move all",
              "aria-disabled": E.filter((z) => !z.disabled).length === 0 || void 0,
              disabled: E.filter((z) => !z.disabled).length === 0,
              onClick: ae,
              children: "»"
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: Te.btn,
              "aria-label": "Move selected to source",
              "aria-disabled": !Xe || void 0,
              disabled: !Xe,
              onClick: de,
              children: "‹"
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: Te.btn,
              "aria-label": "Move all to source",
              "aria-disabled": A.filter((z) => !z.disabled).length === 0 || void 0,
              disabled: A.filter((z) => !z.disabled).length === 0,
              onClick: ve,
              children: "«"
            }
          )
        ] }),
        /* @__PURE__ */ D("div", { className: Te.panel, children: [
          /* @__PURE__ */ s("div", { className: Te.header, children: "Target" }),
          /* @__PURE__ */ s(
            "div",
            {
              ref: V,
              role: "listbox",
              "aria-label": "Target",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: Te.listbox,
              onKeyDown: Qe,
              children: A.length === 0 ? /* @__PURE__ */ s("div", { className: Te.empty, children: "No items" }) : A.map((z, K) => {
                const ne = rt(z, m), _e = L.has(ne), se = K === F, me = !!z.disabled;
                return /* @__PURE__ */ s(
                  "div",
                  {
                    role: "option",
                    "aria-selected": _e,
                    "aria-disabled": me || void 0,
                    tabIndex: -1,
                    "data-active": se || void 0,
                    className: [
                      Te.option,
                      _e ? Te.selected : null,
                      se ? Te.active : null,
                      me ? Te.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => ie(K),
                    children: Yn(z)
                  },
                  ne
                );
              })
            }
          ),
          /* @__PURE__ */ D("div", { className: Te.reorder, children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: Te.btn,
                "aria-label": "Move up",
                "aria-disabled": !Xe || void 0,
                disabled: !Xe,
                onClick: $e,
                children: /* @__PURE__ */ s(Ne, { name: "chevron-up", size: "sm" })
              }
            ),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: Te.btn,
                "aria-label": "Move down",
                "aria-disabled": !Xe || void 0,
                disabled: !Xe,
                onClick: Re,
                children: /* @__PURE__ */ s(Ne, { name: "chevron-down", size: "sm" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const Ky = "_root_16u8q_1", Uy = "_header_16u8q_8", Wy = "_title_16u8q_15", Xy = "_navBtn_16u8q_20", Vy = "_resources_16u8q_39", Gy = "_resource_16u8q_39", Yy = "_grid_16u8q_50", Zy = "_timeCol_16u8q_55", Jy = "_timeCell_16u8q_61", Qy = "_dayCol_16u8q_66", e2 = "_dayHeader_16u8q_73", t2 = "_slot_16u8q_81", n2 = "_event_16u8q_91", ft = {
  root: Ky,
  header: Uy,
  title: Wy,
  navBtn: Xy,
  resources: Vy,
  resource: Gy,
  grid: Yy,
  timeCol: Zy,
  timeCell: Jy,
  dayCol: Qy,
  dayHeader: e2,
  slot: t2,
  event: n2
};
function Vs(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function Ok({
  data: e,
  view: t = "week",
  date: n,
  onDateChange: o,
  resources: i,
  onEventClick: c,
  onSlotClick: _,
  ariaLabel: r = "Scheduler",
  className: l
}) {
  const [a, d] = X(
    n ?? /* @__PURE__ */ new Date()
  ), u = n ?? a, k = (x) => {
    n || d(x), o?.(x);
  }, v = t === "day" ? [u] : t === "week" ? Array.from({ length: 7 }, (x, g) => {
    const h = new Date(u);
    return h.setDate(u.getDate() - u.getDay() + g), h;
  }) : Array.from({ length: 30 }, (x, g) => {
    const h = new Date(u);
    return h.setDate(1 + g), h;
  }), w = Array.from({ length: 12 }, (x, g) => 8 + g);
  return /* @__PURE__ */ D(
    "div",
    {
      className: [ft.root, l].filter(Boolean).join(" "),
      role: "group",
      "aria-label": r,
      children: [
        /* @__PURE__ */ D("div", { className: ft.header, children: [
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: ft.navBtn,
              "aria-label": "Previous",
              onClick: () => {
                const x = new Date(u);
                x.setDate(x.getDate() - 7), k(x);
              },
              children: "‹"
            }
          ),
          /* @__PURE__ */ s("span", { className: ft.title, children: u.toLocaleDateString() }),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: ft.navBtn,
              "aria-label": "Next",
              onClick: () => {
                const x = new Date(u);
                x.setDate(x.getDate() + 7), k(x);
              },
              children: "›"
            }
          )
        ] }),
        i && /* @__PURE__ */ s("div", { className: ft.resources, children: i.map((x) => /* @__PURE__ */ s(
          "div",
          {
            className: ft.resource,
            role: "presentation",
            "aria-label": x.name,
            children: x.name
          },
          x.id
        )) }),
        /* @__PURE__ */ D("div", { className: ft.grid, role: "presentation", children: [
          /* @__PURE__ */ s("div", { className: ft.timeCol, role: "presentation", children: w.map((x) => /* @__PURE__ */ D("div", { className: ft.timeCell, children: [
            x,
            ":00"
          ] }, x)) }),
          v.map((x) => /* @__PURE__ */ D(
            "div",
            {
              className: ft.dayCol,
              role: "presentation",
              title: x.toLocaleDateString(),
              onClick: () => _?.({ date: x }),
              tabIndex: 0,
              "aria-label": x.toLocaleDateString(),
              children: [
                /* @__PURE__ */ s("div", { className: ft.dayHeader, children: x.toLocaleDateString(void 0, {
                  weekday: "short",
                  month: "short",
                  day: "numeric"
                }) }),
                w.map((g) => /* @__PURE__ */ s(
                  "div",
                  {
                    className: ft.slot,
                    tabIndex: -1,
                    onClick: () => {
                      const h = new Date(x);
                      h.setHours(g), _?.({ date: h });
                    }
                  },
                  g
                )),
                e.filter((g) => g.start.toDateString() === x.toDateString()).map((g) => /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    className: ft.event,
                    "aria-label": `${g.title} ${Vs(g.start)} - ${Vs(g.end)}`,
                    "aria-pressed": !1,
                    onClick: () => c?.({ event: g }),
                    children: g.title
                  },
                  g.id
                ))
              ]
            },
            x.toISOString()
          ))
        ] })
      ]
    }
  );
}
const s2 = "_root_caexi_1", r2 = "_header_caexi_8", o2 = "_headerCell_caexi_15", l2 = "_timeline_caexi_21", a2 = "_row_caexi_26", i2 = "_taskName_caexi_32", c2 = "_timelineCell_caexi_37", d2 = "_bar_caexi_43", u2 = "_progress_caexi_56", _2 = "_dep_caexi_61", Lt = {
  root: s2,
  header: r2,
  headerCell: o2,
  timeline: l2,
  row: a2,
  taskName: i2,
  timelineCell: c2,
  bar: d2,
  progress: u2,
  dep: _2
};
function Sk({
  tasks: e,
  view: t = "week",
  onTaskClick: n,
  ariaLabel: o = "Gantt",
  className: i
}) {
  const [c, _] = X(null);
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Lt.root, i].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": o,
      "aria-rowcount": e.length,
      children: [
        /* @__PURE__ */ D("div", { className: Lt.header, role: "row", children: [
          /* @__PURE__ */ s("div", { className: Lt.headerCell, role: "columnheader", children: "Task" }),
          /* @__PURE__ */ D("div", { className: Lt.timeline, role: "columnheader", children: [
            "Timeline (",
            t,
            ")"
          ] })
        ] }),
        e.map((r) => /* @__PURE__ */ D(
          "div",
          {
            className: Lt.row,
            role: "row",
            "aria-selected": c === r.id,
            children: [
              /* @__PURE__ */ s("div", { className: Lt.taskName, role: "gridcell", children: r.name }),
              /* @__PURE__ */ D("div", { className: Lt.timelineCell, role: "gridcell", children: [
                /* @__PURE__ */ s(
                  "div",
                  {
                    className: Lt.bar,
                    role: "button",
                    "aria-label": `${r.name} ${r.start.toLocaleDateString()} - ${r.end.toLocaleDateString()}${r.progress !== void 0 ? `, ${r.progress}% complete` : ""}`,
                    "aria-pressed": c === r.id,
                    tabIndex: 0,
                    onClick: () => {
                      _(r.id), n?.({ task: r });
                    },
                    onKeyDown: (l) => {
                      (l.key === "Enter" || l.key === " ") && (l.preventDefault(), _(r.id), n?.({ task: r }));
                    },
                    children: /* @__PURE__ */ s(
                      "div",
                      {
                        className: Lt.progress,
                        style: { width: `${r.progress ?? 0}%` }
                      }
                    )
                  }
                ),
                r.dependencies?.map((l) => /* @__PURE__ */ s("svg", { className: Lt.dep, "aria-hidden": "true", children: /* @__PURE__ */ s(
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
const f2 = "_root_reqz6_1", h2 = "_fields_reqz6_6", p2 = "_chip_reqz6_13", m2 = "_table_reqz6_35", g2 = "_totalRow_reqz6_55", x2 = "_total_reqz6_55", bn = {
  root: f2,
  fields: h2,
  chip: p2,
  table: m2,
  totalRow: g2,
  total: x2
}, Zn = {
  Sum: (e) => e.reduce((t, n) => t + n, 0),
  Average: (e) => e.length ? e.reduce((t, n) => t + n, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function Tn(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function Dk({
  data: e,
  rowFields: t = [],
  columnFields: n = [],
  aggregateFields: o = [],
  onFieldsChange: i,
  ariaLabel: c = "Pivot table",
  className: _
}) {
  const r = t, l = n, a = o, d = (g, h, f) => {
    const y = g === "row" ? r.filter((C) => C.property !== h) : r, $ = g === "col" ? l.filter((C) => C.property !== h) : l, m = g === "agg" ? a.filter((C) => !(C.property === h && C.aggregate === f)) : a;
    i?.({
      rowFields: y,
      columnFields: $,
      aggregateFields: m
    });
  }, u = (g, h) => h.map((f) => String(g[f.property])).join(""), k = [
    ...new Set(r.length ? e.map((g) => u(g, r)) : [""])
  ].sort(), v = [
    ...new Set(l.length ? e.map((g) => u(g, l)) : [""])
  ].sort(), w = (g, h, f) => {
    const y = e.filter(
      (m) => u(m, r) === g && u(m, l) === h
    ), $ = y.map((m) => Number(m[f.property])).filter((m) => !Number.isNaN(m));
    return !$.length && f.aggregate !== "Count" ? 0 : Zn[f.aggregate](
      f.aggregate === "Count" ? y.map(() => 1) : $
    );
  }, x = (g, h, f, y) => /* @__PURE__ */ D(
    "button",
    {
      type: "button",
      className: bn.chip,
      "aria-label": `Remove ${g} field ${f}`,
      onClick: () => d(g, h, y),
      children: [
        f,
        y ? ` (${y})` : ""
      ]
    },
    `${g}-${f}-${y ?? ""}`
  );
  return /* @__PURE__ */ D("div", { className: [bn.root, _].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ D("div", { className: bn.fields, children: [
      r.map((g) => x("row", g.property, g.title ?? g.property)),
      l.map((g) => x("col", g.property, g.title ?? g.property)),
      a.map(
        (g) => x("agg", g.property, g.title ?? g.property, g.aggregate)
      )
    ] }),
    /* @__PURE__ */ D("table", { className: bn.table, role: "grid", "aria-label": c, children: [
      /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ D("tr", { children: [
        /* @__PURE__ */ s("th", { scope: "col", children: r.map((g) => g.title ?? g.property).join(" / ") || "Total" }),
        v.map((g) => /* @__PURE__ */ s("th", { scope: "col", children: g || "—" }, g)),
        /* @__PURE__ */ s("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ D("tbody", { children: [
        k.map((g) => /* @__PURE__ */ D("tr", { children: [
          /* @__PURE__ */ s("th", { scope: "row", children: g || "—" }),
          v.map((h) => /* @__PURE__ */ s(
            "td",
            {
              title: Tn(
                w(
                  g,
                  h,
                  a[0] ?? { property: "", aggregate: "Count" }
                )
              ),
              children: a.length ? Tn(w(g, h, a[0])) : ""
            },
            h
          )),
          /* @__PURE__ */ s("td", { className: bn.total, children: a.length ? Tn(
            Zn[a[0].aggregate](
              v.flatMap(
                (h) => e.filter(
                  (f) => u(f, r) === g && u(f, l) === h
                ).map((f) => Number(f[a[0].property]))
              ).filter((h) => !Number.isNaN(h))
            )
          ) : "" })
        ] }, g)),
        /* @__PURE__ */ D("tr", { className: bn.totalRow, children: [
          /* @__PURE__ */ s("th", { scope: "row", children: "Total" }),
          v.map((g) => /* @__PURE__ */ s("td", { children: a.length ? Tn(
            Zn[a[0].aggregate](
              e.filter((h) => u(h, l) === g).map((h) => Number(h[a[0].property])).filter((h) => !Number.isNaN(h))
            )
          ) : "" }, g)),
          /* @__PURE__ */ s("td", { children: a.length ? Tn(
            Zn[a[0].aggregate](
              e.map((g) => Number(g[a[0].property])).filter((g) => !Number.isNaN(g))
            )
          ) : "" })
        ] })
      ] })
    ] })
  ] });
}
const b2 = "_root_48ysw_1", y2 = "_reverse_48ysw_10", v2 = "_item_48ysw_14", k2 = "_marker_48ysw_35", w2 = "_body_48ysw_46", $2 = "_label_48ysw_50", N2 = "_content_48ysw_56", cn = {
  root: b2,
  reverse: y2,
  item: v2,
  marker: k2,
  body: w2,
  label: $2,
  content: N2
};
function Mk({
  items: e,
  reverse: t = !1,
  ariaLabel: n = "Timeline",
  className: o
}) {
  const i = t ? [...e].reverse() : e;
  return /* @__PURE__ */ s(
    "ol",
    {
      className: [cn.root, t ? cn.reverse : "", o].filter(Boolean).join(" "),
      role: "list",
      "aria-label": n,
      children: i.map((c, _) => /* @__PURE__ */ D("li", { className: cn.item, children: [
        /* @__PURE__ */ s("span", { className: cn.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ D("div", { className: cn.body, children: [
          /* @__PURE__ */ s("div", { className: cn.label, children: c.label }),
          c.content !== void 0 && /* @__PURE__ */ s("div", { className: cn.content, children: c.content })
        ] })
      ] }, _))
    }
  );
}
const O2 = "_root_4ls7q_1", S2 = "_header_4ls7q_13", D2 = "_headCell_4ls7q_22", M2 = "_row_4ls7q_32", C2 = "_cell_4ls7q_37", Ln = {
  root: O2,
  header: S2,
  headCell: D2,
  row: M2,
  cell: C2
};
function Ck({
  count: e,
  rowHeight: t = 40,
  height: n = 320,
  loadData: o,
  columns: i = [],
  ariaLabel: c = "Virtual grid",
  className: _
}) {
  const [r, l] = X(
    /* @__PURE__ */ new Map()
  ), [a, d] = X(0), u = oe(/* @__PURE__ */ new Set()), k = Math.ceil(n / t), v = Math.max(0, Math.floor(a / t) - 3), w = Math.min(e, v + k + 6), x = B(
    (h, f) => {
      let y = !1;
      for (let $ = h; $ < f; $++)
        !r.has($) && !u.current.has($) && (y = !0);
      if (y) {
        for (let $ = h; $ < f; $++) u.current.add($);
        o({ skip: h, top: f }).then(($) => {
          l((m) => {
            const C = new Map(m);
            return $.forEach((b, O) => C.set(h + O, b)), C;
          });
          for (let m = h; m < f; m++) u.current.delete(m);
        });
      }
    },
    [r, o]
  );
  ye(() => {
    x(v, w);
  }, [v, w]);
  const g = [];
  for (let h = v; h < w; h++) {
    const f = r.get(h) ?? {};
    g.push(
      /* @__PURE__ */ s(
        "div",
        {
          className: Ln.row,
          role: "row",
          style: { height: t },
          children: i.map((y) => /* @__PURE__ */ s(
            "div",
            {
              role: "gridcell",
              className: Ln.cell,
              style: y.width ? { width: y.width } : void 0,
              children: String(f[y.property] ?? "")
            },
            y.property
          ))
        },
        h
      )
    );
  }
  return /* @__PURE__ */ D(
    "div",
    {
      className: [Ln.root, _].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": c,
      "aria-rowcount": e,
      tabIndex: 0,
      style: { height: n },
      onScroll: (h) => d(h.target.scrollTop),
      onKeyDown: (h) => {
        const f = h.currentTarget;
        h.key === "ArrowDown" ? (h.preventDefault(), f.scrollTop += t) : h.key === "ArrowUp" ? (h.preventDefault(), f.scrollTop -= t) : h.key === "PageDown" ? (h.preventDefault(), f.scrollTop += n) : h.key === "PageUp" && (h.preventDefault(), f.scrollTop -= n);
      },
      children: [
        /* @__PURE__ */ s("div", { style: { height: v * t }, "aria-hidden": "true" }),
        /* @__PURE__ */ s("div", { className: Ln.header, role: "row", children: i.map((h) => /* @__PURE__ */ s(
          "div",
          {
            role: "columnheader",
            className: Ln.headCell,
            style: {
              height: t,
              ...h.width ? { width: h.width } : {}
            },
            children: h.title ?? h.property
          },
          h.property
        )) }),
        g,
        /* @__PURE__ */ s(
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
    constructor(r, l, a, d) {
      if (this.version = r, this.errorCorrectionLevel = l, r < t.MIN_VERSION || r > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (d < -1 || d > 7) throw new RangeError("Mask value out of range");
      this.size = r * 4 + 17;
      let u = [];
      for (let v = 0; v < this.size; v++) u.push(!1);
      for (let v = 0; v < this.size; v++)
        this.modules.push(u.slice()), this.isFunction.push(u.slice());
      this.drawFunctionPatterns();
      const k = this.addEccAndInterleave(a);
      if (this.drawCodewords(k), d == -1) {
        let v = 1e9;
        for (let w = 0; w < 8; w++) {
          this.applyMask(w), this.drawFormatBits(w);
          const x = this.getPenaltyScore();
          x < v && (d = w, v = x), this.applyMask(w);
        }
      }
      i(0 <= d && d <= 7), this.mask = d, this.applyMask(d), this.drawFormatBits(d), this.isFunction = [];
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
    static encodeSegments(r, l, a = 1, d = 40, u = -1, k = !0) {
      if (!(t.MIN_VERSION <= a && a <= d && d <= t.MAX_VERSION) || u < -1 || u > 7)
        throw new RangeError("Invalid value");
      let v, w;
      for (v = a; ; v++) {
        const f = t.getNumDataCodewords(v, l) * 8, y = c.getTotalBits(r, v);
        if (y <= f) {
          w = y;
          break;
        }
        if (v >= d)
          throw new RangeError("Data too long");
      }
      for (const f of [
        t.Ecc.MEDIUM,
        t.Ecc.QUARTILE,
        t.Ecc.HIGH
      ])
        k && w <= t.getNumDataCodewords(v, f) * 8 && (l = f);
      let x = [];
      for (const f of r) {
        n(f.mode.modeBits, 4, x), n(f.numChars, f.mode.numCharCountBits(v), x);
        for (const y of f.getData()) x.push(y);
      }
      i(x.length == w);
      const g = t.getNumDataCodewords(v, l) * 8;
      i(x.length <= g), n(0, Math.min(4, g - x.length), x), n(0, (8 - x.length % 8) % 8, x), i(x.length % 8 == 0);
      for (let f = 236; x.length < g; f ^= 253)
        n(f, 8, x);
      let h = [];
      for (; h.length * 8 < x.length; ) h.push(0);
      return x.forEach(
        (f, y) => h[y >>> 3] |= f << 7 - (y & 7)
      ), new t(v, l, h, u);
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
        for (let d = 0; d < l; d++)
          a == 0 && d == 0 || a == 0 && d == l - 1 || a == l - 1 && d == 0 || this.drawAlignmentPattern(r[a], r[d]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(r) {
      const l = this.errorCorrectionLevel.formatBits << 3 | r;
      let a = l;
      for (let u = 0; u < 10; u++) a = a << 1 ^ (a >>> 9) * 1335;
      const d = (l << 10 | a) ^ 21522;
      i(d >>> 15 == 0);
      for (let u = 0; u <= 5; u++)
        this.setFunctionModule(8, u, o(d, u));
      this.setFunctionModule(8, 7, o(d, 6)), this.setFunctionModule(8, 8, o(d, 7)), this.setFunctionModule(7, 8, o(d, 8));
      for (let u = 9; u < 15; u++)
        this.setFunctionModule(14 - u, 8, o(d, u));
      for (let u = 0; u < 8; u++)
        this.setFunctionModule(this.size - 1 - u, 8, o(d, u));
      for (let u = 8; u < 15; u++)
        this.setFunctionModule(8, this.size - 15 + u, o(d, u));
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
        const d = o(l, a), u = this.size - 11 + a % 3, k = Math.floor(a / 3);
        this.setFunctionModule(u, k, d), this.setFunctionModule(k, u, d);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(r, l) {
      for (let a = -4; a <= 4; a++)
        for (let d = -4; d <= 4; d++) {
          const u = Math.max(Math.abs(d), Math.abs(a)), k = r + d, v = l + a;
          0 <= k && k < this.size && 0 <= v && v < this.size && this.setFunctionModule(k, v, u != 2 && u != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(r, l) {
      for (let a = -2; a <= 2; a++)
        for (let d = -2; d <= 2; d++)
          this.setFunctionModule(
            r + d,
            l + a,
            Math.max(Math.abs(d), Math.abs(a)) != 1
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
      const d = t.NUM_ERROR_CORRECTION_BLOCKS[a.ordinal][l], u = t.ECC_CODEWORDS_PER_BLOCK[a.ordinal][l], k = Math.floor(
        t.getNumRawDataModules(l) / 8
      ), v = d - k % d, w = Math.floor(k / d);
      let x = [];
      const g = t.reedSolomonComputeDivisor(u);
      for (let f = 0, y = 0; f < d; f++) {
        let $ = r.slice(
          y,
          y + w - u + (f < v ? 0 : 1)
        );
        y += $.length;
        const m = t.reedSolomonComputeRemainder($, g);
        f < v && $.push(0), x.push($.concat(m));
      }
      let h = [];
      for (let f = 0; f < x[0].length; f++)
        x.forEach((y, $) => {
          (f != w - u || $ >= v) && h.push(y[f]);
        });
      return i(h.length == k), h;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(r) {
      if (r.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let l = 0;
      for (let a = this.size - 1; a >= 1; a -= 2) {
        a == 6 && (a = 5);
        for (let d = 0; d < this.size; d++)
          for (let u = 0; u < 2; u++) {
            const k = a - u, w = (a + 1 & 2) == 0 ? this.size - 1 - d : d;
            !this.isFunction[w][k] && l < r.length * 8 && (this.modules[w][k] = o(r[l >>> 3], 7 - (l & 7)), l++);
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
          let d;
          switch (r) {
            case 0:
              d = (a + l) % 2 == 0;
              break;
            case 1:
              d = l % 2 == 0;
              break;
            case 2:
              d = a % 3 == 0;
              break;
            case 3:
              d = (a + l) % 3 == 0;
              break;
            case 4:
              d = (Math.floor(a / 3) + Math.floor(l / 2)) % 2 == 0;
              break;
            case 5:
              d = a * l % 2 + a * l % 3 == 0;
              break;
            case 6:
              d = (a * l % 2 + a * l % 3) % 2 == 0;
              break;
            case 7:
              d = ((a + l) % 2 + a * l % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[l][a] && d && (this.modules[l][a] = !this.modules[l][a]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let r = 0;
      for (let u = 0; u < this.size; u++) {
        let k = !1, v = 0, w = [0, 0, 0, 0, 0, 0, 0];
        for (let x = 0; x < this.size; x++)
          this.modules[u][x] == k ? (v++, v == 5 ? r += t.PENALTY_N1 : v > 5 && r++) : (this.finderPenaltyAddHistory(v, w), k || (r += this.finderPenaltyCountPatterns(w) * t.PENALTY_N3), k = this.modules[u][x], v = 1);
        r += this.finderPenaltyTerminateAndCount(k, v, w) * t.PENALTY_N3;
      }
      for (let u = 0; u < this.size; u++) {
        let k = !1, v = 0, w = [0, 0, 0, 0, 0, 0, 0];
        for (let x = 0; x < this.size; x++)
          this.modules[x][u] == k ? (v++, v == 5 ? r += t.PENALTY_N1 : v > 5 && r++) : (this.finderPenaltyAddHistory(v, w), k || (r += this.finderPenaltyCountPatterns(w) * t.PENALTY_N3), k = this.modules[x][u], v = 1);
        r += this.finderPenaltyTerminateAndCount(k, v, w) * t.PENALTY_N3;
      }
      for (let u = 0; u < this.size - 1; u++)
        for (let k = 0; k < this.size - 1; k++) {
          const v = this.modules[u][k];
          v == this.modules[u][k + 1] && v == this.modules[u + 1][k] && v == this.modules[u + 1][k + 1] && (r += t.PENALTY_N2);
        }
      let l = 0;
      for (const u of this.modules)
        l = u.reduce((k, v) => k + (v ? 1 : 0), l);
      const a = this.size * this.size, d = Math.ceil(Math.abs(l * 20 - a * 10) / a) - 1;
      return i(0 <= d && d <= 9), r += d * t.PENALTY_N4, i(0 <= r && r <= 2568888), r;
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
        for (let d = this.size - 7; a.length < r; d -= l)
          a.splice(1, 0, d);
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
      for (let d = 0; d < r - 1; d++) l.push(0);
      l.push(1);
      let a = 1;
      for (let d = 0; d < r; d++) {
        for (let u = 0; u < l.length; u++)
          l[u] = t.reedSolomonMultiply(l[u], a), u + 1 < l.length && (l[u] ^= l[u + 1]);
        a = t.reedSolomonMultiply(a, 2);
      }
      return l;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(r, l) {
      let a = l.map((d) => 0);
      for (const d of r) {
        const u = d ^ a.shift();
        a.push(0), l.forEach(
          (k, v) => a[v] ^= t.reedSolomonMultiply(k, u)
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
      for (let d = 7; d >= 0; d--)
        a = a << 1 ^ (a >>> 7) * 285, a ^= (l >>> d & 1) * r;
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
  function n(_, r, l) {
    if (r < 0 || r > 31 || _ >>> r)
      throw new RangeError("Value out of range");
    for (let a = r - 1; a >= 0; a--)
      l.push(_ >>> a & 1);
  }
  function o(_, r) {
    return (_ >>> r & 1) != 0;
  }
  function i(_) {
    if (!_) throw new Error("Assertion error");
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
      for (const a of r) n(a, 8, l);
      return new c(c.Mode.BYTE, r.length, l);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(r) {
      if (!c.isNumeric(r))
        throw new RangeError("String contains non-numeric characters");
      let l = [];
      for (let a = 0; a < r.length; ) {
        const d = Math.min(r.length - a, 3);
        n(parseInt(r.substring(a, a + d), 10), d * 3 + 1, l), a += d;
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
        let d = c.ALPHANUMERIC_CHARSET.indexOf(r.charAt(a)) * 45;
        d += c.ALPHANUMERIC_CHARSET.indexOf(r.charAt(a + 1)), n(d, 11, l);
      }
      return a < r.length && n(
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
      if (r < 128) n(r, 8, l);
      else if (r < 16384)
        n(2, 2, l), n(r, 14, l);
      else if (r < 1e6)
        n(6, 3, l), n(r, 21, l);
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
      for (const d of r) {
        const u = d.mode.numCharCountBits(l);
        if (d.numChars >= 1 << u) return 1 / 0;
        a += 4 + u + d.bitData.length;
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
    class n {
      // The QR Code can tolerate about 30% erroneous codewords
      /*-- Constructor and fields --*/
      constructor(i, c) {
        this.ordinal = i, this.formatBits = c;
      }
      ordinal;
      formatBits;
      /*-- Constants --*/
      static LOW = new n(0, 1);
      // The QR Code can tolerate about  7% erroneous codewords
      static MEDIUM = new n(1, 0);
      // The QR Code can tolerate about 15% erroneous codewords
      static QUARTILE = new n(2, 3);
      // The QR Code can tolerate about 25% erroneous codewords
      static HIGH = new n(3, 2);
    }
    t.Ecc = n;
  })(e.QrCode || (e.QrCode = {}));
})(zt || (zt = {}));
((e) => {
  ((t) => {
    class n {
      /*-- Constructor and fields --*/
      constructor(i, c) {
        this.modeBits = i, this.numBitsCharCount = c;
      }
      modeBits;
      numBitsCharCount;
      /*-- Constants --*/
      static NUMERIC = new n(1, [10, 12, 14]);
      static ALPHANUMERIC = new n(2, [9, 11, 13]);
      static BYTE = new n(4, [8, 16, 16]);
      static KANJI = new n(8, [8, 10, 12]);
      static ECI = new n(7, [0, 0, 0]);
      /*-- Method --*/
      // (Package-private) Returns the bit width of the character count field for a segment in
      // this mode in a QR Code at the given version number. The result is in the range [0, 16].
      numCharCountBits(i) {
        return this.numBitsCharCount[Math.floor((i + 7) / 17)];
      }
    }
    t.Mode = n;
  })(e.QrSegment || (e.QrSegment = {}));
})(zt || (zt = {}));
const z2 = "_root_1leml_1", E2 = {
  root: z2
}, I2 = {
  low: zt.QrCode.Ecc.LOW,
  medium: zt.QrCode.Ecc.MEDIUM,
  quartile: zt.QrCode.Ecc.QUARTILE,
  high: zt.QrCode.Ecc.HIGH
};
function zk({
  value: e,
  size: t = 128,
  render: n = "svg",
  errorCorrection: o = "medium",
  margin: i = 4,
  ariaLabel: c,
  className: _,
  onError: r
}) {
  const l = c ?? `QR code for ${e}`, a = oe(null), d = rr("(prefers-color-scheme: dark)"), [u, k] = X(null);
  ye(() => {
    const $ = document.documentElement;
    k($.dataset.theme ?? null);
    const m = new MutationObserver(() => {
      k($.dataset.theme ?? null);
    });
    return m.observe($, {
      attributes: !0,
      attributeFilter: ["data-theme"]
    }), () => m.disconnect();
  }, []);
  const v = be(() => {
    try {
      return zt.QrCode.encodeText(e, I2[o]);
    } catch {
      return null;
    }
  }, [e, o]), w = oe(null);
  ye(() => {
    if (v !== null) {
      w.current = null;
      return;
    }
    const $ = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error($), (w.current?.value !== e || w.current?.onError !== r) && (w.current = { value: e, onError: r }, r?.($));
  }, [v, e, r]);
  const x = Math.max(0, Math.floor(i)), g = [E2.root, _].filter(Boolean).join(" ");
  if (ye(() => {
    if (n !== "canvas" || v === null) return;
    const $ = a.current, m = $?.getContext("2d");
    if (!$ || !m) return;
    const C = getComputedStyle($), b = C.getPropertyValue("--dx-text-color").trim() || "#000", O = C.getPropertyValue("--dx-surface-color").trim() || "#fff";
    A2(m, v, t, x, b, O);
  }, [n, v, t, x, d, u]), v === null)
    return /* @__PURE__ */ s("div", { className: g, role: "img", "aria-label": l, "data-qr-error": "true" });
  const h = v.size + x * 2, f = t / h;
  if (n === "canvas")
    return /* @__PURE__ */ s(
      "canvas",
      {
        ref: a,
        className: g,
        width: t,
        height: t,
        role: "img",
        "aria-label": l,
        "data-value": e
      }
    );
  const y = [];
  for (let $ = 0; $ < v.size; $++)
    for (let m = 0; m < v.size; m++)
      v.getModule(m, $) && y.push(
        /* @__PURE__ */ s(
          "rect",
          {
            x: (m + x) * f,
            y: ($ + x) * f,
            width: f + 0.5,
            height: f + 0.5
          },
          `${m}-${$}`
        )
      );
  return /* @__PURE__ */ D(
    "svg",
    {
      className: g,
      width: t,
      height: t,
      viewBox: `0 0 ${t} ${t}`,
      role: "img",
      "aria-label": l,
      "data-value": e,
      children: [
        /* @__PURE__ */ s("rect", { width: t, height: t, fill: "var(--dx-surface-color)" }),
        /* @__PURE__ */ s("g", { fill: "var(--dx-text-color)", children: y })
      ]
    }
  );
}
function A2(e, t, n, o, i, c) {
  const _ = n / (t.size + o * 2);
  e.fillStyle = c, e.fillRect(0, 0, n, n), e.fillStyle = i;
  for (let r = 0; r < t.size; r++)
    for (let l = 0; l < t.size; l++)
      t.getModule(l, r) && e.fillRect((l + o) * _, (r + o) * _, _ + 0.5, _ + 0.5);
}
const j2 = "_root_1v9la_1", T2 = "_value_1v9la_9", Gs = {
  root: j2,
  value: T2
}, Ys = [
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
], Zs = 104, L2 = 106;
function P2(e) {
  const t = [Zs];
  for (let o = 0; o < e.length; o++) {
    const i = e.charCodeAt(o);
    t.push(i >= 32 && i <= 126 ? i - 32 : 0);
  }
  let n = Zs;
  for (let o = 1; o < t.length; o++) n += o * t[o];
  return t.push(n % 103, L2), t;
}
function Ek({
  value: e,
  format: t = "Code128",
  height: n = 60,
  showValue: o = !1,
  ariaLabel: i,
  className: c
}) {
  const _ = i ?? `Barcode ${e}`, r = be(() => {
    const l = [];
    let a = 0;
    for (const d of P2(e)) {
      const u = Ys[d] ?? Ys[0];
      for (let k = 0; k < u.length; k++) {
        const v = Number(u[k]);
        k % 2 === 0 && l.push({ x: a, w: v }), a += v;
      }
    }
    return { modules: l, total: a };
  }, [e]);
  return /* @__PURE__ */ D("span", { className: [Gs.root, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ D(
      "svg",
      {
        width: "100%",
        height: n,
        viewBox: `0 0 ${r.total} ${n}`,
        preserveAspectRatio: "none",
        role: "img",
        "aria-label": _,
        "data-value": e,
        children: [
          /* @__PURE__ */ s(
            "rect",
            {
              width: r.total,
              height: n,
              fill: "var(--dx-surface-color)"
            }
          ),
          r.modules.map((l, a) => /* @__PURE__ */ s(
            "rect",
            {
              x: l.x,
              y: 0,
              width: l.w,
              height: n,
              fill: "var(--dx-text-color)"
            },
            a
          ))
        ]
      }
    ),
    o && /* @__PURE__ */ s("span", { className: Gs.value, children: e })
  ] });
}
const R2 = "_root_1bgqt_1", B2 = "_svg_1bgqt_10", q2 = "_gridline_1bgqt_15", F2 = "_tickLabel_1bgqt_21", H2 = "_axisTitle_1bgqt_27", K2 = "_dataLabel_1bgqt_34", U2 = "_legend_1bgqt_40", W2 = "_legendItem_1bgqt_48", X2 = "_swatch_1bgqt_56", V2 = "_tooltip_1bgqt_63", G2 = "_visuallyHidden_1bgqt_77", ot = {
  root: R2,
  svg: B2,
  gridline: q2,
  tickLabel: F2,
  axisTitle: H2,
  dataLabel: K2,
  legend: U2,
  legendItem: W2,
  swatch: X2,
  tooltip: V2,
  visuallyHidden: G2
}, Js = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function Y2(e, t, n) {
  const o = t - e || 1, i = n ?? Math.pow(10, Math.floor(Math.log10(o / 4))), c = Math.floor(e / i) * i, _ = Math.ceil(t / i) * i, r = [];
  for (let l = c; l <= _ + 1e-9; l += i)
    r.push(Number(l.toFixed(6)));
  return { min: c, max: _, step: i, ticks: r };
}
function Ik({
  series: e,
  width: t = 600,
  height: n = 400,
  valueAxis: o,
  categoryAxis: i,
  showLegend: c = !0,
  tooltipVisible: _ = !0,
  onSeriesClick: r,
  ariaLabel: l = "Chart",
  className: a
}) {
  const [d, u] = X(
    null
  ), k = be(() => {
    const b = /* @__PURE__ */ new Set();
    for (const O of e)
      for (const E of O.data) b.add(String(E[O.categoryProperty] ?? ""));
    return [...b];
  }, [e]), v = be(
    () => e.flatMap((b) => b.data.map((O) => Number(O[b.valueProperty]))).filter((b) => !Number.isNaN(b)),
    [e]
  ), w = o?.min ?? (v.length ? Math.min(0, ...v) : 0), x = o?.max ?? (v.length ? Math.max(...v) : 10), g = be(
    () => Y2(w, x, o?.step),
    [w, x, o?.step]
  ), h = { t: 16, r: 16, b: 40, l: 56 }, f = t - h.l - h.r, y = n - h.t - h.b, $ = (b) => h.l + b / Math.max(1, k.length - 1) * f, m = (b) => h.t + (1 - (b - g.min) / (g.max - g.min || 1)) * y, C = (b, O) => O.color ?? Js[b % Js.length];
  return /* @__PURE__ */ D(
    "figure",
    {
      className: [ot.root, a].filter(Boolean).join(" "),
      role: "img",
      "aria-label": l,
      "aria-describedby": `${l.replace(/\s+/g, "-")}-table`,
      children: [
        /* @__PURE__ */ D(
          "svg",
          {
            width: t,
            height: n,
            className: ot.svg,
            role: "presentation",
            children: [
              o?.gridlines !== !1 && g.ticks.map((b) => /* @__PURE__ */ s(
                "line",
                {
                  x1: h.l,
                  x2: h.l + f,
                  y1: m(b),
                  y2: m(b),
                  className: ot.gridline
                },
                b
              )),
              i?.gridlines && k.map((b, O) => /* @__PURE__ */ s(
                "line",
                {
                  x1: $(O),
                  x2: $(O),
                  y1: h.t,
                  y2: h.t + y,
                  className: ot.gridline
                },
                O
              )),
              g.ticks.map((b) => /* @__PURE__ */ s(
                "text",
                {
                  x: h.l - 8,
                  y: m(b) + 4,
                  textAnchor: "end",
                  className: ot.tickLabel,
                  children: b
                },
                b
              )),
              k.map((b, O) => /* @__PURE__ */ s(
                "text",
                {
                  x: $(O),
                  y: h.t + y + 16,
                  textAnchor: "middle",
                  className: ot.tickLabel,
                  children: b
                },
                b
              )),
              o?.title && /* @__PURE__ */ s(
                "text",
                {
                  x: 12,
                  y: h.t + y / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90,12,${h.t + y / 2})`,
                  className: ot.axisTitle,
                  children: o.title
                }
              ),
              i?.title && /* @__PURE__ */ s(
                "text",
                {
                  x: h.l + f / 2,
                  y: n - 4,
                  textAnchor: "middle",
                  className: ot.axisTitle,
                  children: i.title
                }
              ),
              (() => {
                const b = /* @__PURE__ */ new Map();
                for (const M of e)
                  if (M.stack)
                    for (const A of M.data) {
                      const N = String(A[M.categoryProperty] ?? ""), p = Number(A[M.valueProperty]);
                      if (Number.isNaN(p)) continue;
                      b.has(M.stack) || b.set(M.stack, /* @__PURE__ */ new Map());
                      const S = b.get(M.stack);
                      S.set(N, (S.get(N) ?? 0) + p);
                    }
                const O = e.filter(
                  (M) => M.type === "pie" || M.type === "donut"
                ), E = /* @__PURE__ */ new Map();
                for (const M of O) {
                  const A = M.data.reduce(
                    (N, p) => N + (Number(p[M.valueProperty]) || 0),
                    0
                  );
                  E.set(M, A);
                }
                return e.map((M, A) => {
                  const N = M.data.map((I) => ({
                    cat: String(I[M.categoryProperty] ?? ""),
                    val: Number(I[M.valueProperty]),
                    size: M.sizeProperty ? Number(I[M.sizeProperty]) : void 0,
                    item: I
                  })), p = new Map(k.map((I, j) => [I, j])), S = C(A, M);
                  if (M.type === "pie" || M.type === "donut") {
                    const I = h.l + f / 2, j = h.t + y / 2, T = Math.min(f, y) / 3, F = M.type === "donut" ? M.innerRadius ?? T * 0.5 : 0, G = E.get(M) ?? N.reduce((U, te) => U + te.val, 0);
                    let Y = -90;
                    return /* @__PURE__ */ D(
                      "g",
                      {
                        role: "list",
                        "aria-label": M.title ?? `Series ${A + 1}`,
                        children: [
                          /* @__PURE__ */ s("title", { children: M.title ?? `Series ${A + 1}` }),
                          N.map((U, te) => {
                            const le = G ? U.val / G * 360 : 0, ee = Y, q = Y + le;
                            Y = q;
                            const ie = le > 180 ? 1 : 0, J = (Qe) => Qe * Math.PI / 180, de = I + T * Math.cos(J(ee)), ae = j + T * Math.sin(J(ee)), ve = I + T * Math.cos(J(q)), $e = j + T * Math.sin(J(q)), Re = I + F * Math.cos(J(q)), we = j + F * Math.sin(J(q)), Xe = I + F * Math.cos(J(ee)), xe = j + F * Math.sin(J(ee)), Ze = F ? `M ${de} ${ae} A ${T} ${T} 0 ${ie} 1 ${ve} ${$e} L ${Re} ${we} A ${F} ${F} 0 ${ie} 0 ${Xe} ${xe} Z` : `M ${I} ${j} L ${de} ${ae} A ${T} ${T} 0 ${ie} 1 ${ve} ${$e} Z`, Ve = (ee + q) / 2, Le = I + (T + 12) * Math.cos(J(Ve)), tt = j + (T + 12) * Math.sin(J(Ve));
                            return /* @__PURE__ */ D("g", { role: "listitem", children: [
                              /* @__PURE__ */ s(
                                "path",
                                {
                                  d: Ze,
                                  fill: S,
                                  stroke: "var(--dx-surface-color)",
                                  strokeWidth: 1,
                                  onMouseEnter: () => _ && u({
                                    x: Le,
                                    y: tt,
                                    text: `${M.title ?? U.cat}: ${U.val}`
                                  }),
                                  onMouseLeave: () => u(null),
                                  onClick: () => r?.({
                                    seriesTitle: M.title ?? "",
                                    category: U.cat,
                                    value: U.val,
                                    item: U.item
                                  }),
                                  style: { cursor: "pointer" }
                                }
                              ),
                              M.labels?.visible && /* @__PURE__ */ s(
                                "text",
                                {
                                  x: Le,
                                  y: tt,
                                  textAnchor: "middle",
                                  className: ot.dataLabel,
                                  children: U.val
                                }
                              )
                            ] }, te);
                          })
                        ]
                      },
                      A
                    );
                  }
                  if (M.type === "scatter" || M.type === "bubble")
                    return /* @__PURE__ */ D(
                      "g",
                      {
                        role: "list",
                        "aria-label": M.title ?? `Series ${A + 1}`,
                        children: [
                          /* @__PURE__ */ s("title", { children: M.title ?? `Series ${A + 1}` }),
                          N.map((I, j) => {
                            const T = p.get(I.cat) ?? 0, F = Number(N[j].cat), G = Number.isNaN(F) ? $(T) : h.l + (F - g.min) / (g.max - g.min || 1) * f, Y = m(I.val), U = M.type === "bubble" && I.size !== void 0 ? Math.max(4, Math.min(12, I.size / 10)) : 4;
                            return /* @__PURE__ */ D("g", { role: "listitem", children: [
                              /* @__PURE__ */ s(
                                "circle",
                                {
                                  cx: G,
                                  cy: Y,
                                  r: U,
                                  fill: S,
                                  stroke: "var(--dx-surface-color)",
                                  strokeWidth: 1.5
                                }
                              ),
                              /* @__PURE__ */ s(
                                "circle",
                                {
                                  cx: G,
                                  cy: Y,
                                  r: 12,
                                  fill: "transparent",
                                  onMouseEnter: () => _ && u({
                                    x: G,
                                    y: Y,
                                    text: `${M.title ?? I.cat}: ${I.val}`
                                  }),
                                  onMouseLeave: () => u(null),
                                  onClick: () => r?.({
                                    seriesTitle: M.title ?? "",
                                    category: I.cat,
                                    value: I.val,
                                    item: I.item
                                  }),
                                  style: { cursor: "pointer" }
                                }
                              )
                            ] }, j);
                          })
                        ]
                      },
                      A
                    );
                  if (M.type === "line" || M.type === "area") {
                    const I = (F) => {
                      if (!M.stack) return g.min;
                      let G = 0;
                      for (let Y = 0; Y < A; Y++) {
                        const U = e[Y];
                        if (U?.stack !== M.stack) continue;
                        const te = U.data.find(
                          (le) => String(le[U.categoryProperty] ?? "") === F
                        );
                        te && (G += Number(te[U.valueProperty]) || 0);
                      }
                      return G;
                    }, j = N.map((F) => {
                      const G = p.get(F.cat) ?? 0, Y = I(F.cat);
                      return `${G === 0 ? "M" : "L"} ${$(G)} ${m(Y + F.val)}`;
                    }).join(" "), T = N.map((F) => {
                      const G = p.get(F.cat) ?? 0, Y = I(F.cat);
                      return `${G === 0 ? "M" : "L"} ${$(G)} ${m(Y)}`;
                    }).join(" ");
                    return /* @__PURE__ */ D(
                      "g",
                      {
                        role: "list",
                        "aria-label": M.title ?? `Series ${A + 1}`,
                        children: [
                          /* @__PURE__ */ s("title", { children: M.title ?? `Series ${A + 1}` }),
                          M.type === "area" && /* @__PURE__ */ s(
                            "path",
                            {
                              d: `${j} L ${$(N.length - 1)} ${m(I(N[N.length - 1].cat))} L ${$(0)} ${m(I(N[0].cat))} Z`,
                              fill: S,
                              fillOpacity: 0.25,
                              stroke: "none"
                            }
                          ),
                          /* @__PURE__ */ s("path", { d: j, fill: "none", stroke: S, strokeWidth: 2 }),
                          M.stack && /* @__PURE__ */ s("path", { d: T, fill: "none", stroke: "transparent" }),
                          N.map((F, G) => {
                            const Y = p.get(F.cat) ?? 0, U = I(F.cat), te = $(Y), le = m(U + F.val);
                            return /* @__PURE__ */ D("g", { role: "listitem", children: [
                              /* @__PURE__ */ s(
                                "circle",
                                {
                                  cx: te,
                                  cy: le,
                                  r: 4,
                                  fill: S,
                                  stroke: "var(--dx-surface-color)",
                                  strokeWidth: 1.5
                                }
                              ),
                              /* @__PURE__ */ s(
                                "rect",
                                {
                                  x: te - 12,
                                  y: le - 12,
                                  width: 24,
                                  height: 24,
                                  fill: "transparent",
                                  onMouseEnter: () => _ && u({
                                    x: te,
                                    y: le,
                                    text: `${M.title ?? F.cat}: ${F.val}`
                                  }),
                                  onMouseLeave: () => u(null),
                                  onFocus: () => _ && u({
                                    x: te,
                                    y: le,
                                    text: `${M.title ?? F.cat}: ${F.val}`
                                  }),
                                  onBlur: () => u(null),
                                  onClick: () => r?.({
                                    seriesTitle: M.title ?? "",
                                    category: F.cat,
                                    value: F.val,
                                    item: F.item
                                  }),
                                  style: { cursor: "pointer" }
                                }
                              ),
                              M.labels?.visible && /* @__PURE__ */ s(
                                "text",
                                {
                                  x: te,
                                  y: le - 8,
                                  textAnchor: "middle",
                                  className: ot.dataLabel,
                                  children: F.val
                                }
                              )
                            ] }, G);
                          })
                        ]
                      },
                      A
                    );
                  }
                  const L = M.type === "bar";
                  return /* @__PURE__ */ D(
                    "g",
                    {
                      role: "list",
                      "aria-label": M.title ?? `Series ${A + 1}`,
                      children: [
                        /* @__PURE__ */ s("title", { children: M.title ?? `Series ${A + 1}` }),
                        N.map((I, j) => {
                          const T = p.get(I.cat) ?? 0;
                          let F = 0;
                          if (M.stack)
                            for (let ae = 0; ae < A; ae++) {
                              const ve = e[ae];
                              if (ve?.stack !== M.stack) continue;
                              const $e = ve.data.find(
                                (Re) => String(Re[ve.categoryProperty] ?? "") === I.cat
                              );
                              $e && (F += Number($e[ve.valueProperty]) || 0);
                            }
                          const G = F + I.val, Y = e.filter(
                            (ae) => !ae.stack || ae.stack === M.stack
                          ).length, U = f / k.length, te = L ? 18 : Math.max(
                            12,
                            U / (M.stack ? 1 : e.length) - 4
                          ), le = L ? h.l + F / (g.max - g.min || 1) * f : $(T) - te / 2 + (M.stack ? 0 : A % Y * te), ee = L ? h.t + T * y / k.length + 4 : m(G), q = L ? I.val / (g.max - g.min || 1) * f : te - 4, ie = L ? 16 : m(F) - m(G), J = L ? h.l + F / (g.max - g.min || 1) * f : le, de = L ? h.t + T * y / k.length + 4 : ee;
                          return /* @__PURE__ */ D("g", { role: "listitem", children: [
                            /* @__PURE__ */ s(
                              "rect",
                              {
                                x: J,
                                y: de,
                                width: L ? q : te - 4,
                                height: ie,
                                fill: S,
                                rx: 2,
                                onMouseEnter: () => _ && u({
                                  x: J + (L ? q : te) / 2,
                                  y: de,
                                  text: `${M.title ?? I.cat}: ${I.val}`
                                }),
                                onMouseLeave: () => u(null),
                                onClick: () => r?.({
                                  seriesTitle: M.title ?? "",
                                  category: I.cat,
                                  value: I.val,
                                  item: I.item
                                }),
                                style: { cursor: "pointer" }
                              }
                            ),
                            M.labels?.visible && /* @__PURE__ */ s(
                              "text",
                              {
                                x: J + (L ? q : te) / 2,
                                y: de - 4,
                                textAnchor: "middle",
                                className: ot.dataLabel,
                                children: I.val
                              }
                            )
                          ] }, j);
                        })
                      ]
                    },
                    A
                  );
                });
              })()
            ]
          }
        ),
        d && /* @__PURE__ */ s(
          "div",
          {
            className: ot.tooltip,
            style: { left: d.x, top: d.y - 28 },
            children: d.text
          }
        ),
        c && /* @__PURE__ */ s("div", { className: ot.legend, children: e.map((b, O) => /* @__PURE__ */ D("span", { className: ot.legendItem, children: [
          /* @__PURE__ */ s(
            "span",
            {
              className: ot.swatch,
              style: { backgroundColor: C(O, b) },
              "aria-hidden": "true"
            }
          ),
          b.title ?? `Series ${O + 1}`
        ] }, O)) }),
        /* @__PURE__ */ D(
          "table",
          {
            className: ot.visuallyHidden,
            id: `${l.replace(/\s+/g, "-")}-table`,
            children: [
              /* @__PURE__ */ s("caption", { children: l }),
              /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ D("tr", { children: [
                /* @__PURE__ */ s("th", { children: "Series" }),
                /* @__PURE__ */ s("th", { children: "Category" }),
                /* @__PURE__ */ s("th", { children: "Value" })
              ] }) }),
              /* @__PURE__ */ s("tbody", { children: e.map(
                (b) => b.data.map((O, E) => /* @__PURE__ */ D("tr", { children: [
                  /* @__PURE__ */ s("td", { children: b.title ?? "" }),
                  /* @__PURE__ */ s("td", { children: String(O[b.categoryProperty] ?? "") }),
                  /* @__PURE__ */ s("td", { children: String(O[b.valueProperty] ?? "") })
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
  gc as ALERT_ICON,
  Hv as Accordion,
  Cv as Alert,
  jv as AutoGrid,
  Xv as Autocomplete,
  qv as Avatar,
  tv as Badge,
  Ek as Barcode,
  Lv as Body,
  xk as Breadcrumb,
  Q2 as Button,
  ev as Card,
  wk as Carousel,
  Ik as Chart,
  Nv as Checkbox,
  Gv as Checkboxlist,
  sk as Colorpicker,
  Iv as Column,
  Sn as DEFAULT_OPERATOR_BY_TYPE,
  y0 as DEFAULT_PALETTE,
  yv as DataFilter,
  vv as DataGrid,
  kv as DataList,
  rk as Datepicker,
  Sv as Dialog,
  uk as DropZone,
  Wv as Dropdown,
  ov as EmptyState,
  er as FILTER_OPERATORS,
  gk as FabMenu,
  lv as Field,
  iv as Fieldset,
  Ih as Footer,
  cv as Form,
  av as FormField,
  Sk as Gantt,
  Th as Header,
  Ne as Icon,
  $v as Input,
  wv as Label,
  Tv as Layout,
  bk as Link,
  Vv as Listbox,
  tk as Mask,
  fk as Menu,
  _k as MenuItem,
  nk as Numeric,
  Gl as Pager,
  pk as PanelMenu,
  hk as PanelMenuItem,
  ek as Password,
  Nk as PickList,
  Dk as Pivot,
  mk as ProfileMenu,
  Rv as Progress,
  zk as QRCode,
  Yv as Radiobuttonlist,
  ok as Rating,
  Ev as Row,
  Ok as Scheduler,
  ik as SecurityCode,
  yn as Select,
  Zv as Selectbar,
  Vh as Sidebar,
  Pv as SidebarToggle,
  ck as SignaturePad,
  zv as Skeleton,
  lk as Slider,
  Qv as Splitbutton,
  vk as Splitter,
  Av as Stack,
  sv as Stat,
  yk as Steps,
  ci as Switch,
  rv as Table,
  Fv as Tabs,
  Uv as Text,
  Kv as Textarea,
  oi as Textbox,
  Bv as ThemeSwitcher,
  Mk as Timeline,
  ak as Timespanpicker,
  Mv as ToastProvider,
  kk as Toc,
  Jv as Togglebutton,
  Ov as Tooltip,
  $k as Tree,
  dk as Upload,
  Ck as VirtualGrid,
  nr as applyFilters,
  na as applyGridState,
  Mn as columnValue,
  mv as compare,
  xv as custom,
  Ql as cycleSort,
  sa as defaultOperatorForType,
  uv as email,
  Rs as formatMasked,
  Ds as formatValue,
  Qn as getByPath,
  nv as iconNames,
  tr as matchesFilters,
  hv as maxLength,
  fv as minLength,
  ta as paginate,
  _v as pattern,
  pv as range,
  dv as required,
  gv as requiredTrue,
  gs as resolveVariant,
  nl as runValidators,
  vn as shadeClass,
  bl as sortItems,
  ea as sortedItems,
  hl as toFilterString,
  xl as toODataFilterString,
  tl as useFormContext,
  bv as useFormField,
  rr as useMediaQuery,
  Dv as useToast
};
