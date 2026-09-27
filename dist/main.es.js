import { jsx as s, jsxs as M, Fragment as Oe } from "react/jsx-runtime";
import { forwardRef as Fe, useId as qe, isValidElement as dt, cloneElement as ms, useState as X, useRef as se, useCallback as B, useMemo as be, useContext as dn, createContext as Bn, useEffect as ge, Fragment as gs, Children as qn, useImperativeHandle as xs, useLayoutEffect as pr } from "react";
function kn(e) {
  return e == null || e === "default" || e === "medium" ? null : `shade-${e}`;
}
const hr = "_button_1anap_1", mr = "_filled_1anap_36", gr = "_flat_1anap_55", xr = "_outlined_1anap_58", br = "_text_1anap_63", yr = "_loading_1anap_504", vr = "_spinner_1anap_507", kr = "_xs_1anap_523", wr = "_sm_1anap_529", $r = "_md_1anap_535", Nr = "_lg_1anap_541", Or = "_xl_1anap_547", Sr = "_iconOnly_1anap_553", Mr = "_fullWidth_1anap_583", Bt = {
  button: hr,
  filled: mr,
  flat: gr,
  outlined: xr,
  text: br,
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
  loading: yr,
  spinner: vr,
  "dx-spin": "_dx-spin_1anap_1",
  xs: kr,
  sm: wr,
  md: $r,
  lg: Nr,
  xl: Or,
  iconOnly: Sr,
  fullWidth: Mr
};
function Dr(e, t) {
  const n = t, r = e ?? "filled";
  return { variant: r === "filled" || r === "flat" || r === "outlined" || r === "text" ? r : "filled", style: n ?? "primary" };
}
const cv = Fe(
  function(t, n) {
    const {
      variant: r = "filled",
      severity: i,
      shade: c = "default",
      size: d = "md",
      fullWidth: o = !1,
      iconOnly: l = !1,
      loading: a = !1,
      visible: u = !0,
      className: f,
      disabled: k,
      children: v,
      ...w
    } = t;
    if (u === !1) return null;
    const x = Dr(r, i), p = x.style === "light" || x.style === "dark" ? null : kn(c), _ = [
      Bt.button,
      Bt[x.variant],
      Bt[`style-${x.style}`],
      p ? Bt[p] : null,
      Bt[d],
      o ? Bt.fullWidth : null,
      l ? Bt.iconOnly : null,
      a ? Bt.loading : null,
      // Press feedback on every button (Radzen material parity).
      "dx-ripple",
      f
    ].filter(Boolean).join(" "), y = /* @__PURE__ */ M(Oe, { children: [
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
          className: _,
          "aria-disabled": E || void 0,
          "aria-busy": a || void 0,
          onClick: (D) => {
            if (E) {
              D.preventDefault();
              return;
            }
            b?.(D);
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
        className: _,
        disabled: k || a,
        "aria-busy": a || void 0,
        ...C,
        children: y
      }
    );
  }
), Cr = "_card_16nyh_1", zr = "_elevated_16nyh_8", Er = "_filled_16nyh_13", Ir = "_outlined_16nyh_18", Ar = "_interactive_16nyh_22", jr = "_text_16nyh_30", Tr = "_header_16nyh_46", Lr = "_body_16nyh_53", Pr = "_footer_16nyh_63", wn = {
  card: Cr,
  elevated: zr,
  filled: Er,
  outlined: Ir,
  interactive: Ar,
  text: jr,
  header: Tr,
  body: Lr,
  footer: Pr
}, dv = Fe(function({
  variant: t = "elevated",
  header: n,
  footer: r,
  className: i,
  visible: c = !0,
  children: d,
  onKeyDown: o,
  ...l
}, a) {
  if (c === !1) return null;
  const u = t === "interactive";
  return (
    // Interactivity is conditional on variant="interactive" (role + tabIndex
    // travel together); static analysis cannot see that.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ M(
      "div",
      {
        ref: a,
        role: u ? "button" : void 0,
        tabIndex: u ? 0 : void 0,
        onKeyDown: (f) => {
          o?.(f), !(!u || f.key !== "Enter" && f.key !== " ") && (f.preventDefault(), f.currentTarget.click());
        },
        className: [wn.card, wn[t], i].filter(Boolean).join(" "),
        ...l,
        children: [
          n != null && /* @__PURE__ */ s("div", { className: wn.header, children: n }),
          /* @__PURE__ */ s("div", { className: wn.body, children: d }),
          r != null && /* @__PURE__ */ s("div", { className: wn.footer, children: r })
        ]
      }
    )
  );
});
function bs(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const Rr = "_badge_154mm_1", Br = "_xs_154mm_21", qr = "_sm_154mm_26", Fr = "_md_154mm_31", Hr = "_lg_154mm_36", Kr = "_xl_154mm_41", Ur = "_neutral_154mm_47", Wr = "_primary_154mm_52", Xr = "_secondary_154mm_61", Vr = "_light_154mm_66", Gr = "_base_154mm_71", Yr = "_dark_154mm_76", Zr = "_info_154mm_81", Jr = "_success_154mm_86", Qr = "_warning_154mm_95", eo = "_danger_154mm_104", to = "_filled_154mm_111", no = "_outlined_154mm_161", so = "_text_154mm_213", $n = {
  badge: Rr,
  xs: Br,
  sm: qr,
  md: Fr,
  lg: Hr,
  xl: Kr,
  neutral: Ur,
  primary: Wr,
  secondary: Xr,
  light: Vr,
  base: Gr,
  dark: Yr,
  info: Zr,
  success: Jr,
  warning: Qr,
  danger: eo,
  filled: to,
  outlined: no,
  text: so,
  "shade-lighter": "_shade-lighter_154mm_484",
  "shade-light": "_shade-light_154mm_484",
  "shade-dark": "_shade-dark_154mm_492",
  "shade-darker": "_shade-darker_154mm_495"
}, uv = Fe(function({
  severity: t = "primary",
  variant: n = "filled",
  shade: r,
  size: i = "md",
  className: c,
  visible: d = !0,
  children: o,
  ...l
}, a) {
  if (d === !1) return null;
  const u = t, f = bs(n, "filled"), k = kn(r);
  return /* @__PURE__ */ s(
    "span",
    {
      ref: a,
      className: [
        $n.badge,
        $n[i],
        $n[u],
        $n[f],
        k ? $n[k] : null,
        c
      ].filter(Boolean).join(" "),
      ...l,
      children: o
    }
  );
}), ro = "_xs_2a6lm_2", oo = "_sm_2a6lm_7", lo = "_md_2a6lm_1", ao = "_lg_2a6lm_17", io = "_xl_2a6lm_22", co = {
  xs: ro,
  sm: oo,
  md: lo,
  lg: ao,
  xl: io
}, fv = [
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
], uo = {
  check: /* @__PURE__ */ s("path", { d: "M20 6L9 17l-5-5" }),
  close: /* @__PURE__ */ s("path", { d: "M18 6L6 18M6 6l12 12" }),
  "chevron-down": /* @__PURE__ */ s("path", { d: "M6 9l6 6 6-6" }),
  "chevron-left": /* @__PURE__ */ s("path", { d: "M15 18l-6-6 6-6" }),
  "chevron-right": /* @__PURE__ */ s("path", { d: "M9 18l6-6-6-6" }),
  "chevron-up": /* @__PURE__ */ s("path", { d: "M18 15l-6-6-6 6" }),
  search: /* @__PURE__ */ M(Oe, { children: [
    /* @__PURE__ */ s("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ s("path", { d: "M21 21l-4.3-4.3" })
  ] }),
  plus: /* @__PURE__ */ s("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ s("path", { d: "M5 12h14" }),
  alert: /* @__PURE__ */ M(Oe, { children: [
    /* @__PURE__ */ s("path", { d: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" }),
    /* @__PURE__ */ s("path", { d: "M12 9v4M12 17h.01" })
  ] }),
  info: /* @__PURE__ */ M(Oe, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ s("path", { d: "M12 16v-4M12 8h.01" })
  ] }),
  "arrow-right": /* @__PURE__ */ s("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  "arrow-left": /* @__PURE__ */ s("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  "external-link": /* @__PURE__ */ M(Oe, { children: [
    /* @__PURE__ */ s("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
    /* @__PURE__ */ s("path", { d: "M15 3h6v6M10 14L21 3" })
  ] }),
  copy: /* @__PURE__ */ M(Oe, { children: [
    /* @__PURE__ */ s("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ s("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] }),
  trash: /* @__PURE__ */ s(Oe, { children: /* @__PURE__ */ s("path", { d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" }) }),
  edit: /* @__PURE__ */ M(Oe, { children: [
    /* @__PURE__ */ s("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ s("path", { d: "M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  settings: /* @__PURE__ */ M(Oe, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ s("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] }),
  user: /* @__PURE__ */ M(Oe, { children: [
    /* @__PURE__ */ s("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ s("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ M(Oe, { children: [
    /* @__PURE__ */ s("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ s("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ s("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  download: /* @__PURE__ */ s("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  upload: /* @__PURE__ */ s("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  menu: /* @__PURE__ */ s("path", { d: "M3 12h18M3 6h18M3 18h18" }),
  "more-horizontal": /* @__PURE__ */ M(Oe, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ s("circle", { cx: "19", cy: "12", r: "1" }),
    /* @__PURE__ */ s("circle", { cx: "5", cy: "12", r: "1" })
  ] }),
  mail: /* @__PURE__ */ M(Oe, { children: [
    /* @__PURE__ */ s("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ s("path", { d: "M22 6l-10 7L2 6" })
  ] }),
  lock: /* @__PURE__ */ M(Oe, { children: [
    /* @__PURE__ */ s("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ s("path", { d: "M7 11V7a5 5 0 0110 0v4" })
  ] }),
  eye: /* @__PURE__ */ M(Oe, { children: [
    /* @__PURE__ */ s("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  "eye-off": /* @__PURE__ */ M(Oe, { children: [
    /* @__PURE__ */ s("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ s("path", { d: "M1 1l22 22" })
  ] }),
  refresh: /* @__PURE__ */ M(Oe, { children: [
    /* @__PURE__ */ s("path", { d: "M23 4v6h-6M1 20v-6h6" }),
    /* @__PURE__ */ s("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
  ] }),
  calendar: /* @__PURE__ */ M(Oe, { children: [
    /* @__PURE__ */ s("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ s("path", { d: "M16 2v4M8 2v4M3 10h18" })
  ] }),
  clock: /* @__PURE__ */ M(Oe, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ s("path", { d: "M12 6v6l4 2" })
  ] }),
  "check-circle": /* @__PURE__ */ M(Oe, { children: [
    /* @__PURE__ */ s("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ s("path", { d: "M22 4L12 14.01l-3-3" })
  ] }),
  "x-circle": /* @__PURE__ */ M(Oe, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ s("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] }),
  shield: /* @__PURE__ */ s(Oe, { children: /* @__PURE__ */ s("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  globe: /* @__PURE__ */ M(Oe, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ s("path", { d: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
  ] }),
  file: /* @__PURE__ */ M(Oe, { children: [
    /* @__PURE__ */ s("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
    /* @__PURE__ */ s("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
  ] }),
  folder: /* @__PURE__ */ s("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" }),
  home: /* @__PURE__ */ M(Oe, { children: [
    /* @__PURE__ */ s("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
    /* @__PURE__ */ s("path", { d: "M9 22V12h6v10" })
  ] }),
  key: /* @__PURE__ */ s(Oe, { children: /* @__PURE__ */ s("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) }),
  link: /* @__PURE__ */ M(Oe, { children: [
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
  ban: /* @__PURE__ */ M(Oe, { children: [
    /* @__PURE__ */ s("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ s("path", { d: "M4.93 4.93l14.14 14.14" })
  ] })
}, Ne = Fe(function({ name: t, size: n = "md", strokeWidth: r = 2, className: i, ...c }, d) {
  const o = typeof n == "string";
  return /* @__PURE__ */ s(
    "svg",
    {
      ref: d,
      className: [o ? co[n] : null, i].filter(Boolean).join(" "),
      width: o ? void 0 : n,
      height: o ? void 0 : n,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: r,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      ...c,
      children: uo[t]
    }
  );
}), fo = "_stat_sjin9_1", _o = "_label_sjin9_8", po = "_row_sjin9_16", ho = "_value_sjin9_22", mo = "_delta_sjin9_28", go = "_success_sjin9_33", xo = "_danger_sjin9_37", bo = "_neutral_sjin9_41", yo = "_hint_sjin9_45", nn = {
  stat: fo,
  label: _o,
  row: po,
  value: ho,
  delta: mo,
  success: go,
  danger: xo,
  neutral: bo,
  hint: yo
}, _v = Fe(function({ label: t, value: n, delta: r, deltaTone: i = "neutral", hint: c, className: d, ...o }, l) {
  return /* @__PURE__ */ M(
    "div",
    {
      ref: l,
      className: [nn.stat, d].filter(Boolean).join(" "),
      ...o,
      children: [
        /* @__PURE__ */ s("div", { className: nn.label, children: t }),
        /* @__PURE__ */ M("div", { className: nn.row, children: [
          /* @__PURE__ */ s("div", { className: nn.value, children: n }),
          r != null && /* @__PURE__ */ s("div", { className: [nn.delta, nn[i]].join(" "), children: r })
        ] }),
        c != null && /* @__PURE__ */ s("div", { className: nn.hint, children: c })
      ]
    }
  );
}), vo = "_wrap_1nflq_1", ko = "_table_1nflq_8", wo = "_caption_1nflq_14", $o = "_none_1nflq_51", No = "_horizontal_1nflq_57", Oo = "_vertical_1nflq_67", So = "_alternating_1nflq_85", Mo = "_start_1nflq_89", Do = "_center_1nflq_93", Co = "_end_1nflq_97", zo = "_empty_1nflq_101", Yt = {
  wrap: vo,
  table: ko,
  caption: wo,
  none: $o,
  horizontal: No,
  vertical: Oo,
  alternating: So,
  start: Mo,
  center: Do,
  end: Co,
  empty: zo
};
function pv({
  columns: e,
  rows: t,
  rowKey: n,
  empty: r,
  caption: i,
  gridLines: c = "default",
  allowAlternatingRows: d = !0,
  className: o,
  visible: l = !0
}) {
  if (l === !1) return null;
  const a = c === "default" || c === "both" ? "" : Yt[c];
  return /* @__PURE__ */ M("div", { className: [Yt.wrap, o].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ M(
      "table",
      {
        className: [
          Yt.table,
          a,
          d ? Yt.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          i != null && /* @__PURE__ */ s("caption", { className: Yt.caption, children: i }),
          /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ s("tr", { children: e.map((u) => /* @__PURE__ */ s(
            "th",
            {
              className: u.align != null ? Yt[u.align] : void 0,
              scope: "col",
              children: u.header
            },
            u.key
          )) }) }),
          /* @__PURE__ */ s("tbody", { children: t.map((u) => /* @__PURE__ */ s("tr", { children: e.map((f) => /* @__PURE__ */ s(
            "td",
            {
              className: f.align != null ? Yt[f.align] : void 0,
              children: f.render != null ? f.render(u) : u[f.key]
            },
            f.key
          )) }, n(u))) })
        ]
      }
    ),
    t.length === 0 && r != null && /* @__PURE__ */ s("div", { className: Yt.empty, children: r })
  ] });
}
const Eo = "_emptyState_1swxw_1", Io = "_icon_1swxw_13", Ao = "_title_1swxw_18", jo = "_description_1swxw_24", To = "_action_1swxw_30", Nn = {
  emptyState: Eo,
  icon: Io,
  title: Ao,
  description: jo,
  action: To
};
function hv({
  icon: e,
  title: t,
  description: n,
  action: r,
  className: i,
  visible: c = !0
}) {
  return c === !1 ? null : /* @__PURE__ */ M("div", { className: [Nn.emptyState, i].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ s("div", { className: Nn.icon, children: e }),
    /* @__PURE__ */ s("div", { className: Nn.title, children: t }),
    n != null && /* @__PURE__ */ s("div", { className: Nn.description, children: n }),
    r != null && /* @__PURE__ */ s("div", { className: Nn.action, children: r })
  ] });
}
const Lo = "_field_149oz_1", Po = "_label_149oz_8", Ro = "_required_149oz_14", Bo = "_hint_149oz_19", qo = "_error_149oz_24", On = {
  field: Lo,
  label: Po,
  required: Ro,
  hint: Bo,
  error: qo
};
function mv({
  label: e,
  htmlFor: t,
  required: n,
  hint: r,
  supporting: i,
  error: c,
  children: d,
  className: o,
  visible: l = !0
}) {
  const a = r ?? i, u = qe(), f = qe(), k = qe();
  if (l === !1) return null;
  const v = c != null ? f : a != null ? k : null, w = typeof d == "function" ? d({ inputId: u, hintId: k, errorId: f }) : d, x = dt(w) && typeof w.props.id == "string" ? w.props.id : void 0, g = x ?? t ?? u, p = dt(w) && (v != null || x == null && typeof w.type == "string"), _ = x != null || t != null || p, y = p && dt(w) ? ms(w, {
    id: g,
    "aria-describedby": v != null ? [
      w.props["aria-describedby"],
      v
    ].filter(($) => typeof $ == "string").join(" ") || void 0 : w.props["aria-describedby"],
    "aria-invalid": c != null ? !0 : w.props["aria-invalid"]
  }) : w;
  return /* @__PURE__ */ M("div", { className: [On.field, o].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ M(
      "label",
      {
        className: On.label,
        htmlFor: _ ? g : void 0,
        children: [
          e,
          n === !0 && /* @__PURE__ */ s("span", { className: On.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    y,
    c != null ? /* @__PURE__ */ s("div", { id: f, className: On.error, "aria-live": "polite", children: c }) : a != null ? /* @__PURE__ */ s("div", { id: k, className: On.hint, children: a }) : null
  ] });
}
const Fo = "_formfield_1kmwl_1", Ho = "_content_1kmwl_8", Ko = "_floating_1kmwl_43", Uo = "_label_1kmwl_111", Wo = "_start_1kmwl_132", Xo = "_required_1kmwl_169", Vo = "_end_1kmwl_175", Go = "_filled_1kmwl_192", Yo = "_flat_1kmwl_199", Zo = "_helper_1kmwl_206", Jo = "_invalid_1kmwl_211", Et = {
  formfield: Fo,
  content: Ho,
  floating: Ko,
  label: Uo,
  start: Wo,
  required: Xo,
  end: Vo,
  filled: Go,
  flat: Yo,
  helper: Zo,
  invalid: Jo
};
function gv({
  text: e,
  start: t,
  end: n,
  helper: r,
  component: i,
  allowFloatingLabel: c = !0,
  variant: d = "outlined",
  invalid: o = !1,
  required: l = !1,
  children: a,
  className: u,
  visible: f = !0
}) {
  const k = qe(), v = qe();
  if (f === !1) return null;
  const w = i ?? k, x = typeof a == "function" ? a({
    inputId: w
  }) : a, g = dt(x) ? x.type : null, p = typeof g == "string", _ = dt(x) && typeof g != "symbol", y = dt(x) ? x.props : null, $ = typeof y?.id == "string" ? y.id : void 0, m = p && dt(x) ? x.type.toLowerCase() : null, C = m != null && (m === "input" ? typeof y?.type != "string" || y.type.toLowerCase() !== "hidden" : m === "button" || m === "meter" || m === "output" || m === "progress" || m === "select" || m === "textarea"), b = _ && (r != null || o || $ == null && C), O = $ != null || i != null || b, E = m === "input" && typeof y?.type == "string" ? y.type.toLowerCase() : null, D = m === "textarea" || m === "input" && (E == null || [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number"
  ].includes(E)), I = b && dt(x) ? ms(
    x,
    {
      id: $ ?? w,
      ...c && D && y?.placeholder == null ? { placeholder: " " } : {},
      ...r != null ? {
        "aria-describedby": [
          y?.["aria-describedby"],
          v
        ].filter((h) => typeof h == "string").join(" ")
      } : {},
      ...o ? {
        "aria-invalid": !0
      } : {}
    }
  ) : x, N = e != null ? /* @__PURE__ */ M(
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
  return /* @__PURE__ */ M(
    "div",
    {
      className: [
        Et.formfield,
        Et[d],
        c ? Et.floating : null,
        o ? Et.invalid : null,
        u
      ].filter(Boolean).join(" "),
      children: [
        c ? null : N,
        /* @__PURE__ */ M("div", { className: Et.content, children: [
          t != null && /* @__PURE__ */ s("div", { className: Et.start, children: t }),
          I,
          c ? N : null,
          n != null && /* @__PURE__ */ s("div", { className: Et.end, children: n })
        ] }),
        r != null && /* @__PURE__ */ s("div", { id: v, className: Et.helper, children: r })
      ]
    }
  );
}
const Qo = "_fieldset_18z6t_1", el = "_legend_18z6t_11", tl = "_legendText_18z6t_20", nl = "_toggle_18z6t_24", sl = "_content_18z6t_45", rl = "_summary_18z6t_49", sn = {
  fieldset: Qo,
  legend: el,
  legendText: tl,
  toggle: nl,
  content: sl,
  summary: rl
};
function xv({
  text: e,
  headerTemplate: t,
  icon: n,
  iconColor: r,
  allowCollapse: i = !1,
  collapsed: c,
  defaultCollapsed: d = !1,
  summary: o,
  expandTitle: l,
  collapseTitle: a,
  expandAriaLabel: u,
  collapseAriaLabel: f,
  onExpand: k,
  onCollapse: v,
  children: w,
  className: x,
  visible: g = !0
}) {
  const p = qe(), [_, y] = X(d);
  if (g === !1) return null;
  const $ = c ?? _, m = i ? `${p}-content` : void 0, C = () => {
    const N = !$;
    c === void 0 && y(N), N ? v?.() : k?.();
  }, b = i || e != null || n != null || t != null, O = i ? $ : !1, E = i && $ && o != null, D = O ? l ?? "Expand" : a ?? "Collapse", I = O ? u ?? "Expand" : f ?? "Collapse";
  return /* @__PURE__ */ M(
    "fieldset",
    {
      className: [sn.fieldset, x].filter(Boolean).join(" "),
      children: [
        b ? /* @__PURE__ */ s("legend", { className: sn.legend, children: i ? /* @__PURE__ */ M(Oe, { children: [
          /* @__PURE__ */ M(
            "button",
            {
              type: "button",
              className: sn.toggle,
              title: D,
              "aria-label": e == null ? I : void 0,
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
                    ...r != null ? { style: { color: r } } : {}
                  }
                ),
                e != null && /* @__PURE__ */ s("span", { className: sn.legendText, children: e })
              ]
            }
          ),
          t
        ] }) : /* @__PURE__ */ M(Oe, { children: [
          n != null && /* @__PURE__ */ s(
            Ne,
            {
              name: n,
              "aria-hidden": "true",
              ...r != null ? { style: { color: r } } : {}
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
        E ? /* @__PURE__ */ s("div", { className: sn.summary, children: o }) : null
      ]
    }
  );
}
const ol = "_form_19k3s_1", ll = {
  form: ol
}, tr = Bn(null);
function al() {
  const e = dn(tr);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function bv({
  model: e,
  onSubmit: t,
  onInvalidSubmit: n,
  action: r,
  method: i,
  children: c,
  className: d
}) {
  const [o, l] = X({}), [a, u] = X(0), f = se(o);
  f.current = o;
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
    for (const $ of Object.values(f.current)) {
      const m = $.validate();
      m.length > 0 && (y[$.name] = m);
    }
    return y;
  }, []), x = B(() => {
    const y = w();
    u(($) => $ + 1), Object.keys(y).length === 0 ? t?.(e) : n?.(y);
  }, [w, e, t, n]), g = (y) => {
    r != null && i != null || (y.preventDefault(), x());
  }, p = be(
    () => ({ registerField: k, unregisterField: v, submit: x, submitCount: a }),
    [k, v, x, a]
  ), _ = [ll.form, d].filter(Boolean).join(" ");
  return /* @__PURE__ */ s(tr.Provider, { value: p, children: /* @__PURE__ */ s(
    "form",
    {
      className: _,
      onSubmit: g,
      action: r,
      method: i,
      noValidate: !0,
      children: c
    }
  ) });
}
const un = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", yv = (e = "Required") => (t) => un(t) ? e : null, vv = (e = "Invalid email") => (t) => un(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, kv = (e, t = "Invalid format") => (n) => un(n) || e.test(String(n)) ? null : t, wv = (e, t = `Minimum ${e} characters`) => (n) => un(n) || String(n).length >= e ? null : t, $v = (e, t = `Maximum ${e} characters`) => (n) => un(n) || String(n).length <= e ? null : t, Nv = (e, t, n = `Between ${e} and ${t}`) => (r) => {
  if (un(r)) return null;
  const i = Number(r);
  return !Number.isNaN(i) && i >= e && i <= t ? null : n;
}, Ov = (e, t = "Values do not match") => (n, r) => {
  if (un(n)) return null;
  const i = typeof e == "function" ? e(r) : e;
  return n === i ? null : t;
}, Sv = (e = "Required") => (t) => t === !0 ? null : e, Mv = (e) => (t, n) => e(t, n);
function il(e, t, n) {
  return e.map((r) => r(t, n)).filter((r) => r != null);
}
function Dv(e, t) {
  const { registerField: n, unregisterField: r, submitCount: i } = al(), [c, d] = X(t?.initialValue), [o, l] = X(!1), [a, u] = X(!1), f = se(() => []);
  f.current = () => il(t?.validate ?? [], c), ge(() => (n({ name: e, validate: () => f.current() }), () => r(e)), [e, n, r]), ge(() => {
    i > 0 && (l(!0), u(!1));
  }, [i]);
  const k = o && !a ? f.current() : [];
  return { value: c, setValue: (w) => {
    d(w), u(!0);
  }, errors: k };
}
const cl = "_select_1vjst_1", dl = "_invalid_1vjst_33", ul = "_xs_1vjst_40", fl = "_sm_1vjst_48", _l = "_md_1vjst_56", pl = "_lg_1vjst_62", hl = "_xl_1vjst_68", rs = {
  select: cl,
  invalid: dl,
  xs: ul,
  sm: fl,
  md: _l,
  lg: pl,
  xl: hl
}, vn = Fe(
  function({ size: t = "md", invalid: n = !1, options: r, children: i, className: c, ...d }, o) {
    return /* @__PURE__ */ s(
      "select",
      {
        ref: o,
        "data-size": t,
        className: [
          rs.select,
          rs[t],
          n ? rs.invalid : null,
          c
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...d,
        children: r != null ? r.map((l) => /* @__PURE__ */ s(
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
), nr = [
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
}, ml = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
];
function gl(e) {
  return ml.includes(e);
}
function es(e, t) {
  return t.split(".").reduce((n, r) => {
    if (n != null)
      return n[r];
  }, e);
}
function $s(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function Pn(e, t) {
  const n = $s(e), r = $s(t);
  if (typeof n == "number" && typeof r == "number") return n - r;
  const i = String(n ?? ""), c = String(r ?? "");
  return i < c ? -1 : i > c ? 1 : 0;
}
function ss(e) {
  if (e.secondOperator == null) return !1;
  if (gl(e.secondOperator)) return !0;
  const t = e.secondValue;
  return t != null && t !== "";
}
function Ns(e, t, n) {
  const r = es(t, e.property), i = Os(
    r,
    e.value,
    e.operator,
    n
  );
  if (!ss(e)) return i;
  const c = Os(
    r,
    e.secondValue,
    e.secondOperator,
    n
  );
  return (e.logicalOperator ?? "And") === "And" ? i && c : i || c;
}
function Os(e, t, n, r) {
  const i = r === "CaseInsensitive", c = (l) => i && typeof l == "string" ? l.toLowerCase() : l, d = c(e), o = c(t);
  switch (n) {
    case "Equals":
      return d === o || Array.isArray(d) && d.some((l) => c(l) === o);
    case "NotEquals":
      return d !== o && !(Array.isArray(d) && d.some((l) => c(l) === o));
    case "LessThan":
      return Pn(d, o) < 0;
    case "LessThanOrEquals":
      return Pn(d, o) <= 0;
    case "GreaterThan":
      return Pn(d, o) > 0;
    case "GreaterThanOrEquals":
      return Pn(d, o) >= 0;
    case "Contains":
      return typeof d == "string" && typeof o == "string" && d.includes(o);
    case "StartsWith":
      return typeof d == "string" && typeof o == "string" && d.startsWith(o);
    case "EndsWith":
      return typeof d == "string" && typeof o == "string" && d.endsWith(o);
    case "DoesNotContain":
      return typeof d == "string" && typeof o == "string" && !d.includes(o);
    case "In":
      return Array.isArray(o) && o.some((l) => c(l) === d);
    case "NotIn":
      return Array.isArray(o) && !o.some((l) => c(l) === d);
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
function ys(e) {
  return "filters" in e;
}
function sr(e, t, n = {}) {
  const r = n.logicalOperator ?? "And", i = n.caseSensitivity ?? "CaseInsensitive";
  if (ys(t)) {
    if (t.filters.length === 0) return !0;
    const c = t.operator ?? r;
    return t.filters[c === "Or" ? "some" : "every"](
      (d) => sr(e, d, { logicalOperator: c, caseSensitivity: i })
    );
  }
  return t.operator === "Custom", Ns(t, e, i);
}
function rr(e, t, n = {}) {
  return e.filter((r) => sr(r, t, n));
}
function xl(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function xt(e) {
  return typeof e == "string" ? `"${xl(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(xt).join(", ")}]` : `"${String(e)}"`;
}
function bl(e) {
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
  const n = e.logicalOperator ?? "And", r = e.secondOperator;
  return `(${t(e.operator, e.value)} ${n} ${t(
    r,
    e.secondValue
  )})`;
}
function yl(e) {
  return ys(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(yl).filter(Boolean).join(` ${e.operator} `)})` : bl(e);
}
function vl(e) {
  return e.replace(/'/g, "''");
}
const kl = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function wl(e, t) {
  const n = e.property, r = t === "CaseInsensitive", i = (a) => r ? `tolower(${a})` : a, c = (a) => typeof a == "string" ? `'${vl(a)}'` : a instanceof Date ? `'${a.toISOString()}'` : String(a ?? ""), d = (a, u) => {
    const f = typeof u == "string", k = f && r ? i(n) : n;
    switch (a) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${k} ${kl[a]} ${f && r ? i(c(u)) : c(u)}`;
      case "Contains":
        return `contains(${i(n)}, ${i(c(u))})`;
      case "StartsWith":
        return `startswith(${i(n)}, ${i(c(u))})`;
      case "EndsWith":
        return `endswith(${i(n)}, ${i(c(u))})`;
      case "DoesNotContain":
        return `not(contains(${i(n)}, ${i(c(u))}))`;
      case "In":
        return Array.isArray(u) ? `${k} in (${u.map((v) => c(v)).join(", ")})` : `${k} in (${c(u)})`;
      case "NotIn":
        return Array.isArray(u) ? `not(${k} in (${u.map((v) => c(v)).join(", ")}))` : `not(${k} in (${c(u)}))`;
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
    return d(e.operator, e.value);
  const o = (e.logicalOperator ?? "And") === "And" ? "and" : "or", l = e.secondOperator;
  return `(${d(e.operator, e.value)} ${o} ${d(
    l,
    e.secondValue
  )})`;
}
function $l(e, t = {}) {
  const n = t.caseSensitivity ?? "CaseInsensitive";
  if (ys(e)) {
    if (e.filters.length === 0) return "";
    const r = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((i) => $l(i, { caseSensitivity: n })).filter(Boolean).join(` ${r} `)})`;
  }
  return wl(e, n);
}
function Nl(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((n, r) => {
    for (const i of t) {
      const c = i.sortOrder === "Ascending" ? 1 : -1, d = Pn(
        es(n, i.property),
        es(r, i.property)
      );
      if (d !== 0) return d * c;
    }
    return 0;
  });
}
const Ol = "_filter_1h8zc_1", Sl = "_rows_1h8zc_9", Ml = "_row_1h8zc_9", Dl = "_join_1h8zc_21", Cl = "_property_1h8zc_30", zl = "_operator_1h8zc_34", El = "_value_1h8zc_38", Il = "_remove_1h8zc_42", Al = "_bar_1h8zc_58", jl = "_add_1h8zc_64", Tl = "_custom_1h8zc_78", Ll = "_summary_1h8zc_82", Pl = "_second_1h8zc_87", Rl = "_secondAdd_1h8zc_91", Bl = "_addSecond_1h8zc_95", ql = "_joinSelect_1h8zc_109", Ye = {
  filter: Ol,
  rows: Sl,
  row: Ml,
  join: Dl,
  property: Cl,
  operator: zl,
  value: El,
  remove: Il,
  bar: Al,
  add: jl,
  custom: Tl,
  summary: Ll,
  second: Pl,
  secondAdd: Rl,
  addSecond: Bl,
  joinSelect: ql
}, Mn = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
], Ss = {
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
function Ms({
  property: e,
  value: t,
  onChange: n
}) {
  if (e.editor != null)
    return /* @__PURE__ */ s(Oe, { children: e.editor({ value: t, onChange: n }) });
  const r = e.type ?? "string";
  if (r === "enum" && e.values != null)
    return /* @__PURE__ */ s(
      vn,
      {
        "aria-label": e.title ?? e.name,
        className: Ye.value,
        options: e.values,
        value: String(t ?? ""),
        onChange: (c) => n(c.target.value)
      }
    );
  if (r === "boolean")
    return /* @__PURE__ */ s(
      vn,
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
  const i = r === "number" ? { type: "number" } : r === "date" ? { type: "date" } : { type: "text" };
  return /* @__PURE__ */ s(
    "input",
    {
      "aria-label": e.title ?? e.name,
      className: Ye.value,
      ...i,
      value: t == null ? "" : String(t),
      onChange: (c) => n(
        r === "number" && c.target.value !== "" ? Number(c.target.value) : c.target.value
      )
    }
  );
}
function Cv({
  properties: e,
  logicalOperator: t = "And",
  filterCaseSensitivity: n = "CaseInsensitive",
  initialRows: r,
  uniqueFilters: i = !1,
  className: c,
  viewChanged: d,
  items: o,
  children: l
}) {
  const [a, u] = X(
    () => r != null && r.length > 0 ? r.map((p, _) => ({ id: _, ...p })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: Sn[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), f = (p, _) => {
    u(
      (y) => y.map(($) => $.id === p ? { ...$, ..._ } : $)
    );
  }, k = () => {
    const p = a[a.length - 1], _ = Math.max(0, ...a.map(($) => $.id)) + 1, y = e[0];
    u(($) => [
      ...$,
      {
        id: _,
        property: p?.property ?? y?.name ?? "",
        operator: Sn[e.find(
          (m) => m.name === (p?.property ?? y?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, v = (p) => {
    u(
      (_) => _.length > 1 ? _.filter((y) => y.id !== p) : _
    );
  }, w = be(() => {
    const p = [];
    for (const _ of a) {
      if (_.property === "" || (_.value == null || _.value === "") && !Mn.includes(_.operator)) continue;
      const $ = {
        property: _.property,
        operator: _.operator,
        value: _.value
      }, { secondOperator: m } = _;
      m != null && ss(_) && ($.secondOperator = m, $.secondValue = _.secondValue, $.logicalOperator = _.logicalOperator ?? "And"), p.push($);
    }
    return p;
  }, [a]), x = be(() => o == null || w.length === 0 ? o : rr(o, {
    operator: t,
    filters: w
  }, {
    caseSensitivity: n
  }), [o, w, t, n]);
  ge(() => {
    d != null && o != null && d(x ?? []);
  }, [x]);
  const g = (p) => e.find((_) => _.name === p) ?? { name: p, type: "string" };
  return /* @__PURE__ */ M("div", { className: [Ye.filter, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ s("div", { className: Ye.rows, role: "group", "aria-label": "Filter conditions", children: a.map((p, _) => {
      const y = g(p.property), $ = i ? [Sn[y.type ?? "string"]] : nr, m = !Mn.includes(p.operator), C = p.secondOperator != null;
      return /* @__PURE__ */ M(gs, { children: [
        /* @__PURE__ */ M("div", { className: Ye.row, children: [
          _ > 0 ? /* @__PURE__ */ s("span", { className: Ye.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ s(
            vn,
            {
              "aria-label": `Condition ${_ + 1} property`,
              className: Ye.property,
              value: p.property,
              onChange: (b) => {
                const O = e.find(
                  (E) => E.name === b.target.value
                );
                f(p.id, {
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
            vn,
            {
              "aria-label": `Condition ${_ + 1} operator`,
              className: Ye.operator,
              value: p.operator,
              onChange: (b) => {
                const O = b.target.value;
                f(
                  p.id,
                  Mn.includes(O) ? {
                    operator: O,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: O }
                );
              },
              options: $.map((b) => ({
                value: b,
                label: Ss[b]
              }))
            }
          ),
          m ? /* @__PURE__ */ s(
            Ms,
            {
              property: y,
              value: p.value,
              onChange: (b) => f(p.id, { value: b })
            }
          ) : null,
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: Ye.remove,
              "aria-label": `Remove condition ${_ + 1}`,
              onClick: () => v(p.id),
              children: /* @__PURE__ */ s(Ne, { name: "close", size: "sm" })
            }
          )
        ] }),
        m ? C ? /* @__PURE__ */ M(
          "div",
          {
            className: [Ye.row, Ye.second].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ s(
                vn,
                {
                  "aria-label": `Condition ${_ + 1} second-operator logic`,
                  className: Ye.joinSelect,
                  value: p.logicalOperator ?? "And",
                  onChange: (b) => f(p.id, {
                    logicalOperator: b.target.value
                  }),
                  options: [
                    { value: "And", label: "And" },
                    { value: "Or", label: "Or" }
                  ]
                }
              ),
              /* @__PURE__ */ s(
                vn,
                {
                  "aria-label": `Condition ${_ + 1} second operator`,
                  className: Ye.operator,
                  value: p.secondOperator,
                  onChange: (b) => {
                    const O = b.target.value;
                    f(
                      p.id,
                      Mn.includes(O) ? { secondOperator: O, secondValue: void 0 } : { secondOperator: O }
                    );
                  },
                  options: $.map((b) => ({
                    value: b,
                    label: Ss[b]
                  }))
                }
              ),
              p.secondOperator == null || !Mn.includes(p.secondOperator) ? /* @__PURE__ */ s(
                Ms,
                {
                  property: y,
                  value: p.secondValue,
                  onChange: (b) => f(p.id, { secondValue: b })
                }
              ) : null,
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: Ye.remove,
                  "aria-label": `Remove second condition ${_ + 1}`,
                  onClick: () => f(p.id, {
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
            onClick: () => f(p.id, {
              secondOperator: Sn[y.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, p.id);
    }) }),
    /* @__PURE__ */ M("div", { className: Ye.bar, children: [
      /* @__PURE__ */ s("button", { type: "button", className: Ye.add, onClick: k, children: "Add filter" }),
      l != null ? /* @__PURE__ */ s("div", { className: Ye.custom, children: l }) : null,
      o != null ? /* @__PURE__ */ M("span", { className: Ye.summary, "aria-live": "polite", children: [
        x?.length ?? 0,
        " of ",
        o.length
      ] }) : null
    ] })
  ] });
}
const Fl = "_pager_4cpp0_1", Hl = "_alignLeft_4cpp0_10", Kl = "_alignCenter_4cpp0_14", Ul = "_alignRight_4cpp0_18", Wl = "_alignJustify_4cpp0_22", Xl = "_summary_4cpp0_26", Vl = "_controls_4cpp0_31", Gl = "_button_4cpp0_37", Yl = "_active_4cpp0_73", Zl = "_ellipsis_4cpp0_85", Jl = "_size_4cpp0_91", it = {
  pager: Fl,
  alignLeft: Hl,
  alignCenter: Kl,
  alignRight: Ul,
  alignJustify: Wl,
  summary: Xl,
  controls: Vl,
  button: Gl,
  active: Yl,
  ellipsis: Zl,
  size: Jl
};
function Ql(e, t, n, r) {
  return e.replace("{0}", String(t)).replace("{1}", String(n)).replace("{2}", String(r));
}
function Ds(e, t) {
  return e.replace("{0}", String(t));
}
function ea(e, t, n) {
  if (t <= n)
    return Array.from({ length: t }, (o, l) => l + 1);
  const r = Math.floor(n / 2);
  let i = Math.max(1, e - r);
  const c = Math.min(t, i + n - 1);
  i = Math.max(1, c - n + 1);
  const d = [];
  for (let o = i; o <= c; o++) d.push(o);
  return i > 2 && d.unshift("ellipsis"), i > 1 && d.unshift(1), c < t - 1 && d.push("ellipsis"), c < t && d.push(t), d;
}
function ta({
  count: e,
  pageSize: t,
  page: n,
  defaultPage: r = 1,
  pageSizeOptions: i,
  pageNumbersCount: c = 5,
  alwaysVisible: d = !1,
  horizontalAlign: o = "left",
  showPagingSummary: l,
  showPageSizeSelector: a = !0,
  pagingSummaryFormat: u = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: f,
  pageSizeText: k = "Items per page",
  firstPageTitle: v = "First page",
  prevPageTitle: w = "Previous page",
  nextPageTitle: x = "Next page",
  lastPageTitle: g = "Last page",
  pageTitleFormat: p = "Page {0}",
  pageAriaLabelFormat: _ = "Page {0}",
  onPageChange: y,
  onPageSizeChange: $,
  ariaLabel: m = "Pagination",
  className: C,
  visible: b = !0
}) {
  const O = n ?? r, [E, D] = X(O), I = n !== void 0, N = I ? O : E, h = Math.max(1, Math.ceil(e / t)), S = Math.min(Math.max(1, N), h), L = l ?? !0, A = d || h > 1, j = ea(S, h, c), T = B(
    (U) => {
      const te = Math.min(Math.max(1, U), h);
      I || D(te);
      const le = (te - 1) * t;
      y?.({
        page: te,
        skip: le,
        top: t,
        pageCount: h,
        pageSize: t
      });
    },
    [I, y, h, t]
  ), F = o === "center" ? it.alignCenter : o === "right" ? it.alignRight : o === "justify" ? it.alignJustify : it.alignLeft, G = {
    count: e,
    pageNumber: S,
    pageSize: t,
    pageCount: h
  }, Y = (U) => {
    const te = Array.from(
      U.currentTarget.querySelectorAll(
        "button[data-pager-page]"
      )
    ), le = te.indexOf(document.activeElement);
    le !== -1 && (U.key === "ArrowRight" || U.key === "ArrowDown" ? (U.preventDefault(), (te[le + 1] ?? te[0])?.focus()) : U.key === "ArrowLeft" || U.key === "ArrowUp" ? (U.preventDefault(), (te[le - 1] ?? te[te.length - 1])?.focus()) : U.key === "Home" ? (U.preventDefault(), te[0]?.focus()) : U.key === "End" && (U.preventDefault(), te[te.length - 1]?.focus()));
  };
  return b === !1 || !A ? null : /* @__PURE__ */ M(
    "nav",
    {
      className: [it.pager, F, C].filter(Boolean).join(" "),
      "aria-label": m,
      children: [
        L && /* @__PURE__ */ s("span", { className: it.summary, "aria-live": "polite", children: f ? f(G) : Ql(u, S, h, e) }),
        /* @__PURE__ */ M(
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
                    "aria-label": Ds(_, U),
                    title: Ds(p, U),
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
                  disabled: S >= h,
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
                  disabled: S >= h,
                  onClick: () => T(h),
                  "aria-label": g,
                  title: g,
                  children: "»"
                }
              )
            ]
          }
        ),
        a && i && i.length > 0 && /* @__PURE__ */ M("label", { className: it.size, children: [
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
  const { pageNumber: t, onPageChange: n, summaryTemplate: r, showSummary: i, ...c } = e;
  return /* @__PURE__ */ s(
    ta,
    {
      page: t,
      showPagingSummary: i,
      pagingSummaryFormat: "Page {0} of {1}",
      pageAriaLabelFormat: "{0}",
      pageTitleFormat: "{0}",
      alwaysVisible: !0,
      pagingSummaryTemplate: r ? (o) => r({
        count: o.count,
        pageNumber: o.pageNumber,
        pageSize: o.pageSize
      }) : void 0,
      onPageChange: n ? (o) => n(o.page) : void 0,
      ...c
    }
  );
}
function na(e, t, n, r, i, c) {
  if (!t || !n) return e.map((l) => ({ type: "row", row: l }));
  const d = /* @__PURE__ */ new Map();
  e.forEach((l) => {
    const a = String(i(l, t) ?? ""), u = d.get(a);
    u ? u.push(l) : d.set(a, [l]);
  });
  const o = [];
  return d.forEach((l, a) => {
    const u = l[0], f = u != null ? i(u, t) : void 0;
    o.push({
      type: "group",
      group: {
        key: a,
        display: c(f),
        property: t,
        title: n.title ?? t,
        count: l.length
      }
    }), r.has(a) && l.forEach((k) => o.push({ type: "row", row: k }));
  }), o;
}
function Hn(e, t) {
  return e.property ?? `col-${t}`;
}
function sa(e, t) {
  const n = {};
  let r = 0;
  return e.forEach(({ key: i, column: c }) => {
    if (!c.frozen) return;
    n[i] = r === 0 ? "0px" : `${r}px`;
    const d = t[i] ?? c.width ?? "8rem";
    r += parseFloat(d);
  }), n;
}
function ra(e, t) {
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
function Dn(e, t) {
  if (t != null)
    return es(e, t);
}
function Cs(e, t) {
  if (t == null || t === "") return String(e ?? "");
  const n = /^N(\d+)$/i.exec(t);
  if (n && typeof e == "number") return e.toFixed(Number(n[1]));
  if (t === "d" || t === "D") {
    const r = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return r != null && !Number.isNaN(r.getTime()) ? r.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const zs = [
  "Ascending",
  "Descending",
  null
];
function oa(e, t, n = {}) {
  const r = e.find((c) => c.property === t), i = zs[(r ? zs.indexOf(r.sortOrder) : -1) + 1] ?? null;
  return i == null ? e.filter((c) => c.property !== t) : n.multi ? [
    ...e.filter((c) => c.property !== t),
    { property: t, sortOrder: i }
  ] : [{ property: t, sortOrder: i }];
}
function la(e, t) {
  return Nl(e, t);
}
function aa(e, t, n) {
  const r = Math.max(1, Math.ceil(e.length / n)), i = Math.min(Math.max(1, t), r), c = (i - 1) * n;
  return {
    items: e.slice(c, c + n),
    pageCount: r,
    pageNumber: i,
    total: e.length
  };
}
function ia(e, t, n = {}) {
  const r = [...t.filters.entries()].filter(([, o]) => o.value !== "" && o.value !== void 0).map(
    ([o, l]) => ({
      property: o,
      operator: l.operator ?? "Contains",
      value: ra(
        l.value,
        n.types?.[o] ?? "string"
      )
    })
  ), i = r.length > 0 ? rr(
    e,
    { operator: n.logicalOperator ?? "And", filters: r },
    {
      logicalOperator: n.logicalOperator ?? "And",
      caseSensitivity: n.caseSensitivity ?? "CaseInsensitive"
    }
  ) : e, c = la(i, t.sorts);
  return {
    ...aa(c, t.pageNumber, t.pageSize),
    sorts: t.sorts,
    filters: t.filters,
    pageSize: t.pageSize
  };
}
function ca(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
const da = "_grid_hbpof_1", ua = "_toolbar_hbpof_8", fa = "_picker_hbpof_13", _a = "_pickerButton_hbpof_17", pa = "_pickerPanel_hbpof_31", ha = "_pickerItem_hbpof_46", ma = "_groupPanel_hbpof_55", ga = "_groupPanelActive_hbpof_66", xa = "_groupPanelText_hbpof_70", ba = "_groupChip_hbpof_74", ya = "_groupRemove_hbpof_85", va = "_groupRow_hbpof_94", ka = "_groupCell_hbpof_98", wa = "_groupToggle_hbpof_103", $a = "_editRow_hbpof_116", Na = "_editCell_hbpof_120", Oa = "_editInput_hbpof_125", Sa = "_commandCell_hbpof_135", Ma = "_commandButton_hbpof_141", Da = "_data_hbpof_156", Ca = "_table_hbpof_163", za = "_header_hbpof_169", Ea = "_center_hbpof_181", Ia = "_right_hbpof_185", Aa = "_sortButton_hbpof_189", ja = "_sortIndicator_hbpof_207", Ta = "_sortIndex_hbpof_211", La = "_cell_hbpof_222", Pa = "_clickable_hbpof_236", Ra = "_frozen_hbpof_244", Ba = "_selected_hbpof_250", qa = "_resizeHandle_hbpof_258", Fa = "_filterCell_hbpof_276", Ha = "_filterSelect_hbpof_284", Ka = "_filterInput_hbpof_294", Ua = "_empty_hbpof_305", Wa = "_loading_hbpof_311", Xa = "_visuallyHidden_hbpof_321", xe = {
  grid: da,
  toolbar: ua,
  picker: fa,
  pickerButton: _a,
  pickerPanel: pa,
  pickerItem: ha,
  groupPanel: ma,
  groupPanelActive: ga,
  groupPanelText: xa,
  groupChip: ba,
  groupRemove: ya,
  groupRow: va,
  groupCell: ka,
  groupToggle: wa,
  editRow: $a,
  editCell: Na,
  editInput: Oa,
  commandCell: Sa,
  commandButton: Ma,
  data: Da,
  table: Ca,
  header: za,
  center: Ea,
  right: Ia,
  sortButton: Aa,
  sortIndicator: ja,
  sortIndex: Ta,
  cell: La,
  clickable: Pa,
  frozen: Ra,
  selected: Ba,
  resizeHandle: qa,
  filterCell: Fa,
  filterSelect: Ha,
  filterInput: Ka,
  empty: Ua,
  loading: Wa,
  visuallyHidden: Xa
}, Va = {
  Ascending: "ascending",
  Descending: "descending"
};
function Es(e, t) {
  return e.filterable ?? t;
}
function Ga(e, t) {
  return e.sortable ?? t;
}
function Ya(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function zv({
  columns: e,
  rows: t,
  rowKey: n,
  allowSorting: r = !1,
  allowMultiColumnSorting: i = !1,
  showSortIndex: c = !1,
  allowFiltering: d = !1,
  filterCaseSensitivity: o = "CaseInsensitive",
  logicalOperator: l = "And",
  allowPaging: a = !1,
  pageSize: u = 10,
  pageSizeOptions: f,
  pageNumbersCount: k = 5,
  pagerPosition: v = "Bottom",
  showPagingSummary: w = !0,
  showPageSizeSelector: x = !0,
  selectionMode: g = "None",
  selectedKeys: p,
  onSelectionChange: _,
  showColumnPicker: y = !1,
  columnPickerText: $ = "Columns",
  allowColumnResize: m = !1,
  allowColumnReorder: C = !1,
  allowGrouping: b = !1,
  groupPanelText: O = "Drag a column header here to group",
  groupExpanded: E = !0,
  editMode: D = "None",
  allowRowCreate: I = !1,
  onRowUpdate: N,
  onRowCreate: h,
  onRowDelete: S,
  isLoading: L = !1,
  empty: A = "No records found",
  ariaLabel: j,
  className: T,
  onRowClick: F
}) {
  const [G, Y] = X([]), [U, te] = X(
    /* @__PURE__ */ new Map()
  ), [le, ee] = X(1), [q, ie] = X(u), [J, de] = X(
    () => e.map((P, R) => Hn(P, R))
  ), [ae, ve] = X(
    () => new Set(
      e.map((P, R) => P.visible !== !1 ? Hn(P, R) : "").filter(Boolean)
    )
  ), [$e, Re] = X({}), [we, Xe] = X(!1), [ye, Ze] = X(null), [Ve, Le] = X(
    null
  ), [tt, Qe] = X(null), [et, V] = X({}), z = se(null), K = se(null), ne = be(() => {
    const P = /* @__PURE__ */ new Map();
    return e.forEach((R, ce) => P.set(Hn(R, ce), R)), P;
  }, [e]), fe = be(
    () => J.filter((P) => ae.has(P)).map((P) => ({ key: P, column: ne.get(P) })).filter(
      (P) => P.column != null
    ),
    [J, ae, ne]
  ), re = be(
    () => sa(fe, $e),
    [fe, $e]
  ), me = D !== "None" || S != null || I, Se = be(
    () => ia(
      t,
      { sorts: G, filters: U, pageNumber: le, pageSize: q },
      {
        logicalOperator: l,
        caseSensitivity: o,
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
      o,
      e
    ]
  ), Be = be(
    () => ye ? e.find((P) => P.property === ye) : void 0,
    [ye, e]
  ), Je = be(
    () => Ve ?? new Set(
      E ? Se.items.map(
        (P) => String(Dn(P, ye ?? "") ?? "")
      ) : []
    ),
    [Ve, E, Se.items, ye]
  ), ut = be(
    () => na(
      Se.items,
      ye ?? void 0,
      Be,
      Je,
      Dn,
      (P) => Cs(P, Be?.format)
    ),
    [Se.items, ye, Be, Je]
  ), vt = be(
    () => ye ? fe.filter((P) => P.column.property !== ye) : fe,
    [fe, ye]
  ), Q = (P) => {
    P !== "" && Y(oa(G, P, { multi: i }));
  }, De = (P, R) => {
    te((ce) => {
      const he = new Map(ce);
      return he.set(P, R), he;
    }), ee(1);
  }, nt = (P) => {
    ie(P), ee(1);
  }, Gt = (P) => {
    if (g === "None") return;
    const R = n(P), ce = p ?? [];
    let he;
    g === "Single" ? he = ce.length === 1 && ce[0] === R ? [] : [R] : he = ce.includes(R) ? ce.filter((Ie) => Ie !== R) : [...ce, R], _?.(he);
  }, Ot = (P) => {
    F?.(P);
  }, Ce = (P, R, ce) => {
    z.current = { key: P, startX: R, startWidth: ce };
  }, Ge = (P) => {
    const R = z.current;
    if (!R) return;
    const ce = P - R.startX, he = Math.max(48, R.startWidth + ce);
    Re((Ie) => ({ ...Ie, [R.key]: `${he}px` }));
  }, kt = () => {
    z.current = null;
  }, Pt = (P) => {
    K.current = P;
  }, tn = (P) => {
    const R = K.current;
    K.current = null, !(!R || R === P) && de((ce) => {
      const he = [...ce], Ie = he.indexOf(R), Ae = he.indexOf(P);
      return Ie < 0 || Ae < 0 ? ce : (he.splice(Ie, 1), he.splice(Ae, 0, R), he);
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
          (Ie) => String(Dn(Ie, ye ?? "") ?? "")
        ) : []
      ), he = new Set(ce);
      return he.has(P) ? he.delete(P) : he.add(P), he;
    });
  }, Rt = (P) => {
    const R = {};
    e.forEach((ce) => {
      ce.property && (R[ce.property] = Dn(P, ce.property));
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
      h?.(R);
    } else if (P != null) {
      const R = { ...P, ...et };
      N?.(P, R);
    }
    H();
  }, oe = a && (v === "Top" || v === "TopAndBottom"), pe = a && (v === "Bottom" || v === "TopAndBottom"), _e = d && e.some((P) => Es(P, d)), ke = (P, R, ce) => P.render ? P.render(R, { index: 0 }) : Cs(Dn(R, P.property), P.format), je = (P) => {
    const R = [xe.cell];
    return P.align === "center" && R.push(xe.center), P.align === "right" && R.push(xe.right), P.frozen && R.push(xe.frozen), R.join(" ");
  };
  return /* @__PURE__ */ M("div", { className: [xe.grid, T].filter(Boolean).join(" "), children: [
    oe && /* @__PURE__ */ s(
      ds,
      {
        pageNumber: Se.pageNumber,
        pageSize: Se.pageSize,
        count: Se.total,
        pageSizeOptions: f,
        pageNumbersCount: k,
        showSummary: w,
        showPageSizeSelector: x,
        ariaLabel: pe ? "Pagination (top)" : "Pagination",
        onPageChange: ee,
        onPageSizeChange: nt
      }
    ),
    (b || I || y) && /* @__PURE__ */ M("div", { className: xe.toolbar, children: [
      b && /* @__PURE__ */ s(
        "div",
        {
          className: [
            xe.groupPanel,
            ye ? xe.groupPanelActive : ""
          ].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: b ? (P) => P.preventDefault() : void 0,
          onDrop: b ? ue : void 0,
          children: ye ? /* @__PURE__ */ M("span", { className: xe.groupChip, children: [
            Be?.title ?? ye,
            ":",
            " ",
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: xe.groupRemove,
                onClick: Pe,
                "aria-label": `Remove group by ${Be?.title ?? ye}`,
                children: /* @__PURE__ */ s(Ne, { name: "close", size: "sm" })
              }
            )
          ] }) : /* @__PURE__ */ s("span", { className: xe.groupPanelText, children: O })
        }
      ),
      I && /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          className: xe.pickerButton,
          onClick: St,
          children: "Add row"
        }
      ),
      y && /* @__PURE__ */ M("div", { className: xe.picker, children: [
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: xe.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": we,
            onClick: () => Xe((P) => !P),
            children: $
          }
        ),
        we && /* @__PURE__ */ s(
          "div",
          {
            className: xe.pickerPanel,
            role: "menu",
            "aria-label": $,
            children: e.map((P, R) => {
              const ce = Hn(P, R);
              return /* @__PURE__ */ M("label", { className: xe.pickerItem, children: [
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
    /* @__PURE__ */ M("div", { className: xe.data, children: [
      /* @__PURE__ */ M(
        "table",
        {
          className: xe.table,
          role: "grid",
          "aria-rowcount": Se.total + 1,
          "aria-label": j,
          "aria-busy": L || void 0,
          children: [
            /* @__PURE__ */ M("colgroup", { children: [
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
            /* @__PURE__ */ M("thead", { children: [
              /* @__PURE__ */ M("tr", { children: [
                vt.map(({ key: P, column: R }) => {
                  const ce = Ga(R, r), he = G.find((ze) => ze.property === R.property), Ie = he ? G.indexOf(he) + 1 : 0, Ae = R.align ?? "left";
                  return /* @__PURE__ */ M(
                    "th",
                    {
                      "aria-sort": ce && he ? Va[he.sortOrder] : "none",
                      className: [
                        xe.header,
                        Ae === "center" ? xe.center : "",
                        Ae === "right" ? xe.right : "",
                        R.frozen ? xe.frozen : ""
                      ].filter(Boolean).join(" "),
                      style: R.frozen ? { left: re[P] } : void 0,
                      scope: "col",
                      draggable: C || b || void 0,
                      onDragStart: C || b ? (ze) => {
                        ze.dataTransfer && (ze.dataTransfer.effectAllowed = "move"), Pt(P);
                      } : void 0,
                      onDragOver: C ? (ze) => ze.preventDefault() : void 0,
                      onDrop: C ? () => tn(P) : void 0,
                      children: [
                        ce ? /* @__PURE__ */ M(
                          "button",
                          {
                            type: "button",
                            className: xe.sortButton,
                            onClick: () => R.property != null && Q(R.property),
                            "aria-label": he ? he.sortOrder === "Ascending" ? `Sort ${R.title ?? R.property} descending` : `Sort ${R.title ?? R.property} ascending` : `Sort ${R.title ?? R.property} ascending`,
                            children: [
                              R.title ?? R.property,
                              he && /* @__PURE__ */ s(
                                "span",
                                {
                                  className: xe.sortIndicator,
                                  "aria-hidden": "true",
                                  children: he.sortOrder === "Ascending" ? "▲" : "▼"
                                }
                              ),
                              Ie > 1 && c && /* @__PURE__ */ s("span", { className: xe.sortIndex, children: Ie })
                            ]
                          }
                        ) : R.title ?? R.property,
                        m && /* @__PURE__ */ s(
                          "span",
                          {
                            className: xe.resizeHandle,
                            "data-dx-grid-resize": !0,
                            role: "separator",
                            "aria-orientation": "vertical",
                            "aria-label": `Resize ${R.title ?? R.property}`,
                            onMouseDown: (ze) => {
                              ze.preventDefault(), ze.stopPropagation();
                              const at = $e[P] ?? R.width, Mt = at ? parseFloat(at) : 96;
                              Ce(
                                P,
                                ze.clientX,
                                Number.isFinite(Mt) ? Mt : 96
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
                me && /* @__PURE__ */ s("th", { className: xe.header, scope: "col", children: "Actions" })
              ] }),
              _e && /* @__PURE__ */ s("tr", { children: vt.map(({ key: P, column: R }) => {
                if (!Es(R, d))
                  return /* @__PURE__ */ s("td", { className: xe.filterCell }, P);
                const ce = U.get(R.property ?? "");
                return /* @__PURE__ */ M("td", { className: xe.filterCell, children: [
                  /* @__PURE__ */ M(
                    "label",
                    {
                      className: xe.visuallyHidden,
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
                      className: xe.filterSelect,
                      value: ce?.operator ?? ca(R.type ?? "string"),
                      onChange: (he) => De(R.property ?? "", {
                        ...ce,
                        operator: he.target.value
                      }),
                      "aria-label": `${R.title ?? R.property} operator`,
                      children: nr.filter((he) => he !== "Custom").map(
                        (he) => /* @__PURE__ */ s("option", { value: he, children: he }, he)
                      )
                    }
                  ),
                  /* @__PURE__ */ s(
                    "input",
                    {
                      className: xe.filterInput,
                      value: ce?.value ?? "",
                      onChange: (he) => De(R.property ?? "", {
                        ...ce,
                        value: he.target.value
                      }),
                      placeholder: `Filter ${R.title ?? R.property}`,
                      "aria-label": `${R.title ?? R.property} value`
                    }
                  )
                ] }, P);
              }) })
            ] }),
            /* @__PURE__ */ M("tbody", { children: [
              tt === "__new__" && /* @__PURE__ */ M("tr", { className: xe.editRow, children: [
                vt.map(({ key: P, column: R }) => /* @__PURE__ */ s("td", { className: xe.editCell, children: R.property && /* @__PURE__ */ s(
                  "input",
                  {
                    className: xe.editInput,
                    type: R.type === "number" ? "number" : R.type === "boolean" ? "checkbox" : "text",
                    checked: R.type === "boolean" ? !!et[R.property] : void 0,
                    value: R.type === "boolean" ? void 0 : String(et[R.property] ?? ""),
                    onChange: (ce) => V((he) => ({
                      ...he,
                      [R.property]: R.type === "boolean" ? ce.target.checked : ce.target.value
                    })),
                    "aria-label": `${R.title ?? R.property} (new)`
                  }
                ) }, P)),
                me && /* @__PURE__ */ M("td", { className: xe.editCell, children: [
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      className: xe.commandButton,
                      onClick: () => Z(),
                      children: "Save"
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      className: xe.commandButton,
                      onClick: H,
                      children: "Cancel"
                    }
                  )
                ] })
              ] }),
              ut.map((P) => {
                if (P.type === "group" && P.group) {
                  const Ae = Je.has(P.group.key);
                  return /* @__PURE__ */ s(
                    "tr",
                    {
                      className: xe.groupRow,
                      children: /* @__PURE__ */ s(
                        "td",
                        {
                          colSpan: vt.length + (me ? 1 : 0),
                          className: xe.groupCell,
                          children: /* @__PURE__ */ M(
                            "button",
                            {
                              type: "button",
                              className: xe.groupToggle,
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
                const R = P.row, ce = n(R), he = (p ?? []).includes(ce), Ie = tt != null && tt === String(ce);
                return /* @__PURE__ */ M(
                  "tr",
                  {
                    className: [
                      F || g !== "None" ? xe.clickable : "",
                      he ? xe.selected : "",
                      Ie ? xe.editRow : ""
                    ].filter(Boolean).join(" "),
                    "aria-selected": g !== "None" ? he : void 0,
                    onClick: F || g !== "None" ? (Ae) => {
                      Ya(Ae.target) || (Ot(R), Gt(R));
                    } : void 0,
                    children: [
                      vt.map(({ key: Ae, column: ze }) => /* @__PURE__ */ s(
                        "td",
                        {
                          className: je(ze),
                          style: ze.frozen ? { left: re[Ae] } : void 0,
                          children: Ie && ze.property ? /* @__PURE__ */ s(
                            "input",
                            {
                              className: xe.editInput,
                              type: ze.type === "number" ? "number" : ze.type === "boolean" ? "checkbox" : "text",
                              checked: ze.type === "boolean" ? !!et[ze.property] : void 0,
                              value: ze.type === "boolean" ? void 0 : String(et[ze.property] ?? ""),
                              onChange: (at) => V((Mt) => ({
                                ...Mt,
                                [ze.property]: ze.type === "boolean" ? at.target.checked : at.target.value
                              })),
                              "aria-label": `${ze.title ?? ze.property} (edit)`
                            }
                          ) : ke(ze, R)
                        },
                        Ae
                      )),
                      me && /* @__PURE__ */ s("td", { className: xe.commandCell, children: Ie ? /* @__PURE__ */ M(Oe, { children: [
                        /* @__PURE__ */ s(
                          "button",
                          {
                            type: "button",
                            className: xe.commandButton,
                            onClick: () => Z(R),
                            children: "Save"
                          }
                        ),
                        /* @__PURE__ */ s(
                          "button",
                          {
                            type: "button",
                            className: xe.commandButton,
                            onClick: H,
                            children: "Cancel"
                          }
                        )
                      ] }) : /* @__PURE__ */ M(Oe, { children: [
                        D !== "None" && /* @__PURE__ */ s(
                          "button",
                          {
                            type: "button",
                            className: xe.commandButton,
                            onClick: () => Rt(R),
                            children: "Edit"
                          }
                        ),
                        S && /* @__PURE__ */ s(
                          "button",
                          {
                            type: "button",
                            className: xe.commandButton,
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
      Se.items.length === 0 && !L && /* @__PURE__ */ s("div", { className: xe.empty, children: A }),
      L && /* @__PURE__ */ s("div", { className: xe.loading, role: "status", children: "Loading…" })
    ] }),
    pe && /* @__PURE__ */ s(
      ds,
      {
        pageNumber: Se.pageNumber,
        pageSize: Se.pageSize,
        count: Se.total,
        pageSizeOptions: f,
        pageNumbersCount: k,
        showSummary: w,
        showPageSizeSelector: x,
        ariaLabel: oe ? "Pagination (bottom)" : "Pagination",
        onPageChange: ee,
        onPageSizeChange: nt
      }
    )
  ] });
}
const Za = "_wrap_1e4xo_1", Ja = "_grid_1e4xo_7", Qa = "_stacked_1e4xo_13", ei = "_item_1e4xo_19", ti = "_empty_1e4xo_25", Cn = {
  wrap: Za,
  grid: Ja,
  stacked: Qa,
  item: ei,
  empty: ti
};
function Ev({
  data: e,
  pageSize: t = 10,
  pageSizeOptions: n,
  wrapItems: r = !1,
  itemTemplate: i,
  emptyMessage: c = "No records found",
  emptyTemplate: d,
  loadingTemplate: o,
  isLoading: l = !1,
  showPageSizeSelector: a = !0,
  className: u,
  ariaLabel: f = "Data list"
}) {
  const [k, v] = X(1), [w, x] = X(t), g = e.length, p = Math.max(1, Math.ceil(g / w)), _ = Math.min(Math.max(1, k), p), y = be(() => {
    const m = (_ - 1) * w;
    return e.slice(m, m + w);
  }, [e, _, w]), $ = r ? Cn.grid : Cn.stacked;
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Cn.wrap, u].filter(Boolean).join(" "),
      "aria-label": f,
      children: [
        l && o != null ? o : g === 0 ? d ?? /* @__PURE__ */ s("div", { className: Cn.empty, children: c }) : /* @__PURE__ */ s("div", { className: $, children: y.map((m, C) => /* @__PURE__ */ s("div", { className: Cn.item, children: i ? i(m, C) : String(m) }, C)) }),
        /* @__PURE__ */ s(
          ds,
          {
            pageNumber: _,
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
const ni = "_label_1qfpw_1", si = {
  label: ni
}, Iv = Fe(function({ className: t, children: n, ...r }, i) {
  return /* @__PURE__ */ s(
    "label",
    {
      ref: i,
      className: [si.label, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}), ri = "_textbox_1wq7t_1", oi = "_invalid_1wq7t_37", li = "_xs_1wq7t_44", ai = "_sm_1wq7t_50", ii = "_md_1wq7t_56", ci = "_lg_1wq7t_62", di = "_xl_1wq7t_68", os = {
  textbox: ri,
  invalid: oi,
  xs: li,
  sm: ai,
  md: ii,
  lg: ci,
  xl: di
}, ui = Fe(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    visible: i = !0,
    type: c = "text",
    ...d
  }, o) {
    return i === !1 ? null : /* @__PURE__ */ s(
      "input",
      {
        ref: o,
        type: c,
        "data-size": t,
        className: [
          os.textbox,
          os[t],
          n ? os.invalid : null,
          r
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...d
      }
    );
  }
), Av = ui, fi = "_checkbox_1lojr_1", _i = {
  checkbox: fi
}, jv = Fe(
  function({ className: t, ...n }, r) {
    return /* @__PURE__ */ s(
      "input",
      {
        ref: r,
        type: "checkbox",
        className: [_i.checkbox, t].filter(Boolean).join(" "),
        ...n
      }
    );
  }
), pi = {
  switch: "_switch_1y0ld_1"
}, hi = Fe(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ s(
    "input",
    {
      ref: r,
      type: "checkbox",
      role: "switch",
      className: [pi.switch, t].filter(Boolean).join(" "),
      ...n
    }
  );
}), mi = "_trigger_iq2cp_1", gi = "_tooltip_iq2cp_7", xi = "_top_iq2cp_34", bi = "_right_iq2cp_40", yi = "_bottom_iq2cp_46", vi = "_left_iq2cp_52", ki = "_arrow_iq2cp_58", Kn = {
  trigger: mi,
  tooltip: gi,
  "se-tooltip-in": "_se-tooltip-in_iq2cp_1",
  top: xi,
  right: bi,
  bottom: yi,
  left: vi,
  arrow: ki
};
function Tv({
  content: e,
  children: t,
  placement: n = "top",
  delayMs: r = 300,
  className: i
}) {
  const c = qe(), d = se(null), [o, l] = X(!1), a = () => {
    d.current = window.setTimeout(() => l(!0), r);
  }, u = () => {
    d.current !== null && (window.clearTimeout(d.current), d.current = null), l(!1);
  };
  ge(() => {
    if (!o) return;
    const k = (v) => {
      v.key === "Escape" && u();
    };
    return window.addEventListener("keydown", k), () => window.removeEventListener("keydown", k);
  }, [o]);
  const f = dt(t) ? ms(t, {
    "aria-describedby": [
      t.props["aria-describedby"],
      o ? c : null
    ].filter((k) => typeof k == "string").join(" ") || void 0
  }) : t;
  return /* @__PURE__ */ M(
    "span",
    {
      className: [Kn.trigger, i].filter(Boolean).join(" "),
      onMouseEnter: a,
      onMouseLeave: u,
      onFocus: a,
      onBlur: u,
      children: [
        f,
        o && /* @__PURE__ */ M(
          "span",
          {
            role: "tooltip",
            id: c,
            className: [Kn.tooltip, Kn[n]].filter(Boolean).join(" "),
            children: [
              e,
              /* @__PURE__ */ s("span", { className: Kn.arrow, "aria-hidden": "true" })
            ]
          }
        )
      ]
    }
  );
}
const wi = "_dialog_18an3_1", $i = "_sm_18an3_72", Ni = "_resizable_18an3_78", Oi = "_md_18an3_81", Si = "_lg_18an3_85", Mi = "_header_18an3_89", Di = "_title_18an3_100", Ci = "_description_18an3_107", zi = "_close_18an3_114", Ei = "_body_18an3_144", Ii = "_footer_18an3_156", qt = {
  dialog: wi,
  "se-dialog-in": "_se-dialog-in_18an3_1",
  sm: $i,
  resizable: Ni,
  md: Oi,
  lg: Si,
  header: Mi,
  title: Di,
  description: Ci,
  close: zi,
  body: Ei,
  footer: Ii
};
function Lv({
  open: e,
  onClose: t,
  title: n,
  description: r,
  children: i,
  footer: c,
  size: d = "md",
  width: o,
  height: l,
  closeOnOverlayClick: a = !0,
  closeOnEsc: u = !0,
  resizable: f = !1,
  canClose: k,
  className: v
}) {
  const w = se(null), x = qe(), g = qe(), p = se(t);
  ge(() => {
    p.current = t;
  });
  const _ = se(k);
  ge(() => {
    _.current = k;
  });
  const y = se(u);
  ge(() => {
    y.current = u;
  });
  const $ = se(!1), m = se(!1), C = B(() => {
    if ($.current) return;
    const O = _.current?.();
    if (O instanceof Promise) {
      O.then((E) => {
        E && !$.current && ($.current = !0, p.current());
      });
      return;
    }
    O !== !1 && ($.current = !0, p.current());
  }, []), b = B(() => {
    if (m.current) {
      m.current = !1;
      return;
    }
    p.current();
  }, []);
  return ge(() => {
    const O = w.current;
    if (O)
      if (e && !O.open) {
        const E = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        O.showModal(), (O.querySelector(
          'button[aria-label="Close dialog"]'
        ) ?? O.querySelector("button"))?.focus();
        const I = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const N = (h) => {
          h.preventDefault(), y.current && C();
        };
        return O.addEventListener("cancel", N), () => {
          O.removeEventListener("cancel", N), document.body.style.overflow = I, E?.focus({ preventScroll: !0 });
        };
      } else !e && O.open && (m.current = $.current, $.current = !1, O.close());
  }, [e, C]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button.
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ M(
    "dialog",
    {
      ref: w,
      className: [
        qt.dialog,
        qt[d],
        f ? qt.resizable : null,
        v
      ].filter(Boolean).join(" "),
      style: {
        width: o ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: o != null ? "none" : void 0,
        height: l ?? void 0
      },
      onClose: b,
      onClick: (O) => {
        O.target === w.current && a && C();
      },
      "aria-modal": "true",
      "aria-labelledby": n ? x : void 0,
      "aria-describedby": r ? g : void 0,
      children: [
        n && /* @__PURE__ */ M("header", { className: qt.header, children: [
          /* @__PURE__ */ M("div", { children: [
            /* @__PURE__ */ s("h2", { id: x, className: qt.title, children: n }),
            r && /* @__PURE__ */ s("p", { id: g, className: qt.description, children: r })
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
const Ai = "_viewport_lo2x9_1", ji = "_topLeft_lo2x9_13", Ti = "_topRight_lo2x9_20", Li = "_bottomLeft_lo2x9_25", Pi = "_toast_lo2x9_30", Ri = "_leaving_lo2x9_61", Bi = "_info_lo2x9_77", qi = "_success_lo2x9_86", Fi = "_warning_lo2x9_95", Hi = "_danger_lo2x9_104", Ki = "_content_lo2x9_113", Ui = "_title_lo2x9_118", Wi = "_description_lo2x9_141", Xi = "_dismiss_lo2x9_148", Vi = "_actions_lo2x9_169", Gi = "_action_lo2x9_169", Yi = "_cancel_lo2x9_177", Zi = "_progress_lo2x9_215", mt = {
  viewport: Ai,
  topLeft: ji,
  topRight: Ti,
  bottomLeft: Li,
  toast: Pi,
  "se-toast-in": "_se-toast-in_lo2x9_1",
  leaving: Ri,
  "se-toast-out": "_se-toast-out_lo2x9_1",
  info: Bi,
  success: qi,
  warning: Fi,
  danger: Hi,
  content: Ki,
  title: Ui,
  description: Wi,
  dismiss: Xi,
  actions: Vi,
  action: Gi,
  cancel: Yi,
  progress: Zi,
  "se-toast-progress": "_se-toast-progress_lo2x9_1"
}, or = Bn(null);
function Pv() {
  const e = dn(or);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const Ji = 200, Qi = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function Rv({
  children: e,
  durationMs: t = 4e3,
  position: n = "bottom-right",
  pauseOnHover: r = !0,
  className: i
}) {
  const [c, d] = X([]), [o, l] = X(!1), a = se([]), u = se(/* @__PURE__ */ new Map()), f = se(!1), k = se(0), v = (N) => {
    f.current = N, l(N);
  }, w = B((N) => {
    const h = u.current.get(N);
    h && (window.clearTimeout(h.timeoutId), h.remaining = Math.max(
      0,
      h.remaining - (Date.now() - h.startedAt)
    ));
  }, []), x = B((N) => {
    const h = u.current.get(N);
    h && (window.clearTimeout(h.timeoutId), u.current.delete(N));
  }, []), g = B(
    (N) => {
      x(N), d((h) => {
        const S = h.filter((L) => L.id !== N);
        return a.current = S, S;
      });
    },
    [x]
  ), p = B(
    (N) => {
      const h = a.current.find((S) => S.id === N);
      !h || h.leaving || (h.onAutoClose?.(), g(N));
    },
    [g]
  ), _ = B(
    (N) => {
      const h = u.current.get(N);
      !h || h.remaining <= 0 || (h.startedAt = Date.now(), h.timeoutId = window.setTimeout(() => p(N), h.remaining));
    },
    [p]
  ), y = B(() => {
    f.current || u.current.forEach((N, h) => w(h)), v(!0);
  }, [w]), $ = B(() => {
    u.current.forEach((N, h) => _(h)), v(!1);
  }, [_]);
  ge(() => {
    if (!r) return;
    const N = () => {
      document.hidden ? y() : $();
    };
    return document.addEventListener("visibilitychange", N), () => document.removeEventListener("visibilitychange", N);
  }, [r, y, $]);
  const m = B(
    (N) => {
      const h = a.current.find((S) => S.id === N);
      !h || h.leaving || (h.onDismiss?.(), d((S) => {
        const L = S.map(
          (A) => A.id === N ? { ...A, leaving: !0 } : A
        );
        return a.current = L, L;
      }), window.setTimeout(() => g(N), Ji));
    },
    [g]
  ), C = B(
    (N) => {
      if (N.durationMs <= 0) return;
      const h = {
        remaining: N.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      u.current.set(N.id, h), f.current || _(N.id);
    },
    [_]
  ), b = B(
    (N) => {
      const h = a.current.find((L) => L.id === N.id), S = {
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
      d((L) => {
        const A = h ? L.map(
          (j) => j.id === S.id ? { ...S, leaving: !1 } : j
        ) : [...L, S];
        return a.current = A, A;
      }), h && x(S.id), C(S);
    },
    [t, n, C, x]
  ), O = be(() => ({ toast: b }), [b]), E = be(
    () => Array.from(/* @__PURE__ */ new Set([n, ...c.map((N) => N.position)])),
    [n, c]
  ), D = r ? y : void 0, I = r ? $ : void 0;
  return /* @__PURE__ */ M(or.Provider, { value: O, children: [
    e,
    E.map((N) => /* @__PURE__ */ s(
      "div",
      {
        className: [mt.viewport, mt[Qi[N]], i].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: D,
        onMouseLeave: I,
        children: c.filter((h) => h.position === N).map((h) => /* @__PURE__ */ M(
          "div",
          {
            role: h.severity === "danger" ? "alert" : "status",
            "data-paused": o ? "true" : "false",
            "data-clickable": h.closeOnClick ? "true" : "false",
            className: [
              mt.toast,
              mt[h.severity],
              h.leaving ? mt.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: h.closeOnClick ? () => m(h.id) : void 0,
            children: [
              /* @__PURE__ */ M("div", { className: mt.content, children: [
                /* @__PURE__ */ s("div", { className: mt.title, children: h.title }),
                h.description && /* @__PURE__ */ s("div", { className: mt.description, children: h.description }),
                (h.action || h.cancel) && /* @__PURE__ */ M("div", { className: mt.actions, children: [
                  h.action && /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      className: mt.action,
                      onClick: () => {
                        h.action?.onClick?.(), m(h.id);
                      },
                      children: h.action.label
                    }
                  ),
                  h.cancel && /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      className: mt.cancel,
                      onClick: () => {
                        h.cancel?.onClick?.(), m(h.id);
                      },
                      children: h.cancel.label
                    }
                  )
                ] })
              ] }),
              h.dismissible && /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: mt.dismiss,
                  onClick: () => m(h.id),
                  "aria-label": "Dismiss notification",
                  children: /* @__PURE__ */ s(Ne, { name: "close", size: "sm" })
                }
              ),
              h.showProgress && h.durationMs > 0 && /* @__PURE__ */ s(
                "div",
                {
                  className: mt.progress,
                  style: { animationDuration: `${h.durationMs}ms` }
                }
              )
            ]
          },
          h.id
        ))
      },
      N
    ))
  ] });
}
const ec = "_alert_1ktjq_1", tc = "_xs_1ktjq_28", nc = "_sm_1ktjq_38", sc = "_lg_1ktjq_48", rc = "_xl_1ktjq_58", oc = "_primary_1ktjq_69", lc = "_secondary_1ktjq_74", ac = "_light_1ktjq_79", ic = "_base_1ktjq_84", cc = "_dark_1ktjq_89", dc = "_info_1ktjq_94", uc = "_success_1ktjq_99", fc = "_warning_1ktjq_104", _c = "_danger_1ktjq_109", pc = "_flat_1ktjq_116", hc = "_outlined_1ktjq_123", mc = "_filled_1ktjq_132", gc = "_text_1ktjq_139", xc = "_icon_1ktjq_181", bc = "_content_1ktjq_192", yc = "_title_1ktjq_197", vc = "_body_1ktjq_203", kc = "_dismiss_1ktjq_209", It = {
  alert: ec,
  xs: tc,
  sm: nc,
  lg: sc,
  xl: rc,
  primary: oc,
  secondary: lc,
  light: ac,
  base: ic,
  dark: cc,
  info: dc,
  success: uc,
  warning: fc,
  danger: _c,
  flat: pc,
  outlined: hc,
  filled: mc,
  text: gc,
  icon: xc,
  content: bc,
  title: yc,
  body: vc,
  dismiss: kc,
  "shade-lighter": "_shade-lighter_1ktjq_451",
  "shade-light": "_shade-light_1ktjq_451",
  "shade-dark": "_shade-dark_1ktjq_461",
  "shade-darker": "_shade-darker_1ktjq_465"
}, wc = {
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
function Bv({
  // Intentional Radzen-parity breaking change (1.0): defaults were
  // severity="info" variant="flat" dismissible={false}; Radzen ships
  // AlertStyle.Base + Variant.Filled + AllowClose. Migrate by passing
  // the old values explicitly.
  severity: e = "base",
  variant: t = "filled",
  shade: n,
  size: r = "md",
  title: i,
  icon: c,
  showIcon: d = !0,
  children: o,
  dismissible: l = !0,
  onDismiss: a,
  visible: u,
  onVisibleChange: f,
  className: k,
  ...v
}) {
  const [w, x] = X(!1);
  if (u === !1 || u === void 0 && w)
    return null;
  const g = () => {
    u === void 0 && x(!0), a?.(), f?.(!1);
  }, p = e, _ = bs(t, "filled"), y = kn(n), $ = c ?? (d ? /* @__PURE__ */ s(Ne, { name: wc[e] }) : null);
  return /* @__PURE__ */ M(
    "div",
    {
      role: "alert",
      ...v,
      className: [
        It.alert,
        It[p],
        It[_],
        y ? It[y] : null,
        It[r],
        k
      ].filter(Boolean).join(" "),
      children: [
        $ != null && /* @__PURE__ */ s("span", { className: It.icon, "aria-hidden": "true", children: $ }),
        /* @__PURE__ */ M("div", { className: It.content, children: [
          i && /* @__PURE__ */ s("div", { className: It.title, children: i }),
          o && /* @__PURE__ */ s("div", { className: It.body, children: o })
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
const $c = "_skeleton_14cft_1", Nc = "_text_14cft_35", Oc = "_circle_14cft_40", Sc = "_rect_14cft_44", Is = {
  skeleton: $c,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_14cft_1",
  text: Nc,
  circle: Oc,
  rect: Sc
};
function qv({
  variant: e = "text",
  width: t,
  height: n,
  className: r
}) {
  const i = {};
  return t !== void 0 && (i.width = typeof t == "number" ? `${t}px` : t), n !== void 0 && (i.height = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ s(
    "span",
    {
      "aria-hidden": "true",
      className: [Is.skeleton, Is[e], r].filter(Boolean).join(" "),
      style: i
    }
  );
}
const Mc = "_row_tkkv2_1", Dc = "_gapXs_tkkv2_12", Cc = "_gapSm_tkkv2_17", zc = "_gapMd_tkkv2_22", Ec = "_gapLg_tkkv2_27", Ic = "_gapXl_tkkv2_32", Ac = "_start_tkkv2_37", jc = "_center_tkkv2_41", Tc = "_end_tkkv2_45", Lc = "_stretch_tkkv2_49", Pc = "_baseline_tkkv2_53", Rc = "_noWrap_tkkv2_109", Bc = "_wrapReverse_tkkv2_113", qc = "_gapRowXs_tkkv2_117", Fc = "_gapRowSm_tkkv2_121", Hc = "_gapRowMd_tkkv2_125", Kc = "_gapRowLg_tkkv2_129", Uc = "_gapRowXl_tkkv2_133", fn = {
  row: Mc,
  gapXs: Dc,
  gapSm: Cc,
  gapMd: zc,
  gapLg: Ec,
  gapXl: Ic,
  start: Ac,
  center: jc,
  end: Tc,
  stretch: Lc,
  baseline: Pc,
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
  noWrap: Rc,
  wrapReverse: Bc,
  gapRowXs: qc,
  gapRowSm: Fc,
  gapRowMd: Hc,
  gapRowLg: Kc,
  gapRowXl: Uc
}, Wc = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
}, Xc = {
  xs: "gapRowXs",
  sm: "gapRowSm",
  md: "gapRowMd",
  lg: "gapRowLg",
  xl: "gapRowXl"
};
function Vc(e) {
  return typeof e != "string" ? null : Wc[e] ?? null;
}
function Gc(e) {
  return typeof e != "string" ? null : Xc[e] ?? null;
}
function As(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function Fv({
  gap: e,
  rowGap: t,
  align: n = "stretch",
  justify: r = "start",
  wrap: i = !0,
  className: c,
  style: d,
  ...o
}) {
  const l = Vc(e), a = Gc(t), u = e != null && !l ? typeof e == "number" ? `${e}px` : e : null, f = {
    // Keep --dx-col-gap in sync so Column grid math compensates for
    // arbitrary (non-tier) gaps exactly like it does for tier classes.
    ...u ? { gap: u, "--dx-col-gap": u } : {},
    ...t != null && !a ? { rowGap: typeof t == "number" ? `${t}px` : t } : {},
    ...d
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: [
        fn.row,
        fn[n],
        fn[`justify-${r}`],
        As(i) != null ? fn[As(i)] : null,
        l ? fn[l] : null,
        a ? fn[a] : null,
        c
      ].filter(Boolean).join(" "),
      style: f,
      ...o
    }
  );
}
const Yc = "_column_sh0ss_1", Zc = "_Size1_sh0ss_15", Jc = "_Size2_sh0ss_24", Qc = "_Size3_sh0ss_33", ed = "_Size4_sh0ss_42", td = "_Size5_sh0ss_51", nd = "_Size6_sh0ss_60", sd = "_Size7_sh0ss_69", rd = "_Size8_sh0ss_78", od = "_Size9_sh0ss_87", ld = "_Size10_sh0ss_96", ad = "_Size11_sh0ss_105", id = "_Size12_sh0ss_114", cd = "_Offset0_sh0ss_119", dd = "_Offset1_sh0ss_122", ud = "_Offset2_sh0ss_127", fd = "_Offset3_sh0ss_132", _d = "_Offset4_sh0ss_137", pd = "_Offset5_sh0ss_142", hd = "_Offset6_sh0ss_147", md = "_Offset7_sh0ss_152", gd = "_Offset8_sh0ss_157", xd = "_Offset9_sh0ss_162", bd = "_Offset10_sh0ss_167", yd = "_Offset11_sh0ss_172", vd = "_Offset12_sh0ss_177", kd = "_OrderFirst_sh0ss_182", wd = "_OrderLast_sh0ss_185", $d = "_Order0_sh0ss_188", Nd = "_Order1_sh0ss_191", Od = "_Order2_sh0ss_194", Sd = "_Order3_sh0ss_197", Md = "_Order4_sh0ss_200", Dd = "_Order5_sh0ss_203", Cd = "_Order6_sh0ss_206", zd = "_Order7_sh0ss_209", Ed = "_Order8_sh0ss_212", Id = "_Order9_sh0ss_215", Ad = "_Order10_sh0ss_218", jd = "_Order11_sh0ss_221", Td = "_Order12_sh0ss_224", Ld = "_xsSize1_sh0ss_229", Pd = "_xsSize2_sh0ss_238", Rd = "_xsSize3_sh0ss_247", Bd = "_xsSize4_sh0ss_256", qd = "_xsSize5_sh0ss_265", Fd = "_xsSize6_sh0ss_274", Hd = "_xsSize7_sh0ss_283", Kd = "_xsSize8_sh0ss_292", Ud = "_xsSize9_sh0ss_301", Wd = "_xsSize10_sh0ss_310", Xd = "_xsSize11_sh0ss_321", Vd = "_xsSize12_sh0ss_332", Gd = "_xsOffset0_sh0ss_337", Yd = "_xsOffset1_sh0ss_340", Zd = "_xsOffset2_sh0ss_345", Jd = "_xsOffset3_sh0ss_350", Qd = "_xsOffset4_sh0ss_355", eu = "_xsOffset5_sh0ss_360", tu = "_xsOffset6_sh0ss_365", nu = "_xsOffset7_sh0ss_370", su = "_xsOffset8_sh0ss_375", ru = "_xsOffset9_sh0ss_380", ou = "_xsOffset10_sh0ss_385", lu = "_xsOffset11_sh0ss_391", au = "_xsOffset12_sh0ss_397", iu = "_xsOrderFirst_sh0ss_403", cu = "_xsOrderLast_sh0ss_406", du = "_xsOrder0_sh0ss_409", uu = "_xsOrder1_sh0ss_412", fu = "_xsOrder2_sh0ss_415", _u = "_xsOrder3_sh0ss_418", pu = "_xsOrder4_sh0ss_421", hu = "_xsOrder5_sh0ss_424", mu = "_xsOrder6_sh0ss_427", gu = "_xsOrder7_sh0ss_430", xu = "_xsOrder8_sh0ss_433", bu = "_xsOrder9_sh0ss_436", yu = "_xsOrder10_sh0ss_439", vu = "_xsOrder11_sh0ss_442", ku = "_xsOrder12_sh0ss_445", wu = "_smSize1_sh0ss_451", $u = "_smSize2_sh0ss_460", Nu = "_smSize3_sh0ss_469", Ou = "_smSize4_sh0ss_478", Su = "_smSize5_sh0ss_487", Mu = "_smSize6_sh0ss_496", Du = "_smSize7_sh0ss_505", Cu = "_smSize8_sh0ss_514", zu = "_smSize9_sh0ss_523", Eu = "_smSize10_sh0ss_532", Iu = "_smSize11_sh0ss_543", Au = "_smSize12_sh0ss_554", ju = "_smOffset0_sh0ss_559", Tu = "_smOffset1_sh0ss_562", Lu = "_smOffset2_sh0ss_567", Pu = "_smOffset3_sh0ss_572", Ru = "_smOffset4_sh0ss_577", Bu = "_smOffset5_sh0ss_582", qu = "_smOffset6_sh0ss_587", Fu = "_smOffset7_sh0ss_592", Hu = "_smOffset8_sh0ss_597", Ku = "_smOffset9_sh0ss_602", Uu = "_smOffset10_sh0ss_607", Wu = "_smOffset11_sh0ss_613", Xu = "_smOffset12_sh0ss_619", Vu = "_smOrderFirst_sh0ss_625", Gu = "_smOrderLast_sh0ss_628", Yu = "_smOrder0_sh0ss_631", Zu = "_smOrder1_sh0ss_634", Ju = "_smOrder2_sh0ss_637", Qu = "_smOrder3_sh0ss_640", ef = "_smOrder4_sh0ss_643", tf = "_smOrder5_sh0ss_646", nf = "_smOrder6_sh0ss_649", sf = "_smOrder7_sh0ss_652", rf = "_smOrder8_sh0ss_655", of = "_smOrder9_sh0ss_658", lf = "_smOrder10_sh0ss_661", af = "_smOrder11_sh0ss_664", cf = "_smOrder12_sh0ss_667", df = "_mdSize1_sh0ss_673", uf = "_mdSize2_sh0ss_682", ff = "_mdSize3_sh0ss_691", _f = "_mdSize4_sh0ss_700", pf = "_mdSize5_sh0ss_709", hf = "_mdSize6_sh0ss_718", mf = "_mdSize7_sh0ss_727", gf = "_mdSize8_sh0ss_736", xf = "_mdSize9_sh0ss_745", bf = "_mdSize10_sh0ss_754", yf = "_mdSize11_sh0ss_765", vf = "_mdSize12_sh0ss_776", kf = "_mdOffset0_sh0ss_781", wf = "_mdOffset1_sh0ss_784", $f = "_mdOffset2_sh0ss_789", Nf = "_mdOffset3_sh0ss_794", Of = "_mdOffset4_sh0ss_799", Sf = "_mdOffset5_sh0ss_804", Mf = "_mdOffset6_sh0ss_809", Df = "_mdOffset7_sh0ss_814", Cf = "_mdOffset8_sh0ss_819", zf = "_mdOffset9_sh0ss_824", Ef = "_mdOffset10_sh0ss_829", If = "_mdOffset11_sh0ss_835", Af = "_mdOffset12_sh0ss_841", jf = "_mdOrderFirst_sh0ss_847", Tf = "_mdOrderLast_sh0ss_850", Lf = "_mdOrder0_sh0ss_853", Pf = "_mdOrder1_sh0ss_856", Rf = "_mdOrder2_sh0ss_859", Bf = "_mdOrder3_sh0ss_862", qf = "_mdOrder4_sh0ss_865", Ff = "_mdOrder5_sh0ss_868", Hf = "_mdOrder6_sh0ss_871", Kf = "_mdOrder7_sh0ss_874", Uf = "_mdOrder8_sh0ss_877", Wf = "_mdOrder9_sh0ss_880", Xf = "_mdOrder10_sh0ss_883", Vf = "_mdOrder11_sh0ss_886", Gf = "_mdOrder12_sh0ss_889", Yf = "_lgSize1_sh0ss_895", Zf = "_lgSize2_sh0ss_904", Jf = "_lgSize3_sh0ss_913", Qf = "_lgSize4_sh0ss_922", e_ = "_lgSize5_sh0ss_931", t_ = "_lgSize6_sh0ss_940", n_ = "_lgSize7_sh0ss_949", s_ = "_lgSize8_sh0ss_958", r_ = "_lgSize9_sh0ss_967", o_ = "_lgSize10_sh0ss_976", l_ = "_lgSize11_sh0ss_987", a_ = "_lgSize12_sh0ss_998", i_ = "_lgOffset0_sh0ss_1003", c_ = "_lgOffset1_sh0ss_1006", d_ = "_lgOffset2_sh0ss_1011", u_ = "_lgOffset3_sh0ss_1016", f_ = "_lgOffset4_sh0ss_1021", __ = "_lgOffset5_sh0ss_1026", p_ = "_lgOffset6_sh0ss_1031", h_ = "_lgOffset7_sh0ss_1036", m_ = "_lgOffset8_sh0ss_1041", g_ = "_lgOffset9_sh0ss_1046", x_ = "_lgOffset10_sh0ss_1051", b_ = "_lgOffset11_sh0ss_1057", y_ = "_lgOffset12_sh0ss_1063", v_ = "_lgOrderFirst_sh0ss_1069", k_ = "_lgOrderLast_sh0ss_1072", w_ = "_lgOrder0_sh0ss_1075", $_ = "_lgOrder1_sh0ss_1078", N_ = "_lgOrder2_sh0ss_1081", O_ = "_lgOrder3_sh0ss_1084", S_ = "_lgOrder4_sh0ss_1087", M_ = "_lgOrder5_sh0ss_1090", D_ = "_lgOrder6_sh0ss_1093", C_ = "_lgOrder7_sh0ss_1096", z_ = "_lgOrder8_sh0ss_1099", E_ = "_lgOrder9_sh0ss_1102", I_ = "_lgOrder10_sh0ss_1105", A_ = "_lgOrder11_sh0ss_1108", j_ = "_lgOrder12_sh0ss_1111", T_ = "_xlSize1_sh0ss_1117", L_ = "_xlSize2_sh0ss_1126", P_ = "_xlSize3_sh0ss_1135", R_ = "_xlSize4_sh0ss_1144", B_ = "_xlSize5_sh0ss_1153", q_ = "_xlSize6_sh0ss_1162", F_ = "_xlSize7_sh0ss_1171", H_ = "_xlSize8_sh0ss_1180", K_ = "_xlSize9_sh0ss_1189", U_ = "_xlSize10_sh0ss_1198", W_ = "_xlSize11_sh0ss_1209", X_ = "_xlSize12_sh0ss_1220", V_ = "_xlOffset0_sh0ss_1225", G_ = "_xlOffset1_sh0ss_1228", Y_ = "_xlOffset2_sh0ss_1233", Z_ = "_xlOffset3_sh0ss_1238", J_ = "_xlOffset4_sh0ss_1243", Q_ = "_xlOffset5_sh0ss_1248", e1 = "_xlOffset6_sh0ss_1253", t1 = "_xlOffset7_sh0ss_1258", n1 = "_xlOffset8_sh0ss_1263", s1 = "_xlOffset9_sh0ss_1268", r1 = "_xlOffset10_sh0ss_1273", o1 = "_xlOffset11_sh0ss_1279", l1 = "_xlOffset12_sh0ss_1285", a1 = "_xlOrderFirst_sh0ss_1291", i1 = "_xlOrderLast_sh0ss_1294", c1 = "_xlOrder0_sh0ss_1297", d1 = "_xlOrder1_sh0ss_1300", u1 = "_xlOrder2_sh0ss_1303", f1 = "_xlOrder3_sh0ss_1306", _1 = "_xlOrder4_sh0ss_1309", p1 = "_xlOrder5_sh0ss_1312", h1 = "_xlOrder6_sh0ss_1315", m1 = "_xlOrder7_sh0ss_1318", g1 = "_xlOrder8_sh0ss_1321", x1 = "_xlOrder9_sh0ss_1324", b1 = "_xlOrder10_sh0ss_1327", y1 = "_xlOrder11_sh0ss_1330", v1 = "_xlOrder12_sh0ss_1333", k1 = "_xxSize1_sh0ss_1339", w1 = "_xxSize2_sh0ss_1348", $1 = "_xxSize3_sh0ss_1357", N1 = "_xxSize4_sh0ss_1366", O1 = "_xxSize5_sh0ss_1375", S1 = "_xxSize6_sh0ss_1384", M1 = "_xxSize7_sh0ss_1393", D1 = "_xxSize8_sh0ss_1402", C1 = "_xxSize9_sh0ss_1411", z1 = "_xxSize10_sh0ss_1420", E1 = "_xxSize11_sh0ss_1431", I1 = "_xxSize12_sh0ss_1442", A1 = "_xxOffset0_sh0ss_1447", j1 = "_xxOffset1_sh0ss_1450", T1 = "_xxOffset2_sh0ss_1455", L1 = "_xxOffset3_sh0ss_1460", P1 = "_xxOffset4_sh0ss_1465", R1 = "_xxOffset5_sh0ss_1470", B1 = "_xxOffset6_sh0ss_1475", q1 = "_xxOffset7_sh0ss_1480", F1 = "_xxOffset8_sh0ss_1485", H1 = "_xxOffset9_sh0ss_1490", K1 = "_xxOffset10_sh0ss_1495", U1 = "_xxOffset11_sh0ss_1501", W1 = "_xxOffset12_sh0ss_1507", X1 = "_xxOrderFirst_sh0ss_1513", V1 = "_xxOrderLast_sh0ss_1516", G1 = "_xxOrder0_sh0ss_1519", Y1 = "_xxOrder1_sh0ss_1522", Z1 = "_xxOrder2_sh0ss_1525", J1 = "_xxOrder3_sh0ss_1528", Q1 = "_xxOrder4_sh0ss_1531", ep = "_xxOrder5_sh0ss_1534", tp = "_xxOrder6_sh0ss_1537", np = "_xxOrder7_sh0ss_1540", sp = "_xxOrder8_sh0ss_1543", rp = "_xxOrder9_sh0ss_1546", op = "_xxOrder10_sh0ss_1549", lp = "_xxOrder11_sh0ss_1552", ap = "_xxOrder12_sh0ss_1555", Un = {
  column: Yc,
  Size1: Zc,
  Size2: Jc,
  Size3: Qc,
  Size4: ed,
  Size5: td,
  Size6: nd,
  Size7: sd,
  Size8: rd,
  Size9: od,
  Size10: ld,
  Size11: ad,
  Size12: id,
  Offset0: cd,
  Offset1: dd,
  Offset2: ud,
  Offset3: fd,
  Offset4: _d,
  Offset5: pd,
  Offset6: hd,
  Offset7: md,
  Offset8: gd,
  Offset9: xd,
  Offset10: bd,
  Offset11: yd,
  Offset12: vd,
  OrderFirst: kd,
  OrderLast: wd,
  Order0: $d,
  Order1: Nd,
  Order2: Od,
  Order3: Sd,
  Order4: Md,
  Order5: Dd,
  Order6: Cd,
  Order7: zd,
  Order8: Ed,
  Order9: Id,
  Order10: Ad,
  Order11: jd,
  Order12: Td,
  xsSize1: Ld,
  xsSize2: Pd,
  xsSize3: Rd,
  xsSize4: Bd,
  xsSize5: qd,
  xsSize6: Fd,
  xsSize7: Hd,
  xsSize8: Kd,
  xsSize9: Ud,
  xsSize10: Wd,
  xsSize11: Xd,
  xsSize12: Vd,
  xsOffset0: Gd,
  xsOffset1: Yd,
  xsOffset2: Zd,
  xsOffset3: Jd,
  xsOffset4: Qd,
  xsOffset5: eu,
  xsOffset6: tu,
  xsOffset7: nu,
  xsOffset8: su,
  xsOffset9: ru,
  xsOffset10: ou,
  xsOffset11: lu,
  xsOffset12: au,
  xsOrderFirst: iu,
  xsOrderLast: cu,
  xsOrder0: du,
  xsOrder1: uu,
  xsOrder2: fu,
  xsOrder3: _u,
  xsOrder4: pu,
  xsOrder5: hu,
  xsOrder6: mu,
  xsOrder7: gu,
  xsOrder8: xu,
  xsOrder9: bu,
  xsOrder10: yu,
  xsOrder11: vu,
  xsOrder12: ku,
  smSize1: wu,
  smSize2: $u,
  smSize3: Nu,
  smSize4: Ou,
  smSize5: Su,
  smSize6: Mu,
  smSize7: Du,
  smSize8: Cu,
  smSize9: zu,
  smSize10: Eu,
  smSize11: Iu,
  smSize12: Au,
  smOffset0: ju,
  smOffset1: Tu,
  smOffset2: Lu,
  smOffset3: Pu,
  smOffset4: Ru,
  smOffset5: Bu,
  smOffset6: qu,
  smOffset7: Fu,
  smOffset8: Hu,
  smOffset9: Ku,
  smOffset10: Uu,
  smOffset11: Wu,
  smOffset12: Xu,
  smOrderFirst: Vu,
  smOrderLast: Gu,
  smOrder0: Yu,
  smOrder1: Zu,
  smOrder2: Ju,
  smOrder3: Qu,
  smOrder4: ef,
  smOrder5: tf,
  smOrder6: nf,
  smOrder7: sf,
  smOrder8: rf,
  smOrder9: of,
  smOrder10: lf,
  smOrder11: af,
  smOrder12: cf,
  mdSize1: df,
  mdSize2: uf,
  mdSize3: ff,
  mdSize4: _f,
  mdSize5: pf,
  mdSize6: hf,
  mdSize7: mf,
  mdSize8: gf,
  mdSize9: xf,
  mdSize10: bf,
  mdSize11: yf,
  mdSize12: vf,
  mdOffset0: kf,
  mdOffset1: wf,
  mdOffset2: $f,
  mdOffset3: Nf,
  mdOffset4: Of,
  mdOffset5: Sf,
  mdOffset6: Mf,
  mdOffset7: Df,
  mdOffset8: Cf,
  mdOffset9: zf,
  mdOffset10: Ef,
  mdOffset11: If,
  mdOffset12: Af,
  mdOrderFirst: jf,
  mdOrderLast: Tf,
  mdOrder0: Lf,
  mdOrder1: Pf,
  mdOrder2: Rf,
  mdOrder3: Bf,
  mdOrder4: qf,
  mdOrder5: Ff,
  mdOrder6: Hf,
  mdOrder7: Kf,
  mdOrder8: Uf,
  mdOrder9: Wf,
  mdOrder10: Xf,
  mdOrder11: Vf,
  mdOrder12: Gf,
  lgSize1: Yf,
  lgSize2: Zf,
  lgSize3: Jf,
  lgSize4: Qf,
  lgSize5: e_,
  lgSize6: t_,
  lgSize7: n_,
  lgSize8: s_,
  lgSize9: r_,
  lgSize10: o_,
  lgSize11: l_,
  lgSize12: a_,
  lgOffset0: i_,
  lgOffset1: c_,
  lgOffset2: d_,
  lgOffset3: u_,
  lgOffset4: f_,
  lgOffset5: __,
  lgOffset6: p_,
  lgOffset7: h_,
  lgOffset8: m_,
  lgOffset9: g_,
  lgOffset10: x_,
  lgOffset11: b_,
  lgOffset12: y_,
  lgOrderFirst: v_,
  lgOrderLast: k_,
  lgOrder0: w_,
  lgOrder1: $_,
  lgOrder2: N_,
  lgOrder3: O_,
  lgOrder4: S_,
  lgOrder5: M_,
  lgOrder6: D_,
  lgOrder7: C_,
  lgOrder8: z_,
  lgOrder9: E_,
  lgOrder10: I_,
  lgOrder11: A_,
  lgOrder12: j_,
  xlSize1: T_,
  xlSize2: L_,
  xlSize3: P_,
  xlSize4: R_,
  xlSize5: B_,
  xlSize6: q_,
  xlSize7: F_,
  xlSize8: H_,
  xlSize9: K_,
  xlSize10: U_,
  xlSize11: W_,
  xlSize12: X_,
  xlOffset0: V_,
  xlOffset1: G_,
  xlOffset2: Y_,
  xlOffset3: Z_,
  xlOffset4: J_,
  xlOffset5: Q_,
  xlOffset6: e1,
  xlOffset7: t1,
  xlOffset8: n1,
  xlOffset9: s1,
  xlOffset10: r1,
  xlOffset11: o1,
  xlOffset12: l1,
  xlOrderFirst: a1,
  xlOrderLast: i1,
  xlOrder0: c1,
  xlOrder1: d1,
  xlOrder2: u1,
  xlOrder3: f1,
  xlOrder4: _1,
  xlOrder5: p1,
  xlOrder6: h1,
  xlOrder7: m1,
  xlOrder8: g1,
  xlOrder9: x1,
  xlOrder10: b1,
  xlOrder11: y1,
  xlOrder12: v1,
  xxSize1: k1,
  xxSize2: w1,
  xxSize3: $1,
  xxSize4: N1,
  xxSize5: O1,
  xxSize6: S1,
  xxSize7: M1,
  xxSize8: D1,
  xxSize9: C1,
  xxSize10: z1,
  xxSize11: E1,
  xxSize12: I1,
  xxOffset0: A1,
  xxOffset1: j1,
  xxOffset2: T1,
  xxOffset3: L1,
  xxOffset4: P1,
  xxOffset5: R1,
  xxOffset6: B1,
  xxOffset7: q1,
  xxOffset8: F1,
  xxOffset9: H1,
  xxOffset10: K1,
  xxOffset11: U1,
  xxOffset12: W1,
  xxOrderFirst: X1,
  xxOrderLast: V1,
  xxOrder0: G1,
  xxOrder1: Y1,
  xxOrder2: Z1,
  xxOrder3: J1,
  xxOrder4: Q1,
  xxOrder5: ep,
  xxOrder6: tp,
  xxOrder7: np,
  xxOrder8: sp,
  xxOrder9: rp,
  xxOrder10: op,
  xxOrder11: lp,
  xxOrder12: ap
}, ip = [
  ["", "size", "offset", "order"],
  ["xs", "sizeXs", "offsetXs", "orderXs"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xx", "sizeXx", "offsetXx", "orderXx"]
];
function cp(e, t) {
  if (!Number.isInteger(t) || t < 1 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 1 and 12.`
    );
}
function dp(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12.`
    );
}
function up(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12 or first/last.`
    );
}
function fp(e, t, n) {
  return t === "first" ? `${e}OrderFirst` : t === "last" ? `${e}OrderLast` : (up(n, t), `${e}Order${t}`);
}
function Hv({ className: e, style: t, ...n }) {
  const r = [Un.column], i = { ...t };
  for (const [I, N, h, S] of ip) {
    const L = n[N], A = n[h], j = n[S];
    if (L != null) {
      cp(N, L);
      const T = Un[`${I}Size${L}`];
      T && r.push(T);
    }
    if (A != null) {
      dp(h, A);
      const T = Un[`${I}Offset${A}`];
      T && r.push(T);
    }
    if (j != null) {
      const T = Un[fp(I, j, S)];
      T && r.push(T);
    }
  }
  const {
    size: c,
    offset: d,
    sizeXs: o,
    offsetXs: l,
    sizeSm: a,
    offsetSm: u,
    sizeMd: f,
    offsetMd: k,
    sizeLg: v,
    offsetLg: w,
    sizeXl: x,
    offsetXl: g,
    sizeXx: p,
    offsetXx: _,
    order: y,
    orderXs: $,
    orderSm: m,
    orderMd: C,
    orderLg: b,
    orderXl: O,
    orderXx: E,
    ...D
  } = n;
  return /* @__PURE__ */ s(
    "div",
    {
      className: [...r, e].filter(Boolean).join(" "),
      style: i,
      ...D
    }
  );
}
const _p = "_stack_1yc1g_1", pp = "_gapXs_1yc1g_29", hp = "_gapSm_1yc1g_33", mp = "_gapMd_1yc1g_37", gp = "_gapLg_1yc1g_41", xp = "_gapXl_1yc1g_45", _n = {
  stack: _p,
  "dir-row": "_dir-row_1yc1g_5",
  "dir-row-reverse": "_dir-row-reverse_1yc1g_9",
  "dir-column": "_dir-column_1yc1g_13",
  "dir-column-reverse": "_dir-column-reverse_1yc1g_17",
  "wrap-nowrap": "_wrap-nowrap_1yc1g_21",
  "wrap-wrap-reverse": "_wrap-wrap-reverse_1yc1g_25",
  gapXs: pp,
  gapSm: hp,
  gapMd: mp,
  gapLg: gp,
  gapXl: xp,
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
}, bp = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function yp(e) {
  return typeof e != "string" ? null : bp[e] ?? null;
}
function js(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function Kv({
  orientation: e = "vertical",
  reverse: t = !1,
  wrap: n = !0,
  gap: r = "sm",
  align: i,
  justify: c,
  className: d,
  style: o,
  ...l
}) {
  const a = yp(r), u = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", f = {
    ...r != null && !a ? { gap: typeof r == "number" ? `${r}px` : r } : {},
    ...o
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: [
        _n.stack,
        _n[`dir-${u}`],
        js(n) !== "wrap" ? _n[`wrap-${js(n)}`] : null,
        i != null ? _n[`align-${i}`] : null,
        c != null ? _n[`justify-${c}`] : null,
        a ? _n[a] : null,
        d
      ].filter(Boolean).join(" "),
      style: f,
      ...l
    }
  );
}
const vp = "_autogrid_1fz7w_1", kp = "_gapXs_1fz7w_10", wp = "_gapSm_1fz7w_14", $p = "_gapMd_1fz7w_18", Np = "_gapLg_1fz7w_22", Op = "_gapXl_1fz7w_26", Ts = {
  autogrid: vp,
  gapXs: kp,
  gapSm: wp,
  gapMd: $p,
  gapLg: Np,
  gapXl: Op
}, Sp = {
  xs: "gapXs",
  sm: "gapSm",
  md: "gapMd",
  lg: "gapLg",
  xl: "gapXl"
};
function Mp(e) {
  return typeof e != "string" ? null : Sp[e] ?? null;
}
function Uv({
  min: e = 240,
  gap: t = "md",
  className: n,
  style: r,
  visible: i = !0,
  ...c
}) {
  if (i === !1) return null;
  const d = Mp(t), o = {
    // Keep --dx-autogrid-min in sync so the track math follows the prop.
    "--dx-autogrid-min": typeof e == "number" ? `${e}px` : e,
    ...t != null && !d ? { gap: typeof t == "number" ? `${t}px` : t } : {},
    ...r
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: [Ts.autogrid, d ? Ts[d] : null, n].filter(Boolean).join(" "),
      style: o,
      ...c
    }
  );
}
const Dp = "_layout_fxvw1_1", Cp = "_row_fxvw1_7", zp = "_grid_fxvw1_21", Ep = "_gridRight_fxvw1_27", Ip = "_gridHeader_fxvw1_31", Ap = "_gridFooter_fxvw1_36", jp = "_gridContents_fxvw1_41", Tp = "_gridBody_fxvw1_45", Ft = {
  layout: Dp,
  row: Cp,
  grid: zp,
  gridRight: Ep,
  gridHeader: Ip,
  gridFooter: Ap,
  gridContents: jp,
  gridBody: Tp
}, Lp = "_footer_1thaw_1", Pp = "_sticky_1thaw_9", Ls = {
  footer: Lp,
  sticky: Pp
};
function Rp({
  sticky: e = !1,
  className: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ s(
    "footer",
    {
      className: [Ls.footer, e ? Ls.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const Bp = "_header_wh9gi_1", qp = "_sticky_wh9gi_9", Ps = {
  header: Bp,
  sticky: qp
};
function Fp({
  sticky: e = !1,
  className: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ s(
    "header",
    {
      className: [Ps.header, e ? Ps.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const Hp = "_sidebar_1a2mp_1", Kp = "_sticky_1a2mp_23", Up = "_left_1a2mp_41", Wp = "_right_1a2mp_45", Xp = "_start_1a2mp_50", Vp = "_end_1a2mp_54", Gp = "_fullHeight_1a2mp_60", Yp = "_collapsed_1a2mp_64", Zp = "_responsive_1a2mp_72", Jp = "_overlay_1a2mp_80", Qp = "_mask_1a2mp_108", Zt = {
  sidebar: Hp,
  sticky: Kp,
  left: Up,
  right: Wp,
  start: Xp,
  end: Vp,
  fullHeight: Gp,
  collapsed: Yp,
  responsive: Zp,
  overlay: Jp,
  mask: Qp
};
function eh({
  position: e = "left",
  expanded: t = !0,
  responsive: n = !1,
  overlay: r = !1,
  fullHeight: i = !1,
  sticky: c = !1,
  onClose: d,
  className: o,
  children: l,
  ...a
}) {
  return ge(() => {
    if (!r || !t || d == null) return;
    const u = (f) => {
      f.key === "Escape" && d();
    };
    return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
  }, [r, t, d]), /* @__PURE__ */ M(Oe, { children: [
    r && t ? /* @__PURE__ */ s(
      "div",
      {
        className: `${Zt.mask} se-layout-mask`,
        "aria-hidden": "true",
        onClick: d
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
          r ? [Zt.overlay, "se-sidebar--overlay"] : null,
          i ? Zt.fullHeight : null,
          c && !r && !i ? Zt.sticky : null,
          o
        ].flat().filter(Boolean).join(" "),
        ...a,
        children: l
      }
    )
  ] });
}
function Wv(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ s(Oe, { children: e.children });
  const { className: t, children: n, ...r } = e, i = [], c = [], d = [], o = [], l = [], a = [];
  qn.forEach(n, (k) => {
    if (!dt(k)) {
      d.push(k);
      return;
    }
    if (k.type === Fp)
      i.push(k);
    else if (k.type === Rp)
      c.push(k);
    else if (k.type === eh) {
      const v = k, w = v.props.position;
      a.push(v), (w === "right" || w === "end" ? l : o).push(v);
    } else
      d.push(k);
  });
  const u = a.length === 1 && a[0]?.props.fullHeight === !0 ? a[0] : null, f = u != null && (u.props.position === "right" || u.props.position === "end");
  if (u) {
    const k = f ? l : o;
    return /* @__PURE__ */ M(
      "div",
      {
        className: [
          Ft.layout,
          Ft.grid,
          f ? Ft.gridRight : null,
          t
        ].filter(Boolean).join(" "),
        ...r,
        children: [
          i.length > 0 && /* @__PURE__ */ s("div", { className: Ft.gridHeader, children: i }),
          /* @__PURE__ */ M("div", { className: Ft.gridContents, children: [
            k,
            /* @__PURE__ */ s("div", { className: Ft.gridBody, children: d })
          ] }),
          c.length > 0 && /* @__PURE__ */ s("div", { className: Ft.gridFooter, children: c })
        ]
      }
    );
  }
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Ft.layout, t].filter(Boolean).join(" "),
      ...r,
      children: [
        i,
        /* @__PURE__ */ M("div", { className: Ft.row, children: [
          o,
          d,
          l
        ] }),
        c
      ]
    }
  );
}
const th = "_body_akga4_1", nh = "_bare_akga4_10", Rs = {
  body: th,
  bare: nh
};
function Xv({
  as: e = "main",
  padded: t = !0,
  className: n,
  children: r,
  ...i
}) {
  return /* @__PURE__ */ s(
    e,
    {
      className: [Rs.body, t ? null : Rs.bare, n].filter(Boolean).join(" "),
      ...i,
      children: r
    }
  );
}
const sh = "_toggle_lxnk5_1", rh = {
  toggle: sh
};
function Vv({
  icon: e = "menu",
  label: t = "Toggle sidebar",
  className: n,
  type: r = "button",
  children: i,
  ...c
}) {
  return /* @__PURE__ */ s(
    "button",
    {
      type: r,
      "aria-label": t,
      className: [rh.toggle, n].filter(Boolean).join(" "),
      ...c,
      children: i ?? /* @__PURE__ */ s(Ne, { name: e, size: 20 })
    }
  );
}
const oh = "_track_1itxd_1", lh = "_bar_1itxd_31", ah = "_primary_1itxd_39", ih = "_success_1itxd_43", ch = "_warning_1itxd_47", dh = "_danger_1itxd_51", uh = "_indeterminate_1itxd_149", fh = "_circular_1itxd_163", _h = "_fill_1itxd_203", gt = {
  track: oh,
  "linear-xs": "_linear-xs_1itxd_11",
  "linear-sm": "_linear-sm_1itxd_15",
  "linear-md": "_linear-md_1itxd_19",
  "linear-lg": "_linear-lg_1itxd_23",
  "linear-xl": "_linear-xl_1itxd_27",
  bar: lh,
  primary: ah,
  success: ih,
  warning: ch,
  danger: dh,
  "shade-lighter": "_shade-lighter_1itxd_133",
  "shade-light": "_shade-light_1itxd_133",
  "shade-dark": "_shade-dark_1itxd_141",
  "shade-darker": "_shade-darker_1itxd_145",
  indeterminate: uh,
  "se-progress-slide": "_se-progress-slide_1itxd_1",
  circular: fh,
  "circular-xs": "_circular-xs_1itxd_169",
  "circular-sm": "_circular-sm_1itxd_174",
  "circular-md": "_circular-md_1itxd_179",
  "circular-lg": "_circular-lg_1itxd_184",
  "circular-xl": "_circular-xl_1itxd_189",
  fill: _h,
  "se-progress-spin": "_se-progress-spin_1itxd_1"
};
function Gv({
  value: e = 0,
  max: t = 100,
  severity: n = "primary",
  shade: r,
  indeterminate: i = !1,
  variant: c = "linear",
  size: d = "md",
  className: o,
  visible: l = !0,
  ...a
}) {
  if (l === !1) return null;
  const u = t > 0 ? Math.min(t, Math.max(0, e)) : 0, f = t > 0 ? u / t * 100 : 0;
  if (c === "circular") {
    const v = typeof d == "string", w = 2, x = 10.5, g = 2 * Math.PI * x, p = g * (i ? 0.75 : 1), _ = i ? 0 : g * (1 - f / 100), y = kn(r);
    return /* @__PURE__ */ M(
      "svg",
      {
        width: v ? void 0 : d,
        height: v ? void 0 : d,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": a["aria-label"],
        "aria-labelledby": a["aria-labelledby"],
        "aria-valuenow": i ? void 0 : Math.round(u),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        ...a,
        className: [
          gt.circular,
          gt[n],
          y ? gt[y] : null,
          v ? gt[`circular-${d}`] : null,
          i ? gt.indeterminate : null,
          o
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
              strokeDasharray: `${p} ${g}`,
              strokeDashoffset: _
            }
          )
        ]
      }
    );
  }
  const k = kn(r);
  return /* @__PURE__ */ s(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": i ? void 0 : Math.round(u),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        gt.track,
        gt[n],
        k ? gt[k] : null,
        typeof d == "string" ? gt[`linear-${d}`] : null,
        i ? gt.indeterminate : null,
        o
      ].filter(Boolean).join(" "),
      ...a,
      children: /* @__PURE__ */ s(
        "div",
        {
          className: gt.bar,
          style: i ? void 0 : { width: `${f}%` }
        }
      )
    }
  );
}
function ph(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function lr(e) {
  const [t, n] = X(() => ph(e));
  return ge(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const r = window.matchMedia(e);
    n(r.matches);
    const i = (c) => n(c.matches);
    return typeof r.addEventListener == "function" ? (r.addEventListener("change", i), () => r.removeEventListener("change", i)) : (r.addListener(i), () => r.removeListener(i));
  }, [e]), t;
}
const hh = "_wrapper_1qmsj_1", mh = {
  wrapper: hh
}, ar = "dx-theme";
function gh(e) {
  const t = e === void 0 ? ar : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const n = localStorage.getItem(t);
      return n === "light" || n === "dark" || n === "system" ? n : void 0;
    } catch {
      return;
    }
}
function xh(e, t) {
  const n = e === void 0 ? ar : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function Yv({
  value: e,
  defaultValue: t,
  storageKey: n,
  onChange: r,
  label: i = "Dark mode",
  className: c
}) {
  const d = lr("(prefers-color-scheme: dark)"), [o, l] = X(void 0), a = e ?? o ?? gh(n) ?? t ?? "system", u = a === "system" ? d ? "dark" : "light" : a;
  ge(() => {
    if (a === "system") {
      delete document.documentElement.dataset.theme;
      return;
    }
    document.documentElement.dataset.theme = a;
  }, [a]);
  const f = (k) => {
    const v = k.target.checked ? "dark" : "light";
    e === void 0 && l(v), xh(n, v), r?.(v);
  };
  return /* @__PURE__ */ M("label", { className: [mh.wrapper, c].filter(Boolean).join(" "), children: [
    i,
    /* @__PURE__ */ s(hi, { checked: u === "dark", onChange: f })
  ] });
}
function bh(e) {
  const t = new TextEncoder().encode(e), n = t.length * 8, r = ((t.length + 8 >> 6) + 1) * 64, i = new Uint8Array(r);
  i.set(t), i[t.length] = 128;
  const c = new DataView(i.buffer);
  c.setUint32(r - 8, n >>> 0, !0), c.setUint32(r - 4, Math.floor(n / 4294967296), !0);
  const d = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21], o = Array.from(
    { length: 64 },
    (x, g) => Math.floor(Math.abs(Math.sin(g + 1)) * 4294967296)
  ), l = (x, g) => x + g | 0, a = (x, g) => x << g | x >>> 32 - g;
  let u = 1732584193, f = 4023233417, k = 2562383102, v = 271733878;
  for (let x = 0; x < r; x += 64) {
    const g = [];
    for (let m = 0; m < 16; m += 1)
      g.push(c.getUint32(x + m * 4, !0));
    let p = u, _ = f, y = k, $ = v;
    for (let m = 0; m < 64; m += 1) {
      let C, b;
      m < 16 ? (C = _ & y | ~_ & $, b = m) : m < 32 ? (C = $ & _ | ~$ & y, b = (5 * m + 1) % 16) : m < 48 ? (C = _ ^ y ^ $, b = (3 * m + 5) % 16) : (C = y ^ (_ | ~$), b = 7 * m % 16), C = l(l(l(C, p), o[m]), g[b]), p = $, $ = y, y = _, _ = l(_, a(C, d[Math.floor(m / 16) * 4 + m % 4]));
    }
    u = l(u, p), f = l(f, _), k = l(k, y), v = l(v, $);
  }
  const w = (x) => {
    let g = "";
    for (let p = 0; p < 4; p += 1)
      g += `0${(x >>> p * 8 & 255).toString(16)}`.slice(-2);
    return g;
  };
  return w(u) + w(f) + w(k) + w(v);
}
const yh = "_avatar_yj2hz_1", vh = "_xs_yj2hz_12", kh = "_sm_yj2hz_18", wh = "_md_yj2hz_24", $h = "_lg_yj2hz_30", Nh = "_xl_yj2hz_36", Oh = "_initials_yj2hz_42", Sh = "_image_yj2hz_57", Mh = "_status_yj2hz_64", Dh = "_online_yj2hz_84", Ch = "_offline_yj2hz_88", zh = "_away_yj2hz_92", pn = {
  avatar: yh,
  xs: vh,
  sm: kh,
  md: wh,
  lg: $h,
  xl: Nh,
  initials: Oh,
  image: Sh,
  status: Mh,
  online: Dh,
  offline: Ch,
  away: zh
}, Eh = {
  xs: 20,
  sm: 28,
  md: 36,
  lg: 44,
  xl: 52
}, Qn = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function Ih(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function Ah(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = t * 31 + e.charCodeAt(n) >>> 0;
  return Qn[t % Qn.length] ?? Qn[0];
}
function Zv({
  name: e,
  src: t,
  email: n,
  gravatarDefault: r = "retro",
  gravatarRating: i = "g",
  alt: c,
  size: d = "md",
  status: o,
  className: l
}) {
  const a = be(() => e ? Ih(e) : "?", [e]), u = be(() => e ? Ah(e) : Qn[0], [e]), f = be(() => {
    if (t != null || n == null) return;
    const $ = n.trim().toLowerCase();
    return $ === "" ? void 0 : `https://secure.gravatar.com/avatar/${bh($)}?d=${r}&s=${Eh[d]}&r=${i}`;
  }, [t, n, r, i, d]), k = t ?? f, [v, w] = X(null), x = k != null && v !== k, g = x && c === "", p = c ?? e ?? "avatar", _ = o ? `${p}, ${o}` : p, y = x ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ s(
      "img",
      {
        className: pn.image,
        src: k,
        alt: g ? "" : o ? _ : p,
        onError: () => w(k ?? null)
      }
    )
  ) : /* @__PURE__ */ s(
    "span",
    {
      "aria-hidden": "true",
      className: pn.initials,
      style: { background: u },
      children: a
    }
  );
  return /* @__PURE__ */ M(
    "span",
    {
      className: [
        pn.avatar,
        pn[d],
        o ? pn[o] : null,
        l
      ].filter(Boolean).join(" "),
      role: x ? void 0 : "img",
      "aria-label": x ? void 0 : _,
      children: [
        y,
        o && /* @__PURE__ */ s("span", { className: pn.status, "aria-hidden": "true" })
      ]
    }
  );
}
const jh = "_root_iy2gv_1", Th = "_left_iy2gv_6", Lh = "_right_iy2gv_7", Ph = "_panel_iy2gv_12", Rh = "_bottom_iy2gv_20", Bh = "_tabList_iy2gv_24", qh = "_underline_iy2gv_53", Fh = "_pills_iy2gv_72", Hh = "_tab_iy2gv_24", Kh = "_active_iy2gv_113", Uh = "_disabled_iy2gv_139", Ht = {
  root: jh,
  left: Th,
  right: Lh,
  panel: Ph,
  bottom: Rh,
  tabList: Bh,
  underline: qh,
  pills: Fh,
  tab: Hh,
  active: Kh,
  disabled: Uh
};
function Jv({
  items: e,
  value: t,
  defaultValue: n,
  onChange: r,
  variant: i = "underline",
  position: c = "top",
  className: d
}) {
  const o = qe(), l = se(null), [a, u] = X(
    n ?? e[0]?.key ?? ""
  ), f = t ?? a, k = c === "left" || c === "right", v = (g) => {
    u(g), r?.(g);
  }, w = (g) => {
    const p = e.filter(($) => !$.disabled), _ = p.findIndex(($) => $.key === f);
    let y = -1;
    g.key === "ArrowRight" || k && g.key === "ArrowDown" ? y = (_ + 1) % p.length : g.key === "ArrowLeft" || k && g.key === "ArrowUp" ? y = (_ - 1 + p.length) % p.length : g.key === "Home" ? y = 0 : g.key === "End" && (y = p.length - 1), y >= 0 && (g.preventDefault(), l.current?.querySelector(
      `[data-tab-key="${CSS.escape(p[y]?.key ?? "")}"]`
    )?.focus(), v(p[y]?.key ?? ""));
  }, x = e.find((g) => g.key === f);
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Ht.root, Ht[c], d].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ s(
          "div",
          {
            ref: l,
            role: "tablist",
            className: [Ht.tabList, Ht[i], Ht[c]].filter(Boolean).join(" "),
            onKeyDown: w,
            children: e.map((g) => {
              const p = g.key === f;
              return /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  role: "tab",
                  id: `${o}-tab-${g.key}`,
                  "data-tab-key": g.key,
                  "aria-selected": p,
                  "aria-controls": `${o}-panel-${g.key}`,
                  tabIndex: p ? 0 : -1,
                  disabled: g.disabled,
                  className: [
                    Ht.tab,
                    p ? Ht.active : null,
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
            id: `${o}-panel-${x.key}`,
            "aria-labelledby": `${o}-tab-${x.key}`,
            className: Ht.panel,
            children: x.content
          }
        )
      ]
    }
  );
}
const Wh = "_root_1qkv8_1", Xh = "_item_1qkv8_9", Vh = "_heading_1qkv8_13", Gh = "_trigger_1qkv8_17", Yh = "_disabled_1qkv8_34", Zh = "_title_1qkv8_48", Jh = "_chevron_1qkv8_52", Qh = "_open_1qkv8_59", em = "_content_1qkv8_63", Kt = {
  root: Wh,
  item: Xh,
  heading: Vh,
  trigger: Gh,
  disabled: Yh,
  title: Zh,
  chevron: Jh,
  open: Qh,
  content: em
};
function Qv({
  items: e,
  multiple: t = !1,
  value: n,
  defaultValue: r,
  onChange: i,
  className: c
}) {
  const d = qe(), [o, l] = X(
    r ?? []
  ), a = n ?? o, u = (f) => {
    const k = a.includes(f) ? a.filter((v) => v !== f) : t ? [...a, f] : [f];
    l(k), i?.(k);
  };
  return /* @__PURE__ */ s("div", { className: [Kt.root, c].filter(Boolean).join(" "), children: e.map((f) => {
    const k = a.includes(f.key), v = `${d}-panel-${f.key}`, w = `${d}-trigger-${f.key}`;
    return /* @__PURE__ */ M("div", { className: Kt.item, children: [
      /* @__PURE__ */ s("h3", { className: Kt.heading, children: /* @__PURE__ */ M(
        "button",
        {
          type: "button",
          id: w,
          "aria-expanded": k,
          "aria-controls": v,
          disabled: f.disabled,
          className: [
            Kt.trigger,
            f.disabled ? Kt.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => u(f.key),
          children: [
            /* @__PURE__ */ s("span", { className: Kt.title, children: f.title }),
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
          children: f.content
        }
      )
    ] }, f.key);
  }) });
}
const tm = "_textarea_1uei3_1", nm = "_invalid_1uei3_27", sm = "_xs_1uei3_34", rm = "_sm_1uei3_39", om = "_md_1uei3_44", lm = "_lg_1uei3_49", am = "_xl_1uei3_54", Wn = {
  textarea: tm,
  invalid: nm,
  xs: sm,
  sm: rm,
  md: om,
  lg: lm,
  xl: am,
  "resize-none": "_resize-none_1uei3_59",
  "resize-vertical": "_resize-vertical_1uei3_63",
  "resize-horizontal": "_resize-horizontal_1uei3_67",
  "resize-both": "_resize-both_1uei3_71"
}, ek = Fe(
  function({ size: t = "md", resize: n = "none", invalid: r = !1, className: i, ...c }, d) {
    return /* @__PURE__ */ s(
      "textarea",
      {
        ref: d,
        "data-size": t,
        className: [
          Wn.textarea,
          Wn[t],
          Wn[`resize-${n}`],
          r ? Wn.invalid : null,
          i
        ].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...c
      }
    );
  }
), im = "_typography_1jy8x_1", cm = "_h1_1jy8x_39", dm = "_h2_1jy8x_45", um = "_h3_1jy8x_51", fm = "_h4_1jy8x_57", _m = "_h5_1jy8x_63", pm = "_h6_1jy8x_69", hm = "_button_1jy8x_99", mm = "_caption_1jy8x_106", gm = "_overline_1jy8x_112", ls = {
  typography: im,
  "display-1": "_display-1_1jy8x_8",
  "display-2": "_display-2_1jy8x_13",
  "display-3": "_display-3_1jy8x_18",
  "display-4": "_display-4_1jy8x_23",
  "display-5": "_display-5_1jy8x_28",
  "display-6": "_display-6_1jy8x_33",
  h1: cm,
  h2: dm,
  h3: um,
  h4: fm,
  h5: _m,
  h6: pm,
  "subtitle-1": "_subtitle-1_1jy8x_75",
  "subtitle-2": "_subtitle-2_1jy8x_81",
  "body-1": "_body-1_1jy8x_87",
  "body-2": "_body-2_1jy8x_92",
  button: hm,
  caption: mm,
  overline: gm,
  "align-left": "_align-left_1jy8x_121",
  "align-center": "_align-center_1jy8x_125",
  "align-right": "_align-right_1jy8x_129",
  "align-justify": "_align-justify_1jy8x_133"
}, xm = {
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
}, bm = {
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
}, ym = {
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
}, vm = {
  Left: "align-left",
  Right: "align-right",
  Center: "align-center",
  Justify: "align-justify",
  Start: "align-left",
  End: "align-right",
  JustifyAll: "align-justify"
}, tk = Fe(function({
  textStyle: t = "Body1",
  tagName: n = "Auto",
  textAlign: r,
  text: i,
  visible: c = !0,
  className: d,
  children: o,
  ...l
}, a) {
  if (c === !1) return null;
  const u = n === "Auto" ? xm[t] : ym[n];
  return /* @__PURE__ */ s(
    u,
    {
      ref: a,
      className: [
        ls.typography,
        ls[bm[t]],
        r ? ls[vm[r]] : null,
        d
      ].filter(Boolean).join(" "),
      ...l,
      children: i ?? o
    }
  );
}), km = "_root_jtes6_1", wm = "_trigger_jtes6_9", $m = "_invalid_jtes6_40", Nm = "_placeholder_jtes6_47", Om = "_label_jtes6_54", Sm = "_chevron_jtes6_60", Mm = "_chevronOpen_jtes6_70", Dm = "_menu_jtes6_74", Cm = "_option_jtes6_89", zm = "_disabled_jtes6_100", Em = "_active_jtes6_104", Im = "_selected_jtes6_105", Am = "_header_jtes6_115", jm = "_xs_jtes6_122", Tm = "_sm_jtes6_128", Lm = "_md_jtes6_134", Pm = "_lg_jtes6_140", Rm = "_xl_jtes6_146", ct = {
  root: km,
  trigger: wm,
  invalid: $m,
  placeholder: Nm,
  label: Om,
  chevron: Sm,
  chevronOpen: Mm,
  menu: Dm,
  option: Cm,
  disabled: zm,
  active: Em,
  selected: Im,
  header: Am,
  xs: jm,
  sm: Tm,
  md: Lm,
  lg: Pm,
  xl: Rm
}, Bm = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function nk({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: r,
  placeholder: i = "Select…",
  size: c = "md",
  invalid: d = !1,
  disabled: o = !1,
  className: l,
  ...a
}) {
  const u = qe(), f = `${u}-listbox`, k = se(null), v = se(null), [w, x] = X(
    n
  ), [g, p] = X(!1), _ = t ?? w, y = e.map(
    (h, S) => h.label === "" || h.disabled ? -1 : S
  ).filter((h) => h >= 0), $ = e.findIndex(
    (h) => h.value === _
  ), [m, C] = X(
    () => y.includes(0) ? 0 : y[0] ?? -1
  ), b = B(() => {
    if (o) return;
    const h = $ >= 0 && y.includes($) ? $ : y[0];
    C(h ?? -1), p(!0);
  }, [o, $, y]), O = B(() => {
    p(!1), v.current?.focus();
  }, []);
  ge(() => {
    if (!g) return;
    const h = (S) => {
      k.current && !k.current.contains(S.target) && p(!1);
    };
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, [g]);
  const E = (h) => {
    x(h), r?.(h), p(!1), v.current?.focus();
  }, D = (h) => {
    if (y.length === 0) return;
    const S = y.includes(m) ? y.indexOf(m) : 0, L = y[(S + h + y.length) % y.length];
    L != null && C(L);
  }, I = (h) => {
    if (!g) {
      h.key === "ArrowDown" && (h.preventDefault(), b());
      return;
    }
    switch (h.key) {
      case "ArrowDown":
        h.preventDefault(), D(1);
        break;
      case "ArrowUp":
        h.preventDefault(), D(-1);
        break;
      case "Home":
        h.preventDefault(), y[0] != null && C(y[0]);
        break;
      case "End":
        h.preventDefault(), y[y.length - 1] != null && C(y[y.length - 1]);
        break;
      case "Enter":
      case " ":
        h.preventDefault(), m >= 0 && e[m] && y.includes(m) && E(e[m]?.value ?? "");
        break;
      case "Escape":
        h.preventDefault(), O();
        break;
      case "Tab":
        p(!1);
        break;
    }
  }, N = e.find(
    (h) => h.value === _
  );
  return /* @__PURE__ */ M(
    "div",
    {
      ref: k,
      className: [ct.root, l].filter(Boolean).join(" "),
      onKeyDown: I,
      children: [
        /* @__PURE__ */ M(
          "button",
          {
            ref: v,
            type: "button",
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-expanded": g,
            "aria-controls": f,
            "aria-invalid": d || void 0,
            disabled: o,
            className: [
              ct.trigger,
              ct[c],
              g ? ct.open : null,
              d ? ct.invalid : null
            ].filter(Boolean).join(" "),
            onClick: () => g ? p(!1) : b(),
            ...a,
            children: [
              /* @__PURE__ */ s("span", { className: N ? ct.label : ct.placeholder, children: N ? N.label : i }),
              /* @__PURE__ */ s(
                "span",
                {
                  className: [ct.chevron, g ? ct.chevronOpen : null].filter(Boolean).join(" "),
                  style: { backgroundImage: Bm },
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ),
        g && /* @__PURE__ */ s(
          "div",
          {
            id: f,
            role: "listbox",
            "aria-activedescendant": m >= 0 ? `${u}-option-${m}` : void 0,
            className: ct.menu,
            children: e.map(
              (h, S) => h.label === "" ? /* @__PURE__ */ s(
                "div",
                {
                  className: ct.header,
                  role: "presentation",
                  children: h.value
                },
                h.value
              ) : /* @__PURE__ */ s(
                "div",
                {
                  id: `${u}-option-${S}`,
                  role: "option",
                  "aria-selected": h.value === _,
                  "aria-disabled": h.disabled || void 0,
                  className: [
                    ct.option,
                    S === m ? ct.active : null,
                    h.value === _ ? ct.selected : null,
                    h.disabled ? ct.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    h.disabled || E(h.value);
                  },
                  onMouseEnter: () => {
                    !h.disabled && h.label !== "" && C(S);
                  },
                  children: h.label
                },
                h.value
              )
            )
          }
        )
      ]
    }
  );
}
const qm = "_root_5j58f_1", Fm = "_wrap_5j58f_9", Hm = "_input_5j58f_26", Km = "_invalid_5j58f_31", Um = "_clear_5j58f_58", Wm = "_menu_5j58f_83", Xm = "_option_5j58f_98", Vm = "_disabled_5j58f_109", Gm = "_active_5j58f_113", Ym = "_empty_5j58f_123", Zm = "_xs_5j58f_129", Jm = "_sm_5j58f_136", Qm = "_md_5j58f_143", eg = "_lg_5j58f_150", tg = "_xl_5j58f_157", Dt = {
  root: qm,
  wrap: Fm,
  input: Hm,
  invalid: Km,
  clear: Um,
  menu: Wm,
  option: Xm,
  disabled: Vm,
  active: Gm,
  empty: Ym,
  xs: Zm,
  sm: Jm,
  md: Qm,
  lg: eg,
  xl: tg
}, ng = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function sk({
  options: e = [],
  value: t,
  defaultValue: n = "",
  onChange: r,
  onSelect: i,
  placeholder: c = "",
  size: d = "md",
  invalid: o = !1,
  disabled: l = !1,
  filter: a = ng,
  className: u,
  ...f
}) {
  const k = qe(), v = `${k}-listbox`, w = se(null), x = se(null), [g, p] = X(n), [_, y] = X(!1), $ = t ?? g, m = be(
    () => $.trim() === "" ? [...e] : e.filter((j) => a(j, $)),
    [e, $, a]
  ), C = m.map((j, T) => j.disabled ? -1 : T).filter((j) => j >= 0), [b, O] = X(-1), E = (j) => {
    p(j), r?.(j);
  }, D = (j) => {
    E(j.label), i?.(j.value, j), y(!1);
  }, I = (j) => {
    if (C.length === 0) return;
    const T = C.includes(b) ? C.indexOf(b) : j === 1 ? -1 : 0, F = C[(T + j + C.length) % C.length];
    F != null && O(F);
  }, N = (j) => {
    l || (E(j.target.value), y(!0), O(-1));
  }, h = () => {
    l || $ !== "" && y(!0);
  }, S = (j) => {
    w.current && !w.current.contains(j.relatedTarget) && y(!1);
  }, L = (j) => {
    if (!l)
      switch (j.key) {
        case "ArrowDown":
          j.preventDefault(), _ ? I(1) : (y(!0), O(C[0] ?? -1));
          break;
        case "ArrowUp":
          j.preventDefault(), _ && I(-1);
          break;
        case "Enter":
          j.preventDefault(), _ && b >= 0 && m[b] && D(m[b]);
          break;
        case "Escape":
          j.preventDefault(), y(!1);
          break;
        case "Tab":
          _ && b >= 0 && m[b] && D(m[b]), y(!1);
          break;
      }
  }, A = () => {
    E(""), O(-1), y(!0), x.current?.focus();
  };
  return /* @__PURE__ */ M(
    "div",
    {
      ref: w,
      className: [Dt.root, u].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ M(
          "div",
          {
            className: [Dt.wrap, Dt[d], o ? Dt.invalid : null].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ s(
                "input",
                {
                  ref: x,
                  type: "text",
                  role: "combobox",
                  "aria-expanded": _,
                  "aria-controls": v,
                  "aria-autocomplete": "list",
                  "aria-activedescendant": _ && b >= 0 ? `${k}-option-${b}` : void 0,
                  "aria-invalid": o || void 0,
                  disabled: l,
                  value: $,
                  placeholder: c,
                  className: Dt.input,
                  onChange: N,
                  onFocus: h,
                  onBlur: S,
                  onKeyDown: L,
                  ...f
                }
              ),
              $ !== "" && !l && /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: Dt.clear,
                  "aria-label": "Clear",
                  onClick: A,
                  children: /* @__PURE__ */ s(Ne, { name: "close", size: "sm" })
                }
              )
            ]
          }
        ),
        _ && /* @__PURE__ */ s("div", { id: v, role: "listbox", className: Dt.menu, children: m.length === 0 ? /* @__PURE__ */ s("div", { className: Dt.empty, children: "No matches" }) : m.map((j, T) => /* @__PURE__ */ s(
          "div",
          {
            id: `${k}-option-${T}`,
            role: "option",
            "aria-selected": !1,
            "aria-disabled": j.disabled || void 0,
            className: [
              Dt.option,
              T === b ? Dt.active : null,
              j.disabled ? Dt.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => {
              j.disabled || D(j);
            },
            onMouseDown: (F) => {
              F.preventDefault(), j.disabled || D(j);
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
const sg = "_box_txdu6_1", rg = "_option_txdu6_12", og = "_disabled_txdu6_23", lg = "_selected_txdu6_27", ag = "_active_txdu6_33", zn = {
  box: sg,
  option: rg,
  disabled: og,
  selected: lg,
  active: ag
};
function rk({
  options: e = [],
  value: t,
  defaultValue: n,
  multiple: r = !1,
  onChange: i,
  className: c,
  style: d,
  ...o
}) {
  const l = qe(), [a, u] = X(() => {
    const m = n;
    return m == null ? [] : Array.isArray(m) ? [...m] : [m];
  }), f = t == null ? a : Array.isArray(t) ? t : [t], k = e.findIndex((m) => !m.disabled), [v, w] = X(
    () => k >= 0 ? k : 0
  ), x = se(""), g = se(null), p = (m) => {
    u(m), i?.(r ? m : m[0] ?? "");
  }, _ = e.map((m, C) => m.disabled ? -1 : C).filter((m) => m >= 0), y = (m) => {
    const C = e[m];
    if (!(!C || C.disabled))
      if (w(m), r) {
        const b = f.includes(C.value) ? f.filter((O) => O !== C.value) : [...f, C.value];
        p(b);
      } else
        p([C.value]);
  }, $ = (m) => {
    if (_.length === 0) return;
    const C = _.includes(v) ? v : _[0];
    let b = -1;
    if (m.key === "ArrowDown")
      b = _[(_.indexOf(C) + 1) % _.length];
    else if (m.key === "ArrowUp")
      b = _[(_.indexOf(C) - 1 + _.length) % _.length];
    else if (m.key === "Home")
      b = _[0];
    else if (m.key === "End")
      b = _[_.length - 1];
    else if (m.key === "Enter" || m.key === " ") {
      m.preventDefault(), y(C);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(m.key)) {
      m.preventDefault();
      const O = (x.current + m.key).toLowerCase();
      x.current = O, g.current && clearTimeout(g.current), g.current = setTimeout(() => {
        x.current = "";
      }, 500);
      const E = [..._, ..._], D = _.indexOf(C) + 1, I = E.slice(D).find((N) => e[N]?.label.toLowerCase().startsWith(O));
      I != null && w(I);
      return;
    }
    b >= 0 && (m.preventDefault(), w(b), r || p([e[b]?.value ?? ""]));
  };
  return /* @__PURE__ */ s(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": r || void 0,
      "aria-activedescendant": e[v] ? `${l}-option-${v}` : void 0,
      style: d,
      className: [zn.box, c].filter(Boolean).join(" "),
      onKeyDown: $,
      ...o,
      children: e.map((m, C) => {
        const b = f.includes(m.value), O = C === v;
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
const ig = "_group_1gpkr_1", cg = "_legend_1gpkr_8", dg = "_list_1gpkr_16", ug = "_item_1gpkr_25", fg = "_disabled_1gpkr_32", _g = "_label_1gpkr_37", pg = "_checkbox_1gpkr_48", rn = {
  group: ig,
  legend: cg,
  list: dg,
  item: ug,
  disabled: fg,
  label: _g,
  checkbox: pg
};
function ok({
  options: e = [],
  value: t,
  defaultValue: n = [],
  onChange: r,
  legend: i,
  name: c,
  className: d
}) {
  const [o, l] = X(() => [
    ...n
  ]), a = t ?? o, u = (f, k) => {
    const v = k ? [...a, f] : a.filter((w) => w !== f);
    l(v), r?.(v);
  };
  return /* @__PURE__ */ M("fieldset", { className: [rn.group, d].filter(Boolean).join(" "), children: [
    i != null && /* @__PURE__ */ s("legend", { className: rn.legend, children: i }),
    /* @__PURE__ */ s("ul", { className: rn.list, children: e.map((f) => {
      const k = a.includes(f.value);
      return /* @__PURE__ */ s(
        "li",
        {
          className: [rn.item, f.disabled ? rn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ M("label", { className: rn.label, children: [
            /* @__PURE__ */ s(
              "input",
              {
                type: "checkbox",
                className: rn.checkbox,
                name: c,
                value: f.value,
                checked: k,
                disabled: f.disabled,
                onChange: (v) => u(f.value, v.target.checked)
              }
            ),
            /* @__PURE__ */ s("span", { children: f.label })
          ] })
        },
        f.value
      );
    }) })
  ] });
}
const hg = "_group_wb5fo_1", mg = "_legend_wb5fo_8", gg = "_list_wb5fo_16", xg = "_item_wb5fo_25", bg = "_disabled_wb5fo_32", yg = "_label_wb5fo_37", vg = "_radio_wb5fo_48", on = {
  group: hg,
  legend: mg,
  list: gg,
  item: xg,
  disabled: bg,
  label: yg,
  radio: vg
};
function lk({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: r,
  legend: i,
  name: c,
  className: d
}) {
  const [o, l] = X(
    n
  ), a = t ?? o, u = (f) => {
    l(f), r?.(f);
  };
  return /* @__PURE__ */ M("fieldset", { className: [on.group, d].filter(Boolean).join(" "), children: [
    i != null && /* @__PURE__ */ s("legend", { className: on.legend, children: i }),
    /* @__PURE__ */ s("ul", { className: on.list, children: e.map((f) => {
      const k = f.value === a;
      return /* @__PURE__ */ s(
        "li",
        {
          className: [on.item, f.disabled ? on.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ M("label", { className: on.label, children: [
            /* @__PURE__ */ s(
              "input",
              {
                type: "radio",
                className: on.radio,
                name: c,
                value: f.value,
                checked: k,
                disabled: f.disabled,
                onChange: (v) => u(v.target.value)
              }
            ),
            /* @__PURE__ */ s("span", { children: f.label })
          ] })
        },
        f.value
      );
    }) })
  ] });
}
const kg = "_bar_44vcf_1", wg = "_vertical_44vcf_12", $g = "_option_44vcf_17", Ng = "_selected_44vcf_40", Og = "_sm_44vcf_56", Sg = "_md_44vcf_62", Mg = "_lg_44vcf_68", hn = {
  bar: kg,
  vertical: wg,
  option: $g,
  selected: Ng,
  sm: Og,
  md: Sg,
  lg: Mg
};
function Bs(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function ak(e) {
  const {
    options: t = [],
    value: n,
    defaultValue: r,
    multiple: i,
    orientation: c = "horizontal",
    onChange: d,
    size: o = "md",
    className: l,
    ...a
  } = e, u = i ?? !1, [f, k] = X(r ?? (u ? [] : t[0]?.value)), v = n ?? f, w = i === !0 || i === void 0 && Array.isArray(v), x = (p) => {
    if (!w) {
      k(p), d?.(p);
      return;
    }
    const _ = Bs(v), y = _.includes(p) ? _.filter(($) => $ !== p) : [..._, p];
    k(y), d?.(y);
  }, g = (p) => w ? Bs(v).includes(p) : v === p;
  return /* @__PURE__ */ s(
    "div",
    {
      role: "group",
      className: [
        hn.bar,
        hn[o],
        c === "vertical" ? hn.vertical : null,
        l
      ].filter(Boolean).join(" "),
      ...a,
      children: t.map((p) => {
        const _ = g(p.value);
        return /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            "aria-pressed": _,
            disabled: p.disabled,
            className: [
              hn.option,
              _ ? hn.selected : null,
              p.disabled ? hn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => x(p.value),
            children: p.label
          },
          p.value
        );
      })
    }
  );
}
const Dg = "_toggle_bc517_1", Cg = "_pressed_bc517_29", zg = "_sm_bc517_41", Eg = "_md_bc517_47", Ig = "_lg_bc517_53", Ag = "_fullWidth_bc517_59", Xn = {
  toggle: Dg,
  pressed: Cg,
  sm: zg,
  md: Eg,
  lg: Ig,
  fullWidth: Ag
}, ik = Fe(
  function({
    pressed: t,
    defaultPressed: n = !1,
    onChange: r,
    size: i = "md",
    fullWidth: c = !1,
    className: d,
    type: o = "button",
    ...l
  }, a) {
    const [u, f] = X(n), k = t ?? u, v = () => {
      const w = !k;
      f(w), r?.(w);
    };
    return /* @__PURE__ */ s(
      "button",
      {
        ref: a,
        type: o,
        "aria-pressed": k,
        className: [
          Xn.toggle,
          Xn[i],
          k ? Xn.pressed : null,
          c ? Xn.fullWidth : null,
          d
        ].filter(Boolean).join(" "),
        onClick: v,
        ...l
      }
    );
  }
), jg = "_root_pn7s6_1", Tg = "_action_pn7s6_285", Lg = "_filled_pn7s6_305", Pg = "_caret_pn7s6_309", Rg = "_flat_pn7s6_331", Bg = "_outlined_pn7s6_343", qg = "_text_pn7s6_352", Fg = "_sm_pn7s6_451", Hg = "_md_pn7s6_463", Kg = "_lg_pn7s6_475", Ug = "_menu_pn7s6_487", Wg = "_item_pn7s6_500", Xg = "_disabled_pn7s6_521", Vg = "_active_pn7s6_525", Gg = "_danger_pn7s6_534", wt = {
  root: jg,
  "style-primary": "_style-primary_pn7s6_10",
  "style-secondary": "_style-secondary_pn7s6_18",
  "style-base": "_style-base_pn7s6_26",
  "style-light": "_style-light_pn7s6_34",
  "style-dark": "_style-dark_pn7s6_42",
  "style-info": "_style-info_pn7s6_50",
  "style-success": "_style-success_pn7s6_58",
  "style-warning": "_style-warning_pn7s6_66",
  "style-danger": "_style-danger_pn7s6_74",
  action: Tg,
  filled: Lg,
  caret: Pg,
  flat: Rg,
  outlined: Bg,
  text: qg,
  "shade-lighter": "_shade-lighter_pn7s6_370",
  "shade-light": "_shade-light_pn7s6_370",
  "shade-dark": "_shade-dark_pn7s6_380",
  "shade-darker": "_shade-darker_pn7s6_384",
  sm: Fg,
  md: Hg,
  lg: Kg,
  menu: Ug,
  item: Wg,
  disabled: Xg,
  active: Vg,
  danger: Gg
};
function ck({
  label: e,
  onClick: t,
  items: n = [],
  severity: r = "primary",
  variant: i = "filled",
  shade: c = "default",
  size: d = "md",
  disabled: o = !1,
  className: l,
  ...a
}) {
  const f = `${qe()}-menu`, k = se(null), v = se(null), w = se([]), [x, g] = X(!1), [p, _] = X(-1), y = be(
    () => n.map((N, h) => N.disabled ? -1 : h).filter((N) => N >= 0),
    [n]
  ), $ = B(() => {
    o || (_(y[0] ?? -1), g(!0));
  }, [o, y]), m = B(() => {
    g(!1), v.current?.focus();
  }, []);
  ge(() => {
    if (!x) return;
    const N = (h) => {
      k.current && !k.current.contains(h.target) && g(!1);
    };
    return document.addEventListener("mousedown", N), () => document.removeEventListener("mousedown", N);
  }, [x]);
  const C = se(x);
  ge(() => {
    const N = C.current;
    if (C.current = x, !x || N) return;
    const h = y.includes(p) ? p : y[0] ?? -1;
    h >= 0 && w.current[h]?.focus();
  }, [x, p, y]);
  const b = (N) => {
    const h = n[N];
    !h || h.disabled || (h.onClick?.(), g(!1), v.current?.focus());
  }, O = (N) => {
    if (y.length === 0) return;
    const h = y.includes(p) ? y.indexOf(p) : N === 1 ? -1 : 0, S = y[(h + N + y.length) % y.length];
    S != null && (_(S), w.current[S]?.focus());
  }, E = (N) => {
    const h = N === "first" ? y[0] : y[y.length - 1];
    h != null && (_(h), w.current[h]?.focus());
  }, D = (N) => {
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
  }, I = kn(c);
  return /* @__PURE__ */ M(
    "div",
    {
      ref: k,
      className: [
        wt.root,
        wt[d],
        wt[`style-${r}`],
        wt[bs(i, "filled")],
        I ? wt[I] : null,
        l
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: wt.action,
            disabled: o,
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
            "aria-controls": f,
            "aria-label": "More actions",
            disabled: o,
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
            id: f,
            role: "menu",
            tabIndex: -1,
            className: wt.menu,
            onKeyDown: D,
            ...a,
            children: n.map((N, h) => /* @__PURE__ */ s(
              "button",
              {
                ref: (S) => {
                  w.current[h] = S;
                },
                type: "button",
                role: "menuitem",
                tabIndex: h === p ? 0 : -1,
                disabled: N.disabled,
                className: [
                  wt.item,
                  h === p ? wt.active : null,
                  N.danger ? wt.danger : null,
                  N.disabled ? wt.disabled : null
                ].filter(Boolean).join(" "),
                onClick: () => b(h),
                onMouseEnter: () => {
                  N.disabled || _(h);
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
const Yg = "_wrapper_eg26m_1", Zg = "_input_eg26m_8", Jg = "_invalid_eg26m_38", Qg = "_toggle_eg26m_45", e0 = "_xs_eg26m_80", t0 = "_sm_eg26m_86", n0 = "_md_eg26m_92", s0 = "_lg_eg26m_98", r0 = "_xl_eg26m_104", En = {
  wrapper: Yg,
  input: Zg,
  invalid: Jg,
  toggle: Qg,
  xs: e0,
  sm: t0,
  md: n0,
  lg: s0,
  xl: r0
}, dk = Fe(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    disabled: i,
    showLabel: c = "Show password",
    hideLabel: d = "Hide password",
    ...o
  }, l) {
    const [a, u] = X(!1);
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ M("div", { className: En.wrapper, "data-size": t, children: [
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
              r
            ].filter(Boolean).join(" "),
            "aria-invalid": n || void 0,
            ...o
          }
        ),
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: En.toggle,
            "aria-pressed": a,
            "aria-label": a ? d : c,
            disabled: i,
            onClick: () => u((f) => !f),
            children: /* @__PURE__ */ s(Ne, { name: a ? "eye-off" : "eye", size: 16 })
          }
        )
      ] })
    );
  }
), o0 = "_mask_1pv7j_1", l0 = "_invalid_1pv7j_31", a0 = "_xs_1pv7j_38", i0 = "_sm_1pv7j_44", c0 = "_md_1pv7j_50", d0 = "_lg_1pv7j_56", u0 = "_xl_1pv7j_62", as = {
  mask: o0,
  invalid: l0,
  xs: a0,
  sm: i0,
  md: c0,
  lg: d0,
  xl: u0
};
function qs(e, t) {
  let n = e.replace(/\D/g, ""), r = "";
  for (const i of t)
    if (i === "#") {
      if (n.length === 0) break;
      r += n[0] ?? "", n = n.slice(1);
    } else if (n.length > 0)
      r += i;
    else
      break;
  return r;
}
const uk = Fe(function({
  size: t = "md",
  invalid: n = !1,
  mask: r,
  value: i,
  defaultValue: c = "",
  onChange: d,
  className: o,
  onKeyDown: l,
  ...a
}, u) {
  const [f, k] = X(c ?? ""), v = i !== void 0, w = v ? i ?? "" : f, x = (_) => {
    const y = qs(_, r);
    return v || k(y), d?.(y), y;
  };
  return /* @__PURE__ */ s(
    "input",
    {
      ref: u,
      type: "text",
      "data-size": t,
      value: w,
      onChange: (_) => {
        x(_.target.value);
      },
      onKeyDown: (_) => {
        if (_.key === "Backspace") {
          const y = _.currentTarget.selectionStart ?? w.length, $ = w[y - 1];
          if ($ !== void 0 && !/\d/.test($)) {
            _.preventDefault();
            const m = w.replace(/\D/g, "");
            x(qs(m.slice(0, -1), r));
          }
        }
        l?.(_);
      },
      className: [
        as.mask,
        as[t],
        n ? as.invalid : null,
        o
      ].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...a
    }
  );
}), f0 = "_wrapper_b3q45_1", _0 = "_input_b3q45_8", p0 = "_invalid_b3q45_38", h0 = "_button_b3q45_45", m0 = "_up_b3q45_77", g0 = "_down_b3q45_82", x0 = "_xs_b3q45_87", b0 = "_sm_b3q45_93", y0 = "_md_b3q45_99", v0 = "_lg_b3q45_105", k0 = "_xl_b3q45_111", Jt = {
  wrapper: f0,
  input: _0,
  invalid: p0,
  button: h0,
  up: m0,
  down: g0,
  xs: x0,
  sm: b0,
  md: y0,
  lg: v0,
  xl: k0
};
function us(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function w0(e) {
  let t = "", n = !1;
  for (const r of e)
    r >= "0" && r <= "9" ? t += r : r === "." && !n ? (n = !0, t += r) : r === "-" && t.length === 0 && (t += r);
  return t;
}
function ir(e, t, n) {
  return Math.min(n ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function $0(e, t, n) {
  return t === void 0 ? e : t + Math.round((e - t) / n) * n;
}
function N0(e, t, n, r, i) {
  const d = us(e) ?? n ?? 0;
  let o;
  return n === void 0 ? o = d + t * i : t > 0 ? o = n + Math.ceil((d - n + 1e-9) / i) * i : o = n + Math.floor((d - n - 1e-9) / i) * i, ir(o, n, r);
}
const fk = Fe(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    disabled: i,
    value: c,
    defaultValue: d,
    onChange: o,
    min: l,
    max: a,
    step: u = 1,
    incrementLabel: f = "Increment",
    decrementLabel: k = "Decrement",
    onBlur: v,
    onKeyDown: w,
    ...x
  }, g) {
    const [p, _] = X(
      d != null ? String(d) : ""
    ), y = c !== void 0, $ = y ? c == null ? "" : String(c) : p, m = (I) => {
      y || _(I), o?.(us(I));
    }, C = (I) => {
      y || _(String(I)), o?.(I);
    }, b = (I) => {
      i || C(N0($, I, l, a, u));
    }, O = (I) => {
      m(w0(I.target.value));
    }, E = (I) => {
      I.key === "ArrowUp" ? (I.preventDefault(), b(1)) : I.key === "ArrowDown" && (I.preventDefault(), b(-1)), w?.(I);
    }, D = (I) => {
      const N = us($);
      N === null ? (y || _(""), o?.(null)) : C(ir($0(N, l, u), l, a)), v?.(I);
    };
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ M("div", { className: Jt.wrapper, "data-size": t, children: [
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
            onBlur: D,
            className: [
              Jt.input,
              Jt[t],
              n ? Jt.invalid : null,
              r
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
            "aria-label": f,
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
), Me = {
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
}, O0 = [
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
function fs(e) {
  const t = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(e.trim());
  if (!t) return null;
  let n = t[1];
  return n.length === 3 && (n = n.split("").map((r) => r + r).join("")), {
    r: Number.parseInt(n.slice(0, 2), 16),
    g: Number.parseInt(n.slice(2, 4), 16),
    b: Number.parseInt(n.slice(4, 6), 16),
    a: 1
  };
}
function S0({ r: e, g: t, b: n }) {
  const r = (i) => Math.round(i).toString(16).padStart(2, "0");
  return `#${r(e)}${r(t)}${r(n)}`;
}
function M0({ r: e, g: t, b: n }) {
  const r = e / 255, i = t / 255, c = n / 255, d = Math.max(r, i, c), o = Math.min(r, i, c), l = d - o;
  let a = 0;
  return l !== 0 && (d === r ? a = (i - c) / l % 6 : d === i ? a = (c - r) / l + 2 : a = (r - i) / l + 4, a *= 60, a < 0 && (a += 360)), {
    h: a,
    s: d === 0 ? 0 : l / d,
    v: d
  };
}
function mn({ h: e, s: t, v: n }) {
  const r = n * t, i = e / 60, c = r * (1 - Math.abs(i % 2 - 1));
  let d = 0, o = 0, l = 0;
  i < 1 ? (d = r, o = c) : i < 2 ? (d = c, o = r) : i < 3 ? (o = r, l = c) : i < 4 ? (o = c, l = r) : i < 5 ? (d = c, l = r) : (d = r, l = c);
  const a = n - r;
  return {
    r: Math.round((d + a) * 255),
    g: Math.round((o + a) * 255),
    b: Math.round((l + a) * 255),
    a: 1
  };
}
function D0(e) {
  const t = fs(e);
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
function Fs({ r: e, g: t, b: n, a: r }) {
  return r >= 1 ? `rgb(${e}, ${t}, ${n})` : `rgba(${e}, ${t}, ${n}, ${Math.round(r * 100) / 100})`;
}
const _k = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: n = !0,
  showPalette: r = !0,
  palette: i = O0,
  showButton: c = !1,
  showArrow: d = !0,
  disabled: o = !1,
  invalid: l = !1,
  placeholder: a = "",
  size: u = "md",
  tabIndex: f = 0,
  className: k,
  onChange: v,
  onValueChange: w,
  onOpen: x,
  onClose: g
}) => {
  const p = se(null), _ = se(null), y = se(null), $ = se(null), m = se(null), C = qe(), b = se(null), O = be(
    () => D0(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [E, D] = X(!1), [I, N] = X(null), h = I ?? O, S = be(() => M0(h), [h]), L = B(
    (V) => {
      const z = Fs(V);
      v?.(z), w?.(z);
    },
    [v, w]
  ), A = B(
    (V, z) => {
      N(V), z && !c && L(V);
    },
    [c, L]
  ), j = B(() => {
    D(!1), N(null), g?.(), _.current?.focus();
  }, [g]), T = B(() => {
    o || (N(O), D(!0), x?.());
  }, [o, O, x]), F = B(() => {
    E ? j() : T();
  }, [E, j, T]), G = B(
    (V, z) => {
      const K = y.current;
      if (!K) return S;
      const ne = K.getBoundingClientRect(), fe = bt((V - ne.left) / ne.width, 0, 1), re = bt(1 - (z - ne.top) / ne.height, 0, 1);
      return { h: S.h, s: fe, v: re };
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
    if (o) return;
    V.preventDefault(), V.currentTarget.setPointerCapture(V.pointerId), b.current = "sat";
    const z = G(V.clientX, V.clientY);
    A({ ...mn(z), a: h.a }, !0);
  }, te = (V) => {
    if (b.current !== "sat") return;
    V.preventDefault();
    const z = G(V.clientX, V.clientY);
    A({ ...mn(z), a: h.a }, !0);
  }, le = (V) => {
    if (o) return;
    V.preventDefault(), V.currentTarget.setPointerCapture(V.pointerId), b.current = "hue";
    const z = Y(V.clientX, $.current);
    A(
      { ...mn({ ...S, h: z * 360 }), a: h.a },
      !0
    );
  }, ee = (V) => {
    if (b.current !== "hue") return;
    V.preventDefault();
    const z = Y(V.clientX, $.current);
    A(
      { ...mn({ ...S, h: z * 360 }), a: h.a },
      !0
    );
  }, q = (V) => {
    if (o) return;
    V.preventDefault(), V.currentTarget.setPointerCapture(V.pointerId), b.current = "alpha";
    const z = Y(V.clientX, m.current);
    A({ ...h, a: z }, !0);
  }, ie = (V) => {
    if (b.current !== "alpha") return;
    V.preventDefault();
    const z = Y(V.clientX, m.current);
    A({ ...h, a: z }, !0);
  }, J = () => {
    b.current = null;
  }, de = B(
    (V, z) => {
      const K = {
        h: S.h,
        s: bt(S.s + V, 0, 1),
        v: bt(S.v + z, 0, 1)
      };
      A({ ...mn(K), a: h.a }, !0);
    },
    [S, h.a, A]
  ), ae = B(
    (V) => {
      const z = (S.h + V + 360) % 360;
      A({ ...mn({ ...S, h: z }), a: h.a }, !0);
    },
    [S, h.a, A]
  ), ve = B(
    (V) => {
      A({ ...h, a: bt(h.a + V, 0, 1) }, !0);
    },
    [h, A]
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
      const re = fs(z);
      re && A({ ...re, a: h.a }, !0);
      return;
    }
    const K = z.replace(/[^\d.]/g, ""), ne = Number.parseFloat(K);
    if (Number.isNaN(ne)) return;
    if (V === "a") {
      const re = K.includes(".") ? bt(ne, 0, 1) : bt(ne / 100, 0, 1);
      A({ ...h, a: re }, !0);
      return;
    }
    const fe = { r: 255, g: 255, b: 255 };
    A(
      { ...h, [V]: bt(ne, 0, fe[V]) },
      !0
    );
  }, Xe = () => {
    I && (L(I), N(null), D(!1), g?.(), _.current?.focus());
  };
  ge(() => {
    if (!E) return;
    const V = (z) => {
      p.current && !p.current.contains(z.target) && j();
    };
    return document.addEventListener("mousedown", V), () => document.removeEventListener("mousedown", V);
  }, [E, j]), ge(() => {
    if (!E) return;
    const V = (z) => {
      z.key === "Escape" && j();
    };
    return document.addEventListener("keydown", V), () => document.removeEventListener("keydown", V);
  }, [E, j]);
  const ye = u === "xs" ? Me["dx-colorpicker-trigger-xs"] : u === "sm" ? Me["dx-colorpicker-trigger-sm"] : u === "lg" ? Me["dx-colorpicker-trigger-lg"] : u === "xl" ? Me["dx-colorpicker-trigger-xl"] : Me["dx-colorpicker-trigger"], Ze = Fs(h), Ve = S0(h), Le = { x: S.s * 100, y: (1 - S.v) * 100 }, tt = S.h / 360 * 100, Qe = h.a * 100, et = /* @__PURE__ */ M("div", { className: Me["dx-colorpicker-panel"], children: [
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
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : f,
        className: Me["dx-saturation-picker"],
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
            className: Me["dx-saturation-indicator"],
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
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : f,
        className: Me["dx-hue-picker"],
        onKeyDown: (V) => Re(V, "hue"),
        onPointerDown: le,
        onPointerMove: ee,
        onPointerUp: J,
        children: /* @__PURE__ */ s(
          "span",
          {
            className: Me["dx-hue-indicator"],
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
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : f,
        className: Me["dx-alpha-picker"],
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
            className: Me["dx-alpha-indicator"],
            style: { left: `${Qe}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    n && /* @__PURE__ */ M("div", { className: Me["dx-colorpicker-rgba"], children: [
      /* @__PURE__ */ M("label", { className: Me["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ s("span", { className: Me["dx-colorpicker-rgba-label"], children: "Hex" }),
        /* @__PURE__ */ s(
          "input",
          {
            type: "text",
            maxLength: 7,
            className: Me["dx-colorpicker-rgba-input"],
            "aria-label": "Hex",
            value: Ve,
            onChange: (V) => we("hex", V.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ M("label", { className: Me["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ s("span", { className: Me["dx-colorpicker-rgba-label"], children: "R" }),
        /* @__PURE__ */ s(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Me["dx-colorpicker-rgba-input"],
            "aria-label": "Red",
            value: h.r,
            onChange: (V) => we("r", V.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ M("label", { className: Me["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ s("span", { className: Me["dx-colorpicker-rgba-label"], children: "G" }),
        /* @__PURE__ */ s(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Me["dx-colorpicker-rgba-input"],
            "aria-label": "Green",
            value: h.g,
            onChange: (V) => we("g", V.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ M("label", { className: Me["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ s("span", { className: Me["dx-colorpicker-rgba-label"], children: "B" }),
        /* @__PURE__ */ s(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Me["dx-colorpicker-rgba-input"],
            "aria-label": "Blue",
            value: h.b,
            onChange: (V) => we("b", V.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ M("label", { className: Me["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ s("span", { className: Me["dx-colorpicker-rgba-label"], children: "A" }),
        /* @__PURE__ */ s(
          "input",
          {
            type: "text",
            inputMode: "decimal",
            maxLength: 4,
            className: Me["dx-colorpicker-rgba-input"],
            "aria-label": "Alpha",
            value: Math.round(h.a * 100),
            onChange: (V) => we("a", V.target.value)
          }
        )
      ] })
    ] }),
    r && /* @__PURE__ */ s("div", { className: Me["dx-colorpicker-palette"], children: i.map((V) => /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        className: Me["dx-colorpicker-swatch"],
        "aria-label": V,
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : f,
        style: { backgroundColor: V },
        onClick: () => {
          const z = fs(V);
          c ? A({ ...z, a: h.a }, !1) : (N(null), L({ ...z, a: h.a }), D(!1), g?.(), _.current?.focus());
        }
      },
      V
    )) }),
    c && /* @__PURE__ */ s("div", { className: Me["dx-colorpicker-footer"], children: /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        className: Me["dx-colorpicker-ok"],
        onClick: Xe,
        children: "OK"
      }
    ) })
  ] });
  return /* @__PURE__ */ M(
    "div",
    {
      ref: p,
      className: [
        Me["dx-colorpicker"],
        E ? Me["dx-colorpicker-open"] : null,
        l ? Me["dx-colorpicker-invalid"] : null,
        k
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ M(
          "button",
          {
            ref: _,
            type: "button",
            className: [Me["dx-colorpicker-trigger"], ye].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": E,
            "aria-controls": C,
            "aria-label": "Pick a color",
            "aria-disabled": o || void 0,
            disabled: o,
            tabIndex: f,
            onClick: F,
            onKeyDown: (V) => {
              V.key === "Escape" && E && (V.preventDefault(), j());
            },
            children: [
              /* @__PURE__ */ s(
                "span",
                {
                  className: Me["dx-colorpicker-value"],
                  style: { backgroundColor: Ze },
                  "aria-hidden": "true"
                }
              ),
              a && /* @__PURE__ */ s("span", { className: Me["dx-colorpicker-text"], children: a }),
              d && /* @__PURE__ */ s("span", { className: Me["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ s(Ne, { name: "chevron-down", size: 14 }) })
            ]
          }
        ),
        E && /* @__PURE__ */ s(
          "div",
          {
            id: C,
            role: "dialog",
            "aria-label": "Choose color",
            className: Me["dx-colorpicker-popup"],
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
}, C0 = 42;
function yt(e) {
  return String(e).padStart(2, "0");
}
function ht(e) {
  return `${e.year}-${yt(e.month)}-${yt(e.day)}`;
}
function z0(e, t) {
  const n = ht(e);
  return t ? `${n} ${yt(e.hour)}:${yt(e.minute)}:${yt(e.second)}` : n;
}
function _s(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!t) return null;
  const n = Number(t[1]), r = Number(t[2]), i = Number(t[3]), c = t[4] != null ? Number(t[4]) : 0, d = t[5] != null ? Number(t[5]) : 0, o = t[6] != null ? Number(t[6]) : 0;
  if (r < 1 || r > 12 || i < 1 || i > 31) return null;
  const l = new Date(n, r - 1, i, c, d, o);
  return l.getFullYear() !== n || l.getMonth() !== r - 1 || l.getDate() !== i ? null : { year: n, month: r, day: i, hour: c, minute: d, second: o };
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
function Vn(e, t) {
  const n = new Date(e.year, e.month - 1 + t, 1), r = n.getFullYear(), i = n.getMonth() + 1, c = new Date(r, i, 0).getDate();
  return {
    year: r,
    month: i,
    day: Math.min(e.day, c),
    hour: e.hour,
    minute: e.minute,
    second: e.second
  };
}
function Hs(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const Ks = {
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
}, E0 = [
  "yyyy",
  "yy",
  "MM",
  "dd",
  "HH",
  "mm",
  "ss",
  "tt"
], I0 = ["y", "M", "d", "H", "m", "s"];
function Gn(e, t, n) {
  const r = new Date(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second
  );
  let i = "", c = 0;
  for (; c < t.length; ) {
    let d = !1;
    for (const l of E0)
      if (t.startsWith(l, c)) {
        i += Ks[l](e, r, n), c += l.length, d = !0;
        break;
      }
    if (d) continue;
    const o = t[c];
    if (I0.includes(o)) {
      i += Ks[o](e, r, n), c += 1;
      continue;
    }
    i += o, c += 1;
  }
  return i;
}
const A0 = [
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
function j0(e, t) {
  const n = {};
  let r = 0, i = 0;
  for (; i < t.length; ) {
    let o = null;
    for (const l of A0)
      if (t.startsWith(l, i)) {
        o = l;
        break;
      }
    if (o) {
      const l = e.slice(r, r + o.length);
      if (!/^\d+$/.test(l)) return null;
      const a = Number(l);
      switch (o) {
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
      r += o.length, i += o.length;
      continue;
    }
    if (e[r] !== t[i]) return null;
    r += 1, i += 1;
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
  const d = new Date(
    c.year,
    c.month - 1,
    c.day,
    c.hour,
    c.minute,
    c.second
  );
  return d.getFullYear() !== c.year || d.getMonth() !== c.month - 1 || d.getDate() !== c.day ? null : c;
}
function In(e, t) {
  const n = _s(e);
  return n || j0(e, t);
}
function T0(e, t, n) {
  return t && ht(e) < ht(t) ? t : n && ht(e) > ht(n) ? n : e;
}
const L0 = ["hour", "minute", "second"];
function Yn(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const pk = Fe(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: i,
    format: c = "yyyy-MM-dd",
    min: d,
    max: o,
    showTime: l = !1,
    showButton: a = !0,
    allowClear: u = !1,
    inline: f = !1,
    disabledDates: k,
    locale: v = "en-US",
    onChange: w,
    onValueChange: x,
    onOpen: g,
    onClose: p,
    disabled: _,
    readOnly: y,
    placeholder: $,
    ariaLabel: m,
    triggerLabel: C,
    clearLabel: b,
    tabIndex: O,
    className: E,
    onBlur: D,
    onKeyDown: I,
    ...N
  }, h) {
    const S = se(null), L = se(null), A = se(null), j = se(null), T = qe(), F = r !== void 0, [G, Y] = X(
      () => i != null ? Gn(
        In(i, c) ?? Qt(),
        c,
        v
      ) : ""
    ), [U, te] = X(!1), [le, ee] = X(null), [q, ie] = X(() => {
      const W = r !== void 0 ? r ?? "" : i ?? "";
      if (W) {
        const ue = In(W, c);
        if (ue) return ue;
      }
      return Qt();
    }), J = be(() => d ? _s(d) : null, [d]), de = be(() => o ? _s(o) : null, [o]), ae = be(
      () => new Set(k ?? []),
      [k]
    ), ve = be(() => {
      const W = F ? r ?? "" : G;
      return W ? In(W, c) : null;
    }, [r, G, F, c]), $e = B(
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
        F || Y(W ? Gn(W, c, v) : "");
        const ue = W ? z0(W, l) : "";
        w?.(ue), x?.(ue);
      },
      [F, c, v, l, w, x]
    ), Xe = B(
      (W) => {
        L.current = W, typeof h == "function" ? h(W) : h && (h.current = W);
      },
      [h]
    ), ye = B(() => {
      te(!1), ee(null), p?.(), f || A.current?.focus();
    }, [f, p]), Ze = B(() => {
      if (_) return;
      const W = ve ?? Qt();
      ee(W), ie(Re(W)), te(!0), g?.();
    }, [_, ve, Re, g]), Ve = B(() => {
      U ? ye() : Ze();
    }, [U, ye, Ze]), Le = B((W) => {
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
        ee(He), l || (we(He), ye());
      },
      [$e, le, ve, l, we, ye]
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
      le && (we(le), ye());
    }, [le, we, ye]), z = B(() => {
      if (U) return;
      const W = In(G, c);
      we(W ? T0(W, J, de) : null);
    }, [U, G, c, J, de, we]), K = (W) => {
      const ue = W.target.value;
      F || Y(ue), U && ee(null);
    }, ne = (W) => {
      W.key === "Enter" ? (W.preventDefault(), U ? le && (we(le), ye()) : z()) : W.key === "Escape" ? U && (W.preventDefault(), ye()) : W.key === "ArrowDown" && !U ? (W.preventDefault(), Ze()) : W.key === "Tab" && U && te(!1), I?.(W);
    }, fe = (W) => {
      z(), D?.(W);
    }, re = (W) => {
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
          ue = Ut(q, -Hs(q)), W.preventDefault();
          break;
        case "End":
          ue = Ut(q, 6 - Hs(q)), W.preventDefault();
          break;
        case "PageUp":
          ue = Vn(q, W.shiftKey ? -12 : -1), W.preventDefault();
          break;
        case "PageDown":
          ue = Vn(q, W.shiftKey ? 12 : 1), W.preventDefault();
          break;
        case "Enter":
        case " ":
          W.preventDefault(), tt(q);
          break;
        case "Escape":
          W.preventDefault(), ye();
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
    ge(() => {
      if (!U) return;
      const W = (ue) => {
        S.current && !S.current.contains(ue.target) && ye();
      };
      return document.addEventListener("mousedown", W), () => document.removeEventListener("mousedown", W);
    }, [U, ye]), ge(() => {
      if (!U) return;
      const W = (ue) => {
        ue.key === "Escape" && ye();
      };
      return document.addEventListener("keydown", W), () => document.removeEventListener("keydown", W);
    }, [U, ye]);
    const me = () => {
      F || Y(""), w?.(""), x?.(""), L.current?.focus();
    }, Se = U && le ? Gn(le, c, v) : F ? r ? Gn(
      In(r, c) ?? Qt(),
      c,
      v
    ) : "" : G, Be = F ? !!r : G.length > 0, Je = f || U, ut = { year: q.year, month: q.month }, vt = new Date(ut.year, ut.month - 1, 1).getDay(), Q = {
      year: ut.year,
      month: ut.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, De = [];
    for (let W = 0; W < C0; W += 1)
      De.push(Ut(Q, W - vt));
    const nt = le ? ht(le) : ve ? ht(ve) : null, Gt = ht(Qt()), Ot = `${ut.year}-${yt(ut.month)}`, Ce = be(
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
    }).format(new Date(ut.year, ut.month - 1, 1)), kt = Array.from(
      { length: 7 },
      (W, ue) => new Intl.DateTimeFormat(v, { weekday: "short" }).format(
        new Date(2021, 0, 3 + ue)
      )
    ), Pt = t === "xs" ? Ee["dx-datepicker-input--xs"] : t === "sm" ? Ee["dx-datepicker-input--sm"] : t === "lg" ? Ee["dx-datepicker-input--lg"] : t === "xl" ? Ee["dx-datepicker-input--xl"] : Ee["dx-datepicker-input--md"], tn = /* @__PURE__ */ M(
      "div",
      {
        className: Ee["dx-datepicker-calendar"],
        "aria-label": m ?? "Date picker",
        children: [
          /* @__PURE__ */ M("div", { className: Ee["dx-datepicker-header"], children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: Ee["dx-datepicker-nav"],
                "aria-label": "Previous month",
                onClick: () => {
                  const W = Re(Vn(q, -1));
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
                  const W = Re(Vn(q, 1));
                  ie(W), setTimeout(() => Le(W), 0);
                },
                children: /* @__PURE__ */ s(Ne, { name: "chevron-right", size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ M(
            "div",
            {
              ref: j,
              role: "grid",
              className: Ee["dx-datepicker-grid"],
              onKeyDown: re,
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
                    children: De.slice(ue * 7, ue * 7 + 7).map((Pe) => {
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
          l && /* @__PURE__ */ M("div", { className: Ee["dx-datepicker-time"], children: [
            L0.map((W) => /* @__PURE__ */ M("label", { className: Ee["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ s("span", { className: Ee["dx-datepicker-time-label"], children: Yn(W) }),
              /* @__PURE__ */ M("div", { className: Ee["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    className: Ee["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": Yn(W),
                    value: yt(
                      (le ?? ve ?? Qt())[W]
                    ),
                    onChange: (ue) => et(W, ue.target.value),
                    onKeyDown: (ue) => {
                      ue.key === "ArrowUp" ? (ue.preventDefault(), Qe(W, 1)) : ue.key === "ArrowDown" ? (ue.preventDefault(), Qe(W, -1)) : ue.key === "Enter" && (ue.preventDefault(), V());
                    }
                  }
                ),
                /* @__PURE__ */ M("span", { className: Ee["dx-datepicker-time-buttons"], children: [
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Increase ${Yn(W).toLowerCase()}`,
                      onClick: () => Qe(W, 1),
                      children: /* @__PURE__ */ s(Ne, { name: "chevron-up", size: 11 })
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Decrease ${Yn(W).toLowerCase()}`,
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
    return /* @__PURE__ */ M(
      "div",
      {
        ref: S,
        className: [
          Ee["dx-datepicker"],
          f ? Ee["dx-datepicker-inline"] : null,
          E
        ].filter(Boolean).join(" "),
        children: [
          !f && /* @__PURE__ */ M(Oe, { children: [
            /* @__PURE__ */ s(
              "input",
              {
                ref: Xe,
                type: "text",
                autoComplete: "off",
                value: Se,
                disabled: _,
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
                onBlur: fe,
                onClick: () => {
                  a || Ve();
                },
                ...N
              }
            ),
            u && !_ && Be && /* @__PURE__ */ s(
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
                ref: A,
                type: "button",
                className: [Ee["dx-datepicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": C ?? "Open calendar",
                "aria-haspopup": "dialog",
                "aria-expanded": U,
                "aria-controls": T,
                disabled: _,
                onClick: Ve,
                children: /* @__PURE__ */ s(Ne, { name: "calendar", size: 16 })
              }
            )
          ] }),
          Je && /* @__PURE__ */ s(
            "div",
            {
              id: T,
              role: f ? void 0 : "dialog",
              className: f ? void 0 : Ee["dx-datepicker-popup"],
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
}, hk = ({
  value: e = 0,
  stars: t = 5,
  readOnly: n = !1,
  disabled: r = !1,
  ariaLabel: i = "Rating",
  clearLabel: c = "Clear",
  rateLabel: d = "Rate",
  tabIndex: o = 0,
  className: l,
  onChange: a,
  onValueChange: u
}) => {
  const [f, k] = X(e), v = B(
    (_) => Math.min(t, Math.max(1, _)),
    [t]
  ), w = B(
    (_) => {
      a?.(_), u?.(_);
    },
    [a, u]
  ), x = B(
    (_) => {
      n || r || (w(_), k(_));
    },
    [n, r, w]
  ), g = (_) => {
    if (n || r) return;
    const y = f > 0 ? f : 1;
    switch (_.key) {
      case "ArrowRight":
      case "ArrowUp":
        _.preventDefault(), x(v(y + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        _.preventDefault(), x(v(y - 1));
        break;
      case "Home":
        _.preventDefault(), x(1);
        break;
      case "End":
        _.preventDefault(), x(t);
        break;
    }
  }, p = Array.from({ length: t }, (_, y) => y + 1);
  return /* @__PURE__ */ M(
    "div",
    {
      role: "radiogroup",
      "aria-label": i,
      "aria-readonly": n || void 0,
      className: [
        en["dx-rating"],
        n ? en["dx-rating-readonly"] : null,
        r ? en["dx-rating-disabled"] : null,
        l
      ].filter(Boolean).join(" "),
      onKeyDown: g,
      children: [
        !n && !r && /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: en["dx-rating-clear"],
            "aria-label": c,
            tabIndex: e === 0 ? o : -1,
            disabled: r,
            onClick: () => x(0),
            children: /* @__PURE__ */ s(Ne, { name: "ban", size: 16 })
          }
        ),
        p.map((_) => {
          const y = _ <= e, $ = _ === (e > 0 ? e : f);
          return /* @__PURE__ */ M(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": y,
              "aria-posinset": _,
              "aria-setsize": t,
              "aria-label": `${d} ${_}`,
              tabIndex: $ ? o : -1,
              "aria-disabled": r || n || void 0,
              disabled: r || n,
              className: [
                en["dx-rating-item"],
                y ? en["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => x(_),
              onFocus: () => k(_),
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
            _
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
const mk = ({
  value: e = 0,
  valueMin: t = 0,
  valueMax: n = 100,
  min: r = 0,
  max: i = 100,
  step: c = 1,
  range: d = !1,
  orientation: o = "horizontal",
  disabled: l = !1,
  label: a = "Value",
  minLabel: u = "Min",
  maxLabel: f = "Max",
  tabIndex: k = 0,
  className: v,
  onChange: w,
  onInput: x,
  onValueChange: g,
  onInputChange: p
}) => {
  const _ = se(null), y = se(
    null
  ), [$, m] = X(null), C = $ ?? e, b = be(
    () => At(C, r, i),
    [C, r, i]
  ), O = be(
    () => At(d ? t : b, r, i),
    [d, t, b, r, i]
  ), E = be(
    () => At(d ? Math.max(n, O) : b, r, i),
    [d, n, O, b, r, i]
  ), D = B(
    (q) => {
      const ie = i - r;
      return ie <= 0 ? 0 : (At(q, r, i) - r) / ie * 100;
    },
    [r, i]
  ), I = B(
    (q, ie) => {
      const J = _.current;
      if (!J) return r;
      const de = J.getBoundingClientRect();
      let ae;
      o === "vertical" ? ae = 1 - (ie - de.top) / de.height : ae = (q - de.left) / de.width;
      const ve = r + At(ae, 0, 1) * (i - r);
      return c > 0 ? At(Math.round(ve / c) * c, r, i) : At(ve, r, i);
    },
    [r, i, c, o]
  ), N = B(
    (q) => {
      typeof q == "number" && m(q), w?.(q), g?.(q);
    },
    [w, g]
  ), h = B(
    (q) => {
      typeof q == "number" && m(q), x?.(q), p?.(q);
    },
    [x, p]
  ), S = B(
    (q, ie, J) => {
      const de = I(ie, J);
      let ae;
      d ? q === "min" ? ae = { min: Math.min(de, E), max: E } : ae = { min: O, max: Math.max(de, O) } : ae = de, h(ae), y.current === null && N(ae);
    },
    [d, I, O, E, h, N]
  ), L = B(
    (q, ie) => {
      const J = (c > 0 ? c : 1) * ie;
      let de;
      d ? q === "min" ? de = {
        min: At(O + J, r, E),
        max: E
      } : de = {
        min: O,
        max: At(E + J, O, i)
      } : de = At(b + J, r, i), N(de);
    },
    [d, c, r, i, O, E, b, N]
  ), A = (q, ie) => {
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
          ie.preventDefault(), N(d ? q === "min" ? { min: r, max: E } : { min: O, max: O } : r);
          break;
        case "End":
          ie.preventDefault(), N(d ? q === "min" ? { min: E, max: E } : { min: O, max: i } : i);
          break;
      }
  }, j = (q, ie) => {
    l || (ie.preventDefault(), ie.currentTarget.focus(), typeof ie.currentTarget.setPointerCapture == "function" && ie.currentTarget.setPointerCapture(ie.pointerId), y.current = { key: q, pointerId: ie.pointerId }, S(q, ie.clientX, ie.clientY));
  }, T = (q) => {
    !y.current || y.current.pointerId !== q.pointerId || (q.preventDefault(), S(y.current.key, q.clientX, q.clientY));
  }, F = (q) => {
    !y.current || y.current.pointerId !== q.pointerId || (y.current = null, q.preventDefault(), N(d ? { min: O, max: E } : b));
  }, [G, Y] = X(null), U = D(O), te = D(E), le = d ? U : 0, ee = te;
  return /* @__PURE__ */ s(
    "div",
    {
      className: [
        ln["dx-slider"],
        o === "vertical" ? ln["dx-slider-vertical"] : null,
        l ? ln["dx-slider-disabled"] : null,
        v
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ M("div", { ref: _, className: ln["dx-slider-track"], children: [
        /* @__PURE__ */ s(
          "div",
          {
            className: ln["dx-slider-range"],
            style: o === "vertical" ? { bottom: `${le}%`, height: `${ee - le}%` } : { left: `${le}%`, width: `${ee - le}%` }
          }
        ),
        /* @__PURE__ */ s(
          "div",
          {
            role: "slider",
            "aria-valuemin": r,
            "aria-valuemax": i,
            "aria-valuenow": Math.round(O),
            "aria-orientation": o,
            "aria-label": d ? u : a,
            "aria-disabled": l || void 0,
            tabIndex: l || d && G === "max" ? -1 : k,
            className: ln["dx-slider-handle"],
            style: o === "vertical" ? { bottom: `calc(${U}% - 8px)` } : { left: `calc(${U}% - 8px)` },
            onKeyDown: (q) => A("min", q),
            onPointerDown: (q) => j("min", q),
            onPointerMove: T,
            onPointerUp: F,
            onFocus: () => Y("min")
          }
        ),
        d && /* @__PURE__ */ s(
          "div",
          {
            role: "slider",
            "aria-valuemin": r,
            "aria-valuemax": i,
            "aria-valuenow": Math.round(E),
            "aria-orientation": o,
            "aria-label": f,
            "aria-disabled": l || void 0,
            tabIndex: l || G === "min" ? -1 : k,
            className: ln["dx-slider-handle"],
            style: o === "vertical" ? { bottom: `calc(${te}% - 8px)` } : { left: `calc(${te}% - 8px)` },
            onKeyDown: (q) => A("max", q),
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
}, P0 = "-10675199.02:48:05.4775808", R0 = "10675199.02:48:05.4775808", Xt = 86400, Vt = 3600, Ct = 60, is = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, Us = {
  days: Xt,
  hours: Vt,
  minutes: Ct,
  seconds: 1
}, B0 = {
  day: Xt,
  hour: Vt,
  minute: Ct,
  second: 1
};
function gn(e) {
  return String(e).padStart(2, "0");
}
function Rn(e) {
  const t = e.trim();
  if (!t) return null;
  let n = 1, r = t;
  r.startsWith("-") ? (n = -1, r = r.slice(1)) : r.startsWith("+") && (r = r.slice(1));
  const i = /^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(
    r
  );
  if (i) {
    if (!i.slice(1).some((f) => f != null)) return null;
    const o = i[1] != null ? Number(i[1]) : 0, l = i[2] != null ? Number(i[2]) : 0, a = i[3] != null ? Number(i[3]) : 0, u = i[4] != null ? Number(i[4]) : 0;
    return n * (o * Xt + l * Vt + a * Ct + u);
  }
  const c = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(
    r
  );
  if (c) {
    const d = c[1] != null ? Number(c[1]) : 0, o = Number(c[2]), l = Number(c[3]), a = c[4] != null ? Number(c[4]) : 0, u = c[5] != null ? +`0.${c[5]}` : 0;
    return o > 23 || l > 59 || a > 59 ? null : n * (d * Xt + o * Vt + l * Ct + a + u);
  }
  return null;
}
function q0(e) {
  return e.days * Xt + e.hours * Vt + e.minutes * Ct + e.seconds;
}
function Ws(e) {
  let t = Math.abs(e);
  const n = Math.floor(t / Xt);
  t %= Xt;
  const r = Math.floor(t / Vt);
  t %= Vt;
  const i = Math.floor(t / Ct), c = Math.round(t % Ct * 1e9) / 1e9;
  return { days: n, hours: r, minutes: i, seconds: c };
}
function ps(e, t) {
  const n = e < 0;
  let r = Math.abs(e);
  t === "minute" ? r = Math.round(r / Ct) * Ct : t === "hour" ? r = Math.round(r / Vt) * Vt : t === "day" && (r = Math.round(r / Xt) * Xt);
  let i = Math.round(r % Ct);
  const c = i === 60 ? 1 : 0;
  i = i === 60 ? 0 : i;
  const d = Math.floor(r / Ct) + c, o = d % 60, l = Math.floor(d / 60), a = l % 24, u = Math.floor(l / 24), f = n ? "-" : "", k = u > 0 ? `${u}.` : "";
  switch (t) {
    case "day":
      return `${f}${u} day${u === 1 ? "" : "s"}`;
    case "hour":
      return `${f}${k}${gn(a)}`;
    case "minute":
      return `${f}${k}${gn(a)}:${gn(o)}`;
    default:
      return `${f}${k}${gn(a)}:${gn(o)}:${gn(i)}`;
  }
}
function Xs(e, t = "second") {
  const n = Rn(e);
  return n === null ? "" : ps(n, t);
}
function cs(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const gk = Fe(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: i,
    min: c = P0,
    max: d = R0,
    step: o = "1",
    precision: l = "second",
    showDays: a = !0,
    showHours: u = !0,
    showMinutes: f = !0,
    showSeconds: k = !0,
    allowClear: v = !1,
    inline: w = !1,
    onChange: x,
    onValueChange: g,
    onOpen: p,
    onClose: _,
    disabled: y,
    placeholder: $,
    ariaLabel: m,
    triggerLabel: C,
    clearLabel: b,
    tabIndex: O,
    className: E,
    onBlur: D,
    onKeyDown: I,
    ...N
  }, h) {
    const S = se(null), L = se(null), A = se(null), j = qe(), T = r !== void 0, [F, G] = X(
      () => i != null ? Xs(i, l) : ""
    ), [Y, U] = X(!1), [te, le] = X(null), [ee, q] = X(null), ie = be(
      () => Rn(c) ?? -Number.MAX_SAFE_INTEGER,
      [c]
    ), J = be(
      () => Rn(d) ?? Number.MAX_SAFE_INTEGER,
      [d]
    ), de = be(() => {
      const Q = Number.parseFloat(o);
      return Number.isNaN(Q) || Q <= 0 ? 1 : Q;
    }, [o]), ae = be(() => {
      const Q = T ? r ?? "" : F;
      return Q ? Rn(Q) : null;
    }, [r, F, T]), ve = B(
      (Q) => {
        const De = Q === null ? "" : ps(Q, l);
        T || G(De), x?.(De), g?.(De);
      },
      [T, l, x, g]
    ), $e = B(
      (Q) => {
        Q && te !== null && ve(te), U(!1), le(null), q(null), _?.(), w || A.current?.focus();
      },
      [w, te, ve, _]
    ), Re = B(() => {
      y || (le(ae ?? 0), U(!0), p?.());
    }, [y, ae, p]), we = B(() => {
      Y ? $e(!1) : Re();
    }, [Y, $e, Re]), Xe = B(
      (Q, De) => {
        le((nt) => {
          const Ot = (nt ?? ae ?? 0) + De * de * Us[Q];
          return cs(Ot, ie, J);
        });
      },
      [ae, de, ie, J]
    ), ye = B(
      (Q) => {
        const De = ee?.[Q];
        if (De == null) return;
        const nt = Number.parseFloat(De), Gt = Number.isNaN(nt) ? 0 : nt;
        le((Ot) => {
          const Ce = Ot ?? ae ?? 0, Ge = Ws(Ce);
          Ge[Q] = Gt;
          const Pt = (Ce < 0 ? -1 : 1) * q0(Ge);
          return cs(Pt, ie, J);
        }), q(null);
      },
      [ee, ae, ie, J]
    ), Ze = (Q, De) => {
      q((nt) => ({ ...nt ?? {}, [Q]: De }));
    }, Ve = (Q, De) => {
      switch (De.key) {
        case "ArrowUp":
          De.preventDefault(), ye(Q), Xe(Q, 1);
          break;
        case "ArrowDown":
          De.preventDefault(), ye(Q), Xe(Q, -1);
          break;
        case "Home":
          De.preventDefault(), ye(Q), le(ie);
          break;
        case "End":
          De.preventDefault(), ye(Q), le(J);
          break;
        case "Enter":
          De.preventDefault(), ye(Q), $e(!0);
          break;
      }
    }, Le = B(() => {
      if (Y) return;
      const Q = Rn(F);
      ve(Q !== null ? cs(Q, ie, J) : null);
    }, [Y, F, ie, J, ve]), tt = (Q) => {
      T || G(Q.target.value);
    }, Qe = (Q) => {
      Q.key === "Enter" ? (Q.preventDefault(), Y ? $e(!0) : Le()) : Q.key === "Escape" && Y ? (Q.preventDefault(), $e(!1)) : Q.key === "ArrowDown" && !Y ? (Q.preventDefault(), Re()) : Q.key === "Tab" && Y && U(!1), I?.(Q);
    }, et = (Q) => {
      Le(), D?.(Q);
    }, V = () => {
      T || G(""), x?.(""), g?.(""), L.current?.focus();
    };
    ge(() => {
      if (!Y) return;
      const Q = (De) => {
        S.current && !S.current.contains(De.target) && $e(!1);
      };
      return document.addEventListener("mousedown", Q), () => document.removeEventListener("mousedown", Q);
    }, [Y, $e]), ge(() => {
      if (!Y) return;
      const Q = (De) => {
        De.key === "Escape" && $e(!1);
      };
      return document.addEventListener("keydown", Q), () => document.removeEventListener("keydown", Q);
    }, [Y, $e]), ge(() => {
      if (w && te !== null) {
        const Q = ae;
        (Q === null || Math.abs(te - Q) > 1e-9) && ve(te);
      }
    }, [w, te, ae, ve]);
    const z = B(
      (Q) => {
        L.current = Q, typeof h == "function" ? h(Q) : h && (h.current = Q);
      },
      [h]
    ), K = T ? r ? Xs(r, l) : "" : F, ne = T ? !!r : F.length > 0, fe = w || Y, re = te ?? ae ?? 0, me = Ws(re), Se = B0[l], Je = ["days", "hours", "minutes", "seconds"].filter(
      (Q) => Us[Q] >= Se && (Q === "days" ? a : Q === "hours" ? u : Q === "minutes" ? f : k)
    ), ut = t === "xs" ? Ke["dx-timespanpicker-input--xs"] : t === "sm" ? Ke["dx-timespanpicker-input--sm"] : t === "lg" ? Ke["dx-timespanpicker-input--lg"] : t === "xl" ? Ke["dx-timespanpicker-input--xl"] : Ke["dx-timespanpicker-input--md"], vt = /* @__PURE__ */ M("div", { className: Ke["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ s("div", { className: Ke["dx-timespanpicker-preview"], "aria-live": "polite", children: ps(re, l) }),
      /* @__PURE__ */ s("div", { className: Ke["dx-timespanpicker-units"], children: Je.map((Q) => /* @__PURE__ */ M("label", { className: Ke["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ s("span", { className: Ke["dx-timespanpicker-unit-label"], children: is[Q] }),
        /* @__PURE__ */ M("span", { className: Ke["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ s(
            "input",
            {
              className: Ke["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: ee?.[Q] ?? String(me[Q]),
              onChange: (De) => Ze(Q, De.target.value),
              onKeyDown: (De) => Ve(Q, De),
              onBlur: () => ye(Q)
            }
          ),
          /* @__PURE__ */ M("span", { className: Ke["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${is[Q].toLowerCase()}`,
                onClick: () => {
                  ye(Q), Xe(Q, 1);
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
                  ye(Q), Xe(Q, -1);
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
    return /* @__PURE__ */ M(
      "div",
      {
        ref: S,
        className: [
          Ke["dx-timespanpicker"],
          w ? Ke["dx-timespanpicker-inline"] : null,
          E
        ].filter(Boolean).join(" "),
        children: [
          !w && /* @__PURE__ */ M(Oe, { children: [
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
                  ut,
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
                ref: A,
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
          fe && /* @__PURE__ */ s(
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
), F0 = "_wrapper_1rhh5_1", H0 = "_cells_1rhh5_8", K0 = "_cell_1rhh5_8", U0 = "_invalid_1rhh5_63", W0 = "_live_1rhh5_73", an = {
  wrapper: F0,
  cells: H0,
  cell: K0,
  "cell-sm": "_cell-sm_1rhh5_45",
  "cell-md": "_cell-md_1rhh5_51",
  "cell-lg": "_cell-lg_1rhh5_57",
  invalid: U0,
  live: W0
};
function Vs(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const xk = Fe(
  function({
    length: t = 6,
    value: n,
    defaultValue: r,
    onChange: i,
    invalid: c = !1,
    size: d = "md",
    autoFocus: o = !1,
    disabled: l = !1,
    label: a = "Security code",
    liveAnnounce: u = !0,
    className: f,
    "aria-label": k
  }, v) {
    const w = qe(), x = n !== void 0, [g, p] = X(Vs(r).join("")), _ = x ? Vs(n).join("") : g, y = Array.from({ length: t }, (N, h) => _[h] ?? ""), $ = se([]), [m, C] = X(""), b = (N) => {
      x || p(N), i?.(N);
    }, O = (N) => {
      const h = $.current[N];
      h && !h.disabled && (h.focus(), h.select());
    }, E = (N, h) => {
      const S = h.replace(/\D/g, "").slice(-1), L = _.split("");
      if (S) {
        L[N] = S;
        const A = L.join("").slice(0, t);
        b(A), A.length < t ? O(N + 1) : u && C("Code complete");
      }
    }, D = (N, h) => {
      if (h.key === "Backspace") {
        if (h.preventDefault(), _[N]) {
          const S = _.split("");
          S[N] = "", b(S.join(""));
        } else if (N > 0) {
          const S = _.split("");
          S[N - 1] = "", b(S.join("")), O(N - 1);
        }
      } else h.key === "ArrowLeft" && N > 0 ? (h.preventDefault(), O(N - 1)) : h.key === "ArrowRight" && N < t - 1 ? (h.preventDefault(), O(N + 1)) : h.key === "Home" ? (h.preventDefault(), O(0)) : h.key === "End" && (h.preventDefault(), O(t - 1));
    }, I = (N, h) => {
      h.preventDefault();
      const S = h.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!S) return;
      const L = _.split("");
      let A = 0;
      for (let T = 0; T < S.length && N + T < t; T++)
        L[N + T] = S[T] ?? "", A++;
      const j = L.join("");
      b(j), j.length >= t ? u && C("Code complete") : O(N + A);
    };
    return /* @__PURE__ */ M(
      "div",
      {
        className: [an.wrapper, f].filter(Boolean).join(" "),
        role: "group",
        "aria-label": k ?? a,
        "data-invalid": c || void 0,
        children: [
          /* @__PURE__ */ s("div", { className: [an.cells, an[d]].join(" "), children: y.map((N, h) => /* @__PURE__ */ s(
            "input",
            {
              ref: (S) => {
                $.current[h] = S, h === 0 && v && (typeof v == "function" ? v(S) : v.current = S);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: N,
              disabled: l,
              "aria-label": `Digit ${h + 1} of ${t}`,
              "aria-invalid": c && N !== "" ? !0 : void 0,
              autoFocus: o && h === 0,
              className: [
                an.cell,
                an[`cell-${d}`],
                c ? an.invalid : null
              ].filter(Boolean).join(" "),
              onChange: (S) => E(h, S.target.value),
              onKeyDown: (S) => D(h, S),
              onPaste: (S) => I(h, S),
              onFocus: (S) => S.target.select(),
              onBlur: () => {
                u && C("");
              }
            },
            h
          )) }),
          u && /* @__PURE__ */ s(
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
), X0 = "_wrapper_1p09k_1", V0 = "_header_1p09k_7", G0 = "_label_1p09k_15", Y0 = "_clear_1p09k_22", Z0 = "_canvas_1p09k_53", J0 = "_disabled_1p09k_69", xn = {
  wrapper: X0,
  header: V0,
  label: G0,
  clear: Y0,
  canvas: Z0,
  disabled: J0
}, bk = Fe(
  function({
    value: t,
    defaultValue: n,
    onChange: r,
    penColor: i = "#1c1c1c",
    penWidth: c = 2.5,
    clearLabel: d = "Clear",
    ariaLabel: o = "Signature",
    width: l,
    height: a = 140,
    disabled: u = !1,
    className: f
  }, k) {
    const v = se(null), w = se(!1), x = se(!1), g = se({ x: 0, y: 0 });
    ge(() => {
      const b = v.current;
      if (!b) return;
      const O = window.devicePixelRatio || 1, E = Math.round((l ?? b.clientWidth) * O), D = Math.round(a * O);
      (b.width !== E || b.height !== D) && (b.width = E, b.height = D);
      const I = b.getContext("2d");
      if (!I) return;
      I.setTransform(O, 0, 0, O, 0, 0), I.lineWidth = c, I.strokeStyle = i, I.lineCap = "round", I.lineJoin = "round";
      const N = t ?? n;
      if (N) {
        const h = new Image();
        h.onload = () => {
          I.drawImage(h, 0, 0, b.clientWidth, a);
        }, h.src = N;
      }
    }, [t, n, i, c, l, a]);
    const p = () => {
      const b = v.current;
      if (!b) return;
      const O = b.toDataURL("image/png");
      r?.(O);
    }, _ = () => {
      const b = v.current;
      if (!b) return;
      const O = b.getContext("2d");
      O && O.clearRect(0, 0, b.width, b.height), r?.("");
    };
    xs(k, () => ({
      clear: _,
      toDataURL: (b = "image/png", O) => v.current?.toDataURL(b, O) ?? ""
    }));
    const y = (b) => {
      const O = b.currentTarget.getBoundingClientRect();
      return { x: b.clientX - O.left, y: b.clientY - O.top };
    }, $ = (b) => {
      u || (b.preventDefault(), typeof b.currentTarget.setPointerCapture == "function" && b.currentTarget.setPointerCapture(b.pointerId), w.current = !0, x.current = !1, g.current = y(b));
    }, m = (b) => {
      if (!w.current) return;
      b.preventDefault();
      const O = b.currentTarget.getContext("2d");
      if (!O) return;
      const E = y(b);
      O.beginPath(), O.moveTo(g.current.x, g.current.y), O.lineTo(E.x, E.y), O.stroke(), g.current = E, x.current = !0;
    }, C = (b) => {
      w.current && (b.preventDefault(), w.current = !1, x.current && p());
    };
    return /* @__PURE__ */ M(
      "div",
      {
        className: [
          xn.wrapper,
          f,
          u ? xn.disabled : null
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ M("div", { className: xn.header, children: [
            /* @__PURE__ */ s("span", { className: xn.label, children: o }),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: xn.clear,
                onClick: _,
                disabled: u,
                children: d
              }
            )
          ] }),
          /* @__PURE__ */ s(
            "canvas",
            {
              ref: v,
              role: "img",
              "aria-label": o,
              "aria-disabled": u || void 0,
              style: {
                width: l ? `${l}px` : void 0,
                height: `${a}px`
              },
              className: xn.canvas,
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
), Q0 = "_wrapper_cdx3b_1", ex = "_trigger_cdx3b_7", tx = "_list_cdx3b_35", nx = "_row_cdx3b_44", sx = "_name_cdx3b_59", rx = "_size_cdx3b_68", ox = "_progress_cdx3b_74", lx = "_fill_cdx3b_82", ax = "_status_cdx3b_99", ix = "_remove_cdx3b_106", jt = {
  wrapper: Q0,
  trigger: ex,
  list: tx,
  row: nx,
  name: sx,
  size: rx,
  progress: ox,
  fill: lx,
  status: ax,
  remove: ix
};
function Gs(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const yk = Fe(function({
  url: t,
  multiple: n = !1,
  parameterName: r = "files",
  auto: i = !0,
  headers: c,
  accept: d,
  maxFileCount: o = Number.POSITIVE_INFINITY,
  maxFileSize: l,
  chooseText: a = "Upload",
  children: u,
  onProgress: f,
  onComplete: k,
  onError: v
}, w) {
  const x = se(null), [g, p] = X([]), _ = se(/* @__PURE__ */ new Map()), y = (O, E) => {
    p(
      (D) => D.map((I) => I.file.name === O ? { ...I, ...E } : I)
    );
  }, $ = (O) => {
    if (!t) return;
    const E = new XMLHttpRequest();
    _.current.set(O.file.name, E);
    const D = new FormData();
    if (D.append(r, O.file), E.upload.addEventListener("progress", (I) => {
      if (!I.lengthComputable) return;
      const N = Math.round(I.loaded / I.total * 100);
      y(O.file.name, { state: "uploading", progress: N }), f?.(O.file.name, N);
    }), E.addEventListener("load", () => {
      E.status >= 200 && E.status < 300 ? (y(O.file.name, { state: "complete", progress: 100 }), k?.(O.file.name)) : (y(O.file.name, {
        state: "error",
        message: `HTTP ${E.status}`
      }), v?.(O.file.name, `HTTP ${E.status}`));
    }), E.addEventListener("error", () => {
      y(O.file.name, { state: "error", message: "Network error" }), v?.(O.file.name, "Network error");
    }), c)
      for (const [I, N] of Object.entries(c))
        E.setRequestHeader(I, N);
    E.open("POST", t), E.send(D), y(O.file.name, { state: "uploading", progress: 0 });
  }, m = (O) => {
    if (!O) return;
    const E = [...O], D = [];
    let I = Math.max(0, o - g.length);
    for (const h of E) {
      if (l != null && h.size > l) {
        v?.(
          h.name,
          `File too large (maximum ${Gs(l)})`
        );
        continue;
      }
      if (I <= 0) {
        v?.(h.name, `Too many files (maximum ${o})`);
        continue;
      }
      I -= 1, D.push(h);
    }
    const N = D.map((h) => ({
      file: h,
      state: "pending",
      progress: 0
    }));
    p((h) => [...h, ...N]), x.current && (x.current.value = ""), i && N.forEach($);
  }, C = (O) => {
    _.current.get(O)?.abort(), _.current.delete(O), p((D) => D.filter((I) => I.file.name !== O));
  }, b = u ?? /* @__PURE__ */ M(
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
  return xs(w, () => ({
    open: () => x.current?.click(),
    upload: () => g.forEach((O) => O.state === "pending" ? $(O) : null)
  })), /* @__PURE__ */ M("div", { className: jt.wrapper, children: [
    b,
    /* @__PURE__ */ s(
      "input",
      {
        ref: x,
        type: "file",
        hidden: !0,
        multiple: n,
        accept: d,
        "data-testid": "upload-input",
        onChange: (O) => m(O.target.files)
      }
    ),
    !u && g.length > 0 && /* @__PURE__ */ s("ul", { className: jt.list, children: g.map(({ file: O, state: E, progress: D, message: I }) => /* @__PURE__ */ M(
      "li",
      {
        className: jt.row,
        "data-state": E,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ s("span", { className: jt.name, children: O.name }),
          /* @__PURE__ */ s("span", { className: jt.size, children: Gs(O.size) }),
          /* @__PURE__ */ s(
            "span",
            {
              className: jt.progress,
              role: "progressbar",
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": D,
              children: /* @__PURE__ */ s(
                "span",
                {
                  className: jt.fill,
                  style: { width: `${D}%` }
                }
              )
            }
          ),
          /* @__PURE__ */ s("span", { className: jt.status, role: "status", children: E === "uploading" ? "Uploading" : E === "complete" ? "Complete" : E === "error" ? I ?? "Failed" : "Pending" }),
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
}), cx = "_zone_e481w_1", dx = "_dragging_e481w_23", ux = "_caption_e481w_28", fx = "_browse_e481w_40", _x = "_disabled_e481w_67", An = {
  zone: cx,
  dragging: dx,
  caption: ux,
  browse: fx,
  disabled: _x
};
function px(e, t) {
  return t ? t.split(",").some((n) => {
    if (n = n.trim(), !n) return !1;
    if (n.startsWith("."))
      return e.name.toLowerCase().endsWith(n.toLowerCase());
    if (n.endsWith("/*")) {
      const r = n.slice(0, -1);
      return e.type.startsWith(r);
    }
    return e.type === n;
  }) : !0;
}
const vk = Fe(
  function({
    accept: t,
    multiple: n = !1,
    onDrop: r,
    label: i = "Drop files here or browse",
    dragLabel: c = "Drop to attach",
    browseText: d = "Browse",
    disabled: o = !1,
    className: l
  }, a) {
    const u = se(null), [f, k] = X(!1), v = (_) => {
      if (!_ || _.length === 0) return;
      const y = [..._].filter(($) => px($, t ?? ""));
      y.length !== 0 && r?.(y);
    }, w = (_) => {
      o || (_.preventDefault(), k(!0));
    }, x = (_) => {
      o || (_.preventDefault(), _.dataTransfer.dropEffect = "copy", k(!0));
    }, g = (_) => {
      o || _.currentTarget.contains(_.relatedTarget) || k(!1);
    }, p = (_) => {
      o || (_.preventDefault(), k(!1), v(_.dataTransfer.files));
    };
    return xs(a, () => ({
      open: () => u.current?.click()
    })), /* @__PURE__ */ M(
      "div",
      {
        role: "region",
        "aria-label": i,
        className: [
          An.zone,
          f ? An.dragging : null,
          o ? An.disabled : null,
          l
        ].filter(Boolean).join(" "),
        onDragEnter: w,
        onDragOver: x,
        onDragLeave: g,
        onDrop: p,
        children: [
          /* @__PURE__ */ s("p", { className: An.caption, children: f ? c : i }),
          !o && /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: An.browse,
              onClick: () => u.current?.click(),
              children: d
            }
          ),
          /* @__PURE__ */ s(
            "input",
            {
              ref: u,
              type: "file",
              hidden: !0,
              multiple: n,
              accept: t,
              "data-testid": "dropzone-input",
              onChange: (_) => {
                v(_.target.files), _.target.value = "";
              }
            }
          )
        ]
      }
    );
  }
), hx = "_root_mq6fh_1", mx = "_menubar_mq6fh_5", gx = "_horizontal_mq6fh_15", xx = "_vertical_mq6fh_20", bx = "_itemWrapper_mq6fh_25", yx = "_item_mq6fh_25", vx = "_disabled_mq6fh_61", kx = "_icon_mq6fh_68", wx = "_text_mq6fh_75", $x = "_caret_mq6fh_79", Nx = "_hasChildren_mq6fh_85", Ox = "_submenu_mq6fh_94", Sx = "_submenuItem_mq6fh_118", Mx = "_flyout_mq6fh_155", Dx = "_hamburger_mq6fh_175", Cx = "_responsive_mq6fh_198", zx = "_mobileOpen_mq6fh_207", We = {
  root: hx,
  menubar: mx,
  horizontal: gx,
  vertical: xx,
  itemWrapper: bx,
  item: yx,
  disabled: vx,
  icon: kx,
  text: wx,
  caret: $x,
  hasChildren: Nx,
  submenu: Ox,
  submenuItem: Sx,
  flyout: Mx,
  hamburger: Dx,
  responsive: Cx,
  mobileOpen: zx
}, ts = Bn(null);
function Ex(e, t) {
  if (!e || typeof window > "u") return !1;
  const n = window.location.hash.replace(/^#\/?/, ""), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : n === r || n.startsWith(`${r}/`) : n === r;
}
function Ix(e, t, n, r, i) {
  const [c, d] = X(n), o = e ? t ?? !1 : c, l = B(
    (a) => {
      e || d(a), r?.(a);
    },
    [e, r]
  );
  return ge(() => {
    i > 0 && l(!1);
  }, [i]), [o, l];
}
function Ax({ icon: e, iconColor: t, image: n, imageAlt: r }) {
  return n ? /* @__PURE__ */ s("span", { className: We.icon, "aria-hidden": "true", children: /* @__PURE__ */ s("img", { src: n, alt: r ?? "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ s("span", { className: We.icon, "aria-hidden": "true", style: t ? { color: t } : void 0, children: /* @__PURE__ */ s(Ne, { name: e, size: 16 }) }) : null;
}
function cr(e) {
  return dt(e) && e.type === dr;
}
function vs({ itemKey: e, props: t }) {
  const n = dn(ts);
  if (!n) throw new Error("MenuItem must be used inside <Menu>");
  const { text: r, value: i, path: c, disabled: d, template: o } = t, l = be(
    () => qn.toArray(t.children).filter(dt),
    [t.children]
  ), a = l.length > 0, u = !!d, f = t.open !== void 0, [k, v] = Ix(f, t.open, t.defaultOpen ?? !1, t.onOpenChange, n.closeSignal), w = n.level === 0, x = se(0), p = (w && !f ? n.openKey === e : null) ?? k, _ = B(
    (A) => {
      w && !f ? n.setOpenKey(A ? e : null) : (v(A), w && n.setOpenKey(null));
    },
    [w, f, n, e, v]
  ), [, y] = X(0);
  ge(() => {
    if (!c) return;
    const A = () => y((j) => j + 1);
    return window.addEventListener("hashchange", A), () => window.removeEventListener("hashchange", A);
  }, [c]);
  const $ = c && !a ? Ex(c, t.match) : !1, m = B(
    (A) => {
      if (u) {
        A.preventDefault();
        return;
      }
      const j = { text: r, value: i, path: c };
      [n.emit(j), t.onClick?.(j)].includes(!1) && A.preventDefault(), n.closeAll();
    },
    [u, r, i, c, n, t]
  ), C = B(() => {
    if (!u) {
      if (p && (Date.now() - x.current < 600 || !n.clickToOpen)) {
        x.current = 0;
        return;
      }
      _(!p);
    }
  }, [u, p, _, n.clickToOpen]), b = B(() => {
    !a || u || n.clickToOpen || (x.current = Date.now(), _(!0));
  }, [a, u, n.clickToOpen, _]), O = B(() => {
    n.clickToOpen || _(!1);
  }, [n.clickToOpen, _]), E = `${n.baseId}-submenu-${e}`, [D, I] = X(null);
  ge(() => {
    n.closeSignal > 0 && I(null);
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
      openKey: D,
      setOpenKey: I
    }),
    [n, D]
  ), h = a ? /* @__PURE__ */ s("span", { className: We.caret, "aria-hidden": "true", children: /* @__PURE__ */ s(Ne, { name: n.flyout && !w ? "chevron-right" : "chevron-down", size: 10 }) }) : null, S = o ?? /* @__PURE__ */ M(Oe, { children: [
    /* @__PURE__ */ s(Ax, { icon: t.icon, iconColor: t.iconColor, image: t.image, imageAlt: t.imageAlt }),
    /* @__PURE__ */ s("span", { className: We.text, children: r }),
    h
  ] });
  if (a) {
    let A = function(j) {
      const T = Array.from(j.currentTarget.children).map((Y) => Y.querySelector('[role="menuitem"]')).filter(
        (Y) => Y != null && Y.getAttribute("aria-disabled") !== "true" && !Y.hasAttribute("disabled")
      ), F = document.activeElement, G = F ? T.indexOf(F) : -1;
      j.key === "ArrowDown" ? (j.preventDefault(), j.stopPropagation(), (G === -1 ? T[0] : T[(G + 1) % T.length])?.focus()) : j.key === "ArrowUp" ? (j.preventDefault(), j.stopPropagation(), (G === -1 ? T[T.length - 1] : T[(G - 1 + T.length) % T.length])?.focus()) : j.key === "ArrowRight" ? F?.getAttribute("aria-haspopup") === "menu" && (j.preventDefault(), j.stopPropagation(), F.getAttribute("aria-expanded") !== "true" && F.click(), document.getElementById(F.getAttribute("aria-controls") ?? "")?.querySelector('[role="menuitem"]')?.focus()) : (j.key === "ArrowLeft" || j.key === "Escape") && (j.preventDefault(), j.stopPropagation(), _(!1));
    };
    return /* @__PURE__ */ M(
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
              "aria-disabled": u || void 0,
              "aria-haspopup": "menu",
              "aria-expanded": p,
              "aria-controls": E,
              tabIndex: u ? -1 : 0,
              disabled: u,
              className: [We.item, u ? We.disabled : null, We.hasChildren].filter(Boolean).join(" "),
              onClick: C,
              children: S
            }
          ),
          p ? /* @__PURE__ */ s(
            "div",
            {
              id: E,
              role: "menu",
              "aria-label": r,
              className: [We.submenu, n.flyout && !w ? We.flyout : null].filter(Boolean).join(" "),
              "data-dx-menu-submenu": "",
              onKeyDown: A,
              children: /* @__PURE__ */ s(ts.Provider, { value: N, children: l.map(
                (j, T) => cr(j) ? /* @__PURE__ */ s(
                  vs,
                  {
                    itemKey: `${e}-${T}`,
                    props: j.props
                  },
                  `${e}-${T}`
                ) : (
                  // Separators / custom content (Radzen `<hr />` parity) render verbatim.
                  /* @__PURE__ */ s(gs, { children: j }, `${e}-custom-${T}`)
                )
              ) })
            }
          ) : null
        ]
      }
    );
  }
  const L = {
    role: "menuitem",
    "aria-disabled": u || void 0,
    "aria-current": $ ? "page" : void 0,
    tabIndex: u ? -1 : 0,
    "data-dx-menu-item": "",
    className: [We.submenuItem, u ? We.disabled : null].filter(Boolean).join(" "),
    onClick: m
  };
  return c && !u ? /* @__PURE__ */ s("div", { className: We.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ s("a", { href: c, target: t.target, ...L, children: S }) }) : /* @__PURE__ */ s("div", { className: We.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ s("button", { type: "button", disabled: u, ...L, children: S }) });
}
function dr(e) {
  if (!dn(ts)) throw new Error("MenuItem must be used inside <Menu>");
  return /* @__PURE__ */ s(vs, { itemKey: e.text, props: e });
}
function jx({
  children: e,
  clickToOpen: t = !0,
  flyout: n = !1,
  responsive: r = !0,
  isContextMenu: i = !1,
  onClick: c,
  onClose: d,
  ariaLabel: o = "Menu",
  toggleAriaLabel: l = "Toggle menu",
  className: a,
  ...u
}) {
  const f = qe(), k = se(null), v = se(null), [w, x] = X(null), [g, p] = X(0), [_, y] = X(!1), $ = se(null), m = B(
    (D) => c?.(D),
    [c]
  ), C = B(() => {
    x(null), p((D) => D + 1);
  }, []);
  ge(() => {
    if (w == null) return;
    const D = (I) => {
      k.current && !k.current.contains(I.target) && C();
    };
    return document.addEventListener("mousedown", D), () => document.removeEventListener("mousedown", D);
  }, [w, C]), ge(() => {
    $.current != null && w === $.current && (document.getElementById(`${f}-submenu-${w}`)?.querySelector('[role="menuitem"]:not([aria-disabled="true"])')?.focus(), $.current = null);
  }, [w, f]);
  const b = be(
    () => ({ baseId: f, flyout: n, clickToOpen: t, level: 0, closeSignal: g, emit: m, closeAll: C, openKey: w, setOpenKey: x }),
    [f, n, t, g, m, C, w]
  ), O = be(() => qn.toArray(e).filter(dt), [e]), E = (D) => {
    const I = v.current;
    if (!I) return;
    const N = Array.from(I.children).map((L) => L.querySelector('[role="menuitem"]')).filter(
      (L) => L != null && !L.hasAttribute("disabled") && L.getAttribute("aria-disabled") !== "true"
    );
    if (w != null) {
      const L = document.getElementById(`${f}-submenu-${w}`);
      if (L) {
        const A = Array.from(L.querySelectorAll('[role="menuitem"]')).filter(
          (F) => F.getAttribute("aria-disabled") !== "true" && !F.hasAttribute("disabled")
        ), j = document.activeElement, T = j ? A.indexOf(j) : -1;
        if (D.key === "ArrowDown") {
          D.preventDefault(), (T === -1 ? A[0] : A[(T + 1) % A.length])?.focus();
          return;
        }
        if (D.key === "ArrowUp") {
          D.preventDefault(), (T === -1 ? A[A.length - 1] : A[(T - 1 + A.length) % A.length])?.focus();
          return;
        }
        if (D.key === "Escape") {
          D.preventDefault(), C(), d?.(), I.querySelector(`[data-index="${w}"]`)?.focus();
          return;
        }
        if (D.key === "Enter" || D.key === " ") return;
      }
      if (D.key === "Escape") {
        D.preventDefault(), C(), d?.();
        return;
      }
    }
    const h = document.activeElement, S = h ? N.indexOf(h) : -1;
    if (D.key === "ArrowRight") {
      if (D.preventDefault(), N.length === 0) return;
      N[S === -1 ? 0 : (S + 1) % N.length]?.focus();
      return;
    }
    if (D.key === "ArrowLeft") {
      if (D.preventDefault(), N.length === 0) return;
      N[S === -1 ? N.length - 1 : (S - 1 + N.length) % N.length]?.focus();
      return;
    }
    if (D.key === "ArrowDown") {
      if (S >= 0) {
        const L = h?.getAttribute("data-index");
        if (L == null) return;
        I.querySelector(`[data-index="${L}"]`)?.getAttribute("aria-haspopup") === "menu" && (D.preventDefault(), $.current = L, x(L));
      }
      return;
    }
    if (D.key === "Home") {
      D.preventDefault(), N[0]?.focus();
      return;
    }
    if (D.key === "End") {
      D.preventDefault(), N[N.length - 1]?.focus();
      return;
    }
    if (D.key.length === 1 && !D.ctrlKey && !D.metaKey) {
      const L = N.map((j) => j.textContent ?? ""), A = S === -1 ? 0 : (S + 1) % N.length;
      for (let j = 0; j < N.length; j++) {
        const T = (A + j) % N.length;
        if (L[T]?.toLowerCase().startsWith(D.key.toLowerCase())) {
          D.preventDefault(), N[T]?.focus();
          break;
        }
      }
    }
  };
  return /* @__PURE__ */ M(
    "nav",
    {
      ref: k,
      "aria-label": o,
      className: [
        We.root,
        i ? We.vertical : We.horizontal,
        r ? We.responsive : null,
        r && _ ? We.mobileOpen : null,
        n ? We.flyoutRoot : null,
        a
      ].filter(Boolean).join(" "),
      ...u,
      children: [
        r ? /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            "aria-label": l,
            "aria-expanded": _,
            className: We.hamburger,
            onClick: () => y((D) => !D),
            children: /* @__PURE__ */ s(Ne, { name: "menu", size: 20 })
          }
        ) : null,
        /* @__PURE__ */ s(
          "div",
          {
            ref: v,
            role: i ? "menu" : "menubar",
            "aria-label": o,
            className: We.menubar,
            onKeyDown: E,
            children: /* @__PURE__ */ s(ts.Provider, { value: b, children: O.map(
              (D, I) => cr(D) ? /* @__PURE__ */ s(
                vs,
                {
                  itemKey: String(I),
                  props: D.props
                },
                `top-${I}`
              ) : /* @__PURE__ */ s(gs, { children: D }, `top-custom-${I}`)
            ) })
          }
        )
      ]
    }
  );
}
const Tx = "_popup_y9hdw_1", Lx = "_menu_y9hdw_22", hs = {
  popup: Tx,
  menu: Lx
}, ur = Bn(null);
function kk() {
  const e = dn(ur);
  if (!e) throw new Error("useContextMenu must be used inside <ContextMenuProvider>");
  return e;
}
function fr(e) {
  return e.map((t, n) => {
    const { children: r, ...i } = t;
    return /* @__PURE__ */ s(dr, { ...i, children: r ? fr(r) : void 0 }, `${t.text}-${n}`);
  });
}
function Px({ state: e, onClose: t }) {
  const n = se(null), [r, i] = X({ left: e.x, top: e.y });
  pr(() => {
    const d = n.current;
    if (!d) return;
    const o = d.getBoundingClientRect();
    i({
      left: Math.max(0, Math.min(e.x, window.innerWidth - o.width)),
      top: Math.max(0, Math.min(e.y, window.innerHeight - o.height))
    });
  }, [e.x, e.y, e.options]), ge(() => {
    n.current?.querySelector('[role="menuitem"]:not([aria-disabled="true"])')?.focus();
  }, []);
  const c = B(
    (d) => {
      e.options.onClick?.(d);
    },
    [e.options]
  );
  return /* @__PURE__ */ s(
    "div",
    {
      ref: n,
      role: "presentation",
      "data-dx-contextmenu-popup": "",
      className: hs.popup,
      style: { left: r.left, top: r.top },
      children: /* @__PURE__ */ s("div", { className: hs.menu, children: e.options.content ?? /* @__PURE__ */ s(
        jx,
        {
          isContextMenu: !0,
          responsive: !1,
          ariaLabel: e.options.ariaLabel ?? "Context menu",
          onClick: c,
          onClose: t,
          children: fr(e.options.items ?? [])
        }
      ) })
    }
  );
}
function wk({ children: e }) {
  const [t, n] = X(null), r = B(() => {
    n((d) => (d?.invoker && document.body.contains(d.invoker) && d.invoker.focus({ preventScroll: !0 }), null));
  }, []), i = B((d, o) => {
    d.preventDefault();
    const l = d.currentTarget ?? d.target;
    n({ x: d.clientX, y: d.clientY, invoker: l, options: o });
  }, []);
  ge(() => {
    if (!t) return;
    const d = (u) => {
      const f = document.querySelector(`.${hs.popup}`);
      f && !f.contains(u.target) && r();
    }, o = (u) => {
      u.key === "Escape" && (u.preventDefault(), r());
    }, l = () => r(), a = () => r();
    return document.addEventListener("pointerdown", d, !0), document.addEventListener("keydown", o, !0), window.addEventListener("resize", l), window.addEventListener("hashchange", a), () => {
      document.removeEventListener("pointerdown", d, !0), document.removeEventListener("keydown", o, !0), window.removeEventListener("resize", l), window.removeEventListener("hashchange", a);
    };
  }, [t, r]);
  const c = be(
    () => ({ open: i, close: r, isOpen: t != null }),
    [i, r, t]
  );
  return /* @__PURE__ */ M(ur.Provider, { value: c, children: [
    e,
    t ? /* @__PURE__ */ s(Px, { state: t, onClose: r }) : null
  ] });
}
const Rx = "_root_14qk4_1", Bx = "_list_14qk4_9", qx = "_item_14qk4_14", Fx = "_trigger_14qk4_18", Hx = "_disabled_14qk4_45", Kx = "_expanded_14qk4_52", Ux = "_selected_14qk4_56", Wx = "_icon_14qk4_61", Xx = "_text_14qk4_72", Vx = "_caret_14qk4_79", Gx = "_open_14qk4_86", Yx = "_submenu_14qk4_90", Zx = "_iconOnly_14qk4_172", Jx = "_stacked_14qk4_199", lt = {
  root: Rx,
  list: Bx,
  item: qx,
  trigger: Fx,
  disabled: Hx,
  expanded: Kx,
  selected: Ux,
  icon: Wx,
  text: Xx,
  caret: Vx,
  open: Gx,
  submenu: Yx,
  iconOnly: Zx,
  stacked: Jx
}, ns = Bn(null);
function Qx() {
  return typeof window > "u" ? "" : window.location.hash.replace(/^#\/?/, "");
}
function eb(e, t) {
  const n = Qx(), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : r === "/" ? n === "" || n === "/" : n === r || n.startsWith(`${r}/`) : n === r;
}
function tb({ icon: e, iconColor: t, image: n }) {
  return n ? /* @__PURE__ */ s("span", { className: lt.icon, "aria-hidden": "true", children: /* @__PURE__ */ s("img", { src: n, alt: "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ s("span", { className: lt.icon, "aria-hidden": "true", style: t ? { color: t } : void 0, children: /* @__PURE__ */ s(Ne, { name: e, size: 16 }) }) : null;
}
function ks({ itemKey: e, ancestors: t, props: n }) {
  const r = dn(ns);
  if (!r) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  const { text: i, value: c, path: d, disabled: o } = n, l = be(() => qn.toArray(n.children).filter(dt), [n.children]), a = l.length > 0, u = !!o, f = n.match ?? r.match, k = n.expanded !== void 0, [v, w] = X(n.defaultExpanded ?? !1), x = k ? n.expanded ?? !1 : v, g = B(
    (T) => {
      k || w(T), n.onExpandedChange?.(T);
    },
    [k, n]
  );
  ge(() => {
    r.collapseSignal > 0 && !r.collapseSkipRef.current.has(e) && g(!1);
  }, [r.collapseSignal]);
  const p = n.onSelectedChange !== void 0 || n.selected !== void 0, [_, y] = X(n.defaultSelected ?? !1), $ = !p && d ? eb(d, f) : !1, m = n.selected ?? (p ? _ : $ || _), [, C] = X(0);
  ge(() => {
    if (!d) return;
    const T = () => C((F) => F + 1);
    return window.addEventListener("hashchange", T), () => window.removeEventListener("hashchange", T);
  }, [d]);
  const b = be(
    () => ({
      ...r,
      level: r.level + 1,
      openAncestors: () => {
        g(!0), r.openAncestors();
      }
    }),
    [r, g]
  );
  ge(() => {
    $ && t.length > 0 && b.openAncestors();
  }, []);
  const O = B(
    (T) => {
      if (u) {
        T.preventDefault();
        return;
      }
      const F = { text: i, value: c, path: d };
      [r.emit(F), n.onClick?.(F)].includes(!1) && T.preventDefault(), p || y(!0), n.onSelectedChange?.(!0);
    },
    [u, i, c, d, r, n, p]
  ), E = B(() => {
    u || (x || r.notifyOpened(e, t), g(!x));
  }, [u, x, r, e, t, g]), D = B(
    (T) => {
      T.key === "Enter" || T.key === " " ? (T.preventDefault(), a ? E() : T.target.click()) : T.key === "Escape" && x ? (T.preventDefault(), g(!1)) : T.key === "ArrowRight" && a && !x ? (T.preventDefault(), r.notifyOpened(e, t), g(!0)) : T.key === "ArrowLeft" && x && (T.preventDefault(), g(!1));
    },
    [a, E, x, g, r, e, t]
  ), I = a && r.showArrow ? /* @__PURE__ */ s("span", { className: [lt.caret, x ? lt.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: /* @__PURE__ */ s(Ne, { name: "chevron-down", size: 10 }) }) : null, N = n.template ?? /* @__PURE__ */ M(Oe, { children: [
    /* @__PURE__ */ s(tb, { icon: n.icon, iconColor: n.iconColor, image: n.image, imageAlt: n.imageAlt }),
    r.displayStyle === "icon" ? /* @__PURE__ */ s("span", { className: lt.text, "aria-label": i, children: n.icon || n.image ? null : i.slice(0, 1) }) : /* @__PURE__ */ s("span", { className: lt.text, children: i }),
    I
  ] }), h = `${r.baseId}-panel-${e}`, S = `${r.baseId}-trigger-${e}`, L = [lt.trigger, u ? lt.disabled : null, x ? lt.expanded : null, m ? lt.selected : null].filter(Boolean).join(" "), A = a ? /* @__PURE__ */ s(
    "button",
    {
      type: "button",
      id: S,
      "aria-expanded": x,
      "aria-controls": h,
      "aria-disabled": u || void 0,
      disabled: u,
      tabIndex: u ? -1 : 0,
      className: L,
      onClick: E,
      onKeyDown: D,
      children: N
    }
  ) : d && !u ? /* @__PURE__ */ s(
    "a",
    {
      id: S,
      href: d,
      target: n.target,
      "aria-disabled": void 0,
      "aria-current": m ? "page" : void 0,
      tabIndex: 0,
      className: L,
      onClick: O,
      onKeyDown: D,
      children: N
    }
  ) : /* @__PURE__ */ s(
    "button",
    {
      type: "button",
      id: S,
      "aria-current": m ? "page" : void 0,
      "aria-disabled": u || void 0,
      disabled: u,
      tabIndex: u ? -1 : 0,
      className: L,
      onClick: O,
      onKeyDown: D,
      children: N
    }
  ), j = a ? r.renderMode === "server" && !x ? null : /* @__PURE__ */ s(
    "div",
    {
      id: h,
      role: "menu",
      "aria-labelledby": S,
      className: lt.submenu,
      hidden: r.renderMode === "client" && !x ? !0 : void 0,
      children: /* @__PURE__ */ s(ns.Provider, { value: b, children: l.map((T, F) => /* @__PURE__ */ s(
        ks,
        {
          itemKey: `${e}-${F}`,
          ancestors: [...t, e],
          props: T.props
        },
        `${e}-${F}`
      )) })
    }
  ) : null;
  return /* @__PURE__ */ M(
    "div",
    {
      className: lt.item,
      style: { "--dx-panelmenu-level": r.level },
      "data-dx-panelmenu-item": "",
      "data-level": r.level,
      children: [
        A,
        j
      ]
    }
  );
}
function $k(e) {
  if (!dn(ns)) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  return /* @__PURE__ */ s(ks, { itemKey: e.text, ancestors: [], props: e });
}
function Nk({
  children: e,
  multiple: t = !0,
  displayStyle: n = "iconAndText",
  showArrow: r = !0,
  match: i = "prefix",
  renderMode: c = "client",
  onClick: d,
  ariaLabel: o = "Panel menu",
  className: l,
  ...a
}) {
  const u = qe(), [f, k] = X(0), v = se(/* @__PURE__ */ new Set()), w = B(($) => d?.($), [d]), x = B(
    ($, m) => {
      t || (v.current = /* @__PURE__ */ new Set([$, ...m]), k((C) => C + 1));
    },
    [t]
  ), g = ($) => Array.from($.querySelectorAll('button, a[href], [role="menuitem"]')).filter(
    (m) => !m.hasAttribute("disabled") && m.getAttribute("aria-disabled") !== "true" && m.closest("[hidden]") == null
  ), p = ($) => {
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
  }, _ = be(
    () => ({
      baseId: u,
      multiple: t,
      displayStyle: n,
      showArrow: r,
      renderMode: c,
      match: i,
      level: 0,
      collapseSignal: f,
      collapseSkipRef: v,
      emit: w,
      notifyOpened: x,
      openAncestors: () => {
      }
    }),
    [u, t, n, r, c, i, f, w, x]
  ), y = be(() => qn.toArray(e).filter(dt), [e]);
  return /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": o,
      className: [
        lt.root,
        n === "icon" ? lt.iconOnly : null,
        n === "stacked" ? lt.stacked : null,
        l
      ].filter(Boolean).join(" "),
      onKeyDown: p,
      ...a,
      children: /* @__PURE__ */ s("div", { className: lt.list, role: "presentation", children: /* @__PURE__ */ s(ns.Provider, { value: _, children: y.map(($, m) => /* @__PURE__ */ s(
        ks,
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
const nb = "_root_1bbxp_1", sb = "_trigger_1bbxp_7", rb = "_defaultTrigger_1bbxp_40", ob = "_avatar_1bbxp_46", lb = "_menu_1bbxp_58", ab = "_item_1bbxp_74", ib = "_disabled_1bbxp_88", cb = "_active_1bbxp_97", db = "_icon_1bbxp_107", ub = "_text_1bbxp_114", Tt = {
  root: nb,
  trigger: sb,
  defaultTrigger: rb,
  avatar: ob,
  menu: lb,
  item: ab,
  disabled: ib,
  active: cb,
  icon: db,
  text: ub
};
function Ok({
  items: e,
  trigger: t,
  onClick: n,
  ariaLabel: r = "Profile menu",
  className: i
}) {
  const c = qe(), d = `${c}-menu`, o = se(null), l = se(null), [a, u] = X(!1), [f, k] = X(-1), v = t, w = e.map((m, C) => m.disabled ? -1 : C).filter((m) => m >= 0), x = B(
    (m) => {
      if (m.disabled) return;
      const C = {
        text: m.text,
        path: m.path
      };
      n?.(C), u(!1), l.current?.focus();
    },
    [n]
  ), g = B(() => {
    k(w[0] ?? -1), u(!0);
  }, [w]), p = B(() => {
    u(!1), k(-1), l.current?.focus();
  }, []);
  ge(() => {
    if (!a) return;
    const m = (C) => {
      o.current && !o.current.contains(C.target) && (u(!1), k(-1));
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, [a]), ge(() => {
    if (!a) return;
    const m = (C) => {
      C.key === "Escape" && (C.preventDefault(), p());
    };
    return document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m);
  }, [a, p]);
  const _ = (m) => {
    if (w.length === 0) return;
    const C = w.indexOf(f), b = C === -1 ? 0 : (C + m + w.length) % w.length, O = w[b];
    O != null && k(O);
  }, y = (m) => {
    if (!a) {
      (m.key === "ArrowDown" || m.key === "Enter" || m.key === " ") && (m.preventDefault(), g());
      return;
    }
    switch (m.key) {
      case "Escape":
        m.preventDefault(), p();
        break;
      case "ArrowDown":
        m.preventDefault(), _(1);
        break;
      case "ArrowUp":
        m.preventDefault(), _(-1);
        break;
      case "Home":
        m.preventDefault(), w[0] != null && k(w[0]);
        break;
      case "End":
        m.preventDefault(), w[w.length - 1] != null && k(w[w.length - 1]);
        break;
      case "Enter":
      case " ":
        if (m.preventDefault(), f >= 0) {
          const C = e[f];
          C && !C.disabled && x(C);
        }
        break;
      case "Tab":
        u(!1), k(-1);
        break;
    }
  }, $ = (m) => {
    switch (m.key) {
      case "ArrowDown":
        m.preventDefault(), _(1);
        break;
      case "ArrowUp":
        m.preventDefault(), _(-1);
        break;
      case "Home":
        m.preventDefault(), w[0] != null && k(w[0]);
        break;
      case "End":
        m.preventDefault(), w[w.length - 1] != null && k(w[w.length - 1]);
        break;
      case "Enter":
      case " ":
        if (m.preventDefault(), f >= 0) {
          const C = e[f];
          C && !C.disabled && x(C);
        }
        break;
      case "Escape":
        m.preventDefault(), p();
        break;
      case "Tab":
        u(!1), k(-1);
        break;
    }
  };
  return /* @__PURE__ */ s(
    "div",
    {
      ref: o,
      className: [Tt.root, i].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ M("nav", { "aria-label": r, children: [
        /* @__PURE__ */ s(
          "button",
          {
            ref: l,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": a,
            "aria-controls": d,
            "aria-label": r,
            className: Tt.trigger,
            onClick: () => a ? p() : g(),
            onKeyDown: y,
            children: v ?? /* @__PURE__ */ M("span", { className: Tt.defaultTrigger, children: [
              /* @__PURE__ */ s("span", { className: Tt.avatar, "aria-hidden": "true", children: "●" }),
              /* @__PURE__ */ s("span", { children: "Profile" })
            ] })
          }
        ),
        a ? /* @__PURE__ */ s(
          "div",
          {
            id: d,
            role: "menu",
            "aria-label": r,
            "aria-activedescendant": f >= 0 ? `${c}-item-${f}` : void 0,
            className: Tt.menu,
            onKeyDown: $,
            tabIndex: -1,
            children: e.map((m, C) => {
              const b = !!m.disabled, O = C === f;
              return /* @__PURE__ */ M(
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
const fb = "_root_1dgrt_1", _b = "_bottomRight_1dgrt_11", pb = "_bottomLeft_1dgrt_16", hb = "_topRight_1dgrt_21", mb = "_topLeft_1dgrt_26", gb = "_menu_1dgrt_31", xb = "_itemWrapper_1dgrt_48", bb = "_tooltip_1dgrt_54", yb = "_main_1dgrt_76", vb = "_mainIcon_1dgrt_104", kb = "_mainOpen_1dgrt_109", wb = "_item_1dgrt_48", $b = "_disabled_1dgrt_141", Nb = "_itemIcon_1dgrt_148", ft = {
  root: fb,
  bottomRight: _b,
  bottomLeft: pb,
  topRight: hb,
  topLeft: mb,
  menu: gb,
  itemWrapper: xb,
  tooltip: bb,
  main: yb,
  mainIcon: vb,
  mainOpen: kb,
  item: wb,
  disabled: $b,
  itemIcon: Nb
};
function Sk({
  items: e,
  position: t,
  icon: n = "+",
  onClick: r,
  ariaLabel: i = "Open menu",
  className: c
}) {
  const d = t ?? "bottom-right", l = `${qe()}-menu`, a = se(null), u = se(null), [f, k] = X(!1), v = B(
    (p) => {
      if (p.disabled) return;
      const _ = { text: p.text, value: p.value };
      r?.(_), k(!1), u.current?.focus();
    },
    [r]
  );
  ge(() => {
    if (!f) return;
    const p = (_) => {
      a.current && !a.current.contains(_.target) && k(!1);
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, [f]), ge(() => {
    if (!f) return;
    const p = (_) => {
      _.key === "Escape" && (k(!1), u.current?.focus());
    };
    return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [f]);
  const w = d === "bottom-right" ? ft.bottomRight : d === "bottom-left" ? ft.bottomLeft : d === "top-right" ? ft.topRight : ft.topLeft, x = (p) => {
    !f && (p.key === "Enter" || p.key === " " || p.key === "ArrowDown" || p.key === "ArrowUp") ? (p.preventDefault(), k(!0)) : f && p.key === "Escape" && (p.preventDefault(), k(!1));
  }, g = (p) => {
    p.key === "Escape" && (p.preventDefault(), k(!1), u.current?.focus());
  };
  return /* @__PURE__ */ M(
    "div",
    {
      ref: a,
      className: [ft.root, w, c].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        f ? /* @__PURE__ */ s(
          "div",
          {
            id: l,
            role: "menu",
            "aria-label": i,
            className: ft.menu,
            onKeyDown: g,
            children: e.map((p, _) => {
              const y = !!p.disabled;
              return /* @__PURE__ */ M("div", { className: ft.itemWrapper, children: [
                /* @__PURE__ */ s("span", { className: ft.tooltip, "aria-hidden": "true", children: p.text }),
                /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": p.text,
                    "aria-disabled": y || void 0,
                    title: p.text,
                    disabled: y,
                    tabIndex: y ? -1 : 0,
                    className: [ft.item, y ? ft.disabled : null].filter(Boolean).join(" "),
                    onClick: () => v(p),
                    children: /* @__PURE__ */ s("span", { className: ft.itemIcon, "aria-hidden": "true", children: p.icon ?? "•" })
                  }
                )
              ] }, `${p.text}-${_}`);
            })
          }
        ) : null,
        /* @__PURE__ */ s(
          "button",
          {
            ref: u,
            type: "button",
            className: ft.main,
            "aria-haspopup": "menu",
            "aria-expanded": f,
            "aria-controls": l,
            "aria-label": i,
            onClick: () => k((p) => !p),
            onKeyDown: x,
            children: /* @__PURE__ */ s(
              "span",
              {
                "aria-hidden": "true",
                className: [ft.mainIcon, f ? ft.mainOpen : null].filter(Boolean).join(" "),
                children: n
              }
            )
          }
        )
      ]
    }
  );
}
const Ob = "_root_1nu0o_1", Sb = "_list_1nu0o_5", Mb = "_item_1nu0o_15", Db = "_link_1nu0o_22", Cb = "_linkButton_1nu0o_23", zb = "_current_1nu0o_24", Eb = "_disabled_1nu0o_68", Ib = "_icon_1nu0o_74", Ab = "_text_1nu0o_81", jb = "_separator_1nu0o_85", Ue = {
  root: Ob,
  list: Sb,
  item: Mb,
  link: Db,
  linkButton: Cb,
  current: zb,
  disabled: Eb,
  icon: Ib,
  text: Ab,
  separator: jb
};
function Mk({
  items: e,
  onClick: t,
  ariaLabel: n = "Breadcrumb",
  className: r
}) {
  const i = t, c = (d) => {
    d.disabled || i?.({ text: d.text, path: d.path });
  };
  return /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": n,
      className: [Ue.root, r].filter(Boolean).join(" "),
      children: /* @__PURE__ */ s("ol", { className: Ue.list, children: e.map((d, o) => {
        const l = o === e.length - 1, a = !!d.disabled;
        return /* @__PURE__ */ M("li", { className: Ue.item, children: [
          l ? a ? /* @__PURE__ */ M(
            "span",
            {
              className: [Ue.current, Ue.disabled].filter(Boolean).join(" "),
              "aria-current": "page",
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: Ue.icon, "aria-hidden": "true", children: d.icon }) : null,
                d.text
              ]
            }
          ) : d.path ? /* @__PURE__ */ M(
            "a",
            {
              href: d.path,
              className: Ue.link,
              "aria-current": "page",
              onClick: (u) => {
                u.preventDefault(), c(d);
              },
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: Ue.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ s("span", { className: Ue.text, children: d.text })
              ]
            }
          ) : /* @__PURE__ */ M(
            "span",
            {
              className: Ue.current,
              "aria-current": "page",
              tabIndex: 0,
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: Ue.icon, "aria-hidden": "true", children: d.icon }) : null,
                d.text
              ]
            }
          ) : a ? /* @__PURE__ */ M(
            "span",
            {
              className: [Ue.link, Ue.disabled].filter(Boolean).join(" "),
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: Ue.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ s("span", { className: Ue.text, children: d.text })
              ]
            }
          ) : d.path ? /* @__PURE__ */ M(
            "a",
            {
              href: d.path,
              className: Ue.link,
              onClick: (u) => {
                u.preventDefault(), c(d);
              },
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: Ue.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ s("span", { className: Ue.text, children: d.text })
              ]
            }
          ) : /* @__PURE__ */ M(
            "button",
            {
              type: "button",
              className: Ue.linkButton,
              tabIndex: 0,
              onClick: () => c(d),
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: Ue.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ s("span", { className: Ue.text, children: d.text })
              ]
            }
          ),
          l ? null : /* @__PURE__ */ s("span", { className: Ue.separator, "aria-hidden": "true", children: "/" })
        ] }, `${d.text}-${o}`);
      }) })
    }
  );
}
const Tb = "_link_6vrgp_1", Lb = {
  link: Tb
}, Dk = Fe(function({ children: t, icon: n, visible: r = !0, className: i, ...c }, d) {
  if (r === !1) return null;
  const o = /* @__PURE__ */ M(Oe, { children: [
    n != null && /* @__PURE__ */ s(Ne, { name: n, "aria-hidden": "true" }),
    t
  ] }), l = [Lb.link, i].filter(Boolean).join(" ");
  if (c.href != null) {
    const { href: u, ...f } = c;
    return /* @__PURE__ */ s(
      "a",
      {
        ref: d,
        className: l,
        href: u,
        ...f,
        children: o
      }
    );
  }
  return /* @__PURE__ */ s(
    "button",
    {
      ref: d,
      type: "button",
      className: l,
      ...c,
      children: o
    }
  );
}), Pb = "_root_1w5vx_1", Rb = "_list_1w5vx_5", Bb = "_item_1w5vx_15", qb = "_connector_1w5vx_21", Fb = "_connectorCompleted_1w5vx_30", Hb = "_step_1w5vx_34", Kb = "_active_1w5vx_69", Ub = "_completed_1w5vx_75", Wb = "_circle_1w5vx_79", Xb = "_check_1w5vx_109", Vb = "_icon_1w5vx_114", Gb = "_number_1w5vx_119", Yb = "_text_1w5vx_124", _t = {
  root: Pb,
  list: Rb,
  item: Bb,
  connector: qb,
  connectorCompleted: Fb,
  step: Hb,
  active: Kb,
  completed: Ub,
  circle: Wb,
  check: Xb,
  icon: Vb,
  number: Gb,
  text: Yb
};
function Ck({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: r = 0,
  linear: i,
  Linear: c,
  onChange: d,
  Change: o,
  onSelectedIndexChange: l,
  ariaLabel: a = "Steps",
  className: u
}) {
  const f = i ?? c ?? !1, k = t ?? n, v = k !== void 0, [w, x] = X(() => Math.min(Math.max(0, k ?? r), Math.max(0, e.length - 1))), p = Math.min(
    Math.max(0, v ? k : w),
    Math.max(0, e.length - 1)
  ), _ = se(null), y = B(
    (C) => {
      const b = Math.min(
        Math.max(0, C),
        Math.max(0, e.length - 1)
      );
      v || x(b), (d ?? o ?? l)?.(b);
    },
    [v, d, o, l, e.length]
  ), $ = B(
    (C, b) => !!(b.disabled || f && C > p + 1),
    [f, p]
  ), m = (C) => {
    const b = Array.from(
      C.currentTarget.querySelectorAll("button[data-step]")
    ).filter((D) => D.getAttribute("aria-disabled") !== "true" && !D.disabled), O = document.activeElement, E = O ? b.indexOf(O) : -1;
    if (C.key === "ArrowRight" || C.key === "ArrowDown") {
      if (C.preventDefault(), b.length === 0) return;
      const D = E === -1 ? 0 : (E + 1) % b.length, I = b[D];
      I && I.focus();
    } else if (C.key === "ArrowLeft" || C.key === "ArrowUp") {
      if (C.preventDefault(), b.length === 0) return;
      const D = E === -1 ? b.length - 1 : (E - 1 + b.length) % b.length, I = b[D];
      I && I.focus();
    } else C.key === "Home" ? (C.preventDefault(), b[0]?.focus()) : C.key === "End" && (C.preventDefault(), b[b.length - 1]?.focus());
  };
  return /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": a,
      className: [_t.root, u].filter(Boolean).join(" "),
      onKeyDown: m,
      children: /* @__PURE__ */ s("ol", { ref: _, role: "list", className: _t.list, children: e.map((C, b) => {
        const O = b === p, E = b < p, D = $(b, C);
        return /* @__PURE__ */ M(
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
              /* @__PURE__ */ M(
                "button",
                {
                  type: "button",
                  "data-step": b,
                  "aria-current": O ? "step" : void 0,
                  "aria-disabled": D ? "true" : void 0,
                  disabled: D,
                  tabIndex: D ? -1 : 0,
                  className: [
                    _t.step,
                    O ? _t.active : null,
                    E ? _t.completed : null,
                    D ? _t.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    D || y(b);
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
const Zb = "_root_1np74_1", Jb = "_horizontal_1np74_13", Qb = "_vertical_1np74_17", ey = "_pane_1np74_21", ty = "_handle_1np74_31", ny = "_handleHorizontal_1np74_51", sy = "_handleVertical_1np74_57", ry = "_handleGrip_1np74_63", oy = "_handleCollapseHint_1np74_75", ly = "_collapseBtn_1np74_79", ay = "_collapseBtnCollapsed_1np74_109", $t = {
  root: Zb,
  horizontal: Jb,
  vertical: Qb,
  pane: ey,
  handle: ty,
  handleHorizontal: ny,
  handleVertical: sy,
  handleGrip: ry,
  handleCollapseHint: oy,
  collapseBtn: ly,
  collapseBtnCollapsed: ay
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
  const r = parseFloat(n);
  return Number.isNaN(r) ? t : r;
}
function Wt(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function zk({
  orientation: e,
  Orientation: t,
  panes: n,
  onResize: r,
  Resize: i,
  onCollapse: c,
  Collapse: d,
  ariaLabel: o = "Splitter",
  className: l
}) {
  const a = e ?? t ?? "horizontal", u = a === "horizontal", f = se(null), k = B(() => {
    const h = n.length;
    if (h === 0) return [];
    const S = n.map((A) => A.size ? jn(A.size, 100 / h) : 100 / h), L = S.reduce((A, j) => A + j, 0);
    return Math.abs(L - 100) > 0.01 && L > 0 ? S.map((A) => A / L * 100) : S;
  }, [n]), [v, w] = X(() => k()), [x, g] = X(
    () => n.map((h) => !!h.collapsed)
  ), p = se(v);
  ge(() => {
    g(n.map((h) => !!h.collapsed));
  }, [n]);
  const _ = B(
    () => n.map((h) => jn(h.min, 0)),
    [n]
  ), y = B(
    () => n.map((h) => jn(h.max, 100)),
    [n]
  ), $ = B(
    (h, S) => {
      const L = { paneIndex: h, newSize: S, cancel: !1 };
      return (r ?? i)?.(L), !L.cancel;
    },
    [r, i]
  ), m = B(
    (h, S) => {
      const L = { paneIndex: h, collapse: S, cancel: !1 };
      return (c ?? d)?.(L), !L.cancel;
    },
    [c, d]
  ), C = B(
    (h) => {
      const S = !x[h];
      m(h, S) && (S ? (p.current = [...v], g((L) => {
        const A = [...L];
        return A[h] !== void 0 && (A[h] = !0), A;
      }), w((L) => {
        const A = [...L], j = A[h] ?? 0, T = h < A.length - 1 ? h + 1 : h - 1;
        if (T >= 0 && T < A.length) {
          const F = A[T] ?? 0;
          A[T] = F + j, A[h] = 0;
        } else
          A[h] = 0;
        return A;
      })) : (g((L) => {
        const A = [...L];
        return A[h] !== void 0 && (A[h] = !1), A;
      }), w(() => {
        const L = [...p.current];
        return L.length !== n.length ? n.map(() => 100 / n.length) : L;
      })));
    },
    [x, v, n.length, m]
  ), b = se(
    null
  ), O = B(
    (h, S, L) => {
      const A = f.current;
      if (!A) return null;
      const j = A.getBoundingClientRect();
      let T;
      if (u) {
        if (j.width === 0) return null;
        T = (S - j.left) / j.width * 100;
      } else {
        if (j.height === 0) return null;
        T = (L - j.top) / j.height * 100;
      }
      let F = 0;
      for (let Y = 0; Y < h; Y++) {
        const U = v[Y];
        U !== void 0 && (F += U);
      }
      return T - F;
    },
    [u, v]
  ), E = (h, S) => {
    S.preventDefault();
    const L = S.currentTarget;
    L.focus(), typeof L.setPointerCapture == "function" && L.setPointerCapture(S.pointerId), b.current = { handleIndex: h, pointerId: S.pointerId };
  }, D = (h) => {
    if (!b.current || b.current.pointerId !== h.pointerId)
      return;
    h.preventDefault();
    const S = b.current.handleIndex, L = O(S, h.clientX, h.clientY);
    if (L == null) return;
    const A = _(), j = y(), T = A[S] ?? 0, F = j[S] ?? 100, G = S + 1, Y = A[G] ?? 0, U = j[G] ?? 100, te = v[S] ?? 0, le = v[G] ?? 0, ee = te + le;
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
  }, I = (h) => {
    !b.current || b.current.pointerId !== h.pointerId || (b.current = null);
  }, N = (h, S) => {
    const L = _(), A = y(), j = h, T = h + 1, F = v[j] ?? 0, G = v[T] ?? 0, Y = F + G;
    let U = 0;
    const te = !!n[j]?.collapsible, le = !!n[T]?.collapsible;
    if (u ? S.key === "ArrowLeft" ? U = -5 : S.key === "ArrowRight" && (U = 5) : S.key === "ArrowUp" ? U = -5 : S.key === "ArrowDown" && (U = 5), S.key === "Home") {
      S.preventDefault();
      let ee = L[j] ?? 0, q = Y - ee;
      if (q = Wt(
        q,
        L[T] ?? 0,
        A[T] ?? 100
      ), ee = Y - q, ee = Wt(ee, L[j] ?? 0, A[j] ?? 100), !$(j, ee)) return;
      w((ie) => {
        const J = [...ie];
        return J[j] = ee, J[T] = q, J;
      });
      return;
    }
    if (S.key === "End") {
      S.preventDefault();
      let ee = A[j] ?? 100;
      ee = Math.min(ee, Y - (L[T] ?? 0));
      let q = Y - ee;
      if (q = Wt(
        q,
        L[T] ?? 0,
        A[T] ?? 100
      ), ee = Y - q, ee = Wt(ee, L[j] ?? 0, A[j] ?? 100), !$(j, ee)) return;
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
      const ie = L[j] ?? 0, J = A[j] ?? 100, de = L[T] ?? 0, ae = A[T] ?? 100;
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
      ref: f,
      className: [
        $t.root,
        u ? $t.horizontal : $t.vertical,
        l
      ].filter(Boolean).join(" "),
      "aria-label": o,
      children: n.map((h, S) => {
        const L = !!x[S], A = L ? 0 : v[S] ?? 100 / n.length, j = L ? { display: "none" } : u ? {
          flexBasis: `${A}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        } : {
          flexBasis: `${A}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        }, T = jn(h.min, 0), F = jn(h.max, 100), G = S < n.length - 1, Y = !!n[S + 1]?.collapsible;
        return /* @__PURE__ */ M("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ M(
            "div",
            {
              role: "group",
              "aria-label": h.label ?? `Pane ${S + 1}`,
              className: $t.pane,
              style: j,
              "data-collapsed": L ? "true" : void 0,
              children: [
                L ? null : h.children,
                h.collapsible && !L ? /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    className: $t.collapseBtn,
                    "aria-label": `Collapse pane ${S + 1}`,
                    "aria-expanded": !L,
                    onClick: () => C(S),
                    children: u ? "◀" : "▲"
                  }
                ) : null,
                h.collapsible && L ? /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    className: $t.collapseBtn,
                    "aria-label": `Expand pane ${S + 1}`,
                    "aria-expanded": !L,
                    onClick: () => C(S),
                    children: u ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          L && h.collapsible ? (
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
                children: u ? "▶" : "▼"
              }
            )
          ) : null,
          G ? /* @__PURE__ */ M(
            "div",
            {
              role: "separator",
              "aria-orientation": a,
              "aria-valuemin": T,
              "aria-valuemax": F,
              "aria-valuenow": Math.round(A),
              "aria-label": `Resize handle ${S + 1}`,
              tabIndex: L || x[S + 1] ? -1 : 0,
              className: [
                $t.handle,
                u ? $t.handleHorizontal : $t.handleVertical
              ].filter(Boolean).join(" "),
              onPointerDown: (U) => E(S, U),
              onPointerMove: D,
              onPointerUp: I,
              onKeyDown: (U) => N(S, U),
              children: [
                /* @__PURE__ */ s("span", { className: $t.handleGrip, "aria-hidden": "true" }),
                (h.collapsible || Y) && /* @__PURE__ */ s(
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
const iy = "_root_wurjl_1", cy = "_list_wurjl_5", dy = "_vertical_wurjl_14", uy = "_horizontal_wurjl_20", fy = "_item_wurjl_28", _y = "_link_wurjl_32", py = "_active_wurjl_57", bn = {
  root: iy,
  list: cy,
  vertical: dy,
  horizontal: uy,
  item: fy,
  link: _y,
  active: py
};
function Ek({
  items: e,
  selector: t,
  Selector: n,
  orientation: r,
  Orientation: i,
  onClick: c,
  Click: d,
  ariaLabel: o = "Table of contents",
  className: l
}) {
  const a = t ?? n, u = r ?? i ?? "vertical", [f, k] = X(
    () => e[0]?.selector ?? null
  ), v = se(f);
  v.current = f;
  const w = B(
    (x, g) => {
      if (k(x.selector), (c ?? d)?.({ text: x.text, selector: x.selector }), g) {
        try {
          g.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        } catch {
          g.scrollIntoView();
        }
        const _ = g;
        _.getAttribute("tabindex") == null && _.tabIndex === -1 || _.tabIndex < 0 ? (_.getAttribute("tabindex"), _.setAttribute("tabindex", "-1"), _.focus({ preventScroll: !0 })) : _.focus({ preventScroll: !0 });
      }
    },
    [c, d]
  );
  return ge(() => {
    if (e.length === 0) return;
    const g = (() => {
      if (a) {
        const m = document.querySelector(a);
        if (m) return m;
      }
      return window;
    })();
    let p = null;
    const _ = /* @__PURE__ */ new Map(), y = () => {
      let m = null, C = null;
      for (const O of e) {
        const E = document.querySelector(O.selector);
        if (!E) continue;
        _.set(O.selector, E);
        const D = E.getBoundingClientRect();
        let I = D.top;
        if (g !== window) {
          const N = g.getBoundingClientRect();
          I = D.top - N.top;
        }
        I <= 80 ? (!C || I > C.el.getBoundingClientRect().top - (g !== window ? g.getBoundingClientRect().top : 0)) && (C = { sel: O.selector, el: E }) : (!m || I < m.top) && (m = { sel: O.selector, top: I });
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
      p = new IntersectionObserver((C) => {
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
        b && (p.observe(b), _.set(C.selector, b));
      }
    }
    return g === window ? (window.addEventListener("scroll", $, { passive: !0 }), y(), () => {
      window.removeEventListener("scroll", $), p?.disconnect();
    }) : (g.addEventListener("scroll", $, {
      passive: !0
    }), y(), () => {
      g.removeEventListener("scroll", $), p?.disconnect();
    });
  }, [e, a]), /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": o,
      className: [bn.root, bn[u], l].filter(Boolean).join(" "),
      children: /* @__PURE__ */ s("ol", { className: bn.list, children: e.map((x) => {
        const g = x.selector === f;
        return /* @__PURE__ */ s("li", { className: bn.item, children: /* @__PURE__ */ s(
          "a",
          {
            href: x.selector.startsWith("#") || x.selector.startsWith(".") ? x.selector : `#${x.selector}`,
            className: [bn.link, g ? bn.active : null].filter(Boolean).join(" "),
            "aria-current": g ? "location" : void 0,
            onClick: (p) => {
              p.preventDefault();
              const _ = document.querySelector(x.selector);
              w(x, _);
            },
            children: x.text
          }
        ) }, `${x.text}-${x.selector}`);
      }) })
    }
  );
}
const hy = "_root_u1med_1", my = "_viewport_u1med_17", gy = "_slide_u1med_24", xy = "_active_u1med_33", by = "_arrow_u1med_37", yy = "_prev_u1med_71", vy = "_next_u1med_75", ky = "_pauseBtn_u1med_79", wy = "_indicators_u1med_110", $y = "_indicator_u1med_110", Ny = "_indicatorActive_u1med_145", Nt = {
  root: hy,
  viewport: my,
  slide: gy,
  active: xy,
  arrow: by,
  prev: yy,
  next: vy,
  pauseBtn: ky,
  indicators: wy,
  indicator: $y,
  indicatorActive: Ny
};
function Ik({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: r = 0,
  auto: i,
  Auto: c,
  interval: d,
  Interval: o,
  pauseOnHover: l,
  PauseOnHover: a,
  showArrows: u,
  ShowArrows: f,
  showIndicators: k,
  ShowIndicators: v,
  onChange: w,
  Change: x,
  ariaLabel: g = "Carousel",
  className: p
}) {
  const _ = t ?? n, y = _ !== void 0, [$, m] = X(() => Math.min(Math.max(0, _ ?? r), Math.max(0, e.length - 1))), C = y ? _ : $, b = e.length === 0 ? 0 : Math.min(Math.max(0, C), e.length - 1), O = i ?? c ?? !1, E = d ?? o ?? 3e3, D = l ?? a ?? !0, I = u ?? f ?? !0, N = k ?? v ?? !0, [h, S] = X(!1), [L, A] = X(!1), j = h || L, T = se(null), F = qe(), G = B(
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
  ge(() => {
    if (!O || j || e.length <= 1) return;
    const de = setInterval(() => {
      G(b + 1);
    }, E);
    return () => clearInterval(de);
  }, [O, j, E, b, G, e.length]);
  const le = (de) => {
    e.length !== 0 && (de.key === "ArrowLeft" ? (de.preventDefault(), Y()) : de.key === "ArrowRight" ? (de.preventDefault(), U()) : de.key === "Home" ? (de.preventDefault(), te(0)) : de.key === "End" && (de.preventDefault(), te(e.length - 1)));
  }, ee = () => {
    D && O && A(!0);
  }, q = () => {
    D && O && A(!1);
  }, ie = () => {
    D && O && A(!0);
  }, J = () => {
    D && O && A(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ M(
    "div",
    {
      ref: T,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": g,
      tabIndex: 0,
      className: [Nt.root, p].filter(Boolean).join(" "),
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
        I && e.length > 1 ? /* @__PURE__ */ M(Oe, { children: [
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
            "aria-label": h ? "Resume" : "Pause",
            "aria-pressed": h,
            onClick: () => S((de) => !de),
            children: h ? "▶" : "⏸"
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
const Oy = "_root_xvqqt_1", Sy = "_group_xvqqt_20", My = "_itemWrapper_xvqqt_30", Dy = "_treeitem_xvqqt_34", Cy = "_disabled_xvqqt_50", zy = "_selected_xvqqt_60", Ey = "_caret_xvqqt_66", Iy = "_caretIcon_xvqqt_113", Ay = "_caretOpen_xvqqt_120", jy = "_caretPlaceholder_xvqqt_124", Ty = "_label_xvqqt_130", Ly = "_loading_xvqqt_137", Py = "_loadingRow_xvqqt_143", Ry = "_empty_xvqqt_149", By = "_checkbox_xvqqt_155", st = {
  root: Oy,
  group: Sy,
  itemWrapper: My,
  treeitem: Dy,
  disabled: Cy,
  selected: zy,
  caret: Ey,
  caretIcon: Iy,
  caretOpen: Ay,
  caretPlaceholder: jy,
  label: Ty,
  loading: Ly,
  loadingRow: Py,
  empty: Ry,
  checkbox: By
};
function qy({
  indeterminate: e,
  ...t
}) {
  const n = se(null);
  return ge(() => {
    n.current && (n.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ s("input", { ref: n, type: "checkbox", ...t });
}
function Ak({
  data: e,
  Data: t,
  children: n,
  Children: r,
  textProperty: i,
  TextProperty: c,
  keyProperty: d,
  KeyProperty: o,
  selectionMode: l,
  SelectionMode: a,
  selectedItem: u,
  SelectedItem: f,
  selectedItems: k,
  SelectedItems: v,
  defaultSelectedItem: w,
  defaultSelectedItems: x,
  onChange: g,
  Change: p,
  onExpand: _,
  Expand: y,
  onCollapse: $,
  Collapse: m,
  loadChildData: C,
  LoadChildData: b,
  template: O,
  Template: E,
  itemTemplate: D,
  ItemTemplate: I,
  ariaLabel: N,
  AriaLabel: h,
  allowCheckBoxes: S = !1,
  checkedKeys: L,
  defaultCheckedKeys: A,
  onCheckedChange: j,
  allowCheckChildren: T = !0,
  className: F
}) {
  const G = e ?? t ?? [], Y = n ?? r, U = i ?? c ?? "text", te = d ?? o ?? "id", le = l ?? a ?? "single", ee = N ?? h ?? "Tree", q = C ?? b, ie = O ?? E ?? D ?? I, J = B(
    (H) => {
      const Z = H[te];
      return Z != null ? String(Z) : String(H.id ?? "");
    },
    [te]
  ), de = B(
    (H) => {
      const Z = H[U];
      if (Z != null) return String(Z);
      const oe = H.text;
      return oe != null ? String(oe) : "";
    },
    [U]
  ), ae = B(
    (H) => {
      if (Y) {
        const oe = Y(H);
        if (oe !== void 0) return oe;
      }
      const Z = H.children;
      if (Array.isArray(Z)) return Z;
    },
    [Y]
  ), ve = B(
    (H) => {
      const Z = /* @__PURE__ */ new Set(), oe = (pe) => {
        for (const _e of pe) {
          const ke = J(_e);
          _e.expanded && Z.add(ke);
          const je = ae(_e);
          je && je.length > 0 && oe(je);
        }
      };
      return oe(H), Z;
    },
    [J, ae]
  ), [$e, Re] = X(
    () => ve(G)
  ), [we, Xe] = X(
    () => /* @__PURE__ */ new Map()
  ), [ye, Ze] = X(() => /* @__PURE__ */ new Set()), Ve = u ?? f, Le = k ?? v, et = le === "multiple" ? Le !== void 0 : Ve !== void 0, V = B(() => {
    if (le === "multiple") {
      if (x && x.length > 0)
        return new Set(x.map((oe) => J(oe)));
      const H = /* @__PURE__ */ new Set(), Z = (oe) => {
        for (const pe of oe) {
          pe.selected && H.add(J(pe));
          const _e = ae(pe);
          _e && Z(_e);
        }
      };
      return Z(G), H;
    } else {
      if (w) return /* @__PURE__ */ new Set([J(w)]);
      let H = null;
      const Z = (oe) => {
        for (const pe of oe) {
          if (pe.selected)
            return H = J(pe), !0;
          const _e = ae(pe);
          if (_e && Z(_e)) return !0;
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
  ]), fe = B(
    (H) => {
      let Z;
      const oe = (pe) => {
        for (const _e of pe) {
          if (J(_e) === H)
            return Z = _e, !0;
          const je = we.get(J(_e)) ?? ae(_e);
          if (je && oe(je)) return !0;
        }
        return !1;
      };
      if (oe(G), !Z) {
        for (const pe of we.values())
          if (oe(pe)) break;
      }
      return Z;
    },
    [G, we, J, ae]
  ), re = B(() => {
    const H = /* @__PURE__ */ new Map(), Z = (oe) => {
      for (const pe of oe) {
        const _e = J(pe);
        H.set(_e, pe);
        const je = we.get(_e) ?? ae(pe);
        je && Z(je);
      }
    };
    return Z(G), H;
  }, [G, we, J, ae]), me = B(
    (H) => {
      const Z = J(H);
      if (!H.disabled)
        if (le === "multiple") {
          const pe = new Set(ne);
          pe.has(Z) ? pe.delete(Z) : pe.add(Z), et || K(pe);
          const _e = g ?? p;
          if (_e) {
            const ke = re(), je = [];
            for (const P of pe) {
              const R = ke.get(P) ?? fe(P);
              R && je.push(R);
            }
            _e({ item: H, selectedItems: je });
          }
        } else if (!ne.has(Z) || ne.size !== 1 || !ne.has(Z)) {
          et || K(/* @__PURE__ */ new Set([Z]));
          const _e = g ?? p;
          _e && _e({ item: H, selectedItem: H });
        } else {
          const _e = g ?? p;
          _e && _e({ item: H, selectedItem: H });
        }
    },
    [
      J,
      le,
      ne,
      et,
      g,
      p,
      re,
      fe
    ]
  ), Se = B(
    async (H) => {
      const Z = J(H);
      if (!!H.disabled) return;
      const pe = $e.has(Z), _e = _ ?? y, ke = $ ?? m, je = ae(H), R = we.get(Z) ?? je, he = !(R !== void 0 && R.length > 0) && q != null;
      if (pe) {
        Re((Ie) => {
          const Ae = new Set(Ie);
          return Ae.delete(Z), Ae;
        }), ke?.({ item: H });
        return;
      }
      if (he) {
        if (ye.has(Z)) return;
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
          }), _e?.({ item: H });
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
      }), _e?.({ item: H });
    },
    [
      J,
      $e,
      ae,
      we,
      q,
      ye,
      _,
      y,
      $,
      m
    ]
  ), Be = be(() => {
    const H = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Set(), pe = (_e, ke) => {
      for (const je of _e) {
        const P = J(je);
        H.has(P) || H.set(P, []), Z.set(P, ke), je.disabled && oe.add(P);
        const ce = we.get(P) ?? ae(je);
        ce && ce.length > 0 && (H.set(
          P,
          ce.map((he) => J(he))
        ), pe(ce, P));
      }
    };
    return pe(G, null), { childrenOf: H, parentOf: Z, disabledKeys: oe };
  }, [G, we, J, ae]), Je = B(
    (H) => {
      const Z = [], oe = [...Be.childrenOf.get(H) ?? []];
      for (; oe.length > 0; ) {
        const pe = oe.pop();
        Z.push(pe), oe.push(...Be.childrenOf.get(pe) ?? []);
      }
      return Z;
    },
    [Be]
  ), [ut, vt] = X(
    () => new Set(A ?? [])
  ), Q = L !== void 0 ? new Set(L) : ut, De = B(
    (H) => {
      const Z = Be.disabledKeys;
      return Je(H).filter((oe) => !Z.has(oe));
    },
    [Je, Be]
  ), nt = B(
    (H) => {
      if (Q.has(H)) return !0;
      if (!S || !T) return !1;
      const Z = De(H);
      return Z.length > 0 && Z.every((oe) => Q.has(oe));
    },
    [Q, S, T, De]
  ), Gt = B(
    (H) => {
      if (!S || !T || Q.has(H))
        return !1;
      const Z = De(H);
      if (Z.length === 0) return !1;
      const oe = Z.filter((pe) => Q.has(pe)).length;
      return oe > 0 && oe < Z.length;
    },
    [Q, S, T, De]
  ), Ot = B(
    (H) => {
      if (!S || H.disabled) return;
      const Z = J(H), oe = new Set(Q);
      if (oe.has(Z) || nt(Z)) {
        if (oe.delete(Z), T)
          for (const pe of De(Z)) oe.delete(pe);
      } else if (oe.add(Z), T)
        for (const pe of De(Z)) oe.add(pe);
      L === void 0 && vt(oe), j?.([...oe]);
    },
    [
      S,
      T,
      L,
      Q,
      De,
      J,
      nt,
      j
    ]
  ), Ce = be(() => {
    const H = [], Z = (oe, pe, _e) => {
      oe.forEach((ke, je) => {
        const P = J(ke), R = de(ke), ce = we.get(P) ?? ae(ke);
        let he;
        we.has(P) ? he = we.get(P).length > 0 : ce !== void 0 ? he = ce.length > 0 : q ? he = !0 : he = !1;
        const Ie = $e.has(P), Ae = !!ke.disabled, ze = oe.length, at = je + 1;
        if (H.push({
          item: ke,
          key: P,
          text: R,
          level: pe,
          posInSet: at,
          setSize: ze,
          hasChildren: he,
          expanded: Ie,
          parentKey: _e,
          disabled: Ae
        }), he && Ie) {
          const Mt = we.get(P) ?? ce;
          Mt && Mt.length > 0 && Z(Mt, pe + 1, P);
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
    ye
  ]), [Ge, kt] = X(
    () => Ce[0]?.key ?? null
  ), Pt = se(""), tn = se(null), W = se(null);
  ge(() => {
    if (!Ge && Ce.length > 0) {
      const H = Ce[0];
      H && kt(H.key);
    } else if (Ge && !Ce.some((H) => H.key === Ge)) {
      const H = Ce[0];
      kt(H ? H.key : null);
    }
  }, [Ce, Ge]), ge(() => {
    if (Ge) {
      const H = W.current?.querySelector(
        `[data-key="${CSS.escape(Ge)}"]`
      );
      let Z = null;
      H || (Z = W.current?.querySelector(
        `[data-key="${Ge}"]`
      ) ?? null);
      const oe = H ?? Z;
      oe && document.activeElement !== oe && W.current?.contains(document.activeElement) && oe.focus();
    }
  }, [Ge]);
  const ue = B((H) => {
    kt(H), requestAnimationFrame(() => {
      const Z = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(H) : H;
      let oe = W.current?.querySelector(
        `[data-key="${Z}"]`
      );
      oe || (oe = W.current?.querySelector(`[data-key="${H}"]`) ?? null), oe?.focus();
    });
  }, []), Pe = B(
    (H) => Ce.find((oe) => oe.key === H)?.parentKey ?? null,
    [Ce]
  ), He = B(
    (H) => {
      if (Ce.length === 0) return;
      const Z = Ge ? Ce.findIndex((_e) => _e.key === Ge) : -1, oe = Z >= 0 ? Ce[Z] : void 0;
      let pe = null;
      if (H.key === "ArrowDown") {
        if (H.preventDefault(), Z === -1)
          pe = Ce[0]?.key ?? null;
        else {
          const _e = (Z + 1) % Ce.length, ke = Ce[_e];
          ke && (pe = ke.key);
        }
        pe && ue(pe);
        return;
      }
      if (H.key === "ArrowUp") {
        if (H.preventDefault(), Z === -1) {
          const _e = Ce[Ce.length - 1];
          _e && (pe = _e.key);
        } else {
          const _e = (Z - 1 + Ce.length) % Ce.length, ke = Ce[_e];
          ke && (pe = ke.key);
        }
        pe && ue(pe);
        return;
      }
      if (H.key === "ArrowRight") {
        if (H.preventDefault(), !oe) return;
        if (oe.hasChildren && !oe.expanded)
          Se(oe.item);
        else if (oe.hasChildren && oe.expanded) {
          const _e = Z + 1, ke = Ce[_e];
          ke && ke.parentKey === oe.key && ue(ke.key);
        }
        return;
      }
      if (H.key === "ArrowLeft") {
        if (H.preventDefault(), !oe) return;
        if (oe.hasChildren && oe.expanded)
          Se(oe.item);
        else {
          const _e = Pe(oe.key);
          _e && ue(_e);
        }
        return;
      }
      if (H.key === "Home") {
        H.preventDefault();
        const _e = Ce[0];
        _e && ue(_e.key);
        return;
      }
      if (H.key === "End") {
        H.preventDefault();
        const _e = Ce[Ce.length - 1];
        _e && ue(_e.key);
        return;
      }
      if (H.key === "Enter" || H.key === " ") {
        if (H.key === " " && H.target?.tagName === "INPUT" || (H.preventDefault(), !oe)) return;
        if (H.key === " " && S) {
          const _e = fe(oe.key);
          _e && Ot(_e);
          return;
        }
        me(oe.item);
        return;
      }
      if (H.key.length === 1 && /^[a-zA-Z0-9]$/.test(H.key)) {
        H.preventDefault();
        const _e = (Pt.current + H.key).toLowerCase();
        Pt.current = _e, tn.current && clearTimeout(tn.current), tn.current = setTimeout(() => {
          Pt.current = "";
        }, 500);
        const ke = Z >= 0 ? Z + 1 : 0, R = [...Ce, ...Ce].slice(ke, ke + Ce.length).find((ce) => ce.text.toLowerCase().startsWith(_e));
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
  }, [Ge, Ce]), St = (H, Z, oe) => /* @__PURE__ */ s("ul", { role: "group", className: st.group, children: H.map((pe, _e) => {
    const ke = J(pe), je = de(pe), P = we.get(ke) ?? ae(pe);
    let R;
    we.has(ke) ? R = we.get(ke).length > 0 : P !== void 0 ? R = P.length > 0 : q ? R = !0 : R = !1;
    const ce = $e.has(ke), he = ne.has(ke), Ie = !!pe.disabled, Ae = ye.has(ke), ze = Ge === ke, at = H.length, Mt = _e + 1, _r = ie ? ie(pe) : je, ws = S ? {
      checked: nt(ke),
      indeterminate: Gt(ke)
    } : null;
    return /* @__PURE__ */ M("li", { role: "none", className: st.itemWrapper, children: [
      /* @__PURE__ */ M(
        "div",
        {
          role: "treeitem",
          "data-key": ke,
          tabIndex: ze ? 0 : -1,
          "aria-expanded": R ? ce : void 0,
          "aria-selected": he,
          "aria-level": Z,
          "aria-setsize": at,
          "aria-posinset": Mt,
          "aria-disabled": Ie || void 0,
          "aria-busy": Ae || void 0,
          className: [
            st.treeitem,
            he ? st.selected : null,
            Ie ? st.disabled : null,
            ze ? st.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            ue(ke), Ie || me(pe);
          },
          onFocus: () => kt(ke),
          children: [
            S ? /* @__PURE__ */ s(
              qy,
              {
                className: st.checkbox,
                checked: ws?.checked ?? !1,
                indeterminate: ws?.indeterminate ?? !1,
                disabled: Ie,
                "aria-label": `Select ${je}`,
                onClick: (Fn) => Fn.stopPropagation(),
                onChange: () => Ot(pe)
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
                onClick: (Fn) => {
                  Fn.stopPropagation(), ue(ke), Se(pe);
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
            /* @__PURE__ */ s("span", { className: st.label, children: _r }),
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
const Fy = "_root_1plfv_1", Hy = "_panel_1plfv_8", Ky = "_header_1plfv_19", Uy = "_listbox_1plfv_28", Wy = "_option_1plfv_42", Xy = "_disabled_1plfv_57", Vy = "_active_1plfv_66", Gy = "_selected_1plfv_70", Yy = "_empty_1plfv_86", Zy = "_controls_1plfv_93", Jy = "_reorder_1plfv_102", Qy = "_btn_1plfv_110", Te = {
  root: Fy,
  panel: Hy,
  header: Ky,
  listbox: Uy,
  option: Wy,
  disabled: Xy,
  active: Vy,
  selected: Gy,
  empty: Yy,
  controls: Zy,
  reorder: Jy,
  btn: Qy
};
function rt(e, t) {
  const n = e[t];
  return n != null ? String(n) : String(e.id ?? "");
}
function Zn(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function jk({
  source: e,
  Source: t,
  target: n,
  Target: r,
  value: i,
  Value: c,
  targetValue: d,
  TargetValue: o,
  data: l,
  Data: a,
  onSourceChange: u,
  SourceChange: f,
  onTargetChange: k,
  TargetChange: v,
  keyProperty: w,
  KeyProperty: x,
  onMove: g,
  Move: p,
  ariaLabel: _,
  AriaLabel: y,
  className: $
}) {
  const m = w ?? x ?? "id", C = _ ?? y ?? "PickList", b = e ?? t ?? i ?? c ?? l ?? a ?? [], O = n ?? r ?? d ?? o ?? [], [E, D] = X(() => [
    ...b
  ]), [I, N] = X(() => [
    ...O
  ]);
  ge(() => {
    const z = e ?? t ?? i ?? c ?? l ?? a;
    z !== void 0 && D([...z]);
  }, [e, t, i, c, l, a]), ge(() => {
    const z = n ?? r ?? d ?? o;
    z !== void 0 && N([...z]);
  }, [n, r, d, o]);
  const [h, S] = X(
    () => /* @__PURE__ */ new Set()
  ), [L, A] = X(
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
    () => I.map((z, K) => z.disabled ? -1 : K).filter((z) => z >= 0),
    [I]
  );
  ge(() => {
    if (j >= E.length) {
      const z = Y[Y.length - 1];
      T(z ?? 0);
    } else if (E.length > 0 && Y.length > 0 && !Y.includes(j)) {
      const z = Y[0];
      z !== void 0 && T(z);
    }
  }, [j, E.length, Y]), ge(() => {
    if (F >= I.length) {
      const z = U[U.length - 1];
      G(z ?? 0);
    } else if (I.length > 0 && U.length > 0 && !U.includes(F)) {
      const z = U[0];
      z !== void 0 && G(z);
    }
  }, [F, I.length, U]), ge(() => {
    S((z) => {
      const K = /* @__PURE__ */ new Set();
      for (const ne of z)
        E.some(
          (re) => rt(re, m) === ne && !re.disabled
        ) && K.add(ne);
      return K;
    });
  }, [E, m]), ge(() => {
    A((z) => {
      const K = /* @__PURE__ */ new Set();
      for (const ne of z)
        I.some(
          (re) => rt(re, m) === ne && !re.disabled
        ) && K.add(ne);
      return K;
    });
  }, [I, m]);
  const te = B(
    (z) => {
      (u ?? f)?.(z);
    },
    [u, f]
  ), le = B(
    (z) => {
      (k ?? v)?.(z);
    },
    [k, v]
  ), ee = B(
    (z) => {
      (g ?? p)?.(z);
    },
    [g, p]
  ), q = B(
    (z) => {
      const K = E[z];
      if (!K || K.disabled) return;
      const ne = rt(K, m);
      S((fe) => {
        const re = new Set(fe);
        return re.has(ne) ? re.delete(ne) : re.add(ne), re;
      }), T(z);
    },
    [E, m]
  ), ie = B(
    (z) => {
      const K = I[z];
      if (!K || K.disabled) return;
      const ne = rt(K, m);
      A((fe) => {
        const re = new Set(fe);
        return re.has(ne) ? re.delete(ne) : re.add(ne), re;
      }), G(z);
    },
    [I, m]
  ), J = B(() => {
    const z = [], K = [];
    for (const me of E) {
      const Se = rt(me, m);
      h.has(Se) && !me.disabled ? z.push(me) : K.push(me);
    }
    if (z.length === 0) return;
    const ne = K, fe = [...I, ...z];
    D(ne), N(fe), S(/* @__PURE__ */ new Set());
    const re = new Set(z.map((me) => rt(me, m)));
    A(re), te(ne), le(fe), ee({
      source: ne,
      target: fe,
      moved: z,
      direction: "toTarget"
    });
  }, [
    E,
    I,
    h,
    m,
    te,
    le,
    ee
  ]), de = B(() => {
    const z = [], K = [];
    for (const me of I) {
      const Se = rt(me, m);
      L.has(Se) && !me.disabled ? z.push(me) : K.push(me);
    }
    if (z.length === 0) return;
    const ne = K, fe = [...E, ...z];
    N(ne), D(fe), A(/* @__PURE__ */ new Set());
    const re = new Set(z.map((me) => rt(me, m)));
    S(re), te(fe), le(ne), ee({
      source: fe,
      target: ne,
      moved: z,
      direction: "toSource"
    });
  }, [
    E,
    I,
    L,
    m,
    te,
    le,
    ee
  ]), ae = B(() => {
    const z = E.filter((fe) => !fe.disabled);
    if (z.length === 0) return;
    const K = E.filter((fe) => !!fe.disabled), ne = [...I, ...z];
    D(K), N(ne), S(/* @__PURE__ */ new Set()), te(K), le(ne), ee({
      source: K,
      target: ne,
      moved: z,
      direction: "allToTarget"
    });
  }, [
    E,
    I,
    m,
    te,
    le,
    ee
  ]), ve = B(() => {
    const z = I.filter((fe) => !fe.disabled);
    if (z.length === 0) return;
    const K = I.filter((fe) => !!fe.disabled), ne = [...E, ...z];
    N(K), D(ne), A(/* @__PURE__ */ new Set()), te(ne), le(K), ee({
      source: ne,
      target: K,
      moved: z,
      direction: "allToSource"
    });
  }, [E, I, te, le, ee]), $e = B(() => {
    if (L.size === 0) return;
    const z = [...I], K = L, ne = [];
    for (let re = 1; re < z.length; re++) {
      const me = z[re], Se = z[re - 1];
      if (!me || !Se) continue;
      const Be = rt(me, m), Je = rt(Se, m);
      K.has(Be) && !K.has(Je) && !me.disabled && !Se.disabled && (z[re - 1] = me, z[re] = Se, ne.push(me));
    }
    if (ne.length === 0) return;
    N(z), le(z), ee({ source: E, target: z, moved: ne, direction: "up" });
    const fe = Array.from(K)[0];
    if (fe) {
      const re = z.findIndex(
        (me) => rt(me, m) === fe
      );
      re >= 0 && G(re);
    }
  }, [
    I,
    L,
    m,
    E,
    le,
    ee
  ]), Re = B(() => {
    if (L.size === 0) return;
    const z = [...I], K = L, ne = [];
    for (let re = z.length - 2; re >= 0; re--) {
      const me = z[re], Se = z[re + 1];
      if (!me || !Se) continue;
      const Be = rt(me, m), Je = rt(Se, m);
      K.has(Be) && !K.has(Je) && !me.disabled && !Se.disabled && (z[re] = Se, z[re + 1] = me, ne.push(me));
    }
    if (ne.length === 0) return;
    N(z), le(z), ee({ source: E, target: z, moved: ne, direction: "down" });
    const fe = Array.from(K)[0];
    if (fe) {
      const re = z.findIndex(
        (me) => rt(me, m) === fe
      );
      re >= 0 && G(re);
    }
  }, [
    I,
    L,
    m,
    E,
    le,
    ee
  ]), we = h.size > 0, Xe = L.size > 0, ye = se(""), Ze = se(
    null
  ), Ve = se(""), Le = se(
    null
  ), tt = B(
    (z) => {
      if (E.length === 0) return;
      const K = Y;
      if (K.length === 0) return;
      const ne = K.includes(j) ? j : K[0] ?? 0;
      let fe = -1;
      if (z.key === "ArrowDown") {
        z.preventDefault();
        const re = K.indexOf(ne);
        fe = K[(re + 1) % K.length] ?? K[0] ?? 0;
      } else if (z.key === "ArrowUp") {
        z.preventDefault();
        const re = K.indexOf(ne);
        fe = K[(re - 1 + K.length) % K.length] ?? K[0] ?? 0;
      } else if (z.key === "Home")
        z.preventDefault(), fe = K[0] ?? 0;
      else if (z.key === "End")
        z.preventDefault(), fe = K[K.length - 1] ?? 0;
      else if (z.key === "Enter" || z.key === " ") {
        z.preventDefault(), q(ne);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(z.key)) {
        z.preventDefault();
        const re = (ye.current + z.key).toLowerCase();
        ye.current = re, Ze.current && clearTimeout(Ze.current), Ze.current = setTimeout(() => {
          ye.current = "";
        }, 500);
        const me = [...K, ...K], Se = K.indexOf(ne) + 1, Be = me.slice(Se).find(
          (Je) => Zn(E[Je]).toLowerCase().startsWith(re)
        );
        Be != null && T(Be);
        return;
      }
      fe >= 0 && T(fe);
    },
    [E, Y, j, q]
  ), Qe = B(
    (z) => {
      if (I.length === 0) return;
      const K = U;
      if (K.length === 0) return;
      const ne = K.includes(F) ? F : K[0] ?? 0;
      let fe = -1;
      if (z.key === "ArrowDown") {
        z.preventDefault();
        const re = K.indexOf(ne);
        fe = K[(re + 1) % K.length] ?? K[0] ?? 0;
      } else if (z.key === "ArrowUp") {
        z.preventDefault();
        const re = K.indexOf(ne);
        fe = K[(re - 1 + K.length) % K.length] ?? K[0] ?? 0;
      } else if (z.key === "Home")
        z.preventDefault(), fe = K[0] ?? 0;
      else if (z.key === "End")
        z.preventDefault(), fe = K[K.length - 1] ?? 0;
      else if (z.key === "Enter" || z.key === " ") {
        z.preventDefault(), ie(ne);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(z.key)) {
        z.preventDefault();
        const re = (Ve.current + z.key).toLowerCase();
        Ve.current = re, Le.current && clearTimeout(Le.current), Le.current = setTimeout(() => {
          Ve.current = "";
        }, 500);
        const me = [...K, ...K], Se = K.indexOf(ne) + 1, Be = me.slice(Se).find(
          (Je) => Zn(I[Je]).toLowerCase().startsWith(re)
        );
        Be != null && G(Be);
        return;
      }
      fe >= 0 && G(fe);
    },
    [I, U, F, ie]
  ), et = se(null), V = se(null);
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Te.root, $].filter(Boolean).join(" "),
      "aria-label": C,
      children: [
        /* @__PURE__ */ M("div", { className: Te.panel, children: [
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
                const ne = rt(z, m), fe = h.has(ne), re = K === j, me = !!z.disabled;
                return /* @__PURE__ */ s(
                  "div",
                  {
                    role: "option",
                    "aria-selected": fe,
                    "aria-disabled": me || void 0,
                    tabIndex: -1,
                    "data-active": re || void 0,
                    className: [
                      Te.option,
                      fe ? Te.selected : null,
                      re ? Te.active : null,
                      me ? Te.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => q(K),
                    children: Zn(z)
                  },
                  ne
                );
              })
            }
          )
        ] }),
        /* @__PURE__ */ M("div", { className: Te.controls, children: [
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
              "aria-disabled": I.filter((z) => !z.disabled).length === 0 || void 0,
              disabled: I.filter((z) => !z.disabled).length === 0,
              onClick: ve,
              children: "«"
            }
          )
        ] }),
        /* @__PURE__ */ M("div", { className: Te.panel, children: [
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
              children: I.length === 0 ? /* @__PURE__ */ s("div", { className: Te.empty, children: "No items" }) : I.map((z, K) => {
                const ne = rt(z, m), fe = L.has(ne), re = K === F, me = !!z.disabled;
                return /* @__PURE__ */ s(
                  "div",
                  {
                    role: "option",
                    "aria-selected": fe,
                    "aria-disabled": me || void 0,
                    tabIndex: -1,
                    "data-active": re || void 0,
                    className: [
                      Te.option,
                      fe ? Te.selected : null,
                      re ? Te.active : null,
                      me ? Te.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => ie(K),
                    children: Zn(z)
                  },
                  ne
                );
              })
            }
          ),
          /* @__PURE__ */ M("div", { className: Te.reorder, children: [
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
const e2 = "_root_16u8q_1", t2 = "_header_16u8q_8", n2 = "_title_16u8q_15", s2 = "_navBtn_16u8q_20", r2 = "_resources_16u8q_39", o2 = "_resource_16u8q_39", l2 = "_grid_16u8q_50", a2 = "_timeCol_16u8q_55", i2 = "_timeCell_16u8q_61", c2 = "_dayCol_16u8q_66", d2 = "_dayHeader_16u8q_73", u2 = "_slot_16u8q_81", f2 = "_event_16u8q_91", pt = {
  root: e2,
  header: t2,
  title: n2,
  navBtn: s2,
  resources: r2,
  resource: o2,
  grid: l2,
  timeCol: a2,
  timeCell: i2,
  dayCol: c2,
  dayHeader: d2,
  slot: u2,
  event: f2
};
function Ys(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function Tk({
  data: e,
  view: t = "week",
  date: n,
  onDateChange: r,
  resources: i,
  onEventClick: c,
  onSlotClick: d,
  ariaLabel: o = "Scheduler",
  className: l
}) {
  const [a, u] = X(
    n ?? /* @__PURE__ */ new Date()
  ), f = n ?? a, k = (x) => {
    n || u(x), r?.(x);
  }, v = t === "day" ? [f] : t === "week" ? Array.from({ length: 7 }, (x, g) => {
    const p = new Date(f);
    return p.setDate(f.getDate() - f.getDay() + g), p;
  }) : Array.from({ length: 30 }, (x, g) => {
    const p = new Date(f);
    return p.setDate(1 + g), p;
  }), w = Array.from({ length: 12 }, (x, g) => 8 + g);
  return /* @__PURE__ */ M(
    "div",
    {
      className: [pt.root, l].filter(Boolean).join(" "),
      role: "group",
      "aria-label": o,
      children: [
        /* @__PURE__ */ M("div", { className: pt.header, children: [
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: pt.navBtn,
              "aria-label": "Previous",
              onClick: () => {
                const x = new Date(f);
                x.setDate(x.getDate() - 7), k(x);
              },
              children: "‹"
            }
          ),
          /* @__PURE__ */ s("span", { className: pt.title, children: f.toLocaleDateString() }),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: pt.navBtn,
              "aria-label": "Next",
              onClick: () => {
                const x = new Date(f);
                x.setDate(x.getDate() + 7), k(x);
              },
              children: "›"
            }
          )
        ] }),
        i && /* @__PURE__ */ s("div", { className: pt.resources, children: i.map((x) => /* @__PURE__ */ s(
          "div",
          {
            className: pt.resource,
            role: "presentation",
            "aria-label": x.name,
            children: x.name
          },
          x.id
        )) }),
        /* @__PURE__ */ M("div", { className: pt.grid, role: "presentation", children: [
          /* @__PURE__ */ s("div", { className: pt.timeCol, role: "presentation", children: w.map((x) => /* @__PURE__ */ M("div", { className: pt.timeCell, children: [
            x,
            ":00"
          ] }, x)) }),
          v.map((x) => /* @__PURE__ */ M(
            "div",
            {
              className: pt.dayCol,
              role: "presentation",
              title: x.toLocaleDateString(),
              onClick: () => d?.({ date: x }),
              tabIndex: 0,
              "aria-label": x.toLocaleDateString(),
              children: [
                /* @__PURE__ */ s("div", { className: pt.dayHeader, children: x.toLocaleDateString(void 0, {
                  weekday: "short",
                  month: "short",
                  day: "numeric"
                }) }),
                w.map((g) => /* @__PURE__ */ s(
                  "div",
                  {
                    className: pt.slot,
                    tabIndex: -1,
                    onClick: () => {
                      const p = new Date(x);
                      p.setHours(g), d?.({ date: p });
                    }
                  },
                  g
                )),
                e.filter((g) => g.start.toDateString() === x.toDateString()).map((g) => /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    className: pt.event,
                    "aria-label": `${g.title} ${Ys(g.start)} - ${Ys(g.end)}`,
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
const _2 = "_root_caexi_1", p2 = "_header_caexi_8", h2 = "_headerCell_caexi_15", m2 = "_timeline_caexi_21", g2 = "_row_caexi_26", x2 = "_taskName_caexi_32", b2 = "_timelineCell_caexi_37", y2 = "_bar_caexi_43", v2 = "_progress_caexi_56", k2 = "_dep_caexi_61", Lt = {
  root: _2,
  header: p2,
  headerCell: h2,
  timeline: m2,
  row: g2,
  taskName: x2,
  timelineCell: b2,
  bar: y2,
  progress: v2,
  dep: k2
};
function Lk({
  tasks: e,
  view: t = "week",
  onTaskClick: n,
  ariaLabel: r = "Gantt",
  className: i
}) {
  const [c, d] = X(null);
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Lt.root, i].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": r,
      "aria-rowcount": e.length,
      children: [
        /* @__PURE__ */ M("div", { className: Lt.header, role: "row", children: [
          /* @__PURE__ */ s("div", { className: Lt.headerCell, role: "columnheader", children: "Task" }),
          /* @__PURE__ */ M("div", { className: Lt.timeline, role: "columnheader", children: [
            "Timeline (",
            t,
            ")"
          ] })
        ] }),
        e.map((o) => /* @__PURE__ */ M(
          "div",
          {
            className: Lt.row,
            role: "row",
            "aria-selected": c === o.id,
            children: [
              /* @__PURE__ */ s("div", { className: Lt.taskName, role: "gridcell", children: o.name }),
              /* @__PURE__ */ M("div", { className: Lt.timelineCell, role: "gridcell", children: [
                /* @__PURE__ */ s(
                  "div",
                  {
                    className: Lt.bar,
                    role: "button",
                    "aria-label": `${o.name} ${o.start.toLocaleDateString()} - ${o.end.toLocaleDateString()}${o.progress !== void 0 ? `, ${o.progress}% complete` : ""}`,
                    "aria-pressed": c === o.id,
                    tabIndex: 0,
                    onClick: () => {
                      d(o.id), n?.({ task: o });
                    },
                    onKeyDown: (l) => {
                      (l.key === "Enter" || l.key === " ") && (l.preventDefault(), d(o.id), n?.({ task: o }));
                    },
                    children: /* @__PURE__ */ s(
                      "div",
                      {
                        className: Lt.progress,
                        style: { width: `${o.progress ?? 0}%` }
                      }
                    )
                  }
                ),
                o.dependencies?.map((l) => /* @__PURE__ */ s("svg", { className: Lt.dep, "aria-hidden": "true", children: /* @__PURE__ */ s(
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
          o.id
        ))
      ]
    }
  );
}
const w2 = "_root_reqz6_1", $2 = "_fields_reqz6_6", N2 = "_chip_reqz6_13", O2 = "_table_reqz6_35", S2 = "_totalRow_reqz6_55", M2 = "_total_reqz6_55", yn = {
  root: w2,
  fields: $2,
  chip: N2,
  table: O2,
  totalRow: S2,
  total: M2
}, Jn = {
  Sum: (e) => e.reduce((t, n) => t + n, 0),
  Average: (e) => e.length ? e.reduce((t, n) => t + n, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function Tn(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function Pk({
  data: e,
  rowFields: t = [],
  columnFields: n = [],
  aggregateFields: r = [],
  onFieldsChange: i,
  ariaLabel: c = "Pivot table",
  className: d
}) {
  const o = t, l = n, a = r, u = (g, p, _) => {
    const y = g === "row" ? o.filter((C) => C.property !== p) : o, $ = g === "col" ? l.filter((C) => C.property !== p) : l, m = g === "agg" ? a.filter((C) => !(C.property === p && C.aggregate === _)) : a;
    i?.({
      rowFields: y,
      columnFields: $,
      aggregateFields: m
    });
  }, f = (g, p) => p.map((_) => String(g[_.property])).join(""), k = [
    ...new Set(o.length ? e.map((g) => f(g, o)) : [""])
  ].sort(), v = [
    ...new Set(l.length ? e.map((g) => f(g, l)) : [""])
  ].sort(), w = (g, p, _) => {
    const y = e.filter(
      (m) => f(m, o) === g && f(m, l) === p
    ), $ = y.map((m) => Number(m[_.property])).filter((m) => !Number.isNaN(m));
    return !$.length && _.aggregate !== "Count" ? 0 : Jn[_.aggregate](
      _.aggregate === "Count" ? y.map(() => 1) : $
    );
  }, x = (g, p, _, y) => /* @__PURE__ */ M(
    "button",
    {
      type: "button",
      className: yn.chip,
      "aria-label": `Remove ${g} field ${_}`,
      onClick: () => u(g, p, y),
      children: [
        _,
        y ? ` (${y})` : ""
      ]
    },
    `${g}-${_}-${y ?? ""}`
  );
  return /* @__PURE__ */ M("div", { className: [yn.root, d].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ M("div", { className: yn.fields, children: [
      o.map((g) => x("row", g.property, g.title ?? g.property)),
      l.map((g) => x("col", g.property, g.title ?? g.property)),
      a.map(
        (g) => x("agg", g.property, g.title ?? g.property, g.aggregate)
      )
    ] }),
    /* @__PURE__ */ M("table", { className: yn.table, role: "grid", "aria-label": c, children: [
      /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ M("tr", { children: [
        /* @__PURE__ */ s("th", { scope: "col", children: o.map((g) => g.title ?? g.property).join(" / ") || "Total" }),
        v.map((g) => /* @__PURE__ */ s("th", { scope: "col", children: g || "—" }, g)),
        /* @__PURE__ */ s("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ M("tbody", { children: [
        k.map((g) => /* @__PURE__ */ M("tr", { children: [
          /* @__PURE__ */ s("th", { scope: "row", children: g || "—" }),
          v.map((p) => /* @__PURE__ */ s(
            "td",
            {
              title: Tn(
                w(
                  g,
                  p,
                  a[0] ?? { property: "", aggregate: "Count" }
                )
              ),
              children: a.length ? Tn(w(g, p, a[0])) : ""
            },
            p
          )),
          /* @__PURE__ */ s("td", { className: yn.total, children: a.length ? Tn(
            Jn[a[0].aggregate](
              v.flatMap(
                (p) => e.filter(
                  (_) => f(_, o) === g && f(_, l) === p
                ).map((_) => Number(_[a[0].property]))
              ).filter((p) => !Number.isNaN(p))
            )
          ) : "" })
        ] }, g)),
        /* @__PURE__ */ M("tr", { className: yn.totalRow, children: [
          /* @__PURE__ */ s("th", { scope: "row", children: "Total" }),
          v.map((g) => /* @__PURE__ */ s("td", { children: a.length ? Tn(
            Jn[a[0].aggregate](
              e.filter((p) => f(p, l) === g).map((p) => Number(p[a[0].property])).filter((p) => !Number.isNaN(p))
            )
          ) : "" }, g)),
          /* @__PURE__ */ s("td", { children: a.length ? Tn(
            Jn[a[0].aggregate](
              e.map((g) => Number(g[a[0].property])).filter((g) => !Number.isNaN(g))
            )
          ) : "" })
        ] })
      ] })
    ] })
  ] });
}
const D2 = "_root_48ysw_1", C2 = "_reverse_48ysw_10", z2 = "_item_48ysw_14", E2 = "_marker_48ysw_35", I2 = "_body_48ysw_46", A2 = "_label_48ysw_50", j2 = "_content_48ysw_56", cn = {
  root: D2,
  reverse: C2,
  item: z2,
  marker: E2,
  body: I2,
  label: A2,
  content: j2
};
function Rk({
  items: e,
  reverse: t = !1,
  ariaLabel: n = "Timeline",
  className: r
}) {
  const i = t ? [...e].reverse() : e;
  return /* @__PURE__ */ s(
    "ol",
    {
      className: [cn.root, t ? cn.reverse : "", r].filter(Boolean).join(" "),
      role: "list",
      "aria-label": n,
      children: i.map((c, d) => /* @__PURE__ */ M("li", { className: cn.item, children: [
        /* @__PURE__ */ s("span", { className: cn.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ M("div", { className: cn.body, children: [
          /* @__PURE__ */ s("div", { className: cn.label, children: c.label }),
          c.content !== void 0 && /* @__PURE__ */ s("div", { className: cn.content, children: c.content })
        ] })
      ] }, d))
    }
  );
}
const T2 = "_root_4ls7q_1", L2 = "_header_4ls7q_13", P2 = "_headCell_4ls7q_22", R2 = "_row_4ls7q_32", B2 = "_cell_4ls7q_37", Ln = {
  root: T2,
  header: L2,
  headCell: P2,
  row: R2,
  cell: B2
};
function Bk({
  count: e,
  rowHeight: t = 40,
  height: n = 320,
  loadData: r,
  columns: i = [],
  ariaLabel: c = "Virtual grid",
  className: d
}) {
  const [o, l] = X(
    /* @__PURE__ */ new Map()
  ), [a, u] = X(0), f = se(/* @__PURE__ */ new Set()), k = Math.ceil(n / t), v = Math.max(0, Math.floor(a / t) - 3), w = Math.min(e, v + k + 6), x = B(
    (p, _) => {
      let y = !1;
      for (let $ = p; $ < _; $++)
        !o.has($) && !f.current.has($) && (y = !0);
      if (y) {
        for (let $ = p; $ < _; $++) f.current.add($);
        r({ skip: p, top: _ }).then(($) => {
          l((m) => {
            const C = new Map(m);
            return $.forEach((b, O) => C.set(p + O, b)), C;
          });
          for (let m = p; m < _; m++) f.current.delete(m);
        });
      }
    },
    [o, r]
  );
  ge(() => {
    x(v, w);
  }, [v, w]);
  const g = [];
  for (let p = v; p < w; p++) {
    const _ = o.get(p) ?? {};
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
              children: String(_[y.property] ?? "")
            },
            y.property
          ))
        },
        p
      )
    );
  }
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Ln.root, d].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": c,
      "aria-rowcount": e,
      tabIndex: 0,
      style: { height: n },
      onScroll: (p) => u(p.target.scrollTop),
      onKeyDown: (p) => {
        const _ = p.currentTarget;
        p.key === "ArrowDown" ? (p.preventDefault(), _.scrollTop += t) : p.key === "ArrowUp" ? (p.preventDefault(), _.scrollTop -= t) : p.key === "PageDown" ? (p.preventDefault(), _.scrollTop += n) : p.key === "PageUp" && (p.preventDefault(), _.scrollTop -= n);
      },
      children: [
        /* @__PURE__ */ s("div", { style: { height: v * t }, "aria-hidden": "true" }),
        /* @__PURE__ */ s("div", { className: Ln.header, role: "row", children: i.map((p) => /* @__PURE__ */ s(
          "div",
          {
            role: "columnheader",
            className: Ln.headCell,
            style: {
              height: t,
              ...p.width ? { width: p.width } : {}
            },
            children: p.title ?? p.property
          },
          p.property
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
    constructor(o, l, a, u) {
      if (this.version = o, this.errorCorrectionLevel = l, o < t.MIN_VERSION || o > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (u < -1 || u > 7) throw new RangeError("Mask value out of range");
      this.size = o * 4 + 17;
      let f = [];
      for (let v = 0; v < this.size; v++) f.push(!1);
      for (let v = 0; v < this.size; v++)
        this.modules.push(f.slice()), this.isFunction.push(f.slice());
      this.drawFunctionPatterns();
      const k = this.addEccAndInterleave(a);
      if (this.drawCodewords(k), u == -1) {
        let v = 1e9;
        for (let w = 0; w < 8; w++) {
          this.applyMask(w), this.drawFormatBits(w);
          const x = this.getPenaltyScore();
          x < v && (u = w, v = x), this.applyMask(w);
        }
      }
      i(0 <= u && u <= 7), this.mask = u, this.applyMask(u), this.drawFormatBits(u), this.isFunction = [];
    }
    version;
    errorCorrectionLevel;
    /*-- Static factory functions (high level) --*/
    // Returns a QR Code representing the given Unicode text string at the given error correction level.
    // As a conservative upper bound, this function is guaranteed to succeed for strings that have 738 or fewer
    // Unicode code points (not UTF-16 code units) if the low error correction level is used. The smallest possible
    // QR Code version is automatically chosen for the output. The ECC level of the result may be higher than the
    // ecl argument if it can be done without increasing the version.
    static encodeText(o, l) {
      const a = e.QrSegment.makeSegments(o);
      return t.encodeSegments(a, l);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(o, l) {
      const a = e.QrSegment.makeBytes(o);
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
    static encodeSegments(o, l, a = 1, u = 40, f = -1, k = !0) {
      if (!(t.MIN_VERSION <= a && a <= u && u <= t.MAX_VERSION) || f < -1 || f > 7)
        throw new RangeError("Invalid value");
      let v, w;
      for (v = a; ; v++) {
        const _ = t.getNumDataCodewords(v, l) * 8, y = c.getTotalBits(o, v);
        if (y <= _) {
          w = y;
          break;
        }
        if (v >= u)
          throw new RangeError("Data too long");
      }
      for (const _ of [
        t.Ecc.MEDIUM,
        t.Ecc.QUARTILE,
        t.Ecc.HIGH
      ])
        k && w <= t.getNumDataCodewords(v, _) * 8 && (l = _);
      let x = [];
      for (const _ of o) {
        n(_.mode.modeBits, 4, x), n(_.numChars, _.mode.numCharCountBits(v), x);
        for (const y of _.getData()) x.push(y);
      }
      i(x.length == w);
      const g = t.getNumDataCodewords(v, l) * 8;
      i(x.length <= g), n(0, Math.min(4, g - x.length), x), n(0, (8 - x.length % 8) % 8, x), i(x.length % 8 == 0);
      for (let _ = 236; x.length < g; _ ^= 253)
        n(_, 8, x);
      let p = [];
      for (; p.length * 8 < x.length; ) p.push(0);
      return x.forEach(
        (_, y) => p[y >>> 3] |= _ << 7 - (y & 7)
      ), new t(v, l, p, f);
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
    getModule(o, l) {
      return 0 <= o && o < this.size && 0 <= l && l < this.size && this.modules[l][o];
    }
    /*-- Private helper methods for constructor: Drawing function modules --*/
    // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
      for (let a = 0; a < this.size; a++)
        this.setFunctionModule(6, a, a % 2 == 0), this.setFunctionModule(a, 6, a % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const o = this.getAlignmentPatternPositions(), l = o.length;
      for (let a = 0; a < l; a++)
        for (let u = 0; u < l; u++)
          a == 0 && u == 0 || a == 0 && u == l - 1 || a == l - 1 && u == 0 || this.drawAlignmentPattern(o[a], o[u]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(o) {
      const l = this.errorCorrectionLevel.formatBits << 3 | o;
      let a = l;
      for (let f = 0; f < 10; f++) a = a << 1 ^ (a >>> 9) * 1335;
      const u = (l << 10 | a) ^ 21522;
      i(u >>> 15 == 0);
      for (let f = 0; f <= 5; f++)
        this.setFunctionModule(8, f, r(u, f));
      this.setFunctionModule(8, 7, r(u, 6)), this.setFunctionModule(8, 8, r(u, 7)), this.setFunctionModule(7, 8, r(u, 8));
      for (let f = 9; f < 15; f++)
        this.setFunctionModule(14 - f, 8, r(u, f));
      for (let f = 0; f < 8; f++)
        this.setFunctionModule(this.size - 1 - f, 8, r(u, f));
      for (let f = 8; f < 15; f++)
        this.setFunctionModule(8, this.size - 15 + f, r(u, f));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    // Draws two copies of the version bits (with its own error correction code),
    // based on this object's version field, iff 7 <= version <= 40.
    drawVersion() {
      if (this.version < 7) return;
      let o = this.version;
      for (let a = 0; a < 12; a++) o = o << 1 ^ (o >>> 11) * 7973;
      const l = this.version << 12 | o;
      i(l >>> 18 == 0);
      for (let a = 0; a < 18; a++) {
        const u = r(l, a), f = this.size - 11 + a % 3, k = Math.floor(a / 3);
        this.setFunctionModule(f, k, u), this.setFunctionModule(k, f, u);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(o, l) {
      for (let a = -4; a <= 4; a++)
        for (let u = -4; u <= 4; u++) {
          const f = Math.max(Math.abs(u), Math.abs(a)), k = o + u, v = l + a;
          0 <= k && k < this.size && 0 <= v && v < this.size && this.setFunctionModule(k, v, f != 2 && f != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(o, l) {
      for (let a = -2; a <= 2; a++)
        for (let u = -2; u <= 2; u++)
          this.setFunctionModule(
            o + u,
            l + a,
            Math.max(Math.abs(u), Math.abs(a)) != 1
          );
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(o, l, a) {
      this.modules[l][o] = a, this.isFunction[l][o] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(o) {
      const l = this.version, a = this.errorCorrectionLevel;
      if (o.length != t.getNumDataCodewords(l, a))
        throw new RangeError("Invalid argument");
      const u = t.NUM_ERROR_CORRECTION_BLOCKS[a.ordinal][l], f = t.ECC_CODEWORDS_PER_BLOCK[a.ordinal][l], k = Math.floor(
        t.getNumRawDataModules(l) / 8
      ), v = u - k % u, w = Math.floor(k / u);
      let x = [];
      const g = t.reedSolomonComputeDivisor(f);
      for (let _ = 0, y = 0; _ < u; _++) {
        let $ = o.slice(
          y,
          y + w - f + (_ < v ? 0 : 1)
        );
        y += $.length;
        const m = t.reedSolomonComputeRemainder($, g);
        _ < v && $.push(0), x.push($.concat(m));
      }
      let p = [];
      for (let _ = 0; _ < x[0].length; _++)
        x.forEach((y, $) => {
          (_ != w - f || $ >= v) && p.push(y[_]);
        });
      return i(p.length == k), p;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(o) {
      if (o.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let l = 0;
      for (let a = this.size - 1; a >= 1; a -= 2) {
        a == 6 && (a = 5);
        for (let u = 0; u < this.size; u++)
          for (let f = 0; f < 2; f++) {
            const k = a - f, w = (a + 1 & 2) == 0 ? this.size - 1 - u : u;
            !this.isFunction[w][k] && l < o.length * 8 && (this.modules[w][k] = r(o[l >>> 3], 7 - (l & 7)), l++);
          }
      }
      i(l == o.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(o) {
      if (o < 0 || o > 7) throw new RangeError("Mask value out of range");
      for (let l = 0; l < this.size; l++)
        for (let a = 0; a < this.size; a++) {
          let u;
          switch (o) {
            case 0:
              u = (a + l) % 2 == 0;
              break;
            case 1:
              u = l % 2 == 0;
              break;
            case 2:
              u = a % 3 == 0;
              break;
            case 3:
              u = (a + l) % 3 == 0;
              break;
            case 4:
              u = (Math.floor(a / 3) + Math.floor(l / 2)) % 2 == 0;
              break;
            case 5:
              u = a * l % 2 + a * l % 3 == 0;
              break;
            case 6:
              u = (a * l % 2 + a * l % 3) % 2 == 0;
              break;
            case 7:
              u = ((a + l) % 2 + a * l % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[l][a] && u && (this.modules[l][a] = !this.modules[l][a]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let o = 0;
      for (let f = 0; f < this.size; f++) {
        let k = !1, v = 0, w = [0, 0, 0, 0, 0, 0, 0];
        for (let x = 0; x < this.size; x++)
          this.modules[f][x] == k ? (v++, v == 5 ? o += t.PENALTY_N1 : v > 5 && o++) : (this.finderPenaltyAddHistory(v, w), k || (o += this.finderPenaltyCountPatterns(w) * t.PENALTY_N3), k = this.modules[f][x], v = 1);
        o += this.finderPenaltyTerminateAndCount(k, v, w) * t.PENALTY_N3;
      }
      for (let f = 0; f < this.size; f++) {
        let k = !1, v = 0, w = [0, 0, 0, 0, 0, 0, 0];
        for (let x = 0; x < this.size; x++)
          this.modules[x][f] == k ? (v++, v == 5 ? o += t.PENALTY_N1 : v > 5 && o++) : (this.finderPenaltyAddHistory(v, w), k || (o += this.finderPenaltyCountPatterns(w) * t.PENALTY_N3), k = this.modules[x][f], v = 1);
        o += this.finderPenaltyTerminateAndCount(k, v, w) * t.PENALTY_N3;
      }
      for (let f = 0; f < this.size - 1; f++)
        for (let k = 0; k < this.size - 1; k++) {
          const v = this.modules[f][k];
          v == this.modules[f][k + 1] && v == this.modules[f + 1][k] && v == this.modules[f + 1][k + 1] && (o += t.PENALTY_N2);
        }
      let l = 0;
      for (const f of this.modules)
        l = f.reduce((k, v) => k + (v ? 1 : 0), l);
      const a = this.size * this.size, u = Math.ceil(Math.abs(l * 20 - a * 10) / a) - 1;
      return i(0 <= u && u <= 9), o += u * t.PENALTY_N4, i(0 <= o && o <= 2568888), o;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1) return [];
      {
        const o = Math.floor(this.version / 7) + 2, l = Math.floor(
          (this.version * 8 + o * 3 + 5) / (o * 4 - 4)
        ) * 2;
        let a = [6];
        for (let u = this.size - 7; a.length < o; u -= l)
          a.splice(1, 0, u);
        return a;
      }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(o) {
      if (o < t.MIN_VERSION || o > t.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let l = (16 * o + 128) * o + 64;
      if (o >= 2) {
        const a = Math.floor(o / 7) + 2;
        l -= (25 * a - 10) * a - 55, o >= 7 && (l -= 36);
      }
      return i(208 <= l && l <= 29648), l;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(o, l) {
      return Math.floor(t.getNumRawDataModules(o) / 8) - t.ECC_CODEWORDS_PER_BLOCK[l.ordinal][o] * t.NUM_ERROR_CORRECTION_BLOCKS[l.ordinal][o];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(o) {
      if (o < 1 || o > 255)
        throw new RangeError("Degree out of range");
      let l = [];
      for (let u = 0; u < o - 1; u++) l.push(0);
      l.push(1);
      let a = 1;
      for (let u = 0; u < o; u++) {
        for (let f = 0; f < l.length; f++)
          l[f] = t.reedSolomonMultiply(l[f], a), f + 1 < l.length && (l[f] ^= l[f + 1]);
        a = t.reedSolomonMultiply(a, 2);
      }
      return l;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(o, l) {
      let a = l.map((u) => 0);
      for (const u of o) {
        const f = u ^ a.shift();
        a.push(0), l.forEach(
          (k, v) => a[v] ^= t.reedSolomonMultiply(k, f)
        );
      }
      return a;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(o, l) {
      if (o >>> 8 || l >>> 8)
        throw new RangeError("Byte out of range");
      let a = 0;
      for (let u = 7; u >= 0; u--)
        a = a << 1 ^ (a >>> 7) * 285, a ^= (l >>> u & 1) * o;
      return i(a >>> 8 == 0), a;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(o) {
      const l = o[1];
      i(l <= this.size * 3);
      const a = l > 0 && o[2] == l && o[3] == l * 3 && o[4] == l && o[5] == l;
      return (a && o[0] >= l * 4 && o[6] >= l ? 1 : 0) + (a && o[6] >= l * 4 && o[0] >= l ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(o, l, a) {
      return o && (this.finderPenaltyAddHistory(l, a), l = 0), l += this.size, this.finderPenaltyAddHistory(l, a), this.finderPenaltyCountPatterns(a);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(o, l) {
      l[0] == 0 && (o += this.size), l.pop(), l.unshift(o);
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
  function n(d, o, l) {
    if (o < 0 || o > 31 || d >>> o)
      throw new RangeError("Value out of range");
    for (let a = o - 1; a >= 0; a--)
      l.push(d >>> a & 1);
  }
  function r(d, o) {
    return (d >>> o & 1) != 0;
  }
  function i(d) {
    if (!d) throw new Error("Assertion error");
  }
  class c {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(o, l, a) {
      if (this.mode = o, this.numChars = l, this.bitData = a, l < 0) throw new RangeError("Invalid argument");
      this.bitData = a.slice();
    }
    mode;
    numChars;
    bitData;
    /*-- Static factory functions (mid level) --*/
    // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(o) {
      let l = [];
      for (const a of o) n(a, 8, l);
      return new c(c.Mode.BYTE, o.length, l);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(o) {
      if (!c.isNumeric(o))
        throw new RangeError("String contains non-numeric characters");
      let l = [];
      for (let a = 0; a < o.length; ) {
        const u = Math.min(o.length - a, 3);
        n(parseInt(o.substring(a, a + u), 10), u * 3 + 1, l), a += u;
      }
      return new c(c.Mode.NUMERIC, o.length, l);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(o) {
      if (!c.isAlphanumeric(o))
        throw new RangeError(
          "String contains unencodable characters in alphanumeric mode"
        );
      let l = [], a;
      for (a = 0; a + 2 <= o.length; a += 2) {
        let u = c.ALPHANUMERIC_CHARSET.indexOf(o.charAt(a)) * 45;
        u += c.ALPHANUMERIC_CHARSET.indexOf(o.charAt(a + 1)), n(u, 11, l);
      }
      return a < o.length && n(
        c.ALPHANUMERIC_CHARSET.indexOf(o.charAt(a)),
        6,
        l
      ), new c(c.Mode.ALPHANUMERIC, o.length, l);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(o) {
      return o == "" ? [] : c.isNumeric(o) ? [c.makeNumeric(o)] : c.isAlphanumeric(o) ? [c.makeAlphanumeric(o)] : [c.makeBytes(c.toUtf8ByteArray(o))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(o) {
      let l = [];
      if (o < 0)
        throw new RangeError("ECI assignment value out of range");
      if (o < 128) n(o, 8, l);
      else if (o < 16384)
        n(2, 2, l), n(o, 14, l);
      else if (o < 1e6)
        n(6, 3, l), n(o, 21, l);
      else throw new RangeError("ECI assignment value out of range");
      return new c(c.Mode.ECI, 0, l);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(o) {
      return c.NUMERIC_REGEX.test(o);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(o) {
      return c.ALPHANUMERIC_REGEX.test(o);
    }
    /*-- Methods --*/
    // Returns a new copy of the data bits of this segment.
    getData() {
      return this.bitData.slice();
    }
    // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
    // the given version. The result is infinity if a segment has too many characters to fit its length field.
    static getTotalBits(o, l) {
      let a = 0;
      for (const u of o) {
        const f = u.mode.numCharCountBits(l);
        if (u.numChars >= 1 << f) return 1 / 0;
        a += 4 + f + u.bitData.length;
      }
      return a;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(o) {
      o = encodeURI(o);
      let l = [];
      for (let a = 0; a < o.length; a++)
        o.charAt(a) != "%" ? l.push(o.charCodeAt(a)) : (l.push(parseInt(o.substring(a + 1, a + 3), 16)), a += 2);
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
const q2 = "_root_1leml_1", F2 = {
  root: q2
}, H2 = {
  low: zt.QrCode.Ecc.LOW,
  medium: zt.QrCode.Ecc.MEDIUM,
  quartile: zt.QrCode.Ecc.QUARTILE,
  high: zt.QrCode.Ecc.HIGH
};
function qk({
  value: e,
  size: t = 128,
  render: n = "svg",
  errorCorrection: r = "medium",
  margin: i = 4,
  ariaLabel: c,
  className: d,
  onError: o
}) {
  const l = c ?? `QR code for ${e}`, a = se(null), u = lr("(prefers-color-scheme: dark)"), [f, k] = X(null);
  ge(() => {
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
      return zt.QrCode.encodeText(e, H2[r]);
    } catch {
      return null;
    }
  }, [e, r]), w = se(null);
  ge(() => {
    if (v !== null) {
      w.current = null;
      return;
    }
    const $ = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error($), (w.current?.value !== e || w.current?.onError !== o) && (w.current = { value: e, onError: o }, o?.($));
  }, [v, e, o]);
  const x = Math.max(0, Math.floor(i)), g = [F2.root, d].filter(Boolean).join(" ");
  if (ge(() => {
    if (n !== "canvas" || v === null) return;
    const $ = a.current, m = $?.getContext("2d");
    if (!$ || !m) return;
    const C = getComputedStyle($), b = C.getPropertyValue("--dx-text-color").trim() || "#000", O = C.getPropertyValue("--dx-surface-color").trim() || "#fff";
    K2(m, v, t, x, b, O);
  }, [n, v, t, x, u, f]), v === null)
    return /* @__PURE__ */ s("div", { className: g, role: "img", "aria-label": l, "data-qr-error": "true" });
  const p = v.size + x * 2, _ = t / p;
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
            x: (m + x) * _,
            y: ($ + x) * _,
            width: _ + 0.5,
            height: _ + 0.5
          },
          `${m}-${$}`
        )
      );
  return /* @__PURE__ */ M(
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
function K2(e, t, n, r, i, c) {
  const d = n / (t.size + r * 2);
  e.fillStyle = c, e.fillRect(0, 0, n, n), e.fillStyle = i;
  for (let o = 0; o < t.size; o++)
    for (let l = 0; l < t.size; l++)
      t.getModule(l, o) && e.fillRect((l + r) * d, (o + r) * d, d + 0.5, d + 0.5);
}
const U2 = "_root_1v9la_1", W2 = "_value_1v9la_9", Zs = {
  root: U2,
  value: W2
}, Js = [
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
], Qs = 104, X2 = 106;
function V2(e) {
  const t = [Qs];
  for (let r = 0; r < e.length; r++) {
    const i = e.charCodeAt(r);
    t.push(i >= 32 && i <= 126 ? i - 32 : 0);
  }
  let n = Qs;
  for (let r = 1; r < t.length; r++) n += r * t[r];
  return t.push(n % 103, X2), t;
}
function Fk({
  value: e,
  format: t = "Code128",
  height: n = 60,
  showValue: r = !1,
  ariaLabel: i,
  className: c
}) {
  const d = i ?? `Barcode ${e}`, o = be(() => {
    const l = [];
    let a = 0;
    for (const u of V2(e)) {
      const f = Js[u] ?? Js[0];
      for (let k = 0; k < f.length; k++) {
        const v = Number(f[k]);
        k % 2 === 0 && l.push({ x: a, w: v }), a += v;
      }
    }
    return { modules: l, total: a };
  }, [e]);
  return /* @__PURE__ */ M("span", { className: [Zs.root, c].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ M(
      "svg",
      {
        width: "100%",
        height: n,
        viewBox: `0 0 ${o.total} ${n}`,
        preserveAspectRatio: "none",
        role: "img",
        "aria-label": d,
        "data-value": e,
        children: [
          /* @__PURE__ */ s(
            "rect",
            {
              width: o.total,
              height: n,
              fill: "var(--dx-surface-color)"
            }
          ),
          o.modules.map((l, a) => /* @__PURE__ */ s(
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
    r && /* @__PURE__ */ s("span", { className: Zs.value, children: e })
  ] });
}
const G2 = "_root_1bgqt_1", Y2 = "_svg_1bgqt_10", Z2 = "_gridline_1bgqt_15", J2 = "_tickLabel_1bgqt_21", Q2 = "_axisTitle_1bgqt_27", ev = "_dataLabel_1bgqt_34", tv = "_legend_1bgqt_40", nv = "_legendItem_1bgqt_48", sv = "_swatch_1bgqt_56", rv = "_tooltip_1bgqt_63", ov = "_visuallyHidden_1bgqt_77", ot = {
  root: G2,
  svg: Y2,
  gridline: Z2,
  tickLabel: J2,
  axisTitle: Q2,
  dataLabel: ev,
  legend: tv,
  legendItem: nv,
  swatch: sv,
  tooltip: rv,
  visuallyHidden: ov
}, er = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function lv(e, t, n) {
  const r = t - e || 1, i = n ?? Math.pow(10, Math.floor(Math.log10(r / 4))), c = Math.floor(e / i) * i, d = Math.ceil(t / i) * i, o = [];
  for (let l = c; l <= d + 1e-9; l += i)
    o.push(Number(l.toFixed(6)));
  return { min: c, max: d, step: i, ticks: o };
}
function Hk({
  series: e,
  width: t = 600,
  height: n = 400,
  valueAxis: r,
  categoryAxis: i,
  showLegend: c = !0,
  tooltipVisible: d = !0,
  onSeriesClick: o,
  ariaLabel: l = "Chart",
  className: a
}) {
  const [u, f] = X(
    null
  ), k = be(() => {
    const b = /* @__PURE__ */ new Set();
    for (const O of e)
      for (const E of O.data) b.add(String(E[O.categoryProperty] ?? ""));
    return [...b];
  }, [e]), v = be(
    () => e.flatMap((b) => b.data.map((O) => Number(O[b.valueProperty]))).filter((b) => !Number.isNaN(b)),
    [e]
  ), w = r?.min ?? (v.length ? Math.min(0, ...v) : 0), x = r?.max ?? (v.length ? Math.max(...v) : 10), g = be(
    () => lv(w, x, r?.step),
    [w, x, r?.step]
  ), p = { t: 16, r: 16, b: 40, l: 56 }, _ = t - p.l - p.r, y = n - p.t - p.b, $ = (b) => p.l + b / Math.max(1, k.length - 1) * _, m = (b) => p.t + (1 - (b - g.min) / (g.max - g.min || 1)) * y, C = (b, O) => O.color ?? er[b % er.length];
  return /* @__PURE__ */ M(
    "figure",
    {
      className: [ot.root, a].filter(Boolean).join(" "),
      role: "img",
      "aria-label": l,
      "aria-describedby": `${l.replace(/\s+/g, "-")}-table`,
      children: [
        /* @__PURE__ */ M(
          "svg",
          {
            width: t,
            height: n,
            className: ot.svg,
            role: "presentation",
            children: [
              r?.gridlines !== !1 && g.ticks.map((b) => /* @__PURE__ */ s(
                "line",
                {
                  x1: p.l,
                  x2: p.l + _,
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
                  y1: p.t,
                  y2: p.t + y,
                  className: ot.gridline
                },
                O
              )),
              g.ticks.map((b) => /* @__PURE__ */ s(
                "text",
                {
                  x: p.l - 8,
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
                  y: p.t + y + 16,
                  textAnchor: "middle",
                  className: ot.tickLabel,
                  children: b
                },
                b
              )),
              r?.title && /* @__PURE__ */ s(
                "text",
                {
                  x: 12,
                  y: p.t + y / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90,12,${p.t + y / 2})`,
                  className: ot.axisTitle,
                  children: r.title
                }
              ),
              i?.title && /* @__PURE__ */ s(
                "text",
                {
                  x: p.l + _ / 2,
                  y: n - 4,
                  textAnchor: "middle",
                  className: ot.axisTitle,
                  children: i.title
                }
              ),
              (() => {
                const b = /* @__PURE__ */ new Map();
                for (const D of e)
                  if (D.stack)
                    for (const I of D.data) {
                      const N = String(I[D.categoryProperty] ?? ""), h = Number(I[D.valueProperty]);
                      if (Number.isNaN(h)) continue;
                      b.has(D.stack) || b.set(D.stack, /* @__PURE__ */ new Map());
                      const S = b.get(D.stack);
                      S.set(N, (S.get(N) ?? 0) + h);
                    }
                const O = e.filter(
                  (D) => D.type === "pie" || D.type === "donut"
                ), E = /* @__PURE__ */ new Map();
                for (const D of O) {
                  const I = D.data.reduce(
                    (N, h) => N + (Number(h[D.valueProperty]) || 0),
                    0
                  );
                  E.set(D, I);
                }
                return e.map((D, I) => {
                  const N = D.data.map((A) => ({
                    cat: String(A[D.categoryProperty] ?? ""),
                    val: Number(A[D.valueProperty]),
                    size: D.sizeProperty ? Number(A[D.sizeProperty]) : void 0,
                    item: A
                  })), h = new Map(k.map((A, j) => [A, j])), S = C(I, D);
                  if (D.type === "pie" || D.type === "donut") {
                    const A = p.l + _ / 2, j = p.t + y / 2, T = Math.min(_, y) / 3, F = D.type === "donut" ? D.innerRadius ?? T * 0.5 : 0, G = E.get(D) ?? N.reduce((U, te) => U + te.val, 0);
                    let Y = -90;
                    return /* @__PURE__ */ M(
                      "g",
                      {
                        role: "list",
                        "aria-label": D.title ?? `Series ${I + 1}`,
                        children: [
                          /* @__PURE__ */ s("title", { children: D.title ?? `Series ${I + 1}` }),
                          N.map((U, te) => {
                            const le = G ? U.val / G * 360 : 0, ee = Y, q = Y + le;
                            Y = q;
                            const ie = le > 180 ? 1 : 0, J = (Qe) => Qe * Math.PI / 180, de = A + T * Math.cos(J(ee)), ae = j + T * Math.sin(J(ee)), ve = A + T * Math.cos(J(q)), $e = j + T * Math.sin(J(q)), Re = A + F * Math.cos(J(q)), we = j + F * Math.sin(J(q)), Xe = A + F * Math.cos(J(ee)), ye = j + F * Math.sin(J(ee)), Ze = F ? `M ${de} ${ae} A ${T} ${T} 0 ${ie} 1 ${ve} ${$e} L ${Re} ${we} A ${F} ${F} 0 ${ie} 0 ${Xe} ${ye} Z` : `M ${A} ${j} L ${de} ${ae} A ${T} ${T} 0 ${ie} 1 ${ve} ${$e} Z`, Ve = (ee + q) / 2, Le = A + (T + 12) * Math.cos(J(Ve)), tt = j + (T + 12) * Math.sin(J(Ve));
                            return /* @__PURE__ */ M("g", { role: "listitem", children: [
                              /* @__PURE__ */ s(
                                "path",
                                {
                                  d: Ze,
                                  fill: S,
                                  stroke: "var(--dx-surface-color)",
                                  strokeWidth: 1,
                                  onMouseEnter: () => d && f({
                                    x: Le,
                                    y: tt,
                                    text: `${D.title ?? U.cat}: ${U.val}`
                                  }),
                                  onMouseLeave: () => f(null),
                                  onClick: () => o?.({
                                    seriesTitle: D.title ?? "",
                                    category: U.cat,
                                    value: U.val,
                                    item: U.item
                                  }),
                                  style: { cursor: "pointer" }
                                }
                              ),
                              D.labels?.visible && /* @__PURE__ */ s(
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
                      I
                    );
                  }
                  if (D.type === "scatter" || D.type === "bubble")
                    return /* @__PURE__ */ M(
                      "g",
                      {
                        role: "list",
                        "aria-label": D.title ?? `Series ${I + 1}`,
                        children: [
                          /* @__PURE__ */ s("title", { children: D.title ?? `Series ${I + 1}` }),
                          N.map((A, j) => {
                            const T = h.get(A.cat) ?? 0, F = Number(N[j].cat), G = Number.isNaN(F) ? $(T) : p.l + (F - g.min) / (g.max - g.min || 1) * _, Y = m(A.val), U = D.type === "bubble" && A.size !== void 0 ? Math.max(4, Math.min(12, A.size / 10)) : 4;
                            return /* @__PURE__ */ M("g", { role: "listitem", children: [
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
                                  onMouseEnter: () => d && f({
                                    x: G,
                                    y: Y,
                                    text: `${D.title ?? A.cat}: ${A.val}`
                                  }),
                                  onMouseLeave: () => f(null),
                                  onClick: () => o?.({
                                    seriesTitle: D.title ?? "",
                                    category: A.cat,
                                    value: A.val,
                                    item: A.item
                                  }),
                                  style: { cursor: "pointer" }
                                }
                              )
                            ] }, j);
                          })
                        ]
                      },
                      I
                    );
                  if (D.type === "line" || D.type === "area") {
                    const A = (F) => {
                      if (!D.stack) return g.min;
                      let G = 0;
                      for (let Y = 0; Y < I; Y++) {
                        const U = e[Y];
                        if (U?.stack !== D.stack) continue;
                        const te = U.data.find(
                          (le) => String(le[U.categoryProperty] ?? "") === F
                        );
                        te && (G += Number(te[U.valueProperty]) || 0);
                      }
                      return G;
                    }, j = N.map((F) => {
                      const G = h.get(F.cat) ?? 0, Y = A(F.cat);
                      return `${G === 0 ? "M" : "L"} ${$(G)} ${m(Y + F.val)}`;
                    }).join(" "), T = N.map((F) => {
                      const G = h.get(F.cat) ?? 0, Y = A(F.cat);
                      return `${G === 0 ? "M" : "L"} ${$(G)} ${m(Y)}`;
                    }).join(" ");
                    return /* @__PURE__ */ M(
                      "g",
                      {
                        role: "list",
                        "aria-label": D.title ?? `Series ${I + 1}`,
                        children: [
                          /* @__PURE__ */ s("title", { children: D.title ?? `Series ${I + 1}` }),
                          D.type === "area" && /* @__PURE__ */ s(
                            "path",
                            {
                              d: `${j} L ${$(N.length - 1)} ${m(A(N[N.length - 1].cat))} L ${$(0)} ${m(A(N[0].cat))} Z`,
                              fill: S,
                              fillOpacity: 0.25,
                              stroke: "none"
                            }
                          ),
                          /* @__PURE__ */ s("path", { d: j, fill: "none", stroke: S, strokeWidth: 2 }),
                          D.stack && /* @__PURE__ */ s("path", { d: T, fill: "none", stroke: "transparent" }),
                          N.map((F, G) => {
                            const Y = h.get(F.cat) ?? 0, U = A(F.cat), te = $(Y), le = m(U + F.val);
                            return /* @__PURE__ */ M("g", { role: "listitem", children: [
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
                                  onMouseEnter: () => d && f({
                                    x: te,
                                    y: le,
                                    text: `${D.title ?? F.cat}: ${F.val}`
                                  }),
                                  onMouseLeave: () => f(null),
                                  onFocus: () => d && f({
                                    x: te,
                                    y: le,
                                    text: `${D.title ?? F.cat}: ${F.val}`
                                  }),
                                  onBlur: () => f(null),
                                  onClick: () => o?.({
                                    seriesTitle: D.title ?? "",
                                    category: F.cat,
                                    value: F.val,
                                    item: F.item
                                  }),
                                  style: { cursor: "pointer" }
                                }
                              ),
                              D.labels?.visible && /* @__PURE__ */ s(
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
                      I
                    );
                  }
                  const L = D.type === "bar";
                  return /* @__PURE__ */ M(
                    "g",
                    {
                      role: "list",
                      "aria-label": D.title ?? `Series ${I + 1}`,
                      children: [
                        /* @__PURE__ */ s("title", { children: D.title ?? `Series ${I + 1}` }),
                        N.map((A, j) => {
                          const T = h.get(A.cat) ?? 0;
                          let F = 0;
                          if (D.stack)
                            for (let ae = 0; ae < I; ae++) {
                              const ve = e[ae];
                              if (ve?.stack !== D.stack) continue;
                              const $e = ve.data.find(
                                (Re) => String(Re[ve.categoryProperty] ?? "") === A.cat
                              );
                              $e && (F += Number($e[ve.valueProperty]) || 0);
                            }
                          const G = F + A.val, Y = e.filter(
                            (ae) => !ae.stack || ae.stack === D.stack
                          ).length, U = _ / k.length, te = L ? 18 : Math.max(
                            12,
                            U / (D.stack ? 1 : e.length) - 4
                          ), le = L ? p.l + F / (g.max - g.min || 1) * _ : $(T) - te / 2 + (D.stack ? 0 : I % Y * te), ee = L ? p.t + T * y / k.length + 4 : m(G), q = L ? A.val / (g.max - g.min || 1) * _ : te - 4, ie = L ? 16 : m(F) - m(G), J = L ? p.l + F / (g.max - g.min || 1) * _ : le, de = L ? p.t + T * y / k.length + 4 : ee;
                          return /* @__PURE__ */ M("g", { role: "listitem", children: [
                            /* @__PURE__ */ s(
                              "rect",
                              {
                                x: J,
                                y: de,
                                width: L ? q : te - 4,
                                height: ie,
                                fill: S,
                                rx: 2,
                                onMouseEnter: () => d && f({
                                  x: J + (L ? q : te) / 2,
                                  y: de,
                                  text: `${D.title ?? A.cat}: ${A.val}`
                                }),
                                onMouseLeave: () => f(null),
                                onClick: () => o?.({
                                  seriesTitle: D.title ?? "",
                                  category: A.cat,
                                  value: A.val,
                                  item: A.item
                                }),
                                style: { cursor: "pointer" }
                              }
                            ),
                            D.labels?.visible && /* @__PURE__ */ s(
                              "text",
                              {
                                x: J + (L ? q : te) / 2,
                                y: de - 4,
                                textAnchor: "middle",
                                className: ot.dataLabel,
                                children: A.val
                              }
                            )
                          ] }, j);
                        })
                      ]
                    },
                    I
                  );
                });
              })()
            ]
          }
        ),
        u && /* @__PURE__ */ s(
          "div",
          {
            className: ot.tooltip,
            style: { left: u.x, top: u.y - 28 },
            children: u.text
          }
        ),
        c && /* @__PURE__ */ s("div", { className: ot.legend, children: e.map((b, O) => /* @__PURE__ */ M("span", { className: ot.legendItem, children: [
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
        /* @__PURE__ */ M(
          "table",
          {
            className: ot.visuallyHidden,
            id: `${l.replace(/\s+/g, "-")}-table`,
            children: [
              /* @__PURE__ */ s("caption", { children: l }),
              /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ M("tr", { children: [
                /* @__PURE__ */ s("th", { children: "Series" }),
                /* @__PURE__ */ s("th", { children: "Category" }),
                /* @__PURE__ */ s("th", { children: "Value" })
              ] }) }),
              /* @__PURE__ */ s("tbody", { children: e.map(
                (b) => b.data.map((O, E) => /* @__PURE__ */ M("tr", { children: [
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
  wc as ALERT_ICON,
  Qv as Accordion,
  Bv as Alert,
  Uv as AutoGrid,
  sk as Autocomplete,
  Zv as Avatar,
  uv as Badge,
  Fk as Barcode,
  Xv as Body,
  Mk as Breadcrumb,
  cv as Button,
  dv as Card,
  Ik as Carousel,
  Hk as Chart,
  jv as Checkbox,
  ok as Checkboxlist,
  _k as Colorpicker,
  Hv as Column,
  wk as ContextMenuProvider,
  Sn as DEFAULT_OPERATOR_BY_TYPE,
  O0 as DEFAULT_PALETTE,
  Cv as DataFilter,
  zv as DataGrid,
  Ev as DataList,
  pk as Datepicker,
  Lv as Dialog,
  vk as DropZone,
  nk as Dropdown,
  hv as EmptyState,
  nr as FILTER_OPERATORS,
  Sk as FabMenu,
  mv as Field,
  xv as Fieldset,
  Rp as Footer,
  bv as Form,
  gv as FormField,
  Lk as Gantt,
  Fp as Header,
  Ne as Icon,
  Av as Input,
  Iv as Label,
  Wv as Layout,
  Dk as Link,
  rk as Listbox,
  uk as Mask,
  jx as Menu,
  dr as MenuItem,
  fk as Numeric,
  ta as Pager,
  Nk as PanelMenu,
  $k as PanelMenuItem,
  dk as Password,
  jk as PickList,
  Pk as Pivot,
  Ok as ProfileMenu,
  Gv as Progress,
  qk as QRCode,
  lk as Radiobuttonlist,
  hk as Rating,
  Fv as Row,
  Tk as Scheduler,
  xk as SecurityCode,
  vn as Select,
  ak as Selectbar,
  eh as Sidebar,
  Vv as SidebarToggle,
  bk as SignaturePad,
  qv as Skeleton,
  mk as Slider,
  ck as Splitbutton,
  zk as Splitter,
  Kv as Stack,
  _v as Stat,
  Ck as Steps,
  hi as Switch,
  pv as Table,
  Jv as Tabs,
  tk as Text,
  ek as Textarea,
  ui as Textbox,
  Yv as ThemeSwitcher,
  Rk as Timeline,
  gk as Timespanpicker,
  Rv as ToastProvider,
  Ek as Toc,
  ik as Togglebutton,
  Tv as Tooltip,
  Ak as Tree,
  yk as Upload,
  Bk as VirtualGrid,
  rr as applyFilters,
  ia as applyGridState,
  Dn as columnValue,
  Ov as compare,
  Mv as custom,
  oa as cycleSort,
  ca as defaultOperatorForType,
  vv as email,
  qs as formatMasked,
  Cs as formatValue,
  es as getByPath,
  fv as iconNames,
  sr as matchesFilters,
  $v as maxLength,
  wv as minLength,
  aa as paginate,
  kv as pattern,
  Nv as range,
  yv as required,
  Sv as requiredTrue,
  bs as resolveVariant,
  il as runValidators,
  kn as shadeClass,
  Nl as sortItems,
  la as sortedItems,
  yl as toFilterString,
  $l as toODataFilterString,
  kk as useContextMenu,
  al as useFormContext,
  Dv as useFormField,
  lr as useMediaQuery,
  Pv as useToast
};
