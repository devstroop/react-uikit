import { jsx as o, jsxs as M, Fragment as pt } from "react/jsx-runtime";
import { forwardRef as st, useId as ot, isValidElement as qt, cloneElement as Vs, useState as q, useRef as oe, useCallback as B, useMemo as Se, useContext as Pn, createContext as or, useEffect as ve, Fragment as Ys, useLayoutEffect as zs, useImperativeHandle as ms, Children as qr } from "react";
function Ur(e) {
  return e == null || e === "default" || e === "medium" ? null : `shade-${e}`;
}
const Fl = "_button_eyvws_1", Hl = "_filled_eyvws_36", Ul = "_flat_eyvws_55", ql = "_outlined_eyvws_58", Kl = "_text_eyvws_63", Wl = "_loading_eyvws_506", Gl = "_spinner_eyvws_509", Vl = "_xs_eyvws_525", Yl = "_sm_eyvws_531", Xl = "_md_eyvws_537", Zl = "_lg_eyvws_543", Jl = "_xl_eyvws_549", Ql = "_iconOnly_eyvws_555", ea = "_fullWidth_eyvws_585", Cn = {
  button: Fl,
  filled: Hl,
  flat: Ul,
  outlined: ql,
  text: Kl,
  "style-primary": "_style-primary_eyvws_82",
  "style-secondary": "_style-secondary_eyvws_101",
  "style-base": "_style-base_eyvws_119",
  "style-light": "_style-light_eyvws_139",
  "style-dark": "_style-dark_eyvws_157",
  "style-danger": "_style-danger_eyvws_176",
  "style-success": "_style-success_eyvws_195",
  "style-warning": "_style-warning_eyvws_214",
  "style-info": "_style-info_eyvws_233",
  "shade-lighter": "_shade-lighter_eyvws_418",
  "shade-light": "_shade-light_eyvws_418",
  "shade-dark": "_shade-dark_eyvws_428",
  "shade-darker": "_shade-darker_eyvws_432",
  loading: Wl,
  spinner: Gl,
  "dx-spin": "_dx-spin_eyvws_1",
  xs: Vl,
  sm: Yl,
  md: Xl,
  lg: Zl,
  xl: Jl,
  iconOnly: Ql,
  fullWidth: ea
};
function ta(e, t) {
  const n = t, r = e ?? "filled";
  return { variant: r === "filled" || r === "flat" || r === "outlined" || r === "text" ? r : "filled", style: n ?? "primary" };
}
const yn = st(
  function(t, n) {
    const {
      variant: r = "filled",
      severity: l,
      shade: a = "default",
      size: d = "md",
      fullWidth: s = !1,
      iconOnly: i = !1,
      loading: c = !1,
      visible: f = !0,
      className: u,
      disabled: h,
      children: m,
      ...b
    } = t;
    if (f === !1) return null;
    const g = ta(r, l), p = g.style === "light" || g.style === "dark" ? null : Ur(a), _ = [
      Cn.button,
      Cn[g.variant],
      Cn[`style-${g.style}`],
      p ? Cn[p] : null,
      Cn[d],
      s ? Cn.fullWidth : null,
      i ? Cn.iconOnly : null,
      c ? Cn.loading : null,
      // Press feedback on every button (Radzen material parity).
      "dx-ripple",
      u
    ].filter(Boolean).join(" "), x = /* @__PURE__ */ M(pt, { children: [
      c ? /* @__PURE__ */ o("span", { "aria-hidden": "true", className: Cn.spinner }) : null,
      m
    ] }), N = t.href;
    if (N != null) {
      const { onClick: O, ...T } = b, A = h || c;
      return /* @__PURE__ */ o(
        "a",
        {
          ref: n,
          href: N,
          className: _,
          "aria-disabled": A || void 0,
          "aria-busy": c || void 0,
          onClick: (C) => {
            if (A) {
              C.preventDefault();
              return;
            }
            O?.(C);
          },
          ...T,
          children: x
        }
      );
    }
    const { type: v = "button", ...$ } = b;
    return /* @__PURE__ */ o(
      "button",
      {
        ref: n,
        type: v,
        className: _,
        disabled: h || c,
        "aria-busy": c || void 0,
        ...$,
        children: x
      }
    );
  }
), na = "_card_4vcae_1", ra = "_elevated_4vcae_8", sa = "_filled_4vcae_13", oa = "_outlined_4vcae_18", la = "_interactive_4vcae_22", aa = "_text_4vcae_30", ia = "_header_4vcae_46", ca = "_body_4vcae_53", da = "_footer_4vcae_63", xr = {
  card: na,
  elevated: ra,
  filled: sa,
  outlined: oa,
  interactive: la,
  text: aa,
  header: ia,
  body: ca,
  footer: da
}, CN = st(function({
  variant: t = "elevated",
  header: n,
  footer: r,
  className: l,
  visible: a = !0,
  children: d,
  onKeyDown: s,
  ...i
}, c) {
  if (a === !1) return null;
  const f = t === "interactive";
  return (
    // Interactivity is conditional on variant="interactive" (role + tabIndex
    // travel together); static analysis cannot see that.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ M(
      "div",
      {
        ref: c,
        role: f ? "button" : void 0,
        tabIndex: f ? 0 : void 0,
        onKeyDown: (u) => {
          s?.(u), !(!f || u.key !== "Enter" && u.key !== " ") && (u.preventDefault(), u.currentTarget.click());
        },
        className: [xr.card, xr[t], l].filter(Boolean).join(" "),
        ...i,
        children: [
          n != null && /* @__PURE__ */ o("div", { className: xr.header, children: n }),
          /* @__PURE__ */ o("div", { className: xr.body, children: d }),
          r != null && /* @__PURE__ */ o("div", { className: xr.footer, children: r })
        ]
      }
    )
  );
});
function al(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const ua = "_badge_1fy6d_1", fa = "_xs_1fy6d_21", _a = "_sm_1fy6d_26", pa = "_md_1fy6d_31", ma = "_lg_1fy6d_36", ha = "_xl_1fy6d_41", ga = "_neutral_1fy6d_47", ba = "_primary_1fy6d_52", ya = "_secondary_1fy6d_61", xa = "_light_1fy6d_66", va = "_base_1fy6d_71", wa = "_dark_1fy6d_76", ka = "_info_1fy6d_81", Na = "_success_1fy6d_86", Oa = "_warning_1fy6d_95", Sa = "_danger_1fy6d_104", $a = "_filled_1fy6d_111", Ea = "_outlined_1fy6d_161", Ta = "_text_1fy6d_213", vr = {
  badge: ua,
  xs: fa,
  sm: _a,
  md: pa,
  lg: ma,
  xl: ha,
  neutral: ga,
  primary: ba,
  secondary: ya,
  light: xa,
  base: va,
  dark: wa,
  info: ka,
  success: Na,
  warning: Oa,
  danger: Sa,
  filled: $a,
  outlined: Ea,
  text: Ta,
  "shade-lighter": "_shade-lighter_1fy6d_486",
  "shade-light": "_shade-light_1fy6d_486",
  "shade-dark": "_shade-dark_1fy6d_494",
  "shade-darker": "_shade-darker_1fy6d_497"
}, AN = st(function({
  severity: t = "primary",
  variant: n = "filled",
  shade: r,
  size: l = "md",
  className: a,
  visible: d = !0,
  children: s,
  ...i
}, c) {
  if (d === !1) return null;
  const f = t, u = al(n, "filled"), h = Ur(r);
  return /* @__PURE__ */ o(
    "span",
    {
      ref: c,
      className: [
        vr.badge,
        vr[l],
        vr[f],
        vr[u],
        h ? vr[h] : null,
        a
      ].filter(Boolean).join(" "),
      ...i,
      children: s
    }
  );
}), Ca = "_icon_vn4jx_5", Aa = "_xs_vn4jx_24", Da = "_sm_vn4jx_28", Ma = "_md_vn4jx_23", Ia = "_lg_vn4jx_36", za = "_xl_vn4jx_40", ao = {
  icon: Ca,
  xs: Aa,
  sm: Da,
  md: Ma,
  lg: Ia,
  xl: za
}, DN = [
  "add",
  "block",
  "calendar_month",
  "cancel",
  "check",
  "check_circle",
  "chevron_left",
  "chevron_right",
  "close",
  "dark_mode",
  "delete",
  "download",
  "edit",
  "error",
  "folder",
  "home",
  "info",
  "keyboard_arrow_down",
  "keyboard_arrow_up",
  "key",
  "light_mode",
  "link",
  "logout",
  "menu",
  "refresh",
  "search",
  "settings",
  "shield",
  "star",
  "upload",
  "visibility",
  "visibility_off",
  "warning"
], Me = st(function({ icon: t, size: n, color: r, className: l, style: a, ...d }, s) {
  const i = typeof n == "string";
  return /* @__PURE__ */ o(
    "span",
    {
      ref: s,
      className: [ao.icon, i ? ao[n] : null, l].filter(Boolean).join(" "),
      style: {
        ...i || n === void 0 ? null : { fontSize: typeof n == "number" ? `${n}px` : n },
        ...r === void 0 ? null : { color: r },
        ...a
      },
      "aria-hidden": "true",
      ...d,
      children: t
    }
  );
}), La = "_stat_sjin9_1", Ra = "_label_sjin9_8", Pa = "_row_sjin9_16", ja = "_value_sjin9_22", Ba = "_delta_sjin9_28", Fa = "_success_sjin9_33", Ha = "_danger_sjin9_37", Ua = "_neutral_sjin9_41", qa = "_hint_sjin9_45", Yn = {
  stat: La,
  label: Ra,
  row: Pa,
  value: ja,
  delta: Ba,
  success: Fa,
  danger: Ha,
  neutral: Ua,
  hint: qa
}, MN = st(function({ label: t, value: n, delta: r, deltaTone: l = "neutral", hint: a, className: d, ...s }, i) {
  return /* @__PURE__ */ M(
    "div",
    {
      ref: i,
      className: [Yn.stat, d].filter(Boolean).join(" "),
      ...s,
      children: [
        /* @__PURE__ */ o("div", { className: Yn.label, children: t }),
        /* @__PURE__ */ M("div", { className: Yn.row, children: [
          /* @__PURE__ */ o("div", { className: Yn.value, children: n }),
          r != null && /* @__PURE__ */ o("div", { className: [Yn.delta, Yn[l]].join(" "), children: r })
        ] }),
        a != null && /* @__PURE__ */ o("div", { className: Yn.hint, children: a })
      ]
    }
  );
}), Ka = "_wrap_ipozk_1", Wa = "_table_ipozk_8", Ga = "_caption_ipozk_14", Va = "_none_ipozk_51", Ya = "_horizontal_ipozk_57", Xa = "_vertical_ipozk_67", Za = "_alternating_ipozk_85", Ja = "_start_ipozk_89", Qa = "_center_ipozk_93", ei = "_end_ipozk_97", ti = "_empty_ipozk_101", Bn = {
  wrap: Ka,
  table: Wa,
  caption: Ga,
  none: Va,
  horizontal: Ya,
  vertical: Xa,
  alternating: Za,
  start: Ja,
  center: Qa,
  end: ei,
  empty: ti
};
function IN({
  columns: e,
  rows: t,
  rowKey: n,
  empty: r,
  caption: l,
  gridLines: a = "default",
  allowAlternatingRows: d = !0,
  className: s,
  visible: i = !0
}) {
  if (i === !1) return null;
  const c = a === "default" || a === "both" ? "" : Bn[a];
  return /* @__PURE__ */ M("div", { className: [Bn.wrap, s].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ M(
      "table",
      {
        className: [
          Bn.table,
          c,
          d ? Bn.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          l != null && /* @__PURE__ */ o("caption", { className: Bn.caption, children: l }),
          /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ o("tr", { children: e.map((f) => /* @__PURE__ */ o(
            "th",
            {
              className: f.align != null ? Bn[f.align] : void 0,
              scope: "col",
              children: f.header
            },
            f.key
          )) }) }),
          /* @__PURE__ */ o("tbody", { children: t.map((f) => /* @__PURE__ */ o("tr", { children: e.map((u) => /* @__PURE__ */ o(
            "td",
            {
              className: u.align != null ? Bn[u.align] : void 0,
              children: u.render != null ? u.render(f) : f[u.key]
            },
            u.key
          )) }, n(f))) })
        ]
      }
    ),
    t.length === 0 && r != null && /* @__PURE__ */ o("div", { className: Bn.empty, children: r })
  ] });
}
const ni = "_emptyState_1swxw_1", ri = "_icon_1swxw_13", si = "_title_1swxw_18", oi = "_description_1swxw_24", li = "_action_1swxw_30", wr = {
  emptyState: ni,
  icon: ri,
  title: si,
  description: oi,
  action: li
};
function zN({
  icon: e,
  title: t,
  description: n,
  action: r,
  className: l,
  visible: a = !0
}) {
  return a === !1 ? null : /* @__PURE__ */ M("div", { className: [wr.emptyState, l].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ o("div", { className: wr.icon, children: e }),
    /* @__PURE__ */ o("div", { className: wr.title, children: t }),
    n != null && /* @__PURE__ */ o("div", { className: wr.description, children: n }),
    r != null && /* @__PURE__ */ o("div", { className: wr.action, children: r })
  ] });
}
const ai = "_field_149oz_1", ii = "_label_149oz_8", ci = "_required_149oz_14", di = "_hint_149oz_19", ui = "_error_149oz_24", kr = {
  field: ai,
  label: ii,
  required: ci,
  hint: di,
  error: ui
};
function Nr({
  label: e,
  htmlFor: t,
  required: n,
  hint: r,
  supporting: l,
  error: a,
  children: d,
  className: s,
  visible: i = !0
}) {
  const c = r ?? l, f = ot(), u = ot(), h = ot();
  if (i === !1) return null;
  const m = a != null ? u : c != null ? h : null, b = typeof d == "function" ? d({ inputId: f, hintId: h, errorId: u }) : d, g = qt(b) && typeof b.props.id == "string" ? b.props.id : void 0, y = g ?? t ?? f, p = qt(b) && (m != null || g == null && typeof b.type == "string"), _ = g != null || t != null || p, x = p && qt(b) ? Vs(b, {
    id: y,
    "aria-describedby": m != null ? [
      b.props["aria-describedby"],
      m
    ].filter((N) => typeof N == "string").join(" ") || void 0 : b.props["aria-describedby"],
    "aria-invalid": a != null ? !0 : b.props["aria-invalid"]
  }) : b;
  return /* @__PURE__ */ M("div", { className: [kr.field, s].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ M(
      "label",
      {
        className: kr.label,
        htmlFor: _ ? y : void 0,
        children: [
          e,
          n === !0 && /* @__PURE__ */ o("span", { className: kr.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    x,
    a != null ? /* @__PURE__ */ o("div", { id: u, className: kr.error, "aria-live": "polite", children: a }) : c != null ? /* @__PURE__ */ o("div", { id: h, className: kr.hint, children: c }) : null
  ] });
}
const fi = "_formfield_6e25e_1", _i = "_content_6e25e_8", pi = "_floating_6e25e_43", mi = "_label_6e25e_111", hi = "_start_6e25e_132", gi = "_required_6e25e_169", bi = "_end_6e25e_175", yi = "_filled_6e25e_192", xi = "_flat_6e25e_199", vi = "_helper_6e25e_206", wi = "_invalid_6e25e_211", kn = {
  formfield: fi,
  content: _i,
  floating: pi,
  label: mi,
  start: hi,
  required: gi,
  end: bi,
  filled: yi,
  flat: xi,
  helper: vi,
  invalid: wi
};
function LN({
  text: e,
  start: t,
  end: n,
  helper: r,
  component: l,
  allowFloatingLabel: a = !0,
  variant: d = "outlined",
  invalid: s = !1,
  required: i = !1,
  children: c,
  className: f,
  visible: u = !0
}) {
  const h = ot(), m = ot();
  if (u === !1) return null;
  const b = l ?? h, g = typeof c == "function" ? c({
    inputId: b
  }) : c, y = qt(g) ? g.type : null, p = typeof y == "string", _ = qt(g) && typeof y != "symbol", x = qt(g) ? g.props : null, N = typeof x?.id == "string" ? x.id : void 0, v = p && qt(g) ? g.type.toLowerCase() : null, $ = v != null && (v === "input" ? typeof x?.type != "string" || x.type.toLowerCase() !== "hidden" : v === "button" || v === "meter" || v === "output" || v === "progress" || v === "select" || v === "textarea"), O = _ && (r != null || s || N == null && $), T = N != null || l != null || O, A = v === "input" && typeof x?.type == "string" ? x.type.toLowerCase() : null, C = v === "textarea" || v === "input" && (A == null || [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number"
  ].includes(A)), D = O && qt(g) ? Vs(
    g,
    {
      id: N ?? b,
      ...a && C && x?.placeholder == null ? { placeholder: " " } : {},
      ...r != null ? {
        "aria-describedby": [
          x?.["aria-describedby"],
          m
        ].filter((k) => typeof k == "string").join(" ")
      } : {},
      ...s ? {
        "aria-invalid": !0
      } : {}
    }
  ) : g, I = e != null ? /* @__PURE__ */ M(
    "label",
    {
      className: kn.label,
      htmlFor: T ? N ?? b : void 0,
      children: [
        e,
        i === !0 && /* @__PURE__ */ o("span", { className: kn.required, "aria-hidden": "true", children: "*" })
      ]
    }
  ) : null;
  return /* @__PURE__ */ M(
    "div",
    {
      className: [
        kn.formfield,
        kn[d],
        a ? kn.floating : null,
        s ? kn.invalid : null,
        f
      ].filter(Boolean).join(" "),
      children: [
        a ? null : I,
        /* @__PURE__ */ M("div", { className: kn.content, children: [
          t != null && /* @__PURE__ */ o("div", { className: kn.start, children: t }),
          D,
          a ? I : null,
          n != null && /* @__PURE__ */ o("div", { className: kn.end, children: n })
        ] }),
        r != null && /* @__PURE__ */ o("div", { id: m, className: kn.helper, children: r })
      ]
    }
  );
}
const ki = "_fieldset_8x01p_1", Ni = "_legend_8x01p_11", Oi = "_legendText_8x01p_20", Si = "_toggle_8x01p_24", $i = "_content_8x01p_45", Ei = "_summary_8x01p_49", Xn = {
  fieldset: ki,
  legend: Ni,
  legendText: Oi,
  toggle: Si,
  content: $i,
  summary: Ei
};
function RN({
  text: e,
  headerTemplate: t,
  icon: n,
  iconColor: r,
  allowCollapse: l = !1,
  collapsed: a,
  defaultCollapsed: d = !1,
  summary: s,
  expandTitle: i,
  collapseTitle: c,
  expandAriaLabel: f,
  collapseAriaLabel: u,
  onExpand: h,
  onCollapse: m,
  children: b,
  className: g,
  visible: y = !0
}) {
  const p = ot(), [_, x] = q(d);
  if (y === !1) return null;
  const N = a ?? _, v = l ? `${p}-content` : void 0, $ = () => {
    const I = !N;
    a === void 0 && x(I), I ? m?.() : h?.();
  }, O = l || e != null || n != null || t != null, T = l ? N : !1, A = l && N && s != null, C = T ? i ?? "Expand" : c ?? "Collapse", D = T ? f ?? "Expand" : u ?? "Collapse";
  return /* @__PURE__ */ M(
    "fieldset",
    {
      className: [Xn.fieldset, g].filter(Boolean).join(" "),
      children: [
        O ? /* @__PURE__ */ o("legend", { className: Xn.legend, children: l ? /* @__PURE__ */ M(pt, { children: [
          /* @__PURE__ */ M(
            "button",
            {
              type: "button",
              className: Xn.toggle,
              title: C,
              "aria-label": e == null ? D : void 0,
              "aria-expanded": !T,
              "aria-controls": v,
              onClick: $,
              children: [
                /* @__PURE__ */ o(
                  Me,
                  {
                    icon: T ? "add" : "remove",
                    size: 16,
                    "aria-hidden": "true"
                  }
                ),
                n != null && /* @__PURE__ */ o(Me, { icon: n, color: r, "aria-hidden": "true" }),
                e != null && /* @__PURE__ */ o("span", { className: Xn.legendText, children: e })
              ]
            }
          ),
          t
        ] }) : /* @__PURE__ */ M(pt, { children: [
          n != null && /* @__PURE__ */ o(Me, { icon: n, color: r, "aria-hidden": "true" }),
          e != null && /* @__PURE__ */ o("span", { className: Xn.legendText, children: e }),
          t
        ] }) }) : null,
        /* @__PURE__ */ o(
          "div",
          {
            className: Xn.content,
            id: v,
            hidden: T,
            children: b
          }
        ),
        A ? /* @__PURE__ */ o("div", { className: Xn.summary, children: s }) : null
      ]
    }
  );
}
const Ti = "_form_abp5n_1", Ci = {
  form: Ti
}, il = or(null);
function Ai() {
  const e = Pn(il);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function PN({
  model: e,
  onSubmit: t,
  onInvalidSubmit: n,
  action: r,
  method: l,
  children: a,
  className: d
}) {
  const [s, i] = q({}), [c, f] = q(0), u = oe(s);
  u.current = s;
  const h = B((x) => {
    i(
      (N) => N[x.name] === x ? N : { ...N, [x.name]: x }
    );
  }, []), m = B((x) => {
    i((N) => {
      if (!(x in N)) return N;
      const v = { ...N };
      return delete v[x], v;
    });
  }, []), b = B(() => {
    const x = {};
    for (const N of Object.values(u.current)) {
      const v = N.validate();
      v.length > 0 && (x[N.name] = v);
    }
    return x;
  }, []), g = B(() => {
    const x = b();
    f((N) => N + 1), Object.keys(x).length === 0 ? t?.(e) : n?.(x);
  }, [b, e, t, n]), y = (x) => {
    r != null && l != null || (x.preventDefault(), g());
  }, p = Se(
    () => ({ registerField: h, unregisterField: m, submit: g, submitCount: c }),
    [h, m, g, c]
  ), _ = [Ci.form, d].filter(Boolean).join(" ");
  return /* @__PURE__ */ o(il.Provider, { value: p, children: /* @__PURE__ */ o(
    "form",
    {
      className: _,
      onSubmit: y,
      action: r,
      method: l,
      noValidate: !0,
      children: a
    }
  ) });
}
const lr = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", jN = (e = "Required") => (t) => lr(t) ? e : null, BN = (e = "Invalid email") => (t) => lr(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, FN = (e, t = "Invalid format") => (n) => lr(n) || e.test(String(n)) ? null : t, HN = (e, t = `Minimum ${e} characters`) => (n) => lr(n) || String(n).length >= e ? null : t, UN = (e, t = `Maximum ${e} characters`) => (n) => lr(n) || String(n).length <= e ? null : t, qN = (e, t, n = `Between ${e} and ${t}`) => (r) => {
  if (lr(r)) return null;
  const l = Number(r);
  return !Number.isNaN(l) && l >= e && l <= t ? null : n;
}, KN = (e, t = "Values do not match") => (n, r) => {
  if (lr(n)) return null;
  const l = typeof e == "function" ? e(r) : e;
  return n === l ? null : t;
}, WN = (e = "Required") => (t) => t === !0 ? null : e, GN = (e) => (t, n) => e(t, n);
function Di(e, t, n) {
  return e.map((r) => r(t, n)).filter((r) => r != null);
}
function VN(e, t) {
  const { registerField: n, unregisterField: r, submitCount: l } = Ai(), [a, d] = q(t?.initialValue), [s, i] = q(!1), [c, f] = q(!1), u = oe(() => []);
  u.current = () => Di(t?.validate ?? [], a), ve(() => (n({ name: e, validate: () => u.current() }), () => r(e)), [e, n, r]), ve(() => {
    l > 0 && (i(!0), f(!1));
  }, [l]);
  const h = s && !c ? u.current() : [];
  return { value: a, setValue: (b) => {
    d(b), f(!0);
  }, errors: h };
}
const Mi = "_select_1xe98_1", Ii = "_invalid_1xe98_33", zi = "_xs_1xe98_40", Li = "_sm_1xe98_48", Ri = "_md_1xe98_56", Pi = "_lg_1xe98_62", ji = "_xl_1xe98_68", ks = {
  select: Mi,
  invalid: Ii,
  xs: zi,
  sm: Li,
  md: Ri,
  lg: Pi,
  xl: ji
}, sr = st(
  function({ size: t = "md", invalid: n = !1, options: r, children: l, className: a, ...d }, s) {
    return /* @__PURE__ */ o(
      "select",
      {
        ref: s,
        "data-size": t,
        className: [
          ks.select,
          ks[t],
          n ? ks.invalid : null,
          a
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...d,
        children: r != null ? r.map((i) => /* @__PURE__ */ o(
          "option",
          {
            value: i.value,
            disabled: i.disabled,
            children: i.label
          },
          i.value
        )) : l
      }
    );
  }
), cl = [
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
], Or = {
  string: "Contains",
  number: "Equals",
  boolean: "Equals",
  date: "Equals",
  enum: "Equals"
}, Bi = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
];
function Fi(e) {
  return Bi.includes(e);
}
function ds(e, t) {
  return t.split(".").reduce((n, r) => {
    if (n != null)
      return n[r];
  }, e);
}
function io(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function jr(e, t) {
  const n = io(e), r = io(t);
  if (typeof n == "number" && typeof r == "number") return n - r;
  const l = String(n ?? ""), a = String(r ?? "");
  return l < a ? -1 : l > a ? 1 : 0;
}
function hs(e) {
  if (e.secondOperator == null) return !1;
  if (Fi(e.secondOperator)) return !0;
  const t = e.secondValue;
  return t != null && t !== "";
}
function co(e, t, n) {
  const r = ds(t, e.property), l = uo(
    r,
    e.value,
    e.operator,
    n
  );
  if (!hs(e)) return l;
  const a = uo(
    r,
    e.secondValue,
    e.secondOperator,
    n
  );
  return (e.logicalOperator ?? "And") === "And" ? l && a : l || a;
}
function uo(e, t, n, r) {
  const l = r === "CaseInsensitive", a = (i) => l && typeof i == "string" ? i.toLowerCase() : i, d = a(e), s = a(t);
  switch (n) {
    case "Equals":
      return d === s || Array.isArray(d) && d.some((i) => a(i) === s);
    case "NotEquals":
      return d !== s && !(Array.isArray(d) && d.some((i) => a(i) === s));
    case "LessThan":
      return jr(d, s) < 0;
    case "LessThanOrEquals":
      return jr(d, s) <= 0;
    case "GreaterThan":
      return jr(d, s) > 0;
    case "GreaterThanOrEquals":
      return jr(d, s) >= 0;
    case "Contains":
      return typeof d == "string" && typeof s == "string" && d.includes(s);
    case "StartsWith":
      return typeof d == "string" && typeof s == "string" && d.startsWith(s);
    case "EndsWith":
      return typeof d == "string" && typeof s == "string" && d.endsWith(s);
    case "DoesNotContain":
      return typeof d == "string" && typeof s == "string" && !d.includes(s);
    case "In":
      return Array.isArray(s) && s.some((i) => a(i) === d);
    case "NotIn":
      return Array.isArray(s) && !s.some((i) => a(i) === d);
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
function Xs(e) {
  return "filters" in e;
}
function dl(e, t, n = {}) {
  const r = n.logicalOperator ?? "And", l = n.caseSensitivity ?? "CaseInsensitive";
  if (Xs(t)) {
    if (t.filters.length === 0) return !0;
    const a = t.operator ?? r;
    return t.filters[a === "Or" ? "some" : "every"](
      (d) => dl(e, d, { logicalOperator: a, caseSensitivity: l })
    );
  }
  return t.operator === "Custom", co(t, e, l);
}
function ul(e, t, n = {}) {
  return e.filter((r) => dl(r, t, n));
}
function Hi(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function rn(e) {
  return typeof e == "string" ? `"${Hi(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(rn).join(", ")}]` : `"${String(e)}"`;
}
function Ui(e) {
  const t = (l, a) => {
    switch (l) {
      case "Equals":
        return `${e.property}.Equals(${rn(a)})`;
      case "NotEquals":
        return `!${e.property}.Equals(${rn(a)})`;
      case "LessThan":
        return `${e.property}.LessThan(${rn(a)})`;
      case "LessThanOrEquals":
        return `${e.property}.LessThanOrEquals(${rn(a)})`;
      case "GreaterThan":
        return `${e.property}.GreaterThan(${rn(a)})`;
      case "GreaterThanOrEquals":
        return `${e.property}.GreaterThanOrEquals(${rn(a)})`;
      case "Contains":
        return `${e.property}.Contains(${rn(a)})`;
      case "StartsWith":
        return `${e.property}.StartsWith(${rn(a)})`;
      case "EndsWith":
        return `${e.property}.EndsWith(${rn(a)})`;
      case "DoesNotContain":
        return `!${e.property}.Contains(${rn(a)})`;
      case "In":
        return `${e.property}.In(${rn(a)})`;
      case "NotIn":
        return `!${e.property}.In(${rn(a)})`;
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
  if (!hs(e))
    return t(e.operator, e.value);
  const n = e.logicalOperator ?? "And", r = e.secondOperator;
  return `(${t(e.operator, e.value)} ${n} ${t(
    r,
    e.secondValue
  )})`;
}
function qi(e) {
  return Xs(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(qi).filter(Boolean).join(` ${e.operator} `)})` : Ui(e);
}
function Ki(e) {
  return e.replace(/'/g, "''");
}
const Wi = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function Gi(e, t) {
  const n = e.property, r = t === "CaseInsensitive", l = (c) => r ? `tolower(${c})` : c, a = (c) => typeof c == "string" ? `'${Ki(c)}'` : c instanceof Date ? `'${c.toISOString()}'` : String(c ?? ""), d = (c, f) => {
    const u = typeof f == "string", h = u && r ? l(n) : n;
    switch (c) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${h} ${Wi[c]} ${u && r ? l(a(f)) : a(f)}`;
      case "Contains":
        return `contains(${l(n)}, ${l(a(f))})`;
      case "StartsWith":
        return `startswith(${l(n)}, ${l(a(f))})`;
      case "EndsWith":
        return `endswith(${l(n)}, ${l(a(f))})`;
      case "DoesNotContain":
        return `not(contains(${l(n)}, ${l(a(f))}))`;
      case "In":
        return Array.isArray(f) ? `${h} in (${f.map((m) => a(m)).join(", ")})` : `${h} in (${a(f)})`;
      case "NotIn":
        return Array.isArray(f) ? `not(${h} in (${f.map((m) => a(m)).join(", ")}))` : `not(${h} in (${a(f)}))`;
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
  if (!hs(e))
    return d(e.operator, e.value);
  const s = (e.logicalOperator ?? "And") === "And" ? "and" : "or", i = e.secondOperator;
  return `(${d(e.operator, e.value)} ${s} ${d(
    i,
    e.secondValue
  )})`;
}
function Vi(e, t = {}) {
  const n = t.caseSensitivity ?? "CaseInsensitive";
  if (Xs(e)) {
    if (e.filters.length === 0) return "";
    const r = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((l) => Vi(l, { caseSensitivity: n })).filter(Boolean).join(` ${r} `)})`;
  }
  return Gi(e, n);
}
function Yi(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((n, r) => {
    for (const l of t) {
      const a = l.sortOrder === "Ascending" ? 1 : -1, d = jr(
        ds(n, l.property),
        ds(r, l.property)
      );
      if (d !== 0) return d * a;
    }
    return 0;
  });
}
const Xi = "_filter_1dvqt_1", Zi = "_rows_1dvqt_9", Ji = "_row_1dvqt_9", Qi = "_join_1dvqt_21", ec = "_property_1dvqt_30", tc = "_operator_1dvqt_34", nc = "_value_1dvqt_38", rc = "_remove_1dvqt_42", sc = "_bar_1dvqt_58", oc = "_add_1dvqt_64", lc = "_custom_1dvqt_78", ac = "_summary_1dvqt_82", ic = "_second_1dvqt_87", cc = "_secondAdd_1dvqt_91", dc = "_addSecond_1dvqt_95", uc = "_joinSelect_1dvqt_109", ht = {
  filter: Xi,
  rows: Zi,
  row: Ji,
  join: Qi,
  property: ec,
  operator: tc,
  value: nc,
  remove: rc,
  bar: sc,
  add: oc,
  custom: lc,
  summary: ac,
  second: ic,
  secondAdd: cc,
  addSecond: dc,
  joinSelect: uc
}, Sr = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
], fo = {
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
function _o({
  property: e,
  value: t,
  onChange: n
}) {
  if (e.editor != null)
    return /* @__PURE__ */ o(pt, { children: e.editor({ value: t, onChange: n }) });
  const r = e.type ?? "string";
  if (r === "enum" && e.values != null)
    return /* @__PURE__ */ o(
      sr,
      {
        "aria-label": e.title ?? e.name,
        className: ht.value,
        options: e.values,
        value: String(t ?? ""),
        onChange: (a) => n(a.target.value)
      }
    );
  if (r === "boolean")
    return /* @__PURE__ */ o(
      sr,
      {
        "aria-label": e.title ?? e.name,
        className: ht.value,
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
  const l = r === "number" ? { type: "number" } : r === "date" ? { type: "date" } : { type: "text" };
  return /* @__PURE__ */ o(
    "input",
    {
      "aria-label": e.title ?? e.name,
      className: ht.value,
      ...l,
      value: t == null ? "" : String(t),
      onChange: (a) => n(
        r === "number" && a.target.value !== "" ? Number(a.target.value) : a.target.value
      )
    }
  );
}
function YN({
  properties: e,
  logicalOperator: t = "And",
  filterCaseSensitivity: n = "CaseInsensitive",
  initialRows: r,
  uniqueFilters: l = !1,
  className: a,
  viewChanged: d,
  items: s,
  children: i
}) {
  const [c, f] = q(
    () => r != null && r.length > 0 ? r.map((p, _) => ({ id: _, ...p })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: Or[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), u = (p, _) => {
    f(
      (x) => x.map((N) => N.id === p ? { ...N, ..._ } : N)
    );
  }, h = () => {
    const p = c[c.length - 1], _ = Math.max(0, ...c.map((N) => N.id)) + 1, x = e[0];
    f((N) => [
      ...N,
      {
        id: _,
        property: p?.property ?? x?.name ?? "",
        operator: Or[e.find(
          (v) => v.name === (p?.property ?? x?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, m = (p) => {
    f(
      (_) => _.length > 1 ? _.filter((x) => x.id !== p) : _
    );
  }, b = Se(() => {
    const p = [];
    for (const _ of c) {
      if (_.property === "" || (_.value == null || _.value === "") && !Sr.includes(_.operator)) continue;
      const N = {
        property: _.property,
        operator: _.operator,
        value: _.value
      }, { secondOperator: v } = _;
      v != null && hs(_) && (N.secondOperator = v, N.secondValue = _.secondValue, N.logicalOperator = _.logicalOperator ?? "And"), p.push(N);
    }
    return p;
  }, [c]), g = Se(() => s == null || b.length === 0 ? s : ul(s, {
    operator: t,
    filters: b
  }, {
    caseSensitivity: n
  }), [s, b, t, n]);
  ve(() => {
    d != null && s != null && d(g ?? []);
  }, [g]);
  const y = (p) => e.find((_) => _.name === p) ?? { name: p, type: "string" };
  return /* @__PURE__ */ M("div", { className: [ht.filter, a].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ o("div", { className: ht.rows, role: "group", "aria-label": "Filter conditions", children: c.map((p, _) => {
      const x = y(p.property), N = l ? [Or[x.type ?? "string"]] : cl, v = !Sr.includes(p.operator), $ = p.secondOperator != null;
      return /* @__PURE__ */ M(Ys, { children: [
        /* @__PURE__ */ M("div", { className: ht.row, children: [
          _ > 0 ? /* @__PURE__ */ o("span", { className: ht.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ o(
            sr,
            {
              "aria-label": `Condition ${_ + 1} property`,
              className: ht.property,
              value: p.property,
              onChange: (O) => {
                const T = e.find(
                  (A) => A.name === O.target.value
                );
                u(p.id, {
                  property: O.target.value,
                  operator: Or[T?.type ?? "string"],
                  value: void 0,
                  secondOperator: void 0,
                  secondValue: void 0,
                  logicalOperator: void 0
                });
              },
              options: e.map((O) => ({
                value: O.name,
                label: O.title ?? O.name
              }))
            }
          ),
          /* @__PURE__ */ o(
            sr,
            {
              "aria-label": `Condition ${_ + 1} operator`,
              className: ht.operator,
              value: p.operator,
              onChange: (O) => {
                const T = O.target.value;
                u(
                  p.id,
                  Sr.includes(T) ? {
                    operator: T,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: T }
                );
              },
              options: N.map((O) => ({
                value: O,
                label: fo[O]
              }))
            }
          ),
          v ? /* @__PURE__ */ o(
            _o,
            {
              property: x,
              value: p.value,
              onChange: (O) => u(p.id, { value: O })
            }
          ) : null,
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: ht.remove,
              "aria-label": `Remove condition ${_ + 1}`,
              onClick: () => m(p.id),
              children: /* @__PURE__ */ o(Me, { icon: "close", size: "sm" })
            }
          )
        ] }),
        v ? $ ? /* @__PURE__ */ M(
          "div",
          {
            className: [ht.row, ht.second].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ o(
                sr,
                {
                  "aria-label": `Condition ${_ + 1} second-operator logic`,
                  className: ht.joinSelect,
                  value: p.logicalOperator ?? "And",
                  onChange: (O) => u(p.id, {
                    logicalOperator: O.target.value
                  }),
                  options: [
                    { value: "And", label: "And" },
                    { value: "Or", label: "Or" }
                  ]
                }
              ),
              /* @__PURE__ */ o(
                sr,
                {
                  "aria-label": `Condition ${_ + 1} second operator`,
                  className: ht.operator,
                  value: p.secondOperator,
                  onChange: (O) => {
                    const T = O.target.value;
                    u(
                      p.id,
                      Sr.includes(T) ? { secondOperator: T, secondValue: void 0 } : { secondOperator: T }
                    );
                  },
                  options: N.map((O) => ({
                    value: O,
                    label: fo[O]
                  }))
                }
              ),
              p.secondOperator == null || !Sr.includes(p.secondOperator) ? /* @__PURE__ */ o(
                _o,
                {
                  property: x,
                  value: p.secondValue,
                  onChange: (O) => u(p.id, { secondValue: O })
                }
              ) : null,
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: ht.remove,
                  "aria-label": `Remove second condition ${_ + 1}`,
                  onClick: () => u(p.id, {
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  }),
                  children: /* @__PURE__ */ o(Me, { icon: "close", size: "sm" })
                }
              )
            ]
          }
        ) : /* @__PURE__ */ o("div", { className: ht.secondAdd, children: /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: ht.addSecond,
            onClick: () => u(p.id, {
              secondOperator: Or[x.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, p.id);
    }) }),
    /* @__PURE__ */ M("div", { className: ht.bar, children: [
      /* @__PURE__ */ o("button", { type: "button", className: ht.add, onClick: h, children: "Add filter" }),
      i != null ? /* @__PURE__ */ o("div", { className: ht.custom, children: i }) : null,
      s != null ? /* @__PURE__ */ M("span", { className: ht.summary, "aria-live": "polite", children: [
        g?.length ?? 0,
        " of ",
        s.length
      ] }) : null
    ] })
  ] });
}
const fc = "_pager_1du31_1", _c = "_alignLeft_1du31_10", pc = "_alignCenter_1du31_14", mc = "_alignRight_1du31_18", hc = "_alignJustify_1du31_22", gc = "_summary_1du31_26", bc = "_controls_1du31_31", yc = "_button_1du31_37", xc = "_active_1du31_73", vc = "_ellipsis_1du31_85", wc = "_size_1du31_91", Ft = {
  pager: fc,
  alignLeft: _c,
  alignCenter: pc,
  alignRight: mc,
  alignJustify: hc,
  summary: gc,
  controls: bc,
  button: yc,
  active: xc,
  ellipsis: vc,
  size: wc
};
function kc(e, t, n, r) {
  return e.replace("{0}", String(t)).replace("{1}", String(n)).replace("{2}", String(r));
}
function po(e, t) {
  return e.replace("{0}", String(t));
}
function Nc(e, t, n) {
  if (t <= n)
    return Array.from({ length: t }, (s, i) => i + 1);
  const r = Math.floor(n / 2);
  let l = Math.max(1, e - r);
  const a = Math.min(t, l + n - 1);
  l = Math.max(1, a - n + 1);
  const d = [];
  for (let s = l; s <= a; s++) d.push(s);
  return l > 2 && d.unshift("ellipsis"), l > 1 && d.unshift(1), a < t - 1 && d.push("ellipsis"), a < t && d.push(t), d;
}
function Oc({
  count: e,
  pageSize: t,
  page: n,
  defaultPage: r = 1,
  pageSizeOptions: l,
  pageNumbersCount: a = 5,
  alwaysVisible: d = !1,
  horizontalAlign: s = "left",
  showPagingSummary: i,
  showPageSizeSelector: c = !0,
  pagingSummaryFormat: f = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: u,
  pageSizeText: h = "Items per page",
  firstPageTitle: m = "First page",
  prevPageTitle: b = "Previous page",
  nextPageTitle: g = "Next page",
  lastPageTitle: y = "Last page",
  pageTitleFormat: p = "Page {0}",
  pageAriaLabelFormat: _ = "Page {0}",
  onPageChange: x,
  onPageSizeChange: N,
  ariaLabel: v = "Pagination",
  className: $,
  visible: O = !0
}) {
  const T = n ?? r, [A, C] = q(T), D = n !== void 0, I = D ? T : A, k = Math.max(1, Math.ceil(e / t)), S = Math.min(Math.max(1, I), k), E = i ?? !0, P = d || k > 1, L = Nc(S, k, a), j = B(
    (te) => {
      const we = Math.min(Math.max(1, te), k);
      D || C(we);
      const le = (we - 1) * t;
      x?.({
        page: we,
        skip: le,
        top: t,
        pageCount: k,
        pageSize: t
      });
    },
    [D, x, k, t]
  ), F = s === "center" ? Ft.alignCenter : s === "right" ? Ft.alignRight : s === "justify" ? Ft.alignJustify : Ft.alignLeft, X = {
    count: e,
    pageNumber: S,
    pageSize: t,
    pageCount: k
  }, ie = (te) => {
    const we = Array.from(
      te.currentTarget.querySelectorAll(
        "button[data-pager-page]"
      )
    ), le = we.indexOf(document.activeElement);
    le !== -1 && (te.key === "ArrowRight" || te.key === "ArrowDown" ? (te.preventDefault(), (we[le + 1] ?? we[0])?.focus()) : te.key === "ArrowLeft" || te.key === "ArrowUp" ? (te.preventDefault(), (we[le - 1] ?? we[we.length - 1])?.focus()) : te.key === "Home" ? (te.preventDefault(), we[0]?.focus()) : te.key === "End" && (te.preventDefault(), we[we.length - 1]?.focus()));
  };
  return O === !1 || !P ? null : /* @__PURE__ */ M(
    "nav",
    {
      className: [Ft.pager, F, $].filter(Boolean).join(" "),
      "aria-label": v,
      children: [
        E && /* @__PURE__ */ o("span", { className: Ft.summary, "aria-live": "polite", children: u ? u(X) : kc(f, S, k, e) }),
        /* @__PURE__ */ M(
          "div",
          {
            className: Ft.controls,
            role: "group",
            "aria-label": v,
            onKeyDown: ie,
            children: [
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Ft.button,
                  disabled: S <= 1,
                  onClick: () => j(1),
                  "aria-label": m,
                  title: m,
                  children: "«"
                }
              ),
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Ft.button,
                  disabled: S <= 1,
                  onClick: () => j(S - 1),
                  "aria-label": b,
                  title: b,
                  children: "‹"
                }
              ),
              L.map(
                (te, we) => te === "ellipsis" ? /* @__PURE__ */ o("span", { className: Ft.ellipsis, "aria-hidden": "true", children: "…" }, `e${we}`) : /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    "data-pager-page": te,
                    className: [Ft.button, te === S ? Ft.active : ""].filter(Boolean).join(" "),
                    "aria-current": te === S ? "page" : void 0,
                    "aria-label": po(_, te),
                    title: po(p, te),
                    onClick: () => j(te),
                    children: te
                  },
                  te
                )
              ),
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Ft.button,
                  disabled: S >= k,
                  onClick: () => j(S + 1),
                  "aria-label": g,
                  title: g,
                  children: "›"
                }
              ),
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Ft.button,
                  disabled: S >= k,
                  onClick: () => j(k),
                  "aria-label": y,
                  title: y,
                  children: "»"
                }
              )
            ]
          }
        ),
        c && l && l.length > 0 && /* @__PURE__ */ M("label", { className: Ft.size, children: [
          /* @__PURE__ */ o("span", { children: h }),
          /* @__PURE__ */ o(
            "select",
            {
              value: t,
              onChange: (te) => N?.(Number(te.target.value)),
              "aria-label": h,
              children: l.map((te) => /* @__PURE__ */ o("option", { value: te, children: te }, te))
            }
          )
        ] })
      ]
    }
  );
}
function Ls(e) {
  const { pageNumber: t, onPageChange: n, summaryTemplate: r, showSummary: l, ...a } = e;
  return /* @__PURE__ */ o(
    Oc,
    {
      page: t,
      showPagingSummary: l,
      pagingSummaryFormat: "Page {0} of {1}",
      pageAriaLabelFormat: "{0}",
      pageTitleFormat: "{0}",
      alwaysVisible: !0,
      pagingSummaryTemplate: r ? (s) => r({
        count: s.count,
        pageNumber: s.pageNumber,
        pageSize: s.pageSize
      }) : void 0,
      onPageChange: n ? (s) => n(s.page) : void 0,
      ...a
    }
  );
}
const fl = "";
function Sc(e, t, n, r, l) {
  if (t.length === 0) return e.map((s) => ({ type: "row", row: s }));
  const a = (s) => n.find((i) => i.property === s), d = (s, i, c) => {
    const f = t[i];
    if (f === void 0)
      return s.map((g) => ({ type: "row", row: g }));
    const u = a(f), h = /* @__PURE__ */ new Map(), m = [];
    s.forEach((g) => {
      const y = String(l(g, f) ?? ""), p = h.get(y);
      p ? p.push(g) : (h.set(y, [g]), m.push(y));
    });
    const b = [];
    return m.forEach((g) => {
      const y = h.get(g), p = [...c, g].join(fl), _ = y[0], x = _ !== void 0 ? l(_, f) : void 0;
      b.push({
        type: "group",
        group: {
          key: p,
          display: us(x, u?.format),
          property: f,
          title: u?.title ?? f,
          count: y.length,
          level: i
        }
      }), r.has(p) && b.push(...d(y, i + 1, [...c, g]));
    }), b;
  };
  return d(e, 0, []);
}
function mo(e, t, n) {
  const r = /* @__PURE__ */ new Set(), l = (a, d, s) => {
    const i = t[d];
    if (i === void 0 || a.length === 0) return;
    const c = /* @__PURE__ */ new Map(), f = [];
    a.forEach((u) => {
      const h = String(n(u, i) ?? ""), m = c.get(h);
      m ? m.push(u) : (c.set(h, [u]), f.push(h));
    }), f.forEach((u) => {
      const h = [...s, u].join(fl);
      r.add(h), l(c.get(u), d + 1, [...s, u]);
    });
  };
  return l(e, 0, []), r;
}
function Yr(e, t) {
  return e.property ?? `col-${t}`;
}
function $c(e, t) {
  const n = {};
  let r = 0;
  return e.forEach(({ key: l, column: a }) => {
    if (!a.frozen) return;
    n[l] = r === 0 ? "0px" : `${r}px`;
    const d = t[l] ?? a.width ?? "8rem";
    r += parseFloat(d);
  }), n;
}
function Ec(e, t) {
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
function nr(e, t) {
  if (t != null)
    return ds(e, t);
}
function us(e, t) {
  if (t == null || t === "") return String(e ?? "");
  const n = /^N(\d+)$/i.exec(t);
  if (n && typeof e == "number") return e.toFixed(Number(n[1]));
  if (t === "d" || t === "D") {
    const r = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return r != null && !Number.isNaN(r.getTime()) ? r.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const ho = [
  "Ascending",
  "Descending",
  null
];
function Tc(e, t, n = {}) {
  const r = e.find((a) => a.property === t), l = ho[(r ? ho.indexOf(r.sortOrder) : -1) + 1] ?? null;
  return l == null ? e.filter((a) => a.property !== t) : n.multi ? [
    ...e.filter((a) => a.property !== t),
    { property: t, sortOrder: l }
  ] : [{ property: t, sortOrder: l }];
}
function Cc(e, t) {
  return Yi(e, t);
}
function Ac(e, t, n) {
  const r = Math.max(1, Math.ceil(e.length / n)), l = Math.min(Math.max(1, t), r), a = (l - 1) * n;
  return {
    items: e.slice(a, a + n),
    pageCount: r,
    pageNumber: l,
    total: e.length
  };
}
function Dc(e, t, n = {}) {
  const r = [...t.filters.entries()].filter(([, s]) => s.value !== "" && s.value !== void 0).map(
    ([s, i]) => ({
      property: s,
      operator: i.operator ?? "Contains",
      value: Ec(
        i.value,
        n.types?.[s] ?? "string"
      )
    })
  ), l = r.length > 0 ? ul(
    e,
    { operator: n.logicalOperator ?? "And", filters: r },
    {
      logicalOperator: n.logicalOperator ?? "And",
      caseSensitivity: n.caseSensitivity ?? "CaseInsensitive"
    }
  ) : e, a = Cc(l, t.sorts);
  return {
    ...Ac(a, t.pageNumber, t.pageSize),
    filtered: a,
    sorts: t.sorts,
    filters: t.filters,
    pageSize: t.pageSize
  };
}
function go(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
function Mc(e, t, n) {
  if (t.type === "custom") return t.compute?.(e);
  if (t.type === "count") return e.length;
  const r = [];
  switch (e.forEach((l) => {
    const a = n(l, t.property);
    if (a == null || a === "") return;
    const d = Number(a);
    Number.isFinite(d) && r.push(d);
  }), t.type) {
    case "sum":
      return r.length > 0 ? r.reduce((l, a) => l + a, 0) : void 0;
    case "avg":
      return r.length > 0 ? r.reduce((l, a) => l + a, 0) / r.length : void 0;
    case "min":
      return r.length > 0 ? Math.min(...r) : void 0;
    case "max":
      return r.length > 0 ? Math.max(...r) : void 0;
    default:
      return;
  }
}
function Ic(e, t, n = nr) {
  const r = (a) => /["\r\n,]/.test(a) ? `"${a.replace(/"/g, '""')}"` : a, l = [
    t.map((a) => r(a.title ?? a.property ?? "")).join(",")
  ];
  return e.forEach((a) => {
    l.push(
      t.map((d) => r(us(n(a, d.property), d.format))).join(",")
    );
  }), `${l.join(`\r
`)}\r
`;
}
const zc = "_grid_13rur_1", Lc = "_toolbar_13rur_8", Rc = "_picker_13rur_13", Pc = "_pickerButton_13rur_17", jc = "_pickerPanel_13rur_31", Bc = "_pickerItem_13rur_46", Fc = "_groupPanel_13rur_55", Hc = "_groupPanelActive_13rur_66", Uc = "_groupPanelText_13rur_70", qc = "_groupChip_13rur_74", Kc = "_groupRemove_13rur_85", Wc = "_groupRow_13rur_94", Gc = "_groupCell_13rur_98", Vc = "_groupToggle_13rur_104", Yc = "_editRow_13rur_117", Xc = "_editCell_13rur_121", Zc = "_editInput_13rur_127", Jc = "_commandCell_13rur_137", Qc = "_commandButton_13rur_144", ed = "_data_13rur_159", td = "_table_13rur_166", nd = "_header_13rur_172", rd = "_center_13rur_185", sd = "_right_13rur_189", od = "_sortButton_13rur_193", ld = "_sortIndicator_13rur_211", ad = "_sortIndex_13rur_215", id = "_cell_13rur_226", cd = "_clickable_13rur_241", dd = "_frozen_13rur_249", ud = "_selected_13rur_255", fd = "_resizeHandle_13rur_263", _d = "_filterCell_13rur_281", pd = "_filterSelect_13rur_290", md = "_filterInput_13rur_300", hd = "_empty_13rur_311", gd = "_loading_13rur_317", bd = "_visuallyHidden_13rur_331", yd = "_virtualScroller_13rur_340", xd = "_spacerRow_13rur_345", vd = "_footerRow_13rur_350", wd = "_footerCell_13rur_354", kd = "_footerValue_13rur_361", Oe = {
  grid: zc,
  toolbar: Lc,
  picker: Rc,
  pickerButton: Pc,
  pickerPanel: jc,
  pickerItem: Bc,
  groupPanel: Fc,
  groupPanelActive: Hc,
  groupPanelText: Uc,
  groupChip: qc,
  groupRemove: Kc,
  groupRow: Wc,
  groupCell: Gc,
  groupToggle: Vc,
  editRow: Yc,
  editCell: Xc,
  editInput: Zc,
  commandCell: Jc,
  commandButton: Qc,
  data: ed,
  table: td,
  header: nd,
  center: rd,
  right: sd,
  sortButton: od,
  sortIndicator: ld,
  sortIndex: ad,
  cell: id,
  clickable: cd,
  frozen: dd,
  selected: ud,
  resizeHandle: fd,
  filterCell: _d,
  filterSelect: pd,
  filterInput: md,
  empty: hd,
  loading: gd,
  visuallyHidden: bd,
  virtualScroller: yd,
  spacerRow: xd,
  footerRow: vd,
  footerCell: wd,
  footerValue: kd
}, Nd = {
  Ascending: "ascending",
  Descending: "descending"
};
function bo(e, t) {
  return e.filterable ?? t;
}
function Od(e, t) {
  return e.sortable ?? t;
}
function Sd(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function XN({
  columns: e,
  rows: t,
  rowKey: n,
  allowSorting: r = !1,
  allowMultiColumnSorting: l = !1,
  showSortIndex: a = !1,
  allowFiltering: d = !1,
  filterCaseSensitivity: s = "CaseInsensitive",
  logicalOperator: i = "And",
  allowPaging: c = !1,
  pageSize: f = 10,
  pageSizeOptions: u,
  pageNumbersCount: h = 5,
  pagerPosition: m = "Bottom",
  showPagingSummary: b = !0,
  showPageSizeSelector: g = !0,
  selectionMode: y = "None",
  selectedKeys: p,
  onSelectionChange: _,
  showColumnPicker: x = !1,
  columnPickerText: N = "Columns",
  allowColumnResize: v = !1,
  allowColumnReorder: $ = !1,
  allowGrouping: O = !1,
  groupPanelText: T = "Drag a column header here to group",
  groupExpanded: A = !0,
  aggregates: C,
  showExportButton: D = !1,
  exportFileName: I = "grid-data",
  serverMode: k = !1,
  totalCount: S,
  onRangeChange: E,
  virtualize: P = !1,
  virtualRowHeight: L = 40,
  virtualHeight: j = 480,
  editMode: F = "None",
  allowRowCreate: X = !1,
  onRowUpdate: ie,
  onRowCreate: te,
  onRowDelete: we,
  isLoading: le = !1,
  empty: _e = "No records found",
  ariaLabel: W,
  className: he,
  onRowClick: ue
}) {
  const ye = W != null ? `${W} ` : "", [pe, De] = q([]), [G, $e] = q(
    /* @__PURE__ */ new Map()
  ), [ne, Ae] = q(1), [fe, Fe] = q(f), [Ge, Je] = q(
    () => e.map((H, U) => Yr(H, U))
  ), [At, lt] = q(
    () => new Set(
      e.map((H, U) => H.visible !== !1 ? Yr(H, U) : "").filter(Boolean)
    )
  ), [yt, Z] = q({}), [z, Y] = q(!1), [Q, ge] = q([]), [ae, Ee] = q(
    null
  ), [je, Ze] = q(null), [Qe, nt] = q({}), [Xt, re] = q(0), [Le, Nt] = q(j), Rt = oe(null), xt = oe(null), Ie = Se(() => {
    const H = /* @__PURE__ */ new Map();
    return e.forEach((U, be) => H.set(Yr(U, be), U)), H;
  }, [e]), Ke = Se(
    () => Ge.filter((H) => At.has(H)).map((H) => ({ key: H, column: Ie.get(H) })).filter(
      (H) => H.column != null
    ),
    [Ge, At, Ie]
  ), vt = Se(
    () => $c(Ke, yt),
    [Ke, yt]
  ), $t = F !== "None" || we != null || X, at = Se(() => {
    if (k) {
      const H = S ?? t.length, U = Math.max(1, Math.ceil(H / fe));
      return {
        items: [...t],
        filtered: [...t],
        total: H,
        pageCount: U,
        pageNumber: ne,
        pageSize: fe,
        sorts: pe,
        filters: G
      };
    }
    return Dc(
      t,
      {
        sorts: pe,
        filters: G,
        pageNumber: ne,
        // Without a pager the grid shows every row (Radzen parity); the
        // internal slice only applies when paging UI is on.
        pageSize: c ? fe : Number.MAX_SAFE_INTEGER
      },
      {
        logicalOperator: i,
        caseSensitivity: s,
        types: Object.fromEntries(
          e.filter((H) => H.type != null && H.property != null).map((H) => [
            H.property,
            H.type
          ])
        )
      }
    );
  }, [
    t,
    pe,
    G,
    ne,
    fe,
    i,
    s,
    e,
    k,
    S,
    c
  ]), V = oe(E);
  ve(() => {
    V.current = E;
  });
  const me = Se(
    () => [...G.entries()].filter(([, H]) => H.value !== "" && H.value !== void 0).map(([H, U]) => ({
      property: H,
      operator: U.operator ?? go(
        e.find((be) => be.property === H)?.type ?? "string"
      ),
      value: U.value ?? ""
    })),
    [G, e]
  );
  ve(() => {
    !k || V.current == null || V.current({
      start: (ne - 1) * fe,
      count: fe,
      pageNumber: ne,
      pageSize: fe,
      sorts: pe,
      filters: me,
      logicalOperator: i
    });
  }, [
    k,
    ne,
    fe,
    pe,
    me,
    i
  ]);
  const Ve = Se(() => new Set(Q), [Q]), Ye = Se(() => ae || (A ? mo(at.items, Q, nr) : /* @__PURE__ */ new Set()), [ae, A, at.items, Q]), Pt = Se(
    () => Sc(at.items, Q, e, Ye, nr),
    [at.items, Q, e, Ye]
  ), Xe = Se(
    () => Q.length > 0 ? Ke.filter(
      (H) => H.column.property == null || !Ve.has(H.column.property)
    ) : Ke,
    [Ke, Q, Ve]
  ), K = (H) => {
    H !== "" && De(Tc(pe, H, { multi: l }));
  }, ee = (H, U) => {
    $e((be) => {
      const xe = new Map(be);
      return xe.set(H, U), xe;
    }), Ae(1);
  }, de = (H) => {
    Fe(H), Ae(1);
  }, Ne = (H) => {
    if (y === "None") return;
    const U = n(H), be = p ?? [];
    let xe;
    y === "Single" ? xe = be.length === 1 && be[0] === U ? [] : [U] : xe = be.includes(U) ? be.filter((et) => et !== U) : [...be, U], _?.(xe);
  }, ke = (H) => {
    ue?.(H);
  }, Ce = (H, U, be) => {
    Rt.current = { key: H, startX: U, startWidth: be };
  }, We = (H) => {
    const U = Rt.current;
    if (!U) return;
    const be = H - U.startX, xe = Math.max(48, U.startWidth + be);
    Z((et) => ({ ...et, [U.key]: `${xe}px` }));
  }, Be = () => {
    Rt.current = null;
  }, it = (H) => {
    xt.current = H;
  }, rt = (H) => {
    const U = xt.current;
    xt.current = null, !(!U || U === H) && Je((be) => {
      const xe = [...be], et = xe.indexOf(U), Dt = xe.indexOf(H);
      return et < 0 || Dt < 0 ? be : (xe.splice(et, 1), xe.splice(Dt, 0, U), xe);
    });
  }, Et = (H) => {
    lt((U) => {
      const be = new Set(U);
      return be.has(H) ? be.delete(H) : be.add(H), be;
    });
  }, mt = () => {
    const H = xt.current;
    if (xt.current = null, !H || !O) return;
    const be = Ie.get(H)?.property;
    be && (ge(
      (xe) => xe.includes(be) ? xe : [...xe, be]
    ), Ee(null));
  }, ze = (H) => {
    ge((U) => U.filter((be) => be !== H)), Ee(null);
  }, Tt = (H) => {
    Ee((U) => {
      const be = U ?? (A ? mo(at.items, Q, nr) : /* @__PURE__ */ new Set()), xe = new Set(be);
      return xe.has(H) ? xe.delete(H) : xe.add(H), xe;
    });
  }, Zt = (H) => {
    const U = {};
    e.forEach((be) => {
      be.property && (U[be.property] = nr(H, be.property));
    }), nt(U), Ze(String(n(H)));
  }, _n = () => {
    const H = {};
    e.forEach((U) => {
      U.property && U.type === "boolean" && (H[U.property] = !1);
    }), nt(H), Ze("__new__");
  }, Tn = () => {
    Ze(null), nt({});
  }, jn = (H) => {
    if (je === "__new__") {
      const U = Object.fromEntries(
        e.filter((be) => be.property).map((be) => [be.property, Qe[be.property]])
      );
      te?.(U);
    } else if (H != null) {
      const U = { ...H, ...Qe };
      ie?.(H, U);
    }
    Tn();
  }, wn = c && (m === "Top" || m === "TopAndBottom"), Kr = c && (m === "Bottom" || m === "TopAndBottom"), gs = d && e.some((H) => bo(H, d)), bs = (H, U, be) => H.render ? H.render(U, { index: 0 }) : us(nr(U, H.property), H.format), ys = (H) => {
    const U = [Oe.cell];
    return H.align === "center" && U.push(Oe.center), H.align === "right" && U.push(Oe.right), H.frozen && U.push(Oe.frozen), U.join(" ");
  }, pn = k ? t : at.filtered, Wr = () => {
    const H = Ic(
      pn,
      Xe.map((et) => et.column)
    ), U = new Blob([`\uFEFF${H}`], {
      type: "text/csv;charset=utf-8"
    }), be = URL.createObjectURL(U), xe = document.createElement("a");
    xe.href = be, xe.download = `${I}.csv`, document.body.appendChild(xe), xe.click(), xe.remove(), URL.revokeObjectURL(be);
  }, mn = Pt.length, jt = Se(() => {
    if (!P || mn === 0)
      return { start: 0, end: mn, top: 0, bottom: 0 };
    const H = 5, U = Math.max(
      0,
      Math.floor(Xt / L) - H
    ), be = Math.ceil(Le / L) + H * 2, xe = Math.min(mn, U + be), et = U * L, Dt = Math.max(0, (mn - xe) * L);
    return { start: U, end: xe, top: et, bottom: Dt };
  }, [P, mn, Xt, L, Le]), yr = Xe.length + ($t ? 1 : 0);
  return /* @__PURE__ */ M("div", { className: [Oe.grid, he].filter(Boolean).join(" "), children: [
    wn && /* @__PURE__ */ o(
      Ls,
      {
        pageNumber: at.pageNumber,
        pageSize: at.pageSize,
        count: at.total,
        pageSizeOptions: u,
        pageNumbersCount: h,
        showSummary: b,
        showPageSizeSelector: g,
        ariaLabel: `${ye}${Kr ? "Pagination (top)" : "Pagination"}`,
        onPageChange: Ae,
        onPageSizeChange: de
      }
    ),
    (O || X || x || D) && /* @__PURE__ */ M("div", { className: Oe.toolbar, children: [
      O && /* @__PURE__ */ o(
        "div",
        {
          className: [
            Oe.groupPanel,
            Q.length > 0 ? Oe.groupPanelActive : ""
          ].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: O ? (H) => H.preventDefault() : void 0,
          onDrop: O ? mt : void 0,
          children: Q.length > 0 ? Q.map((H) => {
            const U = e.find((be) => be.property === H)?.title ?? H;
            return /* @__PURE__ */ M("span", { className: Oe.groupChip, children: [
              U,
              ":",
              " ",
              /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: Oe.groupRemove,
                  onClick: () => ze(H),
                  "aria-label": `Remove group by ${U}`,
                  children: /* @__PURE__ */ o(Me, { icon: "close", size: "sm" })
                }
              )
            ] }, H);
          }) : /* @__PURE__ */ o("span", { className: Oe.groupPanelText, children: T })
        }
      ),
      X && /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: Oe.pickerButton,
          onClick: _n,
          children: "Add row"
        }
      ),
      x && /* @__PURE__ */ M("div", { className: Oe.picker, children: [
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Oe.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": z,
            onClick: () => Y((H) => !H),
            children: N
          }
        ),
        z && /* @__PURE__ */ o(
          "div",
          {
            className: Oe.pickerPanel,
            role: "menu",
            "aria-label": N,
            children: e.map((H, U) => {
              const be = Yr(H, U);
              return /* @__PURE__ */ M("label", { className: Oe.pickerItem, children: [
                /* @__PURE__ */ o(
                  "input",
                  {
                    type: "checkbox",
                    checked: At.has(be),
                    onChange: () => Et(be)
                  }
                ),
                H.title ?? H.property
              ] }, be);
            })
          }
        )
      ] }),
      D && /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: Oe.pickerButton,
          onClick: Wr,
          children: "Export CSV"
        }
      )
    ] }),
    /* @__PURE__ */ M(
      "div",
      {
        className: [Oe.data, P ? Oe.virtualScroller : ""].filter(Boolean).join(" "),
        style: P ? { maxHeight: j } : void 0,
        onScroll: P ? (H) => {
          re(H.currentTarget.scrollTop), Nt(H.currentTarget.clientHeight);
        } : void 0,
        children: [
          /* @__PURE__ */ M(
            "table",
            {
              className: Oe.table,
              role: "grid",
              "aria-rowcount": (P ? mn : at.total) + 1,
              "aria-label": W,
              "aria-busy": le || void 0,
              children: [
                /* @__PURE__ */ M("colgroup", { children: [
                  Xe.map(({ key: H, column: U }) => /* @__PURE__ */ o(
                    "col",
                    {
                      style: {
                        width: yt[H] ?? U.width,
                        minWidth: U.minWidth,
                        maxWidth: U.maxWidth
                      }
                    },
                    H
                  )),
                  $t && /* @__PURE__ */ o("col", { style: { width: "8rem" } })
                ] }),
                /* @__PURE__ */ M("thead", { children: [
                  /* @__PURE__ */ M("tr", { children: [
                    Xe.map(({ key: H, column: U }) => {
                      const be = Od(U, r), xe = pe.find((wt) => wt.property === U.property), et = xe ? pe.indexOf(xe) + 1 : 0, Dt = U.align ?? "left";
                      return /* @__PURE__ */ M(
                        "th",
                        {
                          "aria-sort": be && xe ? Nd[xe.sortOrder] : "none",
                          className: [
                            Oe.header,
                            Dt === "center" ? Oe.center : "",
                            Dt === "right" ? Oe.right : "",
                            U.frozen ? Oe.frozen : ""
                          ].filter(Boolean).join(" "),
                          style: U.frozen ? { left: vt[H] } : void 0,
                          scope: "col",
                          draggable: $ || O || void 0,
                          onDragStart: $ || O ? (wt) => {
                            wt.dataTransfer && (wt.dataTransfer.effectAllowed = "move"), it(H);
                          } : void 0,
                          onDragOver: $ ? (wt) => wt.preventDefault() : void 0,
                          onDrop: $ ? () => rt(H) : void 0,
                          children: [
                            be ? /* @__PURE__ */ M(
                              "button",
                              {
                                type: "button",
                                className: Oe.sortButton,
                                onClick: () => U.property != null && K(U.property),
                                "aria-label": xe ? xe.sortOrder === "Ascending" ? `Sort ${U.title ?? U.property} descending` : `Sort ${U.title ?? U.property} ascending` : `Sort ${U.title ?? U.property} ascending`,
                                children: [
                                  U.title ?? U.property,
                                  xe && /* @__PURE__ */ o(
                                    "span",
                                    {
                                      className: Oe.sortIndicator,
                                      "aria-hidden": "true",
                                      children: xe.sortOrder === "Ascending" ? "▲" : "▼"
                                    }
                                  ),
                                  et > 1 && a && /* @__PURE__ */ o("span", { className: Oe.sortIndex, children: et })
                                ]
                              }
                            ) : U.title ?? U.property,
                            v && /* @__PURE__ */ o(
                              "span",
                              {
                                className: Oe.resizeHandle,
                                "data-dx-grid-resize": !0,
                                role: "separator",
                                "aria-orientation": "vertical",
                                "aria-label": `Resize ${U.title ?? U.property}`,
                                onMouseDown: (wt) => {
                                  wt.preventDefault(), wt.stopPropagation();
                                  const hn = yt[H] ?? U.width, Ct = hn ? parseFloat(hn) : 96;
                                  Ce(
                                    H,
                                    wt.clientX,
                                    Number.isFinite(Ct) ? Ct : 96
                                  );
                                },
                                onMouseMove: (wt) => {
                                  Rt.current?.key === H && We(wt.clientX);
                                },
                                onMouseUp: Be,
                                onMouseLeave: () => {
                                  Rt.current?.key === H && Be();
                                }
                              }
                            )
                          ]
                        },
                        H
                      );
                    }),
                    $t && /* @__PURE__ */ o("th", { className: Oe.header, scope: "col", children: "Actions" })
                  ] }),
                  gs && /* @__PURE__ */ o("tr", { children: Xe.map(({ key: H, column: U }) => {
                    if (!bo(U, d))
                      return /* @__PURE__ */ o("td", { className: Oe.filterCell }, H);
                    const be = G.get(U.property ?? "");
                    return /* @__PURE__ */ M("td", { className: Oe.filterCell, children: [
                      /* @__PURE__ */ M(
                        "label",
                        {
                          className: Oe.visuallyHidden,
                          htmlFor: `df-${U.property}`,
                          children: [
                            "Filter ",
                            U.title ?? U.property
                          ]
                        }
                      ),
                      /* @__PURE__ */ o(
                        "select",
                        {
                          id: `df-${U.property}`,
                          className: Oe.filterSelect,
                          value: be?.operator ?? go(U.type ?? "string"),
                          onChange: (xe) => ee(U.property ?? "", {
                            ...be,
                            operator: xe.target.value
                          }),
                          "aria-label": `${U.title ?? U.property} operator`,
                          children: cl.filter((xe) => xe !== "Custom").map(
                            (xe) => /* @__PURE__ */ o("option", { value: xe, children: xe }, xe)
                          )
                        }
                      ),
                      /* @__PURE__ */ o(
                        "input",
                        {
                          className: Oe.filterInput,
                          value: be?.value ?? "",
                          onChange: (xe) => ee(U.property ?? "", {
                            ...be,
                            value: xe.target.value
                          }),
                          placeholder: `Filter ${U.title ?? U.property}`,
                          "aria-label": `${U.title ?? U.property} value`
                        }
                      )
                    ] }, H);
                  }) })
                ] }),
                /* @__PURE__ */ M("tbody", { children: [
                  je === "__new__" && /* @__PURE__ */ M("tr", { className: Oe.editRow, children: [
                    Xe.map(({ key: H, column: U }) => /* @__PURE__ */ o("td", { className: Oe.editCell, children: U.property && /* @__PURE__ */ o(
                      "input",
                      {
                        className: Oe.editInput,
                        type: U.type === "number" ? "number" : U.type === "boolean" ? "checkbox" : "text",
                        checked: U.type === "boolean" ? !!Qe[U.property] : void 0,
                        value: U.type === "boolean" ? void 0 : String(Qe[U.property] ?? ""),
                        onChange: (be) => nt((xe) => ({
                          ...xe,
                          [U.property]: U.type === "boolean" ? be.target.checked : be.target.value
                        })),
                        "aria-label": `${U.title ?? U.property} (new)`
                      }
                    ) }, H)),
                    $t && /* @__PURE__ */ M("td", { className: Oe.editCell, children: [
                      /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: Oe.commandButton,
                          onClick: () => jn(),
                          children: "Save"
                        }
                      ),
                      /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          className: Oe.commandButton,
                          onClick: Tn,
                          children: "Cancel"
                        }
                      )
                    ] })
                  ] }),
                  jt.top > 0 && /* @__PURE__ */ o("tr", { className: Oe.spacerRow, "aria-hidden": "true", children: /* @__PURE__ */ o(
                    "td",
                    {
                      colSpan: yr,
                      style: { height: jt.top }
                    }
                  ) }),
                  Pt.slice(jt.start, jt.end).map((H, U) => {
                    const be = jt.start + U, xe = P ? be + 2 : void 0;
                    if (H.type === "group" && H.group) {
                      const Ct = Ye.has(H.group.key);
                      return /* @__PURE__ */ o(
                        "tr",
                        {
                          className: Oe.groupRow,
                          "aria-rowindex": xe,
                          children: /* @__PURE__ */ o("td", { colSpan: yr, className: Oe.groupCell, children: /* @__PURE__ */ M(
                            "button",
                            {
                              type: "button",
                              className: Oe.groupToggle,
                              "aria-expanded": Ct,
                              style: {
                                paddingInlineStart: `${H.group.level * 16}px`
                              },
                              onClick: () => Tt(H.group.key),
                              children: [
                                /* @__PURE__ */ o("span", { "aria-hidden": "true", children: Ct ? "▼" : "▶" }),
                                H.group.title,
                                ": ",
                                H.group.display,
                                " (",
                                H.group.count,
                                ")"
                              ]
                            }
                          ) })
                        },
                        `group-${H.group.key}`
                      );
                    }
                    const et = H.row, Dt = n(et), wt = (p ?? []).includes(Dt), hn = je != null && je === String(Dt);
                    return /* @__PURE__ */ M(
                      "tr",
                      {
                        "aria-rowindex": xe,
                        className: [
                          ue || y !== "None" ? Oe.clickable : "",
                          wt ? Oe.selected : "",
                          hn ? Oe.editRow : ""
                        ].filter(Boolean).join(" "),
                        "aria-selected": y !== "None" ? wt : void 0,
                        onClick: ue || y !== "None" ? (Ct) => {
                          Sd(Ct.target) || (ke(et), Ne(et));
                        } : void 0,
                        children: [
                          Xe.map(({ key: Ct, column: gt }) => /* @__PURE__ */ o(
                            "td",
                            {
                              className: ys(gt),
                              style: gt.frozen ? { left: vt[Ct] } : void 0,
                              children: hn && gt.property ? /* @__PURE__ */ o(
                                "input",
                                {
                                  className: Oe.editInput,
                                  type: gt.type === "number" ? "number" : gt.type === "boolean" ? "checkbox" : "text",
                                  checked: gt.type === "boolean" ? !!Qe[gt.property] : void 0,
                                  value: gt.type === "boolean" ? void 0 : String(Qe[gt.property] ?? ""),
                                  onChange: (Jt) => nt((xs) => ({
                                    ...xs,
                                    [gt.property]: gt.type === "boolean" ? Jt.target.checked : Jt.target.value
                                  })),
                                  "aria-label": `${gt.title ?? gt.property} (edit)`
                                }
                              ) : bs(gt, et)
                            },
                            Ct
                          )),
                          $t && /* @__PURE__ */ o("td", { className: Oe.commandCell, children: hn ? /* @__PURE__ */ M(pt, { children: [
                            /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: Oe.commandButton,
                                onClick: () => jn(et),
                                children: "Save"
                              }
                            ),
                            /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: Oe.commandButton,
                                onClick: Tn,
                                children: "Cancel"
                              }
                            )
                          ] }) : /* @__PURE__ */ M(pt, { children: [
                            F !== "None" && /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: Oe.commandButton,
                                onClick: () => Zt(et),
                                children: "Edit"
                              }
                            ),
                            we && /* @__PURE__ */ o(
                              "button",
                              {
                                type: "button",
                                className: Oe.commandButton,
                                onClick: () => we(et),
                                children: "Delete"
                              }
                            )
                          ] }) })
                        ]
                      },
                      Dt
                    );
                  }),
                  jt.bottom > 0 && /* @__PURE__ */ o("tr", { className: Oe.spacerRow, "aria-hidden": "true", children: /* @__PURE__ */ o(
                    "td",
                    {
                      colSpan: yr,
                      style: { height: jt.bottom }
                    }
                  ) })
                ] }),
                C && C.length > 0 && /* @__PURE__ */ o("tfoot", { children: /* @__PURE__ */ M("tr", { className: Oe.footerRow, children: [
                  Xe.map(({ key: H, column: U }) => {
                    const be = C.filter(
                      (xe) => xe.property === U.property
                    );
                    return /* @__PURE__ */ o(
                      "td",
                      {
                        className: [
                          Oe.footerCell,
                          U.align === "right" ? Oe.right : "",
                          U.align === "center" ? Oe.center : ""
                        ].filter(Boolean).join(" "),
                        children: be.map((xe, et) => /* @__PURE__ */ M(
                          "div",
                          {
                            className: Oe.footerValue,
                            children: [
                              xe.title ? `${xe.title}: ` : "",
                              us(
                                Mc(pn, xe, nr),
                                xe.format
                              )
                            ]
                          },
                          `${xe.property}-${xe.type}-${et}`
                        ))
                      },
                      H
                    );
                  }),
                  $t && /* @__PURE__ */ o("td", { className: Oe.footerCell })
                ] }) })
              ]
            }
          ),
          at.items.length === 0 && !le && /* @__PURE__ */ o("div", { className: Oe.empty, children: _e }),
          le && /* @__PURE__ */ o("div", { className: Oe.loading, role: "status", children: "Loading…" })
        ]
      }
    ),
    Kr && /* @__PURE__ */ o(
      Ls,
      {
        pageNumber: at.pageNumber,
        pageSize: at.pageSize,
        count: at.total,
        pageSizeOptions: u,
        pageNumbersCount: h,
        showSummary: b,
        showPageSizeSelector: g,
        ariaLabel: `${ye}${wn ? "Pagination (bottom)" : "Pagination"}`,
        onPageChange: Ae,
        onPageSizeChange: de
      }
    )
  ] });
}
const $d = "_wrap_avqds_1", Ed = "_grid_avqds_7", Td = "_stacked_avqds_13", Cd = "_item_avqds_19", Ad = "_empty_avqds_25", $r = {
  wrap: $d,
  grid: Ed,
  stacked: Td,
  item: Cd,
  empty: Ad
};
function ZN({
  data: e,
  pageSize: t = 10,
  pageSizeOptions: n,
  wrapItems: r = !1,
  itemTemplate: l,
  emptyMessage: a = "No records found",
  emptyTemplate: d,
  loadingTemplate: s,
  isLoading: i = !1,
  showPageSizeSelector: c = !0,
  className: f,
  ariaLabel: u = "Data list"
}) {
  const [h, m] = q(1), [b, g] = q(t), y = e.length, p = Math.max(1, Math.ceil(y / b)), _ = Math.min(Math.max(1, h), p), x = Se(() => {
    const v = (_ - 1) * b;
    return e.slice(v, v + b);
  }, [e, _, b]), N = r ? $r.grid : $r.stacked;
  return /* @__PURE__ */ M(
    "div",
    {
      className: [$r.wrap, f].filter(Boolean).join(" "),
      "aria-label": u,
      children: [
        i && s != null ? s : y === 0 ? d ?? /* @__PURE__ */ o("div", { className: $r.empty, children: a }) : /* @__PURE__ */ o("div", { className: N, children: x.map((v, $) => /* @__PURE__ */ o("div", { className: $r.item, children: l ? l(v, $) : String(v) }, $)) }),
        /* @__PURE__ */ o(
          Ls,
          {
            ariaLabel: `${u} Pagination`,
            pageNumber: _,
            pageSize: b,
            count: y,
            pageSizeOptions: n,
            showPageSizeSelector: c,
            onPageChange: m,
            onPageSizeChange: (v) => {
              g(v), m(1);
            }
          }
        )
      ]
    }
  );
}
const Dd = "_label_1qfpw_1", Md = {
  label: Dd
}, JN = st(function({ className: t, children: n, ...r }, l) {
  return /* @__PURE__ */ o(
    "label",
    {
      ref: l,
      className: [Md.label, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}), Id = "_textbox_oly89_1", zd = "_invalid_oly89_37", Ld = "_xs_oly89_44", Rd = "_sm_oly89_50", Pd = "_md_oly89_56", jd = "_lg_oly89_62", Bd = "_xl_oly89_68", Ns = {
  textbox: Id,
  invalid: zd,
  xs: Ld,
  sm: Rd,
  md: Pd,
  lg: jd,
  xl: Bd
}, Fd = st(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    visible: l = !0,
    type: a = "text",
    ...d
  }, s) {
    return l === !1 ? null : /* @__PURE__ */ o(
      "input",
      {
        ref: s,
        type: a,
        "data-size": t,
        className: [
          Ns.textbox,
          Ns[t],
          n ? Ns.invalid : null,
          r
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...d
      }
    );
  }
), Xr = Fd, Hd = "_checkbox_1bb6c_1", Ud = {
  checkbox: Hd
}, QN = st(
  function({ className: t, indeterminate: n = !1, ...r }, l) {
    const a = oe(null);
    return ve(() => {
      a.current && (a.current.indeterminate = n);
    }, [n]), /* @__PURE__ */ o(
      "input",
      {
        ref: (d) => {
          a.current = d, typeof l == "function" ? l(d) : l && (l.current = d);
        },
        type: "checkbox",
        className: [Ud.checkbox, t].filter(Boolean).join(" "),
        ...r
      }
    );
  }
), qd = {
  switch: "_switch_19gf1_1"
}, eO = st(function({ className: t, ...n }, r) {
  const [l, a] = q(
    !!n.defaultChecked
  ), d = n.checked ?? l;
  return /* @__PURE__ */ o(
    "input",
    {
      ref: r,
      type: "checkbox",
      role: "switch",
      checked: n.checked,
      defaultChecked: n.defaultChecked,
      "aria-checked": d,
      className: [qd.switch, t].filter(Boolean).join(" "),
      ...n,
      onChange: (s) => {
        n.checked === void 0 && a(s.target.checked), n.onChange?.(s);
      }
    }
  );
}), Kd = "_trigger_1jlxf_1", Wd = "_tooltip_1jlxf_7", Gd = "_top_1jlxf_34", Vd = "_right_1jlxf_40", Yd = "_bottom_1jlxf_46", Xd = "_left_1jlxf_52", Zd = "_arrow_1jlxf_58", Jd = "_floating_1jlxf_70", Fn = {
  trigger: Kd,
  tooltip: Wd,
  "se-tooltip-in": "_se-tooltip-in_1jlxf_1",
  top: Gd,
  right: Vd,
  bottom: Yd,
  left: Xd,
  arrow: Zd,
  floating: Jd,
  "se-floating-tooltip-in": "_se-floating-tooltip-in_1jlxf_1"
}, Zr = 8;
function Qd(e, t) {
  switch (t) {
    case "bottom":
      return {
        top: e.bottom + Zr,
        left: e.left + e.width / 2,
        transform: "translate(-50%, 0)"
      };
    case "left":
      return {
        top: e.top + e.height / 2,
        left: e.left - Zr,
        transform: "translate(-100%, -50%)"
      };
    case "right":
      return {
        top: e.top + e.height / 2,
        left: e.right + Zr,
        transform: "translate(0, -50%)"
      };
    default:
      return {
        top: e.top - Zr,
        left: e.left + e.width / 2,
        transform: "translate(-50%, -100%)"
      };
  }
}
function tO({
  content: e,
  children: t,
  placement: n = "top",
  delayMs: r = 300,
  durationMs: l,
  targetSelector: a,
  className: d
}) {
  const s = ot(), i = oe(null), c = oe(null), f = oe(() => {
  }), [u, h] = q(!1), [m, b] = q(null), g = () => {
    i.current !== null && (window.clearTimeout(i.current), i.current = null);
  }, y = () => {
    g(), i.current = window.setTimeout(() => {
      i.current = null, h(!0);
    }, r);
  }, p = () => {
    g(), h(!1);
  };
  if (ve(() => () => g(), []), ve(() => {
    if (!u || l == null) return;
    const x = window.setTimeout(() => h(!1), l);
    return () => window.clearTimeout(x);
  }, [u, l]), ve(() => {
    if (a || !u) return;
    const x = (N) => {
      N.key === "Escape" && p();
    };
    return window.addEventListener("keydown", x), () => window.removeEventListener("keydown", x);
  }, [a, u]), ve(() => {
    if (!a) return;
    let x = null, N = null;
    const v = () => {
      x !== null && (window.clearTimeout(x), x = null);
    }, $ = () => {
      v(), N = null, b(null);
    };
    f.current = $;
    const O = (k) => {
      v(), N = k, x = window.setTimeout(() => {
        x = null, b(k);
      }, r);
    }, T = (k) => k instanceof Element ? k.closest(a) : null, A = (k) => {
      const S = T(k.target);
      !S || S === N || O(S);
    }, C = (k) => {
      const S = T(k.target);
      if (!S || S !== N) return;
      const E = k.relatedTarget;
      E instanceof Element && S.contains(E) || $();
    }, D = (k) => {
      k.key === "Escape" && $();
    }, I = () => $();
    return document.addEventListener("mouseover", A), document.addEventListener("mouseout", C), document.addEventListener("focusin", A), document.addEventListener("focusout", C), document.addEventListener("keydown", D), document.addEventListener("scroll", I, !0), window.addEventListener("resize", I), () => {
      v(), document.removeEventListener("mouseover", A), document.removeEventListener("mouseout", C), document.removeEventListener("focusin", A), document.removeEventListener("focusout", C), document.removeEventListener("keydown", D), document.removeEventListener("scroll", I, !0), window.removeEventListener("resize", I), N = null, b(null);
    };
  }, [a, r]), ve(() => {
    if (!a || m === null || l == null) return;
    const x = window.setTimeout(() => f.current(), l);
    return () => window.clearTimeout(x);
  }, [a, m, l]), zs(() => {
    const x = m;
    if (!x) return;
    const N = x.getAttribute("aria-describedby");
    return x.setAttribute(
      "aria-describedby",
      [N, s].filter(Boolean).join(" ")
    ), () => {
      N == null ? x.removeAttribute("aria-describedby") : x.setAttribute("aria-describedby", N);
    };
  }, [m, s]), zs(() => {
    const x = c.current, N = m;
    !x || !N || Object.assign(
      x.style,
      Qd(N.getBoundingClientRect(), n)
    );
  }, [m, n]), a)
    return m ? /* @__PURE__ */ M(
      "span",
      {
        ref: c,
        role: "tooltip",
        id: s,
        className: [
          Fn.tooltip,
          Fn[n],
          Fn.floating,
          d
        ].filter(Boolean).join(" "),
        children: [
          e,
          /* @__PURE__ */ o("span", { className: Fn.arrow, "aria-hidden": "true" })
        ]
      }
    ) : null;
  const _ = qt(t) ? Vs(t, {
    "aria-describedby": [
      t.props["aria-describedby"],
      u ? s : null
    ].filter((x) => typeof x == "string").join(" ") || void 0
  }) : t;
  return (
    // Presentational hit-area: hover/focus handlers here, semantics and
    // keyboard interaction live on the child trigger.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ M(
      "span",
      {
        className: [Fn.trigger, d].filter(Boolean).join(" "),
        onMouseEnter: y,
        onMouseLeave: p,
        onFocus: y,
        onBlur: p,
        children: [
          _,
          u && /* @__PURE__ */ M(
            "span",
            {
              role: "tooltip",
              id: s,
              className: [Fn.tooltip, Fn[n]].filter(Boolean).join(" "),
              children: [
                e,
                /* @__PURE__ */ o("span", { className: Fn.arrow, "aria-hidden": "true" })
              ]
            }
          )
        ]
      }
    )
  );
}
const eu = "_dialog_1t7pw_1", tu = "_sm_1t7pw_104", nu = "_resizable_1t7pw_110", ru = "_md_1t7pw_113", su = "_lg_1t7pw_117", ou = "_header_1t7pw_121", lu = "_title_1t7pw_132", au = "_description_1t7pw_139", iu = "_close_1t7pw_146", cu = "_body_1t7pw_176", du = "_footer_1t7pw_188", gn = {
  dialog: eu,
  "se-dialog-in": "_se-dialog-in_1t7pw_1",
  "side-right": "_side-right_1t7pw_63",
  "side-left": "_side-left_1t7pw_69",
  "side-top": "_side-top_1t7pw_75",
  "side-bottom": "_side-bottom_1t7pw_81",
  "no-mask": "_no-mask_1t7pw_89",
  sm: tu,
  resizable: nu,
  md: ru,
  lg: su,
  header: ou,
  title: lu,
  description: au,
  close: iu,
  body: cu,
  footer: du
};
function _l({
  open: e,
  onClose: t,
  title: n,
  description: r,
  children: l,
  footer: a,
  size: d = "md",
  width: s,
  height: i,
  closeOnOverlayClick: c = !0,
  closeOnEsc: f = !0,
  resizable: u = !1,
  side: h = null,
  showCloseButton: m = !0,
  showMask: b = !0,
  canClose: g,
  className: y
}) {
  const p = oe(null), _ = ot(), x = ot(), N = oe(t);
  ve(() => {
    N.current = t;
  });
  const v = oe(g);
  ve(() => {
    v.current = g;
  });
  const $ = oe(f);
  ve(() => {
    $.current = f;
  });
  const O = oe(!1), T = oe(!1), A = B(() => {
    if (O.current) return;
    const I = v.current?.();
    if (I instanceof Promise) {
      I.then((k) => {
        k && !O.current && (O.current = !0, N.current());
      });
      return;
    }
    I !== !1 && (O.current = !0, N.current());
  }, []), C = B(() => {
    if (T.current) {
      T.current = !1;
      return;
    }
    N.current();
  }, []), D = B(
    (I) => {
      if (I.key !== "Tab" || !p.current) return;
      const k = Array.from(
        p.current.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter(
        (E) => E.offsetWidth > 0 || E.offsetHeight > 0 || E === document.activeElement
      );
      if (k.length === 0) {
        I.preventDefault();
        return;
      }
      const S = k.indexOf(document.activeElement);
      if (I.shiftKey) {
        if (S <= 0) {
          I.preventDefault();
          const E = k[k.length - 1];
          E && E.focus();
        }
      } else if (S === -1 || S === k.length - 1) {
        I.preventDefault();
        const E = k[0];
        E && E.focus();
      }
    },
    []
  );
  return ve(() => {
    const I = p.current;
    if (I)
      if (e && !I.open) {
        const k = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        I.showModal(), (I.querySelector(
          'button[aria-label="Close dialog"]'
        ) ?? I.querySelector("button"))?.focus();
        const E = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const P = (L) => {
          L.preventDefault(), $.current && A();
        };
        return I.addEventListener("cancel", P), () => {
          I.removeEventListener("cancel", P), document.body.style.overflow = E, k?.focus({ preventScroll: !0 });
        };
      } else !e && I.open && (T.current = O.current, O.current = !1, I.close());
  }, [e, A]), // Backdrop dismissal is mouse-only by design; keyboard users close
  // via ESC (cancel path above) or the X button.
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
  /* @__PURE__ */ M(
    "dialog",
    {
      ref: p,
      className: [
        gn.dialog,
        gn[d],
        u ? gn.resizable : null,
        h ? gn[`side-${h}`] : null,
        b === !1 ? gn["no-mask"] : null,
        y
      ].filter(Boolean).join(" "),
      style: {
        width: s ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: s != null ? "none" : void 0,
        height: i ?? void 0
      },
      onClose: C,
      onClick: (I) => {
        I.target === p.current && c && A();
      },
      "aria-modal": "true",
      "aria-labelledby": n ? _ : void 0,
      "aria-describedby": r ? x : void 0,
      onKeyDown: D,
      children: [
        n && /* @__PURE__ */ M("header", { className: gn.header, children: [
          /* @__PURE__ */ M("div", { children: [
            /* @__PURE__ */ o("h2", { id: _, className: gn.title, children: n }),
            r && /* @__PURE__ */ o("p", { id: x, className: gn.description, children: r })
          ] }),
          m !== !1 && /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: gn.close,
              onClick: () => {
                A();
              },
              "aria-label": "Close dialog",
              children: /* @__PURE__ */ o(Me, { icon: "close", size: "sm" })
            }
          )
        ] }),
        l && /* @__PURE__ */ o("div", { className: gn.body, children: l }),
        a && /* @__PURE__ */ o("footer", { className: gn.footer, children: a })
      ]
    }
  );
}
const uu = "_typography_1jy8x_1", fu = "_h1_1jy8x_39", _u = "_h2_1jy8x_45", pu = "_h3_1jy8x_51", mu = "_h4_1jy8x_57", hu = "_h5_1jy8x_63", gu = "_h6_1jy8x_69", bu = "_button_1jy8x_99", yu = "_caption_1jy8x_106", xu = "_overline_1jy8x_112", Os = {
  typography: uu,
  "display-1": "_display-1_1jy8x_8",
  "display-2": "_display-2_1jy8x_13",
  "display-3": "_display-3_1jy8x_18",
  "display-4": "_display-4_1jy8x_23",
  "display-5": "_display-5_1jy8x_28",
  "display-6": "_display-6_1jy8x_33",
  h1: fu,
  h2: _u,
  h3: pu,
  h4: mu,
  h5: hu,
  h6: gu,
  "subtitle-1": "_subtitle-1_1jy8x_75",
  "subtitle-2": "_subtitle-2_1jy8x_81",
  "body-1": "_body-1_1jy8x_87",
  "body-2": "_body-2_1jy8x_92",
  button: bu,
  caption: yu,
  overline: xu,
  "align-left": "_align-left_1jy8x_121",
  "align-center": "_align-center_1jy8x_125",
  "align-right": "_align-right_1jy8x_129",
  "align-justify": "_align-justify_1jy8x_133"
}, vu = {
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
}, wu = {
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
}, ku = {
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
}, Nu = {
  Left: "align-left",
  Right: "align-right",
  Center: "align-center",
  Justify: "align-justify",
  Start: "align-left",
  End: "align-right",
  JustifyAll: "align-justify"
}, pl = st(function({
  textStyle: t = "Body1",
  tagName: n = "Auto",
  textAlign: r,
  text: l,
  visible: a = !0,
  className: d,
  children: s,
  ...i
}, c) {
  if (a === !1) return null;
  const f = n === "Auto" ? vu[t] : ku[n];
  return /* @__PURE__ */ o(
    f,
    {
      ref: c,
      className: [
        Os.typography,
        Os[wu[t]],
        r ? Os[Nu[r]] : null,
        d
      ].filter(Boolean).join(" "),
      ...i,
      children: l ?? s
    }
  );
}), ml = or(null);
function nO() {
  const e = Pn(ml);
  if (!e)
    throw new Error("useDialog must be used within a <DialogProvider>");
  return e;
}
function rO({ children: e }) {
  const [t, n] = q([]), [, r] = q(0), l = oe(0), a = () => (l.current += 1, l.current), d = oe([]);
  d.current = t;
  const s = (h) => {
    const m = d.current[0];
    m && (m.kind === "confirm" ? m.resolve(!!h) : m.kind === "alert" ? m.resolve() : m.resolve(h), n((b) => b.slice(1)));
  }, i = Se(
    () => ({
      confirm: (h = {}) => new Promise((m) => {
        n((b) => [
          ...b,
          { seq: a(), kind: "confirm", options: h, resolve: m }
        ]);
      }),
      alert: (h = {}) => new Promise((m) => {
        n((b) => [
          ...b,
          { seq: a(), kind: "alert", options: h, resolve: m }
        ]);
      }),
      open: (h = {}) => new Promise((m) => {
        n((b) => [
          ...b,
          { seq: a(), kind: "custom", options: h, resolve: m }
        ]);
      }),
      openSide: ({ position: h, showMask: m = !0, ...b }) => new Promise((g) => {
        n((y) => [
          ...y,
          {
            seq: a(),
            kind: "custom",
            options: { ...b, side: h, showMask: m },
            resolve: g
          }
        ]);
      }),
      close: (h) => s(h),
      closeAll: () => {
        n((h) => (h.forEach((m) => {
          m.kind === "confirm" ? m.resolve(!1) : m.kind === "alert" ? m.resolve() : m.resolve(void 0);
        }), []));
      },
      refresh: () => r((h) => h + 1)
    }),
    // settleHead reads the live queue ref, so the empty dep list is safe.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  ), c = t[0];
  function f(h) {
    c && (c.kind === "confirm" ? c.resolve(!!h) : c.kind === "alert" ? c.resolve() : c.resolve(h), n((m) => m.slice(1)));
  }
  const u = c?.kind === "custom" ? c.options : null;
  return /* @__PURE__ */ M(ml.Provider, { value: i, children: [
    e,
    /* @__PURE__ */ o(
      _l,
      {
        open: t.length > 0,
        onClose: () => f(!1),
        title: c?.kind === "custom" ? u?.title ?? "Dialog" : c?.options.title ?? (c?.kind === "confirm" ? "Confirm" : "Alert"),
        description: u?.description,
        size: c?.kind === "custom" ? u?.size : c?.options.size,
        width: u?.width,
        height: u?.height,
        side: u?.side ?? null,
        showCloseButton: u?.showCloseButton,
        showMask: u?.showMask,
        closeOnOverlayClick: u?.closeOnOverlayClick,
        closeOnEsc: u?.closeOnEsc,
        className: u?.className,
        footer: c?.kind === "confirm" ? /* @__PURE__ */ M(pt, { children: [
          /* @__PURE__ */ o(yn, { variant: "text", onClick: () => f(!1), children: c.options.cancelText ?? "Cancel" }),
          /* @__PURE__ */ o(
            yn,
            {
              severity: c.options.tone ?? "primary",
              onClick: () => f(!0),
              children: c.options.confirmText ?? "Confirm"
            }
          )
        ] }) : c?.kind === "custom" ? u?.footer ?? /* @__PURE__ */ o(yn, { variant: "text", onClick: () => f(void 0), children: "Close" }) : /* @__PURE__ */ o(yn, { onClick: () => f(!0), children: c?.kind === "alert" ? c.options.okText ?? "OK" : "OK" }),
        children: c?.kind === "custom" ? u?.content : c?.options.message != null && /* @__PURE__ */ o(pl, { textStyle: "Body1", children: c.options.message })
      },
      c?.seq ?? 0
    )
  ] });
}
const Ou = "_viewport_11t1p_1", Su = "_topLeft_11t1p_13", $u = "_topRight_11t1p_20", Eu = "_bottomLeft_11t1p_25", Tu = "_toast_11t1p_30", Cu = "_leaving_11t1p_61", Au = "_info_11t1p_77", Du = "_success_11t1p_86", Mu = "_warning_11t1p_95", Iu = "_danger_11t1p_104", zu = "_content_11t1p_113", Lu = "_title_11t1p_118", Ru = "_description_11t1p_141", Pu = "_dismiss_11t1p_148", ju = "_actions_11t1p_169", Bu = "_action_11t1p_169", Fu = "_cancel_11t1p_177", Hu = "_progress_11t1p_215", en = {
  viewport: Ou,
  topLeft: Su,
  topRight: $u,
  bottomLeft: Eu,
  toast: Tu,
  "se-toast-in": "_se-toast-in_11t1p_1",
  leaving: Cu,
  "se-toast-out": "_se-toast-out_11t1p_1",
  info: Au,
  success: Du,
  warning: Mu,
  danger: Iu,
  content: zu,
  title: Lu,
  description: Ru,
  dismiss: Pu,
  actions: ju,
  action: Bu,
  cancel: Fu,
  progress: Hu,
  "se-toast-progress": "_se-toast-progress_11t1p_1"
}, hl = or(null);
function sO() {
  const e = Pn(hl);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const Uu = 200, qu = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function oO({
  children: e,
  durationMs: t = 4e3,
  position: n = "bottom-right",
  pauseOnHover: r = !0,
  className: l
}) {
  const [a, d] = q([]), [s, i] = q(!1), c = oe([]), f = oe(/* @__PURE__ */ new Map()), u = oe(!1), h = oe(0), m = (S) => {
    u.current = S, i(S);
  }, b = B((S) => {
    const E = f.current.get(S);
    E && (window.clearTimeout(E.timeoutId), E.remaining = Math.max(
      0,
      E.remaining - (Date.now() - E.startedAt)
    ));
  }, []), g = B((S) => {
    const E = f.current.get(S);
    E && (window.clearTimeout(E.timeoutId), f.current.delete(S));
  }, []), y = B(
    (S) => {
      g(S), d((E) => {
        const P = E.filter((L) => L.id !== S);
        return c.current = P, P;
      });
    },
    [g]
  ), p = B(
    (S) => {
      const E = c.current.find((P) => P.id === S);
      !E || E.leaving || (E.onAutoClose?.(), y(S));
    },
    [y]
  ), _ = B(
    (S) => {
      const E = f.current.get(S);
      !E || E.remaining <= 0 || (E.startedAt = Date.now(), E.timeoutId = window.setTimeout(() => p(S), E.remaining));
    },
    [p]
  ), x = B(() => {
    u.current || f.current.forEach((S, E) => b(E)), m(!0);
  }, [b]), N = B(() => {
    f.current.forEach((S, E) => _(E)), m(!1);
  }, [_]);
  ve(() => {
    if (!r) return;
    const S = () => {
      document.hidden ? x() : N();
    };
    return document.addEventListener("visibilitychange", S), () => document.removeEventListener("visibilitychange", S);
  }, [r, x, N]);
  const v = B(
    (S) => {
      const E = c.current.find((P) => P.id === S);
      !E || E.leaving || (E.onDismiss?.(), d((P) => {
        const L = P.map(
          (j) => j.id === S ? { ...j, leaving: !0 } : j
        );
        return c.current = L, L;
      }), window.setTimeout(() => y(S), Uu));
    },
    [y]
  ), $ = B(
    (S) => {
      if (S.durationMs <= 0) return;
      const E = {
        remaining: S.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      f.current.set(S.id, E), u.current || _(S.id);
    },
    [_]
  ), O = B(
    (S) => {
      const E = c.current.find((L) => L.id === S.id), P = {
        id: S.id ?? ++h.current,
        title: S.title,
        description: S.description,
        severity: S.severity ?? "info",
        durationMs: S.durationMs ?? t,
        action: S.action,
        cancel: S.cancel,
        dismissible: S.dismissible ?? !0,
        closeOnClick: S.closeOnClick ?? !1,
        payload: S.payload,
        click: S.click,
        showProgress: S.showProgress ?? !1,
        position: S.position ?? n,
        onDismiss: S.onDismiss,
        onAutoClose: S.onAutoClose
      };
      d((L) => {
        const j = E ? L.map(
          (F) => F.id === P.id ? { ...P, leaving: !1 } : F
        ) : [...L, P];
        return c.current = j, j;
      }), E && g(P.id), $(P);
    },
    [t, n, $, g]
  ), T = B(
    (S) => {
      O({
        severity: S.severity ?? "info",
        title: S.summary ?? S.summaryContent,
        description: S.detail ?? S.detailContent,
        durationMs: S.duration,
        click: S.click,
        closeOnClick: S.closeOnClick,
        payload: S.payload
      });
    },
    [O]
  ), A = B(
    (S) => (E, P) => T({ severity: S, summary: E, detail: P }),
    [T]
  ), C = Se(
    () => ({
      toast: O,
      notify: T,
      notifyInfo: A("info"),
      notifySuccess: A("success"),
      notifyWarning: A("warning"),
      notifyError: A("danger")
    }),
    [O, T, A]
  ), D = Se(
    () => Array.from(/* @__PURE__ */ new Set([n, ...a.map((S) => S.position)])),
    [n, a]
  ), I = r ? x : void 0, k = r ? N : void 0;
  return /* @__PURE__ */ M(hl.Provider, { value: C, children: [
    e,
    D.map((S) => /* @__PURE__ */ o(
      "div",
      {
        className: [en.viewport, en[qu[S]], l].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: I,
        onMouseLeave: k,
        children: a.filter((E) => E.position === S).map((E) => /* @__PURE__ */ M(
          "div",
          {
            role: E.severity === "danger" ? "alert" : "status",
            "data-paused": s ? "true" : "false",
            "data-clickable": E.closeOnClick ? "true" : "false",
            className: [
              en.toast,
              en[E.severity],
              E.leaving ? en.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: E.click || E.closeOnClick ? () => {
              E.click?.(E.payload), E.closeOnClick && v(E.id);
            } : void 0,
            children: [
              /* @__PURE__ */ M("div", { className: en.content, children: [
                /* @__PURE__ */ o("div", { className: en.title, children: E.title }),
                E.description && /* @__PURE__ */ o("div", { className: en.description, children: E.description }),
                (E.action || E.cancel) && /* @__PURE__ */ M("div", { className: en.actions, children: [
                  E.action && /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      className: en.action,
                      onClick: () => {
                        E.action?.onClick?.(), v(E.id);
                      },
                      children: E.action.label
                    }
                  ),
                  E.cancel && /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      className: en.cancel,
                      onClick: () => {
                        E.cancel?.onClick?.(), v(E.id);
                      },
                      children: E.cancel.label
                    }
                  )
                ] })
              ] }),
              E.dismissible && /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: en.dismiss,
                  onClick: () => v(E.id),
                  "aria-label": "Dismiss notification",
                  children: /* @__PURE__ */ o(Me, { icon: "close", size: "sm" })
                }
              ),
              E.showProgress && E.durationMs > 0 && /* @__PURE__ */ o(
                "div",
                {
                  className: en.progress,
                  style: { animationDuration: `${E.durationMs}ms` }
                }
              )
            ]
          },
          E.id
        ))
      },
      S
    ))
  ] });
}
function yo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Ku(e) {
  if (Array.isArray(e)) return e;
}
function Wu(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, l, a, d, s = [], i = !0, c = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(i = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); i = !0) ;
    } catch (f) {
      c = !0, l = f;
    } finally {
      try {
        if (!i && n.return != null && (d = n.return(), Object(d) !== d)) return;
      } finally {
        if (c) throw l;
      }
    }
    return s;
  }
}
function Gu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Vu(e, t) {
  return Ku(e) || Wu(e, t) || Yu(e, t) || Gu();
}
function Yu(e, t) {
  if (e) {
    if (typeof e == "string") return yo(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? yo(e, t) : void 0;
  }
}
const gl = Object.entries, xo = Object.setPrototypeOf, Xu = Object.isFrozen, Zu = Object.getPrototypeOf, Ju = Object.getOwnPropertyDescriptor;
let kt = Object.freeze, St = Object.seal, hr = Object.create, bl = typeof Reflect < "u" && Reflect, Rs = bl.apply, Ps = bl.construct;
kt || (kt = function(t) {
  return t;
});
St || (St = function(t) {
  return t;
});
Rs || (Rs = function(t, n) {
  for (var r = arguments.length, l = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++) l[a - 2] = arguments[a];
  return t.apply(n, l);
});
Ps || (Ps = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++) r[l - 1] = arguments[l];
  return new t(...r);
});
const rr = bt(Array.prototype.forEach), Qu = bt(Array.prototype.lastIndexOf), vo = bt(Array.prototype.pop), Er = bt(Array.prototype.push), ef = bt(Array.prototype.splice), gr = Array.isArray, Br = bt(String.prototype.toLowerCase), Ss = bt(String.prototype.toString), wo = bt(String.prototype.match), Tr = bt(String.prototype.replace), ko = bt(String.prototype.indexOf), tf = bt(String.prototype.trim), nf = bt(Number.prototype.toString), rf = bt(Boolean.prototype.toString), No = typeof BigInt > "u" ? null : bt(BigInt.prototype.toString), Oo = typeof Symbol > "u" ? null : bt(Symbol.prototype.toString), Vt = bt(Object.prototype.hasOwnProperty), Cr = bt(Object.prototype.toString), zt = bt(RegExp.prototype.test), Hn = sf(TypeError);
function bt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++) r[l - 1] = arguments[l];
    return Rs(e, t, r);
  };
}
function sf(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return Ps(e, n);
  };
}
function qe(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Br;
  if (xo && xo(e, null), !gr(t)) return e;
  let r = t.length;
  for (; r--; ) {
    let l = t[r];
    if (typeof l == "string") {
      const a = n(l);
      a !== l && (Xu(t) || (t[r] = a), l = a);
    }
    e[l] = !0;
  }
  return e;
}
function of(e) {
  for (let t = 0; t < e.length; t++) Vt(e, t) || (e[t] = null);
  return e;
}
function sn(e) {
  const t = hr(null);
  for (const r of gl(e)) {
    var n = Vu(r, 2);
    const l = n[0], a = n[1];
    Vt(e, l) && (gr(a) ? t[l] = of(a) : a && typeof a == "object" && a.constructor === Object ? t[l] = sn(a) : t[l] = a);
  }
  return t;
}
function lf(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return nf(e);
    case "boolean":
      return rf(e);
    case "bigint":
      return No ? No(e) : "0";
    case "symbol":
      return Oo ? Oo(e) : "Symbol()";
    case "undefined":
      return Cr(e);
    case "function":
    case "object": {
      if (e === null) return Cr(e);
      const t = e, n = fn(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : Cr(r);
      }
      return Cr(e);
    }
    default:
      return Cr(e);
  }
}
function fn(e, t) {
  for (; e !== null; ) {
    const r = Ju(e, t);
    if (r) {
      if (r.get) return bt(r.get);
      if (typeof r.value == "function") return bt(r.value);
    }
    e = Zu(e);
  }
  function n() {
    return null;
  }
  return n;
}
function af(e) {
  try {
    return zt(e, ""), !0;
  } catch {
    return !1;
  }
}
const So = kt([
  "a",
  "abbr",
  "acronym",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "bdi",
  "bdo",
  "big",
  "blink",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "content",
  "data",
  "datalist",
  "dd",
  "decorator",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "element",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meter",
  "nav",
  "nobr",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "search",
  "section",
  "select",
  "shadow",
  "slot",
  "small",
  "source",
  "spacer",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
]), $s = kt([
  "svg",
  "a",
  "altglyph",
  "altglyphdef",
  "altglyphitem",
  "animatecolor",
  "animatemotion",
  "animatetransform",
  "circle",
  "clippath",
  "defs",
  "desc",
  "ellipse",
  "enterkeyhint",
  "exportparts",
  "filter",
  "font",
  "g",
  "glyph",
  "glyphref",
  "hkern",
  "image",
  "inputmode",
  "line",
  "lineargradient",
  "marker",
  "mask",
  "metadata",
  "mpath",
  "part",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialgradient",
  "rect",
  "stop",
  "style",
  "switch",
  "symbol",
  "text",
  "textpath",
  "title",
  "tref",
  "tspan",
  "view",
  "vkern"
]), Es = kt([
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence"
]), cf = kt([
  "animate",
  "color-profile",
  "cursor",
  "discard",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignobject",
  "hatch",
  "hatchpath",
  "mesh",
  "meshgradient",
  "meshpatch",
  "meshrow",
  "missing-glyph",
  "script",
  "set",
  "solidcolor",
  "unknown",
  "use"
]), Ts = kt([
  "math",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mglyph",
  "mi",
  "mlabeledtr",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mspace",
  "msqrt",
  "mstyle",
  "msub",
  "msup",
  "msubsup",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover",
  "mprescripts"
]), df = kt([
  "maction",
  "maligngroup",
  "malignmark",
  "mlongdiv",
  "mscarries",
  "mscarry",
  "msgroup",
  "mstack",
  "msline",
  "msrow",
  "semantics",
  "annotation",
  "annotation-xml",
  "mprescripts",
  "none"
]), $o = kt(["#text"]), Eo = kt([
  "accept",
  "action",
  "align",
  "alt",
  "autocapitalize",
  "autocomplete",
  "autopictureinpicture",
  "autoplay",
  "background",
  "bgcolor",
  "border",
  "capture",
  "cellpadding",
  "cellspacing",
  "checked",
  "cite",
  "class",
  "clear",
  "color",
  "cols",
  "colspan",
  "command",
  "commandfor",
  "controls",
  "controlslist",
  "coords",
  "crossorigin",
  "datetime",
  "decoding",
  "default",
  "dir",
  "disabled",
  "disablepictureinpicture",
  "disableremoteplayback",
  "download",
  "draggable",
  "enctype",
  "enterkeyhint",
  "exportparts",
  "face",
  "for",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hreflang",
  "id",
  "inert",
  "inputmode",
  "integrity",
  "ismap",
  "kind",
  "label",
  "lang",
  "list",
  "loading",
  "loop",
  "low",
  "max",
  "maxlength",
  "media",
  "method",
  "min",
  "minlength",
  "multiple",
  "muted",
  "name",
  "nonce",
  "noshade",
  "novalidate",
  "nowrap",
  "open",
  "optimum",
  "part",
  "pattern",
  "placeholder",
  "playsinline",
  "popover",
  "popovertarget",
  "popovertargetaction",
  "poster",
  "preload",
  "pubdate",
  "radiogroup",
  "readonly",
  "rel",
  "required",
  "rev",
  "reversed",
  "role",
  "rows",
  "rowspan",
  "spellcheck",
  "scope",
  "selected",
  "shape",
  "size",
  "sizes",
  "slot",
  "span",
  "srclang",
  "start",
  "src",
  "srcset",
  "step",
  "style",
  "summary",
  "tabindex",
  "title",
  "translate",
  "type",
  "usemap",
  "valign",
  "value",
  "width",
  "wrap",
  "xmlns"
]), Cs = kt([
  "accent-height",
  "accumulate",
  "additive",
  "alignment-baseline",
  "amplitude",
  "ascent",
  "attributename",
  "attributetype",
  "azimuth",
  "basefrequency",
  "baseline-shift",
  "begin",
  "bias",
  "by",
  "class",
  "clip",
  "clippathunits",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "cx",
  "cy",
  "d",
  "dx",
  "dy",
  "diffuseconstant",
  "direction",
  "display",
  "divisor",
  "dominant-baseline",
  "dur",
  "edgemode",
  "elevation",
  "end",
  "exponent",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "filterunits",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyph-name",
  "glyphref",
  "gradientunits",
  "gradienttransform",
  "height",
  "href",
  "id",
  "image-rendering",
  "in",
  "in2",
  "intercept",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kerning",
  "keypoints",
  "keysplines",
  "keytimes",
  "lang",
  "lengthadjust",
  "letter-spacing",
  "kernelmatrix",
  "kernelunitlength",
  "lighting-color",
  "local",
  "marker-end",
  "marker-mid",
  "marker-start",
  "markerheight",
  "markerunits",
  "markerwidth",
  "maskcontentunits",
  "maskunits",
  "max",
  "mask",
  "mask-type",
  "media",
  "method",
  "mode",
  "min",
  "name",
  "numoctaves",
  "offset",
  "operator",
  "opacity",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "paint-order",
  "path",
  "pathlength",
  "patterncontentunits",
  "patterntransform",
  "patternunits",
  "pointer-events",
  "points",
  "preservealpha",
  "preserveaspectratio",
  "primitiveunits",
  "r",
  "rx",
  "ry",
  "radius",
  "refx",
  "refy",
  "repeatcount",
  "repeatdur",
  "restart",
  "result",
  "rotate",
  "scale",
  "seed",
  "shape-rendering",
  "slope",
  "specularconstant",
  "specularexponent",
  "spreadmethod",
  "startoffset",
  "stddeviation",
  "stitchtiles",
  "stop-color",
  "stop-opacity",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke",
  "stroke-width",
  "style",
  "surfacescale",
  "systemlanguage",
  "tabindex",
  "tablevalues",
  "targetx",
  "targety",
  "transform",
  "transform-origin",
  "text-anchor",
  "text-decoration",
  "text-orientation",
  "text-rendering",
  "textlength",
  "type",
  "u1",
  "u2",
  "unicode",
  "values",
  "vector-effect",
  "viewbox",
  "visibility",
  "version",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "width",
  "word-spacing",
  "wrap",
  "writing-mode",
  "xchannelselector",
  "ychannelselector",
  "x",
  "x1",
  "x2",
  "xmlns",
  "y",
  "y1",
  "y2",
  "z",
  "zoomandpan"
]), To = kt([
  "accent",
  "accentunder",
  "align",
  "bevelled",
  "close",
  "columnalign",
  "columnlines",
  "columnspacing",
  "columnspan",
  "denomalign",
  "depth",
  "dir",
  "display",
  "displaystyle",
  "encoding",
  "fence",
  "frame",
  "height",
  "href",
  "id",
  "largeop",
  "length",
  "linethickness",
  "lquote",
  "lspace",
  "mathbackground",
  "mathcolor",
  "mathsize",
  "mathvariant",
  "maxsize",
  "minsize",
  "movablelimits",
  "notation",
  "numalign",
  "open",
  "rowalign",
  "rowlines",
  "rowspacing",
  "rowspan",
  "rspace",
  "rquote",
  "scriptlevel",
  "scriptminsize",
  "scriptsizemultiplier",
  "selection",
  "separator",
  "separators",
  "stretchy",
  "subscriptshift",
  "supscriptshift",
  "symmetric",
  "voffset",
  "width",
  "xmlns"
]), Jr = kt([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]), uf = St(/{{[\w\W]*|^[\w\W]*}}/g), ff = St(/<%[\w\W]*|^[\w\W]*%>/g), _f = St(/\${[\w\W]*/g), pf = St(/^data-[\-\w.\u00B7-\uFFFF]+$/), mf = St(/^aria-[\-\w]+$/), Co = St(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), hf = St(/^(?:\w+script|data):/i), gf = St(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), bf = St(/^html$/i), yf = St(/^[a-z][.\w]*(-[.\w]+)+$/i), Ao = St(/<[/\w!]/g), Do = St(/<[/\w]/g), xf = St(/<\/no(script|embed|frames)/i), vf = St(/\/>/i), tn = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  entityNode: 6,
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
}, yl = [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
], wf = kt(qe({}, yl)), kf = (function() {
  const e = {};
  return rr(yl, (t) => {
    e[t] = St(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), kt(e);
})(), Nf = function() {
  return typeof window > "u" ? null : window;
}, Of = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function") return null;
  let r = null;
  const l = "data-tt-policy-suffix";
  n && n.hasAttribute(l) && (r = n.getAttribute(l));
  const a = "dompurify" + (r ? "#" + r : "");
  try {
    return t.createPolicy(a, {
      createHTML(d) {
        return d;
      },
      createScriptURL(d) {
        return d;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + a + " could not be created."), null;
  }
}, Mo = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
}, Un = function(t, n, r, l) {
  return Vt(t, n) && gr(t[n]) ? qe(l.base ? sn(l.base) : {}, t[n], l.transform) : r;
}, As = function(t, n, r) {
  const l = Vt(t, n) ? t[n] : void 0;
  return l && typeof l == "object" ? sn(l) : r();
};
function xl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Nf();
  const t = (se) => xl(se);
  if (t.version = "3.4.16", t.removed = [], !e || !e.document || e.document.nodeType !== tn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, l = r.currentScript;
  e.DocumentFragment;
  const a = e.HTMLTemplateElement, d = e.Node, s = e.Element, i = e.NodeFilter;
  e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const c = e.DOMParser, f = e.trustedTypes, u = s.prototype, h = fn(u, "cloneNode"), m = fn(u, "remove"), b = fn(u, "removeAttributeNode"), g = fn(u, "nextSibling"), y = fn(u, "childNodes"), p = fn(u, "parentNode"), _ = fn(u, "shadowRoot"), x = fn(u, "attributes"), N = d && d.prototype ? fn(d.prototype, "nodeType") : null, v = d && d.prototype ? fn(d.prototype, "nodeName") : null, $ = d && d.prototype ? fn(d.prototype, "ownerDocument") : null, O = function(w) {
    return N ? N(w) : w.nodeType;
  }, T = function(w) {
    return v ? v(w) : w.nodeName;
  };
  if (typeof a == "function") {
    const se = n.createElement("template");
    se.content && se.content.ownerDocument && (n = se.content.ownerDocument);
  }
  let A, C = "", D, I = !1, k = 0;
  const S = function() {
    if (k > 0) throw Hn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, E = function(w) {
    S(), k++;
    try {
      return A.createHTML(w);
    } finally {
      k--;
    }
  }, P = function(w) {
    S(), k++;
    try {
      return A.createScriptURL(w);
    } finally {
      k--;
    }
  }, L = function() {
    return I || (D = Of(f, l), I = !0), D;
  }, j = n, F = j.implementation, X = j.createNodeIterator, ie = j.createDocumentFragment, te = j.getElementsByTagName, we = r.importNode;
  let le = Mo();
  t.isSupported = typeof gl == "function" && typeof p == "function" && F && F.createHTMLDocument !== void 0;
  const _e = uf, W = ff, he = _f, ue = pf, ye = mf, pe = hf, De = gf, G = yf;
  let $e = Co, ne = null;
  const Ae = qe({}, [
    ...So,
    ...$s,
    ...Es,
    ...Ts,
    ...$o
  ]);
  let fe = null;
  const Fe = qe({}, [
    ...Eo,
    ...Cs,
    ...To,
    ...Jr
  ]);
  let Ge = Object.seal(hr(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), Je = null, At = null;
  const lt = Object.seal(hr(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let yt = !0, Z = !0, z = !1, Y = !0, Q = !1, ge = !0, ae = !1, Ee = !1, je = null, Ze = null, Qe = !1, nt = !1, Xt = !1, re = !1, Le = !0, Nt = !1;
  const Rt = "user-content-";
  let xt = !0, Ie = !1, Ke = {}, vt = null;
  const $t = qe({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    "selectedcontent",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]);
  let at = null;
  const V = qe({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]);
  let me = null;
  const Ve = qe({}, [
    "alt",
    "class",
    "for",
    "id",
    "label",
    "name",
    "pattern",
    "placeholder",
    "role",
    "summary",
    "title",
    "value",
    "style",
    "xmlns"
  ]), Ye = "http://www.w3.org/1998/Math/MathML", Pt = "http://www.w3.org/2000/svg", Xe = "http://www.w3.org/1999/xhtml";
  let K = Xe, ee = !1, de = null;
  const Ne = qe({}, [
    Ye,
    Pt,
    Xe
  ], Ss), ke = kt([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let Ce = qe({}, ke);
  const We = kt(["annotation-xml"]);
  let Be = qe({}, We);
  const it = qe({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]);
  let rt = null;
  const Et = ["application/xhtml+xml", "text/html"], mt = "text/html";
  let ze = null, Tt = null;
  const Zt = n.createElement("form"), _n = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, Tn = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Tt && Tt === w) return;
    (!w || typeof w != "object") && (w = {}), w = sn(w), rt = Et.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? mt : w.PARSER_MEDIA_TYPE, ze = rt === "application/xhtml+xml" ? Ss : Br, ne = Un(w, "ALLOWED_TAGS", Ae, { transform: ze }), fe = Un(w, "ALLOWED_ATTR", Fe, { transform: ze }), de = Un(w, "ALLOWED_NAMESPACES", Ne, { transform: Ss }), me = Un(w, "ADD_URI_SAFE_ATTR", Ve, {
      transform: ze,
      base: Ve
    }), at = Un(w, "ADD_DATA_URI_TAGS", V, {
      transform: ze,
      base: V
    }), vt = Un(w, "FORBID_CONTENTS", $t, { transform: ze }), Je = Un(w, "FORBID_TAGS", sn({}), { transform: ze }), At = Un(w, "FORBID_ATTR", sn({}), { transform: ze }), Ke = Vt(w, "USE_PROFILES") ? w.USE_PROFILES && typeof w.USE_PROFILES == "object" ? sn(w.USE_PROFILES) : w.USE_PROFILES : !1, yt = w.ALLOW_ARIA_ATTR !== !1, Z = w.ALLOW_DATA_ATTR !== !1, z = w.ALLOW_UNKNOWN_PROTOCOLS || !1, Y = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Q = w.SAFE_FOR_TEMPLATES || !1, ge = w.SAFE_FOR_XML !== !1, ae = w.WHOLE_DOCUMENT || !1, nt = w.RETURN_DOM || !1, Xt = w.RETURN_DOM_FRAGMENT || !1, re = w.RETURN_TRUSTED_TYPE || !1, Qe = w.FORCE_BODY || !1, Le = w.SANITIZE_DOM !== !1, Nt = w.SANITIZE_NAMED_PROPS || !1, xt = w.KEEP_CONTENT !== !1, Ie = w.IN_PLACE || !1, $e = af(w.ALLOWED_URI_REGEXP) ? w.ALLOWED_URI_REGEXP : Co, K = typeof w.NAMESPACE == "string" ? w.NAMESPACE : Xe, Ce = As(w, "MATHML_TEXT_INTEGRATION_POINTS", () => qe({}, ke)), Be = As(w, "HTML_INTEGRATION_POINTS", () => qe({}, We));
    const R = As(w, "CUSTOM_ELEMENT_HANDLING", () => hr(null));
    if (Ge = hr(null), Vt(R, "tagNameCheck") && _n(R.tagNameCheck) && (Ge.tagNameCheck = R.tagNameCheck), Vt(R, "attributeNameCheck") && _n(R.attributeNameCheck) && (Ge.attributeNameCheck = R.attributeNameCheck), Vt(R, "allowCustomizedBuiltInElements") && typeof R.allowCustomizedBuiltInElements == "boolean" && (Ge.allowCustomizedBuiltInElements = R.allowCustomizedBuiltInElements), St(Ge), Q && (Z = !1), Xt && (nt = !0), Ke && (ne = qe({}, $o), fe = hr(null), Ke.html === !0 && (qe(ne, So), qe(fe, Eo)), Ke.svg === !0 && (qe(ne, $s), qe(fe, Cs), qe(fe, Jr)), Ke.svgFilters === !0 && (qe(ne, Es), qe(fe, Cs), qe(fe, Jr)), Ke.mathMl === !0 && (qe(ne, Ts), qe(fe, To), qe(fe, Jr))), lt.tagCheck = null, lt.attributeCheck = null, Vt(w, "ADD_TAGS") && (typeof w.ADD_TAGS == "function" ? lt.tagCheck = w.ADD_TAGS : gr(w.ADD_TAGS) && (ne === Ae && (ne = sn(ne)), qe(ne, w.ADD_TAGS, ze))), Vt(w, "ADD_ATTR") && (typeof w.ADD_ATTR == "function" ? lt.attributeCheck = w.ADD_ATTR : gr(w.ADD_ATTR) && (fe === Fe && (fe = sn(fe)), qe(fe, w.ADD_ATTR, ze))), Vt(w, "ADD_FORBID_CONTENTS") && gr(w.ADD_FORBID_CONTENTS) && (vt === $t && (vt = sn(vt)), qe(vt, w.ADD_FORBID_CONTENTS, ze)), xt && (ne["#text"] = !0), ae && qe(ne, [
      "html",
      "head",
      "body"
    ]), ne.table && (qe(ne, ["tbody"]), delete Je.tbody), w.TRUSTED_TYPES_POLICY) {
      if (typeof w.TRUSTED_TYPES_POLICY.createHTML != "function") throw Hn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof w.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Hn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const J = A;
      A = w.TRUSTED_TYPES_POLICY;
      try {
        C = E("");
      } catch (ce) {
        throw A = J, ce;
      }
    } else w.TRUSTED_TYPES_POLICY === null ? (A = void 0, C = "") : (A === void 0 && (A = L()), A && typeof C == "string" && (C = E("")));
    kt && kt(w), Tt = w;
  }, jn = qe({}, [
    ...$s,
    ...Es,
    ...cf
  ]), wn = qe({}, [...Ts, ...df]), Kr = function(w, R, J) {
    return R.namespaceURI === Xe ? w === "svg" : R.namespaceURI === Ye ? w === "svg" && (J === "annotation-xml" || Ce[J]) : !!jn[w];
  }, gs = function(w, R, J) {
    return R.namespaceURI === Xe ? w === "math" : R.namespaceURI === Pt ? w === "math" && Be[J] : !!wn[w];
  }, bs = function(w, R, J) {
    return R.namespaceURI === Pt && !Be[J] || R.namespaceURI === Ye && !Ce[J] ? !1 : !wn[w] && (it[w] || !jn[w]);
  }, ys = function(w) {
    let R = p(w);
    (!R || !R.tagName) && (R = {
      namespaceURI: K,
      tagName: "template"
    });
    const J = Br(w.tagName), ce = Br(R.tagName);
    return de[w.namespaceURI] ? w.namespaceURI === Pt ? Kr(J, R, ce) : w.namespaceURI === Ye ? gs(J, R, ce) : w.namespaceURI === Xe ? bs(J, R, ce) : !!(rt === "application/xhtml+xml" && de[w.namespaceURI]) : !1;
  }, pn = function(w) {
    Er(t.removed, { element: w });
    try {
      p(w).removeChild(w);
    } catch {
      if (m(w), !p(w)) throw Hn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Wr = function(w, R, J) {
    try {
      b(w, R);
    } catch {
      try {
        w.removeAttribute(J);
      } catch {
      }
    }
  }, mn = function(w) {
    H(w);
    const R = y(w);
    if (R) {
      const ce = [];
      rr(R, (Te) => {
        Er(ce, Te);
      }), rr(ce, (Te) => {
        try {
          m(Te);
        } catch {
        }
      });
    }
    const J = x(w);
    if (J) for (let ce = J.length - 1; ce >= 0; --ce) {
      const Te = J[ce], Pe = Te && Te.name;
      typeof Pe == "string" && Wr(w, Te, Pe);
    }
  }, jt = function(w, R, J) {
    if (!J) try {
      J = R.getAttributeNode(w);
    } catch {
      J = null;
    }
    Er(t.removed, {
      attribute: J || null,
      from: R
    });
    try {
      J ? b(R, J) : R.removeAttribute(w);
    } catch {
      try {
        R.removeAttribute(w);
      } catch {
      }
    }
    if (w === "is")
      if (nt || Xt) try {
        pn(R);
      } catch {
      }
      else try {
        R.setAttribute(w, "");
      } catch {
      }
  }, yr = function(w) {
    const R = x(w);
    if (R)
      for (let J = R.length - 1; J >= 0; --J) {
        const ce = R[J], Te = ce && ce.name;
        typeof Te != "string" || fe[ze(Te)] || Wr(w, ce, Te);
      }
  }, H = function(w) {
    const R = [w];
    for (; R.length > 0; ) {
      const J = R.pop();
      O(J) === tn.element && yr(J);
      const ce = y(J);
      if (ce) for (let Te = ce.length - 1; Te >= 0; --Te) R.push(ce[Te]);
    }
  }, U = function(w, R) {
    return ge ? w === "patchsrc" ? !0 : w === "for" && R !== "label" && R !== "output" : !1;
  }, be = function(w) {
    if (!ge) return;
    const R = [w];
    for (; R.length > 0; ) {
      const J = R.pop(), ce = O(J);
      if (ce === tn.processingInstruction || ce === tn.comment && zt(Do, J.data)) {
        try {
          m(J);
        } catch {
        }
        continue;
      }
      if (ce === tn.element) {
        const Pe = J, He = ze(T(J));
        try {
          Pe.hasAttribute && Pe.hasAttribute("patchsrc") && Pe.removeAttribute("patchsrc"), Pe.hasAttribute && Pe.hasAttribute("for") && U("for", He) && Pe.removeAttribute("for");
        } catch {
        }
      }
      const Te = y(J);
      if (Te) for (let Pe = Te.length - 1; Pe >= 0; --Pe) R.push(Te[Pe]);
    }
  }, xe = function(w) {
    let R = null, J = null;
    if (Qe) w = "<remove></remove>" + w;
    else {
      const Pe = wo(w, /^[\r\n\t ]+/);
      J = Pe && Pe[0];
    }
    rt === "application/xhtml+xml" && K === Xe && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    const ce = A ? E(w) : w;
    if (K === Xe) try {
      R = new c().parseFromString(ce, rt);
    } catch {
    }
    if (!R || !R.documentElement) {
      R = F.createDocument(K, "template", null);
      try {
        R.documentElement.innerHTML = ee ? C : ce;
      } catch {
      }
    }
    const Te = R.body || R.documentElement;
    return w && J && Te.insertBefore(n.createTextNode(J), Te.childNodes[0] || null), K === Xe ? te.call(R, ae ? "html" : "body")[0] : ae ? R.documentElement : Te;
  }, et = function(w) {
    const R = $ ? $(w) : w.ownerDocument;
    return X.call(R || w, w, i.SHOW_ELEMENT | i.SHOW_COMMENT | i.SHOW_TEXT | i.SHOW_PROCESSING_INSTRUCTION | i.SHOW_CDATA_SECTION, null);
  }, Dt = function(w) {
    return w = Tr(w, _e, " "), w = Tr(w, W, " "), w = Tr(w, he, " "), w;
  }, wt = function(w) {
    var R;
    w.normalize();
    const J = $ ? $(w) : w.ownerDocument, ce = X.call(J || w, w, i.SHOW_TEXT | i.SHOW_COMMENT | i.SHOW_CDATA_SECTION | i.SHOW_PROCESSING_INSTRUCTION, null);
    let Te = ce.nextNode();
    for (; Te; )
      Te.data = Dt(Te.data), Te = ce.nextNode();
    const Pe = (R = w.querySelectorAll) === null || R === void 0 ? void 0 : R.call(w, "template");
    Pe && rr(Pe, (He) => {
      Ct(He.content) && wt(He.content);
    });
  }, hn = function(w) {
    const R = v ? v(w) : null;
    return typeof R != "string" || ze(R) !== "form" ? !1 : typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || w.attributes !== x(w) || typeof w.removeAttribute != "function" || typeof w.removeAttributeNode != "function" || typeof w.getAttributeNode != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function" || w.nodeType !== N(w) || w.childNodes !== y(w);
  }, Ct = function(w) {
    if (!N || typeof w != "object" || w === null) return !1;
    try {
      return N(w) === tn.documentFragment;
    } catch {
      return !1;
    }
  }, gt = function(w) {
    if (!N || typeof w != "object" || w === null) return !1;
    try {
      return typeof N(w) == "number";
    } catch {
      return !1;
    }
  };
  function Jt(se, w, R) {
    se.length !== 0 && rr(se, (J) => {
      J.call(t, w, R, Tt);
    });
  }
  const xs = function(w, R) {
    return !!(ge && w.hasChildNodes() && !gt(w.firstElementChild) && zt(Ao, w.textContent) && zt(Ao, w.innerHTML) || ge && w.namespaceURI === Xe && wf[R] && (gt(w.firstElementChild) || typeof w.textContent == "string" && zt(kf[R], w.textContent)) || w.nodeType === tn.processingInstruction || ge && w.nodeType === tn.comment && zt(Do, w.data));
  }, Gr = function(w, R) {
    if (w instanceof RegExp) return zt(w, R);
    if (w instanceof Function) {
      for (var J = arguments.length, ce = new Array(J > 2 ? J - 2 : 0), Te = 2; Te < J; Te++) ce[Te - 2] = arguments[Te];
      return !!w(R, ...ce);
    }
    return !1;
  }, Rl = function(w, R, J) {
    if (!Je[R] && so(R) && Gr(Ge.tagNameCheck, R)) return !1;
    if (xt && !vt[R]) {
      const ce = p(w), Te = y(w);
      if (Te && ce) {
        const Pe = Te.length;
        for (let He = Pe - 1; He >= 0; --He) {
          const ct = w === J ? h(Te[He], !0) : Te[He];
          ce.insertBefore(ct, g(w));
        }
      }
    }
    return pn(w), !0;
  }, to = function(w, R, J, ce) {
    return w.length === 0 ? R : R === J || R === ce ? sn(R) : R;
  }, ar = function(w, R) {
    return w === R || p(w) !== null ? !1 : (Ie && H(w), !0);
  }, no = function(w, R) {
    if (Jt(le.beforeSanitizeElements, w, null), ar(w, R)) return !0;
    if (hn(w))
      return pn(w), !0;
    const J = ze(T(w));
    if (ne = to(le.uponSanitizeElement, ne, Ae, je), Jt(le.uponSanitizeElement, w, {
      tagName: J,
      allowedTags: ne
    }), ar(w, R)) return !0;
    if (xs(w, J))
      return pn(w), !0;
    if (Je[J] || !(lt.tagCheck instanceof Function && lt.tagCheck(J)) && !ne[J]) {
      const ce = Rl(w, J, R);
      return ce === !1 && (Jt(le.afterSanitizeElements, w, null), ar(w, R)) ? !0 : ce;
    }
    if (O(w) === tn.element && !ys(w) || (J === "noscript" || J === "noembed" || J === "noframes") && zt(xf, w.innerHTML))
      return pn(w), !0;
    if (Q && w.nodeType === tn.text) {
      const ce = Dt(w.textContent);
      w.textContent !== ce && (Er(t.removed, { element: w.cloneNode() }), w.textContent = ce);
    }
    return Jt(le.afterSanitizeElements, w, null), ar(w, R);
  }, ro = function(w, R, J) {
    if (At[R] || U(R, w) || Le && (R === "id" || R === "name") && (J in n || J in Zt)) return !1;
    const ce = fe[R] || lt.attributeCheck instanceof Function && lt.attributeCheck(R, w);
    return Z && zt(ue, R) || yt && zt(ye, R) ? !0 : ce ? me[R] || zt($e, Tr(J, De, "")) || (R === "src" || R === "xlink:href" || R === "href") && w !== "script" && ko(J, "data:") === 0 && at[w] || z && !zt(pe, Tr(J, De, "")) ? !0 : !J : so(w) && Gr(Ge.tagNameCheck, w) && Gr(Ge.attributeNameCheck, R, w) || R === "is" && Ge.allowCustomizedBuiltInElements && Gr(Ge.tagNameCheck, J);
  }, Pl = qe({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), so = function(w) {
    return !Pl[Br(w)] && zt(G, w);
  }, jl = function(w, R, J, ce) {
    if (A && typeof f == "object" && typeof f.getAttributeType == "function" && !J) switch (f.getAttributeType(w, R)) {
      case "TrustedHTML":
        return E(ce);
      case "TrustedScriptURL":
        return P(ce);
    }
    return ce;
  }, Bl = function(w, R, J, ce) {
    try {
      return J ? w.setAttributeNS(J, R, ce) : w.setAttribute(R, ce), hn(w) ? (pn(w), !1) : !0;
    } catch {
      return jt(R, w), !1;
    }
  }, oo = function(w, R) {
    if (Jt(le.beforeSanitizeAttributes, w, null), ar(w, R)) return;
    const J = w.attributes;
    if (!J || hn(w)) return;
    fe = to(le.uponSanitizeAttribute, fe, Fe, Ze);
    const ce = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: fe,
      forceKeepAttr: void 0
    };
    let Te = J.length;
    const Pe = ze(w.nodeName);
    for (; Te--; ) {
      const He = J[Te], ct = He.name, an = He.namespaceURI, Qt = He.value, ir = ze(ct), ws = Qt;
      let Bt = ct === "value" ? ws : tf(ws), lo = !1;
      if (ce.attrName = ir, ce.attrValue = Bt, ce.keepAttr = !0, ce.forceKeepAttr = void 0, Jt(le.uponSanitizeAttribute, w, ce), Bt = ce.attrValue, Nt && (ir === "id" || ir === "name") && ko(Bt, Rt) !== 0 && (jt(ct, w, He), Bt = Rt + Bt, lo = !0), ge && zt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Bt)) {
        jt(ct, w, He);
        continue;
      }
      if (ir === "attributename" && wo(Bt, "href")) {
        jt(ct, w, He);
        continue;
      }
      if (!ce.forceKeepAttr) {
        if (!ce.keepAttr) {
          jt(ct, w, He);
          continue;
        }
        if (!Y && zt(vf, Bt)) {
          jt(ct, w, He);
          continue;
        }
        if (Q && (Bt = Dt(Bt)), !ro(Pe, ir, Bt)) {
          jt(ct, w, He);
          continue;
        }
        Bt = jl(Pe, ir, an, Bt), Bt !== ws && Bl(w, ct, an, Bt) && lo && vo(t.removed);
      }
    }
    Jt(le.afterSanitizeAttributes, w, null), ar(w, R);
  }, Vr = function(w) {
    let R = null;
    const J = et(w);
    for (Jt(le.beforeSanitizeShadowDOM, w, null); R = J.nextNode(); )
      if (Jt(le.uponSanitizeShadowNode, R, null), no(R, w), oo(R, w), Ct(R.content) && Vr(R.content), O(R) === tn.element) {
        const ce = _(R);
        Ct(ce) && (vs(ce), Vr(ce));
      }
    Jt(le.afterSanitizeShadowDOM, w, null);
  }, vs = function(w) {
    const R = [{
      node: w,
      shadow: null
    }];
    for (; R.length > 0; ) {
      const J = R.pop();
      if (J.shadow) {
        Vr(J.shadow);
        continue;
      }
      const ce = J.node, Te = O(ce) === tn.element, Pe = y(ce);
      if (Pe) for (let He = Pe.length - 1; He >= 0; --He) R.push({
        node: Pe[He],
        shadow: null
      });
      if (Te) {
        const He = v ? v(ce) : null;
        if (typeof He == "string" && ze(He) === "template") {
          const ct = ce.content;
          Ct(ct) && R.push({
            node: ct,
            shadow: null
          });
        }
      }
      if (Te) {
        const He = _(ce);
        Ct(He) && R.push({
          node: null,
          shadow: He
        }, {
          node: He,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(se) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, R = null, J = null, ce = null, Te = null;
    if (ee = !se, ee && (se = "<!-->"), typeof se != "string" && !gt(se) && (se = lf(se), typeof se != "string"))
      throw Hn("dirty is not a string, aborting");
    if (!t.isSupported) return se;
    Ee ? (ne = je, fe = Ze) : Tn(w), (le.uponSanitizeElement.length > 0 || le.uponSanitizeAttribute.length > 0) && (ne = sn(ne)), le.uponSanitizeAttribute.length > 0 && (fe = sn(fe)), t.removed = [];
    const Pe = Ie && typeof se != "string" && gt(se);
    if (Pe) {
      be(se);
      const an = T(se);
      if (typeof an == "string") {
        const Qt = ze(an);
        if (!ne[Qt] || Je[Qt])
          throw mn(se), Hn("root node is forbidden and cannot be sanitized in-place");
      }
      if (hn(se))
        throw mn(se), Hn("root node is clobbered and cannot be sanitized in-place");
      try {
        vs(se);
      } catch (Qt) {
        throw mn(se), Qt;
      }
    } else if (gt(se))
      R = xe("<!---->"), J = R.ownerDocument.importNode(se, !0), J.nodeType === tn.element && J.nodeName === "BODY" || J.nodeName === "HTML" ? R = J : R.appendChild(J), vs(R);
    else {
      if (!nt && !Q && !ae && se.indexOf("<") === -1) return A && re ? E(se) : se;
      if (R = xe(se), !R) return nt ? null : re ? C : "";
    }
    R && Qe && pn(R.firstChild);
    const He = Pe ? se : R;
    try {
      const an = et(He);
      for (; ce = an.nextNode(); )
        no(ce, He), oo(ce, He), Ct(ce.content) && Vr(ce.content);
    } catch (an) {
      throw Pe && (mn(se), rr(t.removed, (Qt) => {
        Qt.element && H(Qt.element);
      })), an;
    }
    if (Pe) {
      let an = !1;
      if (rr(t.removed, (Qt) => {
        Qt.element && (Qt.element === se && (an = !0), H(Qt.element));
      }), an) throw Hn("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return Q && wt(se), se;
    }
    if (nt) {
      if (Q && wt(R), Xt)
        for (Te = ie.call(R.ownerDocument); R.firstChild; ) Te.appendChild(R.firstChild);
      else Te = R;
      return (fe.shadowroot || fe.shadowrootmode) && (Te = we.call(r, Te, !0)), Te;
    }
    let ct = ae ? R.outerHTML : R.innerHTML;
    return ae && ne["!doctype"] && R.ownerDocument && R.ownerDocument.doctype && R.ownerDocument.doctype.name && zt(bf, R.ownerDocument.doctype.name) && (ct = "<!DOCTYPE " + R.ownerDocument.doctype.name + `>
` + ct), Q && (ct = Dt(ct)), A && re ? E(ct) : ct;
  }, t.setConfig = function() {
    let se = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Tn(se), Ee = !0, je = ne, Ze = fe;
  }, t.clearConfig = function() {
    Tt = null, Ee = !1, je = null, Ze = null, A = D, C = "";
  }, t.isValidAttribute = function(se, w, R) {
    Tt || Tn({});
    const J = ze(se), ce = ze(w);
    return ro(J, ce, R);
  }, t.addHook = function(se, w) {
    typeof w == "function" && Vt(le, se) && Er(le[se], w);
  }, t.removeHook = function(se, w) {
    if (Vt(le, se)) {
      if (w !== void 0) {
        const R = Qu(le[se], w);
        return R === -1 ? void 0 : ef(le[se], R, 1)[0];
      }
      return vo(le[se]);
    }
  }, t.removeHooks = function(se) {
    Vt(le, se) && (le[se] = []);
  }, t.removeAllHooks = function() {
    le = Mo();
  }, t;
}
var vl = xl();
function Hr(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function Sf(e) {
  const t = e.trim();
  return /^(https?:|mailto:|\/|#)/i.test(t) || /^[a-zA-Z0-9._~:/?#[\]@!$&'()*+,;=%-]+$/.test(t) && !/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(t) ? t : null;
}
const Qr = "\0";
function es(e, t) {
  const n = [];
  let r = e.replace(/`([^`\n]+)`/g, (l, a) => (n.push(`<code>${Hr(a)}</code>`), `${Qr}${n.length - 1}${Qr}`));
  return t || (r = Hr(r)), r = r.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/__(.+?)__/g, "<strong>$1</strong>").replace(new RegExp("(?<!\\w)\\*([^*\\n]+)\\*(?!\\w)", "g"), "<em>$1</em>").replace(new RegExp("(?<!\\w)_([^_\\n]+)_(?!\\w)", "g"), "<em>$1</em>").replace(/~~(.+?)~~/g, "<del>$1</del>").replace(
    /\[([^\]\n]+)\]\(([^)\n]*(?:\([^)\n]*\)[^)\n]*)*)\)/g,
    (l, a, d) => {
      const s = Sf(d);
      return s == null ? a : `<a href="${Hr(s)}">${a}</a>`;
    }
  ), r = r.replace(
    new RegExp(`${Qr}(\\d+)${Qr}`, "g"),
    (l, a) => n[Number(a)] ?? ""
  ), r;
}
function $f(e, t = {}) {
  const n = t.allowHtml === !0, r = e.replace(/\r\n?/g, `
`).split(`
`), l = [];
  let a = 0;
  const d = (s, i) => {
    const c = i ? "ol" : "ul";
    l.push(
      `<${c}>${s.map((f) => `<li>${es(f, n)}</li>`).join("")}</${c}>`
    );
  };
  for (; a < r.length; ) {
    const s = r[a];
    if (/^\s*$/.test(s)) {
      a += 1;
      continue;
    }
    const i = /^(#{1,6})\s+(.*)$/.exec(s);
    if (i) {
      l.push(
        `<h${i[1].length}>${es(i[2].trim(), n)}</h${i[1].length}>`
      ), a += 1;
      continue;
    }
    if (/^(`{3,}|~{3,})\s*(\w*)\s*$/.test(s)) {
      const h = /^(`{3,}|~{3,})\s*(\w*)\s*$/.exec(s)?.[2] ?? "", m = [];
      for (a += 1; a < r.length && !/^(`{3,}|~{3,})\s*$/.test(r[a]); )
        m.push(r[a]), a += 1;
      a += 1;
      const b = h ? ` class="language-${Hr(h)}"` : "";
      l.push(
        `<pre><code${b}>${Hr(m.join(`
`))}</code></pre>`
      );
      continue;
    }
    if (/^>\s?(.*)$/.test(s)) {
      const h = [];
      for (; a < r.length && /^>\s?(.*)$/.test(r[a]); )
        h.push(/^>\s?(.*)$/.exec(r[a])?.[1] ?? ""), a += 1;
      l.push(
        `<blockquote>${h.map((m) => `<p>${es(m, n)}</p>`).join("")}</blockquote>`
      );
      continue;
    }
    if (/^(\*\*\*|---|___)\s*$/.test(s.trim())) {
      l.push("<hr>"), a += 1;
      continue;
    }
    if (/^\s*[-*+]\s+(.*)$/.exec(s)) {
      const h = [];
      for (; a < r.length; ) {
        const m = /^\s*[-*+]\s+(.*)$/.exec(r[a]);
        if (!m) break;
        h.push(m[1]), a += 1;
      }
      d(h, !1);
      continue;
    }
    if (/^\s*\d+[.)]\s+(.*)$/.exec(s)) {
      const h = [];
      for (; a < r.length; ) {
        const m = /^\s*\d+[.)]\s+(.*)$/.exec(r[a]);
        if (!m) break;
        h.push(m[1]), a += 1;
      }
      d(h, !0);
      continue;
    }
    const u = [];
    for (; a < r.length && !/^\s*$/.test(r[a]) && !/^(#{1,6}\s|`{3,}|~{3,}|>|(\*\*\*|---|___)\s*$|\s*[-*+]\s+|\s*\d+[.)]\s+)/.test(
      r[a]
    ); )
      u.push(r[a]), a += 1;
    l.push(`<p>${es(u.join(`
`), n)}</p>`);
  }
  return l.join(`
`);
}
const Ef = "_markdown_1vu4b_3", Tf = "_resize_1vu4b_61", Io = {
  markdown: Ef,
  resize: Tf
};
function lO({
  value: e,
  allowHtml: t = !1,
  resize: n = !1,
  ariaLabel: r = "Markdown content",
  className: l
}) {
  const a = Se(
    () => vl.sanitize($f(e, { allowHtml: t })),
    [e, t]
  );
  return /* @__PURE__ */ o(
    "div",
    {
      className: [Io.markdown, n ? Io.resize : "", l].filter(Boolean).join(" "),
      role: "article",
      "aria-label": r,
      dangerouslySetInnerHTML: { __html: a }
    }
  );
}
const Cf = "_editor_2a7al_3", Af = "_toolbar_2a7al_13", Df = "_tool_2a7al_13", Mf = "_separator_2a7al_56", If = "_area_2a7al_63", zf = "_source_2a7al_73", Lf = "_alignGlyph_2a7al_84", Rf = "_colorInput_2a7al_89", Pf = "_select_2a7al_98", Ot = {
  editor: Cf,
  toolbar: Af,
  tool: Df,
  separator: Mf,
  area: If,
  source: zf,
  alignGlyph: Lf,
  colorInput: Rf,
  select: Pf
}, jf = [
  "bold",
  "italic",
  "underline",
  "strikethrough",
  "separator",
  "foreColor",
  "backgroundColor",
  "separator",
  "formatBlock",
  "fontName",
  "fontSize",
  "separator",
  "unorderedList",
  "orderedList",
  "indent",
  "outdent",
  "separator",
  "justifyLeft",
  "justifyCenter",
  "justifyRight",
  "justifyFull",
  "separator",
  "link",
  "unlink",
  "image",
  "table",
  "separator",
  "undo",
  "redo",
  "removeFormat",
  "separator",
  "source"
], zo = {
  bold: { label: "Bold", glyph: /* @__PURE__ */ o("b", { children: "B" }), command: "bold" },
  italic: { label: "Italic", glyph: /* @__PURE__ */ o("i", { children: "I" }), command: "italic" },
  underline: { label: "Underline", glyph: /* @__PURE__ */ o("u", { children: "U" }), command: "underline" },
  strikethrough: {
    label: "Strikethrough",
    glyph: /* @__PURE__ */ o("s", { children: "S" }),
    command: "strikeThrough"
  },
  unorderedList: {
    label: "Bulleted list",
    glyph: "☰",
    command: "insertUnorderedList"
  },
  orderedList: {
    label: "Numbered list",
    glyph: "1☰",
    command: "insertOrderedList"
  },
  indent: { label: "Increase indent", glyph: "→", command: "indent" },
  outdent: { label: "Decrease indent", glyph: "←", command: "outdent" },
  justifyLeft: {
    label: "Align left",
    glyph: /* @__PURE__ */ o("span", { className: Ot.alignGlyph, style: { textAlign: "left" }, children: "≡" }),
    command: "justifyLeft"
  },
  justifyCenter: {
    label: "Align center",
    glyph: /* @__PURE__ */ o("span", { className: Ot.alignGlyph, style: { textAlign: "center" }, children: "≡" }),
    command: "justifyCenter"
  },
  justifyRight: {
    label: "Align right",
    glyph: /* @__PURE__ */ o("span", { className: Ot.alignGlyph, style: { textAlign: "right" }, children: "≡" }),
    command: "justifyRight"
  },
  justifyFull: {
    label: "Justify",
    glyph: /* @__PURE__ */ o("span", { className: Ot.alignGlyph, style: { textAlign: "justify" }, children: "≡" }),
    command: "justifyFull"
  },
  unlink: { label: "Remove link", glyph: "⛓̸", command: "unlink" },
  undo: { label: "Undo", glyph: "↺", command: "undo" },
  redo: { label: "Redo", glyph: "↻", command: "redo" },
  removeFormat: {
    label: "Remove formatting",
    glyph: "Tₓ",
    command: "removeFormat"
  }
}, Bf = [
  "sans-serif",
  "serif",
  "monospace",
  "Arial",
  "Georgia",
  "Courier New"
], Ff = ["1", "2", "3", "4", "5", "6", "7"], Hf = ["p", "h1", "h2", "h3", "blockquote", "pre"];
function js(e, t) {
  if (typeof document > "u") return !1;
  const n = document.execCommand;
  if (typeof n != "function") return !1;
  try {
    return n.call(document, e, !1, t);
  } catch {
    return !1;
  }
}
function Uf(e) {
  return js("formatBlock", `<${e}>`) || js("formatBlock", e);
}
function qf(e) {
  if (typeof e == "string") return e.trim();
  if (e != null && typeof e == "object" && "url" in e) {
    const t = e.url;
    if (typeof t == "string") return t;
  }
  throw new Error("Upload response has no url");
}
const aO = st(
  function({
    value: t,
    defaultValue: n = "",
    onChange: r,
    onError: l,
    toolbar: a = jf,
    imageUpload: d,
    readOnly: s = !1,
    disabled: i = !1,
    ariaLabel: c = "HTML editor",
    className: f,
    sanitize: u = !0
  }, h) {
    const [m, b] = q(!1), [g, y] = q(n), [p, _] = q(
      null
    ), [x, N] = q(""), [v, $] = q(""), [O, T] = q(2), [A, C] = q(2), [D, I] = q(!1), k = oe(null), S = oe(null), E = oe(n), P = B(
      (G) => u ? vl.sanitize(G) : G,
      [u]
    );
    ve(() => {
      const G = k.current;
      t !== void 0 && G && G.innerHTML !== t && (G.innerHTML = t), t !== void 0 && (E.current = t);
    }, [t]);
    const L = B(
      (G) => {
        E.current = P(G), r?.(E.current);
      },
      [P, r]
    ), j = B(
      (G, $e) => {
        if (s || i) return !1;
        k.current?.focus();
        const ne = js(G, $e);
        if (ne) {
          const Ae = k.current;
          Ae && L(Ae.innerHTML);
        }
        return ne;
      },
      [L, s, i]
    ), F = B(
      () => k.current?.innerHTML ?? E.current,
      []
    ), X = B(
      (G) => {
        j("insertHTML", G);
      },
      [j]
    ), ie = B(() => {
      k.current?.focus();
    }, []), te = Se(
      () => ({
        execCommand: j,
        getHtml: F,
        insertHtml: X,
        focus: ie
      }),
      [j, F, X, ie]
    );
    ms(h, () => ({ execCommand: j, getHtml: F }), [
      j,
      F
    ]);
    const we = B(
      (G) => {
        const $e = zo[G];
        !$e || s || i || j($e.command);
      },
      [j, s, i]
    ), le = B(() => {
      s || i || (m ? (b(!1), L(g)) : (y(k.current?.innerHTML ?? ""), b(!0)));
    }, [m, g, L, s, i]), _e = B(
      (G) => {
        if (!(G.ctrlKey || G.metaKey) || s || i) return;
        const $e = G.key.toLowerCase(), ne = $e === "b" ? "bold" : $e === "i" ? "italic" : $e === "u" ? "underline" : null;
        ne && (G.preventDefault(), we(ne));
      },
      [we, s, i]
    ), W = B(() => {
      const G = k.current;
      G && L(G.innerHTML);
    }, [L]), he = B(() => {
      x.trim() && (j("createLink", x.trim()), N(""), _(null));
    }, [x, j]), ue = B(() => {
      v.trim() && (j("insertImage", v.trim()), $(""), _(null));
    }, [v, j]), ye = B(
      async (G) => {
        if (d) {
          I(!0);
          try {
            const $e = new FormData();
            $e.append(d.parameterName ?? "file", G);
            const ne = await fetch(d.url, {
              method: "POST",
              headers: d.headers,
              body: $e
            });
            if (!ne.ok)
              throw new Error(`Upload failed: ${ne.status}`);
            const fe = (ne.headers.get("content-type") ?? "").includes("application/json") ? await ne.json() : await ne.text(), Fe = (d.parseUrl ?? qf)(fe);
            j("insertImage", Fe);
          } catch ($e) {
            l?.($e instanceof Error ? $e.message : "Image upload failed");
          } finally {
            I(!1), _(null);
          }
        }
      },
      [d, l, j]
    ), pe = B(() => {
      const G = Math.max(1, Math.min(10, Math.floor(O) || 1)), $e = Math.max(1, Math.min(10, Math.floor(A) || 1)), ne = Array.from({ length: $e }, () => "<td><br></td>").join(
        ""
      ), Ae = Array.from({ length: G }, () => `<tr>${ne}</tr>`).join(
        ""
      );
      j("insertHTML", `<table><tbody>${Ae}</tbody></table>`), _(null);
    }, [O, A, j]), De = (G, $e) => {
      if (G === "separator")
        return /* @__PURE__ */ o(
          "span",
          {
            role: "separator",
            className: Ot.separator
          },
          `sep-${$e}`
        );
      if (typeof G == "object")
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Ot.tool,
            "aria-label": G.label,
            title: G.title ?? G.label,
            disabled: i,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !s && !i && G.onExecute(te);
            },
            children: G.glyph ?? G.label
          },
          G.id
        );
      if (G === "source")
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Ot.tool,
            "aria-label": "Source",
            "aria-pressed": m,
            disabled: i,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: le,
            children: "</>"
          },
          "source"
        );
      if (G === "foreColor" || G === "backgroundColor") {
        const Ae = G === "foreColor" ? "Text color" : "Background color";
        return /* @__PURE__ */ M("label", { className: Ot.tool, title: Ae, children: [
          /* @__PURE__ */ o("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ o(
            "input",
            {
              type: "color",
              "aria-label": Ae,
              disabled: i,
              className: Ot.colorInput,
              onMouseDown: (fe) => fe.preventDefault(),
              onChange: (fe) => j(
                G === "foreColor" ? "foreColor" : "hiliteColor",
                fe.target.value
              )
            }
          )
        ] }, G);
      }
      if (G === "formatBlock" || G === "fontName" || G === "fontSize") {
        const Ae = G === "formatBlock" ? "Format block" : G === "fontName" ? "Font name" : "Font size", fe = G === "formatBlock" ? Hf : G === "fontName" ? Bf : Ff;
        return /* @__PURE__ */ M(
          "select",
          {
            "aria-label": Ae,
            title: Ae,
            disabled: i,
            defaultValue: "",
            className: Ot.select,
            onMouseDown: (Fe) => Fe.preventDefault(),
            onChange: (Fe) => {
              !Fe.target.value || s || i || (G === "formatBlock" ? Uf(Fe.target.value) : j(G === "fontName" ? "fontName" : "fontSize", Fe.target.value), Fe.target.value = "");
            },
            children: [
              /* @__PURE__ */ o("option", { value: "", disabled: !0, children: G === "formatBlock" ? "¶" : G === "fontName" ? "Aa" : "12" }),
              fe.map((Fe) => /* @__PURE__ */ o("option", { value: Fe, children: Fe }, Fe))
            ]
          },
          G
        );
      }
      if (G === "link")
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Ot.tool,
            "aria-label": "Insert link",
            disabled: i,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !s && !i && (N(""), _("link"));
            },
            children: "🔗"
          },
          "link"
        );
      if (G === "image")
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Ot.tool,
            "aria-label": "Insert image",
            disabled: i,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !s && !i && ($(""), _("image"));
            },
            children: "🖼"
          },
          "image"
        );
      if (G === "table")
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Ot.tool,
            "aria-label": "Insert table",
            disabled: i,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !s && !i && (T(2), C(2), _("table"));
            },
            children: "▦"
          },
          "table"
        );
      const ne = zo[G];
      return ne ? /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: Ot.tool,
          "aria-label": ne.label,
          disabled: i,
          onMouseDown: (Ae) => Ae.preventDefault(),
          onClick: () => we(G),
          children: ne.glyph
        },
        G
      ) : null;
    };
    return /* @__PURE__ */ M("div", { className: [Ot.editor, f].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ o(
        "div",
        {
          role: "toolbar",
          "aria-label": `${c} toolbar`,
          className: Ot.toolbar,
          children: a.map((G, $e) => De(G, $e))
        }
      ),
      m ? /* @__PURE__ */ o(
        "textarea",
        {
          className: Ot.source,
          "aria-label": `${c} source`,
          value: g,
          disabled: i,
          readOnly: s,
          onChange: (G) => {
            y(G.target.value), L(G.target.value);
          }
        }
      ) : /* @__PURE__ */ o(
        "div",
        {
          ref: k,
          className: Ot.area,
          contentEditable: !s && !i,
          suppressContentEditableWarning: !0,
          role: "textbox",
          "aria-label": c,
          "aria-multiline": "true",
          "aria-readonly": s || void 0,
          "aria-disabled": i || void 0,
          dangerouslySetInnerHTML: { __html: E.current },
          onInput: W,
          onKeyDown: _e
        }
      ),
      /* @__PURE__ */ M(
        _l,
        {
          open: p !== null,
          onClose: () => _(null),
          title: p === "link" ? "Insert link" : p === "image" ? "Insert image" : "Insert table",
          size: "sm",
          footer: /* @__PURE__ */ M(pt, { children: [
            /* @__PURE__ */ o(yn, { variant: "text", onClick: () => _(null), children: "Cancel" }),
            p === "link" && /* @__PURE__ */ o(yn, { onClick: he, children: "Insert" }),
            p === "image" && /* @__PURE__ */ o(yn, { onClick: ue, disabled: D, children: "Insert" }),
            p === "table" && /* @__PURE__ */ o(yn, { onClick: pe, children: "Insert" })
          ] }),
          children: [
            p === "link" && /* @__PURE__ */ o(Nr, { label: "URL", required: !0, children: ({ inputId: G }) => /* @__PURE__ */ o(
              Xr,
              {
                id: G,
                value: x,
                placeholder: "https://",
                onChange: ($e) => N($e.target.value)
              }
            ) }),
            p === "image" && /* @__PURE__ */ M(pt, { children: [
              /* @__PURE__ */ o(Nr, { label: "Image URL", children: ({ inputId: G }) => /* @__PURE__ */ o(
                Xr,
                {
                  id: G,
                  value: v,
                  placeholder: "https://",
                  onChange: ($e) => $($e.target.value)
                }
              ) }),
              d && /* @__PURE__ */ o(Nr, { label: "Or upload a file", children: ({ inputId: G }) => /* @__PURE__ */ o(
                "input",
                {
                  id: G,
                  ref: S,
                  type: "file",
                  accept: "image/*",
                  "aria-label": "Upload image file",
                  onChange: ($e) => {
                    const ne = $e.target.files?.[0];
                    ne && ye(ne), $e.target.value = "";
                  }
                }
              ) }),
              D && /* @__PURE__ */ o(pl, { textStyle: "Body2", children: "Uploading…" })
            ] }),
            p === "table" && /* @__PURE__ */ M(pt, { children: [
              /* @__PURE__ */ o(Nr, { label: "Rows", children: ({ inputId: G }) => /* @__PURE__ */ o(
                Xr,
                {
                  id: G,
                  type: "number",
                  value: String(O),
                  onChange: ($e) => T(Number($e.target.value))
                }
              ) }),
              /* @__PURE__ */ o(Nr, { label: "Columns", children: ({ inputId: G }) => /* @__PURE__ */ o(
                Xr,
                {
                  id: G,
                  type: "number",
                  value: String(A),
                  onChange: ($e) => C(Number($e.target.value))
                }
              ) })
            ] })
          ]
        }
      )
    ] });
  }
), Kf = "_popup_ve7kd_4", wl = {
  popup: Kf
}, kl = or(null);
function iO() {
  const e = Pn(kl);
  if (!e) throw new Error("usePopup must be used inside <PopupProvider>");
  return e;
}
function Lo(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : e;
}
function Wf({ state: e }) {
  const t = oe(null), [n, r] = q(null);
  return ve(() => {
    const l = t.current;
    if (!l) return;
    const a = e.anchor.getBoundingClientRect(), d = l.getBoundingClientRect(), s = Math.max(
      0,
      Math.min(a.left, window.innerWidth - d.width)
    );
    let i = a.bottom + 4;
    i + d.height > window.innerHeight && a.top - 4 - d.height >= 0 && (i = a.top - 4 - d.height), r({ left: s, top: Math.max(0, i) });
  }, [e]), ve(() => {
    t.current?.focus();
  }, []), /* @__PURE__ */ o(
    "div",
    {
      ref: t,
      role: "dialog",
      "aria-label": e.ariaLabel ?? "Popup",
      tabIndex: -1,
      className: [wl.popup, e.className].filter(Boolean).join(" "),
      style: {
        left: n?.left ?? e.anchor.getBoundingClientRect().left,
        top: n?.top,
        width: Lo(e.width),
        height: Lo(e.height)
      },
      children: e.content
    }
  );
}
function cO({ children: e }) {
  const [t, n] = q(null), r = oe(0), l = oe(null), a = B(() => {
    l.current?.(), l.current = null;
  }, []), d = B(() => {
    n((c) => c && (c.invoker && document.body.contains(c.invoker) && c.invoker.focus({ preventScroll: !0 }), a(), null));
  }, [a]), s = B(
    (c) => {
      r.current += 1;
      const f = r.current;
      l.current = c.onClose ?? null, n({
        ...c,
        seq: f,
        invoker: document.activeElement instanceof HTMLElement ? document.activeElement : null
      }), c.onOpen?.();
      let u = !1;
      return () => {
        u || (u = !0, n((h) => h?.seq !== f ? h : (h.invoker && document.body.contains(h.invoker) && h.invoker.focus({ preventScroll: !0 }), a(), null)));
      };
    },
    [a]
  );
  ve(() => {
    if (!t) return;
    const c = (m) => {
      const b = document.querySelector(`.${wl.popup}`);
      b && !b.contains(m.target) && d();
    }, f = (m) => {
      m.key === "Escape" && (m.preventDefault(), d());
    }, u = () => d(), h = () => d();
    return document.addEventListener("pointerdown", c, !0), document.addEventListener("keydown", f, !0), window.addEventListener("resize", u), window.addEventListener("hashchange", h), () => {
      document.removeEventListener("pointerdown", c, !0), document.removeEventListener("keydown", f, !0), window.removeEventListener("resize", u), window.removeEventListener("hashchange", h);
    };
  }, [t, d]);
  const i = Se(
    () => ({ open: s, close: d, isOpen: t != null }),
    [s, d, t]
  );
  return /* @__PURE__ */ M(kl.Provider, { value: i, children: [
    e,
    t && /* @__PURE__ */ o(Wf, { state: t }, t.seq)
  ] });
}
const Gf = "_alert_146r9_1", Vf = "_xs_146r9_28", Yf = "_sm_146r9_38", Xf = "_lg_146r9_48", Zf = "_xl_146r9_58", Jf = "_primary_146r9_69", Qf = "_secondary_146r9_74", e_ = "_light_146r9_79", t_ = "_base_146r9_84", n_ = "_dark_146r9_89", r_ = "_info_146r9_94", s_ = "_success_146r9_99", o_ = "_warning_146r9_104", l_ = "_danger_146r9_109", a_ = "_flat_146r9_116", i_ = "_outlined_146r9_123", c_ = "_filled_146r9_132", d_ = "_text_146r9_139", u_ = "_icon_146r9_181", f_ = "_content_146r9_192", __ = "_title_146r9_197", p_ = "_body_146r9_203", m_ = "_dismiss_146r9_209", Nn = {
  alert: Gf,
  xs: Vf,
  sm: Yf,
  lg: Xf,
  xl: Zf,
  primary: Jf,
  secondary: Qf,
  light: e_,
  base: t_,
  dark: n_,
  info: r_,
  success: s_,
  warning: o_,
  danger: l_,
  flat: a_,
  outlined: i_,
  filled: c_,
  text: d_,
  icon: u_,
  content: f_,
  title: __,
  body: p_,
  dismiss: m_,
  "shade-lighter": "_shade-lighter_146r9_453",
  "shade-light": "_shade-light_146r9_453",
  "shade-dark": "_shade-dark_146r9_463",
  "shade-darker": "_shade-darker_146r9_467"
}, h_ = {
  primary: "info",
  secondary: "info",
  light: "info",
  base: "info",
  dark: "info",
  info: "info",
  success: "check_circle",
  warning: "warning",
  danger: "cancel"
};
function dO({
  // Intentional Radzen-parity breaking change (1.0): defaults were
  // severity="info" variant="flat" dismissible={false}; Radzen ships
  // AlertStyle.Base + Variant.Filled + AllowClose. Migrate by passing
  // the old values explicitly.
  severity: e = "base",
  variant: t = "filled",
  shade: n,
  size: r = "md",
  title: l,
  icon: a,
  showIcon: d = !0,
  children: s,
  dismissible: i = !0,
  onDismiss: c,
  visible: f,
  onVisibleChange: u,
  className: h,
  ...m
}) {
  const [b, g] = q(!1);
  if (f === !1 || f === void 0 && b)
    return null;
  const y = () => {
    f === void 0 && g(!0), c?.(), u?.(!1);
  }, p = e, _ = al(t, "filled"), x = Ur(n), N = a ?? (d ? /* @__PURE__ */ o(Me, { icon: h_[e] }) : null);
  return /* @__PURE__ */ M(
    "div",
    {
      role: "alert",
      ...m,
      className: [
        Nn.alert,
        Nn[p],
        Nn[_],
        x ? Nn[x] : null,
        Nn[r],
        h
      ].filter(Boolean).join(" "),
      children: [
        N != null && /* @__PURE__ */ o("span", { className: Nn.icon, "aria-hidden": "true", children: N }),
        /* @__PURE__ */ M("div", { className: Nn.content, children: [
          l && /* @__PURE__ */ o("div", { className: Nn.title, children: l }),
          s && /* @__PURE__ */ o("div", { className: Nn.body, children: s })
        ] }),
        i && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Nn.dismiss,
            onClick: y,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ o(Me, { icon: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const g_ = "_skeleton_1xyce_1", b_ = "_text_1xyce_35", y_ = "_circle_1xyce_40", x_ = "_rect_1xyce_44", Ro = {
  skeleton: g_,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_1xyce_1",
  text: b_,
  circle: y_,
  rect: x_
};
function uO({
  variant: e = "text",
  width: t,
  height: n,
  className: r
}) {
  const l = {};
  return t !== void 0 && (l.width = typeof t == "number" ? `${t}px` : t), n !== void 0 && (l.height = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ o(
    "span",
    {
      "aria-hidden": "true",
      className: [Ro.skeleton, Ro[e], r].filter(Boolean).join(" "),
      style: l
    }
  );
}
function fs(e) {
  return typeof e == "number" ? `${e}px` : /^\d+$/.test(e) ? `${e}px` : e;
}
const v_ = "_row_juebr_1", w_ = "_start_juebr_14", k_ = "_center_juebr_18", N_ = "_end_juebr_22", O_ = "_stretch_juebr_26", S_ = "_baseline_juebr_30", $_ = "_normal_juebr_34", E_ = "_noWrap_juebr_90", T_ = "_wrapReverse_juebr_94", ts = {
  row: v_,
  start: w_,
  center: k_,
  end: N_,
  stretch: O_,
  baseline: S_,
  normal: $_,
  "justify-start": "_justify-start_juebr_38",
  "justify-center": "_justify-center_juebr_42",
  "justify-end": "_justify-end_juebr_46",
  "justify-between": "_justify-between_juebr_50",
  "justify-around": "_justify-around_juebr_54",
  "justify-evenly": "_justify-evenly_juebr_58",
  "justify-normal": "_justify-normal_juebr_62",
  "justify-left": "_justify-left_juebr_66",
  "justify-right": "_justify-right_juebr_70",
  "justify-stretch": "_justify-stretch_juebr_74",
  "justify-space-between": "_justify-space-between_juebr_78",
  "justify-space-around": "_justify-space-around_juebr_82",
  "justify-space-evenly": "_justify-space-evenly_juebr_86",
  noWrap: E_,
  wrapReverse: T_
};
function Po(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function fO({
  gap: e,
  rowGap: t,
  align: n = "stretch",
  justify: r = "start",
  wrap: l = !0,
  className: a,
  style: d,
  ...s
}) {
  const i = e != null ? fs(e) : null, c = t != null ? fs(t) : null, f = {
    // Keep --dx-col-gap in sync so Column grid math compensates for any
    // gap exactly like it does for the stylesheet default (space-4).
    // Set columnGap (not the gap shorthand): an inline `gap` would also
    // fix row-gap inline and clobber the rowGap prop.
    ...i ? {
      columnGap: i,
      "--dx-col-gap": i
    } : {},
    ...c ? { rowGap: c } : {},
    ...d
  };
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        ts.row,
        ts[n],
        ts[`justify-${r}`],
        Po(l) != null ? ts[Po(l)] : null,
        a
      ].filter(Boolean).join(" "),
      style: f,
      ...s
    }
  );
}
const C_ = "_column_sh0ss_1", A_ = "_Size1_sh0ss_15", D_ = "_Size2_sh0ss_24", M_ = "_Size3_sh0ss_33", I_ = "_Size4_sh0ss_42", z_ = "_Size5_sh0ss_51", L_ = "_Size6_sh0ss_60", R_ = "_Size7_sh0ss_69", P_ = "_Size8_sh0ss_78", j_ = "_Size9_sh0ss_87", B_ = "_Size10_sh0ss_96", F_ = "_Size11_sh0ss_105", H_ = "_Size12_sh0ss_114", U_ = "_Offset0_sh0ss_119", q_ = "_Offset1_sh0ss_122", K_ = "_Offset2_sh0ss_127", W_ = "_Offset3_sh0ss_132", G_ = "_Offset4_sh0ss_137", V_ = "_Offset5_sh0ss_142", Y_ = "_Offset6_sh0ss_147", X_ = "_Offset7_sh0ss_152", Z_ = "_Offset8_sh0ss_157", J_ = "_Offset9_sh0ss_162", Q_ = "_Offset10_sh0ss_167", ep = "_Offset11_sh0ss_172", tp = "_Offset12_sh0ss_177", np = "_OrderFirst_sh0ss_182", rp = "_OrderLast_sh0ss_185", sp = "_Order0_sh0ss_188", op = "_Order1_sh0ss_191", lp = "_Order2_sh0ss_194", ap = "_Order3_sh0ss_197", ip = "_Order4_sh0ss_200", cp = "_Order5_sh0ss_203", dp = "_Order6_sh0ss_206", up = "_Order7_sh0ss_209", fp = "_Order8_sh0ss_212", _p = "_Order9_sh0ss_215", pp = "_Order10_sh0ss_218", mp = "_Order11_sh0ss_221", hp = "_Order12_sh0ss_224", gp = "_xsSize1_sh0ss_229", bp = "_xsSize2_sh0ss_238", yp = "_xsSize3_sh0ss_247", xp = "_xsSize4_sh0ss_256", vp = "_xsSize5_sh0ss_265", wp = "_xsSize6_sh0ss_274", kp = "_xsSize7_sh0ss_283", Np = "_xsSize8_sh0ss_292", Op = "_xsSize9_sh0ss_301", Sp = "_xsSize10_sh0ss_310", $p = "_xsSize11_sh0ss_321", Ep = "_xsSize12_sh0ss_332", Tp = "_xsOffset0_sh0ss_337", Cp = "_xsOffset1_sh0ss_340", Ap = "_xsOffset2_sh0ss_345", Dp = "_xsOffset3_sh0ss_350", Mp = "_xsOffset4_sh0ss_355", Ip = "_xsOffset5_sh0ss_360", zp = "_xsOffset6_sh0ss_365", Lp = "_xsOffset7_sh0ss_370", Rp = "_xsOffset8_sh0ss_375", Pp = "_xsOffset9_sh0ss_380", jp = "_xsOffset10_sh0ss_385", Bp = "_xsOffset11_sh0ss_391", Fp = "_xsOffset12_sh0ss_397", Hp = "_xsOrderFirst_sh0ss_403", Up = "_xsOrderLast_sh0ss_406", qp = "_xsOrder0_sh0ss_409", Kp = "_xsOrder1_sh0ss_412", Wp = "_xsOrder2_sh0ss_415", Gp = "_xsOrder3_sh0ss_418", Vp = "_xsOrder4_sh0ss_421", Yp = "_xsOrder5_sh0ss_424", Xp = "_xsOrder6_sh0ss_427", Zp = "_xsOrder7_sh0ss_430", Jp = "_xsOrder8_sh0ss_433", Qp = "_xsOrder9_sh0ss_436", em = "_xsOrder10_sh0ss_439", tm = "_xsOrder11_sh0ss_442", nm = "_xsOrder12_sh0ss_445", rm = "_smSize1_sh0ss_451", sm = "_smSize2_sh0ss_460", om = "_smSize3_sh0ss_469", lm = "_smSize4_sh0ss_478", am = "_smSize5_sh0ss_487", im = "_smSize6_sh0ss_496", cm = "_smSize7_sh0ss_505", dm = "_smSize8_sh0ss_514", um = "_smSize9_sh0ss_523", fm = "_smSize10_sh0ss_532", _m = "_smSize11_sh0ss_543", pm = "_smSize12_sh0ss_554", mm = "_smOffset0_sh0ss_559", hm = "_smOffset1_sh0ss_562", gm = "_smOffset2_sh0ss_567", bm = "_smOffset3_sh0ss_572", ym = "_smOffset4_sh0ss_577", xm = "_smOffset5_sh0ss_582", vm = "_smOffset6_sh0ss_587", wm = "_smOffset7_sh0ss_592", km = "_smOffset8_sh0ss_597", Nm = "_smOffset9_sh0ss_602", Om = "_smOffset10_sh0ss_607", Sm = "_smOffset11_sh0ss_613", $m = "_smOffset12_sh0ss_619", Em = "_smOrderFirst_sh0ss_625", Tm = "_smOrderLast_sh0ss_628", Cm = "_smOrder0_sh0ss_631", Am = "_smOrder1_sh0ss_634", Dm = "_smOrder2_sh0ss_637", Mm = "_smOrder3_sh0ss_640", Im = "_smOrder4_sh0ss_643", zm = "_smOrder5_sh0ss_646", Lm = "_smOrder6_sh0ss_649", Rm = "_smOrder7_sh0ss_652", Pm = "_smOrder8_sh0ss_655", jm = "_smOrder9_sh0ss_658", Bm = "_smOrder10_sh0ss_661", Fm = "_smOrder11_sh0ss_664", Hm = "_smOrder12_sh0ss_667", Um = "_mdSize1_sh0ss_673", qm = "_mdSize2_sh0ss_682", Km = "_mdSize3_sh0ss_691", Wm = "_mdSize4_sh0ss_700", Gm = "_mdSize5_sh0ss_709", Vm = "_mdSize6_sh0ss_718", Ym = "_mdSize7_sh0ss_727", Xm = "_mdSize8_sh0ss_736", Zm = "_mdSize9_sh0ss_745", Jm = "_mdSize10_sh0ss_754", Qm = "_mdSize11_sh0ss_765", eh = "_mdSize12_sh0ss_776", th = "_mdOffset0_sh0ss_781", nh = "_mdOffset1_sh0ss_784", rh = "_mdOffset2_sh0ss_789", sh = "_mdOffset3_sh0ss_794", oh = "_mdOffset4_sh0ss_799", lh = "_mdOffset5_sh0ss_804", ah = "_mdOffset6_sh0ss_809", ih = "_mdOffset7_sh0ss_814", ch = "_mdOffset8_sh0ss_819", dh = "_mdOffset9_sh0ss_824", uh = "_mdOffset10_sh0ss_829", fh = "_mdOffset11_sh0ss_835", _h = "_mdOffset12_sh0ss_841", ph = "_mdOrderFirst_sh0ss_847", mh = "_mdOrderLast_sh0ss_850", hh = "_mdOrder0_sh0ss_853", gh = "_mdOrder1_sh0ss_856", bh = "_mdOrder2_sh0ss_859", yh = "_mdOrder3_sh0ss_862", xh = "_mdOrder4_sh0ss_865", vh = "_mdOrder5_sh0ss_868", wh = "_mdOrder6_sh0ss_871", kh = "_mdOrder7_sh0ss_874", Nh = "_mdOrder8_sh0ss_877", Oh = "_mdOrder9_sh0ss_880", Sh = "_mdOrder10_sh0ss_883", $h = "_mdOrder11_sh0ss_886", Eh = "_mdOrder12_sh0ss_889", Th = "_lgSize1_sh0ss_895", Ch = "_lgSize2_sh0ss_904", Ah = "_lgSize3_sh0ss_913", Dh = "_lgSize4_sh0ss_922", Mh = "_lgSize5_sh0ss_931", Ih = "_lgSize6_sh0ss_940", zh = "_lgSize7_sh0ss_949", Lh = "_lgSize8_sh0ss_958", Rh = "_lgSize9_sh0ss_967", Ph = "_lgSize10_sh0ss_976", jh = "_lgSize11_sh0ss_987", Bh = "_lgSize12_sh0ss_998", Fh = "_lgOffset0_sh0ss_1003", Hh = "_lgOffset1_sh0ss_1006", Uh = "_lgOffset2_sh0ss_1011", qh = "_lgOffset3_sh0ss_1016", Kh = "_lgOffset4_sh0ss_1021", Wh = "_lgOffset5_sh0ss_1026", Gh = "_lgOffset6_sh0ss_1031", Vh = "_lgOffset7_sh0ss_1036", Yh = "_lgOffset8_sh0ss_1041", Xh = "_lgOffset9_sh0ss_1046", Zh = "_lgOffset10_sh0ss_1051", Jh = "_lgOffset11_sh0ss_1057", Qh = "_lgOffset12_sh0ss_1063", e1 = "_lgOrderFirst_sh0ss_1069", t1 = "_lgOrderLast_sh0ss_1072", n1 = "_lgOrder0_sh0ss_1075", r1 = "_lgOrder1_sh0ss_1078", s1 = "_lgOrder2_sh0ss_1081", o1 = "_lgOrder3_sh0ss_1084", l1 = "_lgOrder4_sh0ss_1087", a1 = "_lgOrder5_sh0ss_1090", i1 = "_lgOrder6_sh0ss_1093", c1 = "_lgOrder7_sh0ss_1096", d1 = "_lgOrder8_sh0ss_1099", u1 = "_lgOrder9_sh0ss_1102", f1 = "_lgOrder10_sh0ss_1105", _1 = "_lgOrder11_sh0ss_1108", p1 = "_lgOrder12_sh0ss_1111", m1 = "_xlSize1_sh0ss_1117", h1 = "_xlSize2_sh0ss_1126", g1 = "_xlSize3_sh0ss_1135", b1 = "_xlSize4_sh0ss_1144", y1 = "_xlSize5_sh0ss_1153", x1 = "_xlSize6_sh0ss_1162", v1 = "_xlSize7_sh0ss_1171", w1 = "_xlSize8_sh0ss_1180", k1 = "_xlSize9_sh0ss_1189", N1 = "_xlSize10_sh0ss_1198", O1 = "_xlSize11_sh0ss_1209", S1 = "_xlSize12_sh0ss_1220", $1 = "_xlOffset0_sh0ss_1225", E1 = "_xlOffset1_sh0ss_1228", T1 = "_xlOffset2_sh0ss_1233", C1 = "_xlOffset3_sh0ss_1238", A1 = "_xlOffset4_sh0ss_1243", D1 = "_xlOffset5_sh0ss_1248", M1 = "_xlOffset6_sh0ss_1253", I1 = "_xlOffset7_sh0ss_1258", z1 = "_xlOffset8_sh0ss_1263", L1 = "_xlOffset9_sh0ss_1268", R1 = "_xlOffset10_sh0ss_1273", P1 = "_xlOffset11_sh0ss_1279", j1 = "_xlOffset12_sh0ss_1285", B1 = "_xlOrderFirst_sh0ss_1291", F1 = "_xlOrderLast_sh0ss_1294", H1 = "_xlOrder0_sh0ss_1297", U1 = "_xlOrder1_sh0ss_1300", q1 = "_xlOrder2_sh0ss_1303", K1 = "_xlOrder3_sh0ss_1306", W1 = "_xlOrder4_sh0ss_1309", G1 = "_xlOrder5_sh0ss_1312", V1 = "_xlOrder6_sh0ss_1315", Y1 = "_xlOrder7_sh0ss_1318", X1 = "_xlOrder8_sh0ss_1321", Z1 = "_xlOrder9_sh0ss_1324", J1 = "_xlOrder10_sh0ss_1327", Q1 = "_xlOrder11_sh0ss_1330", eg = "_xlOrder12_sh0ss_1333", tg = "_xxSize1_sh0ss_1339", ng = "_xxSize2_sh0ss_1348", rg = "_xxSize3_sh0ss_1357", sg = "_xxSize4_sh0ss_1366", og = "_xxSize5_sh0ss_1375", lg = "_xxSize6_sh0ss_1384", ag = "_xxSize7_sh0ss_1393", ig = "_xxSize8_sh0ss_1402", cg = "_xxSize9_sh0ss_1411", dg = "_xxSize10_sh0ss_1420", ug = "_xxSize11_sh0ss_1431", fg = "_xxSize12_sh0ss_1442", _g = "_xxOffset0_sh0ss_1447", pg = "_xxOffset1_sh0ss_1450", mg = "_xxOffset2_sh0ss_1455", hg = "_xxOffset3_sh0ss_1460", gg = "_xxOffset4_sh0ss_1465", bg = "_xxOffset5_sh0ss_1470", yg = "_xxOffset6_sh0ss_1475", xg = "_xxOffset7_sh0ss_1480", vg = "_xxOffset8_sh0ss_1485", wg = "_xxOffset9_sh0ss_1490", kg = "_xxOffset10_sh0ss_1495", Ng = "_xxOffset11_sh0ss_1501", Og = "_xxOffset12_sh0ss_1507", Sg = "_xxOrderFirst_sh0ss_1513", $g = "_xxOrderLast_sh0ss_1516", Eg = "_xxOrder0_sh0ss_1519", Tg = "_xxOrder1_sh0ss_1522", Cg = "_xxOrder2_sh0ss_1525", Ag = "_xxOrder3_sh0ss_1528", Dg = "_xxOrder4_sh0ss_1531", Mg = "_xxOrder5_sh0ss_1534", Ig = "_xxOrder6_sh0ss_1537", zg = "_xxOrder7_sh0ss_1540", Lg = "_xxOrder8_sh0ss_1543", Rg = "_xxOrder9_sh0ss_1546", Pg = "_xxOrder10_sh0ss_1549", jg = "_xxOrder11_sh0ss_1552", Bg = "_xxOrder12_sh0ss_1555", ns = {
  column: C_,
  Size1: A_,
  Size2: D_,
  Size3: M_,
  Size4: I_,
  Size5: z_,
  Size6: L_,
  Size7: R_,
  Size8: P_,
  Size9: j_,
  Size10: B_,
  Size11: F_,
  Size12: H_,
  Offset0: U_,
  Offset1: q_,
  Offset2: K_,
  Offset3: W_,
  Offset4: G_,
  Offset5: V_,
  Offset6: Y_,
  Offset7: X_,
  Offset8: Z_,
  Offset9: J_,
  Offset10: Q_,
  Offset11: ep,
  Offset12: tp,
  OrderFirst: np,
  OrderLast: rp,
  Order0: sp,
  Order1: op,
  Order2: lp,
  Order3: ap,
  Order4: ip,
  Order5: cp,
  Order6: dp,
  Order7: up,
  Order8: fp,
  Order9: _p,
  Order10: pp,
  Order11: mp,
  Order12: hp,
  xsSize1: gp,
  xsSize2: bp,
  xsSize3: yp,
  xsSize4: xp,
  xsSize5: vp,
  xsSize6: wp,
  xsSize7: kp,
  xsSize8: Np,
  xsSize9: Op,
  xsSize10: Sp,
  xsSize11: $p,
  xsSize12: Ep,
  xsOffset0: Tp,
  xsOffset1: Cp,
  xsOffset2: Ap,
  xsOffset3: Dp,
  xsOffset4: Mp,
  xsOffset5: Ip,
  xsOffset6: zp,
  xsOffset7: Lp,
  xsOffset8: Rp,
  xsOffset9: Pp,
  xsOffset10: jp,
  xsOffset11: Bp,
  xsOffset12: Fp,
  xsOrderFirst: Hp,
  xsOrderLast: Up,
  xsOrder0: qp,
  xsOrder1: Kp,
  xsOrder2: Wp,
  xsOrder3: Gp,
  xsOrder4: Vp,
  xsOrder5: Yp,
  xsOrder6: Xp,
  xsOrder7: Zp,
  xsOrder8: Jp,
  xsOrder9: Qp,
  xsOrder10: em,
  xsOrder11: tm,
  xsOrder12: nm,
  smSize1: rm,
  smSize2: sm,
  smSize3: om,
  smSize4: lm,
  smSize5: am,
  smSize6: im,
  smSize7: cm,
  smSize8: dm,
  smSize9: um,
  smSize10: fm,
  smSize11: _m,
  smSize12: pm,
  smOffset0: mm,
  smOffset1: hm,
  smOffset2: gm,
  smOffset3: bm,
  smOffset4: ym,
  smOffset5: xm,
  smOffset6: vm,
  smOffset7: wm,
  smOffset8: km,
  smOffset9: Nm,
  smOffset10: Om,
  smOffset11: Sm,
  smOffset12: $m,
  smOrderFirst: Em,
  smOrderLast: Tm,
  smOrder0: Cm,
  smOrder1: Am,
  smOrder2: Dm,
  smOrder3: Mm,
  smOrder4: Im,
  smOrder5: zm,
  smOrder6: Lm,
  smOrder7: Rm,
  smOrder8: Pm,
  smOrder9: jm,
  smOrder10: Bm,
  smOrder11: Fm,
  smOrder12: Hm,
  mdSize1: Um,
  mdSize2: qm,
  mdSize3: Km,
  mdSize4: Wm,
  mdSize5: Gm,
  mdSize6: Vm,
  mdSize7: Ym,
  mdSize8: Xm,
  mdSize9: Zm,
  mdSize10: Jm,
  mdSize11: Qm,
  mdSize12: eh,
  mdOffset0: th,
  mdOffset1: nh,
  mdOffset2: rh,
  mdOffset3: sh,
  mdOffset4: oh,
  mdOffset5: lh,
  mdOffset6: ah,
  mdOffset7: ih,
  mdOffset8: ch,
  mdOffset9: dh,
  mdOffset10: uh,
  mdOffset11: fh,
  mdOffset12: _h,
  mdOrderFirst: ph,
  mdOrderLast: mh,
  mdOrder0: hh,
  mdOrder1: gh,
  mdOrder2: bh,
  mdOrder3: yh,
  mdOrder4: xh,
  mdOrder5: vh,
  mdOrder6: wh,
  mdOrder7: kh,
  mdOrder8: Nh,
  mdOrder9: Oh,
  mdOrder10: Sh,
  mdOrder11: $h,
  mdOrder12: Eh,
  lgSize1: Th,
  lgSize2: Ch,
  lgSize3: Ah,
  lgSize4: Dh,
  lgSize5: Mh,
  lgSize6: Ih,
  lgSize7: zh,
  lgSize8: Lh,
  lgSize9: Rh,
  lgSize10: Ph,
  lgSize11: jh,
  lgSize12: Bh,
  lgOffset0: Fh,
  lgOffset1: Hh,
  lgOffset2: Uh,
  lgOffset3: qh,
  lgOffset4: Kh,
  lgOffset5: Wh,
  lgOffset6: Gh,
  lgOffset7: Vh,
  lgOffset8: Yh,
  lgOffset9: Xh,
  lgOffset10: Zh,
  lgOffset11: Jh,
  lgOffset12: Qh,
  lgOrderFirst: e1,
  lgOrderLast: t1,
  lgOrder0: n1,
  lgOrder1: r1,
  lgOrder2: s1,
  lgOrder3: o1,
  lgOrder4: l1,
  lgOrder5: a1,
  lgOrder6: i1,
  lgOrder7: c1,
  lgOrder8: d1,
  lgOrder9: u1,
  lgOrder10: f1,
  lgOrder11: _1,
  lgOrder12: p1,
  xlSize1: m1,
  xlSize2: h1,
  xlSize3: g1,
  xlSize4: b1,
  xlSize5: y1,
  xlSize6: x1,
  xlSize7: v1,
  xlSize8: w1,
  xlSize9: k1,
  xlSize10: N1,
  xlSize11: O1,
  xlSize12: S1,
  xlOffset0: $1,
  xlOffset1: E1,
  xlOffset2: T1,
  xlOffset3: C1,
  xlOffset4: A1,
  xlOffset5: D1,
  xlOffset6: M1,
  xlOffset7: I1,
  xlOffset8: z1,
  xlOffset9: L1,
  xlOffset10: R1,
  xlOffset11: P1,
  xlOffset12: j1,
  xlOrderFirst: B1,
  xlOrderLast: F1,
  xlOrder0: H1,
  xlOrder1: U1,
  xlOrder2: q1,
  xlOrder3: K1,
  xlOrder4: W1,
  xlOrder5: G1,
  xlOrder6: V1,
  xlOrder7: Y1,
  xlOrder8: X1,
  xlOrder9: Z1,
  xlOrder10: J1,
  xlOrder11: Q1,
  xlOrder12: eg,
  xxSize1: tg,
  xxSize2: ng,
  xxSize3: rg,
  xxSize4: sg,
  xxSize5: og,
  xxSize6: lg,
  xxSize7: ag,
  xxSize8: ig,
  xxSize9: cg,
  xxSize10: dg,
  xxSize11: ug,
  xxSize12: fg,
  xxOffset0: _g,
  xxOffset1: pg,
  xxOffset2: mg,
  xxOffset3: hg,
  xxOffset4: gg,
  xxOffset5: bg,
  xxOffset6: yg,
  xxOffset7: xg,
  xxOffset8: vg,
  xxOffset9: wg,
  xxOffset10: kg,
  xxOffset11: Ng,
  xxOffset12: Og,
  xxOrderFirst: Sg,
  xxOrderLast: $g,
  xxOrder0: Eg,
  xxOrder1: Tg,
  xxOrder2: Cg,
  xxOrder3: Ag,
  xxOrder4: Dg,
  xxOrder5: Mg,
  xxOrder6: Ig,
  xxOrder7: zg,
  xxOrder8: Lg,
  xxOrder9: Rg,
  xxOrder10: Pg,
  xxOrder11: jg,
  xxOrder12: Bg
}, Fg = [
  ["", "size", "offset", "order"],
  ["xs", "sizeXs", "offsetXs", "orderXs"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xx", "sizeXx", "offsetXx", "orderXx"]
];
function Hg(e, t) {
  if (!Number.isInteger(t) || t < 1 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 1 and 12.`
    );
}
function Ug(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12.`
    );
}
function qg(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12 or first/last.`
    );
}
function Kg(e, t, n) {
  return t === "first" ? `${e}OrderFirst` : t === "last" ? `${e}OrderLast` : (qg(n, t), `${e}Order${t}`);
}
function _O({ className: e, style: t, ...n }) {
  const r = [ns.column], l = { ...t };
  for (const [D, I, k, S] of Fg) {
    const E = n[I], P = n[k], L = n[S];
    if (E != null) {
      Hg(I, E);
      const j = ns[`${D}Size${E}`];
      j && r.push(j);
    }
    if (P != null) {
      Ug(k, P);
      const j = ns[`${D}Offset${P}`];
      j && r.push(j);
    }
    if (L != null) {
      const j = ns[Kg(D, L, S)];
      j && r.push(j);
    }
  }
  const {
    size: a,
    offset: d,
    sizeXs: s,
    offsetXs: i,
    sizeSm: c,
    offsetSm: f,
    sizeMd: u,
    offsetMd: h,
    sizeLg: m,
    offsetLg: b,
    sizeXl: g,
    offsetXl: y,
    sizeXx: p,
    offsetXx: _,
    order: x,
    orderXs: N,
    orderSm: v,
    orderMd: $,
    orderLg: O,
    orderXl: T,
    orderXx: A,
    ...C
  } = n;
  return /* @__PURE__ */ o(
    "div",
    {
      className: [...r, e].filter(Boolean).join(" "),
      style: l,
      ...C
    }
  );
}
const Wg = "_stack_bmbbp_1", Ar = {
  stack: Wg,
  "dir-row": "_dir-row_bmbbp_6",
  "dir-row-reverse": "_dir-row-reverse_bmbbp_10",
  "dir-column": "_dir-column_bmbbp_14",
  "dir-column-reverse": "_dir-column-reverse_bmbbp_18",
  "wrap-nowrap": "_wrap-nowrap_bmbbp_22",
  "wrap-wrap-reverse": "_wrap-wrap-reverse_bmbbp_26",
  "align-start": "_align-start_bmbbp_30",
  "align-center": "_align-center_bmbbp_34",
  "align-end": "_align-end_bmbbp_38",
  "align-stretch": "_align-stretch_bmbbp_42",
  "align-baseline": "_align-baseline_bmbbp_46",
  "align-normal": "_align-normal_bmbbp_50",
  "justify-start": "_justify-start_bmbbp_54",
  "justify-center": "_justify-center_bmbbp_58",
  "justify-end": "_justify-end_bmbbp_62",
  "justify-between": "_justify-between_bmbbp_66",
  "justify-around": "_justify-around_bmbbp_70",
  "justify-evenly": "_justify-evenly_bmbbp_74",
  "justify-normal": "_justify-normal_bmbbp_78",
  "justify-space-between": "_justify-space-between_bmbbp_85",
  "justify-space-around": "_justify-space-around_bmbbp_89",
  "justify-space-evenly": "_justify-space-evenly_bmbbp_93"
};
function jo(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function pO({
  orientation: e = "vertical",
  reverse: t = !1,
  wrap: n = !0,
  gap: r = 16,
  align: l,
  justify: a,
  className: d,
  style: s,
  ...i
}) {
  const c = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", f = {
    ...r != null ? { gap: fs(r) } : {},
    ...s
  };
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        Ar.stack,
        Ar[`dir-${c}`],
        jo(n) !== "wrap" ? Ar[`wrap-${jo(n)}`] : null,
        l != null ? Ar[`align-${l}`] : null,
        a != null ? Ar[`justify-${a}`] : null,
        d
      ].filter(Boolean).join(" "),
      style: f,
      ...i
    }
  );
}
const Gg = "_autogrid_16x9f_1", Vg = {
  autogrid: Gg
};
function mO({
  min: e = 240,
  gap: t = 12,
  className: n,
  style: r,
  visible: l = !0,
  ...a
}) {
  if (l === !1) return null;
  const d = {
    // Keep --dx-autogrid-min in sync so the track math follows the prop.
    "--dx-autogrid-min": typeof e == "number" ? `${e}px` : e,
    ...t != null ? { gap: fs(t) } : {},
    ...r
  };
  return /* @__PURE__ */ o(
    "div",
    {
      className: [Vg.autogrid, n].filter(Boolean).join(" "),
      style: d,
      ...a
    }
  );
}
const Yg = "_layout_fxvw1_1", Xg = "_row_fxvw1_7", Zg = "_grid_fxvw1_21", Jg = "_gridRight_fxvw1_27", Qg = "_gridHeader_fxvw1_31", eb = "_gridFooter_fxvw1_36", tb = "_gridContents_fxvw1_41", nb = "_gridBody_fxvw1_45", An = {
  layout: Yg,
  row: Xg,
  grid: Zg,
  gridRight: Jg,
  gridHeader: Qg,
  gridFooter: eb,
  gridContents: tb,
  gridBody: nb
}, rb = "_footer_3be5w_1", sb = "_sticky_3be5w_9", Bo = {
  footer: rb,
  sticky: sb
};
function ob({
  sticky: e = !1,
  className: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ o(
    "footer",
    {
      className: [Bo.footer, e ? Bo.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const lb = "_header_1tw8b_1", ab = "_sticky_1tw8b_9", Fo = {
  header: lb,
  sticky: ab
};
function ib({
  sticky: e = !1,
  className: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ o(
    "header",
    {
      className: [Fo.header, e ? Fo.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const cb = "_sidebar_175d5_1", db = "_sticky_175d5_23", ub = "_left_175d5_41", fb = "_right_175d5_45", _b = "_start_175d5_50", pb = "_end_175d5_54", mb = "_fullHeight_175d5_60", hb = "_collapsed_175d5_64", gb = "_responsive_175d5_72", bb = "_overlay_175d5_80", yb = "_mask_175d5_108", qn = {
  sidebar: cb,
  sticky: db,
  left: ub,
  right: fb,
  start: _b,
  end: pb,
  fullHeight: mb,
  collapsed: hb,
  responsive: gb,
  overlay: bb,
  mask: yb
};
function xb({
  position: e = "left",
  expanded: t = !0,
  responsive: n = !1,
  overlay: r = !1,
  fullHeight: l = !1,
  sticky: a = !1,
  onClose: d,
  className: s,
  children: i,
  ...c
}) {
  return ve(() => {
    if (!r || !t || d == null) return;
    const f = (u) => {
      u.key === "Escape" && d();
    };
    return document.addEventListener("keydown", f), () => document.removeEventListener("keydown", f);
  }, [r, t, d]), /* @__PURE__ */ M(pt, { children: [
    r && t ? /* @__PURE__ */ o(
      "div",
      {
        className: `${qn.mask} se-layout-mask`,
        "aria-hidden": "true",
        onClick: d
      }
    ) : null,
    /* @__PURE__ */ o(
      "aside",
      {
        className: [
          qn.sidebar,
          qn[e],
          t ? null : qn.collapsed,
          n ? qn.responsive : null,
          r ? [qn.overlay, "se-sidebar--overlay"] : null,
          l ? qn.fullHeight : null,
          a && !r && !l ? qn.sticky : null,
          s
        ].flat().filter(Boolean).join(" "),
        ...c,
        children: i
      }
    )
  ] });
}
function hO(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ o(pt, { children: e.children });
  const { className: t, children: n, ...r } = e, l = [], a = [], d = [], s = [], i = [], c = [];
  qr.forEach(n, (h) => {
    if (!qt(h)) {
      d.push(h);
      return;
    }
    if (h.type === ib)
      l.push(h);
    else if (h.type === ob)
      a.push(h);
    else if (h.type === xb) {
      const m = h, b = m.props.position;
      c.push(m), (b === "right" || b === "end" ? i : s).push(m);
    } else
      d.push(h);
  });
  const f = c.length === 1 && c[0]?.props.fullHeight === !0 ? c[0] : null, u = f != null && (f.props.position === "right" || f.props.position === "end");
  if (f) {
    const h = u ? i : s;
    return /* @__PURE__ */ M(
      "div",
      {
        className: [
          An.layout,
          An.grid,
          u ? An.gridRight : null,
          t
        ].filter(Boolean).join(" "),
        ...r,
        children: [
          l.length > 0 && /* @__PURE__ */ o("div", { className: An.gridHeader, children: l }),
          /* @__PURE__ */ M("div", { className: An.gridContents, children: [
            h,
            /* @__PURE__ */ o("div", { className: An.gridBody, children: d })
          ] }),
          a.length > 0 && /* @__PURE__ */ o("div", { className: An.gridFooter, children: a })
        ]
      }
    );
  }
  return /* @__PURE__ */ M(
    "div",
    {
      className: [An.layout, t].filter(Boolean).join(" "),
      ...r,
      children: [
        l,
        /* @__PURE__ */ M("div", { className: An.row, children: [
          s,
          d,
          i
        ] }),
        a
      ]
    }
  );
}
const vb = "_body_1ge00_4", wb = "_bare_1ge00_12", Ho = {
  body: vb,
  bare: wb
};
function gO({
  as: e = "main",
  padded: t = !0,
  className: n,
  children: r,
  ...l
}) {
  return /* @__PURE__ */ o(
    e,
    {
      className: [Ho.body, t ? null : Ho.bare, n].filter(Boolean).join(" "),
      ...l,
      children: r
    }
  );
}
const kb = "_toggle_lxnk5_1", Nb = {
  toggle: kb
};
function bO({
  icon: e = "menu",
  label: t = "Toggle sidebar",
  className: n,
  type: r = "button",
  children: l,
  ...a
}) {
  return /* @__PURE__ */ o(
    "button",
    {
      type: r,
      "aria-label": t,
      className: [Nb.toggle, n].filter(Boolean).join(" "),
      ...a,
      children: l ?? /* @__PURE__ */ o(Me, { icon: e, size: 20 })
    }
  );
}
const Ob = "_track_14127_1", Sb = "_bar_14127_31", $b = "_primary_14127_39", Eb = "_success_14127_43", Tb = "_warning_14127_47", Cb = "_danger_14127_51", Ab = "_indeterminate_14127_149", Db = "_circular_14127_163", Mb = "_fill_14127_203", nn = {
  track: Ob,
  "linear-xs": "_linear-xs_14127_11",
  "linear-sm": "_linear-sm_14127_15",
  "linear-md": "_linear-md_14127_19",
  "linear-lg": "_linear-lg_14127_23",
  "linear-xl": "_linear-xl_14127_27",
  bar: Sb,
  primary: $b,
  success: Eb,
  warning: Tb,
  danger: Cb,
  "shade-lighter": "_shade-lighter_14127_133",
  "shade-light": "_shade-light_14127_133",
  "shade-dark": "_shade-dark_14127_141",
  "shade-darker": "_shade-darker_14127_145",
  indeterminate: Ab,
  "se-progress-slide": "_se-progress-slide_14127_1",
  circular: Db,
  "circular-xs": "_circular-xs_14127_169",
  "circular-sm": "_circular-sm_14127_174",
  "circular-md": "_circular-md_14127_179",
  "circular-lg": "_circular-lg_14127_184",
  "circular-xl": "_circular-xl_14127_189",
  fill: Mb,
  "se-progress-spin": "_se-progress-spin_14127_1"
};
function yO({
  value: e = 0,
  max: t = 100,
  severity: n = "primary",
  shade: r,
  indeterminate: l = !1,
  variant: a = "linear",
  size: d = "md",
  className: s,
  visible: i = !0,
  ...c
}) {
  if (i === !1) return null;
  const f = t > 0 ? Math.min(t, Math.max(0, e)) : 0, u = t > 0 ? f / t * 100 : 0;
  if (a === "circular") {
    const m = typeof d == "string", b = 2, g = 10.5, y = 2 * Math.PI * g, p = y * (l ? 0.75 : 1), _ = l ? 0 : y * (1 - u / 100), x = Ur(r);
    return /* @__PURE__ */ M(
      "svg",
      {
        width: m ? void 0 : d,
        height: m ? void 0 : d,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": c["aria-label"],
        "aria-labelledby": c["aria-labelledby"],
        "aria-valuenow": l ? void 0 : Math.round(f),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        ...c,
        className: [
          nn.circular,
          nn[n],
          x ? nn[x] : null,
          m ? nn[`circular-${d}`] : null,
          l ? nn.indeterminate : null,
          s
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ o(
            "circle",
            {
              className: nn.track,
              cx: 12,
              cy: 12,
              r: g,
              strokeWidth: b
            }
          ),
          /* @__PURE__ */ o(
            "circle",
            {
              className: nn.fill,
              cx: 12,
              cy: 12,
              r: g,
              strokeWidth: b,
              strokeDasharray: `${p} ${y}`,
              strokeDashoffset: _
            }
          )
        ]
      }
    );
  }
  const h = Ur(r);
  return /* @__PURE__ */ o(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": l ? void 0 : Math.round(f),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        nn.track,
        nn[n],
        h ? nn[h] : null,
        typeof d == "string" ? nn[`linear-${d}`] : null,
        l ? nn.indeterminate : null,
        s
      ].filter(Boolean).join(" "),
      ...c,
      children: /* @__PURE__ */ o(
        "div",
        {
          className: nn.bar,
          style: l ? void 0 : { width: `${u}%` }
        }
      )
    }
  );
}
const Ib = "_wrapper_tk30z_1", zb = {
  wrapper: Ib
}, Lb = [
  "default",
  "fluent",
  "github",
  "material",
  "material-3",
  "shadcn"
], Nl = "dx-palette", Rb = "data-palette";
function Pb(e, t) {
  const n = e === void 0 ? Nl : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      const r = localStorage.getItem(n);
      return r != null && t.includes(r) ? r : void 0;
    } catch {
      return;
    }
}
function jb(e, t) {
  const n = e === void 0 ? Nl : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function xO({
  themes: e = Lb,
  value: t,
  defaultValue: n,
  storageKey: r,
  attribute: l = Rb,
  onChange: a,
  label: d = "Theme",
  placeholder: s = "Theme…",
  id: i,
  size: c = "md",
  className: f
}) {
  const [u, h] = q(void 0), m = t !== void 0, b = t ?? u ?? Pb(r, e) ?? n, g = b ?? "", y = oe(void 0);
  ve(() => {
    if (m) return;
    const _ = document.documentElement;
    if (b === void 0) {
      y.current !== void 0 && _.getAttribute(l) === y.current && (_.removeAttribute(l), y.current = void 0);
      return;
    }
    _.setAttribute(l, b), y.current = b;
  }, [b, l, m]);
  const p = (_) => {
    const x = _.target.value;
    m || (h(x), jb(r, x)), a?.(x);
  };
  return /* @__PURE__ */ M("label", { className: [zb.wrapper, f].filter(Boolean).join(" "), children: [
    d,
    /* @__PURE__ */ M(sr, { id: i, size: c, value: g, onChange: p, children: [
      b === void 0 && /* @__PURE__ */ o("option", { value: "", disabled: !0, children: s }),
      b !== void 0 && !e.includes(b) && /* @__PURE__ */ o("option", { value: b, children: b }),
      e.map((_) => /* @__PURE__ */ o("option", { value: _, children: _ }, _))
    ] })
  ] });
}
function Bb(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function Zs(e) {
  const [t, n] = q(() => Bb(e));
  return ve(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const r = window.matchMedia(e);
    n(r.matches);
    const l = (a) => n(a.matches);
    return typeof r.addEventListener == "function" ? (r.addEventListener("change", l), () => r.removeEventListener("change", l)) : (r.addListener(l), () => r.removeListener(l));
  }, [e]), t;
}
const Fb = "_pressed_12x15_8", Hb = {
  pressed: Fb
}, Ub = st(
  function({
    pressed: t,
    defaultPressed: n = !1,
    onChange: r,
    toggleVariant: l,
    toggleSeverity: a = "primary",
    toggleShade: d = "darker",
    toggleContent: s,
    size: i = "md",
    className: c,
    onClick: f,
    children: u,
    variant: h,
    severity: m,
    shade: b,
    ...g
  }, y) {
    const [p, _] = q(n), x = t ?? p, N = (v) => {
      const $ = !x;
      t === void 0 && _($), r?.($), f?.(v);
    };
    return /* @__PURE__ */ o(
      yn,
      {
        ...g,
        ref: y,
        variant: x && l ? l : h,
        severity: x ? a : m,
        shade: x ? d : b,
        size: i,
        "aria-pressed": x,
        className: [x ? Hb.pressed : null, c].filter(Boolean).join(" "),
        onClick: N,
        children: x && s !== void 0 ? s : u
      }
    );
  }
), Ol = "dx-theme";
function qb(e) {
  const t = e === void 0 ? Ol : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const n = localStorage.getItem(t);
      return n === "light" || n === "dark" || n === "system" ? n : void 0;
    } catch {
      return;
    }
}
function Kb(e, t) {
  const n = e === void 0 ? Ol : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function vO({
  value: e,
  defaultValue: t,
  storageKey: n,
  onChange: r,
  label: l = "Dark mode",
  id: a,
  className: d,
  size: s
}) {
  const i = Zs("(prefers-color-scheme: dark)"), [c, f] = q(void 0), u = e !== void 0, h = e ?? c ?? qb(n) ?? t ?? "system", m = h === "system" ? i ? "dark" : "light" : h;
  return ve(() => {
    if (!u) {
      if (h === "system") {
        delete document.documentElement.dataset.theme;
        return;
      }
      document.documentElement.dataset.theme = h;
    }
  }, [h, u]), /* @__PURE__ */ o(
    Ub,
    {
      id: a,
      size: s,
      className: d,
      "aria-label": l,
      variant: "text",
      severity: "base",
      pressed: m === "dark",
      onChange: (g) => {
        const y = g ? "dark" : "light";
        u || (f(y), Kb(n, y)), r?.(y);
      },
      toggleContent: /* @__PURE__ */ o(Me, { icon: "light_mode", size: s ?? "md" }),
      children: /* @__PURE__ */ o(Me, { icon: "dark_mode", size: s ?? "md" })
    }
  );
}
const Sl = "dx-palette", $l = "dx-theme", Bs = "data-palette", Fs = "data-theme", Hs = /* @__PURE__ */ new Set();
function Wb() {
  if (typeof document > "u") return { theme: null, appearance: null };
  const e = document.documentElement.getAttribute(Bs), t = document.documentElement.getAttribute(Fs);
  return {
    theme: e,
    appearance: t === "light" || t === "dark" ? t : null
  };
}
function Js(e) {
  typeof document > "u" || (e.theme == null ? document.documentElement.removeAttribute(Bs) : document.documentElement.setAttribute(Bs, e.theme), e.appearance == null ? document.documentElement.removeAttribute(Fs) : document.documentElement.setAttribute(Fs, e.appearance));
}
function El(e, t) {
  try {
    if (typeof localStorage > "u") return;
    t == null ? localStorage.removeItem(e) : localStorage.setItem(e, t);
  } catch {
  }
}
function Uo(e) {
  try {
    return typeof localStorage > "u" ? null : localStorage.getItem(e);
  } catch {
    return null;
  }
}
let qo = !1;
function br() {
  const e = Wb();
  if (!qo) {
    qo = !0;
    const t = Uo(Sl), n = Uo($l), r = e.appearance ?? (n === "light" || n === "dark" ? n : null), l = { theme: e.theme ?? t, appearance: r };
    return (l.theme != null || l.appearance != null) && Js(l), l;
  }
  return e;
}
function Tl() {
  const e = br();
  Hs.forEach((t) => t({ ...e }));
}
function Ko(e) {
  return Hs.add(e), () => {
    Hs.delete(e);
  };
}
function wO() {
  return br().theme;
}
function Gb(e) {
  const t = br();
  t.theme !== e && (t.theme = e, Js(t), El(Sl, e), Tl());
}
function kO() {
  return br().appearance;
}
function Vb(e) {
  const t = br();
  t.appearance !== e && (t.appearance = e, Js(t), El($l, e), Tl());
}
function NO() {
  const [, e] = q(0);
  ve(() => Ko(() => e((n) => n + 1)), []);
  const t = br();
  return {
    theme: t.theme,
    appearance: t.appearance,
    setTheme: Gb,
    setAppearance: Vb,
    subscribe: Ko
  };
}
function Yb(e) {
  const t = new TextEncoder().encode(e), n = t.length * 8, r = ((t.length + 8 >> 6) + 1) * 64, l = new Uint8Array(r);
  l.set(t), l[t.length] = 128;
  const a = new DataView(l.buffer);
  a.setUint32(r - 8, n >>> 0, !0), a.setUint32(r - 4, Math.floor(n / 4294967296), !0);
  const d = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21], s = Array.from(
    { length: 64 },
    (g, y) => Math.floor(Math.abs(Math.sin(y + 1)) * 4294967296)
  ), i = (g, y) => g + y | 0, c = (g, y) => g << y | g >>> 32 - y;
  let f = 1732584193, u = 4023233417, h = 2562383102, m = 271733878;
  for (let g = 0; g < r; g += 64) {
    const y = [];
    for (let v = 0; v < 16; v += 1)
      y.push(a.getUint32(g + v * 4, !0));
    let p = f, _ = u, x = h, N = m;
    for (let v = 0; v < 64; v += 1) {
      let $, O;
      v < 16 ? ($ = _ & x | ~_ & N, O = v) : v < 32 ? ($ = N & _ | ~N & x, O = (5 * v + 1) % 16) : v < 48 ? ($ = _ ^ x ^ N, O = (3 * v + 5) % 16) : ($ = x ^ (_ | ~N), O = 7 * v % 16), $ = i(i(i($, p), s[v]), y[O]), p = N, N = x, x = _, _ = i(_, c($, d[Math.floor(v / 16) * 4 + v % 4]));
    }
    f = i(f, p), u = i(u, _), h = i(h, x), m = i(m, N);
  }
  const b = (g) => {
    let y = "";
    for (let p = 0; p < 4; p += 1)
      y += `0${(g >>> p * 8 & 255).toString(16)}`.slice(-2);
    return y;
  };
  return b(f) + b(u) + b(h) + b(m);
}
const Xb = "_avatar_1mhfr_1", Zb = "_xs_1mhfr_12", Jb = "_sm_1mhfr_18", Qb = "_md_1mhfr_24", ey = "_lg_1mhfr_30", ty = "_xl_1mhfr_36", ny = "_initials_1mhfr_42", ry = "_image_1mhfr_57", sy = "_status_1mhfr_64", oy = "_online_1mhfr_84", ly = "_offline_1mhfr_88", ay = "_away_1mhfr_92", cr = {
  avatar: Xb,
  xs: Zb,
  sm: Jb,
  md: Qb,
  lg: ey,
  xl: ty,
  initials: ny,
  image: ry,
  status: sy,
  online: oy,
  offline: ly,
  away: ay
}, iy = {
  xs: 20,
  sm: 28,
  md: 36,
  lg: 44,
  xl: 52
}, cs = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function cy(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function dy(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = t * 31 + e.charCodeAt(n) >>> 0;
  return cs[t % cs.length] ?? cs[0];
}
function OO({
  name: e,
  src: t,
  email: n,
  gravatarDefault: r = "retro",
  gravatarRating: l = "g",
  alt: a,
  size: d = "md",
  status: s,
  className: i
}) {
  const c = Se(() => e ? cy(e) : "?", [e]), f = Se(() => e ? dy(e) : cs[0], [e]), u = Se(() => {
    if (t != null || n == null) return;
    const N = n.trim().toLowerCase();
    return N === "" ? void 0 : `https://secure.gravatar.com/avatar/${Yb(N)}?d=${r}&s=${iy[d]}&r=${l}`;
  }, [t, n, r, l, d]), h = t ?? u, [m, b] = q(null), g = h != null && m !== h, y = g && a === "", p = a ?? e ?? "avatar", _ = s ? `${p}, ${s}` : p, x = g ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ o(
      "img",
      {
        className: cr.image,
        src: h,
        alt: y ? "" : s ? _ : p,
        onError: () => b(h ?? null)
      }
    )
  ) : /* @__PURE__ */ o(
    "span",
    {
      "aria-hidden": "true",
      className: cr.initials,
      style: { background: f },
      children: c
    }
  );
  return /* @__PURE__ */ M(
    "span",
    {
      className: [
        cr.avatar,
        cr[d],
        s ? cr[s] : null,
        i
      ].filter(Boolean).join(" "),
      role: g ? void 0 : "img",
      "aria-label": g ? void 0 : _,
      children: [
        x,
        s && /* @__PURE__ */ o("span", { className: cr.status, "aria-hidden": "true" })
      ]
    }
  );
}
const uy = "_root_zzwfz_1", fy = "_left_zzwfz_6", _y = "_right_zzwfz_7", py = "_panel_zzwfz_12", my = "_bottom_zzwfz_20", hy = "_tabList_zzwfz_24", gy = "_underline_zzwfz_53", by = "_pills_zzwfz_72", yy = "_tab_zzwfz_24", xy = "_active_zzwfz_113", vy = "_disabled_zzwfz_139", Dn = {
  root: uy,
  left: fy,
  right: _y,
  panel: py,
  bottom: my,
  tabList: hy,
  underline: gy,
  pills: by,
  tab: yy,
  active: xy,
  disabled: vy
};
function SO({
  items: e,
  value: t,
  defaultValue: n,
  onChange: r,
  variant: l = "underline",
  position: a = "top",
  className: d
}) {
  const s = ot(), i = oe(null), [c, f] = q(
    n ?? e[0]?.key ?? ""
  ), u = t ?? c, h = a === "left" || a === "right", m = (y) => {
    f(y), r?.(y);
  }, b = (y) => {
    const p = e.filter((N) => !N.disabled), _ = p.findIndex((N) => N.key === u);
    let x = -1;
    y.key === "ArrowRight" || h && y.key === "ArrowDown" ? x = (_ + 1) % p.length : y.key === "ArrowLeft" || h && y.key === "ArrowUp" ? x = (_ - 1 + p.length) % p.length : y.key === "Home" ? x = 0 : y.key === "End" && (x = p.length - 1), x >= 0 && (y.preventDefault(), i.current?.querySelector(
      `[data-tab-key="${CSS.escape(p[x]?.key ?? "")}"]`
    )?.focus(), m(p[x]?.key ?? ""));
  }, g = e.find((y) => y.key === u);
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Dn.root, Dn[a], d].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ o(
          "div",
          {
            ref: i,
            role: "tablist",
            className: [Dn.tabList, Dn[l], Dn[a]].filter(Boolean).join(" "),
            onKeyDown: b,
            children: e.map((y) => {
              const p = y.key === u;
              return /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  role: "tab",
                  id: `${s}-tab-${y.key}`,
                  "data-tab-key": y.key,
                  "aria-selected": p,
                  "aria-controls": `${s}-panel-${y.key}`,
                  tabIndex: p ? 0 : -1,
                  disabled: y.disabled,
                  className: [
                    Dn.tab,
                    p ? Dn.active : null,
                    y.disabled ? Dn.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => m(y.key),
                  children: y.label
                },
                y.key
              );
            })
          }
        ),
        g && /* @__PURE__ */ o(
          "div",
          {
            role: "tabpanel",
            id: `${s}-panel-${g.key}`,
            "aria-labelledby": `${s}-tab-${g.key}`,
            className: Dn.panel,
            children: g.content
          }
        )
      ]
    }
  );
}
const wy = "_root_1l1j2_1", ky = "_item_1l1j2_9", Ny = "_heading_1l1j2_13", Oy = "_trigger_1l1j2_17", Sy = "_disabled_1l1j2_34", $y = "_title_1l1j2_48", Ey = "_chevron_1l1j2_52", Ty = "_open_1l1j2_59", Cy = "_content_1l1j2_63", Mn = {
  root: wy,
  item: ky,
  heading: Ny,
  trigger: Oy,
  disabled: Sy,
  title: $y,
  chevron: Ey,
  open: Ty,
  content: Cy
};
function $O({
  items: e,
  multiple: t = !1,
  value: n,
  defaultValue: r,
  onChange: l,
  className: a
}) {
  const d = ot(), [s, i] = q(
    r ?? []
  ), c = n ?? s, f = (u) => {
    const h = c.includes(u) ? c.filter((m) => m !== u) : t ? [...c, u] : [u];
    i(h), l?.(h);
  };
  return /* @__PURE__ */ o("div", { className: [Mn.root, a].filter(Boolean).join(" "), children: e.map((u) => {
    const h = c.includes(u.key), m = `${d}-panel-${u.key}`, b = `${d}-trigger-${u.key}`;
    return /* @__PURE__ */ M("div", { className: Mn.item, children: [
      /* @__PURE__ */ o("h3", { className: Mn.heading, children: /* @__PURE__ */ M(
        "button",
        {
          type: "button",
          id: b,
          "aria-expanded": h,
          "aria-controls": m,
          disabled: u.disabled,
          className: [
            Mn.trigger,
            u.disabled ? Mn.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => f(u.key),
          children: [
            /* @__PURE__ */ o("span", { className: Mn.title, children: u.title }),
            /* @__PURE__ */ o(
              "span",
              {
                className: [Mn.chevron, h ? Mn.open : null].filter(Boolean).join(" "),
                "aria-hidden": "true",
                children: /* @__PURE__ */ o(Me, { icon: "keyboard_arrow_down", size: 12 })
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ o(
        "div",
        {
          id: m,
          role: "region",
          "aria-labelledby": b,
          hidden: !h,
          className: Mn.content,
          children: u.content
        }
      )
    ] }, u.key);
  }) });
}
const Ay = "_textarea_l7fsl_1", Dy = "_invalid_l7fsl_27", My = "_xs_l7fsl_34", Iy = "_sm_l7fsl_39", zy = "_md_l7fsl_44", Ly = "_lg_l7fsl_49", Ry = "_xl_l7fsl_54", rs = {
  textarea: Ay,
  invalid: Dy,
  xs: My,
  sm: Iy,
  md: zy,
  lg: Ly,
  xl: Ry,
  "resize-none": "_resize-none_l7fsl_59",
  "resize-vertical": "_resize-vertical_l7fsl_63",
  "resize-horizontal": "_resize-horizontal_l7fsl_67",
  "resize-both": "_resize-both_l7fsl_71"
}, EO = st(
  function({ size: t = "md", resize: n = "none", invalid: r = !1, className: l, ...a }, d) {
    return /* @__PURE__ */ o(
      "textarea",
      {
        ref: d,
        "data-size": t,
        className: [
          rs.textarea,
          rs[t],
          rs[`resize-${n}`],
          r ? rs.invalid : null,
          l
        ].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...a
      }
    );
  }
), Py = "_root_xyp2i_1", jy = "_trigger_xyp2i_9", By = "_invalid_xyp2i_40", Fy = "_placeholder_xyp2i_47", Hy = "_label_xyp2i_54", Uy = "_chevron_xyp2i_60", qy = "_chevronOpen_xyp2i_70", Ky = "_menu_xyp2i_74", Wy = "_option_xyp2i_89", Gy = "_disabled_xyp2i_100", Vy = "_active_xyp2i_104", Yy = "_selected_xyp2i_105", Xy = "_header_xyp2i_115", Zy = "_xs_xyp2i_122", Jy = "_sm_xyp2i_128", Qy = "_md_xyp2i_134", e0 = "_lg_xyp2i_140", t0 = "_xl_xyp2i_146", Ht = {
  root: Py,
  trigger: jy,
  invalid: By,
  placeholder: Fy,
  label: Hy,
  chevron: Uy,
  chevronOpen: qy,
  menu: Ky,
  option: Wy,
  disabled: Gy,
  active: Vy,
  selected: Yy,
  header: Xy,
  xs: Zy,
  sm: Jy,
  md: Qy,
  lg: e0,
  xl: t0
}, n0 = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function TO({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: r,
  placeholder: l = "Select…",
  size: a = "md",
  invalid: d = !1,
  disabled: s = !1,
  className: i,
  ...c
}) {
  const f = ot(), u = `${f}-listbox`, h = oe(null), m = oe(null), [b, g] = q(
    n
  ), [y, p] = q(!1), _ = t ?? b, x = e.map(
    (k, S) => k.label === "" || k.disabled ? -1 : S
  ).filter((k) => k >= 0), N = e.findIndex(
    (k) => k.value === _
  ), [v, $] = q(
    () => x.includes(0) ? 0 : x[0] ?? -1
  ), O = B(() => {
    if (s) return;
    const k = N >= 0 && x.includes(N) ? N : x[0];
    $(k ?? -1), p(!0);
  }, [s, N, x]), T = B(() => {
    p(!1), m.current?.focus();
  }, []);
  ve(() => {
    if (!y) return;
    const k = (S) => {
      h.current && !h.current.contains(S.target) && p(!1);
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, [y]);
  const A = (k) => {
    g(k), r?.(k), p(!1), m.current?.focus();
  }, C = (k) => {
    if (x.length === 0) return;
    const S = x.includes(v) ? x.indexOf(v) : 0, E = x[(S + k + x.length) % x.length];
    E != null && $(E);
  }, D = (k) => {
    if (!y) {
      k.key === "ArrowDown" && (k.preventDefault(), O());
      return;
    }
    switch (k.key) {
      case "ArrowDown":
        k.preventDefault(), C(1);
        break;
      case "ArrowUp":
        k.preventDefault(), C(-1);
        break;
      case "Home":
        k.preventDefault(), x[0] != null && $(x[0]);
        break;
      case "End":
        k.preventDefault(), x[x.length - 1] != null && $(x[x.length - 1]);
        break;
      case "Enter":
      case " ":
        k.preventDefault(), v >= 0 && e[v] && x.includes(v) && A(e[v]?.value ?? "");
        break;
      case "Escape":
        k.preventDefault(), T();
        break;
      case "Tab":
        p(!1);
        break;
    }
  }, I = e.find(
    (k) => k.value === _
  );
  return /* @__PURE__ */ M(
    "div",
    {
      ref: h,
      className: [Ht.root, i].filter(Boolean).join(" "),
      onKeyDown: D,
      children: [
        /* @__PURE__ */ M(
          "button",
          {
            ref: m,
            type: "button",
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-expanded": y,
            "aria-controls": u,
            "aria-invalid": d || void 0,
            disabled: s,
            className: [
              Ht.trigger,
              Ht[a],
              y ? Ht.open : null,
              d ? Ht.invalid : null
            ].filter(Boolean).join(" "),
            onClick: () => y ? p(!1) : O(),
            ...c,
            children: [
              /* @__PURE__ */ o("span", { className: I ? Ht.label : Ht.placeholder, children: I ? I.label : l }),
              /* @__PURE__ */ o(
                "span",
                {
                  className: [Ht.chevron, y ? Ht.chevronOpen : null].filter(Boolean).join(" "),
                  style: { backgroundImage: n0 },
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ),
        y && /* @__PURE__ */ o(
          "div",
          {
            id: u,
            role: "listbox",
            "aria-activedescendant": v >= 0 ? `${f}-option-${v}` : void 0,
            className: Ht.menu,
            children: e.map(
              (k, S) => k.label === "" ? /* @__PURE__ */ o(
                "div",
                {
                  className: Ht.header,
                  role: "presentation",
                  children: k.value
                },
                k.value
              ) : /* @__PURE__ */ o(
                "div",
                {
                  id: `${f}-option-${S}`,
                  role: "option",
                  "aria-selected": k.value === _,
                  "aria-disabled": k.disabled || void 0,
                  className: [
                    Ht.option,
                    S === v ? Ht.active : null,
                    k.value === _ ? Ht.selected : null,
                    k.disabled ? Ht.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    k.disabled || A(k.value);
                  },
                  onMouseEnter: () => {
                    !k.disabled && k.label !== "" && $(S);
                  },
                  children: k.label
                },
                k.value
              )
            )
          }
        )
      ]
    }
  );
}
const r0 = "_root_1ma8a_1", s0 = "_wrap_1ma8a_9", o0 = "_input_1ma8a_26", l0 = "_invalid_1ma8a_31", a0 = "_clear_1ma8a_58", i0 = "_menu_1ma8a_83", c0 = "_option_1ma8a_98", d0 = "_disabled_1ma8a_109", u0 = "_active_1ma8a_113", f0 = "_empty_1ma8a_123", _0 = "_xs_1ma8a_129", p0 = "_sm_1ma8a_136", m0 = "_md_1ma8a_143", h0 = "_lg_1ma8a_150", g0 = "_xl_1ma8a_157", cn = {
  root: r0,
  wrap: s0,
  input: o0,
  invalid: l0,
  clear: a0,
  menu: i0,
  option: c0,
  disabled: d0,
  active: u0,
  empty: f0,
  xs: _0,
  sm: p0,
  md: m0,
  lg: h0,
  xl: g0
}, b0 = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function CO({
  options: e = [],
  value: t,
  defaultValue: n = "",
  onChange: r,
  onSelect: l,
  placeholder: a = "",
  size: d = "md",
  invalid: s = !1,
  disabled: i = !1,
  filter: c = b0,
  className: f,
  ...u
}) {
  const h = ot(), m = `${h}-listbox`, b = oe(null), g = oe(null), [y, p] = q(n), [_, x] = q(!1), N = t ?? y, v = Se(
    () => N.trim() === "" ? [...e] : e.filter((L) => c(L, N)),
    [e, N, c]
  ), $ = v.map((L, j) => L.disabled ? -1 : j).filter((L) => L >= 0), [O, T] = q(-1), A = (L) => {
    p(L), r?.(L);
  }, C = (L) => {
    A(L.label), l?.(L.value, L), x(!1);
  }, D = (L) => {
    if ($.length === 0) return;
    const j = $.includes(O) ? $.indexOf(O) : L === 1 ? -1 : 0, F = $[(j + L + $.length) % $.length];
    F != null && T(F);
  }, I = (L) => {
    i || (A(L.target.value), x(!0), T(-1));
  }, k = () => {
    i || N !== "" && x(!0);
  }, S = (L) => {
    b.current && !b.current.contains(L.relatedTarget) && x(!1);
  }, E = (L) => {
    if (!i)
      switch (L.key) {
        case "ArrowDown":
          L.preventDefault(), _ ? D(1) : (x(!0), T($[0] ?? -1));
          break;
        case "ArrowUp":
          L.preventDefault(), _ && D(-1);
          break;
        case "Enter":
          L.preventDefault(), _ && O >= 0 && v[O] && C(v[O]);
          break;
        case "Escape":
          L.preventDefault(), x(!1);
          break;
        case "Tab":
          _ && O >= 0 && v[O] && C(v[O]), x(!1);
          break;
      }
  }, P = () => {
    A(""), T(-1), x(!0), g.current?.focus();
  };
  return /* @__PURE__ */ M(
    "div",
    {
      ref: b,
      className: [cn.root, f].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ M(
          "div",
          {
            className: [cn.wrap, cn[d], s ? cn.invalid : null].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ o(
                "input",
                {
                  ref: g,
                  type: "text",
                  role: "combobox",
                  "aria-expanded": _,
                  "aria-controls": m,
                  "aria-autocomplete": "list",
                  "aria-activedescendant": _ && O >= 0 ? `${h}-option-${O}` : void 0,
                  "aria-invalid": s || void 0,
                  disabled: i,
                  value: N,
                  placeholder: a,
                  className: cn.input,
                  onChange: I,
                  onFocus: k,
                  onBlur: S,
                  onKeyDown: E,
                  ...u
                }
              ),
              N !== "" && !i && /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: cn.clear,
                  "aria-label": "Clear",
                  onClick: P,
                  children: /* @__PURE__ */ o(Me, { icon: "close", size: "sm" })
                }
              )
            ]
          }
        ),
        _ && (v.length === 0 ? (
          // No options → no listbox: an empty role="listbox" fails axe
          // aria-required-children either way (bare text child or no
          // children at all), so the empty state renders without the role.
          /* @__PURE__ */ o("div", { id: m, className: cn.menu, children: /* @__PURE__ */ o("div", { className: cn.empty, children: "No matches" }) })
        ) : /* @__PURE__ */ o("div", { id: m, role: "listbox", className: cn.menu, children: v.map((L, j) => /* @__PURE__ */ o(
          "div",
          {
            id: `${h}-option-${j}`,
            role: "option",
            "aria-selected": !1,
            "aria-disabled": L.disabled || void 0,
            className: [
              cn.option,
              j === O ? cn.active : null,
              L.disabled ? cn.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => {
              L.disabled || C(L);
            },
            onMouseDown: (F) => {
              F.preventDefault(), L.disabled || C(L);
            },
            onMouseEnter: () => {
              L.disabled || T(j);
            },
            children: L.label
          },
          L.value
        )) }))
      ]
    }
  );
}
const y0 = "_box_muvqe_1", x0 = "_option_muvqe_12", v0 = "_disabled_muvqe_23", w0 = "_selected_muvqe_27", k0 = "_active_muvqe_33", Dr = {
  box: y0,
  option: x0,
  disabled: v0,
  selected: w0,
  active: k0
};
function AO({
  options: e = [],
  value: t,
  defaultValue: n,
  multiple: r = !1,
  onChange: l,
  className: a,
  style: d,
  ...s
}) {
  const i = ot(), [c, f] = q(() => {
    const v = n;
    return v == null ? [] : Array.isArray(v) ? [...v] : [v];
  }), u = t == null ? c : Array.isArray(t) ? t : [t], h = e.findIndex((v) => !v.disabled), [m, b] = q(
    () => h >= 0 ? h : 0
  ), g = oe(""), y = oe(null), p = (v) => {
    f(v), l?.(r ? v : v[0] ?? "");
  }, _ = e.map((v, $) => v.disabled ? -1 : $).filter((v) => v >= 0), x = (v) => {
    const $ = e[v];
    if (!(!$ || $.disabled))
      if (b(v), r) {
        const O = u.includes($.value) ? u.filter((T) => T !== $.value) : [...u, $.value];
        p(O);
      } else
        p([$.value]);
  }, N = (v) => {
    if (_.length === 0) return;
    const $ = _.includes(m) ? m : _[0];
    let O = -1;
    if (v.key === "ArrowDown")
      O = _[(_.indexOf($) + 1) % _.length];
    else if (v.key === "ArrowUp")
      O = _[(_.indexOf($) - 1 + _.length) % _.length];
    else if (v.key === "Home")
      O = _[0];
    else if (v.key === "End")
      O = _[_.length - 1];
    else if (v.key === "Enter" || v.key === " ") {
      v.preventDefault(), x($);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(v.key)) {
      v.preventDefault();
      const T = (g.current + v.key).toLowerCase();
      g.current = T, y.current && clearTimeout(y.current), y.current = setTimeout(() => {
        g.current = "";
      }, 500);
      const A = [..._, ..._], C = _.indexOf($) + 1, D = A.slice(C).find((I) => e[I]?.label.toLowerCase().startsWith(T));
      D != null && b(D);
      return;
    }
    O >= 0 && (v.preventDefault(), b(O), r || p([e[O]?.value ?? ""]));
  };
  return /* @__PURE__ */ o(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": r || void 0,
      "aria-activedescendant": e[m] ? `${i}-option-${m}` : void 0,
      style: d,
      className: [Dr.box, a].filter(Boolean).join(" "),
      onKeyDown: N,
      ...s,
      children: e.map((v, $) => {
        const O = u.includes(v.value), T = $ === m;
        return /* @__PURE__ */ o(
          "div",
          {
            id: `${i}-option-${$}`,
            role: "option",
            "aria-selected": O,
            "aria-disabled": v.disabled || void 0,
            className: [
              Dr.option,
              O ? Dr.selected : null,
              T ? Dr.active : null,
              v.disabled ? Dr.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => x($),
            children: v.label
          },
          v.value
        );
      })
    }
  );
}
const N0 = "_group_oinj7_1", O0 = "_legend_oinj7_8", S0 = "_list_oinj7_16", $0 = "_item_oinj7_25", E0 = "_disabled_oinj7_32", T0 = "_label_oinj7_37", C0 = "_checkbox_oinj7_48", Zn = {
  group: N0,
  legend: O0,
  list: S0,
  item: $0,
  disabled: E0,
  label: T0,
  checkbox: C0
};
function DO({
  options: e = [],
  value: t,
  defaultValue: n = [],
  onChange: r,
  legend: l,
  name: a,
  className: d
}) {
  const [s, i] = q(() => [
    ...n
  ]), c = t ?? s, f = (u, h) => {
    const m = h ? [...c, u] : c.filter((b) => b !== u);
    i(m), r?.(m);
  };
  return /* @__PURE__ */ M("fieldset", { className: [Zn.group, d].filter(Boolean).join(" "), children: [
    l != null && /* @__PURE__ */ o("legend", { className: Zn.legend, children: l }),
    /* @__PURE__ */ o("ul", { className: Zn.list, children: e.map((u) => {
      const h = c.includes(u.value);
      return /* @__PURE__ */ o(
        "li",
        {
          className: [Zn.item, u.disabled ? Zn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ M("label", { className: Zn.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "checkbox",
                className: Zn.checkbox,
                name: a,
                value: u.value,
                checked: h,
                disabled: u.disabled,
                onChange: (m) => f(u.value, m.target.checked)
              }
            ),
            /* @__PURE__ */ o("span", { children: u.label })
          ] })
        },
        u.value
      );
    }) })
  ] });
}
const A0 = "_group_46668_1", D0 = "_legend_46668_8", M0 = "_list_46668_16", I0 = "_item_46668_25", z0 = "_disabled_46668_32", L0 = "_label_46668_37", R0 = "_radio_46668_48", Jn = {
  group: A0,
  legend: D0,
  list: M0,
  item: I0,
  disabled: z0,
  label: L0,
  radio: R0
};
function MO({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: r,
  legend: l,
  name: a,
  className: d
}) {
  const [s, i] = q(
    n
  ), c = t ?? s, f = (u) => {
    i(u), r?.(u);
  };
  return /* @__PURE__ */ M("fieldset", { className: [Jn.group, d].filter(Boolean).join(" "), children: [
    l != null && /* @__PURE__ */ o("legend", { className: Jn.legend, children: l }),
    /* @__PURE__ */ o("ul", { className: Jn.list, children: e.map((u) => {
      const h = u.value === c;
      return /* @__PURE__ */ o(
        "li",
        {
          className: [Jn.item, u.disabled ? Jn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ M("label", { className: Jn.label, children: [
            /* @__PURE__ */ o(
              "input",
              {
                type: "radio",
                className: Jn.radio,
                name: a,
                value: u.value,
                checked: h,
                disabled: u.disabled,
                onChange: (m) => f(m.target.value)
              }
            ),
            /* @__PURE__ */ o("span", { children: u.label })
          ] })
        },
        u.value
      );
    }) })
  ] });
}
const P0 = "_bar_9zyxn_1", j0 = "_vertical_9zyxn_12", B0 = "_option_9zyxn_17", F0 = "_selected_9zyxn_40", H0 = "_sm_9zyxn_56", U0 = "_md_9zyxn_62", q0 = "_lg_9zyxn_68", dr = {
  bar: P0,
  vertical: j0,
  option: B0,
  selected: F0,
  sm: H0,
  md: U0,
  lg: q0
};
function Wo(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function IO(e) {
  const {
    options: t = [],
    value: n,
    defaultValue: r,
    multiple: l,
    orientation: a = "horizontal",
    onChange: d,
    size: s = "md",
    className: i,
    ...c
  } = e, f = l ?? !1, [u, h] = q(r ?? (f ? [] : t[0]?.value)), m = n ?? u, b = l === !0 || l === void 0 && Array.isArray(m), g = (p) => {
    if (!b) {
      h(p), d?.(p);
      return;
    }
    const _ = Wo(m), x = _.includes(p) ? _.filter((N) => N !== p) : [..._, p];
    h(x), d?.(x);
  }, y = (p) => b ? Wo(m).includes(p) : m === p;
  return /* @__PURE__ */ o(
    "div",
    {
      role: "group",
      className: [
        dr.bar,
        dr[s],
        a === "vertical" ? dr.vertical : null,
        i
      ].filter(Boolean).join(" "),
      ...c,
      children: t.map((p) => {
        const _ = y(p.value);
        return /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            "aria-pressed": _,
            disabled: p.disabled,
            className: [
              dr.option,
              _ ? dr.selected : null,
              p.disabled ? dr.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => g(p.value),
            children: p.label
          },
          p.value
        );
      })
    }
  );
}
const K0 = "_root_11hdr_1", W0 = "_action_11hdr_10", G0 = "_caret_11hdr_15", V0 = "_sm_11hdr_49", Y0 = "_md_11hdr_53", X0 = "_lg_11hdr_57", Z0 = "_fullWidth_11hdr_62", J0 = "_menu_11hdr_70", Q0 = "_item_11hdr_83", ex = "_itemIcon_11hdr_105", tx = "_disabled_11hdr_110", nx = "_active_11hdr_114", rx = "_danger_11hdr_123", bn = {
  root: K0,
  action: W0,
  caret: G0,
  sm: V0,
  md: Y0,
  lg: X0,
  fullWidth: Z0,
  menu: J0,
  item: Q0,
  itemIcon: ex,
  disabled: tx,
  active: nx,
  danger: rx
}, zO = st(
  function({
    label: t,
    onClick: n,
    items: r = [],
    severity: l = "primary",
    variant: a = "filled",
    shade: d = "default",
    size: s = "md",
    loading: i = !1,
    visible: c = !0,
    fullWidth: f = !1,
    disabled: u = !1,
    className: h,
    "aria-label": m,
    openAriaLabel: b = "More actions",
    ...g
  }, y) {
    const _ = `${ot()}-menu`, x = oe(null), N = oe(null), v = oe([]), [$, O] = q(!1), [T, A] = q(-1), C = u || i, D = Se(
      () => r.map((F, X) => F.disabled ? -1 : X).filter((F) => F >= 0),
      [r]
    ), I = B(() => {
      C || (A(D[0] ?? -1), O(!0));
    }, [C, D]), k = B(() => {
      O(!1), N.current?.focus();
    }, []);
    ve(() => {
      if (!$) return;
      const F = (X) => {
        x.current && !x.current.contains(X.target) && O(!1);
      };
      return document.addEventListener("mousedown", F), () => document.removeEventListener("mousedown", F);
    }, [$]), ve(() => {
      $ && (C || !c) && O(!1);
    }, [$, C, c]);
    const S = oe($);
    if (ve(() => {
      const F = S.current;
      if (S.current = $, !$ || F) return;
      const X = D.includes(T) ? T : D[0] ?? -1;
      X >= 0 && v.current[X]?.focus();
    }, [$, T, D]), c === !1) return null;
    const E = (F) => {
      const X = r[F];
      !X || X.disabled || (X.onClick?.(), O(!1), N.current?.focus());
    }, P = (F) => {
      if (D.length === 0) return;
      const X = D.includes(T) ? D.indexOf(T) : F === 1 ? -1 : 0, ie = D[(X + F + D.length) % D.length];
      ie != null && (A(ie), v.current[ie]?.focus());
    }, L = (F) => {
      const X = F === "first" ? D[0] : D[D.length - 1];
      X != null && (A(X), v.current[X]?.focus());
    }, j = (F) => {
      switch (F.key) {
        case "ArrowDown":
          F.preventDefault(), P(1);
          break;
        case "ArrowUp":
          F.preventDefault(), P(-1);
          break;
        case "Home":
          F.preventDefault(), L("first");
          break;
        case "End":
          F.preventDefault(), L("last");
          break;
        case "Escape":
          F.preventDefault(), k();
          break;
        case "Tab":
          O(!1);
          break;
      }
    };
    return /* @__PURE__ */ M(
      "div",
      {
        ref: (F) => {
          x.current = F, typeof y == "function" ? y(F) : y && (y.current = F);
        },
        className: [
          bn.root,
          bn[s],
          f ? bn.fullWidth : null,
          h
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ o(
            yn,
            {
              className: bn.action,
              variant: a,
              severity: l,
              shade: d,
              size: s,
              loading: i,
              disabled: u,
              "aria-label": m,
              onClick: () => {
                $ && O(!1), n?.();
              },
              children: t
            }
          ),
          /* @__PURE__ */ o(
            yn,
            {
              ref: N,
              className: bn.caret,
              variant: a,
              severity: l,
              shade: d,
              size: s,
              disabled: C,
              "aria-haspopup": "menu",
              "aria-expanded": $,
              "aria-controls": _,
              "aria-label": b,
              onClick: () => $ ? O(!1) : I(),
              onKeyDown: (F) => {
                !$ && (F.key === "ArrowDown" || F.key === "ArrowUp") && (F.preventDefault(), I());
              },
              children: /* @__PURE__ */ o(Me, { icon: "keyboard_arrow_down", "aria-hidden": "true" })
            }
          ),
          $ && /* @__PURE__ */ o(
            "div",
            {
              id: _,
              role: "menu",
              tabIndex: -1,
              "aria-label": b,
              className: bn.menu,
              onKeyDown: j,
              ...g,
              children: r.map((F, X) => /* @__PURE__ */ M(
                "button",
                {
                  ref: (ie) => {
                    v.current[X] = ie;
                  },
                  type: "button",
                  role: "menuitem",
                  tabIndex: X === T ? 0 : -1,
                  disabled: F.disabled,
                  className: [
                    bn.item,
                    X === T ? bn.active : null,
                    F.danger ? bn.danger : null,
                    F.disabled ? bn.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => E(X),
                  onMouseEnter: () => {
                    F.disabled || A(X);
                  },
                  children: [
                    F.icon ? /* @__PURE__ */ o("span", { className: bn.itemIcon, "aria-hidden": "true", children: /* @__PURE__ */ o(Me, { icon: F.icon, size: 16 }) }) : null,
                    F.label
                  ]
                },
                F.key
              ))
            }
          )
        ]
      }
    );
  }
), sx = "_wrapper_1ulz6_1", ox = "_input_1ulz6_8", lx = "_invalid_1ulz6_38", ax = "_toggle_1ulz6_45", ix = "_xs_1ulz6_80", cx = "_sm_1ulz6_86", dx = "_md_1ulz6_92", ux = "_lg_1ulz6_98", fx = "_xl_1ulz6_104", Mr = {
  wrapper: sx,
  input: ox,
  invalid: lx,
  toggle: ax,
  xs: ix,
  sm: cx,
  md: dx,
  lg: ux,
  xl: fx
}, LO = st(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    disabled: l,
    showLabel: a = "Show password",
    hideLabel: d = "Hide password",
    ...s
  }, i) {
    const [c, f] = q(!1);
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ M("div", { className: Mr.wrapper, "data-size": t, children: [
        /* @__PURE__ */ o(
          "input",
          {
            ref: i,
            type: c ? "text" : "password",
            disabled: l,
            className: [
              Mr.input,
              Mr[t],
              n ? Mr.invalid : null,
              r
            ].filter(Boolean).join(" "),
            "aria-invalid": n || void 0,
            ...s
          }
        ),
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Mr.toggle,
            "aria-pressed": c,
            "aria-label": c ? d : a,
            disabled: l,
            onClick: () => f((u) => !u),
            children: /* @__PURE__ */ o(Me, { icon: c ? "visibility_off" : "visibility", size: 16 })
          }
        )
      ] })
    );
  }
), _x = "_mask_rcv90_1", px = "_invalid_rcv90_31", mx = "_xs_rcv90_38", hx = "_sm_rcv90_44", gx = "_md_rcv90_50", bx = "_lg_rcv90_56", yx = "_xl_rcv90_62", Ds = {
  mask: _x,
  invalid: px,
  xs: mx,
  sm: hx,
  md: gx,
  lg: bx,
  xl: yx
};
function Go(e, t) {
  let n = e.replace(/\D/g, ""), r = "";
  for (const l of t)
    if (l === "#") {
      if (n.length === 0) break;
      r += n[0] ?? "", n = n.slice(1);
    } else if (n.length > 0)
      r += l;
    else
      break;
  return r;
}
const RO = st(function({
  size: t = "md",
  invalid: n = !1,
  mask: r,
  value: l,
  defaultValue: a = "",
  onChange: d,
  className: s,
  onKeyDown: i,
  ...c
}, f) {
  const [u, h] = q(a ?? ""), m = l !== void 0, b = m ? l ?? "" : u, g = (_) => {
    const x = Go(_, r);
    return m || h(x), d?.(x), x;
  };
  return /* @__PURE__ */ o(
    "input",
    {
      ref: f,
      type: "text",
      "data-size": t,
      value: b,
      onChange: (_) => {
        g(_.target.value);
      },
      onKeyDown: (_) => {
        if (_.key === "Backspace") {
          const x = _.currentTarget.selectionStart ?? b.length, N = b[x - 1];
          if (N !== void 0 && !/\d/.test(N)) {
            _.preventDefault();
            const v = b.replace(/\D/g, "");
            g(Go(v.slice(0, -1), r));
          }
        }
        i?.(_);
      },
      className: [
        Ds.mask,
        Ds[t],
        n ? Ds.invalid : null,
        s
      ].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...c
    }
  );
}), xx = "_wrapper_12jdf_1", vx = "_input_12jdf_8", wx = "_invalid_12jdf_38", kx = "_button_12jdf_45", Nx = "_up_12jdf_77", Ox = "_down_12jdf_82", Sx = "_xs_12jdf_87", $x = "_sm_12jdf_93", Ex = "_md_12jdf_99", Tx = "_lg_12jdf_105", Cx = "_xl_12jdf_111", Kn = {
  wrapper: xx,
  input: vx,
  invalid: wx,
  button: kx,
  up: Nx,
  down: Ox,
  xs: Sx,
  sm: $x,
  md: Ex,
  lg: Tx,
  xl: Cx
};
function Us(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function Ax(e) {
  let t = "", n = !1;
  for (const r of e)
    r >= "0" && r <= "9" ? t += r : r === "." && !n ? (n = !0, t += r) : r === "-" && t.length === 0 && (t += r);
  return t;
}
function Cl(e, t, n) {
  return Math.min(n ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function Dx(e, t, n) {
  return t === void 0 ? e : t + Math.round((e - t) / n) * n;
}
function Mx(e, t, n, r, l) {
  const d = Us(e) ?? n ?? 0;
  let s;
  return n === void 0 ? s = d + t * l : t > 0 ? s = n + Math.ceil((d - n + 1e-9) / l) * l : s = n + Math.floor((d - n - 1e-9) / l) * l, Cl(s, n, r);
}
const PO = st(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    disabled: l,
    value: a,
    defaultValue: d,
    onChange: s,
    min: i,
    max: c,
    step: f = 1,
    incrementLabel: u = "Increment",
    decrementLabel: h = "Decrement",
    onBlur: m,
    onKeyDown: b,
    ...g
  }, y) {
    const [p, _] = q(
      d != null ? String(d) : ""
    ), x = a !== void 0, N = x ? a == null ? "" : String(a) : p, v = (D) => {
      x || _(D), s?.(Us(D));
    }, $ = (D) => {
      x || _(String(D)), s?.(D);
    }, O = (D) => {
      l || $(Mx(N, D, i, c, f));
    }, T = (D) => {
      v(Ax(D.target.value));
    }, A = (D) => {
      D.key === "ArrowUp" ? (D.preventDefault(), O(1)) : D.key === "ArrowDown" && (D.preventDefault(), O(-1)), b?.(D);
    }, C = (D) => {
      const I = Us(N);
      I === null ? (x || _(""), s?.(null)) : $(Cl(Dx(I, i, f), i, c)), m?.(D);
    };
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ M("div", { className: Kn.wrapper, "data-size": t, children: [
        /* @__PURE__ */ o(
          "input",
          {
            ref: y,
            type: "text",
            inputMode: "decimal",
            autoComplete: "off",
            value: N,
            disabled: l,
            onChange: T,
            onKeyDown: A,
            onBlur: C,
            className: [
              Kn.input,
              Kn[t],
              n ? Kn.invalid : null,
              r
            ].filter(Boolean).join(" "),
            "aria-invalid": n || void 0,
            ...g
          }
        ),
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: [Kn.button, Kn.up].join(" "),
            "aria-label": u,
            disabled: l,
            onClick: () => O(1),
            children: /* @__PURE__ */ o(Me, { icon: "keyboard_arrow_up", size: 14 })
          }
        ),
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: [Kn.button, Kn.down].join(" "),
            "aria-label": h,
            disabled: l,
            onClick: () => O(-1),
            children: /* @__PURE__ */ o(Me, { icon: "keyboard_arrow_down", size: 14 })
          }
        )
      ] })
    );
  }
), Re = {
  "dx-colorpicker": "_dx-colorpicker_1h5y3_1",
  "dx-colorpicker-invalid": "_dx-colorpicker-invalid_1h5y3_8",
  "dx-colorpicker-trigger": "_dx-colorpicker-trigger_1h5y3_8",
  "dx-colorpicker-trigger-xs": "_dx-colorpicker-trigger-xs_1h5y3_41",
  "dx-colorpicker-trigger-sm": "_dx-colorpicker-trigger-sm_1h5y3_47",
  "dx-colorpicker-trigger-lg": "_dx-colorpicker-trigger-lg_1h5y3_53",
  "dx-colorpicker-trigger-xl": "_dx-colorpicker-trigger-xl_1h5y3_59",
  "dx-colorpicker-value": "_dx-colorpicker-value_1h5y3_65",
  "dx-colorpicker-text": "_dx-colorpicker-text_1h5y3_96",
  "dx-colorpicker-chevron": "_dx-colorpicker-chevron_1h5y3_106",
  "dx-colorpicker-open": "_dx-colorpicker-open_1h5y3_115",
  "dx-colorpicker-popup": "_dx-colorpicker-popup_1h5y3_119",
  "dx-colorpicker-panel": "_dx-colorpicker-panel_1h5y3_133",
  "dx-saturation-picker": "_dx-saturation-picker_1h5y3_138",
  "dx-hue-picker": "_dx-hue-picker_1h5y3_149",
  "dx-alpha-picker": "_dx-alpha-picker_1h5y3_150",
  "dx-saturation-indicator": "_dx-saturation-indicator_1h5y3_155",
  "dx-hue-indicator": "_dx-hue-indicator_1h5y3_180",
  "dx-alpha-indicator": "_dx-alpha-indicator_1h5y3_204",
  "dx-colorpicker-rgba": "_dx-colorpicker-rgba_1h5y3_217",
  "dx-colorpicker-rgba-field": "_dx-colorpicker-rgba-field_1h5y3_224",
  "dx-colorpicker-rgba-label": "_dx-colorpicker-rgba-label_1h5y3_231",
  "dx-colorpicker-rgba-input": "_dx-colorpicker-rgba-input_1h5y3_236",
  "dx-colorpicker-palette": "_dx-colorpicker-palette_1h5y3_256",
  "dx-colorpicker-swatch": "_dx-colorpicker-swatch_1h5y3_263",
  "dx-colorpicker-footer": "_dx-colorpicker-footer_1h5y3_291",
  "dx-colorpicker-ok": "_dx-colorpicker-ok_1h5y3_300"
}, Ix = [
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
function on(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function qs(e) {
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
function zx({ r: e, g: t, b: n }) {
  const r = (l) => Math.round(l).toString(16).padStart(2, "0");
  return `#${r(e)}${r(t)}${r(n)}`;
}
function Lx({ r: e, g: t, b: n }) {
  const r = e / 255, l = t / 255, a = n / 255, d = Math.max(r, l, a), s = Math.min(r, l, a), i = d - s;
  let c = 0;
  return i !== 0 && (d === r ? c = (l - a) / i % 6 : d === l ? c = (a - r) / i + 2 : c = (r - l) / i + 4, c *= 60, c < 0 && (c += 360)), {
    h: c,
    s: d === 0 ? 0 : i / d,
    v: d
  };
}
function ur({ h: e, s: t, v: n }) {
  const r = n * t, l = e / 60, a = r * (1 - Math.abs(l % 2 - 1));
  let d = 0, s = 0, i = 0;
  l < 1 ? (d = r, s = a) : l < 2 ? (d = a, s = r) : l < 3 ? (s = r, i = a) : l < 4 ? (s = a, i = r) : l < 5 ? (d = a, i = r) : (d = r, i = a);
  const c = n - r;
  return {
    r: Math.round((d + c) * 255),
    g: Math.round((s + c) * 255),
    b: Math.round((i + c) * 255),
    a: 1
  };
}
function Rx(e) {
  const t = qs(e);
  if (t) return t;
  const n = /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*([\d.]+))?\s*\)$/i.exec(
    e.trim()
  );
  return n ? {
    r: on(Number(n[1]), 0, 255),
    g: on(Number(n[2]), 0, 255),
    b: on(Number(n[3]), 0, 255),
    a: n[4] != null ? on(Number(n[4]), 0, 1) : 1
  } : null;
}
function Vo({ r: e, g: t, b: n, a: r }) {
  return r >= 1 ? `rgb(${e}, ${t}, ${n})` : `rgba(${e}, ${t}, ${n}, ${Math.round(r * 100) / 100})`;
}
const jO = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: n = !0,
  showPalette: r = !0,
  palette: l = Ix,
  showButton: a = !1,
  showArrow: d = !0,
  disabled: s = !1,
  invalid: i = !1,
  placeholder: c = "",
  size: f = "md",
  tabIndex: u = 0,
  className: h,
  onChange: m,
  onValueChange: b,
  onOpen: g,
  onClose: y
}) => {
  const p = oe(null), _ = oe(null), x = oe(null), N = oe(null), v = oe(null), $ = ot(), O = oe(null), T = Se(
    () => Rx(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [A, C] = q(!1), [D, I] = q(null), k = D ?? T, S = Se(() => Lx(k), [k]), E = B(
    (Z) => {
      const z = Vo(Z);
      m?.(z), b?.(z);
    },
    [m, b]
  ), P = B(
    (Z, z) => {
      I(Z), z && !a && E(Z);
    },
    [a, E]
  ), L = B(() => {
    C(!1), I(null), y?.(), _.current?.focus();
  }, [y]), j = B(() => {
    s || (I(T), C(!0), g?.());
  }, [s, T, g]), F = B(() => {
    A ? L() : j();
  }, [A, L, j]), X = B(
    (Z, z) => {
      const Y = x.current;
      if (!Y) return S;
      const Q = Y.getBoundingClientRect(), ge = on((Z - Q.left) / Q.width, 0, 1), ae = on(1 - (z - Q.top) / Q.height, 0, 1);
      return { h: S.h, s: ge, v: ae };
    },
    [S]
  ), ie = B(
    (Z, z) => {
      if (!z) return 0;
      const Y = z.getBoundingClientRect();
      return on((Z - Y.left) / Y.width, 0, 1);
    },
    []
  ), te = (Z) => {
    if (s) return;
    Z.preventDefault(), Z.currentTarget.setPointerCapture(Z.pointerId), O.current = "sat";
    const z = X(Z.clientX, Z.clientY);
    P({ ...ur(z), a: k.a }, !0);
  }, we = (Z) => {
    if (O.current !== "sat") return;
    Z.preventDefault();
    const z = X(Z.clientX, Z.clientY);
    P({ ...ur(z), a: k.a }, !0);
  }, le = (Z) => {
    if (s) return;
    Z.preventDefault(), Z.currentTarget.setPointerCapture(Z.pointerId), O.current = "hue";
    const z = ie(Z.clientX, N.current);
    P(
      { ...ur({ ...S, h: z * 360 }), a: k.a },
      !0
    );
  }, _e = (Z) => {
    if (O.current !== "hue") return;
    Z.preventDefault();
    const z = ie(Z.clientX, N.current);
    P(
      { ...ur({ ...S, h: z * 360 }), a: k.a },
      !0
    );
  }, W = (Z) => {
    if (s) return;
    Z.preventDefault(), Z.currentTarget.setPointerCapture(Z.pointerId), O.current = "alpha";
    const z = ie(Z.clientX, v.current);
    P({ ...k, a: z }, !0);
  }, he = (Z) => {
    if (O.current !== "alpha") return;
    Z.preventDefault();
    const z = ie(Z.clientX, v.current);
    P({ ...k, a: z }, !0);
  }, ue = () => {
    O.current = null;
  }, ye = B(
    (Z, z) => {
      const Y = {
        h: S.h,
        s: on(S.s + Z, 0, 1),
        v: on(S.v + z, 0, 1)
      };
      P({ ...ur(Y), a: k.a }, !0);
    },
    [S, k.a, P]
  ), pe = B(
    (Z) => {
      const z = (S.h + Z + 360) % 360;
      P({ ...ur({ ...S, h: z }), a: k.a }, !0);
    },
    [S, k.a, P]
  ), De = B(
    (Z) => {
      P({ ...k, a: on(k.a + Z, 0, 1) }, !0);
    },
    [k, P]
  ), G = (Z) => {
    switch (Z.key) {
      case "ArrowLeft":
        Z.preventDefault(), ye(-0.05, 0);
        break;
      case "ArrowRight":
        Z.preventDefault(), ye(0.05, 0);
        break;
      case "ArrowUp":
        Z.preventDefault(), ye(0, 0.05);
        break;
      case "ArrowDown":
        Z.preventDefault(), ye(0, -0.05);
        break;
      case "Escape":
        Z.preventDefault(), L();
        break;
    }
  }, $e = (Z, z) => {
    switch (Z.key) {
      case "ArrowLeft":
        Z.preventDefault(), z === "hue" ? pe(-6) : De(-0.05);
        break;
      case "ArrowRight":
        Z.preventDefault(), z === "hue" ? pe(6) : De(0.05);
        break;
      case "Escape":
        Z.preventDefault(), L();
        break;
    }
  }, ne = (Z, z) => {
    if (Z === "hex") {
      const ae = qs(z);
      ae && P({ ...ae, a: k.a }, !0);
      return;
    }
    const Y = z.replace(/[^\d.]/g, ""), Q = Number.parseFloat(Y);
    if (Number.isNaN(Q)) return;
    if (Z === "a") {
      const ae = Y.includes(".") ? on(Q, 0, 1) : on(Q / 100, 0, 1);
      P({ ...k, a: ae }, !0);
      return;
    }
    const ge = { r: 255, g: 255, b: 255 };
    P(
      { ...k, [Z]: on(Q, 0, ge[Z]) },
      !0
    );
  }, Ae = () => {
    D && (E(D), I(null), C(!1), y?.(), _.current?.focus());
  };
  ve(() => {
    if (!A) return;
    const Z = (z) => {
      p.current && !p.current.contains(z.target) && L();
    };
    return document.addEventListener("mousedown", Z), () => document.removeEventListener("mousedown", Z);
  }, [A, L]), ve(() => {
    if (!A) return;
    const Z = (z) => {
      z.key === "Escape" && L();
    };
    return document.addEventListener("keydown", Z), () => document.removeEventListener("keydown", Z);
  }, [A, L]);
  const fe = f === "xs" ? Re["dx-colorpicker-trigger-xs"] : f === "sm" ? Re["dx-colorpicker-trigger-sm"] : f === "lg" ? Re["dx-colorpicker-trigger-lg"] : f === "xl" ? Re["dx-colorpicker-trigger-xl"] : Re["dx-colorpicker-trigger"], Fe = Vo(k), Ge = zx(k), Je = { x: S.s * 100, y: (1 - S.v) * 100 }, At = S.h / 360 * 100, lt = k.a * 100, yt = /* @__PURE__ */ M("div", { className: Re["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ o(
      "div",
      {
        ref: x,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(S.s * 100),
        "aria-valuetext": `Saturation ${Math.round(S.s * 100)}%, value ${Math.round(S.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : u,
        className: Re["dx-saturation-picker"],
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${S.h}, 100%, 50%)`
        },
        onKeyDown: G,
        onPointerDown: te,
        onPointerMove: we,
        onPointerUp: ue,
        children: /* @__PURE__ */ o(
          "span",
          {
            className: Re["dx-saturation-indicator"],
            style: { left: `${Je.x}%`, top: `${Je.y}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    t && /* @__PURE__ */ o(
      "div",
      {
        ref: N,
        role: "slider",
        "aria-label": "Hue",
        "aria-valuemin": 0,
        "aria-valuemax": 360,
        "aria-valuenow": Math.round(S.h),
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : u,
        className: Re["dx-hue-picker"],
        onKeyDown: (Z) => $e(Z, "hue"),
        onPointerDown: le,
        onPointerMove: _e,
        onPointerUp: ue,
        children: /* @__PURE__ */ o(
          "span",
          {
            className: Re["dx-hue-indicator"],
            style: { left: `${At}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    t && /* @__PURE__ */ o(
      "div",
      {
        ref: v,
        role: "slider",
        "aria-label": "Alpha",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(lt),
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : u,
        className: Re["dx-alpha-picker"],
        style: {
          background: `repeating-conic-gradient(var(--dx-border-color) 0% 25%, var(--dx-surface-color) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${S.h}, 100%, 50%))`
        },
        onKeyDown: (Z) => $e(Z, "alpha"),
        onPointerDown: W,
        onPointerMove: he,
        onPointerUp: ue,
        children: /* @__PURE__ */ o(
          "span",
          {
            className: Re["dx-alpha-indicator"],
            style: { left: `${lt}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    n && /* @__PURE__ */ M("div", { className: Re["dx-colorpicker-rgba"], children: [
      /* @__PURE__ */ M("label", { className: Re["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: Re["dx-colorpicker-rgba-label"], children: "Hex" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            maxLength: 7,
            className: Re["dx-colorpicker-rgba-input"],
            "aria-label": "Hex",
            value: Ge,
            onChange: (Z) => ne("hex", Z.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ M("label", { className: Re["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: Re["dx-colorpicker-rgba-label"], children: "R" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Re["dx-colorpicker-rgba-input"],
            "aria-label": "Red",
            value: k.r,
            onChange: (Z) => ne("r", Z.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ M("label", { className: Re["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: Re["dx-colorpicker-rgba-label"], children: "G" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Re["dx-colorpicker-rgba-input"],
            "aria-label": "Green",
            value: k.g,
            onChange: (Z) => ne("g", Z.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ M("label", { className: Re["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: Re["dx-colorpicker-rgba-label"], children: "B" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            inputMode: "numeric",
            maxLength: 3,
            className: Re["dx-colorpicker-rgba-input"],
            "aria-label": "Blue",
            value: k.b,
            onChange: (Z) => ne("b", Z.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ M("label", { className: Re["dx-colorpicker-rgba-field"], children: [
        /* @__PURE__ */ o("span", { className: Re["dx-colorpicker-rgba-label"], children: "A" }),
        /* @__PURE__ */ o(
          "input",
          {
            type: "text",
            inputMode: "decimal",
            maxLength: 4,
            className: Re["dx-colorpicker-rgba-input"],
            "aria-label": "Alpha",
            value: Math.round(k.a * 100),
            onChange: (Z) => ne("a", Z.target.value)
          }
        )
      ] })
    ] }),
    r && /* @__PURE__ */ o("div", { className: Re["dx-colorpicker-palette"], children: l.map((Z) => /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        className: Re["dx-colorpicker-swatch"],
        "aria-label": Z,
        "aria-disabled": s || void 0,
        tabIndex: s ? -1 : u,
        style: { backgroundColor: Z },
        onClick: () => {
          const z = qs(Z);
          a ? P({ ...z, a: k.a }, !1) : (I(null), E({ ...z, a: k.a }), C(!1), y?.(), _.current?.focus());
        }
      },
      Z
    )) }),
    a && /* @__PURE__ */ o("div", { className: Re["dx-colorpicker-footer"], children: /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        className: Re["dx-colorpicker-ok"],
        onClick: Ae,
        children: "OK"
      }
    ) })
  ] });
  return /* @__PURE__ */ M(
    "div",
    {
      ref: p,
      className: [
        Re["dx-colorpicker"],
        A ? Re["dx-colorpicker-open"] : null,
        i ? Re["dx-colorpicker-invalid"] : null,
        h
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ M(
          "button",
          {
            ref: _,
            type: "button",
            className: [Re["dx-colorpicker-trigger"], fe].join(" "),
            "aria-haspopup": "dialog",
            "aria-expanded": A,
            "aria-controls": $,
            "aria-label": "Pick a color",
            "aria-disabled": s || void 0,
            disabled: s,
            tabIndex: u,
            onClick: F,
            onKeyDown: (Z) => {
              Z.key === "Escape" && A && (Z.preventDefault(), L());
            },
            children: [
              /* @__PURE__ */ o(
                "span",
                {
                  className: Re["dx-colorpicker-value"],
                  style: { backgroundColor: Fe },
                  "aria-hidden": "true"
                }
              ),
              c && /* @__PURE__ */ o("span", { className: Re["dx-colorpicker-text"], children: c }),
              d && /* @__PURE__ */ o("span", { className: Re["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ o(Me, { icon: "keyboard_arrow_down", size: 14 }) })
            ]
          }
        ),
        A && /* @__PURE__ */ o(
          "div",
          {
            id: $,
            role: "dialog",
            "aria-label": "Choose color",
            className: Re["dx-colorpicker-popup"],
            children: yt
          }
        )
      ]
    }
  );
}, Ue = {
  "dx-datepicker": "_dx-datepicker_1srju_1",
  "dx-datepicker-inline": "_dx-datepicker-inline_1srju_9",
  "dx-datepicker-input": "_dx-datepicker-input_1srju_13",
  "dx-datepicker-input-invalid": "_dx-datepicker-input-invalid_1srju_43",
  "dx-datepicker-input--xs": "_dx-datepicker-input--xs_1srju_50",
  "dx-datepicker-input--sm": "_dx-datepicker-input--sm_1srju_56",
  "dx-datepicker-input--md": "_dx-datepicker-input--md_1srju_62",
  "dx-datepicker-input--lg": "_dx-datepicker-input--lg_1srju_68",
  "dx-datepicker-input--xl": "_dx-datepicker-input--xl_1srju_74",
  "dx-datepicker-trigger": "_dx-datepicker-trigger_1srju_80",
  "dx-datepicker-clear": "_dx-datepicker-clear_1srju_115",
  "dx-datepicker-clear--inset": "_dx-datepicker-clear--inset_1srju_145",
  "dx-datepicker-popup": "_dx-datepicker-popup_1srju_149",
  "dx-datepicker-calendar": "_dx-datepicker-calendar_1srju_161",
  "dx-datepicker-header": "_dx-datepicker-header_1srju_167",
  "dx-datepicker-nav": "_dx-datepicker-nav_1srju_175",
  "dx-datepicker-title": "_dx-datepicker-title_1srju_201",
  "dx-datepicker-grid": "_dx-datepicker-grid_1srju_209",
  "dx-datepicker-week-row": "_dx-datepicker-week-row_1srju_214",
  "dx-datepicker-row": "_dx-datepicker-row_1srju_215",
  "dx-datepicker-weekday": "_dx-datepicker-weekday_1srju_220",
  "dx-datepicker-day": "_dx-datepicker-day_1srju_230",
  "dx-datepicker-day--today": "_dx-datepicker-day--today_1srju_258",
  "dx-datepicker-day--selected": "_dx-datepicker-day--selected_1srju_262",
  "dx-datepicker-day--outside": "_dx-datepicker-day--outside_1srju_272",
  "dx-datepicker-day--disabled": "_dx-datepicker-day--disabled_1srju_276",
  "dx-datepicker-time": "_dx-datepicker-time_1srju_282",
  "dx-datepicker-time-field": "_dx-datepicker-time-field_1srju_291",
  "dx-datepicker-time-label": "_dx-datepicker-time-label_1srju_297",
  "dx-datepicker-time-control": "_dx-datepicker-time-control_1srju_302",
  "dx-datepicker-time-input": "_dx-datepicker-time-input_1srju_306",
  "dx-datepicker-time-buttons": "_dx-datepicker-time-buttons_1srju_326",
  "dx-datepicker-ok": "_dx-datepicker-ok_1srju_354"
}, Px = 42;
function ln(e) {
  return String(e).padStart(2, "0");
}
function Yt(e) {
  return `${e.year}-${ln(e.month)}-${ln(e.day)}`;
}
function jx(e, t) {
  const n = Yt(e);
  return t ? `${n} ${ln(e.hour)}:${ln(e.minute)}:${ln(e.second)}` : n;
}
function Ks(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!t) return null;
  const n = Number(t[1]), r = Number(t[2]), l = Number(t[3]), a = t[4] != null ? Number(t[4]) : 0, d = t[5] != null ? Number(t[5]) : 0, s = t[6] != null ? Number(t[6]) : 0;
  if (r < 1 || r > 12 || l < 1 || l > 31) return null;
  const i = new Date(n, r - 1, l, a, d, s);
  return i.getFullYear() !== n || i.getMonth() !== r - 1 || i.getDate() !== l ? null : { year: n, month: r, day: l, hour: a, minute: d, second: s };
}
function Wn() {
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
function In(e, t) {
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
function ss(e, t) {
  const n = new Date(e.year, e.month - 1 + t, 1), r = n.getFullYear(), l = n.getMonth() + 1, a = new Date(r, l, 0).getDate();
  return {
    year: r,
    month: l,
    day: Math.min(e.day, a),
    hour: e.hour,
    minute: e.minute,
    second: e.second
  };
}
function Yo(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const Xo = {
  yyyy: (e) => String(e.year).padStart(4, "0"),
  yy: (e) => ln(e.year % 100),
  MM: (e) => ln(e.month),
  M: (e) => String(e.month),
  dd: (e) => ln(e.day),
  d: (e) => String(e.day),
  HH: (e) => ln(e.hour),
  H: (e) => String(e.hour),
  mm: (e) => ln(e.minute),
  m: (e) => String(e.minute),
  ss: (e) => ln(e.second),
  s: (e) => String(e.second),
  tt: (e, t, n) => new Intl.DateTimeFormat(n, {
    hour: "numeric",
    hour12: !0
  }).formatToParts(t).find((l) => l.type === "dayPeriod")?.value ?? ""
}, Bx = [
  "yyyy",
  "yy",
  "MM",
  "dd",
  "HH",
  "mm",
  "ss",
  "tt"
], Fx = ["y", "M", "d", "H", "m", "s"];
function os(e, t, n) {
  const r = new Date(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second
  );
  let l = "", a = 0;
  for (; a < t.length; ) {
    let d = !1;
    for (const i of Bx)
      if (t.startsWith(i, a)) {
        l += Xo[i](e, r, n), a += i.length, d = !0;
        break;
      }
    if (d) continue;
    const s = t[a];
    if (Fx.includes(s)) {
      l += Xo[s](e, r, n), a += 1;
      continue;
    }
    l += s, a += 1;
  }
  return l;
}
const Hx = [
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
function Ux(e, t) {
  const n = {};
  let r = 0, l = 0;
  for (; l < t.length; ) {
    let s = null;
    for (const i of Hx)
      if (t.startsWith(i, l)) {
        s = i;
        break;
      }
    if (s) {
      const i = e.slice(r, r + s.length);
      if (!/^\d+$/.test(i)) return null;
      const c = Number(i);
      switch (s) {
        case "yyyy":
          n.year = c;
          break;
        case "yy":
        case "y":
          n.year = 2e3 + c;
          break;
        case "MM":
        case "M":
          n.month = c;
          break;
        case "dd":
        case "d":
          n.day = c;
          break;
        case "HH":
        case "H":
          n.hour = c;
          break;
        case "mm":
        case "m":
          n.minute = c;
          break;
        case "ss":
        case "s":
          n.second = c;
          break;
      }
      r += s.length, l += s.length;
      continue;
    }
    if (e[r] !== t[l]) return null;
    r += 1, l += 1;
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
  const d = new Date(
    a.year,
    a.month - 1,
    a.day,
    a.hour,
    a.minute,
    a.second
  );
  return d.getFullYear() !== a.year || d.getMonth() !== a.month - 1 || d.getDate() !== a.day ? null : a;
}
function Ir(e, t) {
  const n = Ks(e);
  return n || Ux(e, t);
}
function qx(e, t, n) {
  return t && Yt(e) < Yt(t) ? t : n && Yt(e) > Yt(n) ? n : e;
}
const Kx = ["hour", "minute", "second"];
function ls(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const BO = st(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: l,
    format: a = "yyyy-MM-dd",
    min: d,
    max: s,
    showTime: i = !1,
    showButton: c = !0,
    allowClear: f = !1,
    inline: u = !1,
    disabledDates: h,
    locale: m = "en-US",
    onChange: b,
    onValueChange: g,
    onOpen: y,
    onClose: p,
    disabled: _,
    readOnly: x,
    placeholder: N,
    ariaLabel: v,
    triggerLabel: $,
    clearLabel: O,
    tabIndex: T,
    className: A,
    onBlur: C,
    onKeyDown: D,
    ...I
  }, k) {
    const S = oe(null), E = oe(null), P = oe(null), L = oe(null), j = ot(), F = r !== void 0, [X, ie] = q(
      () => l != null ? os(
        Ir(l, a) ?? Wn(),
        a,
        m
      ) : ""
    ), [te, we] = q(!1), [le, _e] = q(null), [W, he] = q(() => {
      const V = r !== void 0 ? r ?? "" : l ?? "";
      if (V) {
        const me = Ir(V, a);
        if (me) return me;
      }
      return Wn();
    }), ue = Se(() => d ? Ks(d) : null, [d]), ye = Se(() => s ? Ks(s) : null, [s]), pe = Se(
      () => new Set(h ?? []),
      [h]
    ), De = Se(() => {
      const V = F ? r ?? "" : X;
      return V ? Ir(V, a) : null;
    }, [r, X, F, a]), G = B(
      (V) => {
        const me = Yt(V);
        return !!(pe.has(me) || ue && me < Yt(ue) || ye && me > Yt(ye));
      },
      [pe, ue, ye]
    ), $e = B(
      (V) => {
        if (!G(V)) return V;
        for (let me = 1; me <= 366; me += 1) {
          const Ve = In(V, me);
          if (!G(Ve)) return Ve;
          const Ye = In(V, -me);
          if (!G(Ye)) return Ye;
        }
        return V;
      },
      [G]
    ), ne = B(
      (V) => {
        F || ie(V ? os(V, a, m) : "");
        const me = V ? jx(V, i) : "";
        b?.(me), g?.(me);
      },
      [F, a, m, i, b, g]
    ), Ae = B(
      (V) => {
        E.current = V, typeof k == "function" ? k(V) : k && (k.current = V);
      },
      [k]
    ), fe = B(() => {
      we(!1), _e(null), p?.(), u || P.current?.focus();
    }, [u, p]), Fe = B(() => {
      if (_) return;
      const V = De ?? Wn();
      _e(V), he($e(V)), we(!0), y?.();
    }, [_, De, $e, y]), Ge = B(() => {
      te ? fe() : Fe();
    }, [te, fe, Fe]), Je = B((V) => {
      L.current?.querySelector(
        `[data-date="${Yt(V)}"]`
      )?.focus();
    }, []), At = B(
      (V) => {
        if (G(V)) return;
        const me = le ?? De, Ye = {
          ...i ? {
            hour: me?.hour ?? 0,
            minute: me?.minute ?? 0,
            second: me?.second ?? 0
          } : { hour: 0, minute: 0, second: 0 },
          year: V.year,
          month: V.month,
          day: V.day
        };
        _e(Ye), i || (ne(Ye), fe());
      },
      [G, le, De, i, ne, fe]
    ), lt = B(
      (V, me) => {
        _e((Ve) => {
          const Ye = Ve ?? De ?? Wn(), Xe = Math.min(V === "hour" ? 23 : 59, Math.max(0, Ye[V] + me));
          return { ...Ye, [V]: Xe };
        });
      },
      [De]
    ), yt = B(
      (V, me) => {
        const Ve = me.replace(/\D/g, ""), Ye = Ve === "" ? 0 : Number(Ve), Pt = V === "hour" ? 23 : 59;
        _e((Xe) => ({ ...Xe ?? De ?? Wn(), [V]: Math.min(Pt, Ye) }));
      },
      [De]
    ), Z = B(() => {
      le && (ne(le), fe());
    }, [le, ne, fe]), z = B(() => {
      if (te) return;
      const V = Ir(X, a);
      ne(V ? qx(V, ue, ye) : null);
    }, [te, X, a, ue, ye, ne]), Y = (V) => {
      const me = V.target.value;
      F || ie(me), te && _e(null);
    }, Q = (V) => {
      V.key === "Enter" ? (V.preventDefault(), te ? le && (ne(le), fe()) : z()) : V.key === "Escape" ? te && (V.preventDefault(), fe()) : V.key === "ArrowDown" && !te ? (V.preventDefault(), Fe()) : V.key === "Tab" && te && we(!1), D?.(V);
    }, ge = (V) => {
      z(), C?.(V);
    }, ae = (V) => {
      let me = null;
      switch (V.key) {
        case "ArrowLeft":
          me = In(W, -1), V.preventDefault();
          break;
        case "ArrowRight":
          me = In(W, 1), V.preventDefault();
          break;
        case "ArrowUp":
          me = In(W, -7), V.preventDefault();
          break;
        case "ArrowDown":
          me = In(W, 7), V.preventDefault();
          break;
        case "Home":
          me = In(W, -Yo(W)), V.preventDefault();
          break;
        case "End":
          me = In(W, 6 - Yo(W)), V.preventDefault();
          break;
        case "PageUp":
          me = ss(W, V.shiftKey ? -12 : -1), V.preventDefault();
          break;
        case "PageDown":
          me = ss(W, V.shiftKey ? 12 : 1), V.preventDefault();
          break;
        case "Enter":
        case " ":
          V.preventDefault(), At(W);
          break;
        case "Escape":
          V.preventDefault(), fe();
          break;
        case "Tab":
          we(!1);
          break;
      }
      if (me) {
        const Ve = $e(me);
        he(Ve), setTimeout(() => Je(Ve), 0);
      }
    };
    ve(() => {
      if (!te) return;
      const V = (me) => {
        S.current && !S.current.contains(me.target) && fe();
      };
      return document.addEventListener("mousedown", V), () => document.removeEventListener("mousedown", V);
    }, [te, fe]), ve(() => {
      if (!te) return;
      const V = (me) => {
        me.key === "Escape" && fe();
      };
      return document.addEventListener("keydown", V), () => document.removeEventListener("keydown", V);
    }, [te, fe]);
    const Ee = () => {
      F || ie(""), b?.(""), g?.(""), E.current?.focus();
    }, je = te && le ? os(le, a, m) : F ? r ? os(
      Ir(r, a) ?? Wn(),
      a,
      m
    ) : "" : X, Ze = F ? !!r : X.length > 0, Qe = u || te, nt = { year: W.year, month: W.month }, Xt = new Date(nt.year, nt.month - 1, 1).getDay(), re = {
      year: nt.year,
      month: nt.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, Le = [];
    for (let V = 0; V < Px; V += 1)
      Le.push(In(re, V - Xt));
    const Nt = le ? Yt(le) : De ? Yt(De) : null, Rt = Yt(Wn()), xt = `${nt.year}-${ln(nt.month)}`, Ie = Se(
      () => new Intl.DateTimeFormat(m, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      [m]
    ), Ke = new Intl.DateTimeFormat(m, {
      month: "long",
      year: "numeric"
    }).format(new Date(nt.year, nt.month - 1, 1)), vt = Array.from(
      { length: 7 },
      (V, me) => new Intl.DateTimeFormat(m, { weekday: "short" }).format(
        new Date(2021, 0, 3 + me)
      )
    ), $t = t === "xs" ? Ue["dx-datepicker-input--xs"] : t === "sm" ? Ue["dx-datepicker-input--sm"] : t === "lg" ? Ue["dx-datepicker-input--lg"] : t === "xl" ? Ue["dx-datepicker-input--xl"] : Ue["dx-datepicker-input--md"], at = /* @__PURE__ */ M(
      "div",
      {
        className: Ue["dx-datepicker-calendar"],
        "aria-label": v ?? "Date picker",
        children: [
          /* @__PURE__ */ M("div", { className: Ue["dx-datepicker-header"], children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: Ue["dx-datepicker-nav"],
                "aria-label": "Previous month",
                onClick: () => {
                  const V = $e(ss(W, -1));
                  he(V), setTimeout(() => Je(V), 0);
                },
                children: /* @__PURE__ */ o(Me, { icon: "chevron_left", size: 16 })
              }
            ),
            /* @__PURE__ */ o("span", { className: Ue["dx-datepicker-title"], children: Ke }),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: Ue["dx-datepicker-nav"],
                "aria-label": "Next month",
                onClick: () => {
                  const V = $e(ss(W, 1));
                  he(V), setTimeout(() => Je(V), 0);
                },
                children: /* @__PURE__ */ o(Me, { icon: "chevron_right", size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ M(
            "div",
            {
              ref: L,
              role: "grid",
              className: Ue["dx-datepicker-grid"],
              onKeyDown: ae,
              children: [
                /* @__PURE__ */ o("div", { role: "row", className: Ue["dx-datepicker-week-row"], children: vt.map((V) => /* @__PURE__ */ o(
                  "div",
                  {
                    role: "columnheader",
                    className: Ue["dx-datepicker-weekday"],
                    children: V
                  },
                  V
                )) }),
                Array.from({ length: 6 }, (V, me) => /* @__PURE__ */ o(
                  "div",
                  {
                    role: "row",
                    className: Ue["dx-datepicker-row"],
                    children: Le.slice(me * 7, me * 7 + 7).map((Ve) => {
                      const Ye = Yt(Ve), Pt = G(Ve), Xe = Ye.startsWith(xt);
                      return /* @__PURE__ */ o(
                        "button",
                        {
                          type: "button",
                          role: "gridcell",
                          "data-date": Ye,
                          tabIndex: Ye === Yt(W) ? 0 : -1,
                          "aria-selected": Ye === Nt || void 0,
                          "aria-disabled": Pt || void 0,
                          "aria-label": Ie.format(
                            new Date(Ve.year, Ve.month - 1, Ve.day)
                          ),
                          className: [
                            Ue["dx-datepicker-day"],
                            Xe ? null : Ue["dx-datepicker-day--outside"],
                            Ye === Rt ? Ue["dx-datepicker-day--today"] : null,
                            Ye === Nt ? Ue["dx-datepicker-day--selected"] : null,
                            Pt ? Ue["dx-datepicker-day--disabled"] : null
                          ].filter(Boolean).join(" "),
                          onClick: () => At(Ve),
                          onFocus: () => he(Ve),
                          children: Ve.day
                        },
                        Ye
                      );
                    })
                  },
                  me
                ))
              ]
            }
          ),
          i && /* @__PURE__ */ M("div", { className: Ue["dx-datepicker-time"], children: [
            Kx.map((V) => /* @__PURE__ */ M("label", { className: Ue["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ o("span", { className: Ue["dx-datepicker-time-label"], children: ls(V) }),
              /* @__PURE__ */ M("div", { className: Ue["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ o(
                  "input",
                  {
                    className: Ue["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": ls(V),
                    value: ln(
                      (le ?? De ?? Wn())[V]
                    ),
                    onChange: (me) => yt(V, me.target.value),
                    onKeyDown: (me) => {
                      me.key === "ArrowUp" ? (me.preventDefault(), lt(V, 1)) : me.key === "ArrowDown" ? (me.preventDefault(), lt(V, -1)) : me.key === "Enter" && (me.preventDefault(), Z());
                    }
                  }
                ),
                /* @__PURE__ */ M("span", { className: Ue["dx-datepicker-time-buttons"], children: [
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Increase ${ls(V).toLowerCase()}`,
                      onClick: () => lt(V, 1),
                      children: /* @__PURE__ */ o(Me, { icon: "keyboard_arrow_up", size: 11 })
                    }
                  ),
                  /* @__PURE__ */ o(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Decrease ${ls(V).toLowerCase()}`,
                      onClick: () => lt(V, -1),
                      children: /* @__PURE__ */ o(Me, { icon: "keyboard_arrow_down", size: 11 })
                    }
                  )
                ] })
              ] })
            ] }, V)),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: Ue["dx-datepicker-ok"],
                onClick: Z,
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
          Ue["dx-datepicker"],
          u ? Ue["dx-datepicker-inline"] : null,
          A
        ].filter(Boolean).join(" "),
        children: [
          !u && /* @__PURE__ */ M(pt, { children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: Ae,
                type: "text",
                autoComplete: "off",
                value: je,
                disabled: _,
                readOnly: x,
                placeholder: N,
                tabIndex: T,
                role: c ? void 0 : "combobox",
                "aria-label": v ?? "Date",
                "aria-haspopup": c ? void 0 : "dialog",
                "aria-expanded": c ? void 0 : Qe,
                "aria-controls": c ? void 0 : j,
                "aria-invalid": n || void 0,
                className: [
                  Ue["dx-datepicker-input"],
                  $t,
                  n ? Ue["dx-datepicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: Y,
                onKeyDown: Q,
                onBlur: ge,
                onClick: () => {
                  c || Ge();
                },
                ...I
              }
            ),
            f && !_ && Ze && /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: [
                  Ue["dx-datepicker-clear"],
                  c ? Ue["dx-datepicker-clear--inset"] : null
                ].filter(Boolean).join(" "),
                "aria-label": O ?? "Clear",
                onClick: Ee,
                children: /* @__PURE__ */ o(Me, { icon: "close", size: 14 })
              }
            ),
            c && /* @__PURE__ */ o(
              "button",
              {
                ref: P,
                type: "button",
                className: [Ue["dx-datepicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": $ ?? "Open calendar",
                "aria-haspopup": "dialog",
                "aria-expanded": te,
                "aria-controls": j,
                disabled: _,
                onClick: Ge,
                children: /* @__PURE__ */ o(Me, { icon: "calendar_month", size: 16 })
              }
            )
          ] }),
          Qe && /* @__PURE__ */ o(
            "div",
            {
              id: j,
              role: u ? void 0 : "dialog",
              "aria-label": u ? void 0 : v ?? "Date picker",
              className: u ? void 0 : Ue["dx-datepicker-popup"],
              children: at
            }
          )
        ]
      }
    );
  }
), Gn = {
  "dx-rating": "_dx-rating_uhqbm_1",
  "dx-rating-item": "_dx-rating-item_uhqbm_8",
  "dx-rating-item-filled": "_dx-rating-item-filled_uhqbm_28",
  "dx-rating-icon-filled": "_dx-rating-icon-filled_uhqbm_43",
  "dx-rating-icon-empty": "_dx-rating-icon-empty_uhqbm_51",
  "dx-rating-clear": "_dx-rating-clear_uhqbm_55",
  "dx-rating-readonly": "_dx-rating-readonly_uhqbm_87",
  "dx-rating-disabled": "_dx-rating-disabled_uhqbm_96"
}, FO = ({
  value: e = 0,
  stars: t = 5,
  readOnly: n = !1,
  disabled: r = !1,
  ariaLabel: l = "Rating",
  clearLabel: a = "Clear",
  rateLabel: d = "Rate",
  tabIndex: s = 0,
  className: i,
  onChange: c,
  onValueChange: f
}) => {
  const [u, h] = q(e), m = B(
    (_) => Math.min(t, Math.max(1, _)),
    [t]
  ), b = B(
    (_) => {
      c?.(_), f?.(_);
    },
    [c, f]
  ), g = B(
    (_) => {
      n || r || (b(_), h(_));
    },
    [n, r, b]
  ), y = (_) => {
    if (n || r) return;
    const x = u > 0 ? u : 1;
    switch (_.key) {
      case "ArrowRight":
      case "ArrowUp":
        _.preventDefault(), g(m(x + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        _.preventDefault(), g(m(x - 1));
        break;
      case "Home":
        _.preventDefault(), g(1);
        break;
      case "End":
        _.preventDefault(), g(t);
        break;
    }
  }, p = Array.from({ length: t }, (_, x) => x + 1);
  return /* @__PURE__ */ M(
    "div",
    {
      role: "radiogroup",
      "aria-label": l,
      "aria-readonly": n || void 0,
      className: [
        Gn["dx-rating"],
        n ? Gn["dx-rating-readonly"] : null,
        r ? Gn["dx-rating-disabled"] : null,
        i
      ].filter(Boolean).join(" "),
      onKeyDown: y,
      children: [
        !n && !r && /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: Gn["dx-rating-clear"],
            "aria-label": a,
            tabIndex: e === 0 ? s : -1,
            disabled: r,
            onClick: () => g(0),
            children: /* @__PURE__ */ o(Me, { icon: "block", size: 16 })
          }
        ),
        p.map((_) => {
          const x = _ <= e, N = _ === (e > 0 ? e : u);
          return /* @__PURE__ */ M(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": x,
              "aria-posinset": _,
              "aria-setsize": t,
              "aria-label": `${d} ${_}`,
              tabIndex: N ? s : -1,
              "aria-disabled": r || n || void 0,
              disabled: r || n,
              className: [
                Gn["dx-rating-item"],
                x ? Gn["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => g(_),
              onFocus: () => h(_),
              children: [
                /* @__PURE__ */ o(
                  "span",
                  {
                    className: Gn["dx-rating-icon-filled"],
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ o(Me, { icon: "star", size: 20 })
                  }
                ),
                /* @__PURE__ */ o("span", { className: Gn["dx-rating-icon-empty"], "aria-hidden": "true", children: /* @__PURE__ */ o(Me, { icon: "star", size: 20 }) })
              ]
            },
            _
          );
        })
      ]
    }
  );
}, Qn = {
  "dx-slider": "_dx-slider_18zjj_1",
  "dx-slider-track": "_dx-slider-track_18zjj_9",
  "dx-slider-range": "_dx-slider-range_18zjj_17",
  "dx-slider-handle": "_dx-slider-handle_18zjj_26",
  "dx-slider-vertical": "_dx-slider-vertical_18zjj_58",
  "dx-slider-disabled": "_dx-slider-disabled_18zjj_84"
};
function On(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const HO = ({
  value: e = 0,
  valueMin: t = 0,
  valueMax: n = 100,
  min: r = 0,
  max: l = 100,
  step: a = 1,
  range: d = !1,
  orientation: s = "horizontal",
  disabled: i = !1,
  label: c = "Value",
  minLabel: f = "Min",
  maxLabel: u = "Max",
  tabIndex: h = 0,
  className: m,
  onChange: b,
  onInput: g,
  onValueChange: y,
  onInputChange: p
}) => {
  const _ = oe(null), x = oe(
    null
  ), [N, v] = q(null), $ = N ?? e, O = Se(
    () => On($, r, l),
    [$, r, l]
  ), T = Se(
    () => On(d ? t : O, r, l),
    [d, t, O, r, l]
  ), A = Se(
    () => On(d ? Math.max(n, T) : O, r, l),
    [d, n, T, O, r, l]
  ), C = B(
    (W) => {
      const he = l - r;
      return he <= 0 ? 0 : (On(W, r, l) - r) / he * 100;
    },
    [r, l]
  ), D = B(
    (W, he) => {
      const ue = _.current;
      if (!ue) return r;
      const ye = ue.getBoundingClientRect();
      let pe;
      s === "vertical" ? pe = 1 - (he - ye.top) / ye.height : pe = (W - ye.left) / ye.width;
      const De = r + On(pe, 0, 1) * (l - r);
      return a > 0 ? On(Math.round(De / a) * a, r, l) : On(De, r, l);
    },
    [r, l, a, s]
  ), I = B(
    (W) => {
      typeof W == "number" && v(W), b?.(W), y?.(W);
    },
    [b, y]
  ), k = B(
    (W) => {
      typeof W == "number" && v(W), g?.(W), p?.(W);
    },
    [g, p]
  ), S = B(
    (W, he, ue) => {
      const ye = D(he, ue);
      let pe;
      d ? W === "min" ? pe = { min: Math.min(ye, A), max: A } : pe = { min: T, max: Math.max(ye, T) } : pe = ye, k(pe), x.current === null && I(pe);
    },
    [d, D, T, A, k, I]
  ), E = B(
    (W, he) => {
      const ue = (a > 0 ? a : 1) * he;
      let ye;
      d ? W === "min" ? ye = {
        min: On(T + ue, r, A),
        max: A
      } : ye = {
        min: T,
        max: On(A + ue, T, l)
      } : ye = On(O + ue, r, l), I(ye);
    },
    [d, a, r, l, T, A, O, I]
  ), P = (W, he) => {
    if (!i)
      switch (he.key) {
        case "ArrowLeft":
        case "ArrowDown":
          he.preventDefault(), E(W, -1);
          break;
        case "ArrowRight":
        case "ArrowUp":
          he.preventDefault(), E(W, 1);
          break;
        case "Home":
          he.preventDefault(), I(d ? W === "min" ? { min: r, max: A } : { min: T, max: T } : r);
          break;
        case "End":
          he.preventDefault(), I(d ? W === "min" ? { min: A, max: A } : { min: T, max: l } : l);
          break;
      }
  }, L = (W, he) => {
    i || (he.preventDefault(), he.currentTarget.focus(), typeof he.currentTarget.setPointerCapture == "function" && he.currentTarget.setPointerCapture(he.pointerId), x.current = { key: W, pointerId: he.pointerId }, S(W, he.clientX, he.clientY));
  }, j = (W) => {
    !x.current || x.current.pointerId !== W.pointerId || (W.preventDefault(), S(x.current.key, W.clientX, W.clientY));
  }, F = (W) => {
    !x.current || x.current.pointerId !== W.pointerId || (x.current = null, W.preventDefault(), I(d ? { min: T, max: A } : O));
  }, [X, ie] = q(null), te = C(T), we = C(A), le = d ? te : 0, _e = we;
  return /* @__PURE__ */ o(
    "div",
    {
      className: [
        Qn["dx-slider"],
        s === "vertical" ? Qn["dx-slider-vertical"] : null,
        i ? Qn["dx-slider-disabled"] : null,
        m
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ M("div", { ref: _, className: Qn["dx-slider-track"], children: [
        /* @__PURE__ */ o(
          "div",
          {
            className: Qn["dx-slider-range"],
            style: s === "vertical" ? { bottom: `${le}%`, height: `${_e - le}%` } : { left: `${le}%`, width: `${_e - le}%` }
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            role: "slider",
            "aria-valuemin": r,
            "aria-valuemax": l,
            "aria-valuenow": Math.round(T),
            "aria-orientation": s,
            "aria-label": d ? f : c,
            "aria-disabled": i || void 0,
            tabIndex: i || d && X === "max" ? -1 : h,
            className: Qn["dx-slider-handle"],
            style: s === "vertical" ? { bottom: `calc(${te}% - 8px)` } : { left: `calc(${te}% - 8px)` },
            onKeyDown: (W) => P("min", W),
            onPointerDown: (W) => L("min", W),
            onPointerMove: j,
            onPointerUp: F,
            onFocus: () => ie("min")
          }
        ),
        d && /* @__PURE__ */ o(
          "div",
          {
            role: "slider",
            "aria-valuemin": r,
            "aria-valuemax": l,
            "aria-valuenow": Math.round(A),
            "aria-orientation": s,
            "aria-label": u,
            "aria-disabled": i || void 0,
            tabIndex: i || X === "min" ? -1 : h,
            className: Qn["dx-slider-handle"],
            style: s === "vertical" ? { bottom: `calc(${we}% - 8px)` } : { left: `calc(${we}% - 8px)` },
            onKeyDown: (W) => P("max", W),
            onPointerDown: (W) => L("max", W),
            onPointerMove: j,
            onPointerUp: F,
            onFocus: () => ie("max")
          }
        )
      ] })
    }
  );
}, dt = {
  "dx-timespanpicker": "_dx-timespanpicker_7t357_1",
  "dx-timespanpicker-inline": "_dx-timespanpicker-inline_7t357_9",
  "dx-timespanpicker-input": "_dx-timespanpicker-input_7t357_13",
  "dx-timespanpicker-input-invalid": "_dx-timespanpicker-input-invalid_7t357_43",
  "dx-timespanpicker-input--xs": "_dx-timespanpicker-input--xs_7t357_50",
  "dx-timespanpicker-input--sm": "_dx-timespanpicker-input--sm_7t357_56",
  "dx-timespanpicker-input--md": "_dx-timespanpicker-input--md_7t357_62",
  "dx-timespanpicker-input--lg": "_dx-timespanpicker-input--lg_7t357_68",
  "dx-timespanpicker-input--xl": "_dx-timespanpicker-input--xl_7t357_74",
  "dx-timespanpicker-trigger": "_dx-timespanpicker-trigger_7t357_80",
  "dx-timespanpicker-clear": "_dx-timespanpicker-clear_7t357_115",
  "dx-timespanpicker-popup": "_dx-timespanpicker-popup_7t357_145",
  "dx-timespanpicker-panel": "_dx-timespanpicker-panel_7t357_157",
  "dx-timespanpicker-preview": "_dx-timespanpicker-preview_7t357_164",
  "dx-timespanpicker-units": "_dx-timespanpicker-units_7t357_173",
  "dx-timespanpicker-unit": "_dx-timespanpicker-unit_7t357_173",
  "dx-timespanpicker-unit-label": "_dx-timespanpicker-unit-label_7t357_185",
  "dx-timespanpicker-unit-control": "_dx-timespanpicker-unit-control_7t357_190",
  "dx-timespanpicker-unit-input": "_dx-timespanpicker-unit-input_7t357_194",
  "dx-timespanpicker-unit-buttons": "_dx-timespanpicker-unit-buttons_7t357_214",
  "dx-timespanpicker-footer": "_dx-timespanpicker-footer_7t357_242",
  "dx-timespanpicker-ok": "_dx-timespanpicker-ok_7t357_250"
}, Wx = "-10675199.02:48:05.4775808", Gx = "10675199.02:48:05.4775808", Ln = 86400, Rn = 3600, xn = 60, Ms = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, Zo = {
  days: Ln,
  hours: Rn,
  minutes: xn,
  seconds: 1
}, Vx = {
  day: Ln,
  hour: Rn,
  minute: xn,
  second: 1
};
function fr(e) {
  return String(e).padStart(2, "0");
}
function Fr(e) {
  const t = e.trim();
  if (!t) return null;
  let n = 1, r = t;
  r.startsWith("-") ? (n = -1, r = r.slice(1)) : r.startsWith("+") && (r = r.slice(1));
  const l = /^P(?:(\d+(?:\.\d+)?)D)?(?:T(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?)?$/.exec(
    r
  );
  if (l) {
    if (!l.slice(1).some((u) => u != null)) return null;
    const s = l[1] != null ? Number(l[1]) : 0, i = l[2] != null ? Number(l[2]) : 0, c = l[3] != null ? Number(l[3]) : 0, f = l[4] != null ? Number(l[4]) : 0;
    return n * (s * Ln + i * Rn + c * xn + f);
  }
  const a = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(
    r
  );
  if (a) {
    const d = a[1] != null ? Number(a[1]) : 0, s = Number(a[2]), i = Number(a[3]), c = a[4] != null ? Number(a[4]) : 0, f = a[5] != null ? +`0.${a[5]}` : 0;
    return s > 23 || i > 59 || c > 59 ? null : n * (d * Ln + s * Rn + i * xn + c + f);
  }
  return null;
}
function Yx(e) {
  return e.days * Ln + e.hours * Rn + e.minutes * xn + e.seconds;
}
function Jo(e) {
  let t = Math.abs(e);
  const n = Math.floor(t / Ln);
  t %= Ln;
  const r = Math.floor(t / Rn);
  t %= Rn;
  const l = Math.floor(t / xn), a = Math.round(t % xn * 1e9) / 1e9;
  return { days: n, hours: r, minutes: l, seconds: a };
}
function Ws(e, t) {
  const n = e < 0;
  let r = Math.abs(e);
  t === "minute" ? r = Math.round(r / xn) * xn : t === "hour" ? r = Math.round(r / Rn) * Rn : t === "day" && (r = Math.round(r / Ln) * Ln);
  let l = Math.round(r % xn);
  const a = l === 60 ? 1 : 0;
  l = l === 60 ? 0 : l;
  const d = Math.floor(r / xn) + a, s = d % 60, i = Math.floor(d / 60), c = i % 24, f = Math.floor(i / 24), u = n ? "-" : "", h = f > 0 ? `${f}.` : "";
  switch (t) {
    case "day":
      return `${u}${f} day${f === 1 ? "" : "s"}`;
    case "hour":
      return `${u}${h}${fr(c)}`;
    case "minute":
      return `${u}${h}${fr(c)}:${fr(s)}`;
    default:
      return `${u}${h}${fr(c)}:${fr(s)}:${fr(l)}`;
  }
}
function Qo(e, t = "second") {
  const n = Fr(e);
  return n === null ? "" : Ws(n, t);
}
function Is(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const UO = st(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: l,
    min: a = Wx,
    max: d = Gx,
    step: s = "1",
    precision: i = "second",
    showDays: c = !0,
    showHours: f = !0,
    showMinutes: u = !0,
    showSeconds: h = !0,
    allowClear: m = !1,
    inline: b = !1,
    onChange: g,
    onValueChange: y,
    onOpen: p,
    onClose: _,
    disabled: x,
    placeholder: N,
    ariaLabel: v,
    triggerLabel: $,
    clearLabel: O,
    tabIndex: T,
    className: A,
    onBlur: C,
    onKeyDown: D,
    ...I
  }, k) {
    const S = oe(null), E = oe(null), P = oe(null), L = ot(), j = r !== void 0, [F, X] = q(
      () => l != null ? Qo(l, i) : ""
    ), [ie, te] = q(!1), [we, le] = q(null), [_e, W] = q(null), he = Se(
      () => Fr(a) ?? -Number.MAX_SAFE_INTEGER,
      [a]
    ), ue = Se(
      () => Fr(d) ?? Number.MAX_SAFE_INTEGER,
      [d]
    ), ye = Se(() => {
      const re = Number.parseFloat(s);
      return Number.isNaN(re) || re <= 0 ? 1 : re;
    }, [s]), pe = Se(() => {
      const re = j ? r ?? "" : F;
      return re ? Fr(re) : null;
    }, [r, F, j]), De = B(
      (re) => {
        const Le = re === null ? "" : Ws(re, i);
        j || X(Le), g?.(Le), y?.(Le);
      },
      [j, i, g, y]
    ), G = B(
      (re) => {
        re && we !== null && De(we), te(!1), le(null), W(null), _?.(), b || P.current?.focus();
      },
      [b, we, De, _]
    ), $e = B(() => {
      x || (le(pe ?? 0), te(!0), p?.());
    }, [x, pe, p]), ne = B(() => {
      ie ? G(!1) : $e();
    }, [ie, G, $e]), Ae = B(
      (re, Le) => {
        le((Nt) => {
          const xt = (Nt ?? pe ?? 0) + Le * ye * Zo[re];
          return Is(xt, he, ue);
        });
      },
      [pe, ye, he, ue]
    ), fe = B(
      (re) => {
        const Le = _e?.[re];
        if (Le == null) return;
        const Nt = Number.parseFloat(Le), Rt = Number.isNaN(Nt) ? 0 : Nt;
        le((xt) => {
          const Ie = xt ?? pe ?? 0, Ke = Jo(Ie);
          Ke[re] = Rt;
          const $t = (Ie < 0 ? -1 : 1) * Yx(Ke);
          return Is($t, he, ue);
        }), W(null);
      },
      [_e, pe, he, ue]
    ), Fe = (re, Le) => {
      W((Nt) => ({ ...Nt ?? {}, [re]: Le }));
    }, Ge = (re, Le) => {
      switch (Le.key) {
        case "ArrowUp":
          Le.preventDefault(), fe(re), Ae(re, 1);
          break;
        case "ArrowDown":
          Le.preventDefault(), fe(re), Ae(re, -1);
          break;
        case "Home":
          Le.preventDefault(), fe(re), le(he);
          break;
        case "End":
          Le.preventDefault(), fe(re), le(ue);
          break;
        case "Enter":
          Le.preventDefault(), fe(re), G(!0);
          break;
      }
    }, Je = B(() => {
      if (ie) return;
      const re = Fr(F);
      De(re !== null ? Is(re, he, ue) : null);
    }, [ie, F, he, ue, De]), At = (re) => {
      j || X(re.target.value);
    }, lt = (re) => {
      re.key === "Enter" ? (re.preventDefault(), ie ? G(!0) : Je()) : re.key === "Escape" && ie ? (re.preventDefault(), G(!1)) : re.key === "ArrowDown" && !ie ? (re.preventDefault(), $e()) : re.key === "Tab" && ie && te(!1), D?.(re);
    }, yt = (re) => {
      Je(), C?.(re);
    }, Z = () => {
      j || X(""), g?.(""), y?.(""), E.current?.focus();
    };
    ve(() => {
      if (!ie) return;
      const re = (Le) => {
        S.current && !S.current.contains(Le.target) && G(!1);
      };
      return document.addEventListener("mousedown", re), () => document.removeEventListener("mousedown", re);
    }, [ie, G]), ve(() => {
      if (!ie) return;
      const re = (Le) => {
        Le.key === "Escape" && G(!1);
      };
      return document.addEventListener("keydown", re), () => document.removeEventListener("keydown", re);
    }, [ie, G]), ve(() => {
      if (b && we !== null) {
        const re = pe;
        (re === null || Math.abs(we - re) > 1e-9) && De(we);
      }
    }, [b, we, pe, De]);
    const z = B(
      (re) => {
        E.current = re, typeof k == "function" ? k(re) : k && (k.current = re);
      },
      [k]
    ), Y = j ? r ? Qo(r, i) : "" : F, Q = j ? !!r : F.length > 0, ge = b || ie, ae = we ?? pe ?? 0, Ee = Jo(ae), je = Vx[i], Qe = ["days", "hours", "minutes", "seconds"].filter(
      (re) => Zo[re] >= je && (re === "days" ? c : re === "hours" ? f : re === "minutes" ? u : h)
    ), nt = t === "xs" ? dt["dx-timespanpicker-input--xs"] : t === "sm" ? dt["dx-timespanpicker-input--sm"] : t === "lg" ? dt["dx-timespanpicker-input--lg"] : t === "xl" ? dt["dx-timespanpicker-input--xl"] : dt["dx-timespanpicker-input--md"], Xt = /* @__PURE__ */ M("div", { className: dt["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ o("div", { className: dt["dx-timespanpicker-preview"], "aria-live": "polite", children: Ws(ae, i) }),
      /* @__PURE__ */ o("div", { className: dt["dx-timespanpicker-units"], children: Qe.map((re) => /* @__PURE__ */ M("label", { className: dt["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ o("span", { className: dt["dx-timespanpicker-unit-label"], children: Ms[re] }),
        /* @__PURE__ */ M("span", { className: dt["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ o(
            "input",
            {
              className: dt["dx-timespanpicker-unit-input"],
              inputMode: "decimal",
              value: _e?.[re] ?? String(Ee[re]),
              onChange: (Le) => Fe(re, Le.target.value),
              onKeyDown: (Le) => Ge(re, Le),
              onBlur: () => fe(re)
            }
          ),
          /* @__PURE__ */ M("span", { className: dt["dx-timespanpicker-unit-buttons"], children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${Ms[re].toLowerCase()}`,
                onClick: () => {
                  fe(re), Ae(re, 1);
                },
                children: /* @__PURE__ */ o(Me, { icon: "keyboard_arrow_up", size: 11 })
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${Ms[re].toLowerCase()}`,
                onClick: () => {
                  fe(re), Ae(re, -1);
                },
                children: /* @__PURE__ */ o(Me, { icon: "keyboard_arrow_down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, re)) }),
      /* @__PURE__ */ o("div", { className: dt["dx-timespanpicker-footer"], children: /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          className: dt["dx-timespanpicker-ok"],
          onClick: () => G(!0),
          children: "OK"
        }
      ) })
    ] });
    return /* @__PURE__ */ M(
      "div",
      {
        ref: S,
        className: [
          dt["dx-timespanpicker"],
          b ? dt["dx-timespanpicker-inline"] : null,
          A
        ].filter(Boolean).join(" "),
        children: [
          !b && /* @__PURE__ */ M(pt, { children: [
            /* @__PURE__ */ o(
              "input",
              {
                ref: z,
                type: "text",
                autoComplete: "off",
                value: Y,
                disabled: x,
                placeholder: N,
                tabIndex: T,
                role: "combobox",
                "aria-label": v ?? "Time span",
                "aria-haspopup": "dialog",
                "aria-expanded": ie,
                "aria-controls": L,
                "aria-invalid": n || void 0,
                className: [
                  dt["dx-timespanpicker-input"],
                  nt,
                  n ? dt["dx-timespanpicker-input-invalid"] : null
                ].filter(Boolean).join(" "),
                onChange: At,
                onKeyDown: lt,
                onBlur: yt,
                ...I
              }
            ),
            m && !x && Q && /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: dt["dx-timespanpicker-clear"],
                "aria-label": O ?? "Clear",
                onClick: Z,
                children: /* @__PURE__ */ o(Me, { icon: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                ref: P,
                type: "button",
                className: [dt["dx-timespanpicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": $ ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": ie,
                "aria-controls": L,
                disabled: x,
                onClick: ne,
                children: /* @__PURE__ */ o(Me, { icon: "schedule", size: 16 })
              }
            )
          ] }),
          ge && /* @__PURE__ */ o(
            "div",
            {
              id: L,
              role: b ? void 0 : "dialog",
              "aria-label": v ?? "Time span picker",
              className: b ? void 0 : dt["dx-timespanpicker-popup"],
              children: Xt
            }
          )
        ]
      }
    );
  }
), Xx = "_wrapper_ou9x5_1", Zx = "_cells_ou9x5_8", Jx = "_cell_ou9x5_8", Qx = "_invalid_ou9x5_63", ev = "_live_ou9x5_73", er = {
  wrapper: Xx,
  cells: Zx,
  cell: Jx,
  "cell-sm": "_cell-sm_ou9x5_45",
  "cell-md": "_cell-md_ou9x5_51",
  "cell-lg": "_cell-lg_ou9x5_57",
  invalid: Qx,
  live: ev
};
function el(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const qO = st(
  function({
    length: t = 6,
    value: n,
    defaultValue: r,
    onChange: l,
    invalid: a = !1,
    size: d = "md",
    autoFocus: s = !1,
    disabled: i = !1,
    label: c = "Security code",
    liveAnnounce: f = !0,
    className: u,
    "aria-label": h
  }, m) {
    const b = ot(), g = n !== void 0, [y, p] = q(el(r).join("")), _ = g ? el(n).join("") : y, x = Array.from({ length: t }, (I, k) => _[k] ?? ""), N = oe([]), [v, $] = q(""), O = (I) => {
      g || p(I), l?.(I);
    }, T = (I) => {
      const k = N.current[I];
      k && !k.disabled && (k.focus(), k.select());
    }, A = (I, k) => {
      const S = k.replace(/\D/g, "").slice(-1), E = _.split("");
      if (S) {
        E[I] = S;
        const P = E.join("").slice(0, t);
        O(P), P.length < t ? T(I + 1) : f && $("Code complete");
      }
    }, C = (I, k) => {
      if (k.key === "Backspace") {
        if (k.preventDefault(), _[I]) {
          const S = _.split("");
          S[I] = "", O(S.join(""));
        } else if (I > 0) {
          const S = _.split("");
          S[I - 1] = "", O(S.join("")), T(I - 1);
        }
      } else k.key === "ArrowLeft" && I > 0 ? (k.preventDefault(), T(I - 1)) : k.key === "ArrowRight" && I < t - 1 ? (k.preventDefault(), T(I + 1)) : k.key === "Home" ? (k.preventDefault(), T(0)) : k.key === "End" && (k.preventDefault(), T(t - 1));
    }, D = (I, k) => {
      k.preventDefault();
      const S = k.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!S) return;
      const E = _.split("");
      let P = 0;
      for (let j = 0; j < S.length && I + j < t; j++)
        E[I + j] = S[j] ?? "", P++;
      const L = E.join("");
      O(L), L.length >= t ? f && $("Code complete") : T(I + P);
    };
    return /* @__PURE__ */ M(
      "div",
      {
        className: [er.wrapper, u].filter(Boolean).join(" "),
        role: "group",
        "aria-label": h ?? c,
        "data-invalid": a || void 0,
        children: [
          /* @__PURE__ */ o("div", { className: [er.cells, er[d]].join(" "), children: x.map((I, k) => /* @__PURE__ */ o(
            "input",
            {
              ref: (S) => {
                N.current[k] = S, k === 0 && m && (typeof m == "function" ? m(S) : m.current = S);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: I,
              disabled: i,
              "aria-label": `Digit ${k + 1} of ${t}`,
              "aria-invalid": a && I !== "" ? !0 : void 0,
              autoFocus: s && k === 0,
              className: [
                er.cell,
                er[`cell-${d}`],
                a ? er.invalid : null
              ].filter(Boolean).join(" "),
              onChange: (S) => A(k, S.target.value),
              onKeyDown: (S) => C(k, S),
              onPaste: (S) => D(k, S),
              onFocus: (S) => S.target.select(),
              onBlur: () => {
                f && $("");
              }
            },
            k
          )) }),
          f && /* @__PURE__ */ o(
            "span",
            {
              id: `${b}-live`,
              role: "status",
              "aria-live": "polite",
              className: er.live,
              children: v
            }
          )
        ]
      }
    );
  }
), tv = "_wrapper_6lcd5_1", nv = "_header_6lcd5_7", rv = "_label_6lcd5_15", sv = "_clear_6lcd5_22", ov = "_canvas_6lcd5_53", lv = "_disabled_6lcd5_69", _r = {
  wrapper: tv,
  header: nv,
  label: rv,
  clear: sv,
  canvas: ov,
  disabled: lv
}, KO = st(
  function({
    value: t,
    defaultValue: n,
    onChange: r,
    penColor: l = "#1c1c1c",
    penWidth: a = 2.5,
    clearLabel: d = "Clear",
    ariaLabel: s = "Signature",
    width: i,
    height: c = 140,
    disabled: f = !1,
    className: u
  }, h) {
    const m = oe(null), b = oe(!1), g = oe(!1), y = oe({ x: 0, y: 0 });
    ve(() => {
      const O = m.current;
      if (!O) return;
      const T = window.devicePixelRatio || 1, A = Math.round((i ?? O.clientWidth) * T), C = Math.round(c * T);
      (O.width !== A || O.height !== C) && (O.width = A, O.height = C);
      const D = O.getContext("2d");
      if (!D) return;
      D.setTransform(T, 0, 0, T, 0, 0), D.lineWidth = a, D.strokeStyle = l, D.lineCap = "round", D.lineJoin = "round";
      const I = t ?? n;
      if (I) {
        const k = new Image();
        k.onload = () => {
          D.drawImage(k, 0, 0, O.clientWidth, c);
        }, k.src = I;
      }
    }, [t, n, l, a, i, c]);
    const p = () => {
      const O = m.current;
      if (!O) return;
      const T = O.toDataURL("image/png");
      r?.(T);
    }, _ = () => {
      const O = m.current;
      if (!O) return;
      const T = O.getContext("2d");
      T && T.clearRect(0, 0, O.width, O.height), r?.("");
    };
    ms(h, () => ({
      clear: _,
      toDataURL: (O = "image/png", T) => m.current?.toDataURL(O, T) ?? ""
    }));
    const x = (O) => {
      const T = O.currentTarget.getBoundingClientRect();
      return { x: O.clientX - T.left, y: O.clientY - T.top };
    }, N = (O) => {
      f || (O.preventDefault(), typeof O.currentTarget.setPointerCapture == "function" && O.currentTarget.setPointerCapture(O.pointerId), b.current = !0, g.current = !1, y.current = x(O));
    }, v = (O) => {
      if (!b.current) return;
      O.preventDefault();
      const T = O.currentTarget.getContext("2d");
      if (!T) return;
      const A = x(O);
      T.beginPath(), T.moveTo(y.current.x, y.current.y), T.lineTo(A.x, A.y), T.stroke(), y.current = A, g.current = !0;
    }, $ = (O) => {
      b.current && (O.preventDefault(), b.current = !1, g.current && p());
    };
    return /* @__PURE__ */ M(
      "div",
      {
        "aria-disabled": f || void 0,
        className: [
          _r.wrapper,
          u,
          f ? _r.disabled : null
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ M("div", { className: _r.header, children: [
            /* @__PURE__ */ o("span", { className: _r.label, children: s }),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: _r.clear,
                onClick: _,
                disabled: f,
                children: d
              }
            )
          ] }),
          /* @__PURE__ */ o(
            "canvas",
            {
              ref: m,
              role: "img",
              "aria-label": s,
              "aria-disabled": f || void 0,
              style: {
                width: i ? `${i}px` : void 0,
                height: `${c}px`
              },
              className: _r.canvas,
              onPointerDown: N,
              onPointerMove: v,
              onPointerUp: $,
              onPointerCancel: $
            }
          )
        ]
      }
    );
  }
), av = "_wrapper_dsvd2_1", iv = "_trigger_dsvd2_7", cv = "_list_dsvd2_35", dv = "_row_dsvd2_44", uv = "_name_dsvd2_59", fv = "_size_dsvd2_68", _v = "_progress_dsvd2_74", pv = "_fill_dsvd2_82", mv = "_status_dsvd2_99", hv = "_remove_dsvd2_106", Sn = {
  wrapper: av,
  trigger: iv,
  list: cv,
  row: dv,
  name: uv,
  size: fv,
  progress: _v,
  fill: pv,
  status: mv,
  remove: hv
};
function tl(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const WO = st(function({
  url: t,
  multiple: n = !1,
  parameterName: r = "files",
  auto: l = !0,
  headers: a,
  accept: d,
  maxFileCount: s = Number.POSITIVE_INFINITY,
  maxFileSize: i,
  chooseText: c = "Upload",
  children: f,
  onProgress: u,
  onComplete: h,
  onError: m
}, b) {
  const g = oe(null), [y, p] = q([]), _ = oe(/* @__PURE__ */ new Map()), x = (T, A) => {
    p(
      (C) => C.map((D) => D.file.name === T ? { ...D, ...A } : D)
    );
  }, N = (T) => {
    if (!t) return;
    const A = new XMLHttpRequest();
    _.current.set(T.file.name, A);
    const C = new FormData();
    if (C.append(r, T.file), A.upload.addEventListener("progress", (D) => {
      if (!D.lengthComputable) return;
      const I = Math.round(D.loaded / D.total * 100);
      x(T.file.name, { state: "uploading", progress: I }), u?.(T.file.name, I);
    }), A.addEventListener("load", () => {
      A.status >= 200 && A.status < 300 ? (x(T.file.name, { state: "complete", progress: 100 }), h?.(T.file.name)) : (x(T.file.name, {
        state: "error",
        message: `HTTP ${A.status}`
      }), m?.(T.file.name, `HTTP ${A.status}`));
    }), A.addEventListener("error", () => {
      x(T.file.name, { state: "error", message: "Network error" }), m?.(T.file.name, "Network error");
    }), a)
      for (const [D, I] of Object.entries(a))
        A.setRequestHeader(D, I);
    A.open("POST", t), A.send(C), x(T.file.name, { state: "uploading", progress: 0 });
  }, v = (T) => {
    if (!T) return;
    const A = [...T], C = [];
    let D = Math.max(0, s - y.length);
    for (const k of A) {
      if (i != null && k.size > i) {
        m?.(
          k.name,
          `File too large (maximum ${tl(i)})`
        );
        continue;
      }
      if (D <= 0) {
        m?.(k.name, `Too many files (maximum ${s})`);
        continue;
      }
      D -= 1, C.push(k);
    }
    const I = C.map((k) => ({
      file: k,
      state: "pending",
      progress: 0
    }));
    p((k) => [...k, ...I]), g.current && (g.current.value = ""), l && I.forEach(N);
  }, $ = (T) => {
    _.current.get(T)?.abort(), _.current.delete(T), p((C) => C.filter((D) => D.file.name !== T));
  }, O = f ?? /* @__PURE__ */ M(
    "button",
    {
      type: "button",
      className: Sn.trigger,
      onClick: () => g.current?.click(),
      children: [
        /* @__PURE__ */ o(Me, { icon: "upload", size: 14 }),
        c
      ]
    }
  );
  return ms(b, () => ({
    open: () => g.current?.click(),
    upload: () => y.forEach((T) => T.state === "pending" ? N(T) : null)
  })), /* @__PURE__ */ M("div", { className: Sn.wrapper, children: [
    O,
    /* @__PURE__ */ o(
      "input",
      {
        ref: g,
        type: "file",
        hidden: !0,
        multiple: n,
        accept: d,
        "data-testid": "upload-input",
        onChange: (T) => v(T.target.files)
      }
    ),
    !f && y.length > 0 && /* @__PURE__ */ o("ul", { className: Sn.list, children: y.map(({ file: T, state: A, progress: C, message: D }) => /* @__PURE__ */ M(
      "li",
      {
        className: Sn.row,
        "data-state": A,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ o("span", { className: Sn.name, children: T.name }),
          /* @__PURE__ */ o("span", { className: Sn.size, children: tl(T.size) }),
          /* @__PURE__ */ o(
            "span",
            {
              className: Sn.progress,
              role: "progressbar",
              "aria-label": `${T.name} upload progress`,
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": C,
              children: /* @__PURE__ */ o(
                "span",
                {
                  className: Sn.fill,
                  style: { width: `${C}%` }
                }
              )
            }
          ),
          /* @__PURE__ */ o("span", { className: Sn.status, role: "status", children: A === "uploading" ? "Uploading" : A === "complete" ? "Complete" : A === "error" ? D ?? "Failed" : "Pending" }),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Sn.remove,
              "aria-label": `Remove ${T.name}`,
              onClick: () => $(T.name),
              children: /* @__PURE__ */ o(Me, { icon: "close", size: 14 })
            }
          )
        ]
      },
      T.name
    )) })
  ] });
}), gv = "_zone_nl0bz_1", bv = "_dragging_nl0bz_23", yv = "_caption_nl0bz_28", xv = "_browse_nl0bz_40", vv = "_disabled_nl0bz_67", zr = {
  zone: gv,
  dragging: bv,
  caption: yv,
  browse: xv,
  disabled: vv
};
function wv(e, t) {
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
const GO = st(
  function({
    accept: t,
    multiple: n = !1,
    onDrop: r,
    label: l = "Drop files here or browse",
    dragLabel: a = "Drop to attach",
    browseText: d = "Browse",
    disabled: s = !1,
    className: i
  }, c) {
    const f = oe(null), [u, h] = q(!1), m = (_) => {
      if (!_ || _.length === 0) return;
      const x = [..._].filter((N) => wv(N, t ?? ""));
      x.length !== 0 && r?.(x);
    }, b = (_) => {
      s || (_.preventDefault(), h(!0));
    }, g = (_) => {
      s || (_.preventDefault(), _.dataTransfer.dropEffect = "copy", h(!0));
    }, y = (_) => {
      s || _.currentTarget.contains(_.relatedTarget) || h(!1);
    }, p = (_) => {
      s || (_.preventDefault(), h(!1), m(_.dataTransfer.files));
    };
    return ms(c, () => ({
      open: () => f.current?.click()
    })), /* @__PURE__ */ M(
      "div",
      {
        role: "region",
        "aria-label": l,
        "aria-disabled": s || void 0,
        className: [
          zr.zone,
          u ? zr.dragging : null,
          s ? zr.disabled : null,
          i
        ].filter(Boolean).join(" "),
        onDragEnter: b,
        onDragOver: g,
        onDragLeave: y,
        onDrop: p,
        children: [
          /* @__PURE__ */ o("p", { className: zr.caption, children: u ? a : l }),
          !s && /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: zr.browse,
              onClick: () => f.current?.click(),
              children: d
            }
          ),
          /* @__PURE__ */ o(
            "input",
            {
              ref: f,
              type: "file",
              hidden: !0,
              multiple: n,
              accept: t,
              "data-testid": "dropzone-input",
              onChange: (_) => {
                m(_.target.files), _.target.value = "";
              }
            }
          )
        ]
      }
    );
  }
), kv = "_root_1a92d_1", Nv = "_menubar_1a92d_5", Ov = "_horizontal_1a92d_15", Sv = "_vertical_1a92d_20", $v = "_itemWrapper_1a92d_25", Ev = "_item_1a92d_25", Tv = "_disabled_1a92d_61", Cv = "_icon_1a92d_68", Av = "_text_1a92d_75", Dv = "_caret_1a92d_79", Mv = "_hasChildren_1a92d_85", Iv = "_submenu_1a92d_94", zv = "_submenuItem_1a92d_118", Lv = "_flyout_1a92d_155", Rv = "_hamburger_1a92d_175", Pv = "_responsive_1a92d_198", jv = "_mobileOpen_1a92d_207", _t = {
  root: kv,
  menubar: Nv,
  horizontal: Ov,
  vertical: Sv,
  itemWrapper: $v,
  item: Ev,
  disabled: Tv,
  icon: Cv,
  text: Av,
  caret: Dv,
  hasChildren: Mv,
  submenu: Iv,
  submenuItem: zv,
  flyout: Lv,
  hamburger: Rv,
  responsive: Pv,
  mobileOpen: jv
}, _s = or(null);
function Bv(e, t) {
  if (!e || typeof window > "u") return !1;
  const n = window.location.hash.replace(/^#\/?/, ""), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : n === r || n.startsWith(`${r}/`) : n === r;
}
function Fv(e, t, n, r, l) {
  const [a, d] = q(n), s = e ? t ?? !1 : a, i = B(
    (c) => {
      e || d(c), r?.(c);
    },
    [e, r]
  );
  return ve(() => {
    l > 0 && i(!1);
  }, [l]), [s, i];
}
function Hv({
  icon: e,
  iconColor: t,
  image: n,
  imageAlt: r
}) {
  return n ? /* @__PURE__ */ o("span", { className: _t.icon, "aria-hidden": "true", children: /* @__PURE__ */ o("img", { src: n, alt: r ?? "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ o(
    "span",
    {
      className: _t.icon,
      "aria-hidden": "true",
      style: t ? { color: t } : void 0,
      children: /* @__PURE__ */ o(Me, { icon: e, size: 16 })
    }
  ) : null;
}
function Al(e) {
  return qt(e) && e.type === Dl;
}
function Qs({
  itemKey: e,
  props: t
}) {
  const n = Pn(_s);
  if (!n) throw new Error("MenuItem must be used inside <Menu>");
  const { text: r, value: l, path: a, disabled: d, template: s } = t, i = Se(
    () => qr.toArray(t.children).filter(qt),
    [t.children]
  ), c = i.length > 0, f = !!d, u = t.open !== void 0, [h, m] = Fv(
    u,
    t.open,
    t.defaultOpen ?? !1,
    t.onOpenChange,
    n.closeSignal
  ), b = n.level === 0, g = oe(0), p = (b && !u ? n.openKey === e : null) ?? h, _ = B(
    (P) => {
      b && !u ? n.setOpenKey(P ? e : null) : (m(P), b && n.setOpenKey(null));
    },
    [b, u, n, e, m]
  ), [, x] = q(0);
  ve(() => {
    if (!a) return;
    const P = () => x((L) => L + 1);
    return window.addEventListener("hashchange", P), () => window.removeEventListener("hashchange", P);
  }, [a]);
  const N = a && !c ? Bv(a, t.match) : !1, v = B(
    (P) => {
      if (f) {
        P.preventDefault();
        return;
      }
      const L = { text: r, value: l, path: a };
      [n.emit(L), t.onClick?.(L)].includes(!1) && P.preventDefault(), n.closeAll();
    },
    [f, r, l, a, n, t]
  ), $ = B(() => {
    if (!f) {
      if (p && (Date.now() - g.current < 600 || !n.clickToOpen)) {
        g.current = 0;
        return;
      }
      _(!p);
    }
  }, [f, p, _, n.clickToOpen]), O = B(() => {
    !c || f || n.clickToOpen || (g.current = Date.now(), _(!0));
  }, [c, f, n.clickToOpen, _]), T = B(() => {
    n.clickToOpen || _(!1);
  }, [n.clickToOpen, _]), A = `${n.baseId}-submenu-${e}`, [C, D] = q(null);
  ve(() => {
    n.closeSignal > 0 && D(null);
  }, [n.closeSignal]);
  const I = Se(
    () => ({
      baseId: n.baseId,
      flyout: n.flyout,
      clickToOpen: n.clickToOpen,
      level: n.level + 1,
      closeSignal: n.closeSignal,
      emit: n.emit,
      closeAll: n.closeAll,
      openKey: C,
      setOpenKey: D
    }),
    [n, C]
  ), k = c ? /* @__PURE__ */ o("span", { className: _t.caret, "aria-hidden": "true", children: /* @__PURE__ */ o(
    Me,
    {
      icon: n.flyout && !b ? "chevron_right" : "keyboard_arrow_down",
      size: 10
    }
  ) }) : null, S = s ?? /* @__PURE__ */ M(pt, { children: [
    /* @__PURE__ */ o(
      Hv,
      {
        icon: t.icon,
        iconColor: t.iconColor,
        image: t.image,
        imageAlt: t.imageAlt
      }
    ),
    /* @__PURE__ */ o("span", { className: _t.text, children: r }),
    k
  ] });
  if (c) {
    let P = function(L) {
      const j = Array.from(L.currentTarget.children).map((ie) => ie.querySelector('[role="menuitem"]')).filter(
        (ie) => ie != null && ie.getAttribute("aria-disabled") !== "true" && !ie.hasAttribute("disabled")
      ), F = document.activeElement, X = F ? j.indexOf(F) : -1;
      L.key === "ArrowDown" ? (L.preventDefault(), L.stopPropagation(), (X === -1 ? j[0] : j[(X + 1) % j.length])?.focus()) : L.key === "ArrowUp" ? (L.preventDefault(), L.stopPropagation(), (X === -1 ? j[j.length - 1] : j[(X - 1 + j.length) % j.length])?.focus()) : L.key === "ArrowRight" ? F?.getAttribute("aria-haspopup") === "menu" && (L.preventDefault(), L.stopPropagation(), F.getAttribute("aria-expanded") !== "true" && F.click(), document.getElementById(
        F.getAttribute("aria-controls") ?? ""
      )?.querySelector('[role="menuitem"]')?.focus()) : (L.key === "ArrowLeft" || L.key === "Escape") && (L.preventDefault(), L.stopPropagation(), _(!1));
    };
    return /* @__PURE__ */ M(
      "div",
      {
        className: _t.itemWrapper,
        onMouseEnter: n.clickToOpen ? void 0 : O,
        onMouseLeave: n.clickToOpen ? void 0 : T,
        "data-dx-menu-item": "",
        children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              role: "menuitem",
              "data-top": b ? "true" : void 0,
              "data-index": e,
              "data-dx-menu-item": "",
              "aria-disabled": f || void 0,
              "aria-haspopup": "menu",
              "aria-expanded": p,
              "aria-controls": A,
              tabIndex: f ? -1 : 0,
              disabled: f,
              className: [
                _t.item,
                f ? _t.disabled : null,
                _t.hasChildren
              ].filter(Boolean).join(" "),
              onClick: $,
              children: S
            }
          ),
          p ? /* @__PURE__ */ o(
            "div",
            {
              id: A,
              role: "menu",
              "aria-label": r,
              className: [
                _t.submenu,
                n.flyout && !b ? _t.flyout : null
              ].filter(Boolean).join(" "),
              "data-dx-menu-submenu": "",
              onKeyDown: P,
              children: /* @__PURE__ */ o(_s.Provider, { value: I, children: i.map(
                (L, j) => Al(L) ? /* @__PURE__ */ o(
                  Qs,
                  {
                    itemKey: `${e}-${j}`,
                    props: L.props
                  },
                  `${e}-${j}`
                ) : (
                  // Separators / custom content (Radzen `<hr />` parity) render verbatim.
                  /* @__PURE__ */ o(Ys, { children: L }, `${e}-custom-${j}`)
                )
              ) })
            }
          ) : null
        ]
      }
    );
  }
  const E = {
    role: "menuitem",
    "aria-disabled": f || void 0,
    "aria-current": N ? "page" : void 0,
    tabIndex: f ? -1 : 0,
    "data-dx-menu-item": "",
    className: [_t.submenuItem, f ? _t.disabled : null].filter(Boolean).join(" "),
    onClick: v
  };
  return a && !f ? /* @__PURE__ */ o("div", { className: _t.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("a", { href: a, target: t.target, ...E, children: S }) }) : /* @__PURE__ */ o("div", { className: _t.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ o("button", { type: "button", disabled: f, ...E, children: S }) });
}
function Dl(e) {
  if (!Pn(_s)) throw new Error("MenuItem must be used inside <Menu>");
  return /* @__PURE__ */ o(Qs, { itemKey: e.text, props: e });
}
function Uv({
  children: e,
  clickToOpen: t = !0,
  flyout: n = !1,
  responsive: r = !0,
  isContextMenu: l = !1,
  onClick: a,
  onClose: d,
  ariaLabel: s = "Menu",
  toggleAriaLabel: i = "Toggle menu",
  className: c,
  ...f
}) {
  const u = ot(), h = oe(null), m = oe(null), [b, g] = q(null), [y, p] = q(0), [_, x] = q(!1), N = oe(null), v = B(
    (C) => a?.(C),
    [a]
  ), $ = B(() => {
    g(null), p((C) => C + 1);
  }, []);
  ve(() => {
    if (b == null) return;
    const C = (D) => {
      h.current && !h.current.contains(D.target) && $();
    };
    return document.addEventListener("mousedown", C), () => document.removeEventListener("mousedown", C);
  }, [b, $]), ve(() => {
    N.current != null && b === N.current && (document.getElementById(`${u}-submenu-${b}`)?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus(), N.current = null);
  }, [b, u]);
  const O = Se(
    () => ({
      baseId: u,
      flyout: n,
      clickToOpen: t,
      level: 0,
      closeSignal: y,
      emit: v,
      closeAll: $,
      openKey: b,
      setOpenKey: g
    }),
    [u, n, t, y, v, $, b]
  ), T = Se(
    () => qr.toArray(e).filter(qt),
    [e]
  ), A = (C) => {
    const D = m.current;
    if (!D) return;
    const I = Array.from(D.children).map((E) => E.querySelector('[role="menuitem"]')).filter(
      (E) => E != null && !E.hasAttribute("disabled") && E.getAttribute("aria-disabled") !== "true"
    );
    if (b != null) {
      const E = document.getElementById(`${u}-submenu-${b}`);
      if (E) {
        const P = Array.from(
          E.querySelectorAll('[role="menuitem"]')
        ).filter(
          (F) => F.getAttribute("aria-disabled") !== "true" && !F.hasAttribute("disabled")
        ), L = document.activeElement, j = L ? P.indexOf(L) : -1;
        if (C.key === "ArrowDown") {
          C.preventDefault(), (j === -1 ? P[0] : P[(j + 1) % P.length])?.focus();
          return;
        }
        if (C.key === "ArrowUp") {
          C.preventDefault(), (j === -1 ? P[P.length - 1] : P[(j - 1 + P.length) % P.length])?.focus();
          return;
        }
        if (C.key === "Escape") {
          C.preventDefault(), $(), d?.(), D.querySelector(`[data-index="${b}"]`)?.focus();
          return;
        }
        if (C.key === "Enter" || C.key === " ") return;
      }
      if (C.key === "Escape") {
        C.preventDefault(), $(), d?.();
        return;
      }
    }
    const k = document.activeElement, S = k ? I.indexOf(k) : -1;
    if (C.key === "ArrowRight") {
      if (C.preventDefault(), I.length === 0) return;
      I[S === -1 ? 0 : (S + 1) % I.length]?.focus();
      return;
    }
    if (C.key === "ArrowLeft") {
      if (C.preventDefault(), I.length === 0) return;
      I[S === -1 ? I.length - 1 : (S - 1 + I.length) % I.length]?.focus();
      return;
    }
    if (C.key === "ArrowDown") {
      if (S >= 0) {
        const E = k?.getAttribute("data-index");
        if (E == null) return;
        D.querySelector(
          `[data-index="${E}"]`
        )?.getAttribute("aria-haspopup") === "menu" && (C.preventDefault(), N.current = E, g(E));
      }
      return;
    }
    if (C.key === "Home") {
      C.preventDefault(), I[0]?.focus();
      return;
    }
    if (C.key === "End") {
      C.preventDefault(), I[I.length - 1]?.focus();
      return;
    }
    if (C.key.length === 1 && !C.ctrlKey && !C.metaKey) {
      const E = I.map((L) => L.textContent ?? ""), P = S === -1 ? 0 : (S + 1) % I.length;
      for (let L = 0; L < I.length; L++) {
        const j = (P + L) % I.length;
        if (E[j]?.toLowerCase().startsWith(C.key.toLowerCase())) {
          C.preventDefault(), I[j]?.focus();
          break;
        }
      }
    }
  };
  return /* @__PURE__ */ M(
    "nav",
    {
      ref: h,
      "aria-label": s,
      className: [
        _t.root,
        l ? _t.vertical : _t.horizontal,
        r ? _t.responsive : null,
        r && _ ? _t.mobileOpen : null,
        n ? _t.flyoutRoot : null,
        c
      ].filter(Boolean).join(" "),
      ...f,
      children: [
        r ? /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            "aria-label": i,
            "aria-expanded": _,
            className: _t.hamburger,
            onClick: () => x((C) => !C),
            children: /* @__PURE__ */ o(Me, { icon: "menu", size: 20 })
          }
        ) : null,
        /* @__PURE__ */ o(
          "div",
          {
            ref: m,
            role: l ? "menu" : "menubar",
            "aria-label": s,
            className: _t.menubar,
            onKeyDown: A,
            children: /* @__PURE__ */ o(_s.Provider, { value: O, children: T.map(
              (C, D) => Al(C) ? /* @__PURE__ */ o(
                Qs,
                {
                  itemKey: String(D),
                  props: C.props
                },
                `top-${D}`
              ) : /* @__PURE__ */ o(Ys, { children: C }, `top-custom-${D}`)
            ) })
          }
        )
      ]
    }
  );
}
const qv = "_popup_uiejp_1", Kv = "_menu_uiejp_22", Gs = {
  popup: qv,
  menu: Kv
}, Ml = or(null);
function VO() {
  const e = Pn(Ml);
  if (!e)
    throw new Error("useContextMenu must be used inside <ContextMenuProvider>");
  return e;
}
function Il(e) {
  return e.map((t, n) => {
    const { children: r, ...l } = t;
    return /* @__PURE__ */ o(Dl, { ...l, children: r ? Il(r) : void 0 }, `${t.text}-${n}`);
  });
}
function Wv({ state: e, onClose: t }) {
  const n = oe(null), [r, l] = q({ left: e.x, top: e.y });
  zs(() => {
    const d = n.current;
    if (!d) return;
    const s = d.getBoundingClientRect();
    l({
      left: Math.max(0, Math.min(e.x, window.innerWidth - s.width)),
      top: Math.max(0, Math.min(e.y, window.innerHeight - s.height))
    });
  }, [e.x, e.y, e.options]), ve(() => {
    n.current?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus();
  }, []);
  const a = B(
    (d) => {
      e.options.onClick?.(d);
    },
    [e.options]
  );
  return /* @__PURE__ */ o(
    "div",
    {
      ref: n,
      role: "presentation",
      "data-dx-contextmenu-popup": "",
      className: Gs.popup,
      style: { left: r.left, top: r.top },
      children: /* @__PURE__ */ o("div", { className: Gs.menu, children: e.options.content ?? /* @__PURE__ */ o(
        Uv,
        {
          isContextMenu: !0,
          responsive: !1,
          ariaLabel: e.options.ariaLabel ?? "Context menu",
          onClick: a,
          onClose: t,
          children: Il(e.options.items ?? [])
        }
      ) })
    }
  );
}
function YO({ children: e }) {
  const [t, n] = q(null), r = B(() => {
    n((d) => (d?.invoker && document.body.contains(d.invoker) && d.invoker.focus({ preventScroll: !0 }), null));
  }, []), l = B(
    (d, s) => {
      d.preventDefault();
      const i = d.currentTarget ?? d.target;
      n({ x: d.clientX, y: d.clientY, invoker: i, options: s });
    },
    []
  );
  ve(() => {
    if (!t) return;
    const d = (f) => {
      const u = document.querySelector(`.${Gs.popup}`);
      u && !u.contains(f.target) && r();
    }, s = (f) => {
      f.key === "Escape" && (f.preventDefault(), r());
    }, i = () => r(), c = () => r();
    return document.addEventListener("pointerdown", d, !0), document.addEventListener("keydown", s, !0), window.addEventListener("resize", i), window.addEventListener("hashchange", c), () => {
      document.removeEventListener("pointerdown", d, !0), document.removeEventListener("keydown", s, !0), window.removeEventListener("resize", i), window.removeEventListener("hashchange", c);
    };
  }, [t, r]);
  const a = Se(
    () => ({ open: l, close: r, isOpen: t != null }),
    [l, r, t]
  );
  return /* @__PURE__ */ M(Ml.Provider, { value: a, children: [
    e,
    t ? /* @__PURE__ */ o(Wv, { state: t, onClose: r }) : null
  ] });
}
const Gv = "_root_rgcia_1", Vv = "_list_rgcia_9", Yv = "_item_rgcia_14", Xv = "_trigger_rgcia_18", Zv = "_disabled_rgcia_45", Jv = "_expanded_rgcia_52", Qv = "_selected_rgcia_56", ew = "_icon_rgcia_61", tw = "_text_rgcia_72", nw = "_caret_rgcia_79", rw = "_open_rgcia_86", sw = "_submenu_rgcia_90", ow = "_iconOnly_rgcia_172", lw = "_stacked_rgcia_201", Lt = {
  root: Gv,
  list: Vv,
  item: Yv,
  trigger: Xv,
  disabled: Zv,
  expanded: Jv,
  selected: Qv,
  icon: ew,
  text: tw,
  caret: nw,
  open: rw,
  submenu: sw,
  iconOnly: ow,
  stacked: lw
}, ps = or(null);
function aw() {
  return typeof window > "u" ? "" : window.location.hash.replace(/^#\/?/, "");
}
function iw(e, t) {
  const n = aw(), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : r === "/" ? n === "" || n === "/" : n === r || n.startsWith(`${r}/`) : n === r;
}
function cw({
  icon: e,
  iconColor: t,
  image: n
}) {
  return n ? /* @__PURE__ */ o("span", { className: Lt.icon, "aria-hidden": "true", children: /* @__PURE__ */ o("img", { src: n, alt: "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ o(
    "span",
    {
      className: Lt.icon,
      "aria-hidden": "true",
      style: t ? { color: t } : void 0,
      children: /* @__PURE__ */ o(Me, { icon: e, size: 16 })
    }
  ) : null;
}
function eo({
  itemKey: e,
  ancestors: t,
  props: n
}) {
  const r = Pn(ps);
  if (!r) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  const { text: l, value: a, path: d, disabled: s } = n, i = Se(
    () => qr.toArray(n.children).filter(qt),
    [n.children]
  ), c = i.length > 0, f = !!s, u = n.match ?? r.match, h = n.expanded !== void 0, [m, b] = q(
    n.defaultExpanded ?? !1
  ), g = h ? n.expanded ?? !1 : m, y = B(
    (F) => {
      h || b(F), n.onExpandedChange?.(F);
    },
    [h, n]
  );
  ve(() => {
    r.collapseSignal > 0 && !r.collapseSkipRef.current.has(e) && y(!1);
  }, [r.collapseSignal]);
  const p = n.onSelectedChange !== void 0 || n.selected !== void 0, [_, x] = q(
    n.defaultSelected ?? !1
  ), N = !p && d ? iw(d, u) : !1, v = n.selected ?? (p ? _ : N || _), [, $] = q(0);
  ve(() => {
    if (!d) return;
    const F = () => $((X) => X + 1);
    return window.addEventListener("hashchange", F), () => window.removeEventListener("hashchange", F);
  }, [d]);
  const O = Se(
    () => ({
      ...r,
      level: r.level + 1,
      openAncestors: () => {
        y(!0), r.openAncestors();
      }
    }),
    [r, y]
  );
  ve(() => {
    N && t.length > 0 && O.openAncestors();
  }, []);
  const T = B(
    (F) => {
      if (f) {
        F.preventDefault();
        return;
      }
      const X = { text: l, value: a, path: d };
      [r.emit(X), n.onClick?.(X)].includes(!1) && F.preventDefault(), p || x(!0), n.onSelectedChange?.(!0);
    },
    [f, l, a, d, r, n, p]
  ), A = B(() => {
    f || (g || r.notifyOpened(e, t), y(!g));
  }, [f, g, r, e, t, y]), C = B(
    (F) => {
      F.key === "Enter" || F.key === " " ? (F.preventDefault(), c ? A() : F.target.click()) : F.key === "Escape" && g ? (F.preventDefault(), y(!1)) : F.key === "ArrowRight" && c && !g ? (F.preventDefault(), r.notifyOpened(e, t), y(!0)) : F.key === "ArrowLeft" && g && (F.preventDefault(), y(!1));
    },
    [c, A, g, y, r, e, t]
  ), D = c && r.showArrow ? /* @__PURE__ */ o(
    "span",
    {
      className: [Lt.caret, g ? Lt.open : null].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: /* @__PURE__ */ o(Me, { icon: "keyboard_arrow_down", size: 10 })
    }
  ) : null, I = n.template ?? /* @__PURE__ */ M(pt, { children: [
    /* @__PURE__ */ o(
      cw,
      {
        icon: n.icon,
        iconColor: n.iconColor,
        image: n.image,
        imageAlt: n.imageAlt
      }
    ),
    r.displayStyle === "icon" ? /* @__PURE__ */ o("span", { className: Lt.text, "aria-label": l, children: n.icon || n.image ? null : l.slice(0, 1) }) : /* @__PURE__ */ o("span", { className: Lt.text, children: l }),
    D
  ] }), k = `${r.baseId}-panel-${e}`, S = `${r.baseId}-trigger-${e}`, E = [
    Lt.trigger,
    f ? Lt.disabled : null,
    g ? Lt.expanded : null,
    v ? Lt.selected : null
  ].filter(Boolean).join(" "), P = r.level > 0 ? "menuitem" : void 0, L = c ? /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      id: S,
      role: P,
      "aria-expanded": g,
      "aria-controls": k,
      "aria-disabled": f || void 0,
      disabled: f,
      tabIndex: f ? -1 : 0,
      className: E,
      onClick: A,
      onKeyDown: C,
      children: I
    }
  ) : d && !f ? /* @__PURE__ */ o(
    "a",
    {
      id: S,
      role: P,
      href: d,
      target: n.target,
      "aria-disabled": void 0,
      "aria-current": v ? "page" : void 0,
      tabIndex: 0,
      className: E,
      onClick: T,
      onKeyDown: C,
      children: I
    }
  ) : /* @__PURE__ */ o(
    "button",
    {
      type: "button",
      id: S,
      role: P,
      "aria-current": v ? "page" : void 0,
      "aria-disabled": f || void 0,
      disabled: f,
      tabIndex: f ? -1 : 0,
      className: E,
      onClick: T,
      onKeyDown: C,
      children: I
    }
  ), j = c ? r.renderMode === "server" && !g ? null : /* @__PURE__ */ o(
    "div",
    {
      id: k,
      role: "menu",
      "aria-labelledby": S,
      className: Lt.submenu,
      hidden: r.renderMode === "client" && !g ? !0 : void 0,
      children: /* @__PURE__ */ o(ps.Provider, { value: O, children: i.map((F, X) => /* @__PURE__ */ o(
        eo,
        {
          itemKey: `${e}-${X}`,
          ancestors: [...t, e],
          props: F.props
        },
        `${e}-${X}`
      )) })
    }
  ) : null;
  return /* @__PURE__ */ M(
    "div",
    {
      className: Lt.item,
      style: { "--dx-panelmenu-level": r.level },
      "data-dx-panelmenu-item": "",
      "data-level": r.level,
      children: [
        L,
        j
      ]
    }
  );
}
function XO(e) {
  if (!Pn(ps)) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  return /* @__PURE__ */ o(eo, { itemKey: e.text, ancestors: [], props: e });
}
function ZO({
  children: e,
  multiple: t = !0,
  displayStyle: n = "iconAndText",
  showArrow: r = !0,
  match: l = "prefix",
  renderMode: a = "client",
  onClick: d,
  ariaLabel: s = "Panel menu",
  className: i,
  ...c
}) {
  const f = ot(), [u, h] = q(0), m = oe(/* @__PURE__ */ new Set()), b = B(
    (N) => d?.(N),
    [d]
  ), g = B(
    (N, v) => {
      t || (m.current = /* @__PURE__ */ new Set([N, ...v]), h(($) => $ + 1));
    },
    [t]
  ), y = (N) => Array.from(
    N.querySelectorAll('button, a[href], [role="menuitem"]')
  ).filter(
    (v) => !v.hasAttribute("disabled") && v.getAttribute("aria-disabled") !== "true" && v.closest("[hidden]") == null
  ), p = (N) => {
    if (!(N.key === "Enter" || N.key === " ")) {
      if (N.key === "ArrowDown" || N.key === "ArrowUp") {
        const v = N.target, $ = y(N.currentTarget), O = $.indexOf(v);
        if (O === -1) return;
        N.preventDefault();
        const T = N.key === "ArrowDown" ? 1 : -1;
        $[(O + T + $.length) % $.length]?.focus();
      } else if (N.key === "Home" || N.key === "End") {
        const v = y(N.currentTarget);
        N.preventDefault(), (N.key === "Home" ? v[0] : v[v.length - 1])?.focus();
      }
    }
  }, _ = Se(
    () => ({
      baseId: f,
      multiple: t,
      displayStyle: n,
      showArrow: r,
      renderMode: a,
      match: l,
      level: 0,
      collapseSignal: u,
      collapseSkipRef: m,
      emit: b,
      notifyOpened: g,
      openAncestors: () => {
      }
    }),
    [
      f,
      t,
      n,
      r,
      a,
      l,
      u,
      b,
      g
    ]
  ), x = Se(
    () => qr.toArray(e).filter(qt),
    [e]
  );
  return /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": s,
      className: [
        Lt.root,
        n === "icon" ? Lt.iconOnly : null,
        n === "stacked" ? Lt.stacked : null,
        i
      ].filter(Boolean).join(" "),
      onKeyDown: p,
      ...c,
      children: /* @__PURE__ */ o("div", { className: Lt.list, role: "presentation", children: /* @__PURE__ */ o(ps.Provider, { value: _, children: x.map((N, v) => /* @__PURE__ */ o(
        eo,
        {
          itemKey: String(v),
          ancestors: [],
          props: N.props
        },
        `top-${v}`
      )) }) })
    }
  );
}
const dw = "_root_5numg_1", uw = "_trigger_5numg_7", fw = "_defaultTrigger_5numg_40", _w = "_avatar_5numg_46", pw = "_menu_5numg_58", mw = "_item_5numg_74", hw = "_disabled_5numg_88", gw = "_active_5numg_97", bw = "_icon_5numg_107", yw = "_text_5numg_114", $n = {
  root: dw,
  trigger: uw,
  defaultTrigger: fw,
  avatar: _w,
  menu: pw,
  item: mw,
  disabled: hw,
  active: gw,
  icon: bw,
  text: yw
};
function JO({
  items: e,
  trigger: t,
  onClick: n,
  ariaLabel: r = "Profile menu",
  className: l
}) {
  const a = ot(), d = `${a}-menu`, s = oe(null), i = oe(null), [c, f] = q(!1), [u, h] = q(-1), m = t, b = e.map((v, $) => v.disabled ? -1 : $).filter((v) => v >= 0), g = B(
    (v) => {
      if (v.disabled) return;
      const $ = {
        text: v.text,
        path: v.path
      };
      n?.($), f(!1), i.current?.focus();
    },
    [n]
  ), y = B(() => {
    h(b[0] ?? -1), f(!0);
  }, [b]), p = B(() => {
    f(!1), h(-1), i.current?.focus();
  }, []);
  ve(() => {
    if (!c) return;
    const v = ($) => {
      s.current && !s.current.contains($.target) && (f(!1), h(-1));
    };
    return document.addEventListener("mousedown", v), () => document.removeEventListener("mousedown", v);
  }, [c]), ve(() => {
    if (!c) return;
    const v = ($) => {
      $.key === "Escape" && ($.preventDefault(), p());
    };
    return document.addEventListener("keydown", v), () => document.removeEventListener("keydown", v);
  }, [c, p]);
  const _ = (v) => {
    if (b.length === 0) return;
    const $ = b.indexOf(u), O = $ === -1 ? 0 : ($ + v + b.length) % b.length, T = b[O];
    T != null && h(T);
  }, x = (v) => {
    if (!c) {
      (v.key === "ArrowDown" || v.key === "Enter" || v.key === " ") && (v.preventDefault(), y());
      return;
    }
    switch (v.key) {
      case "Escape":
        v.preventDefault(), p();
        break;
      case "ArrowDown":
        v.preventDefault(), _(1);
        break;
      case "ArrowUp":
        v.preventDefault(), _(-1);
        break;
      case "Home":
        v.preventDefault(), b[0] != null && h(b[0]);
        break;
      case "End":
        v.preventDefault(), b[b.length - 1] != null && h(b[b.length - 1]);
        break;
      case "Enter":
      case " ":
        if (v.preventDefault(), u >= 0) {
          const $ = e[u];
          $ && !$.disabled && g($);
        }
        break;
      case "Tab":
        f(!1), h(-1);
        break;
    }
  }, N = (v) => {
    switch (v.key) {
      case "ArrowDown":
        v.preventDefault(), _(1);
        break;
      case "ArrowUp":
        v.preventDefault(), _(-1);
        break;
      case "Home":
        v.preventDefault(), b[0] != null && h(b[0]);
        break;
      case "End":
        v.preventDefault(), b[b.length - 1] != null && h(b[b.length - 1]);
        break;
      case "Enter":
      case " ":
        if (v.preventDefault(), u >= 0) {
          const $ = e[u];
          $ && !$.disabled && g($);
        }
        break;
      case "Escape":
        v.preventDefault(), p();
        break;
      case "Tab":
        f(!1), h(-1);
        break;
    }
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: s,
      className: [$n.root, l].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ M("nav", { "aria-label": r, children: [
        /* @__PURE__ */ o(
          "button",
          {
            ref: i,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": c,
            "aria-controls": d,
            "aria-label": r,
            className: $n.trigger,
            onClick: () => c ? p() : y(),
            onKeyDown: x,
            children: m ?? /* @__PURE__ */ M("span", { className: $n.defaultTrigger, children: [
              /* @__PURE__ */ o("span", { className: $n.avatar, "aria-hidden": "true", children: "●" }),
              /* @__PURE__ */ o("span", { children: "Profile" })
            ] })
          }
        ),
        c ? /* @__PURE__ */ o(
          "div",
          {
            id: d,
            role: "menu",
            "aria-label": r,
            "aria-activedescendant": u >= 0 ? `${a}-item-${u}` : void 0,
            className: $n.menu,
            onKeyDown: N,
            tabIndex: -1,
            children: e.map((v, $) => {
              const O = !!v.disabled, T = $ === u;
              return /* @__PURE__ */ M(
                "div",
                {
                  id: `${a}-item-${$}`,
                  role: "menuitem",
                  "aria-disabled": O || void 0,
                  tabIndex: O ? -1 : 0,
                  className: [
                    $n.item,
                    T ? $n.active : null,
                    O ? $n.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    O || g(v);
                  },
                  onMouseEnter: () => {
                    O || h($);
                  },
                  children: [
                    v.icon ? /* @__PURE__ */ o("span", { className: $n.icon, "aria-hidden": "true", children: v.icon }) : null,
                    /* @__PURE__ */ o("span", { className: $n.text, children: v.text })
                  ]
                },
                `${v.text}-${$}`
              );
            })
          }
        ) : null
      ] })
    }
  );
}
const xw = "_root_vv0xs_1", vw = "_bottomRight_vv0xs_11", ww = "_bottomLeft_vv0xs_16", kw = "_topRight_vv0xs_21", Nw = "_topLeft_vv0xs_26", Ow = "_menu_vv0xs_31", Sw = "_itemWrapper_vv0xs_48", $w = "_tooltip_vv0xs_54", Ew = "_main_vv0xs_76", Tw = "_mainIcon_vv0xs_104", Cw = "_mainOpen_vv0xs_109", Aw = "_item_vv0xs_48", Dw = "_disabled_vv0xs_141", Mw = "_itemIcon_vv0xs_148", Kt = {
  root: xw,
  bottomRight: vw,
  bottomLeft: ww,
  topRight: kw,
  topLeft: Nw,
  menu: Ow,
  itemWrapper: Sw,
  tooltip: $w,
  main: Ew,
  mainIcon: Tw,
  mainOpen: Cw,
  item: Aw,
  disabled: Dw,
  itemIcon: Mw
};
function QO({
  items: e,
  position: t,
  icon: n = "+",
  onClick: r,
  ariaLabel: l = "Open menu",
  className: a
}) {
  const d = t ?? "bottom-right", i = `${ot()}-menu`, c = oe(null), f = oe(null), [u, h] = q(!1), m = B(
    (p) => {
      if (p.disabled) return;
      const _ = { text: p.text, value: p.value };
      r?.(_), h(!1), f.current?.focus();
    },
    [r]
  );
  ve(() => {
    if (!u) return;
    const p = (_) => {
      c.current && !c.current.contains(_.target) && h(!1);
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, [u]), ve(() => {
    if (!u) return;
    const p = (_) => {
      _.key === "Escape" && (h(!1), f.current?.focus());
    };
    return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [u]);
  const b = d === "bottom-right" ? Kt.bottomRight : d === "bottom-left" ? Kt.bottomLeft : d === "top-right" ? Kt.topRight : Kt.topLeft, g = (p) => {
    !u && (p.key === "Enter" || p.key === " " || p.key === "ArrowDown" || p.key === "ArrowUp") ? (p.preventDefault(), h(!0)) : u && p.key === "Escape" && (p.preventDefault(), h(!1));
  }, y = (p) => {
    p.key === "Escape" && (p.preventDefault(), h(!1), f.current?.focus());
  };
  return /* @__PURE__ */ M(
    "div",
    {
      ref: c,
      className: [Kt.root, b, a].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        u ? /* @__PURE__ */ o(
          "div",
          {
            id: i,
            role: "menu",
            "aria-label": l,
            className: Kt.menu,
            onKeyDown: y,
            children: e.map((p, _) => {
              const x = !!p.disabled;
              return /* @__PURE__ */ M("div", { className: Kt.itemWrapper, children: [
                /* @__PURE__ */ o("span", { className: Kt.tooltip, "aria-hidden": "true", children: p.text }),
                /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    role: "menuitem",
                    "aria-label": p.text,
                    "aria-disabled": x || void 0,
                    title: p.text,
                    disabled: x,
                    tabIndex: x ? -1 : 0,
                    className: [Kt.item, x ? Kt.disabled : null].filter(Boolean).join(" "),
                    onClick: () => m(p),
                    children: /* @__PURE__ */ o("span", { className: Kt.itemIcon, "aria-hidden": "true", children: p.icon ?? "•" })
                  }
                )
              ] }, `${p.text}-${_}`);
            })
          }
        ) : null,
        /* @__PURE__ */ o(
          "button",
          {
            ref: f,
            type: "button",
            className: Kt.main,
            "aria-haspopup": "menu",
            "aria-expanded": u,
            "aria-controls": i,
            "aria-label": l,
            onClick: () => h((p) => !p),
            onKeyDown: g,
            children: /* @__PURE__ */ o(
              "span",
              {
                "aria-hidden": "true",
                className: [Kt.mainIcon, u ? Kt.mainOpen : null].filter(Boolean).join(" "),
                children: n
              }
            )
          }
        )
      ]
    }
  );
}
const Iw = "_root_1eyur_1", zw = "_list_1eyur_5", Lw = "_item_1eyur_15", Rw = "_link_1eyur_22", Pw = "_linkButton_1eyur_23", jw = "_current_1eyur_24", Bw = "_disabled_1eyur_68", Fw = "_icon_1eyur_74", Hw = "_text_1eyur_81", Uw = "_separator_1eyur_85", ut = {
  root: Iw,
  list: zw,
  item: Lw,
  link: Rw,
  linkButton: Pw,
  current: jw,
  disabled: Bw,
  icon: Fw,
  text: Hw,
  separator: Uw
};
function eS({
  items: e,
  onClick: t,
  ariaLabel: n = "Breadcrumb",
  className: r
}) {
  const l = t, a = (d) => {
    d.disabled || l?.({ text: d.text, path: d.path });
  };
  return /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": n,
      className: [ut.root, r].filter(Boolean).join(" "),
      children: /* @__PURE__ */ o("ol", { className: ut.list, children: e.map((d, s) => {
        const i = s === e.length - 1, c = !!d.disabled;
        return /* @__PURE__ */ M("li", { className: ut.item, children: [
          i ? c ? /* @__PURE__ */ M(
            "span",
            {
              className: [ut.current, ut.disabled].filter(Boolean).join(" "),
              "aria-current": "page",
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                d.icon ? /* @__PURE__ */ o("span", { className: ut.icon, "aria-hidden": "true", children: d.icon }) : null,
                d.text
              ]
            }
          ) : d.path ? /* @__PURE__ */ M(
            "a",
            {
              href: d.path,
              className: ut.link,
              "aria-current": "page",
              onClick: (f) => {
                f.preventDefault(), a(d);
              },
              children: [
                d.icon ? /* @__PURE__ */ o("span", { className: ut.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ o("span", { className: ut.text, children: d.text })
              ]
            }
          ) : /* @__PURE__ */ M(
            "span",
            {
              className: ut.current,
              "aria-current": "page",
              tabIndex: 0,
              children: [
                d.icon ? /* @__PURE__ */ o("span", { className: ut.icon, "aria-hidden": "true", children: d.icon }) : null,
                d.text
              ]
            }
          ) : c ? /* @__PURE__ */ M(
            "span",
            {
              className: [ut.link, ut.disabled].filter(Boolean).join(" "),
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                d.icon ? /* @__PURE__ */ o("span", { className: ut.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ o("span", { className: ut.text, children: d.text })
              ]
            }
          ) : d.path ? /* @__PURE__ */ M(
            "a",
            {
              href: d.path,
              className: ut.link,
              onClick: (f) => {
                f.preventDefault(), a(d);
              },
              children: [
                d.icon ? /* @__PURE__ */ o("span", { className: ut.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ o("span", { className: ut.text, children: d.text })
              ]
            }
          ) : /* @__PURE__ */ M(
            "button",
            {
              type: "button",
              className: ut.linkButton,
              tabIndex: 0,
              onClick: () => a(d),
              children: [
                d.icon ? /* @__PURE__ */ o("span", { className: ut.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ o("span", { className: ut.text, children: d.text })
              ]
            }
          ),
          i ? null : /* @__PURE__ */ o("span", { className: ut.separator, "aria-hidden": "true", children: "/" })
        ] }, `${d.text}-${s}`);
      }) })
    }
  );
}
const qw = "_link_tmy3k_1", Kw = {
  link: qw
}, tS = st(function({ children: t, icon: n, visible: r = !0, className: l, ...a }, d) {
  if (r === !1) return null;
  const s = /* @__PURE__ */ M(pt, { children: [
    n != null && /* @__PURE__ */ o(Me, { icon: n, "aria-hidden": "true" }),
    t
  ] }), i = [Kw.link, l].filter(Boolean).join(" ");
  if (a.href != null) {
    const { href: f, ...u } = a;
    return /* @__PURE__ */ o(
      "a",
      {
        ref: d,
        className: i,
        href: f,
        ...u,
        children: s
      }
    );
  }
  return /* @__PURE__ */ o(
    "button",
    {
      ref: d,
      type: "button",
      className: i,
      ...a,
      children: s
    }
  );
}), Ww = "_root_dnkuu_1", Gw = "_list_dnkuu_5", Vw = "_item_dnkuu_15", Yw = "_connector_dnkuu_21", Xw = "_connectorCompleted_dnkuu_30", Zw = "_step_dnkuu_34", Jw = "_active_dnkuu_69", Qw = "_completed_dnkuu_75", e2 = "_circle_dnkuu_79", t2 = "_check_dnkuu_109", n2 = "_icon_dnkuu_114", r2 = "_number_dnkuu_119", s2 = "_text_dnkuu_124", Wt = {
  root: Ww,
  list: Gw,
  item: Vw,
  connector: Yw,
  connectorCompleted: Xw,
  step: Zw,
  active: Jw,
  completed: Qw,
  circle: e2,
  check: t2,
  icon: n2,
  number: r2,
  text: s2
};
function nS({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: r = 0,
  linear: l,
  Linear: a,
  onChange: d,
  Change: s,
  onSelectedIndexChange: i,
  ariaLabel: c = "Steps",
  className: f
}) {
  const u = l ?? a ?? !1, h = t ?? n, m = h !== void 0, [b, g] = q(() => Math.min(Math.max(0, h ?? r), Math.max(0, e.length - 1))), p = Math.min(
    Math.max(0, m ? h : b),
    Math.max(0, e.length - 1)
  ), _ = oe(null), x = B(
    ($) => {
      const O = Math.min(
        Math.max(0, $),
        Math.max(0, e.length - 1)
      );
      m || g(O), (d ?? s ?? i)?.(O);
    },
    [m, d, s, i, e.length]
  ), N = B(
    ($, O) => !!(O.disabled || u && $ > p + 1),
    [u, p]
  ), v = ($) => {
    const O = Array.from(
      $.currentTarget.querySelectorAll("button[data-step]")
    ).filter((C) => C.getAttribute("aria-disabled") !== "true" && !C.disabled), T = document.activeElement, A = T ? O.indexOf(T) : -1;
    if ($.key === "ArrowRight" || $.key === "ArrowDown") {
      if ($.preventDefault(), O.length === 0) return;
      const C = A === -1 ? 0 : (A + 1) % O.length, D = O[C];
      D && D.focus();
    } else if ($.key === "ArrowLeft" || $.key === "ArrowUp") {
      if ($.preventDefault(), O.length === 0) return;
      const C = A === -1 ? O.length - 1 : (A - 1 + O.length) % O.length, D = O[C];
      D && D.focus();
    } else $.key === "Home" ? ($.preventDefault(), O[0]?.focus()) : $.key === "End" && ($.preventDefault(), O[O.length - 1]?.focus());
  };
  return /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": c,
      className: [Wt.root, f].filter(Boolean).join(" "),
      onKeyDown: v,
      children: /* @__PURE__ */ o("ol", { ref: _, role: "list", className: Wt.list, children: e.map(($, O) => {
        const T = O === p, A = O < p, C = N(O, $);
        return /* @__PURE__ */ M(
          "li",
          {
            role: "listitem",
            className: Wt.item,
            children: [
              O > 0 ? /* @__PURE__ */ o(
                "span",
                {
                  className: [
                    Wt.connector,
                    A ? Wt.connectorCompleted : null
                  ].filter(Boolean).join(" "),
                  "aria-hidden": "true"
                }
              ) : null,
              /* @__PURE__ */ M(
                "button",
                {
                  type: "button",
                  "data-step": O,
                  "aria-current": T ? "step" : void 0,
                  "aria-disabled": C ? "true" : void 0,
                  disabled: C,
                  tabIndex: C ? -1 : 0,
                  className: [
                    Wt.step,
                    T ? Wt.active : null,
                    A ? Wt.completed : null,
                    C ? Wt.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    C || x(O);
                  },
                  children: [
                    /* @__PURE__ */ o("span", { className: Wt.circle, "aria-hidden": "true", children: A ? /* @__PURE__ */ o("span", { className: Wt.check, "aria-hidden": "true", children: /* @__PURE__ */ o(Me, { icon: "check", size: "sm" }) }) : $.icon ? /* @__PURE__ */ o("span", { className: Wt.icon, children: $.icon }) : /* @__PURE__ */ o("span", { className: Wt.number, children: O + 1 }) }),
                    /* @__PURE__ */ o("span", { className: Wt.text, children: $.text })
                  ]
                }
              )
            ]
          },
          `${$.text}-${O}`
        );
      }) })
    }
  );
}
const o2 = "_root_12hod_1", l2 = "_horizontal_12hod_13", a2 = "_vertical_12hod_17", i2 = "_pane_12hod_21", c2 = "_handle_12hod_31", d2 = "_handleHorizontal_12hod_51", u2 = "_handleVertical_12hod_57", f2 = "_handleGrip_12hod_63", _2 = "_handleCollapseHint_12hod_75", p2 = "_collapseBtn_12hod_79", m2 = "_collapseBtnCollapsed_12hod_109", dn = {
  root: o2,
  horizontal: l2,
  vertical: a2,
  pane: i2,
  handle: c2,
  handleHorizontal: d2,
  handleVertical: u2,
  handleGrip: f2,
  handleCollapseHint: _2,
  collapseBtn: p2,
  collapseBtnCollapsed: m2
};
function Lr(e, t) {
  if (!e) return t;
  const n = e.trim();
  if (n.endsWith("%")) {
    const l = parseFloat(n.slice(0, -1));
    return Number.isNaN(l) ? t : l;
  }
  if (n.endsWith("px")) {
    const l = parseFloat(n.slice(0, -2));
    return Number.isNaN(l) ? t : l;
  }
  const r = parseFloat(n);
  return Number.isNaN(r) ? t : r;
}
function zn(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
function rS({
  orientation: e,
  Orientation: t,
  panes: n,
  onResize: r,
  Resize: l,
  onCollapse: a,
  Collapse: d,
  ariaLabel: s = "Splitter",
  className: i
}) {
  const c = e ?? t ?? "horizontal", f = c === "horizontal", u = oe(null), h = B(() => {
    const k = n.length;
    if (k === 0) return [];
    const S = n.map((P) => P.size ? Lr(P.size, 100 / k) : 100 / k), E = S.reduce((P, L) => P + L, 0);
    return Math.abs(E - 100) > 0.01 && E > 0 ? S.map((P) => P / E * 100) : S;
  }, [n]), [m, b] = q(() => h()), [g, y] = q(
    () => n.map((k) => !!k.collapsed)
  ), p = oe(m);
  ve(() => {
    y(n.map((k) => !!k.collapsed));
  }, [n]);
  const _ = B(
    () => n.map((k) => Lr(k.min, 0)),
    [n]
  ), x = B(
    () => n.map((k) => Lr(k.max, 100)),
    [n]
  ), N = B(
    (k, S) => {
      const E = { paneIndex: k, newSize: S, cancel: !1 };
      return (r ?? l)?.(E), !E.cancel;
    },
    [r, l]
  ), v = B(
    (k, S) => {
      const E = { paneIndex: k, collapse: S, cancel: !1 };
      return (a ?? d)?.(E), !E.cancel;
    },
    [a, d]
  ), $ = B(
    (k) => {
      const S = !g[k];
      v(k, S) && (S ? (p.current = [...m], y((E) => {
        const P = [...E];
        return P[k] !== void 0 && (P[k] = !0), P;
      }), b((E) => {
        const P = [...E], L = P[k] ?? 0, j = k < P.length - 1 ? k + 1 : k - 1;
        if (j >= 0 && j < P.length) {
          const F = P[j] ?? 0;
          P[j] = F + L, P[k] = 0;
        } else
          P[k] = 0;
        return P;
      })) : (y((E) => {
        const P = [...E];
        return P[k] !== void 0 && (P[k] = !1), P;
      }), b(() => {
        const E = [...p.current];
        return E.length !== n.length ? n.map(() => 100 / n.length) : E;
      })));
    },
    [g, m, n.length, v]
  ), O = oe(
    null
  ), T = B(
    (k, S, E) => {
      const P = u.current;
      if (!P) return null;
      const L = P.getBoundingClientRect();
      let j;
      if (f) {
        if (L.width === 0) return null;
        j = (S - L.left) / L.width * 100;
      } else {
        if (L.height === 0) return null;
        j = (E - L.top) / L.height * 100;
      }
      let F = 0;
      for (let ie = 0; ie < k; ie++) {
        const te = m[ie];
        te !== void 0 && (F += te);
      }
      return j - F;
    },
    [f, m]
  ), A = (k, S) => {
    S.preventDefault();
    const E = S.currentTarget;
    E.focus(), typeof E.setPointerCapture == "function" && E.setPointerCapture(S.pointerId), O.current = { handleIndex: k, pointerId: S.pointerId };
  }, C = (k) => {
    if (!O.current || O.current.pointerId !== k.pointerId)
      return;
    k.preventDefault();
    const S = O.current.handleIndex, E = T(S, k.clientX, k.clientY);
    if (E == null) return;
    const P = _(), L = x(), j = P[S] ?? 0, F = L[S] ?? 100, X = S + 1, ie = P[X] ?? 0, te = L[X] ?? 100, we = m[S] ?? 0, le = m[X] ?? 0, _e = we + le;
    if (_e <= 0) return;
    let W = zn(E, j, F), he = _e - W;
    if (he < ie) {
      if (he = ie, W = _e - he, W < j || W > F) return;
    } else if (he > te && (he = te, W = _e - he, W < j || W > F))
      return;
    W = zn(W, j, F), he = _e - W, N(S, W) && b((ue) => {
      const ye = [...ue];
      return ye[S] = W, ye[X] = he, ye;
    });
  }, D = (k) => {
    !O.current || O.current.pointerId !== k.pointerId || (O.current = null);
  }, I = (k, S) => {
    const E = _(), P = x(), L = k, j = k + 1, F = m[L] ?? 0, X = m[j] ?? 0, ie = F + X;
    let te = 0;
    const we = !!n[L]?.collapsible, le = !!n[j]?.collapsible;
    if (f ? S.key === "ArrowLeft" ? te = -5 : S.key === "ArrowRight" && (te = 5) : S.key === "ArrowUp" ? te = -5 : S.key === "ArrowDown" && (te = 5), S.key === "Home") {
      S.preventDefault();
      let _e = E[L] ?? 0, W = ie - _e;
      if (W = zn(
        W,
        E[j] ?? 0,
        P[j] ?? 100
      ), _e = ie - W, _e = zn(_e, E[L] ?? 0, P[L] ?? 100), !N(L, _e)) return;
      b((he) => {
        const ue = [...he];
        return ue[L] = _e, ue[j] = W, ue;
      });
      return;
    }
    if (S.key === "End") {
      S.preventDefault();
      let _e = P[L] ?? 100;
      _e = Math.min(_e, ie - (E[j] ?? 0));
      let W = ie - _e;
      if (W = zn(
        W,
        E[j] ?? 0,
        P[j] ?? 100
      ), _e = ie - W, _e = zn(_e, E[L] ?? 0, P[L] ?? 100), !N(L, _e)) return;
      b((he) => {
        const ue = [...he];
        return ue[L] = _e, ue[j] = W, ue;
      });
      return;
    }
    if ((S.key === "Enter" || S.key === " ") && (we || le)) {
      S.preventDefault(), $(we ? L : j);
      return;
    }
    if (te !== 0) {
      S.preventDefault();
      let _e = F + te, W = ie - _e;
      const he = E[L] ?? 0, ue = P[L] ?? 100, ye = E[j] ?? 0, pe = P[j] ?? 100;
      if (_e = zn(_e, he, ue), W = ie - _e, (W < ye || W > pe) && (W = zn(W, ye, pe), _e = ie - W, _e = zn(_e, he, ue), W = ie - _e), !N(L, _e)) return;
      b((De) => {
        const G = [...De];
        return G[L] = _e, G[j] = W, G;
      });
    }
  };
  return /* @__PURE__ */ o(
    "div",
    {
      ref: u,
      className: [
        dn.root,
        f ? dn.horizontal : dn.vertical,
        i
      ].filter(Boolean).join(" "),
      "aria-label": s,
      children: n.map((k, S) => {
        const E = !!g[S], P = E ? 0 : m[S] ?? 100 / n.length, L = E ? { display: "none" } : f ? {
          flexBasis: `${P}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        } : {
          flexBasis: `${P}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        }, j = Lr(k.min, 0), F = Lr(k.max, 100), X = S < n.length - 1, ie = !!n[S + 1]?.collapsible;
        return /* @__PURE__ */ M("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ M(
            "div",
            {
              role: "group",
              "aria-label": k.label ?? `Pane ${S + 1}`,
              className: dn.pane,
              style: L,
              "data-collapsed": E ? "true" : void 0,
              children: [
                E ? null : k.children,
                k.collapsible && !E ? /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: dn.collapseBtn,
                    "aria-label": `Collapse pane ${S + 1}`,
                    "aria-expanded": !E,
                    onClick: () => $(S),
                    children: f ? "◀" : "▲"
                  }
                ) : null,
                k.collapsible && E ? /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: dn.collapseBtn,
                    "aria-label": `Expand pane ${S + 1}`,
                    "aria-expanded": !E,
                    onClick: () => $(S),
                    children: f ? "▶" : "▼"
                  }
                ) : null
              ]
            }
          ),
          E && k.collapsible ? (
            // when collapsed we already rendered expand button inside pane, but pane is display none, so render expand button outside?
            // Actually we hide pane with display none, need visible expand button
            // So render alternative expand button adjacent
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: dn.collapseBtnCollapsed,
                "aria-label": `Expand pane ${S + 1}`,
                "aria-expanded": "false",
                onClick: () => $(S),
                children: f ? "▶" : "▼"
              }
            )
          ) : null,
          X ? /* @__PURE__ */ M(
            "div",
            {
              role: "separator",
              "aria-orientation": c,
              "aria-valuemin": j,
              "aria-valuemax": F,
              "aria-valuenow": Math.round(P),
              "aria-label": `Resize handle ${S + 1}`,
              tabIndex: E || g[S + 1] ? -1 : 0,
              className: [
                dn.handle,
                f ? dn.handleHorizontal : dn.handleVertical
              ].filter(Boolean).join(" "),
              onPointerDown: (te) => A(S, te),
              onPointerMove: C,
              onPointerUp: D,
              onKeyDown: (te) => I(S, te),
              children: [
                /* @__PURE__ */ o("span", { className: dn.handleGrip, "aria-hidden": "true" }),
                (k.collapsible || ie) && /* @__PURE__ */ o(
                  "span",
                  {
                    className: dn.handleCollapseHint,
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
const h2 = "_root_1w3wd_1", g2 = "_list_1w3wd_5", b2 = "_vertical_1w3wd_14", y2 = "_horizontal_1w3wd_20", x2 = "_item_1w3wd_28", v2 = "_link_1w3wd_32", w2 = "_active_1w3wd_57", pr = {
  root: h2,
  list: g2,
  vertical: b2,
  horizontal: y2,
  item: x2,
  link: v2,
  active: w2
};
function sS({
  items: e,
  selector: t,
  Selector: n,
  orientation: r,
  Orientation: l,
  onClick: a,
  Click: d,
  ariaLabel: s = "Table of contents",
  className: i
}) {
  const c = t ?? n, f = r ?? l ?? "vertical", [u, h] = q(
    () => e[0]?.selector ?? null
  ), m = oe(u);
  m.current = u;
  const b = B(
    (g, y) => {
      if (h(g.selector), (a ?? d)?.({ text: g.text, selector: g.selector }), y) {
        try {
          y.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        } catch {
          y.scrollIntoView();
        }
        const _ = y;
        _.getAttribute("tabindex") == null && _.tabIndex === -1 || _.tabIndex < 0 ? (_.getAttribute("tabindex"), _.setAttribute("tabindex", "-1"), _.focus({ preventScroll: !0 })) : _.focus({ preventScroll: !0 });
      }
    },
    [a, d]
  );
  return ve(() => {
    if (e.length === 0) return;
    const y = (() => {
      if (c) {
        const v = document.querySelector(c);
        if (v) return v;
      }
      return window;
    })();
    let p = null;
    const _ = /* @__PURE__ */ new Map(), x = () => {
      let v = null, $ = null;
      for (const T of e) {
        const A = document.querySelector(T.selector);
        if (!A) continue;
        _.set(T.selector, A);
        const C = A.getBoundingClientRect();
        let D = C.top;
        if (y !== window) {
          const I = y.getBoundingClientRect();
          D = C.top - I.top;
        }
        D <= 80 ? (!$ || D > $.el.getBoundingClientRect().top - (y !== window ? y.getBoundingClientRect().top : 0)) && ($ = { sel: T.selector, el: A }) : (!v || D < v.top) && (v = { sel: T.selector, top: D });
      }
      const O = $?.sel ?? v?.sel ?? e[0]?.selector ?? null;
      O && O !== m.current && h(O);
    }, N = () => {
      x();
    };
    if (typeof IntersectionObserver < "u") {
      const v = y === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
        root: y,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      };
      p = new IntersectionObserver(($) => {
        const O = $.filter((T) => T.isIntersecting).sort((T, A) => T.boundingClientRect.top - A.boundingClientRect.top);
        if (O[0]) {
          const T = O[0].target;
          for (const A of e) {
            if (document.querySelector(A.selector) === T) {
              h(A.selector);
              break;
            }
            if (A.selector.startsWith("#") && T.id === A.selector.slice(1)) {
              h(A.selector);
              break;
            }
          }
        } else
          x();
      }, v);
      for (const $ of e) {
        const O = document.querySelector($.selector);
        O && (p.observe(O), _.set($.selector, O));
      }
    }
    return y === window ? (window.addEventListener("scroll", N, { passive: !0 }), x(), () => {
      window.removeEventListener("scroll", N), p?.disconnect();
    }) : (y.addEventListener("scroll", N, {
      passive: !0
    }), x(), () => {
      y.removeEventListener("scroll", N), p?.disconnect();
    });
  }, [e, c]), /* @__PURE__ */ o(
    "nav",
    {
      "aria-label": s,
      className: [pr.root, pr[f], i].filter(Boolean).join(" "),
      children: /* @__PURE__ */ o("ol", { className: pr.list, children: e.map((g) => {
        const y = g.selector === u;
        return /* @__PURE__ */ o("li", { className: pr.item, children: /* @__PURE__ */ o(
          "a",
          {
            href: g.selector.startsWith("#") || g.selector.startsWith(".") ? g.selector : `#${g.selector}`,
            className: [pr.link, y ? pr.active : null].filter(Boolean).join(" "),
            "aria-current": y ? "location" : void 0,
            onClick: (p) => {
              p.preventDefault();
              const _ = document.querySelector(g.selector);
              b(g, _);
            },
            children: g.text
          }
        ) }, `${g.text}-${g.selector}`);
      }) })
    }
  );
}
const k2 = "_root_1bfit_1", N2 = "_viewport_1bfit_17", O2 = "_slide_1bfit_24", S2 = "_active_1bfit_33", $2 = "_arrow_1bfit_37", E2 = "_prev_1bfit_71", T2 = "_next_1bfit_75", C2 = "_pauseBtn_1bfit_79", A2 = "_indicators_1bfit_110", D2 = "_indicator_1bfit_110", M2 = "_indicatorActive_1bfit_145", un = {
  root: k2,
  viewport: N2,
  slide: O2,
  active: S2,
  arrow: $2,
  prev: E2,
  next: T2,
  pauseBtn: C2,
  indicators: A2,
  indicator: D2,
  indicatorActive: M2
};
function oS({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: r = 0,
  auto: l,
  Auto: a,
  interval: d,
  Interval: s,
  pauseOnHover: i,
  PauseOnHover: c,
  showArrows: f,
  ShowArrows: u,
  showIndicators: h,
  ShowIndicators: m,
  onChange: b,
  Change: g,
  ariaLabel: y = "Carousel",
  className: p
}) {
  const _ = t ?? n, x = _ !== void 0, [N, v] = q(() => Math.min(Math.max(0, _ ?? r), Math.max(0, e.length - 1))), $ = x ? _ : N, O = e.length === 0 ? 0 : Math.min(Math.max(0, $), e.length - 1), T = l ?? a ?? !1, A = d ?? s ?? 3e3, C = i ?? c ?? !0, D = f ?? u ?? !0, I = h ?? m ?? !0, [k, S] = q(!1), [E, P] = q(!1), L = k || E, j = oe(null), F = ot(), X = B(
    (ye) => {
      const pe = e.length === 0 ? 0 : (ye % e.length + e.length) % e.length;
      x || v(pe), (b ?? g)?.(pe);
    },
    [x, b, g, e.length]
  ), ie = B(() => {
    X(O - 1);
  }, [X, O]), te = B(() => {
    X(O + 1);
  }, [X, O]), we = B(
    (ye) => {
      X(ye);
    },
    [X]
  );
  ve(() => {
    if (!T || L || e.length <= 1) return;
    const ye = setInterval(() => {
      X(O + 1);
    }, A);
    return () => clearInterval(ye);
  }, [T, L, A, O, X, e.length]);
  const le = (ye) => {
    e.length !== 0 && (ye.key === "ArrowLeft" ? (ye.preventDefault(), ie()) : ye.key === "ArrowRight" ? (ye.preventDefault(), te()) : ye.key === "Home" ? (ye.preventDefault(), we(0)) : ye.key === "End" && (ye.preventDefault(), we(e.length - 1)));
  }, _e = () => {
    C && T && P(!0);
  }, W = () => {
    C && T && P(!1);
  }, he = () => {
    C && T && P(!0);
  }, ue = () => {
    C && T && P(!1);
  };
  return e.length === 0 ? null : /* @__PURE__ */ M(
    "div",
    {
      ref: j,
      role: "region",
      "aria-roledescription": "carousel",
      "aria-label": y,
      tabIndex: 0,
      className: [un.root, p].filter(Boolean).join(" "),
      onKeyDown: le,
      onMouseEnter: _e,
      onMouseLeave: W,
      onFocusCapture: he,
      onBlurCapture: ue,
      children: [
        /* @__PURE__ */ o("div", { id: F, className: un.viewport, children: e.map((ye, pe) => {
          const De = pe === O;
          return /* @__PURE__ */ o(
            "div",
            {
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `Slide ${pe + 1} of ${e.length}`,
              "aria-hidden": De ? void 0 : !0,
              hidden: !De,
              className: [un.slide, De ? un.active : null].filter(Boolean).join(" "),
              children: ye
            },
            pe
          );
        }) }),
        D && e.length > 1 ? /* @__PURE__ */ M(pt, { children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: [un.arrow, un.prev].filter(Boolean).join(" "),
              "aria-label": "Previous slide",
              "aria-controls": F,
              onClick: ie,
              children: "‹"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: [un.arrow, un.next].filter(Boolean).join(" "),
              "aria-label": "Next slide",
              "aria-controls": F,
              onClick: te,
              children: "›"
            }
          )
        ] }) : null,
        T ? /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            className: un.pauseBtn,
            "aria-label": k ? "Resume" : "Pause",
            "aria-pressed": k,
            onClick: () => S((ye) => !ye),
            children: k ? "▶" : "⏸"
          }
        ) : null,
        I && e.length > 1 ? /* @__PURE__ */ o(
          "div",
          {
            className: un.indicators,
            role: "group",
            "aria-label": "Slide indicators",
            children: e.map((ye, pe) => {
              const De = pe === O;
              return /* @__PURE__ */ o(
                "button",
                {
                  type: "button",
                  className: [
                    un.indicator,
                    De ? un.indicatorActive : null
                  ].filter(Boolean).join(" "),
                  "aria-label": `Go to slide ${pe + 1}`,
                  "aria-current": De ? "true" : void 0,
                  "aria-controls": F,
                  onClick: () => we(pe)
                },
                pe
              );
            })
          }
        ) : null
      ]
    }
  );
}
const I2 = "_root_1aa5u_1", z2 = "_group_1aa5u_20", L2 = "_itemWrapper_1aa5u_30", R2 = "_treeitem_1aa5u_34", P2 = "_disabled_1aa5u_50", j2 = "_selected_1aa5u_60", B2 = "_caret_1aa5u_66", F2 = "_caretIcon_1aa5u_113", H2 = "_caretOpen_1aa5u_120", U2 = "_caretPlaceholder_1aa5u_124", q2 = "_label_1aa5u_130", K2 = "_loading_1aa5u_137", W2 = "_loadingRow_1aa5u_143", G2 = "_empty_1aa5u_149", V2 = "_checkbox_1aa5u_155", Mt = {
  root: I2,
  group: z2,
  itemWrapper: L2,
  treeitem: R2,
  disabled: P2,
  selected: j2,
  caret: B2,
  caretIcon: F2,
  caretOpen: H2,
  caretPlaceholder: U2,
  label: q2,
  loading: K2,
  loadingRow: W2,
  empty: G2,
  checkbox: V2
};
function Y2({
  indeterminate: e,
  ...t
}) {
  const n = oe(null);
  return ve(() => {
    n.current && (n.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ o("input", { ref: n, type: "checkbox", ...t });
}
function lS({
  data: e,
  Data: t,
  children: n,
  Children: r,
  textProperty: l,
  TextProperty: a,
  keyProperty: d,
  KeyProperty: s,
  selectionMode: i,
  SelectionMode: c,
  selectedItem: f,
  SelectedItem: u,
  selectedItems: h,
  SelectedItems: m,
  defaultSelectedItem: b,
  defaultSelectedItems: g,
  onChange: y,
  Change: p,
  onExpand: _,
  Expand: x,
  onCollapse: N,
  Collapse: v,
  loadChildData: $,
  LoadChildData: O,
  template: T,
  Template: A,
  itemTemplate: C,
  ItemTemplate: D,
  ariaLabel: I,
  AriaLabel: k,
  allowCheckBoxes: S = !1,
  checkedKeys: E,
  defaultCheckedKeys: P,
  onCheckedChange: L,
  allowCheckChildren: j = !0,
  className: F
}) {
  const X = e ?? t ?? [], ie = n ?? r, te = l ?? a ?? "text", we = d ?? s ?? "id", le = i ?? c ?? "single", _e = I ?? k ?? "Tree", W = $ ?? O, he = T ?? A ?? C ?? D, ue = B(
    (K) => {
      const ee = K[we];
      return ee != null ? String(ee) : String(K.id ?? "");
    },
    [we]
  ), ye = B(
    (K) => {
      const ee = K[te];
      if (ee != null) return String(ee);
      const de = K.text;
      return de != null ? String(de) : "";
    },
    [te]
  ), pe = B(
    (K) => {
      if (ie) {
        const de = ie(K);
        if (de !== void 0) return de;
      }
      const ee = K.children;
      if (Array.isArray(ee)) return ee;
    },
    [ie]
  ), De = B(
    (K) => {
      const ee = /* @__PURE__ */ new Set(), de = (Ne) => {
        for (const ke of Ne) {
          const Ce = ue(ke);
          ke.expanded && ee.add(Ce);
          const We = pe(ke);
          We && We.length > 0 && de(We);
        }
      };
      return de(K), ee;
    },
    [ue, pe]
  ), [G, $e] = q(
    () => De(X)
  ), [ne, Ae] = q(
    () => /* @__PURE__ */ new Map()
  ), [fe, Fe] = q(() => /* @__PURE__ */ new Set()), Ge = f ?? u, Je = h ?? m, yt = le === "multiple" ? Je !== void 0 : Ge !== void 0, Z = B(() => {
    if (le === "multiple") {
      if (g && g.length > 0)
        return new Set(g.map((de) => ue(de)));
      const K = /* @__PURE__ */ new Set(), ee = (de) => {
        for (const Ne of de) {
          Ne.selected && K.add(ue(Ne));
          const ke = pe(Ne);
          ke && ee(ke);
        }
      };
      return ee(X), K;
    } else {
      if (b) return /* @__PURE__ */ new Set([ue(b)]);
      let K = null;
      const ee = (de) => {
        for (const Ne of de) {
          if (Ne.selected)
            return K = ue(Ne), !0;
          const ke = pe(Ne);
          if (ke && ee(ke)) return !0;
        }
        return !1;
      };
      return ee(X), K ? /* @__PURE__ */ new Set([K]) : /* @__PURE__ */ new Set();
    }
  }, [
    le,
    b,
    g,
    ue,
    pe,
    X
  ]), [z, Y] = q(
    () => Z()
  ), Q = Se(() => {
    if (le === "multiple") {
      if (Je !== void 0) {
        const K = Je;
        return K ? new Set(K.map((ee) => ue(ee))) : /* @__PURE__ */ new Set();
      }
      return z;
    } else {
      if (Ge !== void 0) {
        const K = Ge;
        return K ? /* @__PURE__ */ new Set([ue(K)]) : /* @__PURE__ */ new Set();
      }
      return z;
    }
  }, [
    le,
    Je,
    Ge,
    z,
    ue
  ]), ge = B(
    (K) => {
      let ee;
      const de = (Ne) => {
        for (const ke of Ne) {
          if (ue(ke) === K)
            return ee = ke, !0;
          const We = ne.get(ue(ke)) ?? pe(ke);
          if (We && de(We)) return !0;
        }
        return !1;
      };
      if (de(X), !ee) {
        for (const Ne of ne.values())
          if (de(Ne)) break;
      }
      return ee;
    },
    [X, ne, ue, pe]
  ), ae = B(() => {
    const K = /* @__PURE__ */ new Map(), ee = (de) => {
      for (const Ne of de) {
        const ke = ue(Ne);
        K.set(ke, Ne);
        const We = ne.get(ke) ?? pe(Ne);
        We && ee(We);
      }
    };
    return ee(X), K;
  }, [X, ne, ue, pe]), Ee = B(
    (K) => {
      const ee = ue(K);
      if (!K.disabled)
        if (le === "multiple") {
          const Ne = new Set(Q);
          Ne.has(ee) ? Ne.delete(ee) : Ne.add(ee), yt || Y(Ne);
          const ke = y ?? p;
          if (ke) {
            const Ce = ae(), We = [];
            for (const Be of Ne) {
              const it = Ce.get(Be) ?? ge(Be);
              it && We.push(it);
            }
            ke({ item: K, selectedItems: We });
          }
        } else if (!Q.has(ee) || Q.size !== 1 || !Q.has(ee)) {
          yt || Y(/* @__PURE__ */ new Set([ee]));
          const ke = y ?? p;
          ke && ke({ item: K, selectedItem: K });
        } else {
          const ke = y ?? p;
          ke && ke({ item: K, selectedItem: K });
        }
    },
    [
      ue,
      le,
      Q,
      yt,
      y,
      p,
      ae,
      ge
    ]
  ), je = B(
    async (K) => {
      const ee = ue(K);
      if (!!K.disabled) return;
      const Ne = G.has(ee), ke = _ ?? x, Ce = N ?? v, We = pe(K), it = ne.get(ee) ?? We, Et = !(it !== void 0 && it.length > 0) && W != null;
      if (Ne) {
        $e((mt) => {
          const ze = new Set(mt);
          return ze.delete(ee), ze;
        }), Ce?.({ item: K });
        return;
      }
      if (Et) {
        if (fe.has(ee)) return;
        Fe((mt) => {
          const ze = new Set(mt);
          return ze.add(ee), ze;
        });
        try {
          const ze = await W(K);
          Ae((Tt) => {
            const Zt = new Map(Tt);
            return Zt.set(ee, ze), Zt;
          }), $e((Tt) => {
            const Zt = new Set(Tt);
            return Zt.add(ee), Zt;
          }), ke?.({ item: K });
        } catch {
        } finally {
          Fe((mt) => {
            const ze = new Set(mt);
            return ze.delete(ee), ze;
          });
        }
        return;
      }
      $e((mt) => {
        const ze = new Set(mt);
        return ze.add(ee), ze;
      }), ke?.({ item: K });
    },
    [
      ue,
      G,
      pe,
      ne,
      W,
      fe,
      _,
      x,
      N,
      v
    ]
  ), Ze = Se(() => {
    const K = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Set(), Ne = (ke, Ce) => {
      for (const We of ke) {
        const Be = ue(We);
        K.has(Be) || K.set(Be, []), ee.set(Be, Ce), We.disabled && de.add(Be);
        const rt = ne.get(Be) ?? pe(We);
        rt && rt.length > 0 && (K.set(
          Be,
          rt.map((Et) => ue(Et))
        ), Ne(rt, Be));
      }
    };
    return Ne(X, null), { childrenOf: K, parentOf: ee, disabledKeys: de };
  }, [X, ne, ue, pe]), Qe = B(
    (K) => {
      const ee = [], de = [...Ze.childrenOf.get(K) ?? []];
      for (; de.length > 0; ) {
        const Ne = de.pop();
        ee.push(Ne), de.push(...Ze.childrenOf.get(Ne) ?? []);
      }
      return ee;
    },
    [Ze]
  ), [nt, Xt] = q(
    () => new Set(P ?? [])
  ), re = E !== void 0 ? new Set(E) : nt, Le = B(
    (K) => {
      const ee = Ze.disabledKeys;
      return Qe(K).filter((de) => !ee.has(de));
    },
    [Qe, Ze]
  ), Nt = B(
    (K) => {
      if (re.has(K)) return !0;
      if (!S || !j) return !1;
      const ee = Le(K);
      return ee.length > 0 && ee.every((de) => re.has(de));
    },
    [re, S, j, Le]
  ), Rt = B(
    (K) => {
      if (!S || !j || re.has(K))
        return !1;
      const ee = Le(K);
      if (ee.length === 0) return !1;
      const de = ee.filter((Ne) => re.has(Ne)).length;
      return de > 0 && de < ee.length;
    },
    [re, S, j, Le]
  ), xt = B(
    (K) => {
      if (!S || K.disabled) return;
      const ee = ue(K), de = new Set(re);
      if (de.has(ee) || Nt(ee)) {
        if (de.delete(ee), j)
          for (const Ne of Le(ee)) de.delete(Ne);
      } else if (de.add(ee), j)
        for (const Ne of Le(ee)) de.add(Ne);
      E === void 0 && Xt(de), L?.([...de]);
    },
    [
      S,
      j,
      E,
      re,
      Le,
      ue,
      Nt,
      L
    ]
  ), Ie = Se(() => {
    const K = [], ee = (de, Ne, ke) => {
      de.forEach((Ce, We) => {
        const Be = ue(Ce), it = ye(Ce), rt = ne.get(Be) ?? pe(Ce);
        let Et;
        ne.has(Be) ? Et = ne.get(Be).length > 0 : rt !== void 0 ? Et = rt.length > 0 : W ? Et = !0 : Et = !1;
        const mt = G.has(Be), ze = !!Ce.disabled, Tt = de.length, Zt = We + 1;
        if (K.push({
          item: Ce,
          key: Be,
          text: it,
          level: Ne,
          posInSet: Zt,
          setSize: Tt,
          hasChildren: Et,
          expanded: mt,
          parentKey: ke,
          disabled: ze
        }), Et && mt) {
          const _n = ne.get(Be) ?? rt;
          _n && _n.length > 0 && ee(_n, Ne + 1, Be);
        }
      });
    };
    return ee(X, 1, null), K;
  }, [
    X,
    ue,
    ye,
    pe,
    ne,
    G,
    W,
    fe
  ]), [Ke, vt] = q(
    () => Ie[0]?.key ?? null
  ), $t = oe(""), at = oe(null), V = oe(null);
  ve(() => {
    if (!Ke && Ie.length > 0) {
      const K = Ie[0];
      K && vt(K.key);
    } else if (Ke && !Ie.some((K) => K.key === Ke)) {
      const K = Ie[0];
      vt(K ? K.key : null);
    }
  }, [Ie, Ke]), ve(() => {
    if (Ke) {
      const K = V.current?.querySelector(
        `[data-key="${CSS.escape(Ke)}"]`
      );
      let ee = null;
      K || (ee = V.current?.querySelector(
        `[data-key="${Ke}"]`
      ) ?? null);
      const de = K ?? ee;
      de && document.activeElement !== de && V.current?.contains(document.activeElement) && de.focus();
    }
  }, [Ke]);
  const me = B((K) => {
    vt(K), requestAnimationFrame(() => {
      const ee = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(K) : K;
      let de = V.current?.querySelector(
        `[data-key="${ee}"]`
      );
      de || (de = V.current?.querySelector(`[data-key="${K}"]`) ?? null), de?.focus();
    });
  }, []), Ve = B(
    (K) => Ie.find((de) => de.key === K)?.parentKey ?? null,
    [Ie]
  ), Ye = B(
    (K) => {
      if (Ie.length === 0) return;
      const ee = Ke ? Ie.findIndex((ke) => ke.key === Ke) : -1, de = ee >= 0 ? Ie[ee] : void 0;
      let Ne = null;
      if (K.key === "ArrowDown") {
        if (K.preventDefault(), ee === -1)
          Ne = Ie[0]?.key ?? null;
        else {
          const ke = (ee + 1) % Ie.length, Ce = Ie[ke];
          Ce && (Ne = Ce.key);
        }
        Ne && me(Ne);
        return;
      }
      if (K.key === "ArrowUp") {
        if (K.preventDefault(), ee === -1) {
          const ke = Ie[Ie.length - 1];
          ke && (Ne = ke.key);
        } else {
          const ke = (ee - 1 + Ie.length) % Ie.length, Ce = Ie[ke];
          Ce && (Ne = Ce.key);
        }
        Ne && me(Ne);
        return;
      }
      if (K.key === "ArrowRight") {
        if (K.preventDefault(), !de) return;
        if (de.hasChildren && !de.expanded)
          je(de.item);
        else if (de.hasChildren && de.expanded) {
          const ke = ee + 1, Ce = Ie[ke];
          Ce && Ce.parentKey === de.key && me(Ce.key);
        }
        return;
      }
      if (K.key === "ArrowLeft") {
        if (K.preventDefault(), !de) return;
        if (de.hasChildren && de.expanded)
          je(de.item);
        else {
          const ke = Ve(de.key);
          ke && me(ke);
        }
        return;
      }
      if (K.key === "Home") {
        K.preventDefault();
        const ke = Ie[0];
        ke && me(ke.key);
        return;
      }
      if (K.key === "End") {
        K.preventDefault();
        const ke = Ie[Ie.length - 1];
        ke && me(ke.key);
        return;
      }
      if (K.key === "Enter" || K.key === " ") {
        if (K.key === " " && K.target?.tagName === "INPUT" || (K.preventDefault(), !de)) return;
        if (K.key === " " && S) {
          const ke = ge(de.key);
          ke && xt(ke);
          return;
        }
        Ee(de.item);
        return;
      }
      if (K.key.length === 1 && /^[a-zA-Z0-9]$/.test(K.key)) {
        K.preventDefault();
        const ke = ($t.current + K.key).toLowerCase();
        $t.current = ke, at.current && clearTimeout(at.current), at.current = setTimeout(() => {
          $t.current = "";
        }, 500);
        const Ce = ee >= 0 ? ee + 1 : 0, it = [...Ie, ...Ie].slice(Ce, Ce + Ie.length).find((rt) => rt.text.toLowerCase().startsWith(ke));
        it && me(it.key);
        return;
      }
    },
    [
      Ie,
      Ke,
      me,
      je,
      Ee,
      Ve,
      S,
      xt
    ]
  ), Pt = B(() => {
    if (!Ke && Ie.length > 0) {
      const K = Ie[0];
      K && vt(K.key);
    }
  }, [Ke, Ie]), Xe = (K, ee, de) => /* @__PURE__ */ o("ul", { role: "group", className: Mt.group, children: K.map((Ne, ke) => {
    const Ce = ue(Ne), We = ye(Ne), Be = ne.get(Ce) ?? pe(Ne);
    let it;
    ne.has(Ce) ? it = ne.get(Ce).length > 0 : Be !== void 0 ? it = Be.length > 0 : W ? it = !0 : it = !1;
    const rt = G.has(Ce), Et = Q.has(Ce), mt = !!Ne.disabled, ze = fe.has(Ce), Tt = Ke === Ce, Zt = K.length, _n = ke + 1, Tn = he ? he(Ne) : We, jn = S ? {
      checked: Nt(Ce),
      indeterminate: Rt(Ce)
    } : null;
    return /* @__PURE__ */ M("li", { role: "none", className: Mt.itemWrapper, children: [
      /* @__PURE__ */ M(
        "div",
        {
          role: "treeitem",
          "data-key": Ce,
          tabIndex: Tt ? 0 : -1,
          "aria-expanded": it ? rt : void 0,
          "aria-selected": Et,
          "aria-level": ee,
          "aria-setsize": Zt,
          "aria-posinset": _n,
          "aria-disabled": mt || void 0,
          "aria-busy": ze || void 0,
          className: [
            Mt.treeitem,
            Et ? Mt.selected : null,
            mt ? Mt.disabled : null,
            Tt ? Mt.focused : null
          ].filter(Boolean).join(" "),
          onClick: () => {
            me(Ce), mt || Ee(Ne);
          },
          onFocus: () => vt(Ce),
          children: [
            S ? /* @__PURE__ */ o(
              Y2,
              {
                className: Mt.checkbox,
                checked: jn?.checked ?? !1,
                indeterminate: jn?.indeterminate ?? !1,
                disabled: mt,
                "aria-label": `Select ${We}`,
                onClick: (wn) => wn.stopPropagation(),
                onChange: () => xt(Ne)
              }
            ) : null,
            it ? /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: Mt.caret,
                "aria-label": `${rt ? "Collapse" : "Expand"} ${We}`,
                "aria-expanded": rt,
                tabIndex: -1,
                disabled: mt,
                onClick: (wn) => {
                  wn.stopPropagation(), me(Ce), je(Ne);
                },
                children: /* @__PURE__ */ o(
                  "span",
                  {
                    "aria-hidden": "true",
                    className: [
                      Mt.caretIcon,
                      rt ? Mt.caretOpen : null
                    ].filter(Boolean).join(" "),
                    children: /* @__PURE__ */ o(Me, { icon: "chevron_right", size: 10 })
                  }
                )
              }
            ) : /* @__PURE__ */ o(
              "span",
              {
                className: Mt.caretPlaceholder,
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ o("span", { className: Mt.label, children: Tn }),
            ze ? /* @__PURE__ */ o("span", { className: Mt.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      it && rt ? ze ? /* @__PURE__ */ o("div", { className: Mt.loadingRow, "aria-busy": "true", children: "Loading…" }) : Be && Be.length > 0 ? Xe(Be, ee + 1) : ne.has(Ce) && ne.get(Ce).length > 0 ? Xe(
        ne.get(Ce),
        ee + 1
      ) : (Be && Be.length === 0, null) : null
    ] }, Ce);
  }) });
  return /* @__PURE__ */ o(
    "div",
    {
      ref: V,
      role: "tree",
      "aria-label": _e,
      "aria-multiselectable": le === "multiple" || void 0,
      tabIndex: 0,
      className: [Mt.root, F].filter(Boolean).join(" "),
      onKeyDown: Ye,
      onFocus: Pt,
      children: X.length === 0 ? /* @__PURE__ */ o("div", { className: Mt.empty, children: "No items" }) : Xe(X, 1)
    }
  );
}
const X2 = "_root_10fdq_1", Z2 = "_panel_10fdq_8", J2 = "_header_10fdq_19", Q2 = "_listbox_10fdq_28", ek = "_option_10fdq_42", tk = "_disabled_10fdq_57", nk = "_active_10fdq_66", rk = "_selected_10fdq_70", sk = "_empty_10fdq_86", ok = "_controls_10fdq_93", lk = "_reorder_10fdq_102", ak = "_btn_10fdq_110", tt = {
  root: X2,
  panel: Z2,
  header: J2,
  listbox: Q2,
  option: ek,
  disabled: tk,
  active: nk,
  selected: rk,
  empty: sk,
  controls: ok,
  reorder: lk,
  btn: ak
};
function It(e, t) {
  const n = e[t];
  return n != null ? String(n) : String(e.id ?? "");
}
function as(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function aS({
  source: e,
  Source: t,
  target: n,
  Target: r,
  value: l,
  Value: a,
  targetValue: d,
  TargetValue: s,
  data: i,
  Data: c,
  onSourceChange: f,
  SourceChange: u,
  onTargetChange: h,
  TargetChange: m,
  keyProperty: b,
  KeyProperty: g,
  onMove: y,
  Move: p,
  ariaLabel: _,
  AriaLabel: x,
  className: N
}) {
  const v = b ?? g ?? "id", $ = _ ?? x ?? "PickList", O = e ?? t ?? l ?? a ?? i ?? c ?? [], T = n ?? r ?? d ?? s ?? [], [A, C] = q(() => [
    ...O
  ]), [D, I] = q(() => [
    ...T
  ]);
  ve(() => {
    const z = e ?? t ?? l ?? a ?? i ?? c;
    z !== void 0 && C([...z]);
  }, [e, t, l, a, i, c]), ve(() => {
    const z = n ?? r ?? d ?? s;
    z !== void 0 && I([...z]);
  }, [n, r, d, s]);
  const [k, S] = q(
    () => /* @__PURE__ */ new Set()
  ), [E, P] = q(
    () => /* @__PURE__ */ new Set()
  ), [L, j] = q(() => {
    const z = O.findIndex((Y) => !Y.disabled);
    return z >= 0 ? z : 0;
  }), [F, X] = q(() => {
    const z = T.findIndex((Y) => !Y.disabled);
    return z >= 0 ? z : 0;
  }), ie = Se(
    () => A.map((z, Y) => z.disabled ? -1 : Y).filter((z) => z >= 0),
    [A]
  ), te = Se(
    () => D.map((z, Y) => z.disabled ? -1 : Y).filter((z) => z >= 0),
    [D]
  );
  ve(() => {
    if (L >= A.length) {
      const z = ie[ie.length - 1];
      j(z ?? 0);
    } else if (A.length > 0 && ie.length > 0 && !ie.includes(L)) {
      const z = ie[0];
      z !== void 0 && j(z);
    }
  }, [L, A.length, ie]), ve(() => {
    if (F >= D.length) {
      const z = te[te.length - 1];
      X(z ?? 0);
    } else if (D.length > 0 && te.length > 0 && !te.includes(F)) {
      const z = te[0];
      z !== void 0 && X(z);
    }
  }, [F, D.length, te]), ve(() => {
    S((z) => {
      const Y = /* @__PURE__ */ new Set();
      for (const Q of z)
        A.some(
          (ae) => It(ae, v) === Q && !ae.disabled
        ) && Y.add(Q);
      return Y;
    });
  }, [A, v]), ve(() => {
    P((z) => {
      const Y = /* @__PURE__ */ new Set();
      for (const Q of z)
        D.some(
          (ae) => It(ae, v) === Q && !ae.disabled
        ) && Y.add(Q);
      return Y;
    });
  }, [D, v]);
  const we = B(
    (z) => {
      (f ?? u)?.(z);
    },
    [f, u]
  ), le = B(
    (z) => {
      (h ?? m)?.(z);
    },
    [h, m]
  ), _e = B(
    (z) => {
      (y ?? p)?.(z);
    },
    [y, p]
  ), W = B(
    (z) => {
      const Y = A[z];
      if (!Y || Y.disabled) return;
      const Q = It(Y, v);
      S((ge) => {
        const ae = new Set(ge);
        return ae.has(Q) ? ae.delete(Q) : ae.add(Q), ae;
      }), j(z);
    },
    [A, v]
  ), he = B(
    (z) => {
      const Y = D[z];
      if (!Y || Y.disabled) return;
      const Q = It(Y, v);
      P((ge) => {
        const ae = new Set(ge);
        return ae.has(Q) ? ae.delete(Q) : ae.add(Q), ae;
      }), X(z);
    },
    [D, v]
  ), ue = B(() => {
    const z = [], Y = [];
    for (const Ee of A) {
      const je = It(Ee, v);
      k.has(je) && !Ee.disabled ? z.push(Ee) : Y.push(Ee);
    }
    if (z.length === 0) return;
    const Q = Y, ge = [...D, ...z];
    C(Q), I(ge), S(/* @__PURE__ */ new Set());
    const ae = new Set(z.map((Ee) => It(Ee, v)));
    P(ae), we(Q), le(ge), _e({
      source: Q,
      target: ge,
      moved: z,
      direction: "toTarget"
    });
  }, [
    A,
    D,
    k,
    v,
    we,
    le,
    _e
  ]), ye = B(() => {
    const z = [], Y = [];
    for (const Ee of D) {
      const je = It(Ee, v);
      E.has(je) && !Ee.disabled ? z.push(Ee) : Y.push(Ee);
    }
    if (z.length === 0) return;
    const Q = Y, ge = [...A, ...z];
    I(Q), C(ge), P(/* @__PURE__ */ new Set());
    const ae = new Set(z.map((Ee) => It(Ee, v)));
    S(ae), we(ge), le(Q), _e({
      source: ge,
      target: Q,
      moved: z,
      direction: "toSource"
    });
  }, [
    A,
    D,
    E,
    v,
    we,
    le,
    _e
  ]), pe = B(() => {
    const z = A.filter((ge) => !ge.disabled);
    if (z.length === 0) return;
    const Y = A.filter((ge) => !!ge.disabled), Q = [...D, ...z];
    C(Y), I(Q), S(/* @__PURE__ */ new Set()), we(Y), le(Q), _e({
      source: Y,
      target: Q,
      moved: z,
      direction: "allToTarget"
    });
  }, [
    A,
    D,
    v,
    we,
    le,
    _e
  ]), De = B(() => {
    const z = D.filter((ge) => !ge.disabled);
    if (z.length === 0) return;
    const Y = D.filter((ge) => !!ge.disabled), Q = [...A, ...z];
    I(Y), C(Q), P(/* @__PURE__ */ new Set()), we(Q), le(Y), _e({
      source: Q,
      target: Y,
      moved: z,
      direction: "allToSource"
    });
  }, [A, D, we, le, _e]), G = B(() => {
    if (E.size === 0) return;
    const z = [...D], Y = E, Q = [];
    for (let ae = 1; ae < z.length; ae++) {
      const Ee = z[ae], je = z[ae - 1];
      if (!Ee || !je) continue;
      const Ze = It(Ee, v), Qe = It(je, v);
      Y.has(Ze) && !Y.has(Qe) && !Ee.disabled && !je.disabled && (z[ae - 1] = Ee, z[ae] = je, Q.push(Ee));
    }
    if (Q.length === 0) return;
    I(z), le(z), _e({ source: A, target: z, moved: Q, direction: "up" });
    const ge = Array.from(Y)[0];
    if (ge) {
      const ae = z.findIndex(
        (Ee) => It(Ee, v) === ge
      );
      ae >= 0 && X(ae);
    }
  }, [
    D,
    E,
    v,
    A,
    le,
    _e
  ]), $e = B(() => {
    if (E.size === 0) return;
    const z = [...D], Y = E, Q = [];
    for (let ae = z.length - 2; ae >= 0; ae--) {
      const Ee = z[ae], je = z[ae + 1];
      if (!Ee || !je) continue;
      const Ze = It(Ee, v), Qe = It(je, v);
      Y.has(Ze) && !Y.has(Qe) && !Ee.disabled && !je.disabled && (z[ae] = je, z[ae + 1] = Ee, Q.push(Ee));
    }
    if (Q.length === 0) return;
    I(z), le(z), _e({ source: A, target: z, moved: Q, direction: "down" });
    const ge = Array.from(Y)[0];
    if (ge) {
      const ae = z.findIndex(
        (Ee) => It(Ee, v) === ge
      );
      ae >= 0 && X(ae);
    }
  }, [
    D,
    E,
    v,
    A,
    le,
    _e
  ]), ne = k.size > 0, Ae = E.size > 0, fe = oe(""), Fe = oe(
    null
  ), Ge = oe(""), Je = oe(
    null
  ), At = B(
    (z) => {
      if (A.length === 0) return;
      const Y = ie;
      if (Y.length === 0) return;
      const Q = Y.includes(L) ? L : Y[0] ?? 0;
      let ge = -1;
      if (z.key === "ArrowDown") {
        z.preventDefault();
        const ae = Y.indexOf(Q);
        ge = Y[(ae + 1) % Y.length] ?? Y[0] ?? 0;
      } else if (z.key === "ArrowUp") {
        z.preventDefault();
        const ae = Y.indexOf(Q);
        ge = Y[(ae - 1 + Y.length) % Y.length] ?? Y[0] ?? 0;
      } else if (z.key === "Home")
        z.preventDefault(), ge = Y[0] ?? 0;
      else if (z.key === "End")
        z.preventDefault(), ge = Y[Y.length - 1] ?? 0;
      else if (z.key === "Enter" || z.key === " ") {
        z.preventDefault(), W(Q);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(z.key)) {
        z.preventDefault();
        const ae = (fe.current + z.key).toLowerCase();
        fe.current = ae, Fe.current && clearTimeout(Fe.current), Fe.current = setTimeout(() => {
          fe.current = "";
        }, 500);
        const Ee = [...Y, ...Y], je = Y.indexOf(Q) + 1, Ze = Ee.slice(je).find(
          (Qe) => as(A[Qe]).toLowerCase().startsWith(ae)
        );
        Ze != null && j(Ze);
        return;
      }
      ge >= 0 && j(ge);
    },
    [A, ie, L, W]
  ), lt = B(
    (z) => {
      if (D.length === 0) return;
      const Y = te;
      if (Y.length === 0) return;
      const Q = Y.includes(F) ? F : Y[0] ?? 0;
      let ge = -1;
      if (z.key === "ArrowDown") {
        z.preventDefault();
        const ae = Y.indexOf(Q);
        ge = Y[(ae + 1) % Y.length] ?? Y[0] ?? 0;
      } else if (z.key === "ArrowUp") {
        z.preventDefault();
        const ae = Y.indexOf(Q);
        ge = Y[(ae - 1 + Y.length) % Y.length] ?? Y[0] ?? 0;
      } else if (z.key === "Home")
        z.preventDefault(), ge = Y[0] ?? 0;
      else if (z.key === "End")
        z.preventDefault(), ge = Y[Y.length - 1] ?? 0;
      else if (z.key === "Enter" || z.key === " ") {
        z.preventDefault(), he(Q);
        return;
      } else if (/^[a-zA-Z0-9]$/.test(z.key)) {
        z.preventDefault();
        const ae = (Ge.current + z.key).toLowerCase();
        Ge.current = ae, Je.current && clearTimeout(Je.current), Je.current = setTimeout(() => {
          Ge.current = "";
        }, 500);
        const Ee = [...Y, ...Y], je = Y.indexOf(Q) + 1, Ze = Ee.slice(je).find(
          (Qe) => as(D[Qe]).toLowerCase().startsWith(ae)
        );
        Ze != null && X(Ze);
        return;
      }
      ge >= 0 && X(ge);
    },
    [D, te, F, he]
  ), yt = oe(null), Z = oe(null);
  return /* @__PURE__ */ M(
    "div",
    {
      className: [tt.root, N].filter(Boolean).join(" "),
      "aria-label": $,
      children: [
        /* @__PURE__ */ M("div", { className: tt.panel, children: [
          /* @__PURE__ */ o("div", { className: tt.header, children: "Source" }),
          /* @__PURE__ */ o(
            "div",
            {
              ref: yt,
              role: "listbox",
              "aria-label": "Source",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: tt.listbox,
              onKeyDown: At,
              children: A.length === 0 ? (
                // Disabled option, not static text: a bare placeholder inside
                // role="listbox" fails aria-required-children, while hiding it
                // (aria-hidden) strands AT users without an empty-state hint.
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: tt.empty,
                    role: "option",
                    "aria-selected": !1,
                    "aria-disabled": !0,
                    children: "No items"
                  }
                )
              ) : A.map((z, Y) => {
                const Q = It(z, v), ge = k.has(Q), ae = Y === L, Ee = !!z.disabled;
                return /* @__PURE__ */ o(
                  "div",
                  {
                    role: "option",
                    "aria-selected": ge,
                    "aria-disabled": Ee || void 0,
                    tabIndex: -1,
                    "data-active": ae || void 0,
                    className: [
                      tt.option,
                      ge ? tt.selected : null,
                      ae ? tt.active : null,
                      Ee ? tt.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => W(Y),
                    children: as(z)
                  },
                  Q
                );
              })
            }
          )
        ] }),
        /* @__PURE__ */ M("div", { className: tt.controls, children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: tt.btn,
              "aria-label": "Move selected to target",
              "aria-disabled": !ne || void 0,
              disabled: !ne,
              onClick: ue,
              children: "›"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: tt.btn,
              "aria-label": "Move all to target",
              "aria-disabled": A.filter((z) => !z.disabled).length === 0 || void 0,
              disabled: A.filter((z) => !z.disabled).length === 0,
              onClick: pe,
              children: "»"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: tt.btn,
              "aria-label": "Move all",
              "aria-disabled": A.filter((z) => !z.disabled).length === 0 || void 0,
              disabled: A.filter((z) => !z.disabled).length === 0,
              onClick: pe,
              children: "»"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: tt.btn,
              "aria-label": "Move selected to source",
              "aria-disabled": !Ae || void 0,
              disabled: !Ae,
              onClick: ye,
              children: "‹"
            }
          ),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: tt.btn,
              "aria-label": "Move all to source",
              "aria-disabled": D.filter((z) => !z.disabled).length === 0 || void 0,
              disabled: D.filter((z) => !z.disabled).length === 0,
              onClick: De,
              children: "«"
            }
          )
        ] }),
        /* @__PURE__ */ M("div", { className: tt.panel, children: [
          /* @__PURE__ */ o("div", { className: tt.header, children: "Target" }),
          /* @__PURE__ */ o(
            "div",
            {
              ref: Z,
              role: "listbox",
              "aria-label": "Target",
              "aria-multiselectable": "true",
              tabIndex: 0,
              className: tt.listbox,
              onKeyDown: lt,
              children: D.length === 0 ? (
                // Disabled option, not static text: a bare placeholder inside
                // role="listbox" fails aria-required-children, while hiding it
                // (aria-hidden) strands AT users without an empty-state hint.
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: tt.empty,
                    role: "option",
                    "aria-selected": !1,
                    "aria-disabled": !0,
                    children: "No items"
                  }
                )
              ) : D.map((z, Y) => {
                const Q = It(z, v), ge = E.has(Q), ae = Y === F, Ee = !!z.disabled;
                return /* @__PURE__ */ o(
                  "div",
                  {
                    role: "option",
                    "aria-selected": ge,
                    "aria-disabled": Ee || void 0,
                    tabIndex: -1,
                    "data-active": ae || void 0,
                    className: [
                      tt.option,
                      ge ? tt.selected : null,
                      ae ? tt.active : null,
                      Ee ? tt.disabled : null
                    ].filter(Boolean).join(" "),
                    onClick: () => he(Y),
                    children: as(z)
                  },
                  Q
                );
              })
            }
          ),
          /* @__PURE__ */ M("div", { className: tt.reorder, children: [
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: tt.btn,
                "aria-label": "Move up",
                "aria-disabled": !Ae || void 0,
                disabled: !Ae,
                onClick: G,
                children: /* @__PURE__ */ o(Me, { icon: "keyboard_arrow_up", size: "sm" })
              }
            ),
            /* @__PURE__ */ o(
              "button",
              {
                type: "button",
                className: tt.btn,
                "aria-label": "Move down",
                "aria-disabled": !Ae || void 0,
                disabled: !Ae,
                onClick: $e,
                children: /* @__PURE__ */ o(Me, { icon: "keyboard_arrow_down", size: "sm" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const ik = "_root_1qxsp_1", ck = "_header_1qxsp_8", dk = "_title_1qxsp_15", uk = "_navBtn_1qxsp_20", fk = "_resources_1qxsp_39", _k = "_resource_1qxsp_39", pk = "_grid_1qxsp_50", mk = "_timeCol_1qxsp_55", hk = "_timeCell_1qxsp_61", gk = "_dayCol_1qxsp_66", bk = "_dayHeader_1qxsp_73", yk = "_slot_1qxsp_81", xk = "_event_1qxsp_91", Gt = {
  root: ik,
  header: ck,
  title: dk,
  navBtn: uk,
  resources: fk,
  resource: _k,
  grid: pk,
  timeCol: mk,
  timeCell: hk,
  dayCol: gk,
  dayHeader: bk,
  slot: yk,
  event: xk
};
function nl(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function iS({
  data: e,
  view: t = "week",
  date: n,
  onDateChange: r,
  resources: l,
  onEventClick: a,
  onSlotClick: d,
  ariaLabel: s = "Scheduler",
  className: i
}) {
  const [c, f] = q(
    n ?? /* @__PURE__ */ new Date()
  ), u = n ?? c, h = (g) => {
    n || f(g), r?.(g);
  }, m = t === "day" ? [u] : t === "week" ? Array.from({ length: 7 }, (g, y) => {
    const p = new Date(u);
    return p.setDate(u.getDate() - u.getDay() + y), p;
  }) : Array.from({ length: 30 }, (g, y) => {
    const p = new Date(u);
    return p.setDate(1 + y), p;
  }), b = Array.from({ length: 12 }, (g, y) => 8 + y);
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Gt.root, i].filter(Boolean).join(" "),
      role: "group",
      "aria-label": s,
      children: [
        /* @__PURE__ */ M("div", { className: Gt.header, children: [
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Gt.navBtn,
              "aria-label": "Previous",
              onClick: () => {
                const g = new Date(u);
                g.setDate(g.getDate() - 7), h(g);
              },
              children: "‹"
            }
          ),
          /* @__PURE__ */ o("span", { className: Gt.title, children: u.toLocaleDateString() }),
          /* @__PURE__ */ o(
            "button",
            {
              type: "button",
              className: Gt.navBtn,
              "aria-label": "Next",
              onClick: () => {
                const g = new Date(u);
                g.setDate(g.getDate() + 7), h(g);
              },
              children: "›"
            }
          )
        ] }),
        l && /* @__PURE__ */ o("div", { className: Gt.resources, children: l.map((g) => /* @__PURE__ */ o(
          "div",
          {
            className: Gt.resource,
            role: "presentation",
            "aria-label": g.name,
            children: g.name
          },
          g.id
        )) }),
        /* @__PURE__ */ M("div", { className: Gt.grid, role: "presentation", children: [
          /* @__PURE__ */ o("div", { className: Gt.timeCol, role: "presentation", children: b.map((g) => /* @__PURE__ */ M("div", { className: Gt.timeCell, children: [
            g,
            ":00"
          ] }, g)) }),
          m.map((g) => /* @__PURE__ */ M(
            "div",
            {
              className: Gt.dayCol,
              role: "presentation",
              title: g.toLocaleDateString(),
              onClick: () => d?.({ date: g }),
              tabIndex: 0,
              "aria-label": g.toLocaleDateString(),
              children: [
                /* @__PURE__ */ o("div", { className: Gt.dayHeader, children: g.toLocaleDateString(void 0, {
                  weekday: "short",
                  month: "short",
                  day: "numeric"
                }) }),
                b.map((y) => /* @__PURE__ */ o(
                  "div",
                  {
                    className: Gt.slot,
                    tabIndex: -1,
                    onClick: () => {
                      const p = new Date(g);
                      p.setHours(y), d?.({ date: p });
                    }
                  },
                  y
                )),
                e.filter((y) => y.start.toDateString() === g.toDateString()).map((y) => /* @__PURE__ */ o(
                  "button",
                  {
                    type: "button",
                    className: Gt.event,
                    "aria-label": `${y.title} ${nl(y.start)} - ${nl(y.end)}`,
                    "aria-pressed": !1,
                    onClick: () => a?.({ event: y }),
                    children: y.title
                  },
                  y.id
                ))
              ]
            },
            g.toISOString()
          ))
        ] })
      ]
    }
  );
}
const vk = "_root_dj5ne_1", wk = "_header_dj5ne_8", kk = "_headerCell_dj5ne_15", Nk = "_timeline_dj5ne_21", Ok = "_row_dj5ne_26", Sk = "_taskName_dj5ne_32", $k = "_timelineCell_dj5ne_37", Ek = "_bar_dj5ne_43", Tk = "_progress_dj5ne_56", Ck = "_dep_dj5ne_61", En = {
  root: vk,
  header: wk,
  headerCell: kk,
  timeline: Nk,
  row: Ok,
  taskName: Sk,
  timelineCell: $k,
  bar: Ek,
  progress: Tk,
  dep: Ck
};
function cS({
  tasks: e,
  view: t = "week",
  onTaskClick: n,
  ariaLabel: r = "Gantt",
  className: l
}) {
  const [a, d] = q(null);
  return /* @__PURE__ */ M(
    "div",
    {
      className: [En.root, l].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": r,
      "aria-rowcount": e.length,
      children: [
        /* @__PURE__ */ M("div", { className: En.header, role: "row", children: [
          /* @__PURE__ */ o("div", { className: En.headerCell, role: "columnheader", children: "Task" }),
          /* @__PURE__ */ M("div", { className: En.timeline, role: "columnheader", children: [
            "Timeline (",
            t,
            ")"
          ] })
        ] }),
        e.map((s) => /* @__PURE__ */ M(
          "div",
          {
            className: En.row,
            role: "row",
            "aria-selected": a === s.id,
            children: [
              /* @__PURE__ */ o("div", { className: En.taskName, role: "gridcell", children: s.name }),
              /* @__PURE__ */ M("div", { className: En.timelineCell, role: "gridcell", children: [
                /* @__PURE__ */ o(
                  "div",
                  {
                    className: En.bar,
                    role: "button",
                    "aria-label": `${s.name} ${s.start.toLocaleDateString()} - ${s.end.toLocaleDateString()}${s.progress !== void 0 ? `, ${s.progress}% complete` : ""}`,
                    "aria-pressed": a === s.id,
                    tabIndex: 0,
                    onClick: () => {
                      d(s.id), n?.({ task: s });
                    },
                    onKeyDown: (i) => {
                      (i.key === "Enter" || i.key === " ") && (i.preventDefault(), d(s.id), n?.({ task: s }));
                    },
                    children: /* @__PURE__ */ o(
                      "div",
                      {
                        className: En.progress,
                        style: { width: `${s.progress ?? 0}%` }
                      }
                    )
                  }
                ),
                s.dependencies?.map((i) => /* @__PURE__ */ o("svg", { className: En.dep, "aria-hidden": "true", children: /* @__PURE__ */ o(
                  "line",
                  {
                    x1: "0",
                    y1: "10",
                    x2: "20",
                    y2: "10",
                    stroke: "var(--dx-border-color)"
                  }
                ) }, i))
              ] })
            ]
          },
          s.id
        ))
      ]
    }
  );
}
const Ak = "_root_4b64f_1", Dk = "_fields_4b64f_6", Mk = "_chip_4b64f_13", Ik = "_table_4b64f_35", zk = "_totalRow_4b64f_55", Lk = "_total_4b64f_55", mr = {
  root: Ak,
  fields: Dk,
  chip: Mk,
  table: Ik,
  totalRow: zk,
  total: Lk
}, is = {
  Sum: (e) => e.reduce((t, n) => t + n, 0),
  Average: (e) => e.length ? e.reduce((t, n) => t + n, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function Rr(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function dS({
  data: e,
  rowFields: t = [],
  columnFields: n = [],
  aggregateFields: r = [],
  onFieldsChange: l,
  ariaLabel: a = "Pivot table",
  className: d
}) {
  const s = t, i = n, c = r, f = (y, p, _) => {
    const x = y === "row" ? s.filter(($) => $.property !== p) : s, N = y === "col" ? i.filter(($) => $.property !== p) : i, v = y === "agg" ? c.filter(($) => !($.property === p && $.aggregate === _)) : c;
    l?.({
      rowFields: x,
      columnFields: N,
      aggregateFields: v
    });
  }, u = (y, p) => p.map((_) => String(y[_.property])).join(""), h = [
    ...new Set(s.length ? e.map((y) => u(y, s)) : [""])
  ].sort(), m = [
    ...new Set(i.length ? e.map((y) => u(y, i)) : [""])
  ].sort(), b = (y, p, _) => {
    const x = e.filter(
      (v) => u(v, s) === y && u(v, i) === p
    ), N = x.map((v) => Number(v[_.property])).filter((v) => !Number.isNaN(v));
    return !N.length && _.aggregate !== "Count" ? 0 : is[_.aggregate](
      _.aggregate === "Count" ? x.map(() => 1) : N
    );
  }, g = (y, p, _, x) => /* @__PURE__ */ M(
    "button",
    {
      type: "button",
      className: mr.chip,
      "aria-label": `Remove ${y} field ${_}`,
      onClick: () => f(y, p, x),
      children: [
        _,
        x ? ` (${x})` : ""
      ]
    },
    `${y}-${_}-${x ?? ""}`
  );
  return /* @__PURE__ */ M("div", { className: [mr.root, d].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ M("div", { className: mr.fields, children: [
      s.map((y) => g("row", y.property, y.title ?? y.property)),
      i.map((y) => g("col", y.property, y.title ?? y.property)),
      c.map(
        (y) => g("agg", y.property, y.title ?? y.property, y.aggregate)
      )
    ] }),
    /* @__PURE__ */ M("table", { className: mr.table, role: "grid", "aria-label": a, children: [
      /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ M("tr", { children: [
        /* @__PURE__ */ o("th", { scope: "col", children: s.map((y) => y.title ?? y.property).join(" / ") || "Total" }),
        m.map((y) => /* @__PURE__ */ o("th", { scope: "col", children: y || "—" }, y)),
        /* @__PURE__ */ o("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ M("tbody", { children: [
        h.map((y) => /* @__PURE__ */ M("tr", { children: [
          /* @__PURE__ */ o("th", { scope: "row", children: y || "—" }),
          m.map((p) => /* @__PURE__ */ o(
            "td",
            {
              title: Rr(
                b(
                  y,
                  p,
                  c[0] ?? { property: "", aggregate: "Count" }
                )
              ),
              children: c.length ? Rr(b(y, p, c[0])) : ""
            },
            p
          )),
          /* @__PURE__ */ o("td", { className: mr.total, children: c.length ? Rr(
            is[c[0].aggregate](
              m.flatMap(
                (p) => e.filter(
                  (_) => u(_, s) === y && u(_, i) === p
                ).map((_) => Number(_[c[0].property]))
              ).filter((p) => !Number.isNaN(p))
            )
          ) : "" })
        ] }, y)),
        /* @__PURE__ */ M("tr", { className: mr.totalRow, children: [
          /* @__PURE__ */ o("th", { scope: "row", children: "Total" }),
          m.map((y) => /* @__PURE__ */ o("td", { children: c.length ? Rr(
            is[c[0].aggregate](
              e.filter((p) => u(p, i) === y).map((p) => Number(p[c[0].property])).filter((p) => !Number.isNaN(p))
            )
          ) : "" }, y)),
          /* @__PURE__ */ o("td", { children: c.length ? Rr(
            is[c[0].aggregate](
              e.map((y) => Number(y[c[0].property])).filter((y) => !Number.isNaN(y))
            )
          ) : "" })
        ] })
      ] })
    ] })
  ] });
}
const Rk = "_root_1r7co_1", Pk = "_reverse_1r7co_10", jk = "_item_1r7co_14", Bk = "_marker_1r7co_35", Fk = "_body_1r7co_46", Hk = "_label_1r7co_50", Uk = "_content_1r7co_56", tr = {
  root: Rk,
  reverse: Pk,
  item: jk,
  marker: Bk,
  body: Fk,
  label: Hk,
  content: Uk
};
function uS({
  items: e,
  reverse: t = !1,
  ariaLabel: n = "Timeline",
  className: r
}) {
  const l = t ? [...e].reverse() : e;
  return /* @__PURE__ */ o(
    "ol",
    {
      className: [tr.root, t ? tr.reverse : "", r].filter(Boolean).join(" "),
      role: "list",
      "aria-label": n,
      children: l.map((a, d) => /* @__PURE__ */ M("li", { className: tr.item, children: [
        /* @__PURE__ */ o("span", { className: tr.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ M("div", { className: tr.body, children: [
          /* @__PURE__ */ o("div", { className: tr.label, children: a.label }),
          a.content !== void 0 && /* @__PURE__ */ o("div", { className: tr.content, children: a.content })
        ] })
      ] }, d))
    }
  );
}
const qk = "_root_rm4d8_1", Kk = "_header_rm4d8_13", Wk = "_headCell_rm4d8_22", Gk = "_row_rm4d8_32", Vk = "_cell_rm4d8_37", Pr = {
  root: qk,
  header: Kk,
  headCell: Wk,
  row: Gk,
  cell: Vk
};
function fS({
  count: e,
  rowHeight: t = 40,
  height: n = 320,
  loadData: r,
  columns: l = [],
  ariaLabel: a = "Virtual grid",
  className: d
}) {
  const [s, i] = q(
    /* @__PURE__ */ new Map()
  ), [c, f] = q(0), u = oe(/* @__PURE__ */ new Set()), h = Math.ceil(n / t), m = Math.max(0, Math.floor(c / t) - 3), b = Math.min(e, m + h + 6), g = B(
    (p, _) => {
      let x = !1;
      for (let N = p; N < _; N++)
        !s.has(N) && !u.current.has(N) && (x = !0);
      if (x) {
        for (let N = p; N < _; N++) u.current.add(N);
        r({ skip: p, top: _ }).then((N) => {
          i((v) => {
            const $ = new Map(v);
            return N.forEach((O, T) => $.set(p + T, O)), $;
          });
          for (let v = p; v < _; v++) u.current.delete(v);
        });
      }
    },
    [s, r]
  );
  ve(() => {
    g(m, b);
  }, [m, b]);
  const y = [];
  for (let p = m; p < b; p++) {
    const _ = s.get(p) ?? {};
    y.push(
      /* @__PURE__ */ o(
        "div",
        {
          className: Pr.row,
          role: "row",
          style: { height: t },
          children: l.map((x) => /* @__PURE__ */ o(
            "div",
            {
              role: "gridcell",
              className: Pr.cell,
              style: x.width ? { width: x.width } : void 0,
              children: String(_[x.property] ?? "")
            },
            x.property
          ))
        },
        p
      )
    );
  }
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Pr.root, d].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": a,
      "aria-rowcount": e,
      tabIndex: 0,
      style: { height: n },
      onScroll: (p) => f(p.target.scrollTop),
      onKeyDown: (p) => {
        const _ = p.currentTarget;
        p.key === "ArrowDown" ? (p.preventDefault(), _.scrollTop += t) : p.key === "ArrowUp" ? (p.preventDefault(), _.scrollTop -= t) : p.key === "PageDown" ? (p.preventDefault(), _.scrollTop += n) : p.key === "PageUp" && (p.preventDefault(), _.scrollTop -= n);
      },
      children: [
        /* @__PURE__ */ o("div", { style: { height: m * t }, "aria-hidden": "true" }),
        /* @__PURE__ */ o("div", { className: Pr.header, role: "row", children: l.map((p) => /* @__PURE__ */ o(
          "div",
          {
            role: "columnheader",
            className: Pr.headCell,
            style: {
              height: t,
              ...p.width ? { width: p.width } : {}
            },
            children: p.title ?? p.property
          },
          p.property
        )) }),
        y,
        /* @__PURE__ */ o(
          "div",
          {
            style: { height: Math.max(0, (e - b) * t) },
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
var vn;
((e) => {
  class t {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(s, i, c, f) {
      if (this.version = s, this.errorCorrectionLevel = i, s < t.MIN_VERSION || s > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (f < -1 || f > 7) throw new RangeError("Mask value out of range");
      this.size = s * 4 + 17;
      let u = [];
      for (let m = 0; m < this.size; m++) u.push(!1);
      for (let m = 0; m < this.size; m++)
        this.modules.push(u.slice()), this.isFunction.push(u.slice());
      this.drawFunctionPatterns();
      const h = this.addEccAndInterleave(c);
      if (this.drawCodewords(h), f == -1) {
        let m = 1e9;
        for (let b = 0; b < 8; b++) {
          this.applyMask(b), this.drawFormatBits(b);
          const g = this.getPenaltyScore();
          g < m && (f = b, m = g), this.applyMask(b);
        }
      }
      l(0 <= f && f <= 7), this.mask = f, this.applyMask(f), this.drawFormatBits(f), this.isFunction = [];
    }
    version;
    errorCorrectionLevel;
    /*-- Static factory functions (high level) --*/
    // Returns a QR Code representing the given Unicode text string at the given error correction level.
    // As a conservative upper bound, this function is guaranteed to succeed for strings that have 738 or fewer
    // Unicode code points (not UTF-16 code units) if the low error correction level is used. The smallest possible
    // QR Code version is automatically chosen for the output. The ECC level of the result may be higher than the
    // ecl argument if it can be done without increasing the version.
    static encodeText(s, i) {
      const c = e.QrSegment.makeSegments(s);
      return t.encodeSegments(c, i);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(s, i) {
      const c = e.QrSegment.makeBytes(s);
      return t.encodeSegments([c], i);
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
    static encodeSegments(s, i, c = 1, f = 40, u = -1, h = !0) {
      if (!(t.MIN_VERSION <= c && c <= f && f <= t.MAX_VERSION) || u < -1 || u > 7)
        throw new RangeError("Invalid value");
      let m, b;
      for (m = c; ; m++) {
        const _ = t.getNumDataCodewords(m, i) * 8, x = a.getTotalBits(s, m);
        if (x <= _) {
          b = x;
          break;
        }
        if (m >= f)
          throw new RangeError("Data too long");
      }
      for (const _ of [
        t.Ecc.MEDIUM,
        t.Ecc.QUARTILE,
        t.Ecc.HIGH
      ])
        h && b <= t.getNumDataCodewords(m, _) * 8 && (i = _);
      let g = [];
      for (const _ of s) {
        n(_.mode.modeBits, 4, g), n(_.numChars, _.mode.numCharCountBits(m), g);
        for (const x of _.getData()) g.push(x);
      }
      l(g.length == b);
      const y = t.getNumDataCodewords(m, i) * 8;
      l(g.length <= y), n(0, Math.min(4, y - g.length), g), n(0, (8 - g.length % 8) % 8, g), l(g.length % 8 == 0);
      for (let _ = 236; g.length < y; _ ^= 253)
        n(_, 8, g);
      let p = [];
      for (; p.length * 8 < g.length; ) p.push(0);
      return g.forEach(
        (_, x) => p[x >>> 3] |= _ << 7 - (x & 7)
      ), new t(m, i, p, u);
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
    getModule(s, i) {
      return 0 <= s && s < this.size && 0 <= i && i < this.size && this.modules[i][s];
    }
    /*-- Private helper methods for constructor: Drawing function modules --*/
    // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
      for (let c = 0; c < this.size; c++)
        this.setFunctionModule(6, c, c % 2 == 0), this.setFunctionModule(c, 6, c % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const s = this.getAlignmentPatternPositions(), i = s.length;
      for (let c = 0; c < i; c++)
        for (let f = 0; f < i; f++)
          c == 0 && f == 0 || c == 0 && f == i - 1 || c == i - 1 && f == 0 || this.drawAlignmentPattern(s[c], s[f]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(s) {
      const i = this.errorCorrectionLevel.formatBits << 3 | s;
      let c = i;
      for (let u = 0; u < 10; u++) c = c << 1 ^ (c >>> 9) * 1335;
      const f = (i << 10 | c) ^ 21522;
      l(f >>> 15 == 0);
      for (let u = 0; u <= 5; u++)
        this.setFunctionModule(8, u, r(f, u));
      this.setFunctionModule(8, 7, r(f, 6)), this.setFunctionModule(8, 8, r(f, 7)), this.setFunctionModule(7, 8, r(f, 8));
      for (let u = 9; u < 15; u++)
        this.setFunctionModule(14 - u, 8, r(f, u));
      for (let u = 0; u < 8; u++)
        this.setFunctionModule(this.size - 1 - u, 8, r(f, u));
      for (let u = 8; u < 15; u++)
        this.setFunctionModule(8, this.size - 15 + u, r(f, u));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    // Draws two copies of the version bits (with its own error correction code),
    // based on this object's version field, iff 7 <= version <= 40.
    drawVersion() {
      if (this.version < 7) return;
      let s = this.version;
      for (let c = 0; c < 12; c++) s = s << 1 ^ (s >>> 11) * 7973;
      const i = this.version << 12 | s;
      l(i >>> 18 == 0);
      for (let c = 0; c < 18; c++) {
        const f = r(i, c), u = this.size - 11 + c % 3, h = Math.floor(c / 3);
        this.setFunctionModule(u, h, f), this.setFunctionModule(h, u, f);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(s, i) {
      for (let c = -4; c <= 4; c++)
        for (let f = -4; f <= 4; f++) {
          const u = Math.max(Math.abs(f), Math.abs(c)), h = s + f, m = i + c;
          0 <= h && h < this.size && 0 <= m && m < this.size && this.setFunctionModule(h, m, u != 2 && u != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(s, i) {
      for (let c = -2; c <= 2; c++)
        for (let f = -2; f <= 2; f++)
          this.setFunctionModule(
            s + f,
            i + c,
            Math.max(Math.abs(f), Math.abs(c)) != 1
          );
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(s, i, c) {
      this.modules[i][s] = c, this.isFunction[i][s] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(s) {
      const i = this.version, c = this.errorCorrectionLevel;
      if (s.length != t.getNumDataCodewords(i, c))
        throw new RangeError("Invalid argument");
      const f = t.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][i], u = t.ECC_CODEWORDS_PER_BLOCK[c.ordinal][i], h = Math.floor(
        t.getNumRawDataModules(i) / 8
      ), m = f - h % f, b = Math.floor(h / f);
      let g = [];
      const y = t.reedSolomonComputeDivisor(u);
      for (let _ = 0, x = 0; _ < f; _++) {
        let N = s.slice(
          x,
          x + b - u + (_ < m ? 0 : 1)
        );
        x += N.length;
        const v = t.reedSolomonComputeRemainder(N, y);
        _ < m && N.push(0), g.push(N.concat(v));
      }
      let p = [];
      for (let _ = 0; _ < g[0].length; _++)
        g.forEach((x, N) => {
          (_ != b - u || N >= m) && p.push(x[_]);
        });
      return l(p.length == h), p;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(s) {
      if (s.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let i = 0;
      for (let c = this.size - 1; c >= 1; c -= 2) {
        c == 6 && (c = 5);
        for (let f = 0; f < this.size; f++)
          for (let u = 0; u < 2; u++) {
            const h = c - u, b = (c + 1 & 2) == 0 ? this.size - 1 - f : f;
            !this.isFunction[b][h] && i < s.length * 8 && (this.modules[b][h] = r(s[i >>> 3], 7 - (i & 7)), i++);
          }
      }
      l(i == s.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(s) {
      if (s < 0 || s > 7) throw new RangeError("Mask value out of range");
      for (let i = 0; i < this.size; i++)
        for (let c = 0; c < this.size; c++) {
          let f;
          switch (s) {
            case 0:
              f = (c + i) % 2 == 0;
              break;
            case 1:
              f = i % 2 == 0;
              break;
            case 2:
              f = c % 3 == 0;
              break;
            case 3:
              f = (c + i) % 3 == 0;
              break;
            case 4:
              f = (Math.floor(c / 3) + Math.floor(i / 2)) % 2 == 0;
              break;
            case 5:
              f = c * i % 2 + c * i % 3 == 0;
              break;
            case 6:
              f = (c * i % 2 + c * i % 3) % 2 == 0;
              break;
            case 7:
              f = ((c + i) % 2 + c * i % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[i][c] && f && (this.modules[i][c] = !this.modules[i][c]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let s = 0;
      for (let u = 0; u < this.size; u++) {
        let h = !1, m = 0, b = [0, 0, 0, 0, 0, 0, 0];
        for (let g = 0; g < this.size; g++)
          this.modules[u][g] == h ? (m++, m == 5 ? s += t.PENALTY_N1 : m > 5 && s++) : (this.finderPenaltyAddHistory(m, b), h || (s += this.finderPenaltyCountPatterns(b) * t.PENALTY_N3), h = this.modules[u][g], m = 1);
        s += this.finderPenaltyTerminateAndCount(h, m, b) * t.PENALTY_N3;
      }
      for (let u = 0; u < this.size; u++) {
        let h = !1, m = 0, b = [0, 0, 0, 0, 0, 0, 0];
        for (let g = 0; g < this.size; g++)
          this.modules[g][u] == h ? (m++, m == 5 ? s += t.PENALTY_N1 : m > 5 && s++) : (this.finderPenaltyAddHistory(m, b), h || (s += this.finderPenaltyCountPatterns(b) * t.PENALTY_N3), h = this.modules[g][u], m = 1);
        s += this.finderPenaltyTerminateAndCount(h, m, b) * t.PENALTY_N3;
      }
      for (let u = 0; u < this.size - 1; u++)
        for (let h = 0; h < this.size - 1; h++) {
          const m = this.modules[u][h];
          m == this.modules[u][h + 1] && m == this.modules[u + 1][h] && m == this.modules[u + 1][h + 1] && (s += t.PENALTY_N2);
        }
      let i = 0;
      for (const u of this.modules)
        i = u.reduce((h, m) => h + (m ? 1 : 0), i);
      const c = this.size * this.size, f = Math.ceil(Math.abs(i * 20 - c * 10) / c) - 1;
      return l(0 <= f && f <= 9), s += f * t.PENALTY_N4, l(0 <= s && s <= 2568888), s;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1) return [];
      {
        const s = Math.floor(this.version / 7) + 2, i = Math.floor(
          (this.version * 8 + s * 3 + 5) / (s * 4 - 4)
        ) * 2;
        let c = [6];
        for (let f = this.size - 7; c.length < s; f -= i)
          c.splice(1, 0, f);
        return c;
      }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(s) {
      if (s < t.MIN_VERSION || s > t.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let i = (16 * s + 128) * s + 64;
      if (s >= 2) {
        const c = Math.floor(s / 7) + 2;
        i -= (25 * c - 10) * c - 55, s >= 7 && (i -= 36);
      }
      return l(208 <= i && i <= 29648), i;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(s, i) {
      return Math.floor(t.getNumRawDataModules(s) / 8) - t.ECC_CODEWORDS_PER_BLOCK[i.ordinal][s] * t.NUM_ERROR_CORRECTION_BLOCKS[i.ordinal][s];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(s) {
      if (s < 1 || s > 255)
        throw new RangeError("Degree out of range");
      let i = [];
      for (let f = 0; f < s - 1; f++) i.push(0);
      i.push(1);
      let c = 1;
      for (let f = 0; f < s; f++) {
        for (let u = 0; u < i.length; u++)
          i[u] = t.reedSolomonMultiply(i[u], c), u + 1 < i.length && (i[u] ^= i[u + 1]);
        c = t.reedSolomonMultiply(c, 2);
      }
      return i;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(s, i) {
      let c = i.map((f) => 0);
      for (const f of s) {
        const u = f ^ c.shift();
        c.push(0), i.forEach(
          (h, m) => c[m] ^= t.reedSolomonMultiply(h, u)
        );
      }
      return c;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(s, i) {
      if (s >>> 8 || i >>> 8)
        throw new RangeError("Byte out of range");
      let c = 0;
      for (let f = 7; f >= 0; f--)
        c = c << 1 ^ (c >>> 7) * 285, c ^= (i >>> f & 1) * s;
      return l(c >>> 8 == 0), c;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(s) {
      const i = s[1];
      l(i <= this.size * 3);
      const c = i > 0 && s[2] == i && s[3] == i * 3 && s[4] == i && s[5] == i;
      return (c && s[0] >= i * 4 && s[6] >= i ? 1 : 0) + (c && s[6] >= i * 4 && s[0] >= i ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(s, i, c) {
      return s && (this.finderPenaltyAddHistory(i, c), i = 0), i += this.size, this.finderPenaltyAddHistory(i, c), this.finderPenaltyCountPatterns(c);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(s, i) {
      i[0] == 0 && (s += this.size), i.pop(), i.unshift(s);
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
  function n(d, s, i) {
    if (s < 0 || s > 31 || d >>> s)
      throw new RangeError("Value out of range");
    for (let c = s - 1; c >= 0; c--)
      i.push(d >>> c & 1);
  }
  function r(d, s) {
    return (d >>> s & 1) != 0;
  }
  function l(d) {
    if (!d) throw new Error("Assertion error");
  }
  class a {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(s, i, c) {
      if (this.mode = s, this.numChars = i, this.bitData = c, i < 0) throw new RangeError("Invalid argument");
      this.bitData = c.slice();
    }
    mode;
    numChars;
    bitData;
    /*-- Static factory functions (mid level) --*/
    // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(s) {
      let i = [];
      for (const c of s) n(c, 8, i);
      return new a(a.Mode.BYTE, s.length, i);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(s) {
      if (!a.isNumeric(s))
        throw new RangeError("String contains non-numeric characters");
      let i = [];
      for (let c = 0; c < s.length; ) {
        const f = Math.min(s.length - c, 3);
        n(parseInt(s.substring(c, c + f), 10), f * 3 + 1, i), c += f;
      }
      return new a(a.Mode.NUMERIC, s.length, i);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(s) {
      if (!a.isAlphanumeric(s))
        throw new RangeError(
          "String contains unencodable characters in alphanumeric mode"
        );
      let i = [], c;
      for (c = 0; c + 2 <= s.length; c += 2) {
        let f = a.ALPHANUMERIC_CHARSET.indexOf(s.charAt(c)) * 45;
        f += a.ALPHANUMERIC_CHARSET.indexOf(s.charAt(c + 1)), n(f, 11, i);
      }
      return c < s.length && n(
        a.ALPHANUMERIC_CHARSET.indexOf(s.charAt(c)),
        6,
        i
      ), new a(a.Mode.ALPHANUMERIC, s.length, i);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(s) {
      return s == "" ? [] : a.isNumeric(s) ? [a.makeNumeric(s)] : a.isAlphanumeric(s) ? [a.makeAlphanumeric(s)] : [a.makeBytes(a.toUtf8ByteArray(s))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(s) {
      let i = [];
      if (s < 0)
        throw new RangeError("ECI assignment value out of range");
      if (s < 128) n(s, 8, i);
      else if (s < 16384)
        n(2, 2, i), n(s, 14, i);
      else if (s < 1e6)
        n(6, 3, i), n(s, 21, i);
      else throw new RangeError("ECI assignment value out of range");
      return new a(a.Mode.ECI, 0, i);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(s) {
      return a.NUMERIC_REGEX.test(s);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(s) {
      return a.ALPHANUMERIC_REGEX.test(s);
    }
    /*-- Methods --*/
    // Returns a new copy of the data bits of this segment.
    getData() {
      return this.bitData.slice();
    }
    // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
    // the given version. The result is infinity if a segment has too many characters to fit its length field.
    static getTotalBits(s, i) {
      let c = 0;
      for (const f of s) {
        const u = f.mode.numCharCountBits(i);
        if (f.numChars >= 1 << u) return 1 / 0;
        c += 4 + u + f.bitData.length;
      }
      return c;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(s) {
      s = encodeURI(s);
      let i = [];
      for (let c = 0; c < s.length; c++)
        s.charAt(c) != "%" ? i.push(s.charCodeAt(c)) : (i.push(parseInt(s.substring(c + 1, c + 3), 16)), c += 2);
      return i;
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
  e.QrSegment = a;
})(vn || (vn = {}));
((e) => {
  ((t) => {
    class n {
      // The QR Code can tolerate about 30% erroneous codewords
      /*-- Constructor and fields --*/
      constructor(l, a) {
        this.ordinal = l, this.formatBits = a;
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
})(vn || (vn = {}));
((e) => {
  ((t) => {
    class n {
      /*-- Constructor and fields --*/
      constructor(l, a) {
        this.modeBits = l, this.numBitsCharCount = a;
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
      numCharCountBits(l) {
        return this.numBitsCharCount[Math.floor((l + 7) / 17)];
      }
    }
    t.Mode = n;
  })(e.QrSegment || (e.QrSegment = {}));
})(vn || (vn = {}));
const Yk = "_root_1leml_1", Xk = {
  root: Yk
}, Zk = {
  low: vn.QrCode.Ecc.LOW,
  medium: vn.QrCode.Ecc.MEDIUM,
  quartile: vn.QrCode.Ecc.QUARTILE,
  high: vn.QrCode.Ecc.HIGH
};
function _S({
  value: e,
  size: t = 128,
  render: n = "svg",
  errorCorrection: r = "medium",
  margin: l = 4,
  ariaLabel: a,
  className: d,
  onError: s
}) {
  const i = a ?? `QR code for ${e}`, c = oe(null), f = Zs("(prefers-color-scheme: dark)"), [u, h] = q(null);
  ve(() => {
    const N = document.documentElement;
    h(N.dataset.theme ?? null);
    const v = new MutationObserver(() => {
      h(N.dataset.theme ?? null);
    });
    return v.observe(N, {
      attributes: !0,
      attributeFilter: ["data-theme"]
    }), () => v.disconnect();
  }, []);
  const m = Se(() => {
    try {
      return vn.QrCode.encodeText(e, Zk[r]);
    } catch {
      return null;
    }
  }, [e, r]), b = oe(null);
  ve(() => {
    if (m !== null) {
      b.current = null;
      return;
    }
    const N = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error(N), (b.current?.value !== e || b.current?.onError !== s) && (b.current = { value: e, onError: s }, s?.(N));
  }, [m, e, s]);
  const g = Math.max(0, Math.floor(l)), y = [Xk.root, d].filter(Boolean).join(" ");
  if (ve(() => {
    if (n !== "canvas" || m === null) return;
    const N = c.current, v = N?.getContext("2d");
    if (!N || !v) return;
    const $ = getComputedStyle(N), O = $.getPropertyValue("--dx-text-color").trim() || "#000", T = $.getPropertyValue("--dx-surface-color").trim() || "#fff";
    Jk(v, m, t, g, O, T);
  }, [n, m, t, g, f, u]), m === null)
    return /* @__PURE__ */ o("div", { className: y, role: "img", "aria-label": i, "data-qr-error": "true" });
  const p = m.size + g * 2, _ = t / p;
  if (n === "canvas")
    return /* @__PURE__ */ o(
      "canvas",
      {
        ref: c,
        className: y,
        width: t,
        height: t,
        role: "img",
        "aria-label": i,
        "data-value": e
      }
    );
  const x = [];
  for (let N = 0; N < m.size; N++)
    for (let v = 0; v < m.size; v++)
      m.getModule(v, N) && x.push(
        /* @__PURE__ */ o(
          "rect",
          {
            x: (v + g) * _,
            y: (N + g) * _,
            width: _ + 0.5,
            height: _ + 0.5
          },
          `${v}-${N}`
        )
      );
  return /* @__PURE__ */ M(
    "svg",
    {
      className: y,
      width: t,
      height: t,
      viewBox: `0 0 ${t} ${t}`,
      role: "img",
      "aria-label": i,
      "data-value": e,
      children: [
        /* @__PURE__ */ o("rect", { width: t, height: t, fill: "var(--dx-surface-color)" }),
        /* @__PURE__ */ o("g", { fill: "var(--dx-text-color)", children: x })
      ]
    }
  );
}
function Jk(e, t, n, r, l, a) {
  const d = n / (t.size + r * 2);
  e.fillStyle = a, e.fillRect(0, 0, n, n), e.fillStyle = l;
  for (let s = 0; s < t.size; s++)
    for (let i = 0; i < t.size; i++)
      t.getModule(i, s) && e.fillRect((i + r) * d, (s + r) * d, d + 0.5, d + 0.5);
}
const Qk = "_root_1v9la_1", eN = "_value_1v9la_9", rl = {
  root: Qk,
  value: eN
}, sl = [
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
], ol = 104, tN = 106;
function nN(e) {
  const t = [ol];
  for (let r = 0; r < e.length; r++) {
    const l = e.charCodeAt(r);
    t.push(l >= 32 && l <= 126 ? l - 32 : 0);
  }
  let n = ol;
  for (let r = 1; r < t.length; r++) n += r * t[r];
  return t.push(n % 103, tN), t;
}
function pS({
  value: e,
  format: t = "Code128",
  height: n = 60,
  showValue: r = !1,
  ariaLabel: l,
  className: a
}) {
  const d = l ?? `Barcode ${e}`, s = Se(() => {
    const i = [];
    let c = 0;
    for (const f of nN(e)) {
      const u = sl[f] ?? sl[0];
      for (let h = 0; h < u.length; h++) {
        const m = Number(u[h]);
        h % 2 === 0 && i.push({ x: c, w: m }), c += m;
      }
    }
    return { modules: i, total: c };
  }, [e]);
  return /* @__PURE__ */ M("span", { className: [rl.root, a].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ M(
      "svg",
      {
        width: "100%",
        height: n,
        viewBox: `0 0 ${s.total} ${n}`,
        preserveAspectRatio: "none",
        role: "img",
        "aria-label": d,
        "data-value": e,
        children: [
          /* @__PURE__ */ o(
            "rect",
            {
              width: s.total,
              height: n,
              fill: "var(--dx-surface-color)"
            }
          ),
          s.modules.map((i, c) => /* @__PURE__ */ o(
            "rect",
            {
              x: i.x,
              y: 0,
              width: i.w,
              height: n,
              fill: "var(--dx-text-color)"
            },
            c
          ))
        ]
      }
    ),
    r && /* @__PURE__ */ o("span", { className: rl.value, children: e })
  ] });
}
const rN = "_root_16i43_1", sN = "_svg_16i43_10", oN = "_gridline_16i43_15", lN = "_tickLabel_16i43_21", aN = "_axisTitle_16i43_27", iN = "_dataLabel_16i43_34", cN = "_gaugeValue_16i43_40", dN = "_legend_16i43_47", uN = "_legendItem_16i43_55", fN = "_swatch_16i43_63", _N = "_tooltip_16i43_70", pN = "_visuallyHidden_16i43_84", ft = {
  root: rN,
  svg: sN,
  gridline: oN,
  tickLabel: lN,
  axisTitle: aN,
  dataLabel: iN,
  gaugeValue: cN,
  legend: dN,
  legendItem: uN,
  swatch: fN,
  tooltip: _N,
  visuallyHidden: pN
}, ll = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
], zl = /* @__PURE__ */ new Set([
  "line",
  "area",
  "bar",
  "column",
  "scatter",
  "bubble"
]), mN = /* @__PURE__ */ new Set([...zl, "heatmap"]);
function hN(e, t, n) {
  const r = t - e || 1, l = n ?? Math.pow(10, Math.floor(Math.log10(r / 4))), a = Math.floor(e / l) * l, d = Math.ceil(t / l) * l, s = [];
  for (let i = a; i <= d + 1e-9; i += l)
    s.push(Number(i.toFixed(6)));
  return { min: a, max: d, step: l, ticks: s };
}
function gN(e) {
  return e.data.map((t) => ({
    cat: String(t[e.categoryProperty] ?? ""),
    val: Number(t[e.valueProperty]),
    size: e.sizeProperty ? Number(t[e.sizeProperty]) : void 0,
    item: t
  }));
}
function Vn(e, t, n) {
  return /* @__PURE__ */ M(
    "g",
    {
      "data-chart-type": t.type,
      role: "list",
      "aria-label": t.title ?? `Series ${e + 1}`,
      children: [
        /* @__PURE__ */ o("title", { children: t.title ?? `Series ${e + 1}` }),
        n
      ]
    },
    e
  );
}
const Ut = (e) => e * Math.PI / 180;
function bN(e, t, n, r, l) {
  const { pad: a, plotW: d, plotH: s } = e, i = a.l + d / 2, c = a.t + s / 2, f = Math.min(d, s) / 3, u = t.type === "donut" ? t.innerRadius ?? f * 0.5 : 0, h = r.reduce((b, g) => b + (Number(g.val) || 0), 0);
  let m = -90;
  return Vn(
    n,
    t,
    r.map((b, g) => {
      const y = h ? b.val / h * 360 : 0, p = m, _ = m + y;
      m = _;
      const x = y > 180 ? 1 : 0, N = i + f * Math.cos(Ut(p)), v = c + f * Math.sin(Ut(p)), $ = i + f * Math.cos(Ut(_)), O = c + f * Math.sin(Ut(_)), T = i + u * Math.cos(Ut(_)), A = c + u * Math.sin(Ut(_)), C = i + u * Math.cos(Ut(p)), D = c + u * Math.sin(Ut(p)), I = u ? `M ${N} ${v} A ${f} ${f} 0 ${x} 1 ${$} ${O} L ${T} ${A} A ${u} ${u} 0 ${x} 0 ${C} ${D} Z` : `M ${i} ${c} L ${N} ${v} A ${f} ${f} 0 ${x} 1 ${$} ${O} Z`, k = (p + _) / 2, S = i + (f + 12) * Math.cos(Ut(k)), E = c + (f + 12) * Math.sin(Ut(k));
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: I,
            fill: l,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => e.tooltipVisible && e.showTip(S, E, `${t.title ?? b.cat}: ${b.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, b.cat, b.val, b.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ o(
          "text",
          {
            x: S,
            y: E,
            textAnchor: "middle",
            className: ft.dataLabel,
            children: b.val
          }
        )
      ] }, g);
    })
  );
}
function yN(e, t, n, r, l) {
  const { pad: a, plotW: d, scale: s, xFor: i, yFor: c, categories: f } = e, u = new Map(f.map((h, m) => [h, m]));
  return Vn(
    n,
    t,
    r.map((h, m) => {
      const b = u.get(h.cat) ?? 0, g = Number(r[m].cat), y = Number.isNaN(g) ? i(b) : a.l + (g - s.min) / (s.max - s.min || 1) * d, p = c(h.val), _ = t.type === "bubble" && h.size !== void 0 ? Math.max(4, Math.min(12, h.size / 10)) : 4;
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "circle",
          {
            cx: y,
            cy: p,
            r: _,
            fill: l,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ o(
          "circle",
          {
            cx: y,
            cy: p,
            r: 12,
            fill: "transparent",
            onMouseEnter: () => e.tooltipVisible && e.showTip(y, p, `${t.title ?? h.cat}: ${h.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, h.cat, h.val, h.item),
            style: { cursor: "pointer" }
          }
        )
      ] }, m);
    })
  );
}
function xN(e, t, n, r, l) {
  const { scale: a, xFor: d, yFor: s, categories: i, series: c } = e, f = new Map(i.map((b, g) => [b, g])), u = (b) => {
    if (!t.stack) return a.min;
    let g = 0;
    for (let y = 0; y < n; y++) {
      const p = c[y];
      if (p?.stack !== t.stack) continue;
      const _ = p.data.find(
        (x) => String(x[p.categoryProperty] ?? "") === b
      );
      _ && (g += Number(_[p.valueProperty]) || 0);
    }
    return g;
  }, h = r.map((b) => {
    const g = f.get(b.cat) ?? 0, y = u(b.cat);
    return `${g === 0 ? "M" : "L"} ${d(g)} ${s(y + b.val)}`;
  }).join(" "), m = r.map((b) => {
    const g = f.get(b.cat) ?? 0, y = u(b.cat);
    return `${g === 0 ? "M" : "L"} ${d(g)} ${s(y)}`;
  }).join(" ");
  return Vn(
    n,
    t,
    /* @__PURE__ */ M(pt, { children: [
      t.type === "area" && /* @__PURE__ */ o(
        "path",
        {
          d: `${h} L ${d(r.length - 1)} ${s(u(r[r.length - 1].cat))} L ${d(0)} ${s(u(r[0].cat))} Z`,
          fill: l,
          fillOpacity: 0.25,
          stroke: "none"
        }
      ),
      /* @__PURE__ */ o("path", { d: h, fill: "none", stroke: l, strokeWidth: 2 }),
      t.stack && /* @__PURE__ */ o("path", { d: m, fill: "none", stroke: "transparent" }),
      r.map((b, g) => {
        const y = f.get(b.cat) ?? 0, p = u(b.cat), _ = d(y), x = s(p + b.val);
        return /* @__PURE__ */ M("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "circle",
            {
              cx: _,
              cy: x,
              r: 4,
              fill: l,
              stroke: "var(--dx-surface-color)",
              strokeWidth: 1.5
            }
          ),
          /* @__PURE__ */ o(
            "rect",
            {
              x: _ - 12,
              y: x - 12,
              width: 24,
              height: 24,
              fill: "transparent",
              onMouseEnter: () => e.tooltipVisible && e.showTip(_, x, `${t.title ?? b.cat}: ${b.val}`),
              onMouseLeave: () => e.hideTip(),
              onClick: () => e.handleClick(t, b.cat, b.val, b.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ o(
            "text",
            {
              x: _,
              y: x - 8,
              textAnchor: "middle",
              className: ft.dataLabel,
              children: b.val
            }
          )
        ] }, g);
      })
    ] })
  );
}
function vN(e, t, n, r, l) {
  const { pad: a, plotW: d, plotH: s, scale: i, xFor: c, yFor: f, categories: u, series: h } = e, m = new Map(u.map((g, y) => [g, y])), b = t.type === "bar";
  return Vn(
    n,
    t,
    r.map((g, y) => {
      const p = m.get(g.cat) ?? 0;
      let _ = 0;
      if (t.stack)
        for (let k = 0; k < n; k++) {
          const S = h[k];
          if (S?.stack !== t.stack) continue;
          const E = S.data.find(
            (P) => String(P[S.categoryProperty] ?? "") === g.cat
          );
          E && (_ += Number(E[S.valueProperty]) || 0);
        }
      const x = _ + g.val, N = h.filter(
        (k) => !k.stack || k.stack === t.stack
      ).length, v = d / Math.max(1, u.length), $ = b ? 18 : Math.max(12, v / (t.stack ? 1 : h.length) - 4), O = b ? a.l + _ / (i.max - i.min || 1) * d : c(p) - $ / 2 + (t.stack ? 0 : n % N * $), T = b ? a.t + p * s / Math.max(1, u.length) + 4 : f(x), A = b ? g.val / (i.max - i.min || 1) * d : $ - 4, C = b ? 16 : f(_) - f(x), D = b ? a.l + _ / (i.max - i.min || 1) * d : O, I = b ? a.t + p * s / Math.max(1, u.length) + 4 : T;
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "rect",
          {
            x: D,
            y: I,
            width: b ? A : $ - 4,
            height: C,
            fill: l,
            rx: 2,
            onMouseEnter: () => e.tooltipVisible && e.showTip(
              D + (b ? A : $) / 2,
              I,
              `${t.title ?? g.cat}: ${g.val}`
            ),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, g.cat, g.val, g.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ o(
          "text",
          {
            x: D + (b ? A : $) / 2,
            y: I - 4,
            textAnchor: "middle",
            className: ft.dataLabel,
            children: g.val
          }
        )
      ] }, y);
    })
  );
}
function wN(e, t, n, r, l) {
  const { pad: a, plotW: d, plotH: s, scale: i, tooltipVisible: c, showTip: f, hideTip: u } = e, h = a.l + d / 2, m = a.t + s * 0.78, b = Math.min(d, s) * 0.36, g = 135, y = 270, p = r.reduce(($, O) => $ + (Number(O.val) || 0), 0), _ = i.max - i.min || 1, x = Math.min(1, Math.max(0, (p - i.min) / _)), N = ($, O) => {
    const [T, A] = [
      h + b * Math.cos(Ut($)),
      m + b * Math.sin(Ut($))
    ], [C, D] = [
      h + b * Math.cos(Ut(O)),
      m + b * Math.sin(Ut(O))
    ], I = O - $ > 180 ? 1 : 0;
    return `M ${T} ${A} A ${b} ${b} 0 ${I} 1 ${C} ${D}`;
  }, v = Number(p.toFixed(2));
  return Vn(
    n,
    t,
    // One listitem per series value (parity with the point renderers):
    // the series <g role="list"> requires owned listitem children or
    // aria-required-children fails.
    /* @__PURE__ */ M("g", { role: "listitem", children: [
      /* @__PURE__ */ o(
        "path",
        {
          d: N(g, g + y),
          fill: "none",
          stroke: "var(--dx-border-color)",
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      x > 0 && /* @__PURE__ */ o(
        "path",
        {
          d: N(g, g + y * x),
          fill: "none",
          stroke: l,
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ o("text", { x: h, y: m - 4, textAnchor: "middle", className: ft.gaugeValue, children: v }),
      /* @__PURE__ */ o(
        "path",
        {
          d: N(g, g + y),
          fill: "none",
          stroke: "transparent",
          strokeWidth: 22,
          onMouseEnter: () => c && f(h, m - b, `${t.title ?? "Value"}: ${v}`),
          onMouseLeave: () => u(),
          onClick: () => e.handleClick(t, r[0]?.cat ?? "", p, r[0]?.item ?? {}),
          style: { cursor: "pointer" }
        }
      ),
      t.labels?.visible && /* @__PURE__ */ o(
        "text",
        {
          x: h,
          y: m + b + 18,
          textAnchor: "middle",
          className: ft.dataLabel,
          children: t.title ?? ""
        }
      )
    ] })
  );
}
function Ll(e) {
  const { pad: t, plotW: n, plotH: r, categories: l } = e, a = t.l + n / 2, d = t.t + r / 2, s = Math.min(n, r) / 2 - 24, i = Math.max(3, l.length), c = (u) => Ut(-90 + 360 * u / i);
  return { cx: a, cy: d, radius: s, angleFor: c, vertexFor: (u, h) => {
    const m = c(u);
    return [
      a + s * h * Math.cos(m),
      d + s * h * Math.sin(m)
    ];
  } };
}
function kN(e) {
  const { categories: t } = e, { cx: n, cy: r, vertexFor: l } = Ll(e);
  return /* @__PURE__ */ M("g", { "data-chart-type": "radar-grid", "aria-hidden": "true", children: [
    [0.25, 0.5, 0.75, 1].map((d) => /* @__PURE__ */ o(
      "polygon",
      {
        points: t.map((s, i) => l(i, d).join(",")).join(" "),
        fill: "none",
        stroke: "var(--dx-border-color)",
        strokeWidth: 1
      },
      d
    )),
    t.map((d, s) => {
      const [i, c] = l(s, 1);
      return /* @__PURE__ */ o(
        "line",
        {
          x1: n,
          y1: r,
          x2: i,
          y2: c,
          stroke: "var(--dx-border-color)",
          strokeWidth: 1
        },
        d
      );
    })
  ] });
}
function NN(e, t, n, r, l) {
  const { categories: a, tooltipVisible: d, showTip: s, hideTip: i } = e, { cx: c, cy: f, radius: u, angleFor: h, vertexFor: m } = Ll(e), b = e.scale.max || 1, g = (p) => r.find((_) => _.cat === p)?.val ?? 0, y = a.map((p, _) => {
    const x = Math.min(1, Math.max(0, g(p) / b)), [N, v] = m(_, x);
    return `${N},${v}`;
  }).join(" ");
  return Vn(
    n,
    t,
    /* @__PURE__ */ M(pt, { children: [
      /* @__PURE__ */ o(
        "polygon",
        {
          points: y,
          fill: l,
          fillOpacity: 0.25,
          stroke: l,
          strokeWidth: 2
        }
      ),
      a.map((p, _) => {
        const x = Math.min(1, Math.max(0, g(p) / b)), [N, v] = m(_, x), [$, O] = m(_, 1);
        return /* @__PURE__ */ M("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "circle",
            {
              cx: N,
              cy: v,
              r: 3.5,
              fill: l,
              stroke: "var(--dx-surface-color)",
              strokeWidth: 1
            }
          ),
          /* @__PURE__ */ o(
            "circle",
            {
              cx: N,
              cy: v,
              r: 12,
              fill: "transparent",
              onMouseEnter: () => d && s($, O, `${t.title ?? p}: ${g(p)}`),
              onMouseLeave: () => i(),
              onClick: () => {
                const T = r.find((A) => A.cat === p);
                T && e.handleClick(t, T.cat, T.val, T.item);
              },
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ o(
            "text",
            {
              x: c + (u + 14) * Math.cos(h(_)),
              y: f + (u + 14) * Math.sin(h(_)) + 4,
              textAnchor: "middle",
              className: ft.tickLabel,
              children: p
            }
          )
        ] }, p);
      })
    ] })
  );
}
function ON(e, t, n, r, l) {
  const { pad: a, plotW: d, plotH: s, tooltipVisible: i, showTip: c, hideTip: f } = e, u = r, h = Math.max(1, ...u.map((g) => Number(g.val) || 0)), m = s / Math.max(1, u.length), b = a.l + d / 2;
  return Vn(
    n,
    t,
    u.map((g, y) => {
      const _ = Math.max(0, Number(g.val) || 0) / h * d, x = u[y + 1], N = x ? Math.max(0, Number(x.val) || 0) / h * d : _ * 0.7, v = a.t + y * m + 2, $ = Math.max(4, m - 6), O = 1 - y * (0.45 / Math.max(1, u.length));
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ o(
          "path",
          {
            d: `M ${b - _ / 2} ${v} L ${b + _ / 2} ${v} L ${b + N / 2} ${v + $} L ${b - N / 2} ${v + $} Z`,
            fill: l,
            fillOpacity: O,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => i && c(b, v, `${t.title ?? g.cat}: ${g.val}`),
            onMouseLeave: () => f(),
            onClick: () => e.handleClick(t, g.cat, g.val, g.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ M(
          "text",
          {
            x: b,
            y: v + $ / 2 + 4,
            textAnchor: "middle",
            className: ft.dataLabel,
            children: [
              g.cat,
              " · ",
              g.val
            ]
          }
        )
      ] }, y);
    })
  );
}
function SN(e, t, n, r, l) {
  const { pad: a, plotW: d, plotH: s, categories: i, tooltipVisible: c, showTip: f, hideTip: u } = e, h = [];
  t.data.forEach((x) => {
    const N = t.rowProperty ? String(x[t.rowProperty] ?? "") : "All";
    h.includes(N) || h.push(N);
  });
  const m = r.map((x) => x.val).filter((x) => Number.isFinite(x)), b = m.length ? Math.min(...m) : 0, g = m.length ? Math.max(...m) : 1, y = d / Math.max(1, i.length), p = s / Math.max(1, h.length), _ = (x) => g === b ? 0.6 : 0.15 + 0.85 * ((x - b) / (g - b));
  return Vn(
    n,
    t,
    /* @__PURE__ */ M(pt, { children: [
      h.map((x, N) => /* @__PURE__ */ o(
        "text",
        {
          x: a.l - 8,
          y: a.t + N * p + p / 2 + 4,
          textAnchor: "end",
          className: ft.tickLabel,
          children: x
        },
        x
      )),
      r.map((x, N) => {
        const v = t.data[N], $ = i.indexOf(x.cat), O = h.indexOf(
          t.rowProperty && v ? String(v[t.rowProperty] ?? "") : "All"
        );
        if ($ < 0 || O < 0) return null;
        const T = a.l + $ * y, A = a.t + O * p;
        return /* @__PURE__ */ M("g", { role: "listitem", children: [
          /* @__PURE__ */ o(
            "rect",
            {
              x: T + 1,
              y: A + 1,
              width: Math.max(1, y - 2),
              height: Math.max(1, p - 2),
              fill: l,
              fillOpacity: _(x.val),
              onMouseEnter: () => c && f(T + y / 2, A, `${t.title ?? x.cat}: ${x.val}`),
              onMouseLeave: () => u(),
              onClick: () => e.handleClick(t, x.cat, x.val, x.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ o(
            "text",
            {
              x: T + y / 2,
              y: A + p / 2 + 4,
              textAnchor: "middle",
              className: ft.dataLabel,
              children: x.val
            }
          )
        ] }, N);
      })
    ] })
  );
}
function $N(e, t, n) {
  const r = gN(t), l = e.colorFor(n, t);
  switch (t.type) {
    case "pie":
    case "donut":
      return bN(e, t, n, r, l);
    case "scatter":
    case "bubble":
      return yN(e, t, n, r, l);
    case "line":
    case "area":
      return xN(e, t, n, r, l);
    case "gauge":
      return wN(e, t, n, r, l);
    case "radar":
      return NN(e, t, n, r, l);
    case "funnel":
      return ON(e, t, n, r, l);
    case "heatmap":
      return SN(e, t, n, r, l);
    default:
      return vN(e, t, n, r, l);
  }
}
function mS({
  series: e,
  width: t = 600,
  height: n = 400,
  valueAxis: r,
  categoryAxis: l,
  showLegend: a = !0,
  tooltipVisible: d = !0,
  onSeriesClick: s,
  ariaLabel: i = "Chart",
  className: c
}) {
  const [f, u] = q(
    null
  ), h = Se(() => {
    const C = /* @__PURE__ */ new Set();
    for (const D of e)
      for (const I of D.data) C.add(String(I[D.categoryProperty] ?? ""));
    return [...C];
  }, [e]), m = Se(() => {
    const C = e.flatMap((I) => I.data.map((k) => Number(k[I.valueProperty]))).filter((I) => !Number.isNaN(I)), D = /* @__PURE__ */ new Map();
    for (const I of e) {
      if (!I.stack) continue;
      let k = D.get(I.stack);
      k || D.set(I.stack, k = /* @__PURE__ */ new Map());
      for (const S of I.data) {
        const E = String(S[I.categoryProperty] ?? ""), P = Number(S[I.valueProperty]);
        Number.isNaN(P) || k.set(E, (k.get(E) ?? 0) + P);
      }
    }
    for (const I of D.values()) C.push(...I.values());
    return C;
  }, [e]), b = r?.min ?? (m.length ? Math.min(0, ...m) : 0), g = r?.max ?? (m.length ? Math.max(...m) : 10), y = Se(
    () => hN(b, g, r?.step),
    [b, g, r?.step]
  ), p = { t: 16, r: 16, b: 40, l: 56 }, _ = t - p.l - p.r, x = n - p.t - p.b, N = (C) => p.l + C / Math.max(1, h.length - 1) * _, v = (C) => p.t + (1 - (C - y.min) / (y.max - y.min || 1)) * x, $ = (C, D) => D.color ?? ll[C % ll.length], O = e.some((C) => zl.has(C.type)), T = e.some((C) => mN.has(C.type)), A = {
    categories: h,
    scale: y,
    pad: p,
    plotW: _,
    plotH: x,
    xFor: N,
    yFor: v,
    colorFor: $,
    tooltipVisible: d,
    showTip: (C, D, I) => u({ x: C, y: D, text: I }),
    hideTip: () => u(null),
    handleClick: (C, D, I, k) => s?.({
      seriesTitle: C.title ?? "",
      category: D,
      value: I,
      item: k
    }),
    series: e
  };
  return /* @__PURE__ */ M(
    "figure",
    {
      className: [ft.root, c].filter(Boolean).join(" "),
      role: "img",
      "aria-label": i,
      "aria-describedby": `${i.replace(/\s+/g, "-")}-table`,
      children: [
        /* @__PURE__ */ M(
          "svg",
          {
            width: t,
            height: n,
            className: ft.svg,
            role: "presentation",
            children: [
              O && r?.gridlines !== !1 && y.ticks.map((C) => /* @__PURE__ */ o(
                "line",
                {
                  x1: p.l,
                  x2: p.l + _,
                  y1: v(C),
                  y2: v(C),
                  className: ft.gridline
                },
                C
              )),
              T && l?.gridlines && h.map((C, D) => /* @__PURE__ */ o(
                "line",
                {
                  x1: N(D),
                  x2: N(D),
                  y1: p.t,
                  y2: p.t + x,
                  className: ft.gridline
                },
                D
              )),
              O && y.ticks.map((C) => /* @__PURE__ */ o(
                "text",
                {
                  x: p.l - 8,
                  y: v(C) + 4,
                  textAnchor: "end",
                  className: ft.tickLabel,
                  children: C
                },
                C
              )),
              T && h.map((C, D) => /* @__PURE__ */ o(
                "text",
                {
                  x: N(D),
                  y: p.t + x + 16,
                  textAnchor: "middle",
                  className: ft.tickLabel,
                  children: C
                },
                C
              )),
              O && r?.title && /* @__PURE__ */ o(
                "text",
                {
                  x: 12,
                  y: p.t + x / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90,12,${p.t + x / 2})`,
                  className: ft.axisTitle,
                  children: r.title
                }
              ),
              T && l?.title && /* @__PURE__ */ o(
                "text",
                {
                  x: p.l + _ / 2,
                  y: n - 4,
                  textAnchor: "middle",
                  className: ft.axisTitle,
                  children: l.title
                }
              ),
              e.some((C) => C.type === "radar") && kN(A),
              e.map((C, D) => $N(A, C, D))
            ]
          }
        ),
        f && /* @__PURE__ */ o(
          "div",
          {
            className: ft.tooltip,
            style: { left: f.x, top: f.y - 28 },
            children: f.text
          }
        ),
        a && /* @__PURE__ */ o("div", { className: ft.legend, children: e.map((C, D) => /* @__PURE__ */ M("span", { className: ft.legendItem, children: [
          /* @__PURE__ */ o(
            "span",
            {
              className: ft.swatch,
              style: { backgroundColor: $(D, C) },
              "aria-hidden": "true"
            }
          ),
          C.title ?? `Series ${D + 1}`
        ] }, D)) }),
        /* @__PURE__ */ M(
          "table",
          {
            className: ft.visuallyHidden,
            id: `${i.replace(/\s+/g, "-")}-table`,
            children: [
              /* @__PURE__ */ o("caption", { children: i }),
              /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ M("tr", { children: [
                /* @__PURE__ */ o("th", { children: "Series" }),
                /* @__PURE__ */ o("th", { children: "Category" }),
                /* @__PURE__ */ o("th", { children: "Value" })
              ] }) }),
              /* @__PURE__ */ o("tbody", { children: e.map(
                (C) => C.data.map((D, I) => /* @__PURE__ */ M("tr", { children: [
                  /* @__PURE__ */ o("td", { children: C.title ?? "" }),
                  /* @__PURE__ */ o("td", { children: C.rowProperty ? `${String(D[C.rowProperty] ?? "")} / ${String(D[C.categoryProperty] ?? "")}` : String(D[C.categoryProperty] ?? "") }),
                  /* @__PURE__ */ o("td", { children: String(D[C.valueProperty] ?? "") })
                ] }, `${C.title}-${I}`))
              ) })
            ]
          }
        )
      ]
    }
  );
}
function hS({ query: e, children: t }) {
  return Zs(e) ? /* @__PURE__ */ o(pt, { children: t }) : null;
}
function gS({ children: e, className: t }) {
  return /* @__PURE__ */ o("div", { role: "status", "aria-live": "polite", className: t, children: e });
}
function bS() {
  const e = oe(null);
  return ve(() => {
    const t = document.createElement("div");
    return t.setAttribute("role", "status"), t.setAttribute("aria-live", "polite"), Object.assign(t.style, {
      position: "absolute",
      width: "1px",
      height: "1px",
      padding: "0",
      margin: "-1px",
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      border: "0"
    }), document.body.appendChild(t), e.current = t, () => {
      t.remove(), e.current = null;
    };
  }, []), B((t) => {
    const n = e.current;
    n && (n.textContent = t);
  }, []);
}
export {
  h_ as ALERT_ICON,
  $O as Accordion,
  dO as Alert,
  CO as AutoComplete,
  mO as AutoGrid,
  OO as Avatar,
  AN as Badge,
  pS as Barcode,
  gO as Body,
  eS as Breadcrumb,
  yn as Button,
  CN as Card,
  oS as Carousel,
  mS as Chart,
  QN as CheckBox,
  DO as CheckBoxList,
  jO as ColorPicker,
  _O as Column,
  YO as ContextMenuProvider,
  Or as DEFAULT_OPERATOR_BY_TYPE,
  Ix as DEFAULT_PALETTE,
  Lb as DEFAULT_THEMES,
  YN as DataFilter,
  XN as DataGrid,
  ZN as DataList,
  BO as DatePicker,
  _l as Dialog,
  rO as DialogProvider,
  TO as DropDown,
  GO as DropZone,
  zN as EmptyState,
  cl as FILTER_OPERATORS,
  QO as FabMenu,
  Nr as Field,
  RN as Fieldset,
  ob as Footer,
  PN as Form,
  LN as FormField,
  cS as Gantt,
  ib as Header,
  aO as HtmlEditor,
  Me as Icon,
  Xr as Input,
  JN as Label,
  hO as Layout,
  tS as Link,
  AO as ListBox,
  gS as LiveRegion,
  lO as Markdown,
  RO as Mask,
  hS as MediaQuery,
  Uv as Menu,
  Dl as MenuItem,
  PO as Numeric,
  Oc as Pager,
  ZO as PanelMenu,
  XO as PanelMenuItem,
  LO as Password,
  aS as PickList,
  dS as Pivot,
  cO as PopupProvider,
  JO as ProfileMenu,
  yO as Progress,
  _S as QRCode,
  MO as RadioButtonList,
  FO as Rating,
  fO as Row,
  iS as Scheduler,
  qO as SecurityCode,
  sr as Select,
  IO as SelectBar,
  xb as Sidebar,
  bO as SidebarToggle,
  KO as SignaturePad,
  uO as Skeleton,
  HO as Slider,
  zO as SplitButton,
  rS as Splitter,
  pO as Stack,
  MN as Stat,
  nS as Steps,
  eO as Switch,
  IN as Table,
  SO as Tabs,
  pl as Text,
  EO as TextArea,
  Fd as TextBox,
  xO as ThemeSwitcher,
  vO as ThemeToggle,
  UO as TimeSpanPicker,
  uS as Timeline,
  oO as ToastProvider,
  sS as Toc,
  Ub as ToggleButton,
  tO as Tooltip,
  lS as Tree,
  WO as Upload,
  fS as VirtualGrid,
  Mc as aggregateValue,
  ul as applyFilters,
  Dc as applyGridState,
  mo as collectGroupKeys,
  nr as columnValue,
  KN as compare,
  GN as custom,
  Tc as cycleSort,
  go as defaultOperatorForType,
  BN as email,
  Go as formatMasked,
  us as formatValue,
  kO as getAppearance,
  ds as getByPath,
  wO as getTheme,
  Sc as groupItems,
  DN as iconNames,
  dl as matchesFilters,
  UN as maxLength,
  HN as minLength,
  Ac as paginate,
  FN as pattern,
  qN as range,
  $f as renderMarkdown,
  jN as required,
  WN as requiredTrue,
  al as resolveVariant,
  Di as runValidators,
  Vb as setAppearance,
  Gb as setTheme,
  Ur as shadeClass,
  Yi as sortItems,
  Cc as sortedItems,
  Ko as subscribe,
  Ic as toCsv,
  qi as toFilterString,
  Vi as toODataFilterString,
  VO as useContextMenu,
  nO as useDialog,
  Ai as useFormContext,
  VN as useFormField,
  bS as useLiveRegion,
  Zs as useMediaQuery,
  iO as usePopup,
  NO as useThemeService,
  sO as useToast
};
