import { jsx as s, jsxs as M, Fragment as pt } from "react/jsx-runtime";
import { forwardRef as st, useId as ot, isValidElement as qt, cloneElement as Ks, useState as q, useRef as oe, useCallback as B, useMemo as Oe, useContext as Pn, createContext as or, useEffect as ve, Fragment as Ws, useLayoutEffect as Ds, useImperativeHandle as fs, Children as Ur } from "react";
function Hr(e) {
  return e == null || e === "default" || e === "medium" ? null : `shade-${e}`;
}
const Ll = "_button_eyvws_1", Rl = "_filled_eyvws_36", Pl = "_flat_eyvws_55", jl = "_outlined_eyvws_58", Bl = "_text_eyvws_63", Fl = "_loading_eyvws_506", Hl = "_spinner_eyvws_509", Ul = "_xs_eyvws_525", ql = "_sm_eyvws_531", Kl = "_md_eyvws_537", Wl = "_lg_eyvws_543", Gl = "_xl_eyvws_549", Vl = "_iconOnly_eyvws_555", Yl = "_fullWidth_eyvws_585", Cn = {
  button: Ll,
  filled: Rl,
  flat: Pl,
  outlined: jl,
  text: Bl,
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
  loading: Fl,
  spinner: Hl,
  "dx-spin": "_dx-spin_eyvws_1",
  xs: Ul,
  sm: ql,
  md: Kl,
  lg: Wl,
  xl: Gl,
  iconOnly: Vl,
  fullWidth: Yl
};
function Xl(e, t) {
  const n = t, r = e ?? "filled";
  return { variant: r === "filled" || r === "flat" || r === "outlined" || r === "text" ? r : "filled", style: n ?? "primary" };
}
const yn = st(
  function(t, n) {
    const {
      variant: r = "filled",
      severity: l,
      shade: i = "default",
      size: d = "md",
      fullWidth: o = !1,
      iconOnly: a = !1,
      loading: c = !1,
      visible: f = !0,
      className: u,
      disabled: x,
      children: h,
      ...g
    } = t;
    if (f === !1) return null;
    const m = Xl(r, l), p = m.style === "light" || m.style === "dark" ? null : Hr(i), _ = [
      Cn.button,
      Cn[m.variant],
      Cn[`style-${m.style}`],
      p ? Cn[p] : null,
      Cn[d],
      o ? Cn.fullWidth : null,
      a ? Cn.iconOnly : null,
      c ? Cn.loading : null,
      // Press feedback on every button (Radzen material parity).
      "dx-ripple",
      u
    ].filter(Boolean).join(" "), y = /* @__PURE__ */ M(pt, { children: [
      c ? /* @__PURE__ */ s("span", { "aria-hidden": "true", className: Cn.spinner }) : null,
      h
    ] }), N = t.href;
    if (N != null) {
      const { onClick: S, ...T } = g, A = x || c;
      return /* @__PURE__ */ s(
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
            S?.(C);
          },
          ...T,
          children: y
        }
      );
    }
    const { type: v = "button", ...$ } = g;
    return /* @__PURE__ */ s(
      "button",
      {
        ref: n,
        type: v,
        className: _,
        disabled: x || c,
        "aria-busy": c || void 0,
        ...$,
        children: y
      }
    );
  }
), Zl = "_card_4vcae_1", Jl = "_elevated_4vcae_8", Ql = "_filled_4vcae_13", ea = "_outlined_4vcae_18", ta = "_interactive_4vcae_22", na = "_text_4vcae_30", ra = "_header_4vcae_46", sa = "_body_4vcae_53", oa = "_footer_4vcae_63", xr = {
  card: Zl,
  elevated: Jl,
  filled: Ql,
  outlined: ea,
  interactive: ta,
  text: na,
  header: ra,
  body: sa,
  footer: oa
}, wN = st(function({
  variant: t = "elevated",
  header: n,
  footer: r,
  className: l,
  visible: i = !0,
  children: d,
  onKeyDown: o,
  ...a
}, c) {
  if (i === !1) return null;
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
          o?.(u), !(!f || u.key !== "Enter" && u.key !== " ") && (u.preventDefault(), u.currentTarget.click());
        },
        className: [xr.card, xr[t], l].filter(Boolean).join(" "),
        ...a,
        children: [
          n != null && /* @__PURE__ */ s("div", { className: xr.header, children: n }),
          /* @__PURE__ */ s("div", { className: xr.body, children: d }),
          r != null && /* @__PURE__ */ s("div", { className: xr.footer, children: r })
        ]
      }
    )
  );
});
function rl(e, t = "filled") {
  return e === "filled" || e === "flat" || e === "outlined" || e === "text" ? e : t;
}
const la = "_badge_1fy6d_1", aa = "_xs_1fy6d_21", ia = "_sm_1fy6d_26", ca = "_md_1fy6d_31", da = "_lg_1fy6d_36", ua = "_xl_1fy6d_41", fa = "_neutral_1fy6d_47", _a = "_primary_1fy6d_52", pa = "_secondary_1fy6d_61", ma = "_light_1fy6d_66", ha = "_base_1fy6d_71", ga = "_dark_1fy6d_76", ba = "_info_1fy6d_81", ya = "_success_1fy6d_86", xa = "_warning_1fy6d_95", va = "_danger_1fy6d_104", wa = "_filled_1fy6d_111", ka = "_outlined_1fy6d_161", Na = "_text_1fy6d_213", vr = {
  badge: la,
  xs: aa,
  sm: ia,
  md: ca,
  lg: da,
  xl: ua,
  neutral: fa,
  primary: _a,
  secondary: pa,
  light: ma,
  base: ha,
  dark: ga,
  info: ba,
  success: ya,
  warning: xa,
  danger: va,
  filled: wa,
  outlined: ka,
  text: Na,
  "shade-lighter": "_shade-lighter_1fy6d_486",
  "shade-light": "_shade-light_1fy6d_486",
  "shade-dark": "_shade-dark_1fy6d_494",
  "shade-darker": "_shade-darker_1fy6d_497"
}, kN = st(function({
  severity: t = "primary",
  variant: n = "filled",
  shade: r,
  size: l = "md",
  className: i,
  visible: d = !0,
  children: o,
  ...a
}, c) {
  if (d === !1) return null;
  const f = t, u = rl(n, "filled"), x = Hr(r);
  return /* @__PURE__ */ s(
    "span",
    {
      ref: c,
      className: [
        vr.badge,
        vr[l],
        vr[f],
        vr[u],
        x ? vr[x] : null,
        i
      ].filter(Boolean).join(" "),
      ...a,
      children: o
    }
  );
}), Sa = "_icon_vn4jx_5", Oa = "_xs_vn4jx_24", $a = "_sm_vn4jx_28", Ea = "_md_vn4jx_23", Ta = "_lg_vn4jx_36", Ca = "_xl_vn4jx_40", so = {
  icon: Sa,
  xs: Oa,
  sm: $a,
  md: Ea,
  lg: Ta,
  xl: Ca
}, NN = [
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
], Me = st(function({ icon: t, size: n, color: r, className: l, style: i, ...d }, o) {
  const a = typeof n == "string";
  return /* @__PURE__ */ s(
    "span",
    {
      ref: o,
      className: [so.icon, a ? so[n] : null, l].filter(Boolean).join(" "),
      style: {
        ...a || n === void 0 ? null : { fontSize: typeof n == "number" ? `${n}px` : n },
        ...r === void 0 ? null : { color: r },
        ...i
      },
      "aria-hidden": "true",
      ...d,
      children: t
    }
  );
}), Aa = "_stat_sjin9_1", Da = "_label_sjin9_8", Ma = "_row_sjin9_16", Ia = "_value_sjin9_22", za = "_delta_sjin9_28", La = "_success_sjin9_33", Ra = "_danger_sjin9_37", Pa = "_neutral_sjin9_41", ja = "_hint_sjin9_45", Yn = {
  stat: Aa,
  label: Da,
  row: Ma,
  value: Ia,
  delta: za,
  success: La,
  danger: Ra,
  neutral: Pa,
  hint: ja
}, SN = st(function({ label: t, value: n, delta: r, deltaTone: l = "neutral", hint: i, className: d, ...o }, a) {
  return /* @__PURE__ */ M(
    "div",
    {
      ref: a,
      className: [Yn.stat, d].filter(Boolean).join(" "),
      ...o,
      children: [
        /* @__PURE__ */ s("div", { className: Yn.label, children: t }),
        /* @__PURE__ */ M("div", { className: Yn.row, children: [
          /* @__PURE__ */ s("div", { className: Yn.value, children: n }),
          r != null && /* @__PURE__ */ s("div", { className: [Yn.delta, Yn[l]].join(" "), children: r })
        ] }),
        i != null && /* @__PURE__ */ s("div", { className: Yn.hint, children: i })
      ]
    }
  );
}), Ba = "_wrap_ipozk_1", Fa = "_table_ipozk_8", Ha = "_caption_ipozk_14", Ua = "_none_ipozk_51", qa = "_horizontal_ipozk_57", Ka = "_vertical_ipozk_67", Wa = "_alternating_ipozk_85", Ga = "_start_ipozk_89", Va = "_center_ipozk_93", Ya = "_end_ipozk_97", Xa = "_empty_ipozk_101", Bn = {
  wrap: Ba,
  table: Fa,
  caption: Ha,
  none: Ua,
  horizontal: qa,
  vertical: Ka,
  alternating: Wa,
  start: Ga,
  center: Va,
  end: Ya,
  empty: Xa
};
function ON({
  columns: e,
  rows: t,
  rowKey: n,
  empty: r,
  caption: l,
  gridLines: i = "default",
  allowAlternatingRows: d = !0,
  className: o,
  visible: a = !0
}) {
  if (a === !1) return null;
  const c = i === "default" || i === "both" ? "" : Bn[i];
  return /* @__PURE__ */ M("div", { className: [Bn.wrap, o].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ M(
      "table",
      {
        className: [
          Bn.table,
          c,
          d ? Bn.alternating : ""
        ].filter(Boolean).join(" "),
        children: [
          l != null && /* @__PURE__ */ s("caption", { className: Bn.caption, children: l }),
          /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ s("tr", { children: e.map((f) => /* @__PURE__ */ s(
            "th",
            {
              className: f.align != null ? Bn[f.align] : void 0,
              scope: "col",
              children: f.header
            },
            f.key
          )) }) }),
          /* @__PURE__ */ s("tbody", { children: t.map((f) => /* @__PURE__ */ s("tr", { children: e.map((u) => /* @__PURE__ */ s(
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
    t.length === 0 && r != null && /* @__PURE__ */ s("div", { className: Bn.empty, children: r })
  ] });
}
const Za = "_emptyState_1swxw_1", Ja = "_icon_1swxw_13", Qa = "_title_1swxw_18", ei = "_description_1swxw_24", ti = "_action_1swxw_30", wr = {
  emptyState: Za,
  icon: Ja,
  title: Qa,
  description: ei,
  action: ti
};
function $N({
  icon: e,
  title: t,
  description: n,
  action: r,
  className: l,
  visible: i = !0
}) {
  return i === !1 ? null : /* @__PURE__ */ M("div", { className: [wr.emptyState, l].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ s("div", { className: wr.icon, children: e }),
    /* @__PURE__ */ s("div", { className: wr.title, children: t }),
    n != null && /* @__PURE__ */ s("div", { className: wr.description, children: n }),
    r != null && /* @__PURE__ */ s("div", { className: wr.action, children: r })
  ] });
}
const ni = "_field_149oz_1", ri = "_label_149oz_8", si = "_required_149oz_14", oi = "_hint_149oz_19", li = "_error_149oz_24", kr = {
  field: ni,
  label: ri,
  required: si,
  hint: oi,
  error: li
};
function Nr({
  label: e,
  htmlFor: t,
  required: n,
  hint: r,
  supporting: l,
  error: i,
  children: d,
  className: o,
  visible: a = !0
}) {
  const c = r ?? l, f = ot(), u = ot(), x = ot();
  if (a === !1) return null;
  const h = i != null ? u : c != null ? x : null, g = typeof d == "function" ? d({ inputId: f, hintId: x, errorId: u }) : d, m = qt(g) && typeof g.props.id == "string" ? g.props.id : void 0, b = m ?? t ?? f, p = qt(g) && (h != null || m == null && typeof g.type == "string"), _ = m != null || t != null || p, y = p && qt(g) ? Ks(g, {
    id: b,
    "aria-describedby": h != null ? [
      g.props["aria-describedby"],
      h
    ].filter((N) => typeof N == "string").join(" ") || void 0 : g.props["aria-describedby"],
    "aria-invalid": i != null ? !0 : g.props["aria-invalid"]
  }) : g;
  return /* @__PURE__ */ M("div", { className: [kr.field, o].filter(Boolean).join(" "), children: [
    e != null && /* @__PURE__ */ M(
      "label",
      {
        className: kr.label,
        htmlFor: _ ? b : void 0,
        children: [
          e,
          n === !0 && /* @__PURE__ */ s("span", { className: kr.required, "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    y,
    i != null ? /* @__PURE__ */ s("div", { id: u, className: kr.error, "aria-live": "polite", children: i }) : c != null ? /* @__PURE__ */ s("div", { id: x, className: kr.hint, children: c }) : null
  ] });
}
const ai = "_formfield_6e25e_1", ii = "_content_6e25e_8", ci = "_floating_6e25e_43", di = "_label_6e25e_111", ui = "_start_6e25e_132", fi = "_required_6e25e_169", _i = "_end_6e25e_175", pi = "_filled_6e25e_192", mi = "_flat_6e25e_199", hi = "_helper_6e25e_206", gi = "_invalid_6e25e_211", kn = {
  formfield: ai,
  content: ii,
  floating: ci,
  label: di,
  start: ui,
  required: fi,
  end: _i,
  filled: pi,
  flat: mi,
  helper: hi,
  invalid: gi
};
function EN({
  text: e,
  start: t,
  end: n,
  helper: r,
  component: l,
  allowFloatingLabel: i = !0,
  variant: d = "outlined",
  invalid: o = !1,
  required: a = !1,
  children: c,
  className: f,
  visible: u = !0
}) {
  const x = ot(), h = ot();
  if (u === !1) return null;
  const g = l ?? x, m = typeof c == "function" ? c({
    inputId: g
  }) : c, b = qt(m) ? m.type : null, p = typeof b == "string", _ = qt(m) && typeof b != "symbol", y = qt(m) ? m.props : null, N = typeof y?.id == "string" ? y.id : void 0, v = p && qt(m) ? m.type.toLowerCase() : null, $ = v != null && (v === "input" ? typeof y?.type != "string" || y.type.toLowerCase() !== "hidden" : v === "button" || v === "meter" || v === "output" || v === "progress" || v === "select" || v === "textarea"), S = _ && (r != null || o || N == null && $), T = N != null || l != null || S, A = v === "input" && typeof y?.type == "string" ? y.type.toLowerCase() : null, C = v === "textarea" || v === "input" && (A == null || [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number"
  ].includes(A)), D = S && qt(m) ? Ks(
    m,
    {
      id: N ?? g,
      ...i && C && y?.placeholder == null ? { placeholder: " " } : {},
      ...r != null ? {
        "aria-describedby": [
          y?.["aria-describedby"],
          h
        ].filter((k) => typeof k == "string").join(" ")
      } : {},
      ...o ? {
        "aria-invalid": !0
      } : {}
    }
  ) : m, I = e != null ? /* @__PURE__ */ M(
    "label",
    {
      className: kn.label,
      htmlFor: T ? N ?? g : void 0,
      children: [
        e,
        a === !0 && /* @__PURE__ */ s("span", { className: kn.required, "aria-hidden": "true", children: "*" })
      ]
    }
  ) : null;
  return /* @__PURE__ */ M(
    "div",
    {
      className: [
        kn.formfield,
        kn[d],
        i ? kn.floating : null,
        o ? kn.invalid : null,
        f
      ].filter(Boolean).join(" "),
      children: [
        i ? null : I,
        /* @__PURE__ */ M("div", { className: kn.content, children: [
          t != null && /* @__PURE__ */ s("div", { className: kn.start, children: t }),
          D,
          i ? I : null,
          n != null && /* @__PURE__ */ s("div", { className: kn.end, children: n })
        ] }),
        r != null && /* @__PURE__ */ s("div", { id: h, className: kn.helper, children: r })
      ]
    }
  );
}
const bi = "_fieldset_8x01p_1", yi = "_legend_8x01p_11", xi = "_legendText_8x01p_20", vi = "_toggle_8x01p_24", wi = "_content_8x01p_45", ki = "_summary_8x01p_49", Xn = {
  fieldset: bi,
  legend: yi,
  legendText: xi,
  toggle: vi,
  content: wi,
  summary: ki
};
function TN({
  text: e,
  headerTemplate: t,
  icon: n,
  iconColor: r,
  allowCollapse: l = !1,
  collapsed: i,
  defaultCollapsed: d = !1,
  summary: o,
  expandTitle: a,
  collapseTitle: c,
  expandAriaLabel: f,
  collapseAriaLabel: u,
  onExpand: x,
  onCollapse: h,
  children: g,
  className: m,
  visible: b = !0
}) {
  const p = ot(), [_, y] = q(d);
  if (b === !1) return null;
  const N = i ?? _, v = l ? `${p}-content` : void 0, $ = () => {
    const I = !N;
    i === void 0 && y(I), I ? h?.() : x?.();
  }, S = l || e != null || n != null || t != null, T = l ? N : !1, A = l && N && o != null, C = T ? a ?? "Expand" : c ?? "Collapse", D = T ? f ?? "Expand" : u ?? "Collapse";
  return /* @__PURE__ */ M(
    "fieldset",
    {
      className: [Xn.fieldset, m].filter(Boolean).join(" "),
      children: [
        S ? /* @__PURE__ */ s("legend", { className: Xn.legend, children: l ? /* @__PURE__ */ M(pt, { children: [
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
                /* @__PURE__ */ s(
                  Me,
                  {
                    icon: T ? "add" : "remove",
                    size: 16,
                    "aria-hidden": "true"
                  }
                ),
                n != null && /* @__PURE__ */ s(Me, { icon: n, color: r, "aria-hidden": "true" }),
                e != null && /* @__PURE__ */ s("span", { className: Xn.legendText, children: e })
              ]
            }
          ),
          t
        ] }) : /* @__PURE__ */ M(pt, { children: [
          n != null && /* @__PURE__ */ s(Me, { icon: n, color: r, "aria-hidden": "true" }),
          e != null && /* @__PURE__ */ s("span", { className: Xn.legendText, children: e }),
          t
        ] }) }) : null,
        /* @__PURE__ */ s(
          "div",
          {
            className: Xn.content,
            id: v,
            hidden: T,
            children: g
          }
        ),
        A ? /* @__PURE__ */ s("div", { className: Xn.summary, children: o }) : null
      ]
    }
  );
}
const Ni = "_form_abp5n_1", Si = {
  form: Ni
}, sl = or(null);
function Oi() {
  const e = Pn(sl);
  if (e == null)
    throw new Error("useFormContext must be used within a <Form>");
  return e;
}
function CN({
  model: e,
  onSubmit: t,
  onInvalidSubmit: n,
  action: r,
  method: l,
  children: i,
  className: d
}) {
  const [o, a] = q({}), [c, f] = q(0), u = oe(o);
  u.current = o;
  const x = B((y) => {
    a(
      (N) => N[y.name] === y ? N : { ...N, [y.name]: y }
    );
  }, []), h = B((y) => {
    a((N) => {
      if (!(y in N)) return N;
      const v = { ...N };
      return delete v[y], v;
    });
  }, []), g = B(() => {
    const y = {};
    for (const N of Object.values(u.current)) {
      const v = N.validate();
      v.length > 0 && (y[N.name] = v);
    }
    return y;
  }, []), m = B(() => {
    const y = g();
    f((N) => N + 1), Object.keys(y).length === 0 ? t?.(e) : n?.(y);
  }, [g, e, t, n]), b = (y) => {
    r != null && l != null || (y.preventDefault(), m());
  }, p = Oe(
    () => ({ registerField: x, unregisterField: h, submit: m, submitCount: c }),
    [x, h, m, c]
  ), _ = [Si.form, d].filter(Boolean).join(" ");
  return /* @__PURE__ */ s(sl.Provider, { value: p, children: /* @__PURE__ */ s(
    "form",
    {
      className: _,
      onSubmit: b,
      action: r,
      method: l,
      noValidate: !0,
      children: i
    }
  ) });
}
const lr = (e) => e == null || e === "" || typeof e == "string" && e.trim() === "", AN = (e = "Required") => (t) => lr(t) ? e : null, DN = (e = "Invalid email") => (t) => lr(t) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t)) ? null : e, MN = (e, t = "Invalid format") => (n) => lr(n) || e.test(String(n)) ? null : t, IN = (e, t = `Minimum ${e} characters`) => (n) => lr(n) || String(n).length >= e ? null : t, zN = (e, t = `Maximum ${e} characters`) => (n) => lr(n) || String(n).length <= e ? null : t, LN = (e, t, n = `Between ${e} and ${t}`) => (r) => {
  if (lr(r)) return null;
  const l = Number(r);
  return !Number.isNaN(l) && l >= e && l <= t ? null : n;
}, RN = (e, t = "Values do not match") => (n, r) => {
  if (lr(n)) return null;
  const l = typeof e == "function" ? e(r) : e;
  return n === l ? null : t;
}, PN = (e = "Required") => (t) => t === !0 ? null : e, jN = (e) => (t, n) => e(t, n);
function $i(e, t, n) {
  return e.map((r) => r(t, n)).filter((r) => r != null);
}
function BN(e, t) {
  const { registerField: n, unregisterField: r, submitCount: l } = Oi(), [i, d] = q(t?.initialValue), [o, a] = q(!1), [c, f] = q(!1), u = oe(() => []);
  u.current = () => $i(t?.validate ?? [], i), ve(() => (n({ name: e, validate: () => u.current() }), () => r(e)), [e, n, r]), ve(() => {
    l > 0 && (a(!0), f(!1));
  }, [l]);
  const x = o && !c ? u.current() : [];
  return { value: i, setValue: (g) => {
    d(g), f(!0);
  }, errors: x };
}
const Ei = "_select_1xe98_1", Ti = "_invalid_1xe98_33", Ci = "_xs_1xe98_40", Ai = "_sm_1xe98_48", Di = "_md_1xe98_56", Mi = "_lg_1xe98_62", Ii = "_xl_1xe98_68", xs = {
  select: Ei,
  invalid: Ti,
  xs: Ci,
  sm: Ai,
  md: Di,
  lg: Mi,
  xl: Ii
}, sr = st(
  function({ size: t = "md", invalid: n = !1, options: r, children: l, className: i, ...d }, o) {
    return /* @__PURE__ */ s(
      "select",
      {
        ref: o,
        "data-size": t,
        className: [
          xs.select,
          xs[t],
          n ? xs.invalid : null,
          i
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...d,
        children: r != null ? r.map((a) => /* @__PURE__ */ s(
          "option",
          {
            value: a.value,
            disabled: a.disabled,
            children: a.label
          },
          a.value
        )) : l
      }
    );
  }
), ol = [
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
], Sr = {
  string: "Contains",
  number: "Equals",
  boolean: "Equals",
  date: "Equals",
  enum: "Equals"
}, zi = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
];
function Li(e) {
  return zi.includes(e);
}
function as(e, t) {
  return t.split(".").reduce((n, r) => {
    if (n != null)
      return n[r];
  }, e);
}
function oo(e) {
  return e instanceof Date ? e.getTime() : typeof e == "string" && !Number.isNaN(Date.parse(e)) && /^\d{4}-\d{2}-\d{2}/.test(e) ? Date.parse(e) : e;
}
function jr(e, t) {
  const n = oo(e), r = oo(t);
  if (typeof n == "number" && typeof r == "number") return n - r;
  const l = String(n ?? ""), i = String(r ?? "");
  return l < i ? -1 : l > i ? 1 : 0;
}
function _s(e) {
  if (e.secondOperator == null) return !1;
  if (Li(e.secondOperator)) return !0;
  const t = e.secondValue;
  return t != null && t !== "";
}
function lo(e, t, n) {
  const r = as(t, e.property), l = ao(
    r,
    e.value,
    e.operator,
    n
  );
  if (!_s(e)) return l;
  const i = ao(
    r,
    e.secondValue,
    e.secondOperator,
    n
  );
  return (e.logicalOperator ?? "And") === "And" ? l && i : l || i;
}
function ao(e, t, n, r) {
  const l = r === "CaseInsensitive", i = (a) => l && typeof a == "string" ? a.toLowerCase() : a, d = i(e), o = i(t);
  switch (n) {
    case "Equals":
      return d === o || Array.isArray(d) && d.some((a) => i(a) === o);
    case "NotEquals":
      return d !== o && !(Array.isArray(d) && d.some((a) => i(a) === o));
    case "LessThan":
      return jr(d, o) < 0;
    case "LessThanOrEquals":
      return jr(d, o) <= 0;
    case "GreaterThan":
      return jr(d, o) > 0;
    case "GreaterThanOrEquals":
      return jr(d, o) >= 0;
    case "Contains":
      return typeof d == "string" && typeof o == "string" && d.includes(o);
    case "StartsWith":
      return typeof d == "string" && typeof o == "string" && d.startsWith(o);
    case "EndsWith":
      return typeof d == "string" && typeof o == "string" && d.endsWith(o);
    case "DoesNotContain":
      return typeof d == "string" && typeof o == "string" && !d.includes(o);
    case "In":
      return Array.isArray(o) && o.some((a) => i(a) === d);
    case "NotIn":
      return Array.isArray(o) && !o.some((a) => i(a) === d);
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
function Gs(e) {
  return "filters" in e;
}
function ll(e, t, n = {}) {
  const r = n.logicalOperator ?? "And", l = n.caseSensitivity ?? "CaseInsensitive";
  if (Gs(t)) {
    if (t.filters.length === 0) return !0;
    const i = t.operator ?? r;
    return t.filters[i === "Or" ? "some" : "every"](
      (d) => ll(e, d, { logicalOperator: i, caseSensitivity: l })
    );
  }
  return t.operator === "Custom", lo(t, e, l);
}
function al(e, t, n = {}) {
  return e.filter((r) => ll(r, t, n));
}
function Ri(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
function rn(e) {
  return typeof e == "string" ? `"${Ri(e)}"` : typeof e == "number" || typeof e == "boolean" ? String(e) : e instanceof Date ? `"${e.toISOString()}"` : Array.isArray(e) ? `[${e.map(rn).join(", ")}]` : `"${String(e)}"`;
}
function Pi(e) {
  const t = (l, i) => {
    switch (l) {
      case "Equals":
        return `${e.property}.Equals(${rn(i)})`;
      case "NotEquals":
        return `!${e.property}.Equals(${rn(i)})`;
      case "LessThan":
        return `${e.property}.LessThan(${rn(i)})`;
      case "LessThanOrEquals":
        return `${e.property}.LessThanOrEquals(${rn(i)})`;
      case "GreaterThan":
        return `${e.property}.GreaterThan(${rn(i)})`;
      case "GreaterThanOrEquals":
        return `${e.property}.GreaterThanOrEquals(${rn(i)})`;
      case "Contains":
        return `${e.property}.Contains(${rn(i)})`;
      case "StartsWith":
        return `${e.property}.StartsWith(${rn(i)})`;
      case "EndsWith":
        return `${e.property}.EndsWith(${rn(i)})`;
      case "DoesNotContain":
        return `!${e.property}.Contains(${rn(i)})`;
      case "In":
        return `${e.property}.In(${rn(i)})`;
      case "NotIn":
        return `!${e.property}.In(${rn(i)})`;
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
  if (!_s(e))
    return t(e.operator, e.value);
  const n = e.logicalOperator ?? "And", r = e.secondOperator;
  return `(${t(e.operator, e.value)} ${n} ${t(
    r,
    e.secondValue
  )})`;
}
function ji(e) {
  return Gs(e) ? e.filters.length === 0 ? "" : `(${e.filters.map(ji).filter(Boolean).join(` ${e.operator} `)})` : Pi(e);
}
function Bi(e) {
  return e.replace(/'/g, "''");
}
const Fi = {
  Equals: "eq",
  NotEquals: "ne",
  LessThan: "lt",
  LessThanOrEquals: "le",
  GreaterThan: "gt",
  GreaterThanOrEquals: "ge"
};
function Hi(e, t) {
  const n = e.property, r = t === "CaseInsensitive", l = (c) => r ? `tolower(${c})` : c, i = (c) => typeof c == "string" ? `'${Bi(c)}'` : c instanceof Date ? `'${c.toISOString()}'` : String(c ?? ""), d = (c, f) => {
    const u = typeof f == "string", x = u && r ? l(n) : n;
    switch (c) {
      case "Equals":
      case "NotEquals":
      case "LessThan":
      case "LessThanOrEquals":
      case "GreaterThan":
      case "GreaterThanOrEquals":
        return `${x} ${Fi[c]} ${u && r ? l(i(f)) : i(f)}`;
      case "Contains":
        return `contains(${l(n)}, ${l(i(f))})`;
      case "StartsWith":
        return `startswith(${l(n)}, ${l(i(f))})`;
      case "EndsWith":
        return `endswith(${l(n)}, ${l(i(f))})`;
      case "DoesNotContain":
        return `not(contains(${l(n)}, ${l(i(f))}))`;
      case "In":
        return Array.isArray(f) ? `${x} in (${f.map((h) => i(h)).join(", ")})` : `${x} in (${i(f)})`;
      case "NotIn":
        return Array.isArray(f) ? `not(${x} in (${f.map((h) => i(h)).join(", ")}))` : `not(${x} in (${i(f)}))`;
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
  if (!_s(e))
    return d(e.operator, e.value);
  const o = (e.logicalOperator ?? "And") === "And" ? "and" : "or", a = e.secondOperator;
  return `(${d(e.operator, e.value)} ${o} ${d(
    a,
    e.secondValue
  )})`;
}
function Ui(e, t = {}) {
  const n = t.caseSensitivity ?? "CaseInsensitive";
  if (Gs(e)) {
    if (e.filters.length === 0) return "";
    const r = e.operator === "Or" ? "or" : "and";
    return `(${e.filters.map((l) => Ui(l, { caseSensitivity: n })).filter(Boolean).join(` ${r} `)})`;
  }
  return Hi(e, n);
}
function qi(e, t) {
  return t.length === 0 ? [...e] : [...e].sort((n, r) => {
    for (const l of t) {
      const i = l.sortOrder === "Ascending" ? 1 : -1, d = jr(
        as(n, l.property),
        as(r, l.property)
      );
      if (d !== 0) return d * i;
    }
    return 0;
  });
}
const Ki = "_filter_1dvqt_1", Wi = "_rows_1dvqt_9", Gi = "_row_1dvqt_9", Vi = "_join_1dvqt_21", Yi = "_property_1dvqt_30", Xi = "_operator_1dvqt_34", Zi = "_value_1dvqt_38", Ji = "_remove_1dvqt_42", Qi = "_bar_1dvqt_58", ec = "_add_1dvqt_64", tc = "_custom_1dvqt_78", nc = "_summary_1dvqt_82", rc = "_second_1dvqt_87", sc = "_secondAdd_1dvqt_91", oc = "_addSecond_1dvqt_95", lc = "_joinSelect_1dvqt_109", ht = {
  filter: Ki,
  rows: Wi,
  row: Gi,
  join: Vi,
  property: Yi,
  operator: Xi,
  value: Zi,
  remove: Ji,
  bar: Qi,
  add: ec,
  custom: tc,
  summary: nc,
  second: rc,
  secondAdd: sc,
  addSecond: oc,
  joinSelect: lc
}, Or = [
  "IsNull",
  "IsEmpty",
  "IsNotNull",
  "IsNotEmpty"
], io = {
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
function co({
  property: e,
  value: t,
  onChange: n
}) {
  if (e.editor != null)
    return /* @__PURE__ */ s(pt, { children: e.editor({ value: t, onChange: n }) });
  const r = e.type ?? "string";
  if (r === "enum" && e.values != null)
    return /* @__PURE__ */ s(
      sr,
      {
        "aria-label": e.title ?? e.name,
        className: ht.value,
        options: e.values,
        value: String(t ?? ""),
        onChange: (i) => n(i.target.value)
      }
    );
  if (r === "boolean")
    return /* @__PURE__ */ s(
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
        onChange: (i) => {
          i.target.value === "" ? n(void 0) : n(i.target.value === "true");
        }
      }
    );
  const l = r === "number" ? { type: "number" } : r === "date" ? { type: "date" } : { type: "text" };
  return /* @__PURE__ */ s(
    "input",
    {
      "aria-label": e.title ?? e.name,
      className: ht.value,
      ...l,
      value: t == null ? "" : String(t),
      onChange: (i) => n(
        r === "number" && i.target.value !== "" ? Number(i.target.value) : i.target.value
      )
    }
  );
}
function FN({
  properties: e,
  logicalOperator: t = "And",
  filterCaseSensitivity: n = "CaseInsensitive",
  initialRows: r,
  uniqueFilters: l = !1,
  className: i,
  viewChanged: d,
  items: o,
  children: a
}) {
  const [c, f] = q(
    () => r != null && r.length > 0 ? r.map((p, _) => ({ id: _, ...p })) : [
      {
        id: 0,
        property: e[0]?.name ?? "",
        operator: Sr[e[0]?.type ?? "string"],
        value: void 0
      }
    ]
  ), u = (p, _) => {
    f(
      (y) => y.map((N) => N.id === p ? { ...N, ..._ } : N)
    );
  }, x = () => {
    const p = c[c.length - 1], _ = Math.max(0, ...c.map((N) => N.id)) + 1, y = e[0];
    f((N) => [
      ...N,
      {
        id: _,
        property: p?.property ?? y?.name ?? "",
        operator: Sr[e.find(
          (v) => v.name === (p?.property ?? y?.name)
        )?.type ?? "string"],
        value: void 0
      }
    ]);
  }, h = (p) => {
    f(
      (_) => _.length > 1 ? _.filter((y) => y.id !== p) : _
    );
  }, g = Oe(() => {
    const p = [];
    for (const _ of c) {
      if (_.property === "" || (_.value == null || _.value === "") && !Or.includes(_.operator)) continue;
      const N = {
        property: _.property,
        operator: _.operator,
        value: _.value
      }, { secondOperator: v } = _;
      v != null && _s(_) && (N.secondOperator = v, N.secondValue = _.secondValue, N.logicalOperator = _.logicalOperator ?? "And"), p.push(N);
    }
    return p;
  }, [c]), m = Oe(() => o == null || g.length === 0 ? o : al(o, {
    operator: t,
    filters: g
  }, {
    caseSensitivity: n
  }), [o, g, t, n]);
  ve(() => {
    d != null && o != null && d(m ?? []);
  }, [m]);
  const b = (p) => e.find((_) => _.name === p) ?? { name: p, type: "string" };
  return /* @__PURE__ */ M("div", { className: [ht.filter, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ s("div", { className: ht.rows, role: "group", "aria-label": "Filter conditions", children: c.map((p, _) => {
      const y = b(p.property), N = l ? [Sr[y.type ?? "string"]] : ol, v = !Or.includes(p.operator), $ = p.secondOperator != null;
      return /* @__PURE__ */ M(Ws, { children: [
        /* @__PURE__ */ M("div", { className: ht.row, children: [
          _ > 0 ? /* @__PURE__ */ s("span", { className: ht.join, "aria-hidden": "true", children: t }) : null,
          /* @__PURE__ */ s(
            sr,
            {
              "aria-label": `Condition ${_ + 1} property`,
              className: ht.property,
              value: p.property,
              onChange: (S) => {
                const T = e.find(
                  (A) => A.name === S.target.value
                );
                u(p.id, {
                  property: S.target.value,
                  operator: Sr[T?.type ?? "string"],
                  value: void 0,
                  secondOperator: void 0,
                  secondValue: void 0,
                  logicalOperator: void 0
                });
              },
              options: e.map((S) => ({
                value: S.name,
                label: S.title ?? S.name
              }))
            }
          ),
          /* @__PURE__ */ s(
            sr,
            {
              "aria-label": `Condition ${_ + 1} operator`,
              className: ht.operator,
              value: p.operator,
              onChange: (S) => {
                const T = S.target.value;
                u(
                  p.id,
                  Or.includes(T) ? {
                    operator: T,
                    secondOperator: void 0,
                    secondValue: void 0,
                    logicalOperator: void 0
                  } : { operator: T }
                );
              },
              options: N.map((S) => ({
                value: S,
                label: io[S]
              }))
            }
          ),
          v ? /* @__PURE__ */ s(
            co,
            {
              property: y,
              value: p.value,
              onChange: (S) => u(p.id, { value: S })
            }
          ) : null,
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: ht.remove,
              "aria-label": `Remove condition ${_ + 1}`,
              onClick: () => h(p.id),
              children: /* @__PURE__ */ s(Me, { icon: "close", size: "sm" })
            }
          )
        ] }),
        v ? $ ? /* @__PURE__ */ M(
          "div",
          {
            className: [ht.row, ht.second].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ s(
                sr,
                {
                  "aria-label": `Condition ${_ + 1} second-operator logic`,
                  className: ht.joinSelect,
                  value: p.logicalOperator ?? "And",
                  onChange: (S) => u(p.id, {
                    logicalOperator: S.target.value
                  }),
                  options: [
                    { value: "And", label: "And" },
                    { value: "Or", label: "Or" }
                  ]
                }
              ),
              /* @__PURE__ */ s(
                sr,
                {
                  "aria-label": `Condition ${_ + 1} second operator`,
                  className: ht.operator,
                  value: p.secondOperator,
                  onChange: (S) => {
                    const T = S.target.value;
                    u(
                      p.id,
                      Or.includes(T) ? { secondOperator: T, secondValue: void 0 } : { secondOperator: T }
                    );
                  },
                  options: N.map((S) => ({
                    value: S,
                    label: io[S]
                  }))
                }
              ),
              p.secondOperator == null || !Or.includes(p.secondOperator) ? /* @__PURE__ */ s(
                co,
                {
                  property: y,
                  value: p.secondValue,
                  onChange: (S) => u(p.id, { secondValue: S })
                }
              ) : null,
              /* @__PURE__ */ s(
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
                  children: /* @__PURE__ */ s(Me, { icon: "close", size: "sm" })
                }
              )
            ]
          }
        ) : /* @__PURE__ */ s("div", { className: ht.secondAdd, children: /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: ht.addSecond,
            onClick: () => u(p.id, {
              secondOperator: Sr[y.type ?? "string"],
              secondValue: void 0,
              logicalOperator: "And"
            }),
            children: "+ Second condition"
          }
        ) }) : null
      ] }, p.id);
    }) }),
    /* @__PURE__ */ M("div", { className: ht.bar, children: [
      /* @__PURE__ */ s("button", { type: "button", className: ht.add, onClick: x, children: "Add filter" }),
      a != null ? /* @__PURE__ */ s("div", { className: ht.custom, children: a }) : null,
      o != null ? /* @__PURE__ */ M("span", { className: ht.summary, "aria-live": "polite", children: [
        m?.length ?? 0,
        " of ",
        o.length
      ] }) : null
    ] })
  ] });
}
const ac = "_pager_1du31_1", ic = "_alignLeft_1du31_10", cc = "_alignCenter_1du31_14", dc = "_alignRight_1du31_18", uc = "_alignJustify_1du31_22", fc = "_summary_1du31_26", _c = "_controls_1du31_31", pc = "_button_1du31_37", mc = "_active_1du31_73", hc = "_ellipsis_1du31_85", gc = "_size_1du31_91", Ft = {
  pager: ac,
  alignLeft: ic,
  alignCenter: cc,
  alignRight: dc,
  alignJustify: uc,
  summary: fc,
  controls: _c,
  button: pc,
  active: mc,
  ellipsis: hc,
  size: gc
};
function bc(e, t, n, r) {
  return e.replace("{0}", String(t)).replace("{1}", String(n)).replace("{2}", String(r));
}
function uo(e, t) {
  return e.replace("{0}", String(t));
}
function yc(e, t, n) {
  if (t <= n)
    return Array.from({ length: t }, (o, a) => a + 1);
  const r = Math.floor(n / 2);
  let l = Math.max(1, e - r);
  const i = Math.min(t, l + n - 1);
  l = Math.max(1, i - n + 1);
  const d = [];
  for (let o = l; o <= i; o++) d.push(o);
  return l > 2 && d.unshift("ellipsis"), l > 1 && d.unshift(1), i < t - 1 && d.push("ellipsis"), i < t && d.push(t), d;
}
function xc({
  count: e,
  pageSize: t,
  page: n,
  defaultPage: r = 1,
  pageSizeOptions: l,
  pageNumbersCount: i = 5,
  alwaysVisible: d = !1,
  horizontalAlign: o = "left",
  showPagingSummary: a,
  showPageSizeSelector: c = !0,
  pagingSummaryFormat: f = "Page {0} of {1} ({2} items)",
  pagingSummaryTemplate: u,
  pageSizeText: x = "Items per page",
  firstPageTitle: h = "First page",
  prevPageTitle: g = "Previous page",
  nextPageTitle: m = "Next page",
  lastPageTitle: b = "Last page",
  pageTitleFormat: p = "Page {0}",
  pageAriaLabelFormat: _ = "Page {0}",
  onPageChange: y,
  onPageSizeChange: N,
  ariaLabel: v = "Pagination",
  className: $,
  visible: S = !0
}) {
  const T = n ?? r, [A, C] = q(T), D = n !== void 0, I = D ? T : A, k = Math.max(1, Math.ceil(e / t)), O = Math.min(Math.max(1, I), k), E = a ?? !0, P = d || k > 1, L = yc(O, k, i), j = B(
    (te) => {
      const we = Math.min(Math.max(1, te), k);
      D || C(we);
      const le = (we - 1) * t;
      y?.({
        page: we,
        skip: le,
        top: t,
        pageCount: k,
        pageSize: t
      });
    },
    [D, y, k, t]
  ), F = o === "center" ? Ft.alignCenter : o === "right" ? Ft.alignRight : o === "justify" ? Ft.alignJustify : Ft.alignLeft, X = {
    count: e,
    pageNumber: O,
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
  return S === !1 || !P ? null : /* @__PURE__ */ M(
    "nav",
    {
      className: [Ft.pager, F, $].filter(Boolean).join(" "),
      "aria-label": v,
      children: [
        E && /* @__PURE__ */ s("span", { className: Ft.summary, "aria-live": "polite", children: u ? u(X) : bc(f, O, k, e) }),
        /* @__PURE__ */ M(
          "div",
          {
            className: Ft.controls,
            role: "group",
            "aria-label": v,
            onKeyDown: ie,
            children: [
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: Ft.button,
                  disabled: O <= 1,
                  onClick: () => j(1),
                  "aria-label": h,
                  title: h,
                  children: "«"
                }
              ),
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: Ft.button,
                  disabled: O <= 1,
                  onClick: () => j(O - 1),
                  "aria-label": g,
                  title: g,
                  children: "‹"
                }
              ),
              L.map(
                (te, we) => te === "ellipsis" ? /* @__PURE__ */ s("span", { className: Ft.ellipsis, "aria-hidden": "true", children: "…" }, `e${we}`) : /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    "data-pager-page": te,
                    className: [Ft.button, te === O ? Ft.active : ""].filter(Boolean).join(" "),
                    "aria-current": te === O ? "page" : void 0,
                    "aria-label": uo(_, te),
                    title: uo(p, te),
                    onClick: () => j(te),
                    children: te
                  },
                  te
                )
              ),
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: Ft.button,
                  disabled: O >= k,
                  onClick: () => j(O + 1),
                  "aria-label": m,
                  title: m,
                  children: "›"
                }
              ),
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: Ft.button,
                  disabled: O >= k,
                  onClick: () => j(k),
                  "aria-label": b,
                  title: b,
                  children: "»"
                }
              )
            ]
          }
        ),
        c && l && l.length > 0 && /* @__PURE__ */ M("label", { className: Ft.size, children: [
          /* @__PURE__ */ s("span", { children: x }),
          /* @__PURE__ */ s(
            "select",
            {
              value: t,
              onChange: (te) => N?.(Number(te.target.value)),
              "aria-label": x,
              children: l.map((te) => /* @__PURE__ */ s("option", { value: te, children: te }, te))
            }
          )
        ] })
      ]
    }
  );
}
function Ms(e) {
  const { pageNumber: t, onPageChange: n, summaryTemplate: r, showSummary: l, ...i } = e;
  return /* @__PURE__ */ s(
    xc,
    {
      page: t,
      showPagingSummary: l,
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
      ...i
    }
  );
}
const il = "";
function vc(e, t, n, r, l) {
  if (t.length === 0) return e.map((o) => ({ type: "row", row: o }));
  const i = (o) => n.find((a) => a.property === o), d = (o, a, c) => {
    const f = t[a];
    if (f === void 0)
      return o.map((m) => ({ type: "row", row: m }));
    const u = i(f), x = /* @__PURE__ */ new Map(), h = [];
    o.forEach((m) => {
      const b = String(l(m, f) ?? ""), p = x.get(b);
      p ? p.push(m) : (x.set(b, [m]), h.push(b));
    });
    const g = [];
    return h.forEach((m) => {
      const b = x.get(m), p = [...c, m].join(il), _ = b[0], y = _ !== void 0 ? l(_, f) : void 0;
      g.push({
        type: "group",
        group: {
          key: p,
          display: is(y, u?.format),
          property: f,
          title: u?.title ?? f,
          count: b.length,
          level: a
        }
      }), r.has(p) && g.push(...d(b, a + 1, [...c, m]));
    }), g;
  };
  return d(e, 0, []);
}
function fo(e, t, n) {
  const r = /* @__PURE__ */ new Set(), l = (i, d, o) => {
    const a = t[d];
    if (a === void 0 || i.length === 0) return;
    const c = /* @__PURE__ */ new Map(), f = [];
    i.forEach((u) => {
      const x = String(n(u, a) ?? ""), h = c.get(x);
      h ? h.push(u) : (c.set(x, [u]), f.push(x));
    }), f.forEach((u) => {
      const x = [...o, u].join(il);
      r.add(x), l(c.get(u), d + 1, [...o, u]);
    });
  };
  return l(e, 0, []), r;
}
function Vr(e, t) {
  return e.property ?? `col-${t}`;
}
function wc(e, t) {
  const n = {};
  let r = 0;
  return e.forEach(({ key: l, column: i }) => {
    if (!i.frozen) return;
    n[l] = r === 0 ? "0px" : `${r}px`;
    const d = t[l] ?? i.width ?? "8rem";
    r += parseFloat(d);
  }), n;
}
function kc(e, t) {
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
    return as(e, t);
}
function is(e, t) {
  if (t == null || t === "") return String(e ?? "");
  const n = /^N(\d+)$/i.exec(t);
  if (n && typeof e == "number") return e.toFixed(Number(n[1]));
  if (t === "d" || t === "D") {
    const r = e instanceof Date ? e : typeof e == "string" ? new Date(e) : null;
    return r != null && !Number.isNaN(r.getTime()) ? r.toLocaleDateString() : String(e ?? "");
  }
  return String(e ?? "");
}
const _o = [
  "Ascending",
  "Descending",
  null
];
function Nc(e, t, n = {}) {
  const r = e.find((i) => i.property === t), l = _o[(r ? _o.indexOf(r.sortOrder) : -1) + 1] ?? null;
  return l == null ? e.filter((i) => i.property !== t) : n.multi ? [
    ...e.filter((i) => i.property !== t),
    { property: t, sortOrder: l }
  ] : [{ property: t, sortOrder: l }];
}
function Sc(e, t) {
  return qi(e, t);
}
function Oc(e, t, n) {
  const r = Math.max(1, Math.ceil(e.length / n)), l = Math.min(Math.max(1, t), r), i = (l - 1) * n;
  return {
    items: e.slice(i, i + n),
    pageCount: r,
    pageNumber: l,
    total: e.length
  };
}
function $c(e, t, n = {}) {
  const r = [...t.filters.entries()].filter(([, o]) => o.value !== "" && o.value !== void 0).map(
    ([o, a]) => ({
      property: o,
      operator: a.operator ?? "Contains",
      value: kc(
        a.value,
        n.types?.[o] ?? "string"
      )
    })
  ), l = r.length > 0 ? al(
    e,
    { operator: n.logicalOperator ?? "And", filters: r },
    {
      logicalOperator: n.logicalOperator ?? "And",
      caseSensitivity: n.caseSensitivity ?? "CaseInsensitive"
    }
  ) : e, i = Sc(l, t.sorts);
  return {
    ...Oc(i, t.pageNumber, t.pageSize),
    filtered: i,
    sorts: t.sorts,
    filters: t.filters,
    pageSize: t.pageSize
  };
}
function po(e) {
  return e === "number" || e === "date" ? "Equals" : "Contains";
}
function Ec(e, t, n) {
  if (t.type === "custom") return t.compute?.(e);
  if (t.type === "count") return e.length;
  const r = [];
  switch (e.forEach((l) => {
    const i = n(l, t.property);
    if (i == null || i === "") return;
    const d = Number(i);
    Number.isFinite(d) && r.push(d);
  }), t.type) {
    case "sum":
      return r.length > 0 ? r.reduce((l, i) => l + i, 0) : void 0;
    case "avg":
      return r.length > 0 ? r.reduce((l, i) => l + i, 0) / r.length : void 0;
    case "min":
      return r.length > 0 ? Math.min(...r) : void 0;
    case "max":
      return r.length > 0 ? Math.max(...r) : void 0;
    default:
      return;
  }
}
function Tc(e, t, n = nr) {
  const r = (i) => /["\r\n,]/.test(i) ? `"${i.replace(/"/g, '""')}"` : i, l = [
    t.map((i) => r(i.title ?? i.property ?? "")).join(",")
  ];
  return e.forEach((i) => {
    l.push(
      t.map((d) => r(is(n(i, d.property), d.format))).join(",")
    );
  }), `${l.join(`\r
`)}\r
`;
}
const Cc = "_grid_13rur_1", Ac = "_toolbar_13rur_8", Dc = "_picker_13rur_13", Mc = "_pickerButton_13rur_17", Ic = "_pickerPanel_13rur_31", zc = "_pickerItem_13rur_46", Lc = "_groupPanel_13rur_55", Rc = "_groupPanelActive_13rur_66", Pc = "_groupPanelText_13rur_70", jc = "_groupChip_13rur_74", Bc = "_groupRemove_13rur_85", Fc = "_groupRow_13rur_94", Hc = "_groupCell_13rur_98", Uc = "_groupToggle_13rur_104", qc = "_editRow_13rur_117", Kc = "_editCell_13rur_121", Wc = "_editInput_13rur_127", Gc = "_commandCell_13rur_137", Vc = "_commandButton_13rur_144", Yc = "_data_13rur_159", Xc = "_table_13rur_166", Zc = "_header_13rur_172", Jc = "_center_13rur_185", Qc = "_right_13rur_189", ed = "_sortButton_13rur_193", td = "_sortIndicator_13rur_211", nd = "_sortIndex_13rur_215", rd = "_cell_13rur_226", sd = "_clickable_13rur_241", od = "_frozen_13rur_249", ld = "_selected_13rur_255", ad = "_resizeHandle_13rur_263", id = "_filterCell_13rur_281", cd = "_filterSelect_13rur_290", dd = "_filterInput_13rur_300", ud = "_empty_13rur_311", fd = "_loading_13rur_317", _d = "_visuallyHidden_13rur_331", pd = "_virtualScroller_13rur_340", md = "_spacerRow_13rur_345", hd = "_footerRow_13rur_350", gd = "_footerCell_13rur_354", bd = "_footerValue_13rur_361", Se = {
  grid: Cc,
  toolbar: Ac,
  picker: Dc,
  pickerButton: Mc,
  pickerPanel: Ic,
  pickerItem: zc,
  groupPanel: Lc,
  groupPanelActive: Rc,
  groupPanelText: Pc,
  groupChip: jc,
  groupRemove: Bc,
  groupRow: Fc,
  groupCell: Hc,
  groupToggle: Uc,
  editRow: qc,
  editCell: Kc,
  editInput: Wc,
  commandCell: Gc,
  commandButton: Vc,
  data: Yc,
  table: Xc,
  header: Zc,
  center: Jc,
  right: Qc,
  sortButton: ed,
  sortIndicator: td,
  sortIndex: nd,
  cell: rd,
  clickable: sd,
  frozen: od,
  selected: ld,
  resizeHandle: ad,
  filterCell: id,
  filterSelect: cd,
  filterInput: dd,
  empty: ud,
  loading: fd,
  visuallyHidden: _d,
  virtualScroller: pd,
  spacerRow: md,
  footerRow: hd,
  footerCell: gd,
  footerValue: bd
}, yd = {
  Ascending: "ascending",
  Descending: "descending"
};
function mo(e, t) {
  return e.filterable ?? t;
}
function xd(e, t) {
  return e.sortable ?? t;
}
function vd(e) {
  return e instanceof HTMLElement && !!e.closest("button, select, input, a, label, [data-dx-grid-resize]");
}
function HN({
  columns: e,
  rows: t,
  rowKey: n,
  allowSorting: r = !1,
  allowMultiColumnSorting: l = !1,
  showSortIndex: i = !1,
  allowFiltering: d = !1,
  filterCaseSensitivity: o = "CaseInsensitive",
  logicalOperator: a = "And",
  allowPaging: c = !1,
  pageSize: f = 10,
  pageSizeOptions: u,
  pageNumbersCount: x = 5,
  pagerPosition: h = "Bottom",
  showPagingSummary: g = !0,
  showPageSizeSelector: m = !0,
  selectionMode: b = "None",
  selectedKeys: p,
  onSelectionChange: _,
  showColumnPicker: y = !1,
  columnPickerText: N = "Columns",
  allowColumnResize: v = !1,
  allowColumnReorder: $ = !1,
  allowGrouping: S = !1,
  groupPanelText: T = "Drag a column header here to group",
  groupExpanded: A = !0,
  aggregates: C,
  showExportButton: D = !1,
  exportFileName: I = "grid-data",
  serverMode: k = !1,
  totalCount: O,
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
    () => e.map((H, U) => Vr(H, U))
  ), [At, lt] = q(
    () => new Set(
      e.map((H, U) => H.visible !== !1 ? Vr(H, U) : "").filter(Boolean)
    )
  ), [yt, Z] = q({}), [z, Y] = q(!1), [Q, ge] = q([]), [ae, Ee] = q(
    null
  ), [je, Ze] = q(null), [Qe, nt] = q({}), [Xt, re] = q(0), [Le, Nt] = q(j), Rt = oe(null), xt = oe(null), Ie = Oe(() => {
    const H = /* @__PURE__ */ new Map();
    return e.forEach((U, be) => H.set(Vr(U, be), U)), H;
  }, [e]), Ke = Oe(
    () => Ge.filter((H) => At.has(H)).map((H) => ({ key: H, column: Ie.get(H) })).filter(
      (H) => H.column != null
    ),
    [Ge, At, Ie]
  ), vt = Oe(
    () => wc(Ke, yt),
    [Ke, yt]
  ), $t = F !== "None" || we != null || X, at = Oe(() => {
    if (k) {
      const H = O ?? t.length, U = Math.max(1, Math.ceil(H / fe));
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
    return $c(
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
        logicalOperator: a,
        caseSensitivity: o,
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
    a,
    o,
    e,
    k,
    O,
    c
  ]), V = oe(E);
  ve(() => {
    V.current = E;
  });
  const me = Oe(
    () => [...G.entries()].filter(([, H]) => H.value !== "" && H.value !== void 0).map(([H, U]) => ({
      property: H,
      operator: U.operator ?? po(
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
      logicalOperator: a
    });
  }, [
    k,
    ne,
    fe,
    pe,
    me,
    a
  ]);
  const Ve = Oe(() => new Set(Q), [Q]), Ye = Oe(() => ae || (A ? fo(at.items, Q, nr) : /* @__PURE__ */ new Set()), [ae, A, at.items, Q]), Pt = Oe(
    () => vc(at.items, Q, e, Ye, nr),
    [at.items, Q, e, Ye]
  ), Xe = Oe(
    () => Q.length > 0 ? Ke.filter(
      (H) => H.column.property == null || !Ve.has(H.column.property)
    ) : Ke,
    [Ke, Q, Ve]
  ), K = (H) => {
    H !== "" && De(Nc(pe, H, { multi: l }));
  }, ee = (H, U) => {
    $e((be) => {
      const xe = new Map(be);
      return xe.set(H, U), xe;
    }), Ae(1);
  }, de = (H) => {
    Fe(H), Ae(1);
  }, Ne = (H) => {
    if (b === "None") return;
    const U = n(H), be = p ?? [];
    let xe;
    b === "Single" ? xe = be.length === 1 && be[0] === U ? [] : [U] : xe = be.includes(U) ? be.filter((et) => et !== U) : [...be, U], _?.(xe);
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
    if (xt.current = null, !H || !S) return;
    const be = Ie.get(H)?.property;
    be && (ge(
      (xe) => xe.includes(be) ? xe : [...xe, be]
    ), Ee(null));
  }, ze = (H) => {
    ge((U) => U.filter((be) => be !== H)), Ee(null);
  }, Tt = (H) => {
    Ee((U) => {
      const be = U ?? (A ? fo(at.items, Q, nr) : /* @__PURE__ */ new Set()), xe = new Set(be);
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
  }, wn = c && (h === "Top" || h === "TopAndBottom"), qr = c && (h === "Bottom" || h === "TopAndBottom"), ps = d && e.some((H) => mo(H, d)), ms = (H, U, be) => H.render ? H.render(U, { index: 0 }) : is(nr(U, H.property), H.format), hs = (H) => {
    const U = [Se.cell];
    return H.align === "center" && U.push(Se.center), H.align === "right" && U.push(Se.right), H.frozen && U.push(Se.frozen), U.join(" ");
  }, pn = k ? t : at.filtered, Kr = () => {
    const H = Tc(
      pn,
      Xe.map((et) => et.column)
    ), U = new Blob([`\uFEFF${H}`], {
      type: "text/csv;charset=utf-8"
    }), be = URL.createObjectURL(U), xe = document.createElement("a");
    xe.href = be, xe.download = `${I}.csv`, document.body.appendChild(xe), xe.click(), xe.remove(), URL.revokeObjectURL(be);
  }, mn = Pt.length, jt = Oe(() => {
    if (!P || mn === 0)
      return { start: 0, end: mn, top: 0, bottom: 0 };
    const H = 5, U = Math.max(
      0,
      Math.floor(Xt / L) - H
    ), be = Math.ceil(Le / L) + H * 2, xe = Math.min(mn, U + be), et = U * L, Dt = Math.max(0, (mn - xe) * L);
    return { start: U, end: xe, top: et, bottom: Dt };
  }, [P, mn, Xt, L, Le]), yr = Xe.length + ($t ? 1 : 0);
  return /* @__PURE__ */ M("div", { className: [Se.grid, he].filter(Boolean).join(" "), children: [
    wn && /* @__PURE__ */ s(
      Ms,
      {
        pageNumber: at.pageNumber,
        pageSize: at.pageSize,
        count: at.total,
        pageSizeOptions: u,
        pageNumbersCount: x,
        showSummary: g,
        showPageSizeSelector: m,
        ariaLabel: `${ye}${qr ? "Pagination (top)" : "Pagination"}`,
        onPageChange: Ae,
        onPageSizeChange: de
      }
    ),
    (S || X || y || D) && /* @__PURE__ */ M("div", { className: Se.toolbar, children: [
      S && /* @__PURE__ */ s(
        "div",
        {
          className: [
            Se.groupPanel,
            Q.length > 0 ? Se.groupPanelActive : ""
          ].filter(Boolean).join(" "),
          "data-dx-grid-group-panel": !0,
          onDragOver: S ? (H) => H.preventDefault() : void 0,
          onDrop: S ? mt : void 0,
          children: Q.length > 0 ? Q.map((H) => {
            const U = e.find((be) => be.property === H)?.title ?? H;
            return /* @__PURE__ */ M("span", { className: Se.groupChip, children: [
              U,
              ":",
              " ",
              /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: Se.groupRemove,
                  onClick: () => ze(H),
                  "aria-label": `Remove group by ${U}`,
                  children: /* @__PURE__ */ s(Me, { icon: "close", size: "sm" })
                }
              )
            ] }, H);
          }) : /* @__PURE__ */ s("span", { className: Se.groupPanelText, children: T })
        }
      ),
      X && /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          className: Se.pickerButton,
          onClick: _n,
          children: "Add row"
        }
      ),
      y && /* @__PURE__ */ M("div", { className: Se.picker, children: [
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: Se.pickerButton,
            "aria-haspopup": "menu",
            "aria-expanded": z,
            onClick: () => Y((H) => !H),
            children: N
          }
        ),
        z && /* @__PURE__ */ s(
          "div",
          {
            className: Se.pickerPanel,
            role: "menu",
            "aria-label": N,
            children: e.map((H, U) => {
              const be = Vr(H, U);
              return /* @__PURE__ */ M("label", { className: Se.pickerItem, children: [
                /* @__PURE__ */ s(
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
      D && /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          className: Se.pickerButton,
          onClick: Kr,
          children: "Export CSV"
        }
      )
    ] }),
    /* @__PURE__ */ M(
      "div",
      {
        className: [Se.data, P ? Se.virtualScroller : ""].filter(Boolean).join(" "),
        style: P ? { maxHeight: j } : void 0,
        onScroll: P ? (H) => {
          re(H.currentTarget.scrollTop), Nt(H.currentTarget.clientHeight);
        } : void 0,
        children: [
          /* @__PURE__ */ M(
            "table",
            {
              className: Se.table,
              role: "grid",
              "aria-rowcount": (P ? mn : at.total) + 1,
              "aria-label": W,
              "aria-busy": le || void 0,
              children: [
                /* @__PURE__ */ M("colgroup", { children: [
                  Xe.map(({ key: H, column: U }) => /* @__PURE__ */ s(
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
                  $t && /* @__PURE__ */ s("col", { style: { width: "8rem" } })
                ] }),
                /* @__PURE__ */ M("thead", { children: [
                  /* @__PURE__ */ M("tr", { children: [
                    Xe.map(({ key: H, column: U }) => {
                      const be = xd(U, r), xe = pe.find((wt) => wt.property === U.property), et = xe ? pe.indexOf(xe) + 1 : 0, Dt = U.align ?? "left";
                      return /* @__PURE__ */ M(
                        "th",
                        {
                          "aria-sort": be && xe ? yd[xe.sortOrder] : "none",
                          className: [
                            Se.header,
                            Dt === "center" ? Se.center : "",
                            Dt === "right" ? Se.right : "",
                            U.frozen ? Se.frozen : ""
                          ].filter(Boolean).join(" "),
                          style: U.frozen ? { left: vt[H] } : void 0,
                          scope: "col",
                          draggable: $ || S || void 0,
                          onDragStart: $ || S ? (wt) => {
                            wt.dataTransfer && (wt.dataTransfer.effectAllowed = "move"), it(H);
                          } : void 0,
                          onDragOver: $ ? (wt) => wt.preventDefault() : void 0,
                          onDrop: $ ? () => rt(H) : void 0,
                          children: [
                            be ? /* @__PURE__ */ M(
                              "button",
                              {
                                type: "button",
                                className: Se.sortButton,
                                onClick: () => U.property != null && K(U.property),
                                "aria-label": xe ? xe.sortOrder === "Ascending" ? `Sort ${U.title ?? U.property} descending` : `Sort ${U.title ?? U.property} ascending` : `Sort ${U.title ?? U.property} ascending`,
                                children: [
                                  U.title ?? U.property,
                                  xe && /* @__PURE__ */ s(
                                    "span",
                                    {
                                      className: Se.sortIndicator,
                                      "aria-hidden": "true",
                                      children: xe.sortOrder === "Ascending" ? "▲" : "▼"
                                    }
                                  ),
                                  et > 1 && i && /* @__PURE__ */ s("span", { className: Se.sortIndex, children: et })
                                ]
                              }
                            ) : U.title ?? U.property,
                            v && /* @__PURE__ */ s(
                              "span",
                              {
                                className: Se.resizeHandle,
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
                    $t && /* @__PURE__ */ s("th", { className: Se.header, scope: "col", children: "Actions" })
                  ] }),
                  ps && /* @__PURE__ */ s("tr", { children: Xe.map(({ key: H, column: U }) => {
                    if (!mo(U, d))
                      return /* @__PURE__ */ s("td", { className: Se.filterCell }, H);
                    const be = G.get(U.property ?? "");
                    return /* @__PURE__ */ M("td", { className: Se.filterCell, children: [
                      /* @__PURE__ */ M(
                        "label",
                        {
                          className: Se.visuallyHidden,
                          htmlFor: `df-${U.property}`,
                          children: [
                            "Filter ",
                            U.title ?? U.property
                          ]
                        }
                      ),
                      /* @__PURE__ */ s(
                        "select",
                        {
                          id: `df-${U.property}`,
                          className: Se.filterSelect,
                          value: be?.operator ?? po(U.type ?? "string"),
                          onChange: (xe) => ee(U.property ?? "", {
                            ...be,
                            operator: xe.target.value
                          }),
                          "aria-label": `${U.title ?? U.property} operator`,
                          children: ol.filter((xe) => xe !== "Custom").map(
                            (xe) => /* @__PURE__ */ s("option", { value: xe, children: xe }, xe)
                          )
                        }
                      ),
                      /* @__PURE__ */ s(
                        "input",
                        {
                          className: Se.filterInput,
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
                  je === "__new__" && /* @__PURE__ */ M("tr", { className: Se.editRow, children: [
                    Xe.map(({ key: H, column: U }) => /* @__PURE__ */ s("td", { className: Se.editCell, children: U.property && /* @__PURE__ */ s(
                      "input",
                      {
                        className: Se.editInput,
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
                    $t && /* @__PURE__ */ M("td", { className: Se.editCell, children: [
                      /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          className: Se.commandButton,
                          onClick: () => jn(),
                          children: "Save"
                        }
                      ),
                      /* @__PURE__ */ s(
                        "button",
                        {
                          type: "button",
                          className: Se.commandButton,
                          onClick: Tn,
                          children: "Cancel"
                        }
                      )
                    ] })
                  ] }),
                  jt.top > 0 && /* @__PURE__ */ s("tr", { className: Se.spacerRow, "aria-hidden": "true", children: /* @__PURE__ */ s(
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
                      return /* @__PURE__ */ s(
                        "tr",
                        {
                          className: Se.groupRow,
                          "aria-rowindex": xe,
                          children: /* @__PURE__ */ s("td", { colSpan: yr, className: Se.groupCell, children: /* @__PURE__ */ M(
                            "button",
                            {
                              type: "button",
                              className: Se.groupToggle,
                              "aria-expanded": Ct,
                              style: {
                                paddingInlineStart: `${H.group.level * 16}px`
                              },
                              onClick: () => Tt(H.group.key),
                              children: [
                                /* @__PURE__ */ s("span", { "aria-hidden": "true", children: Ct ? "▼" : "▶" }),
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
                          ue || b !== "None" ? Se.clickable : "",
                          wt ? Se.selected : "",
                          hn ? Se.editRow : ""
                        ].filter(Boolean).join(" "),
                        "aria-selected": b !== "None" ? wt : void 0,
                        onClick: ue || b !== "None" ? (Ct) => {
                          vd(Ct.target) || (ke(et), Ne(et));
                        } : void 0,
                        children: [
                          Xe.map(({ key: Ct, column: gt }) => /* @__PURE__ */ s(
                            "td",
                            {
                              className: hs(gt),
                              style: gt.frozen ? { left: vt[Ct] } : void 0,
                              children: hn && gt.property ? /* @__PURE__ */ s(
                                "input",
                                {
                                  className: Se.editInput,
                                  type: gt.type === "number" ? "number" : gt.type === "boolean" ? "checkbox" : "text",
                                  checked: gt.type === "boolean" ? !!Qe[gt.property] : void 0,
                                  value: gt.type === "boolean" ? void 0 : String(Qe[gt.property] ?? ""),
                                  onChange: (Jt) => nt((gs) => ({
                                    ...gs,
                                    [gt.property]: gt.type === "boolean" ? Jt.target.checked : Jt.target.value
                                  })),
                                  "aria-label": `${gt.title ?? gt.property} (edit)`
                                }
                              ) : ms(gt, et)
                            },
                            Ct
                          )),
                          $t && /* @__PURE__ */ s("td", { className: Se.commandCell, children: hn ? /* @__PURE__ */ M(pt, { children: [
                            /* @__PURE__ */ s(
                              "button",
                              {
                                type: "button",
                                className: Se.commandButton,
                                onClick: () => jn(et),
                                children: "Save"
                              }
                            ),
                            /* @__PURE__ */ s(
                              "button",
                              {
                                type: "button",
                                className: Se.commandButton,
                                onClick: Tn,
                                children: "Cancel"
                              }
                            )
                          ] }) : /* @__PURE__ */ M(pt, { children: [
                            F !== "None" && /* @__PURE__ */ s(
                              "button",
                              {
                                type: "button",
                                className: Se.commandButton,
                                onClick: () => Zt(et),
                                children: "Edit"
                              }
                            ),
                            we && /* @__PURE__ */ s(
                              "button",
                              {
                                type: "button",
                                className: Se.commandButton,
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
                  jt.bottom > 0 && /* @__PURE__ */ s("tr", { className: Se.spacerRow, "aria-hidden": "true", children: /* @__PURE__ */ s(
                    "td",
                    {
                      colSpan: yr,
                      style: { height: jt.bottom }
                    }
                  ) })
                ] }),
                C && C.length > 0 && /* @__PURE__ */ s("tfoot", { children: /* @__PURE__ */ M("tr", { className: Se.footerRow, children: [
                  Xe.map(({ key: H, column: U }) => {
                    const be = C.filter(
                      (xe) => xe.property === U.property
                    );
                    return /* @__PURE__ */ s(
                      "td",
                      {
                        className: [
                          Se.footerCell,
                          U.align === "right" ? Se.right : "",
                          U.align === "center" ? Se.center : ""
                        ].filter(Boolean).join(" "),
                        children: be.map((xe, et) => /* @__PURE__ */ M(
                          "div",
                          {
                            className: Se.footerValue,
                            children: [
                              xe.title ? `${xe.title}: ` : "",
                              is(
                                Ec(pn, xe, nr),
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
                  $t && /* @__PURE__ */ s("td", { className: Se.footerCell })
                ] }) })
              ]
            }
          ),
          at.items.length === 0 && !le && /* @__PURE__ */ s("div", { className: Se.empty, children: _e }),
          le && /* @__PURE__ */ s("div", { className: Se.loading, role: "status", children: "Loading…" })
        ]
      }
    ),
    qr && /* @__PURE__ */ s(
      Ms,
      {
        pageNumber: at.pageNumber,
        pageSize: at.pageSize,
        count: at.total,
        pageSizeOptions: u,
        pageNumbersCount: x,
        showSummary: g,
        showPageSizeSelector: m,
        ariaLabel: `${ye}${wn ? "Pagination (bottom)" : "Pagination"}`,
        onPageChange: Ae,
        onPageSizeChange: de
      }
    )
  ] });
}
const wd = "_wrap_avqds_1", kd = "_grid_avqds_7", Nd = "_stacked_avqds_13", Sd = "_item_avqds_19", Od = "_empty_avqds_25", $r = {
  wrap: wd,
  grid: kd,
  stacked: Nd,
  item: Sd,
  empty: Od
};
function UN({
  data: e,
  pageSize: t = 10,
  pageSizeOptions: n,
  wrapItems: r = !1,
  itemTemplate: l,
  emptyMessage: i = "No records found",
  emptyTemplate: d,
  loadingTemplate: o,
  isLoading: a = !1,
  showPageSizeSelector: c = !0,
  className: f,
  ariaLabel: u = "Data list"
}) {
  const [x, h] = q(1), [g, m] = q(t), b = e.length, p = Math.max(1, Math.ceil(b / g)), _ = Math.min(Math.max(1, x), p), y = Oe(() => {
    const v = (_ - 1) * g;
    return e.slice(v, v + g);
  }, [e, _, g]), N = r ? $r.grid : $r.stacked;
  return /* @__PURE__ */ M(
    "div",
    {
      className: [$r.wrap, f].filter(Boolean).join(" "),
      "aria-label": u,
      children: [
        a && o != null ? o : b === 0 ? d ?? /* @__PURE__ */ s("div", { className: $r.empty, children: i }) : /* @__PURE__ */ s("div", { className: N, children: y.map((v, $) => /* @__PURE__ */ s("div", { className: $r.item, children: l ? l(v, $) : String(v) }, $)) }),
        /* @__PURE__ */ s(
          Ms,
          {
            ariaLabel: `${u} Pagination`,
            pageNumber: _,
            pageSize: g,
            count: b,
            pageSizeOptions: n,
            showPageSizeSelector: c,
            onPageChange: h,
            onPageSizeChange: (v) => {
              m(v), h(1);
            }
          }
        )
      ]
    }
  );
}
const $d = "_label_1qfpw_1", Ed = {
  label: $d
}, qN = st(function({ className: t, children: n, ...r }, l) {
  return /* @__PURE__ */ s(
    "label",
    {
      ref: l,
      className: [Ed.label, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}), Td = "_textbox_oly89_1", Cd = "_invalid_oly89_37", Ad = "_xs_oly89_44", Dd = "_sm_oly89_50", Md = "_md_oly89_56", Id = "_lg_oly89_62", zd = "_xl_oly89_68", vs = {
  textbox: Td,
  invalid: Cd,
  xs: Ad,
  sm: Dd,
  md: Md,
  lg: Id,
  xl: zd
}, Ld = st(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    visible: l = !0,
    type: i = "text",
    ...d
  }, o) {
    return l === !1 ? null : /* @__PURE__ */ s(
      "input",
      {
        ref: o,
        type: i,
        "data-size": t,
        className: [
          vs.textbox,
          vs[t],
          n ? vs.invalid : null,
          r
        ].filter(Boolean).join(" "),
        "aria-invalid": n || void 0,
        ...d
      }
    );
  }
), Yr = Ld, Rd = "_checkbox_1bb6c_1", Pd = {
  checkbox: Rd
}, KN = st(
  function({ className: t, indeterminate: n = !1, ...r }, l) {
    const i = oe(null);
    return ve(() => {
      i.current && (i.current.indeterminate = n);
    }, [n]), /* @__PURE__ */ s(
      "input",
      {
        ref: (d) => {
          i.current = d, typeof l == "function" ? l(d) : l && (l.current = d);
        },
        type: "checkbox",
        className: [Pd.checkbox, t].filter(Boolean).join(" "),
        ...r
      }
    );
  }
), jd = {
  switch: "_switch_19gf1_1"
}, WN = st(function({ className: t, ...n }, r) {
  const [l, i] = q(
    !!n.defaultChecked
  ), d = n.checked ?? l;
  return /* @__PURE__ */ s(
    "input",
    {
      ref: r,
      type: "checkbox",
      role: "switch",
      checked: n.checked,
      defaultChecked: n.defaultChecked,
      "aria-checked": d,
      className: [jd.switch, t].filter(Boolean).join(" "),
      ...n,
      onChange: (o) => {
        n.checked === void 0 && i(o.target.checked), n.onChange?.(o);
      }
    }
  );
}), Bd = "_trigger_1jlxf_1", Fd = "_tooltip_1jlxf_7", Hd = "_top_1jlxf_34", Ud = "_right_1jlxf_40", qd = "_bottom_1jlxf_46", Kd = "_left_1jlxf_52", Wd = "_arrow_1jlxf_58", Gd = "_floating_1jlxf_70", Fn = {
  trigger: Bd,
  tooltip: Fd,
  "se-tooltip-in": "_se-tooltip-in_1jlxf_1",
  top: Hd,
  right: Ud,
  bottom: qd,
  left: Kd,
  arrow: Wd,
  floating: Gd,
  "se-floating-tooltip-in": "_se-floating-tooltip-in_1jlxf_1"
}, Xr = 8;
function Vd(e, t) {
  switch (t) {
    case "bottom":
      return {
        top: e.bottom + Xr,
        left: e.left + e.width / 2,
        transform: "translate(-50%, 0)"
      };
    case "left":
      return {
        top: e.top + e.height / 2,
        left: e.left - Xr,
        transform: "translate(-100%, -50%)"
      };
    case "right":
      return {
        top: e.top + e.height / 2,
        left: e.right + Xr,
        transform: "translate(0, -50%)"
      };
    default:
      return {
        top: e.top - Xr,
        left: e.left + e.width / 2,
        transform: "translate(-50%, -100%)"
      };
  }
}
function GN({
  content: e,
  children: t,
  placement: n = "top",
  delayMs: r = 300,
  durationMs: l,
  targetSelector: i,
  className: d
}) {
  const o = ot(), a = oe(null), c = oe(null), f = oe(() => {
  }), [u, x] = q(!1), [h, g] = q(null), m = () => {
    a.current !== null && (window.clearTimeout(a.current), a.current = null);
  }, b = () => {
    m(), a.current = window.setTimeout(() => {
      a.current = null, x(!0);
    }, r);
  }, p = () => {
    m(), x(!1);
  };
  if (ve(() => () => m(), []), ve(() => {
    if (!u || l == null) return;
    const y = window.setTimeout(() => x(!1), l);
    return () => window.clearTimeout(y);
  }, [u, l]), ve(() => {
    if (i || !u) return;
    const y = (N) => {
      N.key === "Escape" && p();
    };
    return window.addEventListener("keydown", y), () => window.removeEventListener("keydown", y);
  }, [i, u]), ve(() => {
    if (!i) return;
    let y = null, N = null;
    const v = () => {
      y !== null && (window.clearTimeout(y), y = null);
    }, $ = () => {
      v(), N = null, g(null);
    };
    f.current = $;
    const S = (k) => {
      v(), N = k, y = window.setTimeout(() => {
        y = null, g(k);
      }, r);
    }, T = (k) => k instanceof Element ? k.closest(i) : null, A = (k) => {
      const O = T(k.target);
      !O || O === N || S(O);
    }, C = (k) => {
      const O = T(k.target);
      if (!O || O !== N) return;
      const E = k.relatedTarget;
      E instanceof Element && O.contains(E) || $();
    }, D = (k) => {
      k.key === "Escape" && $();
    }, I = () => $();
    return document.addEventListener("mouseover", A), document.addEventListener("mouseout", C), document.addEventListener("focusin", A), document.addEventListener("focusout", C), document.addEventListener("keydown", D), document.addEventListener("scroll", I, !0), window.addEventListener("resize", I), () => {
      v(), document.removeEventListener("mouseover", A), document.removeEventListener("mouseout", C), document.removeEventListener("focusin", A), document.removeEventListener("focusout", C), document.removeEventListener("keydown", D), document.removeEventListener("scroll", I, !0), window.removeEventListener("resize", I), N = null, g(null);
    };
  }, [i, r]), ve(() => {
    if (!i || h === null || l == null) return;
    const y = window.setTimeout(() => f.current(), l);
    return () => window.clearTimeout(y);
  }, [i, h, l]), Ds(() => {
    const y = h;
    if (!y) return;
    const N = y.getAttribute("aria-describedby");
    return y.setAttribute(
      "aria-describedby",
      [N, o].filter(Boolean).join(" ")
    ), () => {
      N == null ? y.removeAttribute("aria-describedby") : y.setAttribute("aria-describedby", N);
    };
  }, [h, o]), Ds(() => {
    const y = c.current, N = h;
    !y || !N || Object.assign(
      y.style,
      Vd(N.getBoundingClientRect(), n)
    );
  }, [h, n]), i)
    return h ? /* @__PURE__ */ M(
      "span",
      {
        ref: c,
        role: "tooltip",
        id: o,
        className: [
          Fn.tooltip,
          Fn[n],
          Fn.floating,
          d
        ].filter(Boolean).join(" "),
        children: [
          e,
          /* @__PURE__ */ s("span", { className: Fn.arrow, "aria-hidden": "true" })
        ]
      }
    ) : null;
  const _ = qt(t) ? Ks(t, {
    "aria-describedby": [
      t.props["aria-describedby"],
      u ? o : null
    ].filter((y) => typeof y == "string").join(" ") || void 0
  }) : t;
  return (
    // Presentational hit-area: hover/focus handlers here, semantics and
    // keyboard interaction live on the child trigger.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ M(
      "span",
      {
        className: [Fn.trigger, d].filter(Boolean).join(" "),
        onMouseEnter: b,
        onMouseLeave: p,
        onFocus: b,
        onBlur: p,
        children: [
          _,
          u && /* @__PURE__ */ M(
            "span",
            {
              role: "tooltip",
              id: o,
              className: [Fn.tooltip, Fn[n]].filter(Boolean).join(" "),
              children: [
                e,
                /* @__PURE__ */ s("span", { className: Fn.arrow, "aria-hidden": "true" })
              ]
            }
          )
        ]
      }
    )
  );
}
const Yd = "_dialog_1t7pw_1", Xd = "_sm_1t7pw_104", Zd = "_resizable_1t7pw_110", Jd = "_md_1t7pw_113", Qd = "_lg_1t7pw_117", eu = "_header_1t7pw_121", tu = "_title_1t7pw_132", nu = "_description_1t7pw_139", ru = "_close_1t7pw_146", su = "_body_1t7pw_176", ou = "_footer_1t7pw_188", gn = {
  dialog: Yd,
  "se-dialog-in": "_se-dialog-in_1t7pw_1",
  "side-right": "_side-right_1t7pw_63",
  "side-left": "_side-left_1t7pw_69",
  "side-top": "_side-top_1t7pw_75",
  "side-bottom": "_side-bottom_1t7pw_81",
  "no-mask": "_no-mask_1t7pw_89",
  sm: Xd,
  resizable: Zd,
  md: Jd,
  lg: Qd,
  header: eu,
  title: tu,
  description: nu,
  close: ru,
  body: su,
  footer: ou
};
function cl({
  open: e,
  onClose: t,
  title: n,
  description: r,
  children: l,
  footer: i,
  size: d = "md",
  width: o,
  height: a,
  closeOnOverlayClick: c = !0,
  closeOnEsc: f = !0,
  resizable: u = !1,
  side: x = null,
  showCloseButton: h = !0,
  showMask: g = !0,
  canClose: m,
  className: b
}) {
  const p = oe(null), _ = ot(), y = ot(), N = oe(t);
  ve(() => {
    N.current = t;
  });
  const v = oe(m);
  ve(() => {
    v.current = m;
  });
  const $ = oe(f);
  ve(() => {
    $.current = f;
  });
  const S = oe(!1), T = oe(!1), A = B(() => {
    if (S.current) return;
    const I = v.current?.();
    if (I instanceof Promise) {
      I.then((k) => {
        k && !S.current && (S.current = !0, N.current());
      });
      return;
    }
    I !== !1 && (S.current = !0, N.current());
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
      const O = k.indexOf(document.activeElement);
      if (I.shiftKey) {
        if (O <= 0) {
          I.preventDefault();
          const E = k[k.length - 1];
          E && E.focus();
        }
      } else if (O === -1 || O === k.length - 1) {
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
      } else !e && I.open && (T.current = S.current, S.current = !1, I.close());
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
        x ? gn[`side-${x}`] : null,
        g === !1 ? gn["no-mask"] : null,
        b
      ].filter(Boolean).join(" "),
      style: {
        width: o ?? void 0,
        // Explicit width escapes the size tier's max-width cap.
        maxWidth: o != null ? "none" : void 0,
        height: a ?? void 0
      },
      onClose: C,
      onClick: (I) => {
        I.target === p.current && c && A();
      },
      "aria-modal": "true",
      "aria-labelledby": n ? _ : void 0,
      "aria-describedby": r ? y : void 0,
      onKeyDown: D,
      children: [
        n && /* @__PURE__ */ M("header", { className: gn.header, children: [
          /* @__PURE__ */ M("div", { children: [
            /* @__PURE__ */ s("h2", { id: _, className: gn.title, children: n }),
            r && /* @__PURE__ */ s("p", { id: y, className: gn.description, children: r })
          ] }),
          h !== !1 && /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: gn.close,
              onClick: () => {
                A();
              },
              "aria-label": "Close dialog",
              children: /* @__PURE__ */ s(Me, { icon: "close", size: "sm" })
            }
          )
        ] }),
        l && /* @__PURE__ */ s("div", { className: gn.body, children: l }),
        i && /* @__PURE__ */ s("footer", { className: gn.footer, children: i })
      ]
    }
  );
}
const lu = "_typography_1jy8x_1", au = "_h1_1jy8x_39", iu = "_h2_1jy8x_45", cu = "_h3_1jy8x_51", du = "_h4_1jy8x_57", uu = "_h5_1jy8x_63", fu = "_h6_1jy8x_69", _u = "_button_1jy8x_99", pu = "_caption_1jy8x_106", mu = "_overline_1jy8x_112", ws = {
  typography: lu,
  "display-1": "_display-1_1jy8x_8",
  "display-2": "_display-2_1jy8x_13",
  "display-3": "_display-3_1jy8x_18",
  "display-4": "_display-4_1jy8x_23",
  "display-5": "_display-5_1jy8x_28",
  "display-6": "_display-6_1jy8x_33",
  h1: au,
  h2: iu,
  h3: cu,
  h4: du,
  h5: uu,
  h6: fu,
  "subtitle-1": "_subtitle-1_1jy8x_75",
  "subtitle-2": "_subtitle-2_1jy8x_81",
  "body-1": "_body-1_1jy8x_87",
  "body-2": "_body-2_1jy8x_92",
  button: _u,
  caption: pu,
  overline: mu,
  "align-left": "_align-left_1jy8x_121",
  "align-center": "_align-center_1jy8x_125",
  "align-right": "_align-right_1jy8x_129",
  "align-justify": "_align-justify_1jy8x_133"
}, hu = {
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
}, gu = {
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
}, bu = {
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
}, yu = {
  Left: "align-left",
  Right: "align-right",
  Center: "align-center",
  Justify: "align-justify",
  Start: "align-left",
  End: "align-right",
  JustifyAll: "align-justify"
}, dl = st(function({
  textStyle: t = "Body1",
  tagName: n = "Auto",
  textAlign: r,
  text: l,
  visible: i = !0,
  className: d,
  children: o,
  ...a
}, c) {
  if (i === !1) return null;
  const f = n === "Auto" ? hu[t] : bu[n];
  return /* @__PURE__ */ s(
    f,
    {
      ref: c,
      className: [
        ws.typography,
        ws[gu[t]],
        r ? ws[yu[r]] : null,
        d
      ].filter(Boolean).join(" "),
      ...a,
      children: l ?? o
    }
  );
}), ul = or(null);
function VN() {
  const e = Pn(ul);
  if (!e)
    throw new Error("useDialog must be used within a <DialogProvider>");
  return e;
}
function YN({ children: e }) {
  const [t, n] = q([]), [, r] = q(0), l = oe(0), i = () => (l.current += 1, l.current), d = oe([]);
  d.current = t;
  const o = (x) => {
    const h = d.current[0];
    h && (h.kind === "confirm" ? h.resolve(!!x) : h.kind === "alert" ? h.resolve() : h.resolve(x), n((g) => g.slice(1)));
  }, a = Oe(
    () => ({
      confirm: (x = {}) => new Promise((h) => {
        n((g) => [
          ...g,
          { seq: i(), kind: "confirm", options: x, resolve: h }
        ]);
      }),
      alert: (x = {}) => new Promise((h) => {
        n((g) => [
          ...g,
          { seq: i(), kind: "alert", options: x, resolve: h }
        ]);
      }),
      open: (x = {}) => new Promise((h) => {
        n((g) => [
          ...g,
          { seq: i(), kind: "custom", options: x, resolve: h }
        ]);
      }),
      openSide: ({ position: x, showMask: h = !0, ...g }) => new Promise((m) => {
        n((b) => [
          ...b,
          {
            seq: i(),
            kind: "custom",
            options: { ...g, side: x, showMask: h },
            resolve: m
          }
        ]);
      }),
      close: (x) => o(x),
      closeAll: () => {
        n((x) => (x.forEach((h) => {
          h.kind === "confirm" ? h.resolve(!1) : h.kind === "alert" ? h.resolve() : h.resolve(void 0);
        }), []));
      },
      refresh: () => r((x) => x + 1)
    }),
    // settleHead reads the live queue ref, so the empty dep list is safe.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  ), c = t[0];
  function f(x) {
    c && (c.kind === "confirm" ? c.resolve(!!x) : c.kind === "alert" ? c.resolve() : c.resolve(x), n((h) => h.slice(1)));
  }
  const u = c?.kind === "custom" ? c.options : null;
  return /* @__PURE__ */ M(ul.Provider, { value: a, children: [
    e,
    /* @__PURE__ */ s(
      cl,
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
          /* @__PURE__ */ s(yn, { variant: "text", onClick: () => f(!1), children: c.options.cancelText ?? "Cancel" }),
          /* @__PURE__ */ s(
            yn,
            {
              severity: c.options.tone ?? "primary",
              onClick: () => f(!0),
              children: c.options.confirmText ?? "Confirm"
            }
          )
        ] }) : c?.kind === "custom" ? u?.footer ?? /* @__PURE__ */ s(yn, { variant: "text", onClick: () => f(void 0), children: "Close" }) : /* @__PURE__ */ s(yn, { onClick: () => f(!0), children: c?.kind === "alert" ? c.options.okText ?? "OK" : "OK" }),
        children: c?.kind === "custom" ? u?.content : c?.options.message != null && /* @__PURE__ */ s(dl, { textStyle: "Body1", children: c.options.message })
      },
      c?.seq ?? 0
    )
  ] });
}
const xu = "_viewport_11t1p_1", vu = "_topLeft_11t1p_13", wu = "_topRight_11t1p_20", ku = "_bottomLeft_11t1p_25", Nu = "_toast_11t1p_30", Su = "_leaving_11t1p_61", Ou = "_info_11t1p_77", $u = "_success_11t1p_86", Eu = "_warning_11t1p_95", Tu = "_danger_11t1p_104", Cu = "_content_11t1p_113", Au = "_title_11t1p_118", Du = "_description_11t1p_141", Mu = "_dismiss_11t1p_148", Iu = "_actions_11t1p_169", zu = "_action_11t1p_169", Lu = "_cancel_11t1p_177", Ru = "_progress_11t1p_215", en = {
  viewport: xu,
  topLeft: vu,
  topRight: wu,
  bottomLeft: ku,
  toast: Nu,
  "se-toast-in": "_se-toast-in_11t1p_1",
  leaving: Su,
  "se-toast-out": "_se-toast-out_11t1p_1",
  info: Ou,
  success: $u,
  warning: Eu,
  danger: Tu,
  content: Cu,
  title: Au,
  description: Du,
  dismiss: Mu,
  actions: Iu,
  action: zu,
  cancel: Lu,
  progress: Ru,
  "se-toast-progress": "_se-toast-progress_11t1p_1"
}, fl = or(null);
function XN() {
  const e = Pn(fl);
  if (!e)
    throw new Error("useToast must be used within a <ToastProvider>");
  return e;
}
const Pu = 200, ju = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function ZN({
  children: e,
  durationMs: t = 4e3,
  position: n = "bottom-right",
  pauseOnHover: r = !0,
  className: l
}) {
  const [i, d] = q([]), [o, a] = q(!1), c = oe([]), f = oe(/* @__PURE__ */ new Map()), u = oe(!1), x = oe(0), h = (O) => {
    u.current = O, a(O);
  }, g = B((O) => {
    const E = f.current.get(O);
    E && (window.clearTimeout(E.timeoutId), E.remaining = Math.max(
      0,
      E.remaining - (Date.now() - E.startedAt)
    ));
  }, []), m = B((O) => {
    const E = f.current.get(O);
    E && (window.clearTimeout(E.timeoutId), f.current.delete(O));
  }, []), b = B(
    (O) => {
      m(O), d((E) => {
        const P = E.filter((L) => L.id !== O);
        return c.current = P, P;
      });
    },
    [m]
  ), p = B(
    (O) => {
      const E = c.current.find((P) => P.id === O);
      !E || E.leaving || (E.onAutoClose?.(), b(O));
    },
    [b]
  ), _ = B(
    (O) => {
      const E = f.current.get(O);
      !E || E.remaining <= 0 || (E.startedAt = Date.now(), E.timeoutId = window.setTimeout(() => p(O), E.remaining));
    },
    [p]
  ), y = B(() => {
    u.current || f.current.forEach((O, E) => g(E)), h(!0);
  }, [g]), N = B(() => {
    f.current.forEach((O, E) => _(E)), h(!1);
  }, [_]);
  ve(() => {
    if (!r) return;
    const O = () => {
      document.hidden ? y() : N();
    };
    return document.addEventListener("visibilitychange", O), () => document.removeEventListener("visibilitychange", O);
  }, [r, y, N]);
  const v = B(
    (O) => {
      const E = c.current.find((P) => P.id === O);
      !E || E.leaving || (E.onDismiss?.(), d((P) => {
        const L = P.map(
          (j) => j.id === O ? { ...j, leaving: !0 } : j
        );
        return c.current = L, L;
      }), window.setTimeout(() => b(O), Pu));
    },
    [b]
  ), $ = B(
    (O) => {
      if (O.durationMs <= 0) return;
      const E = {
        remaining: O.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      f.current.set(O.id, E), u.current || _(O.id);
    },
    [_]
  ), S = B(
    (O) => {
      const E = c.current.find((L) => L.id === O.id), P = {
        id: O.id ?? ++x.current,
        title: O.title,
        description: O.description,
        severity: O.severity ?? "info",
        durationMs: O.durationMs ?? t,
        action: O.action,
        cancel: O.cancel,
        dismissible: O.dismissible ?? !0,
        closeOnClick: O.closeOnClick ?? !1,
        payload: O.payload,
        click: O.click,
        showProgress: O.showProgress ?? !1,
        position: O.position ?? n,
        onDismiss: O.onDismiss,
        onAutoClose: O.onAutoClose
      };
      d((L) => {
        const j = E ? L.map(
          (F) => F.id === P.id ? { ...P, leaving: !1 } : F
        ) : [...L, P];
        return c.current = j, j;
      }), E && m(P.id), $(P);
    },
    [t, n, $, m]
  ), T = B(
    (O) => {
      S({
        severity: O.severity ?? "info",
        title: O.summary ?? O.summaryContent,
        description: O.detail ?? O.detailContent,
        durationMs: O.duration,
        click: O.click,
        closeOnClick: O.closeOnClick,
        payload: O.payload
      });
    },
    [S]
  ), A = B(
    (O) => (E, P) => T({ severity: O, summary: E, detail: P }),
    [T]
  ), C = Oe(
    () => ({
      toast: S,
      notify: T,
      notifyInfo: A("info"),
      notifySuccess: A("success"),
      notifyWarning: A("warning"),
      notifyError: A("danger")
    }),
    [S, T, A]
  ), D = Oe(
    () => Array.from(/* @__PURE__ */ new Set([n, ...i.map((O) => O.position)])),
    [n, i]
  ), I = r ? y : void 0, k = r ? N : void 0;
  return /* @__PURE__ */ M(fl.Provider, { value: C, children: [
    e,
    D.map((O) => /* @__PURE__ */ s(
      "div",
      {
        className: [en.viewport, en[ju[O]], l].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: I,
        onMouseLeave: k,
        children: i.filter((E) => E.position === O).map((E) => /* @__PURE__ */ M(
          "div",
          {
            role: E.severity === "danger" ? "alert" : "status",
            "data-paused": o ? "true" : "false",
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
                /* @__PURE__ */ s("div", { className: en.title, children: E.title }),
                E.description && /* @__PURE__ */ s("div", { className: en.description, children: E.description }),
                (E.action || E.cancel) && /* @__PURE__ */ M("div", { className: en.actions, children: [
                  E.action && /* @__PURE__ */ s(
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
                  E.cancel && /* @__PURE__ */ s(
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
              E.dismissible && /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: en.dismiss,
                  onClick: () => v(E.id),
                  "aria-label": "Dismiss notification",
                  children: /* @__PURE__ */ s(Me, { icon: "close", size: "sm" })
                }
              ),
              E.showProgress && E.durationMs > 0 && /* @__PURE__ */ s(
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
      O
    ))
  ] });
}
function ho(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Bu(e) {
  if (Array.isArray(e)) return e;
}
function Fu(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, l, i, d, o = [], a = !0, c = !1;
    try {
      if (i = (n = n.call(e)).next, t !== 0) for (; !(a = (r = i.call(n)).done) && (o.push(r.value), o.length !== t); a = !0) ;
    } catch (f) {
      c = !0, l = f;
    } finally {
      try {
        if (!a && n.return != null && (d = n.return(), Object(d) !== d)) return;
      } finally {
        if (c) throw l;
      }
    }
    return o;
  }
}
function Hu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Uu(e, t) {
  return Bu(e) || Fu(e, t) || qu(e, t) || Hu();
}
function qu(e, t) {
  if (e) {
    if (typeof e == "string") return ho(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ho(e, t) : void 0;
  }
}
const _l = Object.entries, go = Object.setPrototypeOf, Ku = Object.isFrozen, Wu = Object.getPrototypeOf, Gu = Object.getOwnPropertyDescriptor;
let kt = Object.freeze, Ot = Object.seal, hr = Object.create, pl = typeof Reflect < "u" && Reflect, Is = pl.apply, zs = pl.construct;
kt || (kt = function(t) {
  return t;
});
Ot || (Ot = function(t) {
  return t;
});
Is || (Is = function(t, n) {
  for (var r = arguments.length, l = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) l[i - 2] = arguments[i];
  return t.apply(n, l);
});
zs || (zs = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++) r[l - 1] = arguments[l];
  return new t(...r);
});
const rr = bt(Array.prototype.forEach), Vu = bt(Array.prototype.lastIndexOf), bo = bt(Array.prototype.pop), Er = bt(Array.prototype.push), Yu = bt(Array.prototype.splice), gr = Array.isArray, Br = bt(String.prototype.toLowerCase), ks = bt(String.prototype.toString), yo = bt(String.prototype.match), Tr = bt(String.prototype.replace), xo = bt(String.prototype.indexOf), Xu = bt(String.prototype.trim), Zu = bt(Number.prototype.toString), Ju = bt(Boolean.prototype.toString), vo = typeof BigInt > "u" ? null : bt(BigInt.prototype.toString), wo = typeof Symbol > "u" ? null : bt(Symbol.prototype.toString), Vt = bt(Object.prototype.hasOwnProperty), Cr = bt(Object.prototype.toString), zt = bt(RegExp.prototype.test), Hn = Qu(TypeError);
function bt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++) r[l - 1] = arguments[l];
    return Is(e, t, r);
  };
}
function Qu(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return zs(e, n);
  };
}
function qe(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Br;
  if (go && go(e, null), !gr(t)) return e;
  let r = t.length;
  for (; r--; ) {
    let l = t[r];
    if (typeof l == "string") {
      const i = n(l);
      i !== l && (Ku(t) || (t[r] = i), l = i);
    }
    e[l] = !0;
  }
  return e;
}
function ef(e) {
  for (let t = 0; t < e.length; t++) Vt(e, t) || (e[t] = null);
  return e;
}
function sn(e) {
  const t = hr(null);
  for (const r of _l(e)) {
    var n = Uu(r, 2);
    const l = n[0], i = n[1];
    Vt(e, l) && (gr(i) ? t[l] = ef(i) : i && typeof i == "object" && i.constructor === Object ? t[l] = sn(i) : t[l] = i);
  }
  return t;
}
function tf(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Zu(e);
    case "boolean":
      return Ju(e);
    case "bigint":
      return vo ? vo(e) : "0";
    case "symbol":
      return wo ? wo(e) : "Symbol()";
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
    const r = Gu(e, t);
    if (r) {
      if (r.get) return bt(r.get);
      if (typeof r.value == "function") return bt(r.value);
    }
    e = Wu(e);
  }
  function n() {
    return null;
  }
  return n;
}
function nf(e) {
  try {
    return zt(e, ""), !0;
  } catch {
    return !1;
  }
}
const ko = kt([
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
]), Ns = kt([
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
]), Ss = kt([
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
]), rf = kt([
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
]), Os = kt([
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
]), sf = kt([
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
]), No = kt(["#text"]), So = kt([
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
]), $s = kt([
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
]), Oo = kt([
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
]), Zr = kt([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]), of = Ot(/{{[\w\W]*|^[\w\W]*}}/g), lf = Ot(/<%[\w\W]*|^[\w\W]*%>/g), af = Ot(/\${[\w\W]*/g), cf = Ot(/^data-[\-\w.\u00B7-\uFFFF]+$/), df = Ot(/^aria-[\-\w]+$/), $o = Ot(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), uf = Ot(/^(?:\w+script|data):/i), ff = Ot(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), _f = Ot(/^html$/i), pf = Ot(/^[a-z][.\w]*(-[.\w]+)+$/i), Eo = Ot(/<[/\w!]/g), To = Ot(/<[/\w]/g), mf = Ot(/<\/no(script|embed|frames)/i), hf = Ot(/\/>/i), tn = {
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
}, ml = [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
], gf = kt(qe({}, ml)), bf = (function() {
  const e = {};
  return rr(ml, (t) => {
    e[t] = Ot(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), kt(e);
})(), yf = function() {
  return typeof window > "u" ? null : window;
}, xf = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function") return null;
  let r = null;
  const l = "data-tt-policy-suffix";
  n && n.hasAttribute(l) && (r = n.getAttribute(l));
  const i = "dompurify" + (r ? "#" + r : "");
  try {
    return t.createPolicy(i, {
      createHTML(d) {
        return d;
      },
      createScriptURL(d) {
        return d;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
}, Co = function() {
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
}, Es = function(t, n, r) {
  const l = Vt(t, n) ? t[n] : void 0;
  return l && typeof l == "object" ? sn(l) : r();
};
function hl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : yf();
  const t = (se) => hl(se);
  if (t.version = "3.4.16", t.removed = [], !e || !e.document || e.document.nodeType !== tn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, l = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, d = e.Node, o = e.Element, a = e.NodeFilter;
  e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const c = e.DOMParser, f = e.trustedTypes, u = o.prototype, x = fn(u, "cloneNode"), h = fn(u, "remove"), g = fn(u, "removeAttributeNode"), m = fn(u, "nextSibling"), b = fn(u, "childNodes"), p = fn(u, "parentNode"), _ = fn(u, "shadowRoot"), y = fn(u, "attributes"), N = d && d.prototype ? fn(d.prototype, "nodeType") : null, v = d && d.prototype ? fn(d.prototype, "nodeName") : null, $ = d && d.prototype ? fn(d.prototype, "ownerDocument") : null, S = function(w) {
    return N ? N(w) : w.nodeType;
  }, T = function(w) {
    return v ? v(w) : w.nodeName;
  };
  if (typeof i == "function") {
    const se = n.createElement("template");
    se.content && se.content.ownerDocument && (n = se.content.ownerDocument);
  }
  let A, C = "", D, I = !1, k = 0;
  const O = function() {
    if (k > 0) throw Hn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, E = function(w) {
    O(), k++;
    try {
      return A.createHTML(w);
    } finally {
      k--;
    }
  }, P = function(w) {
    O(), k++;
    try {
      return A.createScriptURL(w);
    } finally {
      k--;
    }
  }, L = function() {
    return I || (D = xf(f, l), I = !0), D;
  }, j = n, F = j.implementation, X = j.createNodeIterator, ie = j.createDocumentFragment, te = j.getElementsByTagName, we = r.importNode;
  let le = Co();
  t.isSupported = typeof _l == "function" && typeof p == "function" && F && F.createHTMLDocument !== void 0;
  const _e = of, W = lf, he = af, ue = cf, ye = df, pe = uf, De = ff, G = pf;
  let $e = $o, ne = null;
  const Ae = qe({}, [
    ...ko,
    ...Ns,
    ...Ss,
    ...Os,
    ...No
  ]);
  let fe = null;
  const Fe = qe({}, [
    ...So,
    ...$s,
    ...Oo,
    ...Zr
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
  ], ks), ke = kt([
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
    (!w || typeof w != "object") && (w = {}), w = sn(w), rt = Et.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? mt : w.PARSER_MEDIA_TYPE, ze = rt === "application/xhtml+xml" ? ks : Br, ne = Un(w, "ALLOWED_TAGS", Ae, { transform: ze }), fe = Un(w, "ALLOWED_ATTR", Fe, { transform: ze }), de = Un(w, "ALLOWED_NAMESPACES", Ne, { transform: ks }), me = Un(w, "ADD_URI_SAFE_ATTR", Ve, {
      transform: ze,
      base: Ve
    }), at = Un(w, "ADD_DATA_URI_TAGS", V, {
      transform: ze,
      base: V
    }), vt = Un(w, "FORBID_CONTENTS", $t, { transform: ze }), Je = Un(w, "FORBID_TAGS", sn({}), { transform: ze }), At = Un(w, "FORBID_ATTR", sn({}), { transform: ze }), Ke = Vt(w, "USE_PROFILES") ? w.USE_PROFILES && typeof w.USE_PROFILES == "object" ? sn(w.USE_PROFILES) : w.USE_PROFILES : !1, yt = w.ALLOW_ARIA_ATTR !== !1, Z = w.ALLOW_DATA_ATTR !== !1, z = w.ALLOW_UNKNOWN_PROTOCOLS || !1, Y = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Q = w.SAFE_FOR_TEMPLATES || !1, ge = w.SAFE_FOR_XML !== !1, ae = w.WHOLE_DOCUMENT || !1, nt = w.RETURN_DOM || !1, Xt = w.RETURN_DOM_FRAGMENT || !1, re = w.RETURN_TRUSTED_TYPE || !1, Qe = w.FORCE_BODY || !1, Le = w.SANITIZE_DOM !== !1, Nt = w.SANITIZE_NAMED_PROPS || !1, xt = w.KEEP_CONTENT !== !1, Ie = w.IN_PLACE || !1, $e = nf(w.ALLOWED_URI_REGEXP) ? w.ALLOWED_URI_REGEXP : $o, K = typeof w.NAMESPACE == "string" ? w.NAMESPACE : Xe, Ce = Es(w, "MATHML_TEXT_INTEGRATION_POINTS", () => qe({}, ke)), Be = Es(w, "HTML_INTEGRATION_POINTS", () => qe({}, We));
    const R = Es(w, "CUSTOM_ELEMENT_HANDLING", () => hr(null));
    if (Ge = hr(null), Vt(R, "tagNameCheck") && _n(R.tagNameCheck) && (Ge.tagNameCheck = R.tagNameCheck), Vt(R, "attributeNameCheck") && _n(R.attributeNameCheck) && (Ge.attributeNameCheck = R.attributeNameCheck), Vt(R, "allowCustomizedBuiltInElements") && typeof R.allowCustomizedBuiltInElements == "boolean" && (Ge.allowCustomizedBuiltInElements = R.allowCustomizedBuiltInElements), Ot(Ge), Q && (Z = !1), Xt && (nt = !0), Ke && (ne = qe({}, No), fe = hr(null), Ke.html === !0 && (qe(ne, ko), qe(fe, So)), Ke.svg === !0 && (qe(ne, Ns), qe(fe, $s), qe(fe, Zr)), Ke.svgFilters === !0 && (qe(ne, Ss), qe(fe, $s), qe(fe, Zr)), Ke.mathMl === !0 && (qe(ne, Os), qe(fe, Oo), qe(fe, Zr))), lt.tagCheck = null, lt.attributeCheck = null, Vt(w, "ADD_TAGS") && (typeof w.ADD_TAGS == "function" ? lt.tagCheck = w.ADD_TAGS : gr(w.ADD_TAGS) && (ne === Ae && (ne = sn(ne)), qe(ne, w.ADD_TAGS, ze))), Vt(w, "ADD_ATTR") && (typeof w.ADD_ATTR == "function" ? lt.attributeCheck = w.ADD_ATTR : gr(w.ADD_ATTR) && (fe === Fe && (fe = sn(fe)), qe(fe, w.ADD_ATTR, ze))), Vt(w, "ADD_FORBID_CONTENTS") && gr(w.ADD_FORBID_CONTENTS) && (vt === $t && (vt = sn(vt)), qe(vt, w.ADD_FORBID_CONTENTS, ze)), xt && (ne["#text"] = !0), ae && qe(ne, [
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
    ...Ns,
    ...Ss,
    ...rf
  ]), wn = qe({}, [...Os, ...sf]), qr = function(w, R, J) {
    return R.namespaceURI === Xe ? w === "svg" : R.namespaceURI === Ye ? w === "svg" && (J === "annotation-xml" || Ce[J]) : !!jn[w];
  }, ps = function(w, R, J) {
    return R.namespaceURI === Xe ? w === "math" : R.namespaceURI === Pt ? w === "math" && Be[J] : !!wn[w];
  }, ms = function(w, R, J) {
    return R.namespaceURI === Pt && !Be[J] || R.namespaceURI === Ye && !Ce[J] ? !1 : !wn[w] && (it[w] || !jn[w]);
  }, hs = function(w) {
    let R = p(w);
    (!R || !R.tagName) && (R = {
      namespaceURI: K,
      tagName: "template"
    });
    const J = Br(w.tagName), ce = Br(R.tagName);
    return de[w.namespaceURI] ? w.namespaceURI === Pt ? qr(J, R, ce) : w.namespaceURI === Ye ? ps(J, R, ce) : w.namespaceURI === Xe ? ms(J, R, ce) : !!(rt === "application/xhtml+xml" && de[w.namespaceURI]) : !1;
  }, pn = function(w) {
    Er(t.removed, { element: w });
    try {
      p(w).removeChild(w);
    } catch {
      if (h(w), !p(w)) throw Hn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Kr = function(w, R, J) {
    try {
      g(w, R);
    } catch {
      try {
        w.removeAttribute(J);
      } catch {
      }
    }
  }, mn = function(w) {
    H(w);
    const R = b(w);
    if (R) {
      const ce = [];
      rr(R, (Te) => {
        Er(ce, Te);
      }), rr(ce, (Te) => {
        try {
          h(Te);
        } catch {
        }
      });
    }
    const J = y(w);
    if (J) for (let ce = J.length - 1; ce >= 0; --ce) {
      const Te = J[ce], Pe = Te && Te.name;
      typeof Pe == "string" && Kr(w, Te, Pe);
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
      J ? g(R, J) : R.removeAttribute(w);
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
    const R = y(w);
    if (R)
      for (let J = R.length - 1; J >= 0; --J) {
        const ce = R[J], Te = ce && ce.name;
        typeof Te != "string" || fe[ze(Te)] || Kr(w, ce, Te);
      }
  }, H = function(w) {
    const R = [w];
    for (; R.length > 0; ) {
      const J = R.pop();
      S(J) === tn.element && yr(J);
      const ce = b(J);
      if (ce) for (let Te = ce.length - 1; Te >= 0; --Te) R.push(ce[Te]);
    }
  }, U = function(w, R) {
    return ge ? w === "patchsrc" ? !0 : w === "for" && R !== "label" && R !== "output" : !1;
  }, be = function(w) {
    if (!ge) return;
    const R = [w];
    for (; R.length > 0; ) {
      const J = R.pop(), ce = S(J);
      if (ce === tn.processingInstruction || ce === tn.comment && zt(To, J.data)) {
        try {
          h(J);
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
      const Te = b(J);
      if (Te) for (let Pe = Te.length - 1; Pe >= 0; --Pe) R.push(Te[Pe]);
    }
  }, xe = function(w) {
    let R = null, J = null;
    if (Qe) w = "<remove></remove>" + w;
    else {
      const Pe = yo(w, /^[\r\n\t ]+/);
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
    return X.call(R || w, w, a.SHOW_ELEMENT | a.SHOW_COMMENT | a.SHOW_TEXT | a.SHOW_PROCESSING_INSTRUCTION | a.SHOW_CDATA_SECTION, null);
  }, Dt = function(w) {
    return w = Tr(w, _e, " "), w = Tr(w, W, " "), w = Tr(w, he, " "), w;
  }, wt = function(w) {
    var R;
    w.normalize();
    const J = $ ? $(w) : w.ownerDocument, ce = X.call(J || w, w, a.SHOW_TEXT | a.SHOW_COMMENT | a.SHOW_CDATA_SECTION | a.SHOW_PROCESSING_INSTRUCTION, null);
    let Te = ce.nextNode();
    for (; Te; )
      Te.data = Dt(Te.data), Te = ce.nextNode();
    const Pe = (R = w.querySelectorAll) === null || R === void 0 ? void 0 : R.call(w, "template");
    Pe && rr(Pe, (He) => {
      Ct(He.content) && wt(He.content);
    });
  }, hn = function(w) {
    const R = v ? v(w) : null;
    return typeof R != "string" || ze(R) !== "form" ? !1 : typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || w.attributes !== y(w) || typeof w.removeAttribute != "function" || typeof w.removeAttributeNode != "function" || typeof w.getAttributeNode != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function" || w.nodeType !== N(w) || w.childNodes !== b(w);
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
  const gs = function(w, R) {
    return !!(ge && w.hasChildNodes() && !gt(w.firstElementChild) && zt(Eo, w.textContent) && zt(Eo, w.innerHTML) || ge && w.namespaceURI === Xe && gf[R] && (gt(w.firstElementChild) || typeof w.textContent == "string" && zt(bf[R], w.textContent)) || w.nodeType === tn.processingInstruction || ge && w.nodeType === tn.comment && zt(To, w.data));
  }, Wr = function(w, R) {
    if (w instanceof RegExp) return zt(w, R);
    if (w instanceof Function) {
      for (var J = arguments.length, ce = new Array(J > 2 ? J - 2 : 0), Te = 2; Te < J; Te++) ce[Te - 2] = arguments[Te];
      return !!w(R, ...ce);
    }
    return !1;
  }, Dl = function(w, R, J) {
    if (!Je[R] && to(R) && Wr(Ge.tagNameCheck, R)) return !1;
    if (xt && !vt[R]) {
      const ce = p(w), Te = b(w);
      if (Te && ce) {
        const Pe = Te.length;
        for (let He = Pe - 1; He >= 0; --He) {
          const ct = w === J ? x(Te[He], !0) : Te[He];
          ce.insertBefore(ct, m(w));
        }
      }
    }
    return pn(w), !0;
  }, Js = function(w, R, J, ce) {
    return w.length === 0 ? R : R === J || R === ce ? sn(R) : R;
  }, ar = function(w, R) {
    return w === R || p(w) !== null ? !1 : (Ie && H(w), !0);
  }, Qs = function(w, R) {
    if (Jt(le.beforeSanitizeElements, w, null), ar(w, R)) return !0;
    if (hn(w))
      return pn(w), !0;
    const J = ze(T(w));
    if (ne = Js(le.uponSanitizeElement, ne, Ae, je), Jt(le.uponSanitizeElement, w, {
      tagName: J,
      allowedTags: ne
    }), ar(w, R)) return !0;
    if (gs(w, J))
      return pn(w), !0;
    if (Je[J] || !(lt.tagCheck instanceof Function && lt.tagCheck(J)) && !ne[J]) {
      const ce = Dl(w, J, R);
      return ce === !1 && (Jt(le.afterSanitizeElements, w, null), ar(w, R)) ? !0 : ce;
    }
    if (S(w) === tn.element && !hs(w) || (J === "noscript" || J === "noembed" || J === "noframes") && zt(mf, w.innerHTML))
      return pn(w), !0;
    if (Q && w.nodeType === tn.text) {
      const ce = Dt(w.textContent);
      w.textContent !== ce && (Er(t.removed, { element: w.cloneNode() }), w.textContent = ce);
    }
    return Jt(le.afterSanitizeElements, w, null), ar(w, R);
  }, eo = function(w, R, J) {
    if (At[R] || U(R, w) || Le && (R === "id" || R === "name") && (J in n || J in Zt)) return !1;
    const ce = fe[R] || lt.attributeCheck instanceof Function && lt.attributeCheck(R, w);
    return Z && zt(ue, R) || yt && zt(ye, R) ? !0 : ce ? me[R] || zt($e, Tr(J, De, "")) || (R === "src" || R === "xlink:href" || R === "href") && w !== "script" && xo(J, "data:") === 0 && at[w] || z && !zt(pe, Tr(J, De, "")) ? !0 : !J : to(w) && Wr(Ge.tagNameCheck, w) && Wr(Ge.attributeNameCheck, R, w) || R === "is" && Ge.allowCustomizedBuiltInElements && Wr(Ge.tagNameCheck, J);
  }, Ml = qe({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), to = function(w) {
    return !Ml[Br(w)] && zt(G, w);
  }, Il = function(w, R, J, ce) {
    if (A && typeof f == "object" && typeof f.getAttributeType == "function" && !J) switch (f.getAttributeType(w, R)) {
      case "TrustedHTML":
        return E(ce);
      case "TrustedScriptURL":
        return P(ce);
    }
    return ce;
  }, zl = function(w, R, J, ce) {
    try {
      return J ? w.setAttributeNS(J, R, ce) : w.setAttribute(R, ce), hn(w) ? (pn(w), !1) : !0;
    } catch {
      return jt(R, w), !1;
    }
  }, no = function(w, R) {
    if (Jt(le.beforeSanitizeAttributes, w, null), ar(w, R)) return;
    const J = w.attributes;
    if (!J || hn(w)) return;
    fe = Js(le.uponSanitizeAttribute, fe, Fe, Ze);
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
      const He = J[Te], ct = He.name, an = He.namespaceURI, Qt = He.value, ir = ze(ct), ys = Qt;
      let Bt = ct === "value" ? ys : Xu(ys), ro = !1;
      if (ce.attrName = ir, ce.attrValue = Bt, ce.keepAttr = !0, ce.forceKeepAttr = void 0, Jt(le.uponSanitizeAttribute, w, ce), Bt = ce.attrValue, Nt && (ir === "id" || ir === "name") && xo(Bt, Rt) !== 0 && (jt(ct, w, He), Bt = Rt + Bt, ro = !0), ge && zt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Bt)) {
        jt(ct, w, He);
        continue;
      }
      if (ir === "attributename" && yo(Bt, "href")) {
        jt(ct, w, He);
        continue;
      }
      if (!ce.forceKeepAttr) {
        if (!ce.keepAttr) {
          jt(ct, w, He);
          continue;
        }
        if (!Y && zt(hf, Bt)) {
          jt(ct, w, He);
          continue;
        }
        if (Q && (Bt = Dt(Bt)), !eo(Pe, ir, Bt)) {
          jt(ct, w, He);
          continue;
        }
        Bt = Il(Pe, ir, an, Bt), Bt !== ys && zl(w, ct, an, Bt) && ro && bo(t.removed);
      }
    }
    Jt(le.afterSanitizeAttributes, w, null), ar(w, R);
  }, Gr = function(w) {
    let R = null;
    const J = et(w);
    for (Jt(le.beforeSanitizeShadowDOM, w, null); R = J.nextNode(); )
      if (Jt(le.uponSanitizeShadowNode, R, null), Qs(R, w), no(R, w), Ct(R.content) && Gr(R.content), S(R) === tn.element) {
        const ce = _(R);
        Ct(ce) && (bs(ce), Gr(ce));
      }
    Jt(le.afterSanitizeShadowDOM, w, null);
  }, bs = function(w) {
    const R = [{
      node: w,
      shadow: null
    }];
    for (; R.length > 0; ) {
      const J = R.pop();
      if (J.shadow) {
        Gr(J.shadow);
        continue;
      }
      const ce = J.node, Te = S(ce) === tn.element, Pe = b(ce);
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
    if (ee = !se, ee && (se = "<!-->"), typeof se != "string" && !gt(se) && (se = tf(se), typeof se != "string"))
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
        bs(se);
      } catch (Qt) {
        throw mn(se), Qt;
      }
    } else if (gt(se))
      R = xe("<!---->"), J = R.ownerDocument.importNode(se, !0), J.nodeType === tn.element && J.nodeName === "BODY" || J.nodeName === "HTML" ? R = J : R.appendChild(J), bs(R);
    else {
      if (!nt && !Q && !ae && se.indexOf("<") === -1) return A && re ? E(se) : se;
      if (R = xe(se), !R) return nt ? null : re ? C : "";
    }
    R && Qe && pn(R.firstChild);
    const He = Pe ? se : R;
    try {
      const an = et(He);
      for (; ce = an.nextNode(); )
        Qs(ce, He), no(ce, He), Ct(ce.content) && Gr(ce.content);
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
    return ae && ne["!doctype"] && R.ownerDocument && R.ownerDocument.doctype && R.ownerDocument.doctype.name && zt(_f, R.ownerDocument.doctype.name) && (ct = "<!DOCTYPE " + R.ownerDocument.doctype.name + `>
` + ct), Q && (ct = Dt(ct)), A && re ? E(ct) : ct;
  }, t.setConfig = function() {
    let se = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Tn(se), Ee = !0, je = ne, Ze = fe;
  }, t.clearConfig = function() {
    Tt = null, Ee = !1, je = null, Ze = null, A = D, C = "";
  }, t.isValidAttribute = function(se, w, R) {
    Tt || Tn({});
    const J = ze(se), ce = ze(w);
    return eo(J, ce, R);
  }, t.addHook = function(se, w) {
    typeof w == "function" && Vt(le, se) && Er(le[se], w);
  }, t.removeHook = function(se, w) {
    if (Vt(le, se)) {
      if (w !== void 0) {
        const R = Vu(le[se], w);
        return R === -1 ? void 0 : Yu(le[se], R, 1)[0];
      }
      return bo(le[se]);
    }
  }, t.removeHooks = function(se) {
    Vt(le, se) && (le[se] = []);
  }, t.removeAllHooks = function() {
    le = Co();
  }, t;
}
var vf = hl();
const wf = "_editor_2a7al_3", kf = "_toolbar_2a7al_13", Nf = "_tool_2a7al_13", Sf = "_separator_2a7al_56", Of = "_area_2a7al_63", $f = "_source_2a7al_73", Ef = "_alignGlyph_2a7al_84", Tf = "_colorInput_2a7al_89", Cf = "_select_2a7al_98", St = {
  editor: wf,
  toolbar: kf,
  tool: Nf,
  separator: Sf,
  area: Of,
  source: $f,
  alignGlyph: Ef,
  colorInput: Tf,
  select: Cf
}, Af = [
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
], Ao = {
  bold: { label: "Bold", glyph: /* @__PURE__ */ s("b", { children: "B" }), command: "bold" },
  italic: { label: "Italic", glyph: /* @__PURE__ */ s("i", { children: "I" }), command: "italic" },
  underline: { label: "Underline", glyph: /* @__PURE__ */ s("u", { children: "U" }), command: "underline" },
  strikethrough: {
    label: "Strikethrough",
    glyph: /* @__PURE__ */ s("s", { children: "S" }),
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
    glyph: /* @__PURE__ */ s("span", { className: St.alignGlyph, style: { textAlign: "left" }, children: "≡" }),
    command: "justifyLeft"
  },
  justifyCenter: {
    label: "Align center",
    glyph: /* @__PURE__ */ s("span", { className: St.alignGlyph, style: { textAlign: "center" }, children: "≡" }),
    command: "justifyCenter"
  },
  justifyRight: {
    label: "Align right",
    glyph: /* @__PURE__ */ s("span", { className: St.alignGlyph, style: { textAlign: "right" }, children: "≡" }),
    command: "justifyRight"
  },
  justifyFull: {
    label: "Justify",
    glyph: /* @__PURE__ */ s("span", { className: St.alignGlyph, style: { textAlign: "justify" }, children: "≡" }),
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
}, Df = [
  "sans-serif",
  "serif",
  "monospace",
  "Arial",
  "Georgia",
  "Courier New"
], Mf = ["1", "2", "3", "4", "5", "6", "7"], If = ["p", "h1", "h2", "h3", "blockquote", "pre"];
function Ls(e, t) {
  if (typeof document > "u") return !1;
  const n = document.execCommand;
  if (typeof n != "function") return !1;
  try {
    return n.call(document, e, !1, t);
  } catch {
    return !1;
  }
}
function zf(e) {
  return Ls("formatBlock", `<${e}>`) || Ls("formatBlock", e);
}
function Lf(e) {
  if (typeof e == "string") return e.trim();
  if (e != null && typeof e == "object" && "url" in e) {
    const t = e.url;
    if (typeof t == "string") return t;
  }
  throw new Error("Upload response has no url");
}
const JN = st(
  function({
    value: t,
    defaultValue: n = "",
    onChange: r,
    onError: l,
    toolbar: i = Af,
    imageUpload: d,
    readOnly: o = !1,
    disabled: a = !1,
    ariaLabel: c = "HTML editor",
    className: f,
    sanitize: u = !0
  }, x) {
    const [h, g] = q(!1), [m, b] = q(n), [p, _] = q(
      null
    ), [y, N] = q(""), [v, $] = q(""), [S, T] = q(2), [A, C] = q(2), [D, I] = q(!1), k = oe(null), O = oe(null), E = oe(n), P = B(
      (G) => u ? vf.sanitize(G) : G,
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
        if (o || a) return !1;
        k.current?.focus();
        const ne = Ls(G, $e);
        if (ne) {
          const Ae = k.current;
          Ae && L(Ae.innerHTML);
        }
        return ne;
      },
      [L, o, a]
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
    }, []), te = Oe(
      () => ({
        execCommand: j,
        getHtml: F,
        insertHtml: X,
        focus: ie
      }),
      [j, F, X, ie]
    );
    fs(x, () => ({ execCommand: j, getHtml: F }), [
      j,
      F
    ]);
    const we = B(
      (G) => {
        const $e = Ao[G];
        !$e || o || a || j($e.command);
      },
      [j, o, a]
    ), le = B(() => {
      o || a || (h ? (g(!1), L(m)) : (b(k.current?.innerHTML ?? ""), g(!0)));
    }, [h, m, L, o, a]), _e = B(
      (G) => {
        if (!(G.ctrlKey || G.metaKey) || o || a) return;
        const $e = G.key.toLowerCase(), ne = $e === "b" ? "bold" : $e === "i" ? "italic" : $e === "u" ? "underline" : null;
        ne && (G.preventDefault(), we(ne));
      },
      [we, o, a]
    ), W = B(() => {
      const G = k.current;
      G && L(G.innerHTML);
    }, [L]), he = B(() => {
      y.trim() && (j("createLink", y.trim()), N(""), _(null));
    }, [y, j]), ue = B(() => {
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
            const fe = (ne.headers.get("content-type") ?? "").includes("application/json") ? await ne.json() : await ne.text(), Fe = (d.parseUrl ?? Lf)(fe);
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
      const G = Math.max(1, Math.min(10, Math.floor(S) || 1)), $e = Math.max(1, Math.min(10, Math.floor(A) || 1)), ne = Array.from({ length: $e }, () => "<td><br></td>").join(
        ""
      ), Ae = Array.from({ length: G }, () => `<tr>${ne}</tr>`).join(
        ""
      );
      j("insertHTML", `<table><tbody>${Ae}</tbody></table>`), _(null);
    }, [S, A, j]), De = (G, $e) => {
      if (G === "separator")
        return /* @__PURE__ */ s(
          "span",
          {
            role: "separator",
            className: St.separator
          },
          `sep-${$e}`
        );
      if (typeof G == "object")
        return /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: St.tool,
            "aria-label": G.label,
            title: G.title ?? G.label,
            disabled: a,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !o && !a && G.onExecute(te);
            },
            children: G.glyph ?? G.label
          },
          G.id
        );
      if (G === "source")
        return /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: St.tool,
            "aria-label": "Source",
            "aria-pressed": h,
            disabled: a,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: le,
            children: "</>"
          },
          "source"
        );
      if (G === "foreColor" || G === "backgroundColor") {
        const Ae = G === "foreColor" ? "Text color" : "Background color";
        return /* @__PURE__ */ M("label", { className: St.tool, title: Ae, children: [
          /* @__PURE__ */ s("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ s(
            "input",
            {
              type: "color",
              "aria-label": Ae,
              disabled: a,
              className: St.colorInput,
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
        const Ae = G === "formatBlock" ? "Format block" : G === "fontName" ? "Font name" : "Font size", fe = G === "formatBlock" ? If : G === "fontName" ? Df : Mf;
        return /* @__PURE__ */ M(
          "select",
          {
            "aria-label": Ae,
            title: Ae,
            disabled: a,
            defaultValue: "",
            className: St.select,
            onMouseDown: (Fe) => Fe.preventDefault(),
            onChange: (Fe) => {
              !Fe.target.value || o || a || (G === "formatBlock" ? zf(Fe.target.value) : j(G === "fontName" ? "fontName" : "fontSize", Fe.target.value), Fe.target.value = "");
            },
            children: [
              /* @__PURE__ */ s("option", { value: "", disabled: !0, children: G === "formatBlock" ? "¶" : G === "fontName" ? "Aa" : "12" }),
              fe.map((Fe) => /* @__PURE__ */ s("option", { value: Fe, children: Fe }, Fe))
            ]
          },
          G
        );
      }
      if (G === "link")
        return /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: St.tool,
            "aria-label": "Insert link",
            disabled: a,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !o && !a && (N(""), _("link"));
            },
            children: "🔗"
          },
          "link"
        );
      if (G === "image")
        return /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: St.tool,
            "aria-label": "Insert image",
            disabled: a,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !o && !a && ($(""), _("image"));
            },
            children: "🖼"
          },
          "image"
        );
      if (G === "table")
        return /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: St.tool,
            "aria-label": "Insert table",
            disabled: a,
            onMouseDown: (Ae) => Ae.preventDefault(),
            onClick: () => {
              !o && !a && (T(2), C(2), _("table"));
            },
            children: "▦"
          },
          "table"
        );
      const ne = Ao[G];
      return ne ? /* @__PURE__ */ s(
        "button",
        {
          type: "button",
          className: St.tool,
          "aria-label": ne.label,
          disabled: a,
          onMouseDown: (Ae) => Ae.preventDefault(),
          onClick: () => we(G),
          children: ne.glyph
        },
        G
      ) : null;
    };
    return /* @__PURE__ */ M("div", { className: [St.editor, f].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ s(
        "div",
        {
          role: "toolbar",
          "aria-label": `${c} toolbar`,
          className: St.toolbar,
          children: i.map((G, $e) => De(G, $e))
        }
      ),
      h ? /* @__PURE__ */ s(
        "textarea",
        {
          className: St.source,
          "aria-label": `${c} source`,
          value: m,
          disabled: a,
          readOnly: o,
          onChange: (G) => {
            b(G.target.value), L(G.target.value);
          }
        }
      ) : /* @__PURE__ */ s(
        "div",
        {
          ref: k,
          className: St.area,
          contentEditable: !o && !a,
          suppressContentEditableWarning: !0,
          role: "textbox",
          "aria-label": c,
          "aria-multiline": "true",
          "aria-readonly": o || void 0,
          "aria-disabled": a || void 0,
          dangerouslySetInnerHTML: { __html: E.current },
          onInput: W,
          onKeyDown: _e
        }
      ),
      /* @__PURE__ */ M(
        cl,
        {
          open: p !== null,
          onClose: () => _(null),
          title: p === "link" ? "Insert link" : p === "image" ? "Insert image" : "Insert table",
          size: "sm",
          footer: /* @__PURE__ */ M(pt, { children: [
            /* @__PURE__ */ s(yn, { variant: "text", onClick: () => _(null), children: "Cancel" }),
            p === "link" && /* @__PURE__ */ s(yn, { onClick: he, children: "Insert" }),
            p === "image" && /* @__PURE__ */ s(yn, { onClick: ue, disabled: D, children: "Insert" }),
            p === "table" && /* @__PURE__ */ s(yn, { onClick: pe, children: "Insert" })
          ] }),
          children: [
            p === "link" && /* @__PURE__ */ s(Nr, { label: "URL", required: !0, children: ({ inputId: G }) => /* @__PURE__ */ s(
              Yr,
              {
                id: G,
                value: y,
                placeholder: "https://",
                onChange: ($e) => N($e.target.value)
              }
            ) }),
            p === "image" && /* @__PURE__ */ M(pt, { children: [
              /* @__PURE__ */ s(Nr, { label: "Image URL", children: ({ inputId: G }) => /* @__PURE__ */ s(
                Yr,
                {
                  id: G,
                  value: v,
                  placeholder: "https://",
                  onChange: ($e) => $($e.target.value)
                }
              ) }),
              d && /* @__PURE__ */ s(Nr, { label: "Or upload a file", children: ({ inputId: G }) => /* @__PURE__ */ s(
                "input",
                {
                  id: G,
                  ref: O,
                  type: "file",
                  accept: "image/*",
                  "aria-label": "Upload image file",
                  onChange: ($e) => {
                    const ne = $e.target.files?.[0];
                    ne && ye(ne), $e.target.value = "";
                  }
                }
              ) }),
              D && /* @__PURE__ */ s(dl, { textStyle: "Body2", children: "Uploading…" })
            ] }),
            p === "table" && /* @__PURE__ */ M(pt, { children: [
              /* @__PURE__ */ s(Nr, { label: "Rows", children: ({ inputId: G }) => /* @__PURE__ */ s(
                Yr,
                {
                  id: G,
                  type: "number",
                  value: String(S),
                  onChange: ($e) => T(Number($e.target.value))
                }
              ) }),
              /* @__PURE__ */ s(Nr, { label: "Columns", children: ({ inputId: G }) => /* @__PURE__ */ s(
                Yr,
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
), Rf = "_popup_ve7kd_4", gl = {
  popup: Rf
}, bl = or(null);
function QN() {
  const e = Pn(bl);
  if (!e) throw new Error("usePopup must be used inside <PopupProvider>");
  return e;
}
function Do(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : e;
}
function Pf({ state: e }) {
  const t = oe(null), [n, r] = q(null);
  return ve(() => {
    const l = t.current;
    if (!l) return;
    const i = e.anchor.getBoundingClientRect(), d = l.getBoundingClientRect(), o = Math.max(
      0,
      Math.min(i.left, window.innerWidth - d.width)
    );
    let a = i.bottom + 4;
    a + d.height > window.innerHeight && i.top - 4 - d.height >= 0 && (a = i.top - 4 - d.height), r({ left: o, top: Math.max(0, a) });
  }, [e]), ve(() => {
    t.current?.focus();
  }, []), /* @__PURE__ */ s(
    "div",
    {
      ref: t,
      role: "dialog",
      "aria-label": e.ariaLabel ?? "Popup",
      tabIndex: -1,
      className: [gl.popup, e.className].filter(Boolean).join(" "),
      style: {
        left: n?.left ?? e.anchor.getBoundingClientRect().left,
        top: n?.top,
        width: Do(e.width),
        height: Do(e.height)
      },
      children: e.content
    }
  );
}
function eS({ children: e }) {
  const [t, n] = q(null), r = oe(0), l = oe(null), i = B(() => {
    l.current?.(), l.current = null;
  }, []), d = B(() => {
    n((c) => c && (c.invoker && document.body.contains(c.invoker) && c.invoker.focus({ preventScroll: !0 }), i(), null));
  }, [i]), o = B(
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
        u || (u = !0, n((x) => x?.seq !== f ? x : (x.invoker && document.body.contains(x.invoker) && x.invoker.focus({ preventScroll: !0 }), i(), null)));
      };
    },
    [i]
  );
  ve(() => {
    if (!t) return;
    const c = (h) => {
      const g = document.querySelector(`.${gl.popup}`);
      g && !g.contains(h.target) && d();
    }, f = (h) => {
      h.key === "Escape" && (h.preventDefault(), d());
    }, u = () => d(), x = () => d();
    return document.addEventListener("pointerdown", c, !0), document.addEventListener("keydown", f, !0), window.addEventListener("resize", u), window.addEventListener("hashchange", x), () => {
      document.removeEventListener("pointerdown", c, !0), document.removeEventListener("keydown", f, !0), window.removeEventListener("resize", u), window.removeEventListener("hashchange", x);
    };
  }, [t, d]);
  const a = Oe(
    () => ({ open: o, close: d, isOpen: t != null }),
    [o, d, t]
  );
  return /* @__PURE__ */ M(bl.Provider, { value: a, children: [
    e,
    t && /* @__PURE__ */ s(Pf, { state: t }, t.seq)
  ] });
}
const jf = "_alert_146r9_1", Bf = "_xs_146r9_28", Ff = "_sm_146r9_38", Hf = "_lg_146r9_48", Uf = "_xl_146r9_58", qf = "_primary_146r9_69", Kf = "_secondary_146r9_74", Wf = "_light_146r9_79", Gf = "_base_146r9_84", Vf = "_dark_146r9_89", Yf = "_info_146r9_94", Xf = "_success_146r9_99", Zf = "_warning_146r9_104", Jf = "_danger_146r9_109", Qf = "_flat_146r9_116", e_ = "_outlined_146r9_123", t_ = "_filled_146r9_132", n_ = "_text_146r9_139", r_ = "_icon_146r9_181", s_ = "_content_146r9_192", o_ = "_title_146r9_197", l_ = "_body_146r9_203", a_ = "_dismiss_146r9_209", Nn = {
  alert: jf,
  xs: Bf,
  sm: Ff,
  lg: Hf,
  xl: Uf,
  primary: qf,
  secondary: Kf,
  light: Wf,
  base: Gf,
  dark: Vf,
  info: Yf,
  success: Xf,
  warning: Zf,
  danger: Jf,
  flat: Qf,
  outlined: e_,
  filled: t_,
  text: n_,
  icon: r_,
  content: s_,
  title: o_,
  body: l_,
  dismiss: a_,
  "shade-lighter": "_shade-lighter_146r9_453",
  "shade-light": "_shade-light_146r9_453",
  "shade-dark": "_shade-dark_146r9_463",
  "shade-darker": "_shade-darker_146r9_467"
}, i_ = {
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
function tS({
  // Intentional Radzen-parity breaking change (1.0): defaults were
  // severity="info" variant="flat" dismissible={false}; Radzen ships
  // AlertStyle.Base + Variant.Filled + AllowClose. Migrate by passing
  // the old values explicitly.
  severity: e = "base",
  variant: t = "filled",
  shade: n,
  size: r = "md",
  title: l,
  icon: i,
  showIcon: d = !0,
  children: o,
  dismissible: a = !0,
  onDismiss: c,
  visible: f,
  onVisibleChange: u,
  className: x,
  ...h
}) {
  const [g, m] = q(!1);
  if (f === !1 || f === void 0 && g)
    return null;
  const b = () => {
    f === void 0 && m(!0), c?.(), u?.(!1);
  }, p = e, _ = rl(t, "filled"), y = Hr(n), N = i ?? (d ? /* @__PURE__ */ s(Me, { icon: i_[e] }) : null);
  return /* @__PURE__ */ M(
    "div",
    {
      role: "alert",
      ...h,
      className: [
        Nn.alert,
        Nn[p],
        Nn[_],
        y ? Nn[y] : null,
        Nn[r],
        x
      ].filter(Boolean).join(" "),
      children: [
        N != null && /* @__PURE__ */ s("span", { className: Nn.icon, "aria-hidden": "true", children: N }),
        /* @__PURE__ */ M("div", { className: Nn.content, children: [
          l && /* @__PURE__ */ s("div", { className: Nn.title, children: l }),
          o && /* @__PURE__ */ s("div", { className: Nn.body, children: o })
        ] }),
        a && /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: Nn.dismiss,
            onClick: b,
            "aria-label": "Dismiss alert",
            children: /* @__PURE__ */ s(Me, { icon: "close", size: "sm" })
          }
        )
      ]
    }
  );
}
const c_ = "_skeleton_1xyce_1", d_ = "_text_1xyce_35", u_ = "_circle_1xyce_40", f_ = "_rect_1xyce_44", Mo = {
  skeleton: c_,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_1xyce_1",
  text: d_,
  circle: u_,
  rect: f_
};
function nS({
  variant: e = "text",
  width: t,
  height: n,
  className: r
}) {
  const l = {};
  return t !== void 0 && (l.width = typeof t == "number" ? `${t}px` : t), n !== void 0 && (l.height = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ s(
    "span",
    {
      "aria-hidden": "true",
      className: [Mo.skeleton, Mo[e], r].filter(Boolean).join(" "),
      style: l
    }
  );
}
function cs(e) {
  return typeof e == "number" ? `${e}px` : /^\d+$/.test(e) ? `${e}px` : e;
}
const __ = "_row_juebr_1", p_ = "_start_juebr_14", m_ = "_center_juebr_18", h_ = "_end_juebr_22", g_ = "_stretch_juebr_26", b_ = "_baseline_juebr_30", y_ = "_normal_juebr_34", x_ = "_noWrap_juebr_90", v_ = "_wrapReverse_juebr_94", Jr = {
  row: __,
  start: p_,
  center: m_,
  end: h_,
  stretch: g_,
  baseline: b_,
  normal: y_,
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
  noWrap: x_,
  wrapReverse: v_
};
function Io(e) {
  return e === !1 || e === "nowrap" ? "noWrap" : e === "wrap-reverse" ? "wrapReverse" : null;
}
function rS({
  gap: e,
  rowGap: t,
  align: n = "stretch",
  justify: r = "start",
  wrap: l = !0,
  className: i,
  style: d,
  ...o
}) {
  const a = e != null ? cs(e) : null, c = t != null ? cs(t) : null, f = {
    // Keep --dx-col-gap in sync so Column grid math compensates for any
    // gap exactly like it does for the stylesheet default (space-4).
    // Set columnGap (not the gap shorthand): an inline `gap` would also
    // fix row-gap inline and clobber the rowGap prop.
    ...a ? {
      columnGap: a,
      "--dx-col-gap": a
    } : {},
    ...c ? { rowGap: c } : {},
    ...d
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: [
        Jr.row,
        Jr[n],
        Jr[`justify-${r}`],
        Io(l) != null ? Jr[Io(l)] : null,
        i
      ].filter(Boolean).join(" "),
      style: f,
      ...o
    }
  );
}
const w_ = "_column_sh0ss_1", k_ = "_Size1_sh0ss_15", N_ = "_Size2_sh0ss_24", S_ = "_Size3_sh0ss_33", O_ = "_Size4_sh0ss_42", $_ = "_Size5_sh0ss_51", E_ = "_Size6_sh0ss_60", T_ = "_Size7_sh0ss_69", C_ = "_Size8_sh0ss_78", A_ = "_Size9_sh0ss_87", D_ = "_Size10_sh0ss_96", M_ = "_Size11_sh0ss_105", I_ = "_Size12_sh0ss_114", z_ = "_Offset0_sh0ss_119", L_ = "_Offset1_sh0ss_122", R_ = "_Offset2_sh0ss_127", P_ = "_Offset3_sh0ss_132", j_ = "_Offset4_sh0ss_137", B_ = "_Offset5_sh0ss_142", F_ = "_Offset6_sh0ss_147", H_ = "_Offset7_sh0ss_152", U_ = "_Offset8_sh0ss_157", q_ = "_Offset9_sh0ss_162", K_ = "_Offset10_sh0ss_167", W_ = "_Offset11_sh0ss_172", G_ = "_Offset12_sh0ss_177", V_ = "_OrderFirst_sh0ss_182", Y_ = "_OrderLast_sh0ss_185", X_ = "_Order0_sh0ss_188", Z_ = "_Order1_sh0ss_191", J_ = "_Order2_sh0ss_194", Q_ = "_Order3_sh0ss_197", ep = "_Order4_sh0ss_200", tp = "_Order5_sh0ss_203", np = "_Order6_sh0ss_206", rp = "_Order7_sh0ss_209", sp = "_Order8_sh0ss_212", op = "_Order9_sh0ss_215", lp = "_Order10_sh0ss_218", ap = "_Order11_sh0ss_221", ip = "_Order12_sh0ss_224", cp = "_xsSize1_sh0ss_229", dp = "_xsSize2_sh0ss_238", up = "_xsSize3_sh0ss_247", fp = "_xsSize4_sh0ss_256", _p = "_xsSize5_sh0ss_265", pp = "_xsSize6_sh0ss_274", mp = "_xsSize7_sh0ss_283", hp = "_xsSize8_sh0ss_292", gp = "_xsSize9_sh0ss_301", bp = "_xsSize10_sh0ss_310", yp = "_xsSize11_sh0ss_321", xp = "_xsSize12_sh0ss_332", vp = "_xsOffset0_sh0ss_337", wp = "_xsOffset1_sh0ss_340", kp = "_xsOffset2_sh0ss_345", Np = "_xsOffset3_sh0ss_350", Sp = "_xsOffset4_sh0ss_355", Op = "_xsOffset5_sh0ss_360", $p = "_xsOffset6_sh0ss_365", Ep = "_xsOffset7_sh0ss_370", Tp = "_xsOffset8_sh0ss_375", Cp = "_xsOffset9_sh0ss_380", Ap = "_xsOffset10_sh0ss_385", Dp = "_xsOffset11_sh0ss_391", Mp = "_xsOffset12_sh0ss_397", Ip = "_xsOrderFirst_sh0ss_403", zp = "_xsOrderLast_sh0ss_406", Lp = "_xsOrder0_sh0ss_409", Rp = "_xsOrder1_sh0ss_412", Pp = "_xsOrder2_sh0ss_415", jp = "_xsOrder3_sh0ss_418", Bp = "_xsOrder4_sh0ss_421", Fp = "_xsOrder5_sh0ss_424", Hp = "_xsOrder6_sh0ss_427", Up = "_xsOrder7_sh0ss_430", qp = "_xsOrder8_sh0ss_433", Kp = "_xsOrder9_sh0ss_436", Wp = "_xsOrder10_sh0ss_439", Gp = "_xsOrder11_sh0ss_442", Vp = "_xsOrder12_sh0ss_445", Yp = "_smSize1_sh0ss_451", Xp = "_smSize2_sh0ss_460", Zp = "_smSize3_sh0ss_469", Jp = "_smSize4_sh0ss_478", Qp = "_smSize5_sh0ss_487", em = "_smSize6_sh0ss_496", tm = "_smSize7_sh0ss_505", nm = "_smSize8_sh0ss_514", rm = "_smSize9_sh0ss_523", sm = "_smSize10_sh0ss_532", om = "_smSize11_sh0ss_543", lm = "_smSize12_sh0ss_554", am = "_smOffset0_sh0ss_559", im = "_smOffset1_sh0ss_562", cm = "_smOffset2_sh0ss_567", dm = "_smOffset3_sh0ss_572", um = "_smOffset4_sh0ss_577", fm = "_smOffset5_sh0ss_582", _m = "_smOffset6_sh0ss_587", pm = "_smOffset7_sh0ss_592", mm = "_smOffset8_sh0ss_597", hm = "_smOffset9_sh0ss_602", gm = "_smOffset10_sh0ss_607", bm = "_smOffset11_sh0ss_613", ym = "_smOffset12_sh0ss_619", xm = "_smOrderFirst_sh0ss_625", vm = "_smOrderLast_sh0ss_628", wm = "_smOrder0_sh0ss_631", km = "_smOrder1_sh0ss_634", Nm = "_smOrder2_sh0ss_637", Sm = "_smOrder3_sh0ss_640", Om = "_smOrder4_sh0ss_643", $m = "_smOrder5_sh0ss_646", Em = "_smOrder6_sh0ss_649", Tm = "_smOrder7_sh0ss_652", Cm = "_smOrder8_sh0ss_655", Am = "_smOrder9_sh0ss_658", Dm = "_smOrder10_sh0ss_661", Mm = "_smOrder11_sh0ss_664", Im = "_smOrder12_sh0ss_667", zm = "_mdSize1_sh0ss_673", Lm = "_mdSize2_sh0ss_682", Rm = "_mdSize3_sh0ss_691", Pm = "_mdSize4_sh0ss_700", jm = "_mdSize5_sh0ss_709", Bm = "_mdSize6_sh0ss_718", Fm = "_mdSize7_sh0ss_727", Hm = "_mdSize8_sh0ss_736", Um = "_mdSize9_sh0ss_745", qm = "_mdSize10_sh0ss_754", Km = "_mdSize11_sh0ss_765", Wm = "_mdSize12_sh0ss_776", Gm = "_mdOffset0_sh0ss_781", Vm = "_mdOffset1_sh0ss_784", Ym = "_mdOffset2_sh0ss_789", Xm = "_mdOffset3_sh0ss_794", Zm = "_mdOffset4_sh0ss_799", Jm = "_mdOffset5_sh0ss_804", Qm = "_mdOffset6_sh0ss_809", eh = "_mdOffset7_sh0ss_814", th = "_mdOffset8_sh0ss_819", nh = "_mdOffset9_sh0ss_824", rh = "_mdOffset10_sh0ss_829", sh = "_mdOffset11_sh0ss_835", oh = "_mdOffset12_sh0ss_841", lh = "_mdOrderFirst_sh0ss_847", ah = "_mdOrderLast_sh0ss_850", ih = "_mdOrder0_sh0ss_853", ch = "_mdOrder1_sh0ss_856", dh = "_mdOrder2_sh0ss_859", uh = "_mdOrder3_sh0ss_862", fh = "_mdOrder4_sh0ss_865", _h = "_mdOrder5_sh0ss_868", ph = "_mdOrder6_sh0ss_871", mh = "_mdOrder7_sh0ss_874", hh = "_mdOrder8_sh0ss_877", gh = "_mdOrder9_sh0ss_880", bh = "_mdOrder10_sh0ss_883", yh = "_mdOrder11_sh0ss_886", xh = "_mdOrder12_sh0ss_889", vh = "_lgSize1_sh0ss_895", wh = "_lgSize2_sh0ss_904", kh = "_lgSize3_sh0ss_913", Nh = "_lgSize4_sh0ss_922", Sh = "_lgSize5_sh0ss_931", Oh = "_lgSize6_sh0ss_940", $h = "_lgSize7_sh0ss_949", Eh = "_lgSize8_sh0ss_958", Th = "_lgSize9_sh0ss_967", Ch = "_lgSize10_sh0ss_976", Ah = "_lgSize11_sh0ss_987", Dh = "_lgSize12_sh0ss_998", Mh = "_lgOffset0_sh0ss_1003", Ih = "_lgOffset1_sh0ss_1006", zh = "_lgOffset2_sh0ss_1011", Lh = "_lgOffset3_sh0ss_1016", Rh = "_lgOffset4_sh0ss_1021", Ph = "_lgOffset5_sh0ss_1026", jh = "_lgOffset6_sh0ss_1031", Bh = "_lgOffset7_sh0ss_1036", Fh = "_lgOffset8_sh0ss_1041", Hh = "_lgOffset9_sh0ss_1046", Uh = "_lgOffset10_sh0ss_1051", qh = "_lgOffset11_sh0ss_1057", Kh = "_lgOffset12_sh0ss_1063", Wh = "_lgOrderFirst_sh0ss_1069", Gh = "_lgOrderLast_sh0ss_1072", Vh = "_lgOrder0_sh0ss_1075", Yh = "_lgOrder1_sh0ss_1078", Xh = "_lgOrder2_sh0ss_1081", Zh = "_lgOrder3_sh0ss_1084", Jh = "_lgOrder4_sh0ss_1087", Qh = "_lgOrder5_sh0ss_1090", e1 = "_lgOrder6_sh0ss_1093", t1 = "_lgOrder7_sh0ss_1096", n1 = "_lgOrder8_sh0ss_1099", r1 = "_lgOrder9_sh0ss_1102", s1 = "_lgOrder10_sh0ss_1105", o1 = "_lgOrder11_sh0ss_1108", l1 = "_lgOrder12_sh0ss_1111", a1 = "_xlSize1_sh0ss_1117", i1 = "_xlSize2_sh0ss_1126", c1 = "_xlSize3_sh0ss_1135", d1 = "_xlSize4_sh0ss_1144", u1 = "_xlSize5_sh0ss_1153", f1 = "_xlSize6_sh0ss_1162", _1 = "_xlSize7_sh0ss_1171", p1 = "_xlSize8_sh0ss_1180", m1 = "_xlSize9_sh0ss_1189", h1 = "_xlSize10_sh0ss_1198", g1 = "_xlSize11_sh0ss_1209", b1 = "_xlSize12_sh0ss_1220", y1 = "_xlOffset0_sh0ss_1225", x1 = "_xlOffset1_sh0ss_1228", v1 = "_xlOffset2_sh0ss_1233", w1 = "_xlOffset3_sh0ss_1238", k1 = "_xlOffset4_sh0ss_1243", N1 = "_xlOffset5_sh0ss_1248", S1 = "_xlOffset6_sh0ss_1253", O1 = "_xlOffset7_sh0ss_1258", $1 = "_xlOffset8_sh0ss_1263", E1 = "_xlOffset9_sh0ss_1268", T1 = "_xlOffset10_sh0ss_1273", C1 = "_xlOffset11_sh0ss_1279", A1 = "_xlOffset12_sh0ss_1285", D1 = "_xlOrderFirst_sh0ss_1291", M1 = "_xlOrderLast_sh0ss_1294", I1 = "_xlOrder0_sh0ss_1297", z1 = "_xlOrder1_sh0ss_1300", L1 = "_xlOrder2_sh0ss_1303", R1 = "_xlOrder3_sh0ss_1306", P1 = "_xlOrder4_sh0ss_1309", j1 = "_xlOrder5_sh0ss_1312", B1 = "_xlOrder6_sh0ss_1315", F1 = "_xlOrder7_sh0ss_1318", H1 = "_xlOrder8_sh0ss_1321", U1 = "_xlOrder9_sh0ss_1324", q1 = "_xlOrder10_sh0ss_1327", K1 = "_xlOrder11_sh0ss_1330", W1 = "_xlOrder12_sh0ss_1333", G1 = "_xxSize1_sh0ss_1339", V1 = "_xxSize2_sh0ss_1348", Y1 = "_xxSize3_sh0ss_1357", X1 = "_xxSize4_sh0ss_1366", Z1 = "_xxSize5_sh0ss_1375", J1 = "_xxSize6_sh0ss_1384", Q1 = "_xxSize7_sh0ss_1393", eg = "_xxSize8_sh0ss_1402", tg = "_xxSize9_sh0ss_1411", ng = "_xxSize10_sh0ss_1420", rg = "_xxSize11_sh0ss_1431", sg = "_xxSize12_sh0ss_1442", og = "_xxOffset0_sh0ss_1447", lg = "_xxOffset1_sh0ss_1450", ag = "_xxOffset2_sh0ss_1455", ig = "_xxOffset3_sh0ss_1460", cg = "_xxOffset4_sh0ss_1465", dg = "_xxOffset5_sh0ss_1470", ug = "_xxOffset6_sh0ss_1475", fg = "_xxOffset7_sh0ss_1480", _g = "_xxOffset8_sh0ss_1485", pg = "_xxOffset9_sh0ss_1490", mg = "_xxOffset10_sh0ss_1495", hg = "_xxOffset11_sh0ss_1501", gg = "_xxOffset12_sh0ss_1507", bg = "_xxOrderFirst_sh0ss_1513", yg = "_xxOrderLast_sh0ss_1516", xg = "_xxOrder0_sh0ss_1519", vg = "_xxOrder1_sh0ss_1522", wg = "_xxOrder2_sh0ss_1525", kg = "_xxOrder3_sh0ss_1528", Ng = "_xxOrder4_sh0ss_1531", Sg = "_xxOrder5_sh0ss_1534", Og = "_xxOrder6_sh0ss_1537", $g = "_xxOrder7_sh0ss_1540", Eg = "_xxOrder8_sh0ss_1543", Tg = "_xxOrder9_sh0ss_1546", Cg = "_xxOrder10_sh0ss_1549", Ag = "_xxOrder11_sh0ss_1552", Dg = "_xxOrder12_sh0ss_1555", Qr = {
  column: w_,
  Size1: k_,
  Size2: N_,
  Size3: S_,
  Size4: O_,
  Size5: $_,
  Size6: E_,
  Size7: T_,
  Size8: C_,
  Size9: A_,
  Size10: D_,
  Size11: M_,
  Size12: I_,
  Offset0: z_,
  Offset1: L_,
  Offset2: R_,
  Offset3: P_,
  Offset4: j_,
  Offset5: B_,
  Offset6: F_,
  Offset7: H_,
  Offset8: U_,
  Offset9: q_,
  Offset10: K_,
  Offset11: W_,
  Offset12: G_,
  OrderFirst: V_,
  OrderLast: Y_,
  Order0: X_,
  Order1: Z_,
  Order2: J_,
  Order3: Q_,
  Order4: ep,
  Order5: tp,
  Order6: np,
  Order7: rp,
  Order8: sp,
  Order9: op,
  Order10: lp,
  Order11: ap,
  Order12: ip,
  xsSize1: cp,
  xsSize2: dp,
  xsSize3: up,
  xsSize4: fp,
  xsSize5: _p,
  xsSize6: pp,
  xsSize7: mp,
  xsSize8: hp,
  xsSize9: gp,
  xsSize10: bp,
  xsSize11: yp,
  xsSize12: xp,
  xsOffset0: vp,
  xsOffset1: wp,
  xsOffset2: kp,
  xsOffset3: Np,
  xsOffset4: Sp,
  xsOffset5: Op,
  xsOffset6: $p,
  xsOffset7: Ep,
  xsOffset8: Tp,
  xsOffset9: Cp,
  xsOffset10: Ap,
  xsOffset11: Dp,
  xsOffset12: Mp,
  xsOrderFirst: Ip,
  xsOrderLast: zp,
  xsOrder0: Lp,
  xsOrder1: Rp,
  xsOrder2: Pp,
  xsOrder3: jp,
  xsOrder4: Bp,
  xsOrder5: Fp,
  xsOrder6: Hp,
  xsOrder7: Up,
  xsOrder8: qp,
  xsOrder9: Kp,
  xsOrder10: Wp,
  xsOrder11: Gp,
  xsOrder12: Vp,
  smSize1: Yp,
  smSize2: Xp,
  smSize3: Zp,
  smSize4: Jp,
  smSize5: Qp,
  smSize6: em,
  smSize7: tm,
  smSize8: nm,
  smSize9: rm,
  smSize10: sm,
  smSize11: om,
  smSize12: lm,
  smOffset0: am,
  smOffset1: im,
  smOffset2: cm,
  smOffset3: dm,
  smOffset4: um,
  smOffset5: fm,
  smOffset6: _m,
  smOffset7: pm,
  smOffset8: mm,
  smOffset9: hm,
  smOffset10: gm,
  smOffset11: bm,
  smOffset12: ym,
  smOrderFirst: xm,
  smOrderLast: vm,
  smOrder0: wm,
  smOrder1: km,
  smOrder2: Nm,
  smOrder3: Sm,
  smOrder4: Om,
  smOrder5: $m,
  smOrder6: Em,
  smOrder7: Tm,
  smOrder8: Cm,
  smOrder9: Am,
  smOrder10: Dm,
  smOrder11: Mm,
  smOrder12: Im,
  mdSize1: zm,
  mdSize2: Lm,
  mdSize3: Rm,
  mdSize4: Pm,
  mdSize5: jm,
  mdSize6: Bm,
  mdSize7: Fm,
  mdSize8: Hm,
  mdSize9: Um,
  mdSize10: qm,
  mdSize11: Km,
  mdSize12: Wm,
  mdOffset0: Gm,
  mdOffset1: Vm,
  mdOffset2: Ym,
  mdOffset3: Xm,
  mdOffset4: Zm,
  mdOffset5: Jm,
  mdOffset6: Qm,
  mdOffset7: eh,
  mdOffset8: th,
  mdOffset9: nh,
  mdOffset10: rh,
  mdOffset11: sh,
  mdOffset12: oh,
  mdOrderFirst: lh,
  mdOrderLast: ah,
  mdOrder0: ih,
  mdOrder1: ch,
  mdOrder2: dh,
  mdOrder3: uh,
  mdOrder4: fh,
  mdOrder5: _h,
  mdOrder6: ph,
  mdOrder7: mh,
  mdOrder8: hh,
  mdOrder9: gh,
  mdOrder10: bh,
  mdOrder11: yh,
  mdOrder12: xh,
  lgSize1: vh,
  lgSize2: wh,
  lgSize3: kh,
  lgSize4: Nh,
  lgSize5: Sh,
  lgSize6: Oh,
  lgSize7: $h,
  lgSize8: Eh,
  lgSize9: Th,
  lgSize10: Ch,
  lgSize11: Ah,
  lgSize12: Dh,
  lgOffset0: Mh,
  lgOffset1: Ih,
  lgOffset2: zh,
  lgOffset3: Lh,
  lgOffset4: Rh,
  lgOffset5: Ph,
  lgOffset6: jh,
  lgOffset7: Bh,
  lgOffset8: Fh,
  lgOffset9: Hh,
  lgOffset10: Uh,
  lgOffset11: qh,
  lgOffset12: Kh,
  lgOrderFirst: Wh,
  lgOrderLast: Gh,
  lgOrder0: Vh,
  lgOrder1: Yh,
  lgOrder2: Xh,
  lgOrder3: Zh,
  lgOrder4: Jh,
  lgOrder5: Qh,
  lgOrder6: e1,
  lgOrder7: t1,
  lgOrder8: n1,
  lgOrder9: r1,
  lgOrder10: s1,
  lgOrder11: o1,
  lgOrder12: l1,
  xlSize1: a1,
  xlSize2: i1,
  xlSize3: c1,
  xlSize4: d1,
  xlSize5: u1,
  xlSize6: f1,
  xlSize7: _1,
  xlSize8: p1,
  xlSize9: m1,
  xlSize10: h1,
  xlSize11: g1,
  xlSize12: b1,
  xlOffset0: y1,
  xlOffset1: x1,
  xlOffset2: v1,
  xlOffset3: w1,
  xlOffset4: k1,
  xlOffset5: N1,
  xlOffset6: S1,
  xlOffset7: O1,
  xlOffset8: $1,
  xlOffset9: E1,
  xlOffset10: T1,
  xlOffset11: C1,
  xlOffset12: A1,
  xlOrderFirst: D1,
  xlOrderLast: M1,
  xlOrder0: I1,
  xlOrder1: z1,
  xlOrder2: L1,
  xlOrder3: R1,
  xlOrder4: P1,
  xlOrder5: j1,
  xlOrder6: B1,
  xlOrder7: F1,
  xlOrder8: H1,
  xlOrder9: U1,
  xlOrder10: q1,
  xlOrder11: K1,
  xlOrder12: W1,
  xxSize1: G1,
  xxSize2: V1,
  xxSize3: Y1,
  xxSize4: X1,
  xxSize5: Z1,
  xxSize6: J1,
  xxSize7: Q1,
  xxSize8: eg,
  xxSize9: tg,
  xxSize10: ng,
  xxSize11: rg,
  xxSize12: sg,
  xxOffset0: og,
  xxOffset1: lg,
  xxOffset2: ag,
  xxOffset3: ig,
  xxOffset4: cg,
  xxOffset5: dg,
  xxOffset6: ug,
  xxOffset7: fg,
  xxOffset8: _g,
  xxOffset9: pg,
  xxOffset10: mg,
  xxOffset11: hg,
  xxOffset12: gg,
  xxOrderFirst: bg,
  xxOrderLast: yg,
  xxOrder0: xg,
  xxOrder1: vg,
  xxOrder2: wg,
  xxOrder3: kg,
  xxOrder4: Ng,
  xxOrder5: Sg,
  xxOrder6: Og,
  xxOrder7: $g,
  xxOrder8: Eg,
  xxOrder9: Tg,
  xxOrder10: Cg,
  xxOrder11: Ag,
  xxOrder12: Dg
}, Mg = [
  ["", "size", "offset", "order"],
  ["xs", "sizeXs", "offsetXs", "orderXs"],
  ["sm", "sizeSm", "offsetSm", "orderSm"],
  ["md", "sizeMd", "offsetMd", "orderMd"],
  ["lg", "sizeLg", "offsetLg", "orderLg"],
  ["xl", "sizeXl", "offsetXl", "orderXl"],
  ["xx", "sizeXx", "offsetXx", "orderXx"]
];
function Ig(e, t) {
  if (!Number.isInteger(t) || t < 1 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 1 and 12.`
    );
}
function zg(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12.`
    );
}
function Lg(e, t) {
  if (!Number.isInteger(t) || t < 0 || t > 12)
    throw new RangeError(
      `Column property ${e} value should be between 0 and 12 or first/last.`
    );
}
function Rg(e, t, n) {
  return t === "first" ? `${e}OrderFirst` : t === "last" ? `${e}OrderLast` : (Lg(n, t), `${e}Order${t}`);
}
function sS({ className: e, style: t, ...n }) {
  const r = [Qr.column], l = { ...t };
  for (const [D, I, k, O] of Mg) {
    const E = n[I], P = n[k], L = n[O];
    if (E != null) {
      Ig(I, E);
      const j = Qr[`${D}Size${E}`];
      j && r.push(j);
    }
    if (P != null) {
      zg(k, P);
      const j = Qr[`${D}Offset${P}`];
      j && r.push(j);
    }
    if (L != null) {
      const j = Qr[Rg(D, L, O)];
      j && r.push(j);
    }
  }
  const {
    size: i,
    offset: d,
    sizeXs: o,
    offsetXs: a,
    sizeSm: c,
    offsetSm: f,
    sizeMd: u,
    offsetMd: x,
    sizeLg: h,
    offsetLg: g,
    sizeXl: m,
    offsetXl: b,
    sizeXx: p,
    offsetXx: _,
    order: y,
    orderXs: N,
    orderSm: v,
    orderMd: $,
    orderLg: S,
    orderXl: T,
    orderXx: A,
    ...C
  } = n;
  return /* @__PURE__ */ s(
    "div",
    {
      className: [...r, e].filter(Boolean).join(" "),
      style: l,
      ...C
    }
  );
}
const Pg = "_stack_bmbbp_1", Ar = {
  stack: Pg,
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
function zo(e) {
  return e === !1 || e === "nowrap" ? "nowrap" : e === "wrap-reverse" ? "wrap-reverse" : "wrap";
}
function oS({
  orientation: e = "vertical",
  reverse: t = !1,
  wrap: n = !0,
  gap: r = 16,
  align: l,
  justify: i,
  className: d,
  style: o,
  ...a
}) {
  const c = e === "horizontal" ? t ? "row-reverse" : "row" : t ? "column-reverse" : "column", f = {
    ...r != null ? { gap: cs(r) } : {},
    ...o
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: [
        Ar.stack,
        Ar[`dir-${c}`],
        zo(n) !== "wrap" ? Ar[`wrap-${zo(n)}`] : null,
        l != null ? Ar[`align-${l}`] : null,
        i != null ? Ar[`justify-${i}`] : null,
        d
      ].filter(Boolean).join(" "),
      style: f,
      ...a
    }
  );
}
const jg = "_autogrid_16x9f_1", Bg = {
  autogrid: jg
};
function lS({
  min: e = 240,
  gap: t = 12,
  className: n,
  style: r,
  visible: l = !0,
  ...i
}) {
  if (l === !1) return null;
  const d = {
    // Keep --dx-autogrid-min in sync so the track math follows the prop.
    "--dx-autogrid-min": typeof e == "number" ? `${e}px` : e,
    ...t != null ? { gap: cs(t) } : {},
    ...r
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: [Bg.autogrid, n].filter(Boolean).join(" "),
      style: d,
      ...i
    }
  );
}
const Fg = "_layout_fxvw1_1", Hg = "_row_fxvw1_7", Ug = "_grid_fxvw1_21", qg = "_gridRight_fxvw1_27", Kg = "_gridHeader_fxvw1_31", Wg = "_gridFooter_fxvw1_36", Gg = "_gridContents_fxvw1_41", Vg = "_gridBody_fxvw1_45", An = {
  layout: Fg,
  row: Hg,
  grid: Ug,
  gridRight: qg,
  gridHeader: Kg,
  gridFooter: Wg,
  gridContents: Gg,
  gridBody: Vg
}, Yg = "_footer_3be5w_1", Xg = "_sticky_3be5w_9", Lo = {
  footer: Yg,
  sticky: Xg
};
function Zg({
  sticky: e = !1,
  className: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ s(
    "footer",
    {
      className: [Lo.footer, e ? Lo.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const Jg = "_header_1tw8b_1", Qg = "_sticky_1tw8b_9", Ro = {
  header: Jg,
  sticky: Qg
};
function eb({
  sticky: e = !1,
  className: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ s(
    "header",
    {
      className: [Ro.header, e ? Ro.sticky : null, t].filter(Boolean).join(" "),
      ...r,
      children: n
    }
  );
}
const tb = "_sidebar_175d5_1", nb = "_sticky_175d5_23", rb = "_left_175d5_41", sb = "_right_175d5_45", ob = "_start_175d5_50", lb = "_end_175d5_54", ab = "_fullHeight_175d5_60", ib = "_collapsed_175d5_64", cb = "_responsive_175d5_72", db = "_overlay_175d5_80", ub = "_mask_175d5_108", qn = {
  sidebar: tb,
  sticky: nb,
  left: rb,
  right: sb,
  start: ob,
  end: lb,
  fullHeight: ab,
  collapsed: ib,
  responsive: cb,
  overlay: db,
  mask: ub
};
function fb({
  position: e = "left",
  expanded: t = !0,
  responsive: n = !1,
  overlay: r = !1,
  fullHeight: l = !1,
  sticky: i = !1,
  onClose: d,
  className: o,
  children: a,
  ...c
}) {
  return ve(() => {
    if (!r || !t || d == null) return;
    const f = (u) => {
      u.key === "Escape" && d();
    };
    return document.addEventListener("keydown", f), () => document.removeEventListener("keydown", f);
  }, [r, t, d]), /* @__PURE__ */ M(pt, { children: [
    r && t ? /* @__PURE__ */ s(
      "div",
      {
        className: `${qn.mask} se-layout-mask`,
        "aria-hidden": "true",
        onClick: d
      }
    ) : null,
    /* @__PURE__ */ s(
      "aside",
      {
        className: [
          qn.sidebar,
          qn[e],
          t ? null : qn.collapsed,
          n ? qn.responsive : null,
          r ? [qn.overlay, "se-sidebar--overlay"] : null,
          l ? qn.fullHeight : null,
          i && !r && !l ? qn.sticky : null,
          o
        ].flat().filter(Boolean).join(" "),
        ...c,
        children: a
      }
    )
  ] });
}
function aS(e) {
  if (e.bare === !0)
    return /* @__PURE__ */ s(pt, { children: e.children });
  const { className: t, children: n, ...r } = e, l = [], i = [], d = [], o = [], a = [], c = [];
  Ur.forEach(n, (x) => {
    if (!qt(x)) {
      d.push(x);
      return;
    }
    if (x.type === eb)
      l.push(x);
    else if (x.type === Zg)
      i.push(x);
    else if (x.type === fb) {
      const h = x, g = h.props.position;
      c.push(h), (g === "right" || g === "end" ? a : o).push(h);
    } else
      d.push(x);
  });
  const f = c.length === 1 && c[0]?.props.fullHeight === !0 ? c[0] : null, u = f != null && (f.props.position === "right" || f.props.position === "end");
  if (f) {
    const x = u ? a : o;
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
          l.length > 0 && /* @__PURE__ */ s("div", { className: An.gridHeader, children: l }),
          /* @__PURE__ */ M("div", { className: An.gridContents, children: [
            x,
            /* @__PURE__ */ s("div", { className: An.gridBody, children: d })
          ] }),
          i.length > 0 && /* @__PURE__ */ s("div", { className: An.gridFooter, children: i })
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
          o,
          d,
          a
        ] }),
        i
      ]
    }
  );
}
const _b = "_body_1ge00_4", pb = "_bare_1ge00_12", Po = {
  body: _b,
  bare: pb
};
function iS({
  as: e = "main",
  padded: t = !0,
  className: n,
  children: r,
  ...l
}) {
  return /* @__PURE__ */ s(
    e,
    {
      className: [Po.body, t ? null : Po.bare, n].filter(Boolean).join(" "),
      ...l,
      children: r
    }
  );
}
const mb = "_toggle_lxnk5_1", hb = {
  toggle: mb
};
function cS({
  icon: e = "menu",
  label: t = "Toggle sidebar",
  className: n,
  type: r = "button",
  children: l,
  ...i
}) {
  return /* @__PURE__ */ s(
    "button",
    {
      type: r,
      "aria-label": t,
      className: [hb.toggle, n].filter(Boolean).join(" "),
      ...i,
      children: l ?? /* @__PURE__ */ s(Me, { icon: e, size: 20 })
    }
  );
}
const gb = "_track_14127_1", bb = "_bar_14127_31", yb = "_primary_14127_39", xb = "_success_14127_43", vb = "_warning_14127_47", wb = "_danger_14127_51", kb = "_indeterminate_14127_149", Nb = "_circular_14127_163", Sb = "_fill_14127_203", nn = {
  track: gb,
  "linear-xs": "_linear-xs_14127_11",
  "linear-sm": "_linear-sm_14127_15",
  "linear-md": "_linear-md_14127_19",
  "linear-lg": "_linear-lg_14127_23",
  "linear-xl": "_linear-xl_14127_27",
  bar: bb,
  primary: yb,
  success: xb,
  warning: vb,
  danger: wb,
  "shade-lighter": "_shade-lighter_14127_133",
  "shade-light": "_shade-light_14127_133",
  "shade-dark": "_shade-dark_14127_141",
  "shade-darker": "_shade-darker_14127_145",
  indeterminate: kb,
  "se-progress-slide": "_se-progress-slide_14127_1",
  circular: Nb,
  "circular-xs": "_circular-xs_14127_169",
  "circular-sm": "_circular-sm_14127_174",
  "circular-md": "_circular-md_14127_179",
  "circular-lg": "_circular-lg_14127_184",
  "circular-xl": "_circular-xl_14127_189",
  fill: Sb,
  "se-progress-spin": "_se-progress-spin_14127_1"
};
function dS({
  value: e = 0,
  max: t = 100,
  severity: n = "primary",
  shade: r,
  indeterminate: l = !1,
  variant: i = "linear",
  size: d = "md",
  className: o,
  visible: a = !0,
  ...c
}) {
  if (a === !1) return null;
  const f = t > 0 ? Math.min(t, Math.max(0, e)) : 0, u = t > 0 ? f / t * 100 : 0;
  if (i === "circular") {
    const h = typeof d == "string", g = 2, m = 10.5, b = 2 * Math.PI * m, p = b * (l ? 0.75 : 1), _ = l ? 0 : b * (1 - u / 100), y = Hr(r);
    return /* @__PURE__ */ M(
      "svg",
      {
        width: h ? void 0 : d,
        height: h ? void 0 : d,
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
          y ? nn[y] : null,
          h ? nn[`circular-${d}`] : null,
          l ? nn.indeterminate : null,
          o
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ s(
            "circle",
            {
              className: nn.track,
              cx: 12,
              cy: 12,
              r: m,
              strokeWidth: g
            }
          ),
          /* @__PURE__ */ s(
            "circle",
            {
              className: nn.fill,
              cx: 12,
              cy: 12,
              r: m,
              strokeWidth: g,
              strokeDasharray: `${p} ${b}`,
              strokeDashoffset: _
            }
          )
        ]
      }
    );
  }
  const x = Hr(r);
  return /* @__PURE__ */ s(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": l ? void 0 : Math.round(f),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        nn.track,
        nn[n],
        x ? nn[x] : null,
        typeof d == "string" ? nn[`linear-${d}`] : null,
        l ? nn.indeterminate : null,
        o
      ].filter(Boolean).join(" "),
      ...c,
      children: /* @__PURE__ */ s(
        "div",
        {
          className: nn.bar,
          style: l ? void 0 : { width: `${u}%` }
        }
      )
    }
  );
}
const Ob = "_wrapper_tk30z_1", $b = {
  wrapper: Ob
}, Eb = [
  "default",
  "fluent",
  "github",
  "material",
  "material-3",
  "shadcn"
], yl = "dx-palette", Tb = "data-palette";
function Cb(e, t) {
  const n = e === void 0 ? yl : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      const r = localStorage.getItem(n);
      return r != null && t.includes(r) ? r : void 0;
    } catch {
      return;
    }
}
function Ab(e, t) {
  const n = e === void 0 ? yl : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function uS({
  themes: e = Eb,
  value: t,
  defaultValue: n,
  storageKey: r,
  attribute: l = Tb,
  onChange: i,
  label: d = "Theme",
  placeholder: o = "Theme…",
  id: a,
  size: c = "md",
  className: f
}) {
  const [u, x] = q(void 0), h = t !== void 0, g = t ?? u ?? Cb(r, e) ?? n, m = g ?? "", b = oe(void 0);
  ve(() => {
    if (h) return;
    const _ = document.documentElement;
    if (g === void 0) {
      b.current !== void 0 && _.getAttribute(l) === b.current && (_.removeAttribute(l), b.current = void 0);
      return;
    }
    _.setAttribute(l, g), b.current = g;
  }, [g, l, h]);
  const p = (_) => {
    const y = _.target.value;
    h || (x(y), Ab(r, y)), i?.(y);
  };
  return /* @__PURE__ */ M("label", { className: [$b.wrapper, f].filter(Boolean).join(" "), children: [
    d,
    /* @__PURE__ */ M(sr, { id: a, size: c, value: m, onChange: p, children: [
      g === void 0 && /* @__PURE__ */ s("option", { value: "", disabled: !0, children: o }),
      g !== void 0 && !e.includes(g) && /* @__PURE__ */ s("option", { value: g, children: g }),
      e.map((_) => /* @__PURE__ */ s("option", { value: _, children: _ }, _))
    ] })
  ] });
}
function Db(e) {
  return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(e).matches;
}
function Vs(e) {
  const [t, n] = q(() => Db(e));
  return ve(() => {
    if (typeof window > "u" || typeof window.matchMedia != "function")
      return;
    const r = window.matchMedia(e);
    n(r.matches);
    const l = (i) => n(i.matches);
    return typeof r.addEventListener == "function" ? (r.addEventListener("change", l), () => r.removeEventListener("change", l)) : (r.addListener(l), () => r.removeListener(l));
  }, [e]), t;
}
const Mb = "_pressed_12x15_8", Ib = {
  pressed: Mb
}, zb = st(
  function({
    pressed: t,
    defaultPressed: n = !1,
    onChange: r,
    toggleVariant: l,
    toggleSeverity: i = "primary",
    toggleShade: d = "darker",
    toggleContent: o,
    size: a = "md",
    className: c,
    onClick: f,
    children: u,
    variant: x,
    severity: h,
    shade: g,
    ...m
  }, b) {
    const [p, _] = q(n), y = t ?? p, N = (v) => {
      const $ = !y;
      t === void 0 && _($), r?.($), f?.(v);
    };
    return /* @__PURE__ */ s(
      yn,
      {
        ...m,
        ref: b,
        variant: y && l ? l : x,
        severity: y ? i : h,
        shade: y ? d : g,
        size: a,
        "aria-pressed": y,
        className: [y ? Ib.pressed : null, c].filter(Boolean).join(" "),
        onClick: N,
        children: y && o !== void 0 ? o : u
      }
    );
  }
), xl = "dx-theme";
function Lb(e) {
  const t = e === void 0 ? xl : e;
  if (!(t === null || typeof localStorage > "u"))
    try {
      const n = localStorage.getItem(t);
      return n === "light" || n === "dark" || n === "system" ? n : void 0;
    } catch {
      return;
    }
}
function Rb(e, t) {
  const n = e === void 0 ? xl : e;
  if (!(n === null || typeof localStorage > "u"))
    try {
      localStorage.setItem(n, t);
    } catch {
    }
}
function fS({
  value: e,
  defaultValue: t,
  storageKey: n,
  onChange: r,
  label: l = "Dark mode",
  id: i,
  className: d,
  size: o
}) {
  const a = Vs("(prefers-color-scheme: dark)"), [c, f] = q(void 0), u = e !== void 0, x = e ?? c ?? Lb(n) ?? t ?? "system", h = x === "system" ? a ? "dark" : "light" : x;
  return ve(() => {
    if (!u) {
      if (x === "system") {
        delete document.documentElement.dataset.theme;
        return;
      }
      document.documentElement.dataset.theme = x;
    }
  }, [x, u]), /* @__PURE__ */ s(
    zb,
    {
      id: i,
      size: o,
      className: d,
      "aria-label": l,
      variant: "text",
      severity: "base",
      pressed: h === "dark",
      onChange: (m) => {
        const b = m ? "dark" : "light";
        u || (f(b), Rb(n, b)), r?.(b);
      },
      toggleContent: /* @__PURE__ */ s(Me, { icon: "light_mode", size: o ?? "md" }),
      children: /* @__PURE__ */ s(Me, { icon: "dark_mode", size: o ?? "md" })
    }
  );
}
const vl = "dx-palette", wl = "dx-theme", Rs = "data-palette", Ps = "data-theme", js = /* @__PURE__ */ new Set();
function Pb() {
  if (typeof document > "u") return { theme: null, appearance: null };
  const e = document.documentElement.getAttribute(Rs), t = document.documentElement.getAttribute(Ps);
  return {
    theme: e,
    appearance: t === "light" || t === "dark" ? t : null
  };
}
function Ys(e) {
  typeof document > "u" || (e.theme == null ? document.documentElement.removeAttribute(Rs) : document.documentElement.setAttribute(Rs, e.theme), e.appearance == null ? document.documentElement.removeAttribute(Ps) : document.documentElement.setAttribute(Ps, e.appearance));
}
function kl(e, t) {
  try {
    if (typeof localStorage > "u") return;
    t == null ? localStorage.removeItem(e) : localStorage.setItem(e, t);
  } catch {
  }
}
function jo(e) {
  try {
    return typeof localStorage > "u" ? null : localStorage.getItem(e);
  } catch {
    return null;
  }
}
let Bo = !1;
function br() {
  const e = Pb();
  if (!Bo) {
    Bo = !0;
    const t = jo(vl), n = jo(wl), r = e.appearance ?? (n === "light" || n === "dark" ? n : null), l = { theme: e.theme ?? t, appearance: r };
    return (l.theme != null || l.appearance != null) && Ys(l), l;
  }
  return e;
}
function Nl() {
  const e = br();
  js.forEach((t) => t({ ...e }));
}
function Fo(e) {
  return js.add(e), () => {
    js.delete(e);
  };
}
function _S() {
  return br().theme;
}
function jb(e) {
  const t = br();
  t.theme !== e && (t.theme = e, Ys(t), kl(vl, e), Nl());
}
function pS() {
  return br().appearance;
}
function Bb(e) {
  const t = br();
  t.appearance !== e && (t.appearance = e, Ys(t), kl(wl, e), Nl());
}
function mS() {
  const [, e] = q(0);
  ve(() => Fo(() => e((n) => n + 1)), []);
  const t = br();
  return {
    theme: t.theme,
    appearance: t.appearance,
    setTheme: jb,
    setAppearance: Bb,
    subscribe: Fo
  };
}
function Fb(e) {
  const t = new TextEncoder().encode(e), n = t.length * 8, r = ((t.length + 8 >> 6) + 1) * 64, l = new Uint8Array(r);
  l.set(t), l[t.length] = 128;
  const i = new DataView(l.buffer);
  i.setUint32(r - 8, n >>> 0, !0), i.setUint32(r - 4, Math.floor(n / 4294967296), !0);
  const d = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21], o = Array.from(
    { length: 64 },
    (m, b) => Math.floor(Math.abs(Math.sin(b + 1)) * 4294967296)
  ), a = (m, b) => m + b | 0, c = (m, b) => m << b | m >>> 32 - b;
  let f = 1732584193, u = 4023233417, x = 2562383102, h = 271733878;
  for (let m = 0; m < r; m += 64) {
    const b = [];
    for (let v = 0; v < 16; v += 1)
      b.push(i.getUint32(m + v * 4, !0));
    let p = f, _ = u, y = x, N = h;
    for (let v = 0; v < 64; v += 1) {
      let $, S;
      v < 16 ? ($ = _ & y | ~_ & N, S = v) : v < 32 ? ($ = N & _ | ~N & y, S = (5 * v + 1) % 16) : v < 48 ? ($ = _ ^ y ^ N, S = (3 * v + 5) % 16) : ($ = y ^ (_ | ~N), S = 7 * v % 16), $ = a(a(a($, p), o[v]), b[S]), p = N, N = y, y = _, _ = a(_, c($, d[Math.floor(v / 16) * 4 + v % 4]));
    }
    f = a(f, p), u = a(u, _), x = a(x, y), h = a(h, N);
  }
  const g = (m) => {
    let b = "";
    for (let p = 0; p < 4; p += 1)
      b += `0${(m >>> p * 8 & 255).toString(16)}`.slice(-2);
    return b;
  };
  return g(f) + g(u) + g(x) + g(h);
}
const Hb = "_avatar_1mhfr_1", Ub = "_xs_1mhfr_12", qb = "_sm_1mhfr_18", Kb = "_md_1mhfr_24", Wb = "_lg_1mhfr_30", Gb = "_xl_1mhfr_36", Vb = "_initials_1mhfr_42", Yb = "_image_1mhfr_57", Xb = "_status_1mhfr_64", Zb = "_online_1mhfr_84", Jb = "_offline_1mhfr_88", Qb = "_away_1mhfr_92", cr = {
  avatar: Hb,
  xs: Ub,
  sm: qb,
  md: Kb,
  lg: Wb,
  xl: Gb,
  initials: Vb,
  image: Yb,
  status: Xb,
  online: Zb,
  offline: Jb,
  away: Qb
}, ey = {
  xs: 20,
  sm: 28,
  md: 36,
  lg: 44,
  xl: 52
}, ls = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
];
function ty(e) {
  return e.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function ny(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1)
    t = t * 31 + e.charCodeAt(n) >>> 0;
  return ls[t % ls.length] ?? ls[0];
}
function hS({
  name: e,
  src: t,
  email: n,
  gravatarDefault: r = "retro",
  gravatarRating: l = "g",
  alt: i,
  size: d = "md",
  status: o,
  className: a
}) {
  const c = Oe(() => e ? ty(e) : "?", [e]), f = Oe(() => e ? ny(e) : ls[0], [e]), u = Oe(() => {
    if (t != null || n == null) return;
    const N = n.trim().toLowerCase();
    return N === "" ? void 0 : `https://secure.gravatar.com/avatar/${Fb(N)}?d=${r}&s=${ey[d]}&r=${l}`;
  }, [t, n, r, l, d]), x = t ?? u, [h, g] = q(null), m = x != null && h !== x, b = m && i === "", p = i ?? e ?? "avatar", _ = o ? `${p}, ${o}` : p, y = m ? (
    // onError here is load handling, not interaction — no mouse or
    // keyboard listener is attached to the image.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    /* @__PURE__ */ s(
      "img",
      {
        className: cr.image,
        src: x,
        alt: b ? "" : o ? _ : p,
        onError: () => g(x ?? null)
      }
    )
  ) : /* @__PURE__ */ s(
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
        o ? cr[o] : null,
        a
      ].filter(Boolean).join(" "),
      role: m ? void 0 : "img",
      "aria-label": m ? void 0 : _,
      children: [
        y,
        o && /* @__PURE__ */ s("span", { className: cr.status, "aria-hidden": "true" })
      ]
    }
  );
}
const ry = "_root_zzwfz_1", sy = "_left_zzwfz_6", oy = "_right_zzwfz_7", ly = "_panel_zzwfz_12", ay = "_bottom_zzwfz_20", iy = "_tabList_zzwfz_24", cy = "_underline_zzwfz_53", dy = "_pills_zzwfz_72", uy = "_tab_zzwfz_24", fy = "_active_zzwfz_113", _y = "_disabled_zzwfz_139", Dn = {
  root: ry,
  left: sy,
  right: oy,
  panel: ly,
  bottom: ay,
  tabList: iy,
  underline: cy,
  pills: dy,
  tab: uy,
  active: fy,
  disabled: _y
};
function gS({
  items: e,
  value: t,
  defaultValue: n,
  onChange: r,
  variant: l = "underline",
  position: i = "top",
  className: d
}) {
  const o = ot(), a = oe(null), [c, f] = q(
    n ?? e[0]?.key ?? ""
  ), u = t ?? c, x = i === "left" || i === "right", h = (b) => {
    f(b), r?.(b);
  }, g = (b) => {
    const p = e.filter((N) => !N.disabled), _ = p.findIndex((N) => N.key === u);
    let y = -1;
    b.key === "ArrowRight" || x && b.key === "ArrowDown" ? y = (_ + 1) % p.length : b.key === "ArrowLeft" || x && b.key === "ArrowUp" ? y = (_ - 1 + p.length) % p.length : b.key === "Home" ? y = 0 : b.key === "End" && (y = p.length - 1), y >= 0 && (b.preventDefault(), a.current?.querySelector(
      `[data-tab-key="${CSS.escape(p[y]?.key ?? "")}"]`
    )?.focus(), h(p[y]?.key ?? ""));
  }, m = e.find((b) => b.key === u);
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Dn.root, Dn[i], d].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ s(
          "div",
          {
            ref: a,
            role: "tablist",
            className: [Dn.tabList, Dn[l], Dn[i]].filter(Boolean).join(" "),
            onKeyDown: g,
            children: e.map((b) => {
              const p = b.key === u;
              return /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  role: "tab",
                  id: `${o}-tab-${b.key}`,
                  "data-tab-key": b.key,
                  "aria-selected": p,
                  "aria-controls": `${o}-panel-${b.key}`,
                  tabIndex: p ? 0 : -1,
                  disabled: b.disabled,
                  className: [
                    Dn.tab,
                    p ? Dn.active : null,
                    b.disabled ? Dn.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => h(b.key),
                  children: b.label
                },
                b.key
              );
            })
          }
        ),
        m && /* @__PURE__ */ s(
          "div",
          {
            role: "tabpanel",
            id: `${o}-panel-${m.key}`,
            "aria-labelledby": `${o}-tab-${m.key}`,
            className: Dn.panel,
            children: m.content
          }
        )
      ]
    }
  );
}
const py = "_root_1l1j2_1", my = "_item_1l1j2_9", hy = "_heading_1l1j2_13", gy = "_trigger_1l1j2_17", by = "_disabled_1l1j2_34", yy = "_title_1l1j2_48", xy = "_chevron_1l1j2_52", vy = "_open_1l1j2_59", wy = "_content_1l1j2_63", Mn = {
  root: py,
  item: my,
  heading: hy,
  trigger: gy,
  disabled: by,
  title: yy,
  chevron: xy,
  open: vy,
  content: wy
};
function bS({
  items: e,
  multiple: t = !1,
  value: n,
  defaultValue: r,
  onChange: l,
  className: i
}) {
  const d = ot(), [o, a] = q(
    r ?? []
  ), c = n ?? o, f = (u) => {
    const x = c.includes(u) ? c.filter((h) => h !== u) : t ? [...c, u] : [u];
    a(x), l?.(x);
  };
  return /* @__PURE__ */ s("div", { className: [Mn.root, i].filter(Boolean).join(" "), children: e.map((u) => {
    const x = c.includes(u.key), h = `${d}-panel-${u.key}`, g = `${d}-trigger-${u.key}`;
    return /* @__PURE__ */ M("div", { className: Mn.item, children: [
      /* @__PURE__ */ s("h3", { className: Mn.heading, children: /* @__PURE__ */ M(
        "button",
        {
          type: "button",
          id: g,
          "aria-expanded": x,
          "aria-controls": h,
          disabled: u.disabled,
          className: [
            Mn.trigger,
            u.disabled ? Mn.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => f(u.key),
          children: [
            /* @__PURE__ */ s("span", { className: Mn.title, children: u.title }),
            /* @__PURE__ */ s(
              "span",
              {
                className: [Mn.chevron, x ? Mn.open : null].filter(Boolean).join(" "),
                "aria-hidden": "true",
                children: /* @__PURE__ */ s(Me, { icon: "keyboard_arrow_down", size: 12 })
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ s(
        "div",
        {
          id: h,
          role: "region",
          "aria-labelledby": g,
          hidden: !x,
          className: Mn.content,
          children: u.content
        }
      )
    ] }, u.key);
  }) });
}
const ky = "_textarea_l7fsl_1", Ny = "_invalid_l7fsl_27", Sy = "_xs_l7fsl_34", Oy = "_sm_l7fsl_39", $y = "_md_l7fsl_44", Ey = "_lg_l7fsl_49", Ty = "_xl_l7fsl_54", es = {
  textarea: ky,
  invalid: Ny,
  xs: Sy,
  sm: Oy,
  md: $y,
  lg: Ey,
  xl: Ty,
  "resize-none": "_resize-none_l7fsl_59",
  "resize-vertical": "_resize-vertical_l7fsl_63",
  "resize-horizontal": "_resize-horizontal_l7fsl_67",
  "resize-both": "_resize-both_l7fsl_71"
}, yS = st(
  function({ size: t = "md", resize: n = "none", invalid: r = !1, className: l, ...i }, d) {
    return /* @__PURE__ */ s(
      "textarea",
      {
        ref: d,
        "data-size": t,
        className: [
          es.textarea,
          es[t],
          es[`resize-${n}`],
          r ? es.invalid : null,
          l
        ].filter(Boolean).join(" "),
        "aria-invalid": r || void 0,
        ...i
      }
    );
  }
), Cy = "_root_xyp2i_1", Ay = "_trigger_xyp2i_9", Dy = "_invalid_xyp2i_40", My = "_placeholder_xyp2i_47", Iy = "_label_xyp2i_54", zy = "_chevron_xyp2i_60", Ly = "_chevronOpen_xyp2i_70", Ry = "_menu_xyp2i_74", Py = "_option_xyp2i_89", jy = "_disabled_xyp2i_100", By = "_active_xyp2i_104", Fy = "_selected_xyp2i_105", Hy = "_header_xyp2i_115", Uy = "_xs_xyp2i_122", qy = "_sm_xyp2i_128", Ky = "_md_xyp2i_134", Wy = "_lg_xyp2i_140", Gy = "_xl_xyp2i_146", Ht = {
  root: Cy,
  trigger: Ay,
  invalid: Dy,
  placeholder: My,
  label: Iy,
  chevron: zy,
  chevronOpen: Ly,
  menu: Ry,
  option: Py,
  disabled: jy,
  active: By,
  selected: Fy,
  header: Hy,
  xs: Uy,
  sm: qy,
  md: Ky,
  lg: Wy,
  xl: Gy
}, Vy = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;
function xS({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: r,
  placeholder: l = "Select…",
  size: i = "md",
  invalid: d = !1,
  disabled: o = !1,
  className: a,
  ...c
}) {
  const f = ot(), u = `${f}-listbox`, x = oe(null), h = oe(null), [g, m] = q(
    n
  ), [b, p] = q(!1), _ = t ?? g, y = e.map(
    (k, O) => k.label === "" || k.disabled ? -1 : O
  ).filter((k) => k >= 0), N = e.findIndex(
    (k) => k.value === _
  ), [v, $] = q(
    () => y.includes(0) ? 0 : y[0] ?? -1
  ), S = B(() => {
    if (o) return;
    const k = N >= 0 && y.includes(N) ? N : y[0];
    $(k ?? -1), p(!0);
  }, [o, N, y]), T = B(() => {
    p(!1), h.current?.focus();
  }, []);
  ve(() => {
    if (!b) return;
    const k = (O) => {
      x.current && !x.current.contains(O.target) && p(!1);
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, [b]);
  const A = (k) => {
    m(k), r?.(k), p(!1), h.current?.focus();
  }, C = (k) => {
    if (y.length === 0) return;
    const O = y.includes(v) ? y.indexOf(v) : 0, E = y[(O + k + y.length) % y.length];
    E != null && $(E);
  }, D = (k) => {
    if (!b) {
      k.key === "ArrowDown" && (k.preventDefault(), S());
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
        k.preventDefault(), y[0] != null && $(y[0]);
        break;
      case "End":
        k.preventDefault(), y[y.length - 1] != null && $(y[y.length - 1]);
        break;
      case "Enter":
      case " ":
        k.preventDefault(), v >= 0 && e[v] && y.includes(v) && A(e[v]?.value ?? "");
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
      ref: x,
      className: [Ht.root, a].filter(Boolean).join(" "),
      onKeyDown: D,
      children: [
        /* @__PURE__ */ M(
          "button",
          {
            ref: h,
            type: "button",
            role: "combobox",
            "aria-haspopup": "listbox",
            "aria-expanded": b,
            "aria-controls": u,
            "aria-invalid": d || void 0,
            disabled: o,
            className: [
              Ht.trigger,
              Ht[i],
              b ? Ht.open : null,
              d ? Ht.invalid : null
            ].filter(Boolean).join(" "),
            onClick: () => b ? p(!1) : S(),
            ...c,
            children: [
              /* @__PURE__ */ s("span", { className: I ? Ht.label : Ht.placeholder, children: I ? I.label : l }),
              /* @__PURE__ */ s(
                "span",
                {
                  className: [Ht.chevron, b ? Ht.chevronOpen : null].filter(Boolean).join(" "),
                  style: { backgroundImage: Vy },
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ),
        b && /* @__PURE__ */ s(
          "div",
          {
            id: u,
            role: "listbox",
            "aria-activedescendant": v >= 0 ? `${f}-option-${v}` : void 0,
            className: Ht.menu,
            children: e.map(
              (k, O) => k.label === "" ? /* @__PURE__ */ s(
                "div",
                {
                  className: Ht.header,
                  role: "presentation",
                  children: k.value
                },
                k.value
              ) : /* @__PURE__ */ s(
                "div",
                {
                  id: `${f}-option-${O}`,
                  role: "option",
                  "aria-selected": k.value === _,
                  "aria-disabled": k.disabled || void 0,
                  className: [
                    Ht.option,
                    O === v ? Ht.active : null,
                    k.value === _ ? Ht.selected : null,
                    k.disabled ? Ht.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    k.disabled || A(k.value);
                  },
                  onMouseEnter: () => {
                    !k.disabled && k.label !== "" && $(O);
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
const Yy = "_root_1ma8a_1", Xy = "_wrap_1ma8a_9", Zy = "_input_1ma8a_26", Jy = "_invalid_1ma8a_31", Qy = "_clear_1ma8a_58", e0 = "_menu_1ma8a_83", t0 = "_option_1ma8a_98", n0 = "_disabled_1ma8a_109", r0 = "_active_1ma8a_113", s0 = "_empty_1ma8a_123", o0 = "_xs_1ma8a_129", l0 = "_sm_1ma8a_136", a0 = "_md_1ma8a_143", i0 = "_lg_1ma8a_150", c0 = "_xl_1ma8a_157", cn = {
  root: Yy,
  wrap: Xy,
  input: Zy,
  invalid: Jy,
  clear: Qy,
  menu: e0,
  option: t0,
  disabled: n0,
  active: r0,
  empty: s0,
  xs: o0,
  sm: l0,
  md: a0,
  lg: i0,
  xl: c0
}, d0 = (e, t) => e.label.toLowerCase().includes(t.toLowerCase());
function vS({
  options: e = [],
  value: t,
  defaultValue: n = "",
  onChange: r,
  onSelect: l,
  placeholder: i = "",
  size: d = "md",
  invalid: o = !1,
  disabled: a = !1,
  filter: c = d0,
  className: f,
  ...u
}) {
  const x = ot(), h = `${x}-listbox`, g = oe(null), m = oe(null), [b, p] = q(n), [_, y] = q(!1), N = t ?? b, v = Oe(
    () => N.trim() === "" ? [...e] : e.filter((L) => c(L, N)),
    [e, N, c]
  ), $ = v.map((L, j) => L.disabled ? -1 : j).filter((L) => L >= 0), [S, T] = q(-1), A = (L) => {
    p(L), r?.(L);
  }, C = (L) => {
    A(L.label), l?.(L.value, L), y(!1);
  }, D = (L) => {
    if ($.length === 0) return;
    const j = $.includes(S) ? $.indexOf(S) : L === 1 ? -1 : 0, F = $[(j + L + $.length) % $.length];
    F != null && T(F);
  }, I = (L) => {
    a || (A(L.target.value), y(!0), T(-1));
  }, k = () => {
    a || N !== "" && y(!0);
  }, O = (L) => {
    g.current && !g.current.contains(L.relatedTarget) && y(!1);
  }, E = (L) => {
    if (!a)
      switch (L.key) {
        case "ArrowDown":
          L.preventDefault(), _ ? D(1) : (y(!0), T($[0] ?? -1));
          break;
        case "ArrowUp":
          L.preventDefault(), _ && D(-1);
          break;
        case "Enter":
          L.preventDefault(), _ && S >= 0 && v[S] && C(v[S]);
          break;
        case "Escape":
          L.preventDefault(), y(!1);
          break;
        case "Tab":
          _ && S >= 0 && v[S] && C(v[S]), y(!1);
          break;
      }
  }, P = () => {
    A(""), T(-1), y(!0), m.current?.focus();
  };
  return /* @__PURE__ */ M(
    "div",
    {
      ref: g,
      className: [cn.root, f].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ M(
          "div",
          {
            className: [cn.wrap, cn[d], o ? cn.invalid : null].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ s(
                "input",
                {
                  ref: m,
                  type: "text",
                  role: "combobox",
                  "aria-expanded": _,
                  "aria-controls": h,
                  "aria-autocomplete": "list",
                  "aria-activedescendant": _ && S >= 0 ? `${x}-option-${S}` : void 0,
                  "aria-invalid": o || void 0,
                  disabled: a,
                  value: N,
                  placeholder: i,
                  className: cn.input,
                  onChange: I,
                  onFocus: k,
                  onBlur: O,
                  onKeyDown: E,
                  ...u
                }
              ),
              N !== "" && !a && /* @__PURE__ */ s(
                "button",
                {
                  type: "button",
                  className: cn.clear,
                  "aria-label": "Clear",
                  onClick: P,
                  children: /* @__PURE__ */ s(Me, { icon: "close", size: "sm" })
                }
              )
            ]
          }
        ),
        _ && (v.length === 0 ? (
          // No options → no listbox: an empty role="listbox" fails axe
          // aria-required-children either way (bare text child or no
          // children at all), so the empty state renders without the role.
          /* @__PURE__ */ s("div", { id: h, className: cn.menu, children: /* @__PURE__ */ s("div", { className: cn.empty, children: "No matches" }) })
        ) : /* @__PURE__ */ s("div", { id: h, role: "listbox", className: cn.menu, children: v.map((L, j) => /* @__PURE__ */ s(
          "div",
          {
            id: `${x}-option-${j}`,
            role: "option",
            "aria-selected": !1,
            "aria-disabled": L.disabled || void 0,
            className: [
              cn.option,
              j === S ? cn.active : null,
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
const u0 = "_box_muvqe_1", f0 = "_option_muvqe_12", _0 = "_disabled_muvqe_23", p0 = "_selected_muvqe_27", m0 = "_active_muvqe_33", Dr = {
  box: u0,
  option: f0,
  disabled: _0,
  selected: p0,
  active: m0
};
function wS({
  options: e = [],
  value: t,
  defaultValue: n,
  multiple: r = !1,
  onChange: l,
  className: i,
  style: d,
  ...o
}) {
  const a = ot(), [c, f] = q(() => {
    const v = n;
    return v == null ? [] : Array.isArray(v) ? [...v] : [v];
  }), u = t == null ? c : Array.isArray(t) ? t : [t], x = e.findIndex((v) => !v.disabled), [h, g] = q(
    () => x >= 0 ? x : 0
  ), m = oe(""), b = oe(null), p = (v) => {
    f(v), l?.(r ? v : v[0] ?? "");
  }, _ = e.map((v, $) => v.disabled ? -1 : $).filter((v) => v >= 0), y = (v) => {
    const $ = e[v];
    if (!(!$ || $.disabled))
      if (g(v), r) {
        const S = u.includes($.value) ? u.filter((T) => T !== $.value) : [...u, $.value];
        p(S);
      } else
        p([$.value]);
  }, N = (v) => {
    if (_.length === 0) return;
    const $ = _.includes(h) ? h : _[0];
    let S = -1;
    if (v.key === "ArrowDown")
      S = _[(_.indexOf($) + 1) % _.length];
    else if (v.key === "ArrowUp")
      S = _[(_.indexOf($) - 1 + _.length) % _.length];
    else if (v.key === "Home")
      S = _[0];
    else if (v.key === "End")
      S = _[_.length - 1];
    else if (v.key === "Enter" || v.key === " ") {
      v.preventDefault(), y($);
      return;
    } else if (/^[a-zA-Z0-9]$/.test(v.key)) {
      v.preventDefault();
      const T = (m.current + v.key).toLowerCase();
      m.current = T, b.current && clearTimeout(b.current), b.current = setTimeout(() => {
        m.current = "";
      }, 500);
      const A = [..._, ..._], C = _.indexOf($) + 1, D = A.slice(C).find((I) => e[I]?.label.toLowerCase().startsWith(T));
      D != null && g(D);
      return;
    }
    S >= 0 && (v.preventDefault(), g(S), r || p([e[S]?.value ?? ""]));
  };
  return /* @__PURE__ */ s(
    "div",
    {
      role: "listbox",
      tabIndex: 0,
      "aria-multiselectable": r || void 0,
      "aria-activedescendant": e[h] ? `${a}-option-${h}` : void 0,
      style: d,
      className: [Dr.box, i].filter(Boolean).join(" "),
      onKeyDown: N,
      ...o,
      children: e.map((v, $) => {
        const S = u.includes(v.value), T = $ === h;
        return /* @__PURE__ */ s(
          "div",
          {
            id: `${a}-option-${$}`,
            role: "option",
            "aria-selected": S,
            "aria-disabled": v.disabled || void 0,
            className: [
              Dr.option,
              S ? Dr.selected : null,
              T ? Dr.active : null,
              v.disabled ? Dr.disabled : null
            ].filter(Boolean).join(" "),
            onClick: () => y($),
            children: v.label
          },
          v.value
        );
      })
    }
  );
}
const h0 = "_group_oinj7_1", g0 = "_legend_oinj7_8", b0 = "_list_oinj7_16", y0 = "_item_oinj7_25", x0 = "_disabled_oinj7_32", v0 = "_label_oinj7_37", w0 = "_checkbox_oinj7_48", Zn = {
  group: h0,
  legend: g0,
  list: b0,
  item: y0,
  disabled: x0,
  label: v0,
  checkbox: w0
};
function kS({
  options: e = [],
  value: t,
  defaultValue: n = [],
  onChange: r,
  legend: l,
  name: i,
  className: d
}) {
  const [o, a] = q(() => [
    ...n
  ]), c = t ?? o, f = (u, x) => {
    const h = x ? [...c, u] : c.filter((g) => g !== u);
    a(h), r?.(h);
  };
  return /* @__PURE__ */ M("fieldset", { className: [Zn.group, d].filter(Boolean).join(" "), children: [
    l != null && /* @__PURE__ */ s("legend", { className: Zn.legend, children: l }),
    /* @__PURE__ */ s("ul", { className: Zn.list, children: e.map((u) => {
      const x = c.includes(u.value);
      return /* @__PURE__ */ s(
        "li",
        {
          className: [Zn.item, u.disabled ? Zn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ M("label", { className: Zn.label, children: [
            /* @__PURE__ */ s(
              "input",
              {
                type: "checkbox",
                className: Zn.checkbox,
                name: i,
                value: u.value,
                checked: x,
                disabled: u.disabled,
                onChange: (h) => f(u.value, h.target.checked)
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
const k0 = "_group_46668_1", N0 = "_legend_46668_8", S0 = "_list_46668_16", O0 = "_item_46668_25", $0 = "_disabled_46668_32", E0 = "_label_46668_37", T0 = "_radio_46668_48", Jn = {
  group: k0,
  legend: N0,
  list: S0,
  item: O0,
  disabled: $0,
  label: E0,
  radio: T0
};
function NS({
  options: e = [],
  value: t,
  defaultValue: n,
  onChange: r,
  legend: l,
  name: i,
  className: d
}) {
  const [o, a] = q(
    n
  ), c = t ?? o, f = (u) => {
    a(u), r?.(u);
  };
  return /* @__PURE__ */ M("fieldset", { className: [Jn.group, d].filter(Boolean).join(" "), children: [
    l != null && /* @__PURE__ */ s("legend", { className: Jn.legend, children: l }),
    /* @__PURE__ */ s("ul", { className: Jn.list, children: e.map((u) => {
      const x = u.value === c;
      return /* @__PURE__ */ s(
        "li",
        {
          className: [Jn.item, u.disabled ? Jn.disabled : null].filter(Boolean).join(" "),
          children: /* @__PURE__ */ M("label", { className: Jn.label, children: [
            /* @__PURE__ */ s(
              "input",
              {
                type: "radio",
                className: Jn.radio,
                name: i,
                value: u.value,
                checked: x,
                disabled: u.disabled,
                onChange: (h) => f(h.target.value)
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
const C0 = "_bar_9zyxn_1", A0 = "_vertical_9zyxn_12", D0 = "_option_9zyxn_17", M0 = "_selected_9zyxn_40", I0 = "_sm_9zyxn_56", z0 = "_md_9zyxn_62", L0 = "_lg_9zyxn_68", dr = {
  bar: C0,
  vertical: A0,
  option: D0,
  selected: M0,
  sm: I0,
  md: z0,
  lg: L0
};
function Ho(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function SS(e) {
  const {
    options: t = [],
    value: n,
    defaultValue: r,
    multiple: l,
    orientation: i = "horizontal",
    onChange: d,
    size: o = "md",
    className: a,
    ...c
  } = e, f = l ?? !1, [u, x] = q(r ?? (f ? [] : t[0]?.value)), h = n ?? u, g = l === !0 || l === void 0 && Array.isArray(h), m = (p) => {
    if (!g) {
      x(p), d?.(p);
      return;
    }
    const _ = Ho(h), y = _.includes(p) ? _.filter((N) => N !== p) : [..._, p];
    x(y), d?.(y);
  }, b = (p) => g ? Ho(h).includes(p) : h === p;
  return /* @__PURE__ */ s(
    "div",
    {
      role: "group",
      className: [
        dr.bar,
        dr[o],
        i === "vertical" ? dr.vertical : null,
        a
      ].filter(Boolean).join(" "),
      ...c,
      children: t.map((p) => {
        const _ = b(p.value);
        return /* @__PURE__ */ s(
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
            onClick: () => m(p.value),
            children: p.label
          },
          p.value
        );
      })
    }
  );
}
const R0 = "_root_11hdr_1", P0 = "_action_11hdr_10", j0 = "_caret_11hdr_15", B0 = "_sm_11hdr_49", F0 = "_md_11hdr_53", H0 = "_lg_11hdr_57", U0 = "_fullWidth_11hdr_62", q0 = "_menu_11hdr_70", K0 = "_item_11hdr_83", W0 = "_itemIcon_11hdr_105", G0 = "_disabled_11hdr_110", V0 = "_active_11hdr_114", Y0 = "_danger_11hdr_123", bn = {
  root: R0,
  action: P0,
  caret: j0,
  sm: B0,
  md: F0,
  lg: H0,
  fullWidth: U0,
  menu: q0,
  item: K0,
  itemIcon: W0,
  disabled: G0,
  active: V0,
  danger: Y0
}, OS = st(
  function({
    label: t,
    onClick: n,
    items: r = [],
    severity: l = "primary",
    variant: i = "filled",
    shade: d = "default",
    size: o = "md",
    loading: a = !1,
    visible: c = !0,
    fullWidth: f = !1,
    disabled: u = !1,
    className: x,
    "aria-label": h,
    openAriaLabel: g = "More actions",
    ...m
  }, b) {
    const _ = `${ot()}-menu`, y = oe(null), N = oe(null), v = oe([]), [$, S] = q(!1), [T, A] = q(-1), C = u || a, D = Oe(
      () => r.map((F, X) => F.disabled ? -1 : X).filter((F) => F >= 0),
      [r]
    ), I = B(() => {
      C || (A(D[0] ?? -1), S(!0));
    }, [C, D]), k = B(() => {
      S(!1), N.current?.focus();
    }, []);
    ve(() => {
      if (!$) return;
      const F = (X) => {
        y.current && !y.current.contains(X.target) && S(!1);
      };
      return document.addEventListener("mousedown", F), () => document.removeEventListener("mousedown", F);
    }, [$]), ve(() => {
      $ && (C || !c) && S(!1);
    }, [$, C, c]);
    const O = oe($);
    if (ve(() => {
      const F = O.current;
      if (O.current = $, !$ || F) return;
      const X = D.includes(T) ? T : D[0] ?? -1;
      X >= 0 && v.current[X]?.focus();
    }, [$, T, D]), c === !1) return null;
    const E = (F) => {
      const X = r[F];
      !X || X.disabled || (X.onClick?.(), S(!1), N.current?.focus());
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
          S(!1);
          break;
      }
    };
    return /* @__PURE__ */ M(
      "div",
      {
        ref: (F) => {
          y.current = F, typeof b == "function" ? b(F) : b && (b.current = F);
        },
        className: [
          bn.root,
          bn[o],
          f ? bn.fullWidth : null,
          x
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ s(
            yn,
            {
              className: bn.action,
              variant: i,
              severity: l,
              shade: d,
              size: o,
              loading: a,
              disabled: u,
              "aria-label": h,
              onClick: () => {
                $ && S(!1), n?.();
              },
              children: t
            }
          ),
          /* @__PURE__ */ s(
            yn,
            {
              ref: N,
              className: bn.caret,
              variant: i,
              severity: l,
              shade: d,
              size: o,
              disabled: C,
              "aria-haspopup": "menu",
              "aria-expanded": $,
              "aria-controls": _,
              "aria-label": g,
              onClick: () => $ ? S(!1) : I(),
              onKeyDown: (F) => {
                !$ && (F.key === "ArrowDown" || F.key === "ArrowUp") && (F.preventDefault(), I());
              },
              children: /* @__PURE__ */ s(Me, { icon: "keyboard_arrow_down", "aria-hidden": "true" })
            }
          ),
          $ && /* @__PURE__ */ s(
            "div",
            {
              id: _,
              role: "menu",
              tabIndex: -1,
              "aria-label": g,
              className: bn.menu,
              onKeyDown: j,
              ...m,
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
                    F.icon ? /* @__PURE__ */ s("span", { className: bn.itemIcon, "aria-hidden": "true", children: /* @__PURE__ */ s(Me, { icon: F.icon, size: 16 }) }) : null,
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
), X0 = "_wrapper_1ulz6_1", Z0 = "_input_1ulz6_8", J0 = "_invalid_1ulz6_38", Q0 = "_toggle_1ulz6_45", ex = "_xs_1ulz6_80", tx = "_sm_1ulz6_86", nx = "_md_1ulz6_92", rx = "_lg_1ulz6_98", sx = "_xl_1ulz6_104", Mr = {
  wrapper: X0,
  input: Z0,
  invalid: J0,
  toggle: Q0,
  xs: ex,
  sm: tx,
  md: nx,
  lg: rx,
  xl: sx
}, $S = st(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    disabled: l,
    showLabel: i = "Show password",
    hideLabel: d = "Hide password",
    ...o
  }, a) {
    const [c, f] = q(!1);
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ M("div", { className: Mr.wrapper, "data-size": t, children: [
        /* @__PURE__ */ s(
          "input",
          {
            ref: a,
            type: c ? "text" : "password",
            disabled: l,
            className: [
              Mr.input,
              Mr[t],
              n ? Mr.invalid : null,
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
            className: Mr.toggle,
            "aria-pressed": c,
            "aria-label": c ? d : i,
            disabled: l,
            onClick: () => f((u) => !u),
            children: /* @__PURE__ */ s(Me, { icon: c ? "visibility_off" : "visibility", size: 16 })
          }
        )
      ] })
    );
  }
), ox = "_mask_rcv90_1", lx = "_invalid_rcv90_31", ax = "_xs_rcv90_38", ix = "_sm_rcv90_44", cx = "_md_rcv90_50", dx = "_lg_rcv90_56", ux = "_xl_rcv90_62", Ts = {
  mask: ox,
  invalid: lx,
  xs: ax,
  sm: ix,
  md: cx,
  lg: dx,
  xl: ux
};
function Uo(e, t) {
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
const ES = st(function({
  size: t = "md",
  invalid: n = !1,
  mask: r,
  value: l,
  defaultValue: i = "",
  onChange: d,
  className: o,
  onKeyDown: a,
  ...c
}, f) {
  const [u, x] = q(i ?? ""), h = l !== void 0, g = h ? l ?? "" : u, m = (_) => {
    const y = Uo(_, r);
    return h || x(y), d?.(y), y;
  };
  return /* @__PURE__ */ s(
    "input",
    {
      ref: f,
      type: "text",
      "data-size": t,
      value: g,
      onChange: (_) => {
        m(_.target.value);
      },
      onKeyDown: (_) => {
        if (_.key === "Backspace") {
          const y = _.currentTarget.selectionStart ?? g.length, N = g[y - 1];
          if (N !== void 0 && !/\d/.test(N)) {
            _.preventDefault();
            const v = g.replace(/\D/g, "");
            m(Uo(v.slice(0, -1), r));
          }
        }
        a?.(_);
      },
      className: [
        Ts.mask,
        Ts[t],
        n ? Ts.invalid : null,
        o
      ].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...c
    }
  );
}), fx = "_wrapper_12jdf_1", _x = "_input_12jdf_8", px = "_invalid_12jdf_38", mx = "_button_12jdf_45", hx = "_up_12jdf_77", gx = "_down_12jdf_82", bx = "_xs_12jdf_87", yx = "_sm_12jdf_93", xx = "_md_12jdf_99", vx = "_lg_12jdf_105", wx = "_xl_12jdf_111", Kn = {
  wrapper: fx,
  input: _x,
  invalid: px,
  button: mx,
  up: hx,
  down: gx,
  xs: bx,
  sm: yx,
  md: xx,
  lg: vx,
  xl: wx
};
function Bs(e) {
  const t = parseFloat(e);
  return Number.isNaN(t) ? null : t;
}
function kx(e) {
  let t = "", n = !1;
  for (const r of e)
    r >= "0" && r <= "9" ? t += r : r === "." && !n ? (n = !0, t += r) : r === "-" && t.length === 0 && (t += r);
  return t;
}
function Sl(e, t, n) {
  return Math.min(n ?? 1 / 0, Math.max(t ?? -1 / 0, e));
}
function Nx(e, t, n) {
  return t === void 0 ? e : t + Math.round((e - t) / n) * n;
}
function Sx(e, t, n, r, l) {
  const d = Bs(e) ?? n ?? 0;
  let o;
  return n === void 0 ? o = d + t * l : t > 0 ? o = n + Math.ceil((d - n + 1e-9) / l) * l : o = n + Math.floor((d - n - 1e-9) / l) * l, Sl(o, n, r);
}
const TS = st(
  function({
    size: t = "md",
    invalid: n = !1,
    className: r,
    disabled: l,
    value: i,
    defaultValue: d,
    onChange: o,
    min: a,
    max: c,
    step: f = 1,
    incrementLabel: u = "Increment",
    decrementLabel: x = "Decrement",
    onBlur: h,
    onKeyDown: g,
    ...m
  }, b) {
    const [p, _] = q(
      d != null ? String(d) : ""
    ), y = i !== void 0, N = y ? i == null ? "" : String(i) : p, v = (D) => {
      y || _(D), o?.(Bs(D));
    }, $ = (D) => {
      y || _(String(D)), o?.(D);
    }, S = (D) => {
      l || $(Sx(N, D, a, c, f));
    }, T = (D) => {
      v(kx(D.target.value));
    }, A = (D) => {
      D.key === "ArrowUp" ? (D.preventDefault(), S(1)) : D.key === "ArrowDown" && (D.preventDefault(), S(-1)), g?.(D);
    }, C = (D) => {
      const I = Bs(N);
      I === null ? (y || _(""), o?.(null)) : $(Sl(Nx(I, a, f), a, c)), h?.(D);
    };
    return (
      // Size hook for containers (FormField reads it to size the box).
      /* @__PURE__ */ M("div", { className: Kn.wrapper, "data-size": t, children: [
        /* @__PURE__ */ s(
          "input",
          {
            ref: b,
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
            ...m
          }
        ),
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: [Kn.button, Kn.up].join(" "),
            "aria-label": u,
            disabled: l,
            onClick: () => S(1),
            children: /* @__PURE__ */ s(Me, { icon: "keyboard_arrow_up", size: 14 })
          }
        ),
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: [Kn.button, Kn.down].join(" "),
            "aria-label": x,
            disabled: l,
            onClick: () => S(-1),
            children: /* @__PURE__ */ s(Me, { icon: "keyboard_arrow_down", size: 14 })
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
}, Ox = [
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
function Fs(e) {
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
function $x({ r: e, g: t, b: n }) {
  const r = (l) => Math.round(l).toString(16).padStart(2, "0");
  return `#${r(e)}${r(t)}${r(n)}`;
}
function Ex({ r: e, g: t, b: n }) {
  const r = e / 255, l = t / 255, i = n / 255, d = Math.max(r, l, i), o = Math.min(r, l, i), a = d - o;
  let c = 0;
  return a !== 0 && (d === r ? c = (l - i) / a % 6 : d === l ? c = (i - r) / a + 2 : c = (r - l) / a + 4, c *= 60, c < 0 && (c += 360)), {
    h: c,
    s: d === 0 ? 0 : a / d,
    v: d
  };
}
function ur({ h: e, s: t, v: n }) {
  const r = n * t, l = e / 60, i = r * (1 - Math.abs(l % 2 - 1));
  let d = 0, o = 0, a = 0;
  l < 1 ? (d = r, o = i) : l < 2 ? (d = i, o = r) : l < 3 ? (o = r, a = i) : l < 4 ? (o = i, a = r) : l < 5 ? (d = i, a = r) : (d = r, a = i);
  const c = n - r;
  return {
    r: Math.round((d + c) * 255),
    g: Math.round((o + c) * 255),
    b: Math.round((a + c) * 255),
    a: 1
  };
}
function Tx(e) {
  const t = Fs(e);
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
function qo({ r: e, g: t, b: n, a: r }) {
  return r >= 1 ? `rgb(${e}, ${t}, ${n})` : `rgba(${e}, ${t}, ${n}, ${Math.round(r * 100) / 100})`;
}
const CS = ({
  value: e = "#000000",
  showSaturation: t = !0,
  showRgba: n = !0,
  showPalette: r = !0,
  palette: l = Ox,
  showButton: i = !1,
  showArrow: d = !0,
  disabled: o = !1,
  invalid: a = !1,
  placeholder: c = "",
  size: f = "md",
  tabIndex: u = 0,
  className: x,
  onChange: h,
  onValueChange: g,
  onOpen: m,
  onClose: b
}) => {
  const p = oe(null), _ = oe(null), y = oe(null), N = oe(null), v = oe(null), $ = ot(), S = oe(null), T = Oe(
    () => Tx(e) ?? { r: 0, g: 0, b: 0, a: 1 },
    [e]
  ), [A, C] = q(!1), [D, I] = q(null), k = D ?? T, O = Oe(() => Ex(k), [k]), E = B(
    (Z) => {
      const z = qo(Z);
      h?.(z), g?.(z);
    },
    [h, g]
  ), P = B(
    (Z, z) => {
      I(Z), z && !i && E(Z);
    },
    [i, E]
  ), L = B(() => {
    C(!1), I(null), b?.(), _.current?.focus();
  }, [b]), j = B(() => {
    o || (I(T), C(!0), m?.());
  }, [o, T, m]), F = B(() => {
    A ? L() : j();
  }, [A, L, j]), X = B(
    (Z, z) => {
      const Y = y.current;
      if (!Y) return O;
      const Q = Y.getBoundingClientRect(), ge = on((Z - Q.left) / Q.width, 0, 1), ae = on(1 - (z - Q.top) / Q.height, 0, 1);
      return { h: O.h, s: ge, v: ae };
    },
    [O]
  ), ie = B(
    (Z, z) => {
      if (!z) return 0;
      const Y = z.getBoundingClientRect();
      return on((Z - Y.left) / Y.width, 0, 1);
    },
    []
  ), te = (Z) => {
    if (o) return;
    Z.preventDefault(), Z.currentTarget.setPointerCapture(Z.pointerId), S.current = "sat";
    const z = X(Z.clientX, Z.clientY);
    P({ ...ur(z), a: k.a }, !0);
  }, we = (Z) => {
    if (S.current !== "sat") return;
    Z.preventDefault();
    const z = X(Z.clientX, Z.clientY);
    P({ ...ur(z), a: k.a }, !0);
  }, le = (Z) => {
    if (o) return;
    Z.preventDefault(), Z.currentTarget.setPointerCapture(Z.pointerId), S.current = "hue";
    const z = ie(Z.clientX, N.current);
    P(
      { ...ur({ ...O, h: z * 360 }), a: k.a },
      !0
    );
  }, _e = (Z) => {
    if (S.current !== "hue") return;
    Z.preventDefault();
    const z = ie(Z.clientX, N.current);
    P(
      { ...ur({ ...O, h: z * 360 }), a: k.a },
      !0
    );
  }, W = (Z) => {
    if (o) return;
    Z.preventDefault(), Z.currentTarget.setPointerCapture(Z.pointerId), S.current = "alpha";
    const z = ie(Z.clientX, v.current);
    P({ ...k, a: z }, !0);
  }, he = (Z) => {
    if (S.current !== "alpha") return;
    Z.preventDefault();
    const z = ie(Z.clientX, v.current);
    P({ ...k, a: z }, !0);
  }, ue = () => {
    S.current = null;
  }, ye = B(
    (Z, z) => {
      const Y = {
        h: O.h,
        s: on(O.s + Z, 0, 1),
        v: on(O.v + z, 0, 1)
      };
      P({ ...ur(Y), a: k.a }, !0);
    },
    [O, k.a, P]
  ), pe = B(
    (Z) => {
      const z = (O.h + Z + 360) % 360;
      P({ ...ur({ ...O, h: z }), a: k.a }, !0);
    },
    [O, k.a, P]
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
      const ae = Fs(z);
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
    D && (E(D), I(null), C(!1), b?.(), _.current?.focus());
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
  const fe = f === "xs" ? Re["dx-colorpicker-trigger-xs"] : f === "sm" ? Re["dx-colorpicker-trigger-sm"] : f === "lg" ? Re["dx-colorpicker-trigger-lg"] : f === "xl" ? Re["dx-colorpicker-trigger-xl"] : Re["dx-colorpicker-trigger"], Fe = qo(k), Ge = $x(k), Je = { x: O.s * 100, y: (1 - O.v) * 100 }, At = O.h / 360 * 100, lt = k.a * 100, yt = /* @__PURE__ */ M("div", { className: Re["dx-colorpicker-panel"], children: [
    t && /* @__PURE__ */ s(
      "div",
      {
        ref: y,
        role: "slider",
        "aria-roledescription": "2D slider",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(O.s * 100),
        "aria-valuetext": `Saturation ${Math.round(O.s * 100)}%, value ${Math.round(O.v * 100)}%`,
        "aria-label": "Color",
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : u,
        className: Re["dx-saturation-picker"],
        style: {
          background: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), hsl(${O.h}, 100%, 50%)`
        },
        onKeyDown: G,
        onPointerDown: te,
        onPointerMove: we,
        onPointerUp: ue,
        children: /* @__PURE__ */ s(
          "span",
          {
            className: Re["dx-saturation-indicator"],
            style: { left: `${Je.x}%`, top: `${Je.y}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    t && /* @__PURE__ */ s(
      "div",
      {
        ref: N,
        role: "slider",
        "aria-label": "Hue",
        "aria-valuemin": 0,
        "aria-valuemax": 360,
        "aria-valuenow": Math.round(O.h),
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : u,
        className: Re["dx-hue-picker"],
        onKeyDown: (Z) => $e(Z, "hue"),
        onPointerDown: le,
        onPointerMove: _e,
        onPointerUp: ue,
        children: /* @__PURE__ */ s(
          "span",
          {
            className: Re["dx-hue-indicator"],
            style: { left: `${At}%` },
            "aria-hidden": "true"
          }
        )
      }
    ),
    t && /* @__PURE__ */ s(
      "div",
      {
        ref: v,
        role: "slider",
        "aria-label": "Alpha",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(lt),
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : u,
        className: Re["dx-alpha-picker"],
        style: {
          background: `repeating-conic-gradient(var(--dx-border-color) 0% 25%, var(--dx-surface-color) 0% 50%) 0 0 / 12px 12px, linear-gradient(to right, transparent, hsl(${O.h}, 100%, 50%))`
        },
        onKeyDown: (Z) => $e(Z, "alpha"),
        onPointerDown: W,
        onPointerMove: he,
        onPointerUp: ue,
        children: /* @__PURE__ */ s(
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
        /* @__PURE__ */ s("span", { className: Re["dx-colorpicker-rgba-label"], children: "Hex" }),
        /* @__PURE__ */ s(
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
        /* @__PURE__ */ s("span", { className: Re["dx-colorpicker-rgba-label"], children: "R" }),
        /* @__PURE__ */ s(
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
        /* @__PURE__ */ s("span", { className: Re["dx-colorpicker-rgba-label"], children: "G" }),
        /* @__PURE__ */ s(
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
        /* @__PURE__ */ s("span", { className: Re["dx-colorpicker-rgba-label"], children: "B" }),
        /* @__PURE__ */ s(
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
        /* @__PURE__ */ s("span", { className: Re["dx-colorpicker-rgba-label"], children: "A" }),
        /* @__PURE__ */ s(
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
    r && /* @__PURE__ */ s("div", { className: Re["dx-colorpicker-palette"], children: l.map((Z) => /* @__PURE__ */ s(
      "button",
      {
        type: "button",
        className: Re["dx-colorpicker-swatch"],
        "aria-label": Z,
        "aria-disabled": o || void 0,
        tabIndex: o ? -1 : u,
        style: { backgroundColor: Z },
        onClick: () => {
          const z = Fs(Z);
          i ? P({ ...z, a: k.a }, !1) : (I(null), E({ ...z, a: k.a }), C(!1), b?.(), _.current?.focus());
        }
      },
      Z
    )) }),
    i && /* @__PURE__ */ s("div", { className: Re["dx-colorpicker-footer"], children: /* @__PURE__ */ s(
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
        a ? Re["dx-colorpicker-invalid"] : null,
        x
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
            "aria-disabled": o || void 0,
            disabled: o,
            tabIndex: u,
            onClick: F,
            onKeyDown: (Z) => {
              Z.key === "Escape" && A && (Z.preventDefault(), L());
            },
            children: [
              /* @__PURE__ */ s(
                "span",
                {
                  className: Re["dx-colorpicker-value"],
                  style: { backgroundColor: Fe },
                  "aria-hidden": "true"
                }
              ),
              c && /* @__PURE__ */ s("span", { className: Re["dx-colorpicker-text"], children: c }),
              d && /* @__PURE__ */ s("span", { className: Re["dx-colorpicker-chevron"], "aria-hidden": "true", children: /* @__PURE__ */ s(Me, { icon: "keyboard_arrow_down", size: 14 }) })
            ]
          }
        ),
        A && /* @__PURE__ */ s(
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
}, Cx = 42;
function ln(e) {
  return String(e).padStart(2, "0");
}
function Yt(e) {
  return `${e.year}-${ln(e.month)}-${ln(e.day)}`;
}
function Ax(e, t) {
  const n = Yt(e);
  return t ? `${n} ${ln(e.hour)}:${ln(e.minute)}:${ln(e.second)}` : n;
}
function Hs(e) {
  const t = /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2})(?::(\d{2}))?)?$/.exec(
    e.trim()
  );
  if (!t) return null;
  const n = Number(t[1]), r = Number(t[2]), l = Number(t[3]), i = t[4] != null ? Number(t[4]) : 0, d = t[5] != null ? Number(t[5]) : 0, o = t[6] != null ? Number(t[6]) : 0;
  if (r < 1 || r > 12 || l < 1 || l > 31) return null;
  const a = new Date(n, r - 1, l, i, d, o);
  return a.getFullYear() !== n || a.getMonth() !== r - 1 || a.getDate() !== l ? null : { year: n, month: r, day: l, hour: i, minute: d, second: o };
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
function ts(e, t) {
  const n = new Date(e.year, e.month - 1 + t, 1), r = n.getFullYear(), l = n.getMonth() + 1, i = new Date(r, l, 0).getDate();
  return {
    year: r,
    month: l,
    day: Math.min(e.day, i),
    hour: e.hour,
    minute: e.minute,
    second: e.second
  };
}
function Ko(e) {
  return new Date(e.year, e.month - 1, e.day).getDay();
}
const Wo = {
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
}, Dx = [
  "yyyy",
  "yy",
  "MM",
  "dd",
  "HH",
  "mm",
  "ss",
  "tt"
], Mx = ["y", "M", "d", "H", "m", "s"];
function ns(e, t, n) {
  const r = new Date(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second
  );
  let l = "", i = 0;
  for (; i < t.length; ) {
    let d = !1;
    for (const a of Dx)
      if (t.startsWith(a, i)) {
        l += Wo[a](e, r, n), i += a.length, d = !0;
        break;
      }
    if (d) continue;
    const o = t[i];
    if (Mx.includes(o)) {
      l += Wo[o](e, r, n), i += 1;
      continue;
    }
    l += o, i += 1;
  }
  return l;
}
const Ix = [
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
function zx(e, t) {
  const n = {};
  let r = 0, l = 0;
  for (; l < t.length; ) {
    let o = null;
    for (const a of Ix)
      if (t.startsWith(a, l)) {
        o = a;
        break;
      }
    if (o) {
      const a = e.slice(r, r + o.length);
      if (!/^\d+$/.test(a)) return null;
      const c = Number(a);
      switch (o) {
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
      r += o.length, l += o.length;
      continue;
    }
    if (e[r] !== t[l]) return null;
    r += 1, l += 1;
  }
  const i = {
    year: n.year ?? (/* @__PURE__ */ new Date()).getFullYear(),
    month: n.month ?? 1,
    day: n.day ?? 1,
    hour: n.hour ?? 0,
    minute: n.minute ?? 0,
    second: n.second ?? 0
  };
  if (i.month < 1 || i.month > 12 || i.day < 1 || i.day > 31)
    return null;
  const d = new Date(
    i.year,
    i.month - 1,
    i.day,
    i.hour,
    i.minute,
    i.second
  );
  return d.getFullYear() !== i.year || d.getMonth() !== i.month - 1 || d.getDate() !== i.day ? null : i;
}
function Ir(e, t) {
  const n = Hs(e);
  return n || zx(e, t);
}
function Lx(e, t, n) {
  return t && Yt(e) < Yt(t) ? t : n && Yt(e) > Yt(n) ? n : e;
}
const Rx = ["hour", "minute", "second"];
function rs(e) {
  switch (e) {
    case "hour":
      return "Hour";
    case "minute":
      return "Minute";
    case "second":
      return "Second";
  }
}
const AS = st(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: l,
    format: i = "yyyy-MM-dd",
    min: d,
    max: o,
    showTime: a = !1,
    showButton: c = !0,
    allowClear: f = !1,
    inline: u = !1,
    disabledDates: x,
    locale: h = "en-US",
    onChange: g,
    onValueChange: m,
    onOpen: b,
    onClose: p,
    disabled: _,
    readOnly: y,
    placeholder: N,
    ariaLabel: v,
    triggerLabel: $,
    clearLabel: S,
    tabIndex: T,
    className: A,
    onBlur: C,
    onKeyDown: D,
    ...I
  }, k) {
    const O = oe(null), E = oe(null), P = oe(null), L = oe(null), j = ot(), F = r !== void 0, [X, ie] = q(
      () => l != null ? ns(
        Ir(l, i) ?? Wn(),
        i,
        h
      ) : ""
    ), [te, we] = q(!1), [le, _e] = q(null), [W, he] = q(() => {
      const V = r !== void 0 ? r ?? "" : l ?? "";
      if (V) {
        const me = Ir(V, i);
        if (me) return me;
      }
      return Wn();
    }), ue = Oe(() => d ? Hs(d) : null, [d]), ye = Oe(() => o ? Hs(o) : null, [o]), pe = Oe(
      () => new Set(x ?? []),
      [x]
    ), De = Oe(() => {
      const V = F ? r ?? "" : X;
      return V ? Ir(V, i) : null;
    }, [r, X, F, i]), G = B(
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
        F || ie(V ? ns(V, i, h) : "");
        const me = V ? Ax(V, a) : "";
        g?.(me), m?.(me);
      },
      [F, i, h, a, g, m]
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
      _e(V), he($e(V)), we(!0), b?.();
    }, [_, De, $e, b]), Ge = B(() => {
      te ? fe() : Fe();
    }, [te, fe, Fe]), Je = B((V) => {
      L.current?.querySelector(
        `[data-date="${Yt(V)}"]`
      )?.focus();
    }, []), At = B(
      (V) => {
        if (G(V)) return;
        const me = le ?? De, Ye = {
          ...a ? {
            hour: me?.hour ?? 0,
            minute: me?.minute ?? 0,
            second: me?.second ?? 0
          } : { hour: 0, minute: 0, second: 0 },
          year: V.year,
          month: V.month,
          day: V.day
        };
        _e(Ye), a || (ne(Ye), fe());
      },
      [G, le, De, a, ne, fe]
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
      const V = Ir(X, i);
      ne(V ? Lx(V, ue, ye) : null);
    }, [te, X, i, ue, ye, ne]), Y = (V) => {
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
          me = In(W, -Ko(W)), V.preventDefault();
          break;
        case "End":
          me = In(W, 6 - Ko(W)), V.preventDefault();
          break;
        case "PageUp":
          me = ts(W, V.shiftKey ? -12 : -1), V.preventDefault();
          break;
        case "PageDown":
          me = ts(W, V.shiftKey ? 12 : 1), V.preventDefault();
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
        O.current && !O.current.contains(me.target) && fe();
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
      F || ie(""), g?.(""), m?.(""), E.current?.focus();
    }, je = te && le ? ns(le, i, h) : F ? r ? ns(
      Ir(r, i) ?? Wn(),
      i,
      h
    ) : "" : X, Ze = F ? !!r : X.length > 0, Qe = u || te, nt = { year: W.year, month: W.month }, Xt = new Date(nt.year, nt.month - 1, 1).getDay(), re = {
      year: nt.year,
      month: nt.month,
      day: 1,
      hour: 0,
      minute: 0,
      second: 0
    }, Le = [];
    for (let V = 0; V < Cx; V += 1)
      Le.push(In(re, V - Xt));
    const Nt = le ? Yt(le) : De ? Yt(De) : null, Rt = Yt(Wn()), xt = `${nt.year}-${ln(nt.month)}`, Ie = Oe(
      () => new Intl.DateTimeFormat(h, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      [h]
    ), Ke = new Intl.DateTimeFormat(h, {
      month: "long",
      year: "numeric"
    }).format(new Date(nt.year, nt.month - 1, 1)), vt = Array.from(
      { length: 7 },
      (V, me) => new Intl.DateTimeFormat(h, { weekday: "short" }).format(
        new Date(2021, 0, 3 + me)
      )
    ), $t = t === "xs" ? Ue["dx-datepicker-input--xs"] : t === "sm" ? Ue["dx-datepicker-input--sm"] : t === "lg" ? Ue["dx-datepicker-input--lg"] : t === "xl" ? Ue["dx-datepicker-input--xl"] : Ue["dx-datepicker-input--md"], at = /* @__PURE__ */ M(
      "div",
      {
        className: Ue["dx-datepicker-calendar"],
        "aria-label": v ?? "Date picker",
        children: [
          /* @__PURE__ */ M("div", { className: Ue["dx-datepicker-header"], children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: Ue["dx-datepicker-nav"],
                "aria-label": "Previous month",
                onClick: () => {
                  const V = $e(ts(W, -1));
                  he(V), setTimeout(() => Je(V), 0);
                },
                children: /* @__PURE__ */ s(Me, { icon: "chevron_left", size: 16 })
              }
            ),
            /* @__PURE__ */ s("span", { className: Ue["dx-datepicker-title"], children: Ke }),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: Ue["dx-datepicker-nav"],
                "aria-label": "Next month",
                onClick: () => {
                  const V = $e(ts(W, 1));
                  he(V), setTimeout(() => Je(V), 0);
                },
                children: /* @__PURE__ */ s(Me, { icon: "chevron_right", size: 16 })
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
                /* @__PURE__ */ s("div", { role: "row", className: Ue["dx-datepicker-week-row"], children: vt.map((V) => /* @__PURE__ */ s(
                  "div",
                  {
                    role: "columnheader",
                    className: Ue["dx-datepicker-weekday"],
                    children: V
                  },
                  V
                )) }),
                Array.from({ length: 6 }, (V, me) => /* @__PURE__ */ s(
                  "div",
                  {
                    role: "row",
                    className: Ue["dx-datepicker-row"],
                    children: Le.slice(me * 7, me * 7 + 7).map((Ve) => {
                      const Ye = Yt(Ve), Pt = G(Ve), Xe = Ye.startsWith(xt);
                      return /* @__PURE__ */ s(
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
          a && /* @__PURE__ */ M("div", { className: Ue["dx-datepicker-time"], children: [
            Rx.map((V) => /* @__PURE__ */ M("label", { className: Ue["dx-datepicker-time-field"], children: [
              /* @__PURE__ */ s("span", { className: Ue["dx-datepicker-time-label"], children: rs(V) }),
              /* @__PURE__ */ M("div", { className: Ue["dx-datepicker-time-control"], children: [
                /* @__PURE__ */ s(
                  "input",
                  {
                    className: Ue["dx-datepicker-time-input"],
                    inputMode: "numeric",
                    "aria-label": rs(V),
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
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Increase ${rs(V).toLowerCase()}`,
                      onClick: () => lt(V, 1),
                      children: /* @__PURE__ */ s(Me, { icon: "keyboard_arrow_up", size: 11 })
                    }
                  ),
                  /* @__PURE__ */ s(
                    "button",
                    {
                      type: "button",
                      "aria-label": `Decrease ${rs(V).toLowerCase()}`,
                      onClick: () => lt(V, -1),
                      children: /* @__PURE__ */ s(Me, { icon: "keyboard_arrow_down", size: 11 })
                    }
                  )
                ] })
              ] })
            ] }, V)),
            /* @__PURE__ */ s(
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
        ref: O,
        className: [
          Ue["dx-datepicker"],
          u ? Ue["dx-datepicker-inline"] : null,
          A
        ].filter(Boolean).join(" "),
        children: [
          !u && /* @__PURE__ */ M(pt, { children: [
            /* @__PURE__ */ s(
              "input",
              {
                ref: Ae,
                type: "text",
                autoComplete: "off",
                value: je,
                disabled: _,
                readOnly: y,
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
            f && !_ && Ze && /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: [
                  Ue["dx-datepicker-clear"],
                  c ? Ue["dx-datepicker-clear--inset"] : null
                ].filter(Boolean).join(" "),
                "aria-label": S ?? "Clear",
                onClick: Ee,
                children: /* @__PURE__ */ s(Me, { icon: "close", size: 14 })
              }
            ),
            c && /* @__PURE__ */ s(
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
                children: /* @__PURE__ */ s(Me, { icon: "calendar_month", size: 16 })
              }
            )
          ] }),
          Qe && /* @__PURE__ */ s(
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
}, DS = ({
  value: e = 0,
  stars: t = 5,
  readOnly: n = !1,
  disabled: r = !1,
  ariaLabel: l = "Rating",
  clearLabel: i = "Clear",
  rateLabel: d = "Rate",
  tabIndex: o = 0,
  className: a,
  onChange: c,
  onValueChange: f
}) => {
  const [u, x] = q(e), h = B(
    (_) => Math.min(t, Math.max(1, _)),
    [t]
  ), g = B(
    (_) => {
      c?.(_), f?.(_);
    },
    [c, f]
  ), m = B(
    (_) => {
      n || r || (g(_), x(_));
    },
    [n, r, g]
  ), b = (_) => {
    if (n || r) return;
    const y = u > 0 ? u : 1;
    switch (_.key) {
      case "ArrowRight":
      case "ArrowUp":
        _.preventDefault(), m(h(y + 1));
        break;
      case "ArrowLeft":
      case "ArrowDown":
        _.preventDefault(), m(h(y - 1));
        break;
      case "Home":
        _.preventDefault(), m(1);
        break;
      case "End":
        _.preventDefault(), m(t);
        break;
    }
  }, p = Array.from({ length: t }, (_, y) => y + 1);
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
        a
      ].filter(Boolean).join(" "),
      onKeyDown: b,
      children: [
        !n && !r && /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: Gn["dx-rating-clear"],
            "aria-label": i,
            tabIndex: e === 0 ? o : -1,
            disabled: r,
            onClick: () => m(0),
            children: /* @__PURE__ */ s(Me, { icon: "block", size: 16 })
          }
        ),
        p.map((_) => {
          const y = _ <= e, N = _ === (e > 0 ? e : u);
          return /* @__PURE__ */ M(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": y,
              "aria-posinset": _,
              "aria-setsize": t,
              "aria-label": `${d} ${_}`,
              tabIndex: N ? o : -1,
              "aria-disabled": r || n || void 0,
              disabled: r || n,
              className: [
                Gn["dx-rating-item"],
                y ? Gn["dx-rating-item-filled"] : null
              ].filter(Boolean).join(" "),
              onClick: () => m(_),
              onFocus: () => x(_),
              children: [
                /* @__PURE__ */ s(
                  "span",
                  {
                    className: Gn["dx-rating-icon-filled"],
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ s(Me, { icon: "star", size: 20 })
                  }
                ),
                /* @__PURE__ */ s("span", { className: Gn["dx-rating-icon-empty"], "aria-hidden": "true", children: /* @__PURE__ */ s(Me, { icon: "star", size: 20 }) })
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
function Sn(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const MS = ({
  value: e = 0,
  valueMin: t = 0,
  valueMax: n = 100,
  min: r = 0,
  max: l = 100,
  step: i = 1,
  range: d = !1,
  orientation: o = "horizontal",
  disabled: a = !1,
  label: c = "Value",
  minLabel: f = "Min",
  maxLabel: u = "Max",
  tabIndex: x = 0,
  className: h,
  onChange: g,
  onInput: m,
  onValueChange: b,
  onInputChange: p
}) => {
  const _ = oe(null), y = oe(
    null
  ), [N, v] = q(null), $ = N ?? e, S = Oe(
    () => Sn($, r, l),
    [$, r, l]
  ), T = Oe(
    () => Sn(d ? t : S, r, l),
    [d, t, S, r, l]
  ), A = Oe(
    () => Sn(d ? Math.max(n, T) : S, r, l),
    [d, n, T, S, r, l]
  ), C = B(
    (W) => {
      const he = l - r;
      return he <= 0 ? 0 : (Sn(W, r, l) - r) / he * 100;
    },
    [r, l]
  ), D = B(
    (W, he) => {
      const ue = _.current;
      if (!ue) return r;
      const ye = ue.getBoundingClientRect();
      let pe;
      o === "vertical" ? pe = 1 - (he - ye.top) / ye.height : pe = (W - ye.left) / ye.width;
      const De = r + Sn(pe, 0, 1) * (l - r);
      return i > 0 ? Sn(Math.round(De / i) * i, r, l) : Sn(De, r, l);
    },
    [r, l, i, o]
  ), I = B(
    (W) => {
      typeof W == "number" && v(W), g?.(W), b?.(W);
    },
    [g, b]
  ), k = B(
    (W) => {
      typeof W == "number" && v(W), m?.(W), p?.(W);
    },
    [m, p]
  ), O = B(
    (W, he, ue) => {
      const ye = D(he, ue);
      let pe;
      d ? W === "min" ? pe = { min: Math.min(ye, A), max: A } : pe = { min: T, max: Math.max(ye, T) } : pe = ye, k(pe), y.current === null && I(pe);
    },
    [d, D, T, A, k, I]
  ), E = B(
    (W, he) => {
      const ue = (i > 0 ? i : 1) * he;
      let ye;
      d ? W === "min" ? ye = {
        min: Sn(T + ue, r, A),
        max: A
      } : ye = {
        min: T,
        max: Sn(A + ue, T, l)
      } : ye = Sn(S + ue, r, l), I(ye);
    },
    [d, i, r, l, T, A, S, I]
  ), P = (W, he) => {
    if (!a)
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
    a || (he.preventDefault(), he.currentTarget.focus(), typeof he.currentTarget.setPointerCapture == "function" && he.currentTarget.setPointerCapture(he.pointerId), y.current = { key: W, pointerId: he.pointerId }, O(W, he.clientX, he.clientY));
  }, j = (W) => {
    !y.current || y.current.pointerId !== W.pointerId || (W.preventDefault(), O(y.current.key, W.clientX, W.clientY));
  }, F = (W) => {
    !y.current || y.current.pointerId !== W.pointerId || (y.current = null, W.preventDefault(), I(d ? { min: T, max: A } : S));
  }, [X, ie] = q(null), te = C(T), we = C(A), le = d ? te : 0, _e = we;
  return /* @__PURE__ */ s(
    "div",
    {
      className: [
        Qn["dx-slider"],
        o === "vertical" ? Qn["dx-slider-vertical"] : null,
        a ? Qn["dx-slider-disabled"] : null,
        h
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ M("div", { ref: _, className: Qn["dx-slider-track"], children: [
        /* @__PURE__ */ s(
          "div",
          {
            className: Qn["dx-slider-range"],
            style: o === "vertical" ? { bottom: `${le}%`, height: `${_e - le}%` } : { left: `${le}%`, width: `${_e - le}%` }
          }
        ),
        /* @__PURE__ */ s(
          "div",
          {
            role: "slider",
            "aria-valuemin": r,
            "aria-valuemax": l,
            "aria-valuenow": Math.round(T),
            "aria-orientation": o,
            "aria-label": d ? f : c,
            "aria-disabled": a || void 0,
            tabIndex: a || d && X === "max" ? -1 : x,
            className: Qn["dx-slider-handle"],
            style: o === "vertical" ? { bottom: `calc(${te}% - 8px)` } : { left: `calc(${te}% - 8px)` },
            onKeyDown: (W) => P("min", W),
            onPointerDown: (W) => L("min", W),
            onPointerMove: j,
            onPointerUp: F,
            onFocus: () => ie("min")
          }
        ),
        d && /* @__PURE__ */ s(
          "div",
          {
            role: "slider",
            "aria-valuemin": r,
            "aria-valuemax": l,
            "aria-valuenow": Math.round(A),
            "aria-orientation": o,
            "aria-label": u,
            "aria-disabled": a || void 0,
            tabIndex: a || X === "min" ? -1 : x,
            className: Qn["dx-slider-handle"],
            style: o === "vertical" ? { bottom: `calc(${we}% - 8px)` } : { left: `calc(${we}% - 8px)` },
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
}, Px = "-10675199.02:48:05.4775808", jx = "10675199.02:48:05.4775808", Ln = 86400, Rn = 3600, xn = 60, Cs = {
  days: "Days",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds"
}, Go = {
  days: Ln,
  hours: Rn,
  minutes: xn,
  seconds: 1
}, Bx = {
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
    const o = l[1] != null ? Number(l[1]) : 0, a = l[2] != null ? Number(l[2]) : 0, c = l[3] != null ? Number(l[3]) : 0, f = l[4] != null ? Number(l[4]) : 0;
    return n * (o * Ln + a * Rn + c * xn + f);
  }
  const i = /^(?:(\d+)\.)?(\d{1,2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/.exec(
    r
  );
  if (i) {
    const d = i[1] != null ? Number(i[1]) : 0, o = Number(i[2]), a = Number(i[3]), c = i[4] != null ? Number(i[4]) : 0, f = i[5] != null ? +`0.${i[5]}` : 0;
    return o > 23 || a > 59 || c > 59 ? null : n * (d * Ln + o * Rn + a * xn + c + f);
  }
  return null;
}
function Fx(e) {
  return e.days * Ln + e.hours * Rn + e.minutes * xn + e.seconds;
}
function Vo(e) {
  let t = Math.abs(e);
  const n = Math.floor(t / Ln);
  t %= Ln;
  const r = Math.floor(t / Rn);
  t %= Rn;
  const l = Math.floor(t / xn), i = Math.round(t % xn * 1e9) / 1e9;
  return { days: n, hours: r, minutes: l, seconds: i };
}
function Us(e, t) {
  const n = e < 0;
  let r = Math.abs(e);
  t === "minute" ? r = Math.round(r / xn) * xn : t === "hour" ? r = Math.round(r / Rn) * Rn : t === "day" && (r = Math.round(r / Ln) * Ln);
  let l = Math.round(r % xn);
  const i = l === 60 ? 1 : 0;
  l = l === 60 ? 0 : l;
  const d = Math.floor(r / xn) + i, o = d % 60, a = Math.floor(d / 60), c = a % 24, f = Math.floor(a / 24), u = n ? "-" : "", x = f > 0 ? `${f}.` : "";
  switch (t) {
    case "day":
      return `${u}${f} day${f === 1 ? "" : "s"}`;
    case "hour":
      return `${u}${x}${fr(c)}`;
    case "minute":
      return `${u}${x}${fr(c)}:${fr(o)}`;
    default:
      return `${u}${x}${fr(c)}:${fr(o)}:${fr(l)}`;
  }
}
function Yo(e, t = "second") {
  const n = Fr(e);
  return n === null ? "" : Us(n, t);
}
function As(e, t, n) {
  return Math.min(n, Math.max(t, e));
}
const IS = st(
  function({
    size: t = "md",
    invalid: n = !1,
    value: r,
    defaultValue: l,
    min: i = Px,
    max: d = jx,
    step: o = "1",
    precision: a = "second",
    showDays: c = !0,
    showHours: f = !0,
    showMinutes: u = !0,
    showSeconds: x = !0,
    allowClear: h = !1,
    inline: g = !1,
    onChange: m,
    onValueChange: b,
    onOpen: p,
    onClose: _,
    disabled: y,
    placeholder: N,
    ariaLabel: v,
    triggerLabel: $,
    clearLabel: S,
    tabIndex: T,
    className: A,
    onBlur: C,
    onKeyDown: D,
    ...I
  }, k) {
    const O = oe(null), E = oe(null), P = oe(null), L = ot(), j = r !== void 0, [F, X] = q(
      () => l != null ? Yo(l, a) : ""
    ), [ie, te] = q(!1), [we, le] = q(null), [_e, W] = q(null), he = Oe(
      () => Fr(i) ?? -Number.MAX_SAFE_INTEGER,
      [i]
    ), ue = Oe(
      () => Fr(d) ?? Number.MAX_SAFE_INTEGER,
      [d]
    ), ye = Oe(() => {
      const re = Number.parseFloat(o);
      return Number.isNaN(re) || re <= 0 ? 1 : re;
    }, [o]), pe = Oe(() => {
      const re = j ? r ?? "" : F;
      return re ? Fr(re) : null;
    }, [r, F, j]), De = B(
      (re) => {
        const Le = re === null ? "" : Us(re, a);
        j || X(Le), m?.(Le), b?.(Le);
      },
      [j, a, m, b]
    ), G = B(
      (re) => {
        re && we !== null && De(we), te(!1), le(null), W(null), _?.(), g || P.current?.focus();
      },
      [g, we, De, _]
    ), $e = B(() => {
      y || (le(pe ?? 0), te(!0), p?.());
    }, [y, pe, p]), ne = B(() => {
      ie ? G(!1) : $e();
    }, [ie, G, $e]), Ae = B(
      (re, Le) => {
        le((Nt) => {
          const xt = (Nt ?? pe ?? 0) + Le * ye * Go[re];
          return As(xt, he, ue);
        });
      },
      [pe, ye, he, ue]
    ), fe = B(
      (re) => {
        const Le = _e?.[re];
        if (Le == null) return;
        const Nt = Number.parseFloat(Le), Rt = Number.isNaN(Nt) ? 0 : Nt;
        le((xt) => {
          const Ie = xt ?? pe ?? 0, Ke = Vo(Ie);
          Ke[re] = Rt;
          const $t = (Ie < 0 ? -1 : 1) * Fx(Ke);
          return As($t, he, ue);
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
      De(re !== null ? As(re, he, ue) : null);
    }, [ie, F, he, ue, De]), At = (re) => {
      j || X(re.target.value);
    }, lt = (re) => {
      re.key === "Enter" ? (re.preventDefault(), ie ? G(!0) : Je()) : re.key === "Escape" && ie ? (re.preventDefault(), G(!1)) : re.key === "ArrowDown" && !ie ? (re.preventDefault(), $e()) : re.key === "Tab" && ie && te(!1), D?.(re);
    }, yt = (re) => {
      Je(), C?.(re);
    }, Z = () => {
      j || X(""), m?.(""), b?.(""), E.current?.focus();
    };
    ve(() => {
      if (!ie) return;
      const re = (Le) => {
        O.current && !O.current.contains(Le.target) && G(!1);
      };
      return document.addEventListener("mousedown", re), () => document.removeEventListener("mousedown", re);
    }, [ie, G]), ve(() => {
      if (!ie) return;
      const re = (Le) => {
        Le.key === "Escape" && G(!1);
      };
      return document.addEventListener("keydown", re), () => document.removeEventListener("keydown", re);
    }, [ie, G]), ve(() => {
      if (g && we !== null) {
        const re = pe;
        (re === null || Math.abs(we - re) > 1e-9) && De(we);
      }
    }, [g, we, pe, De]);
    const z = B(
      (re) => {
        E.current = re, typeof k == "function" ? k(re) : k && (k.current = re);
      },
      [k]
    ), Y = j ? r ? Yo(r, a) : "" : F, Q = j ? !!r : F.length > 0, ge = g || ie, ae = we ?? pe ?? 0, Ee = Vo(ae), je = Bx[a], Qe = ["days", "hours", "minutes", "seconds"].filter(
      (re) => Go[re] >= je && (re === "days" ? c : re === "hours" ? f : re === "minutes" ? u : x)
    ), nt = t === "xs" ? dt["dx-timespanpicker-input--xs"] : t === "sm" ? dt["dx-timespanpicker-input--sm"] : t === "lg" ? dt["dx-timespanpicker-input--lg"] : t === "xl" ? dt["dx-timespanpicker-input--xl"] : dt["dx-timespanpicker-input--md"], Xt = /* @__PURE__ */ M("div", { className: dt["dx-timespanpicker-panel"], children: [
      /* @__PURE__ */ s("div", { className: dt["dx-timespanpicker-preview"], "aria-live": "polite", children: Us(ae, a) }),
      /* @__PURE__ */ s("div", { className: dt["dx-timespanpicker-units"], children: Qe.map((re) => /* @__PURE__ */ M("label", { className: dt["dx-timespanpicker-unit"], children: [
        /* @__PURE__ */ s("span", { className: dt["dx-timespanpicker-unit-label"], children: Cs[re] }),
        /* @__PURE__ */ M("span", { className: dt["dx-timespanpicker-unit-control"], children: [
          /* @__PURE__ */ s(
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
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                "aria-label": `Increase ${Cs[re].toLowerCase()}`,
                onClick: () => {
                  fe(re), Ae(re, 1);
                },
                children: /* @__PURE__ */ s(Me, { icon: "keyboard_arrow_up", size: 11 })
              }
            ),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                "aria-label": `Decrease ${Cs[re].toLowerCase()}`,
                onClick: () => {
                  fe(re), Ae(re, -1);
                },
                children: /* @__PURE__ */ s(Me, { icon: "keyboard_arrow_down", size: 11 })
              }
            )
          ] })
        ] })
      ] }, re)) }),
      /* @__PURE__ */ s("div", { className: dt["dx-timespanpicker-footer"], children: /* @__PURE__ */ s(
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
        ref: O,
        className: [
          dt["dx-timespanpicker"],
          g ? dt["dx-timespanpicker-inline"] : null,
          A
        ].filter(Boolean).join(" "),
        children: [
          !g && /* @__PURE__ */ M(pt, { children: [
            /* @__PURE__ */ s(
              "input",
              {
                ref: z,
                type: "text",
                autoComplete: "off",
                value: Y,
                disabled: y,
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
            h && !y && Q && /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: dt["dx-timespanpicker-clear"],
                "aria-label": S ?? "Clear",
                onClick: Z,
                children: /* @__PURE__ */ s(Me, { icon: "close", size: 14 })
              }
            ),
            /* @__PURE__ */ s(
              "button",
              {
                ref: P,
                type: "button",
                className: [dt["dx-timespanpicker-trigger"]].filter(Boolean).join(" "),
                "aria-label": $ ?? "Open timespan picker",
                "aria-haspopup": "dialog",
                "aria-expanded": ie,
                "aria-controls": L,
                disabled: y,
                onClick: ne,
                children: /* @__PURE__ */ s(Me, { icon: "schedule", size: 16 })
              }
            )
          ] }),
          ge && /* @__PURE__ */ s(
            "div",
            {
              id: L,
              role: g ? void 0 : "dialog",
              "aria-label": v ?? "Time span picker",
              className: g ? void 0 : dt["dx-timespanpicker-popup"],
              children: Xt
            }
          )
        ]
      }
    );
  }
), Hx = "_wrapper_ou9x5_1", Ux = "_cells_ou9x5_8", qx = "_cell_ou9x5_8", Kx = "_invalid_ou9x5_63", Wx = "_live_ou9x5_73", er = {
  wrapper: Hx,
  cells: Ux,
  cell: qx,
  "cell-sm": "_cell-sm_ou9x5_45",
  "cell-md": "_cell-md_ou9x5_51",
  "cell-lg": "_cell-lg_ou9x5_57",
  invalid: Kx,
  live: Wx
};
function Xo(e) {
  return (e ?? "").replace(/\D/g, "").split("");
}
const zS = st(
  function({
    length: t = 6,
    value: n,
    defaultValue: r,
    onChange: l,
    invalid: i = !1,
    size: d = "md",
    autoFocus: o = !1,
    disabled: a = !1,
    label: c = "Security code",
    liveAnnounce: f = !0,
    className: u,
    "aria-label": x
  }, h) {
    const g = ot(), m = n !== void 0, [b, p] = q(Xo(r).join("")), _ = m ? Xo(n).join("") : b, y = Array.from({ length: t }, (I, k) => _[k] ?? ""), N = oe([]), [v, $] = q(""), S = (I) => {
      m || p(I), l?.(I);
    }, T = (I) => {
      const k = N.current[I];
      k && !k.disabled && (k.focus(), k.select());
    }, A = (I, k) => {
      const O = k.replace(/\D/g, "").slice(-1), E = _.split("");
      if (O) {
        E[I] = O;
        const P = E.join("").slice(0, t);
        S(P), P.length < t ? T(I + 1) : f && $("Code complete");
      }
    }, C = (I, k) => {
      if (k.key === "Backspace") {
        if (k.preventDefault(), _[I]) {
          const O = _.split("");
          O[I] = "", S(O.join(""));
        } else if (I > 0) {
          const O = _.split("");
          O[I - 1] = "", S(O.join("")), T(I - 1);
        }
      } else k.key === "ArrowLeft" && I > 0 ? (k.preventDefault(), T(I - 1)) : k.key === "ArrowRight" && I < t - 1 ? (k.preventDefault(), T(I + 1)) : k.key === "Home" ? (k.preventDefault(), T(0)) : k.key === "End" && (k.preventDefault(), T(t - 1));
    }, D = (I, k) => {
      k.preventDefault();
      const O = k.clipboardData.getData("text").replace(/\D/g, "").slice(0, 12);
      if (!O) return;
      const E = _.split("");
      let P = 0;
      for (let j = 0; j < O.length && I + j < t; j++)
        E[I + j] = O[j] ?? "", P++;
      const L = E.join("");
      S(L), L.length >= t ? f && $("Code complete") : T(I + P);
    };
    return /* @__PURE__ */ M(
      "div",
      {
        className: [er.wrapper, u].filter(Boolean).join(" "),
        role: "group",
        "aria-label": x ?? c,
        "data-invalid": i || void 0,
        children: [
          /* @__PURE__ */ s("div", { className: [er.cells, er[d]].join(" "), children: y.map((I, k) => /* @__PURE__ */ s(
            "input",
            {
              ref: (O) => {
                N.current[k] = O, k === 0 && h && (typeof h == "function" ? h(O) : h.current = O);
              },
              type: "text",
              inputMode: "numeric",
              maxLength: 1,
              autoComplete: "one-time-code",
              value: I,
              disabled: a,
              "aria-label": `Digit ${k + 1} of ${t}`,
              "aria-invalid": i && I !== "" ? !0 : void 0,
              autoFocus: o && k === 0,
              className: [
                er.cell,
                er[`cell-${d}`],
                i ? er.invalid : null
              ].filter(Boolean).join(" "),
              onChange: (O) => A(k, O.target.value),
              onKeyDown: (O) => C(k, O),
              onPaste: (O) => D(k, O),
              onFocus: (O) => O.target.select(),
              onBlur: () => {
                f && $("");
              }
            },
            k
          )) }),
          f && /* @__PURE__ */ s(
            "span",
            {
              id: `${g}-live`,
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
), Gx = "_wrapper_6lcd5_1", Vx = "_header_6lcd5_7", Yx = "_label_6lcd5_15", Xx = "_clear_6lcd5_22", Zx = "_canvas_6lcd5_53", Jx = "_disabled_6lcd5_69", _r = {
  wrapper: Gx,
  header: Vx,
  label: Yx,
  clear: Xx,
  canvas: Zx,
  disabled: Jx
}, LS = st(
  function({
    value: t,
    defaultValue: n,
    onChange: r,
    penColor: l = "#1c1c1c",
    penWidth: i = 2.5,
    clearLabel: d = "Clear",
    ariaLabel: o = "Signature",
    width: a,
    height: c = 140,
    disabled: f = !1,
    className: u
  }, x) {
    const h = oe(null), g = oe(!1), m = oe(!1), b = oe({ x: 0, y: 0 });
    ve(() => {
      const S = h.current;
      if (!S) return;
      const T = window.devicePixelRatio || 1, A = Math.round((a ?? S.clientWidth) * T), C = Math.round(c * T);
      (S.width !== A || S.height !== C) && (S.width = A, S.height = C);
      const D = S.getContext("2d");
      if (!D) return;
      D.setTransform(T, 0, 0, T, 0, 0), D.lineWidth = i, D.strokeStyle = l, D.lineCap = "round", D.lineJoin = "round";
      const I = t ?? n;
      if (I) {
        const k = new Image();
        k.onload = () => {
          D.drawImage(k, 0, 0, S.clientWidth, c);
        }, k.src = I;
      }
    }, [t, n, l, i, a, c]);
    const p = () => {
      const S = h.current;
      if (!S) return;
      const T = S.toDataURL("image/png");
      r?.(T);
    }, _ = () => {
      const S = h.current;
      if (!S) return;
      const T = S.getContext("2d");
      T && T.clearRect(0, 0, S.width, S.height), r?.("");
    };
    fs(x, () => ({
      clear: _,
      toDataURL: (S = "image/png", T) => h.current?.toDataURL(S, T) ?? ""
    }));
    const y = (S) => {
      const T = S.currentTarget.getBoundingClientRect();
      return { x: S.clientX - T.left, y: S.clientY - T.top };
    }, N = (S) => {
      f || (S.preventDefault(), typeof S.currentTarget.setPointerCapture == "function" && S.currentTarget.setPointerCapture(S.pointerId), g.current = !0, m.current = !1, b.current = y(S));
    }, v = (S) => {
      if (!g.current) return;
      S.preventDefault();
      const T = S.currentTarget.getContext("2d");
      if (!T) return;
      const A = y(S);
      T.beginPath(), T.moveTo(b.current.x, b.current.y), T.lineTo(A.x, A.y), T.stroke(), b.current = A, m.current = !0;
    }, $ = (S) => {
      g.current && (S.preventDefault(), g.current = !1, m.current && p());
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
            /* @__PURE__ */ s("span", { className: _r.label, children: o }),
            /* @__PURE__ */ s(
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
          /* @__PURE__ */ s(
            "canvas",
            {
              ref: h,
              role: "img",
              "aria-label": o,
              "aria-disabled": f || void 0,
              style: {
                width: a ? `${a}px` : void 0,
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
), Qx = "_wrapper_dsvd2_1", ev = "_trigger_dsvd2_7", tv = "_list_dsvd2_35", nv = "_row_dsvd2_44", rv = "_name_dsvd2_59", sv = "_size_dsvd2_68", ov = "_progress_dsvd2_74", lv = "_fill_dsvd2_82", av = "_status_dsvd2_99", iv = "_remove_dsvd2_106", On = {
  wrapper: Qx,
  trigger: ev,
  list: tv,
  row: nv,
  name: rv,
  size: sv,
  progress: ov,
  fill: lv,
  status: av,
  remove: iv
};
function Zo(e) {
  return e < 1024 ? `${e} B` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
const RS = st(function({
  url: t,
  multiple: n = !1,
  parameterName: r = "files",
  auto: l = !0,
  headers: i,
  accept: d,
  maxFileCount: o = Number.POSITIVE_INFINITY,
  maxFileSize: a,
  chooseText: c = "Upload",
  children: f,
  onProgress: u,
  onComplete: x,
  onError: h
}, g) {
  const m = oe(null), [b, p] = q([]), _ = oe(/* @__PURE__ */ new Map()), y = (T, A) => {
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
      y(T.file.name, { state: "uploading", progress: I }), u?.(T.file.name, I);
    }), A.addEventListener("load", () => {
      A.status >= 200 && A.status < 300 ? (y(T.file.name, { state: "complete", progress: 100 }), x?.(T.file.name)) : (y(T.file.name, {
        state: "error",
        message: `HTTP ${A.status}`
      }), h?.(T.file.name, `HTTP ${A.status}`));
    }), A.addEventListener("error", () => {
      y(T.file.name, { state: "error", message: "Network error" }), h?.(T.file.name, "Network error");
    }), i)
      for (const [D, I] of Object.entries(i))
        A.setRequestHeader(D, I);
    A.open("POST", t), A.send(C), y(T.file.name, { state: "uploading", progress: 0 });
  }, v = (T) => {
    if (!T) return;
    const A = [...T], C = [];
    let D = Math.max(0, o - b.length);
    for (const k of A) {
      if (a != null && k.size > a) {
        h?.(
          k.name,
          `File too large (maximum ${Zo(a)})`
        );
        continue;
      }
      if (D <= 0) {
        h?.(k.name, `Too many files (maximum ${o})`);
        continue;
      }
      D -= 1, C.push(k);
    }
    const I = C.map((k) => ({
      file: k,
      state: "pending",
      progress: 0
    }));
    p((k) => [...k, ...I]), m.current && (m.current.value = ""), l && I.forEach(N);
  }, $ = (T) => {
    _.current.get(T)?.abort(), _.current.delete(T), p((C) => C.filter((D) => D.file.name !== T));
  }, S = f ?? /* @__PURE__ */ M(
    "button",
    {
      type: "button",
      className: On.trigger,
      onClick: () => m.current?.click(),
      children: [
        /* @__PURE__ */ s(Me, { icon: "upload", size: 14 }),
        c
      ]
    }
  );
  return fs(g, () => ({
    open: () => m.current?.click(),
    upload: () => b.forEach((T) => T.state === "pending" ? N(T) : null)
  })), /* @__PURE__ */ M("div", { className: On.wrapper, children: [
    S,
    /* @__PURE__ */ s(
      "input",
      {
        ref: m,
        type: "file",
        hidden: !0,
        multiple: n,
        accept: d,
        "data-testid": "upload-input",
        onChange: (T) => v(T.target.files)
      }
    ),
    !f && b.length > 0 && /* @__PURE__ */ s("ul", { className: On.list, children: b.map(({ file: T, state: A, progress: C, message: D }) => /* @__PURE__ */ M(
      "li",
      {
        className: On.row,
        "data-state": A,
        "data-testid": "upload-row",
        children: [
          /* @__PURE__ */ s("span", { className: On.name, children: T.name }),
          /* @__PURE__ */ s("span", { className: On.size, children: Zo(T.size) }),
          /* @__PURE__ */ s(
            "span",
            {
              className: On.progress,
              role: "progressbar",
              "aria-label": `${T.name} upload progress`,
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": C,
              children: /* @__PURE__ */ s(
                "span",
                {
                  className: On.fill,
                  style: { width: `${C}%` }
                }
              )
            }
          ),
          /* @__PURE__ */ s("span", { className: On.status, role: "status", children: A === "uploading" ? "Uploading" : A === "complete" ? "Complete" : A === "error" ? D ?? "Failed" : "Pending" }),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: On.remove,
              "aria-label": `Remove ${T.name}`,
              onClick: () => $(T.name),
              children: /* @__PURE__ */ s(Me, { icon: "close", size: 14 })
            }
          )
        ]
      },
      T.name
    )) })
  ] });
}), cv = "_zone_nl0bz_1", dv = "_dragging_nl0bz_23", uv = "_caption_nl0bz_28", fv = "_browse_nl0bz_40", _v = "_disabled_nl0bz_67", zr = {
  zone: cv,
  dragging: dv,
  caption: uv,
  browse: fv,
  disabled: _v
};
function pv(e, t) {
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
const PS = st(
  function({
    accept: t,
    multiple: n = !1,
    onDrop: r,
    label: l = "Drop files here or browse",
    dragLabel: i = "Drop to attach",
    browseText: d = "Browse",
    disabled: o = !1,
    className: a
  }, c) {
    const f = oe(null), [u, x] = q(!1), h = (_) => {
      if (!_ || _.length === 0) return;
      const y = [..._].filter((N) => pv(N, t ?? ""));
      y.length !== 0 && r?.(y);
    }, g = (_) => {
      o || (_.preventDefault(), x(!0));
    }, m = (_) => {
      o || (_.preventDefault(), _.dataTransfer.dropEffect = "copy", x(!0));
    }, b = (_) => {
      o || _.currentTarget.contains(_.relatedTarget) || x(!1);
    }, p = (_) => {
      o || (_.preventDefault(), x(!1), h(_.dataTransfer.files));
    };
    return fs(c, () => ({
      open: () => f.current?.click()
    })), /* @__PURE__ */ M(
      "div",
      {
        role: "region",
        "aria-label": l,
        "aria-disabled": o || void 0,
        className: [
          zr.zone,
          u ? zr.dragging : null,
          o ? zr.disabled : null,
          a
        ].filter(Boolean).join(" "),
        onDragEnter: g,
        onDragOver: m,
        onDragLeave: b,
        onDrop: p,
        children: [
          /* @__PURE__ */ s("p", { className: zr.caption, children: u ? i : l }),
          !o && /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: zr.browse,
              onClick: () => f.current?.click(),
              children: d
            }
          ),
          /* @__PURE__ */ s(
            "input",
            {
              ref: f,
              type: "file",
              hidden: !0,
              multiple: n,
              accept: t,
              "data-testid": "dropzone-input",
              onChange: (_) => {
                h(_.target.files), _.target.value = "";
              }
            }
          )
        ]
      }
    );
  }
), mv = "_root_1a92d_1", hv = "_menubar_1a92d_5", gv = "_horizontal_1a92d_15", bv = "_vertical_1a92d_20", yv = "_itemWrapper_1a92d_25", xv = "_item_1a92d_25", vv = "_disabled_1a92d_61", wv = "_icon_1a92d_68", kv = "_text_1a92d_75", Nv = "_caret_1a92d_79", Sv = "_hasChildren_1a92d_85", Ov = "_submenu_1a92d_94", $v = "_submenuItem_1a92d_118", Ev = "_flyout_1a92d_155", Tv = "_hamburger_1a92d_175", Cv = "_responsive_1a92d_198", Av = "_mobileOpen_1a92d_207", _t = {
  root: mv,
  menubar: hv,
  horizontal: gv,
  vertical: bv,
  itemWrapper: yv,
  item: xv,
  disabled: vv,
  icon: wv,
  text: kv,
  caret: Nv,
  hasChildren: Sv,
  submenu: Ov,
  submenuItem: $v,
  flyout: Ev,
  hamburger: Tv,
  responsive: Cv,
  mobileOpen: Av
}, ds = or(null);
function Dv(e, t) {
  if (!e || typeof window > "u") return !1;
  const n = window.location.hash.replace(/^#\/?/, ""), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : n === r || n.startsWith(`${r}/`) : n === r;
}
function Mv(e, t, n, r, l) {
  const [i, d] = q(n), o = e ? t ?? !1 : i, a = B(
    (c) => {
      e || d(c), r?.(c);
    },
    [e, r]
  );
  return ve(() => {
    l > 0 && a(!1);
  }, [l]), [o, a];
}
function Iv({
  icon: e,
  iconColor: t,
  image: n,
  imageAlt: r
}) {
  return n ? /* @__PURE__ */ s("span", { className: _t.icon, "aria-hidden": "true", children: /* @__PURE__ */ s("img", { src: n, alt: r ?? "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ s(
    "span",
    {
      className: _t.icon,
      "aria-hidden": "true",
      style: t ? { color: t } : void 0,
      children: /* @__PURE__ */ s(Me, { icon: e, size: 16 })
    }
  ) : null;
}
function Ol(e) {
  return qt(e) && e.type === $l;
}
function Xs({
  itemKey: e,
  props: t
}) {
  const n = Pn(ds);
  if (!n) throw new Error("MenuItem must be used inside <Menu>");
  const { text: r, value: l, path: i, disabled: d, template: o } = t, a = Oe(
    () => Ur.toArray(t.children).filter(qt),
    [t.children]
  ), c = a.length > 0, f = !!d, u = t.open !== void 0, [x, h] = Mv(
    u,
    t.open,
    t.defaultOpen ?? !1,
    t.onOpenChange,
    n.closeSignal
  ), g = n.level === 0, m = oe(0), p = (g && !u ? n.openKey === e : null) ?? x, _ = B(
    (P) => {
      g && !u ? n.setOpenKey(P ? e : null) : (h(P), g && n.setOpenKey(null));
    },
    [g, u, n, e, h]
  ), [, y] = q(0);
  ve(() => {
    if (!i) return;
    const P = () => y((L) => L + 1);
    return window.addEventListener("hashchange", P), () => window.removeEventListener("hashchange", P);
  }, [i]);
  const N = i && !c ? Dv(i, t.match) : !1, v = B(
    (P) => {
      if (f) {
        P.preventDefault();
        return;
      }
      const L = { text: r, value: l, path: i };
      [n.emit(L), t.onClick?.(L)].includes(!1) && P.preventDefault(), n.closeAll();
    },
    [f, r, l, i, n, t]
  ), $ = B(() => {
    if (!f) {
      if (p && (Date.now() - m.current < 600 || !n.clickToOpen)) {
        m.current = 0;
        return;
      }
      _(!p);
    }
  }, [f, p, _, n.clickToOpen]), S = B(() => {
    !c || f || n.clickToOpen || (m.current = Date.now(), _(!0));
  }, [c, f, n.clickToOpen, _]), T = B(() => {
    n.clickToOpen || _(!1);
  }, [n.clickToOpen, _]), A = `${n.baseId}-submenu-${e}`, [C, D] = q(null);
  ve(() => {
    n.closeSignal > 0 && D(null);
  }, [n.closeSignal]);
  const I = Oe(
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
  ), k = c ? /* @__PURE__ */ s("span", { className: _t.caret, "aria-hidden": "true", children: /* @__PURE__ */ s(
    Me,
    {
      icon: n.flyout && !g ? "chevron_right" : "keyboard_arrow_down",
      size: 10
    }
  ) }) : null, O = o ?? /* @__PURE__ */ M(pt, { children: [
    /* @__PURE__ */ s(
      Iv,
      {
        icon: t.icon,
        iconColor: t.iconColor,
        image: t.image,
        imageAlt: t.imageAlt
      }
    ),
    /* @__PURE__ */ s("span", { className: _t.text, children: r }),
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
        onMouseEnter: n.clickToOpen ? void 0 : S,
        onMouseLeave: n.clickToOpen ? void 0 : T,
        "data-dx-menu-item": "",
        children: [
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              role: "menuitem",
              "data-top": g ? "true" : void 0,
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
              children: O
            }
          ),
          p ? /* @__PURE__ */ s(
            "div",
            {
              id: A,
              role: "menu",
              "aria-label": r,
              className: [
                _t.submenu,
                n.flyout && !g ? _t.flyout : null
              ].filter(Boolean).join(" "),
              "data-dx-menu-submenu": "",
              onKeyDown: P,
              children: /* @__PURE__ */ s(ds.Provider, { value: I, children: a.map(
                (L, j) => Ol(L) ? /* @__PURE__ */ s(
                  Xs,
                  {
                    itemKey: `${e}-${j}`,
                    props: L.props
                  },
                  `${e}-${j}`
                ) : (
                  // Separators / custom content (Radzen `<hr />` parity) render verbatim.
                  /* @__PURE__ */ s(Ws, { children: L }, `${e}-custom-${j}`)
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
  return i && !f ? /* @__PURE__ */ s("div", { className: _t.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ s("a", { href: i, target: t.target, ...E, children: O }) }) : /* @__PURE__ */ s("div", { className: _t.itemWrapper, "data-dx-menu-item": "", children: /* @__PURE__ */ s("button", { type: "button", disabled: f, ...E, children: O }) });
}
function $l(e) {
  if (!Pn(ds)) throw new Error("MenuItem must be used inside <Menu>");
  return /* @__PURE__ */ s(Xs, { itemKey: e.text, props: e });
}
function zv({
  children: e,
  clickToOpen: t = !0,
  flyout: n = !1,
  responsive: r = !0,
  isContextMenu: l = !1,
  onClick: i,
  onClose: d,
  ariaLabel: o = "Menu",
  toggleAriaLabel: a = "Toggle menu",
  className: c,
  ...f
}) {
  const u = ot(), x = oe(null), h = oe(null), [g, m] = q(null), [b, p] = q(0), [_, y] = q(!1), N = oe(null), v = B(
    (C) => i?.(C),
    [i]
  ), $ = B(() => {
    m(null), p((C) => C + 1);
  }, []);
  ve(() => {
    if (g == null) return;
    const C = (D) => {
      x.current && !x.current.contains(D.target) && $();
    };
    return document.addEventListener("mousedown", C), () => document.removeEventListener("mousedown", C);
  }, [g, $]), ve(() => {
    N.current != null && g === N.current && (document.getElementById(`${u}-submenu-${g}`)?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus(), N.current = null);
  }, [g, u]);
  const S = Oe(
    () => ({
      baseId: u,
      flyout: n,
      clickToOpen: t,
      level: 0,
      closeSignal: b,
      emit: v,
      closeAll: $,
      openKey: g,
      setOpenKey: m
    }),
    [u, n, t, b, v, $, g]
  ), T = Oe(
    () => Ur.toArray(e).filter(qt),
    [e]
  ), A = (C) => {
    const D = h.current;
    if (!D) return;
    const I = Array.from(D.children).map((E) => E.querySelector('[role="menuitem"]')).filter(
      (E) => E != null && !E.hasAttribute("disabled") && E.getAttribute("aria-disabled") !== "true"
    );
    if (g != null) {
      const E = document.getElementById(`${u}-submenu-${g}`);
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
          C.preventDefault(), $(), d?.(), D.querySelector(`[data-index="${g}"]`)?.focus();
          return;
        }
        if (C.key === "Enter" || C.key === " ") return;
      }
      if (C.key === "Escape") {
        C.preventDefault(), $(), d?.();
        return;
      }
    }
    const k = document.activeElement, O = k ? I.indexOf(k) : -1;
    if (C.key === "ArrowRight") {
      if (C.preventDefault(), I.length === 0) return;
      I[O === -1 ? 0 : (O + 1) % I.length]?.focus();
      return;
    }
    if (C.key === "ArrowLeft") {
      if (C.preventDefault(), I.length === 0) return;
      I[O === -1 ? I.length - 1 : (O - 1 + I.length) % I.length]?.focus();
      return;
    }
    if (C.key === "ArrowDown") {
      if (O >= 0) {
        const E = k?.getAttribute("data-index");
        if (E == null) return;
        D.querySelector(
          `[data-index="${E}"]`
        )?.getAttribute("aria-haspopup") === "menu" && (C.preventDefault(), N.current = E, m(E));
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
      const E = I.map((L) => L.textContent ?? ""), P = O === -1 ? 0 : (O + 1) % I.length;
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
      ref: x,
      "aria-label": o,
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
        r ? /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            "aria-label": a,
            "aria-expanded": _,
            className: _t.hamburger,
            onClick: () => y((C) => !C),
            children: /* @__PURE__ */ s(Me, { icon: "menu", size: 20 })
          }
        ) : null,
        /* @__PURE__ */ s(
          "div",
          {
            ref: h,
            role: l ? "menu" : "menubar",
            "aria-label": o,
            className: _t.menubar,
            onKeyDown: A,
            children: /* @__PURE__ */ s(ds.Provider, { value: S, children: T.map(
              (C, D) => Ol(C) ? /* @__PURE__ */ s(
                Xs,
                {
                  itemKey: String(D),
                  props: C.props
                },
                `top-${D}`
              ) : /* @__PURE__ */ s(Ws, { children: C }, `top-custom-${D}`)
            ) })
          }
        )
      ]
    }
  );
}
const Lv = "_popup_uiejp_1", Rv = "_menu_uiejp_22", qs = {
  popup: Lv,
  menu: Rv
}, El = or(null);
function jS() {
  const e = Pn(El);
  if (!e)
    throw new Error("useContextMenu must be used inside <ContextMenuProvider>");
  return e;
}
function Tl(e) {
  return e.map((t, n) => {
    const { children: r, ...l } = t;
    return /* @__PURE__ */ s($l, { ...l, children: r ? Tl(r) : void 0 }, `${t.text}-${n}`);
  });
}
function Pv({ state: e, onClose: t }) {
  const n = oe(null), [r, l] = q({ left: e.x, top: e.y });
  Ds(() => {
    const d = n.current;
    if (!d) return;
    const o = d.getBoundingClientRect();
    l({
      left: Math.max(0, Math.min(e.x, window.innerWidth - o.width)),
      top: Math.max(0, Math.min(e.y, window.innerHeight - o.height))
    });
  }, [e.x, e.y, e.options]), ve(() => {
    n.current?.querySelector(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )?.focus();
  }, []);
  const i = B(
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
      className: qs.popup,
      style: { left: r.left, top: r.top },
      children: /* @__PURE__ */ s("div", { className: qs.menu, children: e.options.content ?? /* @__PURE__ */ s(
        zv,
        {
          isContextMenu: !0,
          responsive: !1,
          ariaLabel: e.options.ariaLabel ?? "Context menu",
          onClick: i,
          onClose: t,
          children: Tl(e.options.items ?? [])
        }
      ) })
    }
  );
}
function BS({ children: e }) {
  const [t, n] = q(null), r = B(() => {
    n((d) => (d?.invoker && document.body.contains(d.invoker) && d.invoker.focus({ preventScroll: !0 }), null));
  }, []), l = B(
    (d, o) => {
      d.preventDefault();
      const a = d.currentTarget ?? d.target;
      n({ x: d.clientX, y: d.clientY, invoker: a, options: o });
    },
    []
  );
  ve(() => {
    if (!t) return;
    const d = (f) => {
      const u = document.querySelector(`.${qs.popup}`);
      u && !u.contains(f.target) && r();
    }, o = (f) => {
      f.key === "Escape" && (f.preventDefault(), r());
    }, a = () => r(), c = () => r();
    return document.addEventListener("pointerdown", d, !0), document.addEventListener("keydown", o, !0), window.addEventListener("resize", a), window.addEventListener("hashchange", c), () => {
      document.removeEventListener("pointerdown", d, !0), document.removeEventListener("keydown", o, !0), window.removeEventListener("resize", a), window.removeEventListener("hashchange", c);
    };
  }, [t, r]);
  const i = Oe(
    () => ({ open: l, close: r, isOpen: t != null }),
    [l, r, t]
  );
  return /* @__PURE__ */ M(El.Provider, { value: i, children: [
    e,
    t ? /* @__PURE__ */ s(Pv, { state: t, onClose: r }) : null
  ] });
}
const jv = "_root_rgcia_1", Bv = "_list_rgcia_9", Fv = "_item_rgcia_14", Hv = "_trigger_rgcia_18", Uv = "_disabled_rgcia_45", qv = "_expanded_rgcia_52", Kv = "_selected_rgcia_56", Wv = "_icon_rgcia_61", Gv = "_text_rgcia_72", Vv = "_caret_rgcia_79", Yv = "_open_rgcia_86", Xv = "_submenu_rgcia_90", Zv = "_iconOnly_rgcia_172", Jv = "_stacked_rgcia_201", Lt = {
  root: jv,
  list: Bv,
  item: Fv,
  trigger: Hv,
  disabled: Uv,
  expanded: qv,
  selected: Kv,
  icon: Wv,
  text: Gv,
  caret: Vv,
  open: Yv,
  submenu: Xv,
  iconOnly: Zv,
  stacked: Jv
}, us = or(null);
function Qv() {
  return typeof window > "u" ? "" : window.location.hash.replace(/^#\/?/, "");
}
function e2(e, t) {
  const n = Qv(), r = e.replace(/^#?\/?/, "");
  return t === "prefix" ? r === "" ? !1 : r === "/" ? n === "" || n === "/" : n === r || n.startsWith(`${r}/`) : n === r;
}
function t2({
  icon: e,
  iconColor: t,
  image: n
}) {
  return n ? /* @__PURE__ */ s("span", { className: Lt.icon, "aria-hidden": "true", children: /* @__PURE__ */ s("img", { src: n, alt: "", width: 16, height: 16 }) }) : e ? /* @__PURE__ */ s(
    "span",
    {
      className: Lt.icon,
      "aria-hidden": "true",
      style: t ? { color: t } : void 0,
      children: /* @__PURE__ */ s(Me, { icon: e, size: 16 })
    }
  ) : null;
}
function Zs({
  itemKey: e,
  ancestors: t,
  props: n
}) {
  const r = Pn(us);
  if (!r) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  const { text: l, value: i, path: d, disabled: o } = n, a = Oe(
    () => Ur.toArray(n.children).filter(qt),
    [n.children]
  ), c = a.length > 0, f = !!o, u = n.match ?? r.match, x = n.expanded !== void 0, [h, g] = q(
    n.defaultExpanded ?? !1
  ), m = x ? n.expanded ?? !1 : h, b = B(
    (F) => {
      x || g(F), n.onExpandedChange?.(F);
    },
    [x, n]
  );
  ve(() => {
    r.collapseSignal > 0 && !r.collapseSkipRef.current.has(e) && b(!1);
  }, [r.collapseSignal]);
  const p = n.onSelectedChange !== void 0 || n.selected !== void 0, [_, y] = q(
    n.defaultSelected ?? !1
  ), N = !p && d ? e2(d, u) : !1, v = n.selected ?? (p ? _ : N || _), [, $] = q(0);
  ve(() => {
    if (!d) return;
    const F = () => $((X) => X + 1);
    return window.addEventListener("hashchange", F), () => window.removeEventListener("hashchange", F);
  }, [d]);
  const S = Oe(
    () => ({
      ...r,
      level: r.level + 1,
      openAncestors: () => {
        b(!0), r.openAncestors();
      }
    }),
    [r, b]
  );
  ve(() => {
    N && t.length > 0 && S.openAncestors();
  }, []);
  const T = B(
    (F) => {
      if (f) {
        F.preventDefault();
        return;
      }
      const X = { text: l, value: i, path: d };
      [r.emit(X), n.onClick?.(X)].includes(!1) && F.preventDefault(), p || y(!0), n.onSelectedChange?.(!0);
    },
    [f, l, i, d, r, n, p]
  ), A = B(() => {
    f || (m || r.notifyOpened(e, t), b(!m));
  }, [f, m, r, e, t, b]), C = B(
    (F) => {
      F.key === "Enter" || F.key === " " ? (F.preventDefault(), c ? A() : F.target.click()) : F.key === "Escape" && m ? (F.preventDefault(), b(!1)) : F.key === "ArrowRight" && c && !m ? (F.preventDefault(), r.notifyOpened(e, t), b(!0)) : F.key === "ArrowLeft" && m && (F.preventDefault(), b(!1));
    },
    [c, A, m, b, r, e, t]
  ), D = c && r.showArrow ? /* @__PURE__ */ s(
    "span",
    {
      className: [Lt.caret, m ? Lt.open : null].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: /* @__PURE__ */ s(Me, { icon: "keyboard_arrow_down", size: 10 })
    }
  ) : null, I = n.template ?? /* @__PURE__ */ M(pt, { children: [
    /* @__PURE__ */ s(
      t2,
      {
        icon: n.icon,
        iconColor: n.iconColor,
        image: n.image,
        imageAlt: n.imageAlt
      }
    ),
    r.displayStyle === "icon" ? /* @__PURE__ */ s("span", { className: Lt.text, "aria-label": l, children: n.icon || n.image ? null : l.slice(0, 1) }) : /* @__PURE__ */ s("span", { className: Lt.text, children: l }),
    D
  ] }), k = `${r.baseId}-panel-${e}`, O = `${r.baseId}-trigger-${e}`, E = [
    Lt.trigger,
    f ? Lt.disabled : null,
    m ? Lt.expanded : null,
    v ? Lt.selected : null
  ].filter(Boolean).join(" "), P = r.level > 0 ? "menuitem" : void 0, L = c ? /* @__PURE__ */ s(
    "button",
    {
      type: "button",
      id: O,
      role: P,
      "aria-expanded": m,
      "aria-controls": k,
      "aria-disabled": f || void 0,
      disabled: f,
      tabIndex: f ? -1 : 0,
      className: E,
      onClick: A,
      onKeyDown: C,
      children: I
    }
  ) : d && !f ? /* @__PURE__ */ s(
    "a",
    {
      id: O,
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
  ) : /* @__PURE__ */ s(
    "button",
    {
      type: "button",
      id: O,
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
  ), j = c ? r.renderMode === "server" && !m ? null : /* @__PURE__ */ s(
    "div",
    {
      id: k,
      role: "menu",
      "aria-labelledby": O,
      className: Lt.submenu,
      hidden: r.renderMode === "client" && !m ? !0 : void 0,
      children: /* @__PURE__ */ s(us.Provider, { value: S, children: a.map((F, X) => /* @__PURE__ */ s(
        Zs,
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
function FS(e) {
  if (!Pn(us)) throw new Error("PanelMenuItem must be used inside <PanelMenu>");
  return /* @__PURE__ */ s(Zs, { itemKey: e.text, ancestors: [], props: e });
}
function HS({
  children: e,
  multiple: t = !0,
  displayStyle: n = "iconAndText",
  showArrow: r = !0,
  match: l = "prefix",
  renderMode: i = "client",
  onClick: d,
  ariaLabel: o = "Panel menu",
  className: a,
  ...c
}) {
  const f = ot(), [u, x] = q(0), h = oe(/* @__PURE__ */ new Set()), g = B(
    (N) => d?.(N),
    [d]
  ), m = B(
    (N, v) => {
      t || (h.current = /* @__PURE__ */ new Set([N, ...v]), x(($) => $ + 1));
    },
    [t]
  ), b = (N) => Array.from(
    N.querySelectorAll('button, a[href], [role="menuitem"]')
  ).filter(
    (v) => !v.hasAttribute("disabled") && v.getAttribute("aria-disabled") !== "true" && v.closest("[hidden]") == null
  ), p = (N) => {
    if (!(N.key === "Enter" || N.key === " ")) {
      if (N.key === "ArrowDown" || N.key === "ArrowUp") {
        const v = N.target, $ = b(N.currentTarget), S = $.indexOf(v);
        if (S === -1) return;
        N.preventDefault();
        const T = N.key === "ArrowDown" ? 1 : -1;
        $[(S + T + $.length) % $.length]?.focus();
      } else if (N.key === "Home" || N.key === "End") {
        const v = b(N.currentTarget);
        N.preventDefault(), (N.key === "Home" ? v[0] : v[v.length - 1])?.focus();
      }
    }
  }, _ = Oe(
    () => ({
      baseId: f,
      multiple: t,
      displayStyle: n,
      showArrow: r,
      renderMode: i,
      match: l,
      level: 0,
      collapseSignal: u,
      collapseSkipRef: h,
      emit: g,
      notifyOpened: m,
      openAncestors: () => {
      }
    }),
    [
      f,
      t,
      n,
      r,
      i,
      l,
      u,
      g,
      m
    ]
  ), y = Oe(
    () => Ur.toArray(e).filter(qt),
    [e]
  );
  return /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": o,
      className: [
        Lt.root,
        n === "icon" ? Lt.iconOnly : null,
        n === "stacked" ? Lt.stacked : null,
        a
      ].filter(Boolean).join(" "),
      onKeyDown: p,
      ...c,
      children: /* @__PURE__ */ s("div", { className: Lt.list, role: "presentation", children: /* @__PURE__ */ s(us.Provider, { value: _, children: y.map((N, v) => /* @__PURE__ */ s(
        Zs,
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
const n2 = "_root_5numg_1", r2 = "_trigger_5numg_7", s2 = "_defaultTrigger_5numg_40", o2 = "_avatar_5numg_46", l2 = "_menu_5numg_58", a2 = "_item_5numg_74", i2 = "_disabled_5numg_88", c2 = "_active_5numg_97", d2 = "_icon_5numg_107", u2 = "_text_5numg_114", $n = {
  root: n2,
  trigger: r2,
  defaultTrigger: s2,
  avatar: o2,
  menu: l2,
  item: a2,
  disabled: i2,
  active: c2,
  icon: d2,
  text: u2
};
function US({
  items: e,
  trigger: t,
  onClick: n,
  ariaLabel: r = "Profile menu",
  className: l
}) {
  const i = ot(), d = `${i}-menu`, o = oe(null), a = oe(null), [c, f] = q(!1), [u, x] = q(-1), h = t, g = e.map((v, $) => v.disabled ? -1 : $).filter((v) => v >= 0), m = B(
    (v) => {
      if (v.disabled) return;
      const $ = {
        text: v.text,
        path: v.path
      };
      n?.($), f(!1), a.current?.focus();
    },
    [n]
  ), b = B(() => {
    x(g[0] ?? -1), f(!0);
  }, [g]), p = B(() => {
    f(!1), x(-1), a.current?.focus();
  }, []);
  ve(() => {
    if (!c) return;
    const v = ($) => {
      o.current && !o.current.contains($.target) && (f(!1), x(-1));
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
    if (g.length === 0) return;
    const $ = g.indexOf(u), S = $ === -1 ? 0 : ($ + v + g.length) % g.length, T = g[S];
    T != null && x(T);
  }, y = (v) => {
    if (!c) {
      (v.key === "ArrowDown" || v.key === "Enter" || v.key === " ") && (v.preventDefault(), b());
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
        v.preventDefault(), g[0] != null && x(g[0]);
        break;
      case "End":
        v.preventDefault(), g[g.length - 1] != null && x(g[g.length - 1]);
        break;
      case "Enter":
      case " ":
        if (v.preventDefault(), u >= 0) {
          const $ = e[u];
          $ && !$.disabled && m($);
        }
        break;
      case "Tab":
        f(!1), x(-1);
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
        v.preventDefault(), g[0] != null && x(g[0]);
        break;
      case "End":
        v.preventDefault(), g[g.length - 1] != null && x(g[g.length - 1]);
        break;
      case "Enter":
      case " ":
        if (v.preventDefault(), u >= 0) {
          const $ = e[u];
          $ && !$.disabled && m($);
        }
        break;
      case "Escape":
        v.preventDefault(), p();
        break;
      case "Tab":
        f(!1), x(-1);
        break;
    }
  };
  return /* @__PURE__ */ s(
    "div",
    {
      ref: o,
      className: [$n.root, l].filter(Boolean).join(" "),
      "data-testid": "profile-menu-root",
      children: /* @__PURE__ */ M("nav", { "aria-label": r, children: [
        /* @__PURE__ */ s(
          "button",
          {
            ref: a,
            type: "button",
            "aria-haspopup": "menu",
            "aria-expanded": c,
            "aria-controls": d,
            "aria-label": r,
            className: $n.trigger,
            onClick: () => c ? p() : b(),
            onKeyDown: y,
            children: h ?? /* @__PURE__ */ M("span", { className: $n.defaultTrigger, children: [
              /* @__PURE__ */ s("span", { className: $n.avatar, "aria-hidden": "true", children: "●" }),
              /* @__PURE__ */ s("span", { children: "Profile" })
            ] })
          }
        ),
        c ? /* @__PURE__ */ s(
          "div",
          {
            id: d,
            role: "menu",
            "aria-label": r,
            "aria-activedescendant": u >= 0 ? `${i}-item-${u}` : void 0,
            className: $n.menu,
            onKeyDown: N,
            tabIndex: -1,
            children: e.map((v, $) => {
              const S = !!v.disabled, T = $ === u;
              return /* @__PURE__ */ M(
                "div",
                {
                  id: `${i}-item-${$}`,
                  role: "menuitem",
                  "aria-disabled": S || void 0,
                  tabIndex: S ? -1 : 0,
                  className: [
                    $n.item,
                    T ? $n.active : null,
                    S ? $n.disabled : null
                  ].filter(Boolean).join(" "),
                  onClick: () => {
                    S || m(v);
                  },
                  onMouseEnter: () => {
                    S || x($);
                  },
                  children: [
                    v.icon ? /* @__PURE__ */ s("span", { className: $n.icon, "aria-hidden": "true", children: v.icon }) : null,
                    /* @__PURE__ */ s("span", { className: $n.text, children: v.text })
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
const f2 = "_root_vv0xs_1", _2 = "_bottomRight_vv0xs_11", p2 = "_bottomLeft_vv0xs_16", m2 = "_topRight_vv0xs_21", h2 = "_topLeft_vv0xs_26", g2 = "_menu_vv0xs_31", b2 = "_itemWrapper_vv0xs_48", y2 = "_tooltip_vv0xs_54", x2 = "_main_vv0xs_76", v2 = "_mainIcon_vv0xs_104", w2 = "_mainOpen_vv0xs_109", k2 = "_item_vv0xs_48", N2 = "_disabled_vv0xs_141", S2 = "_itemIcon_vv0xs_148", Kt = {
  root: f2,
  bottomRight: _2,
  bottomLeft: p2,
  topRight: m2,
  topLeft: h2,
  menu: g2,
  itemWrapper: b2,
  tooltip: y2,
  main: x2,
  mainIcon: v2,
  mainOpen: w2,
  item: k2,
  disabled: N2,
  itemIcon: S2
};
function qS({
  items: e,
  position: t,
  icon: n = "+",
  onClick: r,
  ariaLabel: l = "Open menu",
  className: i
}) {
  const d = t ?? "bottom-right", a = `${ot()}-menu`, c = oe(null), f = oe(null), [u, x] = q(!1), h = B(
    (p) => {
      if (p.disabled) return;
      const _ = { text: p.text, value: p.value };
      r?.(_), x(!1), f.current?.focus();
    },
    [r]
  );
  ve(() => {
    if (!u) return;
    const p = (_) => {
      c.current && !c.current.contains(_.target) && x(!1);
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, [u]), ve(() => {
    if (!u) return;
    const p = (_) => {
      _.key === "Escape" && (x(!1), f.current?.focus());
    };
    return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [u]);
  const g = d === "bottom-right" ? Kt.bottomRight : d === "bottom-left" ? Kt.bottomLeft : d === "top-right" ? Kt.topRight : Kt.topLeft, m = (p) => {
    !u && (p.key === "Enter" || p.key === " " || p.key === "ArrowDown" || p.key === "ArrowUp") ? (p.preventDefault(), x(!0)) : u && p.key === "Escape" && (p.preventDefault(), x(!1));
  }, b = (p) => {
    p.key === "Escape" && (p.preventDefault(), x(!1), f.current?.focus());
  };
  return /* @__PURE__ */ M(
    "div",
    {
      ref: c,
      className: [Kt.root, g, i].filter(Boolean).join(" "),
      "data-testid": "fab-menu",
      children: [
        u ? /* @__PURE__ */ s(
          "div",
          {
            id: a,
            role: "menu",
            "aria-label": l,
            className: Kt.menu,
            onKeyDown: b,
            children: e.map((p, _) => {
              const y = !!p.disabled;
              return /* @__PURE__ */ M("div", { className: Kt.itemWrapper, children: [
                /* @__PURE__ */ s("span", { className: Kt.tooltip, "aria-hidden": "true", children: p.text }),
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
                    className: [Kt.item, y ? Kt.disabled : null].filter(Boolean).join(" "),
                    onClick: () => h(p),
                    children: /* @__PURE__ */ s("span", { className: Kt.itemIcon, "aria-hidden": "true", children: p.icon ?? "•" })
                  }
                )
              ] }, `${p.text}-${_}`);
            })
          }
        ) : null,
        /* @__PURE__ */ s(
          "button",
          {
            ref: f,
            type: "button",
            className: Kt.main,
            "aria-haspopup": "menu",
            "aria-expanded": u,
            "aria-controls": a,
            "aria-label": l,
            onClick: () => x((p) => !p),
            onKeyDown: m,
            children: /* @__PURE__ */ s(
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
const O2 = "_root_1eyur_1", $2 = "_list_1eyur_5", E2 = "_item_1eyur_15", T2 = "_link_1eyur_22", C2 = "_linkButton_1eyur_23", A2 = "_current_1eyur_24", D2 = "_disabled_1eyur_68", M2 = "_icon_1eyur_74", I2 = "_text_1eyur_81", z2 = "_separator_1eyur_85", ut = {
  root: O2,
  list: $2,
  item: E2,
  link: T2,
  linkButton: C2,
  current: A2,
  disabled: D2,
  icon: M2,
  text: I2,
  separator: z2
};
function KS({
  items: e,
  onClick: t,
  ariaLabel: n = "Breadcrumb",
  className: r
}) {
  const l = t, i = (d) => {
    d.disabled || l?.({ text: d.text, path: d.path });
  };
  return /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": n,
      className: [ut.root, r].filter(Boolean).join(" "),
      children: /* @__PURE__ */ s("ol", { className: ut.list, children: e.map((d, o) => {
        const a = o === e.length - 1, c = !!d.disabled;
        return /* @__PURE__ */ M("li", { className: ut.item, children: [
          a ? c ? /* @__PURE__ */ M(
            "span",
            {
              className: [ut.current, ut.disabled].filter(Boolean).join(" "),
              "aria-current": "page",
              "aria-disabled": "true",
              tabIndex: -1,
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: ut.icon, "aria-hidden": "true", children: d.icon }) : null,
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
                f.preventDefault(), i(d);
              },
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: ut.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ s("span", { className: ut.text, children: d.text })
              ]
            }
          ) : /* @__PURE__ */ M(
            "span",
            {
              className: ut.current,
              "aria-current": "page",
              tabIndex: 0,
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: ut.icon, "aria-hidden": "true", children: d.icon }) : null,
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
                d.icon ? /* @__PURE__ */ s("span", { className: ut.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ s("span", { className: ut.text, children: d.text })
              ]
            }
          ) : d.path ? /* @__PURE__ */ M(
            "a",
            {
              href: d.path,
              className: ut.link,
              onClick: (f) => {
                f.preventDefault(), i(d);
              },
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: ut.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ s("span", { className: ut.text, children: d.text })
              ]
            }
          ) : /* @__PURE__ */ M(
            "button",
            {
              type: "button",
              className: ut.linkButton,
              tabIndex: 0,
              onClick: () => i(d),
              children: [
                d.icon ? /* @__PURE__ */ s("span", { className: ut.icon, "aria-hidden": "true", children: d.icon }) : null,
                /* @__PURE__ */ s("span", { className: ut.text, children: d.text })
              ]
            }
          ),
          a ? null : /* @__PURE__ */ s("span", { className: ut.separator, "aria-hidden": "true", children: "/" })
        ] }, `${d.text}-${o}`);
      }) })
    }
  );
}
const L2 = "_link_tmy3k_1", R2 = {
  link: L2
}, WS = st(function({ children: t, icon: n, visible: r = !0, className: l, ...i }, d) {
  if (r === !1) return null;
  const o = /* @__PURE__ */ M(pt, { children: [
    n != null && /* @__PURE__ */ s(Me, { icon: n, "aria-hidden": "true" }),
    t
  ] }), a = [R2.link, l].filter(Boolean).join(" ");
  if (i.href != null) {
    const { href: f, ...u } = i;
    return /* @__PURE__ */ s(
      "a",
      {
        ref: d,
        className: a,
        href: f,
        ...u,
        children: o
      }
    );
  }
  return /* @__PURE__ */ s(
    "button",
    {
      ref: d,
      type: "button",
      className: a,
      ...i,
      children: o
    }
  );
}), P2 = "_root_dnkuu_1", j2 = "_list_dnkuu_5", B2 = "_item_dnkuu_15", F2 = "_connector_dnkuu_21", H2 = "_connectorCompleted_dnkuu_30", U2 = "_step_dnkuu_34", q2 = "_active_dnkuu_69", K2 = "_completed_dnkuu_75", W2 = "_circle_dnkuu_79", G2 = "_check_dnkuu_109", V2 = "_icon_dnkuu_114", Y2 = "_number_dnkuu_119", X2 = "_text_dnkuu_124", Wt = {
  root: P2,
  list: j2,
  item: B2,
  connector: F2,
  connectorCompleted: H2,
  step: U2,
  active: q2,
  completed: K2,
  circle: W2,
  check: G2,
  icon: V2,
  number: Y2,
  text: X2
};
function GS({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: r = 0,
  linear: l,
  Linear: i,
  onChange: d,
  Change: o,
  onSelectedIndexChange: a,
  ariaLabel: c = "Steps",
  className: f
}) {
  const u = l ?? i ?? !1, x = t ?? n, h = x !== void 0, [g, m] = q(() => Math.min(Math.max(0, x ?? r), Math.max(0, e.length - 1))), p = Math.min(
    Math.max(0, h ? x : g),
    Math.max(0, e.length - 1)
  ), _ = oe(null), y = B(
    ($) => {
      const S = Math.min(
        Math.max(0, $),
        Math.max(0, e.length - 1)
      );
      h || m(S), (d ?? o ?? a)?.(S);
    },
    [h, d, o, a, e.length]
  ), N = B(
    ($, S) => !!(S.disabled || u && $ > p + 1),
    [u, p]
  ), v = ($) => {
    const S = Array.from(
      $.currentTarget.querySelectorAll("button[data-step]")
    ).filter((C) => C.getAttribute("aria-disabled") !== "true" && !C.disabled), T = document.activeElement, A = T ? S.indexOf(T) : -1;
    if ($.key === "ArrowRight" || $.key === "ArrowDown") {
      if ($.preventDefault(), S.length === 0) return;
      const C = A === -1 ? 0 : (A + 1) % S.length, D = S[C];
      D && D.focus();
    } else if ($.key === "ArrowLeft" || $.key === "ArrowUp") {
      if ($.preventDefault(), S.length === 0) return;
      const C = A === -1 ? S.length - 1 : (A - 1 + S.length) % S.length, D = S[C];
      D && D.focus();
    } else $.key === "Home" ? ($.preventDefault(), S[0]?.focus()) : $.key === "End" && ($.preventDefault(), S[S.length - 1]?.focus());
  };
  return /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": c,
      className: [Wt.root, f].filter(Boolean).join(" "),
      onKeyDown: v,
      children: /* @__PURE__ */ s("ol", { ref: _, role: "list", className: Wt.list, children: e.map(($, S) => {
        const T = S === p, A = S < p, C = N(S, $);
        return /* @__PURE__ */ M(
          "li",
          {
            role: "listitem",
            className: Wt.item,
            children: [
              S > 0 ? /* @__PURE__ */ s(
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
                  "data-step": S,
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
                    C || y(S);
                  },
                  children: [
                    /* @__PURE__ */ s("span", { className: Wt.circle, "aria-hidden": "true", children: A ? /* @__PURE__ */ s("span", { className: Wt.check, "aria-hidden": "true", children: /* @__PURE__ */ s(Me, { icon: "check", size: "sm" }) }) : $.icon ? /* @__PURE__ */ s("span", { className: Wt.icon, children: $.icon }) : /* @__PURE__ */ s("span", { className: Wt.number, children: S + 1 }) }),
                    /* @__PURE__ */ s("span", { className: Wt.text, children: $.text })
                  ]
                }
              )
            ]
          },
          `${$.text}-${S}`
        );
      }) })
    }
  );
}
const Z2 = "_root_12hod_1", J2 = "_horizontal_12hod_13", Q2 = "_vertical_12hod_17", ew = "_pane_12hod_21", tw = "_handle_12hod_31", nw = "_handleHorizontal_12hod_51", rw = "_handleVertical_12hod_57", sw = "_handleGrip_12hod_63", ow = "_handleCollapseHint_12hod_75", lw = "_collapseBtn_12hod_79", aw = "_collapseBtnCollapsed_12hod_109", dn = {
  root: Z2,
  horizontal: J2,
  vertical: Q2,
  pane: ew,
  handle: tw,
  handleHorizontal: nw,
  handleVertical: rw,
  handleGrip: sw,
  handleCollapseHint: ow,
  collapseBtn: lw,
  collapseBtnCollapsed: aw
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
function VS({
  orientation: e,
  Orientation: t,
  panes: n,
  onResize: r,
  Resize: l,
  onCollapse: i,
  Collapse: d,
  ariaLabel: o = "Splitter",
  className: a
}) {
  const c = e ?? t ?? "horizontal", f = c === "horizontal", u = oe(null), x = B(() => {
    const k = n.length;
    if (k === 0) return [];
    const O = n.map((P) => P.size ? Lr(P.size, 100 / k) : 100 / k), E = O.reduce((P, L) => P + L, 0);
    return Math.abs(E - 100) > 0.01 && E > 0 ? O.map((P) => P / E * 100) : O;
  }, [n]), [h, g] = q(() => x()), [m, b] = q(
    () => n.map((k) => !!k.collapsed)
  ), p = oe(h);
  ve(() => {
    b(n.map((k) => !!k.collapsed));
  }, [n]);
  const _ = B(
    () => n.map((k) => Lr(k.min, 0)),
    [n]
  ), y = B(
    () => n.map((k) => Lr(k.max, 100)),
    [n]
  ), N = B(
    (k, O) => {
      const E = { paneIndex: k, newSize: O, cancel: !1 };
      return (r ?? l)?.(E), !E.cancel;
    },
    [r, l]
  ), v = B(
    (k, O) => {
      const E = { paneIndex: k, collapse: O, cancel: !1 };
      return (i ?? d)?.(E), !E.cancel;
    },
    [i, d]
  ), $ = B(
    (k) => {
      const O = !m[k];
      v(k, O) && (O ? (p.current = [...h], b((E) => {
        const P = [...E];
        return P[k] !== void 0 && (P[k] = !0), P;
      }), g((E) => {
        const P = [...E], L = P[k] ?? 0, j = k < P.length - 1 ? k + 1 : k - 1;
        if (j >= 0 && j < P.length) {
          const F = P[j] ?? 0;
          P[j] = F + L, P[k] = 0;
        } else
          P[k] = 0;
        return P;
      })) : (b((E) => {
        const P = [...E];
        return P[k] !== void 0 && (P[k] = !1), P;
      }), g(() => {
        const E = [...p.current];
        return E.length !== n.length ? n.map(() => 100 / n.length) : E;
      })));
    },
    [m, h, n.length, v]
  ), S = oe(
    null
  ), T = B(
    (k, O, E) => {
      const P = u.current;
      if (!P) return null;
      const L = P.getBoundingClientRect();
      let j;
      if (f) {
        if (L.width === 0) return null;
        j = (O - L.left) / L.width * 100;
      } else {
        if (L.height === 0) return null;
        j = (E - L.top) / L.height * 100;
      }
      let F = 0;
      for (let ie = 0; ie < k; ie++) {
        const te = h[ie];
        te !== void 0 && (F += te);
      }
      return j - F;
    },
    [f, h]
  ), A = (k, O) => {
    O.preventDefault();
    const E = O.currentTarget;
    E.focus(), typeof E.setPointerCapture == "function" && E.setPointerCapture(O.pointerId), S.current = { handleIndex: k, pointerId: O.pointerId };
  }, C = (k) => {
    if (!S.current || S.current.pointerId !== k.pointerId)
      return;
    k.preventDefault();
    const O = S.current.handleIndex, E = T(O, k.clientX, k.clientY);
    if (E == null) return;
    const P = _(), L = y(), j = P[O] ?? 0, F = L[O] ?? 100, X = O + 1, ie = P[X] ?? 0, te = L[X] ?? 100, we = h[O] ?? 0, le = h[X] ?? 0, _e = we + le;
    if (_e <= 0) return;
    let W = zn(E, j, F), he = _e - W;
    if (he < ie) {
      if (he = ie, W = _e - he, W < j || W > F) return;
    } else if (he > te && (he = te, W = _e - he, W < j || W > F))
      return;
    W = zn(W, j, F), he = _e - W, N(O, W) && g((ue) => {
      const ye = [...ue];
      return ye[O] = W, ye[X] = he, ye;
    });
  }, D = (k) => {
    !S.current || S.current.pointerId !== k.pointerId || (S.current = null);
  }, I = (k, O) => {
    const E = _(), P = y(), L = k, j = k + 1, F = h[L] ?? 0, X = h[j] ?? 0, ie = F + X;
    let te = 0;
    const we = !!n[L]?.collapsible, le = !!n[j]?.collapsible;
    if (f ? O.key === "ArrowLeft" ? te = -5 : O.key === "ArrowRight" && (te = 5) : O.key === "ArrowUp" ? te = -5 : O.key === "ArrowDown" && (te = 5), O.key === "Home") {
      O.preventDefault();
      let _e = E[L] ?? 0, W = ie - _e;
      if (W = zn(
        W,
        E[j] ?? 0,
        P[j] ?? 100
      ), _e = ie - W, _e = zn(_e, E[L] ?? 0, P[L] ?? 100), !N(L, _e)) return;
      g((he) => {
        const ue = [...he];
        return ue[L] = _e, ue[j] = W, ue;
      });
      return;
    }
    if (O.key === "End") {
      O.preventDefault();
      let _e = P[L] ?? 100;
      _e = Math.min(_e, ie - (E[j] ?? 0));
      let W = ie - _e;
      if (W = zn(
        W,
        E[j] ?? 0,
        P[j] ?? 100
      ), _e = ie - W, _e = zn(_e, E[L] ?? 0, P[L] ?? 100), !N(L, _e)) return;
      g((he) => {
        const ue = [...he];
        return ue[L] = _e, ue[j] = W, ue;
      });
      return;
    }
    if ((O.key === "Enter" || O.key === " ") && (we || le)) {
      O.preventDefault(), $(we ? L : j);
      return;
    }
    if (te !== 0) {
      O.preventDefault();
      let _e = F + te, W = ie - _e;
      const he = E[L] ?? 0, ue = P[L] ?? 100, ye = E[j] ?? 0, pe = P[j] ?? 100;
      if (_e = zn(_e, he, ue), W = ie - _e, (W < ye || W > pe) && (W = zn(W, ye, pe), _e = ie - W, _e = zn(_e, he, ue), W = ie - _e), !N(L, _e)) return;
      g((De) => {
        const G = [...De];
        return G[L] = _e, G[j] = W, G;
      });
    }
  };
  return /* @__PURE__ */ s(
    "div",
    {
      ref: u,
      className: [
        dn.root,
        f ? dn.horizontal : dn.vertical,
        a
      ].filter(Boolean).join(" "),
      "aria-label": o,
      children: n.map((k, O) => {
        const E = !!m[O], P = E ? 0 : h[O] ?? 100 / n.length, L = E ? { display: "none" } : f ? {
          flexBasis: `${P}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        } : {
          flexBasis: `${P}%`,
          flexGrow: 0,
          flexShrink: 0,
          overflow: "auto"
        }, j = Lr(k.min, 0), F = Lr(k.max, 100), X = O < n.length - 1, ie = !!n[O + 1]?.collapsible;
        return /* @__PURE__ */ M("div", { style: { display: "contents" }, children: [
          /* @__PURE__ */ M(
            "div",
            {
              role: "group",
              "aria-label": k.label ?? `Pane ${O + 1}`,
              className: dn.pane,
              style: L,
              "data-collapsed": E ? "true" : void 0,
              children: [
                E ? null : k.children,
                k.collapsible && !E ? /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    className: dn.collapseBtn,
                    "aria-label": `Collapse pane ${O + 1}`,
                    "aria-expanded": !E,
                    onClick: () => $(O),
                    children: f ? "◀" : "▲"
                  }
                ) : null,
                k.collapsible && E ? /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    className: dn.collapseBtn,
                    "aria-label": `Expand pane ${O + 1}`,
                    "aria-expanded": !E,
                    onClick: () => $(O),
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
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: dn.collapseBtnCollapsed,
                "aria-label": `Expand pane ${O + 1}`,
                "aria-expanded": "false",
                onClick: () => $(O),
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
              "aria-label": `Resize handle ${O + 1}`,
              tabIndex: E || m[O + 1] ? -1 : 0,
              className: [
                dn.handle,
                f ? dn.handleHorizontal : dn.handleVertical
              ].filter(Boolean).join(" "),
              onPointerDown: (te) => A(O, te),
              onPointerMove: C,
              onPointerUp: D,
              onKeyDown: (te) => I(O, te),
              children: [
                /* @__PURE__ */ s("span", { className: dn.handleGrip, "aria-hidden": "true" }),
                (k.collapsible || ie) && /* @__PURE__ */ s(
                  "span",
                  {
                    className: dn.handleCollapseHint,
                    "aria-hidden": "true"
                  }
                )
              ]
            }
          ) : null
        ] }, O);
      })
    }
  );
}
const iw = "_root_1w3wd_1", cw = "_list_1w3wd_5", dw = "_vertical_1w3wd_14", uw = "_horizontal_1w3wd_20", fw = "_item_1w3wd_28", _w = "_link_1w3wd_32", pw = "_active_1w3wd_57", pr = {
  root: iw,
  list: cw,
  vertical: dw,
  horizontal: uw,
  item: fw,
  link: _w,
  active: pw
};
function YS({
  items: e,
  selector: t,
  Selector: n,
  orientation: r,
  Orientation: l,
  onClick: i,
  Click: d,
  ariaLabel: o = "Table of contents",
  className: a
}) {
  const c = t ?? n, f = r ?? l ?? "vertical", [u, x] = q(
    () => e[0]?.selector ?? null
  ), h = oe(u);
  h.current = u;
  const g = B(
    (m, b) => {
      if (x(m.selector), (i ?? d)?.({ text: m.text, selector: m.selector }), b) {
        try {
          b.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        } catch {
          b.scrollIntoView();
        }
        const _ = b;
        _.getAttribute("tabindex") == null && _.tabIndex === -1 || _.tabIndex < 0 ? (_.getAttribute("tabindex"), _.setAttribute("tabindex", "-1"), _.focus({ preventScroll: !0 })) : _.focus({ preventScroll: !0 });
      }
    },
    [i, d]
  );
  return ve(() => {
    if (e.length === 0) return;
    const b = (() => {
      if (c) {
        const v = document.querySelector(c);
        if (v) return v;
      }
      return window;
    })();
    let p = null;
    const _ = /* @__PURE__ */ new Map(), y = () => {
      let v = null, $ = null;
      for (const T of e) {
        const A = document.querySelector(T.selector);
        if (!A) continue;
        _.set(T.selector, A);
        const C = A.getBoundingClientRect();
        let D = C.top;
        if (b !== window) {
          const I = b.getBoundingClientRect();
          D = C.top - I.top;
        }
        D <= 80 ? (!$ || D > $.el.getBoundingClientRect().top - (b !== window ? b.getBoundingClientRect().top : 0)) && ($ = { sel: T.selector, el: A }) : (!v || D < v.top) && (v = { sel: T.selector, top: D });
      }
      const S = $?.sel ?? v?.sel ?? e[0]?.selector ?? null;
      S && S !== h.current && x(S);
    }, N = () => {
      y();
    };
    if (typeof IntersectionObserver < "u") {
      const v = b === window ? { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0 } : {
        root: b,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      };
      p = new IntersectionObserver(($) => {
        const S = $.filter((T) => T.isIntersecting).sort((T, A) => T.boundingClientRect.top - A.boundingClientRect.top);
        if (S[0]) {
          const T = S[0].target;
          for (const A of e) {
            if (document.querySelector(A.selector) === T) {
              x(A.selector);
              break;
            }
            if (A.selector.startsWith("#") && T.id === A.selector.slice(1)) {
              x(A.selector);
              break;
            }
          }
        } else
          y();
      }, v);
      for (const $ of e) {
        const S = document.querySelector($.selector);
        S && (p.observe(S), _.set($.selector, S));
      }
    }
    return b === window ? (window.addEventListener("scroll", N, { passive: !0 }), y(), () => {
      window.removeEventListener("scroll", N), p?.disconnect();
    }) : (b.addEventListener("scroll", N, {
      passive: !0
    }), y(), () => {
      b.removeEventListener("scroll", N), p?.disconnect();
    });
  }, [e, c]), /* @__PURE__ */ s(
    "nav",
    {
      "aria-label": o,
      className: [pr.root, pr[f], a].filter(Boolean).join(" "),
      children: /* @__PURE__ */ s("ol", { className: pr.list, children: e.map((m) => {
        const b = m.selector === u;
        return /* @__PURE__ */ s("li", { className: pr.item, children: /* @__PURE__ */ s(
          "a",
          {
            href: m.selector.startsWith("#") || m.selector.startsWith(".") ? m.selector : `#${m.selector}`,
            className: [pr.link, b ? pr.active : null].filter(Boolean).join(" "),
            "aria-current": b ? "location" : void 0,
            onClick: (p) => {
              p.preventDefault();
              const _ = document.querySelector(m.selector);
              g(m, _);
            },
            children: m.text
          }
        ) }, `${m.text}-${m.selector}`);
      }) })
    }
  );
}
const mw = "_root_1bfit_1", hw = "_viewport_1bfit_17", gw = "_slide_1bfit_24", bw = "_active_1bfit_33", yw = "_arrow_1bfit_37", xw = "_prev_1bfit_71", vw = "_next_1bfit_75", ww = "_pauseBtn_1bfit_79", kw = "_indicators_1bfit_110", Nw = "_indicator_1bfit_110", Sw = "_indicatorActive_1bfit_145", un = {
  root: mw,
  viewport: hw,
  slide: gw,
  active: bw,
  arrow: yw,
  prev: xw,
  next: vw,
  pauseBtn: ww,
  indicators: kw,
  indicator: Nw,
  indicatorActive: Sw
};
function XS({
  items: e,
  selectedIndex: t,
  SelectedIndex: n,
  defaultIndex: r = 0,
  auto: l,
  Auto: i,
  interval: d,
  Interval: o,
  pauseOnHover: a,
  PauseOnHover: c,
  showArrows: f,
  ShowArrows: u,
  showIndicators: x,
  ShowIndicators: h,
  onChange: g,
  Change: m,
  ariaLabel: b = "Carousel",
  className: p
}) {
  const _ = t ?? n, y = _ !== void 0, [N, v] = q(() => Math.min(Math.max(0, _ ?? r), Math.max(0, e.length - 1))), $ = y ? _ : N, S = e.length === 0 ? 0 : Math.min(Math.max(0, $), e.length - 1), T = l ?? i ?? !1, A = d ?? o ?? 3e3, C = a ?? c ?? !0, D = f ?? u ?? !0, I = x ?? h ?? !0, [k, O] = q(!1), [E, P] = q(!1), L = k || E, j = oe(null), F = ot(), X = B(
    (ye) => {
      const pe = e.length === 0 ? 0 : (ye % e.length + e.length) % e.length;
      y || v(pe), (g ?? m)?.(pe);
    },
    [y, g, m, e.length]
  ), ie = B(() => {
    X(S - 1);
  }, [X, S]), te = B(() => {
    X(S + 1);
  }, [X, S]), we = B(
    (ye) => {
      X(ye);
    },
    [X]
  );
  ve(() => {
    if (!T || L || e.length <= 1) return;
    const ye = setInterval(() => {
      X(S + 1);
    }, A);
    return () => clearInterval(ye);
  }, [T, L, A, S, X, e.length]);
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
      "aria-label": b,
      tabIndex: 0,
      className: [un.root, p].filter(Boolean).join(" "),
      onKeyDown: le,
      onMouseEnter: _e,
      onMouseLeave: W,
      onFocusCapture: he,
      onBlurCapture: ue,
      children: [
        /* @__PURE__ */ s("div", { id: F, className: un.viewport, children: e.map((ye, pe) => {
          const De = pe === S;
          return /* @__PURE__ */ s(
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
          /* @__PURE__ */ s(
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
          /* @__PURE__ */ s(
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
        T ? /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            className: un.pauseBtn,
            "aria-label": k ? "Resume" : "Pause",
            "aria-pressed": k,
            onClick: () => O((ye) => !ye),
            children: k ? "▶" : "⏸"
          }
        ) : null,
        I && e.length > 1 ? /* @__PURE__ */ s(
          "div",
          {
            className: un.indicators,
            role: "group",
            "aria-label": "Slide indicators",
            children: e.map((ye, pe) => {
              const De = pe === S;
              return /* @__PURE__ */ s(
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
const Ow = "_root_1aa5u_1", $w = "_group_1aa5u_20", Ew = "_itemWrapper_1aa5u_30", Tw = "_treeitem_1aa5u_34", Cw = "_disabled_1aa5u_50", Aw = "_selected_1aa5u_60", Dw = "_caret_1aa5u_66", Mw = "_caretIcon_1aa5u_113", Iw = "_caretOpen_1aa5u_120", zw = "_caretPlaceholder_1aa5u_124", Lw = "_label_1aa5u_130", Rw = "_loading_1aa5u_137", Pw = "_loadingRow_1aa5u_143", jw = "_empty_1aa5u_149", Bw = "_checkbox_1aa5u_155", Mt = {
  root: Ow,
  group: $w,
  itemWrapper: Ew,
  treeitem: Tw,
  disabled: Cw,
  selected: Aw,
  caret: Dw,
  caretIcon: Mw,
  caretOpen: Iw,
  caretPlaceholder: zw,
  label: Lw,
  loading: Rw,
  loadingRow: Pw,
  empty: jw,
  checkbox: Bw
};
function Fw({
  indeterminate: e,
  ...t
}) {
  const n = oe(null);
  return ve(() => {
    n.current && (n.current.indeterminate = e ?? !1);
  }, [e]), /* @__PURE__ */ s("input", { ref: n, type: "checkbox", ...t });
}
function ZS({
  data: e,
  Data: t,
  children: n,
  Children: r,
  textProperty: l,
  TextProperty: i,
  keyProperty: d,
  KeyProperty: o,
  selectionMode: a,
  SelectionMode: c,
  selectedItem: f,
  SelectedItem: u,
  selectedItems: x,
  SelectedItems: h,
  defaultSelectedItem: g,
  defaultSelectedItems: m,
  onChange: b,
  Change: p,
  onExpand: _,
  Expand: y,
  onCollapse: N,
  Collapse: v,
  loadChildData: $,
  LoadChildData: S,
  template: T,
  Template: A,
  itemTemplate: C,
  ItemTemplate: D,
  ariaLabel: I,
  AriaLabel: k,
  allowCheckBoxes: O = !1,
  checkedKeys: E,
  defaultCheckedKeys: P,
  onCheckedChange: L,
  allowCheckChildren: j = !0,
  className: F
}) {
  const X = e ?? t ?? [], ie = n ?? r, te = l ?? i ?? "text", we = d ?? o ?? "id", le = a ?? c ?? "single", _e = I ?? k ?? "Tree", W = $ ?? S, he = T ?? A ?? C ?? D, ue = B(
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
  ), [fe, Fe] = q(() => /* @__PURE__ */ new Set()), Ge = f ?? u, Je = x ?? h, yt = le === "multiple" ? Je !== void 0 : Ge !== void 0, Z = B(() => {
    if (le === "multiple") {
      if (m && m.length > 0)
        return new Set(m.map((de) => ue(de)));
      const K = /* @__PURE__ */ new Set(), ee = (de) => {
        for (const Ne of de) {
          Ne.selected && K.add(ue(Ne));
          const ke = pe(Ne);
          ke && ee(ke);
        }
      };
      return ee(X), K;
    } else {
      if (g) return /* @__PURE__ */ new Set([ue(g)]);
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
    g,
    m,
    ue,
    pe,
    X
  ]), [z, Y] = q(
    () => Z()
  ), Q = Oe(() => {
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
          const ke = b ?? p;
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
          const ke = b ?? p;
          ke && ke({ item: K, selectedItem: K });
        } else {
          const ke = b ?? p;
          ke && ke({ item: K, selectedItem: K });
        }
    },
    [
      ue,
      le,
      Q,
      yt,
      b,
      p,
      ae,
      ge
    ]
  ), je = B(
    async (K) => {
      const ee = ue(K);
      if (!!K.disabled) return;
      const Ne = G.has(ee), ke = _ ?? y, Ce = N ?? v, We = pe(K), it = ne.get(ee) ?? We, Et = !(it !== void 0 && it.length > 0) && W != null;
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
      y,
      N,
      v
    ]
  ), Ze = Oe(() => {
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
      if (!O || !j) return !1;
      const ee = Le(K);
      return ee.length > 0 && ee.every((de) => re.has(de));
    },
    [re, O, j, Le]
  ), Rt = B(
    (K) => {
      if (!O || !j || re.has(K))
        return !1;
      const ee = Le(K);
      if (ee.length === 0) return !1;
      const de = ee.filter((Ne) => re.has(Ne)).length;
      return de > 0 && de < ee.length;
    },
    [re, O, j, Le]
  ), xt = B(
    (K) => {
      if (!O || K.disabled) return;
      const ee = ue(K), de = new Set(re);
      if (de.has(ee) || Nt(ee)) {
        if (de.delete(ee), j)
          for (const Ne of Le(ee)) de.delete(Ne);
      } else if (de.add(ee), j)
        for (const Ne of Le(ee)) de.add(Ne);
      E === void 0 && Xt(de), L?.([...de]);
    },
    [
      O,
      j,
      E,
      re,
      Le,
      ue,
      Nt,
      L
    ]
  ), Ie = Oe(() => {
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
        if (K.key === " " && O) {
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
      O,
      xt
    ]
  ), Pt = B(() => {
    if (!Ke && Ie.length > 0) {
      const K = Ie[0];
      K && vt(K.key);
    }
  }, [Ke, Ie]), Xe = (K, ee, de) => /* @__PURE__ */ s("ul", { role: "group", className: Mt.group, children: K.map((Ne, ke) => {
    const Ce = ue(Ne), We = ye(Ne), Be = ne.get(Ce) ?? pe(Ne);
    let it;
    ne.has(Ce) ? it = ne.get(Ce).length > 0 : Be !== void 0 ? it = Be.length > 0 : W ? it = !0 : it = !1;
    const rt = G.has(Ce), Et = Q.has(Ce), mt = !!Ne.disabled, ze = fe.has(Ce), Tt = Ke === Ce, Zt = K.length, _n = ke + 1, Tn = he ? he(Ne) : We, jn = O ? {
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
            O ? /* @__PURE__ */ s(
              Fw,
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
            it ? /* @__PURE__ */ s(
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
                children: /* @__PURE__ */ s(
                  "span",
                  {
                    "aria-hidden": "true",
                    className: [
                      Mt.caretIcon,
                      rt ? Mt.caretOpen : null
                    ].filter(Boolean).join(" "),
                    children: /* @__PURE__ */ s(Me, { icon: "chevron_right", size: 10 })
                  }
                )
              }
            ) : /* @__PURE__ */ s(
              "span",
              {
                className: Mt.caretPlaceholder,
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ s("span", { className: Mt.label, children: Tn }),
            ze ? /* @__PURE__ */ s("span", { className: Mt.loading, "aria-hidden": "true", children: "…" }) : null
          ]
        }
      ),
      it && rt ? ze ? /* @__PURE__ */ s("div", { className: Mt.loadingRow, "aria-busy": "true", children: "Loading…" }) : Be && Be.length > 0 ? Xe(Be, ee + 1) : ne.has(Ce) && ne.get(Ce).length > 0 ? Xe(
        ne.get(Ce),
        ee + 1
      ) : (Be && Be.length === 0, null) : null
    ] }, Ce);
  }) });
  return /* @__PURE__ */ s(
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
      children: X.length === 0 ? /* @__PURE__ */ s("div", { className: Mt.empty, children: "No items" }) : Xe(X, 1)
    }
  );
}
const Hw = "_root_10fdq_1", Uw = "_panel_10fdq_8", qw = "_header_10fdq_19", Kw = "_listbox_10fdq_28", Ww = "_option_10fdq_42", Gw = "_disabled_10fdq_57", Vw = "_active_10fdq_66", Yw = "_selected_10fdq_70", Xw = "_empty_10fdq_86", Zw = "_controls_10fdq_93", Jw = "_reorder_10fdq_102", Qw = "_btn_10fdq_110", tt = {
  root: Hw,
  panel: Uw,
  header: qw,
  listbox: Kw,
  option: Ww,
  disabled: Gw,
  active: Vw,
  selected: Yw,
  empty: Xw,
  controls: Zw,
  reorder: Jw,
  btn: Qw
};
function It(e, t) {
  const n = e[t];
  return n != null ? String(n) : String(e.id ?? "");
}
function ss(e) {
  const t = e.text;
  return t != null ? String(t) : String(e.id ?? "");
}
function JS({
  source: e,
  Source: t,
  target: n,
  Target: r,
  value: l,
  Value: i,
  targetValue: d,
  TargetValue: o,
  data: a,
  Data: c,
  onSourceChange: f,
  SourceChange: u,
  onTargetChange: x,
  TargetChange: h,
  keyProperty: g,
  KeyProperty: m,
  onMove: b,
  Move: p,
  ariaLabel: _,
  AriaLabel: y,
  className: N
}) {
  const v = g ?? m ?? "id", $ = _ ?? y ?? "PickList", S = e ?? t ?? l ?? i ?? a ?? c ?? [], T = n ?? r ?? d ?? o ?? [], [A, C] = q(() => [
    ...S
  ]), [D, I] = q(() => [
    ...T
  ]);
  ve(() => {
    const z = e ?? t ?? l ?? i ?? a ?? c;
    z !== void 0 && C([...z]);
  }, [e, t, l, i, a, c]), ve(() => {
    const z = n ?? r ?? d ?? o;
    z !== void 0 && I([...z]);
  }, [n, r, d, o]);
  const [k, O] = q(
    () => /* @__PURE__ */ new Set()
  ), [E, P] = q(
    () => /* @__PURE__ */ new Set()
  ), [L, j] = q(() => {
    const z = S.findIndex((Y) => !Y.disabled);
    return z >= 0 ? z : 0;
  }), [F, X] = q(() => {
    const z = T.findIndex((Y) => !Y.disabled);
    return z >= 0 ? z : 0;
  }), ie = Oe(
    () => A.map((z, Y) => z.disabled ? -1 : Y).filter((z) => z >= 0),
    [A]
  ), te = Oe(
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
    O((z) => {
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
      (x ?? h)?.(z);
    },
    [x, h]
  ), _e = B(
    (z) => {
      (b ?? p)?.(z);
    },
    [b, p]
  ), W = B(
    (z) => {
      const Y = A[z];
      if (!Y || Y.disabled) return;
      const Q = It(Y, v);
      O((ge) => {
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
    C(Q), I(ge), O(/* @__PURE__ */ new Set());
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
    O(ae), we(ge), le(Q), _e({
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
    C(Y), I(Q), O(/* @__PURE__ */ new Set()), we(Y), le(Q), _e({
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
          (Qe) => ss(A[Qe]).toLowerCase().startsWith(ae)
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
          (Qe) => ss(D[Qe]).toLowerCase().startsWith(ae)
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
          /* @__PURE__ */ s("div", { className: tt.header, children: "Source" }),
          /* @__PURE__ */ s(
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
                /* @__PURE__ */ s(
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
                return /* @__PURE__ */ s(
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
                    children: ss(z)
                  },
                  Q
                );
              })
            }
          )
        ] }),
        /* @__PURE__ */ M("div", { className: tt.controls, children: [
          /* @__PURE__ */ s(
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
          /* @__PURE__ */ s(
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
          /* @__PURE__ */ s(
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
          /* @__PURE__ */ s(
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
          /* @__PURE__ */ s(
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
          /* @__PURE__ */ s("div", { className: tt.header, children: "Target" }),
          /* @__PURE__ */ s(
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
                /* @__PURE__ */ s(
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
                return /* @__PURE__ */ s(
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
                    children: ss(z)
                  },
                  Q
                );
              })
            }
          ),
          /* @__PURE__ */ M("div", { className: tt.reorder, children: [
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: tt.btn,
                "aria-label": "Move up",
                "aria-disabled": !Ae || void 0,
                disabled: !Ae,
                onClick: G,
                children: /* @__PURE__ */ s(Me, { icon: "keyboard_arrow_up", size: "sm" })
              }
            ),
            /* @__PURE__ */ s(
              "button",
              {
                type: "button",
                className: tt.btn,
                "aria-label": "Move down",
                "aria-disabled": !Ae || void 0,
                disabled: !Ae,
                onClick: $e,
                children: /* @__PURE__ */ s(Me, { icon: "keyboard_arrow_down", size: "sm" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const ek = "_root_1qxsp_1", tk = "_header_1qxsp_8", nk = "_title_1qxsp_15", rk = "_navBtn_1qxsp_20", sk = "_resources_1qxsp_39", ok = "_resource_1qxsp_39", lk = "_grid_1qxsp_50", ak = "_timeCol_1qxsp_55", ik = "_timeCell_1qxsp_61", ck = "_dayCol_1qxsp_66", dk = "_dayHeader_1qxsp_73", uk = "_slot_1qxsp_81", fk = "_event_1qxsp_91", Gt = {
  root: ek,
  header: tk,
  title: nk,
  navBtn: rk,
  resources: sk,
  resource: ok,
  grid: lk,
  timeCol: ak,
  timeCell: ik,
  dayCol: ck,
  dayHeader: dk,
  slot: uk,
  event: fk
};
function Jo(e) {
  return e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function QS({
  data: e,
  view: t = "week",
  date: n,
  onDateChange: r,
  resources: l,
  onEventClick: i,
  onSlotClick: d,
  ariaLabel: o = "Scheduler",
  className: a
}) {
  const [c, f] = q(
    n ?? /* @__PURE__ */ new Date()
  ), u = n ?? c, x = (m) => {
    n || f(m), r?.(m);
  }, h = t === "day" ? [u] : t === "week" ? Array.from({ length: 7 }, (m, b) => {
    const p = new Date(u);
    return p.setDate(u.getDate() - u.getDay() + b), p;
  }) : Array.from({ length: 30 }, (m, b) => {
    const p = new Date(u);
    return p.setDate(1 + b), p;
  }), g = Array.from({ length: 12 }, (m, b) => 8 + b);
  return /* @__PURE__ */ M(
    "div",
    {
      className: [Gt.root, a].filter(Boolean).join(" "),
      role: "group",
      "aria-label": o,
      children: [
        /* @__PURE__ */ M("div", { className: Gt.header, children: [
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: Gt.navBtn,
              "aria-label": "Previous",
              onClick: () => {
                const m = new Date(u);
                m.setDate(m.getDate() - 7), x(m);
              },
              children: "‹"
            }
          ),
          /* @__PURE__ */ s("span", { className: Gt.title, children: u.toLocaleDateString() }),
          /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: Gt.navBtn,
              "aria-label": "Next",
              onClick: () => {
                const m = new Date(u);
                m.setDate(m.getDate() + 7), x(m);
              },
              children: "›"
            }
          )
        ] }),
        l && /* @__PURE__ */ s("div", { className: Gt.resources, children: l.map((m) => /* @__PURE__ */ s(
          "div",
          {
            className: Gt.resource,
            role: "presentation",
            "aria-label": m.name,
            children: m.name
          },
          m.id
        )) }),
        /* @__PURE__ */ M("div", { className: Gt.grid, role: "presentation", children: [
          /* @__PURE__ */ s("div", { className: Gt.timeCol, role: "presentation", children: g.map((m) => /* @__PURE__ */ M("div", { className: Gt.timeCell, children: [
            m,
            ":00"
          ] }, m)) }),
          h.map((m) => /* @__PURE__ */ M(
            "div",
            {
              className: Gt.dayCol,
              role: "presentation",
              title: m.toLocaleDateString(),
              onClick: () => d?.({ date: m }),
              tabIndex: 0,
              "aria-label": m.toLocaleDateString(),
              children: [
                /* @__PURE__ */ s("div", { className: Gt.dayHeader, children: m.toLocaleDateString(void 0, {
                  weekday: "short",
                  month: "short",
                  day: "numeric"
                }) }),
                g.map((b) => /* @__PURE__ */ s(
                  "div",
                  {
                    className: Gt.slot,
                    tabIndex: -1,
                    onClick: () => {
                      const p = new Date(m);
                      p.setHours(b), d?.({ date: p });
                    }
                  },
                  b
                )),
                e.filter((b) => b.start.toDateString() === m.toDateString()).map((b) => /* @__PURE__ */ s(
                  "button",
                  {
                    type: "button",
                    className: Gt.event,
                    "aria-label": `${b.title} ${Jo(b.start)} - ${Jo(b.end)}`,
                    "aria-pressed": !1,
                    onClick: () => i?.({ event: b }),
                    children: b.title
                  },
                  b.id
                ))
              ]
            },
            m.toISOString()
          ))
        ] })
      ]
    }
  );
}
const _k = "_root_dj5ne_1", pk = "_header_dj5ne_8", mk = "_headerCell_dj5ne_15", hk = "_timeline_dj5ne_21", gk = "_row_dj5ne_26", bk = "_taskName_dj5ne_32", yk = "_timelineCell_dj5ne_37", xk = "_bar_dj5ne_43", vk = "_progress_dj5ne_56", wk = "_dep_dj5ne_61", En = {
  root: _k,
  header: pk,
  headerCell: mk,
  timeline: hk,
  row: gk,
  taskName: bk,
  timelineCell: yk,
  bar: xk,
  progress: vk,
  dep: wk
};
function eO({
  tasks: e,
  view: t = "week",
  onTaskClick: n,
  ariaLabel: r = "Gantt",
  className: l
}) {
  const [i, d] = q(null);
  return /* @__PURE__ */ M(
    "div",
    {
      className: [En.root, l].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": r,
      "aria-rowcount": e.length,
      children: [
        /* @__PURE__ */ M("div", { className: En.header, role: "row", children: [
          /* @__PURE__ */ s("div", { className: En.headerCell, role: "columnheader", children: "Task" }),
          /* @__PURE__ */ M("div", { className: En.timeline, role: "columnheader", children: [
            "Timeline (",
            t,
            ")"
          ] })
        ] }),
        e.map((o) => /* @__PURE__ */ M(
          "div",
          {
            className: En.row,
            role: "row",
            "aria-selected": i === o.id,
            children: [
              /* @__PURE__ */ s("div", { className: En.taskName, role: "gridcell", children: o.name }),
              /* @__PURE__ */ M("div", { className: En.timelineCell, role: "gridcell", children: [
                /* @__PURE__ */ s(
                  "div",
                  {
                    className: En.bar,
                    role: "button",
                    "aria-label": `${o.name} ${o.start.toLocaleDateString()} - ${o.end.toLocaleDateString()}${o.progress !== void 0 ? `, ${o.progress}% complete` : ""}`,
                    "aria-pressed": i === o.id,
                    tabIndex: 0,
                    onClick: () => {
                      d(o.id), n?.({ task: o });
                    },
                    onKeyDown: (a) => {
                      (a.key === "Enter" || a.key === " ") && (a.preventDefault(), d(o.id), n?.({ task: o }));
                    },
                    children: /* @__PURE__ */ s(
                      "div",
                      {
                        className: En.progress,
                        style: { width: `${o.progress ?? 0}%` }
                      }
                    )
                  }
                ),
                o.dependencies?.map((a) => /* @__PURE__ */ s("svg", { className: En.dep, "aria-hidden": "true", children: /* @__PURE__ */ s(
                  "line",
                  {
                    x1: "0",
                    y1: "10",
                    x2: "20",
                    y2: "10",
                    stroke: "var(--dx-border-color)"
                  }
                ) }, a))
              ] })
            ]
          },
          o.id
        ))
      ]
    }
  );
}
const kk = "_root_4b64f_1", Nk = "_fields_4b64f_6", Sk = "_chip_4b64f_13", Ok = "_table_4b64f_35", $k = "_totalRow_4b64f_55", Ek = "_total_4b64f_55", mr = {
  root: kk,
  fields: Nk,
  chip: Sk,
  table: Ok,
  totalRow: $k,
  total: Ek
}, os = {
  Sum: (e) => e.reduce((t, n) => t + n, 0),
  Average: (e) => e.length ? e.reduce((t, n) => t + n, 0) / e.length : 0,
  Count: (e) => e.length,
  Min: (e) => Math.min(...e),
  Max: (e) => Math.max(...e)
};
function Rr(e) {
  return Number.isInteger(e) ? String(e) : e.toFixed(2);
}
function tO({
  data: e,
  rowFields: t = [],
  columnFields: n = [],
  aggregateFields: r = [],
  onFieldsChange: l,
  ariaLabel: i = "Pivot table",
  className: d
}) {
  const o = t, a = n, c = r, f = (b, p, _) => {
    const y = b === "row" ? o.filter(($) => $.property !== p) : o, N = b === "col" ? a.filter(($) => $.property !== p) : a, v = b === "agg" ? c.filter(($) => !($.property === p && $.aggregate === _)) : c;
    l?.({
      rowFields: y,
      columnFields: N,
      aggregateFields: v
    });
  }, u = (b, p) => p.map((_) => String(b[_.property])).join(""), x = [
    ...new Set(o.length ? e.map((b) => u(b, o)) : [""])
  ].sort(), h = [
    ...new Set(a.length ? e.map((b) => u(b, a)) : [""])
  ].sort(), g = (b, p, _) => {
    const y = e.filter(
      (v) => u(v, o) === b && u(v, a) === p
    ), N = y.map((v) => Number(v[_.property])).filter((v) => !Number.isNaN(v));
    return !N.length && _.aggregate !== "Count" ? 0 : os[_.aggregate](
      _.aggregate === "Count" ? y.map(() => 1) : N
    );
  }, m = (b, p, _, y) => /* @__PURE__ */ M(
    "button",
    {
      type: "button",
      className: mr.chip,
      "aria-label": `Remove ${b} field ${_}`,
      onClick: () => f(b, p, y),
      children: [
        _,
        y ? ` (${y})` : ""
      ]
    },
    `${b}-${_}-${y ?? ""}`
  );
  return /* @__PURE__ */ M("div", { className: [mr.root, d].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ M("div", { className: mr.fields, children: [
      o.map((b) => m("row", b.property, b.title ?? b.property)),
      a.map((b) => m("col", b.property, b.title ?? b.property)),
      c.map(
        (b) => m("agg", b.property, b.title ?? b.property, b.aggregate)
      )
    ] }),
    /* @__PURE__ */ M("table", { className: mr.table, role: "grid", "aria-label": i, children: [
      /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ M("tr", { children: [
        /* @__PURE__ */ s("th", { scope: "col", children: o.map((b) => b.title ?? b.property).join(" / ") || "Total" }),
        h.map((b) => /* @__PURE__ */ s("th", { scope: "col", children: b || "—" }, b)),
        /* @__PURE__ */ s("th", { scope: "col", children: "Total" })
      ] }) }),
      /* @__PURE__ */ M("tbody", { children: [
        x.map((b) => /* @__PURE__ */ M("tr", { children: [
          /* @__PURE__ */ s("th", { scope: "row", children: b || "—" }),
          h.map((p) => /* @__PURE__ */ s(
            "td",
            {
              title: Rr(
                g(
                  b,
                  p,
                  c[0] ?? { property: "", aggregate: "Count" }
                )
              ),
              children: c.length ? Rr(g(b, p, c[0])) : ""
            },
            p
          )),
          /* @__PURE__ */ s("td", { className: mr.total, children: c.length ? Rr(
            os[c[0].aggregate](
              h.flatMap(
                (p) => e.filter(
                  (_) => u(_, o) === b && u(_, a) === p
                ).map((_) => Number(_[c[0].property]))
              ).filter((p) => !Number.isNaN(p))
            )
          ) : "" })
        ] }, b)),
        /* @__PURE__ */ M("tr", { className: mr.totalRow, children: [
          /* @__PURE__ */ s("th", { scope: "row", children: "Total" }),
          h.map((b) => /* @__PURE__ */ s("td", { children: c.length ? Rr(
            os[c[0].aggregate](
              e.filter((p) => u(p, a) === b).map((p) => Number(p[c[0].property])).filter((p) => !Number.isNaN(p))
            )
          ) : "" }, b)),
          /* @__PURE__ */ s("td", { children: c.length ? Rr(
            os[c[0].aggregate](
              e.map((b) => Number(b[c[0].property])).filter((b) => !Number.isNaN(b))
            )
          ) : "" })
        ] })
      ] })
    ] })
  ] });
}
const Tk = "_root_1r7co_1", Ck = "_reverse_1r7co_10", Ak = "_item_1r7co_14", Dk = "_marker_1r7co_35", Mk = "_body_1r7co_46", Ik = "_label_1r7co_50", zk = "_content_1r7co_56", tr = {
  root: Tk,
  reverse: Ck,
  item: Ak,
  marker: Dk,
  body: Mk,
  label: Ik,
  content: zk
};
function nO({
  items: e,
  reverse: t = !1,
  ariaLabel: n = "Timeline",
  className: r
}) {
  const l = t ? [...e].reverse() : e;
  return /* @__PURE__ */ s(
    "ol",
    {
      className: [tr.root, t ? tr.reverse : "", r].filter(Boolean).join(" "),
      role: "list",
      "aria-label": n,
      children: l.map((i, d) => /* @__PURE__ */ M("li", { className: tr.item, children: [
        /* @__PURE__ */ s("span", { className: tr.marker, "aria-hidden": "true" }),
        /* @__PURE__ */ M("div", { className: tr.body, children: [
          /* @__PURE__ */ s("div", { className: tr.label, children: i.label }),
          i.content !== void 0 && /* @__PURE__ */ s("div", { className: tr.content, children: i.content })
        ] })
      ] }, d))
    }
  );
}
const Lk = "_root_rm4d8_1", Rk = "_header_rm4d8_13", Pk = "_headCell_rm4d8_22", jk = "_row_rm4d8_32", Bk = "_cell_rm4d8_37", Pr = {
  root: Lk,
  header: Rk,
  headCell: Pk,
  row: jk,
  cell: Bk
};
function rO({
  count: e,
  rowHeight: t = 40,
  height: n = 320,
  loadData: r,
  columns: l = [],
  ariaLabel: i = "Virtual grid",
  className: d
}) {
  const [o, a] = q(
    /* @__PURE__ */ new Map()
  ), [c, f] = q(0), u = oe(/* @__PURE__ */ new Set()), x = Math.ceil(n / t), h = Math.max(0, Math.floor(c / t) - 3), g = Math.min(e, h + x + 6), m = B(
    (p, _) => {
      let y = !1;
      for (let N = p; N < _; N++)
        !o.has(N) && !u.current.has(N) && (y = !0);
      if (y) {
        for (let N = p; N < _; N++) u.current.add(N);
        r({ skip: p, top: _ }).then((N) => {
          a((v) => {
            const $ = new Map(v);
            return N.forEach((S, T) => $.set(p + T, S)), $;
          });
          for (let v = p; v < _; v++) u.current.delete(v);
        });
      }
    },
    [o, r]
  );
  ve(() => {
    m(h, g);
  }, [h, g]);
  const b = [];
  for (let p = h; p < g; p++) {
    const _ = o.get(p) ?? {};
    b.push(
      /* @__PURE__ */ s(
        "div",
        {
          className: Pr.row,
          role: "row",
          style: { height: t },
          children: l.map((y) => /* @__PURE__ */ s(
            "div",
            {
              role: "gridcell",
              className: Pr.cell,
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
      className: [Pr.root, d].filter(Boolean).join(" "),
      role: "grid",
      "aria-label": i,
      "aria-rowcount": e,
      tabIndex: 0,
      style: { height: n },
      onScroll: (p) => f(p.target.scrollTop),
      onKeyDown: (p) => {
        const _ = p.currentTarget;
        p.key === "ArrowDown" ? (p.preventDefault(), _.scrollTop += t) : p.key === "ArrowUp" ? (p.preventDefault(), _.scrollTop -= t) : p.key === "PageDown" ? (p.preventDefault(), _.scrollTop += n) : p.key === "PageUp" && (p.preventDefault(), _.scrollTop -= n);
      },
      children: [
        /* @__PURE__ */ s("div", { style: { height: h * t }, "aria-hidden": "true" }),
        /* @__PURE__ */ s("div", { className: Pr.header, role: "row", children: l.map((p) => /* @__PURE__ */ s(
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
        b,
        /* @__PURE__ */ s(
          "div",
          {
            style: { height: Math.max(0, (e - g) * t) },
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
    constructor(o, a, c, f) {
      if (this.version = o, this.errorCorrectionLevel = a, o < t.MIN_VERSION || o > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (f < -1 || f > 7) throw new RangeError("Mask value out of range");
      this.size = o * 4 + 17;
      let u = [];
      for (let h = 0; h < this.size; h++) u.push(!1);
      for (let h = 0; h < this.size; h++)
        this.modules.push(u.slice()), this.isFunction.push(u.slice());
      this.drawFunctionPatterns();
      const x = this.addEccAndInterleave(c);
      if (this.drawCodewords(x), f == -1) {
        let h = 1e9;
        for (let g = 0; g < 8; g++) {
          this.applyMask(g), this.drawFormatBits(g);
          const m = this.getPenaltyScore();
          m < h && (f = g, h = m), this.applyMask(g);
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
    static encodeText(o, a) {
      const c = e.QrSegment.makeSegments(o);
      return t.encodeSegments(c, a);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(o, a) {
      const c = e.QrSegment.makeBytes(o);
      return t.encodeSegments([c], a);
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
    static encodeSegments(o, a, c = 1, f = 40, u = -1, x = !0) {
      if (!(t.MIN_VERSION <= c && c <= f && f <= t.MAX_VERSION) || u < -1 || u > 7)
        throw new RangeError("Invalid value");
      let h, g;
      for (h = c; ; h++) {
        const _ = t.getNumDataCodewords(h, a) * 8, y = i.getTotalBits(o, h);
        if (y <= _) {
          g = y;
          break;
        }
        if (h >= f)
          throw new RangeError("Data too long");
      }
      for (const _ of [
        t.Ecc.MEDIUM,
        t.Ecc.QUARTILE,
        t.Ecc.HIGH
      ])
        x && g <= t.getNumDataCodewords(h, _) * 8 && (a = _);
      let m = [];
      for (const _ of o) {
        n(_.mode.modeBits, 4, m), n(_.numChars, _.mode.numCharCountBits(h), m);
        for (const y of _.getData()) m.push(y);
      }
      l(m.length == g);
      const b = t.getNumDataCodewords(h, a) * 8;
      l(m.length <= b), n(0, Math.min(4, b - m.length), m), n(0, (8 - m.length % 8) % 8, m), l(m.length % 8 == 0);
      for (let _ = 236; m.length < b; _ ^= 253)
        n(_, 8, m);
      let p = [];
      for (; p.length * 8 < m.length; ) p.push(0);
      return m.forEach(
        (_, y) => p[y >>> 3] |= _ << 7 - (y & 7)
      ), new t(h, a, p, u);
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
    getModule(o, a) {
      return 0 <= o && o < this.size && 0 <= a && a < this.size && this.modules[a][o];
    }
    /*-- Private helper methods for constructor: Drawing function modules --*/
    // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
      for (let c = 0; c < this.size; c++)
        this.setFunctionModule(6, c, c % 2 == 0), this.setFunctionModule(c, 6, c % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const o = this.getAlignmentPatternPositions(), a = o.length;
      for (let c = 0; c < a; c++)
        for (let f = 0; f < a; f++)
          c == 0 && f == 0 || c == 0 && f == a - 1 || c == a - 1 && f == 0 || this.drawAlignmentPattern(o[c], o[f]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(o) {
      const a = this.errorCorrectionLevel.formatBits << 3 | o;
      let c = a;
      for (let u = 0; u < 10; u++) c = c << 1 ^ (c >>> 9) * 1335;
      const f = (a << 10 | c) ^ 21522;
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
      let o = this.version;
      for (let c = 0; c < 12; c++) o = o << 1 ^ (o >>> 11) * 7973;
      const a = this.version << 12 | o;
      l(a >>> 18 == 0);
      for (let c = 0; c < 18; c++) {
        const f = r(a, c), u = this.size - 11 + c % 3, x = Math.floor(c / 3);
        this.setFunctionModule(u, x, f), this.setFunctionModule(x, u, f);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(o, a) {
      for (let c = -4; c <= 4; c++)
        for (let f = -4; f <= 4; f++) {
          const u = Math.max(Math.abs(f), Math.abs(c)), x = o + f, h = a + c;
          0 <= x && x < this.size && 0 <= h && h < this.size && this.setFunctionModule(x, h, u != 2 && u != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(o, a) {
      for (let c = -2; c <= 2; c++)
        for (let f = -2; f <= 2; f++)
          this.setFunctionModule(
            o + f,
            a + c,
            Math.max(Math.abs(f), Math.abs(c)) != 1
          );
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(o, a, c) {
      this.modules[a][o] = c, this.isFunction[a][o] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(o) {
      const a = this.version, c = this.errorCorrectionLevel;
      if (o.length != t.getNumDataCodewords(a, c))
        throw new RangeError("Invalid argument");
      const f = t.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][a], u = t.ECC_CODEWORDS_PER_BLOCK[c.ordinal][a], x = Math.floor(
        t.getNumRawDataModules(a) / 8
      ), h = f - x % f, g = Math.floor(x / f);
      let m = [];
      const b = t.reedSolomonComputeDivisor(u);
      for (let _ = 0, y = 0; _ < f; _++) {
        let N = o.slice(
          y,
          y + g - u + (_ < h ? 0 : 1)
        );
        y += N.length;
        const v = t.reedSolomonComputeRemainder(N, b);
        _ < h && N.push(0), m.push(N.concat(v));
      }
      let p = [];
      for (let _ = 0; _ < m[0].length; _++)
        m.forEach((y, N) => {
          (_ != g - u || N >= h) && p.push(y[_]);
        });
      return l(p.length == x), p;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(o) {
      if (o.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let a = 0;
      for (let c = this.size - 1; c >= 1; c -= 2) {
        c == 6 && (c = 5);
        for (let f = 0; f < this.size; f++)
          for (let u = 0; u < 2; u++) {
            const x = c - u, g = (c + 1 & 2) == 0 ? this.size - 1 - f : f;
            !this.isFunction[g][x] && a < o.length * 8 && (this.modules[g][x] = r(o[a >>> 3], 7 - (a & 7)), a++);
          }
      }
      l(a == o.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(o) {
      if (o < 0 || o > 7) throw new RangeError("Mask value out of range");
      for (let a = 0; a < this.size; a++)
        for (let c = 0; c < this.size; c++) {
          let f;
          switch (o) {
            case 0:
              f = (c + a) % 2 == 0;
              break;
            case 1:
              f = a % 2 == 0;
              break;
            case 2:
              f = c % 3 == 0;
              break;
            case 3:
              f = (c + a) % 3 == 0;
              break;
            case 4:
              f = (Math.floor(c / 3) + Math.floor(a / 2)) % 2 == 0;
              break;
            case 5:
              f = c * a % 2 + c * a % 3 == 0;
              break;
            case 6:
              f = (c * a % 2 + c * a % 3) % 2 == 0;
              break;
            case 7:
              f = ((c + a) % 2 + c * a % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[a][c] && f && (this.modules[a][c] = !this.modules[a][c]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let o = 0;
      for (let u = 0; u < this.size; u++) {
        let x = !1, h = 0, g = [0, 0, 0, 0, 0, 0, 0];
        for (let m = 0; m < this.size; m++)
          this.modules[u][m] == x ? (h++, h == 5 ? o += t.PENALTY_N1 : h > 5 && o++) : (this.finderPenaltyAddHistory(h, g), x || (o += this.finderPenaltyCountPatterns(g) * t.PENALTY_N3), x = this.modules[u][m], h = 1);
        o += this.finderPenaltyTerminateAndCount(x, h, g) * t.PENALTY_N3;
      }
      for (let u = 0; u < this.size; u++) {
        let x = !1, h = 0, g = [0, 0, 0, 0, 0, 0, 0];
        for (let m = 0; m < this.size; m++)
          this.modules[m][u] == x ? (h++, h == 5 ? o += t.PENALTY_N1 : h > 5 && o++) : (this.finderPenaltyAddHistory(h, g), x || (o += this.finderPenaltyCountPatterns(g) * t.PENALTY_N3), x = this.modules[m][u], h = 1);
        o += this.finderPenaltyTerminateAndCount(x, h, g) * t.PENALTY_N3;
      }
      for (let u = 0; u < this.size - 1; u++)
        for (let x = 0; x < this.size - 1; x++) {
          const h = this.modules[u][x];
          h == this.modules[u][x + 1] && h == this.modules[u + 1][x] && h == this.modules[u + 1][x + 1] && (o += t.PENALTY_N2);
        }
      let a = 0;
      for (const u of this.modules)
        a = u.reduce((x, h) => x + (h ? 1 : 0), a);
      const c = this.size * this.size, f = Math.ceil(Math.abs(a * 20 - c * 10) / c) - 1;
      return l(0 <= f && f <= 9), o += f * t.PENALTY_N4, l(0 <= o && o <= 2568888), o;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1) return [];
      {
        const o = Math.floor(this.version / 7) + 2, a = Math.floor(
          (this.version * 8 + o * 3 + 5) / (o * 4 - 4)
        ) * 2;
        let c = [6];
        for (let f = this.size - 7; c.length < o; f -= a)
          c.splice(1, 0, f);
        return c;
      }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(o) {
      if (o < t.MIN_VERSION || o > t.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let a = (16 * o + 128) * o + 64;
      if (o >= 2) {
        const c = Math.floor(o / 7) + 2;
        a -= (25 * c - 10) * c - 55, o >= 7 && (a -= 36);
      }
      return l(208 <= a && a <= 29648), a;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(o, a) {
      return Math.floor(t.getNumRawDataModules(o) / 8) - t.ECC_CODEWORDS_PER_BLOCK[a.ordinal][o] * t.NUM_ERROR_CORRECTION_BLOCKS[a.ordinal][o];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(o) {
      if (o < 1 || o > 255)
        throw new RangeError("Degree out of range");
      let a = [];
      for (let f = 0; f < o - 1; f++) a.push(0);
      a.push(1);
      let c = 1;
      for (let f = 0; f < o; f++) {
        for (let u = 0; u < a.length; u++)
          a[u] = t.reedSolomonMultiply(a[u], c), u + 1 < a.length && (a[u] ^= a[u + 1]);
        c = t.reedSolomonMultiply(c, 2);
      }
      return a;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(o, a) {
      let c = a.map((f) => 0);
      for (const f of o) {
        const u = f ^ c.shift();
        c.push(0), a.forEach(
          (x, h) => c[h] ^= t.reedSolomonMultiply(x, u)
        );
      }
      return c;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(o, a) {
      if (o >>> 8 || a >>> 8)
        throw new RangeError("Byte out of range");
      let c = 0;
      for (let f = 7; f >= 0; f--)
        c = c << 1 ^ (c >>> 7) * 285, c ^= (a >>> f & 1) * o;
      return l(c >>> 8 == 0), c;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(o) {
      const a = o[1];
      l(a <= this.size * 3);
      const c = a > 0 && o[2] == a && o[3] == a * 3 && o[4] == a && o[5] == a;
      return (c && o[0] >= a * 4 && o[6] >= a ? 1 : 0) + (c && o[6] >= a * 4 && o[0] >= a ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(o, a, c) {
      return o && (this.finderPenaltyAddHistory(a, c), a = 0), a += this.size, this.finderPenaltyAddHistory(a, c), this.finderPenaltyCountPatterns(c);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(o, a) {
      a[0] == 0 && (o += this.size), a.pop(), a.unshift(o);
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
  function n(d, o, a) {
    if (o < 0 || o > 31 || d >>> o)
      throw new RangeError("Value out of range");
    for (let c = o - 1; c >= 0; c--)
      a.push(d >>> c & 1);
  }
  function r(d, o) {
    return (d >>> o & 1) != 0;
  }
  function l(d) {
    if (!d) throw new Error("Assertion error");
  }
  class i {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(o, a, c) {
      if (this.mode = o, this.numChars = a, this.bitData = c, a < 0) throw new RangeError("Invalid argument");
      this.bitData = c.slice();
    }
    mode;
    numChars;
    bitData;
    /*-- Static factory functions (mid level) --*/
    // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(o) {
      let a = [];
      for (const c of o) n(c, 8, a);
      return new i(i.Mode.BYTE, o.length, a);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(o) {
      if (!i.isNumeric(o))
        throw new RangeError("String contains non-numeric characters");
      let a = [];
      for (let c = 0; c < o.length; ) {
        const f = Math.min(o.length - c, 3);
        n(parseInt(o.substring(c, c + f), 10), f * 3 + 1, a), c += f;
      }
      return new i(i.Mode.NUMERIC, o.length, a);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(o) {
      if (!i.isAlphanumeric(o))
        throw new RangeError(
          "String contains unencodable characters in alphanumeric mode"
        );
      let a = [], c;
      for (c = 0; c + 2 <= o.length; c += 2) {
        let f = i.ALPHANUMERIC_CHARSET.indexOf(o.charAt(c)) * 45;
        f += i.ALPHANUMERIC_CHARSET.indexOf(o.charAt(c + 1)), n(f, 11, a);
      }
      return c < o.length && n(
        i.ALPHANUMERIC_CHARSET.indexOf(o.charAt(c)),
        6,
        a
      ), new i(i.Mode.ALPHANUMERIC, o.length, a);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(o) {
      return o == "" ? [] : i.isNumeric(o) ? [i.makeNumeric(o)] : i.isAlphanumeric(o) ? [i.makeAlphanumeric(o)] : [i.makeBytes(i.toUtf8ByteArray(o))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(o) {
      let a = [];
      if (o < 0)
        throw new RangeError("ECI assignment value out of range");
      if (o < 128) n(o, 8, a);
      else if (o < 16384)
        n(2, 2, a), n(o, 14, a);
      else if (o < 1e6)
        n(6, 3, a), n(o, 21, a);
      else throw new RangeError("ECI assignment value out of range");
      return new i(i.Mode.ECI, 0, a);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(o) {
      return i.NUMERIC_REGEX.test(o);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(o) {
      return i.ALPHANUMERIC_REGEX.test(o);
    }
    /*-- Methods --*/
    // Returns a new copy of the data bits of this segment.
    getData() {
      return this.bitData.slice();
    }
    // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
    // the given version. The result is infinity if a segment has too many characters to fit its length field.
    static getTotalBits(o, a) {
      let c = 0;
      for (const f of o) {
        const u = f.mode.numCharCountBits(a);
        if (f.numChars >= 1 << u) return 1 / 0;
        c += 4 + u + f.bitData.length;
      }
      return c;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(o) {
      o = encodeURI(o);
      let a = [];
      for (let c = 0; c < o.length; c++)
        o.charAt(c) != "%" ? a.push(o.charCodeAt(c)) : (a.push(parseInt(o.substring(c + 1, c + 3), 16)), c += 2);
      return a;
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
  e.QrSegment = i;
})(vn || (vn = {}));
((e) => {
  ((t) => {
    class n {
      // The QR Code can tolerate about 30% erroneous codewords
      /*-- Constructor and fields --*/
      constructor(l, i) {
        this.ordinal = l, this.formatBits = i;
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
      constructor(l, i) {
        this.modeBits = l, this.numBitsCharCount = i;
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
const Fk = "_root_1leml_1", Hk = {
  root: Fk
}, Uk = {
  low: vn.QrCode.Ecc.LOW,
  medium: vn.QrCode.Ecc.MEDIUM,
  quartile: vn.QrCode.Ecc.QUARTILE,
  high: vn.QrCode.Ecc.HIGH
};
function sO({
  value: e,
  size: t = 128,
  render: n = "svg",
  errorCorrection: r = "medium",
  margin: l = 4,
  ariaLabel: i,
  className: d,
  onError: o
}) {
  const a = i ?? `QR code for ${e}`, c = oe(null), f = Vs("(prefers-color-scheme: dark)"), [u, x] = q(null);
  ve(() => {
    const N = document.documentElement;
    x(N.dataset.theme ?? null);
    const v = new MutationObserver(() => {
      x(N.dataset.theme ?? null);
    });
    return v.observe(N, {
      attributes: !0,
      attributeFilter: ["data-theme"]
    }), () => v.disconnect();
  }, []);
  const h = Oe(() => {
    try {
      return vn.QrCode.encodeText(e, Uk[r]);
    } catch {
      return null;
    }
  }, [e, r]), g = oe(null);
  ve(() => {
    if (h !== null) {
      g.current = null;
      return;
    }
    const N = `[QRCode] value too long to encode (${e.length} chars)`;
    typeof process < "u" && process.env?.NODE_ENV !== "production" && console.error(N), (g.current?.value !== e || g.current?.onError !== o) && (g.current = { value: e, onError: o }, o?.(N));
  }, [h, e, o]);
  const m = Math.max(0, Math.floor(l)), b = [Hk.root, d].filter(Boolean).join(" ");
  if (ve(() => {
    if (n !== "canvas" || h === null) return;
    const N = c.current, v = N?.getContext("2d");
    if (!N || !v) return;
    const $ = getComputedStyle(N), S = $.getPropertyValue("--dx-text-color").trim() || "#000", T = $.getPropertyValue("--dx-surface-color").trim() || "#fff";
    qk(v, h, t, m, S, T);
  }, [n, h, t, m, f, u]), h === null)
    return /* @__PURE__ */ s("div", { className: b, role: "img", "aria-label": a, "data-qr-error": "true" });
  const p = h.size + m * 2, _ = t / p;
  if (n === "canvas")
    return /* @__PURE__ */ s(
      "canvas",
      {
        ref: c,
        className: b,
        width: t,
        height: t,
        role: "img",
        "aria-label": a,
        "data-value": e
      }
    );
  const y = [];
  for (let N = 0; N < h.size; N++)
    for (let v = 0; v < h.size; v++)
      h.getModule(v, N) && y.push(
        /* @__PURE__ */ s(
          "rect",
          {
            x: (v + m) * _,
            y: (N + m) * _,
            width: _ + 0.5,
            height: _ + 0.5
          },
          `${v}-${N}`
        )
      );
  return /* @__PURE__ */ M(
    "svg",
    {
      className: b,
      width: t,
      height: t,
      viewBox: `0 0 ${t} ${t}`,
      role: "img",
      "aria-label": a,
      "data-value": e,
      children: [
        /* @__PURE__ */ s("rect", { width: t, height: t, fill: "var(--dx-surface-color)" }),
        /* @__PURE__ */ s("g", { fill: "var(--dx-text-color)", children: y })
      ]
    }
  );
}
function qk(e, t, n, r, l, i) {
  const d = n / (t.size + r * 2);
  e.fillStyle = i, e.fillRect(0, 0, n, n), e.fillStyle = l;
  for (let o = 0; o < t.size; o++)
    for (let a = 0; a < t.size; a++)
      t.getModule(a, o) && e.fillRect((a + r) * d, (o + r) * d, d + 0.5, d + 0.5);
}
const Kk = "_root_1v9la_1", Wk = "_value_1v9la_9", Qo = {
  root: Kk,
  value: Wk
}, el = [
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
], tl = 104, Gk = 106;
function Vk(e) {
  const t = [tl];
  for (let r = 0; r < e.length; r++) {
    const l = e.charCodeAt(r);
    t.push(l >= 32 && l <= 126 ? l - 32 : 0);
  }
  let n = tl;
  for (let r = 1; r < t.length; r++) n += r * t[r];
  return t.push(n % 103, Gk), t;
}
function oO({
  value: e,
  format: t = "Code128",
  height: n = 60,
  showValue: r = !1,
  ariaLabel: l,
  className: i
}) {
  const d = l ?? `Barcode ${e}`, o = Oe(() => {
    const a = [];
    let c = 0;
    for (const f of Vk(e)) {
      const u = el[f] ?? el[0];
      for (let x = 0; x < u.length; x++) {
        const h = Number(u[x]);
        x % 2 === 0 && a.push({ x: c, w: h }), c += h;
      }
    }
    return { modules: a, total: c };
  }, [e]);
  return /* @__PURE__ */ M("span", { className: [Qo.root, i].filter(Boolean).join(" "), children: [
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
          o.modules.map((a, c) => /* @__PURE__ */ s(
            "rect",
            {
              x: a.x,
              y: 0,
              width: a.w,
              height: n,
              fill: "var(--dx-text-color)"
            },
            c
          ))
        ]
      }
    ),
    r && /* @__PURE__ */ s("span", { className: Qo.value, children: e })
  ] });
}
const Yk = "_root_16i43_1", Xk = "_svg_16i43_10", Zk = "_gridline_16i43_15", Jk = "_tickLabel_16i43_21", Qk = "_axisTitle_16i43_27", eN = "_dataLabel_16i43_34", tN = "_gaugeValue_16i43_40", nN = "_legend_16i43_47", rN = "_legendItem_16i43_55", sN = "_swatch_16i43_63", oN = "_tooltip_16i43_70", lN = "_visuallyHidden_16i43_84", ft = {
  root: Yk,
  svg: Xk,
  gridline: Zk,
  tickLabel: Jk,
  axisTitle: Qk,
  dataLabel: eN,
  gaugeValue: tN,
  legend: nN,
  legendItem: rN,
  swatch: sN,
  tooltip: oN,
  visuallyHidden: lN
}, nl = [
  "var(--dx-palette-0-color)",
  "var(--dx-palette-1-color)",
  "var(--dx-palette-2-color)",
  "var(--dx-palette-3-color)",
  "var(--dx-palette-4-color)",
  "var(--dx-palette-5-color)"
], Cl = /* @__PURE__ */ new Set([
  "line",
  "area",
  "bar",
  "column",
  "scatter",
  "bubble"
]), aN = /* @__PURE__ */ new Set([...Cl, "heatmap"]);
function iN(e, t, n) {
  const r = t - e || 1, l = n ?? Math.pow(10, Math.floor(Math.log10(r / 4))), i = Math.floor(e / l) * l, d = Math.ceil(t / l) * l, o = [];
  for (let a = i; a <= d + 1e-9; a += l)
    o.push(Number(a.toFixed(6)));
  return { min: i, max: d, step: l, ticks: o };
}
function cN(e) {
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
        /* @__PURE__ */ s("title", { children: t.title ?? `Series ${e + 1}` }),
        n
      ]
    },
    e
  );
}
const Ut = (e) => e * Math.PI / 180;
function dN(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: o } = e, a = i.l + d / 2, c = i.t + o / 2, f = Math.min(d, o) / 3, u = t.type === "donut" ? t.innerRadius ?? f * 0.5 : 0, x = r.reduce((g, m) => g + (Number(m.val) || 0), 0);
  let h = -90;
  return Vn(
    n,
    t,
    r.map((g, m) => {
      const b = x ? g.val / x * 360 : 0, p = h, _ = h + b;
      h = _;
      const y = b > 180 ? 1 : 0, N = a + f * Math.cos(Ut(p)), v = c + f * Math.sin(Ut(p)), $ = a + f * Math.cos(Ut(_)), S = c + f * Math.sin(Ut(_)), T = a + u * Math.cos(Ut(_)), A = c + u * Math.sin(Ut(_)), C = a + u * Math.cos(Ut(p)), D = c + u * Math.sin(Ut(p)), I = u ? `M ${N} ${v} A ${f} ${f} 0 ${y} 1 ${$} ${S} L ${T} ${A} A ${u} ${u} 0 ${y} 0 ${C} ${D} Z` : `M ${a} ${c} L ${N} ${v} A ${f} ${f} 0 ${y} 1 ${$} ${S} Z`, k = (p + _) / 2, O = a + (f + 12) * Math.cos(Ut(k)), E = c + (f + 12) * Math.sin(Ut(k));
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ s(
          "path",
          {
            d: I,
            fill: l,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => e.tooltipVisible && e.showTip(O, E, `${t.title ?? g.cat}: ${g.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, g.cat, g.val, g.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ s(
          "text",
          {
            x: O,
            y: E,
            textAnchor: "middle",
            className: ft.dataLabel,
            children: g.val
          }
        )
      ] }, m);
    })
  );
}
function uN(e, t, n, r, l) {
  const { pad: i, plotW: d, scale: o, xFor: a, yFor: c, categories: f } = e, u = new Map(f.map((x, h) => [x, h]));
  return Vn(
    n,
    t,
    r.map((x, h) => {
      const g = u.get(x.cat) ?? 0, m = Number(r[h].cat), b = Number.isNaN(m) ? a(g) : i.l + (m - o.min) / (o.max - o.min || 1) * d, p = c(x.val), _ = t.type === "bubble" && x.size !== void 0 ? Math.max(4, Math.min(12, x.size / 10)) : 4;
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ s(
          "circle",
          {
            cx: b,
            cy: p,
            r: _,
            fill: l,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ s(
          "circle",
          {
            cx: b,
            cy: p,
            r: 12,
            fill: "transparent",
            onMouseEnter: () => e.tooltipVisible && e.showTip(b, p, `${t.title ?? x.cat}: ${x.val}`),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, x.cat, x.val, x.item),
            style: { cursor: "pointer" }
          }
        )
      ] }, h);
    })
  );
}
function fN(e, t, n, r, l) {
  const { scale: i, xFor: d, yFor: o, categories: a, series: c } = e, f = new Map(a.map((g, m) => [g, m])), u = (g) => {
    if (!t.stack) return i.min;
    let m = 0;
    for (let b = 0; b < n; b++) {
      const p = c[b];
      if (p?.stack !== t.stack) continue;
      const _ = p.data.find(
        (y) => String(y[p.categoryProperty] ?? "") === g
      );
      _ && (m += Number(_[p.valueProperty]) || 0);
    }
    return m;
  }, x = r.map((g) => {
    const m = f.get(g.cat) ?? 0, b = u(g.cat);
    return `${m === 0 ? "M" : "L"} ${d(m)} ${o(b + g.val)}`;
  }).join(" "), h = r.map((g) => {
    const m = f.get(g.cat) ?? 0, b = u(g.cat);
    return `${m === 0 ? "M" : "L"} ${d(m)} ${o(b)}`;
  }).join(" ");
  return Vn(
    n,
    t,
    /* @__PURE__ */ M(pt, { children: [
      t.type === "area" && /* @__PURE__ */ s(
        "path",
        {
          d: `${x} L ${d(r.length - 1)} ${o(u(r[r.length - 1].cat))} L ${d(0)} ${o(u(r[0].cat))} Z`,
          fill: l,
          fillOpacity: 0.25,
          stroke: "none"
        }
      ),
      /* @__PURE__ */ s("path", { d: x, fill: "none", stroke: l, strokeWidth: 2 }),
      t.stack && /* @__PURE__ */ s("path", { d: h, fill: "none", stroke: "transparent" }),
      r.map((g, m) => {
        const b = f.get(g.cat) ?? 0, p = u(g.cat), _ = d(b), y = o(p + g.val);
        return /* @__PURE__ */ M("g", { role: "listitem", children: [
          /* @__PURE__ */ s(
            "circle",
            {
              cx: _,
              cy: y,
              r: 4,
              fill: l,
              stroke: "var(--dx-surface-color)",
              strokeWidth: 1.5
            }
          ),
          /* @__PURE__ */ s(
            "rect",
            {
              x: _ - 12,
              y: y - 12,
              width: 24,
              height: 24,
              fill: "transparent",
              onMouseEnter: () => e.tooltipVisible && e.showTip(_, y, `${t.title ?? g.cat}: ${g.val}`),
              onMouseLeave: () => e.hideTip(),
              onClick: () => e.handleClick(t, g.cat, g.val, g.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ s(
            "text",
            {
              x: _,
              y: y - 8,
              textAnchor: "middle",
              className: ft.dataLabel,
              children: g.val
            }
          )
        ] }, m);
      })
    ] })
  );
}
function _N(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: o, scale: a, xFor: c, yFor: f, categories: u, series: x } = e, h = new Map(u.map((m, b) => [m, b])), g = t.type === "bar";
  return Vn(
    n,
    t,
    r.map((m, b) => {
      const p = h.get(m.cat) ?? 0;
      let _ = 0;
      if (t.stack)
        for (let k = 0; k < n; k++) {
          const O = x[k];
          if (O?.stack !== t.stack) continue;
          const E = O.data.find(
            (P) => String(P[O.categoryProperty] ?? "") === m.cat
          );
          E && (_ += Number(E[O.valueProperty]) || 0);
        }
      const y = _ + m.val, N = x.filter(
        (k) => !k.stack || k.stack === t.stack
      ).length, v = d / Math.max(1, u.length), $ = g ? 18 : Math.max(12, v / (t.stack ? 1 : x.length) - 4), S = g ? i.l + _ / (a.max - a.min || 1) * d : c(p) - $ / 2 + (t.stack ? 0 : n % N * $), T = g ? i.t + p * o / Math.max(1, u.length) + 4 : f(y), A = g ? m.val / (a.max - a.min || 1) * d : $ - 4, C = g ? 16 : f(_) - f(y), D = g ? i.l + _ / (a.max - a.min || 1) * d : S, I = g ? i.t + p * o / Math.max(1, u.length) + 4 : T;
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ s(
          "rect",
          {
            x: D,
            y: I,
            width: g ? A : $ - 4,
            height: C,
            fill: l,
            rx: 2,
            onMouseEnter: () => e.tooltipVisible && e.showTip(
              D + (g ? A : $) / 2,
              I,
              `${t.title ?? m.cat}: ${m.val}`
            ),
            onMouseLeave: () => e.hideTip(),
            onClick: () => e.handleClick(t, m.cat, m.val, m.item),
            style: { cursor: "pointer" }
          }
        ),
        t.labels?.visible && /* @__PURE__ */ s(
          "text",
          {
            x: D + (g ? A : $) / 2,
            y: I - 4,
            textAnchor: "middle",
            className: ft.dataLabel,
            children: m.val
          }
        )
      ] }, b);
    })
  );
}
function pN(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: o, scale: a, tooltipVisible: c, showTip: f, hideTip: u } = e, x = i.l + d / 2, h = i.t + o * 0.78, g = Math.min(d, o) * 0.36, m = 135, b = 270, p = r.reduce(($, S) => $ + (Number(S.val) || 0), 0), _ = a.max - a.min || 1, y = Math.min(1, Math.max(0, (p - a.min) / _)), N = ($, S) => {
    const [T, A] = [
      x + g * Math.cos(Ut($)),
      h + g * Math.sin(Ut($))
    ], [C, D] = [
      x + g * Math.cos(Ut(S)),
      h + g * Math.sin(Ut(S))
    ], I = S - $ > 180 ? 1 : 0;
    return `M ${T} ${A} A ${g} ${g} 0 ${I} 1 ${C} ${D}`;
  }, v = Number(p.toFixed(2));
  return Vn(
    n,
    t,
    // One listitem per series value (parity with the point renderers):
    // the series <g role="list"> requires owned listitem children or
    // aria-required-children fails.
    /* @__PURE__ */ M("g", { role: "listitem", children: [
      /* @__PURE__ */ s(
        "path",
        {
          d: N(m, m + b),
          fill: "none",
          stroke: "var(--dx-border-color)",
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      y > 0 && /* @__PURE__ */ s(
        "path",
        {
          d: N(m, m + b * y),
          fill: "none",
          stroke: l,
          strokeWidth: 14,
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ s("text", { x, y: h - 4, textAnchor: "middle", className: ft.gaugeValue, children: v }),
      /* @__PURE__ */ s(
        "path",
        {
          d: N(m, m + b),
          fill: "none",
          stroke: "transparent",
          strokeWidth: 22,
          onMouseEnter: () => c && f(x, h - g, `${t.title ?? "Value"}: ${v}`),
          onMouseLeave: () => u(),
          onClick: () => e.handleClick(t, r[0]?.cat ?? "", p, r[0]?.item ?? {}),
          style: { cursor: "pointer" }
        }
      ),
      t.labels?.visible && /* @__PURE__ */ s(
        "text",
        {
          x,
          y: h + g + 18,
          textAnchor: "middle",
          className: ft.dataLabel,
          children: t.title ?? ""
        }
      )
    ] })
  );
}
function Al(e) {
  const { pad: t, plotW: n, plotH: r, categories: l } = e, i = t.l + n / 2, d = t.t + r / 2, o = Math.min(n, r) / 2 - 24, a = Math.max(3, l.length), c = (u) => Ut(-90 + 360 * u / a);
  return { cx: i, cy: d, radius: o, angleFor: c, vertexFor: (u, x) => {
    const h = c(u);
    return [
      i + o * x * Math.cos(h),
      d + o * x * Math.sin(h)
    ];
  } };
}
function mN(e) {
  const { categories: t } = e, { cx: n, cy: r, vertexFor: l } = Al(e);
  return /* @__PURE__ */ M("g", { "data-chart-type": "radar-grid", "aria-hidden": "true", children: [
    [0.25, 0.5, 0.75, 1].map((d) => /* @__PURE__ */ s(
      "polygon",
      {
        points: t.map((o, a) => l(a, d).join(",")).join(" "),
        fill: "none",
        stroke: "var(--dx-border-color)",
        strokeWidth: 1
      },
      d
    )),
    t.map((d, o) => {
      const [a, c] = l(o, 1);
      return /* @__PURE__ */ s(
        "line",
        {
          x1: n,
          y1: r,
          x2: a,
          y2: c,
          stroke: "var(--dx-border-color)",
          strokeWidth: 1
        },
        d
      );
    })
  ] });
}
function hN(e, t, n, r, l) {
  const { categories: i, tooltipVisible: d, showTip: o, hideTip: a } = e, { cx: c, cy: f, radius: u, angleFor: x, vertexFor: h } = Al(e), g = e.scale.max || 1, m = (p) => r.find((_) => _.cat === p)?.val ?? 0, b = i.map((p, _) => {
    const y = Math.min(1, Math.max(0, m(p) / g)), [N, v] = h(_, y);
    return `${N},${v}`;
  }).join(" ");
  return Vn(
    n,
    t,
    /* @__PURE__ */ M(pt, { children: [
      /* @__PURE__ */ s(
        "polygon",
        {
          points: b,
          fill: l,
          fillOpacity: 0.25,
          stroke: l,
          strokeWidth: 2
        }
      ),
      i.map((p, _) => {
        const y = Math.min(1, Math.max(0, m(p) / g)), [N, v] = h(_, y), [$, S] = h(_, 1);
        return /* @__PURE__ */ M("g", { role: "listitem", children: [
          /* @__PURE__ */ s(
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
          /* @__PURE__ */ s(
            "circle",
            {
              cx: N,
              cy: v,
              r: 12,
              fill: "transparent",
              onMouseEnter: () => d && o($, S, `${t.title ?? p}: ${m(p)}`),
              onMouseLeave: () => a(),
              onClick: () => {
                const T = r.find((A) => A.cat === p);
                T && e.handleClick(t, T.cat, T.val, T.item);
              },
              style: { cursor: "pointer" }
            }
          ),
          /* @__PURE__ */ s(
            "text",
            {
              x: c + (u + 14) * Math.cos(x(_)),
              y: f + (u + 14) * Math.sin(x(_)) + 4,
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
function gN(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: o, tooltipVisible: a, showTip: c, hideTip: f } = e, u = r, x = Math.max(1, ...u.map((m) => Number(m.val) || 0)), h = o / Math.max(1, u.length), g = i.l + d / 2;
  return Vn(
    n,
    t,
    u.map((m, b) => {
      const _ = Math.max(0, Number(m.val) || 0) / x * d, y = u[b + 1], N = y ? Math.max(0, Number(y.val) || 0) / x * d : _ * 0.7, v = i.t + b * h + 2, $ = Math.max(4, h - 6), S = 1 - b * (0.45 / Math.max(1, u.length));
      return /* @__PURE__ */ M("g", { role: "listitem", children: [
        /* @__PURE__ */ s(
          "path",
          {
            d: `M ${g - _ / 2} ${v} L ${g + _ / 2} ${v} L ${g + N / 2} ${v + $} L ${g - N / 2} ${v + $} Z`,
            fill: l,
            fillOpacity: S,
            stroke: "var(--dx-surface-color)",
            strokeWidth: 1,
            onMouseEnter: () => a && c(g, v, `${t.title ?? m.cat}: ${m.val}`),
            onMouseLeave: () => f(),
            onClick: () => e.handleClick(t, m.cat, m.val, m.item),
            style: { cursor: "pointer" }
          }
        ),
        /* @__PURE__ */ M(
          "text",
          {
            x: g,
            y: v + $ / 2 + 4,
            textAnchor: "middle",
            className: ft.dataLabel,
            children: [
              m.cat,
              " · ",
              m.val
            ]
          }
        )
      ] }, b);
    })
  );
}
function bN(e, t, n, r, l) {
  const { pad: i, plotW: d, plotH: o, categories: a, tooltipVisible: c, showTip: f, hideTip: u } = e, x = [];
  t.data.forEach((y) => {
    const N = t.rowProperty ? String(y[t.rowProperty] ?? "") : "All";
    x.includes(N) || x.push(N);
  });
  const h = r.map((y) => y.val).filter((y) => Number.isFinite(y)), g = h.length ? Math.min(...h) : 0, m = h.length ? Math.max(...h) : 1, b = d / Math.max(1, a.length), p = o / Math.max(1, x.length), _ = (y) => m === g ? 0.6 : 0.15 + 0.85 * ((y - g) / (m - g));
  return Vn(
    n,
    t,
    /* @__PURE__ */ M(pt, { children: [
      x.map((y, N) => /* @__PURE__ */ s(
        "text",
        {
          x: i.l - 8,
          y: i.t + N * p + p / 2 + 4,
          textAnchor: "end",
          className: ft.tickLabel,
          children: y
        },
        y
      )),
      r.map((y, N) => {
        const v = t.data[N], $ = a.indexOf(y.cat), S = x.indexOf(
          t.rowProperty && v ? String(v[t.rowProperty] ?? "") : "All"
        );
        if ($ < 0 || S < 0) return null;
        const T = i.l + $ * b, A = i.t + S * p;
        return /* @__PURE__ */ M("g", { role: "listitem", children: [
          /* @__PURE__ */ s(
            "rect",
            {
              x: T + 1,
              y: A + 1,
              width: Math.max(1, b - 2),
              height: Math.max(1, p - 2),
              fill: l,
              fillOpacity: _(y.val),
              onMouseEnter: () => c && f(T + b / 2, A, `${t.title ?? y.cat}: ${y.val}`),
              onMouseLeave: () => u(),
              onClick: () => e.handleClick(t, y.cat, y.val, y.item),
              style: { cursor: "pointer" }
            }
          ),
          t.labels?.visible && /* @__PURE__ */ s(
            "text",
            {
              x: T + b / 2,
              y: A + p / 2 + 4,
              textAnchor: "middle",
              className: ft.dataLabel,
              children: y.val
            }
          )
        ] }, N);
      })
    ] })
  );
}
function yN(e, t, n) {
  const r = cN(t), l = e.colorFor(n, t);
  switch (t.type) {
    case "pie":
    case "donut":
      return dN(e, t, n, r, l);
    case "scatter":
    case "bubble":
      return uN(e, t, n, r, l);
    case "line":
    case "area":
      return fN(e, t, n, r, l);
    case "gauge":
      return pN(e, t, n, r, l);
    case "radar":
      return hN(e, t, n, r, l);
    case "funnel":
      return gN(e, t, n, r, l);
    case "heatmap":
      return bN(e, t, n, r, l);
    default:
      return _N(e, t, n, r, l);
  }
}
function lO({
  series: e,
  width: t = 600,
  height: n = 400,
  valueAxis: r,
  categoryAxis: l,
  showLegend: i = !0,
  tooltipVisible: d = !0,
  onSeriesClick: o,
  ariaLabel: a = "Chart",
  className: c
}) {
  const [f, u] = q(
    null
  ), x = Oe(() => {
    const C = /* @__PURE__ */ new Set();
    for (const D of e)
      for (const I of D.data) C.add(String(I[D.categoryProperty] ?? ""));
    return [...C];
  }, [e]), h = Oe(() => {
    const C = e.flatMap((I) => I.data.map((k) => Number(k[I.valueProperty]))).filter((I) => !Number.isNaN(I)), D = /* @__PURE__ */ new Map();
    for (const I of e) {
      if (!I.stack) continue;
      let k = D.get(I.stack);
      k || D.set(I.stack, k = /* @__PURE__ */ new Map());
      for (const O of I.data) {
        const E = String(O[I.categoryProperty] ?? ""), P = Number(O[I.valueProperty]);
        Number.isNaN(P) || k.set(E, (k.get(E) ?? 0) + P);
      }
    }
    for (const I of D.values()) C.push(...I.values());
    return C;
  }, [e]), g = r?.min ?? (h.length ? Math.min(0, ...h) : 0), m = r?.max ?? (h.length ? Math.max(...h) : 10), b = Oe(
    () => iN(g, m, r?.step),
    [g, m, r?.step]
  ), p = { t: 16, r: 16, b: 40, l: 56 }, _ = t - p.l - p.r, y = n - p.t - p.b, N = (C) => p.l + C / Math.max(1, x.length - 1) * _, v = (C) => p.t + (1 - (C - b.min) / (b.max - b.min || 1)) * y, $ = (C, D) => D.color ?? nl[C % nl.length], S = e.some((C) => Cl.has(C.type)), T = e.some((C) => aN.has(C.type)), A = {
    categories: x,
    scale: b,
    pad: p,
    plotW: _,
    plotH: y,
    xFor: N,
    yFor: v,
    colorFor: $,
    tooltipVisible: d,
    showTip: (C, D, I) => u({ x: C, y: D, text: I }),
    hideTip: () => u(null),
    handleClick: (C, D, I, k) => o?.({
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
      "aria-label": a,
      "aria-describedby": `${a.replace(/\s+/g, "-")}-table`,
      children: [
        /* @__PURE__ */ M(
          "svg",
          {
            width: t,
            height: n,
            className: ft.svg,
            role: "presentation",
            children: [
              S && r?.gridlines !== !1 && b.ticks.map((C) => /* @__PURE__ */ s(
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
              T && l?.gridlines && x.map((C, D) => /* @__PURE__ */ s(
                "line",
                {
                  x1: N(D),
                  x2: N(D),
                  y1: p.t,
                  y2: p.t + y,
                  className: ft.gridline
                },
                D
              )),
              S && b.ticks.map((C) => /* @__PURE__ */ s(
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
              T && x.map((C, D) => /* @__PURE__ */ s(
                "text",
                {
                  x: N(D),
                  y: p.t + y + 16,
                  textAnchor: "middle",
                  className: ft.tickLabel,
                  children: C
                },
                C
              )),
              S && r?.title && /* @__PURE__ */ s(
                "text",
                {
                  x: 12,
                  y: p.t + y / 2,
                  textAnchor: "middle",
                  transform: `rotate(-90,12,${p.t + y / 2})`,
                  className: ft.axisTitle,
                  children: r.title
                }
              ),
              T && l?.title && /* @__PURE__ */ s(
                "text",
                {
                  x: p.l + _ / 2,
                  y: n - 4,
                  textAnchor: "middle",
                  className: ft.axisTitle,
                  children: l.title
                }
              ),
              e.some((C) => C.type === "radar") && mN(A),
              e.map((C, D) => yN(A, C, D))
            ]
          }
        ),
        f && /* @__PURE__ */ s(
          "div",
          {
            className: ft.tooltip,
            style: { left: f.x, top: f.y - 28 },
            children: f.text
          }
        ),
        i && /* @__PURE__ */ s("div", { className: ft.legend, children: e.map((C, D) => /* @__PURE__ */ M("span", { className: ft.legendItem, children: [
          /* @__PURE__ */ s(
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
            id: `${a.replace(/\s+/g, "-")}-table`,
            children: [
              /* @__PURE__ */ s("caption", { children: a }),
              /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ M("tr", { children: [
                /* @__PURE__ */ s("th", { children: "Series" }),
                /* @__PURE__ */ s("th", { children: "Category" }),
                /* @__PURE__ */ s("th", { children: "Value" })
              ] }) }),
              /* @__PURE__ */ s("tbody", { children: e.map(
                (C) => C.data.map((D, I) => /* @__PURE__ */ M("tr", { children: [
                  /* @__PURE__ */ s("td", { children: C.title ?? "" }),
                  /* @__PURE__ */ s("td", { children: C.rowProperty ? `${String(D[C.rowProperty] ?? "")} / ${String(D[C.categoryProperty] ?? "")}` : String(D[C.categoryProperty] ?? "") }),
                  /* @__PURE__ */ s("td", { children: String(D[C.valueProperty] ?? "") })
                ] }, `${C.title}-${I}`))
              ) })
            ]
          }
        )
      ]
    }
  );
}
function aO({ query: e, children: t }) {
  return Vs(e) ? /* @__PURE__ */ s(pt, { children: t }) : null;
}
function iO({ children: e, className: t }) {
  return /* @__PURE__ */ s("div", { role: "status", "aria-live": "polite", className: t, children: e });
}
function cO() {
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
  i_ as ALERT_ICON,
  bS as Accordion,
  tS as Alert,
  vS as AutoComplete,
  lS as AutoGrid,
  hS as Avatar,
  kN as Badge,
  oO as Barcode,
  iS as Body,
  KS as Breadcrumb,
  yn as Button,
  wN as Card,
  XS as Carousel,
  lO as Chart,
  KN as CheckBox,
  kS as CheckBoxList,
  CS as ColorPicker,
  sS as Column,
  BS as ContextMenuProvider,
  Sr as DEFAULT_OPERATOR_BY_TYPE,
  Ox as DEFAULT_PALETTE,
  Eb as DEFAULT_THEMES,
  FN as DataFilter,
  HN as DataGrid,
  UN as DataList,
  AS as DatePicker,
  cl as Dialog,
  YN as DialogProvider,
  xS as DropDown,
  PS as DropZone,
  $N as EmptyState,
  ol as FILTER_OPERATORS,
  qS as FabMenu,
  Nr as Field,
  TN as Fieldset,
  Zg as Footer,
  CN as Form,
  EN as FormField,
  eO as Gantt,
  eb as Header,
  JN as HtmlEditor,
  Me as Icon,
  Yr as Input,
  qN as Label,
  aS as Layout,
  WS as Link,
  wS as ListBox,
  iO as LiveRegion,
  ES as Mask,
  aO as MediaQuery,
  zv as Menu,
  $l as MenuItem,
  TS as Numeric,
  xc as Pager,
  HS as PanelMenu,
  FS as PanelMenuItem,
  $S as Password,
  JS as PickList,
  tO as Pivot,
  eS as PopupProvider,
  US as ProfileMenu,
  dS as Progress,
  sO as QRCode,
  NS as RadioButtonList,
  DS as Rating,
  rS as Row,
  QS as Scheduler,
  zS as SecurityCode,
  sr as Select,
  SS as SelectBar,
  fb as Sidebar,
  cS as SidebarToggle,
  LS as SignaturePad,
  nS as Skeleton,
  MS as Slider,
  OS as SplitButton,
  VS as Splitter,
  oS as Stack,
  SN as Stat,
  GS as Steps,
  WN as Switch,
  ON as Table,
  gS as Tabs,
  dl as Text,
  yS as TextArea,
  Ld as TextBox,
  uS as ThemeSwitcher,
  fS as ThemeToggle,
  IS as TimeSpanPicker,
  nO as Timeline,
  ZN as ToastProvider,
  YS as Toc,
  zb as ToggleButton,
  GN as Tooltip,
  ZS as Tree,
  RS as Upload,
  rO as VirtualGrid,
  Ec as aggregateValue,
  al as applyFilters,
  $c as applyGridState,
  fo as collectGroupKeys,
  nr as columnValue,
  RN as compare,
  jN as custom,
  Nc as cycleSort,
  po as defaultOperatorForType,
  DN as email,
  Uo as formatMasked,
  is as formatValue,
  pS as getAppearance,
  as as getByPath,
  _S as getTheme,
  vc as groupItems,
  NN as iconNames,
  ll as matchesFilters,
  zN as maxLength,
  IN as minLength,
  Oc as paginate,
  MN as pattern,
  LN as range,
  AN as required,
  PN as requiredTrue,
  rl as resolveVariant,
  $i as runValidators,
  Bb as setAppearance,
  jb as setTheme,
  Hr as shadeClass,
  qi as sortItems,
  Sc as sortedItems,
  Fo as subscribe,
  Tc as toCsv,
  ji as toFilterString,
  Ui as toODataFilterString,
  jS as useContextMenu,
  VN as useDialog,
  Oi as useFormContext,
  BN as useFormField,
  cO as useLiveRegion,
  Vs as useMediaQuery,
  QN as usePopup,
  mS as useThemeService,
  XN as useToast
};
